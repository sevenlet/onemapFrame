<template>
  <div id="t-l-c-overviewDcxfContent" class="t-l-c-overviewDcxfContent" ><t-component id="t-component-85c6.f0ef71289" class="overviewDcxfContent-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName"></t-component><t-text-unit id="t-text-unit-6c8f.3ea4adfb2" class="overviewDcxfContent-t-text-unit-0-1"  :c-style="tTextUnitx0x1ComputedData.cStyle" :justify="tTextUnitx0x1ComputedData.justify" :align="tTextUnitx0x1ComputedData.align" :content="tTextUnitx0x1ComputedData.content" :unit="tTextUnitx0x1ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x1ComputedData.showOverflowTooltip"></t-text-unit><t-list-card id="t-list-card-ead7.c21d9191b" class="overviewDcxfContent-t-list-card-0-2"  :data="replaceCssVariables(state.cardList, global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x2ComputedData.spacingX" :col="tListCardx0x2ComputedData.col" :direction="tListCardx0x2ComputedData.direction" :exchange-order="tListCardx0x2ComputedData.exchangeOrder" :unit-break="tListCardx0x2ComputedData.unitBreak" :key-field="tListCardx0x2ComputedData.keyField" :active-key-field="tListCardx0x2ComputedData.activeKeyField" :active="replaceCssVariables(state.selectTitle, global?.theme || global?.activeTheme || '默认主题')" :c-style="tListCardx0x2ComputedData.cStyle" @card-click="oncardClick1765620163795"></t-list-card><t-search id="t-search-0224.c96c95d96" class="overviewDcxfContent-t-search-0-3"  :type="tSearchx0x3ComputedData.type" :input-value="tSearchx0x3ComputedData.inputValue" :maxlength="tSearchx0x3ComputedData.maxlength" :minlength="tSearchx0x3ComputedData.minlength" :show-word-limit="tSearchx0x3ComputedData.showWordLimit" :placeholder="tSearchx0x3ComputedData.placeholder" :clearable="tSearchx0x3ComputedData.clearable" :show-password="tSearchx0x3ComputedData.showPassword" :disabled="tSearchx0x3ComputedData.disabled" :prefix-icon="tSearchx0x3ComputedData.prefix-icon" :suffix-icon="tSearchx0x3ComputedData.suffix-icon" :rows="tSearchx0x3ComputedData.rows" :autosize="tSearchx0x3ComputedData.autosize" :name="tSearchx0x3ComputedData.name" :readonly="tSearchx0x3ComputedData.readonly" :step="tSearchx0x3ComputedData.step" :autofocus="tSearchx0x3ComputedData.autofocus" :form="tSearchx0x3ComputedData.form" :label="tSearchx0x3ComputedData.label" :tabindex="tSearchx0x3ComputedData.tabindex" :validate-event="tSearchx0x3ComputedData.validateEvent" :c-style="tSearchx0x3ComputedData.cStyle" :has-search-btn="tSearchx0x3ComputedData.hasSearchBtn" @change="onchange1765623113503"></t-search><t-button id="t-button-c903.8043e1fe9" class="overviewDcxfContent-t-button-0-4"  :label="tButtonx0x4ComputedData.label" :round="tButtonx0x4ComputedData.round" :plain="tButtonx0x4ComputedData.plain" :disabled="tButtonx0x4ComputedData.disabled" :type="tButtonx0x4ComputedData.type" :size="tButtonx0x4ComputedData.size" :native-type="tButtonx0x4ComputedData.native-type" :c-style="tButtonx0x4ComputedData.cStyle" @click="onclick1765623128634"></t-button><t-component id="t-component-a2df.ecd3f180b" class="overviewDcxfContent-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :loading="tComponentx0x5ComputedData.loading" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName" :page-id="tComponentx0x5ComputedData.pageId" :page-code="tComponentx0x5ComputedData.pageCode"></t-component><t-text-unit id="t-text-unit-d7a3.7ee736e2d" class="overviewDcxfContent-t-text-unit-0-6"  :c-style="tTextUnitx0x6ComputedData.cStyle" :content="tTextUnitx0x6ComputedData.content" :unit="tTextUnitx0x6ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x6ComputedData.showOverflowTooltip"></t-text-unit><t-table id="t-table-8acd.a392f2fd4" class="overviewDcxfContent-t-table-0-7"  :height="tTablex0x7ComputedData.height" :stripe="tTablex0x7ComputedData.stripe" :border="tTablex0x7ComputedData.border" :auto-scroll="tTablex0x7ComputedData.autoScroll" :speed="tTablex0x7ComputedData.speed" :columns="tTablex0x7ComputedData.columns" :data="replaceCssVariables(state.listData, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x7ComputedData.defaultSort" :c-style="tTablex0x7ComputedData.cStyle" @cell-click="oncellClick1765623325463"></t-table></div>
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
import { TButton, TComponent, TListCard, TSearch, TTable, TTextUnit } from '@ths/design';

