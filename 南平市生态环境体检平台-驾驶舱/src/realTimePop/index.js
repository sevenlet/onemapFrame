window.realTimePopComponent = {
template: 
`<div id="t-l-c-realTimePop" class="t-l-c-realTimePop" >` +
`<t-rect id="t-rect-3c13.6e224e776" class="realTimePop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-1410.863eda6a7" class="realTimePop-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-79b1.520eb885e" class="realTimePop-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-39ea.51f8eb66d" class="realTimePop-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @mouseout="onmouseout1739345365135" @click="onclick1739960380902">` +
`</t-rect>` +
`<t-rect id="t-rect-5094.9a9212dbc" class="realTimePop-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @mouseover="onmouseover1739345261051">` +
`</t-rect>` +
`<t-table v-if="state.selected === 'zyfwl'" id="t-table-a57f.cbf95d70d" class="realTimePop-t-table-0-5"  :height="tTablex0x5ComputedData.height" :stripe="tTablex0x5ComputedData.stripe" :border="tTablex0x5ComputedData.border" :auto-scroll="tTablex0x5ComputedData.autoScroll" :speed="tTablex0x5ComputedData.speed" :columns="tTablex0x5ComputedData.columns" :data="replaceCssVariables(state.tableData, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x5ComputedData.defaultSort" :c-style="tTablex0x5ComputedData.cStyle" :highlight-current-row="tTablex0x5ComputedData.highlightCurrentRow">` +
`</t-table>` +
`<t-table v-if="state.selected === 'all'" id="t-table-68bd.6bed34d0c" class="realTimePop-t-table-0-6"  :height="tTablex0x6ComputedData.height" :stripe="tTablex0x6ComputedData.stripe" :border="tTablex0x6ComputedData.border" :auto-scroll="tTablex0x6ComputedData.autoScroll" :speed="tTablex0x6ComputedData.speed" :columns="tTablex0x6ComputedData.columns" :data="replaceCssVariables(state.tableData, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x6ComputedData.defaultSort" :c-style="tTablex0x6ComputedData.cStyle" :highlight-current-row="tTablex0x6ComputedData.highlightCurrentRow">` +
`</t-table>` +
`<t-text id="t-text-0849.df06c90a6" class="realTimePop-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle">` +
`</t-text>` +
`<t-pagination-base id="t-pagination-base-31f0.236dd0768" class="realTimePop-t-pagination-base-0-8"  :total="replaceCssVariables(state.pageInfo.total, global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x8ComputedData.small" :page-size="replaceCssVariables(state.pageInfo.pageSize, global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x8ComputedData.pagerCount" :current-page="replaceCssVariables(state.pageInfo.pageNum, global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x8ComputedData.layout" :page-sizes="tPaginationBasex0x8ComputedData.pageSizes" :disabled="tPaginationBasex0x8ComputedData.disabled" :c-style="tPaginationBasex0x8ComputedData.cStyle" @size-change="onsizeChange1740118909910" @current-change="oncurrentChange1740118925956">` +
`</t-pagination-base>` +
`<t-text id="t-text-e9ad.e5093ff31" class="realTimePop-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle">` +
`</t-text>` +
`<t-date-picker id="t-date-picker-d0f9.84df9004" class="realTimePop-t-date-picker-0-15"  :placeholder="tDatePickerx0x15ComputedData.placeholder" :start-placeholder="tDatePickerx0x15ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x15ComputedData.endPlaceholder" :type="tDatePickerx0x15ComputedData.type" :clearable="tDatePickerx0x15ComputedData.clearable" :range-separator="tDatePickerx0x15ComputedData.rangeSeparator" :default-date="replaceCssVariables(state.timeSelect, global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x15ComputedData.separator" :c-style="tDatePickerx0x15ComputedData.cStyle" :is-disabled-front="tDatePickerx0x15ComputedData.isDisabledFront" @date-change="ondateChange1740119125960">` +
`</t-date-picker>` +
`<t-chart-design v-if="state.isChar === true" id="t-chart-design-dd66.2a7b672ad" class="realTimePop-t-chart-design-0-16"  :empty-img="tChartDesignx0x16ComputedData.emptyImg" :c-style="tChartDesignx0x16ComputedData.cStyle" :options="replaceCssVariables(state.charOption, global?.theme || global?.activeTheme || '默认主题')">` +
`</t-chart-design>` +
`<t-rect v-if="state.isChar === false" id="t-rect-c7e2.728d5f2e8" class="realTimePop-t-rect-0-17"  :tip="tRectx0x17ComputedData.tip" :label="replaceCssVariables(state.isLoading, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x17ComputedData.active" :c-style="tRectx0x17ComputedData.cStyle">` +
`</t-rect>` +
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
   charOption: "",
   timeSelect: [],
   START_TIME: "",
   END_TIME: "",
   xData: [],
   callsData: [],
   provideData: [],
   isChar: false,
   isLoading: "加载中...",
   pageInfo: {"pageNum":1,"pageSize":5,"total":0,"pages":0},
   tableDataOne: [],
   selected: "all",
   isTable: true,
   tableData: [],
   visitData: [],
   resourcesData: [],
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
            default: {"width":"1632px","height":"708px","backgroundColor":"var(--t-zbzs-bg)","borderLeft":"1px solid var(--t-bgc-border-color)","borderTop":"1px solid var(--t-bgc-border-color)","borderRight":"1px solid var(--t-bgc-border-color)","borderBottom":"1px solid var(--t-bgc-border-color)","position":"unset","left":"144px","top":"265px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1632px","height":"708px","backgroundColor":"var(--t-zbzs-bg)","borderLeft":"1px solid var(--t-bgc-border-color)","borderTop":"1px solid var(--t-bgc-border-color)","borderRight":"1px solid var(--t-bgc-border-color)","borderBottom":"1px solid var(--t-bgc-border-color)","position":"unset","left":"144px","top":"265px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"}}}, 
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
columns:[{"label":"序号","type":"default","key":"RN","stateKey":"","width":"80PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"}},"infoPosition":"left","infoStyle":{"fontStyle":{"color":"rgba(255, 255, 255, 1)"}}},{"label":"统计时间","type":"default","key":"DATA_TIME","stateKey":"","width":"0PX","minWidth":"378PX","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"页面访问量（次）","type":"default","key":"RES_ACCESS_NUM_PAGE","stateKey":"","width":"378PX","minWidth":"","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"系统访问量（次）","type":"default","key":"RES_ACCESS_NUM_SYSTEM","stateKey":"","width":"378PX","minWidth":"","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"数据集访问量（次）","type":"default","key":"RES_ACCESS_NUM_DATASET","stateKey":"","width":"378PX","minWidth":"","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0","marginRight":"2PX"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right","infoStyle":{"fontStyle":{"padding":"2px","margin":"2px"}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1592px","height":"252px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"}},"headerCell":{"default":{"borderBottom":"2px none rgba(26,27,31,1)","borderLeft":"1px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","width":"418px","height":"28px","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"7px","paddingRight":"0px"}},"bodyCell":{"default":{"backgroundColor":"","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","height":"32px","paddingTop":"7px","paddingBottom":"7px","fontSize":"16px","paddingLeft":"7px","paddingRight":"0px","lineHeight":"14px"},"hover":{"backgroundColor":"rgba(48, 72, 173, 0)","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","lineHeight":"14px","height":"32px"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(218, 24, 24, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"headerRowWrapper":{"default":{"backgroundColor":"rgba(223, 44, 44, 0)","paddingLeft":"0px","paddingRight":"0px","paddingTop":"0px","backgroundImage":"var(--t-full-service-dia-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"28px"}},"rowWrapper":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","height":"32px","backgroundColor":"var(--table-bm-color)"},"hover":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"","height":"32px","box-shadow":"rgba(0, 255, 246, 1) 0px 0px 0px 1px inset"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(59, 182, 151, 0)","backgroundImage":"unset !important","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none "},"hover":{"borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"bodyCellInner":{"default":{"height":"20px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"highlightRow":{"default":{"height":"auto"}}},
highlightCurrentRow:false, 
 },
},
tTablex0x6: {
defaultStyle: {
            default: {"width":"1612px","height":"253px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)","position":"unset","left":"163px","top":"594px"},
            
            },
 default: { 
 
height:"252",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"序号","type":"default","key":"RN","stateKey":"","width":"80PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"}},"infoPosition":"left","infoStyle":{"fontStyle":{"color":"rgba(255, 255, 255, 1)"}}},{"label":"统计时间","type":"default","key":"DATA_TIME","stateKey":"","width":"500PX","minWidth":"0PX","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"接口调用数（次）","type":"default","key":"CALL_NUM","stateKey":"","width":"1000PX","minWidth":"","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1612px","height":"253px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)","position":"unset","left":"163px","top":"594px"}},"headerCell":{"default":{"borderBottom":"2px none rgba(26,27,31,1)","borderLeft":"1px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","width":"418px","height":"28px","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"7px","paddingRight":"0px"}},"bodyCell":{"default":{"backgroundColor":"","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","height":"32px","paddingTop":"7px","paddingBottom":"7px","fontSize":"16px","paddingLeft":"7px","paddingRight":"0px","lineHeight":"14px"},"hover":{"backgroundColor":"rgba(48, 72, 173, 0)","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","lineHeight":"14px","height":"32px"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(218, 24, 24, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"headerRowWrapper":{"default":{"backgroundColor":"rgba(223, 44, 44, 0)","paddingLeft":"0px","paddingRight":"0px","paddingTop":"0px","backgroundImage":"var(--t-full-service-dia-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"28px"}},"rowWrapper":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","height":"32px","backgroundColor":"var(--table-bm-color)"},"hover":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"","height":"32px","box-shadow":"rgba(0, 255, 246, 1) 0px 0px 0px 1px inset"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(59, 182, 151, 0)","backgroundImage":"unset !important","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none "},"hover":{"borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"bodyCellInner":{"default":{"height":"20px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"highlightRow":{"default":{"height":"auto"}}},
highlightCurrentRow:false, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"108px","left":"198px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"},
            
            },
 default: { 
 
label:"实时用动态",
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
tTextx0x14: {
defaultStyle: {
            default: {"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"196px","left":"165px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"时间区间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"196px","left":"165px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""}}}, 
 },
},
tDatePickerx0x15: {
defaultStyle: {
            default: {"width":"390px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
cStyle:{"wrapper":{"default":{"width":"390px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},"hover":{"fontSize":"14px","backgroundColor":"var(--t-select-fill-bg-hover)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"}},"inputWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgba(20,112,204,0)","borderTop":"1px none rgba(20,112,204,0)","borderRight":"1px none rgba(20,112,204,0)","borderBottom":"1px none rgba(20,112,204,0)","color":"var(--t-text)","paddingLeft":"8px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"14px"}},"inputDateIcons":{"default":{"backgroundColor":"var(--business-select-border)","color":"rgba(121, 190, 255, 0)","backgroundImage":"","-webkit-mask-image":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/date-picker.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"50% 50%","position":"absolute","right":"-70%","top":"0px","pointerEvents":"none","marginRight":"280px","marginTop":"5px"}},"splitLine":{"default":{"color":"var(--t-text)","backgroundColor":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px solid rgba(20,112,204,0.3)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""}},"selCurrentDateWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)"},"hover":{"color":"#fff"}},"currentDateWrapper":{"active":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)"},"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","color":"var(--t-text)"}},"todayWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","color":"var(--t-text)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"dateHeaderWrapper":{"default":{"color":"var(--t-text)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":""},"hover":{"backgroundColor":"rgba(26, 27, 31, 0)","color":"var(--t-text)"}},"weekWrapper":{"default":{"color":"var(--t-text)","fontWeight":"500","backgroundColor":"","fontFamily":"微软雅黑"}},"currentWeekWrapper":{"default":{"color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundColor":""}},"timePanelNumWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},"hover":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"rgba(23, 62, 228, 0)"}},"okWrapper":{"default":{"borderLeft":"1px solid #00BFFF","borderTop":"1px solid #00BFFF","borderRight":"1px solid #00BFFF","borderBottom":"1px solid #00BFFF","color":"#00BFFF","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"backgroundColor":"rgba(74, 228, 23, 0)"}},"timePanelWrapper":{"default":{"borderLeft":"1px solid rgba(0,191,255,0.5)","borderTop":"1px solid rgba(0,191,255,0.5)","borderRight":"1px solid rgba(0,191,255,0.5)","borderBottom":"1px solid rgba(0,191,255,0.5)","backgroundColor":"#0C478A","color":"#fff","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 10px 0px "},"active":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","color":"#00FFFF"}},"textBtnWrapper":{"default":{"color":"rgba(255, 255, 255, 0.6)","backgroundColor":""}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--t-select-fill-bg-hover)"}},"operatorArrow":{"default":{"backgroundColor":"","color":"var(--t-text)"}},"dateHeaderMonthBtn":{"default":{"color":"var(--t-text)"}},"dateHeaderMonthBtnWrapper":{"default":{"color":"var(--t-text)"}},"dateHeaderYearBtnWrapper":{"default":{"color":"var(--t-text)"}}},
isDisabledFront:true, 
 },
},
tChartDesignx0x16: {
defaultStyle: {
            default: {"height":"322px","width":"1592px","left":"164px","top":"285px","position":"unset","animationName":""},
            
            },
 default: { 
 
emptyImg:"",
cStyle:{"wrapper":{"default":{"height":"322px","width":"1592px","left":"164px","top":"285px","position":"unset","animationName":""}},"emptyText":{"default":{"color":"rgba(0, 202, 216, 0)"}}},
options:"", 
 },
},
tRectx0x17: {
defaultStyle: {
            default: {"width":"1614px","height":"322px","position":"unset","left":"150px","top":"285px","fontSize":"14px","color":"rgba(255,255,255,0.9)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"加载中...",
active:false,
cStyle:{"wrapper":{"default":{"width":"1614px","height":"322px","position":"unset","left":"150px","top":"285px","fontSize":"14px","color":"rgba(255,255,255,0.9)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}},"emptyText":{"default":{"color":"rgba(255,255,255,0.9)","fontSize":"14px"}}}, 
 },
},
});
const setOption = () => {
let tooltipColor = getCssVariable("--t-echarts-tooltip-text");
let tooltipBgc = getCssVariable("--t-echarts-tooltip-bgc");
let splitColor = getCssVariable("--t-echarts-wgx-color");
let textColor = getCssVariable("--t-echarts-text-color");


state.charOption = {
  //你的代码
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    textStyle: {
      color: tooltipColor,
      fontSize: 14,
    },
    confine: true, // 超出范围
    backgroundColor: tooltipBgc, //设置背景颜色
    borderWidth: 0,
    borderColor: "#6CFFFA",
    formatter: "",
  },
  legend: {
    top: "4%",
    left: "center",
    itemWidth: 18,
    itemHeight: 10,
    itemGap: 20,
    textStyle: {
      fontSize: 14,
      color: textColor,
      padding: [0, -5, 0, 5],
    },
  },
  grid: {
    top: "10%",
    left: "0%",
    right: "1%",
    bottom: "3%",
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
        color: textColor,
        textStyle: {
          fontSize: 14,
          color: textColor,
        },
      },
    },
  ],
  yAxis: [],
  series: [
  ],
  dataZoom: [{
    height: 10
  }],
};


if (state.selected === 'all') {
  state.charOption.tooltip.formatter = "{b}<br>{a}：{c}次<br>{a1}：{c1}次<br>{a2}：{c2}次";
  state.charOption.yAxis = [
    {
      name: "（次）",
      splitNumber: 5,
      type: "value",
      minInterval: 1,
      nameTextStyle: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 14,
        align: "center",
        padding: [0, 0, 0, 20],
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
    } //,
    // {
    //   type: "value",
    //   name: "（条）",
    //   splitNumber: 5,
    //   type: "value",
    //   nameTextStyle: {
    //     color: "rgba(255,255,255,0.8)",
    //     fontSize: 14,
    //     align: "center",
    //     padding: [0, 10, 0, 0],
    //   },
    //   axisLabel: {
    //     formatter: "{value}",
    //     color: "rgba(255,255,255,0.8)",
    //     textStyle: {
    //       fontSize: 14,
    //       color: "rgba(255,255,255,0.8)",
    //       lineHeight: 16,
    //     },
    //   },
    //   axisLine: {
    //     show: false,
    //     lineStyle: {
    //       color: "#1C82C5",
    //     },

    //   },
    //   axisTick: {
    //     show: false,
    //   },
    //   splitLine: {
    //     show: true,
    //     lineStyle: {
    //       color: "#526060",
    //       type: "dashed",
    //     },
    //   },
    // }
  ];
  state.charOption.series = [
    {
      name: "资源访问量",
      type: "bar",
      barWidth: "14",
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
                color: "#6CFFFA",
              },
              {
                offset: 1,
                color: "rgba(108, 255, 250, 0)",
              },
            ],
          },
          borderColor: "#6CFFFA",
        },
        // borderRadius: [2, 2, 0, 0],
      },
    },
    {
      name: "资源下载量",
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
                color: "#5BFF5E",
              },
              {
                offset: 1,
                color: "rgba(91, 255, 94, 0)",
              },
            ],
          },
          borderColor: "#5BFF5E",
        },
        // borderRadius: [2, 2, 0, 0],
      },
    },
    {
      name: "接口调用数",
      type: "bar",
      barWidth: "14",
      data: state.resourcesData,
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
                color: "#FF8400",
              },
              {
                offset: 1,
                color: "rgba(255, 132, 0, 0)",
              },
            ],
          },
          borderColor: "#FF8400",
        },
        // borderRadius: [2, 2, 0, 0],
      },
    } //,
    // {
    //   name: "服务数据量",
    //   type: "bar",
    //   barWidth: "14",
    //   yAxisIndex: 1,
    //   data: state.visitData,
    //   itemStyle: {
    //     normal: {
    //       color: {
    //         x: 0,
    //         y: 0,
    //         x2: 0,
    //         y2: 1,
    //         colorStops: [
    //           {
    //             offset: 0,
    //             color: "#FAC858",
    //           },
    //           {
    //             offset: 1,
    //             color: "rgba(250, 200, 88, 0)",
    //           },
    //         ],
    //       },
    //       borderColor: "#FAC858",
    //     },
    //     // borderRadius: [2, 2, 0, 0],
    //   },
    // },
  ];
} else {
  state.charOption.tooltip.formatter = "{b}<br>{a}：{c}次<br>{a1}：{c1}次<br>{a2}：{c2}次";
  state.charOption.yAxis = [
    {
      name: "",
      splitNumber: 5,
      type: "value",
      minInterval: 1,
      nameTextStyle: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 14,
        align: "center",
        padding: [0, 0, 0, 20],
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
    // {
    //   type: "value",
    //   name: "（次）",
    //   splitNumber: 5,
    //   type: "value",
    //   nameTextStyle: {
    //     color: "rgba(255,255,255,0.8)",
    //     fontSize: 14,
    //     align: "center",
    //     padding: [0, 10, 0, 0],
    //   },
    //   axisLabel: {
    //     formatter: "{value}",
    //     color: "rgba(255,255,255,0.8)",
    //     textStyle: {
    //       fontSize: 14,
    //       color: "rgba(255,255,255,0.8)",
    //       lineHeight: 16,
    //     },
    //   },
    //   axisLine: {
    //     show: false,
    //     lineStyle: {
    //       color: "#1C82C5",
    //     },

    //   },
    //   axisTick: {
    //     show: false,
    //   },
    //   splitLine: {
    //     show: true,
    //     lineStyle: {
    //       color: "#526060",
    //       type: "dashed",
    //     },
    //   },
    // }
  ];
  state.charOption.series = [
    // {
    //   name: "页面访问次数",
    //   type: "bar",
    //   barWidth: "14",
    //   yAxisIndex: 1,
    //   data: state.pageData,
    //   itemStyle: {
    //     normal: {
    //       color: {
    //         x: 0,
    //         y: 0,
    //         x2: 0,
    //         y2: 1,
    //         colorStops: [
    //           {
    //             offset: 0,
    //             color: "#6CFFFA",
    //           },
    //           {
    //             offset: 1,
    //             color: "rgba(108, 255, 250, 0)",
    //           },
    //         ],
    //       },
    //       borderColor: "#6CFFFA",
    //     },
    //     // borderRadius: [2, 2, 0, 0],
    //   },
    // },
    // {
    //   name: "系统访问次数",
    //   type: "bar",
    //   barWidth: "14",
    //   yAxisIndex: 1,
    //   data: state.systemData,
    //   itemStyle: {
    //     normal: {
    //       color: {
    //         x: 0,
    //         y: 0,
    //         x2: 0,
    //         y2: 1,
    //         colorStops: [
    //           {
    //             offset: 0,
    //             color: "#5BFF5E",
    //           },
    //           {
    //             offset: 1,
    //             color: "rgba(91, 255, 94, 0)",
    //           },
    //         ],
    //       },
    //       borderColor: "#5BFF5E",
    //     },
    //     // borderRadius: [2, 2, 0, 0],
    //   },
    // },
    // {
    //   name: "数据集访问次数",
    //   type: "bar",
    //   barWidth: "14",
    //   yAxisIndex: 1,
    //   data: state.numData,
    //   itemStyle: {
    //     normal: {
    //       color: {
    //         x: 0,
    //         y: 0,
    //         x2: 0,
    //         y2: 1,
    //         colorStops: [
    //           {
    //             offset: 0,
    //             color: "#FF8400",
    //           },
    //           {
    //             offset: 1,
    //             color: "rgba(255, 132, 0, 0)",
    //           },
    //         ],
    //       },
    //       borderColor: "#FF8400",
    //     },
    //     // borderRadius: [2, 2, 0, 0],
    //   },
    // },
  ];
}
if (state.chartData.length > 12) {
  state.charOption.dataZoom = [
    {
      id: 'dataZoomY',
      xAxisIndex: [0, 1],
      show: true, //是否显示滑动条，不影响使用
      type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
      orient: 'horizontal',
      startValue: 0, // 从头开始。
      endValue: 12, // 一次性展示5个
      height: 10,
      bottom: '0%',
      zoomLock: true,
      showDataShadow: false, //是否显示数据阴影 默认auto
      backgroundColor: "rgba(0, 202, 216, 0.1)",
      borderColor: "rgba(0, 202, 216, 0.1)",
      showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
      realtime: true, //是否实时更新
      filterMode: 'filter',
      brushStyle: {
        "color": "#000"
      },
      fillerColor: "rgba(0,255,255,1.00)",//#009999
      handleIcon: "none",
      handleStyle: {
        "color": "rgba(0,255,255,1.00)",
        "borderColor": "rgba(0,255,255,1.00)",
        "borderCap": "round"
      },
      moveHandleSize: 0,
      // maxValueSpan: "2014-02-24",
      // minValueSpan: 4,
      brushSelect: false, //刷选功能，设为false可以防止拖动条长度改变 ************（这是一个坑）
    }, {
      type: 'inside',
      xAxisIndex: [0, 1],
      orient: 'horizontal',
      zoomOnMouseWheel: false,  //滚轮是否触发缩放
      moveOnMouseMove: true,  //鼠标滚轮触发滚动
      moveOnMouseWheel: true
    }
  ];
}
};
const setTimeSelect = (data) => {

state.START_TIME = data[0];
state.END_TIME = data[1];

state.timeSelect = data;
getCharData();
getTableData();
};
const getDayTime = () => {
// 定义一个函数用于格式化日期
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}-00-00`;
}

// 获取当前时间
const currentDate = new Date();
// 格式化当前时间
const formattedCurrentDate = formatDate(currentDate);

// 获取当前时间前一小时的时间
const oneHourAgoDate = new Date(currentDate.getTime() - 1 * 60 * 60 * 1000);
// 格式化前一小时的时间
const formattedOneHourAgoDate = formatDate(oneHourAgoDate);

console.log('当前时间:', formattedCurrentDate);
console.log('当前时间前一小时:', formattedOneHourAgoDate);
state.timeSelect = [formattedOneHourAgoDate, formattedCurrentDate];
state.START_TIME = formattedOneHourAgoDate.slice(0, -6);
state.END_TIME = formattedCurrentDate.slice(0, -6);
getCharData();
getTableData();
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
const onclick1739960380902 = () => {
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
const onsizeChange1740118909910 = (pageSize) => {
// 设置变量值
state.pageInfo.pageSize = pageSize;
};
const oncurrentChange1740118925956 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
};
const onchange1740468700186 = (data,selectOption) => {
// 设置变量值
state.selected = selectOption.label;
// 执行自定义方法
getEl("");
// 设置变量值
state.pageInfo.pageNum = 1;
// 设置变量值
state.pageInfo.pageSize = 5;
// 设置变量值
state.pageInfo.pages = 0;
// 事件交互-请求调用接口
getCharData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const ondateChange1740119125960 = (data) => {
// 执行自定义方法
setTimeSelect(data);
};
// 接口函数
const getCharData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"16c206535cade103f3b67703cd830465","START_DATE":state.START_TIME,"END_DATE":state.END_TIME,"pageNum":"1","pageSize":"1000"},}).then((res) => {
     // 成功的操作
     
state.xData = [];
state.provideData = [];
state.callsData = [];
state.resourcesData = [];
state.visitData = [];
state.pageData = [];
state.systemData = [];
state.numData = [];
if (res?.data?.data && res?.data?.data.length > 0) {
  state.xData = res.data.data.map(item => item.DATA_TIME);
  state.provideData = res.data.data.map(item => item.RES_ACCESS_NUM);
  state.callsData = res.data.data.map(item => item.RES_DOWNLOAD_NUM);
  state.resourcesData = res.data.data.map(item => item.CALL_NUM);
  state.visitData = res.data.data.map(item => item.SERVICE_NUM);
  state.pageData = res.data.data.map(item => item.RES_ACCESS_NUM_PAGE);
  state.systemData = res.data.data.map(item => item.RES_ACCESS_NUM_SYSTEM);
  state.numData = res.data.data.map(item => item.RES_ACCESS_NUM_DATASET);

  state.chartData = res?.data?.data;
  state.isChar = false;
  state.isLoading = '加载中';
  setTimeout(() => {
    state.isChar = true;
    setOption();
  })
  console.log(res, state.xData, state.provideData, state.callsData, state.resourcesData, state.visitData, '列表数据');
} else {
  state.isLoading = '暂无数据';
  state.isChar = false;
  // 修改暂无样式默认样式
  setTimeout(() => {
    getEl();
  })
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => ["1","1000"], () => {
getCharData();
},{
deep: true, // 深度监听
});
// 接口函数
const getTableData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"16c206535cade103f3b67703cd830465","START_DATE":state.START_TIME,"END_DATE":state.END_TIME,"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize},}).then((res) => {
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
watch(() => [state.pageInfo.pageNum,state.pageInfo.pageSize], () => {
getTableData();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-realTimePop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getEl("");
onBeforeMount(() => {
// 执行自定义方法
getDayTime();
});
onMounted(() => {
setPageScale('t-l-c-realTimePop', global.appScaleMode, 'normal');
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

 const tTablex0x6ComputedData = computed(() => _.merge({}, componentState.tTablex0x6.default, componentState.tTablex0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tPaginationBasex0x8ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x8.default, componentState.tPaginationBasex0x8?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tDatePickerx0x15ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x15.default, componentState.tDatePickerx0x15?.[state.screenSize]));

 const tChartDesignx0x16ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x16.default, componentState.tChartDesignx0x16?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRectx0x17ComputedData = computed(() => _.merge({}, componentState.tRectx0x17.default, componentState.tRectx0x17?.[state.screenSize]));

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
tTablex0x6ComputedData,
tTextx0x7ComputedData,
tPaginationBasex0x8ComputedData,
tTextx0x14ComputedData,
tDatePickerx0x15ComputedData,
tChartDesignx0x16ComputedData,
tRectx0x17ComputedData,
onmouseout1739345365135,
onclick1739960380902,
onmouseover1739345261051,
onsizeChange1740118909910,
oncurrentChange1740118925956,
ondateChange1740119125960,
};
},
};