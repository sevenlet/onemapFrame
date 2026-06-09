<template>
  <div id="t-l-c-airAnalysis" class="t-l-c-airAnalysis" ><t-iframe id="t-iframe-cb66.cd38ee5d5" class="airAnalysis-t-iframe-0-0"  :src="tIframex0x0ComputedData.src" :srcdoc="tIframex0x0ComputedData.srcdoc" :scrolling="tIframex0x0ComputedData.scrolling" :c-style="tIframex0x0ComputedData.cStyle"></t-iframe></div>
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
            default: {"width":"410px","height":"860px","position":"unset","left":"20px","top":"20px","backgroundColor":"rgba(249, 249, 249, 0)"},
            
            },
 default: { 
 
src:"",
srcdoc:"<!--\n * @Author: lvzhixin\n * @Date: 2024-05-30 13:33:18\n * @LastEditTime: 2025-06-24 13:30:09\n * @LastEditors: yanglili\n * @Description: File Info\n-->\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>污染过程分析</title>\n    <link rel=\"shortcut icon\" href=\"assets/images/favicon.ico\" />\n    <!-- vue 这里最终应该下载一个稳定版本 -->\n    <script src=\"./resources/vue.min.js\"><\/script>\n\n    <!-- socket插件 -->\n    <script src=\"./resources/socket.io.js\"><\/script>\n    <!-- lodash插件 -->\n    <script src=\"./resources/lodash.min.js\"><\/script>\n\n    <!-- 引入样式 -->\n    <link\n      rel=\"stylesheet\"\n      href=\"./resources/element-plus/element-plus.min.css\"\n    />\n    <!-- 引入组件库 -->\n    <script src=\"./resources/element-plus/element-plus.min.js\"><\/script>\n    <script src=\"./resources/element-plus/zhCn.js\"><\/script>\n\n    <!-- 通信插件mitt https://www.npmjs.com/package/mitt -->\n    <script src=\"./resources/mitt.min.js\"><\/script>\n\n    <!-- HTTP库 -->\n    <script src=\"./resources/axios.min.js\"><\/script>\n\n    <!-- 主题样式 -->\n    <link\n      rel=\"stylesheet\"\n      href=\"./assets/style/themes.css\"\n    />\n\n    <style>\n    body {\n      width: 410px;\n      margin: 0;\n    }\n    \n    .classsify-container {\n      width: 410px;\n    }\n\n    .title {\n      display: flex;\n      align-items: center;\n      width: 410px;\n      height: 31px;\n      font-family: 方正综艺;\n      transform: translate(-5px, 0);\n    }\n\n    .title-bg {\n      position: relative;\n      width: 379px;\n      height: 31px;\n      background: var(--business-title-second-bg);\n      padding-left: 15px;\n      color: #FFF;\n      font-family: 方正综艺;\n      font-size: 17px;\n      font-weight: 700;\n      line-height: 20px;\n      box-sizing: border-box;\n    }\n\n    .arrow {\n      width: 24px;\n      height: 37px;\n      margin-right: 8px;\n      animation-name: custom457e0c4d7ae9a, custom22a312988078d;\n      animation-duration: 1.5s, 1.3s;\n      animation-timing-function: ease-in, ease-in-out;\n      animation-delay: 0s, 0s;\n      animation-iteration-count: infinite, infinite;\n      animation-direction: alternate, alternate-reverse;\n    }\n\n    .title-bg-rect {\n      width: 29px;\n      height: 36px;\n      -webkit-mask-image: url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg);\n      -webkit-mask-repeat: no-repeat;\n      -webkit-mask-size: contain;\n      -webkit-mask-position: 50% 50%;\n      transform: perspective(0px) translate3d(0px, undefinedpx, undefinedpx) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(0%) scaleY(0%) skewX(0deg) skewY(0deg);\n      animation-duration: 4s;\n      animation-timing-function: linear;\n      animation-iteration-count: infinite;\n      animation-direction: normal;\n      background-color: var(--business-theme);\n    }\n\n\n    .title-bg-rect-1 {\n      position: absolute;\n      right: 152px;\n      top: 2px; \n      animation-delay: 0s;\n      animation-name: custom4f535b3e2b5f4;\n    }\n\n    .title-bg-rect-2 {\n      position: absolute;\n      right: 130px;\n      top: 2px;\n      animation-delay: 0.5s;\n      animation-name: custom4c3c1b39109cc;\n    }\n\n    .title-bg-rect-3 {\n      position: absolute;\n      right: 108px;\n      top: 2px;\n      animation-delay: 1s;\n      animation-name: custom69c9662b286de;\n    }\n\n    .title-bg-rect-4 {\n      position: absolute;\n      right: 86px;\n      top: 2px;\n      animation-delay: 1.5s;\n      animation-name:  customac792bbf9af19;\n    }\n\n    .title-bg-rect-5 {\n      position: absolute;\n      right: 64px;\n      top: 2px;\n      animation-delay: 2s;\n      animation-name: customcdd3f7e7beaa6;\n    }\n\n    .title-bg-rect-6 {\n      position: absolute;\n      right: 42px;\n      top: 2px;\n      animation-delay: 2.5s;\n      animation-name: customfa732ecba515e;\n    }\n\n    .title-bg-rect-7 {\n      position: absolute;\n      right: 20px;\n      top: 2px;\n      animation-delay: 3s;\n      animation-name: custombc1e59c456704;\n    }\n\n    .title-bg-rect-8 {\n      position: absolute;\n      right: -2px;\n      top: 2px;\n      animation-delay: 3.5s;\n      animation-name: custome263d94835a89;\n    }\n\n    .title-bg-rect img {\n      width: 29px;\n      height: 36px;\n    }\n\n    .content {\n      display: flex;\n      justify-content: space-between;\n      gap: 8px;\n      flex-wrap: wrap;\n      width: 410px;\n      padding: 20px 0;\n    }\n\n    .menu-item {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      width: 49%;\n      height: 60px;\n      padding: 8px;\n      border-radius: 2px;\n      background-color: var(--business-show-bg30);\n      border: 1px solid transparent;\n      font-size: 14px;\n      color: #FFF;\n      cursor: pointer;\n      box-sizing: border-box;\n    }\n\n    .menu-text {\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 2;\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n\n    .menu-item img {\n      width: 30px;\n      height: 30px;\n      flex-shrink: 0;\n    }\n\n    .menu-item:hover {\n      /* 蓝色主题/内容TAB选中背景 */\n      background: var(--business-tab-content-active-bg);\n      box-sizing: border-box;\n      /* 蓝色主题/单位\\图标 */\n      border: 1px solid var(--business-unit-icon);\n      cursor: pointer;\n    }\n\n    .active {\n      /* 蓝色主题/内容TAB选中背景 */\n      background: var(--business-tab-content-active-bg);\n      /* 蓝色主题/单位\\图标 var(--business-unit-icon)*/\n      border: 1px solid var(--business-unit-icon);\n    }\n\n    .el-scrollbar__view {\n      height: 100%;\n    }\n\n    @keyframes custom4f535b3e2b5f4 {\n\n0% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n50% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n10%;\n}\n100% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n}\n@keyframes custom4c3c1b39109cc {\n\n0% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n50% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n10%;\n}\n100% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n}\n@keyframes custom69c9662b286de {\n\n0% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n50% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n10%;\n}\n100% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n}\n@keyframes customac792bbf9af19 {\n\n0% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n50% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n10%;\n}\n100% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n}\n@keyframes customcdd3f7e7beaa6 {\n\n0% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n50% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n10%;\n}\n100% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n}\n@keyframes customfa732ecba515e {\n\n0% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n50% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n10%;\n}\n100% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n}\n@keyframes custombc1e59c456704 {\n\n0% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n50% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n10%;\n}\n100% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n}\n@keyframes custome263d94835a89 {\n\n0% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n50% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n10%;\n}\n100% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n}\n@keyframes custom457e0c4d7ae9a {\n\n0% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n100% {\ntransform: perspective(900px) translateX(10px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n}\n@keyframes custom22a312988078d {\n\n0% {\ntransform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n100% {\ntransform: perspective(900px) translateX(6px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);\nopacity: \n100%;\n}\n}\n\n.layer {\n  width: 410px;\n  height: 860px;\n}\n\n.layer .el-scrollbar {\n  width: 410px;\n  --el-scrollbar-opacity: 1;\n  --el-scrollbar-background-color: var(--left-menu-scrollbar-bg);\n  --el-scrollbar-hover-opacity: 1;\n  --el-scrollbar-hover-background-color: var(--left-menu-scrollbar-bg);\n}\n    </style>\n  </head>\n\n  <body class=\"蓝色版\">\n    <div id=\"app\"></div>\n\n    <script>\n      /**\n       * 这里定义全局使用的变量、方法\n       */\n      const {\n        createApp,\n        computed,\n        ref,\n        reactive,\n        toRefs,\n        onBeforeMount,\n        onMounted,\n        onBeforeUpdate,\n        onUpdated,\n        onBeforeUnmount,\n        onUnmounted,\n        onErrorCaptured,\n        onRenderTracked,\n        onRenderTriggered,\n        watch,\n        provide,\n        inject,\n        nextTick,\n      } = Vue;\n\n      \n      const serviceBaseUrl = 'http://27.36.118.5:8888/service/serviceinterface/search/run.action';\n\n      // 房间号\n      const roomId = localStorage.getItem(\"lxtSocketRoom\");\n\n      // 主题\n      const themeName = localStorage.getItem(\"lxtTheme\");\n\n      const bodyDom = document.querySelector(\"body\");\n      if (bodyDom && themeName) {\n        bodyDom.classList.add(themeName);\n      }\n      \n      /**\n       * 这里入口组件内容\n       */\n      const MainComponent = {\n        template:\n          // 默认页面 ———— 一直显示 页面中的组件根据显示条件显示\n        `\n         <div class=\"layer\">\n          <el-scrollbar max-height=\"100%\">\n           <div class=\"classsify-container\">\n            <div class=\"classsify-item\" v-for=\"(item,index) in state.menuList\" :key=\"index\">\n              <div class=\"title\">\n                <img class=\"arrow\" src=\"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/3b0d6f226d5f40619c1675b604ec5b04.png\" />\n                <div class=\"title-bg\">\n                  <div class=\"title\">{{ item.NAME}}</div>\n                  <div class=\"title-bg-rect-1 title-bg-rect\"></div>\n                  <div class=\"title-bg-rect-2 title-bg-rect\"></div>\n                  <div class=\"title-bg-rect-3 title-bg-rect\"></div>\n                  <div class=\"title-bg-rect-4 title-bg-rect\"></div>\n                  <div class=\"title-bg-rect-5 title-bg-rect\"></div>\n                  <div class=\"title-bg-rect-6 title-bg-rect\"></div>\n                  <div class=\"title-bg-rect-7 title-bg-rect\"></div>\n                  <div class=\"title-bg-rect-8 title-bg-rect\"></div>\n                </div>\n              </div>\n              <div class=\"content\">\n                <div class=\"menu-item\" v-for=\"menuItem in item.children\" :key=\"menuItem.NAME\" @click=\"menuItemClick(menuItem)\" :class=\"{active: menuItem.NAME === state.activeName}\">\n                  <img :src=\"menuItem.icon\" />\n                  <div class=\"menu-text\" :title=\"menuItem.NAME\">{{ menuItem.NAME }}</div>\n                </div>\n              </div>\n              </div>\n            </div>\n          </el-scrollbar>\n         </div>\n        `,\n        setup() {\n          // 获取缓存里的鹿小图全局变量数据\n          const lxtGlobal = localStorage.getItem(\"lxtGlobal\")\n            ? JSON.parse(localStorage.getItem(\"lxtGlobal\"))\n            : {};\n\n          const rootEmitter = mitt();\n\n          let global = reactive(\n            /* 插入应用级别的全局变量 相当于store中的rootData */\n            /* globalVariableStart */\n            {\n              socketIp:\n                lxtGlobal.socketIp || \"http://192.168.0.202:7777/socketPath\",\n              socketPath: lxtGlobal.socketPath || \"/socketPath\",\n              socketRoom: lxtGlobal.socketRoom || roomId || \"admin\",\n            }\n            /* globalVariableEnd */\n          );\n\n          let state = reactive({\n            isSocketConnect: false, // socket 是否连接\n            menuList: [],\n            activeName: ''\n          });\n\n          // 创建 socket 连接\n          let socket = null;\n          if (global.socketIp) {\n            const options = {};\n            if (global?.socketPath) {\n              options.path = global.socketPath;\n            }\n            socket = io(global.socketIp, options);\n          }\n\n          provide(\"root\", {\n            ...toRefs(global),\n            rootEmit: rootEmitter.emit, // mitt 发送\n            rootOn: rootEmitter.on, // mitt 接收\n            rootOff: rootEmitter.off, // mitt 移除\n            rootSocket: socket, // socket 实例\n          });\n\n          /**\n           * 监听修改全局变量事件\n           * @param obj 修改后的变量\n           */\n          rootEmitter.on(\"rootData:change\", (obj) => {\n            global = _.set(global, obj.key, obj.value);\n\n            if (global.socketIp && global.socketRoom) {\n              // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息\n              socket.emit(\"message\", {\n                room: global.socketRoom, // 房间号\n                type: \"internalType:ChangeGlobalValue\", // 需要保证此类型唯一性\n                data: obj,\n              });\n            }\n          });\n\n          /**\n           * 连接成功时进入对应的房间\n           */\n          if (socket) {\n            socket.on(\"connect\", function () {\n              if (global.socketIp && global.socketRoom) {\n                // 进入房间\n                socket.emit(\"join-room\", global.socketRoom);\n                state.isSocketConnect = true;\n              }\n            });\n          }\n\n          /**\n           * 接收到 socket 消息时触发\n           * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}\n           */\n          if (socket) {\n            socket.on(\"message\", function (data) {\n              // socket 监听全局变量的变化，然后合并值\n              if (data.type === \"internalType:ChangeGlobalValue\") {\n                // 合并 globa 的值\n                global = _.set(global, data.data.key, data.data.value);\n              } else if (data.type === 'changeCommonParams') {\n                \n              } else if(data.type === 'airPollutionTime') {\n                \n              }\n              else {\n                // 发送消息，通知其他页面\n                rootEmitter.emit(\"rootSocket:change\", data);\n              }\n            });\n          }\n        \n           /**\n            * 菜单点击\n            * @param item 分析项\n            */\n           const menuItemClick = (item) => {\n             state.activeName = item.NAME;\n             if(item.OPENTYPE === 'newpage') {\n              window.open(item.OPENURL, '_blank')\n             } else if(item.OPENTYPE === 'dialog') {\n               socket.emit(\"message\", {\n               room: global.socketRoom, // 房间号\n               type: 'openIframeDialog', // 需要保证此类型唯一性\n               data: {\n                openUrl: item.OPENURL,\n                title: item.TITLE,\n                width: item.WIDTH,\n                height: item.HEIGHT,\n               },\n             });\n             }\n           }\n           \n           /**\n            * 获取默认时间\n            */\n            const getMenuList = () => {\n            return new Promise((resolve, reject) => {\n             const req1 = axios.get(serviceBaseUrl, {\n               params: {\n                 interfaceId: '32396d691a20533b4eb94d528c077816',\n                 token: 'dcp',\n               }\n             })\n\n             const req2 = axios.get(serviceBaseUrl, {\n               params: {\n                 interfaceId: 'c497e7abfca1280ae2171f6d37b46ec4',\n                 token: 'dcp',\n               }\n             })\n\n             Promise.all([req1, req2]).then(res => {\n              const firstData = res[0].data.data\n              const secondData = res[1].data.data\n              state.menuList = firstData.map((item, index) => ({\n                ...item,\n                children: secondData.filter(secondItem => secondItem.TYPES === item.TYPES).map((item, index) => ({\n                  ...item,\n                  icon: item.IMAGE\n                }) ) || []\n              }))\n             }).catch((error) => {\n              // 失败的操作\n              console.error(error);\n            });\n              })\n           }\n \n           // 监听 socket 房间的变化\n           watch(\n             () => global.socketRoom,\n             (val, oldVal) => {\n               if (socket) {\n                 // 离开房间\n                 socket.emit(\"leave-room\", oldVal);\n                 // 进入房间\n                 socket.emit(\"join-room\", val);\n               }\n             }\n           );\n \n           watch(() => state.regionCode, () => {\n             if(state.regionCode) {\n              // todo\n             }\n           })\n\n           onMounted(async () => {\n            getMenuList();\n            state.regionCode = localStorage.getItem('regionCode') || '440600000000';\n           })\n \n           onBeforeUnmount(() => {\n             // 离开房间\n             socket.emit(\"leave-room\", global.socketRoom);\n             // 断开连接\n             socket.disconnect();\n           });\n \n           return {\n             state,\n             menuItemClick,\n           };\n        },\n      };\n\n      const app = createApp(MainComponent);\n      /* 下面的操作是去掉控制台Vue输出的警告信息  如果想开启警告信息可以把这个空函数注释掉 */\n      app.config.warnHandler = function (msg, vm, trace) {\n        // 空函数，不做任何处理\n      };\n      app\n        .use(ElementPlus, {\n          size: \"small\",\n        })\n        .mount(\"#app\");\n    <\/script>\n  </body>\n</html>\n",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"410px","height":"860px","position":"unset","left":"20px","top":"20px","backgroundColor":"rgba(249, 249, 249, 0)"}}}, 
 },
},
});
const setAnalysisIframeParams = (params) => {
localStorage.setItem('airAnalysisIframeParams', JSON.stringify(params));
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airAnalysis', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
rootData.rootOn('rootSocket:change', (data)=>{
if(data.type === "openIframeDialog"){
try{
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'airAnalysisIframeComponent',
                    data: {
                      businessDialog:{dialogName: 'airAnalysisIframeComponent'}
                    },
                  });
// 执行自定义方法
setAnalysisIframeParams(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
});
/* 接收socket.io消息 */
rootData.rootOn('rootSocket:change', (data)=>{
if(data.type === "closeIframeDialog"){
try{
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
} catch (error) {
console.error('参数格式错误', error);
};
};
});
onMounted(() => {
setPageScale('t-l-c-airAnalysis', global.appScaleMode, 'normal');
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
.t-l-c-airAnalysis {
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
height: 900px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airAnalysis .airAnalysis-t-iframe-0-0 {
position: absolute !important;
top: 20px;
left: 20px;
width: 410px;
height: 860px;
pointer-events: auto;
}
</style>
