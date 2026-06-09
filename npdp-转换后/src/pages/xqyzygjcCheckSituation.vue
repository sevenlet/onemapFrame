<template>
  <div id="t-l-c-xqyzygjcCheckSituation" class="t-l-c-xqyzygjcCheckSituation" ><t-list-card id="t-list-card-0032.f5836da41" class="xqyzygjcCheckSituation-t-list-card-0-0"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-0032.f5836da41']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x0ComputedData.spacingX" :col="tListCardx0x0ComputedData.col" :direction="tListCardx0x0ComputedData.direction" :exchange-order="tListCardx0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0ComputedData.unitBreak" :key-field="tListCardx0x0ComputedData.keyField" :active-key-field="tListCardx0x0ComputedData.activeKeyField" :active="tListCardx0x0ComputedData.active" :c-style="tListCardx0x0ComputedData.cStyle"></t-list-card><t-row id="t-row-ff03.5913d5ded" class="xqyzygjcCheckSituation-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-text-common id="t-text-common-3ac9.017a6ddd3" class="xqyzygjcCheckSituation-t-text-common-0-1-0"  :label="tTextCommonx0x1x0ComputedData.label" :editable="tTextCommonx0x1x0ComputedData.editable" :c-style="tTextCommonx0x1x0ComputedData.cStyle"></t-text-common><t-select id="t-select-fad6.1c9615d11" class="xqyzygjcCheckSituation-t-select-0-1-1"  :active-value="replaceCssVariables(filterData(state.taskCode, componentPropBindingMap?.['t-select-fad6.1c9615d11']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.taskTypeData, componentPropBindingMap?.['t-select-fad6.1c9615d11']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x1x1ComputedData.alias" :multiple="tSelectx0x1x1ComputedData.multiple" :placeholder="tSelectx0x1x1ComputedData.placeholder" :clearable="tSelectx0x1x1ComputedData.clearable" :disabled="tSelectx0x1x1ComputedData.disabled" :name="tSelectx0x1x1ComputedData.name" :autocomplete="tSelectx0x1x1ComputedData.autocomplete" :filterable="tSelectx0x1x1ComputedData.filterable" :no-match-text="tSelectx0x1x1ComputedData.no-match-text" :no-data-text="tSelectx0x1x1ComputedData.no-data-text" :c-style="tSelectx0x1x1ComputedData.cStyle" @change="onchange1776324227709_0_0"></t-select></t-row></div>
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
import { TListCard, TRow, TSelect, TTextCommon } from '@ths/design';

