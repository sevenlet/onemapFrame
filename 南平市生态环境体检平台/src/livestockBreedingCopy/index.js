window.livestockBreedingCopyComponent = {
template: 
`<div id="t-l-c-livestockBreedingCopy" class="t-l-c-livestockBreedingCopy" >` +
`<t-rect id="t-rect-8252.1a4ade4f4" class="livestockBreedingCopy-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-component id="t-component-75a5.51539ef39" class="livestockBreedingCopy-t-component-0-1"  :name="replaceCssVariables(filterData(state.activeTab, componentPropBindingMap?.['t-component-75a5.51539ef39']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="replaceCssVariables(filterData(state.activeTab, componentPropBindingMap?.['t-component-75a5.51539ef39']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-component>` +
`<t-rect id="t-rect-71af.6d10fdece" class="livestockBreedingCopy-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-e3a7.d7772ec8d" class="livestockBreedingCopy-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-5577.0975bb8d2" class="livestockBreedingCopy-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle">` +
`</t-rect>` +
`<t-tabs id="t-tabs-36ee.81d7b3b28" class="livestockBreedingCopy-t-tabs-0-5"  :data="replaceCssVariables(filterData(state.tabList, componentPropBindingMap?.['t-tabs-36ee.81d7b3b28']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x5ComputedData.activeTab" :tab-position-extend="tTabsx0x5ComputedData.tabPositionExtend" :stretch="tTabsx0x5ComputedData.stretch" :c-style="tTabsx0x5ComputedData.cStyle">` +
`</t-tabs>` +
`<t-row id="t-row-a98e.97de7da75" class="livestockBreedingCopy-t-row-0-7"  :c-style="tRowx0x7ComputedData.cStyle" :gutter="tRowx0x7ComputedData.gutter" :justify="tRowx0x7ComputedData.justify" :align="tRowx0x7ComputedData.align">` +
`<t-text id="t-text-8cba.b16affff7" class="livestockBreedingCopy-t-text-0-7-0"  :label="replaceCssVariables(filterData(state.baseInfo.title, componentPropBindingMap?.['t-text-8cba.b16affff7']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x7x0ComputedData.editable" :c-style="tTextx0x7x0ComputedData.cStyle" :show-title="tTextx0x7x0ComputedData.showTitle">` +
`</t-text>` +
`<t-rect v-if="state.baseInfo.alarmText !== ''" id="t-rect-4bb6.47291368" class="livestockBreedingCopy-t-rect-0-7-1"  :tip="tRectx0x7x1ComputedData.tip" :label="tRectx0x7x1ComputedData.label" :active="tRectx0x7x1ComputedData.active" :c-style="tRectx0x7x1ComputedData.cStyle" @mouseover="onmouseover1733993886943" @mouseout="onmouseout1733993903757">` +
`</t-rect>` +
`</t-row>` +
`<t-rect v-if="state.baseInfo.alarmShow === true" id="t-rect-16fd.29080fd9c" class="livestockBreedingCopy-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="replaceCssVariables(filterData(state.baseInfo.alarmText, componentPropBindingMap?.['t-rect-16fd.29080fd9c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-da62.857f90ab" class="livestockBreedingCopy-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle" @click="onclick1733817210174">` +
`</t-rect>` +
`<t-row id="t-row-6365.97c68ed82" class="livestockBreedingCopy-t-row-0-10"  :c-style="tRowx0x10ComputedData.cStyle" :gutter="tRowx0x10ComputedData.gutter" :justify="tRowx0x10ComputedData.justify" :align="tRowx0x10ComputedData.align">` +
`<t-text id="t-text-630e.1af9131a3" class="livestockBreedingCopy-t-text-0-10-0"  :label="tTextx0x10x0ComputedData.label" :editable="tTextx0x10x0ComputedData.editable" :c-style="tTextx0x10x0ComputedData.cStyle" @click="onclick1734068220296">` +
`</t-text>` +
`<t-text id="t-text-19bd.a994fa29f" class="livestockBreedingCopy-t-text-0-10-2"  :label="tTextx0x10x2ComputedData.label" :editable="tTextx0x10x2ComputedData.editable" :c-style="tTextx0x10x2ComputedData.cStyle" @click="onclick1734067550409">` +
`</t-text>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-8252.1a4ade4f4":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-75a5.51539ef39":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-rect-71af.6d10fdece":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-e3a7.d7772ec8d":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5577.0975bb8d2":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-36ee.81d7b3b28":{"attributeName":"tTabsx0x5","data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-739f.d1ff2d69c":{"attributeName":"tRectx0x6"},"t-row-a98e.97de7da75":{"attributeName":"tRowx0x7","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-8cba.b16affff7":{"attributeName":"tTextx0x7x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}},"t-rect-4bb6.47291368":{"attributeName":"tRectx0x7x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-16fd.29080fd9c":{"attributeName":"tRectx0x8","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-da62.857f90ab":{"attributeName":"tRectx0x9","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-6365.97c68ed82":{"attributeName":"tRowx0x10","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-630e.1af9131a3":{"attributeName":"tTextx0x10x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-4e6d.a19cece3e":{"attributeName":"tTextx0x10x1"},"t-text-19bd.a994fa29f":{"attributeName":"tTextx0x10x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   point: {"lat":"","lon":""},
   tabList: [{"label":"基本信息","name":"waterDialogLivestockBaseInfoComponent"}],
   activeTab: "waterDialogLivestockBaseInfoComponent",
   baseInfo: {"title":"-","controlLevel":"-","waterQuality":[{"state":"-","stateColor":"#000","stateBgColor":""}],"standard":[{"state":"-","stateColor":"#fff","stateBgColor":""}],"alarmText":"","alarmShow":false,"type":"-"},
   companyName: "",
   id: "",
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
            default: {"width":"1020px","height":"712px","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1020px","height":"712px","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"824px","height":"580px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"176px","top":"63px"},
            
            },
 default: { 
 
name:"waterDialogLivestockBaseInfoComponent",
cStyle:{"wrapper":{"default":{"width":"824px","height":"580px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"176px","top":"63px"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/waterDialogFSBaseInfo",
componentName:"waterDialogLivestockBaseInfoComponent", 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"1020px","height":"52px","position":"unset","left":"0px","top":"660px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1020px","height":"52px","position":"unset","left":"0px","top":"660px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"1020px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1020px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"0px","top":"0px","animationName":""}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"140px","height":"580px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","left":"20px","top":"63px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"140px","height":"580px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","left":"20px","top":"63px","position":"unset"}}}, 
 },
},
tTabsx0x5: {
defaultStyle: {
            default: {"width":"130px","height":"86px","position":"unset","left":"26px","top":"66px","backgroundColor":"","display":"flex","paddingLeft":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""},
            
            },
 default: { 
 
data:[{"label":"基本信息","name":"waterDialogLivestockBaseInfoComponent"}],
activeTab:"waterDialogLivestockBaseInfoComponent",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"86px","position":"unset","left":"26px","top":"66px","backgroundColor":"","display":"flex","paddingLeft":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""}},"itemActiveBorder":{"default":{"width":"0px","height":"0%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","display":"none"}},"itemWrapper":{"default":{"fontSize":"14","lineHeight":"34px","color":"var(--business-text-avianize)","backgroundColor":"rgba(44, 129, 187, 0)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px","width":"120%","min-width":"132%","max-width":"100%","textAlign":"center !important","marginBottom":"17px","paddingBottom":"0px","borderBottom":"1px solid rgba(23,62,228,0)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","left":"6px","height":"","marginLeft":"0px","marginTop":"","marginRight":"unset","paddingLeft":"20px","paddingRight":"20px"},"hover":{"color":"var(--business-tab-third-active-border)"},"active":{"box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","background":"var(--business-tab-third-active-fill)","color":"var(--business-tab-third-active-border)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px"},"disabled":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","textAlign":"center"}},"itemLabel":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","textAlign":"center","display":"block"},"hover":{"textAlign":"center"},"active":{"textAlign":"center"}},"prevIcon":{"default":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","display":"none"}},"nextIcon":{"default":{"display":"none"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tRowx0x7: {
defaultStyle: {
            default: {"width":"500px","height":"47px","position":"unset","left":"18px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"500px","height":"47px","position":"unset","left":"18px","top":"0px"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x7x0: {
defaultStyle: {
            default: {"width":"auto","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"16px","top":"13px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","textAlign":"left","max-width":"none","marginRight":"6px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"16px","top":"13px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","textAlign":"left","max-width":"none","marginRight":"6px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}},
showTitle:true, 
 },
},
tRectx0x7x1: {
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
tRectx0x8: {
defaultStyle: {
            default: {"width":"297px","height":"auto","position":"unset","left":"254px","top":"39px","backgroundColor":"#FF2B2B","color":"rgba(255, 255, 255, 1)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px","fontSize":"14px","paddingLeft":"5px","paddingRight":"5px","display":"flex","alignItems":"center","justifyContent":"center","paddingTop":"5px","paddingBottom":"5px","lineHeight":"20px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"297px","height":"auto","position":"unset","left":"254px","top":"39px","backgroundColor":"#FF2B2B","color":"rgba(255, 255, 255, 1)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px","fontSize":"14px","paddingLeft":"5px","paddingRight":"5px","display":"flex","alignItems":"center","justifyContent":"center","paddingTop":"5px","paddingBottom":"5px","lineHeight":"20px"}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"971px","top":"11px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"971px","top":"11px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tRowx0x10: {
defaultStyle: {
            default: {"width":"430px","height":"28px","position":"unset","left":"570px","top":"672px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"430px","height":"28px","position":"unset","left":"570px","top":"672px"}}},
gutter:0,
justify:"end",
align:"middle", 
 },
},
tTextx0x10x0: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"669px","top":"670px","cursor":"pointer","animationName":"","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/4357d0c57cd64ff588b70a02dc8fc255.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"8px 50%","-webkit-mask-position":"","paddingLeft":"24px","marginLeft":"20px"},
            
            },
 default: { 
 
label:"周边查询",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"669px","top":"670px","cursor":"pointer","animationName":"","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/4357d0c57cd64ff588b70a02dc8fc255.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"8px 50%","-webkit-mask-position":"","paddingLeft":"24px","marginLeft":"20px"},"hover":{"backgroundColor":"var(--business-show-bg50)"}}}, 
 },
},
tTextx0x10x2: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"870px","top":"670px","cursor":"pointer","animationName":"","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/8b5a25d0ae5647d4ac7e737d98fb0b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"22px 50%","-webkit-mask-position":"","paddingLeft":"38px","marginLeft":"20px"},
            
            },
 default: { 
 
label:"调度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"870px","top":"670px","cursor":"pointer","animationName":"","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/8b5a25d0ae5647d4ac7e737d98fb0b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"22px 50%","-webkit-mask-position":"","paddingLeft":"38px","marginLeft":"20px"},"hover":{"backgroundColor":"var(--business-show-bg50)"}}}, 
 },
},
});
const initPageData = () => {
// 判断全局变量里有没有传参，没的话先用模拟数据
if (!global.businessDialog.dialogParmas) {
  global.businessDialog.dialogParmas = {
    "id": "",
    "companyName": "",
  }
}
console.log(global.businessDialog.dialogParmas, '接收的参数');
// 处理参数
state.id = global.businessDialog.dialogParmas.id;
state.companyName = global.businessDialog.dialogParmas.companyName;

apiRegistry.getBaseInfo.request();

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
const onmouseover1733993886943 = () => {
// 设置变量值
state.baseInfo.alarmShow = true;
};
const onmouseout1733993903757 = () => {
// 设置变量值
state.baseInfo.alarmShow = false;
};
const onclick1733817210174 = () => {
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
// 执行自定义方法
handleClickClose();
};
const onclick1734068220296 = () => {
// 执行自定义方法
handleClickQuery();
};
const onclick1734071402189 = () => {
// 执行自定义方法
handleClickTraceability();
};
const onclick1734067550409 = () => {
// 执行自定义方法
handleClickTrend();
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"id":"state.id","companyName":"state.companyName","interfaceId":"151777f6ad728221b84c31b3a0f65633"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"id":state.id,"companyName":state.companyName,"interfaceId":"151777f6ad728221b84c31b3a0f65633"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"id":state.id,"companyName":state.companyName,"interfaceId":"151777f6ad728221b84c31b3a0f65633"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data } = res;
if (data.head.statusCode === '200' && data.data) {
  // 名称
  state.baseInfo.title = data.data?.company_name || '-';
  // // 控制级别
  // state.baseInfo.controlLevel = data.data?.CONTROLLEVEL || '-';
  // // 水质级别
  // state.baseInfo.waterQuality[0].state = data.data?.WATERQUALITYLEVELNAME || '-';
  // state.baseInfo.waterQuality[0].stateBgColor = getWaterLevelColor(data.data?.WATERQUALITYLEVELNAME);
  // // 达标
  // state.baseInfo.standard[0].state = data.data?.ISSTANDARDSSTR || '-';
  // state.baseInfo.standard[0].stateBgColor = getWaterLevelColor(data.data?.ISSTANDARDSSTR);

  // 经纬度--周边查询使用
  state.point.lat = data.data?.latitude || '';
  state.point.lon = data.data?.longitude || '';
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
                            setPageScale('t-l-c-livestockBreedingCopy', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onBeforeMount(() => {
// 执行自定义方法
handleBack();
});
onMounted(() => {
setPageScale('t-l-c-livestockBreedingCopy', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initPageData();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tTabsx0x5ComputedData = computed(() => _.merge({}, componentState.tTabsx0x5.default, componentState.tTabsx0x5?.[state.screenSize]));

 const tRowx0x7ComputedData = computed(() => _.merge({}, componentState.tRowx0x7.default, componentState.tRowx0x7?.[state.screenSize]));

 const tTextx0x7x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x7x0.default, componentState.tTextx0x7x0?.[state.screenSize]));

 const tRectx0x7x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x7x1.default, componentState.tRectx0x7x1?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tRowx0x10ComputedData = computed(() => _.merge({}, componentState.tRowx0x10.default, componentState.tRowx0x10?.[state.screenSize]));

 const tTextx0x10x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x10x0.default, componentState.tTextx0x10x0?.[state.screenSize]));

 const tTextx0x10x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x10x2.default, componentState.tTextx0x10x2?.[state.screenSize]));

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
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tTabsx0x5ComputedData,
tRowx0x7ComputedData,
tTextx0x7x0ComputedData,
tRectx0x7x1ComputedData,
tRectx0x8ComputedData,
tRectx0x9ComputedData,
tRowx0x10ComputedData,
tTextx0x10x0ComputedData,
tTextx0x10x2ComputedData,
onmouseover1733993886943,
onmouseout1733993903757,
onclick1733817210174,
onclick1734068220296,
onclick1734067550409,
};
},
};