window.rootComponent = {
template: 
`<div id="t-l-c-root" ref="tBodyx0x0Ref" class="t-l-c-root" >` +
`<t-iframe v-if="false && componentState.tIframex0x0Visible" id="t-iframe-46c1.5f7326011" ref="tIframex0x0Ref" class="root-t-iframe-0-0"  :src="tIframex0x0ComputedData.src" :srcdoc="tIframex0x0ComputedData.srcdoc" :scrolling="tIframex0x0ComputedData.scrolling" :c-style="tIframex0x0ComputedData.cStyle" :socket-url="tIframex0x0ComputedData.socketUrl" :room-id="tIframex0x0ComputedData.roomId">` +
`</t-iframe>` +
`<t-component v-if="true && componentState.tComponentx0x1Visible" id="t-component-84d9.527ba0f12" ref="tComponentx0x1Ref" class="root-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName">` +
`</t-component>` +
`<t-component v-if="true && componentState.tComponentx0x2Visible" id="t-component-ad41.63eac2051" ref="tComponentx0x2Ref" class="root-t-component-0-2"  :name="replaceCssVariables(filterData(global.contentComponent, componentPropBindingMap?.['t-component-ad41.63eac2051']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :loading="tComponentx0x2ComputedData.loading" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="replaceCssVariables(filterData(global.contentComponent, componentPropBindingMap?.['t-component-ad41.63eac2051']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-component>` +
`<t-component v-if="true && componentState.tComponentx0x3Visible" id="t-component-9d81.3c3ded9be" ref="tComponentx0x3Ref" class="root-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName">` +
`</t-component>` +
`<t-iframe v-if="false && componentState.tIframex0x4Visible" id="t-iframe-6178.5c9776ea8" ref="tIframex0x4Ref" class="root-t-iframe-0-4"  :src="replaceCssVariables(filterData(state.iframeUrl, componentPropBindingMap?.['t-iframe-6178.5c9776ea8']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x4ComputedData.srcdoc" :scrolling="tIframex0x4ComputedData.scrolling" :c-style="tIframex0x4ComputedData.cStyle" :socket-url="replaceCssVariables(filterData(global.socketIp, componentPropBindingMap?.['t-iframe-6178.5c9776ea8']['socketUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :room-id="replaceCssVariables(filterData(global.socketRoom, componentPropBindingMap?.['t-iframe-6178.5c9776ea8']['roomId'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-iframe>` +
`<t-component v-if="true && componentState.tComponentx0x5Visible" id="t-component-c7f1.7a405140a" ref="tComponentx0x5Ref" class="root-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName">` +
`</t-component>` +
`<t-cascader v-if="global.contentComponent === 'cockpitAllComponent' && componentState.tCascaderx0x6Visible" id="t-cascader-7b03.d33297ae9" ref="tCascaderx0x6Ref" class="root-t-cascader-0-6"  :active-value="replaceCssVariables(filterData(global.selectMapCode, componentPropBindingMap?.['t-cascader-7b03.d33297ae9']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data="replaceCssVariables(filterData(state.treeStructure, componentPropBindingMap?.['t-cascader-7b03.d33297ae9']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tCascaderx0x6ComputedData.alias" :placeholder="tCascaderx0x6ComputedData.placeholder" :clearable="tCascaderx0x6ComputedData.clearable" :disabled="tCascaderx0x6ComputedData.disabled" :no-match-text="tCascaderx0x6ComputedData.noMatchText" :no-data-text="tCascaderx0x6ComputedData.noDataText" :c-style="tCascaderx0x6ComputedData.cStyle" :show-all-levels="tCascaderx0x6ComputedData.showAllLevels" :check-strictly="tCascaderx0x6ComputedData.checkStrictly" :expand-trigger="tCascaderx0x6ComputedData.expandTrigger" @change="onchange1742265442192_0_0">` +
`</t-cascader>` +
`<t-cascader v-if="false && componentState.tCascaderx0x7Visible" id="t-cascader-04ec.9fda51d16" ref="tCascaderx0x7Ref" class="root-t-cascader-0-7"  :active-value="replaceCssVariables(filterData(global.REGION_CODE, componentPropBindingMap?.['t-cascader-04ec.9fda51d16']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data="replaceCssVariables(filterData(state.treeStructure, componentPropBindingMap?.['t-cascader-04ec.9fda51d16']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tCascaderx0x7ComputedData.alias" :placeholder="tCascaderx0x7ComputedData.placeholder" :clearable="tCascaderx0x7ComputedData.clearable" :disabled="tCascaderx0x7ComputedData.disabled" :no-match-text="tCascaderx0x7ComputedData.noMatchText" :no-data-text="tCascaderx0x7ComputedData.noDataText" :c-style="tCascaderx0x7ComputedData.cStyle" :show-all-levels="tCascaderx0x7ComputedData.showAllLevels" :check-strictly="tCascaderx0x7ComputedData.checkStrictly" :expand-trigger="tCascaderx0x7ComputedData.expandTrigger" @change="onchange1741767774132_0_0">` +
`</t-cascader>` +
`<t-rect v-if="state.showBottom === true && componentState.tRectx0x8Visible" id="t-rect-c527.9fa524559" ref="tRectx0x8Ref" class="root-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle">` +
`</t-rect>` +
`<t-component v-if="global.showLevelTwoPop === true && componentState.tComponentx0x9Visible" id="t-component-3822.29c35f9de" ref="tComponentx0x9Ref" class="root-t-component-0-9"  :name="replaceCssVariables(filterData(global.showLevelTwoPopComponent, componentPropBindingMap?.['t-component-3822.29c35f9de']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tComponentx0x9ComputedData.cStyle" :src="tComponentx0x9ComputedData.src" :component-name="replaceCssVariables(filterData(global.showLevelTwoPopComponent, componentPropBindingMap?.['t-component-3822.29c35f9de']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :page-id="replaceCssVariables(filterData(undefined, componentPropBindingMap?.['t-component-3822.29c35f9de']['pageId'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :page-code="replaceCssVariables(filterData(undefined, componentPropBindingMap?.['t-component-3822.29c35f9de']['pageCode'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-component>` +
`<t-component v-if="global.showPop === true && componentState.tComponentx0x10Visible" id="t-component-bb71.2ed8ac6a2" ref="tComponentx0x10Ref" class="root-t-component-0-10"  :name="replaceCssVariables(filterData(global.showPopComponent, componentPropBindingMap?.['t-component-bb71.2ed8ac6a2']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tComponentx0x10ComputedData.cStyle" :src="tComponentx0x10ComputedData.src" :component-name="replaceCssVariables(filterData(global.showPopComponent, componentPropBindingMap?.['t-component-bb71.2ed8ac6a2']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :page-id="replaceCssVariables(filterData(undefined, componentPropBindingMap?.['t-component-bb71.2ed8ac6a2']['pageId'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :page-code="replaceCssVariables(filterData(undefined, componentPropBindingMap?.['t-component-bb71.2ed8ac6a2']['pageCode'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-component>` +
`<t-component v-if="global.contentComponent === 'cockpitAllComponent' && componentState.tComponentx0x11Visible" id="t-component-d27c.2ff88888" ref="tComponentx0x11Ref" class="root-t-component-0-11"  :name="tComponentx0x11ComputedData.name" :loading="tComponentx0x11ComputedData.loading" :c-style="tComponentx0x11ComputedData.cStyle" :src="tComponentx0x11ComputedData.src" :component-name="tComponentx0x11ComputedData.componentName" :page-id="tComponentx0x11ComputedData.pageId" :page-code="tComponentx0x11ComputedData.pageCode">` +
`</t-component>` +
`<t-component v-if="global.dialogName !== '' && componentState.tComponentx0x12Visible" id="t-component-39b6.4cbc7c973" ref="tComponentx0x12Ref" class="root-t-component-0-12"  :name="replaceCssVariables(filterData(global.dialogName, componentPropBindingMap?.['t-component-39b6.4cbc7c973']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :loading="tComponentx0x12ComputedData.loading" :c-style="tComponentx0x12ComputedData.cStyle" :src="tComponentx0x12ComputedData.src" :component-name="replaceCssVariables(filterData(global.dialogName, componentPropBindingMap?.['t-component-39b6.4cbc7c973']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :page-id="tComponentx0x12ComputedData.pageId" :page-code="tComponentx0x12ComputedData.pageCode">` +
`</t-component>` +
`<t-component v-if="global.dialogName2 !== '' && componentState.tComponentx0x13Visible" id="t-component-2755.6db05c62a" ref="tComponentx0x13Ref" class="root-t-component-0-13"  :name="replaceCssVariables(filterData(global.dialogName2, componentPropBindingMap?.['t-component-2755.6db05c62a']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :loading="tComponentx0x13ComputedData.loading" :c-style="tComponentx0x13ComputedData.cStyle" :src="tComponentx0x13ComputedData.src" :component-name="replaceCssVariables(filterData(global.dialogName2, componentPropBindingMap?.['t-component-2755.6db05c62a']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :page-id="tComponentx0x13ComputedData.pageId" :page-code="tComponentx0x13ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-iframe-46c1.5f7326011":{"attributeName":"tIframex0x0","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]},"socketUrl":{"filters":[]},"roomId":{"filters":[]}},"t-component-84d9.527ba0f12":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-ad41.63eac2051":{"attributeName":"tComponentx0x2","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-9d81.3c3ded9be":{"attributeName":"tComponentx0x3","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-iframe-6178.5c9776ea8":{"attributeName":"tIframex0x4","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]},"socketUrl":{"filters":[]},"roomId":{"filters":[]}},"t-component-c7f1.7a405140a":{"attributeName":"tComponentx0x5","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-cascader-7b03.d33297ae9":{"attributeName":"tCascaderx0x6","activeValue":{"filters":[]},"data":{"filters":[]},"alias":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"noMatchText":{"filters":[]},"noDataText":{"filters":[]},"cStyle":{"filters":[]},"showAllLevels":{"filters":[]},"checkStrictly":{"filters":[]},"expandTrigger":{"filters":[]}},"t-cascader-04ec.9fda51d16":{"attributeName":"tCascaderx0x7","activeValue":{"filters":[]},"data":{"filters":[]},"alias":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"noMatchText":{"filters":[]},"noDataText":{"filters":[]},"cStyle":{"filters":[]},"showAllLevels":{"filters":[]},"checkStrictly":{"filters":[]},"expandTrigger":{"filters":[]}},"t-rect-c527.9fa524559":{"attributeName":"tRectx0x8","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-3822.29c35f9de":{"attributeName":"tComponentx0x9","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-bb71.2ed8ac6a2":{"attributeName":"tComponentx0x10","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-d27c.2ff88888":{"attributeName":"tComponentx0x11","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-39b6.4cbc7c973":{"attributeName":"tComponentx0x12","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-2755.6db05c62a":{"attributeName":"tComponentx0x13","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
// 页面内注入全局变量和事件
const rootData = inject('root');
const global = reactive({
...toRefs(rootData)
});
// 路由
const route = useRoute();
// 创建 DOM 引用

const tBodyx0x0Ref = ref(null);
const tIframex0x0Ref = ref(null);
const tComponentx0x1Ref = ref(null);
const tComponentx0x2Ref = ref(null);
const tComponentx0x3Ref = ref(null);
const tIframex0x4Ref = ref(null);
const tComponentx0x5Ref = ref(null);
const tCascaderx0x6Ref = ref(null);
const tCascaderx0x7Ref = ref(null);
const tRectx0x8Ref = ref(null);
const tComponentx0x9Ref = ref(null);
const tComponentx0x10Ref = ref(null);
const tComponentx0x11Ref = ref(null);
const tComponentx0x12Ref = ref(null);
const tComponentx0x13Ref = ref(null);
// 当前页面使用的变量
const state = Vue.reactive({
   screenSize: "",
   iframeUrl: "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f8f896326ab0447e8b14f3b1cd6a1174_1_1/index.html#/root",
   showBottom: false,
   guan: "/department-sharing-platform-base/#/iframe?menuUrl=http://10.158.15.58:7777/dsm-micro-app/%23/dsmlayout/model-design-list?INSTANCE_AUDIT=INSTANCE%26MODEL_TYPE=READONLY%26treeRootID=08ebec5d58ba44c98b2667f05568cf8c",
   yong: "/department-sharing-platform-base/#/iframe?menuUrl=http://10.158.15.58:7777/ou/ou/main-ou",
   cha: "/department-sharing-platform-base/#/homelayout/home",
   showBrainPanel: false,
   dialogPosition: {"offset":{"x":20,"y":60},"positionStack":[],"recycledPositions":[],"initPosition":{"x":400,"y":"200"}},
   treeStructure: [],
   regionData: [],
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
tIframex0x0: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","position":"unset","left":"0px","top":"0px","animationName":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12_6/index.html?isCockpit=1#/root",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","position":"unset","left":"0px","top":"0px","animationName":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tIframex0x0Visible: computed(() => ["root","root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
tComponentx0x1: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","margin":"0 auto","backgroundColor":"rgba(0, 0, 0, 0)","left":"0px","top":"0px","pointerEvents":"auto"},
            
            },
 default: { 
 
name:"mapComponent",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","margin":"0 auto","backgroundColor":"rgba(0, 0, 0, 0)","left":"0px","top":"0px","pointerEvents":"auto"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/map",
componentName:"mapComponent", 
 },
},
tComponentx0x1Visible: computed(() => ["root","root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
tComponentx0x2: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","margin":"0 auto","left":"0px","top":"0px","pointerEvents":"none"},
            
            },
 default: { 
 
name:"cockpitAllComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","margin":"0 auto","left":"0px","top":"0px","pointerEvents":"none"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/cockpitAll",
componentName:"cockpitAllComponent", 
 },
},
tComponentx0x2Visible: computed(() => ["root","root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
tComponentx0x3: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","margin":"0 auto","backgroundColor":"","left":"0px","top":"0px","animationName":"","position":"unset","pointerEvents":"none","zIndex":0},
            
            },
 default: { 
 
name:"znxlEntryComponent",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","margin":"0 auto","backgroundColor":"","left":"0px","top":"0px","animationName":"","position":"unset","pointerEvents":"none","zIndex":0}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/znxlEntry",
componentName:"znxlEntryComponent", 
 },
},
tComponentx0x3Visible: computed(() => ["root","root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
tIframex0x4: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","left":"0px","top":"0px","backgroundColor":"rgba(23, 62, 228, 0)"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f8f896326ab0447e8b14f3b1cd6a1174_1_1/index.html#/root",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","left":"0px","top":"0px","backgroundColor":"rgba(23, 62, 228, 0)"}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tIframex0x4Visible: computed(() => ["root","root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
tComponentx0x5: {
defaultStyle: {
            default: {"width":"1920px","height":"102px","margin":"0 auto","backgroundColor":"","top":"0px","left":"0px","position":"unset","animationName":"","pointerEvents":"none"},
            
            },
 default: { 
 
name:"topNavigationMenuComponent",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"102px","margin":"0 auto","backgroundColor":"","top":"0px","left":"0px","position":"unset","animationName":"","pointerEvents":"none"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/topNavigationMenu",
componentName:"topNavigationMenuComponent", 
 },
},
tComponentx0x5Visible: computed(() => ["root","root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
tCascaderx0x6: {
defaultStyle: {
            default: {"width":"112px","height":"35px","backgroundColor":"rgba(26, 27, 31, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","fontSize":"24px","paddingLeft":"7px","color":"var(--t-qyxz-text-color)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","animationName":"","left":"58px","top":"38px","position":"unset","fontWeight":"700","lineHeight":"35px","pointerEvents":"auto"},
            
            },
 default: { 
 
activeValue:"350700000000",
data:[],
alias:{"label":"REGION_NAME","value":"REGION_CODE","disabled":"disabled"},
placeholder:"请选择",
clearable:false,
disabled:false,
noMatchText:"无匹配数据",
noDataText:"无数据",
cStyle:{"wrapper":{"default":{"width":"112px","height":"35px","backgroundColor":"rgba(26, 27, 31, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","fontSize":"24px","paddingLeft":"7px","color":"var(--t-qyxz-text-color)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","animationName":"","left":"58px","top":"38px","position":"unset","fontWeight":"700","lineHeight":"35px","pointerEvents":"auto"}},"placeholder":{"default":{"color":"var(--t-text)"}},"arrow":{"default":{"color":"rgba(255, 255, 255, 0)","backgroundImage":"","-webkit-mask-image":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-02-13/c3836e23400d4aeb814c01e024e93f11.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"38px 28px","backgroundPosition":"","-webkit-mask-position":"50% 50%","backgroundColor":"var(--t-qyxz-text-color)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","height":"400px","width":"auto","marginTop":"0px","position":"static","top":"0"}},"dropdownItem":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"14px","lineHeight":"28px","height":"56px","color":"var(--t-text)"},"hover":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundColor":"var(--business-show-bg15)","color":"#fff"},"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-text-hover)"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(188, 194, 200, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"dropdownRadio":{"default":{"backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)"},"active":{"backgroundColor":"","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomLeftRadius":"50%","borderBottomRightRadius":"50%"},"hover":{"backgroundColor":"","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomLeftRadius":"50%","borderBottomRightRadius":"50%"}},"dropdownMenu":{"default":{"height":"400px","borderRight":"1px solid var(--business-select-border)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"dropdownRadioCenter":{"active":{"backgroundColor":"var(--business-select-border-hover)","width":"50%","height":"50%"}}},
showAllLevels:true,
checkStrictly:true,
expandTrigger:"click", 
 },
},
tCascaderx0x6Visible: computed(() => ["root","root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
tCascaderx0x7: {
defaultStyle: {
            default: {"width":"100px","height":"35px","backgroundColor":"rgba(26, 27, 31, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","fontSize":"20px","paddingLeft":"7px","color":"var(--t-qyxz-text-color)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","animationName":"","left":"82px","top":"38px","position":"unset","fontWeight":"700","lineHeight":"35px","pointerEvents":"none"},
            
            },
 default: { 
 
activeValue:"350000000000",
data:[],
alias:{"label":"REGION_NAME","value":"REGION_CODE","disabled":"disabled"},
placeholder:"请选择",
clearable:false,
disabled:false,
noMatchText:"无匹配数据",
noDataText:"无数据",
cStyle:{"wrapper":{"default":{"width":"100px","height":"35px","backgroundColor":"rgba(26, 27, 31, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","fontSize":"20px","paddingLeft":"7px","color":"var(--t-qyxz-text-color)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","animationName":"","left":"82px","top":"38px","position":"unset","fontWeight":"700","lineHeight":"35px","pointerEvents":"none"}},"placeholder":{"default":{"color":"var(--t-text)"}},"arrow":{"default":{"color":"rgba(255, 255, 255, 0)","backgroundImage":"","-webkit-mask-image":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-02-13/c3836e23400d4aeb814c01e024e93f11.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"38px 28px","backgroundPosition":"","-webkit-mask-position":"50% 50%","backgroundColor":"var(--t-qyxz-text-color)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","height":"400px","width":"auto","marginTop":"0px","position":"static","top":"0"}},"dropdownItem":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"14px","lineHeight":"28px","height":"56px","color":"var(--t-text)"},"hover":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundColor":"var(--business-show-bg15)","color":"var(--t-text)"},"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(188, 194, 200, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"dropdownRadio":{"default":{"backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)"},"active":{"backgroundColor":"","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomLeftRadius":"50%","borderBottomRightRadius":"50%"},"hover":{"backgroundColor":"","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomLeftRadius":"50%","borderBottomRightRadius":"50%"}},"dropdownMenu":{"default":{"height":"400px","borderRight":"1px solid var(--business-select-border)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"dropdownRadioCenter":{"active":{"backgroundColor":"var(--business-select-border-hover)","width":"50%","height":"50%"}}},
showAllLevels:true,
checkStrictly:true,
expandTrigger:"click", 
 },
},
tCascaderx0x7Visible: computed(() => ["root","root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
tRectx0x8: {
defaultStyle: {
            default: {"width":"1920px","height":"95px","left":"0px","position":"unset","top":"985px","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundImage":"var(--t-footer-button-background-default),var(--t-footer-background)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto","-webkit-mask-size":"","backgroundPosition":"50% 20%,50% 50%","-webkit-mask-position":"","pointerEvents":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1920px","height":"95px","left":"0px","position":"unset","top":"985px","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundImage":"var(--t-footer-button-background-default),var(--t-footer-background)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto","-webkit-mask-size":"","backgroundPosition":"50% 20%,50% 50%","-webkit-mask-position":"","pointerEvents":"none"}}}, 
 },
},
tRectx0x8Visible: computed(() => ["root","root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
tComponentx0x9: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","margin":"0 auto","backgroundColor":"","left":"10px","top":"10px","zIndex":"100","pointerEvents":"none","animationName":""},
            
            },
 default: { 
 
name:"allApplicationCallRelationComponent",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","margin":"0 auto","backgroundColor":"","left":"10px","top":"10px","zIndex":"100","pointerEvents":"none","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/allApplicationCallRelation",
componentName:"allApplicationCallRelationComponent",
pageId:"3160dfb2aac442f3b0e22f6ca20c4ccd",
pageCode:"cockpitCenterPop", 
 },
},
tComponentx0x9Visible: computed(() => ["root","root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
tComponentx0x10: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","margin":"0 auto","backgroundColor":"","left":"0px","top":"0px","position":"unset","pointerEvents":"none","opacity":"100% !important","zIndex":"99"},
            
            },
 default: { 
 
name:"shapePopComponent",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","margin":"0 auto","backgroundColor":"","left":"0px","top":"0px","position":"unset","pointerEvents":"none","opacity":"100% !important","zIndex":"99"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/shapePop",
componentName:"shapePopComponent",
pageId:"3160dfb2aac442f3b0e22f6ca20c4ccd",
pageCode:"cockpitCenterPop", 
 },
},
tComponentx0x10Visible: computed(() => ["physicalExamCenterPop","performanceTrackingSection2","performanceTrackingSection6","performanceTracking","publicComplaints","naturalEcology","soilNnvironment","airStationList","questionlistPetition","performanceTrackingSimple","leftAir","cockpitCenterPop","bottomMenuSingle1","leftDataGatheringStructure","bottomMenuDoubleCopy","footerNavMenu","applicationSceneCenter","gztTopNews","performanceTrackingSection3","performanceTrackingSection4","performanceTrackingSection5","leftCockpitIndex","expandOrFold","bottomNavigationMenu","digitalCarbonSink","cookpitCenterTpe","ecologicalCloudRightIndex","rightGreenCarbon","allApplicationPop","gztLeftCommonApp","gztLeftMyTodo","shapePop","rightAllBusiness","gztLeftCommonAppListDialog","gztLeftCommonAppListEdit","dataSpaceRightIndex","rightCockpitIndex","sourceControlPop","gztLeftCommonAppList","excellentRatio","znxl","leftDataGathering","znxlEntry","descriptions","ssssssss","applicationSceneIndex","cockpitAllbeifen","sourceControlContent","dataSpaceLeftIndex","ecologicalCloudAll","secondTitle","indicatorStructurePop","indicatorStructureContent","performanceTrackingSection1","dataSpaceAll","cockpitTitle","dataSpaceIndex","topNavigationMenu","leftWater","rightBeautifulCountry","rightFullDirectionalService","cookpitCenterTjy","publicService","smartRegulation","keyMission","leftDataGatheringUnstructured","dataConvergencePop","surfaceWaterQuality","fullDirectionalServicePop","leftInstrumentedPerception","realTimePop","cockpitCenter","economicScale","industrialOptimization","ecologicalCloudCityPop","map","allBusinessPop","waterTool","greenDualCarbon","cockpitAllNew","cockpitLeft","cockpitRight","economicDevelopment","cookpitCenterTpf","dataEmpowerment","socialService","cockpitNewRight","sectionDiaPop","businessEnvironment","cockpitAll","rightRealTimeUseCopy","realtimeContent","animationIndex","bottomMenuDouble","airTool","realtimePointPop","pathAnimation","allTool","sectionPop","allApplicationNew","allApplicationCallRelation","noviceGuide","dataSpaceWholeTest","jiashicangdongtaidianwei","dataSpaceIndexNew","gztLeftNotice","deptRelation","airQualityIndex","pollutantConcentration","cityRank","instrumentedDiaPop","gztActiveState","ecologicalCloudRightDefault","ecologicalCloudLeftIndex","rightRiskControl","pointPop","rightFullApplicationSupport","bottomMenuSingle","rightRealTimeUse","cockpitBittom","questionList","cockpitCenterHeader","domesticSewage","negativeIonMonitoring","aquaticEcologicalStatus","groundWater","naturalEcologyNoStandard","shidashidafeisidongfeidong","statisticsCardList","dialogTitle","root","root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
tComponentx0x11: {
defaultStyle: {
            default: {"width":"1920px","height":"191px","margin":"0 auto","left":"0px","top":"887px","pointerEvents":"none","position":"unset"},
            
            },
 default: { 
 
name:"footerNavMenuComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"1920px","height":"191px","margin":"0 auto","left":"0px","top":"887px","pointerEvents":"none","position":"unset"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"footerNavMenuComponent",
pageId:"6b21ee236a3e4c3e820d01a7b6b50710",
pageCode:"footerNavMenu", 
 },
},
tComponentx0x11Visible: computed(() => ["root","root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
tComponentx0x12: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","margin":"0 auto","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"",
loading:false,
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","margin":"0 auto","position":"unset","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/",
componentName:"",
pageId:"",
pageCode:"", 
 },
},
tComponentx0x12Visible: computed(() => ["root","root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
tComponentx0x13: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","margin":"0 auto","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"",
loading:false,
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","margin":"0 auto","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/",
componentName:"",
pageId:"",
pageCode:"", 
 },
},
tComponentx0x13Visible: computed(() => ["root","root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
});
const handleBottomPosition = (top) => {
/**
 * 设置中间搜索面板的left值 根据状态去设置动态组件的位置
 */

const ele = document.getElementById('t-rect-c527.9fa524559');


if (ele) {
    ele.style.top = top;
}
};
const setSelect = (data) => {
console.log(data, '选中的行政区');
// global.REGION_CODE = data[data.length - 1];
// const targetRegion = state.regionData.find(region => region.value === global.REGION_CODE);
// global.REGION_NAME = targetRegion ? targetRegion.label : null;

// // 清除定时器
// if (global.intervalId) {
//   clearInterval(global.intervalId);
// }

global.selectMapCode = data[data.length - 1];
var regionSelectInput = document.getElementsByClassName('el-cascader el-cascader--small')[0];
if (regionSelectInput) {
  //行政区选中后隐藏弹窗
  setTimeout(function () {
    regionSelectInput.click();
  }, 1000)
}
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeCommonParams', // 消息名称
  data: {
    selected: 'REGION_CODE',
    REGION_CODE:  data[data.length - 1]
  },
});
};
const setDom = () => {
const styleDom = document.createElement('style');
styleDom.innerHTML = `
        .el-scrollbar {
    --el-scrollbar-opacity: 1;
    --el-scrollbar-background-color: var(--t-button-bg);
    --el-scrollbar-hover-opacity: 1;
    --el-scrollbar-hover-background-color: var(--t-button-bg);
}
   .t-cascader .el-cascader__dropdown.el-popper[role=tooltip] {
    margin-top: -15px !important;
   }
   .el-table__empty-text {
    color: var(--t-text) !important;
    font-size: 14px !important;
   }
  `;
setTimeout(() => {
  document.head.appendChild(styleDom);
});
};
const lxtMsgListenAndForward = () => {
// 综合查询-鹿小图消息监听与转发
console.log('lego-综合查询-生态云消息监听与转发', fetchEventSource.fetchEventSource);

// 获取用户信息
const token = localStorage.getItem('token');
const loginName = localStorage.getItem('lastLoginName');

const ZHCX_SETING = {
    // 综合查询页面是否打开
    IS_OPEN: false,
    // 内部消息订阅类型
    IS_OPEN_MESSAGE: 'isOpenZhcx',
    // 转发消息到综合查询类型
    SEND_ZHCX_MESSAGE_TYPE: 'lxtSocketMessage',
    // 鹿小图完成指令
    FINISH_LXT_ORDER: 'finishLxtOrder',
};

// 连接智能小鹿时需要的参数
const ZNXL_PARAMS = {
    URL: 'ws://192.168.0.65:7777',
    PATH: '/znxlsocketio',
    LOGIN_NAME: loginName + '_',
    USER_TOKEN: token,
}
// 获取页面地址中的参数
// const windowUrlParams = Tool.getUrlParams(window.location.href);
// 因为模型那边用户名后面是加了下划线的，所以这边组装时也需要加上
//ZNXL_PARAMS.URL = windowUrlParams.socketUrl ? windowUrlParams.socketUrl.replace('/lowcode/', '') : 'ws://192.168.0.202:7777'
// 因为现场暂无智能小鹿项目，所以智能小鹿为现场互联网地址的话，需要改成222.212.88.209这个地址(后期智能小鹿部署到正式环境后，需要删除下一行代码)
//ZNXL_PARAMS.URL = ZNXL_PARAMS.URL.replace('103.203.219.138:9211', '222.212.88.209:9600')
// ZNXL_PARAMS.LOGIN_NAME = (windowUrlParams.loginName || 'ys_510000_admin') + '_';
// ZNXL_PARAMS.USER_TOKEN = windowUrlParams.userToken || '';

//初始化与智能小鹿后端socket监听
const socket = io.connect(ZNXL_PARAMS.URL + '?connectId=' + ZNXL_PARAMS.LOGIN_NAME + '-lxtView&userToken=' + ZNXL_PARAMS.USER_TOKEN, {
    'reconnection delay': 2000,
    'force new connection': true,
    'path': ZNXL_PARAMS.PATH,
    'transports': ["websocket"]
});

socket.on('connect', function () {
    console.log('已连接智能小鹿socket');
});

socket.on('lxtMessage', function (data) {
    if (!global.isPageVisible) {
        console.log('当前浏览器不可见，不执行任何监听操作-生态云');
    }
    console.log('lxtMessage接收到结果----->', data);
    console.log('socket接收消息时综合查询页面是否打开------------------------>', ZHCX_SETING.IS_OPEN)
    console.log('生态云-处理语音交互0');
    // 处理综合查询
    openZhcx(data);
    // 处理语音交互
    handleVoice(data);
    // 处理鹿小智操作大屏消息
    // handleRunInteractive(data);
});

/**
 * 处理语音交互
 */
function handleVoice(data) {
    console.log('生态云-处理语音交互1');
    // 接收到打开水口水库的消息，则跳转
    if (data.type === 'runInteractive' && data?.data?.[0]?.shareCode === 'lego_open_url' && data?.data?.[0]?.runtimeValue?.url) {
        console.log('生态云-处理语音交互-打开水口水库', data?.data?.[0]?.runtimeValue?.url);
        // window.open(data?.data?.[0]?.runtimeValue?.url, '_blank');
        const hasWh = data?.data?.[0]?.runtimeValue?.url.includes('?'); // 接口返回的地址有没有问号
        const addParam = hasWh ? '&need-return-btn=1' : '?need-return-btn=1';
        const resultUrl = `${data?.data?.[0]?.runtimeValue?.url}${addParam}`;
        // alert(resultUrl);
        window.location.href = resultUrl;
    }
    // 接收到语音问题消息，要调用 chat-message 接口，接口被调用完毕后，模型会告诉后端
    // 问问题的同时，展示数字人，是后端给数字人发 socket 消息，数字人监听到了，展示 正在听... 动图
    if (data.type === 'lxzAudio') {
        console.log('生态云-处理语音交互2');

        // 监听后端发来的弹窗显隐消息
        if (data?.data?.[0]?.shareCode === 'lxz_lego_dialog_status') {
            // 禁止所有弹窗操作
            setLxzDialogMove('none');
            // 弹窗的透明度（如果是 综合查询、打开水口水库之类的，就把透明度改成 0，否则把弹窗透明度改成 1）
            const dialogOpacity = data?.data?.[0]?.runtimeValue?.dialogStatus === 'true' ? 1 : 0;
            // 设置全局透明度，给语音交互、最新会话弹窗用，用来在接受完消息之后判断弹窗是否执行关闭
            global.lxzVariableObj.common.dialogOpacity = dialogOpacity;
            console.log(123451, global.lxzVariableObj.common)
            // 如果不是透明的，证明用户要看弹框，就应该隐藏综合查询
            if (dialogOpacity === 1) {
                global.showIntegratedQuery = false;
            }
            // 如果是透明的，排除掉 没锁定的 语音弹窗（这个设置成透明的），其他的都直接关掉；因为这个弹窗需要执行完 chat-message 才能关闭
            if (dialogOpacity === 0) {
                closeDialog(true); // 关闭除了 没锁定的 语音弹窗 之外的，所有其他弹窗
            }
            // 寻找 没锁定的 语音弹窗索引，设置透明度
            const showIndex = global.lxzVariableObj.lxzDialogArr.findIndex(item => !item.dialogIslock && item.type === 'voice');
            if (showIndex !== -1) {
                const showDialogId = global.lxzVariableObj.lxzDialogArr[showIndex].dialogId;
                const showDialogType = global.lxzVariableObj.lxzDialogArr[showIndex].type;
                console.log('找到了 没锁定的 语音弹框，即将设置透明度', showDialogId, showDialogType, global.lxzVariableObj.lxzDialogArr[showIndex]);
                // 通过元素属性data-id获取组件实例
                const componentInstance = document.querySelector(`[data-id="${showDialogId}"]`);
                // .getElementsByClassName('draggable')[0];
                if (componentInstance) {
                    componentInstance.style.opacity = dialogOpacity;
                    console.log('找到了 没锁定的 语音弹框，设置透明度', dialogOpacity, componentInstance)
                }
            }

            // // 调整透明度
            // if (flowAnswerDialogDom) {
            //     flowAnswerDialogDom.style.opacity = dialogOpacity; // 流式输出弹窗
            // }
            // if (latestSessionDialogDom) {
            //     latestSessionDialogDom.style.opacity = dialogOpacity; // 最新会话弹窗
            // }
            // 弹窗在请求完毕后，是否要执行关闭操作（如果是 综合查询、打开水口水库之类的，就需要关闭，否则不需要关闭）
            // const isNeedClose = data?.data?.[0]?.runtimeValue?.dialogStatus === 'true' ? false : true;
            // global.lxzVariableObj.voice.flowAnswerAfterFinishedNeedClose = isNeedClose;
            // 这里是已经打开流式输出时再问问题，会给流式输出页面发消息，初始化在onLxzSocketMsg中
            // sendIsNeedShow();
        } else if (data?.data?.[0]?.shareCode === 'close_dialog') {
            // 处理弹窗关闭
            handleVoiceCloseAllDialog();
            return;
        } else if (data?.question && data?.data?.[0]?.query) {
            // 只要是语音交互，就得关了语音弹窗
            const aDialogArr = [...global.lxzVariableObj.lxzDialogArr];
            aDialogArr.forEach((item) => {
                if (item.type === 'voice' && !item.dialogIslock && item.dialogVNode) {
                    item.dialogVNode.close();
                }
            });
            console.log(global.lxzVariableObj.lxzDialogArr, 111222333);

            // 加个定时器，定时器时长就是 正在听... 动画时长，这时候后端会告诉数字人，展示思考中，前端同步在思考中的时候调用 chat-message
            setTimeout(() => {
                console.log('生态云-处理语音交互3')

                const query = data.data?.[0]?.query;

                const parent_message_id = '';
                const response_mode = 'streaming';
                const user = localStorage.getItem('lastUserId') || '';
                const sksk_authorization = global.lxzVariableObj.voiceParam.apiToken || '';
                const sksk_conversation_id = global.lxzVariableObj.voiceParam.conversationId || '';

                const userToken = global.lxzVariableObj.voiceParam.userToken || '';
                const ragflow_keys = global.lxzVariableObj.voiceParam.ragFlowToken || '';
                const all_dataset = 'true';
                const dataset_ids = '';
                const document_ids = '';
                const reasoning_type = 'true';
                const internet = 'false';
                const login_name =  localStorage.getItem('lastLoginName') || '';

                // 寻找没锁定的语音弹窗索引
                const notLockVoiceIndex = global.lxzVariableObj.lxzDialogArr.findIndex(item => !item.dialogIslock && item.type === 'voice');
                // 如果找到了，那就是更新这个弹窗，此时他的透明度应该是1；如果没找到，证明是新建弹窗，此时透明度应该是 0
                const newVoiveOpacity = notLockVoiceIndex !== -1 ? 1 : 0;
                setLxzDialogData({
                    auth: `${sksk_authorization || ''}`,
                    conversation_id: `${sksk_conversation_id || ''}`,
                    query: `${query || ''}`,
                    response_mode: `${response_mode || ''}`,
                    user: `${user || ''}`,
                    inputs: {
                        userToken: `${userToken || ''}`,
                        ragflow_keys: `${ragflow_keys || ''}`,
                        all_dataset: `${all_dataset}`,
                        dataset_ids: `${dataset_ids || ''}`,
                        document_ids: `${document_ids || ''}`,
                        reasoning_type: `${reasoning_type}`,
                        internet: `${internet}`,
                        login_name: `${login_name || ''}`
                    },
                    parent_message_id: `${parent_message_id || ''}`
                }, 'voice', newVoiveOpacity);
            }, 2000);
        }
    }
}

/**
 * 处理综合查询
 */
function openZhcx(data) {
    // 判断综合查询是否要显示处理，不能随便问问题都显示
    if ((data.type === 'lxzAudio' && data?.data?.[0]?.runtimeValue?.dialogStatus === 'false') || data.type === 'runInteractive') {
        // 判断综合查询是否打开，没有打开的话则打开
        if (!global.showIntegratedQuery) {
            global.showIntegratedQuery = true;
        }

        // 再发送消息给综合查询，执行其他逻辑
        let sendZhcxMsg = {
            type: ZHCX_SETING.SEND_ZHCX_MESSAGE_TYPE,
            data: data,
        }
        console.log(sendZhcxMsg, 88882222);
        // 发布页面回显消息事件（该事件一般在主体场景接收，然后通过socket发送给页面）
        // Tool.publishEvent(EVENT_NAMES.SEND_SOCKET_MSG, sendZhcxMsg);
        /* 发送socket消息 */
        rootData.rootSocket.emit('message', {
            room: global.socketRoom,// 房间号
            ...sendZhcxMsg
        });
    }
}

/**
 * 鹿小智操作大屏消息
 */
function handleRunInteractive(data) {
    if (data.type === 'runInteractive') {
        // 再发送消息给综合查询，执行其他逻辑
        let sendZhcxMsg = {
            type: ZHCX_SETING.SEND_ZHCX_MESSAGE_TYPE,
            data: data,
        }
        /* 发送socket消息 */
        rootData.rootSocket.emit('message', {
            room: global.socketRoom,// 房间号
            ...sendZhcxMsg
        });
    }
}

/* 接收socket.io消息 */
/*
rootData.rootOn('rootSocket:change', (data) => {
    if (data.type === ZHCX_SETING.FINISH_LXT_ORDER) {
        // 发送消息通知卡片关闭
        console.log('生态云指令完成操作------------------>data:', data);

        socket.emit('lxtFinishOrder', '{"type":"finish", "loginName":"' + ZNXL_PARAMS.LOGIN_NAME + '"}');
    };
})
*/
};
const lxzSocketMsg = () => {
/**
 * 鹿小智消息监听
 */
// rootData.rootOn('rootSocket:change', (msg) => {
//   const { data, type } = msg;
//   console.log(msg, '鹿小智消息监听msg');
//   switch (type) {
//     // 打开外部网页
//     case 'lxz_open_outside_page':
//       console.log(123, data?.url);
//       if (data?.url) {
//         window.open(data.url, '_blank');
//       }
//       break;
//   }
// })

/**
 * 鹿小智消息监听
 */
rootData.rootOn('rootSocket:change', (msg) => {
  const { data, type } = msg;
  console.log(msg, '鹿小智消息监听msg');
  switch (type) {
    // 打开外部网页
    case 'lxz_open_outside_page':
      console.log('lxz_open_outside_page', data?.url);
      if (data?.url) {
        // window.open(data.url, '_blank');
        const hasWh = data.url.includes('?'); // 接口返回的地址有没有问号
        const addParam = hasWh ? '&need-return-btn=1' : '?need-return-btn=1';
        const resultUrl = `${data.url}${addParam}`;
        window.location.href = resultUrl;
      }
    break;
    // 参考资料
    case 'lxz_reference_open':
      setLxzDialogData({
        title: data.fileName,
        url: data.url,
      }, 'reference');
      break;
    // 更新自动弹窗按钮状态
    case 'lxz_latest_session_dialog_status_update':
      global.lxzVariableObj.userId = data?.userId || '';
      global.lxzVariableObj.common.dialogStatus = data?.switch || false; // 最新会话 按钮 是否激活
      break;
    // 鹿小智 关闭悬浮窗
    case 'lxz_close_inset_app':
      // TODO: 关闭所有页面弹窗 弹窗数组+参考资料
      global.lxzVariableObj.userId = data?.userId || '';
      global.lxzVariableObj.common.dialogStatus = false; // 最新会话 按钮 是否激活
      break;
    // 鹿小智 流式消息接收完毕
    case 'lxz_msg_received_completed':
      global.lxzVariableObj.userId = data.userId;
      global.lxzVariableObj.common.isDisable = false; // 取消禁用所有弹窗
      // 允许拖拽
      setLxzDialogMove('all');
      // 最新会话 页面 是否显示，数据显示
      if (!global.lxzVariableObj.common.dialogStatus || data.conversationStatus !== "finished") break;
      // 判断弹框是否需要弹出
      if (Number(global.lxzVariableObj.common.dialogOpacity) === 1) {
        // 设置新弹窗的数据
        setLxzDialogData({
          title: data.title,
          userId: data.userId,
          auth: data.auth,
          messageId: data.messageId,
          content: data.content,
        }, 'latest');
      }
      break;
    // 鹿小智 点击历史消息全屏按钮
    case 'lxz_history_msg_received_completed':
      // 设置新弹窗的数据
      setLxzDialogData({
        title: data.sessionParams.title,
        userId: data.userId,
        auth: data.sessionParams.auth,
        messageId: data.sessionParams.messageId,
        content: data.sessionParams.content,
      }, 'history');
      break;
    // 鹿小智 流式消息接收 进行中
    case 'lxz_msg_receiving':
      global.lxzVariableObj.userId = data.userId;
      global.lxzVariableObj.common.isDisable = true; // 禁用所有弹窗
      // 禁用拖拽
      setLxzDialogMove('none');
      break;
    // 流式输出html页面 点击推荐问题 把新的问题及参数 发给lego
    case 'send-chat-message':
      // 创建流式输出弹窗
      setLxzDialogData(data, 'voice');
      break;
    // 关闭弹窗
    case "closeFlowAnswerDialog":
      // 这块需要加个判断，当平台不想要用户看到弹窗时，才删除弹窗
      // 这个消息在 buildTemplate 里发送的，但是他发送的逻辑可能有点问题，这个用户有的时候想看到弹窗，他也发送关闭了，跟传参有关系，所以这块额外再加一个判断
      console.log(12345, global.lxzVariableObj.common);
      if (global.lxzVariableObj.common.dialogOpacity === 0) {
        const voiceOpacityZeroDialogInfo = global.lxzVariableObj.lxzDialogArr.find((item) => item.type === 'voice');
        // const dialogIdTemp = voiceOpacityZeroDialogInfo?.dialogId || null;
        console.log(12345, global.lxzVariableObj.lxzDialogArr, voiceOpacityZeroDialogInfo)
        // closeDialog(true, dialogIdTemp);
        // global.lxzVariableObj.lxzDialogArr = [];
        closeDialog();
      }
      break;
    // 流式输出弹框，执行到 message_end 节点
    case 'voice-message-end':
      setLxzDialogMove('all');
      // 如果是第一次发送会话，则可能没有 conversationId，此时重新调用获取 conversationId 的接口进行填充，避免产生大量无效会话
      if (!global.lxzVariableObj.voiceParam.conversationId) {
        getChatMsgParam();
      }
      break;
  }
})

};
const setLxzDialogMove = (type) => {
// console.log('设置鹿小智弹框是否可以移动');
// // 遮罩 手型
// const maskCursor = type === 'all' ? '' : 'default';
// // 遮罩 事件穿透
// const maskPointerEvents = type === 'all' ? 'none' : 'all';
// // 弹窗可视部分 手型
// const dialogCursor = type === 'all' ? '' : 'not-allowed';
// // 弹窗可视部分 事件穿透
// const dialogPointerEvents = type === 'all' ? 'all' : 'none';
// // 弹窗可视部分 滤镜（就是看起来好像变黑了，不能点击了的那个滤镜）
// const dialogFilter = type === 'all' ? '' : 'brightness(0.8)';

// try {
//   // 设置鹿小智弹框是否可以移动
//   global.lxzVariableObj.lxzDialogArr.forEach((item) => {
//     if (item.dialogId) {

//       // 通过元素属性data-id获取组件实例 - 设置 弹框样式
//       const dialogInstance = document.querySelector(`[data-id="${item.dialogId}"]`)
//         .getElementsByClassName('dialog')[0];
//       dialogInstance.style['pointer-events'] = dialogPointerEvents;
//       dialogInstance.style['cursor'] = dialogCursor;
//       dialogInstance.style['filter'] = dialogFilter;

//       // 通过元素属性data-id获取组件实例 - 设置 遮罩样式
//       const maskInstance = document.querySelector(`[data-id="${item.dialogId}"]`)
//         .getElementsByClassName('mask')[0];
//       maskInstance.style['pointer-events'] = maskPointerEvents;
//       maskInstance.style['cursor'] = maskCursor;
//     }
//   });
// } catch (e) {
//   console.log(e, 'DOM元素获取失败');
// }
};
const setLxzDialogData = (data,type,opacity) => {
console.log(data, type, opacity, global.lxzVariableObj.lxzDialogArr, '新弹窗msg-进入了 setLxzDialogData');
if (type !== "reference") {
  // 不是参考文献页面都走这个
  // 判断存放弹框数据的变量是否存在
  if (!global.lxzVariableObj.lxzDialogArr) {
    global.lxzVariableObj.lxzDialogArr = [];
  };

  // 当前点击的messageId、title
  const messageId = `${type}_${data.messageId}`;
  const title = data.title || data.query;
  // 只有历史弹框每次打开的时候都是锁定的
  const dialogIslock = type === 'history' ? true : false;

  // 其他参数
  let params = {}
  switch (type) {
    case 'history':
      params = {
        auth: data.auth,
        messageId: data.messageId,
        userId: data.userId
      }
      break
    case 'latest':
      params = {
        auth: data.auth,
        messageId: data.messageId,
        userId: data.userId
      }
      break;
    case 'voice':
      params = data
      break;
  }

  // 弹框信息
  const dialogInfo = global.lxzVariableObj.lxzDialogArr.find((item) => item.messageId === messageId);
  // 判断弹框是否存在（只有历史弹框走这个）
  if (type === 'history' && dialogInfo) {
    console.log('当前点击的弹框已经存在了，重新定位到最高层级即可', '新弹窗msg');
    // 更新层级
    createLxzDialogComponent(type, dialogInfo.dialogId, title, data.content, params, opacity);
  } else {
    console.log('当前点击的弹框不存在，需要打开新的弹框或更新弹框信息', '新弹窗msg');

    // 查找没锁定的弹框
    const notlockDialogIndex = global.lxzVariableObj.lxzDialogArr.findIndex((item) => !item.dialogIslock && item.type === type);
    if (notlockDialogIndex > -1) {
      console.log('有弹框没有锁定，直接更新信息', '新弹窗msg');
      // 更新弹框
      const dialogId = global.lxzVariableObj.lxzDialogArr[notlockDialogIndex].dialogId;
      createLxzDialogComponent(type, dialogId, title, data.content, params, opacity);
      // 更新全局变量
      global.lxzVariableObj.lxzDialogArr[notlockDialogIndex] = {
        ...global.lxzVariableObj.lxzDialogArr[notlockDialogIndex],
        messageId: messageId,
        dialogTitle: title,// 标题
      }
    } else {
      console.log('弹框锁定，需要弹出新弹窗', '新弹窗msg');
      // 随机生成弹框ID
      const dialogId = `${type}_${guid(true, 'lego')}`;
      // 更新全局变量
      global.lxzVariableObj.lxzDialogArr.push({
        type: type, // 弹框类型
        dialogId: dialogId, // 弹框唯一标识
        messageId: messageId,
        dialogIslock: dialogIslock, // 弹窗是否锁定
        dialogTitle: title, // 标题
        dialogVNode: '', // 创建完成后填充弹框实例
      });
      // 创建弹框
      createLxzDialogComponent(type, dialogId, title, data.content, params, opacity);
    }
  }
} else {
  // 参考文献页面走这个
  const dialogId = `${type}_${guid(true, 'lego')}`;
  // 更新全局变量
  global.lxzVariableObj.lxzDialogArr.push({
    type: type, // 弹框类型
    dialogId: dialogId, // 弹框唯一标识
    dialogTitle: data.title, // 标题
    dialogVNode: '', // 创建完成后填充弹框实例
  });
  createLxzDialogComponent(type, dialogId, data.title, data.url, null, opacity);
}
console.log(global.lxzVariableObj.lxzDialogArr, '新弹窗msg');

};
const createLxzDialogComponent = (type,id,title,content,params,opacity) => {
// position值默认是文献弹框位置
let position = {
  x: 225,
  y: 165
}
// 不是文献弹框时需要处理弹框位置
if (type !== 'reference') {
  // 获取下一个可用位置（切记不需要查找可用位置时不要调用此方法）
  position = getLxzNextDialogPosition(id);
}
console.log(position, 'getLxzNextDialogPosition');
const {
  iframeContentStyle,
  iframeContainerStyle,
  dialogStyle
} = handleDynamicDialogStyle(
  title,
  type === "reference" ? 1400 : 800,
  type === "reference" ? 754 : 570,
  position.x,
  position.y
)

const res = mountDynamicComponent({
  componentName: 'TDialog',
  position: { x: 200, y: 100 },
  id,
  mountTo: document.querySelector('body'),
  props: dialogStyle,
}, (e) => {
  console.log(e, '关闭新弹窗msg');
  // 查找关闭的弹框并删掉全局变量里的数据
  const dialogIndex = global.lxzVariableObj.lxzDialogArr.findIndex((item) => item.dialogId === id);
  global.lxzVariableObj.lxzDialogArr.splice(dialogIndex, 1);
  // 根据弹框id处理弹框位置
  const posIndex = state.dialogPosition.positionStack.findIndex((p) => p.id === id);
  if (posIndex > -1) {
    state.dialogPosition.recycledPositions.push(state.dialogPosition.positionStack[posIndex]);
    state.dialogPosition.positionStack.splice(posIndex, 1);
  }
});

// 透明度是 0 的时候，在创建完弹框之后，需要把弹窗改成透明度 0，条件合适时再改成透明度 1
if (Number(opacity) === 0) {
  const needHiddenInstance = document.querySelector(`[data-id="${id}"]`);
  if (needHiddenInstance) {
    needHiddenInstance.style.opacity = 0;
  }
  console.log('创建透明弹窗', needHiddenInstance);

}


// 填充弹框实例，用于关闭弹框时使用
const dialogIndex = global.lxzVariableObj.lxzDialogArr.findIndex((item) => item.dialogId === id);
if (!global.lxzVariableObj.lxzDialogArr[dialogIndex].dialogVNode) {
  console.log('填充成功');
  global.lxzVariableObj.lxzDialogArr[dialogIndex].dialogVNode = res;
}

// 通过元素属性data-id获取组件实例
const componentInstance = document.querySelector(`[data-id="${res.id}"]`)
  .getElementsByClassName('scale-container')[0];

// 公共参数
const commonParams = {
  apiBaseUrl: global.lxzVariableObj.common.apiBaseUrl,
  recommendQuestionPath: global.lxzVariableObj.common.recommendQuestionPath,
  noDataImgSrc: global.lxzVariableObj.common.noDataImgSrc,
  skin: global.lxzVariableObj.common.skin,
  opacity,
}

const prop = type === "reference" ? {
  src: content,
} : {
  srcdoc: buildTemplate(type, content, params, commonParams),
}

mountDynamicComponent({
  componentName: 'TIframe',
  style: iframeContainerStyle,
  id: id + 'iframe-content',
  mountTo: componentInstance,
  props: {
    ...prop,
    scrolling: "yes",
    ...iframeContentStyle
  },
});

// 创建锁定组件
function createLockComponent(islock) {
  let iconSrc = '';
  iconSrc = islock ? global.lxzVariableObj.common.lockIcon : global.lxzVariableObj.common.notLockIcon;
  mountDynamicComponent({
    componentName: 'TImageBase',
    id: id + 'text-content',
    mountTo: componentInstance,
    style: {
      position: 'fixed',
      top: '16px',
      right: '62px',
      cursor: 'pointer'
    },
    "props": {
      "src": iconSrc,
      "fit": "fill",
      "cStyle": {
        "wrapper": {
          "default": {
            "width": "22px",
            "height": "22px",
            "position": "unset",
            "left": "808px",
            "top": "376px"
          }
        }
      }
    },
  }, () => {
    // 
  }, () => {
    if (!islock) {
      console.log(id, '锁定新弹窗msg');
      // 查找需要锁定的弹框并锁定
      const dialogIndex = global.lxzVariableObj.lxzDialogArr.findIndex((item) => item.dialogId === id);
      if (!global.lxzVariableObj.lxzDialogArr[dialogIndex].dialogIslock) {
        global.lxzVariableObj.lxzDialogArr[dialogIndex].dialogIslock = true;
        // 更新锁定图标的状态
        createLockComponent(true);
      }
    }
  });
}

// 不等于参考文献的时候增加锁定按钮
if (type !== "reference") {
  const dialogInfo = global.lxzVariableObj.lxzDialogArr.find((item) => item.dialogId === id);
  createLockComponent(dialogInfo.dialogIslock || false);
}
};
const closeDialog = (isReserveVoice,dialogId) => {
console.log(global.lxzVariableObj.lxzDialogArr, "-------鹿小智V2.0---关闭弹窗");

const dialogArr = [...global.lxzVariableObj.lxzDialogArr];
// 如果是单个弹窗，直接进行关闭即可
if (dialogId) {
  console.log("关闭弹窗---删除单个");
  // 有id删除单个
  const item = dialogArr.find(i => i.dialogId === dialogId)
  if (item.dialogVNode) {
    item.dialogVNode.close();
  }
  return;
}

// 如果是语音交互的弹窗，并且这个语音交互的弹窗，平台不想被看到，等 chat-message 发完了之后，需要手动关掉的话，现在就先只关闭除了他之外的弹窗
if (isReserveVoice) {
  console.log("关闭弹窗---语音交互");
  dialogArr.forEach((item) => {
    if (!(item.type === 'voice' && !item.dialogIslock) && item.dialogVNode) {
      item.dialogVNode.close();
    }
  });
  return;
}

console.log("关闭弹窗---全部关闭");
// 关闭所有弹框
dialogArr.forEach((item) => {
  if (item.dialogVNode) {
    item.dialogVNode.close();
  }
});
return

};
const buildTemplate = (dialogType,dialogContent,data,otherParams) => {
// 历史会话
const historyHtml =  `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>我的应用名称</title>
    <link rel="shortcut icon" href="assets/images/favicon.ico" />
    <script src="./resources/vue.min.js"></script>
    <script src="./resources/socket.io.js"></script>
    <script src="./resources/lodash.min.js"></script>
    <link
      rel="stylesheet"
      href="./resources/element-plus/element-plus.min.css"
    />
    <script src="./resources/element-plus/element-plus.min.js"></script>
    <script src="./resources/element-plus/zhCn.js"></script>
    <script src="./resources/mitt.min.js"></script>
    <script src="./resources/axios.min.js"></script>
    <link rel="stylesheet" href="./assets/style/themes.css" />
    <style>
      body {
        margin: 0;
        padding: 16px;
      }

      body,
      html,
      #app {
        height: fit-content;
        color: #fff;
        background: #07494a;
        box-sizing: border-box;
      }

      a,
      .lxz-common-link {
        color: #00f0ff !important;
      }

      ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }
      details {
        color: #fff !important;
        background-color: rgba(2, 76, 98, 0) !important;
        padding: 8px !important;
        border-radius: 4px !important;
        border-color: #41c57a !important;
        background: #0c5b5e !important;
      }

      .recommend-messages {
        margin: 16px 0;
        padding-bottom: 15px;
      }

      .recommend-messages .recommend-title {
        margin-bottom: 12px;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
      }

      .recommend-messages .recommend-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .recommend-messages .recommend-list .recommend-item {
        padding: 6px 12px;
        border: 1px solid transparent;
        border-radius: 16px;
        background: #0c5b5e;
        color: #fff;
        font-size: 13px;
        line-height: 20px;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .recommend-messages .recommend-list .recommend-item:hover {
        color: #00f0ff;
      }

      .recommend-messages .recommend-list .recommend-item:active {
        transform: scale(0.98);
      }

      .bg-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .bg-image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        height: auto;
        object-fit: none;
      }

      .iframe-content {
        width: 100%;
        min-height: 100px;
        overflow: visible;
      }

      .iframe-content iframe {
        width: 100%;
        border: none;
      }
    </style>
  </head>

  <body class="绿色版">
    <div id="app"></div>

    <script>
      /**
       * 这里定义全局使用的变量、方法
       */
      const {
        createApp,
        computed,
        ref,
        reactive,
        toRefs,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted,
        onErrorCaptured,
        onRenderTracked,
        onRenderTriggered,
        watch,
        provide,
        inject,
        nextTick,
      } = Vue;

      // 房间号
      const roomId = localStorage.getItem("lxtSocketRoom");

      // 主题
      const themeName = localStorage.getItem("lxtTheme");

      const bodyDom = document.querySelector("body");
      if (bodyDom && themeName) {
        bodyDom.className = themeName;
      }

      /**
       * 这里定义根组件内容
       */
      const subjectComponent = {
        template: \`<div ref="contentRef">
         <div v-if="displayHtml" v-html="displayHtml" class="iframe-content"></div>
         <div class='bg-container' v-else>
          <img class='bg-image' src='${otherParams.noDataImgSrc || "/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-03-22/220deb6d91f34515a786408e4743eba8.png"}' alt='' />
          </div>
          <div v-if="displayHtml && recommendQuestion?.length" class="recommend-messages">
            <div class="recommend-title">
              推荐问题
            </div>
            <div class="recommend-list">
              <div
                v-for="(item, index) in recommendQuestion"
                :key="index"
                class="recommend-item"
                @click="handleRecommendClick(item)"
              >
                {{ item }}
              </div>
            </div>
          </div>
          </div>\`,
        setup() {
          // 页面内注入全局变量和事件
          const rootData = inject("root");
          const contentRef = ref(null);
          const global = reactive({
            ...toRefs(rootData),
          });
          const state = reactive({
            dialogContent: "",
            data: {
              auth: "",
              messageId: "",
              userId: "",
            },
            recommendMessages: [],
          });

          // 基础ip
          const apiBaseUrl = "${otherParams.apiBaseUrl || "http://192.168.0.65:7777/"}";

          // 推荐问题地址
          const recommendQuestionUrl = apiBaseUrl + "${otherParams.recommendQuestionPath || "v1/messages"}";

          /**
           * 点击推荐问题
           * @param item 推荐问题
           */
          const handleRecommendClick = (item) => {
            rootData.rootSocket.emit("message", {
              room: global.socketRoom,
              type: "lxz-click-recommend-item", // 必须带上 lxz-
              data: {
                recommendItem: item,
              },
            });
          };

          /**
           * 获取推荐问题
           * @param auth 请求头
           * @param messageId 消息id
           * @param userId 用户id
           */
          const getRecommendQuestion = async (auth, messageId, userId) => {
            try {
              const res = await axios.get(
                recommendQuestionUrl +
                  "/" +
                  messageId +
                  "/suggested?user=" +
                  userId,
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: \`Bearer \${auth}\`,
                  },
                }
              );
              if (res.status === 200) {
                return res.data;
              }
              return []; // 添加默认返回值
            } catch (error) {
              console.error("Error in getRecommendQuestion:", error);
              return []; // 错误时返回空数组
            }
          };

          /**
           * 重置数据
           */
          const resetData = () => {
            state.data = {
              auth: "",
              messageId: "",
              userId: "",
            };
            state.recommendMessages = [];
          };

          /**
           * 处理标签
           * @param str
           * @returns {*}
           */
          const handleTag = (str) => {
            return str.replace(
              /<details\\s+open><summary\\s+class="deep-title">正在思考中...<\\/summary>/g,
              \`<details><summary class="deep-title">已深度思考</summary>\`
            );
          };

          /**
           * 初始化推荐问题
           */
          const initRecommendData = async () => {
            const { data } = await getRecommendQuestion(
              state.data.auth,
              state.data.messageId,
              state.data.userId
            );
            if (data) {
              state.recommendMessages = data;
            }
          };

          const displayHtml = computed(() => state.dialogContent);

          const recommendQuestion = computed(() => state.recommendMessages);

          /**
           * @description: 处理来自指标中台的数据
           * @param {*} event 消息
           */
          const handleMessage = (event) => {
            if (
              Object.prototype.toString.call(event.data) === "[object String]"
            ) {
              try {
                const message = JSON.parse(event.data);
                if (message?.type === "IFRAME_HEIGHT") {
                  // 找到与此消息ID匹配的特定iframe（指标平台使用的）
                  const zbPlatformIframes =
                    document.querySelectorAll("#app iframe");
                  zbPlatformIframes.forEach((iframe) => {
                    const urlParts = iframe.src?.split("/");
                    const iframeIdWithQuery = urlParts[urlParts.length - 1];
                    const iframeId = iframeIdWithQuery?.split("?")[0];
                    // 只调整匹配的iframe的高度
                    if (iframeId === message.id) {
                      // 单独加20px，因为出现了纵向滚动条，防止出现滚动条抖动o'的情况
                      // iframe.style.height = message.data.height + 10 + 'px !important';
                      const truthHeight = message.data.height === '100%' ? 500 : message.data.height;
                      iframe.style.height = truthHeight + 'px';
                      iframe.scrolling = 'no';
                    }
                  });
                }
              } catch (error) {
                console.error("解析消息时出错:", error);
              }
            }
          };

          onMounted(() => {
            // 处理数据
            state.data = ${JSON.stringify(data) || "{}"};
            state.dialogContent = handleTag(\`${dialogContent || ""}\`);
            // 获取推荐问题
            initRecommendData();

            window.addEventListener("message", handleMessage, false);
          });

          onUnmounted(() => {
            window.removeEventListener("message", handleMessage, false);
          });

          return {
            handleRecommendClick,
            displayHtml,
            recommendQuestion,
            themeName,
          };
        },
      };

      /**
       * 这里入口组件内容
       */
      const MainComponent = {
        template:
          "<subject-component v-if='state.isSocketConnect'></subject-component>",
        components: {
          subjectComponent,
        },
        setup() {
          // 获取缓存里的鹿小图全局变量数据
          const lxtGlobal = localStorage.getItem("lxtGlobal")
            ? JSON.parse(localStorage.getItem("lxtGlobal"))
            : {};

          const rootEmitter = mitt();

          let global = reactive(
            /* 插入应用级别的全局变量 相当于store中的rootData */
            /* globalVariableStart */
            {
              socketIp:
                lxtGlobal.socketIp || "http://192.168.0.202:7777/socketPath",
              socketPath: "",
              socketRoom: lxtGlobal.socketRoom || roomId || "admin",
            }
            /* globalVariableEnd */
          );

          let state = reactive({
            isSocketConnect: false, // socket 是否连接
          });

          // 创建 socket 连接
          let socket = null;
          if (global.socketIp) {
            const options = {};
            if (global?.socketPath) {
              options.path = global.socketPath;
            }
            socket = io(global.socketIp, options);
          }

          provide("root", {
            ...toRefs(global),
            rootEmit: rootEmitter.emit, // mitt 发送
            rootOn: rootEmitter.on, // mitt 接收
            rootOff: rootEmitter.off, // mitt 移除
            rootSocket: socket, // socket 实例
          });

          /**
           * 监听修改全局变量事件
           * @param obj 修改后的变量
           */
          rootEmitter.on("rootData:change", (obj) => {
            global = _.set(global, obj.key, obj.value);

            if (global.socketIp && global.socketRoom) {
              // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息
              socket.emit("message", {
                room: global.socketRoom, // 房间号
                type: "internalType:ChangeGlobalValue", // 需要保证此类型唯一性
                data: obj,
              });
            }
          });

          /**
           * 连接成功时进入对应的房间
           */
          if (socket) {
            socket.on("connect", function () {
              if (global.socketIp && global.socketRoom) {
                // 进入房间
                socket.emit("join-room", global.socketRoom);
                state.isSocketConnect = true;
              }
            });
          }

          /**
           * 打开文件
           * @param fileName 文件名称
           * @param fileUrl 文件地址
           */
          const customOpenFile = (fileName, fileUrl) => {
            if (!fileUrl) {
              return;
            }
            socket.emit("message", {
              type: "lxz_reference_open",
              room: global.socketRoom,
              data: {
                url: fileUrl,
                fileName,
              },
            });
          };

          window.customOpenFile = customOpenFile;

          /**
           * 接收到 socket 消息时触发
           * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}
           */
          if (socket) {
            socket.on("message", function (data) {
              // socket 监听全局变量的变化，然后合并值
              if (data.type === "internalType:ChangeGlobalValue") {
                // 合并 globa 的值
                global = _.set(global, data.data.key, data.data.value);
              } else {
                // 发送消息，通知其他页面
                rootEmitter.emit("rootSocket:change", data);
              }
            });
          }

          // 监听 socket 房间的变化
          watch(
            () => global.socketRoom,
            (val, oldVal) => {
              if (socket) {
                // 离开房间
                socket.emit("leave-room", oldVal);
                // 进入房间
                socket.emit("join-room", val);
              }
            }
          );

          onBeforeUnmount(() => {
            // 离开房间
            socket.emit("leave-room", global.socketRoom);
            // 断开连接
            socket.disconnect();
          });

          return {
            state,
          };
        },
      };

      const app = createApp(MainComponent);
      /* 下面的操作是去掉控制台Vue输出的警告信息  如果想开启警告信息可以把这个空函数注释掉 */
      app.config.warnHandler = function (msg, vm, trace) {
        // 空函数，不做任何处理
      };
      app
        .use(ElementPlus, {
          size: "small",
        })
        .mount("#app");
    </script>
  </body>
</html>
`;

// 最新会话
const latestHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>我的应用名称</title>
    <link rel="shortcut icon" href="assets/images/favicon.ico" />
    <script src="./resources/vue.min.js"></script>
    <script src="./resources/socket.io.js"></script>
    <script src="./resources/lodash.min.js"></script>
    <link
      rel="stylesheet"
      href="./resources/element-plus/element-plus.min.css"
    />
    <script src="./resources/element-plus/element-plus.min.js"></script>
    <script src="./resources/element-plus/zhCn.js"></script>
    <script src="./resources/mitt.min.js"></script>
    <script src="./resources/axios.min.js"></script>
    <link rel="stylesheet" href="./assets/style/themes.css" />
    <style>
      body {
        margin: 0;
        padding: 16px;
      }

      body,
      html,
      #app {
        height: fit-content;
        color: #fff;
        background: #07494a;
        box-sizing: border-box;
      }

      a,
      .lxz-common-link {
        color: #00f0ff !important;
      }

      ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }
      details {
        color: #fff !important;
        background-color: rgba(2, 76, 98, 0) !important;
        padding: 8px !important;
        border-radius: 4px !important;
        border-color: #41c57a !important;
        background: #0c5b5e !important;
      }

      .recommend-messages {
        margin: 16px 0;
        padding-bottom: 15px;
      }

      .recommend-messages .recommend-title {
        margin-bottom: 12px;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
      }

      .recommend-messages .recommend-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .recommend-messages .recommend-list .recommend-item {
        padding: 6px 12px;
        border: 1px solid transparent;
        border-radius: 16px;
        background: #0c5b5e;
        color: #fff;
        font-size: 13px;
        line-height: 20px;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .recommend-messages .recommend-list .recommend-item:hover {
        color: #00f0ff;
      }

      .recommend-messages .recommend-list .recommend-item:active {
        transform: scale(0.98);
      }

      .bg-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .bg-image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        height: auto;
        object-fit: none;
      }

      .iframe-content {
        width: 100%;
        min-height: 100px;
        overflow: visible;
      }

      .iframe-content iframe {
        width: 100%;
        border: none;
      }
    </style>
  </head>

  <body class="绿色版">
    <div id="app"></div>

    <script>
      /**
       * 这里定义全局使用的变量、方法
       */
      const {
        createApp,
        computed,
        ref,
        reactive,
        toRefs,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted,
        onErrorCaptured,
        onRenderTracked,
        onRenderTriggered,
        watch,
        provide,
        inject,
        nextTick,
      } = Vue;

      // 房间号
      const roomId = localStorage.getItem("lxtSocketRoom");

      // 主题
      const themeName = localStorage.getItem("lxtTheme");

      const bodyDom = document.querySelector("body");
      if (bodyDom && themeName) {
        bodyDom.className = themeName;
      }

      /**
       * 这里定义根组件内容
       */
      const subjectComponent = {
        template: \`<div ref="contentRef">
         <div v-if="displayHtml" v-html="displayHtml" class="iframe-content"></div>
         <div class='bg-container' v-else>
          <img class='bg-image' src='${otherParams.noDataImgSrc || "/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-03-22/220deb6d91f34515a786408e4743eba8.png"}' alt='' />
          </div>
          <div v-if="displayHtml && recommendQuestion?.length" class="recommend-messages">
            <div class="recommend-title">
              推荐问题
            </div>
            <div class="recommend-list">
              <div
                v-for="(item, index) in recommendQuestion"
                :key="index"
                class="recommend-item"
                @click="handleRecommendClick(item)"
              >
                {{ item }}
              </div>
            </div>
          </div>
          </div>\`,
        setup() {
          // 页面内注入全局变量和事件
          const rootData = inject("root");
          const contentRef = ref(null);
          const global = reactive({
            ...toRefs(rootData),
          });
          const state = reactive({
            dialogContent: "",
            data: {
              auth: "",
              messageId: "",
              userId: "",
            },
            recommendMessages: [],
          });

          // 基础ip
          const apiBaseUrl = "${otherParams.apiBaseUrl || "http://192.168.0.65:7777/"}";

          // 推荐问题地址
          const recommendQuestionUrl = apiBaseUrl + "${otherParams.recommendQuestionPath || "v1/messages"}";

          /**
           * 点击推荐问题
           * @param item 推荐问题
           */
          const handleRecommendClick = (item) => {
            rootData.rootSocket.emit("message", {
              room: global.socketRoom,
              type: "lxz-click-recommend-item", // 必须带上 lxz-
              data: {
                recommendItem: item,
              },
            });
          };

          /**
           * 获取推荐问题
           * @param auth 请求头
           * @param messageId 消息id
           * @param userId 用户id
           */
          const getRecommendQuestion = async (auth, messageId, userId) => {
            try {
              const res = await axios.get(
                recommendQuestionUrl +
                  "/" +
                  messageId +
                  "/suggested?user=" +
                  userId,
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: \`Bearer \${auth}\`,
                  },
                }
              );
              if (res.status === 200) {
                return res.data;
              }
              return []; // 添加默认返回值
            } catch (error) {
              console.error("Error in getRecommendQuestion:", error);
              return []; // 错误时返回空数组
            }
          };

          /**
           * 重置数据
           */
          const resetData = () => {
            state.data = {
              auth: "",
              messageId: "",
              userId: "",
            };
            state.recommendMessages = [];
          };

          /**
           * 处理标签
           * @param str
           * @returns {*}
           */
          const handleTag = (str) => {
            return str.replace(
              /<details\\s+open><summary\\s+class="deep-title">正在思考中...<\\/summary>/g,
              \`<details><summary class="deep-title">已深度思考</summary>\`
            );
          };

          /**
           * 初始化推荐问题
           */
          const initRecommendData = async () => {
            const { data } = await getRecommendQuestion(
              state.data.auth,
              state.data.messageId,
              state.data.userId
            );
            if (data) {
              state.recommendMessages = data;
            }
          };

          const displayHtml = computed(() => state.dialogContent);

          const recommendQuestion = computed(() => state.recommendMessages);

          /**
           * @description: 处理来自指标中台的数据
           * @param {*} event 消息
           */
          const handleMessage = (event) => {
            if (
              Object.prototype.toString.call(event.data) === "[object String]"
            ) {
              try {
                const message = JSON.parse(event.data);
                if (message?.type === "IFRAME_HEIGHT") {
                  // 找到与此消息ID匹配的特定iframe（指标平台使用的）
                  const zbPlatformIframes =
                    document.querySelectorAll("#app iframe");
                  zbPlatformIframes.forEach((iframe) => {
                    const urlParts = iframe.src?.split("/");
                    const iframeIdWithQuery = urlParts[urlParts.length - 1];
                    const iframeId = iframeIdWithQuery?.split("?")[0];
                    // 只调整匹配的iframe的高度
                    if (iframeId === message.id) {
                      // 单独加20px，因为出现了纵向滚动条，防止出现滚动条抖动o'的情况
                      // iframe.style.height = message.data.height + 10 + 'px !important';
                      const truthHeight = message.data.height === '100%' ? 500 : message.data.height;
                      iframe.style.height = truthHeight + 'px';
                      iframe.scrolling = 'no';
                    }
                  });
                }
              } catch (error) {
                console.error("解析消息时出错:", error);
              }
            }
          };

          onMounted(() => {
            // 处理数据
            state.data = ${JSON.stringify(data) || "{}"};
            state.dialogContent = handleTag(\`${dialogContent || ""}\`);
            // 获取推荐问题
            initRecommendData();

            window.addEventListener("message", handleMessage, false);
          });

          onUnmounted(() => {
            window.removeEventListener("message", handleMessage, false);
          });

          return {
            handleRecommendClick,
            displayHtml,
            recommendQuestion,
            themeName,
          };
        },
      };

      /**
       * 这里入口组件内容
       */
      const MainComponent = {
        template:
          "<subject-component v-if='state.isSocketConnect'></subject-component>",
        components: {
          subjectComponent,
        },
        setup() {
          // 获取缓存里的鹿小图全局变量数据
          const lxtGlobal = localStorage.getItem("lxtGlobal")
            ? JSON.parse(localStorage.getItem("lxtGlobal"))
            : {};

          const rootEmitter = mitt();

          let global = reactive(
            /* 插入应用级别的全局变量 相当于store中的rootData */
            /* globalVariableStart */
            {
              socketIp:
                lxtGlobal.socketIp || "http://192.168.0.202:7777/socketPath",
              socketPath: "",
              socketRoom: lxtGlobal.socketRoom || roomId || "admin",
            }
            /* globalVariableEnd */
          );

          let state = reactive({
            isSocketConnect: false, // socket 是否连接
          });

          // 创建 socket 连接
          let socket = null;
          if (global.socketIp) {
            const options = {};
            if (global?.socketPath) {
              options.path = global.socketPath;
            }
            socket = io(global.socketIp, options);
          }

          provide("root", {
            ...toRefs(global),
            rootEmit: rootEmitter.emit, // mitt 发送
            rootOn: rootEmitter.on, // mitt 接收
            rootOff: rootEmitter.off, // mitt 移除
            rootSocket: socket, // socket 实例
          });

          /**
           * 监听修改全局变量事件
           * @param obj 修改后的变量
           */
          rootEmitter.on("rootData:change", (obj) => {
            global = _.set(global, obj.key, obj.value);

            if (global.socketIp && global.socketRoom) {
              // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息
              socket.emit("message", {
                room: global.socketRoom, // 房间号
                type: "internalType:ChangeGlobalValue", // 需要保证此类型唯一性
                data: obj,
              });
            }
          });

          /**
           * 连接成功时进入对应的房间
           */
          if (socket) {
            socket.on("connect", function () {
              if (global.socketIp && global.socketRoom) {
                // 进入房间
                socket.emit("join-room", global.socketRoom);
                state.isSocketConnect = true;
              }
            });
          }

          /**
           * 打开文件
           * @param fileName 文件名称
           * @param fileUrl 文件地址
           */
          const customOpenFile = (fileName, fileUrl) => {
            if (!fileUrl) {
              return;
            }
            socket.emit("message", {
              type: "lxz_reference_open",
              room: global.socketRoom,
              data: {
                url: fileUrl,
                fileName,
              },
            });
          };

          window.customOpenFile = customOpenFile;

          /**
           * 接收到 socket 消息时触发
           * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}
           */
          if (socket) {
            socket.on("message", function (data) {
              // socket 监听全局变量的变化，然后合并值
              if (data.type === "internalType:ChangeGlobalValue") {
                // 合并 globa 的值
                global = _.set(global, data.data.key, data.data.value);
              } else {
                // 发送消息，通知其他页面
                rootEmitter.emit("rootSocket:change", data);
              }
            });
          }

          // 监听 socket 房间的变化
          watch(
            () => global.socketRoom,
            (val, oldVal) => {
              if (socket) {
                // 离开房间
                socket.emit("leave-room", oldVal);
                // 进入房间
                socket.emit("join-room", val);
              }
            }
          );

          onBeforeUnmount(() => {
            // 离开房间
            socket.emit("leave-room", global.socketRoom);
            // 断开连接
            socket.disconnect();
          });

          return {
            state,
          };
        },
      };

      const app = createApp(MainComponent);
      /* 下面的操作是去掉控制台Vue输出的警告信息  如果想开启警告信息可以把这个空函数注释掉 */
      app.config.warnHandler = function (msg, vm, trace) {
        // 空函数，不做任何处理
      };
      app
        .use(ElementPlus, {
          size: "small",
        })
        .mount("#app");
    </script>
  </body>
</html>
`;


// 流式输出
const voiceHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>我的应用名称</title>
    <link rel="shortcut icon" href="assets/images/favicon.ico" />
    <script src="./resources/vue.min.js"></script>
    <script src="./resources/socket.io.js"></script>
    <script src="./resources/lodash.min.js"></script>
    <link
      rel="stylesheet"
      href="./resources/element-plus/element-plus.min.css"
    />
    <script src="./resources/element-plus/element-plus.min.js"></script>
    <script src="./resources/element-plus/zhCn.js"></script>
    <script src="./resources/mitt.min.js"></script>
    <script src="./resources/axios.min.js"></script>
    <script src="./resources/customjs/marked.umd.min.js"></script>
    <script src="./resources/customjs/index.umd.js"></script>
    <link rel="stylesheet" href="./assets/style/themes.css" />
    <style>
      body {
        margin: 0;
        padding: 16px;
      }

      a,
      .lxz-common-link {
        color: #00f0ff !important;
      }

      body,
      html,
      #app {
        height: fit-content;
        color: #fff;
        /* height: fit-content; /*
        /* border-radius不生效 */
        /* border-radius: 12px; */
        background: #07494a;
        box-sizing: border-box;
      }

      #app iframe {
        /* height: 100% !important; */
      }

      ::-webkit-scrollbar {
        width: 0px; /* 或使用透明图片 */
        background: transparent; /* 重要 */
      }
      details {
        color: #fff !important;
        background-color: rgba(2, 76, 98, 0) !important;
        padding: 8px !important;
        border-radius: 4px !important;
        border-color: #41c57a !important;
        background: #0c5b5e !important;
      }

      /* 推荐消息样式 */
      .recommend-messages {
        margin: 16px 0;
        padding-bottom: 15px;
      }

      .recommend-messages .recommend-title {
        margin-bottom: 12px;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
      }

      .recommend-messages .recommend-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .recommend-messages .recommend-list .recommend-item {
        padding: 6px 12px;
        border: 1px solid transparent;
        border-radius: 16px;
        background: #0c5b5e;
        color: #fff;
        font-size: 13px;
        line-height: 20px;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .recommend-messages .recommend-list .recommend-item:hover {
        color: #00f0ff;
      }

      .recommend-messages .recommend-list .recommend-item:active {
        transform: scale(0.98);
      }
      .bg-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .bg-image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        height: auto;
        object-fit: none;
      }
    </style>
  </head>

  <body class="绿色版">
    <div id="app"></div>

    <script>
      /**
       * 这里定义全局使用的变量、方法
       */
      const {
        createApp,
        computed,
        ref,
        reactive,
        toRefs,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted,
        onErrorCaptured,
        onRenderTracked,
        onRenderTriggered,
        watch,
        provide,
        inject,
        nextTick,
      } = Vue;

      // 房间号
      const roomId = localStorage.getItem("lxtSocketRoom");

      // 主题
      const themeName = localStorage.getItem("lxtTheme");

      const bodyDom = document.querySelector("body");
      if (bodyDom && themeName) {
        bodyDom.className = themeName;
      }

      /**
       * 这里定义根组件内容
       */
      const subjectComponent = {
        template: \`
        <div ref="contentRef" class="content-wrapper">
          <div class='bg-container' v-if="!displayText && isThinking">思考中...</div>
          <div v-if="displayText" v-html="displayText"></div>
          <div class='bg-container' v-if="!displayText && !isThinking">
           <img class='bg-image' src='${otherParams.noDataImgSrc || "/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-03-22/220deb6d91f34515a786408e4743eba8.png"}' alt='' />
           </div>
        <!-- 推荐消息 -->
        <div v-if="displayText && recommendList?.length" class="recommend-messages">
          <div class="recommend-title">
            推荐问题
          </div>
          <div class="recommend-list">
            <div
              v-for="(item, index) in recommendList"
              :key="index"
              class="recommend-item"
              @click="handleRecommendClick(item)"
            >
              {{ item }}
            </div>
          </div>
        </div>
    </div>
        \`,
        setup() {
          // 页面内注入全局变量和事件
          const rootData = inject("root");
          const contentRef = ref(null);

          const global = reactive({
            ...toRefs(rootData),
          });

          const state = reactive({
            marked: {
              renderHtml: "", // 渲染HTML
              cursor: 0, // 递进下标
              isTyping: false, // 打字机效果是否正在执行
              markedContent: "", // 消息内容字符串
              lastTimestamp: null, // 控制打字速度
              requestId: null, // requestAnimationFrame 实例
            },
            msgList: [{}], // 存储收发消息的列表
            ctrlAbout: null, // 数据流实例
            skin: "", // 皮肤
            params: {
              auth: "",
              query: "",
              inputs: {},
              response_mode: "",
              user: "",
              conversation_id: "",
              file: "",
              parent_message_id: "",
            }, // 请求参数
          });

          const isThinking = ref(true);

          // 打字速度，单位为毫秒
          const typingSpeed = 10;

          // 基础ip
          const apiBaseUrl = "${otherParams.apiBaseUrl || "http://192.168.0.65:7777/"}";

          // 推荐问题地址
          const recommendQuestionUrl = apiBaseUrl + "${otherParams.recommendQuestionPath || "v1/messages"}";

          // chat-message地址
          const chatMessageUrl = apiBaseUrl + "${otherParams.chatMessagePath || "v1/chat-messages"}";

          /**
           * 获取推荐问题
           */
          const getRecommendQuestion = async (auth, messageId, userId) => {
            try {
              const res = await axios.get(
                recommendQuestionUrl +
                  "/" +
                  messageId +
                  "/suggested?user=" +
                  userId,
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: \`Bearer \${auth}\`,
                  },
                }
              );
              if (res.status === 200) {
                return res.data.data;
              }
              return []; // 添加默认返回值
            } catch (error) {
              console.error("Error in getRecommendQuestion:", error);
              return []; // 错误时返回空数组
            }
          };

          /**
           * 滚动到底部
           */
          const scrollToBottom = () => {
            nextTick(() => {
              const element = contentRef.value;
              if (element) {
                const isScrolledToBottom =
                  element.scrollHeight - element.scrollTop <=
                  element.clientHeight + 100;
                if (isScrolledToBottom) {
                  element.scrollTop = element.scrollHeight;
                }
              }
            });
          };

          /**
           * 发送消息
           * @param auth 请求头
           * @param params 参数
           */
          const sendMessage = async (auth, params) => {
            isThinking.value = true;
            // 数据流
            state.ctrlAbout = new AbortController();
            try {
              await fetchEventSource.fetchEventSource(chatMessageUrl, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: \`Bearer \${auth}\`,
                },
                signal: state.ctrlAbout.signal,
                body: JSON.stringify(params),
                openWhenHidden: true,
                async onmessage(ev) {
                  if (!ev || !ev.data) return;
                  console.log("鹿小图V2.0接收到 ==message", ev);

                  // 初始化
                  const lastMsg = state.msgList[state.msgList.length - 1] || "";

                  // 响应数据
                  const res = JSON.parse(ev.data);

                  // 处理消息事件
                  switch (res.event) {
                    case "message":
                      isThinking.value = false;
                      // 处理消息
                      let receiveMsgText = res.answer;
                      if (receiveMsgText) {
                        // 转换特殊字符
                        if (receiveMsgText.includes("Thinking")) {
                          receiveMsgText = receiveMsgText.replace(
                            /Thinking/g,
                            "正在思考中"
                          );
                        }

                        if (
                          receiveMsgText.includes("<think>") ||
                          receiveMsgText.includes("</think>")
                        ) {
                          receiveMsgText = handleThinkTags(receiveMsgText);
                        }
                        lastMsg.originText += receiveMsgText;

                        // 判断是否是标签工厂
                        if (isTagFactory(receiveMsgText)) {
                          handleTagFactory(receiveMsgText, lastMsg);
                        } else {
                          startTypeWriter(receiveMsgText);
                          state.msgList[state.msgList.length - 1].text =
                            marked.parse(lastMsg.originText);
                        }
                      }
                      break;
                    case "message_end":
                      console.log(${otherParams?.opacity}, 123454)
                      // 通知lego，流式输出完毕
                      rootData.rootSocket.emit("message", {
                          room: global.socketRoom,
                          type: "voice-message-end",
                          data: {},
                      });
                      const data = await getRecommendQuestion(
                        auth,
                        res.message_id,
                        params.user
                      );
                      if (data) {
                        state.msgList[
                          state.msgList.length - 1
                        ].recommendQuestion = data;
                      }
                      // rootData.rootSocket.emit("message", {
                      //   room: global.socketRoom,
                      //   type: "lxz-refresh-history",
                      //   data: {},
                      // });
                      // 如果是透明的，就要关闭弹窗，否则不关闭弹窗
                      if (Number("${otherParams?.opacity}") === 0) {
                        console.log('关闭透明弹窗-立春测试');
                        rootData.rootSocket.emit("message", {
                          room: global.socketRoom,
                          type: "closeFlowAnswerDialog",
                          data: {},
                        });
                      }
                      break;
                    case "workflow_finished":
                      const deepThinkTime = res.data?.elapsed_time
                        ? res.data?.elapsed_time?.toFixed(2)
                        : 0;
                      setTimeout(() => {
                        const details = document.querySelectorAll("details")[0];
                        if (details) {
                          const dom1 = details.querySelector("summary");
                          if (dom1) {
                            dom1.textContent = deepThinkTime
                              ? \`已深度思考 (用时 \${deepThinkTime} 秒)\`
                              : "已深度思考";
                            details.open = false;
                          }
                        }
                      }, 500);
                      break;
                    case "error":
                      isThinking.value = false;
                      break;
                  }
                },
              });
            } catch (error) {
              console.error("鹿小图2.0  Error in sendMessage:", error);
            }
          };

          /**
           * 处理标签
           * @param text 原字符串
           * @returns {string} 处理后的字符串
           */
          const handleThinkTags = (text) => {
            let result = text;
            if (text.includes("<think>")) {
              result = result.replace(/think/g, "details open");
            } else {
              result = result.replace(/think/g, "details");
            }
            return insertTagAfter(
              result,
              "<details open>",
              '<summary class="deep-title">正在思考中...</summary>'
            );
          };

          /**
           * 点击推荐问题给大屏发消息
           * @param item 推荐问题
           */
          const handleRecommendClick = (item) => {
            state.params.query = item;
            rootData.rootSocket.emit("message", {
              room: global.socketRoom,
              type: "send-chat-message",
              data: state.params,
            });
          };

          /**
           * 是否标签工厂
           * @param text 原字符串
           * @returns {boolean} 是否
           */
          const isTagFactory = (text) => {
            return text.includes("renderType") && text.includes("content");
          };

          /**
           * 处理标签工厂
           * @param text 原字符串
           * @param lastMsg 上一条消息
           */
          const handleTagFactory = (text, lastMsg) => {
            const tagParams = JSON.parse(text);
            state.msgList[state.msgList.length - 1].isTag = true;
            state.msgList[state.msgList.length - 1].tagParams = tagParams;
          };

          /**
           * 清空打字机内容
           */
          const clearMarkedContent = () => {
            state.marked.markedContent = "";
            state.marked.renderHtml = "";
            state.marked.cursor = 0;
          };

          /**
           * 打字机动画回调
           * @param timestamp 时间戳
           */
          const typeWriter = (timestamp) => {
            if (!state.marked.lastTimestamp) {
              state.marked.lastTimestamp = timestamp;
            }
            const elapsed = timestamp - state.marked.lastTimestamp;

            if (
              !state.marked.isTyping &&
              state.marked.cursor < state.marked.markedContent.length
            ) {
              state.marked.isTyping = true;
            }

            if (
              elapsed > typingSpeed &&
              state.marked.cursor < state.marked.markedContent.length
            ) {
              state.marked.cursor++;
              const content = marked.parse(
                state.marked.markedContent.slice(0, state.marked.cursor)
              );
              state.marked.renderHtml = content;
              state.marked.lastTimestamp = timestamp;
            }

            if (state.marked.cursor < state.marked.markedContent.length) {
              state.marked.requestId = requestAnimationFrame(typeWriter);
            } else {
              state.marked.isTyping = false;
              state.marked.lastTimestamp = null;
              if (state.marked.requestId !== null) {
                cancelAnimationFrame(state.marked.requestId);
              }
            }
          };

          /**
           * 开启打字机效果
           * @param text 原字符串
           */
          const startTypeWriter = (text) => {
            state.marked.markedContent += text;
            if (!state.marked.isTyping) {
              requestAnimationFrame(typeWriter);
            }
          };

          /**
           * 重置
           */
          const resetParams = () => {
            state.marked = {
              renderHtml: "", // 渲染HTML
              cursor: 0, // 递进下标
              isTyping: false, // 打字机效果是否正在执行
              markedContent: "", // 消息内容字符串
              lastTimestamp: null, // 控制打字速度
              requestId: null, // requestAnimationFrame 实例
            };
            state.msgList = [{}];
            if (state.ctrlAbout) {
              state.ctrlAbout?.abort();
              state.ctrlAbout =null;
            }
          };

          // 显示的文本
          const displayText = computed(() => handleIframeSkin(state.marked.renderHtml || "", state.skin));

          // 推荐问题
          const recommendList = computed(
            () =>
              state.msgList[state.msgList.length - 1].recommendQuestion || []
          );

          /**
           * 处理iframe皮肤
           */
          const handleIframeSkin = (str, skin) => {
            // 判断是否包含iframe标签
            if (!str.includes("<iframe")) {
              return str;
            }

            // 使用正则表达式匹配 iframe 的 src 属性
            return str.replace(/src="([^"]+)"/g, (match, url) => {
              const newUrl = url.includes("?")
                ? \`\${url}&skinCode=\${skin}\`
                : \`\${url}?skinCode=\${skin}\`;
              return \`src="\${newUrl}"\`;
            });
          };

          /**
           * @description: 处理来自指标中台的数据
           * @param {*} event
           * @return {*}
           */
          const handleMessage = (event) => {
            if (
              Object.prototype.toString.call(event.data) === "[object String]"
            ) {
              try {
                const message = JSON.parse(event.data);
                if (message?.type === "IFRAME_HEIGHT") {
                  // 找到与此消息ID匹配的特定iframe（指标平台使用的）
                  const zbPlatformIframes =
                    document.querySelectorAll("#app iframe");
                  console.log("流式输出-监听 message2", zbPlatformIframes);
                  zbPlatformIframes.forEach((iframe) => {
                    const urlParts = iframe.src?.split("/");
                    const iframeIdWithQuery = urlParts[urlParts.length - 1];
                    const iframeId = iframeIdWithQuery?.split("?")[0];

                    // 只调整匹配的iframe的高度
                    if (iframeId === message.id) {
                      // 单独加20px，因为出现了纵向滚动条，防止出现滚动条抖动o'的情况
                      // iframe.style.height = message.data.height + 10 + 'px !important';
                      const truthHeight = message.data.height === '100%' ? 500 : message.data.height;
                      iframe.style.height = truthHeight + 'px';
                      iframe.scrolling = 'no';
                    }
                  });
                }
              } catch (error) {
                console.error("解析消息时出错:", error);
              }
            }
          };

          onMounted(() => {
            resetParams();
            window.addEventListener("message", handleMessage, false);

            // 监听dom高度变化，自动滚动到底部
            const observer = new ResizeObserver(() => {
              if (contentRef.value) {
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                });
              }
            });

            if (contentRef.value) {
              observer.observe(contentRef.value);
            }

            // 处理数据
            state.skin = "${otherParams.skin || "dark-blackish-green"}";
            state.params = ${JSON.stringify(data) || "{}"};

            const {
                    auth = "",
                    query = "",
                    inputs = {},
                    response_mode = "",
                    user = "",
                    parent_message_id = "",
                    conversation_id = "",
                  } = state.params || {};
                  // 请求回答
                  sendMessage(auth, {
                    query,
                    inputs,
                    response_mode,
                    user,
                    conversation_id,
                    parent_message_id,
                  });

          });

          onUnmounted(() => {
            window.removeEventListener("message", handleMessage, false);

            rootData.rootOff("rootSocket:change");
            // 清理动画
            if (state.marked.requestId !== null) {
              cancelAnimationFrame(state.marked.requestId);
            }
            // 阻断数据流
            resetParams();
            // 停止监听
            if (contentRef.value) {
              observer.disconnect();
            }
          });

          return {
            displayText,
            recommendList,
            contentRef,
            handleRecommendClick,
            isThinking,
          };
        },
      };

      /**
       * 这里入口组件内容
       */
      const MainComponent = {
        template:
          "<subject-component v-if='state.isSocketConnect'></subject-component>",
        components: {
          subjectComponent,
        },
        setup() {
          // 获取缓存里的鹿小图全局变量数据
          const lxtGlobal = localStorage.getItem("lxtGlobal")
            ? JSON.parse(localStorage.getItem("lxtGlobal"))
            : {};

          const rootEmitter = mitt();

          let global = reactive(
            /* 插入应用级别的全局变量 相当于store中的rootData */
            {
              socketIp:
                lxtGlobal.socketIp || "http://192.168.0.202:7777/socketPath",
              socketPath: "",
              socketRoom: lxtGlobal.socketRoom || roomId || "admin",
            }
          );

          let state = reactive({
            isSocketConnect: false, // socket 是否连接
          });

          // 创建 socket 连接
          let socket = null;
          if (global.socketIp) {
            const options = {};
            if (global?.socketPath) {
              options.path = global.socketPath;
            }
            socket = io(global.socketIp, options);
          }

          provide("root", {
            ...toRefs(global),
            rootEmit: rootEmitter.emit, // mitt 发送
            rootOn: rootEmitter.on, // mitt 接收
            rootOff: rootEmitter.off, // mitt 移除
            rootSocket: socket, // socket 实例
          });

          /**
           * 监听修改全局变量事件
           * @param obj 修改后的变量
           */
          rootEmitter.on("rootData:change", (obj) => {
            global = _.set(global, obj.key, obj.value);

            if (global.socketIp && global.socketRoom) {
              // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息
              socket.emit("message", {
                room: global.socketRoom, // 房间号
                type: "internalType:ChangeGlobalValue", // 需要保证此类型唯一性
                data: obj,
              });
            }
          });

          /**
           * 连接成功时进入对应的房间
           */
          if (socket) {
            socket.on("connect", function () {
              if (global.socketIp && global.socketRoom) {
                // 进入房间
                socket.emit("join-room", global.socketRoom);
                state.isSocketConnect = true;
              }
            });
          }

          /**
           * 打开文件
           * @param fileName 文件名称
           * @param fileUrl 文件地址
           */
          const customOpenFile = (fileName, fileUrl) => {
            if (!fileUrl) {
              return;
            }
            socket.emit("message", {
              type: "lxz_reference_open",
              room: global.socketRoom,
              data: {
                url: fileUrl,
                fileName,
              },
            });
          };

          window.customOpenFile = customOpenFile;

          /**
           * 接收到 socket 消息时触发
           * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}
           */
          if (socket) {
            socket.on("message", function (data) {
              // socket 监听全局变量的变化，然后合并值
              if (data.type === "internalType:ChangeGlobalValue") {
                // 合并 globa 的值
                global = _.set(global, data.data.key, data.data.value);
              } else {
                // 发送消息，通知其他页面
                rootEmitter.emit("rootSocket:change", data);
              }
            });
          }

          // 监听 socket 房间的变化
          watch(
            () => global.socketRoom,
            (val, oldVal) => {
              if (socket) {
                // 离开房间
                socket.emit("leave-room", oldVal);
                // 进入房间
                socket.emit("join-room", val);
              }
            }
          );

          onBeforeUnmount(() => {
            // 离开房间
            socket.emit("leave-room", global.socketRoom);
            // 断开连接
            socket.disconnect();
          });

          return {
            state,
          };
        },
      };

      const app = createApp(MainComponent);
      /* 下面的操作是去掉控制台Vue输出的警告信息  如果想开启警告信息可以把这个空函数注释掉 */
      app.config.warnHandler = function (msg, vm, trace) {
        // 空函数，不做任何处理
      };
      app
        .use(ElementPlus, {
          size: "small",
        })
        .mount("#app");
    </script>
  </body>
</html>
`;

const dialogTypeToHtmlMap = {
  'history': historyHtml,
  'latest': latestHtml,
  'voice': voiceHtml,
}

return dialogTypeToHtmlMap[dialogType] || ""
};
const handleDynamicDialogStyle = (title,width,height,left,top) => {
return {
  dialogStyle: {
    "dialogVisible": true,
    "title": title,
    "minimizedTitle": "",
    "cancelText": "",
    "confirmText": "",
    "maxPosition": {
      "width": `${width}px`,
      "height": `${height}px`,
      "left": `${left}px`,
      "top": `${top}px`,
      "backgroundColor": "var(--t-section-bg)",
      "opacity": 1,
    },
    "minPosition": {
      "width": "200px",
      "height": "38px",
      "left": "unset",
      "top": "unset",
      "right": "200px",
      "bottom": "250px",
      "borderTopLeftRadius": "4px",
      "borderTopRightRadius": "4px",
      "borderBottomLeftRadius": "4px",
      "borderBottomRightRadius": "4px",
      "border": "1px solid var(--t-point-pop-border)"
    },
    "minimizedHeaderStyle": {
      "width": "100%",
      "height": "100%",
      "padding": "20px",
      "display": "flex",
      "align-items": "center",
      "color": "var(--t-white)"
    },
    "cStyle": {
      "wrapper": {
        "default": {
          "backgroundColor": "rgba(7, 29, 11, 0.95)",
          "width": `${width}px`,
          "height": `${height}px`,
          "overFlow": "hidden",
          "borderTopLeftRadius": "16px",
          "borderTopRightRadius": "16px",
          "borderBottomLeftRadius": "16px",
          "borderBottomRightRadius": "16px",
          "overflow": "hidden",
          "borderLeft": "1px solid rgba(39,111,71,0.66)",
          "borderTop": "1px solid rgba(39,111,71,0.66)",
          "borderRight": "1px solid rgba(39,111,71,0.66)",
          "borderBottom": "1px solid rgba(39,111,71,0.66)",
          "animationName": "",
          "left": "200px",
          "top": "200px",
          "zIndex": 9999,
          "position": "unset"
        }
      },
      "mask": {
        "default": {
          "backgroundColor": "transparent"
        }
      },
      "header": {
        "default": {
          "-webkit-mask-image": "",
          "backgroundRepeat": "repeat",
          "-webkit-mask-repeat": "",
          "backgroundSize": "auto",
          "-webkit-mask-size": "",
          "backgroundPosition": "0% 0%",
          "-webkit-mask-position": "",
          "backgroundColor": "var(--t-point-pop-header-bg)",
          "width": "100%",
          "display": "flex",
          "justifyContent": "space-between",
          "paddingLeft": "24px",
          "paddingTop": "16px",
          "paddingRight": "24px",
          "paddingBottom": "16px"
        }
      },
      "footer": {
        "default": {
          "display": "none"
        }
      },
      "title": {
        "default": {
          "fontSize": "20px",
          "color": "var(--t-white)",
          "backgroundImage": "url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2023-06-29/091843c42ddf4d2db3671288d5013b02.svg)",
          "-webkit-mask-image": "",
          "backgroundRepeat": "no-repeat",
          "-webkit-mask-repeat": "",
          "backgroundSize": "40px auto",
          "-webkit-mask-size": "",
          "backgroundPosition": "0% 50%",
          "-webkit-mask-position": "",
          "position": "relative",
          "textIndent": "40px",
          "lineHeight": "20px",
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "flex-start"
        }
      },
      "closeButton": {
        "default": {
          "background": "var(--t-point-pop-close-btn)",
          "marginLeft": "8px",
          "cursor": "pointer",
          "width": "22px",
          "height": "22px",
          "background-size": "22px",
          "background-repeat": "no-repeat",
          "background-position": "center",
          "color": "rgba(255, 255, 255, 0)"
        },
        "hover": {
          "color": "rgba(255, 255, 255, 0)"
        }
      },
      "minButton": {
        "default": {
          "color": "rgba(255, 255, 255, 1)",
          "backgroundColor": "rgba(61, 102, 66, 0.2)",
          "borderLeft": "1px solid rgba(121,255,175,0.6)",
          "borderTop": "1px solid rgba(121,255,175,0.6)",
          "borderRight": "1px solid rgba(121,255,175,0.6)",
          "borderBottom": "1px solid rgba(121,255,175,0.6)",
          "borderTopLeftRadius": "2px",
          "borderTopRightRadius": "2px",
          "borderBottomLeftRadius": "2px",
          "borderBottomRightRadius": "2px",
          "cursor": "pointer",
          "width": "28px",
          "height": "28px",
          "display": "none"
        },
        "hover": {
          "color": "rgba(255, 255, 255, 1)"
        }
      },
      "maxButton": {
        "default": {
          "color": "rgba(255, 255, 255, 1)",
          "backgroundColor": "rgba(61, 102, 66, 0.2)",
          "borderLeft": "1px solid rgba(121,255,175,0.6)",
          "borderTop": "1px solid rgba(121,255,175,0.6)",
          "borderRight": "1px solid rgba(121,255,175,0.6)",
          "borderBottom": "1px solid rgba(121,255,175,0.6)",
          "borderTopLeftRadius": "2px",
          "borderTopRightRadius": "2px",
          "borderBottomLeftRadius": "2px",
          "borderBottomRightRadius": "2px",
          "cursor": "pointer",
          "width": "28px",
          "height": "28px"
        },
        "hover": {
          "color": "rgba(255, 255, 255, 1)",
          "cursor": "pointer"
        }
      },
      "content": {
        "default": {
          "overflow": "auto",
          "position": "relative",
          "padding": "20px",
          "height": "auto",
          "width": "100%",
          "height": "calc(100% - 60px)",
          "max-height": "1000px",
          "display": "flex",
          "flexDirection": "row",
          "alignItems": "center",
          "justifyContent": "center"
        }
      },
      "headerCustomContainer": {
        "default": {
          "position": "relative"
        }
      },
      "buttonControls": {
        "default": {
          "position": "relative"
        }
      },
      "minimizedTitle": {
        "default": {
          "color": "rgba(228, 106, 85, 1)"
        }
      }
    },
    "dialogMinimized": false,
    "dialogMaximized": true,
    "contentComName": "lxzCkwxDialog",
    'on-close': () => { },
  },
  iframeContainerStyle: {
    "width": "100%",
    "height": "100%"
  },
  iframeContentStyle: {
    "cStyle": {
      "wrapper": {
        "default": {
          "width": "100%",
          "overflow": "hidden",
          "borderRadius": "14px",
          "height": "100%"
        }
      }
    }
  }
}
};
const getLxzNextDialogPosition = (id) => {
// 获取下一个可用位置------------------------

// 查询当前id是否创建过位置
const itemPosition = state.dialogPosition.positionStack.find(i => i.id === id);
if (itemPosition) {
  return itemPosition;
}

// 没有位置时使用基础位置
if (state.dialogPosition.positionStack.length === 0) {
  // 首次使用基础位置
  const basePos = state.dialogPosition.initPosition;
  state.dialogPosition.positionStack.push({
    ...basePos,
    id
  });
  // 页面上没弹框时清空回收位置数组
  state.dialogPosition.recycledPositions = [];
  return basePos;
}

// 优先使用回收的位置
if (state.dialogPosition.recycledPositions.length > 0) {
  const last = state.dialogPosition.recycledPositions.pop();
  state.dialogPosition.positionStack.push({
    ...last,
    id
  });
  return last;
}

// 基于上一个位置创建偏移
const lastPos = state.dialogPosition.positionStack[state.dialogPosition.positionStack.length - 1];
const newPos = {
  x: lastPos.x + state.dialogPosition.offset.x,
  y: lastPos.y + state.dialogPosition.offset.y,
  id
};

// 边界检查
newPos.x = Math.min(newPos.x, window.innerWidth - 800);
newPos.y = Math.min(newPos.y, window.innerHeight - 570);

state.dialogPosition.positionStack.push(newPos);
return newPos;
};
const initGetChatMsgParam = () => {
const token = localStorage.getItem('token');
const userToken = sessionStorage.getItem('userToken');
global.lxzVariableObj.voiceParam.userToken = userToken || token;

apiRegistry.getChatMsgParam.request();
// getChatMsgParam();
};
const handleVoiceCloseAllDialog = () => {
  console.log('生态云-处理语音交互-关闭弹窗-------------------------------->');
  // 关闭流式输出弹窗
  rootData.rootSocket.emit("message", {
      type: "closeFlowAnswerDialog",
      room: global.socketRoom,
      data: {}
  });
  // 关闭语音相关弹窗
  closeDialog();
  // 关闭业务弹窗-吴可菲原来的代码被挪到了这方法里
  // closeBusinessDialog();
};
const setCurrentRoom = () => {
localStorage.setItem('currentRoomId', global.socketRoom);
// 获取缓存里的鹿小图全局变量数据
const lxtGlobal = localStorage.getItem("lxtGlobal")
  ? JSON.parse(localStorage.getItem("lxtGlobal"))
  : {};
lxtGlobal.socketRoom = global.socketRoom;
localStorage.setItem("lxtGlobal", JSON.stringify(lxtGlobal));

};
const setTest = (msg) => {
console.log('公共区快接收到changeValDataAllApplication消息：',msg);
};
const handleBrain = () => {
state.showBrainPanel = !state.showBrainPanel;
};
const handleBrainSelect = (url) => {
window.open(url);

state.showBrainPanel = false;
};
const initBrainUrl = () => {
state.cha = `${global.brainBaseUrl}${state.cha}`;
state.guan = `${global.brainBaseUrl}${state.guan}`;
state.yong = `${global.brainBaseUrl}${state.yong}`;
};
const setTheme = () => {
const className = window.document.body.className;

global.theme = className;

const getQueryString = (name) => {
  // 首先尝试从URL查询参数中获取
  const regSearch = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  const rSearch = window.location.search.substring(1).match(regSearch);
  if (rSearch != null) return decodeURI(rSearch[2]);

  // 如果查询参数中没有找到，则从hash部分获取
  const hashParams = window.location.hash.split('?')[1];
  if (hashParams) {
    const regHash = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    const rHash = hashParams.match(regHash);
    if (rHash != null) return decodeURI(rHash[2]);
  }

  return null;
};

let skin = getQueryString("skin");
if (skin) {
  let pageThemeMapping = {
    'green': '绿色主题',
    'blue': '蓝色主题',
    'pc-light': 'PC浅色版'
  };


  if (pageThemeMapping[skin]) {
    global.theme = pageThemeMapping[skin];
  }
  window.document.body.className = global.theme;
}
};
const menuWatcher = () => {
watch(() => global.contentComponent, () => {
  console.log("global.contentComponent", global.contentComponent);
  state.showBottom = global.contentComponent !== 'cockpitAllComponent' && global.contentComponent !== 'gztActiveStateComponent';
})
};
const initLogin = () => {
/* cas登录 */
const casUt = getQueryString2('casut');
if (casUt) {
  // 如果url上面有casUt
  apiRegistry.getUserInfo.request(casUt);
}
};
const getQueryString2 = (key) => {
const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
const r = window.location.search.substring(1).match(reg);
if (r != null) return decodeURI(r[2]);
return null;
};
const setStyle = () => {

const sheet = new CSSStyleSheet();
sheet.insertRule(`body .t-tabs .el-tabs--right .el-tabs__nav-wrap.is-right.is-scrollable {
padding: 0px;
}`);
sheet.insertRule(`body .t-tabs .is-scrollable .el-tabs__nav.is-right{
  position: relative;
  top: 30px;
}`)
sheet.insertRule(`body .t-tabs .el-tabs__nav-scroll{
  overflow-y: auto;
}`)
sheet.insertRule(`body .t-tabs .el-tabs__nav-prev{
  display: none;
}`)
sheet.insertRule(`body .t-tabs .el-tabs__nav-next{
  display: none;
}`)

document.adoptedStyleSheets = [sheet];
};
const createDialog = (data) => {
const { headerComName, contentComName, maxWidth, maxHeight, minWidth, minHeight, isScalse, title } = data;
// 接收弹窗ID？如果有ID就会替换当前窗口 如果没有就是新建
// 接收是否显示蒙版？如果有就不能点击下方内容  如果没有就是可以点击其他地方
const dialog = mountDynamicComponent(
  {
    componentName: 'TDialog',
    // mountTo: document.getElementById('t-l-c-root'),
    mountTo: document.querySelector('#t-l-c-root'),
    // 弹窗组件的参数  样式、属性等提前定义好，然后在页面配置中拷贝过来
    props: {
      mountTo: '#t-l-c-root',
      "dialogVisible": true,
      "title": title || '',
      "minimizedTitle": title || '',
      "dialogMinimized": false,
      "dialogMaximized": true,
      "contentComName": contentComName,
      "headerComName": headerComName,
      "cancelText": "111",
      "confirmText": "确认",
      "isContentScale": false,
      "maxPosition": {
        "width": maxWidth || "1600px",
        "height": maxHeight || "997px",
        "left": `calc(50% - ${Number(maxWidth?.replace('px', '')) / 2 || '800'}px)`,
        "top": `calc(50% - ${Number(maxHeight?.replace('px', '')) / 2 || '458'}px)`,
        // "--text-size-14": "18px",
        "--scalc": '1.5'
      },
      "minPosition": {
        "width": minWidth || "500px",
        "height": minHeight || "300px",
        "left": `calc(50% - ${Number(minWidth?.replace('px', '')) / 2 || '250'}px)`,
        "top": `calc(50% - ${Number(minHeight?.replace('px', '')) / 2 || '150'}px)`,
        "--text-size-14": "14px",
        "--scalc": '1'
      },
      "minimizedHeaderStyle": {
        "width": "100%",
        "display": "flex",
        "align-items": "center"
      },

      "cStyle": {
        "wrapper": {
          "default": {
            "backgroundColor": "var(--business-dialog-bg)",
            "width": "800px",
            "height": "0px",
            // "boxShadow": "0px 4px 25px 0px #275B2A",
            "overFlow": "hidden",
            "borderTopLeftRadius": "16px",
            "borderTopRightRadius": "16px",
            "borderBottomLeftRadius": "16px",
            "borderBottomRightRadius": "16px",
            "overflow": "hidden",
            "borderLeft": "1px solid var(--business-show-bg60)",
            "borderTop": "1px solid var(--business-show-bg60)",
            "borderRight": "1px solid var(--business-show-bg60)",
            "borderBottom": "1px solid var(--business-show-bg60)",
            "animationName": "",
            "left": "200px",
            "top": "200px",
            "zIndex": 9999,
            "position": "unset"
          }
        },
        "mask": {
          "default": {
            "backgroundColor": "transparent",
            "pointerEvents": "all"
          }
        },
        "header": {
          "default": {
            "backgroundColor": "var(--business-show-bg30)",
            "width": "100%",
            "display": "flex",
            "justifyContent": "space-between",
            "paddingLeft": "24px",
            "paddingTop": "0",
            "paddingRight": "24px",
            "paddingBottom": "0",
            "height": "47px",
            "borderBottom": "1px solid var(--business-show-bg60)"
          }
        },
        "footer": {
          "default": {
            "display": "none"
          }
        },
        "title": {
          "default": {
            "height": "26px",
            "fontFamily": "思源",
            "fontSize": "18px",
            "color": "rgb(255, 255, 255)",
            "background": "unset",
            "backgroundClip": "unset",
            "lineHeight": "16px",
            "letterSpacing": "0px",
            "textAlign": "center",
            "backgroundImage": "url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-12-02/996e4cffb01f4c4ab284b6ec97ae2354.svg)",
            "-webkit-mask-image": "",
            "backgroundRepeat": "no-repeat",
            "-webkit-mask-repeat": "",
            "-webkit-mask-size": "",
            "-webkit-mask-position": "",
            "paddingLeft": "32px",
            "position": "relative",
            "lineHeight": "20px",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "flex-start",
            "pointer-events": "none",
          }
        },
        "minimizedTitle": {
          "default": {
            "height": "26px",
            "fontFamily": "思源",
            "fontSize": "18px",
            "color": "rgb(255, 255, 255)",
            "background": "unset",
            "backgroundClip": "unset",
            "lineHeight": "16px",
            "letterSpacing": "0px",
            "textAlign": "center",
            "backgroundImage": "url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-12-02/996e4cffb01f4c4ab284b6ec97ae2354.svg)",
            "-webkit-mask-image": "",
            "backgroundRepeat": "no-repeat",
            "-webkit-mask-repeat": "",
            "backgroundSize": "26px 26px",
            "-webkit-mask-size": "",
            "backgroundPosition": "0% 50%",
            "-webkit-mask-position": "",
            "paddingLeft": "32px",
            "position": "relative",
            "lineHeight": "20px",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "flex-start",
            "pointer-events": "none",
          }
        },
        "closeButton": {
          "default": {
            "color": "rgba(255, 255, 255, 1)",
            "backgroundColor": "var(--business-show-bg30)",
            "borderLeft": "1px solid var(--business-btn-default)",
            "borderTop": "1px solid var(--business-btn-default)",
            "borderRight": "1px solid var(--business-btn-default)",
            "borderBottom": "1px solid var(--business-btn-default)",
            "borderTopLeftRadius": "4px",
            "borderTopRightRadius": "4px",
            "borderBottomLeftRadius": "4px",
            "borderBottomRightRadius": "4px",
            "marginLeft": "8px",
            "cursor": "pointer",
            "width": "24px",
            "height": "24px",
            "backgroundImage": "url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "auto",
            "backgroundPosition": "50% 50%",
            "fontSize": "0px"
          },
          "hover": {
            "borderLeft": "1px solid var(--business-theme)",
            "borderTop": "1px solid var(--business-theme)",
            "borderRight": "1px solid var(--business-theme)",
            "borderBottom": "1px solid var(--business-theme)",
            "borderTopLeftRadius": "4px",
            "borderTopRightRadius": "4px",
            "borderBottomLeftRadius": "4px",
            "borderBottomRightRadius": "4px",
          }
        },
        "minButton": {
          "default": {
            display: "none",
            "color": "rgba(255, 255, 255, 1)",
            "backgroundColor": "var(--business-show-bg30)",
            "borderLeft": "1px solid var(--business-btn-default)",
            "borderTop": "1px solid var(--business-btn-default)",
            "borderRight": "1px solid var(--business-btn-default)",
            "borderBottom": "1px solid var(--business-btn-default)",
            "borderTopLeftRadius": "4px",
            "borderTopRightRadius": "4px",
            "borderBottomLeftRadius": "4px",
            "borderBottomRightRadius": "4px",
            "cursor": "pointer",
            "width": "24px",
            "height": "24px",
            "backgroundImage": "url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-05-14/6223de110e0f4d4bb6398681dabecc9d.svg)",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "auto",
            "backgroundPosition": "50% 50%",
            "fontSize": "0px"
          },
          "hover": {
            "borderLeft": "1px solid var(--business-theme)",
            "borderTop": "1px solid var(--business-theme)",
            "borderRight": "1px solid var(--business-theme)",
            "borderBottom": "1px solid var(--business-theme)",
            "borderTopLeftRadius": "4px",
            "borderTopRightRadius": "4px",
            "borderBottomLeftRadius": "4px",
            "borderBottomRightRadius": "4px",
          }
        },
        "maxButton": {
          "default": {
            display: "none",
            "color": "rgba(255, 255, 255, 1)",
            "backgroundColor": "var(--business-show-bg30)",
            "borderLeft": "1px solid var(--business-btn-default)",
            "borderTop": "1px solid var(--business-btn-default)",
            "borderRight": "1px solid var(--business-btn-default)",
            "borderBottom": "1px solid var(--business-btn-default)",
            "borderTopLeftRadius": "4px",
            "borderTopRightRadius": "4px",
            "borderBottomLeftRadius": "4px",
            "borderBottomRightRadius": "4px",
            "cursor": "pointer",
            "width": "24px",
            "height": "24px",
            "backgroundImage": "url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-05-14/a330780194a5454982c8c1d04f890304.svg)",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "auto",
            "backgroundPosition": "50% 50%",
            "fontSize": "0px"
          },
          "hover": {
            "borderLeft": "1px solid var(--business-theme)",
            "borderTop": "1px solid var(--business-theme)",
            "borderRight": "1px solid var(--business-theme)",
            "borderBottom": "1px solid var(--business-theme)",
            "borderTopLeftRadius": "4px",
            "borderTopRightRadius": "4px",
            "borderBottomLeftRadius": "4px",
            "borderBottomRightRadius": "4px",
          }
        },
        "content": {
          "default": {
            "overflow": "auto",
            "position": "relative",
            "padding": "0",
            "height": "auto",
            // "max-height": "500px",
            "display": "flex",
            "flexDirection": "row",
            "alignItems": "center",
            "justifyContent": "center"
          }
        },
        "headerCustomContainer": {
          "default": {
            "position": "relative",
            "pointerEvents": "none"
          }
        },
        "buttonControls": {
          "default": {
            "position": "relative"
          }
        },
        "minimizedTitle": {
          "default": {
            "height": "26px",
            "fontFamily": "思源",
            "fontSize": "18px",
            "color": "rgb(255, 255, 255)",
            "background": "unset",
            "backgroundClip": "unset",
            "lineHeight": "16px",
            "letterSpacing": "0px",
            "textAlign": "center",
            "backgroundImage": "url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-12-02/996e4cffb01f4c4ab284b6ec97ae2354.svg)",
            "-webkit-mask-image": "",
            "backgroundRepeat": "no-repeat",
            "-webkit-mask-repeat": "",
            "-webkit-mask-size": "",
            "-webkit-mask-position": "",
            "paddingLeft": "32px",
            "position": "relative",
            "lineHeight": "20px",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "flex-start",
            "pointer-events": "none",
          }
        }
      },
    },
  },
  /* 关闭弹窗的回调 参数是组件的ID */
  (comId) => {
    // 这里执行关闭弹窗后的操作
    console.log(comId)

    // 清除地图涟漪效果
    rootData.rootSocket.emit(
      'message',  // 固定的消息名称，不能修改
      {
        room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
        type: 'clearGoToPoint',  // 消息类型名称
      }
    );
  }
);

// 全局存储弹窗实例 用于关闭弹窗使用
global.dialogInstance = dialog;
};
const onchange1742265442192_0_0 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
setSelect(value);
};
const onchange1741767774132_0_0 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
setSelect(value);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeRegion", // 消息名称
data: {"REGION_NAME":global.REGION_NAME,"REGION_CODE":global.REGION_CODE}, // 发送的数据
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getChatMsgParam: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.lxzVariableObj.voiceParam.getParamContext","method":"get","baseURL":"global.lxzVariableObj.voiceParam.getParamIp","params":{"userToken":"global.lxzVariableObj.voiceParam.userToken","appId":"global.lxzVariableObj.voiceParam.appId"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.lxzVariableObj.voiceParam.getParamContext,"method":"get","baseURL":global.lxzVariableObj.voiceParam.getParamIp,"params":{"userToken":global.lxzVariableObj.voiceParam.userToken,"appId":global.lxzVariableObj.voiceParam.appId},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.lxzVariableObj.voiceParam.getParamIp-global.lxzVariableObj.voiceParam.getParamContext',  {"userToken":global.lxzVariableObj.voiceParam.userToken,"appId":global.lxzVariableObj.voiceParam.appId});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getChatMsgParam'] = res.data;
                
     
console.log('getChatMsgParam', res);

