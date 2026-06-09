<template>
  <div id="t-l-c-droneEntryList" class="t-l-c-droneEntryList" ><t-table id="t-table-c799.5f717c05a" class="droneEntryList-t-table-0-0"  :height="tTablex0x0ComputedData.height" :stripe="tTablex0x0ComputedData.stripe" :border="tTablex0x0ComputedData.border" :auto-scroll="tTablex0x0ComputedData.autoScroll" :speed="tTablex0x0ComputedData.speed" :columns="tTablex0x0ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-c799.5f717c05a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x0ComputedData.defaultSort" :c-style="tTablex0x0ComputedData.cStyle" @cell-click="oncellClick1764838608814_0_0" @operation-click="onoperationClick1766903474400"></t-table></div>
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
import { TTable } from '@ths/design';

export default {
  components: {
    TTable,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-table-c799.5f717c05a":{"attributeName":"tTablex0x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
   listParams: {"selectedType":"","type":"公园巡查、小区巡查","endTime":"","startTime":"","dateValue":""},
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
tTablex0x0: {
defaultStyle: {
            default: {"width":"394px","height":"100%","position":"unset","left":"0px","top":"0px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"584px",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""},"cellStyle":{"cursor":"pointer"}},"width":"50px","type":"default","stateKey":"iconStatus"},{"label":"设备","key":"video_name","align":"left","operationList":[],"stateList":[],"showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX","color":"var(--business-strong)","paddingLeft":"12px","paddingTop":"","paddingRight":"","paddingBottom":""},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"nameTextStatus","infoPosition":"right","width":"auto"},{"label":"操作","key":"opt","align":"center","operationList":[{"name":"调度","id":"dispatch","fontStyle":{"color":"rgba(5,245,251,1)","marginRight":"8px"},"imageStyle":{"marginLeft":"","marginTop":"","marginRight":"8px","marginBottom":""}},{"name":"历史视频","id":"video","fontStyle":{"color":"rgba(5,245,251,1)"}}],"stateList":[],"width":"120px","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"14PX"},"cellStyle":{"cursor":"pointer"}},"type":"operation"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"394px","height":"100%","position":"unset","left":"0px","top":"0px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"0px solid rgba(26,27,31,1)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px","textAlign":"center"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
});
const gotoMapLocation = (row,column) => {
console.log('row', row)
console.log('column', column)
// 点击定位
if (["定位"].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "gotoPoint",
    data: {
      "longitude": row.longitude,
      "latitude": row.latitude,
    }
  });
}
// 点击视频，打开弹窗
// if (["视频"].includes(column.label)) {
//   global.businessDialog.dialogName = 'droneDialogComponent'
//   global.businessDialog.dialogParmas = row
// }
if (["设备"].includes(column.label)) {
  rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'createDialog',  // 消息类型名称
      data: {
        "params": {               // 消息内容，对象格式
          'title': '实时画面',
          'maxWidth': '1300px',
          'maxHeight': '785px',
          'minWidth': '1300px',
          'minHeight': '785px',
          'contentComName': 'equipmentPopComponent',
          'hiddenScaleButton': true,
        }
      }
    }
  );
}

};
const injectData = () => {
state.listParams = inject('wrjListParams');
console.log(state.listParams, 8888);

if (state.listParams) {
  watch(() => [
    state.listParams.selectedType,
    state.listParams.endTime,
    state.listParams.startTime
  ], async () => {
    apiRegistry.getListData.request();
  },{
  deep: true, // 深度监听
  });
}
};
const setCss = () => {
/**
 * 添加表格无数据样式
 */

// 创建 <style> 元素
const style = document.createElement('style');

// 定义样式规则（带 !important 确保覆盖第三方库默认样式）
style.innerHTML = `
  .t-l-c-droneEntryList .droneEntryList-t-table-0-0 {
    position: unset !important;
  }
`;

// 插入到 <head> 末尾
document.head.appendChild(style);
};
const handleClickOperation = (row,type) => {
console.log(row, type);
/* 发送定位的消息 */
if (type === 'video') {
  global.businessDialog.dialogName = 'droneDialogComponent'
  global.businessDialog.dialogParmas = row
}

};
const oncellClick1764838608814_0_0 = (row,column,cell,event) => {
// 执行自定义方法
gotoMapLocation(row,column);
};
const onoperationClick1766903474400 = (row,operationId) => {
// 执行自定义方法
handleClickOperation(row,operationId);
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"job_type":"state.listParams.selectedType","END_TIME":"state.listParams.endTime","START_TIME":"state.listParams.startTime","interfaceId":"7849b16612742e8f21ee0fb5c94acd06"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"job_type":state.listParams.selectedType,"END_TIME":state.listParams.endTime,"START_TIME":state.listParams.startTime,"interfaceId":"7849b16612742e8f21ee0fb5c94acd06"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"job_type":state.listParams.selectedType,"END_TIME":state.listParams.endTime,"START_TIME":state.listParams.startTime,"interfaceId":"7849b16612742e8f21ee0fb5c94acd06"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.listData = data.map(item =>{
    return{
      ...item,
      opt: 'dispatch,video'
    }
  })
}else{
  state.listData = []
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
                            setPageScale('t-l-c-droneEntryList', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
injectData();
onMounted(() => {
setPageScale('t-l-c-droneEntryList', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setCss();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTablex0x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x0.default, componentState.tTablex0x0?.[state.screenSize]));

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
tTablex0x0ComputedData,
oncellClick1764838608814_0_0,
onoperationClick1766903474400,
};
},
}
</script>

<style scoped>
.t-l-c-droneEntryList {
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
width: 394px;
height: 584px;
background-color: rgba(0, 0, 0, 0);
}
.t-l-c-droneEntryList .droneEntryList-t-table-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 394px;
height: 100%;
pointer-events: auto;
}
</style>
