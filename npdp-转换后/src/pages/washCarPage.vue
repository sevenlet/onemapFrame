<template>
  <div id="t-l-c-washCarPage" class="t-l-c-washCarPage" ><t-component id="t-component-aa14.3ba955fbb" class="washCarPage-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName"></t-component><t-text-unit id="t-text-unit-a3c4.48c326f87" class="washCarPage-t-text-unit-0-1"  :c-style="tTextUnitx0x1ComputedData.cStyle" :justify="tTextUnitx0x1ComputedData.justify" :align="tTextUnitx0x1ComputedData.align" :content="tTextUnitx0x1ComputedData.content" :unit="tTextUnitx0x1ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x1ComputedData.showOverflowTooltip"></t-text-unit><t-component id="t-component-9ecd.617296bbe" class="washCarPage-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :loading="tComponentx0x3ComputedData.loading" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName" :page-id="tComponentx0x3ComputedData.pageId" :page-code="tComponentx0x3ComputedData.pageCode"></t-component></div>
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
import { TComponent, TTextUnit } from '@ths/design';

export default {
  components: {
    TComponent,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-aa14.3ba955fbb":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-unit-a3c4.48c326f87":{"attributeName":"tTextUnitx0x1","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-table-80e0.6d181a57a":{"attributeName":"tTablex0x2"},"t-component-9ecd.617296bbe":{"attributeName":"tComponentx0x3","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   listData: [],
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
tTextUnitx0x1: {
defaultStyle: {
            default: {"width":"261px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"35px","top":"6px","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"261px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"35px","top":"6px","lineHeight":"20px","animationName":""}},"unit":{"default":{"fontSize":"17px","fontFamily":"方正综艺","lineHeight":"20px"}},"text":{"default":{"lineHeight":"20px","fontSize":"17px"}}},
justify:"flex-start",
align:"flex-end",
content:"冲洗车点位",
unit:"",
showOverflowTooltip:true, 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"width":"410px","height":"800px","margin":"0 auto","left":"0px"},
            
            },
 default: { 
 
name:"washCarListComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"410px","height":"800px","margin":"0 auto","left":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/washCarList",
componentName:"washCarListComponent",
pageId:"c18362a2ebb34866afcc649eda2fa64b",
pageCode:"washCarList", 
 },
},
});
const goToLocation = (row,column) => {
if (["定位"].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "gotoPoint",
    data: {
      "longitude": row.longitude,
      "latitude": row.latitude,
    }
  });
}


};
const oncellClick1765357105793 = (row,column,cell,event) => {
// 执行自定义方法
goToLocation(row,column);
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-washCarPage', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-washCarPage', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextUnitx0x1ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x1.default, componentState.tTextUnitx0x1?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

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
tTextUnitx0x1ComputedData,
tComponentx0x3ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-washCarPage {
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
height: 860px;
width: 410px;
background-color: rgba(0,0,0,0);
}
.t-l-c-washCarPage .washCarPage-t-component-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-washCarPage .washCarPage-t-text-unit-0-1 {
position: absolute !important;
top: 6px;
left: 35px;
width: 261px;
height: 20px;
pointer-events: auto;
}

.t-l-c-washCarPage .washCarPage-t-component-0-3 {
position: absolute !important;
top: 45px;
left: 0px;
width: 410px;
height: 800px;
pointer-events: auto;
}
</style>
