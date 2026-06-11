window.threeInquirySuesPopComponent = {
template: 
`<div id="t-l-c-threeInquirySuesPop" class="t-l-c-threeInquirySuesPop" >` +
`<t-rect id="t-rect-2e88.9a8a1ed2b" class="threeInquirySuesPop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-component id="t-component-5c24.40959d27" class="threeInquirySuesPop-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :loading="tComponentx0x1ComputedData.loading" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-9a56.d2768158a" class="threeInquirySuesPop-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :loading="tComponentx0x2ComputedData.loading" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode">` +
`</t-component>` +
`<t-text-common id="t-text-common-13d9.227b6b3e4" class="threeInquirySuesPop-t-text-common-0-3"  :label="tTextCommonx0x3ComputedData.label" :editable="tTextCommonx0x3ComputedData.editable" :c-style="tTextCommonx0x3ComputedData.cStyle">` +
`</t-text-common>` +
`<t-chart-design id="t-chart-design-35d3.fdedae695" class="threeInquirySuesPop-t-chart-design-0-4"  :register-map-name="tChartDesignx0x4ComputedData.registerMapName" :geo-json="tChartDesignx0x4ComputedData.geoJson" :empty-img="tChartDesignx0x4ComputedData.emptyImg" :c-style="tChartDesignx0x4ComputedData.cStyle" :options="replaceCssVariables(filterData(state.chartOption, componentPropBindingMap?.['t-chart-design-35d3.fdedae695']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @com-click="oncomClick1768544438263">` +
`</t-chart-design>` +
`<t-rect id="t-rect-9ee1.ec8130f44" class="threeInquirySuesPop-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-03db.65ad46ad" class="threeInquirySuesPop-t-text-0-6"  :label="replaceCssVariables(filterData(state.dialogTitle, componentPropBindingMap?.['t-text-03db.65ad46ad']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-2e88.9a8a1ed2b":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-5c24.40959d27":{"attributeName":"tComponentx0x1","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-9a56.d2768158a":{"attributeName":"tComponentx0x2","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-13d9.227b6b3e4":{"attributeName":"tTextCommonx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-35d3.fdedae695":{"attributeName":"tChartDesignx0x4","registerMapName":{"filters":[]},"geoJson":{"filters":[]},"emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-rect-9ee1.ec8130f44":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-03db.65ad46ad":{"attributeName":"tTextx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   cardList: [{"title":"整改责任单位","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-26/e29ce8ee41224817ad9913510f7329df.png","num":0,"numColor":"#00FFFF","total":"","unit":"个"},{"title":"信访件总数","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/2911a043b524469eb2ed7f0bff0e5341.png","num":0,"numColor":"#FFF","total":"","unit":"件"},{"title":"已验收销号","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/f119f3f3cd7e4e3eb043b646c3e681bd.png","num":0,"numColor":"#5bff5e","total":"","unit":"件"},{"title":"已办结验收中","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png","num":0,"numColor":"#00d4ff","total":"","unit":"件"},{"title":"阶段性办结","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png","num":0,"numColor":"#5bff5e","total":"","unit":"件"}],
   dialogTitle: "第三轮中央生态环境保护督察信访件进展",
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
            default: {"width":"100%","height":"760px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"0px","top":"0px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"760px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"0px","top":"0px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset"}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"971px","height":"72px","margin":"0 auto","position":"unset","left":"16px","top":"60px"},
            
            },
 default: { 
 
name:"threeInquirySuesCardComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"971px","height":"72px","margin":"0 auto","position":"unset","left":"16px","top":"60px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/threeInquirySuesCard",
componentName:"threeInquirySuesCardComponent",
pageId:"43fd9a91e4724d389dd9b651b172914d",
pageCode:"threeInquirySuesCard", 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"33px","margin":"0 auto","position":"unset","left":"0px","top":"143px"},
            
            },
 default: { 
 
name:"dialogTitleComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"33px","margin":"0 auto","position":"unset","left":"0px","top":"143px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/dialogTitle",
componentName:"dialogTitleComponent",
pageId:"051aca1b22bc4dbeb1baf06b72818d98",
pageCode:"dialogTitle", 
 },
},
tTextCommonx0x3: {
defaultStyle: {
            default: {"width":"151px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"56px","top":"150px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"各部门进展统计",
editable:false,
cStyle:{"wrapper":{"default":{"width":"151px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"56px","top":"150px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tChartDesignx0x4: {
defaultStyle: {
            default: {"height":"563px","width":"974px","position":"unset","left":"14px","top":"184px"},
            
            },
 default: { 
 
registerMapName:"",
geoJson:{},
emptyImg:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"563px","width":"974px","position":"unset","left":"14px","top":"184px"}},"emptyText":{"default":{"fontSize":"14px","color":"#fff"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"100%","height":"46px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"0px","top":"-1px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"46px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"0px","top":"-1px","animationName":""}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"589px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"20px","fontFamily":"方正综艺","top":"12px","left":"26px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"第三轮中央生态环境保护督察信访件进展",
editable:false,
cStyle:{"wrapper":{"default":{"width":"589px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"20px","fontFamily":"方正综艺","top":"12px","left":"26px","position":"unset","animationName":""}}}, 
 },
},
});
const initData = () => {

provide('cardListData',state.cardList);


(async()=>{
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
      return `${params[0].name}<br/>` + params.map(p => `${p.marker}${p.seriesName} ${p.value}件`).join('<br/>');
    }
  },
  dataZoom: [
    {
      type: "slider",
      start: 0,
      end: 100,
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
    bottom: "8%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: data.map((item) => item.zg_company),
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
    // 配置轴名称（显示在顶部）
    name: "件",
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
    {
      name: "已验收销号",
      type: "bar",
      barWidth: 14,
      data: data.map((item) => item.problem_number_one),
      itemStyle: {
        borderColor: "rgb(108,255,250)",
        borderWidth: 1,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgba(108,255,250,0.95)" },
          { offset: 1, color: "rgba(108,255,250,0.25)" },
        ]),
      },
      label: {
        show: true,
        position: "top",
        color: "#fff",
        formatter: '{c}'
      },
    },
    {
      name: "已办结验收中",
      type: "bar",
      barWidth: 14,
      data: data.map((item) => item.problem_number_two),
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
        formatter: '{c}'
      },
    },
    {
      name: "阶段性办结",
      type: "bar",
      barWidth: 14,
      data: data.map((item) => item.problem_number_three),
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
        formatter: '{c}'
      },
    },
  ],
};

};
const handleChartClick = (params) => {
console.log(params, 'COMPANY')
global.supervisorPopParams = {
  COMPANY: params.name
};
global.supervisorPopName = 'threeInquirySuesTablePopComponent'
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
 getCardList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"REGION_PATH":"global.REGION_CODE","ROUND":"3","SOURCE":"1","TYPE":"1","interfaceId":"38c0fb4142f74f0d3f22dac4c87663ac"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"REGION_PATH":global.REGION_CODE,"ROUND":"3","SOURCE":"1","TYPE":"1","interfaceId":"38c0fb4142f74f0d3f22dac4c87663ac"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"REGION_PATH":global.REGION_CODE,"ROUND":"3","SOURCE":"1","TYPE":"1","interfaceId":"38c0fb4142f74f0d3f22dac4c87663ac"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardList'] = res.data;
                
     if (res.data.head.statusCode === '200' && res.data?.data) {
  const data = res.data.data;
  state.cardList[0].num = data.zg_sszt_number ?? '-'
  state.cardList[1].num = data.problem_number ?? '-'
  state.cardList[2].num = data.problem_number_one ?? '-'
  state.cardList[3].num = data.problem_number_two ?? '-'
  state.cardList[4].num = data.problem_number_three ?? '-'
  console.log(state.cardList,'卡片');

} else {
  state.cardList = state.cardList.map(item=>({
    ...item,
    num:'-'
  }))
}
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
// 接口函数
 getChartData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"ROUND":"3","SOURCE":"1","TYPE":"1","REGION_PATH":"global.REGION_CODE","interfaceId":"bce57e567bc383f55b8397f5bd35eacb"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"ROUND":"3","SOURCE":"1","TYPE":"1","REGION_PATH":global.REGION_CODE,"interfaceId":"bce57e567bc383f55b8397f5bd35eacb"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"ROUND":"3","SOURCE":"1","TYPE":"1","REGION_PATH":global.REGION_CODE,"interfaceId":"bce57e567bc383f55b8397f5bd35eacb"});
                   
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
};
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCardList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getChartData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-threeInquirySuesPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-threeInquirySuesPop', global.appScaleMode, 'normal');
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

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tTextCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x3.default, componentState.tTextCommonx0x3?.[state.screenSize]));

 const tChartDesignx0x4ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x4.default, componentState.tChartDesignx0x4?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

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
tTextCommonx0x3ComputedData,
tChartDesignx0x4ComputedData,
tRectx0x5ComputedData,
tTextx0x6ComputedData,
oncomClick1768544438263,
};
},
};