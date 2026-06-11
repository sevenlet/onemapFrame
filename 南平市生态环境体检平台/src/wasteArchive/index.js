window.wasteArchiveComponent = {
template: 
`<div id="t-l-c-wasteArchive" class="t-l-c-wasteArchive" >` +
`<t-pagination-base id="t-pagination-base-2f79.3562df8be" class="wasteArchive-t-pagination-base-0-0"  :total="replaceCssVariables(state.pageInfo.total, global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x0ComputedData.small" :page-size="replaceCssVariables(state.pageInfo.pageSize, global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x0ComputedData.pagerCount" :current-page="replaceCssVariables(state.pageInfo.pageNum, global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x0ComputedData.layout" :page-sizes="tPaginationBasex0x0ComputedData.pageSizes" :disabled="tPaginationBasex0x0ComputedData.disabled" :c-style="tPaginationBasex0x0ComputedData.cStyle" @size-change="onsizeChange1752115006591" @current-change="oncurrentChange1752115035233">` +
`</t-pagination-base>` +
`<t-table id="t-table-10aa.8399d93c5" class="wasteArchive-t-table-0-1"  :height="tTablex0x1ComputedData.height" :stripe="tTablex0x1ComputedData.stripe" :border="tTablex0x1ComputedData.border" :auto-scroll="tTablex0x1ComputedData.autoScroll" :speed="tTablex0x1ComputedData.speed" :columns="tTablex0x1ComputedData.columns" :data="replaceCssVariables(state.pageInfo.list, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x1ComputedData.defaultSort" :c-style="tTablex0x1ComputedData.cStyle">` +
`</t-table>` +
`<t-input id="t-input-3316.cb8a7d37f" class="wasteArchive-t-input-0-2"  :type="tInputx0x2ComputedData.type" :input-value="replaceCssVariables(state.wasteName, global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x2ComputedData.maxlength" :minlength="tInputx0x2ComputedData.minlength" :show-word-limit="tInputx0x2ComputedData.showWordLimit" :placeholder="tInputx0x2ComputedData.placeholder" :clearable="tInputx0x2ComputedData.clearable" :show-password="tInputx0x2ComputedData.showPassword" :disabled="tInputx0x2ComputedData.disabled" :prefix-icon="tInputx0x2ComputedData.prefix-icon" :suffix-icon="tInputx0x2ComputedData.suffix-icon" :rows="tInputx0x2ComputedData.rows" :autosize="tInputx0x2ComputedData.autosize" :name="tInputx0x2ComputedData.name" :readonly="tInputx0x2ComputedData.readonly" :step="tInputx0x2ComputedData.step" :autofocus="tInputx0x2ComputedData.autofocus" :form="tInputx0x2ComputedData.form" :label="tInputx0x2ComputedData.label" :tabindex="tInputx0x2ComputedData.tabindex" :validate-event="tInputx0x2ComputedData.validateEvent" :c-style="tInputx0x2ComputedData.cStyle" @change="onchange1752112221135">` +
`</t-input>` +
`<t-input id="t-input-ae9c.d60f2edfb" class="wasteArchive-t-input-0-3"  :type="tInputx0x3ComputedData.type" :input-value="replaceCssVariables(state.receiveUnit, global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x3ComputedData.maxlength" :minlength="tInputx0x3ComputedData.minlength" :show-word-limit="tInputx0x3ComputedData.showWordLimit" :placeholder="tInputx0x3ComputedData.placeholder" :clearable="tInputx0x3ComputedData.clearable" :show-password="tInputx0x3ComputedData.showPassword" :disabled="tInputx0x3ComputedData.disabled" :prefix-icon="tInputx0x3ComputedData.prefix-icon" :suffix-icon="tInputx0x3ComputedData.suffix-icon" :rows="tInputx0x3ComputedData.rows" :autosize="tInputx0x3ComputedData.autosize" :name="tInputx0x3ComputedData.name" :readonly="tInputx0x3ComputedData.readonly" :step="tInputx0x3ComputedData.step" :autofocus="tInputx0x3ComputedData.autofocus" :form="tInputx0x3ComputedData.form" :label="tInputx0x3ComputedData.label" :tabindex="tInputx0x3ComputedData.tabindex" :validate-event="tInputx0x3ComputedData.validateEvent" :c-style="tInputx0x3ComputedData.cStyle" @change="onchange1752112267231">` +
`</t-input>` +
`<t-input id="t-input-53ef.5a50fb782" class="wasteArchive-t-input-0-4"  :type="tInputx0x4ComputedData.type" :input-value="replaceCssVariables(state.productUnit, global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x4ComputedData.maxlength" :minlength="tInputx0x4ComputedData.minlength" :show-word-limit="tInputx0x4ComputedData.showWordLimit" :placeholder="tInputx0x4ComputedData.placeholder" :clearable="tInputx0x4ComputedData.clearable" :show-password="tInputx0x4ComputedData.showPassword" :disabled="tInputx0x4ComputedData.disabled" :prefix-icon="tInputx0x4ComputedData.prefix-icon" :suffix-icon="tInputx0x4ComputedData.suffix-icon" :rows="tInputx0x4ComputedData.rows" :autosize="tInputx0x4ComputedData.autosize" :name="tInputx0x4ComputedData.name" :readonly="tInputx0x4ComputedData.readonly" :step="tInputx0x4ComputedData.step" :autofocus="tInputx0x4ComputedData.autofocus" :form="tInputx0x4ComputedData.form" :label="tInputx0x4ComputedData.label" :tabindex="tInputx0x4ComputedData.tabindex" :validate-event="tInputx0x4ComputedData.validateEvent" :c-style="tInputx0x4ComputedData.cStyle" @change="onchange1752113999603_0_0">` +
`</t-input>` +
`<t-date-picker id="t-date-picker-ef50.b823fbfd" class="wasteArchive-t-date-picker-0-5"  :placeholder="tDatePickerx0x5ComputedData.placeholder" :start-placeholder="tDatePickerx0x5ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x5ComputedData.endPlaceholder" :type="tDatePickerx0x5ComputedData.type" :clearable="tDatePickerx0x5ComputedData.clearable" :range-separator="tDatePickerx0x5ComputedData.rangeSeparator" :default-date="replaceCssVariables(state.transferTime, global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x5ComputedData.separator" :readonly="tDatePickerx0x5ComputedData.readonly" :editable="tDatePickerx0x5ComputedData.editable" :c-style="tDatePickerx0x5ComputedData.cStyle" @date-change="ondateChange1752111851791">` +
`</t-date-picker>` +
`<t-text id="t-text-c350.94a526faa" class="wasteArchive-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-6cf0.4fa80f93" class="wasteArchive-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-dafe.28f61762f" class="wasteArchive-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-462e.09b736acc" class="wasteArchive-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle">` +
`</t-text>` +
`<t-button id="t-button-7fe8.4cfc96522" class="wasteArchive-t-button-0-10"  :label="tButtonx0x10ComputedData.label" :round="tButtonx0x10ComputedData.round" :plain="tButtonx0x10ComputedData.plain" :disabled="tButtonx0x10ComputedData.disabled" :type="tButtonx0x10ComputedData.type" :size="tButtonx0x10ComputedData.size" :native-type="tButtonx0x10ComputedData.native-type" :c-style="tButtonx0x10ComputedData.cStyle" @click="onclick1752116084457">` +
`</t-button>` +
`<t-button id="t-button-5fa8.767c5ea95" class="wasteArchive-t-button-0-11"  :label="tButtonx0x11ComputedData.label" :round="tButtonx0x11ComputedData.round" :plain="tButtonx0x11ComputedData.plain" :disabled="tButtonx0x11ComputedData.disabled" :type="tButtonx0x11ComputedData.type" :size="tButtonx0x11ComputedData.size" :native-type="tButtonx0x11ComputedData.native-type" :c-style="tButtonx0x11ComputedData.cStyle" @click="onclick1752115978457">` +
`</t-button>` +
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
   standenterId: "",
   pageInfo: {"total":0,"pageNum":1,"pageSize":7,"list":""},
   productUnit: "",
   endTime: "",
   startTime: "",
   transferTime: "",
   wasteName: "",
   receiveUnit: "",
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
tPaginationBasex0x0: {
defaultStyle: {
            default: {"width":"788px","height":"24px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":"","left":"0px","top":"444px","position":"unset","marginRight":"0px","marginLeft":"0px","paddingLeft":"0px","color":""},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:7,
pagerCount:15,
currentPage:1,
layout:"total, prev, pager, next,",
pageSizes:[10,20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"788px","height":"24px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":"","left":"0px","top":"444px","position":"unset","marginRight":"0px","marginLeft":"0px","paddingLeft":"0px","color":""}},"pager":{"default":{"width":"26px","min-width":"26px","height":"20px","min-height":"20px","border-radius":"2px","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","color":"rgba(75, 225, 255, 1)","marginLeft":"4px","marginRight":"4px","marginTop":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"","backgroundImage":"url(/legopro-generated-apps/lego_file/res/2023-12-13/fde554267c814bc28c48bc9984c3897f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"50% 100%","-webkit-mask-position":""},"hover":{"border-radius":"2px","width":"26px","height":"26px","color":"rgba(75, 225, 255, 1)","backgroundImage":"url(/legopro-generated-apps/lego_file/res/2023-12-13/da7a2dd0f119469689a1e29197ecdee6.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"pagerItem":{"default":{"width":"auto","min-width":"auto","height":"auto","min-height":"auto","fontSize":"14px","lineHeight":"22px","color":"rgba(160, 189, 224, 1)","marginRight":"4px","marginLeft":"4px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"0px none rgba(3,11,47,1)","borderTop":"0px none rgba(3,11,47,1)","borderRight":"0px none rgba(3,11,47,1)","borderBottom":"0px none rgba(3,11,47,1)","paddingRight":"2px","backgroundColor":"rgba(23, 62, 20, 0)","backgroundImage":"url(img/background-image-default.80b0a61b.svg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","textAlign":"left","textDecoration":"none","paddingLeft":"2px"},"hover":{"width":"auto","min-width":"auto","height":"auto","min-height":"auto","lineHeight":"22px","fontSize":"14px","color":"rgba(61, 253, 245, 1)","backgroundColor":"rgba(23, 62, 20, 0)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px solid rgb(23,62,228)","borderTop":"0px solid rgb(23,62,228)","borderRight":"0px solid rgb(23,62,228)","borderBottom":"0px solid rgb(23,62,228)","textAlign":"left","textDecoration":"none","paddingLeft":"2px","paddingRight":"2px","marginRight":"4px","marginLeft":"4px"},"active":{"width":"26px","min-width":"26px","height":"20px","min-height":"20px","fontSize":"14px","lineHeight":"20px","marginRight":"4px","marginLeft":"4px","background":"radial-gradient(32% 32% at 50% 95%, rgba(78,119,255,0.20) 0%, rgba(76,117,255,0.00) 100%), radial-gradient(28% 28% at 50% 5%, rgba(0,213,255,0.33) 0%, rgba(0,213,255,0.00) 100%), linear-gradient(270deg, #15B5E1 0%, #365DCC 100%)","border":"1px solid","borderImage":"linear-gradient(180deg, #26CCED 0%, rgba(18,98,114,0.48) 22%, rgba(18,98,114,0.48) 80%, #26CCED 100%) 1","color":"rgba(61, 253, 245, 1)","backgroundColor":"rgba(8, 47, 216, 0)","backgroundImage":"url(/legopro-generated-apps/lego_file/res/2023-12-13/da7a2dd0f119469689a1e29197ecdee6.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"more":{"default":{"color":"rgba(226, 239, 255, 1)","lineHeight":"14px","fontSize":"14px","marginBottom":"0px","width":"26px","height":"20px","min-width":"26px","min-height":"20px","paddingBottom":"20px"}},"total":{"default":{"fontSize":"15px","color":"#fff","marginRight":"20px","lineHeight":"18px","marginLeft":"0px","paddingRight":"0","letterSpacing":"0px"}},"sizesWrapper":{"default":{"paddingRight":"0px","marginRight":"0px","paddingLeft":"0px","marginLeft":"0px"}}}, 
 },
},
tTablex0x1: {
defaultStyle: {
            default: {"width":"788px","height":"338px","position":"unset","left":"0px","top":"93px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":""},
            
            },
 default: { 
 
height:"338",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"序号","type":"default","key":"ROW_NUM","stateKey":"","width":"0PX","minWidth":"50PX","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"废物名称","type":"default","key":"FWXXMC","stateKey":"excellentValue","width":"0PX","minWidth":"120PX","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"转移量","type":"default","key":"ZYL","stateKey":"inferiorRateValue","width":"0PX","minWidth":"70PX","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"rgba(184, 255, 215, 0.8)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"接收单位","type":"default","key":"JSDWZYM","stateKey":"achievementRateValue","width":"0PX","minWidth":"130PX","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"产生单位","type":"default","key":"CSDWZYM","stateKey":"achievementRateValue","width":"0PX","minWidth":"150PX","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"转移时间","type":"default","key":"ZYSJ","stateKey":"achievementRateValue","width":"0PX","minWidth":"100PX","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]}],
data:"",
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"788px","height":"338px","position":"unset","left":"0px","top":"93px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":""}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tInputx0x2: {
defaultStyle: {
            default: {"width":"127px","height":"32px","paddingLeft":"12px","paddingRight":"12px","position":"unset","left":"70px","top":"0px","fontSize":"14px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","color":"rgba(255, 255, 255, 1)","animationName":""},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入废物名称",
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
cStyle:{"wrapper":{"default":{"width":"127px","height":"32px","paddingLeft":"12px","paddingRight":"12px","position":"unset","left":"70px","top":"0px","fontSize":"14px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","color":"rgba(255, 255, 255, 1)","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}}}, 
 },
},
tInputx0x3: {
defaultStyle: {
            default: {"width":"126px","height":"32px","paddingLeft":"12px","paddingRight":"12px","position":"unset","left":"294px","top":"1px","fontSize":"14px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","color":"rgba(255, 255, 255, 1)","animationName":""},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入接收单位",
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
cStyle:{"wrapper":{"default":{"width":"126px","height":"32px","paddingLeft":"12px","paddingRight":"12px","position":"unset","left":"294px","top":"1px","fontSize":"14px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","color":"rgba(255, 255, 255, 1)","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}}}, 
 },
},
tInputx0x4: {
defaultStyle: {
            default: {"width":"127px","height":"32px","paddingLeft":"12px","paddingRight":"12px","position":"unset","left":"70px","top":"47px","fontSize":"14px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","color":"rgba(255, 255, 255, 1)","animationName":""},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入产生单位",
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
cStyle:{"wrapper":{"default":{"width":"127px","height":"32px","paddingLeft":"12px","paddingRight":"12px","position":"unset","left":"70px","top":"47px","fontSize":"14px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","color":"rgba(255, 255, 255, 1)","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}}}, 
 },
},
tDatePickerx0x5: {
defaultStyle: {
            default: {"width":"255px","height":"33px","position":"unset","left":"533px","top":"0px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:true,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"255px","height":"33px","position":"unset","left":"533px","top":"0px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"2px","top":"10px","fontSize":"14px"},
            
            },
 default: { 
 
label:"废物名称：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"2px","top":"10px","fontSize":"14px"}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"89px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"225px","top":"9px","animationName":"","fontSize":"14px"},
            
            },
 default: { 
 
label:"接收单位：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"89px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"225px","top":"9px","animationName":"","fontSize":"14px"}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"70px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"462px","top":"8px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"转移时间：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"462px","top":"8px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"2px","top":"57px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"产生单位：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"2px","top":"57px","fontSize":"14px","animationName":""}}}, 
 },
},
tButtonx0x10: {
defaultStyle: {
            default: {"width":"70px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","position":"unset","left":"632px","top":"47px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"70px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","position":"unset","left":"632px","top":"47px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tButtonx0x11: {
defaultStyle: {
            default: {"width":"70px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","position":"unset","left":"706px","top":"47px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
label:"重置",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"70px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","position":"unset","left":"706px","top":"47px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
});
const setTime = () => {
state.startTime  = state.transferTime[0];
state.endTime  = state.transferTime[1];

console.log(state)
};
const reset = () => {
state.wasteName = '';
state.receiveUnit = '';
state.productUnit = '';
state.transferTime = [];
state.startTime = '';
state.endTime = '';
getData();
};
const initData = () => {
state.standenterId = global.businessDialog.dialogParmas.STANDENTERID;
};
const ondateChange1752111851791 = (data) => {
// 设置变量值
state.transferTime = data;
// 执行自定义方法
setTime();
};
const onchange1752112221135 = (value) => {
// 设置变量值
state.wasteName = value;
};
const onchange1752112267231 = (value) => {
// 设置变量值
state.receiveUnit = value;
};
const onchange1752113999603_0_0 = (value) => {
// 设置变量值
state.productUnit = value;
};
const onsizeChange1752115006591 = (pageSize) => {
// 设置变量值
state.pageInfo.pageSize = pageSize;
// 事件交互-请求调用接口
getData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const oncurrentChange1752115035233 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
// 事件交互-请求调用接口
getData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onclick1752115978457 = () => {
// 执行自定义方法
reset();
};
const onclick1752116084457 = () => {
// 事件交互-请求调用接口
getData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
// 接口函数
const getData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"CSDWZYM":state.productUnit,"END_TIME":state.endTime,"START_TIME":state.startTime,"STANDENTERID":state.standenterId,"FWXXMC":state.wasteName,"JSDWZYM":state.receiveUnit,"interfaceId":"0bdffc4bc031441bb43eb84db8716e4c"},}).then((res) => {
     // 成功的操作
     
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let { data, head } = res.data;
  state.pageInfo = head.pageInfo;
  state.pageInfo.list = data;
} else {
  state.pageInfo.list= []
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-wasteArchive', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
// 事件交互-请求调用接口
getData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
onMounted(() => {
setPageScale('t-l-c-wasteArchive', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tPaginationBasex0x0ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x0.default, componentState.tPaginationBasex0x0?.[state.screenSize]));

 const tTablex0x1ComputedData = computed(() => _.merge({}, componentState.tTablex0x1.default, componentState.tTablex0x1?.[state.screenSize]));

 const tInputx0x2ComputedData = computed(() => _.merge({}, componentState.tInputx0x2.default, componentState.tInputx0x2?.[state.screenSize]));

 const tInputx0x3ComputedData = computed(() => _.merge({}, componentState.tInputx0x3.default, componentState.tInputx0x3?.[state.screenSize]));

 const tInputx0x4ComputedData = computed(() => _.merge({}, componentState.tInputx0x4.default, componentState.tInputx0x4?.[state.screenSize]));

 const tDatePickerx0x5ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x5.default, componentState.tDatePickerx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tButtonx0x10ComputedData = computed(() => _.merge({}, componentState.tButtonx0x10.default, componentState.tButtonx0x10?.[state.screenSize]));

 const tButtonx0x11ComputedData = computed(() => _.merge({}, componentState.tButtonx0x11.default, componentState.tButtonx0x11?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tPaginationBasex0x0ComputedData,
tTablex0x1ComputedData,
tInputx0x2ComputedData,
tInputx0x3ComputedData,
tInputx0x4ComputedData,
tDatePickerx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tTextx0x8ComputedData,
tTextx0x9ComputedData,
tButtonx0x10ComputedData,
tButtonx0x11ComputedData,
onsizeChange1752115006591,
oncurrentChange1752115035233,
onchange1752112221135,
onchange1752112267231,
onchange1752113999603_0_0,
ondateChange1752111851791,
onclick1752116084457,
onclick1752115978457,
};
},
};