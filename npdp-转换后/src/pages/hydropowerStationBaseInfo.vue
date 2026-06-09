<template>
  <div id="t-l-c-hydropowerStationBaseInfo" class="t-l-c-hydropowerStationBaseInfo" ><t-chart-design v-if="state.isShowChar === true" id="t-chart-design-72be.7d8d90979" class="hydropowerStationBaseInfo-t-chart-design-0-1"  :empty-img="tChartDesignx0x1ComputedData.emptyImg" :options="replaceCssVariables(filterData(state.lineChartOption, componentPropBindingMap?.['t-chart-design-72be.7d8d90979']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartDesignx0x1ComputedData.cStyle"></t-chart-design><t-text v-if="state.isShow === true" id="t-text-7f3a.e3d1ed979" class="hydropowerStationBaseInfo-t-text-0-2"  :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle" :label="replaceCssVariables(filterData(state.noData, componentPropBindingMap?.['t-text-7f3a.e3d1ed979']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-text><t-row id="t-row-dea5.964c8a54" class="hydropowerStationBaseInfo-t-row-0-7"  :c-style="tRowx0x7ComputedData.cStyle" :gutter="tRowx0x7ComputedData.gutter" :justify="tRowx0x7ComputedData.justify" :align="tRowx0x7ComputedData.align"><t-col id="t-col-38bc.c104ac0d9" class="hydropowerStationBaseInfo-t-col-0-7-0"  :span="tColx0x7x0ComputedData.span" :offset="tColx0x7x0ComputedData.offset" :push="tColx0x7x0ComputedData.push" :pull="tColx0x7x0ComputedData.pull" :c-style="tColx0x7x0ComputedData.cStyle"><t-component id="t-component-aa6c.ded1902b" class="hydropowerStationBaseInfo-t-component-0-7-0-0"  :name="tComponentx0x7x0x0ComputedData.name" :loading="tComponentx0x7x0x0ComputedData.loading" :c-style="tComponentx0x7x0x0ComputedData.cStyle" :src="tComponentx0x7x0x0ComputedData.src" :component-name="tComponentx0x7x0x0ComputedData.componentName" :page-id="tComponentx0x7x0x0ComputedData.pageId" :page-code="tComponentx0x7x0x0ComputedData.pageCode"></t-component><t-component id="t-component-ebc8.c3ddc30bd" class="hydropowerStationBaseInfo-t-component-0-7-0-1"  :name="tComponentx0x7x0x1ComputedData.name" :loading="tComponentx0x7x0x1ComputedData.loading" :c-style="tComponentx0x7x0x1ComputedData.cStyle" :src="tComponentx0x7x0x1ComputedData.src" :component-name="tComponentx0x7x0x1ComputedData.componentName" :page-id="tComponentx0x7x0x1ComputedData.pageId" :page-code="tComponentx0x7x0x1ComputedData.pageCode"></t-component><t-component id="t-component-6156.841c1100c" class="hydropowerStationBaseInfo-t-component-0-7-0-2"  :name="tComponentx0x7x0x2ComputedData.name" :loading="tComponentx0x7x0x2ComputedData.loading" :c-style="tComponentx0x7x0x2ComputedData.cStyle" :src="tComponentx0x7x0x2ComputedData.src" :component-name="tComponentx0x7x0x2ComputedData.componentName" :page-id="tComponentx0x7x0x2ComputedData.pageId" :page-code="tComponentx0x7x0x2ComputedData.pageCode"></t-component><t-component id="t-component-fbdf.c4b918a22" class="hydropowerStationBaseInfo-t-component-0-7-0-3"  :name="tComponentx0x7x0x3ComputedData.name" :loading="tComponentx0x7x0x3ComputedData.loading" :c-style="tComponentx0x7x0x3ComputedData.cStyle" :src="tComponentx0x7x0x3ComputedData.src" :component-name="tComponentx0x7x0x3ComputedData.componentName" :page-id="tComponentx0x7x0x3ComputedData.pageId" :page-code="tComponentx0x7x0x3ComputedData.pageCode"></t-component><t-component id="t-component-60bb.3d3f9051c" class="hydropowerStationBaseInfo-t-component-0-7-0-4"  :name="tComponentx0x7x0x4ComputedData.name" :loading="tComponentx0x7x0x4ComputedData.loading" :c-style="tComponentx0x7x0x4ComputedData.cStyle" :src="tComponentx0x7x0x4ComputedData.src" :component-name="tComponentx0x7x0x4ComputedData.componentName" :page-id="tComponentx0x7x0x4ComputedData.pageId" :page-code="tComponentx0x7x0x4ComputedData.pageCode"></t-component></t-col></t-row><t-rect id="t-rect-f4c2.9a8902b1d" class="hydropowerStationBaseInfo-t-rect-0-8"  :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle" :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label"></t-rect><t-text id="t-text-bdd6.c423f04" class="hydropowerStationBaseInfo-t-text-0-9"  :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle" :label="tTextx0x9ComputedData.label"></t-text><t-row id="t-row-b14b.4dfcd5888" class="hydropowerStationBaseInfo-t-row-0-10"  :gutter="tRowx0x10ComputedData.gutter" :justify="tRowx0x10ComputedData.justify" :c-style="tRowx0x10ComputedData.cStyle" :align="tRowx0x10ComputedData.align"><t-col id="t-col-80fc.4169cb0a2" class="hydropowerStationBaseInfo-t-col-0-10-0"  :pull="tColx0x10x0ComputedData.pull" :offset="tColx0x10x0ComputedData.offset" :c-style="tColx0x10x0ComputedData.cStyle" :push="tColx0x10x0ComputedData.push" :span="tColx0x10x0ComputedData.span"><t-component id="t-component-42c3.56efbee81" class="hydropowerStationBaseInfo-t-component-0-10-0-0"  :src="tComponentx0x10x0x0ComputedData.src" :name="tComponentx0x10x0x0ComputedData.name" :c-style="tComponentx0x10x0x0ComputedData.cStyle" :component-name="tComponentx0x10x0x0ComputedData.componentName" :page-id="tComponentx0x10x0x0ComputedData.pageId" :page-code="tComponentx0x10x0x0ComputedData.pageCode"></t-component><t-text id="t-text-5e81.fcfbeaf4f" class="hydropowerStationBaseInfo-t-text-0-10-0-1"  :editable="tTextx0x10x0x1ComputedData.editable" :c-style="tTextx0x10x0x1ComputedData.cStyle" :label="tTextx0x10x0x1ComputedData.label"></t-text></t-col></t-row><t-row id="t-row-b21d.3ac27c632" class="hydropowerStationBaseInfo-t-row-0-11"  :gutter="tRowx0x11ComputedData.gutter" :justify="tRowx0x11ComputedData.justify" :c-style="tRowx0x11ComputedData.cStyle" :align="tRowx0x11ComputedData.align"><t-col id="t-col-5fc1.605eba7c" class="hydropowerStationBaseInfo-t-col-0-11-0"  :pull="tColx0x11x0ComputedData.pull" :offset="tColx0x11x0ComputedData.offset" :c-style="tColx0x11x0ComputedData.cStyle" :push="tColx0x11x0ComputedData.push" :span="tColx0x11x0ComputedData.span"><t-rect id="t-rect-37da.4db9c4102" class="hydropowerStationBaseInfo-t-rect-0-11-0-0"  :active="tRectx0x11x0x0ComputedData.active" :c-style="tRectx0x11x0x0ComputedData.cStyle" :tip="tRectx0x11x0x0ComputedData.tip" :label="replaceCssVariables(filterData(state.baseInfo.WSYSTEM_NAME, componentPropBindingMap?.['t-rect-37da.4db9c4102']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-rect><t-text id="t-text-5c3e.01d94b2d5" class="hydropowerStationBaseInfo-t-text-0-11-0-1"  :editable="tTextx0x11x0x1ComputedData.editable" :c-style="tTextx0x11x0x1ComputedData.cStyle" :label="tTextx0x11x0x1ComputedData.label"></t-text></t-col><t-col id="t-col-dbeb.c8c5a14ba" class="hydropowerStationBaseInfo-t-col-0-11-1"  :pull="tColx0x11x1ComputedData.pull" :offset="tColx0x11x1ComputedData.offset" :c-style="tColx0x11x1ComputedData.cStyle" :push="tColx0x11x1ComputedData.push" :span="tColx0x11x1ComputedData.span"><t-text id="t-text-6bb1.91e2cf17b" class="hydropowerStationBaseInfo-t-text-0-11-1-0"  :editable="tTextx0x11x1x0ComputedData.editable" :c-style="tTextx0x11x1x0ComputedData.cStyle" :label="tTextx0x11x1x0ComputedData.label"></t-text><t-rect id="t-rect-e6c3.7cf031a64" class="hydropowerStationBaseInfo-t-rect-0-11-1-1"  :active="tRectx0x11x1x1ComputedData.active" :c-style="tRectx0x11x1x1ComputedData.cStyle" :tip="tRectx0x11x1x1ComputedData.tip" :label="replaceCssVariables(filterData(state.baseInfo.IF_MKH_NAME, componentPropBindingMap?.['t-rect-e6c3.7cf031a64']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-rect></t-col><t-col id="t-col-c624.9abf0201" class="hydropowerStationBaseInfo-t-col-0-11-2"  :pull="tColx0x11x2ComputedData.pull" :offset="tColx0x11x2ComputedData.offset" :c-style="tColx0x11x2ComputedData.cStyle" :push="tColx0x11x2ComputedData.push" :span="tColx0x11x2ComputedData.span"><t-text id="t-text-f5ee.8e2641b3f" class="hydropowerStationBaseInfo-t-text-0-11-2-0"  :editable="tTextx0x11x2x0ComputedData.editable" :c-style="tTextx0x11x2x0ComputedData.cStyle" :label="tTextx0x11x2x0ComputedData.label"></t-text><t-rect id="t-rect-c879.6bfd0fc04" class="hydropowerStationBaseInfo-t-rect-0-11-2-1"  :active="tRectx0x11x2x1ComputedData.active" :c-style="tRectx0x11x2x1ComputedData.cStyle" :tip="tRectx0x11x2x1ComputedData.tip" :label="replaceCssVariables(filterData(state.baseInfo.WATER_LEVEL, componentPropBindingMap?.['t-rect-c879.6bfd0fc04']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-rect></t-col></t-row><t-row id="t-row-18e9.1dcda4752" class="hydropowerStationBaseInfo-t-row-0-12"  :c-style="tRowx0x12ComputedData.cStyle" :gutter="tRowx0x12ComputedData.gutter" :justify="tRowx0x12ComputedData.justify" :align="tRowx0x12ComputedData.align"><t-col id="t-col-9aed.c255c4fa" class="hydropowerStationBaseInfo-t-col-0-12-0"  :span="tColx0x12x0ComputedData.span" :offset="tColx0x12x0ComputedData.offset" :push="tColx0x12x0ComputedData.push" :pull="tColx0x12x0ComputedData.pull" :c-style="tColx0x12x0ComputedData.cStyle"><t-component id="t-component-34b6.d71a43f59" class="hydropowerStationBaseInfo-t-component-0-12-0-0"  :src="tComponentx0x12x0x0ComputedData.src" :name="tComponentx0x12x0x0ComputedData.name" :c-style="tComponentx0x12x0x0ComputedData.cStyle" :component-name="tComponentx0x12x0x0ComputedData.componentName" :page-id="tComponentx0x12x0x0ComputedData.pageId" :page-code="tComponentx0x12x0x0ComputedData.pageCode"></t-component><t-text id="t-text-22e7.104f13e16" class="hydropowerStationBaseInfo-t-text-0-12-0-1"  :editable="tTextx0x12x0x1ComputedData.editable" :c-style="tTextx0x12x0x1ComputedData.cStyle" :label="tTextx0x12x0x1ComputedData.label"></t-text></t-col></t-row><t-row id="t-row-004e.ace93d96a" class="hydropowerStationBaseInfo-t-row-0-13"  :c-style="tRowx0x13ComputedData.cStyle" :gutter="tRowx0x13ComputedData.gutter" :justify="tRowx0x13ComputedData.justify" :align="tRowx0x13ComputedData.align"><t-col id="t-col-8510.f39ea4b91" class="hydropowerStationBaseInfo-t-col-0-13-0"  :span="tColx0x13x0ComputedData.span" :offset="tColx0x13x0ComputedData.offset" :push="tColx0x13x0ComputedData.push" :pull="tColx0x13x0ComputedData.pull" :c-style="tColx0x13x0ComputedData.cStyle"><t-text id="t-text-e38d.91fa0cc13" class="hydropowerStationBaseInfo-t-text-0-13-0-0"  :editable="tTextx0x13x0x0ComputedData.editable" :c-style="tTextx0x13x0x0ComputedData.cStyle" :label="tTextx0x13x0x0ComputedData.label"></t-text><t-date-picker id="t-date-picker-804d.4d03ce696" class="hydropowerStationBaseInfo-t-date-picker-0-13-0-1"  :clearable="tDatePickerx0x13x0x1ComputedData.clearable" :is-disabled-front="tDatePickerx0x13x0x1ComputedData.isDisabledFront" :start-placeholder="tDatePickerx0x13x0x1ComputedData.startPlaceholder" :c-style="tDatePickerx0x13x0x1ComputedData.cStyle" :placeholder="tDatePickerx0x13x0x1ComputedData.placeholder" :end-placeholder="tDatePickerx0x13x0x1ComputedData.endPlaceholder" :type="tDatePickerx0x13x0x1ComputedData.type" :separator="tDatePickerx0x13x0x1ComputedData.separator" :range-separator="tDatePickerx0x13x0x1ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeArr, componentPropBindingMap?.['t-date-picker-804d.4d03ce696']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1723452092899"></t-date-picker></t-col><t-col id="t-col-5422.e767357ef" class="hydropowerStationBaseInfo-t-col-0-13-1"  :span="tColx0x13x1ComputedData.span" :offset="tColx0x13x1ComputedData.offset" :push="tColx0x13x1ComputedData.push" :pull="tColx0x13x1ComputedData.pull" :c-style="tColx0x13x1ComputedData.cStyle"><t-text id="t-text-4f1f.acd709c97" class="hydropowerStationBaseInfo-t-text-0-13-1-0"  :editable="tTextx0x13x1x0ComputedData.editable" :c-style="tTextx0x13x1x0ComputedData.cStyle" :label="tTextx0x13x1x0ComputedData.label"></t-text><t-select id="t-select-c691.44a8e38af" class="hydropowerStationBaseInfo-t-select-0-13-1-1"  :filterable="tSelectx0x13x1x1ComputedData.filterable" :clearable="tSelectx0x13x1x1ComputedData.clearable" :active-value="replaceCssVariables(filterData(state.selectArr, componentPropBindingMap?.['t-select-c691.44a8e38af']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :autocomplete="tSelectx0x13x1x1ComputedData.autocomplete" :multiple="tSelectx0x13x1x1ComputedData.multiple" :collapse-tags="tSelectx0x13x1x1ComputedData.collapseTags" :no-match-text="tSelectx0x13x1x1ComputedData.no-match-text" :options="tSelectx0x13x1x1ComputedData.options" :name="tSelectx0x13x1x1ComputedData.name" :alias="tSelectx0x13x1x1ComputedData.alias" :c-style="tSelectx0x13x1x1ComputedData.cStyle" :disabled="tSelectx0x13x1x1ComputedData.disabled" :no-data-text="tSelectx0x13x1x1ComputedData.no-data-text" :placeholder="tSelectx0x13x1x1ComputedData.placeholder" @change="onchange1723451925888"></t-select></t-col></t-row></div>
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
import { TChartDesign, TCol, TComponent, TDatePicker, TRect, TRow, TSelect, TText } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TCol,
    TComponent,
    TDatePicker,
    TRect,
    TRow,
    TSelect,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-image-base-e797.3a99d6637":{"attributeName":"tImageBasex0x0"},"t-chart-design-72be.7d8d90979":{"attributeName":"tChartDesignx0x1","emptyImg":{"filters":[]},"options":{"filters":[]},"cStyle":{"filters":[]}},"t-text-7f3a.e3d1ed979":{"attributeName":"tTextx0x2","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-scrollable-cards-5a43.861fb8a57":{"attributeName":"tScrollableCardsx0x3"},"t-text-dab0.fcccea0b9":{"attributeName":"tTextx0x4"},"t-text-2eea.a40a7b172":{"attributeName":"tTextx0x5"},"t-text-3508.a591123ff":{"attributeName":"tTextx0x6"},"t-row-dea5.964c8a54":{"attributeName":"tRowx0x7","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-38bc.c104ac0d9":{"attributeName":"tColx0x7x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-aa6c.ded1902b":{"attributeName":"tComponentx0x7x0x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-ebc8.c3ddc30bd":{"attributeName":"tComponentx0x7x0x1","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-6156.841c1100c":{"attributeName":"tComponentx0x7x0x2","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-fbdf.c4b918a22":{"attributeName":"tComponentx0x7x0x3","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-60bb.3d3f9051c":{"attributeName":"tComponentx0x7x0x4","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-rect-f4c2.9a8902b1d":{"attributeName":"tRectx0x8","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-text-bdd6.c423f04":{"attributeName":"tTextx0x9","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-row-b14b.4dfcd5888":{"attributeName":"tRowx0x10","gutter":{"filters":[]},"justify":{"filters":[]},"cStyle":{"filters":[]},"align":{"filters":[]}},"t-col-80fc.4169cb0a2":{"attributeName":"tColx0x10x0","pull":{"filters":[]},"offset":{"filters":[]},"cStyle":{"filters":[]},"push":{"filters":[]},"span":{"filters":[]}},"t-component-42c3.56efbee81":{"attributeName":"tComponentx0x10x0x0","src":{"filters":[]},"name":{"filters":[]},"cStyle":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-5e81.fcfbeaf4f":{"attributeName":"tTextx0x10x0x1","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-row-b21d.3ac27c632":{"attributeName":"tRowx0x11","gutter":{"filters":[]},"justify":{"filters":[]},"cStyle":{"filters":[]},"align":{"filters":[]}},"t-col-5fc1.605eba7c":{"attributeName":"tColx0x11x0","pull":{"filters":[]},"offset":{"filters":[]},"cStyle":{"filters":[]},"push":{"filters":[]},"span":{"filters":[]}},"t-rect-37da.4db9c4102":{"attributeName":"tRectx0x11x0x0","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-text-5c3e.01d94b2d5":{"attributeName":"tTextx0x11x0x1","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-col-dbeb.c8c5a14ba":{"attributeName":"tColx0x11x1","pull":{"filters":[]},"offset":{"filters":[]},"cStyle":{"filters":[]},"push":{"filters":[]},"span":{"filters":[]}},"t-text-6bb1.91e2cf17b":{"attributeName":"tTextx0x11x1x0","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-rect-e6c3.7cf031a64":{"attributeName":"tRectx0x11x1x1","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-col-c624.9abf0201":{"attributeName":"tColx0x11x2","pull":{"filters":[]},"offset":{"filters":[]},"cStyle":{"filters":[]},"push":{"filters":[]},"span":{"filters":[]}},"t-text-f5ee.8e2641b3f":{"attributeName":"tTextx0x11x2x0","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-rect-c879.6bfd0fc04":{"attributeName":"tRectx0x11x2x1","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-row-18e9.1dcda4752":{"attributeName":"tRowx0x12","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-9aed.c255c4fa":{"attributeName":"tColx0x12x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-34b6.d71a43f59":{"attributeName":"tComponentx0x12x0x0","src":{"filters":[]},"name":{"filters":[]},"cStyle":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-22e7.104f13e16":{"attributeName":"tTextx0x12x0x1","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-row-004e.ace93d96a":{"attributeName":"tRowx0x13","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-8510.f39ea4b91":{"attributeName":"tColx0x13x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e38d.91fa0cc13":{"attributeName":"tTextx0x13x0x0","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-date-picker-804d.4d03ce696":{"attributeName":"tDatePickerx0x13x0x1","clearable":{"filters":[]},"isDisabledFront":{"filters":[]},"startPlaceholder":{"filters":[]},"cStyle":{"filters":[]},"placeholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"separator":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]}},"t-col-5422.e767357ef":{"attributeName":"tColx0x13x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-4f1f.acd709c97":{"attributeName":"tTextx0x13x1x0","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-select-c691.44a8e38af":{"attributeName":"tSelectx0x13x1x1","filterable":{"filters":[]},"clearable":{"filters":[]},"activeValue":{"filters":[]},"autocomplete":{"filters":[]},"multiple":{"filters":[]},"collapseTags":{"filters":[]},"no-match-text":{"filters":[]},"options":{"filters":[]},"name":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]},"disabled":{"filters":[]},"no-data-text":{"filters":[]},"placeholder":{"filters":[]}}};
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
   showFullPage: false,
   noData: "加载中...",
   charData: [],
   timeArr: "",
   isShowChar: true,
   isShow: true,
   MONITORTIME: "",
   START_MONITORTIME: "",
   END_MONITORTIME: "",
   arr5: [],
   arr4: [],
   arr3: [],
   arr2: [],
   arr1: [],
   xData: [],
   selectArr: ["JZZLL_AVG","SKSW_AVG","SSZLL_AVG"],
   time: "--",
   baseMessage: {"MEASURE_TIME":"--","JZZLL_AVG":"--","STJZLL_AVG":"--","SSZLL_AVG":"--","ZMZLL_AVG":"--","JZZLL_STD":"--","STJZLL_STD":"--","SSZLL_STD":"--","ZMZLL_STD":"--","SKSW_AVG":"--","SKSW_STD":"--"},
   pointCode: "31359",
   lineChartOption: {},
   baseInfo: {"WATER_LEVEL":"--","IF_MKH_NAME":"--","WSYSTEM_NAME":"--","POINT_NAME":"--"},
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
tChartDesignx0x1: {
defaultStyle: {
            default: {"animationName":"","top":"380px","left":"2px","width":"100%","position":"unset","opacity":0,"height":"560px"},
            
            },
 default: { 
 
emptyImg:"assets/images/emptyImg.png",
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})),
cStyle:{"emptyImg":{"default":{"display":"none"}},"emptyText":{"default":{"display":"none"}},"wrapper":{"default":{"animationName":"","top":"380px","left":"2px","width":"100%","position":"unset","opacity":0,"height":"560px"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"animationName":"","color":"var(--business-white)","top":"350px","textAlign":"center","left":"0px","width":"100%","fontSize":"var(--business-text-size-14)","lineHeight":"230px","position":"unset","height":"252px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--business-white)","top":"350px","textAlign":"center","left":"0px","width":"100%","fontSize":"var(--business-text-size-14)","lineHeight":"230px","position":"unset","height":"252px"}}},
label:"加载中...", 
 },
},
tRowx0x7: {
defaultStyle: {
            default: {"width":"100%","height":"96px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"2px","top":"156px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"96px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"2px","top":"156px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x7x0: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","gap":"10px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","gap":"10px"}}}, 
 },
},
tComponentx0x7x0x0: {
defaultStyle: {
            default: {"width":"25%","height":"100%","margin":"0 auto","position":"relative"},
            
            },
 default: { 
 
name:"shunShiZLLComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"25%","height":"100%","margin":"0 auto","position":"relative"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/shunShiZLL",
componentName:"shunShiZLLComponent",
pageId:"e8580c0d52754ae3ac6b6866326ba2d4",
pageCode:"shunShiZLL", 
 },
},
tComponentx0x7x0x1: {
defaultStyle: {
            default: {"width":"25%","height":"100%","margin":"0 auto","animationName":"","left":"0","top":"0","position":"relative"},
            
            },
 default: { 
 
name:"jiZuZLLComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"25%","height":"100%","margin":"0 auto","animationName":"","left":"0","top":"0","position":"relative"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/jiZuZLL",
componentName:"jiZuZLLComponent",
pageId:"7d7b80b35c1c44508a4704337040bd7a",
pageCode:"jiZuZLL", 
 },
},
tComponentx0x7x0x2: {
defaultStyle: {
            default: {"width":"25%","height":"100%","margin":"0 auto","animationName":"","left":"0","top":"0","position":"relative"},
            
            },
 default: { 
 
name:"faMenZLLComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"25%","height":"100%","margin":"0 auto","animationName":"","left":"0","top":"0","position":"relative"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/faMenZLL",
componentName:"faMenZLLComponent",
pageId:"7422dcb181f44627b5404c56c86b20d5",
pageCode:"faMenZLL", 
 },
},
tComponentx0x7x0x3: {
defaultStyle: {
            default: {"width":"25%","height":"100%","margin":"0 auto","animationName":"","left":"0","top":"0","position":"relative"},
            
            },
 default: { 
 
name:"shuiKuSWComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"25%","height":"100%","margin":"0 auto","animationName":"","left":"0","top":"0","position":"relative"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/shuiKuSW",
componentName:"shuiKuSWComponent",
pageId:"2eace8e0aa96431cad7b994b35f9e3c7",
pageCode:"shuiKuSW", 
 },
},
tComponentx0x7x0x4: {
defaultStyle: {
            default: {"width":"25%","height":"100%","margin":"0 auto","animationName":"","left":"0","top":"0","position":"relative"},
            
            },
 default: { 
 
name:"shengTaiJiZLLComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"25%","height":"100%","margin":"0 auto","animationName":"","left":"0","top":"0","position":"relative"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/shengTaiJiZLL",
componentName:"shengTaiJiZLLComponent",
pageId:"5c14f1d40b7149608f17184c2d515d1f",
pageCode:"shengTaiJiZLL", 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"-webkit-mask-position":"","animationName":"","backgroundImage":"var(--dialog-second-title-bg)","-webkit-mask-repeat":"","borderTop":"0px none rgb(23,62,228)","borderLeft":"0px none rgb(23,62,228)","-webkit-mask-size":"","top":"271px","left":"21px","borderRight":"0px none rgb(23,62,228)","width":"775px","backgroundSize":"auto","-webkit-mask-image":"","backgroundPosition":"0% 50%","position":"unset","borderBottom":"0px none rgb(23,62,228)","backgroundRepeat":"no-repeat","height":"26px"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"default":{"-webkit-mask-position":"","animationName":"","backgroundImage":"var(--dialog-second-title-bg)","-webkit-mask-repeat":"","borderTop":"0px none rgb(23,62,228)","borderLeft":"0px none rgb(23,62,228)","-webkit-mask-size":"","top":"271px","left":"21px","borderRight":"0px none rgb(23,62,228)","width":"775px","backgroundSize":"auto","-webkit-mask-image":"","backgroundPosition":"0% 50%","position":"unset","borderBottom":"0px none rgb(23,62,228)","backgroundRepeat":"no-repeat","height":"26px"}}},
tip:false,
label:"", 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"animationName":"","color":"var(--business-white)","top":"270px","left":"50px","pointerEvents":"none","width":"144px","lineHeight":"26px","fontSize":"var(--business-text-size-16)","position":"unset","height":"26px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--business-white)","top":"270px","left":"50px","pointerEvents":"none","width":"144px","lineHeight":"26px","fontSize":"var(--business-text-size-16)","position":"unset","height":"26px"}}},
label:"变化趋势", 
 },
},
tRowx0x10: {
defaultStyle: {
            default: {"alignItems":"center","top":"0px","left":"-1px","background":"rgba(0, 0, 0, 0)","fillType":"color","display":"flex","width":"100%","position":"unset","justifyContent":"center","height":"28px"},
            
            },
 default: { 
 
gutter:0,
justify:"space-between",
cStyle:{"wrapper":{"default":{"alignItems":"center","top":"0px","left":"-1px","background":"rgba(0, 0, 0, 0)","fillType":"color","display":"flex","width":"100%","position":"unset","justifyContent":"center","height":"28px"}}},
align:"middle", 
 },
},
tColx0x10x0: {
defaultStyle: {
            default: {"alignItems":"center","flexDirection":"row","display":"flex","gap":"auto","width":"100px","position":"relative","justifyContent":"center","height":"100%"},
            
            },
 default: { 
 
pull:0,
offset:0,
cStyle:{"wrapper":{"default":{"alignItems":"center","flexDirection":"row","display":"flex","gap":"auto","width":"100px","position":"relative","justifyContent":"center","height":"100%"}}},
push:0,
span:24, 
 },
},
tComponentx0x10x0x0: {
defaultStyle: {
            default: {"animationName":"","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","top":"0px","left":"0px","width":"100%","position":"absolute","height":"28px"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"animationName":"","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","top":"0px","left":"0px","width":"100%","position":"absolute","height":"28px"}}},
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x10x0x1: {
defaultStyle: {
            default: {"animationName":"","color":"var(--t-white)","top":"5px !important","left":"37px !important","pointerEvents":"none","width":"96px","fontSize":"var(--business-text-size-16)","lineHeight":"18px","position":"absolute","fontWeight":"600","height":"18px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--t-white)","top":"5px !important","left":"37px !important","pointerEvents":"none","width":"96px","fontSize":"var(--business-text-size-16)","lineHeight":"18px","position":"absolute","fontWeight":"600","height":"18px"}}},
label:"基本信息", 
 },
},
tRowx0x11: {
defaultStyle: {
            default: {"alignItems":"center","top":"33px","left":"0px","display":"flex","width":"100%","position":"unset","justifyContent":"center","height":"59px"},
            
            },
 default: { 
 
gutter:0,
justify:"space-between",
cStyle:{"wrapper":{"default":{"alignItems":"center","top":"33px","left":"0px","display":"flex","width":"100%","position":"unset","justifyContent":"center","height":"59px"}}},
align:"middle", 
 },
},
tColx0x11x0: {
defaultStyle: {
            default: {"alignItems":"center","background":"rgba(124, 27, 27, 0)","fillType":"color","flexDirection":"row-reverse","display":"flex","width":"100px","justifyContent":"left","height":"100%"},
            
            },
 default: { 
 
pull:0,
offset:0,
cStyle:{"wrapper":{"default":{"alignItems":"center","background":"rgba(124, 27, 27, 0)","fillType":"color","flexDirection":"row-reverse","display":"flex","width":"100px","justifyContent":"left","height":"100%"}}},
push:0,
span:8, 
 },
},
tRectx0x11x0x0: {
defaultStyle: {
            default: {"backgroundColor":"var(--business-show-bg10)","color":"var(--base-label-text-color)","borderTop":"1px none var(--base-info-item-border)","borderTopLeftRadius":"2px","borderLeft":"1px none var(--base-info-item-border)","top":"59px","left":"143px","borderBottomLeftRadius":"2px","borderRight":"1px none var(--base-info-item-border)","width":"130px","borderBottomRightRadius":"2px","borderTopRightRadius":"2px","fontSize":"var(--business-text-size-14)","lineHeight":"32px","position":"unset","borderBottom":"1px none var(--base-info-item-border)","height":"32px"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"default":{"backgroundColor":"var(--business-show-bg10)","color":"var(--base-label-text-color)","borderTop":"1px none var(--base-info-item-border)","borderTopLeftRadius":"2px","borderLeft":"1px none var(--base-info-item-border)","top":"59px","left":"143px","borderBottomLeftRadius":"2px","borderRight":"1px none var(--base-info-item-border)","width":"130px","borderBottomRightRadius":"2px","borderTopRightRadius":"2px","fontSize":"var(--business-text-size-14)","lineHeight":"32px","position":"unset","borderBottom":"1px none var(--base-info-item-border)","height":"32px"}},"text":{"default":{"color":"var(--business-text-avianize)","background":"unset","backgroundClip":"unset"}}},
tip:false,
label:"--", 
 },
},
tTextx0x11x0x1: {
defaultStyle: {
            default: {"animationName":"","backgroundColor":"var(--business-show-bg10)","color":"var(--business-text-avianize)","textAlign":"right","paddingRight":"8px","borderTop":"1px none var(--base-info-item-border)","borderTopLeftRadius":"2px","borderLeft":"1px none var(--base-info-item-border)","top":"61px","left":"25px","borderBottomLeftRadius":"2px","borderRight":"1px none var(--base-info-item-border)","pointerEvents":"none","width":"116px","borderBottomRightRadius":"2px","fontSize":"var(--business-text-size-14)","borderTopRightRadius":"2px","lineHeight":"32px","position":"unset","borderBottom":"1px none var(--base-info-item-border)","height":"32px","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","backgroundColor":"var(--business-show-bg10)","color":"var(--business-text-avianize)","textAlign":"right","paddingRight":"8px","borderTop":"1px none var(--base-info-item-border)","borderTopLeftRadius":"2px","borderLeft":"1px none var(--base-info-item-border)","top":"61px","left":"25px","borderBottomLeftRadius":"2px","borderRight":"1px none var(--base-info-item-border)","pointerEvents":"none","width":"116px","borderBottomRightRadius":"2px","fontSize":"var(--business-text-size-14)","borderTopRightRadius":"2px","lineHeight":"32px","position":"unset","borderBottom":"1px none var(--base-info-item-border)","height":"32px","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"}},"operatorArrow":{"default":{"color":"var(--business-text-avianize)"}}},
label:"所属流域", 
 },
},
tColx0x11x1: {
defaultStyle: {
            default: {"alignItems":"center","display":"flex","width":"100px","justifyContent":"center","height":"100%"},
            
            },
 default: { 
 
pull:0,
offset:0,
cStyle:{"wrapper":{"default":{"alignItems":"center","display":"flex","width":"100px","justifyContent":"center","height":"100%"}}},
push:0,
span:8, 
 },
},
tTextx0x11x1x0: {
defaultStyle: {
            default: {"animationName":"","backgroundColor":"var(--business-show-bg10)","color":"var(--business-text-avianize)","textAlign":"right","paddingRight":"8px","borderTop":"1px none var(--base-info-item-border)","borderTopLeftRadius":"2px","borderLeft":"1px none var(--base-info-item-border)","top":"58px","left":"279px","borderBottomLeftRadius":"2px","borderRight":"1px none var(--base-info-item-border)","pointerEvents":"none","width":"116px","borderBottomRightRadius":"2px","fontSize":"var(--business-text-size-14)","borderTopRightRadius":"2px","lineHeight":"32px","position":"unset","borderBottom":"1px none var(--base-info-item-border)","height":"32px","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","backgroundColor":"var(--business-show-bg10)","color":"var(--business-text-avianize)","textAlign":"right","paddingRight":"8px","borderTop":"1px none var(--base-info-item-border)","borderTopLeftRadius":"2px","borderLeft":"1px none var(--base-info-item-border)","top":"58px","left":"279px","borderBottomLeftRadius":"2px","borderRight":"1px none var(--base-info-item-border)","pointerEvents":"none","width":"116px","borderBottomRightRadius":"2px","fontSize":"var(--business-text-size-14)","borderTopRightRadius":"2px","lineHeight":"32px","position":"unset","borderBottom":"1px none var(--base-info-item-border)","height":"32px","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"}}},
