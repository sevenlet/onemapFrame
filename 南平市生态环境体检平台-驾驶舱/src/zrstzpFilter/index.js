window.zrstzpFilterComponent = {
template: 
`<div id="t-l-c-zrstzpFilter" class="t-l-c-zrstzpFilter" >` +
`<t-rect v-if="state.isFold === false" id="t-rect-f936.6f8a7da1c" class="zrstzpFilter-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-radio v-if="state.isFold === false" id="t-radio-3905.142ade27f" class="zrstzpFilter-t-radio-0-1"  :options="tRadiox0x1ComputedData.options" :active="replaceCssVariables(filterData(global.dashboardGlobalVariables.zrstFilter, componentPropBindingMap?.['t-radio-3905.142ade27f']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tRadiox0x1ComputedData.alias" :disabled="tRadiox0x1ComputedData.disabled" :border="tRadiox0x1ComputedData.border" :size="tRadiox0x1ComputedData.size" :is-use-button="tRadiox0x1ComputedData.isUseButton" :c-style="tRadiox0x1ComputedData.cStyle" @change="onchange1772084924204">` +
`</t-radio>` +
`<t-rect v-if="state.isFold === true" id="t-rect-b474.c735f2803" class="zrstzpFilter-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-21cc.81b13d38a" class="zrstzpFilter-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1772086276396">` +
`</t-rect>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-f936.6f8a7da1c":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-radio-3905.142ade27f":{"attributeName":"tRadiox0x1","options":{"filters":[]},"active":{"filters":[]},"alias":{"filters":[]},"disabled":{"filters":[]},"border":{"filters":[]},"size":{"filters":[]},"isUseButton":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-b474.c735f2803":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-21cc.81b13d38a":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   isFold: false,
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
            default: {"width":"327px","height":"30px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--syjj-tab-bgc)","borderTopLeftRadius":"14px","borderTopRightRadius":"14px","borderBottomLeftRadius":"14px","borderBottomRightRadius":"14px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"327px","height":"30px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--syjj-tab-bgc)","borderTopLeftRadius":"14px","borderTopRightRadius":"14px","borderBottomLeftRadius":"14px","borderBottomRightRadius":"14px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRadiox0x1: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"280px","height":"30px","justifyContent":"space-between","flexDirection":"row","gap":"auto","position":"unset","left":"10px","top":"0px"},
            
            },
 default: { 
 
options:[{"label":"南平市区县","value":"1","disabled":false},{"label":"武夷山环带","value":"wyshd","disabled":false},{"label":"国家公园","value":"gjgy","disabled":false}],
active:"1",
alias:{"label":"value","value":"label","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"280px","height":"30px","justifyContent":"space-between","flexDirection":"row","gap":"auto","position":"unset","left":"10px","top":"0px"}},"itemWrapper":{"default":{"padding":0,"margin":0,"justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","gap":"10px"}},"label":{"default":{"padding":0,"color":"var(--t-white)","background":"unset","backgroundClip":"unset","fontSize":"var(--t-radio-text-size)","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","width":"auto","height":""},"hover":{"color":"var(--t-num-color-blue)","background":"unset","backgroundClip":"unset"},"active":{"color":"var(--t-num-color-blue)","background":"unset","backgroundClip":"unset"}},"radioBorder":{"default":{"background":"rgba(255, 255, 255, 1)","width":"12px","height":"12px","border":"auto !important","borderTop":"1px Solid var(--t-radio-border-color)","borderLeft":"1px Solid var(--t-radio-border-color)","borderBottom":"1px Solid var(--t-radio-border-color)","borderRight":"1px Solid var(--t-radio-border-color)"},"hover":{"borderLeft":"1px solid var(--t-radio-hover-border-color)","borderTop":"1px solid var(--t-radio-hover-border-color)","borderRight":"1px solid var(--t-radio-hover-border-color)","borderBottom":"1px solid var(--t-radio-hover-border-color)"},"active":{"border":"auto !important","borderTop":"1px Solid var(--t-radio-active-border-color)","borderLeft":"1px Solid var(--t-radio-active-border-color)","borderBottom":"1px Solid var(--t-radio-active-border-color)","borderRight":"1px Solid var(--t-radio-active-border-color)"}},"circle":{"default":{"background":"var(--t-radio-bg-color)","width":"4px","height":"4px","fillType":"color"},"active":{"background":"var(--t-radio-active-bg-color)","fillType":"color","color":"var(--sjyy-theme)","backgroundColor":"var(--t-num-color-blue)","borderLeft":"1px solid var(--t-search-text-color)","borderTop":"1px solid var(--t-search-text-color)","borderRight":"1px solid var(--t-search-text-color)","borderBottom":"1px solid var(--t-search-text-color)"}},"radioButton":{"default":{"width":"px","height":"px","background":"rgba(255, 255, 255, 1)","border":"auto !important","borderTop":"1px Solid var(--t-radio-button-border-color)","borderLeft":"0px Solid var(--t-radio-button-border-color)","borderBottom":"1px Solid var(--t-radio-button-border-color)","borderRight":"1px Solid var(--t-radio-button-border-color)"},"active":{"background":"var(--t-radio-button-active-bg-color)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","fillType":"color"}},"radioButtonText":{"default":{"textAlign":"center","border":"unset","color":"var(--t-radio-button-color)","background":"unset","backgroundClip":"unset"},"active":{"color":"var(--t-radio-button-active-color)","border":"unset"},"hover":{"color":"var(--t-radio-button-hover-color)"}},"itemFirstWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"4px","border":"auto !important","borderTop":"1px Solid var(--t-radio-button-border-color)","borderLeft":"1px Solid var(--t-radio-button-border-color)","borderBottom":"1px Solid var(--t-radio-button-border-color)","borderRight":"1px Solid var(--t-radio-button-border-color)"}},"itemLastWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"0px"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"35px","height":"30px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"292px","top":"0px","backgroundColor":"var(--syjj-tab-bgc)","borderTopLeftRadius":"14px","borderTopRightRadius":"14px","borderBottomLeftRadius":"14px","borderBottomRightRadius":"14px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"35px","height":"30px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"292px","top":"0px","backgroundColor":"var(--syjj-tab-bgc)","borderTopLeftRadius":"14px","borderTopRightRadius":"14px","borderBottomLeftRadius":"14px","borderBottomRightRadius":"14px","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"19px","height":"17px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"300px","top":"7px","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-02-26/0d4d14066d114751b04eba1d93789f4e.png)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"19px","height":"17px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"300px","top":"7px","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-02-26/0d4d14066d114751b04eba1d93789f4e.png)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const handleFold = () => {
// 处理展开折叠功能
state.isFold = !state.isFold;
};
const sendMapMsg = () => {
// 添加指标图层
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeZrstMap', // 消息名称
  data: {
    // 当前选中的单选框
    indicator: global.dashboardGlobalVariables.zrstFilter,
  },
});
};
const onchange1772084924204 = (data,selectOption) => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'dashboardGlobalVariables.zrstFilter',
                    value:data,
                    data: {
                      dashboardGlobalVariables:{zrstFilter: data}
                    },
                  });
// 执行自定义方法
sendMapMsg();
};
const onclick1772086276396 = () => {
// 执行自定义方法
handleFold();
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-zrstzpFilter', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-zrstzpFilter', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRadiox0x1ComputedData = computed(() => _.merge({}, componentState.tRadiox0x1.default, componentState.tRadiox0x1?.[state.screenSize]));

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
tRadiox0x1ComputedData,
tRectx0x2ComputedData,
tRectx0x3ComputedData,
onchange1772084924204,
onclick1772086276396,
};
},
};