global.lxzVariableObj.voiceParam.conversationId = res.data?.data?.conversationId || '';
global.lxzVariableObj.voiceParam.apiToken = res.data?.data?.apiToken || '';
global.lxzVariableObj.voiceParam.ragFlowToken = res.data?.data?.ragFlowToken || '';

// {
//     "id": "d83b58de-4c3f-4727-a7fe-1f81f0fa39a3",
//     "basCode": null,
//     "basName": null,
//     "name": "福建水口水库",
//     "mode": null,
//     "systemPrompt": null,
//     "iconType": null,
//     "icon": null,
//     "iconBackground": null,
//     "iconUrl": null,
//     "tags": null,
//     "apiToken": "app-ARvN1Zi7PTK9pysaNlazl6FR",
//     "conversationId": "739b3c3c-1095-4256-b010-88ccac5ec27b",
//     "createdAt": null,
//     "updatedAt": null,
//     "isClick": "1",
//     "isWindowOpen": "1",
//     "appUrl": "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_4_2_13/index.html",
//     "iegoDialog": true,
//     "clickLegoDialog": true,
//     "ragFlowToken": "ragflow-AzNzA2MjNjZjk4NTExZWY5MjJjMDAwYz"
// }

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getRegionData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"e480d2c59e99935a33bed17d0aa56b4b","regionLevels":"","parentRegionCode":"350700000000"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"e480d2c59e99935a33bed17d0aa56b4b","regionLevels":"","parentRegionCode":"350700000000"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"e480d2c59e99935a33bed17d0aa56b4b","regionLevels":"","parentRegionCode":"350700000000"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRegionData'] = res.data;
                
     if (res.status === 200 && res.data.data) {
  state.regionData = [];
  state.treeStructure = [];
  const arr = res.data.data;
  
  // 1. 处理基础的regionData数组
  arr.forEach(item => {
    item.label = item.REGION_NAME;
    item.value = item.REGION_CODE;
    state.regionData.push({
      label: item.REGION_NAME,
      value: item.REGION_CODE,
    });
  });
  global.regionData = state.regionData

  // 2. 重构树形转换函数（仅保留两级，移除末级空children）
  const convertToTwoLevelTree = (data) => {
    // 创建编码到节点的映射表
    const nodeMap = new Map();
    const tree = [];

    // 第一步：初始化映射表，仅复制核心字段，不提前创建children
    data.forEach(item => {
      nodeMap.set(item.REGION_CODE, {
        label: item.REGION_NAME,
        value: item.REGION_CODE,
        // 不初始化children，避免末级节点出现空数组
        ...item // 如需保留原所有字段则保留，仅需label/value可删除此行
      });
    });

    // 第二步：遍历节点，构建两级父子关系
    data.forEach(item => {
      const currentNode = nodeMap.get(item.REGION_CODE);
      const parentCode = item.PARENT_REGION_CODE;
      const parentNode = nodeMap.get(parentCode);

      if (parentNode) {
        // 给父节点添加children（仅父节点有children）
        if (!parentNode.children) {
          parentNode.children = [];
        }
        parentNode.children.push(currentNode);
      } else {
        // 根节点直接加入树形结构
        tree.push(currentNode);
      }
    });

    return tree;
  };

  state.treeStructure = convertToTwoLevelTree(arr);
  console.log("两级树形结构（无空children）：", state.treeStructure);
} else {
  state.treeStructure = [];
  state.regionData = [];
  global.regionData = []
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
 getUserInfo: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"casut","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"TPZNtBOctv"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/cas/security/usertoken","method":"get","baseURL":"global.serviceBaseUrl","params":{"casut":"this.casut"}},
              request: function (casut, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/cas/security/usertoken","method":"get","baseURL":global.serviceBaseUrl,"params":{"casut":casut},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-/cas/security/usertoken',  {"casut":casut});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getUserInfo'] = res.data;
                
     // console.log(res, '测试用户登录信息')
if (res.status === 200 && res.data.status === '1') {
  // 用户信息
  const { user, userToken } = res.data;
  console.log(user, '用户信息')
  // console.log(user.userId, 'user.userId')
  // 存储用户信息数据到store里
  localStorage.setItem('token', userToken);
  localStorage.setItem('lastUserName', user.userName);
  localStorage.setItem('lastLoginName', user.loginName);
  localStorage.setItem('lastUserId', user.userId);
  localStorage.setItem('userStyle', user.userStyle);
  sessionStorage.setItem('userToken', userToken);
  localStorage.setItem('roleCode', user.roleCode);

} else {
  // 清除缓存中的token值
  localStorage.removeItem('token');
  localStorage.removeItem('roleCode');
  sessionStorage.removeItem('userToken');
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      localStorage.removeItem('token');
localStorage.removeItem('roleCode');
sessionStorage.removeItem('userToken');
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-root', global.appScaleMode, 'width');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
handleBottomPosition("100");
// 执行自定义方法
setDom();
// 执行自定义方法
lxtMsgListenAndForward();
// 执行自定义方法
lxzSocketMsg();
// 执行自定义方法
initGetChatMsgParam();
// 执行自定义方法
initBrainUrl();
// 执行自定义方法
setTheme();
// 执行自定义方法
menuWatcher();
// 执行自定义方法
initLogin();
// 执行自定义方法
setStyle();
/* 接收socket.io消息 */
const onSocketChangea79a075535af47158448 = function (data) {
if(data.type === "createDialog"){
try{
// 执行自定义方法
createDialog(data.data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangea79a075535af47158448);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangea79a075535af47158448);
});
onMounted(() => {
setPageScale('t-l-c-root', global.appScaleMode, 'width');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setCurrentRoom();
/* 接收socket.io消息 */
const onSocketChangee17dc0b7b9384543a67e = function (data) {
if(data.type === "changeValDataAllApplication"){
try{
// 执行自定义方法
setTest(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangee17dc0b7b9384543a67e);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangee17dc0b7b9384543a67e);
});
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
watch(()=>tComponentx0x5Ref.value, () => {
if(tComponentx0x5Ref.value){
runAnimation('t-component-c7f1.7a405140a', [{"name":"animate__fadeInDown","delay":"animate__delay-0s"}]);
}
})
watch(()=>tComponentx0x11Ref.value, () => {
if(tComponentx0x11Ref.value){
runAnimation('t-component-d27c.2ff88888', [{"name":"animate__fadeInUp","delay":"animate__delay-0s"}]);
}
})
 const tIframex0x0ComputedData = computed(() => _.merge({}, componentState.tIframex0x0.default, componentState.tIframex0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

 const tIframex0x4ComputedData = computed(() => _.merge({}, componentState.tIframex0x4.default, componentState.tIframex0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tCascaderx0x6ComputedData = computed(() => _.merge({}, componentState.tCascaderx0x6.default, componentState.tCascaderx0x6?.[state.screenSize]));

 const tCascaderx0x7ComputedData = computed(() => _.merge({}, componentState.tCascaderx0x7.default, componentState.tCascaderx0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tComponentx0x9ComputedData = computed(() => _.merge({}, componentState.tComponentx0x9.default, componentState.tComponentx0x9?.[state.screenSize]));

 const tComponentx0x10ComputedData = computed(() => _.merge({}, componentState.tComponentx0x10.default, componentState.tComponentx0x10?.[state.screenSize]));

 const tComponentx0x11ComputedData = computed(() => _.merge({}, componentState.tComponentx0x11.default, componentState.tComponentx0x11?.[state.screenSize]));

 const tComponentx0x12ComputedData = computed(() => _.merge({}, componentState.tComponentx0x12.default, componentState.tComponentx0x12?.[state.screenSize]));

 const tComponentx0x13ComputedData = computed(() => _.merge({}, componentState.tComponentx0x13.default, componentState.tComponentx0x13?.[state.screenSize]));

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
tIframex0x0ComputedData,
tComponentx0x1ComputedData,
tComponentx0x2ComputedData,
tComponentx0x3ComputedData,
tIframex0x4ComputedData,
tComponentx0x5ComputedData,
tCascaderx0x6ComputedData,
tCascaderx0x7ComputedData,
tRectx0x8ComputedData,
tComponentx0x9ComputedData,
tComponentx0x10ComputedData,
tComponentx0x11ComputedData,
tComponentx0x12ComputedData,
tComponentx0x13ComputedData,
tBodyx0x0Ref,
tIframex0x0Ref,
tComponentx0x1Ref,
tComponentx0x2Ref,
tComponentx0x3Ref,
tIframex0x4Ref,
tComponentx0x5Ref,
tCascaderx0x6Ref,
tCascaderx0x7Ref,
tRectx0x8Ref,
tComponentx0x9Ref,
tComponentx0x10Ref,
tComponentx0x11Ref,
tComponentx0x12Ref,
tComponentx0x13Ref,
onchange1742265442192_0_0,
onchange1741767774132_0_0,
};
},
};