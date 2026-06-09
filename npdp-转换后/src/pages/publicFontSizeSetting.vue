<template>
  <div id="t-l-c-publicFontSizeSetting" class="t-l-c-publicFontSizeSetting" ><t-rect id="t-rect-b395.d6f6411da" class="publicFontSizeSetting-t-rect-0-0"  :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle" :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" @click="onclick1753094643489"></t-rect><t-component id="t-component-a812.bad50e638" class="publicFontSizeSetting-t-component-0-1"  :src="tComponentx0x1ComputedData.src" :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :component-name="tComponentx0x1ComputedData.componentName" :loading="tComponentx0x1ComputedData.loading" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode"></t-component></div>
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
import { TComponent, TRect } from '@ths/design';

export default {
  components: {
    TComponent,
    TRect,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-b395.d6f6411da":{"attributeName":"tRectx0x0","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-component-a812.bad50e638":{"attributeName":"tComponentx0x1","src":{"filters":[]},"name":{"filters":[]},"cStyle":{"filters":[]},"componentName":{"filters":[]},"loading":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   currentFontSize: "",
   fontConfigJson: "",
   maxPageFont: {"fontSizeValue":20,"fontSizeType":"defaultSize"},
   minPageFont: {"fontSizeValue":14,"fontSizeType":"defaultSize"},
   fontSizeSettingVisible: false,
   showMaxPage: false,
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
            default: {"cursor":"pointer","backgroundColor":"var(--business-show-bg30)","color":"var(--business-white)","right":"54px !important","borderTop":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderLeft":"1px solid var(--business-theme)","top":"0px","borderBottomLeftRadius":"4px","left":"172px","borderRight":"1px solid var(--business-theme)","width":"24px","borderBottomRightRadius":"4px","borderTopRightRadius":"4px","fontSize":"12px","borderBottom":"1px solid var(--business-theme)","fontWeight":"700","height":"24px","position":"unset"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"default":{"cursor":"pointer","backgroundColor":"var(--business-show-bg30)","color":"var(--business-white)","right":"54px !important","borderTop":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderLeft":"1px solid var(--business-theme)","top":"0px","borderBottomLeftRadius":"4px","left":"172px","borderRight":"1px solid var(--business-theme)","width":"24px","borderBottomRightRadius":"4px","borderTopRightRadius":"4px","fontSize":"12px","borderBottom":"1px solid var(--business-theme)","fontWeight":"700","height":"24px","position":"unset"}}},
tip:false,
label:"Aa", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"animationName":"","margin":"0 auto","backgroundColor":"rgba(26, 27, 31, 0)","top":"40px","left":"0px","display":"none","width":"194px","right":"54px","position":"unset","height":"88px"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/publicFontSizeSettingPopup",
name:"publicFontSizeSettingPopupComponent",
cStyle:{"wrapper":{"default":{"animationName":"","margin":"0 auto","backgroundColor":"rgba(26, 27, 31, 0)","top":"40px","left":"0px","display":"none","width":"194px","right":"54px","position":"unset","height":"88px"}}},
componentName:"publicFontSizeSettingPopupComponent",
loading:true,
pageId:"1ab86278af7b4b5692148e7c79551b24",
pageCode:"publicFontSizeSettingPopup", 
 },
},
});
const changeFontSizeSettingVisible = (isShow) => {
/**
 * 设置字号设置内容-动态组件的显隐
 */
const componentDom = document.getElementById('t-component-a812.bad50e638');
if (componentDom) {
  componentDom.style.display = isShow ? 'block' : 'none';
}
};
const handleChangeFontSizeMes = (msg) => {

const {
  fontSizeValue,
  fontSizeType,
  pageSizeType,
  sourceId,
} = msg;

if (sourceId === 'publicFontSizeSetting') {
  if (pageSizeType === 'max') {
    state.maxPageFont = {
      fontSizeValue,
      fontSizeType,
    };
  } else if (pageSizeType === 'min') {
    state.minPageFont = {
      fontSizeValue,
      fontSizeType,
    };
  }
  setFontSize(fontSizeValue);
  state.fontConfigJson = JSON.stringify({
    maxPageFont: state.maxPageFont,
    minPageFont: state.minPageFont,
  });
  // saveFontOptions();

}
};
const sendFontSizeSettingMes = () => {
/**
 * 发送字号设置消息
 */

const pageFont = state.showMaxPage ? state.maxPageFont : state.minPageFont;
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'initFontSizeSetting', // 消息名称
  // 发送的数据
  data: {
    sourceId: 'publicFontSizeSetting',
    // 页面尺寸类型，大-max，小-min
    pageSizeType: state.showMaxPage ? 'max' : 'min',
    // 字号大小类型，默认-defaultSize，大号-largeSize，超大号-kingSize
    fontSizeType: pageFont.fontSizeType,
    // 字号大小数值
    fontSizeValue: pageFont.fontSizeValue,
  },
});
};
const handlePageMaxMin = (statusValue) => {
state.showMaxPage = statusValue;


rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "setLeftRightPanelStyle", // 消息名称
  data: {
    // 当前页面的英文名（唯一值）
    pageId: 'publicFontSizeSetting',
    pageType: 'right',
    pageMinimized: !state.showMaxPage,
    pageStyle: {
      maxPosition: {
        // "--business-text-size-20": "26px", // 中文字号20
        // "--business-text-size-18": "24px", // 中文字号18
        // "--business-text-size-16": "22px", // 中文字号16
        // "--business-text-size-14": "20px", // 中文字号18
        // "--business-text-size-12": "18px" // 中文字号16
      }
    },
  },
});

