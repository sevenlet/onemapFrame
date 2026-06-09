<template>
  <div id="t-l-c-airOverviewExcellentDays" class="t-l-c-airOverviewExcellentDays" ><t-rect id="t-rect-b52b.96bf33bfc" class="airOverviewExcellentDays-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-chart-design id="t-chart-design-b901.14ce038d" class="airOverviewExcellentDays-t-chart-design-0-1"  :empty-img="tChartDesignx0x1ComputedData.emptyImg" :c-style="tChartDesignx0x1ComputedData.cStyle" :options="state.options"></t-chart-design><t-image-base id="t-image-base-abb2.db7891456" class="airOverviewExcellentDays-t-image-base-0-2"  :src="tImageBasex0x2ComputedData.src" :fit="tImageBasex0x2ComputedData.fit" :c-style="tImageBasex0x2ComputedData.cStyle"></t-image-base><t-image-base id="t-image-base-c786.95f81b934" class="airOverviewExcellentDays-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle"></t-image-base><t-image-base id="t-image-base-a633.8ad821a9b" class="airOverviewExcellentDays-t-image-base-0-4"  :src="tImageBasex0x4ComputedData.src" :fit="tImageBasex0x4ComputedData.fit" :c-style="tImageBasex0x4ComputedData.cStyle"></t-image-base><t-image-base id="t-image-base-b57d.16e302c1e" class="airOverviewExcellentDays-t-image-base-0-5"  :src="tImageBasex0x5ComputedData.src" :fit="tImageBasex0x5ComputedData.fit" :c-style="tImageBasex0x5ComputedData.cStyle"></t-image-base><t-image-base id="t-image-base-e63c.ee6cdca0c" class="airOverviewExcellentDays-t-image-base-0-6"  :src="tImageBasex0x6ComputedData.src" :fit="tImageBasex0x6ComputedData.fit" :c-style="tImageBasex0x6ComputedData.cStyle"></t-image-base><t-image-base id="t-image-base-fa49.c387b940b" class="airOverviewExcellentDays-t-image-base-0-7"  :src="tImageBasex0x7ComputedData.src" :fit="tImageBasex0x7ComputedData.fit" :c-style="tImageBasex0x7ComputedData.cStyle"></t-image-base><t-text id="t-text-03b6.2c54dd3a2" class="airOverviewExcellentDays-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle"></t-text><t-text id="t-text-8560.a9257d7ad" class="airOverviewExcellentDays-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle"></t-text><t-text id="t-text-edde.3dd260c64" class="airOverviewExcellentDays-t-text-0-10"  :label="tTextx0x10ComputedData.label" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle"></t-text><t-text id="t-text-6746.571f4557f" class="airOverviewExcellentDays-t-text-0-11"  :label="tTextx0x11ComputedData.label" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle"></t-text><t-text id="t-text-21fe.5a3db5da2" class="airOverviewExcellentDays-t-text-0-12"  :label="tTextx0x12ComputedData.label" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle"></t-text><t-text id="t-text-a085.b6975b922" class="airOverviewExcellentDays-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle"></t-text><t-text-unit id="t-text-unit-f60e.92bc14632" class="airOverviewExcellentDays-t-text-unit-0-14"  :c-style="tTextUnitx0x14ComputedData.cStyle" :justify="tTextUnitx0x14ComputedData.justify" :align="tTextUnitx0x14ComputedData.align" :content="state.pollutionLevel.level6.day" :unit="tTextUnitx0x14ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x14ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-bd5b.7891c7793" class="airOverviewExcellentDays-t-text-unit-0-15"  :c-style="tTextUnitx0x15ComputedData.cStyle" :justify="tTextUnitx0x15ComputedData.justify" :align="tTextUnitx0x15ComputedData.align" :content="state.pollutionLevel.level6.percent" :unit="tTextUnitx0x15ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x15ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-62d8.3ae0810a" class="airOverviewExcellentDays-t-text-unit-0-16"  :c-style="tTextUnitx0x16ComputedData.cStyle" :justify="tTextUnitx0x16ComputedData.justify" :align="tTextUnitx0x16ComputedData.align" :content="state.pollutionLevel.level5.percent" :unit="tTextUnitx0x16ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x16ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-97f8.1faa3c044" class="airOverviewExcellentDays-t-text-unit-0-17"  :c-style="tTextUnitx0x17ComputedData.cStyle" :justify="tTextUnitx0x17ComputedData.justify" :align="tTextUnitx0x17ComputedData.align" :content="state.pollutionLevel.level5.day" :unit="tTextUnitx0x17ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x17ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-1aaa.48033c561" class="airOverviewExcellentDays-t-text-unit-0-18"  :c-style="tTextUnitx0x18ComputedData.cStyle" :justify="tTextUnitx0x18ComputedData.justify" :align="tTextUnitx0x18ComputedData.align" :content="state.pollutionLevel.level4.percent" :unit="tTextUnitx0x18ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x18ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-f6ea.537a0f837" class="airOverviewExcellentDays-t-text-unit-0-19"  :c-style="tTextUnitx0x19ComputedData.cStyle" :justify="tTextUnitx0x19ComputedData.justify" :align="tTextUnitx0x19ComputedData.align" :content="state.pollutionLevel.level4.day" :unit="tTextUnitx0x19ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x19ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-0c23.0f97c3b05" class="airOverviewExcellentDays-t-text-unit-0-20"  :c-style="tTextUnitx0x20ComputedData.cStyle" :justify="tTextUnitx0x20ComputedData.justify" :align="tTextUnitx0x20ComputedData.align" :content="state.pollutionLevel.level2.day" :unit="tTextUnitx0x20ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x20ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-101c.067b828a7" class="airOverviewExcellentDays-t-text-unit-0-21"  :c-style="tTextUnitx0x21ComputedData.cStyle" :justify="tTextUnitx0x21ComputedData.justify" :align="tTextUnitx0x21ComputedData.align" :content="state.pollutionLevel.level2.percent" :unit="tTextUnitx0x21ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x21ComputedData.showOverflowTooltip"></t-text-unit><t-image-base id="t-image-base-9f3f.47a8d51" class="airOverviewExcellentDays-t-image-base-0-22"  :src="tImageBasex0x22ComputedData.src" :fit="tImageBasex0x22ComputedData.fit" :c-style="tImageBasex0x22ComputedData.cStyle"></t-image-base><t-text-unit id="t-text-unit-1ccf.84443ab66" class="airOverviewExcellentDays-t-text-unit-0-23"  :c-style="tTextUnitx0x23ComputedData.cStyle" :justify="tTextUnitx0x23ComputedData.justify" :align="tTextUnitx0x23ComputedData.align" :content="state.pollutionLevel.level3.percent" :unit="tTextUnitx0x23ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x23ComputedData.showOverflowTooltip"></t-text-unit><t-image-base id="t-image-base-6f10.ef346161e" class="airOverviewExcellentDays-t-image-base-0-24"  :src="tImageBasex0x24ComputedData.src" :fit="tImageBasex0x24ComputedData.fit" :c-style="tImageBasex0x24ComputedData.cStyle"></t-image-base><t-text-unit id="t-text-unit-5994.97175f7fd" class="airOverviewExcellentDays-t-text-unit-0-25"  :c-style="tTextUnitx0x25ComputedData.cStyle" :justify="tTextUnitx0x25ComputedData.justify" :align="tTextUnitx0x25ComputedData.align" :content="state.pollutionLevel.level3.day" :unit="tTextUnitx0x25ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x25ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-799a.b4030a8d9" class="airOverviewExcellentDays-t-text-unit-0-26"  :c-style="tTextUnitx0x26ComputedData.cStyle" :justify="tTextUnitx0x26ComputedData.justify" :align="tTextUnitx0x26ComputedData.align" :content="state.pollutionLevel.level1.day" :unit="tTextUnitx0x26ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x26ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-6b85.412166b43" class="airOverviewExcellentDays-t-text-unit-0-27"  :c-style="tTextUnitx0x27ComputedData.cStyle" :justify="tTextUnitx0x27ComputedData.justify" :align="tTextUnitx0x27ComputedData.align" :content="state.pollutionLevel.level1.percent" :unit="tTextUnitx0x27ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x27ComputedData.showOverflowTooltip"></t-text-unit><t-image-base id="t-image-base-6ecd.59051a68b" class="airOverviewExcellentDays-t-image-base-0-28"  :src="tImageBasex0x28ComputedData.src" :fit="tImageBasex0x28ComputedData.fit" :c-style="tImageBasex0x28ComputedData.cStyle"></t-image-base><t-image-base id="t-image-base-aa1e.dbde8bd44" class="airOverviewExcellentDays-t-image-base-0-29"  :src="tImageBasex0x29ComputedData.src" :fit="tImageBasex0x29ComputedData.fit" :c-style="tImageBasex0x29ComputedData.cStyle"></t-image-base><t-image-base id="t-image-base-f12c.67da26c05" class="airOverviewExcellentDays-t-image-base-0-30"  :src="tImageBasex0x30ComputedData.src" :fit="tImageBasex0x30ComputedData.fit" :c-style="tImageBasex0x30ComputedData.cStyle"></t-image-base><t-image-base id="t-image-base-8da3.ed7a0d0af" class="airOverviewExcellentDays-t-image-base-0-31"  :src="tImageBasex0x31ComputedData.src" :fit="tImageBasex0x31ComputedData.fit" :c-style="tImageBasex0x31ComputedData.cStyle"></t-image-base><t-high-light-text id="t-high-light-text-a2cb.e77d62c25" class="airOverviewExcellentDays-t-high-light-text-0-32"  :fragment-list="state.fragmentList" :styles="tHighLightTextx0x32ComputedData.styles" :c-style="tHighLightTextx0x32ComputedData.cStyle"></t-high-light-text><t-text v-if="state.options.length === 0" id="t-text-0f11.f6d1674c1" class="airOverviewExcellentDays-t-text-0-33"  :label="tTextx0x33ComputedData.label" :editable="tTextx0x33ComputedData.editable" :c-style="tTextx0x33ComputedData.cStyle"></t-text><t-rect v-if="state.options.length !== 0" id="t-rect-3884.9506a575" class="airOverviewExcellentDays-t-rect-0-34"  :tip="tRectx0x34ComputedData.tip" :label="tRectx0x34ComputedData.label" :active="tRectx0x34ComputedData.active" :c-style="tRectx0x34ComputedData.cStyle"></t-rect></div>
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
import { TChartDesign, THighLightText, TImageBase, TRect, TText, TTextUnit } from '@ths/design';

