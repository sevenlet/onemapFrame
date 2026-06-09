<template>
  <div id="t-l-c-fireworksvideoPreviewDialog" class="t-l-c-fireworksvideoPreviewDialog" ><t-rect id="t-rect-6b9e.cc753c48" class="fireworksvideoPreviewDialog-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-7a5e.0cf928c48" class="fireworksvideoPreviewDialog-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle"></t-rect><t-rect id="t-rect-d149.ff1b6aeeb" class="fireworksvideoPreviewDialog-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle" @click="onclick1765703372140_4_0"></t-rect><t-rect id="t-rect-5b6e.efeba3c04" class="fireworksvideoPreviewDialog-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle" @click="onclick1766634685936"></t-rect><t-row id="t-row-8c81.d120c493e" class="fireworksvideoPreviewDialog-t-row-0-7"  :c-style="tRowx0x7ComputedData.cStyle" :gutter="tRowx0x7ComputedData.gutter" :justify="tRowx0x7ComputedData.justify" :align="tRowx0x7ComputedData.align"><t-text id="t-text-5ff8.c1102f282" class="fireworksvideoPreviewDialog-t-text-0-7-0"  :label="replaceCssVariables(filterData(state.baseInfo.title, componentPropBindingMap?.['t-text-5ff8.c1102f282']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x7x0ComputedData.editable" :c-style="tTextx0x7x0ComputedData.cStyle"></t-text></t-row><t-component id="t-component-9b05.aa3f27202" class="fireworksvideoPreviewDialog-t-component-0-11"  :name="tComponentx0x11ComputedData.name" :loading="tComponentx0x11ComputedData.loading" :c-style="tComponentx0x11ComputedData.cStyle" :src="tComponentx0x11ComputedData.src" :component-name="tComponentx0x11ComputedData.componentName" :page-id="tComponentx0x11ComputedData.pageId" :page-code="tComponentx0x11ComputedData.pageCode"></t-component></div>
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
import { TComponent, TRect, TRow, TText } from '@ths/design';

