window.superviseIssuesProgress1Component = {
template: 
`<div id="t-l-c-superviseIssuesProgress1" class="t-l-c-superviseIssuesProgress1" >` +
`<t-rect id="t-rect-2e88.9a8a1ed2b" class="superviseIssuesProgress-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-table id="t-table-9237.04d2d0d11" class="superviseIssuesProgress-t-table-0-1"  :height="tTablex0x1ComputedData.height" :stripe="tTablex0x1ComputedData.stripe" :border="tTablex0x1ComputedData.border" :auto-scroll="tTablex0x1ComputedData.autoScroll" :speed="tTablex0x1ComputedData.speed" :columns="tTablex0x1ComputedData.columns" :data="replaceCssVariables(filterData(state.tableList, componentPropBindingMap?.['t-table-9237.04d2d0d11']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x1ComputedData.defaultSort" :c-style="tTablex0x1ComputedData.cStyle" :highlight-current-row="tTablex0x1ComputedData.highlightCurrentRow" @operation-click="onoperationClick1768470558682">` +
`</t-table>` +
`<t-rect id="t-rect-9ee1.ec8130f44" class="superviseIssuesProgress-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-03db.65ad46ad" class="superviseIssuesProgress-t-text-0-3"  :label="replaceCssVariables(filterData(state.dialogTitle, componentPropBindingMap?.['t-text-03db.65ad46ad']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-46ee.be203adb1" class="superviseIssuesProgress-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1742797597302_0_0">` +
`</t-rect>` +
`<t-component id="t-component-5c24.40959d27" class="superviseIssuesProgress-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :loading="tComponentx0x5ComputedData.loading" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName" :page-id="tComponentx0x5ComputedData.pageId" :page-code="tComponentx0x5ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-9a56.d2768158a" class="superviseIssuesProgress-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :loading="tComponentx0x6ComputedData.loading" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName" :page-id="tComponentx0x6ComputedData.pageId" :page-code="tComponentx0x6ComputedData.pageCode">` +
`</t-component>` +
`<t-text-common id="t-text-common-13d9.227b6b3e4" class="superviseIssuesProgress-t-text-common-0-7"  :label="replaceCssVariables(filterData(state.chartTitle, componentPropBindingMap?.['t-text-common-13d9.227b6b3e4']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x7ComputedData.editable" :c-style="tTextCommonx0x7ComputedData.cStyle">` +
`</t-text-common>` +
`<t-chart-design id="t-chart-design-35d3.fdedae695" class="superviseIssuesProgress-t-chart-design-0-8"  :register-map-name="tChartDesignx0x8ComputedData.registerMapName" :geo-json="tChartDesignx0x8ComputedData.geoJson" :empty-img="tChartDesignx0x8ComputedData.emptyImg" :c-style="tChartDesignx0x8ComputedData.cStyle" :options="replaceCssVariables(filterData(state.barOption1, componentPropBindingMap?.['t-chart-design-35d3.fdedae695']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-chart-design>` +
`<t-component id="t-component-a5a9.5d2a80317" class="superviseIssuesProgress-t-component-0-9"  :name="tComponentx0x9ComputedData.name" :loading="tComponentx0x9ComputedData.loading" :c-style="tComponentx0x9ComputedData.cStyle" :src="tComponentx0x9ComputedData.src" :component-name="tComponentx0x9ComputedData.componentName" :page-id="tComponentx0x9ComputedData.pageId" :page-code="tComponentx0x9ComputedData.pageCode">` +
`</t-component>` +
`<t-text-common id="t-text-common-c20c.e8465135c" class="superviseIssuesProgress-t-text-common-0-10"  :label="replaceCssVariables(filterData(state.tableTitle, componentPropBindingMap?.['t-text-common-c20c.e8465135c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x10ComputedData.editable" :c-style="tTextCommonx0x10ComputedData.cStyle">` +
`</t-text-common>` +
`<t-chart-pie-3d id="t-chart-pie-3d-d9db.0bf77c6d" class="superviseIssuesProgress-t-chart-pie-3d-0-11"  :empty-img="tChartPie3dx0x11ComputedData.emptyImg" :c-style="tChartPie3dx0x11ComputedData.cStyle" :data="tChartPie3dx0x11ComputedData.data" :series-setting="tChartPie3dx0x11ComputedData.seriesSetting" :options="tChartPie3dx0x11ComputedData.options" :pie3d="componentState.tChartPie3dx0x11.pie3d">` +
`</t-chart-pie-3d>` +
`<t-chart-design id="t-chart-design-0d0d.18e2cad05" class="superviseIssuesProgress-t-chart-design-0-12"  :register-map-name="tChartDesignx0x12ComputedData.registerMapName" :geo-json="tChartDesignx0x12ComputedData.geoJson" :empty-img="tChartDesignx0x12ComputedData.emptyImg" :c-style="tChartDesignx0x12ComputedData.cStyle" :options="replaceCssVariables(filterData(state.barOption2, componentPropBindingMap?.['t-chart-design-0d0d.18e2cad05']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-chart-design>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-2e88.9a8a1ed2b":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-table-9237.04d2d0d11":{"attributeName":"tTablex0x1","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]},"highlightCurrentRow":{"filters":[]}},"t-rect-9ee1.ec8130f44":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-03db.65ad46ad":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-46ee.be203adb1":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-5c24.40959d27":{"attributeName":"tComponentx0x5","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-9a56.d2768158a":{"attributeName":"tComponentx0x6","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-13d9.227b6b3e4":{"attributeName":"tTextCommonx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-35d3.fdedae695":{"attributeName":"tChartDesignx0x8","registerMapName":{"filters":[]},"geoJson":{"filters":[]},"emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-component-a5a9.5d2a80317":{"attributeName":"tComponentx0x9","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-c20c.e8465135c":{"attributeName":"tTextCommonx0x10","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-pie-3d-d9db.0bf77c6d":{"attributeName":"tChartPie3dx0x11","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"data":{"filters":[]},"seriesSetting":{"filters":[]},"options":{"filters":[]}},"t-chart-design-0d0d.18e2cad05":{"attributeName":"tChartDesignx0x12","registerMapName":{"filters":[]},"geoJson":{"filters":[]},"emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}}};
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
   barOption2: {},
   barOption1: {},
   tableTitle: "第二轮省生态环境保护督察问题详情",
   chartTitle: "第二轮省生态环境保护督察问题问题统计",
   dialogTitle: "第二轮省生态环境保护督察问题进展",
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
tRectx0x0: {
defaultStyle: {
            default: {"width":"1534px","height":"941px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"187px","top":"76px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1534px","height":"941px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"187px","top":"76px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset"}}}, 
 },
},
tTablex0x1: {
defaultStyle: {
            default: {"width":"1457px","height":"300px","backgroundColor":"","position":"unset","left":"229px","top":"685px","animationName":""},
            
            },
 default: { 
 
height:"300px",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"序号","key":"sort_num","align":"center","operationList":[],"stateList":[],"style":{"fontStyle":{"color":"rgba(255, 255, 255, 1)"},"imageStyle":{"backgroundImage":""}},"width":"50px","minWidth":"50PX"},{"label":"责任部门","key":"second_level_index","align":"left","operationList":[],"stateList":[],"style":{"fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"14PX","padding":"0 0 0 16px","paddingLeft":"0px","paddingTop":"","paddingRight":"","paddingBottom":""}},"width":"400px","minWidth":"100PX","headerAlign":"center"},{"label":"发起时间","key":"responsible_unit","align":"left","operationList":[],"stateList":[],"style":{"fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"14PX","padding":"0 0 0 16px","paddingLeft":"0px","paddingTop":"","paddingRight":"","paddingBottom":""}},"width":"200px","minWidth":"100PX","headerAlign":"left"},{"label":"落实情况","key":"implementation_status","align":"left","operationList":[],"stateList":[],"width":"auto","minWidth":"100PX","style":{"fontStyle":{"color":"rgba(255, 255, 255, 1)"}}},{"label":"状态","key":"progress_evaluation_value","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"16PX","fontWeight":"400","color":"rgba(255, 255, 255, 1)"}},"width":"120px","minWidth":"70PX","showOverflowTooltip":true},{"label":"操作","key":"operation","type":"operation","stateKey":"reductionRateState","align":"center","operationList":[{"name":"查看","id":"view","fontStyle":{"color":"#009dff"}}],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"16PX","fontWeight":"400","color":"rgba(255, 255, 255, 1)"}},"width":"120px","minWidth":"70PX","showOverflowTooltip":true}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1457px","height":"300px","backgroundColor":"","position":"unset","left":"229px","top":"685px","animationName":""}},"headerCell":{"default":{"borderBottom":"0px none rgba(20,112,204,0.3)","borderLeft":"0px none rgba(20,112,204,0.3)","borderRight":"0px none rgba(20,112,204,0.3)","borderTop":"0px none rgba(20,112,204,0.3)","color":"var(--business-theme-light)","backgroundColor":"rgba(20, 112, 204, 0.3)","fontSize":"14px","lineHeight":"38px","height":"38px","marginTop":"0px","paddingBottom":"0px","paddingTop":"0px","marginBottom":"0px","paddingLeft":"0px"}},"bodyCell":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.1)","borderBottom":"0px none rgba(24,37,64,1)","borderLeft":"0px none rgba(24,37,64,1)","borderRight":"0px none rgba(24,37,64,1)","borderTop":"0px none rgba(24,37,64,1)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingBottom":"20px","paddingTop":"5px","lineHeight":"40px","fontSize":"14px","fontFamily":"微软雅黑","paddingLeft":"10px","paddingRight":"10px"},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(0, 59, 132, 0.3)"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)"}},"rowWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}}},
highlightCurrentRow:false, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"1535px","height":"47px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"187px","top":"75px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1535px","height":"47px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"187px","top":"75px","animationName":""}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"589px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"20px","fontFamily":"方正综艺","top":"86px","left":"218px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"第二轮省生态环境保护督察问题进展",
editable:false,
cStyle:{"wrapper":{"default":{"width":"589px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"20px","fontFamily":"方正综艺","top":"86px","left":"218px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none var(--business-btn-default)","borderTop":"1px none var(--business-btn-default)","borderRight":"1px none var(--business-btn-default)","borderBottom":"1px none var(--business-btn-default)","position":"unset","left":"1675px","top":"86px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"var(--t-point-pop-close-btn)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none var(--business-btn-default)","borderTop":"1px none var(--business-btn-default)","borderRight":"1px none var(--business-btn-default)","borderBottom":"1px none var(--business-btn-default)","position":"unset","left":"1675px","top":"86px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"var(--t-point-pop-close-btn)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}},"numBox":{"default":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"1475px","height":"70px","margin":"0 auto","position":"unset","left":"220px","top":"180px"},
            
            },
 default: { 
 
name:"statisticsCardListComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"1475px","height":"70px","margin":"0 auto","position":"unset","left":"220px","top":"180px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/statisticsCardList",
componentName:"statisticsCardListComponent",
pageId:"92b7bdb148e644eb9768885b8fd60c8e",
pageCode:"statisticsCardList", 
 },
},
tComponentx0x6: {
defaultStyle: {
            default: {"width":"1476px","height":"33px","margin":"0 auto","position":"unset","left":"203px","top":"131px"},
            
            },
 default: { 
 
name:"dialogTitleComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"1476px","height":"33px","margin":"0 auto","position":"unset","left":"203px","top":"131px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/dialogTitle",
componentName:"dialogTitleComponent",
pageId:"051aca1b22bc4dbeb1baf06b72818d98",
pageCode:"dialogTitle", 
 },
},
tTextCommonx0x7: {
defaultStyle: {
            default: {"width":"624px","height":"19px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"700","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"259px","top":"139px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"第二轮省生态环境保护督察问题问题统计",
editable:false,
cStyle:{"wrapper":{"default":{"width":"624px","height":"19px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"700","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"259px","top":"139px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tChartDesignx0x8: {
defaultStyle: {
            default: {"height":"257px","width":"521px","position":"unset","left":"220px","top":"187px"},
            
            },
 default: { 
 
registerMapName:"",
geoJson:{},
emptyImg:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"257px","width":"521px","position":"unset","left":"220px","top":"187px"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tComponentx0x9: {
defaultStyle: {
            default: {"width":"1476px","height":"33px","margin":"0 auto","position":"unset","left":"221px","top":"645px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"1476px","height":"33px","margin":"0 auto","position":"unset","left":"221px","top":"645px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/dialogTitle",
componentName:"dialogTitleComponent",
pageId:"051aca1b22bc4dbeb1baf06b72818d98",
pageCode:"dialogTitle", 
 },
},
tTextCommonx0x10: {
defaultStyle: {
            default: {"width":"654px","height":"19px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"700","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"277px","top":"653px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"第二轮省生态环境保护督察问题详情",
editable:false,
cStyle:{"wrapper":{"default":{"width":"654px","height":"19px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"700","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"277px","top":"653px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tChartPie3dx0x11: {
defaultStyle: {
            default: {"height":"807px","width":"967px","position":"unset","left":"106px","top":"-815px"},
            
            },
pie3d: computed(() => activeChartTheme.value?.pie3d),
 default: { 
 
emptyImg:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"807px","width":"967px","position":"unset","left":"106px","top":"-815px"}}},
data:[{"name":"苹果","revenue":30,"depth":2},{"name":"香蕉","revenue":6.2,"depth":25},{"name":"橘子","revenue":26.8,"depth":25},{"name":"梨","revenue":0.7,"depth":30},{"name":"猕猴桃","revenue":12.8,"depth":25}],
seriesSetting:{"name":"单价","data":[{"nameKey":"name","valueKey":"revenue","depthKey":"depth","style":{}}],"labelStyle":{"plotOptions":{"pie":{"dataLabels":{"enabled":false}}}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"plotOptions":{"pie":{"innerSize":"250PX","showInLegend":true}},"chart":{"options3d":{"beta":0}},"title":{"show":false},"tooltip":{"enabled":true},"grid":{"left":"0%","right":"0%","top":"0%","bottom":"0%","containLabel":true}})), 
 },
},
tChartDesignx0x12: {
defaultStyle: {
            default: {"height":"257px","width":"521px","position":"unset","left":"904px","top":"190px","animationName":""},
            
            },
 default: { 
 
registerMapName:"",
geoJson:{},
emptyImg:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"257px","width":"521px","position":"unset","left":"904px","top":"190px","animationName":""}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
});
const initData = () => {
const { type } = global.dialogParams

switch(type){
  // 中央三轮
  case 'centerThird':
    state.dialogTitle = '第三轮中央生态环境保护督察问题进展';
    state.chartTitle = '第三轮中央生态环境保护督察问题问题统计';
    state.tableTitle = '第三轮中央生态环境保护督察问题详情';
    break;
  // 省二轮
  case 'provinceSecond':
    state.dialogTitle = '第二轮省生态环境保护督察问题进展';
    state.chartTitle = '第二轮省生态环境保护督察问题问题统计';
    state.tableTitle = '第二轮省生态环境保护督察问题详情';
    break;
  default:
    break;
}



provide('cardListData',state.cardList)

state.legend = (params)=>{
  console.log(params)
}
};
const closePop = () => {
global.dialogName = ''
global.dialogParams = {}
};
const initChartOptions = () => {
state.chartOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' }
            },
            legend: {
                top: 10,
                data: ['任务总数', '已完成'],
                textStyle: {
                    color: '#DEFDFF'
                }
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '6%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: [
                    '市节能办',
                    '市生态环境局',
                    '市财政局',
                    '市农业农村局',
                    '市城市管理局',
                    '林业局'
                ],
                axisLine: {
                    lineStyle: { color: 'rgba(255,255,255,.3)' }
                },
                axisLabel: {
                    color: '#DEFDFF',
                    fontSize: 12,
                    fontWeight: '700',
                    fontFamily: '方正综艺'
                },
                axisTick: { show: false }
            },
            yAxis: {
                type: 'value',
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
                    barWidth: 14,
                    data: [88, 88, 88, 88, 88, 88],
                    itemStyle: {
                        borderColor: 'rgb(108,255,250)',
                        borderWidth: 1,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'rgba(108,255,250,0.95)' },
                            { offset: 1, color: 'rgba(108,255,250,0.25)' }
                        ])
                    }
                },
                {
                    name: '已完成',
                    type: 'bar',
                    barWidth: 14,
                    data: [18, 18, 18, 18, 18, 18],
                    itemStyle: {
                        borderColor: 'rgb(250,200,88)',
                        borderWidth: 1,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'rgba(250,200,88,0.9)' },
                            { offset: 1, color: 'rgba(250,200,88,0.25)' }
                        ])
                    }
                }
            ]
        }
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
const initBarOption1 = () => {
// === 配色（参考图片）===
const COLORS = {
  blue: "#7DBBFF",
  green: "#7CDEA4",
  cyan: "#6CFFFA",
  green2: "#6FD38A",
  orange: "#FF9F6A",
  blue2: "#5C8CFF",
  yellow: "#FFD666",
};
state.barOption1 = {
  title: {
    text: "总体进展",
    left: 0,
    top: 0,
    textStyle: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold",
      fontFamily: '方正综艺'
    },
  },
  tooltip: {
    trigger: "item",
    formatter: "{b}<br/>数值：{c} 项",
  },
  legend: {
    orient: "vertical",
    right: 0,
    top: "middle",
    itemGap: 16,
    formatter: (name) => {
      const item = [
        { name: "已完成整改", value: 15, itemStyle: { color: COLORS.blue } },
        {
          name: "按序时进度推进",
          value: 3,
          itemStyle: { color: COLORS.green },
        },
      ].find((d) => d.name === name);
      return `{label|${name}}  {num|${item.value}}{unit|项}`;
    },
    textStyle: {
      rich: {
        label: {
          color: "#DEFDFF",
          fontSize: 12,
          width: 140,
        },
        num: {
          color: "var(--business-theme-light)",
          fontSize: 14,
          fontWeight: "bold",
        },
        unit: {
          color: "#DEFDFF",
          fontSize: 12,
        },
      },
    },
  },
  series: [
    {
      type: "pie",
      radius: ["55%", "70%"],
      center: ["25%", "50%"],
      startAngle: 90,
      label: { show: false },
      labelLine: { show: false },
      itemStyle: {
        borderWidth: 0,
      },
      data: [
        { name: "已完成整改", value: 15, itemStyle: { color: COLORS.blue } },
        {
          name: "按序时进度推进",
          value: 3,
          itemStyle: { color: COLORS.green },
        },
      ],
    },
  ],
};

};
const initBarOption2 = () => {
// === 配色（参考图片）===
const COLORS = {
  blue: "#7DBBFF",
  green: "#7CDEA4",
  cyan: "#6CFFFA",
  green2: "#6FD38A",
  orange: "#FF9F6A",
  blue2: "#5C8CFF",
  yellow: "#FFD666",
};
state.barOption2 = {
  title: {
    text: "整改时限",
    left: 0,
    top: 0,
    textStyle: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold",
      fontFamily: '方正综艺'
    },
  },
  tooltip: {
    trigger: "item",
    formatter: "{b}<br/>数值：{c} 项",
  },
  legend: {
    orient: "vertical",
    right: 0,
    top: "middle",
    itemGap: 16,
    formatter: (name) => {
      const item = [
            { name: '2024年底前，并长期坚持', value: 50.88, itemStyle: { color: COLORS.cyan } },
            { name: '2025年底前，并长期坚持', value: 50.8, itemStyle: { color: COLORS.green2 } },
            { name: '2026年底前', value: 88.88, itemStyle: { color: COLORS.orange } },
            { name: '立行立改，长期坚持', value: 50.8, itemStyle: { color: COLORS.blue2 } },
            { name: '2025年底前', value: 10, itemStyle: { color: COLORS.yellow } }
        ].find((d) => d.name === name);
      return `{label|${name}}  {num|${item.value}}{unit|%}`;
    },
    textStyle: {
      rich: {
        label: {
          color: "#DEFDFF",
          fontSize: 12,
          width: 140,
        },
        num: {
          color: "var(--business-theme-light)",
          fontSize: 14,
          fontWeight: "bold",
        },
        unit: {
          color: "#DEFDFF",
          fontSize: 12,
        },
      },
    },
  },
  series: [
    {
      type: "pie",
      radius: ["55%", "70%"],
      center: ["25%", "50%"],
      startAngle: 90,
      label: { show: false },
      labelLine: { show: false },
      itemStyle: {
        borderWidth: 0,
      },
      data: [
            { name: '2024年底前，并长期坚持', value: 50.88, itemStyle: { color: COLORS.cyan } },
            { name: '2025年底前，并长期坚持', value: 50.8, itemStyle: { color: COLORS.green2 } },
            { name: '2026年底前', value: 88.88, itemStyle: { color: COLORS.orange } },
            { name: '立行立改，长期坚持', value: 50.8, itemStyle: { color: COLORS.blue2 } },
            { name: '2025年底前', value: 10, itemStyle: { color: COLORS.yellow } }
        ],
    },
  ],
};

};
const onoperationClick1768470558682 = (row,operationId) => {
// 执行自定义方法
handleTableClick(operationId,row);
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
 getCockpitDialogContentList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"PROGRESS":"global.dashboardGlobalVariables.responsibilitySelectedStatus","YEAR":"state.selectYear","interfaceId":"be26dedf23f367bc639533d6bc8fc4d6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"PROGRESS":global.dashboardGlobalVariables.responsibilitySelectedStatus,"YEAR":state.selectYear,"interfaceId":"be26dedf23f367bc639533d6bc8fc4d6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"PROGRESS":global.dashboardGlobalVariables.responsibilitySelectedStatus,"YEAR":state.selectYear,"interfaceId":"be26dedf23f367bc639533d6bc8fc4d6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCockpitDialogContentList'] = res.data;
                
     if (res.data.head.statusCode === '200' && res.data?.data) {
  // 定义关系映射
  const progressMap = {
    '1': '已完成',
    '2': '序时任务', 
    '3': '滞后任务'
  };
  
  // 处理数据，添加映射字段
  state.tableList = res.data.data.map(item => {
    return {
      ...item,
      progress_evaluation_value: progressMap[item.progress_evaluation_code] || '-',
      operation:'view'
    };
  });
} else {
  state.tableList = [];
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
watch(() => [global.dashboardGlobalVariables.responsibilitySelectedStatus,state.selectYear], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCockpitDialogContentList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-superviseIssuesProgress1', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 事件交互-请求调用接口
apiRegistry.getCockpitDialogContentList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-superviseIssuesProgress1', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initChartOptions();
// 执行自定义方法
initBarOption1();
// 执行自定义方法
initBarOption2();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTablex0x1ComputedData = computed(() => _.merge({}, componentState.tTablex0x1.default, componentState.tTablex0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

 const tTextCommonx0x7ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x7.default, componentState.tTextCommonx0x7?.[state.screenSize]));

 const tChartDesignx0x8ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x8.default, componentState.tChartDesignx0x8?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tComponentx0x9ComputedData = computed(() => _.merge({}, componentState.tComponentx0x9.default, componentState.tComponentx0x9?.[state.screenSize]));

 const tTextCommonx0x10ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x10.default, componentState.tTextCommonx0x10?.[state.screenSize]));

 const tChartPie3dx0x11ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartPie3dx0x11.default, componentState.tChartPie3dx0x11?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tChartDesignx0x12ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x12.default, componentState.tChartDesignx0x12?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

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
tTablex0x1ComputedData,
tRectx0x2ComputedData,
tTextx0x3ComputedData,
tRectx0x4ComputedData,
tComponentx0x5ComputedData,
tComponentx0x6ComputedData,
tTextCommonx0x7ComputedData,
tChartDesignx0x8ComputedData,
tComponentx0x9ComputedData,
tTextCommonx0x10ComputedData,
tChartPie3dx0x11ComputedData,
tChartDesignx0x12ComputedData,
onoperationClick1768470558682,
onclick1742797597302_0_0,
};
},
};
