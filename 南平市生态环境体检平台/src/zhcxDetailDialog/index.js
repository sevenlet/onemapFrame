window.zhcxDetailDialogComponent = {
template: 
`<div id="t-l-c-zhcxDetailDialog" class="t-l-c-zhcxDetailDialog" >` +
`<t-rect id="t-rect-956c.76f89a13a" class="zhcxDetailDialog-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-7f6d.f68c6ee65" class="zhcxDetailDialog-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-e5ee.fb1b5f0aa" class="zhcxDetailDialog-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-image-base id="t-image-base-391f.0550b0bf5" class="zhcxDetailDialog-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle">` +
`</t-image-base>` +
`<t-rect id="t-rect-0090.dfbcd0634" class="zhcxDetailDialog-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1721979040344">` +
`</t-rect>` +
`<t-list-card id="t-list-card-433e.f8a2f77f7" class="zhcxDetailDialog-t-list-card-0-5"  :data="tListCardx0x5ComputedData.data" :spacing-x="tListCardx0x5ComputedData.spacingX" :col="tListCardx0x5ComputedData.col" :direction="tListCardx0x5ComputedData.direction" :exchange-order="tListCardx0x5ComputedData.exchangeOrder" :unit-break="tListCardx0x5ComputedData.unitBreak" :key-field="tListCardx0x5ComputedData.keyField" :active-key-field="tListCardx0x5ComputedData.activeKeyField" :active="tListCardx0x5ComputedData.active" :c-style="tListCardx0x5ComputedData.cStyle">` +
`</t-list-card>` +
`<t-list-card id="t-list-card-791f.08c2af0bf" class="zhcxDetailDialog-t-list-card-0-6"  :data="tListCardx0x6ComputedData.data" :spacing-x="tListCardx0x6ComputedData.spacingX" :col="tListCardx0x6ComputedData.col" :direction="tListCardx0x6ComputedData.direction" :exchange-order="tListCardx0x6ComputedData.exchangeOrder" :unit-break="tListCardx0x6ComputedData.unitBreak" :key-field="tListCardx0x6ComputedData.keyField" :active-key-field="tListCardx0x6ComputedData.activeKeyField" :active="tListCardx0x6ComputedData.active" :c-style="tListCardx0x6ComputedData.cStyle">` +
`</t-list-card>` +
`<t-tabs-base id="t-tabs-base-efda.a82181ae2" class="zhcxDetailDialog-t-tabs-base-0-7"  :data="tTabsBasex0x7ComputedData.data" :space="tTabsBasex0x7ComputedData.space" :selected-tab-val="tTabsBasex0x7ComputedData.selectedTabVal" :inner-shadow-color="tTabsBasex0x7ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x7ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x7ComputedData.alias" :c-style="tTabsBasex0x7ComputedData.cStyle">` +
`</t-tabs-base>` +
`<t-text id="t-text-1228.a8b4ee26b" class="zhcxDetailDialog-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-eea9.e4e2dde29" class="zhcxDetailDialog-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle">` +
`</t-text>` +
`<t-list-card id="t-list-card-a721.071850416" class="zhcxDetailDialog-t-list-card-0-10"  :data="tListCardx0x10ComputedData.data" :spacing-x="tListCardx0x10ComputedData.spacingX" :col="tListCardx0x10ComputedData.col" :direction="tListCardx0x10ComputedData.direction" :exchange-order="tListCardx0x10ComputedData.exchangeOrder" :unit-break="tListCardx0x10ComputedData.unitBreak" :key-field="tListCardx0x10ComputedData.keyField" :active-key-field="tListCardx0x10ComputedData.activeKeyField" :active="tListCardx0x10ComputedData.active" :c-style="tListCardx0x10ComputedData.cStyle">` +
`</t-list-card>` +
`<t-list-card id="t-list-card-ceab.5da8108ce" class="zhcxDetailDialog-t-list-card-0-11"  :data="tListCardx0x11ComputedData.data" :spacing-x="tListCardx0x11ComputedData.spacingX" :col="tListCardx0x11ComputedData.col" :direction="tListCardx0x11ComputedData.direction" :exchange-order="tListCardx0x11ComputedData.exchangeOrder" :unit-break="tListCardx0x11ComputedData.unitBreak" :key-field="tListCardx0x11ComputedData.keyField" :active-key-field="tListCardx0x11ComputedData.activeKeyField" :active="tListCardx0x11ComputedData.active" :c-style="tListCardx0x11ComputedData.cStyle">` +
`</t-list-card>` +
`<t-list-card id="t-list-card-f205.cc70b629" class="zhcxDetailDialog-t-list-card-0-12"  :data="tListCardx0x12ComputedData.data" :spacing-x="tListCardx0x12ComputedData.spacingX" :col="tListCardx0x12ComputedData.col" :direction="tListCardx0x12ComputedData.direction" :exchange-order="tListCardx0x12ComputedData.exchangeOrder" :unit-break="tListCardx0x12ComputedData.unitBreak" :key-field="tListCardx0x12ComputedData.keyField" :active-key-field="tListCardx0x12ComputedData.activeKeyField" :active="tListCardx0x12ComputedData.active" :c-style="tListCardx0x12ComputedData.cStyle">` +
`</t-list-card>` +
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
   taskDispatchIframeBaseUrl: "/ddxt-micro-fs-app/#/dispatchinglayout/special-task-assign?paramValue=fszprw&paramType=2&visible=true&defaultParamValue=cszprw&hiddenBackBtn=2",
   taskDispatchIframeUrl: "",
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
            default: {"width":"450px","height":"570px","left":"741px","top":"268px","border-radius":"16px","background":"var(--intergrated-query-dialog-bg)","box-shadow":"0px 4px 25px 0px var(--intergrated-query-dialog-box-shadow-color)","border-width":0,"borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--intergrated-query-dialog-border-image)","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"570px","left":"741px","top":"268px","border-radius":"16px","background":"var(--intergrated-query-dialog-bg)","box-shadow":"0px 4px 25px 0px var(--intergrated-query-dialog-box-shadow-color)","border-width":0,"borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--intergrated-query-dialog-border-image)","position":"unset"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"570px","position":"unset","left":"741px","top":"267px","border-radius":"16px","background":"rgba(7, 29, 11, 0.95)","border-width":0,"color":"var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundColor":"var(--intergrated-query-dialog-background-color)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"570px","position":"unset","left":"741px","top":"267px","border-radius":"16px","background":"rgba(7, 29, 11, 0.95)","border-width":0,"color":"var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundColor":"var(--intergrated-query-dialog-background-color)"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"450px","height":"45px","position":"unset","left":"741px","top":"268px","border-radius":"16px 16px 0px 0px","border-width":0,"background":"var(--intergrated-query-dialog-title-bg)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"45px","position":"unset","left":"741px","top":"268px","border-radius":"16px 16px 0px 0px","border-width":0,"background":"var(--intergrated-query-dialog-title-bg)"}}}, 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","position":"unset","left":"752px","top":"278px"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/aa0899554a6c437db802092b14b0a80b.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","position":"unset","left":"752px","top":"278px"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"24px","height":"24px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"10px 10px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"1153px","top":"279px","border-radius":"2px","border":"1px solid rgba(121, 255, 175, 0.6)","cursor":"pointer","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"10px 10px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"1153px","top":"279px","border-radius":"2px","border":"1px solid rgba(121, 255, 175, 0.6)","cursor":"pointer","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)"},"hover":{"opacity":"80% !important"}}}, 
 },
},
tListCardx0x5: {
defaultStyle: {
            default: {"width":"410px","height":"70px","position":"unset","left":"761px","top":"336px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"图层总数","num":"7个"},{"title":"图层总面积","num":"38.48㎡"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"70px","position":"unset","left":"761px","top":"336px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tListCardx0x6: {
defaultStyle: {
            default: {"width":"410px","height":"108px","position":"unset","left":"1225px","top":"467px","overflow":"visible","animationName":"","display":"flex","flexDirection":"column","alignItems":"flex-start","justifyContent":"flex-start","flexWrap":"nowrap"},
            
            },
 default: { 
 
data:[{"title":"顺德区","num":"0个"},{"title":"三水区","num":"0个"},{"title":"高明区","num":"0个"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"108px","position":"unset","left":"1225px","top":"467px","overflow":"visible","animationName":"","display":"flex","flexDirection":"column","alignItems":"flex-start","justifyContent":"flex-start","flexWrap":"nowrap"}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tTabsBasex0x7: {
defaultStyle: {
            default: {"width":"183px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","left":"995px","top":"188px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"},
            
            },
 default: { 
 
data:[{"label":"点","value":"MONTH"},{"label":"线","value":"YEAR"},{"label":"面","value":"DATA"}],
space:0,
selectedTabVal:"MONTH",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"183px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","left":"995px","top":"188px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"}},"itemWrapper":{"default":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","backgroundColor":"rgba(0, 61, 155, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"120px","height":"32px","fontSize":"14px","lineHeight":"32px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(0,61,155,0)","borderTop":"1px solid rgba(0,61,155,0)","borderRight":"1px solid rgba(0,61,155,0)","borderBottom":"1px solid rgba(0,61,155,0)","color":"var(--business-text-avianize)"},"active":{"background":"var(--business-tab-third-active-fill)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"rgba(3, 12, 52, 0)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","color":"var(--business-tab-third-active-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"32px"},"hover":{"backgroundColor":"rgba(0, 61, 155, 0)","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","color":"var(--business-tab-third-active-border)"}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"784px","top":"279px","font-size":"18px","text-shadow":"0px 0px 6px rgba(17, 214, 104, 0.62)","font-weight":"bold"},
            
            },
 default: { 
 
label:"图层信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"784px","top":"279px","font-size":"18px","text-shadow":"0px 0px 6px rgba(17, 214, 104, 0.62)","font-weight":"bold"}}}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"88px","height":"17px","color":"rgba(255, 255, 255, 0.9)","top":"423px","left":"761px","fontSize":"16px","position":"unset"},
            
            },
 default: { 
 
label:"行政区统计",
editable:false,
cStyle:{"wrapper":{"default":{"width":"88px","height":"17px","color":"rgba(255, 255, 255, 0.9)","top":"423px","left":"761px","fontSize":"16px","position":"unset"}}}, 
 },
},
tListCardx0x10: {
defaultStyle: {
            default: {"width":"410px","height":"103px","position":"unset","left":"761px","top":"454px","overflow":"visible","animationName":"","display":"flex","flexDirection":"column","alignItems":"flex-start","justifyContent":"flex-start","flexWrap":"nowrap"},
            
            },
 default: { 
 
data:[{"title":"顺德区","num":"0个"},{"title":"三水区","num":"0个"},{"title":"高明区","num":"0个"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"103px","position":"unset","left":"761px","top":"454px","overflow":"visible","animationName":"","display":"flex","flexDirection":"column","alignItems":"flex-start","justifyContent":"flex-start","flexWrap":"nowrap"}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tListCardx0x11: {
defaultStyle: {
            default: {"width":"410px","height":"136px","position":"unset","left":"1225px","top":"314px","overflow":"visible","animationName":"","display":"flex","flexDirection":"column","alignItems":"flex-start","justifyContent":"flex-start","flexWrap":"nowrap"},
            
            },
 default: { 
 
data:[{"title":"图层名称","num":"5km大气防控区"},{"title":"图层总数量","num":"4个"},{"title":"图层总面积","num":"563.14㎡"},{"title":"南海区","num":"0个"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"136px","position":"unset","left":"1225px","top":"314px","overflow":"visible","animationName":"","display":"flex","flexDirection":"column","alignItems":"flex-start","justifyContent":"flex-start","flexWrap":"nowrap"}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tListCardx0x12: {
defaultStyle: {
            default: {"width":"410px","height":"106px","position":"unset","left":"1223px","top":"594px","overflow":"visible","animationName":"","display":"flex","flexDirection":"column","alignItems":"flex-start","justifyContent":"flex-start","flexWrap":"nowrap"},
            
            },
 default: { 
 
data:[{"title":"图层名称","num":"三水"},{"title":"行政区","num":"--"},{"title":"面积","num":"122㎡"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"106px","position":"unset","left":"1223px","top":"594px","overflow":"visible","animationName":"","display":"flex","flexDirection":"column","alignItems":"flex-start","justifyContent":"flex-start","flexWrap":"nowrap"}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
});
const getDialogParams = () => {
console.log(289, '图层信息', global.businessDialog);

// {
//     "layerId": "佛山市",
//     "visible": "1",
//     "libraryId": "c45760b19c6e4e8aa653821b486421d9",
//     "name": "佛山市",
//     "parentId": "6ce44877142f42a5893bc381cb67891d",
//     "hasDialog": true
// }
};
const onclick1721979040344 = () => {
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
 function handleWindowResize() {
                            setPageScale('t-l-c-zhcxDetailDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getDialogParams();
onMounted(() => {
setPageScale('t-l-c-zhcxDetailDialog', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tImageBasex0x3ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x3.default, componentState.tImageBasex0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tListCardx0x5ComputedData = computed(() => _.merge({}, componentState.tListCardx0x5.default, componentState.tListCardx0x5?.[state.screenSize]));

 const tListCardx0x6ComputedData = computed(() => _.merge({}, componentState.tListCardx0x6.default, componentState.tListCardx0x6?.[state.screenSize]));

 const tTabsBasex0x7ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x7.default, componentState.tTabsBasex0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tListCardx0x10ComputedData = computed(() => _.merge({}, componentState.tListCardx0x10.default, componentState.tListCardx0x10?.[state.screenSize]));

 const tListCardx0x11ComputedData = computed(() => _.merge({}, componentState.tListCardx0x11.default, componentState.tListCardx0x11?.[state.screenSize]));

 const tListCardx0x12ComputedData = computed(() => _.merge({}, componentState.tListCardx0x12.default, componentState.tListCardx0x12?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tImageBasex0x3ComputedData,
tRectx0x4ComputedData,
tListCardx0x5ComputedData,
tListCardx0x6ComputedData,
tTabsBasex0x7ComputedData,
tTextx0x8ComputedData,
tTextx0x9ComputedData,
tListCardx0x10ComputedData,
tListCardx0x11ComputedData,
tListCardx0x12ComputedData,
onclick1721979040344,
};
},
};