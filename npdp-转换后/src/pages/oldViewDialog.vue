<template>
  <div id="t-l-c-oldViewDialog" class="t-l-c-oldViewDialog" ><t-rect id="t-rect-956c.76f89a13a" class="oldViewDialog-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-7f6d.f68c6ee65" class="oldViewDialog-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-rect id="t-rect-e5ee.fb1b5f0aa" class="oldViewDialog-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle"></t-rect><t-image-base id="t-image-base-391f.0550b0bf5" class="oldViewDialog-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle"></t-image-base><t-rect id="t-rect-0090.dfbcd0634" class="oldViewDialog-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1721979040344"></t-rect><t-text id="t-text-01d3.75edb0e66" class="oldViewDialog-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle"></t-text><t-iframe id="t-iframe-e73e.76136d908" class="oldViewDialog-t-iframe-0-6"  :src="state.oldViewDialogIframeUrl" :srcdoc="tIframex0x6ComputedData.srcdoc" :scrolling="tIframex0x6ComputedData.scrolling" :c-style="tIframex0x6ComputedData.cStyle"></t-iframe></div>
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
import { TIframe, TImageBase, TRect, TText } from '@ths/design';

export default {
  components: {
    TIframe,
    TImageBase,
    TRect,
    TText,
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
   oldViewDialogIframeUrl: "",
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
            default: {"width":"1100px","height":"814px","left":"264px","top":"177px","border-radius":"16px","background":"var(--intergrated-query-dialog-bg)","box-shadow":"0px 4px 25px 0px var(--intergrated-query-dialog-box-shadow-color)","border-width":0,"borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--intergrated-query-dialog-border-image)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1100px","height":"814px","left":"264px","top":"177px","border-radius":"16px","background":"var(--intergrated-query-dialog-bg)","box-shadow":"0px 4px 25px 0px var(--intergrated-query-dialog-box-shadow-color)","border-width":0,"borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--intergrated-query-dialog-border-image)"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1102px","height":"812px","position":"unset","left":"264px","top":"177px","border-radius":"16px","background":"rgba(7, 29, 11, 0.95)","border-width":0,"color":"var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundColor":"var(--intergrated-query-dialog-background-color)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1102px","height":"812px","position":"unset","left":"264px","top":"177px","border-radius":"16px","background":"rgba(7, 29, 11, 0.95)","border-width":0,"color":"var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundColor":"var(--intergrated-query-dialog-background-color)"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"1100px","height":"46px","position":"unset","left":"264px","top":"177px","border-radius":"16px 16px 0px 0px","border-width":0,"background":"var(--intergrated-query-dialog-title-bg)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1100px","height":"46px","position":"unset","left":"264px","top":"177px","border-radius":"16px 16px 0px 0px","border-width":0,"background":"var(--intergrated-query-dialog-title-bg)"}}}, 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","position":"unset","left":"276px","top":"188px"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/aa0899554a6c437db802092b14b0a80b.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","position":"unset","left":"276px","top":"188px"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"24px","height":"24px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"10px 10px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"1327px","top":"188px","border-radius":"2px","border":"1px solid rgba(121, 255, 175, 0.6)","cursor":"pointer","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"10px 10px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"1327px","top":"188px","border-radius":"2px","border":"1px solid rgba(121, 255, 175, 0.6)","cursor":"pointer","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)"},"hover":{"opacity":"80% !important"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"308px","top":"189px","font-size":"18px","text-shadow":"0px 0px 6px rgba(17, 214, 104, 0.62)","font-weight":"bold","animationName":""},
            
            },
 default: { 
 
label:"企业详情",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"308px","top":"189px","font-size":"18px","text-shadow":"0px 0px 6px rgba(17, 214, 104, 0.62)","font-weight":"bold","animationName":""}}}, 
 },
},
tIframex0x6: {
defaultStyle: {
            default: {"width":"1071px","height":"737px","position":"unset","left":"277px","top":"233px","backgroundColor":"rgba(23, 62, 228, 0)"},
            
            },
 default: { 
 
src:"",
srcdoc:"",
scrolling:"yes",
cStyle:{"wrapper":{"default":{"width":"1071px","height":"737px","position":"unset","left":"277px","top":"233px","backgroundColor":"rgba(23, 62, 228, 0)"}}}, 
 },
},
});
const updateIframeUrl = (data) => {
console.log("企业详情弹窗测试",data);
let msgData = JSON.parse(data);
state.oldViewDialogIframeUrl = msgData.url;
console.log(111,state.oldViewDialogIframeUrl);
};
const onclick1721979040344 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'oldViewDialog',
                    value:false,
                    data: {
                      oldViewDialog: false
                    },
                  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-oldViewDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
rootData.rootOn('rootSocket:change', (data)=>{
if(data.type === "showOldViewDialog"){
try{
// 执行自定义方法
updateIframeUrl(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
});
onMounted(() => {
setPageScale('t-l-c-oldViewDialog', global.appScaleMode, 'normal');
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

 const tImageBasex0x3ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x3.default, componentState.tImageBasex0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tIframex0x6ComputedData = computed(() => _.merge({}, componentState.tIframex0x6.default, componentState.tIframex0x6?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tImageBasex0x3ComputedData,
tRectx0x4ComputedData,
tTextx0x5ComputedData,
tIframex0x6ComputedData,
onclick1721979040344,
};
},
}
</script>

<style scoped>
.t-l-c-oldViewDialog {
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
height: 1080px;
background-color: rgba(0,0,0,0);
}
.t-l-c-oldViewDialog .oldViewDialog-t-rect-0-0 {
position: absolute !important;
top: 177px;
left: 264px;
width: 1100px;
height: 814px;
pointer-events: auto;
}

.t-l-c-oldViewDialog .oldViewDialog-t-rect-0-1 {
position: absolute !important;
top: 177px;
left: 264px;
width: 1102px;
height: 812px;
pointer-events: auto;
}

.t-l-c-oldViewDialog .oldViewDialog-t-rect-0-2 {
position: absolute !important;
top: 177px;
left: 264px;
width: 1100px;
height: 46px;
pointer-events: auto;
}

.t-l-c-oldViewDialog .oldViewDialog-t-image-base-0-3 {
position: absolute !important;
top: 188px;
left: 276px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-oldViewDialog .oldViewDialog-t-rect-0-4 {
position: absolute !important;
top: 188px;
left: 1327px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-oldViewDialog .oldViewDialog-t-text-0-5 {
position: absolute !important;
top: 189px;
left: 308px;
width: 96px;
height: 19px;
pointer-events: auto;
}

.t-l-c-oldViewDialog .oldViewDialog-t-iframe-0-6 {
position: absolute !important;
top: 233px;
left: 277px;
width: 1071px;
height: 737px;
pointer-events: auto;
}
</style>
