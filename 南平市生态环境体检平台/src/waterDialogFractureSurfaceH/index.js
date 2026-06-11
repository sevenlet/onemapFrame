window.waterDialogFractureSurfaceHComponent = {
template: 
`<div id="t-l-c-waterDialogFractureSurfaceH" class="t-l-c-waterDialogFractureSurfaceH" >` +
`<t-rect v-if="state.baseInfo.alarmShow === true" id="t-rect-16fd.29080fd9c" class="waterDialogFractureSurfaceH-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="replaceCssVariables(filterData(state.baseInfo.alarmText, componentPropBindingMap?.['t-rect-16fd.29080fd9c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-row id="t-row-3746.310bee78a" class="waterDialogFractureSurfaceH-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align">` +
`<t-col id="t-col-084b.4aa741b9c" class="waterDialogFractureSurfaceH-t-col-0-1-0"  :span="tColx0x1x0ComputedData.span" :offset="tColx0x1x0ComputedData.offset" :push="tColx0x1x0ComputedData.push" :pull="tColx0x1x0ComputedData.pull" :c-style="tColx0x1x0ComputedData.cStyle">` +
`<t-row id="t-row-a98e.97de7da75" class="waterDialogFractureSurfaceH-t-row-0-1-0-0"  :c-style="tRowx0x1x0x0ComputedData.cStyle" :gutter="tRowx0x1x0x0ComputedData.gutter" :justify="tRowx0x1x0x0ComputedData.justify" :align="tRowx0x1x0x0ComputedData.align">` +
`<t-text id="t-text-8cba.b16affff7" class="waterDialogFractureSurfaceH-t-text-0-1-0-0-0"  :label="replaceCssVariables(filterData(state.baseInfo.title, componentPropBindingMap?.['t-text-8cba.b16affff7']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x0x0x0ComputedData.editable" :c-style="tTextx0x1x0x0x0ComputedData.cStyle" :show-title="tTextx0x1x0x0x0ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-651d.bf3241ca9" class="waterDialogFractureSurfaceH-t-text-0-1-0-0-1"  :label="replaceCssVariables(filterData(state.baseInfo.type, componentPropBindingMap?.['t-text-651d.bf3241ca9']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x0x0x1ComputedData.editable" :c-style="tTextx0x1x0x0x1ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.baseInfo.controlLevel !== '-'" id="t-text-c1e6.384bf7c9d" class="waterDialogFractureSurfaceH-t-text-0-1-0-0-2"  :label="replaceCssVariables(filterData(state.baseInfo.controlLevel, componentPropBindingMap?.['t-text-c1e6.384bf7c9d']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x0x0x2ComputedData.editable" :c-style="tTextx0x1x0x0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-list-card-common id="t-list-card-common-2140.c5a8afe98" class="waterDialogFractureSurfaceH-t-list-card-common-0-1-0-0-3"  :c-style="tListCardCommonx0x1x0x0x3ComputedData.cStyle" :key-word="tListCardCommonx0x1x0x0x3ComputedData.keyWord" :default-checked="tListCardCommonx0x1x0x0x3ComputedData.defaultChecked" :tab="tListCardCommonx0x1x0x0x3ComputedData.tab" :collapse="tListCardCommonx0x1x0x0x3ComputedData.collapse" :collapse-text="tListCardCommonx0x1x0x0x3ComputedData.collapseText" :display-count="tListCardCommonx0x1x0x0x3ComputedData.displayCount" :data-alias="tListCardCommonx0x1x0x0x3ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.baseInfo.waterQuality, componentPropBindingMap?.['t-list-card-common-2140.c5a8afe98']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-list-card-common>` +
`<t-list-card-common id="t-list-card-common-d579.fbaae92d4" class="waterDialogFractureSurfaceH-t-list-card-common-0-1-0-0-4"  :c-style="tListCardCommonx0x1x0x0x4ComputedData.cStyle" :key-word="tListCardCommonx0x1x0x0x4ComputedData.keyWord" :default-checked="tListCardCommonx0x1x0x0x4ComputedData.defaultChecked" :tab="tListCardCommonx0x1x0x0x4ComputedData.tab" :collapse="tListCardCommonx0x1x0x0x4ComputedData.collapse" :collapse-text="tListCardCommonx0x1x0x0x4ComputedData.collapseText" :display-count="tListCardCommonx0x1x0x0x4ComputedData.displayCount" :data-alias="tListCardCommonx0x1x0x0x4ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.baseInfo.standard, componentPropBindingMap?.['t-list-card-common-d579.fbaae92d4']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-list-card-common>` +
`<t-rect v-if="state.baseInfo.alarmText !== ''" id="t-rect-4bb6.47291368" class="waterDialogFractureSurfaceH-t-rect-0-1-0-0-5"  :tip="tRectx0x1x0x0x5ComputedData.tip" :label="tRectx0x1x0x0x5ComputedData.label" :active="tRectx0x1x0x0x5ComputedData.active" :c-style="tRectx0x1x0x0x5ComputedData.cStyle" @mouseover="onmouseover1733993886943" @mouseout="onmouseout1733993903757">` +
`</t-rect>` +
`</t-row>` +
`</t-col>` +
`<t-col id="t-col-7c4b.19c919293" class="waterDialogFractureSurfaceH-t-col-0-1-1"  :span="tColx0x1x1ComputedData.span" :offset="tColx0x1x1ComputedData.offset" :push="tColx0x1x1ComputedData.push" :pull="tColx0x1x1ComputedData.pull" :c-style="tColx0x1x1ComputedData.cStyle">` +
`<t-row id="t-row-784c.a7e1edaf7" class="waterDialogFractureSurfaceH-t-row-0-1-1-0"  :c-style="tRowx0x1x1x0ComputedData.cStyle" :gutter="tRowx0x1x1x0ComputedData.gutter" :justify="tRowx0x1x1x0ComputedData.justify" :align="tRowx0x1x1x0ComputedData.align">` +
`<t-text-common v-if="state.otherTypePointCode !== ''" id="t-text-common-1275.bef9f6da6" class="waterDialogFractureSurfaceH-t-text-common-0-1-1-0-0"  :label="replaceCssVariables(filterData(state.otherTypeName, componentPropBindingMap?.['t-text-common-1275.bef9f6da6']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x1x1x0x0ComputedData.editable" :c-style="tTextCommonx0x1x1x0x0ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common v-if="state.otherTypePointCode !== ''" id="t-text-common-893e.5e79a4246" class="waterDialogFractureSurfaceH-t-text-common-0-1-1-0-1"  :label="replaceCssVariables(filterData(state.otherTypePointName, componentPropBindingMap?.['t-text-common-893e.5e79a4246']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x1x1x0x1ComputedData.editable" :c-style="tTextCommonx0x1x1x0x1ComputedData.cStyle" @click="onclick1768978600867">` +
`</t-text-common>` +
`</t-row>` +
`</t-col>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-16fd.29080fd9c":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-3746.310bee78a":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-084b.4aa741b9c":{"attributeName":"tColx0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-row-a98e.97de7da75":{"attributeName":"tRowx0x1x0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-8cba.b16affff7":{"attributeName":"tTextx0x1x0x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}},"t-text-651d.bf3241ca9":{"attributeName":"tTextx0x1x0x0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-c1e6.384bf7c9d":{"attributeName":"tTextx0x1x0x0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-common-2140.c5a8afe98":{"attributeName":"tListCardCommonx0x1x0x0x3","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"tab":{"filters":[]},"collapse":{"filters":[]},"collapseText":{"filters":[]},"displayCount":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-list-card-common-d579.fbaae92d4":{"attributeName":"tListCardCommonx0x1x0x0x4","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"tab":{"filters":[]},"collapse":{"filters":[]},"collapseText":{"filters":[]},"displayCount":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-rect-4bb6.47291368":{"attributeName":"tRectx0x1x0x0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-7c4b.19c919293":{"attributeName":"tColx0x1x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-row-784c.a7e1edaf7":{"attributeName":"tRowx0x1x1x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-common-1275.bef9f6da6":{"attributeName":"tTextCommonx0x1x1x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-893e.5e79a4246":{"attributeName":"tTextCommonx0x1x1x0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   params: {"monitorTime":"","assessType":"","pointCode":"","showSource":true,"title":""},
   otherTypeName: "",
   otherTypePointName: "",
   otherTypePointCode: "",
   isShowYSImg: false,
   showSource: false,
   tabList: [{"label":"基本信息","name":"waterDialogHandBaseInfoComponent"},{"label":"时空多维分析","name":"DwfxSkdwfxComponent"},{"label":"指标多维分析","name":"DwfxZbdwglfxComponent"}],
   point: {"lon":"","lat":""},
   activeTab: "waterDialogAutoHourBaseInfoComponent",
   baseInfo: {"title":"-","controlLevel":"-","waterQuality":[{"state":"-","stateColor":"#000","stateBgColor":""}],"standard":[{"state":"-","stateColor":"#fff","stateBgColor":""}],"alarmText":"","alarmShow":false,"type":"-"},
   pointCode: "",
   assessType: "",
   monitorTime: "",
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
            default: {"width":"297px","height":"10px","position":"unset","left":"209px","top":"39px","backgroundColor":"#FF2B2B","color":"rgba(255, 255, 255, 1)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px","fontSize":"var(--business-text-size-14)","paddingLeft":"5px","paddingRight":"5px","display":"flex","alignItems":"center","justifyContent":"center","paddingTop":"5px","paddingBottom":"5px","lineHeight":"20px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"297px","height":"10px","position":"unset","left":"209px","top":"39px","backgroundColor":"#FF2B2B","color":"rgba(255, 255, 255, 1)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px","fontSize":"var(--business-text-size-14)","paddingLeft":"5px","paddingRight":"5px","display":"flex","alignItems":"center","justifyContent":"center","paddingTop":"5px","paddingBottom":"5px","lineHeight":"20px"}}}, 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"48px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"0px","gap":"auto","pointerEvents":"none"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"48px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"0px","gap":"auto","pointerEvents":"none"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x0: {
defaultStyle: {
            default: {"width":"100px","height":"48px","display":"flex","justifyContent":"left","alignItems":"center","pointerEvents":"none"},
            
            },
 default: { 
 
span:14,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"48px","display":"flex","justifyContent":"left","alignItems":"center","pointerEvents":"none"}}}, 
 },
},
tRowx0x1x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"47px","position":"unset","left":"-27px","top":"0px","pointerEvents":"none"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"47px","position":"unset","left":"-27px","top":"0px","pointerEvents":"none"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x1x0x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-white)","fontSize":"var(--business-text-size-18)","position":"unset","left":"16px","top":"13px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"4px","fontWeight":"700","animationName":"","textAlign":"left","max-width":"300px","marginRight":"6px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"4px","paddingTop":"2px","paddingBottom":"2px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-white)","fontSize":"var(--business-text-size-18)","position":"unset","left":"16px","top":"13px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"4px","fontWeight":"700","animationName":"","textAlign":"left","max-width":"300px","marginRight":"6px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"4px","paddingTop":"2px","paddingBottom":"2px"}}},
showTitle:true, 
 },
},
tTextx0x1x0x0x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-white)","position":"unset","left":"138px","top":"13px","borderLeft":"1px solid var(--t-white)","borderTop":"1px solid var(--t-white)","borderRight":"1px solid var(--t-white)","borderBottom":"1px solid var(--t-white)","borderTopLeftRadius":"10px","borderBottomRightRadius":"10px","textAlign":"center","lineHeight":"18px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"var(--business-text-size-12)","marginLeft":"10px","paddingLeft":"4px","paddingRight":"4px","paddingTop":"2px","paddingBottom":"2px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-white)","position":"unset","left":"138px","top":"13px","borderLeft":"1px solid var(--t-white)","borderTop":"1px solid var(--t-white)","borderRight":"1px solid var(--t-white)","borderBottom":"1px solid var(--t-white)","borderTopLeftRadius":"10px","borderBottomRightRadius":"10px","textAlign":"center","lineHeight":"18px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"var(--business-text-size-12)","marginLeft":"10px","paddingLeft":"4px","paddingRight":"4px","paddingTop":"2px","paddingBottom":"2px"}}}, 
 },
},
tTextx0x1x0x0x2: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-white)","position":"unset","left":"243px","top":"36.399993896484375px","borderLeft":"1px solid var(--t-white)","borderTop":"1px solid var(--t-white)","borderRight":"1px solid var(--t-white)","borderBottom":"1px solid var(--t-white)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"18px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"var(--business-text-size-12)","marginLeft":"10px","animationName":"","pointerEvents":"none","paddingLeft":"4px","paddingRight":"4px","paddingTop":"2px","paddingBottom":"2px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-white)","position":"unset","left":"243px","top":"36.399993896484375px","borderLeft":"1px solid var(--t-white)","borderTop":"1px solid var(--t-white)","borderRight":"1px solid var(--t-white)","borderBottom":"1px solid var(--t-white)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"18px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"var(--business-text-size-12)","marginLeft":"10px","animationName":"","pointerEvents":"none","paddingLeft":"4px","paddingRight":"4px","paddingTop":"2px","paddingBottom":"2px"}}}, 
 },
},
tListCardCommonx0x1x0x0x3: {
defaultStyle: {
            default: {"position":"unset","width":"auto","height":"auto","left":"219px","top":"15px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px","paddingLeft":"4px","paddingRight":"4px","paddingTop":"2px","paddingBottom":"2px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"position":"unset","width":"auto","height":"auto","left":"219px","top":"15px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px","paddingLeft":"4px","paddingRight":"4px","paddingTop":"2px","paddingBottom":"2px"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"auto","height":"20px","fontSize":"var(--business-text-size-12)","lineHeight":"20px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","min-width":"50px"}},"cardIcon":{"default":{"display":"none"}}},
keyWord:"",
defaultChecked:"",
tab:false,
collapse:false,
collapseText:"数据",
displayCount:"0",
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
data:[{"state":"-","stateColor":"#000","stateBgColor":""}], 
 },
},
tListCardCommonx0x1x0x0x4: {
defaultStyle: {
            default: {"position":"unset","width":"auto","height":"auto","left":"310px","top":"14px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px","paddingRight":"4px","paddingLeft":"4px","paddingTop":"2px","paddingBottom":"2px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"position":"unset","width":"auto","height":"auto","left":"310px","top":"14px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px","paddingRight":"4px","paddingLeft":"4px","paddingTop":"2px","paddingBottom":"2px"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"auto","height":"20px","fontSize":"var(--business-text-size-12)","lineHeight":"20px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","min-width":"50px"}},"cardIcon":{"default":{"display":"none"}}},
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
tRectx0x1x0x0x5: {
defaultStyle: {
            default: {"width":"20px","height":"20px","position":"unset","left":"399px","top":"14px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-11/c042c6b49c404c56a0dafaa835ad05b2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","marginLeft":"10px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"20px","height":"20px","position":"unset","left":"399px","top":"14px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-11/c042c6b49c404c56a0dafaa835ad05b2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","marginLeft":"10px","cursor":"pointer"}}}, 
 },
},
tColx0x1x1: {
defaultStyle: {
            default: {"width":"100px","height":"48px","display":"flex","justifyContent":"right","alignItems":"center","pointerEvents":"none"},
            
            },
 default: { 
 
span:10,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"48px","display":"flex","justifyContent":"right","alignItems":"center","pointerEvents":"none"}}}, 
 },
},
tRowx0x1x1x0: {
defaultStyle: {
            default: {"width":"265px","height":"48px","display":"flex","justifyContent":"right","alignItems":"center","top":"0px","left":"350px","position":"unset","paddingRight":"20px","pointerEvents":"none"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"265px","height":"48px","display":"flex","justifyContent":"right","alignItems":"center","top":"0px","left":"350px","position":"unset","paddingRight":"20px","pointerEvents":"none"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextCommonx0x1x1x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset","pointerEvents":"none"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset","pointerEvents":"none"}}}, 
 },
},
tTextCommonx0x1x1x0x1: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"rgba(255, 255, 255, 1)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset","cursor":"pointer"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"rgba(255, 255, 255, 1)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset","cursor":"pointer"}}}, 
 },
},
});
const initPageData = () => {
// 判断全局变量里有没有传参，没的话先用模拟数据
if (!global.businessDialog.dialogParmas) {
  // 手工
  global.businessDialog.dialogParmas = {
    "pointCode": "Z15",
    "assessType": "monthly",
    "monitorTime": "2022-03"
  }
  // 自动-天
  // global.businessDialog.dialogParmas = {
  //   dialogType: 'autoDay',
  //   "pointCode": "999104",
  //   "assessType": "monthly",
  //   "monitorTime": "2022-03-01"
  // }
  // 自动-小时
  // global.businessDialog.dialogParmas = {
  //   dialogType: 'autoHour',
  //   "pointCode": "999104",
  //   "assessType": "monthly",
  //   "monitorTime": "2022-03-28 12"
  // }
}
console.log(global.businessDialog.dialogParmas, '饮用水接收的参数');
const selectCode = localStorage.getItem('isShowSubjectSelect');
if (selectCode === "a30fa057-e0bd-472f-a86b-a8f25e6b33cc") {
  state.tabList = [
    {
      "label": "基本信息",
      "name": "waterDialogHandBaseInfoComponent"
    },
    {
      "label": "多维分析",
      "name": "waterDialogFSAnalysisComponent"
    },
    {
      "label": "视频监控",
      "name": "tapWaterVideoComponent"
    }
  ];
} else {
  state.tabList = [
    {
      "label": "基本信息",
      "name": "waterDialogHandBaseInfoComponent"
    },
    {
      "label": "时空多维分析",
      "name": "DwfxSkdwfxComponent"
    },
    {
      "label": "指标多维分析",
      "name": "DwfxZbdwglfxComponent"
    }
  ];
}
// 处理参数
state.monitorTime = global.businessDialog.dialogParmas.monitorTime;
state.assessType = global.businessDialog.dialogParmas.assessType || 'monthly';
state.pointCode = global.businessDialog.dialogParmas?.pointCode || global.businessDialog.dialogParmas.point_code;
// 溯源是否显示
state.showSource = global.businessDialog.dialogParmas.showSource || false;

if (global.businessDialog.dialogParmas?.dialogType === 'autoDay') {
  // 自动断面-天
  state.tabList[0].name = 'waterDialogAutoDayBaseInfoComponent';
  // 获取基本信息接口
  apiRegistry.getBaseInfo.request('7e646485d5e40eb0cb831d4a5520f81a');
  // 获取报警数据
  apiRegistry.getAlarmData.request(2, 0);
} else if (global.businessDialog.dialogParmas?.dialogType === 'autoHour') {
  // 自动断面-小时
  state.tabList[0].name = 'waterDialogAutoHourBaseInfoComponent';
  // 获取基本信息接口
  apiRegistry.getBaseInfo.request('6b55f61844ccd520f3f9a5a4f227f95e');
  // 获取报警数据
  apiRegistry.getAlarmData.request(1, 0);
} else if (global.businessDialog.dialogParmas?.dialogType === 'xhjs') {
  // 巡河交水断面
  state.tabList[0].name = 'xhjsBaseInfoComponent';
  // 获取基本信息接口
  apiRegistry.getBaseInfo.request('05a4339b55fe545693f8bbd6ce5f5fb8');
  // 获取报警数据
  apiRegistry.getAlarmData.request(4, 1);
  console.log('巡河交水断面 巡河交水断面',global.businessDialog.dialogParmas);
} else {
  // 手工断面
  state.tabList[0].name = 'waterDialogHandBaseInfoComponent';
  // 获取基本信息接口
  apiRegistry.getBaseInfo.request('c88965d570ad1d00197e1fee3a00c649');
  // 获取报警数据
  apiRegistry.getAlarmData.request(4, 1);
}

// 样地/样方标题
if (global.businessDialog.dialogParmas?.sourceType === 'samplePlot') {
  // 样方弹窗
  if (global.businessDialog.dialogParmas?.typeDetail && global.businessDialog.dialogParmas.typeDetail !== '') {
    state.baseInfo.title = `城乡乔木层样方-${state.pointCode}`
    state.baseInfo.type = '样方'
  }

  // 样地弹窗
  if (!global.businessDialog.dialogParmas.typeDetail) {
      state.baseInfo.title = `城乡样地-${state.pointCode}`
    state.baseInfo.type = '样地'
  }
}

// 样地弹窗
if (global.samplePlotGlobalVariables.isDialog) {

 state.baseInfo.title = `城乡乔木层样方-${global.samplePlotGlobalVariables.sampleSquare.point_code}`
    state.baseInfo.type = '样方'
}



// 默认选择第一个tab
state.activeTab = state.tabList[0].name;
console.log('断面弹窗激活的组件 20251015', state.tabList, state.activeTab);

};
const handleClickClose = () => {
// 消息内容
let code = 'surfaceWater_details';
if (global.businessDialog.dialogParmas?.dialogType === 'autoDay') {
  code = 'auto_day';
} else if (global.businessDialog.dialogParmas?.dialogType === 'autoHour') {
  code = 'auto_hour';
}
/* 发送消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [ // 消息内容
    { shareCode: "close_map_window", runtimeValue: true },
    { shareCode: "close_window_code", runtimeValue: code }
  ]
});

};
const handleClickTrend = () => {
// 任务调度佛山现场
// window.open("http://19.130.161.126:8888/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1");

//任务调度，公司演示
// window.open("http://192.168.0.202:7777/ddxt-micro-fs-app/#/dispatchinglayout/special-task-assign?paramValue=fszxrw&paramType=2&visible=true&defaultParamValue=cszprw&hiddenBackBtn=2");
localStorage.removeItem('pointIds');
localStorage.setItem('pointIds', global.businessDialog.dialogParmas.STANDENTERID);
console.log(global.businessDialog.dialogParmas.STANDENTERID,'global.businessDialog.dialogParmas.STANDENTERID');
const url = 'https://stfs.sthj.fs.gdgov.cn/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1'
window.open(url, '_blank')
};
const handleClickTraceability = () => {
// 溯源
let DATA_FREQUENCY = '';
if (global.businessDialog.dialogParmas?.dialogType === 'autoDay') {
  // 自动断面-天
  DATA_FREQUENCY = '2'
} else if (global.businessDialog.dialogParmas?.dialogType === 'autoHour') {
  // 自动断面-小时
  DATA_FREQUENCY = '1'
} else {
  // 手工断面
  DATA_FREQUENCY = '4'
}
/* 发送消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractiveChange", // 消息名称
  data: [ // 消息内容
    { shareCode: "trace_source", runtimeValue: true },
    { shareCode: "MULTI_POLLUTANTS", runtimeValue: "None" },
    {
      shareCode: "showWaterTraceDetail",
      componentName: "waterTraceabilityContentComponent",
      componentParmas: {
        POINT_CODE: state.pointCode,
        ASSESSTYPE: state.assessType,
        DATA_FREQUENCY,
        MULTI_POLLUTANTS: '',
        MONITORTIME: state.monitorTime
      },
      traceDetailUrl: ''
      // traceDetailUrl: `/view/view/show/index.vm?screenId=adfe253d6f5c434c1f6388aae1c18bbe&REGION_CODE=${global.regionaQuery.regionCode}&POINT_CODE=${state.pointCode}&MONITORTIME=${state.monitorTime}&DATA_FREQUENCY=4&ASSESSTYPE=${state.assessType}&MULTI_POLLUTANTS=` + selectedStrInitialize
    }
  ]
});
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [ // 消息内容
    { shareCode: "trace_source", runtimeValue: true },
    { shareCode: "MULTI_POLLUTANTS", runtimeValue: "None" },
    {
      shareCode: "showWaterTraceDetail",
      componentName: "waterTraceabilityContentComponent",
      componentParmas: {
        POINT_CODE: state.pointCode,
        ASSESSTYPE: state.assessType,
        DATA_FREQUENCY,
        MULTI_POLLUTANTS: '',
        MONITORTIME: state.monitorTime
      },
      traceDetailUrl: ''
      // traceDetailUrl: `/view/view/show/index.vm?screenId=adfe253d6f5c434c1f6388aae1c18bbe&REGION_CODE=${global.regionaQuery.regionCode}&POINT_CODE=${state.pointCode}&MONITORTIME=${state.monitorTime}&DATA_FREQUENCY=4&ASSESSTYPE=${state.assessType}&MULTI_POLLUTANTS=` + selectedStrInitialize
    }
  ]
});
};
const handleClickQuery = () => {
if (state.point.lon && state.point.lat) {
  // 周边查询
  const pointLocation = [];
  pointLocation.push(parseFloat(state.point.lon));
  pointLocation.push(parseFloat(state.point.lat));

  /* 发送消息 */
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractiveChange", // 消息名称
    data: [ // 消息内容
      { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
      { shareCode: "POINT_LOACTION_NAME", runtimeValue: state.baseInfo.title }
    ]
  });
  global.businessDialog.dialogName = '';  

}
};
const handleClickTraceabilityNew = () => {
console.log('展示演示用的图片');
global.isShowYSImg = true;
// global.businessDialog.dialogName = '';
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
};
const openOtherTypeDialog = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'runInteractive',  // 消息类型名称
    data: [
      {
        "shareCode": "showLegoDialog",
        "runtimeValue": "true"
      },
      {
        "code": "dialogName",
        "shareCode": "dialogName",
        "runtimeValue": "waterDialogFractureSurfaceComponent"
      },
      {
        "code": "dialogParmas",
        "shareCode": "dialogParmas",
        "runtimeValue": state.params
      }
    ],
  }
);
};
const onmouseover1733993886943 = () => {
// 设置变量值
state.baseInfo.alarmShow = true;
};
const onmouseout1733993903757 = () => {
// 设置变量值
state.baseInfo.alarmShow = false;
};
const onclick1768978600867 = () => {
// 执行自定义方法
openOtherTypeDialog();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getAlarmData: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"DATA_FREQUENCY","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"Jlnbg3UWe7","children":[]},{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"MONITORTYPE","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"ci2HzbE2XQ","children":[]}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT":"","REGION_CODE":"global.regionaQuery.regionCode","MONITORTYPE":"this.MONITORTYPE","DATA_FREQUENCY":"this.DATA_FREQUENCY","POINT_CODE":"state.pointCode","MONITORTIME":"state.monitorTime","interfaceId":"798ce52d5d72109c6f09562f7e5a665c"}},
              request: function (DATA_FREQUENCY,MONITORTYPE, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT":"","REGION_CODE":global.regionaQuery.regionCode,"MONITORTYPE":MONITORTYPE,"DATA_FREQUENCY":DATA_FREQUENCY,"POINT_CODE":state.pointCode,"MONITORTIME":state.monitorTime,"interfaceId":"798ce52d5d72109c6f09562f7e5a665c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT":"","REGION_CODE":global.regionaQuery.regionCode,"MONITORTYPE":MONITORTYPE,"DATA_FREQUENCY":DATA_FREQUENCY,"POINT_CODE":state.pointCode,"MONITORTIME":state.monitorTime,"interfaceId":"798ce52d5d72109c6f09562f7e5a665c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getAlarmData'] = res.data;
                
     console.log(res);
const { data } = res;
if (data.head.statusCode === '200' && data.data.length) {
  let textArr = [];
  data.data.forEach((item) => {
    textArr.push(item.ALARM_TYPE_NAME);
  })

  // 报警文本
  state.baseInfo.alarmText = textArr.join();
} else {
  // 报警文本
  state.baseInfo.alarmText = '';
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
 getBaseInfo: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"interfaceId","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"CbVCRsHVHd","children":[]}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT":"","POINT_TYPE":"","POINT_CODE":"state.pointCode","ASSESSTYPE":"state.assessType","MONITORTIME":"state.monitorTime","interfaceId":"this.interfaceId"}},
              request: function (interfaceId, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT":"","POINT_TYPE":"","POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":interfaceId},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT":"","POINT_TYPE":"","POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":interfaceId});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     console.log(res);
const { data } = res;
if (data.head.statusCode === '200' && data.data) {
  // 名称
  state.baseInfo.title = data.data?.POINT_NAME || '-';
  // 控制级别
  state.baseInfo.controlLevel = data.data?.CONTROLLEVEL || '-';
  // 水质级别
  state.baseInfo.waterQuality[0].state = data.data?.WATERQUALITYLEVELNAME || '-';
  state.baseInfo.waterQuality[0].stateBgColor = getWaterLevelColor(data.data?.WATERQUALITYLEVELNAME);
  // 达标
  state.baseInfo.standard[0].state = data.data?.ISSTANDARDSSTR || (data.data?.ISSTANDARDS === '1' ? '达标' : '不达标') || '-';
  state.baseInfo.standard[0].stateBgColor = getWaterLevelColor(data.data?.ISSTANDARDSSTR || (data.data?.ISSTANDARDS === '1' ? '达标' : '不达标'));

  // 经纬度--周边查询使用
  state.point.lat = data.data?.LATITUDE || '';
  state.point.lon = data.data?.LONGITUDE || '';

  state.otherTypePointCode = ''
  state.otherTypeName = ''
  state.otherTypePointName = ''

  // 断面类型
  if (interfaceId === 'c88965d570ad1d00197e1fee3a00c649') {
    // 手工
    if (data.data?.AUTO_POINTCODE) {
      state.baseInfo.type = '手&自';
      state.otherTypePointCode = data.data?.AUTO_POINTCODE
      state.otherTypePointName = data.data?.AUTO_POINTNAME
      state.otherTypeName = '自动断面：'
      state.params = {
        monitorTime: data.data?.AUTO_MONITORTIME,
        assessType: data.data?.AUTO_ASSESS_TYPE,
        pointCode: data.data?.AUTO_POINTCODE,
        showSource: true,
        title: data.data?.AUTO_POINTNAME,
        dialogType: "autoHour",
      }
    } else {
      state.baseInfo.type = '手工';
    }
  } else if (interfaceId === '6b55f61844ccd520f3f9a5a4f227f95e') {
    // 自动站
    if (data.data?.MANUAL_POINTCODE) {
      state.baseInfo.type = '手&自';
      state.otherTypePointCode = data.data?.MANUAL_POINTCODE
      state.otherTypePointName = data.data?.MANUAL_POINTNAME
      state.otherTypeName = '手工断面：'
      state.params = {
        monitorTime: data.data?.MANUAL_MONITORTIME,
        assessType: data.data?.MANUAL_ASSESS_TYPE,
        pointCode: data.data?.MANUAL_POINTCODE,
        showSource: true,
        dataSourcetype: "surfaceWater",
        title: data.data?.MANUAL_POINTNAME
      }
    } else {
      state.baseInfo.type = '自动';
    }

  } else {
    state.baseInfo.type = '手工';
  }

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
                            setPageScale('t-l-c-waterDialogFractureSurfaceH', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-waterDialogFractureSurfaceH', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tColx0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0.default, componentState.tColx0x1x0?.[state.screenSize]));

 const tRowx0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x0x0.default, componentState.tRowx0x1x0x0?.[state.screenSize]));

 const tTextx0x1x0x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x0x0x0.default, componentState.tTextx0x1x0x0x0?.[state.screenSize]));

 const tTextx0x1x0x0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x0x0x1.default, componentState.tTextx0x1x0x0x1?.[state.screenSize]));

 const tTextx0x1x0x0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x0x0x2.default, componentState.tTextx0x1x0x0x2?.[state.screenSize]));

 const tListCardCommonx0x1x0x0x3ComputedData = computed(() => _.merge({}, componentState.tListCardCommonx0x1x0x0x3.default, componentState.tListCardCommonx0x1x0x0x3?.[state.screenSize]));

 const tListCardCommonx0x1x0x0x4ComputedData = computed(() => _.merge({}, componentState.tListCardCommonx0x1x0x0x4.default, componentState.tListCardCommonx0x1x0x0x4?.[state.screenSize]));

 const tRectx0x1x0x0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x1x0x0x5.default, componentState.tRectx0x1x0x0x5?.[state.screenSize]));

 const tColx0x1x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1.default, componentState.tColx0x1x1?.[state.screenSize]));

 const tRowx0x1x1x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x1x0.default, componentState.tRowx0x1x1x0?.[state.screenSize]));

 const tTextCommonx0x1x1x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x0x0.default, componentState.tTextCommonx0x1x1x0x0?.[state.screenSize]));

 const tTextCommonx0x1x1x0x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x0x1.default, componentState.tTextCommonx0x1x1x0x1?.[state.screenSize]));

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
tRowx0x1ComputedData,
tColx0x1x0ComputedData,
tRowx0x1x0x0ComputedData,
tTextx0x1x0x0x0ComputedData,
tTextx0x1x0x0x1ComputedData,
tTextx0x1x0x0x2ComputedData,
tListCardCommonx0x1x0x0x3ComputedData,
tListCardCommonx0x1x0x0x4ComputedData,
tRectx0x1x0x0x5ComputedData,
tColx0x1x1ComputedData,
tRowx0x1x1x0ComputedData,
tTextCommonx0x1x1x0x0ComputedData,
tTextCommonx0x1x1x0x1ComputedData,
onmouseover1733993886943,
onmouseout1733993903757,
onclick1768978600867,
};
},
};