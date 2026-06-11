window.waterFunTargetComponent = {
template: 
`<div id="t-l-c-waterFunTarget" class="t-l-c-waterFunTarget" >` +
`<t-rect id="t-rect-7c02.8fd5deb0a" class="waterFunTarget-t-rect-0-0"  :tip="componentState.tRectx0x0.tip" label="" :active="componentState.tRectx0x0.active" :c-style="componentState.tRectx0x0.cStyle">` +
`</t-rect>` +
`<t-select id="t-select-edde.7b8816b3a" class="waterFunTarget-t-select-0-1"  :active-value="state.params.level" :options="state.levelOptions" :alias="componentState.tSelectx0x1.alias" :multiple="componentState.tSelectx0x1.multiple" placeholder="请选择" :clearable="componentState.tSelectx0x1.clearable" :disabled="componentState.tSelectx0x1.disabled" name="" autocomplete="off" :filterable="componentState.tSelectx0x1.filterable" no-match-text="无匹配数据" no-data-text="无数据" :c-style="componentState.tSelectx0x1.cStyle" @change="onchange1734068801469">` +
`</t-select>` +
`<t-table v-if="global.regionaQuery.regionType === 'wsystem'" id="t-table-95e9.5ac4fb8ac" class="waterFunTarget-t-table-0-2"  height="238" :stripe="componentState.tTablex0x2.stripe" :border="componentState.tTablex0x2.border" :auto-scroll="componentState.tTablex0x2.autoScroll" :speed="6" :columns="componentState.tTablex0x2.columns" :data="state.list" :default-sort="componentState.tTablex0x2.defaultSort" :c-style="componentState.tTablex0x2.cStyle">` +
`</t-table>` +
`<t-table v-if="global.regionaQuery.regionType === 'region'" id="t-table-7702.e927e9a4d" class="waterFunTarget-t-table-0-3"  height="238" :stripe="componentState.tTablex0x3.stripe" :border="componentState.tTablex0x3.border" :auto-scroll="componentState.tTablex0x3.autoScroll" :speed="6" :columns="componentState.tTablex0x3.columns" :data="state.list" :default-sort="componentState.tTablex0x3.defaultSort" :c-style="componentState.tTablex0x3.cStyle" @cell-click="oncellClick1734072647370">` +
`</t-table>` +
`<t-date-picker id="t-date-picker-b078.d04348d99" class="waterFunTarget-t-date-picker-0-4"  placeholder="请选择" start-placeholder="开始日期" end-placeholder="结束日期" type="month" :clearable="componentState.tDatePickerx0x4.clearable" range-separator="-" :default-date="state.params.time" separator="-" :readonly="componentState.tDatePickerx0x4.readonly" :editable="componentState.tDatePickerx0x4.editable" :c-style="componentState.tDatePickerx0x4.cStyle" @date-change="ondateChange1734068814191">` +
`</t-date-picker>` +
`<t-list-card id="t-list-card-cde2.e72088c42" class="waterFunTarget-t-list-card-0-5"  :data="state.statisticalCard" :spacing-x="8" :col="3" direction="vertical" :exchange-order="componentState.tListCardx0x5.exchangeOrder" :unit-break="componentState.tListCardx0x5.unitBreak" :key-field="componentState.tListCardx0x5.keyField" active-key-field="title" active="" :c-style="componentState.tListCardx0x5.cStyle">` +
`</t-list-card>` +
`<t-component id="t-component-9f0e.1949b66de" class="waterFunTarget-t-component-0-6"  name="titleFirstBgComponent" :c-style="componentState.tComponentx0x6.cStyle" src="/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg" component-name="titleFirstBgComponent">` +
`</t-component>` +
`<t-component id="t-component-7ac8.eb382f029" class="waterFunTarget-t-component-0-7"  name="titleFirstBgComponent" :c-style="componentState.tComponentx0x7.cStyle" src="/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg" component-name="titleFirstBgComponent">` +
`</t-component>` +
`<t-text v-if="global.regionaQuery.regionType === 'wsystem'" id="t-text-f25c.09c5d408" class="waterFunTarget-t-text-0-8"  label="流域考核结果" :editable="componentState.tTextx0x8.editable" :c-style="componentState.tTextx0x8.cStyle">` +
`</t-text>` +
`<t-text id="t-text-81b8.e509832ec" class="waterFunTarget-t-text-0-9"  label="各类水功能区达标情势" :editable="componentState.tTextx0x9.editable" :c-style="componentState.tTextx0x9.cStyle">` +
`</t-text>` +
`<t-chart-bar-simple id="t-chart-bar-simple-d133.3907a3252" class="waterFunTarget-t-chart-bar-simple-0-10"  :empty-img="state.noDataImg" :c-style="componentState.tChartBarSimplex0x10.cStyle" :options="componentState.tChartBarSimplex0x10.options" :data="state.barData" :series-setting="componentState.tChartBarSimplex0x10.seriesSetting" :bar="componentState.tChartBarSimplex0x10.bar">` +
`</t-chart-bar-simple>` +
`<t-text v-if="global.regionaQuery.regionType === 'region'" id="t-text-631e.7334d647c" class="waterFunTarget-t-text-0-11"  label="区域考核结果" :editable="componentState.tTextx0x11.editable" :c-style="componentState.tTextx0x11.cStyle">` +
`</t-text>` +
`<t-component id="t-component-6b34.5ec886b6a" class="waterFunTarget-t-component-0-12"  name="titleFirstBgComponent" :c-style="componentState.tComponentx0x12.cStyle" src="/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg" component-name="titleFirstBgComponent">` +
`</t-component>` +
`<t-text id="t-text-aef2.cf14959ee" class="waterFunTarget-t-text-0-13"  label="水功能区达标情势" :editable="componentState.tTextx0x13.editable" :c-style="componentState.tTextx0x13.cStyle">` +
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
noDataImg: "assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
barData: [],
levelOptions: [],
list: [],
params: {"level":"","time":""},
statisticalCard: [{"title":"总数","num":0,"unit":"个","color":"#fff","icon":"assets/images/2024-12-05/9318cb0685104a01ba0f6d8c0ad8dc9d.svg"},{"title":"达标数量","num":0,"unit":"/0","color":"#00FF22","icon":"assets/images/2024-12-05/afe9d3e0b36249acaeab422809287a6c.svg"},{"title":"达标率","num":0,"unit":"%","color":"#00FF22","icon":"assets/images/2024-12-05/6afe9e3395864daca876a23dd746587f.svg"}],
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
defaultStyle: {"width":"450px","height":"64px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"64px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}}},
},
tSelectx0x1: {
defaultStyle: {"width":"132px","height":"32px","position":"unset","left":"16px","top":"16px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},
options:[],
alias:{"label":"CONTENT","value":"VALUE","disabled":"disabled"},
multiple:false,
clearable:false,
disabled:false,
filterable:false,
cStyle:{"wrapper":{"default":{"width":"132px","height":"32px","position":"unset","left":"16px","top":"16px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}}},
},
tTablex0x2: {
defaultStyle: {"width":"410px","height":"238px","position":"unset","left":"20px","top":"591px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
stripe:true,
border:false,
autoScroll:false,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"52PX","type":"state","stateKey":"iconStatus"},{"label":"流域名称","key":"WSYSTEM_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"278PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"达标率","key":"STANDARDRATE","stateKey":"waterQualityTargetValue","align":"center","type":"default","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}}],"width":"80PX","style":{"fontStyle":{"width":"40PX","height":"PX"}},"headerAlign":"center"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"238px","position":"unset","left":"20px","top":"591px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}},
},
tTablex0x3: {
defaultStyle: {"width":"410px","height":"238px","position":"unset","left":"20px","top":"591px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
stripe:true,
border:false,
autoScroll:false,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"52PX","type":"state","stateKey":"iconStatus"},{"label":"行政区名称","key":"REGION_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"278PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"达标率","key":"STANDARDRATE","stateKey":"waterQualityTargetValue","align":"center","type":"default","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}}],"width":"80PX","style":{"fontStyle":{"width":"40PX","height":"PX"}},"headerAlign":"center"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"238px","position":"unset","left":"20px","top":"591px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}},
},
tDatePickerx0x4: {
defaultStyle: {"width":"132px","height":"32px","position":"unset","left":"160px","top":"16px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},
clearable:false,
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"132px","height":"32px","position":"unset","left":"160px","top":"16px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
},
tListCardx0x5: {
defaultStyle: {"width":"418px","height":"68px","position":"unset","left":"16px","top":"129px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
data:[{"title":"总数","num":0,"unit":"个","color":"#fff","icon":"assets/images/2024-12-05/9318cb0685104a01ba0f6d8c0ad8dc9d.svg"},{"title":"达标数量","num":0,"unit":"/0","color":"#00FF22","icon":"assets/images/2024-12-05/afe9d3e0b36249acaeab422809287a6c.svg"},{"title":"达标率","num":0,"unit":"%","color":"#00FF22","icon":"assets/images/2024-12-05/6afe9e3395864daca876a23dd746587f.svg"}],
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
cStyle:{"wrapper":{"default":{"width":"418px","height":"68px","position":"unset","left":"16px","top":"129px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"height":"66px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"num":{"default":{"fontSize":"24px","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"14px","color":"var(--t-white)","marginTop":"0px"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"20px"}},"numBox":{"default":{"marginTop":"6px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"alignItems":"flex-start","marginLeft":"8px"}}},
},
tComponentx0x6: {
defaultStyle: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"229px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"229px","animationName":""}}},
},
tComponentx0x7: {
defaultStyle: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"547px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"547px","animationName":""}}},
},
tTextx0x8: {
defaultStyle: {"width":"200px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"61px","top":"552px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"61px","top":"552px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}},
},
tTextx0x9: {
defaultStyle: {"width":"210px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"234px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"210px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"234px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}},
},
tChartBarSimplex0x10: {
defaultStyle: {"width":"410px","height":"243px","position":"unset","left":"19px","top":"272px","animationName":""},
bar: computed(() => activeChartTheme.value?.bar),
cStyle:{"wrapper":{"default":{"width":"410px","height":"243px","position":"unset","left":"19px","top":"272px","animationName":""}},"emptyText":{"default":{"fontSize":"14px","color":"var(--business-show-bg60)"}}},
options: computed(() => _.merge(_.cloneDeep(activeChartThemeOptions.value), {"grid":{"containLabel":true,"top":"15%"},"legend":{"textStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":13},"itemWidth":10,"itemHeight":10,"icon":"rect","padding":[3,5,5,5],"top":"top","orient":"horizontal"},"tooltip":{"backgroundColor":"rgba(0, 0, 0, 0.8)","borderColor":"rgba(255, 255, 255, 0.5)","textStyle":{"color":"rgba(255, 255, 255, 1)"}},"xAxis":{"axisLabel":{"color":"rgba(255, 255, 255, 0.8)","fontSize":13},"axisLine":{"lineStyle":{"type":"solid","color":"rgba(255, 255, 255, 0.4)"}},"axisTick":{"show":true,"lineStyle":{"color":"rgba(255, 255, 255, 0.4)"}},"nameTextStyle":{"color":"rgba(255, 255, 255, 0.7)","fontSize":13}},"yAxis":{"axisLabel":{"color":"rgba(255, 255, 255, 0.8)","fontSize":13},"axisLine":{"lineStyle":{"type":"solid","color":"rgba(255, 255, 255, 0.4)"}},"name":"个","nameTextStyle":{"color":"rgba(255, 255, 255, 0.7)","align":"right","padding":[0,0,10,-24],"fontSize":13},"splitLine":{"lineStyle":{"type":"dashed","color":"rgba(255, 255, 255, 0.2)"}}},"color":["#00FF22","#FFC000","#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"]})),
data:[],
seriesSetting:{"xAxisLabel":"WATERFUNC_CATEGORY_NAME","data":[{"name":"达标数量","dataKey":"STANDARDCOUNT","style":{"barWidth":12}},{"name":"监测数量","dataKey":"MONITORCOUNT","style":{"barWidth":12}}]},
},
tTextx0x11: {
defaultStyle: {"width":"200px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"61px","top":"552px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"61px","top":"552px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}},
},
tComponentx0x12: {
defaultStyle: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"88px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"88px","animationName":""}}},
},
tTextx0x13: {
defaultStyle: {"width":"200px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"93px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"93px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}},
},
});
const initData = () => {
// 初始化页面数据
const getData = async (regionType) => {
  // 给页面变量赋值
  state.params.time = state.waterFunState.time || "";
  state.levelOptions = [...(state.waterFunState.levelOptions || [])];
  state.params.level = state.waterFunState.level || "";
  state.waterFunState.name = "";
  // 水功能区达标情势
  getTotal();
  getComplianceStatus();
  // 请求列表
  state.list = [];
  if (regionType === 'region') {
    // 区域
    getQYList();
  } else {
    // 流域
    getLYList();
  }
  // 各类水功能区达标情势
  getComplianceBarData();
}
getData(global.regionaQuery.regionType);

watch(
  () => [
    state.params.level,
    global.regionaQuery.regionCode,
    global.regionaQuery.areaCode
  ],
  ([level, regionCode]) => {
    if (level && regionCode) {
      // 水功能区达标情势 - 总数
      getTotal()
    }
  }
);

watch(
  () => [
    state.params.level,
    state.params.time,
    global.regionaQuery.regionCode,
    global.regionaQuery.areaCode
  ],
  ([level, time, regionCode]) => {
    if (level && time && regionCode) {
      // 水功能区达标情势 - 达标情况
      getComplianceStatus();
      // 各类水功能区达标情势
      getComplianceBarData();
    }
  }
);

watch(
  () => [
    state.params.level,
    state.params.time,
    global.regionaQuery.regionCode,
    global.regionaQuery.regionType,
    global.regionaQuery.areaCode
  ],
  ([level, time, regionCode, regionType]) => {
    if (level && time && regionCode && regionType) {
      state.list = [];
      if (regionType === 'region') {
        // 区域列表
        getQYList();
      } else if (regionType === 'wsystem') {
        // 流域列表
        getLYList();
      }
    }
  }
);
};
const changeTime = (val) => {
state.params.time = val
state.waterFunState.time = val
// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "value",
      "shareCode": "MONITORTIME",
      "defaultValue": "",
      "runtimeValue": val
    },
    {
      "code": "defaultTab",
      "name": "",
      "defaultValue": "assess",
      "shareCode": "defaultTab",
      "runtimeValue": "assess"
    }
  ]
});

};
const changeLevel = (val) => {
state.params.level = val
state.waterFunState.level = val
// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "value",
      "shareCode": "WATERFUNC_LEVEL",
      "defaultValue": "1",
      "runtimeValue": val
    },
    {
      "code": "defaultTab",
      "shareCode": "defaultTab",
      "defaultValue": "assess",
      "name": "",
      "runtimeValue": "assess"
    }
  ]
});

};
const goToDetail = (row,col) => {
if (["行政区名称", "定位", '达标率'].includes(col.label)) {
  // 注意 这时候 还修改了 左上角选中区域值(估计是 发消息时 区域选择也接收了)
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    // 消息内容
    data: [
      {
        "code": "region_name",
        "shareCode": "REGION_NAME",
        "defaultValue": "",
        "runtimeValue": row.REGION_NAME
      },
      {
        "code": "region_code",
        "name": "",
        "defaultValue": "",
        "shareCode": "REGION_CODE",
        "runtimeValue": row.REGION_CODE
      }
    ]
  });
}

};
const goToLYDetail = () => {
};
const getProvider = () => {
const rootData = inject('waterFunState');

state.waterFunState = rootData;
};
const setNoDataIcon = () => {
// 设置暂无数据图标
state.noDataImg= getCssVariable('--business-no-data-img');
};
const onchange1734068801469 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
changeLevel(value);
};
const ondateChange1734068814191 = (data) => {
// 执行自定义方法
changeTime(data);
};
const oncellClick1734072647370 = (row,column,cell,event) => {
// 执行自定义方法
goToDetail(row,column);
};
// 接口函数
const getTotal = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"WSYSTEM_CODE":global.regionaQuery.areaCode,"WATERFUNC_LEVEL":state.params.level,"AREA_CODE":"","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"d9a0e61aceddfa3ba7b90dea8973d096"},}).then((res) => {
     // 成功的操作
     state.statisticalCard[0].num = 0 
