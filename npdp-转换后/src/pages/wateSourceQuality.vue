<template>
  <div id="t-l-c-wateSourceQuality" class="t-l-c-wateSourceQuality" ><t-rect id="t-rect-0d13.8ce6744a1" class="wateSourceQuality-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-6015.c54bdb54b" class="wateSourceQuality-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-select id="t-select-ec77.0bbc6ebb7" class="wateSourceQuality-t-select-0-2"  :active-value="replaceCssVariables(filterData(state.selectedCity, componentPropBindingMap?.['t-select-ec77.0bbc6ebb7']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.cityOptions, componentPropBindingMap?.['t-select-ec77.0bbc6ebb7']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x2ComputedData.alias" :multiple="tSelectx0x2ComputedData.multiple" :placeholder="tSelectx0x2ComputedData.placeholder" :clearable="tSelectx0x2ComputedData.clearable" :disabled="tSelectx0x2ComputedData.disabled" :name="tSelectx0x2ComputedData.name" :autocomplete="tSelectx0x2ComputedData.autocomplete" :filterable="tSelectx0x2ComputedData.filterable" :no-match-text="tSelectx0x2ComputedData.no-match-text" :no-data-text="tSelectx0x2ComputedData.no-data-text" :c-style="tSelectx0x2ComputedData.cStyle" @change="onchange1733381589566"></t-select><t-search id="t-search-e042.45046f90a" class="wateSourceQuality-t-search-0-3"  :type="tSearchx0x3ComputedData.type" :input-value="replaceCssVariables(filterData(state.drinkName, componentPropBindingMap?.['t-search-e042.45046f90a']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x3ComputedData.maxlength" :minlength="tSearchx0x3ComputedData.minlength" :show-word-limit="tSearchx0x3ComputedData.showWordLimit" :placeholder="tSearchx0x3ComputedData.placeholder" :clearable="tSearchx0x3ComputedData.clearable" :show-password="tSearchx0x3ComputedData.showPassword" :disabled="tSearchx0x3ComputedData.disabled" :prefix-icon="tSearchx0x3ComputedData.prefix-icon" :suffix-icon="tSearchx0x3ComputedData.suffix-icon" :rows="tSearchx0x3ComputedData.rows" :autosize="tSearchx0x3ComputedData.autosize" :name="tSearchx0x3ComputedData.name" :readonly="tSearchx0x3ComputedData.readonly" :step="tSearchx0x3ComputedData.step" :autofocus="tSearchx0x3ComputedData.autofocus" :form="tSearchx0x3ComputedData.form" :label="tSearchx0x3ComputedData.label" :tabindex="tSearchx0x3ComputedData.tabindex" :validate-event="tSearchx0x3ComputedData.validateEvent" :c-style="tSearchx0x3ComputedData.cStyle" :has-search-btn="tSearchx0x3ComputedData.hasSearchBtn" @input="oninput1734340383119"></t-search><t-date-picker id="t-date-picker-f926.d544bc7bd" class="wateSourceQuality-t-date-picker-0-4"  :placeholder="tDatePickerx0x4ComputedData.placeholder" :start-placeholder="tDatePickerx0x4ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x4ComputedData.endPlaceholder" :type="tDatePickerx0x4ComputedData.type" :clearable="tDatePickerx0x4ComputedData.clearable" :range-separator="tDatePickerx0x4ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-f926.d544bc7bd']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x4ComputedData.separator" :readonly="tDatePickerx0x4ComputedData.readonly" :editable="tDatePickerx0x4ComputedData.editable" :c-style="tDatePickerx0x4ComputedData.cStyle" @date-change="ondateChange1733725900639"></t-date-picker><t-component id="t-component-d4cb.751b0914c" class="wateSourceQuality-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName" :page-id="tComponentx0x5ComputedData.pageId" :page-code="tComponentx0x5ComputedData.pageCode"></t-component><t-component id="t-component-f1ed.f734467c6" class="wateSourceQuality-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName"></t-component><t-text id="t-text-a953.2e9043d7a" class="wateSourceQuality-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle"></t-text><t-text id="t-text-e93c.2cd5cf63e" class="wateSourceQuality-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle"></t-text><t-rect id="t-rect-c6dd.837925a1d" class="wateSourceQuality-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle"></t-rect><t-table id="t-table-e47b.adbcd093f" class="wateSourceQuality-t-table-0-11"  :height="tTablex0x11ComputedData.height" :stripe="tTablex0x11ComputedData.stripe" :border="tTablex0x11ComputedData.border" :auto-scroll="tTablex0x11ComputedData.autoScroll" :speed="tTablex0x11ComputedData.speed" :columns="tTablex0x11ComputedData.columns" :data="replaceCssVariables(filterData(state.list, componentPropBindingMap?.['t-table-e47b.adbcd093f']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x11ComputedData.defaultSort" :c-style="tTablex0x11ComputedData.cStyle" @cell-click="oncellClick1733731910393"></t-table><t-rect id="t-rect-babc.0c0777238" class="wateSourceQuality-t-rect-0-12"  :tip="tRectx0x12ComputedData.tip" :label="tRectx0x12ComputedData.label" :active="tRectx0x12ComputedData.active" :c-style="tRectx0x12ComputedData.cStyle"></t-rect><t-rect id="t-rect-21a9.06dc690e9" class="wateSourceQuality-t-rect-0-14"  :tip="tRectx0x14ComputedData.tip" :label="tRectx0x14ComputedData.label" :active="tRectx0x14ComputedData.active" :c-style="tRectx0x14ComputedData.cStyle"></t-rect><t-circle id="t-circle-b618.38c508836" class="wateSourceQuality-t-circle-0-15"  :tip="tCirclex0x15ComputedData.tip" :label="tCirclex0x15ComputedData.label" :active="tCirclex0x15ComputedData.active" :c-style="tCirclex0x15ComputedData.cStyle"></t-circle><t-row id="t-row-17c7.9b869ebae" class="wateSourceQuality-t-row-0-16"  :c-style="tRowx0x16ComputedData.cStyle" :gutter="tRowx0x16ComputedData.gutter" :justify="tRowx0x16ComputedData.justify" :align="tRowx0x16ComputedData.align"><t-text id="t-text-adbd.3537a766b" class="wateSourceQuality-t-text-0-16-0"  :label="replaceCssVariables(filterData(state.count.STANDARDRATE, componentPropBindingMap?.['t-text-adbd.3537a766b']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x16x0ComputedData.editable" :c-style="tTextx0x16x0ComputedData.cStyle"></t-text><t-text id="t-text-cbb6.92e398c28" class="wateSourceQuality-t-text-0-16-1"  :label="tTextx0x16x1ComputedData.label" :editable="tTextx0x16x1ComputedData.editable" :c-style="tTextx0x16x1ComputedData.cStyle"></t-text></t-row><t-text id="t-text-4e96.1331370b2" class="wateSourceQuality-t-text-0-17"  :label="tTextx0x17ComputedData.label" :editable="tTextx0x17ComputedData.editable" :c-style="tTextx0x17ComputedData.cStyle"></t-text><t-row id="t-row-571a.ec6222f1" class="wateSourceQuality-t-row-0-18"  :c-style="tRowx0x18ComputedData.cStyle" :gutter="tRowx0x18ComputedData.gutter" :justify="tRowx0x18ComputedData.justify" :align="tRowx0x18ComputedData.align"><t-text id="t-text-95e7.c41297e9a" class="wateSourceQuality-t-text-0-18-0"  :label="replaceCssVariables(filterData(state.count.STANDARDCOUNT, componentPropBindingMap?.['t-text-95e7.c41297e9a']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x18x0ComputedData.editable" :c-style="tTextx0x18x0ComputedData.cStyle"></t-text><t-text id="t-text-538b.7722ec7c1" class="wateSourceQuality-t-text-0-18-1"  :label="tTextx0x18x1ComputedData.label" :editable="tTextx0x18x1ComputedData.editable" :c-style="tTextx0x18x1ComputedData.cStyle"></t-text><t-text id="t-text-8fa9.30938bc1" class="wateSourceQuality-t-text-0-18-2"  :label="replaceCssVariables(filterData(state.count.ACTUALDRINKCOUNT, componentPropBindingMap?.['t-text-8fa9.30938bc1']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x18x2ComputedData.editable" :c-style="tTextx0x18x2ComputedData.cStyle"></t-text></t-row><t-image-base id="t-image-base-7b58.38f029a2f" class="wateSourceQuality-t-image-base-0-19"  :src="tImageBasex0x19ComputedData.src" :fit="tImageBasex0x19ComputedData.fit" :c-style="tImageBasex0x19ComputedData.cStyle"></t-image-base><t-chart-pie-percent id="t-chart-pie-percent-3ef3.0072ddd99" class="wateSourceQuality-t-chart-pie-percent-0-20"  :empty-img="tChartPiePercentx0x20ComputedData.emptyImg" :data="replaceCssVariables(filterData(state.percent.bzsl, componentPropBindingMap?.['t-chart-pie-percent-3ef3.0072ddd99']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :series-style="tChartPiePercentx0x20ComputedData.seriesStyle" :c-style="tChartPiePercentx0x20ComputedData.cStyle" :options="tChartPiePercentx0x20ComputedData.options" :pie="componentState.tChartPiePercentx0x20.pie"></t-chart-pie-percent><t-text-unit id="t-text-unit-ae5c.d1d7ef971" class="wateSourceQuality-t-text-unit-0-21"  :c-style="tTextUnitx0x21ComputedData.cStyle" :justify="tTextUnitx0x21ComputedData.justify" :align="tTextUnitx0x21ComputedData.align" :content="replaceCssVariables(filterData(state.percent.bzsl, componentPropBindingMap?.['t-text-unit-ae5c.d1d7ef971']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x21ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x21ComputedData.showOverflowTooltip"></t-text-unit><t-list-card id="t-list-card-5829.32d21a18c" class="wateSourceQuality-t-list-card-0-22"  :data="replaceCssVariables(filterData(state.waterQuantityCard, componentPropBindingMap?.['t-list-card-5829.32d21a18c']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x22ComputedData.spacingX" :col="tListCardx0x22ComputedData.col" :direction="tListCardx0x22ComputedData.direction" :exchange-order="tListCardx0x22ComputedData.exchangeOrder" :unit-break="tListCardx0x22ComputedData.unitBreak" :key-field="tListCardx0x22ComputedData.keyField" :active-key-field="tListCardx0x22ComputedData.activeKeyField" :active="tListCardx0x22ComputedData.active" :c-style="tListCardx0x22ComputedData.cStyle"></t-list-card><t-rect id="t-rect-1163.3b60a5b33" class="wateSourceQuality-t-rect-0-23"  :tip="tRectx0x23ComputedData.tip" :label="tRectx0x23ComputedData.label" :active="tRectx0x23ComputedData.active" :c-style="tRectx0x23ComputedData.cStyle"></t-rect><t-circle id="t-circle-0f3d.70910f776" class="wateSourceQuality-t-circle-0-24"  :tip="tCirclex0x24ComputedData.tip" :label="tCirclex0x24ComputedData.label" :active="tCirclex0x24ComputedData.active" :c-style="tCirclex0x24ComputedData.cStyle"></t-circle><t-text id="t-text-c402.bfb4b9f6d" class="wateSourceQuality-t-text-0-25"  :label="tTextx0x25ComputedData.label" :editable="tTextx0x25ComputedData.editable" :c-style="tTextx0x25ComputedData.cStyle"></t-text><t-image-base id="t-image-base-75ff.1f7d816be" class="wateSourceQuality-t-image-base-0-26"  :src="tImageBasex0x26ComputedData.src" :fit="tImageBasex0x26ComputedData.fit" :c-style="tImageBasex0x26ComputedData.cStyle"></t-image-base><t-chart-pie-percent id="t-chart-pie-percent-4b9f.9ff4c4cfb" class="wateSourceQuality-t-chart-pie-percent-0-27"  :empty-img="tChartPiePercentx0x27ComputedData.emptyImg" :data="replaceCssVariables(filterData(state.percent.bhqhf, componentPropBindingMap?.['t-chart-pie-percent-4b9f.9ff4c4cfb']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :series-style="tChartPiePercentx0x27ComputedData.seriesStyle" :c-style="tChartPiePercentx0x27ComputedData.cStyle" :options="tChartPiePercentx0x27ComputedData.options" :pie="componentState.tChartPiePercentx0x27.pie"></t-chart-pie-percent><t-text-unit id="t-text-unit-7d26.14868d165" class="wateSourceQuality-t-text-unit-0-28"  :c-style="tTextUnitx0x28ComputedData.cStyle" :justify="tTextUnitx0x28ComputedData.justify" :align="tTextUnitx0x28ComputedData.align" :content="replaceCssVariables(filterData(state.percent.bhqhf, componentPropBindingMap?.['t-text-unit-7d26.14868d165']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x28ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x28ComputedData.showOverflowTooltip"></t-text-unit><t-button id="t-button-3753.04bc0774b" class="wateSourceQuality-t-button-0-29"  :label="tButtonx0x29ComputedData.label" :round="tButtonx0x29ComputedData.round" :plain="tButtonx0x29ComputedData.plain" :disabled="tButtonx0x29ComputedData.disabled" :type="tButtonx0x29ComputedData.type" :size="tButtonx0x29ComputedData.size" :native-type="tButtonx0x29ComputedData.native-type" :c-style="tButtonx0x29ComputedData.cStyle" @click="onclick1734422611294"></t-button><t-text-common id="t-text-common-092e.d0ef2a70e" class="wateSourceQuality-t-text-common-0-30"  :label="tTextCommonx0x30ComputedData.label" :editable="tTextCommonx0x30ComputedData.editable" :c-style="tTextCommonx0x30ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-aacc.d7549ee56" class="wateSourceQuality-t-text-common-0-31"  :label="tTextCommonx0x31ComputedData.label" :editable="tTextCommonx0x31ComputedData.editable" :c-style="tTextCommonx0x31ComputedData.cStyle"></t-text-common></div>
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
import { TButton, TChartPiePercent, TCircle, TComponent, TDatePicker, TImageBase, TListCard, TRect, TRow, TSearch, TSelect, TTable, TText, TTextCommon, TTextUnit } from '@ths/design';

export default {
  components: {
    TButton,
    TChartPiePercent,
    TCircle,
    TComponent,
    TDatePicker,
    TImageBase,
    TListCard,
    TRect,
    TRow,
    TSearch,
    TSelect,
    TTable,
    TText,
    TTextCommon,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-0d13.8ce6744a1":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-6015.c54bdb54b":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-select-ec77.0bbc6ebb7":{"attributeName":"tSelectx0x2","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-search-e042.45046f90a":{"attributeName":"tSearchx0x3","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-date-picker-f926.d544bc7bd":{"attributeName":"tDatePickerx0x4","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-d4cb.751b0914c":{"attributeName":"tComponentx0x5","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-f1ed.f734467c6":{"attributeName":"tComponentx0x6","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-a953.2e9043d7a":{"attributeName":"tTextx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e93c.2cd5cf63e":{"attributeName":"tTextx0x8","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-c6dd.837925a1d":{"attributeName":"tRectx0x9","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-7fda.42246af26":{"attributeName":"tRectx0x10"},"t-table-e47b.adbcd093f":{"attributeName":"tTablex0x11","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-babc.0c0777238":{"attributeName":"tRectx0x12","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f521.aa608f0db":{"attributeName":"tRectx0x13"},"t-rect-21a9.06dc690e9":{"attributeName":"tRectx0x14","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-b618.38c508836":{"attributeName":"tCirclex0x15","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-17c7.9b869ebae":{"attributeName":"tRowx0x16","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-adbd.3537a766b":{"attributeName":"tTextx0x16x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-cbb6.92e398c28":{"attributeName":"tTextx0x16x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-4e96.1331370b2":{"attributeName":"tTextx0x17","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-571a.ec6222f1":{"attributeName":"tRowx0x18","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-95e7.c41297e9a":{"attributeName":"tTextx0x18x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-538b.7722ec7c1":{"attributeName":"tTextx0x18x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8fa9.30938bc1":{"attributeName":"tTextx0x18x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-7b58.38f029a2f":{"attributeName":"tImageBasex0x19","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-pie-percent-3ef3.0072ddd99":{"attributeName":"tChartPiePercentx0x20","emptyImg":{"filters":[]},"data":{"filters":[]},"seriesStyle":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-text-unit-ae5c.d1d7ef971":{"attributeName":"tTextUnitx0x21","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-list-card-5829.32d21a18c":{"attributeName":"tListCardx0x22","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1163.3b60a5b33":{"attributeName":"tRectx0x23","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-0f3d.70910f776":{"attributeName":"tCirclex0x24","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-c402.bfb4b9f6d":{"attributeName":"tTextx0x25","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-75ff.1f7d816be":{"attributeName":"tImageBasex0x26","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-pie-percent-4b9f.9ff4c4cfb":{"attributeName":"tChartPiePercentx0x27","emptyImg":{"filters":[]},"data":{"filters":[]},"seriesStyle":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-text-unit-7d26.14868d165":{"attributeName":"tTextUnitx0x28","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-button-3753.04bc0774b":{"attributeName":"tButtonx0x29","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-092e.d0ef2a70e":{"attributeName":"tTextCommonx0x30","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-aacc.d7549ee56":{"attributeName":"tTextCommonx0x31","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   cityOptions: [{"label":"全部","value":"","disabled":false},{"value":"city","label":"地级","disabled":false},{"value":"county","label":"县级","disabled":false},{"value":"town","label":"乡镇级","disabled":false}],
   drinkWaterState: {},
   drinkName: "",
   percent: {"bhqhf":0,"bzsl":0},
   list: [],
   count: {"STANDARDCOUNT":0,"ACTUALDRINKCOUNT":0,"STANDARDRATE":0},
   waterQuantityCard: [{"title":"总数","num":0,"unit":"个","icon":"assets/images/2024-12-05/9318cb0685104a01ba0f6d8c0ad8dc9d.svg"},{"title":"地表水型","num":0,"unit":"个","icon":"assets/images/2024-12-05/afe9d3e0b36249acaeab422809287a6c.svg"},{"title":"地下水型","num":0,"unit":"个","icon":"assets/images/2024-12-05/6afe9e3395864daca876a23dd746587f.svg"}],
   timeValue: "",
   selectedCity: "",
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
            default: {"width":"448px","height":"64px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"448px","height":"64px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"201px","height":"140px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg10)","position":"unset","left":"229px","top":"277px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"201px","height":"140px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg10)","position":"unset","left":"229px","top":"277px","animationName":""}}}, 
 },
},
tSelectx0x2: {
defaultStyle: {
            default: {"width":"132px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"",
options:[{"label":"全部","value":"","disabled":false},{"value":"city","label":"地级","disabled":false},{"value":"county","label":"县级","disabled":false},{"value":"town","label":"乡镇级","disabled":false}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"132px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tSearchx0x3: {
defaultStyle: {
            default: {"width":"348px","height":"auto","position":"unset","left":"20px","top":"491px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-12)"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入关键字",
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
cStyle:{"wrapper":{"default":{"width":"348px","height":"auto","position":"unset","left":"20px","top":"491px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tDatePickerx0x4: {
defaultStyle: {
            default: {"width":"150px","height":"auto","position":"unset","left":"160px","top":"16px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","min-height":"30px","line-height":"normal","min-width":"132px","max-width":"none"},
            
            },
 default: { 
 
placeholder:"请选择时间",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"month",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"150px","height":"auto","position":"unset","left":"160px","top":"16px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","min-height":"30px","line-height":"normal","min-width":"132px","max-width":"none"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","min-height":"30px","line-height":"normal"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px","fontSize":"var(--business-text-size-14)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","fontSize":"var(--business-text-size-14)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-14)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"inputCloseIcons":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderYearBtnWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderYearBtn":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"186px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"186px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tComponentx0x6: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"449px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"449px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"247px","height":"auto","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"191px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""},
            
            },
 default: { 
 
label:"整体评价结果及管理现状",
editable:false,
cStyle:{"wrapper":{"default":{"width":"247px","height":"auto","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"191px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"244px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"454px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""},
            
            },
 default: { 
 
label:"水源地列表",
editable:false,
cStyle:{"wrapper":{"default":{"width":"244px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"454px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"410px","height":"44px","position":"unset","left":"20px","top":"229px","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"44px","position":"unset","left":"20px","top":"229px","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":""}},"num":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tTablex0x11: {
defaultStyle: {
            default: {"width":"410px","height":"284px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"284",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"44PX","type":"state","stateKey":"iconStatus"},{"label":"水源地名称","key":"DRINK_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"156PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"行政区","key":"REGION_NAME","align":"center","operationList":[],"stateList":[],"width":"62PX","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"}}},{"label":"水质现状","key":"WATERQUALITYLEVELNAME","stateKey":"CODE_WATERQUALITYLEVEL","align":"center","type":"state","operationList":[],"stateList":[{"name":"1","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"2","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"3","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"4","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"5","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"6","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"","borderWidth":"0PX"}}],"width":"68PX","style":{"fontStyle":{"fontSize":"var(--business-text-size-12)","width":"PX","height":"PX","borderRadius":"PX","background":""}}},{"label":"水源地问题","key":"QUES_COUNT","stateKey":"WATERQUALITYLEVELNAME","align":"center","type":"default","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(76, 179, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)"}},{"name":"Ⅱ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(88, 191, 108, 1) 100%,rgba(0, 0, 0, 1) 100%)"}},{"name":"Ⅲ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(181, 9, 9, 1) 100%,rgba(0, 0, 0, 1) 100%)"}},{"name":"Ⅳ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(88, 191, 108, 1) 100%,rgba(0, 0, 0, 1) 100%)"}},{"name":"Ⅴ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(88, 191, 108, 1) 100%,rgba(0, 0, 0, 1) 100%)"}},{"name":"劣Ⅴ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(229, 4, 4, 1) 100%,rgba(0, 0, 0, 1) 100%)"}},{"name":"-","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"","borderWidth":"0PX"}}],"width":"80PX","style":{"fontStyle":{"fontSize":"var(--business-text-size-12)","width":"PX","height":"PX","borderRadius":"PX","background":""}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"284px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tRectx0x12: {
defaultStyle: {
            default: {"width":"2px","height":"27px","position":"unset","left":"20px","top":"238px","backgroundColor":"var(--business-theme)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"2px","height":"27px","position":"unset","left":"20px","top":"238px","backgroundColor":"var(--business-theme)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":""}}}, 
 },
},
tRectx0x14: {
defaultStyle: {
            default: {"width":"1px","height":"17px","position":"unset","left":"238px","top":"242px","backgroundColor":"var(--business-theme)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"17px","position":"unset","left":"238px","top":"242px","backgroundColor":"var(--business-theme)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":""}}}, 
 },
},
tCirclex0x15: {
defaultStyle: {
            default: {"width":"113px","height":"113px","borderLeft":"5px solid var(--business-show-bg10)","borderTop":"5px solid var(--business-show-bg10)","borderRight":"5px solid var(--business-show-bg10)","borderBottom":"5px solid var(--business-show-bg10)","position":"unset","left":"273px","top":"292px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"113px","borderLeft":"5px solid var(--business-show-bg10)","borderTop":"5px solid var(--business-show-bg10)","borderRight":"5px solid var(--business-show-bg10)","borderBottom":"5px solid var(--business-show-bg10)","position":"unset","left":"273px","top":"292px","animationName":""}}}, 
 },
},
tRowx0x16: {
defaultStyle: {
            default: {"width":"83px","height":"21px","position":"unset","left":"327px","top":"240px","letterSpacing":"0px","animationName":"","fontWeight":"600"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"83px","height":"21px","position":"unset","left":"327px","top":"240px","letterSpacing":"0px","animationName":"","fontWeight":"600"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x16x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","position":"unset","left":"1161.2985817977992px","top":"1225.0131956048494px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"var(--business-num-size-18)","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold"},
            
            },
 default: { 
 
label:0,
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","position":"unset","left":"1161.2985817977992px","top":"1225.0131956048494px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"var(--business-num-size-18)","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold"}}}, 
 },
},
tTextx0x16x1: {
defaultStyle: {
            default: {"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","position":"unset","left":"996.6376171769348px","top":"1681.6463072622528px","animationName":"","fontSize":"var(--business-text-size-14)","marginLeft":"4px"},
            
            },
 default: { 
 
label:"%",
editable:false,
cStyle:{"wrapper":{"default":{"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","position":"unset","left":"996.6376171769348px","top":"1681.6463072622528px","animationName":"","fontSize":"var(--business-text-size-14)","marginLeft":"4px"}}}, 
 },
},
tTextx0x17: {
defaultStyle: {
            default: {"width":"201px","height":"20px","color":"var(--business-unit-icon)","textAlign":"center","fontSize":"var(--business-text-size-14)","position":"unset","left":"229px","top":"355px","animationName":""},
            
            },
 default: { 
 
label:"标志设立",
editable:false,
cStyle:{"wrapper":{"default":{"width":"201px","height":"20px","color":"var(--business-unit-icon)","textAlign":"center","fontSize":"var(--business-text-size-14)","position":"unset","left":"229px","top":"355px","animationName":""}}}, 
 },
},
tRowx0x18: {
defaultStyle: {
            default: {"width":"85px","height":"21px","position":"unset","left":"135px","top":"240px","letterSpacing":"0px","animationName":"","fontWeight":"600"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"85px","height":"21px","position":"unset","left":"135px","top":"240px","letterSpacing":"0px","animationName":"","fontWeight":"600"}}},
gutter:0,
justify:"center",
align:"middle", 
 },
},
tTextx0x18x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","position":"unset","left":"688.0743376079358px","top":"1059.1927628296885px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"var(--business-num-size-18)","lineHeight":"18px","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold"},
            
            },
 default: { 
 
label:0,
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","position":"unset","left":"688.0743376079358px","top":"1059.1927628296885px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"var(--business-num-size-18)","lineHeight":"18px","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold"}}}, 
 },
},
tTextx0x18x1: {
defaultStyle: {
            default: {"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","position":"unset","left":"1006.6376171769348px","top":"1691.6463072622528px","animationName":"","fontSize":"var(--business-text-size-14)","lineHeight":"14px","marginLeft":"4px","marginRight":"4px","textIndent":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
label:"/",
editable:false,
cStyle:{"wrapper":{"default":{"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","position":"unset","left":"1006.6376171769348px","top":"1691.6463072622528px","animationName":"","fontSize":"var(--business-text-size-14)","lineHeight":"14px","marginLeft":"4px","marginRight":"4px","textIndent":"0px","paddingLeft":"0px"}}}, 
 },
},
tTextx0x18x2: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--business-white)","fontSize":"var(--business-num-size-18)","fontFamily":"DIN-bold","fontWeight":"500","animationName":"","left":"627.0743376079358px","top":"1051.1927628296885px"},
            
            },
 default: { 
 
label:0,
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--business-white)","fontSize":"var(--business-num-size-18)","fontFamily":"DIN-bold","fontWeight":"500","animationName":"","left":"627.0743376079358px","top":"1051.1927628296885px"}}}, 
 },
},
tImageBasex0x19: {
defaultStyle: {
            default: {"width":"99px","height":"99px","position":"unset","left":"280px","top":"299px","animationName":"customd961b81e4f278","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"},
            
            },
 default: { 
 
src:"assets/images/2024-12-05/5a6e9f0d79d94b6c88323b702485b364.png",
fit:"none",
cStyle:{"wrapper":{"default":{"width":"99px","height":"99px","position":"unset","left":"280px","top":"299px","animationName":"customd961b81e4f278","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"}}}, 
 },
},
tChartPiePercentx0x20: {
defaultStyle: {
            default: {"height":"113px","width":"113px","position":"unset","left":"273px","top":"292px","animationName":""},
            
            },
pie: computed(() => activeChartTheme.value?.pie),
 default: { 
 
emptyImg:"assets/images/emptyImg.png",
data:0,
seriesStyle:{"radius":["92%","100%"],"bgColor":"rgba(45, 149, 90,0)","fontSize":0,"fontColor":"rgba(0, 0, 0, 0)","fontWeight":"normal","valueColor":"#FFC000","startAngle":90,"clockwise":false},
cStyle:{"wrapper":{"default":{"height":"113px","width":"113px","position":"unset","left":"273px","top":"292px","animationName":""}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"legend":{"show":false},"title":{"show":false}})), 
 },
},
tTextUnitx0x21: {
defaultStyle: {
            default: {"width":"72px","height":"29px","position":"unset","left":"305px","top":"323px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"72px","height":"29px","position":"unset","left":"305px","top":"323px","animationName":""}},"text":{"default":{"fontFamily":"DIN-black","fontSize":"var(--business-num-size-24)","color":"var(--business-white)"}},"unit":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-unit-icon)","lineHeight":"20px"}}},
justify:"center",
align:"flex-end",
content:0,
unit:"%",
showOverflowTooltip:true, 
 },
},
tListCardx0x22: {
defaultStyle: {
            default: {"width":"418px","height":"68px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
data:[{"title":"总数","num":0,"unit":"个","icon":"assets/images/2024-12-05/9318cb0685104a01ba0f6d8c0ad8dc9d.svg"},{"title":"地表水型","num":0,"unit":"个","icon":"assets/images/2024-12-05/afe9d3e0b36249acaeab422809287a6c.svg"},{"title":"地下水型","num":0,"unit":"个","icon":"assets/images/2024-12-05/6afe9e3395864daca876a23dd746587f.svg"}],
spacingX:8,
col:3,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"418px","height":"68px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"height":"66px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"num":{"default":{"fontSize":"var(--business-num-size-24)","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--business-white)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","marginTop":"0px","lineHeight":"var(--business-text-size-14)","overflow":"hidden","text-overflow":"ellipsis","white-space":"nowrap","max-width":"calc(100% - 1px)"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"17px"}},"numBox":{"default":{"marginTop":"6px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"alignItems":"flex-start","marginLeft":"8px"}}}, 
 },
},
tRectx0x23: {
defaultStyle: {
            default: {"width":"201px","height":"140px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg10)","position":"unset","left":"20px","top":"277px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"201px","height":"140px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg10)","position":"unset","left":"20px","top":"277px","animationName":""}}}, 
 },
},
tCirclex0x24: {
defaultStyle: {
            default: {"width":"113px","height":"113px","borderLeft":"5px solid var(--business-show-bg10)","borderTop":"5px solid var(--business-show-bg10)","borderRight":"5px solid var(--business-show-bg10)","borderBottom":"5px solid var(--business-show-bg10)","position":"unset","left":"64px","top":"292px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"113px","borderLeft":"5px solid var(--business-show-bg10)","borderTop":"5px solid var(--business-show-bg10)","borderRight":"5px solid var(--business-show-bg10)","borderBottom":"5px solid var(--business-show-bg10)","position":"unset","left":"64px","top":"292px","animationName":""}}}, 
 },
},
tTextx0x25: {
defaultStyle: {
            default: {"width":"201px","height":"20px","color":"var(--business-unit-icon)","textAlign":"center","fontSize":"var(--business-text-size-14)","lineHeight":"20px","position":"unset","left":"20px","top":"355px","animationName":""},
            
            },
 default: { 
 
label:"保护区划分",
editable:false,
cStyle:{"wrapper":{"default":{"width":"201px","height":"20px","color":"var(--business-unit-icon)","textAlign":"center","fontSize":"var(--business-text-size-14)","lineHeight":"20px","position":"unset","left":"20px","top":"355px","animationName":""}}}, 
 },
},
tImageBasex0x26: {
defaultStyle: {
            default: {"width":"99px","height":"99px","position":"unset","left":"71px","top":"299px","animationName":"custom7498be6597a9b","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
src:"assets/images/2024-12-05/8818f124d2894c1688b0aa8ac9f672d3.png",
fit:"none",
cStyle:{"wrapper":{"default":{"width":"99px","height":"99px","position":"unset","left":"71px","top":"299px","animationName":"custom7498be6597a9b","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tChartPiePercentx0x27: {
defaultStyle: {
            default: {"height":"113px","width":"113px","position":"unset","left":"64px","top":"292px","animationName":""},
            
            },
pie: computed(() => activeChartTheme.value?.pie),
 default: { 
 
emptyImg:"assets/images/emptyImg.png",
data:0,
seriesStyle:{"radius":["92%","100%"],"bgColor":"rgba(45, 149, 90,0)","fontSize":0,"fontColor":"rgba(0, 0, 0, 0)","fontWeight":"normal","valueColor":"#00FF22","startAngle":90,"clockwise":false},
cStyle:{"wrapper":{"default":{"height":"113px","width":"113px","position":"unset","left":"64px","top":"292px","animationName":""}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"legend":{"show":false},"title":{"show":false}})), 
 },
},
tTextUnitx0x28: {
defaultStyle: {
            default: {"width":"70px","height":"29px","position":"unset","left":"89px","top":"323px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"29px","position":"unset","left":"89px","top":"323px","animationName":""}},"text":{"default":{"fontFamily":"DIN-black","fontSize":"var(--business-num-size-24)","color":"var(--business-white)"}},"unit":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-unit-icon)","lineHeight":"20px"}}},
justify:"center",
align:"flex-end",
content:0,
unit:"%",
showOverflowTooltip:true, 
 },
},
tButtonx0x29: {
defaultStyle: {
            default: {"width":"50px","height":"auto","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","position":"unset","left":"380px","top":"491px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","min-height":"32px"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"auto","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","position":"unset","left":"380px","top":"491px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","min-height":"32px"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tTextCommonx0x30: {
defaultStyle: {
            default: {"width":"110px","height":"auto","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"27px","top":"240px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"达标水源地",
editable:false,
cStyle:{"wrapper":{"default":{"width":"110px","height":"auto","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"27px","top":"240px","background":"unset","backgroundClip":"unset"}},"itemWrapper":{"default":{"width":"110px"}}}, 
 },
},
tTextCommonx0x31: {
defaultStyle: {
            default: {"width":"80px","height":"auto","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"242px","top":"241px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"达标率",
editable:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"auto","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"242px","top":"241px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
});
const initPageData = () => {
// 初始化页面数据
const getData = async () => {
  // debugger
  // 获取 URL 参数
  const params = new URLSearchParams(window.location.search);
  const region = params.get('region');
  const monitortime = params.get('monitortime');
  // 获取最新时间：优先 URL 参数 > 注入参数 > 接口获取
  if (monitortime) {
    state.timeValue = monitortime;
    state.drinkWaterState.time = monitortime; // 同步数据状态
  } else {
    if (!state.drinkWaterState.time) {
      //await getLastTime();  
      await apiRegistry.getLastTime.request();
    }
    state.timeValue = state.drinkWaterState.time;
  }

  // // 获取最新时间
  // if (!state.drinkWaterState.time) {
  //   await getLastTime();
  // }
  // state.timeValue = state.drinkWaterState.time;


  // state.selectedCity = state.drinkWaterState.level;

  // 获取层级：优先 URL 参数 > 注入参数
  state.selectedCity = region || state.drinkWaterState.level;
  console.log('resigon-monitortime', region, monitortime)
  state.drinkName = state.drinkWaterState.name || "";
  // 水质量总数卡片接口
  apiRegistry.getWaterSoureQuantity.request();
  // 整体评价结果-数量、达标率
  apiRegistry.getZTPJJG.request();
  // 水源地列表
  apiRegistry.getList.request();
}
getData();


// 水质量总数
watch(
  () => [
    state.selectedCity,
    global.regionaQuery.regionCode,
    global.regionaQuery.areaCode
  ],
  ([_, regionCode]) => {
    if (regionCode) {
      apiRegistry.getWaterSoureQuantity.request();
    }
  }
);

// 整体评价结果-数量、达标率
watch(
  () => [
    state.selectedCity,
    state.timeValue,
    global.regionaQuery.regionCode,
    global.regionaQuery.areaCode
  ],
  ([_, time, regionCode]) => {
    if (time && regionCode) {
      apiRegistry.getZTPJJG.request();
    }
  }
);

// 列表
watch(
  () => [
    state.selectedCity,
    state.timeValue,
    global.regionaQuery.regionCode,
    global.regionaQuery.regionType,
    global.regionaQuery.areaCode
  ],
  ([_, time, regionCode]) => {
    if (time && regionCode) {
      apiRegistry.getList.request();
    }
  }
);

setTimeout(()=>{
  
  console.log('jjjjj',state.selectedCity)
})
};
const changeCity = (val) => {
state.drinkWaterState.level = val;
// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "value",
      "shareCode": "MANAGER_TYPE_CODE",
      "defaultValue": "",
      "runtimeValue": val
    },
    {
      "code": "defaultTab",
      "shareCode": "defaultTab",
      "defaultValue": "pointWq",
      "name": "",
      "runtimeValue": "pointWq"
    }
  ]
});

};
const changeTime = (val) => {
state.drinkWaterState.time = val;
// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "value",
      "shareCode": "MONITORTIME",
      "defaultValue": "",
      "runtimeValue": val
    },
    {
      "code": "defaultTab",
      "name": "",
      "defaultValue": "pointWq",
      "shareCode": "defaultTab",
      "runtimeValue": "pointWq"
    }
  ]
});

};
const changeDrinkName = () => {

getList();

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "value",
      "shareCode": "DRINK_NAME_LIKE",
      "defaultValue": "",
      "runtimeValue": state.drinkName
    }
  ]
});

};
const goToDetail = (row,col) => {
if (["水源地名称", "定位", '行政区', '水质现状', '水源地问题'].includes(col.label)) {
    // 发送socket
    rootData.rootSocket.emit('message', {
        room: global.socketRoom,// 房间号
        type: "runInteractive", // 消息名称
        data: [
            {
                "code": "detailsOrGeneral",
                "shareCode": "detailsOrGeneral",
                "defaultValue": "details",
                "name": "",
                "runtimeValue": "details"
            },
            {
                "code": "drink_id",
                "name": "",
                "defaultValue": "",
                "shareCode": "DRINK_ID",
                "runtimeValue": row.DRINK_ID
            },
            {
                "code": "monitortime",
                "name": "",
                "defaultValue": "",
                "shareCode": "monitortime",
                "runtimeValue": state.timeValue
            },
            {
                "code": "drink_code",
                "name": "",
                "defaultValue": "",
                "shareCode": "DRINK_CODE",
                "runtimeValue": row.DRINK_CODE
            },
            {
                "code": "drink_name",
                "name": "",
                "defaultValue": "",
                "shareCode": "DRINK_NAME",
                "runtimeValue": row.DRINK_NAME
            }
        ]
    });


    // 跳转到  饮用水-详情页面
    state.drinkWaterState.componentName = 'waterSourceQualityDetailComponent';

    // 设置弹框使用的参数
    global.businessDialog = {
        dialogParmas: {
            rowInfo: row,
            time: state.timeValue
        },
        dialogName: '',
    }
}


};
const getProvider = () => {
const rootData = inject('drinkWaterState');

state.drinkWaterState = rootData;
};
const getInputValue = (data) => {
state.drinkName = data;
state.drinkWaterState.name = data;
};
const initSokcetMessage = () => {
// 1. 注册监听器 (只注册一次)
rootData.rootOn('rootSocket:change', (data) => {
    const params = new URLSearchParams(window.location.search);
    const region = params.get('region');
  // if (data.type === 'appLoaded' && data.data.resCode === 'onemap_manual_drinkingwater' && data.data.resName === '引用水') {
    console.log('data.type', data)
  if (data.type === 'appLoaded') {
    // 这里应该调用 changeCity(state.selectedCity) 吗？
    // 注意：changeCity 需要参数，而且 changeCity 本身就是发消息的
    // 如果收到 'appLoaded' 消息意味着地图加载好了，我们需要把当前的状态同步给地图
    // 那么应该复用刚才在 getData 里写的发消息逻辑，或者调用 changeCity(state.selectedCity)
    console.log('state.selectedCity选中的', region)
    // 假设意图是：地图加载完毕通知我们，我们把当前选中的城市告诉它
    changeCity(state.selectedCity);
  }
});
};
const setStyle = () => {
// 创建一个style元素
const styleElement = document.createElement("style");

// 获取当前组件的名称
let componentName = 'wateSourceQuality';
// 定义style元素的id
let id = `custom-${componentName}-styles`;
// 给style元素添加id以便之后可以方便地找到并修改它
styleElement.id = id;

// 使用条件判断以确保不会重复添加相同的样式规则
if (!document.getElementById(id)) {
  // 向style元素中添加自定义的CSS规则
  styleElement.innerHTML = `
      
      /* 城市选择器弹出框*/
      #t-l-c-${componentName} .t-date-picker .el-input {
        line-height: normal;
      }
    `;
  // 将style元素添加到文档头部
  document.head.appendChild(styleElement);
}
};
const onchange1733381589566 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.selectedCity = value;
// 执行自定义方法
changeCity(value);
};
const oninput1734340383119 = (value) => {
// 执行自定义方法
getInputValue(value);
};
const ondateChange1733725900639 = (data) => {
// 设置变量值
state.timeValue = data;
// 执行自定义方法
changeTime(data);
};
const oncellClick1733731910393 = (row,column,cell,event) => {
// 执行自定义方法
goToDetail(row,column);
};
const onclick1734422611294 = () => {
// 执行自定义方法
changeDrinkName();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getZTPJJG: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"AREA_CODE":"","MANAGER_TYPE_CODE":"state.selectedCity","WSYSTEM_CODE":"global.regionaQuery.areaCode","MONITORTIME":"state.timeValue","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"9be2a2eaba3521d1dc9c118affe050dc"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","MANAGER_TYPE_CODE":state.selectedCity,"WSYSTEM_CODE":global.regionaQuery.areaCode,"MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"9be2a2eaba3521d1dc9c118affe050dc"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"AREA_CODE":"","MANAGER_TYPE_CODE":state.selectedCity,"WSYSTEM_CODE":global.regionaQuery.areaCode,"MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"9be2a2eaba3521d1dc9c118affe050dc"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getZTPJJG'] = res.data;
                
     state.count = {
  STANDARDCOUNT: 0,
  ACTUALDRINKCOUNT: 0,
  STANDARDRATE: 0
};
if (res?.data?.head?.statusCode === '200') {
  state.count = { ...res.data.data };
}


      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.count = {
  STANDARDCOUNT: 0,
  ACTUALDRINKCOUNT: 0,
  STANDARDRATE: 0
};
      reject(error);
    });
  });
},
              },
// 接口函数
 getWaterSoureQuantity: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"AREA_CODE":"","WSYSTEM_CODE":"global.regionaQuery.areaCode","MANAGER_TYPE_CODE":"state.selectedCity","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"9b5f8d3c57e55a31f3388b9943dcb7c2"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"MANAGER_TYPE_CODE":state.selectedCity,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"9b5f8d3c57e55a31f3388b9943dcb7c2"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"AREA_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"MANAGER_TYPE_CODE":state.selectedCity,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"9b5f8d3c57e55a31f3388b9943dcb7c2"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWaterSoureQuantity'] = res.data;
                
     if (res?.data?.head?.statusCode === '200') {
  state.waterQuantityCard[0].num = res?.data?.data?.DRINKCOUNT || 0;
  state.waterQuantityCard[1].num = res?.data?.data?.SURFACECOUNT || 0;
  state.waterQuantityCard[2].num = res?.data?.data?.UNDERGROUNDCOUNT || 0;
  state.percent = {
    bhqhf: res?.data?.data?.HASRESERVEPERCENT || 0, // 保护区划分
    bzsl: res?.data?.data?.HASBOUNDARYPERCENT || 0 // 标志设立
  }
} else {
  state.waterQuantityCard[0].num = 0;
  state.waterQuantityCard[1].num = 0;
  state.waterQuantityCard[2].num = 0;
  state.percent = {
    bhqhf: 0, // 保护区划分
    bzsl: 0 // 标志设立
  }
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
state.percent = {
    bhqhf: 0, // 保护区划分
    bzsl: 0 // 标志设立
  }
      reject(error);
    });
  });
},
              },
