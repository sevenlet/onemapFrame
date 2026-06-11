window.parkPopupComponent = {
template: 
`<div id="t-l-c-parkPopup" class="t-l-c-parkPopup" >` +
`<t-row id="t-row-9965.8fd4275ae" class="parkPopup-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align">` +
`<t-row id="t-row-76f5.e5c559c37" class="parkPopup-t-row-0-0-0"  :c-style="tRowx0x0x0ComputedData.cStyle" :gutter="tRowx0x0x0ComputedData.gutter" :justify="tRowx0x0x0ComputedData.justify" :align="tRowx0x0x0ComputedData.align">` +
`<t-col id="t-col-1c76.883c07226" class="parkPopup-t-col-0-0-0-0"  :span="tColx0x0x0x0ComputedData.span" :offset="tColx0x0x0x0ComputedData.offset" :push="tColx0x0x0x0ComputedData.push" :pull="tColx0x0x0x0ComputedData.pull" :c-style="tColx0x0x0x0ComputedData.cStyle">` +
`<t-text id="t-text-4814.5352a3d92" class="parkPopup-t-text-0-0-0-0-0"  :label="tTextx0x0x0x0x0ComputedData.label" :editable="tTextx0x0x0x0x0ComputedData.editable" :c-style="tTextx0x0x0x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-30b5.ce97c0624" class="parkPopup-t-col-0-0-0-1"  :span="tColx0x0x0x1ComputedData.span" :offset="tColx0x0x0x1ComputedData.offset" :push="tColx0x0x0x1ComputedData.push" :pull="tColx0x0x0x1ComputedData.pull" :c-style="tColx0x0x0x1ComputedData.cStyle">` +
`<t-text id="t-text-a6a0.97f9fae7b" class="parkPopup-t-text-0-0-0-1-0"  :label="replaceCssVariables(filterData(state.baseInfo.POINT_NAME, componentPropBindingMap?.['t-text-a6a0.97f9fae7b']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x0x1x0ComputedData.editable" :c-style="tTextx0x0x0x1x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-66bb.b894f1d0a" class="parkPopup-t-col-0-0-0-2"  :span="tColx0x0x0x2ComputedData.span" :offset="tColx0x0x0x2ComputedData.offset" :push="tColx0x0x0x2ComputedData.push" :pull="tColx0x0x0x2ComputedData.pull" :c-style="tColx0x0x0x2ComputedData.cStyle">` +
`<t-text id="t-text-70a5.c8a261cab" class="parkPopup-t-text-0-0-0-2-0"  :label="tTextx0x0x0x2x0ComputedData.label" :editable="tTextx0x0x0x2x0ComputedData.editable" :c-style="tTextx0x0x0x2x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-5e7c.b410e5d21" class="parkPopup-t-col-0-0-0-3"  :span="tColx0x0x0x3ComputedData.span" :offset="tColx0x0x0x3ComputedData.offset" :push="tColx0x0x0x3ComputedData.push" :pull="tColx0x0x0x3ComputedData.pull" :c-style="tColx0x0x0x3ComputedData.cStyle">` +
`<t-text id="t-text-3cee.4354210c7" class="parkPopup-t-text-0-0-0-3-0"  :label="replaceCssVariables(filterData(state.baseInfo.POINT_TYPE, componentPropBindingMap?.['t-text-3cee.4354210c7']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x0x3x0ComputedData.editable" :c-style="tTextx0x0x0x3x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-0198.f9ea460b4" class="parkPopup-t-row-0-0-1"  :c-style="tRowx0x0x1ComputedData.cStyle" :gutter="tRowx0x0x1ComputedData.gutter" :justify="tRowx0x0x1ComputedData.justify" :align="tRowx0x0x1ComputedData.align">` +
`<t-col id="t-col-d9a7.a7a1f8be2" class="parkPopup-t-col-0-0-1-0"  :span="tColx0x0x1x0ComputedData.span" :offset="tColx0x0x1x0ComputedData.offset" :push="tColx0x0x1x0ComputedData.push" :pull="tColx0x0x1x0ComputedData.pull" :c-style="tColx0x0x1x0ComputedData.cStyle">` +
`<t-text id="t-text-8142.44b2faeda" class="parkPopup-t-text-0-0-1-0-0"  :label="tTextx0x0x1x0x0ComputedData.label" :editable="tTextx0x0x1x0x0ComputedData.editable" :c-style="tTextx0x0x1x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-643f.fe79b4627" class="parkPopup-t-col-0-0-1-1"  :span="tColx0x0x1x1ComputedData.span" :offset="tColx0x0x1x1ComputedData.offset" :push="tColx0x0x1x1ComputedData.push" :pull="tColx0x0x1x1ComputedData.pull" :c-style="tColx0x0x1x1ComputedData.cStyle">` +
`<t-text id="t-text-5446.2b6277c62" class="parkPopup-t-text-0-0-1-1-0"  :label="replaceCssVariables(filterData(state.baseInfo.DISTRICT_NAME, componentPropBindingMap?.['t-text-5446.2b6277c62']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x1x1x0ComputedData.editable" :c-style="tTextx0x0x1x1x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-42bb.d6e58437a" class="parkPopup-t-col-0-0-1-2"  :span="tColx0x0x1x2ComputedData.span" :offset="tColx0x0x1x2ComputedData.offset" :push="tColx0x0x1x2ComputedData.push" :pull="tColx0x0x1x2ComputedData.pull" :c-style="tColx0x0x1x2ComputedData.cStyle">` +
`<t-text id="t-text-5409.8e85e8f0e" class="parkPopup-t-text-0-0-1-2-0"  :label="tTextx0x0x1x2x0ComputedData.label" :editable="tTextx0x0x1x2x0ComputedData.editable" :c-style="tTextx0x0x1x2x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-3dd6.0a56c8b2f" class="parkPopup-t-col-0-0-1-3"  :span="tColx0x0x1x3ComputedData.span" :offset="tColx0x0x1x3ComputedData.offset" :push="tColx0x0x1x3ComputedData.push" :pull="tColx0x0x1x3ComputedData.pull" :c-style="tColx0x0x1x3ComputedData.cStyle">` +
`<t-text id="t-text-2fae.5c8ce3d98" class="parkPopup-t-text-0-0-1-3-0"  :label="replaceCssVariables(filterData(state.baseInfo.STREET_NAME, componentPropBindingMap?.['t-text-2fae.5c8ce3d98']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x1x3x0ComputedData.editable" :c-style="tTextx0x0x1x3x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-03a8.697d246ce" class="parkPopup-t-row-0-0-2"  :c-style="tRowx0x0x2ComputedData.cStyle" :gutter="tRowx0x0x2ComputedData.gutter" :justify="tRowx0x0x2ComputedData.justify" :align="tRowx0x0x2ComputedData.align">` +
`<t-col id="t-col-e8b9.fd93a456f" class="parkPopup-t-col-0-0-2-0"  :span="tColx0x0x2x0ComputedData.span" :offset="tColx0x0x2x0ComputedData.offset" :push="tColx0x0x2x0ComputedData.push" :pull="tColx0x0x2x0ComputedData.pull" :c-style="tColx0x0x2x0ComputedData.cStyle">` +
`<t-text id="t-text-936e.54f0ff6b6" class="parkPopup-t-text-0-0-2-0-0"  :label="tTextx0x0x2x0x0ComputedData.label" :editable="tTextx0x0x2x0x0ComputedData.editable" :c-style="tTextx0x0x2x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-80f4.2bf6477eb" class="parkPopup-t-col-0-0-2-1"  :span="tColx0x0x2x1ComputedData.span" :offset="tColx0x0x2x1ComputedData.offset" :push="tColx0x0x2x1ComputedData.push" :pull="tColx0x0x2x1ComputedData.pull" :c-style="tColx0x0x2x1ComputedData.cStyle">` +
`<t-text id="t-text-d5ba.438c406ac" class="parkPopup-t-text-0-0-2-1-0"  :label="replaceCssVariables(filterData(state.baseInfo.COMMUNITY_ADDR, componentPropBindingMap?.['t-text-d5ba.438c406ac']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x2x1x0ComputedData.editable" :c-style="tTextx0x0x2x1x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-3649.6c75f18a9" class="parkPopup-t-row-0-0-3"  :c-style="tRowx0x0x3ComputedData.cStyle" :gutter="tRowx0x0x3ComputedData.gutter" :justify="tRowx0x0x3ComputedData.justify" :align="tRowx0x0x3ComputedData.align">` +
`<t-col id="t-col-a739.3d0942d7c" class="parkPopup-t-col-0-0-3-0"  :span="tColx0x0x3x0ComputedData.span" :offset="tColx0x0x3x0ComputedData.offset" :push="tColx0x0x3x0ComputedData.push" :pull="tColx0x0x3x0ComputedData.pull" :c-style="tColx0x0x3x0ComputedData.cStyle">` +
`<t-text id="t-text-4d1a.abb8d564a" class="parkPopup-t-text-0-0-3-0-0"  :label="tTextx0x0x3x0x0ComputedData.label" :editable="tTextx0x0x3x0x0ComputedData.editable" :c-style="tTextx0x0x3x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-37ed.03bb9dc01" class="parkPopup-t-col-0-0-3-1"  :span="tColx0x0x3x1ComputedData.span" :offset="tColx0x0x3x1ComputedData.offset" :push="tColx0x0x3x1ComputedData.push" :pull="tColx0x0x3x1ComputedData.pull" :c-style="tColx0x0x3x1ComputedData.cStyle">` +
`<t-text id="t-text-7a55.fa0144dee" class="parkPopup-t-text-0-0-3-1-0"  :label="replaceCssVariables(filterData(state.baseInfo.RESPONSIBLE_PERSON, componentPropBindingMap?.['t-text-7a55.fa0144dee']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x3x1x0ComputedData.editable" :c-style="tTextx0x0x3x1x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-eb86.b14c7cdc6" class="parkPopup-t-col-0-0-3-2"  :span="tColx0x0x3x2ComputedData.span" :offset="tColx0x0x3x2ComputedData.offset" :push="tColx0x0x3x2ComputedData.push" :pull="tColx0x0x3x2ComputedData.pull" :c-style="tColx0x0x3x2ComputedData.cStyle">` +
`<t-text id="t-text-a275.818edeca1" class="parkPopup-t-text-0-0-3-2-0"  :label="tTextx0x0x3x2x0ComputedData.label" :editable="tTextx0x0x3x2x0ComputedData.editable" :c-style="tTextx0x0x3x2x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-78fb.7015f5b9a" class="parkPopup-t-col-0-0-3-3"  :span="tColx0x0x3x3ComputedData.span" :offset="tColx0x0x3x3ComputedData.offset" :push="tColx0x0x3x3ComputedData.push" :pull="tColx0x0x3x3ComputedData.pull" :c-style="tColx0x0x3x3ComputedData.cStyle">` +
`<t-text id="t-text-120c.3b91054ea" class="parkPopup-t-text-0-0-3-3-0"  :label="replaceCssVariables(filterData(state.baseInfo.CONTACT_PHONE, componentPropBindingMap?.['t-text-120c.3b91054ea']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x3x3x0ComputedData.editable" :c-style="tTextx0x0x3x3x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`</t-row>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-9965.8fd4275ae":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-row-76f5.e5c559c37":{"attributeName":"tRowx0x0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-1c76.883c07226":{"attributeName":"tColx0x0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-4814.5352a3d92":{"attributeName":"tTextx0x0x0x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-30b5.ce97c0624":{"attributeName":"tColx0x0x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a6a0.97f9fae7b":{"attributeName":"tTextx0x0x0x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-66bb.b894f1d0a":{"attributeName":"tColx0x0x0x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-70a5.c8a261cab":{"attributeName":"tTextx0x0x0x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-5e7c.b410e5d21":{"attributeName":"tColx0x0x0x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3cee.4354210c7":{"attributeName":"tTextx0x0x0x3x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-0198.f9ea460b4":{"attributeName":"tRowx0x0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-d9a7.a7a1f8be2":{"attributeName":"tColx0x0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8142.44b2faeda":{"attributeName":"tTextx0x0x1x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-643f.fe79b4627":{"attributeName":"tColx0x0x1x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-5446.2b6277c62":{"attributeName":"tTextx0x0x1x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-42bb.d6e58437a":{"attributeName":"tColx0x0x1x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-5409.8e85e8f0e":{"attributeName":"tTextx0x0x1x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-3dd6.0a56c8b2f":{"attributeName":"tColx0x0x1x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-2fae.5c8ce3d98":{"attributeName":"tTextx0x0x1x3x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-03a8.697d246ce":{"attributeName":"tRowx0x0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-e8b9.fd93a456f":{"attributeName":"tColx0x0x2x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-936e.54f0ff6b6":{"attributeName":"tTextx0x0x2x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-80f4.2bf6477eb":{"attributeName":"tColx0x0x2x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-d5ba.438c406ac":{"attributeName":"tTextx0x0x2x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-3649.6c75f18a9":{"attributeName":"tRowx0x0x3","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-a739.3d0942d7c":{"attributeName":"tColx0x0x3x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-4d1a.abb8d564a":{"attributeName":"tTextx0x0x3x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-37ed.03bb9dc01":{"attributeName":"tColx0x0x3x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-7a55.fa0144dee":{"attributeName":"tTextx0x0x3x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-eb86.b14c7cdc6":{"attributeName":"tColx0x0x3x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a275.818edeca1":{"attributeName":"tTextx0x0x3x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-78fb.7015f5b9a":{"attributeName":"tColx0x0x3x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-120c.3b91054ea":{"attributeName":"tTextx0x0x3x3x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   baseInfo: {"POINT_NAME":"--","POINT_TYPE":"--","DISTRICT_NAME":"--","STREET_NAME":"--","COMMUNITY_ADDR":"--","RESPONSIBLE_PERSON":"--","CONTACT_PHONE":"--"},
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"96%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"2%","top":"20px","flexDirection":"row","gap":"5px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"96%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"2%","top":"20px","flexDirection":"row","gap":"5px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tRowx0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"20px","top":"48px","gap":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"20px","top":"48px","gap":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0x0: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px"}}}, 
 },
},
tTextx0x0x0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"20px","top":"47px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"名称",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"20px","top":"47px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x0x0x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px"}}}, 
 },
},
tTextx0x0x0x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"142px","top":"47px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"142px","top":"47px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tColx0x0x0x2: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tTextx0x0x0x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"499px","top":"47px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"类型",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"499px","top":"47px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x0x0x3: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px"}}}, 
 },
},
tTextx0x0x0x3x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"621px","top":"47px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"621px","top":"47px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tRowx0x0x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"35px","top":"58px","gap":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"35px","top":"58px","gap":"0px","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x1x0: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"10px","top":"10px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"10px","top":"10px"}}}, 
 },
},
tTextx0x0x1x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"30px","top":"57px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"所属行政区",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"30px","top":"57px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x0x1x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"10px","top":"10px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"10px","top":"10px"}}}, 
 },
},
tTextx0x0x1x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"152px","top":"57px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"152px","top":"57px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tColx0x0x1x2: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"10px","top":"10px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"10px","top":"10px"}}}, 
 },
},
tTextx0x0x1x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"509px","top":"57px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"所属街道",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"509px","top":"57px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x0x1x3: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","animationName":"","left":"10px","top":"10px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","animationName":"","left":"10px","top":"10px"}}}, 
 },
},
tTextx0x0x1x3x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"631px","top":"57px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"631px","top":"57px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tRowx0x0x2: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"45px","top":"68px","gap":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"45px","top":"68px","gap":"0px","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x2x0: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"20px","top":"20px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"20px","top":"20px"}}}, 
 },
},
tTextx0x0x2x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"40px","top":"67px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"地址",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"40px","top":"67px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x0x2x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"0px","animationName":"","left":"20px","top":"20px"},
            
            },
 default: { 
 
span:21,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"0px","animationName":"","left":"20px","top":"20px"}}}, 
 },
},
tTextx0x0x2x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"162px","top":"67px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left","marginRight":"0px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"162px","top":"67px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left","marginRight":"0px"}}}, 
 },
},
tRowx0x0x3: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"55px","top":"78px","gap":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"55px","top":"78px","gap":"0px","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x3x0: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"30px","top":"30px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"30px","top":"30px"}}}, 
 },
},
tTextx0x0x3x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"50px","top":"77px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"公园负责人",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"50px","top":"77px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x0x3x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"30px","top":"30px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"30px","top":"30px"}}}, 
 },
},
tTextx0x0x3x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"172px","top":"77px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"172px","top":"77px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tColx0x0x3x2: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"30px","top":"30px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"30px","top":"30px"}}}, 
 },
},
tTextx0x0x3x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"529px","top":"77px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"联系方式",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"529px","top":"77px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x0x3x3: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","animationName":"","left":"30px","top":"30px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","animationName":"","left":"30px","top":"30px"}}}, 
 },
},
tTextx0x0x3x3x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"651px","top":"77px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"651px","top":"77px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
});
const initPage = () => {
// console.log(global.businessDialog.dialogParmas, 'test');
Object.keys(state.baseInfo).forEach((key) => {
  state.baseInfo[key] = global.businessDialog.dialogParmas?.[key] || '-';
});
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-parkPopup', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-parkPopup', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tRowx0x0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x0.default, componentState.tRowx0x0x0?.[state.screenSize]));

 const tColx0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0x0.default, componentState.tColx0x0x0x0?.[state.screenSize]));

 const tTextx0x0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x0x0x0.default, componentState.tTextx0x0x0x0x0?.[state.screenSize]));

 const tColx0x0x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0x1.default, componentState.tColx0x0x0x1?.[state.screenSize]));

 const tTextx0x0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x0x1x0.default, componentState.tTextx0x0x0x1x0?.[state.screenSize]));

 const tColx0x0x0x2ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0x2.default, componentState.tColx0x0x0x2?.[state.screenSize]));

 const tTextx0x0x0x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x0x2x0.default, componentState.tTextx0x0x0x2x0?.[state.screenSize]));

 const tColx0x0x0x3ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0x3.default, componentState.tColx0x0x0x3?.[state.screenSize]));

 const tTextx0x0x0x3x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x0x3x0.default, componentState.tTextx0x0x0x3x0?.[state.screenSize]));

 const tRowx0x0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x1.default, componentState.tRowx0x0x1?.[state.screenSize]));

 const tColx0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1x0.default, componentState.tColx0x0x1x0?.[state.screenSize]));

 const tTextx0x0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x1x0x0.default, componentState.tTextx0x0x1x0x0?.[state.screenSize]));

 const tColx0x0x1x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1x1.default, componentState.tColx0x0x1x1?.[state.screenSize]));

 const tTextx0x0x1x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x1x1x0.default, componentState.tTextx0x0x1x1x0?.[state.screenSize]));

 const tColx0x0x1x2ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1x2.default, componentState.tColx0x0x1x2?.[state.screenSize]));

 const tTextx0x0x1x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x1x2x0.default, componentState.tTextx0x0x1x2x0?.[state.screenSize]));

 const tColx0x0x1x3ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1x3.default, componentState.tColx0x0x1x3?.[state.screenSize]));

 const tTextx0x0x1x3x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x1x3x0.default, componentState.tTextx0x0x1x3x0?.[state.screenSize]));

 const tRowx0x0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x2.default, componentState.tRowx0x0x2?.[state.screenSize]));

 const tColx0x0x2x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x2x0.default, componentState.tColx0x0x2x0?.[state.screenSize]));

 const tTextx0x0x2x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x2x0x0.default, componentState.tTextx0x0x2x0x0?.[state.screenSize]));

 const tColx0x0x2x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x2x1.default, componentState.tColx0x0x2x1?.[state.screenSize]));

 const tTextx0x0x2x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x2x1x0.default, componentState.tTextx0x0x2x1x0?.[state.screenSize]));

 const tRowx0x0x3ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x3.default, componentState.tRowx0x0x3?.[state.screenSize]));

 const tColx0x0x3x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x3x0.default, componentState.tColx0x0x3x0?.[state.screenSize]));

 const tTextx0x0x3x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x3x0x0.default, componentState.tTextx0x0x3x0x0?.[state.screenSize]));

 const tColx0x0x3x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x3x1.default, componentState.tColx0x0x3x1?.[state.screenSize]));

 const tTextx0x0x3x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x3x1x0.default, componentState.tTextx0x0x3x1x0?.[state.screenSize]));

 const tColx0x0x3x2ComputedData = computed(() => _.merge({}, componentState.tColx0x0x3x2.default, componentState.tColx0x0x3x2?.[state.screenSize]));

 const tTextx0x0x3x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x3x2x0.default, componentState.tTextx0x0x3x2x0?.[state.screenSize]));

 const tColx0x0x3x3ComputedData = computed(() => _.merge({}, componentState.tColx0x0x3x3.default, componentState.tColx0x0x3x3?.[state.screenSize]));

 const tTextx0x0x3x3x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x3x3x0.default, componentState.tTextx0x0x3x3x0?.[state.screenSize]));

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
tRowx0x0ComputedData,
tRowx0x0x0ComputedData,
tColx0x0x0x0ComputedData,
tTextx0x0x0x0x0ComputedData,
tColx0x0x0x1ComputedData,
tTextx0x0x0x1x0ComputedData,
tColx0x0x0x2ComputedData,
tTextx0x0x0x2x0ComputedData,
tColx0x0x0x3ComputedData,
tTextx0x0x0x3x0ComputedData,
tRowx0x0x1ComputedData,
tColx0x0x1x0ComputedData,
tTextx0x0x1x0x0ComputedData,
tColx0x0x1x1ComputedData,
tTextx0x0x1x1x0ComputedData,
tColx0x0x1x2ComputedData,
tTextx0x0x1x2x0ComputedData,
tColx0x0x1x3ComputedData,
tTextx0x0x1x3x0ComputedData,
tRowx0x0x2ComputedData,
tColx0x0x2x0ComputedData,
tTextx0x0x2x0x0ComputedData,
tColx0x0x2x1ComputedData,
tTextx0x0x2x1x0ComputedData,
tRowx0x0x3ComputedData,
tColx0x0x3x0ComputedData,
tTextx0x0x3x0x0ComputedData,
tColx0x0x3x1ComputedData,
tTextx0x0x3x1x0ComputedData,
tColx0x0x3x2ComputedData,
tTextx0x0x3x2x0ComputedData,
tColx0x0x3x3ComputedData,
tTextx0x0x3x3x0ComputedData,
};
},
};