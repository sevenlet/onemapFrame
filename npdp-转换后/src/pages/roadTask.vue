<template>
  <div id="t-l-c-roadTask" class="t-l-c-roadTask" ><t-component id="t-component-897a.84af8c526" class="roadTask-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName"></t-component><t-text id="t-text-a8e3.9ed495eb2" class="roadTask-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-iframe id="t-iframe-e290.8bd114efc" class="roadTask-t-iframe-0-2"  :src="tIframex0x2ComputedData.src" :srcdoc="tIframex0x2ComputedData.srcdoc" :scrolling="tIframex0x2ComputedData.scrolling" :c-style="tIframex0x2ComputedData.cStyle"></t-iframe><t-rect id="t-rect-b7ed.941e23d2e" class="roadTask-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1758016983366"></t-rect><t-search id="t-search-8b28.83c8f2df2" class="roadTask-t-search-0-4"  :type="tSearchx0x4ComputedData.type" :input-value="replaceCssVariables(filterData(state.UAV_TASK_NAME, componentPropBindingMap?.['t-search-8b28.83c8f2df2']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x4ComputedData.maxlength" :minlength="tSearchx0x4ComputedData.minlength" :show-word-limit="tSearchx0x4ComputedData.showWordLimit" :placeholder="tSearchx0x4ComputedData.placeholder" :clearable="tSearchx0x4ComputedData.clearable" :show-password="tSearchx0x4ComputedData.showPassword" :disabled="tSearchx0x4ComputedData.disabled" :prefix-icon="tSearchx0x4ComputedData.prefix-icon" :suffix-icon="tSearchx0x4ComputedData.suffix-icon" :rows="tSearchx0x4ComputedData.rows" :autosize="tSearchx0x4ComputedData.autosize" :name="tSearchx0x4ComputedData.name" :readonly="tSearchx0x4ComputedData.readonly" :step="tSearchx0x4ComputedData.step" :autofocus="tSearchx0x4ComputedData.autofocus" :form="tSearchx0x4ComputedData.form" :label="tSearchx0x4ComputedData.label" :tabindex="tSearchx0x4ComputedData.tabindex" :validate-event="tSearchx0x4ComputedData.validateEvent" :c-style="tSearchx0x4ComputedData.cStyle" :has-search-btn="tSearchx0x4ComputedData.hasSearchBtn" @input="oninput1758017409133"></t-search><t-date-picker id="t-date-picker-d14b.a5b56825b" class="roadTask-t-date-picker-0-5"  :placeholder="tDatePickerx0x5ComputedData.placeholder" :start-placeholder="tDatePickerx0x5ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x5ComputedData.endPlaceholder" :type="tDatePickerx0x5ComputedData.type" :clearable="tDatePickerx0x5ComputedData.clearable" :range-separator="tDatePickerx0x5ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeData, componentPropBindingMap?.['t-date-picker-d14b.a5b56825b']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x5ComputedData.separator" :readonly="tDatePickerx0x5ComputedData.readonly" :editable="tDatePickerx0x5ComputedData.editable" :c-style="tDatePickerx0x5ComputedData.cStyle" :disabled-date="tDatePickerx0x5ComputedData.disabledDate" :is-disabled-front="tDatePickerx0x5ComputedData.isDisabledFront" @date-change="ondateChange1758013923841"></t-date-picker><t-checkbox id="t-checkbox-dd35.29b19fca" class="roadTask-t-checkbox-0-6"  :data="tCheckboxx0x6ComputedData.data" :active="replaceCssVariables(filterData(state.selectData, componentPropBindingMap?.['t-checkbox-dd35.29b19fca']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x6ComputedData.dataAlias" :border="tCheckboxx0x6ComputedData.border" :use-button="tCheckboxx0x6ComputedData.useButton" :c-style="tCheckboxx0x6ComputedData.cStyle" @change="onchange1758189520078"></t-checkbox><t-pagination-base v-if="state.pageInfo.pages !== '0'" id="t-pagination-base-7202.481b5006d" class="roadTask-t-pagination-base-0-7"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-7202.481b5006d']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x7ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-7202.481b5006d']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="replaceCssVariables(filterData(state.pageInfo.pages, componentPropBindingMap?.['t-pagination-base-7202.481b5006d']['pagerCount'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-7202.481b5006d']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x7ComputedData.layout" :page-sizes="tPaginationBasex0x7ComputedData.pageSizes" :disabled="tPaginationBasex0x7ComputedData.disabled" :c-style="tPaginationBasex0x7ComputedData.cStyle" @current-change="oncurrentChange1758181820293_0_0"></t-pagination-base></div>
</template>

<script>
import io from 'socket.io-client';
import mitt from 'mitt';
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
import { TCheckbox, TComponent, TDatePicker, TIframe, TPaginationBase, TRect, TSearch, TText } from '@ths/design';

export default {
  components: {
    TCheckbox,
    TComponent,
    TDatePicker,
    TIframe,
    TPaginationBase,
    TRect,
    TSearch,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-897a.84af8c526":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-a8e3.9ed495eb2":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-iframe-e290.8bd114efc":{"attributeName":"tIframex0x2","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-b7ed.941e23d2e":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-search-8b28.83c8f2df2":{"attributeName":"tSearchx0x4","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-date-picker-d14b.a5b56825b":{"attributeName":"tDatePickerx0x5","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"disabledDate":{"filters":[]},"isDisabledFront":{"filters":[]}},"t-checkbox-dd35.29b19fca":{"attributeName":"tCheckboxx0x6","data":{"filters":[]},"active":{"filters":[]},"dataAlias":{"filters":[]},"border":{"filters":[]},"useButton":{"filters":[]},"cStyle":{"filters":[]}},"t-pagination-base-7202.481b5006d":{"attributeName":"tPaginationBasex0x7","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}}};
// 页面内注入全局变量和事件
const rootData = inject('root');
let global = reactive({
...toRefs(rootData)
});
// 路由
const route = useRoute();
// 创建 DOM 引用

// 当前页面使用的变量
const state = reactive({
   screenSize: "",
   removeData: [],
   checkShow: false,
   heightShow: false,
   checkData: [],
   heightData: [],
   selectIds: [],
   show: true,
   pointData: [],
   selectId: "",
   selectData: [],
   timeData: [],
   END_TIME: "",
   START_TIME: "",
   UAV_TASK_NAME: "",
   listData: [],
   pageInfo: {"pageNum":1,"pageSize":20,"total":0,"pages":0},
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"20px","top":"20px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"20px","top":"20px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"200px","height":"20px","color":"var(--t-white)","fontFamily":"方正综艺","fontSize":"17px","position":"unset","left":"54px","top":"26px","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
label:"走航任务列表",
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"20px","color":"var(--t-white)","fontFamily":"方正综艺","fontSize":"17px","position":"unset","left":"54px","top":"26px","lineHeight":"20px","animationName":""},"hover":{"fontSize":"17px"},"focus":{"fontSize":"17px"}}}, 
 },
},
tIframex0x2: {
defaultStyle: {
            default: {"width":"410px","height":"672px","position":"unset","left":"21px","top":"176px"},
            
            },
 default: { 
 
src:"",
srcdoc:"<!--\n * @Author: lvzhixin\n * @Date: 2024-05-30 13:33:18\n * @LastEditTime: 2025-09-24 19:33:22\n * @LastEditors: guoyx\n * @Description: File Info\n-->\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>污染过程分析</title>\n    <link rel=\"shortcut icon\" href=\"assets/images/favicon.ico\" />\n    <!-- vue 这里最终应该下载一个稳定版本 -->\n    <script src=\"./resources/vue.min.js\"><\/script>\n\n    <!-- socket插件 -->\n    <script src=\"./resources/socket.io.js\"><\/script>\n    <!-- lodash插件 -->\n    <script src=\"./resources/lodash.min.js\"><\/script>\n\n    <!-- 引入样式 -->\n    <link\n      rel=\"stylesheet\"\n      href=\"./resources/element-plus/element-plus.min.css\"\n    />\n    <!-- 引入组件库 -->\n    <script src=\"./resources/element-plus/element-plus.min.js\"><\/script>\n    <script src=\"./resources/element-plus/zhCn.js\"><\/script>\n    <!-- 通信插件mitt https://www.npmjs.com/package/mitt -->\n    <script src=\"./resources/mitt.min.js\"><\/script>\n\n    <!-- HTTP库 -->\n    <script src=\"./resources/axios.min.js\"><\/script>\n\n    <!-- 主题样式 -->\n    <link rel=\"stylesheet\" href=\"./assets/style/themes.css\" />\n\n    <style>\n      body {\n        width: 410px;\n        margin: 0;\n      }\n\n      .classsify-container {\n        width: 410px;\n      }\n\n      .title {\n        display: flex;\n        align-items: center;\n        width: 410px;\n        height: 31px;\n        font-family: 方正综艺;\n        transform: translate(-5px, 0);\n      }\n\n      .title-bg {\n        position: relative;\n        width: 379px;\n        height: 31px;\n        background: var(--business-title-second-bg);\n        padding-left: 15px;\n        color: #fff;\n        font-family: 方正综艺;\n        font-size: 17px;\n        font-weight: 700;\n        line-height: 20px;\n        box-sizing: border-box;\n      }\n\n      .arrow {\n        width: 24px;\n        height: 37px;\n        margin-right: 8px;\n        animation-name: custom457e0c4d7ae9a, custom22a312988078d;\n        animation-duration: 1.5s, 1.3s;\n        animation-timing-function: ease-in, ease-in-out;\n        animation-delay: 0s, 0s;\n        animation-iteration-count: infinite, infinite;\n        animation-direction: alternate, alternate-reverse;\n      }\n\n      .title-bg-rect {\n        width: 29px;\n        height: 36px;\n        -webkit-mask-image: url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg);\n        -webkit-mask-repeat: no-repeat;\n        -webkit-mask-size: contain;\n        -webkit-mask-position: 50% 50%;\n        transform: perspective(0px) translate3d(0px, undefinedpx, undefinedpx)\n          rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(0%) scaleY(0%)\n          skewX(0deg) skewY(0deg);\n        animation-duration: 4s;\n        animation-timing-function: linear;\n        animation-iteration-count: infinite;\n        animation-direction: normal;\n        background-color: var(--business-theme);\n      }\n\n      .title-bg-rect-1 {\n        position: absolute;\n        right: 152px;\n        top: 2px;\n        animation-delay: 0s;\n        animation-name: custom4f535b3e2b5f4;\n      }\n\n      .title-bg-rect-2 {\n        position: absolute;\n        right: 130px;\n        top: 2px;\n        animation-delay: 0.5s;\n        animation-name: custom4c3c1b39109cc;\n      }\n\n      .title-bg-rect-3 {\n        position: absolute;\n        right: 108px;\n        top: 2px;\n        animation-delay: 1s;\n        animation-name: custom69c9662b286de;\n      }\n\n      .title-bg-rect-4 {\n        position: absolute;\n        right: 86px;\n        top: 2px;\n        animation-delay: 1.5s;\n        animation-name: customac792bbf9af19;\n      }\n\n      .title-bg-rect-5 {\n        position: absolute;\n        right: 64px;\n        top: 2px;\n        animation-delay: 2s;\n        animation-name: customcdd3f7e7beaa6;\n      }\n\n      .title-bg-rect-6 {\n        position: absolute;\n        right: 42px;\n        top: 2px;\n        animation-delay: 2.5s;\n        animation-name: customfa732ecba515e;\n      }\n\n      .title-bg-rect-7 {\n        position: absolute;\n        right: 20px;\n        top: 2px;\n        animation-delay: 3s;\n        animation-name: custombc1e59c456704;\n      }\n\n      .title-bg-rect-8 {\n        position: absolute;\n        right: -2px;\n        top: 2px;\n        animation-delay: 3.5s;\n        animation-name: custome263d94835a89;\n      }\n\n      .title-bg-rect img {\n        width: 29px;\n        height: 36px;\n      }\n\n      .content {\n        display: flex;\n        justify-content: space-between;\n        gap: 8px;\n        flex-wrap: wrap;\n        width: 410px;\n      }\n\n      .menu-item {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        width: 49%;\n        height: 60px;\n        padding: 8px;\n        border-radius: 2px;\n        background-color: var(--business-show-bg30);\n        border: 1px solid transparent;\n        font-size: 14px;\n        color: #fff;\n        cursor: pointer;\n        box-sizing: border-box;\n      }\n\n      .menu-text {\n        display: -webkit-box;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 2;\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n\n      .menu-item img {\n        width: 30px;\n        height: 30px;\n        flex-shrink: 0;\n      }\n\n      .menu-item:hover {\n        /* 蓝色主题/内容TAB选中背景 */\n        background: var(--business-tab-content-active-bg);\n        box-sizing: border-box;\n        /* 蓝色主题/单位\\图标 */\n        border: 1px solid var(--business-unit-icon);\n        cursor: pointer;\n      }\n\n      .active {\n        /* 蓝色主题/内容TAB选中背景 */\n        background: var(--business-tab-content-active-bg);\n        /* 蓝色主题/单位\\图标 var(--business-unit-icon)*/\n        border: 1px solid var(--business-unit-icon);\n      }\n\n      .el-scrollbar__view {\n        height: 100%;\n      }\n\n      @keyframes custom4f535b3e2b5f4 {\n        0% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n        50% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 10%;\n        }\n        100% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n      }\n      @keyframes custom4c3c1b39109cc {\n        0% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n        50% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 10%;\n        }\n        100% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n      }\n      @keyframes custom69c9662b286de {\n        0% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n        50% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 10%;\n        }\n        100% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n      }\n      @keyframes customac792bbf9af19 {\n        0% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n        50% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 10%;\n        }\n        100% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n      }\n      @keyframes customcdd3f7e7beaa6 {\n        0% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n        50% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 10%;\n        }\n        100% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n      }\n      @keyframes customfa732ecba515e {\n        0% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n        50% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 10%;\n        }\n        100% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n      }\n      @keyframes custombc1e59c456704 {\n        0% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n        50% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 10%;\n        }\n        100% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n      }\n      @keyframes custome263d94835a89 {\n        0% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n        50% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 10%;\n        }\n        100% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n      }\n      @keyframes custom457e0c4d7ae9a {\n        0% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n        100% {\n          transform: perspective(900px) translateX(10px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n      }\n      @keyframes custom22a312988078d {\n        0% {\n          transform: perspective(900px) translateX(0px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n        100% {\n          transform: perspective(900px) translateX(6px) translateY(0px)\n            translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n            scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\n          opacity: 100%;\n        }\n      }\n\n      .layer {\n        width: 410px;\n        height: 860px;\n      }\n\n      .layer .el-scrollbar {\n        width: 410px;\n        --el-scrollbar-opacity: 1;\n        --el-scrollbar-background-color: var(--left-menu-scrollbar-bg);\n        --el-scrollbar-hover-opacity: 1;\n        --el-scrollbar-hover-background-color: var(--left-menu-scrollbar-bg);\n      }\n      .tab-box .el-table--small .el-table__cell {\n        padding: 0 0;\n      }\n\n      .tab-box .el-table .el-table__header th {\n        border-bottom: 1px solid rgba(26, 27, 31, 0);\n        border-left: 0px solid;\n        border-right: 0px solid;\n        border-top: 0px solid;\n        color: var(--t-white);\n        background-color: var(--business-table-header-bg);\n        font-size: 14px;\n        font-weight: 400;\n        margin-right: 0px;\n\n      }\n      .tab-box .el-table tr {\n        background-color: var(--business-table-even-row-bg);\n        color: #fff;\n      }\n      .tab-box .el-table__empty-block {\n        min-height: 680px;\n        background-color: var(--business-table-even-row-bg);\n      }\n      .tab-box\n        .el-table--enable-row-hover\n        .el-table__body\n        tr:hover\n        > td.el-table__cell {\n        background-color: var(--business-table-header-bg);\n        border: 1px solid var(--business-table-even-row-bg);\n      }\n      .el-table--enable-row-transition .el-table__body td.el-table__cell {\n        border: 1px solid var(--business-table-even-row-bg);\n      }\n      /* .el-table td.el-table__cell,\n      .el-table th.el-table__cell.is-leaf {\n        border-bottom: var(--business-table-even-row-bg);\n      } */\n      /* .tab-box .el-table--striped .el-table__body tr.el-table__row--striped {\n        background-color: rgba(24, 37, 64, 0);\n        border: 1px solid rgba(27, 75, 157, 0) !important;\n      }\n      .tab-box .el-table tr {\n        background-color: var(--business-table-even-row-bg);\n        color: #fff;\n        border: 1px solid rgba(27, 75, 157, 0) !important;\n      }\n      .tab-box\n        .el-table--enable-row-hover\n        .el-table__body\n        tr:hover\n        > td.el-table__cell {\n        background-color: var(--business-table-odd-row-bg);\n        border: 1px solid rgba(27, 75, 157, 0) !important;\n      }\n      .tab-box .el-table--striped .el-table__body tr.el-table__row--striped td {\n        background-color: var(--business-table-even-row-bg);\n        margin-top: 2px;\n        margin-bottom: 2px;\n        border-left: 0px solid rgba(23, 62, 228, 0);\n        border-top: 0px solid rgba(23, 62, 228, 0);\n        border-right: 0px solid rgba(23, 62, 228, 0);\n        border-bottom: 2px solid rgba(23, 62, 228, 0);\n        border: 1px solid rgba(27, 75, 157, 0) !important;\n      }\n      .tab-box .el-table__empty-block {\n        background-color: #123385;\n        border: 1px solid rgba(27, 75, 157, 0) !important;\n      }\n      .tab-box .el-table th.el-table__cell.is-leaf {\n        border-bottom: transparent;\n        border: 1px solid rgba(27, 75, 157, 0) !important;\n      }\n      .tab-box .el-table td.el-table__cell {\n        border-bottom: transparent;\n        border: 1px solid #1D3A88 !important;\n      } */\n      /* 表头禁用多选框：置灰 + 鼠标禁用 */\n      .tab-box .has-gutter .el-checkbox__inner {\n        display: none !important;\n      }\n    </style>\n  </head>\n\n  <body class=\"蓝色版\">\n    <div id=\"app\"></div>\n\n    <script>\n      /**\n       * 这里定义全局使用的变量、方法\n       */\n      const {\n        createApp,\n        computed,\n        ref,\n        reactive,\n        toRefs,\n        onBeforeMount,\n        onMounted,\n        onBeforeUpdate,\n        onUpdated,\n        onBeforeUnmount,\n        onUnmounted,\n        onErrorCaptured,\n        onRenderTracked,\n        onRenderTriggered,\n        watch,\n        provide,\n        inject,\n        nextTick,\n      } = Vue;\n\n      const serviceBaseUrl =\n        'http://27.36.118.5:8888/service/serviceinterface/search/run.action';\n\n      // 房间号\n      const roomId = localStorage.getItem('lxtSocketRoom');\n\n      // 主题\n      const themeName = localStorage.getItem('lxtTheme');\n\n      const bodyDom = document.querySelector('body');\n      if (bodyDom && themeName) {\n        bodyDom.classList.add(themeName);\n      }\n\n      /**\n       * 这里入口组件内容\n       */\n      const MainComponent = {\n        template:\n          // 默认页面 ———— 一直显示 页面中的组件根据显示条件显示\n          `\n         <div class=\"layer\">\n          <el-scrollbar max-height=\"100%\">\n           <div class=\"classsify-container\">\n            <div class=\"classsify-item\">\n              <div class=\"content tab-box\">\n                <el-table\n                  ref=\"multipleTableRef\"\n                  :data=\"state.tableData\"\n                  row-key=\"id\"\n                  style=\"width: 100%\"\n                  empty-text=\"暂无数据\"\n                  @selection-change=\"handleSelectionChange\"\n                >\n                  <el-table-column type=\"selection\" :selectable=\"selectable\" width=\"40\" />\n                  <el-table-column label=\"任务名称\" min-width=\"120\">\n                    <template #default=\"scope\">{{ scope.row.UAV_TASK_NAME }}</template>\n                  </el-table-column>\n                  <el-table-column property=\"TASK_TIME\" align=\"center\" label=\"任务时间\" width=\"90\" />\n                </el-table>\n              </div>\n              </div>\n            </div>\n          </el-scrollbar>\n         </div>\n        `,\n        setup() {\n          // 获取缓存里的鹿小图全局变量数据\n          const lxtGlobal = localStorage.getItem('lxtGlobal')\n            ? JSON.parse(localStorage.getItem('lxtGlobal'))\n            : {};\n          // 页面内注入全局变量和事件\n          const rootData = inject('root');\n          const rootEmitter = mitt();\n\n          let global = reactive(\n            /* 插入应用级别的全局变量 相当于store中的rootData */\n            /* globalVariableStart */\n            {\n              socketIp:\n                lxtGlobal.socketIp || 'http://192.168.0.202:7777/socketPath',\n              socketPath: lxtGlobal.socketPath || '/socketPath',\n              socketRoom: lxtGlobal.socketRoom || roomId || 'admin',\n            }\n            /* globalVariableEnd */\n          );\n\n          let state = reactive({\n            isSocketConnect: false, // socket 是否连接\n            menuList: [],\n            activeName: '',\n            searchText: '',\n            tableData: [],\n          });\n          const multipleTableRef = ref(null); // 表格实例\n          const multipleSelection = ref([]);\n          // 保存上一次的选中状态\n          const previousSelection = ref([]);\n\n          // 创建 socket 连接\n          let socket = null;\n          if (global.socketIp) {\n            const options = {};\n            if (global?.socketPath) {\n              options.path = global.socketPath;\n            }\n            socket = io(global.socketIp, options);\n          }\n\n          provide('root', {\n            ...toRefs(global),\n            rootEmit: rootEmitter.emit, // mitt 发送\n            rootOn: rootEmitter.on, // mitt 接收\n            rootOff: rootEmitter.off, // mitt 移除\n            rootSocket: socket, // socket 实例\n          });\n\n          /**\n           * 监听修改全局变量事件\n           * @param obj 修改后的变量\n           */\n          rootEmitter.on('rootData:change', (obj) => {\n            global = _.set(global, obj.key, obj.value);\n\n            if (global.socketIp && global.socketRoom) {\n              // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息\n              socket.emit('message', {\n                room: global.socketRoom, // 房间号\n                type: 'internalType:ChangeGlobalValue', // 需要保证此类型唯一性\n                data: obj,\n              });\n            }\n          });\n\n          /**\n           * 连接成功时进入对应的房间\n           */\n          if (socket) {\n            socket.on('connect', function () {\n              if (global.socketIp && global.socketRoom) {\n                // 进入房间\n                socket.emit('join-room', global.socketRoom);\n                state.isSocketConnect = true;\n              }\n            });\n          }\n\n          /**\n           * 接收到 socket 消息时触发\n           * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}\n           */\n          if (socket) {\n            socket.on('message', function (data) {\n              // socket 监听全局变量的变化，然后合并值\n              if (data.type === 'internalType:ChangeGlobalValue') {\n                // 合并 globa 的值\n                global = _.set(global, data.data.key, data.data.value);\n              } else if (data.type === 'roadMsg') {\n                if (multipleTableRef.value) {\n                  multipleTableRef.value.clearSelection();\n                }\n                previousSelection.value = [];\n                multipleSelection.value = [];\n                state.tableData = data.data.listData;\n              } else {\n                // 发送消息，通知其他页面\n                rootEmitter.emit('rootSocket:change', data);\n              }\n            });\n          }\n\n          /**\n           * 表格选中\n           */\n\n          const handleSelectionChange = (val) => {\n            // 找出新增的项（当前有而上一次没有的）\n            const addedItems = val.filter(\n              (current) =>\n                !previousSelection.value.some(\n                  (prev) =>\n                    // 假设用id作为唯一标识，可根据实际情况修改\n                    prev.UAV_TASK_CODE === current.UAV_TASK_CODE\n                )\n            );\n\n            // 找出移除的项（上一次有而当前没有的）\n            const removedItems = previousSelection.value.filter(\n              (prev) =>\n                !val.some(\n                  (current) => prev.UAV_TASK_CODE === current.UAV_TASK_CODE\n                )\n            );\n\n            // 打印新增和移除的项\n            if (addedItems.length > 0) {\n              console.log('新增的行:', addedItems);\n            }\n            if (removedItems.length > 0) {\n              console.log('移除的行:', removedItems);\n            }\n\n            // 更新当前选中状态\n            multipleSelection.value = val;\n            console.log('当前选中的所有行:', val);\n\n            // 发送socket消息\n            socket.emit('message', {\n              room: global.socketRoom, // 房间号\n              type: 'selectRow', // 需要保证此类型唯一性\n              data: {\n                selectData: multipleSelection.value,\n                added: addedItems, // 新增的项\n                removed: removedItems, // 移除的项\n              },\n            });\n\n            // 保存当前状态作为下一次的对比基准\n            // 深拷贝避免引用问题\n            previousSelection.value = JSON.parse(JSON.stringify(val));\n          };\n\n          // 监听 socket 房间的变化\n          watch(\n            () => global.socketRoom,\n            (val, oldVal) => {\n              if (socket) {\n                // 离开房间\n                socket.emit('leave-room', oldVal);\n                // 进入房间\n                socket.emit('join-room', val);\n              }\n            }\n          );\n\n          onMounted(async () => {\n            socket.emit('message', {\n              room: global.socketRoom, // 房间号\n              type: 'onInit', // 需要保证此类型唯一性\n              data: {},\n            });\n            if (socket) {\n              socket.on('message', function (data) {\n                // socket 监听全局变量的变化，然后合并值\n                if (data.type === 'internalType:ChangeGlobalValue') {\n                  // 合并 globa 的值\n                  global = _.set(global, data.data.key, data.data.value);\n                } else if (data.type === 'changeCommonParams') {\n                } else if (data.type === 'airPollutionTime') {\n                } else {\n                  // 发送消息，通知其他页面\n                  rootEmitter.emit('rootSocket:change', data);\n                  console.log(data, multipleTableRef.value, '接收到信息01');\n                  if (data.type === 'roadMsg') {\n                    previousSelection.value = [];\n                    multipleSelection.value = [];\n                    if (multipleTableRef.value) {\n                      multipleTableRef.value.clearSelection();\n                    }\n                    state.tableData = data.data.listData;\n                  }\n                }\n              });\n            }\n          });\n\n          onBeforeUnmount(() => {\n            // 离开房间\n            socket.emit('leave-room', global.socketRoom);\n            // 断开连接\n            socket.disconnect();\n          });\n\n          return {\n            state,\n            multipleTableRef,\n            handleSelectionChange,\n          };\n        },\n      };\n\n      const app = createApp(MainComponent);\n      /* 下面的操作是去掉控制台Vue输出的警告信息  如果想开启警告信息可以把这个空函数注释掉 */\n      app.config.warnHandler = function (msg, vm, trace) {\n        // 空函数，不做任何处理\n      };\n      app\n        .use(ElementPlus, {\n          size: 'small',\n        })\n        .mount('#app');\n    <\/script>\n  </body>\n</html>\n",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"410px","height":"672px","position":"unset","left":"21px","top":"176px"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"377px","top":"108px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"搜索",
active:false,
cStyle:{"wrapper":{"default":{"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"377px","top":"108px","cursor":"pointer","animationName":""}}}, 
 },
},
tSearchx0x4: {
defaultStyle: {
            default: {"width":"347px","height":"32px","position":"unset","left":"21px","top":"108px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入",
clearable:true,
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
cStyle:{"wrapper":{"default":{"width":"347px","height":"32px","position":"unset","left":"21px","top":"108px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tDatePickerx0x5: {
defaultStyle: {
            default: {"width":"410px","height":"32px","position":"unset","left":"20px","top":"65px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","position":"unset","left":"20px","top":"65px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
disabledDate:"",
isDisabledFront:false, 
 },
},
tCheckboxx0x6: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justifyContent":"center","width":"187px","height":"20px","position":"unset","left":"246px","top":"152px","fontSize":"14px","lineHeight":"20px","box-shadow":""},
            
            },
 default: { 
 
data:[{"label":"高值区","value":"gzq","disabled":false},{"label":"检查记录","value":"jcjl","disabled":false}],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justifyContent":"center","width":"187px","height":"20px","position":"unset","left":"246px","top":"152px","fontSize":"14px","lineHeight":"20px","box-shadow":""}},"label":{"default":{"fontSize":"14px","lineHeight":"20px"}},"itemWrapper":{"default":{"fontSize":"14px","lineHeight":"20px"}}}, 
 },
},
tPaginationBasex0x7: {
defaultStyle: {
            default: {"width":"410px","height":"38px","position":"unset","left":"25px","top":"860px","color":"","animationName":"","display":"flex","justifyContent":"space-between"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:15,
pagerCount:0,
currentPage:1,
layout:" total,prev, pager, next",
pageSizes:[20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"38px","position":"unset","left":"25px","top":"860px","color":"","animationName":"","display":"flex","justifyContent":"space-between"}},"pagerItem":{"default":{"color":"#fff","fontSize":"14px","lineHeight":"32px","borderLeft":"1px solid #366B92","borderTop":"1px solid #366B92","borderRight":"1px solid #366B92","borderBottom":"1px solid #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":""},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"rgba(255, 255, 255, 0)","color":"var(--common-white1)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"var(--common-white1)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0.6246480855855856%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"#fff","marginLeft":"0px","marginRight":"0px","backgroundColor":"#1B4293"},"hover":{"color":"var(--common-white1)","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"more":{"default":{"color":"#C9E7F5"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"#C9E7F5","paddingRight":"30px","paddingLeft":"10px"}},"sizesWrapper":{"default":{"color":"","backgroundColor":""}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)"},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--common-white08)"}},"jumpInput":{"default":{"color":"var(--common-white08)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"var(--theme-dialog-bg)","color":"","borderLeft":"1px solid var(--theme-input-border)","borderTop":"1px solid var(--theme-input-border)","borderRight":"1px solid var(--theme-input-border)","borderBottom":"1px solid var(--theme-input-border)"}},"sizesDropdownItem":{"default":{"color":"var(--common-white08)"},"active":{"backgroundColor":"var(--theme-btn-default)","color":"var(--common-white1)"},"hover":{"color":"var(--common-white1)","backgroundColor":"var(--theme-table-zebra-crossing)"}}}, 
 },
},
});
const onSocket = () => {
rootData.rootOn('rootSocket:change', (socket) => {
  if (socket.type === 'onInit') {
    console.log(socket, '接收到的初始消息');
    init();
  }
  if (socket.type === 'selectRow') {
    state.selectIds = socket.data.selectData;
    if (socket.data.added.length > 0) {
      state.show = true;
      state.selectId = socket.data.added[0].UAV_TASK_CODE;
    }
    if (socket.data.removed.length > 0) {
      state.show = false;
      state.selectId = socket.data.removed[0].UAV_TASK_CODE;
      state.removeData = socket.data.removed;
    }
    console.log(state.selectId, socket.data, '接收选中的表格数据');
    if (state.selectIds.length > 0) {
      getPointData(Math.random());
    } else {
      removePoint();
    }
  }
})
};
const setTime = (data) => {
state.timeData = data;
state.START_TIME = data[0];
state.END_TIME = data[1];
removePoint();
state.checkShow = false;
state.heightShow = false;
state.checkData = [];
state.heightData = [];
state.selectIds = [];
state.show = true;
state.pointData = [];
state.selectId = "";
state.selectData = [];
state.removeData = [];
getListData(Math.random());
};
const init = () => {
const initData = async () => {
  await getTime(Math.random());
  await getListData(Math.random());
}
initData();
};
const sendMsg = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "roadMsg", // 消息名称
  data: {
    listData: state.listData
  }, // 发送的数据
});
};
const selectType = (data) => {
console.log(data);
state.selectData = data;
const hasGzq = state.selectData.includes("gzq");
const hasJcjl = state.selectData.includes("jcjl");


console.log(hasGzq, hasJcjl, '111111111111111111111111111111111111111111');
// 高值区
if (hasGzq) {
  state.heightShow = true;
  if (state.selectIds.length > 0) {
    state.heightData = [];
    sendHeight();
  }
} else {
  state.heightShow = false;
  state.heightData = [];
  sendHeight();
}

// 检查记录
if (hasJcjl) {
  state.checkShow = true;
  if (state.selectIds.length > 0) {
    state.checkData = [];
    sendCheck();
  }
} else {
  state.checkShow = false;
  state.checkData = [];
  sendCheck();
}
console.log(state.heightShow, state.checkShow, state.selectIds);
};
const sendHeight = () => {
async function processHeightData() {
  if (state.selectIds.length > 0 && state.heightShow) {
    // 并行执行所有getHeightData
    await Promise.all(
      state.selectIds.map(item => getHeightData(Math.random(),item.UAV_TASK_CODE))
    );
  }

  // 所有操作完成后再打印
  console.log(state.selectIds, state.heightData, '9999高值区');
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "selectHeigth", // 消息名称
    data: {
      show: state.heightShow,
      UAV_TASK_CODE: 'gzq',
      heightData: state.heightData
    },
  });
}
processHeightData()
};
const sendCheck = () => {

async function processCheckData() {
  if (state.selectIds.length > 0 && state.checkShow) {
    // 并行执行所有getHeightData
    await Promise.all(
      state.selectIds.map(item => getCheckData(Math.random(), item.STATION_CODE))
    );
  }
  // 所有操作完成后再打印
  console.log(state.selectIds, state.checkData, '9999检查记录');
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "selectCheck", // 消息名称
    data: {
      show: state.checkShow,
      UAV_TASK_CODE: 'jcjl',
      checkData: state.checkData
    },
  });
}
processCheckData();
};
const removePoint = () => {

rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "removePoint", // 消息名称
  data: {
    show: false,
    pointData: state.selectIds.length > 0 ? state.selectIds : state.removeData,
  },
});
console.log(state.selectIds,state.removeData,'移出的点位数据');
state.checkShow = false;
state.heightShow = false;
state.checkData = [];
state.heightData = [];
state.selectIds = [];
state.show = true;
state.pointData = [];
state.selectId = "";
state.selectData = [];
state.removeData = [];
};
const ondateChange1758013923841 = (data) => {
// 执行自定义方法
setTime(data);
};
const onclick1758016983366 = () => {
// 执行自定义方法
removePoint();
// 设置变量值
state.checkShow = false;
// 设置变量值
state.heightShow = false;
// 设置变量值
state.selectIds = [];
// 设置变量值
state.selectId = '';
// 设置变量值
state.selectData = [];
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const oninput1758017409133 = (value) => {
// 设置变量值
state.UAV_TASK_NAME = value;
};
const oncurrentChange1712040406081 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
};
const oncurrentChange1758181820293_0_0 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
// 执行自定义方法
removePoint();
};
const onchange1758189520078 = (data) => {
// 执行自定义方法
selectType(data);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getHeightData: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"time","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"OYebV2rgzV"},{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"UAV_TASK_CODE","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"2n19fcVePr","children":[]}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"time":"this.time","UAV_TASK_CODE":"this.UAV_TASK_CODE","interfaceId":"cd317950ad46c9203e1595b2887e4325"}},
              request: function (time,UAV_TASK_CODE, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"time":time,"UAV_TASK_CODE":UAV_TASK_CODE,"interfaceId":"cd317950ad46c9203e1595b2887e4325"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"time":time,"UAV_TASK_CODE":UAV_TASK_CODE,"interfaceId":"cd317950ad46c9203e1595b2887e4325"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHeightData'] = res.data;
                
     
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.heightData = [...state.heightData, ...data.data];
  console.log(state.heightData, '***************************高值区');
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
 getCheckData: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"time","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"10EkhjbZZT"},{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"EVENTS_GROUP_ID","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"swngeqaVHa","children":[]}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"time":"this.time","EVENTS_GROUP_ID":"1960519128078016513","interfaceId":"8c03a9f984d5d3718c5c4f870f61f23d"}},
              request: function (time,EVENTS_GROUP_ID, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"time":time,"EVENTS_GROUP_ID":"1960519128078016513","interfaceId":"8c03a9f984d5d3718c5c4f870f61f23d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"time":time,"EVENTS_GROUP_ID":"1960519128078016513","interfaceId":"8c03a9f984d5d3718c5c4f870f61f23d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCheckData'] = res.data;
                
     
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.checkData = [...state.checkData, ...data.data];
  console.log(state.checkData, '***************************检查记录');
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
 getPointData: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"time","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"gzlmeKr4SK"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"time":"this.time","UAV_TASK_CODE":"state.selectId","interfaceId":"b911be495fbfcdaae7a509808be3907f"}},
              request: function (time, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"time":time,"UAV_TASK_CODE":state.selectId,"interfaceId":"b911be495fbfcdaae7a509808be3907f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"time":time,"UAV_TASK_CODE":state.selectId,"interfaceId":"b911be495fbfcdaae7a509808be3907f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPointData'] = res.data;
                
     // 清空数据
state.pointData = [];

const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.pointData = data.data;
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "selectTable", // 消息名称
    data: {
      show: state.show,
      UAV_TASK_CODE: state.selectId,
      pointData: state.pointData
    },
  });
  console.log(state.pointData, state.heightShow, '***************************走航点位数据');
  if (state.heightShow) {
    state.heightData = [];
    sendHeight();
  }

