<template>
  <div id="t-l-c-tagFilterPanel" class="t-l-c-tagFilterPanel" ><t-rect id="t-rect-7ab0.6491c200f" class="tagFilterPanel-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-88c8.650e9d4cc" class="tagFilterPanel-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle" @click="onclick1761119917641"></t-rect><t-checkbox id="t-checkbox-3f06.8255e2db2" class="tagFilterPanel-t-checkbox-0-3"  :data="replaceCssVariables(state.ylOptions, global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(state.ylVal, global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x3ComputedData.dataAlias" :border="tCheckboxx0x3ComputedData.border" :use-button="tCheckboxx0x3ComputedData.useButton" :c-style="tCheckboxx0x3ComputedData.cStyle" @change="onchange1761119681010"></t-checkbox><t-checkbox id="t-checkbox-4c82.8bf6986e8" class="tagFilterPanel-t-checkbox-0-4"  :data="replaceCssVariables(state.glOptions, global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(state.glVal, global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x4ComputedData.dataAlias" :border="tCheckboxx0x4ComputedData.border" :use-button="tCheckboxx0x4ComputedData.useButton" :c-style="tCheckboxx0x4ComputedData.cStyle" @change="onchange1761119660538"></t-checkbox><t-text-common id="t-text-common-d6d1.a74aab2e7" class="tagFilterPanel-t-text-common-0-5"  :label="tTextCommonx0x5ComputedData.label" :editable="tTextCommonx0x5ComputedData.editable" :c-style="tTextCommonx0x5ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-06d5.9d390df93" class="tagFilterPanel-t-text-common-0-6"  :label="tTextCommonx0x6ComputedData.label" :editable="tTextCommonx0x6ComputedData.editable" :c-style="tTextCommonx0x6ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-ec31.56786a081" class="tagFilterPanel-t-text-common-0-7"  :label="tTextCommonx0x7ComputedData.label" :editable="tTextCommonx0x7ComputedData.editable" :c-style="tTextCommonx0x7ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-c759.2e5b7b20a" class="tagFilterPanel-t-text-common-0-8"  :label="tTextCommonx0x8ComputedData.label" :editable="tTextCommonx0x8ComputedData.editable" :c-style="tTextCommonx0x8ComputedData.cStyle"></t-text-common><t-checkbox id="t-checkbox-ee1e.b58aedb05" class="tagFilterPanel-t-checkbox-0-9"  :data="replaceCssVariables(state.vocsOptions, global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(state.vocsVal, global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x9ComputedData.dataAlias" :border="tCheckboxx0x9ComputedData.border" :use-button="tCheckboxx0x9ComputedData.useButton" :c-style="tCheckboxx0x9ComputedData.cStyle" @change="onchange1761119626962"></t-checkbox><t-checkbox id="t-checkbox-d078.c3f27e997" class="tagFilterPanel-t-checkbox-0-10"  :data="replaceCssVariables(state.gkmdOptions, global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(state.gkmdVal, global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x10ComputedData.dataAlias" :border="tCheckboxx0x10ComputedData.border" :use-button="tCheckboxx0x10ComputedData.useButton" :c-style="tCheckboxx0x10ComputedData.cStyle" @change="onchange1761119644339"></t-checkbox><t-button id="t-button-0406.9bac1b164" class="tagFilterPanel-t-button-0-11"  :label="tButtonx0x11ComputedData.label" :round="tButtonx0x11ComputedData.round" :plain="tButtonx0x11ComputedData.plain" :disabled="tButtonx0x11ComputedData.disabled" :type="tButtonx0x11ComputedData.type" :size="tButtonx0x11ComputedData.size" :native-type="tButtonx0x11ComputedData.native-type" :c-style="tButtonx0x11ComputedData.cStyle" @click="onclick1761119575850"></t-button><t-button id="t-button-2d0c.d256f3e17" class="tagFilterPanel-t-button-0-12"  :label="tButtonx0x12ComputedData.label" :round="tButtonx0x12ComputedData.round" :plain="tButtonx0x12ComputedData.plain" :disabled="tButtonx0x12ComputedData.disabled" :type="tButtonx0x12ComputedData.type" :size="tButtonx0x12ComputedData.size" :native-type="tButtonx0x12ComputedData.native-type" :c-style="tButtonx0x12ComputedData.cStyle" @click="onclick1761119791238"></t-button><t-text-common id="t-text-common-ccc4.96a17e135" class="tagFilterPanel-t-text-common-0-13"  :label="tTextCommonx0x13ComputedData.label" :editable="tTextCommonx0x13ComputedData.editable" :c-style="tTextCommonx0x13ComputedData.cStyle"></t-text-common></div>
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
import { TButton, TCheckbox, TRect, TTextCommon } from '@ths/design';

