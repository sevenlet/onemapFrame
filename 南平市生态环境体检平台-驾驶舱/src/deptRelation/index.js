window.deptRelationComponent = {
template: 
`<div id="t-l-c-deptRelation" class="t-l-c-deptRelation" >` +
`<t-rect id="t-rect-3c13.6e224e776" class="deptRelation-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-1410.863eda6a7" class="deptRelation-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-79b1.520eb885e" class="deptRelation-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-39ea.51f8eb66d" class="deptRelation-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @mouseout="onmouseout1739345365135" @click="onclick1740017904182">` +
`</t-rect>` +
`<t-rect id="t-rect-5094.9a9212dbc" class="deptRelation-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @mouseover="onmouseover1739345261051">` +
`</t-rect>` +
`<t-table id="t-table-dfde.5586f34ad" class="deptRelation-t-table-0-5"  :height="tTablex0x5ComputedData.height" :stripe="tTablex0x5ComputedData.stripe" :border="tTablex0x5ComputedData.border" :auto-scroll="tTablex0x5ComputedData.autoScroll" :speed="tTablex0x5ComputedData.speed" :columns="tTablex0x5ComputedData.columns" :data="replaceCssVariables(state.tableData, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x5ComputedData.defaultSort" :c-style="tTablex0x5ComputedData.cStyle" :highlight-current-row="tTablex0x5ComputedData.highlightCurrentRow">` +
`</t-table>` +
`<t-text id="t-text-0849.df06c90a6" class="deptRelation-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`<t-pagination-base id="t-pagination-base-04fb.abb1d23f3" class="deptRelation-t-pagination-base-0-8"  :total="replaceCssVariables(state.pageInfo.total, global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x8ComputedData.small" :page-size="replaceCssVariables(state.pageInfo.pageSize, global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x8ComputedData.pagerCount" :current-page="replaceCssVariables(state.pageInfo.pageNum, global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x8ComputedData.layout" :page-sizes="tPaginationBasex0x8ComputedData.pageSizes" :disabled="tPaginationBasex0x8ComputedData.disabled" :c-style="tPaginationBasex0x8ComputedData.cStyle" @size-change="onsizeChange1740045016433" @current-change="oncurrentChange1740045041766">` +
`</t-pagination-base>` +
`<t-rect v-if="state.isChar === false" id="t-rect-e5b3.d6eee570c" class="deptRelation-t-rect-0-12"  :tip="tRectx0x12ComputedData.tip" :label="replaceCssVariables(state.isLoading, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x12ComputedData.active" :c-style="tRectx0x12ComputedData.cStyle">` +
`</t-rect>` +
`<t-chart-sankey id="t-chart-sankey-f5b2.8ead6e63b" class="deptRelation-t-chart-sankey-0-13"  :empty-img="tChartSankeyx0x13ComputedData.emptyImg" :c-style="tChartSankeyx0x13ComputedData.cStyle" :options="tChartSankeyx0x13ComputedData.options" :links-data="tChartSankeyx0x13ComputedData.linksData" :nodes-data="tChartSankeyx0x13ComputedData.nodesData" :series-setting="tChartSankeyx0x13ComputedData.seriesSetting">` +
`</t-chart-sankey>` +
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
   sectionData: [],
   isClose: false,
   charOption: "",
   STARTEND_TIME_ARR: [],
   TIME_TYPE_CHOOSE: "datetimerangeminute",
   timeSelect: [],
   pageInfo: {"pageNum":1,"pageSize":5,"total":0,"pages":""},
   START_TIME: "",
   END_TIME: "",
   xData: [],
   callsData: [],
   provideData: [],
   isChar: false,
   isLoading: "加载中...",
   tableData: [],
   DEPT_CODE: "",
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
            default: {"width":"1680px","height":"915px","position":"unset","left":"120px","top":"83px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1680px","height":"915px","position":"unset","left":"120px","top":"83px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1632px","height":"708px","backgroundColor":"var(--t-zbzs-bg)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"144px","top":"266px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1632px","height":"708px","backgroundColor":"var(--t-zbzs-bg)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"144px","top":"266px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"1632px","height":"64px","position":"unset","left":"143px","top":"177px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"var(--t-full-service-dia-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1632px","height":"64px","position":"unset","left":"143px","top":"177px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"var(--t-full-service-dia-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"83px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"83px","animationName":"","cursor":"pointer"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-mr)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"83px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-mr)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"83px","cursor":"pointer"}}}, 
 },
},
tTablex0x5: {
defaultStyle: {
            default: {"width":"1592px","height":"252px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"},
            
            },
 default: { 
 
height:"252",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"部门名称","type":"default","key":"DEPT_NAME","stateKey":"","width":"360PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"调用部门名称","type":"default","key":"NAME","stateKey":"","width":"360PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"接口数（个）","type":"default","key":"INTERFACE_NUM","stateKey":"","width":"263PX","minWidth":"","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"调用次数","type":"default","key":"SERVICE_NUM","stateKey":"","width":"263PX","minWidth":"","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1592px","height":"252px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"}},"headerCell":{"default":{"borderBottom":"2px none rgba(26,27,31,1)","borderLeft":"1px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","width":"418px","height":"28px","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"7px","paddingRight":"0px"}},"bodyCell":{"default":{"backgroundColor":"","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","height":"32px","paddingTop":"7px","paddingBottom":"7px","fontSize":"16px","paddingLeft":"7px","paddingRight":"0px","lineHeight":"24px"},"hover":{"backgroundColor":"rgba(48, 72, 173, 0)","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","lineHeight":"24px","height":"32px"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(218, 24, 24, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"headerRowWrapper":{"default":{"backgroundColor":"rgba(223, 44, 44, 0)","paddingLeft":"0px","paddingRight":"0px","paddingTop":"0px","backgroundImage":"var(--t-full-service-dia-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"28px"}},"rowWrapper":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","height":"32px","backgroundColor":"var(--table-bm-color)"},"hover":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"","height":"32px","box-shadow":"rgba(0, 255, 246, 1) 0px 0px 0px 1px inset"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(59, 182, 151, 0)","backgroundImage":"unset !important","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none "},"hover":{"borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"bodyCellInner":{"default":{"height":"20px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"highlightRow":{"default":{"height":"auto"}}},
highlightCurrentRow:false, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"108px","left":"198px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"},
            
            },
 default: { 
 
label:"部门间调用关系",
editable:false,
cStyle:{"wrapper":{"default":{"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"108px","left":"198px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"}}}, 
 },
},
tPaginationBasex0x8: {
defaultStyle: {
            default: {"width":"1592px","height":"38px","position":"unset","left":"164px","top":"900px","color":"","animationName":"","display":"flex","justifyContent":"space-between","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:5,
pagerCount:5,
currentPage:1,
layout:" total,sizes,prev, pager, next,jumper",
pageSizes:[5,10,20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"1592px","height":"38px","position":"unset","left":"164px","top":"900px","color":"","animationName":"","display":"flex","justifyContent":"space-between","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"pagerItem":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","lineHeight":"32px","borderLeft":"1px none #366B92","borderTop":"1px none #366B92","borderRight":"1px none #366B92","borderBottom":"1px none #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":"var(--business-select-item-bg)"},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"var(--t-button-bg)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"var(--t-color-text-green)","marginLeft":"0px","marginRight":"0px","backgroundColor":"var(--business-select-drop-bg)"},"hover":{"color":"#FFFFFF","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"more":{"default":{"color":"var(--t-color-text-green)"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"var(--t-color-text-green)","paddingRight":"30px","paddingLeft":"10px","fontSize":"14px","marginRight":"0px"}},"sizesWrapper":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","marginRight":"10px","marginLeft":"900px"}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)","backgroundColor":""},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--t-color-text-green)","backgroundColor":""}},"jumpInput":{"default":{"color":"var(--t-color-text-green)","backgroundColor":"var(--business-select-item-bg)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"sizesDropdownItem":{"default":{"color":"rgba(255, 255, 255, 0.9)","backgroundColor":"","borderLeft":"1px none #00828A","borderTop":"1px none #00828A","borderRight":"1px none #00828A","borderBottom":"1px none #00828A"},"active":{"backgroundColor":"var(--business-select-item-bg)","color":"var(--business-text-hover)"},"hover":{"color":"var(--business-text-hover)","backgroundColor":"var(--business-select-item-bg)"}}}, 
 },
},
tRectx0x12: {
defaultStyle: {
            default: {"width":"1616px","height":"322px","position":"unset","left":"150px","top":"284px","fontSize":"14px","color":"rgba(255,255,255,0.9)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"加载中...",
active:false,
cStyle:{"wrapper":{"default":{"width":"1616px","height":"322px","position":"unset","left":"150px","top":"284px","fontSize":"14px","color":"rgba(255,255,255,0.9)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}},"emptyText":{"default":{"color":"rgba(255,255,255,0.9)","fontSize":"14px"}}}, 
 },
},
tChartSankeyx0x13: {
defaultStyle: {
            default: {"width":"1560px","height":"338px","position":"unset","left":"145px","top":"265px"},
            
            },
 default: { 
 
emptyImg:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"width":"1560px","height":"338px","position":"unset","left":"145px","top":"265px"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"color":["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],"title":{"show":false}})),
linksData:[{"linkSource":"环评处","linkTarget":"福建省高级人民法院","linkValue":5},{"linkSource":"环评处","linkTarget":"发展和改革委员会","linkValue":3},{"linkSource":"科财处","linkTarget":"发展和改革委员会","linkValue":8}],
nodesData:[{"nodeName":"环评处"},{"nodeName":"科财处"},{"nodeName":"福建省高级人民法院"},{"nodeName":"发展和改革委员会"}],
seriesSetting:{"data":{"nodeKey":"nodeName","linkKey":{"sourceKey":"linkSource","targetKey":"linkTarget","valueKey":"linkValue"},"style":{"label":{"show":true},"orient":"horizontal"}}}, 
 },
},
});
const setOption = () => {

state.charOption = {
  //你的代码
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    textStyle: {
      color: "rgba(255,255,255,1)",
      fontSize: 14,
    },
    confine: true, // 超出范围
    backgroundColor: "#000", //设置背景颜色
    borderColor: "#6CFFFA",
    formatter: "{b}<br>{a}：{c}次<br>{a1}：{c1}个",
  },
  legend: {
    top: "4%",
    left: "center",
    itemWidth: 18,
    itemHeight: 10,
    itemGap: 20,
    textStyle: {
      fontSize: 14,
      color: "rgba(255,255,255,0.8)",
      padding: [0, -5, 0, 5],
    },
  },
  grid: {
    top: "10%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: state.xData,
      axisTick: {
        show: false,
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: "#516060",
        },
      },
      axisLabel: {
        interval: 0,
        margin: 10,
        color: "rgba(255,255,255,0.8)",
        textStyle: {
          fontSize: 14,
          color: "rgba(255,255,255,0.8)",
        },
      },
    },
  ],
  yAxis: [
    {
      name: "调用次数（次）",
      splitNumber: 5,
      type: "value",
      minInterval: 1,
      nameTextStyle: {
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        align: "center",
        padding: [0, 0, 0, 40],
      },
      axisLabel: {
        show: true,
        fontSize: 14,
        color: "rgba(255,255,255,0.8)",
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#1C82C5",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    {
      type: "value",
      name: "提供接口数（个）",
      splitNumber: 5,
      type: "value",
      nameTextStyle: {
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        align: "center",
        padding: [0, 40, 0, 0],
      },
      axisLabel: {
        formatter: "{value}",
        color: "rgba(255,255,255,0.8)",
        textStyle: {
          fontSize: 14,
          color: "rgba(255,255,255,0.8)",
          lineHeight: 16,
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#1C82C5",
        },

      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#526060",
          type: "dashed",
        },
      },
    }
  ],
  series: [
    {
      name: "调用次数",
      type: "bar",
      barWidth: "14",
      data: state.callsData,
      itemStyle: {
        normal: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#6CFFFA",
              },
              {
                offset: 1,
                color: "rgba(108, 255, 250, 0)",
              },
            ],
          },
          borderColor: "rgba(108, 255, 250, 0.5)",
        },
        // borderRadius: [2, 2, 0, 0],
      },
    },
    {
      name: "提供接口数",
      type: "bar",
      barWidth: "14",
      yAxisIndex: 1,
      data: state.provideData,
      itemStyle: {
        normal: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#FAC858",
              },
              {
                offset: 1,
                color: "rgba(250, 200, 88, 0)",
              },
            ],
          },
          borderColor: "rgba(250, 200, 88, 0.5)",
        },
        // borderRadius: [2, 2, 0, 0],
      },
    },
  ],
};
};
const setTimeSelect = (data) => {
console.log(data, '选中时间');
state.START_TIME = data[0];
state.END_TIME = data[1];
getCharData();
getTableData();
};
const getNewTime = () => {
// state.timeSelect= [global.toMonthTime,global.toMonthTime]
// state.START_TIME = global.toMonthTime;
// state.END_TIME = global.toMonthTime;
getCharData();
getTableData();
};
const clearLoop = () => {
if (global.loopId) {
  clearInterval(global.loopId);
}
};
const initParams = () => {
state.DEPT_CODE = global.typeCode;
};
const onmouseout1739345365135 = () => {

// 显示元素并加动画
document.getElementById('t-rect-5094.9a9212dbc').style.display = 'block';
runAnimation('t-rect-5094.9a9212dbc', [""]);

// 隐藏元素并加动画
runAnimation('t-rect-39ea.51f8eb66d', [""], 'none');
};
const onclick1740017904182 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'showPop',
                    value:false,
                    data: {
                      showPop: false
                    },
                  });
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'isSetLoop',
                    value:false,
                    data: {
                      isSetLoop: false
                    },
                  });
// 执行自定义方法
clearLoop();
};
const onmouseover1739345261051 = () => {

// 显示元素并加动画
document.getElementById('t-rect-39ea.51f8eb66d').style.display = 'block';
runAnimation('t-rect-39ea.51f8eb66d', [""]);

// 隐藏元素并加动画
runAnimation('t-rect-5094.9a9212dbc', [""], 'none');
};
const onsizeChange1740045016433 = (pageSize) => {
// 设置变量值
state.pageInfo.pageSize = pageSize;
};
const oncurrentChange1740045041766 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
};
// 接口函数
const getCodeData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"USE_DEPT"},}).then((res) => {
     // 成功的操作
     if (res?.data?.data) {
  state.sectionData = [];
  state.sectionData = res.data.data;
  state.sectionData.unshift({
    DICTIONARY_CODE: "",
    DICTIONARY_NAME: "全部",
    EXT1: "NULL",
    EXT2: "NULL",
    EXT3: "NULL",
    EXT4: "NULL"
  })
  console.log(res, '使用部门');
  initParams();
} else {
  state.sectionData = [];
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 初始请求，调取接口
getCodeData();
// 接口函数
const getTableData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"3bbff638d7c1309aff61599e544314e0","START_DATE":state.START_TIME,"END_DATE":state.END_TIME,"DEPT_CODE":state.DEPT_CODE,"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize},}).then((res) => {
     // 成功的操作
     if (res?.data?.data && res?.data?.data.length > 0) {
  state.tableData = [];
  const pageInfo = res.data.head.pageInfo;
  state.tableData = res.data.data;
    state.tableData.forEach((obj) => {
    for (const key in obj) {
      if (obj[key] === "") {
        obj[key] = "-";
      }
    }
  });
  // for (let key in state.pageInfo) {
  //   state.pageInfo[key] = pageInfo[key];
  // }
  state.pageInfo.total = Number(pageInfo.total) || 0;
  state.pageInfo.pages = Number(pageInfo.pages) || 0;
  console.log(res, state.pageInfo, state.tableData, '列表数据');
} else {
  state.tableData = [];
  // 修改暂无样式默认样式
  setTimeout(() => {
    getEl();
  })
  state.pageInfo.total = 0;
  state.pageInfo.pages = 0;
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [state.DEPT_CODE,state.pageInfo.pageNum,state.pageInfo.pageSize], () => {
getTableData();
},{
deep: true, // 深度监听
});
// 接口函数
const getCharData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"7b729ca9fa83b005be7579360872057a","DEPT_CODE":state.DEPT_CODE,"START_DATE":state.START_TIME,"END_DATE":state.END_TIME},}).then((res) => {
     // 成功的操作
     
if (res?.data?.data && res?.data?.data.length >0) {
  state.xData = [];
  state.callsData = [];
  state.provideData = [];
  console.log(res,'8887778');
  const data = res.data.data;
  state.xData = data.map(item => item.DEPT_NAME);
  state.provideData = data.map(item => item.TGJKS);
  state.callsData = data.map(item => item.DYCS);
  state.isLoading = '加载中...';
  state.isChar = false;
  setTimeout(() => {
    state.isChar = true;
    setOption();
  })
} else {
  state.isLoading = '暂无数据';
  state.isChar = false;
  state.xData = [];
  state.callsData = [];
  state.provideData = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.isLoading = '暂无数据';
state.isChar = false;
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [state.DEPT_CODE], () => {
getCharData();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-deptRelation', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setOption("","","");
// 执行自定义方法
getEl();
onBeforeMount(() => {
// 执行自定义方法
getNewTime();
});
onMounted(() => {
setPageScale('t-l-c-deptRelation', global.appScaleMode, 'normal');
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

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tTablex0x5ComputedData = computed(() => _.merge({}, componentState.tTablex0x5.default, componentState.tTablex0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tPaginationBasex0x8ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x8.default, componentState.tPaginationBasex0x8?.[state.screenSize]));

 const tRectx0x12ComputedData = computed(() => _.merge({}, componentState.tRectx0x12.default, componentState.tRectx0x12?.[state.screenSize]));

 const tChartSankeyx0x13ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartSankeyx0x13.default, componentState.tChartSankeyx0x13?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tTablex0x5ComputedData,
tTextx0x6ComputedData,
tPaginationBasex0x8ComputedData,
tRectx0x12ComputedData,
tChartSankeyx0x13ComputedData,
onmouseout1739345365135,
onclick1740017904182,
onmouseover1739345261051,
onsizeChange1740045016433,
oncurrentChange1740045041766,
};
},
};