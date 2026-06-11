window.businessMessageComponent = {
template: 
`<div id="t-l-c-businessMessage" class="t-l-c-businessMessage" >` +
`<t-rect id="t-rect-09e8.3b71afa9a" class="businessMessage-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-afae.576bf09ee" class="businessMessage-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-26fc.42aa488dd" class="businessMessage-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle" @click="onclick1734493226123">` +
`</t-rect>` +
`<t-text id="t-text-1101.946bfcb11" class="businessMessage-t-text-0-4"  :label="replaceCssVariables(state.IS_FINISH, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle" :show-title="tTextx0x4ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-85e6.8e2ae94e5" class="businessMessage-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-8a54.4f2e413df" class="businessMessage-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-5c90.1906820e5" class="businessMessage-t-text-0-7"  :label="replaceCssVariables(state.type, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle" :show-title="tTextx0x7ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-b2de.98769e346" class="businessMessage-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-be22.060091258" class="businessMessage-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-610d.01e0076da" class="businessMessage-t-text-0-10"  :label="tTextx0x10ComputedData.label" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-5b18.b811a1a6b" class="businessMessage-t-text-0-11"  :label="replaceCssVariables(state.questionName, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle" :show-title="tTextx0x11ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-b136.79a29b68f" class="businessMessage-t-text-0-12"  :label="replaceCssVariables(state.longitude, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle" :show-title="tTextx0x12ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-bc30.f8a081eb4" class="businessMessage-t-text-0-13"  :label="replaceCssVariables(state.latitude, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle" :show-title="tTextx0x13ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-a3dd.58079667c" class="businessMessage-t-text-0-14"  :label="replaceCssVariables(state.name, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle" :show-title="tTextx0x14ComputedData.showTitle">` +
`</t-text>` +
`</div>` +
'',
setup() {
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
   IS_FINISH: "--",
   type: "--",
   questionName: "--",
   longitude: "--",
   latitude: "--",
   name: "--",
   POINT_CODE: "",
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
            default: {"width":"400px","height":"282px","position":"unset","left":"725px","top":"337px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"282px","position":"unset","left":"725px","top":"337px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"400px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"725px","top":"337px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"725px","top":"337px","animationName":""}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1087px","top":"348px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1087px","top":"348px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"278px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"404px","left":"832px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"278px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"404px","left":"832px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"}}},
showTitle:true, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"90px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"444px","left":"741px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""},
            
            },
 default: { 
 
label:"行业类型：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"444px","left":"741px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"90px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"404px","left":"741px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""},
            
            },
 default: { 
 
label:"是否监测：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"404px","left":"741px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"269px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"444px","left":"835px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"269px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"444px","left":"835px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""}}},
showTitle:true, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"90px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"484px","left":"741px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""},
            
            },
 default: { 
 
label:"问题名称：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"484px","left":"741px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""}}}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"90px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"524px","left":"742px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"经度：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"524px","left":"742px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":"","textAlign":"right"}}}, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"90px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"564px","left":"740px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"纬度：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"564px","left":"740px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":"","textAlign":"right"}}}, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"269px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"484px","left":"835px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"269px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"484px","left":"835px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""}}},
showTitle:true, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"269px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"524px","left":"835px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"269px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"524px","left":"835px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""}}},
showTitle:true, 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"269px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"564px","left":"835px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"269px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"564px","left":"835px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""}}},
showTitle:true, 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"344px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"735px","top":"351px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"38px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"344px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"735px","top":"351px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"38px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px"}}},
showTitle:true, 
 },
},
});
const init = () => {
state.longitude = global.businessDialog.dialogParmas?.LATITUDE || "--";
state.latitude = global.businessDialog.dialogParmas?.LONGITUDE || "--";
state.name = global.businessDialog.dialogParmas?.ENTER_NAME || "--";
state.type = global.businessDialog.dialogParmas?.HYLB || "--";
state.questionName = global.businessDialog.dialogParmas?.PROBLEM_NAME || "--";
state.IS_FINISH = global.businessDialog.dialogParmas?.IS_FINISH || "--";
console.log(global.businessDialog.dialogParmas, '弹窗信息');
};
const onclick1734493226123 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'',
                    data: {
                      businessDialog:{dialogName: ''}
                    },
                  });
};
// 接口函数
const getHeaderInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.timeValue,"TIME_TYPE":state.timeType,"POINT_CODE":state.POINT_CODE,"interfaceId":"5f8e9ef373ff8dc7328c8d9b3585947a"},}).then((res) => {
     // 成功的操作
     state.headerInfo = {
  "PRIMPOLLUTE": "--",
  "POINT_TYPE_NAME": "--",
  "AQILEVELINDEX": "--",
  "AQI": "--"
};
state.firstPollution = "首要污染物：--"
state.AQI_LEVEL[0].state = "--";
state.AQI_LEVEL[0].stateBgColor = getAQIColor("");
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.headerInfo = data.data
  state.AQI_LEVEL[0].state = data.data.AQI || "--";
  state.AQI_LEVEL[0].stateBgColor = getAQIColor(data.data.AQILEVELINDEX || "");
  state.firstPollution = `首要污染物：${replacePollutionCharacter(state.headerInfo.PRIMPOLLUTE || "--")}`
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.headerInfo = {
  "PRIMPOLLUTE": "--",
  "POINT_TYPE_NAME": "--",
  "AQILEVELINDEX": "--",
  "AQI": "--"
};
state.AQI_LEVEL[0].state = "--";
state.AQI_LEVEL[0].stateBgColor = getAQIColor("");
state.firstPollution = "首要污染物：--"
      reject(error);
    });
  });
};
// 接口函数
const getMenu = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"interfaceId":"365bdf06e6206428a083f238d4de166e"},}).then((res) => {
     // 成功的操作
     
console.log(res);
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.menuData = data.data.map(item => {
    return {
      name: item.NAME,
      label: item.LABEL,
      ...item
    }
  });
  state.menuSelect = state.menuData[0] && state.menuData[0].NAME || '';
  setContentComponentName(state.menuSelect);
  // 分割线显示
  state.dividerShow.divider1Show = state.menuData.length > 1;
  state.dividerShow.divider2Show = state.menuData.length > 2;
  state.dividerShow.divider3Show = state.menuData.length > 3;
  state.dividerShow.divider4Show = state.menuData.length > 4;
  let navTab = document.getElementById('t-tabs-3f14.634f07a5d');
  if (navTab && navTab.style) {
    navTab.style.height = state.menuData.length * 54 + 32 + 'px';
  }
} else {
  state.menuData = [];
  state.menuSelect = '';
  state.dividerShow.divider1Show = false;
  state.dividerShow.divider2Show = false;
  state.dividerShow.divider3Show = false;
  state.dividerShow.divider4Show = false;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getBaseInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"interfaceId":"695a6bc133482fdb411d79f293380132"},}).then((res) => {
     // 成功的操作
     state.baseInfo = {
  "POINT_NAME": "--",
  "POINT_TYPE_NAME": "--",
  "POINT_STREET": "--",
  "POINT_ADDRESS": "--"
}
state.pageTitle = "--"
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.baseInfo = { ...data.data }
state.pageTitle = data.data.POINT_NAME || "--"
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.baseInfo = {
  "POINT_NAME": "--",
  "POINT_TYPE_NAME": "--",
  "POINT_STREET": "--",
  "POINT_ADDRESS": "--"
}
state.pageTitle = "--"
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-businessMessage', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-businessMessage', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
init();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tTextx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tTextx0x8ComputedData,
tTextx0x9ComputedData,
tTextx0x10ComputedData,
tTextx0x11ComputedData,
tTextx0x12ComputedData,
tTextx0x13ComputedData,
tTextx0x14ComputedData,
onclick1734493226123,
};
},
};