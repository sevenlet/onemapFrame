window.relationAnalysisComponent = {
template: 
`<div id="t-l-c-relationAnalysis" class="t-l-c-relationAnalysis" >` +
`<t-rect v-if="state.listLoading === true" id="t-rect-04fa.ba844241f" class="relationAnalysis-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.listLoading === false" id="t-rect-ba66.a2aff468a" class="relationAnalysis-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.cardNoData === true" id="t-rect-f378.207e0b47d" class="relationAnalysis-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-9709.23bde24b7" class="relationAnalysis-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-0ab3.a19c0437a" class="relationAnalysis-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle">` +
`</t-rect>` +
`<t-list-card-multiple-choice v-if="state.cardLoading === false" id="t-list-card-multiple-choice-2596.f27bf7424" class="relationAnalysis-t-list-card-multiple-choice-0-5"  :c-style="tListCardMultipleChoicex0x5ComputedData.cStyle" :key-word="tListCardMultipleChoicex0x5ComputedData.keyWord" :default-checked="replaceCssVariables(filterData(state.selectedTopics, componentPropBindingMap?.['t-list-card-multiple-choice-2596.f27bf7424']['defaultChecked'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tListCardMultipleChoicex0x5ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.sceneListGroup.other, componentPropBindingMap?.['t-list-card-multiple-choice-2596.f27bf7424']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @card-click="oncardClick1764322825819">` +
`</t-list-card-multiple-choice>` +
`<t-rect v-if="state.cardLoading === true" id="t-rect-82e1.1a78bdcce" class="relationAnalysis-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.cardLoading === true" id="t-rect-562c.8214ac23e" class="relationAnalysis-t-rect-0-7"  :tip="tRectx0x7ComputedData.tip" :label="tRectx0x7ComputedData.label" :active="tRectx0x7ComputedData.active" :c-style="tRectx0x7ComputedData.cStyle">` +
`</t-rect>` +
`<t-list-card-multiple-choice v-if="state.cardLoading === false" id="t-list-card-multiple-choice-c1f5.54fd7efef" class="relationAnalysis-t-list-card-multiple-choice-0-8"  :c-style="tListCardMultipleChoicex0x8ComputedData.cStyle" :key-word="tListCardMultipleChoicex0x8ComputedData.keyWord" :default-checked="replaceCssVariables(filterData(state.selectedTopics, componentPropBindingMap?.['t-list-card-multiple-choice-c1f5.54fd7efef']['defaultChecked'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tListCardMultipleChoicex0x8ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.sceneListGroup.zxjc, componentPropBindingMap?.['t-list-card-multiple-choice-c1f5.54fd7efef']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @card-click="oncardClick1770106093327_0_0">` +
`</t-list-card-multiple-choice>` +
`<t-button v-if="state.activeTab.value !== ''" id="t-button-2397.b3b568691" class="relationAnalysis-t-button-0-9"  :label="tButtonx0x9ComputedData.label" :round="tButtonx0x9ComputedData.round" :plain="tButtonx0x9ComputedData.plain" :disabled="tButtonx0x9ComputedData.disabled" :type="tButtonx0x9ComputedData.type" :size="tButtonx0x9ComputedData.size" :native-type="tButtonx0x9ComputedData.native-type" :c-style="tButtonx0x9ComputedData.cStyle" @click="onclick1761120647351">` +
`</t-button>` +
`<t-scrollable-cards id="t-scrollable-cards-f23d.fa9764949" class="relationAnalysis-t-scrollable-cards-0-10"  :c-style="tScrollableCardsx0x10ComputedData.cStyle" :auto-scroll="tScrollableCardsx0x10ComputedData.autoScroll" :tab="tScrollableCardsx0x10ComputedData.tab" :key-word="tScrollableCardsx0x10ComputedData.keyWord" :default-checked="replaceCssVariables(filterData(state.activeTab.value, componentPropBindingMap?.['t-scrollable-cards-f23d.fa9764949']['defaultChecked'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :speed="tScrollableCardsx0x10ComputedData.speed" :interval="tScrollableCardsx0x10ComputedData.interval" :card-space="tScrollableCardsx0x10ComputedData.cardSpace" :direction="tScrollableCardsx0x10ComputedData.direction" :data-alias="tScrollableCardsx0x10ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.selectedTopicsData, componentPropBindingMap?.['t-scrollable-cards-f23d.fa9764949']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @card-click="oncardClick1764321793704_0_0">` +
`</t-scrollable-cards>` +
`<t-component id="t-component-3c7c.d9e5b9971" class="relationAnalysis-t-component-0-11"  :name="tComponentx0x11ComputedData.name" :c-style="tComponentx0x11ComputedData.cStyle" :src="tComponentx0x11ComputedData.src" :component-name="tComponentx0x11ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-0645.e3c5af32d" class="relationAnalysis-t-text-0-12"  :label="tTextx0x12ComputedData.label" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle">` +
`</t-text>` +
`<t-rect v-if="state.checkedIds !== ''" id="t-rect-f258.31abd13a7" class="relationAnalysis-t-rect-0-13"  :tip="tRectx0x13ComputedData.tip" :label="tRectx0x13ComputedData.label" :active="tRectx0x13ComputedData.active" :c-style="tRectx0x13ComputedData.cStyle" @click="onclick1735205190641">` +
`</t-rect>` +
`<t-rect v-if="state.checkedIds === ''" id="t-rect-caab.15629254d" class="relationAnalysis-t-rect-0-14"  :tip="tRectx0x14ComputedData.tip" :label="tRectx0x14ComputedData.label" :active="tRectx0x14ComputedData.active" :c-style="tRectx0x14ComputedData.cStyle">` +
`</t-rect>` +
`<t-row id="t-row-563c.ec22362cc" class="relationAnalysis-t-row-0-15"  :c-style="tRowx0x15ComputedData.cStyle" :gutter="tRowx0x15ComputedData.gutter" :justify="tRowx0x15ComputedData.justify" :align="tRowx0x15ComputedData.align">` +
`<t-col v-if="state.isShowExterSelect === true" id="t-col-4058.2b4c56e81" class="relationAnalysis-t-col-0-15-0"  :span="tColx0x15x0ComputedData.span" :offset="tColx0x15x0ComputedData.offset" :push="tColx0x15x0ComputedData.push" :pull="tColx0x15x0ComputedData.pull" :c-style="tColx0x15x0ComputedData.cStyle">` +
`<t-iframe id="t-iframe-546c.e0e34bf73" class="relationAnalysis-t-iframe-0-15-0-0"  :src="tIframex0x15x0x0ComputedData.src" :srcdoc="tIframex0x15x0x0ComputedData.srcdoc" :scrolling="tIframex0x15x0x0ComputedData.scrolling" :c-style="tIframex0x15x0x0ComputedData.cStyle">` +
`</t-iframe>` +
`</t-col>` +
`<t-col id="t-col-51ed.447c3d9cc" class="relationAnalysis-t-col-0-15-1"  :span="tColx0x15x1ComputedData.span" :offset="tColx0x15x1ComputedData.offset" :push="tColx0x15x1ComputedData.push" :pull="tColx0x15x1ComputedData.pull" :c-style="tColx0x15x1ComputedData.cStyle">` +
`<t-table v-if="state.listLoading === false" id="t-table-a0d0.258b53cfd" class="relationAnalysis-t-table-0-15-1-0"  :height="tTablex0x15x1x0ComputedData.height" :stripe="tTablex0x15x1x0ComputedData.stripe" :border="tTablex0x15x1x0ComputedData.border" :auto-scroll="tTablex0x15x1x0ComputedData.autoScroll" :speed="tTablex0x15x1x0ComputedData.speed" :columns="tTablex0x15x1x0ComputedData.columns" :data="replaceCssVariables(filterData(state.enterList, componentPropBindingMap?.['t-table-a0d0.258b53cfd']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x15x1x0ComputedData.defaultSort" :c-style="tTablex0x15x1x0ComputedData.cStyle" @cell-click="oncellClick1735184769666_0_0">` +
`</t-table>` +
`</t-col>` +
`</t-row>` +
`<t-text-common v-if="state.cardLoading === false" id="t-text-common-ef14.9ffc7e2ca" class="relationAnalysis-t-text-common-0-16"  :label="tTextCommonx0x16ComputedData.label" :editable="tTextCommonx0x16ComputedData.editable" :c-style="tTextCommonx0x16ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common v-if="state.cardLoading === false" id="t-text-common-f613.add4e1008" class="relationAnalysis-t-text-common-0-17"  :label="tTextCommonx0x17ComputedData.label" :editable="tTextCommonx0x17ComputedData.editable" :c-style="tTextCommonx0x17ComputedData.cStyle">` +
`</t-text-common>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-04fa.ba844241f":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-ba66.a2aff468a":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f378.207e0b47d":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-9709.23bde24b7":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-0ab3.a19c0437a":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-multiple-choice-2596.f27bf7424":{"attributeName":"tListCardMultipleChoicex0x5","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-rect-82e1.1a78bdcce":{"attributeName":"tRectx0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-562c.8214ac23e":{"attributeName":"tRectx0x7","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-multiple-choice-c1f5.54fd7efef":{"attributeName":"tListCardMultipleChoicex0x8","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-button-2397.b3b568691":{"attributeName":"tButtonx0x9","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-scrollable-cards-f23d.fa9764949":{"attributeName":"tScrollableCardsx0x10","cStyle":{"filters":[]},"autoScroll":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"speed":{"filters":[]},"interval":{"filters":[]},"cardSpace":{"filters":[]},"direction":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-component-3c7c.d9e5b9971":{"attributeName":"tComponentx0x11","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-0645.e3c5af32d":{"attributeName":"tTextx0x12","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f258.31abd13a7":{"attributeName":"tRectx0x13","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-caab.15629254d":{"attributeName":"tRectx0x14","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-563c.ec22362cc":{"attributeName":"tRowx0x15","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-4058.2b4c56e81":{"attributeName":"tColx0x15x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-iframe-546c.e0e34bf73":{"attributeName":"tIframex0x15x0x0","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]}},"t-col-51ed.447c3d9cc":{"attributeName":"tColx0x15x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-table-a0d0.258b53cfd":{"attributeName":"tTablex0x15x1x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-ef14.9ffc7e2ca":{"attributeName":"tTextCommonx0x16","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-f613.add4e1008":{"attributeName":"tTextCommonx0x17","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   sceneListGroup: {"zxjc":[],"other":[]},
   orderBy: "",
   isShowExterSelect: true,
   selectTwoStr: "",
   selectOneStr: "",
   selectTwo: [],
   selectTwoList: [{"value":"1","label":"国控","disabled":false},{"value":"2","label":"省控","disabled":false},{"value":"3","label":"市控","disabled":false},{"value":"4","label":"其他","disabled":false}],
   selectOneList: [{"value":"1","label":"国控","disabled":false},{"value":"2","label":"省控","disabled":false},{"value":"3","label":"市控","disabled":false},{"value":"4","label":"其他","disabled":false}],
   gisFeature: "",
   cardNoData: false,
   selectedTopicsData: [],
   selectedTopics: [],
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
   sourceParmasState: {"componentSourceParmas":{"POINT_CODE":""}},
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
   tabList: [],
   selectedTab: "",
   selectedComponent: "",
   selectOne: ["1","2"],
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
            default: {"width":"410px","height":"500px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"400px","borderDirection":"all","position":"unset","animationName":"","background":"var(--business-show-bg30)","fillType":"color"},
            
            },
 default: { 
 
tip:false,
label:"加载中...",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"500px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"400px","borderDirection":"all","position":"unset","animationName":"","background":"var(--business-show-bg30)","fillType":"color"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"570px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"400px","borderDirection":"all","position":"unset","background":"var(--business-show-bg30)","fillType":"color","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"570px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"400px","borderDirection":"all","position":"unset","background":"var(--business-show-bg30)","fillType":"color","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"410px","height":"240px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"45px","borderDirection":"all","position":"unset","background":"var(--business-show-bg30)","fillType":"color","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"暂无数据",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"240px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"45px","borderDirection":"all","position":"unset","background":"var(--business-show-bg30)","fillType":"color","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"#909399","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-12)","lineHeight":"12px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"410px","height":"168px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"42px","borderDirection":"all","position":"unset","background":"var(--t-pop-card-bg)","fillType":"color","animationName":"","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomRightRadius":"10px","borderBottomLeftRadius":"10px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"168px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"42px","borderDirection":"all","position":"unset","background":"var(--t-pop-card-bg)","fillType":"color","animationName":"","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomRightRadius":"10px","borderBottomLeftRadius":"10px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"410px","height":"228px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"221px","borderDirection":"all","position":"unset","background":"var(--t-pop-card-bg)","fillType":"color","animationName":"","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomRightRadius":"10px","borderBottomLeftRadius":"10px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"228px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"0px","top":"221px","borderDirection":"all","position":"unset","background":"var(--t-pop-card-bg)","fillType":"color","animationName":"","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomRightRadius":"10px","borderBottomLeftRadius":"10px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tListCardMultipleChoicex0x5: {
defaultStyle: {
            default: {"width":"410px","height":"auto","overflowY":"auto","position":"unset","left":"9px","top":"260px","display":"grid","grid-template-columns":"repeat(auto-fill,125.33px)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"410px","height":"auto","overflowY":"auto","position":"unset","left":"9px","top":"260px","display":"grid","grid-template-columns":"repeat(auto-fill,125.33px)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px"}},"cardItem":{"default":{"boxSizing":"border-box","padding":"4px","paddingTop":"2px","background":"var(--business-show-bg30)","width":"125.33px","height":"54px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","display":"block","position":"relative","cursor":"pointer"},"active":{"background":"var(--business-tab-content-active-bg)","width":"125.33px","height":"54px","overflow":"hidden","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(138,210,255,0.8)","borderTop":"1px solid rgba(138,210,255,0.8)","borderRight":"1px solid rgba(138,210,255,0.8)","borderBottom":"1px solid rgba(138,210,255,0.8)","color":""},"hover":{"width":"125.33px","height":"54px","overflow":"hidden","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(138,210,255,0.8)","borderTop":"1px solid rgba(138,210,255,0.8)","borderRight":"1px solid rgba(138,210,255,0.8)","borderBottom":"1px solid rgba(138,210,255,0.8)","color":"var(--business-text-avianize)"}},"cardUnchecked":{"hover":{"background":"var(--business-tab-content-active-bg)","width":"125.33px","height":"54px","overflow":"hidden"},"default":{"backgroundColor":"var(--business--card-default-bg)","width":"125.33px","height":"54px","overflow":"hidden"}},"cardItemLabel":{"default":{"height":"14px","lineHeight":"14px","fontSize":"var(--business-text-size-14)","color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","top":"-21px","position":"relative"},"hover":{"color":"var(--business-text-avianize)"},"active":{"color":"var(--business-text-avianize)"}},"listBody":{"default":{"width":"410px","overflow":"visible","display":"grid","alignItems":"stretch","justifyItems":"stretch","alignContent":"space-around","justifyContent":"space-around","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","height":"auto","grid-template-columns":"repeat(auto-fill,125.33px)"}},"cardItemValueContent":{"default":{"height":"24px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-24)","fontFamily":"DIN-bold","fontWeight":"700","color":"#F9D000"}},"cardItemValueUnit":{"default":{"height":"12px","fontSize":"var(--business-text-size-12)","color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginLeft":"6px","lineHeight":"21px"}},"cardItemValue":{"default":{"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","top":"17px","height":"24px","position":"relative"}},"cardItemLabelContent":{"active":{"color":"var(--business-text-avianize)"},"hover":{"color":"var(--business-text-avianize)"},"default":{"height":"19px","lineHeight":"16px","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"}},"cardItemIcon":{"default":{"position":"absolute","right":"4px","width":"16px","height":"16px","backgroundImage":"var(--multiple-card-unchecked)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","bottom":"4px"},"hover":{"backgroundImage":"var(--multiple-card-checked)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},"active":{"backgroundSize":"contain,contain","-webkit-mask-size":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundPosition":"50% 50%,50% 50%","-webkit-mask-position":"","backgroundImage":"var(--multiple-card-checked)","-webkit-mask-image":""}}},
keyWord:"TAG_TOPIC_CODE",
defaultChecked:[],
dataAlias:{"value":"num","label":"title","icon":"icon","unit":"unit"},
data:[], 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"410px","height":"165px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"-1px","top":"45px","borderDirection":"all","position":"unset","background":"var(--business-show-bg30)","fillType":"color"},
            
            },
 default: { 
 
tip:false,
label:"加载中...",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"165px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"-1px","top":"45px","borderDirection":"all","position":"unset","background":"var(--business-show-bg30)","fillType":"color"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"var(--business-white)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x7: {
defaultStyle: {
            default: {"width":"410px","height":"238px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"1px","top":"211px","borderDirection":"all","position":"unset","background":"var(--business-show-bg30)","fillType":"color","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"加载中...",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"238px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"1px","top":"211px","borderDirection":"all","position":"unset","background":"var(--business-show-bg30)","fillType":"color","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"var(--business-white)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tListCardMultipleChoicex0x8: {
defaultStyle: {
            default: {"width":"410px","height":"auto","overflowY":"auto","position":"unset","left":"9px","top":"85px","display":"grid","grid-template-columns":"repeat(auto-fill,125.33px)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"410px","height":"auto","overflowY":"auto","position":"unset","left":"9px","top":"85px","display":"grid","grid-template-columns":"repeat(auto-fill,125.33px)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","animationName":""}},"cardItem":{"default":{"boxSizing":"border-box","padding":"4px","paddingTop":"2px","background":"var(--business-show-bg30)","width":"128px","height":"54px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","display":"block","position":"relative","cursor":"pointer"},"active":{"background":"var(--business-tab-content-active-bg)","width":"125.33px","height":"54px","overflow":"hidden","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(138,210,255,0.8)","borderTop":"1px solid rgba(138,210,255,0.8)","borderRight":"1px solid rgba(138,210,255,0.8)","borderBottom":"1px solid rgba(138,210,255,0.8)","color":""},"hover":{"width":"125.33px","height":"54px","overflow":"hidden","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(138,210,255,0.8)","borderTop":"1px solid rgba(138,210,255,0.8)","borderRight":"1px solid rgba(138,210,255,0.8)","borderBottom":"1px solid rgba(138,210,255,0.8)","color":"var(--business-text-avianize)"}},"cardUnchecked":{"hover":{"background":"var(--business-tab-content-active-bg)","width":"125.33px","height":"54px","overflow":"hidden"},"default":{"backgroundColor":"var(--business--card-default-bg)","width":"125.33px","height":"54px","overflow":"hidden"}},"cardItemLabel":{"default":{"height":"14px","lineHeight":"14px","fontSize":"var(--business-text-size-14)","color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","top":"-21px","position":"relative"},"hover":{"color":"var(--business-text-avianize)"},"active":{"color":"var(--business-text-avianize)"}},"listBody":{"default":{"width":"410px","overflow":"visible","display":"grid","alignItems":"stretch","justifyItems":"stretch","alignContent":"space-around","justifyContent":"space-around","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","height":"auto","grid-template-columns":"repeat(auto-fill,125.33px)"}},"cardItemValueContent":{"default":{"height":"24px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-24)","fontFamily":"DIN-bold","fontWeight":"700","color":"#F9D000"}},"cardItemValueUnit":{"default":{"height":"12px","fontSize":"var(--business-text-size-12)","color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginLeft":"6px","lineHeight":"21px"}},"cardItemValue":{"default":{"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","top":"17px","height":"24px","position":"relative"}},"cardItemLabelContent":{"active":{"color":"var(--business-text-avianize)"},"hover":{"color":"var(--business-text-avianize)"},"default":{"height":"19px","lineHeight":"16px","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"}},"cardItemIcon":{"default":{"position":"absolute","right":"4px","width":"16px","height":"16px","backgroundImage":"var(--multiple-card-unchecked)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","bottom":"4px"},"hover":{"backgroundImage":"var(--multiple-card-checked)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},"active":{"backgroundSize":"contain,contain","-webkit-mask-size":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundPosition":"50% 50%,50% 50%","-webkit-mask-position":"","backgroundImage":"var(--multiple-card-checked)","-webkit-mask-image":""}}},
keyWord:"TAG_TOPIC_CODE",
defaultChecked:[],
dataAlias:{"value":"num","label":"title","icon":"icon","unit":"unit"},
data:[], 
 },
},
tButtonx0x9: {
defaultStyle: {
            default: {"width":"46px","height":"32px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"276px","top":"470px","zIndex":99,"color":"var(--t-white)"},
            
            },
 default: { 
 
label:"筛选",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"46px","height":"32px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"276px","top":"470px","zIndex":99,"color":"var(--t-white)"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tScrollableCardsx0x10: {
defaultStyle: {
            default: {"width":"259px","height":"30px","borderRadius":"8px","padding":"11px 9px 8px","background":"","position":"unset","left":"1px","top":"470px","backgroundColor":"rgba(255, 255, 255, 0)","display":"flex","flexDirection":"row","alignItems":"stretch","justifyContent":"space-between","paddingLeft":"0px","paddingRight":"0px","marginRight":"0px","marginLeft":"8px","paddingTop":"0px","paddingBottom":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":"","fontSize":"var(--business-text-size-18)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"259px","height":"30px","borderRadius":"8px","padding":"11px 9px 8px","background":"","position":"unset","left":"1px","top":"470px","backgroundColor":"rgba(255, 255, 255, 0)","display":"flex","flexDirection":"row","alignItems":"stretch","justifyContent":"space-between","paddingLeft":"0px","paddingRight":"0px","marginRight":"0px","marginLeft":"8px","paddingTop":"0px","paddingBottom":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":"","fontSize":"var(--business-text-size-18)"}},"itemWrapper":{"default":{"width":"auto","height":"30px","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"8px","paddingRight":"8px","marginLeft":"0px","marginRight":"0px","paddingTop":"0px","paddingBottom":"0px","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","cursor":"pointer","color":"var(--business-white)"},"active":{"background":"var(--business-tab-content-active-bg)","borderRadius":"4px","color":"var(--t-white)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-scroll-tab-active)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit"}},"cardLabel":{"default":{"fontSize":"var(--business-text-size-14)","lineHeight":"14px","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"leftArrowButton":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"24px","height":"30px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingTop":"5px"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","color":"var(--business-theme)"}},"leftArrow":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"hover":{"color":"var(--business-theme)"}},"rightArrowButton":{"default":{"backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","width":"24px","height":"30px","paddingTop":"5px"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","color":"var(--business-theme)"}},"rightArrow":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"hover":{"borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","color":"var(--business-theme)"}},"container":{"default":{"width":"330px","fontSize":"var(--business-text-size-18)"}}},
autoScroll:false,
tab:false,
keyWord:"TAG_TOPIC_CODE",
defaultChecked:"",
speed:3,
interval:0.5,
cardSpace:8,
direction:"left",
dataAlias:{"value":"","label":"title","checked":"checked"},
data:[], 
 },
},
tComponentx0x11: {
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
tTextx0x12: {
defaultStyle: {
            default: {"width":"234px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"33px","top":"5px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""},
            
            },
 default: { 
 
label:"汇水区内关联要素",
editable:false,
cStyle:{"wrapper":{"default":{"width":"234px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"33px","top":"5px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""}}}, 
 },
},
tRectx0x13: {
defaultStyle: {
            default: {"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"328px","top":"470px","cursor":"pointer","animationName":"","fontSize":"var(--business-text-size-14)","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"},
            
            },
 default: { 
 
tip:false,
label:"批量派发",
active:false,
cStyle:{"wrapper":{"default":{"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"328px","top":"470px","cursor":"pointer","animationName":"","fontSize":"var(--business-text-size-14)","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"}}}, 
 },
},
tRectx0x14: {
defaultStyle: {
            default: {"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"328px","top":"470px","cursor":"no-drop","animationName":"","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
tip:false,
label:"批量派发",
active:false,
cStyle:{"wrapper":{"default":{"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"328px","top":"470px","cursor":"no-drop","animationName":"","fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tRowx0x15: {
defaultStyle: {
            default: {"width":"409px","height":"auto","display":"flex","justifyContent":"center","alignItems":"baseline","position":"unset","left":"2px","top":"500px","paddingBottom":"20px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"409px","height":"auto","display":"flex","justifyContent":"center","alignItems":"baseline","position":"unset","left":"2px","top":"500px","paddingBottom":"20px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x15x0: {
defaultStyle: {
            default: {"width":"100px","height":"50px","display":"flex","justifyContent":"center","alignItems":"center","position":"static","top":"0px !important","left":"0px","zIndex":99},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"50px","display":"flex","justifyContent":"center","alignItems":"center","position":"static","top":"0px !important","left":"0px","zIndex":99}}}, 
 },
},
tIframex0x15x0x0: {
defaultStyle: {
            default: {"width":"412px","height":"50px","position":"unset","left":"-2px","top":"329px","pointerEvents":"auto","cursor":"auto"},
            
            },
 default: { 
 
src:"",
srcdoc:"<!--\n * @Description: 外部筛选下拉面板（根据接口 tags.nodeName=\"外部筛选\" 动态生成多选下拉，并发送 filterTag）\n-->\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\" />\n  <title>外部筛选</title>\n  <link href=\"assets/images/favicon.ico\" rel=\"shortcut icon\" />\n\n  <!-- vue -->\n  <script src=\"./resources/vue.min.js\"></script>\n  <!-- socket插件 -->\n  <script src=\"./resources/socket.io.js\"></script>\n  <!-- lodash插件 -->\n  <script src=\"./resources/lodash.min.js\"></script>\n  <!-- element-plus -->\n  <link href=\"./resources/element-plus/element-plus.min.css\" rel=\"stylesheet\" />\n  <script src=\"./resources/element-plus/element-plus.min.js\"></script>\n  <script src=\"./resources/element-plus/zhCn.js\"></script>\n  <!-- mitt（与现有面板保持一致，可选） -->\n  <script src=\"./resources/mitt.min.js\"></script>\n  <!-- axios -->\n  <script src=\"./resources/axios.min.js\"></script>\n\n  <!-- 主题样式 -->\n  <link href=\"./assets/style/themes.css\" rel=\"stylesheet\" />\n\n  <style>\n    body {\n      margin: 0;\n    }\n\n    body,\n    html,\n    #app {\n      height: 100%;\n    }\n\n    /* AI浅色版2 主题变量 */\n    body.AI浅色版2 {\n      --theme-color: #409EFF;\n      --theme-font-color: #303133;\n      --theme-background-color: rgba(255, 255, 255, 0.95);\n      --theme-panel-background-color: rgba(255, 255, 255, 0);\n      --theme-selector-background-color: #fff;\n      --theme-border-color: #dcdfe6;\n      --theme-hover-color: #409EFF;\n      --external-input-bg: #fff;\n      --external-input-border: #dcdfe6;\n      --external-input-text: #303133;\n      --external-input-placeholder: #a8abb2;\n      --external-input-focus-border: #409EFF;\n      --external-caret-color: #a8abb2;\n      --external-tag-bg: rgba(64, 158, 255, 0.1);\n      --external-tag-text: #409EFF;\n      --external-tag-close-color: #909399;\n      --external-close-hover-bg: rgba(64, 158, 255, 0.15);\n      --external-disabled-text: #c0c4cc;\n      --external-option-text: #303133;\n      --external-option-hover-bg: #ecf5ff;\n      --external-option-bg: #fff;\n      --external-option-hover-bg2: #f5f7fa;\n      --external-option-selected-text: #409EFF;\n      --external-option-selected-bg: #ecf5ff;\n      --external-option-border: #e4e7ed;\n      --external-popper-fill: #f5f7fa;\n      --external-popper-text: #606266;\n    }\n\n    /* 蓝色主题变量（沿用标签面板习惯） */\n    body.蓝色版 {\n      --theme-color: #00EEFF;\n      --theme-font-color: #e3f2fd;\n      --theme-background-color: rgba(0, 30, 60, 0.9);\n      --theme-panel-background-color: rgba(21, 57, 155, 0);\n      --theme-selector-background-color: #004FB0;\n      --theme-border-color: #1e88e5;\n      --theme-hover-color: #64b5f6;\n      --external-input-bg: rgba(0, 79, 176, 0.25);\n      --external-input-border: rgba(0, 238, 255, 0.6);\n      --external-input-text: rgba(255, 255, 255, 0.95);\n      --external-input-placeholder: rgba(255, 255, 255, 0.65);\n      --external-input-focus-border: rgba(0, 238, 255, 1);\n      --external-caret-color: rgba(255, 255, 255, 0.85);\n      --external-tag-bg: rgba(0, 79, 176, 0.22);\n      --external-tag-text: rgba(255, 255, 255, 0.95);\n      --external-tag-close-color: rgba(255, 255, 255, 0.95);\n      --external-close-hover-bg: rgba(0, 200, 210, 0.20);\n      --external-disabled-text: rgba(255, 255, 255, 0.75);\n      --external-option-text: #fff;\n      --external-option-hover-bg: rgba(0, 79, 176, 0.45);\n      --external-option-bg: #054192;\n      --external-option-hover-bg2: #043e90;\n      --external-option-selected-text: #00B7FF;\n      --external-option-selected-bg: rgba(0, 79, 176, 0.22);\n      --external-option-border: rgba(0, 238, 255, 0.35);\n      --external-popper-fill: rgba(0, 79, 176, 0.35);\n      --external-popper-text: rgba(255, 255, 255, 0.9);\n    }\n\n    .no-data {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      height: 100vh;\n      max-height: 100vh;\n      color: var(--theme-font-color);\n      font-size: var(--business-text-size-14);\n    }\n\n    /* 顶部蓝条容器：一行最多 2 个下拉，超出自动换行 */\n    .external-filter-bar {\n      box-sizing: border-box;\n      width: 100%;\n      padding: 12px;\n      /* background: rgba(0, 79, 176, 0.25);\n      border: 1px solid rgba(0, 238, 255, 0.35); */\n      border-radius: 6px;\n      display: flex;\n      flex-wrap: wrap;\n      gap: 10px;\n    }\n\n    .external-filter-item {\n      /* 一行最多 2 个下拉（更宽，避免选中后太挤） */\n      flex: 0 0 calc(50% - 5px);\n      width: calc(50% - 5px);\n      /* 允许在窄容器（如 388px）里也保持一行 2 个 */\n      min-width: 0;\n      box-sizing: border-box;\n    }\n\n    /* 388px 容器也要求显示 2 个：不做小屏强制单列 */\n\n    /* 让 el-select 更贴近截图的“蓝色边框” */\n    .external-filter-item .el-select {\n      width: 100%;\n    }\n\n    /* ElementPlus v1(beta) 兼容：优先设置 el-input__inner 背景色（v1 结构里它才是主背景） */\n    .external-filter-item .el-input__inner {\n      background-color: var(--external-input-bg);\n      border: 1px solid var(--external-input-border);\n      border-radius: 4px;\n      height: 32px;\n      line-height: 32px;\n      color: var(--external-input-text);\n      padding-left: 10px;\n      font-size: var(--business-text-size-14);\n    }\n    .external-filter-item .el-input__inner::placeholder {\n      color: var(--external-input-placeholder);\n    }\n    /* v2 wrapper 也顺手兜底（不影响 v1） */\n    .external-filter-item .el-input__wrapper {\n      background: var(--external-input-bg);\n      box-shadow: 0 0 0 1px var(--external-input-border) inset;\n      border-radius: 4px;\n      min-height: 32px;\n    }\n    .external-filter-item .el-select__tags-text {\n      color: var(--external-input-text);\n      font-size: var(--business-text-size-14);\n    }\n    .external-filter-item .el-select__tags-text {\n      overflow: hidden !important;\n    }\n    .external-filter-item .el-select__placeholder {\n      color: var(--external-input-placeholder);\n      font-size: var(--business-text-size-14);\n    }\n    .external-filter-item .el-select .el-select__caret,\n    .external-filter-item .el-select .el-icon {\n      color: var(--external-caret-color);\n    }\n    .external-filter-item .el-input.is-focus .el-input__inner,\n    .external-filter-item .el-input__inner:focus {\n      /* border-color: rgba(0, 238, 255, 1);\n      box-shadow: 0 0 0 1px rgba(0, 238, 255, 1) inset; */\n    }\n\n    /* disabled（暂无数据占位）样式同步：外观与正常一致，只禁用交互 */\n    .external-filter-item .el-select.is-disabled .el-input__inner,\n    .external-filter-item .el-input.is-disabled .el-input__inner {\n      background-color: var(--external-input-bg) !important;\n      border-color: var(--external-input-border) !important;\n      color: var(--external-disabled-text) !important;\n      opacity: 1 !important;\n      cursor: not-allowed;\n    }\n    .external-filter-item .el-select.is-disabled .el-input__inner::placeholder,\n    .external-filter-item .el-input.is-disabled .el-input__inner::placeholder {\n      color: var(--external-disabled-text) !important;\n    }\n    .external-filter-item .el-select.is-disabled .el-select__caret,\n    .external-filter-item .el-input.is-disabled .el-select__caret,\n    .external-filter-item .el-select.is-disabled .el-icon {\n      color: var(--external-disabled-text) !important;\n      opacity: 1 !important;\n    }\n\n    /* 选中标签（tag）样式：参考截图（深色底 + 青色描边/文字 + 可关闭） */\n    /* 去掉多选标签容器滚动条（element-plus@1.0.2-beta.71） */\n    .external-filter-item .el-select__tags {\n      overflow: hidden !important;\n      max-height: none !important;\n    }\n    .external-filter-item .el-select__tags::-webkit-scrollbar {\n      width: 0 !important;\n      height: 0 !important;\n    }\n    .external-filter-item .el-select__tags-text {\n      overflow: hidden !important;\n    }\n\n    .external-filter-item .el-select__tags .el-tag {\n      background: var(--external-tag-bg) !important;\n      border: 0 !important;\n      color: var(--external-tag-text) !important;\n      border-radius: 2px;\n    }\n    .external-filter-item .el-select__tags .el-tag .el-tag__content {\n      color: var(--external-tag-text) !important;\n    }\n    .external-filter-item .el-select__tags .el-tag .el-tag__close {\n      color: var(--external-tag-close-color) !important;\n      border-radius: 2px;\n      padding: 2px;\n      background: transparent !important;\n    }\n    .external-filter-item .el-select__tags .el-tag .el-tag__close:hover {\n      color: var(--external-tag-close-color) !important;\n      background: var(--external-close-hover-bg) !important;\n    }\n\n    /* 下拉面板样式：用 popper-class 做局部覆盖 */\n    /* 注意：ElementPlus 下拉 popper 默认是 is-light（白底），这里用变量 + !important 强制深色 */\n    .external-filter-popper {\n      --el-bg-color-overlay: var(--external-option-bg);\n      --el-fill-color-light: var(--external-popper-fill);\n      --el-border-color-light: var(--external-option-border);\n      --el-text-color-regular: var(--external-popper-text);\n      --el-text-color-primary: var(--external-input-text);\n      background-color: var(--el-bg-color-overlay) !important;\n      border: 1px solid var(--el-border-color-light) !important;\n    }\n    .external-filter-popper.el-popper,\n    .external-filter-popper .el-select-dropdown {\n      background-color: var(--el-bg-color-overlay) !important;\n      border-color: var(--el-border-color-light) !important;\n    }\n    .external-filter-popper .el-select-dropdown__list {\n      padding: 6px 0;\n    }\n    .external-filter-popper .el-select-dropdown__item {\n      color: var(--external-option-text) !important;\n      height: 34px;\n      line-height: 34px;\n      font-size: var(--business-text-size-14);\n    }\n    .external-filter-popper .el-select-dropdown__item.hover,\n    .external-filter-popper .el-select-dropdown__item:hover {\n      background-color: var(--external-option-hover-bg2) !important;\n      color: var(--external-input-text) !important;\n    }\n    .external-filter-popper .el-select-dropdown__item.selected {\n      color: var(--external-option-selected-text) !important;\n      font-weight: 600;\n      background-color: var(--external-option-selected-bg) !important;\n    }\n    /* 强化选中勾选（v1 beta / v2 兼容） */\n    .external-filter-popper .el-select-dropdown__item.selected::after,\n    .external-filter-popper .el-select-dropdown__item.selected .selected {\n      color: var(--external-option-selected-text) !important;\n    }\n  </style>\n</head>\n\n<body class=\"蓝色版\" style=\"background: var(--theme-panel-background-color);\">\n  <div id=\"app\"></div>\n\n  <script>\n    const { createApp, reactive, toRefs, onMounted, onUnmounted, provide, inject, watch } = Vue;\n\n    // 房间号\n    const roomId = localStorage.getItem('lxtSocketRoom');\n\n    // 从父页面 body 同步主题 class\n    const bodyDom = document.querySelector('body');\n    const syncThemeFromParent = () => {\n      try {\n        const parentBody = window.parent.document.body;\n        if (parentBody && bodyDom) {\n          // 取父页面 body 上的主题 class（如 \"AI浅色版2\"、\"蓝色版\" 等）\n          const themeClass = [...parentBody.classList].find(c => c.includes('版'));\n          if (themeClass) {\n            bodyDom.className = themeClass;\n          }\n        }\n      } catch (e) {\n        // 跨域时 fallback 到 localStorage\n        const themeName = localStorage.getItem('lxtTheme');\n        if (bodyDom && themeName) {\n          bodyDom.className = themeName;\n        }\n      }\n    };\n    syncThemeFromParent();\n\n    // 监听父页面 body class 变化（主题切换时实时同步）\n    let parentObserver = null;\n    try {\n      const parentBody = window.parent.document.body;\n      parentObserver = new MutationObserver(() => syncThemeFromParent());\n      parentObserver.observe(parentBody, { attributes: true, attributeFilter: ['class'] });\n    } catch (e) {\n      // 跨域无法监听，忽略\n    }\n\n    // 固定接口参数\n    const EXTERNAL_FILTER_API = {\n      url: 'http://192.168.24.106:10157/service/serviceinterface/search/run.action',\n      interfaceId: '982f4b5298e7d6c89796ffca11f9dacb',\n      token: 'dcp',\n      istree: true,\n    };\n\n    const subjectComponent = {\n      template: `\n        <div class=\"external-filter-bar\">\n          <template v-if=\"filterNodes.length\">\n          <div v-for=\"node in filterNodes\" :key=\"node.tagCode\" class=\"external-filter-item\">\n            <el-select\n              v-model=\"selectedMap[node.tagCode]\"\n              :multiple=\"node.tagValueType === '2'\"\n              clearable\n              :collapse-tags=\"node.tagValueType === '2'\"\n              :collapse-tags-tooltip=\"node.tagValueType === '2'\"\n              popper-class=\"external-filter-popper\"\n              :placeholder=\"node.nodeName\"\n              :ref=\"(el) => setSelectRef(node.tagCode, el)\"\n              @visible-change=\"onSelectVisibleChange(node.tagCode, $event)\"\n              @change=\"onSelectChange\"\n              @clear=\"onSelectChange\"\n            >\n              <el-option\n                v-for=\"opt in (node.range || [])\"\n                :key=\"opt.value\"\n                :label=\"opt.alias\"\n                :value=\"opt.value\"\n              />\n            </el-select>\n          </div>\n          </template>\n          <template v-else>\n            <div class=\"external-filter-item\">\n              <el-select\n                v-model=\"emptySelected\"\n                multiple\n                disabled\n                popper-class=\"external-filter-popper\"\n                placeholder=\"暂无数据\"\n                :ref=\"(el) => setSelectRef('__empty__', el)\"\n                @visible-change=\"onSelectVisibleChange('__empty__', $event)\"\n              />\n            </div>\n          </template>\n        </div>\n      `,\n      setup() {\n        const rootData = inject('root');\n        const global = reactive({\n          ...toRefs(rootData)\n        });\n\n        const state = reactive({\n          filterNodes: [],          // 外部筛选下的 tag 节点列表\n          selectedMap: {},          // { [tagCode]: string[] | string }\n          topicCode: '',            // 由 socket 消息下发，不允许写死\n          pendingSelected: null,    // 暂存外部筛选选中值（下拉未加载时先存，加载完成后应用）\n          emptySelected: [],        // 无数据时占位下拉使用\n        });\n        // 去重：避免 onMounted 兜底与 socket 消息到达导致重复请求\n        let lastLoadedTopicCode = '';\n\n        const isMultiByTagCode = (tagCode) => {\n          const node = state.filterNodes.find((n) => n?.tagCode === tagCode);\n          // 后端约定：tagValueType \"1\" 单选；\"2\" 多选。兜底：默认单选\n          return (node?.tagValueType ?? '1') === '2';\n        };\n\n        const flattenTagNodes = (node, out) => {\n          if (!node) return;\n          if (node.nodeType === 'tag') {\n            out.push(node);\n            return;\n          }\n          if (Array.isArray(node.children)) {\n            node.children.forEach((c) => flattenTagNodes(c, out));\n          }\n        };\n\n        const loadExternalFilterNodes = async (topicCode) => {\n          if (!topicCode) {\n            state.filterNodes = [];\n            state.selectedMap = {};\n            // 不主动发送消息：仅在用户切换下拉后再发送\n            return;\n          }\n          const params = new URLSearchParams();\n          params.append('interfaceId', EXTERNAL_FILTER_API.interfaceId);\n          params.append('token', EXTERNAL_FILTER_API.token);\n          params.append('topicCode', topicCode);\n          params.append('istree', EXTERNAL_FILTER_API.istree);\n\n          try {\n            const res = await axios({\n              method: 'post',\n              url: EXTERNAL_FILTER_API.url,\n              data: params,\n              headers: { 'Content-Type': 'application/x-www-form-urlencoded' }\n            });\n            const data = res?.data || {};\n            const tags = Array.isArray(data?.tags) ? data.tags : [];\n            console.log(data, 2233321)\n\n            const externalGroup = tags.find((n) => n?.nodeName === '外部筛选');\n            const tagNodes = [];\n            flattenTagNodes(externalGroup, tagNodes);\n\n            // 只保留有 tagCode 且 range 是数组的节点\n            state.filterNodes = tagNodes.filter((n) => n?.tagCode && Array.isArray(n?.range));\n\n            // 初始化 selectedMap\n            state.filterNodes.forEach((n) => {\n              const isMulti = (n?.tagValueType ?? '1') === '2';\n              if (isMulti) {\n                if (!Array.isArray(state.selectedMap[n.tagCode])) state.selectedMap[n.tagCode] = [];\n              } else {\n                if (typeof state.selectedMap[n.tagCode] !== 'string') state.selectedMap[n.tagCode] = '';\n              }\n            });\n\n            // 若外部筛选选中值消息提前到达，加载完后应用一次用于回显\n            applySelectedFromPayload(state.pendingSelected);\n\n            // 初次加载发送一次（空则 {}），保证接收侧状态一致\n            // emitFilterTag();\n          } catch (e) {\n            console.error('获取外部筛选失败:', e);\n            state.filterNodes = [];\n            state.selectedMap = {};\n            // emitFilterTag();\n          }\n        };\n\n        const ensureLoadExternalFilterNodes = (topicCode) => {\n          const next = topicCode === null || topicCode === undefined ? '' : String(topicCode);\n          if (!next) return;\n          if (lastLoadedTopicCode === next) return;\n          lastLoadedTopicCode = next;\n          loadExternalFilterNodes(next);\n        };\n\n        const applySelectedFromPayload = (payload) => {\n          if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return;\n          state.pendingSelected = payload;\n          // 下拉配置未加载时，仅暂存，等 loadExternalFilterNodes 后再应用\n          if (!state.filterNodes.length) return;\n          // 仅对当前已存在的 tagCode 应用（避免脏数据）\n          Object.keys(payload).forEach((tagCode) => {\n            if (!Object.prototype.hasOwnProperty.call(state.selectedMap, tagCode)) return;\n            const isMulti = isMultiByTagCode(tagCode);\n            const raw = payload[tagCode];\n            if (isMulti) {\n              const arr = Array.isArray(raw)\n                ? raw\n                : (typeof raw === 'string' ? raw.split('$') : []);\n              state.selectedMap[tagCode] = arr.filter((v) => v !== null && v !== undefined && String(v).length).map(String);\n            } else {\n              const val = Array.isArray(raw)\n                ? (raw[0] ?? '')\n                : (raw ?? '');\n              state.selectedMap[tagCode] = val === null || val === undefined ? '' : String(val);\n            }\n          });\n        };\n\n        const buildFilterTagPayload = () => {\n          const payload = {};\n          (state.filterNodes || []).forEach((node) => {\n            const tagCode = node?.tagCode;\n            if (!tagCode) return;\n            const isMulti = (node?.tagValueType ?? '1') === '2';\n            const val = state.selectedMap?.[tagCode];\n            if (isMulti) {\n              const arr = Array.isArray(val) ? val : (typeof val === 'string' && val ? val.split('$') : []);\n              const cleaned = arr.filter((v) => v !== null && v !== undefined && String(v).length).map(String);\n              if (cleaned.length) payload[tagCode] = cleaned.join('$');\n            } else {\n              const s = Array.isArray(val) ? (val[0] ?? '') : (val ?? '');\n              const cleaned = s === null || s === undefined ? '' : String(s);\n              if (cleaned) payload[tagCode] = cleaned;\n            }\n          });\n          return payload;\n        };\n\n        const emitFilterTag = () => {\n          const payload = buildFilterTagPayload();\n          rootData.rootSocket.emit('message', {\n            room: global.socketRoom,\n            type: 'filterTag',\n            data: payload\n          });\n        };\n\n        const onSelectChange = () => {\n          emitFilterTag();\n        };\n\n        // 下拉获取/失去焦点：发 socket 消息（按需求固定文案）\n        const SELECT_FOCUS_SOURCE = '@面板/外部筛选下拉面板.html';\n        const lastFocusState = reactive({ value: '' }); // 去重：避免重复刷同一条状态\n        const emitSelectFocusState = (stateText) => {\n          const next = `${stateText}`;\n          // 避免同一状态重复刷屏（某些版本会多次触发 focus/blur）\n          if (lastFocusState.value === next) return;\n          lastFocusState.value = next;\n          rootData.rootSocket.emit('message', {\n            room: global.socketRoom,\n            type: 'externalFilterSelectFocusState',\n            data: next\n          });\n        };\n\n        // 记录每个下拉是否处于展开状态：用于抑制多选点选下拉项时误触发 blur 的“失去焦点”\n        const selectVisibleMap = reactive({});\n        // 保存 el-select 实例：用于在失焦时强制关闭下拉\n        const selectRefMap = reactive({});\n        const setSelectRef = (tagCode, el) => {\n          if (!tagCode) return;\n          if (el) selectRefMap[tagCode] = el;\n        };\n        const closeSelectDropdown = (tagCode) => {\n          const inst = selectRefMap?.[tagCode];\n          if (!inst) return;\n          // ElementPlus 不同版本暴露的方法名不同，这里做兼容尝试\n          if (typeof inst.blur === 'function') inst.blur();\n          if (typeof inst.toggleMenu === 'function') inst.toggleMenu(false);\n          if (typeof inst.handleClose === 'function') inst.handleClose();\n        };\n\n        const onSelectVisibleChange = (tagCode, visible) => {\n          selectVisibleMap[tagCode] = !!visible;\n          if (visible) {\n            emitSelectFocusState('获取焦点');\n          } else {\n            // 统一规则：收起即认为“失去焦点”（包含：再次点击选择框收起/点击空白处收起/ESC 等）\n            emitSelectFocusState('失去焦点');\n          }\n        };\n\n        // 监听：关联分析页下发 topicCode（初始化/切换主题都会发）\n        const onSocketChangeUpdateTopicCode = (data) => {\n          if (data?.type !== 'updateExternalFilterTopicCode') return;\n          const next = data?.data?.topicCode ? String(data.data.topicCode) : '';\n          // topicCode 为空：清空并重置去重标记（避免后续恢复被误挡）\n          if (!next) {\n            state.topicCode = '';\n            state.selectedMap = {};\n            state.filterNodes = [];\n            lastLoadedTopicCode = '';\n            return;\n          }\n\n          state.topicCode = next;\n\n          // 同一个 topicCode 的重复消息：不要清空（否则会闪一下变“暂无数据”）\n          // 但如果当前已经是空列表，则允许强制重载一次以自愈\n          if (lastLoadedTopicCode === next) {\n            if (Array.isArray(state.filterNodes) && state.filterNodes.length) return;\n            lastLoadedTopicCode = '';\n            setTimeout(() => {\n              ensureLoadExternalFilterNodes(next);\n            });\n            return;\n          }\n\n          // 真正切换 topic：重置筛选与下拉配置\n          state.selectedMap = {};\n          state.filterNodes = [];\n          setTimeout(() => {\n            ensureLoadExternalFilterNodes(next);\n          });\n        };\n\n        // 监听：标签面板点击确定后下发外部筛选选中值，用于多选下拉回显\n        const onSocketChangeUpdateSelected = (data) => {\n          if (data?.type !== 'updateExternalFilterSelected') return;\n          applySelectedFromPayload(data?.data);\n        };\n\n        onMounted(() => {\n          rootData.rootOn('rootSocket:change', onSocketChangeUpdateTopicCode);\n          rootData.rootOn('rootSocket:change', onSocketChangeUpdateSelected);\n\n          // 兜底：当父页面在 iframe 挂载前已下发 topicCode（消息丢失）时，\n          // 通过 localStorage 的 waterTraceSourceActiceTab 恢复一次外部筛选配置请求\n          if (!state.topicCode) {\n            const fallbackTopicCode = localStorage.getItem('waterTraceSourceActiceTab') || '';\n            if (fallbackTopicCode) {\n              state.topicCode = fallbackTopicCode;\n              state.selectedMap = {};\n              state.filterNodes = [];\n              ensureLoadExternalFilterNodes(fallbackTopicCode);\n            }\n          }\n        });\n\n        onUnmounted(() => {\n          rootData.rootOff('rootSocket:change', onSocketChangeUpdateTopicCode);\n          rootData.rootOff('rootSocket:change', onSocketChangeUpdateSelected);\n        });\n\n        return {\n          ...toRefs(state),\n          onSelectChange,\n          onSelectVisibleChange,\n          setSelectRef,\n        };\n      }\n    };\n\n    const MainComponent = {\n      template: '<subject-component v-if=\"isSocketConnect\"></subject-component><div v-else class=\"no-data\">socket未连接</div>',\n      components: { subjectComponent },\n      setup() {\n        const lxtGlobal = localStorage.getItem('lxtGlobal')\n          ? JSON.parse(localStorage.getItem('lxtGlobal'))\n          : {};\n\n        const rootEmitter = mitt();\n\n        let global = reactive({\n          socketIp: lxtGlobal.socketIp || 'http://192.168.0.202:7777/socketPath',\n          socketPath: lxtGlobal.socketPath || '/socketPath',\n          socketRoom: lxtGlobal.socketRoom || roomId || 'admin'\n        });\n\n        let state = reactive({\n          isSocketConnect: false\n        });\n\n        let socket = null;\n        if (global.socketIp) {\n          const options = {};\n          if (global?.socketPath) options.path = global.socketPath;\n          socket = io(global.socketIp, options);\n        }\n\n        provide('root', {\n          ...toRefs(global),\n          rootEmit: rootEmitter.emit,\n          rootOn: rootEmitter.on,\n          rootOff: rootEmitter.off,\n          rootSocket: socket\n        });\n\n        rootEmitter.on('rootData:change', (obj) => {\n          global = _.set(global, obj.key, obj.value);\n          if (global.socketIp && global.socketRoom && socket) {\n            socket.emit('message', {\n              room: global.socketRoom,\n              type: 'internalType:ChangeGlobalValue',\n              data: obj\n            });\n          }\n        });\n\n        if (socket) {\n          socket.on('connect', function () {\n            if (global.socketIp && global.socketRoom) {\n              socket.emit('join-room', global.socketRoom);\n              state.isSocketConnect = true;\n            }\n          });\n\n          socket.on('message', function (data) {\n            if (data.type === 'internalType:ChangeGlobalValue') {\n              global = _.set(global, data.data.key, data.data.value);\n            } else {\n              rootEmitter.emit('rootSocket:change', data);\n            }\n          });\n        }\n\n        watch(\n          () => global.socketRoom,\n          (val, oldVal) => {\n            if (socket) {\n              socket.emit('leave-room', oldVal);\n              socket.emit('join-room', val);\n            }\n          }\n        );\n\n        return { ...toRefs(state) };\n      }\n    };\n\n    const app = createApp(MainComponent);\n    app.config.warnHandler = function () { };\n    app.use(ElementPlus, { size: 'small' }).mount('#app');\n  </script>\n</body>\n\n</html>\n\n",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"412px","height":"50px","position":"unset","left":"-2px","top":"329px","pointerEvents":"auto","cursor":"auto"}}}, 
 },
},
tColx0x15x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingTop":"60px","position":"absolute","left":"0px","pointerEvents":"none"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingTop":"60px","position":"absolute","left":"0px","pointerEvents":"none"}}}, 
 },
},
tTablex0x15x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"400px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"450px",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":" ","type":"state","key":"","stateKey":"isCheck","width":"30PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"24PX","height":"24PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-theme)"},"cellStyle":{"cursor":"pointer"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-03-07/454b453f41b84c6097492361373088bd.png)","backgroundImage":"var(--business-checkbox-checked)","backgroundSize":"100% 100%","cursor":"pointer","transform":"translate(11px, 3px)","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":"","cursor":"pointer"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"var(--business-checkbox)","backgroundSize":"100%","cursor":"pointer","transform":"translate(11px, 3px)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"定位","type":"state","key":"","stateKey":"canPosition","width":"40PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"var(--business-position)"},"cellStyle":{"background":"rgba(0, 0, 0, 0)"}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","filter":"grayscale(1)","backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"名称","type":"default","key":"DATA_NAME","stateKey":"","width":"290PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","display":"block"}},"infoPosition":"left"},{"label":"操作","type":"default","key":"operation","stateKey":"","width":"50PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-theme)"},"cellStyle":{"cursor":"pointer"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"400px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"var(--business--table-zebra-bg)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}}}, 
 },
},
tTextCommonx0x16: {
defaultStyle: {
            default: {"width":"auto","height":"25px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-18)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"7px","top":"52px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"在线监测要素：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"25px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-18)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"7px","top":"52px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTextCommonx0x17: {
defaultStyle: {
            default: {"width":"132px","height":"25px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-18)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"其他要素：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"132px","height":"25px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-18)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","background":"unset","backgroundClip":"unset"}}}, 
 },
},
});
const getProvider = () => {
const rootData = inject('sourceParmasState');
console.log(rootData,'sourceParmasState'); // 接收到的值

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

watch(() => rootData, () => {
  console.log(33345)
}, { deep: true })
};
const initPage = () => {
// 开启卡片加载中动画
state.cardLoading = true;
// 开启列表加载中动画
state.listLoading = true;
// 获取卡片数据（列表数据需要在获取完卡片数据后模拟选中第一个卡片后获取）
// if (global.waterGlobalVariables.waterOverview.sourceTracingType === '2') {
//   apiRegistry.getCardData.request('geo_polygon', state.gisFeature);
//   apiRegistry.getCatchmentAreaCardData.request();
// } else {
//   apiRegistry.getCardData.request('', '');
// }

// getCardListData(2);

// rootData.rootOn('rootSocket:change', (data) => {
//   if (data.type === 'externalFilterSelectFocusState') {
//     const iframe = document.querySelector("#t-iframe-546c\\.e0e34bf73 > iframe")
//     const iframeWrapper = document.querySelector("#t-iframe-546c\\.e0e34bf73")
//     const iframeWrapperCol = document.querySelector("#t-col-4058\\.2b4c56e81")
//     const minHeight = "50px"
//     const maxHeight = "300px"
//     // 处理逻辑
//     if (data.data === '获取焦点') {
//       setTimeout(() => {
//   // 设置ifrmae高度
//             iframe.style.height = maxHeight
//       iframeWrapperCol.style.height = maxHeight
//       iframeWrapper.style.height = maxHeight
//       })
    
//     } else if (data.data === '失去焦点') {

//             setTimeout(() => {
//               // 设置ifrmae高度
//       iframe.style.height = minHeight
//       iframeWrapperCol.style.height = minHeight
//       iframeWrapper.style.height = minHeight
//       }, 2000)

      
//     }
//   }

// });

  // 外部筛选下拉 focus/blur 控制 iframe 高度：
  // - 收到“获取焦点”立刻拉高，并取消所有待执行的“失去焦点”定时器
  // - 收到“失去焦点”仅安排一次收起（可被后续“获取焦点”取消），防止高度被过期定时器截断
  /** @type {any} */
  let externalFilterBlurTimer = null;
  let externalFilterLastState = "";
  let externalFilterLastStateAt = 0;

  rootData.rootOn('rootSocket:change', (data) => {
    if (data.type === 'externalFilterSelectFocusState') {
      // 兼容：iframe 实际内容可能在 wrapper 内部
      /** @type {any} */
      const iframe =
        document.querySelector("#t-iframe-546c\\.e0e34bf73 > iframe") ||
        document.querySelector("#t-iframe-546c\\.e0e34bf73");
      /** @type {any} */
      const iframeWrapper = document.querySelector("#t-iframe-546c\\.e0e34bf73")
      /** @type {any} */
      const iframeWrapperCol = document.querySelector("#t-col-4058\\.2b4c56e81")
      const minHeight = "50px"
      const maxHeight = "300px"

      const setHeight = (h) => {
        if (iframe?.style) iframe.style.height = h;
        if (iframeWrapperCol?.style) iframeWrapperCol.style.height = h;
        if (iframeWrapper?.style) iframeWrapper.style.height = h;
      };

      // 处理逻辑
      if (data.data === '获取焦点') {
        externalFilterLastState = '获取焦点';
        externalFilterLastStateAt = Date.now();
        // 关键：只要当前获取到“获取焦点”，就把之前的“失去焦点”定时器去掉
        if (externalFilterBlurTimer) {
          clearTimeout(externalFilterBlurTimer);
          externalFilterBlurTimer = null;
        }
        setHeight(maxHeight);
      } else if (data.data === '失去焦点') {
        externalFilterLastState = '失去焦点';
        externalFilterLastStateAt = Date.now();
        // 覆盖旧的收起任务，避免多次排队
        if (externalFilterBlurTimer) {
          clearTimeout(externalFilterBlurTimer);
          externalFilterBlurTimer = null;
        }
        externalFilterBlurTimer = setTimeout(() => {
          // 只在最后状态仍是“失去焦点”时才执行，防止被后续“获取焦点”覆盖后仍回写
          if (externalFilterLastState !== '失去焦点') return;
          // 防止极端情况下时间戳不同步，这里也加一道校验
          if (Date.now() - externalFilterLastStateAt < 1500) return;
          setHeight(minHeight);
        }, 2000);
      }
    }

  });


// 筛选按钮
setTimeout(() => {
const btnDom = document.querySelector("#t-rect-caab\\.15629254d > div.t-text")
if(btnDom) {
btnDom.style.overflow = "hidden"
btnDom.style.textOverflow = "ellipsis"
btnDom.style.whiteSpace = "nowrap"
btnDom.style.width = "100%"
btnDom.style.display = "unset"
btnDom.style.lineHeight = "28px"
}

},2000)


// `
// overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//     width: 100%;
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
const clickSceneCard = (allSelectTopicList,item) => {
console.log(allSelectTopicList, item, 6667)
const handleExpandFiltering = () => {
  const col = document.querySelector("#t-col-51ed\\.447c3d9cc")
  let marginTop;
  if (allSelectTopicList.length !== 0) {
    state.isShowExterSelect = true
    marginTop = "0px"
  } else {
    state.isShowExterSelect = false
    marginTop = "-50px"
  }

  setTimeout(() => {
    if (col) {
      // col.style.marginTop = marginTop
      col.style.marginTop = marginTop
      // col.style.background = 'red'
    }
  })
}
handleExpandFiltering()
// 更新选中的主题数据
state.selectedTopicsData = Array.isArray(allSelectTopicList) ? allSelectTopicList : [allSelectTopicList];
// 更新选中的主题数据（仅编码，供标签栏回显用）
state.selectedTopics = state.selectedTopicsData.map((val) => val.TAG_TOPIC_CODE);
// 是否选中
let isSelect = state.selectedTopics.includes(item?.TAG_TOPIC_CODE);

/* 选中 */
if (isSelect) {
  /* 若没有选中项，择默认选中 */
  if (!state.activeTab.name) {
    // 选中
    handleSelectTab(item); // 参数注意修改
  }
  // 更新场景名
  // state.activeTab.name = item.title;
  // // 更新场景编码
  // state.activeTab.value = item.TAG_TOPIC_CODE;
  // // 更新实体编码
  // state.activeTab.entityCode = item.TAG_ENTITY_CODE;

  // 是否展示操作列
  state.isShowOperateColumn = item.hasOperateColumn;


  /* 取消选中 */
} else {
  // 若取消的正好是选中的主题
  if (state.activeTab.value === item.TAG_TOPIC_CODE) {
    state.tagJson = '{}';
    state.activeTab.value = '';
    state.activeTab.name = '';
    state.activeTab.entityCode = '';
    // 清空列表
    state.enterList = [];
  }
  /* 若有其他选择的主题 */
  if (state.selectedTopicsData.length) {

    // 选中项
    let selectItem = item;
    // 默认选中第一个
    selectItem = state.selectedTopicsData[0];
    // // 更新场景名
    // state.activeTab.name = selectItem.title;
    // // 更新场景编码
    // state.activeTab.value = selectItem.TAG_TOPIC_CODE;
    // // 更新实体编码
    // state.activeTab.entityCode = selectItem.TAG_ENTITY_CODE;
    // 是否展示操作列
    state.isShowOperateColumn = selectItem.hasOperateColumn;
    /* 若没有选中项，择默认选中 */
    if (!state.activeTab.name) {
      // 选中
      handleSelectTab(selectItem); // 参数注意修改
    }
  } else {
    state.tagJson = '{}';
    // 更新场景名
    state.activeTab.name = '';
    // 更新场景编码
    state.activeTab.value = '';
    // 更新实体编码
    state.activeTab.entityCode = '';
    // 清空列表
    state.enterList = [];
  }
}

// const typeList = ["涉水企业", "入河排污口", "污水处理厂", "水电站"];
const typeList = ["涉水企业", "入河排污口", "污水处理厂"];

if (typeList.includes(item.DATA_TYPE)) {
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'updateWaterSourceResult',  // 消息类型名称
      data: {                   // 消息内容，对象格式
        topicCode: item.TAG_TOPIC_CODE,
        tagJson: '{}',
        visible: isSelect,
        pointCode: state.sourceParmasState.componentSourceParmas.POINT_CODE, // 断面编码
        ENTITY_CODE: item.TAG_ENTITY_CODE,
        queryField: 'POINT_CODE',
        orderBy: '',
        pageSize: 2000,
      },
      from: 'lego-水-溯源-关联分析'
    }
  );
} else {
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'updateWaterSourceResult',  // 消息类型名称
      data: {                   // 消息内容，对象格式
        topicCode: item.TAG_TOPIC_CODE,
        tagJson: '{}',
        visible: isSelect,
        pointCode: '', // 断面编码
        ENTITY_CODE: item.TAG_ENTITY_CODE,
        queryField: '',
        orderBy: '',
        pageSize: 2000,
        "pointValue": state.gisFeature,
        "gisType": "geo_polygon",
        useGisShape: "true"
      },
      from: 'lego-水-溯源-关联分析'
    }
  );
}

