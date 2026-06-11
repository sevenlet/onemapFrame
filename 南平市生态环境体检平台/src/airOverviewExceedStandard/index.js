window.airOverviewExceedStandardComponent = {
template: 
`<div id="t-l-c-airOverviewExceedStandard" class="t-l-c-airOverviewExceedStandard" >` +
`<t-rect id="t-rect-2325.79ce94973" class="airOverviewExceedStandard-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-4161.9bd54c05e" class="airOverviewExceedStandard-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-ad67.771b51625" class="airOverviewExceedStandard-t-text-0-2"  :label="state.pageTitle" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-c2b5.7e5d67c97" class="airOverviewExceedStandard-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1734493046811">` +
`</t-rect>` +
`<t-table id="t-table-10d3.6d8162774" class="airOverviewExceedStandard-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :show-animation="tTablex0x4ComputedData.showAnimation" :animation-delay="tTablex0x4ComputedData.animationDelay" :animation-type="tTablex0x4ComputedData.animationType" :columns="state.tableColumn" :data="state.tableData" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle" :columns-raw="tTablex0x4ComputedData.columnsRaw">` +
`</t-table>` +
`<t-select id="t-select-ab9e.d3c502131" class="airOverviewExceedStandard-t-select-0-5"  :active-value="state.dataType" :options="tSelectx0x5ComputedData.options" :alias="tSelectx0x5ComputedData.alias" :multiple="tSelectx0x5ComputedData.multiple" :placeholder="tSelectx0x5ComputedData.placeholder" :clearable="tSelectx0x5ComputedData.clearable" :disabled="tSelectx0x5ComputedData.disabled" :name="tSelectx0x5ComputedData.name" :autocomplete="tSelectx0x5ComputedData.autocomplete" :filterable="tSelectx0x5ComputedData.filterable" :no-match-text="tSelectx0x5ComputedData.no-match-text" :no-data-text="tSelectx0x5ComputedData.no-data-text" :c-style="tSelectx0x5ComputedData.cStyle" @change="onchange1737079560904">` +
`</t-select>` +
`<t-rect id="t-rect-8dba.a5896d875" class="airOverviewExceedStandard-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle" @click="onclick1737105650386">` +
`</t-rect>` +
`<t-pagination-base v-if="state.tableData.length !== 0" id="t-pagination-base-9c86.860fb54b9" class="airOverviewExceedStandard-t-pagination-base-0-7"  :total="state.pageInfo.total" :small="tPaginationBasex0x7ComputedData.small" :page-size="state.pageInfo.pageSize" :pager-count="tPaginationBasex0x7ComputedData.pagerCount" :current-page="state.page.pageNum" :layout="tPaginationBasex0x7ComputedData.layout" :page-sizes="tPaginationBasex0x7ComputedData.pageSizes" :disabled="tPaginationBasex0x7ComputedData.disabled" :c-style="tPaginationBasex0x7ComputedData.cStyle" @current-change="oncurrentChange1737097708005">` +
`</t-pagination-base>` +
`<t-date-picker v-if="state.timeType === 'day'" id="t-date-picker-04ae.5f12117ff" class="airOverviewExceedStandard-t-date-picker-0-8"  :placeholder="tDatePickerx0x8ComputedData.placeholder" :start-placeholder="tDatePickerx0x8ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x8ComputedData.endPlaceholder" :type="tDatePickerx0x8ComputedData.type" :clearable="tDatePickerx0x8ComputedData.clearable" :range-separator="tDatePickerx0x8ComputedData.rangeSeparator" :default-date="state.timeRange" :separator="tDatePickerx0x8ComputedData.separator" :readonly="tDatePickerx0x8ComputedData.readonly" :editable="tDatePickerx0x8ComputedData.editable" :c-style="tDatePickerx0x8ComputedData.cStyle" :is-disabled-front="tDatePickerx0x8ComputedData.isDisabledFront" :disabled-date="tDatePickerx0x8ComputedData.disabledDate" @date-change="ondateChange1737100985038">` +
`</t-date-picker>` +
`<t-tabs-base id="t-tabs-base-5d3b.85136843d" class="airOverviewExceedStandard-t-tabs-base-0-9"  :data="tTabsBasex0x9ComputedData.data" :space="tTabsBasex0x9ComputedData.space" :selected-tab-val="state.timeType" :inner-shadow-color="tTabsBasex0x9ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x9ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x9ComputedData.alias" :c-style="tTabsBasex0x9ComputedData.cStyle" @tab-click="ontabClick1737079975569">` +
`</t-tabs-base>` +
`<t-date-picker v-if="state.timeType === 'hour'" id="t-date-picker-6746.a68ba13a4" class="airOverviewExceedStandard-t-date-picker-0-10"  :placeholder="tDatePickerx0x10ComputedData.placeholder" :start-placeholder="tDatePickerx0x10ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x10ComputedData.endPlaceholder" :type="tDatePickerx0x10ComputedData.type" :clearable="tDatePickerx0x10ComputedData.clearable" :range-separator="tDatePickerx0x10ComputedData.rangeSeparator" :default-date="state.timeRange" :separator="tDatePickerx0x10ComputedData.separator" :readonly="tDatePickerx0x10ComputedData.readonly" :editable="tDatePickerx0x10ComputedData.editable" :c-style="tDatePickerx0x10ComputedData.cStyle" :is-disabled-front="tDatePickerx0x10ComputedData.isDisabledFront" :disabled-date="tDatePickerx0x10ComputedData.disabledDate" @date-change="ondateChange1737079155341">` +
`</t-date-picker>` +
`<t-search id="t-search-a94b.0477f035c" class="airOverviewExceedStandard-t-search-0-11"  :type="tSearchx0x11ComputedData.type" :input-value="state.keyword" :maxlength="tSearchx0x11ComputedData.maxlength" :minlength="tSearchx0x11ComputedData.minlength" :show-word-limit="tSearchx0x11ComputedData.showWordLimit" :placeholder="tSearchx0x11ComputedData.placeholder" :clearable="tSearchx0x11ComputedData.clearable" :show-password="tSearchx0x11ComputedData.showPassword" :disabled="tSearchx0x11ComputedData.disabled" :prefix-icon="tSearchx0x11ComputedData.prefix-icon" :suffix-icon="tSearchx0x11ComputedData.suffix-icon" :rows="tSearchx0x11ComputedData.rows" :autosize="tSearchx0x11ComputedData.autosize" :name="tSearchx0x11ComputedData.name" :readonly="tSearchx0x11ComputedData.readonly" :step="tSearchx0x11ComputedData.step" :autofocus="tSearchx0x11ComputedData.autofocus" :form="tSearchx0x11ComputedData.form" :label="tSearchx0x11ComputedData.label" :tabindex="tSearchx0x11ComputedData.tabindex" :validate-event="tSearchx0x11ComputedData.validateEvent" :c-style="tSearchx0x11ComputedData.cStyle" :has-search-btn="tSearchx0x11ComputedData.hasSearchBtn" @change="onchange1737079057640">` +
`</t-search>` +
`<t-checkbox id="t-checkbox-2c3f.867ba6954" class="airOverviewExceedStandard-t-checkbox-0-12"  :data="tCheckboxx0x12ComputedData.data" :active="state.pollutorList" :data-alias="tCheckboxx0x12ComputedData.dataAlias" :border="tCheckboxx0x12ComputedData.border" :use-button="tCheckboxx0x12ComputedData.useButton" :c-style="tCheckboxx0x12ComputedData.cStyle" :data-raw="tCheckboxx0x12ComputedData.dataRaw" @change="onchange1736841546777">` +
`</t-checkbox>` +
`<t-text id="t-text-a06e.81d6c02bb" class="airOverviewExceedStandard-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle">` +
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
   pageInfo: {"pageNum":"1","pageSize":"10","size":"0","total":"0","pages":"0"},
   total: "0",
   page: {"pageSize":"10","pageNum":"1"},
   stateList: [{"name":"1","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","backgroundImage":"","backgroundSize":"100%","background":"#00e400","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"2","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#f9d000","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"3","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#FF7E00","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"4","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#FF0000","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"5","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#c500f4","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"6","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#8c0024","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"--","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#aaaaaa","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}}],
   tableData: [],
   pollutes: "",
   dataType: "zsj",
   keyword: "",
   timeEnd: "",
   timeStart: "",
   timeRange: ["",""],
   tableColumn: "",
   timeValue: "",
   maxTimeValue: "",
   timeType: "hour",
   pollutorList: [],
   isViewPollute: "",
   startTime: "",
   endTime: "",
   fusionDateString: "",
   pageTitle: "空气质量信息",
   baseColumn: "[\n  {\n    \"label\": \"名称\",\n    \"type\": \"default\",\n    \"key\": \"name\",\n    \"stateKey\": \"\",\n    \"width\": \"110PX\",\n    \"minWidth\": \"\",\n    \"align\": \"center\",\n    \"headerAlign\": \"center\",\n    \"sortable\": false,\n    \"showOverflowTooltip\": true,\n    \"style\": {\n      \"imageStyle\": {\n        \"backgroundImage\": \"\",\n        \"width\": \"14PX\",\n        \"height\": \"16PX\",\n        \"margin\": \"4px 0 0 0\"\n      },\n      \"fontStyle\": {\n        \"margin\": \"\",\n        \"padding\": \"\",\n        \"fontWeight\": \"normal\"\n      }\n    },\n    \"infoPosition\": \"left\"\n  },\n  {\n    \"label\": \"时间\",\n    \"type\": \"default\",\n    \"key\": \"time\",\n    \"stateKey\": \"\",\n    \"width\": \"0PX\",\n    \"minWidth\": \"\",\n    \"align\": \"center\",\n    \"headerAlign\": \"center\",\n    \"sortable\": false,\n    \"showOverflowTooltip\": false,\n    \"style\": {\n      \"imageStyle\": {\n        \"backgroundImage\": \"\",\n        \"width\": \"14PX\",\n        \"height\": \"16PX\",\n        \"margin\": \"4px 0 0 0\"\n      },\n      \"fontStyle\": {\n        \"margin\": \"0 2px\",\n        \"padding\": \"\",\n        \"fontWeight\": \"normal\",\n        \"fontSize\": \"14PX\",\n        \"color\": \"rgba(255, 38, 38, 1)\"\n      }\n    },\n    \"infoPosition\": \"right\"\n  },\n]",
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
            default: {"width":"1000px","height":"712px","position":"unset","left":"460px","top":"184px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"712px","position":"unset","left":"460px","top":"184px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"460px","top":"184px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"460px","top":"184px","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"194px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"479px","top":"198px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":""},
            
            },
 default: { 
 
label:"空气质量信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"194px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"479px","top":"198px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1412px","top":"195px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1412px","top":"195px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"960px","height":"500px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"480px","top":"337px"},
            
            },
 default: { 
 
height:"500",
stripe:false,
border:false,
autoScroll:false,
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[{"label":"融合日期","key":"SHOW_DATE","align":"center","operationList":[],"stateList":[]},{"label":"PM₂.₅","key":"PM25","align":"center","operationList":[],"stateList":[],"labelRaw":"PM₂.₅"},{"label":"PM₁₀","key":"PM10","align":"center","operationList":[],"stateList":[],"labelRaw":"PM₁₀"},{"label":"NO₂","key":"NO2","stateKey":"state","align":"center","type":"default","style":{"fontStyle":{"color":"#fff","padding":"8px 4px","borderRadius":"4px"}},"operationList":[],"stateList":[{"name":"不受理","fontStyle":{"background":"linear-gradient(0deg, rgba(245, 108, 108, 1) 0%, rgba(245, 108, 108, 1) 100%)"}},{"name":"已受理","fontStyle":{"background":"linear-gradient(0deg, rgba(82, 155, 46, 1) 0%, rgba(82, 155, 46, 1) 100%)"}}],"labelRaw":"NO₂"},{"label":"O₃-8h","key":"O3_8","align":"center","operationList":[],"stateList":[],"labelRaw":"O₃-8h"},{"label":"AQI","key":"AQI","align":"center","operationList":[],"stateList":[]},{"label":"首要污染物","key":"FIRSTPOLLUTE","align":"center","type":"default","stateList":[],"operationList":[{"name":"重新办理","id":"reDo","visible":true,"fontStyle":{"color":"#409eff"}},{"name":"删除","id":"delete","visible":true,"fontStyle":{"color":"#409eff"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"960px","height":"500px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"480px","top":"337px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"200px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}},
columnsRaw:[{"label":"融合日期","key":"SHOW_DATE","align":"center","operationList":[],"stateList":[]},{"label":"{{PM25}}","key":"PM25","align":"center","operationList":[],"stateList":[],"labelRaw":"{{PM25}}"},{"label":"{{PM10}}","key":"PM10","align":"center","operationList":[],"stateList":[],"labelRaw":"{{PM10}}"},{"label":"{{NO2}}","key":"NO2","stateKey":"state","align":"center","type":"default","style":{"fontStyle":{"color":"#fff","padding":"8px 4px","borderRadius":"4px"}},"operationList":[],"stateList":[{"name":"不受理","fontStyle":{"background":"linear-gradient(0deg, rgba(245, 108, 108, 1) 0%, rgba(245, 108, 108, 1) 100%)"}},{"name":"已受理","fontStyle":{"background":"linear-gradient(0deg, rgba(82, 155, 46, 1) 0%, rgba(82, 155, 46, 1) 100%)"}}],"labelRaw":"{{NO2}}"},{"label":"{{O3}}-8h","key":"O3_8","align":"center","operationList":[],"stateList":[],"labelRaw":"{{O3}}-8h"},{"label":"AQI","key":"AQI","align":"center","operationList":[],"stateList":[]},{"label":"首要污染物","key":"FIRSTPOLLUTE","align":"center","type":"default","stateList":[],"operationList":[{"name":"重新办理","id":"reDo","visible":true,"fontStyle":{"color":"#409eff"}},{"name":"删除","id":"delete","visible":true,"fontStyle":{"color":"#409eff"}}]}], 
 },
},
tSelectx0x5: {
defaultStyle: {
            default: {"width":"195px","height":"32px","position":"unset","left":"484px","top":"245px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"zsj",
options:[{"value":"zsj","label":"珠三角","disabled":false},{"value":"city","label":"五区","disabled":false},{"value":"street","label":"镇街","disabled":false},{"value":"point_gk","label":"国控点","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"195px","height":"32px","position":"unset","left":"484px","top":"245px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"color":"var(--t-white)"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"1385px","top":"286px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"搜索",
active:false,
cStyle:{"wrapper":{"default":{"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"1385px","top":"286px","cursor":"pointer","animationName":""}}}, 
 },
},
tPaginationBasex0x7: {
defaultStyle: {
            default: {"width":"857px","height":"24px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":"","left":"490px","top":"840px","position":"unset","marginRight":"0px","marginLeft":"0px","paddingLeft":"0px","color":""},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:10,
pagerCount:10,
currentPage:"1",
layout:"total, prev, pager, next,",
pageSizes:[10,20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"857px","height":"24px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":"","left":"490px","top":"840px","position":"unset","marginRight":"0px","marginLeft":"0px","paddingLeft":"0px","color":""}},"pager":{"default":{"width":"26px","min-width":"26px","height":"20px","min-height":"20px","border-radius":"2px","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","color":"rgba(75, 225, 255, 1)","marginLeft":"4px","marginRight":"4px","marginTop":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"","backgroundImage":"url(/legopro-generated-apps/lego_file/res/2023-12-13/fde554267c814bc28c48bc9984c3897f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"50% 100%","-webkit-mask-position":""},"hover":{"border-radius":"2px","width":"26px","height":"26px","color":"rgba(75, 225, 255, 1)","backgroundImage":"url(/legopro-generated-apps/lego_file/res/2023-12-13/da7a2dd0f119469689a1e29197ecdee6.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"pagerItem":{"default":{"width":"auto","min-width":"auto","height":"auto","min-height":"auto","fontSize":"14px","lineHeight":"22px","color":"rgba(160, 189, 224, 1)","marginRight":"4px","marginLeft":"4px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"0px none rgba(3,11,47,1)","borderTop":"0px none rgba(3,11,47,1)","borderRight":"0px none rgba(3,11,47,1)","borderBottom":"0px none rgba(3,11,47,1)","paddingRight":"2px","backgroundColor":"rgba(23, 62, 20, 0)","backgroundImage":"url(img/background-image-default.80b0a61b.svg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","textAlign":"left","textDecoration":"none","paddingLeft":"2px"},"hover":{"width":"auto","min-width":"auto","height":"auto","min-height":"auto","lineHeight":"22px","fontSize":"14px","color":"rgba(61, 253, 245, 1)","backgroundColor":"rgba(23, 62, 20, 0)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px solid rgb(23,62,228)","borderTop":"0px solid rgb(23,62,228)","borderRight":"0px solid rgb(23,62,228)","borderBottom":"0px solid rgb(23,62,228)","textAlign":"left","textDecoration":"none","paddingLeft":"2px","paddingRight":"2px","marginRight":"4px","marginLeft":"4px"},"active":{"width":"26px","min-width":"26px","height":"20px","min-height":"20px","fontSize":"14px","lineHeight":"20px","marginRight":"4px","marginLeft":"4px","background":"radial-gradient(32% 32% at 50% 95%, rgba(78,119,255,0.20) 0%, rgba(76,117,255,0.00) 100%), radial-gradient(28% 28% at 50% 5%, rgba(0,213,255,0.33) 0%, rgba(0,213,255,0.00) 100%), linear-gradient(270deg, #15B5E1 0%, #365DCC 100%)","border":"1px solid","borderImage":"linear-gradient(180deg, #26CCED 0%, rgba(18,98,114,0.48) 22%, rgba(18,98,114,0.48) 80%, #26CCED 100%) 1","color":"rgba(61, 253, 245, 1)","backgroundColor":"rgba(8, 47, 216, 0)","backgroundImage":"url(/legopro-generated-apps/lego_file/res/2023-12-13/da7a2dd0f119469689a1e29197ecdee6.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"more":{"default":{"color":"rgba(226, 239, 255, 1)","lineHeight":"14px","fontSize":"14px","marginBottom":"0px","width":"26px","height":"20px","min-width":"26px","min-height":"20px","paddingBottom":"20px"}},"total":{"default":{"fontSize":"15px","color":"#fff","marginRight":"20px","lineHeight":"18px","marginLeft":"0px","paddingRight":"0","letterSpacing":"0px"}},"sizesWrapper":{"default":{"paddingRight":"0px","marginRight":"0px","paddingLeft":"0px","marginLeft":"0px"}}}, 
 },
},
tDatePickerx0x8: {
defaultStyle: {
            default: {"width":"300px","height":"32px","position":"unset","left":"805px","top":"244px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:false,
rangeSeparator:"-",
'default-date':["",""],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"300px","height":"32px","position":"unset","left":"805px","top":"244px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tTabsBasex0x9: {
defaultStyle: {
            default: {"width":"100px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"692px","top":"244px"},
            
            },
 default: { 
 
data:[{"label":"小时","value":"hour"},{"label":"日","value":"day"}],
space:1,
selectedTabVal:"hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"692px","top":"244px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}}, 
 },
},
tDatePickerx0x10: {
defaultStyle: {
            default: {"width":"300px","height":"32px","position":"unset","left":"805px","top":"244px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择时间",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:false,
rangeSeparator:"-",
'default-date':["",""],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"300px","height":"32px","position":"unset","left":"805px","top":"244px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tSearchx0x11: {
defaultStyle: {
            default: {"width":"195px","height":"32px","position":"unset","left":"1179px","top":"286px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"195px","height":"32px","position":"unset","left":"1179px","top":"286px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tCheckboxx0x12: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justifyContent":"center","width":"580px","height":"20px","position":"unset","left":"560px","top":"291px","animationName":""},
            
            },
 default: { 
 
data:[{"label":"PM₂.₅","value":"PM25","disabled":false},{"label":"PM₁₀","value":"PM10","disabled":false},{"label":"SO₂","value":"SO2","disabled":false},{"label":"NO₂","value":"NO2"},{"label":"CO","value":"CO"},{"label":"O₃","value":"O3"},{"label":"O₃-8h","value":"O3_8"}],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justifyContent":"center","width":"580px","height":"20px","position":"unset","left":"560px","top":"291px","animationName":""}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"}}},
dataRaw:[{"label":"{{PM25}}","value":"PM25","disabled":false},{"label":"{{PM10}}","value":"PM10","disabled":false},{"label":"{{SO2}}","value":"SO2","disabled":false},{"label":"{{NO2}}","value":"NO2"},{"label":"CO","value":"CO"},{"label":"{{O3}}","value":"O3"},{"label":"{{O3}}-8h","value":"O3_8"}], 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"486px","top":"291px"},
            
            },
 default: { 
 
label:"超标污染物",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"486px","top":"291px"}},"bodyCell":{"default":{"color":"rgba(255, 255, 255, 1)"}}}, 
 },
},
});
const initData = () => {
// state.pollutorList = [global.businessDialog.dialogParmas.pollutor];

const time = getLastHours();
state.timeStart = time.past48Hours;
state.timeEnd = time.currentTime;

state.timeRange = [state.timeStart, state.timeEnd];

getTableData();
};
const changeTableColumn = () => {
const cloumn = [
  {
    "label": "AQI",
    "type": "default",
    "key": "AQI",
    "stateKey": "aqiState0",
    "width": "110PX",
    "minWidth": "",
    "align": "center",
    "headerAlign": "center",
    "sortable": false,
    "showOverflowTooltip": false,
    "style": {
      "imageStyle": {
        "backgroundImage": "",
        "width": "14PX",
        "height": "16PX",
        "margin": "4px 0 0 0"
      },
      "fontStyle": {
        "margin": "4px 0 0 0",
        "padding": "0 0 0 0",
        "fontWeight": "normal",
        "fontSize": "14PX",
        "color": "rgba(255, 221, 0, 1)"
      }
    },
    "infoKey": ""
  }
];
state.pollutorList.forEach((item, index) => {
  cloumn.push(
    {
      "label": item === 'O3_8' ? replacePollutionCharacter('O3-8h') : replacePollutionCharacter(item),
      "type": "default",
      "key": item,
      "width": "110PX",
      "stateKey": "aqiState" + (index + 1),
      "minWidth": "",
      "align": "center",
      "headerAlign": "center",
      "sortable": false,
      "showOverflowTooltip": false,
      "style": {
        "imageStyle": {
          "backgroundImage": "",
          "width": "14PX",
          "height": "16PX",
          "margin": "4px 0 0 0"
        },
        "fontStyle": {
          "margin": "4px 0 0 0",
          "padding": "",
          "fontWeight": "normal",
          "fontSize": "14PX",
          "color": "rgba(0, 255, 140, 1)"
        }
      },
      "labelRaw": "{{PM25}}"
    })
})


state.tableColumn = state.baseColumn.concat(cloumn);
};
const getLevel = (AQI) => {
let level = '';
if (AQI <= 50) {
  level = '优';
} else if (AQI <= 100) {
  level = '良';
} else if (AQI <= 150) {
  level = '轻度污染';
} else if (AQI <= 200) {
  level = '中度污染';
} else if (AQI <= 300) {
  level = '重度污染';
} else if (AQI > 300) {
  level = '严重污染';
} else {
  level = '无';
}
return level;
};
const handleTableData = () => {
let AQI = [
  {
    "name": ["O3_8"],
    "html": "O？-8h"
  },
  {
    "name": ["O3", "o3"],
    "html": "O？"
  },
  {
    "name": ["PM10", "pm10"],
    "html": "PM？？"
  },
  {
    "name": ["PM25", "PM2_5", "PM2.5", "pm25", "pm2_5", "pm25"],
    "html": "PM？.？"
  },
  {
    "name": ["SO2", "so2"],
    "html": "SO？"
  },
  {
    "name": ["SO3", "so3"],
    "html": "SO？"
  },
  {
    "name": ["CO2", "co2"],
    "html": "CO？"
  },
  {
    "name": ["CODMN", "codmn"],
    "html": "CODmn"
  },
  {
    "name": ["VOCS", "vocs"],
    "html": "VOCs"
  },
  {
    "name": ["no"],
    "html": "NO"
  },
  {
    "name": ["NO2", "no2"],
    "html": "NO？"
  },
  {
    "name": ["NH3", "nh3"],
    "html": "NH？"
  },
  {
    "name": ["NOX", "nox"],
    "html": "NOx"
  },
  {
    "name": ["NH4", "nh4"],
    "html": "NH？？"
  },
  {
    "name": ["MNO4", "mno4"],
    "html": "MnO？ˉ"
  },
  {
    "name": ["PH", "ph"],
    "html": "pH"
  },
  {
    "name": ["M3", "m3", "立方米"],
    "html": ["m3"]
  },
  {
    "name": ["M2", "m2", "平方米"],
    "html": ["m2"]
  },
  {
    "name": ["下标"],
    "html": ["？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？"]
  },
  {
    "name": ["上标"],
    "html": ["？ 1 2 3 ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ ？ o ˙"]
  },
  {
    "name": ["汉字上标"],
    "html": ["一二三四上中下甲乙丙丁天地人"]
  }
]

state.tableData = state.tableData.map(item => {
  Object.keys(item).forEach(key => {
    if (key !== 'MONITORTIME') {
      if (!item[key] && typeof item[key] === 'string') {
        item[key] = "--";
      }
    }
  })


  // 处理首要污染物下标
  AQI.forEach(AQIItem => {
    AQIItem.name.forEach(name => {
      if (item.PRIMPOLLUTE.includes(name)) {
        item.PRIMPOLLUTE = item.PRIMPOLLUTE.replaceAll(name, AQIItem.html)
      }
    })
  })


  return {
    ...item,
  }
});
console.log(state.tableData);



// 处理表头
state.tableColumn = [];
// 第一列地区
const baseTableColumn = [
  {
    label: "行政区",
    type: "default",
    key: "POINT_NAME",
    align: "center",
    headerAlign: "center",
    showOverflowTooltip: true,
  },
  {
    label: "时间",
    type: "default",
    key: "MONITORTIME",
    width: "150",
    align: "center",
    headerAlign: "center",
    showOverflowTooltip: true,
  },
  {
    label: "首要污染物",
    type: "default",
    key: "PRIMPOLLUTE",
    align: "center",
    headerAlign: "center",
    showOverflowTooltip: true,
  }
]


const arr = []
const polluteSort = ["AQI", "PM25", "PM10", "SO2", "NO2", "CO", "O3", "O3_8"];
// 创建表头  表头顺序固定
polluteSort.forEach((item) => {
  // if (state.pollutorList.includes(item)) {
  let label = convertCharacter(item);
  if (item === 'O3_8') {
    label = convertCharacter('O3') + '-8h';
  }
  const column = {
    label,
    type: "state",
    key: item,
    stateKey: `${item}_LEVELINDEX`,
    infoPosition: "left",
    tooltipPosition: "top",
    align: "center",
    headerAlign: "center",
    sortable: false,
    showOverflowTooltip: false,
    infoStyle: {
      fontStyle: {
        color: "#eee",
      }
    },
    stateList: state.stateList,
    labelRaw: item
  }
  arr.push(column);
  // }
})
state.tableColumn = baseTableColumn.concat(arr);

};
const handlePollute = () => {
console.log(state.pollutorList);
state.pollutes = state.pollutorList.join(',');
};
const handleTimeChange = () => {
state.timeStart = state.timeRange[0];
state.timeEnd = state.timeRange[1];
getTableData();
};
const getLastHours = () => {
function formatDateToYMDH(date) {
  // 获取年份、月份、日期和小时
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');  // 月份从0开始，需要加1
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');

  // 格式化为 yyyy-MM-DD HH
  return `${year}-${month}-${day} ${hour}`;
}

// 获取当前时间
const now = new Date();

// 获取当前时间的 48 小时之前的时间
const past48Hours = new Date(now.getTime() - 48 * 60 * 60 * 1000);

// 格式化日期
const formattedNow = formatDateToYMDH(now);
const formattedPast48Hours = formatDateToYMDH(past48Hours);

// 输出当前时间和48小时前的时间
console.log("当前时间:", formattedNow);
console.log("48小时前的时间:", formattedPast48Hours);

return {
  currentTime: formattedNow,    // 格式化后的当前时间
  past48Hours: formattedPast48Hours  // 格式化后的48小时前时间
};
};
const handleTimeTypeChange = () => {
const time = getLastHours();
state.timeStart = time.past48Hours;
state.timeEnd = time.currentTime;

if (state.timeType === 'day') {
  state.timeStart = state.timeStart.slice(0, 10);
  state.timeEnd = state.timeEnd.slice(0, 10);
}

state.timeRange = [state.timeStart, state.timeEnd];
console.log(state.timeRange);

getTableData();
};
const handleKeywordChange = (data) => {
if (typeof data === 'string') {
  state.keyword = data;
}
};
const onclick1734493046811 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'',
                    data: {
                      businessDialog:{dialogName: ''}
                    },
                  });
};
const onchange1737079560904 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.dataType = value;
};
const ondateChange1737079155341 = (data) => {
// 设置变量值
state.timeRange = data;
// 执行自定义方法
handleTimeChange();
};
const ontabClick1737079975569 = (data) => {
// 设置变量值
state.timeType = data.value;
// 执行自定义方法
handleTimeTypeChange();
};
const onchange1737079057640 = (value) => {
// 执行自定义方法
handleKeywordChange(value);
};
const onchange1736841546777 = (data) => {
// 设置变量值
state.pollutorList = data;
// 执行自定义方法
handlePollute();
};
const oncurrentChange1737097708005 = (currentPage) => {
// 设置变量值
state.page.pageNum = currentPage;
};
const ondateChange1737100985038 = (data) => {
// 设置变量值
state.timeRange = data;
// 执行自定义方法
handleTimeChange();
};
const onclick1737105650386 = () => {
// 事件交互-请求调用接口
getTableData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
// 接口函数
const getTableData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"pageNum":state.page.pageNum,"pageSize":state.page.pageSize,"END_DATE":state.timeEnd,"START_DATE":state.timeStart,"DATA_TYPE":state.dataType,"TIME_TYPE":state.timeType,"keyword":state.keyword,"POLLUTES":state.pollutes,"interfaceId":"9d4b3b1a756c434bcc7e796a2adc9e8a"},}).then((res) => {
     // 成功的操作
     

if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.tableData = res?.data?.data;
  state.pageInfo = res.data.head.pageInfo;
  handleTableData();
} else {
  state.tableData = []
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableResult = []
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [state.page.pageNum,state.page.pageSize,state.dataType,state.pollutes], () => {
getTableData();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewExceedStandard', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-airOverviewExceedStandard', global.appScaleMode, 'normal');
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

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

 const tSelectx0x5ComputedData = computed(() => _.merge({}, componentState.tSelectx0x5.default, componentState.tSelectx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tPaginationBasex0x7ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x7.default, componentState.tPaginationBasex0x7?.[state.screenSize]));

 const tDatePickerx0x8ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x8.default, componentState.tDatePickerx0x8?.[state.screenSize]));

 const tTabsBasex0x9ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x9.default, componentState.tTabsBasex0x9?.[state.screenSize]));

 const tDatePickerx0x10ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x10.default, componentState.tDatePickerx0x10?.[state.screenSize]));

 const tSearchx0x11ComputedData = computed(() => _.merge({}, componentState.tSearchx0x11.default, componentState.tSearchx0x11?.[state.screenSize]));

 const tCheckboxx0x12ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x12.default, componentState.tCheckboxx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tTablex0x4ComputedData,
tSelectx0x5ComputedData,
tRectx0x6ComputedData,
tPaginationBasex0x7ComputedData,
tDatePickerx0x8ComputedData,
tTabsBasex0x9ComputedData,
tDatePickerx0x10ComputedData,
tSearchx0x11ComputedData,
tCheckboxx0x12ComputedData,
tTextx0x13ComputedData,
onclick1734493046811,
onchange1737079560904,
onclick1737105650386,
oncurrentChange1737097708005,
ondateChange1737100985038,
ontabClick1737079975569,
ondateChange1737079155341,
onchange1737079057640,
onchange1736841546777,
};
},
};