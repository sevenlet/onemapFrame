<template>
  <div id="t-l-c-baseInfo" class="t-l-c-baseInfo" ><t-text id="t-text-db66.45d5b89dc" class="baseInfo-t-text-0-0"  :label="tTextx0x0ComputedData.label" :editable="tTextx0x0ComputedData.editable" :c-style="tTextx0x0ComputedData.cStyle"></t-text><t-text id="t-text-0ab3.e19e3ade9" class="baseInfo-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-text id="t-text-ae40.9f9f6f1ba" class="baseInfo-t-text-0-2"  :label="replaceCssVariables(state.lat, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-text id="t-text-295e.0cb8f1d89" class="baseInfo-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle"></t-text><t-text id="t-text-8620.98027c914" class="baseInfo-t-text-0-4"  :label="replaceCssVariables(state.pwxkz, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle"></t-text><t-text id="t-text-013a.2494012eb" class="baseInfo-t-text-0-5"  :label="replaceCssVariables(state.industryParkName, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle"></t-text><t-text id="t-text-44f9.3dd70ffde" class="baseInfo-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle"></t-text><t-text id="t-text-1db8.5192f167c" class="baseInfo-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle"></t-text><t-text id="t-text-77cb.3f6a25f78" class="baseInfo-t-text-0-8"  :label="replaceCssVariables(state.lon, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle"></t-text><t-text id="t-text-ef27.45e74a7d4" class="baseInfo-t-text-0-9"  :label="replaceCssVariables(state.wasteDestination, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle"></t-text><t-text id="t-text-fb21.379026595" class="baseInfo-t-text-0-10"  :label="tTextx0x10ComputedData.label" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle"></t-text><t-text id="t-text-b59a.888e0bcb1" class="baseInfo-t-text-0-11"  :label="tTextx0x11ComputedData.label" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle"></t-text><t-text id="t-text-f3cf.f5a15c02a" class="baseInfo-t-text-0-12"  :label="replaceCssVariables(state.productState, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle"></t-text><t-text id="t-text-57fd.f259a23fb" class="baseInfo-t-text-0-13"  :label="replaceCssVariables(state.isInIndustryPark, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle"></t-text><t-iframe id="t-iframe-75e8.719b780ac" class="baseInfo-t-iframe-0-14"  :src="tIframex0x14ComputedData.src" :srcdoc="tIframex0x14ComputedData.srcdoc" :scrolling="tIframex0x14ComputedData.scrolling" :c-style="tIframex0x14ComputedData.cStyle"></t-iframe></div>
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
   standenterid: "",
   wasteDestination: "",
   industryParkName: "",
   isInIndustryPark: "",
   lat: "",
   lon: "",
   pwxkz: "",
   productState: "",
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
tTextx0x0: {
defaultStyle: {
            default: {"width":"126px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"2px","top":"280px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"生态状态",
editable:false,
cStyle:{"wrapper":{"default":{"width":"126px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"2px","top":"280px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"126px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"2px","top":"348px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"是否位于工业园区",
editable:false,
cStyle:{"wrapper":{"default":{"width":"126px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"2px","top":"348px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"269px","height":"32px","color":"var(--t-white)","position":"unset","left":"518px","top":"314px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"269px","height":"32px","color":"var(--t-white)","position":"unset","left":"518px","top":"314px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"398px","top":"314px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"纬度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"398px","top":"314px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"269px","height":"32px","color":"var(--t-white)","position":"unset","left":"518px","top":"280px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"269px","height":"32px","color":"var(--t-white)","position":"unset","left":"518px","top":"280px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"269px","height":"32px","color":"var(--t-white)","position":"unset","left":"518px","top":"348px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"269px","height":"32px","color":"var(--t-white)","position":"unset","left":"518px","top":"348px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"398px","top":"280px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"排污许可证",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"398px","top":"280px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"398px","top":"348px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"所属工业园名称",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"398px","top":"348px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"269px","height":"32px","color":"var(--t-white)","position":"unset","left":"128px","top":"314px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"269px","height":"32px","color":"var(--t-white)","position":"unset","left":"128px","top":"314px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px"}}}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"269px","height":"32px","color":"var(--t-white)","position":"unset","left":"128px","top":"382px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"269px","height":"32px","color":"var(--t-white)","position":"unset","left":"128px","top":"382px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px"}}}, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"126px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"2px","top":"314px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"经度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"126px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"2px","top":"314px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"126px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"2px","top":"382px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"固废危废去向",
editable:false,
cStyle:{"wrapper":{"default":{"width":"126px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"2px","top":"382px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"269px","height":"32px","color":"var(--t-white)","position":"unset","left":"128px","top":"280px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"269px","height":"32px","color":"var(--t-white)","position":"unset","left":"128px","top":"280px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px","animationName":""}}}, 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"269px","height":"32px","color":"var(--t-white)","position":"unset","left":"128px","top":"348px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"269px","height":"32px","color":"var(--t-white)","position":"unset","left":"128px","top":"348px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px","animationName":""}}}, 
 },
},
tIframex0x14: {
defaultStyle: {
            default: {"width":"786px","height":"286px","position":"unset","left":"1px","top":"-17px","backgroundColor":"rgba(133, 142, 179, 0)"},
            
            },
 default: { 
 
src:"",
srcdoc:"<!--\n * @Author: lvzhixin\n * @Date: 2024-05-30 13:33:18\n * @LastEditTime: 2025-07-15 15:47:17\n * @LastEditors: yanglili\n * @Description: File Info\n-->\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>污染过程分析</title>\n    <link rel=\"shortcut icon\" href=\"assets/images/favicon.ico\" />\n    <!-- vue 这里最终应该下载一个稳定版本 -->\n    <script src=\"./resources/vue.min.js\"><\/script>\n\n    <!-- socket插件 -->\n    <script src=\"./resources/socket.io.js\"><\/script>\n    <!-- lodash插件 -->\n    <script src=\"./resources/lodash.min.js\"><\/script>\n\n    <!-- 引入样式 -->\n    <link\n      rel=\"stylesheet\"\n      href=\"./resources/element-plus/element-plus.min.css\"\n    />\n    <!-- 引入组件库 -->\n    <script src=\"./resources/element-plus/element-plus.min.js\"><\/script>\n    <script src=\"./resources/element-plus/zhCn.js\"><\/script>\n\n    <!-- 通信插件mitt https://www.npmjs.com/package/mitt -->\n    <script src=\"./resources/mitt.min.js\"><\/script>\n\n    <!-- HTTP库 -->\n    <script src=\"./resources/axios.min.js\"><\/script>\n\n    <!-- 主题样式 -->\n    <link\n      rel=\"stylesheet\"\n      href=\"./assets/style/themes.css\"\n    />\n\n    <style>\n    body {\n      margin: 0!important;\n    }\n   .info-tag-wrap {\n  position: relative;\n  display: flex;\n  margin: 6px 0 2px 0;\n  width: 100%;\n  min-height: 230px;\n}\n\n.tag-wrap {\n  width: 100%;\n  overflow: hidden;\n  transition: 0.5s;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.tag-row {\n  display: flex;\n  gap: 5px;\n  margin-bottom: 2px;\n}\n\n.tag-item {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n  // border: 1px solid #e5e5e5;\n  padding: 2px 6px;\n  // border-radius: 5px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n\n.label {\n  color: #fff;\n  font-size: 15px;\n}\n\n.info-tag {\n  height: 22px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  background: rgba(90, 99, 255, 0.1);\n  color: rgba(90, 99, 255, 1);\n  line-height: 20px;\n}\n    </style>\n  </head>\n\n  <body class=\"蓝色版\">\n    <div id=\"app\"></div>\n\n    <script>\n      /**\n       * 这里定义全局使用的变量、方法\n       */\n      const {\n        createApp,\n        computed,\n        ref,\n        reactive,\n        toRefs,\n        onBeforeMount,\n        onMounted,\n        onBeforeUpdate,\n        onUpdated,\n        onBeforeUnmount,\n        onUnmounted,\n        onErrorCaptured,\n        onRenderTracked,\n        onRenderTriggered,\n        watch,\n        provide,\n        inject,\n        nextTick,\n      } = Vue;\n\n      \n      const serviceBaseUrl = 'http://27.36.118.5:8888/service/serviceinterface/search/run.action';\n\n      // 房间号\n      const roomId = localStorage.getItem(\"lxtSocketRoom\");\n\n      // 主题\n      const themeName = localStorage.getItem(\"lxtTheme\");\n\n      const bodyDom = document.querySelector(\"body\");\n      if (bodyDom && themeName) {\n        bodyDom.classList.add(themeName);\n      }\n      \n      /**\n       * 这里入口组件内容\n       */\n      const MainComponent = {\n        template:\n          // 默认页面 ———— 一直显示 页面中的组件根据显示条件显示\n        `\n          <div class=\"info-tag-wrap\">\n        <div class=\"tag-wrap\" :style=\"{ maxHeight: isExpand ? '30px' : '1000px'}\">\n            <!-- 第一行：管理分类和动态清单 -->\n            <template v-for=\"(item, index) in state.tagList\" :key=\"index\">\n            <div class=\"tag-row\" v-if=\"['管理级别', '污染类别'].includes(item.label)\">\n              <div class=\"tag-item\">\n                <span class=\"label\">{{ item.label }}</span>\n                <div\n                  v-for=\"(tag, index1) in item.tagList\"\n                  :key=\"index1\"\n                  class=\"info-tag\"\n                  :style=\"{ backgroundColor: getTagColor(index1).bgColor, color: getTagColor(index1).color}\"\n                >\n                  {{ tag }}\n                </div>\n              </div>\n          </div>\n            </template>\n          <template v-for=\"(item, index) in state.tagList\" :key=\"index\">\n          <div class=\"tag-row\" v-if=\"['涉气档案','涉水标签','涉土标签', '涉危标签'].includes(item.label)\">\n            <!-- 第二行：涉土标签和涉危标签 -->\n              <div class=\"tag-item\">\n                <span class=\"label\">{{ item.label }}</span>\n                <div\n                  v-for=\"(tag, index1) in item.tagList\"\n                  :key=\"index1\"\n                  class=\"info-tag\"\n                  :style=\"{ backgroundColor: getTagColor(index1).bgColor, color: getTagColor(index1).color}\"\n                >\n                  {{ tag }}\n                </div>\n              </div>\n          </div>\n        </template>\n\n          <!-- 第三行：其他标签 -->\n          <!-- 其他标签：每个标签单独一行 -->\n          <template v-for=\"(item, index) in state.tagList\" :key=\"index\">\n            <div\n              v-if=\"!['管理级别', '污染类别', '涉气档案','涉水标签','涉土标签', '涉危标签'].includes(item.label)\"\n              class=\"tag-row\"\n            >\n              <div class=\"tag-item\" style=\"width: 100%\">\n                <span class=\"label\">{{ item.label }}</span>\n                <div\n                  v-for=\"(tag, index1) in item.tagList\"\n                  :key=\"index1\"\n                  class=\"info-tag\"\n                  :style=\"{ backgroundColor: getTagColor(index1).bgColor, color: getTagColor(index1).color}\"\n                >\n                  {{ tag }}\n                </div>\n              </div>\n            </div>\n          </template>\n        </div>\n        <!-- <div ref=\"tagChartRef\" class=\"tag-chart\"></div> -->\n      </div>\n        `,\n        setup() {\n          // 获取缓存里的鹿小图全局变量数据\n          const lxtGlobal = localStorage.getItem(\"lxtGlobal\")\n            ? JSON.parse(localStorage.getItem(\"lxtGlobal\"))\n            : {};\n\n          const rootEmitter = mitt();\n\n          let global = reactive(\n            /* 插入应用级别的全局变量 相当于store中的rootData */\n            /* globalVariableStart */\n            {\n              socketIp:\n                lxtGlobal.socketIp || \"http://192.168.0.202:7777/socketPath\",\n              socketPath: lxtGlobal.socketPath || \"/socketPath\",\n              socketRoom: lxtGlobal.socketRoom || roomId || \"admin\",\n            }\n            /* globalVariableEnd */\n          );\n\n          let state = reactive({\n            isSocketConnect: false, // socket 是否连接\n            tagList: [],\n            standenterId: '59EC01021AC9448E81BFB39AB73A0BEE',\n          });\n\n          // 创建 socket 连接\n          let socket = null;\n          if (global.socketIp) {\n            const options = {};\n            if (global?.socketPath) {\n              options.path = global.socketPath;\n            }\n            socket = io(global.socketIp, options);\n          }\n\n          provide(\"root\", {\n            ...toRefs(global),\n            rootEmit: rootEmitter.emit, // mitt 发送\n            rootOn: rootEmitter.on, // mitt 接收\n            rootOff: rootEmitter.off, // mitt 移除\n            rootSocket: socket, // socket 实例\n          });\n\n          /**\n           * 监听修改全局变量事件\n           * @param obj 修改后的变量\n           */\n          rootEmitter.on(\"rootData:change\", (obj) => {\n            global = _.set(global, obj.key, obj.value);\n\n            if (global.socketIp && global.socketRoom) {\n              // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息\n              socket.emit(\"message\", {\n                room: global.socketRoom, // 房间号\n                type: \"internalType:ChangeGlobalValue\", // 需要保证此类型唯一性\n                data: obj,\n              });\n            }\n          });\n\n          /**\n           * 连接成功时进入对应的房间\n           */\n          if (socket) {\n            socket.on(\"connect\", function () {\n              if (global.socketIp && global.socketRoom) {\n                // 进入房间\n                socket.emit(\"join-room\", global.socketRoom);\n                state.isSocketConnect = true;\n                socket.emit(\"message\", {\n                room: global.socketRoom, // 房间号\n                type: \"getStandenterId\", // 需要保证此类型唯一性\n              });\n\n              }\n            });\n          }\n\n          /**\n           * 接收到 socket 消息时触发\n           * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}\n           */\n          if (socket) {\n            socket.on(\"message\", function (data) {\n              console.log(data, '我收到消息啦');\n              \n              // socket 监听全局变量的变化，然后合并值\n              if (data.type === \"internalType:ChangeGlobalValue\") {\n                // 合并 globa 的值\n                global = _.set(global, data.data.key, data.data.value);\n              } else if(data.type === 'setStandenterId') {\n                state.standenterId = data.data.standenterId;\n                getBaseInfoTagsData();\n              }\n              else {\n                // 发送消息，通知其他页面\n                rootEmitter.emit(\"rootSocket:change\", data);\n              }\n            });\n          }\n\n          // 标签随机颜色\n        const colorList = [\n          {\n            bgColor: '#FFF2E5',\n            color: '#FF7B00',\n          },\n          {\n            bgColor: '#EEEFFF',\n            color: '#5A63FF',\n          },\n          {\n            bgColor: '#E9F5E5',\n            color: '#23A100',\n          },\n          {\n            bgColor: '#FFE9E9',\n            color: '#FF2C2C',\n          },\n        ];\n\n          /**\n            * 获取标签颜色\n            * @param index 标签索引\n            */\n           const getTagColor = (index) => colorList[index % colorList.length];\n\n          \n           /**\n            * 获取固定源基本信息标签\n            */\n           const getBaseInfoTagsData = () => {\n            return new Promise((resolve, reject) => {\n             axios.get(`https://stfs.sthj.fs.gdgov.cn/gdyTag/ext/tags?standenterId=${state.standenterId}`,{\n              headers: {\n                'userToken': localStorage.getItem('token'),\n              }\n             }).then(response => {\n                const { code, data } = response.data;\n                if (code === 200 && data) {\n                  for (const key in data) {\n                   if (data[key].length > 0) {\n                     state.tagList.push({\n                       label: key,\n                       tagList: data[key].split(','),\n                     });\n                   }\n                  }\n                }\n                resolve();\n              })\n                 .catch(error => {\n                   console.error(error);\n                   reject(error);\n                 });\n              }).catch((error) => {\n              // 失败的操作\n              console.error(error);\n            });\n           }\n\n \n           // 监听 socket 房间的变化\n           watch(\n             () => global.socketRoom,\n             (val, oldVal) => {\n               if (socket) {\n                 // 离开房间\n                 socket.emit(\"leave-room\", oldVal);\n                 // 进入房间\n                 socket.emit(\"join-room\", val);\n               }\n             }\n           );\n \n\n           onMounted(async () => {\n           })\n \n           onBeforeUnmount(() => {\n             // 离开房间\n             socket.emit(\"leave-room\", global.socketRoom);\n             // 断开连接\n             socket.disconnect();\n           });\n \n           return {\n             state,\n             getTagColor\n           };\n        },\n      };\n\n      const app = createApp(MainComponent);\n      /* 下面的操作是去掉控制台Vue输出的警告信息  如果想开启警告信息可以把这个空函数注释掉 */\n      app.config.warnHandler = function (msg, vm, trace) {\n        // 空函数，不做任何处理\n      };\n      app\n        .use(ElementPlus, {\n          size: \"small\",\n        })\n        .mount(\"#app\");\n    <\/script>\n  </body>\n</html>\n",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"786px","height":"286px","position":"unset","left":"1px","top":"-17px","backgroundColor":"rgba(133, 142, 179, 0)"}}}, 
 },
},
});
const getBaseInfoData = () => {
setTimeout(() => {
  getBaseInfo();
}, 800)
};
const initData = () => {

  state.standenterid = global.businessDialog.dialogParmas.STANDENTERID;
};
// 接口函数
const getBaseInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"standenterid":state.standenterid,"interfaceId":"43a55db4e5c24e3066362ab0011df033"},}).then((res) => {
     // 成功的操作
     
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let { data } = res.data;
  state.productState = data.STATUS_TEXT || '--';
  state.pwxkz = data.LICENSENUM || '--';
  state.lon = data.LONGITUDE || '--';
  state.lat = data.LATITUDE || '--';
  state.industryParkName = data.INDUSTRIAL || '--';
  state.isInIndustryPark = data.ISPARK || '--';
  state.wasteDestination = data.JSDWZYM || '--'
} 
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-baseInfo', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-baseInfo', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initData();
// 执行自定义方法
getBaseInfoData();
/* 接收socket.io消息 */
const onSocketChange6ctb1md1md4dsmipbc20 = function (data) {
if(data.type === "getStandenterId"){
try{
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setStandenterId", // 消息名称
data: {"standenterId":state.standenterid}, // 发送的数据
});
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange6ctb1md1md4dsmipbc20);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange6ctb1md1md4dsmipbc20);
});
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTextx0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0.default, componentState.tTextx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tIframex0x14ComputedData = computed(() => _.merge({}, componentState.tIframex0x14.default, componentState.tIframex0x14?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tTextx0x0ComputedData,
tTextx0x1ComputedData,
tTextx0x2ComputedData,
tTextx0x3ComputedData,
tTextx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tTextx0x8ComputedData,
tTextx0x9ComputedData,
tTextx0x10ComputedData,
tTextx0x11ComputedData,
tTextx0x12ComputedData,
tTextx0x13ComputedData,
tIframex0x14ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-baseInfo {
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
width: 788px;
height: 468px;
background-color: rgba(0,0,0,0);
}
.t-l-c-baseInfo .baseInfo-t-text-0-0 {
position: absolute !important;
top: 280px;
left: 2px;
width: 126px;
height: 32px;
pointer-events: auto;
}

.t-l-c-baseInfo .baseInfo-t-text-0-1 {
position: absolute !important;
top: 348px;
left: 2px;
width: 126px;
height: 32px;
pointer-events: auto;
}

.t-l-c-baseInfo .baseInfo-t-text-0-2 {
position: absolute !important;
top: 314px;
left: 518px;
width: 269px;
height: 32px;
pointer-events: auto;
}

.t-l-c-baseInfo .baseInfo-t-text-0-3 {
position: absolute !important;
top: 314px;
left: 398px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-baseInfo .baseInfo-t-text-0-4 {
position: absolute !important;
top: 280px;
left: 518px;
width: 269px;
height: 32px;
pointer-events: auto;
}

.t-l-c-baseInfo .baseInfo-t-text-0-5 {
position: absolute !important;
top: 348px;
left: 518px;
width: 269px;
height: 32px;
pointer-events: auto;
}

.t-l-c-baseInfo .baseInfo-t-text-0-6 {
position: absolute !important;
top: 280px;
left: 398px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-baseInfo .baseInfo-t-text-0-7 {
position: absolute !important;
top: 348px;
left: 398px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-baseInfo .baseInfo-t-text-0-8 {
position: absolute !important;
top: 314px;
left: 128px;
width: 269px;
height: 32px;
pointer-events: auto;
}

.t-l-c-baseInfo .baseInfo-t-text-0-9 {
position: absolute !important;
top: 382px;
left: 128px;
width: 269px;
height: 32px;
pointer-events: auto;
}

.t-l-c-baseInfo .baseInfo-t-text-0-10 {
position: absolute !important;
top: 314px;
left: 2px;
width: 126px;
height: 32px;
pointer-events: auto;
}

.t-l-c-baseInfo .baseInfo-t-text-0-11 {
position: absolute !important;
top: 382px;
left: 2px;
width: 126px;
height: 32px;
pointer-events: auto;
}

.t-l-c-baseInfo .baseInfo-t-text-0-12 {
position: absolute !important;
top: 280px;
left: 128px;
width: 269px;
height: 32px;
pointer-events: auto;
}

.t-l-c-baseInfo .baseInfo-t-text-0-13 {
position: absolute !important;
top: 348px;
left: 128px;
width: 269px;
height: 32px;
pointer-events: auto;
}

.t-l-c-baseInfo .baseInfo-t-iframe-0-14 {
position: absolute !important;
top: -17px;
left: 1px;
width: 786px;
height: 286px;
pointer-events: auto;
}
</style>
