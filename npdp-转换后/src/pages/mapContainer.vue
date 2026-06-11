<template>
  <div id="t-l-c-mapContainer" class="t-l-c-mapContainer" ><t-iframe id="t-iframe-893f.c77f5f17d" class="mapContainer-t-iframe-0-0"  :src="replaceCssVariables(filterData(state.mapUrl, componentPropBindingMap?.['t-iframe-893f.c77f5f17d']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x0ComputedData.srcdoc" :scrolling="tIframex0x0ComputedData.scrolling" :c-style="tIframex0x0ComputedData.cStyle" :socket-url="replaceCssVariables(filterData(global.socketIp, componentPropBindingMap?.['t-iframe-893f.c77f5f17d']['socketUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :room-id="replaceCssVariables(filterData(global.socketRoom, componentPropBindingMap?.['t-iframe-893f.c77f5f17d']['roomId'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-iframe><t-image-base v-if="state.greenThemeCircleBgVisible === true" id="t-image-base-a37b.7f2378e29" class="mapContainer-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle"></t-image-base><t-image-base v-if="state.blueThemeCircleBgVisible === true" id="t-image-base-838c.a56622a71" class="mapContainer-t-image-base-0-4"  :src="tImageBasex0x4ComputedData.src" :fit="tImageBasex0x4ComputedData.fit" :c-style="tImageBasex0x4ComputedData.cStyle"></t-image-base><t-rect id="t-rect-e98c.c99702a8a" class="mapContainer-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle"></t-rect><t-image-base v-if="global.theme === '绿色版'" id="t-image-base-43c5.9b3da447c" class="mapContainer-t-image-base-0-6"  :src="tImageBasex0x6ComputedData.src" :fit="tImageBasex0x6ComputedData.fit" :c-style="tImageBasex0x6ComputedData.cStyle"></t-image-base><t-image-base v-if="global.theme === '蓝色版'" id="t-image-base-82b7.a32ab859e" class="mapContainer-t-image-base-0-7"  :src="tImageBasex0x7ComputedData.src" :fit="tImageBasex0x7ComputedData.fit" :c-style="tImageBasex0x7ComputedData.cStyle"></t-image-base></div>
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
import { TIframe, TImageBase, TRect } from '@ths/design';

export default {
  components: {
    TIframe,
    TImageBase,
    TRect,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-iframe-893f.c77f5f17d":{"attributeName":"tIframex0x0","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]},"socketUrl":{"filters":[]},"roomId":{"filters":[]}},"t-rect-c6ad.b5a33bb86":{"attributeName":"tRectx0x1"},"t-rect-1926.7cecf0455":{"attributeName":"tRectx0x2"},"t-image-base-a37b.7f2378e29":{"attributeName":"tImageBasex0x3","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-838c.a56622a71":{"attributeName":"tImageBasex0x4","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-e98c.c99702a8a":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-43c5.9b3da447c":{"attributeName":"tImageBasex0x6","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-82b7.a32ab859e":{"attributeName":"tImageBasex0x7","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}}};
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
   community_addr: "",
   PKID: "",
   baseInfo: {"point_name":"","monitortime":"","longitude":"","latitude":""},
   blueThemeCircleBgVisible: false,
   greenThemeCircleBgVisible: false,
   mapUrl: "",
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
            default: {"width":"1920px","height":"1080px","top":"0px","left":"0px"},
            
            },
 default: { 
 
src:"",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","top":"0px","left":"0px"}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"1423px","height":"1423px","top":"-130px","left":"100px","animationName":"custom8fbc969caf7bf","animationDuration":"20s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","pointerEvents":"none","position":"unset"},
            
            },
 default: { 
 
src:"assets/images/2023-09-08/e129ad3fdee74b7c937b3dba4b74f673.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"1423px","height":"1423px","top":"-130px","left":"100px","animationName":"custom8fbc969caf7bf","animationDuration":"20s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","pointerEvents":"none","position":"unset"}}}, 
 },
},
tImageBasex0x4: {
defaultStyle: {
            default: {"width":"1423px","height":"1423px","top":"-130px","left":"100px","animationName":"custom8fbc969caf7bf","animationDuration":"20s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","pointerEvents":"none","position":"unset","filter":"hue-rotate(60deg) "},
            
            },
 default: { 
 
src:"assets/images/2023-09-08/e129ad3fdee74b7c937b3dba4b74f673.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"1423px","height":"1423px","top":"-130px","left":"100px","animationName":"custom8fbc969caf7bf","animationDuration":"20s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","pointerEvents":"none","position":"unset","filter":"hue-rotate(60deg) "}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"1920px","height":"127px","pointerEvents":"none","position":"unset","left":"0px","top":"0px","background":"linear-gradient(180deg, rgba(7, 9, 8, 0.5) 0%, rgba(7, 9, 8, 0) 100%)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1920px","height":"127px","pointerEvents":"none","position":"unset","left":"0px","top":"0px","background":"linear-gradient(180deg, rgba(7, 9, 8, 0.5) 0%, rgba(7, 9, 8, 0) 100%)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x6: {
defaultStyle: {
            default: {"width":"1956px","height":"1105px","left":"-19px","top":"-23px","position":"unset","pointerEvents":"none","animationName":""},
            
            },
 default: { 
 
src:"assets/images/2023-06-06/a8ed19298d9f40589a489aae74c6b293.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"1956px","height":"1105px","left":"-19px","top":"-23px","position":"unset","pointerEvents":"none","animationName":""}}}, 
 },
},
tImageBasex0x7: {
defaultStyle: {
            default: {"width":"1920px","height":"1085px","left":"-1px","top":"-3px","position":"unset","pointerEvents":"none","animationName":"","filter":"hue-rotate(36deg) "},
            
            },
 default: { 
 
src:"assets/images/2025-06-27/dbda72a6e79f4fb69788c547647aaf56.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1085px","left":"-1px","top":"-3px","position":"unset","pointerEvents":"none","animationName":"","filter":"hue-rotate(36deg) "}}}, 
 },
},
});
const setMapUrl = () => {
let region_code_province = global.regionaQuery.regionCode.substring(0, 2) + '0000'
let regionCode = global.regionaQuery.regionCode.substring(0, 6)
let loginName = localStorage.getItem('lastLoginName')
let userToken = localStorage.getItem('user')
const hideMap = getQueryString('hideMap')
const monitorTime = getQueryString('monitorTime')
const dialogParams = getQueryString('pointInfo');
const dialogType = getQueryString('dialogType');

const switchType = getQueryString('switchType');
const pointValueFromUrl = getQueryString('pointValue');
console.log(switchType, pointValueFromUrl, 3334)
// 点位编码
let pointValue = '';
// 空气站的POINT_TYPE
let pointType = '';
// 若地址栏里传了需要切换的区域
if (pointValueFromUrl && switchType === 'openDialog') {
  if (pointValueFromUrl.indexOf('{') > -1) {
    try {
      const pointValueFromUrlParsed = JSON.parse(pointValueFromUrl);
      if (pointValueFromUrlParsed) {
        pointValue = pointValueFromUrlParsed.pointCode;
        pointType = pointValueFromUrlParsed.pointType;
      }
    } catch (err) {
      console.error('地址栏参数pointValue解析失败', err);
    }
  } else {
    pointValue = pointValueFromUrl;
  }
}

// 原来鹿小图的
// state.mapUrl = `${global.mapBaseUrl}?appID=z1zb16bukmk1bwvn&appType=2D&appName=%E4%B8%80%E5%BC%A0%E5%9B%BE%E4%B8%BB%E4%BD%93&REGION_CODE=${global.regionaQuery.regionCode}&thsDefaultRegionCode=${global.regionaQuery.regionCode}&vsessionid=4CF6A737BFF6386975D370FAFBE0C02A&socketPath=/socketPath&wsClientCode=${global.socketRoom}_&region_code_province=` + region_code_province + `&regionCode=` + regionCode+`&theme=`+encodeURI(global.theme)+`&loginName=`+loginName+`&userToken=`+userToken;

// 佛山
// state.mapUrl = `${global.mapBaseUrl}?appID=e0eedfbd28fe426087094359fa275448&appType=2D&appName=%E4%B8%80%E5%BC%A0%E5%9B%BE%E4%B8%BB%E4%BD%93&REGION_CODE=${global.regionaQuery.regionCode}&thsDefaultRegionCode=${global.regionaQuery.regionCode}&vsessionid=4CF6A737BFF6386975D370FAFBE0C02A&socketPath=/socketPath&wsClientCode=${global.socketRoom}_&region_code_province=` + region_code_province + `&regionCode=` + regionCode+`&theme=`+encodeURI(global.theme)+`&loginName=`+loginName+`&userToken=`+userToken;

// 佛山-regionCode-暂时写死，去掉&REGION_CODE=440600000000 参数
// state.mapUrl = `${global.mapBaseUrl}?appID=e0eedfbd28fe426087094359fa275448&appType=2D&appName=%E4%B8%80%E5%BC%A0%E5%9B%BE%E4%B8%BB%E4%BD%93&thsDefaultRegionCode=440600000000&vsessionid=4CF6A737BFF6386975D370FAFBE0C02A&socketPath=/socketPath&wsClientCode=${global.socketRoom}_&region_code_province=` + region_code_province + `&regionCode=440600000000` +`&theme=`+encodeURI(global.theme)+`&loginName=`+loginName+`&userToken=`+userToken;
const params = {
  appID: '6db7a3cc92ed4ccfaed4c65927c0709e',
  appType: '2D',
  appName: '一张图主体',
  thsDefaultRegionCode: global.regionaQuery.regionCode,
  vsessionid: '4CF6A737BFF6386975D370FAFBE0C02A',
  socketPath: '\/socketPath',
  wsClientCode: `${global.socketRoom}_`,
  region_code_province,
  regionCode: global.regionaQuery.regionCode,
  // theme: global.theme,
  theme: global.activeTheme,
  loginName,
  userToken,
  mapEPrintNoOpenPage: true,
  REGION: global.regionaQuery.regionCode,
}
if (pointValue) {
  params.pointValue = pointValue;
}
if (pointType) {
  params.pointType = pointType;
}
// 查询参数
const searchParams = new URLSearchParams(params);

if (hideMap === 'true') {
  state.mapUrl = '';
  if (dialogType === '空气站') {
    global.air.timeValue = monitorTime.replace('+', ' ');
    global.airGlobalVariables.realTimeAlarm.dateValue = monitorTime.replace('+', ' ');
    /* 发送socket消息 */
    rootData.rootSocket.emit('message', {
      room: global.socketRoom,
      // 房间号
      type: "showLegoDialog",
      // 消息名称
      data: {
        "dialogName": "airOverviewSiteForHourDayComponent",
        dialogParams: JSON.parse(dialogParams || '{}')
      },
      // 发送的数据
    });
  }

  if (dialogType === '地表水' || dialogType === '饮用水' || dialogType === '水自动站') {
    rootData.rootSocket.emit(
      'message',  // 固定的消息名称，不能修改
      {
        room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
        type: 'runInteractive',  // 消息类型名称
        data: [
          {
            shareCode: 'showLegoDialog',
            runtimeValue: 'true',
          },
          {
            code: 'dialogName',
            shareCode: 'dialogName',
            runtimeValue: 'waterDialogFractureSurfaceComponent',
          },
          {
            code: 'dialogParmas',
            shareCode: 'dialogParmas',
            runtimeValue: {
              monitorTime: monitorTime.replace('+', ' '),
              assessType: "monthly",
              dialogType: dialogType === '水自动站' ? 'autoHour' : '',
              // assessType: pageParams.serviceParams.ASSESSTYPE,
              pointCode: pointValue,
              showSource: true, // 显示溯源，默认不传不显示
              dataSourcetype: 'surfaceWater', // 数据源类型，会控制弹框内的图表显示内容
            },
          },
        ]
      }
    );
  }

  if (dialogType === '巡河交水') {
      console.log('巡河交水巡河交水巡河交水巡河交水巡河交水巡河交水巡河交水巡河交水');
    rootData.rootSocket.emit(
      'message',  // 固定的消息名称，不能修改
      {
        room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
        type: 'runInteractive',  // 消息类型名称
        data: [
          {
            shareCode: 'showLegoDialog',
            runtimeValue: 'true',
          },
          {
            code: 'dialogName',
            shareCode: 'dialogName',
            runtimeValue: 'waterDialogFractureSurfaceComponent',
          },
          {
            code: 'dialogParmas',
            shareCode: 'dialogParmas',
            runtimeValue: {
              monitorTime: monitorTime.replace('+', ' '),
              assessType: "monthly",
              dialogType: dialogType === '巡河交水' ? 'xhjs' : '',
              // assessType: pageParams.serviceParams.ASSESSTYPE,
              pointCode: pointValue,
              showSource: false, // 显示溯源，默认不传不显示
              dataSourcetype: 'surfaceWater', // 数据源类型，会控制弹框内的图表显示内容
            },
          },
        ]
      }
    );
  }
  if (dialogType === '水环境-评价结果') {
    document.getElementById('t-l-c-root').style.width = "1000px";
    document.getElementById('t-l-c-root').style.height = "910px";
    document.getElementById('t-l-c-root').style.transform = "unset";

    global.businessDialog.dialogParmas = { regionCode: pointValueFromUrl + '000000', time: monitorTime, assessType: 'culmulate' }
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: "createDialog", // 消息名称
      data: {
        "params": {
          "title": "评价结果分析", "maxHeight": "860px", "maxWidth": "995px", "minHeight": "860px", "minWidth": "995px", "contentComName": "shjPjjgfxComponent", hiddenScaleButton: true, fullScreen: hideMap === "true",
        }
      }, // 发送的数据
    });
  }

} else {
  // state.mapUrl = `${global.mapBaseUrl}?${decodeURIComponent(searchParams.toString())}`;
  state.mapUrl = 'http://localhost:4000/mapgo5.0/map2D/index.html?appID=6db7a3cc92ed4ccfaed4c65927c0709e&appType=2D';
}
// state.mapUrl = `${global.mapBaseUrl}?${decodeURIComponent(searchParams.toString())}`;
// console.log(`${global.mapBaseUrl}?${searchParams.toString()}`, 77768)
// state.mapUrl = `${global.mapBaseUrl}?appID=6db7a3cc92ed4ccfaed4c65927c0709e&appType=2D&appName=%E4%B8%80%E5%BC%A0%E5%9B%BE%E4%B8%BB%E4%BD%93&thsDefaultRegionCode=${global.regionaQuery.regionCode}&vsessionid=4CF6A737BFF6386975D370FAFBE0C02A&socketPath=/socketPath&wsClientCode=${global.socketRoom}_&region_code_province=` + region_code_province + `&regionCode=${global.regionaQuery.regionCode}` +`&theme=`+encodeURI(global.theme)+`&loginName=`+loginName+`&userToken=`+userToken+'&mapEPrintNoOpenPage=true&REGION_CODE=' + global.regionaQuery.regionCode;
// console.log(state.mapUrl, 77768)

};
const setCircleBgVisible = () => {
/* 若展示圆环背景 */
if (global.circleBgVisible) {
  if (global.theme === '绿色版') {
    // 展示绿色环形背景
    state.greenThemeCircleBgVisible = true;
    // 隐藏蓝色环形背景
    state.blueThemeCircleBgVisible = false;
  } else if (global.theme === '蓝色版') {
    // 隐藏绿色环形背景
    state.greenThemeCircleBgVisible = false;
    // 展示蓝色环形背景
    state.blueThemeCircleBgVisible = true;
  }
} else {
  // 隐藏绿色环形背景
  state.greenThemeCircleBgVisible = false;
  // 隐藏蓝色环形背景
  state.blueThemeCircleBgVisible = false;
}
};
const watchZnxlDrag = () => {
/**
 * 监听智能小鹿机器人及智能小鹿的消息面板的拖拽消息，
 * 控制界面上的iframe的鼠标事件禁用，防止影响平滑的拖拽效果
 */

/**
 * 监听智能小鹿机器人或智能小鹿的消息面板拖拽开始
 */
window.addEventListener('drag-znxl-start', () => {
  // console.log('监听到智能小鹿开始拖拽')
  // 地图Iframe Dom
  const mapIframeDom = document.getElementById('t-iframe-893f.c77f5f17d');
  if (mapIframeDom) {
    mapIframeDom.style.pointerEvents = 'none';
  }
  // 综合查询Iframe Dom
  const zhcxIframeDom = document.getElementById('t-iframe-5571.278c93f1');
  if (zhcxIframeDom) {
    zhcxIframeDom.style.pointerEvents = 'none';
  }
  // 左侧专题菜单的iframe DOM
  const leftMenuIframeDom = document.getElementById('t-iframe-32a6.a99f8be3');
  if (leftMenuIframeDom) {
    leftMenuIframeDom.style.pointerEvents = 'none';
  }
});

/**
 * 监听智能小鹿机器人或智能小鹿的消息面板拖拽结束
 */
window.addEventListener('drag-znxl-end', () => {
  // console.log('监听到智能小鹿开始拖拽')
  // 地图Iframe Dom
  const mapIframeDom = document.getElementById('t-iframe-893f.c77f5f17d');
  if (mapIframeDom) {
    mapIframeDom.style.pointerEvents = 'auto';
  }
  // 综合查询Iframe Dom
  const zhcxIframeDom = document.getElementById('t-iframe-5571.278c93f1');
  if (zhcxIframeDom) {
    zhcxIframeDom.style.pointerEvents = 'auto';
  }
  // 左侧专题菜单的iframe DOM
  const leftMenuIframeDom = document.getElementById('t-iframe-32a6.a99f8be3');
  if (leftMenuIframeDom) {
    leftMenuIframeDom.style.pointerEvents = 'auto';
  }
})
};
const getQueryString = (name) => {
const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
const r = window.location.search.substring(1).match(reg);
if (r != null) return decodeURI(r[2]);
return null;
};
const setRight = () => {
/* 关闭弹窗 */
if (global.dialogInstance) {
  global.dialogInstance.close();
}

rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'switchRightContainerName',  // 消息类型名称
    data: 'controlManagementComponent'
  }
);
global.airGlobalVariables.fireworks.surroundingAnalysis.activePointInfo = state.baseInfo;
console.log('火点')
};
const initParams = (data) => {
console.log(data, '接收火点消息');
if (data.layerId === '火点') {
  state.PKID = global.featureData.PKID;
  state.community_addr = global.featureData.COMMUNITY_ADDR;
  const init = async () => {
    await apiRegistry.getListData.request();
    await setRight();
  }

  init();
}

};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"community_addr":"state.community_addr","PKID":"state.PKID","interfaceId":"dfb75cdbd9cee3106c250feb0f24f8e5"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"community_addr":state.community_addr,"PKID":state.PKID,"interfaceId":"dfb75cdbd9cee3106c250feb0f24f8e5"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"community_addr":state.community_addr,"PKID":state.PKID,"interfaceId":"dfb75cdbd9cee3106c250feb0f24f8e5"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     if(res?.data?.data?.length){
  state.baseInfo = res?.data?.data[0]
  state.baseInfo.station = res?.data?.data[0].point_name || ''
}
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
                            setPageScale('t-l-c-mapContainer', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-mapContainer', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setMapUrl();
// 执行自定义方法
setCircleBgVisible();
// 执行自定义方法
watchZnxlDrag();
});
/* 接收socket.io消息 */
const onSocketChange031f3f4936364f2cb794 = function (data) {
if(data.type === "featureClicked"){
try{
// 执行自定义方法
initParams(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange031f3f4936364f2cb794);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange031f3f4936364f2cb794);
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tIframex0x0ComputedData = computed(() => _.merge({}, componentState.tIframex0x0.default, componentState.tIframex0x0?.[state.screenSize]));

 const tImageBasex0x3ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x3.default, componentState.tImageBasex0x3?.[state.screenSize]));

 const tImageBasex0x4ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x4.default, componentState.tImageBasex0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tImageBasex0x6ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x6.default, componentState.tImageBasex0x6?.[state.screenSize]));

 const tImageBasex0x7ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x7.default, componentState.tImageBasex0x7?.[state.screenSize]));

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
tImageBasex0x3ComputedData,
tImageBasex0x4ComputedData,
tRectx0x5ComputedData,
tImageBasex0x6ComputedData,
tImageBasex0x7ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-mapContainer {
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
height: 1300px;
width: 1920px;
background-color: rgba(0,0,0,0);
}
.t-l-c-mapContainer .mapContainer-t-iframe-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 1920px;
height: 1080px;
pointer-events: auto;
}

.t-l-c-mapContainer .mapContainer-t-image-base-0-3 {
position: absolute !important;
top: -130px;
left: 100px;
width: 1423px;
height: 1423px;
pointer-events: none;
}

.t-l-c-mapContainer .mapContainer-t-image-base-0-4 {
position: absolute !important;
top: -130px;
left: 100px;
width: 1423px;
height: 1423px;
pointer-events: none;
}

.t-l-c-mapContainer .mapContainer-t-rect-0-5 {
position: absolute !important;
top: 0px;
left: 0px;
width: 1920px;
height: 127px;
pointer-events: none;
}

.t-l-c-mapContainer .mapContainer-t-image-base-0-6 {
position: absolute !important;
top: -23px;
left: -19px;
width: 1956px;
height: 1105px;
pointer-events: none;
}

.t-l-c-mapContainer .mapContainer-t-image-base-0-7 {
position: absolute !important;
top: -3px;
left: -1px;
width: 1920px;
height: 1085px;
pointer-events: none;
}

@keyframes custom8fbc969caf7bf {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
100% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(360deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
</style>
