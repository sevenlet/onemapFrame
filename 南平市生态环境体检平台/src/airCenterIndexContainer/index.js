window.airCenterIndexContainerComponent = {
template: 
`<div id="t-l-c-airCenterIndexContainer" class="t-l-c-airCenterIndexContainer" >` +
`<t-rect id="t-rect-54ba.408ebfad2" class="airCenterIndexContainer-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-component v-if="state.showPollutionIndex === true" id="t-component-3a14.f07066497" class="airCenterIndexContainer-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName">` +
`</t-component>` +
`<t-component id="t-component-3689.537b2a738" class="airCenterIndexContainer-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName">` +
`</t-component>` +
`<t-component v-if="state.showWeatherIndex === true" id="t-component-7a64.e226fd22f" class="airCenterIndexContainer-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName">` +
`</t-component>` +
`<t-rect v-if="state.showContent === true" id="t-rect-a122.67a8288a4" class="airCenterIndexContainer-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1734686591589">` +
`</t-rect>` +
`<t-text v-if="state.showContent === false" id="t-text-50f5.0d6af7e03" class="airCenterIndexContainer-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle" :show-title="tTextx0x5ComputedData.showTitle" @click="onclick1734686575114">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-54ba.408ebfad2":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-3a14.f07066497":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-3689.537b2a738":{"attributeName":"tComponentx0x2","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-7a64.e226fd22f":{"attributeName":"tComponentx0x3","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-rect-a122.67a8288a4":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-50f5.0d6af7e03":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}}};
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
   isShow: true,
   test1: "",
   test: "",
   showContent: false,
   showWeatherIndex: true,
   showPollutionIndex: true,
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
            default: {"width":"555px","height":"92px","backgroundColor":"var(--area-slope-bg)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","top":"0px","left":"0px","opacity":"0","visibility":"hidden"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"555px","height":"92px","backgroundColor":"var(--area-slope-bg)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","top":"0px","left":"0px","opacity":"0","visibility":"hidden"}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"498px","height":"34px","margin":"0 auto","backgroundColor":"rgba(111, 30, 30, 0)","position":"unset","left":"8px","top":"8px","transition":"0.3s","pointerEvents":"none","cursor":"auto","opacity":"0","visibility":"hidden"},
            
            },
 default: { 
 
name:"airQualityIndexComponent",
cStyle:{"wrapper":{"default":{"width":"498px","height":"34px","margin":"0 auto","backgroundColor":"rgba(111, 30, 30, 0)","position":"unset","left":"8px","top":"8px","transition":"0.3s","pointerEvents":"none","cursor":"auto","opacity":"0","visibility":"hidden"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airQualityIndex",
componentName:"airQualityIndexComponent", 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"154px","height":"42px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"388px","top":"48px","transition":"0.3s","opacity":"0","visibility":"hidden"},
            
            },
 default: { 
 
name:"airInterpolationComponent",
cStyle:{"wrapper":{"default":{"width":"154px","height":"42px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"388px","top":"48px","transition":"0.3s","opacity":"0","visibility":"hidden"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airInterpolation",
componentName:"airInterpolationComponent", 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"width":"286px","height":"34px","margin":"0 auto","backgroundColor":"rgba(111, 30, 30, 0)","position":"unset","left":"8px","top":"52px","transition":"0.3s","pointerEvents":"none","cursor":"auto","animationName":"","opacity":"0","visibility":"hidden"},
            
            },
 default: { 
 
name:"airWeatherIndexComponent",
cStyle:{"wrapper":{"default":{"width":"286px","height":"34px","margin":"0 auto","backgroundColor":"rgba(111, 30, 30, 0)","position":"unset","left":"8px","top":"52px","transition":"0.3s","pointerEvents":"none","cursor":"auto","animationName":"","opacity":"0","visibility":"hidden"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airWeatherIndex",
componentName:"airWeatherIndexComponent", 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"39px","height":"34px","position":"unset","left":"507px","top":"7px","backgroundImage":"var(--business-target-fold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"39px","height":"34px","position":"unset","left":"507px","top":"7px","backgroundImage":"var(--business-target-fold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--business-target-fold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"39px","height":"34px","color":"var(--t-font-color-gy1)","fontSize":"0px","backgroundImage":"var(--business-target-unfold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"507px","top":"0px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"39px","height":"34px","color":"var(--t-font-color-gy1)","fontSize":"0px","backgroundImage":"var(--business-target-unfold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"507px","top":"0px","cursor":"pointer","animationName":""}}},
showTitle:true, 
 },
},
});
const watchIndexVisible = () => {
// 态势概览 烟花爆竹专题显示气象指标
watch(() => global.leftSubjectActiveMenu, (newValue) => {
  if (newValue) {
    if (global.leftSubjectActiveMenuList.some(item => item.label === '态势概览') || global.leftSubjectActiveMenuList.some(item => item.label === '烟花爆竹')) {
      state.showWeatherIndex = true;
    }
  }
})

watch([() => global.air.timeType, () => global.air.tabSelect], () => {
  // 先设置显示，再根据条件判断
  state.showWeatherIndex = true;
  state.showPollutionIndex = true;
  setTimeout(() => {
    if (state.showContent) {
      // 设置气象选项卡显示隐藏
      setDomVisible('t-component-7a64.e226fd22f', true);
      // 设置污染物指标选项卡显示隐藏
      setDomVisible('t-component-3a14.f07066497', true);
      // 设置背景图动态组件显示隐藏
      setDomVisible('t-rect-54ba.408ebfad2', true);
    }
  });
  // 设置插值图组件top、left值
  setDomTopValue('t-component-3689.537b2a738', '48px');
  setDomLeftValue('t-component-3689.537b2a738', '388px');
  // 设置背景图width、left、height值
  const bgDom = document.getElementById('t-rect-54ba.408ebfad2');
  if (bgDom) {
    bgDom.style.width = '555px';
    bgDom.style.height = '92px';
    bgDom.style.left = '0';
  }
  // 选中小时，显示气象指标
  if (global.air.timeType !== 'hour') {
    state.showWeatherIndex = false;
    sendClearWeatherMes();
  }
  // 选中空气概况时，显示两个指标 airOverviewContentComponent airControlProgressContentComponent
  if (global.air.tabSelect === 'airControlProgressContentComponent') {
    state.showWeatherIndex = false;
    state.showPollutionIndex = false;
    // 设置插值图组件top、left值
    setDomTopValue('t-component-3689.537b2a738', '4px');
    setDomLeftValue('t-component-3689.537b2a738', '339px');
    // 设置背景图width、left、height值
    if (bgDom) {
      bgDom.style.width = '180px';
      bgDom.style.height = '48px';
      bgDom.style.left = '374px';
    }
    sendClearWeatherMes();
  }
});

};
const setContentVisible = () => {
state.showContent = !state.showContent;
// 设置背景图显示隐藏
setDomVisible('t-rect-54ba.408ebfad2', state.showContent);
// 设置插值图动态组件显示隐藏
setDomVisible('t-component-3689.537b2a738', state.showContent);
// 设置气象选项卡显示隐藏
setDomVisible('t-component-7a64.e226fd22f', state.showContent);
// 设置污染物指标选项卡显示隐藏
setDomVisible('t-component-3a14.f07066497', state.showContent);

// 设置选点按钮位置
const pointDom = document.getElementById('t-component-2111.40f7efb23');
if(pointDom) {
  if(state.showContent) {
    pointDom.style.top = '230px';
  } else {
    pointDom.style.top = '190px';
  }
}
};
const setNavStyle = () => {
// 设置背景图过渡属性值
const bgDom = document.getElementById('t-rect-54ba.408ebfad2');
if (bgDom) {
  // 用settimeout 加原因：默认加上时，切换专题时，背景会闪现一下
  setTimeout(() => {
    bgDom.style.transition = '0.3s';
  });
}

};
const sendClearWeatherMes = () => {
// 给地图发消息- 清除所有气象图层的消息
rootData.rootSocket.emit('message', {
  type: 'closeWeather',
  room: global.socketRoom,
  data: {},
})
};
const onclick1734686591589 = () => {
// 执行自定义方法
setContentVisible();
};
const onclick1734686575114 = () => {
// 执行自定义方法
setContentVisible();
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-airCenterIndexContainer', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
watchIndexVisible();
onMounted(() => {
setPageScale('t-l-c-airCenterIndexContainer', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setNavStyle();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

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
tComponentx0x1ComputedData,
tComponentx0x2ComputedData,
tComponentx0x3ComputedData,
tRectx0x4ComputedData,
tTextx0x5ComputedData,
onclick1734686591589,
onclick1734686575114,
};
},
};