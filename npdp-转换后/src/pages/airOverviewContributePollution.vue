<template>
  <div id="t-l-c-airOverviewContributePollution" class="t-l-c-airOverviewContributePollution" ><t-chart-pie-border id="t-chart-pie-border-d147.11775e4f6" class="airOverviewContributePollution-t-chart-pie-border-0-0"  :empty-img="tChartPieBorderx0x0ComputedData.emptyImg" :data="state.dataInfo" :alias="tChartPieBorderx0x0ComputedData.alias" :unit="tChartPieBorderx0x0ComputedData.unit" :radius="tChartPieBorderx0x0ComputedData.radius" :separation="tChartPieBorderx0x0ComputedData.separation" :show-inner="tChartPieBorderx0x0ComputedData.showInner" :inner-style="tChartPieBorderx0x0ComputedData.innerStyle" :show-list="tChartPieBorderx0x0ComputedData.showList" :list-style="tChartPieBorderx0x0ComputedData.listStyle" :options="tChartPieBorderx0x0ComputedData.options" :c-style="tChartPieBorderx0x0ComputedData.cStyle" :is-show-center="tChartPieBorderx0x0ComputedData.isShowCenter"></t-chart-pie-border><t-text id="t-text-10bf.0c7e156ea" class="airOverviewContributePollution-t-text-0-1"  :label="state.descData1" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-text id="t-text-7d66.47a07cc31" class="airOverviewContributePollution-t-text-0-2"  :label="state.descData2" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-rect id="t-rect-e751.05d1fd241" class="airOverviewContributePollution-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle"></t-rect><t-rect v-if="state.dataInfo.length !== 0" id="t-rect-30e8.aa4dcfae5" class="airOverviewContributePollution-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle"></t-rect></div>
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
import { TChartPieBorder, TRect, TText } from '@ths/design';

export default {
  components: {
    TChartPieBorder,
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
   descData2: "",
   descData1: "",
   dataInfo: [],
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
tChartPieBorderx0x0: {
defaultStyle: {
            default: {"width":"428px","height":"134px","top":"17px","left":"-18px","position":"unset"},
            
            },
 default: { 
 
emptyImg:"",
data:[],
alias:{"value":"value","name":"name"},
unit:"",
radius:["88%","100%"],
separation:{"width":2},
showInner:false,
innerStyle:{"align":"top","color":"#DDD","numberFontsize":"0PX","numberFontWeight":"bold","fontSize":0},
showList:true,
listStyle:{"align":"right","value":true,"fontSize":14,"iconSize":14,"col":2},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"legend":{"show":false},"color":["#00FF22","#FFD878","#0999FF","#00FFFF","#ADA6FF","#FF8578","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"]})),
cStyle:{"wrapper":{"default":{"width":"428px","height":"134px","top":"17px","left":"-18px","position":"unset"}},"legendValue":{"default":{"color":"#fff"}},"legendName":{"default":{"color":"#B7E3FF"}},"legendItem":{"default":{"width":"105px","minWidth":"100px","margin":[0,10,0,0],"height":40}},"emptyText":{"default":{"color":"var(--business-no-data-color)","fontSize":"14px"}}},
isShowCenter:false, 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"auto","height":"19px","color":"var(--t-white)","position":"unset","left":"39px","top":"65px","fontSize":"14px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"19px","color":"var(--t-white)","position":"unset","left":"39px","top":"65px","fontSize":"14px"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"auto","height":"19px","color":"var(--t-white)","position":"unset","left":"38px","top":"87px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"19px","color":"var(--t-white)","position":"unset","left":"38px","top":"87px","fontSize":"14px","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"411px","height":"185px","backgroundColor":"var(--t-bg-15)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"411px","height":"185px","backgroundColor":"var(--t-bg-15)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"0px","top":"0px"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"170px","height":"170px","backgroundImage":"var(--business-pie-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"0px","top":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"170px","height":"170px","backgroundImage":"var(--business-pie-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"0px","top":"0px"}}}, 
 },
},
});
const getProvider = () => {
const rootData = inject('airOverviewContentState');
watch(() => rootData, () => {
  state.airOverviewContentState = rootData;
  if (state.airOverviewContentState.timeType && state.airOverviewContentState.timeValue) {
    getData();
    getDesc();
  }

}, {
  deep: true,
  immediate: true,
})
};
// 接口函数
const getDesc = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.airOverviewContentState.timeType,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.airOverviewContentState.timeValue,"interfaceId":"25ff629d4551a041375cb94bb1400000"},}).then((res) => {
     // 成功的操作
     console.log('描述信息', res);
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let data = res.data.data.AQCI_YOY_DESC;
  if(data) {
    state.descData1 = data.split("\\n")[0];
    state.descData2 = data.split("\\n")[1];
  }
} else {
  state.descData1 = '';
  state.descData2 = '';
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
getDesc();
},{
deep: true, // 深度监听
});
// 接口函数
const getData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"TIME_TYPE":state.airOverviewContentState.timeType,"MONITORTIME":state.airOverviewContentState.timeValue,"interfaceId":"cf14ed5d9b0f75e432f1ef056c7dc18d"},}).then((res) => {
     // 成功的操作
     if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.dataInfo = [];
  let a = res.data.data[0];
  if (a) {
    Object.keys(a).forEach(key => {
      let name = key.replace('_AQCI', '');
      if (key.includes('O3_8')) {
        name = `${convertCharacter('O3')}-8h`
      } else {
        name = convertCharacter(name);
      }
      state.dataInfo.push(
        {
          value: a[key],
          name,
        }
      )
    })
  }
  state.dataInfo.sort((a, b) => Number(a.value) - Number(b.value));
} else {
  state.dataInfo = [];
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
getData();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewContributePollution', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
onMounted(() => {
setPageScale('t-l-c-airOverviewContributePollution', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tChartPieBorderx0x0ComputedData = computed(() => _.merge({}, componentState.tChartPieBorderx0x0.default, componentState.tChartPieBorderx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

return {
global,
state,
componentState,
tChartPieBorderx0x0ComputedData,
tTextx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewContributePollution {
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
height: 186px;
width: 410px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airOverviewContributePollution .airOverviewContributePollution-t-chart-pie-border-0-0 {
position: absolute !important;
top: 17px;
left: -18px;
width: 428px;
height: 134px;
pointer-events: auto;
}

.t-l-c-airOverviewContributePollution .airOverviewContributePollution-t-text-0-1 {
position: absolute !important;
top: 65px;
left: 39px;
width: auto;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewContributePollution .airOverviewContributePollution-t-text-0-2 {
position: absolute !important;
top: 87px;
left: 38px;
width: auto;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewContributePollution .airOverviewContributePollution-t-rect-0-3 {
position: absolute !important;
top: 0px;
left: 0px;
width: 411px;
height: 185px;
pointer-events: auto;
}

.t-l-c-airOverviewContributePollution .airOverviewContributePollution-t-rect-0-4 {
position: absolute !important;
top: 0px;
left: 0px;
width: 170px;
height: 170px;
pointer-events: auto;
}
</style>
