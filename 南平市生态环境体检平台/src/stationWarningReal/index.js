window.stationWarningRealComponent = {
template: 
`<div id="t-l-c-stationWarningReal" class="t-l-c-stationWarningReal" >` +
`<t-component id="t-component-e556.d092b42c2" class="stationWarningReal-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text-unit id="t-text-unit-df7d.0c301e461" class="stationWarningReal-t-text-unit-0-1"  :c-style="tTextUnitx0x1ComputedData.cStyle" :justify="tTextUnitx0x1ComputedData.justify" :align="tTextUnitx0x1ComputedData.align" :content="tTextUnitx0x1ComputedData.content" :unit="tTextUnitx0x1ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x1ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-list-card id="t-list-card-3c01.11cf987e8" class="stationWarningReal-t-list-card-0-2"  :data="replaceCssVariables(filterData(state.warningStatistics, componentPropBindingMap?.['t-list-card-3c01.11cf987e8']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x2ComputedData.spacingX" :col="tListCardx0x2ComputedData.col" :direction="tListCardx0x2ComputedData.direction" :exchange-order="tListCardx0x2ComputedData.exchangeOrder" :unit-break="tListCardx0x2ComputedData.unitBreak" :key-field="tListCardx0x2ComputedData.keyField" :active-key-field="tListCardx0x2ComputedData.activeKeyField" :active="replaceCssVariables(filterData(state.status, componentPropBindingMap?.['t-list-card-3c01.11cf987e8']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tListCardx0x2ComputedData.cStyle" @card-click="oncardClick1766389115445_0_0">` +
`</t-list-card>` +
`<t-table id="t-table-f4d9.66b63002d" class="stationWarningReal-t-table-0-6"  :height="tTablex0x6ComputedData.height" :stripe="tTablex0x6ComputedData.stripe" :border="tTablex0x6ComputedData.border" :auto-scroll="tTablex0x6ComputedData.autoScroll" :speed="tTablex0x6ComputedData.speed" :columns="tTablex0x6ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-f4d9.66b63002d']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x6ComputedData.defaultSort" :c-style="tTablex0x6ComputedData.cStyle" :empty-text="tTablex0x6ComputedData.emptyText" @cell-click="oncellClick1762410432035_0_0">` +
`</t-table>` +
`<t-image-base id="t-image-base-1fcf.2ed139805" class="stationWarningReal-t-image-base-0-7"  :src="tImageBasex0x7ComputedData.src" :fit="tImageBasex0x7ComputedData.fit" :c-style="tImageBasex0x7ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base id="t-image-base-404c.c4b1b17aa" class="stationWarningReal-t-image-base-0-8"  :src="tImageBasex0x8ComputedData.src" :fit="tImageBasex0x8ComputedData.fit" :c-style="tImageBasex0x8ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base id="t-image-base-ed38.ea8bc6932" class="stationWarningReal-t-image-base-0-9"  :src="tImageBasex0x9ComputedData.src" :fit="tImageBasex0x9ComputedData.fit" :c-style="tImageBasex0x9ComputedData.cStyle">` +
`</t-image-base>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-e556.d092b42c2":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-unit-df7d.0c301e461":{"attributeName":"tTextUnitx0x1","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-list-card-3c01.11cf987e8":{"attributeName":"tListCardx0x2","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4ed7.664206f84":{"attributeName":"tRectx0x3"},"t-rect-a1cf.fdeeb7749":{"attributeName":"tRectx0x4"},"t-high-light-text-b1c9.d9b6fabf":{"attributeName":"tHighLightTextx0x5"},"t-table-f4d9.66b63002d":{"attributeName":"tTablex0x6","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]},"emptyText":{"filters":[]}},"t-image-base-1fcf.2ed139805":{"attributeName":"tImageBasex0x7","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-404c.c4b1b17aa":{"attributeName":"tImageBasex0x8","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-ed38.ea8bc6932":{"attributeName":"tImageBasex0x9","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}}};
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
   endTime: "",
   startTime: "",
   moniterTime: "",
   warningStatistics: [{"station_status":"0","station_status_name":"全部","total":"0","color":"var(--business-white)","unit":"个","title":"1,2,3"},{"station_status":"0","station_status_name":"红色报警","total":"0","color":"#FF2B2B","unit":"个","title":"1","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-12-22/d099c8ca00ca449bb70fcb28de1ba1a4.gif"},{"station_status":"0","station_status_name":"橙色报警","total":"0","color":"#FF7E00","unit":"个","title":"2"},{"station_status":"0","station_status_name":"黄色报警","total":"0","color":"#EEBD10","unit":"个","title":"3"}],
   warningTextArr: [{"text":"当前共","styleName":"style1"},{"text":"2","styleName":"style2"},{"text":"个站点发生","styleName":"style1"},{"text":"2","styleName":"style2"},{"text":"条报警。","styleName":"style1"}],
   pointType: "0",
   listData: [{"region_code":"350700000000","region_name":"南平市","point_code":"350782601","point_name":"武夷山背景站","longitude":"117.993456","latitude":"27.6371","point_type":"国控","count_id":"CDCF28D7DF51558558500A8C05073_17","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"连续超标","start_time":"2025年11月07日00时","end_time":"2025年11月08日00时","level_code":"","level_name":"红色","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","opt":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350700053","point_name":"南平七中","longitude":"118.1756","latitude":"26.6272","point_type":"国控","count_id":"CDCF28D7DF51558558500A8C05073_11","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"连续超标","start_time":"2025年11月07日00时","end_time":"2025年11月08日00时","level_code":"","level_name":"橙色","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","opt":"trace"}],
   status: "1,2,3",
   cardList: [{"station_status":"0","station_status_name":"全部","total":"1","color":"var(--business-white)","unit":"个","title":"0"},{"station_status":"0","station_status_name":"红色报警","total":"1","color":"#FF2B2B","unit":"个","title":"1","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-12-22/d099c8ca00ca449bb70fcb28de1ba1a4.gif"},{"station_status":"0","station_status_name":"橙色报警","total":"1","color":"#FF7E00","unit":"个","title":"2"},{"station_status":"0","station_status_name":"黄色报警","total":"1","color":"#EEBD10","unit":"个","title":"3"}],
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
            default: {"width":"230px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","animationName":"","top":"1px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"230px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","animationName":"","top":"1px"}},"unit":{"default":{"fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","lineHeight":"32px"}},"text":{"default":{"lineHeight":"32px","fontSize":"var(--business-text-size-20)"}}},
justify:"flex-start",
align:"flex-end",
content:"近1小时站点预警预报",
unit:"",
showOverflowTooltip:true, 
 },
},
tListCardx0x2: {
defaultStyle: {
            default: {"width":"420px","height":"68px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px","position":"unset","left":"-1px","top":"48px"},
            
            },
 default: { 
 
data:[{"station_status":"0","station_status_name":"全部","total":"0","color":"var(--business-white)","unit":"个","title":"1,2,3"},{"station_status":"0","station_status_name":"红色报警","total":"0","color":"#FF2B2B","unit":"个","title":"1","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-12-22/d099c8ca00ca449bb70fcb28de1ba1a4.gif"},{"station_status":"0","station_status_name":"橙色报警","total":"0","color":"#FF7E00","unit":"个","title":"2"},{"station_status":"0","station_status_name":"黄色报警","total":"0","color":"#EEBD10","unit":"个","title":"3"}],
spacingX:8,
col:4,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"station_status_name","num":"total","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"2",
cStyle:{"wrapper":{"default":{"width":"420px","height":"68px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px","position":"unset","left":"-1px","top":"48px"}},"itemWrapper":{"default":{"height":"66px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","gap":"11px","background":"var(--business-show-bg30)"},"active":{"background":"linear-gradient(to top, #2671B9, #144A9E)"}},"num":{"default":{"fontSize":"var(--business-num-size-24)","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-white)"}},"title":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","marginTop":"0","marginLeft":"14px","lineHeight":"var(--business-text-size-14)","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"68px","overflow":"hidden"}},"icon":{"default":{"width":"16px","height":"16px","left":"16px","marginLeft":"17px","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-12-22/d099c8ca00ca449bb70fcb28de1ba1a4.gif)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"}},"numBox":{"default":{"marginTop":"8px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","width":"103px"}},"rightContent":{"default":{"alignItems":"center","marginLeft":"0px","justifyContent":"center","background":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"}},"innerWrapper":{"default":{"justifyContent":"left","alignItems":"center","display":"flex","gap":"0px"}}}, 
 },
},
tTablex0x6: {
defaultStyle: {
            default: {"width":"410px","height":"350px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"350px",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"30px","type":"default","stateKey":"iconStatus"},{"label":"站点","type":"default","key":"point_name","stateKey":"","width":"100px","minWidth":"","align":"left","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)"}}},{"label":"类型","type":"default","key":"point_type","stateKey":"excellentValue","width":"60px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"报警时间","type":"default","key":"time","stateKey":"","width":"100px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"infoKey":"start_time"},{"label":"报警级别","type":"state","key":"level_name","stateKey":"level_name","width":"80px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"红色","fontStyle":{"color":"var(--t-aqi-red)","fontSize":"var(--business-text-size-14)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":"","lineHeight":"14px"},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"橙色","fontStyle":{"color":"var(--t-aqi-orange)","fontSize":"var(--business-text-size-14)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"黄色","fontStyle":{"color":"var(--t-aqi-yellow)","fontSize":"var(--business-text-size-14)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"-","fontStyle":{"color":"var(--t-aqi-none)","fontSize":"var(--business-text-size-14)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"操作","type":"operation","key":"opt","stateKey":"","width":"40px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"fixed":false,"operationList":[{"name":"处理","id":"trace","fontStyle":{"color":"rgba(5,245,251,1)"}}]}],
data:[{"region_code":"350700000000","region_name":"南平市","point_code":"350782601","point_name":"武夷山背景站","longitude":"117.993456","latitude":"27.6371","point_type":"国控","count_id":"CDCF28D7DF51558558500A8C05073_17","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"连续超标","start_time":"2025年11月07日00时","end_time":"2025年11月08日00时","level_code":"","level_name":"红色","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","opt":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350700053","point_name":"南平七中","longitude":"118.1756","latitude":"26.6272","point_type":"国控","count_id":"CDCF28D7DF51558558500A8C05073_11","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"连续超标","start_time":"2025年11月07日00时","end_time":"2025年11月08日00时","level_code":"","level_name":"橙色","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","opt":"trace"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"350px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},
emptyText:"暂无数据", 
 },
},
tImageBasex0x7: {
defaultStyle: {
            default: {"width":"12px","height":"12px","position":"unset","left":"116px","top":"59px"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-12-22/d099c8ca00ca449bb70fcb28de1ba1a4.gif",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"12px","height":"12px","position":"unset","left":"116px","top":"59px"}}}, 
 },
},
tImageBasex0x8: {
defaultStyle: {
            default: {"width":"12px","height":"12px","position":"unset","left":"219px","top":"59px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-12-23/ca8b1d207b394dc8ba6162112d0a6bb7.gif",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"12px","height":"12px","position":"unset","left":"219px","top":"59px","animationName":""}}}, 
 },
},
tImageBasex0x9: {
defaultStyle: {
            default: {"width":"12px","height":"12px","position":"unset","left":"321px","top":"59px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-12-23/c9a5791c06e547efac4fcdb9145a0399.gif",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"12px","height":"12px","position":"unset","left":"321px","top":"59px","animationName":""}}}, 
 },
},
});
const handleTabClick = (row,column) => {
console.log(row, column);
// 操作列逻辑改变，点击之后和雷达报警操作列处理一样
if (column.label === '操作') {
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'switchRightContainerName',  // 消息类型名称
      data: 'controlManagementComponent'
    }
  );
  global.airGlobalVariables.fireworks.surroundingAnalysis.activePointInfo = row;
} else if (column.label === '定位') {
  const { longitude, latitude } = row;
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'gotoPoint',  // 消息类型名称
      data: {
        longitude,
        latitude
      }
    }
  );
} else { // 原本的溯源逻辑
  // // 发送消息切换右屏
  // rootData.rootSocket.emit(
  //   'message',  // 固定的消息名称，不能修改
  //   {
  //     room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
  //     type: 'showWarningTraceDetail',  // 消息类型名称
  //     data: {}
  //   }
  // );
  // // 发送消息给地图
  // rootData.rootSocket.emit('message', {
  //   type: 'showAirSourceTrace',
  //   room: global.socketRoom,
  //   data: [ // 消息内容
  //     {
  //       shareCode: "showAirSourceTrace",
  //       runtimeValue: row.point_code,
  //       pointType: row.point_type || '',
  //       isEnters: true,
  //       // 小时或天时间，天的时候拼接上 00
  //       traceTime: global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 00',
  //       layerName: row.point_type,
  //     }]
  // });
  // // 记录当前点位编码
  // global.warningRightPointCode = row?.point_code || ''
}


};
const getData = () => {
watch([() => global.warningRightDataRange.startTime, () => global.warningRightDataRange.endTime], (startTime,endTime) =>{

  if(startTime && endTime){
    apiRegistry.getListData.request();
    apiRegistry.getStatisticsData.request();
  }
},{immediate: true, deep: true})
};
const setStyle = () => {
// 获取 .wrapper 下的第一个 .wrapper__col 元素
const firstCol = document.querySelector('.t-list-card .wrapper .wrapper__col:first-child');

// 如果找到了该元素，则添加 wrapper__col__first 类
if (firstCol) {
    firstCol.classList.add('wrapper__col__first');
}

const componentDom = document.querySelector('#t-l-c-stationWarningReal')
const styles = document.createElement('style')
styles.innerHTML = `
.t-list-card .wrapper .wrapper__col__first .t-list-card-item .card-content__right .title{
  margin-left: 0px !important
}
`
componentDom.append(styles)
};
const handleClickCard = (type) => {
let value = ''
if(type === '1,2,3'){
  value = ''
} else{
  value = type
}
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateAlarmDisplayStatus',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'type': value,
    }
  }
);
};
const watchMoniterTime = () => {
watch(() => global.airGlobalVariables.realTimeAlarm.dateValue, (newVlaue) => {
  if (newVlaue) {
    state.startTime = getPrevTime(`${newVlaue}:00`, 'minute').slice(0, 16);
    state.endTime = newVlaue
    getData()
  }
}, { immediate: true })
async function getData() {
  await apiRegistry.getStatisticsData.request();
  await apiRegistry.getListData.request();
}

};
const oncardClick1766389115445_0_0 = (item) => {
// 设置变量值
state.status = item.title;
// 执行自定义方法
handleClickCard(item.title);
};
const oncellClick1762410432035_0_0 = (row,column,cell,event) => {
// 执行自定义方法
handleTabClick(row,column);
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanWaterServiceBaseUrl","params":{"DISTRICT_CODE":"350702000000","LEVEL_CODE":"state.status","MONITORTIME":"","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"30f6f88064d789e356c09c4d4d8218c6","END_TIME":"state.endTime","START_TIME":"state.startTime","POINT_CODE":"","POINT_TYPE":""}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanWaterServiceBaseUrl,"params":{"DISTRICT_CODE":"350702000000","LEVEL_CODE":state.status,"MONITORTIME":"","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"30f6f88064d789e356c09c4d4d8218c6","END_TIME":state.endTime,"START_TIME":state.startTime,"POINT_CODE":"","POINT_TYPE":""},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanWaterServiceBaseUrl-global.serviceBasePath',  {"DISTRICT_CODE":"350702000000","LEVEL_CODE":state.status,"MONITORTIME":"","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"30f6f88064d789e356c09c4d4d8218c6","END_TIME":state.endTime,"START_TIME":state.startTime,"POINT_CODE":"","POINT_TYPE":""});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     
if(res?.data?.data?.length){
  const { data } = res?.data
  state.listData = data.map(item =>{
    const processedItem = {};
    
    for(const key in item) {
      if(item.hasOwnProperty(key)) {
        processedItem[key] = handleNoVal(item[key]);
      }
    }
  
    const levelNameMap = {
      1: '红色',
      2: '橙色',
      3: '黄色'
    };
    const level_code = item.level_code || processedItem.level_code;
    const level_name = levelNameMap[level_code] || '-';
    
    return {
      ...processedItem,
      point_type: handleNoVal(filters.pointType(item.point_type)),
      station: item.point_name,
      level_name: level_name,
      pkid: item.point_code,
      opt: 'trace'
    };
  })
  
  // 去重，获取报警站点数量
  const uniqueArr = [...data.reduce((map, obj) => {
    if (!map.has(obj.point_name)) {
      map.set(obj.point_name, obj);  // 如果map中没有该POINT_CODE，添加它
    }
    return map;
  }, new Map()).values()];
  state.warningTextArr[1].text = uniqueArr?.length || 0;
  state.warningTextArr[3].text = data?.length || 0;
}else{
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
// 接口函数
 getStatisticsData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanWaterServiceBaseUrl","params":{"DISTRICT_CODE":"350702000000","MONITORTIME":"","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"89b996ef092454c931ca67e4ef7630aa","END_TIME":"state.endTime","START_TIME":"state.startTime","POINT_CODE":"","POINT_TYPE":""}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanWaterServiceBaseUrl,"params":{"DISTRICT_CODE":"350702000000","MONITORTIME":"","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"89b996ef092454c931ca67e4ef7630aa","END_TIME":state.endTime,"START_TIME":state.startTime,"POINT_CODE":"","POINT_TYPE":""},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanWaterServiceBaseUrl-global.serviceBasePath',  {"DISTRICT_CODE":"350702000000","MONITORTIME":"","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"89b996ef092454c931ca67e4ef7630aa","END_TIME":state.endTime,"START_TIME":state.startTime,"POINT_CODE":"","POINT_TYPE":""});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getStatisticsData'] = res.data;
                
     console.log('res', res)
if(res?.data?.head?.statusCode === '200'){

  state.warningStatistics[0].total = res.data.data.total_num || 0;
  state.warningStatistics[1].total = res.data.data.red_num || 0;
  state.warningStatistics[2].total = res.data.data.orange_num || 0;
  state.warningStatistics[3].total = res.data.data.yellow_num || 0;

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
watch(() => [state.status,global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getStatisticsData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-stationWarningReal', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-stationWarningReal', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setStyle();
});
// 执行自定义方法
watchMoniterTime();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextUnitx0x1ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x1.default, componentState.tTextUnitx0x1?.[state.screenSize]));

 const tListCardx0x2ComputedData = computed(() => _.merge({}, componentState.tListCardx0x2.default, componentState.tListCardx0x2?.[state.screenSize]));

 const tTablex0x6ComputedData = computed(() => _.merge({}, componentState.tTablex0x6.default, componentState.tTablex0x6?.[state.screenSize]));

 const tImageBasex0x7ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x7.default, componentState.tImageBasex0x7?.[state.screenSize]));

 const tImageBasex0x8ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x8.default, componentState.tImageBasex0x8?.[state.screenSize]));

 const tImageBasex0x9ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x9.default, componentState.tImageBasex0x9?.[state.screenSize]));

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
tListCardx0x2ComputedData,
tTablex0x6ComputedData,
tImageBasex0x7ComputedData,
tImageBasex0x8ComputedData,
tImageBasex0x9ComputedData,
oncardClick1766389115445_0_0,
oncellClick1762410432035_0_0,
};
},
};