<template>
  <div id="t-l-c-drinkWaterMapDetailContent" class="t-l-c-drinkWaterMapDetailContent" ><t-component id="t-component-d7a5.0f0c30eaf" class="drinkWaterMapDetailContent-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName"></t-component><t-text id="t-text-dde9.205bbc868" class="drinkWaterMapDetailContent-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-list-card id="t-list-card-9491.e64bae56e" class="drinkWaterMapDetailContent-t-list-card-0-2"  :data="replaceCssVariables(state.baseInfoData, global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x2ComputedData.spacingX" :col="tListCardx0x2ComputedData.col" :direction="tListCardx0x2ComputedData.direction" :exchange-order="tListCardx0x2ComputedData.exchangeOrder" :unit-break="tListCardx0x2ComputedData.unitBreak" :key-field="tListCardx0x2ComputedData.keyField" :active-key-field="tListCardx0x2ComputedData.activeKeyField" :active="tListCardx0x2ComputedData.active" :c-style="tListCardx0x2ComputedData.cStyle"></t-list-card></div>
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
import { TComponent, TListCard, TText } from '@ths/design';

export default {
  components: {
    TComponent,
    TListCard,
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
   fxyList: [],
   dmList: [],
   id: "",
   bhqfwData: [{"title":"一级保护区","num":0,"unit":"km²","color":"var(--t-white)"},{"title":"二级保护区","num":0,"unit":"km²","color":"var(--t-white)"},{"title":"准保护区","num":0,"unit":"km²","color":"var(--t-white)"}],
   bhqglData: [{"title":"标志设立","num":"-"},{"title":"水源地问题","num":"-"}],
   monitorTime: "",
   baseInfoData: [{"title":"保护区名称","num":"-"},{"title":"常住人口","num":"-"},{"title":"服务人口","num":"-"},{"title":"建成区面积","num":"-"},{"title":"设计取水量","num":"-"},{"title":"宣传牌","num":"-"},{"title":"隔离围网建设(m)","num":"-"},{"title":"隔离围网建设已完成长度(m)","num":"-"},{"title":"隔离围网建设未完成长度(m)","num":"-"}],
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
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"1px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"1px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"6px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
            
            },
 default: { 
 
label:"基础信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"6px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}}, 
 },
},
tListCardx0x2: {
defaultStyle: {
            default: {"width":"410px","height":"65px","position":"unset","left":"20px","top":"44px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"保护区名称","num":"-"},{"title":"常住人口","num":"-"},{"title":"服务人口","num":"-"},{"title":"建成区面积","num":"-"},{"title":"设计取水量","num":"-"},{"title":"宣传牌","num":"-"},{"title":"隔离围网建设(m)","num":"-"},{"title":"隔离围网建设已完成长度(m)","num":"-"},{"title":"隔离围网建设未完成长度(m)","num":"-"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"65px","position":"unset","left":"20px","top":"44px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
});
const getProvider = () => {
const rootData = inject('drinkWaterState');

state.drinkWaterState = rootData;
};
const initPage = () => {
// 填充 水源地保护区id
state.id = global.businessDialog.dialogParmas.rowInfo.DRINK_ID || "";
// 获取基础信息
getBaseInfo();
};
const onSocket = () => {
rootData.rootOn('rootSocket:change', (socket) => {
  // 在地图上点击了饮用水，就要展示饮用水详情面板
  if (socket.type === "selectDrinkWater") {
    const { data } = socket;
    console.log('饮用水内容-drinkWaterMapDetail-接收到了 selectDrinkWater socket 消息', global.businessDialog, data);

    // 填充 水源地保护区id
    state.id = data?.DRINK_ID || '';
    // 获取基础信息
    getBaseInfo();
  };
});
};
// 接口函数
const getBaseInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"ENV_WATER_RESOURCE_ID":state.id,"interfaceId":"1015696c4a5362472e2f92501f951884"},}).then((res) => {
     // 成功的操作
     console.log('水源地保护区详情: ', res);
// 基础信息
state.baseInfoData.forEach(item => item.num = "-");

if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  const {
    PERMANENT_POPULATION,
    SERVICE_POPULATION,
    BUILD_AREA,
    WATER_INTAKE,
    BILLBOARD,
    FENCE,
    DONE_FENCE,
    TODO_FENCE,
    WATER_RESOURCE_NAME,
} = res.data.data;
  // 基础信息
  state.baseInfoData[0].num = WATER_RESOURCE_NAME || "-"; // 保护区名称
  state.baseInfoData[1].num = PERMANENT_POPULATION || "-"; // 常住人口
  state.baseInfoData[2].num = SERVICE_POPULATION || "-"; // 服务人口
  state.baseInfoData[3].num = BUILD_AREA || "-"; // 建成区面积
  state.baseInfoData[4].num = WATER_INTAKE || "-"; // 设计取水量
  state.baseInfoData[5].num = BILLBOARD || "-"; // 宣传牌
  state.baseInfoData[6].num = FENCE || "-"; // 隔离围网建设
  state.baseInfoData[7].num = DONE_FENCE || "-"; // 隔离围网建设已完成长度
  state.baseInfoData[8].num = TODO_FENCE || "-"; // 隔离围网建设未完成长度
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 基础信息
state.baseInfoData.forEach(item => item.num = "-");
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-drinkWaterMapDetailContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
initPage();
// 执行自定义方法
onSocket();
onMounted(() => {
setPageScale('t-l-c-drinkWaterMapDetailContent', global.appScaleMode, 'normal');
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

 const tListCardx0x2ComputedData = computed(() => _.merge({}, componentState.tListCardx0x2.default, componentState.tListCardx0x2?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tComponentx0x0ComputedData,
tTextx0x1ComputedData,
tListCardx0x2ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-drinkWaterMapDetailContent {
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
width: 450px;
height: 374px;
background-color: rgba(0,0,0,0);
}
.t-l-c-drinkWaterMapDetailContent .drinkWaterMapDetailContent-t-component-0-0 {
position: absolute !important;
top: 1px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-drinkWaterMapDetailContent .drinkWaterMapDetailContent-t-text-0-1 {
position: absolute !important;
top: 6px;
left: 60px;
width: 130px;
height: 19px;
pointer-events: auto;
}

.t-l-c-drinkWaterMapDetailContent .drinkWaterMapDetailContent-t-list-card-0-2 {
position: absolute !important;
top: 44px;
left: 20px;
width: 410px;
height: 65px;
pointer-events: auto;
}
</style>