if (res?.data?.head?.statusCode === '200') {
  state.statisticalCard[0].num = res?.data?.data?.WATERFUNCCOUNT || 0;
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.statisticalCard[0].num = 0 
      reject(error);
    });
  });
};
// 接口函数
const getComplianceStatus = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"WATERFUNC_LEVEL":state.params.level,"AREA_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.params.time,"interfaceId":"6abbfb9359d80003c0defb90b68044fb"},}).then((res) => {
     // 成功的操作
     state.statisticalCard[1].num = 0;
state.statisticalCard[1].unit = '/0';
state.statisticalCard[2].num = 0;
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  const { ACTUALWATERFUNCCOUNT, STANDARDCOUNT, STANDARDRATE } = res.data.data;
  state.statisticalCard[1].num = STANDARDCOUNT; // 达标数量
  state.statisticalCard[1].unit = `/${ACTUALWATERFUNCCOUNT}`; // 总数
  state.statisticalCard[2].num = STANDARDRATE; // 达标率
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.statisticalCard[1].num = 0;
state.statisticalCard[1].unit = '/0';
state.statisticalCard[2].num = 0;
      reject(error);
    });
  });
};
// 接口函数
const getLevel = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"034fb804c08288207bf1fdfed6e1ee53"},}).then((res) => {
     // 成功的操作
     state.params.level = '';
state.levelOptions = []
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data?.length) {
  state.levelOptions = data?.data || [];
  state.params.level = state.levelOptions[0].VALUE;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.params.level = '';
state.levelOptions = []
      reject(error);
    });
  });
};
// 接口函数
const getLYList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"WATERFUNC_LEVEL":state.params.level,"AREA_CODE":"","MONITORTIME":state.params.time,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"0fa55e007408a55eabcfc79d78370445"},}).then((res) => {
     // 成功的操作
     if (res?.data?.head?.statusCode === '200' && res?.data?.data.length) {
  state.list = res.data.data.map((item) => ({
    ...item,
    // 流域名称
    WSYSTEM_NAME: item?.WSYSTEM_NAME || '-',
    // 达标率
    STANDARDRATE: item?.STANDARDRATE ? `${item.STANDARDRATE}%` : '-',
    // 定位
    iconStatus: `${!!(item.LONGITUDE && item.LATITUDE)}`
  }))
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.list = [];
      reject(error);
    });
  });
};
// 接口函数
const getLastTime = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"waterFunc","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"a81e7ff7a8c32be0622babb2b869b274"},}).then((res) => {
     // 成功的操作
     state.params.time = '';
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  // 当前选中最新时间
  state.params.time = data.data.MONITORTIME || '';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.params.time = '';
      reject(error);
    });
  });
};
// 接口函数
const getQYList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","WATERFUNC_LEVEL":state.params.level,"MONITORTIME":state.params.time,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"e53d7b7ddb989a2850901b068ad7b9a2"},}).then((res) => {
     // 成功的操作
     state.list = [];

