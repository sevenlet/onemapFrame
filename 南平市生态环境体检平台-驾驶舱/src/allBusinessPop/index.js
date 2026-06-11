window.allBusinessPopComponent = {
template: 
`<div id="t-l-c-allBusinessPop" class="t-l-c-allBusinessPop" >` +
`<t-rect id="t-rect-3c13.6e224e776" class="allBusinessPop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-1410.863eda6a7" class="allBusinessPop-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-chart-design v-if="state.isChar === true" id="t-chart-design-3dfc.8ee8cdae9" class="allBusinessPop-t-chart-design-0-2"  :empty-img="tChartDesignx0x2ComputedData.emptyImg" :c-style="tChartDesignx0x2ComputedData.cStyle" :options="replaceCssVariables(filterData(state.charOption, componentPropBindingMap?.['t-chart-design-3dfc.8ee8cdae9']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-chart-design>` +
`<t-rect id="t-rect-95d6.940f2b75f" class="allBusinessPop-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-39ea.51f8eb66d" class="allBusinessPop-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @mouseout="onmouseout1739345365135" @click="onclick1739960380902">` +
`</t-rect>` +
`<t-rect id="t-rect-5094.9a9212dbc" class="allBusinessPop-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle" @mouseover="onmouseover1739345261051">` +
`</t-rect>` +
`<t-text id="t-text-0849.df06c90a6" class="allBusinessPop-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`<t-table id="t-table-2bfb.80f83ef5f" class="allBusinessPop-t-table-0-7"  :height="tTablex0x7ComputedData.height" :stripe="tTablex0x7ComputedData.stripe" :border="tTablex0x7ComputedData.border" :auto-scroll="tTablex0x7ComputedData.autoScroll" :speed="tTablex0x7ComputedData.speed" :columns="tTablex0x7ComputedData.columns" :data="replaceCssVariables(filterData(state.tableData, componentPropBindingMap?.['t-table-2bfb.80f83ef5f']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x7ComputedData.defaultSort" :c-style="tTablex0x7ComputedData.cStyle" :highlight-current-row="tTablex0x7ComputedData.highlightCurrentRow">` +
`</t-table>` +
`<t-select id="t-select-3442.12122bd7c" class="allBusinessPop-t-select-0-8"  :active-value="replaceCssVariables(filterData(state.BUSINESS_TYPE, componentPropBindingMap?.['t-select-3442.12122bd7c']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.typeData, componentPropBindingMap?.['t-select-3442.12122bd7c']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x8ComputedData.alias" :multiple="tSelectx0x8ComputedData.multiple" :placeholder="tSelectx0x8ComputedData.placeholder" :clearable="tSelectx0x8ComputedData.clearable" :disabled="tSelectx0x8ComputedData.disabled" :name="tSelectx0x8ComputedData.name" :autocomplete="tSelectx0x8ComputedData.autocomplete" :filterable="tSelectx0x8ComputedData.filterable" :no-match-text="tSelectx0x8ComputedData.no-match-text" :no-data-text="tSelectx0x8ComputedData.no-data-text" :c-style="tSelectx0x8ComputedData.cStyle" @change="onchange1741749346956">` +
`</t-select>` +
`<t-text id="t-text-8530.ce6ab34d4" class="allBusinessPop-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-511b.4aaf9d895" class="allBusinessPop-t-text-0-10"  :label="tTextx0x10ComputedData.label" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle">` +
`</t-text>` +
`<t-date-picker id="t-date-picker-0fc0.7822c4123" class="allBusinessPop-t-date-picker-0-11"  :placeholder="tDatePickerx0x11ComputedData.placeholder" :start-placeholder="tDatePickerx0x11ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x11ComputedData.endPlaceholder" :type="tDatePickerx0x11ComputedData.type" :clearable="tDatePickerx0x11ComputedData.clearable" :range-separator="tDatePickerx0x11ComputedData.rangeSeparator" :default-date="tDatePickerx0x11ComputedData.default-date" :separator="tDatePickerx0x11ComputedData.separator" :c-style="tDatePickerx0x11ComputedData.cStyle" :is-disabled-front="tDatePickerx0x11ComputedData.isDisabledFront" @date-change="ondateChange1741749462428">` +
`</t-date-picker>` +
`<t-pagination-base id="t-pagination-base-045a.456414f85" class="allBusinessPop-t-pagination-base-0-12"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-045a.456414f85']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x12ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-045a.456414f85']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x12ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-045a.456414f85']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x12ComputedData.layout" :page-sizes="tPaginationBasex0x12ComputedData.pageSizes" :disabled="tPaginationBasex0x12ComputedData.disabled" :c-style="tPaginationBasex0x12ComputedData.cStyle" @size-change="onsizeChange1740537189541" @current-change="oncurrentChange1740537217128">` +
`</t-pagination-base>` +
`<t-select id="t-select-86fd.e5da5a62a" class="allBusinessPop-t-select-0-13"  :active-value="replaceCssVariables(filterData(state.SOURCE, componentPropBindingMap?.['t-select-86fd.e5da5a62a']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.sectionData, componentPropBindingMap?.['t-select-86fd.e5da5a62a']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x13ComputedData.alias" :multiple="tSelectx0x13ComputedData.multiple" :placeholder="tSelectx0x13ComputedData.placeholder" :clearable="tSelectx0x13ComputedData.clearable" :disabled="tSelectx0x13ComputedData.disabled" :name="tSelectx0x13ComputedData.name" :autocomplete="tSelectx0x13ComputedData.autocomplete" :filterable="tSelectx0x13ComputedData.filterable" :no-match-text="tSelectx0x13ComputedData.no-match-text" :no-data-text="tSelectx0x13ComputedData.no-data-text" :c-style="tSelectx0x13ComputedData.cStyle" @change="onchange1741749321494">` +
`</t-select>` +
`<t-text id="t-text-bb5f.738749bea" class="allBusinessPop-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle">` +
`</t-text>` +
`<t-rect v-if="state.isChar === false" id="t-rect-1a81.29d4f276f" class="allBusinessPop-t-rect-0-15"  :tip="tRectx0x15ComputedData.tip" :label="replaceCssVariables(filterData(state.isLoading, componentPropBindingMap?.['t-rect-1a81.29d4f276f']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x15ComputedData.active" :c-style="tRectx0x15ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-cfa2.bac27825d" class="allBusinessPop-t-text-0-16"  :label="replaceCssVariables(filterData(global.toDayTime, componentPropBindingMap?.['t-text-cfa2.bac27825d']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x16ComputedData.editable" :c-style="tTextx0x16ComputedData.cStyle">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-3c13.6e224e776":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1410.863eda6a7":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-3dfc.8ee8cdae9":{"attributeName":"tChartDesignx0x2","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-rect-95d6.940f2b75f":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-39ea.51f8eb66d":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5094.9a9212dbc":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-0849.df06c90a6":{"attributeName":"tTextx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-table-2bfb.80f83ef5f":{"attributeName":"tTablex0x7","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]},"highlightCurrentRow":{"filters":[]}},"t-select-3442.12122bd7c":{"attributeName":"tSelectx0x8","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8530.ce6ab34d4":{"attributeName":"tTextx0x9","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-511b.4aaf9d895":{"attributeName":"tTextx0x10","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-0fc0.7822c4123":{"attributeName":"tDatePickerx0x11","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]}},"t-pagination-base-045a.456414f85":{"attributeName":"tPaginationBasex0x12","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-select-86fd.e5da5a62a":{"attributeName":"tSelectx0x13","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-text-bb5f.738749bea":{"attributeName":"tTextx0x14","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1a81.29d4f276f":{"attributeName":"tRectx0x15","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-cfa2.bac27825d":{"attributeName":"tTextx0x16","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   isLoading: "加载中...",
   isChar: false,
   xData: [],
   callsData: [],
   provideData: [],
   START_TIME: "",
   END_TIME: "",
   isClose: false,
   charOption: "",
   timeSelect: [],
   SOURCE: "",
   BUSINESS_TYPE: "",
   DATA_TYPE: "",
   sectionData: [],
   typeData: [],
   dateData: [],
   pageInfo: {"pageNum":1,"pageSize":5,"total":0,"pages":0},
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
            default: {"width":"1680px","height":"915px","position":"unset","left":"120px","top":"83px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1680px","height":"915px","position":"unset","left":"120px","top":"83px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
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
tChartDesignx0x2: {
defaultStyle: {
            default: {"height":"348px","width":"1584px","left":"168px","top":"191px","position":"unset"},
            
            },
 default: { 
 
emptyImg:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"348px","width":"1584px","left":"168px","top":"191px","position":"unset"}}},
options:"", 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"1632px","height":"64px","position":"unset","left":"146px","top":"582px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"var(--t-full-service-dia-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1632px","height":"64px","position":"unset","left":"146px","top":"582px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"var(--t-full-service-dia-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"83px","animationName":"","cursor":"pointer","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"83px","animationName":"","cursor":"pointer","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tRectx0x5: {
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
tTextx0x6: {
defaultStyle: {
            default: {"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"108px","left":"198px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"},
            
            },
 default: { 
 
label:"全业务覆盖",
editable:false,
cStyle:{"wrapper":{"default":{"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"108px","left":"198px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"}}}, 
 },
},
tTablex0x7: {
defaultStyle: {
            default: {"width":"1632px","height":"252px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"},
            
            },
 default: { 
 
height:"252",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"序号","type":"default","key":"RN","stateKey":"","width":"80PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"}},"infoPosition":"left","infoStyle":{"fontStyle":{"color":"rgba(255, 255, 255, 1)"}}},{"label":"业务大类","type":"default","key":"BUSINESS_NAME","stateKey":"","width":"210PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"业务小类","type":"default","key":"BUSINESS_SUB_NAME","stateKey":"","width":"210PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"数据名称","type":"default","key":"DATA_NAME","stateKey":"","width":"260PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"来源渠道","type":"default","key":"SOURCE_NAME","stateKey":"","width":"156PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"数据条数","type":"default","key":"DATA_TOTAL","stateKey":"","width":"109PX","minWidth":"","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0","marginRight":"0PX"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right","infoStyle":{"fontStyle":{"padding":"","margin":""}}},{"label":"来源部门","type":"default","key":"DEPT_NAME","stateKey":"","width":"150PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"来源系统","type":"default","key":"SYSTEM_NAME","stateKey":"","width":"250PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"来源厂商","type":"default","key":"MANUFACT_NAME","stateKey":"","width":"200PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1632px","height":"252px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"}},"headerCell":{"default":{"borderBottom":"2px none rgba(26,27,31,1)","borderLeft":"1px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","width":"418px","height":"28px","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"7px","paddingRight":"0px"}},"bodyCell":{"default":{"backgroundColor":"","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","height":"32px","paddingTop":"7px","paddingBottom":"7px","fontSize":"16px","paddingLeft":"7px","paddingRight":"0px","lineHeight":"24px"},"hover":{"backgroundColor":"rgba(48, 72, 173, 0)","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","lineHeight":"24px","height":"32px"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(218, 24, 24, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"headerRowWrapper":{"default":{"backgroundColor":"rgba(223, 44, 44, 0)","paddingLeft":"0px","paddingRight":"0px","paddingTop":"0px","backgroundImage":"var(--t-full-service-dia-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"28px"}},"rowWrapper":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","height":"32px","backgroundColor":"var(--table-bm-color)"},"hover":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"","height":"32px","box-shadow":"rgba(0, 255, 246, 1) 0px 0px 0px 1px inset"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(59, 182, 151, 0)","backgroundImage":"unset !important","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none "},"hover":{"borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"bodyCellInner":{"default":{"height":"20px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"highlightRow":{"default":{"height":"auto"}}},
highlightCurrentRow:false, 
 },
},
tSelectx0x8: {
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
tTextx0x9: {
defaultStyle: {
            default: {"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"600px","left":"168px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"时间区间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"600px","left":"168px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""}}}, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"602px","left":"669px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"业务类别",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"602px","left":"669px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""}}}, 
 },
},
tDatePickerx0x11: {
defaultStyle: {
            default: {"width":"390px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","position":"unset","left":"213px","top":"594px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:false,
rangeSeparator:"-",
'default-date':"2023",
separator:"-",
cStyle:{"wrapper":{"default":{"width":"390px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","position":"unset","left":"213px","top":"594px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},"hover":{"fontSize":"14px","backgroundColor":"var(--t-select-fill-bg-hover)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"}},"inputWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgba(20,112,204,0)","borderTop":"1px none rgba(20,112,204,0)","borderRight":"1px none rgba(20,112,204,0)","borderBottom":"1px none rgba(20,112,204,0)","color":"var(--t-text)","paddingLeft":"8px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"24px"}},"inputDateIcons":{"default":{"backgroundColor":"var(--business-select-border)","color":"rgba(121, 190, 255, 0)","backgroundImage":"","-webkit-mask-image":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/date-picker.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"50% 50%","position":"absolute","right":"-70%","top":"0px","pointerEvents":"none","marginRight":"280px","marginTop":"5px"}},"splitLine":{"default":{"color":"var(--t-text)","backgroundColor":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px solid rgba(20,112,204,0.3)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""}},"selCurrentDateWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)"},"hover":{"color":"#fff"}},"currentDateWrapper":{"active":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)"},"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","color":"var(--t-text)"}},"todayWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","color":"var(--t-text)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"dateHeaderWrapper":{"default":{"color":"var(--t-text)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":""},"hover":{"backgroundColor":"rgba(26, 27, 31, 0)","color":"var(--t-text)"}},"weekWrapper":{"default":{"color":"var(--t-text)","fontWeight":"500","backgroundColor":"","fontFamily":"微软雅黑"}},"currentWeekWrapper":{"default":{"color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundColor":""}},"timePanelNumWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},"hover":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"rgba(23, 62, 228, 0)"}},"okWrapper":{"default":{"borderLeft":"1px solid #00BFFF","borderTop":"1px solid #00BFFF","borderRight":"1px solid #00BFFF","borderBottom":"1px solid #00BFFF","color":"#00BFFF","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"backgroundColor":"rgba(74, 228, 23, 0)"}},"timePanelWrapper":{"default":{"borderLeft":"1px solid rgba(0,191,255,0.5)","borderTop":"1px solid rgba(0,191,255,0.5)","borderRight":"1px solid rgba(0,191,255,0.5)","borderBottom":"1px solid rgba(0,191,255,0.5)","backgroundColor":"#0C478A","color":"#fff","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 10px 0px "},"active":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","color":"#00FFFF"}},"textBtnWrapper":{"default":{"color":"rgba(255, 255, 255, 0.6)","backgroundColor":""}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--t-select-fill-bg-hover)"}},"operatorArrow":{"default":{"backgroundColor":"","color":"var(--t-text)"}},"dateHeaderMonthBtn":{"default":{"color":"var(--t-text)"}},"dateHeaderMonthBtnWrapper":{"default":{"color":"var(--t-text)"}},"dateHeaderYearBtnWrapper":{"default":{"color":"var(--t-text)"}}},
isDisabledFront:true, 
 },
},
tPaginationBasex0x12: {
defaultStyle: {
            default: {"width":"1632px","height":"38px","position":"unset","left":"144px","top":"925px","color":"","animationName":"","display":"flex","justifyContent":"space-between","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
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
cStyle:{"wrapper":{"default":{"width":"1632px","height":"38px","position":"unset","left":"144px","top":"925px","color":"","animationName":"","display":"flex","justifyContent":"space-between","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"pagerItem":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","lineHeight":"32px","borderLeft":"1px none #366B92","borderTop":"1px none #366B92","borderRight":"1px none #366B92","borderBottom":"1px none #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":"var(--business-select-item-bg)"},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"var(--t-button-bg)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"var(--t-color-text-green)","marginLeft":"0px","marginRight":"0px","backgroundColor":"var(--business-select-drop-bg)"},"hover":{"color":"#FFFFFF","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"more":{"default":{"color":"var(--t-color-text-green)"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"var(--t-color-text-green)","paddingRight":"30px","paddingLeft":"0px","fontSize":"14px","marginRight":"0px","marginLeft":"-37px"}},"sizesWrapper":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","marginRight":"10px","marginLeft":"900px"}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)","backgroundColor":""},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--t-color-text-green)","backgroundColor":""}},"jumpInput":{"default":{"color":"var(--t-color-text-green)","backgroundColor":"var(--business-select-item-bg)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"sizesDropdownItem":{"default":{"color":"rgba(255, 255, 255, 0.9)","backgroundColor":"","borderLeft":"1px none #00828A","borderTop":"1px none #00828A","borderRight":"1px none #00828A","borderBottom":"1px none #00828A"},"active":{"backgroundColor":"var(--business-select-item-bg)","color":"var(--business-text-hover)"},"hover":{"color":"var(--business-text-hover)","backgroundColor":"var(--business-select-item-bg)"}}}, 
 },
},
tSelectx0x13: {
defaultStyle: {
            default: {"width":"268px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","position":"unset","left":"1115px","top":"595px","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"268px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","position":"unset","left":"1115px","top":"595px","animationName":""},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","box-shadow":"var(--business-select-shadow) 0px 0px 0px 2px "}},"placeholder":{"default":{"color":"var(--t-text)"}},"arrow":{"default":{"color":"var(--t-text)","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px","right":"0","position":"relative","left":"7px"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","width":"268px","paddingLeft":"6px","paddingRight":"6px"}},"dropdownItem":{"default":{"fontSize":"14px","color":"var(--t-text)","height":"28px","lineHeight":"28px","width":"254px","marginBottom":"4px","paddingLeft":"8px","paddingRight":"8px"},"hover":{"color":"var(--t-text)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"disabledWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"601px","left":"1047px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"来源渠道",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"601px","left":"1047px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x15: {
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
tTextx0x16: {
defaultStyle: {
            default: {"width":"132px","height":"18px","color":"rgba(255, 255, 255, 0.8)","lineHeight":"18px","top":"112px","left":"1588px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"132px","height":"18px","color":"rgba(255, 255, 255, 0.8)","lineHeight":"18px","top":"112px","left":"1588px","position":"unset","animationName":""}}}, 
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
      shadowStyle:{
        opacity:0.1,
      },
    },
    textStyle: {
      color: tooltipColor,
      fontSize: 14,
    },
    confine: true, // 超出范围
    backgroundColor: tooltipBgc, //设置背景颜色
    borderColor: "#6CFFFA",
    borderWidth: 0,
    formatter: "{b}<br>{a}：{c}个<br>{a1}：{c1}万条",
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
    left: "2%",
    right: "4%",
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
      name: "业务类别（个）",
      splitNumber: 5,
      type: "value",
      minInterval: 1,
      nameTextStyle: {
        color: textColor,
        fontSize: 16,
        align: "center",
        padding: [0, 0, 0, 90],
      },
      axisLabel: {
        show: true,
        fontSize: 14,
        color: textColor,
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
      name: "业务量（万条）",
      splitNumber: 5,
      type: "value",
      nameTextStyle: {
        color: textColor,
        fontSize: 16,
        align: "center",
        padding: [0, 10, 0, 0],
      },
      axisLabel: {
        formatter: "{value}",
        color: textColor,
        textStyle: {
          fontSize: 14,
          color: textColor,
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
          color: splitColor,
          type: "dashed",
        },
      },
    }
  ],
  series: [
    {
      name: "业务类别",
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
      name: "业务量",
      type: "line",
      yAxisIndex: 1, // 与第二个 y 轴关联
      showSymbol: false,
      symbolSize: 8,
      smooth: true,
      symbol: "circle",
      lineStyle: {
        normal: {
          color: "#FFE592",
        },
      },
      itemStyle: {
        color: "#FFE592",
        borderColor: "#FFE592",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "top",
        textStyle: {
          fontSize: 12,
          color: "rgba(255,255,255,0.8)",
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(255, 229, 146, 0.3)",
              },
              {
                offset: 1,
                color: "rgba(255, 229, 146, 0)",
              },
            ],
            false
          ),
        },
      },
      data: state.provideData, // 折线图的数据
    },
  ],
};
};
const setTimeSelect = (data) => {
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
clearLoop("","","");
};
const onmouseover1739345261051 = () => {

// 显示元素并加动画
document.getElementById('t-rect-39ea.51f8eb66d').style.display = 'block';
runAnimation('t-rect-39ea.51f8eb66d', [""]);

// 隐藏元素并加动画
runAnimation('t-rect-5094.9a9212dbc', [""], 'none');
};
const onsizeChange1740537189541 = (pageSize) => {
// 设置变量值
state.pageInfo.pageSize = pageSize;
};
const oncurrentChange1740537217128 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
};
const ondateChange1741749462428 = (data) => {
// 执行自定义方法
setTimeSelect(data);
};
const onchange1741749346956 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.BUSINESS_TYPE = value;
};
const onchange1741749321494 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.SOURCE = value;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getUpdateData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"UPDATE_FREQUENCY"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"UPDATE_FREQUENCY"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"UPDATE_FREQUENCY"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getUpdateData'] = res.data;
                
     if (res?.data?.data) {
  state.dateData= [];
  state.dateData = res.data.data;
  state.dateData.unshift({
    DICTIONARY_CODE: "",
    DICTIONARY_NAME: "全部",
    EXT1: "NULL",
    EXT2: "NULL",
    EXT3: "NULL",
    EXT4: "NULL"
  })

} else {
  state.dateData = [];
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
 getCharData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"END_TIME":"","START_TIME":"","interfaceId":"93e50ffdee8089e6de54e18cafcf9123"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"END_TIME":"","START_TIME":"","interfaceId":"93e50ffdee8089e6de54e18cafcf9123"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"END_TIME":"","START_TIME":"","interfaceId":"93e50ffdee8089e6de54e18cafcf9123"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCharData'] = res.data;
                
     
if (res?.data?.data && res?.data?.data.length >0) {
  state.xData = [];
  state.callsData = [];
  state.provideData = [];
  const data = res.data.data;
  state.xData = data.map(item => item.BUSINESS_NAME);
  state.provideData = data.map(item => item.DATA_TOTAL);
  state.callsData = data.map(item => item.BUSINESS_COUNT);
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
},
              },
// 接口函数
 getCodeData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"BUSINESS_TYPE"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"BUSINESS_TYPE"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"BUSINESS_TYPE"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCodeData'] = res.data;
                
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
},
              },
// 接口函数
 getSourceData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"DATA_SOURCE"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"DATA_SOURCE"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"DATA_SOURCE"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getSourceData'] = res.data;
                
     if (res?.data?.data) {
  state.sectionData= [];
  state.sectionData = res.data.data;
  state.sectionData.unshift({
    DICTIONARY_CODE: "",
    DICTIONARY_NAME: "全部",
    EXT1: "NULL",
    EXT2: "NULL",
    EXT3: "NULL",
    EXT4: "NULL"
  })
  console.log(res, '业务类别');
} else {
  state.sectionData = [];
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
 getTableData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"END_TIME":"state.END_TIME","START_TIME":"state.START_TIME","interfaceId":"ffab98c383cb537330dd35611f4fc3ce","DATA_TYPE":"state.DATA_TYPE","SOURCE":"state.SOURCE","BUSINESS_TYPE":"state.BUSINESS_TYPE","pageNum":"state.pageInfo.pageNum","pageSize":"state.pageInfo.pageSize"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"interfaceId":"ffab98c383cb537330dd35611f4fc3ce","DATA_TYPE":state.DATA_TYPE,"SOURCE":state.SOURCE,"BUSINESS_TYPE":state.BUSINESS_TYPE,"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"interfaceId":"ffab98c383cb537330dd35611f4fc3ce","DATA_TYPE":state.DATA_TYPE,"SOURCE":state.SOURCE,"BUSINESS_TYPE":state.BUSINESS_TYPE,"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTableData'] = res.data;
                
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
},
              },
};
// 监听变量，调取接口
watch(() => ["",""], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCharData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [state.END_TIME,state.START_TIME,state.DATA_TYPE,state.SOURCE,state.BUSINESS_TYPE,state.pageInfo.pageNum,state.pageInfo.pageSize], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getTableData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-allBusinessPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setOption("","","");
// 执行自定义方法
getEl();
onMounted(() => {
setPageScale('t-l-c-allBusinessPop', global.appScaleMode, 'normal');
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

 const tChartDesignx0x2ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x2.default, componentState.tChartDesignx0x2?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTablex0x7ComputedData = computed(() => _.merge({}, componentState.tTablex0x7.default, componentState.tTablex0x7?.[state.screenSize]));

 const tSelectx0x8ComputedData = computed(() => _.merge({}, componentState.tSelectx0x8.default, componentState.tSelectx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tDatePickerx0x11ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x11.default, componentState.tDatePickerx0x11?.[state.screenSize]));

 const tPaginationBasex0x12ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x12.default, componentState.tPaginationBasex0x12?.[state.screenSize]));

 const tSelectx0x13ComputedData = computed(() => _.merge({}, componentState.tSelectx0x13.default, componentState.tSelectx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tRectx0x15ComputedData = computed(() => _.merge({}, componentState.tRectx0x15.default, componentState.tRectx0x15?.[state.screenSize]));

 const tTextx0x16ComputedData = computed(() => _.merge({}, componentState.tTextx0x16.default, componentState.tTextx0x16?.[state.screenSize]));

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
tRectx0x1ComputedData,
tChartDesignx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tRectx0x5ComputedData,
tTextx0x6ComputedData,
tTablex0x7ComputedData,
tSelectx0x8ComputedData,
tTextx0x9ComputedData,
tTextx0x10ComputedData,
tDatePickerx0x11ComputedData,
tPaginationBasex0x12ComputedData,
tSelectx0x13ComputedData,
tTextx0x14ComputedData,
tRectx0x15ComputedData,
tTextx0x16ComputedData,
onmouseout1739345365135,
onclick1739960380902,
onmouseover1739345261051,
onchange1741749346956,
ondateChange1741749462428,
onsizeChange1740537189541,
oncurrentChange1740537217128,
onchange1741749321494,
};
},
};