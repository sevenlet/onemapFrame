window.gztRightShjbjComponent = {
template: 
`<div id="t-l-c-gztRightShjbj" class="t-l-c-gztRightShjbj" >` +
`<t-rect id="t-rect-f821.e063bda55" class="gztRightShjbj-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-d09a.62e00f871" class="gztRightShjbj-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-select id="t-select-a1ba.bb057eab6" class="gztRightShjbj-t-select-0-2"  :active-value="replaceCssVariables(filterData(state.selectedType, componentPropBindingMap?.['t-select-a1ba.bb057eab6']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-select-a1ba.bb057eab6']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x2ComputedData.alias" :multiple="tSelectx0x2ComputedData.multiple" :placeholder="tSelectx0x2ComputedData.placeholder" :clearable="tSelectx0x2ComputedData.clearable" :disabled="tSelectx0x2ComputedData.disabled" :name="tSelectx0x2ComputedData.name" :autocomplete="tSelectx0x2ComputedData.autocomplete" :filterable="tSelectx0x2ComputedData.filterable" :no-match-text="tSelectx0x2ComputedData.no-match-text" :no-data-text="tSelectx0x2ComputedData.no-data-text" :c-style="tSelectx0x2ComputedData.cStyle" :scrollbar-thumb-color="tSelectx0x2ComputedData.scrollbarThumbColor" :scrollbar-track-color="tSelectx0x2ComputedData.scrollbarTrackColor" :scrollbar-width="tSelectx0x2ComputedData.scrollbarWidth" :data="tSelectx0x2ComputedData.data" @change="onchange1774493808423">` +
`</t-select>` +
`<t-date-picker id="t-date-picker-b000.cd90ca417" class="gztRightShjbj-t-date-picker-0-3"  :placeholder="tDatePickerx0x3ComputedData.placeholder" :start-placeholder="tDatePickerx0x3ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x3ComputedData.endPlaceholder" :type="tDatePickerx0x3ComputedData.type" :clearable="tDatePickerx0x3ComputedData.clearable" :range-separator="tDatePickerx0x3ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.rangeTime, componentPropBindingMap?.['t-date-picker-b000.cd90ca417']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x3ComputedData.separator" :readonly="tDatePickerx0x3ComputedData.readonly" :editable="tDatePickerx0x3ComputedData.editable" :c-style="tDatePickerx0x3ComputedData.cStyle" @date-change="ondateChange1774493587356">` +
`</t-date-picker>` +
`<t-text-common id="t-text-common-1131.2eaf884a4" class="gztRightShjbj-t-text-common-0-4"  :label="tTextCommonx0x4ComputedData.label" :editable="tTextCommonx0x4ComputedData.editable" :c-style="tTextCommonx0x4ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-c403.ad63e5037" class="gztRightShjbj-t-text-common-0-5"  :label="tTextCommonx0x5ComputedData.label" :editable="tTextCommonx0x5ComputedData.editable" :c-style="tTextCommonx0x5ComputedData.cStyle">` +
`</t-text-common>` +
`<t-table id="t-table-9331.d95cd7232" class="gztRightShjbj-t-table-0-6"  :height="tTablex0x6ComputedData.height" :stripe="tTablex0x6ComputedData.stripe" :border="tTablex0x6ComputedData.border" :auto-scroll="tTablex0x6ComputedData.autoScroll" :speed="tTablex0x6ComputedData.speed" :columns="tTablex0x6ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-9331.d95cd7232']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x6ComputedData.defaultSort" :c-style="tTablex0x6ComputedData.cStyle">` +
`</t-table>` +
`<t-line id="t-line-c6bd.d9416e135" class="gztRightShjbj-t-line-0-7"  :c-style="tLinex0x7ComputedData.cStyle">` +
`</t-line>` +
`<t-image-base id="t-image-base-9395.0069bddc8" class="gztRightShjbj-t-image-base-0-8"  :src="tImageBasex0x8ComputedData.src" :fit="tImageBasex0x8ComputedData.fit" :c-style="tImageBasex0x8ComputedData.cStyle">` +
`</t-image-base>` +
`<t-text-common id="t-text-common-4527.7f1867ad8" class="gztRightShjbj-t-text-common-0-9"  :label="tTextCommonx0x9ComputedData.label" :editable="tTextCommonx0x9ComputedData.editable" :c-style="tTextCommonx0x9ComputedData.cStyle">` +
`</t-text-common>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-f821.e063bda55":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-d09a.62e00f871":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-select-a1ba.bb057eab6":{"attributeName":"tSelectx0x2","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"scrollbarThumbColor":{"filters":[]},"scrollbarTrackColor":{"filters":[]},"scrollbarWidth":{"filters":[]},"data":{"filters":[]}},"t-date-picker-b000.cd90ca417":{"attributeName":"tDatePickerx0x3","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-1131.2eaf884a4":{"attributeName":"tTextCommonx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-c403.ad63e5037":{"attributeName":"tTextCommonx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-table-9331.d95cd7232":{"attributeName":"tTablex0x6","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-line-c6bd.d9416e135":{"attributeName":"tLinex0x7","cStyle":{"filters":[]}},"t-image-base-9395.0069bddc8":{"attributeName":"tImageBasex0x8","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-4527.7f1867ad8":{"attributeName":"tTextCommonx0x9","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   listData: [],
   selectedType: "1",
   options: [{"label":"国控","value":"1"},{"label":"省控","value":"2"}],
   rangeTime: [],
   endTime: "",
   startTime: "",
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
            default: {"width":"1190px","height":"332px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","left":"0px","top":"0px","backgroundColor":"var(--gzt-card-bgc)","borderTopLeftRadius":"12px","borderTopRightRadius":"12px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1190px","height":"332px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","left":"0px","top":"0px","backgroundColor":"var(--gzt-card-bgc)","borderTopLeftRadius":"12px","borderTopRightRadius":"12px","position":"unset"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1190px","height":"46px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","left":"0px","top":"0px","backgroundColor":"var(--yybj-right-title-bg)","borderTopLeftRadius":"12px","borderTopRightRadius":"12px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1190px","height":"46px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","left":"0px","top":"0px","backgroundColor":"var(--yybj-right-title-bg)","borderTopLeftRadius":"12px","borderTopRightRadius":"12px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tSelectx0x2: {
defaultStyle: {
            default: {"width":"501px","height":"32px","fontSize":"14px","color":"var(--business-white)","backgroundColor":"var(--yybj-right-input-bg)","borderLeft":"1px solid var(--yybj-right-input-border)","borderTop":"1px solid var(--yybj-right-input-border)","borderRight":"1px solid var(--yybj-right-input-border)","borderBottom":"1px solid var(--yybj-right-input-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","position":"unset","left":"84px","top":"63px","animationName":""},
            
            },
 default: { 
 
activeValue:"1",
options:[{"label":"国控","value":"1"},{"label":"省控","value":"2"}],
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
cStyle:{"wrapper":{"default":{"width":"501px","height":"32px","fontSize":"14px","color":"var(--business-white)","backgroundColor":"var(--yybj-right-input-bg)","borderLeft":"1px solid var(--yybj-right-input-border)","borderTop":"1px solid var(--yybj-right-input-border)","borderRight":"1px solid var(--yybj-right-input-border)","borderBottom":"1px solid var(--yybj-right-input-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","position":"unset","left":"84px","top":"63px","animationName":""},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","box-shadow":"var(--business-select-shadow) 0px 0px 0px 2px "}},"placeholder":{"default":{"color":"#fff"}},"arrow":{"default":{"color":"rgba(255, 255, 255, 0.9)","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px","right":"0","position":"relative","left":"7px"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","width":"268px","paddingLeft":"6px","paddingRight":"6px"}},"dropdownItem":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 0.9)","height":"28px","lineHeight":"28px","width":"254px","marginBottom":"4px","paddingLeft":"8px","paddingRight":"8px"},"hover":{"color":"#fff","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"color":"var(--business-text-hover)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"disabledWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}},
scrollbarThumbColor:"rgb(193,193,193)",
scrollbarTrackColor:"rgb(241,241,241)",
scrollbarWidth:"6px",
data:{"filters":[{"id":"8dc8b02cc32b4abbbeed2e69e95b87fb","name":"selectOptionAddAll"}],"data":[]}, 
 },
},
tDatePickerx0x3: {
defaultStyle: {
            default: {"width":"503px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","position":"unset","left":"665px","top":"63px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"503px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","position":"unset","left":"665px","top":"63px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px Solid var(--yybj-right-input-border)","borderTop":"1px Solid var(--yybj-right-input-border)","borderRight":"1px Solid var(--yybj-right-input-border)","borderBottom":"1px Solid var(--yybj-right-input-border)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","background":"var(--yybj-right-input-bg)","fillType":"color","borderDirection":"all","border":"auto !important"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%","background":"rgba(0, 0, 0, 0)","fillType":"color"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tTextCommonx0x4: {
defaultStyle: {
            default: {"width":"62px","height":"20px","color":"var(--t-text-rh-color)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"13px","top":"69px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"控制级别",
editable:false,
cStyle:{"wrapper":{"default":{"width":"62px","height":"20px","color":"var(--t-text-rh-color)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"13px","top":"69px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTextCommonx0x5: {
defaultStyle: {
            default: {"width":"44px","height":"20px","color":"var(--t-text-rh-color)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"619px","top":"69px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"日期",
editable:false,
cStyle:{"wrapper":{"default":{"width":"44px","height":"20px","color":"var(--t-text-rh-color)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"619px","top":"69px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTablex0x6: {
defaultStyle: {
            default: {"width":"1159px","height":"209px","position":"unset","left":"14px","top":"114px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"100%",
stripe:true,
border:false,
autoScroll:"null",
speed:"",
columns:[{"label":"断面名称","key":"point_name","align":"left","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"80px","type":"default","stateKey":"iconStatus","showOverflowTooltip":true},{"label":"控制类型","type":"default","key":"controllevel_name","stateKey":"","width":"80px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"报警时间","type":"default","key":"alarm_time","stateKey":"","width":"120px","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)"}},"stateList":[]},{"label":"报警类型","type":"default","key":"alarm_type_name","stateKey":"","width":"200px","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--t-white)"}},"stateList":[],"fixed":false,"operationList":[]},{"label":"水质目标","type":"state","key":"targetwaterlevel","stateKey":"targetwaterlevel","width":"100px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"fixed":false,"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"-","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"","borderRadius":"2PX","borderWidth":"0PX"}}],"style":{"cellStyle":{"background":""},"fontStyle":{"fontWeight":"bolder","fontSize":"16PX","color":null,"padding":"","borderRadius":"4PX"}}},{"label":"水质现状","type":"state","key":"waterlevel","stateKey":"waterlevel","width":"100px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"fixed":false,"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"-","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"","borderRadius":"2PX","borderWidth":"0PX"}}],"style":{"cellStyle":{"background":""},"fontStyle":{"fontWeight":"bolder","fontSize":"16PX","color":null,"padding":"","borderRadius":"4PX"}}},{"label":"报警内容","type":"default","key":"alarm_desc","stateKey":"","width":"480px","minWidth":"","align":"left","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--t-white)","display":"block","width":"100%"}},"stateList":[],"fixed":false,"operationList":[{"name":"查看","id":"view","fontStyle":{"color":"rgba(5,245,251,1)"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1159px","height":"209px","position":"unset","left":"14px","top":"114px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"600","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--yybj-right-table-header-bg)"}}}, 
 },
},
tLinex0x7: {
defaultStyle: {
            default: {"width":"1157px","height":"1px","top":"103px","left":"17px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid rgba(0,71,137,0.6)","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"1157px","height":"1px","top":"103px","left":"17px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid rgba(0,71,137,0.6)","position":"unset"}}}, 
 },
},
tImageBasex0x8: {
defaultStyle: {
            default: {"width":"16px","height":"26px","position":"unset","left":"12px","top":"10px"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-26/3739c586e44d40abb8ac33dcadca9fba.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"16px","height":"26px","position":"unset","left":"12px","top":"10px"}}}, 
 },
},
tTextCommonx0x9: {
defaultStyle: {
            default: {"width":"151px","height":"30px","color":"var(--yybj-right-title-font-color)","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"36px","top":"8px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"水环境报警",
editable:false,
cStyle:{"wrapper":{"default":{"width":"151px","height":"30px","color":"var(--yybj-right-title-font-color)","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"36px","top":"8px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
});
const changeTime = (date) => {
state.rangeTime = date
state.startTime = date[0]
state.endTime = date[1]
apiRegistry.getListData.request();
};
const handleSelectType = () => {
};
const getData = () => {
async function getData(){
  await apiRegistry.getTime.request();
  await apiRegistry.getListData.request();
}
getData()
};
const onchange1774493808423 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.selectedType = value;
// 执行自定义方法
getData();
};
const ondateChange1774493587356 = (data) => {
// 执行自定义方法
changeTime(data);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"REGION_PATH":"350700000000","CONTROLLEVEL_CODE":"state.selectedType","START_TIME":"state.startTime","END_TIME":"state.endTime","interfaceId":"1a2ee8f03562ed18d41eb3f24029ef45"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"REGION_PATH":"350700000000","CONTROLLEVEL_CODE":state.selectedType,"START_TIME":state.startTime,"END_TIME":state.endTime,"interfaceId":"1a2ee8f03562ed18d41eb3f24029ef45"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"REGION_PATH":"350700000000","CONTROLLEVEL_CODE":state.selectedType,"START_TIME":state.startTime,"END_TIME":state.endTime,"interfaceId":"1a2ee8f03562ed18d41eb3f24029ef45"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     const { data } = res.data
if (data.length) {
  state.listData = data
  state.listData.forEach(item => {
    Object.keys(item).forEach(key => {
      if (item[key] === '') {
        item[key] = '-';
      }
    });
  });
} else {
  state.listData = []
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.listData = []

      reject(error);
    });
  });
},
              },
// 接口函数
 getTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"REGION_PATH":"350700000000","CONTROLLEVEL_CODE":"state.selectedType","interfaceId":"e0b8298ea24a1debebe7db2d5f36bca6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"REGION_PATH":"350700000000","CONTROLLEVEL_CODE":state.selectedType,"interfaceId":"e0b8298ea24a1debebe7db2d5f36bca6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"REGION_PATH":"350700000000","CONTROLLEVEL_CODE":state.selectedType,"interfaceId":"e0b8298ea24a1debebe7db2d5f36bca6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTime'] = res.data;
                
     const { data } = res.data
state.endTime = ''
state.startTime = ''
state.rangeTime = []
if (data) {
  state.endTime = data.alarm_time || ''
  state.startTime = getPrevTime(state.endTime + ':00:00', 'hour').slice(0, 13)
  state.rangeTime = [state.startTime, state.endTime]
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
 function handleWindowResize() {
                            setPageScale('t-l-c-gztRightShjbj', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getData();
onMounted(() => {
setPageScale('t-l-c-gztRightShjbj', global.appScaleMode, 'normal');
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

 const tSelectx0x2ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2.default, componentState.tSelectx0x2?.[state.screenSize]));

 const tDatePickerx0x3ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x3.default, componentState.tDatePickerx0x3?.[state.screenSize]));

 const tTextCommonx0x4ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4.default, componentState.tTextCommonx0x4?.[state.screenSize]));

 const tTextCommonx0x5ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x5.default, componentState.tTextCommonx0x5?.[state.screenSize]));

 const tTablex0x6ComputedData = computed(() => _.merge({}, componentState.tTablex0x6.default, componentState.tTablex0x6?.[state.screenSize]));

 const tLinex0x7ComputedData = computed(() => _.merge({}, componentState.tLinex0x7.default, componentState.tLinex0x7?.[state.screenSize]));

 const tImageBasex0x8ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x8.default, componentState.tImageBasex0x8?.[state.screenSize]));

 const tTextCommonx0x9ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x9.default, componentState.tTextCommonx0x9?.[state.screenSize]));

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
tSelectx0x2ComputedData,
tDatePickerx0x3ComputedData,
tTextCommonx0x4ComputedData,
tTextCommonx0x5ComputedData,
tTablex0x6ComputedData,
tLinex0x7ComputedData,
tImageBasex0x8ComputedData,
tTextCommonx0x9ComputedData,
onchange1774493808423,
ondateChange1774493587356,
};
},
};