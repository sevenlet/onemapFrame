window.waterTraceabilityContentComponent = {
template: 
`<div id="t-l-c-waterTraceabilityContent" class="t-l-c-waterTraceabilityContent" >` +
`<t-component id="t-component-bc7f.b7d59ffa4" class="waterTraceabilityContent-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-51b1.2d4ab3646" class="waterTraceabilityContent-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode">` +
`</t-component>` +
`<t-row v-if="state.panelName === 'mainPanel'" id="t-row-500b.8a4282c55" class="waterTraceabilityContent-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align">` +
`<t-text id="t-text-1bbc.292a467e2" class="waterTraceabilityContent-t-text-0-2-0"  :label="tTextx0x2x0ComputedData.label" :editable="tTextx0x2x0ComputedData.editable" :c-style="tTextx0x2x0ComputedData.cStyle" @click="onclick1733723979280">` +
`</t-text>` +
`<t-text id="t-text-5001.13952ab12" class="waterTraceabilityContent-t-text-0-2-1"  :label="replaceCssVariables(filterData(state.headerInfo.POINT_NAME, componentPropBindingMap?.['t-text-5001.13952ab12']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x2x1ComputedData.editable" :c-style="tTextx0x2x1ComputedData.cStyle" :show-title="tTextx0x2x1ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-8f83.4cdb67f43" class="waterTraceabilityContent-t-text-0-2-2"  :label="replaceCssVariables(filterData(state.headerInfo.type, componentPropBindingMap?.['t-text-8f83.4cdb67f43']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x2x2ComputedData.editable" :c-style="tTextx0x2x2ComputedData.cStyle">` +
`</t-text>` +
`<t-list-card-common id="t-list-card-common-b400.91fe9d2ff" class="waterTraceabilityContent-t-list-card-common-0-2-3"  :c-style="tListCardCommonx0x2x3ComputedData.cStyle" :key-word="tListCardCommonx0x2x3ComputedData.keyWord" :default-checked="tListCardCommonx0x2x3ComputedData.defaultChecked" :tab="tListCardCommonx0x2x3ComputedData.tab" :collapse="tListCardCommonx0x2x3ComputedData.collapse" :collapse-text="tListCardCommonx0x2x3ComputedData.collapseText" :display-count="tListCardCommonx0x2x3ComputedData.displayCount" :data-alias="tListCardCommonx0x2x3ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.headerInfo.WATERQUALITYLEVELNAME, componentPropBindingMap?.['t-list-card-common-b400.91fe9d2ff']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-list-card-common>` +
`<t-list-card-common id="t-list-card-common-ca3e.4acae3791" class="waterTraceabilityContent-t-list-card-common-0-2-4"  :c-style="tListCardCommonx0x2x4ComputedData.cStyle" :key-word="tListCardCommonx0x2x4ComputedData.keyWord" :default-checked="tListCardCommonx0x2x4ComputedData.defaultChecked" :tab="tListCardCommonx0x2x4ComputedData.tab" :collapse="tListCardCommonx0x2x4ComputedData.collapse" :collapse-text="tListCardCommonx0x2x4ComputedData.collapseText" :display-count="tListCardCommonx0x2x4ComputedData.displayCount" :data-alias="tListCardCommonx0x2x4ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.headerInfo.ISSTANDARDSSTR, componentPropBindingMap?.['t-list-card-common-ca3e.4acae3791']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-list-card-common>` +
`<t-rect v-if="state.headerInfo.isShowAlarm === true" id="t-rect-5459.0054cfc89" class="waterTraceabilityContent-t-rect-0-2-5"  :tip="tRectx0x2x5ComputedData.tip" :label="tRectx0x2x5ComputedData.label" :active="tRectx0x2x5ComputedData.active" :c-style="tRectx0x2x5ComputedData.cStyle">` +
`</t-rect>` +
`</t-row>` +
`<t-rect id="t-rect-5e3b.5e9377bde" class="waterTraceabilityContent-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-component id="t-component-8a71.c7baaba58" class="waterTraceabilityContent-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :loading="tComponentx0x4ComputedData.loading" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName" :page-id="tComponentx0x4ComputedData.pageId" :page-code="tComponentx0x4ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-bc7f.b7d59ffa4":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-51b1.2d4ab3646":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-row-500b.8a4282c55":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-1bbc.292a467e2":{"attributeName":"tTextx0x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-5001.13952ab12":{"attributeName":"tTextx0x2x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}},"t-text-8f83.4cdb67f43":{"attributeName":"tTextx0x2x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-common-b400.91fe9d2ff":{"attributeName":"tListCardCommonx0x2x3","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"tab":{"filters":[]},"collapse":{"filters":[]},"collapseText":{"filters":[]},"displayCount":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-list-card-common-ca3e.4acae3791":{"attributeName":"tListCardCommonx0x2x4","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"tab":{"filters":[]},"collapse":{"filters":[]},"collapseText":{"filters":[]},"displayCount":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-rect-5459.0054cfc89":{"attributeName":"tRectx0x2x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5e3b.5e9377bde":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-8a71.c7baaba58":{"attributeName":"tComponentx0x4","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   componentSourceUpdateKey: 0,
   panelName: "mainPanel",
   isFilterPanelShow: false,
   selectData: [],
   dispatchUrl: "http://19.130.161.126:8888/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1",
   interfaceId: {"header":"","sy":""},
   sourceParmasState: {},
   syList: [],
   pageSize: "10000",
   ENTERPRISE_TYPE: "",
   wryOpts: [],
   isShowWrwCheckbox: false,
   wrwCheckboxArr: [],
   wrwCheckboxOpts: [],
   alarmList: [],
   headerInfo: {"POINT_NAME":"-","WATERQUALITYLEVELNAME":[],"ISSTANDARDSSTR":[],"isShowAlarm":false,"type":"-"},
   wryActive: "",
   monitortime: "",
   parentParams: {"ASSESSTYPE":"monthly","POINT_CODE":"","DATA_FREQUENCY":"","MULTI_POLLUTANTS":"None"},
   treeData: [],
   treeActive: "",
   baseInfo: {"title":"-","controlLevel":"-","waterQuality":[{"state":"-","stateColor":"#000","stateBgColor":""}],"standard":[{"state":"-","stateColor":"#fff","stateBgColor":""}],"alarmText":"","alarmShow":false,"type":"-"},
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"445px","height":"900px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","overflow":"visible","visibility":"hidden","animationName":""},
            
            },
 default: { 
 
name:"waterTagFilterPanelComponent",
cStyle:{"wrapper":{"default":{"width":"445px","height":"900px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","overflow":"visible","visibility":"hidden","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/waterTagFilterPanel",
componentName:"waterTagFilterPanelComponent",
pageId:"ee601dc6ad28494c8a321aa354cde466",
pageCode:"waterTagFilterPanel", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"445px","height":"900px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","overflow":"visible","visibility":"hidden","animationName":""},
            
            },
 default: { 
 
name:"waterWiseTagFilterPanelComponent",
cStyle:{"wrapper":{"default":{"width":"445px","height":"900px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","overflow":"visible","visibility":"hidden","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/waterWiseTagFilterPanel",
componentName:"waterWiseTagFilterPanelComponent",
pageId:"b5d8eb1af2ae43cdbc58c18ce61d77ca",
pageCode:"waterWiseTagFilterPanel", 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"419px","height":"47px","position":"unset","left":"20px","top":"8px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"419px","height":"47px","position":"unset","left":"20px","top":"8px","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x2x0: {
defaultStyle: {
            default: {"width":"43px","height":"18px","color":"var(--t-white)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"18px","left":"16px","backgroundColor":"var(--t-font-color-gy1)","position":"unset","cursor":"pointer","animationName":"","fontSize":"var(--business-text-size-18)"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"43px","height":"18px","color":"var(--t-white)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"18px","left":"16px","backgroundColor":"var(--t-font-color-gy1)","position":"unset","cursor":"pointer","animationName":"","fontSize":"var(--business-text-size-18)"},"hover":{"backgroundColor":"var(--business-theme)"}},"itemWrapper":{"default":{"color":"var(--business-text-avianize)"}}}, 
 },
},
tTextx0x2x1: {
defaultStyle: {
            default: {"width":"auto","height":"var(--business-text-size-18)","color":"var(--business-white)","fontSize":"var(--business-text-size-18)","position":"unset","left":"469.8092289677372px","top":"205.12660047743043px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"10px","fontWeight":"600","animationName":"","textAlign":"left","max-width":"200px","marginRight":"6px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","borderLeft":"1px solid var(--business-white)","marginLeft":"10px","lineHeight":"20px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"var(--business-text-size-18)","color":"var(--business-white)","fontSize":"var(--business-text-size-18)","position":"unset","left":"469.8092289677372px","top":"205.12660047743043px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"10px","fontWeight":"600","animationName":"","textAlign":"left","max-width":"200px","marginRight":"6px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","borderLeft":"1px solid var(--business-white)","marginLeft":"10px","lineHeight":"20px"}}},
showTitle:true, 
 },
},
tTextx0x2x2: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-border-tag-text)","position":"unset","left":"260px","top":"-106px","borderLeft":"1px solid var(--business-border-tag-text)","borderTop":"1px solid var(--business-border-tag-text)","borderRight":"1px solid var(--business-border-tag-text)","borderBottom":"1px solid var(--business-border-tag-text)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"18px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"var(--business-text-size-12)","marginLeft":"10px","animationName":""},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-border-tag-text)","position":"unset","left":"260px","top":"-106px","borderLeft":"1px solid var(--business-border-tag-text)","borderTop":"1px solid var(--business-border-tag-text)","borderRight":"1px solid var(--business-border-tag-text)","borderBottom":"1px solid var(--business-border-tag-text)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"18px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"var(--business-text-size-12)","marginLeft":"10px","animationName":""}}}, 
 },
},
tListCardCommonx0x2x3: {
defaultStyle: {
            default: {"position":"unset","width":"50px","height":"20px","left":"672.8092289677372px","top":"207.12660047743043px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px","fontSize":"var(--business-text-size-18)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"position":"unset","width":"50px","height":"20px","left":"672.8092289677372px","top":"207.12660047743043px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px","fontSize":"var(--business-text-size-18)"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"50px","height":"20px","fontSize":"12px","lineHeight":"20px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"}},"cardIcon":{"default":{"display":"none"}}},
keyWord:"",
defaultChecked:"",
tab:false,
collapse:false,
collapseText:"数据",
displayCount:"0",
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
data:[], 
 },
},
tListCardCommonx0x2x4: {
defaultStyle: {
            default: {"position":"unset","width":"50px","height":"20px","left":"763.8092289677372px","top":"206.12660047743043px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-18)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"position":"unset","width":"50px","height":"20px","left":"763.8092289677372px","top":"206.12660047743043px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-18)"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"50px","height":"20px","fontSize":"12px","lineHeight":"20px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"}},"cardIcon":{"default":{"display":"none"}}},
keyWord:"",
defaultChecked:"",
tab:false,
collapse:false,
collapseText:"数据",
displayCount:"0",
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
data:[], 
 },
},
tRectx0x2x5: {
defaultStyle: {
            default: {"width":"20px","height":"20px","position":"unset","left":"852.8092289677372px","top":"206.12660047743043px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-11/c042c6b49c404c56a0dafaa835ad05b2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","marginLeft":"10px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"20px","height":"20px","position":"unset","left":"852.8092289677372px","top":"206.12660047743043px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-11/c042c6b49c404c56a0dafaa835ad05b2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","marginLeft":"10px","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"60px","left":"2px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"60px","left":"2px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"450px","height":"831px","margin":"0 auto","position":"unset","left":"0px","top":"78px"},
            
            },
 default: { 
 
name:"waterTraceabilityContentWrapComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"450px","height":"831px","margin":"0 auto","position":"unset","left":"0px","top":"78px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/waterTraceabilityContentWrap",
componentName:"waterTraceabilityContentWrapComponent",
pageId:"1fe0c4df12e54e449d79b7c85789953b",
pageCode:"waterTraceabilityContentWrap", 
 },
},
});
const getProvider = () => {
const rootData = inject('sourceParmasState');
// state.componentSourceUpdateKey = inject('componentSourceUpdateKey');

state.componentSourceUpdateKey = computed(() => {
  const value = inject('componentSourceUpdateKey')
  return value?.value ?? value  // 处理可能是 ref 的情况
})
console.log(rootData, 'sourceParmasState'); // 接收到的值
console.log(state.componentSourceUpdateKey, 88890)

state.sourceParmasState = rootData;

// {
//     "screenSize": "",
//     "componentSourceParmas": {
//         "POINT_CODE": "C14",
//         "ASSESSTYPE": "monthly",
//         "DATA_FREQUENCY": "4",
//         "MULTI_POLLUTANTS": "W21003,W21011",
//         "MONITORTIME": "2022-03"
//     },
//     "componentSourceName": "waterTraceabilityContentComponent",
//     "iframeRecordDetailUrl": "",
//     "componentName": "waterSurfaceEntryComponent",
//     "activeMenuData": {
//         "data": [
//             {
//                 "RES_ID": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//                 "RES_NAME": "地表水",
//                 "RES_TYPE": 10,
//                 "PARENT": "5fa268bb-17b6-4de3-ada8-bc1465e1b0b0",
//                 "IS_MENU": 1,
//                 "MENU_URL": "waterSurfaceEntry",
//                 "TARGET": "2",
//                 "MENU_ICON": null,
//                 "PERMISSION_CODE": "/waterSurfaceEntry",
//                 "SORT": 10,
//                 "FUNC_URL": null,
//                 "AUTH_VISIT": 1,
//                 "IS_SHOW_DROPDOWNMENU": null,
//                 "IS_SHOW_FIRSTMENU": null,
//                 "EXT1": "{\"resCode\":\"onemap_manual_surfacewater\",\"appURL\":\"http://192.168.0.202:7777/mapgo5.0/preview.html?appID=z1zb8xmkmeo6yqu&appType=2D&appName=地表水\"}",
//                 "EXT2": null,
//                 "EXT3": null,
//                 "EXT4": null,
//                 "APP_ID": "DCP.LXT.DEV",
//                 "CUSTOM_SETTING": {
//                     "showBreadcrumbs": "1",
//                     "showTitle": "1"
//                 },
//                 "RES_PATH": [
//                     {
//                         "MENU_URL": null,
//                         "RES_NAME": "水环境",
//                         "RES_ID": "b5b45013-49d8-43e8-98a6-6179431c99de",
//                         "MENU_ICON": null
//                     },
//                     {
//                         "MENU_URL": null,
//                         "RES_NAME": "环境现状",
//                         "RES_ID": "5fa268bb-17b6-4de3-ada8-bc1465e1b0b0",
//                         "MENU_ICON": null
//                     },
//                     {
//                         "MENU_URL": "waterSurfaceEntry",
//                         "RES_NAME": "地表水",
//                         "RES_ID": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//                         "MENU_ICON": null
//                     }
//                 ],
//                 "CHILDREN": []
//             }
//         ],
//         "operation": "highlight",
//         "type": "subject"
//     },
//     "iframeSourceUrl": "",
//     "activeTabLast": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//     "iframePointDetailUrl": "",
//     "activeTab": "source",
//     "tabList": [
//         {
//             "id": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//             "label": "地表水",
//             "url": "waterSurfaceEntry",
//             "rawData": {
//                 "RES_ID": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//                 "RES_NAME": "地表水",
//                 "RES_TYPE": 10,
//                 "PARENT": "5fa268bb-17b6-4de3-ada8-bc1465e1b0b0",
//                 "IS_MENU": 1,
//                 "MENU_URL": "waterSurfaceEntry",
//                 "TARGET": "2",
//                 "MENU_ICON": null,
//                 "PERMISSION_CODE": "/waterSurfaceEntry",
//                 "SORT": 10,
//                 "FUNC_URL": null,
//                 "AUTH_VISIT": 1,
//                 "IS_SHOW_DROPDOWNMENU": null,
//                 "IS_SHOW_FIRSTMENU": null,
//                 "EXT1": "{\"resCode\":\"onemap_manual_surfacewater\",\"appURL\":\"http://192.168.0.202:7777/mapgo5.0/preview.html?appID=z1zb8xmkmeo6yqu&appType=2D&appName=地表水\"}",
//                 "EXT2": null,
//                 "EXT3": null,
//                 "EXT4": null,
//                 "APP_ID": "DCP.LXT.DEV",
//                 "CUSTOM_SETTING": {
//                     "showBreadcrumbs": "1",
//                     "showTitle": "1"
//                 },
//                 "RES_PATH": [
//                     {
//                         "MENU_URL": null,
//                         "RES_NAME": "水环境",
//                         "RES_ID": "b5b45013-49d8-43e8-98a6-6179431c99de",
//                         "MENU_ICON": null
//                     },
//                     {
//                         "MENU_URL": null,
//                         "RES_NAME": "环境现状",
//                         "RES_ID": "5fa268bb-17b6-4de3-ada8-bc1465e1b0b0",
//                         "MENU_ICON": null
//                     },
//                     {
//                         "MENU_URL": "waterSurfaceEntry",
//                         "RES_NAME": "地表水",
//                         "RES_ID": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//                         "MENU_ICON": null
//                     }
//                 ],
//                 "CHILDREN": []
//             }
//         }
//     ],
//     "iframeUrl": "",
//     "showRightMain": true,
//     "iframeVisible": false
// }


};
const handleClickBack = (column,row) => {
console.log('行列数据', row, column);

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "score_id",
      "shareCode": "SCORE_ID",
      "defaultValue": "",
      "runtimeValue": row.SCORE_ID || '',
    }, {
      "code": "standenterid",
      "name": "",
      "defaultValue": "",
      "shareCode": "STANDENTERID",
      "runtimeValue": row.STANDENTERID || '',
    }
  ]
});


// 

if (column.label === '主要原因') {
  // 设置弹框使用的参数
  global.businessDialog.dialogParmas = {
    SCORE_ID: row.SCORE_ID || "",
    STANDENTERID: row.STANDENTERID || "",
  };
  // 显示溯源弹窗
  global.businessDialog.dialogName = 'waterSourceReportComponent';
}

if (column.label === '操作') {
  // 派发操作列
  // dispatchTask(id);
}
};
const initPage = () => {
// console.log('获取全局弹窗信息', global.businessDialog);

// &REGION_CODE=440306000000&POINT_CODE=C15&MONITORTIME=2022-03&DATA_FREQUENCY=4&ASSESSTYPE=monthly&MULTI_POLLUTANTS=W21003,W21011
// state.parentParams = {
//   POINT_CODE: state.sourceParmasState?.componentSourceParmas.POINT_CODE || '',
//   ASSESSTYPE: state.sourceParmasState?.componentSourceParmas.ASSESSTYPE || '',
//   DATA_FREQUENCY: state.sourceParmasState?.componentSourceParmas.DATA_FREQUENCY || '',
//   MULTI_POLLUTANTS: state.sourceParmasState?.componentSourceParmas.MULTI_POLLUTANTS || 'None',
// };

state.parentParams = global.waterGlobalVariables.selectedPointInfo;

console.log('获取传递过来的参数',state.sourceParmasState, state.parentParams)
// 时间
// state.monitortime = state.sourceParmasState?.componentSourceParmas.MONITORTIME || '';
state.monitortime = global.waterGlobalVariables.selectedPointInfo.MONITORTIME || '';
// 自动（小时/天）、手工三个不同头部接口id
switch (state.parentParams.DATA_FREQUENCY) {
  case '1':
    // 自动-小时
    state.interfaceId.header = '6b55f61844ccd520f3f9a5a4f227f95e';
    break;
  case '2':
    // 自动-天
    state.interfaceId.header = '7e646485d5e40eb0cb831d4a5520f81a';
    break;
  case '4':
    // 手工
    state.interfaceId.header = 'c88965d570ad1d00197e1fee3a00c649';
    break;
  default:
    state.interfaceId.header = 'c88965d570ad1d00197e1fee3a00c649';
    break;
}

const init = async () => {
  // 获取监测时间
  // await getMonitortime();

  // 获取头部基本信息
  // await getHeaderInfo();
  apiRegistry.getHeaderInfo.request();
  // 获取行业列表
  // await getHyData();
  apiRegistry.getHyData.request();
  // 获取报警信息列表
  // await getAlarmList();
  apiRegistry.getAlarmList.request();
  // 接口id：报警8818a477f0a9f5587924ca85f106eb66；未报警607287764d212de49335ec24b47e006a          
  state.interfaceId.sy = state.headerInfo.isShowAlarm ? '607287764d212de49335ec24b47e006a' : '607287764d212de49335ec24b47e006a';
  // 获取污染物复选列表
  // await getWrwCheckboxOpts();
  apiRegistry.getWrwCheckboxOpts.request();
  // 获取污染源类型下拉
  // await getWryOpts();
  apiRegistry.getWryOpts.request();
  // 获取溯源列表
  // getSyListData();
  console.log(state.interfaceId.sy, '溯源接口');
};

init();

// {
//     "dialogParmas": {
//         "rowInfo": {
//             "UNIT_ID": "1_BAOAN",
//             "UNIT_CODE": "1",
//             "UNIT_NAME": "沙井河管控单元",
//             "UNIT_LEVEL": "1",
//             "LATITUDE": "",
//             "LONGITUDE": "",
//             "IS_LEAF": "1",
//             "WSYSTEM_CODE": "MZHLY00000",
//             "WSYSTEM_NAME": "茅洲河流域",
//             "canPosition": "false"
//         }
//     },
//     "dialogName": "waterQualityExceedingAlarmComponent"
// }

watch(() => state.sourceParmasState?.componentSourceParmas?.POINT_CODE, (newVal) => {
  if (newVal) {
    console.log(999999)
    state.parentParams = {
      POINT_CODE: state.sourceParmasState?.componentSourceParmas.POINT_CODE || '',
      ASSESSTYPE: state.sourceParmasState?.componentSourceParmas.ASSESSTYPE || '',
      DATA_FREQUENCY: state.sourceParmasState?.componentSourceParmas.DATA_FREQUENCY || '',
      MULTI_POLLUTANTS: state.sourceParmasState?.componentSourceParmas.MULTI_POLLUTANTS || 'None',
    };
    console.log('获取传递过来的参数',state.sourceParmasState, state.parentParams)
    // 时间
    state.monitortime = state.sourceParmasState?.componentSourceParmas.MONITORTIME || '';
    // 自动（小时/天）、手工三个不同头部接口id
switch (state.parentParams.DATA_FREQUENCY) {
  case '1':
    // 自动-小时
    state.interfaceId.header = '6b55f61844ccd520f3f9a5a4f227f95e';
    break;
  case '2':
    // 自动-天
    state.interfaceId.header = '7e646485d5e40eb0cb831d4a5520f81a';
    break;
  case '4':
    // 手工
    state.interfaceId.header = 'c88965d570ad1d00197e1fee3a00c649';
    break;
  default:
    state.interfaceId.header = 'c88965d570ad1d00197e1fee3a00c649';
    break;
}
  }
  apiRegistry.getHeaderInfo.request();
}, { deep: true })
};
const handleBack = () => {
// // 返回 水-控制单元-内容页面
// state.waterControlUnitState.componentName = 'waterControlUnitContentComponent';

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "closePointTrace",
      "shareCode": "closePointTrace",
      "defaultValue": "true",
      "runtimeValue": "true"
    }, {
      "code": "hiddenTraceDetail",
      "shareCode": "hiddenTraceDetail",
      "defaultValue": "true",
      "name": "",
      "runtimeValue": "true"
    }
  ]
});
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractiveChange", // 消息名称
  data: [
    {
      "code": "closePointTrace",
      "shareCode": "closePointTrace",
      "defaultValue": "true",
      "runtimeValue": "true"
    }, {
      "code": "hiddenTraceDetail",
      "shareCode": "hiddenTraceDetail",
      "defaultValue": "true",
      "name": "",
      "runtimeValue": "true"
    }
  ]
});

// 清空地图点位涟漪效果
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "clearGotoPoint", // 消息名称
  data: null
});

};
const changeWrwCheckbox = () => {
console.log(state.wrwCheckboxArr);

// 调整污染物复选框选中的值
if (state.wrwCheckboxArr.length) {
  state.parentParams.MULTI_POLLUTANTS = state.wrwCheckboxArr.join(',');
} else {
  state.parentParams.MULTI_POLLUTANTS = 'None';
}

// 获取溯源列表
// getSyListData();

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "MULTI_POLLUTANTS",
      "shareCode": "MULTI_POLLUTANTS",
      "defaultValue": "",
      "runtimeValue": state.parentParams.MULTI_POLLUTANTS || '999',
    }
  ]
});

};
const changeHy = (data) => {
console.log('溯源行业改变 ---', data);

state.treeActive = data?.[data.length - 1] || '';

// 获取溯源列表
// getSyListData();
sendMsg();

// 给地图发消息
rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    data: [
        {
            "code": "value",
            "shareCode": "TRADE_CODE",
            "defaultValue": "",
            "runtimeValue": state.treeActive || '',
        }
    ]
});

};
const handleTrendAnalysis = () => {
console.log('趋势分析', state.parentParams.POINT_CODE, state.monitortime, global.regionaQuery.regionCode)
if (state.parentParams.POINT_CODE && state.monitortime && global.regionaQuery.regionCode) {
  const url = `${global.syTrendAnalysisUrl}?form[POINTCODE]=${state.parentParams.POINT_CODE}&form[monitorTime]=${state.monitortime}&regionCode=${global.regionaQuery.regionCode}`;
  console.log(url);
  window.open(url, '_blank');
}


};
const handleWryTypeSelectChange = () => {

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "code",
      "shareCode": "ENTERPRISE_TYPE",
      "defaultValue": "",
      "runtimeValue": state.ENTERPRISE_TYPE || '',
    }
  ]
});
setTimeout(()=>{
  sendMsg();
},0)
};
const handlePageSizeSocket = () => {

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "pageSize",
      "shareCode": "pageSize",
      "defaultValue": "10000",
      "runtimeValue": state.pageSize || '10000'
    }
  ]
});

};
const dispatchTask = (id) => {
/**
 * 派发任务
 */

if (id) {
  // 记录行ID
  localStorage.setItem('pointIds', id);
  window.open(state.dispatchUrl);
}

};
const moreDispatchTask = () => {

if (!state.selectData?.length) {
  ElementPlus.ElMessage({
    message: '请先选择一条数据，再进行任务派发！',
    type: 'warning',
  });
  return;
}
const idString = state.selectData.map(item => item.STANDENTERID).join(',');
localStorage.removeItem('pointIds');
localStorage.setItem('pointIds', idString);
const url = 'https://stfs.sthj.fs.gdgov.cn/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1'
window.open(url, '_blank')
console.log('要对以下列表数据进行派发', idString, state.selectData);
};
const onSocket = () => {
// 页面中监听列表选中的列表项
rootData.rootOn('rootSocket:change', (socket) => {
  if (socket.type === "onInit") {
    console.log('初始化');
    setTimeout(() => {
      sendMsg();
    },0)
  }
  // 水环境要素-涉水企业列表页，进行了复选
  if (socket.type === "sySelectRow") {
    const { data } = socket;
    console.log('shjysSsqyNew - 水环境要素-溯源列表页，进行了复选', data);
    // 填充选中的列表
    state.selectData = data?.selectData || [];
  };
  if (socket.type === "syPop") {
    const { data } = socket;
    console.log('syPop - 点击主要原因', data);
    // 设置弹框使用的参数
    global.businessDialog.dialogParmas = {
      SCORE_ID: data.SCORE_ID || "",
      STANDENTERID: data.STANDENTERID || "",
    };
    // 显示溯源弹窗
    global.businessDialog.dialogName = 'waterSourceReportComponent';
  }
});
};
const sendMsg = () => {

// setTimeout(() => {

// }, 800);
  console.log('shjysSsqyNew 组件 - 执行 sendHtmlSocket')
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "syPage",
    data: {
      interfaceId: state.interfaceId.sy,
      pageSize: state.pageSize,
      MONITORTYPE: '',
      MONITORTIME: state.monitortime,
      POINT_CODE: state.parentParams.POINT_CODE,
      MULTI_POLLUTANTS: state.parentParams.MULTI_POLLUTANTS,
      ENTERPRISE_TYPE: state.ENTERPRISE_TYPE,
      TRADE_CODE: state.treeActive,

    }
  });
};
const setData = () => {
state.parentParams = {
  POINT_CODE: '',
  ASSESSTYPE: '',
  DATA_FREQUENCY: '',
  MULTI_POLLUTANTS: 'None',
};

};
const handlePanelVisisble = (panelName) => {
// 筛选面板-关联分析
const filterPanelDom = document.getElementById('t-component-bc7f.b7d59ffa4');
// 动态组件
const panelDom = document.getElementById('t-component-8a71.c7baaba58');
// 筛选面板-智慧推荐
const wiseFilterPanelDom = document.getElementById('t-component-51b1.2d4ab3646');
console.log(55567)
if (!filterPanelDom || !panelDom || !wiseFilterPanelDom) {
  return;
}

state.panelName = panelName;
/* 展示主面板 */
if (panelName === 'mainPanel') {
  panelDom.style.visibility = 'visible';
  filterPanelDom.style.visibility = 'hidden';
  wiseFilterPanelDom.style.visibility = 'hidden';
/* 展示筛选面板-智慧推荐 */
} else if (panelName === 'wiseFilterPanel') {
  panelDom.style.visibility = 'hidden';
  filterPanelDom.style.visibility = 'hidden';
  wiseFilterPanelDom.style.visibility = 'visible';
/* 展示筛选面板-关联分析 */
} else if (panelName === 'relationFilterPanel') {
  panelDom.style.visibility = 'hidden';
  filterPanelDom.style.visibility = 'visible';
  wiseFilterPanelDom.style.visibility = 'hidden';
}
// // 更新状态
// state.isFilterPanelShow = isFilterPanelShow;
// // 若展示筛选面板
// if (isFilterPanelShow) {
//   panelDom.style.visibility = 'hidden';
//   filterPanelDom.style.visibility = 'visible';
// } else {
//   filterPanelDom.style.visibility = 'hidden';
//   panelDom.style.visibility = 'visible';
// }
};
const watchSourceParams = () => {
// watch(() => state.componentSourceUpdateKey, (newVal) => {
//   console.log(newVal, 11111111)
//   initPage();
// }, { deep: true })

watch(() => state.parentParams.POINT_CODE, () => {
  initPage();
}, { deep: true })
};
const setTempSessionVariable = () => {
// 溯源状态中，如果点击点位，禁止发送关闭溯源面板
sessionStorage.setItem('traceState', '1')
};
const removeTempSessionVariable = () => {
sessionStorage.removeItem('traceState')
};
const onclick1733723979280 = () => {
// 执行自定义方法
handleBack();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getWrwCheckboxOpts: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DATA_FREQUENCY":"global.waterGlobalVariables.selectedPointInfo.DATA_FREQUENCY","MONITORTIME":"state.monitortime","POINT_CODE":"global.waterGlobalVariables.selectedPointInfo.POINT_CODE","interfaceId":"6d793644aea17e1abd93b0986532b446"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATA_FREQUENCY":global.waterGlobalVariables.selectedPointInfo.DATA_FREQUENCY,"MONITORTIME":state.monitortime,"POINT_CODE":global.waterGlobalVariables.selectedPointInfo.POINT_CODE,"interfaceId":"6d793644aea17e1abd93b0986532b446"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DATA_FREQUENCY":global.waterGlobalVariables.selectedPointInfo.DATA_FREQUENCY,"MONITORTIME":state.monitortime,"POINT_CODE":global.waterGlobalVariables.selectedPointInfo.POINT_CODE,"interfaceId":"6d793644aea17e1abd93b0986532b446"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWrwCheckboxOpts'] = res.data;
                
     // console.log('获取 污染物复选', res);

state.wrwCheckboxOpts = [];
state.wrwCheckboxArr = [];

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data?.length) {
  // 填充下拉
  for (let i = 0; i < data.data.length; i++) {
    const elem = data.data[i];
    if (elem.POLLUTENAME) {
      state.wrwCheckboxOpts.push({
        ...elem,
        label: elem.POLLUTENAME || '-',
        value: elem.POLLUTECODE || '',
      });
    }
  }
  state.wrwCheckboxArr = state.wrwCheckboxOpts.map((item) => item.value) || [];
  state.parentParams.MULTI_POLLUTANTS = state.wrwCheckboxArr.join(',');
}
console.log('填充后的 污染物复选', state.wrwCheckboxOpts, state.wrwCheckboxArr, state.parentParams.MULTI_POLLUTANTS);

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.wrwCheckboxOpts = [];
state.wrwCheckboxArr = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getHeaderInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"ASSESSTYPE":"global.waterGlobalVariables.selectedPointInfo.ASSESSTYPE","POINT_CODE":"global.waterGlobalVariables.selectedPointInfo.POINT_CODE","MONITORTIME":"state.monitortime","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"state.interfaceId.header"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"ASSESSTYPE":global.waterGlobalVariables.selectedPointInfo.ASSESSTYPE,"POINT_CODE":global.waterGlobalVariables.selectedPointInfo.POINT_CODE,"MONITORTIME":state.monitortime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":state.interfaceId.header},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"ASSESSTYPE":global.waterGlobalVariables.selectedPointInfo.ASSESSTYPE,"POINT_CODE":global.waterGlobalVariables.selectedPointInfo.POINT_CODE,"MONITORTIME":state.monitortime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":state.interfaceId.header});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHeaderInfo'] = res.data;
                
     // console.log('获取 溯源 头部信息', res);

// 清空原始数据
state.headerInfo = {
  // 点位名称
  POINT_NAME: '-',
  // 水质类别
  WATERQUALITYLEVELNAME: [
    {
      "state": "-",
      "stateColor": "#000",
      "stateBgColor": "#AAAAAA"
    }
  ],
  // 是否达标
  ISSTANDARDSSTR: [
    {
      "state": "-",
      "stateColor": "#fff",
      "stateBgColor": "#AAAAAA"
    }
  ],
  // 是否展示报警图标
  isShowAlarm: false,
  // 断面类型
  type: "-",
};

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.headerInfo.POINT_NAME = data.data.POINT_NAME || '-';
  state.headerInfo.WATERQUALITYLEVELNAME = [
    {
      "state": data.data.WATERQUALITYLEVELNAME || '-',
      "stateColor": "#000",
      "stateBgColor": getWaterLevelColor(data.data.WATERQUALITYLEVELNAME) || "#AAAAAA",
    }
  ];
  state.headerInfo.ISSTANDARDSSTR = [
    {
      "state": data.data.ISSTANDARDSSTR || '-',
      "stateColor": "#fff",
      "stateBgColor": getWaterLevelColor(data.data.ISSTANDARDSSTR) || "#AAAAAA",
    }
  ];

  // 断面类型
  if (state.interfaceId.header === 'c88965d570ad1d00197e1fee3a00c649') {
    // 手工
    if (data.data?.AUTO_POINTCODE) {
      state.headerInfo.type = '手&自';
    } else {
      state.headerInfo.type = '手工';
    }
  } else {
    // 自动站
    state.headerInfo.type = '自动';
  }
}

console.log('获取 溯源 头部信息', state.headerInfo);

// {
//     "POINT_CODE": "C17",
//     "POINT_NAME": "新桥河新桥公园",
//     "WATERQUALITYLEVELTARGETNAME": "Ⅴ类",
//     "WATER_CODE": "HD17260100",
//     "WATER_NAME": "新桥河",
//     "REGION_NAME": "新桥街道",
//     "WSYSTEM_NAME": "茅洲河流域",
//     "AUTO_POINTCODE": "",
//     "AUTO_POINTNAME": "",
//     "AUTO_LONGITUDE": "",
//     "AUTO_LATITUDE": "",
//     "CONNECT_PROPERTY": "",
//     "CODE_CONTROLLEVEL": "4",
//     "CONTROLLEVEL": "其他",
//     "LONGITUDE": "113.819677",
//     "LATITUDE": "22.748021",
//     "CODE_WATERQUALITYLEVEL": "4",
//     "WATERQUALITYLEVELNAME": "Ⅳ类",
//     "ISSTANDARDS": "1",
//     "ISSTANDARDSSTR": "达标",
//     "PRIMPOLLUTE": "总磷(0.10)",
//     "OVERPOLLUTE": ""
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空原始数据
state.headerInfo = {
  // 点位名称
  POINT_NAME: '-',
  // 水质类别
  WATERQUALITYLEVELNAME: [
    {
      "state": "-",
      "stateColor": "#000",
      "stateBgColor": "#AAAAAA"
    }
  ],
  // 是否达标
  ISSTANDARDSSTR: [
    {
      "state": "-",
      "stateColor": "#fff",
      "stateBgColor": "#AAAAAA"
    }
  ],
  // 是否展示报警图标
  isShowAlarm: false,
  // 断面类型
  type: "-",
};
      reject(error);
    });
  });
},
              },
// 接口函数
 getWryOpts: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"2afc2577cedb322ade4bfaee49a84262"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"2afc2577cedb322ade4bfaee49a84262"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"2afc2577cedb322ade4bfaee49a84262"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWryOpts'] = res.data;
                
     // console.log('获取 污染源下拉', res);

state.wryOpts = [];
state.ENTERPRISE_TYPE = '';

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data?.length) {
  // 填充下拉
  for (let i = 0; i < data.data.length; i++) {
    const elem = data.data[i];
    if (elem.NAME) {
      state.wryOpts.push({
        ...elem,
        label: elem.NAME || '-',
        value: elem.CODE || '',
      });
    }
  }
}
// console.log('填充后的 污染源下拉', state.wryOpts);

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.wryOpts = [];
state.ENTERPRISE_TYPE = '';
      reject(error);
    });
  });
},
              },
// 接口函数
 getHyData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"63b40b7c245e715738bef205a8f7a487"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"63b40b7c245e715738bef205a8f7a487"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"63b40b7c245e715738bef205a8f7a487"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHyData'] = res.data;
                
             // console.log('获取树 ---', res.data);
        state.treeData = [];
        if (res.data?.head?.statusCode === '200' && res.data?.data?.length) {
          // 格式化树
          const listToTree = (data, idKey, parentKey) => {
            var tree = [];
            var mappedArr = {};
            var arrElem;
            var mappedElem;

            // 创建映射表
            for (var i = 0, len = data.length; i < len; i++) {
              arrElem = {
                ...data[i],
                label: data[i].NAME,
                id: data[i].ID,
              };
              mappedArr[arrElem[idKey]] = { ...arrElem, children: [] };
            }

            // 构建树结构
            for (var id in mappedArr) {
              if (mappedArr.hasOwnProperty(id)) {
                mappedElem = mappedArr[id];
                if (mappedElem[parentKey] && mappedArr[mappedElem[parentKey]]) {
                  mappedArr[mappedElem[parentKey]].children.push(mappedElem);
                } else {
                  tree.push(mappedElem);
                }
              }
            }
            return tree;
          };
          // 填充树
          state.treeData = listToTree(res.data.data, 'ID', 'PID');
          console.log('拼接好的树', state.treeData);
        }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.treeData = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getAlarmList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DATA_FREQUENCY":"global.waterGlobalVariables.selectedPointInfo.DATA_FREQUENCY","ASSESSTYPE":"global.waterGlobalVariables.selectedPointInfo.ASSESSTYPE","POINT_CODE":"global.waterGlobalVariables.selectedPointInfo.POINT_CODE","MONITORTIME":"state.monitortime","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"798ce52d5d72109c6f09562f7e5a665c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATA_FREQUENCY":global.waterGlobalVariables.selectedPointInfo.DATA_FREQUENCY,"ASSESSTYPE":global.waterGlobalVariables.selectedPointInfo.ASSESSTYPE,"POINT_CODE":global.waterGlobalVariables.selectedPointInfo.POINT_CODE,"MONITORTIME":state.monitortime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"798ce52d5d72109c6f09562f7e5a665c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DATA_FREQUENCY":global.waterGlobalVariables.selectedPointInfo.DATA_FREQUENCY,"ASSESSTYPE":global.waterGlobalVariables.selectedPointInfo.ASSESSTYPE,"POINT_CODE":global.waterGlobalVariables.selectedPointInfo.POINT_CODE,"MONITORTIME":state.monitortime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"798ce52d5d72109c6f09562f7e5a665c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getAlarmList'] = res.data;
                
     // console.log('获取 报警信息列表', res);

// 清空原始数据
state.alarmList = [];
state.headerInfo.isShowAlarm = false; // 是否展示报警列表
state.isShowWrwCheckbox = false; // 是否展示污染物复选列表

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data?.length) {
  state.alarmList = data.data.map((item) => ({
    ...item,
    MONITORTIME: item.MONITORTIME || '-', // 报警时间
    ALARM_TYPE_NAME: item.ALARM_TYPE_NAME || '-', // 报警类型
    ALARM_DESC: item.ALARM_DESC || '-', // 报警原因
  }))
  // 是否显示报警图标，如果有列表数据，就显示
  state.headerInfo.isShowAlarm = true;
  // 是否展示污染物复选列表，如果有列表数据，就显示
  state.isShowWrwCheckbox = true;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.alarmList = [];
state.headerInfo.isShowAlarm = false; // 是否展示报警列表
state.isShowWrwCheckbox = false; // 是否展示污染物复选列表
      reject(error);
    });
  });
},
              },
// 接口函数
 getMonitortime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"CODE_WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"CODE_WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"CODE_WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitortime'] = res.data;
                
     // console.log('获取 控制详情-监测时间', res);

state.monitortime = '';

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.monitortime = data.data.MONITORTIME || '';
}
// console.log('填充后的 控制详情-监测时间', state.monitortime);

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.monitortime = '';
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getHeaderInfo', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getAlarmList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-waterTraceabilityContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
initPage();
/* 接收socket.io消息 */
const onSocketChange319387ef25234b8babd6 = function (data) {
if(data.type === "changeTagFilterPanelVisible"){
try{
// 执行自定义方法
handlePanelVisisble(data.data.panelName);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange319387ef25234b8babd6);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange319387ef25234b8babd6);
});
// 执行自定义方法
watchSourceParams();
/* 接收socket.io消息 */
const onSocketChange3b2d831380764fa081cd = function (data) {
if(data.type === "updateSourceTrace"){
try{
// 事件交互-请求调用接口
apiRegistry.getHeaderInfo.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange3b2d831380764fa081cd);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange3b2d831380764fa081cd);
});
// 执行自定义方法
setTempSessionVariable();
onMounted(() => {
setPageScale('t-l-c-waterTraceabilityContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
onSocket();
// 执行自定义方法
handlePanelVisisble("mainPanel");
});
onUnmounted(() => {
// 页面离开时的操作
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
// 执行自定义方法
setData();
// 执行自定义方法
removeTempSessionVariable();
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tTextx0x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x0.default, componentState.tTextx0x2x0?.[state.screenSize]));

 const tTextx0x2x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x1.default, componentState.tTextx0x2x1?.[state.screenSize]));

 const tTextx0x2x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x2.default, componentState.tTextx0x2x2?.[state.screenSize]));

 const tListCardCommonx0x2x3ComputedData = computed(() => _.merge({}, componentState.tListCardCommonx0x2x3.default, componentState.tListCardCommonx0x2x3?.[state.screenSize]));

 const tListCardCommonx0x2x4ComputedData = computed(() => _.merge({}, componentState.tListCardCommonx0x2x4.default, componentState.tListCardCommonx0x2x4?.[state.screenSize]));

 const tRectx0x2x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x5.default, componentState.tRectx0x2x5?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

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
tComponentx0x0ComputedData,
tComponentx0x1ComputedData,
tRowx0x2ComputedData,
tTextx0x2x0ComputedData,
tTextx0x2x1ComputedData,
tTextx0x2x2ComputedData,
tListCardCommonx0x2x3ComputedData,
tListCardCommonx0x2x4ComputedData,
tRectx0x2x5ComputedData,
tRectx0x3ComputedData,
tComponentx0x4ComputedData,
onclick1733723979280,
};
},
};