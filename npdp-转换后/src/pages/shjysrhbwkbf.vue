<template>
  <div id="t-l-c-shjysrhbwkbf" class="t-l-c-shjysrhbwkbf" ><t-search id="t-search-f587.478ec4a0f" class="shjysrhbwkbf-t-search-0-0"  :type="tSearchx0x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.name, componentPropBindingMap?.['t-search-f587.478ec4a0f']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x0ComputedData.maxlength" :minlength="tSearchx0x0ComputedData.minlength" :show-word-limit="tSearchx0x0ComputedData.showWordLimit" :placeholder="tSearchx0x0ComputedData.placeholder" :clearable="tSearchx0x0ComputedData.clearable" :show-password="tSearchx0x0ComputedData.showPassword" :disabled="tSearchx0x0ComputedData.disabled" :prefix-icon="tSearchx0x0ComputedData.prefix-icon" :suffix-icon="tSearchx0x0ComputedData.suffix-icon" :rows="tSearchx0x0ComputedData.rows" :autosize="tSearchx0x0ComputedData.autosize" :name="tSearchx0x0ComputedData.name" :readonly="tSearchx0x0ComputedData.readonly" :step="tSearchx0x0ComputedData.step" :autofocus="tSearchx0x0ComputedData.autofocus" :form="tSearchx0x0ComputedData.form" :label="tSearchx0x0ComputedData.label" :tabindex="tSearchx0x0ComputedData.tabindex" :validate-event="tSearchx0x0ComputedData.validateEvent" :c-style="tSearchx0x0ComputedData.cStyle" :has-search-btn="tSearchx0x0ComputedData.hasSearchBtn" @input="oninput1738745314318"></t-search><t-select id="t-select-9ace.cf8737375" class="shjysrhbwkbf-t-select-0-1"  :active-value="replaceCssVariables(filterData(state.CONTROL_TYPE, componentPropBindingMap?.['t-select-9ace.cf8737375']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.type, componentPropBindingMap?.['t-select-9ace.cf8737375']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x1ComputedData.alias" :multiple="tSelectx0x1ComputedData.multiple" :placeholder="tSelectx0x1ComputedData.placeholder" :clearable="tSelectx0x1ComputedData.clearable" :disabled="tSelectx0x1ComputedData.disabled" :name="tSelectx0x1ComputedData.name" :autocomplete="tSelectx0x1ComputedData.autocomplete" :filterable="tSelectx0x1ComputedData.filterable" :no-match-text="tSelectx0x1ComputedData.no-match-text" :no-data-text="tSelectx0x1ComputedData.no-data-text" :c-style="tSelectx0x1ComputedData.cStyle" :placement="tSelectx0x1ComputedData.placement" @change="onchange1739353744842"></t-select><t-button id="t-button-888b.3eae03772" class="shjysrhbwkbf-t-button-0-2"  :label="tButtonx0x2ComputedData.label" :round="tButtonx0x2ComputedData.round" :plain="tButtonx0x2ComputedData.plain" :disabled="tButtonx0x2ComputedData.disabled" :type="tButtonx0x2ComputedData.type" :size="tButtonx0x2ComputedData.size" :native-type="tButtonx0x2ComputedData.native-type" :c-style="tButtonx0x2ComputedData.cStyle" @click="onclick1739353891265"></t-button><t-table id="t-table-ae8f.6164d2ff" class="shjysrhbwkbf-t-table-0-3"  :height="tTablex0x3ComputedData.height" :stripe="tTablex0x3ComputedData.stripe" :border="tTablex0x3ComputedData.border" :auto-scroll="tTablex0x3ComputedData.autoScroll" :speed="tTablex0x3ComputedData.speed" :columns="tTablex0x3ComputedData.columns" :data="replaceCssVariables(filterData(state.data, componentPropBindingMap?.['t-table-ae8f.6164d2ff']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x3ComputedData.defaultSort" :c-style="tTablex0x3ComputedData.cStyle" @cell-click="oncellClick1764239603804"></t-table></div>
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
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-search-f587.478ec4a0f":{"attributeName":"tSearchx0x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-select-9ace.cf8737375":{"attributeName":"tSelectx0x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"placement":{"filters":[]}},"t-button-888b.3eae03772":{"attributeName":"tButtonx0x2","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-table-ae8f.6164d2ff":{"attributeName":"tTablex0x3","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
   topicCode: "5ec37ba3-dd0d-4346-a167-683610051b94",
   typeFilterCode: "",
   tagJson: {},
   type: [],
   selectData: [],
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
            default: {"width":"223px","height":"33px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"33px","fontSize":"var(--business-text-size-14)"},
            
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
cStyle:{"wrapper":{"default":{"width":"223px","height":"33px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"33px","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tSelectx0x1: {
defaultStyle: {
            default: {"width":"112px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:true,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"112px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},
placement:"bottom", 
 },
},
tButtonx0x2: {
defaultStyle: {
            default: {"width":"49px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","color":"var(--t-white)"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"49px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","color":"var(--t-white)"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tTablex0x3: {
defaultStyle: {
            default: {"width":"394px","height":"204px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"166",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"","align":"center","type":"state","stateKey":"location","stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2025-02-14/2254708ce00a4b2d8c6ada4b183bc9ae.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"","width":"0PX","height":"0PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"44PX"},{"label":"名称","key":"OUTLET_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"250px","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"入河方式","key":"enterType","stateKey":"","align":"center","type":"default","operationList":[],"stateList":[{"name":"上升","fontStyle":{"color":"rgba(0, 255, 0, 1)","fontSize":"14PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","LineHeight":"","borderRadius":"","background":"","backgroundSize":"80%"},"imageStyle":{"margin":"0 2px -1px 8px","borderRadius":"","width":"6PX","height":"14PX","backgroundImage":"assets/images/2025-02-05/1d7b2db572a046aababc2c08c0dabf82.svg"},"cellStyle":{"background":""}},{"name":"下降","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"14PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","LineHeight":"","borderRadius":"","background":"","backgroundSize":"80%"},"imageStyle":{"margin":"0 2px -1px 8px","borderRadius":"","width":"6PX","height":"14PX","backgroundImage":"assets/images/2025-02-05/440f462dba284f2b96c1512ffac02514.svg"},"cellStyle":{"background":""}},{"name":"持平","fontStyle":{"color":"rgba(244, 220, 0, 1)","fontSize":"14PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","LineHeight":"","borderRadius":"","background":"","backgroundImage":""},"imageStyle":{"margin":"0 2px 4px 8px","borderRadius":"","width":"12PX","height":"2PX","backgroundImage":"assets/images/2023-01-29/598351bb62b240169f4df9dba4bca29f.png"},"cellStyle":{"background":""}}],"width":"100PX","style":{"fontStyle":{"fontSize":"var(--business-text-size-12)","width":"PX","height":"PX","borderRadius":"PX","background":""}},"infoPosition":"left"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"394px","height":"204px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
});
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
      // getListData();
        sendHtmlSocket();
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
      // getListData();
      sendHtmlSocket();
    },
    {
      deep: true,
      immediate: true,
    }
  )
}

// 清空选中的列表数据
state.selectData = [];
};
const sendHtmlSocket = () => {
setTimeout(() => {
  console.log('shjysrhbwkbf 组件 - 执行 sendHtmlSocket')
  rootData.rootSocket.emit('message', {
  room: global.socketRoom,
  type: "shjysRhpwk",
  data: {
    WATER_CODE: state.WATER_CODE,
    WSYSTEM_CODE: state.WSYSTEM_CODE,
    CONTROL_TYPE: state.CONTROL_TYPE,
    KEYWORD: state.name,
    REGION_CODE: '',
  }
});
}, 800);
};
const onSocket = () => {
// 页面中监听列表选中的列表项
rootData.rootOn('rootSocket:change', (socket) => {
  // 水环境要素-入河排污口列表页，进行了复选
  if (socket.type === "shjysRhpwkSelectRow") {
    const { data } = socket;
    console.log('shjysrhbwkbf - 水环境要素-入河排污口列表页，进行了复选', data);
    // 填充选中的列表
    state.selectData = data?.selectData || [];
  };
});
};
const handleTask = () => {
if (!state.selectData?.length) {
  ElementPlus.ElMessage({
    message: '请先选择一条数据，再进行任务派发！',
    type: 'warning',
  });
  return;
}
const idString = state.selectData.map(item => item.id).join(',');
localStorage.removeItem('pointIds');
localStorage.setItem('pointIds', idString);
const url = 'https://stfs.sthj.fs.gdgov.cn/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1'
window.open(url, '_blank')
console.log('要对以下列表数据进行派发', idString, state.selectData);
};
const handleTagCode = () => {

const tagObj = {};

if (state.CONTROL_TYPE) {
  tagObj[`${state.typeFilterCode}`] = state.CONTROL_TYPE;
}

state.tagJson = JSON.stringify(tagObj);
};
const handleTableClick = (cell,column,row) => {
if (["定位"].includes(column.label)  && !!row.location) {
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
const setLayer = (visible) => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'setWaterEnvFeatureLayer',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      LAYER_CODE: state.topicCode,
      REGION_CODE: global.regionaQuery.regionCode,
      tagJson: state.tagJson,
      visible: visible
    }
  }
);
};
const oninput1738745314318 = (value) => {
// 设置变量值
state.name = value;
};
const onchange1739353744842 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.CONTROL_TYPE = value;
// 执行自定义方法
handleTagCode();
// 执行自定义方法
setLayer(true);
};
const onclick1739353891265 = () => {
// 执行自定义方法
sendHtmlSocket();
};
const oncellClick1764239603804 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(cell,column,row);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"ENTITY_CODE\":\"tag_yztrhhpwk_1622547617683\",\"HasAllTag\":\"true\",\"keyword\":\"state.name\",\"pageNum\":\"1\",\"pageSize\":\"2000\",\"orderBy\":\"\",\"tagJson\":\"state.tagJson\",\"distance\":\"\",\"locationField\":\"\",\"pointValue\":\"\",\"gisType\":\"\",\"queryField\":\"OUTLET_NAME\",\"AREA_CODE\":\"\",\"useTermKeyword\":\"\",\"useGisShape\":\"\",\"hasGather\":\"fasle\",\"topicCode\":\"state.topicCode\",\"REGION_CODE\":\"global.regionaQuery.regionCode\",\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"ENTITY_CODE":"tag_yztrhhpwk_1622547617683","HasAllTag":"true","keyword":state.name,"pageNum":"1","pageSize":"2000","orderBy":"","tagJson":state.tagJson,"distance":"","locationField":"","pointValue":"","gisType":"","queryField":"OUTLET_NAME","AREA_CODE":"","useTermKeyword":"","useGisShape":"","hasGather":"fasle","topicCode":state.topicCode,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"8b5ca6a3009f750b5b1f19a415589682"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"ENTITY_CODE\":\"tag_yztrhhpwk_1622547617683\",\"HasAllTag\":\"true\",\"keyword\":\state.name\,\"pageNum\":\"1\",\"pageSize\":\"2000\",\"orderBy\":\"\",\"tagJson\":\state.tagJson\,\"distance\":\"\",\"locationField\":\"\",\"pointValue\":\"\",\"gisType\":\"\",\"queryField\":\"OUTLET_NAME\",\"AREA_CODE\":\"\",\"useTermKeyword\":\"\",\"useGisShape\":\"\",\"hasGather\":\"fasle\",\"topicCode\":\state.topicCode\,\"REGION_CODE\":\global.regionaQuery.regionCode\,\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     state.data = [];
  state.data = res?.data?.page?.list.map(i => ({
    ...i,
    enterType: filters.handleEnterRiverType(i?.INTOWAY_CODE),
    location: `${!!(i.LATITUDE && i.LONGITUDE)}`
  })) || []

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.data = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getFilterList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"topicCode\":\"state.topicCode\",\"interfaceId\":\"982f4b5298e7d6c89796ffca11f9dacb\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"topicCode":state.topicCode,"interfaceId":"982f4b5298e7d6c89796ffca11f9dacb"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"topicCode\":\state.topicCode\,\"interfaceId\":\"982f4b5298e7d6c89796ffca11f9dacb\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getFilterList'] = res.data;
                
     if(res?.data?.tags?.length){
  const { tags } = res?.data
  const index1 = tags.findIndex(i => i.nodeName === '入河方式')
  state.typeFilterCode = tags[index1]?.tagCode
  state.type = tags[index1]?.range?.map(i =>{
    return{
      label: i.alias,
      value: i.value,
      disabled: false
    }
  }) || []
}else{
  state.type = []
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.data = [];
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [state.tagJson,global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-shjysrhbwkbf', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-shjysrhbwkbf', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
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
tSearchx0x0ComputedData,
tSelectx0x1ComputedData,
tButtonx0x2ComputedData,
tTablex0x3ComputedData,
oninput1738745314318,
onchange1739353744842,
onclick1739353891265,
oncellClick1764239603804,
};
},
}
</script>

<style scoped>
.t-l-c-shjysrhbwkbf {
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
.t-l-c-shjysrhbwkbf .shjysrhbwkbf-t-search-0-0 {
position: absolute !important;
top: -0.5px;
left: 126px;
width: 223px;
height: 33px;
pointer-events: auto;
}

.t-l-c-shjysrhbwkbf .shjysrhbwkbf-t-select-0-1 {
position: absolute !important;
top: 0px;
left: 8px;
width: 112px;
height: 32px;
pointer-events: auto;
}

.t-l-c-shjysrhbwkbf .shjysrhbwkbf-t-button-0-2 {
position: absolute !important;
top: 0px;
left: 354px;
width: 49px;
height: 32px;
pointer-events: auto;
}

.t-l-c-shjysrhbwkbf .shjysrhbwkbf-t-table-0-3 {
position: absolute !important;
top: 38px;
left: 8px;
width: 394px;
height: 204px;
pointer-events: auto;
}
</style>
