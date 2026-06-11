window.waterBalckWaterDetailDialogComponent = {
template: 
`<div id="t-l-c-waterBalckWaterDetailDialog" class="t-l-c-waterBalckWaterDetailDialog" >` +
`<t-rect id="t-rect-8252.1a4ade4f4" class="waterBalckWaterDetailDialog-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-e3a7.d7772ec8d" class="waterBalckWaterDetailDialog-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-8cba.b16affff7" class="waterBalckWaterDetailDialog-t-text-0-2"  :label="state.blackWaterPointName" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-da62.857f90ab" class="waterBalckWaterDetailDialog-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1733817210174">` +
`</t-rect>` +
`<t-text id="t-text-738d.67fdf6baf" class="waterBalckWaterDetailDialog-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-a501.53f326817" class="waterBalckWaterDetailDialog-t-text-0-5"  :label="state.pjTime" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-list-card id="t-list-card-1afd.46c2cc26d" class="waterBalckWaterDetailDialog-t-list-card-0-6"  :data="state.cardList" :spacing-x="tListCardx0x6ComputedData.spacingX" :col="tListCardx0x6ComputedData.col" :direction="tListCardx0x6ComputedData.direction" :exchange-order="tListCardx0x6ComputedData.exchangeOrder" :unit-break="tListCardx0x6ComputedData.unitBreak" :key-field="tListCardx0x6ComputedData.keyField" :active-key-field="tListCardx0x6ComputedData.activeKeyField" :active="tListCardx0x6ComputedData.active" :c-style="tListCardx0x6ComputedData.cStyle">` +
`</t-list-card>` +
`<t-select id="t-select-ab9b.87d98bf9d" class="waterBalckWaterDetailDialog-t-select-0-7"  :active-value="state.MONITOR_DATE_STR" :options="state.cySelectList" :alias="tSelectx0x7ComputedData.alias" :multiple="tSelectx0x7ComputedData.multiple" :placeholder="tSelectx0x7ComputedData.placeholder" :clearable="tSelectx0x7ComputedData.clearable" :disabled="tSelectx0x7ComputedData.disabled" :name="tSelectx0x7ComputedData.name" :autocomplete="tSelectx0x7ComputedData.autocomplete" :filterable="tSelectx0x7ComputedData.filterable" :no-match-text="tSelectx0x7ComputedData.no-match-text" :no-data-text="tSelectx0x7ComputedData.no-data-text" :c-style="tSelectx0x7ComputedData.cStyle" @change="onchange1733987100050">` +
`</t-select>` +
`<t-row id="t-row-fe1a.537c1d02b" class="waterBalckWaterDetailDialog-t-row-0-8"  :c-style="tRowx0x8ComputedData.cStyle" :gutter="tRowx0x8ComputedData.gutter" :justify="tRowx0x8ComputedData.justify" :align="tRowx0x8ComputedData.align">` +
`<t-text id="t-text-c920.565800cd9" class="waterBalckWaterDetailDialog-t-text-0-8-0"  :label="tTextx0x8x0ComputedData.label" :editable="tTextx0x8x0ComputedData.editable" :c-style="tTextx0x8x0ComputedData.cStyle" @click="onclick1734498867709">` +
`</t-text>` +
`</t-row>` +
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
   point: {"lon":"","lat":""},
   MONITOR_DATE_STR: "",
   cySelectList: [],
   MONITORTIME: "",
   cardList: [{"title":"黑臭程度","num":"-"},{"title":"采样时间","num":" "},{"title":"透明度(cm)","num":"-"},{"title":"溶解氧(mg/L)","num":"-"},{"title":"氨氮(mg/L)","num":"-"},{"title":"氧化还原电位 (mV)","num":"-"}],
   blackWaterPointName: "-",
   blackWaterPointId: "",
   pjTime: "评价时间：-",
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
            default: {"width":"450px","height":"370px","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"370px","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"47.01035523217572px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"0px","top":"0px","animationName":"","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"47.01035523217572px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"0px","top":"0px","animationName":"","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"314px","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"24px","top":"13px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"0px","fontWeight":"700","animationName":""},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"314px","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"24px","top":"13px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"0px","fontWeight":"700","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"402px","top":"10px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"402px","top":"10px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"450px","height":"52px","color":"var(--t-font-color-gy1)","position":"unset","left":"0px","top":"318px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","backgroundColor":"var(--business-show-bg15)"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"52px","color":"var(--t-font-color-gy1)","position":"unset","left":"0px","top":"318px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"250px","height":"24px","color":"var(--business-text-avianize)","position":"unset","left":"20px","top":"63px","fontSize":"14px","lineHeight":"24px"},
            
            },
 default: { 
 
label:"评价时间：-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"250px","height":"24px","color":"var(--business-text-avianize)","position":"unset","left":"20px","top":"63px","fontSize":"14px","lineHeight":"24px"}}}, 
 },
},
tListCardx0x6: {
defaultStyle: {
            default: {"width":"410px","height":"202px","position":"unset","left":"20px","top":"99px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"黑臭程度","num":"-"},{"title":"采样时间","num":" "},{"title":"透明度(cm)","num":"-"},{"title":"溶解氧(mg/L)","num":"-"},{"title":"氨氮(mg/L)","num":"-"},{"title":"氧化还原电位 (mV)","num":"-"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"202px","position":"unset","left":"20px","top":"99px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"170px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingLeft":"16px","paddingBottom":"6px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tSelectx0x7: {
defaultStyle: {
            default: {"width":"232px","height":"28px","position":"unset","left":"190px","top":"135px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"CONTENT","value":"VALUE","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"232px","height":"28px","position":"unset","left":"190px","top":"135px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tRowx0x8: {
defaultStyle: {
            default: {"width":"430px","height":"28px","position":"unset","left":"0px","top":"331px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"430px","height":"28px","position":"unset","left":"0px","top":"331px","animationName":""}}},
gutter:0,
justify:"end",
align:"middle", 
 },
},
tTextx0x8x0: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"601px","top":"449.3999938964844px","cursor":"pointer","animationName":"","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-16/4357d0c57cd64ff588b70a02dc8fc255.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"8px 50%","-webkit-mask-position":"","paddingLeft":"24px","marginLeft":"20px"},
            
            },
 default: { 
 
label:"周边查询",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"601px","top":"449.3999938964844px","cursor":"pointer","animationName":"","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-16/4357d0c57cd64ff588b70a02dc8fc255.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"8px 50%","-webkit-mask-position":"","paddingLeft":"24px","marginLeft":"20px"},"hover":{"backgroundColor":"var(--business-show-bg50)"}}}, 
 },
},
});
const getBlackWaterPointInfo = () => {

state.blackWaterPointName = global.businessDialog?.dialogParmas?.POINT_NAME || '-';
state.blackWaterPointId = global.businessDialog?.dialogParmas?.POINT_ID || '';
state.MONITORTIME = global.businessDialog?.dialogParmas?.MONITORTIME || '';

if (state.blackWaterPointId) {
  // 获取采样时间下拉框数据
  getCYTime();
}


watch(() => global.businessDialog?.dialogParmas?.POINT_ID, () => {

  state.blackWaterPointName = global.businessDialog?.dialogParmas?.POINT_NAME || '-';
  state.blackWaterPointId = global.businessDialog?.dialogParmas?.POINT_ID || '';
  state.MONITORTIME = global.businessDialog?.dialogParmas?.MONITORTIME || '';

  if (state.blackWaterPointId) {
    // 获取采样时间下拉框数据
    getCYTime();
  }
}, {
  deep: true,
  // immediate: true // 设置为true以使其在setup执行时立即触发
})
};
const handleCloseMsg = () => {
/* 发送消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    { "shareCode": "close_map_window", "runtimeValue": true },
    { "shareCode": "close_window_code", "runtimeValue": "blackpoint_details" }
  ]
});

};
const handleClickQuery = () => {
if (state.point.lon && state.point.lat) {
  // 周边查询
  const pointLocation = [];
  pointLocation.push(parseFloat(state.point.lon));
  pointLocation.push(parseFloat(state.point.lat));

  /* 发送消息 */
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    data: [ // 消息内容
      { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
      { shareCode: "POINT_LOACTION_NAME", runtimeValue: state.blackWaterPointName }
    ]
  });

}
};
const onclick1733817210174 = () => {
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
// 执行自定义方法
handleCloseMsg();
};
const onchange1733987100050 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.MONITOR_DATE_STR = value;
// 事件交互-请求调用接口
getPointInfos().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onclick1734498867709 = () => {
// 执行自定义方法
handleClickQuery();
};
// 接口函数
const getCYTime = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.MONITORTIME,"POINT_ID":state.blackWaterPointId,"interfaceId":"dfd963436267b39244f44fbf95755e48"},}).then((res) => {
     // 成功的操作
     
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.cySelectList = res?.data?.data;
  state.MONITOR_DATE_STR = state.cySelectList?.length ? state.cySelectList[0].CONTENT : '';
  // 获取黑臭水体点位信息
  getPointInfos()
} else {
  state.cySelectList = [];
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getPointInfos = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.MONITORTIME,"MONITOR_DATE_STR":state.MONITOR_DATE_STR,"POINT_ID":state.blackWaterPointId,"interfaceId":"8c1bc5da8d151d487a888cd7f585174c"},}).then((res) => {
     // 成功的操作
     function switchValue(value) {
  var result = '';
  switch (value) {
    case '无黑臭':
      result = '#05CB08';
      break;
    case '轻度黑臭':
      result = '#FFAD5D';
      break;
    case '重度黑臭':
      result = '#E86B6B';
      break;
    default:
      '#B7E3FF';
  }
  return result;
}

if (res?.status === 200 && res?.data?.data) {
  // 黑臭程度
  state.cardList[0].num = res?.data?.data?.EVAL_RESULT || '-';
  // 黑臭成都文字颜色
  state.cardList[0].color = switchValue(res?.data?.data?.EVAL_RESULT);
  // 透明度(cm)
  state.cardList[2].num = res?.data?.data?.TMD || '-';
  // 溶解氧(mg/L)
  state.cardList[3].num = res?.data?.data?.RJY || '-';
  // 氨氮(mg/L)
  state.cardList[4].num = res?.data?.data?.AD || '-';
  // 氧化还原电位 (mV)
  state.cardList[5].num = res?.data?.data?.YFHYDW || '-';
  //评价时间
  state.pjTime = res?.data?.data?.YEAR_QUARTER_STR ? `评价时间：${res?.data?.data?.YEAR_QUARTER_STR}` : '评价时间：-';

  // 经纬度--周边查询使用
  state.point.lat = res?.data?.data?.LATITUDE || '';
  state.point.lon = res?.data?.data?.LONGITUDE || '';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      

      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterBalckWaterDetailDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterBalckWaterDetailDialog', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
getBlackWaterPointInfo();
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

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tListCardx0x6ComputedData = computed(() => _.merge({}, componentState.tListCardx0x6.default, componentState.tListCardx0x6?.[state.screenSize]));

 const tSelectx0x7ComputedData = computed(() => _.merge({}, componentState.tSelectx0x7.default, componentState.tSelectx0x7?.[state.screenSize]));

 const tRowx0x8ComputedData = computed(() => _.merge({}, componentState.tRowx0x8.default, componentState.tRowx0x8?.[state.screenSize]));

 const tTextx0x8x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x8x0.default, componentState.tTextx0x8x0?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tTextx0x4ComputedData,
tTextx0x5ComputedData,
tListCardx0x6ComputedData,
tSelectx0x7ComputedData,
tRowx0x8ComputedData,
tTextx0x8x0ComputedData,
onclick1733817210174,
onchange1733987100050,
onclick1734498867709,
};
},
};