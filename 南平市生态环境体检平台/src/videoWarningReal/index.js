window.videoWarningRealComponent = {
template: 
`<div id="t-l-c-videoWarningReal" class="t-l-c-videoWarningReal" >` +
`<t-component id="t-component-aa14.3ba955fbb" class="videoWarningReal-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-6843.6e62e9a54" class="videoWarningReal-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle" @click="onclick1765615349275">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-a3c4.48c326f87" class="videoWarningReal-t-text-unit-0-2"  :c-style="tTextUnitx0x2ComputedData.cStyle" :justify="tTextUnitx0x2ComputedData.justify" :align="tTextUnitx0x2ComputedData.align" :content="tTextUnitx0x2ComputedData.content" :unit="tTextUnitx0x2ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x2ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-select id="t-select-aa06.70e5fbb7f" class="videoWarningReal-t-select-0-3"  :active-value="replaceCssVariables(filterData(state.taskCode, componentPropBindingMap?.['t-select-aa06.70e5fbb7f']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x3ComputedData.options" :alias="tSelectx0x3ComputedData.alias" :multiple="tSelectx0x3ComputedData.multiple" :placeholder="tSelectx0x3ComputedData.placeholder" :clearable="tSelectx0x3ComputedData.clearable" :disabled="tSelectx0x3ComputedData.disabled" :name="tSelectx0x3ComputedData.name" :autocomplete="tSelectx0x3ComputedData.autocomplete" :filterable="tSelectx0x3ComputedData.filterable" :no-match-text="tSelectx0x3ComputedData.no-match-text" :no-data-text="tSelectx0x3ComputedData.no-data-text" :c-style="tSelectx0x3ComputedData.cStyle">` +
`</t-select>` +
`<t-rect id="t-rect-4ed7.664206f84" class="videoWarningReal-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-a1cf.fdeeb7749" class="videoWarningReal-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-high-light-text id="t-high-light-text-b1c9.d9b6fabf" class="videoWarningReal-t-high-light-text-0-6"  :fragment-list="replaceCssVariables(filterData(state.warningTextArr, componentPropBindingMap?.['t-high-light-text-b1c9.d9b6fabf']['fragmentList'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :styles="tHighLightTextx0x6ComputedData.styles" :c-style="tHighLightTextx0x6ComputedData.cStyle">` +
`</t-high-light-text>` +
`<t-text-common id="t-text-common-54c0.2ab16d38f" class="videoWarningReal-t-text-common-0-7"  :label="tTextCommonx0x7ComputedData.label" :editable="tTextCommonx0x7ComputedData.editable" :c-style="tTextCommonx0x7ComputedData.cStyle">` +
`</t-text-common>` +
`<t-table id="t-table-f4d9.66b63002d" class="videoWarningReal-t-table-0-8"  :height="tTablex0x8ComputedData.height" :stripe="tTablex0x8ComputedData.stripe" :border="tTablex0x8ComputedData.border" :auto-scroll="tTablex0x8ComputedData.autoScroll" :speed="tTablex0x8ComputedData.speed" :columns="tTablex0x8ComputedData.columns" :data="replaceCssVariables(filterData(state.QYKEResultLYList, componentPropBindingMap?.['t-table-f4d9.66b63002d']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x8ComputedData.defaultSort" :c-style="tTablex0x8ComputedData.cStyle" @cell-click="oncellClick1762410432035_0_0">` +
`</t-table>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-aa14.3ba955fbb":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-6843.6e62e9a54":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-a3c4.48c326f87":{"attributeName":"tTextUnitx0x2","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-select-aa06.70e5fbb7f":{"attributeName":"tSelectx0x3","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4ed7.664206f84":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-a1cf.fdeeb7749":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-high-light-text-b1c9.d9b6fabf":{"attributeName":"tHighLightTextx0x6","fragmentList":{"filters":[]},"styles":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-54c0.2ab16d38f":{"attributeName":"tTextCommonx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-table-f4d9.66b63002d":{"attributeName":"tTablex0x8","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
   warningTimeType: "1hour",
   timeStart: "",
   timeEnd: "",
   listData: [],
   airPollutionContentState: {"timeType":"","monitorTimeValue":"","analysisTimaRangeData":[]},
   warningTextArr: [{"text":"当前共","styleName":"style1"},{"text":"2","styleName":"style2"},{"text":"个站点发生","styleName":"style1"},{"text":"4","styleName":"style2"},{"text":"条报警。","styleName":"style1"}],
   inputValue: "",
   controlType: "all",
   taskTypeData: [],
   taskCode: "",
   pjResultList: [],
   QYKEResultLYList: [{"station":"建阳区环保","type":"省控","time":"2025-10-19 15:00","type1":"PM10爆发增长","opt":"view"},{"station":"建阳区环保","type":"省控","time":"2025-10-19 15:00","type1":"PM10爆发增长","opt":"view"},{"station":"建阳区环保","type":"省控","time":"2025-10-19 15:00","type1":"PM10爆发增长","opt":"view"},{"station":"建阳区环保","type":"省控","time":"2025-10-19 15:00","type1":"PM10爆发增长","opt":"view"}],
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
tTextx0x1: {
defaultStyle: {
            default: {"width":"108px","height":"20px","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","fontFamily":"微软雅黑","lineHeight":"20px","textAlign":"right","backgroundImage":"var(--business-right-arrow)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"14px 14px","-webkit-mask-size":"","backgroundPosition":"100% 50%","-webkit-mask-position":"","paddingRight":"18px","position":"unset","left":"294px","top":"6px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"告警明细",
editable:false,
cStyle:{"wrapper":{"default":{"width":"108px","height":"20px","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","fontFamily":"微软雅黑","lineHeight":"20px","textAlign":"right","backgroundImage":"var(--business-right-arrow)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"14px 14px","-webkit-mask-size":"","backgroundPosition":"100% 50%","-webkit-mask-position":"","paddingRight":"18px","position":"unset","left":"294px","top":"6px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextUnitx0x2: {
defaultStyle: {
            default: {"width":"261px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"35px","top":"6px","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"261px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"35px","top":"6px","lineHeight":"20px","animationName":""}},"unit":{"default":{"fontSize":"17px","fontFamily":"方正综艺","lineHeight":"20px"}},"text":{"default":{"lineHeight":"20px","fontSize":"17px"}}},
justify:"flex-start",
align:"flex-end",
content:"视频报警",
unit:"",
showOverflowTooltip:true, 
 },
},
tSelectx0x3: {
defaultStyle: {
            default: {"width":"295px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"113px","top":"46px","position":"unset"},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"NAME","value":"CODE","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"295px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"113px","top":"46px","position":"unset"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"color":"var(--t-white)"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"410px","height":"42px","position":"unset","left":"-1px","top":"100px","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"42px","position":"unset","left":"-1px","top":"100px","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"18px","height":"19px","position":"unset","left":"15px","top":"112px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-09/8037d0060896423fb4250d034230a26a.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"18px","height":"19px","position":"unset","left":"15px","top":"112px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-09/8037d0060896423fb4250d034230a26a.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
tHighLightTextx0x6: {
defaultStyle: {
            default: {"width":"364px","height":"42px","position":"unset","left":"45px","top":"100px","lineHeight":"42px"},
            
            },
 default: { 
 
fragmentList:[{"text":"当前共","styleName":"style1"},{"text":"2","styleName":"style2"},{"text":"个站点发生","styleName":"style1"},{"text":"4","styleName":"style2"},{"text":"条报警。","styleName":"style1"}],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--business-text-avianize)"}},{"name":"style2","style":{"fontFamily":"微软雅黑","fontSize":"14PX","fontWeight":400,"color":"var(--business-warn)"}}],
cStyle:{"wrapper":{"default":{"width":"364px","height":"42px","position":"unset","left":"45px","top":"100px","lineHeight":"42px"}}}, 
 },
},
tTextCommonx0x7: {
defaultStyle: {
            default: {"width":"89px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"6px","top":"53px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"报警类型",
editable:false,
cStyle:{"wrapper":{"default":{"width":"89px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"6px","top":"53px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTablex0x8: {
defaultStyle: {
            default: {"width":"409px","height":"180px","position":"unset","left":"0px","top":"156px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"165px",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"30px","type":"default","stateKey":"iconStatus"},{"label":"设备名称","type":"default","key":"station","stateKey":"","width":"120px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"报警时间","type":"default","key":"time","stateKey":"","width":"120px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"类型","type":"default","key":"type1","stateKey":"","width":"unset","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--t-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"操作","type":"operation","key":"opt","stateKey":"","width":"50px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--t-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"fixed":"right","operationList":[{"name":"查看","id":"view","fontStyle":{"color":"rgba(5,245,251,1)"}}]}],
data:[{"station":"建阳区环保","type":"省控","time":"2025-10-19 15:00","type1":"PM10爆发增长","opt":"view"},{"station":"建阳区环保","type":"省控","time":"2025-10-19 15:00","type1":"PM10爆发增长","opt":"view"},{"station":"建阳区环保","type":"省控","time":"2025-10-19 15:00","type1":"PM10爆发增长","opt":"view"},{"station":"建阳区环保","type":"省控","time":"2025-10-19 15:00","type1":"PM10爆发增长","opt":"view"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"409px","height":"180px","position":"unset","left":"0px","top":"156px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
});
const getProvider = () => {
const rootData = inject('airPollutionContentState');
debugger;
state.airPollutionContentState = rootData || {
    "timeType": "",
    "monitorTimeValue": "",
    "analysisTimaRangeData": []
  };

watch(() => rootData, () => {
  state.airPollutionContentState = rootData || {
    "timeType": "",
    "monitorTimeValue": "",
    "analysisTimaRangeData": []
  };
  if (rootData) {
    state.timeStart = state.airPollutionContentState.analysisTimaRangeData[0];
    state.timeEnd = state.airPollutionContentState.analysisTimaRangeData[1];
    apiRegistry.getListData.request();
  }
},
  {
    deep: true
  }
);
};
const handleInputChange = (data) => {
// console.log(data);
if (typeof (data) === 'string') {
  state.inputValue = data;
}
};
const handleTableClick = (row,column) => {
console.log(row, column)
// 勾选图层
rootData.rootSocket.emit('message', {
  type: 'setLayerChecked',
  room: global.socketRoom,
  data: {
    // 省控、国控等
    type: row.POINT_TYPE_CODE,
  },
});
if (column.property !== 'operation') {
  // 给地图发消息-定位
  rootData.rootSocket.emit('message', {
    type: 'airQualityRankingClicked',
    room: global.socketRoom,
    data: {
      // 省控、国控等
      type: row.POINT_TYPE_CODE,
      // 携带的其他属性数据
      attrs: {
        ...row,
      }
    },
  });
} else {
  // 发送消息给地图
  rootData.rootSocket.emit('message', {
    type: 'showAirSourceTrace',
    room: global.socketRoom,
    data: [ // 消息内容
      {
        shareCode: "showAirSourceTrace",
        runtimeValue: row.POINT_CODE,
        pointType: row.POINT_TYPE || '',
        isEnters: true,
        traceTime: row.TIME,
        layerName: row.POINT_TYPE_NAME,
      }]
  });

  /* 发送webSocket消息 */
  // if (rootData?.sendMessage) {
  //   rootData?.sendMessage({
  //     id: guid(true, 'lego'), // 唯一索引
  //     type: "runInteractive", // 消息名称
  //     data: [
  //       {
  //         shareCode: "showTraceDetail",
  //         runtimeValue: row.POINT_CODE,
  //         // 显示lego的溯源
  //         componentName: "airSyxqPanelComponent",
  //         componentParmas: {
  //           pointType: row.POINT_TYPE || '',
  //           isShowAlarmFlag: true,
  //           alarmTime: row.TIME || '',
  //           exceedingTheStandardState: '',
  //           primPollute: row.POLLUTE || '',
  //           polluteLevel: '',
  //           POINT_CODE: row.POINT_CODE,
  //           endTime: (row.END_TIME && row.END_TIME !== '-' && row.END_TIME !== '--') ? row.END_TIME : '',
  //         }
  //       }]
  //   });
  // }

  // 打开右屏面板
  rootData.rootSocket.emit('message', {
    type: 'showAirTraceDetail',
    room: global.socketRoom,
    data: [
      {
        shareCode: "showTraceDetail",
        runtimeValue: row.POINT_CODE,
        // 显示lego的溯源
        componentName: "airSyxqPanelComponent",
        componentParmas: {
          pointType: row.POINT_TYPE || '',
          isShowAlarmFlag: true,
          alarmTime: row.TIME || '',
          exceedingTheStandardState: '',
          primPollute: row.POLLUTE || '',
          polluteLevel: '',
          POINT_CODE: row.POINT_CODE,
          endTime: (row.END_TIME && row.END_TIME !== '-' && row.END_TIME !== '--') ? row.END_TIME : '',
        }
      }
    ]
  });
}
};
const gotoMapLocation = (row,column) => {
// 断面评价结果-点击定位给地图发消息
if (["断面名称", "定位", '水体名称', '水质目标', '水质现状'].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    data: [ // 消息内容
      {
        "code": "point_code",
        "shareCode": "POINT_CODE",
        "defaultValue": "",
        "runtimeValue": row.POINT_CODE
      }
    ]
  });
}


};
const gotoMapLocationLY = (row,column) => {
// 点击定位给地图发消息
if (["定位", '流域', '优良率', '劣Ⅴ类占比', '达标率'].includes(column.label)) {
  // 注意 这时候 还修改了 左上角选中区域值(估计是 发消息时 区域选择也接收了)
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    // 消息内容
    "data": [
      {
        "code": "wsystem_name",
        "shareCode": "WSYSTEM_NAME",
        "defaultValue": "",
        "runtimeValue": row.WSYSTEM_NAME
      },
      {
        "code": "wsystem_code",
        "name": "",
        "defaultValue": "",
        "shareCode": "WSYSTEM_CODE",
        "runtimeValue": row.WSYSTEM_CODE
      }
    ]
  });
}


};
const oncellClick1762410432035_0_0 = (row,column,cell,event) => {
// 执行自定义方法
gotoMapLocationLY(row,column);
};
const onclick1765615349275 = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "createDialog", // 消息名称
data: {"headerName":"","contentName":"videoWarningRealImgViewComponent","minHeight":"432px","minWidth":"800px","title":"告警详情图片查看","isScalse":"","maxHeight":"750px","maxWidth":"1200px"}, // 发送的数据
});
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"BJ_TYPE":"state.warningTimeType","TIME_START":"state.timeStart","TIME_END":"state.timeEnd","TIME_TYPE":"state.airPollutionContentState.timeType","REGION_CODE":"global.regionaQuery.regionCode","DATA_TYPE":"state.controlType","POINT_NAME":"state.inputValue","interfaceId":"30f6f88064d789e356c09c4d4d8218c6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"BJ_TYPE":state.warningTimeType,"TIME_START":state.timeStart,"TIME_END":state.timeEnd,"TIME_TYPE":state.airPollutionContentState.timeType,"REGION_CODE":global.regionaQuery.regionCode,"DATA_TYPE":state.controlType,"POINT_NAME":state.inputValue,"interfaceId":"30f6f88064d789e356c09c4d4d8218c6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"BJ_TYPE":state.warningTimeType,"TIME_START":state.timeStart,"TIME_END":state.timeEnd,"TIME_TYPE":state.airPollutionContentState.timeType,"REGION_CODE":global.regionaQuery.regionCode,"DATA_TYPE":state.controlType,"POINT_NAME":state.inputValue,"interfaceId":"30f6f88064d789e356c09c4d4d8218c6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     // console.log('站点报警', res);
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.listData = [];
  let data = JSON.parse(JSON.stringify(res.data.data))
  state.listData = data.slice(0, 100).map(item => {
    return {
      ...item,
      operation: '查看',
      shortTime: handleNoVal((item.TIME || '').slice(5)),
      POLLUTE: replacePollutionCharacter(item.POLLUTE),
      RATE: handleNoVal(item.RATE),
      STATUS_NAME: handleNoVal(item?.STATUS_NAME),
      RESULT: handleNoVal(item?.RESULT),
    };
  });
  // 去重，获取报警站点数量
  const uniqueArr = [...data.reduce((map, obj) => {
    if (!map.has(obj.POINT_NAME)) {
      map.set(obj.POINT_NAME, obj);  // 如果map中没有该POINT_CODE，添加它
    }
    return map;
  }, new Map()).values()];
  state.warningTextArr[1].text = uniqueArr?.length || 0;
  state.warningTextArr[3].text = data?.length || 0;

} else {
  state.listData = [];
  state.warningTextArr[1].text = 0;
  state.warningTextArr[3].text = 0;
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
watch(() => [state.warningTimeType,global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-videoWarningReal', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-videoWarningReal', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tTextUnitx0x2ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x2.default, componentState.tTextUnitx0x2?.[state.screenSize]));

 const tSelectx0x3ComputedData = computed(() => _.merge({}, componentState.tSelectx0x3.default, componentState.tSelectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tHighLightTextx0x6ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x6.default, componentState.tHighLightTextx0x6?.[state.screenSize]));

 const tTextCommonx0x7ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x7.default, componentState.tTextCommonx0x7?.[state.screenSize]));

 const tTablex0x8ComputedData = computed(() => _.merge({}, componentState.tTablex0x8.default, componentState.tTablex0x8?.[state.screenSize]));

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
tTextx0x1ComputedData,
tTextUnitx0x2ComputedData,
tSelectx0x3ComputedData,
tRectx0x4ComputedData,
tRectx0x5ComputedData,
tHighLightTextx0x6ComputedData,
tTextCommonx0x7ComputedData,
tTablex0x8ComputedData,
onclick1765615349275,
oncellClick1762410432035_0_0,
};
},
};