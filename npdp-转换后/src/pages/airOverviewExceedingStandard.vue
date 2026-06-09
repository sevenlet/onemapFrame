<template>
  <div id="t-l-c-airOverviewExceedingStandard" class="t-l-c-airOverviewExceedingStandard" ><t-text-unit id="t-text-unit-666e.37ec522ab" class="airOverviewExceedingStandard-t-text-unit-0-0"  :c-style="tTextUnitx0x0ComputedData.cStyle" :justify="tTextUnitx0x0ComputedData.justify" :align="tTextUnitx0x0ComputedData.align" :content="state.exceedStandardData.PM10_DAY" :unit="tTextUnitx0x0ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x0ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-3a36.e28940676" class="airOverviewExceedingStandard-t-text-unit-0-1"  :c-style="tTextUnitx0x1ComputedData.cStyle" :justify="tTextUnitx0x1ComputedData.justify" :align="tTextUnitx0x1ComputedData.align" :content="state.exceedStandardData.NO2_DAY" :unit="tTextUnitx0x1ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x1ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-d146.cafb5dd21" class="airOverviewExceedingStandard-t-text-unit-0-2"  :c-style="tTextUnitx0x2ComputedData.cStyle" :justify="tTextUnitx0x2ComputedData.justify" :align="tTextUnitx0x2ComputedData.align" :content="state.exceedStandardData.O3_8_DAY" :unit="tTextUnitx0x2ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x2ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-9312.82eb9c423" class="airOverviewExceedingStandard-t-text-unit-0-3"  :c-style="tTextUnitx0x3ComputedData.cStyle" :justify="tTextUnitx0x3ComputedData.justify" :align="tTextUnitx0x3ComputedData.align" :content="state.exceedStandardData.SO2_DAY" :unit="tTextUnitx0x3ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x3ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-9d54.d462b6f24" class="airOverviewExceedingStandard-t-text-unit-0-4"  :c-style="tTextUnitx0x4ComputedData.cStyle" :justify="tTextUnitx0x4ComputedData.justify" :align="tTextUnitx0x4ComputedData.align" :content="state.exceedStandardData.CO_DAY" :unit="tTextUnitx0x4ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x4ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-dcf0.40abecee3" class="airOverviewExceedingStandard-t-text-unit-0-5"  :c-style="tTextUnitx0x5ComputedData.cStyle" :justify="tTextUnitx0x5ComputedData.justify" :align="tTextUnitx0x5ComputedData.align" :content="state.exceedStandardData.PM25_DAY" :unit="tTextUnitx0x5ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x5ComputedData.showOverflowTooltip"></t-text-unit><t-high-light-text id="t-high-light-text-1d5f.188e2f0a2" class="airOverviewExceedingStandard-t-high-light-text-0-6"  :fragment-list="state.desc" :styles="tHighLightTextx0x6ComputedData.styles" :c-style="tHighLightTextx0x6ComputedData.cStyle" @click="onclick1737010705990"></t-high-light-text><t-image-base id="t-image-base-6f5b.dff8bfbdd" class="airOverviewExceedingStandard-t-image-base-0-7"  :src="tImageBasex0x7ComputedData.src" :fit="tImageBasex0x7ComputedData.fit" :c-style="tImageBasex0x7ComputedData.cStyle"></t-image-base><t-image-base id="t-image-base-96f9.0d5fe2715" class="airOverviewExceedingStandard-t-image-base-0-8"  :src="tImageBasex0x8ComputedData.src" :fit="tImageBasex0x8ComputedData.fit" :c-style="tImageBasex0x8ComputedData.cStyle"></t-image-base><t-text-unit id="t-text-unit-05fd.45eaee068" class="airOverviewExceedingStandard-t-text-unit-0-9"  :c-style="tTextUnitx0x9ComputedData.cStyle" :justify="tTextUnitx0x9ComputedData.justify" :align="tTextUnitx0x9ComputedData.align" :content="state.exceedStandardData.O3_8_RATE" :unit="tTextUnitx0x9ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x9ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-3cf5.6c9c10df6" class="airOverviewExceedingStandard-t-text-unit-0-10"  :c-style="tTextUnitx0x10ComputedData.cStyle" :justify="tTextUnitx0x10ComputedData.justify" :align="tTextUnitx0x10ComputedData.align" :content="state.exceedStandardData.NO2_RATE" :unit="tTextUnitx0x10ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x10ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-6030.6315a682" class="airOverviewExceedingStandard-t-text-unit-0-11"  :c-style="tTextUnitx0x11ComputedData.cStyle" :justify="tTextUnitx0x11ComputedData.justify" :align="tTextUnitx0x11ComputedData.align" :content="state.exceedStandardData.PM10_RATE" :unit="tTextUnitx0x11ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x11ComputedData.showOverflowTooltip"></t-text-unit><t-image-base id="t-image-base-b2ed.05060b62e" class="airOverviewExceedingStandard-t-image-base-0-12"  :src="tImageBasex0x12ComputedData.src" :fit="tImageBasex0x12ComputedData.fit" :c-style="tImageBasex0x12ComputedData.cStyle"></t-image-base><t-rank-single id="t-rank-single-580e.524b28a9a" class="airOverviewExceedingStandard-t-rank-single-0-13"  :icon-src="tRankSinglex0x13ComputedData.iconSrc" :data="state.rightData" :c-style="tRankSinglex0x13ComputedData.cStyle" :tab="tRankSinglex0x13ComputedData.tab" :key-word="tRankSinglex0x13ComputedData.keyWord" :default-checked="tRankSinglex0x13ComputedData.defaultChecked" :auto-scroll="tRankSinglex0x13ComputedData.autoScroll" :speed="tRankSinglex0x13ComputedData.speed" :data-style="tRankSinglex0x13ComputedData.dataStyle" :data-raw="tRankSinglex0x13ComputedData.dataRaw" :alias="tRankSinglex0x13ComputedData.alias" @card-click="oncardClick1736750344174"></t-rank-single><t-image-base id="t-image-base-3fc3.9591bdcd4" class="airOverviewExceedingStandard-t-image-base-0-14"  :src="tImageBasex0x14ComputedData.src" :fit="tImageBasex0x14ComputedData.fit" :c-style="tImageBasex0x14ComputedData.cStyle"></t-image-base><t-image-base id="t-image-base-cec4.ea3833cab" class="airOverviewExceedingStandard-t-image-base-0-15"  :src="tImageBasex0x15ComputedData.src" :fit="tImageBasex0x15ComputedData.fit" :c-style="tImageBasex0x15ComputedData.cStyle"></t-image-base><t-text-unit id="t-text-unit-72d2.bf3608957" class="airOverviewExceedingStandard-t-text-unit-0-16"  :c-style="tTextUnitx0x16ComputedData.cStyle" :justify="tTextUnitx0x16ComputedData.justify" :align="tTextUnitx0x16ComputedData.align" :content="state.exceedStandardData.SO2_RATE" :unit="tTextUnitx0x16ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x16ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-3966.9f7a60546" class="airOverviewExceedingStandard-t-text-unit-0-17"  :c-style="tTextUnitx0x17ComputedData.cStyle" :justify="tTextUnitx0x17ComputedData.justify" :align="tTextUnitx0x17ComputedData.align" :content="state.exceedStandardData.CO_RATE" :unit="tTextUnitx0x17ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x17ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-d91b.6e01746af" class="airOverviewExceedingStandard-t-text-unit-0-18"  :c-style="tTextUnitx0x18ComputedData.cStyle" :justify="tTextUnitx0x18ComputedData.justify" :align="tTextUnitx0x18ComputedData.align" :content="state.exceedStandardData.PM25_RATE" :unit="tTextUnitx0x18ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x18ComputedData.showOverflowTooltip"></t-text-unit><t-image-base id="t-image-base-feac.8710b6174" class="airOverviewExceedingStandard-t-image-base-0-19"  :src="tImageBasex0x19ComputedData.src" :fit="tImageBasex0x19ComputedData.fit" :c-style="tImageBasex0x19ComputedData.cStyle"></t-image-base><t-rank-single id="t-rank-single-5982.6520a59e1" class="airOverviewExceedingStandard-t-rank-single-0-20"  :icon-src="tRankSinglex0x20ComputedData.iconSrc" :data="state.leftData" :c-style="tRankSinglex0x20ComputedData.cStyle" :tab="tRankSinglex0x20ComputedData.tab" :key-word="tRankSinglex0x20ComputedData.keyWord" :default-checked="tRankSinglex0x20ComputedData.defaultChecked" :auto-scroll="tRankSinglex0x20ComputedData.autoScroll" :speed="tRankSinglex0x20ComputedData.speed" :data-style="tRankSinglex0x20ComputedData.dataStyle" :data-raw="tRankSinglex0x20ComputedData.dataRaw" :alias="tRankSinglex0x20ComputedData.alias" @card-click="oncardClick1736838875521"></t-rank-single></div>
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
import { THighLightText, TImageBase, TRankSingle, TTextUnit } from '@ths/design';

