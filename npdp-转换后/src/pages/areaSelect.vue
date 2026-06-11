<template>
  <div id="t-l-c-areaSelect" class="t-l-c-areaSelect"><t-row id="t-row-d85a.8129b193e" class="areaSelect-t-row-0-0"
      :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter"
      :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-col id="t-col-fa5b.64f8d6fee"
        class="areaSelect-t-col-0-0-0" :span="tColx0x0x0ComputedData.span" :offset="tColx0x0x0ComputedData.offset"
        :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull"
        :c-style="tColx0x0x0ComputedData.cStyle"></t-col><t-col id="t-col-b975.5536e943b" class="areaSelect-t-col-0-0-1"
        :span="tColx0x0x1ComputedData.span" :offset="tColx0x0x1ComputedData.offset" :push="tColx0x0x1ComputedData.push"
        :pull="tColx0x0x1ComputedData.pull" :c-style="tColx0x0x1ComputedData.cStyle"><t-area-selector-custom-data
          v-if="state.showAreaSelector === true" id="t-area-selector-custom-data-9066.39a69053a"
          class="areaSelect-t-area-selector-custom-data-0-0-1-0"
          :ths-default-region-code="replaceCssVariables(filterData(global.regionaQuery.defaultRegionCode, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['thsDefaultRegionCode'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :region-code="replaceCssVariables(filterData(global.regionaQuery.regionCode, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['regionCode'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :selected="tAreaSelectorCustomDatax0x0x1x0ComputedData.selected"
          :alias="tAreaSelectorCustomDatax0x0x1x0ComputedData.alias"
          :basin-data="tAreaSelectorCustomDatax0x0x1x0ComputedData.basinData"
          :c-style="tAreaSelectorCustomDatax0x0x1x0ComputedData.cStyle"
          :division-data="tAreaSelectorCustomDatax0x0x1x0ComputedData.divisionData"
          :is-edit="replaceCssVariables(filterData(global.regionaQuery.isDisableCustom, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['isEdit'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :separator-type="tAreaSelectorCustomDatax0x0x1x0ComputedData.separatorType"
          :is-show-division="replaceCssVariables(filterData(global.regionaQuery.isShowXZQH, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['isShowDivision'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :is-show-key-area="replaceCssVariables(filterData(global.regionaQuery.isShowZDQY, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['isShowKeyArea'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :is-show-key-watershed="replaceCssVariables(filterData(global.regionaQuery.isShowZDLY, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['isShowKeyWatershed'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :is-show-custom-area="replaceCssVariables(filterData(global.regionaQuery.isShowZDYQY, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['isShowCustomArea'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :key-watershed-root-code="tAreaSelectorCustomDatax0x0x1x0ComputedData.keyWatershedRootCode"
          :is-key-area-list="tAreaSelectorCustomDatax0x0x1x0ComputedData.isKeyAreaList"
          :division-url="replaceCssVariables(filterData(state.region, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['divisionUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :key-watershed-url="replaceCssVariables(filterData(state.basin, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['keyWatershedUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :key-area-url="replaceCssVariables(filterData(state.area, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['keyAreaUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :custom-get-list-url="replaceCssVariables(filterData(state.customRegion.regionList, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['customGetListUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :custom-delete-list-url="replaceCssVariables(filterData(state.customRegion.removeRegion, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['customDeleteListUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :custom-get-child-elements-url="replaceCssVariables(filterData(state.customRegion.childRegionList, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['customGetChildElementsUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :custom-get-data-list-url="replaceCssVariables(filterData(state.customRegion.regionDataList, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['customGetDataListUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :custom-add-single-url="replaceCssVariables(filterData(state.customRegion.addOneRegion, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['customAddSingleUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :custom-delete-single-url="replaceCssVariables(filterData(state.customRegion.removeOneRegion, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['customDeleteSingleUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :custom-update-url="replaceCssVariables(filterData(state.customRegion.amendRegion, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['customUpdateUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :custom-add-url="replaceCssVariables(filterData(state.customRegion.addRegion, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['customAddUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :selected-type="replaceCssVariables(filterData(global.regionaQuery.regionType, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['selectedType'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          :default-region-level="tAreaSelectorCustomDatax0x0x1x0ComputedData.defaultRegionLevel"
          :default-area="replaceCssVariables(filterData(global.regionaQuery, componentPropBindingMap?.['t-area-selector-custom-data-9066.39a69053a']['defaultArea'].filters || []), global?.theme || global?.activeTheme || '默认主题')"
          @search="onsearch1734500487523_0_0" @select="onselect1734500487523_0_1"
          @resetRegion="onresetRegion1734500487523_0_2"></t-area-selector-custom-data></t-col></t-row><t-rect
      v-if="global.regionaQuery.defaultRegionType === 'county'" id="t-rect-aa62.cfee0556f" class="areaSelect-t-rect-0-1"
      :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active"
      :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-rect v-if="global.regionaQuery.defaultRegionType === 'street'"
      id="t-rect-f619.6fcd1c75e" class="areaSelect-t-rect-0-2" :tip="tRectx0x2ComputedData.tip"
      :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active"
      :c-style="tRectx0x2ComputedData.cStyle"></t-rect></div>
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
import { TAreaSelectorCustomData, TCol, TRect, TRow } from '@ths/design';

export default {
  components: {
    TAreaSelectorCustomData,
    TCol,
    TRect,
    TRow,
  },
  setup() {
    const componentPropBindingMap = { "body": { "attributeName": "tBodyx0x0" }, "t-row-d85a.8129b193e": { "attributeName": "tRowx0x0", "cStyle": { "filters": [] }, "gutter": { "filters": [] }, "justify": { "filters": [] }, "align": { "filters": [] } }, "t-col-fa5b.64f8d6fee": { "attributeName": "tColx0x0x0", "span": { "filters": [] }, "offset": { "filters": [] }, "push": { "filters": [] }, "pull": { "filters": [] }, "cStyle": { "filters": [] } }, "t-col-b975.5536e943b": { "attributeName": "tColx0x0x1", "span": { "filters": [] }, "offset": { "filters": [] }, "push": { "filters": [] }, "pull": { "filters": [] }, "cStyle": { "filters": [] } }, "t-area-selector-custom-data-9066.39a69053a": { "attributeName": "tAreaSelectorCustomDatax0x0x1x0", "thsDefaultRegionCode": { "filters": [] }, "regionCode": { "filters": [] }, "selected": { "filters": [] }, "alias": { "filters": [] }, "basinData": { "filters": [] }, "cStyle": { "filters": [] }, "divisionData": { "filters": [] }, "isEdit": { "filters": [] }, "separatorType": { "filters": [] }, "isShowDivision": { "filters": [] }, "isShowKeyArea": { "filters": [] }, "isShowKeyWatershed": { "filters": [] }, "isShowCustomArea": { "filters": [] }, "keyWatershedRootCode": { "filters": [] }, "isKeyAreaList": { "filters": [] }, "divisionUrl": { "filters": [] }, "keyWatershedUrl": { "filters": [] }, "keyAreaUrl": { "filters": [] }, "customGetListUrl": { "filters": [] }, "customDeleteListUrl": { "filters": [] }, "customGetChildElementsUrl": { "filters": [] }, "customGetDataListUrl": { "filters": [] }, "customAddSingleUrl": { "filters": [] }, "customDeleteSingleUrl": { "filters": [] }, "customUpdateUrl": { "filters": [] }, "customAddUrl": { "filters": [] }, "selectedType": { "filters": [] }, "defaultRegionLevel": { "filters": [] }, "defaultArea": { "filters": [] } }, "t-rect-aa62.cfee0556f": { "attributeName": "tRectx0x1", "tip": { "filters": [] }, "label": { "filters": [] }, "active": { "filters": [] }, "cStyle": { "filters": [] } }, "t-rect-f619.6fcd1c75e": { "attributeName": "tRectx0x2", "tip": { "filters": [] }, "label": { "filters": [] }, "active": { "filters": [] }, "cStyle": { "filters": [] } } };
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
      showAreaSelector: true,
      customCodes: [],
      defaultRegionLevel: "city",
      customRegion: { "regionList": "", "removeRegion": "", "childRegionList": "", "regionDataList": "", "addOneRegion": "", "removeOneRegion": "", "amendRegion": "", "addRegion": "" },
      basin: "",
      area: "",
      region: "",
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
          default: { "width": "auto", "height": "36px", "position": "unset", "left": "0px", "top": "0px", "marginLeft": "10px", "marginRight": "20px", "animationName": "" },

        },
        default: {

          cStyle: { "wrapper": { "default": { "width": "auto", "height": "36px", "position": "unset", "left": "0px", "top": "0px", "marginLeft": "10px", "marginRight": "20px", "animationName": "" } } },
          gutter: 0,
          justify: "space-between",
          align: "middle",
        },
      },
      tColx0x0x0: {
        defaultStyle: {
          default: { "width": "auto", "height": "36px", "backgroundColor": "var(--area-slope-bg)", "transform": "perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-20deg) skewY(0deg)\n      ", "marginTop": "auto", "pointerEvents": "none", "marginBottom": "-35px", "marginRight": "8px", "borderTopLeftRadius": "6px", "borderTopRightRadius": "6px", "borderBottomLeftRadius": "6px", "borderBottomRightRadius": "6px", "animationName": "", "left": "20px", "top": "90px" },

        },
        default: {

          span: 24,
          offset: 0,
          push: 0,
          pull: 0,
          cStyle: { "wrapper": { "default": { "width": "auto", "height": "36px", "backgroundColor": "var(--area-slope-bg)", "transform": "perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-20deg) skewY(0deg)\n      ", "marginTop": "auto", "pointerEvents": "none", "marginBottom": "-35px", "marginRight": "8px", "borderTopLeftRadius": "6px", "borderTopRightRadius": "6px", "borderBottomLeftRadius": "6px", "borderBottomRightRadius": "6px", "animationName": "", "left": "20px", "top": "90px" } } },
        },
      },
      tColx0x0x1: {
        defaultStyle: {
          default: { "width": "auto", "height": "36px", "backgroundColor": "rgba(0, 100, 255, 0)", "pointerEvents": "none", "animationName": "", "left": "20px", "top": "90px" },

        },
        default: {

          span: 24,
          offset: 0,
          push: 0,
          pull: 0,
          cStyle: { "wrapper": { "default": { "width": "auto", "height": "36px", "backgroundColor": "rgba(0, 100, 255, 0)", "pointerEvents": "none", "animationName": "", "left": "20px", "top": "90px" } } },
        },
      },
      tAreaSelectorCustomDatax0x0x1x0: {
        defaultStyle: {
          default: { "width": "auto", "height": "36px", "position": "absolute", "left": "22px", "top": "0px", "marginLeft": "-16px", "marginRight": "10px", "min-width": "100px", "--t-custom-area-area-selector-last-region-color": "var(--area-font-active-color)", "--t-custom-area--content-area-switch-border": "var(--area-border)", "--t-custom-area--content-bg": "var(--area-bg)", "--t-custom-area--content-search-button-bg": "var(--area-border)", "--t-custom-area--content-reset-button-border": "var(--area-border)", "--t-custom-area--title-close-color-border": "var(--area-border)", "--t-custom-area--content-bs": "var(--area-shadow)", "--t-custom-area--content-custom-list-color-hover": "var(--area-font-active-color)", "--t-custom-area--content-expand-color": "var(--area-font-active-color)", "--t-custom-area--content-data-color-active": "var(--business-strong)", "--t-custom-area--content-new-button-bg": "var(--area-border)", "--t-custom-area--content-new-button-bg-hover": "var(--area-border)", "--t-custom-area--content-search-button-bg-hover": "var(--area-border)", "--t-custom-area--content-reset-button-border-hover": "var(--area-border)", "--t-custom-area--content-area-list-tag-border-hover": "var(--area-border)", "--t-custom-area--content-add-button-bg": "var(--area-border)", "--t-custom-area--content-add-button-bg-hover": "var(--area-border)", "--t-custom-area--content-input-border": "var(--area-border)", "--t-custom-area--content-area-list-bg": "var(--area-bg2)", "--t-custom-area--title-bg": "var(--area-title-bg)", "--t-custom-area--content-expand-color-hover": "var(--area-font-active-color)", "--t-custom-area-area-selector-color": "var(--business-white)", "animationName": "" },

        },
        default: {

          thsDefaultRegionCode: "350700000000",
          regionCode: "",
          selected: "REGION_CODE",
          alias: { "REGION_NAME": "REGION_NAME", "REGION_CODE": "REGION_CODE", "REGION_PY": "REGION_PY", "PARENT_REGION_CODE": "PARENT_REGION_CODE" },
          basinData: [],
          cStyle: { "wrapper": { "default": { "width": "auto", "height": "36px", "position": "absolute", "left": "22px", "top": "0px", "marginLeft": "-16px", "marginRight": "10px", "min-width": "100px", "--t-custom-area-area-selector-last-region-color": "var(--area-font-active-color)", "--t-custom-area--content-area-switch-border": "var(--area-border)", "--t-custom-area--content-bg": "var(--area-bg)", "--t-custom-area--content-search-button-bg": "var(--area-border)", "--t-custom-area--content-reset-button-border": "var(--area-border)", "--t-custom-area--title-close-color-border": "var(--area-border)", "--t-custom-area--content-bs": "var(--area-shadow)", "--t-custom-area--content-custom-list-color-hover": "var(--area-font-active-color)", "--t-custom-area--content-expand-color": "var(--area-font-active-color)", "--t-custom-area--content-data-color-active": "var(--business-strong)", "--t-custom-area--content-new-button-bg": "var(--area-border)", "--t-custom-area--content-new-button-bg-hover": "var(--area-border)", "--t-custom-area--content-search-button-bg-hover": "var(--area-border)", "--t-custom-area--content-reset-button-border-hover": "var(--area-border)", "--t-custom-area--content-area-list-tag-border-hover": "var(--area-border)", "--t-custom-area--content-add-button-bg": "var(--area-border)", "--t-custom-area--content-add-button-bg-hover": "var(--area-border)", "--t-custom-area--content-input-border": "var(--area-border)", "--t-custom-area--content-area-list-bg": "var(--area-bg2)", "--t-custom-area--title-bg": "var(--area-title-bg)", "--t-custom-area--content-expand-color-hover": "var(--area-font-active-color)", "--t-custom-area-area-selector-color": "var(--business-white)", "animationName": "" } }, "selector": { "default": { "paddingLeft": "0px", "display": "none", "backgroundColor": "rgba(23, 62, 228, 0)" } }, "areaSelector": { "default": { "display": "flex", "alignItems": "center", "marginBottom": "5px", "height": "36px", "backgroundImage": "", "-webkit-mask-image": "", "backgroundRepeat": "", "-webkit-mask-repeat": "", "backgroundSize": "", "-webkit-mask-size": "", "backgroundPosition": "", "-webkit-mask-position": "", "backgroundColor": "rgba(23, 62, 228, 0)", "min-width": "100px", "width": "auto", "max-width": "none", "fontFamily": "微软雅黑" }, "hover": {}, "active": {} }, "areaIcon": { "default": { "width": "20px", "height": "20px", "margin-right": "5px", "backgroundImage": "var(--area-icon)", "backgroundRepeat": "no-repeat", "marginLeft": "30px", "-webkit-mask-image": "", "backgroundSize": "100% 100%" } }, "titleIcon": { "default": { "width": "16px", "height": "16px", "margin": "-1px 16px 0px 20px", "background": "no-repeat url('assets/images/area-icon.png')", "backgroundSize": "200% 200%", "backgroundPosition": "50% 50%" }, "hover": {}, "active": {} }, "closeIcon": { "default": { "display": "block", "width": "22px", "height": "22px", "maskRepeat": "no-repeat", "maskPosition": "center", "backgroundColor": "rgba(255,255,255)", "maskImage": "url(assets/images/2022-11-01/08c48e26a0ae41488ecff53b51af226c.svg)" }, "hover": { "display": "block", "width": "22px", "height": "22px", "background": "", "maskRepeat": "no-repeat", "maskPosition": "center", "backgroundColor": "rgba(255,255,255,0.8)", "maskImage": "url(assets/images/2022-11-01/08c48e26a0ae41488ecff53b51af226c.svg)" } }, "addIcon": { "default": { "display": "inline-block", "width": "10px", "height": "9px", "background": "", "backgroundRepeat": "no-repeat", "backgroundPosition": "center", "backgroundImage": "url(assets/images/2022-11-01/5c22a77e339d49468787144c9de59d8f.svg)" } }, "customAreaTagDeleteIcon": { "default": { "width": "16px", "height": "16px", "masRepeat": "no-repeat", "maskPosition": "center", "backgroundColor": "rgba(255,255,255)", "maskImage": "url(assets/images/2022-11-01/08c48e26a0ae41488ecff53b51af226c.svg)" }, "hover": { "width": "16px", "height": "16px", "masRepeat": "no-repeat", "maskPosition": "center", "backgroundColor": "rgba(255,255,255,0.8)", "maskImage": "url(assets/images/2022-11-01/08c48e26a0ae41488ecff53b51af226c.svg)" }, "active": {} }, "customAreaTagEditIcon": { "default": { "width": "13px", "height": "13px", "maskSize": "13px 13px", "masRepeat": "no-repeat", "maskPosition": "center", "backgroundColor": "rgba(255,255,255)", "maskImage": "url(assets/images/2022-11-01/f5e2b23327a146eeb17309e3dd6431c4.svg)" }, "hover": { "width": "13px", "height": "13px", "maskSize": "13px 13px", "masRepeat": "no-repeat", "maskPosition": "center", "backgroundColor": "rgba(255,255,255,0.8)", "maskImage": "url(assets/images/2022-11-01/f5e2b23327a146eeb17309e3dd6431c4.svg)" }, "active": {} }, "customAreaArrowDown": { "default": { "width": "9px", "height": "13px", "maskImage": "url(assets/images/2022-11-01/fc808052d02242c585ff2268cd24efe8.svg)", "masRepeat": "no-repeat", "maskPosition": "center", "maskSize": "200%,200" } }, "customAreaArrowUp": { "default": { "width": "9px", "height": "13px", "maskImage": "url(assets/images/2022-11-01/4f07d5609ec0493f9a82aacc74b59817.svg)", "masRepeat": "no-repeat", "maskPosition": "center", "maskSize": "200%,200" } }, "areaBox": { "default": { "position": "absolute" } }, "breadcrumbItem": { "default": { "fontFamily": "方正综艺", "fontSize": "var(--business-text-size-20)" } }, "areaSwitch": { "default": { "fontSize": "var(--business-text-size-14)" } }, "handleButton": { "default": { "fontSize": "var(--business-text-size-14)" } }, "litterItem": { "default": { "fontSize": "var(--business-text-size-14)" } }, "litterItemTag": { "default": { "fontSize": "var(--business-text-size-14)" } }, "countyTop": { "default": { "fontSize": "var(--business-text-size-14)" } }, "countyItem": { "default": { "fontSize": "var(--business-text-size-14)" } } },
          divisionData: [],
          isEdit: false,
          separatorType: ">",
          isShowDivision: true,
          isShowKeyArea: true,
          isShowKeyWatershed: true,
          isShowCustomArea: true,
          keyWatershedRootCode: "000000000000",
          isKeyAreaList: "1",
          divisionUrl: "",
          keyWatershedUrl: "",
          keyAreaUrl: "",
          customGetListUrl: "",
          customDeleteListUrl: "",
          customGetChildElementsUrl: "",
          customGetDataListUrl: "",
          customAddSingleUrl: "",
          customDeleteSingleUrl: "",
          customUpdateUrl: "",
          customAddUrl: "",
          selectedType: "region",
          defaultRegionLevel: "city",
          defaultArea: { "isDisableCustom": true, "isShowXZQH": true, "isShowZDQY": true, "isShowZDLY": true, "isShowZDYQY": true, "defaultZDLYCode": "", "regionCode": "350700000000", "defaultRegionCode": "", "regionType": "region", "areaCode": "", "regionName": "南平市", "defaultRegionName": "南平市", "paramsRegionType": "city", "defaultRegionType": "city", "businessRegionName": "南平市", "areaName": "" },
        },
      },
      tRectx0x1: {
        defaultStyle: {
          default: { "width": "230px", "height": "36px", "cursor": "not-allowed", "position": "unset", "left": "46px", "top": "0px", "borderLeft": "0px none rgb(23,62,228)", "borderTop": "0px none rgb(23,62,228)", "borderRight": "0px none rgb(23,62,228)", "borderBottom": "0px none rgb(23,62,228)" },

        },
        default: {

          tip: false,
          label: "",
          active: false,
          cStyle: { "wrapper": { "default": { "width": "230px", "height": "36px", "cursor": "not-allowed", "position": "unset", "left": "46px", "top": "0px", "borderLeft": "0px none rgb(23,62,228)", "borderTop": "0px none rgb(23,62,228)", "borderRight": "0px none rgb(23,62,228)", "borderBottom": "0px none rgb(23,62,228)" } } },
        },
      },
      tRectx0x2: {
        defaultStyle: {
          default: { "width": "400px", "height": "36px", "cursor": "not-allowed", "position": "unset", "left": "2px", "top": "0px", "animationName": "", "borderLeft": "0px none rgb(23,62,228)", "borderTop": "0px none rgb(23,62,228)", "borderRight": "0px none rgb(23,62,228)", "borderBottom": "0px none rgb(23,62,228)" },

        },
        default: {

          tip: false,
          label: "",
          active: false,
          cStyle: { "wrapper": { "default": { "width": "400px", "height": "36px", "cursor": "not-allowed", "position": "unset", "left": "2px", "top": "0px", "animationName": "", "borderLeft": "0px none rgb(23,62,228)", "borderTop": "0px none rgb(23,62,228)", "borderRight": "0px none rgb(23,62,228)", "borderBottom": "0px none rgb(23,62,228)" } } },
        },
      },
    });
    const handleSearch = (item) => {

      /**
       * 处理查询事件
       */
      console.log(item, '田雪测试查询-数据');
      if (!item.REGION_CODE) return;
      // region = 行政区、
      // area = 重点区域、
      // wsystem = 重点流域、
      // custom = 自定义区域
      if (item.selected === 'region') {
        // 选中的行政区编码
        // rootData.rootEmit(
        //   'rootData:change',
        //   {
        //     key: 'regionaQuery.regionCode',
        //     value: item?.REGION_CODE,
        //   },
        // );
        rootData.rootEmit(
          // 固定的消息名称，不能修改
          'rootData:change',
          {
            // 全局变量的键名
            key: 'regionaQuery',
            // 将要修改的全局变量的键值
            value: {
              regionCode: item?.REGION_CODE,
              regionName: item?.REGION_NAME,
              areaCode: '',
              paramsRegionType: getRegionLevel(item?.REGION_CODE),
              businessRegionName: getRegionLevel(item?.REGION_CODE) === 'province' ? '南平市' : item?.REGION_NAME
            },
          }
        );
        // global.regionaQuery.regionCode = item?.REGION_CODE;
        // global.regionaQuery.regionName = item?.REGION_NAME;
        // global.regionaQuery.areaCode = '';
        // global.regionaQuery.paramsRegionType = getRegionLevel(item?.REGION_CODE);
        // global.regionaQuery.businessRegionName = global.regionaQuery.paramsRegionType === 'province' ? '南平市' : item?.REGION_NAME;
        // 点击福建省，默认设置为南平市
        if (item?.REGION_CODE === '350000000000') {
          // global.regionaQuery.regionCode = '350700000000';
          // global.regionaQuery.regionName = '南平市';
          // global.regionaQuery.areaCode = '';
          // global.regionaQuery.paramsRegionType = 'province';
          // global.regionaQuery.businessRegionName = '南平市'
          item = {
            "selected": "region",
            "REGION_CODE": "350700000000",
            "REGION_NAME": "南平市",
            "REGION_TYPE": "city",
            "SHORT_NAME": ""
          }
          rootData.rootEmit(
            // 固定的消息名称，不能修改
            'rootData:change',
            {
              // 全局变量的键名
              key: 'regionaQuery',
              // 将要修改的全局变量的键值
              value: {
                regionCode: "region",
                regionName: "350700000000",
                areaCode: '',
                paramsRegionType: "city",
                businessRegionName: '南平市'
              },
            }
          );
        }
        localStorage.setItem('regionCode', global.regionaQuery.regionCode);
      } else {
        // global.regionaQuery.areaCode = item?.REGION_CODE;
        // global.regionaQuery.areaName = item?.REGION_NAME;
        
          rootData.rootEmit(
            // 固定的消息名称，不能修改
            'rootData:change',
            {
              // 全局变量的键名
              key: 'regionaQuery',
              // 将要修改的全局变量的键值
              value: {
                regionCode: item?.REGION_CODE,
                regionName: item?.REGION_NAME,
              },
            }
          );
        // 水环境流域列表需要区域编码，此处暂时注释掉
        // global.regionaQuery.regionCode = '';
      }


      // 选中的区域类型
      global.regionaQuery.regionType = item.selected;

      // 给地图和右屏发消息
      sendMsg(item);

      /* 若是行政区划 */
      // if (type === 'region') {
      //   global.regionaQuery.regionCode = code;
      //   global.regionaQuery.areaCode = '';
      // } else {
      //   global.regionaQuery.regionCode = '';
      //   global.regionaQuery.areaCode = code;
      // }
    };
    const onWebSocketMsg = (data) => {
      console.log('田雪测试-接收到webSocket消息了', data);
      // const data = message.data;
      if (data?.length) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].shareCode === 'REGION_CODE' && data[i].runtimeValue) {
            // 如果REGION_CODE有值，那就修改行政区划默认选中的值
            rootData.rootEmit(
              'rootData:change',
              {
                key: 'regionaQuery.regionCode',
                value: data[i].runtimeValue,
              },
            );
            rootData.rootSocket.emit(
              // 固定的消息名称，不能修改
              'message',
              {
                // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
                room: global.socketRoom,
                // 键名不能改 消息名称
                type: "changeCommonParams",
                // 键名不能改 消息内容 对象格式
                data: {
                  selected: data[i].code,
                  REGION_CODE: data[i].runtimeValue
                },
              }
            );

            // 选中的区域类型
            global.regionaQuery.regionType = 'region';

          } else if (data[i].shareCode === 'WSYSTEM_CODE' && data[i].runtimeValue) {
            // 如果WSYSTEM_CODE有值，那就修改重点流域默认选中的值
            rootData.rootEmit(
              'rootData:change',
              {
                key: 'regionaQuery.defaultZDLYCode',
                value: data[i].runtimeValue,
              },
            );

            // 选中的区域类型
            global.regionaQuery.regionType = 'wsystem';
          }
        }
      }
    };
    const setInterfaceId = () => {
      // 设置接口id
      const basePath = global.serviceBasePath + '&';

      // 行政区域接口 - 原有备份
      // state.region = `${global.serviceBaseUrl}${basePath}interfaceId=91e1f92fa791802de1ea4d5245915021&REGION_PARENT_CODE=${global.regionaQuery.defaultRegionCode}`;

      // 行政区域接口
      state.region = `${global.foshanServiceBaseUrl}${basePath}interfaceId=b71278e429af933e0919a1fbd8c1a90f&REGION_PARENT_CODE=${global.regionaQuery.defaultRegionCode}`;


      // 重点区域接口
      state.area = `${global.serviceBaseUrl}${basePath}interfaceId=29bbddede70f5293c79109d8edc2dcac&REGION_CODE=${global.regionaQuery.defaultRegionCode}`;
      // 重点流域接口
      state.basin = `${global.foshanServiceBaseUrl}${basePath}interfaceId=8bdb487456849c97a8e74152ca1a8439&REGION_CODE=${global.regionaQuery.defaultRegionCode}`;
      // 自定义行政区接口--------------------
      //区域列表
      state.customRegion.regionList = `${global.serviceBaseUrl}${basePath}interfaceId=8e24536413f30eebe085bf105574b5f1`;
      //删除区域
      state.customRegion.removeRegion = `${global.serviceBaseUrl}${basePath}interfaceId=e8ea54caf8d5a7bb517e6cad0913c33d`;
      //当前区域子区域列表
      state.customRegion.childRegionList = `${global.serviceBaseUrl}${basePath}interfaceId=167a6c03c8b6bd3ed71187d47ec5f7b3`;
      //区域数据列表
      state.customRegion.regionDataList = `${global.serviceBaseUrl}${basePath}interfaceId=e480d2c59e99935a33bed17d0aa56b4b&parentRegionCode=${global.regionaQuery.defaultRegionCode}`;
      //添加单个区域
      state.customRegion.addOneRegion = `${global.serviceBaseUrl}${basePath}interfaceId=92431ad0be517aa026de9153d27e5bfc`;
      //删除单个区域
      state.customRegion.removeOneRegion = `${global.serviceBaseUrl}${basePath}interfaceId=de27b19c3207ad79b003a5cb7dc98ce1`;
      //修改区域
      state.customRegion.amendRegion = `${global.serviceBaseUrl}${basePath}interfaceId=5b36e65d1fda6ade7de55ca795566ae4`;
      //添加区域
      state.customRegion.addRegion = `${global.serviceBaseUrl}${basePath}interfaceId=6497a42ee6aef7b523f445b72b95ef52`;
    };
    const handleReset = (item) => {
      // 处理重置事件，点击后回到默认行政区
      console.log(item, '测试重置-数据');

      // 更新选中的区域编码
      global.regionaQuery.regionCode = global.regionaQuery.defaultRegionCode;
      global.regionaQuery.regionName = global.regionaQuery.defaultRegionName;

      global.regionaQuery.paramsRegionType = getRegionLevel(global.regionaQuery.defaultRegionCode);
      global.regionaQuery.businessRegionName = global.regionaQuery.paramsRegionType === 'province' ? '佛山市' : global.regionaQuery.defaultRegionName;
      localStorage.setItem('regionCode', global.regionaQuery.regionCode);
      // 选中的区域类型item.selected
      global.regionaQuery.regionType = "region";
      // 清空流域编码
      global.regionaQuery.areaCode = "";
      global.regionaQuery.areaName = "";

      const resData = {
        selected: "region",
        REGION_CODE: "350700000000",
        REGION_NAME: "南平市",
        REGION_TYPE: "city"
      };
      // 给综合查询、地图和右屏发消息
      sendMsg(resData);
    };
    const sendMsg = (item) => {
      /**
       * 给右屏、地图、综合查询发消息更新区域
       */

      if (!global.regionaQuery.areaCode) {
        rootData.rootSocket.emit(
          'message',
          {
            room: global.socketRoom,
            type: "resetWsystem"
          }
        );
      }

      if (!item.REGION_CODE) return;

      // 给右屏发消息
      if (item.selected === 'region') {
        /* 发送webSocket消息 */
        if (rootData?.sendMessage) {
          rootData?.sendMessage({
            id: guid(true, 'lego'), // 唯一索引
            type: "runInteractive", // 消息名称
            data: [
              { "code": "REGION_TYPE", "name": "", "defaultValue": item.REGION_TYPE, "shareCode": "REGION_TYPE", "runtimeValue": item.REGION_TYPE },
              { "code": "REGION_NAME", "name": "", "defaultValue": item.REGION_NAME, "shareCode": "REGION_NAME", "runtimeValue": item.REGION_NAME },
              { "code": "REGION_CODE", "name": "", "defaultValue": item.REGION_CODE, "shareCode": "REGION_CODE", "runtimeValue": item.REGION_CODE },
              { "code": "defaultTypeCode", "name": "", "defaultValue": item.selected, "shareCode": "defaultTypeCode", "runtimeValue": item.selected },
              { "code": "AREA_CODE", "shareCode": "AREA_CODE", "defaultValue": "", "runtimeValue": "" }
            ]
          });
        }
      } else if (item.selected === 'area' || item.selected === 'custom') {
        /* 发送webSocket消息 */
        if (rootData?.sendMessage) {
          rootData?.sendMessage({
            id: guid(true, 'lego'), // 唯一索引
            type: "runInteractive", // 消息名称
            data: [
              { "code": "AREA_TYPE", "name": "", "defaultValue": item.REGION_TYPE, "shareCode": "AREA_TYPE", "runtimeValue": item.REGION_TYPE },
              { "code": "AREA_NAME", "name": "", "defaultValue": item.REGION_NAME, "shareCode": "AREA_NAME", "runtimeValue": item.REGION_NAME },
              { "code": "AREA_CODE", "name": "", "defaultValue": item.REGION_CODE, "shareCode": "AREA_CODE", "runtimeValue": item.REGION_CODE },
              { "code": "defaultTypeCode", "name": "", "defaultValue": item.selected, "shareCode": "defaultTypeCode", "runtimeValue": item.selected }
            ]
          });
        }
      } else if (item.selected === 'wsystem') {
        /* 发送webSocket消息 */
        if (rootData?.sendMessage) {
          rootData?.sendMessage({
            id: guid(true, 'lego'), // 唯一索引
            type: "runInteractive", // 消息名称
            data: [
              { "code": "WSYSTEM_TYPE", "name": "", "defaultValue": item.REGION_TYPE, "shareCode": "WSYSTEM_TYPE", "runtimeValue": item.REGION_TYPE },
              { "code": "WSYSTEM_NAME", "name": "", "defaultValue": item.REGION_NAME, "shareCode": "WSYSTEM_NAME", "runtimeValue": item.REGION_NAME },
              { "code": "WSYSTEM_CODE", "name": "", "defaultValue": item.REGION_CODE, "shareCode": "WSYSTEM_CODE", "runtimeValue": item.REGION_CODE },
              { "code": "defaultTypeCode", "name": "", "defaultValue": item.selected, "shareCode": "defaultTypeCode", "runtimeValue": item.selected }
            ]
          });
          rootData.rootSocket.emit('message', {
            room: global.socketRoom, // 房间号
            type: "showWaterWsystemRightPage", // 消息名称
            data: {
              WSYSTEM_CODE: item.REGION_CODE,
              WSYSTEM_NAME: item.REGION_NAME,
              layerName: "流域"
            }, // 发送的数据
          });
        }
      }

      // 给地图和综合查询发消息
      if (item.selected === 'region') {

        rootData.rootSocket.emit(
          // 固定的消息名称，不能修改
          'message',
          {
            // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
            room: global.socketRoom,
            // 键名不能改 消息名称
            type: "changeCommonParams",
            // 键名不能改 消息内容 对象格式
            data: {
              selected: 'REGION_CODE',
              REGION_CODE: item.REGION_CODE,
            },
          }
        );

      } else if (item.selected === 'area') {
        rootData.rootSocket.emit(
          // 固定的消息名称，不能修改
          'message',
          {
            // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
            room: global.socketRoom,
            // 键名不能改 消息名称
            type: "changeCommonParams",
            // 键名不能改 消息内容 对象格式
            data: {
              selected: 'AREA_CODE',
              AREA_CODE: item.REGION_CODE,
            },
          }
        );
      } else if (item.selected === 'custom') {
        getRegionCodesByCustomCode().then(() => {
          rootData.rootSocket.emit(
            // 固定的消息名称，不能修改
            'message',
            {
              // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
              room: global.socketRoom,
              // 键名不能改 消息名称
              type: "changeCommonParams",
              // 键名不能改 消息内容 对象格式
              data: {
                selected: 'REGION_CODE',
                REGION_CODE: state.customCodes.join('$'),
              },
            }
          );
        });
      } else if (item.selected === 'wsystem') {
        rootData.rootSocket.emit(
          // 固定的消息名称，不能修改
          'message',
          {
            // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
            room: global.socketRoom,
            // 键名不能改 消息名称
            type: "changeCommonParams",
            // 键名不能改 消息内容 对象格式
            data: {
              selected: 'WSYSTEM_CODE',
              WSYSTEM_CODE: item.REGION_CODE,
              WSYSTEM_NAME: item.REGION_NAME,
            },
          }
        );
      }
    };
    const handleRegionCodeChanged = (regionName, regionCode) => {
      // 修改全局参数
      global.regionaQuery.paramsRegionType = getRegionLevel(regionCode);
      if (regionName) {
        global.regionaQuery.regionName = regionName;
        global.regionaQuery.businessRegionName = global.regionaQuery.paramsRegionType === 'province' ? '南平市' : regionName;
      }
      localStorage.setItem('regionCode', regionCode);
      sendMsg({
        selected: 'region',
        REGION_CODE: regionCode
      });
    };
    const initData = () => {
      watch(() => global.regionaQuery.paramsRegionType, () => {
        if (global.regionaQuery.defaultRegionType === 'county') {
          // 区级用户选中街道或不选街道，改变遮罩矩形的宽度
          const eleDom = document.getElementById('t-rect-aa62.cfee0556f');
          if (eleDom) {
            eleDom.style.width = global.regionaQuery.paramsRegionType === 'street' ? '350px' : '230px';
          }
        }
      });

      watch(() => global.air.tabSelect, () => {
        // 使用是否渲染，重新刷新一下组件，因为通过global全局变量动态改变了区域选择器的默认选中值后，
        // 点重置时，重置到了佛山市的行政区code
        // state.showAreaSelector = false;
        // setTimeout(() => {
        //   state.showAreaSelector = true;
        // });
      });
    };
    const updateRegionParams = (item) => {
      // try {
      //   // console.log(item, 88889)
      //   /**
      //    * 处理查询事件
      //    */
      //   if (!item.REGION_CODE) return;
      //   // region | REGION_CODE= 行政区、
      //   // area = 重点区域、
      //   // wsystem = 重点流域、
      //   // custom = 自定义区域
      //   if (item.selected === 'region' || item.selected === 'REGION_CODE') {
      //     // 选中的行政区编码
      //     // rootData.rootEmit(
      //     //   'rootData:change',
      //     //   {
      //     //     key: 'regionaQuery.regionCode',
      //     //     value: item?.REGION_CODE,
      //     //   },
      //     // );
      //     global.regionaQuery.regionCode = item?.REGION_CODE;
      //     global.regionaQuery.regionName = item?.REGION_NAME;
      //     global.regionaQuery.areaCode = '';
      //     global.regionaQuery.paramsRegionType = getRegionLevel(item?.REGION_CODE);
      //     global.regionaQuery.businessRegionName = global.regionaQuery.paramsRegionType === 'province' ? '南平市' : item?.REGION_NAME;
      //     localStorage.setItem('regionCode', global.regionaQuery.regionCode);
      //   } else {
      //     global.regionaQuery.areaCode = item?.REGION_CODE;
      //     global.regionaQuery.areaName = item?.REGION_NAME;
      //     // 水环境流域列表需要区域编码，此处暂时注释掉
      //     // global.regionaQuery.regionCode = '';
      //   }

      //   // 区域类型
      //   let selected = item.selected;
      //   /* 区域类型转换 */
      //   if (selected === 'REGION_CODE') {
      //     selected = 'region';
      //   } else if (selected === 'WSYSTEM_CODE') {
      //     selected = 'wsystem';
      //   }

      //   // 选中的区域类型
      //   global.regionaQuery.regionType = selected;

      //   /* 若是行政区划 */
      //   // if (type === 'region') {
      //   //   global.regionaQuery.regionCode = code;
      //   //   global.regionaQuery.areaCode = '';
      //   // } else {
      //   //   global.regionaQuery.regionCode = '';
      //   //   global.regionaQuery.areaCode = code;
      //   // }
      //   console.log(item, 88888)
      // } catch (err) {
      //   console.error(err, 999990)
      // }
    };
    const watchLeftActiveMenu = () => {
      watch(() => global.leftSubjectActiveMenu, (newValue) => {
        console.log(global.leftSubjectActiveMenuList)
        // 切换到烟花爆竹专题，选中南平市
        if (newValue === '烟花爆竹' && global.regionaQuery.regionCode !== '350700000000') {
          handleSearch({
            "selected": "region",
            "REGION_CODE": "350700000000",
            "REGION_NAME": "南平市",
            "REGION_TYPE": "city",
            "SHORT_NAME": ""
          });
        }
      })
    };
    const onsearch1734500487523_0_0 = (data) => {
      // 执行自定义方法
      handleSearch(data);
    };
    const onselect1734500487523_0_1 = (data) => {
      // 执行自定义方法
      handleSearch(data);
    };
    const onresetRegion1734500487523_0_2 = (data) => {
      // 执行自定义方法
      handleReset(data);
    }; let apiRegistry = {};

    // 添加接口数据管理
    const apiDataMap = reactive({});
    // 接口数据缓存
    const apiDataCache = reactive({});

    // 接口注册表
    apiRegistry = {
      // 接口函数
      getRegionCodesByCustomCode: {
        funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
        autoLoad: false, // 自动请求
        bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
        config: { "url": "global.serviceBasePath", "method": "get", "baseURL": "global.serviceBaseUrl", "params": { "interfaceId": "167a6c03c8b6bd3ed71187d47ec5f7b3", "areaCode": "global.regionaQuery.areaCode" } },
        request: function (componentId) {
          return new Promise((resolve, reject) => {

            http({ "url": global.serviceBasePath, "method": "get", "baseURL": global.serviceBaseUrl, "params": { "interfaceId": "167a6c03c8b6bd3ed71187d47ec5f7b3", "areaCode": global.regionaQuery.areaCode }, }).then((res) => {

              // 成功的操作
              const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath', { "interfaceId": "167a6c03c8b6bd3ed71187d47ec5f7b3", "areaCode": global.regionaQuery.areaCode });

              apiDataMap[cacheKey] = res.data;
              apiDataMap['getRegionCodesByCustomCode'] = res.data;

              state.customCodes = [];
              if (res.status === 200 && Array.isArray(res?.data?.data)) {
                state.customCodes = res.data.data.map((val) => val.REGION_CODE);
              }
              resolve(_.get(res, "data"));
            }).catch((error) => {
              // 失败的操作
              state.customCodes = [];
              reject(error);
            });
          });
        },
      },
    };
    function handleWindowResize() {
      setPageScale('t-l-c-areaSelect', global.appScaleMode, 'normal');

      // 获取窗口的宽度和高度
      var windowWidth = window.innerWidth;

    }
    onMounted(() => {
      setPageScale('t-l-c-areaSelect', global.appScaleMode, 'normal');
      window.addEventListener('resize', handleWindowResize);
      handleWindowResize();
      /* 接收socket.io消息 */
      const onSocketChange932fdad4b7f8420eadec = function (data) {
        if (data.type === "runInteractiveChange") {
          try {
            // 执行自定义方法
            onWebSocketMsg(data.data);
          } catch (error) {
            console.error('参数格式错误', error);
          };
        };
      }; rootData.rootOn('rootSocket:change', onSocketChange932fdad4b7f8420eadec); onUnmounted(() => {
        rootData.rootOff('rootSocket:change', onSocketChange932fdad4b7f8420eadec);
      });
      /* 接收socket.io消息 */
      const onSocketChange59ba08b493c649568bd5 = function (data) {
        if (data.type === "resetRegion") {
          try {
            // 执行自定义方法
            sendMsg(data.data);
          } catch (error) {
            console.error('参数格式错误', error);
          };
        };
      }; rootData.rootOn('rootSocket:change', onSocketChange59ba08b493c649568bd5); onUnmounted(() => {
        rootData.rootOff('rootSocket:change', onSocketChange59ba08b493c649568bd5);
      });
      /* 接收socket.io消息 */
      const onSocketChangef9453dae376744a0acda = function (data) {
        if (data.type === "regionCodeChanged") {
          try {
            // 设置全局变量值
            rootData.rootEmit(
              'rootData:change',
              {
                key: 'regionaQuery.regionCode',
                value: data.data.REGION_CODE,
                data: {
                  regionaQuery: { regionCode: data.data.REGION_CODE }
                },
              });
            // 执行自定义方法
            handleRegionCodeChanged(data.data.REGION_NAME, data.data.REGION_CODE);
          } catch (error) {
            console.error('参数格式错误', error);
          };
        };
      }; rootData.rootOn('rootSocket:change', onSocketChangef9453dae376744a0acda); onUnmounted(() => {
        rootData.rootOff('rootSocket:change', onSocketChangef9453dae376744a0acda);
      });
      // 执行自定义方法
      initData();
    });
    // 执行自定义方法
    setInterfaceId();
    /* 接收socket.io消息 */
    const onSocketChangee15e525391e1409dadef = function (data) {
      if (data.type === "changeCommonParams") {
        try {
          // 执行自定义方法
          updateRegionParams(data.data);
        } catch (error) {
          console.error('参数格式错误', error);
        };
      };
    }; rootData.rootOn('rootSocket:change', onSocketChangee15e525391e1409dadef); onUnmounted(() => {
      rootData.rootOff('rootSocket:change', onSocketChangee15e525391e1409dadef);
    });
    // 执行自定义方法
    watchLeftActiveMenu();
    // 页面离开时的操作
    onUnmounted(() => {
      // 移除监听事件
      window.removeEventListener('resize', handleWindowResize);
    });
    const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

    const tColx0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0.default, componentState.tColx0x0x0?.[state.screenSize]));

    const tColx0x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1.default, componentState.tColx0x0x1?.[state.screenSize]));

    const tAreaSelectorCustomDatax0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tAreaSelectorCustomDatax0x0x1x0.default, componentState.tAreaSelectorCustomDatax0x0x1x0?.[state.screenSize]));

    const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

    const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

    if (apiRegistry && Object.keys(apiRegistry).length) {
      // 加载初始接口
      loadInitialApis(apiRegistry, apiDataCache, componentState, componentPropBindingMap, function (cacheKey, data, apiName) {
        // 更新缓存
        apiDataCache[cacheKey] = data;
        apiDataMap[apiName] = data;
      });

      /* 监听组件可视变化，获取组件绑定的接口数据 */
      watchComponentVisible(apiRegistry, apiDataCache, componentState, componentPropBindingMap, function (cacheKey, data, apiName) {
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
      tColx0x0x1ComputedData,
      tAreaSelectorCustomDatax0x0x1x0ComputedData,
      tRectx0x1ComputedData,
      tRectx0x2ComputedData,
      onsearch1734500487523_0_0,
      onselect1734500487523_0_1,
      onresetRegion1734500487523_0_2,
    };
  },
}
</script>

<style scoped>
.t-l-c-areaSelect {
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
  height: 43px;
  width: 500px;
  background-color: rgba(0, 0, 0, 0);
}

.t-l-c-areaSelect .areaSelect-t-row-0-0 {
  position: absolute !important;
  top: 0px;
  left: 0px;
  width: auto;
  height: 36px;
  pointer-events: auto;
  margin-left: 10px;
  margin-right: 20px;
  animation-name: ;
}

.t-l-c-areaSelect .areaSelect-t-col-0-0-0 {
  position: relative;
  top: null;
  left: null;
  width: auto;
  height: 36px;
  pointer-events: none;
  background-color: var(--area-slope-bg);
  transform: perspective(900px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(-20deg) skewY(0deg);
  margin-top: auto;
  margin-bottom: -35px;
  margin-right: 8px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  animation-name: ;
}

.t-l-c-areaSelect .areaSelect-t-col-0-0-1 {
  position: relative;
  top: null;
  left: null;
  width: auto;
  height: 36px;
  pointer-events: none;
  background-color: rgba(0, 100, 255, 0);
  animation-name: ;
}

.t-l-c-areaSelect .areaSelect-t-area-selector-custom-data-0-0-1-0 {
  position: unset;
  top: 0px;
  left: 22px;
  width: auto;
  height: 36px;
  pointer-events: auto;
}

.t-l-c-areaSelect .areaSelect-t-rect-0-1 {
  position: absolute !important;
  top: 0px;
  left: 46px;
  width: 230px;
  height: 36px;
  pointer-events: auto;
}

.t-l-c-areaSelect .areaSelect-t-rect-0-2 {
  position: absolute !important;
  top: 0px;
  left: 2px;
  width: 400px;
  height: 36px;
  pointer-events: auto;
}
</style>
