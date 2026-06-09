<template>
  <div id="t-l-c-shjysRhpwk" class="t-l-c-shjysRhpwk" ><t-search id="t-search-f587.478ec4a0f" class="shjysRhpwk-t-search-0-0"  :type="tSearchx0x0ComputedData.type" :input-value="state.name" :maxlength="tSearchx0x0ComputedData.maxlength" :minlength="tSearchx0x0ComputedData.minlength" :show-word-limit="tSearchx0x0ComputedData.showWordLimit" :placeholder="tSearchx0x0ComputedData.placeholder" :clearable="tSearchx0x0ComputedData.clearable" :show-password="tSearchx0x0ComputedData.showPassword" :disabled="tSearchx0x0ComputedData.disabled" :prefix-icon="tSearchx0x0ComputedData.prefix-icon" :suffix-icon="tSearchx0x0ComputedData.suffix-icon" :rows="tSearchx0x0ComputedData.rows" :autosize="tSearchx0x0ComputedData.autosize" :name="tSearchx0x0ComputedData.name" :readonly="tSearchx0x0ComputedData.readonly" :step="tSearchx0x0ComputedData.step" :autofocus="tSearchx0x0ComputedData.autofocus" :form="tSearchx0x0ComputedData.form" :label="tSearchx0x0ComputedData.label" :tabindex="tSearchx0x0ComputedData.tabindex" :validate-event="tSearchx0x0ComputedData.validateEvent" :c-style="tSearchx0x0ComputedData.cStyle" :has-search-btn="tSearchx0x0ComputedData.hasSearchBtn" @input="oninput1738745314318"></t-search><t-select id="t-select-9ace.cf8737375" class="shjysRhpwk-t-select-0-1"  :active-value="state.CONTROL_TYPE" :options="state.opts" :alias="tSelectx0x1ComputedData.alias" :multiple="tSelectx0x1ComputedData.multiple" :placeholder="tSelectx0x1ComputedData.placeholder" :clearable="tSelectx0x1ComputedData.clearable" :disabled="tSelectx0x1ComputedData.disabled" :name="tSelectx0x1ComputedData.name" :autocomplete="tSelectx0x1ComputedData.autocomplete" :filterable="tSelectx0x1ComputedData.filterable" :no-match-text="tSelectx0x1ComputedData.no-match-text" :no-data-text="tSelectx0x1ComputedData.no-data-text" :c-style="tSelectx0x1ComputedData.cStyle" :placement="tSelectx0x1ComputedData.placement" @change="onchange1739353744842"></t-select><t-button id="t-button-888b.3eae03772" class="shjysRhpwk-t-button-0-2"  :label="tButtonx0x2ComputedData.label" :round="tButtonx0x2ComputedData.round" :plain="tButtonx0x2ComputedData.plain" :disabled="tButtonx0x2ComputedData.disabled" :type="tButtonx0x2ComputedData.type" :size="tButtonx0x2ComputedData.size" :native-type="tButtonx0x2ComputedData.native-type" :c-style="tButtonx0x2ComputedData.cStyle" @click="onclick1739353891265"></t-button><t-table id="t-table-3144.232785c32" class="shjysRhpwk-t-table-0-3"  :height="tTablex0x3ComputedData.height" :stripe="tTablex0x3ComputedData.stripe" :border="tTablex0x3ComputedData.border" :auto-scroll="tTablex0x3ComputedData.autoScroll" :speed="tTablex0x3ComputedData.speed" :columns="tTablex0x3ComputedData.columns" :data="state.data" :default-sort="tTablex0x3ComputedData.defaultSort" :c-style="tTablex0x3ComputedData.cStyle" @cell-click="oncellClick1739353830681"></t-table></div>
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
import { TButton, TSearch, TSelect, TTable } from '@ths/design';

