<template>
  <div id="t-l-c-SyDialogTitleBackgroud" class="t-l-c-SyDialogTitleBackgroud" ><t-rect id="t-rect-0d2f.b3b3d2e0a" class="SyDialogTitleBackgroud-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-dd69.2f3da0b9" class="SyDialogTitleBackgroud-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-rect id="t-rect-9fe7.661bbab62" class="SyDialogTitleBackgroud-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle"></t-rect><t-rect id="t-rect-3061.75c774c23" class="SyDialogTitleBackgroud-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle"></t-rect><t-rect id="t-rect-1a7d.0c87aa674" class="SyDialogTitleBackgroud-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle"></t-rect><t-rect id="t-rect-9275.9648e3d4b" class="SyDialogTitleBackgroud-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle"></t-rect><t-rect id="t-rect-5272.1c1ba8a4a" class="SyDialogTitleBackgroud-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle"></t-rect><t-rect id="t-rect-a446.60188e0de" class="SyDialogTitleBackgroud-t-rect-0-7"  :tip="tRectx0x7ComputedData.tip" :label="tRectx0x7ComputedData.label" :active="tRectx0x7ComputedData.active" :c-style="tRectx0x7ComputedData.cStyle"></t-rect><t-rect id="t-rect-fa67.77c47e843" class="SyDialogTitleBackgroud-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle"></t-rect><t-rect id="t-rect-4c89.2b0341ed7" class="SyDialogTitleBackgroud-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle"></t-rect></div>
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
import { TRect } from '@ths/design';