if (res?.data?.head?.statusCode === '200' && res?.data?.data.length) {
  state.list = res.data.data.map((item) => ({
    ...item,
    // 行政区名称
    REGION_NAME: item?.REGION_NAME || '-',
    // 达标率
    STANDARDRATE: item?.STANDARDRATE ? `${item?.STANDARDRATE}%` : '-',
    // 定位
    iconStatus: `${!!(item.LONGITUDE && item.LATITUDE)}`
  }))
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.list = [];
      reject(error);
    });
  });
};
// 接口函数
const getComplianceBarData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"WATERFUNC_LEVEL":state.params.level,"MONITORTIME":state.params.time,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"25b0b3e29c206687da72a94b7767fa24"},}).then((res) => {
     // 成功的操作
     state.barData = [];

if (res?.data?.head?.statusCode === '200' && res?.data?.data.length) {
  state.barData = res.data.data;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.barData = [];
      reject(error);
    });
  });
};
// 执行自定义方法
setNoDataIcon();
// 执行自定义方法
getProvider();
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-waterFunTarget', global.appScaleMode, 'normal');
window.onresize = () => {
setPageScale('t-l-c-waterFunTarget', global.appScaleMode, 'normal');
};
});
// 页面离开时的操作
onUnmounted(() => {
});
return {
global,
state,
componentState,
onchange1734068801469,
oncellClick1734072647370,
ondateChange1734068814191,
};
},
};