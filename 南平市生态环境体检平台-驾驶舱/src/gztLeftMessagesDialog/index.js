window.gztLeftMessagesDialogComponent = {
template: 
`<div id="t-l-c-gztLeftMessagesDialog" class="t-l-c-gztLeftMessagesDialog" >` +
`<t-rect id="t-rect-3c13.6e224e776" class="gztLeftMessagesDialog-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-pagination-base v-if="state.page.total !== 0" id="t-pagination-base-22a7.6eaadffb2" class="gztLeftMessagesDialog-t-pagination-base-0-1"  :total="replaceCssVariables(filterData(state.page.total, componentPropBindingMap?.['t-pagination-base-22a7.6eaadffb2']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x1ComputedData.small" :page-size="replaceCssVariables(filterData(state.page.pageSize, componentPropBindingMap?.['t-pagination-base-22a7.6eaadffb2']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x1ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.page.pageNum, componentPropBindingMap?.['t-pagination-base-22a7.6eaadffb2']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x1ComputedData.layout" :page-sizes="tPaginationBasex0x1ComputedData.pageSizes" :disabled="tPaginationBasex0x1ComputedData.disabled" :c-style="tPaginationBasex0x1ComputedData.cStyle" @current-change="oncurrentChange1774514788816">` +
`</t-pagination-base>` +
`<t-rect id="t-rect-39ea.51f8eb66d" class="gztLeftMessagesDialog-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle" @mouseout="onmouseout1739345365135" @click="onclick1739960380902">` +
`</t-rect>` +
`<t-rect id="t-rect-5094.9a9212dbc" class="gztLeftMessagesDialog-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @mouseover="onmouseover1739345261051">` +
`</t-rect>` +
`<t-text id="t-text-0849.df06c90a6" class="gztLeftMessagesDialog-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-246d.c2acefde9" class="gztLeftMessagesDialog-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-component id="t-component-4f80.b363f8298" class="gztLeftMessagesDialog-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :loading="tComponentx0x6ComputedData.loading" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName" :page-id="tComponentx0x6ComputedData.pageId" :page-code="tComponentx0x6ComputedData.pageCode">` +
`</t-component>` +
`<t-text-common id="t-text-common-9bcb.b781ccb6a" class="gztLeftMessagesDialog-t-text-common-0-7"  :label="tTextCommonx0x7ComputedData.label" :editable="tTextCommonx0x7ComputedData.editable" :c-style="tTextCommonx0x7ComputedData.cStyle">` +
`</t-text-common>` +
`<t-select id="t-select-cd8d.1fdf35ae" class="gztLeftMessagesDialog-t-select-0-8"  :active-value="tSelectx0x8ComputedData.activeValue" :options="replaceCssVariables(filterData(state.codeNtypeOptions, componentPropBindingMap?.['t-select-cd8d.1fdf35ae']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x8ComputedData.alias" :multiple="tSelectx0x8ComputedData.multiple" :placeholder="tSelectx0x8ComputedData.placeholder" :clearable="tSelectx0x8ComputedData.clearable" :disabled="tSelectx0x8ComputedData.disabled" :name="tSelectx0x8ComputedData.name" :autocomplete="tSelectx0x8ComputedData.autocomplete" :filterable="tSelectx0x8ComputedData.filterable" :no-match-text="tSelectx0x8ComputedData.no-match-text" :no-data-text="tSelectx0x8ComputedData.no-data-text" :c-style="tSelectx0x8ComputedData.cStyle" :scrollbar-thumb-color="tSelectx0x8ComputedData.scrollbarThumbColor" :scrollbar-track-color="tSelectx0x8ComputedData.scrollbarTrackColor" :scrollbar-width="tSelectx0x8ComputedData.scrollbarWidth" @change="onchange1774494577302">` +
`</t-select>` +
`<t-tabs-base id="t-tabs-base-a6b5.84ed1ebae" class="gztLeftMessagesDialog-t-tabs-base-0-9"  :data="replaceCssVariables(filterData(state.tabData, componentPropBindingMap?.['t-tabs-base-a6b5.84ed1ebae']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x9ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.tabsActiveValue, componentPropBindingMap?.['t-tabs-base-a6b5.84ed1ebae']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x9ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x9ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x9ComputedData.alias" :c-style="tTabsBasex0x9ComputedData.cStyle" @tab-click="ontabClick1774405124853_0_0">` +
`</t-tabs-base>` +
`<t-rect id="t-rect-42e1.b1266983b" class="gztLeftMessagesDialog-t-rect-0-10"  :tip="tRectx0x10ComputedData.tip" :label="tRectx0x10ComputedData.label" :active="tRectx0x10ComputedData.active" :c-style="tRectx0x10ComputedData.cStyle" @click="onclick1774420239400">` +
`</t-rect>` +
`<t-rect id="t-rect-bd8d.396a02132" class="gztLeftMessagesDialog-t-rect-0-11"  :tip="tRectx0x11ComputedData.tip" :label="tRectx0x11ComputedData.label" :active="tRectx0x11ComputedData.active" :c-style="tRectx0x11ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-ebce.0a696110f" class="gztLeftMessagesDialog-t-rect-0-12"  :tip="tRectx0x12ComputedData.tip" :label="tRectx0x12ComputedData.label" :active="tRectx0x12ComputedData.active" :c-style="tRectx0x12ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-011c.179ac35fe" class="gztLeftMessagesDialog-t-rect-0-13"  :tip="tRectx0x13ComputedData.tip" :label="tRectx0x13ComputedData.label" :active="tRectx0x13ComputedData.active" :c-style="tRectx0x13ComputedData.cStyle">` +
`</t-rect>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-3c13.6e224e776":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-pagination-base-22a7.6eaadffb2":{"attributeName":"tPaginationBasex0x1","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-39ea.51f8eb66d":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5094.9a9212dbc":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-0849.df06c90a6":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-246d.c2acefde9":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-4f80.b363f8298":{"attributeName":"tComponentx0x6","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-9bcb.b781ccb6a":{"attributeName":"tTextCommonx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-cd8d.1fdf35ae":{"attributeName":"tSelectx0x8","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"scrollbarThumbColor":{"filters":[]},"scrollbarTrackColor":{"filters":[]},"scrollbarWidth":{"filters":[]}},"t-tabs-base-a6b5.84ed1ebae":{"attributeName":"tTabsBasex0x9","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-42e1.b1266983b":{"attributeName":"tRectx0x10","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-bd8d.396a02132":{"attributeName":"tRectx0x11","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-ebce.0a696110f":{"attributeName":"tRectx0x12","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-011c.179ac35fe":{"attributeName":"tRectx0x13","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   page: {"pageNum":1,"pageSize":5,"total":0},
   params: {"pubTime":"","startTime":"","endTime":"","codeNtype":"","ntitle":"","orderBy":""},
   codeNtypeOptions: [{"label":"全部","value":"","disabled":false},{"value":"1","label":"常规","disabled":false},{"value":"2","label":"重要","disabled":false}],
   listData: [],
   tabData: [{"label":"今日","value":"today"},{"label":"近7天","value":"last7days"},{"label":"近30天","value":"last30days"}],
   tabsActiveValue: "today",
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
            default: {"width":"1400px","height":"915px","position":"unset","left":"263px","top":"97px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1400px","height":"915px","position":"unset","left":"263px","top":"97px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tPaginationBasex0x1: {
defaultStyle: {
            default: {"width":"1105px","height":"37px","position":"unset","left":"522px","top":"953px","justifyContent":"flex-end","alignItems":"center","flexDirection":"row","display":"flex","marginRight":"20px","paddingRight":"0px","animationName":""},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:5,
pagerCount:5,
currentPage:1,
layout:" total,prev, pager, next",
pageSizes:[5,10,20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"1105px","height":"37px","position":"unset","left":"522px","top":"953px","justifyContent":"flex-end","alignItems":"center","flexDirection":"row","display":"flex","marginRight":"20px","paddingRight":"0px","animationName":""}},"jumpInput":{"default":{"color":"var(--t-pagination-font-color)","background":"var(--t-input-background-color)","backgroundClip":"unset","border":"auto !important","borderDirection":"all","borderLeft":"1px Solid #366B92","borderTop":"1px Solid #366B92","borderRight":"1px Solid #366B92","borderBottom":"1px Solid #366B92","fillType":"color","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","fontSize":"12px"},"active":{"color":"var(--t-pagination-active-color)","background":"unset","backgroundClip":"unset"},"hover":{"color":"var(--t-pagination-hover-color)","background":"unset","backgroundClip":"unset","borderTop":"1px Solid var(--t-pager-hover-border-color)","borderLeft":"1px Solid var(--t-pager-hover-border-color)","borderBottom":"1px Solid var(--t-pager-hover-border-color)","borderRight":"1px Solid var(--t-pager-hover-border-color)","borderDirection":"all"}},"pagerItem":{"default":{"color":"#fff","background":"var(--t-pagination-button-bg-color)","backgroundClip":"unset","fillType":"color","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","border":"auto !important","borderDirection":"all","borderLeft":"1px solid #366B92","borderTop":"1px solid #366B92","borderRight":"1px solid #366B92","borderBottom":"1px solid #366B92","fontSize":"12px"},"active":{"fillType":"color","color":"var(--common-white1)","backgroundClip":"unset","background":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0.6246480855855856%,rgba(61, 126, 255, 0.8) 100%)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"},"hover":{"color":"var(--common-white1)","backgroundClip":"unset","borderTop":"1px solid var(--theme-btn-hover)","borderLeft":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderDirection":"all","background":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0.6246480855855856%,rgba(61, 126, 255, 0.8) 100%)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"jumpWrapper":{"default":{"color":"var(--t-pagination-font-color)","background":"unset","backgroundClip":"unset","fontSize":"12px"}},"sizesWrapper":{"default":{"color":"var(--t-pagination-font-color)","background":"unset","backgroundClip":"unset","fontSize":"12px"},"active":{"color":"var(--t-pagination-active-color)","background":"unset","backgroundClip":"unset"},"hover":{"color":"var(--t-pagination-hover-color)","background":"unset","backgroundClip":"unset"}},"total":{"default":{"color":"#C9E7F5","background":"unset","backgroundClip":"unset","fontSize":"12px","marginRight":"20px"}},"more":{"default":{"color":"var(--t-pagination-font-color)","background":"unset","backgroundClip":"unset","border":"auto !important","borderDirection":"all","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","borderLeft":"1px Solid #366B92","borderTop":"1px Solid #366B92","borderRight":"1px Solid #366B92","borderBottom":"1px Solid #366B92","fontSize":"12px"},"active":{"color":"var(--t-pagination-active-color)","background":"unset","backgroundClip":"unset"},"hover":{"color":"var(--t-pagination-hover-color)","background":"unset","backgroundClip":"unset","borderTop":"1px Solid var(--t-pager-hover-border-color)","borderLeft":"1px Solid var(--t-pager-hover-border-color)","borderBottom":"1px Solid var(--t-pager-hover-border-color)","borderRight":"1px Solid var(--t-pager-hover-border-color)","borderDirection":"all"}},"sizesInput":{"default":{"color":"var(--t-pagination-font-color)","background":"unset","backgroundClip":"unset","border":"auto !important","borderDirection":"all","borderLeft":"1px Solid #366B92","borderTop":"1px Solid #366B92","borderRight":"1px Solid #366B92","borderBottom":"1px Solid #366B92","fontSize":"12px"},"active":{"color":"var(--t-pagination-active-color)","background":"unset","backgroundClip":"unset"},"hover":{"color":"var(--t-pagination-hover-color)","background":"unset","backgroundClip":"unset","borderTop":"1px Solid var(--t-pager-hover-border-color)","borderLeft":"1px Solid var(--t-pager-hover-border-color)","borderBottom":"1px Solid var(--t-pager-hover-border-color)","borderRight":"1px Solid var(--t-pager-hover-border-color)","borderDirection":"all"}},"pager":{"default":{"color":"#fff","background":"unset","backgroundClip":"unset","border":"auto !important","borderDirection":"all","borderLeft":"1px solid var(--theme-btn-default)","borderTop":"1px solid var(--theme-btn-default)","borderRight":"1px solid var(--theme-btn-default)","borderBottom":"1px solid var(--theme-btn-default)","backgroundColor":"#1B4293","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"color":"var(--t-pagination-active-color)","background":"unset","backgroundClip":"unset"},"hover":{"color":"var(--common-white1)","background":"unset","backgroundClip":"unset","borderTop":"1px Solid var(--t-pager-hover-border-color)","borderLeft":"1px Solid var(--t-pager-hover-border-color)","borderBottom":"1px Solid var(--t-pager-hover-border-color)","borderRight":"1px Solid var(--t-pager-hover-border-color)","borderDirection":"all","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"sizesDropdownItem":{"default":{"color":"var(--t-select-dropdown-font-color)","background":"unset","backgroundClip":"unset","fontSize":"12px","fillType":"color"},"active":{"color":"var(--t-select-dropdown-active-font-color)","background":"unset","backgroundClip":"unset","fillType":"color"},"hover":{"color":"var(--t-select-dropdown-hover-font-color)","background":"unset","backgroundClip":"unset","fillType":"color"}},"sizesDropdownWrapper":{"default":{"border":"auto !important","borderDirection":"all","borderLeft":"1px Solid #366B92","borderTop":"1px Solid #366B92","borderRight":"1px Solid #366B92","borderBottom":"1px Solid #366B92","background":"var(--t-select-popper-bg-color)","fillType":"color","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"55.76516544117647px","height":"64.08334455818965px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1608.4414116640637px","top":"97.1700480097652px","animationName":"","cursor":"pointer","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"55.76516544117647px","height":"64.08334455818965px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1608.4414116640637px","top":"97.1700480097652px","animationName":"","cursor":"pointer","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"55.76516544117647px","height":"64.08334455818965px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-mr)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1608.4414116640637px","top":"97.1700480097652px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"55.76516544117647px","height":"64.08334455818965px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-mr)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1608.4414116640637px","top":"97.1700480097652px","cursor":"pointer"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"122px","left":"341px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"},
            
            },
 default: { 
 
label:"消息通知",
editable:false,
cStyle:{"wrapper":{"default":{"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"122px","left":"341px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"1352px","height":"64px","justifyContent":"center","alignItems":"center","flexDirection":"row","top":"190px","left":"288px","position":"unset","background":"linear-gradient(180deg, rgba(12, 135, 201, 0.27) 0%, rgba(21, 88, 159, 0) 100%)","border-radius":"10px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1352px","height":"64px","justifyContent":"center","alignItems":"center","flexDirection":"row","top":"190px","left":"288px","position":"unset","background":"linear-gradient(180deg, rgba(12, 135, 201, 0.27) 0%, rgba(21, 88, 159, 0) 100%)","border-radius":"10px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tComponentx0x6: {
defaultStyle: {
            default: {"width":"1353px","height":"668px","margin":"0 auto","position":"unset","left":"289px","top":"277px"},
            
            },
 default: { 
 
name:"zgtMessagesListComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"1353px","height":"668px","margin":"0 auto","position":"unset","left":"289px","top":"277px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/zgtMessagesList",
componentName:"zgtMessagesListComponent",
pageId:"f2b463ebe2ad45a69080358750093381",
pageCode:"zgtMessagesList", 
 },
},
tTextCommonx0x7: {
defaultStyle: {
            default: {"width":"56px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"718px","top":"213px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"20px","marginLeft":"40px"},
            
            },
 default: { 
 
label:"通知类型",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"718px","top":"213px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"20px","marginLeft":"40px"}}}, 
 },
},
tSelectx0x8: {
defaultStyle: {
            default: {"width":"268px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":"","position":"unset","left":"829px","top":"207px"},
            
            },
 default: { 
 
activeValue:"",
options:[{"label":"全部","value":"","disabled":false},{"value":"1","label":"常规","disabled":false},{"value":"2","label":"重要","disabled":false}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"268px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":"","position":"unset","left":"829px","top":"207px"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","box-shadow":"var(--business-select-shadow) 0px 0px 0px 2px "}},"placeholder":{"default":{"color":"var(--t-text)"}},"arrow":{"default":{"color":"var(--t-text)","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px","right":"0","position":"relative","left":"7px"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","width":"268px","paddingLeft":"6px","paddingRight":"6px"}},"dropdownItem":{"default":{"fontSize":"14px","color":"var(--t-text)","height":"28px","lineHeight":"28px","width":"254px","marginBottom":"4px","paddingLeft":"8px","paddingRight":"8px"},"hover":{"color":"var(--t-text)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"disabledWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}},
scrollbarThumbColor:"rgb(193,193,193)",
scrollbarTrackColor:"rgb(241,241,241)",
scrollbarWidth:"6px", 
 },
},
tTabsBasex0x9: {
defaultStyle: {
            default: {"width":"380px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","left":"312px","top":"207px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"},
            
            },
 default: { 
 
data:[{"label":"今日","value":"today"},{"label":"近7天","value":"last7days"},{"label":"近30天","value":"last30days"}],
space:0,
selectedTabVal:"today",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"380px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","left":"312px","top":"207px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"}},"itemWrapper":{"default":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","backgroundColor":"rgba(0, 61, 155, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"120px","height":"32px","fontSize":"14px","lineHeight":"32px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(0,61,155,0)","borderTop":"1px solid rgba(0,61,155,0)","borderRight":"1px solid rgba(0,61,155,0)","borderBottom":"1px solid rgba(0,61,155,0)","color":"var(--business-text-avianize)"},"active":{"background":"var(--business-tab-third-active-fill)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"rgba(3, 12, 52, 0)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","color":"var(--business-tab-third-active-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"32px"},"hover":{"backgroundColor":"rgba(0, 61, 155, 0)","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","color":"var(--business-tab-third-active-border)"}}}, 
 },
},
tRectx0x10: {
defaultStyle: {
            default: {"width":"95px","height":"32px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"unset Solid var(--t-rect-border-color)","borderLeft":"unset Solid var(--t-rect-border-color)","borderBottom":"unset Solid var(--t-rect-border-color)","borderRight":"unset Solid var(--t-rect-border-color)","position":"unset","left":"1518px","top":"206px","backgroundColor":"#17406F","borderDirection":"all","borderTopLeftRadius":"58px","borderTopRightRadius":"58px","borderBottomRightRadius":"58px","borderBottomLeftRadius":"58px","fontSize":"16px","paddingLeft":"25px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"新增",
active:false,
cStyle:{"wrapper":{"default":{"width":"95px","height":"32px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"unset Solid var(--t-rect-border-color)","borderLeft":"unset Solid var(--t-rect-border-color)","borderBottom":"unset Solid var(--t-rect-border-color)","borderRight":"unset Solid var(--t-rect-border-color)","position":"unset","left":"1518px","top":"206px","backgroundColor":"#17406F","borderDirection":"all","borderTopLeftRadius":"58px","borderTopRightRadius":"58px","borderBottomRightRadius":"58px","borderBottomLeftRadius":"58px","fontSize":"16px","paddingLeft":"25px","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x11: {
defaultStyle: {
            default: {"width":"26px","height":"26px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-25/7acf6ed474434eeb8921548cdde19129.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","top":"1294px","left":"-296px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"26px","height":"26px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-25/7acf6ed474434eeb8921548cdde19129.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","top":"1294px","left":"-296px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x12: {
defaultStyle: {
            default: {"width":"24px","height":"29px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"-264px","top":"1294px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-25/518c222dfd2f4813a5691e59041195ff.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"29px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"-264px","top":"1294px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-25/518c222dfd2f4813a5691e59041195ff.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x13: {
defaultStyle: {
            default: {"width":"18px","height":"15px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"unset Solid var(--t-rect-border-color)","borderLeft":"unset Solid var(--t-rect-border-color)","borderBottom":"unset Solid var(--t-rect-border-color)","borderRight":"unset Solid var(--t-rect-border-color)","position":"unset","left":"1537px","top":"215px","borderDirection":"all","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-25/6e6ce68bf11b4e5d86d1343cc645d793.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","pointerEvents":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"18px","height":"15px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"unset Solid var(--t-rect-border-color)","borderLeft":"unset Solid var(--t-rect-border-color)","borderBottom":"unset Solid var(--t-rect-border-color)","borderRight":"unset Solid var(--t-rect-border-color)","position":"unset","left":"1537px","top":"215px","borderDirection":"all","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-25/6e6ce68bf11b4e5d86d1343cc645d793.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","pointerEvents":"none"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const setProvider = () => {
// 注入列表数据
provide("gztLeftMessagesDialogState", state);

};
const handleAdd = () => {
global.dialogParams = {
  type:'add'
}

rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'createDialog',  // 消息类型名称
    data: {
      data: {
        headerComName: "",
        contentComName: "gztLeftMessageEditComponent",
        maxWidth: "635px",
        maxHeight: "441px",
        minWidth: "635px",
        minHeight: "441px",
        isScalse: false,
        title: "新增消息通知"
      }
    }
  }
);
};
const handleTabChange = () => {
switch (state.tabsActiveValue) {
  case "today":
    state.params.startTime = dateFormat(new Date(), "yyyy-MM-dd");
    state.params.endTime = dateFormat(new Date(), "yyyy-MM-dd");
    break;
  case "last7days":
    state.params.startTime = dateFormat(
      new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
      "yyyy-MM-dd",
    );
    state.params.endTime = dateFormat(new Date(), "yyyy-MM-dd");
    break;
  case "last30days":
    state.params.startTime = dateFormat(
      new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000),
      "yyyy-MM-dd",
    );
    state.params.endTime = dateFormat(new Date(), "yyyy-MM-dd");
    break;
  default:
    break;
}
apiRegistry.getData.request();
};
const onSocket = () => {
rootData.rootOn('rootSocket:change', (data) =>{
    if (data.type === 'refreshNoticeList') {
      apiRegistry.getData.request();
    }
});
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
                    key:'dialogName',
                    value:'',
                    data: {
                      dialogName: ''
                    },
                  });
};
const onmouseover1739345261051 = () => {

// 显示元素并加动画
document.getElementById('t-rect-39ea.51f8eb66d').style.display = 'block';
runAnimation('t-rect-39ea.51f8eb66d', [""]);

// 隐藏元素并加动画
runAnimation('t-rect-5094.9a9212dbc', [""], 'none');
};
const ontabClick1774405124853_0_0 = (data) => {
// 设置变量值
state.tabsActiveValue = data.value;
// 设置变量值
state.page.pageNum = 1;
// 执行自定义方法
handleTabChange();
};
const onclick1774420239400 = () => {
// 执行自定义方法
handleAdd();
};
const onchange1774494577302 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.params.codeNtype = value;
// 事件交互-请求调用接口
apiRegistry.getData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const oncurrentChange1774514788816 = (currentPage) => {
// 设置变量值
state.page.pageNum = currentPage;
// 事件交互-请求调用接口
apiRegistry.getData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"pageSize":"state.page.pageSize","pageNum":"state.page.pageNum","orderBy":"state.params.orderBy","ntitle":"state.params.ntitle","codeNtype":"state.params.codeNtype","endTime":"state.params.endTime","startTime":"state.params.startTime","pubTime":"state.params.pubTime","interfaceId":"320af2922a0cd934d214010004c9e163"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"pageSize":state.page.pageSize,"pageNum":state.page.pageNum,"orderBy":state.params.orderBy,"ntitle":state.params.ntitle,"codeNtype":state.params.codeNtype,"endTime":state.params.endTime,"startTime":state.params.startTime,"pubTime":state.params.pubTime,"interfaceId":"320af2922a0cd934d214010004c9e163"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"pageSize":state.page.pageSize,"pageNum":state.page.pageNum,"orderBy":state.params.orderBy,"ntitle":state.params.ntitle,"codeNtype":state.params.codeNtype,"endTime":state.params.endTime,"startTime":state.params.startTime,"pubTime":state.params.pubTime,"interfaceId":"320af2922a0cd934d214010004c9e163"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.page.total = res.data.head.pageInfo.total;
  state.page.pageSize = res.data.head.pageInfo.pageSize;
  state.page.pageNum = res.data.head.pageInfo.pageNum;

  // 处理数据，添加映射字段
  state.listData = res.data.data
} else {
  state.listData = [];
  state.page.total = 0
  state.page.pageNum = 1
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      console.log('jjjjjjjjje')
// state.listData = [];
// state.page.total = 0
// state.page.pageNum = 1
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-gztLeftMessagesDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setProvider();
// 执行自定义方法
onSocket();
onMounted(() => {
setPageScale('t-l-c-gztLeftMessagesDialog', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
document.getElementById('t-rect-5094.9a9212dbc')?.setAttribute('attr-visible', document.getElementById('t-rect-5094.9a9212dbc')?.style.display);
document.getElementById('t-rect-39ea.51f8eb66d')?.setAttribute('attr-visible', document.getElementById('t-rect-39ea.51f8eb66d')?.style.display);
// 执行自定义方法
handleTabChange();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tPaginationBasex0x1ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x1.default, componentState.tPaginationBasex0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

 const tTextCommonx0x7ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x7.default, componentState.tTextCommonx0x7?.[state.screenSize]));

 const tSelectx0x8ComputedData = computed(() => _.merge({}, componentState.tSelectx0x8.default, componentState.tSelectx0x8?.[state.screenSize]));

 const tTabsBasex0x9ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x9.default, componentState.tTabsBasex0x9?.[state.screenSize]));

 const tRectx0x10ComputedData = computed(() => _.merge({}, componentState.tRectx0x10.default, componentState.tRectx0x10?.[state.screenSize]));

 const tRectx0x11ComputedData = computed(() => _.merge({}, componentState.tRectx0x11.default, componentState.tRectx0x11?.[state.screenSize]));

 const tRectx0x12ComputedData = computed(() => _.merge({}, componentState.tRectx0x12.default, componentState.tRectx0x12?.[state.screenSize]));

 const tRectx0x13ComputedData = computed(() => _.merge({}, componentState.tRectx0x13.default, componentState.tRectx0x13?.[state.screenSize]));

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
tPaginationBasex0x1ComputedData,
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tTextx0x4ComputedData,
tRectx0x5ComputedData,
tComponentx0x6ComputedData,
tTextCommonx0x7ComputedData,
tSelectx0x8ComputedData,
tTabsBasex0x9ComputedData,
tRectx0x10ComputedData,
tRectx0x11ComputedData,
tRectx0x12ComputedData,
tRectx0x13ComputedData,
oncurrentChange1774514788816,
onmouseout1739345365135,
onclick1739960380902,
onmouseover1739345261051,
onchange1774494577302,
ontabClick1774405124853_0_0,
onclick1774420239400,
};
},
};