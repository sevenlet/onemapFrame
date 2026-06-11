window.zrstSpeciesDetailsPopUpComponent = {
template: 
`<div id="t-l-c-zrstSpeciesDetailsPopUp" class="t-l-c-zrstSpeciesDetailsPopUp" >` +
`<t-rect id="t-rect-c40a.43ad1d3c9" class="zrstSpeciesDetailsPopUp-t-rect-0-0"  :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle" :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label">` +
`</t-rect>` +
`<t-text id="t-text-7cd4.9b9fe0f0b" class="zrstSpeciesDetailsPopUp-t-text-0-1"  :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle" :label="tTextx0x1ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-5c1c.5aa20de32" class="zrstSpeciesDetailsPopUp-t-text-0-2"  :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle" :label="tTextx0x2ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-0f3e.39c9c34ae" class="zrstSpeciesDetailsPopUp-t-text-0-3"  :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle" :label="tTextx0x3ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-f890.16e3333f3" class="zrstSpeciesDetailsPopUp-t-text-0-4"  :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle" :label="tTextx0x4ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-5610.0b08afe39" class="zrstSpeciesDetailsPopUp-t-text-0-5"  :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle" :label="tTextx0x5ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-6ca0.cc5195192" class="zrstSpeciesDetailsPopUp-t-text-0-6"  :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle" :label="tTextx0x6ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-fcc6.749fb1553" class="zrstSpeciesDetailsPopUp-t-text-0-7"  :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle" :label="tTextx0x7ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-f171.5ee80ca7c" class="zrstSpeciesDetailsPopUp-t-text-0-8"  :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle" :label="tTextx0x8ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-c8d4.c188241bb" class="zrstSpeciesDetailsPopUp-t-text-0-9"  :editable="tTextx0x9ComputedData.editable" :show-title="tTextx0x9ComputedData.showTitle" :c-style="tTextx0x9ComputedData.cStyle" :label="replaceCssVariables(filterData(state.baseData.TAXA_NAME_XM, componentPropBindingMap?.['t-text-c8d4.c188241bb']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-text id="t-text-2703.bdb05b674" class="zrstSpeciesDetailsPopUp-t-text-0-10"  :editable="tTextx0x10ComputedData.editable" :show-title="tTextx0x10ComputedData.showTitle" :c-style="tTextx0x10ComputedData.cStyle" :label="replaceCssVariables(filterData(state.baseData.PHYLUM_NAME, componentPropBindingMap?.['t-text-2703.bdb05b674']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-text id="t-text-df4c.6bfc89fd1" class="zrstSpeciesDetailsPopUp-t-text-0-11"  :editable="tTextx0x11ComputedData.editable" :show-title="tTextx0x11ComputedData.showTitle" :c-style="tTextx0x11ComputedData.cStyle" :label="replaceCssVariables(filterData(state.baseData.CLASS_NAME, componentPropBindingMap?.['t-text-df4c.6bfc89fd1']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-text id="t-text-141e.45934ffd1" class="zrstSpeciesDetailsPopUp-t-text-0-13"  :editable="tTextx0x13ComputedData.editable" :show-title="tTextx0x13ComputedData.showTitle" :c-style="tTextx0x13ComputedData.cStyle" :label="replaceCssVariables(filterData(state.baseData.ORDER_NAME, componentPropBindingMap?.['t-text-141e.45934ffd1']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-text id="t-text-ef88.b2f9e326" class="zrstSpeciesDetailsPopUp-t-text-0-14"  :editable="tTextx0x14ComputedData.editable" :show-title="tTextx0x14ComputedData.showTitle" :c-style="tTextx0x14ComputedData.cStyle" :label="replaceCssVariables(filterData(state.baseData.FAMILY_NAME, componentPropBindingMap?.['t-text-ef88.b2f9e326']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-text id="t-text-d38d.ec299f27c" class="zrstSpeciesDetailsPopUp-t-text-0-15"  :editable="tTextx0x15ComputedData.editable" :show-title="tTextx0x15ComputedData.showTitle" :c-style="tTextx0x15ComputedData.cStyle" :label="replaceCssVariables(filterData(state.baseData.GENUS_NAME, componentPropBindingMap?.['t-text-d38d.ec299f27c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-text id="t-text-9812.ac088ffa7" class="zrstSpeciesDetailsPopUp-t-text-0-16"  :editable="tTextx0x16ComputedData.editable" :show-title="tTextx0x16ComputedData.showTitle" :c-style="tTextx0x16ComputedData.cStyle" :label="replaceCssVariables(filterData(state.baseData.AREA_NAMES, componentPropBindingMap?.['t-text-9812.ac088ffa7']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-text id="t-text-ed34.937b11c2" class="zrstSpeciesDetailsPopUp-t-text-0-17"  :editable="tTextx0x17ComputedData.editable" :show-title="tTextx0x17ComputedData.showTitle" :c-style="tTextx0x17ComputedData.cStyle" :label="replaceCssVariables(filterData(state.baseData.REMARKS, componentPropBindingMap?.['t-text-ed34.937b11c2']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-swiper-base id="t-swiper-base-c1e7.57152a587" class="zrstSpeciesDetailsPopUp-t-swiper-base-0-18"  :data="replaceCssVariables(filterData(state.pictureData, componentPropBindingMap?.['t-swiper-base-c1e7.57152a587']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :arrow="tSwiperBasex0x18ComputedData.arrow" :pause-on-hover="tSwiperBasex0x18ComputedData.pauseOnHover" :c-style="tSwiperBasex0x18ComputedData.cStyle" :indicator-position="tSwiperBasex0x18ComputedData.indicatorPosition" :type="tSwiperBasex0x18ComputedData.type" :series-setting="tSwiperBasex0x18ComputedData.seriesSetting" :autoplay="tSwiperBasex0x18ComputedData.autoplay">` +
`</t-swiper-base>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-c40a.43ad1d3c9":{"attributeName":"tRectx0x0","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-text-7cd4.9b9fe0f0b":{"attributeName":"tTextx0x1","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-5c1c.5aa20de32":{"attributeName":"tTextx0x2","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-0f3e.39c9c34ae":{"attributeName":"tTextx0x3","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-f890.16e3333f3":{"attributeName":"tTextx0x4","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-5610.0b08afe39":{"attributeName":"tTextx0x5","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-6ca0.cc5195192":{"attributeName":"tTextx0x6","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-fcc6.749fb1553":{"attributeName":"tTextx0x7","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-f171.5ee80ca7c":{"attributeName":"tTextx0x8","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-c8d4.c188241bb":{"attributeName":"tTextx0x9","editable":{"filters":[]},"showTitle":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-2703.bdb05b674":{"attributeName":"tTextx0x10","editable":{"filters":[]},"showTitle":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-df4c.6bfc89fd1":{"attributeName":"tTextx0x11","editable":{"filters":[]},"showTitle":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-radio-menu-052a.17aa7bb91":{"attributeName":"tRadioMenux0x12"},"t-text-141e.45934ffd1":{"attributeName":"tTextx0x13","editable":{"filters":[]},"showTitle":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-ef88.b2f9e326":{"attributeName":"tTextx0x14","editable":{"filters":[]},"showTitle":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-d38d.ec299f27c":{"attributeName":"tTextx0x15","editable":{"filters":[]},"showTitle":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-9812.ac088ffa7":{"attributeName":"tTextx0x16","editable":{"filters":[]},"showTitle":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-ed34.937b11c2":{"attributeName":"tTextx0x17","editable":{"filters":[]},"showTitle":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-swiper-base-c1e7.57152a587":{"attributeName":"tSwiperBasex0x18","data":{"filters":[]},"arrow":{"filters":[]},"pauseOnHover":{"filters":[]},"cStyle":{"filters":[]},"indicatorPosition":{"filters":[]},"type":{"filters":[]},"seriesSetting":{"filters":[]},"autoplay":{"filters":[]}},"t-component-6478.01ca00965":{"attributeName":"tComponentx0x19"}};
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
   taxaCode: "",
   showVideo: false,
   current: -1,
   audio: {},
   playing: false,
   fileType: "PHOTO",
   dialogName: "zrstProtectAnimal",
   SURVEY_NUM: "",
   ECO_CODE: "",
   code: "-",
   preTitle: "-",
   queryComponent: "",
   pictureData: [{"src":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-02-25/075e712ed1d84b6ab09561ba252c3b30.jpg"},{"src":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-02-25/e002544e114b460fbd4534cd2d0f5503.jpg"}],
   pointId: "",
   pointCode: "",
   speciesTag: "--",
   title: "--",
   baseData: {"TAXA_NAME_XM":"-","SPECIES_NAME":"-","GENUS_NAME":"-","FAMILY_NAME":"-","ORDER_NAME":"-","CLASS_NAME":"-","PHYLUM_NAME":"-","KINDOM_NAME":"-","TAXA_LEVEL_NAME":"-","AREA_NAMES":"-","REMARKS":"-"},
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
            default: {"borderLeft":"1px solid rgba(0,213,255,0.1)","backgroundColor":"rgba(4, 56, 111, 0.1)","top":"11px","left":"21px","borderRight":"1px solid rgba(0,213,255,0.1)","width":"1559px","position":"unset","borderTop":"1px solid rgba(0,213,255,0.1)","borderBottom":"1px solid rgba(0,213,255,0.1)","height":"301px"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"default":{"borderLeft":"1px solid rgba(0,213,255,0.1)","backgroundColor":"rgba(4, 56, 111, 0.1)","top":"11px","left":"21px","borderRight":"1px solid rgba(0,213,255,0.1)","width":"1559px","position":"unset","borderTop":"1px solid rgba(0,213,255,0.1)","borderBottom":"1px solid rgba(0,213,255,0.1)","height":"301px"}}},
tip:false,
label:"", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"animationName":"","color":"var(--t-search-text-color)","top":"25.5px","left":"36px","width":"93px","fontSize":"18px","lineHeight":"18px","position":"unset","height":"20px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--t-search-text-color)","top":"25.5px","left":"36px","width":"93px","fontSize":"18px","lineHeight":"18px","position":"unset","height":"20px"}}},
label:"拉丁学名：", 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"animationName":"","color":"var(--t-search-text-color)","top":"25.5px","left":"696px","width":"30px","fontSize":"18px","lineHeight":"18px","position":"unset","height":"20px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--t-search-text-color)","top":"25.5px","left":"696px","width":"30px","fontSize":"18px","lineHeight":"18px","position":"unset","height":"20px"}}},
label:"门：", 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"animationName":"","color":"var(--t-search-text-color)","top":"25.5px","left":"1254px","width":"30px","fontSize":"18px","lineHeight":"18px","position":"unset","height":"20px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--t-search-text-color)","top":"25.5px","left":"1254px","width":"30px","fontSize":"18px","lineHeight":"18px","position":"unset","height":"20px"}}},
label:"纲：", 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"animationName":"","color":"var(--t-search-text-color)","top":"63px","left":"36px","width":"75px","fontSize":"18","lineHeight":"18px","position":"unset","height":"20px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--t-search-text-color)","top":"63px","left":"36px","width":"75px","fontSize":"18","lineHeight":"18px","position":"unset","height":"20px"}}},
label:"目：", 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"animationName":"","color":"var(--t-search-text-color)","top":"63px","left":"696px","width":"30px","fontSize":"18px","lineHeight":"18px","position":"unset","height":"20px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--t-search-text-color)","top":"63px","left":"696px","width":"30px","fontSize":"18px","lineHeight":"18px","position":"unset","height":"20px"}}},
label:"科：", 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"animationName":"","color":"var(--t-search-text-color)","top":"63px","left":"1254px","width":"30px","fontSize":"18px","lineHeight":"18px","position":"unset","height":"20px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--t-search-text-color)","top":"63px","left":"1254px","width":"30px","fontSize":"18px","lineHeight":"18px","position":"unset","height":"20px"}}},
label:"属：", 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"animationName":"","color":"var(--t-search-text-color)","top":"101px","left":"36px","width":"80px","fontSize":"18","lineHeight":"18px","position":"unset","height":"20px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--t-search-text-color)","top":"101px","left":"36px","width":"80px","fontSize":"18","lineHeight":"18px","position":"unset","height":"20px"}}},
label:"分布区域：", 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"animationName":"","color":"var(--t-search-text-color)","top":"134px","left":"36px","width":"66px","fontSize":"18px","lineHeight":"18px","position":"unset","height":"21px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--t-search-text-color)","top":"134px","left":"36px","width":"66px","fontSize":"18px","lineHeight":"18px","position":"unset","height":"21px"}}},
label:"简介：", 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"overflow":"hidden","whiteSpace":"nowrap","color":"var(--t-white)","top":"25.5px","left":"125px","textAlign":"left","width":"300px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"20px"},
            
            },
 default: { 
 
editable:false,
showTitle:true,
cStyle:{"wrapper":{"default":{"overflow":"hidden","whiteSpace":"nowrap","color":"var(--t-white)","top":"25.5px","left":"125px","textAlign":"left","width":"300px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"20px"}}},
label:"-", 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"animationName":"","whiteSpace":"nowrap","color":"var(--t-white)","textAlign":"left","overflow":"hidden","top":"25.5px","left":"740px","width":"300px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"20px"},
            
            },
 default: { 
 
editable:false,
showTitle:true,
cStyle:{"wrapper":{"default":{"animationName":"","whiteSpace":"nowrap","color":"var(--t-white)","textAlign":"left","overflow":"hidden","top":"25.5px","left":"740px","width":"300px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"20px"}}},
label:"-", 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"animationName":"","whiteSpace":"nowrap","color":"var(--t-white)","textAlign":"left","overflow":"hidden","top":"25.5px","left":"1298px","width":"262px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"20px"},
            
            },
 default: { 
 
editable:false,
showTitle:true,
cStyle:{"wrapper":{"default":{"animationName":"","whiteSpace":"nowrap","color":"var(--t-white)","textAlign":"left","overflow":"hidden","top":"25.5px","left":"1298px","width":"262px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"20px"}}},
label:"-", 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"animationName":"","whiteSpace":"nowrap","color":"var(--t-white)","textAlign":"left","overflow":"hidden","top":"63px","left":"125px","width":"300px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"20px"},
            
            },
 default: { 
 
editable:false,
showTitle:true,
cStyle:{"wrapper":{"default":{"animationName":"","whiteSpace":"nowrap","color":"var(--t-white)","textAlign":"left","overflow":"hidden","top":"63px","left":"125px","width":"300px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"20px"}}},
label:"-", 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"animationName":"","whiteSpace":"nowrap","color":"var(--t-white)","textAlign":"left","overflow":"hidden","top":"63px","left":"740px","width":"300px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"20px"},
            
            },
 default: { 
 
editable:false,
showTitle:true,
cStyle:{"wrapper":{"default":{"animationName":"","whiteSpace":"nowrap","color":"var(--t-white)","textAlign":"left","overflow":"hidden","top":"63px","left":"740px","width":"300px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"20px"}}},
label:"-", 
 },
},
tTextx0x15: {
defaultStyle: {
            default: {"animationName":"","whiteSpace":"nowrap","color":"var(--t-white)","textAlign":"left","overflow":"hidden","top":"63px","left":"1298px","width":"263px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"20px"},
            
            },
 default: { 
 
editable:false,
showTitle:true,
cStyle:{"wrapper":{"default":{"animationName":"","whiteSpace":"nowrap","color":"var(--t-white)","textAlign":"left","overflow":"hidden","top":"63px","left":"1298px","width":"263px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"20px"}}},
label:"-", 
 },
},
tTextx0x16: {
defaultStyle: {
            default: {"animationName":"","whiteSpace":"nowrap","color":"var(--t-white)","textAlign":"left","overflow":"hidden","top":"101px","left":"125px","width":"1436px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"20px"},
            
            },
 default: { 
 
editable:false,
showTitle:true,
cStyle:{"wrapper":{"default":{"animationName":"","whiteSpace":"nowrap","color":"var(--t-white)","textAlign":"left","overflow":"hidden","top":"101px","left":"125px","width":"1436px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"20px"}}},
label:"-", 
 },
},
tTextx0x17: {
defaultStyle: {
            default: {"animationName":"","whiteSpace":"normal","color":"var(--t-white)","textAlign":"left","columnCount":"auto","overflow":"hidden","top":"168px","left":"37px","width":"1524px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"124px"},
            
            },
 default: { 
 
editable:false,
showTitle:true,
cStyle:{"wrapper":{"default":{"animationName":"","whiteSpace":"normal","color":"var(--t-white)","textAlign":"left","columnCount":"auto","overflow":"hidden","top":"168px","left":"37px","width":"1524px","fontSize":"18px","lineHeight":"18px","textOverflow":"ellipsis","position":"unset","height":"124px"}}},
label:"-", 
 },
},
tSwiperBasex0x18: {
defaultStyle: {
            default: {"animationName":"","top":"359px","left":"26px","width":"1548px","position":"unset","height":"509px"},
            
            },
 default: { 
 
data:[{"src":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-02-25/075e712ed1d84b6ab09561ba252c3b30.jpg"},{"src":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-02-25/e002544e114b460fbd4534cd2d0f5503.jpg"}],
arrow:"always",
pauseOnHover:true,
cStyle:{"itemWrapper":{"default":{"object-fit":"contain","height":"100%"}},"wrapper":{"default":{"animationName":"","top":"359px","left":"26px","width":"1548px","position":"unset","height":"509px"}},"toggleButton":{"hover":{"backgroundColor":"rgba(0, 213, 255, 0.2)","color":"rgba(154, 213, 225, 1)"},"default":{"backgroundColor":"rgba(0, 213, 255, 0.05)","borderBottomLeftRadius":"0px","width":"20px","borderBottomRightRadius":"0px","borderTopRightRadius":"0px","height":"172px","borderTopLeftRadius":"0px"}}},
indicatorPosition:"none",
type:"image",
seriesSetting:{"data":{"dataKey":"src","nameKey":"desc"},"interval":3000},
autoplay:true, 
 },
},
});
const getPointParams = () => {
state.pointCode = getUrlParam('TAXA_CODE') || '35BA82062E1A11B2827BE75046C8E56F';
state.pointId = getUrlParam('POINT_ID') || 'POINT1';
state.preTitle = decodeURIComponent(getUrlParam('title')) || '-'
state.code = decodeURIComponent(getUrlParam('code')) || '-'
state.ECO_CODE = decodeURIComponent(getUrlParam('ECO_CODE')) || ''
state.SURVEY_NUM = decodeURIComponent(getUrlParam('SURVEY_NUM')) || ''
console.log('cessss',state.ECO_CODE)

};
const goback = () => {
const [POINT_CODE, SURVEY_NAME, ECO_CODE, SURVEY_NUM] = [state.code, state.preTitle, state.ECO_CODE, state.SURVEY_NUM];
const { width, height, left, top, type } = global.proBaseMainInfo.detailDialog;
const newName = global.proBaseMainInfo.detailDialog.name;
// 打开详情弹窗
initDialog(
  { POINT_CODE, SURVEY_NAME, SURVEY_NUM, ECO_CODE, componentName: state.componentName },
  global.pageBasePath,
  global.socketIp,
  global.socketRoom,
  newName,
  state.dialogName,
  width,
  height,
  left,
  top,
  type
)
};
const playAudio = (row,col) => {


  // 第一次点击，直接赋值
  if (state.current === -1) {
    state.current = row.FILE_NAME;
    state.audio = new Audio(row.FILE_PATH);
    state.audio.play();
    state.playing = true;
    row.operation = 'pause';

    // 监听音频播放完
    state.audio.addEventListener('ended', () => {
      console.log('11音频播放完了');
      row.operation = 'play';
    });
    return;
  }

  // 如果点击的是同一行，切换播放状态
  if (state.current === row.FILE_NAME) {
    if (state.playing) {
      state.audio.play();
      row.operation = 'pause';
    } else {
      state.audio.pause();
      row.operation = 'play';
    }
    state.playing = !state.playing;
    return;
  }

  // 如果点击的是其他行，停止当前行的音频播放，开始播放新音频
  if (state.current && state.current !== row.FILE_NAME) {
    state.audio.pause();
    let item = state.pictureData.find(obj => obj.FILE_NAME === state.current);
    if (item) {
      item.operation = 'play';
    }
    state.audio = new Audio(row.FILE_PATH);
    state.audio.play();
    state.playing = true;
    state.current = row.FILE_NAME;
    row.operation = 'pause';
    
    // 监听音频播放完
    state.audio.addEventListener('ended', () => {
      console.log('22音频播放完了');
      row.operation = 'play';
    });
    return;
  }
};
const playVideo = (row,col) => {
state.showVideo = true;

setTimeout(() => {
  const rect = document.getElementById('t-rect-cfef.53949d089');
  const text = rect.getElementsByClassName('t-text')[0];
  // 创建video标签
  state.audio = document.createElement('video');
  state.audio.src = row.FILE_PATH; // 设置视频源
  state.audio.controls = true; // 显示播放控件
  state.audio.width = 700;
  text.appendChild(state.audio); // 将video标签添加到页面中
  state.audio.play();
}, 500)
};
const reset = () => {
// resetCamera();
if ((state.queryComponent || global.proCommonParams.peripheralQuery) === 'peripheQueryContainerComponent') {
  return;
}
// 清除辐射圈
window.AC.PointBuffer.clear({
  callbackFn:function(result){
    console.log("PointBuffer.clear",result)
  }
});

rootData.rootSocket.emit(
   // 固定的消息名称，不能修改
  'message',
  {
    // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
    room: global.socketRoom,
    // 键名不能改 消息名称
    type: "resetPoint",
    // 键名不能改 消息内容 对象格式
    data: {},
  }
);
};
const viewDetailPage = (row,col) => {
if (col.label === "操作") {
  console.log(row);
  console.log(col);
  if (state.fileType === 'AUDIO') {
    // 播放音频
    playAudio(row, col);
  } else if(state.fileType === 'VIDEO'){
    // 播放视频
    playVideo(row, col);
  }
}
};
const initParams = () => {
state.taxaCode = 'E6556662260011B288254D1D23586530'
apiRegistry.getBaseInfo.request();
};
const onitemClick1715917699634 = (data) => {
// 设置变量值
state.fileType = data.date;
// 设置变量值
state.pictureData = [];
// 设置变量值
state.current = -1;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"TAXA_CODE":"state.taxaCode","interfaceId":"7e341cb1c0fd4ef06027942917353b21"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"TAXA_CODE":state.taxaCode,"interfaceId":"7e341cb1c0fd4ef06027942917353b21"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"TAXA_CODE":state.taxaCode,"interfaceId":"7e341cb1c0fd4ef06027942917353b21"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     if (res.data.head.statusCode === '200' && res.data.data) {
  const result = res.data.data
  Object.keys(result).forEach(key =>{
    if(!result[key]){
      result[key] = '-'
    }
  })
 state.baseData = result
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
                            setPageScale('t-l-c-zrstSpeciesDetailsPopUp', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-zrstSpeciesDetailsPopUp', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tTextx0x15ComputedData = computed(() => _.merge({}, componentState.tTextx0x15.default, componentState.tTextx0x15?.[state.screenSize]));

 const tTextx0x16ComputedData = computed(() => _.merge({}, componentState.tTextx0x16.default, componentState.tTextx0x16?.[state.screenSize]));

 const tTextx0x17ComputedData = computed(() => _.merge({}, componentState.tTextx0x17.default, componentState.tTextx0x17?.[state.screenSize]));

 const tSwiperBasex0x18ComputedData = computed(() => _.merge({}, componentState.tSwiperBasex0x18.default, componentState.tSwiperBasex0x18?.[state.screenSize]));

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
tTextx0x1ComputedData,
tTextx0x2ComputedData,
tTextx0x3ComputedData,
tTextx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tTextx0x8ComputedData,
tTextx0x9ComputedData,
tTextx0x10ComputedData,
tTextx0x11ComputedData,
tTextx0x13ComputedData,
tTextx0x14ComputedData,
tTextx0x15ComputedData,
tTextx0x16ComputedData,
tTextx0x17ComputedData,
tSwiperBasex0x18ComputedData,
};
},
};