export default {
  components: {
    THighLightText,
    TImageBase,
    TRankSingle,
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
   desc: [],
   rightData: [],
   leftData: [],
   exceedStandardData: {"TOTAL_DAYS":"","TOTAL_DAYS_DES":"","SO2_DAY":"","NO2_DAY":"","CO_DAY":"","O3_8_DAY":"","PM10_DAY":"","PM25_DAY":"","SO2_RATE":"","NO2_RATE":"","CO_RATE":"","O3_8_RATE":"","PM10_RATE":"","PM25_RATE":""},
   airOverviewContentState: {"timeType":"","timeValue":""},
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
tTextUnitx0x0: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"323px","top":"39px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"323px","top":"39px","animationName":""}},"text":{"default":{"fontSize":"16px","color":"var(--t-white)","fontFamily":"DIN-bold"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"天",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x1: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"323px","top":"84px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"323px","top":"84px","animationName":""}},"text":{"default":{"fontSize":"16px","color":"var(--t-white)","fontFamily":"DIN-bold"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"天",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x2: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"323px","top":"126px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"323px","top":"126px","animationName":""}},"text":{"default":{"fontSize":"16px","color":"var(--t-white)","fontFamily":"DIN-bold"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"天",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x3: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"115px","top":"126px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"115px","top":"126px","animationName":""}},"text":{"default":{"fontSize":"16px","color":"var(--t-white)","fontFamily":"DIN-bold"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"天",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x4: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"114px","top":"82px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"114px","top":"82px","animationName":""}},"text":{"default":{"fontSize":"16px","color":"var(--t-white)","fontFamily":"DIN-bold"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"天",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x5: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"115px","top":"39px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"115px","top":"39px","animationName":""}},"text":{"default":{"fontSize":"16px","color":"var(--t-white)","fontFamily":"DIN-bold"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"天",
showOverflowTooltip:true, 
 },
},
tHighLightTextx0x6: {
defaultStyle: {
            default: {"width":"410px","height":"40px","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--business-show-bg15)","fontSize":"14px","color":"var(--t-white)","paddingLeft":"15px","lineHeight":"40px","cursor":"pointer"},
            
            },
 default: { 
 
fragmentList:[],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--t-white)"}},{"name":"style2","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--business-strong)"}}],
cStyle:{"wrapper":{"default":{"width":"410px","height":"40px","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--business-show-bg15)","fontSize":"14px","color":"var(--t-white)","paddingLeft":"15px","lineHeight":"40px","cursor":"pointer"}}}, 
 },
},
tImageBasex0x7: {
defaultStyle: {
            default: {"width":"24px","height":"21px","top":"131px","left":"357px","position":"unset","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/39905ed51fab4719980aa3c25b54f2cc.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"24px","height":"21px","top":"131px","left":"357px","position":"unset","animationName":""}}}, 
 },
},
tImageBasex0x8: {
defaultStyle: {
            default: {"width":"24px","height":"21px","top":"88px","left":"356px","position":"unset","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/39905ed51fab4719980aa3c25b54f2cc.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"24px","height":"21px","top":"88px","left":"356px","position":"unset","animationName":""}}}, 
 },
},
tTextUnitx0x9: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"269px","top":"126px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"269px","top":"126px","animationName":""}},"text":{"default":{"fontSize":"16px","color":"var(--t-white)","fontFamily":"DIN-bold"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x10: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"269px","top":"84px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"269px","top":"84px","animationName":""}},"text":{"default":{"fontSize":"16px","color":"var(--t-white)","fontFamily":"DIN-bold"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x11: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"269px","top":"38px","animationName":"","color":"var(--business-text-avianize)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"269px","top":"38px","animationName":"","color":"var(--business-text-avianize)"}},"text":{"default":{"fontSize":"16px","color":"var(--t-white)","fontFamily":"DIN-bold"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tImageBasex0x12: {
defaultStyle: {
            default: {"width":"24px","height":"21px","top":"42px","left":"356px","position":"unset","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/39905ed51fab4719980aa3c25b54f2cc.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"24px","height":"21px","top":"42px","left":"356px","position":"unset","animationName":""}}}, 
 },
},
tRankSinglex0x13: {
defaultStyle: {
            default: {"width":"200px","height":"138px","position":"unset","left":"209px","top":"29px","animationName":""},
            
            },
 default: { 
 
iconSrc:"",
data:[{"name":"PM₁₀","targetValue":100,"currentValue":29,"unit":"天"},{"name":"NO₂","targetValue":100,"currentValue":28,"unit":"天"},{"name":"O₃-8h","targetValue":100,"currentValue":16,"unit":"天"}],
cStyle:{"wrapper":{"default":{"width":"200px","height":"138px","position":"unset","left":"209px","top":"29px","animationName":""}},"index":{"default":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-31/7c5483b54a5147f39ae4900059747836.png)","backgroundPosition":"center","backgroundRepeat":"no-repeat","backgroundSize":"27px 19px","color":"rgba(255, 255, 255, 1)","fontSize":"0px","height":"19px","width":"0px"}},"name":{"default":{"color":"var(--business-text-avianize)","fontSize":"14px","width":"200px","zIndex":"999","height":"18px","cursor":"pointer"}},"proportionBarBg":{"default":{"transform":"none","height":"6px","borderRadius":0,"background":"var(--t-bg-60)","border":"1px solid rgba(255,213,0,0.3)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg60)"}},"proportionBarInner":{"default":{"transform":"none","height":"6px","borderRadius":0,"backgroundImage":"","background":"var(--content-theme-color)","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","width":"auto","backdropFilter":"blur(0px)","opacity":"100% !important","backgroundColor":"var(--business-theme)","cursor":"pointer"}},"value":{"default":{"color":"var(--t-white)","fontWeight":500,"fontSize":"0px","fontFamily":"DIN-bold"}},"unit":{"default":{"color":"var(--t-text-weak)","fontWeight":400,"fontSize":"0px"}},"proportionBar":{"default":{"background":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer"}},"itemWrapper":{"default":{"marginBottom":"0px","cursor":"auto"}},"percentage":{"default":{"fontSize":"0px"}},"separator":{"default":{"fontSize":"0px","color":"","width":"0px"}},"differenceText":{"default":{"fontSize":"0px"}}},
tab:false,
keyWord:"",
defaultChecked:"",
autoScroll:false,
speed:3,
dataStyle:[],
dataRaw:[{"name":"{{PM10}}","targetValue":100,"currentValue":29,"unit":"天"},{"name":"{{NO2}}","targetValue":100,"currentValue":28,"unit":"天"},{"name":"{{O3}}-8h","targetValue":100,"currentValue":16,"unit":"天"}],
alias:{"currentValue":"percentage"}, 
 },
},
tImageBasex0x14: {
defaultStyle: {
            default: {"width":"24px","height":"21px","top":"134px","left":"150px","position":"unset","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/39905ed51fab4719980aa3c25b54f2cc.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"24px","height":"21px","top":"134px","left":"150px","position":"unset","animationName":""}}}, 
 },
},
tImageBasex0x15: {
defaultStyle: {
            default: {"width":"24px","height":"21px","top":"89px","left":"149px","position":"unset","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/39905ed51fab4719980aa3c25b54f2cc.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"24px","height":"21px","top":"89px","left":"149px","position":"unset","animationName":""}}}, 
 },
},
tTextUnitx0x16: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"62px","top":"128px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"62px","top":"128px","animationName":""}},"text":{"default":{"fontSize":"16px","color":"var(--t-white)","fontFamily":"DIN-bold"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x17: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"62px","top":"83px","animationName":"","color":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"62px","top":"83px","animationName":"","color":""}},"text":{"default":{"fontSize":"16px","color":"var(--t-white)","fontFamily":"DIN-bold"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x18: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"62px","top":"40px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"62px","top":"40px"}},"text":{"default":{"fontSize":"16px","color":"var(--t-white)","fontFamily":"DIN-bold"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)"}}},
justify:"flex-end",
align:"flex-end",
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tImageBasex0x19: {
defaultStyle: {
            default: {"width":"24px","height":"21px","top":"44px","left":"149px","position":"unset"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/39905ed51fab4719980aa3c25b54f2cc.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"24px","height":"21px","top":"44px","left":"149px","position":"unset"}}}, 
 },
},
tRankSinglex0x20: {
defaultStyle: {
            default: {"width":"200px","height":"138px","position":"unset","left":"1px","top":"31px","cursor":"pointer"},
            
            },
 default: { 
 
iconSrc:"",
data:[{"name":"PM₂.₅","targetValue":100,"currentValue":29,"unit":"天"},{"name":"CO","targetValue":100,"currentValue":28,"unit":"天"},{"name":"SO₂","targetValue":100,"currentValue":16,"unit":"天"}],
cStyle:{"wrapper":{"default":{"width":"200px","height":"138px","position":"unset","left":"1px","top":"31px","cursor":"pointer"}},"index":{"default":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-31/7c5483b54a5147f39ae4900059747836.png)","backgroundPosition":"center","backgroundRepeat":"no-repeat","backgroundSize":"27px 19px","color":"rgba(255, 255, 255, 1)","fontSize":"0px","height":"19px","width":"0px"}},"name":{"default":{"color":"var(--business-text-avianize)","fontSize":"14px","backgroundColor":"","width":"200px","zIndex":"999","height":"18px","cursor":"pointer"}},"proportionBarBg":{"default":{"transform":"none","height":"6px","borderRadius":0,"background":"var(--t-bg-60)","border":"1px solid rgba(255,213,0,0.3)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg60)"}},"proportionBarInner":{"default":{"transform":"none","height":"6px","borderRadius":0,"backgroundImage":"","background":"var(--content-theme-color)","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","width":"auto","backdropFilter":"blur(100px)","backgroundColor":"var(--business-theme)","cursor":"pointer"}},"value":{"default":{"color":"var(--t-white)","fontWeight":500,"fontSize":"0px","fontFamily":"DIN-black"}},"unit":{"default":{"color":"var(--business-text-avianize)","fontWeight":400,"fontSize":"12px"}},"proportionBar":{"default":{"background":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","height":"6px","width":"200px"}},"itemWrapper":{"default":{"marginBottom":"0px","cursor":"auto"}},"separator":{"default":{"fontSize":"0px","width":"0px"}},"differenceText":{"default":{"fontSize":"0px"}},"percentage":{"default":{"fontSize":"0px"}}},
tab:false,
keyWord:"",
defaultChecked:"",
autoScroll:false,
speed:3,
dataStyle:[],
dataRaw:[{"name":"{{PM25}}","targetValue":100,"currentValue":29,"unit":"天"},{"name":"CO","targetValue":100,"currentValue":28,"unit":"天"},{"name":"{{SO2}}","targetValue":100,"currentValue":16,"unit":"天"}],
alias:{"currentValue":"percentage"}, 
 },
},
});
const getProvider = () => {
const rootData = inject('airOverviewContentState');
state.airOverviewContentState = rootData;
watch(() => state.airOverviewContentState, () => {
  if (state.airOverviewContentState.timeType && state.airOverviewContentState.timeValue) {
     getExceedStandardDays();
  }
}, {
  deep: true,
  immediate: true,
});
};
const openDialog = (pollutor) => {
console.log(pollutor, '#####')
global.businessDialog.dialogParmas = {
  pollutor: pollutor.nameValue,
}
};
const oncardClick1736750344174 = (data) => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'airOverviewExceedStandardComponent',
                    data: {
                      businessDialog:{dialogName: 'airOverviewExceedStandardComponent'}
                    },
                  });
