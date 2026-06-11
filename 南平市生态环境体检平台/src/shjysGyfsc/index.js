window.shjysGyfscComponent = {
template: 
`<div id="t-l-c-shjysGyfsc" class="t-l-c-shjysGyfsc" >` +
`<t-search id="t-search-f587.478ec4a0f" class="shjysGyfsc-t-search-0-0"  :type="tSearchx0x0ComputedData.type" :input-value="state.name" :maxlength="tSearchx0x0ComputedData.maxlength" :minlength="tSearchx0x0ComputedData.minlength" :show-word-limit="tSearchx0x0ComputedData.showWordLimit" :placeholder="tSearchx0x0ComputedData.placeholder" :clearable="tSearchx0x0ComputedData.clearable" :show-password="tSearchx0x0ComputedData.showPassword" :disabled="tSearchx0x0ComputedData.disabled" :prefix-icon="tSearchx0x0ComputedData.prefix-icon" :suffix-icon="tSearchx0x0ComputedData.suffix-icon" :rows="tSearchx0x0ComputedData.rows" :autosize="tSearchx0x0ComputedData.autosize" :name="tSearchx0x0ComputedData.name" :readonly="tSearchx0x0ComputedData.readonly" :step="tSearchx0x0ComputedData.step" :autofocus="tSearchx0x0ComputedData.autofocus" :form="tSearchx0x0ComputedData.form" :label="tSearchx0x0ComputedData.label" :tabindex="tSearchx0x0ComputedData.tabindex" :validate-event="tSearchx0x0ComputedData.validateEvent" :c-style="tSearchx0x0ComputedData.cStyle" :has-search-btn="tSearchx0x0ComputedData.hasSearchBtn" @input="oninput1738745314318">` +
`</t-search>` +
`<t-button id="t-button-888b.3eae03772" class="shjysGyfsc-t-button-0-1"  :label="tButtonx0x1ComputedData.label" :round="tButtonx0x1ComputedData.round" :plain="tButtonx0x1ComputedData.plain" :disabled="tButtonx0x1ComputedData.disabled" :type="tButtonx0x1ComputedData.type" :size="tButtonx0x1ComputedData.size" :native-type="tButtonx0x1ComputedData.native-type" :c-style="tButtonx0x1ComputedData.cStyle" @click="onclick1739352974754">` +
`</t-button>` +
`<t-table id="t-table-3144.232785c32" class="shjysGyfsc-t-table-0-2"  :height="tTablex0x2ComputedData.height" :stripe="tTablex0x2ComputedData.stripe" :border="tTablex0x2ComputedData.border" :auto-scroll="tTablex0x2ComputedData.autoScroll" :speed="tTablex0x2ComputedData.speed" :columns="tTablex0x2ComputedData.columns" :data="state.data" :default-sort="tTablex0x2ComputedData.defaultSort" :c-style="tTablex0x2ComputedData.cStyle" @cell-click="oncellClick1739353044146">` +
`</t-table>` +
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
   WATER_CODE: "",
   WSYSTEM_CODE: "",
   data: [],
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
            default: {"width":"341px","height":"32px","position":"unset","left":"8px","top":"0px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"341px","height":"32px","position":"unset","left":"8px","top":"0px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tButtonx0x1: {
defaultStyle: {
            default: {"width":"49px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","position":"unset","left":"353px","top":"0px","animationName":""},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"49px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","position":"unset","left":"353px","top":"0px","animationName":""},"hover":{"background":"var(--business-btn-active)"},"active":{"background":"var(--business-btn-active)"},"focus":{"background":"var(--business-btn-active)"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tTablex0x2: {
defaultStyle: {
            default: {"width":"394px","height":"207px","position":"unset","left":"8px","top":"40px","paddingTop":"0px","borderBottom":"0px solid ","animationName":""},
            
            },
 default: { 
 
height:"207",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"","align":"center","type":"state","stateKey":"location","stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2025-02-14/2254708ce00a4b2d8c6ada4b183bc9ae.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"","width":"0PX","height":"0PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"44PX"},{"label":"名称","key":"COMPANY_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"156PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"设计规模（万吨/日）","key":"DESIGN_POWER","align":"right","operationList":[],"stateList":[],"width":"144PX","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"14PX"}},"headerAlign":"right"},{"label":"详情","key":"c","stateKey":"c","align":"center","type":"default","operationList":[{"name":"详情","id":"1","fontStyle":{"color":"rgba(0, 183, 255, 1)","fontSize":"14PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"width":"50PX","style":{"fontStyle":{"width":"40PX","height":"PX","color":"var(--business-theme)","fontSize":"14PX !important"},"cellStyle":{"cursor":"pointer"}},"infoKey":"","showOverflowTooltip":false}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"394px","height":"207px","position":"unset","left":"8px","top":"40px","paddingTop":"0px","borderBottom":"0px solid ","animationName":""}},"headerCell":{"default":{"borderBottom":"0px solid rgba(26,27,31,1)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px","paddingLeft":"4px","paddingRight":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px","paddingLeft":"4px","paddingRight":"4px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)","paddingLeft":"0px","paddingRight":"0px"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
});
const handleTableClick = (cell,column,row) => {

if (column.label === '定位' && !!row.location) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "goto",
    data: {
      "LONGITUDE": row.LONGITUDE,
      "LATITUDE": row.LATITUDE,
      "level": "12"
    }
  });
}
};
const getProvide = () => {
const rootData = inject('WSystemState')
const rootData2 = inject('RiverState')
const rootData3 = inject('surfaceWaterParamsState');

// 流域
if (rootData3.systemRiverType === "WSYSTEM") {
  watch(
    () => rootData?.WSYSTEM_CODE,
    (val) => {
      state.WSYSTEM_CODE = val || ""
      state.WATER_CODE = ""
      getListData();
    },
    {
      deep: true,
      immediate: true,
    }
  )
}

// 河涌
if (rootData3.systemRiverType === "WATER") {
  watch(
    () => rootData2?.WATER_CODE,
    (val) => {
      state.WSYSTEM_CODE = ""
      state.WATER_CODE = val || ""
      getListData();
    },
    {
      deep: true,
      immediate: true,
    }
  )
}
};
const oninput1738745314318 = (value) => {
// 设置变量值
state.name = value;
};
const onclick1739352974754 = () => {
// 事件交互-请求调用接口
getListData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const oncellClick1739353044146 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(cell,column,row);
};
// 接口函数
const getListData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"WATER_CODE":state.WATER_CODE,"WSYSTEM_CODE":state.WSYSTEM_CODE,"KEYWORD":state.name,"REGION_CODE":"","interfaceId":"77f9805279512e62b2be22c17db17235"},}).then((res) => {
     // 成功的操作
     console.log('工业废水厂列表', res.data)

state.data = [];

if (res?.data?.head?.statusCode === '200') {
  state.data = res?.data?.data?.map((item) => ({
    ...item,
    c: '详情',
    location: `${!!(item.LATITUDE && item.LONGITUDE)}`
  })) || [];
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.data = [];
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [""], () => {
getListData();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-shjysGyfsc', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-shjysGyfsc', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
getProvide();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tSearchx0x0ComputedData = computed(() => _.merge({}, componentState.tSearchx0x0.default, componentState.tSearchx0x0?.[state.screenSize]));

 const tButtonx0x1ComputedData = computed(() => _.merge({}, componentState.tButtonx0x1.default, componentState.tButtonx0x1?.[state.screenSize]));

 const tTablex0x2ComputedData = computed(() => _.merge({}, componentState.tTablex0x2.default, componentState.tTablex0x2?.[state.screenSize]));

return {
global,
state,
componentState,
tSearchx0x0ComputedData,
tButtonx0x1ComputedData,
tTablex0x2ComputedData,
oninput1738745314318,
onclick1739352974754,
oncellClick1739353044146,
};
},
};