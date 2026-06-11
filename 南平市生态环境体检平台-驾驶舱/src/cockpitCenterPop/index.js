window.cockpitCenterPopComponent = {
template: 
`<div id="t-l-c-cockpitCenterPop" class="t-l-c-cockpitCenterPop" >` +
`<t-rect id="t-rect-2e88.9a8a1ed2b" class="cockpitCenterPop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-9ee1.ec8130f44" class="cockpitCenterPop-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-03db.65ad46ad" class="cockpitCenterPop-t-text-0-2"  :label="replaceCssVariables(filterData(state.dialogTitle, componentPropBindingMap?.['t-text-03db.65ad46ad']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-46ee.be203adb1" class="cockpitCenterPop-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1742797597302_0_0">` +
`</t-rect>` +
`<t-component id="t-component-5c24.40959d27" class="cockpitCenterPop-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :loading="tComponentx0x4ComputedData.loading" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName" :page-id="tComponentx0x4ComputedData.pageId" :page-code="tComponentx0x4ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-9a56.d2768158a" class="cockpitCenterPop-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :loading="tComponentx0x5ComputedData.loading" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName" :page-id="tComponentx0x5ComputedData.pageId" :page-code="tComponentx0x5ComputedData.pageCode">` +
`</t-component>` +
`<t-text-common id="t-text-common-13d9.227b6b3e4" class="cockpitCenterPop-t-text-common-0-6"  :label="tTextCommonx0x6ComputedData.label" :editable="tTextCommonx0x6ComputedData.editable" :c-style="tTextCommonx0x6ComputedData.cStyle">` +
`</t-text-common>` +
`<t-chart-design id="t-chart-design-35d3.fdedae695" class="cockpitCenterPop-t-chart-design-0-7"  :register-map-name="tChartDesignx0x7ComputedData.registerMapName" :geo-json="tChartDesignx0x7ComputedData.geoJson" :empty-img="tChartDesignx0x7ComputedData.emptyImg" :c-style="tChartDesignx0x7ComputedData.cStyle" :options="replaceCssVariables(filterData(state.chartOption, componentPropBindingMap?.['t-chart-design-35d3.fdedae695']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @com-click="oncomClick1768544438263">` +
`</t-chart-design>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-2e88.9a8a1ed2b":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-9ee1.ec8130f44":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-03db.65ad46ad":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-46ee.be203adb1":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-5c24.40959d27":{"attributeName":"tComponentx0x4","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-9a56.d2768158a":{"attributeName":"tComponentx0x5","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-13d9.227b6b3e4":{"attributeName":"tTextCommonx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-35d3.fdedae695":{"attributeName":"tChartDesignx0x7","registerMapName":{"filters":[]},"geoJson":{"filters":[]},"emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}}};
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
   RESPONSIBLE_UNIT: "",
   tableTitle: "",
   chartOption: {},
   cardList: [{"title":"责任单位","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-26/e29ce8ee41224817ad9913510f7329df.png","num":0,"numColor":"#00FFFF","total":"","unit":"个"},{"title":"任务总数","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/2911a043b524469eb2ed7f0bff0e5341.png","num":0,"numColor":"#00FFFF","total":"","unit":"个"},{"title":"已完成","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/f119f3f3cd7e4e3eb043b646c3e681bd.png","num":0,"numColor":"#01DA21","total":"","unit":"个"},{"title":"序时任务","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png","num":0,"numColor":"#FFC641","total":"","unit":"个"},{"title":"滞后任务","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png","num":0,"numColor":"#FF3636","total":"","unit":"个"}],
   dialogTitle: "",
   selectProgress: "null",
   selectYear: "",
   tableList: [],
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
            default: {"width":"1534px","height":"941px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"187px","top":"74px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1534px","height":"941px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"187px","top":"74px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1535px","height":"47px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"187px","top":"75px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1535px","height":"47px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"187px","top":"75px","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"589px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"20px","fontFamily":"方正综艺","top":"87px","left":"218px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"589px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"20px","fontFamily":"方正综艺","top":"87px","left":"218px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none var(--business-btn-default)","borderTop":"1px none var(--business-btn-default)","borderRight":"1px none var(--business-btn-default)","borderBottom":"1px none var(--business-btn-default)","position":"unset","left":"1675px","top":"86px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"var(--t-point-pop-close-btn)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none var(--business-btn-default)","borderTop":"1px none var(--business-btn-default)","borderRight":"1px none var(--business-btn-default)","borderBottom":"1px none var(--business-btn-default)","position":"unset","left":"1675px","top":"86px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"var(--t-point-pop-close-btn)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}},"numBox":{"default":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"1475px","height":"70px","margin":"0 auto","position":"unset","left":"220px","top":"142px"},
            
            },
 default: { 
 
name:"assessmentCardListComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"1475px","height":"70px","margin":"0 auto","position":"unset","left":"220px","top":"142px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/assessmentCardList",
componentName:"assessmentCardListComponent",
pageId:"c1b821cd8c9646a4bc1c48b0c74f0785",
pageCode:"assessmentCardList", 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"1476px","height":"33px","margin":"0 auto","position":"unset","left":"219px","top":"221px"},
            
            },
 default: { 
 
name:"dialogTitleComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"1476px","height":"33px","margin":"0 auto","position":"unset","left":"219px","top":"221px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/dialogTitle",
componentName:"dialogTitleComponent",
pageId:"051aca1b22bc4dbeb1baf06b72818d98",
pageCode:"dialogTitle", 
 },
},
tTextCommonx0x6: {
defaultStyle: {
            default: {"width":"151px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"274px","top":"228px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"各部门完成情况",
editable:false,
cStyle:{"wrapper":{"default":{"width":"151px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"274px","top":"228px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tChartDesignx0x7: {
defaultStyle: {
            default: {"height":"706px","width":"1444px","position":"unset","left":"254px","top":"265px"},
            
            },
 default: { 
 
registerMapName:"",
geoJson:{},
emptyImg:"",
cStyle:{"wrapper":{"default":{"height":"706px","width":"1444px","position":"unset","left":"254px","top":"265px"}},"emptyText":{"default":{"backgroundColor":"","color":"var(--business-white)","fontSize":"var(--text-size-14)"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
});
const initData = () => {
provide('state', state);
(async () => {
  await apiRegistry.getLatestTime.request();
  await apiRegistry.getCardList.request();
  await apiRegistry.getChartData.request();

})()
};
const closePop = () => {
// global.showCockpitCenterPop = false
global.dialogName = ''
global.dialogParams = {}
};
const initChartOptions = (data) => {
state.chartOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "shadow" },
    formatter: (params) => {
      // params 是一个数组，因为 trigger: 'axis'
      return `${params[0].name}<br/>` + params.map(p => `${p.marker}${p.seriesName} ${p.value}个`).join('<br/>');
    }
  },
  dataZoom: [
    {
      type: "slider",
      start: 0,
      end: 50,
    },
  ],
  legend: {
    top: 10,
    // data: ['任务总数', '已完成'],
    textStyle: {
      color: "#DEFDFF",
    },
  },
  grid: {
    left: "3%",
    right: "3%",
    bottom: "6%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: data.map((item) => item.responsible_unit),
    axisLine: {
      lineStyle: { color: "rgba(255,255,255,.3)" },
    },
    axisLabel: {
      color: "#DEFDFF",
      fontSize: 14,
      fontWeight: "400",
      fontFamily: "方正综艺",
      interval: 0,
      rotate: 45,
    },
    axisTick: { show: false },
  },
  yAxis: {
    type: "value",
    name: "个",
    nameTextStyle: {
      color: "#DEFDFF", // 和轴标签同色系
      fontSize: 14
    },
    nameGap: 10, // 名称与轴的间距，可根据需要调整
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "rgba(255,255,255,.3)",
      },
    },
    axisLine: { show: false },
    axisLabel: { color: "#DEFDFF" },
  },
  series: [
    // {
    //   name: "任务总数",
    //   type: "bar",
    //   stack: "taskStack",
    //   barWidth: 14,
    //   data: data.map((item) => item.total_task_count),
    //   itemStyle: {
    //     borderColor: "rgb(108,255,250)",
    //     borderWidth: 1,
    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //       { offset: 0, color: "rgba(108,255,250,0.95)" },
    //       { offset: 1, color: "rgba(108,255,250,0.25)" },
    //     ]),
    //   },
    //   label: {
    //     show: true,
    //     position: "top",
    //     color: "#fff",
    //     formatter: (params) => params.value === 0 ? '' : params.value
    //   },
    // },
    {
      name: "已完成任务数",
      type: "bar",
      stack: "taskStack",
      barWidth: 14,
      data: data.map((item) => item.completed_task_count),
      itemStyle: {
        borderColor: "rgb(66,185,131)",
        borderWidth: 1,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgba(66,185,131,0.9)" },
          { offset: 1, color: "rgba(66,185,131,0.25)" },
        ]),
      },
      label: {
        show: true,
        position: "top",
        color: "#fff",
        // 核心修改：判断数值是否为0，0则返回空字符串
        formatter: (params) => params.value === 0 ? '' : params.value
      },
    },
    {
      name: "序时任务数",
      type: "bar",
      stack: "taskStack",
      barWidth: 14,
      data: data.map((item) => item.sequential_task_count),
      itemStyle: {
        borderColor: "rgb(250,200,88)",
        borderWidth: 1,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgba(250,200,88,0.9)" },
          { offset: 1, color: "rgba(250,200,88,0.25)" },
        ]),
      },
      label: {
        show: true,
        position: "top",
        color: "#fff",
        // 核心修改：判断数值是否为0，0则返回空字符串
        formatter: (params) => params.value === 0 ? '' : params.value
      },
    },
    {
      name: "滞后任务数",
      type: "bar",
      stack: "taskStack",
      barWidth: 14,
      data: data.map((item) => item.lagging_task_count),
      itemStyle: {
        borderColor: "rgb(250,55,55)",
        borderWidth: 1,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgba(250,55,55,0.9)" },
          { offset: 1, color: "rgba(250,55,55,0.25)" },
        ]),
      },
      label: {
        show: true,
        position: "top",
        color: "#fff",
        // 核心修改：判断数值是否为0，0则返回空字符串
        formatter: (params) => params.value === 0 ? '' : params.value
      },
    },
  ],
};
};
const handleChartClick = (params) => {
global.dialogParams2 = {
  YEAR: state.selectYear,
  RESPONSIBLE_UNIT: params.name
}
global.dialogName2 = 'responsibilityTablePopComponent'
};
const onclick1742797597302_0_0 = () => {
// 执行自定义方法
closePop();
};
const oncomClick1768544438263 = (data) => {
// 执行自定义方法
handleChartClick(data);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"REGION_PATH":"","REGION_CODE":"","interfaceId":"7eb949e856e3cb84e1a9cfc65b0561dd"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"REGION_PATH":"","REGION_CODE":"","interfaceId":"7eb949e856e3cb84e1a9cfc65b0561dd"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"REGION_PATH":"","REGION_CODE":"","interfaceId":"7eb949e856e3cb84e1a9cfc65b0561dd"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     if (res?.data?.data && res?.data?.data) {
  state.selectYear = res.data.data.year_number;
  state.dialogTitle = `${state.selectYear}年责任书考核`
  state.tableTitle = `${state.selectYear}年责任书详情`
} else {
  state.selectYear = ''
  state.dialogTitle = `--年责任书考核`
  state.tableTitle = `--年责任书详情`
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.selectYear =''
state.dialogTitle = `--年责任书考核`
state.tableTitle = `--年责任书详情`
      reject(error);
    });
  });
},
              },
// 接口函数
 getChartData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"REGION_PATH":"","REGION_CODE":"","YEAR":"state.selectYear","interfaceId":"ad0eb81f280335649f99e63baa2c9223"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"REGION_PATH":"","REGION_CODE":"","YEAR":state.selectYear,"interfaceId":"ad0eb81f280335649f99e63baa2c9223"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"REGION_PATH":"","REGION_CODE":"","YEAR":state.selectYear,"interfaceId":"ad0eb81f280335649f99e63baa2c9223"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getChartData'] = res.data;
                
     if (res?.data?.data && res?.data?.data.length > 0) {
  initChartOptions(res.data.data); // 参数注意修改
} else {
  initChartOptions([])
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      initChartOptions([]); // 参数注意修改
      reject(error);
    });
  });
},
              },
// 接口函数
 getCardList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"REGION_PATH":"","REGION_CODE":"","YEAR":"state.selectYear","interfaceId":"268c27fc42a25d2c4c95c04f4e6fe6fe"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"REGION_PATH":"","REGION_CODE":"","YEAR":state.selectYear,"interfaceId":"268c27fc42a25d2c4c95c04f4e6fe6fe"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"REGION_PATH":"","REGION_CODE":"","YEAR":state.selectYear,"interfaceId":"268c27fc42a25d2c4c95c04f4e6fe6fe"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardList'] = res.data;
                
     if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  const data = res.data.data[0]
  state.cardList[0].num = data.responsible_unit_count || '-'
  state.cardList[1].num = data.total_task_count || '-'
  state.cardList[2].num = data.completed_task_count || '-'
  state.cardList[3].num = data.sequential_task_count || '-'
  state.cardList[4].num = data.lagging_task_count || '-'

} else {
  state.cardList = state.cardList.map(item => ({
    ...item,
    num: '-'
  }))
}
  console.log(state.cardList, '00000000')
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.cardList = state.cardList.map(item=>({
    ...item,
    num:'-'
}))
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [state.selectYear], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getChartData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [state.selectYear], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCardList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-cockpitCenterPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-cockpitCenterPop', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initChartOptions([]);
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tTextCommonx0x6ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x6.default, componentState.tTextCommonx0x6?.[state.screenSize]));

 const tChartDesignx0x7ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x7.default, componentState.tChartDesignx0x7?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

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
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tComponentx0x4ComputedData,
tComponentx0x5ComputedData,
tTextCommonx0x6ComputedData,
tChartDesignx0x7ComputedData,
onclick1742797597302_0_0,
oncomClick1768544438263,
};
},
};