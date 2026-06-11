window.lawEnforcerEntryListComponent = {
template: 
`<div id="t-l-c-lawEnforcerEntryList" class="t-l-c-lawEnforcerEntryList" >` +
`<t-search id="t-search-e782.6deb0d3a6" class="lawEnforcerEntryList-t-search-0-0"  :type="tSearchx0x0ComputedData.type" :input-value="tSearchx0x0ComputedData.inputValue" :maxlength="tSearchx0x0ComputedData.maxlength" :minlength="tSearchx0x0ComputedData.minlength" :show-word-limit="tSearchx0x0ComputedData.showWordLimit" :placeholder="tSearchx0x0ComputedData.placeholder" :clearable="tSearchx0x0ComputedData.clearable" :show-password="tSearchx0x0ComputedData.showPassword" :disabled="tSearchx0x0ComputedData.disabled" :prefix-icon="tSearchx0x0ComputedData.prefix-icon" :suffix-icon="tSearchx0x0ComputedData.suffix-icon" :rows="tSearchx0x0ComputedData.rows" :autosize="tSearchx0x0ComputedData.autosize" :name="tSearchx0x0ComputedData.name" :readonly="tSearchx0x0ComputedData.readonly" :step="tSearchx0x0ComputedData.step" :autofocus="tSearchx0x0ComputedData.autofocus" :form="tSearchx0x0ComputedData.form" :label="tSearchx0x0ComputedData.label" :tabindex="tSearchx0x0ComputedData.tabindex" :validate-event="tSearchx0x0ComputedData.validateEvent" :c-style="tSearchx0x0ComputedData.cStyle" :has-search-btn="tSearchx0x0ComputedData.hasSearchBtn" @input="oninput1768897331999">` +
`</t-search>` +
`<t-button id="t-button-4eea.907df4f4a" class="lawEnforcerEntryList-t-button-0-1"  :label="tButtonx0x1ComputedData.label" :round="tButtonx0x1ComputedData.round" :plain="tButtonx0x1ComputedData.plain" :disabled="tButtonx0x1ComputedData.disabled" :type="tButtonx0x1ComputedData.type" :size="tButtonx0x1ComputedData.size" :native-type="tButtonx0x1ComputedData.native-type" :c-style="tButtonx0x1ComputedData.cStyle" @click="onclick1768897357702">` +
`</t-button>` +
`<t-select id="t-select-e683.c0ee755cb" class="lawEnforcerEntryList-t-select-0-2"  :active-value="replaceCssVariables(filterData(state.taskCode, componentPropBindingMap?.['t-select-e683.c0ee755cb']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.taskTypeData, componentPropBindingMap?.['t-select-e683.c0ee755cb']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x2ComputedData.alias" :multiple="tSelectx0x2ComputedData.multiple" :placeholder="tSelectx0x2ComputedData.placeholder" :clearable="tSelectx0x2ComputedData.clearable" :disabled="tSelectx0x2ComputedData.disabled" :name="tSelectx0x2ComputedData.name" :autocomplete="tSelectx0x2ComputedData.autocomplete" :filterable="tSelectx0x2ComputedData.filterable" :no-match-text="tSelectx0x2ComputedData.no-match-text" :no-data-text="tSelectx0x2ComputedData.no-data-text" :c-style="tSelectx0x2ComputedData.cStyle" @change="onchange1770083729814_0_0">` +
`</t-select>` +
`<t-text-common id="t-text-common-b80d.c5107b3ab" class="lawEnforcerEntryList-t-text-common-0-3"  :label="tTextCommonx0x3ComputedData.label" :editable="tTextCommonx0x3ComputedData.editable" :c-style="tTextCommonx0x3ComputedData.cStyle">` +
`</t-text-common>` +
`<t-row id="t-row-bae5.161a91b2b" class="lawEnforcerEntryList-t-row-0-4"  :c-style="tRowx0x4ComputedData.cStyle" :gutter="tRowx0x4ComputedData.gutter" :justify="tRowx0x4ComputedData.justify" :align="tRowx0x4ComputedData.align">` +
`<t-col id="t-col-f4e5.af2fed64c" class="lawEnforcerEntryList-t-col-0-4-0"  :span="tColx0x4x0ComputedData.span" :offset="tColx0x4x0ComputedData.offset" :push="tColx0x4x0ComputedData.push" :pull="tColx0x4x0ComputedData.pull" :c-style="tColx0x4x0ComputedData.cStyle">` +
`<t-table id="t-table-c799.5f717c05a" class="lawEnforcerEntryList-t-table-0-4-0-0"  :height="tTablex0x4x0x0ComputedData.height" :stripe="tTablex0x4x0x0ComputedData.stripe" :border="tTablex0x4x0x0ComputedData.border" :auto-scroll="tTablex0x4x0x0ComputedData.autoScroll" :speed="tTablex0x4x0x0ComputedData.speed" :columns="tTablex0x4x0x0ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-c799.5f717c05a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x4x0x0ComputedData.defaultSort" :c-style="tTablex0x4x0x0ComputedData.cStyle" @cell-click="oncellClick1764838608814_0_0">` +
`</t-table>` +
`</t-col>` +
`<t-col id="t-col-cbf7.f47c81c41" class="lawEnforcerEntryList-t-col-0-4-1"  :span="tColx0x4x1ComputedData.span" :offset="tColx0x4x1ComputedData.offset" :push="tColx0x4x1ComputedData.push" :pull="tColx0x4x1ComputedData.pull" :c-style="tColx0x4x1ComputedData.cStyle">` +
`<t-pagination-base id="t-pagination-base-58ac.a6bedd5c" class="lawEnforcerEntryList-t-pagination-base-0-4-1-0"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-58ac.a6bedd5c']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x4x1x0ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-58ac.a6bedd5c']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x4x1x0ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-58ac.a6bedd5c']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x4x1x0ComputedData.layout" :page-sizes="tPaginationBasex0x4x1x0ComputedData.pageSizes" :disabled="tPaginationBasex0x4x1x0ComputedData.disabled" :c-style="tPaginationBasex0x4x1x0ComputedData.cStyle" @size-change="onsizeChange1768185728179_0_0" @current-change="oncurrentChange1768185728179_0_1">` +
`</t-pagination-base>` +
`</t-col>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-search-e782.6deb0d3a6":{"attributeName":"tSearchx0x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-button-4eea.907df4f4a":{"attributeName":"tButtonx0x1","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-select-e683.c0ee755cb":{"attributeName":"tSelectx0x2","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-b80d.c5107b3ab":{"attributeName":"tTextCommonx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-bae5.161a91b2b":{"attributeName":"tRowx0x4","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-f4e5.af2fed64c":{"attributeName":"tColx0x4x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-table-c799.5f717c05a":{"attributeName":"tTablex0x4x0x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-col-cbf7.f47c81c41":{"attributeName":"tColx0x4x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-pagination-base-58ac.a6bedd5c":{"attributeName":"tPaginationBasex0x4x1x0","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}}};
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
   keyWord: "",
   listData: [],
   pageInfo: {"pageNum":1,"pageSize":10,"total":0,"pages":0},
   taskTypeData: [],
   taskCode: "",
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
tSearchx0x0: {
defaultStyle: {
            default: {"width":"345px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入关键字",
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
cStyle:{"wrapper":{"default":{"width":"345px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tButtonx0x1: {
defaultStyle: {
            default: {"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","color":"var(--t-white)"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","color":"var(--t-white)"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tSelectx0x2: {
defaultStyle: {
            default: {"width":"331px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"DICTIONARYNAME","value":"DICTIONARYCODE","disabled":"disabled"},
multiple:false,
placeholder:"请选择部门",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"331px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTextCommonx0x3: {
defaultStyle: {
            default: {"width":"57px","height":"32px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"32px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"9px","top":"43px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"部门",
editable:false,
cStyle:{"wrapper":{"default":{"width":"57px","height":"32px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"32px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"9px","top":"43px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tRowx0x4: {
defaultStyle: {
            default: {"width":"410px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"90px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"410px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"90px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x4x0: {
defaultStyle: {
            default: {"width":"410px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"410px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tTablex0x4x0x0: {
defaultStyle: {
            default: {"width":"410px","height":"400px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:400,
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"定位","key":"status","align":"center","operationList":[{"name":" ","id":"不在线","fontStyle":{"display":"block","color":"var(--business-theme)","background":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","width":"unset","height":"unset"},"imageStyle":{"width":"14px","height":"16px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-02-12/d52f0226c3594762bbbc7a2bd7583906.svg)"}},{"name":" ","id":"离线","fontStyle":{"display":"block","color":"var(--business-theme)","background":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","width":"unset","height":"unset"},"imageStyle":{"width":"14px","height":"16px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-02-12/d52f0226c3594762bbbc7a2bd7583906.svg)"}},{"name":" ","id":"在线","fontStyle":{"display":"block","color":"var(--business-theme)","background":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","width":"unset","height":"unset"},"imageStyle":{"width":"14px","height":"16px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-05/da95b141a1b54b34be1d5577bedc3cce.svg)"}}],"stateList":[],"width":"44PX","type":"operation","stateKey":"iconStatus"},{"label":"人员编号","key":"number","align":"center","operationList":[],"stateList":[],"showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"nameTextStatus","infoPosition":"right","width":"85px"},{"label":"执法人员","key":"name","align":"center","operationList":[],"stateList":[],"width":"60px","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"cellStyle":{"cursor":"pointer"}}},{"label":"部门","key":"department","align":"center","operationList":[{"name":"调度","id":"调度","fontStyle":{"display":"block","color":"var(--business-theme)"}}],"stateList":[],"width":"70px","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"cellStyle":{"cursor":"pointer"}},"type":"default"},{"label":"联系方式","key":"phone","align":"center","operationList":[{"name":"调度","id":"调度","fontStyle":{"display":"block","color":"var(--business-theme)"}}],"stateList":[],"width":"100px","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"cellStyle":{"cursor":"pointer"}},"type":"default"},{"label":"操作","key":"operation","align":"center","operationList":[{"name":"调度","id":"调度","fontStyle":{"display":"block","color":"var(--business-theme)"}}],"stateList":[],"width":"50px","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"cellStyle":{"cursor":"pointer"}},"type":"operation"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"400px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tColx0x4x1: {
defaultStyle: {
            default: {"width":"410px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"410px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tPaginationBasex0x4x1x0: {
defaultStyle: {
            default: {"width":"403px","height":"40px","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end","animationName":"","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:5,
pagerCount:5,
currentPage:1,
layout:" prev, pager, next,sizes,total",
pageSizes:[5,10,15,20,30,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"403px","height":"40px","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end","animationName":"","fontSize":"var(--business-text-size-14)"}},"total":{"default":{"color":"var(--business-text-avianize)","position":"unset","right":"0px","left":"0px","width":"auto","fontSize":"var(--business-text-size-14)","marginLeft":"15px","marginRight":"0px"}},"pagerItem":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","cursor":"pointer","fontSize":"var(--business-text-size-14)","marginLeft":"0px"},"hover":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"1px none rgba(255,13,0,1)","borderTop":"1px none rgba(255,13,0,1)","borderRight":"1px none rgba(255,13,0,1)","borderBottom":"1px none rgba(255,13,0,1)","pointerEvents":"auto","overflow":"visible","cursor":"pointer","fontSize":"var(--business-text-size-14)","marginLeft":"0px"},"active":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","fontSize":"var(--business-text-size-14)","marginLeft":"0px"}},"pager":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","fontSize":"var(--business-text-size-12)","marginLeft":"0px"},"hover":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","fontSize":"var(--business-text-size-12)","marginLeft":"0px"}},"more":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"fontSize":"var(--business-text-size-12)"}},"sizesWrapper":{"default":{"fontSize":"var(--business-text-size-14)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","display":"none"}},"sizesInput":{"default":{"fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"sizesDropdownWrapper":{"default":{"fontSize":"var(--business-text-size-14)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-dialog-bg)"}},"sizesDropdownItem":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","backgroundColor":"rgba(26, 27, 31, 0)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"}},"jumpWrapper":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"jumpInput":{"default":{"fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
});
const gotoMapLocation = (row,column) => {
console.log(row);
console.log(column);

if (["定位"].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "gotoPoint",
    data: {
      "longitude": row.longitude,
      "latitude": row.latitude,
    }
  });
} else if (["操作"].includes(column.label)) {
  window.open('wxwork://', '_self');
}


};
const setCss = () => {
/**
 * 添加表格无数据样式
 */

// 创建 <style> 元素
const style = document.createElement('style');

// 定义样式规则（带 !important 确保覆盖第三方库默认样式）
style.innerHTML = `
  .t-l-c-lawEnforcerEntryList .lawEnforcerEntryList-t-table-0-0 {
    position: unset !important;
  }
`;

// 插入到 <head> 末尾
document.head.appendChild(style);
};
const sendMsgToMap = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'setLawEnforcerFilter',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'ZF_CODE': state.keyWord,
      'DEPT_CODE': state.taskCode
    }
  }
);
};
const oninput1768897331999 = (value) => {
// 设置变量值
state.keyWord = value;
};
const onclick1768897357702 = () => {
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 执行自定义方法
sendMsgToMap();
};
const onchange1770083729814_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.taskCode = value;
// 执行自定义方法
sendMsgToMap();
};
const onsizeChange1768185728179_0_0 = (pageSize) => {
// 设置变量值
state.pageInfo.pageSize = pageSize;
};
const oncurrentChange1768185728179_0_1 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
};
const oncellClick1764838608814_0_0 = (row,column,cell,event) => {
// 执行自定义方法
gotoMapLocation(row,column);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getCategory: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TREE_CODE":"ENFORCE_PERSON_DEPT","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TREE_CODE":"ENFORCE_PERSON_DEPT","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TREE_CODE":"ENFORCE_PERSON_DEPT","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCategory'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.taskTypeData = data
  state.taskTypeData.unshift({
    DICTIONARYNAME:"全部",
    DICTIONARYCODE:""
  })
  state.taskCode = state.taskTypeData[0]?.DICTIONARYCODE || ''
} else {
  state.taskTypeData = []
  state.taskCode = ''
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
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DEPT_CODE":"state.taskCode","keyWord":"state.keyWord","pageSize":"state.pageInfo.pageSize","pageNum":"state.pageInfo.pageNum","interfaceId":"213937f5ac1ccd45dbfa202ee2c1a9bc"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DEPT_CODE":state.taskCode,"keyWord":state.keyWord,"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"interfaceId":"213937f5ac1ccd45dbfa202ee2c1a9bc"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DEPT_CODE":state.taskCode,"keyWord":state.keyWord,"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"interfaceId":"213937f5ac1ccd45dbfa202ee2c1a9bc"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.pageInfo.total = head.pageInfo.total;
  state.listData = data.map(item => {
    return {
      ...item,
      number: item?.zf_code || '-',
      name: item?.zf_ry || '-',
      status: item?.zf_status || '-',
      phone: item?.phone_number || '-',
      department: item?.dept_name || '-',
      operation: '调度'
    }
  })
} else {
  state.listData = [];
  state.pageInfo.total = 0
}

console.log(state.listData)
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
watch(() => ["ENFORCE_PERSON_DEPT"], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCategory', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [state.taskCode,state.pageInfo.pageSize,state.pageInfo.pageNum], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-lawEnforcerEntryList', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-lawEnforcerEntryList', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setCss();
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 执行自定义方法
sendMsgToMap();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tSearchx0x0ComputedData = computed(() => _.merge({}, componentState.tSearchx0x0.default, componentState.tSearchx0x0?.[state.screenSize]));

 const tButtonx0x1ComputedData = computed(() => _.merge({}, componentState.tButtonx0x1.default, componentState.tButtonx0x1?.[state.screenSize]));

 const tSelectx0x2ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2.default, componentState.tSelectx0x2?.[state.screenSize]));

 const tTextCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x3.default, componentState.tTextCommonx0x3?.[state.screenSize]));

 const tRowx0x4ComputedData = computed(() => _.merge({}, componentState.tRowx0x4.default, componentState.tRowx0x4?.[state.screenSize]));

 const tColx0x4x0ComputedData = computed(() => _.merge({}, componentState.tColx0x4x0.default, componentState.tColx0x4x0?.[state.screenSize]));

 const tTablex0x4x0x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x4x0x0.default, componentState.tTablex0x4x0x0?.[state.screenSize]));

 const tColx0x4x1ComputedData = computed(() => _.merge({}, componentState.tColx0x4x1.default, componentState.tColx0x4x1?.[state.screenSize]));

 const tPaginationBasex0x4x1x0ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x4x1x0.default, componentState.tPaginationBasex0x4x1x0?.[state.screenSize]));

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
tSearchx0x0ComputedData,
tButtonx0x1ComputedData,
tSelectx0x2ComputedData,
tTextCommonx0x3ComputedData,
tRowx0x4ComputedData,
tColx0x4x0ComputedData,
tTablex0x4x0x0ComputedData,
tColx0x4x1ComputedData,
tPaginationBasex0x4x1x0ComputedData,
oninput1768897331999,
onclick1768897357702,
onchange1770083729814_0_0,
oncellClick1764838608814_0_0,
onsizeChange1768185728179_0_0,
oncurrentChange1768185728179_0_1,
};
},
};