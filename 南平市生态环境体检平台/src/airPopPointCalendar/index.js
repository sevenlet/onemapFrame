window.airPopPointCalendarComponent = {
template: 
`<div id="t-l-c-airPopPointCalendar" class="t-l-c-airPopPointCalendar" >` +
`<t-row id="t-row-2234.011cd8dbc" class="airPopPointCalendar-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align">` +
`<t-col id="t-col-51fa.818e52a92" class="airPopPointCalendar-t-col-0-1-0"  :span="tColx0x1x0ComputedData.span" :offset="tColx0x1x0ComputedData.offset" :push="tColx0x1x0ComputedData.push" :pull="tColx0x1x0ComputedData.pull" :c-style="tColx0x1x0ComputedData.cStyle">` +
`<t-tabs-base id="t-tabs-base-b7df.d15826e42" class="airPopPointCalendar-t-tabs-base-0-1-0-0"  :data="replaceCssVariables(filterData(state.polluteList, componentPropBindingMap?.['t-tabs-base-b7df.d15826e42']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x1x0x0ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.polluteActive, componentPropBindingMap?.['t-tabs-base-b7df.d15826e42']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x1x0x0ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x1x0x0ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x1x0x0ComputedData.alias" :c-style="tTabsBasex0x1x0x0ComputedData.cStyle" @tab-click="ontabClick1736921718330">` +
`</t-tabs-base>` +
`</t-col>` +
`<t-col id="t-col-2ec2.b14f8aa68" class="airPopPointCalendar-t-col-0-1-4"  :span="tColx0x1x4ComputedData.span" :offset="tColx0x1x4ComputedData.offset" :push="tColx0x1x4ComputedData.push" :pull="tColx0x1x4ComputedData.pull" :c-style="tColx0x1x4ComputedData.cStyle">` +
`<t-chart-design id="t-chart-design-8350.5c80b7ad8" class="airPopPointCalendar-t-chart-design-0-1-4-0"  :empty-img="tChartDesignx0x1x4x0ComputedData.emptyImg" :c-style="tChartDesignx0x1x4x0ComputedData.cStyle" :options="replaceCssVariables(filterData(state.chartOption, componentPropBindingMap?.['t-chart-design-8350.5c80b7ad8']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-chart-design>` +
`</t-col>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-tabs-base-c335.ddc567d3a":{"attributeName":"tTabsBasex0x0"},"t-row-2234.011cd8dbc":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-51fa.818e52a92":{"attributeName":"tColx0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-b7df.d15826e42":{"attributeName":"tTabsBasex0x1x0x0","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-col-64eb.b0b12a01e":{"attributeName":"tColx0x1x1"},"t-col-ef7d.46619cc2f":{"attributeName":"tColx0x1x2"},"t-col-d122.8e2bd50ea":{"attributeName":"tColx0x1x3"},"t-col-2ec2.b14f8aa68":{"attributeName":"tColx0x1x4","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-8350.5c80b7ad8":{"attributeName":"tChartDesignx0x1x4x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}}};
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
   airPointState: {},
   calendarWidth: "",
   DISTRICT_CODE: "",
   PROVINCE_CODE: "",
   REGION_CODE: "",
   nextYear: "2026",
   selectTime: "2025",
   prevYear: "2024",
   parentCode: "350000000000",
   regionList: [],
   districtCode: "",
   provinceCode: "",
   parentRegionCode: "",
   regionCode: "",
   pointType: "",
   pointCode: "",
   year: "",
   renderChartData: [],
   tableResult: [],
   polluteActive: "AQI",
   polluteList: [],
   POINT_CODE: "",
   pointList: [],
   chartOption: {},
   isShowTable: true,
   dialogParmas: {"maxTimeValue":""},
   tableData: [],
   pointNameList: [],
   REGION_TYPE: "",
   type: "year",
   date: "",
   stateList: [{"name":"优","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"25PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","backgroundImage":"","backgroundSize":"100%","background":"#00e400","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"良","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"25PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#f9d000","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"轻度污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"25PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#FF7E00","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"中度污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"25PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#FF0000","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"重度污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"25PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#c500f4","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"严重污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"25PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#8c0024","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"无","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"25PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#f2f2f2","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}}],
   tableColumn: [],
   stateListForDay: [{"name":"优","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","backgroundImage":"","backgroundSize":"100%","background":"#00e400","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"良","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#f9d000","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"轻度污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#FF7E00","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"中度污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#FF0000","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"重度污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#c500f4","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"严重污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#8c0024","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"无","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#f2f2f2","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}}],
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
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"0px","gap":"0","overflow":"auto"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"0px","gap":"0","overflow":"auto"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x0: {
defaultStyle: {
            default: {"width":"auto","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","animationName":"","left":"187px","top":"282px","paddingLeft":"unset"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","animationName":"","left":"187px","top":"282px","paddingLeft":"unset"}}}, 
 },
},
tTabsBasex0x1x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"0px","top":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
data:[],
space:1,
selectedTabVal:"AQI",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"name","disabled":false},
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"0px","top":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"width":"70px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important","overflow":"hidden"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","letterSpacing":"unset","lineHeight":"14px","fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tColx0x1x4: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 39px)","display":"flex","justifyContent":"center","alignItems":"start","overflow":"auto","paddingTop":"14px","overflow-x":"hidden","--scrollbar-thumb-color":"rgba(255, 255, 255, 0.6)","--scrollbar-track-color":"transparent","--scrollbar-width":"8px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 39px)","display":"flex","justifyContent":"center","alignItems":"start","overflow":"auto","paddingTop":"14px","overflow-x":"hidden","--scrollbar-thumb-color":"rgba(255, 255, 255, 0.6)","--scrollbar-track-color":"transparent","--scrollbar-width":"8px"}}}, 
 },
},
tChartDesignx0x1x4x0: {
defaultStyle: {
            default: {"height":"auto","width":"100%","position":"unset","left":"0px","top":"0","overflow":"hidden","paddingLeft":"0px"},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"auto","width":"100%","position":"unset","left":"0px","top":"0","overflow":"hidden","paddingLeft":"0px"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
});
const getCalendarData = () => {

const getData = async () => {
  handleParams();
  if (state.type === 'year') {
    // 时间未选不请求
    if (state.date) {
      if (state.REGION_TYPE === 'province' || state.REGION_TYPE === 'city') {
        await apiRegistry.getRegion.request();
      } else if (state.REGION_TYPE === 'point') {
        await apiRegistry.getPointName.request();
      }
      await apiRegistry.getChartData.request();
    }
  } else {
    await apiRegistry.getPointName.request();
    await apiRegistry.getCalendarList.request();
  }
}
getData();

};
const getAQILevel = (AQI) => {
let level = '';
if (AQI <= 50) {
   level = '优';
} else if (AQI <= 100) {
   level = '良';
} else if (AQI <= 150) {
   level = '轻度污染';
} else if (AQI <= 200) {
   level = '中度污染';
} else if (AQI <= 300) {
   level = '重度污染';
} else if (AQI > 300) {
   level = '严重污染';
} else {
   level = '无';
}
return level;
};
const setDefaultParam = () => {
const rootData = inject('airPointState');

state.airPointState = rootData;
console.log('大气弹窗-日历参数', global.businessDialog.dialogParmas, state.airPointState);

// 保存外层信息
// state.dialogParmas = global.businessDialog.dialogParmas;
// 设置时间类型
state.type = 'year';
// 设置时间
state.date = global.businessDialog.dialogParmas?.MONITOR_TIME_STR?.substr(0, 4);

state.year = global.businessDialog.dialogParmas?.MONITOR_TIME_STR?.substr(0, 4);

state.POINT_CODE = global.businessDialog.dialogParmas?.POINT_CODE;
setYearValue(state.year);
// 设置污染物列表
changePollutionList();

onMounted(() => {
  const el = document.getElementById('t-chart-design-8350.5c80b7ad8');
  if (!el) return;
  // 初始化一次
  state.calendarWidth = el.clientWidth;
  const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      const width = entry.contentRect.width;
      if (width !== state.calendarWidth) {
        state.calendarWidth = width;
        // 宽度变了后，重新渲染日历图
        renderChart();
      }
    }
  });
  resizeObserver.observe(el);
  // 记得在 onUnmounted 里关闭
  onUnmounted(() => {
    resizeObserver.disconnect();
  });
});
};
const setDate = () => {
// 切换tab时，时间置为从外层页面带入的默认时间
if (state.date && state.type === 'hour') {
  state.date = state.dialogParmas.timeValue +
    (state.dialogParmas.timeType === 'day' ? ' 00' : '');
} else if (state.date && state.type === 'day') {
  // 选中30天的时候，需要判断如果处理后的默认时间为当天，需处理成昨天的时间
  const dayTime = state.dialogParmas.timeValue.slice(0, 10);
  state.date = dayTime === dateFormat(new Date(), 'YYYY-MM-DD') ?
    dateFormat(new Date(new Date(dayTime).getTime() - 24 * 1000 * 3600), 'YYYY-MM-DD')
    : dayTime;
} else if (state.date && state.type === 'year') {
  state.year = state.dialogParmas.timeValue.slice(0, 4);
}
};
const renderChart = () => {

  const container = document.getElementById('t-chart-design-8350.5c80b7ad8');
  // const containerWidth = container ? container.clientWidth : 1800;
  const containerWidth = state.calendarWidth || 1600; // 没取到时给个兜底
  const cols = containerWidth > 900 ? 3 : 2; // 一行 3 个
  const calendarWidth = containerWidth / cols;
  // 每个日历有 7 列，预留点间距，0.9 可以按效果再调
  let cellSize = (calendarWidth * 1) / 7;
  const calendarGapX = calendarWidth;
  const calendarGapY = calendarWidth; // 或者写死 260/280，看视觉
  
  
  // 获取容器
  if (container) {  
    // 根据宽度决定高度
    let newHeight = '2400px'; // 默认高度
    //let newHeightNum = 2580; // 默认高度
    if (containerWidth > 900) {
      newHeight = '1500px'; // 宽页面使用较小高度
      //newHeightNum = 1600;
    }
    
    // // 1.1 清除可能的内联样式优先级
    // const originalStyle = container.getAttribute('style') || '';
    // const styleWithoutHeight = originalStyle.replace(/height\s*:\s*[^;]*;?/gi, '');
    
    // // 1.2. 重新构建样式，确保height是最后一个属性
    // const otherStyles = styleWithoutHeight.split(';').filter(s => s.trim()).join(';');
    // const newStyle = `${otherStyles}${otherStyles ? ';' : ''} height: ${newHeight} !important`;
    
    // // 1.3. 使用setAttribute设置，确保覆盖
    // container.setAttribute('style', newStyle);
    
    // // 1.4. 同时使用setProperty设置
    // container.style.setProperty('height', newHeight, 'important');
    
    // 2. 设置chart-box元素高度
    const chartBox = container.querySelector('.chart-box');
    if (chartBox) {
      chartBox.style.height = newHeight;
    }
    
    // 3. 设置chart元素高度
    const chart = container.querySelector('.chart');
    if (chart) {
      chart.style.height = newHeight;
      
      // 4. 查找chart下的div（包含canvas的父级）
      const chartInnerDiv = chart.querySelector('div');
      if (chartInnerDiv) {
        // 设置这个div的高度
        chartInnerDiv.style.height = newHeight;
        
        // 5. 设置canvas元素的高度
        const canvas = chartInnerDiv.querySelector('canvas');
        if (canvas) {
          canvas.style.height = newHeight;
          // // 同时设置canvas的实际高度属性，避免模糊
          // canvas.height = newHeightNum;
        }
      }
    }
    
    console.log(`已设置容器高度为: ${newHeight} (容器宽度: ${containerWidth}px)`);
  }
  
  
  
  // if (containerWidth > 900) {
  //   // 宽页面，不需要高高度
  //   container.style.height = '1600px';
  // } else {
  //   // 窄页面，需要高高度
  //   container.style.height = '2400px';
  // }
  
  console.log('重新渲染日历', container.style.height, cellSize, containerWidth, calendarWidth, container);
  
  let data = [];
  if (state.renderChartData.length) {
    // 补充去年数据
    const prevData = generateRangeDates(state.prevYear + '-12-22', state.prevYear + '-12-31');
    prevData.forEach((item) => {
      data.push({
        'MONITORTIME': item,
      });
    });
  
    // 生成今年数据，为了补齐数据（因为接口返回的数据中，部分日期缺失）
    const centerData = generateRangeDates(state.selectTime + '-01-01', state.selectTime + '-12-31');
    centerData.forEach((item) => {
      const sameRow = state.renderChartData.find((dataItem) => dataItem.MONITORTIME === item);
      data.push(
        sameRow ? {
          ...sameRow,
        } : {
          'MONITORTIME': item,
        }
      )
    });
  
    // 填充明年数据
    const afterData = generateRangeDates(state.nextYear + '-01-01', state.nextYear + '-01-15');
    afterData.forEach((item) => {
      data.push({
        'MONITORTIME': item,
      })
    });
  } 
  function polluteFormat(str, ellipsis) {
    if (str) {
      let result = [];
      let polluteArr = str.split(",");
      polluteArr.forEach(item => {
        if (item === 'O3_8') {
          result.push(convertCharacter('O3') + '-8h')
        } else {
          result.push(convertCharacter(item))
        }
      })
      // 多个显示省略号
      if (ellipsis && result.length > 1) {
        return `${result[0]}...`
      }
      return result.join(',')
    } else {
      return '--'
    }
  }
  function getCalendarTextWidth(text, fontSize) {
    const size = parseFloat(fontSize) || 12;
    return String(text || '').split('').reduce((total, char) => {
      if (/[\u4e00-\u9fa5]/.test(char)) {
        return total + size;
      }
      if (/[A-Z]/i.test(char)) {
        return total + size * 0.72;
      }
      if (/[0-9\u2080-\u2089]/.test(char)) {
        return total + size * 0.55;
      }
      return total + size * 0.38;
    }, 0);
  }
  function clipCalendarText(text, maxWidth, fontSize) {
    const value = String(text || '');
    if (getCalendarTextWidth(value, fontSize) <= maxWidth) {
      return value;
    }
    let result = '';
    for (const char of value) {
      if (getCalendarTextWidth(result + char, fontSize) > maxWidth) {
        break;
      }
      result += char;
    }
    return result;
  }
  function getCalendarCellPolluteText(text, maxWidth, fontSize) {
    if (!text || text === '--') {
      return '--';
    }
    const firstPollute = String(text).split(',')[0];
    return clipCalendarText(firstPollute, maxWidth, fontSize);
  }
  if (data && data.length) {
    let cellSize = 42;
    let pollute = state.polluteActive;
    let polluteName = convertCharacter(state.polluteActive);
    // 12个月（每个元素包含每个日历图的数据，每个日历有42个（7x6）格子，故第一和最后格子不一定是当月的第一和最后日期）
    let seriesData = [];
    // 12个月（每个元素包含每个月的日历图的开始时间和结尾时间，每个日历有42个（7x6）格子，故第一和最后格子不一定是当月的第一和最后日期）
    let calBeginEndDate = [];
  
    let monthIndex = -1;
    let cellIndex = 0;
  
    for (let i = 10; i < data.length; i++) {
      let dayOfMonth = Number(data[i].MONITORTIME.substring(8, 10));
      if (dayOfMonth == "01") {
        // 在数据的每月1日加月并重置日历格索引
        monthIndex++;
        if (monthIndex > 11) {
          break;
        }
        cellIndex = 0;
        seriesData[monthIndex] = [];
        calBeginEndDate[monthIndex] = [];
  
        let year = Number(data[i].MONITORTIME.substring(0, 4));
        let month = Number(data[i].MONITORTIME.substring(5, 7));
        // 处理当月日历第一行的上月几天的文字显示
        let dateFirst = new Date();
        // 2017年的时间有BUG无法setMonth到2月份
        dateFirst.setFullYear(year, 0, 1, 0, 0, 0, 0);
        dateFirst.setDate(1 + (month - 1) * 31);
        dateFirst.setDate(1);
        let dayOfWeekIndex = dateFirst.getDay();
        for (let j = dayOfWeekIndex; j > 0; j--) {
          seriesData[monthIndex][cellIndex] = {
            value: [data[i - j].MONITORTIME, -5, '--'],
            fontSize: global.publicFontSizeConfig.fontSize12,
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return Number(params.value[0].substring(8, 10));
                },
                color: 'var(--skin-font-color-40)',
                fontSize: global.publicFontSizeConfig.fontSize12,
                position: 'inside',
                verticalAlign: 'middle',
              }
            },
          }
          cellIndex++;
        }
        // 当月日历的第一格日期
        calBeginEndDate[monthIndex][0] = data[i - dayOfWeekIndex].MONITORTIME;
        // 处理当月日历最后几行的下月几天的文字显示
        let dateEnd = new Date(dateFirst.getTime());
        dateEnd.setDate(dateEnd.getDate() + 35);
        dateEnd.setDate(1);
        let days = Math.floor((dateEnd.getTime() - dateFirst.getTime()) / (24 * 3600 * 1000));
  
        let EndCellIndex = cellIndex + days;
        while (EndCellIndex < 42) {
          seriesData[monthIndex][EndCellIndex] = {
            value: [data[i - cellIndex + EndCellIndex].MONITORTIME, -5, '--'],
            fontSize: global.publicFontSizeConfig.fontSize12,
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return Number(params.value[0].substring(8, 10));
                },
                color: 'var(--skin-font-color-40)',
                fontSize: global.publicFontSizeConfig.fontSize12,
                position: 'inside',
                verticalAlign: 'middle',
              }
            },
          }
          EndCellIndex++;
        }
  
        // 当月日历图的最后一格日期
        calBeginEndDate[monthIndex][1] = data[i - cellIndex + EndCellIndex - 1].MONITORTIME;
      }
      seriesData[monthIndex][cellIndex] = {
        value: [data[i].MONITORTIME, (Number(data[i][pollute]) ? Number(data[i][pollute]) : -1), polluteFormat(data[i].PRIMPOLLUTE)],
        label: {
          normal: {
            show: true,
            formatter: function (params) {
              if (pollute == 'AQI') {
                const cellPolluteText = getCalendarCellPolluteText(params.value[2], cellSize - 4, global.publicFontSizeConfig.fontSize12);
                return Number(params.value[0].substring(8, 10)) + '\n{p|' + cellPolluteText + "}";
              } else {
                return Number(params.value[0].substring(8, 10)) + "\n";
              }
            },
            fontSize: global.publicFontSizeConfig.fontSize12,
            align: 'center',
            verticalAlign: 'middle',
            position: 'inside',
            color: 'var(--skin-font-color)',
            width: cellSize,
            overflow: 'truncate',
            ellipsis: '..',
            rich: {
              "p": {
                fontSize: global.publicFontSizeConfig.fontSize12,
                width: cellSize - 4,
                overflow: 'truncate',
                ellipsis: '..',
              },
            },
          }
        },
      };
      cellIndex++;
    }
    // echarts的月份显示只能在日历左边或右边，上边和下边只能显示年份和星期，故只能自定义年份框来显示月份。。
    let monthCh = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    let calenderData = [];
    let seriesArray = []
    // 日历图的横向位置索引
    let index_x = 1;
    // 日历图的纵向位置索引
    let index_y = 1;
    // 自定义年份框来显示月份
    for (let i = 0; i < 12; i++) {
      let monthstr = monthCh[i];
  
      calenderData[i] = {
        orient: 'vertical',
        splitLine: {
          show: true,
          lineStyle: {
            color: '#0a56b3'
          }
        },
        itemStyle: {
          borderColor: '#0a56b3'
        },
        yearLabel: {
          margin: 21,
          borderWidth: 1,
          formatter: monthstr,
          color: 'var(--skin-font-color)',
          backgroundColor: "#003d9b",
          borderColor: '#0a56b3',
          borderType: 'solid',
          backgroundColor: "#003d9b",// '#CCFFCC',
          fontWeight: 'normal',
          fontSize: global.publicFontSizeConfig.fontSize12,
          width: cellSize * 7,
          height: 20,
          lineHeight: 20,
          align: 'center',
          rich: {
            a: {
              width: 70,
            },
          },
        },
        monthLabel: {
          show: false
        },
        dayLabel: {
          firstDay: 0,
          margin: 0,
          color: 'var(--skin-font-color)',
          backgroundColor: "#003d9b",
          borderColor: '#0a56b3',
          borderWidth: 1,
          borderType: 'solid',
          fontSize: global.publicFontSizeConfig.fontSize12,
          lineHeight: 20,
          // width: 42,
          width: cellSize,
          height: 20,
          nameMap: "ZH"
        },
        cellSize: cellSize,
        // left: 1 + 300 * (index_x - 1),
        // top: 50 + 300 * (index_y - 1),
        left: calendarGapX * (index_x - 1),
        top: 50 + calendarGapY * (index_y - 1),
        range: calBeginEndDate[i],
      };
  
      seriesArray[i] = {
        name: 'AQI',
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: i,
        data: seriesData[i],
      };
  
      if (index_x < cols) {
        index_x++;
      } else {
        index_x = 1;
        index_y++;
      }
    }
  
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          if (params.value[1] >= 0) {
            if (polluteName === 'AQI') {
              if (isNaN(params.value[2])) {
                return params.value[0].substring(0, 10) + '<br/>AQI：' + params.value[1] + "<br/>首要污染物：" + params.value[2];
              } else {
                return params.value[0].substring(0, 10) + '<br/>AQI：' + params.value[1];
              }
              // return params.value[0].substring(0, 10) + '<br/>AQI：' + params.value[1];
            } else {
              if (polluteName === 'CO') {
                return params.value[0].substring(0, 10) + '<br/>' + polluteName + '：' + params.value[1] + 'mg/m3';
              }
              return params.value[0].substring(0, 10) + '<br/>' + polluteName + '：' + params.value[1] + 'μg/m3';
            }
          }
        },
        axisPointer: {
          show: false,
          type: 'shadow' // shadow cross line
        },
        backgroundColor: '#003d9b',
        borderWidth: 1,
        borderColor: '#0a56b3',
        padding: 10,
        textStyle: {
          color: '#fff',
          fontSize: global.publicFontSizeConfig.fontSize12
        },
      },
      // title: {
      //   textStyle: {
      //     fontSize: 25
      //   },
      //   itemGap: 4,
      //   text: year + '年' + pointNames + polluteName + '日历图',
      //   left: 'center',
      //   top: 0,
      //   itemGap: 10,
      //   subtextStyle: {
      //     fontSize: 16,
      //     itemGap: 10,
      //   }
      // },
      toolbox: {
        show: false,
        feature: {
          saveAsImage: {
            show: true,
            pixelRatio: 5
          }
        },
        top: 'top',
        right: 40,
  
      },
      visualMap: {
        type: 'piecewise',
        pieces: [
          {
            gt: -10000,
            lte: 0,
            label: '无数据',
            color: '#003d9b'
          },
          {
            gt: 0,
            lte: 50,
            label: '优',
            color: '#0ce115'
          }, {
            gte: 51,
            lte: 100,
            label: '良',
            color: '#ffd91c'
          }, {
            gte: 101,
            lte: 150,
            label: '轻',
            color: '#ff7e00'
          }, {
            gte: 151,
            lte: 200,
            label: '中',
            color: '#ff0000'
          }, {
            gte: 201,
            lte: 300,
            label: '重',
            color: '#99004c'
          }, {
            gte: 301,
            lte: 1000000,
            label: '严重',
            color: '#7e0023'
          }],
        dimension: 1,
        align: 'left',// 图形和文字的摆放关系，left：图形在左
        show: false,
        itemGap: 34,// 每两个图元之间的间隔距离，单位为px
        orient: 'vertical', // 'vertical' horizontal
        left: 'right', // center
        top: 50,
        padding: 20
      },
      calendar: calenderData,
      series: seriesArray,
    };
    console.log('日历图', option);
    state.chartOption = option;
  }
  
  
};
const handleYearChange = () => {
// 参数齐全后再请求
if (state.REGION_TYPE && state.POINT_CODE) {
  apiRegistry.getChartData.request();
}

};
const initPolluteType = () => {
state.polluteList = [
  {
    label: 'AQI',
    name: 'AQI'
  },
  {
    label: convertCharacter('PM25'),
    name: 'PM25'
  },
  {
    label: convertCharacter('PM10'),
    name: 'PM10'
  },
  {
    label: convertCharacter('SO2'),
    name: 'SO2'
  },
  {
    label: convertCharacter('NO2'),
    name: 'NO2'
  },
  {
    label: 'CO',
    name: 'CO'
  },
  {
    label: convertCharacter('O3'),
    name: 'O3'
  },
  {
    label: convertCharacter('O3') + '-8h',
    name: 'O3_8'
  }
];
};
const handleTableData = () => {
if(!state.tableResult.length){
  return;
}
let data = state.tableResult;
// 处理日历数据
const pointList = []
// 求时间
const timeList = Array.from(new Set(data.map(item => item.MONITORTIME_NAME)));
state.pointNameList.forEach((item) => {
  const pointObj = {
    siteName: item.POINT_NAME
  }
  timeList.forEach((time, index) => {
    const findData = data.find((item1) => item1.POINT_NAME === item.POINT_NAME && item1.MONITORTIME_NAME === time);
    if (findData) {
      pointObj[time] = handleNoVal(findData[state.polluteActive]);
      pointObj[`aqiState${index}`] = getAQILevel(findData[state.polluteActive] ? parseInt(findData[state.polluteActive]) : '无');
    } else {
      pointObj[time] = '-';
      pointObj[`aqiState${index}`] = '无';
    }
    if (index === timeList.length - 1) {
      pointList.push(pointObj);
    }
  })
})
state.tableData = pointList;

// 处理表头
state.tableColumn = [];
// 第一列地区
const baseTableColumn = [
  {
    label: state.REGION_TYPE === 'point' ? "站点" : "地点",
    type: "default",
    key: "siteName",
    align: "center",
    // width: '55PX',
    width: state.type === 'hour' ? 'auto' : '50px',
    headerAlign: "center",
    showOverflowTooltip: false,
  }
]
const arr = []
// 创建表头
timeList.forEach((item, index) => {
  const column = {
    label: item,
    type: "state",
    key: item,
    stateKey: "aqiState" + index,
    infoPosition: "left",
    tooltipPosition: "top",
    width: state.type === 'hour' ? "35PX" : '57.8px',
    minWidth: state.type === 'hour' ? "35PX" : '57.8px',
    align: "center",
    headerAlign: "center",
    sortable: false,
    showOverflowTooltip: false,
    infoStyle: {
      fontStyle: {
        color: "#eee",
      }
    },
    stateList: state.type === 'hour' ? state.stateList : state.stateListForDay,
  }
  arr.push(column);
})
state.tableColumn = baseTableColumn.concat(arr);
// 解决表格错位的问题

if (document.getElementById('t-table-e792.878458ef2')) {
  document.getElementById('t-table-e792.878458ef2').style.display = 'none';
  setTimeout(() => {
    document.getElementById('t-table-e792.878458ef2').style.display = 'block';
  })
}
if (document.getElementById('t-table-5dcc.851d00026')) {
  document.getElementById('t-table-5dcc.851d00026').style.display = 'none';
  setTimeout(() => {
    document.getElementById('t-table-5dcc.851d00026').style.display = 'block';
  })
}
};
const polluteTypeChange = () => {
if (state.type === 'year') {
  renderChart();
} else {
  handleTableData();
}
};
const handleParams = () => {
console.log('global.regionaQuery', global.regionaQuery)
state.regionCode = global.regionaQuery.regionCode
if(state.REGION_TYPE === 'province'){
  // 省内
  state.pointType = '12'
  state.parentRegionCode = '350000000000'
  //state.POINT_CODE = ''
  state.regionCode = ''
  state.parentCode = '350000000000'
  state.REGION_CODE = ''
  state.PROVINCE_CODE = '350000000000'
  state.DISTRICT_CODE = ''
}else if(state.REGION_TYPE === 'city'){
  // 市内
  state.pointType = '13'
  //state.POINT_CODE = ''
  state.parentRegionCode = ''
  state.parentCode = '350700000000'
  state.REGION_CODE = '350700000000'
  state.PROVINCE_CODE = ''
  state.DISTRICT_CODE = ''
}else if(state.REGION_TYPE === 'point'){
  // 站点
  state.pointType = '0,1,2,3,4'
  //state.POINT_CODE = ''
  state.parentRegionCode = ''
  state.parentCode = ''
  state.REGION_CODE = '350700000000'
  state.PROVINCE_CODE = ''
  if (global.regionaQuery.paramsRegionType === 'county') {
    state.DISTRICT_CODE = global.regionaQuery.regionCode
  } else {
    state.DISTRICT_CODE = ''
  }
}
};
const initRegionType = () => {
// 如果是城市默认市内，区县，默认站点
const regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
console.log('regionLevelCode 111', regionLevelCode)
switch (regionLevelCode) {
  case 'province':
    state.REGION_TYPE = 'province';
    state.POINT_CODE = '';
    break;
  case 'city':
    state.REGION_TYPE = 'province';
    state.POINT_CODE = '350700';
    break;
  case 'county':
    state.REGION_TYPE = 'city';
    state.POINT_CODE = '';
    break;
  default:
    break;
}

state.REGION_TYPE = 'point'
};
const generateRangeDates = (startDate,endDate) => {
/**
 * 生成区间日期
 * @params startDate 开始日期 Date
 * @params endDate 结束日期 Date
 */
const dates = [];
const start = new Date(startDate);
const end = new Date(endDate);

// 确保开始日期不超过结束日期
if (start > end) {
  return dates;
}

let currentDate = start;
while (currentDate <= end) {
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  dates.push(`${year}-${month}-${day}`);

  // 增加一天
  currentDate.setDate(currentDate.getDate() + 1);
}

return dates;
};
const getLevelValueKey = (polluteCode) => {
/**
 * 获取等级值字段
 * @params polluteCode 污染物code
 */
if (polluteCode === 'AQI') {
  return 'AQI';
}
return `${polluteCode}_IAQI`;
};
const changePollutionList = () => {

state.polluteList = [
  {
    label: 'AQI',
    name: 'AQI'
  },
  {
    label: convertCharacter('PM25'),
    name: 'PM25'
  },
  {
    label: convertCharacter('PM10'),
    name: 'PM10'
  },
  {
    label: convertCharacter('SO2'),
    name: 'SO2'
  },
  {
    label: convertCharacter('NO2'),
    name: 'NO2'
  },
  {
    label: 'CO',
    name: 'CO'
  },
  {
    label: convertCharacter('O3') + '-8h',
    name: 'O3_8'
  }
];
state.polluteActive = state.polluteActive === 'O3' ? 'O3_8' : state.polluteActive


};
const changeCityParma = () => {
state.POINT_CODE = '';
if(state.REGION_TYPE === 'province'){
  state.POINT_CODE = '350700';
}else {
  state.POINT_CODE = '';
}
};
const setYearValue = (yearValue) => {
if (!yearValue) return;
state.selectTime = yearValue;
state.startMonitorTime = yearValue + '-01-01';
state.endMonitorTime = yearValue + '-12-31';
state.prevYear = (Number(yearValue) - 1).toString();
state.nextYear = (Number(yearValue) + 1).toString();
};
const ontabClick1736921718330 = (data) => {
// 设置变量值
state.polluteActive = data.value;
// 执行自定义方法
polluteTypeChange(data.value);
};
const onchange1734689433525 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.REGION_TYPE = value;
// 执行自定义方法
getCalendarData();
// 执行自定义方法
changeCityParma();
};
const onchange1736759726394_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.POINT_CODE = value;
// 事件交互-请求调用接口
apiRegistry.getChartData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const ontabClick1733908971891 = (data) => {
// 设置变量值
state.type = data.value;
// 设置变量值
state.tableColumn = [];
// 执行自定义方法
changePollutionList();
// 执行自定义方法
setDate();
// 执行自定义方法
getCalendarData();
};
const ondateChange1736748489449_0_0 = (data) => {
// 设置变量值
state.year = data;
// 执行自定义方法
setYearValue(data);
// 执行自定义方法
handleYearChange();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getRegion: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"IS_POINT":"1","PARENT_REGION_CODE":"state.parentCode","interfaceId":"dbc171c05c6754e9bc26ad3678279d8d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"IS_POINT":"1","PARENT_REGION_CODE":state.parentCode,"interfaceId":"dbc171c05c6754e9bc26ad3678279d8d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"IS_POINT":"1","PARENT_REGION_CODE":state.parentCode,"interfaceId":"dbc171c05c6754e9bc26ad3678279d8d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRegion'] = res.data;
                
     state.tableData = [];
const { data, head } = res.data;
console.log('12356', res);
if (head.statusCode === '200' && data) {
  state.regionList = data.map(item => {
    return {
      POINT_NAME: item.region_name,
      POINT_CODE: item.region_code.slice(0, 6)
    }
  })
  // // 默认选中当前选中区域
  // const currentRegionCode = global.regionaQuery.regionCode.slice(0,6)
  // const index = state.regionList.findIndex(item => item.POINT_CODE === currentRegionCode)
  // if(index > -1){
  //   state.POINT_CODE = state.regionList[index].POINT_CODE
  // }else{
  //   state.POINT_CODE = data[0].region_code.slice(0,6)
  // } 
  const currentPointName = global.businessDialog.dialogParmas?.POINT_NAME;
  const index = state.regionList.findIndex(item => item.POINT_NAME === currentPointName)
  if (index > -1) {
    state.POINT_CODE = state.regionList[index].POINT_CODE
  } else {
    state.POINT_CODE = data[0].region_code.slice(0, 6)
  }
  console.log('大气日历-最终获取的当前点位', state.POINT_CODE);
} else {
  state.regionList = []
  state.POINT_CODE = ''
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
state.regionList = []
      reject(error);
    });
  });
},
              },
// 接口函数
 getChartData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"state.pointType","POINT_CODE":"state.POINT_CODE","MONITORTIME":"state.year","TIME_TYPE":"state.type","interfaceId":"b669ae3d8776d993bdb73a9b911a50e9"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":state.pointType,"POINT_CODE":state.POINT_CODE,"MONITORTIME":state.year,"TIME_TYPE":state.type,"interfaceId":"b669ae3d8776d993bdb73a9b911a50e9"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":state.pointType,"POINT_CODE":state.POINT_CODE,"MONITORTIME":state.year,"TIME_TYPE":state.type,"interfaceId":"b669ae3d8776d993bdb73a9b911a50e9"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getChartData'] = res.data;
                
     
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.renderChartData = data
  renderChart();
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
 getPointName: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DISTRICT_CODE":"state.DISTRICT_CODE","PROVINCE_CODE":"state.PROVINCE_CODE","REGION_CODE":"state.REGION_CODE","POINT_TYPE":"state.pointType","interfaceId":"48f27a45ab6772cad3e379bff43bc69d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DISTRICT_CODE":state.DISTRICT_CODE,"PROVINCE_CODE":state.PROVINCE_CODE,"REGION_CODE":state.REGION_CODE,"POINT_TYPE":state.pointType,"interfaceId":"48f27a45ab6772cad3e379bff43bc69d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DISTRICT_CODE":state.DISTRICT_CODE,"PROVINCE_CODE":state.PROVINCE_CODE,"REGION_CODE":state.REGION_CODE,"POINT_TYPE":state.pointType,"interfaceId":"48f27a45ab6772cad3e379bff43bc69d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPointName'] = res.data;
                
     state.tableData = [];
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.pointNameList = data
  if(state.type === 'year'){
    state.regionList = data.map(item =>{
    return{
      POINT_NAME: item.POINT_NAME,
      POINT_CODE: item.POINT_CODE
    }
  })
    // state.POINT_CODE = data[0].POINT_CODE
  }
  const currentPointName = global.businessDialog.dialogParmas?.POINT_NAME;
  const index = state.regionList.findIndex(item => item.POINT_NAME === currentPointName)
  if (index > -1) {
    state.POINT_CODE = state.regionList[index].POINT_CODE
  } else {
    state.POINT_CODE = data[0].region_code.slice(0, 6)
  }
  console.log('大气日历-最终获取的当前点位', state.POINT_CODE);
}else{
   state.pointNameList = []
  state.regionList = []
  state.POINT_CODE = ''
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
   state.pointNameList = []
  state.regionList = []
      reject(error);
    });
  });
},
              },
// 接口函数
 getCalendarList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"ORDER_BY":"aqi desc","POINT_TYPE":"state.pointType","PARENT_REGION_CODE":"state.parentRegionCode","REGION_CODE":"state.regionCode","MONITORTIME":"state.date","TIME_TYPE":"state.type","interfaceId":"b669ae3d8776d993bdb73a9b911a50e9"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"ORDER_BY":"aqi desc","POINT_TYPE":state.pointType,"PARENT_REGION_CODE":state.parentRegionCode,"REGION_CODE":state.regionCode,"MONITORTIME":state.date,"TIME_TYPE":state.type,"interfaceId":"b669ae3d8776d993bdb73a9b911a50e9"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"ORDER_BY":"aqi desc","POINT_TYPE":state.pointType,"PARENT_REGION_CODE":state.parentRegionCode,"REGION_CODE":state.regionCode,"MONITORTIME":state.date,"TIME_TYPE":state.type,"interfaceId":"b669ae3d8776d993bdb73a9b911a50e9"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCalendarList'] = res.data;
                
     state.tableData = [];
const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.tableResult = data;
}else{
  state.tableResult = []
}
handleTableData();
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
                            setPageScale('t-l-c-airPopPointCalendar', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setDefaultParam();
// 执行自定义方法
initRegionType();
// 执行自定义方法
getCalendarData();
onMounted(() => {
setPageScale('t-l-c-airPopPointCalendar', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tColx0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0.default, componentState.tColx0x1x0?.[state.screenSize]));

 const tTabsBasex0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x1x0x0.default, componentState.tTabsBasex0x1x0x0?.[state.screenSize]));

 const tColx0x1x4ComputedData = computed(() => _.merge({}, componentState.tColx0x1x4.default, componentState.tColx0x1x4?.[state.screenSize]));

 const tChartDesignx0x1x4x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x1x4x0.default, componentState.tChartDesignx0x1x4x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

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
tRowx0x1ComputedData,
tColx0x1x0ComputedData,
tTabsBasex0x1x0x0ComputedData,
tColx0x1x4ComputedData,
tChartDesignx0x1x4x0ComputedData,
ontabClick1736921718330,
};
},
};