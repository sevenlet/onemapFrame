<template>
  <div id="t-l-c-airOverviewChangeTrent" class="t-l-c-airOverviewChangeTrent" ><t-tabs-base id="t-tabs-base-149b.11c15e712" class="airOverviewChangeTrent-t-tabs-base-0-0"  :data="global.air.centerIndexList" :space="tTabsBasex0x0ComputedData.space" :selected-tab-val="state.pollutionType" :inner-shadow-color="tTabsBasex0x0ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x0ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x0ComputedData.alias" :c-style="tTabsBasex0x0ComputedData.cStyle" :data-raw="tTabsBasex0x0ComputedData.dataRaw" @tab-click="ontabClick1734596882813"></t-tabs-base><t-text v-if="state.airQualityMounthChartData.length === 0" id="t-text-adfe.c80cb2262" class="airOverviewChangeTrent-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-chart-line-single v-if="state.airQualityMounthChartData.length !== 0" id="t-chart-line-single-e60d.837b3e5bf" class="airOverviewChangeTrent-t-chart-line-single-0-2"  :c-style="tChartLineSinglex0x2ComputedData.cStyle" :options="state.options" :data="state.airQualityMounthChartData" :series-setting="tChartLineSinglex0x2ComputedData.seriesSetting" :main-axis="tChartLineSinglex0x2ComputedData.mainAxis" :line="componentState.tChartLineSinglex0x2.line"></t-chart-line-single></div>
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
import { TChartLineSingle, TTabsBase, TText } from '@ths/design';

