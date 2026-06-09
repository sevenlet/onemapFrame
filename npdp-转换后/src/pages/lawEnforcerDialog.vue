<template>
  <div id="t-l-c-lawEnforcerDialog" class="t-l-c-lawEnforcerDialog" ><t-text-unit id="t-text-unit-8105.ff0c78435" class="lawEnforcerDialog-t-text-unit-0-0"  :c-style="tTextUnitx0x0ComputedData.cStyle" :content="tTextUnitx0x0ComputedData.content" :unit="replaceCssVariables(filterData(state.baseInfo.zf_code, componentPropBindingMap?.['t-text-unit-8105.ff0c78435']['unit'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :show-overflow-tooltip="tTextUnitx0x0ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-7ac2.a05b63de4" class="lawEnforcerDialog-t-text-unit-0-1"  :c-style="tTextUnitx0x1ComputedData.cStyle" :content="tTextUnitx0x1ComputedData.content" :unit="replaceCssVariables(filterData(state.baseInfo.responsible_person, componentPropBindingMap?.['t-text-unit-7ac2.a05b63de4']['unit'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :show-overflow-tooltip="tTextUnitx0x1ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-d3dc.395008a28" class="lawEnforcerDialog-t-text-unit-0-2"  :c-style="tTextUnitx0x2ComputedData.cStyle" :content="tTextUnitx0x2ComputedData.content" :unit="replaceCssVariables(filterData(state.baseInfo.phone_number, componentPropBindingMap?.['t-text-unit-d3dc.395008a28']['unit'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :show-overflow-tooltip="tTextUnitx0x2ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-8ff2.e62108ac3" class="lawEnforcerDialog-t-text-unit-0-3"  :c-style="tTextUnitx0x3ComputedData.cStyle" :content="tTextUnitx0x3ComputedData.content" :unit="replaceCssVariables(filterData(state.baseInfo.address, componentPropBindingMap?.['t-text-unit-8ff2.e62108ac3']['unit'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :show-overflow-tooltip="tTextUnitx0x3ComputedData.showOverflowTooltip"></t-text-unit><t-row id="t-row-62f0.f8de3e828" class="lawEnforcerDialog-t-row-0-4"  :c-style="tRowx0x4ComputedData.cStyle" :gutter="tRowx0x4ComputedData.gutter" :justify="tRowx0x4ComputedData.justify" :align="tRowx0x4ComputedData.align"><t-col id="t-col-2275.ef744c5f" class="lawEnforcerDialog-t-col-0-4-0"  :span="tColx0x4x0ComputedData.span" :offset="tColx0x4x0ComputedData.offset" :push="tColx0x4x0ComputedData.push" :pull="tColx0x4x0ComputedData.pull" :c-style="tColx0x4x0ComputedData.cStyle"><t-rect id="t-rect-1795.1cae2056a" class="lawEnforcerDialog-t-rect-0-4-0-0"  :tip="tRectx0x4x0x0ComputedData.tip" :label="tRectx0x4x0x0ComputedData.label" :active="tRectx0x4x0x0ComputedData.active" :c-style="tRectx0x4x0x0ComputedData.cStyle" @click="onclick1766887497591"></t-rect></t-col></t-row></div>
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
import { TCol, TRect, TRow, TTextUnit } from '@ths/design';

export default {
  components: {
    TCol,
    TRect,
    TRow,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-text-unit-8105.ff0c78435":{"attributeName":"tTextUnitx0x0","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-7ac2.a05b63de4":{"attributeName":"tTextUnitx0x1","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-d3dc.395008a28":{"attributeName":"tTextUnitx0x2","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-8ff2.e62108ac3":{"attributeName":"tTextUnitx0x3","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-row-62f0.f8de3e828":{"attributeName":"tRowx0x4","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-2275.ef744c5f":{"attributeName":"tColx0x4x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1795.1cae2056a":{"attributeName":"tRectx0x4x0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   baseInfo: {"zf_code":"-","responsible_person":"-","phone_number":"-","address":"-"},
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
            default: {"width":"386px","height":"20px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"19px","left":"32px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"386px","height":"20px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"19px","left":"32px","position":"unset"}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"16px","textAlign":"center","lineHeight":"16px","letterSpacing":"0px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"16px","lineHeight":"16px","letterSpacing":"0px","textAlign":"center","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}}},
content:"人员编号：",
unit:"-",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x1: {
defaultStyle: {
            default: {"width":"256px","height":"20px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"64px","left":"32px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"256px","height":"20px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"64px","left":"32px","position":"unset","animationName":""}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"15px","textAlign":"center","lineHeight":"16px","letterSpacing":"0px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"16px","lineHeight":"16px","letterSpacing":"0px","textAlign":"center","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}}},
content:"负责人：",
unit:"-",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x2: {
defaultStyle: {
            default: {"width":"212px","height":"20px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"64px","left":"289px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"212px","height":"20px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"64px","left":"289px","position":"unset","animationName":""}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"16px","textAlign":"center","lineHeight":"16px","letterSpacing":"0px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"16px","lineHeight":"16px","letterSpacing":"0px","textAlign":"center","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}}},
content:"联系方式：",
unit:"-",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x3: {
defaultStyle: {
            default: {"width":"494px","height":"45px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"101px","left":"30px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"494px","height":"45px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"101px","left":"30px","position":"unset","animationName":""}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"16px","textAlign":"right","lineHeight":"20px","letterSpacing":"0px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"normal","textOverflow":"wrap","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"16px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}}},
content:"地址：",
unit:"-",
showOverflowTooltip:true, 
 },
},
tRowx0x4: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomRightRadius":"10px","borderBottomLeftRadius":"10px","backgroundColor":"var(--business-show-bg30)","fillType":"color","gap":"20px","top":"154px","paddingRight":"20px","paddingTop":"0","paddingBottom":"0","bottom":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomRightRadius":"10px","borderBottomLeftRadius":"10px","backgroundColor":"var(--business-show-bg30)","fillType":"color","gap":"20px","top":"154px","paddingRight":"20px","paddingTop":"0","paddingBottom":"0","bottom":"0px","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x4x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"right","alignItems":"center","gap":"20px","animationName":"","left":"10px","top":"10px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"right","alignItems":"center","gap":"20px","animationName":"","left":"10px","top":"10px"}}}, 
 },
},
tRectx0x4x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","borderLeft":"1px Solid rgba(0,0,0,1)","borderTop":"1px Solid rgba(0,0,0,1)","borderRight":"1px Solid rgba(0,0,0,1)","borderBottom":"1px Solid rgba(0,0,0,1)","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px","backgroundImage":"url(assets/images/2025-12-22/2fbbb7f0b48641748ab8e3ad119b1f6c.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"10% 50%","-webkit-mask-position":"","box-shadow":"rgba(35, 106, 248, 1) 0px 0px 12px 0px inset,rgba(35, 78, 248, 0.42) 0px 0px 8px 0px inset","fontSize":"var(--p-font-24)","color":"var(--t-white)","animationName":"","backgroundColor":"var(--business-select-item-bg)","display":"block","textAlign":"center","paddingLeft":"30px","position":"unset","left":"497px","top":"280px","borderDirection":"all","border":"unset !important","boxShadow":"unset","boxShadowOld":"0px 0px 5px 0px rgba(0,0,0,0.5)","fillType":"color","paddingRight":"15px","cursor":"pointer","paddingBottom":"5px","paddingTop":"5px"},
            
            },
 default: { 
 
tip:false,
label:"远程连线",
active:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","borderLeft":"1px Solid rgba(0,0,0,1)","borderTop":"1px Solid rgba(0,0,0,1)","borderRight":"1px Solid rgba(0,0,0,1)","borderBottom":"1px Solid rgba(0,0,0,1)","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px","backgroundImage":"url(assets/images/2025-12-22/2fbbb7f0b48641748ab8e3ad119b1f6c.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"10% 50%","-webkit-mask-position":"","box-shadow":"rgba(35, 106, 248, 1) 0px 0px 12px 0px inset,rgba(35, 78, 248, 0.42) 0px 0px 8px 0px inset","fontSize":"var(--p-font-24)","color":"var(--t-white)","animationName":"","backgroundColor":"var(--business-select-item-bg)","display":"block","textAlign":"center","paddingLeft":"30px","position":"unset","left":"497px","top":"280px","borderDirection":"all","border":"unset !important","boxShadow":"unset","boxShadowOld":"0px 0px 5px 0px rgba(0,0,0,0.5)","fillType":"color","paddingRight":"15px","cursor":"pointer","paddingBottom":"5px","paddingTop":"5px"}},"text":{"default":{"color":"var(--business-strong)","background":"unset","backgroundClip":"unset","filter":"unset","filterOld":"drop-shadow(0px 0px 5px rgba(0,0,0,0.5))"}}}, 
 },
},
});
const initParams = () => {
const {dialogParmas} = global.businessDialog
state.baseInfo.zf_jly  =  dialogParmas?.zf_jly || dialogParmas?.ONLY || ''
apiRegistry.getBaseInfo.request();
};
const onclick1766887497591 = () => {
// 执行自定义方法
openWX();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"ZF_JLY":"state.baseInfo.zf_jly","interfaceId":"213937f5ac1ccd45dbfa202ee2c1a9bc"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"ZF_JLY":state.baseInfo.zf_jly,"interfaceId":"213937f5ac1ccd45dbfa202ee2c1a9bc"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"ZF_JLY":state.baseInfo.zf_jly,"interfaceId":"213937f5ac1ccd45dbfa202ee2c1a9bc"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.baseInfo = data[0]
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
                            setPageScale('t-l-c-lawEnforcerDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-lawEnforcerDialog', global.appScaleMode, 'normal');
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

 const tRowx0x4ComputedData = computed(() => _.merge({}, componentState.tRowx0x4.default, componentState.tRowx0x4?.[state.screenSize]));

 const tColx0x4x0ComputedData = computed(() => _.merge({}, componentState.tColx0x4x0.default, componentState.tColx0x4x0?.[state.screenSize]));

 const tRectx0x4x0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x4x0x0.default, componentState.tRectx0x4x0x0?.[state.screenSize]));

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
tTextUnitx0x0ComputedData,
tTextUnitx0x1ComputedData,
tTextUnitx0x2ComputedData,
tTextUnitx0x3ComputedData,
tRowx0x4ComputedData,
tColx0x4x0ComputedData,
tRectx0x4x0x0ComputedData,
onclick1766887497591,
};
},
}
</script>

