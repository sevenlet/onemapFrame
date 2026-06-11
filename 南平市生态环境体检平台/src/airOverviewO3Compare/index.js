window.airOverviewO3CompareComponent = {
template: 
`<div id="t-l-c-airOverviewO3Compare" class="t-l-c-airOverviewO3Compare" >` +
`<t-rect id="t-rect-2325.79ce94973" class="airOverviewO3Compare-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-4161.9bd54c05e" class="airOverviewO3Compare-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-ad67.771b51625" class="airOverviewO3Compare-t-text-0-2"  :label="state.pageTitle" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-c2b5.7e5d67c97" class="airOverviewO3Compare-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1734493046811">` +
`</t-rect>` +
`<t-table id="t-table-10d3.6d8162774" class="airOverviewO3Compare-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :show-animation="tTablex0x4ComputedData.showAnimation" :animation-delay="tTablex0x4ComputedData.animationDelay" :animation-type="tTablex0x4ComputedData.animationType" :columns="tTablex0x4ComputedData.columns" :data="state.fusionList" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle" :columns-raw="tTablex0x4ComputedData.columnsRaw">` +
`</t-table>` +
`<t-chart-design id="t-chart-design-f418.ba00e877" class="airOverviewO3Compare-t-chart-design-0-5"  :empty-img="tChartDesignx0x5ComputedData.emptyImg" :c-style="tChartDesignx0x5ComputedData.cStyle" :options="state.options">` +
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
   O3LineData: "",
   MONITORTIME_T3: "",
   MONITORTIME_T2: "",
   MONITORTIME_T1: "",
   fusionList: [],
   fusionDateString: "",
   pageTitle: "臭氧预测实测对比图",
   options: [],
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
            default: {"width":"1000px","height":"712px","position":"unset","left":"460px","top":"184px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"712px","position":"unset","left":"460px","top":"184px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"460px","top":"184px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"460px","top":"184px","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"194px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"479px","top":"198px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":""},
            
            },
 default: { 
 
label:"臭氧预测实测对比图",
editable:false,
cStyle:{"wrapper":{"default":{"width":"194px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"479px","top":"198px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1412px","top":"195px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1412px","top":"195px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"960px","height":"243px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"482px","top":"636px"},
            
            },
 default: { 
 
height:"243",
stripe:false,
border:false,
autoScroll:false,
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[{"label":"融合日期","key":"SHOW_DATE","align":"center","operationList":[],"stateList":[]},{"label":"PM₂.₅","key":"PM25","align":"center","operationList":[],"stateList":[],"labelRaw":"PM₂.₅"},{"label":"PM₁₀","key":"PM10","align":"center","operationList":[],"stateList":[],"labelRaw":"PM₁₀"},{"label":"NO₂","key":"NO2","stateKey":"state","align":"center","type":"default","style":{"fontStyle":{"color":"#fff","padding":"8px 4px","borderRadius":"4px"}},"operationList":[],"stateList":[{"name":"不受理","fontStyle":{"background":"linear-gradient(0deg, rgba(245, 108, 108, 1) 0%, rgba(245, 108, 108, 1) 100%)"}},{"name":"已受理","fontStyle":{"background":"linear-gradient(0deg, rgba(82, 155, 46, 1) 0%, rgba(82, 155, 46, 1) 100%)"}}],"labelRaw":"NO₂"},{"label":"O₃-8h","key":"O3","align":"center","operationList":[],"stateList":[],"labelRaw":"O₃-8h"},{"label":"AQI","key":"AQI","align":"center","operationList":[],"stateList":[]},{"label":"首要污染物","key":"FIRSTPOLLUTE","align":"center","type":"default","stateList":[],"operationList":[{"name":"重新办理","id":"reDo","visible":true,"fontStyle":{"color":"#409eff"}},{"name":"删除","id":"delete","visible":true,"fontStyle":{"color":"#409eff"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"960px","height":"243px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"482px","top":"636px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}},
columnsRaw:[{"label":"融合日期","key":"SHOW_DATE","align":"center","operationList":[],"stateList":[]},{"label":"{{PM25}}","key":"PM25","align":"center","operationList":[],"stateList":[],"labelRaw":"{{PM25}}"},{"label":"{{PM10}}","key":"PM10","align":"center","operationList":[],"stateList":[],"labelRaw":"{{PM10}}"},{"label":"{{NO2}}","key":"NO2","stateKey":"state","align":"center","type":"default","style":{"fontStyle":{"color":"#fff","padding":"8px 4px","borderRadius":"4px"}},"operationList":[],"stateList":[{"name":"不受理","fontStyle":{"background":"linear-gradient(0deg, rgba(245, 108, 108, 1) 0%, rgba(245, 108, 108, 1) 100%)"}},{"name":"已受理","fontStyle":{"background":"linear-gradient(0deg, rgba(82, 155, 46, 1) 0%, rgba(82, 155, 46, 1) 100%)"}}],"labelRaw":"{{NO2}}"},{"label":"{{O3}}-8h","key":"O3_8","align":"center","operationList":[],"stateList":[],"labelRaw":"{{O3}}-8h"},{"label":"AQI","key":"AQI","align":"center","operationList":[],"stateList":[]},{"label":"首要污染物","key":"FIRSTPOLLUTE","align":"center","type":"default","stateList":[],"operationList":[{"name":"重新办理","id":"reDo","visible":true,"fontStyle":{"color":"#409eff"}},{"name":"删除","id":"delete","visible":true,"fontStyle":{"color":"#409eff"}}]}], 
 },
},
tChartDesignx0x5: {
defaultStyle: {
            default: {"height":"364px","width":"957px","position":"unset","left":"484px","top":"245px"},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"364px","width":"957px","position":"unset","left":"484px","top":"245px"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, [])), 
 },
},
});
const initData = () => {
const getData = async () => {
  // 获取图表数据
  await getO3Line();
  if(state.fusionDateString) {
    // 获取趋势预测臭氧小时数据，构造echarts图表options
    getO3HourForecast();
    // 获取融合日期列表
    await getFusionList();
    // 获取趋势预测值数据
    getTrendForecast();
  }
}

getData();
};
const onclick1734493046811 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'',
                    data: {
                      businessDialog:{dialogName: ''}
                    },
                  });
};
// 接口函数
const getFusionList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"REGION_TYPE":global.regionaQuery.paramsRegionType,"monitorTimeArray":state.fusionDateString,"interfaceId":"77ab122e0245c87e6fb083650dfbc30a"},}).then((res) => {
     // 成功的操作
     if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.fusionList = res?.data?.data.map(item => ({
    FIRSTPOLLUTE: item.FIRSTPOLLUTE.includes('O3_8') ? replacePollutionCharacter(handleNoVal(item.FIRSTPOLLUTE.replace('O3_8', 'O3-8h'))) : replacePollutionCharacter(handleNoVal(item.FIRSTPOLLUTE)),
    AQI: item.AQI,
    SHOW_DATE: `融${handleNoVal(item.SHOW_DATE)}`,
    CO: handleNoVal(item.CO),
    NO2: handleNoVal(item.NO2),
    O3: handleNoVal(item.O3),
    PM10: handleNoVal(item.PM10),
    PM25: handleNoVal(item.PM25),
    SO2: handleNoVal(item.SO2),
  }));
} else {
  state.fusionList = []
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.fusionList = []
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], () => {
getFusionList();
},{
deep: true, // 深度监听
});
// 接口函数
const getO3Line = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"REGION_TYPE":global.regionaQuery.paramsRegionType,"POLLUTANT":"O3","interfaceId":"71805f0aa8a95fb637bcac7ecdf9714d"},}).then((res) => {
     // 成功的操作
     if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.O3LineData =  res?.data?.data;
  const dateList = Array.from(new Set(state.O3LineData.map(item => item.SHOW_LEGEND)));
  // 存储融合日期-用于获取下方列表数据
  const dateArr = dateList.filter(item => item !== '预测日')
  // 存储用于获取趋势预测值的参数
  state.fusionDateString = dateArr.join(',');
  state.MONITORTIME_T1 = dateArr[0];
  state.MONITORTIME_T2 = dateArr[1];
  state.MONITORTIME_T3 = dateArr[2];
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
getO3Line();
},{
deep: true, // 深度监听
});
// 接口函数
const getO3HourForecast = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME_T3":state.MONITORTIME_T3,"MONITORTIME_T2":state.MONITORTIME_T2,"REGION_CODE":global.regionaQuery.regionCode,"REGION_TYPE":global.regionaQuery.paramsRegionType,"MONITORTIME_T1":state.MONITORTIME_T1,"interfaceId":"128722ca2d1793a49c2bbe099113bfe0"},}).then((res) => {
     // 成功的操作
     if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  // 趋势预测值
  const forecastList = res.data.data.map((item) => ([item.HOUR24 + ':00', item.O3]));
  // 获取预测时间legend
  const dateList = Array.from(new Set(state.O3LineData.map(item => item.SHOW_LEGEND)));
  // 获取小时时间-x轴
  const hourList = Array.from(new Set(state.O3LineData.map(item => item.HOUR + ':00')));
  hourList.push('00:00');
  const subList = convertCharacter('上标')[0].split(' ')
  // 定义series
 const series = [];
 dateList.forEach(item => {
   // 筛选数据
   const data = state.O3LineData.filter(item1 => item1.SHOW_LEGEND === item).map(item2 => ([item2.HOUR + ':00', item2.NUM]));
   series.push({
     name: item,
     type: item === '预测日' ? 'bar' :'line',
     lineStyle: {
       type: 'dotted'
     },
     barWidth: 20,  // 确保两条柱子的宽度相同
     itemStyle: {
       color: item === '预测日' ? '#ee6666' : '',
     },
     data: data,
   })
 })
  // 增加趋势预测值
  dateList.push('趋势预测值');
  // 趋势预测值-柱状图
  series.push({
    name: '趋势预测值',
    type: 'bar',
    lineStyle: {
      type: 'dotted'
    },
    barGap: '-100%',
    barWidth: 20,  // 确保两条柱子的宽度相同
    itemStyle: {
      color: 'rgba(238, 102, 102, 0.4)',
      borderType: 'dashed',
      borderColor: '#ee6666',
    },
    data: forecastList
  })