// 执行自定义方法
openDialog(data);
};
const oncardClick1736838875521 = (data) => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'airOverviewExceedStandardComponent',
                    data: {
                      businessDialog:{dialogName: 'airOverviewExceedStandardComponent'}
                    },
                  });
// 执行自定义方法
openDialog(data);
};
const onclick1737010705990 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'airOverviewExceedStandardComponent',
                    data: {
                      businessDialog:{dialogName: 'airOverviewExceedStandardComponent'}
                    },
                  });
// 执行自定义方法
openDialog("PM25");
};
// 接口函数
const getExceedStandardDays = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.airOverviewContentState.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"TIME_TYPE":state.airOverviewContentState.timeType,"interfaceId":"9a44c30d57312f32d679b551b9fa2c7c"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200') {
  const detailData = data[0] ? data[0] : {};
  const character = convertCharacter('下标')[0].split(' ')
  state.exceedStandardData.SO2_RATE = detailData.SO2_RATE || 0;
  state.exceedStandardData.NO2_RATE = detailData.NO2_RATE || 0;
  state.exceedStandardData.CO_RATE = detailData.CO_RATE || 0;
  state.exceedStandardData.O3_8_RATE = detailData.O3_8_RATE || 0;
  state.exceedStandardData.PM10_RATE = detailData.PM10_RATE || 0;
  state.exceedStandardData.PM25_RATE = detailData.PM25_RATE || 0;
  state.exceedStandardData.SO2_DAY = detailData.SO2 || 0;
  state.exceedStandardData.NO2_DAY = detailData.NO2 || 0;
  state.exceedStandardData.CO_DAY = detailData.CO || 0;
  state.exceedStandardData.O3_8_DAY = detailData.O3_8 || 0;
  state.exceedStandardData.PM10_DAY = detailData.PM10 || 0;
  state.exceedStandardData.PM25_DAY = detailData.PM25 || 0;
  state.leftData = [
    {
      name: `PM${character[2]}.${character[5]}`,
      nameValue: 'PM25',
      targetValue: 100,
      currentValue: (detailData.PM25 || 0),
      percentage: (detailData.PM25_RATE || 0),
    },
    {
      name: "CO",
      nameValue: 'CO',
      targetValue: 100,
      currentValue: (detailData.CO || 0),
      percentage: (detailData.CO_RATE || 0),
    },
    {
      name: `SO${character[2]}`,
      nameValue: 'SO2',
      targetValue: 100,
      currentValue: (detailData.SO2 || 0),
      percentage: (detailData.SO2_RATE || 0),
    }
  ]
  state.rightData = [
    {
      name: `PM${character[1]}${character[0]}`,
      nameValue: 'PM10',
      targetValue: 100,
      currentValue: (detailData.PM10 || 0),
      percentage: (detailData.PM10_RATE || 0),
    },
    {
      name: `NO${character[2]}`,
      nameValue: 'NO2',
      targetValue: 100,
      currentValue: (detailData.NO2 || 0),
      percentage: (detailData.NO2_RATE || 0),
    },
    {
      name: `O${character[3]}-8h`,
      nameValue: 'O3_8',
      targetValue: 100,
      currentValue: (detailData.O3_8 || 0),
      percentage: (detailData.O3_8_RATE || 0),
    }
  ]

  state.desc = [
    {
      text: "超标天数 ",
      styleName: "style1"
    },
    {
      text: handleNoVal(detailData.TOTAL_DAYS),
      styleName: "style2"
    },
    {
      text: "天（一天可能存在多种超标污染物）",
      styleName: "style1"
    }
  ]
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], () => {
getExceedStandardDays();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewExceedingStandard', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
onMounted(() => {
setPageScale('t-l-c-airOverviewExceedingStandard', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTextUnitx0x0ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x0.default, componentState.tTextUnitx0x0?.[state.screenSize]));

 const tTextUnitx0x1ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x1.default, componentState.tTextUnitx0x1?.[state.screenSize]));

 const tTextUnitx0x2ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x2.default, componentState.tTextUnitx0x2?.[state.screenSize]));

 const tTextUnitx0x3ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x3.default, componentState.tTextUnitx0x3?.[state.screenSize]));

 const tTextUnitx0x4ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x4.default, componentState.tTextUnitx0x4?.[state.screenSize]));

 const tTextUnitx0x5ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x5.default, componentState.tTextUnitx0x5?.[state.screenSize]));

 const tHighLightTextx0x6ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x6.default, componentState.tHighLightTextx0x6?.[state.screenSize]));

 const tImageBasex0x7ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x7.default, componentState.tImageBasex0x7?.[state.screenSize]));

 const tImageBasex0x8ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x8.default, componentState.tImageBasex0x8?.[state.screenSize]));

 const tTextUnitx0x9ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x9.default, componentState.tTextUnitx0x9?.[state.screenSize]));

 const tTextUnitx0x10ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x10.default, componentState.tTextUnitx0x10?.[state.screenSize]));

 const tTextUnitx0x11ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x11.default, componentState.tTextUnitx0x11?.[state.screenSize]));

 const tImageBasex0x12ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x12.default, componentState.tImageBasex0x12?.[state.screenSize]));

 const tRankSinglex0x13ComputedData = computed(() => _.merge({}, componentState.tRankSinglex0x13.default, componentState.tRankSinglex0x13?.[state.screenSize]));

 const tImageBasex0x14ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x14.default, componentState.tImageBasex0x14?.[state.screenSize]));

 const tImageBasex0x15ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x15.default, componentState.tImageBasex0x15?.[state.screenSize]));

 const tTextUnitx0x16ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x16.default, componentState.tTextUnitx0x16?.[state.screenSize]));

 const tTextUnitx0x17ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x17.default, componentState.tTextUnitx0x17?.[state.screenSize]));

 const tTextUnitx0x18ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x18.default, componentState.tTextUnitx0x18?.[state.screenSize]));

 const tImageBasex0x19ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x19.default, componentState.tImageBasex0x19?.[state.screenSize]));

 const tRankSinglex0x20ComputedData = computed(() => _.merge({}, componentState.tRankSinglex0x20.default, componentState.tRankSinglex0x20?.[state.screenSize]));

