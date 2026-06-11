window.rightAllBusinessComponent = {
template: 
`<div id="t-l-c-rightAllBusiness" class="t-l-c-rightAllBusiness" >` +
`<t-chart-design v-if="state.isChar === true" id="t-chart-design-468c.fee2c5aef" class="rightAllBusiness-t-chart-design-0-0"  :empty-img="tChartDesignx0x0ComputedData.emptyImg" :c-style="tChartDesignx0x0ComputedData.cStyle" :options="replaceCssVariables(state.barOption, global?.theme || global?.activeTheme || '默认主题')">` +
`</t-chart-design>` +
`<t-rect v-if="state.isChar === false" id="t-rect-0762.79488eba7" class="rightAllBusiness-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="replaceCssVariables(state.isLoading, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-2071.0999c6abb" class="rightAllBusiness-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-ea5a.c9c44f948" class="rightAllBusiness-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle">` +
`</t-rect>` +
`<t-gradient-shadow-text id="t-gradient-shadow-text-7e8f.bffc37b81" class="rightAllBusiness-t-gradient-shadow-text-0-5"  :label="tGradientShadowTextx0x5ComputedData.label" :c-style="tGradientShadowTextx0x5ComputedData.cStyle" :shadow-style="tGradientShadowTextx0x5ComputedData.shadowStyle" @click="onclick1741831975200">` +
`</t-gradient-shadow-text>` +
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
   dataAggregateBusiness: [],
   barOption: {},
   isChar: false,
   isLoading: "加载中...",
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
tChartDesignx0x0: {
defaultStyle: {
            default: {"height":"200px","width":"400px","position":"unset","left":"0px","top":"62px","backgroundColor":"rgba(0,0,0,0)"},
            
            },
 default: { 
 
emptyImg:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"200px","width":"400px","position":"unset","left":"0px","top":"62px","backgroundColor":"rgba(0,0,0,0)"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"400px","height":"200px","position":"unset","left":"0px","top":"62px","fontSize":"14px","color":"rgba(255,255,255,0.9)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"加载中...",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"200px","position":"unset","left":"0px","top":"62px","fontSize":"14px","color":"rgba(255,255,255,0.9)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}},"emptyText":{"default":{"color":"rgba(255,255,255,0.9)","fontSize":"14px"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"400px","height":"50px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"","backgroundColor":"rgba(23, 62, 228, 0)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"50px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"","backgroundColor":"rgba(23, 62, 228, 0)"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"118px","height":"45px","position":"unset","left":"9px","top":"5px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2024-11-27/f16083ce0e5e4eddb8df49cce653f0e2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"custom7a277f6019b42","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"118px","height":"45px","position":"unset","left":"9px","top":"5px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2024-11-27/f16083ce0e5e4eddb8df49cce653f0e2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"custom7a277f6019b42","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tGradientShadowTextx0x5: {
defaultStyle: {
            default: {"width":"135px","height":"31px","position":"unset","left":"40px","top":"15px","fontFamily":"方正综艺","fontSize":"20px","color":"var(--t-text)","textAlign":"left","backgroundColor":"","letterSpacing":"2px","paddingLeft":"0px","marginLeft":"0px","animationName":"","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-17/c72e2668a7de449bb18182809dbd87ab.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"11px 16px","-webkit-mask-size":"","backgroundPosition":"100% 7px","-webkit-mask-position":"","cursor":"pointer"},
            
            },
 default: { 
 
label:"全业务覆盖",
cStyle:{"wrapper":{"default":{"width":"135px","height":"31px","position":"unset","left":"40px","top":"15px","fontFamily":"方正综艺","fontSize":"20px","color":"var(--t-text)","textAlign":"left","backgroundColor":"","letterSpacing":"2px","paddingLeft":"0px","marginLeft":"0px","animationName":"","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-17/c72e2668a7de449bb18182809dbd87ab.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"11px 16px","-webkit-mask-size":"","backgroundPosition":"100% 7px","-webkit-mask-position":"","cursor":"pointer"}},"textStyle":{"default":{"-webkit-text-fill-color":"transparent","-webkit-background-clip":"text","backgroundImage":"linear-gradient(rgba(255, 255, 255, 1),rgba(255, 255, 255, 1))","fontWeight":"300","color":"rgba(255, 255, 255, 1)","fontSize":"20px","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","fontFamily":"方正综艺","paddingLeft":"10px","paddingTop":"4px"}},"textShadowStyle":{"default":{"fontWeight":"bold","color":"","fontFamily":"方正综艺","paddingLeft":"10px","paddingTop":"4px"}}},
shadowStyle:{"blur":"8PX","color":"#00738A"}, 
 },
},
});
const setOption = () => {
let tooltipColor = getCssVariable("--t-echarts-tooltip-text");
let tooltipBgc = getCssVariable("--t-echarts-tooltip-bgc");
let splitColor = getCssVariable("--t-echarts-wgx-color");
let textColor = getCssVariable("--t-echarts-text-color");







// 业务量
let ywl = [];
// 业务类别
let ywlb = [];
let xData = [];
let data = state.dataAggregateBusiness;
console.log(data);
if (data) {
	for (let i = 0; i < data.length; i++) {
		xData.push(data[i].BUSINESS_NAME);
		ywlb.push(data[i].BUSINESS_COUNT);
		ywl.push(data[i].DATA_TOTAL);
	}
}

state.barOption = {
	//你的代码
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "shadow",
			shadowStyle: {
				opacity: 0.1,
			},
		},
		textStyle: {
			color: tooltipColor,
			fontSize: 12,
		},
		confine: true, // 超出范围
		backgroundColor: tooltipBgc, //设置背景颜色
		borderWidth: 0,
		borderColor: "#6CFFFA",
		formatter: "{b}<br>{a}：{c}个<br>{a1}：{c1}万条",
	},
	legend: {
		top: "4%",
		left: "25%",
		itemWidth: 18,
		itemHeight: 10,
		itemGap: 20,
		textStyle: {
			fontSize: 12,
			color: textColor,
			padding: [0, -5, 0, 5],
		},
	},
	grid: {
		top: "18%",
		left: "1%",
		right: "2%",
		bottom: "2%",
		containLabel: true,
	},
	dataZoom: [{ // 启用 x轴的滚动条
		type: 'slider', // 使用滑动条类型
		height: 10,
		start: 0, // 初始的开始位置，百分比
		end: 50  // 初始的结束位置，百分比
	}],
	xAxis: [
		{
			type: "category",
			data: xData,

			axisTick: {
				show: false,
				alignWithLabel: true,
			},
			axisLine: {
				lineStyle: {
					color: "#516060",
				},
			},
			axisLabel: {
				interval: '0',
				margin: 10,
				color: "rgba(255,255,255,0.8)",
				textStyle: {
					fontSize: 12,
					color: "rgba(255,255,255,0.8)",
				},
			},
		},
	],
	yAxis: [
		{
			name: "业务类别（个）",
			splitNumber: 5,
			type: "value",
			minInterval: 1,
			nameTextStyle: {
				color: textColor,
				fontSize: 12,
				align: "center",
				padding: [0, 0, 0, 50],
			},
			axisLabel: {
				show: true,
				fontSize: 12,
				color: textColor,
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: "#1C82C5",
				},
			},
			axisTick: {
				show: false,
			},
			splitLine: {
				show: false,
			},
		},
		{
			type: "value",
			name: "业务量（万条）",
			splitNumber: 5,
			type: "value",
			nameTextStyle: {
				color: textColor,
				fontSize: 12,
				align: "center",
				padding: [0, 10, 0, 0],
			},
			axisLabel: {
				formatter: "{value}",
				color: textColor,
				textStyle: {
					fontSize: 12,
					color: textColor,
					lineHeight: 16,
				},
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: "#1C82C5",
				},

			},
			axisTick: {
				show: false,
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: splitColor,
					type: "dashed",
				},
			},
		}
	],
	series: [
		{
			name: "业务类别",
			type: "bar",
			barWidth: "12",
			data: ywlb,
			itemStyle: {
				normal: {
					color: {
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: "#6CFFFA",
							},
							{
								offset: 1,
								color: "rgba(108, 255, 250, 0)",
							},
						],
					},
					borderColor: "rgba(108, 255, 250, 0.5)",
				},
				// borderRadius: [2, 2, 0, 0],
			},
		},
		{
			name: "业务量",
			type: "line",
			yAxisIndex: 1, // 与第二个 y 轴关联
			showSymbol: false,
			symbolSize: 8,
			smooth: true,
			symbol: "circle",
			lineStyle: {
				normal: {
					color: "#FFE592",
				},
			},
			itemStyle: {
				color: "#FFE592",
				borderColor: "#FFE592",
				borderWidth: 2,
			},
			label: {
				show: false,
				position: "top",
				textStyle: {
					fontSize: 12,
					color: "rgba(255,255,255,0.8)",
				},
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1,
						[
							{
								offset: 0,
								color: "rgba(255, 229, 146, 0.3)",
							},
							{
								offset: 1,
								color: "rgba(255, 229, 146, 0)",
							},
						],
						false
					),
				},
			},
			data: ywl, // 折线图的数据
		},
	],
};
};
const onclick1741831975200 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'showPopComponent',
                    value:'allBusinessPopComponent',
                    data: {
                      showPopComponent: 'allBusinessPopComponent'
                    },
                  });
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'showPop',
                    value:true,
                    data: {
                      showPop: true
                    },
                  });
};
// 接口函数
const getDataAggregateBusiness = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"93e50ffdee8089e6de54e18cafcf9123","MONITORTIME":""},}).then((res) => {
     // 成功的操作
     if (res?.data?.data) {
  state.dataAggregateBusiness = res.data.data;
  state.isLoading = '加载中...';
  state.isChar = false;
  setTimeout(() => {
    state.isChar = true;
    setOption();
  })
} else {
  state.dataAggregateBusiness = [];
  state.isLoading = '暂无数据';
state.isChar = false;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.isLoading = '暂无数据';
state.isChar = false;
      reject(error);
    });
  });
};
// 初始请求，调取接口
getDataAggregateBusiness();
 function handleWindowResize() {
                            setPageScale('t-l-c-rightAllBusiness', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setOption();
/* 接收socket.io消息 */
const onSocketChange693811da263f4187bbfa = function (data) {
if(data.type === "changeTheme"){
try{
// 执行自定义方法
setOption();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange693811da263f4187bbfa);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange693811da263f4187bbfa);
});
onMounted(() => {
setPageScale('t-l-c-rightAllBusiness', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tChartDesignx0x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x0.default, componentState.tChartDesignx0x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tGradientShadowTextx0x5ComputedData = computed(() => _.merge({}, componentState.tGradientShadowTextx0x5.default, componentState.tGradientShadowTextx0x5?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tChartDesignx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tGradientShadowTextx0x5ComputedData,
onclick1741831975200,
};
},
};