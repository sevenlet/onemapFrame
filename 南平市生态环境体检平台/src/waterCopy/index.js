window.waterCopyComponent = {
template: 
`<div id="t-l-c-waterCopy" class="t-l-c-waterCopy" >` +
`<t-component id="t-component-d7a5.0f0c30eaf" class="waterCopy-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-dde9.205bbc868" class="waterCopy-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle">` +
`</t-text>` +
`<t-row id="t-row-500b.8a4282c55" class="waterCopy-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align">` +
`<t-text id="t-text-1bbc.292a467e2" class="waterCopy-t-text-0-2-0"  :label="tTextx0x2x0ComputedData.label" :editable="tTextx0x2x0ComputedData.editable" :c-style="tTextx0x2x0ComputedData.cStyle" @click="onclick1733723979280">` +
`</t-text>` +
`<t-text id="t-text-5001.13952ab12" class="waterCopy-t-text-0-2-1"  :label="replaceCssVariables(state.headerInfo.POINT_NAME, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x2x1ComputedData.editable" :c-style="tTextx0x2x1ComputedData.cStyle" :show-title="tTextx0x2x1ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-8f83.4cdb67f43" class="waterCopy-t-text-0-2-2"  :label="replaceCssVariables(state.headerInfo.type, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x2x2ComputedData.editable" :c-style="tTextx0x2x2ComputedData.cStyle">` +
`</t-text>` +
`<t-list-card-common id="t-list-card-common-b400.91fe9d2ff" class="waterCopy-t-list-card-common-0-2-3"  :c-style="tListCardCommonx0x2x3ComputedData.cStyle" :key-word="tListCardCommonx0x2x3ComputedData.keyWord" :default-checked="tListCardCommonx0x2x3ComputedData.defaultChecked" :tab="tListCardCommonx0x2x3ComputedData.tab" :collapse="tListCardCommonx0x2x3ComputedData.collapse" :collapse-text="tListCardCommonx0x2x3ComputedData.collapseText" :display-count="tListCardCommonx0x2x3ComputedData.displayCount" :data-alias="tListCardCommonx0x2x3ComputedData.dataAlias" :data="replaceCssVariables(state.headerInfo.WATERQUALITYLEVELNAME, global?.theme || global?.activeTheme || '默认主题')">` +
`</t-list-card-common>` +
`<t-list-card-common id="t-list-card-common-ca3e.4acae3791" class="waterCopy-t-list-card-common-0-2-4"  :c-style="tListCardCommonx0x2x4ComputedData.cStyle" :key-word="tListCardCommonx0x2x4ComputedData.keyWord" :default-checked="tListCardCommonx0x2x4ComputedData.defaultChecked" :tab="tListCardCommonx0x2x4ComputedData.tab" :collapse="tListCardCommonx0x2x4ComputedData.collapse" :collapse-text="tListCardCommonx0x2x4ComputedData.collapseText" :display-count="tListCardCommonx0x2x4ComputedData.displayCount" :data-alias="tListCardCommonx0x2x4ComputedData.dataAlias" :data="replaceCssVariables(state.headerInfo.ISSTANDARDSSTR, global?.theme || global?.activeTheme || '默认主题')">` +
`</t-list-card-common>` +
`<t-rect v-if="state.headerInfo.isShowAlarm === true" id="t-rect-5459.0054cfc89" class="waterCopy-t-rect-0-2-5"  :tip="tRectx0x2x5ComputedData.tip" :label="tRectx0x2x5ComputedData.label" :active="tRectx0x2x5ComputedData.active" :c-style="tRectx0x2x5ComputedData.cStyle">` +
`</t-rect>` +
`</t-row>` +
`<t-component id="t-component-31d3.24b651f58" class="waterCopy-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-1389.f99ff2c66" class="waterCopy-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-table id="t-table-c9d3.68c8cf75" class="waterCopy-t-table-0-5"  :height="tTablex0x5ComputedData.height" :stripe="tTablex0x5ComputedData.stripe" :border="tTablex0x5ComputedData.border" :auto-scroll="tTablex0x5ComputedData.autoScroll" :speed="tTablex0x5ComputedData.speed" :columns="tTablex0x5ComputedData.columns" :data="replaceCssVariables(state.alarmList, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x5ComputedData.defaultSort" :c-style="tTablex0x5ComputedData.cStyle" @cell-click="oncellClick1734069105111_0_0">` +
`</t-table>` +
`<t-rect id="t-rect-5e3b.5e9377bde" class="waterCopy-t-rect-0-7"  :tip="tRectx0x7ComputedData.tip" :label="tRectx0x7ComputedData.label" :active="tRectx0x7ComputedData.active" :c-style="tRectx0x7ComputedData.cStyle">` +
`</t-rect>` +
`<t-row id="t-row-5cb6.6e0b481ac" class="waterCopy-t-row-0-8"  :c-style="tRowx0x8ComputedData.cStyle" :gutter="tRowx0x8ComputedData.gutter" :justify="tRowx0x8ComputedData.justify" :align="tRowx0x8ComputedData.align">` +
`<t-checkbox v-if="state.isShowWrwCheckbox === true" id="t-checkbox-daf6.bd71a4b8e" class="waterCopy-t-checkbox-0-8-0"  :data="replaceCssVariables(state.wrwCheckboxOpts, global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(state.wrwCheckboxArr, global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x8x0ComputedData.dataAlias" :border="tCheckboxx0x8x0ComputedData.border" :use-button="tCheckboxx0x8x0ComputedData.useButton" :c-style="tCheckboxx0x8x0ComputedData.cStyle" @change="onchange1734069969885">` +
`</t-checkbox>` +
`<t-col id="t-col-af70.186e3480e" class="waterCopy-t-col-0-8-1"  :span="tColx0x8x1ComputedData.span" :offset="tColx0x8x1ComputedData.offset" :push="tColx0x8x1ComputedData.push" :pull="tColx0x8x1ComputedData.pull" :c-style="tColx0x8x1ComputedData.cStyle">` +
`<t-text id="t-text-3ff6.322a2bcd3" class="waterCopy-t-text-0-8-1-0"  :label="tTextx0x8x1x0ComputedData.label" :editable="tTextx0x8x1x0ComputedData.editable" :c-style="tTextx0x8x1x0ComputedData.cStyle">` +
`</t-text>` +
`<t-select id="t-select-19f7.ef514e3cb" class="waterCopy-t-select-0-8-1-1"  :active-value="replaceCssVariables(state.ENTERPRISE_TYPE, global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(state.wryOpts, global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x8x1x1ComputedData.alias" :multiple="tSelectx0x8x1x1ComputedData.multiple" :placeholder="tSelectx0x8x1x1ComputedData.placeholder" :clearable="tSelectx0x8x1x1ComputedData.clearable" :disabled="tSelectx0x8x1x1ComputedData.disabled" :name="tSelectx0x8x1x1ComputedData.name" :autocomplete="tSelectx0x8x1x1ComputedData.autocomplete" :filterable="tSelectx0x8x1x1ComputedData.filterable" :no-match-text="tSelectx0x8x1x1ComputedData.no-match-text" :no-data-text="tSelectx0x8x1x1ComputedData.no-data-text" :c-style="tSelectx0x8x1x1ComputedData.cStyle" @change="onchange1733895446402_0_0">` +
`</t-select>` +
`<t-text id="t-text-235f.2bb390b1f" class="waterCopy-t-text-0-8-1-2"  :label="tTextx0x8x1x2ComputedData.label" :editable="tTextx0x8x1x2ComputedData.editable" :c-style="tTextx0x8x1x2ComputedData.cStyle">` +
`</t-text>` +
`<t-cascader id="t-cascader-8f0d.31e7e4925" class="waterCopy-t-cascader-0-8-1-3"  :active-value="replaceCssVariables(state.treeActive, global?.theme || global?.activeTheme || '默认主题')" :data="replaceCssVariables(state.treeData, global?.theme || global?.activeTheme || '默认主题')" :alias="tCascaderx0x8x1x3ComputedData.alias" :placeholder="tCascaderx0x8x1x3ComputedData.placeholder" :clearable="tCascaderx0x8x1x3ComputedData.clearable" :disabled="tCascaderx0x8x1x3ComputedData.disabled" :no-match-text="tCascaderx0x8x1x3ComputedData.noMatchText" :no-data-text="tCascaderx0x8x1x3ComputedData.noDataText" :c-style="tCascaderx0x8x1x3ComputedData.cStyle" :show-all-levels="tCascaderx0x8x1x3ComputedData.showAllLevels" :check-strictly="tCascaderx0x8x1x3ComputedData.checkStrictly" @change="onchange1734070589108_0_0" @clear="onclear1734590114522">` +
`</t-cascader>` +
`<t-rect id="t-rect-4c01.2a8aec7e3" class="waterCopy-t-rect-0-8-1-4"  :tip="tRectx0x8x1x4ComputedData.tip" :label="tRectx0x8x1x4ComputedData.label" :active="tRectx0x8x1x4ComputedData.active" :c-style="tRectx0x8x1x4ComputedData.cStyle" @click="onclick1739514291790">` +
`</t-rect>` +
`</t-col>` +
`<t-radio v-if="state.isShowWrwCheckbox === true" id="t-radio-81f2.2342e33a3" class="waterCopy-t-radio-0-8-2"  :options="tRadiox0x8x2ComputedData.options" :active="replaceCssVariables(state.pageSize, global?.theme || global?.activeTheme || '默认主题')" :alias="tRadiox0x8x2ComputedData.alias" :disabled="tRadiox0x8x2ComputedData.disabled" :border="tRadiox0x8x2ComputedData.border" :size="tRadiox0x8x2ComputedData.size" :is-use-button="tRadiox0x8x2ComputedData.isUseButton" :c-style="tRadiox0x8x2ComputedData.cStyle" @change="onchange1734071747662">` +
`</t-radio>` +
`<t-table id="t-table-0dc3.b83e1e06b" class="waterCopy-t-table-0-8-3"  :height="tTablex0x8x3ComputedData.height" :stripe="tTablex0x8x3ComputedData.stripe" :border="tTablex0x8x3ComputedData.border" :auto-scroll="tTablex0x8x3ComputedData.autoScroll" :speed="tTablex0x8x3ComputedData.speed" :columns="tTablex0x8x3ComputedData.columns" :data="replaceCssVariables(state.syList, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x8x3ComputedData.defaultSort" :c-style="tTablex0x8x3ComputedData.cStyle" @cell-click="oncellClick1733886529707_0_0">` +
`</t-table>` +
`</t-row>` +
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
   dispatchUrl: "http://19.130.161.126:8888/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1",
   interfaceId: {"header":"","sy":""},
   sourceParmasState: {},
   syList: [],
   pageSize: "10000",
   ENTERPRISE_TYPE: "",
   wryOpts: [],
   isShowWrwCheckbox: false,
   wrwCheckboxArr: [],
   wrwCheckboxOpts: [],
   alarmList: [],
   headerInfo: {"POINT_NAME":"-","WATERQUALITYLEVELNAME":[],"ISSTANDARDSSTR":[],"isShowAlarm":false,"type":"-"},
   wryActive: "",
   monitortime: "",
   parentParams: {"ASSESSTYPE":"monthly","POINT_CODE":"","DATA_FREQUENCY":"","MULTI_POLLUTANTS":"None"},
   treeData: [],
   treeActive: "",
   baseInfo: {"title":"-","controlLevel":"-","waterQuality":[{"state":"-","stateColor":"#000","stateBgColor":""}],"standard":[{"state":"-","stateColor":"#fff","stateBgColor":""}],"alarmText":"","alarmShow":false,"type":"-"},
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
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"79px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"79px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"84px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
            
            },
 default: { 
 
label:"报警信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"84px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}}, 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"419px","height":"47px","position":"unset","left":"20px","top":"9px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"419px","height":"47px","position":"unset","left":"20px","top":"9px","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x2x0: {
defaultStyle: {
            default: {"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"18px","left":"12px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"18px","left":"12px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},"hover":{"backgroundColor":"var(--business-theme)"}}}, 
 },
},
tTextx0x2x1: {
defaultStyle: {
            default: {"width":"auto","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"469.8092289677372px","top":"205.12660047743043px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"10px","fontWeight":"600","animationName":"","textAlign":"left","max-width":"200px","marginRight":"6px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","borderLeft":"1px solid rgba(255,255,255,1)","marginLeft":"10px","lineHeight":"20px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"469.8092289677372px","top":"205.12660047743043px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"10px","fontWeight":"600","animationName":"","textAlign":"left","max-width":"200px","marginRight":"6px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","borderLeft":"1px solid rgba(255,255,255,1)","marginLeft":"10px","lineHeight":"20px"}}},
showTitle:true, 
 },
},
tTextx0x2x2: {
defaultStyle: {
            default: {"width":"40px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"260px","top":"-106px","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"18px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"12px","marginLeft":"10px","animationName":""},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"260px","top":"-106px","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"18px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"12px","marginLeft":"10px","animationName":""}}}, 
 },
},
tListCardCommonx0x2x3: {
defaultStyle: {
            default: {"position":"unset","width":"50px","height":"20px","left":"672.8092289677372px","top":"207.12660047743043px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"position":"unset","width":"50px","height":"20px","left":"672.8092289677372px","top":"207.12660047743043px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"50px","height":"20px","fontSize":"12px","lineHeight":"20px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"}},"cardIcon":{"default":{"display":"none"}}},
keyWord:"",
defaultChecked:"",
tab:false,
collapse:false,
collapseText:"数据",
displayCount:"0",
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
data:[], 
 },
},
tListCardCommonx0x2x4: {
defaultStyle: {
            default: {"position":"unset","width":"50px","height":"20px","left":"763.8092289677372px","top":"206.12660047743043px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"position":"unset","width":"50px","height":"20px","left":"763.8092289677372px","top":"206.12660047743043px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"50px","height":"20px","fontSize":"12px","lineHeight":"20px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"}},"cardIcon":{"default":{"display":"none"}}},
