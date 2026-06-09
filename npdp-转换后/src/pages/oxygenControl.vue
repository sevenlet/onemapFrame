<template>
  <div id="t-l-c-oxygenControl" class="t-l-c-oxygenControl" ><t-row id="t-row-e46f.1d0f17fb4" class="oxygenControl-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-col id="t-col-3c5a.59212c926" class="oxygenControl-t-col-0-0-0"  :offset="tColx0x0x0ComputedData.offset" :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull" :c-style="tColx0x0x0ComputedData.cStyle"><t-component id="t-component-2f91.b58f59c46" class="oxygenControl-t-component-0-0-0-0"  :name="tComponentx0x0x0x0ComputedData.name" :c-style="tComponentx0x0x0x0ComputedData.cStyle" :src="tComponentx0x0x0x0ComputedData.src" :component-name="tComponentx0x0x0x0ComputedData.componentName" :page-id="tComponentx0x0x0x0ComputedData.pageId" :page-code="tComponentx0x0x0x0ComputedData.pageCode"></t-component><t-text id="t-text-68a8.5fdb97e61" class="oxygenControl-t-text-0-0-0-1"  :label="replaceCssVariables(filterData(state.firstTitle, componentPropBindingMap?.['t-text-68a8.5fdb97e61']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x0x1ComputedData.editable" :c-style="tTextx0x0x0x1ComputedData.cStyle"></t-text><t-iframe id="t-iframe-b599.41b3b1746" class="oxygenControl-t-iframe-0-0-0-3"  :src="replaceCssVariables(filterData(state.mapUrl, componentPropBindingMap?.['t-iframe-b599.41b3b1746']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x0x0x3ComputedData.srcdoc" :scrolling="tIframex0x0x0x3ComputedData.scrolling" :c-style="tIframex0x0x0x3ComputedData.cStyle" :socket-url="replaceCssVariables(filterData(global.socketIp, componentPropBindingMap?.['t-iframe-b599.41b3b1746']['socketUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :room-id="replaceCssVariables(filterData(global.socketRoom, componentPropBindingMap?.['t-iframe-b599.41b3b1746']['roomId'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-iframe><t-timeline-base v-if="state.selectId !== '0'" id="t-timeline-base-42c0.147df9de8" class="oxygenControl-t-timeline-base-0-0-0-4"  :time-data="replaceCssVariables(filterData(state.timeData, componentPropBindingMap?.['t-timeline-base-42c0.147df9de8']['timeData'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :control-button-info="tTimelineBasex0x0x0x4ComputedData.controlButtonInfo" :cur-time="replaceCssVariables(filterData(state.activeTimeline, componentPropBindingMap?.['t-timeline-base-42c0.147df9de8']['curTime'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :auto-play="tTimelineBasex0x0x0x4ComputedData.autoPlay" :loop="tTimelineBasex0x0x0x4ComputedData.loop" :play-interval="tTimelineBasex0x0x0x4ComputedData.playInterval" :interval="tTimelineBasex0x0x0x4ComputedData.interval" :step-button-visible="tTimelineBasex0x0x0x4ComputedData.stepButtonVisible" :inverse="tTimelineBasex0x0x0x4ComputedData.inverse" :immediate-trigger="tTimelineBasex0x0x0x4ComputedData.immediateTrigger" :step-button-color="tTimelineBasex0x0x0x4ComputedData.stepButtonColor" :c-style="tTimelineBasex0x0x0x4ComputedData.cStyle" :scale-percent="tTimelineBasex0x0x0x4ComputedData.scalePercent" :time-colors="replaceCssVariables(filterData(state.timeLineColor, componentPropBindingMap?.['t-timeline-base-42c0.147df9de8']['timeColors'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @time-change="ontimeChange1766641044034_0_0"></t-timeline-base></t-col><t-col id="t-col-f4de.c06fe1ba2" class="oxygenControl-t-col-0-0-1"  :offset="tColx0x0x1ComputedData.offset" :push="tColx0x0x1ComputedData.push" :pull="tColx0x0x1ComputedData.pull" :c-style="tColx0x0x1ComputedData.cStyle"><t-component id="t-component-1216.91ebd3e34" class="oxygenControl-t-component-0-0-1-0"  :name="tComponentx0x0x1x0ComputedData.name" :c-style="tComponentx0x0x1x0ComputedData.cStyle" :src="tComponentx0x0x1x0ComputedData.src" :component-name="tComponentx0x0x1x0ComputedData.componentName" :page-id="tComponentx0x0x1x0ComputedData.pageId" :page-code="tComponentx0x0x1x0ComputedData.pageCode"></t-component><t-text id="t-text-153f.15b2f07bf" class="oxygenControl-t-text-0-0-1-1"  :label="replaceCssVariables(filterData(state.twoTitle, componentPropBindingMap?.['t-text-153f.15b2f07bf']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x1x1ComputedData.editable" :c-style="tTextx0x0x1x1ComputedData.cStyle"></t-text><t-scrollable-cards id="t-scrollable-cards-6ce4.73d2c979a" class="oxygenControl-t-scrollable-cards-0-0-1-2"  :c-style="tScrollableCardsx0x0x1x2ComputedData.cStyle" :show-icon="tScrollableCardsx0x0x1x2ComputedData.showIcon" :auto-scroll="tScrollableCardsx0x0x1x2ComputedData.autoScroll" :tab="tScrollableCardsx0x0x1x2ComputedData.tab" :key-word="tScrollableCardsx0x0x1x2ComputedData.keyWord" :default-checked="replaceCssVariables(filterData(state.selectId, componentPropBindingMap?.['t-scrollable-cards-6ce4.73d2c979a']['defaultChecked'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :speed="tScrollableCardsx0x0x1x2ComputedData.speed" :interval="tScrollableCardsx0x0x1x2ComputedData.interval" :card-space="tScrollableCardsx0x0x1x2ComputedData.cardSpace" :direction="tScrollableCardsx0x0x1x2ComputedData.direction" :data-alias="tScrollableCardsx0x0x1x2ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.cardData, componentPropBindingMap?.['t-scrollable-cards-6ce4.73d2c979a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @card-click="oncardClick1766720540747"></t-scrollable-cards><t-chart-design v-if="state.isShow === true" id="t-chart-design-8426.eab8fc0cb" class="oxygenControl-t-chart-design-0-0-1-3"  :empty-img="tChartDesignx0x0x1x3ComputedData.emptyImg" :c-style="tChartDesignx0x0x1x3ComputedData.cStyle" :options="replaceCssVariables(filterData(state.chartOption, componentPropBindingMap?.['t-chart-design-8426.eab8fc0cb']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-chart-design><t-rect v-if="state.isShow === false" id="t-rect-ded0.128fb2362" class="oxygenControl-t-rect-0-0-1-4"  :tip="tRectx0x0x1x4ComputedData.tip" :label="tRectx0x0x1x4ComputedData.label" :active="tRectx0x0x1x4ComputedData.active" :c-style="tRectx0x0x1x4ComputedData.cStyle"></t-rect><t-table v-if="state.selectId !== '0'" id="t-table-d5e2.9c7851a07" class="oxygenControl-t-table-0-0-1-5"  :height="tTablex0x0x1x5ComputedData.height" :stripe="tTablex0x0x1x5ComputedData.stripe" :border="tTablex0x0x1x5ComputedData.border" :auto-scroll="tTablex0x0x1x5ComputedData.autoScroll" :speed="tTablex0x0x1x5ComputedData.speed" :columns="tTablex0x0x1x5ComputedData.columns" :data="replaceCssVariables(filterData(state.tableData, componentPropBindingMap?.['t-table-d5e2.9c7851a07']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x0x1x5ComputedData.defaultSort" :c-style="tTablex0x0x1x5ComputedData.cStyle"></t-table><t-table v-if="state.selectId === '0'" id="t-table-1bb8.030b465f3" class="oxygenControl-t-table-0-0-1-6"  :height="tTablex0x0x1x6ComputedData.height" :stripe="tTablex0x0x1x6ComputedData.stripe" :border="tTablex0x0x1x6ComputedData.border" :auto-scroll="tTablex0x0x1x6ComputedData.autoScroll" :speed="tTablex0x0x1x6ComputedData.speed" :columns="tTablex0x0x1x6ComputedData.columns" :data="replaceCssVariables(filterData(state.tableData, componentPropBindingMap?.['t-table-1bb8.030b465f3']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x0x1x6ComputedData.defaultSort" :c-style="tTablex0x0x1x6ComputedData.cStyle"></t-table></t-col></t-row><t-col id="t-col-a655.7275f7986" class="oxygenControl-t-col-0-1"  :span="tColx0x1ComputedData.span" :offset="tColx0x1ComputedData.offset" :push="tColx0x1ComputedData.push" :pull="tColx0x1ComputedData.pull" :c-style="tColx0x1ComputedData.cStyle"><t-text-common id="t-text-common-ec80.92f2ec794" class="oxygenControl-t-text-common-0-1-0"  :label="tTextCommonx0x1x0ComputedData.label" :editable="tTextCommonx0x1x0ComputedData.editable" :c-style="tTextCommonx0x1x0ComputedData.cStyle"></t-text-common><t-switch id="t-switch-f808.25f76906d" class="oxygenControl-t-switch-0-1-1"  :value="replaceCssVariables(filterData(state.waterTemperatureSwitch, componentPropBindingMap?.['t-switch-f808.25f76906d']['value'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tSwitchx0x1x1ComputedData.cStyle" @change="onchange1766833817841"></t-switch><t-text-common id="t-text-common-3b74.c70531ad5" class="oxygenControl-t-text-common-0-1-2"  :label="tTextCommonx0x1x2ComputedData.label" :editable="tTextCommonx0x1x2ComputedData.editable" :c-style="tTextCommonx0x1x2ComputedData.cStyle"></t-text-common><t-switch id="t-switch-86c2.f39c44876" class="oxygenControl-t-switch-0-1-3"  :value="replaceCssVariables(filterData(state.switchOne, componentPropBindingMap?.['t-switch-86c2.f39c44876']['value'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tSwitchx0x1x3ComputedData.cStyle" @change="onchange1768441177421_0_0"></t-switch><t-text-common id="t-text-common-9d4b.f3cc7f732" class="oxygenControl-t-text-common-0-1-4"  :label="tTextCommonx0x1x4ComputedData.label" :editable="tTextCommonx0x1x4ComputedData.editable" :c-style="tTextCommonx0x1x4ComputedData.cStyle"></t-text-common><t-switch id="t-switch-301c.b684be5d9" class="oxygenControl-t-switch-0-1-5"  :value="replaceCssVariables(filterData(state.switchTwo, componentPropBindingMap?.['t-switch-301c.b684be5d9']['value'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tSwitchx0x1x5ComputedData.cStyle" @change="onchange1766833861038"></t-switch></t-col><t-col id="t-col-7748.5162adf1a" class="oxygenControl-t-col-0-2"  :span="tColx0x2ComputedData.span" :offset="tColx0x2ComputedData.offset" :push="tColx0x2ComputedData.push" :pull="tColx0x2ComputedData.pull" :c-style="tColx0x2ComputedData.cStyle"><t-rect id="t-rect-483e.a78bb5234" class="oxygenControl-t-rect-0-2-0"  :tip="tRectx0x2x0ComputedData.tip" :label="tRectx0x2x0ComputedData.label" :active="tRectx0x2x0ComputedData.active" :c-style="tRectx0x2x0ComputedData.cStyle"></t-rect></t-col><t-col id="t-col-c64e.3d694cc22" class="oxygenControl-t-col-0-3"  :span="tColx0x3ComputedData.span" :offset="tColx0x3ComputedData.offset" :push="tColx0x3ComputedData.push" :pull="tColx0x3ComputedData.pull" :c-style="tColx0x3ComputedData.cStyle"><t-rect id="t-rect-670c.d77957ef6" class="oxygenControl-t-rect-0-3-0"  :tip="tRectx0x3x0ComputedData.tip" :label="tRectx0x3x0ComputedData.label" :active="tRectx0x3x0ComputedData.active" :c-style="tRectx0x3x0ComputedData.cStyle"></t-rect></t-col><t-col id="t-col-7382.59e4d50b9" class="oxygenControl-t-col-0-4"  :span="tColx0x4ComputedData.span" :offset="tColx0x4ComputedData.offset" :push="tColx0x4ComputedData.push" :pull="tColx0x4ComputedData.pull" :c-style="tColx0x4ComputedData.cStyle"><t-switch id="t-switch-07ca.7a67e0ee8" class="oxygenControl-t-switch-0-4-0"  :value="tSwitchx0x4x0ComputedData.value" :c-style="tSwitchx0x4x0ComputedData.cStyle" @change="onchange1768802905611_0_0"></t-switch></t-col><t-col id="t-col-76f4.a466aabbd" class="oxygenControl-t-col-0-5"  :span="tColx0x5ComputedData.span" :offset="tColx0x5ComputedData.offset" :push="tColx0x5ComputedData.push" :pull="tColx0x5ComputedData.pull" :c-style="tColx0x5ComputedData.cStyle"><t-switch id="t-switch-bd01.7f3cb93fc" class="oxygenControl-t-switch-0-5-0"  :value="tSwitchx0x5x0ComputedData.value" :c-style="tSwitchx0x5x0ComputedData.cStyle" @change="onchange1766735857272"></t-switch></t-col><t-col id="t-col-33a5.389e5c982" class="oxygenControl-t-col-0-6"  :span="tColx0x6ComputedData.span" :offset="tColx0x6ComputedData.offset" :push="tColx0x6ComputedData.push" :pull="tColx0x6ComputedData.pull" :c-style="tColx0x6ComputedData.cStyle"><t-rect id="t-rect-1b79.91272483c" class="oxygenControl-t-rect-0-6-0"  :tip="tRectx0x6x0ComputedData.tip" :label="tRectx0x6x0ComputedData.label" :active="tRectx0x6x0ComputedData.active" :c-style="tRectx0x6x0ComputedData.cStyle"></t-rect></t-col><t-col id="t-col-76f7.8473d0c9a" class="oxygenControl-t-col-0-7"  :span="tColx0x7ComputedData.span" :offset="tColx0x7ComputedData.offset" :push="tColx0x7ComputedData.push" :pull="tColx0x7ComputedData.pull" :c-style="tColx0x7ComputedData.cStyle"><t-switch id="t-switch-daef.23be72b1f" class="oxygenControl-t-switch-0-7-0"  :value="tSwitchx0x7x0ComputedData.value" :c-style="tSwitchx0x7x0ComputedData.cStyle" @change="onchange1766735714328"></t-switch></t-col></div>
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
import { TChartDesign, TCol, TComponent, TIframe, TRect, TRow, TScrollableCards, TSwitch, TTable, TText, TTextCommon, TTimelineBase } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TCol,
    TComponent,
    TIframe,
    TRect,
    TRow,
    TScrollableCards,
    TSwitch,
    TTable,
    TText,
    TTextCommon,
    TTimelineBase,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-e46f.1d0f17fb4":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-3c5a.59212c926":{"attributeName":"tColx0x0x0","offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-2f91.b58f59c46":{"attributeName":"tComponentx0x0x0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-68a8.5fdb97e61":{"attributeName":"tTextx0x0x0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-7482.447a3809e":{"attributeName":"tComponentx0x0x0x2"},"t-iframe-b599.41b3b1746":{"attributeName":"tIframex0x0x0x3","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]},"socketUrl":{"filters":[]},"roomId":{"filters":[]}},"t-timeline-base-42c0.147df9de8":{"attributeName":"tTimelineBasex0x0x0x4","timeData":{"filters":[]},"controlButtonInfo":{"filters":[]},"curTime":{"filters":[]},"autoPlay":{"filters":[]},"loop":{"filters":[]},"playInterval":{"filters":[]},"interval":{"filters":[]},"stepButtonVisible":{"filters":[]},"inverse":{"filters":[]},"immediateTrigger":{"filters":[]},"stepButtonColor":{"filters":[]},"cStyle":{"filters":[]},"scalePercent":{"filters":[]},"timeColors":{"filters":[]}},"t-col-f4de.c06fe1ba2":{"attributeName":"tColx0x0x1","offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-1216.91ebd3e34":{"attributeName":"tComponentx0x0x1x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-153f.15b2f07bf":{"attributeName":"tTextx0x0x1x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-scrollable-cards-6ce4.73d2c979a":{"attributeName":"tScrollableCardsx0x0x1x2","cStyle":{"filters":[]},"showIcon":{"filters":[]},"autoScroll":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"speed":{"filters":[]},"interval":{"filters":[]},"cardSpace":{"filters":[]},"direction":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-chart-design-8426.eab8fc0cb":{"attributeName":"tChartDesignx0x0x1x3","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-rect-ded0.128fb2362":{"attributeName":"tRectx0x0x1x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-table-d5e2.9c7851a07":{"attributeName":"tTablex0x0x1x5","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-table-1bb8.030b465f3":{"attributeName":"tTablex0x0x1x6","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-pagination-base-9ed6.70b0abe46":{"attributeName":"tPaginationBasex0x0x1x7"},"t-col-a655.7275f7986":{"attributeName":"tColx0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-ec80.92f2ec794":{"attributeName":"tTextCommonx0x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-f808.25f76906d":{"attributeName":"tSwitchx0x1x1","value":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-3b74.c70531ad5":{"attributeName":"tTextCommonx0x1x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-86c2.f39c44876":{"attributeName":"tSwitchx0x1x3","value":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-9d4b.f3cc7f732":{"attributeName":"tTextCommonx0x1x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-301c.b684be5d9":{"attributeName":"tSwitchx0x1x5","value":{"filters":[]},"cStyle":{"filters":[]}},"t-col-7748.5162adf1a":{"attributeName":"tColx0x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-483e.a78bb5234":{"attributeName":"tRectx0x2x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-c64e.3d694cc22":{"attributeName":"tColx0x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-670c.d77957ef6":{"attributeName":"tRectx0x3x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-7382.59e4d50b9":{"attributeName":"tColx0x4","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-07ca.7a67e0ee8":{"attributeName":"tSwitchx0x4x0","value":{"filters":[]},"cStyle":{"filters":[]}},"t-col-76f4.a466aabbd":{"attributeName":"tColx0x5","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-bd01.7f3cb93fc":{"attributeName":"tSwitchx0x5x0","value":{"filters":[]},"cStyle":{"filters":[]}},"t-col-33a5.389e5c982":{"attributeName":"tColx0x6","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1b79.91272483c":{"attributeName":"tRectx0x6x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-76f7.8473d0c9a":{"attributeName":"tColx0x7","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-daef.23be72b1f":{"attributeName":"tSwitchx0x7x0","value":{"filters":[]},"cStyle":{"filters":[]}}};
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
   timeLineData: [],
   timeLineColor: [],
   powerGenerationData: [],
   storeWaterData: [],
   waterTemperatureSwitch: false,
   total: 0,
   pageSize: 1000,
   pageNum: 1,
   standardNum: {"num":"","num1":"","num2":"","num3":"","num4":"","num5":"","num6":""},
   switchTwo: false,
   switchOne: false,
   selectId: "0",
   isShow: true,
   mapUrl: "http://192.168.0.202:7777/mapgo5.0/preview.html?appID=73c1cdeab5ec7a0afd7e16a6a9eff4a5&appType=2D&appName=%E5%8D%81%E9%87%8C%E5%BA%B5%E6%96%AD%E9%9D%A2%E6%BA%B6%E8%A7%A3%E6%B0%A7%E8%B0%83%E6%8E%A7",
   pointCode: "",
   selectedCard: "0",
   cardData: [],
   tableData: [],
   chartOption: "",
   firstTitle: "溶解氧空间变化示意",
   twoTitle: "溶解氧变化趋势",
   activeTimeline: "1976-10-01",
   timeData: ["1976-10-01","1976-10-02","1976-11-03"],
   list: [],
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
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0: {
defaultStyle: {
            default: {"width":"56%","height":"100%","display":"flex","justifyContent":"start","alignItems":"start","backgroundColor":"","flexDirection":"column"},
            
            },
 default: { 
 
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"56%","height":"100%","display":"flex","justifyContent":"start","alignItems":"start","backgroundColor":"","flexDirection":"column"}}}, 
 },
},
tComponentx0x0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"10px","top":"11px","animationName":"","textAlign":"left"},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"10px","top":"11px","animationName":"","textAlign":"left"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x0x0x1: {
defaultStyle: {
            default: {"width":"300px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"absolute","left":"40px","top":"5px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-16)","animationName":"","lineHeight":"20px","textAlign":"left"},
            
            },
 default: { 
 
label:"溶解氧空间变化示意",
editable:false,
cStyle:{"wrapper":{"default":{"width":"300px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"absolute","left":"40px","top":"5px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-16)","animationName":"","lineHeight":"20px","textAlign":"left"}}}, 
 },
},
tIframex0x0x0x3: {
defaultStyle: {
            default: {"width":"100%","height":"100%","marginTop":"14px","marginBottom":"14px"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/mapgo5.0/preview.html?appID=73c1cdeab5ec7a0afd7e16a6a9eff4a5&appType=2D&appName=%E5%8D%81%E9%87%8C%E5%BA%B5%E6%96%AD%E9%9D%A2%E6%BA%B6%E8%A7%A3%E6%B0%A7%E8%B0%83%E6%8E%A7",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","marginTop":"14px","marginBottom":"14px"}},"rightArrowButton":{"default":{"marginTop":"14px","paddingBottom":"14px"}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tTimelineBasex0x0x0x4: {
defaultStyle: {
            default: {"width":"100%","height":"58px","backgroundColor":"var(--t-pop-time-box)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderTopLeftRadius":"33px","borderTopRightRadius":"33px","borderBottomLeftRadius":"33px","borderBottomRightRadius":"33px","paddingRight":"20px","marginLeft":"0px","paddingLeft":"20px","borderLeft":"2px solid var(--t-pop-time-border)","borderTop":"2px solid var(--t-pop-time-border)","borderRight":"2px solid var(--t-pop-time-border)","borderBottom":"2px solid var(--t-pop-time-border)","position":"unset","left":"5px","top":"620px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
timeData:["1976-10-01","1976-10-02","1976-11-03"],
controlButtonInfo:{"playImgUrl":"assets/images/timeline-base/play.png","pauseImgUrl":"assets/images/timeline-base/pause.png","hoverPlayUrl":"assets/images/timeline-base/play2.png","hoverPauseUrl":"assets/images/timeline-base/pause2.png"},
curTime:"",
autoPlay:false,
loop:false,
playInterval:2000,
interval:0,
stepButtonVisible:false,
inverse:false,
immediateTrigger:false,
stepButtonColor:{"default":"#dee2e8","hover":"#02d6db","disable":"#3b5a84"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"58px","backgroundColor":"var(--t-pop-time-box)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderTopLeftRadius":"33px","borderTopRightRadius":"33px","borderBottomLeftRadius":"33px","borderBottomRightRadius":"33px","paddingRight":"20px","marginLeft":"0px","paddingLeft":"20px","borderLeft":"2px solid var(--t-pop-time-border)","borderTop":"2px solid var(--t-pop-time-border)","borderRight":"2px solid var(--t-pop-time-border)","borderBottom":"2px solid var(--t-pop-time-border)","position":"unset","left":"5px","top":"620px","overflow":"visible","animationName":""}},"controlButtonPlay":{"default":{"width":"42px","height":"42px","color":"","backgroundColor":"","marginLeft":"-10px","backgroundImage":"url(assets/images/2025-12-25/5a850579c19e487aa24e9b61f7d168a6.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"axisLabel":{"default":{"fontSize":"var(--business-text-size-14)","marginLeft":"0px","marginTop":"4px","color":"#fff","paddingLeft":"0px"}},"axisLineProgressWrappper":{"default":{"marginLeft":"0px","marginRight":"0px","height":"5px","backgroundColor":"var(--t-pop-time-hk-bg)","color":"","marginTop":"4px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"0px"}},"wrapperRightMoudle":{"default":{"marginLeft":"12px","marginRight":"0px","paddingLeft":"0px"}},"axisFirstLevelItem":{"default":{"backgroundColor":"rgba(255, 255, 255, 1)","height":"4px","color":"","fontSize":"var(--business-text-size-14)","lineHeight":"20px","fontWeight":"400","width":"2px"}},"controlButtonPause":{"default":{"width":"42px","height":"42px","marginLeft":"-10px"}},"toolTipCurrentTime":{"default":{"fontSize":"var(--business-text-size-18)","backgroundColor":"rgba(6, 49, 228, 0)","backgroundImage":"url(assets/images/2025-12-25/3bc6014ea0a14cefbd94fac4a2d87a73.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","paddingBottom":"15px","paddingTop":"10px","paddingLeft":"15px","paddingRight":"15px","color":"var(--t-white)"}},"toolTipHover":{"default":{"fontSize":"var(--business-text-size-18)","backgroundColor":"rgba(6, 49, 228, 0)","backgroundImage":"url(assets/images/2025-12-25/3bc6014ea0a14cefbd94fac4a2d87a73.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","paddingBottom":"15px","paddingTop":"10px","paddingLeft":"15px","paddingRight":"15px","color":"var(--t-white)"}},"axisSecondLevelItem":{"default":{"color":"","backgroundColor":"","fontSize":"var(--business-text-size-18)"}},"axisLabelSecond":{"default":{"color":"rgba(90, 112, 204, 0)"}},"axisLineProgressCurrent":{"default":{"height":"5px","backgroundColor":"rgba(60, 92, 228, 0.2)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"wrapperLeftMoudle":{"default":{"color":"","paddingLeft":"0px","paddingBottom":"8px"}}},
scalePercent:1,
timeColors:[], 
 },
},
tColx0x0x1: {
defaultStyle: {
            default: {"width":"44%","height":"100%","display":"flex","justifyContent":"start","alignItems":"start","backgroundColor":"","flexDirection":"column","paddingLeft":"16px !important"},
            
            },
 default: { 
 
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"44%","height":"100%","display":"flex","justifyContent":"start","alignItems":"start","backgroundColor":"","flexDirection":"column","paddingLeft":"16px !important"}},"total":{"default":{"marginLeft":"0px","marginTop":"0px"}}}, 
 },
},
tComponentx0x0x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0","top":"1px","animationName":"","textAlign":"left","marginBottom":"14px"},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0","top":"1px","animationName":"","textAlign":"left","marginBottom":"14px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x0x1x1: {
defaultStyle: {
            default: {"width":"300px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"absolute","left":"40px","top":"5px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-16)","animationName":"","lineHeight":"20px","textAlign":"left"},
            
            },
 default: { 
 
label:"溶解氧变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"300px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"absolute","left":"40px","top":"5px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-16)","animationName":"","lineHeight":"20px","textAlign":"left"}}}, 
 },
},
tScrollableCardsx0x0x1x2: {
defaultStyle: {
            default: {"width":"100%","height":"68px","minHeight":"68px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","top":"-22px","left":"-362px","position":"unset","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-18)","animationName":"","marginTop":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"68px","minHeight":"68px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","top":"-22px","left":"-362px","position":"unset","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-18)","animationName":"","marginTop":"0px"}},"itemWrapper":{"default":{"width":"24%","height":"68px","marginLeft":"0px","marginRight":"8px !important","cursor":"pointer","backgroundColor":"var(--t-pop-card-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","display":"flex","flexDirection":"column-reverse","justify-content":"center","textAlign":"center","paddingLeft":"0px","color":"var(--t-pop-card-text)"},"active":{"background":"var(--t-pop-card-bg-selected)","color":"var(--t-pop-card-text-selected)"}},"container":{"default":{"width":"100%","height":"auto","paddingLeft":"0px","paddingTop":"0px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"12px","paddingRight":"0px","marginRight":"12px"}},"cardLabel":{"default":{"fontSize":"var(--business-text-size-14)","lineHeight":"24px","fontFamily":"微软雅黑","height":"24px","display":"flex","justify-content":"center","fontWeight":"700","paddingLeft":"0px","textAlign":"center"}},"cardLabelIcon":{"default":{"width":"0px","height":"0px","marginLeft":"0px"}},"cardValue":{"default":{"fontSize":"var(--business-text-size-14)","fontWeight":"700","fontFamily":"微软雅黑","lineHeight":"24px","height":"24px","display":"block","justify-content":"center","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"}},"cardValueUnit":{"default":{"fontSize":"var(--business-text-size-14)","fontWeight":"normal","fontFamily":"微软雅黑","marginLeft":"4px","color":"var(--business-text-avianize)"}},"leftArrowButton":{"default":{"color":"rgba(255, 255, 255, 1) !important","backgroundColor":"var(--t-pop-card-bg)","width":"23px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"52px","marginTop":"8px","display":"none"},"hover":{"color":"var(--business-theme) !important","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)"}},"leftArrow":{"default":{"color":"inherit !important"}},"rightArrow":{"default":{"color":"inherit !important"}},"rightArrowButton":{"default":{"color":"rgba(255, 255, 255, 1) !important","backgroundColor":"var(--t-pop-card-bg)","width":"23px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"52px","marginTop":"8px","display":"none"},"hover":{"color":"var(--business-theme) !important","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)"}}},
showIcon:true,
autoScroll:false,
tab:false,
keyWord:"id",
defaultChecked:"0",
speed:3,
interval:0.5,
cardSpace:0,
direction:"left",
dataAlias:{"value":"value","label":"label","checked":"checked"},
data:[], 
 },
},
tChartDesignx0x0x1x3: {
defaultStyle: {
            default: {"height":"712px","width":"100%","position":"unset","left":"492px","top":"131px","animationName":"","marginBottom":"12px","min-height":"auto","marginTop":"24px"},
            
            },
 default: { 
 
emptyImg:"assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"height":"712px","width":"100%","position":"unset","left":"492px","top":"131px","animationName":"","marginBottom":"12px","min-height":"auto","marginTop":"24px"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"emptyContainer":{"default":{"width":"100%","height":"200px","marginTop":"60px"}},"emptyImg":{"default":{"display":"none"}}},
options:"", 
 },
},
tRectx0x0x1x4: {
defaultStyle: {
            default: {"width":"100%","height":"312px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","color":"#fff"},
            
            },
 default: { 
 
tip:false,
label:"加载中...",
active:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"312px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","color":"#fff"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTablex0x0x1x5: {
defaultStyle: {
            default: {"width":"100%","height":"100%","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"100%",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"时间","type":"default","key":"MONITORTIME","stateKey":"","width":"auto","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)"}}},{"label":"天气","type":"default","key":"WEATHER","stateKey":"","width":"auto","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"电站状态","type":"default","key":"DZ_STATUS","stateKey":"","width":"auto","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"水温","type":"state","key":"W01010_VALUE","stateKey":"w01010Status","width":"auto","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"状态1","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#0075FF","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态2","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#5188B2","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态3","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#DDAA2D","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态4","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#FF8118","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态5","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#E64F1D","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态6","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#FF0000","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"-","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"rgba(119, 119, 119, 1)","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"infoKey":""},{"label":"溶解氧值(mg/L)","type":"state","key":"W01009_VALUE","stateKey":"w01009Status","width":"auto","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"状态1","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#CCFFFF","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态2","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#00CCFF","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态3","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#00FF00","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态4","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#FFFF00","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态5","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#E68C00","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态6","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#FF0000","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"-","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"rgba(119, 119, 119, 1)","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"infoKey":""}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTablex0x0x1x6: {
defaultStyle: {
            default: {"width":"100%","height":"100%","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"100%",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"时间","type":"default","key":"STAGE_NAME","stateKey":"","width":"auto","minWidth":"","align":"left","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)"}}},{"label":"水温(℃)","type":"state","key":"W01010_VALUE","stateKey":"w01010Status","width":"auto","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"状态1","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"50PX","height":"","borderRadius":"2PX","background":"#0075FF","fillType":"color"},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态2","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"50PX","height":"","borderRadius":"2PX","background":"#5188B2","fillType":"color"},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态3","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"50PX","height":"","borderRadius":"2PX","background":"#DDAA2D","fillType":"color"},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态4","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"50PX","height":"","borderRadius":"2PX","background":"#FF8118","fillType":"color"},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态5","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"50PX","height":"","borderRadius":"2PX","background":"#E64F1D","fillType":"color"},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态6","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"50PX","height":"","borderRadius":"2PX","background":"#FF0000","fillType":"color"},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"-","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"50PX","height":"","borderRadius":"2PX","background":"rgba(119, 119, 119, 1)","fillType":"color"},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"infoKey":""},{"label":"溶解氧均值(mg/L)","type":"state","key":"W01009_VALUE","stateKey":"w01009Status","width":"auto","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"状态1","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#CCFFFF","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态2","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#00CCFF","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态3","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#00FF00","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态4","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#FFFF00","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态5","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#E68C00","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"状态6","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"#FF0000","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"-","fontStyle":{"color":"rgba(0, 0, 0, 1)","fontSize":"var(--business-text-size-16)","fontWeight":"normal","padding":"","margin":"","width":"auto","height":"","borderRadius":"2PX","background":"rgba(119, 119, 119, 1)","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tColx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"22px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"117px","pointerEvents":"none","paddingRight":"30px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"22px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"117px","pointerEvents":"none","paddingRight":"30px"}}}, 
 },
},
tTextCommonx0x1x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-switch-text)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"727px","top":"-66px","background":"unset","backgroundClip":"unset","paddingRight":"5px","paddingLeft":"24px","animationName":""},
            
            },
 default: { 
 
label:"水温",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-switch-text)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"727px","top":"-66px","background":"unset","backgroundClip":"unset","paddingRight":"5px","paddingLeft":"24px","animationName":""}}}, 
 },
},
tSwitchx0x1x1: {
defaultStyle: {
            default: {"position":"unset","width":"32px","height":"22px","left":"0","top":"0","animationName":"","right":"0"},
            
            },
 default: { 
 
value:false,
cStyle:{"wrapper":{"default":{"position":"unset","width":"32px","height":"22px","left":"0","top":"0","animationName":"","right":"0"}},"core":{"default":{"backgroundColor":"var(--t-switch-bg)","width":"32px","height":"20px","borderLeft":"0px solid var(--t-switch-bg)","borderTop":"0px solid var(--t-switch-bg)","borderRight":"0px solid var(--t-switch-bg)","borderBottom":"0px solid var(--t-switch-bg)"},"active":{"backgroundColor":"var(--t-switch-bg-selected)","borderLeft":"0px solid var(--t-switch-bg)","borderTop":"0px solid var(--t-switch-bg)","borderRight":"0px solid var(--t-switch-bg)","borderBottom":"0px solid var(--t-switch-bg)"}},"action":{"default":{"width":"15px","height":"15px","top":"2px","left":"2px","marginRight":"0px","backgroundColor":""},"active":{"right":"10px","left":"27px","top":"2px","backgroundColor":"#fff","marginRight":"0px","marginLeft":"-14px"}}}, 
 },
},
tTextCommonx0x1x2: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-switch-text)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"737px","top":"-56px","background":"unset","backgroundClip":"unset","paddingRight":"5px","paddingLeft":"24px","animationName":""},
            
            },
 default: { 
 
label:"试验前均值（1月1日~9月16日）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-switch-text)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"737px","top":"-56px","background":"unset","backgroundClip":"unset","paddingRight":"5px","paddingLeft":"24px","animationName":""}}}, 
 },
},
tSwitchx0x1x3: {
defaultStyle: {
            default: {"position":"unset","width":"32px","height":"22px","left":"20px","top":"45px","animationName":"","right":"0"},
            
            },
 default: { 
 
value:false,
cStyle:{"wrapper":{"default":{"position":"unset","width":"32px","height":"22px","left":"20px","top":"45px","animationName":"","right":"0"}},"core":{"default":{"backgroundColor":"var(--t-switch-bg)","width":"32px","height":"20px","borderLeft":"0px solid var(--t-switch-bg)","borderTop":"0px solid var(--t-switch-bg)","borderRight":"0px solid var(--t-switch-bg)","borderBottom":"0px solid var(--t-switch-bg)"},"active":{"backgroundColor":"var(--t-switch-bg-selected)","borderLeft":"0px solid var(--t-switch-bg)","borderTop":"0px solid var(--t-switch-bg)","borderRight":"0px solid var(--t-switch-bg)","borderBottom":"0px solid var(--t-switch-bg)"}},"action":{"default":{"width":"15px","height":"15px","top":"2px","left":"2px","marginRight":"0px","backgroundColor":""},"active":{"right":"10px","left":"27px","top":"2px","backgroundColor":"#fff","marginRight":"0px","marginLeft":"-14px"}}}, 
 },
},
tTextCommonx0x1x4: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-switch-text)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset","paddingRight":"5px","paddingLeft":"24px"},
            
            },
 default: { 
 
label:"标准值",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-switch-text)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset","paddingRight":"5px","paddingLeft":"24px"}}}, 
 },
},
tSwitchx0x1x5: {
defaultStyle: {
            default: {"position":"unset","width":"32px","height":"22px","left":"20px","top":"45px","animationName":"","right":"0"},
            
            },
 default: { 
 
value:false,
cStyle:{"wrapper":{"default":{"position":"unset","width":"32px","height":"22px","left":"20px","top":"45px","animationName":"","right":"0"}},"core":{"default":{"backgroundColor":"var(--t-switch-bg)","width":"32px","height":"20px","borderLeft":"0px solid var(--t-switch-bg)","borderTop":"0px solid var(--t-switch-bg)","borderRight":"0px solid var(--t-switch-bg)","borderBottom":"0px solid var(--t-switch-bg)"},"active":{"backgroundColor":"var(--t-switch-bg-selected)","borderLeft":"0px solid var(--t-switch-bg)","borderTop":"0px solid var(--t-switch-bg)","borderRight":"0px solid var(--t-switch-bg)","borderBottom":"0px solid var(--t-switch-bg)"}},"action":{"default":{"width":"15px","height":"15px","top":"2px","left":"2px","marginRight":"0px","backgroundColor":""},"active":{"right":"10px","left":"27px","top":"2px","backgroundColor":"#fff","marginRight":"0px","marginLeft":"-14px"}}}, 
 },
},
tColx0x2: {
defaultStyle: {
            default: {"width":"50%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"90px","animationName":"","pointerEvents":"none"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"50%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"90px","animationName":"","pointerEvents":"none"}}}, 
 },
},
tRectx0x2x0: {
defaultStyle: {
            default: {"width":"123px","height":"32px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px none var(--t-rect-border-color)","borderLeft":"0px none var(--t-rect-border-color)","borderBottom":"0px none var(--t-rect-border-color)","borderRight":"0px none var(--t-rect-border-color)","backgroundColor":"var(--t-pop-switch-bg)","borderTopLeftRadius":"24px","borderTopRightRadius":"24px","borderBottomLeftRadius":"24px","borderBottomRightRadius":"24px","color":"var(--t-switch-text)","fontSize":"var(--business-text-size-14)","lineHeight":"32px","marginRight":"0px","paddingRight":"45px","animationName":"","left":"691px","top":"-232px"},
            
            },
 default: { 
 
tip:false,
label:"临时测点",
active:false,
cStyle:{"wrapper":{"default":{"width":"123px","height":"32px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px none var(--t-rect-border-color)","borderLeft":"0px none var(--t-rect-border-color)","borderBottom":"0px none var(--t-rect-border-color)","borderRight":"0px none var(--t-rect-border-color)","backgroundColor":"var(--t-pop-switch-bg)","borderTopLeftRadius":"24px","borderTopRightRadius":"24px","borderBottomLeftRadius":"24px","borderBottomRightRadius":"24px","color":"var(--t-switch-text)","fontSize":"var(--business-text-size-14)","lineHeight":"32px","marginRight":"0px","paddingRight":"45px","animationName":"","left":"691px","top":"-232px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"var(--t-switch-text)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tColx0x3: {
defaultStyle: {
            default: {"width":"50%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"130px","animationName":"","pointerEvents":"none"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"50%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"130px","animationName":"","pointerEvents":"none"}}}, 
 },
},
tRectx0x3x0: {
defaultStyle: {
            default: {"width":"123px","height":"32px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px none var(--t-rect-border-color)","borderLeft":"0px none var(--t-rect-border-color)","borderBottom":"0px none var(--t-rect-border-color)","borderRight":"0px none var(--t-rect-border-color)","backgroundColor":"var(--t-pop-switch-bg)","borderTopLeftRadius":"24px","borderTopRightRadius":"24px","borderBottomLeftRadius":"24px","borderBottomRightRadius":"24px","color":"var(--t-switch-text)","fontSize":"var(--business-text-size-14)","lineHeight":"32px","marginRight":"0px","paddingRight":"45px","animationName":"","left":"701px","top":"-222px"},
            
            },
 default: { 
 
tip:false,
label:"蓄水流量",
active:false,
cStyle:{"wrapper":{"default":{"width":"123px","height":"32px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px none var(--t-rect-border-color)","borderLeft":"0px none var(--t-rect-border-color)","borderBottom":"0px none var(--t-rect-border-color)","borderRight":"0px none var(--t-rect-border-color)","backgroundColor":"var(--t-pop-switch-bg)","borderTopLeftRadius":"24px","borderTopRightRadius":"24px","borderBottomLeftRadius":"24px","borderBottomRightRadius":"24px","color":"var(--t-switch-text)","fontSize":"var(--business-text-size-14)","lineHeight":"32px","marginRight":"0px","paddingRight":"45px","animationName":"","left":"701px","top":"-222px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"var(--t-switch-text)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tColx0x4: {
defaultStyle: {
            default: {"width":"50%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"130px","animationName":"","paddingRight":"8px","pointerEvents":"none"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"50%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"130px","animationName":"","paddingRight":"8px","pointerEvents":"none"}}}, 
 },
},
tSwitchx0x4x0: {
defaultStyle: {
            default: {"position":"static","width":"32px","height":"22px","left":"30px","top":"30px","animationName":"","marginRight":"8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
value:false,
cStyle:{"wrapper":{"default":{"position":"static","width":"32px","height":"22px","left":"30px","top":"30px","animationName":"","marginRight":"8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"core":{"default":{"backgroundColor":"var(--t-switch-bg)","width":"32px","height":"20px","borderLeft":"0px solid var(--t-switch-bg)","borderTop":"0px solid var(--t-switch-bg)","borderRight":"0px solid var(--t-switch-bg)","borderBottom":"0px solid var(--t-switch-bg)"},"active":{"backgroundColor":"var(--t-switch-bg-selected)","borderLeft":"0px solid var(--t-switch-bg)","borderTop":"0px solid var(--t-switch-bg)","borderRight":"0px solid var(--t-switch-bg)","borderBottom":"0px solid var(--t-switch-bg)"}},"action":{"default":{"width":"15px","height":"15px","top":"2px","left":"2px","marginRight":"0px","backgroundColor":"","paddingRight":"0px"},"active":{"right":"10px","left":"27px","top":"2px","backgroundColor":"#fff","marginRight":"0px","marginLeft":"-14px","paddingRight":"0px"}}}, 
 },
},
tColx0x5: {
defaultStyle: {
            default: {"width":"50%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"90px","animationName":"","paddingRight":"8px","pointerEvents":"none"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"50%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"90px","animationName":"","paddingRight":"8px","pointerEvents":"none"}}}, 
 },
},
tSwitchx0x5x0: {
defaultStyle: {
            default: {"position":"static","width":"32px","height":"22px","left":"20px","top":"20px","animationName":"","marginRight":"8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
value:false,
cStyle:{"wrapper":{"default":{"position":"static","width":"32px","height":"22px","left":"20px","top":"20px","animationName":"","marginRight":"8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"core":{"default":{"backgroundColor":"var(--t-switch-bg)","width":"32px","height":"20px","borderLeft":"0px solid var(--t-switch-bg)","borderTop":"0px solid var(--t-switch-bg)","borderRight":"0px solid var(--t-switch-bg)","borderBottom":"0px solid var(--t-switch-bg)"},"active":{"backgroundColor":"var(--t-switch-bg-selected)","borderLeft":"0px solid var(--t-switch-bg)","borderTop":"0px solid var(--t-switch-bg)","borderRight":"0px solid var(--t-switch-bg)","borderBottom":"0px solid var(--t-switch-bg)"}},"action":{"default":{"width":"15px","height":"15px","top":"2px","left":"2px","marginRight":"0px","backgroundColor":"","paddingRight":"0px"},"active":{"right":"10px","left":"27px","top":"2px","backgroundColor":"#fff","marginRight":"0px","marginLeft":"-14px","paddingRight":"0px"}}}, 
 },
},
tColx0x6: {
defaultStyle: {
            default: {"width":"50%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"50px","pointerEvents":"none"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"50%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"50px","pointerEvents":"none"}}}, 
 },
},
tRectx0x6x0: {
defaultStyle: {
            default: {"width":"123px","height":"32px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px none var(--t-rect-border-color)","borderLeft":"0px none var(--t-rect-border-color)","borderBottom":"0px none var(--t-rect-border-color)","borderRight":"0px none var(--t-rect-border-color)","backgroundColor":"var(--t-pop-switch-bg)","borderTopLeftRadius":"24px","borderTopRightRadius":"24px","borderBottomLeftRadius":"24px","borderBottomRightRadius":"24px","color":"var(--t-switch-text)","fontSize":"var(--business-text-size-14)","lineHeight":"32px","marginRight":"0px","paddingRight":"35px"},
            
            },
 default: { 
 
tip:false,
label:"入河排污口",
active:false,
cStyle:{"wrapper":{"default":{"width":"123px","height":"32px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px none var(--t-rect-border-color)","borderLeft":"0px none var(--t-rect-border-color)","borderBottom":"0px none var(--t-rect-border-color)","borderRight":"0px none var(--t-rect-border-color)","backgroundColor":"var(--t-pop-switch-bg)","borderTopLeftRadius":"24px","borderTopRightRadius":"24px","borderBottomLeftRadius":"24px","borderBottomRightRadius":"24px","color":"var(--t-switch-text)","fontSize":"var(--business-text-size-14)","lineHeight":"32px","marginRight":"0px","paddingRight":"35px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"var(--t-switch-text)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tColx0x7: {
defaultStyle: {
            default: {"width":"50%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"50px","animationName":"","paddingRight":"8px","pointerEvents":"none"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"50%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"50px","animationName":"","paddingRight":"8px","pointerEvents":"none"}}}, 
 },
},
tSwitchx0x7x0: {
defaultStyle: {
            default: {"position":"static","width":"32px","height":"22px","left":"10px","top":"10px","animationName":"","marginRight":"8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
value:false,
cStyle:{"wrapper":{"default":{"position":"static","width":"32px","height":"22px","left":"10px","top":"10px","animationName":"","marginRight":"8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"core":{"default":{"backgroundColor":"var(--t-switch-bg)","width":"32px","height":"20px","borderLeft":"0px solid var(--t-switch-bg)","borderTop":"0px solid var(--t-switch-bg)","borderRight":"0px solid var(--t-switch-bg)","borderBottom":"0px solid var(--t-switch-bg)"},"active":{"backgroundColor":"var(--t-switch-bg-selected)","borderLeft":"0px solid var(--t-switch-bg)","borderTop":"0px solid var(--t-switch-bg)","borderRight":"0px solid var(--t-switch-bg)","borderBottom":"0px solid var(--t-switch-bg)"}},"action":{"default":{"width":"15px","height":"15px","top":"2px","left":"2px","marginRight":"0px","backgroundColor":"","paddingRight":"0px"},"active":{"right":"10px","left":"27px","top":"2px","backgroundColor":"#fff","marginRight":"0px","marginLeft":"-14px","paddingRight":"0px"}}}, 
 },
},
});
const setupActiveTimeline = (current) => {
console.log(current)
state.activeTimeline = current.time;
sendTimeMsg();

// 根据蓄水发电不同状态，更新地图状态
updateMapStatus();
};
const setOption = () => {

/**
 * 处理空值显示
 * @param {*} val 需要处理的值
 * @returns 格式化后的值
 */
function handleNoVal(val) {
  return val === undefined || val === null || val === '' ? '-' : val;
}



// ========== 集成到你的原有图表配置中 ==========
state.chartOption = {
  "dataZoom": [
    {
      "type": "slider",
      "height": 10,
      bottom: '4%',
      xAxisIndex: [0, 1, 2],
      textStyle: {
        color: '#fff'
      }
    },
    {
      type: 'inside',
      xAxisIndex: [0, 1, 2],
    }
  ],
  grid: {
    top: '20%',
    left: '8%',
    right: '5%',
    bottom: '22%'
  },
  color: ['#1CD180', '#FF4D4F', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
  legend: {
    show: false,
    icon: 'rect',
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: 'var(--business-white)',
      // fontSize: 13
      fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
    },
    data: ['当日值', '标准值']
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    textStyle: {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
    },
  },
  xAxis: {
    type: 'category',
    data: state.selectId === '0' ? state.tableData.map(item => item.STAGE_NAME) : state.tableData.map(item => item.MONITORTIME), // 后续从tableData赋值
    axisLabel: {
      color: 'var(--skin-font-color-80)',
      // fontSize: 13,
      fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14,
      rotate: 0,
      align: 'center',
      margin: 10
    },
    axisLine: {
      lineStyle: {
        type: 'solid',
        color: 'var(--skin-font-color-40)'
      }
    },
    axisTick: {
      alignWithLabel: true,
      show: true,
      lineStyle: {
        color: 'var(--skin-font-color-40)'
      }
    },
    nameTextStyle: {
      color: 'var(--skin-font-color-60)',
      // fontSize: 13
      fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14

    },
  },
  yAxis: [{
    type: 'value',
    axisLabel: {
      color: 'var(--skin-font-color-80)',
      // fontSize: 13
      fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14

    },
    axisLine: {
      show: true,
      lineStyle: {
        type: 'solid',
        color: 'var(--skin-font-color-40)'
      }
    },
    name: 'mg/L',
    nameTextStyle: {
      color: 'var(--skin-font-color-60)',
      align: 'right',
      padding: [0, 0, 0, 0],
      // fontSize: 13
      fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14

    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: 'var(--skin-font-color-20)'
      }
    },
    // 确保y轴范围包含5
    min: 0,
    max: function (value) {
      return Math.max(value.max || 0, state.standardNum.num1) + 1;
    }
  }],
  series: [
    // 原有柱状图系列
    {
      name: '溶解氧值（MG/L）',
      type: 'bar',
      data: state.tableData.map(item => Number(item.W01009_VALUE)), // 后续从tableData赋值
      itemStyle: {
        color: '#1CD180'
      },
      barWidth: 12,
      yAxisIndex: 0,
    }
  ]
};

console.log('state.chartOption', state.chartOption)

// ========== 使用示例 ==========
// 假设tableData是x轴数据，赋值后刷新图表
// let tableData = ['8:00', '9:00', '10:00'];
// state.chartOption.xAxis.data = tableData;
// state.chartOption.series[0].data = [3, 6, 4]; // 示例柱状图数据
// myChart.setOption(state.chartOption); // 刷新图表
};
const setDom = () => {
const componentDom = document.querySelector('#t-l-c-oxygenControl');

const styles = document.createElement('style');
styles.innerHTML = `
.t-l-c-oxygenControl {
  width: 100% !important;
  height: 100% !important; 
}
`;
setTimeout(() => {
  const time = state.cardData[2].value.split('~')[0];
  componentDom.append(styles);
  const doms = document.querySelectorAll('#t-l-c-oxygenControl .scrollable-cards-item');
  console.log(doms, '卡片dom组');
  // 遍历每个元素，替换title属性
  doms.forEach((item, index) => {
    if (index === 2) {
      // 1. 替换当前元素的title（如果有的话）
      if (item.hasAttribute('title')) {
        item.setAttribute('title', `自${time}开始，受降温、阴天、西溪上游来水水质较差和水量增加等影响,沙溪口水电站蓄水时长减少，溶解氧提升效果变差`);
      }

      // 2. 替换子元素中的title属性
      const childElementsWithTitle = item.querySelectorAll('[title]');
      childElementsWithTitle.forEach(child => {
        child.setAttribute('title', `自${time}开始，受降温、阴天、西溪上游来水水质较差和水量增加等影响，沙溪口水电站蓄水时长减少，溶解氧提升效果变差`);
      });
    }
    if (index === 1 || index === 3) {
      // 1. 替换当前元素的title（如果有的话）
      if (item.hasAttribute('title')) {
        item.setAttribute('title', '三天蓄水，—天发电');
      }

      // 2. 替换子元素中的title属性
      const childElementsWithTitle = item.querySelectorAll('[title]');
      childElementsWithTitle.forEach(child => {
        child.setAttribute('title', '三天蓄水，—天发电');
      });
    }
    if (index === 0 || index === 4) {
      // 1. 替换当前元素的title（如果有的话）
      if (item.hasAttribute('title')) {
        item.setAttribute('title', '');
      }

      // 2. 替换子元素中的title属性
      const childElementsWithTitle = item.querySelectorAll('[title]');
      childElementsWithTitle.forEach(child => {
        child.setAttribute('title', '');
      });
    }
  });
}, 1000)
};
const setSelectCard = (data) => {

console.log(data.id, state.selectedCard, 'state.selectedCard')
state.selectId = data.id;
const send = async () => {
  await sendStageChangedMsg();
  await apiRegistry.getTimeData.request();
  await sendTimeMsg();
  if (state.selectId === '0') {
    await apiRegistry.getFirstData.request();
  } else {
    await apiRegistry.getAfterData.request();
  }
  state.switchOne = false;
  state.switchTwo = false;
  // 第一阶段和第三阶段，第二阶段和第四阶段（区分蓄水和发电柱子颜色）
  if (state.selectId === '0' || state.selectId === '2') {
    setOption();
  } else {
    setOption1();
  }
  // 处理水温
  handlewaterTemperature();
  state.isShow = false;
  setTimeout(() => {
    state.isShow = true;
  }, 0)
}
send();


};
const initData = () => {
// state.monitorTime = global.businessDialog.dialogParmas.monitorTime;
// state.assessType = global.businessDialog.dialogParmas.assessType;
state.pointCode = 'A350700_0002';//  global.businessDialog.dialogParmas.pointCode ||
// state.dataSourcetype = global.businessDialog.dialogParmas.dataSourcetype;
console.log(global.businessDialog.dialogParmas, '弹窗参数')
state.firstTitle = global.businessDialog.dialogParmas?.title ? (global.businessDialog.dialogParmas?.title + '溶解氧空间变化示意') : '十里庵溶解氧空间变化示意'
state.twoTitle = global.businessDialog.dialogParmas?.title ? (global.businessDialog.dialogParmas?.title + '溶解氧变化趋势') : '十里庵溶解氧变化趋势';
const init = async () => {
  await apiRegistry.getCardData.request();
  await apiRegistry.getTimeData.request();
  await apiRegistry.getbzzDataOne.request();
  await apiRegistry.getbzzData.request();
  await apiRegistry.getFirstData.request();
  await setOption();
}
init();
};
const sendTimeMsg = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "timeChanged", // 消息名称
  data: {
    MONITORTIME: state.selectedId === '0' ? '' : state.activeTimeline
  }, // 发送的数据
});
};
const sendStageChangedMsg = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "stageChanged", // 消息名称
  data: {
    stage: state.selectId
  }, // 发送的数据
});
};
const initMsg = (data) => {
if (data.sceneName === 'shilian_scene') {
  sendChangeLayerMsgOne(false);
  sendChangeLayerMsgTwo(false);
  sendStageChangedMsg();
  sendTimeMsg();
}
};
const sendChangeLayerMsgOne = (data) => {
console.log(data,'888888')
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeLayerVisibility',
  data: {
    layerId: '入河（海）排污口', //入河（海）排污口、临时测点
    visible: data// true/false
  }
});
};
const sendChangeLayerMsgTwo = (data) => {
console.log(data,'999999')
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeLayerVisibility',
  data: {
    layerId: '临时测点', //入河（海）排污口、临时测点
    visible: data// true/false
  }
});
};
const setStandard = (standardValue,seriesName,lineColor) => {
/**
 * 生成标准线系列配置（值standardValue）
 * @param {string} seriesName 系列名称（如"标准值"）
 * @param {string} lineColor 线条颜色（可选）
 * @returns 标准线系列配置
 */
return {
  name: seriesName,
  "type": "line",
  "symbol": "none",
  "lineStyle": {
    "type": "dashed",
    "width": 0 // 隐藏基础折线，只显示markLine
  },
  itemStyle: {
    color: lineColor || defaultLineColor,
  },
  markLine: {
    'symbol': 'none', // 隐藏markLine两端的箭头/标记
    "label": {
      position: 'insideEndTop', // 标签位置
      "color": lineColor || defaultLineColor,
      // "fontSize": 12,
      "fontSize": parseInt(getCssVariable('--business-text-size-12')) || 12,
      formatter: () => {
        // 固定显示标准值：5
        return `${handleNoVal(seriesName)}：${handleNoVal(standardValue)}`;
      }
    },
    "data": [
      {
        // 核心修改：直接指定y轴值为5，替代原有的max/average计算
        yAxis: standardValue,
        // 可选：添加名称便于调试
        name: '标准线'
      }
    ],
    "silent": true, // 禁用交互，避免影响其他图表元素
    // 补充：确保markLine样式可见
    lineStyle: {
      type: 'dashed', // 标准线用实线（可改为dashed）
      width: 1,      // 线宽，确保可见
      color: lineColor || defaultLineColor // 线条颜色
    }
  },
  // 补充：必须给一个空数据数组（否则ECharts可能不渲染markLine）
  data: []
};
};
const restChart = () => {
console.log(state.switchOne, state.switchTwo)
// 1. 处理 switchOne（试验前均值）的显示/隐藏
if (state.switchOne) {
  // 添加试验前均值系列（先判断是否已存在，避免重复添加）
  const hasBeforeAvg = state.chartOption.series.some(item => item.name === '试验前均值');
  if (!hasBeforeAvg) {
    state.chartOption.series.push(setStandard(state.standardNum.num, '试验前均值', '#00FFFF'));
  }
} else {
  // state.isShow = false;
  // setTimeout(() => {
  //   state.isShow = true;
  //   setOption();
  //   // 移除试验前均值系列
  //   state.chartOption.series = state.chartOption.series.filter(item => item.name !== '试验前均值');
  // }, 0)
  state.chartOption.series = state.chartOption.series.filter(item => item.name !== '试验前均值');

}

// 2. 处理 switchTwo（各类标准值）的显示/隐藏
// 定义Ⅱ-Ⅴ类标准值的名称列表，用于批量移除
const standardNames = ['Ⅰ类标准值', 'Ⅱ类标准值', 'Ⅲ类标准值', 'Ⅳ类标准值', 'Ⅴ类标准值'];
if (state.switchTwo) {
  // 批量添加各类标准值（先判断是否已存在，避免重复）
  const addStandardItem = (num, name, color) => {
    const exists = state.chartOption.series.some(item => item.name === name);
    if (!exists) {
      state.chartOption.series.push(setStandard(num, name, color));
    }
  };
  addStandardItem(state.standardNum.num1, 'Ⅰ类标准值', '#8FCDFF');
  addStandardItem(state.standardNum.num2, 'Ⅱ类标准值', '#0280F6');
  addStandardItem(state.standardNum.num3, 'Ⅲ类标准值', '#00DA2A');
  addStandardItem(state.standardNum.num4, 'Ⅳ类标准值', '#F6C200');
  addStandardItem(state.standardNum.num5, 'Ⅴ类标准值', '#FC926A');
  // addStandardItem(state.standardNum.num6, '劣Ⅴ类标准值', '#FC926A');
} else {

  state.chartOption.series = state.chartOption.series.filter(item => !standardNames.includes(item.name));
}
  state.isShow = false;
  setTimeout(() => {
    state.isShow = true;
  }, 0)
};
const handlewaterTemperature = () => {

if (state.waterTemperatureSwitch) {
  state.chartOption.yAxis.push(
    {
      // 👇 右侧 Y 轴：水温（℃）
      type: 'value',
      name: '℃',
      position: 'right',
      axisLabel: {
        color: 'var(--skin-font-color-80)',
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'var(--skin-font-color-40)'
        }
      },
      nameTextStyle: {
        color: 'var(--skin-font-color-60)',
        align: 'left',
        fontSize: 13
      },
      splitLine: {
        show: false // 可选：避免与左侧网格线重叠
      },
    }
  )
  state.chartOption.series.push({
    name: '水温(℃)',
    type: 'line',
    data: state.tableData.map(item => Number(item.W01010_VALUE)), // 后续从tableData赋值
    itemStyle: {
      color: '#A78735'
    },
    symbol: 'none',
    yAxisIndex: 1,
  })
} else {
  const index = state.chartOption.series.findIndex(i => i.type === 'line' && i.name === '水温(℃)')
  if (index > -1) {
    state.chartOption.series.splice(index, 1)
  }
  const yIndex = state.chartOption.yAxis.findIndex(i => i.yAxisIndex === 1)
  if (yIndex > -1) {
    state.chartOption.yAxis.splice(yIndex, 1)
  }

}
console.log('option', state.chartOption)
};
const setCardStyle = () => {
const sheet = new CSSStyleSheet();
sheet.insertRule(`.t-scrollable-cards.oxygenControl-t-scrollable-cards-0-0-1-2 .scrollable-cards-container .scrollable-cards-body {
width: 100% !important;
}`);

document.adoptedStyleSheets = [sheet];

};
const handleW01009Status = (data) => {
   const value = data ? Number(data) : '-'
   switch (true) {
        case value > 7.5:
            return "状态1";
        case value >= 6 && value <= 7.5:
            return "状态2";
        case value >= 5 && value < 6:
            return "状态3";
        case value >= 3 && value < 5:
            return "状态4";
        case value >= 2 && value < 3:
            return "状态5";
        case value < 2:
            return "状态6";
        default:
            return "-";
    }
};
const handleWaterTemperatureSatus = (data) => {
const value = data ? Number(data) : '-';

switch (true) {
    case value < 10:
        return "状态1";
    case value >= 10 && value < 15:
        return "状态2";
    case value >= 15 && value < 20:
        return "状态3";
    case value >= 20 && value < 25:
        return "状态4";
    case value >= 25 && value < 30:
        return "状态5";
    case value >= 30:
        return "状态6";
    default:
        return "-";
}
};
const sendChangeLayerMsgThree = (value) => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'setRiverFlowVisibility',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'visible': value,
    }
  }
);
};
const setOption1 = () => {

/**
 * 处理空值显示
 * @param {*} val 需要处理的值
 * @returns 格式化后的值
 */
function handleNoVal(val) {
  return val === undefined || val === null || val === '' ? '-' : val;
}



// ========== 集成到你的原有图表配置中 ==========
state.powerGenerationData = []
state.storeWaterData = []
state.tableData.forEach(item => {
  if (item?.DZ_STATUS === '蓄水') {
    state.storeWaterData.push(Number(item?.W01009_VALUE))
    state.powerGenerationData.push(null)
  } else if (item?.DZ_STATUS === '放水' || item?.DZ_STATUS === '发电') {
    state.storeWaterData.push(null)
    state.powerGenerationData.push(Number(item?.W01009_VALUE))
  }
})
let markLine = {}
if (state.selectId === '1') {
  markLine = {
    silent: true,
    symbol: 'none', // 去掉端点箭头
    lineStyle: {
      color: '#FFC300',
      width: 2,
      type: 'dashed' // 虚线
    },
    data: [
      {
        xAxis: 1, // 在 '10-16' 和 '10-17' 之间
        label: {
          show: false // 如果不需要文字标签
        }
      }
    ]
  }
}
state.chartOption = {
  "dataZoom": [
    {
      "type": "slider",
      "height": 10,
      bottom: '4%',
      xAxisIndex: [0, 1, 2],
      textStyle: {
        color: '#fff'
      }
    },
    {
      type: 'inside',
      xAxisIndex: [0],
    }
  ],
  grid: {
    top: '20%',
    left: '8%',
    right: '5%',
    bottom: '22%'
  },
  color: ['#1CD180', '#FF4D4F', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
  legend: {
    show: true,
    icon: 'rect',
    itemWidth: 20,
    itemHeight: 10,
    textStyle: {
      color: 'var(--business-text-avianize)',
      fontSize: 13
    },
    left: '80',
    top: '8'
  },
  // tooltip: {
  //   trigger: 'axis',
  //   backgroundColor: 'rgba(0, 0, 0, 0.8)',
  //   borderColor: 'rgba(255, 255, 255, 0.5)',
  //   textStyle: {
  //     color: 'rgba(255, 255, 255, 1)'
  //   },
  //   formatter: function (params) {
  //     // 获取 x 轴标签（日期）
  //     const date = params[0]?.name || '';
  //     let html = `<div style="padding: 8px; font-weight: bold;">${date}</div>`;

  //     // 遍历当前 x 位置上所有非空数据项（通常只有1个，因为互斥）
  //     params.forEach(param => {
  //       if (param.value != null && !isNaN(param.value)) {
  //         const color = param.color;
  //         const value = Number(param.value).toFixed(2); // 保留1位小数（可选）

  //         html += `
  //         <div style="margin-top: 6px; display: flex; align-items: center;">
  //           <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ${color}; margin-right: 6px;"></span>
  //           <span>溶解氧值（MG/L）${value}</span>
  //         </div>
  //       `;
  //       }
  //     });

  //     return html;
  //   }
  // },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    textStyle: {
      color: 'rgba(255, 255, 255, 1)'
    },
    formatter: function (params) {
      const date = params[0]?.name || '';
      let lines = [`<div style="font-size:13px;">${date}</div><br />`];

      // 找到"蓄水"或"发电"系列中第一个有值的参数
      const doParam = params.find(param =>
        (param.seriesName === '蓄水' || param.seriesName === '发电') && param.value != null
      );
      if (doParam) {
        const val = doParam.value;
        const display = `${Number(val).toFixed(2)} mg/L`;
        lines.push(
          `<div style="display:flex; align-items:center; margin:4px 0;">
    <span
        style="display:inline-block;width:10px;height:10px;background-color:${doParam.color};margin-right:8px;"></span>
    溶解氧: ${display}
</div>`
        );
      }

      // 保留水温显示（如有有效值）
      const tempParam = params.find(p => p.seriesName === '水温(℃)');
      if (tempParam && tempParam.value != null) {
        const temp = Number(tempParam.value).toFixed(2);
        lines.push(
          `<div style="display:flex; align-items:center; margin:4px 0;">
    <span
        style="display:inline-block;width:10px;height:10px;background-color:${tempParam.color};margin-right:8px;"></span>
    水温: ${temp} ℃
</div>`
        );
      }

      return lines.join('');
    }
  },
  xAxis: {
    type: 'category',
    data: state.selectId === '0' ? state.tableData.map(item => item.STAGE_NAME) : state.tableData.map(item => item.MONITORTIME), // 后续从tableData赋值
    axisLabel: {
      color: 'var(--skin-font-color-80)',
      fontSize: 13,
      rotate: 0,
      align: 'center',
      margin: 10
    },
    axisLine: {
      lineStyle: {
        type: 'solid',
        color: 'var(--skin-font-color-40)'
      }
    },
    axisTick: {
      alignWithLabel: true,
      show: true,
      lineStyle: {
        color: 'var(--skin-font-color-40)'
      }
    },
    nameTextStyle: {
      color: 'var(--skin-font-color-60)',
      fontSize: 13
    },
  },
  yAxis: [{
    type: 'value',
    axisLabel: {
      color: 'var(--skin-font-color-80)',
      fontSize: 13
    },
    axisLine: {
      show: true,
      lineStyle: {
        type: 'solid',
        color: 'var(--skin-font-color-40)'
      }
    },
    name: 'mg/L',
    nameTextStyle: {
      color: 'var(--skin-font-color-60)',
      align: 'right',
      padding: [0, 0, 0, 0],
      fontSize: 13
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: 'var(--skin-font-color-20)'
      }
    },
    // 确保y轴范围包含5
    min: 0,
    max: function (value) {
      return Math.max(value.max || 0, state.standardNum.num1) + 1;
    }
  }],
  series: [
    // 原有柱状图系列
    {
      name: '蓄水',
      type: 'bar',
      data: state.storeWaterData,
      itemStyle: {
        color: '#0075FF'
      },
      barGap: '-100%',
      barWidth: 12,
      // markLine: markLine,
      yAxisIndex: 0,
    },
    {
      name: '发电',
      type: 'bar',
      data: state.powerGenerationData,
      itemStyle: {
        color: '#1CD180'
      },
      barGap: '-100%',
      barWidth: 12,
      yAxisIndex: 0,
    }
  ]
};

console.log('state.chartOption', state.chartOption)

};
const openVideoDialog = () => {
rootData.rootSocket.emit('message',
{
  room: global.socketRoom, // 房间号
  type: "createDialog", // 消息名称
  data: {
        "params": {
            "title": "跌水视频",
            "maxHeight": "850px",
            "maxWidth": "1000px",
            "minHeight": "850px",
            "minWidth": "1000px",
            "contentComName": "dszyVideoComponent",
            "hiddenScaleButton":true

        }
    }, // 发送的数据
});
};
const updateMapStatus = () => {
const currentStatus = state.timeLineData.find(i => i.DAY_DATE === state.activeTimeline)?.dz_status || '蓄水'
let stage = '0'
if(currentStatus === '放水' || currentStatus === '发电'){
  stage = '0'
}else if(currentStatus === '蓄水'){
  stage = '1'
}
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'riverStatusChanged',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'stage': stage
    }
  }
);
};
const handleOxyMapPointClick = (data) => {
console.log('处理溶解氧地图点击事件', data, state.selectId);

// 点位信息
const pointInfo = {
  ...data?.feature?.properties,
};

// 如果当前点击的是跌水增氧，就要打开视频弹框
if (state.selectId === '2') {
  console.log('如果当前点击的是跌水增氧，就要打开视频弹框');
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "createDialog", // 消息名称
    data: {
      params: {
        ...pointInfo,
        "title": `${pointInfo?.name || ''}跌水增氧视频`,
        "maxHeight": "997px",
        "maxWidth": "1600px",
        "minHeight": "716px",
        "minWidth": "1002px",
        "contentComName": "dszyVideoComponent"
      }
    }, // 发送的数据
  });

}

// {
//     "feature": {
//         "type": "Feature",
//         "properties": {
//             "name": "沙溪口电站",
//             "lon": 118.0828719,
//             "lat": 26.587329
//         },
//         "geometry": {
//             "type": "Point",
//             "coordinates": [
//                 118.0828719,
//                 26.587329
//             ]
//         }
//     }
// }
};
const oncardClick1766720540747 = (data) => {
// 执行自定义方法
setSelectCard(data);
};
const ontimeChange1766641044034_0_0 = (data) => {
// 执行自定义方法
setupActiveTimeline(data);
};
const oncurrentChange1766654455748_0_0 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
};
const onchange1766735714328 = (value) => {
// 执行自定义方法
sendChangeLayerMsgOne(value);
};
const onchange1766735857272 = (value) => {
// 执行自定义方法
sendChangeLayerMsgTwo(value);
};
const onchange1766833817841 = (value) => {
// 设置变量值
state.waterTemperatureSwitch = value;
// 执行自定义方法
handlewaterTemperature("","","");
};
const onchange1766833861038 = (value) => {
// 设置变量值
state.switchTwo = value;
// 执行自定义方法
restChart();
};
const onchange1768441177421_0_0 = (value) => {
// 设置变量值
state.switchOne = value;
// 执行自定义方法
restChart();
};
const onchange1768802905611_0_0 = (value) => {
// 执行自定义方法
sendChangeLayerMsgThree(value);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getCardData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"c4ce7d728c473e6e655365f1c1b6290e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"c4ce7d728c473e6e655365f1c1b6290e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"c4ce7d728c473e6e655365f1c1b6290e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardData'] = res.data;
                
     state.cardData = [];
state.selectedCard = '';
if (res?.data?.data) {
  console.log(res);
  state.cardData = res.data.data.map(item => {
    return {
      "id": item.STAGE_ID,
      // value 取原始数据的 STAGE_NAME
      "value": item.STAGE_DATE,
      // label 格式：第[STAGE_ID]阶段 ([STAGE_DATE])
      "label": `${item.STAGE_ID} (${item.STAGE_NAME})`
    };
  });
  state.selectedCard = state.cardData[0].id;
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
 getTimeData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"STAGE_ID":"state.selectId","interfaceId":"1ba72e06104b43a425773a47c588bac5"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"STAGE_ID":state.selectId,"interfaceId":"1ba72e06104b43a425773a47c588bac5"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"STAGE_ID":state.selectId,"interfaceId":"1ba72e06104b43a425773a47c588bac5"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTimeData'] = res.data;
                
     state.timeData = [];
state.timeLineColor = []
state.activeTimeline = '';
state.timeLineData = []
if (res?.data?.data.length) {
  state.timeLineData = res?.data?.data
  console.log(res);
  res.data.data.forEach((item) => {
    state.timeData.push(item.DAY_DATE);
    if (item?.dz_status === '放水' || item?.dz_status === '发电') {
      state.timeLineColor.push('#1CD180')
    } else if (item?.dz_status === '蓄水') {
      state.timeLineColor.push('#0075FF')
    }
  })
  state.activeTimeline = state.timeData[0];
  // 蓄水发电阶段（1、3）需要更新河流状态
  if (state.selectId === '1' || state.selectId === '3') {
    updateMapStatus();
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
 getFirstData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"STAGE_ID":"0","POINT_CODE":"state.pointCode","interfaceId":"f2019d52591e06e09a5f99054840c8f6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"STAGE_ID":"0","POINT_CODE":state.pointCode,"interfaceId":"f2019d52591e06e09a5f99054840c8f6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"STAGE_ID":"0","POINT_CODE":state.pointCode,"interfaceId":"f2019d52591e06e09a5f99054840c8f6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getFirstData'] = res.data;
                
     state.tableData = [];
if (res?.data?.data?.length > 0) {
  state.tableData = res.data.data.map(item =>{
    return{
      ...item,
      STAGE_NAME: item?.YEARMONTH || '-',
      W01009_VALUE: item?.W01009_VALUE || '-', 
      W01010_VALUE :item?.W01010_VALUE || '-',
      w01010Status: handleWaterTemperatureSatus(item?.W01010_VALUE),
      w01009Status: handleW01009Status(item?.W01009_VALUE)
    }
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
// 接口函数
 getbzzDataOne: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","interfaceId":"a3f7be9e90919a5a13bd499a4ba28835"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"interfaceId":"a3f7be9e90919a5a13bd499a4ba28835"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"interfaceId":"a3f7be9e90919a5a13bd499a4ba28835"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getbzzDataOne'] = res.data;
                
     state.standardNum.num = '';
console.log(res, '前均值');
if (res?.data?.data?.length > 0) {
  state.standardNum.num = res?.data?.data[0].W01009_VALUE;
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
 getbzzData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POLLUTE_CODE":"W01009","interfaceId":"028be138ebc011420fe6a6c9091a8df1"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE_CODE":"W01009","interfaceId":"028be138ebc011420fe6a6c9091a8df1"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POLLUTE_CODE":"W01009","interfaceId":"028be138ebc011420fe6a6c9091a8df1"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getbzzData'] = res.data;
                
     
console.log(res);
const { data } = res;
if (data.head.statusCode === '200' && data.data.length) {
  state.standardNum.num1 = res.data.data[0].MIN_VALUE || '';
  state.standardNum.num2 = res.data.data[1].MIN_VALUE || '';
  state.standardNum.num3 = res.data.data[2].MIN_VALUE || '';
  state.standardNum.num4 = res.data.data[3].MIN_VALUE || '';
  state.standardNum.num5 = res.data.data[4].MIN_VALUE || '';
  state.standardNum.num6 = res.data.data[5].MIN_VALUE || '';
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
 getAfterData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"pageSize":"state.pageSize","pageNum":"state.pageNum","STAGE_ID":"state.selectId","POINT_CODE":"state.pointCode","interfaceId":"a9b7fe1933e397369364b70f4f058d21"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"pageSize":state.pageSize,"pageNum":state.pageNum,"STAGE_ID":state.selectId,"POINT_CODE":state.pointCode,"interfaceId":"a9b7fe1933e397369364b70f4f058d21"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"pageSize":state.pageSize,"pageNum":state.pageNum,"STAGE_ID":state.selectId,"POINT_CODE":state.pointCode,"interfaceId":"a9b7fe1933e397369364b70f4f058d21"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getAfterData'] = res.data;
                
     state.tableData = [];
if (res?.data?.data?.length > 0) {
  state.pageSize = res.data.pageInfo?.pageSize;
  state.pageNum = res.data.pageInfo?.pageNum;
  state.total = res.data.pageInfo?.total;
  state.tableData = res.data.data.map(item => {
    return {
      ...item,
      DZ_STATUS: item?.DZ_STATUS === '放水' ? '发电' : item?.DZ_STATUS,
      W01009_VALUE: item?.W01009_VALUE || '-',
      W01010_VALUE: item?.W01010_VALUE || '-',
      w01010Status: handleWaterTemperatureSatus(item?.W01010_VALUE),
      w01009Status: handleW01009Status(item?.W01009_VALUE)
    }
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
                            setPageScale('t-l-c-oxygenControl', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
/* 接收socket.io消息 */
const onSocketChange030f96c5098a46a7ad38 = function (data) {
if(data.type === "sceneInitCompleted"){
try{
// 执行自定义方法
initMsg(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange030f96c5098a46a7ad38);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange030f96c5098a46a7ad38);
});
/* 接收socket.io消息 */
const onSocketChange0c7bf2c08fd74a04b397 = function (data) {
if(data.type === "oxyMapPointClick"){
try{
// 执行自定义方法
handleOxyMapPointClick(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange0c7bf2c08fd74a04b397);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange0c7bf2c08fd74a04b397);
});
onMounted(() => {
setPageScale('t-l-c-oxygenControl', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setDom();
// 执行自定义方法
setCardStyle();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tColx0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0.default, componentState.tColx0x0x0?.[state.screenSize]));

 const tComponentx0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0x0x0.default, componentState.tComponentx0x0x0x0?.[state.screenSize]));

 const tTextx0x0x0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x0x1.default, componentState.tTextx0x0x0x1?.[state.screenSize]));

 const tIframex0x0x0x3ComputedData = computed(() => _.merge({}, componentState.tIframex0x0x0x3.default, componentState.tIframex0x0x0x3?.[state.screenSize]));

 const tTimelineBasex0x0x0x4ComputedData = computed(() => _.merge({}, componentState.tTimelineBasex0x0x0x4.default, componentState.tTimelineBasex0x0x0x4?.[state.screenSize]));

 const tColx0x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1.default, componentState.tColx0x0x1?.[state.screenSize]));

 const tComponentx0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0x1x0.default, componentState.tComponentx0x0x1x0?.[state.screenSize]));

 const tTextx0x0x1x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x1x1.default, componentState.tTextx0x0x1x1?.[state.screenSize]));

 const tScrollableCardsx0x0x1x2ComputedData = computed(() => _.merge({}, componentState.tScrollableCardsx0x0x1x2.default, componentState.tScrollableCardsx0x0x1x2?.[state.screenSize]));

 const tChartDesignx0x0x1x3ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x0x1x3.default, componentState.tChartDesignx0x0x1x3?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRectx0x0x1x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x0x1x4.default, componentState.tRectx0x0x1x4?.[state.screenSize]));

 const tTablex0x0x1x5ComputedData = computed(() => _.merge({}, componentState.tTablex0x0x1x5.default, componentState.tTablex0x0x1x5?.[state.screenSize]));

 const tTablex0x0x1x6ComputedData = computed(() => _.merge({}, componentState.tTablex0x0x1x6.default, componentState.tTablex0x0x1x6?.[state.screenSize]));

 const tColx0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1.default, componentState.tColx0x1?.[state.screenSize]));

 const tTextCommonx0x1x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x0.default, componentState.tTextCommonx0x1x0?.[state.screenSize]));

 const tSwitchx0x1x1ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x1x1.default, componentState.tSwitchx0x1x1?.[state.screenSize]));

 const tTextCommonx0x1x2ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x2.default, componentState.tTextCommonx0x1x2?.[state.screenSize]));

 const tSwitchx0x1x3ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x1x3.default, componentState.tSwitchx0x1x3?.[state.screenSize]));

 const tTextCommonx0x1x4ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x4.default, componentState.tTextCommonx0x1x4?.[state.screenSize]));

 const tSwitchx0x1x5ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x1x5.default, componentState.tSwitchx0x1x5?.[state.screenSize]));

 const tColx0x2ComputedData = computed(() => _.merge({}, componentState.tColx0x2.default, componentState.tColx0x2?.[state.screenSize]));

 const tRectx0x2x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x0.default, componentState.tRectx0x2x0?.[state.screenSize]));

 const tColx0x3ComputedData = computed(() => _.merge({}, componentState.tColx0x3.default, componentState.tColx0x3?.[state.screenSize]));

 const tRectx0x3x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x3x0.default, componentState.tRectx0x3x0?.[state.screenSize]));

 const tColx0x4ComputedData = computed(() => _.merge({}, componentState.tColx0x4.default, componentState.tColx0x4?.[state.screenSize]));

 const tSwitchx0x4x0ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x4x0.default, componentState.tSwitchx0x4x0?.[state.screenSize]));

 const tColx0x5ComputedData = computed(() => _.merge({}, componentState.tColx0x5.default, componentState.tColx0x5?.[state.screenSize]));

 const tSwitchx0x5x0ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x5x0.default, componentState.tSwitchx0x5x0?.[state.screenSize]));

 const tColx0x6ComputedData = computed(() => _.merge({}, componentState.tColx0x6.default, componentState.tColx0x6?.[state.screenSize]));

 const tRectx0x6x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x6x0.default, componentState.tRectx0x6x0?.[state.screenSize]));

 const tColx0x7ComputedData = computed(() => _.merge({}, componentState.tColx0x7.default, componentState.tColx0x7?.[state.screenSize]));

 const tSwitchx0x7x0ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x7x0.default, componentState.tSwitchx0x7x0?.[state.screenSize]));

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
tComponentx0x0x0x0ComputedData,
tTextx0x0x0x1ComputedData,
tIframex0x0x0x3ComputedData,
tTimelineBasex0x0x0x4ComputedData,
tColx0x0x1ComputedData,
tComponentx0x0x1x0ComputedData,
tTextx0x0x1x1ComputedData,
tScrollableCardsx0x0x1x2ComputedData,
tChartDesignx0x0x1x3ComputedData,
tRectx0x0x1x4ComputedData,
tTablex0x0x1x5ComputedData,
tTablex0x0x1x6ComputedData,
tColx0x1ComputedData,
tTextCommonx0x1x0ComputedData,
tSwitchx0x1x1ComputedData,
tTextCommonx0x1x2ComputedData,
tSwitchx0x1x3ComputedData,
tTextCommonx0x1x4ComputedData,
tSwitchx0x1x5ComputedData,
tColx0x2ComputedData,
tRectx0x2x0ComputedData,
tColx0x3ComputedData,
tRectx0x3x0ComputedData,
tColx0x4ComputedData,
tSwitchx0x4x0ComputedData,
tColx0x5ComputedData,
tSwitchx0x5x0ComputedData,
tColx0x6ComputedData,
tRectx0x6x0ComputedData,
tColx0x7ComputedData,
tSwitchx0x7x0ComputedData,
ontimeChange1766641044034_0_0,
oncardClick1766720540747,
onchange1766833817841,
onchange1768441177421_0_0,
onchange1766833861038,
onchange1768802905611_0_0,
onchange1766735857272,
onchange1766735714328,
};
},
}
</script>

