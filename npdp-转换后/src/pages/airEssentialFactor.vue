<template>
  <div id="t-l-c-airEssentialFactor" class="t-l-c-airEssentialFactor" ><t-rect id="t-rect-7789.80fa3672b" class="airEssentialFactor-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-1918.954913e8d" class="airEssentialFactor-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-text id="t-text-62ca.0218b641c" class="airEssentialFactor-t-text-0-2"  :label="state.pageTitle" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-list-card-common id="t-list-card-common-46f5.3f34deb0f" class="airEssentialFactor-t-list-card-common-0-3"  :c-style="tListCardCommonx0x3ComputedData.cStyle" :key-word="tListCardCommonx0x3ComputedData.keyWord" :default-checked="tListCardCommonx0x3ComputedData.defaultChecked" :tab="tListCardCommonx0x3ComputedData.tab" :collapse="tListCardCommonx0x3ComputedData.collapse" :collapse-text="tListCardCommonx0x3ComputedData.collapseText" :display-count="tListCardCommonx0x3ComputedData.displayCount" :data-alias="tListCardCommonx0x3ComputedData.dataAlias" :no-data-info="tListCardCommonx0x3ComputedData.noDataInfo" :data="state.infoData"></t-list-card-common><t-rect id="t-rect-4779.567957f9b" class="airEssentialFactor-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1735129853840"></t-rect><t-text v-if="state.showDetailBtn === true" id="t-text-f23c.181ba0828" class="airEssentialFactor-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle" :show-title="tTextx0x5ComputedData.showTitle" @click="onclick1735268181154"></t-text></div>
</template>

<script>
import _ from 'lodash';
import {
  reactive, ref, computed, watch, watchEffect,
  onMounted, onUnmounted, onBeforeMount, onBeforeUnmount,
  provide, inject, toRefs, toRef, nextTick, isRef,
  shallowRef, shallowReactive, triggerRef,
  h, createVNode, createElementBlock, openBlock,
  withCtx, withDirectives, withModifiers,
  resolveComponent, defineAsyncComponent,
  markRaw, toRaw, toDisplayString, createElementVNode,
} from 'vue';
import { useRoute } from 'vue-router';
import http from '@/http.js';
import { ComponentLoader, watchComponentVisible, generateCacheKey, requestApi, ResourceLoader, replaceCssVariables, getUrlParam, getQueryParam, guid, runAnimation, setPageScale, mountDynamicComponent, loadInitialApis, fetchApiData, getDataValue, applyFilter, filterData, convertCharacter } from '@/utils.js';
import { themes } from '@/theme.js';
import * as echarts from 'echarts';
import { TListCardCommon, TRect, TText } from '@ths/design';

