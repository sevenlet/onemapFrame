window.instrumentedDiaPopComponent = {
template: 
`<div id="t-l-c-instrumentedDiaPop" class="t-l-c-instrumentedDiaPop" >` +
`<t-rect id="t-rect-3c13.6e224e776" class="instrumentedDiaPop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-1410.863eda6a7" class="instrumentedDiaPop-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-39ea.51f8eb66d" class="instrumentedDiaPop-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle" @mouseout="onmouseout1739345365135" @click="onclick1740017904182">` +
`</t-rect>` +
`<t-rect id="t-rect-5094.9a9212dbc" class="instrumentedDiaPop-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @mouseover="onmouseover1739345261051">` +
`</t-rect>` +
`<t-table id="t-table-dfde.5586f34ad" class="instrumentedDiaPop-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :columns="tTablex0x4ComputedData.columns" :data="replaceCssVariables(state.tableData, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle" :highlight-current-row="tTablex0x4ComputedData.highlightCurrentRow">` +
`</t-table>` +
`<t-text id="t-text-0849.df06c90a6" class="instrumentedDiaPop-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-pagination-base id="t-pagination-base-04fb.abb1d23f3" class="instrumentedDiaPop-t-pagination-base-0-6"  :total="replaceCssVariables(state.pageInfo.total, global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x6ComputedData.small" :page-size="replaceCssVariables(state.pageInfo.pageSize, global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x6ComputedData.pagerCount" :current-page="replaceCssVariables(state.pageInfo.pageNum, global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x6ComputedData.layout" :page-sizes="tPaginationBasex0x6ComputedData.pageSizes" :disabled="tPaginationBasex0x6ComputedData.disabled" :c-style="tPaginationBasex0x6ComputedData.cStyle" @size-change="onsizeChange1740045016433" @current-change="oncurrentChange1740045041766">` +
`</t-pagination-base>` +
`<t-chart-design v-if="state.isChar === true" id="t-chart-design-3dfc.8ee8cdae9" class="instrumentedDiaPop-t-chart-design-0-7"  :empty-img="tChartDesignx0x7ComputedData.emptyImg" :c-style="tChartDesignx0x7ComputedData.cStyle" :options="replaceCssVariables(state.charOption, global?.theme || global?.activeTheme || '默认主题')">` +
`</t-chart-design>` +
`<t-rect v-if="state.isChar === false" id="t-rect-e5b3.d6eee570c" class="instrumentedDiaPop-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="replaceCssVariables(state.isLoading, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-79b1.520eb885e" class="instrumentedDiaPop-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle">` +
`</t-rect>` +
`<t-select id="t-select-2875.027e56ed" class="instrumentedDiaPop-t-select-0-10"  :active-value="replaceCssVariables(state.BUSINESS_TYPE, global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(state.typeData, global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x10ComputedData.alias" :multiple="tSelectx0x10ComputedData.multiple" :placeholder="tSelectx0x10ComputedData.placeholder" :clearable="tSelectx0x10ComputedData.clearable" :disabled="tSelectx0x10ComputedData.disabled" :name="tSelectx0x10ComputedData.name" :autocomplete="tSelectx0x10ComputedData.autocomplete" :filterable="tSelectx0x10ComputedData.filterable" :no-match-text="tSelectx0x10ComputedData.no-match-text" :no-data-text="tSelectx0x10ComputedData.no-data-text" :c-style="tSelectx0x10ComputedData.cStyle" @change="onchange1741764714526">` +
`</t-select>` +
`<t-text id="t-text-ab59.e88cd1abe" class="instrumentedDiaPop-t-text-0-11"  :label="tTextx0x11ComputedData.label" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-d400.5df85bf6f" class="instrumentedDiaPop-t-text-0-12"  :label="replaceCssVariables(state.stopTime, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle">` +
`</t-text>` +
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
   stopTime: "截至--",
   typeData: [],
   BUSINESS_TYPE: "",
   isClose: false,
   charOption: "",
   timeSelect: [],
   pageInfo: {"pageNum":1,"pageSize":5,"total":0,"pages":""},
   START_TIME: "",
   END_TIME: "",
   treeData: [],
   isChar: false,
   isLoading: "加载中...",
   tableData: [],
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
            default: {"width":"1680px","height":"916px","position":"unset","left":"120px","top":"82px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1680px","height":"916px","position":"unset","left":"120px","top":"82px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1632px","height":"388px","backgroundColor":"var(--t-zbzs-bg)","borderLeft":"1px solid var(--t-bgc-border-color)","borderTop":"1px solid var(--t-bgc-border-color)","borderRight":"1px solid var(--t-bgc-border-color)","borderBottom":"1px solid var(--t-bgc-border-color)","position":"unset","left":"144px","top":"171px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1632px","height":"388px","backgroundColor":"var(--t-zbzs-bg)","borderLeft":"1px solid var(--t-bgc-border-color)","borderTop":"1px solid var(--t-bgc-border-color)","borderRight":"1px solid var(--t-bgc-border-color)","borderBottom":"1px solid var(--t-bgc-border-color)","position":"unset","left":"144px","top":"171px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"82px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"82px","animationName":"","cursor":"pointer"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-mr)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"82px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-mr)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"82px","cursor":"pointer"}}}, 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"1632px","height":"252px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"},
            
            },
 default: { 
 
height:"252",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"序号","type":"default","key":"RN","stateKey":"","width":"80PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"}},"infoPosition":"left","infoStyle":{"fontStyle":{"color":"rgba(255, 255, 255, 1)"}}},{"label":"设备大类","type":"default","key":"CATEGORY_ONE_NAME","stateKey":"","width":"221.7PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"设备小类","type":"default","key":"CATEGORY_TWO_NAME","stateKey":"","width":"221.7PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"设备属性","type":"default","key":"DEVICE_PROPERTY","stateKey":"","width":"221.7PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"对接频率","type":"default","key":"DATA_TYPE_NAME","stateKey":"","width":"221.7PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"数量（个）","type":"default","key":"DEVICE_NUM","stateKey":"","width":"221.7PX","minWidth":"","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"在线（个）","type":"default","key":"ONLINE_NUM","stateKey":"","width":"221.7PX","minWidth":"","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"离线（个）","type":"default","key":"OFFLINE_NUM","stateKey":"","width":"221.7PX","minWidth":"","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1632px","height":"252px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"}},"headerCell":{"default":{"borderBottom":"2px none rgba(26,27,31,1)","borderLeft":"1px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","width":"418px","height":"28px","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"7px","paddingRight":"0px"}},"bodyCell":{"default":{"backgroundColor":"","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","height":"32px","paddingTop":"7px","paddingBottom":"7px","fontSize":"16px","paddingLeft":"7px","paddingRight":"0px","lineHeight":"24px"},"hover":{"backgroundColor":"rgba(48, 72, 173, 0)","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","lineHeight":"24px","height":"32px"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(218, 24, 24, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"headerRowWrapper":{"default":{"backgroundColor":"rgba(223, 44, 44, 0)","paddingLeft":"0px","paddingRight":"0px","paddingTop":"0px","backgroundImage":"var(--t-full-service-dia-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"28px"}},"rowWrapper":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","height":"32px","backgroundColor":"var(--table-bm-color)"},"hover":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"","height":"32px","box-shadow":"rgba(0, 255, 246, 1) 0px 0px 0px 1px inset"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(59, 182, 151, 0)","backgroundImage":"unset !important","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none "},"hover":{"borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"bodyCellInner":{"default":{"height":"20px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"highlightRow":{"default":{"height":"auto"}}},
highlightCurrentRow:false, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"107px","left":"198px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"},
            
            },
 default: { 
 
label:"泛物联感知",
editable:false,
cStyle:{"wrapper":{"default":{"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"107px","left":"198px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"}}}, 
 },
},
tPaginationBasex0x6: {
defaultStyle: {
            default: {"width":"1592px","height":"38px","position":"unset","left":"164px","top":"925px","color":"","animationName":"","display":"flex","justifyContent":"space-between","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
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
cStyle:{"wrapper":{"default":{"width":"1592px","height":"38px","position":"unset","left":"164px","top":"925px","color":"","animationName":"","display":"flex","justifyContent":"space-between","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"pagerItem":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","lineHeight":"32px","borderLeft":"1px none #366B92","borderTop":"1px none #366B92","borderRight":"1px none #366B92","borderBottom":"1px none #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":"var(--business-select-item-bg)"},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"var(--t-button-bg)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"var(--t-color-text-green)","marginLeft":"0px","marginRight":"0px","backgroundColor":"var(--business-select-drop-bg)"},"hover":{"color":"#FFFFFF","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"more":{"default":{"color":"var(--t-color-text-green)"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"var(--t-color-text-green)","paddingRight":"30px","paddingLeft":"0px","fontSize":"14px","marginRight":"0px"}},"sizesWrapper":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","marginRight":"10px","marginLeft":"900px"}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)","backgroundColor":""},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--t-color-text-green)","backgroundColor":""}},"jumpInput":{"default":{"color":"var(--t-color-text-green)","backgroundColor":"var(--business-select-item-bg)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"sizesDropdownItem":{"default":{"color":"rgba(255, 255, 255, 0.9)","backgroundColor":"","borderLeft":"1px none #00828A","borderTop":"1px none #00828A","borderRight":"1px none #00828A","borderBottom":"1px none #00828A"},"active":{"backgroundColor":"var(--business-select-item-bg)","color":"var(--business-text-hover)"},"hover":{"color":"var(--business-text-hover)","backgroundColor":"var(--business-select-item-bg)"}}}, 
 },
},
tChartDesignx0x7: {
defaultStyle: {
            default: {"height":"348px","width":"1617px","left":"150px","top":"191px","position":"unset","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
emptyImg:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"348px","width":"1617px","left":"150px","top":"191px","position":"unset","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}},
options:"", 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"1617px","height":"348px","position":"unset","left":"150px","top":"191px","fontSize":"14px","color":"rgba(255,255,255,0.9)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"加载中...",
active:false,
cStyle:{"wrapper":{"default":{"width":"1617px","height":"348px","position":"unset","left":"150px","top":"191px","fontSize":"14px","color":"rgba(255,255,255,0.9)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}},"emptyText":{"default":{"color":"rgba(255,255,255,0.9)","fontSize":"14px"}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"1632px","height":"64px","position":"unset","left":"144px","top":"582px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"var(--t-full-service-dia-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1632px","height":"64px","position":"unset","left":"144px","top":"582px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"var(--t-full-service-dia-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tSelectx0x10: {
defaultStyle: {
            default: {"width":"268px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":""},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"DICTIONARY_NAME","value":"DICTIONARY_CODE","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"268px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":""},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","box-shadow":"var(--business-select-shadow) 0px 0px 0px 2px "}},"placeholder":{"default":{"color":"var(--t-text)"}},"arrow":{"default":{"color":"var(--t-text)","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px","right":"0","position":"relative","left":"7px"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","width":"268px","paddingLeft":"6px","paddingRight":"6px"}},"dropdownItem":{"default":{"fontSize":"14px","color":"var(--t-text)","height":"28px","lineHeight":"28px","width":"254px","marginBottom":"4px","paddingLeft":"8px","paddingRight":"8px"},"hover":{"color":"var(--t-text)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"disabledWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"604px","left":"166px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset"},
            
            },
 default: { 
 
label:"设备类型",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"604px","left":"166px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset"}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"132px","height":"18px","color":"rgba(255, 255, 255, 0.8)","lineHeight":"18px","top":"112px","left":"1588px","position":"unset"},
            
            },
 default: { 
 
label:"截至--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"132px","height":"18px","color":"rgba(255, 255, 255, 0.8)","lineHeight":"18px","top":"112px","left":"1588px","position":"unset"}}}, 
 },
},
});
const setOption = () => {
let tooltipColor = getCssVariable("--t-echarts-tooltip-text");
let tooltipBgc = getCssVariable("--t-echarts-tooltip-bgc");
let splitColor = getCssVariable("--t-echarts-wgx-color");
let textColor = getCssVariable("--t-echarts-text-color");






state.charOption = {
    series: [{
        type: 'tree',
        name: 'tree2',
        data: state.treeData,
        top: '1%',
        bottom: '1%',
        right: '16%',
        left: '7%',
        symbolSize: 8,
        symbol: 'circle',
        // 展开发的层级数
        initialTreeDepth: 10,
        itemStyle: {
            color: 'rgba(0,255,255,1.00)',
            borderColor: 'rgba(0,255,255,1.00)',
        },
        label: {
            normal: {
                position: 'top',
                verticalAlign: 'middle',
                align: 'center',
                color: textColor, // 设置叶子节点字体颜色为白色
                fontSize: 14 // 设置叶子节点字体大小为 14px
            },
        },
        // 线的样式
        lineStyle: {
            color: 'rgba(0,255,255,0.5)',
            curveness: '0.5',
        },
        leaves: {
            label: {
                normal: {
                    // 叶子节点字的样式
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left',
                    color: textColor, // 设置叶子节点字体颜色为白色
                    fontSize: 14 // 设置叶子节点字体大小为 14px
                },
            },
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750,
    },],
};
};
const setTimeSelect = (data) => {
console.log(data, '选中时间');
state.START_TIME = data[0];
state.END_TIME = data[1];
};
const clearLoop = () => {
if (global.loopId) {
  clearInterval(global.loopId);
}
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
const onchange1741764714526 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.BUSINESS_TYPE = value;
};
// 接口函数
const getCodeData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"BUSINESS_TYPE_IOT"},}).then((res) => {
     // 成功的操作
     if (res?.data?.data) {
  state.typeData= [];
  state.typeData = res.data.data;
  state.typeData.unshift({
    DICTIONARY_CODE: "",
    DICTIONARY_NAME: "全部",
    EXT1: "NULL",
    EXT2: "NULL",
    EXT3: "NULL",
    EXT4: "NULL"
  })
  console.log(res, '业务类别');
} else {
  state.typeData = [];
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
const getCharData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"ef6f3ea7ab550b5faecbd4b08bd7e5ed"},}).then((res) => {
     // 成功的操作
     console.log(res, '数图');
if (res?.data?.data && res?.data?.data.length > 0) {
  console.log(res, '数图');
  state.isLoading = '加载中...';
  state.isChar = false;
  state.treeData = [];
  state.stopTime = '截至' + res.data.data[0].DATA_TIME || '--';
  function convertToTree(data) {
    const map = {};
    const tree = [];

    // 第一步：将每个节点存储在 map 中，方便后续查找
    data.forEach(item => {
      const newItem = { ...item, children: [] };
      map[item.ID] = newItem;
    });

    // 第二步：遍历数据，根据 PID 构建树结构
    data.forEach(item => {
      const current = map[item.ID];
      const parentId = item.PID;
      if (parentId === "") {
        // 如果是根节点，直接添加到树中
        tree.push(current);
      } else {
        const parent = map[parentId];
        if (parent) {
          // 如果父节点存在，将当前节点添加到父节点的 children 数组中
          parent.children.push(current);
        }
      }
    });

    return tree;
  }

  const treeData = convertToTree(res.data.data);

  function transformTree(tree) {
    return tree.map(node => {
      const newNode = {
        id: node.ID,
        name: `${node.NAME}（${node.VALUE}）`
      };
      if (node.children && node.children.length > 0) {
        newNode.children = transformTree(node.children);
      }
      return newNode;
    });
  }
  state.treeData = transformTree(treeData)

  console.log(state.treeData, '树');
  setTimeout(() => {
    state.isChar = true;
    setOption();
  })
} else {
  state.isLoading = '暂无数据';
  state.isChar = false;
  state.stopTime = '截至--';
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
// 初始请求，调取接口
getCharData();
// 接口函数
const getTableData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"9a5618495b7ac106e261d91d9fd761ad","BUSINESS_TYPE":state.BUSINESS_TYPE,"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize},}).then((res) => {
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
watch(() => [state.BUSINESS_TYPE,state.pageInfo.pageNum,state.pageInfo.pageSize], () => {
getTableData();
},{
deep: true, // 深度监听
});
// 初始请求，调取接口
getTableData();
 function handleWindowResize() {
                            setPageScale('t-l-c-instrumentedDiaPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setOption("","","");
// 执行自定义方法
getEl();
onMounted(() => {
setPageScale('t-l-c-instrumentedDiaPop', global.appScaleMode, 'normal');
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

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tPaginationBasex0x6ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x6.default, componentState.tPaginationBasex0x6?.[state.screenSize]));

 const tChartDesignx0x7ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x7.default, componentState.tChartDesignx0x7?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tSelectx0x10ComputedData = computed(() => _.merge({}, componentState.tSelectx0x10.default, componentState.tSelectx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tTablex0x4ComputedData,
tTextx0x5ComputedData,
tPaginationBasex0x6ComputedData,
tChartDesignx0x7ComputedData,
tRectx0x8ComputedData,
tRectx0x9ComputedData,
tSelectx0x10ComputedData,
tTextx0x11ComputedData,
tTextx0x12ComputedData,
onmouseout1739345365135,
onclick1740017904182,
onmouseover1739345261051,
onsizeChange1740045016433,
oncurrentChange1740045041766,
onchange1741764714526,
};
},
};