const pageFont = state.showMaxPage ? state.maxPageFont : state.minPageFont;
sendFontSizeSettingMes();
setFontSize(pageFont.fontSizeValue);
};
const initFont = () => {
const min = {
  "sourceId": "publicFontSizeSetting",
  "fontSizeValue": 14,
  "fontSizeType": "defaultSize",
  "pageSizeType": "min"
};
handleChangeFontSizeMes(min);
};
const setIframesFontSize = (parentEle,textSize14) => {
/**
 * 设置parentEle元素下所有iframe页面body元素的--business-text-size-14属性值
 *   目的：为了修改字体大小
 * @params parentEle
 * @params textSize14 --business-text-size-14的属性值 仅可带px单位；也可不带单位
 */
if (!parentEle || !parentEle instanceof Element || !textSize14) return;
const iframes = parentEle.querySelectorAll('iframe');

try {
  if (iframes.length) {
    iframes.forEach((iframe) => {
      iframe.contentWindow.document.body.style.setProperty(
        '--business-text-size-14',
        `${String(textSize14).replace('px', '').replace('PX', '')}px`);
    });
  }
} catch {
  (err) => {
    console.error(err);
  }
}

};
const sendPublicFontSize = (prefix) => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: `updateCurrentPublicFontSize-${prefix}`,  // 消息类型名称
    data: state.currentFontSize,
  }
);
};
const openDialog = (layerId,properties,feature) => {
const { POINT_TYPE, MONITOR_TIME_DAY } = properties
if (!MONITOR_TIME_DAY && !['污染气团-点', '污染源分布', '在线监控污染源', '大气减排点位'].includes(layerId)) return;
rootData.rootSocket.emit("message", {
  room: global.socketRoom,
  // 键名不能改 消息名称
  type: "showBusinessDialog",
  // 键名不能改 消息内容 对象格式
  data: {
    dialogId: "popAll", // 弹框唯一标识，不传则使用默认创建的，id重复的弹框不会重新创建
    dialogTitle: (() => {
      switch (layerId) {
        case '污染气团-点':
        case '污染源分布':
        case '大气减排点位':
        case '在线监控污染源': return '在线监控详情';
        default: return properties.POINT_NAME;
      }
    })(), // 标题，必传
    contentComName: (() => {
      switch (layerId) {
        case '污染气团-点':
        case '大气减排点位':
        case '污染源分布':
        case '在线监控污染源': return 'onlineMonitorDetailComponent';
        default: return POINT_TYPE === '12' ? 'popAllComponent' : 'pointPolluteDialogComponent';
      }
    })(),
    // contentComName: layerId=== '大气统计' ? "popAllComponent" :'pointPolluteDialogComponent', // 内容动态组件，必传
    // 头部组件名称
    headerComName: (() => {
      switch (layerId) {
        case '污染气团-点':
        case '大气减排点位':
        case '污染源分布':
        case '在线监控污染源': return 'surroundSearchDialogHeaderComponent';
        default: return POINT_TYPE === '12' ? '' : 'surroundSearchDialogHeaderComponent';
      }
    })(),
    dialogStyle: {
      minPosition: {
        width: "880px",
        height: "620px",
        top: "200px",
      },
      maxPosition: {
        width: "1600px",
        height: "997px",
        top: "60px",
        "--business-num-size-36": "36px", // 数字字号36
        "--business-num-size-24": "24px", // 数字字号24
        "--business-num-size-20": "20px", // 数字字号20
        "--business-num-size-18": "20px", // 数字字号18
        "--business-num-size-16": "18px", // 数字字号16
        "--business-num-size-14": "16px", // 数字字号16
        "--business-text-size-14": "16px", // 中文字号14
        "--business-text-size-20": "24px", // 中文字号20
        "--business-text-size-18": "20px", // 中文字号18
        "--business-text-size-16": "20px", // 中文字号16
        "--business-text-size-14": "18px", // 中文字号18
        "--business-text-size-12": "16px" // 中文字号16
      },
    },
    dialogParams: {
      // 弹框内容组件需要的参数，根据实际情况传参
      ...properties,
      layerId
    },
    lockBtnVisible: false, // 锁定按钮显隐，不传默认显示
    fullBtnVisible: true, // 全屏按钮显隐，不传默认显示
  },
});


};
const handleFontSizeSetting = () => {
state.fontSizeSettingVisible = !state.fontSizeSettingVisible;

if (state.fontSizeSettingVisible) {
  sendFontSizeSettingMes();
}

changeFontSizeSettingVisible(state.fontSizeSettingVisible);
};
const handlePanelFold = (data) => {
if (data.side === 'right') {
  state.showMaxPage = false;
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}
};
const setFontSize = (fontSizeValue) => {
/**
 * 设置字体大小
 */
if (!fontSizeValue) return;

// 记录当前设置的字号大小
state.currentFontSize = fontSizeValue;

const sheet = new CSSStyleSheet();
sheet.insertRule(`.t-dialog .dialog.draggable {
    --text-size-14:${fontSizeValue}px !important;
    --business-text-size-12: ${fontSizeValue - 2}px !important;
    --business-text-size-14: ${fontSizeValue}px !important;
    --business-text-size-16: ${fontSizeValue + 2}px !important;
    --business-text-size-18: ${fontSizeValue + 4}px !important;
    
    --business-num-size-16: ${fontSizeValue + 2}px !important;
    --business-num-size-18: ${fontSizeValue + 4}px !important;
}`);
document.adoptedStyleSheets = [sheet];

const pageEle = document.querySelector('body');
// const pageEle = document.querySelector('#t-l-c-airPointCompareRightEntry');
if (!pageEle) return;

// 设置当前页面的--business-text-size-14属性值
pageEle.style.setProperty('--business-text-size-12', `${fontSizeValue - 2}px`);
pageEle.style.setProperty('--text-size-14', `${fontSizeValue}px`);
pageEle.style.setProperty('--business-text-size-14', `${fontSizeValue}px`);
pageEle.style.setProperty('--business-text-size-16', `${fontSizeValue + 2}px`);
pageEle.style.setProperty('--business-text-size-18', `${fontSizeValue + 4}px`);
// pageEle.style.setProperty('--business-text-size-20', `${fontSizeValue + 6}px`);

pageEle.style.setProperty('--business-num-size-16', `${fontSizeValue + 2}px`);
pageEle.style.setProperty('--business-num-size-18', `${fontSizeValue + 4}px`);
// 设置iframe的字体
setIframesFontSize(pageEle, fontSizeValue);

// 更新全局字号
global.publicFontSizeConfig.fontSize12 =  fontSizeValue - 2
global.publicFontSizeConfig.fontSize14 =  fontSizeValue
global.publicFontSizeConfig.fontSize16 =  fontSizeValue + 2
global.publicFontSizeConfig.fontSize18 =  fontSizeValue + 4
};
const onclick1753094643489 = () => {
// 执行自定义方法
handleFontSizeSetting();
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-publicFontSizeSetting', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
const onSocketChange7806414d50f348ebbe75 = function (data) {
if(data.type === "changeFontSize"){
try{
// 执行自定义方法
setFontSize(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange7806414d50f348ebbe75);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange7806414d50f348ebbe75);
});
/* 接收socket.io消息 */
const onSocketChange78f5a5aeee7a44639252 = function (data) {
if(data.type === "getPublicFontSize"){
try{
// 执行自定义方法
sendPublicFontSize(data.data.prefix);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange78f5a5aeee7a44639252);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange78f5a5aeee7a44639252);
});
onMounted(() => {
setPageScale('t-l-c-publicFontSizeSetting', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();

// 隐藏元素并加动画
runAnimation('t-component-0101.f73a41573', [""], 'none');
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

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
tComponentx0x1ComputedData,
onclick1753094643489,
};
},
}
</script>

<style scoped>
.t-l-c-publicFontSizeSetting {
position: relative;
overflow: hidden;
--theme-color: var(--t-brand8);
filter: ;
z-index: 1;
--theme-color-opacity-15: rgba(var(--t-brand8), .15);
--theme-color-opacity-90: rgba(var(--t-brand8), .9);
--theme-color-opacity-80: rgba(var(--t-brand8), .8);
--theme-color-opacity-60: rgba(var(--t-brand8), .6);
position: Static;
--theme-color-opacity-40: rgba(var(--t-brand8), .4);
--theme-color-opacity-10: rgba(var(--t-brand8), .1);
pointer-events: none;
height: 129px;
width: 200px;
background-color: rgba(0,0,0,0);
}
.t-l-c-publicFontSizeSetting .publicFontSizeSetting-t-rect-0-0 {
position: absolute !important;
top: 0px;
left: 172px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-publicFontSizeSetting .publicFontSizeSetting-t-component-0-1 {
position: absolute !important;
top: 40px;
left: 0px;
width: 194px;
height: 88px;
pointer-events: auto;
}
</style>
