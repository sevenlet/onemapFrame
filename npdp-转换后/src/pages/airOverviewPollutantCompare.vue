<template>
  <div id="t-l-c-airOverviewPollutantCompare" class="t-l-c-airOverviewPollutantCompare" ><t-list-card-rate v-if="state.listData.length !== 0" id="t-list-card-rate-3a36.8825c61b4" class="airOverviewPollutantCompare-t-list-card-rate-0-0"  :data="state.listData" :status-list="tListCardRatex0x0ComputedData.statusList" :data-alias="tListCardRatex0x0ComputedData.dataAlias" :data-raw="tListCardRatex0x0ComputedData.dataRaw" :c-style="tListCardRatex0x0ComputedData.cStyle"></t-list-card-rate><t-text v-if="state.listData.length === 0" id="t-text-04dd.53282314b" class="airOverviewPollutantCompare-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text></div>
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
import { TListCardRate, TText } from '@ths/design';

export default {
  components: {
    TListCardRate,
    TText,
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
   listData: [],
   airOverviewContentState: {"timeValue":"","timeType":""},
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
tListCardRatex0x0: {
defaultStyle: {
            default: {"width":"410px","height":"250px","padding":"8px 8px 0 0","position":"unset","left":"0px","top":"0px","display":"flex","justifyContent":"space-between","overflow":"scroll","overflowX":"hidden"},
            
            },
 default: { 
 
data:[{"name":"PM₂.₅","value":22,"rateName":"同比","rate":44.3,"status":"上升","unit":"μg/m³"},{"name":"PM₁₀","value":37,"rateName":"同比","rate":44.3,"status":"下降","unit":"μg/m³"},{"name":"SO₂","value":10,"rateName":"同比","rate":44.3,"status":"下降","unit":"μg/m³"},{"name":"NO₂","value":22,"rateName":"同比","rate":0,"status":"上升","unit":"μg/m³"},{"name":"NO","value":6,"rateName":"同比","rate":44.3,"status":"下降","unit":"μg/m³"},{"name":"CO","value":0.8,"rateName":"同比","rate":0,"status":"上升","unit":"mg/m³"},{"name":"O₃","value":24,"rateName":"同比","rate":0,"status":"上升","unit":"μg/m³"},{"name":"O₃-8h","value":28,"rateName":"同比","rate":0,"status":"上升","unit":"μg/m³"}],
statusList:[{"name":"上升","url":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-10/8945b3267f564f9da9779cad921a1013.png"},{"name":"下降","url":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-10/f9fc0c7289e24c7f90193ea2aeaf8524.png"}],
dataAlias:{"name":"name","currentValue":"value","unit":"unit","rateName":"rateName","rateValue":"rate","rateUnit":"rateUnit","rateStatus":"status"},
dataRaw:[{"name":"{{PM25}}","value":22,"rateName":"同比","rate":44.3,"status":"上升","unit":"μg/{{M3}}"},{"name":"{{PM10}}","value":37,"rateName":"同比","rate":44.3,"status":"下降","unit":"μg/{{M3}}"},{"name":"{{SO2}}","value":10,"rateName":"同比","rate":44.3,"status":"下降","unit":"μg/{{M3}}"},{"name":"{{NO2}}","value":22,"rateName":"同比","rate":0,"status":"上升","unit":"μg/{{M3}}"},{"name":"NO","value":6,"rateName":"同比","rate":44.3,"status":"下降","unit":"μg/{{M3}}"},{"name":"CO","value":0.8,"rateName":"同比","rate":0,"status":"上升","unit":"mg/{{M3}}"},{"name":"{{O3}}","value":24,"rateName":"同比","rate":0,"status":"上升","unit":"μg/{{M3}}"},{"name":"{{O3}}-8h","value":28,"rateName":"同比","rate":0,"status":"上升","unit":"μg/{{M3}}"}],
cStyle:{"wrapper":{"default":{"width":"410px","height":"250px","padding":"8px 8px 0 0","position":"unset","left":"0px","top":"0px","display":"flex","justifyContent":"space-between","overflow":"scroll","overflowX":"hidden"}},"itemWrapper":{"default":{"width":"191px","height":"68px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-06/b9f094326a194040ae1b03c5b4ada0dc.png)","backgroundPosition":"50% 50%","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingTop":"13px","paddingBottom":"13px","paddingLeft":"12px","paddingRight":"12px"}},"rateValue":{"default":{"maxWidth":"50px","max-width":"45px","fontFamily":"DIN-bold"}},"value":{"default":{"maxWidth":"50px","max-width":"48px","fontFamily":"DIN-black"}},"line":{"default":{"paddingLeft":"0px","marginLeft":"10px","marginRight":"12px"}}}, 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"407px","height":"212px","color":"var(--business-no-data-color)","textAlign":"center","lineHeight":"202px","fontSize":"14px","top":"3px","left":"0px","animationName":"","position":"unset"},
            
            },
 default: { 
 
label:"暂无数据",
editable:false,
cStyle:{"wrapper":{"default":{"width":"407px","height":"212px","color":"var(--business-no-data-color)","textAlign":"center","lineHeight":"202px","fontSize":"14px","top":"3px","left":"0px","animationName":"","position":"unset"}}}, 
 },
},
});
const getProvider = () => {
const rootData = inject('airOverviewContentState');
watch(() => rootData, () => {
  state.airOverviewContentState = rootData;
  if (state.airOverviewContentState.timeType && state.airOverviewContentState.timeValue) {
    getData();
  }
}, {
  deep: true,
  immediate: true,
});
};
// 接口函数
const getData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"TIME_TYPE":state.airOverviewContentState.timeType,"MONITORTIME":state.airOverviewContentState.timeValue,"interfaceId":"41e6adecfe4711721b859a619d19675d"},}).then((res) => {
     // 成功的操作
     console.log('环形图', res);
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.listData = [];
  let data = res.data.data[0];
  // data = {
  //   "POINT_CODE": "440600000000",
  //   "O_PM10": "53.21",
  //   "O_SO2": "12.96",
  //   "O_O3_8": "93.72",
  //   "O_NO2": "38.0",
  //   "PM25": "32.36",
  //   "C_SO2": "10.4",
  //   "C_PM25": "0.1",
  //   "C_NO2": "0.8",
  //   "CO": "0.8",
  //   "C_PM10": "10.0",
  //   "C_O3_8": "20.4",
  //   "NO2": "38.0",
  //   "SO2": "12.96",
  //   "C_CO": "0.0",
  //   "PM10": "53.21",
  //   "O3_8": "93.72",
  //   "O_CO": "0.8",
  //   "O_PM25": "32.36"
  // };
  let pollutions = ["PM10", "SO2", "O3_8", "NO2", "CO", "PM25"];
  if (data) {
    pollutions.forEach(key=>{
      // 名称，处理下标
      let name = key === 'O3_8' ? `${convertCharacter('O3')}-8h` : convertCharacter(key)
      // 同比增长率
      let rate = handleNoVal(Math.abs(data[`C_${key}`]));

      // 同比具体数值
      let O_ = data[`O_${key}`];
      let status = Number(data[key]) > Number(O_) ? '上升' : (Number(data[key]) == Number(O_) ? '持平' : '下降');
      state.listData.push({
        name,
        value: handleNoVal(data[key]),
        rate,
        rateName: '同比',
        status,
        unit: '',
      })
    })
  }
  state.listData.sort((a, b) => {
  if (isNaN(a.rate) && !isNaN(b.rate)) return 1;  // NaN 排在后面
  return Number(b.rate) - Number(a.rate);  // 数字升序排序
});
  
} else {
  state.listData = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], () => {
getData();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewPollutantCompare', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
onMounted(() => {
setPageScale('t-l-c-airOverviewPollutantCompare', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardRatex0x0ComputedData = computed(() => _.merge({}, componentState.tListCardRatex0x0.default, componentState.tListCardRatex0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

return {
global,
state,
componentState,
tListCardRatex0x0ComputedData,
tTextx0x1ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewPollutantCompare {
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
width: 410px;
height: 220px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airOverviewPollutantCompare .airOverviewPollutantCompare-t-list-card-rate-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 410px;
height: 250px;
pointer-events: auto;
}

.t-l-c-airOverviewPollutantCompare .airOverviewPollutantCompare-t-text-0-1 {
position: absolute !important;
top: 3px;
left: 0px;
width: 407px;
height: 212px;
pointer-events: auto;
}
</style>
