window.jiashicangdongtaidianweiComponent = {
template: 
`<div id="t-l-c-jiashicangdongtaidianwei" class="t-l-c-jiashicangdongtaidianwei" >` +
`<t-rect id="t-rect-ea15.21d707542" class="jiashicangdongtaidianwei-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-list-card id="t-list-card-ce0a.d4fe3b3f6" class="jiashicangdongtaidianwei-t-list-card-0-1"  :data="state.detailData" :spacing-x="tListCardx0x1ComputedData.spacingX" :col="tListCardx0x1ComputedData.col" :direction="tListCardx0x1ComputedData.direction" :exchange-order="tListCardx0x1ComputedData.exchangeOrder" :unit-break="tListCardx0x1ComputedData.unitBreak" :key-field="tListCardx0x1ComputedData.keyField" :active-key-field="tListCardx0x1ComputedData.activeKeyField" :active="tListCardx0x1ComputedData.active" :c-style="tListCardx0x1ComputedData.cStyle">` +
`</t-list-card>` +
`<t-text id="t-text-80b9.1bda636ca" class="jiashicangdongtaidianwei-t-text-0-2"  :label="state.pointName" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
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
   REGION_CODE: "",
   trjgData: [{"title":"建设用地污染地块数量","num":"--","unit":"个"},{"title":"土壤环境调查地块数量","num":"--","unit":"个"},{"title":"农用地安全利用类任务数","num":"--","unit":"亩"}],
   hjzfData: [{"title":"累计执法数量","num":"--","unit":"个"},{"title":"年人均执法数","num":"--","unit":"个/人"},{"title":"年检查家次","num":"--","unit":"次"},{"title":"本月非现场检查次数","num":"--","unit":"次"}],
   xfjbData: [{"title":"累计信访投诉量","num":"--","unit":"件"},{"title":"累计办结回复量","num":"--","unit":"件"},{"title":"本月大气污染投诉量","num":"--","unit":"件"},{"title":"本月噪声污染投诉量","num":"--","unit":"件"}],
   pwxkData: [{"title":"累计发证量","num":"--","unit":"家"},{"title":"重点管理","num":"--","unit":"家"},{"title":"简化管理","num":"--","unit":"家"},{"title":"登记管理","num":"--","unit":"家"}],
   trhjFarmingMonitorTime: "",
   trhjConstructMonitorTime: "",
   hyhjMonitorTime: "",
   trhjData: [{"title":"受污染耕地安全利用率","num":"--","unit":"%"},{"title":"调查地块","num":"--","unit":"个"},{"title":"建设用地","num":"--","unit":"个"},{"title":"重点建设用地安全利用率","num":"--","unit":"%"}],
   hyhjData: [{"title":"本月水质优良率","num":"93.62","unit":"%"},{"title":"近岸海域监测点数量","num":"8888","unit":"个"},{"title":"本月超标站点","num":"50","unit":"个"},{"title":"漂浮垃圾岸段","num":"45","unit":"个"}],
   detailData: "",
   pointName: "--",
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
            default: {"width":"284px","height":"186px","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-point-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"284px","height":"186px","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-point-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"","position":"unset"}}}, 
 },
},
tListCardx0x1: {
defaultStyle: {
            default: {"width":"252px","height":"124px","position":"unset","left":"16px","top":"54px"},
            
            },
 default: { 
 
data:"",
spacingX:0,
col:1,
direction:"horizontal",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"252px","height":"124px","position":"unset","left":"16px","top":"54px"}},"itemWrapper":{"default":{"height":"22px","backgroundColor":"rgba(26, 27, 31, 0)","cursor":"auto","justify-content":"space-between"}},"title":{"default":{"fontSize":"16px","lineHeight":"16px","color":"var(--t-white)"}},"num":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-white)","fontWeight":"700","fontFamily":"DIN-black","max-width":"60px","overflow":"hidden"}},"unit":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","lineHeight":"22px"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"135px","height":"19px","color":"var(--t-white)","position":"unset","left":"16px","top":"14px","fontSize":"18px","fontFamily":"方正综艺"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"135px","height":"19px","color":"var(--t-white)","position":"unset","left":"16px","top":"14px","fontSize":"18px","fontFamily":"方正综艺"}}}, 
 },
},
});
const initParams = () => {
state.detailData = [];
// 从 URL 获取参数并存储到一个对象中
const params = {
  BUSINESS_TYPE: getParamsFromUrl('BUSINESS_TYPE'),
  MONITORTIME: getParamsFromUrl('MONITORTIME'),
  REGION_CODE: getParamsFromUrl('REGION_CODE'),
  REGION_NAME: getParamsFromUrl('REGION_NAME'),
  DATA_1: getParamsFromUrl('DATA_1'),
  DATA_2: getParamsFromUrl('DATA_2'),
  DATA_3: getParamsFromUrl('DATA_3'),
  DATA_4: getParamsFromUrl('DATA_4')
};
const color = getParamsFromUrl('THEME');
if (color === 'blue') {
  const body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', '蓝色主题' || 'theme1');
} else {
  const body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', '绿色主题' || 'theme1');
}
if (localStorage.getItem('color')) {
  const body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', localStorage.getItem('color') || 'theme1');
}

// 打印参数信息
console.log(params.BUSINESS_TYPE, params.MONITORTIME, params.REGION_CODE, params.REGION_NAME, '//////////');
console.log(params.DATA_1, params.DATA_2, params.DATA_3, params.DATA_4, '***********');
state.pointName = params.REGION_NAME;
state.REGION_CODE = params.REGION_CODE;
// 获取最新时间
// getHyhjLatestTime();
// getTrhjFarmingLatestTime();
// getTrhjConstructLatestTime();
// 封装数据赋值逻辑
const assignData = (targetData) => {
  targetData[0].num = params.DATA_1||'--';
  targetData[1].num = params.DATA_2||'--';
  targetData[2].num = params.DATA_3||'--';
  return targetData;
};

// 定义不同业务类型的处理逻辑
const businessTypeHandlers = {
  'pwxk': () => assignData(state.pwxkData),
  'xfts': () => assignData(state.xfjbData),
  'hjzf': () => assignData(state.hjzfData),
  'trjg': () => assignData(state.trjgData)
};

// 获取业务类型对应的处理函数
if (params.BUSINESS_TYPE) {
  const handler = businessTypeHandlers[params.BUSINESS_TYPE.trim()] || businessTypeHandlers.default;
  // 执行处理函数并更新 detailData
  state.detailData = handler();
}
console.log(state.detailData)
};
// 接口函数
const getHyhjLatestTime = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"CODE_WQDATASOURCETYPE":"offshore","REGION_CODE":state.REGION_CODE,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
if (data) {
  state.hyhjMonitorTime = data.MONITORTIME || dateFormat(new Date(), 'yyyy-MM');
} else {
  state.hyhjMonitorTime = dateFormat(new Date(), 'yyyy-MM');
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.hyhjMonitorTime = dateFormat(new Date(), 'yyyy-MM');
      reject(error);
    });
  });
};
// 接口函数
const getHyhjFloatGarbageSectionData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITORTIME":state.hyhjMonitorTime,"REGION_CODE":state.REGION_CODE,"interfaceId":"cca7784e56cab3fe54ecc54cea35b209"},}).then((res) => {
     // 成功的操作
     state.hyhjData[3].num = '--';
const { data } = res.data;
if (data) {
  // 浮漂垃圾岸段
  state.hyhjData[3].num = handleNoVal(data.PFLJ_POINT_COUNT);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.hyhjData[3].num = '--';
      reject(error);
    });
  });
};
// 接口函数
const getHyhjOffshoreAreaPointData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"REGION_CODE":state.REGION_CODE,"CODE_WQDATASOURCETYPE":"offshore","MONITORTIME":state.hyhjMonitorTime,"interfaceId":"c864a2b46d9b7e4bb2947d25e5c2e23a"},}).then((res) => {
     // 成功的操作
     state.hyhjData[1].num = '--';
const { data } = res.data;
if (data) {
  // 近岸海域监测点
  state.hyhjData[1].num = handleNoVal(data.POINT_COUNT);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.hyhjData[1].num = '--';
      reject(error);
    });
  });
};
// 接口函数
const getHyhjExcellentRate = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITORTIME":state.hyhjMonitorTime,"REGION_CODE":state.REGION_CODE,"SEA_TYPE":"OFFSHORE","DATA_TYPE":"CUR_MONTH","interfaceId":"a3bf1607799124c7ac8e053cfd72d6b7"},}).then((res) => {
     // 成功的操作
     state.hyhjData[0].num = '--';
state.hyhjData[2].num = '--';
const { data } = res.data;
if (data) {
  const curData = data[0] || {};
  // 水质优良率
  state.hyhjData[0].num = handleNoVal(curData.GOOD_RATE);
  // 超标点位个数
  state.hyhjData[2].num = handleNoVal(curData.CBDW_TOTAL);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.hyhjData[0].num = '--';
state.hyhjData[2].num = '--';
      reject(error);
    });
  });
};
// 接口函数
const getTrhjConstructLatestTime = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"DATA_TYPE":"1","REGION_CODE":state.REGION_CODE,"interfaceId":"cf4f7ad527874b5e3e23fda8ef013e45"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
if (data) {
  state.trhjConstructMonitorTime = data.NDTIME || dateFormat(new Date(), 'yyyy');
} else {
  state.trhjConstructMonitorTime = dateFormat(new Date(), 'yyyy');
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.trhjConstructMonitorTime = dateFormat(new Date(), 'yyyy');
      reject(error);
    });
  });
};
// 接口函数
const getTrhjConstructPercentDataCopy = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"TYPE":"EN","DATA_TYPE":"CUR_MONTH","REGION_CODE":state.REGION_CODE,"interfaceId":"7935d95132f9932bb0fc1f45111c83ef"},}).then((res) => {
     // 成功的操作
     state.trhjData[3].num = '--';
const { data } = res.data;
if (data) {
  const curData = data[0] || {};
  // 建设用地数量
  state.trhjData[3].num = handleNoVal(curData.GOOD_RATE);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.trhjData[3].num = '--';
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => ["CUR_MONTH"], () => {
getTrhjConstructPercentDataCopy();
},{
deep: true, // 深度监听
});
// 初始请求，调取接口
getTrhjConstructPercentDataCopy();
// 接口函数
const getTrhjFarmingLatestTime = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"DATA_TYPE":"2","REGION_CODE":state.REGION_CODE,"interfaceId":"cf4f7ad527874b5e3e23fda8ef013e45"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
if (data) {
  state.trhjFarmingMonitorTime = data.NDTIME || dateFormat(new Date(), 'yyyy');
} else {
  state.trhjFarmingMonitorTime = dateFormat(new Date(), 'yyyy');
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.trhjFarmingMonitorTime = dateFormat(new Date(), 'yyyy');
      reject(error);
    });
  });
};
// 接口函数
const getTrhjConstructCountData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"DATA_TYPE":"1","NDTIME":state.trhjConstructMonitorTime,"REGION_CODE":state.REGION_CODE,"interfaceId":"34983ba23f86fccbc5beccda475d10a7"},}).then((res) => {
     // 成功的操作
     state.trhjData[2].num = '--';
const { data } = res.data;
if (data) {
  // 建设用地数量
  state.trhjData[2].num = handleNoVal(data.TOTAL_COUNT);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.trhjData[2].num = '--';
      reject(error);
    });
  });
};
// 接口函数
const getTrhjFarmingCountData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"DATA_TYPE":"2","NDTIME":state.trhjFarmingMonitorTime,"REGION_CODE":state.REGION_CODE,"interfaceId":"34983ba23f86fccbc5beccda475d10a7"},}).then((res) => {
     // 成功的操作
     state.trhjData[1].num = '--';
const { data } = res.data;
if (data) {
  // 调查地块数量
  state.trhjData[1].num = handleNoVal(data.TOTAL_COUNT);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.trhjData[1].num = '--';
      reject(error);
    });
  });
};
// 接口函数
const getTrhjFarmingPercentData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"TYPE":"PL","DATA_TYPE":"CUR_MONTH","REGION_CODE":state.REGION_CODE,"interfaceId":"7935d95132f9932bb0fc1f45111c83ef"},}).then((res) => {
     // 成功的操作
     state.trhjData[0].num = '--';
const { data } = res.data;
if (data) {
  const curData = data[0] || {};
  // 建设用地数量
  state.trhjData[0].num = handleNoVal(curData.GOOD_RATE);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.trhjData[0].num = '--';
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => ["CUR_MONTH"], () => {
getTrhjFarmingPercentData();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-jiashicangdongtaidianwei', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-jiashicangdongtaidianwei', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tListCardx0x1ComputedData = computed(() => _.merge({}, componentState.tListCardx0x1.default, componentState.tListCardx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tListCardx0x1ComputedData,
tTextx0x2ComputedData,
};
},
};