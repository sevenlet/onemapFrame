window.realtimeContentComponent = {
template: 
`<div id="t-l-c-realtimeContent" class="t-l-c-realtimeContent" >` +
`<t-rect id="t-rect-5926.a1350bfba" class="realtimeContent-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-20d5.835648491" class="realtimeContent-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1741849285886">` +
`</t-rect>` +
`<t-rect id="t-rect-f308.453d21d46" class="realtimeContent-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-table v-if="state.isTable === false" id="t-table-d82a.894b9e035" class="realtimeContent-t-table-0-6"  :height="tTablex0x6ComputedData.height" :stripe="tTablex0x6ComputedData.stripe" :border="tTablex0x6ComputedData.border" :auto-scroll="tTablex0x6ComputedData.autoScroll" :speed="tTablex0x6ComputedData.speed" :columns="tTablex0x6ComputedData.columns" :data="replaceCssVariables(filterData(state.tableData, componentPropBindingMap?.['t-table-d82a.894b9e035']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x6ComputedData.defaultSort" :c-style="tTablex0x6ComputedData.cStyle" :highlight-current-row="tTablex0x6ComputedData.highlightCurrentRow">` +
`</t-table>` +
`<t-table v-if="state.isTable === true" id="t-table-4033.5034f24ca" class="realtimeContent-t-table-0-7"  :height="tTablex0x7ComputedData.height" :stripe="tTablex0x7ComputedData.stripe" :border="tTablex0x7ComputedData.border" :auto-scroll="tTablex0x7ComputedData.autoScroll" :speed="tTablex0x7ComputedData.speed" :columns="tTablex0x7ComputedData.columns" :data="replaceCssVariables(filterData(state.tableData, componentPropBindingMap?.['t-table-4033.5034f24ca']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x7ComputedData.defaultSort" :c-style="tTablex0x7ComputedData.cStyle" :highlight-current-row="tTablex0x7ComputedData.highlightCurrentRow">` +
`</t-table>` +
`<t-select id="t-select-1e7c.672d686ba" class="realtimeContent-t-select-0-8"  :active-value="replaceCssVariables(filterData(state.dropSelect, componentPropBindingMap?.['t-select-1e7c.672d686ba']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x8ComputedData.options" :alias="tSelectx0x8ComputedData.alias" :multiple="tSelectx0x8ComputedData.multiple" :placeholder="tSelectx0x8ComputedData.placeholder" :clearable="tSelectx0x8ComputedData.clearable" :disabled="tSelectx0x8ComputedData.disabled" :name="tSelectx0x8ComputedData.name" :autocomplete="tSelectx0x8ComputedData.autocomplete" :filterable="tSelectx0x8ComputedData.filterable" :no-match-text="tSelectx0x8ComputedData.no-match-text" :no-data-text="tSelectx0x8ComputedData.no-data-text" :c-style="tSelectx0x8ComputedData.cStyle" @change="onchange1742286536075">` +
`</t-select>` +
`<t-tabs id="t-tabs-7c75.94d02ccac" class="realtimeContent-t-tabs-0-9"  :alias="tTabsx0x9ComputedData.alias" :data="tTabsx0x9ComputedData.data" :model-value="tTabsx0x9ComputedData.model-value" :tab-position-extend="tTabsx0x9ComputedData.tabPositionExtend" :stretch="tTabsx0x9ComputedData.stretch" :c-style="tTabsx0x9ComputedData.cStyle" :active-tab="replaceCssVariables(filterData(state.tabSelect, componentPropBindingMap?.['t-tabs-7c75.94d02ccac']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @tab-click="ontabClick1742285655057">` +
`</t-tabs>` +
`<t-text-unit v-if="state.isTable === true" id="t-text-unit-02d4.9135f64e9" class="realtimeContent-t-text-unit-0-10"  :c-style="tTextUnitx0x10ComputedData.cStyle" :justify="tTextUnitx0x10ComputedData.justify" :align="tTextUnitx0x10ComputedData.align" :content="tTextUnitx0x10ComputedData.content" :unit="replaceCssVariables(filterData(state.latestTime, componentPropBindingMap?.['t-text-unit-02d4.9135f64e9']['unit'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :show-overflow-tooltip="tTextUnitx0x10ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-component id="t-component-5857.9f31bef28" class="realtimeContent-t-component-0-11"  :name="tComponentx0x11ComputedData.name" :c-style="tComponentx0x11ComputedData.cStyle" :src="tComponentx0x11ComputedData.src" :component-name="tComponentx0x11ComputedData.componentName">` +
`</t-component>` +
`<t-gradient-shadow-text id="t-gradient-shadow-text-9ec1.36b8580c8" class="realtimeContent-t-gradient-shadow-text-0-12"  :label="tGradientShadowTextx0x12ComputedData.label" :c-style="tGradientShadowTextx0x12ComputedData.cStyle" :shadow-style="tGradientShadowTextx0x12ComputedData.shadowStyle">` +
`</t-gradient-shadow-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-3c53.380ecef41":{"attributeName":"tRectx0x0"},"t-rect-5926.a1350bfba":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-d94d.9b8284966":{"attributeName":"tRectx0x2"},"t-text-a789.a4d2ea18c":{"attributeName":"tTextx0x3"},"t-rect-20d5.835648491":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f308.453d21d46":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-table-d82a.894b9e035":{"attributeName":"tTablex0x6","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]},"highlightCurrentRow":{"filters":[]}},"t-table-4033.5034f24ca":{"attributeName":"tTablex0x7","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]},"highlightCurrentRow":{"filters":[]}},"t-select-1e7c.672d686ba":{"attributeName":"tSelectx0x8","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-7c75.94d02ccac":{"attributeName":"tTabsx0x9","alias":{"filters":[]},"data":{"filters":[]},"model-value":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]},"activeTab":{"filters":[]}},"t-text-unit-02d4.9135f64e9":{"attributeName":"tTextUnitx0x10","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-component-5857.9f31bef28":{"attributeName":"tComponentx0x11","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-gradient-shadow-text-9ec1.36b8580c8":{"attributeName":"tGradientShadowTextx0x12","label":{"filters":[]},"cStyle":{"filters":[]},"shadowStyle":{"filters":[]}}};
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
   dayTime: "",
   hourTime: "",
   isTable: true,
   isWaterSendAR: false,
   isAirSendAR: false,
   waterAppURL: "http://192.168.0.202:7777/mapgo5.0/preview.html?appID=c98ba0d7714044f0b8651285b48d4369&appType=2D&appName=%E9%A9%BE%E9%A9%B6%E8%88%B1-%E7%94%9F%E6%80%81%E4%BA%91-%E6%B0%B4%E7%8E%AF%E5%A2%83-%E5%AE%9E%E6%97%B6%E7%9B%91%E6%8E%A7",
   airAppURL: "http://192.168.0.202:7777/mapgo5.0/preview.html?appID=3d40efbdcf1a4b7e97a24e9d971206eb&appType=2D&appName=%E9%A9%BE%E9%A9%B6%E8%88%B1-%E7%94%9F%E6%80%81%E4%BA%91-%E5%A4%A7%E6%B0%94",
   tabSelect: "HOUR",
   tableData: [],
   latestTime: "--",
   dropSelect: "air",
   ecologicalCloudAllState: {"realtimeBtnActive":false},
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
            default: {"width":"400px","height":"870px","position":"unset","left":"0px","top":"50px","backgroundColor":"var(--sty-card-bgc)","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"870px","position":"unset","left":"0px","top":"50px","backgroundColor":"var(--sty-card-bgc)","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"14px","height":"14px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-03-13/6d33d2de918a4901856c059a14b72c48.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","cursor":"pointer","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"358px","top":"18px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"14px","height":"14px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-03-13/6d33d2de918a4901856c059a14b72c48.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","cursor":"pointer","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"358px","top":"18px"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"400px","height":"48px","left":"0px","top":"55px","backgroundImage":"var(--t-realtime-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"48px","left":"0px","top":"55px","backgroundImage":"var(--t-realtime-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset"}}}, 
 },
},
tTablex0x6: {
defaultStyle: {
            default: {"width":"400px","height":"785px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"},
            
            },
 default: { 
 
height:"785",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"断面名称","type":"default","key":"POINT_NAME","stateKey":"","infoKey":"","infoPosition":"left","tooltipKey":"","tooltipPosition":"top","width":"130PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"cellStyle":{"cursor":"default","background":""},"fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}},"infoStyle":{"fontStyle":{"color":"#eee","fontSize":"","fontWeight":"normal","padding":"","margin":"","background":""}}},{"label":"水体名称","type":"default","key":"WATER_NAME","stateKey":"","infoKey":"","infoPosition":"left","tooltipKey":"","tooltipPosition":"top","width":"90PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":false,"style":{"cellStyle":{"cursor":"default","background":""},"fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}},"infoStyle":{"fontStyle":{"color":"#eee","fontSize":"","fontWeight":"normal","padding":"","margin":"","background":""}}},{"label":"水质目标","type":"default","key":"WATERQUALITYLEVELTARGETNAME","stateKey":"","infoKey":"","infoPosition":"left","tooltipKey":"","tooltipPosition":"top","width":"90PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"cellStyle":{"cursor":"default","background":""},"fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}},"infoStyle":{"fontStyle":{"color":"#eee","fontSize":"","fontWeight":"normal","padding":"","margin":"","background":""}}},{"label":"水质现状","type":"default","key":"WATERQUALITYLEVELNAME","stateKey":"","infoKey":"","infoPosition":"left","tooltipKey":"","tooltipPosition":"top","width":"88PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"cellStyle":{"cursor":"default","background":""},"fontStyle":{"color":"#00FFFF","fontSize":"","fontWeight":"normal","padding":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}},"infoStyle":{"fontStyle":{"color":"#eee","fontSize":"","fontWeight":"normal","padding":"","margin":"","background":""}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"400px","height":"785px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"}},"headerCell":{"default":{"borderBottom":"2px none rgba(26,27,31,1)","borderLeft":"1px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","width":"418px","height":"28px","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"7px","paddingRight":"0px"}},"bodyCell":{"default":{"backgroundColor":"","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","height":"32px","paddingTop":"7px","paddingBottom":"7px","fontSize":"16px","paddingLeft":"7px","paddingRight":"0px","lineHeight":"24px"},"hover":{"backgroundColor":"rgba(48, 72, 173, 0)","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","lineHeight":"24px","height":"32px"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(218, 24, 24, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"headerRowWrapper":{"default":{"backgroundColor":"rgba(223, 44, 44, 0)","paddingLeft":"0px","paddingRight":"0px","paddingTop":"0px","backgroundImage":"var(--t-small-tab-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"28px"}},"rowWrapper":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","height":"32px","backgroundColor":"var(--table-bm-color)"},"hover":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"","height":"32px","box-shadow":"rgba(0, 255, 246, 1) 0px 0px 0px 1px inset"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(59, 182, 151, 0)","backgroundImage":"unset !important","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none "},"hover":{"borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"bodyCellInner":{"default":{"height":"20px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"highlightRow":{"default":{"height":"auto"}}},
highlightCurrentRow:false, 
 },
},
tTablex0x7: {
defaultStyle: {
            default: {"width":"400px","height":"785px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"},
            
            },
 default: { 
 
height:"785",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"站点名称","type":"default","key":"POINT_NAME","stateKey":"","infoKey":"","infoPosition":"left","tooltipKey":"","tooltipPosition":"top","width":"130PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"cellStyle":{"cursor":"default","background":""},"fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}},"infoStyle":{"fontStyle":{"color":"#eee","fontSize":"","fontWeight":"normal","padding":"","margin":"","background":""}}},{"label":"行政区","type":"default","key":"REGION_NAME","stateKey":"","infoKey":"","infoPosition":"left","tooltipKey":"","tooltipPosition":"top","width":"90PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"cellStyle":{"cursor":"default","background":""},"fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}},"infoStyle":{"fontStyle":{"color":"#eee","fontSize":"","fontWeight":"normal","padding":"","margin":"","background":""}}},{"label":"控制级别","type":"default","key":"POINT_TYPE_NAME","stateKey":"","infoKey":"","infoPosition":"left","tooltipKey":"","tooltipPosition":"top","width":"90PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"cellStyle":{"cursor":"default","background":""},"fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}},"infoStyle":{"fontStyle":{"color":"#eee","fontSize":"","fontWeight":"normal","padding":"","margin":"","background":""}}},{"label":"AQI","type":"default","key":"AQI","stateKey":"","infoKey":"","infoPosition":"left","tooltipKey":"","tooltipPosition":"top","width":"88PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"cellStyle":{"cursor":"default","background":""},"fontStyle":{"color":"#00FFFF","fontSize":"","fontWeight":"normal","padding":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}},"infoStyle":{"fontStyle":{"color":"#eee","fontSize":"","fontWeight":"normal","padding":"","margin":"","background":""}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"400px","height":"785px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"}},"headerCell":{"default":{"borderBottom":"2px none rgba(26,27,31,1)","borderLeft":"1px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","width":"418px","height":"28px","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"7px","paddingRight":"0px"}},"bodyCell":{"default":{"backgroundColor":"","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","height":"32px","paddingTop":"7px","paddingBottom":"7px","fontSize":"16px","paddingLeft":"7px","paddingRight":"0px","lineHeight":"24px"},"hover":{"backgroundColor":"rgba(48, 72, 173, 0)","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","lineHeight":"24px","height":"32px"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(218, 24, 24, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"headerRowWrapper":{"default":{"backgroundColor":"rgba(223, 44, 44, 0)","paddingLeft":"0px","paddingRight":"0px","paddingTop":"0px","backgroundImage":"var(--t-small-tab-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"28px"}},"rowWrapper":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","height":"32px","backgroundColor":"var(--table-bm-color)"},"hover":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"","height":"32px","box-shadow":"rgba(0, 255, 246, 1) 0px 0px 0px 1px inset"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(59, 182, 151, 0)","backgroundImage":"unset !important","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none "},"hover":{"borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"bodyCellInner":{"default":{"height":"20px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"highlightRow":{"default":{"height":"auto"}}},
highlightCurrentRow:false, 
 },
},
tSelectx0x8: {
defaultStyle: {
            default: {"width":"182px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":""},
            
            },
 default: { 
 
activeValue:"air",
options:[{"value":"air","label":"大气","disabled":false},{"value":"water","label":"水","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"182px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":""},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","box-shadow":"var(--business-select-shadow) 0px 0px 0px 2px "}},"placeholder":{"default":{"color":"var(--t-text)"}},"arrow":{"default":{"color":"var(--t-text)","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px","right":"0","position":"relative","left":"7px"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","width":"182px","paddingLeft":"6px","paddingRight":"6px"}},"dropdownItem":{"default":{"fontSize":"14px","color":"var(--t-text)","height":"28px","lineHeight":"28px","width":"168px","marginBottom":"4px","paddingLeft":"8px","paddingRight":"8px"},"hover":{"color":"var(--t-text)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"disabledWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTabsx0x9: {
defaultStyle: {
            default: {"position":"unset","width":"182px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","lineHeight":"26px","animationName":"","left":"206px","top":"63px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"时","name":"HOUR"},{"label":"日","name":"DAY"}],
'model-value':"work",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"position":"unset","width":"182px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","lineHeight":"26px","animationName":"","left":"206px","top":"63px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"itemWrapper":{"default":{"height":"30px","width":"68px","lineHeight":"23px","fontSize":"14px","color":"var(--t-text)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","backgroundColor":"rgba(20, 112, 204, 0)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"active":{"fontSize":"14px","color":"","backgroundColor":"rgba(37, 156, 224, 0)","border":"1px solid var(--business-tab-third-active-border)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","box-shadow":"inset 0px 0px 18px 0px rgba(255, 206, 109, 0.49)","backdropFilter":"blur(6px)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","lineHeight":"30px"},"hover":{"fontSize":"14px"}},"itemActiveBorder":{"active":{"backgroundColor":"rgba(255, 0, 0, 0)"},"default":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"rgba(222, 233, 14, 0)"}},"itemLabel":{"default":{"lineHeight":"30px","height":"auto"},"active":{"lineHeight":"30px","backgroundImage":"linear-gradient(180deg,rgba(248, 250, 222, 1) 18.01801801801802%,rgba(255, 229, 148, 1) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontSize":"14px"},"hover":{"lineHeight":"32px"}}},
activeTab:"HOUR", 
 },
},
tTextUnitx0x10: {
defaultStyle: {
            default: {"width":"260px","height":"12px","fontSize":"12px","lineHeight":"12px","color":"var(--t-color-text-green)","top":"111px","left":"130px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"260px","height":"12px","fontSize":"12px","lineHeight":"12px","color":"var(--t-color-text-green)","top":"111px","left":"130px","position":"unset"}},"text":{"default":{"fontSize":"12px"}},"unit":{"default":{"fontSize":"12px"}}},
justify:"flex-end",
align:"flex-end",
content:"最后更新时间：",
unit:"--",
showOverflowTooltip:true, 
 },
},
tComponentx0x11: {
defaultStyle: {
            default: {"width":"400px","height":"52px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"secondTitleComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"52px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/secondTitle",
componentName:"secondTitleComponent", 
 },
},
tGradientShadowTextx0x12: {
defaultStyle: {
            default: {"width":"166px","height":"31px","position":"unset","left":"40px","top":"12px","fontFamily":"方正综艺","fontSize":"20px","color":"","textAlign":"left","backgroundColor":"","letterSpacing":"2px","paddingLeft":"0px","marginLeft":"0px","animationName":"","cursor":"auto"},
            
            },
 default: { 
 
label:"实时数据",
cStyle:{"wrapper":{"default":{"width":"166px","height":"31px","position":"unset","left":"40px","top":"12px","fontFamily":"方正综艺","fontSize":"20px","color":"","textAlign":"left","backgroundColor":"","letterSpacing":"2px","paddingLeft":"0px","marginLeft":"0px","animationName":"","cursor":"auto"}},"textStyle":{"default":{"-webkit-text-fill-color":"transparent","-webkit-background-clip":"text","backgroundImage":"linear-gradient(rgba(255, 255, 255, 1),rgba(255, 255, 255, 1))","fontWeight":"300","color":"rgba(255, 255, 255, 1)","fontSize":"20px","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","fontFamily":"方正综艺","paddingLeft":"10px","paddingTop":"4px"}},"textShadowStyle":{"default":{"fontWeight":"bold","color":"","fontFamily":"方正综艺","paddingLeft":"10px","paddingTop":"4px"}}},
shadowStyle:{"blur":"8PX","color":"#00738A"}, 
 },
},
});
const getProvider = () => {
// 拿到“生态云整体”页面的state
const rootData = inject('ecologicalCloudAllState');
state.ecologicalCloudAllState = rootData;

// 引入生态云整体（父级页面）的方法，并赋值给state对应的变量，调用直接state.xxx()
state.removeExistedMapScenes = inject('removeExistedMapScenes');
const regionLevelText = getRegionLevel(global.REGION_CODE);
if (regionLevelText === 'province') {
  global.toolType = 'airToolComponent';
  global.toolName = '大气监测站';
  global.isMapTool = true;
  global.isTool = true;
} else {
  global.isMapTool = false;
}

};
const watchValues = () => {
watch([
  () => global.REGION_CODE,
  () => state.tabSelect,
  () => state.dropSelect,
  ], async () => {
  state.tableData = [];
  state.latestTime = '--';
  console.log(state.dropSelect, 'state.dropSelect')
  if (state.dropSelect === 'air') {
    await getAirTableData();
    sendAirMes();
  } else {
    sendWaterMes();
  }
});
};
const sendAirMes = () => {
const regionLevelText = getRegionLevel(global.REGION_CODE);
const theme = global.theme === '蓝色主题' ? 'blue' : 'green';

const formatStringMap = {
  'HOUR': 'yyyy-MM-dd HH',
  'DAY': 'yyyy-MM-dd',
};

const monitorTime = state.latestTime !== '--'
  ? dateFormat(state.latestTime, formatStringMap[state.tabSelect])
  : '';

function sendChangeAllStatusMes() {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: 'changeAllStatus',
    data: {
      indicator: 'AQI', // 指标
      rendType: 'point', //渲染类型
      time: monitorTime, // 时间
      dateType: state.tabSelect,//时间类型，默认DAY,小时：HOUR,日：DAY,月：CUR_MONTH、年：ACC_MONTH
      REGION_NAME: global.REGION_NAME, // 行政区名称，非必须
      REGION_CODE: global.REGION_CODE, // 行政区编码
      theme: theme,
      dataSource: 'sty', // 如果是生态云发送的消息，加上这个值
    },
  });
}
// 当前选中模块是污染物浓度的
if (regionLevelText === 'province') {
  state.isAirSendAR = false;
  sendChangeAllStatusMes();
  global.toolType = 'airToolComponent';
  global.toolName = '大气监测站';
  global.isMapTool = true;
  global.isTool = true;
}
if (regionLevelText === 'city' || regionLevelText === 'county') {
   global.isMapTool = false;
  if (!state.isAirSendAR) {
    // 先移除，再加载
    // 引入生态云整体（父级页面）的方法，并赋值给state对应的变量，调用直接state.xxx()
    if (state.removeExistedMapScenes) {
      state.removeExistedMapScenes();
    }
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: 'setAppAR', // 消息名称
      data: [
        {
          resCode: 'air',
          resName: '大气',
          opType: 'add',
          appURL: state.airAppURL,
        }
      ],
    });

    global.mapChangeAllStatusParams = {
      indicator: 'AQI', // 指标
      time: monitorTime,
      dateType: state.tabSelect,
      rendType: 'point',
    };
    state.isAirSendAR = true;
    // 其他是否切换场景置为false，以便再次点击对应内容的时候切换对应的二维场景
    state.ecologicalCloudAllState.isExcellentRateSendAR = false;
    state.ecologicalCloudAllState.isPollutionConcentrationSendAR = false;
    state.ecologicalCloudAllState.isSectionSendAppAR = false;
    state.ecologicalCloudAllState.isProportionSendAppAR = false;
    state.ecologicalCloudAllState.isPwxkTypeSendAppAR = false;
    return;
  }
  sendChangeAllStatusMes();
}

};
const sendWaterMes = () => {
const regionLevelText = getRegionLevel(global.REGION_CODE);
const theme = global.theme === '蓝色主题' ? 'blue' : 'green';

function sendChangeAllStatusMes() {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: 'changeAllStatus',
    data: {
      MONITORTIME: state.tabSelect === 'HOUR' ? state.hourTime : state.dayTime, // 时间
      dateType: state.tabSelect,//时间类型，默认DAY,小时：HOUR,日：DAY,月：CUR_MONTH、年：ACC_MONTH
      REGION_NAME: global.REGION_NAME, // 行政区名称，非必须
      REGION_CODE: global.REGION_CODE, // 行政区编码
      theme: theme,
      waterLevelType: 'waterLevel',
      dataSource: 'sty', // 如果是生态云发送的消息，加上这个值
    },
  });
}
console.log(regionLevelText, '*******************');
// global.cityTime = state.tabSelect === 'HOUR' ? state.hourTime : state.dayTime;
// 当前选中模块是污染物浓度的
if (regionLevelText === 'province') {
  state.isWaterSendAR = false;
  sendChangeAllStatusMes();
  console.log(state.dropSelect, 'state.dropSelect1')

  global.toolType = 'waterToolComponent';
  global.toolName = '水环境-实时监控-自动监测断面天数据';
  global.isMapTool = true;
  global.isTool = true;
}
if (regionLevelText === 'city' || regionLevelText === 'county') {
  global.isMapTool = false;
  if (!state.isWaterSendAR) {
    // 先移除，再加载
    // 引入生态云整体（父级页面）的方法，并赋值给state对应的变量，调用直接state.xxx()
    if (state.removeExistedMapScenes) {
      state.removeExistedMapScenes();
    }
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: 'setAppAR', // 消息名称
      data: [
        {
          resCode: 'water_realtime',
          resName: '水实时监控',
          opType: 'add',
          appURL: state.waterAppURL,
        }
      ],
    });

    global.mapChangeAllStatusParams = {
      MONITORTIME: state.tabSelect === 'HOUR' ? state.hourTime : state.dayTime,
      indicator: '',
      dateType: state.tabSelect,
      waterLevelType: 'waterLevel',
    };
    state.isWaterSendAR = true;
    // 其他是否切换场景置为false，以便再次点击对应内容的时候切换对应的二维场景
    state.ecologicalCloudAllState.isExcellentRateSendAR = false;
    state.ecologicalCloudAllState.isPollutionConcentrationSendAR = false;
    state.ecologicalCloudAllState.isSectionSendAppAR = false;
    state.ecologicalCloudAllState.isProportionSendAppAR = false;
    state.ecologicalCloudAllState.isPwxkTypeSendAppAR = false;
    return;
  }
  sendChangeAllStatusMes();
  // sendChangeAllStatusMes();
  console.log(state.dropSelect, 'state.dropSelect2')
}

};
const initData = () => {
const init = async () => {
  await getAirTableData();
  sendAirMes();
};

init();
};
const changeTable = (value) => {
if (value === 'air') {
  state.isTable = true;
  global.toolType = 'airToolComponent';
  initData();
} else {
  state.isTable = false;
  global.toolType = 'watertoolComponent';
  if (state.tabSelect === 'HOUR') {
    getHourData();
  } else {
    getDayData();
  }

}
};
const selectTab = (value) => {
// getHourData
if (!state.isTable) {
  if (value === '时') {
    getHourData();
  } else {
    getDayData()
  }
}
};
const onclick1741849285886 = () => {
// 设置变量值
state.ecologicalCloudAllState.realtimeBtnActive = false;
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeStyRealtime", // 消息名称
data: {}, // 发送的数据
});
};
const onchange1742286536075 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.dropSelect = value;
// 设置变量值
state.isAirSendAR = false;
// 设置变量值
state.isWaterSendAR = false;
// 执行自定义方法
changeTable(value);
};
const ontabClick1742285655057 = (data) => {
// 设置变量值
state.tabSelect = data.name;
// 执行自定义方法
selectTab(data.label);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getNewHour: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":"","AREA_CODE":"","REGION_CODE":"global.REGION_CODE","interfaceId":"f6d8b19a9c1adf2d493f18b21a232c5d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":"","AREA_CODE":"","REGION_CODE":global.REGION_CODE,"interfaceId":"f6d8b19a9c1adf2d493f18b21a232c5d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":"","AREA_CODE":"","REGION_CODE":global.REGION_CODE,"interfaceId":"f6d8b19a9c1adf2d493f18b21a232c5d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getNewHour'] = res.data;
                
     
state.hourTime = res.data.data.MONITORTIME;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getNewDay: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":"","REGION_CODE":"global.REGION_CODE","interfaceId":"90e4dbffe295a3627146508180fd3611"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":"","REGION_CODE":global.REGION_CODE,"interfaceId":"90e4dbffe295a3627146508180fd3611"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":"","REGION_CODE":global.REGION_CODE,"interfaceId":"90e4dbffe295a3627146508180fd3611"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getNewDay'] = res.data;
                
     
state.dayTime = res.data.data.MONITORTIME;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getHourData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"POINT_NAME":"","CODE_WATERQUALITYLEVELS":"","WSYSTEM_CODE":"","CODE_CONTROLLEVEL":"","CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":"state.hourTime","AREA_CODE":"","REGION_CODE":"global.REGION_CODE","interfaceId":"31c9803f0feac63d3392de7afd34fe14"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"POINT_NAME":"","CODE_WATERQUALITYLEVELS":"","WSYSTEM_CODE":"","CODE_CONTROLLEVEL":"","CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":state.hourTime,"AREA_CODE":"","REGION_CODE":global.REGION_CODE,"interfaceId":"31c9803f0feac63d3392de7afd34fe14"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"POINT_NAME":"","CODE_WATERQUALITYLEVELS":"","WSYSTEM_CODE":"","CODE_CONTROLLEVEL":"","CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":state.hourTime,"AREA_CODE":"","REGION_CODE":global.REGION_CODE,"interfaceId":"31c9803f0feac63d3392de7afd34fe14"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHourData'] = res.data;
                
     const { data } = res.data;
state.tableData = [];
if (!state.isTable) {
  state.tableData = (data || []).map((item) => ({
    ...item,
    POINT_NAME: handleNoVal(item.POINT_NAME),
    WATER_NAME: handleNoVal(item.WATER_NAME),
    WATERQUALITYLEVELTARGETNAME: handleNoVal(item.WATERQUALITYLEVELTARGETNAME),
    WATERQUALITYLEVELNAME: handleNoVal(item.WATERQUALITYLEVELNAME),
  }));
}


      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getDayData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"POINT_NAME":"","CODE_WATERQUALITYLEVELS":"","WSYSTEM_CODE":"","CODE_CONTROLLEVEL":"","CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":"state.dayTime","AREA_CODE":"","REGION_CODE":"global.REGION_CODE","interfaceId":"b8b91b3f357ca4303b5c9f4b97dcd528"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"POINT_NAME":"","CODE_WATERQUALITYLEVELS":"","WSYSTEM_CODE":"","CODE_CONTROLLEVEL":"","CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":state.dayTime,"AREA_CODE":"","REGION_CODE":global.REGION_CODE,"interfaceId":"b8b91b3f357ca4303b5c9f4b97dcd528"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"POINT_NAME":"","CODE_WATERQUALITYLEVELS":"","WSYSTEM_CODE":"","CODE_CONTROLLEVEL":"","CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":state.dayTime,"AREA_CODE":"","REGION_CODE":global.REGION_CODE,"interfaceId":"b8b91b3f357ca4303b5c9f4b97dcd528"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDayData'] = res.data;
                
     const { data } = res.data;
state.tableData = [];
if (!state.isTable) {
  state.tableData = (data || []).map((item) => ({
    ...item,
    POINT_NAME: handleNoVal(item.POINT_NAME),
    WATER_NAME: handleNoVal(item.WATER_NAME),
    WATERQUALITYLEVELTARGETNAME: handleNoVal(item.WATERQUALITYLEVELTARGETNAME),
    WATERQUALITYLEVELNAME: handleNoVal(item.WATERQUALITYLEVELNAME),
  }));

}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getAirTableData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"DATE_TYPE":"state.tabSelect","POINT_TYPE":"0,1,2,3,4","REGION_CODE":"global.REGION_CODE","interfaceId":"9c8dc42158f4537f5a002f3fca655e9d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"DATE_TYPE":state.tabSelect,"POINT_TYPE":"0,1,2,3,4","REGION_CODE":global.REGION_CODE,"interfaceId":"9c8dc42158f4537f5a002f3fca655e9d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"DATE_TYPE":state.tabSelect,"POINT_TYPE":"0,1,2,3,4","REGION_CODE":global.REGION_CODE,"interfaceId":"9c8dc42158f4537f5a002f3fca655e9d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getAirTableData'] = res.data;
                
     const { data } = res.data;
state.tableData = (data || []).map((item) => ({
  ...item,
  POINT_NAME: handleNoVal(item.POINT_NAME),
  REGION_NAME: handleNoVal(item.REGION_NAME),
  POINT_TYPE_NAME: handleNoVal(item.POINT_TYPE_NAME),
  AQI: handleNoVal(item.AQI),
}));
state.latestTime = handleNoVal(state.tableData[0].MONITORTIME);
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
state.latestTime = '--';
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getNewHour', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getNewDay', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getHourData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getDayData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-realtimeContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
watchValues();
onMounted(() => {
setPageScale('t-l-c-realtimeContent', global.appScaleMode, 'normal');
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
 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tTablex0x6ComputedData = computed(() => _.merge({}, componentState.tTablex0x6.default, componentState.tTablex0x6?.[state.screenSize]));

 const tTablex0x7ComputedData = computed(() => _.merge({}, componentState.tTablex0x7.default, componentState.tTablex0x7?.[state.screenSize]));

 const tSelectx0x8ComputedData = computed(() => _.merge({}, componentState.tSelectx0x8.default, componentState.tSelectx0x8?.[state.screenSize]));

 const tTabsx0x9ComputedData = computed(() => _.merge({}, componentState.tTabsx0x9.default, componentState.tTabsx0x9?.[state.screenSize]));

 const tTextUnitx0x10ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x10.default, componentState.tTextUnitx0x10?.[state.screenSize]));

 const tComponentx0x11ComputedData = computed(() => _.merge({}, componentState.tComponentx0x11.default, componentState.tComponentx0x11?.[state.screenSize]));

 const tGradientShadowTextx0x12ComputedData = computed(() => _.merge({}, componentState.tGradientShadowTextx0x12.default, componentState.tGradientShadowTextx0x12?.[state.screenSize]));

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
tRectx0x1ComputedData,
tRectx0x4ComputedData,
tRectx0x5ComputedData,
tTablex0x6ComputedData,
tTablex0x7ComputedData,
tSelectx0x8ComputedData,
tTabsx0x9ComputedData,
tTextUnitx0x10ComputedData,
tComponentx0x11ComputedData,
tGradientShadowTextx0x12ComputedData,
onclick1741849285886,
onchange1742286536075,
ontabClick1742285655057,
};
},
};