state.options = 
  {
   legend: {
    show: true,
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
    },
    data: dateList.map((item, index) => {
        if(index === dateList.length - 1) {
          return {
            name: item,
            itemStyle: {
              borderColor: '#ee6666',
              borderWidth: 1,
              borderType: 'dashed'
          },
        }
      } else {
        return {
          name: item,
        }
      }
    })
  },
   grid : {
     bottom :  "10% ",
     left :  "5%" ,
     top :  "26%" ,
     right :  "0% "
  },
  tooltip: {
    trigger: 'axis',
    valueFormatter: function (value) {
      console.log(value)
      return value + ' μg/m3';
    },
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
    },
   yAxis : {
     name : "μg/m" + subList[3] ,
     nameTextStyle: {
      color: '#B7E3FF'
     },
     nameLocation : "end",
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
   xAxis : {
     data: hourList,
     axisLabel : {
       rotate : 0,
       color: "#B7E3FF",
       interval: 0
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

  },
  series: series,
}
console.log(state.options, 'options')

} else {
  
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
getO3HourForecast();
},{
deep: true, // 深度监听
});
// 接口函数
const getTrendForecast = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME_T3":state.MONITORTIME_T1,"MONITORTIME_T2":state.MONITORTIME_T2,"REGION_CODE":global.regionaQuery.regionCode,"REGION_TYPE":global.regionaQuery.paramsRegionType,"MONITORTIME_T1":state.MONITORTIME_T1,"interfaceId":"8f22a9cf67f831182241b429bbef27f8"},}).then((res) => {
     // 成功的操作
     if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.fusionList.push(...res?.data?.data.map(item => ({
    AQI: item.AQI,
    FIRSTPOLLUTE: item.AQIPRIMPOLLUTE.includes('O3_8') ? replacePollutionCharacter(handleNoVal(item.AQIPRIMPOLLUTE.replace('O3_8', 'O3-8h'))) : replacePollutionCharacter(handleNoVal(item.AQIPRIMPOLLUTE)),
    SHOW_DATE: handleNoVal(item.POINT_NAME),
    CO: handleNoVal(item.CO),
    NO2: handleNoVal(item.NO2),
    O3: handleNoVal(item.O3_8),
    PM10: handleNoVal(item.PM10),
    PM25: handleNoVal(item.PM25),
    SO2: handleNoVal(item.SO2),
  })))
} else {
  
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
getTrendForecast();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewO3Compare', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-airOverviewO3Compare', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

 const tChartDesignx0x5ComputedData = computed(() => _.merge({}, componentState.tChartDesignx0x5.default, componentState.tChartDesignx0x5?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tTablex0x4ComputedData,
tChartDesignx0x5ComputedData,
onclick1734493046811,
};
},
};