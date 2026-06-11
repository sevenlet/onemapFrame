window.allApplicationCallRelationComponent = {
template: 
`<div id="t-l-c-allApplicationCallRelation" class="t-l-c-allApplicationCallRelation" >` +
`<t-rect id="t-rect-3c13.6e224e776" class="allApplicationCallRelation-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-79b1.520eb885e" class="allApplicationCallRelation-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-e7a0.11c026f76" class="allApplicationCallRelation-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.isTabSource === false" id="t-rect-39ea.51f8eb66d" class="allApplicationCallRelation-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @mouseout="onmouseout1739345365135" @click="onclick1740017904182">` +
`</t-rect>` +
`<t-rect v-if="state.isTabSource === false" id="t-rect-5094.9a9212dbc" class="allApplicationCallRelation-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @mouseover="onmouseover1739345261051">` +
`</t-rect>` +
`<t-text id="t-text-0849.df06c90a6" class="allApplicationCallRelation-t-text-0-5"  :label="replaceCssVariables(global.applicaiton.title, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle" :show-title="tTextx0x5ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-5c7f.c58cd1bea" class="allApplicationCallRelation-t-text-0-6"  :label="replaceCssVariables(global.applicaiton.description, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-ec6b.949ba226a" class="allApplicationCallRelation-t-text-0-7"  :label="replaceCssVariables(global.applicaiton.todate, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle">` +
`</t-text>` +
`<t-iframe id="t-iframe-d5fc.7f9ff395d" class="allApplicationCallRelation-t-iframe-0-8"  :src="tIframex0x8ComputedData.src" :srcdoc="tIframex0x8ComputedData.srcdoc" :scrolling="tIframex0x8ComputedData.scrolling" :c-style="tIframex0x8ComputedData.cStyle" :socket-url="replaceCssVariables(global.socketIp, global?.theme || global?.activeTheme || '默认主题')" :room-id="replaceCssVariables(global.socketRoom, global?.theme || global?.activeTheme || '默认主题')">` +
`</t-iframe>` +
`<t-rect v-if="state.isTabSource === true" id="t-rect-f9b3.3efb8402e" class="allApplicationCallRelation-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle" @mouseout="onmouseout1745982093985_0_0" @click="onclick1745982093985_0_1">` +
`</t-rect>` +
`<t-rect v-if="state.isTabSource === true" id="t-rect-dde7.47bc4a721" class="allApplicationCallRelation-t-rect-0-10"  :tip="tRectx0x10ComputedData.tip" :label="tRectx0x10ComputedData.label" :active="tRectx0x10ComputedData.active" :c-style="tRectx0x10ComputedData.cStyle" @mouseover="onmouseover1745982093985_0_0">` +
`</t-rect>` +
`<t-text id="t-text-41b6.96c605255" class="allApplicationCallRelation-t-text-0-11"  :label="tTextx0x11ComputedData.label" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle">` +
`</t-text>` +
`<t-text-common id="t-text-common-f2ec.5b7da19e8" class="allApplicationCallRelation-t-text-common-0-12"  :label="tTextCommonx0x12ComputedData.label" :editable="tTextCommonx0x12ComputedData.editable" :c-style="tTextCommonx0x12ComputedData.cStyle">` +
`</t-text-common>` +
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
   isTabSource: false,
   isClose: false,
   START_TIME: "",
   END_TIME: "",
   isLoading: "加载中...",
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
            default: {"width":"1712px","height":"924px","position":"unset","left":"92px","top":"77px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1712px","height":"924px","position":"unset","left":"92px","top":"77px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1653px","height":"33px","position":"unset","left":"122px","top":"177px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"var(--t-data-allapplication-title-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1653px","height":"33px","position":"unset","left":"122px","top":"177px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"var(--t-data-allapplication-title-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"1653px","height":"33px","position":"unset","left":"120px","top":"330px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"var(--t-data-allapplication-title-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1653px","height":"33px","position":"unset","left":"120px","top":"330px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"var(--t-data-allapplication-title-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1740px","top":"77px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1740px","top":"77px","animationName":"","cursor":"pointer"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-mr)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1740px","top":"77px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-mr)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1740px","top":"77px","cursor":"pointer"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"108px","left":"198px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"108px","left":"198px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"}}},
showTitle:true, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"1646px","height":"88px","color":"var(--t-text)","top":"223px","left":"124px","position":"unset","fontSize":"16px","lineHeight":"24px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","backgroundColor":"var(--qyyzc-card-bgc)","paddingTop":"16px","paddingLeft":"24px","paddingBottom":"24px","paddingRight":"24px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"1646px","height":"88px","color":"var(--t-text)","top":"223px","left":"124px","position":"unset","fontSize":"16px","lineHeight":"24px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","backgroundColor":"var(--qyyzc-card-bgc)","paddingTop":"16px","paddingLeft":"24px","paddingBottom":"24px","paddingRight":"24px"}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"132px","height":"18px","color":"#C5EEEA","lineHeight":"16px","top":"108px","left":"1594px","position":"unset","animationName":"","fontSize":"16px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"132px","height":"18px","color":"#C5EEEA","lineHeight":"16px","top":"108px","left":"1594px","position":"unset","animationName":"","fontSize":"16px"}}}, 
 },
},
tIframex0x8: {
defaultStyle: {
            default: {"width":"1645px","height":"582px","position":"unset","left":"125px","top":"396px","backgroundColor":""},
            
            },
 default: { 
 
src:"",
srcdoc:" <!--\n * @Author: chenyf\n * @Date: 2024-05-30 13:33:18\n * @LastEditTime: 2025-04-27 13:58:29\n * @LastEditors: chenyf\n-->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\" />\n    <title>全应用支撑调用链路</title>\n    <link rel=\"shortcut icon\" href=\"assets/images/favicon.ico\" />\n    <script src=\"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/resources/vue.min.js\"></script>\n    <script src=\"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/resources/socket.io.js\"></script>\n    <script src=\"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/resources/lodash.min.js\"></script>\n    <link\n            rel=\"stylesheet\"\n            href=\"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/resources/element-plus/element-plus.min.css\"\n    />\n    <script src=\"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/resources/element-plus/element-plus.min.js\"></script>\n    <script src=\"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/resources/element-plus/zhCn.js\"></script>\n    <script src=\"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/resources/mitt.min.js\"></script>\n    <script src=\"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/resources/axios.min.js\"></script>\n    <script src=\"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/resources/customjs/marked.umd.min.js\"></script>\n    <script src=\"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/resources/customjs/index.umd.js\"></script>\n    <link rel=\"stylesheet\" href=\"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/style/themes.css\" />\n    <style>\n        body {\n            margin: 0;\n            padding: 16px;\n        }\n\n        a,\n        .lxz-common-link {\n            color: #00f0ff !important;\n        }\n\n        body,\n        html,\n        #app {\n            height: fit-content;\n            color: #fff;\n            /* height: fit-content; /*\n            /* border-radius不生效 */\n            /* border-radius: 12px; */\n            opacity: 1;\n            box-sizing: border-box;\n        }\n        \n         /* 横向 */\n        .flex-container-row {\n            display: flex;\n            flex-direction: row;\n              /* 自动布局 */\n             justify-content: space-around;\n            align-items: center;\n        }\n        /* 纵向 */\n        .flex-container-column {\n            display: flex;\n            flex-direction: column;\n        }\n        /* 二级子元素 */\n       .flex-item {\n             /* 自动布局子元素 */\n            width: 288px;\n            height:136px;\n            padding: 18px 24px;\n            gap: 24px;\n            z-index: 0;\n        }\n        \n          /* 设置背景色 */\n       .flex-item-bg{\n            border-radius: 16px;\n            background: var(--t-data-allaplication-color-blue);\n            box-sizing: border-box;\n            border: 2px solid var(--t-data-allaplication-color-border-blue);\n        }\n           /* 设置高亮背景色 */\n        .flex-item-hight-bg{\n            border-radius: 16px;\n            background: var(--t-data-allaplication-color-height-blue);\n            box-sizing: border-box;\n            border: 2px solid var(--t-data-allaplication-color-border-hight);\n        }\n        .card-second{\n           \n            margin-bottom: 105px;\n            margin-top: 105px;\n        }\n        /* 第一条线 */\n        .one-level-line{\n            position: absolute;\n            width: 21px;\n            left: 49%;\n            height: 150px;\n            background: var(--t-data-all-application-up-line) 100% 100% no-repeat;\n        }\n      \n          /* 子数据线-左 */\n          .tree_left_line{\n            display: block;\n            position: absolute;\n            width: 300px;\n            left: 38%;\n            height: 90px;\n            top: -110px;\n            background: var(--t-data-all-application-left-line) no-repeat;\n        }\n       /* 子数据线-右 */\n       .tree_right_line{\n            display: block;\n            position: absolute;\n            width: 300px;\n            left: -24%;\n            height: 90px;\n            top: -110px;\n            background: var(--t-data-all-application-right-line) no-repeat;\n        }\n         /* 子数据横线 */\n         .tree_beside_line{\n            display: block;\n            position: absolute;\n            width: 138%;\n            left: 52%;\n            height: 2px;\n            top: -89px;\n            background: var(--t-data-all-application-baside-line) ;\n        }\n        \n        /* 二级内容样式 */\n        .card-content{\n            height: 136px;\n        }\n        .card-container{\n            display: flex;\n            margin-top: 24px;\n            flex-direction: row;\n            justify-content: center;\n        }\n        /* 三级内容样式 */\n       .card-content-three{\n            width: 288px;\n            height: 136px;\n        }\n        .flex-item.card-content-three {\n            margin-right: 10px; /* 设置每个子项右侧的间距 */\n        }\n        .flex-item.card-content-three:last-child {\n            margin-right: 0; /* 移除最后一个子项的右侧间距 */\n        }\n        .flex-item.card-content-three:nth-last-child(2) .tree_beside_line{\n           width: 66%;\n        }\n        /* 一级item */\n        .card-top-item{\n            /* 自动布局子元素 */\n            width: 245px;\n            height: 80px;\n            /* 自动布局 */\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            gap: 24px;\n            z-index: 0;\n            font-size: 24px;\n            font-weight: bold;\n            line-height: 24px;\n            text-align: center;\n            letter-spacing: 0.04em;\n            /* 蓝绿色主题（驾驶舱框架）/主题色 */\n            color: var(--t-data-allaplication-color-one-border);\n        }\n        /* 标题 */\n        .card-content .card-big-title{\n            margin-top: 5px;\n        }\n        .card-content .card-one-title{\n            font-size: 24px;\n            font-weight: bold;\n            line-height: 24px;\n            text-align: center;\n            letter-spacing: 0.04em;\n            /* 蓝绿色主题（驾驶舱框架）/主题色 */\n            color: var(--t-data-allaplication-color-one-border);\n        }\n        .card-content .card-title{\n            /* 标题/微软雅黑-中等16 */\n            font-family: Microsoft YaHei;\n            font-size: 16px;\n            font-weight: normal;\n            line-height: 16px;\n            text-align: center;\n            letter-spacing: normal;\n            /* 常规文本 */\n            color: var(--t-text);\n        }\n        .card-content .card-num{\n            /* 数据/DIN-粗体32 */\n            font-family: DIN;\n            font-size: 32px;\n            font-weight: bold;\n            line-height: 32px;\n            letter-spacing: normal;\n            color: var(--t-text);\n            margin-top: 5px;\n        }\n        .card-content .card-unit{\n            font-size: 12px;\n            font-weight: normal;\n            line-height: 20px;\n            letter-spacing: normal;\n            /* 一张图规范/文本弱化 */\n            color: var(--t-color-text-green);\n        }\n        /* 第二个箭头线 */\n        .second-vertical{\n            width: 50px;\n            height: 150px;\n            position: relative;\n            overflow: hidden;\n        }\n       \n\n    </style>\n</head>\n\n<body class=\"绿色版\">\n    <div id=\"app\">\n        <el-row>\n            <el-col :span=\"24\">\n                <div class=\"flex-container-row\">\n                    <div class=\"flex-item  flex-item-bg card-top-item\" >{{systemName}}</div>\n                </div>\n                <span class=\"one-level-line\"></span>\n               \n            </el-col>\n          </el-row>\n          <el-row>\n            <el-col :span=\"24\">\n                <div class=\"flex-container-row card-second\">\n                  <div class=\"flex-item  flex-item-bg card-content\" style=\" width: 393px;\" >\n                    <div style=\"margin-top: 5px;\" class=\"card-one-title\">接口服务</div>\n                    <div style=\"display: flex;margin-top: 24px;flex-direction: row;justify-content:center\">\n                        <div style=\"flex-direction: column;margin-right:50px\">\n                            <div class=\"card-title\">总接口数量</div>\n                            <div class=\"card-num\">{{indicatorTotal.totalNum}} <span class=\"card-unit\">个</span></div>\n                        </div>\n                        <div style=\"flex-direction: column;\">\n                            <div class=\"card-title\">总服务次数</div>\n                            <div class=\"card-num\">{{indicatorTotal.accessNum}} \n                                <span class=\"card-unit\">次</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div style=\"margin-left: 38%;margin-top: 10px;\">\n                        <div  class=\"second-vertical\">\n                            <!-- <img src=\"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-04-29/c9230175c7a74234a6018d95d69bfd80.png\"/> -->\n                            <span class=\"one-level-line\" v-if=\"indicatorList.length !== 4\"></span>\n                            <span class=\"one-level-line\" v-else style=\"height: 35px;background-position: top;\"></span>\n                        </div>\n                        <div v-if=\"isDisplayVertial\" class=\"second-vertical\" style=\"height: 60px;margin-top: -5px;\">\n                            <!-- <img src=\"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-04-29/c9230175c7a74234a6018d95d69bfd80.png\"/> -->\n                            <span class=\"one-level-line\"></span>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n            </el-col>\n          </el-row>\n          <el-row>\n            <el-col :span=\"24\">\n                <div  class=\"flex-container-row\">\n                    <div v-for=\"(item, index) in indicatorList\" :class=\"['flex-item',((indicatorList.length == 3 && index == 1) || (indicatorList.length == 5 && index == 2))?'flex-item-hight-bg':'flex-item-bg','card-content','card-content-three']\">\n                        \n                        <div class=\"card-big-title\">\n                        <!-- 3个元素的布局逻辑 -->\n                        <template v-if=\"indicatorList.length === 3\">\n                            <div v-if=\"index === 2\" style=\"position:relative\">\n                            <div class=\"tree_right_line\"></div>\n                            </div>\n                            <div v-else style=\"position:relative\">\n                            <div v-if=\"index !== 1\" class=\"tree_left_line\"></div>\n                            <div class=\"tree_beside_line\" :style=\"{width: '160%', left: index==1?'50%':'120%'}\"></div>\n                            </div>\n                            <div class=\"card-one-title\">{{item.name}}</div>\n                        </template>\n\n                        <!-- 4个元素的布局逻辑 -->\n                        <template v-else-if=\"indicatorList.length === 4\">\n                            <div v-if=\"index === 3 || index === 2\" style=\"position:relative\">\n                                <div class=\"tree_right_line\"></div>\n                                <div v-if=\"index === 2\" class=\"tree_beside_line\" :style=\"{'width': '100%', 'left': '50%'}\"></div>\n                            </div>\n                            <div v-else style=\"position:relative\">\n                                <div v-if=\"index !== 2\" class=\"tree_left_line\"></div>\n                                <div v-if=\"index === 2\"  class=\"tree_beside_line\" style=\"width: 100%; left: 50%\"></div>\n                                <div v-else  class=\"tree_beside_line\" style=\"width: 100%; left: 120%\"></div>\n\n                            </div>\n                            <div class=\"card-one-title\">{{item.name}}</div>\n                        </template>\n\n                        <!-- 5个元素的布局逻辑 -->\n                        <template v-else-if=\"indicatorList.length === 5\">\n                            <div v-if=\"index === 4 || index === 3\" style=\"position:relative\">\n                                <div class=\"tree_right_line\"></div>\n                                <div v-if=\"index === 3\" class=\"tree_beside_line\" :style=\"{'width': '66%', 'left': '50%'}\"></div>\n                            </div>\n                            <div v-else style=\"position:relative\">\n                                <div v-if=\"index !== 2\" class=\"tree_left_line\"></div>\n                                <div v-if=\"index === 2\"  class=\"tree_beside_line\" style=\"width: 66%; left: 50%\"></div>\n                                <div v-else  class=\"tree_beside_line\" style=\"width: 66%; left: 120%\"></div>\n\n                            </div>\n                            <div class=\"card-one-title\">{{item.name}}</div>\n                        </template>\n                        </div>\n                        <div class=\"card-container\">\n                            <div style=\"flex-direction: column;margin-right:50px\">\n                                <div class=\"card-title\">{{item.subTitle}}</div>\n                                <div class=\"card-num\">{{item.num}}\n                                    <span class=\"card-unit\">{{item.unit}}</span>\n                                </div>\n                            </div>\n                            <div style=\"flex-direction: column;\">\n                                <div class=\"card-title\">{{item.accessTitle}}</div>\n                                <div class=\"card-num\">{{item.accessNum}}\n                                    <span class=\"card-unit\">{{item.accessUnit}}</span>\n                                </div>\n                            </div>\n                        </div>\n                      </div>\n                       \n                </div>\n           </el-col>\n         \n          </el-row>\n    </div>\n<script>\n     /**\n     * 获取页面参数\n     * @param key - 参数名\n     */\n     const getQueryVariable = (key) => {\n        let query = window.location.href.split(\"?\")[1];\n        if (!query) {\n            return;\n        }\n        let vars = query?.split(\"&\");\n        for (let i = 0; i < vars.length; i++) {\n            let pair = vars[i].split(\"=\");\n            console.log(pair[0]);\n            if (pair[0] === key) {\n                return pair[1];\n            }\n        }\n    }\n    /**\n     * 这里定义全局使用的变量、方法\n     */\n    const {\n        createApp,\n        computed,\n        ref,\n        reactive,\n        toRefs,\n        onBeforeMount,\n        onMounted,\n        onBeforeUpdate,\n        onUpdated,\n        onBeforeUnmount,\n        onUnmounted,\n        onErrorCaptured,\n        onRenderTracked,\n        onRenderTriggered,\n        watch,\n        provide,\n        inject,\n        nextTick,\n    } = Vue;\n\n\n    // 主题\n   // 主题\n   const themeName = localStorage.getItem(\"color\");\n\n    const bodyDom = document.querySelector(\"body\");\n    if (bodyDom && themeName) {\n        bodyDom.className = themeName;\n    }\n    const App = {\n            setup() {\n                const serviceBaseUrl = 'http://192.168.24.197:7777/service/serviceinterface/search/run.action';\n                //是否展示中间的线条\n                const isDisplayVertial = ref(false);\n                let indicatorTotal = ref({\n                    totalNum : 0,//总量\n                    accessNum : 0//总访问次数\n                });\n                let systemName = ref('--')\n                let indicatorData = [\n                    { name : '业务主题表',num : 0,unit : '个', subTitle : \"主题表数量\",accessTitle : \"访问次数\",accessNum : 0, accessUnit: '次',visible:true } , \n                    { name : '环境指标',num : 0,unit : '个',  subTitle : \"指标数量\",accessTitle : \"访问次数\",accessNum : 0, accessUnit: '次' ,visible:true} , \n                    { name : '环境管理对象',num : 0,unit : '个', subTitle : \"对象数量\",accessTitle : \"访问次数\",accessNum : 0, accessUnit: '次' ,visible:true} , \n                    { name : '环境标签',num : 0,unit : '个', subTitle : \"标签数量\",accessTitle : \"访问次数\",accessNum : 0, accessUnit: '次',visible:true } , \n                    { name : '告警预警数量',num : 0,unit : '个', subTitle : \"预警数量\",accessTitle : \"访问次数\",accessNum : 0, accessUnit: '次' ,visible:true} \n                ];\n                //指标情况\n                const indicatorList = ref(indicatorData);\n                //默认宽度\n                let basideWidth = ref(135);\n               /**\n                 * 获取对应的业务数据\n                 */\n                const getAllApplicationData =(params) => {\n                    return new Promise((resolve, reject) => {\n                    axios.get(serviceBaseUrl, {\n                        params: {\n                        interfaceId: '3bbff638d7c1309aff61599e544314e0',\n                         token: 'dcp',\n                         ...params\n                        }\n                    }).then(response => {\n                        let resData =response.data.data[0];\n                        //系统名称\n                        systemName.value = resData.NAME;\n                        //主题表\n                        indicatorData[0].num = resData.BUSINESS_TABLE_NUM || 0;\n                        indicatorData[0].accessNum = resData.BUSINESS_TABLE_CALL_NUM|| 0;\n\n                        //环境指标\n                        indicatorData[1].num = resData.INDICATOR_NUM || 0;\n                        indicatorData[1].accessNum = resData.INDICATOR_CALL_NUM || 0;\n\n                        //环境管理对象\n                        indicatorData[2].num = resData.BUSINESS_OBJ_NUM || 0;\n                        indicatorData[2].accessNum = resData.BUSINESS_OBJ_CALL_NUM || 0;\n\n                        //环境标签\n                        indicatorData[3].num = resData.TAG_NUM || 0;\n                        indicatorData[3].accessNum = resData.TAG_CALL_NUM || 0;\n\n                        // //告警预警数量\n                        indicatorData[4].num = resData.BUSINESS_TABLE_NUM || 0;\n                        indicatorData[4].accessNum = resData.ALARM_CALL_NUM || 0;\n                       \n                        //计算总量\n                        indicatorData.forEach((item,index) =>{\n                            indicatorTotal.value.totalNum += parseInt(item.num);\n                            indicatorTotal.value.accessNum += parseInt(item.accessNum);\n                         });\n                         \n                         //过滤只展示的数据\n                         indicatorList.value = indicatorList.value.filter(item => item.visible);\n\n                         isDisplayVertial.value = indicatorList.value.length ==5 || indicatorList.value.length == 3? true : false;\n                         if(indicatorList.value.length == 4){\n                            //四个指标\n                            basideWidth.value = 173;\n                         }\n                        resolve();\n                    })\n                    .catch(error => {\n                        console.error(error);\n                        reject(error);\n                    });\n                    }).catch((error) => {\n                    // 失败的操作\n                    console.error(error);\n                    });\n                };\n              \n               // 获取缓存里的鹿小图全局变量数据\n                const lxtGlobal = localStorage.getItem(\"lxtGlobal\")\n                    ? JSON.parse(localStorage.getItem(\"lxtGlobal\"))\n                    : {};\n                const rootEmitter = mitt();\n                let global = reactive(\n                    /* 插入应用级别的全局变量 相当于store中的rootData */\n                    {\n                        socketIp:lxtGlobal.socketIp || \"http://192.168.0.202:7777/socketPath\",\n                        socketPath:'',\n                        socketRoom: localStorage.getItem(\"currentRoomId\") || \"admin\",\n                    }\n                );\n\n                let state = reactive({\n                    isSocketConnect: false, // socket 是否连接\n                });\n\n                // 创建 socket 连接\n                let socket = null;\n                if (global.socketIp) {\n                    const options = {};\n                    if (global?.socketPath) {\n                    options.path = global.socketPath;\n                    }\n                    console.log('开始建立连接：',global.socketIp,options);\n                    socket = io(global.socketIp, options);\n                }\n\n                provide(\"root\", {\n                    ...toRefs(global),\n                    rootEmit: rootEmitter.emit, // mitt 发送\n                    rootOn: rootEmitter.on, // mitt 接收\n                    rootOff: rootEmitter.off, // mitt 移除\n                    rootSocket: socket, // socket 实例\n                });\n               \n               /**\n                 * 接收到 socket 消息时触发\n                 * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}\n                 */\n                if (socket) {\n                    socket.on(\"connect\", function () {\n                    if (global.socketIp && global.socketRoom) {\n                        // \n                        console.log('全应用支撑，进入房间',socket,global.socketRoom);\n                        socket.emit(\"join-room\", global.socketRoom);\n                        state.isSocketConnect = true;\n                        console.log('连接结果：', state.isSocketConnect);\n                        console.log('通知lego全应用支撑加载完成，开始发送消息',socket,global.socketRoom)\n                        // 通知大屏加载完成\n                        socket.emit(\"message\", {\n                            room: global.socketRoom,\n                            type: \"allApplicationLoaded\",\n                            data: {},\n                        });\n                     }\n                    });\n                    socket.off(\"message\");\n                    // 保存消息处理函数的引用，以便后续可以移除\n                    const messageHandler = function (data) {\n                        console.log('进入全应用支撑：',data);\n                        // socket 监听全局变量的变化，然后合并值\n                        if (data.type === \"changeAllApplication\") {\n                            console.log('收到消息：changeAllApplication');\n                            // 处理消息的代码\n                            getAllApplicationData(data.data);\n                        }\n                        \n                        if(data.type === 'closePopup'){\n                            //关闭弹窗\n                            console.log('关闭弹窗');\n                            // 移除消息监听\n                            socket.off(\"message\", messageHandler);\n                            // 移除所有事件的所有监听器\n                           // socket.removeAllListeners();\n    \n                            // 通知大屏关闭弹窗\n                            socket.emit(\"message\", {\n                                room: global.socketRoom,\n                                type: \"closeIframe\",\n                                data: {},\n                            });\n                            // 断开连接\n                            // socket.disconnect();\n                            socket.destroy();\n                        }\n                    };\n                    socket.off(\"message\", messageHandler);\n                    // 添加消息监听\n                    socket.on(\"message\", messageHandler);\n                 \n                }\n               \n\n                // 监听 socket 房间的变化\n                watch(\n                    () => global.socketRoom,\n                    (val, oldVal) => {\n                    if (socket) {\n                        // 离开房间\n                        socket.emit(\"leave-room\", oldVal);\n                        // 进入房间\n                        socket.emit(\"join-room\", val);\n                    }\n                    }\n                );\n                onMounted(() => {\n                    console.log('加载全应用支撑页面完成');\n                    //挂载后执行的操作\n                    const topBody = window.top.document.body;\n    \n                    const topBodyClass = topBody.className;\n    \n                    const bodyDom = document.querySelector('body');\n                    if (bodyDom) {\n                        bodyDom.className = topBodyClass;\n                    }\n                });\n                onUnmounted(() => {\n                     // 移除 'message' 事件的所有监听器\n                     socket.off('message');\n                })\n                onBeforeUnmount(() => {\n                    console.log('离开全应用支撑页面');\n                    // 离开房间\n                    socket.emit(\"leave-room\", global.socketRoom);\n                    // 断开连接\n                    socket.disconnect();\n                });\n                return {\n                    systemName,\n                    basideWidth,\n                    indicatorTotal,\n                    indicatorList,\n                    isDisplayVertial\n                };\n            }\n        };\n   createApp(App).mount('#app');\n </script>\n</body>\n</html>",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"1645px","height":"582px","position":"unset","left":"125px","top":"396px","backgroundColor":""}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1740px","top":"77px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-hg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1740px","top":"77px","animationName":"","cursor":"pointer"}}}, 
 },
},
tRectx0x10: {
defaultStyle: {
            default: {"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-mr)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1740px","top":"77px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"63px","height":"61px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-shape-close-mr)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"64px 61px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1740px","top":"77px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"37px","height":"18px","color":"#C5EEEA","lineHeight":"16px","top":"108px","left":"1554px","position":"unset","animationName":"","fontSize":"16px"},
            
            },
 default: { 
 
label:"截至",
editable:false,
cStyle:{"wrapper":{"default":{"width":"37px","height":"18px","color":"#C5EEEA","lineHeight":"16px","top":"108px","left":"1554px","position":"unset","animationName":"","fontSize":"16px"}}}, 
 },
},
tTextCommonx0x12: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"var(--t-text)","fontFamily":"方正综艺","fontSize":"20px","position":"unset","left":"160px","top":"171px"},
            
            },
 default: { 
 
label:"基本介绍",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"var(--t-text)","fontFamily":"方正综艺","fontSize":"20px","position":"unset","left":"160px","top":"171px"}}}, 
 },
},
});
const clearLoop = () => {
if (global.loopId) {
  clearInterval(global.loopId);
}
};
const setApplicationInfo = (msg) => {
console.log('allApplication接收到消息---',msg);
global.applicaiton.title= msg.NAME || '--';
global.applicaiton.description= msg.DESCRIPTION  || '--';
global.applicaiton.todate= msg.TODATE  || '--';
global.applicaiton.deptCode= msg.DEPT_CODE;
state.isTabSource = msg.isTabSource || false;
console.log(global.isTabSource);
};
const initAppData = () => {
state.isTabSource = global.applicaiton.isTabSource || false;

console.log(global.applicaiton, 'global.applicaiton');
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
                    key:'showLevelTwoPop',
                    value:false,
                    data: {
                      showLevelTwoPop: false
                    },
                  });
};
const onmouseover1739345261051 = () => {

// 显示元素并加动画
document.getElementById('t-rect-39ea.51f8eb66d').style.display = 'block';
runAnimation('t-rect-39ea.51f8eb66d', [""]);

// 隐藏元素并加动画
runAnimation('t-rect-5094.9a9212dbc', [""], 'none');
};
const onmouseout1745982093985_0_0 = () => {

// 显示元素并加动画
document.getElementById('t-rect-dde7.47bc4a721').style.display = 'block';
runAnimation('t-rect-dde7.47bc4a721', [""]);

// 隐藏元素并加动画
runAnimation('t-rect-f9b3.3efb8402e', [""], 'none');
};
const onclick1745982093985_0_1 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'showLevelTwoPop',
                    value:false,
                    data: {
                      showLevelTwoPop: false
                    },
                  });
};
const onmouseover1745982093985_0_0 = () => {

// 显示元素并加动画
document.getElementById('t-rect-f9b3.3efb8402e').style.display = 'block';
runAnimation('t-rect-f9b3.3efb8402e', [""]);

// 隐藏元素并加动画
runAnimation('t-rect-dde7.47bc4a721', [""], 'none');
};
 function handleWindowResize() {
                            setPageScale('t-l-c-allApplicationCallRelation', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
const onSocketChangeaae0eeb2a62a4e1cbb35 = function (data) {
if(data.type === "closeIframe"){
try{
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
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangeaae0eeb2a62a4e1cbb35);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangeaae0eeb2a62a4e1cbb35);
});
// 执行自定义方法
initAppData();
onBeforeMount(() => {
});
onMounted(() => {
setPageScale('t-l-c-allApplicationCallRelation', global.appScaleMode, 'normal');
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

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tIframex0x8ComputedData = computed(() => _.merge({}, componentState.tIframex0x8.default, componentState.tIframex0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tRectx0x10ComputedData = computed(() => _.merge({}, componentState.tRectx0x10.default, componentState.tRectx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tTextCommonx0x12ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x12.default, componentState.tTextCommonx0x12?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tIframex0x8ComputedData,
tRectx0x9ComputedData,
tRectx0x10ComputedData,
tTextx0x11ComputedData,
tTextCommonx0x12ComputedData,
onmouseout1739345365135,
onclick1740017904182,
onmouseover1739345261051,
onmouseout1745982093985_0_0,
onclick1745982093985_0_1,
onmouseover1745982093985_0_0,
};
},
};