keyWord:"",
defaultChecked:"",
tab:false,
collapse:false,
collapseText:"数据",
displayCount:"0",
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
data:[], 
 },
},
tRectx0x2x5: {
defaultStyle: {
            default: {"width":"20px","height":"20px","position":"unset","left":"852.8092289677372px","top":"206.12660047743043px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-11/c042c6b49c404c56a0dafaa835ad05b2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","marginLeft":"10px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"20px","height":"20px","position":"unset","left":"852.8092289677372px","top":"206.12660047743043px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-11/c042c6b49c404c56a0dafaa835ad05b2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","marginLeft":"10px","animationName":""}}}, 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"239px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"239px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"244px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
            
            },
 default: { 
 
label:"溯源结果",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"244px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}}, 
 },
},
tTablex0x5: {
defaultStyle: {
            default: {"width":"409px","height":"110px","position":"unset","left":"22px","top":"124px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"110",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"报警时间","key":"MONITORTIME","align":"center","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"100PX","showOverflowTooltip":true,"headerAlign":"center","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"报警类型","key":"ALARM_TYPE_NAME","stateKey":"WATERQUALITYLEVELNAME","align":"left","type":"default","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"-","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(153, 153, 153, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}}],"width":"155PX","style":{"fontStyle":{"fontSize":"12PX","width":"PX","height":"PX","borderRadius":"PX","background":"","color":"rgba(255, 255, 255, 1)"}},"headerAlign":"left","showOverflowTooltip":true},{"label":"报警原因","key":"ALARM_DESC","stateKey":"WATERQUALITYLEVELNAME","align":"left","type":"default","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"-","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(153, 153, 153, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}}],"width":"150PX","style":{"fontStyle":{"fontSize":"12PX","width":"PX","height":"PX","borderRadius":"PX","background":"","color":"rgba(255, 255, 255, 1)"}},"headerAlign":"left","showOverflowTooltip":true}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"409px","height":"110px","position":"unset","left":"22px","top":"124px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tRectx0x7: {
defaultStyle: {
            default: {"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"60px","left":"2px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"60px","left":"2px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRowx0x8: {
defaultStyle: {
            default: {"width":"412px","height":"591px","position":"unset","left":"20px","top":"282px","overflow":"visible","display":"block"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"412px","height":"591px","position":"unset","left":"20px","top":"282px","overflow":"visible","display":"block"}}},
gutter:0,
justify:"start",
align:"top", 
 },
},
tCheckboxx0x8x0: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justifyContent":"flex-start","width":"413px","height":"auto","position":"unset","left":"20px","top":"281px","animationName":""},
            
            },
 default: { 
 
data:[],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justifyContent":"flex-start","width":"413px","height":"auto","position":"unset","left":"20px","top":"281px","animationName":""}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"}}}, 
 },
},
tColx0x8x1: {
defaultStyle: {
            default: {"width":"100%","height":"50px","display":"flex","flexDirection":"row","justifyContent":"flex-start","alignItems":"center","marginTop":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"50px","display":"flex","flexDirection":"row","justifyContent":"flex-start","alignItems":"center","marginTop":"0px","paddingLeft":"0px"}}}, 
 },
},
tTextx0x8x1x0: {
defaultStyle: {
            default: {"width":"100px","height":"19px","color":"rgba(255, 255, 255, 0.9)","fontSize":"14px","top":"319px","left":"19px","position":"unset","marginRight":"0px","marginLeft":"0px"},
            
            },
 default: { 
 
label:"类型",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"19px","color":"rgba(255, 255, 255, 0.9)","fontSize":"14px","top":"319px","left":"19px","position":"unset","marginRight":"0px","marginLeft":"0px"}}}, 
 },
},
tSelectx0x8x1x1: {
defaultStyle: {
            default: {"width":"105px","height":"32px","position":"unset","left":"101px","top":"311px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","marginLeft":"10px"},
            
            },
 default: { 
 
activeValue:"",
options:[],
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
cStyle:{"wrapper":{"default":{"width":"105px","height":"32px","position":"unset","left":"101px","top":"311px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","marginLeft":"10px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tTextx0x8x1x2: {
defaultStyle: {
            default: {"width":"100px","height":"16px","color":"rgba(255, 255, 255, 0.9)","fontSize":"14px","top":"319px","left":"237px","position":"unset","animationName":"","marginRight":"0px","marginLeft":"10px","overflow":"visible"},
            
            },
 default: { 
 
label:"行业",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"16px","color":"rgba(255, 255, 255, 0.9)","fontSize":"14px","top":"319px","left":"237px","position":"unset","animationName":"","marginRight":"0px","marginLeft":"10px","overflow":"visible"}}}, 
 },
},
tCascaderx0x8x1x3: {
defaultStyle: {
            default: {"width":"116px","height":"32px","position":"unset","left":"276px","top":"311px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","paddingLeft":"10px","animationName":"","marginLeft":"10px"},
            
            },
 default: { 
 
activeValue:"",
data:[],
alias:{"label":"label","value":"id","disabled":"disabled"},
placeholder:"请选择行业",
clearable:true,
disabled:false,
noMatchText:"无匹配数据",
noDataText:"无数据",
cStyle:{"wrapper":{"default":{"width":"116px","height":"32px","position":"unset","left":"276px","top":"311px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","paddingLeft":"10px","animationName":"","marginLeft":"10px"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","min-height":"450px","min-width":"auto","max-width":"360px","overflow":"auto","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"16px","--scrollbar-track-color":"var(--business-show-bg30)","--scrollbar-thumb-color":"var(--business-theme)"}},"dropdownMenu":{"default":{"backgroundColor":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","color":"rgba(255, 255, 255, 1)","overflow":"auto"}},"arrow":{"default":{"color":"var(--font-gary2-100)","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"12px"}},"dropdownItem":{"default":{"color":"rgba(255, 255, 255, 1)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","max-width":"200px","overflow":"visible"},"active":{"color":" var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","paddingLeft":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"14px"}},"dropdownArrow":{"default":{"backgroundColor":"#8AD2FF"}},"dropdownRadio":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"active":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px"},"hover":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px"}},"dropdownRadioCenter":{"active":{"borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","backgroundColor":"var(--business-theme)"}}},
showAllLevels:false,
checkStrictly:true, 
 },
},
tRectx0x8x1x4: {
defaultStyle: {
            default: {"width":"100px","height":"33px","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"14px","color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid var(--business-text-avianize)","borderTop":"1px solid var(--business-text-avianize)","borderRight":"1px solid var(--business-text-avianize)","borderBottom":"1px solid var(--business-text-avianize)","marginLeft":"10px","min-width":"80px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"批量派发",
active:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"33px","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"14px","color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid var(--business-text-avianize)","borderTop":"1px solid var(--business-text-avianize)","borderRight":"1px solid var(--business-text-avianize)","borderBottom":"1px solid var(--business-text-avianize)","marginLeft":"10px","min-width":"80px","cursor":"pointer"}}}, 
 },
},
tRadiox0x8x2: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"302px","height":"30px","position":"unset","left":"19px","top":"356px","animationName":"","marginTop":"10px"},
            
            },
 default: { 
 
options:[{"label":"10000","value":"全部","disabled":false},{"label":"10","value":"前10","disabled":false},{"label":"20","value":"前20","disabled":false},{"label":"30","value":"前30","disabled":false}],
active:"10000",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"302px","height":"30px","position":"unset","left":"19px","top":"356px","animationName":"","marginTop":"10px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"},"active":{"color":"rgba(255, 255, 255, 1)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tTablex0x8x3: {
defaultStyle: {
            default: {"width":"409px","height":"490px","position":"unset","left":"20px","top":"390px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","marginTop":"10px","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"490",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"52PX","type":"state","stateKey":"iconStatus"},{"label":"污染源名称","key":"ENTER_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"103PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"行业类别","key":"TRADENAME","stateKey":"WATERQUALITYLEVELNAME","align":"left","type":"default","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"-","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(153, 153, 153, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}}],"width":"100PX","style":{"fontStyle":{"fontSize":"12PX","width":"PX","height":"PX","borderRadius":"PX","background":"","color":"rgba(255, 255, 255, 1)"}},"showOverflowTooltip":true,"headerAlign":"left"},{"label":"主要原因","key":"PRIMREASON","stateKey":"WATERQUALITYLEVELNAME","align":"left","type":"default","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"-","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(153, 153, 153, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}}],"width":"100PX","style":{"fontStyle":{"fontSize":"12PX","width":"PX","height":"PX","borderRadius":"PX","background":"","color":"var(--t-aqi-red)","padding":"0 0 0 14"}},"showOverflowTooltip":true,"headerAlign":"left"},{"label":"操作","key":"","stateKey":"WATERQUALITYLEVELNAME","align":"center","type":"default","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"-","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(153, 153, 153, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}}],"width":"55PX","style":{"fontStyle":{"fontSize":"14PX","width":"PX","height":"PX","borderRadius":"PX","background":"","color":"var(--business-theme)","padding":""},"cellStyle":{"cursor":"pointer"}},"showOverflowTooltip":true,"headerAlign":"center","infoKey":"option"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"409px","height":"490px","position":"unset","left":"20px","top":"390px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","marginTop":"10px","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"8px","paddingBottom":"8px","paddingLeft":"8px","paddingRight":"8px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px","paddingLeft":"8px","paddingRight":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
});
const getProvider = () => {
const rootData = inject('sourceParmasState');
console.log(rootData,'sourceParmasState'); // 接收到的值

state.sourceParmasState = rootData;

// {
//     "screenSize": "",
//     "componentSourceParmas": {
//         "POINT_CODE": "C14",
//         "ASSESSTYPE": "monthly",
//         "DATA_FREQUENCY": "4",
//         "MULTI_POLLUTANTS": "W21003,W21011",
//         "MONITORTIME": "2022-03"
//     },
//     "componentSourceName": "waterTraceabilityContentComponent",
//     "iframeRecordDetailUrl": "",
//     "componentName": "waterSurfaceEntryComponent",
//     "activeMenuData": {
//         "data": [
//             {
//                 "RES_ID": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//                 "RES_NAME": "地表水",
//                 "RES_TYPE": 10,
//                 "PARENT": "5fa268bb-17b6-4de3-ada8-bc1465e1b0b0",
//                 "IS_MENU": 1,
//                 "MENU_URL": "waterSurfaceEntry",
//                 "TARGET": "2",
//                 "MENU_ICON": null,
//                 "PERMISSION_CODE": "/waterSurfaceEntry",
//                 "SORT": 10,
//                 "FUNC_URL": null,
//                 "AUTH_VISIT": 1,
//                 "IS_SHOW_DROPDOWNMENU": null,
//                 "IS_SHOW_FIRSTMENU": null,
//                 "EXT1": "{\"resCode\":\"onemap_manual_surfacewater\",\"appURL\":\"http://192.168.0.202:7777/mapgo5.0/preview.html?appID=z1zb8xmkmeo6yqu&appType=2D&appName=地表水\"}",
//                 "EXT2": null,
//                 "EXT3": null,
//                 "EXT4": null,
//                 "APP_ID": "DCP.LXT.DEV",
//                 "CUSTOM_SETTING": {
//                     "showBreadcrumbs": "1",
//                     "showTitle": "1"
//                 },
//                 "RES_PATH": [
//                     {
//                         "MENU_URL": null,
//                         "RES_NAME": "水环境",
//                         "RES_ID": "b5b45013-49d8-43e8-98a6-6179431c99de",
//                         "MENU_ICON": null
//                     },
//                     {
//                         "MENU_URL": null,
//                         "RES_NAME": "环境现状",
//                         "RES_ID": "5fa268bb-17b6-4de3-ada8-bc1465e1b0b0",
//                         "MENU_ICON": null
//                     },
//                     {
//                         "MENU_URL": "waterSurfaceEntry",
//                         "RES_NAME": "地表水",
//                         "RES_ID": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//                         "MENU_ICON": null
//                     }
//                 ],
//                 "CHILDREN": []
//             }
//         ],
//         "operation": "highlight",
//         "type": "subject"
//     },
//     "iframeSourceUrl": "",
//     "activeTabLast": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//     "iframePointDetailUrl": "",
//     "activeTab": "source",
//     "tabList": [
//         {
//             "id": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//             "label": "地表水",
//             "url": "waterSurfaceEntry",
//             "rawData": {
//                 "RES_ID": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//                 "RES_NAME": "地表水",
//                 "RES_TYPE": 10,
//                 "PARENT": "5fa268bb-17b6-4de3-ada8-bc1465e1b0b0",
//                 "IS_MENU": 1,
//                 "MENU_URL": "waterSurfaceEntry",
//                 "TARGET": "2",
//                 "MENU_ICON": null,
//                 "PERMISSION_CODE": "/waterSurfaceEntry",
//                 "SORT": 10,
//                 "FUNC_URL": null,
//                 "AUTH_VISIT": 1,
//                 "IS_SHOW_DROPDOWNMENU": null,
//                 "IS_SHOW_FIRSTMENU": null,
//                 "EXT1": "{\"resCode\":\"onemap_manual_surfacewater\",\"appURL\":\"http://192.168.0.202:7777/mapgo5.0/preview.html?appID=z1zb8xmkmeo6yqu&appType=2D&appName=地表水\"}",
//                 "EXT2": null,
//                 "EXT3": null,
//                 "EXT4": null,
//                 "APP_ID": "DCP.LXT.DEV",
//                 "CUSTOM_SETTING": {
//                     "showBreadcrumbs": "1",
//                     "showTitle": "1"
//                 },
//                 "RES_PATH": [
//                     {
//                         "MENU_URL": null,
//                         "RES_NAME": "水环境",
//                         "RES_ID": "b5b45013-49d8-43e8-98a6-6179431c99de",
//                         "MENU_ICON": null
//                     },
//                     {
//                         "MENU_URL": null,
//                         "RES_NAME": "环境现状",
//                         "RES_ID": "5fa268bb-17b6-4de3-ada8-bc1465e1b0b0",
//                         "MENU_ICON": null
//                     },
//                     {
//                         "MENU_URL": "waterSurfaceEntry",
//                         "RES_NAME": "地表水",
//                         "RES_ID": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//                         "MENU_ICON": null
//                     }
//                 ],
//                 "CHILDREN": []
//             }
//         }
//     ],
//     "iframeUrl": "",
//     "showRightMain": true,
//     "iframeVisible": false
// }
};
const handleClickBack = (column,row) => {
console.log('行列数据', row, column);

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "score_id",
      "shareCode": "SCORE_ID",
      "defaultValue": "",
      "runtimeValue": row.SCORE_ID || '',
    }, {
      "code": "standenterid",
      "name": "",
      "defaultValue": "",
      "shareCode": "STANDENTERID",
      "runtimeValue": row.STANDENTERID || '',
    }
  ]
});


