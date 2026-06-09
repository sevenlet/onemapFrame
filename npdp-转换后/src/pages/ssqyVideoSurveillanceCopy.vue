<template>
  <div id="t-l-c-ssqyVideoSurveillanceCopy" class="t-l-c-ssqyVideoSurveillanceCopy" ><t-row id="t-row-98f0.74418cba5" class="ssqyVideoSurveillance-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-col id="t-col-15d5.d7417c346" class="ssqyVideoSurveillance-t-col-0-0-0"  :span="tColx0x0x0ComputedData.span" :offset="tColx0x0x0ComputedData.offset" :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull" :c-style="tColx0x0x0ComputedData.cStyle"><t-tabs-scroll v-if="state.cardVisible === true" id="t-tabs-scroll-cad3.642611003" class="ssqyVideoSurveillance-t-tabs-scroll-0-0-0-0"  :data="replaceCssVariables(filterData(state.tabList, componentPropBindingMap?.['t-tabs-scroll-cad3.642611003']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active-path="replaceCssVariables(filterData(state.activeVideo, componentPropBindingMap?.['t-tabs-scroll-cad3.642611003']['activePath'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :show-icon="tTabsScrollx0x0x0x0ComputedData.showIcon" :custom-icon="tTabsScrollx0x0x0x0ComputedData.customIcon" :key-field="tTabsScrollx0x0x0x0ComputedData.keyField" :c-style="tTabsScrollx0x0x0x0ComputedData.cStyle" @tab-click="ontabClick1767945580264_0_0"></t-tabs-scroll><t-component v-if="state.tabList.length !== 0" id="t-component-9465.0e6b02a27" class="ssqyVideoSurveillance-t-component-0-0-0-1"  :name="tComponentx0x0x0x1ComputedData.name" :channel-code="replaceCssVariables(filterData(state.selectedChannelCode, componentPropBindingMap?.['t-component-9465.0e6b02a27']['channelCode'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :loading="tComponentx0x0x0x1ComputedData.loading" :c-style="tComponentx0x0x0x1ComputedData.cStyle" :src="tComponentx0x0x0x1ComputedData.src" :component-name="tComponentx0x0x0x1ComputedData.componentName" :page-id="tComponentx0x0x0x1ComputedData.pageId" :page-code="tComponentx0x0x0x1ComputedData.pageCode"></t-component></t-col></t-row><t-row v-if="state.tabList.length === 0" id="t-row-828c.1b7ecbe94" class="ssqyVideoSurveillance-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-col id="t-col-73fe.561cf0126" class="ssqyVideoSurveillance-t-col-0-1-0"  :span="tColx0x1x0ComputedData.span" :offset="tColx0x1x0ComputedData.offset" :push="tColx0x1x0ComputedData.push" :pull="tColx0x1x0ComputedData.pull" :c-style="tColx0x1x0ComputedData.cStyle"><t-text-common id="t-text-common-43ed.73653e8d4" class="ssqyVideoSurveillance-t-text-common-0-1-0-0"  :label="tTextCommonx0x1x0x0ComputedData.label" :editable="tTextCommonx0x1x0x0ComputedData.editable" :c-style="tTextCommonx0x1x0x0ComputedData.cStyle"></t-text-common></t-col></t-row></div>
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
import { TCol, TComponent, TRow, TTabsScroll, TTextCommon } from '@ths/design';

export default {
  components: {
    TCol,
    TComponent,
    TRow,
    TTabsScroll,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-98f0.74418cba5":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-15d5.d7417c346":{"attributeName":"tColx0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-scroll-cad3.642611003":{"attributeName":"tTabsScrollx0x0x0x0","data":{"filters":[]},"activePath":{"filters":[]},"showIcon":{"filters":[]},"customIcon":{"filters":[]},"keyField":{"filters":[]},"cStyle":{"filters":[]}},"t-component-9465.0e6b02a27":{"attributeName":"tComponentx0x0x0x1","name":{"filters":[]},"channelCode":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-row-828c.1b7ecbe94":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-73fe.561cf0126":{"attributeName":"tColx0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-43ed.73653e8d4":{"attributeName":"tTextCommonx0x1x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   cardVisible: true,
   selectedChannelCode: "",
   STANDENTERID: "",
   monitorData: [],
   tabList: [],
   activeVideo: "",
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"1%","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"1%","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","flexDirection":"column"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","flexDirection":"column"}}}, 
 },
},
tTabsScrollx0x0x0x0: {
defaultStyle: {
            default: {"width":"98%","height":"44px","position":"unset","left":"1%","top":"2%","backgroundColor":"transparent","animationName":"","marginBottom":"10px"},
            
            },
 default: { 
 
data:[],
activePath:"",
showIcon:false,
customIcon:true,
keyField:{"label":"label","icon":"icon","path":"channelcode"},
cStyle:{"wrapper":{"default":{"width":"98%","height":"44px","position":"unset","left":"1%","top":"2%","backgroundColor":"transparent","animationName":"","marginBottom":"10px"}},"itemWrapper":{"default":{"backgroundColor":"#064596","color":"#B7E3FF","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px"},"hover":{"backgroundColor":"#064596","color":"#B7E3FF","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px"},"active":{"backgroundColor":"#064596","borderLeft":"1px solid #00FFFF","borderTop":"1px solid #00FFFF","borderRight":"1px solid #00FFFF","borderBottom":"1px solid #00FFFF","color":"#B7E3FF","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px"}},"moreButton":{"default":{"display":"none","width":"auto","height":"auto"}},"tabsButton":{"default":{"backgroundColor":"#064596","color":"#B7E3FF"},"hover":{"backgroundColor":"#064596","color":"#B7E3FF"},"active":{"backgroundColor":"#064596","color":"#B7E3FF"}}}, 
 },
},
tComponentx0x0x0x1: {
defaultStyle: {
            default: {"width":"98%","height":"90%","margin":"0 auto","position":"unset","left":"1%","top":"75px"},
            
            },
 default: { 
 
name:"monitorVideoListComponent",
channelCode:"",
loading:true,
cStyle:{"wrapper":{"default":{"width":"98%","height":"90%","margin":"0 auto","position":"unset","left":"1%","top":"75px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/monitorVideoList",
componentName:"monitorVideoListComponent",
pageId:"eeba259c918d4432886df6696a141ff5",
pageCode:"monitorVideoList", 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"50px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"48% !important","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"50px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"48% !important","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x0: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"10px","top":"10px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"10px","top":"10px"}}}, 
 },
},
tTextCommonx0x1x0x0: {
defaultStyle: {
            default: {"width":"96px","height":"20px","color":"#2c81e2","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"378px","top":"295px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"暂无视频数据",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"20px","color":"#2c81e2","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"378px","top":"295px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
});
const handleWaterTarget = () => {
// 水质目标发生变化执行---------------------

// 先隐藏图表
state.variationTrendData.chartShow = false;
// 图表为空
state.variationTrendData.chartOptions = {
  series: []
};

// 水质
if (state.variationTrendData.activeTarget === 'waterLevelChange') {
  state.variationTrendData.title = '近12个月水质变化趋势';

  // 水质接口
  apiRegistry.getWaterVariationTrend.request();
} else {
  // 其他污染物
  state.variationTrendData.title = '近12个月污染物浓度变化趋势';

  // 污染物接口
  apiRegistry.getPollutantVariationTrend.request();
}
// 显示图表，延迟为了处理数据不刷新的问题
setTimeout(() => {
  state.variationTrendData.chartShow = true;
}, 100)
};
const getWaterChartLabel = (value) => {
// 设置x轴显示的文本
if (value === 1) {
  value = 'Ⅰ类';
} else if (value === 2) {
  value = 'Ⅱ类';
} else if (value === 3) {
  value = 'Ⅲ类';
} else if (value === 4) {
  value = 'Ⅳ类';
} else if (value === 5) {
  value = 'Ⅴ类';
} else if (value === 6) {
  value = '劣Ⅴ类';
} else {
  value = '-';
}
return value;

};
const getChartOptions = () => {
// 图表配置项
let chartOption = {};
const toolbox = {
  show: true,
  top: 5,
  right: 130,
  iconStyle: {
    color: '#fff'
  },
  feature: {
    magicType: {
      type: ["line", "bar"],
      title: {
        line: '转为折线图',
        bar: '转为柱状图'
      }
    },
  }
};
if (state.variationTrendData.activeTarget === 'waterLevelChange') {
  // 水质的图表配置
  chartOption = {
    "dataZoom": [
      {
        "type": "slider",
        "height": 10,

        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        textStyle: {
          color: '#fff'
        }
      },
      {
        type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
      }
    ],
    toolbox,
    grid: {
      top: "15%",
      left: '6%',
      right: '2%',
      bottom: '100px'
    },
    color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
    legend: {
      show: true,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 13
      },
      // data: ['当月值', '累计均值', '去年同期', '去年累计均值指标']
      data: ['当月值',  '去年同期']

    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      "formatter": (formatterParams) => {
        if (!formatterParams[0].data?.tooltipXAxisLabel) return;
        let str = '';
        const name = formatterParams[0].data?.tooltipXAxisLabel || '--';
        formatterParams.forEach((item) => {
          const unit = item.data?.unit || '';
          const valueName = handleNoVal(item.data?.valueName);
          // 如果值是数组，则取最后一项，参考官网值为数组；
          const curValue = Array.isArray(item.value) ? item.value[item.value.length - 1] : item.value;
          // hiddenInTooltip 是否在tooltip中隐藏
          if (item.data?.hiddenInTooltip) return;
          // ${handleNoVal(curValue) !== '--' ? unit : ''}
          str += `<div style="margin: 10px 0 0;line-height: 1">${item.marker}<span>${item.seriesName}</span>
    <span style="float: right;margin-left: 10px;">
    ${item.data?.showValueName ? valueName : getWaterChartLabel(Number(curValue) || 0)}${unit}</span><br/></div>`;
        });
        return `${name}<br/>${str}`;
      }
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13,
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 13
      }
    },
    yAxis: {
      type: 'value',
      max: 6,
      axisLabel: {
        formatter: function (value) {
          return getWaterChartLabel(value);
        },
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      name: '',
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        align: 'right',
        padding: [0, 0, 10, -24],
        fontSize: 13
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255, 0.2)'
        }
      }
    },
    series: []
  };
} else if (state.variationTrendData.activeTarget === 'W01001') {
  // ph 的图表配置
  chartOption = {
    "dataZoom": [
      {
        "type": "slider",
        "height": 10,

        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        textStyle: {
          color: '#fff'
        }
      },
      {
        type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
      }
      // {
      //   "type": "slider",
      //   "backgroundColor": getCssVariable('--business-show-bg30'),
      //   "borderColor": getCssVariable('--business-show-bg30'),
      //   "borderRadius": 0,
      //   "showDetail": false,
      //   "showDataShadow": false,
      //   "zoomLock": true,
      //   "height": 7,
      //   "end": 50,
      //   "brushSelect": false,
      //   "bottom": "0%",
      //   "brushStyle": {
      //     "color": "#000"
      //   },
      //   "fillerColor": getCssVariable('--business-btn-default'),
      //   "handleIcon": "none",
      //   "handleStyle": {
      //     "color": "#2D955A",
      //     "borderColor": "#D1D5D9",
      //     "borderCap": "round"
      //   }
      // }
    ],
    grid: {
      top: '15%',
      left: '5%',
      right: '4%',
      // bottom: '12%'
      bottom: '100px'
    },
    color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
    legend: {
      show: true,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 13
      },
      data: ['当月值', '去年同期']
    },
    toolbox,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      "formatter": (value) => handleTooltipFormatter(value)
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13,
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 13
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      name: '',
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        align: 'right',
        padding: [0, 0, 10, -24],
        fontSize: 13
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255, 0.2)'
        }
      }
    },
    series: []
  }
} else {
  // 其他污染物
  chartOption = {
    "dataZoom": [
      // {
      //   "type": "slider",
      //   "backgroundColor": getCssVariable('--business-show-bg30'),
      //   "borderColor": getCssVariable('--business-show-bg30'),
      //   "borderRadius": 0,
      //   "showDetail": false,
      //   "showDataShadow": false,
      //   "zoomLock": true,
      //   "height": 7,
      //   "end": 50,
      //   "brushSelect": false,
      //   "bottom": "0%",
      //   "brushStyle": {
      //     "color": "#000"
      //   },
      //   "fillerColor": getCssVariable('--business-btn-default'),
      //   "handleIcon": "none",
      //   "handleStyle": {
      //     "color": "#2D955A",
      //     "borderColor": "#D1D5D9",
      //     "borderCap": "round"
      //   }
      // }
      {
        "type": "slider",
        "height": 10,

        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        textStyle: {
          color: '#fff'
        }
      },
      {
        type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
      }
    ],
    grid: {
      top: '15%',
      left: '5%',
      right: '4%',
      // bottom: '12%'
      bottom: '100px'
    },
    color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
    legend: {
      show: true,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 13
      },
       data: ['当月值',  '去年同期']
    },
    toolbox,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      "formatter": (value) => handleTooltipFormatter(value)
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13,
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 13
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      name: 'mg/L',
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        align: 'right',
        padding: [0, 0, 10, -24],
        fontSize: 13
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255, 0.2)'
        }
      }
    },
    series: []
  }
}