export default {
  components: {
    TButton,
    TCheckbox,
    TRect,
    TTextCommon,
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
   tagParams: {},
   ylOptions: [],
   glOptions: [],
   gkmdOptions: [],
   vocsOptions: [],
   ylVal: [],
   glVal: [],
   gkmdVal: [],
   vocsVal: [],
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
            default: {"width":"410px","height":"574px","top":"-12px","left":"1px","position":"unset","backgroundColor":"rgb(43 81 138)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"574px","top":"-12px","left":"1px","position":"unset","backgroundColor":"rgb(43 81 138)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"25px","height":"35px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-05/ddd1a354de1245158db07e677ea7b499.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"20px auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-2px","left":"377px","position":"unset","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"25px","height":"35px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-05/ddd1a354de1245158db07e677ea7b499.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"20px auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-2px","left":"377px","position":"unset","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","cursor":"pointer","animationName":""}}}, 
 },
},
tCheckboxx0x3: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"386px","height":"94px","position":"unset","left":"16px","top":"446px","animationName":""},
            
            },
 default: { 
 
data:[],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"386px","height":"94px","position":"unset","left":"16px","top":"446px","animationName":""}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"}}}, 
 },
},
tCheckboxx0x4: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"386px","height":"120px","position":"unset","left":"16px","top":"298px","animationName":""},
            
            },
 default: { 
 
data:[],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"386px","height":"120px","position":"unset","left":"16px","top":"298px","animationName":""}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"}}}, 
 },
},
tTextCommonx0x5: {
defaultStyle: {
            default: {"width":"115px","height":"19px","color":"#ffffff","position":"unset","left":"10px","top":"98px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"VOCS4+2档案",
editable:false,
cStyle:{"wrapper":{"default":{"width":"115px","height":"19px","color":"#ffffff","position":"unset","left":"10px","top":"98px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextCommonx0x6: {
defaultStyle: {
            default: {"width":"115px","height":"19px","color":"#ffffff","position":"unset","left":"11px","top":"189px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"管控名单",
editable:false,
cStyle:{"wrapper":{"default":{"width":"115px","height":"19px","color":"#ffffff","position":"unset","left":"11px","top":"189px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextCommonx0x7: {
defaultStyle: {
            default: {"width":"115px","height":"19px","color":"#ffffff","position":"unset","left":"11px","top":"274px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"锅炉",
editable:false,
cStyle:{"wrapper":{"default":{"width":"115px","height":"19px","color":"#ffffff","position":"unset","left":"11px","top":"274px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextCommonx0x8: {
defaultStyle: {
            default: {"width":"115px","height":"19px","color":"#ffffff","position":"unset","left":"13px","top":"422px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"窑炉",
editable:false,
cStyle:{"wrapper":{"default":{"width":"115px","height":"19px","color":"#ffffff","position":"unset","left":"13px","top":"422px","fontSize":"14px","animationName":""}}}, 
 },
},
tCheckboxx0x9: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justifyContent":"center","width":"407px","height":"54px","position":"unset","left":"0px","top":"123px","animationName":""},
            
            },
 default: { 
 
data:[],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justifyContent":"center","width":"407px","height":"54px","position":"unset","left":"0px","top":"123px","animationName":""}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"}}}, 
 },
},
tCheckboxx0x10: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"400px","height":"57px","position":"unset","left":"15px","top":"213px","animationName":""},
            
            },
 default: { 
 
data:[],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"400px","height":"57px","position":"unset","left":"15px","top":"213px","animationName":""}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"}}}, 
 },
},
tButtonx0x11: {
defaultStyle: {
            default: {"width":"70px","height":"36px","position":"unset","left":"332px","top":"42px","fontSize":"14px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
label:"确定",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"70px","height":"36px","position":"unset","left":"332px","top":"42px","fontSize":"14px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tButtonx0x12: {
defaultStyle: {
            default: {"width":"70px","height":"36px","position":"unset","left":"247px","top":"43px","backgroundColor":"rgba(249, 249, 249, 1)","color":"rgba(38, 38, 38, 1)","fontSize":"14px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
label:"重置",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"70px","height":"36px","position":"unset","left":"247px","top":"43px","backgroundColor":"rgba(249, 249, 249, 1)","color":"rgba(38, 38, 38, 1)","fontSize":"14px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tTextCommonx0x13: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"#ffffff","fontWeight":"700","position":"unset","left":"10px","top":"8px"},
            
            },
 default: { 
 
label:"标签筛选",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"#ffffff","fontWeight":"700","position":"unset","left":"10px","top":"8px"}}}, 
 },
},
});
const handleSure = () => {
let tagParams = {};

tagParams['9A376E1453404EA89AA64F645131FBE3'] = state.vocsVal.join('$');
tagParams['F39472B364FA4743801E1D08325A8A99'] = state.gkmdVal.join('$');
tagParams['1AC0F40F5251607ABCEE017BDF0664FC'] = state.glVal.join('$');
tagParams['8AB5FA8F0988409A8DDBDE4CBF650820'] = state.ylVal.join('$');

for(let key in tagParams) {
  if(tagParams[key] !== '') {
    state.tagParams[key] = tagParams[key];
  }
}
};
const handleReset = () => {
state.vocsVal = [];
state.gkmdVal = [];
state.glVal = [];
state.ylVal = [];
state.tagParams = {};
};
const setLastValue = () => {
if(global.tagParams['9A376E1453404EA89AA64F645131FBE3']) {
  state.vocsVal = global.tagParams['9A376E1453404EA89AA64F645131FBE3'].split('$');
}

if(global.tagParams['F39472B364FA4743801E1D08325A8A99']) {
  state.gkmdVal = global.tagParams['F39472B364FA4743801E1D08325A8A99'].split('$');
}

if(global.tagParams['1AC0F40F5251607ABCEE017BDF0664FC']) {
  state.glVal = global.tagParams['1AC0F40F5251607ABCEE017BDF0664FC'].split('$');
}

if(global.tagParams['8AB5FA8F0988409A8DDBDE4CBF650820']) {
  state.ylVal = global.tagParams['8AB5FA8F0988409A8DDBDE4CBF650820'].split('$');
}


};
const onclick1761119575850 = () => {
// 执行自定义方法
handleSure();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "tagSearch", // 消息名称
data: state.tagParams, // 发送的数据
});
};
const onchange1761119626962 = (data) => {
// 设置变量值
state.vocsVal = data;
};
const onchange1761119644339 = (data) => {
// 设置变量值
state.gkmdVal = data;
};
const onchange1761119660538 = (data) => {
// 设置变量值
state.glVal = data;
};
const onchange1761119681010 = (data) => {
// 设置变量值
state.ylVal = data;
};
const onclick1761119791238 = () => {
// 执行自定义方法
handleReset();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "tagSearch", // 消息名称
data: state.tagParams, // 发送的数据
});
};
const onclick1761119917641 = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeTagFilterPanel", // 消息名称
data: {}, // 发送的数据
});
};
// 接口函数
const gettagList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"644832d68a17145cd5736d5451cb84d0"},}).then((res) => {
     // 成功的操作
     console.log(res)
const tagList = res?.data.tags[0].children.filter(item => item.nodeId === '50962db4370255a14dc8ad6182d9d51c')[0].children;
console.log(tagList.find(item => item.tagCode === '9A376E1453404EA89AA64F645131FBE3'))
state.vocsOptions = tagList.find(item => item.tagCode === '9A376E1453404EA89AA64F645131FBE3').range.map(item => ({label: item.alias, value: item.value }));
state.gkmdOptions = tagList.find(item => item.tagCode === 'F39472B364FA4743801E1D08325A8A99').range.map(item => ({label: item.alias, value: item.value }));
state.glOptions = tagList.find(item => item.tagCode === '1AC0F40F5251607ABCEE017BDF0664FC').range.map(item => ({label: item.alias, value: item.value }));
state.ylOptions = tagList.find(item => item.tagCode === '8AB5FA8F0988409A8DDBDE4CBF650820').range.map(item => ({label: item.alias, value: item.value }));

console.log(state)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-tagFilterPanel', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 事件交互-请求调用接口
gettagList().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 执行自定义方法
setLastValue();
onMounted(() => {
setPageScale('t-l-c-tagFilterPanel', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tCheckboxx0x3ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x3.default, componentState.tCheckboxx0x3?.[state.screenSize]));

 const tCheckboxx0x4ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x4.default, componentState.tCheckboxx0x4?.[state.screenSize]));

 const tTextCommonx0x5ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x5.default, componentState.tTextCommonx0x5?.[state.screenSize]));

 const tTextCommonx0x6ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x6.default, componentState.tTextCommonx0x6?.[state.screenSize]));

 const tTextCommonx0x7ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x7.default, componentState.tTextCommonx0x7?.[state.screenSize]));

 const tTextCommonx0x8ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x8.default, componentState.tTextCommonx0x8?.[state.screenSize]));

 const tCheckboxx0x9ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x9.default, componentState.tCheckboxx0x9?.[state.screenSize]));

 const tCheckboxx0x10ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x10.default, componentState.tCheckboxx0x10?.[state.screenSize]));

 const tButtonx0x11ComputedData = computed(() => _.merge({}, componentState.tButtonx0x11.default, componentState.tButtonx0x11?.[state.screenSize]));

 const tButtonx0x12ComputedData = computed(() => _.merge({}, componentState.tButtonx0x12.default, componentState.tButtonx0x12?.[state.screenSize]));

 const tTextCommonx0x13ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x13.default, componentState.tTextCommonx0x13?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x2ComputedData,