// 

if (column.label === '主要原因') {
  // 设置弹框使用的参数
  global.businessDialog.dialogParmas = {
    SCORE_ID: row.SCORE_ID || "",
    STANDENTERID: row.STANDENTERID || "",
  };
  // 显示溯源弹窗
  global.businessDialog.dialogName = 'waterSourceReportComponent';
}

if (column.label === '操作') {
  // 派发操作列
  // dispatchTask(id);
}
};
const initPage = () => {
// console.log('获取全局弹窗信息', global.businessDialog);

// &REGION_CODE=440306000000&POINT_CODE=C15&MONITORTIME=2022-03&DATA_FREQUENCY=4&ASSESSTYPE=monthly&MULTI_POLLUTANTS=W21003,W21011
state.parentParams = {
  POINT_CODE: state.sourceParmasState?.componentSourceParmas.POINT_CODE || '',
  ASSESSTYPE: state.sourceParmasState?.componentSourceParmas.ASSESSTYPE || '',
  DATA_FREQUENCY: state.sourceParmasState?.componentSourceParmas.DATA_FREQUENCY || '',
  MULTI_POLLUTANTS: state.sourceParmasState?.componentSourceParmas.MULTI_POLLUTANTS || 'None',
};
console.log('获取传递过来的参数', state.parentParams)
// 时间
state.monitortime = state.sourceParmasState.componentSourceParmas.MONITORTIME || '';
// 自动（小时/天）、手工三个不同头部接口id
switch (state.parentParams.DATA_FREQUENCY) {
  case '1':
    // 自动-小时
    state.interfaceId.header = '6b55f61844ccd520f3f9a5a4f227f95e';
    break;
  case '2':
    // 自动-天
    state.interfaceId.header = '7e646485d5e40eb0cb831d4a5520f81a';
    break;
  case '4':
    // 手工
    state.interfaceId.header = 'c88965d570ad1d00197e1fee3a00c649';
    break;
  default:
    state.interfaceId.header = 'c88965d570ad1d00197e1fee3a00c649';
    break;
}

const init = async () => {
  // 获取监测时间
  // await getMonitortime();

  // 获取头部基本信息
  await getHeaderInfo();
  // 获取行业列表
  await getHyData();
  // 获取报警信息列表
  await getAlarmList();
  // 接口id：报警8818a477f0a9f5587924ca85f106eb66；未报警607287764d212de49335ec24b47e006a
  state.interfaceId.sy = state.headerInfo.isShowAlarm ? '8818a477f0a9f5587924ca85f106eb66' : '607287764d212de49335ec24b47e006a'
  // 获取污染物复选列表
  await getWrwCheckboxOpts();
  // 获取污染源类型下拉
  await getWryOpts();
  // 获取溯源列表
  getSyListData();
};

init();

// {
//     "dialogParmas": {
//         "rowInfo": {
//             "UNIT_ID": "1_BAOAN",
//             "UNIT_CODE": "1",
//             "UNIT_NAME": "沙井河管控单元",
//             "UNIT_LEVEL": "1",
//             "LATITUDE": "",
//             "LONGITUDE": "",
//             "IS_LEAF": "1",
//             "WSYSTEM_CODE": "MZHLY00000",
//             "WSYSTEM_NAME": "茅洲河流域",
//             "canPosition": "false"
//         }
//     },
//     "dialogName": "waterQualityExceedingAlarmComponent"
// }
};
const handleBack = () => {
// // 返回 水-控制单元-内容页面
// state.waterControlUnitState.componentName = 'waterControlUnitContentComponent';

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "closePointTrace",
      "shareCode": "closePointTrace",
      "defaultValue": "true",
      "runtimeValue": "true"
    }, {
      "code": "hiddenTraceDetail",
      "shareCode": "hiddenTraceDetail",
      "defaultValue": "true",
      "name": "",
      "runtimeValue": "true"
    }
  ]
});
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractiveChange", // 消息名称
  data: [
    {
      "code": "closePointTrace",
      "shareCode": "closePointTrace",
      "defaultValue": "true",
      "runtimeValue": "true"
    }, {
      "code": "hiddenTraceDetail",
      "shareCode": "hiddenTraceDetail",
      "defaultValue": "true",
      "name": "",
      "runtimeValue": "true"
    }
  ]
});

};
const changeWrwCheckbox = () => {
console.log(state.wrwCheckboxArr);

// 调整污染物复选框选中的值
if (state.wrwCheckboxArr.length) {
  state.parentParams.MULTI_POLLUTANTS = state.wrwCheckboxArr.join(',');
} else {
  state.parentParams.MULTI_POLLUTANTS = 'None';
}

// 获取溯源列表
getSyListData();

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "MULTI_POLLUTANTS",
      "shareCode": "MULTI_POLLUTANTS",
      "defaultValue": "",
      "runtimeValue": state.parentParams.MULTI_POLLUTANTS || '999',
    }
  ]
});

};
const changeHy = (data) => {
console.log('溯源行业改变 ---', data);

state.treeActive = data?.[data.length - 1] || '';

// 获取溯源列表
getSyListData();

// 给地图发消息
rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    data: [
        {
            "code": "value",
            "shareCode": "TRADE_CODE",
            "defaultValue": "",
            "runtimeValue": state.treeActive || '',
        }
    ]
});

};
const handleTrendAnalysis = () => {
console.log('趋势分析', state.parentParams.POINT_CODE, state.monitortime, global.regionaQuery.regionCode)
if (state.parentParams.POINT_CODE && state.monitortime && global.regionaQuery.regionCode) {
  const url = `${global.syTrendAnalysisUrl}?form[POINTCODE]=${state.parentParams.POINT_CODE}&form[monitorTime]=${state.monitortime}&regionCode=${global.regionaQuery.regionCode}`;
  console.log(url);
  window.open(url, '_blank');
}


};
const handleWryTypeSelectChange = () => {
// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "code",
      "shareCode": "ENTERPRISE_TYPE",
      "defaultValue": "",
      "runtimeValue": state.ENTERPRISE_TYPE || '',
    }
  ]
});

};
const handlePageSizeSocket = () => {

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "pageSize",
      "shareCode": "pageSize",
      "defaultValue": "10000",
      "runtimeValue": state.pageSize || '10000'
    }
  ]
});

};
const dispatchTask = (id) => {
/**
 * 派发任务
 */

if (id) {
  // 记录行ID
  localStorage.setItem('pointIds', id);
  window.open(state.dispatchUrl);
}

};
const moreDispatchTask = () => {
// 将当前的溯源列表id进行拼接
const id = state.syList.map((item) => item.ID).join(',');
// 如果存在id，就进行任务派发
if (id) {
  dispatchTask(id);
}
};
const onclick1733723979280 = () => {
// 执行自定义方法
handleBack();
};
const oncellClick1734069105111_0_0 = (row,column,cell,event) => {
// 执行自定义方法
handleClickBack(column,row);
};
const onclick1734226555114 = () => {
// 执行自定义方法
handleTrendAnalysis();
};
const onchange1734069969885 = (data) => {
// 设置变量值
state.wrwCheckboxArr = data;
// 执行自定义方法
changeWrwCheckbox();
};
const onchange1733895446402_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.ENTERPRISE_TYPE = value;
// 事件交互-请求调用接口
getSyListData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 执行自定义方法
handleWryTypeSelectChange();
};
const onchange1734070589108_0_0 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
changeHy(value);
};
const onclear1734590114522 = () => {
// 执行自定义方法
changeHy("");
};
const onchange1734071747662 = (data,selectOption) => {
// 设置变量值
state.pageSize = data;
// 事件交互-请求调用接口
getSyListData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 执行自定义方法
handlePageSizeSocket();
};
const oncellClick1733886529707_0_0 = (row,column,cell,event) => {
// 执行自定义方法
handleClickBack(column,row);
};
const onclick1739514291790 = () => {
// 执行自定义方法
moreDispatchTask();
};
// 接口函数
const getWryOpts = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"2afc2577cedb322ade4bfaee49a84262"},}).then((res) => {
     // 成功的操作
     // console.log('获取 污染源下拉', res);

state.wryOpts = [];
state.ENTERPRISE_TYPE = '';

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data?.length) {
  // 填充下拉
  for (let i = 0; i < data.data.length; i++) {
    const elem = data.data[i];
    if (elem.NAME) {
      state.wryOpts.push({
        ...elem,
        label: elem.NAME || '-',
        value: elem.CODE || '',
      });
    }
  }
}
// console.log('填充后的 污染源下拉', state.wryOpts);

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.wryOpts = [];
state.ENTERPRISE_TYPE = '';
      reject(error);
    });
  });
};
// 接口函数
const getSyListData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"pageSize":state.pageSize,"MONITORTYPE":"","MONITORTIME":state.monitortime,"POINT_CODE":state.parentParams.POINT_CODE,"MULTI_POLLUTANTS":state.parentParams.MULTI_POLLUTANTS,"ENTERPRISE_TYPE":state.ENTERPRISE_TYPE,"TRADE_CODE":state.treeActive,"interfaceId":state.interfaceId.sy},}).then((res) => {
     // 成功的操作
     console.log('获取 溯源列表 数据', res);

// 清空原始数据
state.syList = [];

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data?.length) {
  state.syList = data.data.map((item) => ({
    ...item,
    iconStatus: `${!!(item.LONGITUDE && item.LATITUDE)}`, // 定位
    ENTER_NAME: item.ENTER_NAME || '-', // 污染源名称
    TRADENAME: item.TRADENAME || '-', // 行业类别
    PRIMREASON: item.PRIMREASON || '-', // 主要原因
    option: "派发"
  }))
}

console.log('填充后的溯源列表', state.syList);

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.syList = [];
      reject(error);
    });
  });
};
// 接口函数
const getHyData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"63b40b7c245e715738bef205a8f7a487"},}).then((res) => {
     // 成功的操作
             // console.log('获取树 ---', res.data);
        state.treeData = [];
        if (res.data?.head?.statusCode === '200' && res.data?.data?.length) {
          // 格式化树
          const listToTree = (data, idKey, parentKey) => {
            var tree = [];
            var mappedArr = {};
            var arrElem;
            var mappedElem;

            // 创建映射表
            for (var i = 0, len = data.length; i < len; i++) {
              arrElem = {
                ...data[i],
                label: data[i].NAME,
                id: data[i].ID,
              };
              mappedArr[arrElem[idKey]] = { ...arrElem, children: [] };
            }

            // 构建树结构
            for (var id in mappedArr) {
              if (mappedArr.hasOwnProperty(id)) {
                mappedElem = mappedArr[id];
                if (mappedElem[parentKey] && mappedArr[mappedElem[parentKey]]) {
                  mappedArr[mappedElem[parentKey]].children.push(mappedElem);
                } else {
                  tree.push(mappedElem);
                }
              }
            }
            return tree;
          };
          // 填充树
          state.treeData = listToTree(res.data.data, 'ID', 'PID');
          console.log('拼接好的树', state.treeData);
        }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.treeData = [];
      reject(error);
    });
  });
};
// 接口函数
const getAlarmList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATA_FREQUENCY":state.parentParams.DATA_FREQUENCY,"ASSESSTYPE":state.parentParams.ASSESSTYPE,"POINT_CODE":state.parentParams.POINT_CODE,"MONITORTIME":state.monitortime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"798ce52d5d72109c6f09562f7e5a665c"},}).then((res) => {
     // 成功的操作
     // console.log('获取 报警信息列表', res);

