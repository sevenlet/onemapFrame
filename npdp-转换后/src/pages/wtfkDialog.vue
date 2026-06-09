<template>
  <div id="t-l-c-wtfkDialog" class="t-l-c-wtfkDialog" ><t-row id="t-row-db5a.5de58e289" class="wtfkDialog-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-list-card id="t-list-card-2a90.8eaad1d66" class="wtfkDialog-t-list-card-0-0-0"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-2a90.8eaad1d66']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x0x0ComputedData.spacingX" :col="tListCardx0x0x0ComputedData.col" :direction="tListCardx0x0x0ComputedData.direction" :exchange-order="tListCardx0x0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0x0ComputedData.unitBreak" :key-field="tListCardx0x0x0ComputedData.keyField" :active-key-field="tListCardx0x0x0ComputedData.activeKeyField" :active="tListCardx0x0x0ComputedData.active" :c-style="tListCardx0x0x0ComputedData.cStyle"></t-list-card></t-row><t-row id="t-row-229f.88e26ab6a" class="wtfkDialog-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-col id="t-col-8690.b0d48190d" class="wtfkDialog-t-col-0-1-0"  :span="tColx0x1x0ComputedData.span" :offset="tColx0x1x0ComputedData.offset" :push="tColx0x1x0ComputedData.push" :pull="tColx0x1x0ComputedData.pull" :c-style="tColx0x1x0ComputedData.cStyle"><t-circle v-if="state.isHaveFile === true" id="t-circle-408a.259922892" class="wtfkDialog-t-circle-0-1-0-0"  :tip="tCirclex0x1x0x0ComputedData.tip" :label="tCirclex0x1x0x0ComputedData.label" :active="tCirclex0x1x0x0ComputedData.active" :c-style="tCirclex0x1x0x0ComputedData.cStyle" @click="onclick1766303905556"></t-circle></t-col><t-col id="t-col-1830.b0d112186" class="wtfkDialog-t-col-0-1-1"  :span="tColx0x1x1ComputedData.span" :offset="tColx0x1x1ComputedData.offset" :push="tColx0x1x1ComputedData.push" :pull="tColx0x1x1ComputedData.pull" :c-style="tColx0x1x1ComputedData.cStyle"><t-circle v-if="state.isHaveFile === true" id="t-circle-b041.0f546e3ed" class="wtfkDialog-t-circle-0-1-1-0"  :tip="tCirclex0x1x1x0ComputedData.tip" :label="tCirclex0x1x1x0ComputedData.label" :active="tCirclex0x1x1x0ComputedData.active" :c-style="tCirclex0x1x1x0ComputedData.cStyle" @click="onclick1766303884021"></t-circle></t-col></t-row><t-row id="t-row-976e.67cde8684" class="wtfkDialog-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align"><t-component id="t-component-03ea.669cdf296" class="wtfkDialog-t-component-0-2-0"  :name="tComponentx0x2x0ComputedData.name" :loading="tComponentx0x2x0ComputedData.loading" :c-style="tComponentx0x2x0ComputedData.cStyle" :src="tComponentx0x2x0ComputedData.src" :component-name="tComponentx0x2x0ComputedData.componentName" :page-id="tComponentx0x2x0ComputedData.pageId" :page-code="tComponentx0x2x0ComputedData.pageCode"></t-component></t-row></div>
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
import { TCircle, TCol, TComponent, TListCard, TRow } from '@ths/design';