export default {
  components: {
    TListCardCommon,
    TRect,
    TText,
  },
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
const state = reactive({
   screenSize: "",
   showDetailBtn: false,
   infoObj: {},
   infoType: "",
   infoData: [],
   pageTitle: "基本信息",
   gasStation: [{"label":"油站名称","key":"GASSTATIONNAME"},{"label":"详细地址","key":"ADDRESS"},{"label":"化学品许可证代码","key":"CHEMICALLICENSECODE"},{"label":"联系人","key":"CONTACTS"},{"label":"联系电话","key":"PHONE"},{"label":"隶属关系","key":"SUBJECTION"},{"label":"管理模式","key":"MANAGEMENTMODEL"}],
   oilDepot: [{"label":"油库名称","key":"OILDEPOTNAME"},{"label":"详细地址","key":"ADDRESS"},{"label":"企业性质","key":"NATURE"},{"label":"隶属关系","key":"SUBJECTION"},{"label":"储油罐个数","key":"STORAGETANKCOUNT"},{"label":"接卸方式","key":"TRANSMISSIONWAY"}],
   roadNetwork: [{"label":"路网名称","key":"name"},{"label":"方向","key":"Driection"},{"label":"长度（米）","key":"Length"},{"label":"路网编号","key":"ref"}],
   companyBaseInfo: [{"label":"污染源名称","key":"ENTER_NAME"},{"label":"统一社会信息代码","key":"ENTERPRISE_CODE"},{"label":"行政区域","key":"REGION_ALLNAME"},{"label":"污染源地址","key":"ENTER_ADDR"},{"label":"法人名称","key":"CORP_NAME"},{"label":"行业类别","key":"TRADE_NAME"}],
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
const componentState = reactive({
tRectx0x0: {
defaultStyle: {
            default: {"width":"450px","height":"385px","position":"unset","left":"735px","top":"363px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"385px","position":"unset","left":"735px","top":"363px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"735px","top":"363px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"735px","top":"363px","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"auto","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"754px","top":"377px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":""},
            
            },
 default: { 
 
label:"基本信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"754px","top":"377px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":""}}}, 
 },
},
tListCardCommonx0x3: {
defaultStyle: {
            default: {"height":"280px","position":"unset","width":"430px","left":"744px","top":"420px","backgroundColor":"rgba(26, 27, 31, 0)","max-height":"280px","overflow-y":"scroll","overflow-x":"hidden","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"height":"280px","position":"unset","width":"430px","left":"744px","top":"420px","backgroundColor":"rgba(26, 27, 31, 0)","max-height":"280px","overflow-y":"scroll","overflow-x":"hidden","animationName":""}},"card":{"default":{"display":"flex","padding":"0","backgroundColor":"rgba(228, 106, 85, 0)","marginBottom":"2px !important"}},"notLastCard":{"default":{"marginBottom":"20px"}},"cardIcon":{"default":{"width":"0px","height":"0px"},"hover":{}},"cardItemLabel":{"default":{"fontSize":"0px","width":"0px","minWidth":"88px","height":"0px","lineHeight":"0px","textAlign":"center","borderRadius":"4px","display":"none","backgroundColor":""}},"cardItemValue":{"default":{"marginLeft":"0px","color":"var(--t-white)","fontSize":"14px","lineHeight":"15px","whiteSpace":"normal","height":"100%","width":"100%"}},"cardStatus":{"default":{"width":"0px","height":"0px","fontSize":"0px","lineHeight":"0px"}},"listBody":{"default":{"backgroundColor":"rgba(112, 41, 221, 0)","width":"430px"}},"cardItemInfo":{"default":{"backgroundColor":"var(--business-show-bg15)","color":"","padding":"10px 16px","height":"100%","width":"100%"}},"cardListInfo":{"default":{"flex-grow":1,"height":"auto !important"}},"cardHeader":{"default":{"display":"flex","alignItems":"center","flex-shrink":0,"fontSize":"14px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","paddingLeft":"0px","marginLeft":"0px","marginBottom":0,"backgroundColor":"var(--business-show-bg15)","marginRight":"2px"}},"cardHeaderText":{"default":{"display":"inline-block","marginLeft":"0px","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"14px","lineHeight":"14px","color":"var(--business-text-avianize)","width":"136px","textAlign":"right","paddingRight":"16px"}},"noDataText":{"default":{"fontSize":"14px","color":"var(--business-no-data-color)"}},"noDataIcon":{"default":{"display":"none"}}},
keyWord:"",
defaultChecked:"",
tab:false,
collapse:false,
collapseText:"数据",
displayCount:"3",
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
noDataInfo:"暂无数据",
data:[], 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1139px","top":"374px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1139px","top":"374px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"70px","height":"20px","color":"var(--business-strong)","fontSize":"14px","position":"unset","left":"1093px","top":"712px","cursor":"pointer","lineHeight":"20px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/5c1366bb108646c8bd896eaacb15f622.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"14px 14px","-webkit-mask-size":"","backgroundPosition":"100% 50%","-webkit-mask-position":"","paddingRight":"14px","animationName":""},
            
            },
 default: { 
 
label:"查看详情",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"20px","color":"var(--business-strong)","fontSize":"14px","position":"unset","left":"1093px","top":"712px","cursor":"pointer","lineHeight":"20px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/5c1366bb108646c8bd896eaacb15f622.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"14px 14px","-webkit-mask-size":"","backgroundPosition":"100% 50%","-webkit-mask-position":"","paddingRight":"14px","animationName":""}}},
showTitle:false, 
 },
},
});
const handleInfoData = () => {
// 要素内容类型（加油站、油库、企业、一级路网、二级路网、三级路网、其他道路）
state.infoType = global.businessDialog.dialogParmas.layerName;
// 消息内容数据
state.infoObj = global.businessDialog.dialogParmas;
// 页面展示数据
state.infoData = [];
// 名称、取值key映射
const infoDataMap = {
  gasStation: state.gasStation, // 加油站
  oilDepot: state.oilDepot, // 油库
  primaryRoadNetwork: state.roadNetwork, // 一级路网
  secondaryRoadNetwork: state.roadNetwork, // 二级路网
  tertiaryRoadNetwork: state.roadNetwork, // 三级路网
  otherRoads: state.roadNetwork, // 其他道路
  enterprise: state.companyBaseInfo, // 企业
};
// 是否显示“查看详情”按钮
state.showDetailBtn = ['gasStation', 'oilDepot', 'enterprise'].includes(state.infoType);
// 名称、取值key
const infoDataKey = infoDataMap[state.infoType];
(infoDataKey || []).map((item) => {
  state.infoData.push({
    header: item.label,
    list: [
      {
        value: handleNoVal(state.infoObj[item.key]),
      }
    ],
  });
});
};
const openDetailPage = () => {
// 详情地址
let detailUrl = '';
switch (state.infoType) {
  // 企业
 case 'enterprise':
    detailUrl = `${global.enterpriseDetailBaseUrl}/#/layout/archive-information?standenterid=${state.infoObj.STANDENTERID}`;
    break;
  // 加油站
  case 'gasStation':
    detailUrl = `${global.enterpriseDetailBaseUrl}/#/layout/smart-archive/detail?title=油站基本信息档案&tab=[{"name":"档案详情","url":"/layout/smart-archive/info?interfaceId=b1d1ddb0ee13c687ae4c719b2ae66dd4@ID=${state.infoObj.ID}"}]`;
    break;
  // 油库
  case 'oilDepot':
    detailUrl = `${global.enterpriseDetailBaseUrl}/#/layout/smart-archive/detail?title=油库基本信息档案&tab=[{"name":"档案详情","url":"/layout/smart-archive/info?interfaceId=0a7fe3ca0e96abc7ad49950b7fcca712@ID=${state.infoObj.ID}"}]`;
    break;
  default:
    break;
}
if (detailUrl) {
  window.open(detailUrl);
}

};
const onclick1735129853840 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'',
                    data: {
                      businessDialog:{dialogName: ''}
                    },
                  });
};
const onclick1735268181154 = () => {
// 执行自定义方法
openDetailPage();
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airEssentialFactor', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
handleInfoData();
onMounted(() => {
setPageScale('t-l-c-airEssentialFactor', global.appScaleMode, 'normal');
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

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tListCardCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tListCardCommonx0x3.default, componentState.tListCardCommonx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tListCardCommonx0x3ComputedData,
tRectx0x4ComputedData,
tTextx0x5ComputedData,
onclick1735129853840,
onclick1735268181154,
};
},
}
</script>

