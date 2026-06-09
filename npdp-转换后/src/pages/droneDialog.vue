<template>
  <div id="t-l-c-droneDialog" class="t-l-c-droneDialog" ><t-rect id="t-rect-09e8.3b71afa9a" class="droneDialog-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-1555.727b60852" class="droneDialog-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-rect id="t-rect-afae.576bf09ee" class="droneDialog-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle"></t-rect><t-rect id="t-rect-26fc.42aa488dd" class="droneDialog-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1734493226123"></t-rect><t-text id="t-text-440f.0fb335f25" class="droneDialog-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle"></t-text><t-loop-video id="t-loop-video-42f3.d2a7f50a1" class="droneDialog-t-loop-video-0-5"  :c-style="tLoopVideox0x5ComputedData.cStyle" :video-src="replaceCssVariables(filterData(state.videoUrl, componentPropBindingMap?.['t-loop-video-42f3.d2a7f50a1']['videoSrc'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-loop-video><t-row id="t-row-89f3.d2e08a1f8" class="droneDialog-t-row-0-6"  :c-style="tRowx0x6ComputedData.cStyle" :gutter="tRowx0x6ComputedData.gutter" :justify="tRowx0x6ComputedData.justify" :align="tRowx0x6ComputedData.align"><t-text-common id="t-text-common-ebb5.079f4d7f8" class="droneDialog-t-text-common-0-6-0"  :label="replaceCssVariables(filterData(state.title, componentPropBindingMap?.['t-text-common-ebb5.079f4d7f8']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x6x0ComputedData.editable" :c-style="tTextCommonx0x6x0ComputedData.cStyle"></t-text-common><t-rect id="t-rect-5ddd.c09e8a3a4" class="droneDialog-t-rect-0-6-1"  :tip="tRectx0x6x1ComputedData.tip" :label="tRectx0x6x1ComputedData.label" :active="tRectx0x6x1ComputedData.active" :c-style="tRectx0x6x1ComputedData.cStyle"></t-rect></t-row></div>
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
import { TLoopVideo, TRect, TRow, TText, TTextCommon } from '@ths/design';

export default {
  components: {
    TLoopVideo,
    TRect,
    TRow,
    TText,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-09e8.3b71afa9a":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1555.727b60852":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-afae.576bf09ee":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-26fc.42aa488dd":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-440f.0fb335f25":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-loop-video-42f3.d2a7f50a1":{"attributeName":"tLoopVideox0x5","cStyle":{"filters":[]},"videoSrc":{"filters":[]}},"t-row-89f3.d2e08a1f8":{"attributeName":"tRowx0x6","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-common-ebb5.079f4d7f8":{"attributeName":"tTextCommonx0x6x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5ddd.c09e8a3a4":{"attributeName":"tRectx0x6x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   videoUrl: "http://192.168.0.202:7777/nanping_temp/4758a5264025f4afd352cfe03de22327_raw.mp4",
   title: "-",
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
            default: {"width":"1000px","height":"712px","position":"unset","left":"351px","top":"194px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"712px","position":"unset","left":"351px","top":"194px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1000px","height":"52px","position":"unset","left":"351px","top":"865px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"52px","position":"unset","left":"351px","top":"865px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"351px","top":"194px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"351px","top":"194px","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1303px","top":"205px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1303px","top":"205px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"1221px","top":"871px","cursor":"pointer","animationName":"","backgroundImage":"url(assets/images/2024-12-16/8b5a25d0ae5647d4ac7e737d98fb0b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"22px 50%","-webkit-mask-position":"","paddingLeft":"38px","marginLeft":"20px"},
            
            },
 default: { 
 
label:"调度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"1221px","top":"871px","cursor":"pointer","animationName":"","backgroundImage":"url(assets/images/2024-12-16/8b5a25d0ae5647d4ac7e737d98fb0b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"22px 50%","-webkit-mask-position":"","paddingLeft":"38px","marginLeft":"20px"},"hover":{"backgroundColor":"var(--business-show-bg50)"}}}, 
 },
},
tLoopVideox0x5: {
defaultStyle: {
            default: {"width":"989px","height":"610px","position":"unset","left":"356px","top":"250px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"989px","height":"610px","position":"unset","left":"356px","top":"250px"}}},
videoSrc:"http://192.168.0.202:7777/nanping_temp/4758a5264025f4afd352cfe03de22327_raw.mp4", 
 },
},
tRowx0x6: {
defaultStyle: {
            default: {"width":"938px","height":"47px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"355px","top":"194px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"938px","height":"47px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"355px","top":"194px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextCommonx0x6x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"18px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"375px","top":"208px","background":"unset","backgroundClip":"unset","marginLeft":"15px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"18px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"375px","top":"208px","background":"unset","backgroundClip":"unset","marginLeft":"15px"}}}, 
 },
},
tRectx0x6x1: {
defaultStyle: {
            default: {"width":"60px","height":"24px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"206px","left":"584px","position":"unset","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","marginLeft":"15px"},
            
            },
 default: { 
 
tip:false,
label:"无人机",
active:false,
cStyle:{"wrapper":{"default":{"width":"60px","height":"24px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"206px","left":"584px","position":"unset","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","marginLeft":"15px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const initParams = () => {
state.title = global.businessDialog.dialogParmas?.video_name || '-'
state.videoUrl = global.businessDialog.dialogParmas?.video_url || 'http://192.168.0.202:7777/nanping_temp/4758a5264025f4afd352cfe03de22327_raw.mp4'
};
const onclick1734493226123 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'',
                    data: {
                      businessDialog:{dialogName: ''}
                    },
                  });
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-droneDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-droneDialog', global.appScaleMode, 'normal');
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

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tLoopVideox0x5ComputedData = computed(() => _.merge({}, componentState.tLoopVideox0x5.default, componentState.tLoopVideox0x5?.[state.screenSize]));

 const tRowx0x6ComputedData = computed(() => _.merge({}, componentState.tRowx0x6.default, componentState.tRowx0x6?.[state.screenSize]));

 const tTextCommonx0x6x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x6x0.default, componentState.tTextCommonx0x6x0?.[state.screenSize]));

 const tRectx0x6x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x6x1.default, componentState.tRectx0x6x1?.[state.screenSize]));

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
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tTextx0x4ComputedData,
tLoopVideox0x5ComputedData,
tRowx0x6ComputedData,
tTextCommonx0x6x0ComputedData,
tRectx0x6x1ComputedData,
onclick1734493226123,
};
},
}
</script>

<style scoped>
.t-l-c-droneDialog {
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
.t-l-c-droneDialog .droneDialog-t-rect-0-0 {
position: absolute !important;
top: 194px;
left: 351px;
width: 1000px;
height: 712px;
pointer-events: auto;
}

.t-l-c-droneDialog .droneDialog-t-rect-0-1 {
position: absolute !important;
top: 865px;
left: 351px;
width: 1000px;
height: 52px;
pointer-events: auto;
}

.t-l-c-droneDialog .droneDialog-t-rect-0-2 {
position: absolute !important;
top: 194px;
left: 351px;
width: 1000px;
height: 47px;
pointer-events: auto;
}

.t-l-c-droneDialog .droneDialog-t-rect-0-3 {
position: absolute !important;
top: 205px;
left: 1303px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-droneDialog .droneDialog-t-text-0-4 {
position: absolute !important;
top: 871px;
left: 1221px;
width: 90px;
height: 28px;
pointer-events: auto;
}

.t-l-c-droneDialog .droneDialog-t-loop-video-0-5 {
position: absolute !important;
top: 250px;
left: 356px;
width: 989px;
height: 610px;
pointer-events: auto;
}

.t-l-c-droneDialog .droneDialog-t-row-0-6 {
position: absolute !important;
top: 194px;
left: 355px;
width: 938px;
height: 47px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
}

.t-l-c-droneDialog .droneDialog-t-text-common-0-6-0 {
position: unset;
top: 208px;
left: 375px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-droneDialog .droneDialog-t-rect-0-6-1 {
position: unset;
top: 206px;
left: 584px;
width: 60px;
height: 24px;
pointer-events: auto;
}
</style>