label:"是否免考核", 
 },
},
tRectx0x11x1x1: {
defaultStyle: {
            default: {"animationName":"","backgroundColor":"var(--business-show-bg10)","color":"var(--base-label-text-color)","borderTop":"1px none var(--base-info-item-border)","borderTopLeftRadius":"2px","borderLeft":"1px none var(--base-info-item-border)","top":"58px","left":"399px","borderBottomLeftRadius":"2px","borderRight":"1px none var(--base-info-item-border)","width":"130px","borderBottomRightRadius":"2px","borderTopRightRadius":"2px","fontSize":"var(--business-text-size-14)","lineHeight":"32px","position":"unset","borderBottom":"1px none var(--base-info-item-border)","height":"32px","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"default":{"animationName":"","backgroundColor":"var(--business-show-bg10)","color":"var(--base-label-text-color)","borderTop":"1px none var(--base-info-item-border)","borderTopLeftRadius":"2px","borderLeft":"1px none var(--base-info-item-border)","top":"58px","left":"399px","borderBottomLeftRadius":"2px","borderRight":"1px none var(--base-info-item-border)","width":"130px","borderBottomRightRadius":"2px","borderTopRightRadius":"2px","fontSize":"var(--business-text-size-14)","lineHeight":"32px","position":"unset","borderBottom":"1px none var(--base-info-item-border)","height":"32px","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"}},"text":{"default":{"color":"var(--business-text-avianize)","background":"unset","backgroundClip":"unset"}}},
tip:false,
label:"--", 
 },
},
tColx0x11x2: {
defaultStyle: {
            default: {"alignItems":"center","display":"flex","width":"100px","justifyContent":"center","height":"100%"},
            
            },
 default: { 
 
pull:0,
offset:0,
cStyle:{"wrapper":{"default":{"alignItems":"center","display":"flex","width":"100px","justifyContent":"center","height":"100%"}}},
push:0,
span:8, 
 },
},
tTextx0x11x2x0: {
defaultStyle: {
            default: {"animationName":"","backgroundColor":"var(--business-show-bg10)","color":"var(--business-text-avianize)","textAlign":"right","paddingRight":"8px","borderTop":"1px none var(--base-info-item-border)","borderTopLeftRadius":"2px","borderLeft":"1px none var(--base-info-item-border)","top":"58px","left":"533px","borderBottomLeftRadius":"2px","borderRight":"1px none var(--base-info-item-border)","pointerEvents":"none","width":"116px","borderBottomRightRadius":"2px","fontSize":"var(--business-text-size-14)","borderTopRightRadius":"2px","lineHeight":"32px","position":"unset","borderBottom":"1px none var(--base-info-item-border)","height":"32px","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","backgroundColor":"var(--business-show-bg10)","color":"var(--business-text-avianize)","textAlign":"right","paddingRight":"8px","borderTop":"1px none var(--base-info-item-border)","borderTopLeftRadius":"2px","borderLeft":"1px none var(--base-info-item-border)","top":"58px","left":"533px","borderBottomLeftRadius":"2px","borderRight":"1px none var(--base-info-item-border)","pointerEvents":"none","width":"116px","borderBottomRightRadius":"2px","fontSize":"var(--business-text-size-14)","borderTopRightRadius":"2px","lineHeight":"32px","position":"unset","borderBottom":"1px none var(--base-info-item-border)","height":"32px","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"}}},
label:"水库水位（m）", 
 },
},
tRectx0x11x2x1: {
defaultStyle: {
            default: {"animationName":"","backgroundColor":"var(--business-show-bg10)","color":"var(--base-label-text-color)","borderTop":"1px none var(--base-info-item-border)","borderTopLeftRadius":"2px","borderLeft":"1px none var(--base-info-item-border)","top":"58px","left":"653px","borderBottomLeftRadius":"2px","borderRight":"1px none var(--base-info-item-border)","width":"130px","borderBottomRightRadius":"2px","borderTopRightRadius":"2px","fontSize":"var(--business-text-size-14)","lineHeight":"32px","position":"unset","borderBottom":"1px none var(--base-info-item-border)","height":"32px"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"default":{"animationName":"","backgroundColor":"var(--business-show-bg10)","color":"var(--base-label-text-color)","borderTop":"1px none var(--base-info-item-border)","borderTopLeftRadius":"2px","borderLeft":"1px none var(--base-info-item-border)","top":"58px","left":"653px","borderBottomLeftRadius":"2px","borderRight":"1px none var(--base-info-item-border)","width":"130px","borderBottomRightRadius":"2px","borderTopRightRadius":"2px","fontSize":"var(--business-text-size-14)","lineHeight":"32px","position":"unset","borderBottom":"1px none var(--base-info-item-border)","height":"32px"}},"text":{"default":{"color":"var(--business-text-avianize)","background":"unset","backgroundClip":"unset"}}},
tip:false,
label:"--", 
 },
},
tRowx0x12: {
defaultStyle: {
            default: {"width":"100%","height":"41px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"105px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"41px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"105px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x12x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tComponentx0x12x0x0: {
defaultStyle: {
            default: {"animationName":"","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","top":"10px","left":"10px","width":"100%","position":"absolute","height":"28px"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"animationName":"","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","top":"10px","left":"10px","width":"100%","position":"absolute","height":"28px"}}},
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x12x0x1: {
defaultStyle: {
            default: {"animationName":"","color":"var(--t-white)","top":"15px","left":"42px","pointerEvents":"none","width":"96px","fontSize":"var(--business-text-size-16)","lineHeight":"18px","position":"absolute","fontWeight":"600","height":"18px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--t-white)","top":"15px","left":"42px","pointerEvents":"none","width":"96px","fontSize":"var(--business-text-size-16)","lineHeight":"18px","position":"absolute","fontWeight":"600","height":"18px"}}},
label:"监测信息", 
 },
},
tRowx0x13: {
defaultStyle: {
            default: {"width":"100%","height":"74px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"298px","gap":"auto"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"74px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"298px","gap":"auto"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x13x0: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"left","alignItems":"center","paddingLeft":"10px"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"left","alignItems":"center","paddingLeft":"10px"}}}, 
 },
},
tTextx0x13x0x0: {
defaultStyle: {
            default: {"animationName":"","color":"var(--business-text-avianize)","top":"301px","left":"26px","pointerEvents":"none","width":"auto","fontSize":"var(--business-text-size-14)","lineHeight":"32px","position":"unset","height":"32px","marginRight":"10px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--business-text-avianize)","top":"301px","left":"26px","pointerEvents":"none","width":"auto","fontSize":"var(--business-text-size-14)","lineHeight":"32px","position":"unset","height":"32px","marginRight":"10px"}}},
