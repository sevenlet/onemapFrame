<template>
  <div id="t-l-c-noviceGuide" class="t-l-c-noviceGuide" ><t-image-base v-if="state.step === 4" id="t-image-base-85ab.fe9953464" class="noviceGuide-t-image-base-0-0"  :src="tImageBasex0x0ComputedData.src" :fit="tImageBasex0x0ComputedData.fit" :c-style="tImageBasex0x0ComputedData.cStyle"></t-image-base><t-rect v-if="state.step === 4" id="t-rect-feba.d9e38fd6d" class="noviceGuide-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle" @click="onclick1722403069424"></t-rect><t-checkbox v-if="state.step === 4" id="t-checkbox-a356.405d2afa4" class="noviceGuide-t-checkbox-0-2"  :data="tCheckboxx0x2ComputedData.data" :active="state.multiSelect" :data-alias="tCheckboxx0x2ComputedData.dataAlias" :border="tCheckboxx0x2ComputedData.border" :use-button="tCheckboxx0x2ComputedData.useButton" :c-style="tCheckboxx0x2ComputedData.cStyle" @change="onchange1722419951177"></t-checkbox><t-image-base v-if="state.step === 3" id="t-image-base-6ab0.7bac10c8e" class="noviceGuide-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle"></t-image-base><t-rect v-if="state.step === 3" id="t-rect-920b.7bd7e2986" class="noviceGuide-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1722403028176"></t-rect><t-image-base v-if="state.step === 2" id="t-image-base-83ff.103b5ae9d" class="noviceGuide-t-image-base-0-5"  :src="tImageBasex0x5ComputedData.src" :fit="tImageBasex0x5ComputedData.fit" :c-style="tImageBasex0x5ComputedData.cStyle"></t-image-base><t-rect v-if="state.step === 2" id="t-rect-35fb.9b00d1dca" class="noviceGuide-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle" @click="onclick1722403012592"></t-rect><t-image-base v-if="state.step === 1" id="t-image-base-e647.4c28ba299" class="noviceGuide-t-image-base-0-7"  :src="tImageBasex0x7ComputedData.src" :fit="tImageBasex0x7ComputedData.fit" :c-style="tImageBasex0x7ComputedData.cStyle"></t-image-base><t-rect v-if="state.step === 1" id="t-rect-c361.ed895453c" class="noviceGuide-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle" @click="onclick1722403054112"></t-rect></div>
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
import { TCheckbox, TImageBase, TRect } from '@ths/design';

export default {
  components: {
    TCheckbox,
    TImageBase,
    TRect,
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
   multiSelect: [],
   step: 1,
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
tImageBasex0x0: {
defaultStyle: {
            default: {"width":"565px","height":"617px","top":"452px","left":"1326px","position":"unset","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4/assets/images/2024-07-31/11c069d1141b48ca89dd97ec2e8a0bda.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"565px","height":"617px","top":"452px","left":"1326px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1586px","top":"474px","lineHeight":"28px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"完成",
active:false,
cStyle:{"wrapper":{"default":{"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1586px","top":"474px","lineHeight":"28px","animationName":""},"hover":{"color":"#99AAFF","cursor":"pointer"}}}, 
 },
},
tCheckboxx0x2: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justifyContent":"center","width":"73px","height":"20px","position":"unset","left":"1474px","top":"476px"},
            
            },
 default: { 
 
data:[{"label":"不再提示","value":"1","disabled":false}],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justifyContent":"center","width":"73px","height":"20px","position":"unset","left":"1474px","top":"476px"}},"label":{"default":{"color":"rgba(0, 0, 0, 0.9)","fontSize":"12px","lineHeight":"18px","paddingLeft":"4px"},"hover":{"color":""},"active":{"color":""}},"rectangle":{"hover":{"color":"","borderLeft":"1px solid #4854ED","borderTop":"1px solid #4854ED","borderRight":"1px solid #4854ED","borderBottom":"1px solid #4854ED"},"active":{"color":"","borderLeft":"1px solid #4854ED","borderTop":"1px solid #4854ED","borderRight":"1px solid #4854ED","borderBottom":"1px solid #4854ED","backgroundColor":"#4854ED"}}}, 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"706px","height":"268px","top":"801px","left":"1185px","position":"unset","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4/assets/images/2024-07-31/3bb791319a364c288a1d376b4dd55dde.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"706px","height":"268px","top":"801px","left":"1185px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1446px","top":"824px","lineHeight":"28px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"下一步",
active:false,
cStyle:{"wrapper":{"default":{"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1446px","top":"824px","lineHeight":"28px","animationName":""},"hover":{"color":"#99AAFF","cursor":"pointer"}}}, 
 },
},
tImageBasex0x5: {
defaultStyle: {
            default: {"width":"706px","height":"370px","top":"699px","left":"1185px","position":"unset","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4/assets/images/2024-07-31/f00b5550ce71479191dec263f72fb3a7.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"706px","height":"370px","top":"699px","left":"1185px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1444px","top":"721px","lineHeight":"28px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"下一步",
active:false,
cStyle:{"wrapper":{"default":{"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1444px","top":"721px","lineHeight":"28px","animationName":""},"hover":{"color":"#99AAFF","cursor":"pointer"}}}, 
 },
},
tImageBasex0x7: {
defaultStyle: {
            default: {"width":"402px","height":"318px","top":"736px","left":"1478px","position":"unset"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4/assets/images/2024-07-31/058a0013f26a4eb0818dba5d75f132a4.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"402px","height":"318px","top":"736px","left":"1478px","position":"unset"}}}, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1737px","top":"758px","lineHeight":"28px"},
            
            },
 default: { 
 
tip:false,
label:"下一步",
active:false,
cStyle:{"wrapper":{"default":{"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1737px","top":"758px","lineHeight":"28px"},"hover":{"color":"#99AAFF","cursor":"pointer"}}}, 
 },
},
});
const getData = () => {
if (state.multiSelect.length) {
  // 获取用户名，调新手指引的保存接口
  const loginName = localStorage.getItem('lastLoginName');
  saveNoviceGuideData(loginName);
}
};
const onclick1722403012592 = () => {
// 设置变量值
state.step = 3;
};
const onclick1722403028176 = () => {
// 设置变量值
state.step = 4;
};
const onclick1722403054112 = () => {
// 设置变量值
state.step = 2;
};
const onclick1722403069424 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'showNoviceGuide',
                    value:false,
                    data: {
                      showNoviceGuide: false
                    },
                  });