export default {
  components: {
    TRect,
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
            default: {"width":"936px","height":"28px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","position":"unset","left":"24px","top":"0px","animationName":"","background":"var(--business-title-second-bg)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"936px","height":"28px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","position":"unset","left":"24px","top":"0px","animationName":"","background":"var(--business-title-second-bg)"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"774px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom4f535b3e2b5f4","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"774px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom4f535b3e2b5f4","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"796px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom4c3c1b39109cc","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"796px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom4c3c1b39109cc","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"819px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom69c9662b286de","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"819px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom69c9662b286de","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"841px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customac792bbf9af19","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"841px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customac792bbf9af19","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"864px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customcdd3f7e7beaa6","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"864px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customcdd3f7e7beaa6","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"886px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customfa732ecba515e","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"2.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"886px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customfa732ecba515e","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"2.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x7: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"909px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custombc1e59c456704","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"3s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"909px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custombc1e59c456704","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"3s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"931px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custome263d94835a89","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"3.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-1px","left":"931px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custome263d94835a89","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"3.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"50px","height":"26px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/3b0d6f226d5f40619c1675b604ec5b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"0px","left":"-21px","position":"unset","animationName":"custom457e0c4d7ae9a,custom22a312988078d","animationDuration":"1.5s,1.3s","animationTimingFunction":"ease-in,ease-in-out","animationDelay":"0s,0s","animationIterationCount":"infinite,infinite","animationDirection":"alternate,alternate-reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"50px","height":"26px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/3b0d6f226d5f40619c1675b604ec5b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"0px","left":"-21px","position":"unset","animationName":"custom457e0c4d7ae9a,custom22a312988078d","animationDuration":"1.5s,1.3s","animationTimingFunction":"ease-in,ease-in-out","animationDelay":"0s,0s","animationIterationCount":"infinite,infinite","animationDirection":"alternate,alternate-reverse"}}}, 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-SyDialogTitleBackgroud', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-SyDialogTitleBackgroud', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tRectx0x7ComputedData = computed(() => _.merge({}, componentState.tRectx0x7.default, componentState.tRectx0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tRectx0x5ComputedData,
tRectx0x6ComputedData,
tRectx0x7ComputedData,
tRectx0x8ComputedData,
tRectx0x9ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-SyDialogTitleBackgroud {
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
background-color: rgba(255, 0, 0, 0);
height: 28px;
width: 960px;
}
.t-l-c-SyDialogTitleBackgroud .SyDialogTitleBackgroud-t-rect-0-0 {
position: absolute !important;
top: 0px;
left: 24px;
width: 936px;
height: 28px;
pointer-events: auto;
}

.t-l-c-SyDialogTitleBackgroud .SyDialogTitleBackgroud-t-rect-0-1 {
position: absolute !important;
top: -1px;
left: 774px;
width: 29px;
height: 36px;
pointer-events: auto;
}

.t-l-c-SyDialogTitleBackgroud .SyDialogTitleBackgroud-t-rect-0-2 {
position: absolute !important;
top: -1px;
left: 796px;
width: 29px;
height: 36px;
pointer-events: auto;
}

.t-l-c-SyDialogTitleBackgroud .SyDialogTitleBackgroud-t-rect-0-3 {
position: absolute !important;
top: -1px;
left: 819px;
width: 29px;
height: 36px;
pointer-events: auto;
}

.t-l-c-SyDialogTitleBackgroud .SyDialogTitleBackgroud-t-rect-0-4 {
position: absolute !important;
top: -1px;
left: 841px;
width: 29px;
height: 36px;
pointer-events: auto;
}

.t-l-c-SyDialogTitleBackgroud .SyDialogTitleBackgroud-t-rect-0-5 {
position: absolute !important;
top: -1px;
left: 864px;
width: 29px;
height: 36px;
pointer-events: auto;
}

.t-l-c-SyDialogTitleBackgroud .SyDialogTitleBackgroud-t-rect-0-6 {
position: absolute !important;
top: -1px;
left: 886px;
width: 29px;
height: 36px;
pointer-events: auto;
}

.t-l-c-SyDialogTitleBackgroud .SyDialogTitleBackgroud-t-rect-0-7 {
position: absolute !important;
top: -1px;
left: 909px;
width: 29px;
height: 36px;
pointer-events: auto;
}

.t-l-c-SyDialogTitleBackgroud .SyDialogTitleBackgroud-t-rect-0-8 {
position: absolute !important;
top: -1px;
left: 931px;
width: 29px;
height: 36px;
pointer-events: auto;
}

.t-l-c-SyDialogTitleBackgroud .SyDialogTitleBackgroud-t-rect-0-9 {
position: absolute !important;
top: 0px;
left: -21px;
width: 50px;
height: 26px;
pointer-events: auto;
}

@keyframes custom4f535b3e2b5f4 {

0% {

opacity: 
100%;
}
50% {

opacity: 
10%;
}
100% {

opacity: 
100%;
}
}
@keyframes custom4c3c1b39109cc {

0% {

opacity: 
100%;
}
50% {

opacity: 
10%;
}
100% {

opacity: 
100%;
}
}
@keyframes custom69c9662b286de {

0% {

opacity: 
100%;
}
50% {

opacity: 
10%;
}
100% {

opacity: 
100%;
}
}
@keyframes customac792bbf9af19 {

0% {

opacity: 
100%;
}
50% {

opacity: 
10%;
}
100% {

opacity: 
100%;
}
}
@keyframes customcdd3f7e7beaa6 {

0% {

opacity: 
100%;
}
50% {

opacity: 
10%;
}
100% {

opacity: 
100%;
}
}
@keyframes customfa732ecba515e {

0% {

opacity: 
100%;
}
50% {

opacity: 
10%;
}
100% {

opacity: 
100%;
}
}
@keyframes custombc1e59c456704 {

0% {

opacity: 
100%;
}
50% {

opacity: 
10%;
}
100% {

opacity: 
100%;
}
}
@keyframes custome263d94835a89 {

0% {

opacity: 
100%;
}
50% {

opacity: 
10%;
}
100% {

opacity: 
100%;
}
}
@keyframes custom457e0c4d7ae9a {

0% {

opacity: 
100%;
}
100% {

opacity: 
100%;
}
}
@keyframes custom22a312988078d {

0% {

opacity: 
100%;
}
100% {

opacity: 
100%;
}
}
</style>
