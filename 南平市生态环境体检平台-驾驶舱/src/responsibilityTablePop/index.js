window.responsibilityTablePopComponent = {
template: 
`<div id="t-l-c-responsibilityTablePop" class="t-l-c-responsibilityTablePop" >` +
`<t-rect id="t-rect-2e88.9a8a1ed2b" class="responsibilityTablePop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-table id="t-table-9237.04d2d0d11" class="responsibilityTablePop-t-table-0-1"  :height="tTablex0x1ComputedData.height" :stripe="tTablex0x1ComputedData.stripe" :border="tTablex0x1ComputedData.border" :auto-scroll="tTablex0x1ComputedData.autoScroll" :speed="tTablex0x1ComputedData.speed" :columns="tTablex0x1ComputedData.columns" :data="replaceCssVariables(filterData(state.tableList, componentPropBindingMap?.['t-table-9237.04d2d0d11']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x1ComputedData.defaultSort" :c-style="tTablex0x1ComputedData.cStyle" :highlight-current-row="tTablex0x1ComputedData.highlightCurrentRow">` +
`</t-table>` +
`<t-rect id="t-rect-9ee1.ec8130f44" class="responsibilityTablePop-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-select id="t-select-b1e1.fd27a03b4" class="responsibilityTablePop-t-select-0-3"  :active-value="replaceCssVariables(filterData(global.dashboardGlobalVariables.responsibilitySelectedStatus, componentPropBindingMap?.['t-select-b1e1.fd27a03b4']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x3ComputedData.options" :alias="tSelectx0x3ComputedData.alias" :multiple="tSelectx0x3ComputedData.multiple" :placeholder="tSelectx0x3ComputedData.placeholder" :clearable="tSelectx0x3ComputedData.clearable" :disabled="tSelectx0x3ComputedData.disabled" :name="tSelectx0x3ComputedData.name" :autocomplete="tSelectx0x3ComputedData.autocomplete" :filterable="tSelectx0x3ComputedData.filterable" :no-match-text="tSelectx0x3ComputedData.no-match-text" :no-data-text="tSelectx0x3ComputedData.no-data-text" :c-style="tSelectx0x3ComputedData.cStyle" @change="onchange1763689398877_0_0">` +
`</t-select>` +
`<t-text id="t-text-aed5.727093f1e" class="responsibilityTablePop-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-7d64.a178cb1f5" class="responsibilityTablePop-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-date-picker id="t-date-picker-1ad1.a126d44ad" class="responsibilityTablePop-t-date-picker-0-6"  :placeholder="tDatePickerx0x6ComputedData.placeholder" :start-placeholder="tDatePickerx0x6ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x6ComputedData.endPlaceholder" :type="tDatePickerx0x6ComputedData.type" :clearable="tDatePickerx0x6ComputedData.clearable" :range-separator="tDatePickerx0x6ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.selectYear, componentPropBindingMap?.['t-date-picker-1ad1.a126d44ad']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x6ComputedData.separator" :c-style="tDatePickerx0x6ComputedData.cStyle" :is-disabled-front="tDatePickerx0x6ComputedData.isDisabledFront" @date-change="ondateChange1742991197605">` +
`</t-date-picker>` +
`<t-text id="t-text-03db.65ad46ad" class="responsibilityTablePop-t-text-0-7"  :label="replaceCssVariables(filterData(state.dialogTitle, componentPropBindingMap?.['t-text-03db.65ad46ad']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-46ee.be203adb1" class="responsibilityTablePop-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle" @click="onclick1742797597302_0_0">` +
`</t-rect>` +
`<t-component id="t-component-a5a9.5d2a80317" class="responsibilityTablePop-t-component-0-9"  :name="tComponentx0x9ComputedData.name" :loading="tComponentx0x9ComputedData.loading" :c-style="tComponentx0x9ComputedData.cStyle" :src="tComponentx0x9ComputedData.src" :component-name="tComponentx0x9ComputedData.componentName" :page-id="tComponentx0x9ComputedData.pageId" :page-code="tComponentx0x9ComputedData.pageCode">` +
`</t-component>` +
`<t-text-common id="t-text-common-c20c.e8465135c" class="responsibilityTablePop-t-text-common-0-10"  :label="replaceCssVariables(filterData(state.tableTitle, componentPropBindingMap?.['t-text-common-c20c.e8465135c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x10ComputedData.editable" :c-style="tTextCommonx0x10ComputedData.cStyle">` +
`</t-text-common>` +
`<t-input id="t-input-b8c2.eb6ee9d06" class="responsibilityTablePop-t-input-0-11"  :type="tInputx0x11ComputedData.type" :input-value="replaceCssVariables(filterData(state.RESPONSIBLE_UNIT, componentPropBindingMap?.['t-input-b8c2.eb6ee9d06']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x11ComputedData.maxlength" :minlength="tInputx0x11ComputedData.minlength" :show-word-limit="tInputx0x11ComputedData.showWordLimit" :placeholder="tInputx0x11ComputedData.placeholder" :clearable="tInputx0x11ComputedData.clearable" :show-password="tInputx0x11ComputedData.showPassword" :disabled="tInputx0x11ComputedData.disabled" :prefix-icon="tInputx0x11ComputedData.prefix-icon" :suffix-icon="tInputx0x11ComputedData.suffix-icon" :rows="tInputx0x11ComputedData.rows" :autosize="tInputx0x11ComputedData.autosize" :name="tInputx0x11ComputedData.name" :readonly="tInputx0x11ComputedData.readonly" :step="tInputx0x11ComputedData.step" :autofocus="tInputx0x11ComputedData.autofocus" :form="tInputx0x11ComputedData.form" :label="tInputx0x11ComputedData.label" :tabindex="tInputx0x11ComputedData.tabindex" :validate-event="tInputx0x11ComputedData.validateEvent" :c-style="tInputx0x11ComputedData.cStyle" @change="onchange1768475705030">` +
`</t-input>` +
`<t-text id="t-text-ca59.bfa62993e" class="responsibilityTablePop-t-text-0-12"  :label="tTextx0x12ComputedData.label" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-2e88.9a8a1ed2b":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-table-9237.04d2d0d11":{"attributeName":"tTablex0x1","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]},"highlightCurrentRow":{"filters":[]}},"t-rect-9ee1.ec8130f44":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-select-b1e1.fd27a03b4":{"attributeName":"tSelectx0x3","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-text-aed5.727093f1e":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-7d64.a178cb1f5":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-1ad1.a126d44ad":{"attributeName":"tDatePickerx0x6","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]}},"t-text-03db.65ad46ad":{"attributeName":"tTextx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-46ee.be203adb1":{"attributeName":"tRectx0x8","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-a5a9.5d2a80317":{"attributeName":"tComponentx0x9","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-c20c.e8465135c":{"attributeName":"tTextCommonx0x10","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-input-b8c2.eb6ee9d06":{"attributeName":"tInputx0x11","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]}},"t-text-ca59.bfa62993e":{"attributeName":"tTextx0x12","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   RESPONSIBLE_UNIT: "",
   tableTitle: "",
   dialogTitle: "",
   selectProgress: "null",
   selectYear: "",
   tableList: [],
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
            default: {"width":"1534px","height":"941px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"187px","top":"74px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1534px","height":"941px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"187px","top":"74px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset"}}}, 
 },
},
tTablex0x1: {
defaultStyle: {
            default: {"width":"1458px","height":"760px","backgroundColor":"","position":"unset","left":"229px","top":"225px","animationName":""},
            
            },
 default: { 
 
height:"760px",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"序号","key":"sort_num","align":"center","operationList":[],"stateList":[],"style":{"fontStyle":{"color":"rgba(255, 255, 255, 1)"},"imageStyle":{"backgroundImage":""}},"width":"50px","minWidth":"50PX"},{"label":"指标","key":"second_level_index","align":"left","operationList":[],"stateList":[],"style":{"fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"14PX","padding":"0 0 0 16px","paddingLeft":"0px","paddingTop":"","paddingRight":"","paddingBottom":""}},"width":"400px","minWidth":"100PX","headerAlign":"center"},{"label":"责任单位","key":"responsible_unit","align":"left","operationList":[],"stateList":[],"style":{"fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"14PX","padding":"0 0 0 16px","paddingLeft":"0px","paddingTop":"","paddingRight":"","paddingBottom":""}},"width":"200px","minWidth":"100PX","headerAlign":"left"},{"label":"落实情况","key":"implementation_status","align":"left","operationList":[],"stateList":[],"width":"auto","minWidth":"100PX","style":{"fontStyle":{"color":"rgba(255, 255, 255, 1)"}}},{"label":"进度评价","key":"progress_evaluation_value","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"16PX","fontWeight":"400","color":"rgba(255, 255, 255, 1)"}},"width":"120px","minWidth":"70PX","showOverflowTooltip":true}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1458px","height":"760px","backgroundColor":"","position":"unset","left":"229px","top":"225px","animationName":""}},"headerCell":{"default":{"borderBottom":"0px none rgba(20,112,204,0.3)","borderLeft":"0px none rgba(20,112,204,0.3)","borderRight":"0px none rgba(20,112,204,0.3)","borderTop":"0px none rgba(20,112,204,0.3)","color":"var(--business-theme-light)","backgroundColor":"rgba(20, 112, 204, 0.3)","fontSize":"14px","lineHeight":"38px","height":"38px","marginTop":"0px","paddingBottom":"0px","paddingTop":"0px","marginBottom":"0px","paddingLeft":"0px"}},"bodyCell":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.1)","borderBottom":"0px none rgba(24,37,64,1)","borderLeft":"0px none rgba(24,37,64,1)","borderRight":"0px none rgba(24,37,64,1)","borderTop":"0px none rgba(24,37,64,1)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingBottom":"20px","paddingTop":"5px","lineHeight":"40px","fontSize":"14px","fontFamily":"微软雅黑","paddingLeft":"10px","paddingRight":"10px"},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(0, 59, 132, 0.3)"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)"}},"rowWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}}},
highlightCurrentRow:false, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"1535px","height":"47px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"187px","top":"75px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1535px","height":"47px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"187px","top":"75px","animationName":""}}}, 
 },
},
tSelectx0x3: {
defaultStyle: {
            default: {"width":"240px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":"","left":"301px","top":"180px","position":"unset"},
            
            },
 default: { 
 
activeValue:"1",
options:[{"value":"null","label":"全部","disabled":false},{"value":"1","label":"已完成","disabled":false},{"value":"2","label":"序时任务","disabled":false},{"value":"3","label":"滞后任务","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"240px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":"","left":"301px","top":"180px","position":"unset"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","box-shadow":"var(--business-select-shadow) 0px 0px 0px 2px "}},"placeholder":{"default":{"color":"var(--t-text)"}},"arrow":{"default":{"color":"var(--t-text)","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px","right":"0","position":"relative","left":"7px"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","width":"182px","paddingLeft":"6px","paddingRight":"6px"}},"dropdownItem":{"default":{"fontSize":"14px","color":"var(--t-text)","height":"28px","lineHeight":"28px","width":"168px","marginBottom":"4px","paddingLeft":"8px","paddingRight":"8px"},"hover":{"color":"var(--t-text)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"disabledWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"59px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"186px","left":"231px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"任务进度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"59px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"186px","left":"231px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"32px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"-59px","left":"265px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"日期",
editable:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"-59px","left":"265px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""}}}, 
 },
},
tDatePickerx0x6: {
defaultStyle: {
            default: {"width":"240px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","position":"unset","left":"284px","top":"-64px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"year",
clearable:true,
rangeSeparator:"-",
'default-date':"",
separator:"-",
cStyle:{"wrapper":{"default":{"width":"240px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","position":"unset","left":"284px","top":"-64px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},"hover":{"fontSize":"14px","backgroundColor":"var(--t-select-fill-bg-hover)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"}},"inputWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgba(20,112,204,0)","borderTop":"1px none rgba(20,112,204,0)","borderRight":"1px none rgba(20,112,204,0)","borderBottom":"1px none rgba(20,112,204,0)","color":"#fff","paddingLeft":"8px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"14px","lineHeight":"14px"}},"inputDateIcons":{"default":{"backgroundColor":"var(--business-select-border)","color":"rgba(121, 190, 255, 0)","backgroundImage":"","-webkit-mask-image":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/date-picker.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"50% 50%","position":"absolute","right":"0","top":"0px","pointerEvents":"none","marginRight":"0px","marginTop":"5px","width":"0px"}},"splitLine":{"default":{"color":"","backgroundColor":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px solid rgba(20,112,204,0.3)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""}},"selCurrentDateWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px","borderTopLeftRadius":"100px","borderTopRightRadius":"100px","borderBottomLeftRadius":"100px","borderBottomRightRadius":"100px"},"hover":{"fontSize":"12px"}},"currentDateWrapper":{"hover":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"},"active":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"},"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"12px"}},"todayWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","color":"#fff","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"dateHeaderWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"","fontSize":"16px"},"hover":{"backgroundColor":"rgba(26, 27, 31, 0)","color":"#fff","fontSize":"16px"}},"weekWrapper":{"default":{"color":"#fff","fontWeight":"500","backgroundColor":"","fontFamily":"微软雅黑"}},"currentWeekWrapper":{"default":{"color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundColor":""}},"timePanelNumWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-select-drop-bg)"},"hover":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--t-select-fill-bg-hover)","color":"var(--business-select-border-hover)"}},"okWrapper":{"default":{"borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"backgroundColor":"rgba(74, 228, 23, 0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)"},"active":{"borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"timePanelWrapper":{"default":{"borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","backgroundColor":"var(--business-select-drop-bg)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 10px 0px ","fontSize":"12px"},"active":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","color":"var(--business-select-border-hover)","backgroundColor":"var(--t-button-bg)"}},"textBtnWrapper":{"default":{"color":"rgba(255, 255, 255, 0.6)","backgroundColor":""}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--t-select-fill-bg-hover)"}},"operatorArrow":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)"},"hover":{"color":"var(--business-text-hover)"}},"prevAndNextMonthDate":{"default":{"fontSize":"12px"}},"rangeInputWrapper":{"default":{"fontSize":"16px"}},"disableDateWrapper":{"default":{"fontSize":"12px"}}},
isDisabledFront:false, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"589px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"20px","fontFamily":"方正综艺","top":"87px","left":"218px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"589px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"20px","fontFamily":"方正综艺","top":"87px","left":"218px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none var(--business-btn-default)","borderTop":"1px none var(--business-btn-default)","borderRight":"1px none var(--business-btn-default)","borderBottom":"1px none var(--business-btn-default)","position":"unset","left":"1675px","top":"86px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"var(--t-point-pop-close-btn)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none var(--business-btn-default)","borderTop":"1px none var(--business-btn-default)","borderRight":"1px none var(--business-btn-default)","borderBottom":"1px none var(--business-btn-default)","position":"unset","left":"1675px","top":"86px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"var(--t-point-pop-close-btn)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}},"numBox":{"default":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tComponentx0x9: {
defaultStyle: {
            default: {"width":"1476px","height":"33px","margin":"0 auto","position":"unset","left":"220px","top":"136px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"1476px","height":"33px","margin":"0 auto","position":"unset","left":"220px","top":"136px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/dialogTitle",
componentName:"dialogTitleComponent",
pageId:"051aca1b22bc4dbeb1baf06b72818d98",
pageCode:"dialogTitle", 
 },
},
tTextCommonx0x10: {
defaultStyle: {
            default: {"width":"215px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"275px","top":"143px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"215px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"275px","top":"143px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tInputx0x11: {
defaultStyle: {
            default: {"width":"240px","height":"32px","position":"unset","left":"699px","top":"-61px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","backgroundColor":"var(--t-select-fill-bg)","color":"var(--t-text)"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入责任单位",
clearable:false,
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
cStyle:{"wrapper":{"default":{"width":"240px","height":"32px","position":"unset","left":"699px","top":"-61px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","backgroundColor":"var(--t-select-fill-bg)","color":"var(--t-text)"},"focus":{"borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","backgroundColor":"var(--t-select-fill-bg-hover)"},"hover":{"borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","backgroundColor":"var(--t-select-fill-bg-hover)"}},"placeholder":{"default":{"color":"var(--t-text)"}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"59px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"-56px","left":"629px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"责任单位",
editable:false,
cStyle:{"wrapper":{"default":{"width":"59px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"-56px","left":"629px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""}}}, 
 },
},
});
const initData = () => {
const {YEAR,RESPONSIBLE_UNIT} = global.dialogParams2

state.dialogTitle = `${YEAR}年责任书考核`
state.tableTitle = `${YEAR}年责任书详情`
state.selectYear = YEAR;
state.RESPONSIBLE_UNIT = RESPONSIBLE_UNIT;
(async()=>{
  await apiRegistry.getCockpitDialogContentList.request();
})()
};
const closePop = () => {
// global.showCockpitCenterPop = false
global.dialogName2 = ''
global.dialogParams2 = {}
};
const changeTitle = () => {
state.dialogTitle = `${state.selectYear}年责任书考核`
state.tableTitle = `${state.selectYear}年责任书详情`
};
const onchange1763689398877_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.selectProgress = value;
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'dashboardGlobalVariables.responsibilitySelectedStatus',
                    value:value,
                    data: {
                      dashboardGlobalVariables:{responsibilitySelectedStatus: value}
                    },
                  });
};
const ondateChange1742991197605 = (data) => {
// 设置变量值
state.selectYear = data;
// 执行自定义方法
changeTitle();
};
const onclick1742797597302_0_0 = () => {
// 执行自定义方法
closePop();
};
const onchange1768475705030 = (value) => {
// 设置变量值
state.RESPONSIBLE_UNIT = value;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getCockpitDialogContentList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"RESPONSIBLE_UNIT":"state.RESPONSIBLE_UNIT","PROGRESS":"global.dashboardGlobalVariables.responsibilitySelectedStatus","YEAR":"state.selectYear","interfaceId":"be26dedf23f367bc639533d6bc8fc4d6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"RESPONSIBLE_UNIT":state.RESPONSIBLE_UNIT,"PROGRESS":global.dashboardGlobalVariables.responsibilitySelectedStatus,"YEAR":state.selectYear,"interfaceId":"be26dedf23f367bc639533d6bc8fc4d6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"RESPONSIBLE_UNIT":state.RESPONSIBLE_UNIT,"PROGRESS":global.dashboardGlobalVariables.responsibilitySelectedStatus,"YEAR":state.selectYear,"interfaceId":"be26dedf23f367bc639533d6bc8fc4d6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCockpitDialogContentList'] = res.data;
                
     state.tableList = [];
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  // 定义关系映射
  const progressMap = {
    '1': '已完成',
    '2': '序时任务', 
    '3': '滞后任务'
  };
  
  // 处理数据，添加映射字段
  state.tableList = res.data.data.map((item,index) => {
    return {
      ...item,
      progress_evaluation_value: progressMap[item.progress_evaluation_code] || '-',
      sort_num:index+1
    };
  });
} else {
  state.tableList = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableList = [];
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [global.dashboardGlobalVariables.responsibilitySelectedStatus], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCockpitDialogContentList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-responsibilityTablePop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-responsibilityTablePop', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTablex0x1ComputedData = computed(() => _.merge({}, componentState.tTablex0x1.default, componentState.tTablex0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tSelectx0x3ComputedData = computed(() => _.merge({}, componentState.tSelectx0x3.default, componentState.tSelectx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tDatePickerx0x6ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x6.default, componentState.tDatePickerx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tComponentx0x9ComputedData = computed(() => _.merge({}, componentState.tComponentx0x9.default, componentState.tComponentx0x9?.[state.screenSize]));

 const tTextCommonx0x10ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x10.default, componentState.tTextCommonx0x10?.[state.screenSize]));

 const tInputx0x11ComputedData = computed(() => _.merge({}, componentState.tInputx0x11.default, componentState.tInputx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

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
tTablex0x1ComputedData,
tRectx0x2ComputedData,
tSelectx0x3ComputedData,
tTextx0x4ComputedData,
tTextx0x5ComputedData,
tDatePickerx0x6ComputedData,
tTextx0x7ComputedData,
tRectx0x8ComputedData,
tComponentx0x9ComputedData,
tTextCommonx0x10ComputedData,
tInputx0x11ComputedData,
tTextx0x12ComputedData,
onchange1763689398877_0_0,
ondateChange1742991197605,
onclick1742797597302_0_0,
onchange1768475705030,
};
},
};