export default {
  components: {
    TCircle,
    TCol,
    TComponent,
    TListCard,
    TRow,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-db5a.5de58e289":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-list-card-2a90.8eaad1d66":{"attributeName":"tListCardx0x0x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-229f.88e26ab6a":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-8690.b0d48190d":{"attributeName":"tColx0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-408a.259922892":{"attributeName":"tCirclex0x1x0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-1830.b0d112186":{"attributeName":"tColx0x1x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-b041.0f546e3ed":{"attributeName":"tCirclex0x1x1x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-976e.67cde8684":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-component-03ea.669cdf296":{"attributeName":"tComponentx0x2x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   communityAddr: "",
   timeEndTest: "",
   timeStart: "",
   timeEnd: "",
   pageDateil: {"pageTitle":"--","lon":"","lat":""},
   endTime: "",
   startTime: "",
   isHaveFile: false,
   detailDataIndex: 0,
   currentPkid: "",
   pageTitle: "",
   listData: [],
   currentIndex: 0,
   activeFile: {},
   fileDataList: [],
   baseInfoData: [{"title":"检查地点","num":"-"},{"title":"经度","num":"-"},{"title":"纬度","num":"-"},{"title":"关联火点","num":"-"},{"title":"现场情况说明","num":"-"},{"title":"采取手段","num":"-"},{"title":"检查人","num":"-"},{"title":"检查时间","num":"-"}],
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"275px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"10px","paddingLeft":"15px","paddingRight":"15px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"275px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"10px","paddingLeft":"15px","paddingRight":"15px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tListCardx0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"275px","position":"unset","left":"4.5px","top":"2px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"检查地点","num":"-"},{"title":"经度","num":"-"},{"title":"纬度","num":"-"},{"title":"关联火点","num":"-"},{"title":"现场情况说明","num":"-"},{"title":"采取手段","num":"-"},{"title":"检查人","num":"-"},{"title":"检查时间","num":"-"}],
spacingX:2,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"275px","position":"unset","left":"4.5px","top":"2px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"0px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"30%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","marginRight":"2px","height":""}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"69%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":""}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}},"innerWrapper":{"default":{"display":"flex","justifyContent":"left","gap":"0"}}}, 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"65px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"470px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"65px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"470px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x0: {
defaultStyle: {
            default: {"width":"100px","height":"65px","display":"flex","justifyContent":"left","alignItems":"center","paddingLeft":"30px"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"65px","display":"flex","justifyContent":"left","alignItems":"center","paddingLeft":"30px"}}}, 
 },
},
tCirclex0x1x0x0: {
defaultStyle: {
            default: {"width":"36px","height":"36px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"none !important","borderTop":"1px Solid var(--t-circle-border-color)","borderLeft":"1px Solid var(--t-circle-border-color)","borderBottom":"1px Solid var(--t-circle-border-color)","borderRight":"1px Solid var(--t-circle-border-color)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","top":"448px","left":"13px","background":"rgba(0, 0, 0, 0.5)","fillType":"color","position":"unset","zIndex":"99","animationName":"","cursor":"pointer","backgroundImage":"url(assets/images/2022-11-01/f24af02be87642d7b403b4876d7829d8.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"36px","height":"36px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"none !important","borderTop":"1px Solid var(--t-circle-border-color)","borderLeft":"1px Solid var(--t-circle-border-color)","borderBottom":"1px Solid var(--t-circle-border-color)","borderRight":"1px Solid var(--t-circle-border-color)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","top":"448px","left":"13px","background":"rgba(0, 0, 0, 0.5)","fillType":"color","position":"unset","zIndex":"99","animationName":"","cursor":"pointer","backgroundImage":"url(assets/images/2022-11-01/f24af02be87642d7b403b4876d7829d8.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},"active":{"background":"var(--t-brand8)","fillType":"color"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tColx0x1x1: {
defaultStyle: {
            default: {"width":"100px","height":"65px","display":"flex","justifyContent":"right","alignItems":"center","paddingLeft":"unset","paddingRight":"30px"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"65px","display":"flex","justifyContent":"right","alignItems":"center","paddingLeft":"unset","paddingRight":"30px"}}}, 
 },
},
tCirclex0x1x1x0: {
defaultStyle: {
            default: {"width":"36px","height":"36px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"none !important","borderTop":"1px Solid var(--t-circle-border-color)","borderLeft":"1px Solid var(--t-circle-border-color)","borderBottom":"1px Solid var(--t-circle-border-color)","borderRight":"1px Solid var(--t-circle-border-color)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","top":"448px","left":"390px","background":"rgba(0, 0, 0, 0.5)","fillType":"color","position":"unset","zIndex":"99","cursor":"pointer","backgroundImage":"url(assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"36px","height":"36px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"none !important","borderTop":"1px Solid var(--t-circle-border-color)","borderLeft":"1px Solid var(--t-circle-border-color)","borderBottom":"1px Solid var(--t-circle-border-color)","borderRight":"1px Solid var(--t-circle-border-color)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","top":"448px","left":"390px","background":"rgba(0, 0, 0, 0.5)","fillType":"color","position":"unset","zIndex":"99","cursor":"pointer","backgroundImage":"url(assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},"active":{"background":"var(--t-brand8)","fillType":"color"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"400px","display":"flex","justifyContent":"center","alignItems":"center","left":"0px","top":"296px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"400px","display":"flex","justifyContent":"center","alignItems":"center","left":"0px","top":"296px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tComponentx0x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"400px","margin":"0 auto","position":"unset","left":"8px","top":"291px"},
            
            },
 default: { 
 
name:"previewFileComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"100%","height":"400px","margin":"0 auto","position":"unset","left":"8px","top":"291px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/previewFile",
componentName:"previewFileComponent",
pageId:"911ad784ecda4fdb9d70b48cd90c259e",
pageCode:"previewFile", 
 },
},
});
const handleSwitchData = (type) => {
const total = state.listData.length
  
// 如果没有文件或只有一个文件，不需要切换
if (total <= 1) return

let newIndex

if (type === 'next') {
  // 下一个：如果当前是最后一个，回到第一个
  newIndex = state.detailDataIndex === total - 1 ? 0 : state.detailDataIndex + 1
} else if (type === 'prev') {
  // 上一个：如果当前是第一个，跳到最后
  newIndex = state.detailDataIndex === 0 ? total - 1 : state.detailDataIndex - 1
} else {
  return
}

// 更新当前索引
state.detailDataIndex = newIndex

console.log('111state.detailDataIndex', state.detailDataIndex)

apiRegistry.getBaseInfo.request(state.listData[state.detailDataIndex].pkid);
apiRegistry.getFileList.request(state.listData[state.detailDataIndex].pkid);
};
const handleSwitchImg = (direction) => {
const total = state.fileDataList.length
  
// 如果没有文件或只有一个文件，不需要切换
if (total <= 1) return

let newIndex

if (direction === 'next') {
  // 下一个：如果当前是最后一个，回到第一个
  newIndex = state.currentIndex === total - 1 ? 0 : state.currentIndex + 1
} else if (direction === 'prev') {
  // 上一个：如果当前是第一个，跳到最后
  newIndex = state.currentIndex === 0 ? total - 1 : state.currentIndex - 1
} else {
  return
}

// 更新当前索引
state.currentIndex = newIndex
state.activeFile = state.fileDataList[state.currentIndex];
console.log('state.activeFile', state.activeFile);
};
const provideState = () => {
provide('onSiteFeedback',state)

// apiRegistry.getBaseInfo.request();
};
const handleLocation = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'gotoPoint',  // 消息类型名称
    data: {
      longitude: state.pageDateil.lon,
      latitude: state.pageDateil.lat,
    }
  }
);
};
const initParams = () => {
const pkid = global.businessDialog.dialogParmas?.pkid || ''
if (pkid) {
  // 获取详情
  apiRegistry.getBaseInfo.request(pkid);
  // 获取附件信息
  apiRegistry.getFileList.request(pkid);
} else {
  // 获取当前年份
  const currentYear = new Date().getFullYear();

  // 设置默认值
  state.timeStart = `${currentYear}-01-01 00`;

  state.timeEnd = `${currentYear}-12-31 23`;

  state.currentPkid = global.airGlobalVariables.fireworks.surroundingAnalysis.activePointInfo.pkid || '';
  state.communityAddr = global.airGlobalVariables.fireworks.surroundingAnalysis.activePointInfo.community_addr || ''


  rootData.rootSocket.emit(
    'message',
    {
      room: global.socketRoom,
      type: 'updatePatrolReportStatus',
      data: {
        visible: true,
        startTime: state.timeStart,
        endTime: state.timeEnd,
        relatedFirePoint: state.currentPkid,
        community_addr: state.communityAddr
      }
    }
  );
  apiRegistry.getListData.request();
}
};
const unmounted = () => {
// 图层消息
rootData.rootSocket.emit(
  'message',
  {
    room: global.socketRoom,
    type: 'updatePatrolReportStatus',
    data: {
      visible: false,
      startTime: '',
      endTime: '',
    }
  }
);
};
const setStyle = () => {
const sheet = new CSSStyleSheet();
sheet.insertRule(`.wtfkDialog-t-component-0-2-0 .content .feedback-record-image {
width: 100% !important;
}`);

document.adoptedStyleSheets = [sheet];

};
const onclick1766303905556 = () => {
// 执行自定义方法
handleSwitchImg("prev");
};
const onclick1766303884021 = () => {
// 执行自定义方法
handleSwitchImg("next");
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getBaseInfo: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"pkid","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"d4lbHIbXcj"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"pkid":"this.pkid","pageNum":1,"pageSize":"10","interfaceId":"9b1acb5d4314306cf6e8db8f751771e3"}},
              request: function (pkid, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"pkid":pkid,"pageNum":1,"pageSize":"10","interfaceId":"9b1acb5d4314306cf6e8db8f751771e3"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"pkid":pkid,"pageNum":1,"pageSize":"10","interfaceId":"9b1acb5d4314306cf6e8db8f751771e3"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data } = res;

if(data.head.statusCode === '200' && data.data){
  state.pageDateil.pageTitle = data?.data[0]?.inspectionLocation || '-';
  state.pageDateil.lon = data?.data[0]?.longitude || '-';
  state.pageDateil.lat = data?.data[0]?.latitude || '-';
  state.baseInfoData[0].num = data?.data[0]?.inspectionLocation || '-';
  state.baseInfoData[1].num = data?.data[0]?.longitude || '-';
  state.baseInfoData[2].num = data?.data[0]?.latitude || '-';
  state.baseInfoData[3].num = data?.data[0]?.relatedFirePoint || '-';
  state.baseInfoData[4].num = data?.data[0]?.onSiteDescription || '-';
  state.baseInfoData[5].num = data?.data[0]?.measuresTakenName || '-';
  state.baseInfoData[6].num = data?.data[0]?.inspector || '-';
  state.baseInfoData[7].num = data?.data[0]?.inspectionTime || '-';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      

      reject(error);
    });
  });
},
              },