label:"时间", 
 },
},
tDatePickerx0x13x0x1: {
defaultStyle: {
            default: {"width":"auto","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
clearable:false,
isDisabledFront:true,
startPlaceholder:"开始日期",
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
placeholder:"请选择日期",
endPlaceholder:"结束日期",
type:"daterange",
separator:"-",
rangeSeparator:"-",
'default-date':"", 
 },
},
tColx0x13x1: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"right","alignItems":"center","paddingRight":"10px"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"right","alignItems":"center","paddingRight":"10px"}}}, 
 },
},
tTextx0x13x1x0: {
defaultStyle: {
            default: {"animationName":"","color":"var(--business-text-avianize)","top":"301px","left":"549px","pointerEvents":"none","width":"auto","fontSize":"var(--business-text-size-14)","lineHeight":"32px","position":"unset","height":"32px","marginRight":"10px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--business-text-avianize)","top":"301px","left":"549px","pointerEvents":"none","width":"auto","fontSize":"var(--business-text-size-14)","lineHeight":"32px","position":"unset","height":"32px","marginRight":"10px"}}},
label:"监测指标", 
 },
},
tSelectx0x13x1x1: {
defaultStyle: {
            default: {"animationName":"","backgroundColor":"var(--business-show-bg30)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","paddingRight":"12px","borderTop":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","marginLeft":"10px","borderLeft":"1px solid var(--business-show-bg50)","borderBottomLeftRadius":"4px","borderRight":"1px solid var(--business-show-bg50)","width":"152px","borderBottomRightRadius":"4px","fontSize":"var(--business-text-size-14)","borderTopRightRadius":"4px","paddingLeft":"8px","borderBottom":"1px solid var(--business-show-bg50)","height":"32px","min-width":"162px","position":"unset","left":"622px","top":"302px"},
            
            },
 default: { 
 
filterable:false,
clearable:false,
activeValue:["JZZLL_AVG","SKSW_AVG","SSZLL_AVG"],
autocomplete:"off",
multiple:true,
collapseTags:true,
'no-match-text':"无匹配数据",
options:[{"label":"生态机组流量","value":"STJZLL_AVG"},{"label":"阀门总流量","value":"ZMZLL_AVG"},{"label":"机组总流量","value":"JZZLL_AVG"},{"label":"瞬时总流量","value":"SSZLL_AVG"},{"label":"水库水位","value":"SKSW_AVG"}],
name:"",
alias:{"disabled":"disabled","label":"label","value":"value"},
cStyle:{"dropdownWrapper":{"default":{"borderLeft":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-dialog-bg)","borderBottomLeftRadius":"4px","borderRight":"1px solid var(--business-show-bg50)","borderBottomRightRadius":"4px","width":"100%","borderTopRightRadius":"4px","borderTop":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"14px"}},"wrapper":{"hover":{"borderLeft":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"default":{"animationName":"","backgroundColor":"var(--business-show-bg30)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","paddingRight":"12px","borderTop":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","marginLeft":"10px","borderLeft":"1px solid var(--business-show-bg50)","borderBottomLeftRadius":"4px","borderRight":"1px solid var(--business-show-bg50)","width":"152px","borderBottomRightRadius":"4px","fontSize":"var(--business-text-size-14)","borderTopRightRadius":"4px","paddingLeft":"8px","borderBottom":"1px solid var(--business-show-bg50)","height":"32px","min-width":"162px","position":"unset","left":"622px","top":"302px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"100%","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"}},"dropdownItem":{"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"default":{"color":"var(--business-white)","width":"99%","fontSize":"var(--business-text-size-14)","textOverflow":"ellipsis","overflow":"hidden"},"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"}},"tag":{"default":{"backgroundColor":"var(--business-btn-default)","color":"#fff","paddingRight":"10px","min-height":"22px","left":"4px","align-content":"center","borderWidth":0,"lineHeight":"20px","marginBottom":"0","fontSize":"var(--business-text-size-14)","position":"relative","paddingLeft":"10px","marginTop":"0px","height":"22px"}},"dropdownArrow":{"default":{"display":"none"}},"dropdownItemText":{"default":{"whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","fontSize":"var(--text-size-14)"},"active":{"fontSize":"var(--text-size-14)"}},"tagText":{"default":{"fontSize":"var(--text-size-14)"}}},
disabled:false,
'no-data-text':"无数据",
placeholder:"请选择", 
 },
},
});
const setOption = () => {

// 变化趋势图表配置
state.lineChartOption = {
  "color": [
    "#FBFF00",
    "#1509EA",
    "#009DFF",
    "#24BB51",
    "#95ff00",
    "#2CE451"
  ],
  "tooltip": {
    "show": true,
    "trigger": "axis",
    ...global.chartCommonTooltipOption,
    formatter: (value) => handleTooltipFormatter(value),
  },
  "grid": {
    "containLabel": true,
    "top": "15%",
    "bottom": "5%",
    "left": "4%",
    "right": "3%"
  },
  "xAxis": {
    "type": "category",
    "data": state.xData,
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#A0BDE0"
      }
    },
    "axisTick": {
      "show": true,
      "lineStyle": {
        "color": "#667179"
      }
    },
    "axisLabel": {
      "show": true,
      "color": "var(--business-white)",
      "fontSize": "var(--business-text-size-14)",
      "rotate": 45,
    },
    "splitLine": {
      "show": false,
      "lineStyle": {
        "color": "var(--echarts-splitline)"
      }
    },
  },
  "legend": {
    "show": true,
    "icon": "roundRect",
    "itemWidth": 12,
    "itemHeight": 12,
    "textStyle": {
      "color": "var(--skin-font-color-80)",
      "fontSize": "var(--business-text-size-14)",
      "height": 10,
      "rich": {
        "a": {
          "verticalAlign": "center"
        }
      }
    },
  },
  "yAxis": [
    {
      name: 'm\u00B3/s        ',
      nameTextStyle: {
        "color": "var(--business-white)",
        
      "fontSize": "var(--business-text-size-14)"
      },
      type: 'value',
      // min: 0,
      axisLabel: {
        show: true, // 是否展示坐标轴label
        "color": "var(--business-white)",
      "fontSize": "var(--business-text-size-14)"
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        "show": true,
        "lineStyle": {
          "type": "dashed",
          "color": "var(--echarts-splitline)"
        }
      },
    },
    {
      name: '',
      yAxisIndex: 1,
      "nameTextStyle": {
        "color": "var(--business-white)",
      "fontSize": "var(--business-text-size-14)"
      },
      type: 'value',
      axisLabel: {
        "show": true,
      "fontSize": "var(--business-text-size-14)",
        "color": "var(--business-white)",
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        "show": true,
        "lineStyle": {
          "type": "dashed",
          "color": "var(--echarts-splitline)"
        }
      },
    },
  ],
  "series": [
  ]
};

};
const initVariableValue = () => {

state.pointCode = global.businessDialog.dialogParmas.pointCode;

async function getData(){
  await apiRegistry.getTime.request();
  await apiRegistry.getBaseTime.request();
  await apiRegistry.getBaseData.request();
  await apiRegistry.getBaseInfoData.request();
  await apiRegistry.getMessageData.request();
}
getData()
};
const handleDialogEventMsg = (msg) => {
if (msg.id === 'hydropowerStationBaseInfo') {
  toggleFullScreen({
    fullPage: msg.type === 'small'
  });
}

};
const setSelect = (data) => {
console.log(data, '多选');
state.selectArr = data;
if (state.selectArr.length <= 0 || state.charData.length <= 0) {//state.charData.length <= 0
  state.noData = '暂无数据';
  state.isShowChar = false;
  state.isShow = true;
} else {
    state.isShow = true;
    state.noData = '加载中...';
    setRadio();
}

};
const setXdata = () => {
const timeOverTwoDays = judgeTimesOverDays(state.START_MONITORTIME, state.END_MONITORTIME, 2);
if (timeOverTwoDays && state.lineChartOption.xAxis.data.length >= 48) {
  // let labelStr = '';
  // state.lineChartOption.xAxis.axisLabel.interval = handleLabelInterval(state.lineChartOption.xAxis.data, 8);
  // state.lineChartOption.xAxis.axisLabel.formatter = (value) => {
  //   const dayValue = dateFormat(new Date(value.replace('时', '') + ':00'), 'MM-dd');
  //   // 相等时返回空，反之返回处理后的-月、天值
  //   if (labelStr === dayValue) {
  //     return '';
  //   } else {
  //     labelStr = dayValue;
  //     return dayValue
  //   }
  // }
  state.lineChartOption.xAxis.axisLabel.interval = 0;
  state.lineChartOption.xAxis.axisLabel.formatter = (value, index) => {
    const dayValue = dateFormat(new Date(value.replace('时', '') + ':00'), 'MM-dd');
    return index % 24 === 0 ? dayValue : '';
  };
  state.lineChartOption.xAxis.axisTick.interval = (index) => {
    return index % 24 === 0;
  };
} else {
  state.lineChartOption.xAxis.axisLabel.interval = 'auto';
  state.lineChartOption.xAxis.axisLabel.formatter = (value) => value;
}
};
const setRadio = () => {
state.xData = [];
state.arr1 = [];
state.arr2 = [];
state.arr3 = [];
state.arr4 = [];
state.arr5 = [];
state.lineChartOption.series = [];
state.charData.forEach(item => {
  const tooltipNeedData = {
    tooltipXAxisLabel: item.MONITOR_TIME,
    showValueName: true,
  };
  state.xData.push(item.MONITOR_TIME);
  state.arr1.push({
    value: item.STJZLL_AVG,
    valueName: item.STJZLL_AVG,
    unit: 'm\u00B3/s',
    ...tooltipNeedData,
  });
  state.arr2.push({
    value: item.ZMZLL_AVG,
    valueName: item.ZMZLL_AVG,
    unit: 'm\u00B3/s',
    ...tooltipNeedData,
  });
  state.arr3.push({
    value: item.JZZLL_AVG,
    valueName: item.JZZLL_AVG,
    unit: 'm\u00B3/s',
    ...tooltipNeedData,
  });
  state.arr4.push({
    value: item.SSZLL_AVG,
    valueName: item.SSZLL_AVG,
    unit: 'm\u00B3/s',
    ...tooltipNeedData,
  });
  state.arr5.push({
    value: item.SKSW_AVG,
    valueName: item.SKSW_AVG,
    unit: 'm',
    ...tooltipNeedData,
  });
})
let list = [
  {
    "name": "生态机组流量",
    "data": state.arr1,
    "tname": "STJZLL_AVG",
    "type": "line",
    "symbolSize": 1,
    "symbol": "circle",
    "labelLine": {
      "smooth": true
    }
  },
  {
    "name": "阀门总流量",
    "data": state.arr2,
    "tname": "ZMZLL_AVG",
    "type": "line",
    "symbolSize": 1,
    "symbol": "circle",
    "labelLine": {
      "smooth": true
    }
  },
  {
    "name": "机组总流量",
    yAxisIndex: 0,
    "data": state.arr3,
    "tname": "JZZLL_AVG",
    "type": "line",
    "symbolSize": 1,
    "symbol": "circle",
    "labelLine": {
      "smooth": true
    }
  },
  {
    "name": "瞬时总流量",
    "data": state.arr4,
    "showValueName": true,
    "tname": "SSZLL_AVG",
    "show": false,
    "type": "line",
    "symbolSize": 1,
    "symbol": "circle",
    "labelLine": {
      "smooth": true
    }
  },
  {
    "name": "水库水位",
    "data": state.arr5,
    yAxisIndex: 1,
    "tname": "SKSW_AVG",
    "type": "line",
    "symbolSize": 1,
    "symbol": "circle",
    "labelLine": {
      "smooth": true
    }
  }
];
// 新数组，用于存储匹配的项  
const newArray = [];
let unitStr = '';
// 遍历数组a  
state.selectArr.forEach(itemName => {
  // 在数组b中查找具有相同tname的元素  
  const matchedItem = list.find(item => item.tname === itemName);
  if (matchedItem) {
    // 如果找到了匹配的项，则将其添加到新数组中  
    newArray.push(matchedItem);
  }
  if (itemName === 'SKSW_AVG') {
    unitStr = 'm';
  }
});
state.lineChartOption.xAxis.data = state.xData;
if (state.selectArr.length === 1) {
  state.lineChartOption.grid.left = "5%";
} else {
  state.lineChartOption.grid.left = "4%";
  if (state.showFullPage) {
    state.lineChartOption.grid.top = "10%";
  } else {
    state.lineChartOption.grid.top = "15%";
  }
}
setXdata();
state.lineChartOption.series = newArray;
state.lineChartOption.yAxis[1].name = unitStr;
// 现在 newArray 包含了所有匹配的项  
console.log(newArray, state.lineChartOption, '新数组');
state.isShowChar = false;
setTimeout(() => {
  state.isShow = false;
  state.isShowChar = true;
  setTimeout(() => {
    document.getElementById('t-chart-design-72be.7d8d90979').style.opacity = '0';
    if (state.showFullPage) {
      // 折线图t-chart-design-72be.7d8d90979
      //setEleLeftTop('t-chart-design-72be.7d8d90979', 20, 395);
      //setEleWidthHeight('t-chart-design-72be.7d8d90979', 1784, 560);
      document.getElementById('t-chart-design-72be.7d8d90979').style.opacity = '1';
      //setEleLeftTop('t-text-7f3a.e3d1ed979', 380, 395);
      //setEleWidthHeight('t-text-7f3a.e3d1ed979', 1784, 560);
      setTimeout(() => {
        state.lineChartOption.legend.textStyle.fontSize = 16;
        state.lineChartOption.yAxis[0].nameTextStyle.fontSize = 16;
        state.lineChartOption.yAxis[0].axisLabel.fontSize = 16;
        state.lineChartOption.yAxis[1].nameTextStyle.fontSize = 16;
        state.lineChartOption.yAxis[1].axisLabel.fontSize = 16;
        state.lineChartOption.xAxis.axisLabel.fontSize = 16;
        state.lineChartOption.tooltip.textStyle.fontSize = 16;
      })
      setTimeout(() => {
        // 监测信息1 t-rect-42f5.98f328594
        setEleLeftTop('t-rect-42f5.98f328594', 20, 158);
        setEleWidthHeight('t-rect-42f5.98f328594', 345, 135);
        // 1
        setEleLeftTop('t-text-0b5f.95fb4f471', 108, 178);
        //2
        setEleLeftTop('t-text-9971.a3a1b714f', 118, 208);
        //3
        setEleLeftTop('t-text-c493.73954dde', 118, 248);
        //4
        setEleLeftTop('t-text-d9af.3514f0aea', 163, 248);
        // t-line-e77e.699b65824
        setEleWidthHeight('t-line-e77e.699b65824', 315, 1);
        setEleLeftTop('t-line-e77e.699b65824', 35, 245);

        // 监测信息2 t-rect-7f5a.34aa5732d
        setEleLeftTop('t-rect-ee58.ec363f16f', 380, 158);
        setEleWidthHeight('t-rect-ee58.ec363f16f', 345, 135);
        // 1
        setEleLeftTop('t-text-ce30.b7442c4bd', 458, 178);
        //2
        setEleLeftTop('t-text-29e4.db353930f', 468, 208);
        //3
        setEleLeftTop('t-text-eb9b.70fbfe2f7', 468, 248);
        //4
        setEleLeftTop('t-text-2ce9.e0f2b417b', 513, 248);
        //t-line-4fa1.fec9b7bdb
        setEleWidthHeight('t-line-4fa1.fec9b7bdb', 315, 1);
        setEleLeftTop('t-line-4fa1.fec9b7bdb', 395, 245);

        // 监测信息3 t-rect-7f5a.34aa5732d
        setEleLeftTop('t-rect-7f5a.34aa5732d', 740, 158);
        setEleWidthHeight('t-rect-7f5a.34aa5732d', 345, 135);
        // 1
        setEleLeftTop('t-text-0e4f.77400bf27', 831, 178);
        //2
        setEleLeftTop('t-text-0a63.a776a33cc', 831, 208);
        //3
        setEleLeftTop('t-text-1367.a71cf7bfd', 831, 248);
        //4
        setEleLeftTop('t-text-1ed0.7ce5dbb29', 886, 248);
        //t-line-3271.aadad7b27
        setEleWidthHeight('t-line-3271.aadad7b27', 315, 1);
        setEleLeftTop('t-line-3271.aadad7b27', 755, 245);

        // 监测信息4 t-rect-7f5a.34aa5732d
        setEleLeftTop('t-rect-2b94.c07ca9632', 1100, 158);
        setEleWidthHeight('t-rect-2b94.c07ca9632', 345, 135);
        // 1
        setEleLeftTop('t-text-6c1b.dc3ef36b4', 1164, 178);
        //2
        setEleLeftTop('t-text-7b41.d95fd0d5f', 1194, 208);
        //3
        setEleLeftTop('t-text-6397.ea83e2c6', 1194, 248);
        //4
        setEleLeftTop('t-text-1f19.18ae342c9', 1239, 248);
        //t-line-1f43.df746c56b
        setEleWidthHeight('t-line-1f43.df746c56b', 315, 1);
        setEleLeftTop('t-line-1f43.df746c56b', 1115, 245);

        // 监测信息5 t-rect-7f5a.34aa5732d
        setEleLeftTop('t-rect-b4af.ffb065289', 1460, 158);
        setEleWidthHeight('t-rect-b4af.ffb065289', 345, 135);
        // 1
        setEleLeftTop('t-text-1816.f4b232eb6', 1527, 178);
        //2
        setEleLeftTop('t-text-b7aa.e2dc48b56', 1547, 208);
        //3
        setEleLeftTop('t-text-db37.bf5a0a8d3', 1547, 248);
        //4
        setEleLeftTop('t-text-3ca7.1b3a0e595', 1592, 248);
        //t-line-87d8.1d1731768
        setEleWidthHeight('t-line-87d8.1d1731768', 315, 1);
        setEleLeftTop('t-line-87d8.1d1731768', 1475, 245);
      }, 0)
    } else {
      // 监测信息1 t-rect-42f5.98f328594
      setEleLeftTop('t-rect-42f5.98f328594', 20, 142);
      setEleWidthHeight('t-rect-42f5.98f328594', 140, 96);
      // 1
      setEleLeftTop('t-text-0b5f.95fb4f471', -18, 147);//557
      //2
      setEleLeftTop('t-text-9971.a3a1b714f', 11, 172);
      //3
      setEleLeftTop('t-text-c493.73954dde', 9, 202);
      //4
      setEleLeftTop('t-text-d9af.3514f0aea', 42, 201);
      // t-line-e77e.699b65824
      setEleWidthHeight('t-line-e77e.699b65824', 120, 1);
      setEleLeftTop('t-line-e77e.699b65824', 30, 203);

      // 监测信息2 t-rect-7f5a.34aa5732d
      setEleLeftTop('t-rect-ee58.ec363f16f', 176, 142);
      setEleWidthHeight('t-rect-ee58.ec363f16f', 140, 96);
      // 1
      setEleLeftTop('t-text-ce30.b7442c4bd', 138, 147);//713
      //2
      setEleLeftTop('t-text-29e4.db353930f', 168, 172);
      //3
      setEleLeftTop('t-text-eb9b.70fbfe2f7', 165, 202);
      //4
      setEleLeftTop('t-text-2ce9.e0f2b417b', 198, 201);
      //t-line-4fa1.fec9b7bdb
      setEleWidthHeight('t-line-4fa1.fec9b7bdb', 120, 1);
      setEleLeftTop('t-line-4fa1.fec9b7bdb', 186, 203);

      // 监测信息3 t-rect-7f5a.34aa5732d
      setEleLeftTop('t-rect-7f5a.34aa5732d', 329, 142);
      setEleWidthHeight('t-rect-7f5a.34aa5732d', 140, 96);
      // 1
      setEleLeftTop('t-text-0e4f.77400bf27', 293, 147);
      //2
      setEleLeftTop('t-text-0a63.a776a33cc', 320, 172);
      //3
      setEleLeftTop('t-text-1367.a71cf7bfd', 316, 202);
      //4
      setEleLeftTop('t-text-1ed0.7ce5dbb29', 349, 201);
      //t-line-3271.aadad7b27
      setEleWidthHeight('t-line-3271.aadad7b27', 120, 1);
      setEleLeftTop('t-line-3271.aadad7b27', 339, 203);

      // 监测信息4 t-rect-7f5a.34aa5732d
      setEleLeftTop('t-rect-2b94.c07ca9632', 485, 142);
      setEleWidthHeight('t-rect-2b94.c07ca9632', 140, 96);
      // 1
      setEleLeftTop('t-text-6c1b.dc3ef36b4', 440, 147);
      //2
      setEleLeftTop('t-text-7b41.d95fd0d5f', 480, 172);
      //3
      setEleLeftTop('t-text-6397.ea83e2c6', 479, 202);
      //4
      setEleLeftTop('t-text-1f19.18ae342c9', 512, 201);
      //t-line-1f43.df746c56b
      setEleWidthHeight('t-line-1f43.df746c56b', 120, 1);
      setEleLeftTop('t-line-1f43.df746c56b', 494, 203);

      // 监测信息5 t-rect-7f5a.34aa5732d
      setEleLeftTop('t-rect-b4af.ffb065289', 640, 142);
      setEleWidthHeight('t-rect-b4af.ffb065289', 140, 96);
      // 1
      setEleLeftTop('t-text-1816.f4b232eb6', 596, 147);
      //2
      setEleLeftTop('t-text-b7aa.e2dc48b56', 627, 172);
      //3
      setEleLeftTop('t-text-db37.bf5a0a8d3', 625, 202);
      //4
      setEleLeftTop('t-text-3ca7.1b3a0e595', 658, 201);
      //t-line-87d8.1d1731768
      setEleWidthHeight('t-line-87d8.1d1731768', 120, 1);
      setEleLeftTop('t-line-87d8.1d1731768', 650, 203);

      // 变化趋势标题 t-rect-a803.5fb3f60ec t-text-c418.31126393f
      // setEleLeftTop('t-rect-2104.82de594c', 13, 255);//361
      // setEleWidthHeight('t-rect-2104.82de594c', 775, 26);
      // document.getElementById('t-rect-2104.82de594c').style.backgroundImage = 'var(--dialog-second-title-bg)';
      setEleLeftTop('t-text-649f.b7f27429c', 42, 254);

      state.lineChartOption.grid.top = "15%";
      // 时间
      setEleLeftTop('t-text-e38d.91fa0cc13', 26, 291);
      setEleLeftTop('t-date-picker-804d.4d03ce696', 71, 290);
      // 筛选
      setEleLeftTop('t-text-4f1f.acd709c97', 549, 291);
      setEleLeftTop('t-select-c691.44a8e38af', 620, 292);
      console.log('55555555')
      // 折线图t-chart-design-72be.7d8d90979
      // setEleLeftTop('t-chart-design-72be.7d8d90979', 25, 339);
      // setEleWidthHeight('t-chart-design-72be.7d8d90979', 750, 252);
      document.getElementById('t-chart-design-72be.7d8d90979').style.opacity = '1';
      // setEleLeftTop('t-text-7f3a.e3d1ed979', 25, 339);
      // setEleWidthHeight('t-text-7f3a.e3d1ed979', 750, 252);
    }
    setTimeout(() => {
      document.getElementById('t-chart-design-72be.7d8d90979').style.opacity = '1';
    }, 500)
  })
});
};
const toggleFullScreen = (msg) => {
console.log('传递的变化消息', msg)
if (msg) {
  state.showFullPage = msg.fullPage
} else {
  state.showFullPage = state.showFullPage ? false : true;
}
global.showMaxDetails = state.showFullPage;
// 获取内容页面元素
if (state.showFullPage) {
  state.isShowChar = false;
  setTimeout(() => {
    state.isShowChar = true;
    setTimeout(() => {
      // 弹窗页面背景t-l-c-hydropowerStationBaseInfo
      setEleLeftTop('t-l-c-hydropowerStationBaseInfo', 0, 0);
      setEleWidthHeight('t-l-c-hydropowerStationBaseInfo', 1824, 955);
    //   //t-l-c-hydropowerStationBaseInfo
    //   document.querySelector('.t-l-c-hydropowerStationBaseInfo').style.setProperty('--min-font', '16px');
    //   document.querySelector('.t-l-c-hydropowerStationBaseInfo').style.setProperty('--min-text', '14px');
    //   // 标题
    //   setEleLeftTop('t-component-e39f.2fc73e1fc', 0.5, 0);
    //   setEleWidthHeight('t-component-e39f.2fc73e1fc', 1822, 44);
    //   // document.getElementById('t-rect-d797.94a1fc5d9').style.backgroundImage = 'var(--max-dialog-title-bg)';


    //   // x
    //   setEleLeftTop('t-rect-7097.b2d93bc0a', 1792, 30);
    //   // 缩小 t-rect-b1e1.ccba82a33
    //   setEleLeftTop('t-rect-d8a8.4b46f620b', 1762, 30);
    //   setTimeout(() => {
    //     setEleLeftTop('t-rect-d8a8.4b46f620b', 1762, 30);
    //   }, 0)

    //   // 基本信息图标
    //   // 基本信息标题 背景 t-rect-9045.597084dbd
    //   // setEleLeftTop('t-rect-9045.597084dbd', 78, 122);
    //   setEleLeftTop('t-text-5e81.fcfbeaf4f', 60, 15);
    //   // setEleWidthHeight('t-rect-9045.597084dbd', 1800, 28);
    //   // document.getElementById('t-rect-9045.597084dbd').style.backgroundImage = 'var(--max-two-bg-image)';
    //   setEleLeftTop('t-component-42c3.56efbee81', 20, 10);
    //   setEleWidthHeight('t-component-42c3.56efbee81', 1800, 28);

    //   setTimeout(() => {
    //     // 标题文字
    //     // setEleLeftTop('t-text-ff95.7371f8c5b', 106, 68);
    //     // t-text-unit-17c7.aeadf51db
    //     setEleLeftTop('t-text-unit-17c7.aeadf51db', 48, -29);
    //     // t-rect-37da.4db9c4102
    //     setEleLeftTop('t-rect-37da.4db9c4102', 48, -30);
    //     // 基本信息1 t-text-4ee0.be6da556f
    //     setEleLeftTop('t-text-5c3e.01d94b2d5', 20, 68);
    //     setEleWidthHeight('t-text-5c3e.01d94b2d5', 136, 32);
    //     //基本信息1 t-text-4ee0.be6da556f
    //     // setEleLeftTop('t-text-dab0.fcccea0b9', 218, 166);
    //     // setEleWidthHeight('t-text-dab0.fcccea0b9', 452, 32);
    //     // document.getElementById('t-text-dab0.fcccea0b9').style.maxWidth = '452px';
    //     // t-rect-37da.4db9c4102
    //     setEleLeftTop('t-rect-37da.4db9c4102', 160, 68);
    //     setEleWidthHeight('t-rect-37da.4db9c4102', 452, 32);

    //     // 基本信息2 t-text-4ee0.be6da556f
    //     setEleLeftTop('t-text-6bb1.91e2cf17b', 616, 68);
    //     setEleWidthHeight('t-text-6bb1.91e2cf17b', 136, 32);
    //     //基本信息2 t-text-4ee0.be6da556f
    //     // setEleLeftTop('t-text-2eea.a40a7b172', 814, 166);
    //     // setEleWidthHeight('t-text-2eea.a40a7b172', 452, 32);
    //     // document.getElementById('t-text-2eea.a40a7b172').style.maxWidth = '452px';
    //     // t-rect-e6c3.7cf031a64
    //     setEleLeftTop('t-rect-e6c3.7cf031a64', 756, 68);
    //     setEleWidthHeight('t-rect-e6c3.7cf031a64', 452, 32);
    //     // 基本信息3 t-text-4ee0.be6da556f
    //     setEleLeftTop('t-text-f5ee.8e2641b3f', 1212, 68);
    //     setEleWidthHeight('t-text-f5ee.8e2641b3f', 136, 32);
    //     //基本信息3 t-text-4ee0.be6da556f
    //     // setEleLeftTop('t-text-3508.a591123ff', 1410, 166);
    //     // setEleWidthHeight('t-text-3508.a591123ff', 452, 32);
    //     // document.getElementById('t-text-3508.a591123ff').style.maxWidth = '452px';
    //     // t-rect-c879.6bfd0fc04
    //     setEleLeftTop('t-rect-c879.6bfd0fc04', 1352, 68);
    //     setEleWidthHeight('t-rect-c879.6bfd0fc04', 452, 32);
    //   }, 50)
    //   // 监测信息标题 
    //   // setEleLeftTop('t-rect-393c.8514376e3', 78, 212);
    //   // setEleWidthHeight('t-rect-393c.8514376e3', 1800, 28);
    //   // document.getElementById('t-rect-393c.8514376e3').style.backgroundImage = 'var(--max-two-bg-image)';
    //   setEleLeftTop('t-text-3b1e.168d56d37', 60, 120);

    //   setEleLeftTop('t-component-c920.3666334b9', 20, 114);
    //   setEleWidthHeight('t-component-c920.3666334b9', 1800, 28);

    //   setTimeout(() => {
    //     // 监测信息1 t-rect-42f5.98f328594
    //     setEleLeftTop('t-rect-42f5.98f328594', 20, 158);
    //     setEleWidthHeight('t-rect-42f5.98f328594', 345, 135);
    //     // 1
    //     setEleLeftTop('t-text-0b5f.95fb4f471', 108, 178);
    //     //2
    //     setEleLeftTop('t-text-9971.a3a1b714f', 118, 208);
    //     //3
    //     setEleLeftTop('t-text-c493.73954dde', 118, 248);
    //     //4
    //     setEleLeftTop('t-text-d9af.3514f0aea', 163, 248);
    //     // t-line-e77e.699b65824
    //     setEleWidthHeight('t-line-e77e.699b65824', 315, 1);
    //     setEleLeftTop('t-line-e77e.699b65824', 35, 245);

    //     // 监测信息2 t-rect-7f5a.34aa5732d
    //     setEleLeftTop('t-rect-ee58.ec363f16f', 380, 158);
    //     setEleWidthHeight('t-rect-ee58.ec363f16f', 345, 135);
    //     // 1
    //     setEleLeftTop('t-text-ce30.b7442c4bd', 458, 178);
    //     //2
    //     setEleLeftTop('t-text-29e4.db353930f', 468, 208);
    //     //3
    //     setEleLeftTop('t-text-eb9b.70fbfe2f7', 468, 248);
    //     //4
    //     setEleLeftTop('t-text-2ce9.e0f2b417b', 513, 248);
    //     //t-line-4fa1.fec9b7bdb
    //     setEleWidthHeight('t-line-4fa1.fec9b7bdb', 315, 1);
    //     setEleLeftTop('t-line-4fa1.fec9b7bdb', 395, 245);

    //     // 监测信息3 t-rect-7f5a.34aa5732d
    //     setEleLeftTop('t-rect-7f5a.34aa5732d', 740, 158);
    //     setEleWidthHeight('t-rect-7f5a.34aa5732d', 345, 135);
    //     // 1
    //     setEleLeftTop('t-text-0e4f.77400bf27', 831, 178);
    //     //2
    //     setEleLeftTop('t-text-0a63.a776a33cc', 831, 208);
    //     //3
    //     setEleLeftTop('t-text-1367.a71cf7bfd', 831, 248);
    //     //4
    //     setEleLeftTop('t-text-1ed0.7ce5dbb29', 886, 248);
    //     //t-line-3271.aadad7b27
    //     setEleWidthHeight('t-line-3271.aadad7b27', 315, 1);
    //     setEleLeftTop('t-line-3271.aadad7b27', 755, 245);

    //     // 监测信息4 t-rect-7f5a.34aa5732d
    //     setEleLeftTop('t-rect-2b94.c07ca9632', 1100, 158);
    //     setEleWidthHeight('t-rect-2b94.c07ca9632', 345, 135);
    //     // 1
    //     setEleLeftTop('t-text-6c1b.dc3ef36b4', 1164, 178);
    //     //2
    //     setEleLeftTop('t-text-7b41.d95fd0d5f', 1194, 208);
    //     //3
    //     setEleLeftTop('t-text-6397.ea83e2c6', 1194, 248);
    //     //4
    //     setEleLeftTop('t-text-1f19.18ae342c9', 1239, 248);
    //     //t-line-1f43.df746c56b
    //     setEleWidthHeight('t-line-1f43.df746c56b', 315, 1);
    //     setEleLeftTop('t-line-1f43.df746c56b', 1115, 245);

    //     // 监测信息5 t-rect-7f5a.34aa5732d
    //     setEleLeftTop('t-rect-b4af.ffb065289', 1460, 158);
    //     setEleWidthHeight('t-rect-b4af.ffb065289', 345, 135);
    //     // 1
    //     setEleLeftTop('t-text-1816.f4b232eb6', 1527, 178);
    //     //2
    //     setEleLeftTop('t-text-b7aa.e2dc48b56', 1547, 208);
    //     //3
    //     setEleLeftTop('t-text-db37.bf5a0a8d3', 1547, 248);
    //     //4
    //     setEleLeftTop('t-text-3ca7.1b3a0e595', 1592, 248);
    //     //t-line-87d8.1d1731768
    //     setEleWidthHeight('t-line-87d8.1d1731768', 315, 1);
    //     setEleLeftTop('t-line-87d8.1d1731768', 1475, 245);
    //   }, 1200)

    //   // 变化趋势标题 t-rect-a803.5fb3f60ec t-text-c418.31126393f
    //   setEleLeftTop('t-rect-f4c2.9a8902b1d', 20, 308);//361
    //   setEleWidthHeight('t-rect-f4c2.9a8902b1d', 1800, 26);
    //   // document.getElementById('t-rect-f4c2.9a8902b1d').style.backgroundImage = 'var(--max-three-bg-image)';
    //   setEleLeftTop('t-text-bdd6.c423f04', 54, 308);

    //   state.lineChartOption.grid.top = "10%";
    //   // 时间
    //   setEleLeftTop('t-text-e38d.91fa0cc13', 20, 342);
    //   setEleLeftTop('t-date-picker-804d.4d03ce696', 70, 342);
    //   // 筛选
    //   setEleLeftTop('t-text-4f1f.acd709c97', 1562, 342);
    //   setEleLeftTop('t-select-c691.44a8e38af', 1642, 342);
    //   setTimeout(() => {
    //     // 折线图t-chart-design-72be.7d8d90979
    //     setEleLeftTop('t-chart-design-72be.7d8d90979', 20, 395);
    //     setEleWidthHeight('t-chart-design-72be.7d8d90979', 1784, 560);
    //     let element = document.getElementById('t-chart-design-72be.7d8d90979');
    //     if (element) {
    //       element.style.opacity = '1';
    //     }
    //     setEleLeftTop('t-text-7f3a.e3d1ed979', 380, 395);
    //     setEleWidthHeight('t-text-7f3a.e3d1ed979', 1784, 560);
    //   }, 1500)
    //   setTimeout(() => {
    //     state.lineChartOption.legend.textStyle.fontSize = 16;
    //     state.lineChartOption.yAxis[0].nameTextStyle.fontSize = 16;
    //     state.lineChartOption.yAxis[0].axisLabel.fontSize = 16;
    //     state.lineChartOption.yAxis[1].nameTextStyle.fontSize = 16;
    //     state.lineChartOption.yAxis[1].axisLabel.fontSize = 16;
    //     state.lineChartOption.xAxis.axisLabel.fontSize = 16;
    //     state.lineChartOption.tooltip.textStyle.fontSize = 16;
    //   })
    }, 100)
  })
} else {
  state.isShowChar = false;
  setTimeout(() => {
    state.isShowChar = true;
    // 弹窗页面背景t-l-c-hydropowerStationBaseInfo
    setEleLeftTop('t-l-c-hydropowerStationBaseInfo', 0, 0);
    setEleWidthHeight('t-l-c-hydropowerStationBaseInfo', 800, 600);

  //   document.querySelector('.t-l-c-hydropowerStationBaseInfo').style.setProperty('--min-font', '14px');
  //   document.querySelector('.t-l-c-hydropowerStationBaseInfo').style.setProperty('--min-text', '12px');
  //   setEleLeftTop('t-component-e39f.2fc73e1fc', 0, 0);
  //   setEleWidthHeight('t-component-e39f.2fc73e1fc', 798, 40);
  //   // document.getElementById('t-rect-d797.94a1fc5d9').style.backgroundImage = 'var(--middle-dialog-title-bg)';
  //   // setEleLeftTop('t-text-ff95.7371f8c5b', 613, 230);
  //   setEleLeftTop('t-text-unit-17c7.aeadf51db', 53, 11);
  //   setEleLeftTop('t-rect-7097.b2d93bc0a', 768, 11);

  //   // 缩小 t-rect-b1e1.ccba82a33
  //   setEleLeftTop('t-rect-40e4.12f911b03', 768, 11);
  //   setTimeout(() => {
  //     setEleLeftTop('t-rect-40e4.12f911b03', 768, 11);
  //   }, 0)

  //   // 基本信息图标
  //   // 基本信息标题 背景 t-rect-9045.597084dbd
  //   // setEleLeftTop('t-rect-9045.597084dbd', 574, 278);
  //   setEleLeftTop('t-text-5e81.fcfbeaf4f', 52, 12);
  //   // setEleWidthHeight('t-rect-9045.597084dbd', 772, 28);
  //   // document.getElementById('t-rect-9045.597084dbd').style.backgroundImage = 'var(--dialog-first-title-bg)';
  //   setEleLeftTop('t-component-42c3.56efbee81', 14, 8);
  //   setEleWidthHeight('t-component-42c3.56efbee81', 772, 28);

  //   // 基本信息1 t-text-4ee0.be6da556f
  //   setEleLeftTop('t-text-5c3e.01d94b2d5', 25, 48);
  //   setEleWidthHeight('t-text-5c3e.01d94b2d5', 116, 32);
  //   //基本信息1 t-text-4ee0.be6da556f
  //   // setEleLeftTop('t-text-dab0.fcccea0b9', 705, 319);
  //   // setEleWidthHeight('t-text-dab0.fcccea0b9', 130, 32);
  //   // document.getElementById('t-text-dab0.fcccea0b9').style.maxWidth = '130px';
  //   // t-rect-37da.4db9c4102
  //   setEleLeftTop('t-rect-37da.4db9c4102', 145, 48);
  //   setEleWidthHeight('t-rect-37da.4db9c4102', 130, 32);
  //   // 基本信息2 t-text-4ee0.be6da556f
  //   setEleLeftTop('t-text-6bb1.91e2cf17b', 279, 48);
  //   setEleWidthHeight('t-text-6bb1.91e2cf17b', 116, 32);
  //   //基本信息2 t-text-4ee0.be6da556f
  //   // setEleLeftTop('t-text-2eea.a40a7b172', 959, 318);
  //   // setEleWidthHeight('t-text-2eea.a40a7b172', 130, 32);
  //   // document.getElementById('t-text-2eea.a40a7b172').style.maxWidth = '130px';
  //   setEleLeftTop('t-rect-e6c3.7cf031a64', 399, 48);
  //   setEleWidthHeight('t-rect-e6c3.7cf031a64', 130, 32);
  //   // 基本信息3 t-text-4ee0.be6da556f
  //   setEleLeftTop('t-text-f5ee.8e2641b3f', 533, 48);
  //   setEleWidthHeight('t-text-f5ee.8e2641b3f', 116, 32);
  //   //基本信息3 t-text-4ee0.be6da556f
  //   // setEleLeftTop('t-text-3508.a591123ff', 1213, 318);
  //   // setEleWidthHeight('t-text-3508.a591123ff', 130, 32);
  //   // document.getElementById('t-text-3508.a591123ff').style.maxWidth = '130px';
  //   setEleLeftTop('t-rect-c879.6bfd0fc04', 653, 48);
  //   setEleWidthHeight('t-rect-c879.6bfd0fc04', 130, 32);
  //   // 监测信息标题 
  //   // setEleLeftTop('t-rect-393c.8514376e3', 574, 372);
  //   // setEleWidthHeight('t-rect-393c.8514376e3', 772, 28);
  //   // document.getElementById('t-rect-393c.8514376e3').style.backgroundImage = 'var(--dialog-first-title-bg)';
  //   setEleLeftTop('t-text-3b1e.168d56d37', 52, 107);

  //   setEleLeftTop('t-component-c920.3666334b9', 14, 102);
  //   setEleWidthHeight('t-component-c920.3666334b9', 772, 28);

  //   // 监测信息1 t-rect-42f5.98f328594
  //   setEleLeftTop('t-rect-42f5.98f328594', 20, 142);
  //   setEleWidthHeight('t-rect-42f5.98f328594', 140, 96);
  //   // 1
  //   setEleLeftTop('t-text-0b5f.95fb4f471', -18, 147);//557
  //   //2
  //   setEleLeftTop('t-text-9971.a3a1b714f', 11, 172);
  //   //3
  //   setEleLeftTop('t-text-c493.73954dde', 9, 202);
  //   //4
  //   setEleLeftTop('t-text-d9af.3514f0aea', 42, 201);
  //   // t-line-e77e.699b65824
  //   setEleWidthHeight('t-line-e77e.699b65824', 120, 1);
  //   setEleLeftTop('t-line-e77e.699b65824', 30, 203);

  //   // 监测信息2 t-rect-7f5a.34aa5732d
  //   setEleLeftTop('t-rect-ee58.ec363f16f', 176, 142);
  //   setEleWidthHeight('t-rect-ee58.ec363f16f', 140, 96);
  //   // 1
  //   setEleLeftTop('t-text-ce30.b7442c4bd', 138, 147);//713
  //   //2
  //   setEleLeftTop('t-text-29e4.db353930f', 168, 172);
  //   //3
  //   setEleLeftTop('t-text-eb9b.70fbfe2f7', 165, 202);
  //   //4
  //   setEleLeftTop('t-text-2ce9.e0f2b417b', 198, 201);
  //   //t-line-4fa1.fec9b7bdb
  //   setEleWidthHeight('t-line-4fa1.fec9b7bdb', 120, 1);
  //   setEleLeftTop('t-line-4fa1.fec9b7bdb', 186, 203);

  //   // 监测信息3 t-rect-7f5a.34aa5732d
  //   setEleLeftTop('t-rect-7f5a.34aa5732d', 329, 142);
  //   setEleWidthHeight('t-rect-7f5a.34aa5732d', 140, 96);
  //   // 1
  //   setEleLeftTop('t-text-0e4f.77400bf27', 293, 147);
  //   //2
  //   setEleLeftTop('t-text-0a63.a776a33cc', 320, 172);
  //   //3
  //   setEleLeftTop('t-text-1367.a71cf7bfd', 316, 202);
  //   //4
  //   setEleLeftTop('t-text-1ed0.7ce5dbb29', 349, 201);
  //   //t-line-3271.aadad7b27
  //   setEleWidthHeight('t-line-3271.aadad7b27', 120, 1);
  //   setEleLeftTop('t-line-3271.aadad7b27', 339, 203);

  //   // 监测信息4 t-rect-7f5a.34aa5732d
  //   setEleLeftTop('t-rect-2b94.c07ca9632', 485, 142);
  //   setEleWidthHeight('t-rect-2b94.c07ca9632', 140, 96);
  //   // 1
  //   setEleLeftTop('t-text-6c1b.dc3ef36b4', 440, 147);
  //   //2
  //   setEleLeftTop('t-text-7b41.d95fd0d5f', 480, 172);
  //   //3
  //   setEleLeftTop('t-text-6397.ea83e2c6', 479, 202);
  //   //4
  //   setEleLeftTop('t-text-1f19.18ae342c9', 512, 201);
  //   //t-line-1f43.df746c56b
  //   setEleWidthHeight('t-line-1f43.df746c56b', 120, 1);
  //   setEleLeftTop('t-line-1f43.df746c56b', 494, 203);

  //   // 监测信息5 t-rect-7f5a.34aa5732d
  //   setEleLeftTop('t-rect-b4af.ffb065289', 640, 142);
  //   setEleWidthHeight('t-rect-b4af.ffb065289', 140, 96);
  //   // 1
  //   setEleLeftTop('t-text-1816.f4b232eb6', 596, 147);
  //   //2
  //   setEleLeftTop('t-text-b7aa.e2dc48b56', 627, 172);
  //   //3
  //   setEleLeftTop('t-text-db37.bf5a0a8d3', 625, 202);
  //   //4
  //   setEleLeftTop('t-text-3ca7.1b3a0e595', 658, 201);
  //   //t-line-87d8.1d1731768
  //   setEleWidthHeight('t-line-87d8.1d1731768', 120, 1);
  //   setEleLeftTop('t-line-87d8.1d1731768', 650, 203);

  //   // 变化趋势标题 t-rect-a803.5fb3f60ec t-text-c418.31126393f
  //   setEleLeftTop('t-rect-f4c2.9a8902b1d', 13, 255);//361
  //   setEleWidthHeight('t-rect-f4c2.9a8902b1d', 775, 26);
  //   document.getElementById('t-rect-f4c2.9a8902b1d').style.backgroundImage = 'var(--dialog-second-title-bg)';
  //   setEleLeftTop('t-text-bdd6.c423f04', 42, 254);

  //   state.lineChartOption.grid.top = "15%";
  //   // 时间
  //   setEleLeftTop('t-text-e38d.91fa0cc13', 26, 291);
  //   setEleLeftTop('t-date-picker-804d.4d03ce696', 71, 290);
  //   // 筛选
  //   setEleLeftTop('t-text-4f1f.acd709c97', 549, 291);
  //   setEleLeftTop('t-select-c691.44a8e38af', 620, 292);
  //   setTimeout(() => {
  //     // 折线图t-chart-design-72be.7d8d90979
  //     setEleLeftTop('t-chart-design-72be.7d8d90979', 25, 339);
  //     setEleWidthHeight('t-chart-design-72be.7d8d90979', 750, 252);
  //     let element = document.getElementById('t-chart-design-72be.7d8d90979');
  //     if (element) {
  //       element.style.opacity = '1';
  //     }
  //   });
  //   setEleLeftTop('t-text-7f3a.e3d1ed979', 25, 339);
  //   setEleWidthHeight('t-text-7f3a.e3d1ed979', 750, 252);
  //   setTimeout(() => {
  //     state.lineChartOption.legend.textStyle.fontSize = 14;
  //     state.lineChartOption.yAxis[0].nameTextStyle.fontSize = 14;
  //     state.lineChartOption.yAxis[0].axisLabel.fontSize = 12;
  //     state.lineChartOption.yAxis[1].nameTextStyle.fontSize = 14;
  //     state.lineChartOption.yAxis[1].axisLabel.fontSize = 12;
  //     state.lineChartOption.xAxis.axisLabel.fontSize = 12;
  //     state.lineChartOption.tooltip.textStyle.fontSize = 14;
  //   })
  })
}
};
const setTime = (data) => {
console.log(data, '时间');
state.START_MONITORTIME = data[0];
state.END_MONITORTIME = data[1];
apiRegistry.getMessageData.request();
};
const ondateChange1723452092899 = (data) => {
// 执行自定义方法
setTime(data);
};
const onchange1723451925888 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
setSelect(selectValueArr);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getBaseData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"state.MONITORTIME","END_MONITORTIME":"","START_MONITORTIME":"","POINT_CODE":"state.pointCode","interfaceId":"1192229dd8a61546199a3132690ffa45"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.MONITORTIME,"END_MONITORTIME":"","START_MONITORTIME":"","POINT_CODE":state.pointCode,"interfaceId":"1192229dd8a61546199a3132690ffa45"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":state.MONITORTIME,"END_MONITORTIME":"","START_MONITORTIME":"","POINT_CODE":state.pointCode,"interfaceId":"1192229dd8a61546199a3132690ffa45"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseData'] = res.data;
                
     
// handleNoVal
state.baseMessage = {
  "JZZLL_AVG": "--",
  "STJZLL_AVG": "--",
  "SSZLL_AVG": "--",
  "ZMZLL_AVG": "--",
  "JZZLL_STD": "--",
  "STJZLL_STD": "--",
  "SSZLL_STD": "--",
  "ZMZLL_STD": "--",
  "SKSW_AVG": "--",
  "SKSW_STD": "--"
};