<style scoped>
.t-l-c-oxygenControl {
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
position: Relative;
z-index: 0;
filter: ;
width: 1054px;
height: 580px;
background-color: rgba(0,0,0,0);
}
.t-l-c-oxygenControl .oxygenControl-t-row-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-oxygenControl .oxygenControl-t-col-0-0-0 {
position: relative;
top: null;
left: null;
width: 56%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: start;
align-items: start;
background-color: ;
flex-direction: column;
}

.t-l-c-oxygenControl .oxygenControl-t-component-0-0-0-0 {
position: unset;
top: 11px;
left: 10px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-text-0-0-0-1 {
position: unset;
top: 16px;
left: 51px;
width: 300px;
height: 20px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-iframe-0-0-0-3 {
position: unset;
top: 58px;
left: 546px;
width: 100%;
height: 100%;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-timeline-base-0-0-0-4 {
position: unset;
top: 620px;
left: 5px;
width: 100%;
height: 58px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-col-0-0-1 {
position: relative;
top: null;
left: null;
width: 44%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: start;
align-items: start;
background-color: ;
flex-direction: column;
padding-left: 16px !important;
}

.t-l-c-oxygenControl .oxygenControl-t-component-0-0-1-0 {
position: unset;
top: 1px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-text-0-0-1-1 {
position: unset;
top: 6px;
left: 41px;
width: 300px;
height: 20px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-scrollable-cards-0-0-1-2 {
position: unset;
top: -22px;
left: -362px;
width: 100%;
height: 68px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-chart-design-0-0-1-3 {
position: unset;
top: 131px;
left: 492px;
width: 100%;
height: 712px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-rect-0-0-1-4 {
position: unset;
top: -138px;
left: 452px;
width: 100%;
height: 312px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-table-0-0-1-5 {
position: unset;
top: 194px;
left: 555px;
width: 100%;
height: 100%;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-table-0-0-1-6 {
position: unset;
top: 184px;
left: 545px;
width: 100%;
height: 100%;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-col-0-1 {
position: absolute !important;
top: 117px;
left: 0px;
width: 100%;
height: 22px;
pointer-events: none;
display: flex;
justify-content: right;
align-items: center;
padding-right: 30px;
}

.t-l-c-oxygenControl .oxygenControl-t-text-common-0-1-0 {
position: unset;
top: -66px;
left: 727px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-switch-0-1-1 {
position: unset;
top: 35px;
left: 10px;
width: 32px;
height: 22px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-text-common-0-1-2 {
position: unset;
top: -56px;
left: 737px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-switch-0-1-3 {
position: unset;
top: 45px;
left: 20px;
width: 32px;
height: 22px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-text-common-0-1-4 {
position: unset;
top: -90px;
left: 529px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-switch-0-1-5 {
position: unset;
top: 45px;
left: 20px;
width: 32px;
height: 22px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-col-0-2 {
position: absolute !important;
top: 90px;
left: 0px;
width: 50%;
height: 32px;
pointer-events: none;
display: flex;
justify-content: right;
align-items: center;
animation-name: ;
}

.t-l-c-oxygenControl .oxygenControl-t-rect-0-2-0 {
position: unset;
top: -232px;
left: 691px;
width: 123px;
height: 32px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-col-0-3 {
position: absolute !important;
top: 130px;
left: 0px;
width: 50%;
height: 32px;
pointer-events: none;
display: flex;
justify-content: right;
align-items: center;
animation-name: ;
}

.t-l-c-oxygenControl .oxygenControl-t-rect-0-3-0 {
position: unset;
top: 222px;
left: 36px;
width: 123px;
height: 32px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-col-0-4 {
position: absolute !important;
top: 130px;
left: 0px;
width: 50%;
height: 32px;
pointer-events: none;
display: flex;
justify-content: right;
align-items: center;
animation-name: ;
padding-right: 8px;
}

.t-l-c-oxygenControl .oxygenControl-t-switch-0-4-0 {
position: unset;
top: 30px;
left: 30px;
width: 32px;
height: 22px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-col-0-5 {
position: absolute !important;
top: 90px;
left: 0px;
width: 50%;
height: 32px;
pointer-events: none;
display: flex;
justify-content: right;
align-items: center;
animation-name: ;
padding-right: 8px;
}

.t-l-c-oxygenControl .oxygenControl-t-switch-0-5-0 {
position: unset;
top: 20px;
left: 20px;
width: 32px;
height: 22px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-col-0-6 {
position: absolute !important;
top: 50px;
left: 0px;
width: 50%;
height: 32px;
pointer-events: none;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-oxygenControl .oxygenControl-t-rect-0-6-0 {
position: unset;
top: -242px;
left: 681px;
width: 123px;
height: 32px;
pointer-events: auto;
}

.t-l-c-oxygenControl .oxygenControl-t-col-0-7 {
position: absolute !important;
top: 50px;
left: 0px;
width: 50%;
height: 32px;
pointer-events: none;
display: flex;
justify-content: right;
align-items: center;
animation-name: ;
padding-right: 8px;
}

.t-l-c-oxygenControl .oxygenControl-t-switch-0-7-0 {
position: unset;
top: 10px;
left: 10px;
width: 32px;
height: 22px;
pointer-events: auto;
}
</style>
