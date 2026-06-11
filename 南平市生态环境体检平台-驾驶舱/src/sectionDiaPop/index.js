window.sectionDiaPopComponent = {
template: 
`<div id="t-l-c-sectionDiaPop" class="t-l-c-sectionDiaPop" >` +
`<t-rect id="t-rect-6c7f.7c3262293" class="sectionDiaPop-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-select id="t-select-df02.44403e986" class="sectionDiaPop-t-select-0-2"  :active-value="state.CODE_WATERQUALITYLEVELS" :options="state.sectionData" :alias="tSelectx0x2ComputedData.alias" :multiple="tSelectx0x2ComputedData.multiple" :placeholder="tSelectx0x2ComputedData.placeholder" :clearable="tSelectx0x2ComputedData.clearable" :disabled="tSelectx0x2ComputedData.disabled" :name="tSelectx0x2ComputedData.name" :autocomplete="tSelectx0x2ComputedData.autocomplete" :filterable="tSelectx0x2ComputedData.filterable" :no-match-text="tSelectx0x2ComputedData.no-match-text" :no-data-text="tSelectx0x2ComputedData.no-data-text" :c-style="tSelectx0x2ComputedData.cStyle" @change="onchange1740556400291">` +
`</t-select>` +
`<t-text id="t-text-2408.781b67c85" class="sectionDiaPop-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-d83a.f325cd681" class="sectionDiaPop-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-pagination-base id="t-pagination-base-33eb.4ae2b0363" class="sectionDiaPop-t-pagination-base-0-5"  :total="state.pageInfo.total" :small="tPaginationBasex0x5ComputedData.small" :page-size="state.pageInfo.pageSize" :pager-count="tPaginationBasex0x5ComputedData.pagerCount" :current-page="state.pageInfo.pageNum" :layout="tPaginationBasex0x5ComputedData.layout" :page-sizes="tPaginationBasex0x5ComputedData.pageSizes" :disabled="tPaginationBasex0x5ComputedData.disabled" :c-style="tPaginationBasex0x5ComputedData.cStyle" @size-change="onsizeChange1740555805646" @current-change="oncurrentChange1740555939151">` +
`</t-pagination-base>` +
`<t-search id="t-search-13cb.563eb2bb3" class="sectionDiaPop-t-search-0-6"  :type="tSearchx0x6ComputedData.type" :input-value="tSearchx0x6ComputedData.inputValue" :maxlength="tSearchx0x6ComputedData.maxlength" :minlength="tSearchx0x6ComputedData.minlength" :show-word-limit="tSearchx0x6ComputedData.show-word-limit" :placeholder="tSearchx0x6ComputedData.placeholder" :clearable="tSearchx0x6ComputedData.clearable" :show-password="tSearchx0x6ComputedData.show-password" :disabled="tSearchx0x6ComputedData.disabled" :prefix-icon="tSearchx0x6ComputedData.prefix-icon" :suffix-icon="tSearchx0x6ComputedData.suffix-icon" :rows="tSearchx0x6ComputedData.rows" :autosize="tSearchx0x6ComputedData.autosize" :name="tSearchx0x6ComputedData.name" :readonly="tSearchx0x6ComputedData.readonly" :step="tSearchx0x6ComputedData.step" :autofocus="tSearchx0x6ComputedData.autofocus" :form="tSearchx0x6ComputedData.form" :label="tSearchx0x6ComputedData.label" :tabindex="tSearchx0x6ComputedData.tabindex" :validate-event="tSearchx0x6ComputedData.validate-event" :c-style="tSearchx0x6ComputedData.cStyle" :has-search-btn="tSearchx0x6ComputedData.hasSearchBtn" @input="oninput1740556539204">` +
`</t-search>` +
`<t-text id="t-text-f58e.9a1f85518" class="sectionDiaPop-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle" @click="onclick1741660833277">` +
`</t-text>` +
`<t-rect id="t-rect-6661.6e52a6541" class="sectionDiaPop-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle" @click="onclick1741660817890">` +
`</t-rect>` +
`<t-table id="t-table-cae5.2831a29f3" class="sectionDiaPop-t-table-0-9"  :height="tTablex0x9ComputedData.height" :stripe="tTablex0x9ComputedData.stripe" :border="tTablex0x9ComputedData.border" :auto-scroll="tTablex0x9ComputedData.autoScroll" :speed="tTablex0x9ComputedData.speed" :show-animation="tTablex0x9ComputedData.showAnimation" :animation-delay="tTablex0x9ComputedData.animationDelay" :animation-type="tTablex0x9ComputedData.animationType" :columns="tTablex0x9ComputedData.columns" :data="state.tableData" :default-sort="tTablex0x9ComputedData.defaultSort" :c-style="tTablex0x9ComputedData.cStyle">` +
`</t-table>` +
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
   PARAMS_CODE_WATERQUALITYLEVELS: "1,2,3,4,5,6",
   clmData: [],
   POINT_NAME: "",
   CODE_WATERQUALITYLEVELS: "",
   sectionData: [],
   tableData: [],
   toDayTime: "",
   toMonthTime: "",
   pageInfo: {"pageNum":1,"pageSize":5,"total":0,"pages":0},
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
tRectx0x1: {
defaultStyle: {
            default: {"width":"916px","height":"64px","position":"unset","left":"0px","top":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--dm-xq-ss-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"916px","height":"64px","position":"unset","left":"0px","top":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--dm-xq-ss-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}}, 
 },
},
tSelectx0x2: {
defaultStyle: {
            default: {"width":"349px","height":"32px","fontSize":"14px","color":"var(--business-white)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","position":"unset","left":"542px","top":"52px","animationName":""},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"DICTIONARY_NAME","value":"DICTIONARY_CODE","disabled":"disabled"},
multiple:false,
placeholder:"请选择水质类别",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"349px","height":"32px","fontSize":"14px","color":"var(--business-white)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","position":"unset","left":"542px","top":"52px","animationName":""},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","box-shadow":"var(--business-select-shadow) 0px 0px 0px 2px "}},"placeholder":{"default":{"color":"#fff"}},"arrow":{"default":{"color":"rgba(255, 255, 255, 0.9)","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px","right":"0","position":"relative","left":"7px"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","width":"349px","paddingLeft":"6px","paddingRight":"6px"}},"dropdownItem":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 0.9)","height":"28px","lineHeight":"28px","width":"349px","marginBottom":"4px","paddingLeft":"8px","paddingRight":"8px"},"hover":{"color":"#fff","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"color":"var(--business-text-hover)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"disabledWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"56px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"58px","left":"18px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"断面名称",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"58px","left":"18px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"56px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"58px","left":"474px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"水质类别",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"58px","left":"474px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""}}}, 
 },
},
tPaginationBasex0x5: {
defaultStyle: {
            default: {"width":"916px","height":"38px","position":"unset","left":"0px","top":"432px","color":"","animationName":"","display":"flex","justifyContent":"space-between","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
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
cStyle:{"wrapper":{"default":{"width":"916px","height":"38px","position":"unset","left":"0px","top":"432px","color":"","animationName":"","display":"flex","justifyContent":"space-between","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"pagerItem":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","lineHeight":"32px","borderLeft":"1px none #366B92","borderTop":"1px none #366B92","borderRight":"1px none #366B92","borderBottom":"1px none #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":"var(--business-select-item-bg)"},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"var(--t-button-bg)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"var(--t-color-text-green)","marginLeft":"0px","marginRight":"0px","backgroundColor":"var(--business-select-drop-bg)"},"hover":{"color":"#FFFFFF","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"more":{"default":{"color":"var(--t-color-text-green)"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"var(--t-color-text-green)","paddingRight":"30px","paddingLeft":"10px","fontSize":"14px","marginRight":"0px"}},"sizesWrapper":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","marginRight":"10px","marginLeft":"200px"}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)","backgroundColor":""},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--t-color-text-green)","backgroundColor":""}},"jumpInput":{"default":{"color":"var(--t-color-text-green)","backgroundColor":"var(--business-select-item-bg)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"sizesDropdownItem":{"default":{"color":"rgba(255, 255, 255, 0.9)","backgroundColor":"","borderLeft":"1px none #00828A","borderTop":"1px none #00828A","borderRight":"1px none #00828A","borderBottom":"1px none #00828A"},"active":{"backgroundColor":"var(--business-select-item-bg)","color":"var(--business-text-hover)"},"hover":{"color":"var(--business-text-hover)","backgroundColor":"var(--business-select-item-bg)"}}}, 
 },
},
tSearchx0x6: {
defaultStyle: {
            default: {"width":"349px","height":"32px","position":"unset","left":"86px","top":"52px","backgroundColor":"var(--t-select-fill-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","color":"#fff","fontSize":"14px","lineHeight":"14px","animationName":""},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
'show-word-limit':false,
placeholder:"请输入任务名称",
clearable:true,
'show-password':false,
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
'validate-event':true,
cStyle:{"wrapper":{"default":{"width":"349px","height":"32px","position":"unset","left":"86px","top":"52px","backgroundColor":"var(--t-select-fill-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","color":"#fff","fontSize":"14px","lineHeight":"14px","animationName":""},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"}},"suffix":{"default":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2022-08-15/0c3e42eea61542268a09220faa24d37e.png)","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundPosition":"50% 50%","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","display":"inline","color":"rgba(228, 106, 85, 0)","marginRight":"4px"}},"prefix":{"default":{"color":"rgba(255, 255, 255, 0.6)","backgroundColor":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","fontSize":"12px","marginRight":"0px","marginLeft":"-4px","marginBottom":"1px"}},"placeholder":{"default":{"color":"#fff","fontSize":"14px","fontWeight":"200","backgroundColor":"","marginLeft":"0px","paddingLeft":"0px"}}},
hasSearchBtn:false, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-btn-color)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"19px","top":"1px","cursor":"pointer"},
            
            },
 default: { 
 
label:"返回",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-btn-color)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"19px","top":"1px","cursor":"pointer"}}}, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"15px","height":"15px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-11/42d2d0abfc244fcfa23238b681db05e1.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"cover","backgroundPosition":"","-webkit-mask-position":"0% 0%","backgroundColor":"var(--t-btn-color)","left":"0px","top":"0px","cursor":"pointer","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"15px","height":"15px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-11/42d2d0abfc244fcfa23238b681db05e1.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"cover","backgroundPosition":"","-webkit-mask-position":"0% 0%","backgroundColor":"var(--t-btn-color)","left":"0px","top":"0px","cursor":"pointer","position":"unset"}}}, 
 },
},
tTablex0x9: {
defaultStyle: {
            default: {"width":"916px","height":"319px","animationName":"","paddingLeft":"0px","position":"unset","left":"0px","top":"101px"},
            
            },
 default: { 
 
height:"319",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[{"label":"监测时间（月）","key":"MONITORTIME","align":"center","operationList":[],"stateList":[],"width":"183.2PX","showOverflowTooltip":true,"infoPosition":"right","headerAlign":"center"},{"label":"断面名称","key":"POINT_NAME","align":"left","operationList":[],"stateList":[],"showOverflowTooltip":true,"infoPosition":"left","headerAlign":"left","width":"183.2PX"},{"label":"水质级别","key":"WATERQUALITYLEVELNAME","stateKey":"standard","align":"center","type":"default","operationList":[],"stateList":[{"name":"已达标","cellStyle":{"background":""},"fontStyle":{"color":"#04F87E"}},{"name":"未达标","cellStyle":{"background":""},"fontStyle":{"color":"#FF4D4E"}}],"width":"183.2PX","infoKey":"","style":{"fontStyle":{"color":"#00FF00"}},"showOverflowTooltip":true,"headerAlign":"center"},{"label":"考核目标","key":"WATERQUALITYLEVELTARGETNAME","stateKey":"standard","align":"center","type":"default","operationList":[],"stateList":[{"name":"已达标","cellStyle":{"background":""},"fontStyle":{"color":"#04F87E"}},{"name":"未达标","cellStyle":{"background":""},"fontStyle":{"color":"#FF4D4E"}}],"width":"183.2PX","infoKey":"","style":{"fontStyle":{"color":"#00FF00"}},"showOverflowTooltip":true,"headerAlign":"center"},{"label":"达标情况","key":"ISSTANDARDSSTR","stateKey":"ISSTANDARDSSTR","align":"center","type":"state","operationList":[],"stateList":[{"name":"达标","cellStyle":{"background":""},"fontStyle":{"color":"#5BFF5E"}},{"name":"不达标","cellStyle":{"background":""},"fontStyle":{"color":"#FF3131"}}],"width":"183.2PX","infoKey":"","style":{"fontStyle":{"color":""}},"showOverflowTooltip":true,"headerAlign":"center"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"916px","height":"319px","animationName":"","paddingLeft":"0px","position":"unset","left":"0px","top":"101px"}},"headerCell":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","fontStyle":"normal","fontWeight":"400","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","lineHeight":"20px","height":"45px"}},"bodyCell":{"default":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(58,93,153)","height":"42px","lineHeight":"60px","color":"#fff","fontSize":"16px"},"hover":{"backgroundColor":"rgba(255, 255, 255, 0)","color":""}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)"},"hover":{"color":"#FFE594"}},"bodyCellInner":{"default":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","height":"22px"}},"headerRowWrapper":{"default":{"backgroundImage":"var(--t-norm-dia-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","fontSize":"22px","color":"","height":"45px"}},"rowWrapper":{"default":{"lineHeight":"60px","height":"42px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgba(255,255,255,0)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--table-bm-color)"},"hover":{"color":""}},"stripeBodyRow":{"hover":{"color":"#FFE594"},"default":{"backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 98.64864864864865%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(59, 182, 151, 0)"}}}, 
 },
},
});
const getTime = () => {
// 创建一个新的Date对象，它默认包含当前的日期和时间
const currentDate = new Date();

// 获取年份（注意：getFullYear()返回的是四位数的年份）
const year = currentDate.getFullYear();

// 获取月份（注意：getMonth()返回的月份是从0开始的，所以1月是0，12月是11）
const month = currentDate.getMonth() + 1; // 加1以得到正确的月份数字

// 获取日期（即几号）
const day = currentDate.getDate();

// 如果你想要以特定的格式输出日期，比如YYYY-MM-DD，你可以这样做：
state.toDayTime = year + '-' +
    (month < 10 ? '0' + month : month) + '-' +
    (day < 10 ? '0' + day : day);
state.toMonthTime = year + '-' +
    (month < 10 ? '0' + month : month);
};
const setIndexColor = () => {
if (localStorage.getItem('color')) {
    const body = document.getElementsByTagName('body')[0];
    body.setAttribute('class', localStorage.getItem('color') || 'theme1');
}
};
const setDom = () => {
setTimeout(() => {
console.log(document.querySelector('.t-l-c-sectionDiaPop').style, '888888888888');
document.querySelector('.t-l-c-sectionDiaPop').style.transform = "scale(1)";
})

};
const onchange1740556400291 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.CODE_WATERQUALITYLEVELS = value;
// 设置变量值
state.PARAMS_CODE_WATERQUALITYLEVELS = value;
};
const onsizeChange1740555805646 = (pageSize) => {
// 设置变量值
state.pageInfo.pageSize = pageSize;
};
const oncurrentChange1740555939151 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
};
const oninput1740556539204 = (value) => {
// 设置变量值
state.POINT_NAME = value;
};
const onclick1741660833277 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'isTable',
                    value:false,
                    data: {
                      isTable: false
                    },
                  });
};
const onclick1741660817890 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'isTable',
                    value:false,
                    data: {
                      isTable: false
                    },
                  });
};
// 接口函数
const getData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"ac44dca81f24114240fb8ffe9e0a2e9c","CODE_WATERQUALITYLEVELS":state.PARAMS_CODE_WATERQUALITYLEVELS,"POINT_NAME":state.POINT_NAME,"REGION_CODE":global.waterCode,"MONITORTIME":global.waterTime,"CODE_WQDATASOURCETYPE":"surfaceWater","CODE_CONTROLLEVEL":"","WSYSTEM_CODE":"","IS_CONNECT_SECTION":"","ASSESSTYPE":"culmulate","DRINK_ID":"","WATERFUNC_ID":"","AREA_CODE":"","pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize},}).then((res) => {
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
watch(() => [state.PARAMS_CODE_WATERQUALITYLEVELS,state.POINT_NAME,global.waterCode,global.waterTime,state.pageInfo.pageNum,state.pageInfo.pageSize], () => {
getData();
},{
deep: true, // 深度监听
});
// 初始请求，调取接口
getData();
// 接口函数
const getCodeData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"WATER_LEVEL"},}).then((res) => {
     // 成功的操作
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
  console.log(res, '使用部门');
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
 function handleWindowResize() {
                            setPageScale('t-l-c-sectionDiaPop', global.appScaleMode, 'width');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onBeforeMount(() => {
// 执行自定义方法
getTime();
// 执行自定义方法
setDom();
});
// 执行自定义方法
setIndexColor();
onMounted(() => {
setPageScale('t-l-c-sectionDiaPop', global.appScaleMode, 'width');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tSelectx0x2ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2.default, componentState.tSelectx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tPaginationBasex0x5ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x5.default, componentState.tPaginationBasex0x5?.[state.screenSize]));

 const tSearchx0x6ComputedData = computed(() => _.merge({}, componentState.tSearchx0x6.default, componentState.tSearchx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tTablex0x9ComputedData = computed(() => _.merge({}, componentState.tTablex0x9.default, componentState.tTablex0x9?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x1ComputedData,
tSelectx0x2ComputedData,
tTextx0x3ComputedData,
tTextx0x4ComputedData,
tPaginationBasex0x5ComputedData,
tSearchx0x6ComputedData,
tTextx0x7ComputedData,
tRectx0x8ComputedData,
tTablex0x9ComputedData,
onchange1740556400291,
onsizeChange1740555805646,
oncurrentChange1740555939151,
oninput1740556539204,
onclick1741660833277,
onclick1741660817890,
};
},
};