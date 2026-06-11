window.monitoringAnalysisComponent = {
template: 
`<div id="t-l-c-monitoringAnalysis" class="t-l-c-monitoringAnalysis" >` +
`<t-component id="t-component-b949.874ade55b" class="monitoringAnalysis-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text-unit id="t-text-unit-5d8d.a22fe33c8" class="monitoringAnalysis-t-text-unit-0-1"  :c-style="tTextUnitx0x1ComputedData.cStyle" :justify="tTextUnitx0x1ComputedData.justify" :align="tTextUnitx0x1ComputedData.align" :content="tTextUnitx0x1ComputedData.content" :unit="tTextUnitx0x1ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x1ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-list-card-multiple-choice id="t-list-card-multiple-choice-ed21.a74e3f763" class="monitoringAnalysis-t-list-card-multiple-choice-0-2"  :c-style="tListCardMultipleChoicex0x2ComputedData.cStyle" :key-word="tListCardMultipleChoicex0x2ComputedData.keyWord" :default-checked="replaceCssVariables(filterData(state.selectedCard, componentPropBindingMap?.['t-list-card-multiple-choice-ed21.a74e3f763']['defaultChecked'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tListCardMultipleChoicex0x2ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.cardList, componentPropBindingMap?.['t-list-card-multiple-choice-ed21.a74e3f763']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tListCardMultipleChoicex0x2ComputedData.unit" @card-click="oncardClick1762848479070_0_0">` +
`</t-list-card-multiple-choice>` +
`<t-rect id="t-rect-e7a6.2aec1624b" class="monitoringAnalysis-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1734919878965">` +
`</t-rect>` +
`<t-rect id="t-rect-1cd0.0382c9b72" class="monitoringAnalysis-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1762416707444_0_0">` +
`</t-rect>` +
`<t-pagination-base id="t-pagination-base-3f55.f73f2473e" class="monitoringAnalysis-t-pagination-base-0-5"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-3f55.f73f2473e']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x5ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-3f55.f73f2473e']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="replaceCssVariables(filterData(state.pageInfo.pages, componentPropBindingMap?.['t-pagination-base-3f55.f73f2473e']['pagerCount'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-3f55.f73f2473e']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x5ComputedData.layout" :page-sizes="tPaginationBasex0x5ComputedData.pageSizes" :disabled="tPaginationBasex0x5ComputedData.disabled" :c-style="tPaginationBasex0x5ComputedData.cStyle" @current-change="oncurrentChange1763024869224_0_0">` +
`</t-pagination-base>` +
`<t-search id="t-search-6e2a.5686a9e15" class="monitoringAnalysis-t-search-0-6"  :type="tSearchx0x6ComputedData.type" :input-value="replaceCssVariables(filterData(state.inputValue, componentPropBindingMap?.['t-search-6e2a.5686a9e15']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x6ComputedData.maxlength" :minlength="tSearchx0x6ComputedData.minlength" :show-word-limit="tSearchx0x6ComputedData.showWordLimit" :placeholder="tSearchx0x6ComputedData.placeholder" :clearable="tSearchx0x6ComputedData.clearable" :show-password="tSearchx0x6ComputedData.showPassword" :disabled="tSearchx0x6ComputedData.disabled" :prefix-icon="tSearchx0x6ComputedData.prefix-icon" :suffix-icon="tSearchx0x6ComputedData.suffix-icon" :rows="tSearchx0x6ComputedData.rows" :autosize="tSearchx0x6ComputedData.autosize" :name="tSearchx0x6ComputedData.name" :readonly="tSearchx0x6ComputedData.readonly" :step="tSearchx0x6ComputedData.step" :autofocus="tSearchx0x6ComputedData.autofocus" :form="tSearchx0x6ComputedData.form" :label="tSearchx0x6ComputedData.label" :tabindex="tSearchx0x6ComputedData.tabindex" :validate-event="tSearchx0x6ComputedData.validateEvent" :c-style="tSearchx0x6ComputedData.cStyle" :has-search-btn="tSearchx0x6ComputedData.hasSearchBtn" @change="onchange1733895967771">` +
`</t-search>` +
`<t-table id="t-table-c1dd.c7a44599" class="monitoringAnalysis-t-table-0-7"  :height="tTablex0x7ComputedData.height" :stripe="tTablex0x7ComputedData.stripe" :border="tTablex0x7ComputedData.border" :auto-scroll="tTablex0x7ComputedData.autoScroll" :speed="tTablex0x7ComputedData.speed" :columns="tTablex0x7ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-c1dd.c7a44599']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x7ComputedData.defaultSort" :c-style="tTablex0x7ComputedData.cStyle" @cell-click="oncellClick1762416757174_0_0">` +
`</t-table>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-b949.874ade55b":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-unit-5d8d.a22fe33c8":{"attributeName":"tTextUnitx0x1","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-list-card-multiple-choice-ed21.a74e3f763":{"attributeName":"tListCardMultipleChoicex0x2","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]},"unit":{"filters":[]}},"t-rect-e7a6.2aec1624b":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1cd0.0382c9b72":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-pagination-base-3f55.f73f2473e":{"attributeName":"tPaginationBasex0x5","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-search-6e2a.5686a9e15":{"attributeName":"tSearchx0x6","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-table-c1dd.c7a44599":{"attributeName":"tTablex0x7","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
   selectedParams: {"radius":3,"direction":"back","altitude":["10","500","1000"],"buffer":"union"},
   tagJson: "{}",
   tagCode: "",
   topicTags: [],
   listData: [],
   inputValue: "",
   selectedCard: [],
   cardList: [],
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
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextUnitx0x1: {
defaultStyle: {
            default: {"width":"261px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"33px","top":"6px","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"261px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"33px","top":"6px","lineHeight":"20px","animationName":""}},"unit":{"default":{"fontSize":"17px","fontFamily":"方正综艺","lineHeight":"20px"}},"text":{"default":{"lineHeight":"20px","fontSize":"17px"}}},
justify:"flex-start",
align:"flex-end",
content:"监测分析",
unit:"",
showOverflowTooltip:true, 
 },
},
tListCardMultipleChoicex0x2: {
defaultStyle: {
            default: {"width":"414px","height":"116px","overflowY":"auto","position":"unset","left":"0px","top":"92px","display":"grid","grid-template-columns":"repeat(auto-fill,131.33px)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"414px","height":"116px","overflowY":"auto","position":"unset","left":"0px","top":"92px","display":"grid","grid-template-columns":"repeat(auto-fill,131.33px)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","animationName":""}},"cardItem":{"default":{"boxSizing":"border-box","padding":"4px","background":"rgba(20, 112, 204, 0.3)","width":"50px","height":"54px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","display":"block","position":"relative","cursor":"pointer"},"active":{"background":"var(--business-tab-content-active-bg)","width":"131.33px","height":"54px","overflow":"hidden","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(138,210,255,0.8)","borderTop":"1px solid rgba(138,210,255,0.8)","borderRight":"1px solid rgba(138,210,255,0.8)","borderBottom":"1px solid rgba(138,210,255,0.8)","color":""},"hover":{"width":"131.33px","height":"54px","overflow":"hidden","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(138,210,255,0.8)","borderTop":"1px solid rgba(138,210,255,0.8)","borderRight":"1px solid rgba(138,210,255,0.8)","borderBottom":"1px solid rgba(138,210,255,0.8)","color":"var(--business-text-avianize)"}},"cardUnchecked":{"hover":{"background":"var(--business-tab-content-active-bg)","width":"131.33px","height":"54px","overflow":"hidden"},"default":{"backgroundColor":"rgba(20, 112, 204, 0.3)","width":"131.33px","height":"54px","overflow":"hidden"}},"cardItemLabel":{"default":{"height":"14px","lineHeight":"14px","fontSize":"14px","color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","top":"-21px","position":"relative","whiteSpace":"nowrap","textOverflow":"ellipsis"},"hover":{"color":"var(--business-text-avianize)"},"active":{"color":"var(--business-text-avianize)"}},"listBody":{"default":{"width":"410px","overflow":"visible","display":"grid","alignItems":"stretch","justifyItems":"stretch","alignContent":"space-around","justifyContent":"space-around","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","height":"auto","grid-template-columns":"repeat(auto-fill,131.33px)"}},"cardItemValueContent":{"default":{"height":"24px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"#F9D000"}},"cardItemValueUnit":{"default":{"height":"12px","fontSize":"12px","color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginLeft":"6px","lineHeight":"21px"}},"cardItemValue":{"default":{"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","top":"17px","height":"24px","position":"relative"}},"cardItemLabelContent":{"active":{"color":"var(--business-text-avianize)"},"hover":{"color":"var(--business-text-avianize)"},"default":{"whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"cardItemIcon":{"default":{"position":"absolute","right":"4px","width":"16px","height":"16px","backgroundImage":"var(--multiple-card-unchecked)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","bottom":"4px"},"hover":{"backgroundImage":"var(--multiple-card-checked)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},"active":{"backgroundSize":"contain,contain","-webkit-mask-size":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundPosition":"50% 50%,50% 50%","-webkit-mask-position":"","backgroundImage":"var(--multiple-card-checked)","-webkit-mask-image":""}}},
keyWord:"M_TYPE",
defaultChecked:[],
dataAlias:{"value":"doc_count","label":"M_TYPE","icon":"","unit":""},
data:[],
unit:"个", 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"356px","top":"51px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"查询",
active:false,
cStyle:{"wrapper":{"default":{"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"356px","top":"51px","cursor":"pointer","animationName":""}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"291px","top":"51px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"重置",
active:false,
cStyle:{"wrapper":{"default":{"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"291px","top":"51px","cursor":"pointer","animationName":""}}}, 
 },
},
tPaginationBasex0x5: {
defaultStyle: {
            default: {"width":"410px","height":"38px","position":"unset","left":"0px","top":"689px","color":"","animationName":"","display":"flex","justifyContent":"space-between"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:10,
pagerCount:0,
currentPage:1,
layout:" total,prev, pager, next",
pageSizes:[20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"38px","position":"unset","left":"0px","top":"689px","color":"","animationName":"","display":"flex","justifyContent":"space-between"}},"pagerItem":{"default":{"color":"#fff","fontSize":"14px","lineHeight":"32px","borderLeft":"1px solid #366B92","borderTop":"1px solid #366B92","borderRight":"1px solid #366B92","borderBottom":"1px solid #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":""},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"rgba(255, 255, 255, 0)","color":"var(--common-white1)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"var(--common-white1)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0.6246480855855856%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"#fff","marginLeft":"0px","marginRight":"0px","backgroundColor":"#1B4293"},"hover":{"color":"var(--common-white1)","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"more":{"default":{"color":"#C9E7F5"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"#C9E7F5","paddingRight":"30px","paddingLeft":"10px"}},"sizesWrapper":{"default":{"color":"","backgroundColor":""}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)"},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--common-white08)"}},"jumpInput":{"default":{"color":"var(--common-white08)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"var(--theme-dialog-bg)","color":"","borderLeft":"1px solid var(--theme-input-border)","borderTop":"1px solid var(--theme-input-border)","borderRight":"1px solid var(--theme-input-border)","borderBottom":"1px solid var(--theme-input-border)"}},"sizesDropdownItem":{"default":{"color":"var(--common-white08)"},"active":{"backgroundColor":"var(--theme-btn-default)","color":"var(--common-white1)"},"hover":{"color":"var(--common-white1)","backgroundColor":"var(--theme-table-zebra-crossing)"}}}, 
 },
},
tSearchx0x6: {
defaultStyle: {
            default: {"width":"278px","height":"32px","position":"unset","left":"1px","top":"51px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入",
clearable:true,
showPassword:false,
disabled:false,
'prefix-icon':"",
'suffix-icon':"",
rows:2,
autosize:false,
name:"",
readonly:false,
step:"",
autofocus:false,
form:"",
label:"",
tabindex:"",
validateEvent:true,
cStyle:{"wrapper":{"default":{"width":"278px","height":"32px","position":"unset","left":"1px","top":"51px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tTablex0x7: {
defaultStyle: {
            default: {"width":"409px","height":"450px","position":"unset","left":"-1px","top":"226px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"439px",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"50px","type":"default","stateKey":"iconStatus"},{"label":"设备名称","type":"default","key":"DEVICE_NAME","stateKey":"","width":"145px","minWidth":"","align":"left","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"类型","type":"default","key":"M_TYPE","stateKey":"excellentValue","width":"120px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"状态","type":"default","key":"STATUS","stateKey":"","width":"90px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"409px","height":"450px","position":"unset","left":"-1px","top":"226px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
});
const sendMsgToMap = (value) => {
// rootData.rootSocket.emit(
//   'message',  // 固定的消息名称，不能修改
//   {
//     room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
//     type: 'showAirSourceMonitor',  // 消息类型名称
//     data: {                   // 消息内容，对象格式
//       enable: value,
//     }
//   }
// );
};
const handleClickCard = (item,checkedList) => {
const checkedListName = checkedList.map(item => item.M_TYPE)
// 点击全部
if (item.M_TYPE === '全部') {
  // 选中“全部”，则其他项全部选中
  if (checkedListName.includes('全部')) {
    state.selectedCard = state.cardList.map(item => item.M_TYPE)
  } else {
    // 取消，则全部取消
    state.selectedCard = []
  }
} else {
  // 点击其他
  state.selectedCard = checkedListName
  const allItem = checkedList.find((li) => li.M_TYPE === '全部');
  // 其他项都选中，全部也选中
  if (checkedList.length === state.cardList.length - 1 && !allItem) {
    state.selectedCard.push('全部')
  }
  // 取消选中则都取消
  if (checkedList.length === 0 || (checkedList.length === 1 && checkedListName.includes('全部'))) {
    state.selectedCard = []
  }
}

if (checkedListName.length < state.cardList.length && checkedListName.includes('全部')) {
  const allIndex = state.selectedCard.findIndex((c) => c === '全部')
  state.selectedCard.splice(allIndex, 1);
}

if (checkedListName.length ===1 && checkedListName.includes('全部')) {
  state.selectedCard.push('全部')
}

// if (checkedListName.length === state.cardList.length -1 && !checkedListName.includes('全部')) {
//   state.selectedCard.push('全部');
// }

const tagsValue = [];
state.selectedCard.forEach((card) => {
  const selectedTag = state.topicTags.find((tag) => tag.value === card);
  if (selectedTag) {
    tagsValue.push(selectedTag.value);
  }
})

state.tagJson = JSON.stringify({
  [state.tagCode]: tagsValue.join('$'),
})

// 全不选择的时候无需请求接口 直接清空数组
if (state.selectedCard.length) {
  apiRegistry.getListData.request();
} else {
  state.listData = [];
}

// 给地图发送消息
const selectValue = state.selectedCard.filter(item => item !== '全部')
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'changePointTyeByAirSourceMonitor',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      showTypes: selectValue,
    }
  }
);



};
const gotoMapLocationLY = (row) => {
// console.log(row, '0-0-0-0-0-')
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'gotoPoint',  // 消息类型名称
    data: {     
      ...row,              // 消息内容，对象格式
      lat: row.latitude,
      lon: row.longitude,
      longitude: row.LONGITUDE,
      latitude: row.LATITUDE,
    }
  }
);

rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "gotoAirSTracePoint", // 消息名称
  data: {
    "dataid": row.DATA_PKID,
  }
});
};
const initTraceabilitySocket = () => {
// rootData.rootOn('rootSocket:change', (data) =>{
// // tab切换：发送溯源消息
//     if (data.type === 'airTraceabilityTabSwitch') {
//       console.log('监测分析-show')
//       // 处理逻辑
//       handleAnalysis();
//     }
// });


};
const handleAnalysis = () => {
rootData.rootSocket.emit('message', {
  type: 'showAirSourceTrace',
  room: global.socketRoom,
  data: [
    {
      shareCode: "showAirSourceTrace",
      // runtimeValue: state?.sourceParmasState?.componentSourceParmas?.POINT_CODE || global.warningRightPointCode || "",
      runtimeValue: global.warningRightPointCode || "",
      pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
      isEnters: true,
      traceTime: global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 00',
      layerName: global.businessDialog.dialogParmas.layerName,
      forward: state.selectedParams.direction === "front",
      height: state.selectedParams.altitude.join(','),
      pointBufferLen: state.selectedParams.radius,
      bufferType: state.selectedParams.buffer
    }]
});
};
const oncardClick1762848479070_0_0 = (clickItem,checkedList) => {
// 执行自定义方法
handleClickCard(clickItem,checkedList);
};
const onclick1734919878965 = () => {
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onclick1762416707444_0_0 = () => {
// 设置变量值
state.inputValue = '';
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const oncurrentChange1763024869224_0_0 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
};
const onchange1733895967771 = (value) => {
// 设置变量值
state.inputValue = value;
};
const oncellClick1762416757174_0_0 = (row,column,cell,event) => {
// 执行自定义方法
gotoMapLocationLY(row,column);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getCardData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"useGisShape":"false","queryField":"DATA_NAME","locationField":"location","hasGather":"false","REGION_CODE":"global.regionaQuery.regionCode","groupFields":"M_TYPE","ENTITY_CODE":"tag_jksb_1762945137278","interfaceId":"32fbf72522e1a004b67b5d906410ec8d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"useGisShape":"false","queryField":"DATA_NAME","locationField":"location","hasGather":"false","REGION_CODE":global.regionaQuery.regionCode,"groupFields":"M_TYPE","ENTITY_CODE":"tag_jksb_1762945137278","interfaceId":"32fbf72522e1a004b67b5d906410ec8d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"useGisShape":"false","queryField":"DATA_NAME","locationField":"location","hasGather":"false","REGION_CODE":global.regionaQuery.regionCode,"groupFields":"M_TYPE","ENTITY_CODE":"tag_jksb_1762945137278","interfaceId":"32fbf72522e1a004b67b5d906410ec8d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardData'] = res.data;
                
     
if(res?.data?.groupResult?.length){
  state.cardList = res?.data?.groupResult
  state.cardList.unshift({
    "M_TYPE":'全部',
    "doc_count": state.cardList.map(item => item.doc_count).reduce((a, b) => a + b, 0)
  })
  // 设置默认选中全部
  state.selectedCard = state.cardList.map(item => item.M_TYPE)

  // 给地图发送消息
const selectValue = state.selectedCard.filter(item => item !== '全部')
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'changePointTyeByAirSourceMonitor',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      showTypes: selectValue,
    }
  }
);

}else{
  state.cardList = []
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
 getTopicTree: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"istree":"true","topicCode":"f378716e-2aa6-49d5-ae28-a9875958c8c9","interfaceId":"982f4b5298e7d6c89796ffca11f9dacb"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"istree":"true","topicCode":"f378716e-2aa6-49d5-ae28-a9875958c8c9","interfaceId":"982f4b5298e7d6c89796ffca11f9dacb"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"istree":"true","topicCode":"f378716e-2aa6-49d5-ae28-a9875958c8c9","interfaceId":"982f4b5298e7d6c89796ffca11f9dacb"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTopicTree'] = res.data;
                
     if(res?.data?.tags) {
  state.tagCode = res.data.tags[0]?.tagCode;
  state.topicTags = res.data.tags[0]?.range || [];
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
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"REGION_CODE":"global.regionaQuery.regionCode","useGisShape":"false","topicCode":"DEFAULT_GIS_SHAP","hasGather":"false","queryField":"DEVICE_NAME","locationField":"location","tagJson":"state.tagJson","HasAllTag":"true","sourcefields":"D,M_TYPE,DEVICE_NAME,STATUS","pageSize":"state.pageInfo.pageSize","pageNum":"state.pageInfo.pageNum","keyword":"state.inputValue","interfaceId":"8b5ca6a3009f750b5b1f19a415589682","ENTITY_CODE":"tag_jksb_1762945137278"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"useGisShape":"false","topicCode":"DEFAULT_GIS_SHAP","hasGather":"false","queryField":"DEVICE_NAME","locationField":"location","tagJson":state.tagJson,"HasAllTag":"true","sourcefields":"D,M_TYPE,DEVICE_NAME,STATUS","pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"keyword":state.inputValue,"interfaceId":"8b5ca6a3009f750b5b1f19a415589682","ENTITY_CODE":"tag_jksb_1762945137278"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.regionaQuery.regionCode,"useGisShape":"false","topicCode":"DEFAULT_GIS_SHAP","hasGather":"false","queryField":"DEVICE_NAME","locationField":"location","tagJson":state.tagJson,"HasAllTag":"true","sourcefields":"D,M_TYPE,DEVICE_NAME,STATUS","pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"keyword":state.inputValue,"interfaceId":"8b5ca6a3009f750b5b1f19a415589682","ENTITY_CODE":"tag_jksb_1762945137278"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     state.pageInfo.total = res?.data?.page?.total || 0

if (state.selectedCard.length === 0) {
  state.listData = [];
} else {
  state.listData = res?.data?.page?.list;
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
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCardData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode,state.pageInfo.pageNum], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-monitoringAnalysis', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
sendMsgToMap("true");
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "showAirSourceMonitor", // 消息名称
data: {"enable":true}, // 发送的数据
});
onBeforeUnmount(() => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "showAirSourceMonitor", // 消息名称
data: {"enable":false}, // 发送的数据
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
});
onMounted(() => {
setPageScale('t-l-c-monitoringAnalysis', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initTraceabilitySocket();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextUnitx0x1ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x1.default, componentState.tTextUnitx0x1?.[state.screenSize]));

 const tListCardMultipleChoicex0x2ComputedData = computed(() => _.merge({}, componentState.tListCardMultipleChoicex0x2.default, componentState.tListCardMultipleChoicex0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tPaginationBasex0x5ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x5.default, componentState.tPaginationBasex0x5?.[state.screenSize]));

 const tSearchx0x6ComputedData = computed(() => _.merge({}, componentState.tSearchx0x6.default, componentState.tSearchx0x6?.[state.screenSize]));

 const tTablex0x7ComputedData = computed(() => _.merge({}, componentState.tTablex0x7.default, componentState.tTablex0x7?.[state.screenSize]));

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
tTextUnitx0x1ComputedData,
tListCardMultipleChoicex0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tPaginationBasex0x5ComputedData,
tSearchx0x6ComputedData,
tTablex0x7ComputedData,
oncardClick1762848479070_0_0,
onclick1734919878965,
onclick1762416707444_0_0,
oncurrentChange1763024869224_0_0,
onchange1733895967771,
oncellClick1762416757174_0_0,
};
},
};