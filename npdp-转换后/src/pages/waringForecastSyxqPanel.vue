<template>
  <div id="t-l-c-waringForecastSyxqPanel" class="t-l-c-waringForecastSyxqPanel" ><t-rect id="t-rect-0911.f9ec9d352" class="waringForecastSyxqPanel-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-component id="t-component-d52b.90df00593" class="waringForecastSyxqPanel-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode"></t-component><t-component id="t-component-6538.bd4ec5b54" class="waringForecastSyxqPanel-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode"></t-component><t-row v-if="global.isShowWarningTagFilter === false" id="t-row-5443.7e7d1c1a1" class="waringForecastSyxqPanel-t-row-0-3"  :c-style="tRowx0x3ComputedData.cStyle" :gutter="tRowx0x3ComputedData.gutter" :justify="tRowx0x3ComputedData.justify" :align="tRowx0x3ComputedData.align"><t-text id="t-text-0d1a.4b7df282f" class="waringForecastSyxqPanel-t-text-0-3-0"  :label="tTextx0x3x0ComputedData.label" :editable="tTextx0x3x0ComputedData.editable" :c-style="tTextx0x3x0ComputedData.cStyle" @click="onclick1734337188119"></t-text><t-text id="t-text-9ff1.92503251d" class="waringForecastSyxqPanel-t-text-0-3-2"  :label="replaceCssVariables(filterData(state.headerInfo.POINT_NAME, componentPropBindingMap?.['t-text-9ff1.92503251d']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x3x2ComputedData.editable" :c-style="tTextx0x3x2ComputedData.cStyle"></t-text><t-text id="t-text-1aa2.670c35704" class="waringForecastSyxqPanel-t-text-0-3-3"  :label="replaceCssVariables(filterData(state.headerInfo.POINT_TYPE_NAME, componentPropBindingMap?.['t-text-1aa2.670c35704']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x3x3ComputedData.editable" :c-style="tTextx0x3x3ComputedData.cStyle"></t-text></t-row></div>
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
import { TComponent, TRect, TRow, TText } from '@ths/design';

export default {
  components: {
    TComponent,
    TRect,
    TRow,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-0911.f9ec9d352":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-d52b.90df00593":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-6538.bd4ec5b54":{"attributeName":"tComponentx0x2","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-row-5443.7e7d1c1a1":{"attributeName":"tRowx0x3","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-0d1a.4b7df282f":{"attributeName":"tTextx0x3x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3de8.a011803c9":{"attributeName":"tTextx0x3x1"},"t-text-9ff1.92503251d":{"attributeName":"tTextx0x3x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-1aa2.670c35704":{"attributeName":"tTextx0x3x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   headerInfo: {"POINT_NAME":"-","POINT_TYPE":"","POINT_TYPE_NAME":"-"},
   sourceParmasState: {},
   parentParams: {"POINT_CODE":""},
   defComponentName: "airSyxqPanelAarmComponent",
   componentName: "airSyxqPanelAarmComponent",
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
            default: {"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"56px","left":"1px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"56px","left":"1px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"899px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"-1px","overflow":"auto","animationName":"","visibility":"hidden"},
            
            },
 default: { 
 
name:"warinTagFilterPanelComponent",
cStyle:{"wrapper":{"default":{"width":"450px","height":"899px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"-1px","overflow":"auto","animationName":"","visibility":"hidden"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/warinTagFilterPanel",
componentName:"warinTagFilterPanelComponent",
pageId:"f2b35f0939d94387955e1be8efdf7adc",
pageCode:"warinTagFilterPanel", 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"450px","height":"831px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"69px","overflow":"auto"},
            
            },
 default: { 
 
name:"TraceabilityContentComponent",
cStyle:{"wrapper":{"default":{"width":"450px","height":"831px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"69px","overflow":"auto"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/TraceabilityContent",
componentName:"TraceabilityContentComponent",
pageId:"1a7ca757b37d4e56b578e1aa0efb7008",
pageCode:"TraceabilityContent", 
 },
},
tRowx0x3: {
defaultStyle: {
            default: {"width":"413px","height":"54px","top":"1px","left":"16px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"413px","height":"54px","top":"1px","left":"16px","position":"unset"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x3x0: {
defaultStyle: {
            default: {"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"19px","left":"14px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"19px","left":"14px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},"hover":{"backgroundColor":"var(--business-theme)"}}}, 
 },
},
tTextx0x3x2: {
defaultStyle: {
            default: {"width":"auto","height":"23px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"18px","left":"73px","position":"unset","animationName":"","marginLeft":"20px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"23px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"18px","left":"73px","position":"unset","animationName":"","marginLeft":"20px"}}}, 
 },
},
tTextx0x3x3: {
defaultStyle: {
            default: {"width":"40px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"152px","top":"19px","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"20px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"12px","marginLeft":"10px","animationName":"","marginTop":"4px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"152px","top":"19px","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"20px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"12px","marginLeft":"10px","animationName":"","marginTop":"4px"}}}, 
 },
},
});
const initPage = () => {
// airSyxqPanelAarmComponent
// airSyxqPanelNoAarmComponent

console.log('大气溯源---initPage')

// 根据此标识，决定展示什么动态组件（已报警、未报警）
if (state.sourceParmasState.componentSourceParmas.isShowAlarmFlag) {
  // 设置当前展示的动态组件
  state.componentName = 'airSyxqPanelAarmComponent';
  // 设置从当月报警列表返回后展示的动态组件
  state.defComponentName = 'airSyxqPanelAarmComponent';
} else {
  // 设置当前展示的动态组件
  state.componentName = 'airSyxqPanelNoAarmComponent';
  // 设置从当月报警列表返回后展示的动态组件
  state.defComponentName = 'airSyxqPanelNoAarmComponent';
}

// console.log('state.componentName', state.componentName, state.defComponentName);


// http://192.168.0.202:7777/view/view/show/index.vm?screenId=f18e26713e417bdd64d0d04fd25bdf16&alarmTime=2021-03-20%2023&endTime=&COUNT_ID=D08E60290BE515B5E0538500A8C01116
// &alarmTime=2021-03-20%2023&endTime=&COUNT_ID=D08E60290BE515B5E0538500A8C01116
state.parentParams = {
  ...state.sourceParmasState.componentSourceParmas,
  alarmTime: state.sourceParmasState.componentSourceParmas.alarmTime || '2022-05-07 13',
  endTime: state.sourceParmasState.componentSourceParmas.endTime || '2022-05-07 16',
  COUNT_ID: state.sourceParmasState.componentSourceParmas.COUNT_ID || 'e540c637-cde3-11ec-8f3e-d839ee064e9b',
  POINT_CODE: state.sourceParmasState.componentSourceParmas.POINT_CODE || '51010501002',
};

console.log('获取传递过来的参数-溯源容器', state.parentParams);

const init = async () => {
  // 获取头部基本信息
  await getHeaderInfo();
};

init();

};
const handleBack = () => {

/* 发送webSocket消息 */
if (rootData?.sendMessage) {
  /*rootData?.sendMessage({
    id: guid(true, 'lego'), // 唯一索引
    type: "runInteractive", // 消息名称
    data: [{
      shareCode: "hiddenTraceDetail",
      runtimeValue: 'true'
    }]
  });*/
  // rootData.rootSocket.emit('message', {
  //   room: global.socketRoom, // 房间号
  //   type: "showAirTraceDetail", // 消息名称
  //   data: [{
  //     shareCode: "hiddenTraceDetail",
  //     runtimeValue: 'true'
  //   }],
  // });
}

/* 发送Socket消息 */
if (rootData?.rootSocket) {
  // 清除溯源
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "closeWarningTraceDetail", // 消息名称
    data: null,
  });
}

rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractiveChange", // 消息名称
  data: [
    {
      "code": "closePointTrace",
      "shareCode": "closePointTrace",
      "defaultValue": "true",
      "runtimeValue": "true"
    }, {
      "code": "hiddenTraceDetail",
      "shareCode": "hiddenTraceDetail",
      "defaultValue": "true",
      "name": "",
      "runtimeValue": "true"
    }
  ]
});

// 清除溯源筛选的标签
rootData.rootEmit(
  // 固定的消息名称，不能修改
  'rootData:change',
  {
    // 全局变量的键名
    key: 'waterGlobalVariables.sourceApportionment.selectedTagJson',
    // 将要修改的全局变量的键值
    value: '{}'
  }
);

};
const getProvider = () => {
const rootData = inject('sourceParmasState');

state.sourceParmasState = rootData;
// console.log(state.sourceParmasState,'sourceParmasState-溯源容器'); // 接收到的值

// {
//     "pointCode": "440306023000002",
//     "pointType": "4",
//     "isShowAlarmFlag": true,
//     "alarmTime": "2021-03-20 23",
//     "traceTime": "2021-03-20 11",
//     "count_id": "D08E60290BE515B5E0538500A8C01116",
//     "aqiLevel": "1",
//     "primPollute": "PM10",
//     "polluteLevel": "良",
//     "dateType": "HOUR",
//     "POINT_CODE": "440306023000002",
//     "lon": "113.847061",
//     "lat": "22.718378",
//     "REGION_CODE": "440306023000002",
//     "endTime": "2021-03-20 11",
//     "COUNT_ID": "D08E60290BE515B5E0538500A8C01116"
// }
};
const handlePanelVisisble = (isFilterPanelShow) => {

const filterPanelDom = document.getElementById('t-component-d52b.90df00593');
const panelDom = document.getElementById('t-component-6538.bd4ec5b54');
// const filterPanelDom = document.getElementById('t-l-c-warinTagFilterPanel');
// const panelDom = document.getElementById('t-l-c-TraceabilityContent');
if (!filterPanelDom || !panelDom) {
  return;
}

// 若展示筛选面板
if (isFilterPanelShow) {
  panelDom.style.visibility = 'hidden';
  filterPanelDom.style.visibility = 'visible';
} else {
  filterPanelDom.style.visibility = 'hidden';
  panelDom.style.visibility = 'visible';
}

};
const onclick1734337188119 = () => {
// 执行自定义方法
handleBack();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeAirSourceTrace", // 消息名称
data: {}, // 发送的数据
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getHeaderInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.businessServiceBaseUrl","params":{"POINT_CODE":"global.warningRightPointCode","interfaceId":"a72ff52d8a2db82b4d36c46b63011669"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.businessServiceBaseUrl,"params":{"POINT_CODE":global.warningRightPointCode,"interfaceId":"a72ff52d8a2db82b4d36c46b63011669"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.businessServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":global.warningRightPointCode,"interfaceId":"a72ff52d8a2db82b4d36c46b63011669"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHeaderInfo'] = res.data;
                
     // 清空原始数据
state.headerInfo = {
  // 点位名称
  POINT_NAME: '-',
  // 点位类型 / 控制级别
  POINT_TYPE: '',
  // 点位类型 / 控制级别 - 文字
  POINT_TYPE_NAME: '-',
};

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.headerInfo.POINT_NAME = data.data.POINT_NAME || '-';
  state.headerInfo.POINT_TYPE = data.data.POINT_TYPE || '';
  state.headerInfo.POINT_TYPE_NAME = data.data.POINT_TYPE_NAME || '-';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空原始数据
state.headerInfo = {
  // 点位名称
  POINT_NAME: '-',
  // 点位类型 / 控制级别
  POINT_TYPE: '',
  // 点位类型 / 控制级别 - 文字
  POINT_TYPE_NAME: '-',
};
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [global.warningRightPointCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getHeaderInfo', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-waringForecastSyxqPanel', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
const onSocketChange2eac5ecbb8424336983b = function (data) {
if(data.type === "changeTagFilterPanelVisible"){
try{
// 执行自定义方法
handlePanelVisisble(data.data.visible);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange2eac5ecbb8424336983b);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange2eac5ecbb8424336983b);
});
onUnmounted(() => {
// 页面离开时的操作
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeAirSourceTrace", // 消息名称
data: {}, // 发送的数据
});
});
onMounted(() => {
setPageScale('t-l-c-waringForecastSyxqPanel', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
handlePanelVisisble(false);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tRowx0x3ComputedData = computed(() => _.merge({}, componentState.tRowx0x3.default, componentState.tRowx0x3?.[state.screenSize]));

 const tTextx0x3x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x3x0.default, componentState.tTextx0x3x0?.[state.screenSize]));

 const tTextx0x3x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x3x2.default, componentState.tTextx0x3x2?.[state.screenSize]));

 const tTextx0x3x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3x3.default, componentState.tTextx0x3x3?.[state.screenSize]));

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
tComponentx0x2ComputedData,
tRowx0x3ComputedData,
tTextx0x3x0ComputedData,
tTextx0x3x2ComputedData,
tTextx0x3x3ComputedData,
onclick1734337188119,
};
},
}
</script>