return chartOption;
};
const initPageData = () => {
// 处理参数
state.STANDENTERID = global.businessDialog.dialogParmas?.POINT_CODE || global.businessDialog.dialogParmas?.organizationid || '';
apiRegistry.getList.request();



};
const setNoDataIcon = () => {
// 设置暂无数据图标
state.noDataImg= getCssVariable('--business-no-data-img');
};
const getWaterLevelSrc = (key) => {
// 图标路径
const waterLevelSrc = [
    "6678a04114a34021a947caa73ebcf17f",
    "7cd40b10184443b6bdff4282e363f9de",
    "3a76262a85f24b9b983339ab06117f78",
    "1f1734ed58db4ed991edd563a803baef",
    "411e6a8a398246b1a82e117669795e44",
    "7732a1ec888e44e2bd34cb304dd71a0a",
    "85937bae863347139a4039c3df87e4b2"
]
return `url(assets/images/2024-12-30/${waterLevelSrc[Number(key) || 0]}.svg)`
};
const changeTime = (time) => {
state.timeRange = time || [];
state.startTime = time[0] || '';
state.endTime = time[1] || '';
};
const changeStandard = () => {
if (
  Array.isArray(state.seriesData)
  && Array.isArray(state.standardSeriesData)
) {
  // 没有标准值的
  state.variationTrendData.chartOptions.series = [
    ...state.seriesData,
  ];
  // 有标准值的
  state.options = _.cloneDeep(state.variationTrendData.chartOptions)
  state.options.series = [
    ...state.seriesData,
    ...state.standardSeriesData
  ];
}
console.log('没有标准值的',state.variationTrendData.chartOptions)
console.log('有标准值的', state.options)
};
const handleWaterLevelStandard = (seriesName,lineColor,labelPosition) => {
// 默认线条颜色
const defaultLineColor = '#465FFF';
return {
  name: seriesName,
  "type": "line",
  "symbol": "none",
  "lineStyle": {
    "type": "dashed",
    "width": 0
  },
  itemStyle: {
    color: lineColor || defaultLineColor,
  },
  markLine: {
    'symbol': 'none',
    "label": {
      position: labelPosition || 'insideEndTop',
      "color": lineColor || defaultLineColor,
      "fontSize": 12,
      formatter: (params) => {
        return `${handleNoVal(seriesName)}：${getWaterChartLabel(Number(params.value) || 0)}`
      }
    },
    "data": [
      {
        "0": {
          "valueIndex": 1,
          "type": "max"
        },
        "type": "average"
      }
    ],
    "silent": true
  },
}
};
const handleCharts = (myChart) => {
console.log('myChart', myChart)
state.myChart = myChart
};
const setCardStyle = () => {
const sheet = new CSSStyleSheet();
sheet.insertRule(`body #t-scrollable-cards-455f.ff3a2c962 .scrollable-cards-body {
width: 100% !important;
}`);

document.adoptedStyleSheets = [sheet];

};
const changeTopTabs = (data) => {
// 如果第二个下拉框选中all 那就把入参 selectTwo置为空
state.selectTwo = state.selectTwoValue === 'all' ? '' : state.selectTwoValue;
state.surfaceWaterParamsState.ASSESSTYPE = state.tabsActiveValue
// 整体评价结果-卡片
getPJResultCard();
// 断面评价结果-列表
getSZPLList();

rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  // 给地图发消息
  data: [
    {
      "code": "id",
      "shareCode": "ASSESSTYPE",
      "defaultValue": "",
      "runtimeValue": data.value,
    },
    {
      "code": "text",
      "shareCode": "",
      "defaultValue": "",
      "runtimeValue": data.label
    },
    {
      "code": "defaultTab",
      "name": "",
      "defaultValue": "pointWq",
      "shareCode": "defaultTab",
      "runtimeValue": "pointWq"
    }
  ]
});
};
const handleDateType = () => {
switch (state.tabSelect) {
  case '5minute':
    state.dateType = 'datetimeminute';
    break;
  case 'hour':
    state.dateType = 'datetimehour';
    break;
  case 'day':
    state.dateType = 'date';
    break;
  default:
    break;
}
};
const handleTabChange = (obj) => {
state.selectedChannelCode = obj.channelcode
state.activeVideo = obj.channelcode
};
const setCardVisible = () => {
const parentDom = document.getElementById('t-l-c-ssqyVideoSurveillanceCopy');

if (parentDom && parentDom.getBoundingClientRect().width < 400) {
  state.cardVisible = false
} else {
  state.cardVisible = true
}
};
const ontabClick1767945580264_0_0 = (item) => {
// 执行自定义方法
handleTabChange(item);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"STANDENTERID":"state.STANDENTERID","interfaceId":"1e45dd8c2e02a16d7e2ef390f30f6477"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"STANDENTERID":state.STANDENTERID,"interfaceId":"1e45dd8c2e02a16d7e2ef390f30f6477"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"STANDENTERID":state.STANDENTERID,"interfaceId":"1e45dd8c2e02a16d7e2ef390f30f6477"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getList'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.tabList = data.map(item =>{
    return{
      ...item,
      label: item.channelname,
    }
  })
  state.activeVideo = state.tabList[0].channelcode || ''
  state.selectedChannelCode = state.tabList[0].channelcode || ''
}else{
  state.tabList = []
  state.activeVideo = ''
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
                            setPageScale('t-l-c-ssqyVideoSurveillanceCopy', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-ssqyVideoSurveillanceCopy', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setCardStyle();
// 执行自定义方法
setCardVisible();
});
// 执行自定义方法
initPageData();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tColx0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0.default, componentState.tColx0x0x0?.[state.screenSize]));

 const tTabsScrollx0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tTabsScrollx0x0x0x0.default, componentState.tTabsScrollx0x0x0x0?.[state.screenSize]));

 const tComponentx0x0x0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0x0x1.default, componentState.tComponentx0x0x0x1?.[state.screenSize]));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tColx0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0.default, componentState.tColx0x1x0?.[state.screenSize]));

 const tTextCommonx0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x0x0.default, componentState.tTextCommonx0x1x0x0?.[state.screenSize]));

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
tRowx0x0ComputedData,
tColx0x0x0ComputedData,
tTabsScrollx0x0x0x0ComputedData,
tComponentx0x0x0x1ComputedData,
tRowx0x1ComputedData,
tColx0x1x0ComputedData,
tTextCommonx0x1x0x0ComputedData,
ontabClick1767945580264_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-ssqyVideoSurveillanceCopy {
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
width: 100%;
height: 100%;
background-color: rgba(255, 12, 12, 0);
}
.t-l-c-ssqyVideoSurveillanceCopy .ssqyVideoSurveillance-t-row-0-0 {
position: absolute !important;
top: 0px;
left: 1%;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-ssqyVideoSurveillanceCopy .ssqyVideoSurveillance-t-col-0-0-0 {
position: relative;
top: null;
left: null;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}

.t-l-c-ssqyVideoSurveillanceCopy .ssqyVideoSurveillance-t-tabs-scroll-0-0-0-0 {
position: unset;
top: 0px;
left: 0px;
width: 98%;
height: 44px;
pointer-events: auto;
}

.t-l-c-ssqyVideoSurveillanceCopy .ssqyVideoSurveillance-t-component-0-0-0-1 {
position: unset;
top: 75px;
left: 0px;
width: 98%;
height: 90%;
pointer-events: auto;
}

.t-l-c-ssqyVideoSurveillanceCopy .ssqyVideoSurveillance-t-row-0-1 {
position: absolute !important;
top: 48% !important;
left: 0px;
width: 100%;
height: 50px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
animation-name: ;
}

.t-l-c-ssqyVideoSurveillanceCopy .ssqyVideoSurveillance-t-col-0-1-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
animation-name: ;
}

.t-l-c-ssqyVideoSurveillanceCopy .ssqyVideoSurveillance-t-text-common-0-1-0-0 {
position: unset;
top: 295px;
left: 378px;
width: 96px;
height: 20px;
pointer-events: auto;
}
</style>
