<template>
  <div id="t-l-c-waterWiseTagFilterPanel" class="t-l-c-waterWiseTagFilterPanel" ><t-iframe id="t-iframe-e6be.e493bd925" class="waterWiseTagFilterPanel-t-iframe-0-0"  :src="tIframex0x0ComputedData.src" :srcdoc="tIframex0x0ComputedData.srcdoc" :scrolling="tIframex0x0ComputedData.scrolling" :c-style="tIframex0x0ComputedData.cStyle" :params="tIframex0x0ComputedData.params"></t-iframe><t-rect id="t-rect-1aef.82265f179" class="waterWiseTagFilterPanel-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-text-common id="t-text-common-f3ac.9dbe57924" class="waterWiseTagFilterPanel-t-text-common-0-2"  :label="tTextCommonx0x2ComputedData.label" :editable="tTextCommonx0x2ComputedData.editable" :c-style="tTextCommonx0x2ComputedData.cStyle"></t-text-common><t-rect id="t-rect-4a7c.b210e5579" class="waterWiseTagFilterPanel-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1762841108574"></t-rect></div>
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
import { TIframe, TRect, TTextCommon } from '@ths/design';

export default {
  components: {
    TIframe,
    TRect,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-iframe-e6be.e493bd925":{"attributeName":"tIframex0x0","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]},"params":{"filters":[]}},"t-rect-1aef.82265f179":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-f3ac.9dbe57924":{"attributeName":"tTextCommonx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4a7c.b210e5579":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   topicCode: "4dcb0dd1-bf14-4bb1-9bbe-d5771030b2f6",
   serviceUrl: "",
   tagParams: {},
   ylOptions: [],
   glOptions: [],
   gkmdOptions: [],
   vocsOptions: [],
   ylVal: [],
   glVal: [],
   gkmdVal: [],
   vocsVal: [],
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
            default: {"width":"450px","height":"855px","position":"unset","left":"0px","top":"43px"},
            
            },
 default: { 
 
src:"",
srcdoc:"<!--\n * @Author: lvzhixin\n * @Date: 2024-05-30 13:33:18\n * @LastEditTime: 2025-12-05 10:58:37\n * @LastEditors: jiulingxiaoxin\n * @Description: File Info\n-->\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\" />\n    <title>我的应用名称</title>\n    <link href=\"assets/images/favicon.ico\" rel=\"shortcut icon\" />\n    <!-- vue 这里最终应该下载一个稳定版本 -->\n    <script src=\"./resources/vue.min.js\"><\/script>\n\n    <!-- socket插件 -->\n    <script src=\"./resources/socket.io.js\"><\/script>\n\n    <!-- lodash插件 -->\n    <script src=\"./resources/lodash.min.js\"><\/script>\n\n    <!-- 引入样式 -->\n    <link href=\"./resources/element-plus/element-plus.min.css\" rel=\"stylesheet\" />\n    <!-- 引入组件库 -->\n    <script src=\"./resources/element-plus/element-plus.min.js\"><\/script>\n    <script src=\"./resources/element-plus/zhCn.js\"><\/script>\n\n    <!-- 通信插件mitt https://www.npmjs.com/package/mitt -->\n    <script src=\"./resources/mitt.min.js\"><\/script>\n\n    <!-- HTTP库 -->\n    <script src=\"./resources/axios.min.js\"><\/script>\n\n    <!-- 主题样式 -->\n    <link href=\"./assets/style/themes.css\" rel=\"stylesheet\" />\n\n    <style>\n        body {\n            margin: 0;\n        }\n\n        body,\n        html,\n        #app {\n            height: 100%;\n        }\n\n        /* 蓝色主题变量 */\n        body.蓝色版 {\n            --theme-color: #00EEFF;\n            --theme-font-color: #e3f2fd;\n            --theme-background-color: rgba(0, 30, 60, 0.9);\n            --theme-panel-background-color: rgba(21, 57, 155, 0);\n            --theme-selector-background-color: #004FB0;\n            --theme-border-color: #1e88e5;\n            --theme-hover-color: #64b5f6;\n        }\n\n        .close-btn {\n            position: absolute;\n            top: 27px;\n            right: 27px;\n            width: 16px;\n            height: 16px;\n            cursor: pointer;\n        }\n\n        .close-btn:hover {\n            opacity: 0.8;\n        }\n\n        /* 暂无数据 */\n        .no-data {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 100%;\n            height: 100vh;\n            max-height: 100vh;\n            color: #fff;\n            font-size: 14px;\n        }\n\n        /* 标签页 */\n        .select-page {\n            position: fixed;\n            left: 0;\n            top: 0;\n            z-index: 999;\n            display: flex;\n            flex-direction: column;\n            justify-content: flex-start;\n            padding: 22px 20px;\n            width: 100%;\n            height: 100vh;\n            max-height: 100vh;\n            box-sizing: border-box;\n            color: #fff;\n        }\n\n        /* 标签前页头部标题 */\n        .select-page .header-title {\n            position: relative;\n            padding-bottom: 22px;\n            font-size: 20px;\n            font-weight: bold;\n            line-height: 24px;\n            letter-spacing: 1.78px;\n            color: var(--theme-font-color);\n        }\n\n        .select-page .header-title::after {\n            position: absolute;\n            left: 0;\n            bottom: 0;\n            content: \"\";\n            display: block;\n            width: 100%;\n            height: 1px;\n            background: linear-gradient(270deg, rgba(174, 255, 201, 0) -1%, rgba(197, 255, 217, 0.5) 50%, rgba(174, 255, 201, 0) 100%, rgba(216, 216, 216, 0) 100%);\n        }\n\n        .page-header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n\n        .page-header .header-close {\n            cursor: pointer;\n        }\n\n        .page-header .header-title {\n            font-size: 18px;\n            line-height: 24px;\n        }\n\n        .select-page .page-tab {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            flex-shrink: 0;\n            margin-top: 24px;\n            padding: 0 20px;\n            width: 100%;\n            height: 30px;\n            border-bottom: 1px solid rgba(0, 255, 255, .21);\n        }\n\n        .select-page .page-tab span {\n            height: 100%;\n            font-size: 14px;\n            color: var(--theme-font-color);\n            cursor: pointer;\n            display: inline-block;\n            width: fit-content;\n            text-align: center;\n        }\n\n        .page-tab-active {\n            color: var(--theme-color) !important;\n            border-bottom: 1px solid var(--theme-color);\n        }\n\n        .type-name {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin: 20px 0 16px;\n\n        }\n\n        .type-content {\n\n            margin-bottom: 20px;\n        }\n\n        .type-name .type-word {\n            font-size: 16px;\n            color: var(--theme-font-color);\n        }\n\n        .type-span {\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n            flex-wrap: wrap;\n            overflow-y: hidden;\n            justify-content: space-between;\n        }\n\n        .type-span::after {\n            content: '';\n            height: 0;\n            width: auto;\n            flex-grow: 10;\n        }\n\n        .page-other {\n            flex-grow: 1;\n            overflow-y: auto;\n            margin-bottom: 10px;\n        }\n\n        .page-other::-webkit-scrollbar {\n            /*滚动条整体样式*/\n            width: 5px;\n            /*高宽分别对应横竖滚动条的尺寸*/\n            height: 1px;\n        }\n\n        .page-other::-webkit-scrollbar-thumb {\n            /*滚动条里面小方块*/\n            border-radius: 10px;\n            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n            background: #535353;\n        }\n\n        .page-other::-webkit-scrollbar-track {\n            /*滚动条里面轨道*/\n            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n            border-radius: 10px;\n            background: rgba(0, 13, 70, 1);\n        }\n\n        /* 按钮 */\n        .page-button {\n            display: flex;\n            justify-content: flex-end;\n            align-items: center;\n            flex-shrink: 0;\n            height: 52px;\n            padding: 10px 0;\n            color: var(--theme-font-color);\n            margin: 0 -20px -22px;\n            padding-left: 20px;\n            padding-right: 20px;\n        }\n\n        .page-button .reset {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 50px;\n            height: 32px;\n            box-sizing: border-box;\n            margin-right: 12px;\n            background: rgba(30, 136, 229, 0.5);\n            border: 1px solid rgba(30, 136, 229, 0.8);\n            border-radius: 4px;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            font-size: 14px;\n            color: #fff;\n        }\n\n        .page-button .reset:hover {\n            background: rgba(30, 136, 229, 0.7);\n            border-color: rgba(30, 136, 229, 1);\n        }\n\n        .page-button .sure {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 50px;\n            height: 32px;\n            box-sizing: border-box;\n            background: rgba(0, 238, 255, 0.5);\n            border: 1px solid rgba(0, 238, 255, 0.8);\n            border-radius: 4px;\n            cursor: pointer;\n            margin-right: 10px;\n            transition: all 0.3s ease;\n            font-size: 14px;\n            color: #fff;\n        }\n\n        .page-button .sure:hover {\n            background: rgba(0, 238, 255, 0.7);\n            border-color: rgba(0, 238, 255, 1);\n        }\n\n        .important-control .tab-header::after {\n            width: 100%;\n            height: 15px;\n            border-top: 2px solid #293773;\n            border-radius: 15px;\n        }\n\n        .tag-list {\n            display: flex;\n            flex-wrap: wrap;\n            gap: 10px;\n        }\n\n        .tag {\n            border-radius: 4px;\n            padding: 0 10px;\n            border: 1px solid transparent;\n            background: var(--theme-selector-background-color);\n            font-size: 14px;\n            line-height: 34px;\n            text-align: center;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            cursor: pointer;\n        }\n\n        .tag.active {\n            border-color: var(--theme-color);\n            color: var(--theme-color);\n        }\n    </style>\n</head>\n\n<body class=\"蓝色版\" style=\"background: var(--theme-panel-background-color);\">\n<div id=\"app\"></div>\n\n<script>\n    /**\n     * 这里定义全局使用的变量、方法\n     */\n    const {\n        createApp,\n        computed,\n        ref,\n        reactive,\n        toRefs,\n        onBeforeMount,\n        onMounted,\n        onBeforeUpdate,\n        onUpdated,\n        onBeforeUnmount,\n        onUnmounted,\n        onErrorCaptured,\n        onRenderTracked,\n        onRenderTriggered,\n        watch,\n        provide,\n        inject,\n        nextTick\n    } = Vue;\n\n    // 房间号\n    const roomId = localStorage.getItem('lxtSocketRoom');\n\n    // 主题\n    const themeName = localStorage.getItem('lxtTheme');\n\n    const bodyDom = document.querySelector('body');\n    if (bodyDom && themeName) {\n        bodyDom.className = themeName;\n    }\n\n    /**\n     * 根组件内容\n     */\n    const subjectComponent = {\n        template: `\n            <div v-if=\"tagTree.length\" class=\"select-page\">\n                <!-- tab切换（一级筛选条件） -->\n                <div class=\"page-tab\">\n                    <!-- 一级标签内容 -->\n                    <span\n                        v-for=\"(item,index) in tagTree\"\n                        :key=\"item.nodeName\"\n                        class=\"tab-span\"\n                        :class=\"{'page-tab-active'\n                        :tagOneSelect===index}\"\n                        @click=\"changeTagOne(index)\"\n                    >\n                    {{ item.nodeName }}\n                    </span>\n                </div>\n                <!-- 其他筛选条件 -->\n                <div class=\"page-other\">\n                    <template v-for=\"(item,index) in tagTree\" :key=\"item.nodeName\">\n                    <div class=\"page-other-content\" v-if=\"item.children && Array.isArray(item.children) && item.children.length\">\n                        <!-- 全部标签的页面 -->\n                        <div v-for=\"(nItem, nIndex) in item.children\" :key=\"nItem.nodeName + nItem.tagCode + nIndex\">\n                        <div v-if=\"nItem.nodeType==='tag' && nItem.range && Array.isArray(nItem.range) && nItem.range.length\" class=\"type-content\">\n                            <div class=\"type-name\">\n                            <span class=\"type-word\">\n                                {{ nItem.nodeName }}\n                            </span>\n                            </div>\n                            <div class=\"tag-list\">\n                            <div class=\"tag\" :class=\"{ active: (selected[nItem.tagCode] || []).some((val) => val.value === tagItem.value) }\" v-for=\"tagItem in nItem.range\"\n                                :key=\"tagItem.value\" :span=\"6\" :title=\"tagItem.alias\" @click=\"clickTag(tagItem, nItem.tagCode, nItem)\">\n                                {{ tagItem.alias }}\n                            </div>\n                            </div>\n                        </div>\n                        </div>\n                    </div>\n                    </template>\n                </div>\n\n                <!-- 头部 -->\n                <div class=\"page-button\">\n                    <div class=\"reset button-hover-mask\" @click=\"reset()\">\n                    <span>重置</span>\n                    </div>\n                    <div class=\"sure button-hover-mask\" @click=\"doSearch(true)\">\n                    <span>确定</span>\n                    </div>\n                </div>\n            </div>\n            <div v-else class=\"no-data\">暂无数据</div>\n            `,\n        setup() {\n            // 页面内注入全局变量和事件\n            const rootData = inject('root');\n\n            let global = reactive({\n                ...toRefs(rootData)\n            });\n\n            const state = reactive({\n                // 搜索关键词\n                selected: {}, // 修改为对象，按分类管理选中状态\n                tagOneSelect: 0,\n                tagTree: [],\n                topicCode: '', // 主题编码\n            });\n\n            onMounted(async () => {\n                /**\n                 * 监听修改全局变量事件\n                 * @param obj 修改后的变量\n                 */\n                 rootData.rootOn('rootSocket:change', (data) => {\n                    /* 更新筛选面板数据 */\n                    if (data.type === \"updateFitlerPanelData\" && data?.data?.type === 'waterWise') {\n                        console.log(data, 'waterWise 页面挂载');\n                        state.topicCode = data.data?.topicCode;\n                        // 获取列表数据\n                        getTagListData();\n                        state.selected = {}; // 修改为对象，按分类管理选中状态\n                        // 重置选中项\n                        state.tagOneSelect = 0;\n                    }\n                    /* 重置筛选面板选中项 */\n                    if (data.type === \"clearFilterPanelSelectItems\") {\n                        state.selected = {}; // 修改为对象，按分类管理选中状态\n                        // 重置选中项\n                        state.tagOneSelect = 0;\n                    }\n                });\n                // 接收socket消息\n                // await getTagListData();\n            });\n\n            onUnmounted(() => {\n                rootData.rootOff('rootSocket:change');\n            });\n\n            const getTagListData = async () => {\n                if (!state.topicCode) {\n                    return;\n                }\n                // 获取当前选中的主题\n                // const waterTraceSourceActiceTab = localStorage.getItem('waterTraceSourceActiceTab');\n\n                // 使用 URLSearchParams 构造表单数据\n                const params = new URLSearchParams();\n                params.append('interfaceId', '982f4b5298e7d6c89796ffca11f9dacb');\n                params.append('token', 'dcp');\n                params.append('topicCode', state.topicCode);\n                params.append('istree', true);\n\n                await axios({\n                    method: 'post',\n                    url: 'http://192.168.24.106:10157/service/serviceinterface/search/run.action',\n                    data: params,\n                    headers: {\n                        'Content-Type': 'application/x-www-form-urlencoded'\n                    }\n                })\n                    .then(response => {\n                        const data = response.data;\n                        if (data.tags.length) {\n                            state.tagTree = data.tags.filter((val) => val.nodeName !== '前置条件');\n                            state.tagTree.forEach((t, tIndex) => {\n                                if(t.children?.length) {\n                                    t.children.forEach((child, cIndex) => {\n                                        state.tagTree[tIndex].children[cIndex] = {\n                                            ...child,\n                                            nodeName: child.nodeName.split('$')[0],\n                                            nodeCode: child.nodeName.split('$')[1],\n                                        };\n                                    })\n                                }\n                            });\n                        } else {\n                            state.tagTree = [];\n                            state.selected = {};\n                        }\n\n                    })\n                    .catch(error => {\n                        console.log(error);\n                    });\n            }\n\n            const changeTagOne = (index) => {\n                state.tagOneSelect = index;\n            };\n\n            // 重置函数\n            const reset = () => {\n                state.selected = {}; // 重置为空对象，使用tagCode作为键\n                state.tagOneSelect = 0;\n                rootData.rootSocket.emit('message', {\n                    room: global.socketRoom,\n                    type: 'filterTag',\n                    data: {}\n                });\n            };\n\n            // 搜索函数\n            const doSearch = () => {\n                console.log('state.selected:', state.selected);\n\n                // 构建filterTag消息格式\n                const filterTag = {};\n\n                // 遍历选中的标签，按分类ID组织数据\n                Object.keys(state.selected).forEach(tagCode => {\n                    if (state.selected[tagCode] && state.selected[tagCode].length > 0) {\n                        // 将该分类下所有选中标签的value值用$连接\n                        const values = state.selected[tagCode].map(item => item.value);\n                        filterTag[tagCode] = values.join('$');\n                    }\n                });\n\n                // 发送filterTag消息\n                if (Object.keys(filterTag).length > 0) {\n                    rootData.rootSocket.emit('message', {\n                        room: global.socketRoom,\n                        type: 'filterTag',\n                        data: filterTag\n                    });\n                } else {\n                    rootData.rootSocket.emit('message', {\n                        room: global.socketRoom,\n                        type: 'filterTag',\n                        data: {}\n                    });\n                }\n                localStorage.setItem('airFilterTag', JSON.stringify(filterTag));\n            };\n\n            const clickTag = (tag, nodeCode, nItem) => {\n                // 确保该分类的选中数组存在\n                if (!state.selected[nodeCode]) {\n                    state.selected[nodeCode] = [];\n                }\n\n                const index = state.selected[nodeCode].findIndex(item => item.value === tag.value);\n                if (index === -1) {\n                    state.selected[nodeCode].push(tag);\n                } else {\n                    state.selected[nodeCode].splice(index, 1);\n                }\n            };\n\n            return {\n                ...toRefs(state),\n                changeTagOne,\n                reset,\n                doSearch,\n                clickTag,\n            };\n        }\n    };\n\n    /**\n     * 这里入口组件内容\n     */\n    const MainComponent = {\n        template:\n        // 默认页面 ———— 一直显示 页面中的组件根据显示条件显示\n        // '<router-view></router-view>',\n            '<subject-component v-if=\\'isSocketConnect\\'></subject-component>',\n        // '<layer-component></layer-component>',\n        components: {\n            subjectComponent\n            // layerComponent,\n        },\n        setup() {\n            // 获取缓存里的鹿小图全局变量数据\n            const lxtGlobal = localStorage.getItem('lxtGlobal')\n                ? JSON.parse(localStorage.getItem('lxtGlobal'))\n                : {};\n\n            const rootEmitter = mitt();\n\n            let global = reactive(\n                /* 插入应用级别的全局变量 相当于store中的rootData */\n                /* globalVariableStart */\n                {\n                    socketIp:\n                        lxtGlobal.socketIp || 'http://192.168.0.202:7777/socketPath',\n                    socketPath: lxtGlobal.socketPath || '/socketPath',\n                    socketRoom: lxtGlobal.socketRoom || roomId || 'admin'\n                }\n                /* globalVariableEnd */\n            );\n\n            let state = reactive({\n                isSocketConnect: false // socket 是否连接\n            });\n\n            // 创建 socket 连接\n            let socket = null;\n            if (global.socketIp) {\n                const options = {};\n                if (global?.socketPath) {\n                    options.path = global.socketPath;\n                }\n                socket = io(global.socketIp, options);\n            }\n\n            provide('root', {\n                ...toRefs(global),\n                rootEmit: rootEmitter.emit, // mitt 发送\n                rootOn: rootEmitter.on, // mitt 接收\n                rootOff: rootEmitter.off, // mitt 移除\n                rootSocket: socket // socket 实例\n            });\n\n            /**\n             * 监听修改全局变量事件\n             * @param obj 修改后的变量\n             */\n            rootEmitter.on('rootData:change', (obj) => {\n                global = _.set(global, obj.key, obj.value);\n\n                if (global.socketIp && global.socketRoom) {\n                    // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息\n                    socket.emit('message', {\n                        room: global.socketRoom, // 房间号\n                        type: 'internalType:ChangeGlobalValue', // 需要保证此类型唯一性\n                        data: obj\n                    });\n                }\n            });\n\n            /**\n             * 连接成功时进入对应的房间\n             */\n            if (socket) {\n                socket.on('connect', function () {\n                    if (global.socketIp && global.socketRoom) {\n                        // 进入房间\n                        socket.emit('join-room', global.socketRoom);\n                        state.isSocketConnect = true;\n                    }\n                });\n            }\n\n            /**\n             * 接收到 socket 消息时触发\n             * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}\n             */\n            if (socket) {\n                socket.on('message', function (data) {\n                    // socket 监听全局变量的变化，然后合并值\n                    if (data.type === 'internalType:ChangeGlobalValue') {\n                        // 合并 globa 的值\n                        global = _.set(global, data.data.key, data.data.value);\n                    } else {\n                        // 发送消息，通知其他页面\n                        rootEmitter.emit('rootSocket:change', data);\n                    }\n                });\n            }\n\n            // 监听 socket 房间的变化\n            watch(\n                () => global.socketRoom,\n                (val, oldVal) => {\n                    if (socket) {\n                        // 离开房间\n                        socket.emit('leave-room', oldVal);\n                        // 进入房间\n                        socket.emit('join-room', val);\n                    }\n                }\n            );\n\n            onBeforeUnmount(() => {\n                // 离开房间\n                socket.emit('leave-room', global.socketRoom);\n                // 断开连接\n                socket.disconnect();\n            });\n\n            return {\n                ...toRefs(state)\n            };\n        }\n    };\n\n    const app = createApp(MainComponent);\n    /* 下面的操作是去掉控制台Vue输出的警告信息  如果想开启警告信息可以把这个空函数注释掉 */\n    app.config.warnHandler = function (msg, vm, trace) {\n        // 空函数，不做任何处理\n    };\n    app\n        .use(ElementPlus, {\n            size: 'small'\n        })\n        .mount('#app');\n<\/script>\n</body>\n\n</html>\n",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"450px","height":"855px","position":"unset","left":"0px","top":"43px"}}},
params:[], 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"48px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"0px","top":"0px","background":"rgba(0, 0, 0, 0)","fillType":"color","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"48px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"0px","top":"0px","background":"rgba(0, 0, 0, 0)","fillType":"color","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTextCommonx0x2: {
defaultStyle: {
            default: {"width":"98px","height":"25px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-20)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-7px","top":"16px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"标签",
editable:false,
cStyle:{"wrapper":{"default":{"width":"98px","height":"25px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-20)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-7px","top":"16px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"32px","height":"29px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"401px","top":"11px","backgroundImage":"url(assets/images/2022-11-01/08c48e26a0ae41488ecff53b51af226c.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"29px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"401px","top":"11px","backgroundImage":"url(assets/images/2022-11-01/08c48e26a0ae41488ecff53b51af226c.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const saveFilterTag = () => {
rootData.rootOn('rootSocket:change', (data) =>{
    if (data.type === 'filterTag') {
      console.log(data.data, 'filterTag66');
      // 处理逻辑
      localStorage.setItem('airFilterTag', JSON.stringify(data.data))
      // 关闭弹窗
      global.isShowWarningTagFilter = false;
      global.waterGlobalVariables.sourceApportionment.activeTabName = 'pollutionAnalysisComponent';
      // global.waterGlobalVariables.sourceApportionment.selectedTagJson = JSON.stringify(data.data);
      rootData.rootEmit(
        // 固定的消息名称，不能修改
        'rootData:change',
        {
          // 全局变量的键名
          key: 'waterGlobalVariables.sourceApportionment.selectedTagJson',
          // 将要修改的全局变量的键值
          value: JSON.stringify(data.data)
        }
      );

      // 关闭搜索面板
      rootData.rootSocket.emit(
        'message',  // 固定的消息名称，不能修改
        {
          room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
          type: 'changeTagFilterPanelVisible',  // 消息类型名称
          data: {                   // 消息内容，对象格式
            visible: false,
          }
        }
      );
    }
});

};
const onclick1762841108574 = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeTagFilterPanelVisible", // 消息名称
data: {"panelName":"mainPanel"}, // 发送的数据
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 gettagList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"644832d68a17145cd5736d5451cb84d0"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"644832d68a17145cd5736d5451cb84d0"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"644832d68a17145cd5736d5451cb84d0"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['gettagList'] = res.data;
                
     console.log(res)
const tagList = res?.data.tags[0].children.filter(item => item.nodeId === '50962db4370255a14dc8ad6182d9d51c')[0].children;
console.log(tagList.find(item => item.tagCode === '9A376E1453404EA89AA64F645131FBE3'))
state.vocsOptions = tagList.find(item => item.tagCode === '9A376E1453404EA89AA64F645131FBE3').range.map(item => ({label: item.alias, value: item.value }));
state.gkmdOptions = tagList.find(item => item.tagCode === 'F39472B364FA4743801E1D08325A8A99').range.map(item => ({label: item.alias, value: item.value }));
state.glOptions = tagList.find(item => item.tagCode === '1AC0F40F5251607ABCEE017BDF0664FC').range.map(item => ({label: item.alias, value: item.value }));
state.ylOptions = tagList.find(item => item.tagCode === '8AB5FA8F0988409A8DDBDE4CBF650820').range.map(item => ({label: item.alias, value: item.value }));

console.log(state)
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
                            setPageScale('t-l-c-waterWiseTagFilterPanel', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterWiseTagFilterPanel', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tIframex0x0ComputedData = computed(() => _.merge({}, componentState.tIframex0x0.default, componentState.tIframex0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tTextCommonx0x2ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2.default, componentState.tTextCommonx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

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
tIframex0x0ComputedData,
tRectx0x1ComputedData,
tTextCommonx0x2ComputedData,
tRectx0x3ComputedData,
onclick1762841108574,
};
},
}
</script>

<style scoped>
.t-l-c-waterWiseTagFilterPanel {
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
.t-l-c-waterWiseTagFilterPanel .waterWiseTagFilterPanel-t-iframe-0-0 {
position: absolute !important;
top: 43px;
left: 0px;
width: 450px;
height: 855px;
pointer-events: auto;
}

.t-l-c-waterWiseTagFilterPanel .waterWiseTagFilterPanel-t-rect-0-1 {
position: absolute !important;
top: 0px;
left: 0px;
width: 450px;
height: 48px;
pointer-events: auto;
}

.t-l-c-waterWiseTagFilterPanel .waterWiseTagFilterPanel-t-text-common-0-2 {
position: absolute !important;
top: 16px;
left: -7px;
width: 98px;
height: 25px;
pointer-events: auto;
}

.t-l-c-waterWiseTagFilterPanel .waterWiseTagFilterPanel-t-rect-0-3 {
position: absolute !important;
top: 11px;
left: 401px;
width: 32px;
height: 29px;
pointer-events: auto;
}
</style>