// 执行自定义方法
getData();
};
const onchange1722419951177 = (data) => {
// 设置变量值
state.multiSelect = data;
};
// 接口函数
const saveNoviceGuideData = (name) => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"IS_XSTX":"1","LOGIN_NAME":name,"interfaceId":"74c88192ee1478148857c217e570df01"},}).then((res) => {
     // 成功的操作
     
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-noviceGuide', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-noviceGuide', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tImageBasex0x0ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x0.default, componentState.tImageBasex0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tCheckboxx0x2ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x2.default, componentState.tCheckboxx0x2?.[state.screenSize]));

 const tImageBasex0x3ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x3.default, componentState.tImageBasex0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tImageBasex0x5ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x5.default, componentState.tImageBasex0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tImageBasex0x7ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x7.default, componentState.tImageBasex0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

return {
global,
state,
componentState,
tImageBasex0x0ComputedData,
tRectx0x1ComputedData,
tCheckboxx0x2ComputedData,
tImageBasex0x3ComputedData,
tRectx0x4ComputedData,
tImageBasex0x5ComputedData,
tRectx0x6ComputedData,
tImageBasex0x7ComputedData,
tRectx0x8ComputedData,
onclick1722403069424,
onchange1722419951177,
onclick1722403028176,
onclick1722403012592,
onclick1722403054112,
};
},
}
</script>

<style scoped>
.t-l-c-noviceGuide {
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
background-color: rgba(0, 0, 0, 0.3);
width: 1920px;
height: 1080px;
}
.t-l-c-noviceGuide .noviceGuide-t-image-base-0-0 {
position: absolute !important;
top: 452px;
left: 1326px;
width: 565px;
height: 617px;
pointer-events: auto;
}

.t-l-c-noviceGuide .noviceGuide-t-rect-0-1 {
position: absolute !important;
top: 474px;
left: 1586px;
width: 66px;
height: 26px;
pointer-events: auto;
}

.t-l-c-noviceGuide .noviceGuide-t-checkbox-0-2 {
position: absolute !important;
top: 476px;
left: 1474px;
width: 73px;
height: 20px;
pointer-events: auto;
}

.t-l-c-noviceGuide .noviceGuide-t-image-base-0-3 {
position: absolute !important;
top: 801px;
left: 1185px;
width: 706px;
height: 268px;
pointer-events: auto;
}

.t-l-c-noviceGuide .noviceGuide-t-rect-0-4 {
position: absolute !important;
top: 824px;
left: 1446px;
width: 66px;
height: 26px;
pointer-events: auto;
}

.t-l-c-noviceGuide .noviceGuide-t-image-base-0-5 {
position: absolute !important;
top: 699px;
left: 1185px;
width: 706px;
height: 370px;
pointer-events: auto;
}

.t-l-c-noviceGuide .noviceGuide-t-rect-0-6 {
position: absolute !important;
top: 721px;
left: 1444px;
width: 66px;
height: 26px;
pointer-events: auto;
}

.t-l-c-noviceGuide .noviceGuide-t-image-base-0-7 {
position: absolute !important;
top: 736px;
left: 1478px;
width: 402px;
height: 318px;
pointer-events: auto;
}

.t-l-c-noviceGuide .noviceGuide-t-rect-0-8 {
position: absolute !important;
top: 758px;
left: 1737px;
width: 66px;
height: 26px;
pointer-events: auto;
}
</style>
