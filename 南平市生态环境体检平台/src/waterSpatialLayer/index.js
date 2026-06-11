window.waterSpatialLayerComponent = {
template: 
`<div id="t-l-c-waterSpatialLayer" class="t-l-c-waterSpatialLayer" >` +
`<t-search id="t-search-c71c.e4ba918ac" class="waterSpatialLayer-t-search-0-0"  :type="tSearchx0x0ComputedData.type" :input-value="state.name" :maxlength="tSearchx0x0ComputedData.maxlength" :minlength="tSearchx0x0ComputedData.minlength" :show-word-limit="tSearchx0x0ComputedData.showWordLimit" :placeholder="tSearchx0x0ComputedData.placeholder" :clearable="tSearchx0x0ComputedData.clearable" :show-password="tSearchx0x0ComputedData.showPassword" :disabled="tSearchx0x0ComputedData.disabled" :prefix-icon="tSearchx0x0ComputedData.prefix-icon" :suffix-icon="tSearchx0x0ComputedData.suffix-icon" :rows="tSearchx0x0ComputedData.rows" :autosize="tSearchx0x0ComputedData.autosize" :name="tSearchx0x0ComputedData.name" :readonly="tSearchx0x0ComputedData.readonly" :step="tSearchx0x0ComputedData.step" :autofocus="tSearchx0x0ComputedData.autofocus" :form="tSearchx0x0ComputedData.form" :label="tSearchx0x0ComputedData.label" :tabindex="tSearchx0x0ComputedData.tabindex" :validate-event="tSearchx0x0ComputedData.validateEvent" :c-style="tSearchx0x0ComputedData.cStyle" :has-search-btn="tSearchx0x0ComputedData.hasSearchBtn" @input="oninput1734342923320">` +
`</t-search>` +
`<t-table id="t-table-87a9.01c309f3" class="waterSpatialLayer-t-table-0-1"  :height="tTablex0x1ComputedData.height" :stripe="tTablex0x1ComputedData.stripe" :border="tTablex0x1ComputedData.border" :auto-scroll="tTablex0x1ComputedData.autoScroll" :speed="tTablex0x1ComputedData.speed" :columns="tTablex0x1ComputedData.columns" :data="state.list" :default-sort="tTablex0x1ComputedData.defaultSort" :c-style="tTablex0x1ComputedData.cStyle" @cell-click="oncellClick1734316999472">` +
`</t-table>` +
`<t-button id="t-button-8f82.b47fc81a" class="waterSpatialLayer-t-button-0-2"  :label="tButtonx0x2ComputedData.label" :round="tButtonx0x2ComputedData.round" :plain="tButtonx0x2ComputedData.plain" :disabled="tButtonx0x2ComputedData.disabled" :type="tButtonx0x2ComputedData.type" :size="tButtonx0x2ComputedData.size" :native-type="tButtonx0x2ComputedData.native-type" :c-style="tButtonx0x2ComputedData.cStyle" @click="onclick1734490009172">` +
`</t-button>` +
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
   list: [],
   name: "",
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
tSearchx0x0: {
defaultStyle: {
            default: {"width":"348px","height":"32px","position":"unset","left":"20px","top":"20px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入关键字",
clearable:true,
showPassword:false,
disabled:false,
'prefix-icon':"",
'suffix-icon':"",
rows:2,
autosize:false,
name:"",
readonly:false,
step:"",
autofocus:false,
form:"",
label:"",
tabindex:"",
validateEvent:true,
cStyle:{"wrapper":{"default":{"width":"348px","height":"32px","position":"unset","left":"20px","top":"20px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tTablex0x1: {
defaultStyle: {
            default: {"width":"410px","height":"815px","position":"unset","left":"20px","top":"65px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"815",
stripe:true,
border:false,
autoScroll:"rowScroll",
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"44PX","type":"state","stateKey":"iconStatus"},{"label":"固定源名称","key":"ENTER_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"200PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"行业","key":"TRADE_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"112PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"详情","key":"OPTION_NAME","align":"center","operationList":[{"name":"详情","id":"1","fontStyle":{"color":"rgba(255, 0, 0, 1)","fontSize":"14PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"54PX","showOverflowTooltip":true,"headerAlign":"center","style":{"fontStyle":{"fontSize":"14PX","color":"var(--business-theme)"},"imageStyle":{"backgroundImage":""},"cellStyle":{"cursor":"pointer"}},"type":"default","stateKey":"isShowIcon","infoKey":""}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"815px","position":"unset","left":"20px","top":"65px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"0px solid rgba(26,27,31,1)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tButtonx0x2: {
defaultStyle: {
            default: {"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","position":"unset","left":"380px","top":"20px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","position":"unset","left":"380px","top":"20px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
});
const getInputValue = (data) => {
if (typeof (data) === 'string') {
  state.name = data;
}
};
const initPage = () => {
getList()
};
const handleClickTable = (row,col) => {
switch (col.label) {
  case "定位":
  case "固定源名称":
    // 发送消息
    rootData.rootSocket.emit('message', {
      room: global.socketRoom,// 房间号
      type: "runInteractive", // 消息名称
      data: [
        {
          "code": "longitude",
          "shareCode": "longitude",
          "defaultValue": "",
          "runtimeValue": row.LONGITUDE || ""
        },
        {
          "shareCode": "latitude",
          "code": "latitude",
          "defaultValue": "",
          "name": "",
          "runtimeValue": row.LATITUDE || ""
        },
        {
          "shareCode": "standenterid",
          "code": "standenterid",
          "defaultValue": "",
          "name": "",
          "runtimeValue": row.STANDENTERID || ""
        },
        {
          "shareCode": "opt_map_type",
          "code": "opt_map_type",
          "defaultValue": "dingwei",
          "name": "",
          "runtimeValue": "dingwei"
        }
      ]
    });

    break;
  case "详情":
    window.open(`http://192.168.0.202:7777/web-portal/psa/summary/summary-menu!showInfo.vm?&longitude=${row.LONGITUDE || ""}&latitude=${row.LATITUDE || ""}&standenterid=${row.STANDENTERID || ""}&opt_map_type=dingwei`, "_blank");
    break;
  default:
    break;
}

};
const changeName = () => {
getList();
// 发送消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "value",
      "shareCode": "ENTER_KEYWORD",
      "defaultValue": "",
      "runtimeValue": state.name
    }
  ]
});

};
const oncellClick1734316999472 = (row,column,cell,event) => {
// 执行自定义方法
handleClickTable(row,column);
};
const oninput1734342923320 = (value) => {
// 设置变量值
state.name = value;
};
const onclick1734490009172 = () => {
// 执行自定义方法
changeName();
};
// 接口函数
const getList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"pageNum":"1","pageSize":"2000","AREA_CODE":"","STANDENTERID":"","ENTER_KEYWORD":state.name,"REGION_CODE":global.regionaQuery.regionCode,"TRADE_CODE":"","ENTERPRISE_TYPE":"","POLLUTE_TYPE_NAME":"","DATASOURCE_NAME":"","interfaceId":"f706442e3026b6d35abe8fa8dbb2d15c"},}).then((res) => {
     // 成功的操作
     state.list = [];

if (res?.data?.head?.statusCode === '200' && res?.data?.data.length) {
  state.list = res.data.data.map((item) => ({
    ...item,
    // 固定源名称
    ENTER_NAME: item?.ENTER_NAME || '-',
    // 行业
    TRADE_NAME: item?.TRADE_NAME || '-',
    // 详情
    OPTION_NAME: "详情",
    // 定位
    iconStatus: `${!!(item.LONGITUDE && item.LATITUDE)}`
  }))
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.list = [];
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterSpatialLayer', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-waterSpatialLayer', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tSearchx0x0ComputedData = computed(() => _.merge({}, componentState.tSearchx0x0.default, componentState.tSearchx0x0?.[state.screenSize]));

 const tTablex0x1ComputedData = computed(() => _.merge({}, componentState.tTablex0x1.default, componentState.tTablex0x1?.[state.screenSize]));

 const tButtonx0x2ComputedData = computed(() => _.merge({}, componentState.tButtonx0x2.default, componentState.tButtonx0x2?.[state.screenSize]));

return {
global,
state,
componentState,
tSearchx0x0ComputedData,
tTablex0x1ComputedData,
tButtonx0x2ComputedData,
oninput1734342923320,
oncellClick1734316999472,
onclick1734490009172,
};
},
};