export default {
  components: {
    TChartLineSingle,
    TTabsBase,
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
   airOverviewContentState: {"timeType":"","timeValue":""},
   pollutionType: "AQI",
   options: [],
   airQualityMounthChartData: [],
   chartVisible: {"hour":false,"day":false,"month":true},
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
tTabsBasex0x0: {
defaultStyle: {
            default: {"width":"410px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
data:[{"label":"AQI","value":"AQI"},{"label":"PM₂.₅","value":"PM25"},{"label":"PM₁₀","value":"PM10"},{"label":"SO₂","value":"SO2"},{"label":"NO₂","value":"NO2"},{"label":"CO","value":"CO"},{"label":"O₃","value":"O3"}],
space:1,
selectedTabVal:"AQI",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"name","disabled":false},
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"0px","top":"0px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important","overflow":"hidden"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}},
dataRaw:[{"label":"AQI","value":"AQI"},{"label":"{{PM25}}","value":"PM25"},{"label":"{{PM10}}","value":"PM10"},{"label":"{{SO2}}","value":"SO2"},{"label":"{{NO2}}","value":"NO2"},{"label":"CO","value":"CO"},{"label":"{{O3}}","value":"O3"}], 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"212px","color":"var(--business-no-data-color)","textAlign":"center","lineHeight":"202px","fontSize":"14px","top":"88px","left":"0px","animationName":""},
            
            },
 default: { 
 
label:"暂无数据",
editable:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"212px","color":"var(--business-no-data-color)","textAlign":"center","lineHeight":"202px","fontSize":"14px","top":"88px","left":"0px","animationName":""}}}, 
 },
},
tChartLineSinglex0x2: {
defaultStyle: {
            default: {"width":"410px","height":"342px","position":"unset","left":"0px","top":"33px","animationName":""},
            
            },
line: computed(() => activeChartTheme.value?.line),
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"410px","height":"342px","position":"unset","left":"0px","top":"33px","animationName":""}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, [])),
data:[{"no2":"26","monitortime":"2022-06-0100:00:00.0","pm25":"31","o3":"","so2":"5","pm10":"49","region_name":"成都市","co":"0.6","o3_8":"129","region_code":"510100000000"},{"no2":"29","monitortime":"2022-05-0100:00:00.0","pm25":"30","o3":"","so2":"5","pm10":"47","region_name":"成都市","co":"0.6","o3_8":"123","region_code":"510100000000"},{"no2":"29","monitortime":"2022-04-0100:00:00.0","pm25":"31","o3":"","so2":"5","pm10":"53","region_name":"成都市","co":"0.6","o3_8":"113","region_code":"510100000000"},{"no2":"40","monitortime":"2022-03-0100:00:00.0","pm25":"47","o3":"","so2":"6","pm10":"81","region_name":"成都市","co":"0.7","o3_8":"107","region_code":"510100000000"},{"no2":"16","monitortime":"2022-02-0100:00:00.0","pm25":"75","o3":"","so2":"6","pm10":"82","region_name":"成都市","co":"0.8","o3_8":"50","region_code":"510100000000"}],
seriesSetting:{"xAxisLabel":"monitortime","data":[{"name":"广州市","dataKey":"广州市","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"深圳市","dataKey":"深圳市","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"珠海市","dataKey":"珠海市","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"佛山市","dataKey":"佛山市","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"江门市","dataKey":"江门市","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"肇庆市","dataKey":"肇庆市","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"惠州市","dataKey":"惠州市","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"东菀市","dataKey":"东菀市","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"中山市","dataKey":"中山市","style":{"lineStyle":{"width":1},"symbol":"none"}}]},
mainAxis:"x", 
 },
},
});
const setOptions = () => {
state.options = {
  legend: {
    show: true,
    icon: 'roundRect',
    itemWidth: 16,
    itemHeight: 16,
    textStyle: {
      color: "rgba(255, 255, 255, 1)",
      fontSize: 12,
      height: 8,
      rich: {
        a: {
          verticalAlign: "center"
        }
      }
    }
  },
  grid: {
    bottom: "10% ",
    left: "10%",
    top: "26%",
    right: "0% "
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: "#008acd",
        width: "1"
      },
      crossStyle: {
        color: "#008acd",
        width: "1"
      }
    },
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderColor: "rgba(255, 255, 255, 0.5)",
    textStyle: {
      color: "rgba(255, 255, 255, 1)"
    },
    confine: true,
  },
  yAxis: {
    name: "",
    nameTextStyle: {
      color: '#B7E3FF'
    },
    nameLocation: "end",
    // 自定义主题-开始
    axisLine: {
      show: false,
      lineStyle: {
        type: "solid",
        color: "rgba(173, 197, 255, 0.3)"
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "rgba(173, 197, 255, 0.3)"
      }
    },
    axisLabel: {
      show: true,
      color: "#B7E3FF",
      fontSize: 14
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
        color: "rgba(173, 197, 255, 0.3)"
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: [
          "rgba(250,250,250,0.2)",
          "rgba(210,219,238,0.2)"
        ]
      }
    },
    nameTextStyle: {
      color: "#B7E3FF",
      fontSize: 14
    },
    // 自定义主题-结束
  },
  xAxis: {
    axisLabel: {
      rotate: 0,
      color: "#B7E3FF",
      formatter: function (value) {
        if (value.includes('月')) {
          let parts = value.split('月');
          return `${parts[0]}月\n${parts[1]}`;
        } else if (value.includes('日')) {
          let parts = value.split('日');
          return `${parts[0]}日\n${parts[1]}`;
        } else {
          return value
        }
      },
    },
    // 自定义主题-开始
    axisLine: {
      show: true,
      lineStyle: {
        type: "solid",
        color: "rgba(173, 197, 255, 0.5)"
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "rgba(173, 197, 255, 0.3)"
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: [
          "rgba(202,202,202,0.3)"
        ]
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: [
          "rgba(250,250,250,0.3)",
          "rgba(200,200,200,0.3)"
        ]
      }
    },
    nameTextStyle: {
      color: "#B7E3FF",
      fontSize: 14
    }
    // 自定义主题-结束

  }
};
};
const getProvider = () => {
const rootData = inject('airOverviewContentState');
state.airOverviewContentState = rootData;
typeChange(state.pollutionType);
// 初始请求一次
getChartData();
watch(() => rootData, () => {

  // 如果匹配不上，默认第一个
  let currentType = global.air.centerIndexList.find(item => item.name === state.pollutionType);
  if (!currentType) {
    state.pollutionType = global.air.centerIndexList[0].name;
    typeChange(global.air.centerIndexList[0].name);
  }

  state.airOverviewContentState = rootData;
  if (rootData.timeValue) {
    getChartData();
  }
}, {
  deep: true
})
};
const typeChange = (data) => {
state.pollutionType = data;
if (data === 'compositeIndex') {
  state.pollutionType = 'ZHZS';
}
// 上标3
const threeSup = convertCharacter('上标')[0].split(' ')[3] || '3';
// 纵坐标单位
if (state.pollutionType === 'ZHZS' || state.pollutionType === 'AQI') {
  state.options.yAxis.name = '';
} else if (state.pollutionType.includes('CO')) {
  state.options.yAxis.name = 'mg/m' + threeSup;
} else {
  state.options.yAxis.name = 'μg/m' + threeSup;
}
};
const centerIndexSelectWatcher = () => {
watch(() => global.air.centerIndexSelect, () => {
  state.pollutionType = global.air.centerIndexSelect;
}, {
  deep: true,
  immediate: true
})
};
const ontabClick1734596882813 = (data) => {
// 执行自定义方法
typeChange(data.value);
// 事件交互-请求调用接口
getChartData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
// 接口函数
const getChartData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE_TYPE":state.pollutionType,"TIME_TYPE":state.airOverviewContentState.timeType,"MONITORTIME":state.airOverviewContentState.timeValue,"interfaceId":"f0881c9549949e3a1568dbd50d5257a5"},}).then((res) => {
     // 成功的操作
     // console.log('趋势图', res);
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let data = res.data.data;
  state.airQualityMounthChartData = [];
  // 构造结构：
  //  {
  //       "monitortime": "16日16时",
  //       "city1": "26",
  //       "city2": "31",
  //       "city3": "32",
  //       "city4": "5",
  //       "city5": "49",
  //       "city6": "60",
  //       "city7": "42",
  //       "city8": "129",
  //       "city9": "60"
  //   },
  data.forEach(item => {
    let currentObj = state.airQualityMounthChartData.find(v => v.monitortime === item.MONITORTIME);
    if (currentObj) {
      currentObj[item.POINT_NAME] = handleNoVal(item.POLLUTE_VALUE || '');
    } else {
      let newObj = {
        monitortime: item.MONITORTIME,
      }
      newObj[item.POINT_NAME] = handleNoVal(item.POLLUTE_VALUE || '');
      state.airQualityMounthChartData.push(newObj)
    }
  })
  // console.log(state.airQualityMounthChartData);
} else {
  state.airQualityMounthChartData = [];
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewChangeTrent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setOptions();
// 执行自定义方法
centerIndexSelectWatcher();
// 执行自定义方法
getProvider();
onMounted(() => {
setPageScale('t-l-c-airOverviewChangeTrent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTabsBasex0x0ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x0.default, componentState.tTabsBasex0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tChartLineSinglex0x2ComputedData = computed(() => _.merge({}, componentState.tChartLineSinglex0x2.default, componentState.tChartLineSinglex0x2?.[state.screenSize]));

return {
global,
state,
componentState,
tTabsBasex0x0ComputedData,
tTextx0x1ComputedData,
tChartLineSinglex0x2ComputedData,
ontabClick1734596882813,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewChangeTrent {
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
height: 377px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airOverviewChangeTrent .airOverviewChangeTrent-t-tabs-base-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewChangeTrent .airOverviewChangeTrent-t-text-0-1 {
position: absolute !important;
top: 88px;
left: 0px;
width: 410px;
height: 212px;
pointer-events: auto;
}

.t-l-c-airOverviewChangeTrent .airOverviewChangeTrent-t-chart-line-single-0-2 {
position: absolute !important;
top: 33px;
left: 0px;
width: 410px;
height: 342px;
pointer-events: auto;
}
</style>
