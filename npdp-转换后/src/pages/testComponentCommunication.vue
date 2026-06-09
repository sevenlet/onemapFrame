<template>
  <div id="t-l-c-testComponentCommunication" class="t-l-c-testComponentCommunication" ><t-component id="t-component-0901.0e5f60b47" class="testComponentCommunication-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName"></t-component><t-gradient-shadow-text id="t-gradient-shadow-text-dc1a.df6b559f4" class="testComponentCommunication-t-gradient-shadow-text-0-1"  :label="replaceCssVariables(filterData(state.title, componentPropBindingMap?.['t-gradient-shadow-text-dc1a.df6b559f4']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tGradientShadowTextx0x1ComputedData.cStyle"></t-gradient-shadow-text><t-button id="t-button-e593.134d20fc" class="testComponentCommunication-t-button-0-2"  :label="tButtonx0x2ComputedData.label" :round="tButtonx0x2ComputedData.round" :plain="tButtonx0x2ComputedData.plain" :disabled="tButtonx0x2ComputedData.disabled" :type="tButtonx0x2ComputedData.type" :size="tButtonx0x2ComputedData.size" :native-type="tButtonx0x2ComputedData.native-type" :c-style="tButtonx0x2ComputedData.cStyle" @click="onclick1765957184839"></t-button><t-text-common id="t-text-common-ef7e.0197dbd5c" class="testComponentCommunication-t-text-common-0-3"  :label="replaceCssVariables(filterData(state.num, componentPropBindingMap?.['t-text-common-ef7e.0197dbd5c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x3ComputedData.editable" :c-style="tTextCommonx0x3ComputedData.cStyle"></t-text-common></div>
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
import { TButton, TComponent, TGradientShadowText, TTextCommon } from '@ths/design';

export default {
  components: {
    TButton,
    TComponent,
    TGradientShadowText,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-0901.0e5f60b47":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-gradient-shadow-text-dc1a.df6b559f4":{"attributeName":"tGradientShadowTextx0x1","label":{"filters":[]},"cStyle":{"filters":[]}},"t-button-e593.134d20fc":{"attributeName":"tButtonx0x2","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-ef7e.0197dbd5c":{"attributeName":"tTextCommonx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   num: "",
   title: "我是父组件的传参",
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
            default: {"width":"200px","height":"200px","margin":"0 auto","backgroundColor":"#fff","position":"unset","left":"3px","top":"2px"},
            
            },
 default: { 
 
name:"testCompnontCommunicationSonComponent",
cStyle:{"wrapper":{"default":{"width":"200px","height":"200px","margin":"0 auto","backgroundColor":"#fff","position":"unset","left":"3px","top":"2px"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/testCompnontCommunicationSon",
componentName:"testCompnontCommunicationSonComponent", 
 },
},
tGradientShadowTextx0x1: {
defaultStyle: {
            default: {"width":"208px","height":"22px","position":"unset","left":"24px","top":"229px"},
            
            },
 default: { 
 
label:"我是父组件的传参",
cStyle:{"wrapper":{"default":{"width":"208px","height":"22px","position":"unset","left":"24px","top":"229px"}},"textStyle":{"default":{"-webkit-text-fill-color":"transparent","-webkit-background-clip":"text","backgroundImage":"linear-gradient(0deg, rgba(255,126,0,1) 0%, rgba(255,255,255,1) 100%)","fontWeight":"bold"}},"textShadowStyle":{"default":{"fontWeight":"bold"}}}, 
 },
},
tButtonx0x2: {
defaultStyle: {
            default: {"width":"70px","height":"36px","background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","position":"unset","left":"82px","top":"323px"},
            
            },
 default: { 
 
label:"按钮",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"70px","height":"36px","background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","position":"unset","left":"82px","top":"323px"},"hover":{"background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)"},"active":{"background":"rgb(0,52,181)","border":"auto !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)"},"disabled":{"background":"#699EF5","border":"unset !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)"}},"text":{"default":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 1)","background":"unset","backgroundClip":"unset","display":"block !important","width":"100%","height":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"active":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 0.9)","background":"unset","backgroundClip":"unset"},"hover":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 0.9)","background":"unset","backgroundClip":"unset"},"disabled":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 1)","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTextCommonx0x3: {
defaultStyle: {
            default: {"width":"96px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"164px","top":"332px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"164px","top":"332px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
});
const setProvider = () => {
function updateTitle(newVal) {
  state.title = newVal;
}

provide('title', {
  title: state.title,
  updateTitle,
});

provide('num', computed(() => state.num));
};
const onclick1765957184839 = () => {
// 设置变量值
state.num = '33333';
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-testComponentCommunication', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setProvider();
onMounted(() => {
setPageScale('t-l-c-testComponentCommunication', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tGradientShadowTextx0x1ComputedData = computed(() => _.merge({}, componentState.tGradientShadowTextx0x1.default, componentState.tGradientShadowTextx0x1?.[state.screenSize]));

 const tButtonx0x2ComputedData = computed(() => _.merge({}, componentState.tButtonx0x2.default, componentState.tButtonx0x2?.[state.screenSize]));

 const tTextCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x3.default, componentState.tTextCommonx0x3?.[state.screenSize]));

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
tGradientShadowTextx0x1ComputedData,
tButtonx0x2ComputedData,
tTextCommonx0x3ComputedData,
onclick1765957184839,
};
},
}
</script>

<style scoped>
.t-l-c-testComponentCommunication {
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
width: 300px;
height: 400px;
background-color: rgba(0,0,0,0);
}
.t-l-c-testComponentCommunication .testComponentCommunication-t-component-0-0 {
position: absolute !important;
top: 2px;
left: 3px;
width: 200px;
height: 200px;
pointer-events: auto;
}

.t-l-c-testComponentCommunication .testComponentCommunication-t-gradient-shadow-text-0-1 {
position: absolute !important;
top: 229px;
left: 24px;
width: 208px;
height: 22px;
pointer-events: auto;
}

.t-l-c-testComponentCommunication .testComponentCommunication-t-button-0-2 {
position: absolute !important;
top: 323px;
left: 82px;
width: 70px;
height: 36px;
pointer-events: auto;
}

.t-l-c-testComponentCommunication .testComponentCommunication-t-text-common-0-3 {
position: absolute !important;
top: 332px;
left: 164px;
width: 96px;
height: 20px;
pointer-events: auto;
}
</style>