if (res.status === 200 && res.data.data) {
  const { data } = res.data;
  Object.keys(state.baseMessage).forEach((key) => {
    // data[0][key] = data[0][key] ? Number(data[0][key]).toFixed(2) : data[0][key];
    // if (key === 'SSZLL_AVG') {
    //   state.baseMessage[key] = handleNoVal(data[0][key]) + '（m\u00B3/s）';
    // } else {
    //   state.baseMessage[key] = handleNoVal(data[0][key]);
    // }
    state.baseMessage[key] = handleNoVal(data[0][key]);
    global.waterStationDialogGlobalVariables.baseMessage[key] = handleNoVal(data[0][key])

  });
  console.log(state.baseMessage)
} else {
  state.baseMessage = {
    "JZZLL_AVG": "--",
    "STJZLL_AVG": "--",
    "SSZLL_AVG": "--",
    "ZMZLL_AVG": "--",
    "JZZLL_STD": "--",
    "STJZLL_STD": "--",
    "SSZLL_STD": "--",
    "ZMZLL_STD": "--",
    "SKSW_AVG": "--",
    "SKSW_STD": "--"
  };

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
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","interfaceId":"1d93d9ecd3f5e8538294fd1dcf95d696"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"interfaceId":"1d93d9ecd3f5e8538294fd1dcf95d696"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"interfaceId":"1d93d9ecd3f5e8538294fd1dcf95d696"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTime'] = res.data;
                
     
if (res.status === 200 && res.data.data) {
  state.time = handleNoVal(res.data.data.MEASURE_TIME) + ':00:00';
  state.MONITORTIME = res.data.data.MEASURE_TIME;
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
 getBaseInfoData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"REGION_CODE":"","AREA_CODE":"","POINT_CODE":"state.pointCode","interfaceId":"7e8c2f554de236786c4fe56cfbdab4ca"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":"","AREA_CODE":"","POINT_CODE":state.pointCode,"interfaceId":"7e8c2f554de236786c4fe56cfbdab4ca"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"REGION_CODE":"","AREA_CODE":"","POINT_CODE":state.pointCode,"interfaceId":"7e8c2f554de236786c4fe56cfbdab4ca"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfoData'] = res.data;
                
     // handleNoVal
state.baseInfo = {
  "WATER_LEVEL": "--",
  "IF_MKH_NAME": "--",
  "WSYSTEM_NAME": "--",
  "POINT_NAME": "--"
};
if (res.status === 200 && res.data.data.length) {
  const { data } = res.data;
  Object.keys(state.baseInfo).forEach((key) => {
    state.baseInfo[key] = handleNoVal(data[0][key]);
  });
  rootData.rootSocket.emit('message', {    
    type: 'dialogInfo',
    room: global.socketRoom,
    data: {
      title:state.baseInfo['POINT_NAME'],
      id:"hydropowerStation",
      maxWidth:1710,
      minWidth:680
    },
  });

}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.baseInfo = {
  "WATER_LEVEL": "--",
  "IF_MKH_NAME": "--",
  "WSYSTEM_NAME": "--",
  "POINT_NAME": "--"
};
      reject(error);
    });
  });
},
              },