// if (global.waterGlobalVariables.waterOverview.sourceTracingType === '1') {
//   rootData.rootSocket.emit(
//     'message',  // 固定的消息名称，不能修改
//     {
//       room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
//       type: 'updateWaterSourceResult',  // 消息类型名称
//       data: {                   // 消息内容，对象格式
//         topicCode: item.TAG_TOPIC_CODE,
//         tagJson: '{}',
//         visible: isSelect,
//         pointCode: state.sourceParmasState.componentSourceParmas.POINT_CODE, // 断面编码
//         ENTITY_CODE: item.TAG_ENTITY_CODE,
//         queryField: 'POINT_CODE',
//         orderBy: '',
//         pageSize: 2000,
//       },
//       from: 'lego-水-溯源-关联分析'
//     }
//   );
// } else {
//   rootData.rootSocket.emit(
//     'message',  // 固定的消息名称，不能修改
//     {
//       room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
//       type: 'updateWaterSourceResult',  // 消息类型名称
//       data: {                   // 消息内容，对象格式
//         topicCode: item.TAG_TOPIC_CODE,
//         tagJson: '{}',
//         visible: isSelect,
//         pointCode: ["日常信访","体检问题"].includes(item.DATA_TYPE) ? '' : state.sourceParmasState.componentSourceParmas.POINT_CODE, // 断面编码
//         ENTITY_CODE: item.TAG_ENTITY_CODE,
//         queryField: ["日常信访","体检问题"].includes(item.DATA_TYPE) ? '' : 'POINT_CODE',
//         orderBy: '',
//         pageSize: 2000,
//         "pointValue": state.gisFeature,
//         "gisType": "geo_polygon",
//         useGisShape: "true"
//       },
//       from: 'lego-水-溯源-关联分析'
//     }
//   );
// }
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
      bufferType: state.selectedParams.buffer
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
handleListParams(data.bufferLayerPoly?.[0]); 
state.pointValue = JSON.stringify(data.bufferLayerPoly);
// state.pointValue = data.bufferLayerPoly;
console.log('state.queryJson', state.queryJson)
// 获取卡片数据
// apiRegistry.getCardDataCopy.request();
// 获取企业列表数据
getListData()
};
const getListData = () => {
// 开启列表加载中动画
state.listLoading = true;
const params = new URLSearchParams();
params.append('entityCode', 'tag_gather_yztdqsy_1735090881279');
params.append('queryJson', state.queryJson);
// 清空企业列表
state.enterList = [];
axios({
  method: 'post',
  url: `${global.foshanServiceBaseUrl}${global.serviceBasePath}&interfaceId=54c0456d112a15810ddedb11a29c986d`,
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
    if (data && data.hits && data.hits.hits && data.hits.hits.length > 0) {
        const { hits } = response?.data?.hits;

        state.enterList = hits.map(item => item._source).map(i => {
          return {
            ...i,
            operation: '派发',
            isCheck: '0'
          }
        })
        // 更新地图
        sendMsgToMapUpdateAnalysisLayerStatus(hits); 
    } else {
      state.enterList = []
      // 更新地图
        sendMsgToMapUpdateAnalysisLayerStatus([]); 
    }
  })
  .catch(error => {
    console.log(error);
  }).finally(() => {
    // 结束列表加载状态
    state.listLoading = false;
  });

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
localStorage.removeItem('waterTraceSourceActiceTab')
};
const saveFilterTag = (data) => {
  const FACTOR_TAG_CODE = 'EA3DB3E917AE4426BCE3D5E0D02D0660';
  // 因子排放量
  const FACTOR_TAG_CODE2 = 'BC883F0453E1417F8C9CC1AA0D06CC19'
  // 排放特征
  const PWTZ_CODE = "68BCB36871086075159B038A30251B63"
// 处理逻辑
console.log(data, 77789)
 // 仅从“因子排放浓度”提取排序字段：orderBy = value + '.keyword'
  try {
    const raw = data && typeof data === 'object' ? (data[FACTOR_TAG_CODE] || data[FACTOR_TAG_CODE2] || data[PWTZ_CODE]) : '';
    let v = '';
    if (typeof raw === 'string') v = raw;
    else if (Array.isArray(raw)) v = raw[0] ?? '';
    if (typeof v === 'string' && v.includes('$')) v = v.split('$')[0] || '';
    state.orderBy = v ? `${v} desc` : '';
  } catch (e) {
    state.orderBy = '';
  }
state.tagJson = JSON.stringify(data);

// 需求：当 orderBy 有值时，tagJson 必须置空（避免标签过滤影响排序接口请求）
  // state.tagJson = state.orderBy ? '{}' : JSON.stringify(data);
// 关闭弹窗
// global.isShowWarningTagFilter = false;
// global.waterGlobalVariables.sourceApportionment.activeTabName = 'pollutionAnalysisComponent';
// global.waterGlobalVariables.sourceApportionment.selectedTagJson = JSON.stringify(data.data);
// rootData.rootEmit(
//   // 固定的消息名称，不能修改
//   'rootData:change',
//   {
//     // 全局变量的键名
//     key: 'waterGlobalVariables.sourceApportionment.selectedTagJson',
//     // 将要修改的全局变量的键值
//     value: JSON.stringify(data.data)
//   }
// );

// 关闭搜索面板
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'changeTagFilterPanelVisible',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      panelName: 'mainPanel',
    }
  }
);