// 接口函数
 getLastTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"AREA_CODE":"","MONITORTIME":"","CODE_WQDATASOURCETYPE":"drinkingWater","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"3b6f856a9de8fa54f628b64c73c5274b"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","MONITORTIME":"","CODE_WQDATASOURCETYPE":"drinkingWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"3b6f856a9de8fa54f628b64c73c5274b"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"AREA_CODE":"","MONITORTIME":"","CODE_WQDATASOURCETYPE":"drinkingWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"3b6f856a9de8fa54f628b64c73c5274b"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLastTime'] = res.data;
                
     state.drinkWaterState.time = ''
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  // 当前选中最新时间
  state.drinkWaterState.time = data.data.MONITORTIME || '';
  
  //state.timeValue = data.data.MONITORTIME || '';
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
 getList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DRINK_NAME_LIKE":"state.drinkName","AREA_CODE":"","MANAGER_TYPE_CODE":"state.selectedCity","WSYSTEM_CODE":"global.regionaQuery.areaCode","MONITORTIME":"state.timeValue","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"a40f3e81f8189de904e5ad20cfbec7af"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DRINK_NAME_LIKE":state.drinkName,"AREA_CODE":"","MANAGER_TYPE_CODE":state.selectedCity,"WSYSTEM_CODE":global.regionaQuery.areaCode,"MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"a40f3e81f8189de904e5ad20cfbec7af"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DRINK_NAME_LIKE":state.drinkName,"AREA_CODE":"","MANAGER_TYPE_CODE":state.selectedCity,"WSYSTEM_CODE":global.regionaQuery.areaCode,"MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"a40f3e81f8189de904e5ad20cfbec7af"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getList'] = res.data;
                
     state.list = [];

