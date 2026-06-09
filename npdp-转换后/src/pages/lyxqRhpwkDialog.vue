<template>
  <div id="t-l-c-lyxqRhpwkDialog" class="t-l-c-lyxqRhpwkDialog" ><t-rect id="t-rect-8252.1a4ade4f4" class="lyxqRhpwkDialog-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-e3a7.d7772ec8d" class="lyxqRhpwkDialog-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-text id="t-text-8cba.b16affff7" class="lyxqRhpwkDialog-t-text-0-2"  :label="state.title" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle" :show-title="tTextx0x2ComputedData.showTitle"></t-text><t-rect id="t-rect-da62.857f90ab" class="lyxqRhpwkDialog-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1733817210174"></t-rect><t-rect id="t-rect-6796.4aa19ae4d" class="lyxqRhpwkDialog-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle"></t-rect><t-text id="t-text-f445.54f91b1e5" class="lyxqRhpwkDialog-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle" @click="onclick1738746132003"></t-text><t-text id="t-text-26d5.d777feb8d" class="lyxqRhpwkDialog-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle" @click="onclick1738746175147"></t-text><t-text id="t-text-1e3c.c576adedc" class="lyxqRhpwkDialog-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle" @click="onclick1738746213995"></t-text><t-list-card id="t-list-card-a89e.9248b8bff" class="lyxqRhpwkDialog-t-list-card-0-8"  :data="state.cardList1" :spacing-x="tListCardx0x8ComputedData.spacingX" :col="tListCardx0x8ComputedData.col" :direction="tListCardx0x8ComputedData.direction" :exchange-order="tListCardx0x8ComputedData.exchangeOrder" :unit-break="tListCardx0x8ComputedData.unitBreak" :key-field="tListCardx0x8ComputedData.keyField" :active-key-field="tListCardx0x8ComputedData.activeKeyField" :active="tListCardx0x8ComputedData.active" :c-style="tListCardx0x8ComputedData.cStyle"></t-list-card></div>
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
import { TListCard, TRect, TText } from '@ths/design';