const typeList = ["涉水企业", "入河排污口", "污水处理厂"];

// 先构建基础的data对象
const dataObj = {
  topicCode: state.activeTab.value,
  tagJson: state.tagJson,
  visible: true,
  ENTITY_CODE: state.activeTab.entityCode,
  orderBy: "",
  pageSize: 2000,
};

// 判断当前topicCode是否在typeList中，是则添加指定参数
if (typeList.includes(state.activeTab.value)) {
  dataObj.pointCode = state.sourceParmasState?.componentSourceParmas?.POINT_CODE; // 断面编码
  dataObj.queryField = 'POINT_CODE';
}

// 发送消息
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateWaterSourceResult',  // 消息类型名称
    data: dataObj                   // 使用构建好的data对象
  }
);
/*
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateWaterSourceResult',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      topicCode: state.activeTab.value,
      tagJson: state.tagJson,
      visible: true,
      pointCode: state.sourceParmasState?.componentSourceParmas?.POINT_CODE, // 断面编码
      ENTITY_CODE: state.activeTab.entityCode,
      queryField: 'POINT_CODE',
      orderBy: "",
      pageSize: 2000,
    }
  }
);
*/

// 展示列表加载中动画
state.listLoading = true;
// const typeList = ["涉水企业", "入河排污口", "污水处理厂", "水电站"];
// const typeList = ["涉水企业", "入河排污口", "污水处理厂"];
  const judgeTitle = (data && data.title) ? data.title : (state.activeTab && state.activeTab.name ? state.activeTab.name : "");
