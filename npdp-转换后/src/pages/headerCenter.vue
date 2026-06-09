<template>
  <div id="t-l-c-headerCenter" class="t-l-c-headerCenter" ><t-rect v-if="state.pageTitleClickable === true" id="t-rect-53ec.dbd7c4089" class="headerCenter-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle" @click="onclick1727329106591"></t-rect><t-header-tabs id="t-header-tabs-b60f.800e742b" class="headerCenter-t-header-tabs-0-1"  :active-value="replaceCssVariables(filterData(global.navMenuItemActive.name, componentPropBindingMap?.['t-header-tabs-b60f.800e742b']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :left-data="replaceCssVariables(filterData(state.leftData, componentPropBindingMap?.['t-header-tabs-b60f.800e742b']['leftData'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :right-data="replaceCssVariables(filterData(state.rightData, componentPropBindingMap?.['t-header-tabs-b60f.800e742b']['rightData'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :nav-item="tHeaderTabsx0x1ComputedData.navItem" :title="tHeaderTabsx0x1ComputedData.title" :background-image="tHeaderTabsx0x1ComputedData.backgroundImage" :c-style="tHeaderTabsx0x1ComputedData.cStyle" @nav-item-click="onnavItemClick1721375205178"></t-header-tabs><t-trace-path id="t-trace-path-0f5c.027a20e27" class="headerCenter-t-trace-path-0-2"  :c-style="tTracePathx0x2ComputedData.cStyle" :path="tTracePathx0x2ComputedData.path" :motion-trail-type="tTracePathx0x2ComputedData.motionTrailType" :basic-speed="tTracePathx0x2ComputedData.basicSpeed" :line-length="tTracePathx0x2ComputedData.lineLength" :line-width="tTracePathx0x2ComputedData.lineWidth" :gradient-list="tTracePathx0x2ComputedData.gradientList" :show-background-path="tTracePathx0x2ComputedData.showBackgroundPath" :background-path-gradient-list="tTracePathx0x2ComputedData.backgroundPathGradientList" :is-reverse="tTracePathx0x2ComputedData.isReverse"></t-trace-path><t-trace-path id="t-trace-path-75c1.186aebba6" class="headerCenter-t-trace-path-0-3"  :c-style="tTracePathx0x3ComputedData.cStyle" :path="tTracePathx0x3ComputedData.path" :motion-trail-type="tTracePathx0x3ComputedData.motionTrailType" :basic-speed="tTracePathx0x3ComputedData.basicSpeed" :line-length="tTracePathx0x3ComputedData.lineLength" :line-width="tTracePathx0x3ComputedData.lineWidth" :gradient-list="tTracePathx0x3ComputedData.gradientList" :show-background-path="tTracePathx0x3ComputedData.showBackgroundPath" :background-path-gradient-list="tTracePathx0x3ComputedData.backgroundPathGradientList" :is-reverse="tTracePathx0x3ComputedData.isReverse"></t-trace-path><t-tabs v-if="state.menuMoreList.length !== 0" id="t-tabs-bdd2.7a91f674e" class="headerCenter-t-tabs-0-4"  :alias="tTabsx0x4ComputedData.alias" :data="tTabsx0x4ComputedData.data" :active-tab="replaceCssVariables(filterData(state.activeMore, componentPropBindingMap?.['t-tabs-bdd2.7a91f674e']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :tab-position-extend="tTabsx0x4ComputedData.tabPositionExtend" :stretch="tTabsx0x4ComputedData.stretch" :c-style="tTabsx0x4ComputedData.cStyle" @tab-click="ontabClick1719989836914"></t-tabs><t-rect v-if="state.menuMoreList.length !== 0" id="t-rect-e1d0.6a4a4f741" class="headerCenter-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle"></t-rect><t-button-full-screen id="t-button-full-screen-19f6.5e73a1295" class="headerCenter-t-button-full-screen-0-6"  :c-style="tButtonFullScreenx0x6ComputedData.cStyle" :container-id="tButtonFullScreenx0x6ComputedData.containerId" :design-button="tButtonFullScreenx0x6ComputedData.designButton"></t-button-full-screen><t-rect v-if="global.integratedQuery.showIntegratedQuery === true" id="t-rect-7f78.3d90de9d8" class="headerCenter-t-rect-0-7"  :tip="tRectx0x7ComputedData.tip" :label="tRectx0x7ComputedData.label" :active="tRectx0x7ComputedData.active" :c-style="tRectx0x7ComputedData.cStyle" @click="onclick1721111555951_0_0"></t-rect><t-rect v-if="global.integratedQuery.showIntegratedQuery === false" id="t-rect-18a6.ff4feb525" class="headerCenter-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle" @click="onclick1719830606016"></t-rect><t-tabs v-if="state.showMoreMain === true" id="t-tabs-9a03.8f842bb9a" class="headerCenter-t-tabs-0-9"  :data="replaceCssVariables(filterData(state.menuMoreList, componentPropBindingMap?.['t-tabs-9a03.8f842bb9a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active-tab="replaceCssVariables(filterData(global.navMenuItemActive.name, componentPropBindingMap?.['t-tabs-9a03.8f842bb9a']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :tab-position-extend="tTabsx0x9ComputedData.tabPositionExtend" :stretch="tTabsx0x9ComputedData.stretch" :c-style="tTabsx0x9ComputedData.cStyle" @tab-click="ontabClick1719989940150"></t-tabs></div>
</template>

<script>
import io from 'socket.io-client';
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
import { TButtonFullScreen, THeaderTabs, TRect, TTabs, TTracePath } from '@ths/design';

export default {
  components: {
    TButtonFullScreen,
    THeaderTabs,
    TRect,
    TTabs,
    TTracePath,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-53ec.dbd7c4089":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-header-tabs-b60f.800e742b":{"attributeName":"tHeaderTabsx0x1","activeValue":{"filters":[]},"leftData":{"filters":[]},"rightData":{"filters":[]},"navItem":{"filters":[]},"title":{"filters":[]},"backgroundImage":{"filters":[]},"cStyle":{"filters":[]}},"t-trace-path-0f5c.027a20e27":{"attributeName":"tTracePathx0x2","cStyle":{"filters":[]},"path":{"filters":[]},"motionTrailType":{"filters":[]},"basicSpeed":{"filters":[]},"lineLength":{"filters":[]},"lineWidth":{"filters":[]},"gradientList":{"filters":[]},"showBackgroundPath":{"filters":[]},"backgroundPathGradientList":{"filters":[]},"isReverse":{"filters":[]}},"t-trace-path-75c1.186aebba6":{"attributeName":"tTracePathx0x3","cStyle":{"filters":[]},"path":{"filters":[]},"motionTrailType":{"filters":[]},"basicSpeed":{"filters":[]},"lineLength":{"filters":[]},"lineWidth":{"filters":[]},"gradientList":{"filters":[]},"showBackgroundPath":{"filters":[]},"backgroundPathGradientList":{"filters":[]},"isReverse":{"filters":[]}},"t-tabs-bdd2.7a91f674e":{"attributeName":"tTabsx0x4","alias":{"filters":[]},"data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-e1d0.6a4a4f741":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-button-full-screen-19f6.5e73a1295":{"attributeName":"tButtonFullScreenx0x6","cStyle":{"filters":[]},"containerId":{"filters":[]},"designButton":{"filters":[]}},"t-rect-7f78.3d90de9d8":{"attributeName":"tRectx0x7","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-18a6.ff4feb525":{"attributeName":"tRectx0x8","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-9a03.8f842bb9a":{"attributeName":"tTabsx0x9","data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}}};
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
   pageTitleClickable: false,
   homeMenuData: {"value":"","label":""},
   rightData: [{"label":"水环境","value":"water"},{"label":"土壤环境","value":"soil"},{"label":"声环境","value":"noise"}],
   leftData: [{"label":"大气环境","value":"air"},{"label":"水环境","value":"water"},{"label":"土壤环境","value":"soil"}],
   menuMoreList: [],
   activeMore: "1",
   showMoreMain: false,
   activeMenu: "",
   menuPath: "",
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
            default: {"width":"358px","height":"51px","position":"unset","left":"781px","top":"12px","cursor":"pointer","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","z-index":10},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"358px","height":"51px","position":"unset","left":"781px","top":"12px","cursor":"pointer","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","z-index":10}}}, 
 },
},
tHeaderTabsx0x1: {
defaultStyle: {
            default: {"width":"1918px","height":"107px","position":"unset","left":"2px","top":"0px","paddingLeft":"80px","paddingRight":"80px","backgroundImage":"var(--head-center-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
activeValue:"",
leftData:[{"label":"大气环境1","value":"air"},{"label":"水环境","value":"water"},{"label":"土壤环境","value":"soil"}],
rightData:[{"label":"自然生态","value":"natural"},{"label":"核与辐射","value":"radiation"}],
navItem:{"width":310,"height":57,"space":-120,"backgroundImage":"","activeBackgroundImage":"assets/images/2024-07-25/829ab5baaa8240b7a437e2f20f0fd6b4.png"},
title:{"text":"生态环境全景指挥","width":420,"height":72},
backgroundImage:"",
cStyle:{"wrapper":{"default":{"width":"1918px","height":"107px","position":"unset","left":"2px","top":"0px","paddingLeft":"80px","paddingRight":"80px","backgroundImage":"var(--head-center-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 0%","-webkit-mask-position":""}},"navItemWrapper":{"default":{"margin-top":"37px","backgroundImage":"var(--head-menu-left-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","clip-path":"polygon(0 0, calc(100% - 128px) 0, calc(100% - 22px) 100%, calc(100% - 207px) 100%)"},"hover":{"backgroundImage":"var(--head-menu-hover-left-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"active":{"backgroundPosition":"0% 0%","-webkit-mask-position":""}},"title":{"default":{"font-size":"37px","fontSize":"42px","fontWeight":"700","letterSpacing":"3px","background":"var(--head-menu-font)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","text-shadow":"none","marginLeft":"-20px","marginRight":"-20px"}},"navLeftWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","paddingLeft":"26px"}},"navRightWrapper":{"default":{"display":"flex","justifyContent":"flex-start","paddingRight":"26px"}},"navItemText":{"default":{"fontSize":"22px","fontFamily":"方正综艺","-webkit-background-clip":"text !important","-webkit-text-fill-color":"transparent","background":"var(--head-menu-font)","text-shadow":"none","font-weight":"400"},"active":{"background":"var(--head-menu-font-active)"}}}, 
 },
},
tTracePathx0x2: {
defaultStyle: {
            default: {"width":"882px","height":"176px","position":"unset","left":"1038px","top":"-11px","animationName":"","pointerEvents":"none","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(180deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"882px","height":"176px","position":"unset","left":"1038px","top":"-11px","animationName":"","pointerEvents":"none","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(180deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "}}},
path:"M0.35 53.83C16.05 38.24 37.28 29.5 59.4 29.5L597.98 29.5C620.44 29.5 642.53 35.14 662.24 45.91L723.42 79.34C751.22 94.53 782.38 102.5 814.06 102.5L881.35 102.5",
motionTrailType:"yunsu",
basicSpeed:40,
lineLength:200,
lineWidth:1,
gradientList:[{"point":0,"color":"rgba(255, 243, 218, 0)"},{"point":1,"color":"rgba(255, 244, 221, 1)"}],
showBackgroundPath:false,
backgroundPathGradientList:[{"color":"rgba(41, 168, 98, 1)"},{"point":1,"color":"rgba(41, 168, 98, 0)"}],
isReverse:true, 
 },
},
tTracePathx0x3: {
defaultStyle: {
            default: {"width":"882px","height":"176px","position":"unset","left":"1px","top":"-11px","animationName":"","pointerEvents":"none"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"882px","height":"176px","position":"unset","left":"1px","top":"-11px","animationName":"","pointerEvents":"none"}}},
path:"M0.35 53.83C16.05 38.24 37.28 29.5 59.4 29.5L597.98 29.5C620.44 29.5 642.53 35.14 662.24 45.91L723.42 79.34C751.22 94.53 782.38 102.5 814.06 102.5L881.35 102.5",
motionTrailType:"yunsu",
basicSpeed:40,
lineLength:200,
lineWidth:1,
gradientList:[{"point":0,"color":"rgba(255, 243, 218, 0)"},{"point":1,"color":"rgba(255, 244, 221, 1)"}],
showBackgroundPath:false,
backgroundPathGradientList:[{"color":"rgba(41, 168, 98, 1)"},{"point":1,"color":"rgba(41, 168, 98, 0)"}],
isReverse:true, 
 },
},
tTabsx0x4: {
defaultStyle: {
            default: {"width":"310px","height":"57px","position":"unset","left":"1604px","top":"39px","animationName":"","pointerEvents":"auto","clip-path":"polygon(134px 0, calc(100% - 12px) 0, calc(100% - 99px) 100%, 47px 100%)"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"更多","name":"more","disabled":false}],
activeTab:"1",
tabPositionExtend:"top-start",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"310px","height":"57px","position":"unset","left":"1604px","top":"39px","animationName":"","pointerEvents":"auto","clip-path":"polygon(134px 0, calc(100% - 12px) 0, calc(100% - 99px) 100%, 47px 100%)"}},"itemActiveBorder":{"default":{"display":"none"}},"itemLabel":{"default":{"fontSize":"22px","lineHeight":"24px","fontFamily":"方正综艺","background":"var(--head-menu-font)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"},"active":{"background":"var(--head-menu-font-active)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}},"itemWrapper":{"default":{"-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","backgroundImage":"var(--head-menu-right-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","width":"310px","marginLeft":"0px","marginRight":"0px","clip-path":"polygon(134px 0, calc(100% - 12px) 0, calc(100% - 99px) 100%, 47px 100%)"},"active":{"backgroundImage":"var(--head-menu-hover-right-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","backgroundColor":"rgba(255, 255, 255, 0)"},"hover":{"backgroundImage":"var(--head-menu-hover-right-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"arrow":{"default":{"pointerEvents":"none"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"11px","height":"7px","backgroundImage":"url(assets/images/2024-07-03/d787cc15440c4177a2a3a52532ddd9e4.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","left":"1787px","top":"61px","z-index":10,"pointerEvents":"none","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"11px","height":"7px","backgroundImage":"url(assets/images/2024-07-03/d787cc15440c4177a2a3a52532ddd9e4.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","left":"1787px","top":"61px","z-index":10,"pointerEvents":"none","position":"unset"}}}, 
 },
},
tButtonFullScreenx0x6: {
defaultStyle: {
            default: {"width":"34px","height":"34px","position":"unset","left":"16px","top":"60px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"34px","height":"34px","position":"unset","left":"16px","top":"60px"}},"fullWrapper":{"default":{"backgroundImage":"var(--head-full-screen)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--head-full-screen-hover)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"shrinkWrapper":{"default":{"backgroundImage":"var(--head-full-screen)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--head-full-screen-hover)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}},
containerId:"",
designButton:true, 
 },
},
tRectx0x7: {
defaultStyle: {
            default: {"width":"34px","height":"34px","position":"unset","left":"1872px","top":"60px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"","cursor":"pointer","backgroundImage":"var(--head-zhcx-hover)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"","z-index":2},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"34px","height":"34px","position":"unset","left":"1872px","top":"60px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"","cursor":"pointer","backgroundImage":"var(--head-zhcx-hover)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"","z-index":2},"hover":{"backgroundImage":"var(--head-zhcx-hover)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"34px","height":"34px","position":"unset","left":"1872px","top":"60px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"","cursor":"pointer","backgroundImage":"var(--head-zhcx)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"","z-index":2},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"34px","height":"34px","position":"unset","left":"1872px","top":"60px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"","cursor":"pointer","backgroundImage":"var(--head-zhcx)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"","z-index":2},"hover":{"backgroundImage":"var(--head-zhcx-hover)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
tTabsx0x9: {
defaultStyle: {
            default: {"width":"195px","height":"auto","position":"unset","left":"1664px","top":"99px","borderLeft":"1px solid var(--head-more-border)","borderTop":"1px solid var(--head-more-border)","borderRight":"1px solid var(--head-more-border)","borderBottom":"1px solid var(--head-more-border)","backgroundColor":"var(--head-more-bg)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","z-index":10,"paddingTop":"10px","paddingBottom":"10px","display":"block"},
            
            },
 default: { 
 
data:[],
activeTab:"",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"195px","height":"auto","position":"unset","left":"1664px","top":"99px","borderLeft":"1px solid var(--head-more-border)","borderTop":"1px solid var(--head-more-border)","borderRight":"1px solid var(--head-more-border)","borderBottom":"1px solid var(--head-more-border)","backgroundColor":"var(--head-more-bg)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","z-index":10,"paddingTop":"10px","paddingBottom":"10px","display":"block"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemLabel":{"default":{"fontSize":"22px","fontFamily":"方正综艺","background":"var(--head-menu-font)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","paddingLeft":"10px"},"active":{"background":"var(--head-menu-font-active)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"},"hover":{"backgroundColor":"rgba(255, 209, 6, 0.98)"}},"itemWrapper":{"active":{"backgroundColor":"rgba(185, 214, 0, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit"}}}, 
 },
},
});
const getMenu = () => {

const userId = localStorage.getItem('lastUserId');
// 拼接菜单接口地址
state.menuPath = `/ou/ouapi/api/res/${userId}/${global.appId}/auth/map`;

console.log(8888)
// 获取菜单数据
getMenuData();

};
const clickMore = () => {
// 设置显示更多内容的状态
state.showMoreMain = !state.showMoreMain;
// 设置更多的状态
setMoreState();
};
const setMoreState = () => {
/**
 * 点击更多选项的操作
 */

try {
  if (state.showMoreMain) {
    // 设置更多箭头的方向
    document.getElementById('t-rect-e1d0.6a4a4f741').style.transform = "rotate(180deg)";
  } else {
    // 判断更多的内容有没有选中
    const active = state.menuMoreList.find((item) => item.label === global.navMenuItemActive.label);
    if (active) {
      state.activeMore = 'more';
    } else {
      state.activeMore = '1';
    }

    // 设置更多箭头的方向
    document.getElementById('t-rect-e1d0.6a4a4f741').style.transform = "rotate(0deg)";
  }
} catch (err) {
  console.error(err, '自定义方法clickMore报错');
}
};
const sendLoadMenuMsg = () => {
global.businessDialog.dialogName = '';//关闭弹框
if (global.navMenuItemActive && global.navMenuItemActive.label !== '首页') {
  /* 发送socket消息 */
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "loadMenuData", // 消息名称
    data: { "menuId": global.navMenuItemActive.name }, // 发送的数据
  });


  /* 若页面标题可点击 */
} else if (global.navMenuItemActive.label === '首页') {
  /* 发送socket消息 */
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "loadMenuData", // 消息名称
    data: { "menuId": state.homeMenuData.name }, // 发送的数据
  });
}
};
const setRegionaQueryTabs = (item) => {
// 判断区域选择-tabs标签是否显示
console.log(item, '田雪测试-切换菜单项')
// 是否展示行政区划
const isShowRegion = item.EXT2.indexOf('region') !== -1;
// 是否展示重点区域
const isShowArea = item.EXT2.indexOf('area') !== -1;
// 是否展示重点流域
const isShowWsystem = item.EXT2.indexOf('wsystem') !== -1;
// 是否是自定义区域
const isCustomArea = item.EXT2.indexOf('custom') !== -1;


/* 若之前是自定义区域|重点区域|重点流域，现在不是了 */
if ((global.regionaQuery.isShowZDYQY && !isCustomArea)
  || (global.regionaQuery.isShowZDQY && !isShowArea)
  || (global.regionaQuery.isShowZDLY && !isShowWsystem)) {
  // 重置成默认的行政区编码
  rootData.rootEmit(
    'rootData:change',
    {
      key: 'regionaQuery.regionCode',
      value: global.regionaQuery.defaultRegionCode,
    },
  );
  // 重置自定义区域编码
  rootData.rootEmit(
    'rootData:change',
    {
      key: 'regionaQuery.areaCode',
      value: '',
    },
  );
  // 重置区域类型为行政区
  rootData.rootEmit(
    'rootData:change',
    {
      key: 'regionaQuery.regionType',
      value: 'region',
    },
  );

  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "resetRegion", // 消息名称
    data: {
        "selected": "region",
        "REGION_CODE": global.regionaQuery.defaultRegionCode,
        "REGION_NAME": "惠州市",
        "REGION_TYPE": getRegionLevel(global.regionaQuery.defaultRegionCode),
    }, // 发送的数据
  });
}

// 行政区划
rootData.rootEmit(
  'rootData:change',
  {
    key: 'regionaQuery.isShowXZQH',
    value: isShowRegion,
  },
);
// 重点区域
rootData.rootEmit(
  'rootData:change',
  {
    key: 'regionaQuery.isShowZDQY',
    value: isShowArea,
  },
);
// 重点流域
rootData.rootEmit(
  'rootData:change',
  {
    key: 'regionaQuery.isShowZDLY',
    value: isShowWsystem,
  },
);
// 自定义区域
rootData.rootEmit(
  'rootData:change',
  {
    key: 'regionaQuery.isShowZDYQY',
    value: isCustomArea,
  },
);
};
const handleSelectNatureEcology = () => {
/**
 * 处理切换到自然生态的场景
 */

console.log(state.activeMenu, 6667)
};
const setActiveMenu = (menuData) => {
/**
 * 设置菜单高亮数据
 * 由于导航-标题居中组件和导航-标题居左组件均使用的是同一个全局变量global.navMenuItemActive，
 * 但两个组件引用的乐构组件接收的参数字段不一致，所以要做以下处理。
 */

// 给当前高亮的顶部导航菜单赋值
global.navMenuItemActive = JSON.parse(JSON.stringify(menuData));

// 当前变量使用的是name属性记录当前高亮菜单的编码，而组件中选中的菜单编码的属性是value，这里要做下转换
global.navMenuItemActive.name = global.navMenuItemActive.value;
delete global.navMenuItemActive.value;

};
const setNavStyle = () => {
/**
 * 设置顶部导航栏的样式
 */

// 若有更多数据时
if (state.menuMoreList.length) {
  // 导航栏组件右侧的DOM
  const tabRightComponent = document.getElementById('t-header-tabs-b60f.800e742b');
  if (tabRightComponent) {
    // 获取所有右侧元素
    const tabRightItems = tabRightComponent.querySelectorAll('.right-item');
    if (tabRightItems) {
      const tabRightItemsList = [...tabRightItems];
      if (tabRightItemsList.length) {
        // 获取右侧左右一个元素
        const lastItem = tabRightItemsList[tabRightItemsList.length - 1];
        /* 隐藏最后一个元素，为“更多”下拉腾出空间 */
        lastItem.style.visibility = 'hidden';
        lastItem.style.pointEvents = 'none';
      }
    }
  }
}
};
const onnavItemClick1721375205178 = (data) => {
// 执行自定义方法
setActiveMenu(data);
// 设置变量值
state.showMoreMain = false;
// 执行自定义方法
setMoreState();
// 执行自定义方法
sendLoadMenuMsg();
// 执行自定义方法
setRegionaQueryTabs(data);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closePopup", // 消息名称
data: "", // 发送的数据
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeDialog", // 消息名称
data: {}, // 发送的数据
});
};
const ontabClick1719989836914 = (data) => {
// 设置变量值
state.activeMore = data.name;
// 执行自定义方法
clickMore();
};
const ontabClick1719989940150 = (data) => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'navMenuItemActive.name',
                    value:data.name,
                    data: {
                      navMenuItemActive:{name: data.name}
                    },
                  });
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'navMenuItemActive.label',
                    value:data.label,
                    data: {
                      navMenuItemActive:{label: data.label}
                    },
                  });
// 设置变量值
state.showMoreMain = false;
// 执行自定义方法
setMoreState();
// 执行自定义方法
sendLoadMenuMsg();
// 执行自定义方法
setRegionaQueryTabs(data.item);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closePopup", // 消息名称
data: "", // 发送的数据
});
};
const onclick1721111555951_0_0 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'integratedQuery.showIntegratedQuery',
                    value:false,
                    data: {
                      integratedQuery:{showIntegratedQuery: false}
                    },
                  });
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "isOpenZhcx", // 消息名称
data: {"IS_OPEN":global.integratedQuery.showIntegratedQuery}, // 发送的数据
});
};
const onclick1719830606016 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'integratedQuery.showIntegratedQuery',
                    value:true,
                    data: {
                      integratedQuery:{showIntegratedQuery: true}
                    },
                  });
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "isOpenZhcx", // 消息名称
data: {"IS_OPEN":global.integratedQuery.showIntegratedQuery}, // 发送的数据
});
};
const onclick1727329106591 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'navMenuItemActive',
                    value:state.homeMenuData,
                    data: {
                      navMenuItemActive: state.homeMenuData
                    },
                  });