<style scoped>
.t-l-c-waringForecastSyxqPanel {
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
background-color: rgba(0, 0, 0, 0);
}
.t-l-c-waringForecastSyxqPanel .waringForecastSyxqPanel-t-rect-0-0 {
position: absolute !important;
top: 56px;
left: 1px;
width: 450px;
height: 1px;
pointer-events: auto;
}

.t-l-c-waringForecastSyxqPanel .waringForecastSyxqPanel-t-component-0-1 {
position: absolute !important;
top: -1px;
left: 0px;
width: 450px;
height: 899px;
pointer-events: auto;
}

.t-l-c-waringForecastSyxqPanel .waringForecastSyxqPanel-t-component-0-2 {
position: absolute !important;
top: 69px;
left: 0px;
width: 450px;
height: 831px;
pointer-events: auto;
}

.t-l-c-waringForecastSyxqPanel .waringForecastSyxqPanel-t-row-0-3 {
position: absolute !important;
top: 1px;
left: 16px;
width: 413px;
height: 54px;
pointer-events: auto;
}

.t-l-c-waringForecastSyxqPanel .waringForecastSyxqPanel-t-text-0-3-0 {
position: unset;
top: 19px;
left: 14px;
width: 43px;
height: 18px;
pointer-events: auto;
}

.t-l-c-waringForecastSyxqPanel .waringForecastSyxqPanel-t-text-0-3-2 {
position: unset;
top: 18px;
left: 73px;
width: auto;
height: 23px;
pointer-events: auto;
}

.t-l-c-waringForecastSyxqPanel .waringForecastSyxqPanel-t-text-0-3-3 {
position: unset;
top: 19px;
left: 152px;
width: 40px;
height: 20px;
pointer-events: auto;
}
</style>
