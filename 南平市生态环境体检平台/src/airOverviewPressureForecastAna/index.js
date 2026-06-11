window.airOverviewPressureForecastAnaComponent = {
template: 
`<div id="t-l-c-airOverviewPressureForecastAna" class="t-l-c-airOverviewPressureForecastAna" >` +
`<t-text v-if="state.hasChartData === false" id="t-text-10ae.895f3ed0c" class="airOverviewPressureForecastAna-t-text-0-0"  :label="state.noDataText" :editable="tTextx0x0ComputedData.editable" :c-style="tTextx0x0ComputedData.cStyle">` +
`</t-text>` +
`<t-table id="t-table-b7b7.800201ecf" class="airOverviewPressureForecastAna-t-table-0-1"  :height="tTablex0x1ComputedData.height" :stripe="tTablex0x1ComputedData.stripe" :border="tTablex0x1ComputedData.border" :auto-scroll="tTablex0x1ComputedData.autoScroll" :speed="tTablex0x1ComputedData.speed" :show-animation="tTablex0x1ComputedData.showAnimation" :animation-delay="tTablex0x1ComputedData.animationDelay" :animation-type="tTablex0x1ComputedData.animationType" :columns="state.tableColumns" :data="state.tableData" :default-sort="tTablex0x1ComputedData.defaultSort" :c-style="tTablex0x1ComputedData.cStyle">` +
`</t-table>` +
`<t-radio id="t-radio-dcf3.4362336b1" class="airOverviewPressureForecastAna-t-radio-0-2"  :options="tRadiox0x2ComputedData.options" :active="state.radioSelect" :alias="tRadiox0x2ComputedData.alias" :disabled="tRadiox0x2ComputedData.disabled" :border="tRadiox0x2ComputedData.border" :size="tRadiox0x2ComputedData.size" :is-use-button="tRadiox0x2ComputedData.isUseButton" :c-style="tRadiox0x2ComputedData.cStyle" :options-raw="tRadiox0x2ComputedData.optionsRaw" @change="onchange1733920748958">` +
`</t-radio>` +
`<t-chart-design v-if="state.hasChartData === true" id="t-chart-design-3ef9.d3eb8a719" class="airOverviewPressureForecastAna-t-chart-design-0-3"  :empty-img="tChartDesignx0x3ComputedData.emptyImg" :c-style="tChartDesignx0x3ComputedData.cStyle" :options="state.chartOption">` +
`</t-chart-design>` +
`<t-component id="t-component-10c2.7cdde9e89" class="airOverviewPressureForecastAna-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-63f5.24c77f15b" class="airOverviewPressureForecastAna-t-text-0-5"  :label="state.titleText" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-e36e.d8067ffa8" class="airOverviewPressureForecastAna-t-text-0-6"  :label="state.timeValue" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
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
   noDataText: "暂无数据",
   hasChartData: false,
   tableColumns: [{"label":"指标","key":"POLLUTE_INDEX","align":"left","operationList":[],"stateList":[],"headerAlign":"left"},{"label":"预测最小值","key":"PREDICTION_MIN","align":"center","operationList":[],"stateList":[]},{"label":"预测最大值","key":"PREDICTION_MAX","align":"center","operationList":[],"stateList":[]},{"label":"预测平均值","key":"PREDICTION_AVG","align":"center","operationList":[],"stateList":[]},{"label":"2024年目标值","key":"TARGET_VALUE","align":"center","operationList":[],"stateList":[]},{"label":"截止当前","key":"TO_NOW","align":"center","operationList":[],"stateList":[]}],
   tableData: [],
   timeValue: "时间：--",
   titleText: "浓度变化预测",
   chartOption: {},
   chartUnit: "",
   radioSelect: "GOOD_DAYS",
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
tTextx0x0: {
defaultStyle: {
            default: {"width":"96px","height":"20px","color":"var(--business-no-data-color)","left":"432px","textAlign":"center","fontSize":"12px","lineHeight":"20px"},
            
            },
 default: { 
 
label:"暂无数据",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"20px","color":"var(--business-no-data-color)","left":"432px","textAlign":"center","fontSize":"12px","lineHeight":"20px"}}}, 
 },
},
tTablex0x1: {
defaultStyle: {
            default: {"width":"960px","height":"280px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","top":"44px"},
            
            },
 default: { 
 
height:"280",
stripe:true,
border:false,
autoScroll:false,
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[{"label":"指标","key":"POLLUTE_INDEX","align":"left","operationList":[],"stateList":[],"headerAlign":"left"},{"label":"预测最小值","key":"PREDICTION_MIN","align":"center","operationList":[],"stateList":[]},{"label":"预测最大值","key":"PREDICTION_MAX","align":"center","operationList":[],"stateList":[]},{"label":"预测平均值","key":"PREDICTION_AVG","align":"center","operationList":[],"stateList":[]},{"label":"2024年目标值","key":"TARGET_VALUE","align":"center","operationList":[],"stateList":[]},{"label":"截止当前","key":"TO_NOW","align":"center","operationList":[],"stateList":[]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"960px","height":"280px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","top":"44px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-table-header-bg)   ","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"10px","paddingRight":"10px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-table-odd-row-bg)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"var(--t-white)","height":"40px","paddingTop":"8px","paddingBottom":"8px","fontSize":"14px","fontFamily":"微软雅黑","paddingLeft":"10px","paddingRight":"10px"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"stripeBodyCell":{"default":{"backgroundColor":"var(--business-table-even-row-bg)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}}}, 
 },
},
tRadiox0x2: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"454px","height":"20px","position":"unset","left":"0px","top":"334px","animationName":""},
            
            },
 default: { 
 
options:[{"label":"GOOD_DAYS","value":"优良率","disabled":false},{"label":"PM25","value":"PM₂.₅","disabled":false},{"label":"PM10","value":"PM₁₀","disabled":false},{"label":"NO2","value":"NO₂","disabled":false},{"label":"O3_8","value":"O₃-8h","disabled":false},{"label":"ZHZS","value":"综合指数","disabled":false}],
active:"GOOD_DAYS",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"454px","height":"20px","position":"unset","left":"0px","top":"334px","animationName":""}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"},"active":{"color":"rgba(255, 255, 255, 1)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"itemWrapper":{"default":{"paddingRight":"0px","marginRight":"12px"}}},
optionsRaw:[{"label":"GOOD_DAYS","value":"优良率","disabled":false},{"label":"PM25","value":"{{PM25}}","disabled":false},{"label":"PM10","value":"{{PM10}}","disabled":false},{"label":"NO2","value":"{{NO2}}","disabled":false},{"label":"O3_8","value":"{{O3}}-8h","disabled":false},{"label":"ZHZS","value":"综合指数","disabled":false}], 
 },
},
tChartDesignx0x3: {
defaultStyle: {
            default: {"height":"215px","width":"960px","position":"unset","left":"0px","top":"370px"},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"215px","width":"960px","position":"unset","left":"0px","top":"370px"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"910px","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"dialogTitleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"910px","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/dialogTitleFirstBg",
componentName:"dialogTitleFirstBgComponent", 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"var(--business-white)","position":"unset","left":"34px","top":"5px","fontSize":"16px","fontFamily":"方正综艺","letterSpacing":"2px","lineHeight":"20px"},
            
            },
 default: { 
 
label:"浓度变化预测",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"var(--business-white)","position":"unset","left":"34px","top":"5px","fontSize":"16px","fontFamily":"方正综艺","letterSpacing":"2px","lineHeight":"20px"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"175px","height":"20px","color":"var(--business-white)","fontSize":"14px","fontFamily":"微软雅黑","lineHeight":"20px","top":"7px","left":"775px","textAlign":"right","position":"unset"},
            
            },
 default: { 
 
label:"时间：--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"175px","height":"20px","color":"var(--business-white)","fontSize":"14px","fontFamily":"微软雅黑","lineHeight":"20px","top":"7px","left":"775px","textAlign":"right","position":"unset"}}}, 
 },
},
});
const initChartOption = () => {
// 除开tooltip的fomatter，其他的配置拷贝基础折线图的”原生配置“属性值、主题的valueAxis、categoryAxis、legend、tooltip配置
state.chartOption = {
  "tooltip": {
    "trigger": "axis",
    formatter: (formatterParams) => {
      // 以下属性都是处理series数据时添加的字段data的单项值对象中的属性
      /**
       * isMeasure: 是否为实测值
       * isForecast: 是否为预测值
       * forecastValue: 预测范围值
       */
      let str = '';
      const name = formatterParams[0].axisValue;
      // 是否含有实测值（用some不是用every：实测值和预测值连接点处hover时，会有三个系列，tooltip提示不对）
      const isMeasureSeries = formatterParams.some((item) => item.data.isMeasure);
      // 是否全为预测值
      const isForecastSeries = formatterParams.every((item) => item.data.isForecast);
      str = `<div style="margin: 10px 0 0;line-height: 1">${formatterParams[0].marker}<span>${formatterParams[0].seriesName}</span>
    <span style="float: right;margin-left: 10px;">${isMeasureSeries ? formatterParams[0].value[1] : (isForecastSeries ? formatterParams[0].data.forecastValue : '--')}</span><br/></div>`;
      // 如果都为false的情况，返回空
      return !isMeasureSeries && !isForecastSeries ? '' : `${name}<br/>${str}`;
    },
    // 主题配置开始--------
    "axisPointer": {
      "lineStyle": {
        "color": "#008acd",
        "width": "1"
      },
      "crossStyle": {
        "color": "#008acd",
        "width": "1"
      }
    },
    "backgroundColor": "rgba(0, 0, 0, 0.8)",
    "borderColor": "rgba(255, 255, 255, 0.5)",
    "textStyle": {
      "color": "rgba(255, 255, 255, 1)"
    },
    // 主题配置结束--------
  },
  "grid": {
    "containLabel": true,
    "left": "4%",
    "bottom": "12%",
    "top": "16%",
    "right": "4%"
  },
  "color": [
    "#2CCAFF",
    "#177FC1",
    "#177FC1"
  ],
  "legend": {
    "top": "bottom",
    "itemWidth": 18,
    "itemHeight": 16,
    // 主题配置开始--------
    "textStyle": {
      "color": "rgba(255, 255, 255, 1)",
      "fontSize": 12,
      "height": 8,
      "rich": {
        "a": {
          "verticalAlign": "center"
        }
      }
    },
    // 主题配置结束--------
    "data": [
      {
        "name": "实测值",
        "itemStyle": {
          "borderColor": "#fff",
          "borderWidth": 1
        }
      },
      {
        "name": "预测值",
        "icon": "roundRect"
      }
    ]
  },
  "xAxis": {
    "type": "category",
    "boundaryGap": false,
    "data": [],
    // 主题配置开始----------
    "axisLine": {
      "show": true,
      "lineStyle": {
        "type": "solid",
        "color": "rgba(173, 197, 255, 0.5)"
      }
    },
    "axisTick": {
      "show": false,
      "lineStyle": {
        "color": "rgba(173, 197, 255, 0.3)"
      }
    },
    "axisLabel": {
      "show": true,
      "color": "#B7E3FF",
      "fontSize": 14,
       interval: 0,
      //  margin: 8,
      //  rotate: 45
    },
    "splitLine": {
      "show": false,
      "lineStyle": {
        "color": [
          "rgba(202,202,202,0.3)"
        ]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": [
          "rgba(250,250,250,0.3)",
          "rgba(200,200,200,0.3)"
        ]
      }
    },
    "nameTextStyle": {
      "color": "#B7E3FF",
      "fontSize": 14
    },
    // 主题配置结束----------
  },
  "yAxis": {
    "type": "value",
    "name": "%",
    // 主题配置开始----------
    "axisLine": {
      "show": false,
      "lineStyle": {
        "type": "solid",
        "color": "rgba(173, 197, 255, 0.3)"
      }
    },
    "axisTick": {
      "show": false,
      "lineStyle": {
        "color": "rgba(173, 197, 255, 0.3)"
      }
    },
    "axisLabel": {
      "show": true,
      "color": "#B7E3FF",
      "fontSize": 14
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "type": "dashed",
        "color": "rgba(173, 197, 255, 0.3)"
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": [
          "rgba(250,250,250,0.2)",
          "rgba(210,219,238,0.2)"
        ]
      }
    },
    "nameTextStyle": {
      "color": "#B7E3FF",
      "fontSize": 14
    }
    // 主题配置结束----------
  },
  "series": [
    {
      "name": "实测值",
      "type": "line",
      "symbolSize": 8,
      "symbol": "circle",
      "itemStyle": {
        "borderColor": "#fff"
      },
      "data": []
    },
    {
      "name": "预测值",
      "stack": "forecast",
      "type": "line",
      "symbol": "none",
      "lineStyle": {
        "width": 0
      },
      "data": []
    },
    {
      "name": "预测值",
      "lineStyle": {
        "width": 0
      },
      "stack": "forecast",
      "type": "line",
      "symbol": "none",
      "areaStyle": {},
      "data": []
    }
  ]
};
};
const setTableColumns = () => {
state.tableColumns[4].label = `${dateFormat(new Date(), 'yyyy年')}目标值`;
state.tableColumns[5].label = `截止${dateFormat(new Date(), 'MM月')}`;
state.timeValue = `时间：${dateFormat(new Date(), 'yyyy-MM')}`;
};
const setChartUnit = (value) => {
// μg/m3
const threeSup = convertCharacter('上标')[0].split(' ')[3] || '3';
let chartUnit = '';
switch (value) {
  case 'PM25':
  case 'PM10':
  case 'NO2':
  case 'O3_8':
    chartUnit = `μg/m${threeSup}`;
    break;
  case 'GOOD_DAYS':
    chartUnit = '%';
    break;
  default:
    chartUnit = '';
    break;
}
state.chartOption.yAxis.name = chartUnit;
};
const onchange1733920748958 = (data,selectOption) => {
// 设置变量值
state.radioSelect = data;
// 执行自定义方法
setChartUnit(data);
};
// 接口函数
const getTableData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"e8b3a46e79a14dd19e5bd0c72db3b409"},}).then((res) => {
     // 成功的操作
     state.tableData = [];
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.tableData = (data || []).map((item) => ({
    ...item,
    POLLUTE_INDEX: replacePollutionCharacter(handleNoVal(item.POLLUTE_INDEX)),
  }));
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
      reject(error);
    });
  });
};
// 初始请求，调取接口
getTableData();
// 接口函数
const getChartData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE_TYPE":state.radioSelect,"interfaceId":"08c77d326616a704462dcc3c9c6749d4"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
// x轴数据、实测值数据、预测最小值、预测最大值数据
const xAxisData = [];
const measureValue = [];
const forecastMinValue = [];
const forecastMaxValue = [];
if (head.statusCode === '200' && data) {
  (data || []).forEach((item) => {
    xAxisData.push(item.MONITORTIME);
    // POLLUTE_VALUE_YC 字段值不为空时，POLLUTE_VALUE_YC 代表预测最小值，POLLUTE_VALUE_REAL代表预测最大值
    // 实测值、预测值系列的值都采用value: [x轴值, 数值]形式，一一对应
    if (item.POLLUTE_VALUE_YC) {
      // 预测最小值
      forecastMinValue.push({
        value: [item.MONITORTIME, item.POLLUTE_VALUE_YC],
        isMeasure: false, // 是否为实测值系列
        isForecast: true, // 是否为预测值系列
        forecastValue: `${item.POLLUTE_VALUE_YC}~${item.POLLUTE_VALUE_REAL}`,
      });
      // 预测最大值：因为后两条折线为堆叠折线，是个范围值，所以第二条折线的值为最大值-最小值
      forecastMaxValue.push({
        value: [item.MONITORTIME, Number(item.POLLUTE_VALUE_REAL) - Number(item.POLLUTE_VALUE_YC)],
        isMeasure: false,
        isForecast: true,
        forecastValue: `${item.POLLUTE_VALUE_YC}~${item.POLLUTE_VALUE_REAL}`,
      });
    } else {
      measureValue.push({
        value: [item.MONITORTIME, item.POLLUTE_VALUE_REAL],
        isMeasure: true,
        isForecast: false,
      });
    }
  });
  if (measureValue.length) {
    // 预测最小值和实测值最后一个点数据保持一致，为了跟实测值-折线 连接起来
    forecastMinValue.unshift({
      value: measureValue[measureValue.length - 1].value,
      isMeasure: false,
      isForecast: false,
    });
    // 预测最大值设为0
    forecastMaxValue.unshift({
      value: [measureValue[measureValue.length - 1].value[0], 0],
      isMeasure: false,
      isForecast: false,
    });
  }
}
state.hasChartData = !!xAxisData.length;
// 设置echart图数据
state.chartOption.xAxis.data = xAxisData;
state.chartOption.series[0].data = measureValue;
state.chartOption.series[1].data = forecastMinValue;
state.chartOption.series[2].data = forecastMaxValue;


      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.hasChartData = false;
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [state.radioSelect], () => {
getChartData();
},{
deep: true, // 深度监听
});
// 初始请求，调取接口
getChartData();
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewPressureForecastAna', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initChartOption();
// 执行自定义方法
setTableColumns();
onMounted(() => {
setPageScale('t-l-c-airOverviewPressureForecastAna', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTextx0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0.default, componentState.tTextx0x0?.[state.screenSize]));

 const tTablex0x1ComputedData = computed(() => _.merge({}, componentState.tTablex0x1.default, componentState.tTablex0x1?.[state.screenSize]));

 const tRadiox0x2ComputedData = computed(() => _.merge({}, componentState.tRadiox0x2.default, componentState.tRadiox0x2?.[state.screenSize]));

 const tChartDesignx0x3ComputedData = computed(() => _.merge({}, componentState.tChartDesignx0x3.default, componentState.tChartDesignx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

return {
global,
state,
componentState,
tTextx0x0ComputedData,
tTablex0x1ComputedData,
tRadiox0x2ComputedData,
tChartDesignx0x3ComputedData,
tComponentx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
onchange1733920748958,
};
},
};