export default {
  components: {
    TChartDesign,
    THighLightText,
    TImageBase,
    TRect,
    TText,
    TTextUnit,
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
   pollutionLevel: {"level1":{"day":"","percent":""},"level2":{"day":"","percent":""},"level3":{"day":"","percent":""},"level4":{"day":"","percent":""},"level5":{"day":"","percent":""},"level6":{"day":"","percent":""}},
   airOverviewContentState: {"timeType":"","timeValue":""},
   options: [],
   fragmentList: [],
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
            default: {"width":"410px","height":"48px","backgroundColor":"var(--business-show-bg15)","position":"unset","left":"0px","top":"1px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"48px","backgroundColor":"var(--business-show-bg15)","position":"unset","left":"0px","top":"1px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tChartDesignx0x1: {
defaultStyle: {
            default: {"height":"212px","width":"289px","position":"unset","left":"-44px","top":"44px"},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"212px","width":"289px","position":"unset","left":"-44px","top":"44px"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, [])), 
 },
},
tImageBasex0x2: {
defaultStyle: {
            default: {"width":"12px","height":"12px","left":"227px","position":"unset","top":"219px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/6d1b6e9082224f2dbcaced2fca03ed69.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"12px","height":"12px","left":"227px","position":"unset","top":"219px","animationName":""}}}, 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"12px","height":"12px","left":"227px","position":"unset","top":"187px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/bbedb2ae6b024510be379ab698db0789.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"12px","height":"12px","left":"227px","position":"unset","top":"187px","animationName":""}}}, 
 },
},
tImageBasex0x4: {
defaultStyle: {
            default: {"width":"12px","height":"12px","left":"227px","position":"unset","top":"157px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/b3cffff290374337a0df9acec15bc6ad.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"12px","height":"12px","left":"227px","position":"unset","top":"157px","animationName":""}}}, 
 },
},
tImageBasex0x5: {
defaultStyle: {
            default: {"width":"12px","height":"12px","left":"227px","position":"unset","top":"128px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/47855194f53b4db694169974c3c7a134.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"12px","height":"12px","left":"227px","position":"unset","top":"128px","animationName":""}}}, 
 },
},
tImageBasex0x6: {
defaultStyle: {
            default: {"width":"12px","height":"12px","left":"227px","position":"unset","top":"98px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/040fb86eaed04151ac8ca0de859971a4.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"12px","height":"12px","left":"227px","position":"unset","top":"98px","animationName":""}}}, 
 },
},
tImageBasex0x7: {
defaultStyle: {
            default: {"width":"12px","height":"12px","left":"227px","position":"unset","top":"68px"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/afc6d44eb31b41a6bdcbc8aacb7aab1c.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"12px","height":"12px","left":"227px","position":"unset","top":"68px"}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"44px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"244px","top":"217px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"严重",
editable:false,
cStyle:{"wrapper":{"default":{"width":"44px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"244px","top":"217px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"44px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"244px","top":"185px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"重度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"44px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"244px","top":"185px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"44px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"244px","top":"155px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"中度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"44px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"244px","top":"155px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"44px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"244px","top":"126px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"轻度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"44px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"244px","top":"126px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"44px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"244px","top":"96px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"良",
editable:false,
cStyle:{"wrapper":{"default":{"width":"44px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"244px","top":"96px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"44px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"244px","top":"66px","fontSize":"14px"},
            
            },
 default: { 
 
label:"优",
editable:false,
cStyle:{"wrapper":{"default":{"width":"44px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"244px","top":"66px","fontSize":"14px"}}}, 
 },
},
tTextUnitx0x14: {
defaultStyle: {
            default: {"width":"54px","height":"21px","position":"unset","left":"284px","top":"213px","fontSize":"16px","color":"var(--t-white)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"54px","height":"21px","position":"unset","left":"284px","top":"213px","fontSize":"16px","color":"var(--t-white)","animationName":""}},"text":{"default":{"color":"var(--t-white)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"天",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x15: {
defaultStyle: {
            default: {"width":"54px","height":"21px","position":"unset","left":"349px","top":"212px","fontSize":"16px","color":"var(--t-white)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"54px","height":"21px","position":"unset","left":"349px","top":"212px","fontSize":"16px","color":"var(--t-white)","animationName":""}},"text":{"default":{"color":"var(--t-white)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x16: {
defaultStyle: {
            default: {"width":"54px","height":"21px","position":"unset","left":"349px","top":"180px","fontSize":"16px","color":"var(--t-white)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"54px","height":"21px","position":"unset","left":"349px","top":"180px","fontSize":"16px","color":"var(--t-white)","animationName":""}},"text":{"default":{"color":"var(--t-white)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x17: {
defaultStyle: {
            default: {"width":"54px","height":"21px","position":"unset","left":"284px","top":"181px","fontSize":"16px","color":"var(--t-white)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"54px","height":"21px","position":"unset","left":"284px","top":"181px","fontSize":"16px","color":"var(--t-white)","animationName":""}},"text":{"default":{"color":"var(--t-white)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"天",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x18: {
defaultStyle: {
            default: {"width":"54px","height":"21px","position":"unset","left":"349px","top":"150px","fontSize":"16px","color":"var(--t-white)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"54px","height":"21px","position":"unset","left":"349px","top":"150px","fontSize":"16px","color":"var(--t-white)","animationName":""}},"text":{"default":{"color":"var(--t-white)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x19: {
defaultStyle: {
            default: {"width":"54px","height":"21px","position":"unset","left":"284px","top":"151px","fontSize":"16px","color":"var(--t-white)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"54px","height":"21px","position":"unset","left":"284px","top":"151px","fontSize":"16px","color":"var(--t-white)","animationName":""}},"text":{"default":{"color":"var(--t-white)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"天",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x20: {
defaultStyle: {
            default: {"width":"54px","height":"21px","position":"unset","left":"284px","top":"92px","fontSize":"16px","color":"var(--t-white)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"54px","height":"21px","position":"unset","left":"284px","top":"92px","fontSize":"16px","color":"var(--t-white)","animationName":""}},"text":{"default":{"color":"var(--t-white)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"天",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x21: {
defaultStyle: {
            default: {"width":"54px","height":"21px","position":"unset","left":"349px","top":"91px","fontSize":"16px","color":"var(--t-white)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"54px","height":"21px","position":"unset","left":"349px","top":"91px","fontSize":"16px","color":"var(--t-white)","animationName":""}},"text":{"default":{"color":"var(--t-white)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tImageBasex0x22: {
defaultStyle: {
            default: {"width":"9px","height":"20px","top":"214px","left":"340px","position":"unset","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/39905ed51fab4719980aa3c25b54f2cc.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"9px","height":"20px","top":"214px","left":"340px","position":"unset","animationName":""}}}, 
 },
},
tTextUnitx0x23: {
defaultStyle: {
            default: {"width":"54px","height":"21px","position":"unset","left":"349px","top":"121px","fontSize":"16px","color":"var(--t-white)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"54px","height":"21px","position":"unset","left":"349px","top":"121px","fontSize":"16px","color":"var(--t-white)","animationName":""}},"text":{"default":{"color":"var(--t-white)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tImageBasex0x24: {
defaultStyle: {
            default: {"width":"9px","height":"20px","top":"182px","left":"340px","position":"unset","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/39905ed51fab4719980aa3c25b54f2cc.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"9px","height":"20px","top":"182px","left":"340px","position":"unset","animationName":""}}}, 
 },
},
tTextUnitx0x25: {
defaultStyle: {
            default: {"width":"54px","height":"21px","position":"unset","left":"284px","top":"122px","fontSize":"16px","color":"var(--t-white)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"54px","height":"21px","position":"unset","left":"284px","top":"122px","fontSize":"16px","color":"var(--t-white)","animationName":""}},"text":{"default":{"color":"var(--t-white)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"天",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x26: {
defaultStyle: {
            default: {"width":"54px","height":"21px","position":"unset","left":"284px","top":"62px","fontSize":"16px","color":"var(--t-white)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"54px","height":"21px","position":"unset","left":"284px","top":"62px","fontSize":"16px","color":"var(--t-white)"}},"text":{"default":{"color":"var(--t-white)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"天",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x27: {
defaultStyle: {
            default: {"width":"54px","height":"21px","position":"unset","left":"349px","top":"62px","fontSize":"16px","color":"var(--t-white)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"54px","height":"21px","position":"unset","left":"349px","top":"62px","fontSize":"16px","color":"var(--t-white)","animationName":""}},"text":{"default":{"color":"var(--t-white)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tImageBasex0x28: {
defaultStyle: {
            default: {"width":"9px","height":"20px","top":"152px","left":"340px","position":"unset","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/39905ed51fab4719980aa3c25b54f2cc.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"9px","height":"20px","top":"152px","left":"340px","position":"unset","animationName":""}}}, 
 },
},
tImageBasex0x29: {
defaultStyle: {
            default: {"width":"9px","height":"20px","top":"123px","left":"340px","position":"unset","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/39905ed51fab4719980aa3c25b54f2cc.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"9px","height":"20px","top":"123px","left":"340px","position":"unset","animationName":""}}}, 
 },
},
tImageBasex0x30: {
defaultStyle: {
            default: {"width":"9px","height":"20px","top":"93px","left":"340px","position":"unset","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/39905ed51fab4719980aa3c25b54f2cc.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"9px","height":"20px","top":"93px","left":"340px","position":"unset","animationName":""}}}, 
 },
},
tImageBasex0x31: {
defaultStyle: {
            default: {"width":"9px","height":"20px","top":"63px","left":"340px","position":"unset"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/39905ed51fab4719980aa3c25b54f2cc.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"9px","height":"20px","top":"63px","left":"340px","position":"unset"}}}, 
 },
},
tHighLightTextx0x32: {
defaultStyle: {
            default: {"width":"394px","height":"38px","position":"unset","left":"10px","top":"8px"},
            
            },
 default: { 
 
fragmentList:[],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--t-white)"}},{"name":"style2","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"#00E400"}},{"name":"style3","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"#F9D000"}}],
cStyle:{"wrapper":{"default":{"width":"394px","height":"38px","position":"unset","left":"10px","top":"8px"}}}, 
 },
},
tTextx0x33: {
defaultStyle: {
            default: {"width":"407px","height":"196px","color":"var(--business-no-data-color)","textAlign":"center","lineHeight":"202px","fontSize":"14px","top":"52px","left":"1px","animationName":"","position":"unset","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"#153582"},
            
            },
 default: { 
 
label:"暂无数据",
editable:false,
cStyle:{"wrapper":{"default":{"width":"407px","height":"196px","color":"var(--business-no-data-color)","textAlign":"center","lineHeight":"202px","fontSize":"14px","top":"52px","left":"1px","animationName":"","position":"unset","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"#153582"}}}, 
 },
},
tRectx0x34: {
defaultStyle: {
            default: {"width":"170px","height":"170px","backgroundImage":"var(--business-pie-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"15px","top":"64px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"170px","height":"170px","backgroundImage":"var(--business-pie-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"15px","top":"64px"}}}, 
 },
},
});
const setOptions = (chartData) => {
const data = chartData;

const colorList = ["#00e400", "#ffcd35", "#ff7e00", "#dd4209", "#99004c", "#46072d"]
state.options = {
  series: [
    {
      name: '内层',
      type: 'pie',
      radius: ['30%', '37%'],  // 设置内层的圆环大小
      avoidLabelOverlap: false,
      label: {
        show: false
      },
      data: data.map((item, index) => ({
        value: item.value,
        name: item.name,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [  // 渐变色
            { offset: 0, color: colorList[index] },
            { offset: 1, color: hexToRgba(colorList[index], 0) }
          ]),
          borderColor: '#1e529a',   // 内层边框颜色
          borderWidth: 4         // 内层边框宽度
        }
      }))
    },
    {
      name: '外层',
      type: 'pie',
      radius: ['53%', '60%'],  // 设置外层的圆环大小
      avoidLabelOverlap: false,
      label: {
        show: false
      },
      data: data.map((item, index) => ({
        value: item.value,
        name: item.name,
        itemStyle: {
          color: hexToRgba(colorList[index], 0.6),  // 外层的颜色透明度
          borderColor: colorList[index],  // 外层边框颜色（白色）
          borderWidth: 2        // 外层边框宽度
        }
      })),
      // 这个 itemStyle 在这里定义是为了确保外层有边框
      itemStyle: {
        borderWidth: 20,            // 外层边框宽度
        borderColor: '#1e529a',      // 外层边框颜色
      },
      // 在此处也可以为每个外层的扇形单独设置透明渐变色
      emphasis: {
        itemStyle: {
          borderWidth: 4,
          borderColor: '#1e529a'  // 高亮时边框样式
        }
      }
    }
  ]
};
console.log(state.options);
};
const hexToRgba = (hex,opacity) => {
  console.log(hex, 'hex')
  hex = hex.replace('#', '');

  // 解析 RGB 值
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // 返回 rgba 格式的颜色
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
const getProvider = () => {
const rootData = inject('airOverviewContentState');
watch(() => rootData, () => {
  state.airOverviewContentState = rootData;
  if (state.airOverviewContentState.timeType && state.airOverviewContentState.timeValue) {
    getDesc();
    getChart();
  }

}, {
  deep: true,
  immediate: true,
});
};
const subDesc = (data) => {
const order = [
  'GOOD_DAYS_NAME', 'GOOD_DAYS', 'DATE_TYPE_DAYS', 'CHANGE_DAY',
  'GOOD_PER_NAME', 'GOOD_RATE', 'DATE_TYPE_PER', 'CHANGE_RATE'
];

const getStyleName = (key, value) => {
  if (key === 'GOOD_DAYS' || key === 'GOOD_RATE') {
    return 'style2';
  }
  if (key === 'CHANGE_DAY' || key === 'CHANGE_RATE') {
    if (value.includes('增') || value.includes('涨')) {
      return 'style2';
    } else if (value.includes('减') || value.includes('降')) {
      return 'style3';
    }
    return 'style1';
  }
  return 'style1';
};

state.fragmentList = order.map(key => ({
  text: data[key].trim(), // 去除多余空格
  styleName: getStyleName(key, data[key])
}));

console.log(state.fragmentList);
};
// 接口函数
const getDesc = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.airOverviewContentState.timeType,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.airOverviewContentState.timeValue,"interfaceId":"0d2980dad92efd477e71b8c6dc47e19a"},}).then((res) => {
     // 成功的操作
     console.log('描述信息', res);

if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let data = res.data.data;
  if (data) {
    subDesc(data);
  } else {
    state.fragmentList = [];
  }
} else {
  state.fragmentList = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getChart = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.airOverviewContentState.timeType,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.airOverviewContentState.timeValue,"interfaceId":"8e8f5c964b4e16731f82fe9fc921a8e3"},}).then((res) => {
     // 成功的操作
     console.log('图', res);

if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let data = res?.data?.data || [];
  if (data) {
    let chartData = data.map((item, index) => {
      state.pollutionLevel['level' + (index + 1)].day = item.TOLTAL_DAYS;
      state.pollutionLevel['level' + (index + 1)].percent = item.PER;
      return {
        name: item.AQILEVELSTATE,
        value: item.TOLTAL_DAYS
      }
    });
    setOptions(chartData);
  } else {
    state.option = null;
  }
} else {
  state.option = null;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewExcellentDays', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
onMounted(() => {
setPageScale('t-l-c-airOverviewExcellentDays', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tChartDesignx0x1ComputedData = computed(() => _.merge({}, componentState.tChartDesignx0x1.default, componentState.tChartDesignx0x1?.[state.screenSize]));

 const tImageBasex0x2ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x2.default, componentState.tImageBasex0x2?.[state.screenSize]));

 const tImageBasex0x3ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x3.default, componentState.tImageBasex0x3?.[state.screenSize]));

 const tImageBasex0x4ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x4.default, componentState.tImageBasex0x4?.[state.screenSize]));

 const tImageBasex0x5ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x5.default, componentState.tImageBasex0x5?.[state.screenSize]));

 const tImageBasex0x6ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x6.default, componentState.tImageBasex0x6?.[state.screenSize]));

 const tImageBasex0x7ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x7.default, componentState.tImageBasex0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextUnitx0x14ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x14.default, componentState.tTextUnitx0x14?.[state.screenSize]));

 const tTextUnitx0x15ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x15.default, componentState.tTextUnitx0x15?.[state.screenSize]));

 const tTextUnitx0x16ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x16.default, componentState.tTextUnitx0x16?.[state.screenSize]));

 const tTextUnitx0x17ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x17.default, componentState.tTextUnitx0x17?.[state.screenSize]));

 const tTextUnitx0x18ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x18.default, componentState.tTextUnitx0x18?.[state.screenSize]));

 const tTextUnitx0x19ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x19.default, componentState.tTextUnitx0x19?.[state.screenSize]));

 const tTextUnitx0x20ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x20.default, componentState.tTextUnitx0x20?.[state.screenSize]));

 const tTextUnitx0x21ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x21.default, componentState.tTextUnitx0x21?.[state.screenSize]));

 const tImageBasex0x22ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x22.default, componentState.tImageBasex0x22?.[state.screenSize]));

 const tTextUnitx0x23ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x23.default, componentState.tTextUnitx0x23?.[state.screenSize]));

 const tImageBasex0x24ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x24.default, componentState.tImageBasex0x24?.[state.screenSize]));

 const tTextUnitx0x25ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x25.default, componentState.tTextUnitx0x25?.[state.screenSize]));

 const tTextUnitx0x26ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x26.default, componentState.tTextUnitx0x26?.[state.screenSize]));

 const tTextUnitx0x27ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x27.default, componentState.tTextUnitx0x27?.[state.screenSize]));

 const tImageBasex0x28ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x28.default, componentState.tImageBasex0x28?.[state.screenSize]));

 const tImageBasex0x29ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x29.default, componentState.tImageBasex0x29?.[state.screenSize]));

 const tImageBasex0x30ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x30.default, componentState.tImageBasex0x30?.[state.screenSize]));

 const tImageBasex0x31ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x31.default, componentState.tImageBasex0x31?.[state.screenSize]));

 const tHighLightTextx0x32ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x32.default, componentState.tHighLightTextx0x32?.[state.screenSize]));

 const tTextx0x33ComputedData = computed(() => _.merge({}, componentState.tTextx0x33.default, componentState.tTextx0x33?.[state.screenSize]));

 const tRectx0x34ComputedData = computed(() => _.merge({}, componentState.tRectx0x34.default, componentState.tRectx0x34?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tChartDesignx0x1ComputedData,
tImageBasex0x2ComputedData,
tImageBasex0x3ComputedData,
tImageBasex0x4ComputedData,
tImageBasex0x5ComputedData,
tImageBasex0x6ComputedData,
tImageBasex0x7ComputedData,
tTextx0x8ComputedData,
tTextx0x9ComputedData,
tTextx0x10ComputedData,
tTextx0x11ComputedData,
tTextx0x12ComputedData,
tTextx0x13ComputedData,
tTextUnitx0x14ComputedData,
tTextUnitx0x15ComputedData,
tTextUnitx0x16ComputedData,
tTextUnitx0x17ComputedData,
tTextUnitx0x18ComputedData,
tTextUnitx0x19ComputedData,
tTextUnitx0x20ComputedData,
tTextUnitx0x21ComputedData,
tImageBasex0x22ComputedData,
tTextUnitx0x23ComputedData,
tImageBasex0x24ComputedData,
tTextUnitx0x25ComputedData,
tTextUnitx0x26ComputedData,
tTextUnitx0x27ComputedData,
tImageBasex0x28ComputedData,
tImageBasex0x29ComputedData,
tImageBasex0x30ComputedData,
tImageBasex0x31ComputedData,
tHighLightTextx0x32ComputedData,
tTextx0x33ComputedData,
tRectx0x34ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewExcellentDays {
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
height: 250px;
width: 410px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-rect-0-0 {
position: absolute !important;
top: 1px;
left: 0px;
width: 410px;
height: 48px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-chart-design-0-1 {
position: absolute !important;
top: 44px;
left: -44px;
width: 289px;
height: 212px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-image-base-0-2 {
position: absolute !important;
top: 219px;
left: 227px;
width: 12px;
height: 12px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-image-base-0-3 {
position: absolute !important;
top: 187px;
left: 227px;
width: 12px;
height: 12px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-image-base-0-4 {
position: absolute !important;
top: 157px;
left: 227px;
width: 12px;
height: 12px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-image-base-0-5 {
position: absolute !important;
top: 128px;
left: 227px;
width: 12px;
height: 12px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-image-base-0-6 {
position: absolute !important;
top: 98px;
left: 227px;
width: 12px;
height: 12px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-image-base-0-7 {
position: absolute !important;
top: 68px;
left: 227px;
width: 12px;
height: 12px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-0-8 {
position: absolute !important;
top: 217px;
left: 244px;
width: 44px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-0-9 {
position: absolute !important;
top: 185px;
left: 244px;
width: 44px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-0-10 {
position: absolute !important;
top: 155px;
left: 244px;
width: 44px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-0-11 {
position: absolute !important;
top: 126px;
left: 244px;
width: 44px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-0-12 {
position: absolute !important;
top: 96px;
left: 244px;
width: 44px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-0-13 {
position: absolute !important;
top: 66px;
left: 244px;
width: 44px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-unit-0-14 {
position: absolute !important;
top: 213px;
left: 283px;
width: 54px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-unit-0-15 {
position: absolute !important;
top: 212px;
left: 351px;
width: 54px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-unit-0-16 {
position: absolute !important;
top: 180px;
left: 351px;
width: 54px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-unit-0-17 {
position: absolute !important;
top: 181px;
left: 283px;
width: 54px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-unit-0-18 {
position: absolute !important;
top: 150px;
left: 351px;
width: 54px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-unit-0-19 {
position: absolute !important;
top: 151px;
left: 283px;
width: 54px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-unit-0-20 {
position: absolute !important;
top: 92px;
left: 283px;
width: 54px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-unit-0-21 {
position: absolute !important;
top: 91px;
left: 351px;
width: 54px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-image-base-0-22 {
position: absolute !important;
top: 214px;
left: 340px;
width: 9px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-unit-0-23 {
position: absolute !important;
top: 121px;
left: 351px;
width: 54px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-image-base-0-24 {
position: absolute !important;
top: 182px;
left: 340px;
width: 9px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-unit-0-25 {
position: absolute !important;
top: 122px;
left: 283px;
width: 54px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-unit-0-26 {
position: absolute !important;
top: 62px;
left: 283px;
width: 54px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-unit-0-27 {
position: absolute !important;
top: 61px;
left: 351px;
width: 54px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-image-base-0-28 {
position: absolute !important;
top: 152px;
left: 340px;
width: 9px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-image-base-0-29 {
position: absolute !important;
top: 123px;
left: 340px;
width: 9px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-image-base-0-30 {
position: absolute !important;
top: 93px;
left: 340px;
width: 9px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-image-base-0-31 {
position: absolute !important;
top: 63px;
left: 340px;
width: 9px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-high-light-text-0-32 {
position: absolute !important;
top: 8px;
left: 10px;
width: 394px;
height: 38px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-text-0-33 {
position: absolute !important;
top: 52px;
left: 1px;
width: 407px;
height: 196px;
pointer-events: auto;
}

.t-l-c-airOverviewExcellentDays .airOverviewExcellentDays-t-rect-0-34 {
position: absolute !important;
top: 64px;
left: 15px;
width: 170px;
height: 170px;
pointer-events: auto;
}
</style>
