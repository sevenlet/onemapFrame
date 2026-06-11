window.physicalExamCenterPopComponent = {
template: 
`<div id="t-l-c-physicalExamCenterPop" class="t-l-c-physicalExamCenterPop" >` +
`<t-row id="t-row-681c.f033f4cb4" class="physicalExamCenterPop-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align">` +
`<t-col id="t-col-56ea.61decd5ae" class="physicalExamCenterPop-t-col-0-1-0"  :span="tColx0x1x0ComputedData.span" :offset="tColx0x1x0ComputedData.offset" :push="tColx0x1x0ComputedData.push" :pull="tColx0x1x0ComputedData.pull" :c-style="tColx0x1x0ComputedData.cStyle">` +
`<t-text id="t-text-7d64.a178cb1f5" class="physicalExamCenterPop-t-text-0-1-0-0"  :label="tTextx0x1x0x0ComputedData.label" :editable="tTextx0x1x0x0ComputedData.editable" :c-style="tTextx0x1x0x0ComputedData.cStyle">` +
`</t-text>` +
`<t-date-picker id="t-date-picker-1ad1.a126d44ad" class="physicalExamCenterPop-t-date-picker-0-1-0-1"  :placeholder="tDatePickerx0x1x0x1ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x0x1ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x0x1ComputedData.endPlaceholder" :type="tDatePickerx0x1x0x1ComputedData.type" :clearable="tDatePickerx0x1x0x1ComputedData.clearable" :range-separator="tDatePickerx0x1x0x1ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-1ad1.a126d44ad']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x0x1ComputedData.separator" :c-style="tDatePickerx0x1x0x1ComputedData.cStyle" :is-disabled-front="tDatePickerx0x1x0x1ComputedData.isDisabledFront" @date-change="ondateChange1742991197605">` +
`</t-date-picker>` +
`</t-col>` +
`<t-col id="t-col-93de.673b1f462" class="physicalExamCenterPop-t-col-0-1-1"  :span="tColx0x1x1ComputedData.span" :offset="tColx0x1x1ComputedData.offset" :push="tColx0x1x1ComputedData.push" :pull="tColx0x1x1ComputedData.pull" :c-style="tColx0x1x1ComputedData.cStyle">` +
`<t-component id="t-component-5c24.40959d27" class="physicalExamCenterPop-t-component-0-1-1-0"  :name="tComponentx0x1x1x0ComputedData.name" :loading="tComponentx0x1x1x0ComputedData.loading" :c-style="tComponentx0x1x1x0ComputedData.cStyle" :src="tComponentx0x1x1x0ComputedData.src" :component-name="tComponentx0x1x1x0ComputedData.componentName" :page-id="tComponentx0x1x1x0ComputedData.pageId" :page-code="tComponentx0x1x1x0ComputedData.pageCode">` +
`</t-component>` +
`</t-col>` +
`<t-col id="t-col-c45f.3c06cf768" class="physicalExamCenterPop-t-col-0-1-2"  :span="tColx0x1x2ComputedData.span" :offset="tColx0x1x2ComputedData.offset" :push="tColx0x1x2ComputedData.push" :pull="tColx0x1x2ComputedData.pull" :c-style="tColx0x1x2ComputedData.cStyle">` +
`<t-component id="t-component-9a56.d2768158a" class="physicalExamCenterPop-t-component-0-1-2-0"  :name="tComponentx0x1x2x0ComputedData.name" :loading="tComponentx0x1x2x0ComputedData.loading" :c-style="tComponentx0x1x2x0ComputedData.cStyle" :src="tComponentx0x1x2x0ComputedData.src" :component-name="tComponentx0x1x2x0ComputedData.componentName" :page-id="tComponentx0x1x2x0ComputedData.pageId" :page-code="tComponentx0x1x2x0ComputedData.pageCode">` +
`</t-component>` +
`<t-text-common id="t-text-common-13d9.227b6b3e4" class="physicalExamCenterPop-t-text-common-0-1-2-1"  :label="tTextCommonx0x1x2x1ComputedData.label" :editable="tTextCommonx0x1x2x1ComputedData.editable" :c-style="tTextCommonx0x1x2x1ComputedData.cStyle">` +
`</t-text-common>` +
`</t-col>` +
`<t-col id="t-col-499e.14a2e80f8" class="physicalExamCenterPop-t-col-0-1-3"  :span="tColx0x1x3ComputedData.span" :offset="tColx0x1x3ComputedData.offset" :push="tColx0x1x3ComputedData.push" :pull="tColx0x1x3ComputedData.pull" :c-style="tColx0x1x3ComputedData.cStyle">` +
`<t-chart-design id="t-chart-design-35d3.fdedae695" class="physicalExamCenterPop-t-chart-design-0-1-3-0"  :register-map-name="tChartDesignx0x1x3x0ComputedData.registerMapName" :geo-json="tChartDesignx0x1x3x0ComputedData.geoJson" :empty-img="tChartDesignx0x1x3x0ComputedData.emptyImg" :c-style="tChartDesignx0x1x3x0ComputedData.cStyle" :options="replaceCssVariables(filterData(state.chartOption, componentPropBindingMap?.['t-chart-design-35d3.fdedae695']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @com-click="oncomClick1769507629504">` +
`</t-chart-design>` +
`</t-col>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-2e88.9a8a1ed2b":{"attributeName":"tRectx0x0"},"t-row-681c.f033f4cb4":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-56ea.61decd5ae":{"attributeName":"tColx0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-7d64.a178cb1f5":{"attributeName":"tTextx0x1x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-1ad1.a126d44ad":{"attributeName":"tDatePickerx0x1x0x1","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]}},"t-col-93de.673b1f462":{"attributeName":"tColx0x1x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-5c24.40959d27":{"attributeName":"tComponentx0x1x1x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-col-c45f.3c06cf768":{"attributeName":"tColx0x1x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-9a56.d2768158a":{"attributeName":"tComponentx0x1x2x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-13d9.227b6b3e4":{"attributeName":"tTextCommonx0x1x2x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-499e.14a2e80f8":{"attributeName":"tColx0x1x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-35d3.fdedae695":{"attributeName":"tChartDesignx0x1x3x0","registerMapName":{"filters":[]},"geoJson":{"filters":[]},"emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-rect-9ee1.ec8130f44":{"attributeName":"tRectx0x2"},"t-text-03db.65ad46ad":{"attributeName":"tTextx0x3"},"t-rect-46ee.be203adb1":{"attributeName":"tRectx0x4"}};
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
   totalData: {"NUM":"","STATUS_ONE":"","STATUS_TWO":"","STATUS_ZERO":"","DEPT_NUM":""},
   newPageToken: "",
   endTime: "",
   startTime: "",
   timeRange: [],
   chartOption: {},
   cardList: [{"title":"任务总数","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/2911a043b524469eb2ed7f0bff0e5341.png","num":0,"numColor":"#01BBC7","total":0,"unit":"个"},{"title":"入河排污口","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/f119f3f3cd7e4e3eb043b646c3e681bd.png","num":0,"numColor":"#00FF70","total":0,"unit":"个"},{"title":"农村生活污水","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png","num":0,"numColor":"#FFC000","total":0,"unit":"个"},{"title":"鳗鱼养殖污染","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png","num":0,"numColor":"#DA54DC","total":0,"unit":"个"}],
   dialogTitle: "体检问题",
   tableList: [],
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
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"0px","top":"0px","padding":"24px","box-sizing":"border-box"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"0px","top":"0px","padding":"24px","box-sizing":"border-box"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","marginBottom":"20px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","marginBottom":"20px"}}}, 
 },
},
tTextx0x1x0x0: {
defaultStyle: {
            default: {"width":"65px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"5px","left":"14px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"发起时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"5px","left":"14px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""}}}, 
 },
},
tDatePickerx0x1x0x1: {
defaultStyle: {
            default: {"width":"296px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","position":"unset","left":"73px","top":"0px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
cStyle:{"wrapper":{"default":{"width":"296px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","position":"unset","left":"73px","top":"0px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},"hover":{"fontSize":"14px","backgroundColor":"var(--t-select-fill-bg-hover)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"}},"inputWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgba(20,112,204,0)","borderTop":"1px none rgba(20,112,204,0)","borderRight":"1px none rgba(20,112,204,0)","borderBottom":"1px none rgba(20,112,204,0)","color":"#fff","paddingLeft":"8px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"14px","lineHeight":"14px"}},"inputDateIcons":{"default":{"backgroundColor":"var(--business-select-border)","color":"rgba(121, 190, 255, 0)","backgroundImage":"","-webkit-mask-image":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/date-picker.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"50% 50%","position":"absolute","right":"0","top":"0px","pointerEvents":"none","marginRight":"0px","marginTop":"5px","width":"0px"}},"splitLine":{"default":{"color":"","backgroundColor":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px solid rgba(20,112,204,0.3)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""}},"selCurrentDateWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px","borderTopLeftRadius":"100px","borderTopRightRadius":"100px","borderBottomLeftRadius":"100px","borderBottomRightRadius":"100px"},"hover":{"fontSize":"12px"}},"currentDateWrapper":{"hover":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"},"active":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"},"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"12px"}},"todayWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","color":"#fff","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"dateHeaderWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"","fontSize":"16px"},"hover":{"backgroundColor":"rgba(26, 27, 31, 0)","color":"#fff","fontSize":"16px"}},"weekWrapper":{"default":{"color":"#fff","fontWeight":"500","backgroundColor":"","fontFamily":"微软雅黑"}},"currentWeekWrapper":{"default":{"color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundColor":""}},"timePanelNumWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-select-drop-bg)"},"hover":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--t-select-fill-bg-hover)","color":"var(--business-select-border-hover)"}},"okWrapper":{"default":{"borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"backgroundColor":"rgba(74, 228, 23, 0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)"},"active":{"borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"timePanelWrapper":{"default":{"borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","backgroundColor":"var(--business-select-drop-bg)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 10px 0px ","fontSize":"12px"},"active":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","color":"var(--business-select-border-hover)","backgroundColor":"var(--t-button-bg)"}},"textBtnWrapper":{"default":{"color":"rgba(255, 255, 255, 0.6)","backgroundColor":""}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--t-select-fill-bg-hover)"}},"operatorArrow":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)"},"hover":{"color":"var(--business-text-hover)"}},"prevAndNextMonthDate":{"default":{"fontSize":"12px"}},"rangeInputWrapper":{"default":{"fontSize":"16px"}},"disableDateWrapper":{"default":{"fontSize":"12px"}}},
isDisabledFront:false, 
 },
},
tColx0x1x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tComponentx0x1x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"143px","margin":"0 auto","position":"unset","left":"1px","top":"54px"},
            
            },
 default: { 
 
name:"tjwtKhsltjkpComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"143px","margin":"0 auto","position":"unset","left":"1px","top":"54px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/tjwtKhsltjkp",
componentName:"tjwtKhsltjkpComponent",
pageId:"383f58b78fa244938a19d78ab84297f3",
pageCode:"tjwtKhsltjkp", 
 },
},
tColx0x1x2: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"relative","left":"213px","top":"-341px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"relative","left":"213px","top":"-341px"}}}, 
 },
},
tComponentx0x1x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"33px","margin":"0 auto","position":"relative","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"dialogTitleComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"33px","margin":"0 auto","position":"relative","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/dialogTitle",
componentName:"dialogTitleComponent",
pageId:"051aca1b22bc4dbeb1baf06b72818d98",
pageCode:"dialogTitle", 
 },
},
tTextCommonx0x1x2x1: {
defaultStyle: {
            default: {"width":"151px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"500","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"absolute !important","left":"50px","top":"6px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"责任部门统计",
editable:false,
cStyle:{"wrapper":{"default":{"width":"151px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"500","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"absolute !important","left":"50px","top":"6px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tColx0x1x3: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"449px","top":"-337px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"449px","top":"-337px"}}}, 
 },
},
tChartDesignx0x1x3x0: {
defaultStyle: {
            default: {"height":"600px","width":"100%","position":"unset","left":"20px","top":"0px"},
            
            },
 default: { 
 
registerMapName:"",
geoJson:{},
emptyImg:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"600px","width":"100%","position":"unset","left":"20px","top":"0px"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
});
const initData = () => {


provide('cardListData', state.cardList)
provide('state', state)

console.log('state.cardList', state.cardList);

const initPageData = async () => {
  // 获取最新时间
  await apiRegistry.getTime.request();
  // 初始化图表
  await initChartOptions();
  const params = {
    username: 'shiliang',
    secret: 'TYZQefxMIJAGHgTwXXcgDIJ3NsybeLrWWnHcadm0VSH1j0oDpKa+KNZkfVvQ1LlwEYKkmgwwS2xcrXTTvXMmXg==',
  }
  const aRes = await axios.post(`${global.serviceBaseUrl}/jnfdsxs/prod-api/token/getToken`, params)
  console.log('请求前的token', aRes);
  state.newPageToken = aRes.data?.data?.token || '';
  // 获取跳转地址的token
  // apiRegistry.getToken.request();
  // 获取总数
  apiRegistry.getCardTotal.request();
  // 获取卡片数据
  apiRegistry.getCardData.request();
  // 获取图表数据
  apiRegistry.getChartData.request();
};

initPageData();

};
const closePop = () => {
global.dialogName = ''
global.dialogParams = {}
};
const initChartOptions = () => {
state.chartOption = {
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: { type: 'shadow' }
    // },
    tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
        formatter: (params) => {
            // params 是一个数组，因为 trigger: 'axis'
            return (
                `${params[0].name}<br/>` +
                params
                    .map((p) => `${p.marker}${p.seriesName} ${p.value}个`)
                    .join("<br/>")
            );
        },
    },
    // dataZoom: [
    //     {
    //         type: "slider",
    //         start: 0,
    //         end: 100,
    //     },
    // ],
    legend: {
        top: 10,
        data: ['任务总数', '已办结', '办理中'],
        textStyle: {
            color: '#DEFDFF'
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: [],
        axisLine: {
            lineStyle: { color: 'rgba(255,255,255,.3)' }
        },
        axisLabel: {
            color: '#DEFDFF',
            fontSize: 12,
            // fontWeight: '700',
            // fontFamily: '方正综艺',
            rotate:30,
        },
        axisTick: { show: false }
    },
    yAxis: {
        type: 'value',
        name: "个",
        nameTextStyle: {
            color: "#DEFDFF", // 和轴标签同色系
            fontSize: 14,
        },
        nameGap: 10, // 名称与轴的间距，可根据需要调整
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,.3)'
            }
        },
        axisLine: { show: false },
        axisLabel: { color: '#DEFDFF' }
    },
    series: [
        {
            name: '任务总数',
            type: 'bar',
            barWidth: 10,
            data: [],
            itemStyle: {
                borderColor: 'rgb(89,119,255)',
                borderWidth: 1,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(89,119,255,0.95)' },
                    { offset: 1, color: 'rgba(89,119,255,0.25)' }
                ])
            },
            label: {
                show: true,
                position: "top",
                color: "#fff",
                formatter: "{c}",
            },
        },
        {
            name: '已办结',
            type: 'bar',
            barWidth: 10,
            data: [],
            itemStyle: {
                borderColor: 'rgb(61,196,91)',
                borderWidth: 1,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(61,196,91,0.95)' },
                    { offset: 1, color: 'rgba(61,196,91,0.25)' }
                ])
            },
            label: {
                show: true,
                position: "top",
                color: "#fff",
                formatter: "{c}",
            },
        },
        {
            name: '办理中',
            type: 'bar',
            barWidth: 10,
            data: [],
            itemStyle: {
                borderColor: 'rgb(248,176,45)',
                borderWidth: 1,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(248,176,45,0.9)' },
                    { offset: 1, color: 'rgba(248,176,45,0.25)' }
                ])
            },
            label: {
                show: true,
                position: "top",
                color: "#fff",
                formatter: "{c}",
            },
        },
    ]
}
};
const handleTimeChange = (timeRange) => {
if (timeRange.length) {
  const [startTime, endTime] = timeRange
  state.startTime = startTime;
  state.endTime = endTime;
} else {
  state.startTime = '';
  state.endTime = '';
}

  getCardData();
  getChartData();
  // // 获取卡片数据
  // apiRegistry.getCardData.request();
  // // 获取图表数据
  // apiRegistry.getChartData.request();
};
const handleTableClick = (operationId,row) => {
switch(operationId){
  case 'view':
    console.log(row)
    break;
  default:
    break;
}
};
const handleChartClick = (data) => {
console.log('处理图标点击事件', data);

console.log(state.newPageToken, data.name);

const token = encodeURIComponent(state.newPageToken);
const ip = 'https://npzw.jnfdsxs.xyz:18011';
// const ip = `${global.serviceBaseUrl}/jnfdsxs`;
const url = `${ip}/business/problemrecordsNew?responseUnitName=${data.name}&token=${token}`;
global.deptIframeSrc = url;
console.log('编码后的url', global.deptIframeSrc)
if (state.newPageToken) {
  // window.open(url, '_blank');
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'createDialog',  // 消息类型名称
      data: {
        data: {
          headerComName: "",
          contentComName: "tjwtDeptProblemDetailComponent",
          maxWidth: "1600px",
          maxHeight: "930px",
          minWidth: "1000px",
          minHeight: "500px",
          isScalse: false,
          title: `${data.name}体检问题详情`
        }
      }
    })
}
};
const createDialog = () => {
// 接收弹窗ID？如果有ID就会替换当前窗口 如果没有就是新建
// 接收是否显示蒙版？如果有就不能点击下方内容  如果没有就是可以点击其他地方
/*
 * headerComName 头部动态组件名称
 * contentComName 内容动态组件名称
 * maxWidth 最大宽度
 * maxHeight 最大高度
 * minWidth 最小宽度
 * minHeight 最小高度
 * title 标题文字 （使用动态组件或者标题文字）
 * isContentScale 是否内容缩放
 * hiddenScaleButton 隐藏放大缩小按钮
 */
const { headerComName, contentComName, maxWidth, maxHeight, minWidth, minHeight, title, isContentScale, hiddenScaleButton = false, fullScreen = false, id } = params
const dialog = mountDynamicComponent(
  {
    id: id,
    componentName: 'TDialog',
    // mountTo: document.getElementById('t-l-c-root'),
    mountTo: document.querySelector('#t-l-c-root'),
    // 弹窗组件的参数  样式、属性等提前定义好，然后在页面配置中拷贝过来
    props: {
      aaa: 111,
      mountTo: '#t-l-c-root',
      "dialogVisible": true,
      "title": title || '',
      "minimizedTitle": title || '',
      "dialogMinimized": false,
      "dialogMaximized": true,
      "contentComName": contentComName || '',
      "headerComName": headerComName || '',
      "cancelText": "111",
      "confirmText": "确认",
      "isContentScale": false,
      "maxPosition": {
        "width": fullScreen ? "100%" : (maxWidth || "1600px"),
        "height": fullScreen ? "100%" : (maxHeight || "997px"),
        "left": fullScreen ? 0 : `calc(50% - ${Number(maxWidth.replace('px', '')) / 2 || '800'}px)`,
        "top": fullScreen ? 0 : `calc(50% - ${Number(maxHeight.replace('px', '')) / 2 || '458'}px)`,
        "--text-size-14": "18px",
        "--scalc": '1.5'
      },
      "minPosition": {
        "width": minWidth || "500px",
        "height": minHeight || "300px",
        "left": `calc(50% - ${Number(minWidth.replace('px', '')) / 2 || '250'}px)`,
        "top": `calc(50% - ${Number(minHeight.replace('px', '')) / 2 || '150'}px)`,
        "--text-size-14": "14px",
        "--scalc": '1'
      },
      "minimizedHeaderStyle": {
        "width": "100%",
        "display": "flex",
        "align-items": "center"
      },

      "cStyle": {
        "wrapper": {
          "default": {
            "backgroundColor": "var(--business-dialog-bg)",
            "width": "800px",
            "height": "0px",
            // "boxShadow": "0px 4px 25px 0px #275B2A",
            "overFlow": "hidden",
            "borderTopLeftRadius": "16px",
            "borderTopRightRadius": "16px",
            "borderBottomLeftRadius": "16px",
            "borderBottomRightRadius": "16px",
            "overflow": "hidden",
            "borderLeft": "1px solid var(--business-show-bg60)",
            "borderTop": "1px solid var(--business-show-bg60)",
            "borderRight": "1px solid var(--business-show-bg60)",
            "borderBottom": "1px solid var(--business-show-bg60)",
            "animationName": "",
            "left": "200px",
            "top": "200px",
            "zIndex": 9999,
            "position": "unset"
          }
        },
        "mask": {
          "default": {
            "backgroundColor": "transparent",
            "pointerEvents": "all"
          }
        },
        "header": {
          "default": {
            "backgroundColor": "var(--business-show-bg30)",
            "width": "100%",
            "display": "flex",
            "justifyContent": "space-between",
            "paddingLeft": "24px",
            "paddingTop": "0",
            "paddingRight": "24px",
            "paddingBottom": "0",
            "height": "47px",
            "borderBottom": "1px solid var(--business-show-bg60)"
          }
        },
        "footer": {
          "default": {
            "display": "none"
          }
        },
        "title": {
          "default": {
            "height": "26px",
            "fontFamily": "思源",
            "fontSize": "18px",
            "color": "rgb(255, 255, 255)",
            "background": "unset",
            "backgroundClip": "unset",
            "lineHeight": "16px",
            "letterSpacing": "0px",
            "textAlign": "center",
            "backgroundImage": "url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-12-02/996e4cffb01f4c4ab284b6ec97ae2354.svg)",
            "-webkit-mask-image": "",
            "backgroundRepeat": "no-repeat",
            "-webkit-mask-repeat": "",
            "-webkit-mask-size": "",
            "-webkit-mask-position": "",
            "paddingLeft": "32px",
            "position": "relative",
            "lineHeight": "20px",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "flex-start",
            "pointer-events": "none"
          }
        },
        "minimizedTitle": {
          "default": {
            "height": "26px",
            "fontFamily": "思源",
            "fontSize": "18px",
            "color": "rgb(255, 255, 255)",
            "background": "unset",
            "backgroundClip": "unset",
            "lineHeight": "16px",
            "letterSpacing": "0px",
            "textAlign": "center",
            "backgroundImage": "url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-12-02/996e4cffb01f4c4ab284b6ec97ae2354.svg)",
            "-webkit-mask-image": "",
            "backgroundRepeat": "no-repeat",
            "-webkit-mask-repeat": "",
            "backgroundSize": "26px 26px",
            "-webkit-mask-size": "",
            "backgroundPosition": "0% 50%",
            "-webkit-mask-position": "",
            "paddingLeft": "32px",
            "position": "relative",
            "lineHeight": "20px",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "flex-start",
            "pointer-events": "none",
          }
        },
        "closeButton": {
          "default": {
            "color": "rgba(255, 255, 255, 1)",
            "backgroundColor": "var(--business-show-bg30)",
            "borderLeft": "1px solid var(--business-btn-default)",
            "borderTop": "1px solid var(--business-btn-default)",
            "borderRight": "1px solid var(--business-btn-default)",
            "borderBottom": "1px solid var(--business-btn-default)",
            "borderTopLeftRadius": "4px",
            "borderTopRightRadius": "4px",
            "borderBottomLeftRadius": "4px",
            "borderBottomRightRadius": "4px",
            "marginLeft": "8px",
            "cursor": "pointer",
            "width": "24px",
            "height": "24px",
            "backgroundImage": "url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "auto",
            "backgroundPosition": "50% 50%",
            "fontSize": "0px"
          },
          "hover": {
            "borderLeft": "1px solid var(--business-theme)",
            "borderTop": "1px solid var(--business-theme)",
            "borderRight": "1px solid var(--business-theme)",
            "borderBottom": "1px solid var(--business-theme)",
            "borderTopLeftRadius": "4px",
            "borderTopRightRadius": "4px",
            "borderBottomLeftRadius": "4px",
            "borderBottomRightRadius": "4px",
          }
        },
        "minButton": {
          "default": {
            "color": "rgba(255, 255, 255, 1)",
            "backgroundColor": "var(--business-show-bg30)",
            "borderLeft": "1px solid var(--business-btn-default)",
            "borderTop": "1px solid var(--business-btn-default)",
            "borderRight": "1px solid var(--business-btn-default)",
            "borderBottom": "1px solid var(--business-btn-default)",
            "borderTopLeftRadius": "4px",
            "borderTopRightRadius": "4px",
            "borderBottomLeftRadius": "4px",
            "borderBottomRightRadius": "4px",
            "cursor": "pointer",
            "width": "24px",
            "height": "24px",
            "backgroundImage": "url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-05-14/6223de110e0f4d4bb6398681dabecc9d.svg)",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "auto",
            "backgroundPosition": "50% 50%",
            "fontSize": "0px",
            "display": hiddenScaleButton ? 'none' : 'unset'
          },
          "hover": {
            "borderLeft": "1px solid var(--business-theme)",
            "borderTop": "1px solid var(--business-theme)",
            "borderRight": "1px solid var(--business-theme)",
            "borderBottom": "1px solid var(--business-theme)",
            "borderTopLeftRadius": "4px",
            "borderTopRightRadius": "4px",
            "borderBottomLeftRadius": "4px",
            "borderBottomRightRadius": "4px",
            "display": hiddenScaleButton ? 'none' : 'unset'
          }
        },
        "maxButton": {
          "default": {
            "color": "rgba(255, 255, 255, 1)",
            "backgroundColor": "var(--business-show-bg30)",
            "borderLeft": "1px solid var(--business-btn-default)",
            "borderTop": "1px solid var(--business-btn-default)",
            "borderRight": "1px solid var(--business-btn-default)",
            "borderBottom": "1px solid var(--business-btn-default)",
            "borderTopLeftRadius": "4px",
            "borderTopRightRadius": "4px",
            "borderBottomLeftRadius": "4px",
            "borderBottomRightRadius": "4px",
            "cursor": "pointer",
            "width": "24px",
            "height": "24px",
            "backgroundImage": "url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-05-14/a330780194a5454982c8c1d04f890304.svg)",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "auto",
            "backgroundPosition": "50% 50%",
            "fontSize": "0px",
            "display": hiddenScaleButton ? 'none' : 'unset'
          },
          "hover": {
            "borderLeft": "1px solid var(--business-theme)",
            "borderTop": "1px solid var(--business-theme)",
            "borderRight": "1px solid var(--business-theme)",
            "borderBottom": "1px solid var(--business-theme)",
            "borderTopLeftRadius": "4px",
            "borderTopRightRadius": "4px",
            "borderBottomLeftRadius": "4px",
            "borderBottomRightRadius": "4px",
            "display": hiddenScaleButton ? 'none' : 'unset'
          }
        },
        "content": {
          "default": {
            "overflow": "auto",
            "position": "relative",
            "padding": "0",
            "height": "auto",
            // "max-height": "500px",
            "display": "flex",
            "flexDirection": "row",
            "alignItems": "center",
            "justifyContent": "center"
          }
        },
        "headerCustomContainer": {
          "default": {
            "position": "relative",
            "pointerEvents": "none",
            "width": title ? "auto" : "100%"
          }
        },
        "buttonControls": {
          "default": {
            "position": "relative"
          }
        },
        "minimizedTitle": {
          "default": {
            "height": "26px",
            "fontFamily": "思源",
            "fontSize": "18px",
            "color": "rgb(255, 255, 255)",
            "background": "unset",
            "backgroundClip": "unset",
            "lineHeight": "16px",
            "letterSpacing": "0px",
            "textAlign": "center",
            "backgroundImage": "url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-12-02/996e4cffb01f4c4ab284b6ec97ae2354.svg)",
            "-webkit-mask-image": "",
            "backgroundRepeat": "no-repeat",
            "-webkit-mask-repeat": "",
            "-webkit-mask-size": "",
            "-webkit-mask-position": "",
            "paddingLeft": "32px",
            "position": "relative",
            "lineHeight": "20px",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "flex-start",
            "pointer-events": "none",
          }
        }
      },
    },
  },
  /* 关闭弹窗的回调 参数是组件的ID */
  (comId) => {
    // 这里执行关闭弹窗后的操作
    console.log(comId)

    // 发送关闭中屏弹窗事件
    rootData.rootSocket.emit(
      'message',  // 固定的消息名称，不能修改
      {
        room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
        type: 'closeCenterScreenDialog',  // 消息类型名称
      }
    );

    // 清除地图涟漪效果
    rootData.rootSocket.emit(
      'message',  // 固定的消息名称，不能修改
      {
        room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
        type: 'clearGoToPoint',  // 消息类型名称
      }
    );
  }
);

// 全局存储弹窗实例 用于关闭弹窗使用
global.dialogInstance = dialog;

// 获取要挂载的DOM元素
// const mountTo = document.querySelector(`[data-id="${dialog.id}"]`)
//   .getElementsByClassName('content')[0];

// mountDynamicComponent({
//   componentName: 'TIframe',
//   id: 'TIframe',
//   mountTo,
//   props: {
//     // 要插入的页面英文名称+Component
//     "src": "titleComponent",
//   },
// })
};
const ondateChange1742991197605 = (data) => {
// 设置变量值
state.timeRange = data;
// 执行自定义方法
handleTimeChange(data);
};
const oncomClick1769507629504 = (data) => {
// 执行自定义方法
handleChartClick(data);
};
const onclick1742797597302_0_0 = () => {
// 执行自定义方法
closePop();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"eaf5911c1bf3ea48dc843e4ec48a2cfb","REGION_CODE":"global.REGION_CODE"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"eaf5911c1bf3ea48dc843e4ec48a2cfb","REGION_CODE":global.REGION_CODE},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"eaf5911c1bf3ea48dc843e4ec48a2cfb","REGION_CODE":global.REGION_CODE});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTime'] = res.data;
                
     console.log('体检问题最新时间', res);

if (res?.data?.data && res?.data?.data.length) {
  const result = res.data?.data?.[0];
  state.startTime = result.start_time || '';
  state.endTime = result.end_time || '';
  state.timeRange = [state.startTime, state.endTime];
}
// if (res?.data?.data && res?.data?.data.length > 0) {
//   console.log(res, '受污染耕地和建设用地安全利用率');
//   const data = res.data.data[0];
//   global.constructTime = data.MONITORTIME;
//   for (let key in state.riskData) {
//     if (data.hasOwnProperty(key)) {
//       state.riskData[key] = data[key] || '--';
//     }
//   }
//   if (Number(data.GOOD_RATE_JQN) > 0) {
//     state.isOk0 = 1;
//   } else if (Number(data.GOOD_RATE_JQN) < 0) {
//     state.isOk0 = -1;
//   } else {
//     state.isOk0 = 0;
//   }
//   setColor(data.GOOD_RATE_YYMB, 0, state);
// } else {
//     global.constructTime = '--';
//   for (let key in state.riskData) {
//     state.riskData[key] = '--';
//   }
// }

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
        // global.constructTime = '--';
      reject(error);
    });
  });
},
              },
// 接口函数
 getCardData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"END_TIME":"state.endTime","START_TIME":"state.startTime","interfaceId":"174aa59bd24a44d0f4d7a8c399e2755c","REGION_CODE":"global.REGION_CODE"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"END_TIME":state.endTime,"START_TIME":state.startTime,"interfaceId":"174aa59bd24a44d0f4d7a8c399e2755c","REGION_CODE":global.REGION_CODE},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"END_TIME":state.endTime,"START_TIME":state.startTime,"interfaceId":"174aa59bd24a44d0f4d7a8c399e2755c","REGION_CODE":global.REGION_CODE});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardData'] = res.data;
                
     console.log('体检卡片数据', res);

// 任务总数、中督、省督、入河排污口、农村生活污水、鳗鱼养殖污染、责任书、《八闽快讯》问题、水环境问题、大气环境问题、土壤环境问题、重复来信来访、其他
const iconArr = [
  "/lego-generated-apps/lego_file/res/2026-01-15/2911a043b524469eb2ed7f0bff0e5341.png",
  "/lego-generated-apps/lego_file/res/2026-01-15/f119f3f3cd7e4e3eb043b646c3e681bd.png",
  "/lego-generated-apps/lego_file/res/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png",
  "/lego-generated-apps/lego_file/res/2026-01-15/2911a043b524469eb2ed7f0bff0e5341.png",
  "/lego-generated-apps/lego_file/res/2026-01-15/f119f3f3cd7e4e3eb043b646c3e681bd.png",
  "/lego-generated-apps/lego_file/res/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png",
  "/lego-generated-apps/lego_file/res/2026-01-15/2911a043b524469eb2ed7f0bff0e5341.png",
  "/lego-generated-apps/lego_file/res/2026-01-15/f119f3f3cd7e4e3eb043b646c3e681bd.png",
  "/lego-generated-apps/lego_file/res/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png",
  "/lego-generated-apps/lego_file/res/2026-01-15/2911a043b524469eb2ed7f0bff0e5341.png",
  "/lego-generated-apps/lego_file/res/2026-01-15/f119f3f3cd7e4e3eb043b646c3e681bd.png",
  "/lego-generated-apps/lego_file/res/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png",
];
const numColorArr = [
  "#01BBC7", "#00FF70", "#FFC000", "#DA54DC",
  "#01BBC7", "#00FF70", "#FFC000", "#DA54DC",
  "#01BBC7", "#00FF70", "#FFC000", "#DA54DC",
];
const defaultData = [
  {
    "title": "任务总数",
    "icon": "/lego-generated-apps/lego_file/res/2026-01-15/2911a043b524469eb2ed7f0bff0e5341.png",
    "num": 0,
    "numColor": "#01BBC7",
    "total": 0,
    "unit": "个"
  },
  {
    "title": "入河排污口",
    "icon": "/lego-generated-apps/lego_file/res/2026-01-15/f119f3f3cd7e4e3eb043b646c3e681bd.png",
    "num": 0,
    "numColor": "#00FF70",
    "total": 0,
    "unit": "个"
  },
  {
    "title": "农村生活污水",
    "icon": "/lego-generated-apps/lego_file/res/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png",
    "num": 0,
    "numColor": "#FFC000",
    "total": 0,
    "unit": "个"
  },
  {
    "title": "鳗鱼养殖污染",
    "icon": "/lego-generated-apps/lego_file/res/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png",
    "num": 0,
    "numColor": "#DA54DC",
    "total": 0,
    "unit": "个"
  }
];

if (res.data.data && res.data.data.length) {
  state.cardList = res.data.data.map((item, eIndex) => ({
    ...item,
    title: item.PROBLEM_TYPE_NAME || '-',
    code: item.PROBLEM_TYPE_CODE || '-',
    undone: item.STATUS_ZERO || 0, // 未办结
    doing: item.STATUS_ONE || 0, // 办理中
    done: item.STATUS_TWO || 0, // 已办结
    icon: iconArr[eIndex],
    numColor: numColorArr[eIndex],
    unit: '个',
  })) || [];
}

console.log('拼接好的卡片数据', state.cardList)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getCardTotal: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"END_TIME":"state.endTime","START_TIME":"state.startTime","interfaceId":"f1fb1746aa0356ffa1cc94063f171e52","REGION_CODE":"global.REGION_CODE"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"END_TIME":state.endTime,"START_TIME":state.startTime,"interfaceId":"f1fb1746aa0356ffa1cc94063f171e52","REGION_CODE":global.REGION_CODE},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"END_TIME":state.endTime,"START_TIME":state.startTime,"interfaceId":"f1fb1746aa0356ffa1cc94063f171e52","REGION_CODE":global.REGION_CODE});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardTotal'] = res.data;
                
     console.log('体检总数卡片数据', res);

if (res.data.data) {
  state.totalData = {
    DEPT_NUM: res.data?.data?.DEPT_NUM || 0,
    NUM: res.data?.data?.NUM || 0,
    STATUS_ONE: res.data?.data?.STATUS_ONE || 0,
    STATUS_TWO: res.data?.data?.STATUS_TWO || 0,
    STATUS_ZERO: res.data?.data?.STATUS_ZERO || 0,
  };
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
 getToken: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/jnfdsxs/prod-api/token/getToken","method":"post","baseURL":"global.serviceBaseUrl","data":{"username":"shiliang","secret":"TYZQefxMIJAGHgTwXXcgDIJ3NsybeLrWWnHcadm0VSH1j0oDpKa+KNZkfVvQ1LlwEYKkmgwwS2xcrXTTvXMmXg=="}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/jnfdsxs/prod-api/token/getToken","method":"post","baseURL":global.serviceBaseUrl,"data":{"username":"shiliang","secret":"TYZQefxMIJAGHgTwXXcgDIJ3NsybeLrWWnHcadm0VSH1j0oDpKa+KNZkfVvQ1LlwEYKkmgwwS2xcrXTTvXMmXg=="},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-/jnfdsxs/prod-api/token/getToken',  {"username":"shiliang","secret":"TYZQefxMIJAGHgTwXXcgDIJ3NsybeLrWWnHcadm0VSH1j0oDpKa+KNZkfVvQ1LlwEYKkmgwwS2xcrXTTvXMmXg=="});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getToken'] = res.data;
                
     console.log('获取跳转地址的 token', res);

state.newPageToken = res.data?.data?.token || '';
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getChartData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"START_TIME":"state.startTime","REGION_CODE":"global.REGION_CODE","END_TIME":"state.endTime","interfaceId":"068a30dc19a514778620da27614ab3bc"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"START_TIME":state.startTime,"REGION_CODE":global.REGION_CODE,"END_TIME":state.endTime,"interfaceId":"068a30dc19a514778620da27614ab3bc"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"START_TIME":state.startTime,"REGION_CODE":global.REGION_CODE,"END_TIME":state.endTime,"interfaceId":"068a30dc19a514778620da27614ab3bc"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getChartData'] = res.data;
                
     console.log('请求图表数据', res);
if (res.data.head.statusCode === '200' && res.data?.data) {
  const result = res.data.data;
  state.chartOption.series[0].data = result.map((i) => i.NUM || null); // 任务总数
  state.chartOption.series[1].data = result.map((i) => i.STATUS_TWO || null); // 已办结
  state.chartOption.series[2].data = result.map((i) => i.STATUS_ONE || null); // 办理中
  state.chartOption.xAxis.data= result.map((i) => i.deptName || null); // 部门

//   // 定义关系映射
//   const progressMap = {
//     '1': '已完成',
//     '2': '序时任务', 
//     '3': '滞后任务'
//   };
  
//   // 处理数据，添加映射字段
//   state.tableList = res.data.data.map(item => {
//     return {
//       ...item,
//       progress_evaluation_value: progressMap[item.progress_evaluation_code] || '-',
//       operation:'view'
//     };
//   });
// } else {
//   state.tableList = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      console.log('s')
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getTime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCardData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCardTotal', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => ["TYZQefxMIJAGHgTwXXcgDIJ3NsybeLrWWnHcadm0VSH1j0oDpKa+KNZkfVvQ1LlwEYKkmgwwS2xcrXTTvXMmXg=="], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getToken', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-physicalExamCenterPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-physicalExamCenterPop', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tColx0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0.default, componentState.tColx0x1x0?.[state.screenSize]));

 const tTextx0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x0x0.default, componentState.tTextx0x1x0x0?.[state.screenSize]));

 const tDatePickerx0x1x0x1ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x0x1.default, componentState.tDatePickerx0x1x0x1?.[state.screenSize]));

 const tColx0x1x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1.default, componentState.tColx0x1x1?.[state.screenSize]));

 const tComponentx0x1x1x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1x1x0.default, componentState.tComponentx0x1x1x0?.[state.screenSize]));

 const tColx0x1x2ComputedData = computed(() => _.merge({}, componentState.tColx0x1x2.default, componentState.tColx0x1x2?.[state.screenSize]));

 const tComponentx0x1x2x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1x2x0.default, componentState.tComponentx0x1x2x0?.[state.screenSize]));

 const tTextCommonx0x1x2x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x2x1.default, componentState.tTextCommonx0x1x2x1?.[state.screenSize]));

 const tColx0x1x3ComputedData = computed(() => _.merge({}, componentState.tColx0x1x3.default, componentState.tColx0x1x3?.[state.screenSize]));

 const tChartDesignx0x1x3x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x1x3x0.default, componentState.tChartDesignx0x1x3x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

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
tRowx0x1ComputedData,
tColx0x1x0ComputedData,
tTextx0x1x0x0ComputedData,
tDatePickerx0x1x0x1ComputedData,
tColx0x1x1ComputedData,
tComponentx0x1x1x0ComputedData,
tColx0x1x2ComputedData,
tComponentx0x1x2x0ComputedData,
tTextCommonx0x1x2x1ComputedData,
tColx0x1x3ComputedData,
tChartDesignx0x1x3x0ComputedData,
ondateChange1742991197605,
oncomClick1769507629504,
};
},
};