<template>
  <div id="t-l-c-airAnalysisIframe" class="t-l-c-airAnalysisIframe" ><t-iframe id="t-iframe-a55e.1cade139d" class="airAnalysisIframe-t-iframe-0-0"  :src="tIframex0x0ComputedData.src" :srcdoc="tIframex0x0ComputedData.srcdoc" :scrolling="tIframex0x0ComputedData.scrolling" :c-style="tIframex0x0ComputedData.cStyle"></t-iframe></div>
</template>

<script>
import io from 'socket.io-client';
import mitt from 'mitt';
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
import { TIframe } from '@ths/design';

export default {
  components: {
    TIframe,
  },
  setup() {
// 页面内注入全局变量和事件
const rootData = inject('root');
let global = reactive({
...toRefs(rootData)
});
// 路由
const route = useRoute();
// 创建 DOM 引用

// 当前页面使用的变量
const state = reactive({
   screenSize: "",
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
tIframex0x0: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","backgroundColor":"rgba(58, 65, 94, 0)","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
src:"",
srcdoc:"<!--\n * @Author: lvzhixin\n * @Date: 2024-05-30 13:33:18\n * @LastEditTime: 2025-02-27 14:53:03\n * @LastEditors: yanglili\n * @Description: File Info\n-->\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>污染过程分析-模块框</title>\n    <link rel=\"shortcut icon\" href=\"assets/images/favicon.ico\" />\n    <!-- vue 这里最终应该下载一个稳定版本 -->\n    <script src=\"./resources/vue.min.js\"><\/script>\n\n    <!-- socket插件 -->\n    <script src=\"./resources/socket.io.js\"><\/script>\n    <!-- lodash插件 -->\n    <script src=\"./resources/lodash.min.js\"><\/script>\n\n    <!-- 引入样式 -->\n    <link\n      rel=\"stylesheet\"\n      href=\"./resources/element-plus/element-plus.min.css\"\n    />\n    <!-- 引入组件库 -->\n    <script src=\"./resources/element-plus/element-plus.min.js\"><\/script>\n    <script src=\"./resources/element-plus/zhCn.js\"><\/script>\n\n    <!-- 通信插件mitt https://www.npmjs.com/package/mitt -->\n    <script src=\"./resources/mitt.min.js\"><\/script>\n\n    <!-- HTTP库 -->\n    <script src=\"./resources/axios.min.js\"><\/script>\n\n    <!-- 主题样式 -->\n    <link\n      rel=\"stylesheet\"\n      href=\"./assets/style/themes.css\"\n    />\n\n    <style>\n      .main {\n        width: 1920px;\n        height: 1080px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .modal {\n        /* background-color: var(--business-dialog-bg); */\n        border-radius: 16px;\n        /* border: 1px solid var(--business-show-bg60); */\n        background-color: rgba(0, 53, 134, 0.95);;\n        border: 1px solid rgba(20, 112, 204, 0.6);\n      }\n  \n      .head {\n        width: 100%;\n        height: 47px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        border-top-left-radius: 16px;\n        border-top-right-radius: 16px;\n        border-left: 1px none rgb(23, 62, 228);\n        border-top: 1px none rgb(23, 62, 228);\n        border-right: 1px none rgb(23, 62, 228);\n        /* border-bottom: 1px solid var(--business-show-bg60); \n           background-color: var(--business-show-bg30);  */\n        border-bottom: 1px solid rgba(20, 112, 204, 0.6);\n        background-color: rgba(20, 112, 204, 0.3);\n        padding: 0 15px;\n        box-sizing: border-box;\n      }\n\n      .title {\n        display: flex;\n        align-items: center;\n        gap: 5px;\n        color: rgb(255, 255, 255);\n        font-size: 18px;\n        font-weight: 700;\n      }\n      \n      .close {\n        width: 24px;\n        height: 24px;\n        border-radius: 4px;\n        /* border: 1px solid var(--business-btn-default); */\n        border: 1px solid #0073CB;\n        /* background-color: var(--business-show-bg30); */\n        background-color: rgba(20, 112, 204, 0.3);\n        background-image:  url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg);\n        background-repeat: no-repeat;\n        background-size: auto;\n        background-position: 50% 50%;\n        cursor: pointer;\n      }\n\n      iframe {\n        width: 100%;\n        height: calc(100% - 60px);\n      }\n    </style>\n  </head>\n\n  <body class=\"蓝色版\">\n    <div id=\"app\"></div>\n\n    <script>\n      /**\n       * 这里定义全局使用的变量、方法\n       */\n      const {\n        createApp,\n        computed,\n        ref,\n        reactive,\n        toRefs,\n        onBeforeMount,\n        onMounted,\n        onBeforeUpdate,\n        onUpdated,\n        onBeforeUnmount,\n        onUnmounted,\n        onErrorCaptured,\n        onRenderTracked,\n        onRenderTriggered,\n        watch,\n        provide,\n        inject,\n        nextTick,\n      } = Vue;\n\n      \n      const serviceBaseUrl = 'http://27.36.118.5:8888/service/serviceinterface/search/run.action';\n\n      // 房间号\n      const roomId = localStorage.getItem(\"lxtSocketRoom\");\n\n      // 主题\n      const themeName = localStorage.getItem(\"lxtTheme\");\n\n      const bodyDom = document.querySelector(\"body\");\n      if (bodyDom && themeName) {\n        bodyDom.classList.add(themeName);\n      }\n      \n      /**\n       * 这里入口组件内容\n       */\n      const MainComponent = {\n        template:\n          // 默认页面 ———— 一直显示 页面中的组件根据显示条件显示\n        `\n        <div class=\"main\">\n        <div class=\"modal\" :style=\"{ width: state.params.width, height: state.params.height }\">\n          <div class=\"head\">\n            <div class=\"title\">\n              <img src=\"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg\" alt=\"\">\n              <div class=\"title-text\">{{ state.params.title || '--' }}</div>\n            </div>\n              <div class=\"close\" @click=\"handleCloseIframeDialog\"></div>\n          </div>\n          <iframe :src=\"state.params.openUrl\" frameborder=\"0\"></iframe>\n        </div>\n        </div>\n        `,\n        setup() {\n          // 获取缓存里的鹿小图全局变量数据\n          const lxtGlobal = localStorage.getItem(\"lxtGlobal\")\n            ? JSON.parse(localStorage.getItem(\"lxtGlobal\"))\n            : {};\n\n          const rootEmitter = mitt();\n\n          let global = reactive(\n            /* 插入应用级别的全局变量 相当于store中的rootData */\n            /* globalVariableStart */\n            {\n              socketIp:\n                lxtGlobal.socketIp || \"http://192.168.0.202:7777/socketPath\",\n              socketPath: lxtGlobal.socketPath || \"/socketPath\",\n              socketRoom: lxtGlobal.socketRoom || roomId || \"admin\",\n            }\n            /* globalVariableEnd */\n          );\n\n          let state = reactive({\n            isSocketConnect: false, // socket 是否连接\n            params: {\n              title: '',\n              height: '',\n              width: '',\n              openUrl: '',\n            }\n          });\n\n          // 创建 socket 连接\n          let socket = null;\n          if (global.socketIp) {\n            const options = {};\n            if (global?.socketPath) {\n              options.path = global.socketPath;\n            }\n            socket = io(global.socketIp, options);\n          }\n\n          provide(\"root\", {\n            ...toRefs(global),\n            rootEmit: rootEmitter.emit, // mitt 发送\n            rootOn: rootEmitter.on, // mitt 接收\n            rootOff: rootEmitter.off, // mitt 移除\n            rootSocket: socket, // socket 实例\n          });\n\n          /**\n           * 监听修改全局变量事件\n           * @param obj 修改后的变量\n           */\n          rootEmitter.on(\"rootData:change\", (obj) => {\n            global = _.set(global, obj.key, obj.value);\n\n            if (global.socketIp && global.socketRoom) {\n              // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息\n              socket.emit(\"message\", {\n                room: global.socketRoom, // 房间号\n                type: \"internalType:ChangeGlobalValue\", // 需要保证此类型唯一性\n                data: obj,\n              });\n            }\n          });\n\n          /**\n           * 连接成功时进入对应的房间\n           */\n          if (socket) {\n            socket.on(\"connect\", function () {\n              if (global.socketIp && global.socketRoom) {\n                // 进入房间\n                socket.emit(\"join-room\", global.socketRoom);\n                state.isSocketConnect = true;\n              }\n            });\n          }\n\n          /**\n           * 接收到 socket 消息时触发\n           * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}\n           */\n          if (socket) {\n            socket.on(\"message\", function (data) {\n              // socket 监听全局变量的变化，然后合并值\n              if (data.type === \"internalType:ChangeGlobalValue\") {\n                // 合并 globa 的值\n                global = _.set(global, data.data.key, data.data.value);\n              } else if (data.type === 'changeCommonParams') {\n                \n              } else if(data.type === 'airPollutionTime') {\n                \n              }\n              else {\n                // 发送消息，通知其他页面\n                rootEmitter.emit(\"rootSocket:change\", data);\n              }\n            });\n          }\n\n           /**\n            * 获取默认时间\n            */\n            const getMenuList = () => {\n            return new Promise((resolve, reject) => {\n             const req1 = axios.get(serviceBaseUrl, {\n               params: {\n                 interfaceId: '32396d691a20533b4eb94d528c077816',\n                 token: 'dcp',\n               }\n             })\n              })\n           }\n\n           /**\n           * 关闭模态框\n           */\n          const handleCloseIframeDialog = () => {\n            socket.emit(\"message\", {\n               room: global.socketRoom, // 房间号\n               type: 'closeIframeDialog', // 需要保证此类型唯一性\n               data: {}\n           });\n          }\n \n           // 监听 socket 房间的变化\n           watch(\n             () => global.socketRoom,\n             (val, oldVal) => {\n               if (socket) {\n                 // 离开房间\n                 socket.emit(\"leave-room\", oldVal);\n                 // 进入房间\n                 socket.emit(\"join-room\", val);\n               }\n             }\n           );\n \n           watch(() => state.regionCode, () => {\n             if(state.regionCode) {\n              // todo\n             }\n           })\n\n           onMounted(() => {\n              state.params = JSON.parse(localStorage.getItem(\"airAnalysisIframeParams\") || '{}');\n          })\n \n           onBeforeUnmount(() => {\n             // 离开房间\n             socket.emit(\"leave-room\", global.socketRoom);\n             // 断开连接\n             socket.disconnect();\n           });\n \n           return {\n             state,\n             handleCloseIframeDialog\n           };\n        },\n      };\n\n      const app = createApp(MainComponent);\n      /* 下面的操作是去掉控制台Vue输出的警告信息  如果想开启警告信息可以把这个空函数注释掉 */\n      app.config.warnHandler = function (msg, vm, trace) {\n        // 空函数，不做任何处理\n      };\n      app\n        .use(ElementPlus, {\n          size: \"small\",\n        })\n        .mount(\"#app\");\n    <\/script>\n  </body>\n</html>\n",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","backgroundColor":"rgba(58, 65, 94, 0)","position":"unset","left":"0px","top":"0px"}}}, 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airAnalysisIframe', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-airAnalysisIframe', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tIframex0x0ComputedData = computed(() => _.merge({}, componentState.tIframex0x0.default, componentState.tIframex0x0?.[state.screenSize]));

return {
global,
state,
componentState,
tIframex0x0ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-airAnalysisIframe {
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
.t-l-c-airAnalysisIframe .airAnalysisIframe-t-iframe-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 1920px;
height: 1080px;
pointer-events: auto;
}
</style>