export default {
  components: {
    TListCard,
    TRect,
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
   title: "-",
   pointData: {},
   cardList1: [{"title":"所属行政区","num":"-"},{"title":"所属镇街","num":"-"},{"title":"详细地址","num":"-"},{"title":"入河方式","num":"-"},{"title":"排入水体名称","num":"-"},{"title":"设置时间","num":"-"},{"title":"入河排污口类型","num":"-"},{"title":"经度","num":"-"},{"title":"纬度","num":"-"}],
   DATA_ID: "",
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
            default: {"width":"450px","height":"464px","position":"unset","left":"735px","top":"308px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"464px","position":"unset","left":"735px","top":"308px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"735px","top":"308px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"735px","top":"308px","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"359px","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"759px","top":"321px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"0px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"359px","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"759px","top":"321px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"0px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}},
showTitle:true, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1137px","top":"318px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1137px","top":"318px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"449px","height":"52px","position":"unset","left":"735px","top":"718px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"449px","height":"52px","position":"unset","left":"735px","top":"718px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","animationName":""}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"861px","top":"731px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-around)","backgroundPosition":"8px 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"周边查询",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"861px","top":"731px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-around)","backgroundPosition":"8px 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"969px","top":"731px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-detail)","backgroundPosition":"22px 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"详情",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"969px","top":"731px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-detail)","backgroundPosition":"22px 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1078px","top":"731px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-scale)","backgroundPosition":"18% 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"缩放至",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1078px","top":"731px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-scale)","backgroundPosition":"18% 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""}}}, 
 },
},
tListCardx0x8: {
defaultStyle: {
            default: {"width":"412px","height":"328px","position":"unset","left":"755px","top":"374px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"所属行政区","num":"-"},{"title":"所属镇街","num":"-"},{"title":"详细地址","num":"-"},{"title":"入河方式","num":"-"},{"title":"排入水体名称","num":"-"},{"title":"设置时间","num":"-"},{"title":"入河排污口类型","num":"-"},{"title":"经度","num":"-"},{"title":"纬度","num":"-"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"412px","height":"328px","position":"unset","left":"755px","top":"374px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
});
const initPageList = () => {
// 弹框传过来的参数
state.DATA_ID = global.businessDialog?.dialogParmas?.DATA_ID || '2333';

getWaringList();
};
const aroundQuery = () => {
console.log('周边查询');

const pointInfo = state.pointData;

if (pointInfo.LNG && pointInfo.LAT) {
  // 周边查询
  const pointLocation = [];
  pointLocation.push(parseFloat(pointInfo.LNG));
  pointLocation.push(parseFloat(pointInfo.LAT));

  /* 发送消息 */
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractiveChange", // 消息名称
    data: [ // 消息内容
      { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
      { shareCode: "POINT_LOACTION_NAME", runtimeValue: pointInfo.OUTLET_NAME }
    ]
  });

  global.businessDialog.dialogName = '';

}
};
const gotoDetails = () => {
console.log('查看详情');
};
const scaleZoom = () => {
console.log('缩放至');

rootData.rootSocket.emit('message', {
  type: 'goto',
  room: global.socketRoom,
  // data: [ // 消息内容
  //   { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
  //   { shareCode: "POINT_LOACTION_NAME", runtimeValue: pointInfo.PROJECT_NAME }
  // ],
  data: {
    LONGITUDE: state.pointData.LNG,
    LATITUDE: state.pointData.LAT,
    level: 12,
  },
});

};
const close = () => {
rootData.rootSocket.emit('message', {
  room: global.socketRoom,
  type: 'hideLegoDialog',
});
};
const onclick1733817210174 = () => {
// 执行自定义方法
close();
};
const onclick1738746132003 = () => {
// 执行自定义方法
aroundQuery();
};
const onclick1738746175147 = () => {
// 执行自定义方法
gotoDetails();
};
const onclick1738746213995 = () => {
// 执行自定义方法
scaleZoom();
};
// 接口函数
const getWaringList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATA_ID":state.DATA_ID,"interfaceId":"87bb01437a41ac32bc5d41aeb0470df5"},}).then((res) => {
     // 成功的操作
     state.cardList1 = [
  {
    "title": "所属行政区",
    "num": "-"
  },
  {
    "title": "所属镇街",
    "num": "-"
  },
  {
    "title": "详细地址",
    "num": "-"
  },
  {
    "title": "入河方式",
    "num": "-"
  },
  {
    "title": "排入水体名称",
    "num": "-"
  },
  {
    "title": "设置时间",
    "num": "-"
  },
  {
    "title": "入河排污口类型",
    "num": "-"
  },
  {
    "title": "经度",
    "num": "-"
  },
  {
    "title": "纬度",
    "num": "-"
  }
];
state.title = '-'

console.log('入河排污口弹框', res.data, state.cardList1)