// 清空原始数据
state.alarmList = [];
state.headerInfo.isShowAlarm = false; // 是否展示报警列表
state.isShowWrwCheckbox = false; // 是否展示污染物复选列表

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data?.length) {
  state.alarmList = data.data.map((item) => ({
    ...item,
    MONITORTIME: item.MONITORTIME || '-', // 报警时间
    ALARM_TYPE_NAME: item.ALARM_TYPE_NAME || '-', // 报警类型
    ALARM_DESC: item.ALARM_DESC || '-', // 报警原因
  }))
  // 是否显示报警图标，如果有列表数据，就显示
  state.headerInfo.isShowAlarm = true;
  // 是否展示污染物复选列表，如果有列表数据，就显示
  state.isShowWrwCheckbox = true;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.alarmList = [];
state.headerInfo.isShowAlarm = false; // 是否展示报警列表
state.isShowWrwCheckbox = false; // 是否展示污染物复选列表
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], () => {
getAlarmList();
},{
deep: true, // 深度监听
});
// 接口函数
const getMonitortime = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"CODE_WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"},}).then((res) => {
     // 成功的操作
     // console.log('获取 控制详情-监测时间', res);

state.monitortime = '';

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.monitortime = data.data.MONITORTIME || '';
}
// console.log('填充后的 控制详情-监测时间', state.monitortime);

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.monitortime = '';
      reject(error);
    });
  });
};
// 接口函数
const getWrwCheckboxOpts = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATA_FREQUENCY":state.parentParams.DATA_FREQUENCY,"MONITORTIME":state.monitortime,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"6d793644aea17e1abd93b0986532b446"},}).then((res) => {
     // 成功的操作
     // console.log('获取 污染物复选', res);

