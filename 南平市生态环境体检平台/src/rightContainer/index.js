window.rightContainerComponent = {
template: 
`<div id="t-l-c-rightContainer" class="t-l-c-rightContainer" >` +
`<t-rect id="t-rect-5ded.e8a00c9f2" class="rightContainer-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.showRightMain === false" id="t-rect-019a.c66d3b746" class="rightContainer-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle" @click="onclick1719905389338">` +
`</t-rect>` +
`<t-rect v-if="state.showRightMain === true" id="t-rect-4714.7a255db11" class="rightContainer-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1719905398186">` +
`</t-rect>` +
`<t-self-adaption-card v-if="global.integratedQuery.showIntegratedQuery === false" id="t-self-adaption-card-dd44.cecc67364" class="rightContainer-t-self-adaption-card-0-4"  :translate-x="tSelfAdaptionCardx0x4ComputedData.translateX" :active-item="replaceCssVariables(filterData(state.activeTab, componentPropBindingMap?.['t-self-adaption-card-dd44.cecc67364']['activeItem'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelfAdaptionCardx0x4ComputedData.alias" :title-front-img="tSelfAdaptionCardx0x4ComputedData.titleFrontImg" :title-below-img="tSelfAdaptionCardx0x4ComputedData.titleBelowImg" :title-mid-img="tSelfAdaptionCardx0x4ComputedData.titleMidImg" :data="replaceCssVariables(filterData(state.tabList, componentPropBindingMap?.['t-self-adaption-card-dd44.cecc67364']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tSelfAdaptionCardx0x4ComputedData.cStyle" @item-click="onitemClick1720439444547">` +
`</t-self-adaption-card>` +
`<t-self-adaption-card v-if="state.iframePointDetailUrl !== ''" id="t-self-adaption-card-3c28.05ba9ee56" class="rightContainer-t-self-adaption-card-0-5"  :translate-x="tSelfAdaptionCardx0x5ComputedData.translateX" :active-item="replaceCssVariables(filterData(state.activeTab, componentPropBindingMap?.['t-self-adaption-card-3c28.05ba9ee56']['activeItem'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelfAdaptionCardx0x5ComputedData.alias" :title-front-img="tSelfAdaptionCardx0x5ComputedData.titleFrontImg" :title-below-img="tSelfAdaptionCardx0x5ComputedData.titleBelowImg" :title-mid-img="tSelfAdaptionCardx0x5ComputedData.titleMidImg" :data="tSelfAdaptionCardx0x5ComputedData.data" :c-style="tSelfAdaptionCardx0x5ComputedData.cStyle" @item-click="onitemClick1722506970837">` +
`</t-self-adaption-card>` +
`<t-self-adaption-card v-if="state.showSourceTab === true" id="t-self-adaption-card-4300.713476c5f" class="rightContainer-t-self-adaption-card-0-6"  :translate-x="tSelfAdaptionCardx0x6ComputedData.translateX" :active-item="replaceCssVariables(filterData(state.activeTab, componentPropBindingMap?.['t-self-adaption-card-4300.713476c5f']['activeItem'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelfAdaptionCardx0x6ComputedData.alias" :title-front-img="tSelfAdaptionCardx0x6ComputedData.titleFrontImg" :title-below-img="tSelfAdaptionCardx0x6ComputedData.titleBelowImg" :title-mid-img="tSelfAdaptionCardx0x6ComputedData.titleMidImg" :data="tSelfAdaptionCardx0x6ComputedData.data" :c-style="tSelfAdaptionCardx0x6ComputedData.cStyle" @item-click="onitemClick1722564102772_0_0">` +
`</t-self-adaption-card>` +
`<t-self-adaption-card v-if="state.showSourceRecordTab === true" id="t-self-adaption-card-187f.984573b4d" class="rightContainer-t-self-adaption-card-0-7"  :translate-x="tSelfAdaptionCardx0x7ComputedData.translateX" :active-item="replaceCssVariables(filterData(state.activeTab, componentPropBindingMap?.['t-self-adaption-card-187f.984573b4d']['activeItem'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelfAdaptionCardx0x7ComputedData.alias" :title-front-img="tSelfAdaptionCardx0x7ComputedData.titleFrontImg" :title-below-img="tSelfAdaptionCardx0x7ComputedData.titleBelowImg" :title-mid-img="tSelfAdaptionCardx0x7ComputedData.titleMidImg" :data="tSelfAdaptionCardx0x7ComputedData.data" :c-style="tSelfAdaptionCardx0x7ComputedData.cStyle" @item-click="onitemClick1730104161215_0_0">` +
`</t-self-adaption-card>` +
`<t-iframe v-if="state.iframeUrl !== ''" id="t-iframe-6ad1.644986df6" class="rightContainer-t-iframe-0-8"  :src="replaceCssVariables(filterData(state.iframeUrl, componentPropBindingMap?.['t-iframe-6ad1.644986df6']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x8ComputedData.srcdoc" :scrolling="tIframex0x8ComputedData.scrolling" :c-style="tIframex0x8ComputedData.cStyle" :socket-url="replaceCssVariables(filterData(global.socketPath, componentPropBindingMap?.['t-iframe-6ad1.644986df6']['socketUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :room-id="replaceCssVariables(filterData(global.socketRoom, componentPropBindingMap?.['t-iframe-6ad1.644986df6']['roomId'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-iframe>` +
`<t-iframe v-if="state.iframePointDetailUrl !== ''" id="t-iframe-d8f2.d23b85c33" class="rightContainer-t-iframe-0-9"  :src="replaceCssVariables(filterData(state.iframePointDetailUrl, componentPropBindingMap?.['t-iframe-d8f2.d23b85c33']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x9ComputedData.srcdoc" :scrolling="tIframex0x9ComputedData.scrolling" :c-style="tIframex0x9ComputedData.cStyle" :socket-url="replaceCssVariables(filterData(global.socketPath, componentPropBindingMap?.['t-iframe-d8f2.d23b85c33']['socketUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :room-id="replaceCssVariables(filterData(global.socketRoom, componentPropBindingMap?.['t-iframe-d8f2.d23b85c33']['roomId'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-iframe>` +
`<t-iframe v-if="state.iframeSourceUrl !== ''" id="t-iframe-ed76.61addc352" class="rightContainer-t-iframe-0-10"  :src="replaceCssVariables(filterData(state.iframeSourceUrl, componentPropBindingMap?.['t-iframe-ed76.61addc352']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x10ComputedData.srcdoc" :scrolling="tIframex0x10ComputedData.scrolling" :c-style="tIframex0x10ComputedData.cStyle" :socket-url="replaceCssVariables(filterData(global.socketPath, componentPropBindingMap?.['t-iframe-ed76.61addc352']['socketUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :room-id="replaceCssVariables(filterData(global.socketRoom, componentPropBindingMap?.['t-iframe-ed76.61addc352']['roomId'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-iframe>` +
`<t-iframe v-if="state.iframeRecordDetailUrl !== ''" id="t-iframe-bbb2.ab6def9d5" class="rightContainer-t-iframe-0-11"  :src="replaceCssVariables(filterData(state.iframeRecordDetailUrl, componentPropBindingMap?.['t-iframe-bbb2.ab6def9d5']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x11ComputedData.srcdoc" :scrolling="tIframex0x11ComputedData.scrolling" :c-style="tIframex0x11ComputedData.cStyle" :socket-url="replaceCssVariables(filterData(global.socketPath, componentPropBindingMap?.['t-iframe-bbb2.ab6def9d5']['socketUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :room-id="replaceCssVariables(filterData(global.socketRoom, componentPropBindingMap?.['t-iframe-bbb2.ab6def9d5']['roomId'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-iframe>` +
`<t-component v-if="state.componentName !== ''" id="t-component-9471.b27951d76" class="rightContainer-t-component-0-12"  :name="replaceCssVariables(filterData(state.componentName, componentPropBindingMap?.['t-component-9471.b27951d76']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tComponentx0x12ComputedData.cStyle" :src="tComponentx0x12ComputedData.src" :component-name="replaceCssVariables(filterData(state.componentName, componentPropBindingMap?.['t-component-9471.b27951d76']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-component>` +
`<t-component v-if="state.componentSourceName !== ''" id="t-component-505d.49fe6f35e" class="rightContainer-t-component-0-13"  :name="replaceCssVariables(filterData(state.componentSourceName, componentPropBindingMap?.['t-component-505d.49fe6f35e']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tComponentx0x13ComputedData.cStyle" :src="tComponentx0x13ComputedData.src" :component-name="replaceCssVariables(filterData(state.componentSourceName, componentPropBindingMap?.['t-component-505d.49fe6f35e']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-component>` +
`<t-component v-if="state.sourceRecordName !== ''" id="t-component-3284.d4cecd169" class="rightContainer-t-component-0-14"  :name="replaceCssVariables(filterData(state.sourceRecordName, componentPropBindingMap?.['t-component-3284.d4cecd169']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tComponentx0x14ComputedData.cStyle" :src="tComponentx0x14ComputedData.src" :component-name="replaceCssVariables(filterData(state.sourceRecordName, componentPropBindingMap?.['t-component-3284.d4cecd169']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-5ded.e8a00c9f2":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-e033.b3c6f6a86":{"attributeName":"tComponentx0x1"},"t-rect-019a.c66d3b746":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4714.7a255db11":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-self-adaption-card-dd44.cecc67364":{"attributeName":"tSelfAdaptionCardx0x4","translateX":{"filters":[]},"activeItem":{"filters":[]},"alias":{"filters":[]},"titleFrontImg":{"filters":[]},"titleBelowImg":{"filters":[]},"titleMidImg":{"filters":[]},"data":{"filters":[]},"cStyle":{"filters":[]}},"t-self-adaption-card-3c28.05ba9ee56":{"attributeName":"tSelfAdaptionCardx0x5","translateX":{"filters":[]},"activeItem":{"filters":[]},"alias":{"filters":[]},"titleFrontImg":{"filters":[]},"titleBelowImg":{"filters":[]},"titleMidImg":{"filters":[]},"data":{"filters":[]},"cStyle":{"filters":[]}},"t-self-adaption-card-4300.713476c5f":{"attributeName":"tSelfAdaptionCardx0x6","translateX":{"filters":[]},"activeItem":{"filters":[]},"alias":{"filters":[]},"titleFrontImg":{"filters":[]},"titleBelowImg":{"filters":[]},"titleMidImg":{"filters":[]},"data":{"filters":[]},"cStyle":{"filters":[]}},"t-self-adaption-card-187f.984573b4d":{"attributeName":"tSelfAdaptionCardx0x7","translateX":{"filters":[]},"activeItem":{"filters":[]},"alias":{"filters":[]},"titleFrontImg":{"filters":[]},"titleBelowImg":{"filters":[]},"titleMidImg":{"filters":[]},"data":{"filters":[]},"cStyle":{"filters":[]}},"t-iframe-6ad1.644986df6":{"attributeName":"tIframex0x8","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]},"socketUrl":{"filters":[]},"roomId":{"filters":[]}},"t-iframe-d8f2.d23b85c33":{"attributeName":"tIframex0x9","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]},"socketUrl":{"filters":[]},"roomId":{"filters":[]}},"t-iframe-ed76.61addc352":{"attributeName":"tIframex0x10","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]},"socketUrl":{"filters":[]},"roomId":{"filters":[]}},"t-iframe-bbb2.ab6def9d5":{"attributeName":"tIframex0x11","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]},"socketUrl":{"filters":[]},"roomId":{"filters":[]}},"t-component-9471.b27951d76":{"attributeName":"tComponentx0x12","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-505d.49fe6f35e":{"attributeName":"tComponentx0x13","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-3284.d4cecd169":{"attributeName":"tComponentx0x14","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}}};
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
   componentSourceUpdateKey: 0,
   type: "1,2",
   TIME: "",
   ASSESSTYPE: "",
   systemRiverType: "WSYSTEM",
   wsystemRiverTime: "",
   wsystemRiverCompData: {},
   wsystemRiverComponentName: "waterSurfaceEntryComponent",
   sourceRecordParmas: "",
   sourceRecordName: "",
   showSourceRecordTab: false,
   showSourceTab: false,
   componentSourceParmas: "",
   componentSourceName: "",
   iframeRecordDetailUrl: "",
   componentName: "",
   activeMenuData: {},
   iframeSourceUrl: "",
   activeTabLast: "",
   iframePointDetailUrl: "",
   activeTab: "",
   tabList: [],
   iframeUrl: "",
   showRightMain: true,
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
            default: {"width":"470px","height":"938px","top":"0px","left":"20px","backgroundImage":"var(--right-main-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","position":"unset","backgroundColor":"rgba(228, 85, 23, 0)","pointerEvents":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"470px","height":"938px","top":"0px","left":"20px","backgroundImage":"var(--right-main-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","position":"unset","backgroundColor":"rgba(228, 85, 23, 0)","pointerEvents":"none"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"24px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--right-main-unfold)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"10px","top":"55px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--right-main-unfold)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"10px","top":"55px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--right-main-unfold-hover)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--right-main-fewer)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"10px","top":"55px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--right-main-fewer)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"10px","top":"55px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--right-main-fewer-hover)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}}, 
 },
},
tSelfAdaptionCardx0x4: {
defaultStyle: {
            default: {"position":"unset","width":"30px","height":"466px","left":"4px","top":"95px","backgroundColor":"rgba(255, 255, 255, 0)","overflow":"auto","--scrollbar-width":0},
            
            },
 default: { 
 
translateX:70,
activeItem:"",
alias:{"label":"label","value":"id"},
titleFrontImg:{"default":"var(--right-main-label1)","active":"var(--right-main-label1-hover)"},
titleBelowImg:{"default":"var(--right-main-label3)","active":"var(--right-main-label3-hover)"},
titleMidImg:{"default":"var(--right-main-label2)","active":"var(--right-main-label2-hover)"},
data:[],
cStyle:{"wrapper":{"default":{"position":"unset","width":"30px","height":"466px","left":"4px","top":"95px","backgroundColor":"rgba(255, 255, 255, 0)","overflow":"auto","--scrollbar-width":0}},"title":{"default":{"color":"var(--skin-font-color)","letterSpacing":"3px","width":"30px","fontSize":"var(--business-text-size-14)"},"active":{"color":"var(--left-menu-content-title-hover)"}},"titleFillImg":{"default":{"backgroundImage":"var(--right-main-label4)","-webkit-mask-image":""},"active":{"backgroundImage":"var(--right-main-label4-hover)","-webkit-mask-image":""}},"deleteImg":{"default":{"width":"13px","height":"13px","marginTop":"7px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-delete.png)","display":"none"},"hover":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-delete-active.png)"},"active":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-delete-active.png)"}},"titleFrontImg":{"default":{"backgroundColor":"rgba(223, 0, 0, 0)","backgroundImage":"var(--right-main-label1)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"28px"},"active":{"background":"none","backgroundImage":"var(--right-main-label1-hover)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"titleMidImg":{"default":{"height":"33px","backgroundImage":"var(--right-main-label2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"active":{"background":"none","backgroundImage":"var(--right-main-label2-hover)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"titleBelowImg":{"default":{"height":"28px","backgroundImage":"var(--right-main-label3)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"active":{"background":"none","backgroundImage":"var(--right-main-label3-hover)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"textContainer":{"default":{"fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tSelfAdaptionCardx0x5: {
defaultStyle: {
            default: {"position":"unset","width":"30px","height":"92px","left":"4px","top":"576px","backgroundColor":"rgba(255, 255, 255, 0)","overflow":"auto","--scrollbar-width":0,"animationName":""},
            
            },
 default: { 
 
translateX:70,
activeItem:"",
alias:{"label":"label","value":"id"},
titleFrontImg:{"default":"","active":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-top-active.png"},
titleBelowImg:{"default":"","active":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-bottom-active.png"},
titleMidImg:{"default":"","active":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-middle-active.png"},
data:[{"label":"详情","id":"pointDetail"}],
cStyle:{"wrapper":{"default":{"position":"unset","width":"30px","height":"92px","left":"4px","top":"576px","backgroundColor":"rgba(255, 255, 255, 0)","overflow":"auto","--scrollbar-width":0,"animationName":""}},"title":{"default":{"color":"#D8FFE9","letterSpacing":"3px","width":"30px","fontSize":"14px"},"active":{"color":"#FFF5B1"}},"titleFillImg":{"default":{"backgroundImage":"var(--right-main-label4)","-webkit-mask-image":""},"active":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-fill-active.png)"}},"deleteImg":{"default":{"width":"13px","height":"13px","marginTop":"7px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-delete.png)","display":"none"},"hover":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-delete-active.png)"},"active":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-delete-active.png)"}},"titleFrontImg":{"default":{"backgroundColor":"rgba(223, 0, 0, 0)","backgroundImage":"var(--right-main-label1)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"28px"},"active":{"background":"none"}},"titleMidImg":{"default":{"height":"33px","backgroundImage":"var(--right-main-label2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"active":{"background":"none"}},"titleBelowImg":{"default":{"height":"28px","backgroundImage":"var(--right-main-label3)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"active":{"background":"none"}}}, 
 },
},
tSelfAdaptionCardx0x6: {
defaultStyle: {
            default: {"position":"unset","width":"30px","height":"92px","left":"4px","top":"668px","backgroundColor":"rgba(255, 255, 255, 0)","overflow":"auto","--scrollbar-width":0,"animationName":""},
            
            },
 default: { 
 
translateX:70,
activeItem:"",
alias:{"label":"label","value":"id"},
titleFrontImg:{"default":"","active":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-top-active.png"},
titleBelowImg:{"default":"","active":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-bottom-active.png"},
titleMidImg:{"default":"","active":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-middle-active.png"},
data:[{"label":"溯源","id":"source"}],
cStyle:{"wrapper":{"default":{"position":"unset","width":"30px","height":"92px","left":"4px","top":"668px","backgroundColor":"rgba(255, 255, 255, 0)","overflow":"auto","--scrollbar-width":0,"animationName":""}},"title":{"default":{"color":"#D8FFE9","letterSpacing":"3px","width":"30px","fontSize":"14px"},"active":{"color":"#FFF5B1"}},"titleFillImg":{"default":{"backgroundImage":"var(--right-main-label4)","-webkit-mask-image":""},"active":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-fill-active.png)"}},"deleteImg":{"default":{"width":"13px","height":"13px","marginTop":"7px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-delete.png)","display":"none"},"hover":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-delete-active.png)"},"active":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-delete-active.png)"}},"titleFrontImg":{"default":{"backgroundColor":"rgba(223, 0, 0, 0)","backgroundImage":"var(--right-main-label1)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"28px"},"active":{"background":"none"}},"titleMidImg":{"default":{"height":"33px","backgroundImage":"var(--right-main-label2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"active":{"background":"none"}},"titleBelowImg":{"default":{"height":"28px","backgroundImage":"var(--right-main-label3)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"active":{"background":"none"}}}, 
 },
},
tSelfAdaptionCardx0x7: {
defaultStyle: {
            default: {"position":"unset","width":"30px","height":"92px","left":"4px","top":"759px","backgroundColor":"rgba(255, 255, 255, 0)","overflow":"auto","--scrollbar-width":0,"animationName":""},
            
            },
 default: { 
 
translateX:70,
activeItem:"",
alias:{"label":"label","value":"id"},
titleFrontImg:{"default":"","active":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-top-active.png"},
titleBelowImg:{"default":"","active":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-bottom-active.png"},
titleMidImg:{"default":"","active":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-middle-active.png"},
data:[{"label":"记录","id":"sourceRecordDetail"}],
cStyle:{"wrapper":{"default":{"position":"unset","width":"30px","height":"92px","left":"4px","top":"759px","backgroundColor":"rgba(255, 255, 255, 0)","overflow":"auto","--scrollbar-width":0,"animationName":""}},"title":{"default":{"color":"#D8FFE9","letterSpacing":"3px","width":"30px","fontSize":"14px"},"active":{"color":"#FFF5B1"}},"titleFillImg":{"default":{"backgroundImage":"var(--right-main-label4)","-webkit-mask-image":""},"active":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-fill-active.png)"}},"deleteImg":{"default":{"width":"13px","height":"13px","marginTop":"7px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-delete.png)","display":"none"},"hover":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-delete-active.png)"},"active":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/trigger-menu/menu-delete-active.png)"}},"titleFrontImg":{"default":{"backgroundColor":"rgba(223, 0, 0, 0)","backgroundImage":"var(--right-main-label1)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"28px"},"active":{"background":"none"}},"titleMidImg":{"default":{"height":"33px","backgroundImage":"var(--right-main-label2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"active":{"background":"none"}},"titleBelowImg":{"default":{"height":"28px","backgroundImage":"var(--right-main-label3)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"active":{"background":"none"}}}, 
 },
},
tIframex0x8: {
defaultStyle: {
            default: {"width":"432px","height":"880px","position":"unset","left":"42px","top":"46px","backgroundColor":"rgba(23, 62, 228, 0)"},
            
            },
 default: { 
 
src:"",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"432px","height":"880px","position":"unset","left":"42px","top":"46px","backgroundColor":"rgba(23, 62, 228, 0)"}}},
socketUrl:"/socketPath",
roomId:"admin", 
 },
},
tIframex0x9: {
defaultStyle: {
            default: {"width":"432px","height":"880px","position":"unset","left":"42px","top":"46px","backgroundColor":"rgba(23, 62, 228, 0)","animationName":""},
            
            },
 default: { 
 
src:"",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"432px","height":"880px","position":"unset","left":"42px","top":"46px","backgroundColor":"rgba(23, 62, 228, 0)","animationName":""}}},
socketUrl:"/socketPath",
roomId:"admin", 
 },
},
tIframex0x10: {
defaultStyle: {
            default: {"width":"432px","height":"880px","position":"unset","left":"42px","top":"46px","backgroundColor":"rgba(23, 62, 228, 0)","animationName":""},
            
            },
 default: { 
 
src:"",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"432px","height":"880px","position":"unset","left":"42px","top":"46px","backgroundColor":"rgba(23, 62, 228, 0)","animationName":""}}},
socketUrl:"/socketPath",
roomId:"admin", 
 },
},
tIframex0x11: {
defaultStyle: {
            default: {"width":"432px","height":"880px","position":"unset","left":"34px","top":"37px","backgroundColor":"rgba(23, 62, 228, 0)","animationName":""},
            
            },
 default: { 
 
src:"",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"432px","height":"880px","position":"unset","left":"34px","top":"37px","backgroundColor":"rgba(23, 62, 228, 0)","animationName":""}}},
socketUrl:"/socketPath",
roomId:"admin", 
 },
},
tComponentx0x12: {
defaultStyle: {
            default: {"width":"450px","height":"900px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","left":"34px","top":"35px","position":"unset"},
            
            },
 default: { 
 
name:"",
cStyle:{"wrapper":{"default":{"width":"450px","height":"900px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","left":"34px","top":"35px","position":"unset"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/",
componentName:"", 
 },
},
tComponentx0x13: {
defaultStyle: {
            default: {"width":"450px","height":"900px","margin":"0 auto","backgroundColor":"rgba(182, 15, 15, 0)","left":"34px","top":"37px","position":"unset","animationName":""},
            
            },
 default: { 
 
name:"",
cStyle:{"wrapper":{"default":{"width":"450px","height":"900px","margin":"0 auto","backgroundColor":"rgba(182, 15, 15, 0)","left":"34px","top":"37px","position":"unset","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/",
componentName:"", 
 },
},
tComponentx0x14: {
defaultStyle: {
            default: {"width":"450px","height":"904px","margin":"0 auto","backgroundColor":"rgba(243, 0, 0, 0)","left":"33px","top":"33px","position":"unset","animationName":""},
            
            },
 default: { 
 
name:"",
cStyle:{"wrapper":{"default":{"width":"450px","height":"904px","margin":"0 auto","backgroundColor":"rgba(243, 0, 0, 0)","left":"33px","top":"33px","position":"unset","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/",
componentName:"", 
 },
},
});
const setPageSize = () => {
// 右侧面板dom
const rightHtmlDom = document.getElementById('t-component-39c5.147ea931d');
// 指标容器dom
const targetHtmlDom = document.getElementById('t-component-bd71.20fa4d87e');
// 点位选择的容器dom
const pointChooseDom = document.getElementById('t-component-2111.40f7efb23');

if (state.showRightMain) {
  // 展开状态
  rightHtmlDom.style.width = '500px';
  rightHtmlDom.style.left = '1395px';
  rightHtmlDom.style.overflow = 'inherit';

  targetHtmlDom.style.left = '1330px';
  pointChooseDom.style.left = '1330px';
} else {
  // 收起状态
  rightHtmlDom.style.width = '33px';
  rightHtmlDom.style.left = '1863px';
  rightHtmlDom.style.overflow = 'hidden';

  targetHtmlDom.style.left = '1800px';
  pointChooseDom.style.left = '1800px';
}
};
const updateTabListStatus = (type,operation,data) => {
/**
 * 更新标签栏的数据及标签高亮状态
 */

console.log(data, operation, type, '选中的专题000000', global.regionaQuery.regionType);
if (!Array.isArray(data)) {
  return;
}

if (operation !== 'highlight') {
  // 选中的菜单传给右屏的数据，记录一下，用于区域选择发生变化时右屏链接的判断
  state.activeMenuData = {
    data,
    operation,
    type
  };

  // 选中最后一次选中的专题id
  state.activeTab = state.activeTabLast;
  // 点位详情地址置空
  state.iframePointDetailUrl = '';
  // 溯源地址置空
  state.iframeSourceUrl = '';
  state.componentSourceName = '';
  // 关闭溯源页签
  state.showSourceTab = false;
  // 显示专题的iframe
  setiframeVisible('zt');
  // 溯源记录地址置空
  state.iframeRecordDetailUrl = '';
  state.sourceRecordName = '';
  // 关闭溯源记录页签
  state.showSourceRecordTab = false;
}

// 图层的iframe链接
const layerIframeUrl = '/view/view/show/index.vm?screenId=4b3e3943cf8a89ca6255fcde08034d5b';

// 字段映射
const fieldsMap = {
  // 专题
  subject: {
    id: 'RES_ID',
    label: 'RES_NAME',
    url: 'MENU_URL',
  },
  // 图层
  layer: {
    id: 'RES_ID',
    label: 'RES_NAME',
    url: 'MENU_URL',
  },
  // 专题
  home: {
    id: 'RES_ID',
    label: 'RES_NAME',
    url: 'MENU_URL',
  },
};

// 当前的字段映射
const currentFieldsMap = fieldsMap[type];

// 当前消息传入数据的ID值
const currentDataIds = data.map((val) => val[currentFieldsMap.id]);

// 区域编码（仅选择非行政区，即重点区域和自定义区域的时候才有值）
const areaCode = global.regionaQuery.regionType === 'region' ? '' : global.regionaQuery.areaCode;

switch (operation) {
  /* 添加 */
  case 'add':
    /* 若原来不存在 */
    data.forEach((item) => {
      if (!state.tabList.find((val) => val.id === item[currentFieldsMap.id])) {
        let url = '';
        // iframe的url 专题的有，图层的固定
        // if (['subject'].includes(type) && item[currentFieldsMap.url]) {
        if (item[currentFieldsMap.url].includes('http')) {
          // 完整的右屏链接
          url = `${item[currentFieldsMap.url]}&REGION_CODE=${global.regionaQuery.regionCode}&AREA_CODE=${areaCode}`
        } else {
          // lego内部页面
          url = item[currentFieldsMap.url];
        }
        // } else if (type === 'layer') {
        //   // 图层的右侧页面，暂时弃用了，没有这个需求了
        //   url = `${layerIframeUrl}&REGION_CODE=${global.regionaQuery.regionCode}&AREA_CODE=${areaCode}`
        // }
        if (url) {
          state.tabList.unshift({
            id: item[currentFieldsMap.id],
            label: item[currentFieldsMap.label],
            url: url,
            // 原始数据
            rawData: item,
            type
          });
        }
      }
    });
    break;
  /* 移除 */
  case 'remove':
    data.forEach((item) => {
      const index = state.tabList.findIndex((val) => item[currentFieldsMap.id] === val.id);
      if (index > -1) {
        state.tabList.splice(index, 1);
      }
    });

    /* 若有其他标签，则高亮第一项 */
    if (state.tabList.length) {
      // 专题
      if (type === 'subject') {
        state.activeTabLast = state.tabList[0].id;
      }
      state.activeTab = state.tabList[0].id;
      // 右屏链接地址，默认的url
      let url = state.tabList[0].url;
      if (url && url.includes('http')) {
          try {
            // 根据扩展字段判断最终显示的url是省份url、还是城市url
            const ext1 = state.tabList[0].EXT1 ? JSON.parse(state.tabList[0].EXT1) : '';
            // console.log(ext1, 'ext1');
            if (ext1) {
              // 获取选中的区域编码的类型
              const type = getRegionCodeType(global.regionaQuery.regionCode);
              if (type === 'province' && ext1.provice) {
                //省份 provice
                url = ext1.provice;
              } else if ((type === 'city' || type === 'country') && ext1.city) {
                //城市、区县 city
                url = ext1.city;
              }
            }
          } catch (err) {
            console.error(err);
          }
          state.iframeUrl = url ? `${url}&REGION_CODE=${global.regionaQuery.regionCode}&AREA_CODE=${areaCode}` : '';
          // 清空lego内部页面名称
          state.componentName = '';
        } else {
          // 设置lego内部页面名称
          state.componentName = `${url}Component`;
          // iframe的链接清空
          state.iframeUrl = '';
        }
    }
    break;
  /* 高亮 */
  case 'highlight':
    if (data.length === 1) {
      // 专题
      if (type === 'subject') {
        state.activeTabLast = data[0][currentFieldsMap.id];
      }
      state.activeTab = data[0][currentFieldsMap.id];

      // 判断type等于专题subject还是图层layer
      if (type === 'subject' || type === 'layer') {
        // 右屏链接地址，默认的url
        let url = data[0][currentFieldsMap.url];
        if (url && url.includes('http')) {
            try {
              // 根据扩展字段判断最终显示的url是省份url、还是城市url
              const ext1 = data[0].EXT1 ? JSON.parse(data[0].EXT1) : '';
              // console.log(ext1, 'ext1');
              if (ext1) {
                // 获取选中的区域编码的类型
                const type = getRegionCodeType(global.regionaQuery.regionCode);
                if (type === 'province' && ext1.provice) {
                  //省份 provice
                  url = ext1.provice;
                } else if ((type === 'city' || type === 'country') && ext1.city) {
                  //城市、区县 city
                  url = ext1.city;
                }
              }
            } catch (err) {
              console.error(err);
            }
            state.iframeUrl = url ? `${url}&REGION_CODE=${global.regionaQuery.regionCode}&AREA_CODE=${areaCode}` : '';
            // 清空lego内部页面名称
            state.componentName = '';
          } else {
            // 设置lego内部页面名称
            state.componentName = `${url}Component`;
            // iframe的链接清空
            state.iframeUrl = '';
          }

        // // 临时给大气页面赋值
        // if (state.activeTab === 'bbaf9ce4-c039-4118-9d27-0f2fb2e641ec') {
        //   // 设置lego内部页面名称
        //   state.componentName = `airEntryComponent`;
        //   // iframe的链接清空
        //   state.iframeUrl = '';
        // }
      } else if (type === 'home') {
        /* 若是首页 */
        let url = '';
        try {
          // 根据扩展字段判断最终显示的url是省份url、还是城市url
          const ext1 = data[0].EXT1 ? JSON.parse(data[0].EXT1) : '';
          // console.log(ext1, 'ext1');
          // if (ext1 && global.regionaQuery.regionType === 'region') {
          if (ext1) {
            // 获取选中的区域编码的类型
            url = ext1.appURL;
          }
        } catch (err) {
          console.error(err);
        }

        // 默认的url
        state.iframeUrl = url ? `${url}&REGION_CODE=${global.regionaQuery.regionCode}&AREA_CODE=${areaCode}` : '';
        // 清空lego内部页面名称
        state.componentName = '';
      }
      // else if (type === 'layer') {
      //   // 设置iframe的链接
      //   state.iframeUrl = layerIframeUrl;

      //   
      // }

      if (state.iframeUrl) {
        try {
          // 处理iframe的链接地址中是否有和缓存中的字段名一致的，有则把字段名的值替换为缓存中的值
          let airConfig = localStorage.getItem('airConfig');
          if (airConfig) {
            airConfig = JSON.parse(airConfig);
            Object.keys(airConfig).forEach((key) => {
              const replaceText = airConfig[key];
              state.iframeUrl = state.iframeUrl.replace("#" + key + "#", replaceText);
            })
          }
        } catch (err) {
          console.error(err);
        }
      }

      // if (type !== 'layer') {
      // 关闭lego里的弹窗

      // 如果专题是大气环境，多加一个大气分析的页签
      if (type === 'subject') {
        if (data[0].RES_NAME === '大气环境') {
          if (!state.tabList.filter(item => item.id === '大气分析').length) {
            state.tabList.push({
              id: '走航任务',
              label: '走航任务',
              url: 'roadTask',
            })
            state.tabList.push({
              id: '航拍数据',
              label: '航拍数据',
              url: 'aerialData',
            })
            state.tabList.push({
              id: '大气分析',
              label: '分析',
              url: 'airAnalysis',
            });
          }
        }
      }
      global.businessDialog.dialogName = '';
      // }
    }
    break;
  default: break;
}
if (state.iframeUrl) {
  // 更新iframe的滚动条样式
  changeIframeScrollbarStyle();
}

console.log(state.tabList, state.activeTab, '更新右侧容器数据')
global.leftSubjectActiveMenu = state.tabList[0]?.label || ''
global.leftSubjectActiveMenuList = state.tabList;

};
const resetTabData = () => {
/**
 * 重置标签栏数据
 */
state.tabList = [];
state.iframeVisible = false;
state.activeTab = '';
state.activeTabLast = '';
// 专题的iframe地址置空-------------------
state.iframeUrl = '';
// lego内部页面名置空
state.componentName = '';

// 点位详情地址置空-------------------------
state.iframePointDetailUrl = '';

// 溯源地址置空--------------------------
state.iframeSourceUrl = '';
state.componentSourceName = '';
// 关闭溯源页签
state.showSourceTab = false;

// 溯源记录地址置空------------------------------
state.iframeRecordDetailUrl = '';
state.sourceRecordName = '';
// 关闭溯源记录页签
state.showSourceRecordTab = false;

};
const setiframeVisible = (showType) => {
// 设置iframe 的显隐

// 专题的iframe
const ztHtmlDom = document.getElementById('t-iframe-6ad1.644986df6');
// 点位详情的iframe
const pointHtmlDom = document.getElementById('t-iframe-d8f2.d23b85c33');
// 溯源的iframe
const sourceHtmlDom = document.getElementById('t-iframe-ed76.61addc352');
// 溯源的记录点位详情的iframe
const sourceRecordDetailHtmlDom = document.getElementById('t-iframe-bbb2.ab6def9d5');

// lego内部专题的id  
const lgHtmlDom = document.getElementById('t-component-9471.b27951d76');
// lego内部溯源的id
const lgSourceHtmlDom = document.getElementById('t-component-505d.49fe6f35e');
// lego内部溯源记录的id
const lgSourceRecordHtmlDom = document.getElementById('t-component-3284.d4cecd169');


if (showType === 'zt') {// 显示专题
// 显示专题
  if (ztHtmlDom) {
    ztHtmlDom.style.display = 'block';
  }
  if (lgHtmlDom) {
    lgHtmlDom.style.display = 'block';
  }
  // 隐藏点位
  if (pointHtmlDom) {
    pointHtmlDom.style.display = 'none';
  }
  //隐藏溯源
  if (sourceHtmlDom) {
    sourceHtmlDom.style.display = 'none';
  }
  if(lgSourceHtmlDom){
    lgSourceHtmlDom.style.display = 'none';
  }
  // 隐藏溯源记录
  if (sourceRecordDetailHtmlDom) {
    sourceRecordDetailHtmlDom.style.display = 'none';
  }
  if (lgSourceRecordHtmlDom) {
    lgSourceRecordHtmlDom.style.display = 'none';
  }
} else if (showType === 'pointDetail') { // 显示点位详情
// 隐藏专题
  if (ztHtmlDom) {
    ztHtmlDom.style.display = 'none';
  }
  if (lgHtmlDom) {
    lgHtmlDom.style.display = 'none';
  }
  // 显示点位
  if (pointHtmlDom) {
    pointHtmlDom.style.display = 'block';
  }
  //隐藏溯源
  if (sourceHtmlDom) {
    sourceHtmlDom.style.display = 'none';
  }
  if(lgSourceHtmlDom){
    lgSourceHtmlDom.style.display = 'none';
  }
  // 隐藏溯源记录
  if (sourceRecordDetailHtmlDom) {
    sourceRecordDetailHtmlDom.style.display = 'none';
  }
  if (lgSourceRecordHtmlDom) {
    lgSourceRecordHtmlDom.style.display = 'none';
  }
} else if (showType === 'source') {// 显示溯源
// 隐藏专题
  if (ztHtmlDom) {
    ztHtmlDom.style.display = 'none';
  }
  if (lgHtmlDom) {
    lgHtmlDom.style.display = 'none';
  }
  //隐藏点位
  if (pointHtmlDom) {
    pointHtmlDom.style.display = 'none';
  }
  // 显示溯源
  if (sourceHtmlDom) {
    sourceHtmlDom.style.display = 'block';
  }
  if(lgSourceHtmlDom){
    lgSourceHtmlDom.style.display = 'block';
  }
  // 隐藏溯源记录
  if (sourceRecordDetailHtmlDom) {
    sourceRecordDetailHtmlDom.style.display = 'none';
  }
  if (lgSourceRecordHtmlDom) {
    lgSourceRecordHtmlDom.style.display = 'none';
  }

     // 右侧面板的智慧推荐按钮： 隐藏
  observeAndHideSmartRecommendation()

//   setTimeout(() => {
//     // 右侧面板的智慧推荐按钮
// const zhtjTabBtn = document.querySelector('#t-tabs-base-a061\\.6750724ea ul li[title="智慧推荐"]')
//   console.log('zhtjTabBtn', zhtjTabBtn)
//   // 隐藏智慧推荐
//   if(zhtjTabBtn) {

//     zhtjTabBtn.style.display = 'none'
//   }
//   }, 500)

  
} else if (showType === 'sourceRecordDetail') {
  /* 溯源的记录点位详情的iframe */
  // 隐藏专题
  if (ztHtmlDom) {
    ztHtmlDom.style.display = 'none';
  }
  if (lgHtmlDom) {
    lgHtmlDom.style.display = 'none';
  }
  // 隐藏点位
  if (pointHtmlDom) {
    pointHtmlDom.style.display = 'none';
  }
  // 隐藏溯源
  if (sourceHtmlDom) {
    sourceHtmlDom.style.display = 'none';
  }
  if(lgSourceHtmlDom){
    lgSourceHtmlDom.style.display = 'none';
  }
  // 显示溯源记录
  if (sourceRecordDetailHtmlDom) {
    sourceRecordDetailHtmlDom.style.display = 'block';
  }
  if (lgSourceRecordHtmlDom) {
    lgSourceRecordHtmlDom.style.display = 'block';
  }
}
};
const clickTab = (item) => {
// 点击专题标签
console.log(item);

// 点击的是专题
if (item.type === 'subject') {
  state.activeTabLast = item.id;
}

if (item.id !== state.activeTab || item.id !== state.activeTabLast) {
  /* 发送socket消息 */
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "activeSpecial", // 消息名称
    data: item, // 发送的数据
  });
}

// 选择的不是专题时需要发消息和控制显隐
if (state.activeTab === 'pointDetail' || state.activeTab === 'source' || state.activeTab === 'sourceRecordDetail') {
  state.activeTab = item.id;
  // 设置iframe显隐
  setiframeVisible('zt');
} else {
  state.activeTab = item.id;
}
};
const watchRegionType = () => {
/**
 * 监听区域选择的改变
 */
watch(() => [global.regionaQuery.regionCode, global.regionaQuery.areaCode], () => {
  const { type, operation, data } = state.activeMenuData;
  // 更新右侧url
  updateTabListStatus(type, operation, data);
}, {
  deep: true, // 深度监听
});

console.log(inject, 2220)
};
const getRegionCodeType = (regionCode) => {
// 判断区域编码的类型（省市县）
let type;
if (regionCode.substr(4, 2) !== '00') {//县
  type = 'country';
} else if (regionCode.substr(2, 2) !== '00') {//市
  type = 'city';
} else { //省
  type = 'province';
}
return type;
};
const onWebSocketMsg = (data) => {
// 设置接收地图消息-----------------
console.log(data, '接收地图点位详情', state.activeTabLast);
for (const message of data) {
	const shareCode = message.shareCode;
	if (shareCode === 'showPointDetail') {
		// 显示点位详情------------------------
		state.iframePointDetailUrl = global.serviceBaseUrl + message.url;

		state.activeTab = 'pointDetail';
		// 设置iframe显隐
		setiframeVisible('pointDetail');
		// 调整点位详情iframe样式
		changeIframeScrollbarStyle();
	} else if (shareCode === 'showTraceDetail') {
		// 显示大气溯源---------------
		const msg = message;
		if (!message.componentName) {
			// 兼容老大屏
			let url = '';
			//数据类型：小时，判断是否告警
			if (msg.isShowAlarmFlag) {
				var endTime = msg.endTime ? msg.endTime : '';
				var count_id = msg.count_id ? msg.count_id : '';
				url = 'screenId=f18e26713e417bdd64d0d04fd25bdf16&alarmTime=' + msg.alarmTime + '&endTime=' + endTime + '&COUNT_ID=' + count_id;
			} else {
				url = 'screenId=a6a0b7aa5c228e48f9848cd4c74a70dd&alarmTime=' + msg.alarmTime + ' &aqiLevel=' + msg.aqiLevel + '&primPollute=' + msg.primPollute + '&polluteLevel=' + msg.polluteLevel;
			}
			state.iframeSourceUrl = global.serviceBaseUrl + '/view/view/show/index.vm?' + url;
		} else {
			// lego内部溯源页面
			state.componentSourceParmas = message.componentParmas;
			state.componentSourceName = message.componentName;
		}

		// 显示溯源页签
		state.showSourceTab = true;
		// 当前选择的页签
		state.activeTab = 'source';
		// 设置iframe显隐
		setiframeVisible('source');
		// 调整溯源iframe样式
		changeIframeScrollbarStyle();
	} else if (shareCode === 'showSurroundingsAnalysis') {
		// 显示周边分析页面
		state.componentSourceParmas = message.componentParmas;
		state.componentSourceName = message.componentName;

		// 显示溯源页签
		state.showSourceTab = true;
		// // 当前选择的页签
		// state.activeTab = 'source';
		// // 设置iframe显隐
		// setiframeVisible('source');
		// 调整溯源iframe样式
		// changeIframeScrollbarStyle();
	} else if (shareCode === 'showWaterTraceDetail') {
		// 显示水溯源
		if (!message.componentName && message.traceDetailUrl) {
			// 兼容老大屏
			state.iframeSourceUrl = global.serviceBaseUrl + message.traceDetailUrl;
		} else {
			// lego内部溯源页面
			state.componentSourceUpdateKey += 1;
			state.componentSourceParmas = message.componentParmas;
			state.componentSourceName = message.componentName;
		}

		// 显示溯源页签
		state.showSourceTab = true;
		// 当前选择的页签
		state.activeTab = 'source';
		// 设置iframe显隐
		setiframeVisible('source');
		// 调整点位详情iframe样式
		changeIframeScrollbarStyle();
	} else if (shareCode === 'hiddenTraceDetail') {
		// 隐藏大气溯源/水溯源，显示点位详情或专题---------
		state.iframeSourceUrl = '';
		// 隐藏lego内部溯源页面
		state.componentSourceName = '';
		// 关闭溯源页签
		state.showSourceTab = false;
		// 隐藏溯源的报警记录详情页
		state.iframeRecordDetailUrl = '';
		// 关闭溯源记录页签
		state.showSourceRecordTab = false;

		// 判断点位详情链接是否存在，存在则返回点位详情，不存在则返回专题
		if (state.iframePointDetailUrl) {
			state.activeTab = 'pointDetail';
			// 设置iframe显隐
			setiframeVisible('pointDetail');
		} else {
			// 选中最后一次选中的专题id
			state.activeTab = state.activeTabLast;
			// 设置iframe显隐
			setiframeVisible('zt');
		}
		// 调整溯源iframe样式
		changeIframeScrollbarStyle();
	} else if (shareCode === 'hiddenSurroundingsAnalysis') {
		// 隐藏大气溯源/水溯源，显示点位详情或专题---------
		state.iframeSourceUrl = '';
		// 隐藏lego内部溯源页面
		state.componentSourceName = '';
		// 关闭溯源页签
		state.showSourceTab = false;
		// 隐藏溯源的报警记录详情页
		state.iframeRecordDetailUrl = '';
		// 关闭溯源记录页签
		state.showSourceRecordTab = false;

		// 判断点位详情链接是否存在，存在则返回点位详情，不存在则返回专题
		if (state.iframePointDetailUrl) {
			state.activeTab = 'pointDetail';
			// 设置iframe显隐
			setiframeVisible('pointDetail');
		} else {
			// 选中最后一次选中的专题id
			state.activeTab = state.activeTabLast;
			// 设置iframe显隐
			setiframeVisible('zt');
		}
		// 调整溯源iframe样式
		// changeIframeScrollbarStyle();
	} else if (shareCode === 'showRecordDetail') {
		// 显示溯源的记录详情页
		if (!message.componentName) {
			// 兼容老大屏
			state.iframeRecordDetailUrl = global.serviceBaseUrl + '/view/view/show/index.vm?screenId=b41ad32ae3b1908b0dbe513a66be35a2';
		} else {
			// lego内部溯源记录页面
			state.sourceRecordParmas = message.componentParmas;
			state.sourceRecordName = message.componentName;
		}

		// 显示溯源记录页签
		state.showSourceRecordTab = true;
		// 当前选择的页签
		state.activeTab = 'sourceRecordDetail';
		// 设置iframe显隐
		setiframeVisible('sourceRecordDetail');
		// 调整点位详情iframe样式
		changeIframeScrollbarStyle();
	} else if (shareCode === 'hiddenRecordDetail') {
		// 隐藏溯源的报警记录详情页
		state.iframeRecordDetailUrl = '';
		state.sourceRecordName = '';
		// 关闭溯源记录页签
		state.showSourceRecordTab = false;
		// 当前选择的页签
		state.activeTab = 'source';
		// 设置iframe显隐
		setiframeVisible('source');
		// 调整溯源iframe样式
		changeIframeScrollbarStyle();
	} else if (shareCode === 'rightContent') {
		// 显示点位详情------------------------
		state.iframePointDetailUrl = global.webSocketUrl + message.runtimeValue;
		state.activeTab = 'pointDetail';
		// 设置iframe显隐
		setiframeVisible('pointDetail');
	} else if (shareCode === 'hiddenPointDetail' || shareCode === 'hiddenDetailIframe') {
		// 隐藏溯源的记录详情页
		state.iframePointDetailUrl = '';
		// 设置iframe显隐
		setiframeVisible('zt');
	} else if (shareCode === 'AREA_CODE' || shareCode === 'REGION_CODE' || shareCode === 'WSYSTEM_CODE') {
		// // 隐藏溯源的记录详情页
		// state.iframePointDetailUrl = '';
		// // 设置iframe显隐
		// setiframeVisible('zt');
	}
}
};
const changeIframeScrollbarStyle = () => {
setTimeout(() => {
  // 点位详情iframe组件
  const iframeComponent = document.getElementById('t-iframe-6ad1.644986df6');
  if (iframeComponent) {
    const iframeHtml = iframeComponent.querySelector('iframe');
    // 重新设置iframe的宽度
    iframeHtml.width = '450px';
    iframeHtml.onload = () => {
      // 修改专题iframe的样式
      changeDomScrollbarStyle(iframeHtml);
    }
  }

  // 点位详情iframe组件
  const pointDetailIframeComponent = document.getElementById('t-iframe-d8f2.d23b85c33');
  if (pointDetailIframeComponent) {
    const pointDetailIframeHtml = pointDetailIframeComponent.querySelector('iframe');
    // 重新设置iframe的宽度
    pointDetailIframeHtml.width = '450px';
    pointDetailIframeHtml.onload = () => {
      // 修改点位详情iframe的样式
      changeDomScrollbarStyle(pointDetailIframeHtml);
    }
  }

  // 溯源详情iframe组件
  const traceIframeComponent = document.getElementById('t-iframe-ed76.61addc352');
  if (traceIframeComponent) {
    const traceIframeHtml = traceIframeComponent.querySelector('iframe');
    // 重新设置iframe的宽度
    traceIframeHtml.width = '450px';
    traceIframeHtml.onload = () => {
      // 溯源点位详情iframe的样式
      changeDomScrollbarStyle(traceIframeHtml);
    }
  }

  // 溯源记录详情iframe组件
  const traceDetailIframeComponent = document.getElementById('t-iframe-bbb2.ab6def9d5');
  if (traceDetailIframeComponent) {
    const traceDetailIframeHtml = traceDetailIframeComponent.querySelector('iframe');
    // 重新设置iframe的宽度
    traceDetailIframeHtml.width = '450px';
    traceDetailIframeHtml.onload = () => {
      // 溯源点位详情iframe的样式
      changeDomScrollbarStyle(traceDetailIframeHtml);
    }
  }
})
};
const changeDomScrollbarStyle = (iframeHtml) => {
if (iframeHtml) {
  const iframeWindow = iframeHtml.contentWindow;
  const iframeDocument = iframeWindow.document;
  const style = iframeDocument.createElement('style');
  // 设置滚动条样式
  style.innerHTML = `
    /* 隐藏滚动条 */
    ::-webkit-scrollbar {
      display: none;
    }
  `;
  setTimeout(() => {
    // 将生成的样式添加到页面中
    iframeDocument.head.appendChild(style);

    setTimeout(() =>{
      // 获取当前iframe上的所有iframe
      const childIframe = iframeDocument.querySelectorAll('iframe');
      const childIframeList = [...childIframe];
      if (childIframeList.length) {
        childIframeList.forEach((iframeDom) => {
          // 递归遍历iframe下嵌套的所有iframe，改变所有iframe的样式
          changeDomScrollbarStyle(iframeDom);
        });
      }
    }, 100);
  })
}
};
const setProvider = () => {
// 向下传递溯源参数
provide('sourceParmasState', computed(() => state));
// 向下传递溯源更新key
provide('componentSourceUpdateKey', computed(() => state.componentSourceUpdateKey));

// 向下传递流域详情参数
provide('wsystemRiverCompDataState', state);

// 向下传递地表水筛选参数
provide('surfaceWaterParamsState', state);
};
const changeRightContainer = (data,type,isShow) => {

// 页面map，类型-页面名称键值对
const pageMap = {
  "WATER": "hcxqContentComponent", // 河涌详情
  "WSYSTEM": "watershedDetailsEnterNewComponent", // 流域详情
  "drinkWaterEntry": "waterDrinkEntryComponent", // 饮用水-水源地保护区详情面板
  "drinkWater": "drinkWaterMapDetailComponent", // 饮用水入口页
  "surroundingsAnalysis": "surroundingsAnalysisComponent", // 周边分析
  "fireworks": "fireworksContentComponent", // 烟花爆竹入口
  "waterTraceabilityContent": "waterTraceabilityContentComponent", // 溯源入口
}

// 不是地表水、饮用水、流域、河涌页面，直接返回
console.log('不是地表水、流域、河涌页面直接返回', [state.wsystemRiverComponentName, ...Object.values(pageMap)], state.componentName);
console.log('不是地表水、流域、河涌页面直接返回', data, type, isShow);
if (![state.wsystemRiverComponentName, ...Object.values(pageMap)].includes(state.componentName)) return

// 隐藏流域、河涌
if (!isShow) {
  state.systemRiverType = ""
  state.wsystemRiverCompData = null
  // 如果是饮用水地图详情返回，就展示饮用水入口页，否则展示地表水入口页
  state.componentName = type === 'drinkWater' ? 'waterDrinkEntryComponent' : state.wsystemRiverComponentName
  return;
}

// 20251017 在饮用水菜单下，切换行政区为流域，或者只切换行政区，应该切换右侧面板数据，而不切换右侧面板组件(这个功能和下面两行代码有关系)
// 20251014 在饮用水菜单下，点击河流，需要切换右侧面板为饮用水河流详情(这个功能和下面两行代码没有关系)
const isDrinkHomeChangeWsystem = state.componentName === 'waterDrinkEntryComponent' && type === 'WSYSTEM';
if (isDrinkHomeChangeWsystem) return;

// 数据
state.systemRiverType = type;
state.wsystemRiverCompData = data

if (state.systemRiverType === "WSYSTEM") {
  global.regionaQuery.regionType = "wsystem";
  global.regionaQuery.areaCode = data.WSYSTEM_CODE
  global.regionaQuery.areaName = data.WSYSTEM_NAME
}

if (!state.wsystemRiverComponentName) {
  state.wsystemRiverComponentName = "waterSurfaceEntryComponent"
}
state.componentName = pageMap[type]
console.log('最终展示的组件', state.componentName);
};
const onSocket = () => {
rootData.rootOn('rootSocket:change', (socket) => {
  // 在地图上点击了流域，就要展示流域详情面板
  if (socket.type === "selectWSYSTEM") {
    const { data } = socket;
    if (data.selected === "WSYSTEM_CODE" && data.WSYSTEM_CODE) {
      changeRightContainer(data, "WSYSTEM", true)
    }
  };
  // 在地图上点击了饮用水河流，就要展示水源地保护区详情面板
  if (socket.type === "selectDrinkWater") {
    const { data } = socket;
    global.businessDialog.dialogParmas = {
      rowInfo: {
        DRINK_NAME: data?.DRINK_NAME || '水源地保护区名称',
        DRINK_ID: data?.DRINK_ID || '',
        monitortime: data?.monitortime || '',
        ISSTANDARDS: '1',
      },
    };
    console.log('接收到了 selectDrinkWater socket 消息', global.businessDialog, data);
    // if (data.selected === "WSYSTEM_CODE" && data.WSYSTEM_CODE) {
      changeRightContainer(data, "drinkWater", true)
    // }
  };
});
};
const tabChange = (item) => {
state.componentName = item.url + 'Component';
};
const onRegionCode = () => {
// 这里注释掉是因为：在激活饮用水的情况下，切换行政区执行这个方法，会导致右屏不再是饮用水，而是地表水
// 处理不动了，先注释掉吧，感觉没影响什么功能

// watch(
//   () => global.regionaQuery.regionCode,
//   () => {
//     changeRightContainer({}, "", false)
//   }
// )
};
const observeAndHideSmartRecommendation = () => {
let retryCount = 0; // 当前重试次数
const MAX_RETRIES = 10; // 最大重试次数
const RETRY_INTERVAL = 500; // 每次重试间隔500毫秒
/**
 * 监听并隐藏智慧推荐按钮
 * 找到目标元素后会自动隐藏并停止监听
 */
// function observeAndHideSmartRecommendation() {
// 先立即尝试查找并隐藏
const immediateResult = tryHideImmediately();
if (immediateResult) return;

// 如果没有立即找到，设置监听器
setupObserver();
// }

/**
 * 立即尝试查找并隐藏智慧推荐按钮
 * @returns {boolean} 是否成功找到并隐藏
 */
function tryHideImmediately() {
  const zhtjTabBtn = document.querySelector('#t-tabs-base-a061\\.6750724ea ul li[title="智慧推荐"]');

  if (zhtjTabBtn) {
    console.log('立即找到智慧推荐按钮，正在隐藏');
    zhtjTabBtn.style.display = 'none';
    return true;
  }

  return false;
}

/**
 * 设置MutationObserver监听DOM变化
 */
function setupObserver() {
  const container = document.querySelector('#t-tabs-base-a061\\.6750724ea ul');

  if (!container) {
    console.log('未找到容器元素，将在DOM加载完成后重试');
    waitForDOMContentLoaded();
    return;
  }

  const observer = new MutationObserver(() => {
    const zhtjTabBtn = document.querySelector('#t-tabs-base-a061\\.6750724ea ul li[title="智慧推荐"]');

    if (zhtjTabBtn) {
      console.log('监听到智慧推荐按钮，正在隐藏');
      zhtjTabBtn.style.display = 'none';
      observer.disconnect(); // 找到后停止监听
    }
  });

  // 开始监听
  observer.observe(container, {
    childList: true,
    subtree: true
  });

  console.log('已开始监听智慧推荐按钮');
}

/**
 * 等待DOM加载完成
 */
function waitForDOMContentLoaded() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      // observeAndHideSmartRecommendation();
      // 只重试查找容器，而不是重新启动整个流程
      retryContainerSearchWithLimit();  // 改为调用新函数
    });
  } else {
    // 如果DOM已经加载完成，直接重试
    // setTimeout(observeAndHideSmartRecommendation, 100);
    setTimeout(retryContainerSearchWithLimit, 100);
  }
}

/**
 * 重新尝试查找容器并设置监听器（带重试限制）
 */
function retryContainerSearchWithLimit() {
  const container = document.querySelector('#t-tabs-base-a061\\.6750724ea ul');

  if (container) {
    console.log(`第${retryCount + 1}次重试：找到容器，重新设置监听器`);
    retryCount = 0; // 找到后重置计数器

    const observer = new MutationObserver(() => {
      const zhtjTabBtn = document.querySelector('#t-tabs-base-a061\\.6750724ea ul li[title="智慧推荐"]');

      if (zhtjTabBtn) {
        console.log('监听到智慧推荐按钮，正在隐藏');
        zhtjTabBtn.style.display = 'none';
        observer.disconnect();
      }
    });

    observer.observe(container, {
      childList: true,
      subtree: true
    });
  } else {
    retryCount++;
    
    if (retryCount < MAX_RETRIES) {
      console.log(`第${retryCount}次重试：未找到容器元素，${RETRY_INTERVAL}ms后再次重试（剩余${MAX_RETRIES - retryCount}次）`);
      // 设置下一次重试
      setTimeout(retryContainerSearchWithLimit, RETRY_INTERVAL);
    } else {
      console.log(`已达到最大重试次数${MAX_RETRIES}次，停止重试`);
    }
  }
}
};
const onMapApploaded = (data) => {
if (data.resCode === 'onemap_cwqi') {
  global.waterGlobalVariables.mapAppLoaded = true;
}
};
const setRight = (data) => {
state.componentName = '';
setTimeout(()=>{
  state.componentName = data;
  console.log(data,'test');
},500)

};
const onclick1719905389338 = () => {
// 设置变量值
state.showRightMain = true;
// 执行自定义方法
setPageSize();
};
const onclick1719905398186 = () => {
// 设置变量值
state.showRightMain = false;
// 执行自定义方法
setPageSize();
};
const onitemClick1720439444547 = (item) => {
// 执行自定义方法
clickTab(item);
// 执行自定义方法
tabChange(item);
};
const onitemClick1722506970837 = (item) => {
// 设置变量值
state.activeTab = 'pointDetail';
// 执行自定义方法
setiframeVisible("pointDetail");
};
const onitemClick1722564102772_0_0 = (item) => {
// 设置变量值
state.activeTab = 'source';
// 执行自定义方法
setiframeVisible("source");
};
const onitemClick1730104161215_0_0 = (item) => {
// 设置变量值
state.activeTab = 'sourceRecordDetail';
// 执行自定义方法
setiframeVisible("sourceRecordDetail");
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-rightContainer', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
const onSocketChange367a196497b3409dbda8 = function (data) {
if(data.type === "showRightView"){
try{
// 执行自定义方法
updateTabListStatus(data.data.type,data.data.operation,data.data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange367a196497b3409dbda8);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange367a196497b3409dbda8);
});
/* 接收socket.io消息 */
const onSocketChangee244536ddd984bd48174 = function (data) {
if(data.type === "loadMenuData"){
try{
// 执行自定义方法
resetTabData();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangee244536ddd984bd48174);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangee244536ddd984bd48174);
});
/* 接收socket.io消息 */
const onSocketChanged2e1af852efe466a8d44 = function (data) {
if(data.type === "runInteractiveChange"){
try{
// 执行自定义方法
onWebSocketMsg(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChanged2e1af852efe466a8d44);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChanged2e1af852efe466a8d44);
});
// 执行自定义方法
watchRegionType();
// 执行自定义方法
setProvider();
/* 接收socket.io消息 */
const onSocketChange7afd5519115b4fb8b1c3 = function (data) {
if(data.type === "showAirTraceDetail"){
try{
// 执行自定义方法
onWebSocketMsg(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange7afd5519115b4fb8b1c3);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange7afd5519115b4fb8b1c3);
});
/* 接收socket.io消息 */
const onSocketChange3e7932e98a2b4fc8b433 = function (data) {
if(data.type === "showWaterWsystemRightPage"){
try{
// 执行自定义方法
changeRightContainer(data.data,"WSYSTEM",true);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange3e7932e98a2b4fc8b433);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange3e7932e98a2b4fc8b433);
});
/* 接收socket.io消息 */
const onSocketChange753aa079233544c9ba23 = function (data) {
if(data.type === "closeWaterWsystemRightPage"){
try{
// 执行自定义方法
changeRightContainer({},"",false);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange753aa079233544c9ba23);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange753aa079233544c9ba23);
});
/* 接收socket.io消息 */
const onSocketChange79b9343da9f84bc889fe = function (data) {
if(data.type === "showWaterRiverRightPage"){
try{
// 执行自定义方法
changeRightContainer(data.data,"WATER",true);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange79b9343da9f84bc889fe);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange79b9343da9f84bc889fe);
});
/* 接收socket.io消息 */
const onSocketChangef3f795a8b6154441b268 = function (data) {
if(data.type === "closeWaterRiverRightPage"){
try{
// 执行自定义方法
changeRightContainer({},"",false);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangef3f795a8b6154441b268);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangef3f795a8b6154441b268);
});
// 执行自定义方法
onSocket();
// 执行自定义方法
onRegionCode();
/* 接收socket.io消息 */
const onSocketChangebdf66fc9594d49909baa = function (data) {
if(data.type === "closeDrinkWaterMapDetail"){
try{
// 执行自定义方法
changeRightContainer({},"drinkWater",false);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangebdf66fc9594d49909baa);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangebdf66fc9594d49909baa);
});
/* 接收socket.io消息 */
const onSocketChangef57c7474533446b4b024 = function (data) {
if(data.type === "switchRightContainerName"){
try{
// 执行自定义方法
setRight(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangef57c7474533446b4b024);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangef57c7474533446b4b024);
});
/* 接收socket.io消息 */
const onSocketChange028d0bf2e8f54929ab42 = function (data) {
if(data.type === "appLoaded"){
try{
// 执行自定义方法
onMapApploaded(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange028d0bf2e8f54929ab42);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange028d0bf2e8f54929ab42);
});
onMounted(() => {
setPageScale('t-l-c-rightContainer', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tSelfAdaptionCardx0x4ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tSelfAdaptionCardx0x4.default, componentState.tSelfAdaptionCardx0x4?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tSelfAdaptionCardx0x5ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tSelfAdaptionCardx0x5.default, componentState.tSelfAdaptionCardx0x5?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tSelfAdaptionCardx0x6ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tSelfAdaptionCardx0x6.default, componentState.tSelfAdaptionCardx0x6?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tSelfAdaptionCardx0x7ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tSelfAdaptionCardx0x7.default, componentState.tSelfAdaptionCardx0x7?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tIframex0x8ComputedData = computed(() => _.merge({}, componentState.tIframex0x8.default, componentState.tIframex0x8?.[state.screenSize]));

 const tIframex0x9ComputedData = computed(() => _.merge({}, componentState.tIframex0x9.default, componentState.tIframex0x9?.[state.screenSize]));

 const tIframex0x10ComputedData = computed(() => _.merge({}, componentState.tIframex0x10.default, componentState.tIframex0x10?.[state.screenSize]));

 const tIframex0x11ComputedData = computed(() => _.merge({}, componentState.tIframex0x11.default, componentState.tIframex0x11?.[state.screenSize]));

 const tComponentx0x12ComputedData = computed(() => _.merge({}, componentState.tComponentx0x12.default, componentState.tComponentx0x12?.[state.screenSize]));

 const tComponentx0x13ComputedData = computed(() => _.merge({}, componentState.tComponentx0x13.default, componentState.tComponentx0x13?.[state.screenSize]));

 const tComponentx0x14ComputedData = computed(() => _.merge({}, componentState.tComponentx0x14.default, componentState.tComponentx0x14?.[state.screenSize]));

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
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tSelfAdaptionCardx0x4ComputedData,
tSelfAdaptionCardx0x5ComputedData,
tSelfAdaptionCardx0x6ComputedData,
tSelfAdaptionCardx0x7ComputedData,
tIframex0x8ComputedData,
tIframex0x9ComputedData,
tIframex0x10ComputedData,
tIframex0x11ComputedData,
tComponentx0x12ComputedData,
tComponentx0x13ComputedData,
tComponentx0x14ComputedData,
onclick1719905389338,
onclick1719905398186,
onitemClick1720439444547,
onitemClick1722506970837,
onitemClick1722564102772_0_0,
onitemClick1730104161215_0_0,
};
},
};