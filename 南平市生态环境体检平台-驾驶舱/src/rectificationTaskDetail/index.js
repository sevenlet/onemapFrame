window.rectificationTaskDetailComponent = {
template: 
`<div id="t-l-c-rectificationTaskDetail" class="t-l-c-rectificationTaskDetail" >` +
`<t-rect id="t-rect-2e88.9a8a1ed2b" class="rectificationTaskDetail-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-9ee1.ec8130f44" class="rectificationTaskDetail-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-03db.65ad46ad" class="rectificationTaskDetail-t-text-0-2"  :label="replaceCssVariables(filterData(state.dialogTitle, componentPropBindingMap?.['t-text-03db.65ad46ad']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-c1ee.53b9f5676" class="rectificationTaskDetail-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-radio-menu id="t-radio-menu-8350.2304b0498" class="rectificationTaskDetail-t-radio-menu-0-4"  :selected-data="replaceCssVariables(filterData(state.activeTab, componentPropBindingMap?.['t-radio-menu-8350.2304b0498']['selectedData'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data="tRadioMenux0x4ComputedData.data" :alias="tRadioMenux0x4ComputedData.alias" :c-style="tRadioMenux0x4ComputedData.cStyle" @item-click="onitemClick1768888771596_0_0">` +
`</t-radio-menu>` +
`<t-component id="t-component-2e72.7f317355c" class="rectificationTaskDetail-t-component-0-5"  :name="replaceCssVariables(filterData(state.activeTab, componentPropBindingMap?.['t-component-2e72.7f317355c']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :loading="tComponentx0x5ComputedData.loading" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="replaceCssVariables(filterData(state.activeTab, componentPropBindingMap?.['t-component-2e72.7f317355c']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :page-id="tComponentx0x5ComputedData.pageId" :page-code="tComponentx0x5ComputedData.pageCode">` +
`</t-component>` +
`<t-rect id="t-rect-a6d7.fa8048f74" class="rectificationTaskDetail-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle" @click="onclick1768962507839">` +
`</t-rect>` +
`<t-button-back v-if="state.isBtn === true" id="t-button-back-2c6b.4ea36612c" class="rectificationTaskDetail-t-button-back-0-7"  :label="tButtonBackx0x7ComputedData.label" :round="tButtonBackx0x7ComputedData.round" :c-style="tButtonBackx0x7ComputedData.cStyle" @click="onclick1769504515138">` +
`</t-button-back>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-2e88.9a8a1ed2b":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-9ee1.ec8130f44":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-03db.65ad46ad":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-c1ee.53b9f5676":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-radio-menu-8350.2304b0498":{"attributeName":"tRadioMenux0x4","selectedData":{"filters":[]},"data":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-component-2e72.7f317355c":{"attributeName":"tComponentx0x5","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-rect-a6d7.fa8048f74":{"attributeName":"tRectx0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-button-back-2c6b.4ea36612c":{"attributeName":"tButtonBackx0x7","label":{"filters":[]},"round":{"filters":[]},"cStyle":{"filters":[]}}};
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
   isBtn: true,
   dialogTitle: "整改任务详情",
   activeTab: "rectificationTaskBaseInfoComponent",
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
tRectx0x0: {
defaultStyle: {
            default: {"width":"1000px","height":"760px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"0px","top":"0px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"760px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"0px","top":"0px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1000px","height":"46px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"0px","top":"1px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"46px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"0px","top":"1px","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"589px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"20px","fontFamily":"方正综艺","top":"13px","left":"31px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"整改任务详情",
editable:false,
cStyle:{"wrapper":{"default":{"width":"589px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"20px","fontFamily":"方正综艺","top":"13px","left":"31px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"130px","height":"689px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"15px","top":"59px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"var(--business-show-bg30)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"689px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"15px","top":"59px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"var(--business-show-bg30)"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"emptyText":{"default":{"backgroundColor":"var(--business-show-bg30)"}}}, 
 },
},
tRadioMenux0x4: {
defaultStyle: {
            default: {"width":"109px","height":"670px","top":"67px","left":"25px","position":"unset","animationName":""},
            
            },
 default: { 
 
selectedData:"",
data:[{"label":"基本信息","name":"rectificationTaskBaseInfoComponent","children":[]},{"label":"整改进展","name":"rectificationTaskProgressComponent","children":[]}],
alias:{"date":"name","children":"children"},
cStyle:{"wrapper":{"default":{"width":"109px","height":"670px","top":"67px","left":"25px","position":"unset","animationName":""}},"menuItem":{"default":{"backgroundImage":"","height":"34px","paddingLeft":"0px","paddingRight":"0px","textAlign":"center","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","display":"flex","alignItems":"center","justifyContent":"center","marginBottom":"15px"},"active":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":"var(--business-tab-third-active-border)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px","box-shadow":"rgba(255, 206, 109, 0.49) 0px 0px 18px 0px inset","background":"radial-gradient(27% 27% at 50% 100%, rgba(255, 236, 159, 0.35) 0%, rgba(255, 236, 159, 0.05) 100%), rgba(0, 0, 0, 0.2)"}},"menuItemText":{"default":{"fontSize":"14px","textAlign":"center","color":"var(--business-text-avianize)"},"active":{"color":"var(--business-tab-third-active-border)","fontSize":"14px"}},"menuItemArrow":{"default":{"backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/4f07d5609ec0493f9a82aacc74b59817.svg)","width":"16px","height":"16px","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"subMenuItem":{"default":{"height":"34px","paddingLeft":"0px","fontSize":"14px","background":"linear-gradient(270deg, rgba(51,149,255,0.00) 0%, rgba(51,149,255,0.26) 100%)","textAlign":"center","color":"var(--business-text-avianize)","backgroundImage":"linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","backgroundColor":"","display":"flex","alignItems":"center","justifyContent":"center","paddingRight":"0px"},"active":{"background":"linear-gradient(270deg, rgba(51,149,255,0.00) 0%, rgba(0,255,247,0.62) 100%)","backgroundColor":"","backgroundImage":"linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","color":"var(--business-tab-third-active-border)","fontSize":"14px"}},"menuCollapse":{"default":{"width":"auto","height":"auto","marginBottom":"10px"}},"itemWrapper":{"active":{"-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","width":"100px"}},"menuContent":{"default":{"paddingTop":"0px","paddingBottom":"0px","marginTop":"-10px"}}}, 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"832px","height":"686px","margin":"0 auto","position":"unset","left":"158px","top":"60px"},
            
            },
 default: { 
 
name:"rectificationTaskBaseInfoComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"832px","height":"686px","margin":"0 auto","position":"unset","left":"158px","top":"60px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/rectificationTaskBaseInfo",
componentName:"rectificationTaskBaseInfoComponent",
pageId:"",
pageCode:"", 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none var(--business-btn-default)","borderTop":"1px none var(--business-btn-default)","borderRight":"1px none var(--business-btn-default)","borderBottom":"1px none var(--business-btn-default)","position":"unset","left":"956px","top":"10px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"var(--t-point-pop-close-btn)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none var(--business-btn-default)","borderTop":"1px none var(--business-btn-default)","borderRight":"1px none var(--business-btn-default)","borderBottom":"1px none var(--business-btn-default)","position":"unset","left":"956px","top":"10px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"var(--t-point-pop-close-btn)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}},"numBox":{"default":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tButtonBackx0x7: {
defaultStyle: {
            default: {"width":"60px","height":"28px","background":"var(--t-brand8)","border":"auto !important","borderTop":"1px none var(--t-brand8)","borderLeft":"1px none var(--t-brand8)","borderBottom":"1px none var(--t-brand8)","borderRight":"1px none var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","position":"unset","left":"880px","top":"8px","backgroundColor":"var(--business-show-bg30)"},
            
            },
 default: { 
 
label:"返回",
round:false,
cStyle:{"wrapper":{"default":{"width":"60px","height":"28px","background":"var(--t-brand8)","border":"auto !important","borderTop":"1px none var(--t-brand8)","borderLeft":"1px none var(--t-brand8)","borderBottom":"1px none var(--t-brand8)","borderRight":"1px none var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","position":"unset","left":"880px","top":"8px","backgroundColor":"var(--business-show-bg30)"},"hover":{"background":"var(--t-brand8)","border":"auto !important","borderTop":"1px none var(--t-brand8)","borderLeft":"1px none var(--t-brand8)","borderBottom":"1px none var(--t-brand8)","borderRight":"1px none var(--t-brand8)","backgroundColor":"var(--business-show-bg30)"},"active":{"background":"rgb(0,52,181)","border":"auto !important","borderTop":"1px none rgb(0,52,181)","borderLeft":"1px none rgb(0,52,181)","borderBottom":"1px none rgb(0,52,181)","borderRight":"1px none rgb(0,52,181)","backgroundColor":"var(--business-show-bg30)"},"focus":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"text":{"default":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 1)","background":"unset","backgroundClip":"unset","display":"block !important","width":"100%","height":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"active":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 0.9)","background":"unset","backgroundClip":"unset"},"hover":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 0.9)","background":"unset","backgroundClip":"unset"},"disabled":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 1)","background":"unset","backgroundClip":"unset"}}}, 
 },
},
});
const initData = () => {
const { YEAR, RESPONSIBLE_UNIT, type } = global.supervisorPopParams
state.isBtn = global.supervisorPopParams.type === 'centerThird';
};
const handleClose = () => {
global.supervisorPopName = 'superviseIssuesTableComponent'
};
const handleBack = () => {
global.supervisorPopName = 'superviseIssuesStatisticsComponent';
};
const onitemClick1768888771596_0_0 = (data) => {
// 设置变量值
state.activeTab = data.date;
};
const onclick1768962507839 = () => {
// 执行自定义方法
handleClose();
};
const onclick1769504515138 = () => {
// 执行自定义方法
handleBack();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getCockpitDialogContentList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"RESPONSIBLE_UNIT":"state.RESPONSIBLE_UNIT","PROGRESS":"global.dashboardGlobalVariables.responsibilitySelectedStatus","YEAR":"state.selectYear","interfaceId":"be26dedf23f367bc639533d6bc8fc4d6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"RESPONSIBLE_UNIT":state.RESPONSIBLE_UNIT,"PROGRESS":global.dashboardGlobalVariables.responsibilitySelectedStatus,"YEAR":state.selectYear,"interfaceId":"be26dedf23f367bc639533d6bc8fc4d6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"RESPONSIBLE_UNIT":state.RESPONSIBLE_UNIT,"PROGRESS":global.dashboardGlobalVariables.responsibilitySelectedStatus,"YEAR":state.selectYear,"interfaceId":"be26dedf23f367bc639533d6bc8fc4d6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCockpitDialogContentList'] = res.data;
                
     state.tableList = [];
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  // 定义关系映射
  const progressMap = {
    '1': '已完成',
    '2': '序时任务', 
    '3': '滞后任务'
  };
  
  // 处理数据，添加映射字段
  state.tableList = res.data.data.map((item,index) => {
    return {
      ...item,
      progress_evaluation_value: progressMap[item.progress_evaluation_code] || '-',
      sort_num:index+1,
      operation:"detail"
    };
  });
} else {
  state.tableList = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableList = [];
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [global.dashboardGlobalVariables.responsibilitySelectedStatus], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCockpitDialogContentList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-rectificationTaskDetail', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-rectificationTaskDetail', global.appScaleMode, 'normal');
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

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRadioMenux0x4ComputedData = computed(() => _.merge({}, componentState.tRadioMenux0x4.default, componentState.tRadioMenux0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tButtonBackx0x7ComputedData = computed(() => _.merge({}, componentState.tButtonBackx0x7.default, componentState.tButtonBackx0x7?.[state.screenSize]));

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
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tRadioMenux0x4ComputedData,
tComponentx0x5ComputedData,
tRectx0x6ComputedData,
tButtonBackx0x7ComputedData,
onitemClick1768888771596_0_0,
onclick1768962507839,
onclick1769504515138,
};
},
};