state.wrwCheckboxOpts = [];
state.wrwCheckboxArr = [];

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data?.length) {
  // 填充下拉
  for (let i = 0; i < data.data.length; i++) {
    const elem = data.data[i];
    if (elem.POLLUTENAME) {
      state.wrwCheckboxOpts.push({
        ...elem,
        label: elem.POLLUTENAME || '-',
        value: elem.POLLUTECODE || '',
      });
    }
  }
  state.wrwCheckboxArr = state.wrwCheckboxOpts.map((item) => item.value) || [];
  state.parentParams.MULTI_POLLUTANTS = state.wrwCheckboxArr.join(',');
}
console.log('填充后的 污染物复选', state.wrwCheckboxOpts, state.wrwCheckboxArr, state.parentParams.MULTI_POLLUTANTS);

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.wrwCheckboxOpts = [];
state.wrwCheckboxArr = [];
      reject(error);
    });
  });
};
// 接口函数
const getHeaderInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"ASSESSTYPE":state.parentParams.ASSESSTYPE,"POINT_CODE":state.parentParams.POINT_CODE,"MONITORTIME":state.monitortime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":state.interfaceId.header},}).then((res) => {
     // 成功的操作
     // console.log('获取 溯源 头部信息', res);

// 清空原始数据
state.headerInfo = {
  // 点位名称
  POINT_NAME: '-',
  // 水质类别
  WATERQUALITYLEVELNAME: [
    {
      "state": "-",
      "stateColor": "#000",
      "stateBgColor": "#AAAAAA"
    }
  ],
  // 是否达标
  ISSTANDARDSSTR: [
    {
      "state": "-",
      "stateColor": "#fff",
      "stateBgColor": "#AAAAAA"
    }
  ],
  // 是否展示报警图标
  isShowAlarm: false,
  // 断面类型
  type: "-",
};

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.headerInfo.POINT_NAME = data.data.POINT_NAME || '-';
  state.headerInfo.WATERQUALITYLEVELNAME = [
    {
      "state": data.data.WATERQUALITYLEVELNAME || '-',
      "stateColor": "#000",
      "stateBgColor": getWaterLevelColor(data.data.WATERQUALITYLEVELNAME) || "#AAAAAA",
    }
  ];
  state.headerInfo.ISSTANDARDSSTR = [
    {
      "state": data.data.ISSTANDARDSSTR || '-',
      "stateColor": "#fff",
      "stateBgColor": getWaterLevelColor(data.data.ISSTANDARDSSTR) || "#AAAAAA",
    }
  ];

  // 断面类型
  if (state.interfaceId.header === 'c88965d570ad1d00197e1fee3a00c649') {
    // 手工
    if (data.data?.AUTO_POINTCODE) {
      state.headerInfo.type = '手&自';
    } else {
      state.headerInfo.type = '手工';
    }
  } else {
    // 自动站
    state.headerInfo.type = '自动';
  }
}

