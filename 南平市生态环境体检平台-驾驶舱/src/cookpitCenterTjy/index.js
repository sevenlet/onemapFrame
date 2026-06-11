window.cookpitCenterTjyComponent = {
template: 
`<div id="t-l-c-cookpitCenterTjy" class="t-l-c-cookpitCenterTjy" >` +
`<t-rect id="t-rect-7339.9da1667a2" class="cookpitCenterTjy-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-c30f.19984a4ea" class="cookpitCenterTjy-t-text-common-0-1"  :label="tTextCommonx0x1ComputedData.label" :editable="tTextCommonx0x1ComputedData.editable" :c-style="tTextCommonx0x1ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-aa2d.521a338c6" class="cookpitCenterTjy-t-text-common-0-2"  :label="tTextCommonx0x2ComputedData.label" :editable="tTextCommonx0x2ComputedData.editable" :c-style="tTextCommonx0x2ComputedData.cStyle">` +
`</t-text-common>` +
`<t-chart-design id="t-chart-design-572a.31d4d5138" class="cookpitCenterTjy-t-chart-design-0-3"  :register-map-name="tChartDesignx0x3ComputedData.registerMapName" :geo-json="tChartDesignx0x3ComputedData.geoJson" :empty-img="tChartDesignx0x3ComputedData.emptyImg" :c-style="tChartDesignx0x3ComputedData.cStyle" :options="replaceCssVariables(state.chartOption, global?.theme || global?.activeTheme || '默认主题')">` +
`</t-chart-design>` +
`</div>` +
'',
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
const state = Vue.reactive({
   screenSize: "",
   chartOption: {},
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
const componentState = Vue.reactive({
tRectx0x0: {
defaultStyle: {
            default: {"width":"557px","height":"30px","left":"0px","top":"7px","backgroundImage":"var(--dialog-title-level2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"557px","height":"30px","left":"0px","top":"7px","backgroundImage":"var(--dialog-title-level2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tTextCommonx0x1: {
defaultStyle: {
            default: {"width":"150px","height":"19px","color":"var(--skin-font-color-80)","position":"unset","left":"400px","top":"16px","textAlign":"right","fontSize":"14px"},
            
            },
 default: { 
 
label:"截至2024年",
editable:false,
cStyle:{"wrapper":{"default":{"width":"150px","height":"19px","color":"var(--skin-font-color-80)","position":"unset","left":"400px","top":"16px","textAlign":"right","fontSize":"14px"}}}, 
 },
},
tTextCommonx0x2: {
defaultStyle: {
            default: {"width":"200px","height":"19px","color":"var(--skin-font-color)","position":"unset","left":"28px","top":"4px","fontSize":"20px","fontFamily":"方正综艺","letterSpacing":"2px"},
            
            },
 default: { 
 
label:"碳交易",
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"19px","color":"var(--skin-font-color)","position":"unset","left":"28px","top":"4px","fontSize":"20px","fontFamily":"方正综艺","letterSpacing":"2px"}}}, 
 },
},
tChartDesignx0x3: {
defaultStyle: {
            default: {"height":"162px","width":"557px","top":"30px","left":"0px","position":"unset"},
            
            },
 default: { 
 
registerMapName:"",
geoJson:{},
emptyImg:"",
cStyle:{"wrapper":{"default":{"height":"162px","width":"557px","top":"30px","left":"0px","position":"unset"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
});
const initChartOption = () => {
const years = ['2020年', '2021年', '2022年', '2023年', '2024年'];
const fjeaData = [99.14, 221.7, 766.14, 2619.89, 922.6];
const ccerData = [519.98, 243.16, 0.93, 3.75, 0];
const ffcerData = [78.3, 94.1, 40.33, 19.44, 2.57];
const turnoverData = [20878.46, 9486.7, 19740.12, 61731.28, 19923.79];
const textColor = getCssVariable('--skin-font-color');

const { theme } = global;
const isLightTheme = theme === 'PC浅色版';

const bgcColor = isLightTheme ? '#fff' : '#000';
const tipColor = isLightTheme ? '#000' : '#fff';


state.chartOption = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: bgcColor,
    borderWidth: 0,
    textStyle: { color: tipColor },
    show: true
  },
  grid: {
    top: 44,
    bottom: 20,
    left: 50,
    right: 70
  },
  legend: {
    data: ['FJEA成交量', 'CCER成交量', 'FFCER成交量', '成交额'],
    top: 10,
    left: 'center',
    textStyle: {
      color: textColor
    }
  },
  xAxis: {
    type: 'category',
    data: years,
    name: '',
    nameTextStyle: {
      color: textColor
    },
    axisLabel: {
      color: textColor
    },
    axisLine: {
      lineStyle: {
        color: textColor
      }
    },
    axisPointer: {
      type: 'shadow'
    }
  },
  yAxis: [
    {
      type: 'value',
      name: '万吨',
      position: 'left',
      nameTextStyle: {
        color: textColor,
        padding: [0, 0, 0, -40]
      },
      axisLabel: {
        color: textColor,
        formatter: '{value}'
      },
      axisLine: {
        lineStyle: {
          color: textColor
        }
      },
      axisTick: {
        lineStyle: {
          color: textColor
        }
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#999999'
        }
      },
      splitNumber: 3
    },
    {
      type: 'value',
      name: '万元',
      position: 'right',
      nameTextStyle: {
        color: textColor,
        padding: [0, 0, 0, 40]
      },
      axisLabel: {
        color: textColor,
        formatter: '{value}'
      },
      axisLine: {
        lineStyle: {
          color: textColor
        }
      },
      axisTick: {
        lineStyle: {
          color: textColor
        }
      },
      splitLine: {
        show: false
      },
      splitNumber: 3
    }
  ],
  series: [
    {
      name: 'FJEA成交量',
      type: 'bar',
      stack: '总量',
      emphasis: {
        focus: 'series'
      },
      barWidth: 12,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(108, 255, 250, 0.8)' },
          { offset: 1, color: 'rgba(108, 255, 250, 0)' }
        ]),
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 5
      },
      data: fjeaData
    },
    {
      name: 'CCER成交量',
      type: 'bar',
      stack: '总量',
      emphasis: {
        focus: 'series'
      },
      barWidth: 12,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(250, 200, 88, 0.8)' },
          { offset: 1, color: 'rgba(250, 200, 88, 0)' }
        ]),
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 5
      },
      data: ccerData
    },
    {
      name: 'FFCER成交量',
      type: 'bar',
      stack: '总量',
      emphasis: {
        focus: 'series'
      },
      barWidth: 12,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(255, 123, 0, 0.8)' },
          { offset: 1, color: 'rgba(255, 123, 0, 0)' }
        ]),
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 5
      },
      data: ffcerData
    },
    {
      name: '成交额',
      type: 'line',
      yAxisIndex: 1,
      itemStyle: {
        color: '#FFF200'
      },
      lineStyle: {
        color: '#FFF200',
        width: 3
      },
      symbol: 'circle',
      symbolSize: 8,
      data: turnoverData
    }
  ]
}

console.log(state.chartOption);
};
 function handleWindowResize() {
                            setPageScale('t-l-c-cookpitCenterTjy', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initChartOption();
/* 接收socket.io消息 */
const onSocketChange5a24a484912c47c6a502 = function (data) {
if(data.type === "setTheme"){
try{
// 执行自定义方法
initChartOption();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange5a24a484912c47c6a502);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange5a24a484912c47c6a502);
});
onMounted(() => {
setPageScale('t-l-c-cookpitCenterTjy', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTextCommonx0x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1.default, componentState.tTextCommonx0x1?.[state.screenSize]));

 const tTextCommonx0x2ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2.default, componentState.tTextCommonx0x2?.[state.screenSize]));

 const tChartDesignx0x3ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x3.default, componentState.tChartDesignx0x3?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tTextCommonx0x1ComputedData,
tTextCommonx0x2ComputedData,
tChartDesignx0x3ComputedData,
};
},
};