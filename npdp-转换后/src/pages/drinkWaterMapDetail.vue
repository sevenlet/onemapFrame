<template>
  <div id="t-l-c-drinkWaterMapDetail" class="t-l-c-drinkWaterMapDetail" ><t-row id="t-row-7bf8.3ee75802" class="drinkWaterMapDetail-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-text id="t-text-17af.da59848b8" class="drinkWaterMapDetail-t-text-0-0-0"  :label="tTextx0x0x0ComputedData.label" :editable="tTextx0x0x0ComputedData.editable" :c-style="tTextx0x0x0ComputedData.cStyle" @click="onclick1734571942724_0_0"></t-text><t-text id="t-text-fa2d.892cf4b77" class="drinkWaterMapDetail-t-text-0-0-1"  :label="replaceCssVariables(state.title, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x1ComputedData.editable" :c-style="tTextx0x0x1ComputedData.cStyle" :show-title="tTextx0x0x1ComputedData.showTitle"></t-text></t-row><t-rect id="t-rect-b8a7.3fc5f52df" class="drinkWaterMapDetail-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-component id="t-component-2081.271fecb9c" class="drinkWaterMapDetail-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode"></t-component></div>
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
import { TComponent, TRect, TRow, TText } from '@ths/design';

export default {
  components: {
    TComponent,
    TRect,
    TRow,
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
   standard: [{"state":"-","stateColor":"#fff","stateBgColor":""}],
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"410px","height":"47px","position":"unset","left":"20px","top":"9px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"410px","height":"47px","position":"unset","left":"20px","top":"9px","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x0x0: {
defaultStyle: {
            default: {"width":"43px","height":"20px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"-195px","left":"125px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"双击编辑文本",
editable:false,
cStyle:{"wrapper":{"default":{"width":"43px","height":"20px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"-195px","left":"125px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":"","lineHeight":"20px"},"hover":{"backgroundColor":"var(--business-theme)"}}}, 
 },
},
tTextx0x0x1: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"582.8092289677372px","top":"-7.873399522569571px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"10px","fontWeight":"600","animationName":"","textAlign":"left","max-width":"200px","marginRight":"6px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","borderLeft":"1px solid rgba(255,255,255,1)","marginLeft":"10px","lineHeight":"20px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"582.8092289677372px","top":"-7.873399522569571px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"10px","fontWeight":"600","animationName":"","textAlign":"left","max-width":"200px","marginRight":"6px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","borderLeft":"1px solid rgba(255,255,255,1)","marginLeft":"10px","lineHeight":"20px"}}},
showTitle:true, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"55px","left":"0px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"55px","left":"0px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"450px","height":"812px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","top":"68px","position":"unset","left":"0px","overflow":"auto"},
            
            },
 default: { 
 
name:"drinkWaterMapDetailContentComponent",
cStyle:{"wrapper":{"default":{"width":"450px","height":"812px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","top":"68px","position":"unset","left":"0px","overflow":"auto"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/[object Object]",
componentName:"drinkWaterMapDetailContentComponent",
pageId:"63c227ae878c4082ba84206028d372d9",
pageCode:"drinkWaterMapDetailContent", 
 },
},
});
const getProvider = () => {
const rootData = inject('drinkWaterState');

state.drinkWaterState = rootData;

if (!state.drinkWaterState) {
  state.drinkWaterState = {
    componentName: '',
  };
}
};
const handleClickBack = () => {
// 返回 
state.drinkWaterState.componentName = 'waterDrinkEntryComponent';
// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "detailsOrGeneral",
      "shareCode": "detailsOrGeneral",
      "defaultValue": "general",
      "runtimeValue": "general"
    },
    {
      "code": "hiddenDetailIframe",
      "name": "",
      "defaultValue": "true",
      "shareCode": "hiddenDetailIframe",
      "runtimeValue": "true"
    }
  ]
});
// 关闭饮用水 地图详情面板
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "closeDrinkWaterMapDetail", // 消息名称
});

};
const initPage = () => {
state.title = global.businessDialog.dialogParmas.rowInfo.DRINK_NAME || "-";
};
const onSocket = () => {
rootData.rootOn('rootSocket:change', (socket) => {
  // 在地图上点击了饮用水，就要展示饮用水详情面板
  if (socket.type === "selectDrinkWater") {
    const { data } = socket;
    global.businessDialog.dialogParmas = {
      rowInfo: {
        DRINK_NAME: data?.DRINK_NAME || '地图点击的饮用水河流名称',
        DRINK_ID: data?.DRINK_ID || '',
        monitortime: data?.monitortime || '',
        ISSTANDARDS: '1',
      },
    };
    console.log('饮用水入口-drinkWaterMapDetail-接收到了 selectDrinkWater socket 消息', global.businessDialog, data);
    state.title = global.businessDialog.dialogParmas.rowInfo.DRINK_NAME || "-";
    // if (data.selected === "WSYSTEM_CODE" && data.WSYSTEM_CODE) {
      // changeRightContainer(data, "drinkWater", true)
    // }
  };
});
};
const onclick1734571942724_0_0 = () => {
// 执行自定义方法
handleClickBack();
};
// 接口函数
const getBaseInfoCopy = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.monitorTime,"DRINK_ID":state.id,"interfaceId":"de27d2dff4b2026427442b1c5da8871b"},}).then((res) => {
     // 成功的操作
     // 基础信息
state.baseInfoData.forEach(item => item.num = "-");
// 保护区范围
state.bhqfwData.forEach(item => item.num = 0);
// 保护区管理
state.bhqglData[0].num = "-";
// 颜色列表（两套都写上防止格式不对）
const colors = [
  {
    code: "I类",
    value: "#CCFFFF"
  },
  {
    code: "Ⅰ类",
    value: "#CCFFFF"
  },
  {
    code: "II类",
    value: "#00CCFF"
  },
  {
    code: "Ⅱ类",
    value: "#00CCFF"
  },
  {
    code: "III类",
    value: "#00FF00"
  },
  {
    code: "Ⅲ类",
    value: "#00FF00"
  },
  {
    code: "IV类",
    value: "#FFFF00"
  },
  {
    code: "Ⅳ类",
    value: "#FFFF00"
  },
  {
    code: "V类",
    value: "#FF9B00"
  },
  {
    code: "Ⅴ类",
    value: "#FF9B00"
  },
  {
    code: "劣V类",
    value: "#FF0000"
  },
  {
    code: "劣Ⅴ类",
    value: "#FF0000"
  },
  {
    code: "",
    value: "#FFF"
  }
]
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  const {
    REGION_NAME,
    WSYSTEM_NAME,
    MANAGER_TYPE_NAME,
    WSYSTEMTYPENAME,
    STATUS_NAME,
    INAKE_COUNT,
    SERVICE_PEOPLE,
    WATERQUALITYLEVELTARGETNAME,
    WATERQUALITYLEVELNAME,
    FIRST_RESERVE,
    TWO_RESERVE,
    QUASI_RESERVE,
    BOUNDARY_SET_TEXT
  } = res.data.data;
  // 基础信息
  state.baseInfoData[0].num = REGION_NAME || "-"; // 所属行政区
  state.baseInfoData[1].num = WSYSTEM_NAME || "-"; // 所属流域
  state.baseInfoData[2].num = MANAGER_TYPE_NAME || "-"; // 水源地级别
  state.baseInfoData[3].num = WSYSTEMTYPENAME || "-"; // 水体类型
  state.baseInfoData[4].num = STATUS_NAME || "-"; // 使用状态
  state.baseInfoData[5].num = INAKE_COUNT || "-"; // 取水口数量
  state.baseInfoData[6].num = SERVICE_PEOPLE || "-"; // 供水人口(万人)
  state.baseInfoData[7].num = WATERQUALITYLEVELTARGETNAME || "-"; // 水质目标
  state.baseInfoData[7].color = colors.find(i => i.code === WATERQUALITYLEVELTARGETNAME).value // 水质目标颜色
  state.baseInfoData[8].num = WATERQUALITYLEVELNAME || "-"; // 水质现状
  // 保护区范围
  state.bhqfwData[0].num = FIRST_RESERVE || 0; // 一级保护区
  state.bhqfwData[1].num = TWO_RESERVE || 0; // 二级保护区
  state.bhqfwData[2].num = QUASI_RESERVE || 0; // 准保护区
  // 保护区管理
  state.bhqglData[0].num = BOUNDARY_SET_TEXT || "-"; // 标志设立
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 基础信息
state.baseInfoData.forEach(item => item.num = "-");
// 保护区范围
state.bhqfwData.forEach(item => item.num = 0);
// 保护区管理
state.bhqglData[0].num = "-";
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [state.monitorTime], () => {
getBaseInfoCopy();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-drinkWaterMapDetail', global.appScaleMode, 'normal');
                           
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
setPageScale('t-l-c-drinkWaterMapDetail', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tTextx0x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x0.default, componentState.tTextx0x0x0?.[state.screenSize]));

 const tTextx0x0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x1.default, componentState.tTextx0x0x1?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRowx0x0ComputedData,
tTextx0x0x0ComputedData,
tTextx0x0x1ComputedData,
tRectx0x1ComputedData,
tComponentx0x2ComputedData,
onclick1734571942724_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-drinkWaterMapDetail {
position: relative;
overflow: hidden;
--theme-color: var(--t-brand8);
--theme-color-opacity-10: rgba(var(--t-brand8), .1);
--theme-color-opacity-15: rgba(var(--t-brand8), .15);
--theme-color-opacity-40: rgba(var(--t-brand8), .4);
--theme-color-opacity-60: rgba(var(--t-brand8), .6);
--theme-color-opacity-80: rgba(var(--t-brand8), .8);
--theme-color-opacity-90: rgba(var(--t-brand8), .9);
--scrollbar-track-color: transparent;
--scrollbar-thumb-color: transparent;
pointer-events: auto;
position: Static;
z-index: 1;
filter: ;
width: 450px;
height: 900px;
background-color: rgba(0,0,0,0);
}
.t-l-c-drinkWaterMapDetail .drinkWaterMapDetail-t-row-0-0 {
position: absolute !important;
top: 9px;
left: 20px;
width: 410px;
height: 47px;
pointer-events: auto;
animation-name: ;
}

.t-l-c-drinkWaterMapDetail .drinkWaterMapDetail-t-text-0-0-0 {
position: unset;
top: -195px;
left: 125px;
width: 43px;
height: 20px;
pointer-events: auto;
}

.t-l-c-drinkWaterMapDetail .drinkWaterMapDetail-t-text-0-0-1 {
position: unset;
top: -7.873399522569571px;
left: 582.8092289677372px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-drinkWaterMapDetail .drinkWaterMapDetail-t-rect-0-1 {
position: absolute !important;
top: 55px;
left: 0px;
width: 450px;
height: 1px;
pointer-events: auto;
}

.t-l-c-drinkWaterMapDetail .drinkWaterMapDetail-t-component-0-2 {
position: absolute !important;
top: 68px;
left: 0px;
width: 450px;
height: 812px;
pointer-events: auto;
}
</style>
