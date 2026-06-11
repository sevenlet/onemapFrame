window.waterSourceWisetRecommeComponent = {
template: 
`<div id="t-l-c-waterSourceWisetRecomme" class="t-l-c-waterSourceWisetRecomme" >` +
`<t-rect v-if="state.listLoading === true" id="t-rect-9c69.d5a9916a8" class="waterSourceWisetRecomme-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-678e.ec1d59e24" class="waterSourceWisetRecomme-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-list-card-multiple-choice v-if="state.cardLoading === false" id="t-list-card-multiple-choice-ec2d.7b812dfe6" class="waterSourceWisetRecomme-t-list-card-multiple-choice-0-4"  :c-style="tListCardMultipleChoicex0x4ComputedData.cStyle" :key-word="tListCardMultipleChoicex0x4ComputedData.keyWord" :default-checked="replaceCssVariables(filterData(state.selectedTopics, componentPropBindingMap?.['t-list-card-multiple-choice-ec2d.7b812dfe6']['defaultChecked'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tListCardMultipleChoicex0x4ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.sceneList, componentPropBindingMap?.['t-list-card-multiple-choice-ec2d.7b812dfe6']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @card-click="oncardClick1764811131694">` +
`</t-list-card-multiple-choice>` +
`<t-button v-if="state.activeTab.value !== ''" id="t-button-de6b.c70529ab6" class="waterSourceWisetRecomme-t-button-0-5"  :label="tButtonx0x5ComputedData.label" :round="tButtonx0x5ComputedData.round" :plain="tButtonx0x5ComputedData.plain" :disabled="tButtonx0x5ComputedData.disabled" :type="tButtonx0x5ComputedData.type" :size="tButtonx0x5ComputedData.size" :native-type="tButtonx0x5ComputedData.native-type" :c-style="tButtonx0x5ComputedData.cStyle" @click="onclick1764840173566">` +
`</t-button>` +
`<t-table v-if="state.listLoading === false" id="t-table-c9cb.1191728b8" class="waterSourceWisetRecomme-t-table-0-6"  :height="tTablex0x6ComputedData.height" :stripe="tTablex0x6ComputedData.stripe" :border="tTablex0x6ComputedData.border" :auto-scroll="tTablex0x6ComputedData.autoScroll" :speed="tTablex0x6ComputedData.speed" :columns="tTablex0x6ComputedData.columns" :data="replaceCssVariables(filterData(state.enterList, componentPropBindingMap?.['t-table-c9cb.1191728b8']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x6ComputedData.defaultSort" :c-style="tTablex0x6ComputedData.cStyle" @cell-click="oncellClick1764845073264">` +
`</t-table>` +
`<t-component id="t-component-5dd0.1c96052b" class="waterSourceWisetRecomme-t-component-0-8"  :name="tComponentx0x8ComputedData.name" :c-style="tComponentx0x8ComputedData.cStyle" :src="tComponentx0x8ComputedData.src" :component-name="tComponentx0x8ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-44d5.53a19c298" class="waterSourceWisetRecomme-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle">` +
`</t-text>` +
`<t-rect v-if="state.checkedIds !== ''" id="t-rect-edcb.01e99c84a" class="waterSourceWisetRecomme-t-rect-0-10"  :tip="tRectx0x10ComputedData.tip" :label="tRectx0x10ComputedData.label" :active="tRectx0x10ComputedData.active" :c-style="tRectx0x10ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.checkedIds === ''" id="t-rect-3f4b.8f2cab13a" class="waterSourceWisetRecomme-t-rect-0-11"  :tip="tRectx0x11ComputedData.tip" :label="tRectx0x11ComputedData.label" :active="tRectx0x11ComputedData.active" :c-style="tRectx0x11ComputedData.cStyle">` +
`</t-rect>` +
`<t-checkbox id="t-checkbox-6595.86a7b39ff" class="waterSourceWisetRecomme-t-checkbox-0-12"  :data="replaceCssVariables(filterData(state.pollutantList, componentPropBindingMap?.['t-checkbox-6595.86a7b39ff']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(filterData(state.selectedPollutantList, componentPropBindingMap?.['t-checkbox-6595.86a7b39ff']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x12ComputedData.dataAlias" :border="tCheckboxx0x12ComputedData.border" :use-button="tCheckboxx0x12ComputedData.useButton" :c-style="tCheckboxx0x12ComputedData.cStyle" @change="onchange1764756872857">` +
`</t-checkbox>` +
`<t-radio id="t-radio-c9c2.38c884bc6" class="waterSourceWisetRecomme-t-radio-0-13"  :options="tRadiox0x13ComputedData.options" :active="tRadiox0x13ComputedData.active" :alias="tRadiox0x13ComputedData.alias" :disabled="tRadiox0x13ComputedData.disabled" :border="tRadiox0x13ComputedData.border" :size="tRadiox0x13ComputedData.size" :is-use-button="tRadiox0x13ComputedData.isUseButton" :c-style="tRadiox0x13ComputedData.cStyle" @change="onchange1764826916088">` +
`</t-radio>` +
`<t-line id="t-line-f366.c42a28f96" class="waterSourceWisetRecomme-t-line-0-14"  :c-style="tLinex0x14ComputedData.cStyle">` +
`</t-line>` +
`<t-line id="t-line-566f.f4d4b4b04" class="waterSourceWisetRecomme-t-line-0-15"  :c-style="tLinex0x15ComputedData.cStyle">` +
`</t-line>` +
`<t-line id="t-line-84fb.fc8a1f9b3" class="waterSourceWisetRecomme-t-line-0-16"  :c-style="tLinex0x16ComputedData.cStyle">` +
`</t-line>` +
`<t-line id="t-line-0c7c.094fcaa5e" class="waterSourceWisetRecomme-t-line-0-17"  :c-style="tLinex0x17ComputedData.cStyle">` +
`</t-line>` +
`<t-text id="t-text-33fb.97b277483" class="waterSourceWisetRecomme-t-text-0-18"  :label="tTextx0x18ComputedData.label" :editable="tTextx0x18ComputedData.editable" :c-style="tTextx0x18ComputedData.cStyle" @mouseover="onmouseover1769146714567" @mouseout="onmouseout1769146732358">` +
`</t-text>` +
`<t-line id="t-line-eff5.f99edaa96" class="waterSourceWisetRecomme-t-line-0-19"  :c-style="tLinex0x19ComputedData.cStyle">` +
`</t-line>` +
`<t-line id="t-line-516e.d94cdda5d" class="waterSourceWisetRecomme-t-line-0-20"  :c-style="tLinex0x20ComputedData.cStyle">` +
`</t-line>` +
`<t-line id="t-line-5651.2a383f2dd" class="waterSourceWisetRecomme-t-line-0-21"  :c-style="tLinex0x21ComputedData.cStyle">` +
`</t-line>` +
`<t-line id="t-line-212c.f5c04620e" class="waterSourceWisetRecomme-t-line-0-22"  :c-style="tLinex0x22ComputedData.cStyle">` +
`</t-line>` +
`<t-text-common id="t-text-common-2a21.ccaf672f7" class="waterSourceWisetRecomme-t-text-common-0-23"  :label="tTextCommonx0x23ComputedData.label" :editable="tTextCommonx0x23ComputedData.editable" :c-style="tTextCommonx0x23ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common v-if="state.isShowTip === true" id="t-text-common-a27a.a9f3156dc" class="waterSourceWisetRecomme-t-text-common-0-24"  :label="tTextCommonx0x24ComputedData.label" :editable="tTextCommonx0x24ComputedData.editable" :c-style="tTextCommonx0x24ComputedData.cStyle">` +
`</t-text-common>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-9c69.d5a9916a8":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-678e.ec1d59e24":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-dc76.f01280e7a":{"attributeName":"tRectx0x2"},"t-rect-b0d2.476f485ea":{"attributeName":"tRectx0x3"},"t-list-card-multiple-choice-ec2d.7b812dfe6":{"attributeName":"tListCardMultipleChoicex0x4","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-button-de6b.c70529ab6":{"attributeName":"tButtonx0x5","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-table-c9cb.1191728b8":{"attributeName":"tTablex0x6","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-scrollable-cards-e4ee.24f7036c6":{"attributeName":"tScrollableCardsx0x7"},"t-component-5dd0.1c96052b":{"attributeName":"tComponentx0x8","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-44d5.53a19c298":{"attributeName":"tTextx0x9","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-edcb.01e99c84a":{"attributeName":"tRectx0x10","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-3f4b.8f2cab13a":{"attributeName":"tRectx0x11","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-checkbox-6595.86a7b39ff":{"attributeName":"tCheckboxx0x12","data":{"filters":[]},"active":{"filters":[]},"dataAlias":{"filters":[]},"border":{"filters":[]},"useButton":{"filters":[]},"cStyle":{"filters":[]}},"t-radio-c9c2.38c884bc6":{"attributeName":"tRadiox0x13","options":{"filters":[]},"active":{"filters":[]},"alias":{"filters":[]},"disabled":{"filters":[]},"border":{"filters":[]},"size":{"filters":[]},"isUseButton":{"filters":[]},"cStyle":{"filters":[]}},"t-line-f366.c42a28f96":{"attributeName":"tLinex0x14","cStyle":{"filters":[]}},"t-line-566f.f4d4b4b04":{"attributeName":"tLinex0x15","cStyle":{"filters":[]}},"t-line-84fb.fc8a1f9b3":{"attributeName":"tLinex0x16","cStyle":{"filters":[]}},"t-line-0c7c.094fcaa5e":{"attributeName":"tLinex0x17","cStyle":{"filters":[]}},"t-text-33fb.97b277483":{"attributeName":"tTextx0x18","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-line-eff5.f99edaa96":{"attributeName":"tLinex0x19","cStyle":{"filters":[]}},"t-line-516e.d94cdda5d":{"attributeName":"tLinex0x20","cStyle":{"filters":[]}},"t-line-5651.2a383f2dd":{"attributeName":"tLinex0x21","cStyle":{"filters":[]}},"t-line-212c.f5c04620e":{"attributeName":"tLinex0x22","cStyle":{"filters":[]}},"t-text-common-2a21.ccaf672f7":{"attributeName":"tTextCommonx0x23","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-a27a.a9f3156dc":{"attributeName":"tTextCommonx0x24","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   isShowTip: false,
   checkedIds: "",
   tagJsonBase: "",
   pollutantFieldName: "",
   orderBy: "",
   pageSize: 2000,
   reasonFieldName: "",
   scoreFieldName: "",
   pointInfoFieldName: "",
   tagJson: "{}",
   pointInfoStr: "",
   selectedPollutantList: [],
   pollutantList: [],
   selectedPollutants: "",
   dateType: "",
   sourceParmasState: {"componentSourceParmas":{"POINT_CODE":"","MONITORTIME":"","ASSESSTYPE":"","DATA_FREQUENCY":""}},
   cardNoData: false,
   selectedTopicsData: [],
   selectedTopics: [],
   listLoading: false,
   cardLoading: false,
   pointValue: "",
   activeTab: {"value":"","name":"","entityCode":""},
   sceneList: [],
   enterList: [],
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
            default: {"width":"410px","height":"597px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"1px","top":"211px","borderDirection":"all","position":"unset","animationName":"","background":"rgba(20, 112, 204, 0.3)","fillType":"color"},
            
            },
 default: { 
 
tip:false,
label:"加载中...",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"597px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"1px","top":"211px","borderDirection":"all","position":"unset","animationName":"","background":"rgba(20, 112, 204, 0.3)","fillType":"color"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"var(--business-white)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"76px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","background":"var(--business-show-bg30)","fillType":"color","borderDirection":"all","position":"unset","left":"0px","top":"52px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"76px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","background":"var(--business-show-bg30)","fillType":"color","borderDirection":"all","position":"unset","left":"0px","top":"52px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"var(--business-white)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tListCardMultipleChoicex0x4: {
defaultStyle: {
            default: {"width":"410px","height":"151px","overflowY":"auto","position":"unset","left":"617px","top":"259px","display":"grid","grid-template-columns":"repeat(auto-fill,131.33px)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"410px","height":"151px","overflowY":"auto","position":"unset","left":"617px","top":"259px","display":"grid","grid-template-columns":"repeat(auto-fill,131.33px)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","animationName":""}},"cardItem":{"default":{"boxSizing":"border-box","padding":"4px","background":"rgba(20, 112, 204, 0.3)","width":"131.33px","height":"54px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","display":"block","position":"relative","cursor":"pointer"},"active":{"background":"var(--business-tab-content-active-bg)","width":"131.33px","height":"54px","overflow":"hidden","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(138,210,255,0.8)","borderTop":"1px solid rgba(138,210,255,0.8)","borderRight":"1px solid rgba(138,210,255,0.8)","borderBottom":"1px solid rgba(138,210,255,0.8)","color":""},"hover":{"width":"131.33px","height":"54px","overflow":"hidden","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(138,210,255,0.8)","borderTop":"1px solid rgba(138,210,255,0.8)","borderRight":"1px solid rgba(138,210,255,0.8)","borderBottom":"1px solid rgba(138,210,255,0.8)","color":"var(--business-text-avianize)"}},"cardUnchecked":{"hover":{"background":"var(--business-tab-content-active-bg)","width":"131.33px","height":"54px","overflow":"hidden"},"default":{"backgroundColor":"rgba(20, 112, 204, 0.3)","width":"131.33px","height":"54px","overflow":"hidden"}},"cardItemLabel":{"default":{"height":"14px","lineHeight":"14px","fontSize":"var(--business-text-size-14)","color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","top":"-21px","position":"relative"},"hover":{"color":"var(--business-text-avianize)"},"active":{"color":"var(--business-text-avianize)"}},"listBody":{"default":{"width":"410px","overflow":"visible","display":"grid","alignItems":"stretch","justifyItems":"stretch","alignContent":"space-around","justifyContent":"space-around","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","height":"auto","grid-template-columns":"repeat(auto-fill,131.33px)"}},"cardItemValueContent":{"default":{"height":"24px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-24)","fontFamily":"DIN-bold","fontWeight":"700","color":"#F9D000"}},"cardItemValueUnit":{"default":{"height":"12px","fontSize":"var(--business-text-size-12)","color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginLeft":"6px","lineHeight":"21px"}},"cardItemValue":{"default":{"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","top":"17px","height":"24px","position":"relative"}},"cardItemLabelContent":{"active":{"color":"var(--business-text-avianize)"},"hover":{"color":"var(--business-text-avianize)"}},"cardItemIcon":{"default":{"position":"absolute","right":"4px","width":"16px","height":"16px","backgroundImage":"var(--multiple-card-unchecked)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","bottom":"4px"},"hover":{"backgroundImage":"var(--multiple-card-checked)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},"active":{"backgroundSize":"contain,contain","-webkit-mask-size":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundPosition":"50% 50%,50% 50%","-webkit-mask-position":"","backgroundImage":"var(--multiple-card-checked)","-webkit-mask-image":""}}},
keyWord:"TAG_TOPIC_CODE",
defaultChecked:[],
dataAlias:{"value":"num","label":"title","icon":"icon","unit":"unit"},
data:[], 
 },
},
tButtonx0x5: {
defaultStyle: {
            default: {"width":"46px","height":"32px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"533px","top":"567px","animationName":""},
            
            },
 default: { 
 
label:"筛选",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"46px","height":"32px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"533px","top":"567px","animationName":""}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tTablex0x6: {
defaultStyle: {
            default: {"width":"410px","height":"600px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"530%",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":" ","type":"state","key":"","stateKey":"isCheck","width":"35px","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"24PX","height":"24PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-theme)"},"cellStyle":{"cursor":"pointer"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-03-07/454b453f41b84c6097492361373088bd.png)","backgroundImage":"var(--business-checkbox-checked)","backgroundSize":"100% 100%","cursor":"pointer","transform":"translate(11px, 3px)","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":"","cursor":"pointer"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"var(--business-checkbox)","backgroundSize":"100%","cursor":"pointer","transform":"translate(11px, 3px)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"定位","type":"state","key":"","stateKey":"canPosition","width":"50px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"var(--business-position)"},"cellStyle":{"background":"rgba(0, 0, 0, 0)"}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"企业名称","type":"default","key":"ENTER_NAME","stateKey":"","width":"135px","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","display":"block","color":"#fff"}},"infoPosition":"left"},{"label":"贡献得分","type":"default","key":"score","stateKey":"","width":"70px","minWidth":"","align":"center","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"#fff"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]},{"label":"主要原因","type":"default","key":"reason","stateKey":"","width":"120px","minWidth":"unset","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--t-error7)","display":"block"},"cellStyle":{"cursor":"pointer"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"600px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--business-show-bg30)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tComponentx0x8: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"10px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"10px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"234px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"33px","top":"15px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""},
            
            },
 default: { 
 
label:"重点污染源",
editable:false,
cStyle:{"wrapper":{"default":{"width":"234px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"33px","top":"15px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""}}}, 
 },
},
tRectx0x10: {
defaultStyle: {
            default: {"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"332px","top":"270px","cursor":"pointer","animationName":"","fontSize":"14px"},
            
            },
 default: { 
 
tip:false,
label:"批量派发",
active:false,
cStyle:{"wrapper":{"default":{"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"332px","top":"270px","cursor":"pointer","animationName":"","fontSize":"14px"}}}, 
 },
},
tRectx0x11: {
defaultStyle: {
            default: {"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"334px","top":"153px","cursor":"no-drop","animationName":"","fontSize":"14px"},
            
            },
 default: { 
 
tip:false,
label:"批量派发",
active:false,
cStyle:{"wrapper":{"default":{"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"334px","top":"153px","cursor":"no-drop","animationName":"","fontSize":"14px"}}}, 
 },
},
tCheckboxx0x12: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justifyContent":"left","width":"303px","height":"20px","position":"unset","left":"98px","top":"64px","animationName":""},
            
            },
 default: { 
 
data:[],
active:[],
dataAlias:{"label":"POLLUTE_NAME","value":"POLLUTE_CODE","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justifyContent":"left","width":"303px","height":"20px","position":"unset","left":"98px","top":"64px","animationName":""}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"var(--business-white)","paddingLeft":"8px"}}}, 
 },
},
tRadiox0x13: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"300px","height":"20px","position":"unset","left":"18px","top":"90px","animationName":""},
            
            },
 default: { 
 
options:[{"label":"2000","value":"全部","disabled":false},{"label":"10","value":"前10","disabled":false},{"label":"20","value":"前20","disabled":false},{"label":"30","value":"前30","disabled":false}],
active:"2000",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"300px","height":"20px","position":"unset","left":"18px","top":"90px","animationName":""}},"label":{"default":{"color":"var(--business-white)","paddingLeft":"8px","fontSize":"var(--text-size-14)"},"active":{"color":"var(--business-white)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-btn-active)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tLinex0x14: {
defaultStyle: {
            default: {"width":"1px","height":"6px","backgroundColor":"rgba(56, 212, 255, 0.81)","position":"unset","left":"843px","top":"177px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"1px","height":"6px","backgroundColor":"rgba(56, 212, 255, 0.81)","position":"unset","left":"843px","top":"177px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":""}}}, 
 },
},
tLinex0x15: {
defaultStyle: {
            default: {"width":"1px","height":"6px","backgroundColor":"rgba(56, 212, 255, 0.81)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"464px","top":"52px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"1px","height":"6px","backgroundColor":"rgba(56, 212, 255, 0.81)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"464px","top":"52px"}}}, 
 },
},
tLinex0x16: {
defaultStyle: {
            default: {"width":"6px","height":"1px","backgroundColor":"rgba(56, 212, 255, 0.81)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"464px","top":"51px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"6px","height":"1px","backgroundColor":"rgba(56, 212, 255, 0.81)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"464px","top":"51px"}}}, 
 },
},
tLinex0x17: {
defaultStyle: {
            default: {"width":"6px","height":"1px","backgroundColor":"rgba(56, 212, 255, 0.81)","position":"unset","left":"838px","top":"183px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"6px","height":"1px","backgroundColor":"rgba(56, 212, 255, 0.81)","position":"unset","left":"838px","top":"183px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":""}}}, 
 },
},
tTextx0x18: {
defaultStyle: {
            default: {"width":"16px","height":"16px","color":"var(--t-white)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","cursor":"pointer","position":"unset","left":"142px","top":"17px","textAlign":"center","paddingBottom":"2px","fontSize":"10px","fontWeight":"700","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomLeftRadius":"50%","borderBottomRightRadius":"50%","paddingTop":"2px","animationName":""},
            
            },
 default: { 
 
label:"?",
editable:false,
cStyle:{"wrapper":{"default":{"width":"16px","height":"16px","color":"var(--t-white)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","cursor":"pointer","position":"unset","left":"142px","top":"17px","textAlign":"center","paddingBottom":"2px","fontSize":"10px","fontWeight":"700","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomLeftRadius":"50%","borderBottomRightRadius":"50%","paddingTop":"2px","animationName":""},"hover":{"cursor":"pointer"}}}, 
 },
},
tLinex0x19: {
defaultStyle: {
            default: {"width":"1px","height":"6px","backgroundColor":"rgba(56, 212, 255, 0.81)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"843px","top":"51px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"1px","height":"6px","backgroundColor":"rgba(56, 212, 255, 0.81)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"843px","top":"51px"}}}, 
 },
},
tLinex0x20: {
defaultStyle: {
            default: {"width":"6px","height":"1px","backgroundColor":"rgba(56, 212, 255, 0.81)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"838px","top":"51px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"6px","height":"1px","backgroundColor":"rgba(56, 212, 255, 0.81)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"838px","top":"51px"}}}, 
 },
},
tLinex0x21: {
defaultStyle: {
            default: {"width":"6px","height":"1px","backgroundColor":"rgba(56, 212, 255, 0.81)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"463px","top":"183px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"6px","height":"1px","backgroundColor":"rgba(56, 212, 255, 0.81)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"463px","top":"183px"}}}, 
 },
},
tLinex0x22: {
defaultStyle: {
            default: {"width":"1px","height":"6px","backgroundColor":"rgba(56, 212, 255, 0.81)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"463px","top":"178px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"1px","height":"6px","backgroundColor":"rgba(56, 212, 255, 0.81)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"463px","top":"178px"}}}, 
 },
},
tTextCommonx0x23: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"20px","top":"65px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"超标因子：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"20px","top":"65px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTextCommonx0x24: {
defaultStyle: {
            default: {"width":"288px","height":"179px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"9px","top":"35px","background":"unset","backgroundClip":"unset","backgroundColor":"rgba(20, 112, 204, 1)","paddingTop":"8px","paddingBottom":"8px","paddingLeft":"8px","paddingRight":"8px","zIndex":"99"},
            
            },
 default: { 
 
label:"水污染湖源结果显示，通过对污染物指标间的相关性分析污染物排放贡献率计算、自动监测数据波动特征比对、超标报警记录统计及行政处罚情况等多维度指标进行综合评估构建了疑似污染源判定模型。经综合评分与对比分析，筛选出对水体污染贡献率较高的疑似污染源，并按照综合评分高低进行排序。清单如下:",
editable:false,
cStyle:{"wrapper":{"default":{"width":"288px","height":"179px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"9px","top":"35px","background":"unset","backgroundClip":"unset","backgroundColor":"rgba(20, 112, 204, 1)","paddingTop":"8px","paddingBottom":"8px","paddingLeft":"8px","paddingRight":"8px","zIndex":"99"}}}, 
 },
},
});
const getProvider = () => {
const rootData = inject('sourceParmasState');

state.sourceParmasState = rootData;

// console.log(state.sourceParmasState, 11123)
};
const initPage = () => {
// 若是月数据
// if (sourceParmasState.componentSourceParmas.ASSESSTYPE === 'monthly') {
//   state.dateType = '4';
// }

// TODO: 换成以上判断，目前只考虑月的情况
state.dateType = '4';
const { MONITORTIME, POINT_CODE, DATA_FREQUENCY } = state.sourceParmasState.componentSourceParmas;
state.sourceParmasState.componentSourceParmas.DATA_FREQUENCY = DATA_FREQUENCY
state.pointInfoStr = `${POINT_CODE}_month_${MONITORTIME}`;

// 获取卡片数据
// apiRegistry.getCardData.request();
};
const selectPollutant = (data) => {
// /* 若选中多项 */
// if (data.length > 1) {
//   const currentItems = data.filter((val) => val !== state.selectedPollutants);
//   if (currentItems) {
//     state.selectedPollutants = currentItems?.[0];
//     state.selectedPollutantList = currentItems;
//   }
// /* 若取消所有选中 */
// } else if (!data.length) {
//   state.selectedPollutants = '';
//   state.selectedPollutantList = [];
// } else {
//   state.selectedPollutants = data?.[0];
//   state.selectedPollutantList = data;
// }

// // 获取卡片数据
// apiRegistry.getCardData.request();


    // 至少选中一个，不支持全部取消
    if (data && data.length > 0) {
      state.selectedPollutantList = data;
      state.selectedPollutants = data.join(',');
      
      // 获取卡片数据
      apiRegistry.getCardData.request();
    } else {
      // 如果尝试取消所有，强制恢复为上一次的选中状态
      // 这里不做任何操作，或者重新赋值组件状态（如果组件没有自动回滚）
      // 由于是受控组件，如果state没变，UI应该不会变，但为了保险，可以显式重置一下
      // 注意：这里假设 t-checkbox 组件绑定的是 state.selectedPollutantList
      // 实际上组件可能是通过 prop 传入 active，所以不更新 state 应该就回去了
      // 但如果组件是双向绑定的，可能需要强制设回去
      // 简单起见，这里直接不更新 state 即可，但为了触发UI刷新（如果需要），可以重新赋值一遍
      const temp = [...state.selectedPollutantList];
      state.selectedPollutantList = [];
      setTimeout(() => {
        state.selectedPollutantList = temp;
      })
    }
};
const clickSceneCard = (allSelectTopicList,item) => {
console.log(allSelectTopicList, item, 6667)
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


/* 取消选中 */
} else {
  // 若取消的正好是选中的主题
  if (state.activeTab.value === item.TAG_TOPIC_CODE) {
    state.tagJson = state.tagJsonBase;
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
    state.tagJson = state.tagJsonBase;
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

if (state.tagJsonBase !== '{}' && state.tagJsonBase) {
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'updateWaterSourceResult',  // 消息类型名称
      data: {                   // 消息内容，对象格式
        topicCode: item.TAG_TOPIC_CODE,
        tagJson: state.tagJsonBase,
        visible: isSelect,
        pointCode: '', // 断面编码
        ENTITY_CODE: item.TAG_ENTITY_CODE,
        orderBy: state.orderBy,
        pageSize: state.pageSize,
        queryField: '',
      },
      from: 'lego-水-溯源-智慧推荐'
    }
  );
}
};
const handleSelectTab = (data) => {
// 更新场景名
state.activeTab.name = data.title;
// 更新场景编码
state.activeTab.value = data.TAG_TOPIC_CODE;
// 更新实体编码
state.activeTab.entityCode = data.TAG_ENTITY_CODE;
// 将选中的标签数据存到本地存储中，标签筛选面板的iframe好获取
// localStorage.setItem('waterTraceSourceActiceTab', state.activeTab.value);
// rootData.rootSocket.emit(
//   'message',  // 固定的消息名称，不能修改
//   {
//     room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
//     type: 'updateFitlerPanelData',  // 消息类型名称
//     data: {                   // 消息内容，对象格式
//       type: 'waterWise',
//       topicCode: state.activeTab.value,
//       topicName: state.activeTab.name,
//     }
//   }
// );
// 展示列表加载中动画
state.listLoading = true;


// 获取标签数据
apiRegistry.getTagJsonData.request();

};
const selectRanking = (data) => {
console.log(data, 7778)
// 更新页面大小
state.pageSize = data.label;
// 全部使用默认排序，否则按得分的字段排序
// state.orderBy = data.value = state.scoreFieldName;
state.orderBy = state.scoreFieldName;
// state.orderBy = data.value === '全部' ? '' : state.scoreFieldName;
// 更新列表数据
apiRegistry.getEnterList.request();
};
const handleLeave = () => {
localStorage.removeItem('waterTraceSourceActiceTab')
};
const saveFilterTag = (data) => {
// rootData.rootOn('rootSocket:change', (data) =>{
//     if (data.type === 'filterTag') {
      

//       // getListParams(state.airSourceTraceData); // 参数注意修改
//     }
// });
try {
  console.log(99990)
  // 处理逻辑
  state.tagJson = JSON.stringify({ ...JSON.parse(state.tagJsonBase), ...data });
  console.log(state.tagJson, 77789)

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

  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'updateWaterSourceResult',  // 消息类型名称
      data: {                   // 消息内容，对象格式
        topicCode: state.activeTab.value,
        tagJson: state.tagJson,
        visible: true,
        pointCode: '',
        orderBy: state.orderBy,
        pageSize: state.pageSize,
        queryField: '',
      }
    }
  );

  // 获取列表数据
  apiRegistry.getEnterList.request();
} catch (err) {
  console.error(err);
}


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

if (column.label === '主要原因') {
  // 设置弹框使用的参数
  global.businessDialog.dialogParmas = {
    SCORE_ID: row.SCORE_ID || "",
    STANDENTERID: row.STANDENTERID || "",
  };
  // 显示溯源弹窗
  global.businessDialog.dialogName = 'waterSourceReportComponent';
}
};
const watchTagBase = () => {
const handleWatchTagBase = watch(() => state.tagJsonBase, (val) => {
  console.log(99990)
  if (val) {
    rootData.rootSocket.emit(
      'message',  // 固定的消息名称，不能修改
      {
        room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
        type: 'updateWaterSourceResult',  // 消息类型名称
        data: {                   // 消息内容，对象格式
          topicCode: state.activeTab.value,
          tagJson: state.tagJsonBase,
          visible: true,
          pointCode: '', // 断面编码
          ENTITY_CODE: state.activeTab.entityCode,
          orderBy: state.orderBy,
          pageSize: state.pageSize,
          queryField: '',
        },
        from: 'lego-水-溯源-智慧推荐'
      },
    );

    handleWatchTagBase();
  }
})
};
const removeMapPoints = () => {
/* 遍历已经选择的主题数据，移除地图上对应主题的点位数据 */
state.selectedTopicsData.forEach((val) => {
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'updateWaterSourceResult',  // 消息类型名称
      data: {                   // 消息内容，对象格式
        topicCode: val.TAG_TOPIC_CODE,
        tagJson: state.tagJsonBase,
        visible: false,
        pointCode: '', // 断面编码
        ENTITY_CODE: val.TAG_ENTITY_CODE,
        orderBy: state.orderBy,
        pageSize: state.pageSize,
        queryField: '',
      },
      from: 'lego-水-溯源-智慧推荐'
    }
  );
})
};
const sendListSocketMessage = (visible) => {
// 列表数据变化发送socket消息
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateWaterSourceIntelligentRecommendationStatus',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      visible,
      data: state.enterList
    }
  }
);
};
const oncardClick1764811131694 = (clickItem,checkedList) => {
// 执行自定义方法
clickSceneCard(checkedList,clickItem);
};
const onclick1764840173566 = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "updateFitlerPanelData", // 消息名称
data: {"topicName":state.activeTab.name,"topicCode":state.activeTab.value,"type":"waterWise"}, // 发送的数据
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeTagFilterPanelVisible", // 消息名称
data: {"panelName":"wiseFilterPanel"}, // 发送的数据
});
};
const oncellClick1764845073264 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(column,row);
};
const oncardClick1764811094395 = (data) => {
// 执行自定义方法
handleSelectTab(data);
};
const onchange1764756872857 = (data) => {
// 执行自定义方法
selectPollutant(data);
};
const onchange1764826916088 = (data,selectOption) => {
// 执行自定义方法
selectRanking(selectOption);
};
const onmouseover1769146714567 = () => {
// 设置变量值
state.isShowTip = true;
};
const onmouseout1769146732358 = () => {
// 设置变量值
state.isShowTip = false;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getCardData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"groupSize\":\"100\",\"WSYSTEM_CODE\":\"state.pointInfoStr\",\"INVOLVE_POLLUTANT\":\"state.selectedPollutants\",\"locationField\":\"location\",\"hasGather\":\"true\",\"groupFields\":\"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE\",\"ENTITY_CODE\":\"tag_gather_szhtj_1764727738931\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"groupSize":"100","WSYSTEM_CODE":state.pointInfoStr,"INVOLVE_POLLUTANT":state.selectedPollutants,"locationField":"location","hasGather":"true","groupFields":"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE","ENTITY_CODE":"tag_gather_szhtj_1764727738931","interfaceId":"32fbf72522e1a004b67b5d906410ec8d"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"groupSize\":\"100\",\"WSYSTEM_CODE\":\state.pointInfoStr\,\"INVOLVE_POLLUTANT\":\state.selectedPollutants\,\"locationField\":\"location\",\"hasGather\":\"true\",\"groupFields\":\"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE\",\"ENTITY_CODE\":\"tag_gather_szhtj_1764727738931\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardData'] = res.data;
                
     const defaultSelectTopicName = ['涉水企业', '入河排污口'];
state.cardNoData = false;
if (res?.data?.groupResult?.length) {
  state.sceneList = res?.data?.groupResult.map(item => {
    return {
      ...item,
      title: item?.DATA_TYPE || item?.DATA_TYPE,
      num: item?.doc_count || '0',
      unit: '家',
      color: 'var(--t-white)',
    }
  });

  // const selectedIndexs = [];
  const selectedItems = [];
  defaultSelectTopicName.forEach((topicName) => {
    const index = state.sceneList.findIndex((val) => val.title === topicName);
    if (index > -1) {
      selectedItems.push(state.sceneList[index]);
      clickSceneCard(selectedItems, state.sceneList[index]);
    }
  });

  if (!selectedItems?.length && state.sceneList?.length) {
    selectedItems.push(state.sceneList[0]);
    clickSceneCard(selectedItems, state.sceneList[0]);
  }

  // clickSceneCard(state.sceneList[0]);
} else {
  // 若原来有选中的主题
  if (state.activeTab.value) {
    rootData.rootSocket.emit(
      'message',  // 固定的消息名称，不能修改
      {
        room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
        type: 'updateWaterSourceResult',  // 消息类型名称
        data: {                   // 消息内容，对象格式
          topicCode: state.activeTab.value,
          tagJson: state.tagJson,
          visible: false,
          pointCode: '',
          orderBy: state.orderBy,
          pageSize: state.pageSize,
        }
      }
    );
  }
  state.selectedTopicsData = [];
  state.selectedTopics = '';
  state.sceneList = [];
  // state.enterList = [];
  // state.listLoading = false;
  state.cardNoData = true;
  state.activeTab.value = '';
  state.activeTab.entityCode = '';
  state.activeTab.name = '';

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
// 接口函数
 getPollutants: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"MONITORTIME\":\"state.sourceParmasState.componentSourceParmas.MONITORTIME\",\"TIME_TYPE\":\"state.dateType\",\"POINT_CODE\":\"state.sourceParmasState.componentSourceParmas.POINT_CODE\",\"interfaceId\":\"173bfe56d3ceb425040feb3aeb93f3d8\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"MONITORTIME":state.sourceParmasState.componentSourceParmas.MONITORTIME,"TIME_TYPE":state.dateType,"POINT_CODE":state.sourceParmasState.componentSourceParmas.POINT_CODE,"interfaceId":"173bfe56d3ceb425040feb3aeb93f3d8"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"MONITORTIME\":\state.sourceParmasState.componentSourceParmas.MONITORTIME\,\"TIME_TYPE\":\state.dateType\,\"POINT_CODE\":\state.sourceParmasState.componentSourceParmas.POINT_CODE\,\"interfaceId\":\"173bfe56d3ceb425040feb3aeb93f3d8\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPollutants'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && Array.isArray(data)) {
  state.pollutantList = data;

      // 默认选中第一项
    if (state.pollutantList.length > 0) {
       selectPollutant([state.pollutantList[0].POLLUTE_CODE]);
    }
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
 getEnterList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"POINT_CODE\":\"state.sourceParmasState.componentSourceParmas.POINT_CODE\",\"TIME_TYPE\":\"state.sourceParmasState.componentSourceParmas.DATA_FREQUENCY\",\"MONITORTIME\":\"state.sourceParmasState.componentSourceParmas.MONITORTIME\",\"MULTI_POLLUTANTS\":\"state.selectedPollutants\",\"pageSize\":\"state.pageSize\",\"pageNum\":\"1\",\"interfaceId\":\"8818a477f0a9f5587924ca85f106eb66\",\"ENTITY_CODE\":\"tag_gather_szhtj_1764727738931\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"POINT_CODE":state.sourceParmasState.componentSourceParmas.POINT_CODE,"TIME_TYPE":state.sourceParmasState.componentSourceParmas.DATA_FREQUENCY,"MONITORTIME":state.sourceParmasState.componentSourceParmas.MONITORTIME,"MULTI_POLLUTANTS":state.selectedPollutants,"pageSize":state.pageSize,"pageNum":"1","interfaceId":"8818a477f0a9f5587924ca85f106eb66","ENTITY_CODE":"tag_gather_szhtj_1764727738931"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"POINT_CODE\":\state.sourceParmasState.componentSourceParmas.POINT_CODE\,\"TIME_TYPE\":\state.sourceParmasState.componentSourceParmas.DATA_FREQUENCY\,\"MONITORTIME\":\state.sourceParmasState.componentSourceParmas.MONITORTIME\,\"MULTI_POLLUTANTS\":\state.selectedPollutants\,\"pageSize\":\state.pageSize\,\"pageNum\":\"1\",\"interfaceId\":\"8818a477f0a9f5587924ca85f106eb66\",\"ENTITY_CODE\":\"tag_gather_szhtj_1764727738931\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getEnterList'] = res.data;
                
     // 清空列表数据
state.enterList = [];
// 重置勾选状态
state.checkedIds = '';

const { data } = res;
if (res.status === 200 && Array.isArray(data?.data)) {
  state.enterList = data?.data?.map((val) => ({
    ...val,
    canPosition: val.LONGITUDE && val.LATITUDE ? 'true' : 'false', // 是否能定位
    isCheck: '0', // 1已勾选，0未勾选
    // reason: val?.[state.reasonFieldName] || '-', // 主要原因
    // score: val?.[state.scoreFieldName] || '-', // 得分

        reason: val?.PRIMREASON || '-', // 主要原因
    score: val?.TOTAL_SCORE || '-', // 得分
  }));

  // state.enterList.push(...state.enterList)
  // state.enterList.push(...state.enterList)
  // state.enterList.push(...state.enterList)
  // state.enterList.push(...state.enterList)
  // state.enterList.push(...state.enterList)
  // state.enterList.push(...state.enterList)

      // 前端根据分数降序排序
    state.enterList.sort((a, b) => {
      const scoreA = parseFloat(a.score) || 0;
      const scoreB = parseFloat(b.score) || 0;
      return scoreB - scoreA;
    });

console.log(data, 22333)

// 发送socket消息
sendListSocketMessage(true); 
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
 getTagJsonData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"interfaceId\":\"982f4b5298e7d6c89796ffca11f9dacb\",\"topicCode\":\"state.activeTab.value\",\"istree\":\"true\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"interfaceId":"982f4b5298e7d6c89796ffca11f9dacb","topicCode":state.activeTab.value,"istree":"true"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"interfaceId\":\"982f4b5298e7d6c89796ffca11f9dacb\",\"topicCode\":\state.activeTab.value\,\"istree\":\"true\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTagJsonData'] = res.data;
                
     const { tags } = res.data;
if (res.status === 200 && Array.isArray(tags)) {
  // const condition = tags.find((val) => val.nodeName === '前置条件');
  const condition = tags.find((val) => val.nodeName === '智慧分析');
  if (Array.isArray(condition?.children)) {
    // 点位信息字段
    const pointInfoItem = condition.children.find((val) => val.nodeName === '断面编码+时间类型+时间');
    if (pointInfoItem) {
      state.pointInfoFieldName = pointInfoItem.tagCode;
    }

    // 主要原因字段
    const reasonItem = condition.children.find((val) => val.nodeName === '主要原因');
    if (reasonItem) {
      state.reasonFieldName = reasonItem.tagCode;
    }

    // 得分字段
    const scoreItem = condition.children.find((val) => val.nodeName === '得分');
    if (scoreItem) {
      state.scoreFieldName = scoreItem.tagCode;
      // 根据得分字段排序
      state.orderBy = state.scoreFieldName;
    }
    // 报警污染物字段
    const pollutantItem = condition.children.find((val) => val.nodeName === '报警污染物');
    if (pollutantItem) {
      state.pollutantFieldName = pollutantItem.tagCode;
    }

    state.tagJsonBase = JSON.stringify({ [state.pointInfoFieldName]: state.pointInfoStr, [state.pollutantFieldName]: state.selectedPollutants });
    console.log(state.tagJsonBase, 6666)
    state.tagJson = state.tagJsonBase;

    // 获取列表数据
    apiRegistry.getEnterList.request();
  }
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
watch(() => [state.selectedPollutants], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getEnterList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-waterSourceWisetRecomme', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
initPage();
/* 接收socket.io消息 */
const onSocketChangee05631553a1b4926a12e = function (data) {
if(data.type === "filterTag"){
try{
// 执行自定义方法
saveFilterTag(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangee05631553a1b4926a12e);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangee05631553a1b4926a12e);
});
// 执行自定义方法
watchTagBase();
onBeforeUnmount(() => {
// 执行自定义方法
removeMapPoints();
// 执行自定义方法
sendListSocketMessage(false);
});
onMounted(() => {
setPageScale('t-l-c-waterSourceWisetRecomme', global.appScaleMode, 'normal');
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

 const tListCardMultipleChoicex0x4ComputedData = computed(() => _.merge({}, componentState.tListCardMultipleChoicex0x4.default, componentState.tListCardMultipleChoicex0x4?.[state.screenSize]));

 const tButtonx0x5ComputedData = computed(() => _.merge({}, componentState.tButtonx0x5.default, componentState.tButtonx0x5?.[state.screenSize]));

 const tTablex0x6ComputedData = computed(() => _.merge({}, componentState.tTablex0x6.default, componentState.tTablex0x6?.[state.screenSize]));

 const tComponentx0x8ComputedData = computed(() => _.merge({}, componentState.tComponentx0x8.default, componentState.tComponentx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tRectx0x10ComputedData = computed(() => _.merge({}, componentState.tRectx0x10.default, componentState.tRectx0x10?.[state.screenSize]));

 const tRectx0x11ComputedData = computed(() => _.merge({}, componentState.tRectx0x11.default, componentState.tRectx0x11?.[state.screenSize]));

 const tCheckboxx0x12ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x12.default, componentState.tCheckboxx0x12?.[state.screenSize]));

 const tRadiox0x13ComputedData = computed(() => _.merge({}, componentState.tRadiox0x13.default, componentState.tRadiox0x13?.[state.screenSize]));

 const tLinex0x14ComputedData = computed(() => _.merge({}, componentState.tLinex0x14.default, componentState.tLinex0x14?.[state.screenSize]));

 const tLinex0x15ComputedData = computed(() => _.merge({}, componentState.tLinex0x15.default, componentState.tLinex0x15?.[state.screenSize]));

 const tLinex0x16ComputedData = computed(() => _.merge({}, componentState.tLinex0x16.default, componentState.tLinex0x16?.[state.screenSize]));

 const tLinex0x17ComputedData = computed(() => _.merge({}, componentState.tLinex0x17.default, componentState.tLinex0x17?.[state.screenSize]));

 const tTextx0x18ComputedData = computed(() => _.merge({}, componentState.tTextx0x18.default, componentState.tTextx0x18?.[state.screenSize]));

 const tLinex0x19ComputedData = computed(() => _.merge({}, componentState.tLinex0x19.default, componentState.tLinex0x19?.[state.screenSize]));

 const tLinex0x20ComputedData = computed(() => _.merge({}, componentState.tLinex0x20.default, componentState.tLinex0x20?.[state.screenSize]));

 const tLinex0x21ComputedData = computed(() => _.merge({}, componentState.tLinex0x21.default, componentState.tLinex0x21?.[state.screenSize]));

 const tLinex0x22ComputedData = computed(() => _.merge({}, componentState.tLinex0x22.default, componentState.tLinex0x22?.[state.screenSize]));

 const tTextCommonx0x23ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x23.default, componentState.tTextCommonx0x23?.[state.screenSize]));

 const tTextCommonx0x24ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x24.default, componentState.tTextCommonx0x24?.[state.screenSize]));

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
tListCardMultipleChoicex0x4ComputedData,
tButtonx0x5ComputedData,
tTablex0x6ComputedData,
tComponentx0x8ComputedData,
tTextx0x9ComputedData,
tRectx0x10ComputedData,
tRectx0x11ComputedData,
tCheckboxx0x12ComputedData,
tRadiox0x13ComputedData,
tLinex0x14ComputedData,
tLinex0x15ComputedData,
tLinex0x16ComputedData,
tLinex0x17ComputedData,
tTextx0x18ComputedData,
tLinex0x19ComputedData,
tLinex0x20ComputedData,
tLinex0x21ComputedData,
tLinex0x22ComputedData,
tTextCommonx0x23ComputedData,
tTextCommonx0x24ComputedData,
oncardClick1764811131694,
onclick1764840173566,
oncellClick1764845073264,
onchange1764756872857,
onchange1764826916088,
onmouseover1769146714567,
onmouseout1769146732358,
};
},
};