// 接口函数
 getBaseTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"BUS_TYPE":"3","POINT_CODE":"state.pointCode","interfaceId":"b1d59e1a1ed5253b7e9dd48198d83909"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"BUS_TYPE":"3","POINT_CODE":state.pointCode,"interfaceId":"b1d59e1a1ed5253b7e9dd48198d83909"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"BUS_TYPE":"3","POINT_CODE":state.pointCode,"interfaceId":"b1d59e1a1ed5253b7e9dd48198d83909"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseTime'] = res.data;
                
     if (res.status === 200 && res.data.data) {
  const { data } = res.data;
  state.START_MONITORTIME = data.START_MONITORTIME_DAY;// START_MONITORTIME_HOUR
  state.END_MONITORTIME = data.END_MONITORTIME_DAY; // END_MONITORTIME_HOUR
  state.timeArr = [state.START_MONITORTIME, state.END_MONITORTIME];
} else {
  state.timeArr = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.timeArr = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getMessageData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"","END_MONITORTIME":"state.END_MONITORTIME","START_MONITORTIME":"state.START_MONITORTIME","POINT_CODE":"state.pointCode","interfaceId":"1192229dd8a61546199a3132690ffa45"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":"","END_MONITORTIME":state.END_MONITORTIME,"START_MONITORTIME":state.START_MONITORTIME,"POINT_CODE":state.pointCode,"interfaceId":"1192229dd8a61546199a3132690ffa45"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":"","END_MONITORTIME":state.END_MONITORTIME,"START_MONITORTIME":state.START_MONITORTIME,"POINT_CODE":state.pointCode,"interfaceId":"1192229dd8a61546199a3132690ffa45"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMessageData'] = res.data;
                
     state.noData = '加载中...';
state.isShow = true;
if (res.status === 200 && res.data.data.length > 0) {
  debugger
  const { data } = res.data;
  console.log(state.START_MONITORTIME)

  let maxTime = data[0].MEASURE_TIME;
  let minTime = data[0].MEASURE_TIME;

  data.forEach(item => {
    if (item.MEASURE_TIME > maxTime) maxTime = item.MEASURE_TIME;
    if (item.MEASURE_TIME < minTime) minTime = item.MEASURE_TIME;
  });
  maxTime = maxTime.substring(0, 10)
  minTime = minTime.substring(0, 10)
  if(maxTime == state.END_MONITORTIME && state.START_MONITORTIME == minTime){
    state.charData = data;
  }
  setTimeout(() => {
    setRadio();
  })
} else {
  state.noData = '暂无数据';
  state.isShow = true;
  state.isShowChar = false;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.noData = '暂无数据';
state.isShow = true;
state.isShowChar = false;
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-hydropowerStationBaseInfo', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-hydropowerStationBaseInfo', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initVariableValue();
// 执行自定义方法
setOption();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tChartDesignx0x1ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x1.default, componentState.tChartDesignx0x1?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRowx0x7ComputedData = computed(() => _.merge({}, componentState.tRowx0x7.default, componentState.tRowx0x7?.[state.screenSize]));

 const tColx0x7x0ComputedData = computed(() => _.merge({}, componentState.tColx0x7x0.default, componentState.tColx0x7x0?.[state.screenSize]));

 const tComponentx0x7x0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7x0x0.default, componentState.tComponentx0x7x0x0?.[state.screenSize]));

 const tComponentx0x7x0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7x0x1.default, componentState.tComponentx0x7x0x1?.[state.screenSize]));

 const tComponentx0x7x0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7x0x2.default, componentState.tComponentx0x7x0x2?.[state.screenSize]));

 const tComponentx0x7x0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7x0x3.default, componentState.tComponentx0x7x0x3?.[state.screenSize]));

 const tComponentx0x7x0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7x0x4.default, componentState.tComponentx0x7x0x4?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tRowx0x10ComputedData = computed(() => _.merge({}, componentState.tRowx0x10.default, componentState.tRowx0x10?.[state.screenSize]));

 const tColx0x10x0ComputedData = computed(() => _.merge({}, componentState.tColx0x10x0.default, componentState.tColx0x10x0?.[state.screenSize]));

 const tComponentx0x10x0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x10x0x0.default, componentState.tComponentx0x10x0x0?.[state.screenSize]));

 const tTextx0x10x0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x10x0x1.default, componentState.tTextx0x10x0x1?.[state.screenSize]));

 const tRowx0x11ComputedData = computed(() => _.merge({}, componentState.tRowx0x11.default, componentState.tRowx0x11?.[state.screenSize]));

 const tColx0x11x0ComputedData = computed(() => _.merge({}, componentState.tColx0x11x0.default, componentState.tColx0x11x0?.[state.screenSize]));

 const tRectx0x11x0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x11x0x0.default, componentState.tRectx0x11x0x0?.[state.screenSize]));

 const tTextx0x11x0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x0x1.default, componentState.tTextx0x11x0x1?.[state.screenSize]));

 const tColx0x11x1ComputedData = computed(() => _.merge({}, componentState.tColx0x11x1.default, componentState.tColx0x11x1?.[state.screenSize]));

 const tTextx0x11x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x1x0.default, componentState.tTextx0x11x1x0?.[state.screenSize]));

 const tRectx0x11x1x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x11x1x1.default, componentState.tRectx0x11x1x1?.[state.screenSize]));

 const tColx0x11x2ComputedData = computed(() => _.merge({}, componentState.tColx0x11x2.default, componentState.tColx0x11x2?.[state.screenSize]));

 const tTextx0x11x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x2x0.default, componentState.tTextx0x11x2x0?.[state.screenSize]));

 const tRectx0x11x2x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x11x2x1.default, componentState.tRectx0x11x2x1?.[state.screenSize]));

 const tRowx0x12ComputedData = computed(() => _.merge({}, componentState.tRowx0x12.default, componentState.tRowx0x12?.[state.screenSize]));

 const tColx0x12x0ComputedData = computed(() => _.merge({}, componentState.tColx0x12x0.default, componentState.tColx0x12x0?.[state.screenSize]));

 const tComponentx0x12x0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x12x0x0.default, componentState.tComponentx0x12x0x0?.[state.screenSize]));

 const tTextx0x12x0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x12x0x1.default, componentState.tTextx0x12x0x1?.[state.screenSize]));

 const tRowx0x13ComputedData = computed(() => _.merge({}, componentState.tRowx0x13.default, componentState.tRowx0x13?.[state.screenSize]));

 const tColx0x13x0ComputedData = computed(() => _.merge({}, componentState.tColx0x13x0.default, componentState.tColx0x13x0?.[state.screenSize]));

 const tTextx0x13x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x13x0x0.default, componentState.tTextx0x13x0x0?.[state.screenSize]));

 const tDatePickerx0x13x0x1ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x13x0x1.default, componentState.tDatePickerx0x13x0x1?.[state.screenSize]));

 const tColx0x13x1ComputedData = computed(() => _.merge({}, componentState.tColx0x13x1.default, componentState.tColx0x13x1?.[state.screenSize]));

 const tTextx0x13x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x13x1x0.default, componentState.tTextx0x13x1x0?.[state.screenSize]));

 const tSelectx0x13x1x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x13x1x1.default, componentState.tSelectx0x13x1x1?.[state.screenSize]));

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
tChartDesignx0x1ComputedData,
tTextx0x2ComputedData,
tRowx0x7ComputedData,
tColx0x7x0ComputedData,
tComponentx0x7x0x0ComputedData,
tComponentx0x7x0x1ComputedData,
tComponentx0x7x0x2ComputedData,
tComponentx0x7x0x3ComputedData,
tComponentx0x7x0x4ComputedData,
tRectx0x8ComputedData,
tTextx0x9ComputedData,
tRowx0x10ComputedData,
tColx0x10x0ComputedData,
tComponentx0x10x0x0ComputedData,
tTextx0x10x0x1ComputedData,
tRowx0x11ComputedData,
tColx0x11x0ComputedData,
tRectx0x11x0x0ComputedData,
tTextx0x11x0x1ComputedData,
tColx0x11x1ComputedData,
tTextx0x11x1x0ComputedData,
tRectx0x11x1x1ComputedData,
tColx0x11x2ComputedData,
tTextx0x11x2x0ComputedData,
tRectx0x11x2x1ComputedData,
tRowx0x12ComputedData,
tColx0x12x0ComputedData,
tComponentx0x12x0x0ComputedData,
tTextx0x12x0x1ComputedData,
tRowx0x13ComputedData,
tColx0x13x0ComputedData,
tTextx0x13x0x0ComputedData,
tDatePickerx0x13x0x1ComputedData,
tColx0x13x1ComputedData,
tTextx0x13x1x0ComputedData,
tSelectx0x13x1x1ComputedData,
ondateChange1723452092899,
onchange1723451925888,
};
},
}
</script>