console.log('获取 溯源 头部信息', state.headerInfo);

// {
//     "POINT_CODE": "C17",
//     "POINT_NAME": "新桥河新桥公园",
//     "WATERQUALITYLEVELTARGETNAME": "Ⅴ类",
//     "WATER_CODE": "HD17260100",
//     "WATER_NAME": "新桥河",
//     "REGION_NAME": "新桥街道",
//     "WSYSTEM_NAME": "茅洲河流域",
//     "AUTO_POINTCODE": "",
//     "AUTO_POINTNAME": "",
//     "AUTO_LONGITUDE": "",
//     "AUTO_LATITUDE": "",
//     "CONNECT_PROPERTY": "",
//     "CODE_CONTROLLEVEL": "4",
//     "CONTROLLEVEL": "其他",
//     "LONGITUDE": "113.819677",
//     "LATITUDE": "22.748021",
//     "CODE_WATERQUALITYLEVEL": "4",
//     "WATERQUALITYLEVELNAME": "Ⅳ类",
//     "ISSTANDARDS": "1",
//     "ISSTANDARDSSTR": "达标",
//     "PRIMPOLLUTE": "总磷(0.10)",
//     "OVERPOLLUTE": ""
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空原始数据
state.headerInfo = {
  // 点位名称
  POINT_NAME: '-',
  // 水质类别
  WATERQUALITYLEVELNAME: [
    {
      "state": "-",
      "stateColor": "#000",
      "stateBgColor": "#AAAAAA"
    }
  ],
  // 是否达标
  ISSTANDARDSSTR: [
    {
      "state": "-",
      "stateColor": "#fff",
      "stateBgColor": "#AAAAAA"
    }
  ],
  // 是否展示报警图标
  isShowAlarm: false,
  // 断面类型
  type: "-",
};
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], () => {
getHeaderInfo();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-waterCopy', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-waterCopy', global.appScaleMode, 'normal');
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

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tTextx0x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x0.default, componentState.tTextx0x2x0?.[state.screenSize]));

 const tTextx0x2x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x1.default, componentState.tTextx0x2x1?.[state.screenSize]));

 const tTextx0x2x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x2.default, componentState.tTextx0x2x2?.[state.screenSize]));

 const tListCardCommonx0x2x3ComputedData = computed(() => _.merge({}, componentState.tListCardCommonx0x2x3.default, componentState.tListCardCommonx0x2x3?.[state.screenSize]));

 const tListCardCommonx0x2x4ComputedData = computed(() => _.merge({}, componentState.tListCardCommonx0x2x4.default, componentState.tListCardCommonx0x2x4?.[state.screenSize]));

 const tRectx0x2x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x5.default, componentState.tRectx0x2x5?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTablex0x5ComputedData = computed(() => _.merge({}, componentState.tTablex0x5.default, componentState.tTablex0x5?.[state.screenSize]));

 const tRectx0x7ComputedData = computed(() => _.merge({}, componentState.tRectx0x7.default, componentState.tRectx0x7?.[state.screenSize]));

 const tRowx0x8ComputedData = computed(() => _.merge({}, componentState.tRowx0x8.default, componentState.tRowx0x8?.[state.screenSize]));

 const tCheckboxx0x8x0ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x8x0.default, componentState.tCheckboxx0x8x0?.[state.screenSize]));

 const tColx0x8x1ComputedData = computed(() => _.merge({}, componentState.tColx0x8x1.default, componentState.tColx0x8x1?.[state.screenSize]));

 const tTextx0x8x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x8x1x0.default, componentState.tTextx0x8x1x0?.[state.screenSize]));

 const tSelectx0x8x1x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x8x1x1.default, componentState.tSelectx0x8x1x1?.[state.screenSize]));

 const tTextx0x8x1x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x8x1x2.default, componentState.tTextx0x8x1x2?.[state.screenSize]));

 const tCascaderx0x8x1x3ComputedData = computed(() => _.merge({}, componentState.tCascaderx0x8x1x3.default, componentState.tCascaderx0x8x1x3?.[state.screenSize]));

 const tRectx0x8x1x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x8x1x4.default, componentState.tRectx0x8x1x4?.[state.screenSize]));

 const tRadiox0x8x2ComputedData = computed(() => _.merge({}, componentState.tRadiox0x8x2.default, componentState.tRadiox0x8x2?.[state.screenSize]));

 const tTablex0x8x3ComputedData = computed(() => _.merge({}, componentState.tTablex0x8x3.default, componentState.tTablex0x8x3?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tComponentx0x0ComputedData,
tTextx0x1ComputedData,
tRowx0x2ComputedData,
tTextx0x2x0ComputedData,
tTextx0x2x1ComputedData,
tTextx0x2x2ComputedData,
tListCardCommonx0x2x3ComputedData,
tListCardCommonx0x2x4ComputedData,
tRectx0x2x5ComputedData,
tComponentx0x3ComputedData,
tTextx0x4ComputedData,
tTablex0x5ComputedData,
tRectx0x7ComputedData,
tRowx0x8ComputedData,
tCheckboxx0x8x0ComputedData,
tColx0x8x1ComputedData,
tTextx0x8x1x0ComputedData,
tSelectx0x8x1x1ComputedData,
tTextx0x8x1x2ComputedData,
tCascaderx0x8x1x3ComputedData,
tRectx0x8x1x4ComputedData,
tRadiox0x8x2ComputedData,
tTablex0x8x3ComputedData,
onclick1733723979280,
oncellClick1734069105111_0_0,
onchange1734069969885,
onchange1733895446402_0_0,
onchange1734070589108_0_0,
onclear1734590114522,
onclick1739514291790,
onchange1734071747662,
oncellClick1733886529707_0_0,
};
},
};