export default {
  components: {
    TButton,
    TSearch,
    TSelect,
    TTable,
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
   opts: [],
   WSYSTEM_CODE: "",
   WATER_CODE: "",
   CONTROL_TYPE: "",
   data: [],
   name: "",
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
tSearchx0x0: {
defaultStyle: {
            default: {"width":"187px","height":"32px","position":"unset","left":"162px","top":"0px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入关键字",
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
cStyle:{"wrapper":{"default":{"width":"187px","height":"32px","position":"unset","left":"162px","top":"0px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tSelectx0x1: {
defaultStyle: {
            default: {"width":"150px","height":"32px","position":"unset","left":"8px","top":"0px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"",
options:[],
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
cStyle:{"wrapper":{"default":{"width":"150px","height":"32px","position":"unset","left":"8px","top":"0px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","width":"150px","position":"absolute","left":"1px !important","top":"36px !important"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"width":"150px"}}},
placement:"bottom", 
 },
},
tButtonx0x2: {
defaultStyle: {
            default: {"width":"49px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","position":"unset","left":"353px","top":"0px","animationName":""},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"49px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","position":"unset","left":"353px","top":"0px","animationName":""},"hover":{"background":"var(--business-btn-active)"},"active":{"background":"var(--business-btn-active)"},"focus":{"background":"var(--business-btn-active)"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tTablex0x3: {
defaultStyle: {
            default: {"width":"394px","height":"207px","position":"unset","left":"8px","top":"40px","paddingTop":"0px","borderBottom":"0px solid ","animationName":""},
            
            },
 default: { 
 
height:"207",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"","align":"center","type":"state","stateKey":"location","stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2025-02-14/2254708ce00a4b2d8c6ada4b183bc9ae.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"","width":"0PX","height":"0PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"44PX"},{"label":"排口名称","key":"OUTLET_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"112PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"排污口类型","key":"OUTLET_TYPE","align":"left","operationList":[],"stateList":[],"width":"100PX","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"14PX"}},"headerAlign":"left"},{"label":"入河方式","key":"OUTLET_WAY","stateKey":"c","align":"left","type":"default","operationList":[{"name":"详情","id":"1","fontStyle":{"color":"rgba(0, 183, 255, 1)","fontSize":"14PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"width":"78PX","style":{"fontStyle":{"width":"40PX","height":"PX","color":"rgba(255, 255, 255, 1)","fontSize":"14PX !important"},"cellStyle":{"cursor":"pointer"}},"infoKey":"","showOverflowTooltip":false,"headerAlign":"left"},{"label":"详情","key":"c","stateKey":"c","align":"center","type":"default","operationList":[{"name":"详情","id":"1","fontStyle":{"color":"rgba(0, 183, 255, 1)","fontSize":"14PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"width":"60PX","style":{"fontStyle":{"width":"40PX","height":"PX","color":"var(--business-theme)","fontSize":"14PX !important"},"cellStyle":{"cursor":"pointer"}},"infoKey":"","showOverflowTooltip":false}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"394px","height":"207px","position":"unset","left":"8px","top":"40px","paddingTop":"0px","borderBottom":"0px solid ","animationName":""}},"headerCell":{"default":{"borderBottom":"0px solid rgba(26,27,31,1)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px","paddingLeft":"4px","paddingRight":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px","paddingLeft":"4px","paddingRight":"4px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)","paddingLeft":"0px","paddingRight":"0px"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
});
const handleTableClick = (cell,column,row) => {
if (column.label === '定位' && !!row.location) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "goto",
    data: {
      "LONGITUDE": row.LONGITUDE,
      "LATITUDE": row.LATITUDE,
      "level": "12"
    }
  });
} else if (column.label === '详情') {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: 'showLegoDialog',
    data: {
      dialogName: "lyxqRhpwkDialogComponent",
      dialogParams: {
        DATA_ID: row.OUTLET_ID || ""
      }
    },
  });
}

};
const getProvide = () => {
const rootData = inject('WSystemState')
const rootData2 = inject('RiverState')
const rootData3 = inject('surfaceWaterParamsState');

// 流域
if (rootData3.systemRiverType === "WSYSTEM") {
  watch(
    () => rootData?.WSYSTEM_CODE,
    (val) => {
      state.WSYSTEM_CODE = val || ""
      state.WATER_CODE = ""
      getListData();
    },
    {
      deep: true,
      immediate: true,
    }
  )
}

// 河涌
if (rootData3.systemRiverType === "WATER") {
  watch(
    () => rootData2?.WATER_CODE,
    (val) => {
      state.WSYSTEM_CODE = ""
      state.WATER_CODE = val || ""
      getListData();
    },
    {
      deep: true,
      immediate: true,
    }
  )
}
};
const oninput1738745314318 = (value) => {
// 设置变量值
state.name = value;
};
const onchange1739353744842 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.CONTROL_TYPE = value;
};
const oncellClick1739353830681 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(cell,column,row);
};
const onclick1739353891265 = () => {
// 事件交互-请求调用接口
getListData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
// 接口函数
const getListData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"WATER_CODE":state.WATER_CODE,"WSYSTEM_CODE":state.WSYSTEM_CODE,"CONTROL_TYPE":state.CONTROL_TYPE,"KEYWORD":state.name,"REGION_CODE":"","interfaceId":"eccdbc5f7f0c95a8b81574b849c700d0"},}).then((res) => {
     // 成功的操作
     console.log('入河排污口列表', res.data)

state.data = [];

if (res?.data?.head?.statusCode === '200') {
  state.data = res?.data?.data?.map((item) => ({
    ...item,
    c: '详情',
    location: `${!!(item.LATITUDE && item.LONGITUDE)}`
  })) || [];
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.data = [];
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [state.CONTROL_TYPE,""], () => {
getListData();
},{
deep: true, // 深度监听
});
// 接口函数
const getOpts = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"8103f32f2f7c90bc65c09e28a4ac8838"},}).then((res) => {
     // 成功的操作
     console.log('入河排污口-下拉', res.data)

state.opts = [];
state.CONTROL_TYPE = '';

if (res?.data?.head?.statusCode === '200') {
  state.opts = res?.data?.data?.map((item) => ({
    ...item,
    value: item.CONTROL_TYPE,
    label: item.CONTROL_TYPE_NAME,
  })) || [];
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.opts = [];
state.CONTROL_TYPE = '';
      reject(error);
    });
  });
};
// 初始请求，调取接口
getOpts();
 function handleWindowResize() {
                            setPageScale('t-l-c-shjysRhpwk', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-shjysRhpwk', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
getProvide();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tSearchx0x0ComputedData = computed(() => _.merge({}, componentState.tSearchx0x0.default, componentState.tSearchx0x0?.[state.screenSize]));

 const tSelectx0x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1.default, componentState.tSelectx0x1?.[state.screenSize]));

 const tButtonx0x2ComputedData = computed(() => _.merge({}, componentState.tButtonx0x2.default, componentState.tButtonx0x2?.[state.screenSize]));

 const tTablex0x3ComputedData = computed(() => _.merge({}, componentState.tTablex0x3.default, componentState.tTablex0x3?.[state.screenSize]));

return {
global,
state,
componentState,
tSearchx0x0ComputedData,
tSelectx0x1ComputedData,
tButtonx0x2ComputedData,
tTablex0x3ComputedData,
oninput1738745314318,
onchange1739353744842,
onclick1739353891265,
oncellClick1739353830681,
};
},
}
</script>

<style scoped>
.t-l-c-shjysRhpwk {
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
background-color: rgba(255, 0, 0, 0);
width: 410px;
height: 247px;
}
.t-l-c-shjysRhpwk .shjysRhpwk-t-search-0-0 {
position: absolute !important;
top: 0px;
left: 162px;
width: 187px;
height: 32px;
pointer-events: auto;
}

.t-l-c-shjysRhpwk .shjysRhpwk-t-select-0-1 {
position: absolute !important;
top: 0px;
left: 8px;
width: 150px;
height: 32px;
pointer-events: auto;
}

.t-l-c-shjysRhpwk .shjysRhpwk-t-button-0-2 {
position: absolute !important;
top: 0px;
left: 353px;
width: 49px;
height: 32px;
pointer-events: auto;
}

.t-l-c-shjysRhpwk .shjysRhpwk-t-table-0-3 {
position: absolute !important;
top: 40px;
left: 8px;
width: 394px;
height: 207px;
pointer-events: auto;
}
</style>