<style scoped>
.t-l-c-hydropowerStationBaseInfo {
position: relative;
overflow: hidden;
--theme-color: var(--t-brand8);
z-index: 2;
--theme-color-opacity-15: rgba(var(--t-brand8), .15);
pointer-events: auto;
filter: ;
--theme-color-opacity-90: rgba(var(--t-brand8), .9);
--theme-color-opacity-80: rgba(var(--t-brand8), .8);
width: 96%;
margin: 20px auto;
--theme-color-opacity-60: rgba(var(--t-brand8), .6);
position: Relative;
--theme-color-opacity-40: rgba(var(--t-brand8), .4);
--theme-color-opacity-10: rgba(var(--t-brand8), .1);
height: 950px;
background-color: rgba(0,0,0,0);
}
.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-chart-design-0-1 {
position: absolute !important;
top: 380px;
left: 2px;
width: 100%;
height: 560px;
pointer-events: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-text-0-2 {
position: absolute !important;
top: 350px;
left: 0px;
width: 100%;
height: 252px;
pointer-events: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-row-0-7 {
position: absolute !important;
top: 156px;
left: 2px;
width: 100%;
height: 96px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-col-0-7-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-component-0-7-0-0 {
position: unset;
top: 0px;
left: 0px;
width: 25%;
height: 100%;
pointer-events: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-component-0-7-0-1 {
position: unset;
top: 16px;
left: 377px;
width: 25%;
height: 100%;
pointer-events: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-component-0-7-0-2 {
position: unset;
top: 26px;
left: 387px;
width: 25%;
height: 100%;
pointer-events: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-component-0-7-0-3 {
position: unset;
top: 36px;
left: 397px;
width: 25%;
height: 100%;
pointer-events: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-component-0-7-0-4 {
position: unset;
top: 46px;
left: 407px;
width: 25%;
height: 100%;
pointer-events: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-rect-0-8 {
position: absolute !important;
top: 271px;
left: 21px;
width: 775px;
height: 26px;
pointer-events: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-text-0-9 {
position: absolute !important;
top: 270px;
left: 50px;
width: 144px;
height: 26px;
pointer-events: none;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-row-0-10 {
position: absolute !important;
top: 0px;
left: -1px;
width: 100%;
height: 28px;
pointer-events: auto;
align-items: center;
background: rgba(0, 0, 0, 0);
fill-type: color;
display: flex;
justify-content: center;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-col-0-10-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
align-items: center;
flex-direction: row;
display: flex;
gap: auto;
justify-content: center;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-component-0-10-0-0 {
position: unset;
top: 0px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-text-0-10-0-1 {
position: unset;
top: 3px;
left: 0px;
width: 96px;
height: 18px;
pointer-events: none;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-row-0-11 {
position: absolute !important;
top: 33px;
left: 0px;
width: 100%;
height: 59px;
pointer-events: auto;
align-items: center;
display: flex;
justify-content: center;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-col-0-11-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
align-items: center;
background: rgba(124, 27, 27, 0);
fill-type: color;
flex-direction: row-reverse;
display: flex;
justify-content: left;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-rect-0-11-0-0 {
position: unset;
top: 59px;
left: 143px;
width: 130px;
height: 32px;
pointer-events: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-text-0-11-0-1 {
position: unset;
top: 61px;
left: 25px;
width: 116px;
height: 32px;
pointer-events: none;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-col-0-11-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
align-items: center;
display: flex;
justify-content: center;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-text-0-11-1-0 {
position: unset;
top: 58px;
left: 279px;
width: 116px;
height: 32px;
pointer-events: none;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-rect-0-11-1-1 {
position: unset;
top: 58px;
left: 399px;
width: 130px;
height: 32px;
pointer-events: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-col-0-11-2 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
align-items: center;
display: flex;
justify-content: center;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-text-0-11-2-0 {
position: unset;
top: 58px;
left: 533px;
width: 116px;
height: 32px;
pointer-events: none;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-rect-0-11-2-1 {
position: unset;
top: 58px;
left: 653px;
width: 130px;
height: 32px;
pointer-events: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-row-0-12 {
position: absolute !important;
top: 105px;
left: 0px;
width: 100%;
height: 41px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-col-0-12-0 {
position: relative;
top: null;
left: null;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-component-0-12-0-0 {
position: unset;
top: 10px;
left: 10px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-text-0-12-0-1 {
position: unset;
top: 13px;
left: 10px;
width: 96px;
height: 18px;
pointer-events: none;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-row-0-13 {
position: absolute !important;
top: 298px;
left: 0px;
width: 100%;
height: 74px;
pointer-events: auto;
display: flex;
justify-content: space-between;
align-items: center;
gap: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-col-0-13-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
padding-left: 10px;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-text-0-13-0-0 {
position: unset;
top: 301px;
left: 26px;
width: auto;
height: 32px;
pointer-events: none;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-date-picker-0-13-0-1 {
position: unset;
top: 300px;
left: 71px;
width: auto;
height: 32px;
pointer-events: auto;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-col-0-13-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
padding-right: 10px;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-text-0-13-1-0 {
position: unset;
top: 301px;
left: 549px;
width: auto;
height: 32px;
pointer-events: none;
}

.t-l-c-hydropowerStationBaseInfo .hydropowerStationBaseInfo-t-select-0-13-1-1 {
position: unset;
top: 302px;
left: 622px;
width: 152px;
height: 32px;
pointer-events: auto;
}
</style>
