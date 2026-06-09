<template>
  <div id="t-l-c-airOverviewChangeTrentTitle" class="t-l-c-airOverviewChangeTrentTitle" ><t-component id="t-component-6f3b.f3ecc4cb7" class="airOverviewChangeTrentTitle-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName"></t-component><t-text id="t-text-4f12.f427f5fe7" class="airOverviewChangeTrentTitle-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-text v-if="state.showViewBtn === true" id="t-text-bf3c.aa9117237" class="airOverviewChangeTrentTitle-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle" @click="onclick1734683104725"></t-text></div>
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
import { TComponent, TText } from '@ths/design';

export default {
  components: {
    TComponent,
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
   showViewBtn: true,
   airOverviewContentState: {"timeValue":"","timeType":""},
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
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"191px","height":"20px","color":"var(--t-white)","fontFamily":"方正综艺","fontSize":"17px","position":"unset","left":"34px","top":"7px","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"珠三角地区变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"20px","color":"var(--t-white)","fontFamily":"方正综艺","fontSize":"17px","position":"unset","left":"34px","top":"7px","animationName":"","lineHeight":"20px"},"hover":{"fontSize":"17px"},"focus":{"fontSize":"17px"}},"unit":{"default":{"fontSize":"17px"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"108px","height":"20px","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","fontFamily":"微软雅黑","lineHeight":"20px","textAlign":"right","backgroundImage":"var(--business-right-arrow)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"14px 14px","-webkit-mask-size":"","backgroundPosition":"100% 50%","-webkit-mask-position":"","paddingRight":"18px","position":"unset","left":"295px","top":"6px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"查看污染日历",
editable:false,
cStyle:{"wrapper":{"default":{"width":"108px","height":"20px","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","fontFamily":"微软雅黑","lineHeight":"20px","textAlign":"right","backgroundImage":"var(--business-right-arrow)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"14px 14px","-webkit-mask-size":"","backgroundPosition":"100% 50%","-webkit-mask-position":"","paddingRight":"18px","position":"unset","left":"295px","top":"6px","cursor":"pointer","animationName":""}}}, 
 },
},
});
const getProvider = () => {
function initData(rootData) {
  state.airOverviewContentState = rootData;
  // 选中小时、日时显示
  state.showViewBtn = ['hour', 'day'].includes(state.airOverviewContentState.timeType);
}
const rootData = inject('airOverviewContentState');
initData(rootData);
watch(() => rootData, () => {
  initData(rootData);
}, {
  deep: true
});
};
const onclick1734683104725 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'airOverviewPolluteCalendarComponent',
                    data: {
                      businessDialog:{dialogName: 'airOverviewPolluteCalendarComponent'}
                    },
                  });
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogParmas',
                    value:state.airOverviewContentState,
                    data: {
                      businessDialog:{dialogParmas: state.airOverviewContentState}
                    },
                  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewChangeTrentTitle', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
onMounted(() => {
setPageScale('t-l-c-airOverviewChangeTrentTitle', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

return {
global,
state,
componentState,
tComponentx0x0ComputedData,
tTextx0x1ComputedData,
tTextx0x2ComputedData,
onclick1734683104725,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewChangeTrentTitle {
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
width: 410px;
height: 32px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airOverviewChangeTrentTitle .airOverviewChangeTrentTitle-t-component-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewChangeTrentTitle .airOverviewChangeTrentTitle-t-text-0-1 {
position: absolute !important;
top: 7px;
left: 34px;
width: 191px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewChangeTrentTitle .airOverviewChangeTrentTitle-t-text-0-2 {
position: absolute !important;
top: 6px;
left: 295px;
width: 108px;
height: 20px;
pointer-events: auto;
}
</style>