if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.pointData = res?.data?.data || {};

  state.cardList1[0].num = res?.data?.data?.DISTRICT_TOWN || '-'; // 所属行政区
  state.cardList1[1].num = res?.data?.data?.DISTRICT_TOWN || '-'; // 所属镇街
  state.cardList1[2].num = res?.data?.data?.CONCRETE_POSITION || '-'; // 详细地址
  state.cardList1[3].num = res?.data?.data?.OUTLET_WAY || '-'; // 入河方式
  state.cardList1[4].num = res?.data?.data?.DISCHARGE_WATERBODY || '-'; // 排入水体名称
  state.cardList1[5].num = res?.data?.data?.SET_TIME || '-'; // 设置时间
  state.cardList1[6].num = res?.data?.data?.OUTLET_TYPE || '-'; // 入河排污口类型
  state.cardList1[7].num = res?.data?.data?.LNG || '-'; // 经度
  state.cardList1[8].num = res?.data?.data?.LAT || '-'; // 纬度
  state.title = res?.data?.data?.OUTLET_NAME || '-'
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.cardList1 = [
  {
    "title": "所属行政区",
    "num": "-"
  },
  {
    "title": "所属镇街",
    "num": "-"
  },
  {
    "title": "详细地址",
    "num": "-"
  },
  {
    "title": "入河方式",
    "num": "-"
  },
  {
    "title": "排入水体名称",
    "num": "-"
  },
  {
    "title": "设置时间",
    "num": "-"
  },
  {
    "title": "入河排污口类型",
    "num": "-"
  },
  {
    "title": "经度",
    "num": "-"
  },
  {
    "title": "纬度",
    "num": "-"
  }
];
state.title = '-'
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-lyxqRhpwkDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onBeforeMount(() => {
// 执行自定义方法
initPageList();
});
onMounted(() => {
setPageScale('t-l-c-lyxqRhpwkDialog', global.appScaleMode, 'normal');
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

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tListCardx0x8ComputedData = computed(() => _.merge({}, componentState.tListCardx0x8.default, componentState.tListCardx0x8?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tListCardx0x8ComputedData,
onclick1733817210174,
onclick1738746132003,
onclick1738746175147,
onclick1738746213995,
};
},
}
</script>

<style scoped>
.t-l-c-lyxqRhpwkDialog {
position: relative;
overflow: hidden;
--theme-color: var(--t-brand8);
--theme-color-opacity-10: rgba(var(--t-brand8), .1);
--theme-color-opacity-15: rgba(var(--t-brand8), .15);
--theme-color-opacity-40: rgba(var(--t-brand8), .4);
--theme-color-opacity-60: rgba(var(--t-brand8), .6);
--theme-color-opacity-80: rgba(var(--t-brand8), .8);
--theme-color-opacity-90: rgba(var(--t-brand8), .9);
pointer-events: none;
position: Relative;
z-index: 1;
filter: ;
width: 1920px;
height: 1080px;
background-color: rgba(255, 255, 255, 0);
left: 50%;
top: 50%;
transform: translateX(-50%) translateY(-50%);
}
.t-l-c-lyxqRhpwkDialog .lyxqRhpwkDialog-t-rect-0-0 {
position: absolute !important;
top: 308px;
left: 735px;
width: 450px;
height: 464px;
pointer-events: auto;
}

.t-l-c-lyxqRhpwkDialog .lyxqRhpwkDialog-t-rect-0-1 {
position: absolute !important;
top: 308px;
left: 735px;
width: 450px;
height: 47px;
pointer-events: auto;
}

.t-l-c-lyxqRhpwkDialog .lyxqRhpwkDialog-t-text-0-2 {
position: absolute !important;
top: 321px;
left: 759px;
width: 359px;
height: 21px;
pointer-events: auto;
}

.t-l-c-lyxqRhpwkDialog .lyxqRhpwkDialog-t-rect-0-3 {
position: absolute !important;
top: 318px;
left: 1137px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-lyxqRhpwkDialog .lyxqRhpwkDialog-t-rect-0-4 {
position: absolute !important;
top: 718px;
left: 735px;
width: 449px;
height: 52px;
pointer-events: auto;
}

.t-l-c-lyxqRhpwkDialog .lyxqRhpwkDialog-t-text-0-5 {
position: absolute !important;
top: 731px;
left: 861px;
width: 90px;
height: 28px;
pointer-events: auto;
}

.t-l-c-lyxqRhpwkDialog .lyxqRhpwkDialog-t-text-0-6 {
position: absolute !important;
top: 731px;
left: 969px;
width: 90px;
height: 28px;
pointer-events: auto;
}

.t-l-c-lyxqRhpwkDialog .lyxqRhpwkDialog-t-text-0-7 {
position: absolute !important;
top: 731px;
left: 1078px;
width: 90px;
height: 28px;
pointer-events: auto;
}

.t-l-c-lyxqRhpwkDialog .lyxqRhpwkDialog-t-list-card-0-8 {
position: absolute !important;
top: 374px;
left: 755px;
width: 412px;
height: 328px;
pointer-events: auto;
}
</style>
