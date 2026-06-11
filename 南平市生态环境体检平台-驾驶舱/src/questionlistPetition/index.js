window.questionlistPetitionComponent = {
template: 
`<div id="t-l-c-questionlistPetition" class="t-l-c-questionlistPetition" >` +
`<t-rect id="t-rect-9e7a.53a7f26fc" class="questionlistPetition-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-table id="t-table-b998.79da5f0ed" class="questionlistPetition-t-table-0-3"  :height="tTablex0x3ComputedData.height" :stripe="tTablex0x3ComputedData.stripe" :border="tTablex0x3ComputedData.border" :auto-scroll="replaceCssVariables(filterData(state.scrollType, componentPropBindingMap?.['t-table-b998.79da5f0ed']['autoScroll'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :speed="tTablex0x3ComputedData.speed" :columns="tTablex0x3ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-b998.79da5f0ed']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x3ComputedData.defaultSort" :c-style="tTablex0x3ComputedData.cStyle">` +
`</t-table>` +
`<t-row id="t-row-4028.4c52e3aa5" class="questionlistPetition-t-row-0-4"  :c-style="tRowx0x4ComputedData.cStyle" :gutter="tRowx0x4ComputedData.gutter" :justify="tRowx0x4ComputedData.justify" :align="tRowx0x4ComputedData.align">` +
`<t-col id="t-col-e138.876052cea" class="questionlistPetition-t-col-0-4-0"  :span="tColx0x4x0ComputedData.span" :offset="tColx0x4x0ComputedData.offset" :push="tColx0x4x0ComputedData.push" :pull="tColx0x4x0ComputedData.pull" :c-style="tColx0x4x0ComputedData.cStyle">` +
`<t-text-common id="t-text-common-2e3a.ee9e1466d" class="questionlistPetition-t-text-common-0-4-0-0"  :label="tTextCommonx0x4x0x0ComputedData.label" :editable="tTextCommonx0x4x0x0ComputedData.editable" :c-style="tTextCommonx0x4x0x0ComputedData.cStyle">` +
`</t-text-common>` +
`</t-col>` +
`<t-col id="t-col-6359.728236dd" class="questionlistPetition-t-col-0-4-1"  :span="tColx0x4x1ComputedData.span" :offset="tColx0x4x1ComputedData.offset" :push="tColx0x4x1ComputedData.push" :pull="tColx0x4x1ComputedData.pull" :c-style="tColx0x4x1ComputedData.cStyle">` +
`<t-input id="t-input-f0e5.c05610435" class="questionlistPetition-t-input-0-4-1-0"  :type="tInputx0x4x1x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.pointName, componentPropBindingMap?.['t-input-f0e5.c05610435']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x4x1x0ComputedData.maxlength" :minlength="tInputx0x4x1x0ComputedData.minlength" :show-word-limit="tInputx0x4x1x0ComputedData.showWordLimit" :placeholder="tInputx0x4x1x0ComputedData.placeholder" :clearable="tInputx0x4x1x0ComputedData.clearable" :show-password="tInputx0x4x1x0ComputedData.showPassword" :disabled="tInputx0x4x1x0ComputedData.disabled" :prefix-icon="tInputx0x4x1x0ComputedData.prefix-icon" :suffix-icon="tInputx0x4x1x0ComputedData.suffix-icon" :rows="tInputx0x4x1x0ComputedData.rows" :autosize="tInputx0x4x1x0ComputedData.autosize" :name="tInputx0x4x1x0ComputedData.name" :readonly="tInputx0x4x1x0ComputedData.readonly" :step="tInputx0x4x1x0ComputedData.step" :autofocus="tInputx0x4x1x0ComputedData.autofocus" :form="tInputx0x4x1x0ComputedData.form" :label="tInputx0x4x1x0ComputedData.label" :tabindex="tInputx0x4x1x0ComputedData.tabindex" :validate-event="tInputx0x4x1x0ComputedData.validateEvent" :c-style="tInputx0x4x1x0ComputedData.cStyle" @change="onchange1763639146616">` +
`</t-input>` +
`<t-button id="t-button-1308.d00125424" class="questionlistPetition-t-button-0-4-1-1"  :label="tButtonx0x4x1x1ComputedData.label" :round="tButtonx0x4x1x1ComputedData.round" :plain="tButtonx0x4x1x1ComputedData.plain" :disabled="tButtonx0x4x1x1ComputedData.disabled" :type="tButtonx0x4x1x1ComputedData.type" :size="tButtonx0x4x1x1ComputedData.size" :native-type="tButtonx0x4x1x1ComputedData.native-type" :c-style="tButtonx0x4x1x1ComputedData.cStyle" @click="onclick1763637504861">` +
`</t-button>` +
`</t-col>` +
`<t-col id="t-col-6af6.61d12faa3" class="questionlistPetition-t-col-0-4-2"  :span="tColx0x4x2ComputedData.span" :offset="tColx0x4x2ComputedData.offset" :push="tColx0x4x2ComputedData.push" :pull="tColx0x4x2ComputedData.pull" :c-style="tColx0x4x2ComputedData.cStyle">` +
`<t-select id="t-select-57c3.b1cff7ea2" class="questionlistPetition-t-select-0-4-2-0"  :active-value="tSelectx0x4x2x0ComputedData.activeValue" :options="replaceCssVariables(getApiData('t-select-57c3.b1cff7ea2', 'options').value, global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x4x2x0ComputedData.alias" :multiple="tSelectx0x4x2x0ComputedData.multiple" :placeholder="tSelectx0x4x2x0ComputedData.placeholder" :clearable="tSelectx0x4x2x0ComputedData.clearable" :disabled="tSelectx0x4x2x0ComputedData.disabled" :name="tSelectx0x4x2x0ComputedData.name" :autocomplete="tSelectx0x4x2x0ComputedData.autocomplete" :filterable="tSelectx0x4x2x0ComputedData.filterable" :no-match-text="tSelectx0x4x2x0ComputedData.no-match-text" :no-data-text="tSelectx0x4x2x0ComputedData.no-data-text" :c-style="tSelectx0x4x2x0ComputedData.cStyle" :scrollbar-thumb-color="tSelectx0x4x2x0ComputedData.scrollbarThumbColor" :scrollbar-track-color="tSelectx0x4x2x0ComputedData.scrollbarTrackColor" :scrollbar-width="tSelectx0x4x2x0ComputedData.scrollbarWidth" @change="onchange1763638254018">` +
`</t-select>` +
`</t-col>` +
`<t-col id="t-col-d322.c7b51ba05" class="questionlistPetition-t-col-0-4-3"  :span="tColx0x4x3ComputedData.span" :offset="tColx0x4x3ComputedData.offset" :push="tColx0x4x3ComputedData.push" :pull="tColx0x4x3ComputedData.pull" :c-style="tColx0x4x3ComputedData.cStyle">` +
`<t-tabs-base v-if="global.dashboardGlobalVariables.supervision.PROBLEM_SOURCE === '2'" id="t-tabs-base-2943.9f56786b4" class="questionlistPetition-t-tabs-base-0-4-3-0"  :data="tTabsBasex0x4x3x0ComputedData.data" :space="tTabsBasex0x4x3x0ComputedData.space" :selected-tab-val="tTabsBasex0x4x3x0ComputedData.selectedTabVal" :inner-shadow-color="tTabsBasex0x4x3x0ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x4x3x0ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x4x3x0ComputedData.alias" :c-style="tTabsBasex0x4x3x0ComputedData.cStyle" @tab-click="ontabClick1764151925685_0_0">` +
`</t-tabs-base>` +
`<t-tabs-base v-if="global.dashboardGlobalVariables.supervision.PROBLEM_SOURCE === '1'" id="t-tabs-base-e23a.31925c212" class="questionlistPetition-t-tabs-base-0-4-3-1"  :data="tTabsBasex0x4x3x1ComputedData.data" :space="tTabsBasex0x4x3x1ComputedData.space" :selected-tab-val="tTabsBasex0x4x3x1ComputedData.selectedTabVal" :inner-shadow-color="tTabsBasex0x4x3x1ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x4x3x1ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x4x3x1ComputedData.alias" :c-style="tTabsBasex0x4x3x1ComputedData.cStyle" @tab-click="ontabClick1763637132501">` +
`</t-tabs-base>` +
`</t-col>` +
`<t-col id="t-col-ef49.8683555c4" class="questionlistPetition-t-col-0-4-4"  :span="tColx0x4x4ComputedData.span" :offset="tColx0x4x4ComputedData.offset" :push="tColx0x4x4ComputedData.push" :pull="tColx0x4x4ComputedData.pull" :c-style="tColx0x4x4ComputedData.cStyle">` +
`<t-rect v-if="state.isScaled === false" id="t-rect-3581.4a1bde482" class="questionlistPetition-t-rect-0-4-4-0"  :tip="tRectx0x4x4x0ComputedData.tip" :label="tRectx0x4x4x0ComputedData.label" :active="tRectx0x4x4x0ComputedData.active" :c-style="tRectx0x4x4x0ComputedData.cStyle" @click="onclick1774946659007_0_0">` +
`</t-rect>` +
`<t-rect v-if="state.isScaled === true" id="t-rect-0d54.0cb395a8c" class="questionlistPetition-t-rect-0-4-4-1"  :tip="tRectx0x4x4x1ComputedData.tip" :label="tRectx0x4x4x1ComputedData.label" :active="tRectx0x4x4x1ComputedData.active" :c-style="tRectx0x4x4x1ComputedData.cStyle" @click="onclick1774946666806_0_0">` +
`</t-rect>` +
`</t-col>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-9e7a.53a7f26fc":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f301.9ed18f50a":{"attributeName":"tRectx0x1"},"t-rect-24f7.d9c8ed99":{"attributeName":"tRectx0x2"},"t-table-b998.79da5f0ed":{"attributeName":"tTablex0x3","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-row-4028.4c52e3aa5":{"attributeName":"tRowx0x4","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-e138.876052cea":{"attributeName":"tColx0x4x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-2e3a.ee9e1466d":{"attributeName":"tTextCommonx0x4x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-6359.728236dd":{"attributeName":"tColx0x4x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-input-f0e5.c05610435":{"attributeName":"tInputx0x4x1x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]}},"t-button-1308.d00125424":{"attributeName":"tButtonx0x4x1x1","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-col-6af6.61d12faa3":{"attributeName":"tColx0x4x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-57c3.b1cff7ea2":{"attributeName":"tSelectx0x4x2x0","activeValue":{"filters":[]},"options":{"filters":[],"name":"getSelectOptions","id":"fe7bac58c6284d938da225fdbcab8fa3","returnDataPath":"data","requestUrl":"global.serviceBaseUrl-global.serviceBasePath","requestParams":{"PARENT_REGION_CODE":"global.REGION_CODE","IS_SELF":"1","interfaceId":"dbc171c05c6754e9bc26ad3678279d8d"}},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"scrollbarThumbColor":{"filters":[]},"scrollbarTrackColor":{"filters":[]},"scrollbarWidth":{"filters":[]}},"t-col-d322.c7b51ba05":{"attributeName":"tColx0x4x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-2943.9f56786b4":{"attributeName":"tTabsBasex0x4x3x0","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-e23a.31925c212":{"attributeName":"tTabsBasex0x4x3x1","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-col-ef49.8683555c4":{"attributeName":"tColx0x4x4","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-3581.4a1bde482":{"attributeName":"tRectx0x4x4x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-0d54.0cb395a8c":{"attributeName":"tRectx0x4x4x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   scrollType: "",
   isScaled: false,
   districtCode: "",
   pointType: "0,1,4",
   listData: [{"ROUND":"1","ID":"3_2","CONTENT":"大气污染","REASON":"","MONITORTIME":"2025-09-01","LONGITUDE":"","LATITUDE":"","STATUS":"3","STATUS_NAME":"未办结","KEY_REGION_CODE":"350701000000","SOURCE":"3","SOURCE_NAME":"日常信访","REGION_CODE":"350701000000","REGION_NAME":"市辖区"}],
   regionCode: "350700000000",
   controlLevel: "1",
   layerSwitch: "false",
   dataSourceType: "surfaceWater",
   monitorTime: "2025-9-1 19",
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
speed:"6",
columns:[{"label":"任务名称","key":"CONTENT","align":"left","operationList":[],"stateList":[],"style":{"fontStyle":{"display":"block","color":"rgba(255, 255, 255, 1)","fontSize":"14PX","padding":"0 0 0 16px","fontWeight":"400"}},"headerAlign":"center","showOverflowTooltip":true},{"label":"任务进度","key":"STATUS_NAME","align":"center","operationList":[],"stateList":[]},{"label":"日期","key":"MONITORTIME","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"14px","fontWeight":"400"}}}],
data:[{"ROUND":"1","ID":"3_2","CONTENT":"大气污染","REASON":"","MONITORTIME":"2025-09-01","LONGITUDE":"","LATITUDE":"","STATUS":"3","STATUS_NAME":"未办结","KEY_REGION_CODE":"350701000000","SOURCE":"3","SOURCE_NAME":"日常信访","REGION_CODE":"350701000000","REGION_NAME":"市辖区"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 60px)","backgroundColor":"","position":"unset","left":"0px","top":"60px","animationName":"","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","overflow":"visible"}},"headerCell":{"default":{"borderBottom":"0px none rgba(20,112,204,0.3)","borderLeft":"0px none rgba(20,112,204,0.3)","borderRight":"0px none rgba(20,112,204,0.3)","borderTop":"0px none rgba(20,112,204,0.3)","color":"#fff","backgroundColor":"rgba(20, 112, 204, 0.3)","fontSize":"14px","lineHeight":"38px","height":"38px","marginTop":"0px","paddingBottom":"0px","paddingTop":"0px","marginBottom":"0px","paddingLeft":"0px"}},"bodyCell":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.1)","borderBottom":"0px none rgba(24,37,64,1)","borderLeft":"0px none rgba(24,37,64,1)","borderRight":"0px none rgba(24,37,64,1)","borderTop":"0px none rgba(24,37,64,1)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingBottom":"0px","paddingTop":"0px","lineHeight":"40px","fontSize":"12px","fontFamily":"微软雅黑","fontWeight":"400"},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(0, 59, 132, 0.3)"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)"}},"rowWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}}}, 
 },
},
tRowx0x4: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"16px","paddingLeft":"60px","paddingRight":"10px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"16px","paddingLeft":"60px","paddingRight":"10px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x4x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tTextCommonx0x4x0x0: {
defaultStyle: {
            default: {"width":"128px","height":"30px","color":"#ffffff","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"36px","top":"18px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"问题清单",
editable:false,
cStyle:{"wrapper":{"default":{"width":"128px","height":"30px","color":"#ffffff","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"36px","top":"18px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tColx0x4x1: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:6,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
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
placeholder:"请输入任务名称",
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
cStyle:{"wrapper":{"default":{"width":"49px","height":"26px","background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomRightRadius":"3px","borderBottomLeftRadius":"3px","position":"unset","left":"359px","top":"19px","backgroundColor":"#2C80FF","fontSize":"14px","lineHeight":"14px","marginLeft":"15px"},"hover":{"background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)"},"active":{"background":"rgb(0,52,181)","border":"auto !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)"},"disabled":{"background":"#699EF5","border":"unset !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)"}},"text":{"default":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","lineHeight":"var(--t-font-size-18)","color":"rgba(255, 252, 255, 1)","background":"unset","backgroundClip":"unset","display":"block !important","width":"100%","height":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"active":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 0.9)","background":"unset","backgroundClip":"unset"},"hover":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","lineHeight":"var(--t-font-size-18)","color":"rgba(255, 252, 255, 0.9)","background":"unset","backgroundClip":"unset"},"disabled":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","lineHeight":"var(--t-font-size-18)","color":"rgba(255, 252, 255, 1)","background":"unset","backgroundClip":"unset"}},"placeholder":{"default":{"fontSize":"var(--t-font-size-18)","lineHeight":"var(--t-font-size-18)"}}}, 
 },
},
tColx0x4x2: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tSelectx0x4x2x0: {
defaultStyle: {
            default: {"width":"147px","height":"26px","fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","textAlign":"left","color":"var(--business-white)","background":"var(--t-input-background-color)","fillType":"color","backgroundClip":"unset","position":"unset","lineHeight":"var(--t-font-size-18)","border":"auto !important","borderTop":"1px solid var(--business-select-border)","borderLeft":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"var(--t-select-fill-bg)","left":"436px","top":"19px"},
            
            },
 default: { 
 
activeValue:"350700000000",
options:[{"key_region_code":"3d0203a9-bcd5-4bfb-8eb6-e4310ddfb1f6","region_code":"350700000000","point_code":"350700","region_name":"南平市","parent_region_code":"350000000000","province_code":"350000000000","city_code":"350700000000","county_code":"350700000000","region_allname":"福建省\\南平市","area_code":"b0009","longitude":"118.144","latitude":"27.3391","tree_path":"福建省$南平市$350000000000$350700000000","version":"201903","short_name":"南平市","sys_create_time":"2019-03-20","sys_update_time":"2019-03-20","start_time":"1900-12-31","end_time":"9999-12-31","line_state":"生效","region_py":"NPS","region_level":"3","town_code":"350700000000","area_all_code":"","xmin":"","ymax":"","xmax":"","ymin":"","sort_num":"8","REGION_TYPE":""},{"key_region_code":"0a3b2aad-ba10-424b-9f05-ef8a3d55ee1d","region_code":"350700010000","point_code":"350700","region_name":"南平武夷新区","parent_region_code":"350700000000","province_code":"350000000000","city_code":"350700000000","county_code":"350700000000","region_allname":"","area_code":"","longitude":"","latitude":"","tree_path":"福建省$南平市$南平武夷新区$350000000000$350700000000$350700010000","version":"201903","short_name":"","sys_create_time":"2019-03-20","sys_update_time":"2019-03-20","start_time":"1900-12-31","end_time":"9999-12-31","line_state":"生效","region_py":"NPWYXQ","region_level":"","town_code":"350700000000","area_all_code":"","xmin":"","ymax":"","xmax":"","ymin":"","sort_num":"","REGION_TYPE":""},{"key_region_code":"a7ab9c49-d105-442f-8e41-72b11e6ec433","region_code":"350701000000","point_code":"350701","region_name":"市辖区","parent_region_code":"350700000000","province_code":"350000000000","city_code":"350700000000","county_code":"350701000000","region_allname":"福建省\\南平市\\市辖区","area_code":"b0020","longitude":"","latitude":"","tree_path":"福建省$南平市$市辖区$350000000000$350700000000$350701000000","version":"201903","short_name":"市辖区","sys_create_time":"2019-03-20","sys_update_time":"2019-03-20","start_time":"1900-12-31","end_time":"9999-12-31","line_state":"生效","region_py":"SXQ","region_level":"4","town_code":"350701000000","area_all_code":"","xmin":"","ymax":"","xmax":"","ymin":"","sort_num":"","REGION_TYPE":""},{"key_region_code":"946391da-8793-4626-9690-4efabf85ef3c","region_code":"350702000000","point_code":"350702","region_name":"延平区","parent_region_code":"350700000000","province_code":"350000000000","city_code":"350700000000","county_code":"350702000000","region_allname":"福建省\\南平市\\延平区","area_code":"b0020","longitude":"118.245","latitude":"26.5876","tree_path":"福建省$南平市$延平区$350000000000$350700000000$350702000000","version":"201903","short_name":"延平区","sys_create_time":"2019-03-20","sys_update_time":"2019-03-20","start_time":"1900-12-31","end_time":"9999-12-31","line_state":"生效","region_py":"YPQ","region_level":"4","town_code":"350702000000","area_all_code":"","xmin":"","ymax":"","xmax":"","ymin":"","sort_num":"","REGION_TYPE":""},{"key_region_code":"b4af36a1-c1e4-44ec-a084-24b23f466de1","region_code":"350703000000","point_code":"350703","region_name":"建阳区","parent_region_code":"350700000000","province_code":"350000000000","city_code":"350700000000","county_code":"350703000000","region_allname":"福建省\\南平市\\建阳区","area_code":"","longitude":"118.057","latitude":"27.4071","tree_path":"福建省$南平市$建阳区$350000000000$350700000000$350703000000","version":"201903","short_name":"","sys_create_time":"2019-03-20","sys_update_time":"2019-03-20","start_time":"1900-12-31","end_time":"9999-12-31","line_state":"生效","region_py":"JYQ","region_level":"4","town_code":"350703000000","area_all_code":"","xmin":"","ymax":"","xmax":"","ymin":"","sort_num":"","REGION_TYPE":"1"},{"key_region_code":"1e470806-5a9f-45be-bf12-b029ad001389","region_code":"350721000000","point_code":"350721","region_name":"顺昌县","parent_region_code":"350700000000","province_code":"350000000000","city_code":"350700000000","county_code":"350721000000","region_allname":"福建省\\南平市\\顺昌县","area_code":"b0020","longitude":"117.864","latitude":"26.9063","tree_path":"福建省$南平市$顺昌县$350000000000$350700000000$350721000000","version":"201903","short_name":"顺昌县","sys_create_time":"2019-03-20","sys_update_time":"2019-03-20","start_time":"1900-12-31","end_time":"9999-12-31","line_state":"生效","region_py":"SCX","region_level":"4","town_code":"350721000000","area_all_code":"","xmin":"","ymax":"","xmax":"","ymin":"","sort_num":"","REGION_TYPE":"2"},{"key_region_code":"6422a664-1a42-46a5-8a36-89da79af9db6","region_code":"350722000000","point_code":"350722","region_name":"浦城县","parent_region_code":"350700000000","province_code":"350000000000","city_code":"350700000000","county_code":"350722000000","region_allname":"福建省\\南平市\\浦城县","area_code":"b0020","longitude":"118.514","latitude":"27.941","tree_path":"福建省$南平市$浦城县$350000000000$350700000000$350722000000","version":"201903","short_name":"浦城县","sys_create_time":"2019-03-20","sys_update_time":"2019-03-20","start_time":"1900-12-31","end_time":"9999-12-31","line_state":"生效","region_py":"PCX","region_level":"4","town_code":"350722000000","area_all_code":"","xmin":"","ymax":"","xmax":"","ymin":"","sort_num":"","REGION_TYPE":"2"},{"key_region_code":"8cda87ed-5186-4027-b2fc-5fe86e0dc95d","region_code":"350723000000","point_code":"350723","region_name":"光泽县","parent_region_code":"350700000000","province_code":"350000000000","city_code":"350700000000","county_code":"350723000000","region_allname":"福建省\\南平市\\光泽县","area_code":"b0020","longitude":"117.344","latitude":"27.6537","tree_path":"福建省$南平市$光泽县$350000000000$350700000000$350723000000","version":"201903","short_name":"光泽县","sys_create_time":"2019-03-20","sys_update_time":"2019-03-20","start_time":"1900-12-31","end_time":"9999-12-31","line_state":"生效","region_py":"GZX","region_level":"4","town_code":"350723000000","area_all_code":"","xmin":"","ymax":"","xmax":"","ymin":"","sort_num":"","REGION_TYPE":"2"},{"key_region_code":"28d7d0c9-2a99-4a7b-94ab-382398fd8f4d","region_code":"350724000000","point_code":"350724","region_name":"松溪县","parent_region_code":"350700000000","province_code":"350000000000","city_code":"350700000000","county_code":"350724000000","region_allname":"福建省\\南平市\\松溪县","area_code":"b0020","longitude":"118.755","latitude":"27.6088","tree_path":"福建省$南平市$松溪县$350000000000$350700000000$350724000000","version":"201903","short_name":"松溪县","sys_create_time":"2019-03-20","sys_update_time":"2019-03-20","start_time":"1900-12-31","end_time":"9999-12-31","line_state":"生效","region_py":"SXX","region_level":"4","town_code":"350724000000","area_all_code":"","xmin":"","ymax":"","xmax":"","ymin":"","sort_num":"","REGION_TYPE":"2"},{"key_region_code":"5d14174e-2a82-46bb-bf89-0a27d0166ccf","region_code":"350725000000","point_code":"350725","region_name":"政和县","parent_region_code":"350700000000","province_code":"350000000000","city_code":"350700000000","county_code":"350725000000","region_allname":"福建省\\南平市\\政和县","area_code":"b0020","longitude":"118.965","latitude":"27.3216","tree_path":"福建省$南平市$政和县$350000000000$350700000000$350725000000","version":"201903","short_name":"政和县","sys_create_time":"2019-03-20","sys_update_time":"2019-03-20","start_time":"1900-12-31","end_time":"9999-12-31","line_state":"生效","region_py":"ZHX","region_level":"4","town_code":"350725000000","area_all_code":"","xmin":"","ymax":"","xmax":"","ymin":"","sort_num":"","REGION_TYPE":"2"},{"key_region_code":"c4a061f7-1d47-4328-878e-bdec912bcae8","region_code":"350781000000","point_code":"350781","region_name":"邵武市","parent_region_code":"350700000000","province_code":"350000000000","city_code":"350700000000","county_code":"350781000000","region_allname":"福建省\\南平市\\邵武市","area_code":"b0020","longitude":"117.47","latitude":"27.2338","tree_path":"福建省$南平市$邵武市$350000000000$350700000000$350781000000","version":"201903","short_name":"邵武市","sys_create_time":"2019-03-20","sys_update_time":"2019-03-20","start_time":"1900-12-31","end_time":"9999-12-31","line_state":"生效","region_py":"SWS","region_level":"4","town_code":"350781000000","area_all_code":"","xmin":"","ymax":"","xmax":"","ymin":"","sort_num":"","REGION_TYPE":"1"},{"key_region_code":"47f74a7f-3425-4867-b45f-ec0e2a1ea4d9","region_code":"350782000000","point_code":"350782","region_name":"武夷山市","parent_region_code":"350700000000","province_code":"350000000000","city_code":"350700000000","county_code":"350782000000","region_allname":"福建省\\南平市\\武夷山市","area_code":"b0020","longitude":"118.002","latitude":"27.7451","tree_path":"福建省$南平市$武夷山市$350000000000$350700000000$350782000000","version":"201903","short_name":"武夷山市","sys_create_time":"2019-03-20","sys_update_time":"2019-03-20","start_time":"1900-12-31","end_time":"9999-12-31","line_state":"生效","region_py":"WYSS","region_level":"4","town_code":"350782000000","area_all_code":"","xmin":"","ymax":"","xmax":"","ymin":"","sort_num":"","REGION_TYPE":"1"},{"key_region_code":"9bb7bf15-d8c7-4088-a3ca-ce6ac35a9a63","region_code":"350783000000","point_code":"350783","region_name":"建瓯市","parent_region_code":"350700000000","province_code":"350000000000","city_code":"350700000000","county_code":"350783000000","region_allname":"福建省\\南平市\\建瓯市","area_code":"b0020","longitude":"118.472","latitude":"27.0439","tree_path":"福建省$南平市$建瓯市$350000000000$350700000000$350783000000","version":"201903","short_name":"建瓯市","sys_create_time":"2019-03-20","sys_update_time":"2019-03-20","start_time":"1900-12-31","end_time":"9999-12-31","line_state":"生效","region_py":"JOS","region_level":"4","town_code":"350783000000","area_all_code":"","xmin":"","ymax":"","xmax":"","ymin":"","sort_num":"","REGION_TYPE":"1"}],
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
cStyle:{"wrapper":{"default":{"width":"147px","height":"26px","fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","textAlign":"left","color":"var(--business-white)","background":"var(--t-input-background-color)","fillType":"color","backgroundClip":"unset","position":"unset","lineHeight":"var(--t-font-size-18)","border":"auto !important","borderTop":"1px solid var(--business-select-border)","borderLeft":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"var(--t-select-fill-bg)","left":"436px","top":"19px"},"focus":{"color":"var(--t-white)","backgroundClip":"unset","border":"auto !important","borderTop":"1px Solid var(--t-input-focus-border)","borderLeft":"1px Solid var(--t-input-focus-border)","borderBottom":"1px Solid var(--t-input-focus-border)","borderRight":"1px Solid var(--t-input-focus-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","background":"unset"},"hover":{"border":"auto !important","borderTop":"1px Solid var(--t-input-hover-border)","borderLeft":"1px Solid var(--t-input-hover-border)","borderBottom":"1px Solid var(--t-input-hover-border)","borderRight":"1px Solid var(--t-input-hover-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"disabled":{"color":"var(--t-input-disabled-font-color)","border":"auto !important","borderTop":"1px Solid var(--t-input-disabled-border-color)","borderLeft":"1px Solid var(--t-input-disabled-border-color)","borderBottom":"1px Solid var(--t-input-disabled-border-color)","borderRight":"1px Solid var(--t-input-disabled-border-color)","background":"var(--t-input-disabled-bg-color)"}},"placeholder":{"default":{"fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","color":"var(--business-white)","background":"unset","backgroundClip":"unset","textAlign":"left","lineHeight":"var(--t-font-size-18)"}},"arrow":{"default":{"width":"25px","height":"30px","color":"rgba(255, 255, 255, 1)","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","fontSize":"12px","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundPosition":"0% 0%"}},"dropdownWrapper":{"default":{"minWidth":"100px","height":"100px","overflowY":"auto","overflowX":"hidden","background":"var(--t-select-popper-bg-color)","fillType":"color","border":"auto !important","borderTop":"1px solid var(--business-select-border)","borderLeft":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderTopLeftRadius":"var(--t-select-popper-border-radius)","borderTopRightRadius":"var(--t-select-popper-border-radius)","borderBottomRightRadius":"var(--t-select-popper-border-radius)","borderBottomLeftRadius":"var(--t-select-popper-border-radius)","boxShadow":"0px 0px 5px 0px var(--t-select-popper-box-shadow-color)","backgroundColor":"var(--business-select-drop-bg)","color":"rgba(255, 255, 255, 0.9)","fontSize":"14px","width":"","overflow":"hidden"}},"dropdownItem":{"default":{"marginBottom":"0px","fontSize":"14","color":"rgba(255, 255, 255, 0.9)","background":"rgb(255,255,255)","paddingLeft":"20px","paddingTop":"0px","paddingRight":"20px","paddingBottom":"0px","backgroundColor":"var(--business-select-drop-bg)"},"active":{"color":"var(--business-text-hover)","background":"var(--t-select-dropdown-active-bg-color)","fillType":"color","backgroundColor":"var(--business-select-item-bg)"},"hover":{"backgroundColor":"var(--business-select-item-bg)"}},"dropdownItemText":{"default":{"color":"var(--t-select-dropdown-font-color)","fontFamily":"思源","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","textAlign":"left","background":"transparent","backgroundClip":"unset","lineHeight":"var(--t-font-size-18)"},"active":{"color":"var(--t-select-dropdown-active-font-color)","background":"transparent","backgroundClip":"unset","fontSize":"var(--t-font-size-18)","lineHeight":"var(--t-font-size-18)"}},"dropdownArrow":{"default":{"display":"none"}},"tag":{"default":{"fontSize":"12px","display":"inline-flex","align-items":"center","background":"rgba(229, 229, 229, 1)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px"}},"tagText":{"default":{"fontSize":"12px","height":"auto","color":"rgba(0, 0, 0, 1)"}},"tagClose":{"default":{"right":"-3px"}}},
scrollbarThumbColor:"rgb(193,193,193)",
scrollbarTrackColor:"rgb(241,241,241)",
scrollbarWidth:"6px", 
 },
},
tColx0x4x3: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tTabsBasex0x4x3x0: {
defaultStyle: {
            default: {"width":"155px","height":"25px","position":"unset","left":"610px","top":"21px","fontSize":"12px","lineHeight":"26px","animationName":""},
            
            },
 default: { 
 
data:[{"label":"第一轮","value":"1"},{"label":"第二轮","value":"2"}],
space:5,
selectedTabVal:"2",
innerShadowColor:"rgba(0,0,0,0)",
activeInnerShadowColor:"rgba(0,0,0,0)",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"155px","height":"25px","position":"unset","left":"610px","top":"21px","fontSize":"12px","lineHeight":"26px","animationName":""}},"label":{"default":{"display":"block","width":"100%","height":"auto","color":"#fff","fontWeight":"400","fontSize":"var(--t-font-size-18)","lineHeight":"24px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","letterSpacing":"unset"},"hover":{"color":"var(--t-tabs-base-hover-text-color)","fontSize":"var(--t-font-size-18)","lineHeight":"24px"},"active":{"color":"#fff","fontSize":"var(--t-font-size-18)","lineHeight":"24px"}},"itemWrapper":{"default":{"width":"44%","flex":"unset","height":"26px","padding":"0","margin":"0","borderRadius":"4px","background":"var(--t-tabs-base-bg-color)","color":"#fff","fontWeight":"var(--t-tabs-base-text-weight)","fontSize":"12","lineHeight":"26px","textAlign":"center","cursor":"pointer","fillType":"color","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--business-show-bg60)"},"hover":{"margin":"0 !important","background":"var(--t-tabs-base-hover-bg-color)","fillType":"color","fontSize":"12px","lineHeight":"26px","backgroundColor":"#2C80FF"},"active":{"margin":"0 !important","background":"var(--t-tabs-base-active-bg-color)","fillType":"color","fontSize":"12px","lineHeight":"26px","backgroundColor":"#2C80FF"},"disabled":{"color":"var(--t-tabs-vertical-disabled-text-color)"}},"tabsContainer":{"default":{"display":"flex","height":"100%","justifyContent":"left","alignItems":"center","gap":"5px","flexDirection":"row","fontSize":"12px","lineHeight":"26px"},"hover":{"fontSize":"12px","lineHeight":"26px"}}}, 
 },
},
tTabsBasex0x4x3x1: {
defaultStyle: {
            default: {"width":"216px","height":"25px","position":"unset","left":"610px","top":"21px","fontSize":"12px","lineHeight":"26px"},
            
            },
 default: { 
 
data:[{"label":"第一轮","value":"1"},{"label":"第二轮","value":"2"},{"label":"第三轮","value":"3"}],
space:5,
selectedTabVal:"3",
innerShadowColor:"rgba(0,0,0,0)",
activeInnerShadowColor:"rgba(0,0,0,0)",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"216px","height":"25px","position":"unset","left":"610px","top":"21px","fontSize":"12px","lineHeight":"26px"}},"label":{"default":{"display":"block","width":"100%","height":"auto","color":"#fff","fontWeight":"400","fontSize":"var(--t-font-size-18)","lineHeight":"24px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"hover":{"color":"var(--t-tabs-base-hover-text-color)","fontSize":"var(--t-font-size-18)","lineHeight":"24px"},"active":{"color":"#fff","fontSize":"var(--t-font-size-18)","lineHeight":"24px"}},"itemWrapper":{"default":{"width":"44%","flex":"unset","height":"26px","padding":"0","margin":"0","borderRadius":"4px","background":"var(--t-tabs-base-bg-color)","color":"#fff","fontWeight":"var(--t-tabs-base-text-weight)","fontSize":"12","lineHeight":"26px","textAlign":"center","cursor":"pointer","fillType":"color","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--business-show-bg60)"},"hover":{"margin":"0 !important","background":"var(--t-tabs-base-hover-bg-color)","fillType":"color","fontSize":"12px","lineHeight":"26px","backgroundColor":"#2C80FF"},"active":{"margin":"0 !important","background":"var(--t-tabs-base-active-bg-color)","fillType":"color","fontSize":"12px","lineHeight":"26px","backgroundColor":"#2C80FF"},"disabled":{"color":"var(--t-tabs-vertical-disabled-text-color)"}},"tabsContainer":{"default":{"display":"flex","height":"100%","justifyContent":"space-between","alignItems":"center","gap":"5px","flexDirection":"row","fontSize":"12px","lineHeight":"26px"},"hover":{"fontSize":"12px","lineHeight":"26px"}}}, 
 },
},
tColx0x4x4: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tRectx0x4x4x0: {
defaultStyle: {
            default: {"width":"28px","height":"28px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-10-20/7b779f4cf1274a7d884759a57e40571c.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-205px","left":"422px","position":"unset","marginLeft":"20px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"28px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-10-20/7b779f4cf1274a7d884759a57e40571c.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-205px","left":"422px","position":"unset","marginLeft":"20px","animationName":"","cursor":"pointer"},"active":{"background":"var(--t-brand8)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px"},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x4x4x1: {
defaultStyle: {
            default: {"width":"28px","height":"28px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-10-20/20b88cb65b1140ccaff330681abf2b02.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-149px","left":"709px","position":"unset","marginLeft":"20px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"28px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-10-20/20b88cb65b1140ccaff330681abf2b02.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-149px","left":"709px","position":"unset","marginLeft":"20px","cursor":"pointer","animationName":""},"active":{"background":"var(--t-brand8)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px"},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const setProblemVisibility = (visible) => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'setProblemVisibility',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      visible: !visible,
    }
  }
);

if (visible) {
  global.dashboardGlobalVariables.selectedIndicatorIndex = '';
}
};
const handleScale = () => {
const dom = document.getElementById('t-component-20af.aaf0b39ee');
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
    dom.style.zIndex = '0'
    dom.style.width = '980px';
    dom.style.height = '186px';
    dom.style.left = '470px';
    dom.style.top = '799px';
    if(bgDom){
      bgDom.style.background = `url('/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-21/bb51ca06e0cc4048b7ee6aac2bb1517a.png')`
    }
    dom.style.setProperty('--t-font-size-18', '14px')
  }
  // 处理表格是否滚动
  handleTableScroll();
}
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
type: "setProblemStatus", // 消息名称
data: {"ROUND_NO":global.dashboardGlobalVariables.supervision.ROUND_NO,"PROBLEM_SOURCE":"","PROBLEM_NAME":state.pointName,"REGION_CODE":state.regionCode,"visible":global.dashboardGlobalVariables.supervision.layerSwitch}, // 发送的数据
});
};
const onchange1763639146616 = (value) => {
// 设置变量值
state.pointName = value;
};
const onchange1763638254018 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.regionCode = value;
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setProblemStatus", // 消息名称
data: {"ROUND_NO":global.dashboardGlobalVariables.supervision.ROUND_NO,"PROBLEM_SOURCE":global.dashboardGlobalVariables.supervision.PROBLEM_SOURCE,"PROBLEM_NAME":state.pointName,"REGION_CODE":state.regionCode,"visible":global.dashboardGlobalVariables.supervision.layerSwitch}, // 发送的数据
});
};
const ontabClick1763637132501 = (data) => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'dashboardGlobalVariables.supervision.ROUND_NO',
                    value:data.value,
                    data: {
                      dashboardGlobalVariables:{supervision:{ROUND_NO: data.value}}
                    },
                  });
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setProblemStatus", // 消息名称
data: {"ROUND_NO":global.dashboardGlobalVariables.supervision.ROUND_NO,"PROBLEM_SOURCE":global.dashboardGlobalVariables.supervision.PROBLEM_SOURCE,"PROBLEM_NAME":state.pointName,"REGION_CODE":state.regionCode,"visible":global.dashboardGlobalVariables.supervision.layerSwitch}, // 发送的数据
});
};
const ontabClick1764151925685_0_0 = (data) => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'dashboardGlobalVariables.supervision.ROUND_NO',
                    value:data.value,
                    data: {
                      dashboardGlobalVariables:{supervision:{ROUND_NO: data.value}}
                    },
                  });
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setProblemStatus", // 消息名称
data: {"ROUND_NO":global.dashboardGlobalVariables.supervision.ROUND_NO,"PROBLEM_SOURCE":global.dashboardGlobalVariables.supervision.PROBLEM_SOURCE,"PROBLEM_NAME":state.pointName,"REGION_CODE":state.regionCode,"visible":global.dashboardGlobalVariables.supervision.layerSwitch}, // 发送的数据
});
};
const onclick1774856399174_0_0 = () => {
// 执行自定义方法
handleScale();
};
const onclick1774946659007_0_0 = () => {
// 执行自定义方法
handleScale();
};
const onclick1774856174374 = () => {
// 执行自定义方法
handleScale();
};
const onclick1774946666806_0_0 = () => {
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
 getMonitorTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"SOURCE":"","STATUS":"","REGION_CODE":"global.REGION_CODE","interfaceId":"be6b9c07cd9a75ed2a555d6cc6af02b7"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"SOURCE":"","STATUS":"","REGION_CODE":global.REGION_CODE,"interfaceId":"be6b9c07cd9a75ed2a555d6cc6af02b7"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"SOURCE":"","STATUS":"","REGION_CODE":global.REGION_CODE,"interfaceId":"be6b9c07cd9a75ed2a555d6cc6af02b7"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitorTime'] = res.data;
                
     state.monitorTime = res?.data?.data?.[0]?.MAX_TIME || '';

apiRegistry.getData.request();
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"pageSize":"10","END_TIME":"state.monitorTime","ROUND":"global.dashboardGlobalVariables.supervision.ROUND_NO","SOURCE":"global.dashboardGlobalVariables.supervision.PROBLEM_SOURCE","FINISH_STATUS":"","CONTENT":"state.pointName","REGION_CODE":"state.regionCode","interfaceId":"6c9fbe3c6dff474d42abed6965af09df"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"pageSize":"10","END_TIME":state.monitorTime,"ROUND":global.dashboardGlobalVariables.supervision.ROUND_NO,"SOURCE":global.dashboardGlobalVariables.supervision.PROBLEM_SOURCE,"FINISH_STATUS":"","CONTENT":state.pointName,"REGION_CODE":state.regionCode,"interfaceId":"6c9fbe3c6dff474d42abed6965af09df"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"pageSize":"10","END_TIME":state.monitorTime,"ROUND":global.dashboardGlobalVariables.supervision.ROUND_NO,"SOURCE":global.dashboardGlobalVariables.supervision.PROBLEM_SOURCE,"FINISH_STATUS":"","CONTENT":state.pointName,"REGION_CODE":state.regionCode,"interfaceId":"6c9fbe3c6dff474d42abed6965af09df"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     
  state.listData = [];
if (res.data?.data?.length) {
  state.listData = res.data.data;
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
              bindComponents: [{"componentId":"t-select-57c3.b1cff7ea2","componentName":"单项选择器-t-select","dataRefId":"f12ae0304d624a6b86eb10de933dfc38","datasourceId":"b4d1da632d52487fa773d3a8fe216fc7","datasourceName":"getSelectOptions","pageId":"5410bd3d33b345989c357d20fbf52136"}], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"IS_POINT":"1","PARENT_REGION_CODE":"global.REGION_CODE","IS_SELF":"1","interfaceId":"dbc171c05c6754e9bc26ad3678279d8d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"IS_POINT":"1","PARENT_REGION_CODE":global.REGION_CODE,"IS_SELF":"1","interfaceId":"dbc171c05c6754e9bc26ad3678279d8d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"IS_POINT":"1","PARENT_REGION_CODE":global.REGION_CODE,"IS_SELF":"1","interfaceId":"dbc171c05c6754e9bc26ad3678279d8d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getSelectOptions'] = res.data;
                
     
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
watch(() => [global.dashboardGlobalVariables.supervision.ROUND_NO,global.dashboardGlobalVariables.supervision.PROBLEM_SOURCE,state.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-questionlistPetition', global.appScaleMode, 'normal');
                           
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
type: "setProblemStatus", // 消息名称
data: {"visible":false}, // 发送的数据
});
});
onMounted(() => {
setPageScale('t-l-c-questionlistPetition', global.appScaleMode, 'normal');
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

 const tTabsBasex0x4x3x1ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x4x3x1.default, componentState.tTabsBasex0x4x3x1?.[state.screenSize]));

 const tColx0x4x4ComputedData = computed(() => _.merge({}, componentState.tColx0x4x4.default, componentState.tColx0x4x4?.[state.screenSize]));

 const tRectx0x4x4x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x4x4x0.default, componentState.tRectx0x4x4x0?.[state.screenSize]));

 const tRectx0x4x4x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x4x4x1.default, componentState.tRectx0x4x4x1?.[state.screenSize]));

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
tTabsBasex0x4x3x1ComputedData,
tColx0x4x4ComputedData,
tRectx0x4x4x0ComputedData,
tRectx0x4x4x1ComputedData,
onchange1763639146616,
onclick1763637504861,
onchange1763638254018,
ontabClick1764151925685_0_0,
ontabClick1763637132501,
onclick1774946659007_0_0,
onclick1774946666806_0_0,
};
},
};