// 接口函数
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"community_addr":"state.communityAddr","relatedFirePoint":"state.currentPkid","pageNum":1,"pageSize":"100000","inspectionTimeStart":"state.timeStart","inspectionTimeEnd":"state.timeEnd","interfaceId":"4a679fccf67a8c4bf111c4b39593b167"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"community_addr":state.communityAddr,"relatedFirePoint":state.currentPkid,"pageNum":1,"pageSize":"100000","inspectionTimeStart":state.timeStart,"inspectionTimeEnd":state.timeEnd,"interfaceId":"4a679fccf67a8c4bf111c4b39593b167"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"community_addr":state.communityAddr,"relatedFirePoint":state.currentPkid,"pageNum":1,"pageSize":"100000","inspectionTimeStart":state.timeStart,"inspectionTimeEnd":state.timeEnd,"interfaceId":"4a679fccf67a8c4bf111c4b39593b167"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  
  // 初始化listData
  state.listData = res?.data.data || [];

  if (res?.data.data.length > 0) {
    // 获取详情
    apiRegistry.getBaseInfo.request(state.listData[state.detailDataIndex].pkid);
    
    // 获取附件信息
    apiRegistry.getFileList.request(state.listData[state.detailDataIndex].pkid);
  }
  
} else {
  state.listData = [];
  state.pageDateil.pageTitle = '--';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.listData = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getFileList: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"businessKey","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"yerbn6M2zT"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/waterevaluate/api/components/file/list","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"subBusinessKey":"","businessKey":"this.businessKey","pageNum":"1","pageSize":"10"}},
              request: function (businessKey, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/api/components/file/list","method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"subBusinessKey":"","businessKey":businessKey,"pageNum":"1","pageSize":"10"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-/waterevaluate/api/components/file/list',  {"subBusinessKey":"","businessKey":businessKey,"pageNum":"1","pageSize":"10"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getFileList'] = res.data;
                
     if (res?.data?.code === 200) {
  const baseUrl = 'http://192.168.24.106:10157/waterevaluate/api/components/file/download/';
  
  if (res.data.data.length > 0) {
    state.isHaveFile = true;
    state.fileDataList = res.data.data.map(fileItem => ({
      url: baseUrl + fileItem.fileId,  // 拼接的完整地址
      ...fileItem
    }));
    
    state.activeFile = state.fileDataList[0];
  } else {
    state.fileDataList = [];
    state.activeFile = {};
    state.isHaveFile = false;
  }

  
} else {
  state.fileDataList = [];
  state.activeFile = {};
  state.isHaveFile = false;
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
// 监听变量，调取接口
watch(() => [1,"100000"], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-wtfkDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
provideState();
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-wtfkDialog', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setStyle();
});
onUnmounted(() => {
// 页面离开时的操作
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
// 执行自定义方法
unmounted();
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tListCardx0x0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0x0.default, componentState.tListCardx0x0x0?.[state.screenSize]));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tColx0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0.default, componentState.tColx0x1x0?.[state.screenSize]));

 const tCirclex0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tCirclex0x1x0x0.default, componentState.tCirclex0x1x0x0?.[state.screenSize]));

 const tColx0x1x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1.default, componentState.tColx0x1x1?.[state.screenSize]));

 const tCirclex0x1x1x0ComputedData = computed(() => _.merge({}, componentState.tCirclex0x1x1x0.default, componentState.tCirclex0x1x1x0?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tComponentx0x2x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2x0.default, componentState.tComponentx0x2x0?.[state.screenSize]));

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
tRowx0x0ComputedData,
tListCardx0x0x0ComputedData,
tRowx0x1ComputedData,
tColx0x1x0ComputedData,
tCirclex0x1x0x0ComputedData,
tColx0x1x1ComputedData,
tCirclex0x1x1x0ComputedData,
tRowx0x2ComputedData,
tComponentx0x2x0ComputedData,
onclick1766303905556,
onclick1766303884021,
};
},
}
</script>