if (typeList.includes(judgeTitle)) {
  apiRegistry.getEnterList.request('', '');
} else {
  apiRegistry.getCatchmentAreaEnterList.request(
    'geo_polygon',
    state.gisFeature,
    '2'
  );
}
// const typeList = ["涉水企业", "入河排污口", "畜禽养殖", "水电站", "污水处理厂"];
// if (global.waterGlobalVariables.waterOverview.sourceTracingType === '1') {
//   apiRegistry.getEnterList.request('', '');
// } else {
//   if (!typeList.includes(data.title)) {
//     // 获取列表数据
//     // apiRegistry.getEnterList.request('geo_pplygon', state.gisFeature);
//     apiRegistry.getCatchmentAreaEnterList.request(
//       'geo_polygon',
//       state.gisFeature,
//       '2',
//       ["日常信访", "体检问题"].includes(data.title) ? '' : state.sourceParmasState.componentSourceParmas.POINT_CODE,
//       ["日常信访", "体检问题"].includes(data.title) ? '' : 'POINT_CODE');
//   } else {
//     // 获取列表数据
//     apiRegistry.getCatchmentAreaEnterList.request(
//       'geo_polygon',
//       state.gisFeature,
//       '1',
//       ["日常信访", "体检问题"].includes(data.title) ? '' : state.sourceParmasState.componentSourceParmas.POINT_CODE,
//       ["日常信访", "体检问题"].includes(data.title) ? '' : 'POINT_CODE');
//   }
// }

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
  // apiRegistry.getCardData.request();
  // // 获取卡片数据（列表数据需要在获取完卡片数据后模拟选中第一个卡片后获取）
  // if (global.waterGlobalVariables.waterOverview.sourceTracingType === '2') {
  //   apiRegistry.getCardData.request('geo_polygon', state.gisFeature);
  //   apiRegistry.getCatchmentAreaCardData.request();
  // } else {
  //   apiRegistry.getCardData.request('', '');
  // }

  // getCardListData(1);
}, {
  deep: true
});
};
const handleSelectTab = (data) => {
state.orderBy = ""
// 重置标签筛选
state.tagJson = '{}';
// 更新场景名
state.activeTab.name = data.title;
// 更新场景编码
state.activeTab.value = data.TAG_TOPIC_CODE;
// 更新实体编码
state.activeTab.entityCode = data.TAG_ENTITY_CODE;
// 下发外部筛选面板 topicCode（不写死，由此消息驱动外部筛选下拉面板重新请求）
rootData.rootSocket.emit('message', {
  room: global.socketRoom,
  type: 'updateExternalFilterTopicCode',
  data: { topicCode: state.activeTab.value }
});

// 处理外部筛选是否选中
loadExternalFilterNodes( state.activeTab.value )
// 将选中的标签数据存到本地存储中，标签筛选面板的iframe好获取
localStorage.setItem('waterTraceSourceActiceTab', state.activeTab.value);
console.log(22222, state.activeTab)
// rootData.rootSocket.emit(
//   'message',  // 固定的消息名称，不能修改
//   {
//     room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
//     type: 'updateFitlerPanelData',  // 消息类型名称
//     data: {                   // 消息内容，对象格式
//       type: 'waterRelation',
//       topicCode: state.activeTab.value,
//       topicName: state.activeTab.name,
//     }
//   }
// );

// 展示列表加载中动画
state.listLoading = true;
// const typeList = ["涉水企业", "入河排污口", "污水处理厂", "水电站"];
const typeList = ["涉水企业", "入河排污口", "污水处理厂"];
if (typeList.includes(data.title)) {
  apiRegistry.getEnterList.request('', '');
} else {
  apiRegistry.getCatchmentAreaEnterList.request(
    'geo_polygon',
    state.gisFeature,
    '2'
  );
}
// const typeList = ["涉水企业", "入河排污口", "畜禽养殖", "水电站", "污水处理厂"];
// if (global.waterGlobalVariables.waterOverview.sourceTracingType === '1') {
//   apiRegistry.getEnterList.request('', '');
// } else {
//   if (!typeList.includes(data.title)) {
//     // 获取列表数据
//     // apiRegistry.getEnterList.request('geo_pplygon', state.gisFeature);
//     apiRegistry.getCatchmentAreaEnterList.request(
//       'geo_polygon',
//       state.gisFeature,
//       '2',
//       ["日常信访", "体检问题"].includes(data.title) ? '' : state.sourceParmasState.componentSourceParmas.POINT_CODE,
//       ["日常信访", "体检问题"].includes(data.title) ? '' : 'POINT_CODE');
//   } else {
//     // 获取列表数据
//     apiRegistry.getCatchmentAreaEnterList.request(
//       'geo_polygon',
//       state.gisFeature,
//       '1',
//       ["日常信访", "体检问题"].includes(data.title) ? '' : state.sourceParmasState.componentSourceParmas.POINT_CODE,
//       ["日常信访", "体检问题"].includes(data.title) ? '' : 'POINT_CODE');
//   }
// }



async function loadExternalFilterNodes(topicCode) {
      // 固定接口参数
    const EXTERNAL_FILTER_API = {
      url: 'http://192.168.24.106:10157/service/serviceinterface/search/run.action',
      interfaceId: '982f4b5298e7d6c89796ffca11f9dacb',
      token: 'dcp',
      istree: true,
    };
    
  if (!topicCode) {
    state.filterNodes = [];
    state.selectedMap = {};
    // 不主动发送消息：仅在用户切换下拉后再发送
    return;
  }
  const params = new URLSearchParams();
  params.append('interfaceId', EXTERNAL_FILTER_API.interfaceId);
  params.append('token', EXTERNAL_FILTER_API.token);
  params.append('topicCode', topicCode);
  params.append('istree', EXTERNAL_FILTER_API.istree);

  try {
    const res = await axios({
      method: 'post',
      url: EXTERNAL_FILTER_API.url,
      data: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    const data = res?.data || {};
    const tags = Array.isArray(data?.tags) ? data.tags : [];

    const externalGroup = tags.find((n) => n?.nodeName === '外部筛选');
      const col = document.querySelector("#t-col-51ed\\.447c3d9cc")
    let marginTop;
    if (externalGroup) {
      state.isShowExterSelect = true
      marginTop = "0px"
    } else {
      state.isShowExterSelect = false
      marginTop = "-50px"
    }

    setTimeout(() => {
      if(col) {
        // col.style.marginTop = marginTop
               col.style.marginTop = marginTop
        // col.style.background = 'red'
      }
    })

  } catch (e) {
  }
};

};
const removeMapPoints = () => {
/* 遍历已经选择的主题数据，移除地图上对应主题的点位数据 */
state.selectedTopicsData?.forEach((val) => {
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'updateWaterSourceResult',  // 消息类型名称
      data: {                   // 消息内容，对象格式
        topicCode: val.TAG_TOPIC_CODE,
        tagJson: '{}',
        visible: false,
        pointCode: state.sourceParmasState.componentSourceParmas.POINT_CODE, // 断面编码
        ENTITY_CODE: val.TAG_ENTITY_CODE,
        queryField: 'POINT_CODE',
        orderBy: '',
        pageSize: 2000,
      },
      from: 'lego-水-溯源-关联分析'
    }
  );
})
};
const renderScrollTab = () => {
setTimeout(() => {
  const scrollTabDom = document.getElementById('t-scrollable-cards-f23d.fa9764949');
  console.log(scrollTabDom, 88880)
  if (scrollTabDom) {
    const scrollTabLeftBtnDom = scrollTabDom.querySelector('.scrollable-cards-left');
    const scrollTabRightBtnDom = scrollTabDom.querySelector('.scrollable-cards-right');
    const scrollTabContainerDom = scrollTabDom.querySelector('.scrollable-cards-container');
    if (scrollTabContainerDom) {
      const scrollTabInnerDom = scrollTabContainerDom.querySelector('.scrollable-cards-body');
      if (scrollTabInnerDom) {
        // 滚动区域的宽度
        const scrollTabInnerWidth = scrollTabInnerDom.offsetWidth;
        // 整个容器的宽度
        const scrollTabTotalWidth = scrollTabContainerDom.offsetWidth;
        /* 若滚动区域的宽度超过整个容器的宽度 */
        if (scrollTabTotalWidth >= scrollTabInnerWidth) {
          scrollTabLeftBtnDom.style.display = 'none';
          scrollTabRightBtnDom.style.display = 'none';
        } else {
          scrollTabLeftBtnDom.style.display = 'block';
          scrollTabRightBtnDom.style.display = 'block';
        }
      }
    }
  }
})
};
const handlePointValue = (data) => {
if (data?.length) {
  state.gisFeature = JSON.stringify(data || "{}");
}
getCardListData(2);
};
const getCardListData = (sourceType) => {
//   // 单位修正：仅对指定三项强制显示“个”
//   const UNIT_OVERRIDE_TITLES = new Set(['体检问题', '高光谱视频', '小流域自动站']);
//   const resolveUnit = (title, rawUnit, baseUnit, defaultUnit = '家') => {
//     if (title && UNIT_OVERRIDE_TITLES.has(title)) return '个';
//     return rawUnit || baseUnit || defaultUnit;
//   };


// function getData(type = 2) {
//   const url = `${global.foshanServiceBaseUrl}${global.serviceBasePath}`;
//   // const { sourceTracingType } = global.waterGlobalVariables.waterOverview;
//   const sourceTracingType = '2';
//   // // 获取流域编码为2 就是信访问题那些数据
//   // let params = {
//   //   "pointValue": sourceTracingType === '1' ? "" : state.gisFeature,
//   //   "gisType": sourceTracingType === '1' ? "" : 'geo_polygon',
//   //   "WSYSTEM_CODE": sourceTracingType,
//   //   "queryField": sourceTracingType === '1' ? "POINT_CODE" : '',
//   //   "keyword": sourceTracingType === '1' ? state.sourceParmasState.componentSourceParmas.POINT_CODE : '',
//   //   "useGisShape": sourceTracingType === '1' ? "false" : "true",
//   //   "locationField": "location",
//   //   "hasGather": "true",
//   //   "groupFields": "TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE",
//   //   "ENTITY_CODE": "tag_gather_yztssy_1764226196133",
//   //   "interfaceId": "32fbf72522e1a004b67b5d906410ec8d",
//   // }

//   // // 获取流域编码为1 就是溯源时候的哪些数据
//   // if (type === 1 && sourceTracingType === '2') {
//   //   params = {
//   //     "pointValue": state.gisFeature,
//   //     "gisType": 'geo_polygon',
//   //     "WSYSTEM_CODE": '1',
//   //     "queryField": "POINT_CODE",
//   //     "keyword": state.sourceParmasState.componentSourceParmas.POINT_CODE,
//   //     "useGisShape": "true",
//   //     "locationField": "location",
//   //     "hasGather": "true",
//   //     "groupFields": "TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE",
//   //     "ENTITY_CODE": "tag_gather_yztssy_1764226196133",
//   //     "interfaceId": "32fbf72522e1a004b67b5d906410ec8d",
//   //   }
//   // }

//   // // 溯源原有逻辑
//   // if (type === 1 && sourceTracingType === '2') {
//   //   params = {
//   //     "WSYSTEM_CODE": '1',
//   //     "queryField": "POINT_CODE",
//   //     "keyword": state.sourceParmasState.componentSourceParmas.POINT_CODE,
//   //     "useGisShape": "false",
//   //     "locationField": "location",
//   //     "hasGather": "true",
//   //     "groupFields": "TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE",
//   //     "ENTITY_CODE": "tag_gather_yztssy_1764226196133",
//   //     "interfaceId": "32fbf72522e1a004b67b5d906410ec8d",
//   //   }

//   //   delete params?.pointValue;
//   //   delete params?.gisType;
//   // }

//   // 创建 FormData 对象
//   const formData = new FormData();

//   // 基础参数（对应 type=2 的情况）
//   formData.append('pointValue', sourceTracingType === '1' ? '' : (state.gisFeature || ''));
//   formData.append('gisType', sourceTracingType === '1' ? '' : 'geo_polygon');
//   formData.append('WSYSTEM_CODE', sourceTracingType);
//   formData.append('queryField', sourceTracingType === '1' ? 'POINT_CODE' : '');
//   formData.append('keyword', sourceTracingType === '1' ? (state.sourceParmasState?.componentSourceParmas?.POINT_CODE || '') : '');
//   formData.append('useGisShape', sourceTracingType === '1' ? 'false' : 'true');
//   formData.append('locationField', 'location');
//   formData.append('hasGather', 'true');
//   formData.append('groupFields', 'TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE');
//   formData.append('ENTITY_CODE', 'tag_gather_yztssy_1764226196133');
//   formData.append('interfaceId', '32fbf72522e1a004b67b5d906410ec8d');

//   if (type === 1 && sourceTracingType === '2') {
//     formData.set('WSYSTEM_CODE', '1');
//     formData.set('queryField', 'POINT_CODE');
//     formData.set('keyword', state.sourceParmasState?.componentSourceParmas?.POINT_CODE || '');
//     formData.set('useGisShape', 'false');
//     // 清空不需要的字段
//     formData.set('pointValue', '');
//     formData.set('gisType', '');
//   }


//   //   // 创建 FormData 对象
//   //   const formData = new FormData();

//   //   // 基础参数（对应 type=2 的情况）
//   //   formData.append('pointValue', sourceTracingType === '1' ? '' : (state.gisFeature || ''));
//   //   formData.append('gisType', sourceTracingType === '1' ? '' : 'geo_polygon');
//   //   formData.append('WSYSTEM_CODE', sourceTracingType);
//   //   formData.append('queryField', sourceTracingType === '1' ? 'POINT_CODE' : '');
//   //   formData.append('keyword', sourceTracingType === '1' ? (state.sourceParmasState.componentSourceParmas.POINT_CODE || '') : '');
//   //   formData.append('useGisShape', sourceTracingType === '1' ? 'false' : 'true');
//   //   formData.append('locationField', 'location');
//   //   formData.append('hasGather', 'true');
//   //   formData.append('groupFields', 'TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE');
//   //   formData.append('ENTITY_CODE', 'tag_gather_yztssy_1764226196133');
//   //   formData.append('interfaceId', '32fbf72522e1a004b67b5d906410ec8d');

//   //   // 特殊处理 type=1 的情况
//   //   if (type === 1) {
//   //     if (sourceTracingType === '2') {
//   //       formData.set('pointValue', state.gisFeature || '');
//   //       formData.set('gisType', 'geo_polygon');
//   //       formData.set('WSYSTEM_CODE', '1');
//   //       formData.set('queryField', 'POINT_CODE');
//   //       formData.set('keyword', state.sourceParmasState.componentSourceParmas.POINT_CODE || '');
//   //       formData.set('useGisShape', 'true');
//   //     } else if (sourceTracingType === '1') {
//   //       formData.set('WSYSTEM_CODE', '1');
//   //       formData.set('queryField', 'POINT_CODE');
//   //       formData.set('keyword', state.sourceParmasState.componentSourceParmas.POINT_CODE || '');
//   //       formData.set('useGisShape', 'false');
//   //       // 清空不需要的字段
//   //       formData.set('pointValue', '');
//   //       formData.set('gisType', '');
//   //     }
//   //   }
//   return new Promise((resolve, reject) => {
//     axios.post(url, formData, {
//       headers: { 'Content-Type': 'multipart/form-data' }
//     }).then((res) => {
//       resolve(res?.data)
//     }).catch((err) => {
//       reject(err)
//     })
//   })
// }

//   function getAllTopics() {
//     const url = `${global.foshanServiceBaseUrl}${global.serviceBasePath}`;
//     const formData = new FormData();
//     formData.append('interfaceId', 'fe11357e6d785a36738f41729cfb4b9f');
//     formData.append('TREE_CODE', 'CATCHMENT_AREA_SOURCE');

//     return new Promise((resolve) => {
//       axios
//         .post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
//         .then((res) => {
//           resolve(res?.data || { data: [] });
//         })
//         .catch((err) => {
//           console.error('获取所有关联要素失败', err);
//           resolve({ data: [] });
//         });
//     });
//   }

//   async function getCombinedData() {
//     state.selectedTopicsData = [];
//     state.sceneList = [];
//     state.enterList = [];
//     let didAutoSelect = false;
//     try {
//       // 并行发起两个请求 + 获取所有配置项
//       const [data1, data2, allTopicsRes] = await Promise.all([getData(1), getData(2), getAllTopics()]);

//       // 组合数据（根据实际数据结构调整合并方式）
//       const combinedData = {
//         data1,  // type=1 的结果
//         data2,  // type=2 的结果
//         allData: [...(data1.groupResult || []), ...(data2.groupResult || [])]
//       };

//       const defaultSelectTopicName = ['涉水企业', '入河排污口'];
//       const resultData = sourceType === 1 ? (combinedData.data1.groupResult || []) : (combinedData.allData || []);
//       const allTopics = allTopicsRes?.data || [];

//       // 如果获取到了配置列表，以配置列表为准：有则显示数量，无则补0
//       if (Array.isArray(allTopics) && allTopics.length > 0) {
//         state.cardNoData = false;

//         const rawList = Array.isArray(state.sceneRawList) ? state.sceneRawList : [];

//                  state.sceneList = allTopics.map((topic) => {
//             const name = topic.DICTIONARYNAME;
//             const matchedItems = resultData.filter((item) => item?.DATA_TYPE === name);
//             const totalNum = matchedItems.reduce((sum, item) => sum + (Number(item?.doc_count) || 0), 0);
//             const baseItem = matchedItems[0] || {};
//             // WSYSTEM_CODE=1 的聚合结果（后端返回的 TAG_TOPIC_CODE 为 uuid，前端交互必须优先使用该值）
//             // 注意：并非所有类型都一定在 WSYSTEM_CODE=1 有数据，所以需要 fallback，避免页面“点不了/筛选按钮不显示”
//             const w1GroupResult = combinedData?.data1?.groupResult || [];
//             const w1MatchedItems = w1GroupResult.filter((item) => item?.DATA_TYPE === name);
//             const baseW1 = w1MatchedItems[0] || {};

//             // 方案A：TAG_TOPIC_CODE 优先用 WSYSTEM_CODE=1 返回的 uuid；没有则退回 resultData 的 TAG_TOPIC_CODE；最后用字典码兜底不让页面塌
//             // 说明：topic.DICTIONARYCODE 目前更像“实体编码(tag_xxx...)”，不是 topic uuid；仅作为兜底占位，后续后端补齐字段后可统一来源
//             const resolvedTopicCode = baseW1?.TAG_TOPIC_CODE || baseItem?.TAG_TOPIC_CODE || topic.DICTIONARYCODE;
//             const resolvedEntityCode = baseW1?.TAG_ENTITY_CODE || baseItem?.TAG_ENTITY_CODE || topic.DICTIONARYCODE;
//             const raw = rawList.find((r) => r?.topicName === name || r?.title === name);

//             return {
//               ...baseItem,
//               title: name,
//               DATA_TYPE: name,
//               // 注意：部分卡片组件内部可能用 v-if="num" 判断，数值0会导致整块不渲染；用字符串'0'可避免空白卡
//               num: String(totalNum),
//               // unit: raw?.unit || baseItem?.unit || '家',
//               unit: resolveUnit(name, raw?.unit, baseItem?.unit, '家'),
//               color: raw?.color || baseItem?.color || 'var(--t-white)',
//               sortIndex: topic.DICTIONARYSORTINDEX,
//               hasOperateColumn: raw?.hasOperateColumn ?? baseItem?.hasOperateColumn ?? false,
//               // 关键：不要再用 DICTIONARYCODE 覆盖 TAG_TOPIC_CODE，否则 activeTab.value / waterTraceSourceActiceTab 会变成 tag_xxx 而不是 uuid
//               TAG_ENTITY_CODE: resolvedEntityCode,
//               TAG_TOPIC_CODE: resolvedTopicCode,
//               topicCode: resolvedTopicCode,
//               entityCode: resolvedEntityCode,
//             };
//           });

//         // 排序
//         state.sceneList.sort((a, b) => Number(a.sortIndex) - Number(b.sortIndex));

//         // 默认选中：仅从 num>0 的项里选；若全部为0，则不选中
//         const selectedItems = [];
//         const pickIfHasData = (name) => {
//           const idx = state.sceneList.findIndex((v) => v?.title === name && Number(v?.num || 0) > 0);
//           if (idx > -1) selectedItems.push(state.sceneList[idx]);
//         };

//         defaultSelectTopicName.forEach(pickIfHasData);

//         if (!selectedItems.length) {
//           const firstHasData = state.sceneList.find((v) => Number(v?.num || 0) > 0);
//           if (firstHasData) selectedItems.push(firstHasData);
//         }

//         if (selectedItems.length) {
//           didAutoSelect = true;
//           // 选中第一个（会触发列表请求与地图联动）
//           clickSceneCard(selectedItems, selectedItems[0]);
//         }

//       } else {
//         // 降级处理：如果没有配置列表，只显示有数据的项（保持现状）
//         if (resultData.length) {
//           state.cardNoData = false;
//           state.sceneList = resultData.map((item) => ({
//             ...item,
//             title: item?.DATA_TYPE || item?.DATA_TYPE,
//             num: String(Number(item?.doc_count) || 0),
//             // unit: '家',
//                  unit: resolveUnit(item?.DATA_TYPE, item?.unit, undefined, '家'),
//             color: 'var(--t-white)',
//           }));

//           // 现状默认选中（兼容老逻辑，但避免选中0）
//           const selectedItems = [];
//           defaultSelectTopicName.forEach((topicName) => {
//             const index = state.sceneList.findIndex((val) => val.title === topicName && Number(val?.num || 0) > 0);
//             if (index > -1) selectedItems.push(state.sceneList[index]);
//           });
//           if (!selectedItems.length) {
//             const firstHasData = state.sceneList.find((v) => Number(v?.num || 0) > 0);
//             if (firstHasData) selectedItems.push(firstHasData);
//           }
//           if (selectedItems.length) {
//             didAutoSelect = true;
//             clickSceneCard(selectedItems, selectedItems[0]);
//           }
//         } else {
//           state.sceneList = [];
//           state.cardNoData = true;
//         }
//       }

//       console.log(combinedData);
//     } catch (error) {
//       console.error('获取数据失败:', error);
//       // 保持抛出，避免吞错；但 loading 在 finally 兜底关闭
//       throw error;
//     } finally {
//       // 卡片区 loading 一定要关闭
//       state.cardLoading = false;
//       // 若没有触发任何列表请求，列表 loading 也要关闭，否则会一直“加载中...”
//       if (!didAutoSelect) {
//         state.listLoading = false;
//         state.enterList = [];
//       }
//     }
//   }

// getCombinedData()


// -----------
// 单位修正：仅对指定三项强制显示“个”
const UNIT_OVERRIDE_TITLES = new Set(['体检问题', '高光谱视频', '小流域自动站']);
const resolveUnit = (title, rawUnit, baseUnit, defaultUnit = '家') => {
  if (title && UNIT_OVERRIDE_TITLES.has(title)) return '个';
  return rawUnit || baseUnit || defaultUnit;
};


function getData(type = 2) {
  const url = `${global.foshanServiceBaseUrl}${global.serviceBasePath}`;
  // const { sourceTracingType } = global.waterGlobalVariables.waterOverview;
  const sourceTracingType = '2';
  // // 获取流域编码为2 就是信访问题那些数据
  // let params = {
  //   "pointValue": sourceTracingType === '1' ? "" : state.gisFeature,
  //   "gisType": sourceTracingType === '1' ? "" : 'geo_polygon',
  //   "WSYSTEM_CODE": sourceTracingType,
  //   "queryField": sourceTracingType === '1' ? "POINT_CODE" : '',
  //   "keyword": sourceTracingType === '1' ? state.sourceParmasState.componentSourceParmas.POINT_CODE : '',
  //   "useGisShape": sourceTracingType === '1' ? "false" : "true",
  //   "locationField": "location",
  //   "hasGather": "true",
  //   "groupFields": "TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE",
  //   "ENTITY_CODE": "tag_gather_yztssy_1764226196133",
  //   "interfaceId": "32fbf72522e1a004b67b5d906410ec8d",
  // }

  // // 获取流域编码为1 就是溯源时候的哪些数据
  // if (type === 1 && sourceTracingType === '2') {
  //   params = {
  //     "pointValue": state.gisFeature,
  //     "gisType": 'geo_polygon',
  //     "WSYSTEM_CODE": '1',
  //     "queryField": "POINT_CODE",
  //     "keyword": state.sourceParmasState.componentSourceParmas.POINT_CODE,
  //     "useGisShape": "true",
  //     "locationField": "location",
  //     "hasGather": "true",
  //     "groupFields": "TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE",
  //     "ENTITY_CODE": "tag_gather_yztssy_1764226196133",
  //     "interfaceId": "32fbf72522e1a004b67b5d906410ec8d",
  //   }
  // }

  // // 溯源原有逻辑
  // if (type === 1 && sourceTracingType === '2') {
  //   params = {
  //     "WSYSTEM_CODE": '1',
  //     "queryField": "POINT_CODE",
  //     "keyword": state.sourceParmasState.componentSourceParmas.POINT_CODE,
  //     "useGisShape": "false",
  //     "locationField": "location",
  //     "hasGather": "true",
  //     "groupFields": "TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE",
  //     "ENTITY_CODE": "tag_gather_yztssy_1764226196133",
  //     "interfaceId": "32fbf72522e1a004b67b5d906410ec8d",
  //   }

  //   delete params?.pointValue;
  //   delete params?.gisType;
  // }

  // 创建 FormData 对象
  const formData = new FormData();

  // 基础参数（对应 type=2 的情况）
  formData.append('pointValue', sourceTracingType === '1' ? '' : (state.gisFeature || ''));
  formData.append('gisType', sourceTracingType === '1' ? '' : 'geo_polygon');
  formData.append('WSYSTEM_CODE', sourceTracingType);
  formData.append('queryField', sourceTracingType === '1' ? 'POINT_CODE' : '');
  formData.append('keyword', sourceTracingType === '1' ? (state.sourceParmasState?.componentSourceParmas?.POINT_CODE || '') : '');
  formData.append('useGisShape', sourceTracingType === '1' ? 'false' : 'true');
  formData.append('locationField', 'location');
  formData.append('hasGather', 'true');
  formData.append('groupFields', 'TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE');
  formData.append('ENTITY_CODE', 'tag_gather_yztssy_1764226196133');
  formData.append('interfaceId', '32fbf72522e1a004b67b5d906410ec8d');

  if (type === 1 && sourceTracingType === '2') {
    formData.set('WSYSTEM_CODE', '1');
    formData.set('queryField', 'POINT_CODE');
    formData.set('keyword', state.sourceParmasState?.componentSourceParmas?.POINT_CODE || '');
    formData.set('useGisShape', 'false');
    // 清空不需要的字段
    formData.set('pointValue', '');
    formData.set('gisType', '');
  }


  //   // 创建 FormData 对象
  //   const formData = new FormData();

  //   // 基础参数（对应 type=2 的情况）
  //   formData.append('pointValue', sourceTracingType === '1' ? '' : (state.gisFeature || ''));
  //   formData.append('gisType', sourceTracingType === '1' ? '' : 'geo_polygon');
  //   formData.append('WSYSTEM_CODE', sourceTracingType);
  //   formData.append('queryField', sourceTracingType === '1' ? 'POINT_CODE' : '');
  //   formData.append('keyword', sourceTracingType === '1' ? (state.sourceParmasState.componentSourceParmas.POINT_CODE || '') : '');
  //   formData.append('useGisShape', sourceTracingType === '1' ? 'false' : 'true');
  //   formData.append('locationField', 'location');
  //   formData.append('hasGather', 'true');
  //   formData.append('groupFields', 'TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE');
  //   formData.append('ENTITY_CODE', 'tag_gather_yztssy_1764226196133');
  //   formData.append('interfaceId', '32fbf72522e1a004b67b5d906410ec8d');

  //   // 特殊处理 type=1 的情况
  //   if (type === 1) {
  //     if (sourceTracingType === '2') {
  //       formData.set('pointValue', state.gisFeature || '');
  //       formData.set('gisType', 'geo_polygon');
  //       formData.set('WSYSTEM_CODE', '1');
  //       formData.set('queryField', 'POINT_CODE');
  //       formData.set('keyword', state.sourceParmasState.componentSourceParmas.POINT_CODE || '');
  //       formData.set('useGisShape', 'true');
  //     } else if (sourceTracingType === '1') {
  //       formData.set('WSYSTEM_CODE', '1');
  //       formData.set('queryField', 'POINT_CODE');
  //       formData.set('keyword', state.sourceParmasState.componentSourceParmas.POINT_CODE || '');
  //       formData.set('useGisShape', 'false');
  //       // 清空不需要的字段
  //       formData.set('pointValue', '');
  //       formData.set('gisType', '');
  //     }
  //   }
  return new Promise((resolve, reject) => {
    axios.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then((res) => {
      resolve(res?.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

function getAllTopics() {
  const url = `${global.foshanServiceBaseUrl}${global.serviceBasePath}`;
  const formData = new FormData();
  formData.append('interfaceId', 'fe11357e6d785a36738f41729cfb4b9f');
  formData.append('TREE_CODE', 'CATCHMENT_AREA_SOURCE');

  return new Promise((resolve) => {
    axios
      .post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((res) => {
        resolve(res?.data || { data: [] });
      })
      .catch((err) => {
        console.error('获取所有关联要素失败', err);
        resolve({ data: [] });
      });
  });
}

async function getCombinedData() {
  state.selectedTopicsData = [];
  state.sceneList = [];
  state.enterList = [];
  let didAutoSelect = false;
  try {
    // 并行发起两个请求 + 获取所有配置项
    const [data1, data2, allTopicsRes] = await Promise.all([getData(1), getData(2), getAllTopics()]);

    // 组合数据（根据实际数据结构调整合并方式）
    const combinedData = {
      data1,  // type=1 的结果
      data2,  // type=2 的结果
      allData: [...(data1.groupResult || []), ...(data2.groupResult || [])]
    };

    const defaultSelectTopicName = ['涉水企业', '入河排污口'];
    const resultData = sourceType === 1 ? (combinedData.data1.groupResult || []) : (combinedData.allData || []);
    const allTopics = allTopicsRes?.data || [];

    // 如果获取到了配置列表，以配置列表为准：有则显示数量，无则补0
    if (Array.isArray(allTopics) && allTopics.length > 0) {
      state.cardNoData = false;

      const rawList = Array.isArray(state.sceneRawList) ? state.sceneRawList : [];

      state.sceneList = allTopics.map((topic) => {
        const name = topic.DICTIONARYNAME;
        const matchedItems = resultData.filter((item) => item?.DATA_TYPE === name);
        const totalNum = matchedItems.reduce((sum, item) => sum + (Number(item?.doc_count) || 0), 0);
        const baseItem = matchedItems[0] || {};
        // WSYSTEM_CODE=1 的聚合结果（后端返回的 TAG_TOPIC_CODE 为 uuid，前端交互必须优先使用该值）
        // 注意：并非所有类型都一定在 WSYSTEM_CODE=1 有数据，所以需要 fallback，避免页面“点不了/筛选按钮不显示”
        const w1GroupResult = combinedData?.data1?.groupResult || [];
        const w1MatchedItems = w1GroupResult.filter((item) => item?.DATA_TYPE === name);
        const baseW1 = w1MatchedItems[0] || {};

        // 方案A：TAG_TOPIC_CODE 优先用 WSYSTEM_CODE=1 返回的 uuid；没有则退回 resultData 的 TAG_TOPIC_CODE；最后用字典码兜底不让页面塌
        // 说明：topic.DICTIONARYCODE 目前更像“实体编码(tag_xxx...)”，不是 topic uuid；仅作为兜底占位，后续后端补齐字段后可统一来源
        const resolvedTopicCode = baseW1?.TAG_TOPIC_CODE || baseItem?.TAG_TOPIC_CODE || topic.DICTIONARYCODE;
        const resolvedEntityCode = baseW1?.TAG_ENTITY_CODE || baseItem?.TAG_ENTITY_CODE || topic.DICTIONARYCODE;
        const raw = rawList.find((r) => r?.topicName === name || r?.title === name);

        return {
          ...baseItem,
                  // 字典扩展字段：用于卡片二次分类（zxjc / other）
            EXT1: topic?.EXT1 ?? '',
          title: name,
          DATA_TYPE: name,
          // 注意：部分卡片组件内部可能用 v-if="num" 判断，数值0会导致整块不渲染；用字符串'0'可避免空白卡
          num: String(totalNum),
          // unit: raw?.unit || baseItem?.unit || '家',
          unit: resolveUnit(name, raw?.unit, baseItem?.unit, '家'),
          color: raw?.color || baseItem?.color || 'var(--t-white)',
          sortIndex: topic.DICTIONARYSORTINDEX,
          hasOperateColumn: raw?.hasOperateColumn ?? baseItem?.hasOperateColumn ?? false,
          // 关键：不要再用 DICTIONARYCODE 覆盖 TAG_TOPIC_CODE，否则 activeTab.value / waterTraceSourceActiceTab 会变成 tag_xxx 而不是 uuid
          TAG_ENTITY_CODE: resolvedEntityCode,
          TAG_TOPIC_CODE: resolvedTopicCode,
          topicCode: resolvedTopicCode,
          entityCode: resolvedEntityCode,
        };
      });

      // 排序
      state.sceneList.sort((a, b) => Number(a.sortIndex) - Number(b.sortIndex));

      
        // 基于字典 EXT1 对 sceneList 二次分类，供后续拆成两个卡片组件使用
        state.sceneListGroup = { zxjc: [], other: [] };
        state.sceneList.forEach((item) => {
          if (item?.EXT1 === 'zxjc') state.sceneListGroup.zxjc.push(item);
          else state.sceneListGroup.other.push(item);
        });

      // 默认勾选：与卡片默认保持一致（涉水企业、入河排污口）
      // 默认激活：优先“涉水企业”，其次“入河排污口”，最后兜底第一个有数据项/第一个项
      const selectedItems = [];
      const pickIfExists = (name) => {
        const idx = state.sceneList.findIndex((v) => v?.title === name);
        if (idx > -1) selectedItems.push(state.sceneList[idx]);
      };
      defaultSelectTopicName.forEach(pickIfExists);

      const pickActiveByName = (name) => state.sceneList.find((v) => v?.title === name);
      let activeItem = pickActiveByName('涉水企业') || pickActiveByName('入河排污口') || null;

      // 若默认两项都不存在，则兜底选中第一条有数据的；若仍无，兜底第一条
      if (!selectedItems.length) {
        const firstHasData = state.sceneList.find((v) => Number(v?.num || 0) > 0);
        if (firstHasData) selectedItems.push(firstHasData);
        else if (state.sceneList[0]) selectedItems.push(state.sceneList[0]);
        activeItem = selectedItems[0] || null;
      } else {
        // 保证 activeItem 一定在勾选列表里，避免“激活项不在已勾选集合”导致逻辑分叉
        if (activeItem && !selectedItems.some((v) => v?.TAG_TOPIC_CODE === activeItem?.TAG_TOPIC_CODE)) {
          selectedItems.unshift(activeItem);
        }
        if (!activeItem) activeItem = selectedItems[0] || null;
      }

      if (selectedItems.length && activeItem) {
        didAutoSelect = true;
        clickSceneCard(selectedItems, activeItem);
        // 启动默认勾选 N 项：补发其余勾选项到地图（每项 visible=true）
        // 交互取消/勾选仍由 clickSceneCard 按“本次变化”单条发送
        const __seenTopicCodes = new Set();
        selectedItems.forEach((it) => {
          const code = it?.TAG_TOPIC_CODE;
          if (!code || __seenTopicCodes.has(code)) return;
          __seenTopicCodes.add(code);
          if (activeItem?.TAG_TOPIC_CODE === code) return;
          // 直接复制一份消息发送逻辑：默认勾选几项就发几项（每项 visible=true）
          // const typeList = ["涉水企业", "入河排污口", "污水处理厂", "水电站"];
          const typeList = ["涉水企业", "入河排污口", "污水处理厂"];
          if (typeList.includes(it.DATA_TYPE)) {
            rootData.rootSocket.emit(
              'message',  // 固定的消息名称，不能修改
              {
                room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
                type: 'updateWaterSourceResult',  // 消息类型名称
                data: {                   // 消息内容，对象格式
                  topicCode: it.TAG_TOPIC_CODE,
                  tagJson: '{}',
                  visible: true,
                  pointCode: state.sourceParmasState.componentSourceParmas.POINT_CODE, // 断面编码
                  ENTITY_CODE: it.TAG_ENTITY_CODE,
                  queryField: 'POINT_CODE',
                  orderBy: '',
                  pageSize: 2000,
                },
                from: 'lego-水-溯源-关联分析'
              }
            );
          } else {
            rootData.rootSocket.emit(
              'message',  // 固定的消息名称，不能修改
              {
                room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
                type: 'updateWaterSourceResult',  // 消息类型名称
                data: {                   // 消息内容，对象格式
                  topicCode: it.TAG_TOPIC_CODE,
                  tagJson: '{}',
                  visible: true,
                  pointCode: '', // 断面编码
                  ENTITY_CODE: it.TAG_ENTITY_CODE,
                  queryField: '',
                  orderBy: '',
                  pageSize: 2000,
                  "pointValue": state.gisFeature,
                  "gisType": "geo_polygon",
                  useGisShape: "true"
                },
                from: 'lego-水-溯源-关联分析'
              }
            );
          }
        });
      }

    } else {
      // 降级处理：如果没有配置列表，只显示有数据的项（保持现状）
      if (resultData.length) {
        state.cardNoData = false;
        state.sceneList = resultData.map((item) => ({
          ...item,
          title: item?.DATA_TYPE || item?.DATA_TYPE,
          num: String(Number(item?.doc_count) || 0),
          // unit: '家',
          unit: resolveUnit(item?.DATA_TYPE, item?.unit, undefined, '家'),
          color: 'var(--t-white)',
        }));

                // 无字典配置时无法识别 EXT1：默认全部归入 other（zxjc 为空）
          state.sceneListGroup = { zxjc: [], other: [...state.sceneList] };

        // 默认勾选/激活：与卡片默认保持一致（涉水企业、入河排污口）
        const selectedItems = [];
        const pickIfExists = (name) => {
          const idx = state.sceneList.findIndex((v) => v?.title === name);
          if (idx > -1) selectedItems.push(state.sceneList[idx]);
        };
        defaultSelectTopicName.forEach(pickIfExists);

        const pickActiveByName = (name) => state.sceneList.find((v) => v?.title === name);
        let activeItem = pickActiveByName('涉水企业') || pickActiveByName('入河排污口') || null;

        if (!selectedItems.length) {
          const firstHasData = state.sceneList.find((v) => Number(v?.num || 0) > 0);
          if (firstHasData) selectedItems.push(firstHasData);
          else if (state.sceneList[0]) selectedItems.push(state.sceneList[0]);
          activeItem = selectedItems[0] || null;
        } else {
          if (activeItem && !selectedItems.some((v) => v?.TAG_TOPIC_CODE === activeItem?.TAG_TOPIC_CODE)) {
            selectedItems.unshift(activeItem);
          }
          if (!activeItem) activeItem = selectedItems[0] || null;
        }

        if (selectedItems.length && activeItem) {
          didAutoSelect = true;
          clickSceneCard(selectedItems, activeItem);
          const __seenTopicCodes = new Set();
          selectedItems.forEach((it) => {
            const code = it?.TAG_TOPIC_CODE;
            if (!code || __seenTopicCodes.has(code)) return;
            __seenTopicCodes.add(code);
            if (activeItem?.TAG_TOPIC_CODE === code) return;
            // 直接复制一份消息发送逻辑：默认勾选几项就发几项（每项 visible=true）
            // const typeList = ["涉水企业", "入河排污口", "污水处理厂", "水电站"];
            const typeList = ["涉水企业", "入河排污口", "污水处理厂"];
            if (typeList.includes(it.DATA_TYPE)) {
              rootData.rootSocket.emit(
                'message',  // 固定的消息名称，不能修改
                {
                  room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
                  type: 'updateWaterSourceResult',  // 消息类型名称
                  data: {                   // 消息内容，对象格式
                    topicCode: it.TAG_TOPIC_CODE,
                    tagJson: '{}',
                    visible: true,
                    pointCode: state.sourceParmasState.componentSourceParmas.POINT_CODE, // 断面编码
                    ENTITY_CODE: it.TAG_ENTITY_CODE,
                    queryField: 'POINT_CODE',
                    orderBy: '',
                    pageSize: 2000,
                  },
                  from: 'lego-水-溯源-关联分析'
                }
              );
            } else {
              rootData.rootSocket.emit(
                'message',  // 固定的消息名称，不能修改
                {
                  room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
                  type: 'updateWaterSourceResult',  // 消息类型名称
                  data: {                   // 消息内容，对象格式
                    topicCode: it.TAG_TOPIC_CODE,
                    tagJson: '{}',
                    visible: true,
                    pointCode: '', // 断面编码
                    ENTITY_CODE: it.TAG_ENTITY_CODE,
                    queryField: '',
                    orderBy: '',
                    pageSize: 2000,
                    "pointValue": state.gisFeature,
                    "gisType": "geo_polygon",
                    useGisShape: "true"
                  },
                  from: 'lego-水-溯源-关联分析'
                }
              );
            }
          });
        }
      } else {
        state.sceneList = [];
        state.cardNoData = true;
      }
    }

    console.log(combinedData);
    console.log('state.sceneListGroup', state.sceneListGroup )
  } catch (error) {
    console.error('获取数据失败:', error);
    // 保持抛出，避免吞错；但 loading 在 finally 兜底关闭
    throw error;
  } finally {
    // 卡片区 loading 一定要关闭
    state.cardLoading = false;
    // 若没有触发任何列表请求，列表 loading 也要关闭，否则会一直“加载中...”
    if (!didAutoSelect) {
      state.listLoading = false;
      state.enterList = [];
    }
  }
}

getCombinedData()
};
const sendMessageToGetGeoPolygon = () => {
/* 发送消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractiveChange", // 消息名称
  data: [ // 消息内容
    // 查看汇水区时传true
    { shareCode: "isWatershedTraceSource", runtimeValue: true },
    { shareCode: "trace_source", runtimeValue: true },
    { shareCode: "MULTI_POLLUTANTS", runtimeValue: "None" },
    // {
    //   shareCode: "showWaterTraceDetail",
    //   componentName: "waterTraceabilityContentComponent",
    //   componentParmas: {
    //     POINT_CODE: state.pointCode,
    //     ASSESSTYPE: state.assessType,
    //     DATA_FREQUENCY,
    //     MULTI_POLLUTANTS: '',
    //     MONITORTIME: state.monitorTime
    //   },
    //   traceDetailUrl: ''
    //   // traceDetailUrl: `/view/view/show/index.vm?screenId=adfe253d6f5c434c1f6388aae1c18bbe&REGION_CODE=${global.regionaQuery.regionCode}&POINT_CODE=${state.pointCode}&MONITORTIME=${state.monitorTime}&DATA_FREQUENCY=4&ASSESSTYPE=${state.assessType}&MULTI_POLLUTANTS=` + selectedStrInitialize
    // }
  ]
});

rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [ // 消息内容
    { shareCode: "isWatershedTraceSource", runtimeValue: true },
    { shareCode: "trace_source", runtimeValue: true },
    { shareCode: "MULTI_POLLUTANTS", runtimeValue: "None" },
    // {
    //   shareCode: "showWaterTraceDetail",
    //   componentName: "waterTraceabilityContentComponent",
    //   componentParmas: {
    //     POINT_CODE: state.pointCode,
    //     ASSESSTYPE: state.assessType,
    //     DATA_FREQUENCY,
    //     MULTI_POLLUTANTS: '',
    //     MONITORTIME: state.monitorTime
    //   },
    //   traceDetailUrl: ''
    //   // traceDetailUrl: `/view/view/show/index.vm?screenId=adfe253d6f5c434c1f6388aae1c18bbe&REGION_CODE=${global.regionaQuery.regionCode}&POINT_CODE=${state.pointCode}&MONITORTIME=${state.monitorTime}&DATA_FREQUENCY=4&ASSESSTYPE=${state.assessType}&MULTI_POLLUTANTS=` + selectedStrInitialize
    // }
  ]
});
};
const changeOneSelect = () => {

state.selectOne = state.selectOneStr ? state.selectOneStr.split(",") : []
state.selectTwo = state.selectTwoStr ? state.selectTwoStr.split(",") : []

};
const oncardClick1764322825819 = (clickItem,checkedList) => {
// 执行自定义方法
clickSceneCard(checkedList,clickItem);
// 执行自定义方法
renderScrollTab();
};
const oncardClick1770106093327_0_0 = (clickItem,checkedList) => {
// 执行自定义方法
clickSceneCard(checkedList,clickItem);
// 执行自定义方法
renderScrollTab();
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
type: "updateFitlerPanelData", // 消息名称
data: {"topicName":state.activeTab.name,"topicCode":state.activeTab.value,"type":"waterRelation"}, // 发送的数据
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeTagFilterPanelVisible", // 消息名称
data: {"panelName":"relationFilterPanel"}, // 发送的数据
});
};
const oncardClick1764321793704_0_0 = (data) => {
// 执行自定义方法
handleSelectTab(data);
};
const onclick1735205190641 = () => {
// 执行自定义方法
dispatchTask(state.checkedIds);
};
const oncellClick1735184769666_0_0 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(column,row);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getEnterList: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"gisType","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"SsAjYmSjea"},{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"pointValue","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"b3nuK22ODF","children":[]}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"orderBy\":\"state.orderBy\",\"pointValue\":\"this.pointValue\",\"gisType\":\"this.gisType\",\"tagJson\":\"state.tagJson\",\"queryField\":\"POINT_CODE\",\"keyword\":\"state.sourceParmasState.componentSourceParmas.POINT_CODE\",\"pageSize\":\"2000\",\"pageNum\":\"1\",\"useGisShape\":\"false\",\"useSegment\":\"false\",\"topicCode\":\"state.selectedTab\",\"locationField\":\"location\",\"HasAllTag\":\"true\",\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\",\"ENTITY_CODE\":\"state.activeTab.entityCode\"})qsstringifyend"},
              request: function (gisType,pointValue, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"orderBy":state.orderBy,"pointValue":pointValue,"gisType":gisType,"tagJson":state.tagJson,"queryField":"POINT_CODE","keyword":state.sourceParmasState.componentSourceParmas.POINT_CODE,"pageSize":"2000","pageNum":"1","useGisShape":"false","useSegment":"false","topicCode":state.selectedTab,"locationField":"location","HasAllTag":"true","interfaceId":"8b5ca6a3009f750b5b1f19a415589682","ENTITY_CODE":state.activeTab.entityCode}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"orderBy\":\state.orderBy\,\"pointValue\":\pointValue\,\"gisType\":\gisType\,\"tagJson\":\state.tagJson\,\"queryField\":\"POINT_CODE\",\"keyword\":\state.sourceParmasState.componentSourceParmas.POINT_CODE\,\"pageSize\":\"2000\",\"pageNum\":\"1\",\"useGisShape\":\"false\",\"useSegment\":\"false\",\"topicCode\":\state.selectedTab\,\"locationField\":\"location\",\"HasAllTag\":\"true\",\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\",\"ENTITY_CODE\":\state.activeTab.entityCode\})qsstringifyend");
                   
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
// 结束列表加载中动画
state.listLoading = false;
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
 getCardData: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"gisType","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"gh0Pv2SETG","children":[]},{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"pointValue","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"GKK1oeT2qg"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"pointValue\":\"this.pointValue\",\"gisType\":\"this.gisType\",\"WSYSTEM_CODE\":\"1\",\"queryField\":\"POINT_CODE\",\"keyword\":\"state.sourceParmasState.componentSourceParmas.POINT_CODE\",\"useGisShape\":\"false\",\"locationField\":\"location\",\"hasGather\":\"true\",\"groupFields\":\"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE\",\"ENTITY_CODE\":\"tag_gather_yztssy_1764226196133\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend"},
              request: function (gisType,pointValue, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"pointValue":pointValue,"gisType":gisType,"WSYSTEM_CODE":"1","queryField":"POINT_CODE","keyword":state.sourceParmasState.componentSourceParmas.POINT_CODE,"useGisShape":"false","locationField":"location","hasGather":"true","groupFields":"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE","ENTITY_CODE":"tag_gather_yztssy_1764226196133","interfaceId":"32fbf72522e1a004b67b5d906410ec8d"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"pointValue\":\pointValue\,\"gisType\":\gisType\,\"WSYSTEM_CODE\":\"1\",\"queryField\":\"POINT_CODE\",\"keyword\":\state.sourceParmasState.componentSourceParmas.POINT_CODE\,\"useGisShape\":\"false\",\"locationField\":\"location\",\"hasGather\":\"true\",\"groupFields\":\"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE\",\"ENTITY_CODE\":\"tag_gather_yztssy_1764226196133\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardData'] = res.data;
                
     // const defaultSelectTopicName = ['涉水企业', '入河排污口'];
// state.cardNoData = false;

// if (res?.data?.groupResult?.length) {
//   state.sceneList = res?.data?.groupResult.map(item => {
//     return {
//       ...item,
//       title: item?.DATA_TYPE || item?.DATA_TYPE,
//       num: item?.doc_count || '0',
//       unit: '家',
//       color: 'var(--t-white)',
//     }
//   });

//     // const selectedIndexs = [];
//   const selectedItems = [];
//   defaultSelectTopicName.forEach((topicName) => {
//     const index = state.sceneList.findIndex((val) => val.title === topicName);
//     if (index > -1) {
//       selectedItems.push(state.sceneList[index]);
//       clickSceneCard(selectedItems, state.sceneList[index]);
//     }
//   });

// } else {
//   state.sceneList = []
//   state.listLoading = false;
//   state.cardNoData = true;
// }

// state.cardLoading = false;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.cardLoading = false;

      reject(error);
    });
  });
},
              },
// 接口函数
 getCatchmentAreaCardData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"pointValue\":\"state.gisFeature\",\"gisType\":\"geo_polygon\",\"WSYSTEM_CODE\":\"2\",\"queryField\":\"\",\"keyword\":\"\",\"useGisShape\":\"true\",\"locationField\":\"location\",\"hasGather\":\"true\",\"groupFields\":\"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE\",\"ENTITY_CODE\":\"tag_gather_yztssy_1764226196133\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"pointValue":state.gisFeature,"gisType":"geo_polygon","WSYSTEM_CODE":"2","queryField":"","keyword":"","useGisShape":"true","locationField":"location","hasGather":"true","groupFields":"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE","ENTITY_CODE":"tag_gather_yztssy_1764226196133","interfaceId":"32fbf72522e1a004b67b5d906410ec8d"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"pointValue\":\state.gisFeature\,\"gisType\":\"geo_polygon\",\"WSYSTEM_CODE\":\"2\",\"queryField\":\"\",\"keyword\":\"\",\"useGisShape\":\"true\",\"locationField\":\"location\",\"hasGather\":\"true\",\"groupFields\":\"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE\",\"ENTITY_CODE\":\"tag_gather_yztssy_1764226196133\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCatchmentAreaCardData'] = res.data;
                
     // if (res?.data?.groupResult?.length) {
//   const sceneList = res?.data?.groupResult.map(item => {
//     return {
//       ...item,
//       title: item?.DATA_TYPE || item?.DATA_TYPE,
//       num: item?.doc_count || '0',
//       unit: '家',
//       color: 'var(--t-white)',
//     }
//   });

//   //   // const selectedIndexs = [];
//   //   // const selectedItems = [];
//   //   // defaultSelectTopicName.forEach((topicName) => {
//   //   //   const index = state.sceneList.findIndex((val) => val.title === topicName);
//   //   //   if (index > -1) {
//   //   //     selectedItems.push(state.sceneList[index]);
//   //   //     clickSceneCard(selectedItems, state.sceneList[index]);
//   //   //   }
//   //   // });

//   console.log(sceneList, 'sceneListsceneListsceneListsceneList')
//   state.sceneList = [
//     ...state.sceneList,
//     ...sceneList
//   ]


//   //   console.log(state.sceneList,'sceneListsceneListsceneListsceneList')

// } else {
//   //   // state.sceneList = []
//   //   // state.listLoading = false;
//   //   // state.cardNoData = true;
// }

// // // state.cardLoading = false;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.cardLoading = false;

      reject(error);
    });
  });
},
              },
// 接口函数
 getCatchmentAreaEnterList: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"gisType","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"48qaKEJFSN","children":[]},{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"pointValue","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"9mbqJWz2BN","children":[]},{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"WSYSTEM_CODE","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"rCGnqsJBjg","children":[]},{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"pointCode","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"SsAjYmSjea","children":[]},{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"queryField","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"b3nuK22ODF"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"orderBy\":\"state.orderBy\",\"pointCode\":\"this.pointCode\",\"WSYSTEM_CODE\":\"\",\"pointValue\":\"this.pointValue\",\"gisType\":\"this.gisType\",\"tagJson\":\"state.tagJson\",\"queryField\":\"this.queryField\",\"keyword\":\"this.pointCode\",\"pageSize\":\"2000\",\"pageNum\":\"1\",\"useGisShape\":\"true\",\"useSegment\":\"false\",\"topicCode\":\"state.selectedTab\",\"locationField\":\"location\",\"HasAllTag\":\"true\",\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\",\"ENTITY_CODE\":\"state.activeTab.entityCode\"})qsstringifyend"},
              request: function (gisType,pointValue,WSYSTEM_CODE,pointCode,queryField, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"orderBy":state.orderBy,"pointCode":pointCode,"WSYSTEM_CODE":"","pointValue":pointValue,"gisType":gisType,"tagJson":state.tagJson,"queryField":queryField,"keyword":pointCode,"pageSize":"2000","pageNum":"1","useGisShape":"true","useSegment":"false","topicCode":state.selectedTab,"locationField":"location","HasAllTag":"true","interfaceId":"8b5ca6a3009f750b5b1f19a415589682","ENTITY_CODE":state.activeTab.entityCode}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"orderBy\":\state.orderBy\,\"pointCode\":\pointCode\,\"WSYSTEM_CODE\":\"\",\"pointValue\":\pointValue\,\"gisType\":\gisType\,\"tagJson\":\state.tagJson\,\"queryField\":\queryField\,\"keyword\":\pointCode\,\"pageSize\":\"2000\",\"pageNum\":\"1\",\"useGisShape\":\"true\",\"useSegment\":\"false\",\"topicCode\":\state.selectedTab\,\"locationField\":\"location\",\"HasAllTag\":\"true\",\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\",\"ENTITY_CODE\":\state.activeTab.entityCode\})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCatchmentAreaEnterList'] = res.data;
                
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
// 结束列表加载中动画
state.listLoading = false;
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-relationAnalysis', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
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
// 执行自定义方法
initPage();
/* 接收socket.io消息 */
const onSocketChangecb04fdc16aaf4b8f8564 = function (data) {
if(data.type === "filterTag"){
try{
// 执行自定义方法
saveFilterTag(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangecb04fdc16aaf4b8f8564);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangecb04fdc16aaf4b8f8564);
});
/* 接收socket.io消息 */
const onSocketChange05a3ab72280842c49945 = function (data) {
if(data.type === "waterTraceSourceWatershedResult"){
try{
// 执行自定义方法
handlePointValue(data.data.geometry.coordinates);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange05a3ab72280842c49945);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange05a3ab72280842c49945);
});
// 执行自定义方法
sendMessageToGetGeoPolygon();
onBeforeUnmount(() => {
// 执行自定义方法
removeFilterTag();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "updateAirSourcePollutionAnalysisLayerStatus", // 消息名称
data: {"visible":false}, // 发送的数据
});
// 执行自定义方法
removeMapPoints();
});
onMounted(() => {
setPageScale('t-l-c-relationAnalysis', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
renderScrollTab();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tListCardMultipleChoicex0x5ComputedData = computed(() => _.merge({}, componentState.tListCardMultipleChoicex0x5.default, componentState.tListCardMultipleChoicex0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tRectx0x7ComputedData = computed(() => _.merge({}, componentState.tRectx0x7.default, componentState.tRectx0x7?.[state.screenSize]));

 const tListCardMultipleChoicex0x8ComputedData = computed(() => _.merge({}, componentState.tListCardMultipleChoicex0x8.default, componentState.tListCardMultipleChoicex0x8?.[state.screenSize]));

 const tButtonx0x9ComputedData = computed(() => _.merge({}, componentState.tButtonx0x9.default, componentState.tButtonx0x9?.[state.screenSize]));

 const tScrollableCardsx0x10ComputedData = computed(() => _.merge({}, componentState.tScrollableCardsx0x10.default, componentState.tScrollableCardsx0x10?.[state.screenSize]));

 const tComponentx0x11ComputedData = computed(() => _.merge({}, componentState.tComponentx0x11.default, componentState.tComponentx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tRectx0x13ComputedData = computed(() => _.merge({}, componentState.tRectx0x13.default, componentState.tRectx0x13?.[state.screenSize]));

 const tRectx0x14ComputedData = computed(() => _.merge({}, componentState.tRectx0x14.default, componentState.tRectx0x14?.[state.screenSize]));

 const tRowx0x15ComputedData = computed(() => _.merge({}, componentState.tRowx0x15.default, componentState.tRowx0x15?.[state.screenSize]));

 const tColx0x15x0ComputedData = computed(() => _.merge({}, componentState.tColx0x15x0.default, componentState.tColx0x15x0?.[state.screenSize]));

 const tIframex0x15x0x0ComputedData = computed(() => _.merge({}, componentState.tIframex0x15x0x0.default, componentState.tIframex0x15x0x0?.[state.screenSize]));

 const tColx0x15x1ComputedData = computed(() => _.merge({}, componentState.tColx0x15x1.default, componentState.tColx0x15x1?.[state.screenSize]));

 const tTablex0x15x1x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x15x1x0.default, componentState.tTablex0x15x1x0?.[state.screenSize]));

 const tTextCommonx0x16ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x16.default, componentState.tTextCommonx0x16?.[state.screenSize]));

 const tTextCommonx0x17ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x17.default, componentState.tTextCommonx0x17?.[state.screenSize]));

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
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tListCardMultipleChoicex0x5ComputedData,
tRectx0x6ComputedData,
tRectx0x7ComputedData,
tListCardMultipleChoicex0x8ComputedData,
tButtonx0x9ComputedData,
tScrollableCardsx0x10ComputedData,
tComponentx0x11ComputedData,
tTextx0x12ComputedData,
tRectx0x13ComputedData,
tRectx0x14ComputedData,
tRowx0x15ComputedData,
tColx0x15x0ComputedData,
tIframex0x15x0x0ComputedData,
tColx0x15x1ComputedData,
tTablex0x15x1x0ComputedData,
tTextCommonx0x16ComputedData,
tTextCommonx0x17ComputedData,
oncardClick1764322825819,
oncardClick1770106093327_0_0,
onclick1761120647351,
oncardClick1764321793704_0_0,
onclick1735205190641,
oncellClick1735184769666_0_0,
};
},
};