if (state.checkShow) {
    state.checkData = [];
    sendCheck();
  }
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
 getTime: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"time","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"KQqMkWe6ov"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"time":"this.time","interfaceId":"624366569d6fc998dbf9e4228f83fd38"}},
              request: function (time, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"time":time,"interfaceId":"624366569d6fc998dbf9e4228f83fd38"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"time":time,"interfaceId":"624366569d6fc998dbf9e4228f83fd38"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTime'] = res.data;
                
     const { data } = res;
state.timeData = [];
state.START_TIME = '';
state.END_TIME = '';
if (data?.head?.statusCode === '200' && data?.data) {
  console.log(data);
  state.timeData = [data.data.START_TIME, data.data.END_TIME];
  state.START_TIME = data.data.START_TIME;
  state.END_TIME = data.data.END_TIME;
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
 getListData: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"time","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"jNjqVjD1yW"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"time":"this.time","pageSize":"state.pageInfo.pageSize","pageNum":"state.pageInfo.pageNum","UAV_TASK_NAME":"state.UAV_TASK_NAME","START_TIME":"state.START_TIME","END_TIME":"state.END_TIME","interfaceId":"6e48a5575c8f40c062eac67359526869"}},
              request: function (time, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"time":time,"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"UAV_TASK_NAME":state.UAV_TASK_NAME,"START_TIME":state.START_TIME,"END_TIME":state.END_TIME,"interfaceId":"6e48a5575c8f40c062eac67359526869"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"time":time,"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"UAV_TASK_NAME":state.UAV_TASK_NAME,"START_TIME":state.START_TIME,"END_TIME":state.END_TIME,"interfaceId":"6e48a5575c8f40c062eac67359526869"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     // 清空数据
state.listData = [];

const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.pageInfo.total = data.head.pageInfo.total;
  state.pageInfo.pages = data.head.pageInfo.pages;
  console.log(state.pageInfo.pages,'state.pageInfo.pages')
  state.listData = data.data;
  sendMsg();
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
// 监听变量，调取接口
watch(() => [state.pageInfo.pageSize,state.pageInfo.pageNum], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-roadTask', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
onSocket();
onUnmounted(() => {
// 页面离开时的操作
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
// 执行自定义方法
removePoint();
});
onMounted(() => {
setPageScale('t-l-c-roadTask', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tIframex0x2ComputedData = computed(() => _.merge({}, componentState.tIframex0x2.default, componentState.tIframex0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tSearchx0x4ComputedData = computed(() => _.merge({}, componentState.tSearchx0x4.default, componentState.tSearchx0x4?.[state.screenSize]));

 const tDatePickerx0x5ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x5.default, componentState.tDatePickerx0x5?.[state.screenSize]));

 const tCheckboxx0x6ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x6.default, componentState.tCheckboxx0x6?.[state.screenSize]));

 const tPaginationBasex0x7ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x7.default, componentState.tPaginationBasex0x7?.[state.screenSize]));

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
tComponentx0x0ComputedData,
tTextx0x1ComputedData,
tIframex0x2ComputedData,
tRectx0x3ComputedData,
tSearchx0x4ComputedData,
tDatePickerx0x5ComputedData,
tCheckboxx0x6ComputedData,
tPaginationBasex0x7ComputedData,
onclick1758016983366,
oninput1758017409133,
ondateChange1758013923841,
onchange1758189520078,
oncurrentChange1758181820293_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-roadTask {
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
width: 450px;
height: 900px;
background-color: rgba(0,0,0,0);
}
.t-l-c-roadTask .roadTask-t-component-0-0 {
position: absolute !important;
top: 20px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-roadTask .roadTask-t-text-0-1 {
position: absolute !important;
top: 26px;
left: 54px;
width: 200px;
height: 20px;
pointer-events: auto;
}

.t-l-c-roadTask .roadTask-t-iframe-0-2 {
position: absolute !important;
top: 176px;
left: 21px;
width: 410px;
height: 672px;
pointer-events: auto;
}

.t-l-c-roadTask .roadTask-t-rect-0-3 {
position: absolute !important;
top: 108px;
left: 377px;
width: 54px;
height: 32px;
pointer-events: auto;
}

.t-l-c-roadTask .roadTask-t-search-0-4 {
position: absolute !important;
top: 108px;
left: 21px;
width: 347px;
height: 32px;
pointer-events: auto;
}

.t-l-c-roadTask .roadTask-t-date-picker-0-5 {
position: absolute !important;
top: 65px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-roadTask .roadTask-t-checkbox-0-6 {
position: absolute !important;
top: 152px;
left: 246px;
width: 187px;
height: 20px;
pointer-events: auto;
}

.t-l-c-roadTask .roadTask-t-pagination-base-0-7 {
position: absolute !important;
top: 860px;
left: 25px;
width: 410px;
height: 38px;
pointer-events: auto;
}
</style>