<style scoped>
.t-l-c-wtfkDialog {
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
width: 440px;
height: 716px;
background-color: rgba(0, 0, 0, 0);
}
.t-l-c-wtfkDialog .wtfkDialog-t-row-0-0 {
position: absolute !important;
top: 10px;
left: 0px;
width: 100%;
height: 275px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
padding-left: 15px;
padding-right: 15px;
}

.t-l-c-wtfkDialog .wtfkDialog-t-list-card-0-0-0 {
position: unset;
top: 2px;
left: 4.5px;
width: 100%;
height: 275px;
pointer-events: auto;
}

.t-l-c-wtfkDialog .wtfkDialog-t-row-0-1 {
position: absolute !important;
top: 470px;
left: 0px;
width: 100%;
height: 65px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-wtfkDialog .wtfkDialog-t-col-0-1-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 65px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
padding-left: 30px;
}

.t-l-c-wtfkDialog .wtfkDialog-t-circle-0-1-0-0 {
position: unset;
top: 448px;
left: 13px;
width: 36px;
height: 36px;
pointer-events: auto;
}

.t-l-c-wtfkDialog .wtfkDialog-t-col-0-1-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 65px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
padding-left: unset;
padding-right: 30px;
}

.t-l-c-wtfkDialog .wtfkDialog-t-circle-0-1-1-0 {
position: unset;
top: 448px;
left: 390px;
width: 36px;
height: 36px;
pointer-events: auto;
}

.t-l-c-wtfkDialog .wtfkDialog-t-row-0-2 {
position: absolute !important;
top: 296px;
left: 0px;
width: 100%;
height: 400px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-wtfkDialog .wtfkDialog-t-component-0-2-0 {
position: unset;
top: 291px;
left: 8px;
width: 100%;
height: 400px;
pointer-events: auto;
}
</style>
