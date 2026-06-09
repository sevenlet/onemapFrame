<template>
  <div id="t-l-c-ssqyVideoSurveillance" class="t-l-c-ssqyVideoSurveillance" ><t-row id="t-row-98f0.74418cba5" class="ssqyVideoSurveillance-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-col id="t-col-15d5.d7417c346" class="ssqyVideoSurveillance-t-col-0-0-0"  :span="tColx0x0x0ComputedData.span" :offset="tColx0x0x0ComputedData.offset" :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull" :c-style="tColx0x0x0ComputedData.cStyle"><t-row v-if="state.tabList.length !== 0" id="t-row-d782.63ef7cabc" class="ssqyVideoSurveillance-t-row-0-0-0-0"  :c-style="tRowx0x0x0x0ComputedData.cStyle" :gutter="tRowx0x0x0x0ComputedData.gutter" :justify="tRowx0x0x0x0ComputedData.justify" :align="tRowx0x0x0x0ComputedData.align"><t-tabs-scroll v-if="state.cardVisible === true" id="t-tabs-scroll-cad3.642611003" class="ssqyVideoSurveillance-t-tabs-scroll-0-0-0-0-0"  :data="replaceCssVariables(filterData(state.tabList, componentPropBindingMap?.['t-tabs-scroll-cad3.642611003']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active-path="replaceCssVariables(filterData(state.activeVideo, componentPropBindingMap?.['t-tabs-scroll-cad3.642611003']['activePath'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :show-icon="tTabsScrollx0x0x0x0x0ComputedData.showIcon" :custom-icon="tTabsScrollx0x0x0x0x0ComputedData.customIcon" :key-field="tTabsScrollx0x0x0x0x0ComputedData.keyField" :c-style="tTabsScrollx0x0x0x0x0ComputedData.cStyle" @tab-click="ontabClick1767945580264_0_0"></t-tabs-scroll><t-tabs-base id="t-tabs-base-d9ef.d08612f64" class="ssqyVideoSurveillance-t-tabs-base-0-0-0-0-1"  :data="replaceCssVariables(filterData(state.taskTypeData, componentPropBindingMap?.['t-tabs-base-d9ef.d08612f64']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x0x0x0x1ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.playType, componentPropBindingMap?.['t-tabs-base-d9ef.d08612f64']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x0x0x0x1ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x0x0x0x1ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x0x0x0x1ComputedData.alias" :c-style="tTabsBasex0x0x0x0x1ComputedData.cStyle" @tab-click="ontabClick1768543362571_0_0"></t-tabs-base></t-row><t-component v-if="state.tabList.length !== 0" id="t-component-9465.0e6b02a27" class="ssqyVideoSurveillance-t-component-0-0-0-1"  :name="tComponentx0x0x0x1ComputedData.name" :channel-code="replaceCssVariables(filterData(state.selectedChannelCode, componentPropBindingMap?.['t-component-9465.0e6b02a27']['channelCode'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :play-type="replaceCssVariables(filterData(state.playType, componentPropBindingMap?.['t-component-9465.0e6b02a27']['playType'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :loading="tComponentx0x0x0x1ComputedData.loading" :c-style="tComponentx0x0x0x1ComputedData.cStyle" :src="tComponentx0x0x0x1ComputedData.src" :component-name="tComponentx0x0x0x1ComputedData.componentName" :page-id="tComponentx0x0x0x1ComputedData.pageId" :page-code="tComponentx0x0x0x1ComputedData.pageCode"></t-component></t-col></t-row><t-row v-if="state.tabList.length === 0" id="t-row-828c.1b7ecbe94" class="ssqyVideoSurveillance-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-col id="t-col-73fe.561cf0126" class="ssqyVideoSurveillance-t-col-0-1-0"  :span="tColx0x1x0ComputedData.span" :offset="tColx0x1x0ComputedData.offset" :push="tColx0x1x0ComputedData.push" :pull="tColx0x1x0ComputedData.pull" :c-style="tColx0x1x0ComputedData.cStyle"><t-text-common id="t-text-common-43ed.73653e8d4" class="ssqyVideoSurveillance-t-text-common-0-1-0-0"  :label="tTextCommonx0x1x0x0ComputedData.label" :editable="tTextCommonx0x1x0x0ComputedData.editable" :c-style="tTextCommonx0x1x0x0ComputedData.cStyle"></t-text-common></t-col></t-row></div>
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
import { TCol, TComponent, TRow, TTabsBase, TTabsScroll, TTextCommon } from '@ths/design';

export default {
  components: {
    TCol,
    TComponent,
    TRow,
    TTabsBase,
    TTabsScroll,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-98f0.74418cba5":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-15d5.d7417c346":{"attributeName":"tColx0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-row-d782.63ef7cabc":{"attributeName":"tRowx0x0x0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-tabs-scroll-cad3.642611003":{"attributeName":"tTabsScrollx0x0x0x0x0","data":{"filters":[]},"activePath":{"filters":[]},"showIcon":{"filters":[]},"customIcon":{"filters":[]},"keyField":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-d9ef.d08612f64":{"attributeName":"tTabsBasex0x0x0x0x1","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-button-0652.dbccd1624":{"attributeName":"tButtonx0x0x0x0x2"},"t-component-9465.0e6b02a27":{"attributeName":"tComponentx0x0x0x1","name":{"filters":[]},"channelCode":{"filters":[]},"playType":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-row-828c.1b7ecbe94":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-73fe.561cf0126":{"attributeName":"tColx0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-43ed.73653e8d4":{"attributeName":"tTextCommonx0x1x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   playType: "live",
   ORGANIZATIONID: "",
   cardVisible: true,
   selectedChannelCode: "",
   STANDENTERID: "",
   monitorData: [],
   tabList: [],
   activeVideo: "",
   taskTypeData: [{"label":"直播","value":"live"},{"label":"回放","value":"playBack"}],
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0%","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0%","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","flexDirection":"column"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","flexDirection":"column"}}}, 
 },
},
tRowx0x0x0x0: {
defaultStyle: {
            default: {"width":"98%","height":"44px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"297px","top":"-319px","flexDirection":"row","gap":"auto"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"98%","height":"44px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"297px","top":"-319px","flexDirection":"row","gap":"auto"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTabsScrollx0x0x0x0x0: {
defaultStyle: {
            default: {"width":"calc(100% - 180px)","height":"44px","position":"unset","left":"1%","top":"2%","backgroundColor":"transparent","animationName":"","marginBottom":"10px"},
            
            },
 default: { 
 
data:[],
activePath:"",
showIcon:false,
customIcon:true,
keyField:{"label":"label","icon":"icon","path":"channelcode"},
cStyle:{"wrapper":{"default":{"width":"calc(100% - 180px)","height":"44px","position":"unset","left":"1%","top":"2%","backgroundColor":"transparent","animationName":"","marginBottom":"10px"}},"itemWrapper":{"default":{"backgroundColor":"var(--business-scroll-tag-bg)","color":"var(--business-scroll-tag-text)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--business-scroll-tag-bg)","color":"var(--business-scroll-tag-text)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px"},"active":{"backgroundColor":"var(--business-scroll-tag-bg-selected)","borderLeft":"1px solid var(--business-scroll-tag-border-selected)","borderTop":"1px solid var(--business-scroll-tag-border-selected)","borderRight":"1px solid var(--business-scroll-tag-border-selected)","borderBottom":"1px solid var(--business-scroll-tag-border-selected)","color":"var(--business-scroll-tag-text-selected)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","fontSize":"var(--business-text-size-14)"}},"moreButton":{"default":{"display":"none","width":"auto","height":"auto"}},"tabsButton":{"default":{"backgroundColor":"var(--business-scroll-tag-bg)","color":"var(--business-scroll-tag-icon-color)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"backgroundColor":"var(--business-scroll-tag-bg)","color":"var(--business-scroll-tag-icon-color)","borderLeft":"1px solid var(--business-scroll-tag-btn-border-selected)","borderTop":"1px solid var(--business-scroll-tag-btn-border-selected)","borderRight":"1px solid var(--business-scroll-tag-btn-border-selected)","borderBottom":"1px solid var(--business-scroll-tag-btn-border-selected)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"backgroundColor":"var(--business-scroll-tag-bg)","color":"var(--business-scroll-tag-icon-color)","borderLeft":"1px solid var(--business-scroll-tag-btn-border-selected)","borderTop":"1px solid var(--business-scroll-tag-btn-border-selected)","borderRight":"1px solid var(--business-scroll-tag-btn-border-selected)","borderBottom":"1px solid var(--business-scroll-tag-btn-border-selected)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"icon":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","color":"var(--business-scroll-tag-icon-color)"}}}, 
 },
},
tTabsBasex0x0x0x0x1: {
defaultStyle: {
            default: {"width":"152px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","left":"341px","top":"-89px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset","marginBottom":"10px"},
            
            },
 default: { 
 
data:[{"label":"直播","value":"live"},{"label":"回放","value":"playBack"}],
space:0,
selectedTabVal:"live",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"152px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","left":"341px","top":"-89px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset","marginBottom":"10px"}},"itemWrapper":{"default":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","backgroundColor":"rgba(0, 61, 155, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"120px","height":"32px","fontSize":"var(--business-text-size-14)","lineHeight":"32px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(0,61,155,0)","borderTop":"1px solid rgba(0,61,155,0)","borderRight":"1px solid rgba(0,61,155,0)","borderBottom":"1px solid rgba(0,61,155,0)","color":"var(--business-text-avianize)"},"active":{"background":"var(--business-tab-third-active-fill)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"rgba(3, 12, 52, 0)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","color":"var(--business-tab-third-active-text)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"32px"},"hover":{"backgroundColor":"rgba(0, 61, 155, 0)","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","color":"var(--business-tab-third-active-border)"}}}, 
 },
},
tComponentx0x0x0x1: {
defaultStyle: {
            default: {"width":"98%","height":"90%","margin":"0 auto","position":"unset","left":"1%","top":"75px"},
            
            },
 default: { 
 
name:"monitorVideoListComponent",
channelCode:"",
playType:"",
loading:true,
cStyle:{"wrapper":{"default":{"width":"98%","height":"90%","margin":"0 auto","position":"unset","left":"1%","top":"75px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/monitorVideoList",
componentName:"monitorVideoListComponent",
pageId:"eeba259c918d4432886df6696a141ff5",
pageCode:"monitorVideoList", 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"50px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"48% !important","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"50px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"48% !important","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x0: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"10px","top":"10px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"10px","top":"10px"}}}, 
 },
},
tTextCommonx0x1x0x0: {
defaultStyle: {
            default: {"width":"96px","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"378px","top":"295px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"暂无视频数据",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"378px","top":"295px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
});
const initPageData = () => {
// 处理参数
const params = global.businessDialog?.dialogParmas;

state.STANDENTERID = params && 'POINT_CODE' in params ? (params.POINT_CODE || '123') : '';

// state.ORGANIZATIONID = params && 'organizationid' in params ? (params.organizationid || '123') : '';
// 1. 从当前 URL 获取 id 参数
const getUrlIdParam = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('organizationid');
};

// 2. 设置 ORGANIZATIONID
state.ORGANIZATIONID = params && 'organizationid' in params 
    ? (params.organizationid || '123') 
    : (getUrlIdParam() || '');
apiRegistry.getList.request();



};
const setCardStyle = () => {
const sheet = new CSSStyleSheet();
sheet.insertRule(`body #t-scrollable-cards-455f.ff3a2c962 .scrollable-cards-body {
width: 100% !important;
}`);

document.adoptedStyleSheets = [sheet];

};
const handleTabChange = (obj) => {
state.selectedChannelCode = obj.channelcode
state.activeVideo = obj.channelcode
};
const setCardVisible = () => {
const parentDom = document.getElementById('t-l-c-ssqyVideoSurveillance');

if (parentDom && parentDom.getBoundingClientRect().width < 400) {
  state.cardVisible = false
} else {
  state.cardVisible = true
}
};
const openDIalog = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'featureClicked',  // 消息类型名称
    "data": {
        "layerId": "执法人员",
        "feature": {
            "type": "Feature",
            "properties": {
                "zf_jly": "000001",
                "sys_create_time": "2025-12-01",
                "sys_update_time": "2025-12-01",
                "responsible_person": "丁文",
                "contact_phone": "丁文",
                "zf_ry": "丁文",
                "zf_status": "在线",
                "longitude": "118.144",
                "latitude": "27.3391",
                "phone_number": "120",
                "address": "福建省南平市延平区水南街道植物园九峰山公园,距植物园123米"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    118.144,
                    27.3391
                ]
            }
        }
    },
  }
);
};
const ontabClick1767945580264_0_0 = (item) => {
// 执行自定义方法
handleTabChange(item);
};
const ontabClick1768543362571_0_0 = (data) => {
// 设置变量值
state.playType = data.value;
};
const onclick1769911041952 = () => {
// 执行自定义方法
openDIalog();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"ORGANIZATIONID":"state.ORGANIZATIONID","STANDENTERID":"state.STANDENTERID","interfaceId":"1e45dd8c2e02a16d7e2ef390f30f6477"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"ORGANIZATIONID":state.ORGANIZATIONID,"STANDENTERID":state.STANDENTERID,"interfaceId":"1e45dd8c2e02a16d7e2ef390f30f6477"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"ORGANIZATIONID":state.ORGANIZATIONID,"STANDENTERID":state.STANDENTERID,"interfaceId":"1e45dd8c2e02a16d7e2ef390f30f6477"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getList'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.tabList = data.map(item =>{
    return{
      ...item,
      label: item.channelname,
    }
  })
  state.activeVideo = state.tabList[0].channelcode || ''
  state.selectedChannelCode = state.tabList[0].channelcode || ''
}else{
  state.tabList = []
  state.activeVideo = ''
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
                            setPageScale('t-l-c-ssqyVideoSurveillance', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-ssqyVideoSurveillance', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setCardStyle();
// 执行自定义方法
setCardVisible();
});
// 执行自定义方法
initPageData();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tColx0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0.default, componentState.tColx0x0x0?.[state.screenSize]));

 const tRowx0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x0x0.default, componentState.tRowx0x0x0x0?.[state.screenSize]));

 const tTabsScrollx0x0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tTabsScrollx0x0x0x0x0.default, componentState.tTabsScrollx0x0x0x0x0?.[state.screenSize]));

 const tTabsBasex0x0x0x0x1ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x0x0x0x1.default, componentState.tTabsBasex0x0x0x0x1?.[state.screenSize]));

 const tComponentx0x0x0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0x0x1.default, componentState.tComponentx0x0x0x1?.[state.screenSize]));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tColx0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0.default, componentState.tColx0x1x0?.[state.screenSize]));

 const tTextCommonx0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x0x0.default, componentState.tTextCommonx0x1x0x0?.[state.screenSize]));

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
tColx0x0x0ComputedData,
tRowx0x0x0x0ComputedData,
tTabsScrollx0x0x0x0x0ComputedData,
tTabsBasex0x0x0x0x1ComputedData,
tComponentx0x0x0x1ComputedData,
tRowx0x1ComputedData,
tColx0x1x0ComputedData,
tTextCommonx0x1x0x0ComputedData,
ontabClick1767945580264_0_0,
ontabClick1768543362571_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-ssqyVideoSurveillance {
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
width: 100%;
height: 100%;
background-color: rgba(255, 12, 12, 0);
}
.t-l-c-ssqyVideoSurveillance .ssqyVideoSurveillance-t-row-0-0 {
position: absolute !important;
top: 0px;
left: 0%;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-ssqyVideoSurveillance .ssqyVideoSurveillance-t-col-0-0-0 {
position: relative;
top: null;
left: null;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}

.t-l-c-ssqyVideoSurveillance .ssqyVideoSurveillance-t-row-0-0-0-0 {
position: unset;
top: -319px;
left: 297px;
width: 98%;
height: 44px;
pointer-events: auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
gap: auto;
}

.t-l-c-ssqyVideoSurveillance .ssqyVideoSurveillance-t-tabs-scroll-0-0-0-0-0 {
position: unset;
top: 0px;
left: 0px;
width: calc(100% - 180px);
height: 44px;
pointer-events: auto;
}

.t-l-c-ssqyVideoSurveillance .ssqyVideoSurveillance-t-tabs-base-0-0-0-0-1 {
position: unset;
top: -89px;
left: 341px;
width: 152px;
height: 32px;
pointer-events: auto;
}

.t-l-c-ssqyVideoSurveillance .ssqyVideoSurveillance-t-component-0-0-0-1 {
position: unset;
top: 75px;
left: 0px;
width: 98%;
height: 90%;
pointer-events: auto;
}

.t-l-c-ssqyVideoSurveillance .ssqyVideoSurveillance-t-row-0-1 {
position: absolute !important;
top: 48% !important;
left: 0px;
width: 100%;
height: 50px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
animation-name: ;
}

.t-l-c-ssqyVideoSurveillance .ssqyVideoSurveillance-t-col-0-1-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
animation-name: ;
}

.t-l-c-ssqyVideoSurveillance .ssqyVideoSurveillance-t-text-common-0-1-0-0 {
position: unset;
top: 295px;
left: 378px;
width: 96px;
height: 20px;
pointer-events: auto;
}
</style>