tCheckboxx0x3ComputedData,
tCheckboxx0x4ComputedData,
tTextCommonx0x5ComputedData,
tTextCommonx0x6ComputedData,
tTextCommonx0x7ComputedData,
tTextCommonx0x8ComputedData,
tCheckboxx0x9ComputedData,
tCheckboxx0x10ComputedData,
tButtonx0x11ComputedData,
tButtonx0x12ComputedData,
tTextCommonx0x13ComputedData,
onclick1761119917641,
onchange1761119681010,
onchange1761119660538,
onchange1761119626962,
onchange1761119644339,
onclick1761119575850,
onclick1761119791238,
};
},
}
</script>

<style scoped>
.t-l-c-tagFilterPanel {
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
width: 421px;
height: 564px;
background-color: rgba(0,0,0,0);
}
.t-l-c-tagFilterPanel .tagFilterPanel-t-rect-0-0 {
position: absolute !important;
top: -12px;
left: 1px;
width: 410px;
height: 574px;
pointer-events: auto;
}

.t-l-c-tagFilterPanel .tagFilterPanel-t-rect-0-2 {
position: absolute !important;
top: -2px;
left: 377px;
width: 25px;
height: 35px;
pointer-events: auto;
}

.t-l-c-tagFilterPanel .tagFilterPanel-t-checkbox-0-3 {
position: absolute !important;
top: 446px;
left: 16px;
width: 386px;
height: 94px;
pointer-events: auto;
}

