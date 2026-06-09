<template>
  <div id="t-l-c-waterOverviewEnter" class="t-l-c-waterOverviewEnter" ><t-rect id="t-rect-fb2c.4eb017e6a" class="waterOverviewEnter-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-component id="t-component-8165.9b1446bb4" class="waterOverviewEnter-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode"></t-component><t-select id="t-select-9a19.a5e4f11ef" class="waterOverviewEnter-t-select-0-2"  :active-value="replaceCssVariables(filterData(state.selectType, componentPropBindingMap?.['t-select-9a19.a5e4f11ef']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x2ComputedData.options" :alias="tSelectx0x2ComputedData.alias" :multiple="tSelectx0x2ComputedData.multiple" :placeholder="tSelectx0x2ComputedData.placeholder" :clearable="tSelectx0x2ComputedData.clearable" :disabled="tSelectx0x2ComputedData.disabled" :name="tSelectx0x2ComputedData.name" :autocomplete="tSelectx0x2ComputedData.autocomplete" :filterable="tSelectx0x2ComputedData.filterable" :no-match-text="tSelectx0x2ComputedData.no-match-text" :no-data-text="tSelectx0x2ComputedData.no-data-text" :c-style="tSelectx0x2ComputedData.cStyle" @change="onchange1759112983399"></t-select></div>
</template>

<script>
import io from 'socket.io-client';
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
import { TComponent, TRect, TSelect } from '@ths/design';

export default {
  components: {
    TComponent,
    TRect,
    TSelect,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-fb2c.4eb017e6a":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-8165.9b1446bb4":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-select-9a19.a5e4f11ef":{"attributeName":"tSelectx0x2","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}}};
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
   isShow: true,
   selectType: "month",
   timeData: [],
   timeType: "monthrange",
   cardData: [],
   showMore: false,
   WSYSTEM_CODE: "",
   wsystemRiverCompDataState: {"WSYSTEM_CODE":""},
   TIME: "2024-12",
   ASSESSTYPE: "monthly",
   zkText: "展开更多",
   isShowMore: true,
   gsText: "--",
   title: "-",
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
tRectx0x0: {
defaultStyle: {
            default: {"width":"450px","height":"900px","backgroundColor":"var(--business--right-panel-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"900px","backgroundColor":"var(--business--right-panel-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","position":"unset","left":"0px","top":"0px"}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"870px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","top":"30px","left":"0px","overflow":"hidden scroll","position":"unset","marginTop":"0px","paddingTop":"0px","animationName":""},
            
            },
 default: { 
 
name:"waterOverviewContentComponent",
cStyle:{"wrapper":{"default":{"width":"450px","height":"870px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","top":"30px","left":"0px","overflow":"hidden scroll","position":"unset","marginTop":"0px","paddingTop":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/waterOverviewContent",
componentName:"waterOverviewContentComponent",
pageId:"be271fee46bf469387493d66aaefd933",
pageCode:"waterOverviewContent", 
 },
},
tSelectx0x2: {
defaultStyle: {
            default: {"width":"100px","height":"32px","position":"unset","left":"-192px","top":"72px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"0px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"0px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
activeValue:"month",
options:[{"value":"day","label":"日","disabled":false},{"value":"month","label":"月","disabled":false},{"value":"quarter","label":"季度","disabled":false},{"value":"halfYear","label":"半年","disabled":false},{"value":"year","label":"年","disabled":false}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","position":"unset","left":"-192px","top":"72px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"0px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"0px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"0px"},"focus":{"borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"0px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"0px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"0px"},"hover":{"borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"0px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"0px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"0px"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","borderTopLeftRadius":"4px","borderBottomLeftRadius":"4px"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","width":"132px"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}},"tag":{"default":{"borderTopLeftRadius":"4px","borderBottomLeftRadius":"4px"}}}, 
 },
},
});
const setProvider = () => {
const getToday = (type = 'day') => {
  // 创建当前日期对象
  const today = new Date();

  // 计算前一天（当前时间减去24小时的毫秒数）
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  // 获取年、月、日
  const year = yesterday.getFullYear();
  // 月份从0开始，需要加1
  let month = String(yesterday.getMonth() + 1).padStart(2, '0');
  // 日期
  const day = String(yesterday.getDate()).padStart(2, '0');
  if (type === 'month') {
    const month2 = String(yesterday.getMonth()).padStart(2, '0');
    return [`${year}-${month2}`, `${year}-${month2}`];
  }

  // 格式化为"YYYY-MM-DD"
  return [`${year}-${month}-${day}`, `${year}-${month}-${day}`];
}
if(state.selectType === 'day'){
  state.timeType = 'daterange';
  state.timeData = getToday();
} else if (state.selectType === 'month'){
  state.timeType = 'monthrange';
  state.timeData = getToday('month');
}
const rootData2 = inject('surfaceWaterParamsState')
state.surfaceWaterParamsState = rootData2
console.log('135615631', state.surfaceWaterParamsState);

const setPageData = () => {
  // 流域编码
  state.WSYSTEM_CODE = global.regionaQuery.areaCode || '';
  // 填充页面标题
  state.title = global.regionaQuery.areaName || '-';
};
provide('WSystemState', state)

watch(
  () => global.regionaQuery.areaCode,
  () => {
    setPageData();
    // apiRegistry.getBaseInfo.request();
  },
  {
    immediate: true,
    deep: true,
  }
)

watch(
  () => [
    state?.surfaceWaterParamsState?.TIME,
    state?.surfaceWaterParamsState?.ASSESSTYPE
  ],
  ([time, assesstype]) => {
    state.TIME = time || '';
    state.ASSESSTYPE = assesstype || ''
  },
  {
    immediate: true,
  }
)
};
const aroundQuery = () => {
/* 发送综合查询初始化业务参数的消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "borderQuery", // 消息名称
  data: {
    id: state?.surfaceWaterParamsState?.wsystemRiverCompData?.WSYSTEM_CODE || state?.surfaceWaterParamsState?.wsystemRiverCompData?.WATER_CODE || '',
    layerName: state?.surfaceWaterParamsState?.wsystemRiverCompData?.layerName || '',
    name: state?.surfaceWaterParamsState?.wsystemRiverCompData?.WSYSTEM_NAME || state?.surfaceWaterParamsState?.wsystemRiverCompData?.WATER_NAME || '',
  },
});

// {
//     "room": "6a69lego94cb315b4cb61lego9ca754067",
//     "type": "borderQuery",
//     "data": {
//         "id": 0,
//         "layerName": "3kmarea"
//     }
// }

/* 发送综合查询初始化业务参数的消息 */
// rootData.rootSocket.emit('message', {
//   room: global.socketRoom, // 房间号
//   type: "borderQuery", // 消息名称
//   data: {
//     id: state.params.ID,
//     layerName: state.params.LAYER_NAME,
//     name: state.cardData[0].num
//   },
// });
};
const changeMoreBtnStatus = () => {
// 默认显示 展开更多 
state.isShowMore = !state.isShowMore;
};
const changeMoreBtnVisible = () => {
const domText = document.querySelectorAll("#t-gradient-text-589d\\.0f1fcc305 .t-text");
// 文本高度
let contentHeight = 44;
// 容器高度
const divHeight = 44;
if (domText.length) {
  contentHeight = domText[0].clientHeight;
}
state.showMore = contentHeight > divHeight
};
const changeMoreTextHeight = () => {
// 点击展开更多 修改 概述文本高度
const dom = document.querySelectorAll("#t-col-6c4c\\.d5dadb006");
const domText = document.querySelectorAll("#t-gradient-text-589d\\.0f1fcc305");

// 展开收起文字内容
state.zkText = state.isShowMore ? '展开更多' : '收起';

if (!state.isShowMore && dom?.length && domText?.length) {
  dom[0].style.height = 'max-content';
  domText[0].style.height = 'max-content';
} else if (dom?.length && domText?.length){
  dom[0].style.height = '54px';
  domText[0].style.height = '44px';
}
};
const close = () => {
console.log('执行关闭流域详情面板操作', state.cardData);
// 给地图发送消息清除图层
state.cardData.forEach(item => {
  let type, data;

  // 发送 清除 消息
  // && item.TAG_TOPIC_CODE !== "58500a42-3349-484c-8ce7-3b8ae8d5ae42"
  if (!item.TYPE) {
    // 除监测断面外的点数据
    type = "changeZhxcMapParams"
    data = [
      {
        "type": "remove-zhcx-layer",
        "params": {
          "layerPrefix": "yzt-zhcx-layerPrefix",
          "codes": [
            item.TAG_TOPIC_CODE
          ]
        }
      }
    ]
  } else if (item.TYPE && !["GL","ZL","QTHL", 'ZC', 'ZCQT', 'ZYHD', 'ZGHC'].includes(item.TAG_TOPIC_CODE)) {
    // 除干流、支流、其它河流外的面数据
    type = "setLayersAR";
    data = [{
      "libraryId": item.LAYER_NAME,
      "layerId": item.LAYER_NAME,
      "opType": "remove"
    }]
  }
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type,
    data
  });
})



};
const handleChangeTime = (val) => {
// state.surfaceWaterParamsState.TIME = val
// state.TIME = val


const isSameYear = (dates) => {
  // 确保输入是包含两个日期的数组
  if (!Array.isArray(dates) || dates.length !== 2) {
    return false;
  }

  // 解析日期
  const date1 = new Date(dates[0]);
  const date2 = new Date(dates[1]);

  // 检查日期是否有效
  if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
    return false;
  }

  // 比较年份
  return date1.getFullYear() === date2.getFullYear();
}
console.log(val, '选中时间');
let timeData = state.timeData;
console.log(timeData)
if (!isSameYear(val)) {
  state.isShow = false;
  ElementPlus.ElMessage({
    message: '当前选中的时间不允许跨年，请重新进行选择！',
    type: 'warning',
  });
  setTimeout(() => {
    state.isShow = true;
    state.timeData = timeData;
    console.log(state.timeData);
  }, 0)

} else {
  // setTimeout(() => {
  //   state.isShow = true;
  //   state.timeData = val;
  //   console.log(state.timeData);
  // }, 0)
  state.timeData = val;

}


};
const handleChangeAssesstype = (val) => {
state.surfaceWaterParamsState.ASSESSTYPE = val
state.ASSESSTYPE = val
};
const setTimeType = (type) => {
state.selectType = type;
const getToday = () => {
  // 创建当前日期对象
  const today = new Date();

  // 计算前一天（当前时间减去24小时的毫秒数）
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  // 获取年、月、日
  const year = yesterday.getFullYear();
  // 月份从0开始，需要加1
  let month = String(yesterday.getMonth() + 1).padStart(2, '0');
  // 日期
  const day = String(yesterday.getDate()).padStart(2, '0');

  // 格式化为"YYYY-MM-DD"
  return [`${year}-${month}-${day}`, `${year}-${month}-${day}`];
}
const getTomonth = () => {
  // 创建当前日期对象
  const today = new Date();

  // 获取当前年份和月份
  let year = today.getFullYear();
  let month = today.getMonth(); // 月份从0开始（0表示1月，11表示12月）

  // 计算上一个月
  if (month === 0) {
    // 如果当前是1月（0），上一个月是去年12月
    year--;
    month = 11;
  } else {
    // 其他月份直接减1
    month--;
  }

  // 格式化月份为两位数（1-9月前补0）
  const formattedMonth = String(month + 1).padStart(2, '0');

  // 拼接成年-月格式
  const lastMonth = `${year}-${formattedMonth}`;
  return [lastMonth, lastMonth];
}
const getQuarter = () => {
  // 创建当前日期对象
  const today = new Date();
  // 获取当前月份（0表示1月，11表示12月）
  const currentMonth = today.getMonth();
  // 获取当前年份
  const currentYear = today.getFullYear();

  // 计算当前季度的起始月份（0, 3, 6, 9分别对应1,4,7,10月）
  const startMonth = Math.floor(currentMonth / 3) * 3;
  // 计算当前季度的结束月份
  const endMonth = startMonth + 2;

  // 格式化月份为两位数（1-9月前补0）
  const formatMonth = (month) => String(month + 1).padStart(2, '0');

  // 构建开始月和结束月的字符串格式
  const startMonthStr = `${currentYear}-${formatMonth(startMonth)}`;
  const endMonthStr = `${currentYear}-${formatMonth(endMonth)}`;
  return [startMonthStr, endMonthStr];

}

const getHalfYear = () => {
  // 获取当前日期
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 月份从0开始，0表示1月，11表示12月

  // 当前月份的信息（格式：YYYY-MM）
  const currentMonthStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`;

  // 计算往前推5个月的日期
  let pastYear = currentYear;
  let pastMonth = currentMonth - 5;

  // 处理跨年情况
  if (pastMonth < 0) {
    pastYear -= Math.floor((-pastMonth) / 12) || 1;
    pastMonth = (pastMonth + 12) % 12;
  }

  // 前推5个月的信息（格式：YYYY-MM）
  const pastMonthStr = `${pastYear}-${String(pastMonth + 1).padStart(2, '0')}`;
  return [pastMonthStr, currentMonthStr];
}
const getYear = () => {
  // 创建当前日期对象
  const today = new Date();
  // 获取当前年份
  const currentYear = today.getFullYear();
  // 获取当前月份（注意月份从0开始，需要+1）
  const currentMonth = today.getMonth() + 1;

  // 格式化月份为两位数
  function formatMonth(month) {
    return month.toString().padStart(2, '0');
  }

  // 今年第一月
  const firstMonth = `${currentYear}-${formatMonth(1)}`;
  // 当前月
  const currentMonthFormatted = `${currentYear}-${formatMonth(currentMonth)}`;
  return [firstMonth, currentMonthFormatted];
}


if (type === 'day') {
  state.timeType = 'daterange';
  state.timeData = getToday();
} else if (type === 'month') {
  state.timeType = 'monthrange';
  state.timeData = getTomonth();
} else if (type === 'quarter') {
  state.timeType = 'monthrange';
  state.timeData = getQuarter();
} else if (type === 'halfYear') {
  state.timeType = 'monthrange';
  state.timeData = getHalfYear();
} else if (type === 'year') {
  state.timeType = 'monthrange';
  state.timeData = getYear();
}
setTimeout(()=>{
  state.isShow = true;
},0)

};
const onchange1759112983399 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
setTimeType(value);
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"state.TIME","WSYSTEM_CODE":"global.regionaQuery.areaCode","interfaceId":"ca3a0f39869f87ba9583a86a7dd16a01"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.TIME,"WSYSTEM_CODE":global.regionaQuery.areaCode,"interfaceId":"ca3a0f39869f87ba9583a86a7dd16a01"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":state.TIME,"WSYSTEM_CODE":global.regionaQuery.areaCode,"interfaceId":"ca3a0f39869f87ba9583a86a7dd16a01"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     console.log('流域入口 - 基本信息', res.data)
state.gsText = "--"
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.gsText = res.data.data.DESCRIPTION || "--"
}
setTimeout(() => {
  state.isShowMore = true
  changeMoreBtnVisible();
  changeMoreTextHeight();
}, 0)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.gsText = "--"
setTimeout(() => {
  state.isShowMore = true
  changeMoreBtnVisible();
  changeMoreTextHeight();
}, 0)
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [state.TIME], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getBaseInfo', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-waterOverviewEnter', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setProvider();
onMounted(() => {
setPageScale('t-l-c-waterOverviewEnter', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
changeMoreBtnVisible();
/* 接收socket.io消息 */
const onSocketChangee672b20daf42493688a3 = function (data) {
if(data.type === "resetWsystem"){
try{
// 执行自定义方法
close();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeWaterWsystemRightPage", // 消息名称
data: {}, // 发送的数据
});
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangee672b20daf42493688a3);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangee672b20daf42493688a3);
});
});
onBeforeUnmount(() => {
// 执行自定义方法
close();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tSelectx0x2ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2.default, componentState.tSelectx0x2?.[state.screenSize]));

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
tRectx0x0ComputedData,
tComponentx0x1ComputedData,
tSelectx0x2ComputedData,
onchange1759112983399,
};
},
}
</script>

<style scoped>
.t-l-c-waterOverviewEnter {
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
width: 450px;
height: 900px;
background-color: rgba(0,0,0,0);
}
.t-l-c-waterOverviewEnter .waterOverviewEnter-t-rect-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 450px;
height: 900px;
pointer-events: auto;
}

.t-l-c-waterOverviewEnter .waterOverviewEnter-t-component-0-1 {
position: absolute !important;
top: 30px;
left: 0px;
width: 450px;
height: 870px;
pointer-events: auto;
}

.t-l-c-waterOverviewEnter .waterOverviewEnter-t-select-0-2 {
position: absolute !important;
top: 72px;
left: -192px;
width: 100px;
height: 32px;
pointer-events: auto;
}
</style>
