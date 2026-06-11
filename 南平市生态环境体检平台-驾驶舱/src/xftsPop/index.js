window.xftsPopComponent = {
template: 
`<div id="t-l-c-xftsPop" class="t-l-c-xftsPop" >` +
`<t-row id="t-row-d0d8.f6972f11a" class="xftsPop-t-row-0-5"  :c-style="tRowx0x5ComputedData.cStyle" :gutter="tRowx0x5ComputedData.gutter" :justify="tRowx0x5ComputedData.justify" :align="tRowx0x5ComputedData.align">` +
`<t-col id="t-col-b805.808b80595" class="xftsPop-t-col-0-5-0"  :span="tColx0x5x0ComputedData.span" :offset="tColx0x5x0ComputedData.offset" :push="tColx0x5x0ComputedData.push" :pull="tColx0x5x0ComputedData.pull" :c-style="tColx0x5x0ComputedData.cStyle">` +
`<t-component id="t-component-1359.2630a17e4" class="xftsPop-t-component-0-5-0-0"  :name="tComponentx0x5x0x0ComputedData.name" :loading="tComponentx0x5x0x0ComputedData.loading" :c-style="tComponentx0x5x0x0ComputedData.cStyle" :src="tComponentx0x5x0x0ComputedData.src" :component-name="tComponentx0x5x0x0ComputedData.componentName" :page-id="tComponentx0x5x0x0ComputedData.pageId" :page-code="tComponentx0x5x0x0ComputedData.pageCode">` +
`</t-component>` +
`</t-col>` +
`<t-col id="t-col-7343.1a34a08e8" class="xftsPop-t-col-0-5-1"  :span="tColx0x5x1ComputedData.span" :offset="tColx0x5x1ComputedData.offset" :push="tColx0x5x1ComputedData.push" :pull="tColx0x5x1ComputedData.pull" :c-style="tColx0x5x1ComputedData.cStyle">` +
`<t-text id="t-text-9a81.23a54a8b1" class="xftsPop-t-text-0-5-1-0"  :label="tTextx0x5x1x0ComputedData.label" :editable="tTextx0x5x1x0ComputedData.editable" :c-style="tTextx0x5x1x0ComputedData.cStyle">` +
`</t-text>` +
`<t-date-picker id="t-date-picker-5460.5b225617c" class="xftsPop-t-date-picker-0-5-1-1"  :placeholder="tDatePickerx0x5x1x1ComputedData.placeholder" :start-placeholder="tDatePickerx0x5x1x1ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x5x1x1ComputedData.endPlaceholder" :type="tDatePickerx0x5x1x1ComputedData.type" :clearable="tDatePickerx0x5x1x1ComputedData.clearable" :range-separator="tDatePickerx0x5x1x1ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeData, componentPropBindingMap?.['t-date-picker-5460.5b225617c']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x5x1x1ComputedData.separator" :c-style="tDatePickerx0x5x1x1ComputedData.cStyle" :is-disabled-front="tDatePickerx0x5x1x1ComputedData.isDisabledFront" :disabled-date="tDatePickerx0x5x1x1ComputedData.disabledDate" @date-change="ondateChange1769490946317">` +
`</t-date-picker>` +
`</t-col>` +
`<t-col id="t-col-af54.bd8d45468" class="xftsPop-t-col-0-5-2"  :span="tColx0x5x2ComputedData.span" :offset="tColx0x5x2ComputedData.offset" :push="tColx0x5x2ComputedData.push" :pull="tColx0x5x2ComputedData.pull" :c-style="tColx0x5x2ComputedData.cStyle">` +
`<t-table id="t-table-f9ef.a000e4d0c" class="xftsPop-t-table-0-5-2-0"  :height="tTablex0x5x2x0ComputedData.height" :stripe="tTablex0x5x2x0ComputedData.stripe" :border="tTablex0x5x2x0ComputedData.border" :auto-scroll="tTablex0x5x2x0ComputedData.autoScroll" :speed="tTablex0x5x2x0ComputedData.speed" :columns="tTablex0x5x2x0ComputedData.columns" :data="replaceCssVariables(filterData(state.tableList, componentPropBindingMap?.['t-table-f9ef.a000e4d0c']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x5x2x0ComputedData.defaultSort" :c-style="tTablex0x5x2x0ComputedData.cStyle" @cell-click="oncellClick1769492950978">` +
`</t-table>` +
`</t-col>` +
`<t-col id="t-col-4dae.caed6377a" class="xftsPop-t-col-0-5-3"  :span="tColx0x5x3ComputedData.span" :offset="tColx0x5x3ComputedData.offset" :push="tColx0x5x3ComputedData.push" :pull="tColx0x5x3ComputedData.pull" :c-style="tColx0x5x3ComputedData.cStyle">` +
`<t-pagination-base id="t-pagination-base-f9c5.90320f5dc" class="xftsPop-t-pagination-base-0-5-3-0"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-f9c5.90320f5dc']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x5x3x0ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-f9c5.90320f5dc']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x5x3x0ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-f9c5.90320f5dc']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x5x3x0ComputedData.layout" :page-sizes="tPaginationBasex0x5x3x0ComputedData.pageSizes" :disabled="tPaginationBasex0x5x3x0ComputedData.disabled" :c-style="tPaginationBasex0x5x3x0ComputedData.cStyle" @current-change="oncurrentChange1769500266919">` +
`</t-pagination-base>` +
`</t-col>` +
`</t-row>` +
`<t-text-common id="t-text-common-c20c.e8465135c" class="xftsPop-t-text-common-0-6"  :label="replaceCssVariables(filterData(state.tableTitle, componentPropBindingMap?.['t-text-common-c20c.e8465135c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x6ComputedData.editable" :c-style="tTextCommonx0x6ComputedData.cStyle">` +
`</t-text-common>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-2e88.9a8a1ed2b":{"attributeName":"tRectx0x0"},"t-rect-9ee1.ec8130f44":{"attributeName":"tRectx0x1"},"t-select-b1e1.fd27a03b4":{"attributeName":"tSelectx0x2"},"t-text-03db.65ad46ad":{"attributeName":"tTextx0x3"},"t-rect-22b3.c624df95a":{"attributeName":"tRectx0x4"},"t-row-d0d8.f6972f11a":{"attributeName":"tRowx0x5","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-b805.808b80595":{"attributeName":"tColx0x5x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-1359.2630a17e4":{"attributeName":"tComponentx0x5x0x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-col-7343.1a34a08e8":{"attributeName":"tColx0x5x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-9a81.23a54a8b1":{"attributeName":"tTextx0x5x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-5460.5b225617c":{"attributeName":"tDatePickerx0x5x1x1","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-input-c319.e7cfd9ab":{"attributeName":"tInputx0x5x1x2"},"t-button-ef96.016de2144":{"attributeName":"tButtonx0x5x1x3"},"t-col-af54.bd8d45468":{"attributeName":"tColx0x5x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-table-f9ef.a000e4d0c":{"attributeName":"tTablex0x5x2x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[{"name":"filterTableList"}]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-col-4dae.caed6377a":{"attributeName":"tColx0x5x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-pagination-base-f9c5.90320f5dc":{"attributeName":"tPaginationBasex0x5x3x0","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-c20c.e8465135c":{"attributeName":"tTextCommonx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   timeData: [],
   ENTER_NAME_LIKE: "",
   pageInfo: {"pageSize":15,"pageNum":1,"total":0},
   ENTER_NAME: "",
   END_TIME: "",
   START_TIME: "",
   tableTitle: "日常信访详情",
   dialogTitle: "日常信访详情",
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
tRowx0x5: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x5x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"6px","top":"-55px","marginTop":"16px","marginBottom":"16px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"6px","top":"-55px","marginTop":"16px","marginBottom":"16px"}}}, 
 },
},
tComponentx0x5x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","margin":"0 auto","position":"relative","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"dialogTitleComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","margin":"0 auto","position":"relative","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/dialogTitle",
componentName:"dialogTitleComponent",
pageId:"051aca1b22bc4dbeb1baf06b72818d98",
pageCode:"dialogTitle", 
 },
},
tColx0x5x1: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"163px","top":"-248px","marginBottom":"16px","paddingLeft":"16px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"163px","top":"-248px","marginBottom":"16px","paddingLeft":"16px"}}}, 
 },
},
tTextx0x5x1x0: {
defaultStyle: {
            default: {"width":"56px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"-46px","left":"12px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"登记时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"-46px","left":"12px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":"","textAlign":"right"}}}, 
 },
},
tDatePickerx0x5x1x1: {
defaultStyle: {
            default: {"width":"296px","height":"32px","animationName":"","color":"#fff","marginLeft":"20px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","position":"unset","left":"65px","top":"-52px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","marginRight":"20px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
cStyle:{"wrapper":{"default":{"width":"296px","height":"32px","animationName":"","color":"#fff","marginLeft":"20px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","position":"unset","left":"65px","top":"-52px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","marginRight":"20px"},"hover":{"fontSize":"14px","backgroundColor":"var(--t-select-fill-bg-hover)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"}},"inputWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgba(20,112,204,0)","borderTop":"1px none rgba(20,112,204,0)","borderRight":"1px none rgba(20,112,204,0)","borderBottom":"1px none rgba(20,112,204,0)","color":"#fff","paddingLeft":"8px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"14px","lineHeight":"14px"}},"inputDateIcons":{"default":{"backgroundColor":"var(--business-select-border)","color":"rgba(121, 190, 255, 0)","backgroundImage":"","-webkit-mask-image":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/date-picker.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"50% 50%","position":"absolute","right":"0","top":"0px","pointerEvents":"none","marginRight":"0px","marginTop":"5px","width":"0px"}},"splitLine":{"default":{"color":"","backgroundColor":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px solid rgba(20,112,204,0.3)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""}},"selCurrentDateWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px","borderTopLeftRadius":"100px","borderTopRightRadius":"100px","borderBottomLeftRadius":"100px","borderBottomRightRadius":"100px"},"hover":{"fontSize":"12px"}},"currentDateWrapper":{"hover":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"},"active":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"},"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"12px"}},"todayWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","color":"#fff","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"dateHeaderWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"","fontSize":"16px"},"hover":{"backgroundColor":"rgba(26, 27, 31, 0)","color":"#fff","fontSize":"16px"}},"weekWrapper":{"default":{"color":"#fff","fontWeight":"500","backgroundColor":"","fontFamily":"微软雅黑"}},"currentWeekWrapper":{"default":{"color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundColor":""}},"timePanelNumWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-select-drop-bg)"},"hover":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--t-select-fill-bg-hover)","color":"var(--business-select-border-hover)"}},"okWrapper":{"default":{"borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"backgroundColor":"rgba(74, 228, 23, 0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)"},"active":{"borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"timePanelWrapper":{"default":{"borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","backgroundColor":"var(--business-select-drop-bg)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 10px 0px ","fontSize":"12px"},"active":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","color":"var(--business-select-border-hover)","backgroundColor":"var(--t-button-bg)"}},"textBtnWrapper":{"default":{"color":"rgba(255, 255, 255, 0.6)","backgroundColor":""}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--t-select-fill-bg-hover)"}},"operatorArrow":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)"},"hover":{"color":"var(--business-text-hover)"}},"prevAndNextMonthDate":{"default":{"fontSize":"12px"}},"rangeInputWrapper":{"default":{"fontSize":"16px"}},"disableDateWrapper":{"default":{"fontSize":"12px"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tColx0x5x2: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 166px)","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"16px","top":"-45px","animationName":"","marginBottom":"10px","paddingLeft":"16px","paddingRight":"16px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 166px)","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"16px","top":"-45px","animationName":"","marginBottom":"10px","paddingLeft":"16px","paddingRight":"16px"}}}, 
 },
},
tTablex0x5x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","position":"unset","left":"-1px","top":"65px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"100%",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"序号","key":"number","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"50px","type":"default","stateKey":"iconStatus"},{"label":"行政区域","type":"default","key":"region_name","stateKey":"","width":"120px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"登记时间","type":"default","key":"time","stateKey":"","width":"120px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)"}},"stateList":[]},{"label":"来源渠道","type":"default","key":"casesource","stateKey":"","width":"120px","minWidth":"unset","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--t-white)"}},"stateList":[],"fixed":false,"operationList":[]},{"label":"被投诉对象","type":"default","key":"enter_name","stateKey":"","width":"auto","minWidth":"unset","align":"cneter","headerAlign":"cneter","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--t-white)"}},"stateList":[],"fixed":false,"operationList":[]},{"label":"污染类别","type":"default","key":"pollutionctg","stateKey":"","width":"120px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--t-white)"}},"stateList":[],"fixed":false,"operationList":[]},{"label":"经办人","type":"default","key":"acceptperson","stateKey":"","width":"120px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--t-white)"}},"stateList":[],"fixed":false,"operationList":[]},{"label":"办结情况","type":"default","key":"status_name","stateKey":"","width":"120px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--t-white)"}},"stateList":[],"fixed":false,"operationList":[{"name":"查看","id":"view","fontStyle":{"color":"rgba(5,245,251,1)"}}]},{"label":"详情","type":"operation","key":"opt","stateKey":"","width":"100px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--t-white)"}},"stateList":[],"fixed":false,"operationList":[{"name":"查看","id":"view","fontStyle":{"color":"rgba(5,245,251,1)"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","position":"unset","left":"-1px","top":"65px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"600","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"emptyText":{"default":{"fontSize":"14px","color":"#fff"}}}, 
 },
},
tColx0x5x3: {
defaultStyle: {
            default: {"width":"100%","height":"38px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"26px","top":"-35px","animationName":"","marginBottom":"6px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"38px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"26px","top":"-35px","animationName":"","marginBottom":"6px"}}}, 
 },
},
tPaginationBasex0x5x3x0: {
defaultStyle: {
            default: {"width":"auto","height":"38px","position":"unset","left":"45px","top":"641px","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","marginRight":"16px","paddingRight":"0px","animationName":""},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:15,
pagerCount:7,
currentPage:1,
layout:" total,prev, pager, next",
pageSizes:[10,20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"38px","position":"unset","left":"45px","top":"641px","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","marginRight":"16px","paddingRight":"0px","animationName":""}},"jumpInput":{"default":{"color":"var(--t-pagination-font-color)","background":"var(--t-input-background-color)","backgroundClip":"unset","border":"auto !important","borderDirection":"all","borderLeft":"1px Solid #366B92","borderTop":"1px Solid #366B92","borderRight":"1px Solid #366B92","borderBottom":"1px Solid #366B92","fillType":"color","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","fontSize":"12px"},"active":{"color":"var(--t-pagination-active-color)","background":"unset","backgroundClip":"unset"},"hover":{"color":"var(--t-pagination-hover-color)","background":"unset","backgroundClip":"unset","borderTop":"1px Solid var(--t-pager-hover-border-color)","borderLeft":"1px Solid var(--t-pager-hover-border-color)","borderBottom":"1px Solid var(--t-pager-hover-border-color)","borderRight":"1px Solid var(--t-pager-hover-border-color)","borderDirection":"all"}},"pagerItem":{"default":{"color":"#fff","background":"var(--t-pagination-button-bg-color)","backgroundClip":"unset","fillType":"color","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","border":"auto !important","borderDirection":"all","borderLeft":"1px solid #366B92","borderTop":"1px solid #366B92","borderRight":"1px solid #366B92","borderBottom":"1px solid #366B92","fontSize":"12px"},"active":{"fillType":"color","color":"var(--common-white1)","backgroundClip":"unset","background":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0.6246480855855856%,rgba(61, 126, 255, 0.8) 100%)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"},"hover":{"color":"var(--common-white1)","backgroundClip":"unset","borderTop":"1px solid var(--theme-btn-hover)","borderLeft":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderDirection":"all","background":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0.6246480855855856%,rgba(61, 126, 255, 0.8) 100%)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"jumpWrapper":{"default":{"color":"var(--t-pagination-font-color)","background":"unset","backgroundClip":"unset","fontSize":"12px"}},"sizesWrapper":{"default":{"color":"var(--t-pagination-font-color)","background":"unset","backgroundClip":"unset","fontSize":"12px"},"active":{"color":"var(--t-pagination-active-color)","background":"unset","backgroundClip":"unset"},"hover":{"color":"var(--t-pagination-hover-color)","background":"unset","backgroundClip":"unset"}},"total":{"default":{"color":"#C9E7F5","background":"unset","backgroundClip":"unset","fontSize":"12px","marginRight":"20px"}},"more":{"default":{"color":"var(--t-pagination-font-color)","background":"unset","backgroundClip":"unset","border":"auto !important","borderDirection":"all","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","borderLeft":"1px Solid #366B92","borderTop":"1px Solid #366B92","borderRight":"1px Solid #366B92","borderBottom":"1px Solid #366B92","fontSize":"12px"},"active":{"color":"var(--t-pagination-active-color)","background":"unset","backgroundClip":"unset"},"hover":{"color":"var(--t-pagination-hover-color)","background":"unset","backgroundClip":"unset","borderTop":"1px Solid var(--t-pager-hover-border-color)","borderLeft":"1px Solid var(--t-pager-hover-border-color)","borderBottom":"1px Solid var(--t-pager-hover-border-color)","borderRight":"1px Solid var(--t-pager-hover-border-color)","borderDirection":"all"}},"sizesInput":{"default":{"color":"var(--t-pagination-font-color)","background":"unset","backgroundClip":"unset","border":"auto !important","borderDirection":"all","borderLeft":"1px Solid #366B92","borderTop":"1px Solid #366B92","borderRight":"1px Solid #366B92","borderBottom":"1px Solid #366B92","fontSize":"12px"},"active":{"color":"var(--t-pagination-active-color)","background":"unset","backgroundClip":"unset"},"hover":{"color":"var(--t-pagination-hover-color)","background":"unset","backgroundClip":"unset","borderTop":"1px Solid var(--t-pager-hover-border-color)","borderLeft":"1px Solid var(--t-pager-hover-border-color)","borderBottom":"1px Solid var(--t-pager-hover-border-color)","borderRight":"1px Solid var(--t-pager-hover-border-color)","borderDirection":"all"}},"pager":{"default":{"color":"#fff","background":"unset","backgroundClip":"unset","border":"auto !important","borderDirection":"all","borderLeft":"1px solid var(--theme-btn-default)","borderTop":"1px solid var(--theme-btn-default)","borderRight":"1px solid var(--theme-btn-default)","borderBottom":"1px solid var(--theme-btn-default)","backgroundColor":"#1B4293","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"color":"var(--t-pagination-active-color)","background":"unset","backgroundClip":"unset"},"hover":{"color":"var(--common-white1)","background":"unset","backgroundClip":"unset","borderTop":"1px Solid var(--t-pager-hover-border-color)","borderLeft":"1px Solid var(--t-pager-hover-border-color)","borderBottom":"1px Solid var(--t-pager-hover-border-color)","borderRight":"1px Solid var(--t-pager-hover-border-color)","borderDirection":"all","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"sizesDropdownItem":{"default":{"color":"var(--t-select-dropdown-font-color)","background":"unset","backgroundClip":"unset","fontSize":"12px","fillType":"color"},"active":{"color":"var(--t-select-dropdown-active-font-color)","background":"unset","backgroundClip":"unset","fillType":"color"},"hover":{"color":"var(--t-select-dropdown-hover-font-color)","background":"unset","backgroundClip":"unset","fillType":"color"}},"sizesDropdownWrapper":{"default":{"border":"auto !important","borderDirection":"all","borderLeft":"1px Solid #366B92","borderTop":"1px Solid #366B92","borderRight":"1px Solid #366B92","borderBottom":"1px Solid #366B92","background":"var(--t-select-popper-bg-color)","fillType":"color","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px"}}}, 
 },
},
tTextCommonx0x6: {
defaultStyle: {
            default: {"width":"364px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"static","left":"54px","top":"25px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"日常信访详情",
editable:false,
cStyle:{"wrapper":{"default":{"width":"364px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"static","left":"54px","top":"25px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
});
const initData = () => {
// 修复后的参数解析函数：支持解析#后的哈希路由参数
function getUrlParam(paramName, url) {
  // 1. 优先使用传入的url，否则用当前页面URL
  const targetUrl = url || window.location.href;

  // 2. 拆分URL：先找#，再找?（兼容标准参数和哈希参数）
  let queryString = '';
  // 先提取#后的部分
  const hashIndex = targetUrl.indexOf('#');
  if (hashIndex !== -1) {
    const hashPart = targetUrl.slice(hashIndex + 1);
    // 从哈希部分找?后的参数
    const hashQueryIndex = hashPart.indexOf('?');
    if (hashQueryIndex !== -1) {
      queryString = hashPart.slice(hashQueryIndex + 1);
    }
  }

  // 3. 如果哈希后没有参数，再找标准的?后的参数（兼容常规场景）
  if (!queryString) {
    const searchIndex = targetUrl.indexOf('?');
    if (searchIndex !== -1 && (hashIndex === -1 || searchIndex < hashIndex)) {
      queryString = targetUrl.slice(searchIndex + 1, hashIndex === -1 ? undefined : hashIndex);
    }
  }

  // 4. 解析参数并解码（处理中文）
  if (queryString) {
    // 分割参数键值对
    const params = new URLSearchParams(queryString);
    const value = params.get(paramName);
    return value ? decodeURIComponent(value) : '';
  }

  // 5. 没有找到参数返回空字符串
  return '';
}

setTimeout(() => {
  const currentUrl = window.location.href;
  const iframeEnterName = getUrlParam('enterName', currentUrl);
  // const isFrame = getUrlParam('isFrame', currentUrl);
  console.log('iframe内部解析的enterName参数值:', currentUrl, iframeEnterName);
  if (iframeEnterName) {
    state.tableTitle = '信访投诉详情';
    state.ENTER_NAME = iframeEnterName || '';
    state.START_TIME = '';
    state.END_TIME = '';
    global.isFrame = true;
  } else {
    state.tableTitle = '日常信访详情';
    global.isFrame = false;
    state.ENTER_NAME = global?.dashboardGlobalVariables?.dailyComplaint?.complaintListItemName || '';
    state.START_TIME = global?.dashboardGlobalVariables?.dailyComplaint?.startTime || '';
    state.END_TIME = global?.dashboardGlobalVariables?.dailyComplaint?.endTime || '';
    state.timeData = [state.START_TIME, state.END_TIME];
  }
  apiRegistry.getData.request();
}, 0)


};
const clickTable = (row,col) => {
console.log(row, col)
if (col.label === '详情') {
  global.dashboardGlobalVariables.dailyComplaint.complaintListItemId = row?.id || '';

  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'createDialog',  // 消息类型名称
      data: {
        data: {
          headerComName: "",
          contentComName: "dailyComplaintPopupDetailComponent",
          maxWidth: "1600px",
          maxHeight: "930px",
          minWidth: "1000px",
          minHeight: "500px",
          isScalse: false,
          title: "详情"
        }
      }
    }
  );
}
};
const setDom = () => {
const styleDom = document.createElement('style');
styleDom.innerHTML = `
.t-l-c-inquirySuesTablePop .el-table__header {
  width: 100% !important;
}
.t-l-c-inquirySuesTablePop .el-table__body {
  width: 100% !important;
}

  `;
document.head.appendChild(styleDom);


};
const setTime = (data) => {
state.START_TIME = data[0];
state.END_TIME = data[1];
apiRegistry.getData.request();
};
const onchange1763689398877_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.selectProgress = value;
// 事件交互-请求调用接口
apiRegistry.getCockpitDialogContentList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onclick1768960311105 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'supervisorPopName',
                    value:'threeInquirySuesPopComponent',
                    data: {
                      supervisorPopName: 'threeInquirySuesPopComponent'
                    },
                  });
};
const ondateChange1769490946317 = (data) => {
// 执行自定义方法
setTime(data);
};
const onchange1769490993820 = (value) => {
// 设置变量值
state.ENTER_NAME_LIKE = value;
};
const onclick1769491010779 = () => {
// 事件交互-请求调用接口
apiRegistry.getData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const oncellClick1769492950978 = (row,column,cell,event) => {
// 执行自定义方法
clickTable(row,column);
};
const oncurrentChange1769500266919 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"pageSize":"state.pageInfo.pageSize","pageNum":"state.pageInfo.pageNum","ENTER_NAME_LIKE":"state.ENTER_NAME_LIKE","ENTER_NAME":"state.ENTER_NAME","END_TIME":"state.END_TIME","START_TIME":"state.START_TIME","REGION_PATH":"global.REGION_CODE","interfaceId":"a5fc4ee46eaa5c8c393c7b13caa4d705"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"ENTER_NAME_LIKE":state.ENTER_NAME_LIKE,"ENTER_NAME":state.ENTER_NAME,"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"REGION_PATH":global.REGION_CODE,"interfaceId":"a5fc4ee46eaa5c8c393c7b13caa4d705"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"ENTER_NAME_LIKE":state.ENTER_NAME_LIKE,"ENTER_NAME":state.ENTER_NAME,"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"REGION_PATH":global.REGION_CODE,"interfaceId":"a5fc4ee46eaa5c8c393c7b13caa4d705"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     state.tableList = [];
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.pageInfo.total = res.data.head.pageInfo.total;
  state.pageInfo.pageSize = res.data.head.pageInfo.pageSize;
  state.pageInfo.pageNum = res.data.head.pageInfo.pageNum;

  // 处理数据，添加映射字段
  state.tableList = res.data.data.map((item, index) => {
    return {
      ...item,
      sort_num: index + 1,
      action: '详情'
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
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-xftsPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setDom();
onMounted(() => {
setPageScale('t-l-c-xftsPop', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initData();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x5ComputedData = computed(() => _.merge({}, componentState.tRowx0x5.default, componentState.tRowx0x5?.[state.screenSize]));

 const tColx0x5x0ComputedData = computed(() => _.merge({}, componentState.tColx0x5x0.default, componentState.tColx0x5x0?.[state.screenSize]));

 const tComponentx0x5x0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5x0x0.default, componentState.tComponentx0x5x0x0?.[state.screenSize]));

 const tColx0x5x1ComputedData = computed(() => _.merge({}, componentState.tColx0x5x1.default, componentState.tColx0x5x1?.[state.screenSize]));

 const tTextx0x5x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x5x1x0.default, componentState.tTextx0x5x1x0?.[state.screenSize]));

 const tDatePickerx0x5x1x1ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x5x1x1.default, componentState.tDatePickerx0x5x1x1?.[state.screenSize]));

 const tColx0x5x2ComputedData = computed(() => _.merge({}, componentState.tColx0x5x2.default, componentState.tColx0x5x2?.[state.screenSize]));

 const tTablex0x5x2x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x5x2x0.default, componentState.tTablex0x5x2x0?.[state.screenSize]));

 const tColx0x5x3ComputedData = computed(() => _.merge({}, componentState.tColx0x5x3.default, componentState.tColx0x5x3?.[state.screenSize]));

 const tPaginationBasex0x5x3x0ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x5x3x0.default, componentState.tPaginationBasex0x5x3x0?.[state.screenSize]));

 const tTextCommonx0x6ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x6.default, componentState.tTextCommonx0x6?.[state.screenSize]));

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
tRowx0x5ComputedData,
tColx0x5x0ComputedData,
tComponentx0x5x0x0ComputedData,
tColx0x5x1ComputedData,
tTextx0x5x1x0ComputedData,
tDatePickerx0x5x1x1ComputedData,
tColx0x5x2ComputedData,
tTablex0x5x2x0ComputedData,
tColx0x5x3ComputedData,
tPaginationBasex0x5x3x0ComputedData,
tTextCommonx0x6ComputedData,
ondateChange1769490946317,
oncellClick1769492950978,
oncurrentChange1769500266919,
};
},
};