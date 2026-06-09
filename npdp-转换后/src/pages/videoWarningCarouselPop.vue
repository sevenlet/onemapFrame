<template>
  <div id="t-l-c-videoWarningCarouselPop" class="t-l-c-videoWarningCarouselPop" ><t-swiper-base id="t-swiper-base-ac40.cc74589e5" class="videoWarningCarouselPop-t-swiper-base-0-0"  :c-style="tSwiperBasex0x0ComputedData.cStyle" :data="replaceCssVariables(filterData(state.fileList, componentPropBindingMap?.['t-swiper-base-ac40.cc74589e5']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :series-setting="tSwiperBasex0x0ComputedData.seriesSetting"></t-swiper-base><t-text-common id="t-text-common-9f1b.c5941e7c2" class="videoWarningCarouselPop-t-text-common-0-1"  :label="tTextCommonx0x1ComputedData.label" :editable="tTextCommonx0x1ComputedData.editable" :c-style="tTextCommonx0x1ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-1f63.73c1ebaa2" class="videoWarningCarouselPop-t-text-common-0-2"  :label="tTextCommonx0x2ComputedData.label" :editable="tTextCommonx0x2ComputedData.editable" :c-style="tTextCommonx0x2ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-282c.d132c1b53" class="videoWarningCarouselPop-t-text-common-0-3"  :label="tTextCommonx0x3ComputedData.label" :editable="tTextCommonx0x3ComputedData.editable" :c-style="tTextCommonx0x3ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-7ccb.1af8007b8" class="videoWarningCarouselPop-t-text-common-0-4"  :label="tTextCommonx0x4ComputedData.label" :editable="tTextCommonx0x4ComputedData.editable" :c-style="tTextCommonx0x4ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-1517.7a7ce8f9" class="videoWarningCarouselPop-t-text-common-0-5"  :label="replaceCssVariables(filterData(state.info.DEVICE_NAME, componentPropBindingMap?.['t-text-common-1517.7a7ce8f9']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x5ComputedData.editable" :c-style="tTextCommonx0x5ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-ff33.0ece0e39" class="videoWarningCarouselPop-t-text-common-0-6"  :label="replaceCssVariables(filterData(state.info.REGION_NAME, componentPropBindingMap?.['t-text-common-ff33.0ece0e39']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x6ComputedData.editable" :c-style="tTextCommonx0x6ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-a1bc.9c92ca321" class="videoWarningCarouselPop-t-text-common-0-7"  :label="replaceCssVariables(filterData(state.info.ALARM_TIME, componentPropBindingMap?.['t-text-common-a1bc.9c92ca321']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x7ComputedData.editable" :c-style="tTextCommonx0x7ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-cd89.733200aa4" class="videoWarningCarouselPop-t-text-common-0-8"  :label="replaceCssVariables(filterData(state.info.ALARMNAME, componentPropBindingMap?.['t-text-common-cd89.733200aa4']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x8ComputedData.editable" :c-style="tTextCommonx0x8ComputedData.cStyle"></t-text-common></div>
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
import { TSwiperBase, TTextCommon } from '@ths/design';

export default {
  components: {
    TSwiperBase,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-swiper-base-ac40.cc74589e5":{"attributeName":"tSwiperBasex0x0","cStyle":{"filters":[]},"data":{"filters":[]},"seriesSetting":{"filters":[]}},"t-text-common-9f1b.c5941e7c2":{"attributeName":"tTextCommonx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-1f63.73c1ebaa2":{"attributeName":"tTextCommonx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-282c.d132c1b53":{"attributeName":"tTextCommonx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-7ccb.1af8007b8":{"attributeName":"tTextCommonx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-1517.7a7ce8f9":{"attributeName":"tTextCommonx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-ff33.0ece0e39":{"attributeName":"tTextCommonx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-a1bc.9c92ca321":{"attributeName":"tTextCommonx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-cd89.733200aa4":{"attributeName":"tTextCommonx0x8","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   info: {"ALARMID":"","ALARMNAME":"","ALARM_TIME":"","DEVICE_NAME":"","REGION_NAME":""},
   fileList: [],
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
tSwiperBasex0x0: {
defaultStyle: {
            default: {"width":"916px","height":"516px","top":"94px","left":"44px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"916px","height":"516px","top":"94px","left":"44px","position":"unset"}},"itemWrapper":{"default":{"height":"100%"}}},
data:[],
seriesSetting:{"interval":3000,"data":{"nameKey":"desc","dataKey":"filePath"}}, 
 },
},
tTextCommonx0x1: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"21px","top":"17px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg10)","paddingRight":"20px","animationName":""},
            
            },
 default: { 
 
label:"报警设备名称",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"21px","top":"17px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg10)","paddingRight":"20px","animationName":""}}}, 
 },
},
tTextCommonx0x2: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"503px","top":"18px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg10)","paddingRight":"20px","animationName":""},
            
            },
 default: { 
 
label:"所属区域",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"503px","top":"18px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg10)","paddingRight":"20px","animationName":""}}}, 
 },
},
tTextCommonx0x3: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"20px","top":"52px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg10)","paddingRight":"20px","animationName":""},
            
            },
 default: { 
 
label:"报警时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"20px","top":"52px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg10)","paddingRight":"20px","animationName":""}}}, 
 },
},
tTextCommonx0x4: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"502px","top":"53px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg10)","paddingRight":"20px","animationName":""},
            
            },
 default: { 
 
label:"报警类型",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"502px","top":"53px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg10)","paddingRight":"20px","animationName":""}}}, 
 },
},
tTextCommonx0x5: {
defaultStyle: {
            default: {"width":"354px","height":"32px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"144px","top":"17px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg15)","paddingRight":"0px","paddingLeft":"20px","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"354px","height":"32px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"144px","top":"17px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg15)","paddingRight":"0px","paddingLeft":"20px","animationName":""}}}, 
 },
},
tTextCommonx0x6: {
defaultStyle: {
            default: {"width":"354px","height":"32px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"626px","top":"18px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg15)","paddingRight":"0px","paddingLeft":"20px","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"354px","height":"32px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"626px","top":"18px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg15)","paddingRight":"0px","paddingLeft":"20px","animationName":""}}}, 
 },
},
tTextCommonx0x7: {
defaultStyle: {
            default: {"width":"354px","height":"32px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"143px","top":"52px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg15)","paddingRight":"0px","paddingLeft":"20px","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"354px","height":"32px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"143px","top":"52px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg15)","paddingRight":"0px","paddingLeft":"20px","animationName":""}}}, 
 },
},
tTextCommonx0x8: {
defaultStyle: {
            default: {"width":"354px","height":"32px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"625px","top":"53px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg15)","paddingRight":"0px","paddingLeft":"20px","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"354px","height":"32px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"32px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"625px","top":"53px","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg15)","paddingRight":"0px","paddingLeft":"20px","animationName":""}}}, 
 },
},
});
const initParams = () => {
const {ALARMNAME,ALARM_TIME,DEVICE_NAME,ALARMID,REGION_NAME} = global.featureData
state.info.ALARMID = ALARMID || ''
state.info.ALARMNAME = ALARMNAME || '-';
state.info.ALARM_TIME = ALARM_TIME || '-';
state.info.DEVICE_NAME = DEVICE_NAME || '-';
state.info.REGION_NAME = REGION_NAME || '-'
apiRegistry.getFileList.request();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getFileList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/waterevaluate/api/components/file/list","method":"get","baseURL":"http://192.168.24.106:10157/","params":{"subBusinessKey":"SPJK","businessKey":"state.info.ALARMID","pageNum":"1","pageSize":"10001"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/api/components/file/list","method":"get","baseURL":"http://192.168.24.106:10157/","params":{"subBusinessKey":"SPJK","businessKey":state.info.ALARMID,"pageNum":"1","pageSize":"10001"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('http://192.168.24.106:10157/-/waterevaluate/api/components/file/list',  {"subBusinessKey":"SPJK","businessKey":state.info.ALARMID,"pageNum":"1","pageSize":"10001"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getFileList'] = res.data;
                
     console.log('fileList', res);
const baseUrl = 'http://192.168.24.106:10157/waterevaluate/api/components/file/download/';
if (res.data.code === 200) {
  state.fileList = res.data.data.map((item) => ({
    ...item,
    // src: baseUrl + item.fileId,
    // src: item.filePath,
  }))
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
                            setPageScale('t-l-c-videoWarningCarouselPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-videoWarningCarouselPop', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initParams();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tSwiperBasex0x0ComputedData = computed(() => _.merge({}, componentState.tSwiperBasex0x0.default, componentState.tSwiperBasex0x0?.[state.screenSize]));

 const tTextCommonx0x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1.default, componentState.tTextCommonx0x1?.[state.screenSize]));

 const tTextCommonx0x2ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2.default, componentState.tTextCommonx0x2?.[state.screenSize]));

 const tTextCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x3.default, componentState.tTextCommonx0x3?.[state.screenSize]));

 const tTextCommonx0x4ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4.default, componentState.tTextCommonx0x4?.[state.screenSize]));

 const tTextCommonx0x5ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x5.default, componentState.tTextCommonx0x5?.[state.screenSize]));

 const tTextCommonx0x6ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x6.default, componentState.tTextCommonx0x6?.[state.screenSize]));

 const tTextCommonx0x7ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x7.default, componentState.tTextCommonx0x7?.[state.screenSize]));

 const tTextCommonx0x8ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x8.default, componentState.tTextCommonx0x8?.[state.screenSize]));

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
tSwiperBasex0x0ComputedData,
tTextCommonx0x1ComputedData,
tTextCommonx0x2ComputedData,
tTextCommonx0x3ComputedData,
tTextCommonx0x4ComputedData,
tTextCommonx0x5ComputedData,
tTextCommonx0x6ComputedData,
tTextCommonx0x7ComputedData,
tTextCommonx0x8ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-videoWarningCarouselPop {
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
width: 1000px;
height: 640px;
background-color: rgba(0,0,0,0);
}
.t-l-c-videoWarningCarouselPop .videoWarningCarouselPop-t-swiper-base-0-0 {
position: absolute !important;
top: 94px;
left: 44px;
width: 916px;
height: 516px;
pointer-events: auto;
}

