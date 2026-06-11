window.gztTopNewsComponent = {
template: 
`<div id="t-l-c-gztTopNews" class="t-l-c-gztTopNews" >` +
`<t-rect id="t-rect-b83d.c786f613c" class="gztTopNews-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-4d8f.7faadd415" class="gztTopNews-t-text-common-0-1"  :label="replaceCssVariables(filterData(state.text, componentPropBindingMap?.['t-text-common-4d8f.7faadd415']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x1ComputedData.editable" :c-style="tTextCommonx0x1ComputedData.cStyle" :show-title="tTextCommonx0x1ComputedData.showTitle">` +
`</t-text-common>` +
`<t-rect id="t-rect-3ea1.cb26544ee" class="gztTopNews-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-8d43.c164a1c6a" class="gztTopNews-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-table v-if="state.tableText.length !== 0" id="t-table-cc9e.b546425a4" class="gztTopNews-t-table-0-5"  :height="tTablex0x5ComputedData.height" :stripe="tTablex0x5ComputedData.stripe" :border="tTablex0x5ComputedData.border" :auto-scroll="tTablex0x5ComputedData.autoScroll" :speed="tTablex0x5ComputedData.speed" :show-animation="tTablex0x5ComputedData.showAnimation" :animation-delay="tTablex0x5ComputedData.animationDelay" :animation-type="tTablex0x5ComputedData.animationType" :columns="tTablex0x5ComputedData.columns" :data="replaceCssVariables(filterData(state.tableText, componentPropBindingMap?.['t-table-cc9e.b546425a4']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x5ComputedData.defaultSort" :c-style="tTablex0x5ComputedData.cStyle">` +
`</t-table>` +
`<t-rect id="t-rect-8eee.9b38ee109" class="gztTopNews-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle" @click="onclick1774838362299">` +
`</t-rect>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-b83d.c786f613c":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-4d8f.7faadd415":{"attributeName":"tTextCommonx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}},"t-rect-3ea1.cb26544ee":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-8d43.c164a1c6a":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-carousel-text-fca0.314b68b92":{"attributeName":"tCarouselTextx0x4"},"t-table-cc9e.b546425a4":{"attributeName":"tTablex0x5","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"showAnimation":{"filters":[]},"animationDelay":{"filters":[]},"animationType":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-8eee.9b38ee109":{"attributeName":"tRectx0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   tableText: [],
   text2: "",
   text: "早上好",
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
            default: {"width":"50px","height":"50px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-24/930027fdc2c4467694dba5c849318043.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"7px","top":"3px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"50px","height":"50px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-24/930027fdc2c4467694dba5c849318043.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"7px","top":"3px"}}}, 
 },
},
tTextCommonx0x1: {
defaultStyle: {
            default: {"width":"210px","height":"24px","color":"var(--t-white)","fontSize":"24px","lineHeight":"24px","position":"unset","left":"72px","top":"18px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},
            
            },
 default: { 
 
label:"早上好",
editable:false,
cStyle:{"wrapper":{"default":{"width":"210px","height":"24px","color":"var(--t-white)","fontSize":"24px","lineHeight":"24px","position":"unset","left":"72px","top":"18px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}},
showTitle:true, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"1489px","height":"50px","top":"6px","left":"394px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--gzt-card-bgc)","borderTopLeftRadius":"25px","borderTopRightRadius":"25px","borderBottomLeftRadius":"25px","borderBottomRightRadius":"25px","position":"unset","color":"var(--skin-font-color)","fontSize":"18px","textAlign":"left","fontStyle":"normal","background":"#092A4F","fillType":"color"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1489px","height":"50px","top":"6px","left":"394px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--gzt-card-bgc)","borderTopLeftRadius":"25px","borderTopRightRadius":"25px","borderBottomLeftRadius":"25px","borderBottomRightRadius":"25px","position":"unset","color":"var(--skin-font-color)","fontSize":"18px","textAlign":"left","fontStyle":"normal","background":"#092A4F","fillType":"color"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"30px","height":"30px","top":"15px","left":"413px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-24/0e0f7edf5bcf4ee99ea039a1bea2a2dc.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","top":"15px","left":"413px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-24/0e0f7edf5bcf4ee99ea039a1bea2a2dc.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset"}}}, 
 },
},
tTablex0x5: {
defaultStyle: {
            default: {"width":"1260px","height":"36px","backgroundColor":"rgba(24, 37, 64, 0)","overflow":"auto","animationName":"","top":"13px","position":"unset","left":"456px"},
            
            },
 default: { 
 
height:"36",
stripe:false,
border:false,
autoScroll:"rowScroll",
speed:2,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[{"label":"序号","type":"default","key":"label","stateKey":"","infoKey":"","infoPosition":"left","tooltipKey":"","tooltipPosition":"top","width":"","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"cellStyle":{"cursor":"default","background":""},"fontStyle":{"color":"","fontSize":"18PX","fontWeight":"normal","padding":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}},"infoStyle":{"fontStyle":{"color":"#eee","fontSize":"","fontWeight":"normal","padding":"","margin":"","background":""}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1260px","height":"36px","backgroundColor":"rgba(24, 37, 64, 0)","overflow":"auto","animationName":"","top":"13px","position":"unset","left":"456px"}},"headerCell":{"default":{"borderBottom":"2px none rgba(26,27,31,1)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","height":"34px","paddingTop":"7px","paddingBottom":"7px","backgroundColor":"var(--table-head-backgroundColor-opaque)","lineHeight":"var(--business-text-size-14)"}},"bodyCell":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","borderBottom":"2px none rgba(24,37,64,1)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"0px solid rgba(24,37,64,1)","color":"var(--t-white)","paddingTop":"8px","paddingBottom":"8px","marginBottom":"0px","fontSize":"var(--business-text-size-18)","lineHeight":"var(--business-text-size-18)"},"hover":{"backgroundColor":"var(--cell-bg-color)","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)"}},"stripeBodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px none rgba(23,62,228,0)","paddingTop":"8px","paddingBottom":"8px"}},"rowWrapper":{"default":{"fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)"},"hover":{"fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)"}},"headerRowWrapper":{"default":{"fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)","display":"none"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"59px","height":"24px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"unset Solid var(--t-rect-border-color)","borderLeft":"unset Solid var(--t-rect-border-color)","borderBottom":"unset Solid var(--t-rect-border-color)","borderRight":"unset Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-25/ac5b997be59246eaaccb1e850001ad6f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"284px","top":"19px","borderDirection":"all","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"注销",
active:false,
cStyle:{"wrapper":{"default":{"width":"59px","height":"24px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"unset Solid var(--t-rect-border-color)","borderLeft":"unset Solid var(--t-rect-border-color)","borderBottom":"unset Solid var(--t-rect-border-color)","borderRight":"unset Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-25/ac5b997be59246eaaccb1e850001ad6f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"284px","top":"19px","borderDirection":"all","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"#00DEFF","background":"unset","backgroundClip":"unset","textAlign":"right","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"18px","lineHeight":"18px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const initGreeting = () => {
const hour = new Date().getHours();

let greet = '';

let username = localStorage.getItem('lastUserName');

if (hour >= 5 && hour < 11) {
  greet = '早上好';
} else if (hour >= 11 && hour < 13) {
  greet = '中午好';
} else if (hour >= 13 && hour < 18) {
  greet = '下午好';
} else {
  greet = '晚上好';
}




state.text = `${greet}，${username}`;
};
const setDom = () => {
const styleDom = document.createElement('style');
// 页面容器id
const pageContainerId = '#t-l-c-gztTopNews';
styleDom.innerHTML = `
  ${pageContainerId} .gztTopNews-t-carousel-text-0-4 .t-text {
    white-space: pre
  }
`;

document.head.appendChild(styleDom);
};
const onSocket = () => {
rootData.rootOn('rootSocket:change', (data) =>{
    if (data.type === 'refreshNoticeList') {
      apiRegistry.getMessage.request();
    }
});
};
const logOut = () => {
const token = localStorage.getItem('token');
// 清除本地存储相关数据
axios.get(`http://192.168.0.202:7777/ou/ouapi/api/logout?userToken=${token}`)
  .then((res) => {
    if (res.status === 200 && res.data.status === '1') {
      localStorage.clear();
      sessionStorage.clear();
      //const url = encodeURIComponent(casLoginUrl());
      // 重新跳转到cas登录页面
      // window.location.href = `http://192.168.0.202:7777/cas/logout?service=${url}`;
      // window.location.href = 'http://192.168.0.202:7777/cas/login?service=http://192.168.0.202:7777/cas/redirect/by/cas?gotourl='
      window.location.href = `http://192.168.0.202:7777/cas/logout?service=${global.loginByCasConfig.serviceUrl}?gotourl=${window.location.href}`
    }
  })
};
const onclick1774838362299 = () => {
// 执行自定义方法
logOut();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getMessage: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"bbb":"222","pageSize":"5","pageNum":"1","interfaceId":"320af2922a0cd934d214010004c9e163"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"bbb":"222","pageSize":"5","pageNum":"1","interfaceId":"320af2922a0cd934d214010004c9e163"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"bbb":"222","pageSize":"5","pageNum":"1","interfaceId":"320af2922a0cd934d214010004c9e163"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMessage'] = res.data;
                
     if (res.data && res.data.data && res.data.data.length) {
  state.tableText = res.data?.data.slice(0, 4).map(item => {
    return {
      label: item.NTITLE
    }
  })
  // const texts = res.data?.data.slice(0, 5).map(item => item?.DOCTITLE || '').filter(Boolean);
  // state.text2 = texts.join('          ');
} else {
  state.tableText = []
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableText = []
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-gztTopNews', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initGreeting();
// 执行自定义方法
setDom();
// 执行自定义方法
onSocket();
onMounted(() => {
setPageScale('t-l-c-gztTopNews', global.appScaleMode, 'normal');
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

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTablex0x5ComputedData = computed(() => _.merge({}, componentState.tTablex0x5.default, componentState.tTablex0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

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
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tTablex0x5ComputedData,
tRectx0x6ComputedData,
onclick1774838362299,
};
},
};