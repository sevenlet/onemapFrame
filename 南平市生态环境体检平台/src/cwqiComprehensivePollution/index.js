window.cwqiComprehensivePollutionComponent = {
template: 
`<div id="t-l-c-cwqiComprehensivePollution" class="t-l-c-cwqiComprehensivePollution" >` +
`<t-component id="t-component-a4b4.7625ba7a4" class="cwqiComprehensivePollution-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode">` +
`</t-component>` +
`<t-text-common id="t-text-common-a60e.1f345df9a" class="cwqiComprehensivePollution-t-text-common-0-1"  :label="tTextCommonx0x1ComputedData.label" :editable="tTextCommonx0x1ComputedData.editable" :c-style="tTextCommonx0x1ComputedData.cStyle">` +
`</t-text-common>` +
`<t-row id="t-row-484c.8e4518314" class="cwqiComprehensivePollution-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align">` +
`<t-col id="t-col-3f65.aabde4483" class="cwqiComprehensivePollution-t-col-0-2-0"  :span="tColx0x2x0ComputedData.span" :offset="tColx0x2x0ComputedData.offset" :push="tColx0x2x0ComputedData.push" :pull="tColx0x2x0ComputedData.pull" :c-style="tColx0x2x0ComputedData.cStyle">` +
`<t-chart-bar-simple id="t-chart-bar-simple-171e.9bc629894" class="cwqiComprehensivePollution-t-chart-bar-simple-0-2-0-0"  :empty-img="tChartBarSimplex0x2x0x0ComputedData.emptyImg" :c-style="tChartBarSimplex0x2x0x0ComputedData.cStyle" :options="tChartBarSimplex0x2x0x0ComputedData.options" :data="replaceCssVariables(filterData(state.list, componentPropBindingMap?.['t-chart-bar-simple-171e.9bc629894']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :series-setting="tChartBarSimplex0x2x0x0ComputedData.seriesSetting" :main-axis="tChartBarSimplex0x2x0x0ComputedData.mainAxis" :bar="componentState.tChartBarSimplex0x2x0x0.bar">` +
`</t-chart-bar-simple>` +
`</t-col>` +
`<t-col id="t-col-f391.524caa70a" class="cwqiComprehensivePollution-t-col-0-2-1"  :span="tColx0x2x1ComputedData.span" :offset="tColx0x2x1ComputedData.offset" :push="tColx0x2x1ComputedData.push" :pull="tColx0x2x1ComputedData.pull" :c-style="tColx0x2x1ComputedData.cStyle">` +
`<t-table v-if="state.isShowList === true" id="t-table-896d.f0d26022e" class="cwqiComprehensivePollution-t-table-0-2-1-0"  :height="tTablex0x2x1x0ComputedData.height" :stripe="tTablex0x2x1x0ComputedData.stripe" :border="tTablex0x2x1x0ComputedData.border" :auto-scroll="tTablex0x2x1x0ComputedData.autoScroll" :speed="tTablex0x2x1x0ComputedData.speed" :columns="tTablex0x2x1x0ComputedData.columns" :data="replaceCssVariables(filterData(state.list, componentPropBindingMap?.['t-table-896d.f0d26022e']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x2x1x0ComputedData.defaultSort" :c-style="tTablex0x2x1x0ComputedData.cStyle">` +
`</t-table>` +
`<t-pagination-base id="t-pagination-base-96eb.3c54cf0e6" class="cwqiComprehensivePollution-t-pagination-base-0-2-1-1"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-96eb.3c54cf0e6']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x2x1x1ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-96eb.3c54cf0e6']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x2x1x1ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-96eb.3c54cf0e6']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x2x1x1ComputedData.layout" :page-sizes="tPaginationBasex0x2x1x1ComputedData.pageSizes" :disabled="tPaginationBasex0x2x1x1ComputedData.disabled" :c-style="tPaginationBasex0x2x1x1ComputedData.cStyle" @size-change="onsizeChange1765955291451_0_0" @current-change="oncurrentChange1765955291451_0_1">` +
`</t-pagination-base>` +
`</t-col>` +
`</t-row>` +
`<t-text id="t-text-6583.da38b228" class="cwqiComprehensivePollution-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-4e12.f91e4a6b" class="cwqiComprehensivePollution-t-text-0-4"  :label="replaceCssVariables(filterData(state.monitorTime, componentPropBindingMap?.['t-text-4e12.f91e4a6b']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-a4b4.7625ba7a4":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-a60e.1f345df9a":{"attributeName":"tTextCommonx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-484c.8e4518314":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-3f65.aabde4483":{"attributeName":"tColx0x2x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-bar-simple-171e.9bc629894":{"attributeName":"tChartBarSimplex0x2x0x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]},"data":{"filters":[]},"seriesSetting":{"filters":[]},"mainAxis":{"filters":[]}},"t-col-f391.524caa70a":{"attributeName":"tColx0x2x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-table-896d.f0d26022e":{"attributeName":"tTablex0x2x1x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-pagination-base-96eb.3c54cf0e6":{"attributeName":"tPaginationBasex0x2x1x1","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6583.da38b228":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-4e12.f91e4a6b":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   treemapLabelFontSize: 14,
   isShowList: false,
   list: [],
   pointCode: "",
   assessType: "",
   monitorTime: "",
   pageInfo: {"pageNum":1,"pageSize":10,"total":0,"pages":0},
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
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"-12px","top":"1px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgFitContentComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"-12px","top":"1px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgFitContent",
componentName:"dialogTitleFirstBgFitContentComponent",
pageId:"4a771aa2e57b4c9c9941c4c366f732b1",
pageCode:"dialogTitleFirstBgFitContent", 
 },
},
tTextCommonx0x1: {
defaultStyle: {
            default: {"width":"52px","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-12)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"15px","top":"39px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"CWQI",
editable:false,
cStyle:{"wrapper":{"default":{"width":"52px","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-12)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"15px","top":"39px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"flex-start","alignItems":"center","position":"unset","left":"1px","top":"17px","align-content":"flex-start"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"flex-start","alignItems":"center","position":"unset","left":"1px","top":"17px","align-content":"flex-start"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x2x0: {
defaultStyle: {
            default: {"width":"100px","height":"300px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tChartBarSimplex0x2x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","position":"unset","left":"-318px","top":"114px","animationName":"","color":"var(--business-white)","max-height":"250px","marginTop":"0","marginBottom":"0"},
            
            },
bar: computed(() => activeChartTheme.value?.bar),
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","position":"unset","left":"-318px","top":"114px","animationName":"","color":"var(--business-white)","max-height":"250px","marginTop":"0","marginBottom":"0"}},"emptyImg":{"default":{"display":"none"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true,"top":"15%"},"legend":{"textStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":13},"itemWidth":10,"itemHeight":10,"icon":"rect","padding":[3,5,5,5],"top":"top","orient":"horizontal","show":false},"tooltip":{"backgroundColor":"rgba(0, 0, 0, 0.8)","borderColor":"rgba(255, 255, 255, 0.5)","textStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":state.treemapLabelFontSize}},"xAxis":{"axisLabel":{"color":"var(--skin-font-color-80)","fontSize":state.treemapLabelFontSize,"rotate":45},"axisLine":{"lineStyle":{"type":"solid","color":"var(--skin-font-color-40)"}},"axisTick":{"show":true,"lineStyle":{"color":"var(--skin-font-color-40)"}},"nameTextStyle":{"color":"rgba(255, 255, 255, 0.7)","fontSize":state.treemapLabelFontSize}},"yAxis":{"axisLabel":{"color":"var(--skin-font-color-80)","fontSize":state.treemapLabelFontSize},"axisLine":{"lineStyle":{"type":"solid","color":"rgba(255, 255, 255, 0.4)"}},"name":"","nameTextStyle":{"color":"var(--skin-font-color-60)","align":"right","padding":[0,0,0,0],"fontSize":0},"splitLine":{"lineStyle":{"type":"dashed","color":"var(--skin-font-color-20)"}}},"color":["rgb(88,158,247)","#00FF22","#FFC000","#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"]})),
data:[],
seriesSetting:{"xAxisLabel":"MONITORTIME","data":[{"name":"CWQI","dataKey":"CWQI","style":{"barWidth":12}}]},
mainAxis:"x", 
 },
},
tColx0x2x1: {
defaultStyle: {
            default: {"width":"100px","height":"65%","display":"flex","justifyContent":"center","alignItems":"center","flexDirection":"column"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"65%","display":"flex","justifyContent":"center","alignItems":"center","flexDirection":"column"}}}, 
 },
},
tTablex0x2x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"490px",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"月份","type":"default","key":"MONITORTIME","stateKey":"isCheck","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"24PX","height":"24PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-03-07/454b453f41b84c6097492361373088bd.png)","backgroundImage":"var(--business-checkbox-checked)","backgroundSize":"100% 100%","cursor":"pointer","transform":"translate(11px, 3px)","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":"","cursor":"pointer"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"var(--business-checkbox)","backgroundSize":"100%","cursor":"pointer","transform":"translate(11px, 3px)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"CWOI","type":"default","key":"CWQI","stateKey":"canPosition","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"default"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"var(--business-position)"},"cellStyle":{"background":"rgba(0, 0, 0, 0)"}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"环比变化（%）","type":"state","key":"cwqi_mom_rate","stateKey":"cwqi_mom_rateStatus","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","display":"block","color":"#fff"}},"infoPosition":"left","stateList":[{"name":"default","fontStyle":{"color":"var(--business-white)"}},{"name":"red","fontStyle":{"color":"var(--t-error7)"}},{"name":"green","fontStyle":{"color":"var(--t-success6)"}}]},{"label":"同比变化（%）","type":"state","key":"cwqi_yoy_rate","stateKey":"cwqi_yoy_rateStatus","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"#fff"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"stateList":[{"name":"default","fontStyle":{"color":"var(--business-white)"}},{"name":"red","fontStyle":{"color":"var(--t-error7)"}},{"name":"green","fontStyle":{"color":"var(--t-success6)"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tPaginationBasex0x2x1x1: {
defaultStyle: {
            default: {"width":"100%","height":"40px","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end","animationName":"","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:5,
pagerCount:5,
currentPage:1,
layout:" prev, pager, next,total,sizes,jumper",
pageSizes:[5,10,20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"40px","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end","animationName":"","fontSize":"var(--business-text-size-14)"}},"total":{"default":{"color":"var(--business-text-avianize)","position":"absolute","right":"0px","left":"0px","width":"490px","fontSize":"var(--business-text-size-14)"}},"pagerItem":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","cursor":"pointer","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"1px none rgba(255,13,0,1)","borderTop":"1px none rgba(255,13,0,1)","borderRight":"1px none rgba(255,13,0,1)","borderBottom":"1px none rgba(255,13,0,1)","pointerEvents":"auto","overflow":"visible","cursor":"pointer","fontSize":"var(--business-text-size-14)"},"active":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","fontSize":"var(--business-text-size-14)"}},"pager":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","fontSize":"var(--business-text-size-12)"}},"more":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"fontSize":"var(--business-text-size-12)"}},"sizesWrapper":{"default":{"fontSize":"var(--business-text-size-14)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}},"sizesInput":{"default":{"fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"sizesDropdownWrapper":{"default":{"fontSize":"var(--business-text-size-14)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-dialog-bg)"}},"sizesDropdownItem":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","backgroundColor":"rgba(26, 27, 31, 0)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"}},"jumpWrapper":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"jumpInput":{"default":{"fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"auto","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"absolute","left":"40px","top":"1px","z-index":2,"fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"28px","min-width":"130px"},
            
            },
 default: { 
 
label:"水质监测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"absolute","left":"40px","top":"1px","z-index":2,"fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"28px","min-width":"130px"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"164px","height":"28px","color":"rgba(255, 255, 255, 0.9)","top":"1px","right":"30px","left":"unset","textAlign":"right","fontSize":"var(--business-text-size-14)","position":"absolute","animationName":"","lineHeight":"28px","z-index":1},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"28px","color":"rgba(255, 255, 255, 0.9)","top":"1px","right":"30px","left":"unset","textAlign":"right","fontSize":"var(--business-text-size-14)","position":"absolute","animationName":"","lineHeight":"28px","z-index":1}}}, 
 },
},
});
const initPage = () => {
// 获取主题字号
state.treemapLabelFontSize = parseInt(getCssVariable('--business-text-size-14')) || 14


// 处理参数
state.monitorTime = global.businessDialog.dialogParmas.monitorTime || '2025-10';
state.assessType = global.businessDialog.dialogParmas.assessType || 'monthly';
state.pointCode = global.businessDialog.dialogParmas.pointCode || '3507000001';

apiRegistry.getList.request();

// 接收消息
rootData.rootOn('rootSocket:change', (data) =>{
    if (data.type === 'changeFontSize') {
      state.treemapLabelFontSize = parseInt(getCssVariable('--business-text-size-14')) || 14;
    }
});


};
const onsizeChange1765955291451_0_0 = (pageSize) => {
// 设置变量值
state.pageInfo.pageSize = pageSize;
};
const oncurrentChange1765955291451_0_1 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"pageNum\":\"state.pageInfo.pageNum\",\"pageSize\":\"state.pageInfo.pageSize\",\"POINT_CODE\":\"state.pointCode\",\"START_TIME\":\"2025-01\",\"END_TIME\":\"state.monitorTime\",\"WSYSTEMTYPE\":\"\",\"REGION_PATH\":\"global.regionaQuery.regionCode\",\"interfaceId\":\"ae91c78058d05e8d9bac4e5bb92c04c4\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize,"POINT_CODE":state.pointCode,"START_TIME":"2025-01","END_TIME":state.monitorTime,"WSYSTEMTYPE":"","REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"ae91c78058d05e8d9bac4e5bb92c04c4"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"pageNum\":\state.pageInfo.pageNum\,\"pageSize\":\state.pageInfo.pageSize\,\"POINT_CODE\":\state.pointCode\,\"START_TIME\":\"2025-01\",\"END_TIME\":\state.monitorTime\,\"WSYSTEMTYPE\":\"\",\"REGION_PATH\":\global.regionaQuery.regionCode\,\"interfaceId\":\"ae91c78058d05e8d9bac4e5bb92c04c4\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getList'] = res.data;
                
     const { data, head } = res.data;
state.list = [];
if (head.statusCode === '200' && Array.isArray(data)) {
   const pageInfo = res.data.head.pageInfo;
   state.pageInfo.total = Number(pageInfo.total) || 0;
  state.list = data.map((val) => {
    let cwqi_yoy_rateStatus = 'red'; // 状态
    let cwqi_mom_rateStatus = 'red'; // 状态

    if (val.cwqi_yoy_rate.indexOf('-') > -1) {
      cwqi_yoy_rateStatus = 'green';
    } else if (val.cwqi_yoy_rate === '0') {
      cwqi_yoy_rateStatus = 'default';
    } else {
      val.cwqi_yoy_rate = handleNoVal(val.cwqi_yoy_rate) === '-' ? '-' : `+${val.cwqi_yoy_rate}`;
    }

    if (val.cwqi_mom_rate.indexOf('-') > -1) {
      cwqi_mom_rateStatus = 'green';
    } else if (val.cwqi_mom_rate === '0') {
      cwqi_mom_rateStatus = 'default';
    } else {
      val.cwqi_mom_rate = handleNoVal(val.cwqi_mom_rate) === '-' ? '-' : `+${val.cwqi_mom_rate}`;
    }
    return {
      MONITORTIME: handleNoVal(val.MONITORTIME),
      CWQI: handleNoVal(val.CWQI),
      cwqi_yoy_rate: handleNoVal(val.cwqi_yoy_rate),
      cwqi_mom_rate: handleNoVal(val.cwqi_mom_rate),
      cwqi_yoy_rateStatus,
      cwqi_mom_rateStatus,
    }
  });

  // console.log(state.list, 6667)
}
state.isShowList = true;

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.list = [];
state.isShowList = true;

      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [state.pageInfo.pageNum,state.pageInfo.pageSize], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-cwqiComprehensivePollution', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-cwqiComprehensivePollution', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextCommonx0x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1.default, componentState.tTextCommonx0x1?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tColx0x2x0ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0.default, componentState.tColx0x2x0?.[state.screenSize]));

 const tChartBarSimplex0x2x0x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartBarSimplex0x2x0x0.default, componentState.tChartBarSimplex0x2x0x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tColx0x2x1ComputedData = computed(() => _.merge({}, componentState.tColx0x2x1.default, componentState.tColx0x2x1?.[state.screenSize]));

 const tTablex0x2x1x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x2x1x0.default, componentState.tTablex0x2x1x0?.[state.screenSize]));

 const tPaginationBasex0x2x1x1ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x2x1x1.default, componentState.tPaginationBasex0x2x1x1?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

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
tTextCommonx0x1ComputedData,
tRowx0x2ComputedData,
tColx0x2x0ComputedData,
tChartBarSimplex0x2x0x0ComputedData,
tColx0x2x1ComputedData,
tTablex0x2x1x0ComputedData,
tPaginationBasex0x2x1x1ComputedData,
tTextx0x3ComputedData,
tTextx0x4ComputedData,
onsizeChange1765955291451_0_0,
oncurrentChange1765955291451_0_1,
};
},
};