.t-l-c-videoWarningCarouselPop .videoWarningCarouselPop-t-text-common-0-1 {
position: absolute !important;
top: 17px;
left: 21px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-videoWarningCarouselPop .videoWarningCarouselPop-t-text-common-0-2 {
position: absolute !important;
top: 18px;
left: 503px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-videoWarningCarouselPop .videoWarningCarouselPop-t-text-common-0-3 {
position: absolute !important;
top: 52px;
left: 20px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-videoWarningCarouselPop .videoWarningCarouselPop-t-text-common-0-4 {
position: absolute !important;
top: 53px;
left: 502px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-videoWarningCarouselPop .videoWarningCarouselPop-t-text-common-0-5 {
position: absolute !important;
top: 17px;
left: 144px;
width: 354px;
height: 32px;
pointer-events: auto;
}

.t-l-c-videoWarningCarouselPop .videoWarningCarouselPop-t-text-common-0-6 {
position: absolute !important;
top: 18px;
left: 626px;
width: 354px;
height: 32px;
pointer-events: auto;
}

.t-l-c-videoWarningCarouselPop .videoWarningCarouselPop-t-text-common-0-7 {
position: absolute !important;
top: 52px;
left: 143px;
width: 354px;
height: 32px;
pointer-events: auto;
}

.t-l-c-videoWarningCarouselPop .videoWarningCarouselPop-t-text-common-0-8 {
position: absolute !important;
top: 53px;
left: 625px;
width: 354px;
height: 32px;
pointer-events: auto;
}
</style>
