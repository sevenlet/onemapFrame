window.groundWaterComponent = {
template: 
`<div id="t-l-c-groundWater" class="t-l-c-groundWater" >` +
`<t-rect id="t-rect-9e7a.53a7f26fc" class="groundWater-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-24f7.d9c8ed99" class="groundWater-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-f301.9ed18f50a" class="groundWater-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-2e3a.ee9e1466d" class="groundWater-t-text-common-0-3"  :label="tTextCommonx0x3ComputedData.label" :editable="tTextCommonx0x3ComputedData.editable" :c-style="tTextCommonx0x3ComputedData.cStyle">` +
`</t-text-common>` +
`<t-table id="t-table-b998.79da5f0ed" class="groundWater-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :columns="tTablex0x4ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-b998.79da5f0ed']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle">` +
`</t-table>` +
`<t-button id="t-button-1308.d00125424" class="groundWater-t-button-0-5"  :label="tButtonx0x5ComputedData.label" :round="tButtonx0x5ComputedData.round" :plain="tButtonx0x5ComputedData.plain" :disabled="tButtonx0x5ComputedData.disabled" :type="tButtonx0x5ComputedData.type" :size="tButtonx0x5ComputedData.size" :native-type="tButtonx0x5ComputedData.native-type" :c-style="tButtonx0x5ComputedData.cStyle" @click="onclick1763637504861">` +
`</t-button>` +
`<t-input id="t-input-f0e5.c05610435" class="groundWater-t-input-0-6"  :type="tInputx0x6ComputedData.type" :input-value="replaceCssVariables(filterData(state.pointName, componentPropBindingMap?.['t-input-f0e5.c05610435']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x6ComputedData.maxlength" :minlength="tInputx0x6ComputedData.minlength" :show-word-limit="tInputx0x6ComputedData.showWordLimit" :placeholder="tInputx0x6ComputedData.placeholder" :clearable="tInputx0x6ComputedData.clearable" :show-password="tInputx0x6ComputedData.showPassword" :disabled="tInputx0x6ComputedData.disabled" :prefix-icon="tInputx0x6ComputedData.prefix-icon" :suffix-icon="tInputx0x6ComputedData.suffix-icon" :rows="tInputx0x6ComputedData.rows" :autosize="tInputx0x6ComputedData.autosize" :name="tInputx0x6ComputedData.name" :readonly="tInputx0x6ComputedData.readonly" :step="tInputx0x6ComputedData.step" :autofocus="tInputx0x6ComputedData.autofocus" :form="tInputx0x6ComputedData.form" :label="tInputx0x6ComputedData.label" :tabindex="tInputx0x6ComputedData.tabindex" :validate-event="tInputx0x6ComputedData.validateEvent" :c-style="tInputx0x6ComputedData.cStyle" @change="onchange1763639146616">` +
`</t-input>` +
`<t-tabs-base id="t-tabs-base-b4be.df8723c44" class="groundWater-t-tabs-base-0-7"  :data="tTabsBasex0x7ComputedData.data" :space="tTabsBasex0x7ComputedData.space" :selected-tab-val="tTabsBasex0x7ComputedData.selectedTabVal" :inner-shadow-color="tTabsBasex0x7ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x7ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x7ComputedData.alias" :c-style="tTabsBasex0x7ComputedData.cStyle" @tab-click="ontabClick1765438159820">` +
`</t-tabs-base>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-9e7a.53a7f26fc":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-24f7.d9c8ed99":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f301.9ed18f50a":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-2e3a.ee9e1466d":{"attributeName":"tTextCommonx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-table-b998.79da5f0ed":{"attributeName":"tTablex0x4","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-button-1308.d00125424":{"attributeName":"tButtonx0x5","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-input-f0e5.c05610435":{"attributeName":"tInputx0x6","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-b4be.df8723c44":{"attributeName":"tTabsBasex0x7","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}}};
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
   listData: [{"year_number":"2024","point_code":"NP01","key_region_code":"8cda87ed-5186-4027-b2fc-5fe86e0dc95d","region_name":"光泽县","point_name":"光泽县杭川镇送林巷31号","waterqualitylevelname":"Ⅲ类","controllevel":"省控","longitude":"117.332723","latitude":"27.547045","code_controllevel":"2","code_waterqualitylevel":"3"}],
   controlLevel: "2",
   layerSwitch: "false",
   dataSourceType: "",
   monitorTime: "2024",
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
            default: {"width":"980px","height":"186px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"0px","top":"0px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-21/bb51ca06e0cc4048b7ee6aac2bb1517a.png)","fillType":"image"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"980px","height":"186px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"0px","top":"0px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-21/bb51ca06e0cc4048b7ee6aac2bb1517a.png)","fillType":"image"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"120px","height":"4px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"48px","top":"1px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/64bff933dc4b426d980cc1fc741c94c8.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"4px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"48px","top":"1px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/64bff933dc4b426d980cc1fc741c94c8.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"980px","height":"61px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"-1px","top":"1px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/e6eee83707dc494e8eed88cd8e44561a.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"980px","height":"61px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"-1px","top":"1px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/e6eee83707dc494e8eed88cd8e44561a.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTextCommonx0x3: {
defaultStyle: {
            default: {"width":"136px","height":"30px","color":"#ffffff","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"61px","top":"18px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"地下水",
editable:false,
cStyle:{"wrapper":{"default":{"width":"136px","height":"30px","color":"#ffffff","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"61px","top":"18px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"980px","height":"120px","backgroundColor":"","position":"unset","left":"0px","top":"61px","animationName":""},
            
            },
 default: { 
 
height:"119px",
stripe:true,
border:false,
autoScroll:"rowScroll",
speed:"6",
columns:[{"label":"定位","key":"ionic","align":"center","operationList":[],"stateList":[],"style":{"fontStyle":{"color":null},"imageStyle":{"backgroundImage":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2023-01-05/95d04d0c780c4e8186c44fb450ba8fe5.png","width":"15px","height":"17px","marginLeft":"","marginTop":"10px","marginRight":"","marginBottom":""}},"width":"52px","minWidth":"50PX"},{"label":"区县","key":"region_name","align":"center","operationList":[],"stateList":[],"style":{"fontStyle":{"color":null},"imageStyle":{"backgroundSize":"unset","backgroundImage":"","width":"15px","height":"17px","marginLeft":"","marginTop":"10px","marginRight":"","marginBottom":""}},"width":"160px","minWidth":"50PX"},{"label":"站点","key":"point_name","align":"left","operationList":[],"stateList":[],"style":{"fontStyle":{"display":"block","color":"rgba(255, 255, 255, 1)","fontSize":"14PX","padding":"0 0 0 16px","fontWeight":"400"}},"width":"auto","minWidth":"140PX","headerAlign":"center","showOverflowTooltip":true},{"label":"水质现状","key":"waterqualitylevelname","stateKey":"waterqualitylevelname","align":"center","type":"state","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000","fillType":"color"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000","fillType":"color"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000","fillType":"color"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000","fillType":"color"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000","fillType":"color"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000","fillType":"color"}},{"name":"-","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"","borderRadius":"2PX","borderWidth":"0PX"}}],"style":{"cellStyle":{"background":""},"fontStyle":{"fontWeight":"bolder","fontSize":"16PX","color":null,"padding":"","borderRadius":"4PX"}},"width":"115px","minWidth":"56PX","showOverflowTooltip":false},{"label":"日期","key":"year_number","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"14px","fontWeight":"400"}},"width":"130px","minWidth":"70PX"}],
data:[{"year_number":"2024","point_code":"NP01","key_region_code":"8cda87ed-5186-4027-b2fc-5fe86e0dc95d","region_name":"光泽县","point_name":"光泽县杭川镇送林巷31号","waterqualitylevelname":"Ⅲ类","controllevel":"省控","longitude":"117.332723","latitude":"27.547045","code_controllevel":"2","code_waterqualitylevel":"3"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"980px","height":"120px","backgroundColor":"","position":"unset","left":"0px","top":"61px","animationName":""}},"headerCell":{"default":{"borderBottom":"0px none rgba(20,112,204,0.3)","borderLeft":"0px none rgba(20,112,204,0.3)","borderRight":"0px none rgba(20,112,204,0.3)","borderTop":"0px none rgba(20,112,204,0.3)","color":"#fff","backgroundColor":"rgba(20, 112, 204, 0.3)","fontSize":"14px","lineHeight":"38px","height":"38px","marginTop":"0px","paddingBottom":"0px","paddingTop":"0px","marginBottom":"0px","paddingLeft":"0px"}},"bodyCell":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.1)","borderBottom":"0px none rgba(24,37,64,1)","borderLeft":"0px none rgba(24,37,64,1)","borderRight":"0px none rgba(24,37,64,1)","borderTop":"0px none rgba(24,37,64,1)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingBottom":"0px","paddingTop":"0px","lineHeight":"40px","fontSize":"12px","fontFamily":"微软雅黑","fontWeight":"400"},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(0, 59, 132, 0.3)"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)"}},"rowWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}}}, 
 },
},
tButtonx0x5: {
defaultStyle: {
            default: {"width":"49px","height":"26px","background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomRightRadius":"3px","borderBottomLeftRadius":"3px","position":"unset","left":"394px","top":"19px","backgroundColor":"#2C80FF","fontSize":"14px","lineHeight":"14px"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"49px","height":"26px","background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomRightRadius":"3px","borderBottomLeftRadius":"3px","position":"unset","left":"394px","top":"19px","backgroundColor":"#2C80FF","fontSize":"14px","lineHeight":"14px"},"hover":{"background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)"},"active":{"background":"rgb(0,52,181)","border":"auto !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)"},"disabled":{"background":"#699EF5","border":"unset !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)"}},"text":{"default":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 1)","background":"unset","backgroundClip":"unset","display":"block !important","width":"100%","height":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"active":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 0.9)","background":"unset","backgroundClip":"unset"},"hover":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 0.9)","background":"unset","backgroundClip":"unset"},"disabled":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 1)","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tInputx0x6: {
defaultStyle: {
            default: {"width":"181px","height":"26px","position":"unset","left":"208px","top":"19px","backgroundColor":"var(--t-select-fill-bg)","fontSize":"12px","color":"#fff","lineHeight":"12px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入断面名称",
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
cStyle:{"wrapper":{"default":{"width":"181px","height":"26px","position":"unset","left":"208px","top":"19px","backgroundColor":"var(--t-select-fill-bg)","fontSize":"12px","color":"#fff","lineHeight":"12px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)"},"focus":{"borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"hover":{"borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"}},"placeholder":{"default":{"fontSize":"12px","lineHeight":"12px","color":"#fff"}}}, 
 },
},
tTabsBasex0x7: {
defaultStyle: {
            default: {"width":"204px","height":"25px","position":"unset","left":"459px","top":"20px","fontSize":"12px","lineHeight":"26px","animationName":""},
            
            },
 default: { 
 
data:[{"label":"全部"},{"label":"国控","value":"1"},{"label":"省控","value":"2"}],
space:5,
selectedTabVal:"2",
innerShadowColor:"rgba(0,0,0,0)",
activeInnerShadowColor:"rgba(0,0,0,0)",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"204px","height":"25px","position":"unset","left":"459px","top":"20px","fontSize":"12px","lineHeight":"26px","animationName":""}},"label":{"default":{"display":"block","width":"100%","height":"auto","color":"#fff","fontWeight":"400","fontSize":"12","lineHeight":"26px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"hover":{"color":"var(--t-tabs-base-hover-text-color)"},"active":{"color":"#fff","fontSize":"12px","lineHeight":"26px"}},"itemWrapper":{"default":{"width":"44%","flex":"unset","height":"26px","padding":"0","margin":"0","borderRadius":"4px","background":"var(--t-tabs-base-bg-color)","color":"#fff","fontWeight":"var(--t-tabs-base-text-weight)","fontSize":"12","lineHeight":"26px","textAlign":"center","cursor":"pointer","fillType":"color","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--business-show-bg60)"},"hover":{"margin":"0 !important","background":"var(--t-tabs-base-hover-bg-color)","fillType":"color","fontSize":"12px","lineHeight":"26px","backgroundColor":"#2C80FF"},"active":{"margin":"0 !important","background":"var(--t-tabs-base-active-bg-color)","fillType":"color","fontSize":"12px","lineHeight":"26px","backgroundColor":"#2C80FF"},"disabled":{"color":"var(--t-tabs-vertical-disabled-text-color)"}},"tabsContainer":{"default":{"display":"flex","height":"100%","justifyContent":"space-between","alignItems":"center","gap":"5px","flexDirection":"row","fontSize":"12px","lineHeight":"26px"},"hover":{"fontSize":"12px","lineHeight":"26px"}}}, 
 },
},
});
const handleChangeTab = (type) => {
if (type === '1' || type === '2') {
  state.controlLevel = type;
  state.dataSourceType = 'surfaceWater';
} else {
  state.controlLevel = '';
  state.dataSourceType = type;
}
};
const onclick1763637504861 = () => {
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "queryUnderWaterByPointName", // 消息名称
data: {"code_controllevel":state.controlLevel,"point_name":state.pointName}, // 发送的数据
});
};
const onchange1763639146616 = (value) => {
// 设置变量值
state.pointName = value;
};
const ontabClick1765438159820 = (data) => {
// 设置变量值
state.controlLevel = data.value;
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "queryUnderWaterByPointName", // 消息名称
data: {"code_controllevel":state.controlLevel,"point_name":state.pointName}, // 发送的数据
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"year_number":"state.monitorTime","code_controllevel":"state.controlLevel","code_waterqualitylevel":"","point_name":"state.pointName","interfaceId":"5a6f9b7f46652550464dcbaf1179199b"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"year_number":state.monitorTime,"code_controllevel":state.controlLevel,"code_waterqualitylevel":"","point_name":state.pointName,"interfaceId":"5a6f9b7f46652550464dcbaf1179199b"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"year_number":state.monitorTime,"code_controllevel":state.controlLevel,"code_waterqualitylevel":"","point_name":state.pointName,"interfaceId":"5a6f9b7f46652550464dcbaf1179199b"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     if (res.data?.data?.length) {
  state.listData = res.data.data;
} else {
  state.listData = [];
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
 getWaterMonitorTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"91ed7320df516342761e7dcc1334026b"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"91ed7320df516342761e7dcc1334026b"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"91ed7320df516342761e7dcc1334026b"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWaterMonitorTime'] = res.data;
                
     state.monitorTime = res?.data?.data?.monitortime || '--';

apiRegistry.getListData.request();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.monitorTime = '--';
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [state.controlLevel], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-groundWater', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onBeforeUnmount(() => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setWaterAutomaticStatus", // 消息名称
data: {"visible":false}, // 发送的数据
});
});
onMounted(() => {
setPageScale('t-l-c-groundWater', global.appScaleMode, 'normal');
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

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tTextCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x3.default, componentState.tTextCommonx0x3?.[state.screenSize]));

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

 const tButtonx0x5ComputedData = computed(() => _.merge({}, componentState.tButtonx0x5.default, componentState.tButtonx0x5?.[state.screenSize]));

 const tInputx0x6ComputedData = computed(() => _.merge({}, componentState.tInputx0x6.default, componentState.tInputx0x6?.[state.screenSize]));

 const tTabsBasex0x7ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x7.default, componentState.tTabsBasex0x7?.[state.screenSize]));

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
tTextCommonx0x3ComputedData,
tTablex0x4ComputedData,
tButtonx0x5ComputedData,
tInputx0x6ComputedData,
tTabsBasex0x7ComputedData,
onclick1763637504861,
onchange1763639146616,
ontabClick1765438159820,
};
},
};