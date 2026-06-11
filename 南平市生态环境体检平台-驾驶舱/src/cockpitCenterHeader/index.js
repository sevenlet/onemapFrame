window.cockpitCenterHeaderComponent = {
template: 
`<div id="t-l-c-cockpitCenterHeader" class="t-l-c-cockpitCenterHeader" >` +
`<t-rect id="t-rect-2fb6.dc4728c1b" class="cockpitCenterHeader-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-9f42.6e8dbb3e4" class="cockpitCenterHeader-t-text-common-0-1"  :label="tTextCommonx0x1ComputedData.label" :editable="tTextCommonx0x1ComputedData.editable" :c-style="tTextCommonx0x1ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-68fe.7bbe4663e" class="cockpitCenterHeader-t-text-common-0-2"  :label="replaceCssVariables(filterData(state.label, componentPropBindingMap?.['t-text-common-68fe.7bbe4663e']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x2ComputedData.editable" :c-style="tTextCommonx0x2ComputedData.cStyle">` +
`</t-text-common>` +
`<t-rect id="t-rect-b113.ab6f9e3e3" class="cockpitCenterHeader-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1763688295228">` +
`</t-rect>` +
`<t-text-common id="t-text-common-5935.aa65b5be2" class="cockpitCenterHeader-t-text-common-0-4"  :label="tTextCommonx0x4ComputedData.label" :editable="tTextCommonx0x4ComputedData.editable" :c-style="tTextCommonx0x4ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-unit id="t-text-unit-0f81.b9189172a" class="cockpitCenterHeader-t-text-unit-0-5"  :c-style="tTextUnitx0x5ComputedData.cStyle" :content="replaceCssVariables(filterData(state.sequential_task_count, componentPropBindingMap?.['t-text-unit-0f81.b9189172a']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x5ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x5ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-1345.066b68f39" class="cockpitCenterHeader-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle" @click="onclick1763628270714">` +
`</t-rect>` +
`<t-text-common id="t-text-common-f984.c5a22293b" class="cockpitCenterHeader-t-text-common-0-7"  :label="tTextCommonx0x7ComputedData.label" :editable="tTextCommonx0x7ComputedData.editable" :c-style="tTextCommonx0x7ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-unit id="t-text-unit-2310.e481a8f1c" class="cockpitCenterHeader-t-text-unit-0-8"  :c-style="tTextUnitx0x8ComputedData.cStyle" :content="replaceCssVariables(filterData(state.completed_task_count, componentPropBindingMap?.['t-text-unit-2310.e481a8f1c']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x8ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x8ComputedData.showOverflowTooltip" @click="onclick1763641883630">` +
`</t-text-unit>` +
`<t-rect id="t-rect-69d3.68b9b7d24" class="cockpitCenterHeader-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle" @click="onclick1763688308652">` +
`</t-rect>` +
`<t-text-common id="t-text-common-5919.ec4b55c8a" class="cockpitCenterHeader-t-text-common-0-10"  :label="tTextCommonx0x10ComputedData.label" :editable="tTextCommonx0x10ComputedData.editable" :c-style="tTextCommonx0x10ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-unit id="t-text-unit-3270.8c057421" class="cockpitCenterHeader-t-text-unit-0-11"  :c-style="tTextUnitx0x11ComputedData.cStyle" :content="replaceCssVariables(filterData(state.lagging_task_count, componentPropBindingMap?.['t-text-unit-3270.8c057421']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x11ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x11ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-2fb6.dc4728c1b":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-9f42.6e8dbb3e4":{"attributeName":"tTextCommonx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-68fe.7bbe4663e":{"attributeName":"tTextCommonx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-b113.ab6f9e3e3":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-5935.aa65b5be2":{"attributeName":"tTextCommonx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-0f81.b9189172a":{"attributeName":"tTextUnitx0x5","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-1345.066b68f39":{"attributeName":"tRectx0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-f984.c5a22293b":{"attributeName":"tTextCommonx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-2310.e481a8f1c":{"attributeName":"tTextUnitx0x8","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-69d3.68b9b7d24":{"attributeName":"tRectx0x9","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-5919.ec4b55c8a":{"attributeName":"tTextCommonx0x10","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-3270.8c057421":{"attributeName":"tTextUnitx0x11","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}}};
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
   lagging_task_count: "",
   sequential_task_count: "",
   completed_task_count: "",
   label: "",
   selectYear: "",
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
            default: {"width":"1149px","height":"277px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"0px","top":"-30px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/e895da46571d49c4b85c40d626e1bc49.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1149px","height":"277px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"0px","top":"-30px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/e895da46571d49c4b85c40d626e1bc49.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTextCommonx0x1: {
defaultStyle: {
            default: {"width":"300px","height":"24px","color":"#FFF5B1","fontFamily":"微软雅黑","fontWeight":"700","fontSize":"22px","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"425px","top":"92px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"2025年责任书考核：第三名",
editable:false,
cStyle:{"wrapper":{"default":{"width":"300px","height":"24px","color":"#FFF5B1","fontFamily":"微软雅黑","fontWeight":"700","fontSize":"22px","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"425px","top":"92px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTextCommonx0x2: {
defaultStyle: {
            default: {"width":"209px","height":"22px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"700","fontSize":"22px","lineHeight":"22px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"215px","top":"135px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"209px","height":"22px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"700","fontSize":"22px","lineHeight":"22px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"215px","top":"135px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"174px","height":"42px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","backgroundImage":"linear-gradient(179deg, rgba(3, 116, 227, 0) 16%, #48A4FF 96%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"30px","borderTopRightRadius":"30px","borderBottomLeftRadius":"30px","borderBottomRightRadius":"30px","position":"unset","left":"578px","top":"125px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"174px","height":"42px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","backgroundImage":"linear-gradient(179deg, rgba(3, 116, 227, 0) 16%, #48A4FF 96%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"30px","borderTopRightRadius":"30px","borderBottomLeftRadius":"30px","borderBottomRightRadius":"30px","position":"unset","left":"578px","top":"125px","animationName":"","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTextCommonx0x4: {
defaultStyle: {
            default: {"width":"90px","height":"42px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"22px","lineHeight":"42px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"596px","top":"125px","background":"unset","backgroundClip":"unset","animationName":"","pointerEvents":"none"},
            
            },
 default: { 
 
label:"序时任务",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"42px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"22px","lineHeight":"42px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"596px","top":"125px","background":"unset","backgroundClip":"unset","animationName":"","pointerEvents":"none"}}}, 
 },
},
tTextUnitx0x5: {
defaultStyle: {
            default: {"width":"57px","height":"26px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"133px","left":"684px","position":"unset","animationName":"","pointerEvents":"none"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"57px","height":"26px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"133px","left":"684px","position":"unset","animationName":"","pointerEvents":"none"}},"text":{"default":{"fontFamily":"DIN-black","fontWeight":"700","fontSize":"26px","textAlign":"center","lineHeight":"26px","letterSpacing":"0px","color":"#00FFFF","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"22px","lineHeight":"22px","letterSpacing":"0px","textAlign":"center","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}}},
content:"",
unit:"个",
showOverflowTooltip:true, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"133px","height":"42px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","backgroundImage":"linear-gradient(179deg, rgba(3, 116, 227, 0) 16%, #48A4FF 96%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"30px","borderTopRightRadius":"30px","borderBottomLeftRadius":"30px","borderBottomRightRadius":"30px","position":"unset","left":"428px","top":"127px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"133px","height":"42px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","backgroundImage":"linear-gradient(179deg, rgba(3, 116, 227, 0) 16%, #48A4FF 96%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"30px","borderTopRightRadius":"30px","borderBottomLeftRadius":"30px","borderBottomRightRadius":"30px","position":"unset","left":"428px","top":"127px","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTextCommonx0x7: {
defaultStyle: {
            default: {"width":"75px","height":"42px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"22px","lineHeight":"42px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"432px","top":"127px","background":"unset","backgroundClip":"unset","pointerEvents":"none"},
            
            },
 default: { 
 
label:"已完成",
editable:false,
cStyle:{"wrapper":{"default":{"width":"75px","height":"42px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"22px","lineHeight":"42px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"432px","top":"127px","background":"unset","backgroundClip":"unset","pointerEvents":"none"}}}, 
 },
},
tTextUnitx0x8: {
defaultStyle: {
            default: {"width":"57px","height":"26px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"135px","left":"502px","position":"unset","pointerEvents":"none"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"57px","height":"26px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"135px","left":"502px","position":"unset","pointerEvents":"none"}},"text":{"default":{"fontFamily":"DIN-black","fontWeight":"700","fontSize":"26px","textAlign":"center","lineHeight":"26px","letterSpacing":"0px","color":"#5BFF5E","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"22px","lineHeight":"22px","letterSpacing":"0px","textAlign":"center","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}}},
content:"",
unit:"个",
showOverflowTooltip:true, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"174px","height":"42px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","backgroundImage":"linear-gradient(179deg, rgba(3, 116, 227, 0) 16%, #48A4FF 96%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"30px","borderTopRightRadius":"30px","borderBottomLeftRadius":"30px","borderBottomRightRadius":"30px","position":"unset","left":"762px","top":"126px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"174px","height":"42px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","backgroundImage":"linear-gradient(179deg, rgba(3, 116, 227, 0) 16%, #48A4FF 96%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"30px","borderTopRightRadius":"30px","borderBottomLeftRadius":"30px","borderBottomRightRadius":"30px","position":"unset","left":"762px","top":"126px","animationName":"","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTextCommonx0x10: {
defaultStyle: {
            default: {"width":"90px","height":"42px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"22px","lineHeight":"42px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"780px","top":"126px","background":"unset","backgroundClip":"unset","animationName":"","pointerEvents":"none"},
            
            },
 default: { 
 
label:"滞后任务",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"42px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"22px","lineHeight":"42px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"780px","top":"126px","background":"unset","backgroundClip":"unset","animationName":"","pointerEvents":"none"}}}, 
 },
},
tTextUnitx0x11: {
defaultStyle: {
            default: {"width":"57px","height":"26px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"134px","left":"869px","position":"unset","animationName":"","pointerEvents":"none"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"57px","height":"26px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"134px","left":"869px","position":"unset","animationName":"","pointerEvents":"none"}},"text":{"default":{"fontFamily":"DIN-black","fontWeight":"700","fontSize":"26px","textAlign":"right","lineHeight":"26px","letterSpacing":"0px","color":"#FFCC00","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"22px","lineHeight":"22px","letterSpacing":"0px","textAlign":"center","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}}},
content:"",
unit:"个",
showOverflowTooltip:true, 
 },
},
});
const openDialog = () => {
// global.showCockpitCenterPop = true
// global.showLevelTwoPopComponent = 'cockpitCenterPopComponent'
// global.showCockpitCenterPop = true
global.dialogName = 'cockpitCenterPopComponent'
// global.showPopComponent = 'cockpitCenterPopComponent';
// global.showPop = true;
console.log('123');
};
const init = () => {
(async()=>{
  await apiRegistry.getLatestTime.request();
  await apiRegistry.getCardList.request();
})()


state.label = computed(()=>{
  return `${state.selectYear}年责任书考核：`
})
};
const onclick1763628270714 = () => {
// 执行自定义方法
openDialog();
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'dashboardGlobalVariables.responsibilitySelectedStatus',
                    value:'1',
                    data: {
                      dashboardGlobalVariables:{responsibilitySelectedStatus: '1'}
                    },
                  });
};
const onclick1763641883630 = () => {
// 执行自定义方法
openDialog();
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'dashboardGlobalVariables.responsibilitySelectedStatus',
                    value:'completed',
                    data: {
                      dashboardGlobalVariables:{responsibilitySelectedStatus: 'completed'}
                    },
                  });
};
const onclick1763688295228 = () => {
// 执行自定义方法
openDialog();
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'dashboardGlobalVariables.responsibilitySelectedStatus',
                    value:'2',
                    data: {
                      dashboardGlobalVariables:{responsibilitySelectedStatus: '2'}
                    },
                  });
};
const onclick1763688308652 = () => {
// 执行自定义方法
openDialog();
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'dashboardGlobalVariables.responsibilitySelectedStatus',
                    value:'3',
                    data: {
                      dashboardGlobalVariables:{responsibilitySelectedStatus: '3'}
                    },
                  });
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getCardList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"REGION_PATH":"","REGION_CODE":"","YEAR":"state.selectYear","interfaceId":"268c27fc42a25d2c4c95c04f4e6fe6fe"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"REGION_PATH":"","REGION_CODE":"","YEAR":state.selectYear,"interfaceId":"268c27fc42a25d2c4c95c04f4e6fe6fe"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"REGION_PATH":"","REGION_CODE":"","YEAR":state.selectYear,"interfaceId":"268c27fc42a25d2c4c95c04f4e6fe6fe"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardList'] = res.data;
                
     if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  const data = res.data.data[0]
  state.completed_task_count = data.completed_task_count || '--';
  state.sequential_task_count =data.sequential_task_count || '--';
  state.lagging_task_count = data.lagging_task_count || '--';
} else {
  state.completed_task_count = '--';
  state.sequential_task_count = '--';
  state.lagging_task_count = '--';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.completed_task_count = '--';
  state.sequential_task_count = '--';
  state.lagging_task_count = '--';
      reject(error);
    });
  });
},
              },
// 接口函数
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"REGION_PATH":"","REGION_CODE":"","interfaceId":"7eb949e856e3cb84e1a9cfc65b0561dd"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"REGION_PATH":"","REGION_CODE":"","interfaceId":"7eb949e856e3cb84e1a9cfc65b0561dd"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"REGION_PATH":"","REGION_CODE":"","interfaceId":"7eb949e856e3cb84e1a9cfc65b0561dd"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     if (res?.data?.data && res?.data?.data) {
  state.selectYear = res.data.data.year_number;
} else {
  state.selectYear = '--'
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.selectYear ='--'
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [state.selectYear], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCardList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-cockpitCenterHeader', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-cockpitCenterHeader', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
init();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTextCommonx0x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1.default, componentState.tTextCommonx0x1?.[state.screenSize]));

 const tTextCommonx0x2ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2.default, componentState.tTextCommonx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTextCommonx0x4ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4.default, componentState.tTextCommonx0x4?.[state.screenSize]));

 const tTextUnitx0x5ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x5.default, componentState.tTextUnitx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tTextCommonx0x7ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x7.default, componentState.tTextCommonx0x7?.[state.screenSize]));

 const tTextUnitx0x8ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x8.default, componentState.tTextUnitx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tTextCommonx0x10ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x10.default, componentState.tTextCommonx0x10?.[state.screenSize]));

 const tTextUnitx0x11ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x11.default, componentState.tTextUnitx0x11?.[state.screenSize]));

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
tTextCommonx0x1ComputedData,
tTextCommonx0x2ComputedData,
tRectx0x3ComputedData,
tTextCommonx0x4ComputedData,
tTextUnitx0x5ComputedData,
tRectx0x6ComputedData,
tTextCommonx0x7ComputedData,
tTextUnitx0x8ComputedData,
tRectx0x9ComputedData,
tTextCommonx0x10ComputedData,
tTextUnitx0x11ComputedData,
onclick1763688295228,
onclick1763628270714,
onclick1763641883630,
onclick1763688308652,
};
},
};