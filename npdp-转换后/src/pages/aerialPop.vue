<template>
  <div id="t-l-c-aerialPop" class="t-l-c-aerialPop" ><t-rect id="t-rect-09e8.3b71afa9a" class="aerialPop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-afae.576bf09ee" class="aerialPop-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-rect id="t-rect-26fc.42aa488dd" class="aerialPop-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle" @click="onclick1734493226123"></t-rect><t-text id="t-text-a3dd.58079667c" class="aerialPop-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle"></t-text><t-list-card id="t-list-card-4888.44090dbda" class="aerialPop-t-list-card-0-4"  :data="replaceCssVariables(state.carData, global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x4ComputedData.spacingX" :col="tListCardx0x4ComputedData.col" :direction="tListCardx0x4ComputedData.direction" :exchange-order="tListCardx0x4ComputedData.exchangeOrder" :unit-break="tListCardx0x4ComputedData.unitBreak" :key-field="tListCardx0x4ComputedData.keyField" :active-key-field="tListCardx0x4ComputedData.activeKeyField" :active="tListCardx0x4ComputedData.active" :c-style="tListCardx0x4ComputedData.cStyle"></t-list-card><t-image-base id="t-image-base-8b53.454859642" class="aerialPop-t-image-base-0-5"  :src="replaceCssVariables(state.img1, global?.theme || global?.activeTheme || '默认主题')" :fit="tImageBasex0x5ComputedData.fit" :c-style="tImageBasex0x5ComputedData.cStyle"></t-image-base><t-image-base id="t-image-base-3e67.0090cfd7b" class="aerialPop-t-image-base-0-6"  :src="replaceCssVariables(state.img2, global?.theme || global?.activeTheme || '默认主题')" :fit="tImageBasex0x6ComputedData.fit" :c-style="tImageBasex0x6ComputedData.cStyle"></t-image-base><t-rect id="t-rect-cbc8.418569de2" class="aerialPop-t-rect-0-7"  :tip="tRectx0x7ComputedData.tip" :label="tRectx0x7ComputedData.label" :active="tRectx0x7ComputedData.active" :c-style="tRectx0x7ComputedData.cStyle"></t-rect></div>
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
import { TImageBase, TListCard, TRect, TText } from '@ths/design';

export default {
  components: {
    TImageBase,
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
   carData: [{"title":"所属街道","num":"--"},{"title":"地址","num":"--"},{"title":"类别","num":"--"},{"title":"发现时间","num":"--"},{"title":"拍照时间","num":"--"},{"title":"描述","num":"--"}],
   img1: "--",
   img2: "--",
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
            default: {"width":"600px","height":"609px","position":"unset","left":"669px","top":"229px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"600px","height":"609px","position":"unset","left":"669px","top":"229px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"600px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"669px","top":"230px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"600px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"669px","top":"230px","animationName":""}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1230px","top":"241px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1230px","top":"241px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"125px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"678px","top":"243px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"38px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px"},
            
            },
 default: { 
 
label:"点位详情",
editable:false,
cStyle:{"wrapper":{"default":{"width":"125px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"678px","top":"243px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"38px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px"}}}, 
 },
},
tListCardx0x4: {
defaultStyle: {
            default: {"width":"580px","height":"210px","position":"unset","left":"680px","top":"284px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"所属街道","num":"--"},{"title":"地址","num":"--"},{"title":"类别","num":"--"},{"title":"发现时间","num":"--"},{"title":"拍照时间","num":"--"},{"title":"描述","num":"--"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"580px","height":"210px","position":"unset","left":"680px","top":"284px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"100px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"478px","textAlign":"left","display":"block","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","max-width":"478px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tImageBasex0x5: {
defaultStyle: {
            default: {"width":"290px","height":"274px","position":"unset","left":"681px","top":"548px"},
            
            },
 default: { 
 
src:"--",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"290px","height":"274px","position":"unset","left":"681px","top":"548px"}}}, 
 },
},
tImageBasex0x6: {
defaultStyle: {
            default: {"width":"290px","height":"274px","position":"unset","left":"971px","top":"548px"},
            
            },
 default: { 
 
src:"--",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"290px","height":"274px","position":"unset","left":"971px","top":"548px"}}}, 
 },
},
tRectx0x7: {
defaultStyle: {
            default: {"width":"100px","height":"20px","fontSize":"14px","color":"var(--business-text-avianize)","textAlign":"right","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"653px","top":"524px"},
            
            },
 default: { 
 
tip:false,
label:"图片：",
active:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"20px","fontSize":"14px","color":"var(--business-text-avianize)","textAlign":"right","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"653px","top":"524px"}}}, 
 },
},
});
const init = () => {
console.log(global.businessDialog.dialogParmas, '航拍弹窗信息');
state.carData[0].num = global.businessDialog.dialogParmas.TOWN || '--';
state.carData[1].num = global.businessDialog.dialogParmas.ADDRESS || '--';
state.carData[2].num = global.businessDialog.dialogParmas.CASETYPE || '--';
state.carData[3].num = global.businessDialog.dialogParmas.DISCOVERYTIME || '--';
state.carData[4].num = global.businessDialog.dialogParmas.FILETIME || '--';
state.carData[5].num = global.businessDialog.dialogParmas.DESCRIPTION || '--';
const data =global.businessDialog.dialogParmas.CASEFILE.split(',');
state.img1 = data[0];
state.img2 = data[1];
};
const setDom = () => {
setTimeout(() => {
  const dom = document.querySelector('.t-image-base__static .image');
  dom.style.transition = 'none';
},0)
};
const handleClickQuery = () => {
const pointInfo = global.businessDialog.dialogParmas;
// 周边查询
const pointLocation = [];
pointLocation.push(parseFloat(pointInfo.LON));
pointLocation.push(parseFloat(pointInfo.LAT));

rootData.rootSocket.emit('message', {
  type: 'showAirTraceDetail',
  room: global.socketRoom,
  data: [ // 消息内容
    { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
    { shareCode: "POINT_LOACTION_NAME", runtimeValue: pointInfo.ADDRESS }
  ]
});
global.businessDialog.dialogName = '';
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
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closePopup", // 消息名称
data: {}, // 发送的数据
});
};
 function handleWindowResize() {
                            setPageScale('t-l-c-aerialPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-aerialPop', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
init();
});
// 执行自定义方法
setDom();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tListCardx0x4ComputedData = computed(() => _.merge({}, componentState.tListCardx0x4.default, componentState.tListCardx0x4?.[state.screenSize]));

 const tImageBasex0x5ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x5.default, componentState.tImageBasex0x5?.[state.screenSize]));

 const tImageBasex0x6ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x6.default, componentState.tImageBasex0x6?.[state.screenSize]));

 const tRectx0x7ComputedData = computed(() => _.merge({}, componentState.tRectx0x7.default, componentState.tRectx0x7?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tTextx0x3ComputedData,
tListCardx0x4ComputedData,
tImageBasex0x5ComputedData,
tImageBasex0x6ComputedData,
tRectx0x7ComputedData,
onclick1734493226123,
};
},
}
</script>

