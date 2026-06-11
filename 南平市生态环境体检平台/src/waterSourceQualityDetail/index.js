window.waterSourceQualityDetailComponent = {
template: 
`<div id="t-l-c-waterSourceQualityDetail" class="t-l-c-waterSourceQualityDetail" >` +
`<t-row id="t-row-7bf8.3ee75802" class="waterSourceQualityDetail-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align">` +
`<t-text id="t-text-17af.da59848b8" class="waterSourceQualityDetail-t-text-0-0-0"  :label="tTextx0x0x0ComputedData.label" :editable="tTextx0x0x0ComputedData.editable" :c-style="tTextx0x0x0ComputedData.cStyle" @click="onclick1734571942724_0_0">` +
`</t-text>` +
`<t-text id="t-text-fa2d.892cf4b77" class="waterSourceQualityDetail-t-text-0-0-1"  :label="replaceCssVariables(filterData(state.title, componentPropBindingMap?.['t-text-fa2d.892cf4b77']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x1ComputedData.editable" :c-style="tTextx0x0x1ComputedData.cStyle" :show-title="tTextx0x0x1ComputedData.showTitle">` +
`</t-text>` +
`<t-list-card-common id="t-list-card-common-0d81.de421556a" class="waterSourceQualityDetail-t-list-card-common-0-0-2"  :c-style="tListCardCommonx0x0x2ComputedData.cStyle" :key-word="tListCardCommonx0x0x2ComputedData.keyWord" :default-checked="tListCardCommonx0x0x2ComputedData.defaultChecked" :tab="tListCardCommonx0x0x2ComputedData.tab" :collapse="tListCardCommonx0x0x2ComputedData.collapse" :collapse-text="tListCardCommonx0x0x2ComputedData.collapseText" :display-count="tListCardCommonx0x0x2ComputedData.displayCount" :data-alias="tListCardCommonx0x0x2ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.standard, componentPropBindingMap?.['t-list-card-common-0d81.de421556a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-list-card-common>` +
`</t-row>` +
`<t-rect id="t-rect-b8a7.3fc5f52df" class="waterSourceQualityDetail-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-component id="t-component-2081.271fecb9c" class="waterSourceQualityDetail-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-7bf8.3ee75802":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-17af.da59848b8":{"attributeName":"tTextx0x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-fa2d.892cf4b77":{"attributeName":"tTextx0x0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}},"t-list-card-common-0d81.de421556a":{"attributeName":"tListCardCommonx0x0x2","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"tab":{"filters":[]},"collapse":{"filters":[]},"collapseText":{"filters":[]},"displayCount":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-rect-b8a7.3fc5f52df":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-2081.271fecb9c":{"attributeName":"tComponentx0x2","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}}};
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
   standard: [{"state":"-","stateColor":"#fff","stateBgColor":""}],
   title: "-",
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"410px","height":"47px","position":"unset","left":"20px","top":"9px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"410px","height":"47px","position":"unset","left":"20px","top":"9px","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x0x0: {
defaultStyle: {
            default: {"width":"43px","height":"20px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"-195px","left":"125px","backgroundColor":"var(--business-white)","position":"unset","cursor":"pointer","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"43px","height":"20px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"-195px","left":"125px","backgroundColor":"var(--business-white)","position":"unset","cursor":"pointer","animationName":"","lineHeight":"20px"},"hover":{"backgroundColor":"var(--business-theme)"}}}, 
 },
},
tTextx0x0x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--business-white)","fontSize":"var(--business-text-size-18)","position":"unset","left":"582.8092289677372px","top":"-7.873399522569571px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"10px","fontWeight":"600","animationName":"","textAlign":"left","max-width":"200px","marginRight":"6px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","borderLeft":"1px solid var(--business-white)","marginLeft":"10px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--business-white)","fontSize":"var(--business-text-size-18)","position":"unset","left":"582.8092289677372px","top":"-7.873399522569571px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"10px","fontWeight":"600","animationName":"","textAlign":"left","max-width":"200px","marginRight":"6px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","borderLeft":"1px solid var(--business-white)","marginLeft":"10px"}}},
showTitle:true, 
 },
},
tListCardCommonx0x0x2: {
defaultStyle: {
            default: {"position":"unset","width":"auto","height":"auto","left":"369px","top":"-22px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"position":"unset","width":"auto","height":"auto","left":"369px","top":"-22px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"auto","height":"auto","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","paddingTop":"5px","paddingBottom":"5px","paddingLeft":"10px","paddingRight":"10px"}},"cardIcon":{"default":{"display":"none"}}},
keyWord:"",
defaultChecked:"",
tab:false,
collapse:false,
collapseText:"数据",
displayCount:"0",
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
data:[{"state":"-","stateColor":"#fff","stateBgColor":""}], 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"55px","left":"0px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"55px","left":"0px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"450px","height":"812px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","top":"68px","position":"unset","left":"0px","overflow":"auto"},
            
            },
 default: { 
 
name:"waterSourceQualityDetailMainComponent",
cStyle:{"wrapper":{"default":{"width":"450px","height":"812px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","top":"68px","position":"unset","left":"0px","overflow":"auto"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/waterSourceQualityDetailMain",
componentName:"waterSourceQualityDetailMainComponent", 
 },
},
});
const getProvider = () => {
const rootData = inject('drinkWaterState');

state.drinkWaterState = rootData;
};
const handleClickBack = () => {
// 返回 
state.drinkWaterState.componentName = 'waterDrinkContentComponent';
// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "detailsOrGeneral",
      "shareCode": "detailsOrGeneral",
      "defaultValue": "general",
      "runtimeValue": "general"
    },
    {
      "code": "hiddenDetailIframe",
      "name": "",
      "defaultValue": "true",
      "shareCode": "hiddenDetailIframe",
      "runtimeValue": "true"
    }
  ]
});

};
const initPage = () => {
state.title = global.businessDialog.dialogParmas.rowInfo.DRINK_NAME || "-";
state.standard[0].state = global.businessDialog.dialogParmas.rowInfo.ISSTANDARDS === '1' ? '达标' : '不达标';
state.standard[0].stateBgColor = getWaterLevelColor(state.standard[0].state);
};
const onclick1734571942724_0_0 = () => {
// 执行自定义方法
handleClickBack();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getBaseInfoCopy: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"state.monitorTime","DRINK_ID":"state.id","interfaceId":"de27d2dff4b2026427442b1c5da8871b"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.monitorTime,"DRINK_ID":state.id,"interfaceId":"de27d2dff4b2026427442b1c5da8871b"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":state.monitorTime,"DRINK_ID":state.id,"interfaceId":"de27d2dff4b2026427442b1c5da8871b"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfoCopy'] = res.data;
                
     // 基础信息
state.baseInfoData.forEach(item => item.num = "-");
// 保护区范围
state.bhqfwData.forEach(item => item.num = 0);
// 保护区管理
state.bhqglData[0].num = "-";
// 颜色列表（两套都写上防止格式不对）
const colors = [
  {
    code: "I类",
    value: "#CCFFFF"
  },
  {
    code: "Ⅰ类",
    value: "#CCFFFF"
  },
  {
    code: "II类",
    value: "#00CCFF"
  },
  {
    code: "Ⅱ类",
    value: "#00CCFF"
  },
  {
    code: "III类",
    value: "#00FF00"
  },
  {
    code: "Ⅲ类",
    value: "#00FF00"
  },
  {
    code: "IV类",
    value: "#FFFF00"
  },
  {
    code: "Ⅳ类",
    value: "#FFFF00"
  },
  {
    code: "V类",
    value: "#FF9B00"
  },
  {
    code: "Ⅴ类",
    value: "#FF9B00"
  },
  {
    code: "劣V类",
    value: "#FF0000"
  },
  {
    code: "劣Ⅴ类",
    value: "#FF0000"
  },
  {
    code: "",
    value: "#FFF"
  }
]
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  const {
    REGION_NAME,
    WSYSTEM_NAME,
    MANAGER_TYPE_NAME,
    WSYSTEMTYPENAME,
    STATUS_NAME,
    INAKE_COUNT,
    SERVICE_PEOPLE,
    WATERQUALITYLEVELTARGETNAME,
    WATERQUALITYLEVELNAME,
    FIRST_RESERVE,
    TWO_RESERVE,
    QUASI_RESERVE,
    BOUNDARY_SET_TEXT
  } = res.data.data;
  // 基础信息
  state.baseInfoData[0].num = REGION_NAME || "-"; // 所属行政区
  state.baseInfoData[1].num = WSYSTEM_NAME || "-"; // 所属流域
  state.baseInfoData[2].num = MANAGER_TYPE_NAME || "-"; // 水源地级别
  state.baseInfoData[3].num = WSYSTEMTYPENAME || "-"; // 水体类型
  state.baseInfoData[4].num = STATUS_NAME || "-"; // 使用状态
  state.baseInfoData[5].num = INAKE_COUNT || "-"; // 取水口数量
  state.baseInfoData[6].num = SERVICE_PEOPLE || "-"; // 供水人口(万人)
  state.baseInfoData[7].num = WATERQUALITYLEVELTARGETNAME || "-"; // 水质目标
  state.baseInfoData[7].color = colors.find(i => i.code === WATERQUALITYLEVELTARGETNAME).value // 水质目标颜色
  state.baseInfoData[8].num = WATERQUALITYLEVELNAME || "-"; // 水质现状
  // 保护区范围
  state.bhqfwData[0].num = FIRST_RESERVE || 0; // 一级保护区
  state.bhqfwData[1].num = TWO_RESERVE || 0; // 二级保护区
  state.bhqfwData[2].num = QUASI_RESERVE || 0; // 准保护区
  // 保护区管理
  state.bhqglData[0].num = BOUNDARY_SET_TEXT || "-"; // 标志设立
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 基础信息
state.baseInfoData.forEach(item => item.num = "-");
// 保护区范围
state.bhqfwData.forEach(item => item.num = 0);
// 保护区管理
state.bhqglData[0].num = "-";
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [state.monitorTime], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getBaseInfoCopy', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-waterSourceQualityDetail', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-waterSourceQualityDetail', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tTextx0x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x0.default, componentState.tTextx0x0x0?.[state.screenSize]));

 const tTextx0x0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x1.default, componentState.tTextx0x0x1?.[state.screenSize]));

 const tListCardCommonx0x0x2ComputedData = computed(() => _.merge({}, componentState.tListCardCommonx0x0x2.default, componentState.tListCardCommonx0x0x2?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

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
tRowx0x0ComputedData,
tTextx0x0x0ComputedData,
tTextx0x0x1ComputedData,
tListCardCommonx0x0x2ComputedData,
tRectx0x1ComputedData,
tComponentx0x2ComputedData,
onclick1734571942724_0_0,
};
},
};