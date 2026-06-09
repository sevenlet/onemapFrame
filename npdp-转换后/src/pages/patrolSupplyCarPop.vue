<template>
  <div id="t-l-c-patrolSupplyCarPop" class="t-l-c-patrolSupplyCarPop" ><t-rect id="t-rect-09e8.3b71afa9a" class="patrolSupplyCarPop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-list-card id="t-list-card-b17c.d932d9cd7" class="patrolSupplyCarPop-t-list-card-0-1"  :data="replaceCssVariables(filterData(state.baseInfo, componentPropBindingMap?.['t-list-card-b17c.d932d9cd7']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x1ComputedData.spacingX" :col="tListCardx0x1ComputedData.col" :direction="tListCardx0x1ComputedData.direction" :exchange-order="tListCardx0x1ComputedData.exchangeOrder" :unit-break="tListCardx0x1ComputedData.unitBreak" :key-field="tListCardx0x1ComputedData.keyField" :active-key-field="tListCardx0x1ComputedData.activeKeyField" :active="tListCardx0x1ComputedData.active" :c-style="tListCardx0x1ComputedData.cStyle"></t-list-card><t-rect id="t-rect-1555.727b60852" class="patrolSupplyCarPop-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle"></t-rect><t-rect id="t-rect-afae.576bf09ee" class="patrolSupplyCarPop-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle"></t-rect><t-rect id="t-rect-26fc.42aa488dd" class="patrolSupplyCarPop-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1734493226123"></t-rect><t-text id="t-text-440f.0fb335f25" class="patrolSupplyCarPop-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle" @click="onclick1766545174068"></t-text><t-text id="t-text-f6eb.33ae7f6bf" class="patrolSupplyCarPop-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle" @click="onclick1766537968495"></t-text><t-row id="t-row-a9c1.ffb0f3adb" class="patrolSupplyCarPop-t-row-0-7"  :c-style="tRowx0x7ComputedData.cStyle" :gutter="tRowx0x7ComputedData.gutter" :justify="tRowx0x7ComputedData.justify" :align="tRowx0x7ComputedData.align"><t-text-common id="t-text-common-ebb5.079f4d7f8" class="patrolSupplyCarPop-t-text-common-0-7-0"  :label="replaceCssVariables(filterData(state.title, componentPropBindingMap?.['t-text-common-ebb5.079f4d7f8']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x7x0ComputedData.editable" :c-style="tTextCommonx0x7x0ComputedData.cStyle"></t-text-common><t-rect id="t-rect-5ddd.c09e8a3a4" class="patrolSupplyCarPop-t-rect-0-7-1"  :tip="tRectx0x7x1ComputedData.tip" :label="tRectx0x7x1ComputedData.label" :active="tRectx0x7x1ComputedData.active" :c-style="tRectx0x7x1ComputedData.cStyle"></t-rect></t-row></div>
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
import { TListCard, TRect, TRow, TText, TTextCommon } from '@ths/design';

export default {
  components: {
    TListCard,
    TRect,
    TRow,
    TText,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-09e8.3b71afa9a":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-b17c.d932d9cd7":{"attributeName":"tListCardx0x1","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1555.727b60852":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-afae.576bf09ee":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-26fc.42aa488dd":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-440f.0fb335f25":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-f6eb.33ae7f6bf":{"attributeName":"tTextx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-a9c1.ffb0f3adb":{"attributeName":"tRowx0x7","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-common-ebb5.079f4d7f8":{"attributeName":"tTextCommonx0x7x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5ddd.c09e8a3a4":{"attributeName":"tRectx0x7x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   baseInfo: [{"title":"车辆标识","num":"-"},{"title":"车辆状态","num":"-"},{"title":"负责人","num":"-"},{"title":"联系方式","num":"-"},{"title":"当前地址","num":"-"}],
   title: "-",
   listData: [],
   endTime: "",
   startTime: "",
   dateValue: "",
   pageInfo: {"pageNum":1,"pageSize":8,"total":0,"pages":0},
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
            default: {"width":"558px","height":"324px","position":"unset","left":"677px","top":"290px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"558px","height":"324px","position":"unset","left":"677px","top":"290px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tListCardx0x1: {
defaultStyle: {
            default: {"width":"536px","height":"182px","position":"unset","left":"688px","top":"350px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"车辆标识","num":"-"},{"title":"车辆状态","num":"-"},{"title":"负责人","num":"-"},{"title":"联系方式","num":"-"},{"title":"当前地址","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"536px","height":"182px","position":"unset","left":"688px","top":"350px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible","height":""}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"30%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":"","display":"flex","flexDirection":"column-reverse","justifyContent":"center","alignItems":"flex-end"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":""}},"num":{"default":{"fontSize":"var(--text-size-14)","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}},"outerWrapper":{"default":{"width":"100%"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"560px","height":"46px","position":"unset","left":"676px","top":"567px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"560px","height":"46px","position":"unset","left":"676px","top":"567px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"557px","height":"46px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"677px","top":"290px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"557px","height":"46px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"677px","top":"290px","animationName":""}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1195px","top":"301px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1195px","top":"301px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"101px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"1103px","top":"576px","cursor":"pointer","animationName":"","backgroundImage":"url(assets/images/2024-12-16/8b5a25d0ae5647d4ac7e737d98fb0b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"12px 50%","-webkit-mask-position":"","paddingLeft":"30px","marginLeft":"20px"},
            
            },
 default: { 
 
label:"查看轨迹",
editable:false,
cStyle:{"wrapper":{"default":{"width":"101px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"1103px","top":"576px","cursor":"pointer","animationName":"","backgroundImage":"url(assets/images/2024-12-16/8b5a25d0ae5647d4ac7e737d98fb0b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"12px 50%","-webkit-mask-position":"","paddingLeft":"30px","marginLeft":"20px"},"hover":{"backgroundColor":"var(--business-show-bg50)"}},"title":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"101px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"993px","top":"576px","cursor":"pointer","animationName":"","backgroundImage":"url(assets/images/2025-12-22/2fbbb7f0b48641748ab8e3ad119b1f6c.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"12px 50%","-webkit-mask-position":"","paddingLeft":"30px","marginLeft":"20px"},
            
            },
 default: { 
 
label:"远程连线",
editable:false,
cStyle:{"wrapper":{"default":{"width":"101px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"993px","top":"576px","cursor":"pointer","animationName":"","backgroundImage":"url(assets/images/2025-12-22/2fbbb7f0b48641748ab8e3ad119b1f6c.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"12px 50%","-webkit-mask-position":"","paddingLeft":"30px","marginLeft":"20px"},"hover":{"backgroundColor":"var(--business-show-bg50)"}},"title":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}}}, 
 },
},
tRowx0x7: {
defaultStyle: {
            default: {"width":"445px","height":"46px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"706px","top":"290px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"445px","height":"46px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"706px","top":"290px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextCommonx0x7x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"18px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"375px","top":"207px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"18px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"375px","top":"207px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tRectx0x7x1: {
defaultStyle: {
            default: {"width":"80px","height":"24px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"205px","left":"505px","position":"unset","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","paddingLeft":"unset","marginLeft":"15px"},
            
            },
 default: { 
 
tip:false,
label:"巡查物资车",
active:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"24px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"205px","left":"505px","position":"unset","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","paddingLeft":"unset","marginLeft":"15px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const initParams = () => {

global.airGlobalVariables.waterSprinklerTruck.VMN = global.businessDialog.dialogParmas?.DEVICE_ID || global.businessDialog.dialogParmas?.DEVIDE_ID || ''
apiRegistry.getBaseInfo.request();
};
const onclick1734493226123 = () => {
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
const onclick1766537968495 = () => {

window.open('wxwork://', '_self');
};
const onclick1766545174068 = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "showTrajectorySupplySprinkler", // 消息名称
data: {}, // 发送的数据
});
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
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"device_id":"global.airGlobalVariables.waterSprinklerTruck.VMN","VMN_TYPE":"wzc","interfaceId":"cec8a9f0eb62383b2ed0703f87a7b455"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"device_id":global.airGlobalVariables.waterSprinklerTruck.VMN,"VMN_TYPE":"wzc","interfaceId":"cec8a9f0eb62383b2ed0703f87a7b455"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"device_id":global.airGlobalVariables.waterSprinklerTruck.VMN,"VMN_TYPE":"wzc","interfaceId":"cec8a9f0eb62383b2ed0703f87a7b455"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     
const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  let baseInfo = data[0]
  state.title = baseInfo?.VEHICLE_NAME || '-'
  state.baseInfo = [
    {
      "title": "车辆标识",
      "num": baseInfo.VMN || '='
    },
    {
      "title": "车辆状态",
      "num": baseInfo.status_str || "-"
    },
    {
      "title": "负责人",
      "num": "-"
    },
    {
      "title": "联系方式",
      "num": "-"
    },
    {
      "title": "当前地址",
      "num": baseInfo.address || '-'
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
// 监听变量，调取接口
watch(() => ["wzc"], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getBaseInfo', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-patrolSupplyCarPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-patrolSupplyCarPop', global.appScaleMode, 'normal');
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

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tRowx0x7ComputedData = computed(() => _.merge({}, componentState.tRowx0x7.default, componentState.tRowx0x7?.[state.screenSize]));

 const tTextCommonx0x7x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x7x0.default, componentState.tTextCommonx0x7x0?.[state.screenSize]));

 const tRectx0x7x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x7x1.default, componentState.tRectx0x7x1?.[state.screenSize]));

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
tListCardx0x1ComputedData,
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tRowx0x7ComputedData,
tTextCommonx0x7x0ComputedData,
tRectx0x7x1ComputedData,
onclick1734493226123,
onclick1766545174068,
onclick1766537968495,
};
},
}
</script>

<style scoped>
.t-l-c-patrolSupplyCarPop {
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
width: 1920px;
height: 1080px;
background-color: rgba(0,0,0,0);
}
.t-l-c-patrolSupplyCarPop .patrolSupplyCarPop-t-rect-0-0 {
position: absolute !important;
top: 290px;
left: 677px;
width: 558px;
height: 324px;
pointer-events: auto;
}

.t-l-c-patrolSupplyCarPop .patrolSupplyCarPop-t-list-card-0-1 {
position: absolute !important;
top: 350px;
left: 688px;
width: 536px;
height: 182px;
pointer-events: auto;
}

.t-l-c-patrolSupplyCarPop .patrolSupplyCarPop-t-rect-0-2 {
position: absolute !important;
top: 567px;
left: 676px;
width: 560px;
height: 46px;
pointer-events: auto;
}

.t-l-c-patrolSupplyCarPop .patrolSupplyCarPop-t-rect-0-3 {
position: absolute !important;
top: 290px;
left: 677px;
width: 557px;
height: 46px;
pointer-events: auto;
}

.t-l-c-patrolSupplyCarPop .patrolSupplyCarPop-t-rect-0-4 {
position: absolute !important;
top: 301px;
left: 1195px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-patrolSupplyCarPop .patrolSupplyCarPop-t-text-0-5 {
position: absolute !important;
top: 576px;
left: 1103px;
width: 101px;
height: 28px;
pointer-events: auto;
}

.t-l-c-patrolSupplyCarPop .patrolSupplyCarPop-t-text-0-6 {
position: absolute !important;
top: 576px;
left: 993px;
width: 101px;
height: 28px;
pointer-events: auto;
}

.t-l-c-patrolSupplyCarPop .patrolSupplyCarPop-t-row-0-7 {
position: absolute !important;
top: 290px;
left: 706px;
width: 445px;
height: 46px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
}

.t-l-c-patrolSupplyCarPop .patrolSupplyCarPop-t-text-common-0-7-0 {
position: unset;
top: 207px;
left: 375px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-patrolSupplyCarPop .patrolSupplyCarPop-t-rect-0-7-1 {
position: unset;
top: 205px;
left: 505px;
width: 80px;
height: 24px;
pointer-events: auto;
}
</style>