export default {
  components: {
    TButton,
    TComponent,
    TListCard,
    TSearch,
    TTable,
    TTextUnit,
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
   keyWord: "",
   selectTitle: "",
   selectedCode: "",
   listData: [],
   cardList: [],
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"20px","top":"20px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"20px","top":"20px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextUnitx0x1: {
defaultStyle: {
            default: {"width":"261px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"54px","top":"26px","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"261px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"54px","top":"26px","lineHeight":"20px","animationName":""}},"unit":{"default":{"fontSize":"17px","fontFamily":"方正综艺","lineHeight":"20px"}},"text":{"default":{"lineHeight":"20px","fontSize":"17px"}}},
justify:"flex-start",
align:"flex-end",
content:"问题类别",
unit:"",
showOverflowTooltip:true, 
 },
},
tListCardx0x2: {
defaultStyle: {
            default: {"width":"421px","height":"246px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px","position":"unset","left":"17px","top":"58px"},
            
            },
 default: { 
 
data:[],
spacingX:8,
col:4,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"burning_status_name","num":"total","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"burning_status_name",
active:"",
cStyle:{"wrapper":{"default":{"width":"421px","height":"246px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px","position":"unset","left":"17px","top":"58px"}},"itemWrapper":{"default":{"height":"76px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"unset","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","gap":"11px"},"active":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"num":{"default":{"fontSize":"24px","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"14px","color":"var(--t-white)","marginTop":"0"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"17px"}},"numBox":{"default":{"marginTop":"8px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","width":"105px"}},"rightContent":{"default":{"alignItems":"center","marginLeft":"0px","justifyContent":"center"}},"innerWrapper":{"default":{"justifyContent":"left","alignItems":"center","display":"flex","gap":"0px"}}}, 
 },
},
tSearchx0x3: {
defaultStyle: {
            default: {"width":"351px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":"","top":"356px","left":"20px","position":"unset"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"搜索问题名称",
clearable:true,
showPassword:false,
disabled:false,
'prefix-icon':"",
'suffix-icon':"",
rows:2,
autosize:false,
name:"",
readonly:false,
step:"",
autofocus:false,
form:"",
label:"",
tabindex:"",
validateEvent:true,
cStyle:{"wrapper":{"default":{"width":"351px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":"","top":"356px","left":"20px","position":"unset"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tButtonx0x4: {
defaultStyle: {
            default: {"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","position":"unset","left":"383px","top":"356px"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","position":"unset","left":"383px","top":"356px"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"414px","height":"37px","margin":"0 auto","position":"unset","left":"19px","top":"311px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"414px","height":"37px","margin":"0 auto","position":"unset","left":"19px","top":"311px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tTextUnitx0x6: {
defaultStyle: {
            default: {"width":"282px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","position":"unset","left":"49px","top":"318px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"282px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","position":"unset","left":"49px","top":"318px","animationName":""}},"unit":{"default":{"fontSize":"17px","fontFamily":"方正综艺","lineHeight":"20px"}},"text":{"default":{"lineHeight":"20px","fontSize":"17px"}}},
content:"问题清单",
unit:"",
showOverflowTooltip:true, 
 },
},
tTablex0x7: {
defaultStyle: {
            default: {"width":"410px","height":"459px","position":"unset","left":"20px","top":"406px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"530px",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""},"cellStyle":{"cursor":"pointer"}},"width":"44PX","type":"default","stateKey":"iconStatus"},{"label":"序号","key":"number","align":"center","operationList":[],"stateList":[],"width":"30px","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"nameTextStatus","infoPosition":"right"},{"label":"问题名称","key":"issureName","align":"left","operationList":[],"stateList":[],"width":"335px","showOverflowTooltip":false,"style":{"fontStyle":{"fontSize":"14PX"},"cellStyle":{"cursor":"pointer"}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"459px","position":"unset","left":"20px","top":"406px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"0px solid rgba(26,27,31,1)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
});
const handleClickCard = (item) => {

state.selectTitle = item?.burning_status_name
state.selectedCode = item?.PROBLEM_TYPE_CODE
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'changeProblemStatus',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'PROBLEM_TYPE_NAME': state.selectTitle,
      'PROBLEM_TYPE_CODE': state.selectedCode,
      'PROBLEM_NAME': state.keyWord
    }
  }
);
};
const sendMsgToMap = (data) => {
if(data === 'onemap_manual_xinf'){
  rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'changeProblemStatus',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'PROBLEM_TYPE_CODE': state.selectedCode,
      'PROBLEM_NAME': state.keyWord
    }
  }
);
}
};
const goToLocation = (column,row) => {
if (["定位"].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "gotoPoint",
    data: {
      "longitude": row.LONGITUDE,
      "latitude": row.LATITUDE,
    }
  });
}


};
const oncardClick1765620163795 = (item) => {
// 执行自定义方法
handleClickCard(item);
};
const onchange1765623113503 = (value) => {
// 设置变量值
state.keyWord = value;
};
const onclick1765623128634 = () => {
// 事件交互-请求调用接口
getListData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeProblemStatus", // 消息名称
data: {"PROBLEM_NAME":state.keyWord,"PROBLEM_TYPE_CODE":state.selectedCode}, // 发送的数据
});
};
const oncellClick1765623325463 = (row,column,cell,event) => {
// 执行自定义方法
goToLocation(column,row);
};
// 接口函数
const getCardList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"174aa59bd24a44d0f4d7a8c399e2755c"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.cardList = data.map(item => {
    return {
      ...item,
      "burning_status": "0",
      "burning_status_name": item.PROBLEM_TYPE_NAME || '-',
      "total": item?.NUM || 0,
      "color": "var(--t-water-1)",
      "unit": "个"
    }
  })
  state.selectTitle = data[0].PROBLEM_TYPE_NAME
  state.selectedCode = data[0].PROBLEM_TYPE_CODE
} else {
  state.cardList = []
  state.selectTitle = ''
  state.selectedCode = ''
}
// 发送消息给地图
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'changeProblemStatus',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'PROBLEM_TYPE_CODE': state.selectedCode,
      'PROBLEM_NAME': state.keyWord
    }
  }
);

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], () => {
getCardList();
},{
deep: true, // 深度监听
});
// 初始请求，调取接口
getCardList();
// 接口函数
const getListData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"PROBLEM_NAME":state.keyWord,"PROBLEM_TYPE_CODE":state.selectedCode,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"1c17fa85460e61bbca61fa8d8f3ee820"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.listData = data.map((item,index) =>{
    return{
      ...item,
      "number": index + 1,
      "issureName": item.PROBLEM_NAME || '-'
    }
  })
}else{
  state.listData = []
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [state.selectedCode,global.regionaQuery.regionCode], () => {
getListData();
},{
deep: true, // 深度监听
});
// 初始请求，调取接口
getListData();
 function handleWindowResize() {
                            setPageScale('t-l-c-overviewDcxfContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
const onSocketChangecffaa4840c0f438c9d6b = function (data) {
if(data.type === "appLoaded"){
try{
// 执行自定义方法
sendMsgToMap(data.data.resCode);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangecffaa4840c0f438c9d6b);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangecffaa4840c0f438c9d6b);
});
onMounted(() => {
setPageScale('t-l-c-overviewDcxfContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextUnitx0x1ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x1.default, componentState.tTextUnitx0x1?.[state.screenSize]));

 const tListCardx0x2ComputedData = computed(() => _.merge({}, componentState.tListCardx0x2.default, componentState.tListCardx0x2?.[state.screenSize]));

 const tSearchx0x3ComputedData = computed(() => _.merge({}, componentState.tSearchx0x3.default, componentState.tSearchx0x3?.[state.screenSize]));

 const tButtonx0x4ComputedData = computed(() => _.merge({}, componentState.tButtonx0x4.default, componentState.tButtonx0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tTextUnitx0x6ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x6.default, componentState.tTextUnitx0x6?.[state.screenSize]));

 const tTablex0x7ComputedData = computed(() => _.merge({}, componentState.tTablex0x7.default, componentState.tTablex0x7?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tComponentx0x0ComputedData,
tTextUnitx0x1ComputedData,
tListCardx0x2ComputedData,
tSearchx0x3ComputedData,
tButtonx0x4ComputedData,
tComponentx0x5ComputedData,
tTextUnitx0x6ComputedData,
tTablex0x7ComputedData,
oncardClick1765620163795,
onchange1765623113503,
onclick1765623128634,
oncellClick1765623325463,
};
},
}
</script>

<style scoped>
.t-l-c-overviewDcxfContent {
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
height: 891px;
width: 450px;
background-color: rgba(0,0,0,0);
}
.t-l-c-overviewDcxfContent .overviewDcxfContent-t-component-0-0 {
position: absolute !important;
top: 20px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-overviewDcxfContent .overviewDcxfContent-t-text-unit-0-1 {
position: absolute !important;
top: 26px;
left: 54px;
width: 261px;
height: 20px;
pointer-events: auto;
}

.t-l-c-overviewDcxfContent .overviewDcxfContent-t-list-card-0-2 {
position: absolute !important;
top: 58px;
left: 17px;
width: 421px;
height: 246px;
pointer-events: auto;
}

.t-l-c-overviewDcxfContent .overviewDcxfContent-t-search-0-3 {
position: absolute !important;
top: 356px;
left: 20px;
width: 351px;
height: 32px;
pointer-events: auto;
}

.t-l-c-overviewDcxfContent .overviewDcxfContent-t-button-0-4 {
position: absolute !important;
top: 356px;
left: 383px;
width: 50px;
height: 32px;
pointer-events: auto;
}

.t-l-c-overviewDcxfContent .overviewDcxfContent-t-component-0-5 {
position: absolute !important;
top: 311px;
left: 19px;
width: 414px;
height: 37px;
pointer-events: auto;
}

.t-l-c-overviewDcxfContent .overviewDcxfContent-t-text-unit-0-6 {
position: absolute !important;
top: 318px;
left: 49px;
width: 282px;
height: 20px;
pointer-events: auto;
}

.t-l-c-overviewDcxfContent .overviewDcxfContent-t-table-0-7 {
position: absolute !important;
top: 406px;
left: 20px;
width: 410px;
height: 459px;
pointer-events: auto;
}
</style>
