window.expandOrFoldComponent = {
template: 
`<div id="t-l-c-expandOrFold" class="t-l-c-expandOrFold" >` +
`<t-rect id="t-rect-8bea.79ed1f86" class="expandOrFold-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="global.bottomMenuExpandState === true" id="t-rect-6b06.544bfc9eb" class="expandOrFold-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="replaceCssVariables(filterData(global.bottomMenuButtonText, componentPropBindingMap?.['t-rect-6b06.544bfc9eb']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle" @click="onclick1739239763469">` +
`</t-rect>` +
`<t-rect v-if="global.bottomMenuExpandState === false" id="t-rect-6d73.3d271f17f" class="expandOrFold-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="replaceCssVariables(filterData(global.bottomMenuButtonText, componentPropBindingMap?.['t-rect-6d73.3d271f17f']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle" @click="onclick1739239780605">` +
`</t-rect>` +
`<t-rect id="t-rect-358a.adf7c650e" class="expandOrFold-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-8bea.79ed1f86":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-6b06.544bfc9eb":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-6d73.3d271f17f":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-358a.adf7c650e":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   expandState: false,
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
            default: {"width":"1921px","height":"100px","position":"unset","left":"0px","top":"0px","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","backgroundImage":"var(--t-footer-background)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","pointerEvents":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1921px","height":"100px","position":"unset","left":"0px","top":"0px","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","backgroundImage":"var(--t-footer-background)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","pointerEvents":"none"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"178px","height":"61px","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundImage":"var(--t-footer-fold-button-background),var(--t-footer-button-background-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto","-webkit-mask-size":"","backgroundPosition":"50% 5%,50% 50%","-webkit-mask-position":"","top":"6px","left":"873px","position":"unset","fontSize":"20px","fontFamily":"优设标题黑","color":"rgba(255, 255, 255, 1)","marginBottom":"0px","marginTop":"auto","display":"block","paddingTop":"15px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"概览",
active:false,
cStyle:{"wrapper":{"default":{"width":"178px","height":"61px","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundImage":"var(--t-footer-fold-button-background),var(--t-footer-button-background-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto","-webkit-mask-size":"","backgroundPosition":"50% 5%,50% 50%","-webkit-mask-position":"","top":"6px","left":"873px","position":"unset","fontSize":"20px","fontFamily":"优设标题黑","color":"rgba(255, 255, 255, 1)","marginBottom":"0px","marginTop":"auto","display":"block","paddingTop":"15px","animationName":"","cursor":"pointer"},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"178px","height":"61px","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundImage":"var(--t-footer-expand-button-background),var(--t-footer-button-background-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto","-webkit-mask-size":"","backgroundPosition":"50% 5%,50% 50%","-webkit-mask-position":"","top":"6px","left":"873px","position":"unset","fontSize":"20px","fontFamily":"优设标题黑","color":"rgba(255, 255, 255, 1)","marginBottom":"0px","marginTop":"auto","display":"block","paddingTop":"15px","transition":".4s","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"概览",
active:false,
cStyle:{"wrapper":{"default":{"width":"178px","height":"61px","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundImage":"var(--t-footer-expand-button-background),var(--t-footer-button-background-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto","-webkit-mask-size":"","backgroundPosition":"50% 5%,50% 50%","-webkit-mask-position":"","top":"6px","left":"873px","position":"unset","fontSize":"20px","fontFamily":"优设标题黑","color":"rgba(255, 255, 255, 1)","marginBottom":"0px","marginTop":"auto","display":"block","paddingTop":"15px","transition":".4s","cursor":"pointer"},"hover":{"backgroundImage":"var(--t-footer-expand-button-background-hover),var(--t-footer-button-background-hover)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto","-webkit-mask-size":"","backgroundPosition":"50% 5%,50% 50%","-webkit-mask-position":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"946px","height":"675px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"-254px","left":"493px","pointerEvents":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"946px","height":"675px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"-254px","left":"493px","pointerEvents":"none"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const handleExpand = () => {
global.bottomMenuExpandState = !global.bottomMenuExpandState
};
const setBottomMenuPosition = (menuTop,top) => {
/**
 * 设置中间搜索面板的left值 根据状态去设置动态组件的位置
 */

const ele = document.getElementById('t-component-d342.f8c27d49c');
const menuEle = document.getElementById('t-component-bc51.cefb01cb9');

if (ele) {
  // if (aaa === 'open') {
    ele.style.top = top;
    menuEle.style.top = menuTop;
  // } 
  // if (aaa === 'close') {
  //   ele.style.top = '1350px'
  // } 
}
};
const onclick1739239780605 = () => {
// 执行自定义方法
handleExpand();
// 执行自定义方法
setBottomMenuPosition("56px","-10px");
};
const onclick1739239763469 = () => {
// 执行自定义方法
handleExpand();
// 执行自定义方法
setBottomMenuPosition("236px","103px");
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-expandOrFold', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-expandOrFold', global.appScaleMode, 'normal');
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
onclick1739239763469,
onclick1739239780605,
};
},
};