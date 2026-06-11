window.indicatorStructurePopComponent = {
template: 
`<div id="t-l-c-indicatorStructurePop" class="t-l-c-indicatorStructurePop" >` +
`<t-rect id="t-rect-3c13.6e224e776" class="indicatorStructurePop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-39ea.51f8eb66d" class="indicatorStructurePop-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle" @mouseout="onmouseout1739345365135" @click="onclick1739960380902">` +
`</t-rect>` +
`<t-rect id="t-rect-5094.9a9212dbc" class="indicatorStructurePop-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle" @mouseover="onmouseover1739345261051">` +
`</t-rect>` +
`<t-text id="t-text-0849.df06c90a6" class="indicatorStructurePop-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-component id="t-component-4bba.865e9bace" class="indicatorStructurePop-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :loading="tComponentx0x4ComputedData.loading" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName" :page-id="tComponentx0x4ComputedData.pageId" :page-code="tComponentx0x4ComputedData.pageCode">` +
`</t-component>` +
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
   url: "",
   timeText: "",
   chartData: [],
   mainList: {"dqList":{"list1":[]},"shjList":{"list1":[],"list2":[],"list3":[],"list4":[]},"trList":{"list1":[],"list2":[]},"hyList":{"list1":[],"list2":[]},"zrstList":{"list1":[],"list2":[]},"wryList":{"list1":[],"list2":[],"list3":[],"list4":[]}},
   list8: [],
   list7: [],
   list6: [],
   list5: [],
   list4: [],
   list3: [],
   list2: [],
   list1: [],
   time: "2025-01-01",
   isLoading: "加载中...",
   isChar: false,
   xData: [],
   callsData: [],
   provideData: [],
   START_TIME: "",
   END_TIME: "",
   isClose: false,
   charOption: "",
   timeSelect: [],
   SOURCE: "",
   BUSINESS_TYPE: "",
   DATA_TYPE: "",
   sectionData: [],
   typeData: [],
   dateData: [],
   pageInfo: {"pageNum":1,"pageSize":5,"total":0,"pages":0},
   tableData: [],
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
            default: {"width":"1680px","height":"915px","position":"unset","left":"120px","top":"83px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1680px","height":"915px","position":"unset","left":"120px","top":"83px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"83px","animationName":"","cursor":"pointer","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"83px","animationName":"","cursor":"pointer","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-mr)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"83px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-mr)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"83px","cursor":"pointer"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"108px","left":"198px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"},
            
            },
 default: { 
 
label:"指标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"108px","left":"198px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"}}}, 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"1600px","height":"780px","margin":"0 auto","position":"unset","left":"160px","top":"175px"},
            
            },
 default: { 
 
name:"indicatorStructureContentComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"1600px","height":"780px","margin":"0 auto","position":"unset","left":"160px","top":"175px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"indicatorStructureContentComponent",
pageId:"c8b650fbeb1e450589a5a62bc945009b",
pageCode:"indicatorStructureContent", 
 },
},
});
const setOption = () => {
let textColor = getCssVariable('--skin-font-color-80');
/**
 * 处理原始数据并转换为ECharts堆叠柱状图所需格式
 */
function processChartData(rawData) {
  // 验证输入数据
  if (!Array.isArray(rawData) || rawData.length === 0) {
    console.error('无效的原始数据格式');
    return { categories: [], matchData: [], notMatchData: [] };
  }

  // 提取分类和数据
  const categories = [];
  const matchData = [];
  const notMatchData = [];

  // 遍历原始数据并转换格式
  rawData.forEach(item => {
    // 提取分类名称
    categories.push(item.main_type);

    // 转换字符串数值为数字类型并处理可能的空值
    matchData.push(parseInt(item.match_num || '0', 10));
    notMatchData.push(parseInt(item.not_match_num || '0', 10));
  });

  return {
    categories: categories,
    matchData: matchData,
    notMatchData: notMatchData
  };
}

const rawData = state.chartData;
// 调用数据处理函数
const { categories, matchData, notMatchData } = processChartData(rawData);

state.charOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' }
  },
  legend: {
    data: ['符合污染源要求数量', '不符合污染源要求数量'],
    textStyle: {
      color: textColor,
    },
    top: 0
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: categories,
    color: textColor,
    axisLabel: {
      interval: 0,
      rotate: 0,
      color: textColor,
      formatter: function (params) {
        // 自动换行逻辑，每8个字符换一行
        const newParamsName = [];
        const paramsNameNumber = params.length;
        const provideNumber = 8; // 每行显示的字符数
        const rowNumber = Math.ceil(paramsNameNumber / provideNumber);

        if (paramsNameNumber > provideNumber) {
          for (let p = 0; p < rowNumber; p++) {
            const start = p * provideNumber;
            const end = start + provideNumber;
            newParamsName.push(params.substring(start, end));
          }
          return newParamsName.join('\n');
        } else {
          return params;
        }
      },
      width: 80, // 每个标签的宽度
      lineHeight: 20 // 行高，控制行间距
    }
  },
  yAxis: {
    type: 'value',
    name: '条',
    color: textColor,
    nameLocation: 'end',
    nameGap: 20,
    nameTextStyle: {
      color: textColor, // 单位文字颜色
      align: 'center', // 文字对齐方式
      padding: [0, 0, 0, -20] // 调整位置，避免与轴线重叠
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        color: 'rgba(255, 255, 255, 0.3)' // 网格线颜色
      }
    },
    axisLabel: {
      color: textColor,
    }
  },
  series: [
    {
      name: '符合污染源要求数量',
      type: 'bar',
      stack: 'total',
      emphasis: { focus: 'series' },
      barWidth: 12,
      data: matchData,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(91, 255, 94, 0.5)' },
          { offset: 1, color: 'rgba(91, 255, 94, 0)' }
        ]),
        borderColor: '#5BFF5E', // 柱子边框颜色
        borderWidth: 1
      }
    },
    {
      name: '不符合污染源要求数量',
      type: 'bar',
      stack: 'total',
      barWidth: 12,
      emphasis: { focus: 'series' },
      data: notMatchData,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(255, 49, 49, 0.5)' },
          { offset: 1, color: 'rgba(255, 49, 49, 0)' }
        ]),
        borderColor: '#FF3131', // 柱子边框颜色
        borderWidth: 1
      }
    }
  ]
};

