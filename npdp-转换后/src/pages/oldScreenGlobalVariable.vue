<template>
  <div id="t-l-c-oldScreenGlobalVariable" class="t-l-c-oldScreenGlobalVariable" ><t-iframe id="t-iframe-e7b2.e59da031e" class="oldScreenGlobalVariable-t-iframe-0-0"  :src="tIframex0x0ComputedData.src" :srcdoc="tIframex0x0ComputedData.srcdoc" :scrolling="tIframex0x0ComputedData.scrolling" :c-style="tIframex0x0ComputedData.cStyle"></t-iframe></div>
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
import { TIframe } from '@ths/design';

export default {
  components: {
    TIframe,
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
            default: {"width":"0px","height":"0px","left":"0px","top":"0px"},
            
            },
 default: { 
 
src:"#",
srcdoc:"<!--\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>旧版全局变量</title>\n</head>\n\n<body>\n  <div class=\"main\" style=\"background: rgb(255, 255, 255, 0);\">\n\n  </div>\n  <script>\n    //@ sourceURL=旧版全局变量参数-变量.js\n    //获取lego全局变量\n    const legoGlobalParamsToHtml = JSON.parse(localStorage.lxtGlobal)\n    // #region 交互消息重构\n\n    // 定义大屏的地址，即使websocket的服务器地址\n    var socketServer = legoGlobalParamsToHtml.webSocketUrl;\n    // 比如嵌入iframe的地址：https://www.baidu.com?wsClientCode=#wsClientCode#，此处即定义的传参名称\n    var wsClientCode = localStorage.lxtSocketRoom + \"_\";\n    var clientCode = wsClientCode\n    // #endregion 交互消息重构\n\n  \n\n  <\/script>\n  <script type=\"text/javascript\" src=\"/view/assets/components/sockjs/dist/sockjs.js\"><\/script>\n  <script type=\"text/javascript\" src=\"/view/assets/components/sockjs/dist/websocket.js\"><\/script>\n  <script src=\"/view/assets/components/datav/js/htmlTool.js\"><\/script>\n  <script src=\"/view/assets/components/datav/js/jquery-3.3.1.min.js\"><\/script>\n  <script src=\"/view/assets/components/datav/js/tview-tools.js\"><\/script>\n\n-->\n  <!--==================大气环境===========-->\n\n  <!--\n  <script>\n    //@ sourceURL=旧版全局变量参数处理.js\n\n    //初始化全局变量\n    const SERVICE_URL = legoGlobalParamsToHtml.serviceBaseUrl + \"/service\";\n    htmlTool.setParamToGlobalParams(\"SERVICE_URL\", SERVICE_URL)\n    const ths_defaultRegionCode = legoGlobalParamsToHtml.regionaQuery.regionCode;\n    htmlTool.setParamToGlobalParams(\"thsDefaultRegionCode\", ths_defaultRegionCode);\n    htmlTool.setParamToGlobalParams(\"REGION_CODE\", ths_defaultRegionCode);\n    htmlTool.setParamToGlobalParams(\"POINT_CODE\", ths_defaultRegionCode);\n    htmlTool.setParamToGlobalParams(\"POINT_TYPE\", ths_defaultRegionCode.substr(4, 2) === '00' ? '12' : '13'); \n    htmlTool.setParamToGlobalParams(\"enter_url\", legoGlobalParamsToHtml.enterUrl);\n    // ---------------------------------------------大气公共参数处理部分-------------------------------------------------\n    var airConfig = {\n      AIR_MAX_TIME: '', //最新小时时间\n      AIR_MAX_DATE: '', //最新日数据时间\n      AIR_MAX_MODEL_TIME: '', //最新预报数据的起报时间\n      AIR_MAX_YEAR: '', //最新日数据时间\n      AIR_ALARM_START_TIME: '', //报警查询-开始时间\n      AIR_ALARM_END_TIME: '', //报警查询-结束时间\n      AIR_MONITOR_TIME: '', //当前选择小时\n      AIR_MONITOR_DATE: '', //当前选择日\n      AIR_MAX_DATE_KH: '',\n      AIR_DATE_TYPE: 'HOUR', //是小时数据还是日数据\n      AIR_POLLUTE_CODE: '', //污染物\n      AIR_MODEL_TIME: '', //最新预报数据的起报时间\n      MAX_MONITOR_TIME_ALARM: '' //最新报警时间\n    };\n      //GIS场景对应的全局变量定义\n      var TOPIC_SCENES = [\n        {\n            name: \"one_map_gdyds_water\",\n            sceneParams: {\n                \"defaultTypeCode\": \"region\",\n                \"POLLUTE_TYPE_NAME\": \"IS_FS_GDY\"\n            }\n        },\n        {\n            name: \"one_map_out_water\",\n            sceneParams: {\n                \"DATASOURCE\": \"环境统计\",\n                \"POLLUTE_CODE\": \"W01018\",\n                \"INTERFACE_ID_MAX_YEAR\": \"1a5349446bd3149c3e6ad19f30422a33\"\n            }\n        },\n        {\n            name: \"one_map_out_air\",\n            sceneParams: {\n                \"DATASOURCE\": \"环境统计\",\n                \"POLLUTE_CODE\": \"A21026\",\n                \"INTERFACE_ID_MAX_YEAR\": \"1a5349446bd3149c3e6ad19f30422a33c\"\n            }\n        },\n        //以下部分为水\n        {\n            name: \"onemap_manual_surfacewater\",\n            sceneParams: {\n                showLink: false,\n                tracingType: \"source\", //可取值emission和source\n                autoZoom: true\n            }\n        },\n        {\n            name: \"onemap_manual_drinkingwater\",\n            sceneParams: {\n                showLink: false,\n                tracingType: \"source\", //可取值emission和source\n                autoZoom: true\n            }\n        },\n        {\n            name: \"onemap_manual_waterfunc\",\n            sceneParams: {\n                showLink: false,\n                tracingType: \"source\", //可取值emission和source\n                autoZoom: true\n            }\n        },\n        {\n            name: \"onemap_blackwater\",\n            sceneParams: {\n                showLink: false,\n                tracingType: \"source\", //可取值emission和source\n                autoZoom: true\n            }\n        },\n        {\n            name: \"onemap_automoni\",\n            sceneParams: {\n                showLink: false,\n                tracingType: \"source\", //可取值emission和source\n                autoZoom: true\n            }\n        },\n        {\n            name: \"onemap_outlet\",\n            sceneParams: {\n                showLink: false,\n                tracingType: \"source\", //可取值emission和source\n                autoZoom: true\n            }\n        },\n        {\n            name: \"onemap_controlunit\",\n            sceneParams: {\n                \"defaultTypeCode\": \"wsystem\",\n                isShowWsystemOnly: true,\n                showLink: false,\n                tracingType: \"source\", //可取值emission和source\n                autoZoom: true\n            }\n        },\n        {\n            name: \"onemap_emiss\",\n            sceneParams: {\n                showLink: false,\n                tracingType: \"source\", //可取值emission和source\n                autoZoom: true\n            }\n        },\n        //以下部分为大气\n        {\n            name: \"onemap_airctl_situation\",\n            sceneParams: {\n                \"from\": 'situation',\n                autoZoom: true\n            }\n        },\n        {\n            name: \"onemap_airctl_trend\",\n            sceneParams: {\n                \"from\": 'trend'\n            }\n        },\n        {\n            name: \"onemap_airctl_weather\",\n            sceneParams: {\n                \"from\": 'weather'\n            }\n        },\n        {\n            name: \"onemap_airctl_emissionalarm\",\n            sceneParams: {\n                \"from\": 'emissionalarm'\n            }\n        },\n        {\n            name: \"onemap_airctl_pollutionsource\",\n            sceneParams: {\n                \"from\": 'pollutesource'\n            }\n        },\n        {\n            name: \"onemap_airtarget_target\",\n            sceneParams: {\n                \"from\": 'target',\n                \"MONITOR_TIME\": airConfig.AIR_MAX_DATE_KH\n            }\n        },\n        {\n            name: \"onemap_airtarget_aqi\",\n            sceneParams: {\n                \"from\": 'air_aqi'\n            }\n        }\n    ];\n\n\n      //菜单点击消息触发\n      function clickMenuId(msg) {\n          if(msg && msg.data){\n              let data = msg.data[0];\n              if(data){\n                  const extendField = data.EXT1 ? JSON.parse(data.EXT1) : {};\n                  const parentMenuName = data.RES_PATH[0].RES_NAME;\n                  // type 字段不存在则代表是专题  extendField?.resCode\n                  if (!extendField.type) {\n                      var msgTemp = buildSocketMessage(parentMenuName,extendField.resCode);\n                      if(msgTemp){\n                        //切换菜单时，根据REGION_CODE重新初始化，大气全局变量POINT_CODE和POINT_TYPE\n                        var REGION_CODE = htmlTool.getParamFromGlobalParams(\"REGION_CODE\");\n                        if (!REGION_CODE) {\n                            REGION_CODE = htmlTool.getParamFromGlobalParams(\"thsDefaultRegionCode\");\n                        }\n                        htmlTool.setParamToGlobalParams(\"POINT_CODE\", REGION_CODE);\n                        htmlTool.setParamToGlobalParams(\"POINT_TYPE\", REGION_CODE.substr(4, 2) === '00' ? '12' : '13');\n                        sendWebsocketMessage(msgTemp);\n                        console.log(\"兼容view全局变量-开始发送消息: \", msgTemp);\n                      }\n                  }\n              }\n          }\n      }\n      //构建消息内容\n      function buildSocketMessage(parentMenuName, sceneName) {\n        var data = new Array();\n        var scene = null;\n        for (let i = 0; i < TOPIC_SCENES.length; i++) {\n            if (TOPIC_SCENES[i].name === sceneName) {\n              scene = TOPIC_SCENES[i];\n              break;\n            }\n        }\n        if (scene == null) {\n            return;\n        }\n        //获取场景的默认参数，如果存在，则追加的socket消息中\n        if (scene.sceneParams) {\n            //大气模块-追加大气初始化参数\n            if (parentMenuName=== '大气环境') {\n                scene.sceneParams.airConfig = airConfig;\n            }\n            data.push({\n                code: \"SCENE_PARAMS\",\n                shareCode: \"SCENE_PARAMS\",\n                runtimeValue: JSON.stringify(scene.sceneParams)\n            });\n        }\n        return data;\n      \n      }\n\n    //设置全局参数\n    function setAirConfigToGlobalParams () {\n      var scene = {\n        sceneParams:{}\n      };\n      htmlTool.setParamToGlobalParams(\"airConfig\", JSON.stringify(airConfig));\n      scene.sceneParams.airConfig = airConfig;\n      sendWebsocketMessage([{\n         code: \"SCENE_PARAMS\",\n         shareCode: \"SCENE_PARAMS\",\n         runtimeValue: JSON.stringify(scene.sceneParams)\n      }]);\n      localStorage.setItem(\"airConfig\", JSON.stringify(airConfig));\n    }\n\n    //大气公共参数初始化\n    function initAirDate () {\n      var thsDefaultRegionCode = ths_defaultRegionCode;\n      //部署在省、市时，则查市数据的最新时间；部署在区县时，则查区县数据的最新时间\n      var POINT_TYPE = thsDefaultRegionCode.substr(4, 2) === '00' ? '12' : '13';\n      $.ajax({\n        url: SERVICE_URL +\n          '/serviceinterface/search/run.action?interfaceId=02baaa182ee9c497723e824119675849&token=dcp',\n        type: \"POST\",\n        data: {\n          'REGION_CODE': thsDefaultRegionCode,\n          \"POINT_TYPE\": POINT_TYPE\n        },\n        async: false,\n        cache: false,\n        success: function (returnJson) {\n          console.log('首页-左侧菜单-大气-最新时间初始化...', returnJson);\n          //查询大气小时、日、预报数据的最新时间\n          if (returnJson && returnJson.data && returnJson.data.length > 0) {\n            returnJson.data.forEach(time => {\n              if (time.DATE_TYPE == 'HOUR') {\n                airConfig.AIR_MAX_TIME = time.MAX_TIME.substr(0, 13);\n              } else if (time.DATE_TYPE == 'DAY') {\n                airConfig.AIR_MAX_DATE = time.MAX_TIME.substr(0, 10);\n                airConfig.AIR_MAX_YEAR = airConfig.AIR_MAX_DATE ? airConfig.AIR_MAX_DATE.substr(0, 4) : '';\n              } else if (time.DATE_TYPE == 'FORECAST') {\n                airConfig.AIR_MAX_MODEL_TIME = time.MAX_TIME.substr(0, 10);\n              }\n            })\n            //当前选中时间-初始化\n            airConfig.AIR_MONITOR_TIME = airConfig.AIR_MAX_TIME;\n            airConfig.AIR_MONITOR_DATE = airConfig.AIR_MAX_DATE;\n            airConfig.AIR_MODEL_TIME = airConfig.AIR_MAX_MODEL_TIME;\n          }\n        }\n      });\n      //达标现状最新时间\n      $.ajax({\n        url: SERVICE_URL +\n          '/serviceinterface/search/run.action?interfaceId=346e3e65838e484bf9df6078f354e3a3&token=dcp',\n        type: \"POST\",\n        data: {\n          'REGION_CODE': thsDefaultRegionCode,\n          'POINT_TYPE': POINT_TYPE,\n          'LENGTH_IN_TIME':4\n        },\n        async: false,\n        cache: false,\n        success: function (returnJson) {\n          if (returnJson && returnJson.head.state === \"true\" && returnJson.data && returnJson.data.length > 0) {\n            airConfig.AIR_MAX_DATE_KH = returnJson.data[0].MAX_TIME;\n          }\n        }\n      });\n      //报警最新时间\n      $.ajax({\n        url: SERVICE_URL +\n          '/serviceinterface/search/run.action?interfaceId=deca0304e6c938ffef9ebb8ddd7b2835&token=dcp',\n        type: \"POST\",\n        data: {\n          'REGION_CODE': thsDefaultRegionCode\n        },\n        async: false,\n        cache: false,\n        success: function (returnJson) {\n          if (returnJson && returnJson.head.state === \"true\" && returnJson.data && returnJson.data.length > 0) {\n            airConfig.MAX_MONITOR_TIME_ALARM = returnJson.data[0].ALARM_MONITOR_TIME.substring(0, 13);\n            ;\n            if (returnJson.data[0].MAX_MONITOR_TIME) {\n              airConfig.AIR_ALARM_END_TIME = returnJson.data[0].MAX_MONITOR_TIME.substring(0, 13);\n              let date = new Date(airConfig.AIR_ALARM_END_TIME + ':00:00');\n              date.setDate(date.getDate() - 30);\n              let year = date.getFullYear();\n              let month = date.getMonth() + 1;\n              let day = date.getDate();\n              let hours = date.getHours();\n              airConfig.AIR_ALARM_START_TIME = year + '-' + (month <= 9 ? ('0' + month) : month) + '-' + (day <=\n                9 ? ('0' + day) : day) + ' ' + (hours <= 9 ? ('0' + hours) : hours);\n            }\n          }\n        }\n      });\n      //城市字典\n        $.ajax({\n            url: SERVICE_URL +\n                '/serviceinterface/search/run.action?interfaceId=a8bb2c86d48737b8b42c0eb028e0fcc4&token=dcp&pageSize=100',\n            type: \"POST\",\n            data: {\n                'PARENT_REGION_CODE': thsDefaultRegionCode\n            },\n            async: false,\n            cache: false,\n            success: function (returnJson) {\n                if (returnJson && returnJson.head.state === \"true\" && returnJson.data && returnJson.data.length > 0) {\n                    airConfig.AIR_REGION_DIC = [];\n                    returnJson.data.forEach(e => {\n                        airConfig.AIR_REGION_DIC.push({\n                            value: e.REGION_CODE,\n                            allAreaCode: e.AREA_ALL_CODE,\n                            content: e.REGION_NAME\n                        });\n                    })\n                }\n            }\n        });\n    }\n\n\n  <\/script>\n\n-->\n\n  <!--===============消息处理================-->\n  <!--\n  <script>\n    //@ sourceURL=旧版全局变量消息处理.js\n\n    ths.initSocket(clientCode, function (messageStr) {\n      var message = JSON.parse(messageStr);\n      if (message.type.toLowerCase() === \"runinteractive\" && message.data) {\n        var msgs = message.data;\n        //处理消息\n        console.log(\"首页-左侧图层菜单-开始处理消息：\" + JSON.stringify(msgs));\n        msgs.forEach(function (msg) {\n          switch (msg.shareCode) {\n            case 'menuId':\n              //此处105b6b22-2853-4f65-b25f-ffee0148a8bc为大气环境的一级菜单ID\n              if (msg.runtimeValue == '105b6b22-2853-4f65-b25f-ffee0148a8bc') {\n                var regionCode = htmlTool.getParamFromGlobalParams(\"REGION_CODE\");\n                if (regionCode.substr(4, 2) != \"00\") {\n                  htmlTool.setParamToGlobalParams(\"POINT_TYPE\", \"13\");\n                }\n                //大气模块-重新初始化大气时间参数\n                initAirDate();\n                setAirConfigToGlobalParams();\n              }\n              break;\n            case 'mapLoaded':\n              initAirDate(); //初始化大气业务日期\n              setAirConfigToGlobalParams();\n              break;\n            case 'AIR_MONITOR_TIME':\n              airConfig.AIR_MONITOR_TIME = msg.runtimeValue;\n              setAirConfigToGlobalParams();\n              break;\n            case 'AIR_MONITOR_DATE':\n              airConfig.AIR_MONITOR_DATE = msg.runtimeValue;\n              setAirConfigToGlobalParams();\n              break;\n            case 'AIR_DATE_TYPE':\n              airConfig.AIR_DATE_TYPE = msg.runtimeValue;\n              setAirConfigToGlobalParams();\n              break;\n            case 'AIR_POLLUTE_CODE':\n              airConfig.AIR_POLLUTE_CODE = msg.runtimeValue;\n              setAirConfigToGlobalParams();\n              break;\n            case 'AIR_MODEL_TIME':\n              airConfig.AIR_MODEL_TIME = msg.runtimeValue;\n              setAirConfigToGlobalParams();\n              break;\n            case 'POINT_CODE':\n                htmlTool.setParamToGlobalParams(\"POINT_CODE\", msg.runtimeValue);\n                break;\n            case 'POINT_TYPE':\n                htmlTool.setParamToGlobalParams(\"POINT_TYPE\", msg.runtimeValue);\n                break;\n            case 'clickMenuId':\n                // 消息处理\n                clickMenuId(msg.runtimeValue);\n                break;\n            default:\n              break;\n          }\n        });\n      }\n    });\n\n    //重构发送消息方法\n    function sendWebsocketMessage (data) {\n      var messaJson = {\n        \"id\": \"9afe593ab2581529e72bbe8408426fa5\",\n        \"type\": \"runInteractive\",\n        \"data\": data\n      }\n      $.ajax({\n        url: socketServer + \"/interact/\" + clientCode + \"/message\",\n        type: \"POST\",\n        data: { message: JSON.stringify(messaJson) },\n        async: true,\n        cache: false,\n        success: function (returnJson) {\n\n        }\n      });\n      console.log('鹿小图指标成功发出消息:' + data);\n    }\n  <\/script>\n</body>\n\n</html>\n\n-->",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"0px","height":"0px","left":"0px","top":"0px"}}}, 
 },
},
});
const clickMenuSendWebSockedMsg = (data) => {
if(global.webSocketUrl){
    /* 发送webSocket消息，处理老大屏全局变量问题，在兼容view全局变量模块监听该消息进行处理 */
    if (rootData?.sendMessage
           && data.operation==="add") {
      rootData?.sendMessage({
        id: global.socketRoom, // 房间号
        type: "runInteractive", // 消息名称 不能修改
        data: [
          { 
            runtimeValue: data,
            shareCode:"clickMenuId"
          }
        ]
      });

      console.log("左侧菜单点击发送消息给兼容view全局变量模块",data);
    }
}

};
const clickTopMenuSendMsg = (data) => {
if(global.webSocketUrl){
    /* 发送webSocket消息，处理老大屏点击大气环境重新初始化全局变量 */
    if (rootData?.sendMessage
           && data.menuId==="105b6b22-2853-4f65-b25f-ffee0148a8bc") {
      rootData?.sendMessage({
        id: global.socketRoom, // 房间号
        type: "runInteractive", // 消息名称 不能修改
        data: [
          { 
            runtimeValue: data.menuId,
            shareCode:"menuId"
          }
        ]
      });

      console.log("一级菜单点击发送消息给兼容view全局变量模块",data);
    }
}
};
 function handleWindowResize() {
                            setPageScale('t-l-c-oldScreenGlobalVariable', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
rootData.rootOn('rootSocket:change', (data)=>{
if(data.type === "showRightView"){
try{
// 执行自定义方法
clickMenuSendWebSockedMsg(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
});
/* 接收socket.io消息 */
rootData.rootOn('rootSocket:change', (data)=>{
if(data.type === "loadMenuData"){
try{
// 执行自定义方法
clickTopMenuSendMsg(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
});
onMounted(() => {
setPageScale('t-l-c-oldScreenGlobalVariable', global.appScaleMode, 'normal');
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
.t-l-c-oldScreenGlobalVariable {
position: relative;
overflow: hidden;
--theme-color: var(--t-brand8);
--theme-color-opacity-10: rgba(var(--t-brand8), .1);
--theme-color-opacity-15: rgba(var(--t-brand8), .15);
--theme-color-opacity-40: rgba(var(--t-brand8), .4);
--theme-color-opacity-60: rgba(var(--t-brand8), .6);
--theme-color-opacity-80: rgba(var(--t-brand8), .8);
--theme-color-opacity-90: rgba(var(--t-brand8), .9);
pointer-events: none;
position: Static;
z-index: 1;
filter: ;
width: 0px;
height: 0px;
background-color: rgba(0,0,0,0);
}
.t-l-c-oldScreenGlobalVariable .oldScreenGlobalVariable-t-iframe-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 0px;
height: 0px;
pointer-events: auto;
}
</style>
