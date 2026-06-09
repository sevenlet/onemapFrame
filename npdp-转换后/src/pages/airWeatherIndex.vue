<template>
  <div id="t-l-c-airWeatherIndex" class="t-l-c-airWeatherIndex" ><t-checkbox id="t-checkbox-9e14.354734339" class="airWeatherIndex-t-checkbox-0-0"  :data="replaceCssVariables(filterData(state.weatherIndexList, componentPropBindingMap?.['t-checkbox-9e14.354734339']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(filterData(state.weatherIndexSelectArr, componentPropBindingMap?.['t-checkbox-9e14.354734339']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x0ComputedData.dataAlias" :border="tCheckboxx0x0ComputedData.border" :use-button="tCheckboxx0x0ComputedData.useButton" :c-style="tCheckboxx0x0ComputedData.cStyle" @change="onchange1735122132777"></t-checkbox></div>
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
import { TCheckbox } from '@ths/design';

export default {
  components: {
    TCheckbox,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-checkbox-9e14.354734339":{"attributeName":"tCheckboxx0x0","data":{"filters":[]},"active":{"filters":[]},"dataAlias":{"filters":[]},"border":{"filters":[]},"useButton":{"filters":[]},"cStyle":{"filters":[]}}};
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
   weatherIndexSelectArr: [],
   weatherIndexList: [{"label":"风场","name":"风场"},{"label":"风速","name":"风速"},{"label":"温度","name":"温度"},{"label":"气压","name":"气压"}],
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
tCheckboxx0x0: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justifyContent":"center","width":"286px","height":"34px","position":"unset","left":"0px","top":"0px","animationName":"","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","backgroundColor":"","paddingLeft":"0px","paddingRight":"0px"},
            
            },
 default: { 
 
data:[{"label":"风场","name":"风场"},{"label":"风速","name":"风速"},{"label":"温度","name":"温度"},{"label":"气压","name":"气压"}],
active:[],
dataAlias:{"label":"label","value":"name","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justifyContent":"center","width":"286px","height":"34px","position":"unset","left":"0px","top":"0px","animationName":"","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","backgroundColor":"","paddingLeft":"0px","paddingRight":"0px"}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--targer-btn-bg)","borderLeft":"1px solid var(--targer-btn-border)","borderTop":"1px solid var(--targer-btn-border)","borderRight":"1px solid var(--targer-btn-border)","borderBottom":"1px solid var(--targer-btn-border)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"var(--business-white)","paddingLeft":"8px","fontSize":"var(--business-text-size-14)"}},"itemWrapper":{"default":{"marginRight":"5px"}}}, 
 },
},
});
const handleCheck = (data) => {

// 获取两个数组的差集
function diffArray(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let diff = [...arr1.filter(x => !set2.has(x)), ...arr2.filter(x => !set1.has(x))];
  return diff;
}

// 叠加或取消的气象指标
const indexValue = diffArray(state.weatherIndexSelectArr, data)[0];
// 发送socket消息: 地图删除专题
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'showWeather', // 消息名称
  data: {
    type: indexValue,
    // 当前值大于上次选中值：显示选中的指标，反之隐藏
    visible: state.weatherIndexSelectArr.length < data.length,
  },
});

// 更新选中值数据
state.weatherIndexSelectArr = data;



};
const sendMsgToMap = () => {
console.log(state.weatherIndexSelectArr)
const weatherIndexListLabel = state.weatherIndexList.map(item => item.label)
function diffArray(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let diff = [...arr1.filter(x => !set2.has(x)), ...arr2.filter(x => !set1.has(x))];
  return diff;
}
const falseItem = diffArray(weatherIndexListLabel, state.weatherIndexSelectArr)
console.log(falseItem)

// 选中的
state.weatherIndexSelectArr.forEach(item => {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: 'showWeather', // 消息名称
    data: {
      type: item,
      // 当前值大于上次选中值：显示选中的指标，反之隐藏
      visible: true,
    },
  });
})

//没有选中的
falseItem.forEach(item => {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: 'showWeather', // 消息名称
    data: {
      type: item,
      // 当前值大于上次选中值：显示选中的指标，反之隐藏
      visible: false,
    },
  });
})
};
const setDefaultSelect = () => {
// 态势概览、烟花爆竹专题默认选中风场、风速
const layer = ['洒水车', '雾炮车','走航车','无人机','执法人员','小区']
watch(() => global.leftSubjectActiveMenu, (newValue, oldValue) => {
  if (newValue) {
    if ((global.leftSubjectActiveMenu === '态势概览' || global.leftSubjectActiveMenu === '炼山') && !layer.includes(oldValue)) {
      // 态势概览和炼山：默认风场、风速；
      ['温度','气压'].forEach(item => {
        rootData.rootSocket.emit('message', {
          room: global.socketRoom, // 房间号
          type: 'showWeather', // 消息名称
          data: {
            type: item,
            visible: false,
          },
        });
      })
      state.weatherIndexSelectArr = ['风场', '风速']
      state.weatherIndexSelectArr.forEach(item => {
        rootData.rootSocket.emit('message', {
          room: global.socketRoom, // 房间号
          type: 'showWeather', // 消息名称
          data: {
            type: item,
            visible: true,
          },
        });
      })
    } else if (global.leftSubjectActiveMenu === '烟花爆竹' && !layer.includes(oldValue)) {
      // 烟花爆竹默认风场
      ['风速','温度','气压'].forEach(item => {
        rootData.rootSocket.emit('message', {
          room: global.socketRoom, // 房间号
          type: 'showWeather', // 消息名称
          data: {
            type: item,
            visible: false,
          },
        });
      })
      state.weatherIndexSelectArr = ['风场']
      rootData.rootSocket.emit('message', {
        room: global.socketRoom, // 房间号
        type: 'showWeather', // 消息名称
        data: {
          type: '风场',
          visible: true,
        },
      });
    }
  }
})
};
const onchange1735122132777 = (data) => {
// 执行自定义方法
handleCheck(data);
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-airWeatherIndex', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
sendMsgToMap();
// 执行自定义方法
setDefaultSelect();
onMounted(() => {
setPageScale('t-l-c-airWeatherIndex', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tCheckboxx0x0ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x0.default, componentState.tCheckboxx0x0?.[state.screenSize]));

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
tCheckboxx0x0ComputedData,
onchange1735122132777,
};
},
}
</script>

<style scoped>
.t-l-c-airWeatherIndex {
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
height: 34px;
width: 286px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airWeatherIndex .airWeatherIndex-t-checkbox-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 286px;
height: 34px;
pointer-events: auto;
}
</style>