if (res?.data?.head?.statusCode === '200' && res?.data?.data.length) {
  state.list = res.data.data.map((item) => ({
    ...item,
    // 水源地名称
    DRINK_NAME: item?.DRINK_NAME || '-',
    // 行政区
    REGION_NAME: item?.REGION_NAME || '-',
    // 水质现状
    WATERQUALITYLEVELNAME: item?.WATERQUALITYLEVELNAME || '-',
    // 水源地问题
    QUES_COUNT: item?.QUES_COUNT || '-',
    // 定位
    iconStatus: `${!!(item.LONGITUDE && item.LATITUDE)}`
  }))
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.list = [];
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-wateSourceQuality', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-wateSourceQuality', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
getProvider();
// 执行自定义方法
initPageData();
// 执行自定义方法
changeCity(state.selectedCity);
});
// 执行自定义方法
setStyle();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tSelectx0x2ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2.default, componentState.tSelectx0x2?.[state.screenSize]));

 const tSearchx0x3ComputedData = computed(() => _.merge({}, componentState.tSearchx0x3.default, componentState.tSearchx0x3?.[state.screenSize]));

 const tDatePickerx0x4ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x4.default, componentState.tDatePickerx0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tTablex0x11ComputedData = computed(() => _.merge({}, componentState.tTablex0x11.default, componentState.tTablex0x11?.[state.screenSize]));

 const tRectx0x12ComputedData = computed(() => _.merge({}, componentState.tRectx0x12.default, componentState.tRectx0x12?.[state.screenSize]));

 const tRectx0x14ComputedData = computed(() => _.merge({}, componentState.tRectx0x14.default, componentState.tRectx0x14?.[state.screenSize]));

 const tCirclex0x15ComputedData = computed(() => _.merge({}, componentState.tCirclex0x15.default, componentState.tCirclex0x15?.[state.screenSize]));

 const tRowx0x16ComputedData = computed(() => _.merge({}, componentState.tRowx0x16.default, componentState.tRowx0x16?.[state.screenSize]));

 const tTextx0x16x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x16x0.default, componentState.tTextx0x16x0?.[state.screenSize]));

 const tTextx0x16x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x16x1.default, componentState.tTextx0x16x1?.[state.screenSize]));

 const tTextx0x17ComputedData = computed(() => _.merge({}, componentState.tTextx0x17.default, componentState.tTextx0x17?.[state.screenSize]));

 const tRowx0x18ComputedData = computed(() => _.merge({}, componentState.tRowx0x18.default, componentState.tRowx0x18?.[state.screenSize]));

 const tTextx0x18x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x18x0.default, componentState.tTextx0x18x0?.[state.screenSize]));

 const tTextx0x18x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x18x1.default, componentState.tTextx0x18x1?.[state.screenSize]));

 const tTextx0x18x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x18x2.default, componentState.tTextx0x18x2?.[state.screenSize]));

 const tImageBasex0x19ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x19.default, componentState.tImageBasex0x19?.[state.screenSize]));

 const tChartPiePercentx0x20ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartPiePercentx0x20.default, componentState.tChartPiePercentx0x20?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextUnitx0x21ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x21.default, componentState.tTextUnitx0x21?.[state.screenSize]));

 const tListCardx0x22ComputedData = computed(() => _.merge({}, componentState.tListCardx0x22.default, componentState.tListCardx0x22?.[state.screenSize]));

 const tRectx0x23ComputedData = computed(() => _.merge({}, componentState.tRectx0x23.default, componentState.tRectx0x23?.[state.screenSize]));

 const tCirclex0x24ComputedData = computed(() => _.merge({}, componentState.tCirclex0x24.default, componentState.tCirclex0x24?.[state.screenSize]));

 const tTextx0x25ComputedData = computed(() => _.merge({}, componentState.tTextx0x25.default, componentState.tTextx0x25?.[state.screenSize]));

 const tImageBasex0x26ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x26.default, componentState.tImageBasex0x26?.[state.screenSize]));

 const tChartPiePercentx0x27ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartPiePercentx0x27.default, componentState.tChartPiePercentx0x27?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextUnitx0x28ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x28.default, componentState.tTextUnitx0x28?.[state.screenSize]));

 const tButtonx0x29ComputedData = computed(() => _.merge({}, componentState.tButtonx0x29.default, componentState.tButtonx0x29?.[state.screenSize]));

 const tTextCommonx0x30ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x30.default, componentState.tTextCommonx0x30?.[state.screenSize]));

 const tTextCommonx0x31ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x31.default, componentState.tTextCommonx0x31?.[state.screenSize]));

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
tSelectx0x2ComputedData,
tSearchx0x3ComputedData,
tDatePickerx0x4ComputedData,
tComponentx0x5ComputedData,
tComponentx0x6ComputedData,
tTextx0x7ComputedData,
tTextx0x8ComputedData,
tRectx0x9ComputedData,
tTablex0x11ComputedData,
tRectx0x12ComputedData,
tRectx0x14ComputedData,
tCirclex0x15ComputedData,
tRowx0x16ComputedData,
tTextx0x16x0ComputedData,
tTextx0x16x1ComputedData,
tTextx0x17ComputedData,
tRowx0x18ComputedData,
tTextx0x18x0ComputedData,
tTextx0x18x1ComputedData,
tTextx0x18x2ComputedData,
tImageBasex0x19ComputedData,
tChartPiePercentx0x20ComputedData,
tTextUnitx0x21ComputedData,
tListCardx0x22ComputedData,
tRectx0x23ComputedData,
tCirclex0x24ComputedData,
tTextx0x25ComputedData,
tImageBasex0x26ComputedData,
tChartPiePercentx0x27ComputedData,
tTextUnitx0x28ComputedData,
tButtonx0x29ComputedData,
tTextCommonx0x30ComputedData,
tTextCommonx0x31ComputedData,
onchange1733381589566,
oninput1734340383119,
ondateChange1733725900639,
oncellClick1733731910393,
onclick1734422611294,
};
},
}
</script>