<style scoped>
.t-l-c-aerialPop {
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
position: Static;
z-index: 1;
filter: ;
width: 1920px;
height: 1080px;
background-color: rgba(0,0,0,0);
}
.t-l-c-aerialPop .aerialPop-t-rect-0-0 {
position: absolute !important;
top: 229px;
left: 669px;
width: 600px;
height: 609px;
pointer-events: auto;
}

.t-l-c-aerialPop .aerialPop-t-rect-0-1 {
position: absolute !important;
top: 230px;
left: 669px;
width: 600px;
height: 47px;
pointer-events: auto;
}

.t-l-c-aerialPop .aerialPop-t-rect-0-2 {
position: absolute !important;
top: 241px;
left: 1230px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-aerialPop .aerialPop-t-text-0-3 {
position: absolute !important;
top: 243px;
left: 678px;
width: 125px;
height: 19px;
pointer-events: auto;
}

.t-l-c-aerialPop .aerialPop-t-list-card-0-4 {
position: absolute !important;
top: 284px;
left: 680px;
width: 580px;
height: 210px;
pointer-events: auto;
}

.t-l-c-aerialPop .aerialPop-t-image-base-0-5 {
position: absolute !important;
top: 548px;
left: 681px;
width: 290px;
height: 274px;
pointer-events: auto;
}

.t-l-c-aerialPop .aerialPop-t-image-base-0-6 {
position: absolute !important;
top: 548px;
left: 971px;
width: 290px;
height: 274px;
pointer-events: auto;
}

.t-l-c-aerialPop .aerialPop-t-rect-0-7 {
position: absolute !important;
top: 524px;
left: 653px;
width: 100px;
height: 20px;
pointer-events: auto;
}
</style>
