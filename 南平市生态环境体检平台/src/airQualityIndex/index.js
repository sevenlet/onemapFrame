window.airQualityIndexComponent = {
template: 
`<div id="t-l-c-airQualityIndex" class="t-l-c-airQualityIndex" >` +
`<t-tabs id="t-tabs-ccea.43efdd865" class="airQualityIndex-t-tabs-0-0"  :alias="tTabsx0x0ComputedData.alias" :data="replaceCssVariables(filterData(global.air.centerIndexList, componentPropBindingMap?.['t-tabs-ccea.43efdd865']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :model-value="tTabsx0x0ComputedData.model-value" :tab-position-extend="tTabsx0x0ComputedData.tabPositionExtend" :stretch="tTabsx0x0ComputedData.stretch" :c-style="tTabsx0x0ComputedData.cStyle" :active-tab="replaceCssVariables(filterData(global.air.centerIndexSelect, componentPropBindingMap?.['t-tabs-ccea.43efdd865']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @tab-click="ontabClick1733389243380">` +
`</t-tabs>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-tabs-ccea.43efdd865":{"attributeName":"tTabsx0x0","alias":{"filters":[]},"data":{"filters":[]},"model-value":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]},"activeTab":{"filters":[]}},"t-rect-959b.324da6995":{"attributeName":"tRectx0x1"},"t-text-c3bc.f576115d8":{"attributeName":"tTextx0x2"}};
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
tTabsx0x0: {
defaultStyle: {
            default: {"position":"unset","width":"498px","height":"34px","backgroundColor":"","fontSize":"14px","lineHeight":"26px","animationName":"","paddingRight":"0px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","top":"0px","left":"0px"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[],
'model-value':"work",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"position":"unset","width":"498px","height":"34px","backgroundColor":"","fontSize":"14px","lineHeight":"26px","animationName":"","paddingRight":"0px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","top":"0px","left":"0px"}},"itemWrapper":{"default":{"height":"34px","width":"auto","lineHeight":"32px","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontWeight":"500","paddingRight":"4px !important","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingTop":"0px","paddingLeft":"4px !important"},"active":{"fontSize":"var(--business-text-size-14)","color":"var(--targer-font-active)","backgroundColor":"rgba(37, 156, 224, 0)","borderLeft":"1px solid var(--t-white)","borderTop":"1px solid var(--t-white)","borderRight":"1px solid var(--t-white)","borderBottom":"1px solid var(--t-white)","background":"var(--targer-btn-active-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","box-shadow":"var(--targer-btn-active-shadow) 0px 0px 11px 0px inset","backdropFilter":"blur(0px)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","height":"34px","lineHeight":"32px","paddingTop":"0px","width":"auto"},"hover":{"fontSize":"var(--business-text-size-14)","color":"var(--targer-font-active)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","height":"34px","borderLeft":"1px solid var(--t-white)","borderTop":"1px solid var(--t-white)","borderRight":"1px solid var(--t-white)","borderBottom":"1px solid var(--t-white)","background":"var(--targer-btn-active-bg)","box-shadow":"var(--targer-btn-active-shadow) 0px 0px 11px 0px inset","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","lineHeight":"32px","paddingTop":"0px"}},"itemActiveBorder":{"active":{"backgroundColor":"rgba(255, 0, 0, 0)"},"default":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"rgba(222, 233, 14, 0)"}},"itemLabel":{"default":{"marginRight":"0px","paddingRight":"0px","fontSize":"var(--business-text-size-14)"}}},
activeTab:"AQI", 
 },
},
});
const initData = () => {
// 获取并更新中心指标列表，同时返回数据供后续使用
function updateCenterIndexList(timeType) {
  const curIndexList = getCenterIndexList('air', timeType);

  rootData.rootEmit('rootData:change', {
    key: 'air.centerIndexList',
    value: curIndexList,
  });

  return curIndexList;
}

// 监听时间类型变化，更新指标列表
watch(
  () => global.air.timeType,
  (newVal) => {
    updateCenterIndexList(newVal);
  }
);

// 监听左侧菜单激活项变化，重置指标列表并设置默认选中项
watch(
  () => global.leftSubjectActiveMenu,
  (newValue) => {
    // 始终以 'hour' 类型重新加载指标列表
    const curIndexList = updateCenterIndexList('hour');

    let defaultIndexName;

    if (newValue === '态势概览' || newValue === '炼山') {
      defaultIndexName = curIndexList?.[0]?.name;
    } else if (newValue === '烟花爆竹') {
      defaultIndexName = curIndexList?.[2]?.name;
    }

    // 仅在能确定默认值时才触发更新
    if (defaultIndexName) {
      rootData.rootEmit('rootData:change', {
        key: 'air.centerIndexSelect',
        value: defaultIndexName,
      });
      // 发送socket消息
      rootData.rootSocket.emit('message', {
        room: global.socketRoom, // 房间号
        type: 'changePollute', // 消息名称
        source: 'polluteTool',
        data: {
          'POLLUTE': defaultIndexName,
        },
      });
    }
  },
  { immediate: true }
);
};
const handleTabChange = (tabValue) => {
if (tabValue !== global.air.centerIndexSelect) {
  // 修改全局变量
  rootData.rootEmit(
    // 固定的消息名称，不能修改
    'rootData:change',
    {
      // 全局变量的键名
      key: 'air.centerIndexSelect',
      // 将要修改的全局变量的键值
      value: tabValue,
    },
  );
  // 发送socket消息
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: 'changePollute', // 消息名称
    source: 'polluteTool',
    data: {
      'POLLUTE': tabValue,
    },
  });
}
};
const ontabClick1733389243380 = (data) => {
// 执行自定义方法
handleTabChange(data.name);
};
const onclick1734406453346 = () => {
// 执行自定义方法
setIndexVisible();
};
const onclick1734406464949 = () => {
// 执行自定义方法
setIndexVisible();
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-airQualityIndex', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-airQualityIndex', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTabsx0x0ComputedData = computed(() => _.merge({}, componentState.tTabsx0x0.default, componentState.tTabsx0x0?.[state.screenSize]));

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
tTabsx0x0ComputedData,
ontabClick1733389243380,
};
},
};