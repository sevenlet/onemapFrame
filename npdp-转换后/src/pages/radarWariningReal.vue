<template>
  <div id="t-l-c-radarWariningReal" class="t-l-c-radarWariningReal" ><t-component id="t-component-aa14.3ba955fbb" class="radarWariningReal-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName"></t-component><t-text-unit id="t-text-unit-a3c4.48c326f87" class="radarWariningReal-t-text-unit-0-1"  :c-style="tTextUnitx0x1ComputedData.cStyle" :justify="tTextUnitx0x1ComputedData.justify" :align="tTextUnitx0x1ComputedData.align" :content="replaceCssVariables(filterData(state.title, componentPropBindingMap?.['t-text-unit-a3c4.48c326f87']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x1ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x1ComputedData.showOverflowTooltip"></t-text-unit><t-table id="t-table-557c.cbaa64ec2" class="radarWariningReal-t-table-0-5"  :height="tTablex0x5ComputedData.height" :stripe="tTablex0x5ComputedData.stripe" :border="tTablex0x5ComputedData.border" :auto-scroll="tTablex0x5ComputedData.autoScroll" :speed="tTablex0x5ComputedData.speed" :columns="tTablex0x5ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-557c.cbaa64ec2']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x5ComputedData.defaultSort" :c-style="tTablex0x5ComputedData.cStyle" @cell-click="oncellClick1765073888859"></t-table></div>
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
import { TComponent, TTable, TTextUnit } from '@ths/design';