// 设置变量值
state.showMoreMain = false;
// 执行自定义方法
setMoreState();
// 执行自定义方法
sendLoadMenuMsg();
// 执行自定义方法
setRegionaQueryTabs(state.homeMenuData);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closePopup", // 消息名称
data: "", // 发送的数据
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getMenuData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"state.menuPath","method":"get","baseURL":"global.serviceBaseUrl","params":{}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":state.menuPath,"method":"get","baseURL":global.serviceBaseUrl,"params":{},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-state.menuPath',  {});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMenuData'] = res.data;
                
     // console.log(res);
state.leftData = [];
state.rightData = [];
state.menuMoreList = [];
state.homeMenuData = { label: '', name: '' };
if (res.status === 200 && res.data && res.data.headerMenuList) {
  let { headerMenuList, asideMenusMap, appMap } = res.data;
  // headerMenuList = [...headerMenuList, ...headerMenuList].splice(0, 12)
  // 全景指挥的菜单数据索引值
  const index =  headerMenuList.findIndex((item) => item.RES_NAME === '首页');
  if (index > -1) {
    // 取出全景指挥的菜单数据 返回了一个数组
    const dataList = headerMenuList.splice(index, 1);
    if (Array.isArray(dataList) && dataList.length) {
      // 首页菜单赋值（使用全景指挥的菜单数据）
      state.homeMenuData = {
        ...dataList[0],
        label: dataList[0].RES_NAME,
        name: dataList[0].RES_ID
      };

      // 页面标题可点击
      state.pageTitleClickable = true;
    }
  }
  // 组织头部数据
  if (headerMenuList.length) {

    if (headerMenuList.length <= global.maxNavItemCount) {
      const len = Math.round(headerMenuList.length / 2);
      // 组织组件需要用到的数据
      headerMenuList.forEach((item, index) => {
        if (index < len) {
          // 左侧菜单数据
          state.leftData.push({
            ...item,
            label: item.RES_NAME,
            value: item.RES_ID,
          });
        } else {
          // 右侧菜单数据
          state.rightData.push({
            ...item,
            label: item.RES_NAME,
            value: item.RES_ID,
          })
        }
      });
    } else {
      const halfLength = Math.ceil(global.maxNavItemCount / 2);
      // 组织组件需要用到的数据
      headerMenuList.forEach((item, index) => {
        if (index < halfLength) {
          // 左侧菜单数据
          state.leftData.push({
            ...item,
            label: item.RES_NAME,
            value: item.RES_ID,
          });
        } else if (index >= halfLength && index < global.maxNavItemCount) {
          // 右侧菜单数据
          state.rightData.push({
            ...item,
            label: item.RES_NAME,
            value: item.RES_ID,
          })
        } else if (index === global.maxNavItemCount) {
          // 前一个选项
          const preItem = headerMenuList[index - 1];
          // 更多
          state.menuMoreList.push({
            ...preItem,
            label: preItem.RES_NAME,
            name: preItem.RES_ID,
          });
          // 更多
          state.menuMoreList.push({
            ...item,
            label: item.RES_NAME,
            name: item.RES_ID,
          })
        } else {
          // 更多
          state.menuMoreList.push({
            ...item,
            label: item.RES_NAME,
            name: item.RES_ID,
          })
        }
      });
    }

    // 高亮的菜单项
    let activeMenuItem = state.leftData[0];

    /* 若指定了首页的菜单数据 */
    if (state.homeMenuData.label === '首页') {
      // 高亮的菜单项为首页的菜单数据
      activeMenuItem = state.homeMenuData;
      // 更新菜单选中项（编码）
      global.navMenuItemActive = state.homeMenuData;
    } else {
      // 更新菜单选中项（编码）
      global.navMenuItemActive = activeMenuItem;
    }


    // 判断区域选择-tabs标签是否显示
    const obj = activeMenuItem.EXT2 || '';
    global.regionaQuery.isShowXZQH = obj.indexOf('region') !== -1; // 行政区划
    global.regionaQuery.isShowZDQY = obj.indexOf('area') !== -1; // 重点区域
    global.regionaQuery.isShowZDLY = obj.indexOf('wsystem') !== -1; // 重点流域
    global.regionaQuery.isShowZDYQY = obj.indexOf('custom') !== -1; // 自定义区域

  } else {
    // 选中项
    global.navMenuItemActive = appMap;
  }


  const allAsideMenusMap = state.homeMenuData.label ? {...asideMenusMap, [state.homeMenuData.name]: [{ ...state.homeMenuData, CHILDREN: [state.homeMenuData] }] } : asideMenusMap;

  // 左侧的菜单数据存到缓存里
  localStorage.setItem('lxtAsideMenusMap', JSON.stringify(allAsideMenusMap));

  setTimeout(() => {
    // 设置标签栏的样式
    setNavStyle();
  });
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
                            setPageScale('t-l-c-headerCenter', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getMenu();
/* 接收socket.io消息 */
const onSocketChangecc02565324ff46a38186 = function (data) {
if(data.type === "leftMenuMounted"){
try{
// 执行自定义方法
sendLoadMenuMsg();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangecc02565324ff46a38186);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangecc02565324ff46a38186);
});
onMounted(() => {
setPageScale('t-l-c-headerCenter', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tHeaderTabsx0x1ComputedData = computed(() => _.merge({}, componentState.tHeaderTabsx0x1.default, componentState.tHeaderTabsx0x1?.[state.screenSize]));

 const tTracePathx0x2ComputedData = computed(() => _.merge({}, componentState.tTracePathx0x2.default, componentState.tTracePathx0x2?.[state.screenSize]));

 const tTracePathx0x3ComputedData = computed(() => _.merge({}, componentState.tTracePathx0x3.default, componentState.tTracePathx0x3?.[state.screenSize]));

 const tTabsx0x4ComputedData = computed(() => _.merge({}, componentState.tTabsx0x4.default, componentState.tTabsx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tButtonFullScreenx0x6ComputedData = computed(() => _.merge({}, componentState.tButtonFullScreenx0x6.default, componentState.tButtonFullScreenx0x6?.[state.screenSize]));

 const tRectx0x7ComputedData = computed(() => _.merge({}, componentState.tRectx0x7.default, componentState.tRectx0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tTabsx0x9ComputedData = computed(() => _.merge({}, componentState.tTabsx0x9.default, componentState.tTabsx0x9?.[state.screenSize]));

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
tHeaderTabsx0x1ComputedData,
tTracePathx0x2ComputedData,
tTracePathx0x3ComputedData,
tTabsx0x4ComputedData,
tRectx0x5ComputedData,
tButtonFullScreenx0x6ComputedData,
tRectx0x7ComputedData,
tRectx0x8ComputedData,
tTabsx0x9ComputedData,
onclick1727329106591,
onnavItemClick1721375205178,
ontabClick1719989836914,
onclick1721111555951_0_0,
onclick1719830606016,
ontabClick1719989940150,
};
},
}
</script>

<style scoped>
.t-l-c-headerCenter {
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
height: 127px;
background-color: rgba(0,0,0,0);
}
.t-l-c-headerCenter .headerCenter-t-rect-0-0 {
position: absolute !important;
top: 12px;
left: 781px;
width: 358px;
height: 51px;
pointer-events: auto;
}

.t-l-c-headerCenter .headerCenter-t-header-tabs-0-1 {
position: absolute !important;
top: 0px;
left: 2px;
width: 1918px;
height: 107px;
pointer-events: auto;
}

.t-l-c-headerCenter .headerCenter-t-trace-path-0-2 {
position: absolute !important;
top: -11px;
left: 1038px;
width: 882px;
height: 176px;
pointer-events: none;
}

.t-l-c-headerCenter .headerCenter-t-trace-path-0-3 {
position: absolute !important;
top: -11px;
left: 1px;
width: 882px;
height: 176px;
pointer-events: none;
}

.t-l-c-headerCenter .headerCenter-t-tabs-0-4 {
position: absolute !important;
top: 39px;
left: 1604px;
width: 310px;
height: 57px;
pointer-events: auto;
}

.t-l-c-headerCenter .headerCenter-t-rect-0-5 {
position: absolute !important;
top: 61px;
left: 1787px;
width: 11px;
height: 7px;
pointer-events: none;
}

.t-l-c-headerCenter .headerCenter-t-button-full-screen-0-6 {
position: absolute !important;
top: 60px;
left: 16px;
width: 34px;
height: 34px;
pointer-events: auto;
}

.t-l-c-headerCenter .headerCenter-t-rect-0-7 {
position: absolute !important;
top: 60px;
left: 1872px;
width: 34px;
height: 34px;
pointer-events: auto;
}

.t-l-c-headerCenter .headerCenter-t-rect-0-8 {
position: absolute !important;
top: 60px;
left: 1872px;
width: 34px;
height: 34px;
pointer-events: auto;
}

.t-l-c-headerCenter .headerCenter-t-tabs-0-9 {
position: absolute !important;
top: 99px;
left: 1664px;
width: 195px;
height: auto;
pointer-events: auto;
}
</style>