.t-l-c-tagFilterPanel .tagFilterPanel-t-checkbox-0-4 {
position: absolute !important;
top: 298px;
left: 16px;
width: 386px;
height: 120px;
pointer-events: auto;
}

.t-l-c-tagFilterPanel .tagFilterPanel-t-text-common-0-5 {
position: absolute !important;
top: 98px;
left: 10px;
width: 115px;
height: 19px;
pointer-events: auto;
}

.t-l-c-tagFilterPanel .tagFilterPanel-t-text-common-0-6 {
position: absolute !important;
top: 189px;
left: 11px;
width: 115px;
height: 19px;
pointer-events: auto;
}

.t-l-c-tagFilterPanel .tagFilterPanel-t-text-common-0-7 {
position: absolute !important;
top: 274px;
left: 11px;
width: 115px;
height: 19px;
pointer-events: auto;
}

.t-l-c-tagFilterPanel .tagFilterPanel-t-text-common-0-8 {
position: absolute !important;
top: 422px;
left: 13px;
width: 115px;
height: 19px;
pointer-events: auto;
}

.t-l-c-tagFilterPanel .tagFilterPanel-t-checkbox-0-9 {
position: absolute !important;
top: 123px;
left: 0px;
width: 407px;
height: 54px;
pointer-events: auto;
}

.t-l-c-tagFilterPanel .tagFilterPanel-t-checkbox-0-10 {
position: absolute !important;
top: 213px;
left: 15px;
width: 400px;
height: 57px;
pointer-events: auto;
}

.t-l-c-tagFilterPanel .tagFilterPanel-t-button-0-11 {
position: absolute !important;
top: 42px;
left: 332px;
width: 70px;
height: 36px;
pointer-events: auto;
}

.t-l-c-tagFilterPanel .tagFilterPanel-t-button-0-12 {
position: absolute !important;
top: 43px;
left: 247px;
width: 70px;
height: 36px;
pointer-events: auto;
}

.t-l-c-tagFilterPanel .tagFilterPanel-t-text-common-0-13 {
position: absolute !important;
top: 8px;
left: 10px;
width: 96px;
height: 19px;
pointer-events: auto;
}
</style>
