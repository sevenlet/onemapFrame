window.pollutionAnalysisComponent = {
template: 
`<div id="t-l-c-pollutionAnalysis" class="t-l-c-pollutionAnalysis" >` +
`<t-rect v-if="state.cardNoData === true" id="t-rect-a701.ebf144921" class="pollutionAnalysis-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-button v-if="state.activeTab.value !== ''" id="t-button-2397.b3b568691" class="pollutionAnalysis-t-button-0-2"  :label="tButtonx0x2ComputedData.label" :round="tButtonx0x2ComputedData.round" :plain="tButtonx0x2ComputedData.plain" :disabled="tButtonx0x2ComputedData.disabled" :type="tButtonx0x2ComputedData.type" :size="tButtonx0x2ComputedData.size" :native-type="tButtonx0x2ComputedData.native-type" :c-style="tButtonx0x2ComputedData.cStyle" @click="onclick1761120647351">` +
`</t-button>` +
`<t-image-base id="t-image-base-cc01.3413a106e" class="pollutionAnalysis-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle">` +
`</t-image-base>` +
`<t-list-card v-if="state.cardLoading === false" id="t-list-card-2d95.1c787b696" class="pollutionAnalysis-t-list-card-0-4"  :data="replaceCssVariables(filterData(state.sceneList, componentPropBindingMap?.['t-list-card-2d95.1c787b696']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x4ComputedData.spacingX" :col="tListCardx0x4ComputedData.col" :direction="tListCardx0x4ComputedData.direction" :exchange-order="tListCardx0x4ComputedData.exchangeOrder" :unit-break="tListCardx0x4ComputedData.unitBreak" :key-field="tListCardx0x4ComputedData.keyField" :active-key-field="tListCardx0x4ComputedData.activeKeyField" :active="replaceCssVariables(filterData(state.activeTab.name, componentPropBindingMap?.['t-list-card-2d95.1c787b696']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tListCardx0x4ComputedData.cStyle" @card-click="oncardClick1735029005919">` +
`</t-list-card>` +
`<t-rect id="t-rect-364c.0469d38c2" class="pollutionAnalysis-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-table v-if="state.listLoading === false" id="t-table-a0d0.258b53cfd" class="pollutionAnalysis-t-table-0-6"  :height="tTablex0x6ComputedData.height" :stripe="tTablex0x6ComputedData.stripe" :border="tTablex0x6ComputedData.border" :auto-scroll="tTablex0x6ComputedData.autoScroll" :speed="tTablex0x6ComputedData.speed" :columns="tTablex0x6ComputedData.columns" :data="replaceCssVariables(filterData(state.enterList, componentPropBindingMap?.['t-table-a0d0.258b53cfd']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x6ComputedData.defaultSort" :c-style="tTablex0x6ComputedData.cStyle" @cell-click="oncellClick1735184769666_0_0">` +
`</t-table>` +
`<t-component id="t-component-3c7c.d9e5b9971" class="pollutionAnalysis-t-component-0-7"  :name="tComponentx0x7ComputedData.name" :c-style="tComponentx0x7ComputedData.cStyle" :src="tComponentx0x7ComputedData.src" :component-name="tComponentx0x7ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-0645.e3c5af32d" class="pollutionAnalysis-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle">` +
`</t-text>` +
`<t-rect v-if="state.checkedIds !== ''" id="t-rect-f258.31abd13a7" class="pollutionAnalysis-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle" @click="onclick1735205190641">` +
`</t-rect>` +
`<t-rect v-if="state.checkedIds === ''" id="t-rect-caab.15629254d" class="pollutionAnalysis-t-rect-0-10"  :tip="tRectx0x10ComputedData.tip" :label="tRectx0x10ComputedData.label" :active="tRectx0x10ComputedData.active" :c-style="tRectx0x10ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-5454.74c04491" class="pollutionAnalysis-t-text-0-12"  :label="tTextx0x12ComputedData.label" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-a89a.7e30697e2" class="pollutionAnalysis-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-49e3.b2374108a" class="pollutionAnalysis-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-3797.0a506c66b" class="pollutionAnalysis-t-text-0-15"  :label="tTextx0x15ComputedData.label" :editable="tTextx0x15ComputedData.editable" :c-style="tTextx0x15ComputedData.cStyle">` +
`</t-text>` +
`<t-radio id="t-radio-7049.20f57b6cf" class="pollutionAnalysis-t-radio-0-16"  :options="tRadiox0x16ComputedData.options" :active="replaceCssVariables(filterData(state.selectedParams.direction, componentPropBindingMap?.['t-radio-7049.20f57b6cf']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tRadiox0x16ComputedData.alias" :disabled="tRadiox0x16ComputedData.disabled" :border="tRadiox0x16ComputedData.border" :size="tRadiox0x16ComputedData.size" :is-use-button="tRadiox0x16ComputedData.isUseButton" :c-style="tRadiox0x16ComputedData.cStyle" @change="onchange1740720896505">` +
`</t-radio>` +
`<t-radio id="t-radio-f568.197f4f8a6" class="pollutionAnalysis-t-radio-0-17"  :options="tRadiox0x17ComputedData.options" :active="replaceCssVariables(filterData(state.selectedParams.buffer, componentPropBindingMap?.['t-radio-f568.197f4f8a6']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tRadiox0x17ComputedData.alias" :disabled="tRadiox0x17ComputedData.disabled" :border="tRadiox0x17ComputedData.border" :size="tRadiox0x17ComputedData.size" :is-use-button="tRadiox0x17ComputedData.isUseButton" :c-style="tRadiox0x17ComputedData.cStyle" @change="onchange1740720921561">` +
`</t-radio>` +
`<t-checkbox id="t-checkbox-3380.5456a8ecb" class="pollutionAnalysis-t-checkbox-0-18"  :data="tCheckboxx0x18ComputedData.data" :active="replaceCssVariables(filterData(state.selectedParams.altitude, componentPropBindingMap?.['t-checkbox-3380.5456a8ecb']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x18ComputedData.dataAlias" :border="tCheckboxx0x18ComputedData.border" :use-button="tCheckboxx0x18ComputedData.useButton" :c-style="tCheckboxx0x18ComputedData.cStyle" @change="onchange1740720873822">` +
`</t-checkbox>` +
`<t-checkbox id="t-checkbox-e6ce.789248433" class="pollutionAnalysis-t-checkbox-0-19"  :data="tCheckboxx0x19ComputedData.data" :active="replaceCssVariables(filterData(state.ymsSelect, componentPropBindingMap?.['t-checkbox-e6ce.789248433']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x19ComputedData.dataAlias" :border="tCheckboxx0x19ComputedData.border" :use-button="tCheckboxx0x19ComputedData.useButton" :c-style="tCheckboxx0x19ComputedData.cStyle" @change="onchange1768900934761_0_0">` +
`</t-checkbox>` +
`<t-rect id="t-rect-0b21.228388b5a" class="pollutionAnalysis-t-rect-0-20"  :tip="tRectx0x20ComputedData.tip" :label="tRectx0x20ComputedData.label" :active="tRectx0x20ComputedData.active" :c-style="tRectx0x20ComputedData.cStyle" @click="onclick1740712988309_0_0">` +
`</t-rect>` +
`<t-search id="t-search-fadf.e7800d58b" class="pollutionAnalysis-t-search-0-21"  :type="tSearchx0x21ComputedData.type" :input-value="replaceCssVariables(filterData(state.selectedParams.radius, componentPropBindingMap?.['t-search-fadf.e7800d58b']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x21ComputedData.maxlength" :minlength="tSearchx0x21ComputedData.minlength" :show-word-limit="tSearchx0x21ComputedData.showWordLimit" :placeholder="tSearchx0x21ComputedData.placeholder" :clearable="tSearchx0x21ComputedData.clearable" :show-password="tSearchx0x21ComputedData.showPassword" :disabled="tSearchx0x21ComputedData.disabled" :prefix-icon="tSearchx0x21ComputedData.prefix-icon" :suffix-icon="tSearchx0x21ComputedData.suffix-icon" :rows="tSearchx0x21ComputedData.rows" :autosize="tSearchx0x21ComputedData.autosize" :name="tSearchx0x21ComputedData.name" :readonly="tSearchx0x21ComputedData.readonly" :step="tSearchx0x21ComputedData.step" :autofocus="tSearchx0x21ComputedData.autofocus" :form="tSearchx0x21ComputedData.form" :label="tSearchx0x21ComputedData.label" :tabindex="tSearchx0x21ComputedData.tabindex" :validate-event="tSearchx0x21ComputedData.validateEvent" :c-style="tSearchx0x21ComputedData.cStyle" :has-search-btn="tSearchx0x21ComputedData.hasSearchBtn" @input="oninput1740741929704">` +
`</t-search>` +
`<t-text id="t-text-52c7.b32680ad6" class="pollutionAnalysis-t-text-0-22"  :label="tTextx0x22ComputedData.label" :editable="tTextx0x22ComputedData.editable" :c-style="tTextx0x22ComputedData.cStyle">` +
`</t-text>` +
`<t-rect v-if="state.cardLoading === true" id="t-rect-82e1.1a78bdcce" class="pollutionAnalysis-t-rect-0-23"  :tip="tRectx0x23ComputedData.tip" :label="tRectx0x23ComputedData.label" :active="tRectx0x23ComputedData.active" :c-style="tRectx0x23ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.listLoading === true" id="t-rect-04fa.ba844241f" class="pollutionAnalysis-t-rect-0-24"  :tip="tRectx0x24ComputedData.tip" :label="tRectx0x24ComputedData.label" :active="tRectx0x24ComputedData.active" :c-style="tRectx0x24ComputedData.cStyle">` +
`</t-rect>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-a701.ebf144921":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-table-dc13.1454a104c":{"attributeName":"tTablex0x1"},"t-button-2397.b3b568691":{"attributeName":"tButtonx0x2","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-cc01.3413a106e":{"attributeName":"tImageBasex0x3","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-2d95.1c787b696":{"attributeName":"tListCardx0x4","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-364c.0469d38c2":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-table-a0d0.258b53cfd":{"attributeName":"tTablex0x6","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-component-3c7c.d9e5b9971":{"attributeName":"tComponentx0x7","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-0645.e3c5af32d":{"attributeName":"tTextx0x8","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f258.31abd13a7":{"attributeName":"tRectx0x9","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-caab.15629254d":{"attributeName":"tRectx0x10","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-7def.74ba3dc2":{"attributeName":"tImageBasex0x11"},"t-text-5454.74c04491":{"attributeName":"tTextx0x12","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a89a.7e30697e2":{"attributeName":"tTextx0x13","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-49e3.b2374108a":{"attributeName":"tTextx0x14","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3797.0a506c66b":{"attributeName":"tTextx0x15","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-radio-7049.20f57b6cf":{"attributeName":"tRadiox0x16","options":{"filters":[]},"active":{"filters":[]},"alias":{"filters":[]},"disabled":{"filters":[]},"border":{"filters":[]},"size":{"filters":[]},"isUseButton":{"filters":[]},"cStyle":{"filters":[]}},"t-radio-f568.197f4f8a6":{"attributeName":"tRadiox0x17","options":{"filters":[]},"active":{"filters":[]},"alias":{"filters":[]},"disabled":{"filters":[]},"border":{"filters":[]},"size":{"filters":[]},"isUseButton":{"filters":[]},"cStyle":{"filters":[]}},"t-checkbox-3380.5456a8ecb":{"attributeName":"tCheckboxx0x18","data":{"filters":[]},"active":{"filters":[]},"dataAlias":{"filters":[]},"border":{"filters":[]},"useButton":{"filters":[]},"cStyle":{"filters":[]}},"t-checkbox-e6ce.789248433":{"attributeName":"tCheckboxx0x19","data":{"filters":[]},"active":{"filters":[]},"dataAlias":{"filters":[]},"border":{"filters":[]},"useButton":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-0b21.228388b5a":{"attributeName":"tRectx0x20","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-search-fadf.e7800d58b":{"attributeName":"tSearchx0x21","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-text-52c7.b32680ad6":{"attributeName":"tTextx0x22","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-82e1.1a78bdcce":{"attributeName":"tRectx0x23","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-04fa.ba844241f":{"attributeName":"tRectx0x24","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   ymsSelect: [],
   ymsStatus: false,
   cardNoData: false,
   listLoading: true,
   cardLoading: true,
   airSourceTraceData: {"bufferLayerPoly":[],"regionCode":""},
   pointValue: "",
   queryJson: "",
   tagParams: {},
   isShowTagFilter: false,
   selectedParams: {"radius":3,"direction":"back","altitude":["10","500","1000"],"buffer":"union"},
   isInitPage: false,
   sceneRawList: [{"hasOperateColumn":true,"entityCode":"tag_yztgdy_1618381967642","entityName":"一张图-固定源","topicCode":"9c78b301-ae5e-4050-aae5-c0928420a054","topicName":"企业","isshow":true,"title":"企业","num":0,"unit":"家","color":"var(--t-white)"},{"hasOperateColumn":true,"entityCode":"tag_fxydayz_1734067067287","entityName":"风险源档案-油站","topicCode":"393cf6ad-0010-4f42-9d50-471f67792c59","topicName":"加油站","isshow":true,"title":"加油站","num":0,"unit":"家","color":"var(--t-white)"},{"hasOperateColumn":true,"entityCode":"tag_fxydayk_1733994042148","entityName":"风险源档案-油库","topicCode":"e4a5ce63-01c5-49bb-b13b-4e20e376137d","topicName":"油库","isshow":true,"title":"油库","num":0,"unit":"家","color":"var(--t-white)"},{"hasOperateColumn":false,"entityCode":"tag_yztgdy_1618381967642","entityName":"一张图-固定源","topicCode":"0dac088-c76f-4aae-b1aa-5e4aaf16a799","topicName":"道路","isshow":false,"title":"道路","num":0,"unit":"家","color":"var(--t-white)"},{"hasOperateColumn":false,"entityCode":"tag_yztgdy_1618381967642","entityName":"一张图-固定源","topicCode":"f15281b6-002c-4820-bcd6-6b2dc35f0c31","topicName":"黑烟车","isshow":false,"title":"黑烟车","num":0,"unit":"家","color":"var(--t-white)"}],
   timeout: {},
   checkedIds: "",
   dispatchUrl: "http://19.130.161.126:8888/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1",
   isShowOperateColumn: false,
   listQueryParams: "{}",
   tabQueryParams: {},
   activeTab: {"value":"","name":"","entityCode":""},
   sceneList: [],
   sourceParmasState: {},
   enterList: [],
   tagJson: "{}",
   bufferLayers: "['涉气企业', '用电企业', '排放清单', '自动监控企业', '排污许可企业', '散乱污企业', '生物质锅炉', '建筑工地', '物料堆场', '涉VOC企业在线监测', '餐饮企业', '汽修企业', '加油站']",
   argsStr: "",
   bufferLen: 1,
   MONITOR_MONTH: "",
   pointInfo: {},
   alarmMonthTotal: "",
   alarmContent: "暂无数据",
   alarmTitle: "-",
   parentParams: {"POINT_CODE":"","aqiLevel":"","primPollute":"","polluteLevel":"","lon":"","lat":"","pTime":"","cTime":"","cHour":"","prediction":"","forward":"","height":""},
   weatherIndexSelectArr: [],
   weatherIndexList: [{"label":"风场","name":"风场"},{"label":"温度","name":"温度"},{"label":"风速","name":"风速"},{"label":"气压","name":"气压"}],
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
            default: {"width":"410px","height":"151px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"254px","borderDirection":"all","position":"unset","background":"rgba(20, 112, 204, 0.3)","fillType":"color","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"暂无数据",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"151px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"254px","borderDirection":"all","position":"unset","background":"rgba(20, 112, 204, 0.3)","fillType":"color","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"#909399","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"12px","lineHeight":"12px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tButtonx0x2: {
defaultStyle: {
            default: {"width":"70px","height":"32px","backgroundColor":"var(--business-btn-default)","fontSize":"14px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"250px","top":"411px"},
            
            },
 default: { 
 
label:"标签筛选",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"70px","height":"32px","backgroundColor":"var(--business-btn-default)","fontSize":"14px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"250px","top":"411px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"410px","height":"188px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","left":"1px","top":"55px","position":"unset"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-28/5b83ceeba3ed47ff9c3db1435d3f1e8e.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"410px","height":"188px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","left":"1px","top":"55px","position":"unset"}}}, 
 },
},
tListCardx0x4: {
defaultStyle: {
            default: {"width":"410px","height":"151px","position":"unset","left":"0px","top":"253px","lineHeight":"18px","animationName":"","paddingRight":"8px","paddingLeft":"8px","backgroundColor":"var(--business-show-bg30)","paddingTop":"8px","paddingBottom":"8px","min-height":"82px"},
            
            },
 default: { 
 
data:[],
spacingX:8,
col:4,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":""},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"151px","position":"unset","left":"0px","top":"253px","lineHeight":"18px","animationName":"","paddingRight":"8px","paddingLeft":"8px","backgroundColor":"var(--business-show-bg30)","paddingTop":"8px","paddingBottom":"8px","min-height":"82px"}},"itemWrapper":{"default":{"height":"66px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","backgroundColor":"var(--business-show-bg50)"}},"num":{"default":{"fontSize":"24px","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"14px","color":"var(--t-white)","marginTop":"0px","textOverflow":"ellipsis"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"17px"}},"numBox":{"default":{"marginTop":"6px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"alignItems":"center","marginLeft":"8px","display":"flex","flexDirection":"column"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"410px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"243px","left":"1px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"243px","left":"1px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tTablex0x6: {
defaultStyle: {
            default: {"width":"410px","height":"349px","position":"unset","left":"0px","top":"452px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":""},
            
            },
 default: { 
 
height:"360px",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":" ","type":"state","key":"","stateKey":"isCheck","width":"30PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"24PX","height":"24PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--business-theme)"},"cellStyle":{"cursor":"pointer"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-03-07/454b453f41b84c6097492361373088bd.png)","backgroundImage":"var(--business-checkbox-checked)","backgroundSize":"100% 100%","cursor":"pointer","transform":"translate(11px, 3px)","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":"","cursor":"pointer"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"var(--business-checkbox)","backgroundSize":"100%","cursor":"pointer","transform":"translate(11px, 3px)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"定位","type":"default","key":"","stateKey":"canPosition","width":"40PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"0"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"var(--business-position)"},"cellStyle":{"background":"rgba(255, 0, 0, 1)"}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","filter":"grayscale(1)","backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"企业名称","type":"default","key":"DATA_NAME","stateKey":"","width":"290PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX","display":"block"}},"infoPosition":"left"},{"label":"操作","type":"default","key":"operation","stateKey":"","width":"50PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--business-theme)"},"cellStyle":{"cursor":"pointer"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"349px","position":"unset","left":"0px","top":"452px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":""}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tComponentx0x7: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"234px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"33px","top":"5px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
            
            },
 default: { 
 
label:"轨迹缓冲区内企业名单",
editable:false,
cStyle:{"wrapper":{"default":{"width":"234px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"33px","top":"5px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"330px","top":"411px","cursor":"pointer","animationName":"","fontSize":"14px"},
            
            },
 default: { 
 
tip:false,
label:"批量派发",
active:false,
cStyle:{"wrapper":{"default":{"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"330px","top":"411px","cursor":"pointer","animationName":"","fontSize":"14px"}}}, 
 },
},
tRectx0x10: {
defaultStyle: {
            default: {"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"330px","top":"410px","cursor":"no-drop","animationName":"","fontSize":"14px"},
            
            },
 default: { 
 
tip:false,
label:"批量派发",
active:false,
cStyle:{"wrapper":{"default":{"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"330px","top":"410px","cursor":"no-drop","animationName":"","fontSize":"14px"}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"17px","top":"118px"},
            
            },
 default: { 
 
label:"轨迹方向：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"17px","top":"118px"}}}, 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"17px","top":"172px","animationName":""},
            
            },
 default: { 
 
label:"缓冲区：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"17px","top":"172px","animationName":""}}}, 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"17px","top":"145px","animationName":""},
            
            },
 default: { 
 
label:"高度：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"17px","top":"145px","animationName":""}}}, 
 },
},
tTextx0x15: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"17px","top":"80px","animationName":""},
            
            },
 default: { 
 
label:"半径：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"17px","top":"80px","animationName":""}}}, 
 },
},
tRadiox0x16: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justify-content":"center","width":"256px","height":"20px","position":"unset","left":"90px","top":"115px","animationName":"","textAlign":"left","justifyContent":"flex-start","flexDirection":"row","flexWrap":"nowrap"},
            
            },
 default: { 
 
options:[{"label":"back","value":"后向溯源","disabled":false},{"label":"front","value":"前向追踪","disabled":false}],
active:"back",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justify-content":"center","width":"256px","height":"20px","position":"unset","left":"90px","top":"115px","animationName":"","textAlign":"left","justifyContent":"flex-start","flexDirection":"row","flexWrap":"nowrap"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"4px","fontSize":"14px","lineHeight":"14px"},"active":{"color":"rgba(255, 255, 255, 1)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","fontSize":"16px","lineHeight":"16px"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"itemWrapper":{"default":{"marginRight":"12px","cursor":"pointer"}},"radioButton":{"default":{"fontSize":"16px","lineHeight":"16px"}}}, 
 },
},
tRadiox0x17: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justify-content":"center","width":"256px","height":"20px","position":"unset","left":"90px","top":"169px","animationName":"","textAlign":"left","justifyContent":"flex-start","flexDirection":"row","flexWrap":"nowrap"},
            
            },
 default: { 
 
options:[{"label":"union","value":"全部缓冲区","disabled":false},{"label":"inner","value":"缓冲交界区","disabled":false}],
active:"union",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justify-content":"center","width":"256px","height":"20px","position":"unset","left":"90px","top":"169px","animationName":"","textAlign":"left","justifyContent":"flex-start","flexDirection":"row","flexWrap":"nowrap"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"4px","fontSize":"14px","lineHeight":"14px"},"active":{"color":"rgba(255, 255, 255, 1)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","fontSize":"16px","lineHeight":"16px"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"itemWrapper":{"default":{"marginRight":"12px","cursor":"pointer"}},"radioButton":{"default":{"fontSize":"16px","lineHeight":"16px"}}}, 
 },
},
tCheckboxx0x18: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"232px","height":"22px","position":"unset","left":"88px","top":"142px","animationName":"","backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"2px"},
            
            },
 default: { 
 
data:[{"label":"10m","value":"10","disabled":false},{"label":"500m","value":"500","disabled":false},{"label":"1000m","value":"1000","disabled":false}],
active:["10","500","1000"],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"232px","height":"22px","position":"unset","left":"88px","top":"142px","animationName":"","backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"2px"}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"2px","fontSize":"14px"}},"itemWrapper":{"default":{"marginRight":"16px","cursor":"pointer"}}}, 
 },
},
tCheckboxx0x19: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"89px","height":"22px","position":"unset","left":"31px","top":"204px","animationName":"","backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"2px"},
            
            },
 default: { 
 
data:[{"label":"一面山","value":"yms","disabled":false}],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"89px","height":"22px","position":"unset","left":"31px","top":"204px","animationName":"","backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"2px"}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"2px","fontSize":"14px"}},"itemWrapper":{"default":{"marginRight":"16px","cursor":"pointer"}}}, 
 },
},
tRectx0x20: {
defaultStyle: {
            default: {"width":"85px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"310px","top":"199px","cursor":"pointer","animationName":"","fontSize":"14px","letterSpacing":"1px"},
            
            },
 default: { 
 
tip:false,
label:"开始分析",
active:false,
cStyle:{"wrapper":{"default":{"width":"85px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"310px","top":"199px","cursor":"pointer","animationName":"","fontSize":"14px","letterSpacing":"1px"}}}, 
 },
},
tSearchx0x21: {
defaultStyle: {
            default: {"width":"260px","height":"32px","position":"unset","left":"89px","top":"72px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":"","paddingLeft":"10px","fontSize":"14px"},
            
            },
 default: { 
 
type:"number",
inputValue:3,
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入",
clearable:true,
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
cStyle:{"wrapper":{"default":{"width":"260px","height":"32px","position":"unset","left":"89px","top":"72px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":"","paddingLeft":"10px","fontSize":"14px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"14px"}},"prefix":{"default":{"color":"var(--business-text-avianize)","fontSize":"0px"}}},
hasSearchBtn:false, 
 },
},
tTextx0x22: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-font-color-gy1)","fontSize":"14px","position":"unset","left":"362px","top":"82px","lineHeight":"14px"},
            
            },
 default: { 
 
label:"km",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-font-color-gy1)","fontSize":"14px","position":"unset","left":"362px","top":"82px","lineHeight":"14px"}}}, 
 },
},
tRectx0x23: {
defaultStyle: {
            default: {"width":"410px","height":"151px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"254px","borderDirection":"all","position":"unset","background":"rgba(20, 112, 204, 0.3)","fillType":"color"},
            
            },
 default: { 
 
tip:false,
label:"加载中...",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"151px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"254px","borderDirection":"all","position":"unset","background":"rgba(20, 112, 204, 0.3)","fillType":"color"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x24: {
defaultStyle: {
            default: {"width":"410px","height":"364px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"449px","borderDirection":"all","position":"unset","animationName":"","background":"rgba(20, 112, 204, 0.3)","fillType":"color"},
            
            },
 default: { 
 
tip:false,
label:"加载中...",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"364px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"449px","borderDirection":"all","position":"unset","animationName":"","background":"rgba(20, 112, 204, 0.3)","fillType":"color"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const getProvider = () => {
const rootData = inject('sourceParmasState');
// console.log(rootData,'sourceParmasState'); // 接收到的值

state.sourceParmasState = rootData;

// {
//     "pointCode": "440306023000002",
//     "pointType": "4",
//     "isShowAlarmFlag": true,
//     "alarmTime": "2021-03-20 23",
//     "traceTime": "2021-03-20 11",
//     "count_id": "D08E60290BE515B5E0538500A8C01116",
//     "aqiLevel": "1",
//     "primPollute": "PM10",
//     "polluteLevel": "良",
//     "dateType": "HOUR",
//     "POINT_CODE": "440306023000002",
//     "lon": "113.847061",
//     "lat": "22.718378",
//     "REGION_CODE": "440306023000002",
//     "endTime": "2021-03-20 11",
//     "COUNT_ID": "D08E60290BE515B5E0538500A8C01116"
// }
};
const initPage = (data) => {
// 记录溯源点位完整信息
state.airSourceTraceData = data;
// 更新溯源点位数据
state.pointValue = JSON.stringify(data.bufferLayerPoly);
// 开启卡片加载中动画
state.cardLoading = true;
// 开启列表加载中动画
state.listLoading = true;
// 获取卡片数据（列表数据需要在获取完卡片数据后模拟选中第一个卡片后获取）
apiRegistry.getCardDataCopy.request();
};
const unionShape = (bufferLen,lat,lon,data) => {
// 将图形缓存并合并成一个，三条线加中心点缓冲
// console.log(2056, data)

function createShape(rings) {
  const path = [];
  for (let j = 0; j < rings[0].length; j++) {
    path.push([rings[0][j][0], rings[0][j][1]]);
  }
  return turf.lineString(path);
}

// var cicleRate = sourceLayer.defaultCicleBufferRate;
const cicleRate = 1;
const gs = data.featureSet.features || [];
let firstShape = createShape(gs[0].geometry.paths);

firstShape = turf.buffer(firstShape, bufferLen, {
  units: 'kilometers'
});

for (let i = 1; i < gs.length; i++) {
  const g = gs[i];
  const ring = g.geometry.paths;
  let shp1 = createShape(ring);
  shp1 = turf.buffer(shp1, bufferLen, {
    units: 'kilometers'
  });
  // console.log(8952, firstShape, shp1)
  firstShape = turf.union(firstShape, shp1);
}

const point1 = turf.point([Number(lon), Number(lat)]);
const bufferedPoint = turf.buffer(point1, bufferLen * cicleRate, {
  units: 'kilometers'
});
// console.log(256, firstShape, bufferedPoint)
firstShape = turf.union(firstShape, bufferedPoint);

const ring0 = firstShape.geometry.coordinates;

return ring0;
};
const getLayerBufferParamsByPollutant = (pollutants) => {
const config = {
  layers: [],
  buffer_len: 1
};
if (pollutants === "PM2.5") {
  // 显示站点周边 1公里内+轨迹线1公里内，排放烟粉尘的工业企业（排放清单+自动监控+排污许可+散乱污企业）、物料堆场、建筑工地、市政道路工程、裸露地面、路网车流量最大的道路	
  config.layers = ['排放清单', '自动监控企业', '排污许可企业', '散乱污企业', '建筑工地', '物料堆场', '市政道路工程', '裸露地面', '路网车流量'];
} else if (pollutants === "PM10") {
  // 显示站点周边3公里内+轨迹线3公里内，物料堆场、建筑工地、市政道路工程、裸露地面、路网车流量最大的道路					
  config.layers = ['建筑工地', '物料堆场', '市政道路工程', '裸露地面', '路网车流量'];
  config.buffer_len = 3;
} else if (pollutants === "NO2") {
  // 显示站点周边 1公里内+轨迹线1公里内，排放氮氧化物的工业企业（排放清单+自动监控+排污许可+散乱污企业）、非道路机械、路网车流量最大的道路					
  config.layers = ['排放清单', '自动监控企业', '排污许可企业', '散乱污企业', '非道路机械', '路网车流量'];
} else if (pollutants === "SO2") {
  // 显示站点周边 1公里内+轨迹线1公里内，排放二氧化硫的工业企业（排放清单+自动监控+排污许可+散乱污企业）、燃料为燃煤的企业					
  config.layers = ['排放清单', '自动监控企业', '排污许可企业', '散乱污企业']; //少燃料为燃煤的企业
} else if (pollutants === "O3") {
  // 显示站点周边 1公里内+轨迹线1公里内，排放氮氧化物的工业企业（排放清单+自动监控+散乱污企业）、排污许可里排放类型为油烟的企业、非道路机械、路网车流量最大的道路、涉VOC在线监测企业、餐饮企业、汽修企业、加油站	
  config.layers = ['排放清单', '自动监控企业', '散乱污企业', '涉VOC企业在线监测', '餐饮企业', '汽修企业', '加油站']; //缺少 排污许可里排放类型为油烟的企业  非道路机械、路网车流量最大的道路
} else if (pollutants === "CO") {
  // 显示站点周边 1公里内+轨迹线1公里内，排污许可证里排放一氧化碳的企业、生物质锅炉、燃料为燃煤的企业		
  config.layers = ['生物质锅炉']
}
return config;
};
const handleTableClick = (column,row) => {
console.log('处理表格点击事件', column, row);

if (column.label === '定位') {
  // 给地图发消息
  /* 发送webSocket消息 */
  if (rootData?.sendMessage) {
    // rootData?.sendMessage({
    //   id: guid(true, 'lego'), // 唯一索引
    //   type: "runInteractive", // 消息名称
    //   data: [
    //     {
    //       code: 'CENTER_ENTER',
    //       shareCode: 'CENTER_ENTER',
    //       defaultValue: '',
    //       runtimeValue: row.STANDENTERID
    //     }
    //   ]
    // });
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: "gotoPoint", // 消息名称
      data: {
        longitude: row.LONGITUDE,
        latitude: row.LATITUDE,
      }
    });
  }
} else if (column.label === '操作') {
  // 派发任务
  dispatchTask(row.STANDENTERID);
} else if (column.label === ' ') {
  const item = state.enterList.find((val) => val.STANDENTERID === row.STANDENTERID);
  if (item) {
    // 复选
    // dispatchTask(row.STANDENTERID);
    if (item.isCheck === '0') {
      item.isCheck = '1';
    } else {
      item.isCheck = '0';
    }
  }
  // 更新勾选状态
  state.checkedIds = state.enterList
    .filter((val) => val.isCheck === '1')
    .map((val) => val.STANDENTERID)
    .join(',');
}
};
const clickSceneCard = (item) => {
// 更新场景名
state.activeTab.name = item.title;
// 更新场景编码
state.activeTab.value = item.TAG_TOPIC_CODE;
// 更新实体编码
state.activeTab.entityCode = item.TAG_ENTITY_CODE;
state.tagJson = '{}';
// 将选中的标签数据存到本地存储中，标签筛选面板的iframe好获取
localStorage.setItem('airTraceSourceActiceTab', state.activeTab.value);
console.log(item, state.activeTab.value, 8889)

try {
  // const listQueryParams = JSON.parse(state.queryJson);

  // listQueryParams.query.bool.filter[0].term['DATA_TYPE.keyword'] = state.activeTab.name;

  // state.listQueryParams = JSON.stringify(listQueryParams);
  // state.queryJson = JSON.stringify(listQueryParams);
  // 是否展示操作列
  state.isShowOperateColumn = item.hasOperateColumn;

  // 获取列表数据
  // apiRegistry.getEnterList.request();
  getListData();
  // getListParams(state.airSourceTraceData);
} catch (err) {
  console.error(err, '列表查询参数解析失败');
}

// 更新标签筛选数据
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateFitlerPanelData',  // 消息类型名称
    data: {
      topicCode: state.activeTab.value
    }
  }
);
};
const dispatchTask = (id) => {
/**
 * 派发任务
 */

// 记录行ID
localStorage.setItem('pointIds', id);
window.open(state.dispatchUrl);
};
const handleAnalysis = () => {
rootData.rootSocket.emit('message', {
  type: 'showAirSourceTrace',
  room: global.socketRoom,
  data: [
    {
      shareCode: "showAirSourceTrace",
      runtimeValue: state?.sourceParmasState?.componentSourceParmas?.POINT_CODE || global.warningRightPointCode || "",
      pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
      isEnters: true,
      traceTime: global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 00',
      layerName: global.businessDialog.dialogParmas.layerName,
      forward: state.selectedParams.direction === "front",
      height: state.selectedParams.altitude.join(','),
      pointBufferLen: state.selectedParams.radius,
      bufferType: state.selectedParams.buffer,
      isFilterByMount: state.ymsStatus
    }]
});
};
const getInputValue = (value) => {
let data = 0
if (Number(value) < 1) {
  data = 1
} else if (Number(value) > 10) {
  data = 10
} else {
  data = value
}
state.selectedParams.radius = data

};
const handleTagSearch = () => {
console.log(state.tagParams);
state.isShowTagFilter = false;
global.tagParams = state.tagParams;
};
const handleListParams = (data) => {
debugger
const query = {
  _source: [
    "DATA_PKID",
    "DATA_NAME",
    "TAG_TOPIC_CODE",
    "TAG_TOPIC_NAME",
    "LONGITUDE",
    "LATITUDE",
    "DATA_TYPE",
    "STANDENTERID_KEY"
  ],
  size: 1500,
  query: {
    bool: {
      must: [
        {
          match_all: {}
        }
      ],
      filter: [
        {
          // 对应的是标签栏选中的标签的名称。因为目前只有企业能进行筛选，所以写死了
          // "term": { 'DATA_TYPE.keyword': '企业' },
          "term": { 'DATA_TYPE.keyword': state.activeTab.name },
        }
      ],
      should: [
        {
          geo_shape: {
            location: {
              shape: {
                type: "polygon",
                coordinates: [data]
              },
              relation: "within"
            }
          }
        },
        {
          geo_shape: {
            location_poly: {
              shape: {
                type: "polygon",
                coordinates: [data]
              },
              relation: "intersects"
            }
          }
        }
      ],
      minimum_should_match: 1
    }
  }
};

const selectedTag = JSON.parse(global.waterGlobalVariables.sourceApportionment.selectedTagJson);

const arr = Object.entries(selectedTag).map(([tagKey, tagVal]) => {
  const tagValArr = tagVal.split('$');
  
  return {
    bool: {
      should: tagValArr.map((val) => ({
        "term": {
          [`${tagKey}.keyword`]: val
        }
      }))
    }
  }
})

query.query.bool.filter = [
  query.query.bool.filter[0],
  ...arr
];

state.queryJson = JSON.stringify(query)
};
const getListParams = (data) => {
console.log(data, 'data0000000000000000')
// 处理请求参数
// handleListParams(data.bufferLayerPoly?.[0]); 
state.pointValue = JSON.stringify(data.bufferLayerPoly);
// state.pointValue = data.bufferLayerPoly;
// console.log('state.queryJson', state.queryJson)
// 获取卡片数据
// apiRegistry.getCardDataCopy.request();
// 获取企业列表数据
getListData()
// apiRegistry.getEnterList.request();
};
const getListData = () => {
// 开启列表加载中动画
state.listLoading = true;
const params = new URLSearchParams();
params.append('tagJson', state.tagJson);
params.append('topicCode', state.activeTab.value);
params.append('locationField', 'location');
params.append('useGisShape', 'false');
params.append('pointValue', state.pointValue);
params.append('gisType', 'geo_polygon');
params.append('REGION_CODE', global.regionaQuery.regionCode);
params.append('hasGather', 'false');
params.append('HasAllTag', 'true');
params.append('ENTITY_CODE', state.activeTab.entityCode);
params.append('pageSize', '2000');
params.append('pageNum', '1');
// params.append('sourcefields', 'DATA_TYPE,DATA_NAME,DATA PKID,LATITUDE,LONGITUDE,STANDENTERID');
// 清空企业列表
state.enterList = [];
axios({
  method: 'post',
  url: `${global.foshanServiceBaseUrl}${global.serviceBasePath}&interfaceId=8b5ca6a3009f750b5b1f19a415589682`,
  data: params,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  // 注意：axios 默认不支持 crossDomain 配置项（那是 jQuery 的）
  // 跨域由浏览器和服务器 CORS 控制，只要服务器允许即可
})
  .then(response => {
    const data = response.data;
    console.log(data, '----9999---')
    if (response.status === 200 && Array.isArray(data?.page?.list)) {
      state.enterList = data?.page?.list.map((val) => ({
        ...val,
        canPosition: val.LONGITUDE && val.LATITUDE ? 'true' : 'false', // 是否能定位
        operation: '派发', // 操作
        isCheck: '0', // 1已勾选，0未勾选
      }));

      sendMsgToMapUpdateAnalysisLayerStatus(state.enterList.map((val) => ({
        _source: {
          ...val,
          DATA_NAME: val.DATA_NAME,
          DATA_TYPE: val.DATA_TYPE,
          LONGITUDE: val.LONGITUDE,
          LATITUDE: val.LATITUDE,
          STANDENTERID_KEY: val?.STANDENTERID || val?.id,
        }
      })));
    } else {
      sendMsgToMapUpdateAnalysisLayerStatus([]);
    }
  })
  .catch(error => {
    console.log(error);
  }).finally(() => {
    // 结束列表加载状态
    state.listLoading = false;
  });

// // 开启列表加载中动画
// state.listLoading = true;
// const params = new URLSearchParams();
// params.append('entityCode', 'tag_gather_yztdqsy_1735090881279');
// params.append('queryJson', state.queryJson);
// // 清空企业列表
// state.enterList = [];
// axios({
//   method: 'post',
//   url: `${global.foshanServiceBaseUrl}${global.serviceBasePath}&interfaceId=54c0456d112a15810ddedb11a29c986d`,
//   data: params,
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
//   // 注意：axios 默认不支持 crossDomain 配置项（那是 jQuery 的）
//   // 跨域由浏览器和服务器 CORS 控制，只要服务器允许即可
// })
//   .then(response => {
//     const data = response.data;
//     console.log(data, '----9999---')
//     if (data && data.hits && data.hits.hits && data.hits.hits.length > 0) {
//         const { hits } = response?.data?.hits;

//         state.enterList = hits.map(item => item._source).map(i => {
//           return {
//             ...i,
//             operation: '派发',
//             isCheck: '0'
//           }
//         })
//         // 更新地图
//         sendMsgToMapUpdateAnalysisLayerStatus(hits);
//         console.log(hits, 77789)
//     } else {
//       state.enterList = []
//       // 更新地图
//         sendMsgToMapUpdateAnalysisLayerStatus([]); 
//     }
//   })
//   .catch(error => {
//     console.log(error);
//   }).finally(() => {
//     // 结束列表加载状态
//     state.listLoading = false;
//   });


};
const sendMsgToMapUpdateAnalysisLayerStatus = (data) => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateAirSourcePollutionAnalysisLayerStatus',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      visible: true,
      data: data
    }
  }
);
};
const removeFilterTag = () => {
localStorage.removeItem('airFilterTag')
localStorage.removeItem('airTraceSourceActiceTab')
};
const watchTagJson = () => {
watch(() => global.waterGlobalVariables.sourceApportionment.selectedTagJson, () => {
debugger
  const params = JSON.parse(state.queryJson)

  console.log(params, '_________________');
  // params.query.bool.filter[0].term.tagJson = global.waterGlobalVariables.sourceApportionment.selectedTagJson;
  // state.queryJson = JSON.stringify(params);

  const selectedTag = JSON.parse(global.waterGlobalVariables.sourceApportionment.selectedTagJson);

  const selectedTagKeys = Object.keys(selectedTag);

  if (selectedTagKeys.length) {
    const arr = selectedTagKeys.map((tagKey) => {
      return {
        "term": {
          [`${tagKey}.keyword`]: selectedTag[tagKey]
        }
      }
    })

    params.query.bool.filter = [
      ...params.query.bool.filter,
      ...arr
    ];
  } else {
    
  }
  

  state.queryJson = JSON.stringify(params);

  // 更新列表数据
  getListData();

}, {
  deep: true,
})
};
const saveFilterTag = (data) => {
try {
  console.log(data, 'filterTag66');
  state.tagJson = JSON.stringify(data);
  // 处理逻辑
  localStorage.setItem('airFilterTag', JSON.stringify(data))
  // 关闭弹窗
  global.isShowWarningTagFilter = false;
  global.waterGlobalVariables.sourceApportionment.activeTabName = 'pollutionAnalysisComponent';
  // global.waterGlobalVariables.sourceApportionment.selectedTagJson = JSON.stringify(data.data);
  rootData.rootEmit(
    // 固定的消息名称，不能修改
    'rootData:change',
    {
      // 全局变量的键名
      key: 'waterGlobalVariables.sourceApportionment.selectedTagJson',
      // 将要修改的全局变量的键值
      value: JSON.stringify(data)
    }
  );

  // 关闭搜索面板
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'changeTagFilterPanelVisible',  // 消息类型名称
      data: {                   // 消息内容，对象格式
        visible: false,
      }
    }
  );

  getListData(); // 参数注意修改
} catch (err) {
  console.log(err);
}
};
const testaaa = (data) => {
console.log(data, 55567)
};
const watchPointValueAndRegion = () => {
// 监听变量，调取接口
watch(() => [state.pointValue, global.regionaQuery.regionCode], async (newVal, oldVal) => {
  if (!oldVal[0] || (newVal[0] === oldVal[0] && newVal[1] && oldVal[1])) {
    return;
  }
  // 开启卡片加载中动画
  state.cardLoading = true;
  // 获取卡片数据
  apiRegistry.getCardDataCopy.request();
}, {
  deep: true
});
};
const initShowAirSourceTrace = () => {
// rootData.rootOn('rootSocket:change', (data) =>{
// // tab切换：发送溯源消息
//     if (data.type === 'airTraceabilityTabSwitch') {
//       console.log('污染分析-show')
//       // 处理逻辑
//       handleAnalysis();
//     }
// });


};
const handleCheck = (data) => {

// 获取两个数组的差集
function diffArray(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let diff = [...arr1.filter(x => !set2.has(x)), ...arr2.filter(x => !set1.has(x))];
  return diff;
}

// 叠加或取消的气象指标
const indexValue = diffArray(state.weatherIndexSelectArr, data)[0];
// 发送socket消息: 地图删除专题
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'showWeather', // 消息名称
  data: {
    type: indexValue,
    // 当前值大于上次选中值：显示选中的指标，反之隐藏
    visible: state.weatherIndexSelectArr.length < data.length,
  },
});

// 更新选中值数据
state.weatherIndexSelectArr = data;



};
const updateYmsStatus = (data) => {
if(data.length === 0){
  state.ymsStatus = false
}else{
  state.ymsStatus = true
}
};
const oncellClick1734608241064 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(column,row);
};
const onclick1761120647351 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'isShowWarningTagFilter',
                    value:true,
                    data: {
                      isShowWarningTagFilter: true
                    },
                  });
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeTagFilterPanelVisible", // 消息名称
data: {"visible":true}, // 发送的数据
});
};
const oncardClick1735029005919 = (item) => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'waterGlobalVariables.sourceApportionment.selectedTagJson',
                    value:'{}',
                    data: {
                      waterGlobalVariables:{sourceApportionment:{selectedTagJson: '{}'}}
                    },
                  });
// 执行自定义方法
clickSceneCard(item);
};
const oncellClick1735184769666_0_0 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(column,row);
};
const onclick1735205190641 = () => {
// 执行自定义方法
dispatchTask(state.checkedIds);
};
const onchange1740720896505 = (data,selectOption) => {
// 设置变量值
state.selectedParams.direction = selectOption.label;
};
const onchange1740720921561 = (data,selectOption) => {
// 设置变量值
state.selectedParams.buffer = selectOption.label;
};
const onchange1740720873822 = (data) => {
// 设置变量值
state.selectedParams.altitude = data;
};
const onchange1768900934761_0_0 = (data) => {
// 设置变量值
state.ymsSelect = data;
// 执行自定义方法
updateYmsStatus(data);
};
const onclick1740712988309_0_0 = () => {
// 执行自定义方法
handleAnalysis();
};
const oninput1740741929704 = (value) => {
// 设置变量值
state.selectedParams.radius = value;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getEnterList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.serviceBaseUrl","data":"qs.stringify({\"topicCode\":\"state.activeTab.value\",\"locationField\":\"location\",\"useGisShape\":\"false\",\"pointValue\":\"state.pointValue\",\"gisType\":\"geo_polygon\",\"REGION_CODE\":\"global.regionaQuery.regionCode\",\"tagJson\":\"state.tagJson\",\"hasGather\":\"false\",\"HasAllTag\":\"true\",\"ENTITY_CODE\":\"state.activeTab.entityCode\",\"pageSize\":\"2000\",\"pageNum\":\"1\",\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.serviceBaseUrl,"data":qs.stringify({"topicCode":state.activeTab.value,"locationField":"location","useGisShape":"false","pointValue":state.pointValue,"gisType":"geo_polygon","REGION_CODE":global.regionaQuery.regionCode,"tagJson":state.tagJson,"hasGather":"false","HasAllTag":"true","ENTITY_CODE":state.activeTab.entityCode,"pageSize":"2000","pageNum":"1","interfaceId":"8b5ca6a3009f750b5b1f19a415589682"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  "qs.stringify({\"topicCode\":\state.activeTab.value\,\"locationField\":\"location\",\"useGisShape\":\"false\",\"pointValue\":\state.pointValue\,\"gisType\":\"geo_polygon\",\"REGION_CODE\":\global.regionaQuery.regionCode\,\"tagJson\":\state.tagJson\,\"hasGather\":\"false\",\"HasAllTag\":\"true\",\"ENTITY_CODE\":\state.activeTab.entityCode\,\"pageSize\":\"2000\",\"pageNum\":\"1\",\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getEnterList'] = res.data;
                
     // 清空列表数据
state.enterList = [];
// 重置勾选状态
state.checkedIds = '';

const { data } = res;
if (res.status === 200 && Array.isArray(data?.page?.list)) {
  state.enterList = data?.page?.list.map((val) => ({
    ...val,
    canPosition: val.LONGITUDE && val.LATITUDE ? 'true' : 'false', // 是否能定位
    operation: '派发', // 操作
    isCheck: '0', // 1已勾选，0未勾选
  }));
console.log(data, 22333)
}
// 结束列表加载中动画
state.listLoading = false;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空列表数据
state.enterList = [];
// 重置勾选状态
state.checkedIds = '';
      reject(error);
    });
  });
},
              },
// 接口函数
 getSceneData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.serviceBaseUrl","data":"qs.stringify({\"interfaceId\":\"54c0456d112a15810ddedb11a29c986d\",\"queryJson\":\"state.tabQueryParams\",\"entityCode\":\"tag_gather_yztdqsy_1735090881279\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.serviceBaseUrl,"data":qs.stringify({"interfaceId":"54c0456d112a15810ddedb11a29c986d","queryJson":state.tabQueryParams,"entityCode":"tag_gather_yztdqsy_1735090881279"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  "qs.stringify({\"interfaceId\":\"54c0456d112a15810ddedb11a29c986d\",\"queryJson\":\state.tabQueryParams\,\"entityCode\":\"tag_gather_yztdqsy_1735090881279\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getSceneData'] = res.data;
                
     state.sceneList = [];

const { data } = res;
const tabList = data?.aggregations?.groupCount?.buckets;
  debugger;
if (res.status === 200 && Array.isArray(tabList)) {
  const { sceneRawList } = state;
  // 过滤要展示的数据
  const filterItems = sceneRawList.filter((val) => val.isshow);
  // 结果数组
  const resList = [];
  filterItems.forEach((val, index) => {
    // 找到场景数据
    let scene = tabList.find((item) => item.key.indexOf(val.topicCode) > -1);
    /* 若接口返回了当前场景的数据 */
    if (scene) {
      const splitData = scene.key.split('-split-');
      if (splitData.length >= 4) {
        console.log(val, 2223)
        resList.push({
          hasOperateColumn: val.hasOperateColumn, // 是否展示操作列
          entityCode: val.entityCode, // 实体编码
          entityName: val.entityName, // 实体名称
          topicCode: val.topicCode, // 主题编码
          topicName: val.topicName, // 主体名称
          title: val.topicName,
          num: scene.doc_count || '0',
          unit: '家',
          color: 'var(--t-white)',
        });
      }
    } else {
      resList.push({
        hasOperateColumn: val.hasOperateColumn, // 是否展示操作列
        entityCode: val.entityCode, // 实体编码
        entityName: val.entityName, // 实体名称
        topicCode: val.topicCode, // 主题编码
        topicName: val.topicName, // 主体名称
        title: val.title,
        num: '0',
        unit: val.unit,
        color: val.color,
      });
    }

    
    /* 若是第一个元素 */
    if (!index) {
      state.activeTab.value = resList[0].topicCode;
      state.activeTab.name = resList[0].topicName;
      // 是否展示操作列
      state.isShowOperateColumn = resList[0].hasOperateColumn;
    }
  });
  state.sceneList = resList;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.sceneList = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getPointInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"MONITOR_MONTH":"state.MONITOR_MONTH","POINT_CODE":"state.parentParams.POINT_CODE","interfaceId":"a72ff52d8a2db82b4d36c46b63011669"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITOR_MONTH":state.MONITOR_MONTH,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"a72ff52d8a2db82b4d36c46b63011669"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"MONITOR_MONTH":state.MONITOR_MONTH,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"a72ff52d8a2db82b4d36c46b63011669"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPointInfo'] = res.data;
                
     // console.log('获取 站点信息', res);

// 清空原始数据
state.pointInfo = {
  "POINT_CODE": "",
  "POINT_NAME": "",
  "POINT_TYPE": "",
  "LONGITUDE": '',
  "LATITUDE": '',
};

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.pointInfo = data.data;

  state.parentParams.lon = data.data.LONGITUDE;
  state.parentParams.lat = data.data.LATITUDE;
}

console.log('填充后的 站点信息', state.pointInfo);

// {
//     "POINT_CODE": "440306022000001",
//     "POINT_NAME": "沙井街道县控站点",
//     "POINT_TYPE": "4",
//     "LONGITUDE": 113.791291,
//     "LATITUDE": 22.735156
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空原始数据
state.pointInfo = {
  "POINT_CODE": "",
  "POINT_NAME": "",
  "POINT_TYPE": "",
  "LONGITUDE": '',
  "LATITUDE": '',
};
      reject(error);
    });
  });
},
              },
// 接口函数
 getAlarmTotal: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"MONITOR_MONTH":"state.MONITOR_MONTH","POINT_CODE":"state.parentParams.POINT_CODE","interfaceId":"29ed367122058ace783514d180784630"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITOR_MONTH":state.MONITOR_MONTH,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"29ed367122058ace783514d180784630"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"MONITOR_MONTH":state.MONITOR_MONTH,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"29ed367122058ace783514d180784630"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getAlarmTotal'] = res.data;
                
     // console.log('获取 当月报警记录 总数', res);

// 清空原始数据
state.alarmMonthTotal = 0;

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.alarmMonthTotal = data.data.MONTH_ALARM_TOTAL || 0;
}

console.log('填充后的 当月报警记录', state.alarmMonthTotal);

// {
//     "MONTH_ALARM_TOTAL": "59",
//     "MONTH_MAX_TIME": "2021-03-20 21:00:00.0"
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.alarmMonthTotal = 0;
      reject(error);
    });
  });
},
              },
// 接口函数
 getCardDataCopy: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"pointValue\":\"state.pointValue\",\"gisType\":\"geo_polygon\",\"useGisShape\":\"true\",\"locationField\":\"location\",\"hasGather\":\"true\",\"REGION_CODE\":\"global.regionaQuery.regionCode\",\"groupFields\":\"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE\",\"ENTITY_CODE\":\"tag_gather_dqsy_1764420823963\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"pointValue":state.pointValue,"gisType":"geo_polygon","useGisShape":"true","locationField":"location","hasGather":"true","REGION_CODE":global.regionaQuery.regionCode,"groupFields":"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE","ENTITY_CODE":"tag_gather_dqsy_1764420823963","interfaceId":"32fbf72522e1a004b67b5d906410ec8d"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"pointValue\":\state.pointValue\,\"gisType\":\"geo_polygon\",\"useGisShape\":\"true\",\"locationField\":\"location\",\"hasGather\":\"true\",\"REGION_CODE\":\global.regionaQuery.regionCode\,\"groupFields\":\"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE\",\"ENTITY_CODE\":\"tag_gather_dqsy_1764420823963\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardDataCopy'] = res.data;
                
     state.cardNoData = false;
if (res?.data?.groupResult?.length) {
  state.sceneList = res?.data?.groupResult.map(item => {
    return {
      ...item,
      title: item?.DATA_NAME || item?.DATA_TYPE,
      num: item?.doc_count || '0',
      unit: '家',
      color: 'var(--t-white)',
    }
  });

  let activeIndex = 0;

  /* 若有筛选项 */
  // if (global.waterGlobalVariables.sourceApportionment.selectedTagJson && global.waterGlobalVariables.sourceApportionment.selectedTagJson !== '{}') {
  //   // 找到企业的选项（只有企业能支持筛选，其他的不行）
  //   const index = state.sceneList.findIndex((val) => val.title === '企业');

  //   if (index > -1) {
  //     activeIndex = index;
  //   }
  // }
  state.activeTab.name = state.sceneList[activeIndex].DATA_TYPE;

  // handleListParams(state.airSourceTraceData.bufferLayerPoly?.[0]); 

  clickSceneCard(state.sceneList[activeIndex]);
} else {
  state.sceneList = [];
  state.cardNoData = true;
  state.listLoading = false;
}

state.cardLoading = false;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.cardLoading = false;

      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-pollutionAnalysis', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
const onSocketChange8bd1aad481e847838b0b = function (data) {
if(data.type === "sendAirSourceTraceData"){
try{
// 执行自定义方法
initPage(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange8bd1aad481e847838b0b);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange8bd1aad481e847838b0b);
});
/* 接收socket.io消息 */
const onSocketChange40504b19e34b4512a2f3 = function (data) {
if(data.type === "sendAirSourceTraceAnalyData"){
try{
// 执行自定义方法
initPage(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange40504b19e34b4512a2f3);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange40504b19e34b4512a2f3);
});
// 执行自定义方法
getProvider("","");
// 执行自定义方法
watchPointValueAndRegion();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "getCurrentAirSourceResultGeometry", // 消息名称
data: {}, // 发送的数据
});
/* 接收socket.io消息 */
const onSocketChangedb56c4afbf6a4cadb049 = function (data) {
if(data.type === "filterTag"){
try{
// 执行自定义方法
saveFilterTag(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangedb56c4afbf6a4cadb049);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangedb56c4afbf6a4cadb049);
});
onBeforeUnmount(() => {
// 执行自定义方法
removeFilterTag();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "updateAirSourcePollutionAnalysisLayerStatus", // 消息名称
data: {"data":[],"visible":false}, // 发送的数据
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
});
onMounted(() => {
setPageScale('t-l-c-pollutionAnalysis', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initShowAirSourceTrace();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tButtonx0x2ComputedData = computed(() => _.merge({}, componentState.tButtonx0x2.default, componentState.tButtonx0x2?.[state.screenSize]));

 const tImageBasex0x3ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x3.default, componentState.tImageBasex0x3?.[state.screenSize]));

 const tListCardx0x4ComputedData = computed(() => _.merge({}, componentState.tListCardx0x4.default, componentState.tListCardx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tTablex0x6ComputedData = computed(() => _.merge({}, componentState.tTablex0x6.default, componentState.tTablex0x6?.[state.screenSize]));

 const tComponentx0x7ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7.default, componentState.tComponentx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tRectx0x10ComputedData = computed(() => _.merge({}, componentState.tRectx0x10.default, componentState.tRectx0x10?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tTextx0x15ComputedData = computed(() => _.merge({}, componentState.tTextx0x15.default, componentState.tTextx0x15?.[state.screenSize]));

 const tRadiox0x16ComputedData = computed(() => _.merge({}, componentState.tRadiox0x16.default, componentState.tRadiox0x16?.[state.screenSize]));

 const tRadiox0x17ComputedData = computed(() => _.merge({}, componentState.tRadiox0x17.default, componentState.tRadiox0x17?.[state.screenSize]));

 const tCheckboxx0x18ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x18.default, componentState.tCheckboxx0x18?.[state.screenSize]));

 const tCheckboxx0x19ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x19.default, componentState.tCheckboxx0x19?.[state.screenSize]));

 const tRectx0x20ComputedData = computed(() => _.merge({}, componentState.tRectx0x20.default, componentState.tRectx0x20?.[state.screenSize]));

 const tSearchx0x21ComputedData = computed(() => _.merge({}, componentState.tSearchx0x21.default, componentState.tSearchx0x21?.[state.screenSize]));

 const tTextx0x22ComputedData = computed(() => _.merge({}, componentState.tTextx0x22.default, componentState.tTextx0x22?.[state.screenSize]));

 const tRectx0x23ComputedData = computed(() => _.merge({}, componentState.tRectx0x23.default, componentState.tRectx0x23?.[state.screenSize]));

 const tRectx0x24ComputedData = computed(() => _.merge({}, componentState.tRectx0x24.default, componentState.tRectx0x24?.[state.screenSize]));

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
tButtonx0x2ComputedData,
tImageBasex0x3ComputedData,
tListCardx0x4ComputedData,
tRectx0x5ComputedData,
tTablex0x6ComputedData,
tComponentx0x7ComputedData,
tTextx0x8ComputedData,
tRectx0x9ComputedData,
tRectx0x10ComputedData,
tTextx0x12ComputedData,
tTextx0x13ComputedData,
tTextx0x14ComputedData,
tTextx0x15ComputedData,
tRadiox0x16ComputedData,
tRadiox0x17ComputedData,
tCheckboxx0x18ComputedData,
tCheckboxx0x19ComputedData,
tRectx0x20ComputedData,
tSearchx0x21ComputedData,
tTextx0x22ComputedData,
tRectx0x23ComputedData,
tRectx0x24ComputedData,
onclick1761120647351,
oncardClick1735029005919,
oncellClick1735184769666_0_0,
onclick1735205190641,
onchange1740720896505,
onchange1740720921561,
onchange1740720873822,
onchange1768900934761_0_0,
onclick1740712988309_0_0,
oninput1740741929704,
};
},
};