<style scoped>
.t-l-c-airEssentialFactor {
position: relative;
overflow: hidden;
--theme-color: var(--t-brand8);
--theme-color-opacity-10: rgba(var(--t-brand8), .1);
--theme-color-opacity-15: rgba(var(--t-brand8), .15);
--theme-color-opacity-40: rgba(var(--t-brand8), .4);
--theme-color-opacity-60: rgba(var(--t-brand8), .6);
--theme-color-opacity-80: rgba(var(--t-brand8), .8);
--theme-color-opacity-90: rgba(var(--t-brand8), .9);
pointer-events: auto;
position: Static;
z-index: 1;
filter: ;
width: 1920px;
height: 1080px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airEssentialFactor .airEssentialFactor-t-rect-0-0 {
position: absolute !important;
top: 363px;
left: 735px;
width: 450px;
height: 385px;
pointer-events: auto;
}

.t-l-c-airEssentialFactor .airEssentialFactor-t-rect-0-1 {
position: absolute !important;
top: 363px;
left: 735px;
width: 450px;
height: 47px;
pointer-events: auto;
}

.t-l-c-airEssentialFactor .airEssentialFactor-t-text-0-2 {
position: absolute !important;
top: 377px;
left: 754px;
width: auto;
height: 19px;
pointer-events: auto;
}

.t-l-c-airEssentialFactor .airEssentialFactor-t-list-card-common-0-3 {
position: absolute !important;
top: 420px;
left: 744px;
width: 430px;
height: 280px;
pointer-events: auto;
}

.t-l-c-airEssentialFactor .airEssentialFactor-t-rect-0-4 {
position: absolute !important;
top: 374px;
left: 1139px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airEssentialFactor .airEssentialFactor-t-text-0-5 {
position: absolute !important;
top: 712px;
left: 1093px;
width: 70px;
height: 20px;
pointer-events: auto;
}
</style>