<style scoped>
.t-l-c-wateSourceQuality {
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
height: 836px;
background-color: rgba(0,0,0,0);
}
.t-l-c-wateSourceQuality .wateSourceQuality-t-rect-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 448px;
height: 64px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-rect-0-1 {
position: absolute !important;
top: 277px;
left: 229px;
width: 201px;
height: 140px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-select-0-2 {
position: absolute !important;
top: 16px;
left: 16px;
width: 132px;
height: auto;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-search-0-3 {
position: absolute !important;
top: 491px;
left: 20px;
width: 348px;
height: auto;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-date-picker-0-4 {
position: absolute !important;
top: 16px;
left: 160px;
width: 150px;
height: auto;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-component-0-5 {
position: absolute !important;
top: 186px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-component-0-6 {
position: absolute !important;
top: 449px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-text-0-7 {
position: absolute !important;
top: 191px;
left: 60px;
width: 247px;
height: auto;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-text-0-8 {
position: absolute !important;
top: 454px;
left: 60px;
width: 244px;
height: 19px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-rect-0-9 {
position: absolute !important;
top: 229px;
left: 20px;
width: 410px;
height: 44px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-table-0-11 {
position: absolute !important;
top: 532px;
left: 20px;
width: 410px;
height: 284px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-rect-0-12 {
position: absolute !important;
top: 238px;
left: 20px;
width: 2px;
height: 27px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-rect-0-14 {
position: absolute !important;
top: 242px;
left: 238px;
width: 1px;
height: 17px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-circle-0-15 {
position: absolute !important;
top: 292px;
left: 273px;
width: 113px;
height: 113px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-row-0-16 {
position: absolute !important;
top: 240px;
left: 327px;
width: 83px;
height: 21px;
pointer-events: auto;
letter-spacing: 0px;
animation-name: ;
font-weight: 600;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-text-0-16-0 {
position: unset;
top: 1225.0131956048494px;
left: 1161.2985817977992px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-text-0-16-1 {
position: unset;
top: 1681.6463072622528px;
left: 996.6376171769348px;
width: 12px;
height: auto;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-text-0-17 {
position: absolute !important;
top: 355px;
left: 229px;
width: 201px;
height: 20px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-row-0-18 {
position: absolute !important;
top: 240px;
left: 135px;
width: 85px;
height: 21px;
pointer-events: auto;
letter-spacing: 0px;
animation-name: ;
font-weight: 600;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-text-0-18-0 {
position: unset;
top: 1059.1927628296885px;
left: 688.0743376079358px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-text-0-18-1 {
position: unset;
top: 1691.6463072622528px;
left: 1006.6376171769348px;
width: 12px;
height: auto;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-text-0-18-2 {
position: unset;
top: 1051.1927628296885px;
left: 627.0743376079358px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-image-base-0-19 {
position: absolute !important;
top: 299px;
left: 280px;
width: 99px;
height: 99px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-chart-pie-percent-0-20 {
position: absolute !important;
top: 292px;
left: 273px;
width: 113px;
height: 113px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-text-unit-0-21 {
position: absolute !important;
top: 323px;
left: 305px;
width: 72px;
height: 29px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-list-card-0-22 {
position: absolute !important;
top: 88px;
left: 16px;
width: 418px;
height: 68px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-rect-0-23 {
position: absolute !important;
top: 277px;
left: 20px;
width: 201px;
height: 140px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-circle-0-24 {
position: absolute !important;
top: 292px;
left: 64px;
width: 113px;
height: 113px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-text-0-25 {
position: absolute !important;
top: 355px;
left: 20px;
width: 201px;
height: 20px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-image-base-0-26 {
position: absolute !important;
top: 299px;
left: 71px;
width: 99px;
height: 99px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-chart-pie-percent-0-27 {
position: absolute !important;
top: 292px;
left: 64px;
width: 113px;
height: 113px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-text-unit-0-28 {
position: absolute !important;
top: 323px;
left: 89px;
width: 70px;
height: 29px;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-button-0-29 {
position: absolute !important;
top: 491px;
left: 380px;
width: 50px;
height: auto;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-text-common-0-30 {
position: absolute !important;
top: 240px;
left: 27px;
width: 110px;
height: auto;
pointer-events: auto;
}

.t-l-c-wateSourceQuality .wateSourceQuality-t-text-common-0-31 {
position: absolute !important;
top: 241px;
left: 242px;
width: 80px;
height: auto;
pointer-events: auto;
}

@keyframes customd961b81e4f278 {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(360deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
@keyframes custom7498be6597a9b {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
100% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(360deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
</style>
