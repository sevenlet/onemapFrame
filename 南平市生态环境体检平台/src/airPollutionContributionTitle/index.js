window.airPollutionContributionTitleComponent = {
template: 
`<div id="t-l-c-airPollutionContributionTitle" class="t-l-c-airPollutionContributionTitle" >` +
`<t-component id="t-component-6f3b.f3ecc4cb7" class="airPollutionContributionTitle-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-4f12.f427f5fe7" class="airPollutionContributionTitle-t-text-0-1"  :label="state.titleText" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-fd83.ca236cbcf" class="airPollutionContributionTitle-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle" @click="onclick1734435804241">` +
`</t-text>` +
`</div>` +
'',
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
const state = Vue.reactive({
   screenSize: "",
   analysisTimaRangeData: [],
   timeType: "",
   titleText: "国控站贡献",
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"285px","height":"20px","color":"var(--t-white)","fontFamily":"方正综艺","fontSize":"17px","position":"unset","left":"34px","top":"6px","animationName":"","fontWeight":"400"},
            
            },
 default: { 
 
label:"国控站贡献",
editable:false,
cStyle:{"wrapper":{"default":{"width":"285px","height":"20px","color":"var(--t-white)","fontFamily":"方正综艺","fontSize":"17px","position":"unset","left":"34px","top":"6px","animationName":"","fontWeight":"400"},"hover":{"fontSize":"17px"},"focus":{"fontSize":"17px"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"80px","height":"20px","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","fontFamily":"微软雅黑","lineHeight":"20px","textAlign":"right","backgroundImage":"var(--business-right-arrow)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"14px 14px","-webkit-mask-size":"","backgroundPosition":"100% 50%","-webkit-mask-position":"","paddingRight":"18px","position":"unset","left":"320px","top":"7px","cursor":"pointer"},
            
            },
 default: { 
 
label:"查看详情",
editable:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"20px","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","fontFamily":"微软雅黑","lineHeight":"20px","textAlign":"right","backgroundImage":"var(--business-right-arrow)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"14px 14px","-webkit-mask-size":"","backgroundPosition":"100% 50%","-webkit-mask-position":"","paddingRight":"18px","position":"unset","left":"320px","top":"7px","cursor":"pointer"}}}, 
 },
},
});
const sendParams = () => {
let timeType = state.timeType;
let analysisTimaRangeData = state.analysisTimaRangeData;
rootData.rootEmit(
  'rootData:change',
  {
    key: 'businessDialog.dialogParmas',
    value: {
      timeType,
      analysisTimaRangeData
    },
    data: {
      businessDialog: {
        dialogParmas: {
          timeType,
          analysisTimaRangeData
        }
      }
    },
  });

};
const getProvider = () => {
const rootData = inject('airPollutionContentState');

watch(() => rootData, () => {
  state.timeType = rootData.timeType;
  state.analysisTimaRangeData = rootData.analysisTimaRangeData;
},
  {
    deep: true
  }
);
};
const watchValues = () => {
// 行政区选中镇街时，改变标题
watch(() => global.regionaQuery.paramsRegionType, (newVal) => {
  state.titleText = global.regionaQuery.businessRegionName + (newVal === 'street' ? '站点贡献' : '国控站贡献');
},
{
  immediate: true,
}
);
};
const onclick1734435804241 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'airPollutionPointIndexStatusComponent',
                    data: {
                      businessDialog:{dialogName: 'airPollutionPointIndexStatusComponent'}
                    },
                  });
// 执行自定义方法
sendParams();
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airPollutionContributionTitle', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
watchValues();
onMounted(() => {
setPageScale('t-l-c-airPollutionContributionTitle', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

return {
global,
state,
componentState,
tComponentx0x0ComputedData,
tTextx0x1ComputedData,
tTextx0x2ComputedData,
onclick1734435804241,
};
},
};