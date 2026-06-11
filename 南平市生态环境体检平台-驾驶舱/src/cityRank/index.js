window.cityRankComponent = {
template: 
`<div id="t-l-c-cityRank" class="t-l-c-cityRank" >` +
`<t-rect id="t-rect-07a2.3630f2dd5" class="cityRank-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-tabs id="t-tabs-204c.b25aff7d8" class="cityRank-t-tabs-0-1"  :alias="tTabsx0x1ComputedData.alias" :data="replaceCssVariables(state.tabData, global?.theme || global?.activeTheme || '默认主题')" :model-value="tTabsx0x1ComputedData.model-value" :tab-position-extend="tTabsx0x1ComputedData.tabPositionExtend" :stretch="tTabsx0x1ComputedData.stretch" :c-style="tTabsx0x1ComputedData.cStyle" :active-tab="replaceCssVariables(state.tabSelect, global?.theme || global?.activeTheme || '默认主题')" @tab-click="ontabClick1741765236667">` +
`</t-tabs>` +
`<t-table v-if="state.tableColumns.length !== 0" id="t-table-3171.b5e999432" class="cityRank-t-table-0-2"  :height="tTablex0x2ComputedData.height" :stripe="tTablex0x2ComputedData.stripe" :border="tTablex0x2ComputedData.border" :auto-scroll="tTablex0x2ComputedData.autoScroll" :speed="tTablex0x2ComputedData.speed" :columns="replaceCssVariables(state.tableColumns, global?.theme || global?.activeTheme || '默认主题')" :data="replaceCssVariables(state.tableData, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x2ComputedData.defaultSort" :c-style="tTablex0x2ComputedData.cStyle" :highlight-current-row="tTablex0x2ComputedData.highlightCurrentRow" :data-raw="tTablex0x2ComputedData.dataRaw">` +
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
   pointType: "",
   paramsRegionCode: "",
   resListData: [],
   tableData: [],
   cityRankTableColumns: [{"label":"排名","type":"default","key":"index","stateKey":"","width":"48PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"区县","type":"default","key":"name","stateKey":"","width":"62PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"AQI","type":"default","key":"aqi","stateKey":"","width":"48PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"首要污染物","type":"default","key":"primPollutant","stateKey":"","width":"240PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX","color":"#FF8400"}}}],
   provinceRankTableColumns: [{"label":"排名","type":"default","key":"index","stateKey":"","width":"48PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"市州","type":"default","key":"name","stateKey":"","width":"62PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"AQI","type":"default","key":"aqi","stateKey":"","width":"48PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"首要污染物","type":"default","key":"primPollutant","stateKey":"","width":"240PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX","color":"#FF8400"}}}],
   oneCityTableColumns: [{"label":"序号","type":"state","key":"index","stateKey":"selected","width":"48PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"1","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":"","borderTop":"1px solid #00FFFF","borderLeft":"1px solid #00FFFF","borderBottom":"1px solid #00FFFF"}},{"name":"0","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"城市","type":"state","key":"name","stateKey":"selected","width":"62PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"1","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":"","borderTop":"1px solid #00FFFF","borderBottom":"1px solid #00FFFF"}},{"name":"0","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"AQI","type":"state","key":"aqi","stateKey":"selected","width":"48PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"1","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":"","borderTop":"1px solid #00FFFF","borderBottom":"1px solid #00FFFF"}},{"name":"0","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"168城市排名","type":"state","key":"rank","stateKey":"selected","width":"101PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"1","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":"","borderTop":"1px solid #00FFFF","borderBottom":"1px solid #00FFFF"}},{"name":"0","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"首要污染物","type":"state","key":"primPollutant","stateKey":"selected","width":"139PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX","color":"#FF8400"}},"stateList":[{"name":"1","fontStyle":{"color":"#FF8400","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":"","borderTop":"1px solid #00FFFF","borderRight":"1px solid #00FFFF","borderBottom":"1px solid #00FFFF"}},{"name":"0","fontStyle":{"color":"#FF8400","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]}],
   threeCityTableColumns: [{"label":"序号","type":"state","key":"index","stateKey":"selected","width":"48PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"1","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":"","borderTop":"1px solid #00FFFF","borderLeft":"1px solid #00FFFF","borderBottom":"1px solid #00FFFF"}},{"name":"0","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"城市","type":"state","key":"name","stateKey":"selected","width":"62PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"1","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":"","borderTop":"1px solid #00FFFF","borderBottom":"1px solid #00FFFF"}},{"name":"0","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"AQI","type":"state","key":"aqi","stateKey":"selected","width":"48PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"1","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":"","borderTop":"1px solid #00FFFF","borderBottom":"1px solid #00FFFF"}},{"name":"0","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"337城市排名","type":"state","key":"rank","stateKey":"selected","width":"101PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"1","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":"","borderTop":"1px solid #00FFFF","borderBottom":"1px solid #00FFFF"}},{"name":"0","fontStyle":{"color":"#FFF","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"首要污染物","type":"state","key":"primPollutant","stateKey":"selected","width":"139PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX","color":"#FF8400"}},"stateList":[{"name":"1","fontStyle":{"color":"#FF8400","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":"","borderTop":"1px solid #00FFFF","borderRight":"1px solid #00FFFF","borderBottom":"1px solid #00FFFF"}},{"name":"0","fontStyle":{"color":"#FF8400","fontSize":"14px","fontWeight":"normal","borderWidth":"0PX","borderStyle":"solid"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]}],
   tableColumns: [],
   tabSelect: "337City",
   tabData: [{"label":"337城市排名","name":"337City"},{"label":"168城市排名","name":"168City"}],
   airQualityState: {"monitorTime":"","yearMonth":"","dateType":""},
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
            default: {"width":"390px","height":"242px","left":"5px","top":"0px","backgroundImage":"var(--t-index-bg)","border":"1px solid","border-image":"var(--t-index-border) 1"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"390px","height":"242px","left":"5px","top":"0px","backgroundImage":"var(--t-index-bg)","border":"1px solid","border-image":"var(--t-index-border) 1"}}}, 
 },
},
tTabsx0x1: {
defaultStyle: {
            default: {"position":"unset","width":"390px","height":"42px","fontSize":"12px","borderBottom":"0px none var(--business-select-border)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","animationName":"","backgroundColor":"rgba(7, 26, 55, 0)","left":"5px","top":"0px"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"337城市排名","name":"337City"},{"label":"168城市排名","name":"168City"}],
'model-value':"liveComponent",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"position":"unset","width":"390px","height":"42px","fontSize":"12px","borderBottom":"0px none var(--business-select-border)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","animationName":"","backgroundColor":"rgba(7, 26, 55, 0)","left":"5px","top":"0px"}},"itemWrapper":{"default":{"height":"42px","lineHeight":"20px","fontSize":"12px","fontWeight":"700","color":"rgba(200, 232, 255, 0.5)","fontFamily":"微软雅黑","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-select-border)"},"hover":{},"active":{"backgroundColor":"rgba(23, 62, 228, 0)","height":"42px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"2px solid var(--sjyy-theme)","color":"var(--sjyy-theme)"}},"itemActiveBorder":{"default":{"height":"2px","bottom":"0px","display":"none"},"hover":{},"active":{}},"itemLabel":{"hover":{"color":"var(--sjyy-theme)"},"active":{"color":"var(--sjyy-theme)","fontSize":"16px","lineHeight":"42px","fontWeight":"400"},"default":{"lineHeight":"42px","fontWeight":"400","fontSize":"16px","color":"var(--t-text)"}}},
activeTab:"337City", 
 },
},
tTablex0x2: {
defaultStyle: {
            default: {"width":"390px","height":"194px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)","left":"5px"},
            
            },
 default: { 
 
height:"194",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[],
data:[{"index":1,"name":"三明市","aqi":13,"rank":"2","priPollutant":"PM₂.₅、PM₁₀"},{"index":2,"name":"漳州市","aqi":13,"rank":"2","priPollutant":"PM₂.₅、PM₁₀"},{"index":3,"name":"南平市","aqi":13,"rank":"2","priPollutant":"PM₂.₅、PM₁₀"},{"index":4,"name":"漳州市","aqi":13,"rank":"2","priPollutant":"PM₂.₅、PM₁₀"},{"index":5,"name":"漳州市","aqi":13,"rank":"2","priPollutant":"PM₂.₅、PM₁₀"},{"index":6,"name":"漳州市","aqi":13,"rank":"2","priPollutant":"PM₂.₅、PM₁₀"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"390px","height":"194px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)","left":"5px"}},"headerCell":{"default":{"borderBottom":"2px none rgba(26,27,31,1)","borderLeft":"1px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","width":"418px","height":"28px","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"7px","paddingRight":"0px"}},"bodyCell":{"default":{"backgroundColor":"","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","height":"32px","paddingTop":"7px","paddingBottom":"7px","fontSize":"16px","paddingLeft":"7px","paddingRight":"0px","lineHeight":"24px"},"hover":{"backgroundColor":"rgba(48, 72, 173, 0)","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","lineHeight":"24px","height":"32px"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(218, 24, 24, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"headerRowWrapper":{"default":{"backgroundColor":"rgba(223, 44, 44, 0)","paddingLeft":"0px","paddingRight":"0px","paddingTop":"0px","backgroundImage":"var(--t-full-service-dia-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"28px"}},"rowWrapper":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","height":"32px","backgroundColor":"var(--table-bm-color)"},"hover":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"","height":"32px","box-shadow":"rgba(0, 255, 246, 1) 0px 0px 0px 1px inset"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(59, 182, 151, 0)","backgroundImage":"unset !important","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none "},"hover":{"borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"bodyCellInner":{"default":{"height":"20px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"highlightRow":{"default":{"height":"auto"}}},
highlightCurrentRow:false,
dataRaw:[{"index":1,"name":"三明市","aqi":13,"rank":"2","priPollutant":"{{PM25}}、{{PM10}}"},{"index":2,"name":"漳州市","aqi":13,"rank":"2","priPollutant":"{{PM25}}、{{PM10}}"},{"index":3,"name":"南平市","aqi":13,"rank":"2","priPollutant":"{{PM25}}、{{PM10}}"},{"index":4,"name":"漳州市","aqi":13,"rank":"2","priPollutant":"{{PM25}}、{{PM10}}"},{"index":5,"name":"漳州市","aqi":13,"rank":"2","priPollutant":"{{PM25}}、{{PM10}}"},{"index":6,"name":"漳州市","aqi":13,"rank":"2","priPollutant":"{{PM25}}、{{PM10}}"}], 
 },
},
});
const setTableColumns = () => {
switch (state.tabSelect) {
  case '337City':
    state.tableColumns = state.threeCityTableColumns;
  break;
  case '168City':
    state.tableColumns = state.oneCityTableColumns;
  break;
  case 'province':
    state.tableColumns = state.provinceRankTableColumns;
  break;
  case 'city':
    state.tableColumns = state.cityRankTableColumns;
  break;
  default: 
    break;
}
};
const getProvider = () => {
const rootData = inject("airQualityState");
watch(() => rootData, () => {
  state.airQualityState = rootData;
  const tabSelect = rootData.tabSelect;
  // t-component-5bc3.dc826a2d2 城市排名
  // 排名表格 t-table-3171.b5e999432
  const rankTableDom = document.getElementById('t-table-3171.b5e999432');
  let rankTableElTableDom;
  // 动态设置表格的高度
  if (rankTableDom) {
    rankTableDom.style.height = tabSelect === 'day' ? '258px' : '186px';
    rankTableElTableDom = rankTableDom.querySelector('.el-table')
  }
  if (rankTableElTableDom) {
    rankTableElTableDom.style.height = tabSelect === 'day' ? '258px' : '186px';
  }
}, {
  deep: true,
  immediate: true,
})
};
const watchValues = () => {
watch([
  () => global.REGION_CODE,
  () => state.airQualityState,
], async (curVal, oldVal) => {
  // 当前行政区等级code
  const levelText = getRegionLevel(curVal[0]);
  // 上一次选中行政区等级code
  const prevLevelText = oldVal[0] ? getRegionLevel(oldVal[0]) : '';
  /**
   * 当选中区县，下面表格变成全省排名和全市排名，调用区县排名接口，
   * 全省排名传的行政区编码是省的编码，全市排名传的行政区编码是选中区县的市的编码
   */
  if (levelText === 'county') {
    state.tabData = [
      {
        label: '全省排名',
        name: 'province'
      },
      {
        label: '全市排名',
        name: 'city'
      }
    ];
    // 为了保留上一次选中
    state.tabSelect = levelText === prevLevelText ? state.tabSelect : 'province';
    state.paramsRegionCode = state.tabSelect === 'province'
      ? curVal[0].substring(0, 2).padEnd(12, '0')
      : curVal[0].substring(0, 4).padEnd(12, '0');
    state.tableColumns = state.tabSelect === 'province' ? state.provinceRankTableColumns : state.cityRankTableColumns;
	//城市排名
	 state.pointType=state.tabSelect === 'province' ? 12 : 13;
    if (state.airQualityState.tabSelect === 'day') {
      getProvinceCityDayRankData();
    } else {
      getProvinceCityYearMonthRankData();
    }
  } else if (levelText === 'province' || levelText === 'city') {
    // 选中省、市，行政区编码传省的编码
    state.paramsRegionCode = curVal[0].substring(0, 2).padEnd(12, '0');
    state.tabData = [
      {
        'label': '337城市排名',
        'name': '337City'
      },
      {
        'label': '168城市排名',
        'name': '168City'
      }
    ];
    // 为了保留上一次选中
    state.tabSelect = (
      levelText === prevLevelText || 
      (levelText === 'province' && prevLevelText === 'city') || 
      (levelText === 'city' && prevLevelText === 'province')
      ) ? state.tabSelect : '337City';
    state.tableColumns = state.tabSelect === '337City' ? state.threeCityTableColumns : state.oneCityTableColumns;
    // 第一次监听到的新值和旧值一致；选中市的时候不请求接口
    if (
      state.airQualityState.monitorTime
      && (
        prevLevelText === 'county'
        || JSON.stringify(curVal) === JSON.stringify(oldVal)
        || curVal[1].tabSelect !== oldVal[1].tabSelect)) {
      if (state.airQualityState.tabSelect === 'day') {
        await get337And168DayRankData();
      } else {
        await get337And168YearMonthRankData();
      }
      changeTableData();
    }
    setTableRowSelected();
  }
},
  {
    deep: true,
  });
};
const changeTableData = () => {
state.tableData = [];
switch (state.tabSelect) {
  case '337City':
    state.tableData = state.resListData.filter((item) => item.AREA_NAME === '337城市');
    setTableRowSelected();
    break;
  case '168City':
    state.tableData = state.resListData.filter((item) => item.AREA_NAME === '168城市');
    setTableRowSelected();
    break;
  case 'province':
  case 'city':
    state.paramsRegionCode = state.tabSelect === 'province'
      ? global.REGION_CODE.substring(0, 2).padEnd(12, '0')
      : global.REGION_CODE.substring(0, 4).padEnd(12, '0');
     state.pointType=state.tabSelect === 'province' ? 12 : 13;
    if (state.airQualityState.tabSelect === 'day') {
      getProvinceCityDayRankData();
    } else {
      getProvinceCityYearMonthRankData();
    }
    break;
  default:
    break;
}
};
const setTableRowSelected = () => {
// 当前行政区等级code
const levelText = getRegionLevel(global.REGION_CODE);
// 先恢复成未选中状态
state.tableData.forEach((item) => {
  item.selected = '0';
});
if (levelText === 'city') {
  // 行政区选中城市，高亮选中城市那一列
  const sameRow = state.tableData.find((item) => item.CITY_CODE === global.REGION_CODE);
  if (sameRow) {
    sameRow.selected = '1';
  }
}
};
const replacePollutionCharacter = (pollutionString) => {
/**
  * @description: 替换一段字符串中所有污染物为正确格式
  * @param pollutionString 要替换的字符串
  * @return 替换完的字符串
  */
if (!pollutionString) return '';
// 从公共方法里拿到下标特殊字符（后续需要的再补充）
const zreoSub = convertCharacter('下标')[0].split(' ')[0] || '0';
const oneSub = convertCharacter('下标')[0].split(' ')[1] || '1';
const twoSub = convertCharacter('下标')[0].split(' ')[2] || '2';
const threeSub = convertCharacter('下标')[0].split(' ')[3] || '3';
const fiveSub = convertCharacter('下标')[0].split(' ')[5] || '5';
// 污染物对应关系（缺少的继续补充）
const POLLUTION_CHARTS_ALL = [
  {
    name: ['O3', 'o3'],
    html: 'O' + threeSub,
  },
  {
    name: ['PM10', 'pm10'],
    html: 'PM' + oneSub + zreoSub,
  },
  {
    name: ['PM25', 'PM2_5', 'PM2.5', 'pm25', 'pm2_5', 'pm25'],
    html: 'PM' + twoSub + '.' + fiveSub,
  },
  {
    name: ['SO2', 'so2'],
    html: 'SO' + twoSub,
  },
  {
    name: ['CO2', 'co2'],
    html: 'CO' + twoSub,
  },
  {
    name: ['CODMN', 'codmn'],
    html: 'CODmn',
  },
  {
    name: ['VOCS', 'vocs'],
    html: 'VOCs',
  },
  {
    name: ['NO', 'no'],
    html: 'NO',
  },
  {
    name: ['NO2', 'no2'],
    html: 'NO' + twoSub,
  },
  {
    name: ['NH3', 'nh3'],
    html: 'NH' + threeSub,
  },
  {
    name: ['NOX', 'nox'],
    html: 'NOx',
  },
  {
    name: ['PH', 'ph'],
    html: 'pH',
  },
];
let curString = pollutionString;
POLLUTION_CHARTS_ALL.forEach((item) => {
  item.name.forEach((name) => {
    curString = curString.replace(name, item.html);
  });
});
return curString;
};
const ontabClick1741765236667 = (data) => {
// 设置变量值
state.tabSelect = data.name;
// 执行自定义方法
setTableColumns();
// 执行自定义方法
changeTableData();
};
// 接口函数
const get337And168DayRankData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITOR_TIME":state.airQualityState.monitorTime,"PARENT_REGION_CODE":state.paramsRegionCode,"interfaceId":"a5ae69b372c61a35c8df8bf2b2a1ace3"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
if (data) {
  state.resListData = (data || []).map((item) => ({
    ...item,
    index: item.RN,
    name: handleNoVal(item.POINT_NAME),
    aqi: handleNoVal(item.AQI),
    rank: handleNoVal(item.AQI_RANK),
    primPollutant: replacePollutionCharacter(handleNoVal(item.PRIMPOLLUTE)),
    // 用于状态列配置（选中效果）1-选中，0-未选中
    selected: '0',
  }));
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getProvinceCityDayRankData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"POINT_TYPE":state.pointType,"MONITOR_TIME":state.airQualityState.monitorTime,"REGION_CODE":state.paramsRegionCode,"interfaceId":"f969fb5a4944e37583892bd0014e39e2"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
if (data) {
  state.tableData = (data || []).map((item,index) => ({
    ...item,
    index: index + 1,
    name: handleNoVal(item.POINT_NAME),
    aqi: handleNoVal(item.AQI),
    primPollutant: replacePollutionCharacter(handleNoVal(item.PRIMPOLLUTE)),
  }));
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const get337And168YearMonthRankData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"DATE_TYPE":state.airQualityState.dateType,"MONITOR_TIME":state.airQualityState.yearMonth,"REGION_CODE":state.paramsRegionCode,"interfaceId":"138434afc17ee39e0d906e7c7a17204d"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
if (data) {
  state.resListData = (data || []).map((item) => ({
    ...item,
    index: item.RN,
    name: handleNoVal(item.POINT_NAME),
    aqi: handleNoVal(item.AQI),
    rank: handleNoVal(item.AQI_RANK),
    primPollutant: replacePollutionCharacter(handleNoVal(item.PRIMPOLLUTE)),
    // 用于状态列配置（选中效果）1-选中，0-未选中
    selected: '0',
  }));
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getProvinceCityYearMonthRankData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"POINT_TYPE":state.pointType,"DATE_TYPE":state.airQualityState.dateType,"MONITOR_TIME":state.airQualityState.yearMonth,"REGION_CODE":state.paramsRegionCode,"interfaceId":"8fe27443a5d1c6cea37198696edd98de"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
if (data) {
  state.tableData = (data || []).map((item,index) => ({
    ...item,
    index: index + 1,
    name: handleNoVal(item.POINT_NAME),
    aqi: handleNoVal(item.AQI),
    primPollutant: replacePollutionCharacter(handleNoVal(item.PRIMPOLLUTE)),
  }));
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-cityRank', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-cityRank', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setTableColumns();
// 执行自定义方法
getProvider();
// 执行自定义方法
watchValues();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTabsx0x1ComputedData = computed(() => _.merge({}, componentState.tTabsx0x1.default, componentState.tTabsx0x1?.[state.screenSize]));

 const tTablex0x2ComputedData = computed(() => _.merge({}, componentState.tTablex0x2.default, componentState.tTablex0x2?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tTabsx0x1ComputedData,
tTablex0x2ComputedData,
ontabClick1741765236667,
};
},
};