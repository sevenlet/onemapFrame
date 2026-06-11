window.negativeIonMonitoringComponent = {
template: 
`<div id="t-l-c-negativeIonMonitoring" class="t-l-c-negativeIonMonitoring" >` +
`<t-rect id="t-rect-9e7a.53a7f26fc" class="negativeIonMonitoring-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-24f7.d9c8ed99" class="negativeIonMonitoring-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-f301.9ed18f50a" class="negativeIonMonitoring-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-2e3a.ee9e1466d" class="negativeIonMonitoring-t-text-common-0-3"  :label="tTextCommonx0x3ComputedData.label" :editable="tTextCommonx0x3ComputedData.editable" :c-style="tTextCommonx0x3ComputedData.cStyle">` +
`</t-text-common>` +
`<t-table id="t-table-b998.79da5f0ed" class="negativeIonMonitoring-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :columns="tTablex0x4ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-b998.79da5f0ed']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle">` +
`</t-table>` +
`<t-button id="t-button-1308.d00125424" class="negativeIonMonitoring-t-button-0-5"  :label="tButtonx0x5ComputedData.label" :round="tButtonx0x5ComputedData.round" :plain="tButtonx0x5ComputedData.plain" :disabled="tButtonx0x5ComputedData.disabled" :type="tButtonx0x5ComputedData.type" :size="tButtonx0x5ComputedData.size" :native-type="tButtonx0x5ComputedData.native-type" :c-style="tButtonx0x5ComputedData.cStyle" @click="onclick1763637504861">` +
`</t-button>` +
`<t-input id="t-input-f0e5.c05610435" class="negativeIonMonitoring-t-input-0-6"  :type="tInputx0x6ComputedData.type" :input-value="replaceCssVariables(filterData(state.pointName, componentPropBindingMap?.['t-input-f0e5.c05610435']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x6ComputedData.maxlength" :minlength="tInputx0x6ComputedData.minlength" :show-word-limit="tInputx0x6ComputedData.showWordLimit" :placeholder="tInputx0x6ComputedData.placeholder" :clearable="tInputx0x6ComputedData.clearable" :show-password="tInputx0x6ComputedData.showPassword" :disabled="tInputx0x6ComputedData.disabled" :prefix-icon="tInputx0x6ComputedData.prefix-icon" :suffix-icon="tInputx0x6ComputedData.suffix-icon" :rows="tInputx0x6ComputedData.rows" :autosize="tInputx0x6ComputedData.autosize" :name="tInputx0x6ComputedData.name" :readonly="tInputx0x6ComputedData.readonly" :step="tInputx0x6ComputedData.step" :autofocus="tInputx0x6ComputedData.autofocus" :form="tInputx0x6ComputedData.form" :label="tInputx0x6ComputedData.label" :tabindex="tInputx0x6ComputedData.tabindex" :validate-event="tInputx0x6ComputedData.validateEvent" :c-style="tInputx0x6ComputedData.cStyle" @change="onchange1763639146616">` +
`</t-input>` +
`<t-switch id="t-switch-0982.898d5567e" class="negativeIonMonitoring-t-switch-0-7"  :value="tSwitchx0x7ComputedData.value" :c-style="tSwitchx0x7ComputedData.cStyle" @change="onchange1763637276915">` +
`</t-switch>` +
`<t-text-common id="t-text-common-83a3.0f6c40a01" class="negativeIonMonitoring-t-text-common-0-8"  :label="tTextCommonx0x8ComputedData.label" :editable="tTextCommonx0x8ComputedData.editable" :c-style="tTextCommonx0x8ComputedData.cStyle">` +
`</t-text-common>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-9e7a.53a7f26fc":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-24f7.d9c8ed99":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f301.9ed18f50a":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-2e3a.ee9e1466d":{"attributeName":"tTextCommonx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-table-b998.79da5f0ed":{"attributeName":"tTablex0x4","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-button-1308.d00125424":{"attributeName":"tButtonx0x5","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-input-f0e5.c05610435":{"attributeName":"tInputx0x6","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-0982.898d5567e":{"attributeName":"tSwitchx0x7","value":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-83a3.0f6c40a01":{"attributeName":"tTextCommonx0x8","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   originData: "",
   districtCode: "",
   pointType: "0,1,4",
   listData: [{"negativeIon":"5868","temperature":"17.4","humidity":"67","lon":"118.0875","lat":"27.477222","name":"动车站","time":""}],
   regionCode: "350700000000",
   controlLevel: "1",
   layerSwitch: "false",
   dataSourceType: "surfaceWater",
   monitorTime: "2025-10-20 19",
   pointName: "",
   listDataMap: {"体育中心":{"negativeIon":"5868","temperature":"17.4","humidity":"67","lon":"118.0925","lat":"27.346388","name":"体育中心","time":""},"市政府":{"negativeIon":"5868","temperature":"17.4","humidity":"67","lon":"118.074444","lat":"27.386388","name":"市政府","time":""},"动车站":{"negativeIon":"5868","temperature":"17.4","humidity":"67","lon":"118.0875","lat":"27.477222","name":"动车站","time":""}},
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
            default: {"width":"213px","height":"30px","color":"#ffffff","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"61px","top":"18px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"负氧离子监测",
editable:false,
cStyle:{"wrapper":{"default":{"width":"213px","height":"30px","color":"#ffffff","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"61px","top":"18px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"980px","height":"120px","backgroundColor":"","position":"unset","left":"0px","top":"62px","animationName":"","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","overflow":"visible"},
            
            },
 default: { 
 
height:"119px",
stripe:true,
border:false,
autoScroll:"rowScroll",
speed:"6",
columns:[{"label":"定位","key":"ionic","align":"center","operationList":[],"stateList":[],"style":{"fontStyle":{"color":null},"imageStyle":{"backgroundImage":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2023-01-05/95d04d0c780c4e8186c44fb450ba8fe5.png","width":"15px","height":"17px","marginLeft":"","marginTop":"10px","marginRight":"","marginBottom":""}},"width":"52px","minWidth":"50PX"},{"label":"站点","key":"name","align":"left","operationList":[],"stateList":[],"style":{"fontStyle":{"display":"block","color":"rgba(255, 255, 255, 1)","fontSize":"14PX","padding":"0 0 0 16px","fontWeight":"400"}},"width":"auto","minWidth":"140PX","headerAlign":"center","showOverflowTooltip":true},{"label":"负氧离子（个/cm³）","key":"negativeIon","align":"center","operationList":[],"stateList":[],"width":"200px","minWidth":"100PX"},{"label":"温度（℃）","key":"temperature","stateKey":"temperature","align":"center","type":"default","operationList":[],"stateList":[{"name":"优","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #00E400 0%, #00E400 100%)"}},{"name":"良","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #F9D000 0%, #F9D000 100%)"}},{"name":"轻度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF7E00 0%, #FF7E00 100%)"}},{"name":"中度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF0000 0%, #FF0000 100%)"}},{"name":"重度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #C500F4 0%, #C500F4 100%)"}},{"name":"严重污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #8C0024 0%, #8C0024 100%)"}},{"name":"-","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #AAAAAA 0%, #AAAAAA 100%)"}}],"style":{"cellStyle":{"background":""},"fontStyle":{"fontWeight":"bolder","fontSize":"16PX","color":null,"padding":"","borderRadius":"4PX"}},"width":"100px","minWidth":"56PX","showOverflowTooltip":false},{"label":"湿度（%RH）","key":"humidity","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"16PX","fontWeight":"400"}},"width":"100px","minWidth":"70PX"},{"label":"监测日期","key":"time","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"14px","fontWeight":"400"}},"width":"200px","minWidth":"70PX"}],
data:[{"negativeIon":"5868","temperature":"17.4","humidity":"67","lon":"118.0875","lat":"27.477222","name":"动车站","time":""}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"980px","height":"120px","backgroundColor":"","position":"unset","left":"0px","top":"62px","animationName":"","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","overflow":"visible"}},"headerCell":{"default":{"borderBottom":"0px none rgba(20,112,204,0.3)","borderLeft":"0px none rgba(20,112,204,0.3)","borderRight":"0px none rgba(20,112,204,0.3)","borderTop":"0px none rgba(20,112,204,0.3)","color":"#fff","backgroundColor":"rgba(20, 112, 204, 0.3)","fontSize":"14px","lineHeight":"38px","height":"38px","marginTop":"0px","paddingBottom":"0px","paddingTop":"0px","marginBottom":"0px","paddingLeft":"0px"}},"bodyCell":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.1)","borderBottom":"0px none rgba(24,37,64,1)","borderLeft":"0px none rgba(24,37,64,1)","borderRight":"0px none rgba(24,37,64,1)","borderTop":"0px none rgba(24,37,64,1)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingBottom":"0px","paddingTop":"0px","lineHeight":"40px","fontSize":"12px","fontFamily":"微软雅黑","fontWeight":"400"},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(0, 59, 132, 0.3)"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)"}},"rowWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}}}, 
 },
},
tButtonx0x5: {
defaultStyle: {
            default: {"width":"49px","height":"26px","background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomRightRadius":"3px","borderBottomLeftRadius":"3px","position":"unset","left":"446px","top":"21px","backgroundColor":"#2C80FF","fontSize":"14px","lineHeight":"14px"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"49px","height":"26px","background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomRightRadius":"3px","borderBottomLeftRadius":"3px","position":"unset","left":"446px","top":"21px","backgroundColor":"#2C80FF","fontSize":"14px","lineHeight":"14px"},"hover":{"background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)"},"active":{"background":"rgb(0,52,181)","border":"auto !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)"},"disabled":{"background":"#699EF5","border":"unset !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)"}},"text":{"default":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 1)","background":"unset","backgroundClip":"unset","display":"block !important","width":"100%","height":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"active":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 0.9)","background":"unset","backgroundClip":"unset"},"hover":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 0.9)","background":"unset","backgroundClip":"unset"},"disabled":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 1)","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tInputx0x6: {
defaultStyle: {
            default: {"width":"181px","height":"26px","position":"unset","left":"260px","top":"21px","backgroundColor":"var(--t-select-fill-bg)","fontSize":"12px","color":"#fff","lineHeight":"12px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入站点名称",
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
cStyle:{"wrapper":{"default":{"width":"181px","height":"26px","position":"unset","left":"260px","top":"21px","backgroundColor":"var(--t-select-fill-bg)","fontSize":"12px","color":"#fff","lineHeight":"12px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)"},"focus":{"borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"hover":{"borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"}},"placeholder":{"default":{"fontSize":"12px","lineHeight":"12px","color":"#fff"}}}, 
 },
},
tSwitchx0x7: {
defaultStyle: {
            default: {"width":"32px","height":"22px","position":"unset","left":"935px","top":"24px"},
            
            },
 default: { 
 
value:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"22px","position":"unset","left":"935px","top":"24px"}},"core":{"default":{"backgroundColor":"var(--business-show-bg60)","borderLeft":"1px solid #0071E9","borderTop":"1px solid #0071E9","borderRight":"1px solid #0071E9","borderBottom":"1px solid #0071E9"},"active":{"backgroundColor":"#0071E9"}}}, 
 },
},
tTextCommonx0x8: {
defaultStyle: {
            default: {"width":"64px","height":"20px","color":"var(--t-text-rh-color)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"864px","top":"25px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"图层开关",
editable:false,
cStyle:{"wrapper":{"default":{"width":"64px","height":"20px","color":"var(--t-text-rh-color)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"864px","top":"25px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
});
const handleSelect = (value) => {
if (value === '350700000000') {
  state.regionCode = value;
  state.districtCode = '';
} else {
  state.regionCode = '';
  state.districtCode = value;
}
};
const getListData = () => {
const baseUrl = 'http://192.168.24.106:10157';
const url1 = '/DCXXService/GetDeviceLastestDataById.ashx?Id=5929';
const url2 = '/DCXXService/GetDeviceLastestDataById.ashx?Id=5930';
const url3 = '/DCXXService/GetDeviceLastestDataById.ashx?Id=5931';

const fetchData = (url, type) => {
  axios.get(baseUrl + url, {
    headers: {
      'Content-Type': 'application/json',
    }
  }).then((res) => {
    console.log(res)

    if (res?.data?.result?.data?.length) {
      const { result } = res.data;
      const negativeIonIndex = result.data.findIndex(item => item.name === "负离子");
      const temperatureIndex = result.data.findIndex(item => item.name === "温度");
      const humidityIndex = result.data.findIndex(item => item.name === "湿度");
      state.listDataMap[type] = {
        ...state.listDataMap[type],
        negativeIon: result.data[negativeIonIndex].value,
        temperature: result.data[temperatureIndex].value,
        humidity: result.data[humidityIndex].value,
        time: result.time.slice(0, -3)
      }
    }

    state.listData = Object.values(state.listDataMap);
    state.originData = Object.values(state.listDataMap);
  }).catch(error => {
    console.error('获取数据失败:', error);
  });
}

fetchData(url1, "体育中心");
fetchData(url2, "市政府");
fetchData(url3, "动车站");

setInterval(() => {
  fetchData(url1, "体育中心");
  fetchData(url2, "市政府");
  fetchData(url3, "动车站");
}, 60000)
};
const handleSearch = () => {
/**
 * 模糊搜索方法
 * @param {Array} list - 要搜索的数据列表
 * @param {string} keyword - 搜索关键词
 * @param {Array|string} keys - 要搜索的字段（字符串或数组）
 * @param {Object} options - 配置选项
 * @returns {Array} 过滤后的列表
 */
function fuzzySearch(list, keyword, keys, options = {}) {
  if (!keyword || !keyword.trim()) {
    return list;
  }
  
  const {
    caseSensitive = false,      // 是否区分大小写
    matchMode = 'include',      // 匹配模式：include, startWith, endWith, any
    // highlight = false,          // 是否高亮匹配部分
    minMatchLength = 1          // 最小匹配长度
  } = options;
  
  const searchKey = caseSensitive ? keyword : keyword.toLowerCase();
  
  // 如果关键词太短，返回空数组或原数组（根据需求）
  if (searchKey.length < minMatchLength) {
    return options.returnAllWhenShort ? list : [];
  }
  
  // 处理要搜索的字段
  const searchKeys = Array.isArray(keys) ? keys : [keys];
  
  return list.filter(item => {
    return searchKeys.some(key => {
      let value = getNestedValue(item, key);
      if (value == null) return false;
      
      value = String(value);
      if (!caseSensitive) {
        value = value.toLowerCase();
      }
      
      // 根据匹配模式进行判断
      switch (matchMode) {
        case 'startWith':
          return value.startsWith(searchKey);
        case 'endWith':
          return value.endsWith(searchKey);
        case 'any':
          return searchKey.split('').every(char => value.includes(char));
        case 'include':
        default:
          return value.includes(searchKey);
      }
    });
  });
}

// 辅助函数：获取嵌套对象的值
function getNestedValue(obj, path) {
  return path.split('.').reduce((prev, key) => prev && prev[key], obj);
}

state.listData = fuzzySearch(state.originData, state.pointName, 'name', {});
};
const onclick1763637504861 = () => {
// 执行自定义方法
handleSearch();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setNegativeOxygenIonStatus", // 消息名称
data: {"visible":state.layerSwitch,"data":state.listData}, // 发送的数据
});
};
const onchange1763639146616 = (value) => {
// 设置变量值
state.pointName = value;
};
const onchange1763637276915 = (value) => {
// 设置变量值
state.layerSwitch = value;
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setNegativeOxygenIonStatus", // 消息名称
data: {"visible":value,"data":state.listData}, // 发送的数据
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getDefaultTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"DISTRICT_CODE":"state.districtCode","REGION_CODE":"state.regionCode","POINT_TYPE":"state.pointType","TIME_TYPE":"hour","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"DISTRICT_CODE":state.districtCode,"REGION_CODE":state.regionCode,"POINT_TYPE":state.pointType,"TIME_TYPE":"hour","interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"DISTRICT_CODE":state.districtCode,"REGION_CODE":state.regionCode,"POINT_TYPE":state.pointType,"TIME_TYPE":"hour","interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDefaultTime'] = res.data;
                
     state.monitorTime = res?.data?.data?.MONITORTIME || '';

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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"DISTRICT_CODE":"state.districtCode","POINT_TYPE":"state.pointType","MONITOR_TIME":"state.monitorTime","POINT_NAME":"state.pointName","REGION_CODE":"state.regionCode","interfaceId":"50feb08cc20df8f684a84e0119cf26c6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"DISTRICT_CODE":state.districtCode,"POINT_TYPE":state.pointType,"MONITOR_TIME":state.monitorTime,"POINT_NAME":state.pointName,"REGION_CODE":state.regionCode,"interfaceId":"50feb08cc20df8f684a84e0119cf26c6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"DISTRICT_CODE":state.districtCode,"POINT_TYPE":state.pointType,"MONITOR_TIME":state.monitorTime,"POINT_NAME":state.pointName,"REGION_CODE":state.regionCode,"interfaceId":"50feb08cc20df8f684a84e0119cf26c6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     state.listData = [];
if (res.data?.data?.length) {
  state.listData = res.data.data;
  state.listData = res.data.data.map((item) => {
    const temp = {};
    Object.keys(item).forEach((key) => {
      temp[key] = item[key] || '--'
      if (Number(item[key]) < 0) {
        temp[key] = '--'
      }
    })
    return temp;
  });
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
 getSelectOptions: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
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
watch(() => [state.districtCode,state.regionCode,state.pointType], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getDefaultTime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-negativeIonMonitoring', global.appScaleMode, 'normal');
                           
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
type: "setNegativeOxygenIonStatus", // 消息名称
data: {"visible":false}, // 发送的数据
});
});
// 执行自定义方法
getListData();
onMounted(() => {
setPageScale('t-l-c-negativeIonMonitoring', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tTextCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x3.default, componentState.tTextCommonx0x3?.[state.screenSize]));

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

 const tButtonx0x5ComputedData = computed(() => _.merge({}, componentState.tButtonx0x5.default, componentState.tButtonx0x5?.[state.screenSize]));

 const tInputx0x6ComputedData = computed(() => _.merge({}, componentState.tInputx0x6.default, componentState.tInputx0x6?.[state.screenSize]));

 const tSwitchx0x7ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x7.default, componentState.tSwitchx0x7?.[state.screenSize]));

 const tTextCommonx0x8ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x8.default, componentState.tTextCommonx0x8?.[state.screenSize]));

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
tSwitchx0x7ComputedData,
tTextCommonx0x8ComputedData,
onclick1763637504861,
onchange1763639146616,
onchange1763637276915,
};
},
};