export default {
  components: {
    TComponent,
    TTable,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-aa14.3ba955fbb":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-unit-a3c4.48c326f87":{"attributeName":"tTextUnitx0x1","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-4ed7.664206f84":{"attributeName":"tRectx0x2"},"t-rect-a1cf.fdeeb7749":{"attributeName":"tRectx0x3"},"t-high-light-text-b1c9.d9b6fabf":{"attributeName":"tHighLightTextx0x4"},"t-table-557c.cbaa64ec2":{"attributeName":"tTablex0x5","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
   timeStr: "",
   title: "",
   endTime: "",
   startTime: "",
   monitortime: "",
   warningTextArr: [{"text":"当前共","styleName":"style1"},{"text":"0","styleName":"style2"},{"text":"个站点发生","styleName":"style1"},{"text":"0","styleName":"style2"},{"text":"条报警。","styleName":"style1"}],
   listData: [],
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextUnitx0x1: {
defaultStyle: {
            default: {"width":"261px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"35px","top":"0px","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"261px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"35px","top":"0px","lineHeight":"20px","animationName":""}},"unit":{"default":{"fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","lineHeight":"32px"}},"text":{"default":{"lineHeight":"32px","fontSize":"var(--business-text-size-20)"}}},
justify:"flex-start",
align:"flex-end",
content:"",
unit:"",
showOverflowTooltip:true, 
 },
},
tTablex0x5: {
defaultStyle: {
            default: {"width":"410px","height":"230px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"230px",
stripe:true,
border:false,
autoScroll:"null",
speed:"0",
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"50px","type":"default","stateKey":"iconStatus"},{"label":"位置","type":"default","key":"community_addr","stateKey":"","width":"162px","minWidth":"","align":"left","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)"}}},{"label":"报警时间","type":"default","key":"monitortime","stateKey":"","width":"140px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"操作","type":"operation","key":"opt","stateKey":"","width":"58px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--t-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"fixed":false,"operationList":[{"name":"待处理","id":"todo","fontStyle":{"color":"rgba(5,245,251,1)"}},{"name":"已处理","id":"done","fontStyle":{"color":"rgba(5,245,251,1)"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"230px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
});
const getProvider = () => {
const rootData = inject('airPollutionContentState');
debugger;
state.airPollutionContentState = rootData || {
    "timeType": "",
    "monitorTimeValue": "",
    "analysisTimaRangeData": []
  };

watch(() => rootData, () => {
  state.airPollutionContentState = rootData || {
    "timeType": "",
    "monitorTimeValue": "",
    "analysisTimaRangeData": []
  };
  if (rootData) {
    state.timeStart = state.airPollutionContentState.analysisTimaRangeData[0];
    state.timeEnd = state.airPollutionContentState.analysisTimaRangeData[1];
    apiRegistry.getListData.request();
  }
},
  {
    deep: true
  }
);
};
const handleInputChange = (data) => {
// console.log(data);
if (typeof (data) === 'string') {
  state.inputValue = data;
}
};
const handleTableClick = (row,column) => {
console.log(row, column)
// 勾选图层
// rootData.rootSocket.emit('message', {
//   type: 'setLayerChecked',
//   room: global.socketRoom,
//   data: {
//     // 省控、国控等
//     type: row.POINT_TYPE_CODE,
//   },
// });
if (column.property !== 'opt') {
  // 给地图发消息-定位
  rootData.rootSocket.emit('message', {
    type: 'airQualityRankingClicked',
    room: global.socketRoom,
    data: {
      // 省控、国控等
      type: row.POINT_TYPE_CODE,
      // 携带的其他属性数据
      attrs: {
        ...row,
      }
    },
  });

  // test
  if (column.label === '定位') {
    const { longitude, latitude } = row;
    rootData.rootSocket.emit(
      'message',  // 固定的消息名称，不能修改
      {
        room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
        type: 'gotoPoint',  // 消息类型名称
        data: {
          longitude,
          latitude
        }
      }
    );
  }
} else {
  // // 发送消息给地图
  // rootData.rootSocket.emit('message', {
  //   type: 'showAirSourceTrace',
  //   room: global.socketRoom,
  //   data: [ // 消息内容
  //     {
  //       shareCode: "showAirSourceTrace",
  //       runtimeValue: row.POINT_CODE,
  //       pointType: row.POINT_TYPE || '',
  //       isEnters: true,
  //       traceTime: row.TIME,
  //       layerName: row.POINT_TYPE_NAME,
  //     }]
  // });

  /* 发送webSocket消息 */
  // if (rootData?.sendMessage) {
  //   rootData?.sendMessage({
  //     id: guid(true, 'lego'), // 唯一索引
  //     type: "runInteractive", // 消息名称
  //     data: [
  //       {
  //         shareCode: "showTraceDetail",
  //         runtimeValue: row.POINT_CODE,
  //         // 显示lego的溯源
  //         componentName: "airSyxqPanelComponent",
  //         componentParmas: {
  //           pointType: row.POINT_TYPE || '',
  //           isShowAlarmFlag: true,
  //           alarmTime: row.TIME || '',
  //           exceedingTheStandardState: '',
  //           primPollute: row.POLLUTE || '',
  //           polluteLevel: '',
  //           POINT_CODE: row.POINT_CODE,
  //           endTime: (row.END_TIME && row.END_TIME !== '-' && row.END_TIME !== '--') ? row.END_TIME : '',
  //         }
  //       }]
  //   });
  // }

  // 打开右屏面板
  // rootData.rootSocket.emit('message', {
  //   type: 'showAirTraceDetail',
  //   room: global.socketRoom,
  //   data: [
  //     {
  //       shareCode: "showSurroundingsAnalysis",
  //       runtimeValue: row.POINT_CODE,
  //       // 显示lego的溯源
  //       // componentName: "airSyxqPanelComponent",
  //       // 显示周边分析页面
  //       componentName: "surroundingAnalysisComponent",
  //       componentParmas: {
  //         pointType: row.POINT_TYPE || '',
  //         isShowAlarmFlag: true,
  //         alarmTime: row.TIME || '',
  //         exceedingTheStandardState: '',
  //         primPollute: row.POLLUTE || '',
  //         polluteLevel: '',
  //         POINT_CODE: row.POINT_CODE,
  //         endTime: (row.END_TIME && row.END_TIME !== '-' && row.END_TIME !== '--') ? row.END_TIME : '',
  //       }
  //     }
  //   ]
  // });
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'switchRightContainerName',  // 消息类型名称
      data: 'controlManagementComponent'
    }
  );
  global.airGlobalVariables.fireworks.surroundingAnalysis.activePointInfo = row;
  if (row.opt === 'done') {
    global.airGlobalVariables.fireworks.activeTab = 'onSiteFeedbackComponent'
  } else {
    global.airGlobalVariables.fireworks.activeTab = ''
  }
}
};
const gotoMapLocation = (row,column) => {
// 断面评价结果-点击定位给地图发消息
if (["断面名称", "定位", '水体名称', '水质目标', '水质现状'].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    data: [ // 消息内容
      {
        "code": "point_code",
        "shareCode": "POINT_CODE",
        "defaultValue": "",
        "runtimeValue": row.POINT_CODE
      }
    ]
  });
}


};
const gotoMapLocationLY = (row,column) => {
// 点击定位给地图发消息
if (["定位", '流域', '优良率', '劣Ⅴ类占比', '达标率'].includes(column.label)) {
  // 注意 这时候 还修改了 左上角选中区域值(估计是 发消息时 区域选择也接收了)
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    // 消息内容
    "data": [
      {
        "code": "wsystem_name",
        "shareCode": "WSYSTEM_NAME",
        "defaultValue": "",
        "runtimeValue": row.WSYSTEM_NAME
      },
      {
        "code": "wsystem_code",
        "name": "",
        "defaultValue": "",
        "shareCode": "WSYSTEM_CODE",
        "runtimeValue": row.WSYSTEM_CODE
      }
    ]
  });
}


};
const initPage = () => {
// if (global.airGlobalVariables.realTimeAlarm.dateValue) {
  
//   apiRegistry.getMonitortime.request();

//   apiRegistry.getListData.request();
// }

apiRegistry.getMonitortime.request().then(() => {
  apiRegistry.getListData.request();
});


};
const setStyle = () => {
const componentDom = document.querySelector('#t-l-c-radarWariningReal')
const styles = document.createElement('style')
styles.innerHTML = `
.t-table .el-table__body .el-table__row .cell .overflow-ellipsis{
  display: inline-block !important
}
`
styles.innerHTML = `
.el-table__body-wrapper::-webkit-scrollbar {
  width: 8px; !important
}
.el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #bdc3c7;
  border-radius: 4px;
}
.el-table__body-wrapper::-webkit-scrollbar-track {
  background-color: #ecf0f1;
}
`
componentDom.append(styles)


setTimeout(() => {
  // 显示滚动条
  const table = componentDom.querySelector('.radarWariningReal-t-table-0-5 .el-table');
  console.log('table', JSON.parse(JSON.stringify(table.classList)));
  if (table) {
    // 移除隐藏滚动条的类
    table.classList.remove('hidden-scroll-y');
    console.log('table', JSON.parse(JSON.stringify(table.classList)));
  }
}, 1000)
};
const watchChangeTime = () => {

watch(
  [
    () => global.airGlobalVariables.realTimeAlarm.dateValue,
    () => global.warningRightDataRange.value,
  ],
  ([dateValue, rangeValue]) => {
    state.timeStr = Date.now()
    // 实时告警
    if (global.airGlobalVariables.fireworks.selectedTab === 'realAlarmContentComponent') {
      state.title = '近1小时雷达报警预警'
      if (dateValue) {
        state.startTime = getPrevTime(`${dateValue}:00`, 'minute').slice(0, 16);
        state.endTime = dateValue
      }
    } else if (global.airGlobalVariables.fireworks.selectedTab === 'earlyWarningForecastContentComponent') {
      // 报警记录
      state.title = '雷达报警预警'
      if (Array.isArray(rangeValue) && rangeValue.length === 2) {
        state.startTime = rangeValue[0];
        state.endTime = rangeValue[1];
      }
    }
    apiRegistry.getListData.request();
  },
  { immediate: true, deep: true }
);

};
const oncellClick1765073888859 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(row,column);
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
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"timeStr":"state.timeStr","START_TIME":"state.startTime","END_TIME":"state.endTime","region_path":"global.regionaQuery.regionCode","MONITORTIME":"state.monitortime","interfaceId":"dfb75cdbd9cee3106c250feb0f24f8e5"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"timeStr":state.timeStr,"START_TIME":state.startTime,"END_TIME":state.endTime,"region_path":global.regionaQuery.regionCode,"MONITORTIME":state.monitortime,"interfaceId":"dfb75cdbd9cee3106c250feb0f24f8e5"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"timeStr":state.timeStr,"START_TIME":state.startTime,"END_TIME":state.endTime,"region_path":global.regionaQuery.regionCode,"MONITORTIME":state.monitortime,"interfaceId":"dfb75cdbd9cee3106c250feb0f24f8e5"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     if (res?.data?.data?.length) {
  const { data } = res?.data;
  state.listData = data.map(item => {
    return {
      ...item,
      station: item.community_addr,
      opt: item.data_status === '0' ? 'todo' : 'done'
    }
  })
  // 去重，获取报警站点数量
  const uniqueArr = [...data.reduce((map, obj) => {
    if (obj.point_name && !map.has(obj.point_name)) {
      map.set(obj.point_name, obj);  // 如果map中没有该point_name，添加它
    }
    return map;
  }, new Map()).values()];
  state.warningTextArr[1].text = uniqueArr?.length || 0;
  state.warningTextArr[3].text = data?.length || 0;
} else {
  state.listData = [];
  state.warningTextArr[1].text = 0;
  state.warningTextArr[3].text = 0;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getMonitortime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"region_path":"global.regionaQuery.regionCode","interfaceId":"36544dd60ef2388329cfc352c122a2f2"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"region_path":global.regionaQuery.regionCode,"interfaceId":"36544dd60ef2388329cfc352c122a2f2"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"region_path":global.regionaQuery.regionCode,"interfaceId":"36544dd60ef2388329cfc352c122a2f2"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitortime'] = res.data;
                
     // console.log('获取 控制详情-监测时间', res);

state.monitortime = '';

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.monitortime = data.data.monitortime || '';
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.monitortime = '';
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-radarWariningReal', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
watchChangeTime();
onMounted(() => {
setPageScale('t-l-c-radarWariningReal', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setStyle();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextUnitx0x1ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x1.default, componentState.tTextUnitx0x1?.[state.screenSize]));

 const tTablex0x5ComputedData = computed(() => _.merge({}, componentState.tTablex0x5.default, componentState.tTablex0x5?.[state.screenSize]));

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
tComponentx0x0ComputedData,
tTextUnitx0x1ComputedData,
tTablex0x5ComputedData,
oncellClick1765073888859,
};
},
}
</script>

<style scoped>
.t-l-c-radarWariningReal {
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
height: 280px;
width: 410px;
background-color: rgba(0,0,0,0);
}
.t-l-c-radarWariningReal .radarWariningReal-t-component-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-radarWariningReal .radarWariningReal-t-text-unit-0-1 {
position: absolute !important;
top: 0px;
left: 35px;
width: 261px;
height: 32px;
pointer-events: auto;
}

.t-l-c-radarWariningReal .radarWariningReal-t-table-0-5 {
position: absolute !important;
top: 40px;
left: 0px;
width: 410px;
height: 230px;
pointer-events: auto;
}
</style>
