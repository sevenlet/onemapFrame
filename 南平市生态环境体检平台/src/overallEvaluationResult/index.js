window.overallEvaluationResultComponent = {
template: 
`<div id="t-l-c-overallEvaluationResult" class="t-l-c-overallEvaluationResult" >` +
`<t-component id="t-component-85f9.a47b96486" class="overallEvaluationResult-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-0449.7284ee64" class="overallEvaluationResult-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle">` +
`</t-text>` +
`<t-select id="t-select-8320.e49ee9bbf" class="overallEvaluationResult-t-select-0-2"  :active-value="replaceCssVariables(filterData(global.waterGlobalVariables.waterOverview.assessType, componentPropBindingMap?.['t-select-8320.e49ee9bbf']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x2ComputedData.options" :alias="tSelectx0x2ComputedData.alias" :multiple="tSelectx0x2ComputedData.multiple" :placeholder="tSelectx0x2ComputedData.placeholder" :clearable="tSelectx0x2ComputedData.clearable" :disabled="tSelectx0x2ComputedData.disabled" :name="tSelectx0x2ComputedData.name" :autocomplete="tSelectx0x2ComputedData.autocomplete" :filterable="tSelectx0x2ComputedData.filterable" :no-match-text="tSelectx0x2ComputedData.no-match-text" :no-data-text="tSelectx0x2ComputedData.no-data-text" :c-style="tSelectx0x2ComputedData.cStyle" @change="onchange1763468188787">` +
`</t-select>` +
`<t-row id="t-row-aa36.932ee8c24" class="overallEvaluationResult-t-row-0-3"  :c-style="tRowx0x3ComputedData.cStyle" :gutter="tRowx0x3ComputedData.gutter" :justify="tRowx0x3ComputedData.justify" :align="tRowx0x3ComputedData.align">` +
`<t-col id="t-col-473d.9096d3d18" class="overallEvaluationResult-t-col-0-3-0"  :span="tColx0x3x0ComputedData.span" :offset="tColx0x3x0ComputedData.offset" :push="tColx0x3x0ComputedData.push" :pull="tColx0x3x0ComputedData.pull" :c-style="tColx0x3x0ComputedData.cStyle">` +
`<t-component id="t-component-535f.37a20bf44" class="overallEvaluationResult-t-component-0-3-0-0"  :name="tComponentx0x3x0x0ComputedData.name" :loading="tComponentx0x3x0x0ComputedData.loading" :c-style="tComponentx0x3x0x0ComputedData.cStyle" :src="tComponentx0x3x0x0ComputedData.src" :component-name="tComponentx0x3x0x0ComputedData.componentName" :page-id="tComponentx0x3x0x0ComputedData.pageId" :page-code="tComponentx0x3x0x0ComputedData.pageCode" @click="onclick1764050185031">` +
`</t-component>` +
`<t-rect v-if="state.activeItem === 'gk'" id="t-rect-4aca.428ceb086" class="overallEvaluationResult-t-rect-0-3-0-1"  :tip="tRectx0x3x0x1ComputedData.tip" :label="tRectx0x3x0x1ComputedData.label" :active="tRectx0x3x0x1ComputedData.active" :c-style="tRectx0x3x0x1ComputedData.cStyle">` +
`</t-rect>` +
`</t-col>` +
`<t-col id="t-col-42e1.988ff2392" class="overallEvaluationResult-t-col-0-3-1"  :span="tColx0x3x1ComputedData.span" :offset="tColx0x3x1ComputedData.offset" :push="tColx0x3x1ComputedData.push" :pull="tColx0x3x1ComputedData.pull" :c-style="tColx0x3x1ComputedData.cStyle">` +
`<t-component id="t-component-d1e6.ebee01e93" class="overallEvaluationResult-t-component-0-3-1-0"  :name="tComponentx0x3x1x0ComputedData.name" :loading="tComponentx0x3x1x0ComputedData.loading" :c-style="tComponentx0x3x1x0ComputedData.cStyle" :src="tComponentx0x3x1x0ComputedData.src" :component-name="tComponentx0x3x1x0ComputedData.componentName" :page-id="tComponentx0x3x1x0ComputedData.pageId" :page-code="tComponentx0x3x1x0ComputedData.pageCode" @click="onclick1764051030306">` +
`</t-component>` +
`<t-rect v-if="state.activeItem === 'sk'" id="t-rect-d39e.f453b9508" class="overallEvaluationResult-t-rect-0-3-1-1"  :tip="tRectx0x3x1x1ComputedData.tip" :label="tRectx0x3x1x1ComputedData.label" :active="tRectx0x3x1x1ComputedData.active" :c-style="tRectx0x3x1x1ComputedData.cStyle">` +
`</t-rect>` +
`</t-col>` +
`<t-col id="t-col-4679.ff1028a9f" class="overallEvaluationResult-t-col-0-3-2"  :span="tColx0x3x2ComputedData.span" :offset="tColx0x3x2ComputedData.offset" :push="tColx0x3x2ComputedData.push" :pull="tColx0x3x2ComputedData.pull" :c-style="tColx0x3x2ComputedData.cStyle">` +
`<t-component id="t-component-a57d.631b29e48" class="overallEvaluationResult-t-component-0-3-2-0"  :name="tComponentx0x3x2x0ComputedData.name" :loading="tComponentx0x3x2x0ComputedData.loading" :c-style="tComponentx0x3x2x0ComputedData.cStyle" :src="tComponentx0x3x2x0ComputedData.src" :component-name="tComponentx0x3x2x0ComputedData.componentName" :page-id="tComponentx0x3x2x0ComputedData.pageId" :page-code="tComponentx0x3x2x0ComputedData.pageCode" @click="onclick1764051005699">` +
`</t-component>` +
`<t-rect v-if="state.activeItem === 'xly'" id="t-rect-eb3a.4591aff74" class="overallEvaluationResult-t-rect-0-3-2-1"  :tip="tRectx0x3x2x1ComputedData.tip" :label="tRectx0x3x2x1ComputedData.label" :active="tRectx0x3x2x1ComputedData.active" :c-style="tRectx0x3x2x1ComputedData.cStyle">` +
`</t-rect>` +
`</t-col>` +
`<t-col id="t-col-4aab.4a4b615e2" class="overallEvaluationResult-t-col-0-3-3"  :span="tColx0x3x3ComputedData.span" :offset="tColx0x3x3ComputedData.offset" :push="tColx0x3x3ComputedData.push" :pull="tColx0x3x3ComputedData.pull" :c-style="tColx0x3x3ComputedData.cStyle">` +
`<t-component id="t-component-ed32.70867db46" class="overallEvaluationResult-t-component-0-3-3-0"  :name="tComponentx0x3x3x0ComputedData.name" :loading="tComponentx0x3x3x0ComputedData.loading" :c-style="tComponentx0x3x3x0ComputedData.cStyle" :src="tComponentx0x3x3x0ComputedData.src" :component-name="tComponentx0x3x3x0ComputedData.componentName" :page-id="tComponentx0x3x3x0ComputedData.pageId" :page-code="tComponentx0x3x3x0ComputedData.pageCode" @click="onclick1764050976999">` +
`</t-component>` +
`<t-rect v-if="state.activeItem === 'yysyd'" id="t-rect-2d7f.31fb1c701" class="overallEvaluationResult-t-rect-0-3-3-1"  :tip="tRectx0x3x3x1ComputedData.tip" :label="tRectx0x3x3x1ComputedData.label" :active="tRectx0x3x3x1ComputedData.active" :c-style="tRectx0x3x3x1ComputedData.cStyle">` +
`</t-rect>` +
`</t-col>` +
`<t-col id="t-col-cdd1.292b02a6e" class="overallEvaluationResult-t-col-0-3-4"  :span="tColx0x3x4ComputedData.span" :offset="tColx0x3x4ComputedData.offset" :push="tColx0x3x4ComputedData.push" :pull="tColx0x3x4ComputedData.pull" :c-style="tColx0x3x4ComputedData.cStyle">` +
`<t-component id="t-component-bcf3.a0c651c15" class="overallEvaluationResult-t-component-0-3-4-0"  :name="tComponentx0x3x4x0ComputedData.name" :loading="tComponentx0x3x4x0ComputedData.loading" :c-style="tComponentx0x3x4x0ComputedData.cStyle" :src="tComponentx0x3x4x0ComputedData.src" :component-name="tComponentx0x3x4x0ComputedData.componentName" :page-id="tComponentx0x3x4x0ComputedData.pageId" :page-code="tComponentx0x3x4x0ComputedData.pageCode" @click="onclick1764050956797">` +
`</t-component>` +
`<t-rect v-if="state.activeItem === 'zdhk'" id="t-rect-4051.7c2e78796" class="overallEvaluationResult-t-rect-0-3-4-1"  :tip="tRectx0x3x4x1ComputedData.tip" :label="tRectx0x3x4x1ComputedData.label" :active="tRectx0x3x4x1ComputedData.active" :c-style="tRectx0x3x4x1ComputedData.cStyle">` +
`</t-rect>` +
`</t-col>` +
`<t-col id="t-col-7717.235e399b8" class="overallEvaluationResult-t-col-0-3-5"  :span="tColx0x3x5ComputedData.span" :offset="tColx0x3x5ComputedData.offset" :push="tColx0x3x5ComputedData.push" :pull="tColx0x3x5ComputedData.pull" :c-style="tColx0x3x5ComputedData.cStyle">` +
`<t-component id="t-component-5444.d3a662471" class="overallEvaluationResult-t-component-0-3-5-0"  :name="tComponentx0x3x5x0ComputedData.name" :loading="tComponentx0x3x5x0ComputedData.loading" :c-style="tComponentx0x3x5x0ComputedData.cStyle" :src="tComponentx0x3x5x0ComputedData.src" :component-name="tComponentx0x3x5x0ComputedData.componentName" :page-id="tComponentx0x3x5x0ComputedData.pageId" :page-code="tComponentx0x3x5x0ComputedData.pageCode" @click="onclick1764050934571">` +
`</t-component>` +
`<t-rect v-if="state.activeItem === 'wzdyx'" id="t-rect-968f.19432f6fb" class="overallEvaluationResult-t-rect-0-3-5-1"  :tip="tRectx0x3x5x1ComputedData.tip" :label="tRectx0x3x5x1ComputedData.label" :active="tRectx0x3x5x1ComputedData.active" :c-style="tRectx0x3x5x1ComputedData.cStyle">` +
`</t-rect>` +
`</t-col>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-85f9.a47b96486":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-0449.7284ee64":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-8320.e49ee9bbf":{"attributeName":"tSelectx0x2","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-row-aa36.932ee8c24":{"attributeName":"tRowx0x3","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-473d.9096d3d18":{"attributeName":"tColx0x3x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-535f.37a20bf44":{"attributeName":"tComponentx0x3x0x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-rect-4aca.428ceb086":{"attributeName":"tRectx0x3x0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-42e1.988ff2392":{"attributeName":"tColx0x3x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-d1e6.ebee01e93":{"attributeName":"tComponentx0x3x1x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-rect-d39e.f453b9508":{"attributeName":"tRectx0x3x1x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-4679.ff1028a9f":{"attributeName":"tColx0x3x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-a57d.631b29e48":{"attributeName":"tComponentx0x3x2x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-rect-eb3a.4591aff74":{"attributeName":"tRectx0x3x2x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-4aab.4a4b615e2":{"attributeName":"tColx0x3x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-ed32.70867db46":{"attributeName":"tComponentx0x3x3x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-rect-2d7f.31fb1c701":{"attributeName":"tRectx0x3x3x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-cdd1.292b02a6e":{"attributeName":"tColx0x3x4","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-bcf3.a0c651c15":{"attributeName":"tComponentx0x3x4x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-rect-4051.7c2e78796":{"attributeName":"tRectx0x3x4x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-7717.235e399b8":{"attributeName":"tColx0x3x5","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-5444.d3a662471":{"attributeName":"tComponentx0x3x5x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-rect-968f.19432f6fb":{"attributeName":"tRectx0x3x5x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   activeTime: "",
   activeItem: "gk",
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
            default: {"width":"414px","height":"31px","margin":"0 auto","backgroundColor":"rgba(184, 24, 24, 0)","position":"unset","left":"19px","top":"3px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"414px","height":"31px","margin":"0 auto","backgroundColor":"rgba(184, 24, 24, 0)","position":"unset","left":"19px","top":"3px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"59px","top":"9px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""},
            
            },
 default: { 
 
label:"整体评价结果",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"59px","top":"9px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""}}}, 
 },
},
tSelectx0x2: {
defaultStyle: {
            default: {"width":"97px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","position":"unset","left":"323px","top":"2px"},
            
            },
 default: { 
 
activeValue:"monthly",
options:[{"value":"monthly","label":"单月","disabled":false},{"value":"culmulate","label":"累计","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"97px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","position":"unset","left":"323px","top":"2px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tRowx0x3: {
defaultStyle: {
            default: {"width":"413px","height":"809px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"18px","top":"56px","gap":"0"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"413px","height":"809px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"18px","top":"56px","gap":"0"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x3x0: {
defaultStyle: {
            default: {"width":"412px","height":"116px","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"50px","top":"50px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"412px","height":"116px","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"50px","top":"50px"}}}, 
 },
},
tComponentx0x3x0x0: {
defaultStyle: {
            default: {"width":"410px","height":"110px","margin":"0 auto","position":"unset","left":"22px","top":"50px","borderLeft":"1px Solid rgba(6,146,222,1)","borderTop":"1px Solid rgba(6,146,222,1)","borderRight":"1px Solid rgba(6,146,222,1)","borderBottom":"1px Solid rgba(6,146,222,1)","borderDirection":"all","border":"unset !important","cursor":"pointer"},
            
            },
 default: { 
 
name:"gkdmComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"410px","height":"110px","margin":"0 auto","position":"unset","left":"22px","top":"50px","borderLeft":"1px Solid rgba(6,146,222,1)","borderTop":"1px Solid rgba(6,146,222,1)","borderRight":"1px Solid rgba(6,146,222,1)","borderBottom":"1px Solid rgba(6,146,222,1)","borderDirection":"all","border":"unset !important","cursor":"pointer"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/gkdm",
componentName:"gkdmComponent",
pageId:"35892afb1971487a996e76d6c2959943",
pageCode:"gkdm", 
 },
},
tRectx0x3x0x1: {
defaultStyle: {
            default: {"width":"412px","height":"116px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid rgba(245,229,181,1)","borderLeft":"1px Solid rgba(245,229,181,1)","borderBottom":"1px Solid rgba(245,229,181,1)","borderRight":"1px Solid rgba(245,229,181,1)","position":"absolute !important","left":"0 !important","top":"0  !important","borderDirection":"all","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-11-28/ebfc83aeb1bf4d64b20330f86a3043c7.png)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","pointerEvents":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"412px","height":"116px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid rgba(245,229,181,1)","borderLeft":"1px Solid rgba(245,229,181,1)","borderBottom":"1px Solid rgba(245,229,181,1)","borderRight":"1px Solid rgba(245,229,181,1)","position":"absolute !important","left":"0 !important","top":"0  !important","borderDirection":"all","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-11-28/ebfc83aeb1bf4d64b20330f86a3043c7.png)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","pointerEvents":"none"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tColx0x3x1: {
defaultStyle: {
            default: {"width":"412px","height":"116px","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"40px","top":"40px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"412px","height":"116px","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"40px","top":"40px"}}}, 
 },
},
tComponentx0x3x1x0: {
defaultStyle: {
            default: {"width":"410px","height":"110px","margin":"0 auto","position":"unset","left":"23px","top":"181px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
name:"skdmComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"410px","height":"110px","margin":"0 auto","position":"unset","left":"23px","top":"181px","animationName":"","cursor":"pointer"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/skdm",
componentName:"skdmComponent",
pageId:"b35eb3ce5ec84436bb5944d09db9dd01",
pageCode:"skdm", 
 },
},
tRectx0x3x1x1: {
defaultStyle: {
            default: {"width":"412px","height":"116px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid rgba(245,229,181,1)","borderLeft":"1px Solid rgba(245,229,181,1)","borderBottom":"1px Solid rgba(245,229,181,1)","borderRight":"1px Solid rgba(245,229,181,1)","position":"absolute !important","left":"0 !important","top":"0  !important","borderDirection":"all","animationName":"","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-11-28/ebfc83aeb1bf4d64b20330f86a3043c7.png)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","pointerEvents":"none","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"412px","height":"116px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid rgba(245,229,181,1)","borderLeft":"1px Solid rgba(245,229,181,1)","borderBottom":"1px Solid rgba(245,229,181,1)","borderRight":"1px Solid rgba(245,229,181,1)","position":"absolute !important","left":"0 !important","top":"0  !important","borderDirection":"all","animationName":"","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-11-28/ebfc83aeb1bf4d64b20330f86a3043c7.png)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","pointerEvents":"none","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tColx0x3x2: {
defaultStyle: {
            default: {"width":"412px","height":"116px","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"30px","top":"30px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"412px","height":"116px","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"30px","top":"30px"}}}, 
 },
},
tComponentx0x3x2x0: {
defaultStyle: {
            default: {"width":"410px","height":"110px","margin":"0 auto","position":"unset","left":"23px","top":"310px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
name:"xlyComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"410px","height":"110px","margin":"0 auto","position":"unset","left":"23px","top":"310px","animationName":"","cursor":"pointer"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/xly",
componentName:"xlyComponent",
pageId:"b8f97c8fef924066b0cef2bc610f40da",
pageCode:"xly", 
 },
},
tRectx0x3x2x1: {
defaultStyle: {
            default: {"width":"412px","height":"116px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid rgba(245,229,181,1)","borderLeft":"1px Solid rgba(245,229,181,1)","borderBottom":"1px Solid rgba(245,229,181,1)","borderRight":"1px Solid rgba(245,229,181,1)","position":"absolute !important","left":"0 !important","top":"0  !important","borderDirection":"all","animationName":"","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-11-28/ebfc83aeb1bf4d64b20330f86a3043c7.png)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","pointerEvents":"none","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"412px","height":"116px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid rgba(245,229,181,1)","borderLeft":"1px Solid rgba(245,229,181,1)","borderBottom":"1px Solid rgba(245,229,181,1)","borderRight":"1px Solid rgba(245,229,181,1)","position":"absolute !important","left":"0 !important","top":"0  !important","borderDirection":"all","animationName":"","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-11-28/ebfc83aeb1bf4d64b20330f86a3043c7.png)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","pointerEvents":"none","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tColx0x3x3: {
defaultStyle: {
            default: {"width":"412px","height":"116px","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"20px","top":"20px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"412px","height":"116px","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"20px","top":"20px"}}}, 
 },
},
tComponentx0x3x3x0: {
defaultStyle: {
            default: {"width":"410px","height":"110px","margin":"0 auto","position":"unset","left":"23px","top":"444px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
name:"yysydComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"410px","height":"110px","margin":"0 auto","position":"unset","left":"23px","top":"444px","animationName":"","cursor":"pointer"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/yysyd",
componentName:"yysydComponent",
pageId:"55fd1b8b6533489c8d7e7d43315f94b3",
pageCode:"yysyd", 
 },
},
tRectx0x3x3x1: {
defaultStyle: {
            default: {"width":"412px","height":"116px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid rgba(245,229,181,1)","borderLeft":"1px Solid rgba(245,229,181,1)","borderBottom":"1px Solid rgba(245,229,181,1)","borderRight":"1px Solid rgba(245,229,181,1)","position":"absolute !important","left":"0 !important","top":"0  !important","borderDirection":"all","animationName":"","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-11-28/ebfc83aeb1bf4d64b20330f86a3043c7.png)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","cursor":"pointer","pointerEvents":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"412px","height":"116px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid rgba(245,229,181,1)","borderLeft":"1px Solid rgba(245,229,181,1)","borderBottom":"1px Solid rgba(245,229,181,1)","borderRight":"1px Solid rgba(245,229,181,1)","position":"absolute !important","left":"0 !important","top":"0  !important","borderDirection":"all","animationName":"","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-11-28/ebfc83aeb1bf4d64b20330f86a3043c7.png)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","cursor":"pointer","pointerEvents":"none"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tColx0x3x4: {
defaultStyle: {
            default: {"width":"412px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"10px","top":"10px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"412px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"10px","top":"10px"}}}, 
 },
},
tComponentx0x3x4x0: {
defaultStyle: {
            default: {"width":"410px","height":"auto","margin":"0 auto","position":"unset","left":"22px","top":"571px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
name:"zdhkComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"410px","height":"auto","margin":"0 auto","position":"unset","left":"22px","top":"571px","animationName":"","cursor":"pointer"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/zdhk",
componentName:"zdhkComponent",
pageId:"d9d1c116fff5488f9cf53a0ca9c381ac",
pageCode:"zdhk", 
 },
},
tRectx0x3x4x1: {
defaultStyle: {
            default: {"width":"412px","height":"116px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid rgba(245,229,181,1)","borderLeft":"1px Solid rgba(245,229,181,1)","borderBottom":"1px Solid rgba(245,229,181,1)","borderRight":"1px Solid rgba(245,229,181,1)","position":"absolute !important","left":"0 !important","top":"0  !important","borderDirection":"all","animationName":"","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-11-28/ebfc83aeb1bf4d64b20330f86a3043c7.png)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","cursor":"pointer","pointerEvents":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"412px","height":"116px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid rgba(245,229,181,1)","borderLeft":"1px Solid rgba(245,229,181,1)","borderBottom":"1px Solid rgba(245,229,181,1)","borderRight":"1px Solid rgba(245,229,181,1)","position":"absolute !important","left":"0 !important","top":"0  !important","borderDirection":"all","animationName":"","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-11-28/ebfc83aeb1bf4d64b20330f86a3043c7.png)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","cursor":"pointer","pointerEvents":"none"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tColx0x3x5: {
defaultStyle: {
            default: {"width":"412px","height":"116px","display":"flex","justifyContent":"center","alignItems":"center","paddingTop":"unset"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"412px","height":"116px","display":"flex","justifyContent":"center","alignItems":"center","paddingTop":"unset"}}}, 
 },
},
tComponentx0x3x5x0: {
defaultStyle: {
            default: {"width":"410px","height":"110px","margin":"0 auto","position":"unset","left":"22px","top":"702px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
name:"lydqwzdyxComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"410px","height":"110px","margin":"0 auto","position":"unset","left":"22px","top":"702px","animationName":"","cursor":"pointer"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/lydqwzdyx",
componentName:"lydqwzdyxComponent",
pageId:"3b0b172acdfe4491b1daef1e0dced233",
pageCode:"lydqwzdyx", 
 },
},
tRectx0x3x5x1: {
defaultStyle: {
            default: {"width":"412px","height":"116px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"absolute !important","borderTop":"1px Solid rgba(245,229,181,1)","borderLeft":"1px Solid rgba(245,229,181,1)","borderBottom":"1px Solid rgba(245,229,181,1)","borderRight":"1px Solid rgba(245,229,181,1)","position":"absolute !important","left":"0 !important","top":"0  !important","borderDirection":"all","animationName":"","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-11-28/ebfc83aeb1bf4d64b20330f86a3043c7.png)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","cursor":"pointer","pointerEvents":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"412px","height":"116px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"absolute !important","borderTop":"1px Solid rgba(245,229,181,1)","borderLeft":"1px Solid rgba(245,229,181,1)","borderBottom":"1px Solid rgba(245,229,181,1)","borderRight":"1px Solid rgba(245,229,181,1)","position":"absolute !important","left":"0 !important","top":"0  !important","borderDirection":"all","animationName":"","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-11-28/ebfc83aeb1bf4d64b20330f86a3043c7.png)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","cursor":"pointer","pointerEvents":"none"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const handleSelect = (name) => {
};
const sendMsgToMap = (time,resCode) => {

const monitorTime = time ? time : global.waterGlobalVariables.waterOverview[`${state.activeItem}Time`]
if(resCode === 'onemap_manual_overviewwater' || resCode === undefined){
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateWaterOverviewWholeEvaluateResultStatus',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      type: state.activeItem,
      assessType: global.waterGlobalVariables.waterOverview.assessType,
      monitorTime: monitorTime
    }
  }
);
}
};
const setStyle = () => {
setTimeout(() => {
  
  // 重点湖库
  if (state.activeItem === 'zdhk') {
    // 动态组件栅格DOM
    const rowDom = document.querySelector("#t-row-2bd3\\.1b532742c")
    const rowDomHeight = rowDom.offsetHeight
    // 背景框
    const selectedBgDom = document.querySelector("#t-rect-4051\\.7c2e78796")
    selectedBgDom.style.height = `${rowDomHeight + 4}px`
  }else if(state.activeItem === 'wzdyx') {
     // 动态组件栅格DOM
    const rowDom = document.querySelector("#t-row-7a07\\.2549e8c0d")
    const rowDomHeight = rowDom.offsetHeight
    // 背景框
    const selectedBgDom = document.querySelector("#t-rect-968f\\.19432f6fb")
    selectedBgDom.style.height = `${rowDomHeight + 4}px`
  }
})
};
const onchange1763468188787 = (value,selectValueArr,selectValueItem) => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'waterGlobalVariables.waterOverview.assessType',
                    value:value,
                    data: {
                      waterGlobalVariables:{waterOverview:{assessType: value}}
                    },
                  });
// 执行自定义方法
sendMsgToMap();
};
const onclick1764050185031 = () => {
// 设置变量值
state.activeItem = 'gk';
// 执行自定义方法
sendMsgToMap(global.waterGlobalVariables.waterOverview.gkTime);
// 执行自定义方法
setStyle();
};
const onclick1764051030306 = () => {
// 设置变量值
state.activeItem = 'sk';
// 执行自定义方法
sendMsgToMap(global.waterGlobalVariables.waterOverview.skTime);
// 执行自定义方法
setStyle();
};
const onclick1764051005699 = () => {
// 设置变量值
state.activeItem = 'xly';
// 执行自定义方法
sendMsgToMap(global.waterGlobalVariables.waterOverview.xlyTime);
// 执行自定义方法
setStyle();
};
const onclick1764050956797 = () => {
// 设置变量值
state.activeItem = 'zdhk';
// 执行自定义方法
setStyle();
};
const onclick1764050976999 = () => {
// 设置变量值
state.activeItem = 'yysyd';
// 执行自定义方法
sendMsgToMap(global.waterGlobalVariables.waterOverview.yysydTime);
// 执行自定义方法
setStyle();
};
const onclick1764050934571 = () => {
// 设置变量值
state.activeItem = 'wzdyx';
// 执行自定义方法
setStyle();
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-overallEvaluationResult', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
const onSocketChange39b1e217ae6a4d73ae76 = function (data) {
if(data.type === "appLoaded"){
try{
// 执行自定义方法
sendMsgToMap(state.activeTime,data.data.resCode);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange39b1e217ae6a4d73ae76);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange39b1e217ae6a4d73ae76);
});
onMounted(() => {
setPageScale('t-l-c-overallEvaluationResult', global.appScaleMode, 'normal');
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

 const tSelectx0x2ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2.default, componentState.tSelectx0x2?.[state.screenSize]));

 const tRowx0x3ComputedData = computed(() => _.merge({}, componentState.tRowx0x3.default, componentState.tRowx0x3?.[state.screenSize]));

 const tColx0x3x0ComputedData = computed(() => _.merge({}, componentState.tColx0x3x0.default, componentState.tColx0x3x0?.[state.screenSize]));

 const tComponentx0x3x0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3x0x0.default, componentState.tComponentx0x3x0x0?.[state.screenSize]));

 const tRectx0x3x0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x3x0x1.default, componentState.tRectx0x3x0x1?.[state.screenSize]));

 const tColx0x3x1ComputedData = computed(() => _.merge({}, componentState.tColx0x3x1.default, componentState.tColx0x3x1?.[state.screenSize]));

 const tComponentx0x3x1x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3x1x0.default, componentState.tComponentx0x3x1x0?.[state.screenSize]));

 const tRectx0x3x1x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x3x1x1.default, componentState.tRectx0x3x1x1?.[state.screenSize]));

 const tColx0x3x2ComputedData = computed(() => _.merge({}, componentState.tColx0x3x2.default, componentState.tColx0x3x2?.[state.screenSize]));

 const tComponentx0x3x2x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3x2x0.default, componentState.tComponentx0x3x2x0?.[state.screenSize]));

 const tRectx0x3x2x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x3x2x1.default, componentState.tRectx0x3x2x1?.[state.screenSize]));

 const tColx0x3x3ComputedData = computed(() => _.merge({}, componentState.tColx0x3x3.default, componentState.tColx0x3x3?.[state.screenSize]));

 const tComponentx0x3x3x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3x3x0.default, componentState.tComponentx0x3x3x0?.[state.screenSize]));

 const tRectx0x3x3x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x3x3x1.default, componentState.tRectx0x3x3x1?.[state.screenSize]));

 const tColx0x3x4ComputedData = computed(() => _.merge({}, componentState.tColx0x3x4.default, componentState.tColx0x3x4?.[state.screenSize]));

 const tComponentx0x3x4x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3x4x0.default, componentState.tComponentx0x3x4x0?.[state.screenSize]));

 const tRectx0x3x4x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x3x4x1.default, componentState.tRectx0x3x4x1?.[state.screenSize]));

 const tColx0x3x5ComputedData = computed(() => _.merge({}, componentState.tColx0x3x5.default, componentState.tColx0x3x5?.[state.screenSize]));

 const tComponentx0x3x5x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3x5x0.default, componentState.tComponentx0x3x5x0?.[state.screenSize]));

 const tRectx0x3x5x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x3x5x1.default, componentState.tRectx0x3x5x1?.[state.screenSize]));

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
tSelectx0x2ComputedData,
tRowx0x3ComputedData,
tColx0x3x0ComputedData,
tComponentx0x3x0x0ComputedData,
tRectx0x3x0x1ComputedData,
tColx0x3x1ComputedData,
tComponentx0x3x1x0ComputedData,
tRectx0x3x1x1ComputedData,
tColx0x3x2ComputedData,
tComponentx0x3x2x0ComputedData,
tRectx0x3x2x1ComputedData,
tColx0x3x3ComputedData,
tComponentx0x3x3x0ComputedData,
tRectx0x3x3x1ComputedData,
tColx0x3x4ComputedData,
tComponentx0x3x4x0ComputedData,
tRectx0x3x4x1ComputedData,
tColx0x3x5ComputedData,
tComponentx0x3x5x0ComputedData,
tRectx0x3x5x1ComputedData,
onchange1763468188787,
onclick1764050185031,
onclick1764051030306,
onclick1764051005699,
onclick1764050976999,
onclick1764050956797,
onclick1764050934571,
};
},
};