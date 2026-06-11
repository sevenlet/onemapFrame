window.airStationListComponent = {
template: 
`<div id="t-l-c-airStationList" class="t-l-c-airStationList" >` +
`<t-rect id="t-rect-9e7a.53a7f26fc" class="airStationList-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-table id="t-table-b998.79da5f0ed" class="airStationList-t-table-0-3"  :height="tTablex0x3ComputedData.height" :stripe="tTablex0x3ComputedData.stripe" :border="tTablex0x3ComputedData.border" :auto-scroll="replaceCssVariables(filterData(state.scrollType, componentPropBindingMap?.['t-table-b998.79da5f0ed']['autoScroll'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :speed="tTablex0x3ComputedData.speed" :columns="tTablex0x3ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-b998.79da5f0ed']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x3ComputedData.defaultSort" :c-style="tTablex0x3ComputedData.cStyle" @cell-click="oncellClick1765876689584">` +
`</t-table>` +
`<t-row id="t-row-ae52.077636205" class="airStationList-t-row-0-4"  :c-style="tRowx0x4ComputedData.cStyle" :gutter="tRowx0x4ComputedData.gutter" :justify="tRowx0x4ComputedData.justify" :align="tRowx0x4ComputedData.align">` +
`<t-col id="t-col-6f0c.c002629a2" class="airStationList-t-col-0-4-0"  :span="tColx0x4x0ComputedData.span" :offset="tColx0x4x0ComputedData.offset" :push="tColx0x4x0ComputedData.push" :pull="tColx0x4x0ComputedData.pull" :c-style="tColx0x4x0ComputedData.cStyle">` +
`<t-text-common id="t-text-common-2e3a.ee9e1466d" class="airStationList-t-text-common-0-4-0-0"  :label="tTextCommonx0x4x0x0ComputedData.label" :editable="tTextCommonx0x4x0x0ComputedData.editable" :c-style="tTextCommonx0x4x0x0ComputedData.cStyle">` +
`</t-text-common>` +
`</t-col>` +
`<t-col id="t-col-0b61.86e4a1d04" class="airStationList-t-col-0-4-1"  :span="tColx0x4x1ComputedData.span" :offset="tColx0x4x1ComputedData.offset" :push="tColx0x4x1ComputedData.push" :pull="tColx0x4x1ComputedData.pull" :c-style="tColx0x4x1ComputedData.cStyle">` +
`<t-input id="t-input-f0e5.c05610435" class="airStationList-t-input-0-4-1-0"  :type="tInputx0x4x1x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.pointName, componentPropBindingMap?.['t-input-f0e5.c05610435']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x4x1x0ComputedData.maxlength" :minlength="tInputx0x4x1x0ComputedData.minlength" :show-word-limit="tInputx0x4x1x0ComputedData.showWordLimit" :placeholder="tInputx0x4x1x0ComputedData.placeholder" :clearable="tInputx0x4x1x0ComputedData.clearable" :show-password="tInputx0x4x1x0ComputedData.showPassword" :disabled="tInputx0x4x1x0ComputedData.disabled" :prefix-icon="tInputx0x4x1x0ComputedData.prefix-icon" :suffix-icon="tInputx0x4x1x0ComputedData.suffix-icon" :rows="tInputx0x4x1x0ComputedData.rows" :autosize="tInputx0x4x1x0ComputedData.autosize" :name="tInputx0x4x1x0ComputedData.name" :readonly="tInputx0x4x1x0ComputedData.readonly" :step="tInputx0x4x1x0ComputedData.step" :autofocus="tInputx0x4x1x0ComputedData.autofocus" :form="tInputx0x4x1x0ComputedData.form" :label="tInputx0x4x1x0ComputedData.label" :tabindex="tInputx0x4x1x0ComputedData.tabindex" :validate-event="tInputx0x4x1x0ComputedData.validateEvent" :c-style="tInputx0x4x1x0ComputedData.cStyle" @change="onchange1763639146616">` +
`</t-input>` +
`<t-button id="t-button-1308.d00125424" class="airStationList-t-button-0-4-1-1"  :label="tButtonx0x4x1x1ComputedData.label" :round="tButtonx0x4x1x1ComputedData.round" :plain="tButtonx0x4x1x1ComputedData.plain" :disabled="tButtonx0x4x1x1ComputedData.disabled" :type="tButtonx0x4x1x1ComputedData.type" :size="tButtonx0x4x1x1ComputedData.size" :native-type="tButtonx0x4x1x1ComputedData.native-type" :c-style="tButtonx0x4x1x1ComputedData.cStyle" @click="onclick1763637504861">` +
`</t-button>` +
`</t-col>` +
`<t-col id="t-col-adb8.5593aa428" class="airStationList-t-col-0-4-2"  :span="tColx0x4x2ComputedData.span" :offset="tColx0x4x2ComputedData.offset" :push="tColx0x4x2ComputedData.push" :pull="tColx0x4x2ComputedData.pull" :c-style="tColx0x4x2ComputedData.cStyle">` +
`<t-select id="t-select-57c3.b1cff7ea2" class="airStationList-t-select-0-4-2-0"  :active-value="replaceCssVariables(filterData(state.code, componentPropBindingMap?.['t-select-57c3.b1cff7ea2']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.regionData, componentPropBindingMap?.['t-select-57c3.b1cff7ea2']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x4x2x0ComputedData.alias" :multiple="tSelectx0x4x2x0ComputedData.multiple" :placeholder="tSelectx0x4x2x0ComputedData.placeholder" :clearable="tSelectx0x4x2x0ComputedData.clearable" :disabled="tSelectx0x4x2x0ComputedData.disabled" :name="tSelectx0x4x2x0ComputedData.name" :autocomplete="tSelectx0x4x2x0ComputedData.autocomplete" :filterable="tSelectx0x4x2x0ComputedData.filterable" :no-match-text="tSelectx0x4x2x0ComputedData.no-match-text" :no-data-text="tSelectx0x4x2x0ComputedData.no-data-text" :c-style="tSelectx0x4x2x0ComputedData.cStyle" :scrollbar-thumb-color="tSelectx0x4x2x0ComputedData.scrollbarThumbColor" :scrollbar-track-color="tSelectx0x4x2x0ComputedData.scrollbarTrackColor" :scrollbar-width="tSelectx0x4x2x0ComputedData.scrollbarWidth" @change="onchange1763638254018">` +
`</t-select>` +
`</t-col>` +
`<t-col id="t-col-42ae.8fc8ee1ff" class="airStationList-t-col-0-4-3"  :span="tColx0x4x3ComputedData.span" :offset="tColx0x4x3ComputedData.offset" :push="tColx0x4x3ComputedData.push" :pull="tColx0x4x3ComputedData.pull" :c-style="tColx0x4x3ComputedData.cStyle">` +
`<t-tabs-base id="t-tabs-base-e23a.31925c212" class="airStationList-t-tabs-base-0-4-3-0"  :data="tTabsBasex0x4x3x0ComputedData.data" :space="tTabsBasex0x4x3x0ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.pointType, componentPropBindingMap?.['t-tabs-base-e23a.31925c212']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x4x3x0ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x4x3x0ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x4x3x0ComputedData.alias" :c-style="tTabsBasex0x4x3x0ComputedData.cStyle" @tab-click="ontabClick1763637132501">` +
`</t-tabs-base>` +
`</t-col>` +
`<t-col id="t-col-b847.62aea39ed" class="airStationList-t-col-0-4-4"  :span="tColx0x4x4ComputedData.span" :offset="tColx0x4x4ComputedData.offset" :push="tColx0x4x4ComputedData.push" :pull="tColx0x4x4ComputedData.pull" :c-style="tColx0x4x4ComputedData.cStyle">` +
`<t-text-common id="t-text-common-83a3.0f6c40a01" class="airStationList-t-text-common-0-4-4-0"  :label="tTextCommonx0x4x4x0ComputedData.label" :editable="tTextCommonx0x4x4x0ComputedData.editable" :c-style="tTextCommonx0x4x4x0ComputedData.cStyle">` +
`</t-text-common>` +
`<t-switch id="t-switch-0982.898d5567e" class="airStationList-t-switch-0-4-4-1"  :value="replaceCssVariables(filterData(state.layerSwitchStatus, componentPropBindingMap?.['t-switch-0982.898d5567e']['value'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tSwitchx0x4x4x1ComputedData.cStyle" @change="onchange1763637276915">` +
`</t-switch>` +
`<t-rect v-if="state.isScaled === true" id="t-rect-cb7b.99051141b" class="airStationList-t-rect-0-4-4-2"  :tip="tRectx0x4x4x2ComputedData.tip" :label="tRectx0x4x4x2ComputedData.label" :active="tRectx0x4x4x2ComputedData.active" :c-style="tRectx0x4x4x2ComputedData.cStyle" @click="onclick1774856786137">` +
`</t-rect>` +
`<t-rect v-if="state.isScaled === false" id="t-rect-8221.260924591" class="airStationList-t-rect-0-4-4-3"  :tip="tRectx0x4x4x3ComputedData.tip" :label="tRectx0x4x4x3ComputedData.label" :active="replaceCssVariables(filterData(state.isScaled, componentPropBindingMap?.['t-rect-8221.260924591']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tRectx0x4x4x3ComputedData.cStyle" @click="onclick1774856777786">` +
`</t-rect>` +
`</t-col>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-9e7a.53a7f26fc":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f301.9ed18f50a":{"attributeName":"tRectx0x1"},"t-rect-24f7.d9c8ed99":{"attributeName":"tRectx0x2"},"t-table-b998.79da5f0ed":{"attributeName":"tTablex0x3","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-row-ae52.077636205":{"attributeName":"tRowx0x4","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-6f0c.c002629a2":{"attributeName":"tColx0x4x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-2e3a.ee9e1466d":{"attributeName":"tTextCommonx0x4x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-0b61.86e4a1d04":{"attributeName":"tColx0x4x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-input-f0e5.c05610435":{"attributeName":"tInputx0x4x1x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]}},"t-button-1308.d00125424":{"attributeName":"tButtonx0x4x1x1","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-col-adb8.5593aa428":{"attributeName":"tColx0x4x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-57c3.b1cff7ea2":{"attributeName":"tSelectx0x4x2x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"scrollbarThumbColor":{"filters":[]},"scrollbarTrackColor":{"filters":[]},"scrollbarWidth":{"filters":[]}},"t-col-42ae.8fc8ee1ff":{"attributeName":"tColx0x4x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-e23a.31925c212":{"attributeName":"tTabsBasex0x4x3x0","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-col-b847.62aea39ed":{"attributeName":"tColx0x4x4","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-83a3.0f6c40a01":{"attributeName":"tTextCommonx0x4x4x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-0982.898d5567e":{"attributeName":"tSwitchx0x4x4x1","value":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-cb7b.99051141b":{"attributeName":"tRectx0x4x4x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-8221.260924591":{"attributeName":"tRectx0x4x4x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   scrollType: "rowScroll",
   isScaled: false,
   code: "",
   regionData: [],
   layerSwitchStatus: false,
   districtCode: "",
   pointType: "0,1,4",
   listData: [{"DATETYPE":"HOUR","REGION_CODE":"350700000000","REGION_NAME":"南平市","DISTRICT_CODE":"350701000000","DISTRICT_NAME":"市辖区","POINT_CODE":"350722100","MONITOR_TIME":"Fri Nov 07 09:00:00 CST 2025","MONITOR_TIME_STR":"2025-11-07 09时","POINT_NAME":"东风水库","POINT_TYPE":"1","LONGITUDE":"118.467969","LATITUDE":"27.943139","POLLUTE_VALUE":"6","POLLUTE_LEVEL":"1","PM25":"4","PM25_IAQI":"6","PM10":"5","PM10_IAQI":"5","SO2":"3","SO2_IAQI":"1","NO2":"7","NO2_IAQI":"4","CO":"0.6","CO_IAQI":"6","O3":"17","O3_IAQI":"6","O3_8":"","O3_8_IAQI":"","AQI":"6","PRIMPOLLUTE":"-","AQILEVEL":"一级","AQILEVELINDEX":"1","AQILEVELSTATE":"优","PM25LEVELINDEX":"1","PM10LEVELINDEX":"1","SO2LEVELINDEX":"1","NO2LEVELINDEX":"1","O3LEVELINDEX":"1","O3_8LEVELINDEX":"1","COLEVELINDEX":"1","IS_BJ":"none"}],
   regionCode: "",
   controlLevel: "1",
   layerSwitch: "false",
   dataSourceType: "surfaceWater",
   monitorTime: "2025-10-20 19",
   pointName: "",
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
            default: {"width":"100%","height":"100%","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"0px","top":"0px","backgroundImage":"","-webkit-mask-image":"","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-21/bb51ca06e0cc4048b7ee6aac2bb1517a.png)","fillType":"image","backgroundRepeat":"no-repeat"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"0px","top":"0px","backgroundImage":"","-webkit-mask-image":"","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-21/bb51ca06e0cc4048b7ee6aac2bb1517a.png)","fillType":"image","backgroundRepeat":"no-repeat"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTablex0x3: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 60px)","backgroundColor":"","position":"unset","left":"0px","top":"60px","animationName":"","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","overflow":"visible"},
            
            },
 default: { 
 
height:"100%",
stripe:true,
border:false,
autoScroll:"",
speed:"5",
columns:[{"label":"定位","type":"state","key":"","stateKey":"canPosition","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"width":"40px","style":{"imageStyle":{"backgroundImage":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2023-01-05/95d04d0c780c4e8186c44fb450ba8fe5.png","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2023-01-05/95d04d0c780c4e8186c44fb450ba8fe5.png","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2023-01-05/95d04d0c780c4e8186c44fb450ba8fe5.png"},"cellStyle":{}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2023-01-05/95d04d0c780c4e8186c44fb450ba8fe5.png","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","filter":"grayscale(1)","backgroundImage":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"站点","key":"POINT_NAME","align":"left","operationList":[],"stateList":[],"style":{"fontStyle":{"display":"block","color":"rgba(255, 255, 255, 1)","fontSize":"var(--t-font-size-18)","padding":"0 0 0 16px","fontWeight":"400"}},"width":"100px","minWidth":"100PX","headerAlign":"center","showOverflowTooltip":true},{"label":"行政区","key":"REGION_NAME","align":"center","operationList":[],"stateList":[],"width":"60px"},{"label":"AQI","key":"AQILEVELSTATE","stateKey":"AQILEVELSTATE","align":"center","type":"state","operationList":[],"stateList":[{"name":"优","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #00E400 0%, #00E400 100%)"}},{"name":"良","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #F9D000 0%, #F9D000 100%)"}},{"name":"轻度污染","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"80PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF7E00 0%, #FF7E00 100%)"}},{"name":"中度污染","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"80PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF0000 0%, #FF0000 100%)"}},{"name":"重度污染","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"80PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #C500F4 0%, #C500F4 100%)"}},{"name":"严重污染","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"80PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #8C0024 0%, #8C0024 100%)"}},{"name":"-","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #AAAAAA 0%, #AAAAAA 100%)"}}],"style":{"cellStyle":{"background":""},"fontStyle":{"fontWeight":"bolder","fontSize":"16PX","color":null,"padding":"","borderRadius":"4PX"}},"width":"100px","showOverflowTooltip":false},{"label":"PM₂.₅（ug/m³）","key":"PM25","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"var(--t-font-size-18)","fontWeight":"400"}}},{"label":"PM₁₀（ug/m³）","key":"PM10","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"var(--t-font-size-18)","fontWeight":"400"}}},{"label":"O₃（ug/m³）","key":"O3","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"var(--t-font-size-18)","fontWeight":"400"}}},{"label":"NO₂（ug/m³）","key":"NO2","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"var(--t-font-size-18)","fontWeight":"400"}}},{"label":"日期","key":"MONITOR_TIME_STR","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"var(--t-font-size-18)","fontWeight":"400"}}}],
data:[{"DATETYPE":"HOUR","REGION_CODE":"350700000000","REGION_NAME":"南平市","DISTRICT_CODE":"350701000000","DISTRICT_NAME":"市辖区","POINT_CODE":"350722100","MONITOR_TIME":"Fri Nov 07 09:00:00 CST 2025","MONITOR_TIME_STR":"2025-11-07 09时","POINT_NAME":"东风水库","POINT_TYPE":"1","LONGITUDE":"118.467969","LATITUDE":"27.943139","POLLUTE_VALUE":"6","POLLUTE_LEVEL":"1","PM25":"4","PM25_IAQI":"6","PM10":"5","PM10_IAQI":"5","SO2":"3","SO2_IAQI":"1","NO2":"7","NO2_IAQI":"4","CO":"0.6","CO_IAQI":"6","O3":"17","O3_IAQI":"6","O3_8":"","O3_8_IAQI":"","AQI":"6","PRIMPOLLUTE":"-","AQILEVEL":"一级","AQILEVELINDEX":"1","AQILEVELSTATE":"优","PM25LEVELINDEX":"1","PM10LEVELINDEX":"1","SO2LEVELINDEX":"1","NO2LEVELINDEX":"1","O3LEVELINDEX":"1","O3_8LEVELINDEX":"1","COLEVELINDEX":"1","IS_BJ":"none"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 60px)","backgroundColor":"","position":"unset","left":"0px","top":"60px","animationName":"","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","overflow":"visible"}},"headerCell":{"default":{"borderBottom":"0px none rgba(20,112,204,0.3)","borderLeft":"0px none rgba(20,112,204,0.3)","borderRight":"0px none rgba(20,112,204,0.3)","borderTop":"0px none rgba(20,112,204,0.3)","color":"#fff","backgroundColor":"rgba(20, 112, 204, 0.3)","fontSize":"var(--t-font-size-18)","lineHeight":"var(--t-font-size-18)","height":"38px","marginTop":"0px","paddingBottom":"0px","paddingTop":"0px","marginBottom":"0px","paddingLeft":"0px"}},"bodyCell":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.1)","borderBottom":"0px none rgba(24,37,64,1)","borderLeft":"0px none rgba(24,37,64,1)","borderRight":"0px none rgba(24,37,64,1)","borderTop":"0px none rgba(24,37,64,1)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingBottom":"0px","paddingTop":"0px","lineHeight":"40px","fontSize":"var(--t-font-size-18)","fontFamily":"微软雅黑","fontWeight":"400"},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(0, 59, 132, 0.3)"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)"}},"rowWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}}}, 
 },
},
tRowx0x4: {
defaultStyle: {
            default: {"width":"100%","height":"30px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"16px","paddingLeft":"60px","paddingRight":"10px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"30px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"16px","paddingLeft":"60px","paddingRight":"10px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x4x0: {
defaultStyle: {
            default: {"width":"100px","height":"30px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"30px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tTextCommonx0x4x0x0: {
defaultStyle: {
            default: {"width":"103px","height":"30px","color":"#ffffff","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"61px","top":"18px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"空气站",
editable:false,
cStyle:{"wrapper":{"default":{"width":"103px","height":"30px","color":"#ffffff","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"61px","top":"18px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tColx0x4x1: {
defaultStyle: {
            default: {"width":"100px","height":"30px","display":"flex","justifyContent":"left","alignItems":"center"},
            
            },
 default: { 
 
span:6,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"30px","display":"flex","justifyContent":"left","alignItems":"center"}}}, 
 },
},
tInputx0x4x1x0: {
defaultStyle: {
            default: {"width":"160px","height":"26px","position":"unset","left":"173px","top":"19px","backgroundColor":"var(--t-select-fill-bg)","fontSize":"var(--t-font-size-18)","color":"#fff","lineHeight":"var(--t-font-size-18)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入站点名称",
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
cStyle:{"wrapper":{"default":{"width":"160px","height":"26px","position":"unset","left":"173px","top":"19px","backgroundColor":"var(--t-select-fill-bg)","fontSize":"var(--t-font-size-18)","color":"#fff","lineHeight":"var(--t-font-size-18)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)"},"focus":{"borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"hover":{"borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"}},"placeholder":{"default":{"fontSize":"var(--t-font-size-18)","lineHeight":"var(--t-font-size-18)","color":"#fff"}}}, 
 },
},
tButtonx0x4x1x1: {
defaultStyle: {
            default: {"width":"49px","height":"26px","background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomRightRadius":"3px","borderBottomLeftRadius":"3px","position":"unset","left":"359px","top":"19px","backgroundColor":"#2C80FF","fontSize":"14px","lineHeight":"14px","marginLeft":"15px"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"49px","height":"26px","background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomRightRadius":"3px","borderBottomLeftRadius":"3px","position":"unset","left":"359px","top":"19px","backgroundColor":"#2C80FF","fontSize":"14px","lineHeight":"14px","marginLeft":"15px"},"hover":{"background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)"},"active":{"background":"rgb(0,52,181)","border":"auto !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)"},"disabled":{"background":"#699EF5","border":"unset !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)"}},"text":{"default":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","lineHeight":"var(--t-font-size-18)","color":"rgba(255, 252, 255, 1)","background":"unset","backgroundClip":"unset","display":"block !important","width":"100%","height":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"active":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 0.9)","background":"unset","backgroundClip":"unset"},"hover":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","lineHeight":"var(--t-font-size-18)","color":"rgba(255, 252, 255, 0.9)","background":"unset","backgroundClip":"unset"},"disabled":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 1)","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tColx0x4x2: {
defaultStyle: {
            default: {"width":"100px","height":"30px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"30px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tSelectx0x4x2x0: {
defaultStyle: {
            default: {"width":"147px","height":"26px","fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","textAlign":"left","color":"var(--business-white)","background":"var(--t-input-background-color)","fillType":"color","backgroundClip":"unset","position":"unset","lineHeight":"12px","border":"auto !important","borderTop":"1px solid var(--business-select-border)","borderLeft":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"var(--t-select-fill-bg)","left":"436px","top":"19px"},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"region_name","value":"region_code","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"147px","height":"26px","fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","textAlign":"left","color":"var(--business-white)","background":"var(--t-input-background-color)","fillType":"color","backgroundClip":"unset","position":"unset","lineHeight":"12px","border":"auto !important","borderTop":"1px solid var(--business-select-border)","borderLeft":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"var(--t-select-fill-bg)","left":"436px","top":"19px"},"focus":{"color":"var(--t-white)","backgroundClip":"unset","border":"auto !important","borderTop":"1px Solid var(--t-input-focus-border)","borderLeft":"1px Solid var(--t-input-focus-border)","borderBottom":"1px Solid var(--t-input-focus-border)","borderRight":"1px Solid var(--t-input-focus-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","background":"unset","fontSize":"var(--t-font-size-18)"},"hover":{"border":"auto !important","borderTop":"1px Solid var(--t-input-hover-border)","borderLeft":"1px Solid var(--t-input-hover-border)","borderBottom":"1px Solid var(--t-input-hover-border)","borderRight":"1px Solid var(--t-input-hover-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"disabled":{"color":"var(--t-input-disabled-font-color)","border":"auto !important","borderTop":"1px Solid var(--t-input-disabled-border-color)","borderLeft":"1px Solid var(--t-input-disabled-border-color)","borderBottom":"1px Solid var(--t-input-disabled-border-color)","borderRight":"1px Solid var(--t-input-disabled-border-color)","background":"var(--t-input-disabled-bg-color)"}},"placeholder":{"default":{"fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","color":"var(--business-white)","background":"unset","backgroundClip":"unset","textAlign":"left","lineHeight":"var(--t-font-size-18)"}},"arrow":{"default":{"width":"25px","height":"30px","color":"rgba(255, 255, 255, 1)","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","fontSize":"12px","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundPosition":"0% 0%"}},"dropdownWrapper":{"default":{"minWidth":"100px","height":"100px","overflowY":"auto","overflowX":"hidden","background":"var(--t-select-popper-bg-color)","fillType":"color","border":"auto !important","borderTop":"1px solid var(--business-select-border)","borderLeft":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderTopLeftRadius":"var(--t-select-popper-border-radius)","borderTopRightRadius":"var(--t-select-popper-border-radius)","borderBottomRightRadius":"var(--t-select-popper-border-radius)","borderBottomLeftRadius":"var(--t-select-popper-border-radius)","boxShadow":"0px 0px 5px 0px var(--t-select-popper-box-shadow-color)","backgroundColor":"var(--business-select-drop-bg)","color":"rgba(255, 255, 255, 0.9)","fontSize":"14px","width":"","overflow":"hidden"}},"dropdownItem":{"default":{"marginBottom":"0px","fontSize":"14","color":"rgba(255, 255, 255, 0.9)","background":"rgb(255,255,255)","paddingLeft":"20px","paddingTop":"0px","paddingRight":"20px","paddingBottom":"0px","backgroundColor":"var(--business-select-drop-bg)"},"active":{"color":"var(--business-text-hover)","background":"var(--t-select-dropdown-active-bg-color)","fillType":"color","backgroundColor":"var(--business-select-item-bg)"},"hover":{"backgroundColor":"var(--business-select-item-bg)"}},"dropdownItemText":{"default":{"color":"var(--t-select-dropdown-font-color)","fontFamily":"思源","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","textAlign":"left","background":"transparent","backgroundClip":"unset","lineHeight":"34px"},"active":{"color":"var(--t-select-dropdown-active-font-color)","background":"transparent","backgroundClip":"unset","fontSize":"var(--t-font-size-18)"}},"dropdownArrow":{"default":{"display":"none"}},"tag":{"default":{"fontSize":"12px","display":"inline-flex","align-items":"center","background":"rgba(229, 229, 229, 1)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px"}},"tagText":{"default":{"fontSize":"12px","height":"auto","color":"rgba(0, 0, 0, 1)"}},"tagClose":{"default":{"right":"-3px"}}},
scrollbarThumbColor:"rgb(193,193,193)",
scrollbarTrackColor:"rgb(241,241,241)",
scrollbarWidth:"6px", 
 },
},
tColx0x4x3: {
defaultStyle: {
            default: {"width":"100px","height":"30px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:5,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"30px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tTabsBasex0x4x3x0: {
defaultStyle: {
            default: {"width":"216px","height":"25px","position":"unset","left":"610px","top":"21px","fontSize":"12px","lineHeight":"26px"},
            
            },
 default: { 
 
data:[{"label":"全部","value":"0,1,4"},{"label":"国控","value":"0"},{"label":"省控","value":"1"},{"label":"微站","value":"4"}],
space:5,
selectedTabVal:"0,1,4",
innerShadowColor:"rgba(0,0,0,0)",
activeInnerShadowColor:"rgba(0,0,0,0)",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"216px","height":"25px","position":"unset","left":"610px","top":"21px","fontSize":"12px","lineHeight":"26px"}},"label":{"default":{"display":"block","width":"100%","height":"auto","color":"#fff","fontWeight":"400","fontSize":"var(--t-font-size-18)","lineHeight":"26px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"hover":{"color":"var(--t-tabs-base-hover-text-color)","fontSize":"var(--t-font-size-18)"},"active":{"color":"#fff","fontSize":"var(--t-font-size-18)","lineHeight":"26px"}},"itemWrapper":{"default":{"width":"44%","flex":"unset","height":"26px","padding":"0","margin":"0","borderRadius":"4px","background":"var(--t-tabs-base-bg-color)","color":"#fff","fontWeight":"var(--t-tabs-base-text-weight)","fontSize":"12","lineHeight":"26px","textAlign":"center","cursor":"pointer","fillType":"color","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--business-show-bg60)"},"hover":{"margin":"0 !important","background":"var(--t-tabs-base-hover-bg-color)","fillType":"color","fontSize":"12px","lineHeight":"26px","backgroundColor":"#2C80FF"},"active":{"margin":"0 !important","background":"var(--t-tabs-base-active-bg-color)","fillType":"color","fontSize":"12px","lineHeight":"26px","backgroundColor":"#2C80FF"},"disabled":{"color":"var(--t-tabs-vertical-disabled-text-color)"}},"tabsContainer":{"default":{"display":"flex","height":"100%","justifyContent":"space-between","alignItems":"center","gap":"5px","flexDirection":"row","fontSize":"12px","lineHeight":"26px"},"hover":{"fontSize":"12px","lineHeight":"26px"}}}, 
 },
},
tColx0x4x4: {
defaultStyle: {
            default: {"width":"100px","height":"30px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:6,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"30px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tTextCommonx0x4x4x0: {
defaultStyle: {
            default: {"width":"74px","height":"20px","color":"var(--t-text-rh-color)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--t-font-size-18)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"833px","top":"25px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"图层开关",
editable:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"20px","color":"var(--t-text-rh-color)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--t-font-size-18)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"833px","top":"25px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tSwitchx0x4x4x1: {
defaultStyle: {
            default: {"width":"32px","height":"20px","position":"unset","left":"910px","top":"26px"},
            
            },
 default: { 
 
value:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"20px","position":"unset","left":"910px","top":"26px"}},"core":{"default":{"backgroundColor":"var(--business-show-bg60)","borderLeft":"1px solid #0071E9","borderTop":"1px solid #0071E9","borderRight":"1px solid #0071E9","borderBottom":"1px solid #0071E9"},"active":{"backgroundColor":"#0071E9"}}}, 
 },
},
tRectx0x4x4x2: {
defaultStyle: {
            default: {"width":"28px","height":"28px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-10-20/20b88cb65b1140ccaff330681abf2b02.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-55px","left":"878px","position":"unset","marginLeft":"20px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"28px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-10-20/20b88cb65b1140ccaff330681abf2b02.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-55px","left":"878px","position":"unset","marginLeft":"20px","animationName":"","cursor":"pointer"},"active":{"background":"var(--t-brand8)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px"},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x4x4x3: {
defaultStyle: {
            default: {"width":"28px","height":"28px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-10-20/7b779f4cf1274a7d884759a57e40571c.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-45px","left":"888px","position":"unset","marginLeft":"20px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"28px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-10-20/7b779f4cf1274a7d884759a57e40571c.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-45px","left":"888px","position":"unset","marginLeft":"20px","animationName":"","cursor":"pointer"},"active":{"background":"var(--t-brand8)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px"},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const handleSelect = (value) => {
if (value === '350700000000') {
  state.regionCode = value;
  state.districtCode = '';
} else {
  state.regionCode = '';
  state.districtCode = value;
}
state.code = value;
changeData();
};
const handleTableClick = (column,row) => {
console.log('处理表格点击事件', column, row);

if (column.label === '定位') {
  if (state.layerSwitch) {
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: "goToPoint", // 消息名称
      data: {
        layerId: '空气站',
        pointValue: row.POINT_CODE,
      }
    });
  } else {
    state.layerSwitch = true;
    // 给地图发消息
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: "setAirStationStatus", // 消息名称
      data: {
        DISTRICT_CODE: state.districtCode,
        POINT_TYPE: state.pointType,
        MONITOR_TIME: state.monitorTime,
        POINT_NAME: state.pointName,
        REGION_CODE: state.regionCode,
        visible: state.layerSwitch,
        highlightPointValue: row.POINT_CODE
      }
    });
  }
  state.layerSwitchStatus = true;
}
};
const updateLayerSwitchStatus = () => {
if (!state.layerSwitch) {
  state.layerSwitchStatus = state.layerSwitch;
}
};
const watchType = () => {

watch(
  // 1. 监听的数据源（函数返回要监听的值）
  [
    () => global.dashboardGlobalVariables.selectedIndicatorIndex, global.REGION_CODE,
    () => state.monitorTime
  ],
  // 2. 监听触发的回调函数
  (newVal, oldVal) => {

    console.log('activeTopic 发生变化:', newVal, oldVal, global.isSelectedBg, global.currentIndex, global.dashboardGlobalVariables.selectedIndicatorIndex,);
    if (global.dashboardGlobalVariables.selectedIndicatorIndex === 4 || global.dashboardGlobalVariables.selectedIndicatorIndex === 5 || global.dashboardGlobalVariables.selectedIndicatorIndex === 6 || global.dashboardGlobalVariables.selectedIndicatorIndex === 7) {
      state.pointType = '0';
      state.layerSwitchStatus = true;
      global.selectMapCode = '350702000000';
      rootData.rootSocket.emit('message', {
        room: global.socketRoom, // 房间号
        type: 'setAirStationStatus', // 消息名称
        data: {
          highlightPointValue: '',
          DISTRICT_CODE: state.districtCode,
          POINT_TYPE: state.pointType,
          CODE_WQDATASOURCETYPE: state.dataSourceType,
          MONITOR_TIME: state.monitorTime,
          POINT_NAME: state.pointName,
          REGION_CODE: state.regionCode,
          visible: state.layerSwitchStatus,
        },
      });
      rootData.rootSocket.emit('message', {
        room: global.socketRoom, // 房间号
        type: 'changeCommonParams', // 消息名称
        data: {
          selected: 'REGION_CODE',
          REGION_CODE: global.selectMapCode,
        },
      });

    }
    initData();
  },
  // 3. 配置项：深度监听 + 立即执行
  {
    deep: true, // 开启深度监听（针对对象/数组类型的 activeTopic）
    immediate: true // 首次加载时立即执行回调
  }
);

};
const restCode = () => {
global.selectMapCode = global.DEFAULT_REGION_CODE;
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeCommonParams', // 消息名称
  data: {
    selected: 'REGION_CODE',
    REGION_CODE: global.selectMapCode
  },
});
};
const initData = () => {

const init = async () => {
  await apiRegistry.getSelectOptions.request();
  await apiRegistry.getDefaultTime.request();
  await apiRegistry.getData.request();
}
init();
};
const watchCode = () => {

watch(
  // 1. 监听的数据源（函数返回要监听的值）
  () => global.REGION_CODE,
  // 2. 监听触发的回调函数
  () => {
    initData();
  },
  // 3. 配置项：深度监听 + 立即执行
  {
    deep: true, // 开启深度监听（针对对象/数组类型的 activeTopic）
    immediate: true // 首次加载时立即执行回调
  }
);

};
const changeData = () => {

const init = async () => {
  await apiRegistry.getDefaultTime.request();
  await apiRegistry.getData.request();
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: 'setAirStationStatus', // 消息名称
    data: {
      highlightPointValue: '',
      DISTRICT_CODE: state.districtCode,
      POINT_TYPE: state.pointType,
      CODE_WQDATASOURCETYPE: state.dataSourceType,
      MONITOR_TIME: state.monitorTime,
      POINT_NAME: state.pointName,
      REGION_CODE: state.regionCode,
      visible: state.layerSwitchStatus,
    },
  });
}
init();
};
const handleScale = () => {
const dom = document.getElementById('t-component-43a2.18a2cfe78');
const bgDom = document.getElementById('t-rect-9e7a.53a7f26fc');
state.isScaled = !state.isScaled
if (dom) {
  // 放大
  if (state.isScaled) {
    dom.style.width = '1600px';
    dom.style.height = '900px';
    dom.style.left = '170px';
    dom.style.top = '142px';
    dom.style.zIndex = '2'
    if(bgDom){
      bgDom.style.background = `url('/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-24/0d5ff3daa2294874907cbe7a6f5b7549.png')`
    }
    dom.style.setProperty('--t-font-size-18', '18px')
  } else {
    dom.style.width = '980px';
    dom.style.height = '186px';
    dom.style.left = '470px';
    dom.style.top = '799px';
    if(bgDom){
      bgDom.style.background = `url('/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-21/bb51ca06e0cc4048b7ee6aac2bb1517a.png')`
    }
    dom.style.setProperty('--t-font-size-18', '14px')
  }
}
// 处理表格滚动
handleTableScroll();
};
const handleTableScroll = () => {
// 放大状态
if (state.isScaled) {
  state.scrollType = 'null'
  if (state.listData.length > 20) {
    state.scrollType = 'rowScroll'
  }
} else {
  // 缩小状态
  state.scrollType = 'rowScroll'
  if (state.listData.length <= 2) {
    state.scrollType = 'null'
  }
}
};
const oncellClick1765876689584 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(column,row);
};
const onchange1763639146616 = (value) => {
// 设置变量值
state.pointName = value;
};
const onclick1763637504861 = () => {
// 事件交互-请求调用接口
apiRegistry.getData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setAirStationStatus", // 消息名称
data: {"DISTRICT_CODE":state.districtCode,"POINT_TYPE":state.pointType,"MONITOR_TIME":state.monitorTime,"POINT_NAME":state.pointName,"REGION_CODE":"","visible":state.layerSwitch}, // 发送的数据
});
};
const onchange1763638254018 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
handleSelect(value);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setAirStationStatus", // 消息名称
data: {"DISTRICT_CODE":state.districtCode,"POINT_TYPE":state.pointType,"MONITOR_TIME":state.monitorTime,"POINT_NAME":state.pointName,"REGION_CODE":state.regionCode,"visible":state.layerSwitch}, // 发送的数据
});
};
const ontabClick1763637132501 = (data) => {
// 设置变量值
state.pointType = data.value;
// 执行自定义方法
changeData();
};
const onchange1763637276915 = (value) => {
// 设置变量值
state.layerSwitch = value;
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setAirStationStatus", // 消息名称
data: {"highlightPointValue":"","DISTRICT_CODE":state.districtCode,"POINT_TYPE":state.pointType,"MONITOR_TIME":state.monitorTime,"POINT_NAME":state.pointName,"REGION_CODE":state.regionCode,"visible":state.layerSwitch}, // 发送的数据
});
// 执行自定义方法
updateLayerSwitchStatus();
};
const onclick1774856786137 = () => {
// 执行自定义方法
handleScale();
};
const onclick1774856777786 = () => {
// 执行自定义方法
handleScale();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getDefaultTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"DISTRICT_CODE":"state.districtCode","REGION_CODE":"state.regionCode","POINT_TYPE":"state.pointType","TIME_TYPE":"hour","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"DISTRICT_CODE":state.districtCode,"REGION_CODE":state.regionCode,"POINT_TYPE":state.pointType,"TIME_TYPE":"hour","interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"DISTRICT_CODE":state.districtCode,"REGION_CODE":state.regionCode,"POINT_TYPE":state.pointType,"TIME_TYPE":"hour","interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDefaultTime'] = res.data;
                
     state.monitorTime = res?.data?.data?.MONITORTIME || '';

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"DISTRICT_CODE":"state.districtCode","POINT_TYPE":"state.pointType","MONITOR_TIME":"state.monitorTime","POINT_NAME":"state.pointName","REGION_CODE":"state.regionCode","interfaceId":"50feb08cc20df8f684a84e0119cf26c6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"DISTRICT_CODE":state.districtCode,"POINT_TYPE":state.pointType,"MONITOR_TIME":state.monitorTime,"POINT_NAME":state.pointName,"REGION_CODE":state.regionCode,"interfaceId":"50feb08cc20df8f684a84e0119cf26c6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"DISTRICT_CODE":state.districtCode,"POINT_TYPE":state.pointType,"MONITOR_TIME":state.monitorTime,"POINT_NAME":state.pointName,"REGION_CODE":state.regionCode,"interfaceId":"50feb08cc20df8f684a84e0119cf26c6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     state.listData = [];
if (res.data?.data?.length) {
  state.listData = res.data.data;
  state.listData = res.data.data.map((item) => {
    const temp = {
      canPosition: item.LONGITUDE && item.LATITUDE ? 'true' : 'false', // 是否能定位
    };
    Object.keys(item).forEach((key) => {
      temp[key] = item[key] || '--'
      if (Number(item[key]) < 0) {
        temp[key] = '--'
      }
    })
    return temp;
  });
  console.log(state.listData, 7778)
} else {
  state.listData = [];
}
// 处理表格滚动
handleTableScroll();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getSelectOptions: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"IS_POINT":"1","PARENT_REGION_CODE":"global.REGION_CODE","IS_SELF":"1","interfaceId":"dbc171c05c6754e9bc26ad3678279d8d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"IS_POINT":"1","PARENT_REGION_CODE":global.REGION_CODE,"IS_SELF":"1","interfaceId":"dbc171c05c6754e9bc26ad3678279d8d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"IS_POINT":"1","PARENT_REGION_CODE":global.REGION_CODE,"IS_SELF":"1","interfaceId":"dbc171c05c6754e9bc26ad3678279d8d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getSelectOptions'] = res.data;
                
     state.regionData = [];
  console.log(res,'77777777777777777777777');
if (res.data.data.length) {
  state.regionData = res.data.data;
  state.regionCode = res.data.data[0].region_code;
  state.code = res.data.data[0].region_code;

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
                            setPageScale('t-l-c-airStationList', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onUnmounted(() => {
// 页面离开时的操作
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setAirStationStatus", // 消息名称
data: {"visible":false}, // 发送的数据
});
// 执行自定义方法
restCode();
});
// 执行自定义方法
watchType();
onMounted(() => {
setPageScale('t-l-c-airStationList', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTablex0x3ComputedData = computed(() => _.merge({}, componentState.tTablex0x3.default, componentState.tTablex0x3?.[state.screenSize]));

 const tRowx0x4ComputedData = computed(() => _.merge({}, componentState.tRowx0x4.default, componentState.tRowx0x4?.[state.screenSize]));

 const tColx0x4x0ComputedData = computed(() => _.merge({}, componentState.tColx0x4x0.default, componentState.tColx0x4x0?.[state.screenSize]));

 const tTextCommonx0x4x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4x0x0.default, componentState.tTextCommonx0x4x0x0?.[state.screenSize]));

 const tColx0x4x1ComputedData = computed(() => _.merge({}, componentState.tColx0x4x1.default, componentState.tColx0x4x1?.[state.screenSize]));

 const tInputx0x4x1x0ComputedData = computed(() => _.merge({}, componentState.tInputx0x4x1x0.default, componentState.tInputx0x4x1x0?.[state.screenSize]));

 const tButtonx0x4x1x1ComputedData = computed(() => _.merge({}, componentState.tButtonx0x4x1x1.default, componentState.tButtonx0x4x1x1?.[state.screenSize]));

 const tColx0x4x2ComputedData = computed(() => _.merge({}, componentState.tColx0x4x2.default, componentState.tColx0x4x2?.[state.screenSize]));

 const tSelectx0x4x2x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x4x2x0.default, componentState.tSelectx0x4x2x0?.[state.screenSize]));

 const tColx0x4x3ComputedData = computed(() => _.merge({}, componentState.tColx0x4x3.default, componentState.tColx0x4x3?.[state.screenSize]));

 const tTabsBasex0x4x3x0ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x4x3x0.default, componentState.tTabsBasex0x4x3x0?.[state.screenSize]));

 const tColx0x4x4ComputedData = computed(() => _.merge({}, componentState.tColx0x4x4.default, componentState.tColx0x4x4?.[state.screenSize]));

 const tTextCommonx0x4x4x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4x4x0.default, componentState.tTextCommonx0x4x4x0?.[state.screenSize]));

 const tSwitchx0x4x4x1ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x4x4x1.default, componentState.tSwitchx0x4x4x1?.[state.screenSize]));

 const tRectx0x4x4x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x4x4x2.default, componentState.tRectx0x4x4x2?.[state.screenSize]));

 const tRectx0x4x4x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x4x4x3.default, componentState.tRectx0x4x4x3?.[state.screenSize]));

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
tTablex0x3ComputedData,
tRowx0x4ComputedData,
tColx0x4x0ComputedData,
tTextCommonx0x4x0x0ComputedData,
tColx0x4x1ComputedData,
tInputx0x4x1x0ComputedData,
tButtonx0x4x1x1ComputedData,
tColx0x4x2ComputedData,
tSelectx0x4x2x0ComputedData,
tColx0x4x3ComputedData,
tTabsBasex0x4x3x0ComputedData,
tColx0x4x4ComputedData,
tTextCommonx0x4x4x0ComputedData,
tSwitchx0x4x4x1ComputedData,
tRectx0x4x4x2ComputedData,
tRectx0x4x4x3ComputedData,
oncellClick1765876689584,
onchange1763639146616,
onclick1763637504861,
onchange1763638254018,
ontabClick1763637132501,
onchange1763637276915,
onclick1774856786137,
onclick1774856777786,
};
},
};