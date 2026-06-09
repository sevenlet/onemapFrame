<template>
  <div id="t-l-c-header" class="t-l-c-header" ><t-rect id="t-rect-c146.20b59edb8" class="header-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-button-full-screen id="t-button-full-screen-f8d9.f73f471b9" class="header-t-button-full-screen-0-1"  :c-style="tButtonFullScreenx0x1ComputedData.cStyle" :container-id="tButtonFullScreenx0x1ComputedData.containerId" :design-button="tButtonFullScreenx0x1ComputedData.designButton"></t-button-full-screen><t-tabs v-if="state.menuMoreList.length !== 0" id="t-tabs-bdd2.7a91f674e" class="header-t-tabs-0-2"  :alias="tTabsx0x2ComputedData.alias" :data="tTabsx0x2ComputedData.data" :active-tab="replaceCssVariables(filterData(state.activeMore, componentPropBindingMap?.['t-tabs-bdd2.7a91f674e']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :tab-position-extend="tTabsx0x2ComputedData.tabPositionExtend" :stretch="tTabsx0x2ComputedData.stretch" :c-style="tTabsx0x2ComputedData.cStyle" @tab-click="ontabClick1719989836914"></t-tabs><t-rect v-if="global.integratedQuery.showIntegratedQuery === false" id="t-rect-18a6.ff4feb525" class="header-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1719830606016"></t-rect><t-gradient-shadow-text id="t-gradient-shadow-text-afa2.81d09de33" class="header-t-gradient-shadow-text-0-4"  :label="tGradientShadowTextx0x4ComputedData.label" :c-style="tGradientShadowTextx0x4ComputedData.cStyle" :shadow-style="tGradientShadowTextx0x4ComputedData.shadowStyle" @click="onclick1768285001142"></t-gradient-shadow-text><t-gradient-shadow-text id="t-gradient-shadow-text-39d0.29c892e3" class="header-t-gradient-shadow-text-0-5"  :label="tGradientShadowTextx0x5ComputedData.label" :c-style="tGradientShadowTextx0x5ComputedData.cStyle" :shadow-style="tGradientShadowTextx0x5ComputedData.shadowStyle"></t-gradient-shadow-text><t-rect v-if="global.integratedQuery.showIntegratedQuery === true" id="t-rect-7f78.3d90de9d8" class="header-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle" @click="onclick1721111555951_0_0"></t-rect><t-tabs v-if="state.showMoreMain === true" id="t-tabs-9a03.8f842bb9a" class="header-t-tabs-0-7"  :data="replaceCssVariables(filterData(state.menuMoreList, componentPropBindingMap?.['t-tabs-9a03.8f842bb9a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active-tab="replaceCssVariables(filterData(global.navMenuItemActive.name, componentPropBindingMap?.['t-tabs-9a03.8f842bb9a']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :tab-position-extend="tTabsx0x7ComputedData.tabPositionExtend" :stretch="tTabsx0x7ComputedData.stretch" :c-style="tTabsx0x7ComputedData.cStyle" @tab-click="ontabClick1719989940150"></t-tabs><t-rect v-if="state.menuMoreList.length !== 0" id="t-rect-e1d0.6a4a4f741" class="header-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle"></t-rect><t-rect v-if="state.pageTitleClickable === true" id="t-rect-28c3.d29edd682" class="header-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle" @click="onclick1727349910830"></t-rect><t-tabs id="t-tabs-6219.8705aeb2c" class="header-t-tabs-0-10"  :alias="tTabsx0x10ComputedData.alias" :data="replaceCssVariables(filterData(state.menuList, componentPropBindingMap?.['t-tabs-6219.8705aeb2c']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active-tab="replaceCssVariables(filterData(global.navMenuItemActive.name, componentPropBindingMap?.['t-tabs-6219.8705aeb2c']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :tab-position-extend="tTabsx0x10ComputedData.tabPositionExtend" :stretch="tTabsx0x10ComputedData.stretch" :c-style="tTabsx0x10ComputedData.cStyle" @tab-click="ontabClick1719902594913"></t-tabs><t-component id="t-component-95ba.76ef533f4" class="header-t-component-0-11"  :name="tComponentx0x11ComputedData.name" :loading="tComponentx0x11ComputedData.loading" :c-style="tComponentx0x11ComputedData.cStyle" :src="tComponentx0x11ComputedData.src" :component-name="tComponentx0x11ComputedData.componentName" :page-id="tComponentx0x11ComputedData.pageId" :page-code="tComponentx0x11ComputedData.pageCode"></t-component><t-tabs-base id="t-tabs-base-0b3e.349a0b7ec" class="header-t-tabs-base-0-12"  :data="tTabsBasex0x12ComputedData.data" :space="tTabsBasex0x12ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(global.activeTheme, componentPropBindingMap?.['t-tabs-base-0b3e.349a0b7ec']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x12ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x12ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x12ComputedData.alias" :c-style="tTabsBasex0x12ComputedData.cStyle" @tab-click="ontabClick1776670542927_0_0"></t-tabs-base><t-tabs-base id="t-tabs-base-e26a.0e5e0ed12" class="header-t-tabs-base-0-13"  :data="tTabsBasex0x13ComputedData.data" :space="tTabsBasex0x13ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(global.activeTheme, componentPropBindingMap?.['t-tabs-base-e26a.0e5e0ed12']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x13ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x13ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x13ComputedData.alias" :c-style="tTabsBasex0x13ComputedData.cStyle" @tab-click="ontabClick1776647253799"></t-tabs-base></div>
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
import { TButtonFullScreen, TComponent, TGradientShadowText, TRect, TTabs, TTabsBase } from '@ths/design';

export default {
  components: {
    TButtonFullScreen,
    TComponent,
    TGradientShadowText,
    TRect,
    TTabs,
    TTabsBase,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-c146.20b59edb8":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-button-full-screen-f8d9.f73f471b9":{"attributeName":"tButtonFullScreenx0x1","cStyle":{"filters":[]},"containerId":{"filters":[]},"designButton":{"filters":[]}},"t-tabs-bdd2.7a91f674e":{"attributeName":"tTabsx0x2","alias":{"filters":[]},"data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-18a6.ff4feb525":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-gradient-shadow-text-afa2.81d09de33":{"attributeName":"tGradientShadowTextx0x4","label":{"filters":[]},"cStyle":{"filters":[]},"shadowStyle":{"filters":[]}},"t-gradient-shadow-text-39d0.29c892e3":{"attributeName":"tGradientShadowTextx0x5","label":{"filters":[]},"cStyle":{"filters":[]},"shadowStyle":{"filters":[]}},"t-rect-7f78.3d90de9d8":{"attributeName":"tRectx0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-9a03.8f842bb9a":{"attributeName":"tTabsx0x7","data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-e1d0.6a4a4f741":{"attributeName":"tRectx0x8","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-28c3.d29edd682":{"attributeName":"tRectx0x9","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-6219.8705aeb2c":{"attributeName":"tTabsx0x10","alias":{"filters":[]},"data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}},"t-component-95ba.76ef533f4":{"attributeName":"tComponentx0x11","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-tabs-base-0b3e.349a0b7ec":{"attributeName":"tTabsBasex0x12","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-e26a.0e5e0ed12":{"attributeName":"tTabsBasex0x13","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}}};
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
   linkUrl: "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/root",
   leftMenuCodeFromUrl: "",
   topMenuCodeFromUrl: "",
   lastActiveMenu: {},
   pageTitleClickable: false,
   homeMenuData: {"value":"","label":""},
   menuMoreList: [{"RES_ID":"09b9bf32-bc84-4482-a7d0-86a0ff843238","RES_NAME":"自然环境","RES_TYPE":10,"PARENT":"05505c30-543b-447a-9d61-69f20d15c4a3","IS_MENU":1,"MENU_URL":null,"TARGET":"2","MENU_ICON":null,"PERMISSION_CODE":null,"SORT":520,"FUNC_URL":null,"AUTH_VISIT":1,"IS_SHOW_DROPDOWNMENU":null,"IS_SHOW_FIRSTMENU":null,"EXT1":null,"EXT2":"region","EXT3":null,"EXT4":null,"APP_ID":"DCP.LXT","CUSTOM_SETTING":{"showBreadcrumbs":"1","showTitle":"1"},"RES_PATH":[{"MENU_URL":null,"RES_NAME":"自然环境","RES_ID":"09b9bf32-bc84-4482-a7d0-86a0ff843238","MENU_ICON":null}],"CHILDREN":[],"label":"自然环境","name":"09b9bf32-bc84-4482-a7d0-86a0ff843238"},{"RES_ID":"7d3ae01e-a24f-4bf3-8390-d8676fc0a44c","RES_NAME":"首页","RES_TYPE":10,"PARENT":"05505c30-543b-447a-9d61-69f20d15c4a3","IS_MENU":1,"MENU_URL":null,"TARGET":"2","MENU_ICON":null,"PERMISSION_CODE":null,"SORT":1,"FUNC_URL":null,"AUTH_VISIT":1,"IS_SHOW_DROPDOWNMENU":null,"IS_SHOW_FIRSTMENU":null,"EXT1":"{\"resCode\":\"one_map_qjzh\",\"appURL\":\"http://192.168.0.202:7777/mapgo5.0/preview.html?appID=05a0155756d629a1de2425d44cb13a98&appType=2D&appName=%E5%85%A8%E6%99%AF%E6%8C%87%E6%8C%A5(%E7%BB%BC%E5%90%88%E6%9F%A5%E8%AF%A2%E4%B8%93%E7%94%A8)\"}","EXT2":"region,custom","EXT3":null,"EXT4":null,"APP_ID":"DCP.LXT","CUSTOM_SETTING":{"showBreadcrumbs":"1","showTitle":"1"},"RES_PATH":[{"MENU_URL":null,"RES_NAME":"首页","RES_ID":"7d3ae01e-a24f-4bf3-8390-d8676fc0a44c","MENU_ICON":null}],"CHILDREN":[],"label":"首页","name":"7d3ae01e-a24f-4bf3-8390-d8676fc0a44c"},{"RES_ID":"105b6b22-2853-4f65-b25f-ffee0148a8bc","RES_NAME":"大气环境","RES_TYPE":10,"PARENT":"05505c30-543b-447a-9d61-69f20d15c4a3","IS_MENU":1,"MENU_URL":null,"TARGET":"2","MENU_ICON":null,"PERMISSION_CODE":null,"SORT":10,"FUNC_URL":null,"AUTH_VISIT":1,"IS_SHOW_DROPDOWNMENU":null,"IS_SHOW_FIRSTMENU":null,"EXT1":null,"EXT2":"region,area","EXT3":null,"EXT4":null,"APP_ID":"DCP.LXT","CUSTOM_SETTING":{"showBreadcrumbs":"1","showTitle":"1"},"RES_PATH":[{"MENU_URL":null,"RES_NAME":"大气环境","RES_ID":"105b6b22-2853-4f65-b25f-ffee0148a8bc","MENU_ICON":null}],"CHILDREN":[],"label":"大气环境","name":"105b6b22-2853-4f65-b25f-ffee0148a8bc"},{"RES_ID":"e1504487-39a0-461c-9a38-012ce6d6f62d","RES_NAME":"水环境","RES_TYPE":10,"PARENT":"05505c30-543b-447a-9d61-69f20d15c4a3","IS_MENU":1,"MENU_URL":null,"TARGET":"2","MENU_ICON":null,"PERMISSION_CODE":null,"SORT":20,"FUNC_URL":null,"AUTH_VISIT":1,"IS_SHOW_DROPDOWNMENU":null,"IS_SHOW_FIRSTMENU":null,"EXT1":null,"EXT2":"region,wsystem","EXT3":null,"EXT4":null,"APP_ID":"DCP.LXT","CUSTOM_SETTING":{"showBreadcrumbs":"1","showTitle":"1"},"RES_PATH":[{"MENU_URL":null,"RES_NAME":"水环境","RES_ID":"e1504487-39a0-461c-9a38-012ce6d6f62d","MENU_ICON":null}],"CHILDREN":[],"label":"水环境","name":"e1504487-39a0-461c-9a38-012ce6d6f62d"}],
   activeMore: "1",
   showMoreMain: false,
   activeMenu: "",
   menuList: [],
   menuPath: "",
});
// 选中的图表主题
const activeChartTheme = computed(() => {
let activeTheme = _.cloneDeep(themes.find((item) => item.name === global.activeTheme));
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
            default: {"width":"1956px","height":"144px","left":"-8px","top":"20px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--head-left-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"150% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","pointerEvents":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1956px","height":"144px","left":"-8px","top":"20px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--head-left-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"150% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","pointerEvents":"none"}}}, 
 },
},
tButtonFullScreenx0x1: {
defaultStyle: {
            default: {"width":"34px","height":"34px","position":"unset","left":"1868px","top":"57px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"34px","height":"34px","position":"unset","left":"1868px","top":"57px","animationName":""}},"fullWrapper":{"default":{"backgroundImage":"var(--head-full-screen)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--head-full-screen-hover)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"shrinkWrapper":{"default":{"backgroundImage":"var(--head-shrink-screen)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--head-shrink-screen-hover)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}},
containerId:"",
designButton:true, 
 },
},
tTabsx0x2: {
defaultStyle: {
            default: {"width":"310px","height":"57px","position":"unset","left":"1572px","top":"51px","animationName":"","pointerEvents":"auto","clip-path":"polygon(139px 0, calc(100% - 12px) 0, calc(100% - 99px) 100%, 53px 100%)"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"更多","name":"more","disabled":false}],
activeTab:"1",
tabPositionExtend:"top-start",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"310px","height":"57px","position":"unset","left":"1572px","top":"51px","animationName":"","pointerEvents":"auto","clip-path":"polygon(139px 0, calc(100% - 12px) 0, calc(100% - 99px) 100%, 53px 100%)"}},"itemActiveBorder":{"default":{"display":"none"}},"itemLabel":{"default":{"fontSize":"22px","lineHeight":"24px","fontFamily":"方正综艺","background":"var(--head-menu-font)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"},"active":{"background":"var(--head-menu-font-active)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}},"itemWrapper":{"default":{"-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","backgroundImage":"var(--head-menu-right-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","width":"310px","marginLeft":"0px","marginRight":"0px","clip-path":"polygon(139px 0, calc(100% - 12px) 0, calc(100% - 99px) 100%, 53px 100%)"},"active":{"backgroundImage":"var(--head-menu-hover-right-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","backgroundColor":"rgba(255, 255, 255, 0)"},"hover":{"backgroundImage":"var(--head-menu-hover-right-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"arrow":{"default":{"pointerEvents":"none"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"34px","height":"34px","position":"unset","left":"1816px","top":"57px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"","cursor":"pointer","backgroundImage":"var(--head-zhcx)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"34px","height":"34px","position":"unset","left":"1816px","top":"57px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"","cursor":"pointer","backgroundImage":"var(--head-zhcx)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"backgroundImage":"var(--head-zhcx-hover)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
tGradientShadowTextx0x4: {
defaultStyle: {
            default: {"width":"659px","height":"47px","position":"unset","left":"23px","top":"37px","cursor":"pointer","fontSize":"16px"},
            
            },
 default: { 
 
label:"南平市生态环境体检“1+N”平台",
cStyle:{"wrapper":{"default":{"width":"659px","height":"47px","position":"unset","left":"23px","top":"37px","cursor":"pointer","fontSize":"16px"}},"textStyle":{"default":{"-webkit-text-fill-color":"inherit","-webkit-background-clip":"border-box","backgroundImage":"","fontWeight":"300","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"38px","color":"#fff","lineHeight":"46px","fontFamily":"优设标题黑","letterSpacing":"5px"}},"textShadowStyle":{"default":{"fontWeight":"bold","fontSize":"38px","lineHeight":"46px","fontFamily":"优设标题黑","letterSpacing":"5px","color":"rgba(249, 50, 0, 1)"}}},
shadowStyle:{"color":"#6e7584","blur":"4PX"}, 
 },
},
tGradientShadowTextx0x5: {
defaultStyle: {
            default: {"width":"189px","height":"45px","position":"unset","left":"611px","top":"39px","cursor":"auto","fontSize":"16px","animationName":""},
            
            },
 default: { 
 
label:"（演示版）",
cStyle:{"wrapper":{"default":{"width":"189px","height":"45px","position":"unset","left":"611px","top":"39px","cursor":"auto","fontSize":"16px","animationName":""}},"textStyle":{"default":{"-webkit-text-fill-color":"inherit","-webkit-background-clip":"border-box","backgroundImage":"","fontWeight":"300","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"34px","color":"#fff","lineHeight":"38px","fontFamily":"优设标题黑","letterSpacing":"5px"}},"textShadowStyle":{"default":{"fontWeight":"bold","fontSize":"14px","lineHeight":"14px","fontFamily":"优设标题黑","letterSpacing":"5px","color":"rgba(249, 50, 0, 1)"}}},
shadowStyle:{"color":"#6e7584","blur":"4PX"}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"34px","height":"34px","position":"unset","left":"1816px","top":"57px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"","cursor":"pointer","backgroundImage":"var(--head-zhcx-hover)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"34px","height":"34px","position":"unset","left":"1816px","top":"57px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"","cursor":"pointer","backgroundImage":"var(--head-zhcx-hover)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"backgroundImage":"var(--head-zhcx-hover)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
tTabsx0x7: {
defaultStyle: {
            default: {"width":"195px","height":"226px","position":"unset","left":"1632px","top":"113px","borderLeft":"1px solid var(--head-more-border)","borderTop":"1px solid var(--head-more-border)","borderRight":"1px solid var(--head-more-border)","borderBottom":"1px solid var(--head-more-border)","backgroundColor":"var(--head-more-bg)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","z-index":10,"paddingTop":"10px","paddingBottom":"10px","display":"block"},
            
            },
 default: { 
 
data:[{"RES_ID":"09b9bf32-bc84-4482-a7d0-86a0ff843238","RES_NAME":"自然环境","RES_TYPE":10,"PARENT":"05505c30-543b-447a-9d61-69f20d15c4a3","IS_MENU":1,"MENU_URL":null,"TARGET":"2","MENU_ICON":null,"PERMISSION_CODE":null,"SORT":520,"FUNC_URL":null,"AUTH_VISIT":1,"IS_SHOW_DROPDOWNMENU":null,"IS_SHOW_FIRSTMENU":null,"EXT1":null,"EXT2":"region","EXT3":null,"EXT4":null,"APP_ID":"DCP.LXT","CUSTOM_SETTING":{"showBreadcrumbs":"1","showTitle":"1"},"RES_PATH":[{"MENU_URL":null,"RES_NAME":"自然环境","RES_ID":"09b9bf32-bc84-4482-a7d0-86a0ff843238","MENU_ICON":null}],"CHILDREN":[],"label":"自然环境","name":"09b9bf32-bc84-4482-a7d0-86a0ff843238"},{"RES_ID":"7d3ae01e-a24f-4bf3-8390-d8676fc0a44c","RES_NAME":"首页","RES_TYPE":10,"PARENT":"05505c30-543b-447a-9d61-69f20d15c4a3","IS_MENU":1,"MENU_URL":null,"TARGET":"2","MENU_ICON":null,"PERMISSION_CODE":null,"SORT":1,"FUNC_URL":null,"AUTH_VISIT":1,"IS_SHOW_DROPDOWNMENU":null,"IS_SHOW_FIRSTMENU":null,"EXT1":"{\"resCode\":\"one_map_qjzh\",\"appURL\":\"http://192.168.0.202:7777/mapgo5.0/preview.html?appID=05a0155756d629a1de2425d44cb13a98&appType=2D&appName=%E5%85%A8%E6%99%AF%E6%8C%87%E6%8C%A5(%E7%BB%BC%E5%90%88%E6%9F%A5%E8%AF%A2%E4%B8%93%E7%94%A8)\"}","EXT2":"region,custom","EXT3":null,"EXT4":null,"APP_ID":"DCP.LXT","CUSTOM_SETTING":{"showBreadcrumbs":"1","showTitle":"1"},"RES_PATH":[{"MENU_URL":null,"RES_NAME":"首页","RES_ID":"7d3ae01e-a24f-4bf3-8390-d8676fc0a44c","MENU_ICON":null}],"CHILDREN":[],"label":"首页","name":"7d3ae01e-a24f-4bf3-8390-d8676fc0a44c"},{"RES_ID":"105b6b22-2853-4f65-b25f-ffee0148a8bc","RES_NAME":"大气环境","RES_TYPE":10,"PARENT":"05505c30-543b-447a-9d61-69f20d15c4a3","IS_MENU":1,"MENU_URL":null,"TARGET":"2","MENU_ICON":null,"PERMISSION_CODE":null,"SORT":10,"FUNC_URL":null,"AUTH_VISIT":1,"IS_SHOW_DROPDOWNMENU":null,"IS_SHOW_FIRSTMENU":null,"EXT1":null,"EXT2":"region,area","EXT3":null,"EXT4":null,"APP_ID":"DCP.LXT","CUSTOM_SETTING":{"showBreadcrumbs":"1","showTitle":"1"},"RES_PATH":[{"MENU_URL":null,"RES_NAME":"大气环境","RES_ID":"105b6b22-2853-4f65-b25f-ffee0148a8bc","MENU_ICON":null}],"CHILDREN":[],"label":"大气环境","name":"105b6b22-2853-4f65-b25f-ffee0148a8bc"},{"RES_ID":"e1504487-39a0-461c-9a38-012ce6d6f62d","RES_NAME":"水环境","RES_TYPE":10,"PARENT":"05505c30-543b-447a-9d61-69f20d15c4a3","IS_MENU":1,"MENU_URL":null,"TARGET":"2","MENU_ICON":null,"PERMISSION_CODE":null,"SORT":20,"FUNC_URL":null,"AUTH_VISIT":1,"IS_SHOW_DROPDOWNMENU":null,"IS_SHOW_FIRSTMENU":null,"EXT1":null,"EXT2":"region,wsystem","EXT3":null,"EXT4":null,"APP_ID":"DCP.LXT","CUSTOM_SETTING":{"showBreadcrumbs":"1","showTitle":"1"},"RES_PATH":[{"MENU_URL":null,"RES_NAME":"水环境","RES_ID":"e1504487-39a0-461c-9a38-012ce6d6f62d","MENU_ICON":null}],"CHILDREN":[],"label":"水环境","name":"e1504487-39a0-461c-9a38-012ce6d6f62d"}],
activeTab:"",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"195px","height":"226px","position":"unset","left":"1632px","top":"113px","borderLeft":"1px solid var(--head-more-border)","borderTop":"1px solid var(--head-more-border)","borderRight":"1px solid var(--head-more-border)","borderBottom":"1px solid var(--head-more-border)","backgroundColor":"var(--head-more-bg)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","z-index":10,"paddingTop":"10px","paddingBottom":"10px","display":"block"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemLabel":{"default":{"fontSize":"22px","fontFamily":"方正综艺","background":"var(--head-menu-font)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","paddingLeft":"10px"},"active":{"background":"var(--head-menu-font-active)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"},"hover":{"backgroundColor":"rgba(255, 209, 6, 0.98)"}},"itemWrapper":{"active":{"backgroundColor":"rgba(185, 214, 0, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit"}}}, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"11px","height":"9px","backgroundImage":"url(assets/images/2024-07-03/d787cc15440c4177a2a3a52532ddd9e4.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","left":"1757px","top":"75px","z-index":10,"pointerEvents":"none","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"11px","height":"9px","backgroundImage":"url(assets/images/2024-07-03/d787cc15440c4177a2a3a52532ddd9e4.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","left":"1757px","top":"75px","z-index":10,"pointerEvents":"none","position":"unset"}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"353px","height":"46px","position":"unset","left":"27px","top":"42px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer","z-index":2,"pointerEvents":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"353px","height":"46px","position":"unset","left":"27px","top":"42px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer","z-index":2,"pointerEvents":"none"}}}, 
 },
},
tTabsx0x10: {
defaultStyle: {
            default: {"width":"1095px","height":"61px","paddingLeft":"0px","animationName":"","left":"728px","top":"53px","position":"unset"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[],
activeTab:"",
tabPositionExtend:"top-start",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"1095px","height":"61px","paddingLeft":"0px","animationName":"","left":"728px","top":"53px","position":"unset"}},"itemWrapper":{"default":{"width":"290px","fontSize":"22px","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","backgroundImage":"var(--head-menu-right-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","paddingLeft":"0px","marginLeft":"0px","marginRight":"-90px"},"hover":{"backgroundImage":"var(--head-menu-hover-right-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","width":"290px"},"active":{"-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100% !important","-webkit-mask-size":"","backgroundPosition":"50% 50%","background":"none","backgroundImage":"var(--head-menu-hover-right-bg)","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","width":"290px"}},"itemLabel":{"default":{"fontSize":"22px","background":"var(--head-menu-font)","color":"","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontFamily":"方正综艺"},"hover":{"background":"var(--head-menu-font-active)","fontFamily":"方正综艺","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"},"active":{"background":"var(--head-menu-font-active)","fontFamily":"方正综艺","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}}, 
 },
},
tComponentx0x11: {
defaultStyle: {
            default: {"width":"200px","height":"129px","margin":"0 auto","position":"unset","left":"1595px","top":"60px","pointerEvents":"none"},
            
            },
 default: { 
 
name:"publicFontSizeSettingComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"200px","height":"129px","margin":"0 auto","position":"unset","left":"1595px","top":"60px","pointerEvents":"none"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/publicFontSizeSetting",
componentName:"publicFontSizeSettingComponent",
pageId:"3fb1d94e891d49eb9511e54fd5400289",
pageCode:"publicFontSizeSetting", 
 },
},
tTabsBasex0x12: {
defaultStyle: {
            default: {"width":"14px","height":"16px","position":"unset","left":"1893px","top":"96px","animationName":"","color":"rgba(23, 62, 228, 0) !important"},
            
            },
 default: { 
 
data:[{"value":"pc-light","label":"AI浅色版2"}],
space:5,
selectedTabVal:"蓝色版",
innerShadowColor:"rgba(0,0,0,0)",
activeInnerShadowColor:"rgba(0,0,0,0)",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"14px","height":"16px","position":"unset","left":"1893px","top":"96px","animationName":"","color":"rgba(23, 62, 228, 0) !important"}},"label":{"default":{"display":"none","width":"100%","height":"auto","color":"rgba(23, 62, 228, 0) !important","fontWeight":"400","fontSize":"9px","lineHeight":"9px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"hover":{"color":"rgba(23, 62, 228, 0) !important"},"active":{"color":"rgba(23, 62, 228, 0)","display":"none"}},"itemWrapper":{"default":{"width":"10px","flex":"unset","height":"10px","padding":"0","margin":"0","borderRadius":"4px","background":"rgba(138, 210, 255, 0.8)","color":"var(--t-tabs-base-text-color)","fontWeight":"var(--t-tabs-base-text-weight)","fontSize":"var(--t-tabs-base-text-fontsize)","lineHeight":"32px","textAlign":"center","cursor":"pointer","fillType":"color","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomRightRadius":"10px","borderBottomLeftRadius":"10px"},"hover":{"margin":"0 !important","background":"var(--t-tabs-base-hover-bg-color)","fillType":"color"},"active":{"margin":"0 !important","background":"rgba(138, 210, 255, 0.8)","fillType":"color"},"disabled":{"color":"var(--t-tabs-vertical-disabled-text-color)","background":"var(--business-unit-icon)","fillType":"color"}},"tabsContainer":{"default":{"display":"flex","height":"100%","justifyContent":"space-between","alignItems":"center","gap":"5px","flexDirection":"row"}}}, 
 },
},
tTabsBasex0x13: {
defaultStyle: {
            default: {"width":"13px","height":"16px","position":"unset","left":"1870px","top":"96px"},
            
            },
 default: { 
 
data:[{"value":"blue","label":"蓝色版"}],
space:5,
selectedTabVal:"蓝色版",
innerShadowColor:"rgba(0,0,0,0)",
activeInnerShadowColor:"rgba(0,0,0,0)",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"13px","height":"16px","position":"unset","left":"1870px","top":"96px"}},"label":{"default":{"display":"block","width":"100%","height":"auto","color":"rgba(23, 62, 228, 0)","fontWeight":"400","fontSize":"var(--t-tabs-base-text-fontsize)","lineHeight":"32px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"hover":{"color":"rgba(23, 62, 228, 0)"},"active":{"color":"rgba(23, 62, 228, 0)"}},"itemWrapper":{"default":{"width":"10px","flex":"unset","height":"10px","padding":"0","margin":"0","borderRadius":"4px","background":"#0052D9","color":"rgba(23, 62, 228, 0)","fontWeight":"var(--t-tabs-base-text-weight)","fontSize":"var(--t-tabs-base-text-fontsize)","lineHeight":"32px","textAlign":"center","cursor":"pointer","fillType":"color","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomRightRadius":"10px","borderBottomLeftRadius":"10px"},"hover":{"margin":"0 !important","background":"var(--t-tabs-base-hover-bg-color)","fillType":"color","color":"rgba(23, 62, 228, 0)"},"active":{"margin":"0 !important","background":"#0052D9","fillType":"color","color":"rgba(23, 62, 228, 0)"},"disabled":{"color":"var(--t-tabs-vertical-disabled-text-color)"}},"tabsContainer":{"default":{"display":"flex","height":"100%","justifyContent":"space-between","alignItems":"center","gap":"5px","flexDirection":"row"}}}, 
 },
},
});
const getMenu = () => {

const userId = localStorage.getItem('lastUserId');
// 拼接菜单接口地址
state.menuPath = `/ou/ouapi/api/res/${userId}/${global.appId}/auth/map`;
state.topMenuCodeFromUrl = getUrlParamValue('topMenuCode');
state.leftMenuCodeFromUrl = getUrlParamValue('leftMenuCode');

// 获取菜单数据
apiRegistry.getMenuData.request();

};
const clickMore = () => {
// 设置显示更多内容的状态
state.showMoreMain = !state.showMoreMain;
// 设置更多的状态
setMoreState();
};
const setMoreState = () => {

if (!state.showMoreMain) {
  // 判断更多的内容有没有选中
  const active = state.menuMoreList.find((item) => item.name === global.navMenuItemActive?.name);
  if (active) {
    state.activeMore = 'more';
  } else {
    state.activeMore = '1';
  }
}

try {
  // 设置更多箭头的方向
  if (state.showMoreMain) {
    document.getElementById('t-rect-e1d0.6a4a4f741').style.transform = "rotate(180deg)";
  } else {
    document.getElementById('t-rect-e1d0.6a4a4f741').style.transform = "rotate(0deg)";
  }
} catch (err) {

}
};
const sendLoadMenuMsg = (init) => {
console.log(global.navMenuItemActive, 666)
if (global.navMenuItemActive && global.navMenuItemActive.label !== '首页') {
  /* 发送socket消息 */
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "loadMenuData", // 消息名称
    data: {
      init,
      "menuId": global.navMenuItemActive.name,
      "ext1": global.navMenuItemActive.EXT1
    }, // 发送的数据
  });

  /* 若页面标题可点击 */
} else if (global.navMenuItemActive.label === '首页') {
  /* 发送socket消息 */
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "loadMenuData", // 消息名称
    data: {
      init,
      "menuId": state.homeMenuData.name,
      "ext1": state.homeMenuData.EXT1
    }, // 发送的数据
  });
}
};
const setRegionaQueryTabs = (item) => {
// 判断区域选择-tabs标签是否显示
console.log(item, '田雪测试-切换菜单项')
// 是否展示行政区划
const isShowRegion = item?.EXT2?.indexOf('region') ?? true;
// 是否展示重点区域
const isShowArea = item?.EXT2?.includes('area') ?? false;
// 是否展示重点流域
const isShowWsystem  = item?.RES_NAME === '水环境' ? true : false; // 重点流域
// 是否是自定义区域
const isCustomArea = item?.EXT2?.includes('custom') ?? false;


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

// rootData.rootEmit(
//   'rootData:change',
//   {
//     key: 'regionaQuery.isShowXZQH',
//     value: item.EXT2.indexOf('region') !== -1,
//   },
// );
// // 重点区域
// rootData.rootEmit(
//   'rootData:change',
//   {
//     key: 'regionaQuery.isShowZDQY',
//     value: item.EXT2.indexOf('area') !== -1,
//   },
// );
// // 重点流域
// rootData.rootEmit(
//   'rootData:change',
//   {
//     key: 'regionaQuery.isShowZDLY',
//     value: item.EXT2.indexOf('wsystem') !== -1,
//   },
// );
// // 自定义区域
// rootData.rootEmit(
//   'rootData:change',
//   {
//     key: 'regionaQuery.isShowZDYQY',
//     value: item.EXT2.indexOf('custom') !== -1,
//   },
// );
};
const setActiveMenu = (data) => {
console.log(data, 4456);
if (data.MENU_URL) {
  // 打开新窗口
  window.open(data.MENU_URL, '_blank');

  // 设置全局变量值
  rootData.rootEmit(
    'rootData:change',
    {
      key: 'navMenuItemActive',
      value: data.item,
      data: {
        navMenuItemActive: data.item
      },
    });
  // 设置全局变量值
  rootData.rootEmit(
    'rootData:change',
    {
      key: 'navMenuItemActive',
      value: state.lastActiveMenu,
      data: {
        navMenuItemActive: state.lastActiveMenu
      },
    });
} else {
  // 设置全局变量值
  rootData.rootEmit(
    'rootData:change',
    {
      key: 'navMenuItemActive',
      value: data?.item || data,
      data: {
        navMenuItemActive: data?.item || data
      },
    });
  state.lastActiveMenu = data.item || data;
  // // 设置全局变量值
  // rootData.rootEmit(
  //   'rootData:change',
  //   {
  //     key: 'navMenuItemActive.label',
  //     value: data.label,
  //     data: {
  //       navMenuItemActive: { label: data.label }
  //     },
  //   });
  // 设置变量值
  state.showMoreMain = false;
  // 执行自定义方法
  setMoreState();
  // 执行自定义方法
  sendLoadMenuMsg(true);
  // 执行自定义方法
  setRegionaQueryTabs(data?.item || data);
  /* 发送socket消息 */
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "closePopup", // 消息名称
    data: "", // 发送的数据
  });
  localStorage.setItem('activeMenu', JSON.stringify(data.item))
}
};
const setNavStyle = () => {
/**
 * 调整顶部导航栏的样式
 */

// 菜单-选项卡组件的DOM
const tabComponentDom = document.getElementById('t-tabs-6219.8705aeb2c');
if (tabComponentDom) {
  // 菜单-选项卡组件的DOM下的标签栏元素，组件的样式中没有配置项，只能用JS的方法动态设置
  const tabWrapDom = tabComponentDom.querySelector('.el-tabs__nav');
  tabWrapDom.style['margin-left'] = '90px';
}

const componentDom = document.querySelector('#t-l-c-header')
const styles = document.createElement('style')
styles.innerHTML = `
/* 隐藏选项卡下划线 */
#t-l-c-header .t-tabs .el-tabs__item.is-active.is-top:after{
  display:none;
}
`
componentDom.append(styles)
};
const handleDefaultMenu = () => {
function getQueryString(name) {
  const result = {};
  const params = window.location.href.split('?')[1]?.split('&');
  params?.forEach((item) => {
    const [key, value] = item.split('=');
    result[key] = value;
  });
  return result[name] || null;
}
const code = getQueryString('pageCode')
if (code) {
  let data = {}
  if (code === 'water') {
    data.RES_ID = '129f3b76-cae3-432f-8692-7024c353739c'
    data.RES_NAME = '水环境'
  } else if (code === 'air') {
    data.RES_ID = 'af3fb6e4-16c1-4bcc-97e1-8de1c4ab51b2'
    data.RES_NAME = '大气环境'
  }
  // setActiveMenu(data);
  global.navMenuItemActive.name = data.RES_ID
  // global.navMenuItemActive.label = data.RES_NAME
}

};
const openUrl = () => {
window.open(state.linkUrl, '_self');
};
const switchTheme = (themeName,themeCode) => {
const body = document.getElementsByTagName('body')[0];
body.setAttribute('class', themeName || 'theme1');
global.activeTheme = themeName || 'theme1';

rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'setTheme',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      skinCode: themeCode,
      skinName: themeName
    }
  }
);
};
const ontabClick1719902594913 = (data) => {
// 执行自定义方法
setActiveMenu(data);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeTimeAxisData", // 消息名称
data: {"sourceType":"resetData","timeType":"","timeValue":"","timeRangeData":""}, // 发送的数据
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
// 执行自定义方法
setActiveMenu(data);
};
const onclick1727349910830 = () => {
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
setRegionaQueryTabs(state.homeMenuData);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closePopup", // 消息名称
data: "", // 发送的数据
});
// 执行自定义方法
sendLoadMenuMsg(true);
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
const onclick1768285001142 = () => {
// 执行自定义方法
openUrl();
};
const ontabClick1776647253799 = (data) => {
// 执行自定义方法
switchTheme(data.label,data.value);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeTheme", // 消息名称
data: {"themeName":data.label}, // 发送的数据
});
};
const ontabClick1776670542927_0_0 = (data) => {
// 执行自定义方法
switchTheme(data.label,data.value);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeTheme", // 消息名称
data: {"themeName":data.label}, // 发送的数据
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
state.menuList = [];
state.menuMoreList = [];
state.homeMenuData = { label: '', name: '' };
console.log(67890)

if (res.status === 200 && res.data && res.data.headerMenuList) {
  let { headerMenuList, asideMenusMap, appMap } = res.data;
  // headerMenuList = [...headerMenuList, ...headerMenuList].splice(0, 12)
  // 首页的菜单数据索引值
  const index = headerMenuList.findIndex((item) => item.RES_NAME === '首页');
  // 是否定义了首页
  const hasHome = index > -1;
  if (hasHome) {
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
    if (headerMenuList.length === global.maxNavItemCount) {
      // 组织组件需要用到的数据
      headerMenuList.forEach((item) => {
        state.menuList.push({
          ...item,
          label: item.RES_NAME,
          name: item.RES_ID,
        })
      });
    } else {
      // 组织组件需要用到的数据
      headerMenuList.forEach((item, index) => {
        if (index < global.maxNavItemCount - 1) {
          state.menuList.push({
            ...item,
            label: item.RES_NAME,
            name: item.RES_ID,
          })
        } else {
          state.menuMoreList.push({
            ...item,
            label: item.RES_NAME,
            name: item.RES_ID,
          })
        }
      });
    }


    // 获取url参数 是否含有type  type-air (显示大气)，water（显示水环境） 
    const showType = getUrlParamValue('type');
    // 高亮的菜单项
    let activeMenuItem = state.menuList[0];
    if (activeMenuItem?.label === '综合查询') {
      if (showType && showType === 'air') {
        activeMenuItem = state.menuList[1];
      } else if (showType && showType === 'water') {
        activeMenuItem = state.menuList[2];
      } else if (showType && showType === 'supervision') {
        activeMenuItem = state.menuList[3];
      } else {
        // 如果type为其他值或者不存在type，默认显示大气环境
        activeMenuItem = state.menuList[1];
      }
    }

    // function getQueryString(name) {
    //   // 更健壮的正则表达式
    //   const regex = new RegExp(`[?&]${name}(?:=([^&#]*))?(?:&|$|#)`, 'i');
    //   const match = window.location.search.match(regex);

    //   if (match) {
    //     // match[1] 可能是 undefined（如果没有=值）
    //     const value = match[1] || '';
    //     return decodeURIComponent(value.replace(/\+/g, ' '));
    //   }

    //   return null;
    // }

    function getQueryString(name) {
      // 更健壮的正则表达式
      const regex = new RegExp(`[?&]${name}(?:=([^&#]*))?(?:&|$|#)`, 'i');
      const match = window.location.search.match(regex);

      if (match) {
        // match[1] 可能是 undefined（如果没有=值）
        const value = match[1] || '';
        return decodeURIComponent(value.replace(/\+/g, ' '));
      }

      return null;
    }

    /**
     * 判断地址栏中是否存在pageCode参数 如果存在则跳转对应的页面
     */
    const pageCode = getQueryString('pageCode');
    const pageCodeMap = {
      air: "大气环境",
      water: "水环境",
      petition: "督察信访"
    }

    if (pageCode) {
      const activeMenu = state.menuList.find((m) => m.RES_NAME === pageCodeMap[pageCode])
      if (activeMenu) {
        activeMenuItem = activeMenu
      }
    }

    /* 若指定了首页的菜单数据 */
    if (hasHome) {
      // 高亮的菜单项为首页的菜单数据
      activeMenuItem = state.homeMenuData;
      // 更新菜单选中项（编码）
      global.navMenuItemActive = state.homeMenuData;
    } else {
      // 更新菜单选中项（编码）
      global.navMenuItemActive = activeMenuItem;
    }

    // 判断区域选择-tabs标签是否显示
    const obj = activeMenuItem.EXT2;
    global.regionaQuery.isShowXZQH = obj?.includes('region') ?? true; // 行政区划
    global.regionaQuery.isShowZDQY = obj?.includes('area') ?? false; // 重点区域
    global.regionaQuery.isShowZDLY = activeMenuItem?.RES_NAME === '水环境' ? true : false; // 重点流域
    global.regionaQuery.isShowZDYQY = obj?.includes('custom') ?? false; // 自定义区域

  } else {
    // 选中项
    global.navMenuItemActive = appMap;
  }

  console.log(global.navMenuItemActive, 'global.navMenuItemActive ------', state.homeMenuData)
  // 所有的边栏数据（即专题数据）和顶部菜单项的映射关系 若用户配置了首页菜单，则将首页作为专题菜单中的一个专题
  const allAsideMenusMap = state.homeMenuData.label ? { ...asideMenusMap, [state.homeMenuData.name]: [{ ...state.homeMenuData, CHILDREN: [state.homeMenuData] }] } : asideMenusMap;

  console.log(headerMenuList, state.menuMoreList, 7888)

  // 左侧的菜单数据存到缓存里
  console.log('lxtAsideMenusMap', allAsideMenusMap)
  localStorage.setItem('lxtAsideMenusMap', JSON.stringify(allAsideMenusMap));
  localStorage.setItem('activeMenu', JSON.stringify(global.navMenuItemActive))
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
                            setPageScale('t-l-c-header', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getMenu();
/* 接收socket.io消息 */
const onSocketChangeb1b9663082004ca9abb0 = function (data) {
if(data.type === "leftMenuMounted"){
try{
// 执行自定义方法
sendLoadMenuMsg();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangeb1b9663082004ca9abb0);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangeb1b9663082004ca9abb0);
});
onMounted(() => {
setPageScale('t-l-c-header', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setNavStyle();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tButtonFullScreenx0x1ComputedData = computed(() => _.merge({}, componentState.tButtonFullScreenx0x1.default, componentState.tButtonFullScreenx0x1?.[state.screenSize]));

 const tTabsx0x2ComputedData = computed(() => _.merge({}, componentState.tTabsx0x2.default, componentState.tTabsx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tGradientShadowTextx0x4ComputedData = computed(() => _.merge({}, componentState.tGradientShadowTextx0x4.default, componentState.tGradientShadowTextx0x4?.[state.screenSize]));

 const tGradientShadowTextx0x5ComputedData = computed(() => _.merge({}, componentState.tGradientShadowTextx0x5.default, componentState.tGradientShadowTextx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tTabsx0x7ComputedData = computed(() => _.merge({}, componentState.tTabsx0x7.default, componentState.tTabsx0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tTabsx0x10ComputedData = computed(() => _.merge({}, componentState.tTabsx0x10.default, componentState.tTabsx0x10?.[state.screenSize]));

 const tComponentx0x11ComputedData = computed(() => _.merge({}, componentState.tComponentx0x11.default, componentState.tComponentx0x11?.[state.screenSize]));

 const tTabsBasex0x12ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x12.default, componentState.tTabsBasex0x12?.[state.screenSize]));

 const tTabsBasex0x13ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x13.default, componentState.tTabsBasex0x13?.[state.screenSize]));

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
tButtonFullScreenx0x1ComputedData,
tTabsx0x2ComputedData,
tRectx0x3ComputedData,
tGradientShadowTextx0x4ComputedData,
tGradientShadowTextx0x5ComputedData,
tRectx0x6ComputedData,
tTabsx0x7ComputedData,
tRectx0x8ComputedData,
tRectx0x9ComputedData,
tTabsx0x10ComputedData,
tComponentx0x11ComputedData,
tTabsBasex0x12ComputedData,
tTabsBasex0x13ComputedData,
ontabClick1719989836914,
onclick1719830606016,
onclick1768285001142,
onclick1721111555951_0_0,
ontabClick1719989940150,
onclick1727349910830,
ontabClick1719902594913,
ontabClick1776670542927_0_0,
ontabClick1776647253799,
};
},
}
</script>

<style scoped>
.t-l-c-header {
position: relative;
overflow: hidden;
--theme-color: var(--t-brand8);
--theme-color-opacity-10: rgba(var(--t-brand8), .1);
--theme-color-opacity-15: rgba(var(--t-brand8), .15);
--theme-color-opacity-40: rgba(var(--t-brand8), .4);
--theme-color-opacity-60: rgba(var(--t-brand8), .6);
--theme-color-opacity-80: rgba(var(--t-brand8), .8);
--theme-color-opacity-90: rgba(var(--t-brand8), .9);
pointer-events: none;
position: Static;
z-index: 1;
filter: ;
height: 127px;
width: 1920px;
background-color: rgba(0,0,0,0);
}
.t-l-c-header .header-t-rect-0-0 {
position: absolute !important;
top: 20px;
left: -8px;
width: 1956px;
height: 144px;
pointer-events: none;
}

.t-l-c-header .header-t-button-full-screen-0-1 {
position: absolute !important;
top: 57px;
left: 1868px;
width: 34px;
height: 34px;
pointer-events: auto;
}

.t-l-c-header .header-t-tabs-0-2 {
position: absolute !important;
top: 51px;
left: 1572px;
width: 310px;
height: 57px;
pointer-events: auto;
}

.t-l-c-header .header-t-rect-0-3 {
position: absolute !important;
top: 57px;
left: 1816px;
width: 34px;
height: 34px;
pointer-events: auto;
}

.t-l-c-header .header-t-gradient-shadow-text-0-4 {
position: absolute !important;
top: 37px;
left: 23px;
width: 659px;
height: 47px;
pointer-events: auto;
}

.t-l-c-header .header-t-gradient-shadow-text-0-5 {
position: absolute !important;
top: 39px;
left: 611px;
width: 189px;
height: 45px;
pointer-events: auto;
}

.t-l-c-header .header-t-rect-0-6 {
position: absolute !important;
top: 57px;
left: 1816px;
width: 34px;
height: 34px;
pointer-events: auto;
}

.t-l-c-header .header-t-tabs-0-7 {
position: absolute !important;
top: 113px;
left: 1632px;
width: 195px;
height: 226px;
pointer-events: auto;
}

.t-l-c-header .header-t-rect-0-8 {
position: absolute !important;
top: 75px;
left: 1757px;
width: 11px;
height: 9px;
pointer-events: none;
}

.t-l-c-header .header-t-rect-0-9 {
position: absolute !important;
top: 42px;
left: 27px;
width: 353px;
height: 46px;
pointer-events: none;
}

.t-l-c-header .header-t-tabs-0-10 {
position: absolute !important;
top: 53px;
left: 728px;
width: 1095px;
height: 61px;
pointer-events: auto;
}

.t-l-c-header .header-t-component-0-11 {
position: absolute !important;
top: 60px;
left: 1595px;
width: 200px;
height: 129px;
pointer-events: none;
}

.t-l-c-header .header-t-tabs-base-0-12 {
position: absolute !important;
top: 96px;
left: 1893px;
width: 14px;
height: 16px;
pointer-events: auto;
}

.t-l-c-header .header-t-tabs-base-0-13 {
position: absolute !important;
top: 96px;
left: 1870px;
width: 13px;
height: 16px;
pointer-events: auto;
}
</style>
