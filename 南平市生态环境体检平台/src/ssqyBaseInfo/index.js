window.ssqyBaseInfoComponent = {
template: 
`<div id="t-l-c-ssqyBaseInfo" class="t-l-c-ssqyBaseInfo" >` +
`<t-list-card id="t-list-card-d9ab.2e21fb3b5" class="ssqyBaseInfo-t-list-card-0-0"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-d9ab.2e21fb3b5']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x0ComputedData.spacingX" :col="tListCardx0x0ComputedData.col" :direction="tListCardx0x0ComputedData.direction" :exchange-order="tListCardx0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0ComputedData.unitBreak" :key-field="tListCardx0x0ComputedData.keyField" :active-key-field="tListCardx0x0ComputedData.activeKeyField" :active="tListCardx0x0ComputedData.active" :c-style="tListCardx0x0ComputedData.cStyle">` +
`</t-list-card>` +
`<t-component id="t-component-c019.99b6d840a" class="ssqyBaseInfo-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode">` +
`</t-component>` +
`<t-text id="t-text-62b3.48b14905c" class="ssqyBaseInfo-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-row id="t-row-bed0.5ca83a488" class="ssqyBaseInfo-t-row-0-3"  :c-style="tRowx0x3ComputedData.cStyle" :gutter="tRowx0x3ComputedData.gutter" :justify="tRowx0x3ComputedData.justify" :align="tRowx0x3ComputedData.align">` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-list-card-d9ab.2e21fb3b5":{"attributeName":"tListCardx0x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-c019.99b6d840a":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-62b3.48b14905c":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-bed0.5ca83a488":{"attributeName":"tRowx0x3","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}}};
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
   pointCode: "",
   lastTime: "2025-09-09",
   baseInfoData: [{"title":"固定源名称","num":"-"},{"title":"固定源地址","num":"-"},{"title":"法人名称","num":"-"},{"title":"联系方式","num":"-"},{"title":"社会统一信用代码","num":"-"},{"title":"行政区","num":"-"},{"title":"行业类别","num":"-"},{"title":"点源类型","num":"-"},{"title":"排入水体","num":"-"},{"title":"特征污染物","num":"-"}],
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
tListCardx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"196px","position":"unset","left":"0px","top":"37px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"固定源名称","num":"-"},{"title":"固定源地址","num":"-"},{"title":"法人名称","num":"-"},{"title":"联系方式","num":"-"},{"title":"社会统一信用代码","num":"-"},{"title":"行政区","num":"-"},{"title":"行业类别","num":"-"},{"title":"点源类型","num":"-"},{"title":"排入水体","num":"-"},{"title":"特征污染物","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"196px","position":"unset","left":"0px","top":"37px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible","display":"block"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--base-label-bg-color)","width":"30%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--base-label-title-color)","fontSize":"var(--business-text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"numBox":{"default":{"backgroundColor":"var(--info-background)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":""}},"num":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--base-label-text-color)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"34px","top":"4px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"基本信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"34px","top":"4px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
tRowx0x3: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
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

state.pointCode = global.businessDialog.dialogParmas.POINT_CODE || '';
apiRegistry.getBaseInfo.request();

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
return `url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-30/${waterLevelSrc[Number(key) || 0]}.svg)`
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
debugger;
const sheet = new CSSStyleSheet();
sheet.insertRule(`body #t-scrollable-cards-455f.ff3a2c962 .scrollable-cards-body {
width: 100% !important;
}`);

document.adoptedStyleSheets = [sheet];

};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"STANDENTERID":"state.pointCode","interfaceId":"aef2656ba72820b2a77c3b36b2dcbced"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"STANDENTERID":state.pointCode,"interfaceId":"aef2656ba72820b2a77c3b36b2dcbced"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"STANDENTERID":state.pointCode,"interfaceId":"aef2656ba72820b2a77c3b36b2dcbced"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.baseInfoData = [
    {
      "title": "固定源名称",
      "num": data[0]?.ENTER_NAME || '-'
    },
    {
      "title": "固定源地址",
      "num": data[0]?.ENTER_ADDR || '-'
    },
    {
      "title": "法人名称",
      "num": data[0]?.CORP_NAME || '-'
    },
    {
      "title": "联系方式",
      "num": '-'
    },
    {
      "title": "社会统一信用代码",
      "num": data[0]?.TYSHXYDM || '-'
    },
    {
      "title": "行政区",
      "num": data[0]?.REGION_NAME || '-'
    },
    {
      "title": "行业类别",
      "num": data[0]?.TRADE_NAME || '-'
    },
    {
      "title": "点源类型",
      "num": data[0]?.ENTERPRISE_TYPE || '-'
    },
    {
      "title": "排入水体",
      "num": '-'
    },
    {
      "title": "特征污染物",
      "num": '-'
    }
  ]
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
                            setPageScale('t-l-c-ssqyBaseInfo', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setNoDataIcon();
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-ssqyBaseInfo', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setCardStyle();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardx0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0.default, componentState.tListCardx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRowx0x3ComputedData = computed(() => _.merge({}, componentState.tRowx0x3.default, componentState.tRowx0x3?.[state.screenSize]));

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
tListCardx0x0ComputedData,
tComponentx0x1ComputedData,
tTextx0x2ComputedData,
tRowx0x3ComputedData,
};
},
};