export default {
  components: {
    TListCard,
    TRow,
    TSelect,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-list-card-0032.f5836da41":{"attributeName":"tListCardx0x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-ff03.5913d5ded":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-common-3ac9.017a6ddd3":{"attributeName":"tTextCommonx0x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-fad6.1c9615d11":{"attributeName":"tSelectx0x1x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}}};
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
   orderNumbers: "",
   pkId: "",
   SPOT_CODE: "",
   baseInfoData: [{"title":"变化类型","num":"-"},{"title":"变化情况","num":"-"},{"title":"核实存在问题","num":"-"},{"title":"核实情况","num":"-"},{"title":"核实时间","num":"-"},{"title":"备注","num":"-"}],
   taskTypeData: [],
   taskCode: "",
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
tListCardx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 80px)","position":"unset","left":"0px","top":"80px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"变化类型","num":"-"},{"title":"变化情况","num":"-"},{"title":"核实存在问题","num":"-"},{"title":"核实情况","num":"-"},{"title":"核实时间","num":"-"},{"title":"备注","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 80px)","position":"unset","left":"0px","top":"80px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible","height":"100%"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start","height":"100%"}},"title":{"default":{"display":"flex","align-items":"center","justify-content":"end","backgroundColor":"var(--business-show-bg10)","width":"30%","textAlign":"right","paddingRight":"16px","lineHeight":"100%","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":"100%","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"numBox":{"default":{"display":"flex","align-items":"center","backgroundColor":"var(--business-show-bg15)","width":"69.5%","textAlign":"left","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":"100%"}},"num":{"default":{"fontSize":"var(--text-size-14)","color":"rgba(255, 255, 255, 1)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","lineHeight":"100%"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}},"outerWrapper":{"default":{"width":"100%","height":"16.4%"}}}, 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"55px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"0px","background":"var(--business-show-bg15)","fillType":"color"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"55px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"0px","background":"var(--business-show-bg15)","fillType":"color"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextCommonx0x1x0: {
defaultStyle: {
            default: {"width":"96px","height":"20px","color":"rgba(255, 255, 255, 1)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset","backgroundColor":"rgba(254, 254, 254, 0)"},
            
            },
 default: { 
 
label:"当前期",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"20px","color":"rgba(255, 255, 255, 1)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset","backgroundColor":"rgba(254, 254, 254, 0)"}}}, 
 },
},
tSelectx0x1x1: {
defaultStyle: {
            default: {"width":"270px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"201px","top":"-151px","position":"unset"},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择期数",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"270px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"201px","top":"-151px","position":"unset"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"color":"var(--t-white)"}}}, 
 },
},
});
const initPageData = () => {
// 处理参数
state.SPOT_CODE = global.businessDialog.dialogParmas?.TBBH || '';
// state.SPOT_CODE = 'cqyz3507250162-02'

async function getData(){
  await apiRegistry.getBaseInfo.request();
  await apiRegistry.getList.request();
}
getData()

};
const setStyle = () => {
const sheet = new CSSStyleSheet();
sheet.insertRule(`.t-l-c-xqyzygjcCheckSituation .t-list-card .t-list-card-item {
height: 100% !important;
}`);

document.adoptedStyleSheets = [sheet];

};
const onchange1757570838564 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.taskCode = value;
};
const onchange1776324227709_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.taskCode = value;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"ORDER_NUMBER":"state.taskCode","PKID":"state.pkId","interfaceId":"b0c18ca56afcca66b5fcec7a994095bc"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"ORDER_NUMBER":state.taskCode,"PKID":state.pkId,"interfaceId":"b0c18ca56afcca66b5fcec7a994095bc"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"ORDER_NUMBER":state.taskCode,"PKID":state.pkId,"interfaceId":"b0c18ca56afcca66b5fcec7a994095bc"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getList'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  // 变化类型
  state.baseInfoData[0].num = data[0]?.change_type || '-';
  // 变化情况
  state.baseInfoData[1].num = data[0]?.change_content || '-';
  // 核实存在问题
  state.baseInfoData[2].num = data[0]?.verified_issue || '-';
  // 核实情况
  state.baseInfoData[3].num = data[0]?.verification_status || '-';
  // 核实时间
  state.baseInfoData[4].num = data[0]?.verified_time || '-';
  // 备注
  state.baseInfoData[5].num = data[0]?.remark || '-';
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
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"SPOT_CODE":"state.SPOT_CODE","interfaceId":"53960efddd028ca128fdf6b96b235ad6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"SPOT_CODE":state.SPOT_CODE,"interfaceId":"53960efddd028ca128fdf6b96b235ad6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"SPOT_CODE":state.SPOT_CODE,"interfaceId":"53960efddd028ca128fdf6b96b235ad6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     state.pkId = ''
state.orderNumbers = ''
state.taskTypeData = []
state.taskCode = ''
const { data } = res.data;
if (data.length) {
  state.pkId = data[0]?.pkid
  state.orderNumbers = data[0]?.order_numbers
  if (state.orderNumbers) {
    state.taskTypeData = state.orderNumbers.split(",").map(item => {
      return {
        label: getPeriod(item),
        value: item
      }
    })
    state.taskCode = state.taskTypeData[0].value
  }
}
function getPeriod(numStr) {
  let num = parseInt(numStr, 10);
  if (isNaN(num) || num < 1) {
    return "";
  }

  const chineseDigits = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

  let result = "";

  if (num >= 1 && num <= 9) {
    result = chineseDigits[num];
  } else if (num >= 10 && num <= 19) {
    result = "十" + chineseDigits[num % 10];
  } else if (num >= 20 && num <= 99) {
    result = chineseDigits[Math.floor(num / 10)] + "十" + chineseDigits[num % 10];
  } else {
    // 超出范围可按需处理，例如直接返回阿拉伯数字
    return `第${num}期`; // 或 throw new Error("暂不支持大于99的期数");
  }

  return "第" + result + "期";
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
 function handleWindowResize() {
                            setPageScale('t-l-c-xqyzygjcCheckSituation', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-xqyzygjcCheckSituation', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setStyle();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardx0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0.default, componentState.tListCardx0x0?.[state.screenSize]));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tTextCommonx0x1x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x0.default, componentState.tTextCommonx0x1x0?.[state.screenSize]));

 const tSelectx0x1x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1x1.default, componentState.tSelectx0x1x1?.[state.screenSize]));

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
tListCardx0x0ComputedData,
tRowx0x1ComputedData,
tTextCommonx0x1x0ComputedData,
tSelectx0x1x1ComputedData,
onchange1776324227709_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-xqyzygjcCheckSituation {
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
width: 824px;
height: 580px;
background-color: rgba(255, 12, 12, 0);
}
.t-l-c-xqyzygjcCheckSituation .xqyzygjcCheckSituation-t-list-card-0-0 {
position: absolute !important;
top: 80px;
left: 0px;
width: 100%;
height: calc(100% - 80px);
pointer-events: auto;
}

.t-l-c-xqyzygjcCheckSituation .xqyzygjcCheckSituation-t-row-0-1 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 55px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
background: var(--business-show-bg15);
fill-type: color;
}

.t-l-c-xqyzygjcCheckSituation .xqyzygjcCheckSituation-t-text-common-0-1-0 {
position: unset;
top: -112px;
left: -121px;
width: 96px;
height: 20px;
pointer-events: auto;
}

.t-l-c-xqyzygjcCheckSituation .xqyzygjcCheckSituation-t-select-0-1-1 {
position: unset;
top: -151px;
left: 201px;
width: 270px;
height: 32px;
pointer-events: auto;
}
</style>