console.log(state.charOption);
};
const setTimeSelect = (data) => {
state.START_TIME = data[0];
state.END_TIME = data[1];
};
const clearLoop = () => {
if (global.loopId) {
  clearInterval(global.loopId);
}
};
const setUrl = () => {
state.url = `${global.lxsServiceBaseUrl}/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/sourceControlContent`;
};
const onmouseout1739345365135 = () => {

// 显示元素并加动画
document.getElementById('t-rect-5094.9a9212dbc').style.display = 'block';
runAnimation('t-rect-5094.9a9212dbc', [""]);

// 隐藏元素并加动画
runAnimation('t-rect-39ea.51f8eb66d', [""], 'none');
};
const onclick1739960380902 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'showPop',
                    value:false,
                    data: {
                      showPop: false
                    },
                  });
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'isSetLoop',
                    value:false,
                    data: {
                      isSetLoop: false
                    },
                  });
// 执行自定义方法
clearLoop("","","");
};
const onmouseover1739345261051 = () => {

// 显示元素并加动画
document.getElementById('t-rect-39ea.51f8eb66d').style.display = 'block';
runAnimation('t-rect-39ea.51f8eb66d', [""]);

// 隐藏元素并加动画
runAnimation('t-rect-5094.9a9212dbc', [""], 'none');
};
 function handleWindowResize() {
                            setPageScale('t-l-c-indicatorStructurePop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-indicatorStructurePop', global.appScaleMode, 'normal');
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

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tTextx0x3ComputedData,
tComponentx0x4ComputedData,
onmouseout1739345365135,
onclick1739960380902,
onmouseover1739345261051,
};
},
};