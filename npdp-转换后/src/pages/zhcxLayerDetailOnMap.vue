<template>
  <div id="t-l-c-zhcxLayerDetailOnMap" class="t-l-c-zhcxLayerDetailOnMap" ><t-rect id="t-rect-7f6d.f68c6ee65" class="zhcxLayerDetailOnMap-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-e5ee.fb1b5f0aa" class="zhcxLayerDetailOnMap-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-image-base id="t-image-base-391f.0550b0bf5" class="zhcxLayerDetailOnMap-t-image-base-0-2"  :src="tImageBasex0x2ComputedData.src" :fit="tImageBasex0x2ComputedData.fit" :c-style="tImageBasex0x2ComputedData.cStyle"></t-image-base><t-rect id="t-rect-0090.dfbcd0634" class="zhcxLayerDetailOnMap-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1721979040344"></t-rect><t-text id="t-text-1228.a8b4ee26b" class="zhcxLayerDetailOnMap-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle"></t-text><t-list-card id="t-list-card-f205.cc70b629" class="zhcxLayerDetailOnMap-t-list-card-0-5"  :data="state.cardData" :spacing-x="tListCardx0x5ComputedData.spacingX" :col="tListCardx0x5ComputedData.col" :direction="tListCardx0x5ComputedData.direction" :exchange-order="tListCardx0x5ComputedData.exchangeOrder" :unit-break="tListCardx0x5ComputedData.unitBreak" :key-field="tListCardx0x5ComputedData.keyField" :active-key-field="tListCardx0x5ComputedData.activeKeyField" :active="tListCardx0x5ComputedData.active" :c-style="tListCardx0x5ComputedData.cStyle"></t-list-card><t-rect id="t-rect-155e.fb76d0667" class="zhcxLayerDetailOnMap-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle" @click="onclick1736930076791"></t-rect></div>
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
   cardData: [],
   params: {"ID":"","CODE":"","LAYER_NAME":""},
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
            default: {"width":"450px","height":"198px","position":"unset","left":"722px","top":"396px","border-radius":"16px","background":"rgba(7, 29, 11, 0.95)","border-width":0,"color":"var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundColor":"var(--intergrated-query-dialog-background-color)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"198px","position":"unset","left":"722px","top":"396px","border-radius":"16px","background":"rgba(7, 29, 11, 0.95)","border-width":0,"color":"var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundColor":"var(--intergrated-query-dialog-background-color)"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"45px","position":"unset","left":"722px","top":"396px","border-radius":"16px 16px 0px 0px","border-width":0,"background":"var(--intergrated-query-dialog-title-bg)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"45px","position":"unset","left":"722px","top":"396px","border-radius":"16px 16px 0px 0px","border-width":0,"background":"var(--intergrated-query-dialog-title-bg)"}}}, 
 },
},
tImageBasex0x2: {
defaultStyle: {
            default: {"width":"24px","height":"24px","position":"unset","left":"733px","top":"406px"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/aa0899554a6c437db802092b14b0a80b.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","position":"unset","left":"733px","top":"406px"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"10px 10px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"1134px","top":"407px","border-radius":"2px","border":"1px solid rgba(121, 255, 175, 0.6)","cursor":"pointer","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"10px 10px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"1134px","top":"407px","border-radius":"2px","border":"1px solid rgba(121, 255, 175, 0.6)","cursor":"pointer","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)"},"hover":{"opacity":"80% !important"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"765px","top":"407px","font-size":"18px","text-shadow":"0px 0px 6px rgba(17, 214, 104, 0.62)","font-weight":"bold"},
            
            },
 default: { 
 
label:"图层信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"765px","top":"407px","font-size":"18px","text-shadow":"0px 0px 6px rgba(17, 214, 104, 0.62)","font-weight":"bold"}}}, 
 },
},
tListCardx0x5: {
defaultStyle: {
            default: {"width":"410px","height":"106px","position":"unset","left":"742px","top":"460px","overflow":"visible","animationName":"","display":"flex","flexDirection":"column","alignItems":"flex-start","justifyContent":"flex-start","flexWrap":"nowrap"},
            
            },
 default: { 
 
data:[],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"106px","position":"unset","left":"742px","top":"460px","overflow":"visible","animationName":"","display":"flex","flexDirection":"column","alignItems":"flex-start","justifyContent":"flex-start","flexWrap":"nowrap"}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"102px","height":"30px","top":"404px","left":"1018px","position":"unset","backgroundColor":"rgba(255, 255, 255, 0.1)","color":"var(--business-theme)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px","fontSize":"14px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"周边查询",
active:false,
cStyle:{"wrapper":{"default":{"width":"102px","height":"30px","top":"404px","left":"1018px","position":"unset","backgroundColor":"rgba(255, 255, 255, 0.1)","color":"var(--business-theme)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px","fontSize":"14px","cursor":"pointer"}}}, 
 },
},
});
const getDialogParams = () => {
console.log(941, 'zhcxLayerDetailOnMap 图层信息', global.businessDialog);

state.params.LAYER_NAME = global.businessDialog.dialogParmas.layerName;
state.params.CODE = global.businessDialog.dialogParmas.fid;
state.params.ID = global.businessDialog.dialogParmas.fid;

// {
//     "layerName": "5kmarea",
//     "type": "polygon",
//     "fid": 0
// }

// 获取图层基本信息
getLayerInfo();
};
const aroundQuery = () => {
/* 发送综合查询初始化业务参数的消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "borderQuery", // 消息名称
  data: {
    id: state.params.ID,
    layerName: state.params.LAYER_NAME,
    name: state.cardData[0].num
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
};
const onclick1721979040344 = () => {
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
const onclick1736930076791 = () => {
// 执行自定义方法
aroundQuery();
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
const getLayerInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.integratedQuery.layerServiceContext,"method":"get","baseURL":global.integratedQuery.layerServiceIP,"params":{"interfaceId":"9f01bc2b638215981da139082990e8f2","token":"dcp","LAYER_NAME":state.params.LAYER_NAME,"CODE":state.params.CODE,"ID":state.params.ID},}).then((res) => {
     // 成功的操作
     console.log(941, '点击地图面后，展示面的基本信息-接口请求', res);

state.cardData = [
  {
    "title": "图层名称",
    "num": "--"
  },
  {
    "title": "行政区",
    "num": "--"
  },
  {
    "title": "面积",
    "num": "--"
  }
];

if (res.status === 200 && res.data.head.statusCode === '200') {
  const item = res.data.data[0];
  state.cardData[0].num = item.NAME || '--';
  state.cardData[1].num = item.REGION_NAME || '--';
  state.cardData[2].num = item.LAYER_AREA ? `${item.LAYER_AREA}㎡` : '--';
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.cardData = [
  {
    "title": "图层名称",
    "num": "--"
  },
  {
    "title": "行政区",
    "num": "--"
  },
  {
    "title": "面积",
    "num": "--"
  }
];
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-zhcxLayerDetailOnMap', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getDialogParams();
onMounted(() => {
setPageScale('t-l-c-zhcxLayerDetailOnMap', global.appScaleMode, 'normal');
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

 const tImageBasex0x2ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x2.default, componentState.tImageBasex0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tListCardx0x5ComputedData = computed(() => _.merge({}, componentState.tListCardx0x5.default, componentState.tListCardx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tImageBasex0x2ComputedData,
tRectx0x3ComputedData,
tTextx0x4ComputedData,
tListCardx0x5ComputedData,
tRectx0x6ComputedData,
onclick1721979040344,
onclick1736930076791,
};
},
}
</script>

<style scoped>
.t-l-c-zhcxLayerDetailOnMap {
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
.t-l-c-zhcxLayerDetailOnMap .zhcxLayerDetailOnMap-t-rect-0-0 {
position: absolute !important;
top: 396px;
left: 722px;
width: 450px;
height: 198px;
pointer-events: auto;
}

.t-l-c-zhcxLayerDetailOnMap .zhcxLayerDetailOnMap-t-rect-0-1 {
position: absolute !important;
top: 396px;
left: 722px;
width: 450px;
height: 45px;
pointer-events: auto;
}

.t-l-c-zhcxLayerDetailOnMap .zhcxLayerDetailOnMap-t-image-base-0-2 {
position: absolute !important;
top: 406px;
left: 733px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-zhcxLayerDetailOnMap .zhcxLayerDetailOnMap-t-rect-0-3 {
position: absolute !important;
top: 407px;
left: 1134px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-zhcxLayerDetailOnMap .zhcxLayerDetailOnMap-t-text-0-4 {
position: absolute !important;
top: 407px;
left: 765px;
width: 96px;
height: 19px;
pointer-events: auto;
}

.t-l-c-zhcxLayerDetailOnMap .zhcxLayerDetailOnMap-t-list-card-0-5 {
position: absolute !important;
top: 460px;
left: 742px;
width: 410px;
height: 106px;
pointer-events: auto;
}

.t-l-c-zhcxLayerDetailOnMap .zhcxLayerDetailOnMap-t-rect-0-6 {
position: absolute !important;
top: 404px;
left: 1018px;
width: 102px;
height: 30px;
pointer-events: auto;
}
</style>
