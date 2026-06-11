window.sampleSquareBaseInfoComponent = {
template: 
`<div id="t-l-c-sampleSquareBaseInfo" class="t-l-c-sampleSquareBaseInfo" >` +
`<t-list-card id="t-list-card-dd26.ccf66dde6" class="sampleSquareBaseInfo-t-list-card-0-0"  :data="replaceCssVariables(filterData(state.featureInfoData, componentPropBindingMap?.['t-list-card-dd26.ccf66dde6']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x0ComputedData.spacingX" :col="tListCardx0x0ComputedData.col" :direction="tListCardx0x0ComputedData.direction" :exchange-order="tListCardx0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0ComputedData.unitBreak" :key-field="tListCardx0x0ComputedData.keyField" :active-key-field="tListCardx0x0ComputedData.activeKeyField" :active="tListCardx0x0ComputedData.active" :c-style="tListCardx0x0ComputedData.cStyle">` +
`</t-list-card>` +
`<t-component id="t-component-570e.6a3d4a6a6" class="sampleSquareBaseInfo-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode">` +
`</t-component>` +
`<t-text id="t-text-681f.d6d360e5e" class="sampleSquareBaseInfo-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-list-card id="t-list-card-8de3.e3bd8e7b4" class="sampleSquareBaseInfo-t-list-card-0-3"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-8de3.e3bd8e7b4']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x3ComputedData.spacingX" :col="tListCardx0x3ComputedData.col" :direction="tListCardx0x3ComputedData.direction" :exchange-order="tListCardx0x3ComputedData.exchangeOrder" :unit-break="tListCardx0x3ComputedData.unitBreak" :key-field="tListCardx0x3ComputedData.keyField" :active-key-field="tListCardx0x3ComputedData.activeKeyField" :active="tListCardx0x3ComputedData.active" :c-style="tListCardx0x3ComputedData.cStyle">` +
`</t-list-card>` +
`<t-component id="t-component-b8d0.1425a1628" class="sampleSquareBaseInfo-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName" :page-id="tComponentx0x4ComputedData.pageId" :page-code="tComponentx0x4ComputedData.pageCode">` +
`</t-component>` +
`<t-text id="t-text-5bf4.176053b78" class="sampleSquareBaseInfo-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-list-card-dd26.ccf66dde6":{"attributeName":"tListCardx0x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-570e.6a3d4a6a6":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-681f.d6d360e5e":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-8de3.e3bd8e7b4":{"attributeName":"tListCardx0x3","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-b8d0.1425a1628":{"attributeName":"tComponentx0x4","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-5bf4.176053b78":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
// 页面内注入全局变量和事件
const rootData = inject('root');
const global = reactive({
...toRefs(rootData)
});
// 路由
const route = useRoute();
// 创建 DOM 引用

// 当前页面使用的变量
const state = Vue.reactive({
   screenSize: "",
   pointCode: "",
   year: "",
   featureInfoData: [{"title":"地表凋落物平均厚度（cm）","num":"-"},{"title":"地表凋落物鲜重（g/m²）","num":"-"},{"title":"地表凋落物干重（g/m²）","num":"-"},{"title":"点位1郁闭度（%）","num":"-"},{"title":"点位2郁闭度（%）","num":"-"},{"title":"点位3郁闭度（%）","num":"-"},{"title":"点位4郁闭度（%）","num":"-"},{"title":"平均郁闭度（%）","num":"-"}],
   baseInfoData: [{"title":"年份","num":"-"},{"title":"日期","num":"-"},{"title":"样方编码","num":"-"},{"title":"样地编码","num":"-"},{"title":"监测人","num":"-"},{"title":"记录人","num":"-"},{"title":"样方中心点经度","num":"-"},{"title":"样方中心点纬度","num":"-"},{"title":"样地面积（长）(m²)","num":"-"},{"title":"样地面积（宽）(m²)","num":"-"}],
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
const componentState = Vue.reactive({
tListCardx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"150px","position":"unset","left":"2px","top":"301px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"地表凋落物平均厚度（cm）","num":"-"},{"title":"地表凋落物鲜重（g/m²）","num":"-"},{"title":"地表凋落物干重（g/m²）","num":"-"},{"title":"点位1郁闭度（%）","num":"-"},{"title":"点位2郁闭度（%）","num":"-"},{"title":"点位3郁闭度（%）","num":"-"},{"title":"点位4郁闭度（%）","num":"-"},{"title":"平均郁闭度（%）","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"150px","position":"unset","left":"2px","top":"301px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible","height":"auto"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"40%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":""}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":"","alignItems":"center"}},"num":{"default":{"fontSize":"var(--text-size-14)","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"1px","top":"264px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"1px","top":"264px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"46px","top":"268px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"特征信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"46px","top":"268px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
tListCardx0x3: {
defaultStyle: {
            default: {"width":"100%","height":"190px","position":"unset","left":"0px","top":"41px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"年份","num":"-"},{"title":"日期","num":"-"},{"title":"样方编码","num":"-"},{"title":"样地编码","num":"-"},{"title":"监测人","num":"-"},{"title":"记录人","num":"-"},{"title":"样方中心点经度","num":"-"},{"title":"样方中心点纬度","num":"-"},{"title":"样地面积（长）(m²)","num":"-"},{"title":"样地面积（宽）(m²)","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"190px","position":"unset","left":"0px","top":"41px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"40%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":""}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":"","alignItems":"center"}},"num":{"default":{"fontSize":"var(--text-size-14)","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"45px","top":"4px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"基本信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"45px","top":"4px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
});
const initPageData = () => {
// 处理参数
// state.monitorTime = global.businessDialog.dialogParmas.monitorTime;
if(!global.samplePlotGlobalVariables.isDialog) {
state.year = global.businessDialog.dialogParmas.year;
state.pointCode = global.businessDialog.dialogParmas.point_code || global.businessDialog.dialogParmas.pointCode;

}else {
  state.year = global.samplePlotGlobalVariables.sampleSquare.year
state.pointCode = global.samplePlotGlobalVariables.sampleSquare.point_code || global.businessDialog.dialogParmas.sampleSquare.pointCode;

}


// 获取基本信息接口
apiRegistry.getBaseInfo.request();

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
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","YEAR":"state.year","interfaceId":"015559621ce5b8e983d856d063e9653e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"YEAR":state.year,"interfaceId":"015559621ce5b8e983d856d063e9653e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"YEAR":state.year,"interfaceId":"015559621ce5b8e983d856d063e9653e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     // console.log(res);
const { data } = res;
if(data.head.statusCode === '200' && data.data){
  // 基本信息
  // 年份
  state.baseInfoData[0].num = data.data?.year || '-';
  // 日期
  state.baseInfoData[1].num = data.data?.create_time || '-';
  // 样方编码
  state.baseInfoData[2].num = data.data?.point_code || '-';
  global.samplePlotGlobalVariables.baseinfoCode.yfCode = data.data?.point_code
  // 样地编号
  state.baseInfoData[3].num = data.data?.plot_code || '-';
  global.samplePlotGlobalVariables.baseinfoCode.ydCode = data.data?.plot_code

  // 监测人
  state.baseInfoData[4].num = data.data?.record_person || '-';
  // 记录人
  state.baseInfoData[5].num = data.data?.create_user || '-';
  // 样方中心点经度
  state.baseInfoData[6].num = data.data?.longitude || '-';
  // 样方中心点纬度
  state.baseInfoData[7].num = data.data?.latitude || '-';
  // 样地面积（长）（㎡）
  state.baseInfoData[8].num = data.data?.legth || '-';
  // 样地面积（宽）（㎡）
  state.baseInfoData[9].num = data.data?.widht || '-';

  // 特征信息
  // 地表凋落物平均厚度（cm）
  state.featureInfoData[0].num = data.data?.sureface_height || '-';
  // 地表凋落物鲜重（g/m²）
  state.featureInfoData[1].num = data.data?.sureface_dlwxz || '-';
  // 地表凋落物干重（g/m²）
  state.featureInfoData[2].num = data.data?.sureface_dlwgz || '-';
  // 地表特征砾石
  // state.featureInfoData[3].num = '待定' || '-';
  // 点位1郁闭度（%）
  state.featureInfoData[3].num = data.data?.ybd1 || '-';
  // 点位2郁闭度（%）
  state.featureInfoData[4].num = data.data?.ybd2 || '-';
  // 点位3郁闭度（%）
  state.featureInfoData[5].num = data.data?.ybd3 || '-';
  // 点位4郁闭度（%）
  state.featureInfoData[6].num = data.data?.ybd4 || '-';
  // 平均郁闭度（%）
  state.featureInfoData[7].num = data.data?.ybd_avg || '-';
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
                            setPageScale('t-l-c-sampleSquareBaseInfo', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-sampleSquareBaseInfo', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initPageData();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardx0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0.default, componentState.tListCardx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tListCardx0x3ComputedData = computed(() => _.merge({}, componentState.tListCardx0x3.default, componentState.tListCardx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

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
tComponentx0x1ComputedData,
tTextx0x2ComputedData,
tListCardx0x3ComputedData,
tComponentx0x4ComputedData,
tTextx0x5ComputedData,
};
},
};