return {
global,
state,
componentState,
tTextUnitx0x0ComputedData,
tTextUnitx0x1ComputedData,
tTextUnitx0x2ComputedData,
tTextUnitx0x3ComputedData,
tTextUnitx0x4ComputedData,
tTextUnitx0x5ComputedData,
tHighLightTextx0x6ComputedData,
tImageBasex0x7ComputedData,
tImageBasex0x8ComputedData,
tTextUnitx0x9ComputedData,
tTextUnitx0x10ComputedData,
tTextUnitx0x11ComputedData,
tImageBasex0x12ComputedData,
tRankSinglex0x13ComputedData,
tImageBasex0x14ComputedData,
tImageBasex0x15ComputedData,
tTextUnitx0x16ComputedData,
tTextUnitx0x17ComputedData,
tTextUnitx0x18ComputedData,
tImageBasex0x19ComputedData,
tRankSinglex0x20ComputedData,
onclick1737010705990,
oncardClick1736750344174,
oncardClick1736838875521,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewExceedingStandard {
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
height: 164px;
width: 410px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-text-unit-0-0 {
position: absolute !important;
top: 39px;
left: 323px;
width: 86px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-text-unit-0-1 {
position: absolute !important;
top: 84px;
left: 323px;
width: 86px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-text-unit-0-2 {
position: absolute !important;
top: 126px;
left: 323px;
width: 86px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-text-unit-0-3 {
position: absolute !important;
top: 126px;
left: 115px;
width: 86px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-text-unit-0-4 {
position: absolute !important;
top: 82px;
left: 114px;
width: 86px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-text-unit-0-5 {
position: absolute !important;
top: 39px;
left: 115px;
width: 86px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-high-light-text-0-6 {
position: absolute !important;
top: 0px;
left: 0px;
width: 410px;
height: 40px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-image-base-0-7 {
position: absolute !important;
top: 131px;
left: 357px;
width: 24px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-image-base-0-8 {
position: absolute !important;
top: 88px;
left: 356px;
width: 24px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-text-unit-0-9 {
position: absolute !important;
top: 126px;
left: 269px;
width: 86px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-text-unit-0-10 {
position: absolute !important;
top: 84px;
left: 269px;
width: 86px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-text-unit-0-11 {
position: absolute !important;
top: 38px;
left: 269px;
width: 86px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-image-base-0-12 {
position: absolute !important;
top: 42px;
left: 356px;
width: 24px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-rank-single-0-13 {
position: absolute !important;
top: 29px;
left: 209px;
width: 200px;
height: 138px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-image-base-0-14 {
position: absolute !important;
top: 134px;
left: 150px;
width: 24px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-image-base-0-15 {
position: absolute !important;
top: 89px;
left: 149px;
width: 24px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-text-unit-0-16 {
position: absolute !important;
top: 128px;
left: 62px;
width: 86px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-text-unit-0-17 {
position: absolute !important;
top: 83px;
left: 62px;
width: 86px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-text-unit-0-18 {
position: absolute !important;
top: 40px;
left: 62px;
width: 86px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-image-base-0-19 {
position: absolute !important;
top: 44px;
left: 149px;
width: 24px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewExceedingStandard .airOverviewExceedingStandard-t-rank-single-0-20 {
position: absolute !important;
top: 31px;
left: 1px;
width: 200px;
height: 138px;
pointer-events: auto;
}
</style>
