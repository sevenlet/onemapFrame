window.excellentRatioComponent = {
template: 
`<div id="t-l-c-excellentRatio" class="t-l-c-excellentRatio" >` +
`<t-row id="t-row-1b86.54ae14f3e" class="excellentRatio-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align" @click="onclick1742293162935">` +
`<t-rect id="t-rect-8445.f9fd7c5f7" class="excellentRatio-t-rect-0-0-0"  :tip="tRectx0x0x0ComputedData.tip" :label="tRectx0x0x0ComputedData.label" :active="tRectx0x0x0ComputedData.active" :c-style="tRectx0x0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-ce97.e5a067958" class="excellentRatio-t-text-0-0-1"  :label="tTextx0x0x1ComputedData.label" :editable="tTextx0x0x1ComputedData.editable" :c-style="tTextx0x0x1ComputedData.cStyle" @click="onclick1742372902114">` +
`</t-text>` +
`<t-text id="t-text-6b42.397ca7c59" class="excellentRatio-t-text-0-0-2"  :label="replaceCssVariables(state.ratioObj.excellentRatio, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x2ComputedData.editable" :c-style="tTextx0x0x2ComputedData.cStyle" :show-title="tTextx0x0x2ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-b8a3.aa3aec482" class="excellentRatio-t-text-0-0-3"  :label="tTextx0x0x3ComputedData.label" :editable="tTextx0x0x3ComputedData.editable" :c-style="tTextx0x0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-db39.ffec89aea" class="excellentRatio-t-text-0-0-4"  :label="tTextx0x0x4ComputedData.label" :editable="tTextx0x0x4ComputedData.editable" :c-style="tTextx0x0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.ratioObj.percentStatus === 'down'" id="t-text-409c.1f6a4baff" class="excellentRatio-t-text-0-0-5"  :label="replaceCssVariables(state.ratioObj.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x5ComputedData.editable" :c-style="tTextx0x0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.ratioObj.percentStatus === 'up'" id="t-text-1f16.76cdd2ec" class="excellentRatio-t-text-0-0-6"  :label="replaceCssVariables(state.ratioObj.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x6ComputedData.editable" :c-style="tTextx0x0x6ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.ratioObj.percentStatus === 'flat'" id="t-text-901c.cd85e71b5" class="excellentRatio-t-text-0-0-7"  :label="replaceCssVariables(state.ratioObj.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x7ComputedData.editable" :c-style="tTextx0x0x7ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.ratioObj.percentStatus === 'noData'" id="t-text-0a18.63037302" class="excellentRatio-t-text-0-0-8"  :label="replaceCssVariables(state.ratioObj.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x8ComputedData.editable" :c-style="tTextx0x0x8ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-2217.aedc9296a" class="excellentRatio-t-text-0-0-9"  :label="tTextx0x0x9ComputedData.label" :editable="tTextx0x0x9ComputedData.editable" :c-style="tTextx0x0x9ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`<t-rect v-if="state.ecologicalCloudAllState.selectedBlock === 'airExcellentRate'" id="t-rect-184e.f71a7a54f" class="excellentRatio-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
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
   appURL: "http://192.168.0.202:7777/mapgo5.0/preview.html?appID=600e7e5a31914ca5a057f74a08302395&appType=2D&appName=%E9%A9%BE%E9%A9%B6%E8%88%B1-%E6%A6%82%E8%A7%88-%E5%9C%BA%E6%99%AF%E6%95%B4%E5%90%88",
   ecologicalCloudAllState: {"selectedBlock":""},
   ratioObj: {"excellentRatio":"--","percentValue":"--","percentStatus":"noData"},
   airQualityState: {"yearMonth":"","dateType":""},
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"390px","height":"58px","position":"unset","left":"5px","top":"0px","letterSpacing":"0px","animationName":"","fontWeight":"600","backgroundImage":"var(--t-index-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","border":"1px solid","borderImage":"var(--t-index-border) 1","cursor":"auto"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"390px","height":"58px","position":"unset","left":"5px","top":"0px","letterSpacing":"0px","animationName":"","fontWeight":"600","backgroundImage":"var(--t-index-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","border":"1px solid","borderImage":"var(--t-index-border) 1","cursor":"auto"}}},
gutter:0,
justify:"center",
align:"middle", 
 },
},
tRectx0x0x0: {
defaultStyle: {
            default: {"width":"24px","height":"24px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-12/541ae06611b24a51896e8c205302f439.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-12/541ae06611b24a51896e8c205302f439.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tTextx0x0x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-text)","textAlign":"center","position":"unset","left":"504.4390687019594px","top":"404.66978602255546px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"18px","lineHeight":"24px","max-width":"none","animationName":"","fontWeight":"400","fontFamily":"微软雅黑","marginLeft":"4px","cursor":"pointer"},
            
            },
 default: { 
 
label:"优良比率",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-text)","textAlign":"center","position":"unset","left":"504.4390687019594px","top":"404.66978602255546px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"18px","lineHeight":"24px","max-width":"none","animationName":"","fontWeight":"400","fontFamily":"微软雅黑","marginLeft":"4px","cursor":"pointer"}}}, 
 },
},
tTextx0x0x2: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--sjyy-text-green)","textAlign":"right","position":"unset","left":"823.0023482709585px","top":"1037.12333045512px","animationName":"","fontSize":"24px","lineHeight":"24px","marginLeft":"12px","marginRight":"4px","textIndent":"0px","paddingLeft":"0px","fontWeight":"700","fontFamily":"DIN-black","max-width":"50px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--sjyy-text-green)","textAlign":"right","position":"unset","left":"823.0023482709585px","top":"1037.12333045512px","animationName":"","fontSize":"24px","lineHeight":"24px","marginLeft":"12px","marginRight":"4px","textIndent":"0px","paddingLeft":"0px","fontWeight":"700","fontFamily":"DIN-black","max-width":"50px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"}}},
showTitle:true, 
 },
},
tTextx0x0x3: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"443.4390687019594px","top":"396.66978602255546px","fontSize":"14px","lineHeight":"14px","marginBottom":"-8px"},
            
            },
 default: { 
 
label:"%",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"443.4390687019594px","top":"396.66978602255546px","fontSize":"14px","lineHeight":"14px","marginBottom":"-8px"}}}, 
 },
},
tTextx0x0x4: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--sjyy-text)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"453.4390687019594px","top":"406.66978602255546px","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"24px"},
            
            },
 default: { 
 
label:"同比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--sjyy-text)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"453.4390687019594px","top":"406.66978602255546px","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"24px"}}}, 
 },
},
tTextx0x0x5: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#FF3131","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"463.4390687019594px","top":"416.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"4px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#FF3131","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"463.4390687019594px","top":"416.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"4px"}}}, 
 },
},
tTextx0x0x6: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--sjyy-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"463.4390687019594px","top":"426.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"4px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--sjyy-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"463.4390687019594px","top":"426.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"4px"}}}, 
 },
},
tTextx0x0x7: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"473.4390687019594px","top":"436.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"4px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"473.4390687019594px","top":"436.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"4px"}}}, 
 },
},
tTextx0x0x8: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"483.4390687019594px","top":"446.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"4px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"483.4390687019594px","top":"446.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"4px"}}}, 
 },
},
tTextx0x0x9: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"4px"},
            
            },
 default: { 
 
label:"%",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"4px"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"390px","height":"58px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","top":"0px","left":"5px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"390px","height":"58px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","top":"0px","left":"5px"}}}, 
 },
},
});
const getProvider = () => {
// 空气质量-首页state
const rootData = inject('airQualityState');
// 生态云整体-state
const wholeRootData = inject('ecologicalCloudAllState');
state.ecologicalCloudAllState = wholeRootData;
// 引入生态云整体（父级页面）的方法，并赋值给state对应的变量，调用直接state.xxx()
state.removeExistedMapScenes = inject('removeExistedMapScenes');
state.closeRealtimeSide = inject('closeRealtimeSide');

watch(() => rootData, (newVal) => {
  state.airQualityState = rootData;
  // 选中当月、当年时，才请求接口
  if (newVal.dateType !== 'DAY' && newVal.monitorTime) {
    getExcellentRateData();
    state.ecologicalCloudAllState.selectedBlock = 'airExcellentRate';
    sendMes();
  }
},
  {
    deep: true,
  }
);
};
const watchValues = () => {
watch(() => global.REGION_CODE, () => {
  sendMes();
});
};
const sendMes = () => {
if (state.ecologicalCloudAllState.selectedBlock === 'airExcellentRate'
  && !state.ecologicalCloudAllState.realtimeBtnActive) {
  const regionLevelText = getRegionLevel(global.REGION_CODE);
  if ((regionLevelText === 'city' || regionLevelText === 'county')) {
    if (!state.ecologicalCloudAllState.isExcellentRateSendAR) {
      // 改变全局参数
      global.mapChangeAllStatusParams = {
        indicator: '1', // 指标
        time: state.airQualityState.yearMonth,
        dateType: state.airQualityState.dateType,
        rendType: 'idw',
      };
      // 先移除，再加载
      // 引入生态云整体（父级页面）的方法，并赋值给state对应的变量，调用直接state.xxx()
      if (state.removeExistedMapScenes) {
        state.removeExistedMapScenes();
      }

      setTimeout(() => {
        rootData.rootSocket.emit('message', {
          room: global.socketRoom, // 房间号
          type: 'setAppAR', // 消息名称
          data: [
            {
              resCode: 'air',
              resName: '大气',
              opType: 'add',
              appURL: state.appURL,
            }
          ]
        });
      }, 500)
      state.ecologicalCloudAllState.isExcellentRateSendAR = true;
      // 其他是否切换场景置为false，以便再次点击对应内容的时候切换对应的二维场景
      state.ecologicalCloudAllState.isPollutionConcentrationSendAR = false;
      state.ecologicalCloudAllState.isSectionSendAppAR = false;
      state.ecologicalCloudAllState.isProportionSendAppAR = false;
      state.ecologicalCloudAllState.isPwxkTypeSendAppAR = false;
    } else {
      sendChangeAllStatusMes();
    }
  }
  if (regionLevelText === 'province') {
    state.ecologicalCloudAllState.isExcellentRateSendAR = false;
    sendChangeAllStatusMes();
  }
}


};
const handleRowClick = (value) => {
if (value !== state.ecologicalCloudAllState.selectedBlock) {
  state.ecologicalCloudAllState.selectedBlock = value;
  // 关闭实时数据侧边页面
  state.closeRealtimeSide();
  sendMes();
}
};
const sendChangeAllStatusMes = () => {
const theme = global.theme === '蓝色主题' ? 'blue' : 'green';
rootData.rootSocket.emit('message', {
  room: global.socketRoom,
  type: 'changeAllStatus',
  data: {
    indicator: '1', // 指标
    rendType: 'idw', //渲染类型 idw:插值图 realtime:实时监控
    time: state.airQualityState.yearMonth, // 时间
    dateType: state.airQualityState.dateType,//时间类型，默认DAY,小时：HOUR,日：DAY,月：CUR_MONTH、年：ACC_MONTH
    REGION_NAME: global.REGION_NAME, // 行政区名称，非必须
    REGION_CODE: global.REGION_CODE, // 行政区编码
    theme: theme,
    dataSource:'sty', // 如果是生态云发送的消息，加上这个值
  },
});

};
const onclick1742293162935 = () => {
};
const onclick1742372902114 = () => {
// 执行自定义方法
handleRowClick("airExcellentRate");
};
// 接口函数
const getExcellentRateData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"DATE_TYPE":state.airQualityState.dateType,"MONITOR_TIME":state.airQualityState.yearMonth,"POINT_CODE":global.REGION_CODE,"interfaceId":"ca412d118d3cfe0b5babfc5ba168f75e"},}).then((res) => {
     // 成功的操作
     state.ratioObj = {
  excellentRatio: '--',
  percentValue: '--',
  percentStatus: 'noData',
};
const { data } = res.data;
if (data && data.length) {
  const curData = data[0];
  const percentTextStatus = handleUpOrDownValue(curData.EXCELLENT_JQN);
  state.ratioObj = {
    excellentRatio: handleNoVal(curData.EXCELLENT_RATE),
    percentValue: percentTextStatus.text,
    percentStatus: percentTextStatus.status,
  };
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.ratioObj = {
  excellentRatio: '--',
  percentValue: '--',
  percentStatus: 'noData',
};
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [global.REGION_CODE], () => {
getExcellentRateData();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-excellentRatio', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-excellentRatio', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
getProvider();
// 执行自定义方法
watchValues();
/* 接收socket.io消息 */
const onSocketChangeebb909cad0e6484b982a = function (data) {
if(data.type === "closeStyRealtime"){
try{
// 执行自定义方法
sendMes();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangeebb909cad0e6484b982a);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangeebb909cad0e6484b982a);
});
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tRectx0x0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0x0.default, componentState.tRectx0x0x0?.[state.screenSize]));

 const tTextx0x0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x1.default, componentState.tTextx0x0x1?.[state.screenSize]));

 const tTextx0x0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x2.default, componentState.tTextx0x0x2?.[state.screenSize]));

 const tTextx0x0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x3.default, componentState.tTextx0x0x3?.[state.screenSize]));

 const tTextx0x0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x4.default, componentState.tTextx0x0x4?.[state.screenSize]));

 const tTextx0x0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x5.default, componentState.tTextx0x0x5?.[state.screenSize]));

 const tTextx0x0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x6.default, componentState.tTextx0x0x6?.[state.screenSize]));

 const tTextx0x0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x7.default, componentState.tTextx0x0x7?.[state.screenSize]));

 const tTextx0x0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x8.default, componentState.tTextx0x0x8?.[state.screenSize]));

 const tTextx0x0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x9.default, componentState.tTextx0x0x9?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRowx0x0ComputedData,
tRectx0x0x0ComputedData,
tTextx0x0x1ComputedData,
tTextx0x0x2ComputedData,
tTextx0x0x3ComputedData,
tTextx0x0x4ComputedData,
tTextx0x0x5ComputedData,
tTextx0x0x6ComputedData,
tTextx0x0x7ComputedData,
tTextx0x0x8ComputedData,
tTextx0x0x9ComputedData,
tRectx0x1ComputedData,
onclick1742293162935,
onclick1742372902114,
};
},
};