export default {
  components: {
    TComponent,
    TRect,
    TRow,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-6b9e.cc753c48":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-543b.94ce036be":{"attributeName":"tRectx0x1"},"t-table-b69a.d43e71323":{"attributeName":"tTablex0x2"},"t-rect-91f8.cadf48866":{"attributeName":"tRectx0x3"},"t-rect-7a5e.0cf928c48":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-d149.ff1b6aeeb":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5b6e.efeba3c04":{"attributeName":"tRectx0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-8c81.d120c493e":{"attributeName":"tRowx0x7","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-5ff8.c1102f282":{"attributeName":"tTextx0x7x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-86bf.daab8d466":{"attributeName":"tTextx0x7x1"},"t-row-c36c.6036b987d":{"attributeName":"tRowx0x8"},"t-text-5476.89d9507f1":{"attributeName":"tTextx0x9"},"t-video-base-b639.2c6aeeac":{"attributeName":"tVideoBasex0x10"},"t-component-9b05.aa3f27202":{"attributeName":"tComponentx0x11","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   roomId: "",
   isShowVideo: false,
   isShowList: false,
   list: [],
   interfaceParams: {"pointCode":""},
   interfaceId: "",
   baseInfo: {"title":"--","pointType":"","pointCode":"","PKID":""},
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
            default: {"width":"340px","height":"230px","position":"unset","left":"0px","top":"-2px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"340px","height":"230px","position":"unset","left":"0px","top":"-2px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"339px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"-1px","top":"-2px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"339px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"-1px","top":"-2px","animationName":""}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"301px","top":"10px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"301px","top":"10px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"24px","height":"24px","position":"unset","left":"269px","top":"10px","backgroundImage":"url(assets/images/2024-12-20/dc5f42d3abf748d58856ad3d324f0bba.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","position":"unset","left":"269px","top":"10px","backgroundImage":"url(assets/images/2024-12-20/dc5f42d3abf748d58856ad3d324f0bba.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer","animationName":""},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tRowx0x7: {
defaultStyle: {
            default: {"width":"233px","height":"41px","position":"unset","left":"18px","top":"1px","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"233px","height":"41px","position":"unset","left":"18px","top":"1px","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x7x0: {
defaultStyle: {
            default: {"width":"auto","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"537px","top":"-149px","backgroundImage":"url(assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"537px","top":"-149px","backgroundImage":"url(assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px"}}}, 
 },
},
tComponentx0x11: {
defaultStyle: {
            default: {"width":"321px","height":"167px","margin":"0 auto","position":"unset","left":"10px","top":"53px"},
            
            },
 default: { 
 
name:"fireworksVideoPreviewContentComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"321px","height":"167px","margin":"0 auto","position":"unset","left":"10px","top":"53px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/fireworksVideoPreviewContent",
componentName:"fireworksVideoPreviewContentComponent",
pageId:"3a5689b348ad4017932273d096b585f2",
pageCode:"fireworksVideoPreviewContent", 
 },
},
});
const initPage = () => {
// console.log(global.businessDialog.dialogParmas, 'test');
state.baseInfo.title = getQueryString('name') || '-'; // 参数注意修改;
state.baseInfo.pointCode = getQueryString('id') || ''; // 参数注意修改;
state.roomId = getQueryString('roomId') || ''; // 参数注意修改;
console.log('11111111111',state.baseInfo.pointCode)
// state.baseInfo.pointType = global.businessDialog.dialogParmas?.stationType || '';
// state.baseInfo.PKID = global.businessDialog.dialogParmas?.pkid || '';
// state.interfaceId = global.businessDialog.dialogParmas.interfaceId;
// state.interfaceParams = global.businessDialog.dialogParmas.interfaceParams;
// // 是否展示视频监控按钮
// state.isShowVideo = global.businessDialog.dialogParmas.hasVideo;
// if (state.interfaceId) {
//   getDetailData();
// } else {
//   state.isShowList = true;
// }

};
const getQueryString = (key) => {
const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
const r = window.location.search.substring(1).match(reg);
if (r != null) return decodeURI(r[2]);
return null;
};
const createDialog = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: state.roomId,  // 房间号，一般使用全局变量socketRoom
    type: 'createDialog',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      params: {
        title: state.baseInfo.title,
        // headerComName: 'fireworksVideoPreviewContentComponent',
        contentComName: 'fireworksVideoPreviewContentComponent',
        maxWidth: '1600px',
        maxHeight: '997px',
        minWidth: '1000px',
        minHeight: '700px',
      }
    }
  }
);
};
const closeDialog = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: state.roomId,  // 房间号，一般使用全局变量socketRoom
    type: 'closeHireStatusPreviewVideoPopup',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      id: state.baseInfo.pointCode
    }
  }
);
console.log(1111111111112222)
let id = state.baseInfo.pointCode;
setTimeout(() => {
  removeIframeById(id);
}, 1000);
};
const removeIframeById = (id) => {
const iframes = window.parent.document.querySelectorAll('iframe.hire-video-iframe');

iframes.forEach(iframe => {
  const src = iframe.getAttribute('src');
  if (!src) return;
  
  try {
    // 解析URL参数
    const url = new URL(src, window.location.origin);
    const urlParams = new URLSearchParams(url.search);
    const idParam = urlParams.get('id');
    
    // 精确匹配id参数
    if (idParam === id) {
      iframe.remove();
      console.log(`已移除id为${id}的iframe`);
      return true;
    }
  } catch (e) {
    // 如果URL解析失败，回退到字符串包含检查
    if (src.includes(`id=${id}`) || src.includes(`&id=${id}`) || src.includes(`?id=${id}`)) {
      iframe.remove();
      console.log(`已移除包含id=${id}的iframe（通过字符串匹配）`);
    }
  }
});

return false;
};
const onclick1765703372140_4_0 = () => {
// 执行自定义方法
closeDialog();
};
const onclick1765626416419 = () => {
// 执行自定义方法
openVedioDialog();
};
const onclick1766634685936 = () => {
// 执行自定义方法
createDialog();
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-fireworksvideoPreviewDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-fireworksvideoPreviewDialog', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tRowx0x7ComputedData = computed(() => _.merge({}, componentState.tRowx0x7.default, componentState.tRowx0x7?.[state.screenSize]));

 const tTextx0x7x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x7x0.default, componentState.tTextx0x7x0?.[state.screenSize]));

 const tComponentx0x11ComputedData = computed(() => _.merge({}, componentState.tComponentx0x11.default, componentState.tComponentx0x11?.[state.screenSize]));

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
tRectx0x4ComputedData,
tRectx0x5ComputedData,
tRectx0x6ComputedData,
tRowx0x7ComputedData,
tTextx0x7x0ComputedData,
tComponentx0x11ComputedData,
onclick1765703372140_4_0,
onclick1766634685936,
};
},
}
</script>

<style scoped>
.t-l-c-fireworksvideoPreviewDialog {
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
position: Relative;
z-index: 1;
filter: ;
width: 340px;
height: 230px;
left: 0;
top: 0;
background-color: rgba(0, 0, 0, 0);
}
.t-l-c-fireworksvideoPreviewDialog .fireworksvideoPreviewDialog-t-rect-0-0 {
position: absolute !important;
top: -2px;
left: 0px;
width: 340px;
height: 230px;
pointer-events: auto;
}

.t-l-c-fireworksvideoPreviewDialog .fireworksvideoPreviewDialog-t-rect-0-4 {
position: absolute !important;
top: -2px;
left: -1px;
width: 339px;
height: 47px;
pointer-events: auto;
}

.t-l-c-fireworksvideoPreviewDialog .fireworksvideoPreviewDialog-t-rect-0-5 {
position: absolute !important;
top: 10px;
left: 301px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-fireworksvideoPreviewDialog .fireworksvideoPreviewDialog-t-rect-0-6 {
position: absolute !important;
top: 10px;
left: 269px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-fireworksvideoPreviewDialog .fireworksvideoPreviewDialog-t-row-0-7 {
position: absolute !important;
top: 1px;
left: 18px;
width: 233px;
height: 41px;
pointer-events: auto;
white-space: nowrap;
text-overflow: ellipsis;
animation-name: ;
}

.t-l-c-fireworksvideoPreviewDialog .fireworksvideoPreviewDialog-t-text-0-7-0 {
position: unset;
top: -149px;
left: 537px;
width: auto;
height: 19px;
pointer-events: auto;
}

.t-l-c-fireworksvideoPreviewDialog .fireworksvideoPreviewDialog-t-component-0-11 {
position: absolute !important;
top: 53px;
left: 10px;
width: 321px;
height: 167px;
pointer-events: auto;
}
</style>
