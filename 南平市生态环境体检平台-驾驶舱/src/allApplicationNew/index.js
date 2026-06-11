window.allApplicationNewComponent = {
template: 
`<div id="t-l-c-allApplicationNew" class="t-l-c-allApplicationNew" >` +
`<t-rect id="t-rect-3c13.6e224e776" class="allApplicationNew-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-39ea.51f8eb66d" class="allApplicationNew-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle" @mouseout="onmouseout1739345365135" @click="onclick1740017904182">` +
`</t-rect>` +
`<t-rect id="t-rect-5094.9a9212dbc" class="allApplicationNew-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle" @mouseover="onmouseover1739345261051">` +
`</t-rect>` +
`<t-text id="t-text-0849.df06c90a6" class="allApplicationNew-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-iframe id="t-iframe-ab36.0cb117a5c" class="allApplicationNew-t-iframe-0-4"  :src="tIframex0x4ComputedData.src" :srcdoc="replaceCssVariables(state.htmlStr, global?.theme || global?.activeTheme || '默认主题')" :scrolling="tIframex0x4ComputedData.scrolling" :c-style="tIframex0x4ComputedData.cStyle">` +
`</t-iframe>` +
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
   htmlStr: "",
   sectionData: [],
   isClose: false,
   charOption: "",
   STARTEND_TIME_ARR: [],
   TIME_TYPE_CHOOSE: "datetimerangeminute",
   timeSelect: [],
   pageInfo: {"pageNum":1,"pageSize":5,"total":0,"pages":""},
   START_TIME: "",
   END_TIME: "",
   xData: [],
   callsData: [],
   provideData: [],
   isChar: false,
   isLoading: "加载中...",
   tableData: [],
   DEPT_CODE: "",
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
            default: {"width":"1680px","height":"915px","position":"unset","left":"120px","top":"83px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1680px","height":"915px","position":"unset","left":"120px","top":"83px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"83px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1737px","top":"83px","animationName":"","cursor":"pointer"}}}, 
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
 
label:"全应用支撑",
editable:false,
cStyle:{"wrapper":{"default":{"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"108px","left":"198px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"}}}, 
 },
},
tIframex0x4: {
defaultStyle: {
            default: {"width":"1648px","height":"802px","position":"unset","left":"140px","top":"169px"},
            
            },
 default: { 
 
src:"",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"1648px","height":"802px","position":"unset","left":"140px","top":"169px"}}}, 
 },
},
});
const setOption = () => {

state.charOption = {
  //你的代码
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    textStyle: {
      color: "rgba(255,255,255,1)",
      fontSize: 14,
    },
    confine: true, // 超出范围
    backgroundColor: "#000", //设置背景颜色
    borderColor: "#6CFFFA",
    formatter: "{b}<br>{a}：{c}次<br>{a1}：{c1}个",
  },
  legend: {
    top: "4%",
    left: "center",
    itemWidth: 18,
    itemHeight: 10,
    itemGap: 20,
    textStyle: {
      fontSize: 14,
      color: "rgba(255,255,255,0.8)",
      padding: [0, -5, 0, 5],
    },
  },
  grid: {
    top: "10%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: state.xData,
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
        interval: 0,
        margin: 10,
        color: "rgba(255,255,255,0.8)",
        textStyle: {
          fontSize: 14,
          color: "rgba(255,255,255,0.8)",
        },
      },
    },
  ],
  yAxis: [
    {
      name: "调用次数（次）",
      splitNumber: 5,
      type: "value",
      minInterval: 1,
      nameTextStyle: {
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        align: "center",
        padding: [0, 0, 0, 40],
      },
      axisLabel: {
        show: true,
        fontSize: 14,
        color: "rgba(255,255,255,0.8)",
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
      name: "提供接口数（个）",
      splitNumber: 5,
      type: "value",
      nameTextStyle: {
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        align: "center",
        padding: [0, 40, 0, 0],
      },
      axisLabel: {
        formatter: "{value}",
        color: "rgba(255,255,255,0.8)",
        textStyle: {
          fontSize: 14,
          color: "rgba(255,255,255,0.8)",
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
          color: "#526060",
          type: "dashed",
        },
      },
    }
  ],
  series: [
    {
      name: "调用次数",
      type: "bar",
      barWidth: "14",
      data: state.callsData,
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
      name: "提供接口数",
      type: "bar",
      barWidth: "14",
      yAxisIndex: 1,
      data: state.provideData,
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
                color: "#FAC858",
              },
              {
                offset: 1,
                color: "rgba(250, 200, 88, 0)",
              },
            ],
          },
          borderColor: "rgba(250, 200, 88, 0.5)",
        },
        // borderRadius: [2, 2, 0, 0],
      },
    },
  ],
};
};
const setTimeSelect = (data) => {
console.log(data, '选中时间');
state.START_TIME = data[0];
state.END_TIME = data[1];
getCharData();
getTableData();
};
const getNewTime = () => {
// state.timeSelect= [global.toMonthTime,global.toMonthTime]
// state.START_TIME = global.toMonthTime;
// state.END_TIME = global.toMonthTime;
getCharData();
getTableData();
};
const clearLoop = () => {
if (global.loopId) {
  clearInterval(global.loopId);
}
};
const initParams = () => {
state.DEPT_CODE = global.typeCode;
};
const initPage = () => {
state.htmlStr = `<!--
 * @Author: Sen
 * @Date: 2024-05-30 13:33:18
 * @LastEditTime: 2025-04-24 13:58:29
 * @LastEditors: wukf
-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>我的应用名称</title>
    <link rel="shortcut icon" href="assets/images/favicon.ico" />
    <script
            src="./resources/vue.min.js"></script>
    <script
            src="./resources/socket.io.js"></script>
    <script
            src="./resources/lodash.min.js"></script>
    <link rel="stylesheet"
          href="./resources/element-plus/element-plus.min.css" />
    <script
            src="./resources/element-plus/element-plus.min.js"></script>
    <script
            src="./resources/element-plus/zhCn.js"></script>
    <script
            src="./resources/mitt.min.js"></script>
    <script
            src="./resources/axios.min.js"></script>
    <link rel="stylesheet"
          href="./assets/style/themes.css" />
    <style>
        body {
            margin: 0;
        }

        a,
        .lxz-common-link {
            color: #00f0ff !important;
        }

        body,
        html,
        #app {
            height: fit-content;
            color: #fff;
            box-sizing: border-box;
            width: 1632px;
            /* 自动布局 */
            display: flex;
            flex-direction: column;
            padding: 0px;
            gap: 32px;
        }

        ::-webkit-scrollbar {
            width: 0px;
            /* 或使用透明图片 */
            background: transparent;
            /* 重要 */
        }

        /* 居中 */
        .g-flex-center {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .data-space-container .upper-base {
            position: relative;
            /* left: 273px; */
            left: 166px;
            top: 270px;
            width: 257px;
            height: 10px;
            z-index: 2;
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: center;
            transform-origin: center;
        }

        .detail-container {
            /* 自动布局子元素 */
            width: 1632px;
            height: auto;
            /* 自动布局 */
            display: flex;
            flex-direction: column;
            padding: 0px;
            gap: 1px;
            align-self: stretch;
            z-index: 1;
            margin: 25px 0;
        }

        .data-space-container .item-container {
            width: 162px;
            height: 121px;
            position: absolute;
        }
        .data-space-container .item-container .item {
            width: 162px;
            height: 121px;
            background-repeat: no-repeat;
            background-size: 139px 74px;
            background-position: 8px bottom;
        }

        .data-space-container .item-container .title {
            width: 162px;
            height: 40px;
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: center;
            font-family: Source Han Sans;
            font-size: 24px;
            font-weight: bold;
            line-height: normal;
            letter-spacing: normal;
            color: var(--t-text);
        }

        .data-space-container .item-container .value {
            align-items: baseline;
            margin-top: -4px;
            font-family: DIN-black;
            font-size: 36.29px;
            font-weight: bold;
            line-height: normal;
            letter-spacing: normal;
            color: var(--t-text);
            text-shadow: 0px 4.8px 14.4px rgba(137, 92, 0, 0.46);
        }

        .data-space-container .item-container .unit {
            font-family: Source Han Sans;
            font-size: 20.74px;
            font-weight: 500;
            line-height: 37.58px;
            letter-spacing: normal;
            /* 常规文本 */
            color: var(--t-text);
        }
        .tab-div{
            /* 自动布局子元素 */
            width: 281px;
            height: 34px;
            /* 自动布局 */
            display: flex;
            align-items: center;
            padding: 0px;
            align-self: stretch;
            z-index: 1;
            background-color: var(--syjj-tab-bgc);
            /*background-color: rgba(0, 81, 87, 0.6);*/
        }
        .tab-item {
            /* 自动布局子元素 */
            width: 140.5px;
            height: 34px;
            /* 自动布局 */
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px 16px;
            flex-grow: 1;
            z-index: 0;
            /* 标题/微软雅黑-中等18 */
            font-family: Microsoft YaHei;
            font-size: 18px;
            font-weight: normal;
            line-height: 18px;
            text-align: center;
            letter-spacing: normal;
            color: var(--t-text);
            border: 1px;
            background: transparent;
        }
        .tab-item.active,.tab-item:hover {
            color: #fff;
            border-radius: 2px;
            /* 蓝绿色主题（驾驶舱框架）/选择器填充默认 */
            background: var(--syjj-tab-bgc-active);
            /*background: rgba(0, 81, 87, 0.6);*/
            box-sizing: border-box;
            /* 蓝绿色主题（驾驶舱框架）/选择器描边划过 */
            border: 1px solid var(--business-text-hover);
            /*border: 1px solid #00D2D2;*/
            /* 蓝绿色/tab选中内阴影 */
            box-shadow: inset 0px 0px 9px 4px var(--syjj-tab-bgc-active-shadow);
            cursor:pointer;
        }
        .title-one {
            /* 自动布局子元素 */
            width: 1632px;
            height: 33.16px;
            align-self: stretch;
            z-index: 0;
            /*background: url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-04-27/f84eb98529dc426bacb3097c4e4a0f85.png) no-repeat center/cover;*/
            background: var(--t-data-allapplication-title-bg) no-repeat center;
            text-indent: 2em;
            /* 标题/方正综艺20 */
            font-family: 方正综艺简体;
            font-size: 20px;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 2px;
            /* 常规文本 */
            color: var(--t-text);
        }
        .content-div{
            /* 自动布局子元素 */
            width: 1632px;
            height: 206px;
            /* 自动布局 */
            display: flex;
            padding: 0px;
            gap: 20px;
            align-self: stretch;
            z-index: 1;
            margin-top: 10px;
        }
        .content-item-div {
            /* 自动布局子元素 */
            max-width: 530.67px;
            height: 206px;
            min-width: 300px;
            /* 自动布局 */
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 24px 16px;
            gap: 24px;
            flex-grow: 1;
            z-index: 2;
            border-radius: 4px;
            /* 蓝绿色主题（驾驶舱框架）/指标展示20 */
            background: var(--t-zbzs-bg);
            /*background: rgba(0, 109, 109, 0.2);*/
            box-sizing: border-box;
            /* 蓝绿色主题（驾驶舱框架）/选择器描边默认 */
            /*border: 1px solid #00828A;*/
            border: 1px solid var(--business-select-border);
            margin-bottom: 10px;
        }
        .content-item-title{
            /* 自动布局子元素 */
            width: 498.67px;
            height: 18px;
            /* 自动布局 */
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 10px 0px 0px;
            align-self: stretch;
            z-index: 0;
        }
        .content-item-title-right{
            /* 自动布局子元素 */
            width: 82.4px;
            height: 14px;
            /* 自动布局 */
            display: flex;
            align-items: center;
            padding: 0px;
            gap: 8px;
            z-index: 1;
        }
        .content-item-title-right > a{
            text-decoration: none;
            color: var(--skin-font-color-80) !important;
            cursor: pointer;
        }
        .content-item-title-right > a:hover{
            color: var(--sjyy-theme) !important;
        }
        .content-item-title-left{
            /* 自动布局子元素 */
            width: 200px;
            height: 18px;
            /* 自动布局 */
            display: flex;
            align-items: center;
            padding: 0px;
            gap: 8px;
            z-index: 0;
        }
        .content-item-title-left >span{
            /* 标题/微软雅黑-粗体18 */
            font-family: Microsoft YaHei;
            font-size: 18px;
            font-weight: bold;
            line-height: 18px;
            text-align: center;
            letter-spacing: 0.04em;
            /* 蓝绿色主题（驾驶舱框架）/主题色 */
            /*color: var(--business-theme);*/
            color: var(--sjyy-theme);
            margin-left: -10px;
        }
        .content-item-body{
            /* 自动布局子元素 */
            width: 498.67px;
            height: 116px;
            /* 自动布局 */
            display: flex;
            align-items: center;
            padding: 0px;
            gap: 8px;
            align-self: stretch;
            z-index: 1;
        }
        .content-item-body-child{
            /* 自动布局子元素 */
            width: 160.89px;
            height: 116px;
            /* 自动布局 */
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0px 0px 10px 0px;
            gap: 10px;
            flex-grow: 1;
            z-index: 2;
        }
        .content-item-body-title{
            /* 自动布局子元素 */
            width: 160.89px;
            height: 40px;
            /* 自动布局 */
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 12px 10px;
            gap: 12px;
            align-self: stretch;
            z-index: 1;
            background: var(--qyyzc-card-bgc);
            box-sizing: border-box;
            /* 蓝绿色主题（驾驶舱框架）/选择器描边默认 */
            border-width: 0px 0px 1px 0px;
            border-style: solid;
            border-color: var(--business-select-border);
            /*border-color: #00828A;*/
        }

        .item-label {
            font-weight: 700;
            color: var(--t-text);
        }

        .content-item-body-body{
            /* 自动布局子元素 */
            width: 160.89px;
            height: 56px;
            /* 自动布局 */
            display: flex;
            flex-direction: column;
            padding: 0px 12px;
            gap: 8px;
            align-self: stretch;
            z-index: 2;
        }
        .content-item-body-body-item{
            /* 自动布局子元素 */
            width: 136.89px;
            height: 24px;
            /* 自动布局 */
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px;
            align-self: stretch;
            z-index: 1;
        }
        .item-desc{
            /* 自动布局子元素 */
            width: 56px;
            height: 18px;
            z-index: 0;
            font-family: Microsoft YaHei;
            font-size: 14px;
            font-weight: normal;
            line-height: normal;
            letter-spacing: normal;
            /* 蓝绿色主题（驾驶舱框架）/主题文本 */
            color: var(--sjyy-text);
            /*color: #C5EEEA;*/
        }
        .item-num{
            /* 自动布局子元素 */
            /*width: 67px;*/
            height: 24px;
            /* 自动布局 */
            display: flex;
            align-items: flex-end;
            padding: 0px;
            z-index: 1;
            text-align: right;
            font-family: DIN;
        }
        
        .item-unit {
            color: var(--t-text);
        }

        .num{
            /* 辅助色/蓝绿 */
            color: var(--sjyy-theme);
            overflow: hidden;
            /*text-overflow: ellipsis;*/
            width: 62px;
        }
        .call{
            color: var(--qyyzc-text2);
            overflow: hidden;
            /*text-overflow: ellipsis;*/
            width: 62px;
        }
        .img-div{
            /* 自动布局子元素 */
            width: 35px;
            height: 51px;
            /* 自动布局 */
            display: flex;
            padding: 0px;
            z-index: 0;
        }
        .arrow-right{
            -webkit-mask-image: var(--t-data-all-application-title-arrow-right);
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-position: 50% 50%;
            background-color: var(--sjyy-theme);
        }
        .arrow-left{
            -webkit-mask-image: var(--t-data-all-application-title-arrow-left);
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-position: 50% 50%;
            background-color: var(--sjyy-theme);
        }
        .img-div-title{
            /* 自动布局子元素 */
            width: 35px;
            height: 51px;
            /* 自动布局 */
            display: flex;
            padding: 0px;
            z-index: 0;
            /*background: url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-04-29/acf7efd369ae4212b6355b1b0265c88d.png) no-repeat center/cover;*/
            background: var(--t-data-all-application-title-before-img) no-repeat center;
        }
        #app {
            .container-wrap::-webkit-scrollbar {
                width: 0;
                height: 0;
            }

            /* Firefox */
            .container-wrap {
                overflow: scroll;
                scrollbar-width: none;
                height: 780px;
            }
        }
    </style>
</head>

<body class="绿色版">
<div id="app"></div>

</body>
<script>
    /**
     * 这里定义全局使用的变量、方法
     */
    const {
        createApp,
        reactive,
        toRefs,
        onMounted,
        onBeforeUnmount,
        onUnmounted,
        watch,
        provide,
        inject,
    } = Vue;

    // 房间号
    const roomId = localStorage.getItem("currentRoomId");
    // const roomId = localStorage.getItem("lxtSocketRoom");

    // 主题
    const themeName = localStorage.getItem("color");

    const bodyDom = document.querySelector("body");
    if (bodyDom && themeName) {
        bodyDom.className = themeName;
    }

    /**
     * 这里定义根组件内容
     */
    const subjectComponent = {
        template: \`
          <div class="data-space-container">
            <div class="tab-div">
              <button @click="changeTab('2')" id="sthjt" :class="'tab-item ' + (tabId === '2' ? 'active': '')">生态环境厅</button>
              <button @click="changeTab('5')" id="wwbt" :class="'tab-item ' + (tabId === '5' ? 'active': '')">外委办厅局</button>
            </div>
            <div class="container-wrap">
              <div class="detail-container"
                   v-for="(itemOne, index) in detailData"
                   :key="itemOne.name">
                <div class="title-one">
                  {{itemOne.name}}
                </div>
                <div class="upper-base"></div>
                <div class="content-div"
                     v-for="(item, index) in itemOne.vals"
                     :key="item"
                >
                  <div
                      class="content-item-div"
                      v-for="(item, index) in item.val"
                      :key="item.name">
                    <div class="content-item-title">
                      <div class="content-item-title-left">
                        <div class="img-div-title"></div>
                        <span>{{ item.name }}</span>
                      </div>
                      <div class="content-item-title-right">
                        <a @click="clickMore(item.desc)">了解更多 ></a>
                      </div>
                    </div>
                    <div class="content-item-body">
                      <div class="content-item-body-child">
                        <div class="content-item-body-title">
                          <div class="img-div arrow-right"></div>
                          <span class="item-label">接口</span>
                          <div class="img-div arrow-left"></div>
                        </div>
                        <div class="content-item-body-body">
                          <div class="content-item-body-body-item">
                            <div class="item-desc">提供数量</div>
                            <div class="item-num"><span class="num" :title="item.interfaceNum">{{item.interfaceNum}}</span>
                            <span class="item-unit">个</span>
                            </div>
                          </div>
                          <div class="content-item-body-body-item">
                            <div class="item-desc">调用次数</div>
                            <div class="item-num"><span class="call" :title="item.interfaceCall">{{item.interfaceCall}}</span>
                            <span class="item-unit">次</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="content-item-body-child">
                        <div class="content-item-body-title">
                          <div class="img-div arrow-right"></div>
                          <span class="item-label">标签</span>
                          <div class="img-div arrow-left"></div>
                        </div>
                        <div class="content-item-body-body">
                          <div class="content-item-body-body-item">
                            <div class="item-desc">提供数量</div>
                            <div class="item-num"><span class="num" :title="item.tagNum">{{item.tagNum}}</span>
                            <span class="item-unit">个</span>
                            </div>
                          </div>
                          <div class="content-item-body-body-item">
                            <div class="item-desc">调用次数</div>
                            <div class="item-num"><span class="call" :title="item.tagCall">{{item.tagCall}}</span>
                            <span class="item-unit">次</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="content-item-body-child">
                        <div class="content-item-body-title">
                          <div class="img-div arrow-right"></div>
                          <span class="item-label">指标</span>
                          <div class="img-div arrow-left"></div>
                        </div>
                        <div class="content-item-body-body">
                          <div class="content-item-body-body-item">
                            <div class="item-desc">提供数量</div>
                            <div class="item-num"><span class="num" :title="item.indicatorNum">{{item.indicatorNum}}</span>
                            <span class="item-unit">个</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        \`,
        setup() {

                        // <div class="content-item-body-body-item">
                        //     <div class="item-desc">调用次数</div>
                        //     <div class="item-num"><span class="call" :title="item.indicatorCall">{{item.indicatorCall}}</span>
                        //     <span class="item-unit">次</span>
                        //     </div>
                        //   </div>

            // 页面内注入全局变量和事件
            const rootData = inject("root");
            const global = reactive({
                ...toRefs(rootData),
            });

            const state = reactive({
                // 详细数据
                detailData: [],
                positions: [],
                // 点击更多的数据
                curData:{},
                // 选中元素id
                tabId: '2',
                scrollPos: [],
                container: [],
            });

            const serviceBaseUrl = 'http://192.168.24.197:7777/service/serviceinterface/search/run.action';

            const smoothScroll = () => {
                for (let i = 0; i < state.container.length; i++) {
                    state.scrollPos[i] += 0.08;
                    if (state.scrollPos[i] > (state.container[i].scrollWidth - state.container[i].clientWidth+3)) {
                        state.scrollPos[i] = 0;  // 循环复位
                    }
                    state.container[i].scrollLeft = state.scrollPos[i];
                }
                requestAnimationFrame(smoothScroll);
            }

            /**
             * 构建页面数据
             * @params value 值
             */
            const buildPageData = (dataList) => {
                const categoryOne = {};
                dataList.forEach((item) => {
                    let val = [];
                    if (Object.keys(categoryOne).includes(item.CATEGORY_ONE)) {
                        val = categoryOne[item.CATEGORY_ONE];
                    }
                    val.push({
                        name: item.NAME,
                        desc: item.NAME,
                        description: item.DESCRIPTION,
                        interfaceNum: handleNoVal(item.INTERFACE_NUM),
                        interfaceCall: handleNoVal(item.CALL_NUM),
                        tagNum: handleNoVal(item.TAG_NUM),
                        tagCall: handleNoVal(item.TAG_CALL_NUM),
                        indicatorNum: handleNoVal(item.INDICATOR_NUM),
                        indicatorCall: handleNoVal(item.INDICATOR_CALL_NUM),
                        dataTime: item.DATA_TIME,
                    });
                    categoryOne[item.CATEGORY_ONE] = val;
                });
                state.detailData = Object.keys(categoryOne).map((key) => {
                    return { name: key, val: categoryOne[key] };
                });
                console.log('获取到数据:', state.detailData);
                // 如果state.detailData中val的长度大于3，则每3个元素分为一组
                state.detailData.forEach((item) => {
                    let val = item.val;
                    let tmpArr = [];
                    let tmpVal = [];
                    if (val.length > 3) {
                        val.forEach((item, index) => {
                            tmpVal.push(item);
                            if ((index + 1) % 3 === 0) {
                                tmpArr.push({'val':tmpVal});
                                tmpVal = [];
                            }
                            if (index === (val.length-1) && tmpVal.length > 0){
                                tmpArr.push({'val':tmpVal});
                            }
                        })
                    }else{
                        tmpArr.push({'val':val});
                    }
                    item.vals = tmpArr;
                })
            };
            /**
             * 处理无数据
             * @params value 值
             */
            const handleNoVal = (value) => {
                const noDataText = '--';
                if (value === null || value === undefined || value === '' || Number.isNaN(value)) {
                    return noDataText;
                }
                return value;
            };
            /**
             * 切换tab
             * @param type
             */
            const changeTab = (type) =>{
                state.tabId = type;
                console.log('点击切换tab:',type);
                getDetailData();
            }
            /**
             * 获取详细信息
             */
            const getDetailData = async () => {
                return new Promise((resolve, reject) => {
                    axios.get(serviceBaseUrl, {
                        params: {
                            interfaceId: '3bbff638d7c1309aff61599e544314e0',
                            DEPT_CODE: state.tabId,
                            token: 'dcp',
                        }
                    }).then(response => {
                        const { head, data } = response.data;
                        if (head.statusCode === '200' && data) {
                            buildPageData(data);
                        } else {
                            console.error('获取数据失败', data);
                        }
                        resolve();
                    })
                        .catch(error => {
                            console.error(error);
                            reject(error);
                        });
                }).catch((error) => {
                    // 失败的操作
                    console.error(error);
                });
            };
            getDetailData();
            /**
             * 初始化滚动
             */
            const initScroll = () => {
                state.container = document.querySelectorAll('.num,.call');
                for (let i = 0; i < state.container.length; i++) {
                    state.scrollPos[i] = 0;
                }
                smoothScroll();
                // 悬停暂停
                for (let i = 0; i < state.container.length; i++) {
                    state.container[i].addEventListener('mouseenter', () => cancelAnimationFrame(smoothScroll));
                }
            };
            /**
             * 点击更多
             * @param name
             */
            const clickMore = (name) =>{
                state.detailData.forEach((item) => {
                    item.val.forEach((it) => {
                        if (it.name === name){
                            state.curData = it;
                        }
                    })
                })
                let msg = {
                    room: rootData.socketRoom.value, // 房间号
                    type: "initDataAllApplication", // 需要保证此类型唯一性
                    data: {
                        TODATE: state.curData.dataTime,
                        DESCRIPTION: state.curData.description,
                        NAME: name,
                        DEPT_CODE: state.tabId,
                        // 是否从tab页跳转
                        isTabSource: true,
                    },
                };
                let changeValmsg = {
                    room: rootData.socketRoom.value, // 房间号
                    type: "changeValDataAllApplication", // 需要保证此类型唯一性
                    data: {
                        showLevelTwoPopComponent: 'allApplicationCallRelationComponent',
                        showLevelTwoPop: true,
                    },
                };
                // 发送改变变量消息
                rootData.rootSocket.emit("message", changeValmsg);
                console.log('tab发送了1消息...',changeValmsg);
                // 发送业务数据消息
                rootData.rootSocket.emit("message", msg);
                console.log('tab发送了2消息...',msg);
            }

            onMounted(() => {

                const topBody = window.top.document.body;

                const topBodyClass = topBody.className;

                const bodyDom = document.querySelector('body');
                if (bodyDom) {
                    bodyDom.className = topBodyClass;
                }

                initScroll();
                // 接收socket消息
                rootData.rootOn("rootSocket:change", async (msg) => {
                    const { data, type } = msg;
                    switch (type) {
                        case '':
                            break;
                        default:
                            break;
                    }
                });
            });

            onUnmounted(() => {
                rootData.rootOff("rootSocket:change");
            });

            return {
                ...toRefs(state),
                changeTab,
                clickMore,
            };
        },
    };

    /**
     * 这里入口组件内容
     */
    const MainComponent = {
        template:
            "<subject-component v-if='state.isSocketConnect'></subject-component>",
        components: {
            subjectComponent,
        },
        setup() {

            // 获取缓存里的鹿小图全局变量数据
            const lxtGlobal = localStorage.getItem("lxtGlobal")
                ? JSON.parse(localStorage.getItem("lxtGlobal"))
                : {};

            const rootEmitter = mitt();

            let global = reactive(
                /* 插入应用级别的全局变量 相当于store中的rootData */
                {
                    socketIp:lxtGlobal.socketIp || "http://192.168.0.202:7777/socketPath",
                    socketPath:'',
                    socketRoom: roomId || "admin",
                }
            );

            let state = reactive({
                isSocketConnect: false, // socket 是否连接
            });

            // 创建 socket 连接
            let socket = null;
            if (global.socketIp) {
                const options = {};
                if (global?.socketPath) {
                    options.path = global.socketPath;
                }
                socket = io(global.socketIp, options);
            }

            provide("root", {
                ...toRefs(global),
                rootEmit: rootEmitter.emit, // mitt 发送
                rootOn: rootEmitter.on, // mitt 接收
                rootOff: rootEmitter.off, // mitt 移除
                rootSocket: socket, // socket 实例
            });

            /**
             * 监听修改全局变量事件
             * @param obj 修改后的变量
             */
            rootEmitter.on("rootData:change", (obj) => {
                global = _.set(global, obj.key, obj.value);

                if (global.socketIp && global.socketRoom) {
                    // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息
                    socket.emit("message", {
                        room: global.socketRoom, // 房间号
                        type: "internalType:ChangeGlobalValue", // 需要保证此类型唯一性
                        data: obj,
                    });
                }
            });

            /**
             * 连接成功时进入对应的房间
             */
            if (socket) {
                socket.on("connect", function () {
                    if (global.socketIp && global.socketRoom) {
                        // 进入房间
                        socket.emit("join-room", global.socketRoom);
                        state.isSocketConnect = true;
                    }
                });
            }

            /**
             * 接收到 socket 消息时触发
             * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}
             */
            if (socket) {
                socket.on("message", function (data) {
                    // socket 监听全局变量的变化，然后合并值
                    if (data.type === "internalType:ChangeGlobalValue") {
                        // 合并 globa 的值
                        global = _.set(global, data.data.key, data.data.value);
                    } else if (data.type === "changeTheme") {
                        console.log('叠加专题获取到换肤消息123', data);
                        let themeArr = [{ "skinCode": "green", "skinName": "绿色主题" }, { "skinCode": "blue", "skinName": "蓝色主题" }, { "skinCode": "pc-light", "skinName": "PC浅色版" }, { "skinCode": "dark-blackish-green", "skinName": "墨绿色版" }];
                        let skinName = themeArr.filter((item) => item.skinCode === data.data.theme)?.[0]?.skinName || ''
                        console.log(skinName);
                        const bodyDom = document.querySelector('body');
                        if (bodyDom) {
                            bodyDom.className = skinName;
                        }
                    }  else {
                        // 发送消息，通知其他页面
                        rootEmitter.emit("rootSocket:change", data);
                    }
                });
            }

            // 监听 socket 房间的变化
            watch(
                () => global.socketRoom,
                (val, oldVal) => {
                    if (socket) {
                        // 离开房间
                        socket.emit("leave-room", oldVal);
                        // 进入房间
                        socket.emit("join-room", val);
                    }
                }
            );

            onBeforeUnmount(() => {
                // 离开房间
                socket.emit("leave-room", global.socketRoom);
                // 断开连接
                socket.disconnect();
            });

            return {
                state,
            };
        },
    };

    const app = createApp(MainComponent);
    /* 下面的操作是去掉控制台Vue输出的警告信息  如果想开启警告信息可以把这个空函数注释掉 */
    app.config.warnHandler = function (msg, vm, trace) {
        // 空函数，不做任何处理
    };
    app
        .use(ElementPlus, {
            size: "small",
        })
        .mount("#app");
</script>

</html>`
};
const setVal = (msg) => {
console.log('接收到changeValDataAllApplication消息：',msg);
global.showLevelTwoPopComponent = msg.showLevelTwoPopComponent;
global.showLevelTwoPop = msg.showLevelTwoPop;
};
const recentAppMessage = () => {
rootData.rootOn('rootSocket:change', (data) => {
  if (data.type === "initDataAllApplication") {
    try {
      // 执行自定义方法
      setApplicationInfo(data.data);
    } catch (error) {
      console.error('参数格式错误', error);
    };
  };
});
};
const setApplicationInfo = (msg) => {
console.log('allApplication(全应用支撑)接收到消息---', msg);
global.applicaiton.title = msg.NAME || '--';
global.applicaiton.description = msg.DESCRIPTION || '--';
global.applicaiton.todate = msg.TODATE || '--';
global.applicaiton.deptCode = msg.DEPT_CODE;
global.applicaiton.isTabSource = msg.isTabSource || false;
};
const onmouseout1739345365135 = () => {

// 显示元素并加动画
document.getElementById('t-rect-5094.9a9212dbc').style.display = 'block';
runAnimation('t-rect-5094.9a9212dbc', [""]);

// 隐藏元素并加动画
runAnimation('t-rect-39ea.51f8eb66d', [""], 'none');
};
const onclick1740017904182 = () => {
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
clearLoop();
};
const onmouseover1739345261051 = () => {

// 显示元素并加动画
document.getElementById('t-rect-39ea.51f8eb66d').style.display = 'block';
runAnimation('t-rect-39ea.51f8eb66d', [""]);

// 隐藏元素并加动画
runAnimation('t-rect-5094.9a9212dbc', [""], 'none');
};
// 接口函数
const getCodeData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"USE_DEPT"},}).then((res) => {
     // 成功的操作
     if (res?.data?.data) {
  state.sectionData = [];
  state.sectionData = res.data.data;
  state.sectionData.unshift({
    DICTIONARY_CODE: "",
    DICTIONARY_NAME: "全部",
    EXT1: "NULL",
    EXT2: "NULL",
    EXT3: "NULL",
    EXT4: "NULL"
  })
  console.log(res, '使用部门');
  initParams();
} else {
  state.sectionData = [];
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 初始请求，调取接口
getCodeData();
// 接口函数
const getTableData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"3bbff638d7c1309aff61599e544314e0","START_DATE":state.START_TIME,"END_DATE":state.END_TIME,"DEPT_CODE":state.DEPT_CODE,"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize},}).then((res) => {
     // 成功的操作
     if (res?.data?.data && res?.data?.data.length > 0) {
  state.tableData = [];
  const pageInfo = res.data.head.pageInfo;
  state.tableData = res.data.data;
    state.tableData.forEach((obj) => {
    for (const key in obj) {
      if (obj[key] === "") {
        obj[key] = "-";
      }
    }
  });
  // for (let key in state.pageInfo) {
  //   state.pageInfo[key] = pageInfo[key];
  // }
  state.pageInfo.total = Number(pageInfo.total) || 0;
  state.pageInfo.pages = Number(pageInfo.pages) || 0;
  console.log(res, state.pageInfo, state.tableData, '列表数据');
} else {
  state.tableData = [];
  // 修改暂无样式默认样式
  setTimeout(() => {
    getEl();
  })
  state.pageInfo.total = 0;
  state.pageInfo.pages = 0;
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [state.DEPT_CODE,state.pageInfo.pageNum,state.pageInfo.pageSize], () => {
getTableData();
},{
deep: true, // 深度监听
});
// 接口函数
const getCharData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"7b729ca9fa83b005be7579360872057a","DEPT_CODE":state.DEPT_CODE,"START_DATE":state.START_TIME,"END_DATE":state.END_TIME},}).then((res) => {
     // 成功的操作
     
if (res?.data?.data && res?.data?.data.length >0) {
  state.xData = [];
  state.callsData = [];
  state.provideData = [];
  console.log(res,'8887778');
  const data = res.data.data;
  state.xData = data.map(item => item.DEPT_NAME);
  state.provideData = data.map(item => item.TGJKS);
  state.callsData = data.map(item => item.DYCS);
  state.isLoading = '加载中...';
  state.isChar = false;
  setTimeout(() => {
    state.isChar = true;
    setOption();
  })
} else {
  state.isLoading = '暂无数据';
  state.isChar = false;
  state.xData = [];
  state.callsData = [];
  state.provideData = [];
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
// 监听变量，调取接口
watch(() => [state.DEPT_CODE], () => {
getCharData();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-allApplicationNew', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage("","","");
// 执行自定义方法
getEl();
/* 接收socket.io消息 */
const onSocketChangec95bdc8b9bb342249b2c = function (data) {
if(data.type === "changeValDataAllApplication"){
try{
// 执行自定义方法
setVal(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangec95bdc8b9bb342249b2c);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangec95bdc8b9bb342249b2c);
});
// 执行自定义方法
recentAppMessage();
onBeforeMount(() => {
// 执行自定义方法
getNewTime();
});
onMounted(() => {
setPageScale('t-l-c-allApplicationNew', global.appScaleMode, 'normal');
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

 const tIframex0x4ComputedData = computed(() => _.merge({}, componentState.tIframex0x4.default, componentState.tIframex0x4?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tTextx0x3ComputedData,
tIframex0x4ComputedData,
onmouseout1739345365135,
onclick1740017904182,
onmouseover1739345261051,
};
},
};