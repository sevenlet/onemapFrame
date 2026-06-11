window.zrstProtectAnimalComponent = {
template: 
`<div id="t-l-c-zrstProtectAnimal" class="t-l-c-zrstProtectAnimal" >` +
`<t-rect id="t-rect-e6e2.a7d8fc43d" class="zrstProtectAnimal-t-rect-0-0"  :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle" :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label">` +
`</t-rect>` +
`<t-text id="t-text-2f5a.38c79936d" class="zrstProtectAnimal-t-text-0-3"  :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle" :label="replaceCssVariables(filterData(state.titleText, componentPropBindingMap?.['t-text-2f5a.38c79936d']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-list id="t-list-dfcd.3b46529a1" class="zrstProtectAnimal-t-list-0-4"  :border="tListx0x4ComputedData.border" :data="replaceCssVariables(filterData(state.list, componentPropBindingMap?.['t-list-dfcd.3b46529a1']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tListx0x4ComputedData.alias" :c-style="tListx0x4ComputedData.cStyle" @item-click="onitemClick1715845058858">` +
`</t-list>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-e6e2.a7d8fc43d":{"attributeName":"tRectx0x0","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-rect-d837.f12de688f":{"attributeName":"tRectx0x1"},"t-image-base-17c6.42d98bd4e":{"attributeName":"tImageBasex0x2"},"t-text-2f5a.38c79936d":{"attributeName":"tTextx0x3","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-list-dfcd.3b46529a1":{"attributeName":"tListx0x4","border":{"filters":[]},"data":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-row-f906.b870ba8c1":{"attributeName":"tRowx0x5"}};
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
   survekCode: "",
   ecoCode: "",
   kingdomType: "",
   componentName: "",
   dialogName: "zrstSpeciesDetailsPopUp",
   titleText: "物种共6种，其中杜鹃科1种，鹰科1种，翠鸟科1种，噪鹏科2种，猫科1种。",
   ECO_CODE: "",
   SURVEY_NUM: "",
   code: "",
   urlTime: "",
   selectedOption: "W01010",
   POINT_CODE: "",
   type: [],
   categoryData: [],
   title: "",
   list: [{"FAMILY_NAME":"白胸翡翠 翠鸟科","optName":"查看详情"},{"FAMILY_NAME":"豹猫猫科","optName":"查看详情"}],
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
            default: {"-webkit-mask-position":"","backgroundImage":"","-webkit-mask-repeat":"","borderTop":"1px solid rgba(23,62,228,0)","borderLeft":"1px solid rgba(23,62,228,0)","-webkit-mask-size":"","top":"0px","left":"0px","borderRight":"1px solid rgba(23,62,228,0)","width":"800px","backgroundSize":"","-webkit-mask-image":"","backgroundPosition":"","position":"unset","borderBottom":"1px solid rgba(23,62,228,0)","backgroundRepeat":"","height":"580px"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"default":{"-webkit-mask-position":"","backgroundImage":"","-webkit-mask-repeat":"","borderTop":"1px solid rgba(23,62,228,0)","borderLeft":"1px solid rgba(23,62,228,0)","-webkit-mask-size":"","top":"0px","left":"0px","borderRight":"1px solid rgba(23,62,228,0)","width":"800px","backgroundSize":"","-webkit-mask-image":"","backgroundPosition":"","position":"unset","borderBottom":"1px solid rgba(23,62,228,0)","backgroundRepeat":"","height":"580px"}}},
tip:false,
label:"", 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"color":"rgba(255, 255, 255, 1)","top":"9px","alignItems":"center","left":"25px","display":"flex","width":"1544px","lineHeight":"18px","position":"unset","height":"54px","fontSize":"18px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"color":"rgba(255, 255, 255, 1)","top":"9px","alignItems":"center","left":"25px","display":"flex","width":"1544px","lineHeight":"18px","position":"unset","height":"54px","fontSize":"18px"}}},
label:"物种共6种，其中杜鹃科1种，鹰科1种，翠鸟科1种，噪鹏科2种，猫科1种。", 
 },
},
tListx0x4: {
defaultStyle: {
            default: {"-webkit-mask-position":"","animationName":"","backgroundColor":"rgba(23, 62, 228, 0)","textAlign":"left","backgroundImage":"","paddingRight":"10px","-webkit-mask-repeat":"","display":"block","borderTopLeftRadius":"0px","-webkit-mask-size":"","overflow":"auto","top":"70px","left":"20px","borderBottomLeftRadius":"0px","width":"1563px","borderBottomRightRadius":"0px","borderTopRightRadius":"0px","backgroundSize":"","position":"unset","-webkit-mask-image":"","backgroundPosition":"","paddingLeft":"10px","backgroundRepeat":"","height":"786px"},
            
            },
 default: { 
 
border:true,
data:[{"FAMILY_NAME":"白胸翡翠 翠鸟科","optName":"查看详情"},{"FAMILY_NAME":"豹猫猫科","optName":"查看详情"}],
alias:{"stateActive":"stateActive","iconActive":"iconActive","icon":"icon","active":"active","state":"TAXA_NAME_C","info":"FAMILY_NAME","desc":"optName"},
cStyle:{"itemWrapper":{"hover":{"-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"","backgroundImage":"url(/legopro-generated-apps/lego_file/res/2024-05-11/77777e45abf9484c907285f238d4412d.png)","-webkit-mask-repeat":"","backgroundSize":"100% 46px","-webkit-mask-image":"","backgroundPosition":"50% 50%","backgroundRepeat":"repeat-x","height":"42px"},"default":{"cursor":"pointer","backgroundColor":"rgba(115, 206, 255, 0.07)","textAlign":"justify","paddingRight":"10px","display":"flex","justifyContent":"space-between","alignContent":"flex-start","justifyItems":"stretch","paddingBottom":"10px","width":"100%","marginBottom":"6px","paddingTop":"10px","borderBottom":"0px solid rgb(23,62,228)","paddingLeft":"10px","height":"42px"}},"wrapper":{"default":{"-webkit-mask-position":"","animationName":"","backgroundColor":"rgba(23, 62, 228, 0)","textAlign":"left","backgroundImage":"","paddingRight":"10px","-webkit-mask-repeat":"","display":"block","borderTopLeftRadius":"0px","-webkit-mask-size":"","overflow":"auto","top":"70px","left":"20px","borderBottomLeftRadius":"0px","width":"1563px","borderBottomRightRadius":"0px","borderTopRightRadius":"0px","backgroundSize":"","position":"unset","-webkit-mask-image":"","backgroundPosition":"","paddingLeft":"10px","backgroundRepeat":"","height":"786px"}},"state":{"default":{"marginRight":"auto","color":"rgba(255, 255, 255, 1)","display":"block","fontSize":"18px","lineHeight":"18px"}},"info":{"hover":{"backgroundColor":""},"default":{"backgroundColor":"rgba(23, 62, 228, 0)","color":"rgba(255, 255, 255, 1)","alignItems":"flex-start","textAlign":"left","flexDirection":"column-reverse","paddingRight":"0px","display":"flex","textDecoration":"overline","fontStyle":"normal","borderTop":"0px none rgb(23,62,228)","justifyContent":"flex-start","marginLeft":"auto","marginRight":"auto","borderLeft":"0px none rgb(23,62,228)","flexWrap":"nowrap","borderRight":"0px none rgb(23,62,228)","width":"100%","fontSize":"18px","borderBottom":"0px none rgb(23,62,228)","paddingLeft":"0px","lineHeight":"18px"}},"desc":{"default":{"marginRight":"0px","color":"#2eb1ec","textAlign":"left","paddingRight":"0px","fontSize":"18px","fontStyle":"normal","paddingLeft":"0px","marginLeft":"0px","lineHeight":"18px"}}}, 
 },
},
});
const clickEvent = (row) => {
rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'createDialog',  // 消息类型名称
      data: {
        data: {
          headerComName: "wzdyxYqHeaderComponent",
          contentComName: "zrstSpeciesDetailsPopUpComponent",
          maxWidth: "1600px",
          maxHeight: "950px",
          minWidth: "1000px",
          minHeight: "860px",
          isScalse: false,
          title: ""
        }
      }
    }
  );
};
const getPointId = () => {
state.title = decodeURIComponent(getUrlParam('SURVEY_NAME')) || '-'
state.code = decodeURIComponent(getUrlParam('POINT_CODE')) || '-'
state.ECO_CODE = decodeURIComponent(getUrlParam('ECO_CODE')) || ''
state.SURVEY_NUM = decodeURIComponent(getUrlParam('SURVEY_NUM')) || ''
// state.POINT_CODE = getUrlParam('POINT_CODE') || 'SA17-5'
// state.urlTime = getUrlParam('MONITORTIME') || ''
// console.log(state.dataSource)
// console.log(state.POINT_CODE)
// toggle()

// state.point_id = getUrlParam('POINT_ID') ||'D3AF50F12E434E21B829BA4D35CD82B4'
// state.date = getUrlParam('MONITORTIME') || '2022-3'
// toggle()


};
const initParams = () => {
state.SURVEY_NUM = '1'
state.survekCode = 'ZDBH'
state.ecoCode = '350700000000'
state.kingdomType = 'Plantae'
apiRegistry.getBaseInfo.request();
apiRegistry.getListData.request();
};
const onitemClick1715845058858 = (item) => {
// 执行自定义方法
clickEvent(item);
};
const onclick1706626276644 = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closePopup", // 消息名称
data: "", // 发送的数据
});
// 执行自定义方法
closeDialog(global.proBaseMainInfo.detailDialog.name);
// 执行自定义方法
reset();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"kingdomType":"state.kingdomType","ECO_CODE":"state.ecoCode","SURVEY_CODE":"state.survekCode","interfaceId":"e2e6f608b00db307a4a89475586ca5de"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"kingdomType":state.kingdomType,"ECO_CODE":state.ecoCode,"SURVEY_CODE":state.survekCode,"interfaceId":"e2e6f608b00db307a4a89475586ca5de"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"kingdomType":state.kingdomType,"ECO_CODE":state.ecoCode,"SURVEY_CODE":state.survekCode,"interfaceId":"e2e6f608b00db307a4a89475586ca5de"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     if (res.data?.head.statusCode === '200' && res.data?.data) {
  const { data } = res.data
  let dataStr = ''

  state.titleText = ''

  // if(state.SURVEY_NUM == 0){
  //   state.titleText = '物种共0种。'
  // }
  data.forEach(item =>{
    dataStr += `${item.TAXA_NAME_C}${item.FAMILY_NUM}种，`
  })
  dataStr = dataStr.slice(0, -1) + '。'
  state.titleText = `物种共${state.SURVEY_NUM}种，其中${dataStr}`
} else {
  state.titleText = ''
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"kingdomType":"state.kingdomType","ECO_CODE":"state.ecoCode","SURVEY_CODE":"state.survekCode","interfaceId":"b1374b3cb8f92f192600eb5b6407918d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"kingdomType":state.kingdomType,"ECO_CODE":state.ecoCode,"SURVEY_CODE":state.survekCode,"interfaceId":"b1374b3cb8f92f192600eb5b6407918d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"kingdomType":state.kingdomType,"ECO_CODE":state.ecoCode,"SURVEY_CODE":state.survekCode,"interfaceId":"b1374b3cb8f92f192600eb5b6407918d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     
if (res?.data?.head.statusCode === '200') {

  const list = res.data.data;
  state.list = []
  state.list = list.map(item => {
    return {
      TAXA_CODE: item.TAXA_CODE,
      TAXA_NAME_C: item.TAXA_NAME_C,
      TAXA_NAME_XM: item.TAXA_NAME_XM,
      FAMILY_NAME: item.FAMILY_NAME,
      optName: '查看详情'
    }
  })

} else {
  state.list = []
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-zrstProtectAnimal', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-zrstProtectAnimal', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tListx0x4ComputedData = computed(() => _.merge({}, componentState.tListx0x4.default, componentState.tListx0x4?.[state.screenSize]));

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
tTextx0x3ComputedData,
tListx0x4ComputedData,
onitemClick1715845058858,
};
},
};