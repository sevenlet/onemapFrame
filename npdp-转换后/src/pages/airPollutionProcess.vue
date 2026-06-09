<template>
  <div id="t-l-c-airPollutionProcess" class="t-l-c-airPollutionProcess" ><t-iframe id="t-iframe-6002.d14315adf" class="airPollutionProcess-t-iframe-0-0"  :src="tIframex0x0ComputedData.src" :srcdoc="tIframex0x0ComputedData.srcdoc" :scrolling="tIframex0x0ComputedData.scrolling" :c-style="tIframex0x0ComputedData.cStyle" :socket-url="global.socketIp" :room-id="global.socketRoom"></t-iframe><t-text id="t-text-f200.dfce082f3" class="airPollutionProcess-t-text-0-1"  :label="state.desc" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle" :show-title="tTextx0x1ComputedData.showTitle"></t-text><t-text id="t-text-7ae7.e251d640f" class="airPollutionProcess-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle" :show-title="tTextx0x2ComputedData.showTitle" @click="onclick1734493554906"></t-text></div>
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
import { TIframe, TText } from '@ths/design';

export default {
  components: {
    TIframe,
    TText,
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
   dataLength: "",
   desc: "--",
   airPollutionContentState: {"startTime":"","endTime":"","timeType":""},
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
            default: {"width":"411px","height":"186px","position":"unset","left":"0px","top":"83px","backgroundColor":"rgba(255, 255, 255, 0)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","overflow":"visible","color":""},
            
            },
 default: { 
 
src:"",
srcdoc:"<!--\n * @Author: lvzhixin\n * @Date: 2024-05-30 13:33:18\n * @LastEditTime: 2025-01-14 11:38:13\n * @LastEditors: yanglili\n * @Description: File Info\n-->\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>污染过程分析</title>\n    <link rel=\"shortcut icon\" href=\"assets/images/favicon.ico\" />\n    <!-- vue 这里最终应该下载一个稳定版本 -->\n    <script src=\"./resources/vue.min.js\"><\/script>\n\n    <!-- socket插件 -->\n    <script src=\"./resources/socket.io.js\"><\/script>\n    <!-- lodash插件 -->\n    <script src=\"./resources/lodash.min.js\"><\/script>\n\n    <!-- 引入样式 -->\n    <link\n      rel=\"stylesheet\"\n      href=\"./resources/element-plus/element-plus.min.css\"\n    />\n    <!-- 引入组件库 -->\n    <script src=\"./resources/element-plus/element-plus.min.js\"><\/script>\n    <script src=\"./resources/element-plus/zhCn.js\"><\/script>\n\n    <!-- 通信插件mitt https://www.npmjs.com/package/mitt -->\n    <script src=\"./resources/mitt.min.js\"><\/script>\n\n    <!-- HTTP库 -->\n    <script src=\"./resources/axios.min.js\"><\/script>\n\n    <!-- 主题样式 -->\n    <link\n      rel=\"stylesheet\"\n      href=\"./assets/style/themes.css\"\n    />\n\n    <style>\n    body {\n      margin: 0!important;\n    }\n   .container {\n      width: 100%;\n      text-align: center;\n      padding-right: 3px;\n      box-sizing: border-box;\n   }\n\n   .no-data {\n      width: 100%;\n      height: 183px;\n      text-align: center;\n      line-height: 175px;\n      color: var(--business-no-data-color);\n      font-size: 12px;\n   }\n\n   .item {\n      display: flex;\n      width: 100%;\n      height: 53px;\n      margin-bottom: 8px;\n      padding: 7px 10px 0 0;\n      border-radius: 4px;\n      background: rgba(20, 112, 204, 0.15);\n      box-sizing: border-box;\n    }\n    \n    .item:hover {\n      background: var(--business-tab-content-active-bg);\n      border: 1px solid;\n      border-color: var(--business-unit-icon);\n    }\n\n    .item:last-child .time-line::before {\n        display: none;\n    }\n\n    .content {\n     flex: 1;\n     cursor: pointer;\n    }\n\n    .time {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      margin-bottom: 14px;\n      color: var(--t-white);\n      font-size: 14px;\n    }\n\n    .time-line {\n      position: relative;\n      width: 20px;\n    }\n\n    .time-line-point {\n      position: absolute;\n      top: 5px;\n      left: 7px;\n      width: 6px;\n      height: 6px;\n      border-radius: 6px;\n      background-color: var(--t-white);\n      border: 1.5px solid var(--business-show-bg60);\n    }\n\n    .time-line::before {\n      content: '';\n      position: absolute;\n      top: 14px;\n      left: 11px;\n      width: 1px;\n      height: 52px;\n      background: var(--business-show-bg60);\n    }\n\n    .analysis-btn {\n      color: var(--business-strong);\n      cursor: pointer;\n    }\n\n    .aqi-charts {\n      display: flex;\n      gap: 3px;\n    }\n\n    .aqi-charts-item {\n      height: 3px;\n      flex: 1;\n    }\n\n    .active {\n      background: var(--business-tab-content-active-bg);\n      border: 1px solid;\n      border-color: var(--business-unit-icon);\n    }\n\n    .layer {\n      width: 100%;\n      height: 183px;\n    }\n\n    .layer .el-scrollbar {\n      --el-scrollbar-opacity: 1;\n      --el-scrollbar-background-color: var(--left-menu-scrollbar-bg);\n      --el-scrollbar-hover-opacity: 1;\n      --el-scrollbar-hover-background-color: var(--left-menu-scrollbar-bg);\n    }\n    </style>\n  </head>\n\n  <body class=\"蓝色版\">\n    <div id=\"app\"></div>\n\n    <script>\n      /**\n       * 这里定义全局使用的变量、方法\n       */\n      const {\n        createApp,\n        computed,\n        ref,\n        reactive,\n        toRefs,\n        onBeforeMount,\n        onMounted,\n        onBeforeUpdate,\n        onUpdated,\n        onBeforeUnmount,\n        onUnmounted,\n        onErrorCaptured,\n        onRenderTracked,\n        onRenderTriggered,\n        watch,\n        provide,\n        inject,\n        nextTick,\n      } = Vue;\n\n      \n      const serviceBaseUrl = 'http://27.36.118.5:8888/service/serviceinterface/search/run.action';\n\n      // 房间号\n      const roomId = localStorage.getItem(\"lxtSocketRoom\");\n\n      // 主题\n      const themeName = localStorage.getItem(\"lxtTheme\");\n\n      const bodyDom = document.querySelector(\"body\");\n      if (bodyDom && themeName) {\n        bodyDom.classList.add(themeName);\n      }\n      \n      /**\n       * 这里入口组件内容\n       */\n      const MainComponent = {\n        template:\n          // 默认页面 ———— 一直显示 页面中的组件根据显示条件显示\n        `\n         <div class=\"layer\">\n          <el-scrollbar max-height=\"100%\">\n          <div class=\"container\">\n            <div class=\"no-data\" v-if=\"!state.analysisList.length\">暂无数据</div>\n            <div class=\"item\" v-for=\"(item, index) in state.analysisList\" :class=\"{active: index === state.activeIndex}\">\n              <div class=\"time-line\">\n                <div class=\"time-line-point\"></div>\n              </div>\n              <div class=\"content\" @click=\"handleAnalysis(index, item)\">\n                 <div class=\"time\">\n                  <span>{{item.TIME_SLOT}}</span>\n                  <span>{{item.TIME_NUM}}</span>\n                  <span class=\"analysis-btn\">分析</span>\n                 </div>\n                 <div class=\"aqi-charts\">\n                   <div \n                   v-for=\"item in item.aqiList\" \n                   class=\"aqi-charts-item\" \n                   :style=\"{background: getAqiColor(item)}\">\n                   </div>\n                 </div>\n              </div>\n            </div>\n          </div>\n      </el-scrollbar>\n      </div>\n        `,\n        setup() {\n          // 获取缓存里的鹿小图全局变量数据\n          const lxtGlobal = localStorage.getItem(\"lxtGlobal\")\n            ? JSON.parse(localStorage.getItem(\"lxtGlobal\"))\n            : {};\n\n          const rootEmitter = mitt();\n\n          let global = reactive(\n            /* 插入应用级别的全局变量 相当于store中的rootData */\n            /* globalVariableStart */\n            {\n              socketIp:\n                lxtGlobal.socketIp || \"http://192.168.0.202:7777/socketPath\",\n              socketPath: lxtGlobal.socketPath || \"/socketPath\",\n              socketRoom: lxtGlobal.socketRoom || roomId || \"admin\",\n            }\n            /* globalVariableEnd */\n          );\n\n          let state = reactive({\n            isSocketConnect: false, // socket 是否连接\n            activeIndex: 0, // 当前选中的分析项\n            analysisList: [],\n            regionCode: '',\n            timeType: 'day',\n            startTime: '',\n            endTime: '',\n          });\n\n          // 创建 socket 连接\n          let socket = null;\n          if (global.socketIp) {\n            const options = {};\n            if (global?.socketPath) {\n              options.path = global.socketPath;\n            }\n            socket = io(global.socketIp, options);\n          }\n\n          provide(\"root\", {\n            ...toRefs(global),\n            rootEmit: rootEmitter.emit, // mitt 发送\n            rootOn: rootEmitter.on, // mitt 接收\n            rootOff: rootEmitter.off, // mitt 移除\n            rootSocket: socket, // socket 实例\n          });\n\n          /**\n           * 监听修改全局变量事件\n           * @param obj 修改后的变量\n           */\n          rootEmitter.on(\"rootData:change\", (obj) => {\n            global = _.set(global, obj.key, obj.value);\n\n            if (global.socketIp && global.socketRoom) {\n              // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息\n              socket.emit(\"message\", {\n                room: global.socketRoom, // 房间号\n                type: \"internalType:ChangeGlobalValue\", // 需要保证此类型唯一性\n                data: obj,\n              });\n            }\n          });\n\n          /**\n           * 连接成功时进入对应的房间\n           */\n          if (socket) {\n            socket.on(\"connect\", function () {\n              if (global.socketIp && global.socketRoom) {\n                // 进入房间\n                socket.emit(\"join-room\", global.socketRoom);\n                state.isSocketConnect = true;\n              }\n            });\n          }\n\n          /**\n           * 接收到 socket 消息时触发\n           * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}\n           */\n          if (socket) {\n            socket.on(\"message\", function (data) {\n              // socket 监听全局变量的变化，然后合并值\n              if (data.type === \"internalType:ChangeGlobalValue\") {\n                // 合并 globa 的值\n                global = _.set(global, data.data.key, data.data.value);\n              } else if (data.type === 'changeCommonParams') {\n                if(data.data.selected === 'REGION_CODE') {\n                  state.regionCode = data.data.REGION_CODE\n                }\n              } else if(data.type === 'airPollutionTime') {\n                const { timeType, startTime, endTime } = data.data\n                state.timeType = timeType;\n                state.startTime = startTime;\n                state.endTime = endTime;\n                resetData();\n                getContinuityTime();\n              }\n              else {\n                // 发送消息，通知其他页面\n                rootEmitter.emit(\"rootSocket:change\", data);\n              }\n            });\n          }\n\n          /**\n           * 获取污染情况表示颜色\n           * @param level 污染指数\n           */\n           const getAqiColor = (level) => {\n             let aqiColor = '';\n             switch (level) {\n               case '1':\n                 aqiColor = '#00e400'\n                 break;\n               case '2':\n                 aqiColor = '#ffcd35'\n                 break;\n               case '3':\n                 aqiColor = '#ff7e00'   \n                 break;\n               case '4':\n                 aqiColor = '#dd4209'\n                 break;\n               case '5':\n                 aqiColor = '#99004c'\n                 break;\n               case '6':\n                 aqiColor = '#46072d'\n                 break;\n               default:\n                 aqiColor = '#00e400'\n             }\n             return aqiColor\n            }\n\n            /**\n             * 获取行政区等级\n             * @params selectRegionCode 行政区code\n             */\n            const getRegionLevel = (selectRegionCode) => {\n              let regionType;\n              if (selectRegionCode.substr(6, 3) !== '000') {\n                // 镇街\n                regionType = 'street';\n              } else if (selectRegionCode.substr(4, 2) !== '00') {\n                // 县\n                regionType = 'county';\n              } else if (selectRegionCode.substr(2, 2) !== '00') {\n                // 市\n                regionType = 'city';\n              } else {\n                // 省\n                regionType = 'province';\n              }\n              return regionType;\n            }\n\n            /**\n             * 重置\n             */\n            const resetData = () => {\n              state.activeIndex = 0;\n              state.analysisList = [];\n            }\n        \n           /**\n            * 分析\n            * @param index 索引项\n            * @param item 分析项\n            */\n           const handleAnalysis = (index, item) => {\n             state.activeIndex = index;\n             console.log(item);\n             socket.emit(\"message\", {\n               room: global.socketRoom, // 房间号\n               type: 'changeTimeAxisData', // 需要保证此类型唯一性\n               data: {\n                 sourceType: 'airPollutionAnalysis',\n                 operationType: 'analysis',\n                 timeType: state.timeType,\n                 timeNum: item.TIME_NUM,\n                 timeValue: item.TIME_START?.slice(0, 13),\n                 timeRangeData: [item.TIME_START?.slice(0, 13), item.TIME_END?.slice(0, 13)],\n                 dataLength: state.analysisList?.length,\n               },\n             });\n           }\n          \n           /**\n            * 获取默认时间\n            */\n           const getDefaultTime = () => {\n            return new Promise((resolve, reject) => {\n             axios.get(serviceBaseUrl, {\n               params: {\n                 interfaceId: '14a593f5e69542683e6d13bd645326f0',\n                 token: 'dcp',\n                 TIME_TYPE: state.timeType\n               }\n             }).then(response => {\n             const { head, data } = response.data;\n                if (head.statusCode === '200' && data) {\n                  state.startTime = data.START_TIME;\n                  state.endTime = data.END_TIME;\n                }\n                resolve();\n              })\n                 .catch(error => {\n                   console.error(error);\n                   reject(error);\n                 });\n              }).catch((error) => {\n              // 失败的操作\n              console.error(error);\n            });\n           }\n \n           /**\n            * 获取连续时间段\n            */\n           const getContinuityTime = () => {\n             return new Promise((resolve, reject) => {\n             axios.get(serviceBaseUrl, {\n               params: {\n                 interfaceId: '1322c63c6628f0d4be4c8595012cf05d',\n                 token: 'dcp',\n                 TIME_TYPE: state.timeType,\n                 REGION_CODE: state.regionCode,\n                 END_TIME: state.endTime,\n                 START_TIME: state.startTime,\n                 REGION_TYPE: getRegionLevel(state.regionCode),\n               }\n             }).then(response => {\n             const { head, data } = response.data;\n                if (head.statusCode === '200' && data) {\n                  state.analysisList = data;\n                 //  发送第一条数据的信息\n                 socket.emit(\"message\", {\n                   room: global.socketRoom,\n                   type: 'changeTimeAxisData',\n                   data: {\n                     sourceType: 'airPollutionAnalysis',\n                     operationType: 'default',\n                     timeType: state.timeType,\n                     timeNum: data[0]?.TIME_NUM,\n                     timeValue: data[0]?.TIME_START?.slice(0, 13) || '',\n                     timeRangeData: data.length ? [data[0]?.TIME_START?.slice(0, 13), data[0]?.TIME_END?.slice(0, 13)] : [],\n                     dataLength: data?.length,\n                   },\n                 });\n                  state.analysisList.forEach(item => {\n                   getLevelData(item.TIME_START,item.TIME_END).then((data => {\n                     item.aqiList = data.map((item) => item.AQILEVELINDEX);\n                   }))\n                  })\n                }\n                resolve();\n              })\n                 .catch(error => {\n                   console.error(error);\n                   reject(error);\n                 });\n              }).catch((error) => {\n              // 失败的操作\n              console.error(error);\n            });\n           }\n \n           /**\n            * 获取时间段的等级\n            */\n            const getLevelData = (TIME_START,TIME_END) => {\n             return new Promise((resolve, reject) => {\n             axios.get(serviceBaseUrl, {\n               params: {\n                 interfaceId: '1b379575f46bd4fd8e13a4c17c7b522e',\n                 token: 'dcp',\n                 TIME_TYPE: state.timeType,\n                 REGION_CODE: state.regionCode,\n                 TIME_END,\n                 TIME_START,\n                 REGION_TYPE: getRegionLevel(state.regionCode)\n               }\n             }).then(response => {\n             const { head, data } = response.data;\n                if (head.statusCode === '200' && data && data.length) {\n                  resolve(data);\n                }\n              })\n                 .catch(error => {\n                   console.error(error);\n                   reject(error);\n                 });\n              }).catch((error) => {\n              // 失败的操作\n              console.error(error);\n            });\n           }\n \n           // 监听 socket 房间的变化\n           watch(\n             () => global.socketRoom,\n             (val, oldVal) => {\n               if (socket) {\n                 // 离开房间\n                 socket.emit(\"leave-room\", oldVal);\n                 // 进入房间\n                 socket.emit(\"join-room\", val);\n               }\n             }\n           );\n \n           watch(() => state.regionCode, () => {\n             if(state.regionCode && state.startTime && state.endTime) {\n               resetData();\n               getContinuityTime();\n             }\n           })\n\n           onMounted(async () => {\n            await getDefaultTime();\n            state.regionCode = localStorage.getItem('regionCode') || '440600000000';\n           })\n \n           onBeforeUnmount(() => {\n             // 离开房间\n             socket.emit(\"leave-room\", global.socketRoom);\n             // 断开连接\n             socket.disconnect();\n           });\n \n           return {\n             state,\n             getAqiColor,\n             handleAnalysis,\n           };\n        },\n      };\n\n      const app = createApp(MainComponent);\n      /* 下面的操作是去掉控制台Vue输出的警告信息  如果想开启警告信息可以把这个空函数注释掉 */\n      app.config.warnHandler = function (msg, vm, trace) {\n        // 空函数，不做任何处理\n      };\n      app\n        .use(ElementPlus, {\n          size: \"small\",\n        })\n        .mount(\"#app\");\n    <\/script>\n  </body>\n</html>\n",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"411px","height":"186px","position":"unset","left":"0px","top":"83px","backgroundColor":"rgba(255, 255, 255, 0)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","overflow":"visible","color":""}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"64px","color":"var(--t-white)","position":"unset","left":"0px","top":"0px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","marginLeft":"0px","paddingLeft":"10px","lineHeight":"24px","textAlign":"left","overflow":"hidden","textOverflow":"ellipsis","display":"-webkit-box","-webkit-line-clamp":2,"-webkit-box-orient":"vertical","whiteSpace":"normal","paddingRight":"90px","paddingTop":"10px","paddingBottom":"10px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"64px","color":"var(--t-white)","position":"unset","left":"0px","top":"0px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","marginLeft":"0px","paddingLeft":"10px","lineHeight":"24px","textAlign":"left","overflow":"hidden","textOverflow":"ellipsis","display":"-webkit-box","-webkit-line-clamp":2,"-webkit-box-orient":"vertical","whiteSpace":"normal","paddingRight":"90px","paddingTop":"10px","paddingBottom":"10px"}}},
showTitle:true, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"70px","height":"20px","color":"var(--business-strong)","fontSize":"14px","position":"unset","left":"331px","top":"35px","cursor":"pointer","lineHeight":"20px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/5c1366bb108646c8bd896eaacb15f622.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"14px 14px","-webkit-mask-size":"","backgroundPosition":"100% 50%","-webkit-mask-position":"","paddingRight":"14px"},
            
            },
 default: { 
 
label:"查看详情",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"20px","color":"var(--business-strong)","fontSize":"14px","position":"unset","left":"331px","top":"35px","cursor":"pointer","lineHeight":"20px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/5c1366bb108646c8bd896eaacb15f622.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"14px 14px","-webkit-mask-size":"","backgroundPosition":"100% 50%","-webkit-mask-position":"","paddingRight":"14px"}}},
showTitle:false, 
 },
},
});
const getProvider = () => {
const rootData = inject("airPollutionContentState");
watch(() => rootData, () => {
  state.airPollutionContentState = rootData;
}, {
  deep: true,
  immediate: true,
})

const getData = async () =>{
  await getPolluteArea();
  getDesc();
}

watch(() => [state.airPollutionContentState.timeType, state.airPollutionContentState.startTime, state.airPollutionContentState.endTime, global.regionaQuery.regionCode], () => {
  if(state.airPollutionContentState.timeType && state.airPollutionContentState.startTime && state.airPollutionContentState.endTime) {
     getData();
  }
}, {
  deep: true,
  immediate: true,
})
};
const onclick1734493554906 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'airPollutionAnalysisComponent',
                    data: {
                      businessDialog:{dialogName: 'airPollutionAnalysisComponent'}
                    },
                  });
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogParmas',
                    value:state.airPollutionContentState,
                    data: {
                      businessDialog:{dialogParmas: state.airPollutionContentState}
                    },
                  });
};
// 接口函数
const getDesc = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.airPollutionContentState.timeType,"START_TIME":state.airPollutionContentState.startTime,"REGION_TYPE":global.regionaQuery.paramsRegionType,"END_TIME":state.airPollutionContentState.endTime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"b657ed4d4c1919b64206a49d31842b81"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200' && data[0]) {
 state.desc = data[0]?.INFO || '--'
 const { CO_NUM, NO2_NUM, O3_NUM, PM10_NUM, PM25_NUM, Q_NUM, SO2_NUM, WR_NUM, YZ_NUM, ZH_NUM, Z_NUM } = data[0];
 // 污染物污染天数
 const pollutorDay = [
  {
    label: replacePollutionCharacter('PM25'),
    value: PM25_NUM || '0',
  },
  {
    label: replacePollutionCharacter('PM10'),
    value: PM10_NUM || '0',
  },
  {
    label: replacePollutionCharacter('SO2'),
    value: SO2_NUM || '0',
  },
  {
    label: replacePollutionCharacter('NO2'),
    value: NO2_NUM || '0',
  },
  {
    label: replacePollutionCharacter('CO'),
    value: CO_NUM || '0',
  },
  {
    label: '臭氧',
    value: O3_NUM || '0',
  },
 ]
 // 污染情况天数
 const polluteTypeDay = [
  {
    label: '轻度污染',
    value: Q_NUM || '0',
  },
  {
    label: '中度污染',
    value: Z_NUM || '0',
  },
  {
    label: '重度污染',
    value: ZH_NUM || '0',
  },
  {
    label: '严重污染',
    value: YZ_NUM || '0',
  }
 ];
 // 污染总天数
 const totalDay = WR_NUM || '0';

 // 是否有多种污染物天数 
 const isMorePollutorDay = pollutorDay.filter(item => item.value !== '0').length > 1;
 //  是否有多种类型污染情况天数
 const isMorePolluteType = polluteTypeDay.filter(item => item.value !== '0').length > 1;
 // 时间类型
 let timeType = state.airPollutionContentState.timeType === 'hour' ? '小时' : '天';  

 // 污染物天数描述文字 
 let pollutorText = '';
 if(isMorePollutorDay) {
   pollutorText = '其中'
   pollutorDay.filter(item => item.value !== '0').forEach((item1, index) =>  {
    pollutorText += `${item1.label}污染${item1.value}${timeType}${index === pollutorDay.filter(item => item.value !== '0').length - 1 ? '。' : '，'}`
   })
  } else {
    const onePollutor = pollutorDay.find(item => item.value !== '0')
    pollutorText = `均为${onePollutor?.label}污染。`
  }

  // 污染情况天数描述文字
  let polluteTypeText = '';
  if(isMorePolluteType) {
    polluteTypeText = '其中'
    polluteTypeDay.filter(item => item.value !== '0').forEach((item1, index)=>  {
    polluteTypeText += `${item1.value}${timeType}为${item1.label}${index === polluteTypeDay.filter(item => item.value !== '0').length - 1 ? '。' : '，'}`
   })
  } else {
    const onePolluteType = polluteTypeDay.find(item => item.value !== '0')
    polluteTypeText = `${totalDay}${timeType}均为${onePolluteType?.label}。`
  }

  let regionType = global.regionaQuery.paramsRegionType === 'province' || global.regionaQuery.paramsRegionType === 'city' ? '全市' : global.regionaQuery.regionName;
  state.desc = `${regionType}共有${state.dataLength}个污染区间，共计${totalDay}个污染${timeType}`;
  if(totalDay !== '0') {
    state.desc += `，${pollutorText}${polluteTypeText}`;
  }
} else {
  state.desc = '--'
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getPolluteArea = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"START_TIME":state.airPollutionContentState.startTime,"END_TIME":state.airPollutionContentState.endTime,"REGION_TYPE":global.regionaQuery.paramsRegionType,"REGION_CODE":global.regionaQuery.regionCode,"TIME_TYPE":state.airPollutionContentState.timeType,"interfaceId":"1322c63c6628f0d4be4c8595012cf05d"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.dataLength = data.length;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airPollutionProcess', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
onMounted(() => {
setPageScale('t-l-c-airPollutionProcess', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tIframex0x0ComputedData = computed(() => _.merge({}, componentState.tIframex0x0.default, componentState.tIframex0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

return {
global,
state,
componentState,
tIframex0x0ComputedData,
tTextx0x1ComputedData,
tTextx0x2ComputedData,
onclick1734493554906,
};
},
}
</script>

<style scoped>
.t-l-c-airPollutionProcess {
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
height: 268px;
width: 410px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airPollutionProcess .airPollutionProcess-t-iframe-0-0 {
position: absolute !important;
top: 83px;
left: 0px;
width: 411px;
height: 186px;
pointer-events: auto;
}

.t-l-c-airPollutionProcess .airPollutionProcess-t-text-0-1 {
position: absolute !important;
top: 0px;
left: 0px;
width: 410px;
height: 64px;
pointer-events: auto;
}

.t-l-c-airPollutionProcess .airPollutionProcess-t-text-0-2 {
position: absolute !important;
top: 35px;
left: 331px;
width: 70px;
height: 20px;
pointer-events: auto;
}
</style>