<style scoped>
.t-l-c-lawEnforcerDialog {
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
height: 210px;
width: auto;
background-color: rgba(0,0,0,0);
}
.t-l-c-lawEnforcerDialog .lawEnforcerDialog-t-text-unit-0-0 {
position: absolute !important;
top: 19px;
left: 32px;
width: 386px;
height: 20px;
pointer-events: auto;
}

.t-l-c-lawEnforcerDialog .lawEnforcerDialog-t-text-unit-0-1 {
position: absolute !important;
top: 64px;
left: 32px;
width: 256px;
height: 20px;
pointer-events: auto;
}

.t-l-c-lawEnforcerDialog .lawEnforcerDialog-t-text-unit-0-2 {
position: absolute !important;
top: 64px;
left: 289px;
width: 212px;
height: 20px;
pointer-events: auto;
}

.t-l-c-lawEnforcerDialog .lawEnforcerDialog-t-text-unit-0-3 {
position: absolute !important;
top: 101px;
left: 30px;
width: 494px;
height: 45px;
pointer-events: auto;
}

.t-l-c-lawEnforcerDialog .lawEnforcerDialog-t-row-0-4 {
position: absolute !important;
top: 154px;
left: 0px;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
border-top-left-radius: 0px;
border-top-right-radius: 0px;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
background-color: var(--business-show-bg30);
fill-type: color;
gap: 20px;
padding-right: 20px;
padding-top: 0;
padding-bottom: 0;
bottom: 0px;
animation-name: ;
}

.t-l-c-lawEnforcerDialog .lawEnforcerDialog-t-col-0-4-0 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
gap: 20px;
animation-name: ;
}

.t-l-c-lawEnforcerDialog .lawEnforcerDialog-t-rect-0-4-0-0 {
position: unset;
top: 280px;
left: 497px;
width: auto;
height: auto;
pointer-events: auto;
}
</style>
