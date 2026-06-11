window.testLeftMenuComponent = {
template: 
`<div id="t-l-c-testLeftMenu" class="t-l-c-testLeftMenu" >` +
`<t-rect v-if="state.showMenu === true" id="t-rect-1bda.61271563a" class="testLeftMenu-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.showMenu === true" id="t-rect-19e5.e86ec2bef" class="testLeftMenu-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-tabs id="t-tabs-2037.5bf01a865" class="testLeftMenu-t-tabs-0-4"  :alias="tTabsx0x4ComputedData.alias" :data="state.typeList" :active-tab="state.type" :tab-position-extend="tTabsx0x4ComputedData.tabPositionExtend" :stretch="tTabsx0x4ComputedData.stretch" :c-style="tTabsx0x4ComputedData.cStyle" @tab-click="ontabClick1719921924660">` +
`</t-tabs>` +
`<t-rect v-if="state.showMenu === true" id="t-rect-5c2e.c6ce5466f" class="testLeftMenu-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle" @click="onclick1719920562468">` +
`</t-rect>` +
`<t-iframe id="t-iframe-32a6.a99f8be3" class="testLeftMenu-t-iframe-0-6"  :src="tIframex0x6ComputedData.src" :srcdoc="tIframex0x6ComputedData.srcdoc" :scrolling="tIframex0x6ComputedData.scrolling" :c-style="tIframex0x6ComputedData.cStyle" :socket-url="global.socketIp" :room-id="global.socketRoom">` +
`</t-iframe>` +
`<t-iframe id="t-iframe-13b6.211504a4b" class="testLeftMenu-t-iframe-0-7"  :src="tIframex0x7ComputedData.src" :srcdoc="tIframex0x7ComputedData.srcdoc" :scrolling="tIframex0x7ComputedData.scrolling" :c-style="tIframex0x7ComputedData.cStyle" :socket-url="global.socketIp" :room-id="global.socketRoom">` +
`</t-iframe>` +
`<t-rect v-if="state.showMenu === false" id="t-rect-29c7.78199920c" class="testLeftMenu-t-rect-0-10"  :tip="tRectx0x10ComputedData.tip" :label="tRectx0x10ComputedData.label" :active="tRectx0x10ComputedData.active" :c-style="tRectx0x10ComputedData.cStyle" @click="onclick1721971936695">` +
`</t-rect>` +
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
   typeList: [{"label":"专题","name":"special"},{"label":"图层","name":"layer"}],
   type: "special",
   showMenu: true,
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
tRectx0x1: {
defaultStyle: {
            default: {"width":"221px","height":"43px","position":"unset","left":"1px","top":"1px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--left-menu-head-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"221px","height":"43px","position":"unset","left":"1px","top":"1px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--left-menu-head-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"223px","height":"533px","top":"0px","left":"0px","backgroundColor":"rgba(6, 18, 8, 0)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset","backgroundImage":"var(--left-menu-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"223px","height":"533px","top":"0px","left":"0px","backgroundColor":"rgba(6, 18, 8, 0)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset","backgroundImage":"var(--left-menu-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}}, 
 },
},
tTabsx0x4: {
defaultStyle: {
            default: {"width":"155px","height":"18px","position":"unset","left":"76px","top":"13px","backgroundColor":"rgba(88, 108, 195, 0)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"专题","name":"special"},{"label":"图层","name":"layer"}],
activeTab:"special",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"width":"155px","height":"18px","position":"unset","left":"76px","top":"13px","backgroundColor":"rgba(88, 108, 195, 0)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"itemLabel":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)"},"active":{"color":"var(--area-font-active-color)","fontSize":"14px","fontWeight":"700"}},"itemActiveBorder":{"default":{"display":"none"}},"itemWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","width":"auto","marginLeft":"0px","marginRight":"20px","textAlign":"right"},"active":{"backgroundColor":"rgba(255, 255, 255, 0)","color":""}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"25px","height":"25px","position":"unset","left":"16px","top":"10px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/eccc79ac5454467f9fae314902c11228.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","cursor":"pointer","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--left-menu-unpack-bg)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"25px","height":"25px","position":"unset","left":"16px","top":"10px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/eccc79ac5454467f9fae314902c11228.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","cursor":"pointer","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--left-menu-unpack-bg)"}}}, 
 },
},
tIframex0x6: {
defaultStyle: {
            default: {"width":"201px","height":"470px","position":"unset","left":"16px","top":"52px","animationName":"","display":"none","backgroundColor":"rgba(23, 62, 228, 0)"},
            
            },
 default: { 
 
src:"http://127.0.0.1:5500/index.html#/layer",
srcdoc:"<!--\n * @Author: lvzhixin\n * @Date: 2024-05-30 13:33:18\n * @LastEditTime: 2025-01-02 15:46:47\n * @LastEditors: lichun\n * @Description: File Info\n-->\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\" />\n  <title>图层菜单</title>\n  <link rel=\"shortcut icon\" href=\"assets/images/favicon.ico\" />\n  <!-- vue 这里最终应该下载一个稳定版本 -->\n  <script\n          src=\"./resources/vue.min.js\"></script>\n\n  <!-- socket插件 -->\n  <script\n          src=\"./resources/socket.io.js\"></script>\n\n  <!-- lodash插件 -->\n  <script\n          src=\"./resources/lodash.min.js\"></script>\n\n  <!-- 引入样式 -->\n  <link rel=\"stylesheet\"\n        href=\"./resources/element-plus/element-plus.min.css\" />\n  <!-- 引入组件库 -->\n  <script\n          src=\"./resources/element-plus/element-plus.min.js\"></script>\n  <script\n          src=\"./resources/element-plus/zhCn.js\"></script>\n\n  <!-- 通信插件mitt https://www.npmjs.com/package/mitt -->\n  <script\n          src=\"./resources/mitt.min.js\"></script>\n\n  <!-- HTTP库 -->\n  <script\n          src=\"./resources/axios.min.js\"></script>\n\n  <!-- 主题样式 -->\n  <link rel=\"stylesheet\"\n        href=\"./assets/style/themes.css\" />\n\n  <style>\n    body {\n      margin: 0;\n    }\n\n    body,\n    html,\n    #app {\n      height: 100%;\n    }\n\n    .layer {\n      height: 100%;\n      width: 100%;\n      /* 调试时可打开背景注释 */\n      /* background: black; */\n\n      --menu-padding-left: 22px;\n    }\n\n    .layer .el-scrollbar__view {\n      padding-right: 8px;\n    }\n\n    /* 复选框样式 */\n    .layer .el-checkbox {\n      --el-checkbox-background-color: var(--left-menu-checkbox-bg);\n      --el-border-base: 1px solid var(--left-menu-checkbox-border);\n\n      --el-checkbox-checked-background-color: #3B382A;\n      --el-checkbox-checked-input-border-color: #FFF198;\n      --el-checkbox-input-border-color-hover: #FFF198;\n    }\n\n    .layer .el-checkbox__input.is-focus:not(.is-checked) .el-checkbox__inner:not(:hover) {\n      border-color: var(--left-menu-checkbox-border);\n    }\n\n    /* 树样式 */\n    .layer .el-tree {\n      --el-tree-node-hover-background-color: transparent;\n      --el-tree-font-color: #fff;\n      --el-tree-expand-icon-color: #fff;\n\n      background: transparent;\n    }\n\n    /* 树-箭头样式-非叶子节点 */\n    .layer .el-icon-caret-right:not(.is-leaf):before {\n      border-radius: 3px;\n      background: var(--left-menu-tree-unpack-bg);\n    }\n\n    /* 树-箭头样式 */\n    .layer .el-icon-caret-right:before {\n      padding: 3px;\n      font-size: 9px;\n    }\n\n    .layer .el-tree .el-tree-node .el-tree-node__content {\n      padding-right: 6px;\n    }\n\n    /* 树节点 */\n    .layer .el-tree-node__content {\n      height: 36px;\n    }\n\n    /* 所有菜单项的复选框 */\n    .layer .el-tree-node__content>label.el-checkbox {\n      margin-right: 6px;\n    }\n\n    /* 菜单（非一级）的高亮样式 */\n    .layer .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {\n      background-color: transparent;\n    }\n\n    /* 超出内容宽度的省略号样式 */\n    .layer .custom-tree-node {\n      display: flex;\n      flex: 1;\n      align-items: center;\n      justify-content: space-between;\n      min-width: 10px;\n    }\n\n    /* 自定义树节点文本的样式 */\n    .layer .custom-tree-node .custom-tree-node-text {\n      flex: 1;\n      min-width: 10px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    /* 菜单文本高亮 */\n    .layer .custom-tree-node .custom-tree-node-text.active {\n      /* color: #FFEC9F;\n        text-shadow: 0px 0px 10px rgba(255, 235, 187, 0.5);\n        font-weight: bold; */\n    }\n\n    /* 操作按钮组 */\n    .layer .operation-btns {\n      display: flex;\n      align-items: center;\n      flex-shrink: 0;\n    }\n\n    /* 移动图层的按钮 */\n    .layer .move-btn {\n      width: 22px;\n      height: 17px;\n      background: #74897D;\n      mask: no-repeat center center / cover;\n    }\n\n    /* 移动图层的按钮 */\n    .layer .move-btn:hover {\n      background: #fff;\n    }\n\n    .layer .el-scrollbar {\n      --el-scrollbar-opacity: 1;\n      --el-scrollbar-background-color: var(--left-menu-scrollbar-bg);\n      --el-scrollbar-hover-opacity: 1;\n      --el-scrollbar-hover-background-color: var(--left-menu-scrollbar-bg);\n    }\n  </style>\n</head>\n\n<body>\n<div id=\"app\"></div>\n\n<script>\n  /**\n   * 这里定义全局使用的变量、方法\n   */\n  const {\n    createApp,\n    computed,\n    ref,\n    reactive,\n    toRefs,\n    onBeforeMount,\n    onMounted,\n    onBeforeUpdate,\n    onUpdated,\n    onBeforeUnmount,\n    onUnmounted,\n    onErrorCaptured,\n    onRenderTracked,\n    onRenderTriggered,\n    watch,\n    provide,\n    inject,\n    nextTick\n  } = Vue;\n\n  // 房间号\n  const roomId = localStorage.getItem('lxtSocketRoom');\n  // 主题\n  const themeName = localStorage.getItem('lxtTheme');\n\n  const bodyDom = document.querySelector('body');\n  if (bodyDom && themeName) {\n    bodyDom.classList.add(themeName);\n  }\n\n  /**\n   * 这里定义图层组件内容\n   */\n  const layerComponent = {\n    template: `\n      <div class=\"layer\">\n      <el-scrollbar max-height=\"100%\">\n        <el-tree\n                ref=\"treeRef\"\n                highlight-current\n                node-key=\"libraryId\"\n                empty-text=\"无数据\"\n                show-checkbox\n                default-expand-all\n                :props=\"propsMap\"\n                :data=\"data\"\n                :indent=\"22\"\n                :expand-on-click-node=\"false\"\n                @check=\"handleCheck\"\n        >\n          <template #default=\"{ node, data }\">\n                  <span class=\"custom-tree-node\">\n                    <span\n                            class=\"custom-tree-node-text flex-align-items-center\"\n                            :title=\"getTitle(data)\"\n                    >\n                      {{node.label}}<span v-if=\"data.hasDialog\" @click=\"handleHelp(data)\">★</span>\n                    </span>\n                  </span>\n          </template>\n        </el-tree>\n      </el-scrollbar>\n      </div>\n    `,\n    setup(props, { emit }) {\n      // 页面内注入全局变量和事件\n      const rootData = inject(\"root\");\n\n      const global = reactive({\n        ...toRefs(rootData),\n      });\n\n      // 配置选项的映射\n      const propsMap = {\n        children: 'children',\n        label: 'name',\n      };\n\n      // 菜单树DOM\n      const treeRef = ref();\n\n      // 获取缓存里的图层数据\n      const lxtAsideLayerMap = localStorage.getItem('lxtAsideLayerMap') ? JSON.parse(localStorage.getItem('lxtAsideLayerMap')) : [];\n\n      const state = reactive({\n        // 树形菜单数据\n        data: lxtAsideLayerMap,\n        data2: [\n          {\n            \"name\": \"大气环境\",\n            \"layerId\": \"\",\n            \"libraryId\": \"airCatalog\",\n            \"children\": [\n              {\n                \"name\": \"大气-监测-站点告警\",\n                \"layerId\": \"大气-监测-站点告警\",\n                \"libraryId\": \"大气-监测-站点告警\",\n                \"parentId\": \"airCatalog\"\n              },\n              {\n                \"name\": \"大气-预测-区域预报\",\n                \"layerId\": \"大气-预测-区域预报\",\n                \"libraryId\": \"大气-预测-区域预报\",\n                \"parentId\": \"airCatalog\"\n              },\n              {\n                \"name\": \"大气-预测-站点预报\",\n                \"layerId\": \"大气-预测-站点预报\",\n                \"libraryId\": \"大气-预测-站点预报\",\n                \"parentId\": \"airCatalog\"\n              },\n              {\n                \"name\": \"大气-污染源-涉气污染源\",\n                \"layerId\": \"大气-污染源-涉气污染源\",\n                \"libraryId\": \"大气-污染源-涉气污染源\",\n                \"parentId\": \"airCatalog\"\n              },\n              {\n                \"name\": \"大气-预警-报警统计\",\n                \"layerId\": \"大气-预警-报警统计\",\n                \"libraryId\": \"大气-预警-报警统计\",\n                \"parentId\": \"airCatalog\"\n              },\n              {\n                \"name\": \"大气-预警-区域报警统计\",\n                \"layerId\": \"大气-预警-区域报警统计\",\n                \"libraryId\": \"大气-预警-区域报警统计\",\n                \"parentId\": \"airCatalog\"\n              },\n              {\n                \"name\": \"大气-预警-实时报警\",\n                \"layerId\": \"大气-预警-实时报警\",\n                \"libraryId\": \"大气-预警-实时报警\",\n                \"parentId\": \"airCatalog\"\n              },\n              {\n                \"name\": \"大气-监测-站点监控\",\n                \"layerId\": \"大气-监测-站点监控\",\n                \"libraryId\": \"大气-监测-站点监控\",\n                \"parentId\": \"airCatalog\"\n              },\n              {\n                \"name\": \"工业源\",\n                \"layerId\": \"工业源\",\n                \"libraryId\": \"工业源\",\n                \"parentId\": \"airCatalog\"\n              }\n            ]\n          },\n          {\n            \"name\": \"土壤环境\",\n            \"layerId\": \"\",\n            \"libraryId\": \"soilCatalog\",\n            \"children\": [\n              {\n                \"name\": \"污染地块\",\n                \"layerId\": \"污染地块\",\n                \"libraryId\": \"污染地块\",\n                \"parentId\": \"soilCatalog\"\n              },\n              {\n                \"name\": \"土壤-土壤环境质量-数量\",\n                \"layerId\": \"土壤-土壤环境质量-数量\",\n                \"libraryId\": \"土壤-土壤环境质量-数量\",\n                \"parentId\": \"soilCatalog\"\n              },\n              {\n                \"name\": \"土壤-土壤环境质量-监测样点\",\n                \"layerId\": \"土壤-土壤环境质量-监测样点\",\n                \"libraryId\": \"土壤-土壤环境质量-监测样点\",\n                \"parentId\": \"soilCatalog\"\n              },\n              {\n                \"name\": \"土壤-土壤环境质量-建设用地监测样点\",\n                \"layerId\": \"土壤-土壤环境质量-建设用地监测样点\",\n                \"libraryId\": \"土壤-土壤环境质量-建设用地监测样点\",\n                \"parentId\": \"soilCatalog\"\n              },\n              {\n                \"name\": \"土壤-土壤环境质量-农用地监测样点\",\n                \"layerId\": \"土壤-土壤环境质量-农用地监测样点\",\n                \"libraryId\": \"土壤-土壤环境质量-农用地监测样点\",\n                \"parentId\": \"soilCatalog\"\n              }\n            ]\n          },\n          {\n            \"name\": \"固定源\",\n            \"layerId\": \"\",\n            \"libraryId\": \"sourceCatalog\",\n            \"children\": [\n              {\n                \"name\": \"各区域污染源数量\",\n                \"layerId\": \"污染源-固定源底数-各区域污染源数量\",\n                \"libraryId\": \"污染源-固定源底数-各区域污染源数量\",\n                \"parentId\": \"sourceCatalog\"\n              },\n              {\n                \"name\": \"污染源\",\n                \"layerId\": \"污染源-固定源底数-污染源\",\n                \"libraryId\": \"污染源-固定源底数-污染源\",\n                \"parentId\": \"sourceCatalog\"\n              },\n              {\n                \"name\": \"污染源-排口底数-固定源-各区域排口个数统计\",\n                \"layerId\": \"污染源-排口底数-固定源-各区域排口个数统计\",\n                \"libraryId\": \"污染源-排口底数-固定源-各区域排口个数统计\",\n                \"parentId\": \"sourceCatalog\"\n              },\n              {\n                \"name\": \"污染源-排口底数-排口\",\n                \"layerId\": \"污染源-排口底数-排口\",\n                \"libraryId\": \"污染源-排口底数-排口\",\n                \"parentId\": \"sourceCatalog\"\n              },\n              {\n                \"name\": \"污染源-废水排放-固定源-废水各区域污染物排放统计\",\n                \"layerId\": \"污染源-废水排放-固定源-废水各区域污染物排放统计\",\n                \"libraryId\": \"污染源-废水排放-固定源-废水各区域污染物排放统计\",\n                \"parentId\": \"sourceCatalog\"\n              },\n              {\n                \"name\": \"生活源\",\n                \"layerId\": \"生活源\",\n                \"libraryId\": \"生活源\",\n                \"parentId\": \"sourceCatalog\"\n              }\n            ]\n          }\n        ],\n        // 当前勾选上的菜单项的id列表\n        checkedIds: [],\n        // 当前勾选上的菜单项的数据列表\n        checkedData: [],\n        //？当前勾选上的在页面上不显示的菜单项的id列表\n        otherCheckedData: [],\n      });\n\n      /**\n       * 获取title\n       * @param treeData - 当前树节点数据\n       */\n      function getTitle(treeData) {\n        return treeData[propsMap.label];\n      }\n\n      /**\n       * 发送setLayersAR消息\n       * @param data - 图层数据\n       * @param opType - 操作类型，add或remove\n       */\n      function sendSetLayersARMsg(data, opType) {\n\n        // setLayersAR消息的数据\n        let setLayersARMsgData = [];\n        // 只保留图层数据（因为会包含目录数据） 添加就过滤掉勾选的图层\n        let filteredData = [];\n        if (Array.isArray(data)) {\n\n          // 只保留图层数据（因为会包含目录数据） 添加就过滤掉勾选的图层\n          filteredData = data;\n\n          // 过滤掉已勾选的图层\n          // const filteredData = opType === 'add' ? data[propsMap.children].filter((item) => !state.checkedIds.includes(item.layerId)) : data[propsMap.children];\n          // setLayersARMsgData = filteredData.map((item) => ({\n          //   libraryId: item.libraryId,//item.libraryId,\n          //   layerId: item.layerId, //item.layerId,\n          //   opType,\n          // }));\n        } else if (Array.isArray(data[propsMap.children])) {\n          // 扁平化的图层数据\n          const flatArr = treeToArray(JSON.parse(JSON.stringify(data[propsMap.children])));\n          // 只保留图层数据（因为会包含目录数据） 添加就过滤掉勾选的图层\n          filteredData = flatArr.filter((item) => item.layerId && (opType === 'add' ? !state.checkedIds.includes(item.layerId) : true));\n\n          // 过滤掉已勾选的图层\n          // const filteredData = opType === 'add' ? data[propsMap.children].filter((item) => !state.checkedIds.includes(item.layerId)) : data[propsMap.children];\n          // setLayersARMsgData = filteredData.map((item) => ({\n          //   libraryId: item.libraryId,//item.libraryId,\n          //   layerId: item.layerId, //item.layerId,\n          //   opType,\n          // }));\n        } else {\n          filteredData = [data];\n        }\n\n        setLayersARMsgData = filteredData.map((item) => ({\n          libraryId: item.libraryId,//item.libraryId,\n          layerId: item.layerId, //item.layerId,\n          opType,\n        }));\n\n        // 发送socket消息: 地图删除专题\n        rootData.rootSocket.emit('message', {\n          room: global.socketRoom, // 房间号\n          type: 'setLayersAR', // 消息名称\n          data: setLayersARMsgData,\n        });\n\n        console.log({\n          room: global.socketRoom, // 房间号\n          type: 'setLayersAR', // 消息名称\n          data: setLayersARMsgData,\n        }, `地图${opType}图层`);\n      }\n\n      /**\n       * 触发复选\n       * @param {*} data - 传递给 data 属性的数组中该节点所对应的对象\n       * @param {*} statusObject - 树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性\n       */\n      function handleCheck(data, statusObject) {\n        console.log(data, statusObject, 111);\n\n        // 勾选上的图层\n        const checkedLayer = statusObject.checkedNodes.filter((item) => !item[propsMap.children] || !item[propsMap.children]?.length);\n\n        /* 若是取消勾选 且 当前菜单项不是高亮项 */\n        if (checkedLayer.length < state.checkedIds.length) {\n          // 发送setLayersAR消息\n          sendSetLayersARMsg(data, 'remove');\n        } else if (checkedLayer.length > state.checkedIds.length) {\n          // 发送setLayersAR消息\n          sendSetLayersARMsg(data, 'add');\n        }\n\n        // 更新当前勾选上的菜单项的id列表\n        state.checkedIds = checkedLayer.map((item) => item.layerId);\n        // 更新当前勾选上的菜单项的数据列表\n        state.checkedData = checkedLayer;\n      }\n\n      /**\n       * 更新图层勾选状态\n       * @param layerStatusList - 图层状态列表\n       * @param layerList - 图层列表\n       */\n      function updateLayerCheck(layerStatusList, layerList) {\n        // 未勾选的图层\n        const uncheckedLayers = [];\n        // 勾选的图层\n        const checkedLayers = [];\n        layerStatusList.forEach((item) => {\n          if (item.visible) {\n            // 若图层可见，则查找图层的id在图层列表数据里有没有，有再添加\n            const findIndex = layerList.findIndex((val) => val.layerId === item.layerId);\n            if (findIndex > -1) {\n\n              /* 若当前勾选的图层ID列表中没有该图层ID，则添加到列表中 */\n              if (!state.checkedIds.includes(item.layerId)) {\n                // 更新当前勾选的图层ID\n                state.checkedIds.push(item.layerId);\n                // 更新当前勾选上的菜单项的数据列表\n                // state.checkedData.push(item);\n                if (!item.libraryId) {\n                  const findLayer = layerList.find((val) => val.layerId === item.layerId)\n                  if (findLayer) {\n                    // 更新当前勾选上的菜单项的数据列表\n                    state.checkedData.push(findLayer);\n                    checkedLayers.push(findLayer);\n                  }\n                } else {\n                  // 更新当前勾选上的菜单项的数据列表\n                  state.checkedData.push(item);\n                  checkedLayers.push(item);\n                }\n              }\n            } else {\n              // 更新当前勾选上的在页面上不显示的图层\n              state.otherCheckedData.push(item);\n            }\n          } else {\n            // 若图层不可见，则从当前勾选的图层ID列表中移除\n            const findIndex = state.checkedIds.findIndex((val) => val === item.layerId);\n            if (findIndex > -1) {\n              // 更新当前勾选的图层ID\n              state.checkedIds.splice(findIndex, 1);\n              // 更新当前勾选上的菜单项的数据列表\n              state.checkedData.splice(findIndex, 1);\n              uncheckedLayers.push(item);\n            }\n\n            // 若图层不可见，则从当前勾选上的在页面上不显示的图层列表中移除\n            const findIndexOther = state.otherCheckedData.findIndex((val) => val.layerId === item.layerId);\n            if (findIndexOther > -1) {\n              // 更新当前勾选上的在页面上不显示的图层\n              state.otherCheckedData.splice(findIndexOther, 1);\n            }\n          }\n        });\n\n        // 所有的勾选的图层ID\n        const allCheckedData = state.checkedData.map((val) => val.libraryId);\n\n        // 设置不勾选\n        treeRef.value.setCheckedKeys(allCheckedData, false);\n        return {\n          uncheckedLayers,\n          checkedLayers\n        };\n      }\n\n      /**\n       * 移除地图图层\n       */\n      function removeMapLayer() {\n        if (treeRef.value) {\n          // 设置不选中\n          treeRef.value.setCheckedKeys(state.checkedIds, false);\n        }\n\n        // 给地图发消息清除图层\n        sendSetLayersARMsg({ children: [...state.checkedData,...state.otherCheckedData] }, 'remove');\n\n        // 清空所有勾选的图层ID\n        state.checkedIds = [];\n        // 清空所有勾选的图层数据\n        state.checkedData = [];\n        // 清空所有勾选上的在页面上不显示的图层数据\n        state.otherCheckedData = [];\n      }\n\n      /**\n       * 扁平化树形数据\n       * @param data - 树形数据\n       */\n      function treeToArray(data) {\n        const arr = [];\n        const expanded = (datas) => {\n          if (datas && datas.length > 0) {\n            datas.forEach((item) => {\n              arr.push(item);\n              if (item.children) {\n                expanded(item.children);\n                // eslint-disable-next-line no-param-reassign\n                delete item.children;\n              }\n            });\n          }\n        };\n        expanded(data);\n        return arr;\n      }\n\n      /**\n       * 根据一组libraryId更新图层勾选状态\n       * @param libraryIds - 图层库ID列表\n       * @param visible - 图层是否可见\n       */\n      function updateLayerCheckByLibraryIds(libraryIds, visible) {\n        let uncheckedLayers = [];\n        let checkedLayers = [];\n        try {\n          // 扁平化的图层数据\n          const flatArr = treeToArray(JSON.parse(JSON.stringify(state.data)));\n          // 要操作的图层的libraryId数组\n          const operatedLayerLibrary = JSON.parse(libraryIds);\n          if (Array.isArray(operatedLayerLibrary)) {\n            // 找到对应的图层\n            const findLayer = flatArr.filter((item) => operatedLayerLibrary.includes(item.libraryId));\n            // 需要处理的图层数据\n            let operatedLayersData = []\n            findLayer.forEach((item) => {\n              if (item.layerId) {\n                operatedLayersData.push({\n                  layerId: item.layerId,\n                  visible,\n                  libraryId: item.libraryId,\n                });\n              } else {\n                // 父节点\n                const parentNode = treeRef.value.getNode(item.libraryId);\n                // 父节点下所有的子节点\n                const allNodes = treeToArray(JSON.parse(JSON.stringify(parentNode.data.children)));\n                // 处理的所有图层\n                const allLayers = allNodes.filter((item) => item.layerId);\n                operatedLayersData = allLayers.map((item) => ({\n                  layerId: item.layerId,\n                  visible,\n                  libraryId: item.libraryId,\n                }));\n              }\n            });\n            // console.log(operatedLayersData, 9988);\n            // 更新图层勾选状态\n            const res = updateLayerCheck(operatedLayersData, flatArr);\n            uncheckedLayers = res.uncheckedLayers;\n            checkedLayers = res.checkedLayers;\n          }\n        } catch (error) {\n          console.log(error, '');\n        }\n        return {\n          uncheckedLayers,\n          checkedLayers\n        }\n      }\n\n      /**\n       * 处理lxtSocketMessage消息\n       * @param data - 消息数据\n       */\n      function handleLXTMessage(data) {\n        if (!Array.isArray(data?.data)) {\n          return;\n        }\n\n        data.data.forEach((val) => {\n          /* 若是叠加图层 */\n          if (val.shareCode === 'trig_button_click' && val.runtimeValue?.buttonEventCode === 'doAddCommonLayerByIds') {\n            const {\n              checkedLayers\n            } = updateLayerCheckByLibraryIds(val.runtimeValue.buttonEventArgs, true);\n            // 发送setLayersAR消息\n            sendSetLayersARMsg(checkedLayers, 'add');\n            // 发送socket消息: 地图添加图层\n            // rootData.rootSocket.emit('message', {\n            //   room: global.socketRoom, // 房间号\n            //   type: 'setLayersAR', // 消息名称\n            //   data: checkedLayers.map((val) => ({\n            //     libraryId: val.libraryId,//data.libraryId,\n            //     layerId: val.layerId,// data.layerId,\n            //     opType: 'add',\n            //   })),\n            // });\n            // console.log({\n            //   room: global.socketRoom, // 房间号\n            //   type: 'setLayersAR', // 消息名称\n            //   data: checkedLayers.map((val) => ({\n            //     libraryId: val.libraryId,//data.libraryId,\n            //     layerId: val.layerId,// data.layerId,\n            //     opType: 'add',\n            //   })),\n            // }, `地图add图层`);\n\n            /* 若是取消叠加图层 */\n          } else if (val.shareCode === 'trig_button_click' && val.runtimeValue?.buttonEventCode === 'doDelCommonLayerByIds') {\n            const {\n              uncheckedLayers,\n            } = updateLayerCheckByLibraryIds(val.runtimeValue.buttonEventArgs, false);\n            // 发送setLayersAR消息\n            sendSetLayersARMsg(uncheckedLayers, 'remove');\n            // 发送socket消息: 地图添加图层\n            // rootData.rootSocket.emit('message', {\n            //   room: global.socketRoom, // 房间号\n            //   type: 'setLayersAR', // 消息名称\n            //   data: uncheckedLayers.map((val) => ({\n            //     libraryId: val.libraryId,//data.libraryId,\n            //     layerId: val.layerId,// data.layerId,\n            //     opType: 'remove',\n            //   })),\n            // });\n\n            // console.log({\n            //   room: global.socketRoom, // 房间号\n            //   type: 'setLayersAR', // 消息名称\n            //   data: uncheckedLayers.map((val) => ({\n            //     libraryId: val.libraryId,//data.libraryId,\n            //     layerId: val.layerId,// data.layerId,\n            //     opType: 'remove',\n            //   })),\n            // }, `地图remove图层`);\n          }\n        })\n      }\n\n      function handleHelp(data) {\n        console.log(data, '---点击帮助信息----');\n        // 发送socket消息: 地图添加/删除专题\n        rootData.rootSocket.emit(\"message\", {\n          room: global.socketRoom, // 房间号\n          type: \"sendHelpMsg\", // 消息名称\n          data: {\n            ...data,\n          },\n        });\n      }\n\n      onMounted(() => {\n        // 接收socket消息\n        rootData.rootOn('rootSocket:change', (data) => {\n          // console.log(data, '图层菜单接收到消息---');\n\n          /* 监听图层状态改变 当地图有图层加载、销毁、图层可见性改变时会发送此消息 */\n          if (data.type === 'layerStatus') {\n            console.log(data, '图层菜单接收到layerStatus消息---');\n            if (!Array.isArray(data.data)) {\n              return;\n            }\n\n            // 扁平化的图层数据\n            const flatArr = treeToArray(JSON.parse(JSON.stringify(state.data)));\n            // 更新图层勾选状态\n            updateLayerCheck(data.data, flatArr);\n          } else if (data.type === 'runInteractive') {\n            /* 监听websocket消息 */\n            console.log(data.data, '图层菜单接收到runInteractive消息---');\n          } else if (data.type === 'loadMenuData') {\n            console.log(data.data, '图层菜单接收到loadMenuData消息---');\n            /* 监听菜单切换消息 */\n            removeMapLayer();\n            if (data.data && data.data.menuId === '7d3ae01e-a24f-4bf3-8390-d8676fc0a44c') {\n              //默认选中市级图层、干流、支流图层\n              console.log('全景指挥对话默认叠加图层');\n              // 发送socket消息\n              rootData.rootSocket.emit(\"message\", {\n                room: global.socketRoom, // 房间号\n                type: \"setLayersAR\", // 消息名称\n                data: [\n                  {\n                    \"libraryId\": \"28c876b148d843839d592d303d94fad9\",\n                    \"layerId\": \"市图层\",\n                    \"opType\": \"add\"\n                  },\n                  {\n                    \"libraryId\": \"4ed2e767e7714e24bd64ab4b07499651\",\n                    \"layerId\": \"干流\",\n                    \"opType\": \"add\"\n                  },\n                  {\n                    \"libraryId\": \"10c8457c41414767ace9004091fba6fd\",\n                    \"layerId\": \"支流\",\n                    \"opType\": \"add\"\n                  },\n                  {\n                    \"libraryId\": \"cdbaa365c3c2420598139007dc0ba933\",\n                    \"layerId\": \"区县图层-边界\",\n                    \"opType\": \"add\"\n                  }\n                ]\n              });\n            }\n          } else if (data.type === 'lxtSocketMessage') {\n            /* 监听智能小鹿消息 */\n            console.log(data.data, '图层菜单接收到lxtSocketMessage消息---')\n            handleLXTMessage(data.data);\n          } else if (data.type === \"getMenuLayerStatus\") {\n            /* 监听获取专题或图层状态消息 */\n\n            const layer = state.checkedData.map((item) => ({\n              libraryId: item.libraryId,\n              layerId: item.layerId,\n              opType: 'add',\n              isChecked: true\n            }));\n\n            // 发送socket消息: 地图添加/删除专题\n            rootData.rootSocket.emit(\"message\", {\n              room: global.socketRoom, // 房间号\n              type: \"sendLayerStatus\", // 消息名称\n              data: {\n                layer,\n              },\n            });\n\n            console.log('专题菜单发送sendLayerStatus消息---', {\n              layer,\n            });\n          } else if (data.type === 'airQualityRankingClicked' || data.type === 'setLayerChecked') {\n            // 空气质量排名-表格点击消息（点击定位，定位时，如果对应的站点图层没有该图层，则默认加上）\n            const pointTypeCode = data.data.type;\n            // 对应的layerId\n            const pointTypeTextMap = {\n              'point_gk': '国控',\n              'point_sk': '省控',\n              // 'point_shik': '市控',\n              'point_wz': '微站',\n              'point_other': '其他',\n            };\n            if (pointTypeCode) {\n              // 扁平化的图层数据\n              const flatArr = treeToArray(JSON.parse(JSON.stringify(state.data)));\n              // 更新图层勾选状态\n              const res = updateLayerCheck([\n                {\n                  layerId: pointTypeTextMap[pointTypeCode],\n                  visible: true,\n                }\n              ], flatArr);\n              const checkedLayers = res.checkedLayers;\n              // 发送setLayersAR消息\n              sendSetLayersARMsg(checkedLayers, 'add');\n            }\n          }\n        });\n\n\n        // 模拟---更新图层勾选状态\n        // updateLayerCheck([{layerId: '污染源-排口底数-排口', visible: true}], state.data);\n        // updateLayerCheck([{layerId: '大气-监测-站点告警', visible: true}], state.data);\n\n        // setTimeout(()=>{\n        //   updateLayerCheck([{layerId: '大气-监测-站点告警', visible: false}], state.data);\n        // },5000)\n      });\n\n      onUnmounted(() => {\n        rootData.rootOff('rootSocket:change');\n      });\n\n      return {\n        ...toRefs(state),\n        propsMap,\n        treeRef,\n        getTitle,\n        handleCheck,\n        handleHelp,\n      };\n    },\n  };\n\n  /**\n   * 这里入口组件内容\n   */\n  const MainComponent = {\n    template:\n    // 默认页面 ———— 一直显示 页面中的组件根据显示条件显示\n            '<layer-component></layer-component>',\n    components: {\n      layerComponent,\n    },\n    setup() {\n      // 获取缓存里的鹿小图全局变量数据\n      const lxtGlobal = localStorage.getItem('lxtGlobal') ? JSON.parse(localStorage.getItem('lxtGlobal')) : {};\n\n      const rootEmitter = mitt();\n\n      let global = reactive(\n              /* 插入应用级别的全局变量 相当于store中的rootData */\n              /* globalVariableStart */\n              {\n                socketIp: lxtGlobal.socketIp || 'http://192.168.0.202:7777/socketPath',\n                socketPath: lxtGlobal.socketPath || '/socketPath',\n                socketRoom: lxtGlobal.socketRoom || roomId || 'admin',\n              }\n              /* globalVariableEnd */\n      );\n\n      // 创建 socket 连接\n      let socket = null;\n      if (global.socketIp) {\n        const options = {};\n        if (global?.socketPath) {\n          options.path = global.socketPath;\n        }\n        socket = io(global.socketIp, options);\n      }\n\n      provide('root', {\n        ...toRefs(global),\n        rootEmit: rootEmitter.emit, // mitt 发送\n        rootOn: rootEmitter.on, // mitt 接收\n        rootOff: rootEmitter.off, // mitt 移除\n        rootSocket: socket, // socket 实例\n      });\n      /**\n       * 监听修改全局变量事件\n       * @param obj 修改后的变量\n       */\n      rootEmitter.on('rootData:change', (obj) => {\n        global = _.set(global, obj.key, obj.value);\n\n        if (global.socketIp && global.socketRoom) {\n          // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息\n          socket.emit('message', {\n            room: global.socketRoom, // 房间号\n            type: 'internalType:ChangeGlobalValue', // 需要保证此类型唯一性\n            data: obj,\n          });\n        }\n      });\n\n      /**\n       * 连接成功时进入对应的房间\n       */\n      if (socket) {\n        socket.on('connect', function () {\n          if (global.socketIp && global.socketRoom) {\n            // 进入房间\n            socket.emit('join-room', global.socketRoom);\n          }\n        });\n      }\n\n      /**\n       * 接收到 socket 消息时触发\n       * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}\n       */\n      if (socket) {\n        socket.on('message', function (data) {\n          // socket 监听全局变量的变化，然后合并值\n          if (data.type === 'internalType:ChangeGlobalValue') {\n            // 合并 globa 的值\n            global = _.set(global, data.data.key, data.data.value);\n          } else {\n            // 发送消息，通知其他页面\n            rootEmitter.emit('rootSocket:change', data);\n          }\n        });\n      }\n\n      // 监听 socket 房间的变化\n      watch(() => global.socketRoom, (val, oldVal) => {\n        if (socket) {\n          // 离开房间\n          socket.emit('leave-room', oldVal);\n          // 进入房间\n          socket.emit('join-room', val);\n        }\n      });\n\n      onBeforeUnmount(() => {\n        // 离开房间\n        socket.emit('leave-room', global.socketRoom);\n        // 断开连接\n        socket.disconnect();\n      });\n\n      return {};\n    },\n  };\n\n  const app = createApp(MainComponent);\n  /* 下面的操作是去掉控制台Vue输出的警告信息  如果想开启警告信息可以把这个空函数注释掉 */\n  app.config.warnHandler = function (msg, vm, trace) {\n    // 空函数，不做任何处理\n  };\n  app.use(ElementPlus, {\n    size: 'small',\n  })\n          // .use(router)\n          .mount(\"#app\");\n</script>\n</body>\n\n</html>",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"201px","height":"470px","position":"unset","left":"16px","top":"52px","animationName":"","display":"none","backgroundColor":"rgba(23, 62, 228, 0)"}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tIframex0x7: {
defaultStyle: {
            default: {"width":"205px","height":"470px","position":"unset","left":"16px","top":"55px","backgroundColor":"rgba(23, 62, 228, 0)"},
            
            },
 default: { 
 
src:"",
srcdoc:"<!--\n * @Author: lvzhixin\n * @Date: 2024-05-30 13:33:18\n * @LastEditTime: 2025-01-16 11:50:45\n * @LastEditors: liuyan\n * @Description: File Info\n-->\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>我的应用名称</title>\n    <link rel=\"shortcut icon\" href=\"assets/images/favicon.ico\" />\n    <!-- vue 这里最终应该下载一个稳定版本 -->\n    <script src=\"./resources/vue.min.js\"></script>\n\n    <!-- socket插件 -->\n    <script src=\"./resources/socket.io.js\"></script>\n\n    <!-- lodash插件 -->\n    <script src=\"./resources/lodash.min.js\"></script>\n\n    <!-- 引入样式 -->\n    <link\n      rel=\"stylesheet\"\n      href=\"./resources/element-plus/element-plus.min.css\"\n    />\n    <!-- 引入组件库 -->\n    <script src=\"./resources/element-plus/element-plus.min.js\"></script>\n    <script src=\"./resources/element-plus/zhCn.js\"></script>\n\n    <!-- 通信插件mitt https://www.npmjs.com/package/mitt -->\n    <script src=\"./resources/mitt.min.js\"></script>\n\n    <!-- HTTP库 -->\n    <script src=\"./resources/axios.min.js\"></script>\n\n    <!-- 主题样式 -->\n    <link\n      rel=\"stylesheet\"\n      href=\"./assets/style/themes.css\"\n    />\n\n    <style>\n      body {\n        margin: 0;\n      }\n\n      body,\n      html,\n      #app {\n        height: 100%;\n      }\n\n      .subject {\n        height: 100%;\n        /* width: 193px; */\n        width: 100%;\n        /* background: rgba(6, 18, 8, 0.4); */\n      }\n\n      .subject .el-scrollbar__view {\n        padding-right: 13px;\n      }\n\n      /* 复选框样式 */\n      .subject .el-checkbox {\n        --el-checkbox-background-color: var(--left-menu-checkbox-bg);\n        --el-border-base: 1px solid var(--left-menu-checkbox-border);\n        --el-checkbox-checked-background-color: #3b382a;\n        --el-checkbox-checked-input-border-color: #fff198;\n        --el-checkbox-input-border-color-hover: #fff198;\n        margin-right: 6px;\n        vertical-align: middle;\n      }\n\n      .subject\n        .el-checkbox__input.is-focus:not(.is-checked)\n        .el-checkbox__inner:not(:hover) {\n        border-color: var(--left-menu-checkbox-border);\n      }\n\n      /* 树样式 */\n      .subject .el-tree {\n        --el-tree-node-hover-background-color: transparent;\n        --el-tree-font-color: #d8ffe9;\n        --el-tree-expand-icon-color: #fff;\n\n        background: transparent;\n      }\n\n      .subject .el-tree + .el-tree{\n        margin-top: 20px;\n      }\n\n      /* 树-箭头样式-非叶子节点 */\n      .subject .el-icon-caret-right:not(.is-leaf):before {\n        border-radius: 3px;\n        background: var(--left-menu-tree-unpack-bg);\n      }\n      /* 树-箭头样式 */\n      .subject .el-icon-caret-right:before {\n        padding: 3px;\n        font-size: 9px;\n      }\n\n      /* 每一个一级菜单容器 */\n      .subject .el-tree > .el-tree-node {\n        border-radius: 18px;\n        box-sizing: border-box;\n        /* background: left 0 bottom -3px / contain var(--left-menu-bottom-line-1) no-repeat,\n          right 0 bottom -3px / contain var(--left-menu-bottom-line-1) no-repeat,\n          18px bottom / calc(100% - 36px) auto var(--left-menu-bottom-line) no-repeat,\n          left bottom / 18px auto var(--left-menu-bottom-left-corner) no-repeat,\n          right bottom / 18px auto var(--left-menu-bottom-right-corner) no-repeat;\n        background-color: rgba(1, 32, 15, 0.5); */\n        position: relative;\n      }\n\n      .subject .el-tree > .el-tree-node::before {\n        content: \" \";\n        display: block;\n        position: absolute;\n        left: 0;\n        top: 0;\n        z-index: -1;\n        width: 100%;\n        height: 100%;\n        border-style: solid;\n        border-image-outset: 0;\n        border-image-repeat: stretch;\n        border-width: 15px 15px;\n        border-image-source: var(--left-menu-tree-bg);\n        border-image-slice: 15 15 fill;\n        border-image-width: 1;\n        box-sizing: border-box;\n      }\n\n      /* 相邻的一级菜单容器 */\n      .subject .el-tree > .el-tree-node + .el-tree-node {\n        margin-top: 20px;\n      }\n\n      .subject .el-tree .el-tree-node .el-tree-node__content {\n        padding-right: 6px;\n      }\n\n      /* 所有的菜单树节点容器 */\n      .subject .el-tree-node {\n        padding-left: 22px;\n      }\n      /* 第一个及第一个菜单项的第一个子菜单项的菜单树节点容器 */\n      .subject .el-tree > .el-tree-node,\n      .subject\n        .el-tree\n        > .el-tree-node\n        > .el-tree-node__children\n        > .el-tree-node {\n        padding-left: 0;\n      }\n\n      /* 二级菜单项叶子节点 */\n      .subject\n        .el-tree\n        > .el-tree-node\n        > .el-tree-node__children\n        > .el-tree-node\n        > .el-tree-node__content\n        .el-tree-node__expand-icon.is-leaf {\n        display: block;\n        margin-left: 0;\n      }\n\n      /* 菜单项叶子节点 */\n      .el-tree-node__children\n        .el-tree-node__content\n        > .el-tree-node__expand-icon.is-leaf {\n        display: none;\n        padding-left: 0px;\n      }\n\n      /* 菜单项叶子节点相邻的复选框 */\n      .el-tree-node__children\n        .el-tree-node__content\n        > .el-tree-node__expand-icon.is-leaf\n        + .el-checkbox {\n        margin-left: 6px;\n      }\n\n      /* 一级菜单的默认样式 */\n      .subject .el-tree > .el-tree-node > .el-tree-node__content {\n        display: flex;\n        flex-direction: row-reverse;\n        justify-content: space-between;\n        padding: 6px 0 6px 14px !important;\n        /* border-radius: 18px;\n        background: radial-gradient(\n            52% 52% at 50% 113%,\n            rgba(123, 255, 182, 0.6) 0%,\n            rgba(11, 143, 70, 0) 100%\n          ),\n          rgba(6, 72, 35, 0.5); */\n        box-sizing: border-box;\n        /* border: 1px solid;\n        border-image: radial-gradient(\n            39% 39% at 47% 101%,\n            #8affbd 0%,\n            rgba(0, 255, 111, 0) 100%\n          )\n          1;\n        box-shadow: inset 5px 0px 6px 0px rgba(138, 255, 189, 0.302); */\n        background: var(--left-menu-tree-title-bg);\n        background-repeat: no-repeat;\n        background-size: 100% 100%;\n      }\n\n      /* 一级菜单的高亮样式 */\n      .subject\n        .el-tree.el-tree--highlight-current\n        > .el-tree-node.is-current\n        > .el-tree-node__content {\n        padding: 6px 16px;\n        margin-bottom: 3px;\n        background: #252f26;\n        box-sizing: border-box;\n        border: 1px solid #ffefc9;\n        box-shadow: inset 0px 0px 18px 0px rgba(255, 206, 109, 0.49);\n        border-radius: 18px;\n        font-weight: normal;\n        color: #ffec9f;\n      }\n\n      .subject .el-tree > .el-tree-node.is-expanded > .el-tree-node__children {\n        padding-bottom: 4px;\n      }\n\n      /* 树节点 */\n      .subject .el-tree-node__content {\n        height: 36px;\n        /* padding-left: 0 !important; */\n      }\n\n      /* 隐藏一级菜单的复选框 */\n      /* .subject .el-scrollbar__view + .el-tree > .el-tree-node > .el-tree-node__content .el-checkbox {\n        display: none;\n      } */\n\n      /* 所有菜单项的复选框 */\n      .subject .el-tree-node__content > label.el-checkbox {\n        margin-right: 6px;\n      }\n\n      /* 树-箭头样式-非叶子节点 */\n      .subject\n        .el-tree-node__content\n        .el-tree-node__expand-icon:not(.is-leaf)\n        + .el-checkbox {\n        display: none;\n      }\n\n      /* 调整一级菜单的下拉箭头伪元素样式 */\n      .subject\n        .el-tree\n        > .el-tree-node\n        > .el-tree-node__content\n        .el-tree-node__expand-icon::before {\n        content: \"\";\n        display: block;\n        width: 24px;\n        height: 24px;\n        /* background: transparent; */\n        background: var(--left-menu-subject-dropdown-arrow) 28px -7px / cover;\n        /* background: url('http://192.168.3.107:8088/assets/images/menu-list/arrow-green.svg') 28px -7px / cover; */\n      }\n\n      /* 一级菜单箭头的高亮样式 */\n      .subject\n        .el-tree\n        > .el-tree-node.is-current\n        > .el-tree-node__content\n        .el-tree-node__expand-icon::before {\n        background: var(--left-menu-subject-dropdown-arrow-active) 28px -7px / cover;\n      }\n\n      /* 调整一级菜单的下拉箭头-展开样式 */\n      .subject\n        .el-tree\n        > .el-tree-node\n        > .el-tree-node__content\n        > .el-tree-node__expand-icon.expanded {\n        transform: rotate(0deg);\n      }\n\n      /* 调整一级菜单的下拉箭头-默认样式 */\n      .subject\n        .el-tree\n        > .el-tree-node\n        > .el-tree-node__content\n        > .el-tree-node__expand-icon {\n        transform: rotate(-90deg);\n      }\n\n      /* 菜单（非一级）的高亮样式 */\n      .subject\n        .el-tree--highlight-current\n        .el-tree-node.is-current\n        > .el-tree-node__content {\n        background-color: transparent;\n      }\n\n      /* 超出内容宽度的省略号样式 */\n      .subject .custom-tree-node {\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      /* 菜单文本 */\n      .subject .folder-label {\n        font-size: 14px;\n        line-height: 20px;\n      }\n\n      /* 菜单文本 */\n      .subject .folder-label.active {\n        color: #ffec9f;\n        text-shadow: 0px 0px 10px rgba(255, 235, 187, 0.5);\n        font-weight: bold;\n      }\n\n      /* 菜单文本-禁用状态 */\n      .subject\n        .el-tree--highlight-current\n        .el-tree-node.is-current\n        > .el-tree-node__content\n        .folder-label.disabled {\n        cursor: not-allowed;\n      }\n\n      .subject .el-scrollbar {\n          --el-scrollbar-opacity: 1;\n          --el-scrollbar-background-color: var(--left-menu-scrollbar-bg);\n          --el-scrollbar-hover-opacity: 1;\n          --el-scrollbar-hover-background-color: var(--left-menu-scrollbar-bg);\n      }\n    </style>\n  </head>\n\n  <body class=\"绿色版\">\n    <div id=\"app\"></div>\n\n    <script>\n      /**\n       * 这里定义全局使用的变量、方法\n       */\n      const {\n        createApp,\n        computed,\n        ref,\n        reactive,\n        toRefs,\n        onBeforeMount,\n        onMounted,\n        onBeforeUpdate,\n        onUpdated,\n        onBeforeUnmount,\n        onUnmounted,\n        onErrorCaptured,\n        onRenderTracked,\n        onRenderTriggered,\n        watch,\n        provide,\n        inject,\n        nextTick,\n      } = Vue;\n\n      // 房间号\n      const roomId = localStorage.getItem(\"lxtSocketRoom\");\n\n      // 主题\n      const themeName = localStorage.getItem(\"lxtTheme\");\n\n      const bodyDom = document.querySelector(\"body\");\n      if (bodyDom && themeName) {\n        bodyDom.className = themeName;\n      }\n\n      /**\n       * 这里定义根组件内容\n       */\n      const subjectComponent = {\n        template: `\n          <div class=\"subject\">\n            <el-scrollbar max-height=\"100%\">\n              <el-tree\n                ref=\"menuTreeRef\"\n                default-expand-all\n                highlight-current\n                node-key=\"RES_ID\"\n                empty-text=\"无数据\"\n                :props=\"propsMap\"\n                :data=\"menuData\"\n                :indent=\"0\"\n                :current-node-key=\"currentMenuItem?.RES_ID\"\n                @node-click=\"handleClickNode\"\n              >\n                <template #default=\"{ node, data }\">\n                  <span class=\"custom-tree-node\">\n                    <el-checkbox\n                      v-if=\"checkboxVisible(node, data)\"\n                      v-model=\"node.checked\"\n                      @click.stop=\"\"\n                      @change=\"handleCheck(data, node)\"\n                    >\n                    </el-checkbox>\n                    <span\n                      class=\"folder-label\"\n                      :class=\"{ active: currentMenuItem.RES_ID === data.RES_ID && node.isLeaf }\"\n                      :title=\"data[propsMap.label]\"\n                    >\n                      <!-- 节点文本 -->\n                      {{node.label}}\n                    </span>\n                  </span>\n                </template>\n              </el-tree>\n              <!-- 专题图层 -->\n              <el-tree\n                ref=\"layerMenuTreeRef\"\n                default-expand-all\n                highlight-current\n                node-key=\"RES_ID\"\n                check-on-click-node\n                empty-text=\" \"\n                :props=\"propsMap\"\n                :data=\"layerMenuData\"\n                :indent=\"0\"\n                :current-node-key=\"currentLayerMenuItem?.RES_ID\"\n                :check-strictly=\"true\"\n                :key=\"layerMenuTreeKey\"\n                @node-click=\"handleLayerMenuCheck\"\n              >\n                <template #default=\"{ node, data }\">\n                  <span class=\"custom-tree-node\">\n                    <el-checkbox\n                      v-if=\"checkboxVisible(node, data)\"\n                      v-model=\"node.checked\"\n                      @click.stop=\"\"\n                      @change=\"handleLayerMenuCheck(data, node)\"\n                    >\n                    </el-checkbox>\n                    <span\n                      class=\"folder-label\"\n                      :class=\"{ active: currentLayerMenuItem.RES_ID === data.RES_ID && node.isLeaf }\"\n                      :title=\"data[propsMap.label]\"\n                    >\n                      <!-- 节点文本 -->\n                      {{node.label}}\n                    </span>\n                  </span>\n                </template>\n              </el-tree>\n            </el-scrollbar>\n          </div>\n        `,\n        setup() {\n          // 页面内注入全局变量和事件\n          const rootData = inject(\"root\");\n\n          const global = reactive({\n            ...toRefs(rootData),\n          });\n\n          // 配置选项的映射\n          const propsMap = {\n            children: \"CHILDREN\",\n            label: \"RES_NAME\",\n          };\n\n          // 树形菜单组件\n          const menuTreeRef = ref(null);\n          const layerMenuTreeRef = ref(null);\n\n          // 格式化菜单的一些操作\n          // const formatMenuTreeOperate = useFormatMenuTree();\n          // console.log(localStorage.getItem('isShowSubjectCheckbox') ? localStorage.getItem('isShowSubjectCheckbox') === 'true' : false, 9999)\n\n          const state = reactive({\n            // 是否展示专题的复选框\n            isShowSubjectCheckbox: localStorage.getItem('isShowSubjectCheckbox') ? localStorage.getItem('isShowSubjectCheckbox') === 'true' : false,\n            // 树形菜单数据\n            data: [],\n            // 专题数据\n            menuData: [],\n            // 图层专题数据\n            layerMenuData: [],\n            // 当前选中的菜单项（专题使用）\n            currentMenuItem: {},\n            // 当前选中的菜单项（图层专题使用）\n            currentLayerMenuItem: {},\n            // 当前勾选上的菜单项的id列表\n            checkedIds: [],\n            // 当前勾选上的菜单项数据\n            checkedData: [],\n            // 当前高亮的一级菜单项id（专题使用）\n            currentActiveFirstLevelMenuId: null,\n            // 当前高亮的一级菜单项id（图层专题使用）\n            currentActiveFirstLevelLayerMenuId: null,\n            // 右侧面板数据\n            rightPanelData: [],\n            // 图层专题的索引，处理树不刷新的问题使用的\n            layerMenuTreeKey:0\n          });\n\n          /**\n           * 设置一级节点高亮\n           * @param node - 节点\n           */\n          function setFirstNodeActive(node, type) {\n            let parentNode = node.parent;\n            if (parentNode && node.level !== 1) {\n              setFirstNodeActive(parentNode, type);\n            } else {\n              if (Array.isArray(parentNode.childNodes)) {\n                parentNode.childNodes.forEach((item) => {\n                  item.isCurrent = false; // 取消所有节点的选中状态 防止选中多个节点\n                });\n              }\n              // 当前节点的一级父节点选中\n              node.isCurrent = true;\n              if(type && type === 'layer'){\n                // 记录当前高亮的一级菜单项id（图层专题使用）\n                state.currentActiveFirstLevelLayerMenuId = node.data.RES_ID;\n              } else {\n                // 记录当前高亮的一级菜单项id（专题使用）\n                state.currentActiveFirstLevelMenuId = node.data.RES_ID;\n              }\n            }\n          }\n\n          /**\n           * 发送setAppAR或者setLayersAR消息，地图去添加/删除专题图层\n           * @param data - 专题数据\n           * @param opType - 操作类型，add或remove\n           * @param highlight - 当前图层是否高亮\n           */\n          function sendSetAppARMsg(data, opType) {\n            console.log(data, \"当前点击的数据\");\n            try {\n              // setAppAR消息的数据\n              let setAppARMsgData = [];\n              // setLayersAR消息的数据\n              let setLayersARMsgData = [];\n\n              if (data?.length) {\n                data.forEach((item) => {\n                  // 目录的扩展字段\n                  const extendField = item.EXT1 ? JSON.parse(item.EXT1) : {};\n                  // type 字段不存在则代表是专题\n                  if (!extendField.type) {\n                    setAppARMsgData.push({\n                      resCode: extendField?.resCode || \"\",\n                      opType,\n                      resName: item.RES_NAME,\n                      appURL: extendField?.appURL || \"\",\n                      highlight: item.RES_ID === state.currentMenuItem.RES_ID,\n                    });\n                  } else if (extendField.type && extendField.type === \"layer\") {\n                    //type 字段存在并且等于layer则代表是图层\n                    setLayersARMsgData.push({\n                      libraryId: extendField.resCode,\n                      layerId: extendField.resCode,\n                      opType,\n                    });\n                  }\n                });\n              } else if(!Array.isArray(data) && data.EXT1) {\n                // 目录的扩展字段\n                const extendField = data.EXT1 ? JSON.parse(data.EXT1) : {};\n\n                // type 字段不存在则代表是专题\n                if (!extendField.type) {\n                  // setLayersAR消息的数据\n                  setAppARMsgData = [\n                    {\n                      resCode: extendField?.resCode || \"\",\n                      opType,\n                      resName: data.RES_NAME,\n                      appURL: extendField?.appURL || \"\",\n                      highlight: data.RES_ID === state.currentMenuItem.RES_ID,\n                    },\n                  ];\n                } else if (extendField.type && extendField.type === \"layer\") {\n                  //type 字段存在并且等于layer则代表是图层\n                  setLayersARMsgData = [\n                    {\n                      libraryId: extendField.resCode,\n                      layerId: extendField.resCode,\n                      opType,\n                    },\n                  ];\n                }\n              }\n\n              if (setAppARMsgData.length) {\n                // 发送socket消息: 地图添加/删除专题\n                rootData.rootSocket.emit(\"message\", {\n                  room: global.socketRoom, // 房间号\n                  type: \"setAppAR\", // 消息名称\n                  data: setAppARMsgData,\n                });\n                console.log(\n                  {\n                    room: global.socketRoom, // 房间号\n                    type: \"setAppAR\", // 消息名称\n                    data: setAppARMsgData,\n                  },\n                  `地图${opType}专题`\n                );\n              }\n\n              if (setLayersARMsgData.length) {\n                // 发送socket消息: 地图添加/删除专题图层\n                rootData.rootSocket.emit(\"message\", {\n                  room: global.socketRoom, // 房间号\n                  type: \"setLayersAR\", // 消息名称\n                  data: setLayersARMsgData,\n                });\n                console.log(\n                  {\n                    room: global.socketRoom, // 房间号\n                    type: \"setLayersAR\", // 消息名称\n                    data: setLayersARMsgData,\n                  },\n                  `地图${opType}专题图层`\n                );\n              }\n            } catch (error) {\n              console.log(error, \"EXT1扩展字段数据格式不对\");\n            }\n          }\n\n          /**\n           * 发送showRightView消息\n           * @param data - 专题数据\n           * @param operation - 操作类型，add | remove | highlight\n           * @param activeData - 当前点击的最新的专题数据\n           */\n          function sendShowRightViewMsg(data, operation, activeData) {\n            if(!activeData.MENU_URL) return;\n            // 消息数据\n            let msgData = [data];\n\n            /* 若是目录 */\n            if (data[propsMap.children]?.length) {\n              if (operation === \"add\") {\n                // 过滤掉已勾选的图层\n                msgData = data[propsMap.children].filter(\n                  (item) =>\n                    !state.checkedIds.includes(item.RES_ID) &&\n                    state.currentMenuItem.RES_ID !== item.RES_ID\n                );\n              } else if (operation === \"remove\") {\n                // 过滤掉菜单高亮图层\n                msgData = data[propsMap.children].filter(\n                  (item) => state.currentMenuItem.RES_ID !== item.RES_ID\n                );\n              }\n            }\n\n            // 发送socket消息: 地图删除专题\n            rootData.rootSocket.emit(\"message\", {\n              room: global.socketRoom, // 房间号\n              type: \"showRightView\", // 消息名称\n              // 发送的数据\n              data: {\n                data: msgData, // 操作的菜单数据\n                operation, // 操作类型\n                type: \"subject\", // 专题\n              },\n            });\n            console.log(\n              {\n                room: global.socketRoom, // 房间号\n                type: \"showRightView\", // 消息名称\n                // 发送的数据\n                data: {\n                  data: msgData, // 操作的菜单数据\n                  operation, // 操作类型\n                  type: \"subject\", // 专题\n                },\n              },\n              `右侧面板${operation}专题`\n            );\n          }\n\n          /**\n           * 刷新地图专题\n           * @param data - 当前高亮的专题数据\n           */\n          function refreshMapSubject(lastSubject, newAppSubject) {\n            // 发送socket消息\n            sendSetAppARMsg(lastSubject, \"remove\");\n            // 发送socket消息\n            sendSetAppARMsg(newAppSubject, \"add\");\n          }\n\n          /**\n           * 点击菜单项\n           * @param data - 当前菜单项的数据\n           * @param node - 当前菜单项节点\n           */\n          function clickNode(data, node) {\n            // console.log(data,node)\n            /* 点击目录  或 点击的是当前选中项 不触发选中事件 */\n            if (!node.isLeaf || state.currentMenuItem.RES_ID === data.RES_ID) {\n              // 高亮当前选择节点的一级目录\n              menuTreeRef.value.setCurrentKey(state.currentActiveFirstLevelMenuId);\n              return;\n            }\n            // 设置一级节点高亮\n            setFirstNodeActive(node);\n\n            // 判断上一次选中的专题或专题图层有没有选中复选框\n            if(state.checkedIds.includes(state.currentMenuItem.RES_ID)){\n              // 有选中复选框----------------------\n              // 不做处理\n            } else if(!state.checkedIds.includes(state.currentMenuItem.RES_ID)){\n              // 没有选中复选框---------------------------\n              // 发送socket消息：更新右侧菜单数据\n              sendShowRightViewMsg(state.currentMenuItem, \"remove\", data);\n              // 发送socket消息: 地图删除专题\n              sendSetAppARMsg(state.currentMenuItem, \"remove\");\n            }\n\n            // 更新高亮项\n            state.currentMenuItem = data;\n\n            // 判断最新选中的专题或专题图层有没有选中复选框\n            if(state.checkedIds.includes(data.RES_ID)){\n              // 有选中复选框----------------------\n              /* \n                地图逻辑：\n                1.专题：先清掉所有专题，再重新添加，高亮的在最后；\n                2.专题图层：不处理\n              */\n              // 目录的扩展字段\n              const extendField = data.EXT1 ? JSON.parse(data.EXT1) : {};\n              // console.log(extendField.type, \"extendField.type\");\n              // type 字段不存在则代表是专题\n              if (!extendField.type) {\n                console.log('选中的是专题');\n                \n                // 过滤一下checkedData数组，清除图层的时候，数组中不包含当前选中的专题\n                let filteredCheckedData = []\n                state.checkedData.forEach((item) => {\n                  if(item.RES_ID !== data.RES_ID){\n                    filteredCheckedData.push(item);\n                  };\n                });\n\n                // 发送socket消息: 地图删除专题\n                sendSetAppARMsg(state.checkedData, \"remove\");\n                // 发送socket消息: 地图添加专题\n                sendSetAppARMsg([...filteredCheckedData, data], \"add\");\n              } else if (extendField.type && extendField.type === \"layer\") {\n                //type 字段存在并且等于layer则代表是图层\n                console.log('选中的是图层');\n              }\n            } else if(!state.checkedIds.includes(data.RES_ID)){\n              // 没有选中复选框---------------------------\n              // 发送socket消息: 地图添加专题\n              sendSetAppARMsg(data, \"add\");\n              // 发送socket消息：更新右侧菜单数据\n              sendShowRightViewMsg(data, \"add\", data);\n            }\n            \n            // 发送socket消息：更新右侧菜单数据\n            sendShowRightViewMsg(data, \"highlight\", data);\n            console.log(state.checkedData, \"state.checkedData\");\n          }\n\n          let timeoutId;\n\n          /**\n           * 点击菜单项\n           * @param data {array} - 当前菜单项的数据\n           * @param node {object} - 当前菜单项节点\n           */\n          function handleClickNode(data, node) {\n            console.log(data, node, \"点击tree\");\n            if (!data[propsMap.children].length) {\n              if (timeoutId) {\n                clearTimeout(timeoutId);\n              }\n              timeoutId = setTimeout(() => {\n                clickNode(data, node);\n                timeoutId = undefined;\n              }, 100);\n            } else {\n              // 高亮当前选择节点的一级目录\n              menuTreeRef.value.setCurrentKey(state.currentActiveFirstLevelMenuId);\n            }\n          }\n\n          /**\n           * 触发复选（专题）\n           * @param {*} data - 传递给 data 属性的数组中该节点所对应的对象\n           * @param {*} node - 节点\n           */\n          function handleCheck(data, node) {\n\n            // 判断是勾选还是取消\n            if (!node.checked) {\n              // 取消勾选--------------------\n              // 逻辑：取消勾选高亮的专题和专题图层均不做处理\n              if (data.RES_ID !== state.currentMenuItem.RES_ID) {\n                // 发送socket消息: 地图删除专题\n                sendSetAppARMsg(data, \"remove\");\n                // 发送socket消息：添加右侧菜单数据\n                sendShowRightViewMsg(data, \"remove\", data);\n              }\n              // 删除点击的专题及专题图层的数据\n              const i = state.checkedData.findIndex((item) => item.RES_ID === data.RES_ID);\n              state.checkedData.splice(i,1);\n            } else {\n\n              // 勾选--------------------------\n              // 逻辑：勾选高亮的专题和专题图层均不做处理\n              if (data.RES_ID !== state.currentMenuItem.RES_ID && !state.checkedIds.includes(state.currentMenuItem.RES_ID)) {\n                // 发送socket消息：添加右侧菜单数据\n                sendShowRightViewMsg(state.currentMenuItem, \"remove\", data);\n              }\n                /* \n                  逻辑：\n                  1.勾选专题：先清掉所有专题，再重新添加，高亮的在最后；\n                  2.勾选专题图层：只做添加操作\n                */\n                // 高亮当前选择节点的一级目录\n                menuTreeRef.value.setCurrentKey(state.currentActiveFirstLevelMenuId);\n                // 设置一级节点高亮\n                setFirstNodeActive(node);\n\n                // 目录的扩展字段\n                const extendField = data.EXT1 ? JSON.parse(data.EXT1) : {};\n                // console.log(extendField.type, \"extendField.type\");\n                // type 字段不存在则代表是专题\n                if (!extendField.type) {\n                  console.log('勾选的是专题');\n\n\n                  /*若勾选项里没有包含高亮菜单*/\n                  if (!state.checkedIds.includes(state.currentMenuItem.RES_ID)) {\n                    // 过滤一下checkedData数组，清除图层的时候，数组中不包含当前选中的专题\n                    let filteredCheckedData = []\n                    state.checkedData.forEach((item) => {\n                      if(item.RES_ID !== state.currentMenuItem.RES_ID){\n                        filteredCheckedData.push(item);\n                      };\n                    });\n                    // 发送socket消息: 地图删除专题\n                    sendSetAppARMsg([...filteredCheckedData, state.currentMenuItem], \"remove\");\n                    // 发送socket消息: 地图添加专题\n                    sendSetAppARMsg([...filteredCheckedData, data], \"add\");\n                  } else {\n                    // 发送socket消息: 地图删除专题\n                    sendSetAppARMsg([...state.checkedData], \"remove\");\n                    // 发送socket消息: 地图添加专题\n                    sendSetAppARMsg([...state.checkedData, data], \"add\");\n                  }\n                } else if (extendField.type && extendField.type === \"layer\") {\n                  //type 字段存在并且等于layer则代表是图层\n                  console.log('勾选的是图层');\n                  // 发送socket消息: 地图添加专题图层\n                  sendSetAppARMsg(data, \"add\");\n                }\n\n                // 更新高亮项\n                state.currentMenuItem = data;\n                // 发送socket消息：添加右侧菜单数据\n                sendShowRightViewMsg(data, \"add\", data);\n                // 发送socket消息：更新右侧菜单数据\n                sendShowRightViewMsg(data, \"highlight\", data);\n                // 记录点击的专题及专题图层\n                state.checkedData.push(data);\n\n            }\n            // console.log(state.checkedData, \"state.checkedData\");\n            // 更新当前勾选上的菜单项的id列表\n            state.checkedIds = state.checkedData.map((item) => item.RES_ID);\n          }\n\n\n          /**\n           * 触发复选（图层专题）\n           * @param {*} data - 传递给 data 属性的数组中该节点所对应的对象\n           * @param {*} node - 节点\n           */\n          function handleLayerMenuCheck(data, node){\n            // 目录\n            if (data[propsMap.children].length) {\n              // 高亮当前选择节点的一级目录\n              layerMenuTreeRef.value.setCurrentKey(state.currentActiveFirstLevelLayerMenuId);\n            } else {\n              // 判断是勾选还是取消\n              if (!node.checked) {\n                // 取消勾选--------------------\n\n                // 设置选中项\n                if(state.currentLayerMenuItem?.RES_ID === data.RES_ID){\n                  state.currentLayerMenuItem = {};\n                }\n\n                // 逻辑：取消勾选高亮的专题和专题图层均不做处理\n                if (data.RES_ID !== state.currentMenuItem.RES_ID) {\n                  // 发送socket消息: 地图删除专题\n                  sendSetAppARMsg(data, \"remove\");\n                  // 发送socket消息：添加右侧菜单数据\n                  sendShowRightViewMsg(data, \"remove\", data);\n                }\n                // 删除点击的专题及专题图层的数据\n                const i = state.checkedData.findIndex((item) => item.RES_ID === data.RES_ID);\n                state.checkedData.splice(i,1);\n\n                // 获取树选中的图层数量，设置一级目录是否要取消高亮\n                const getCheckedNodes = layerMenuTreeRef.value.getCheckedNodes();\n                if(!getCheckedNodes.length) {\n                  // 取消高亮当前选择节点的一级目录\n                  layerMenuTreeRef.value.setCurrentKey(null);\n                  state.currentActiveFirstLevelLayerMenuId = null;\n                  state.layerMenuTreeKey += 1;\n                }\n\n              } else {\n                // 勾选--------------------------\n\n                // 发送socket消息: 地图添加专题图层\n                sendSetAppARMsg(data, \"add\");\n                // 发送socket消息：添加右侧菜单数据\n                sendShowRightViewMsg(data, \"add\", data);\n                // 发送socket消息：更新右侧菜单数据\n                sendShowRightViewMsg(data, \"highlight\", data);\n                // 更新高亮项\n                state.currentLayerMenuItem = data;\n                // 记录点击的专题及专题图层\n                state.checkedData.push(data);\n\n                if(!state.currentActiveFirstLevelLayerMenuId){\n                  // 设置一级节点高亮\n                  setFirstNodeActive(node, 'layer');\n                }\n              }\n            }\n          }\n\n          /**\n           * 移除地图图层\n           */\n          function removeMapLayer() {\n            // 地图需要移除的图层数据\n            const removeLayerData = state.checkedData;\n            /* 若勾选项中没有当前选中项 并且 有选中项 */\n            if (\n              !state.checkedData.find(\n                (item) => item.RES_ID === state.currentMenuItem.RES_ID\n              )\n              && state.currentMenuItem.RES_ID\n            ) {\n              // 当前选中项对应的专题也要移除\n              removeLayerData.push(state.currentMenuItem);\n            }\n            if(removeLayerData.length){\n              // 发送socket消息: 地图删除专题\n              sendSetAppARMsg(removeLayerData, \"remove\");\n            }\n          }\n\n          /**\n           * 初始化数据\n           */\n          function initData() {\n            /* 若有数据 */\n            if (state.menuData.length && state.menuData[0]?.[propsMap.children].length) {\n              // 重置勾选ID\n              state.checkedIds = [];\n              // 重置勾选菜单数据\n              state.checkedData = [];\n              // 初始化当前选中的菜单项数据\n              state.currentMenuItem = state.menuData[0][propsMap.children][0];\n              state.currentLayerMenuItem = {};\n              // 初始化当前高亮的一级菜单项id\n              state.currentActiveFirstLevelMenuId = state.menuData[0].RES_ID;\n\n              setTimeout(() => {\n                if (menuTreeRef.value) {\n                  // 高亮当前菜单\n                  menuTreeRef.value.setCurrentKey(\n                    state.menuData[0][propsMap.children][0].RES_ID\n                  );\n                  // 一级菜单项节点\n                  const firstLevelNode = menuTreeRef.value.getNode(\n                    state.menuData[0].RES_ID\n                  );\n\n                  if (firstLevelNode) {\n                    // 高亮一级菜单项\n                    firstLevelNode.isCurrent = true;\n                  }\n                }\n              });\n            }\n          }\n\n          /**\n           * 复选框是否可见\n           * @param node - 当前节点\n           * @param data - 当前节点数据\n           */\n          function checkboxVisible(node, data) {\n            /* 目录不显示复选框 */\n            if (!node.isLeaf) {\n              return false;\n            }\n            \n            try {\n              // 目录的扩展字段\n              const extendField = data?.EXT1 ? JSON.parse(data.EXT1) : {};\n              \n              if (extendField.type && extendField.type === 'layer') {\n                return true;\n              }\n            } catch (error) {\n              console.error(error, data?.EXT1, \"EXT1扩展字段数据格式不对\");\n            }\n            return state.isShowSubjectCheckbox;\n          }\n\n          /**\n           * 扁平化树形数据\n           * @param data - 树形数据\n           */\n          function treeToArray(data) {\n            const arr = [];\n            const expanded = (datas) => {\n              if (datas && datas.length > 0) {\n                datas.forEach((item) => {\n                  arr.push(item);\n                  if (item.CHILDREN) {\n                    expanded(item.CHILDREN);\n                    // eslint-disable-next-line no-param-reassign\n                    delete item.CHILDREN;\n                  }\n                });\n              }\n            };\n            expanded(data);\n            return arr;\n          }\n\n          /**\n           * 更新图层勾选状态\n           * @param layerStatusList - 图层状态列表\n           * @param layerList - 图层列表\n           */\n          function updateLayerCheck(layerStatusList, layerList) {\n            // console.log(layerStatusList, layerList);\n            layerStatusList.forEach((item) => {\n              if (item.visible) {\n                // 若图层可见，则查找图层的id在图层列表数据里有没有，有再添加\n                const findIndex = layerList.findIndex((val) => val.RES_NAME === item.layerId);\n                if (findIndex > -1) {\n                  // 更新当前勾选的图层ID\n                  state.checkedIds.push(layerList[findIndex].RES_ID);\n                  // 更新当前勾选上的菜单项的数据列表\n                  state.checkedData.push(layerList[findIndex]);\n                }\n              } else {\n                // 若图层不可见，则从当前勾选的图层ID列表中移除\n                const findIndex = state.checkedData.findIndex((val) => val.RES_NAME === item.layerId);\n                if (findIndex > -1) {\n                  // 更新当前勾选的图层ID\n                  state.checkedIds.splice(findIndex, 1);\n                  // 更新当前勾选上的菜单项的数据列表\n                  state.checkedData.splice(findIndex, 1);\n                }\n              }\n            })\n             // 所有的勾选的图层ID\n            const allCheckedData = state.checkedData.map((val) => val.RES_ID);\n            // 设置勾选状态\n            layerMenuTreeRef.value.setCheckedKeys(allCheckedData, false);\n\n            if(state.checkedData.length && !state.currentActiveFirstLevelLayerMenuId){\n              // 设置一级节点高亮\n              state.currentActiveFirstLevelLayerMenuId = state.layerMenuData[0].RES_ID;\n              // 高亮当前选择节点的一级目录\n              layerMenuTreeRef.value.setCurrentKey(state.currentActiveFirstLevelLayerMenuId);\n            }\n          }\n\n          onMounted(() => {\n            // 默认发送socket消息，通知鹿小图加载完成\n            rootData.rootSocket.emit(\"message\", {\n              room: global.socketRoom, // 房间号\n              type: \"leftMenuMounted\", // 消息名称\n              data: {}, // 发送的数据\n            });\n\n            // 默认发送socket消息，通知鹿小图加载完成\n            rootData.rootSocket.emit(\"message\", {\n              room: global.socketRoom, // 房间号\n              type: \"loadMenuData\", // 消息名称\n              data: {\n                menuId:'58b82e7a-8b9f-4e6a-863e-4f8292885bf3'\n              }, // 发送的数据\n            });\n\n            // 接收socket消息\n            rootData.rootOn(\"rootSocket:change\", (data) => {\n              console.log(data, \"专题菜单接收到消息---\");\n\n              /* 加载菜单数据 */\n              if (data.type === \"loadMenuData\") {\n\n                // 移除地图图层\n                removeMapLayer();\n\n                try {\n                  const activeMenuItem = data.data.menuId;\n                  // 所有的菜单数据-字符串\n                  const allMenuDataStr = localStorage.getItem(\"lxtAsideMenusMap\");\n                  // 所有的菜单数据\n                  let allMenuData = allMenuDataStr ? JSON.parse(allMenuDataStr) : [];\n\n                  if (allMenuData && activeMenuItem) {\n                    // 更新菜单数据（所有的数据，不区分是专题还是专题图层）\n                    state.data = allMenuData[activeMenuItem] || [];\n                  \n                    // 更新专题和专题图层的菜单数据\n                    state.menuData = [];\n                    state.layerMenuData = [];\n                    state.data.forEach((item)=>{\n                      if(item.EXT1){\n                        const typeExt1Obj = JSON.parse(item.EXT1);\n                        if(typeExt1Obj.type === 'application'){\n                          state.menuData.push(item);\n                        } else if(typeExt1Obj.type === 'layer') {\n                          state.layerMenuData.push(item);\n                        }\n                      }\n                    });\n\n                    // 初始化数据-默认选中第一个专题\n                    initData();\n\n                    if (state.currentMenuItem) {\n                      // 发送socket消息: 地图添加专题\n                      sendSetAppARMsg(state.currentMenuItem, \"add\");\n                      // 发送socket消息：添加右侧菜单数据\n                      sendShowRightViewMsg(state.currentMenuItem, \"add\", state.currentMenuItem);\n                      // 发送socket消息：控制右侧面板高亮专题\n                      sendShowRightViewMsg(state.currentMenuItem, \"highlight\", state.currentMenuItem);\n                    }\n                    \n                  }\n                  // console.log('刷新树接收的数据 ---', data);\n                } catch (error) {\n                  return \"参数格式错误\";\n                }\n              } else if (data.type === \"activeSpecial\") {\n                /* 监听专题切换 */\n                const node = menuTreeRef.value.getNode(data.data.id);\n                if (node) {\n                  clickNode(data.data.rawData, node);\n                }\n              } else if (data.type === \"resetActiveMenu\") {\n                /* 监听菜单高亮重置 */\n\n                /* 非当前模块发的消息才重置高亮 */\n                if (data.data !== \"subject\") {\n                  /* 若有选中的图层数据 且 没有勾选上当前菜单项 */\n                  if (\n                    Object.keys(state.currentMenuItem).length &&\n                    !state.checkedIds.includes(state.currentMenuItem.RES_ID)\n                  ) {\n                    // 发送socket消息:右侧面板移除当前选中项\n                    sendShowRightViewMsg(state.currentMenuItem, \"remove\", state.currentMenuItem);\n                  }\n                  state.currentMenuItem = {};\n                }\n\n              } else if (data.type === \"getMenuLayerStatus\") {\n                /* 监听获取专题或图层状态消息 */\n                const checkedData = state.checkedData.map((val) => ({...val, isChecked: true}));\n                // 所有高亮+勾选的菜单项\n                const allActiveMenu = state.currentMenuItem && state.checkedIds.includes(state.currentMenuItem.RES_ID) ? checkedData : [...checkedData, { ...state.currentMenuItem, isChecked: false }];\n                // 所有高亮的专题\n                const allAppActiveMenu = [];\n                // 所有高亮的图层\n                const allLayerActiveMenu = [];\n                allActiveMenu.forEach((item) => {\n                  try {\n                    // 目录的扩展字段\n                    const extendField = item.EXT1 ? JSON.parse(item.EXT1) : {};\n  \n                    // type 字段不存在则代表是专题\n                    if (!extendField.type) {\n                      allAppActiveMenu.push(item);\n                    } else {\n                      allLayerActiveMenu.push(item);\n                    }\n                  } catch (err) {\n                    console.error(err, `${item.EXT1}解析错误`)\n                  }\n                });\n\n                const menu = allAppActiveMenu.map((item) => {\n                  // 目录的扩展字段\n                  const extendField = item.EXT1 ? JSON.parse(item.EXT1) : {};\n                  return {\n                    resCode: extendField?.resCode || \"\",\n                    opType: 'add',\n                    resName: item.RES_NAME,\n                    appURL: extendField?.appURL || \"\",\n                    highlight: item.RES_ID === state.currentMenuItem.RES_ID,\n                    isChecked: item.isChecked,\n                  }\n                });\n\n                const menuLayer = allLayerActiveMenu.map((item) => {\n                  // 目录的扩展字段\n                  const extendField = item.EXT1 ? JSON.parse(item.EXT1) : {};\n                  return {\n                    libraryId: extendField.resCode,\n                    layerId: extendField.resCode,\n                    opType: 'add',\n                    highlight: item.RES_ID === state.currentMenuItem.RES_ID,\n                    isChecked: item.isChecked,\n                  }\n                });\n\n                // 发送socket消息: 地图添加/删除专题\n                rootData.rootSocket.emit(\"message\", {\n                  room: global.socketRoom, // 房间号\n                  type: \"sendMenuStatus\", // 消息名称\n                  data: {\n                    menu,\n                    menuLayer,\n                  },\n                });\n\n                console.log('专题菜单发送sendMenuStatus消息---', {\n                  menu,\n                  menuLayer,\n                })\n              }else if (data.type === 'layerStatus') {\n                console.log(data, '专题图层菜单接收到layerStatus消息---');\n                if (!Array.isArray(data.data)) {\n                  return;\n                }\n\n                // 扁平化的图层数据\n                const flatArr = treeToArray(JSON.parse(JSON.stringify(state.layerMenuData)));\n                // 更新图层勾选状态\n                updateLayerCheck(data.data, flatArr);\n              }\n            });\n\n            setTimeout(()=>{\n              // 扁平化的图层数据\n              const flatArr = treeToArray(JSON.parse(JSON.stringify(state.layerMenuData)));\n              console.log(flatArr);\n              updateLayerCheck([{layerId: '区县', visible: true}], flatArr);\n            },5000)\n          });\n\n          onUnmounted(() => {\n            rootData.rootOff(\"rootSocket:change\");\n          });\n\n          return {\n            ...toRefs(state),\n            themeName,\n            propsMap,\n            menuTreeRef,\n            layerMenuTreeRef,\n            handleClickNode,\n            handleCheck,\n            checkboxVisible,\n            handleLayerMenuCheck\n          };\n        },\n      };\n\n      /**\n       * 这里入口组件内容\n       */\n      const MainComponent = {\n        template:\n          // 默认页面 ———— 一直显示 页面中的组件根据显示条件显示\n          // '<router-view></router-view>',\n          \"<subject-component v-if='state.isSocketConnect'></subject-component>\",\n        // '<layer-component></layer-component>',\n        components: {\n          subjectComponent,\n          // layerComponent,\n        },\n        setup() {\n          // 获取缓存里的鹿小图全局变量数据\n          const lxtGlobal = localStorage.getItem(\"lxtGlobal\")\n            ? JSON.parse(localStorage.getItem(\"lxtGlobal\"))\n            : {};\n\n          const rootEmitter = mitt();\n\n          let global = reactive(\n            /* 插入应用级别的全局变量 相当于store中的rootData */\n            /* globalVariableStart */\n            {\n              socketIp:\n                lxtGlobal.socketIp || \"http://192.168.0.202:7777/socketPath\",\n              socketPath: lxtGlobal.socketPath || \"/socketPath\",\n              socketRoom: lxtGlobal.socketRoom || roomId || \"admin\",\n            }\n            /* globalVariableEnd */\n          );\n\n          let state = reactive({\n            isSocketConnect: false, // socket 是否连接\n          });\n\n          // 创建 socket 连接\n          let socket = null;\n          if (global.socketIp) {\n            const options = {};\n            if (global?.socketPath) {\n              options.path = global.socketPath;\n            }\n            socket = io(global.socketIp, options);\n          }\n\n          provide(\"root\", {\n            ...toRefs(global),\n            rootEmit: rootEmitter.emit, // mitt 发送\n            rootOn: rootEmitter.on, // mitt 接收\n            rootOff: rootEmitter.off, // mitt 移除\n            rootSocket: socket, // socket 实例\n          });\n\n          /**\n           * 监听修改全局变量事件\n           * @param obj 修改后的变量\n           */\n          rootEmitter.on(\"rootData:change\", (obj) => {\n            global = _.set(global, obj.key, obj.value);\n\n            if (global.socketIp && global.socketRoom) {\n              // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息\n              socket.emit(\"message\", {\n                room: global.socketRoom, // 房间号\n                type: \"internalType:ChangeGlobalValue\", // 需要保证此类型唯一性\n                data: obj,\n              });\n            }\n          });\n\n          /**\n           * 连接成功时进入对应的房间\n           */\n          if (socket) {\n            socket.on(\"connect\", function () {\n              if (global.socketIp && global.socketRoom) {\n                // 进入房间\n                socket.emit(\"join-room\", global.socketRoom);\n                state.isSocketConnect = true;\n              }\n            });\n          }\n\n          /**\n           * 接收到 socket 消息时触发\n           * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}\n           */\n          if (socket) {\n            socket.on(\"message\", function (data) {\n              // socket 监听全局变量的变化，然后合并值\n              if (data.type === \"internalType:ChangeGlobalValue\") {\n                // 合并 globa 的值\n                global = _.set(global, data.data.key, data.data.value);\n              } else {\n                // 发送消息，通知其他页面\n                rootEmitter.emit(\"rootSocket:change\", data);\n              }\n            });\n          }\n\n          // 监听 socket 房间的变化\n          watch(\n            () => global.socketRoom,\n            (val, oldVal) => {\n              if (socket) {\n                // 离开房间\n                socket.emit(\"leave-room\", oldVal);\n                // 进入房间\n                socket.emit(\"join-room\", val);\n              }\n            }\n          );\n\n          onBeforeUnmount(() => {\n            // 离开房间\n            socket.emit(\"leave-room\", global.socketRoom);\n            // 断开连接\n            socket.disconnect();\n          });\n\n          return {\n            state,\n          };\n        },\n      };\n\n      const app = createApp(MainComponent);\n      /* 下面的操作是去掉控制台Vue输出的警告信息  如果想开启警告信息可以把这个空函数注释掉 */\n      app.config.warnHandler = function (msg, vm, trace) {\n        // 空函数，不做任何处理\n      };\n      app\n        .use(ElementPlus, {\n          size: \"small\",\n        })\n        .mount(\"#app\");\n    </script>\n  </body>\n</html>\n",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"205px","height":"470px","position":"unset","left":"16px","top":"55px","backgroundColor":"rgba(23, 62, 228, 0)"}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tRectx0x10: {
defaultStyle: {
            default: {"width":"25px","height":"25px","position":"unset","left":"2px","top":"10px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/eccc79ac5454467f9fae314902c11228.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","cursor":"pointer","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(180deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","pointerEvents":"auto","backgroundColor":"var(--left-menu-unpack-bg)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"25px","height":"25px","position":"unset","left":"2px","top":"10px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/eccc79ac5454467f9fae314902c11228.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","cursor":"pointer","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(180deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","pointerEvents":"auto","backgroundColor":"var(--left-menu-unpack-bg)"}}}, 
 },
},
});
const setPageSize = () => {
// 菜单面板dom
const menuHtmlDom = document.getElementById('t-component-bbe0.af0858b4c');

if (state.showMenu) {
  // 展开状态
  menuHtmlDom.style.width = '223px';
  menuHtmlDom.style.height = '833px';
  menuHtmlDom.style.overflow = 'inherit';
} else {
  // 收起状态
  menuHtmlDom.style.width = '43px';
  menuHtmlDom.style.height = '43px';
  menuHtmlDom.style.overflow = 'hidden';
}
 
};
const setIframeVisible = () => {
if (state.type === "special") {
  // 专题
  document.getElementById('t-iframe-13b6.211504a4b').style.display = "block";
  // 图层
  document.getElementById('t-iframe-32a6.a99f8be3').style.display = "none";
} else {
  // 图层
  document.getElementById('t-iframe-13b6.211504a4b').style.display = "none";
  // 专题
  document.getElementById('t-iframe-32a6.a99f8be3').style.display = "block";
}
};
const updateLayersCount = (count) => {
// 图层标签数据
const index = state.typeList.findIndex((val) => val.name === 'layer');
if (index > -1) {
  // 更新图层名称
  state.typeList[index].label = `图层（${count}）`;
}
};
const getLayerTotalCount = (list,count) => {
// 配置选项的映射
const propsMap = {
  children: 'children',
  label: 'name',
};

// 获取图层总数
let currentCount = count;
list.forEach((item) => {
  /* 若是目录 */
  if (item[propsMap.children]) {
    // 递归遍历目录下的图层
    currentCount = getLayerTotalCount(item[propsMap.children], currentCount);
  } else {
    currentCount += 1;
  }
});
return currentCount;
};
const onLoadMenuData = (menuId) => {
/**
 * 监听加载菜单数据事件
 */

/* 若一级菜单切换到“智能对话” */
if (menuId === '7d3ae01e-a24f-4bf3-8390-d8676fc0a44c' || state.typeList[0].name === 'layer') {
  state.type = 'layer'
} else {
  state.type = 'special'
}

// 设置iframe显隐
setIframeVisible();
};
const setSubjectVisible = () => {
// 判断专题是否展示
const ext1 = global.navMenuItemActive.EXT1;
// 根据接口返回的字段判断是否显示专题切换，默认显示
if (ext1) {
  const ext1Obj = JSON.parse(ext1);
  if (ext1Obj.layerMenu || ext1Obj.applicationMenu) {
    state.typeList = [
      {
        "label": "专题",
        "name": "special"
      },
      {
        "label": "图层",
        "name": "layer"
      }
    ];
  } else {
    state.typeList = [
      {
        "label": "图层",
        "name": "layer"
      }
    ]
  }

}
// if (global.isShowSubject) {
//   state.typeList = [
//     {
//       "label": "专题",
//       "name": "special"
//     },
//     {
//       "label": "图层",
//       "name": "layer"
//     }
//   ];
// } else {
//   state.typeList = [
//     {
//       "label": "图层",
//       "name": "layer"
//     }
//   ];
// }
};
const handleHelpClick = (data) => {
console.log(156, data);

// {
//     "layerId": "佛山市",
//     "visible": "1",
//     "libraryId": "c45760b19c6e4e8aa653821b486421d9",
//     "name": "佛山市",
//     "parentId": "6ce44877142f42a5893bc381cb67891d",
//     "hasDialog": true
// }

rootData.rootEmit(
  'rootData:change',
  { 
    key:'businessDialog',
    value: {
      dialogName: 'zhcxDetailDialogComponent',
      dialogParmas: {
        ...data,
      },
    },
  },
);
};
const ontabClick1719921924660 = (data) => {
// 设置变量值
state.type = data.name;
// 执行自定义方法
setIframeVisible();
};
const onclick1719920562468 = () => {
// 设置变量值
state.showMenu = false;
// 执行自定义方法
setPageSize();
};
const onclick1721971936695 = () => {
// 设置变量值
state.showMenu = true;
// 执行自定义方法
setPageSize();
};
// 接口函数
const getLayerDataJson = () => {
return new Promise((resolve, reject) => {
  http({"url":"/video/FS_Layer.json","method":"get","baseURL":global.serviceBaseUrl,"params":{},}).then((res) => {
     // 成功的操作
     console.log(res, '图层数据');
if (res.status === 200 && res.data?.head?.statusCode === 200) {
  // 左侧的图层数据存到缓存里
  const asideLayerMap = res.data?.data?.msg || [];
  localStorage.setItem('lxtAsideLayerMap', JSON.stringify(asideLayerMap));

  // 获取图层数量
  const count = getLayerTotalCount(asideLayerMap, 0);
  updateLayersCount(count);
} 
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getLayerDataCopy = () => {
return new Promise((resolve, reject) => {
  http({"url":"/mapgo5.0/api/spacelayer/download","method":"get","baseURL":global.serviceBaseUrl,"params":{"categoryId":"16f5aeac5c0a46148f91a5679beef603"},}).then((res) => {
     // 成功的操作
     console.log(res, '图层数据');
if (res.status === 200 && res.data?.head?.statusCode === 200) {
  // 左侧的图层数据存到缓存里
  const asideLayerMap = res.data?.data?.msg || [];
  localStorage.setItem('lxtAsideLayerMap', JSON.stringify(asideLayerMap));

  // 获取图层数量
  const count = getLayerTotalCount(asideLayerMap, 0);
  state.typeList[1].label = `图层（${count}）`;
} 
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getLayerData = () => {
return new Promise((resolve, reject) => {
  http({"url":"/assets/tclb.json","method":"get","baseURL":global.foshanServiceBaseUrl,"params":{},}).then((res) => {
     // 成功的操作
     console.log(res, '图层数据');
if (res.status === 200 && res.data?.head?.statusCode === 200) {
  const structData = async () => {
    const helpRes = await getHelpData();
    console.log(helpRes);
    // 左侧的图层数据存到缓存里
    const asideLayerMap = res.data?.data?.msg?.map((item) => ({
      ...item,
      children: item.children?.map((elem) => ({
        ...elem,
        // hasDialog: Math.random() > 0.5 ? true : false, // 是否有弹框
      }))
    })) || [];
    localStorage.setItem('lxtAsideLayerMap', JSON.stringify(asideLayerMap));

    // 获取图层数量
    const count = getLayerTotalCount(asideLayerMap, 0);
    updateLayersCount(count);
  };
  structData();
} 

// {
//     "visible": "0",
//     "children": [
//         {
//             "layerId": "省边界图层",
//             "visible": "1",
//             "libraryId": "6d2d5ce254844785aa1c6bf5215e7504",
//             "name": "省边界图层",
//             "parentId": "6ce44877142f42a5893bc381cb67891d"
//         },
//         {
//             "layerId": "广东地市",
//             "visible": "1",
//             "libraryId": "c1bdf9b90a264446beabdf4aab07f0ba",
//             "name": "周边城市",
//             "parentId": "6ce44877142f42a5893bc381cb67891d"
//         },
//         {
//             "layerId": "佛山市",
//             "visible": "1",
//             "libraryId": "c45760b19c6e4e8aa653821b486421d9",
//             "name": "佛山市",
//             "parentId": "6ce44877142f42a5893bc381cb67891d"
//         },
//         {
//             "layerId": "区县",
//             "visible": "1",
//             "libraryId": "42f50c1c217b4a3b9cd04902a152644d",
//             "name": "区县",
//             "parentId": "6ce44877142f42a5893bc381cb67891d"
//         },
//         {
//             "layerId": "镇街",
//             "visible": "1",
//             "libraryId": "425ff843491545a98d7143f6af82d670",
//             "name": "镇街",
//             "parentId": "6ce44877142f42a5893bc381cb67891d"
//         }
//     ],
//     "libraryId": "6ce44877142f42a5893bc381cb67891d",
//     "name": "基础地形",
//     "parentId": "e6ce4d67e0cf476584952a346fc3d0ac"
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 初始请求，调取接口
getLayerData();
// 接口函数
const getHelpData = () => {
return new Promise((resolve, reject) => {
  http({"url":"commonService/serviceinterface/search/run.action","method":"get","baseURL":"http://192.168.24.104:8888","params":{"interfaceId":"3cfd2d4c6a89916671be9d4c50cc23f7","token":"dcp"},}).then((res) => {
     // 成功的操作
     console.log(584, '获取图层菜单帮助信息', res.data)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-testLeftMenu', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closePopup", // 消息名称
data: "", // 发送的数据
});
/* 接收socket.io消息 */
rootData.rootOn('rootSocket:change', (data)=>{
if(data.type === "loadMenuData"){
try{
// 执行自定义方法
onLoadMenuData(data.data.menuId);
} catch (error) {
console.error('参数格式错误', error);
};
};
});
// 执行自定义方法
setSubjectVisible();
/* 接收socket.io消息 */
rootData.rootOn('rootSocket:change', (data)=>{
if(data.type === "sendHelpMsg"){
try{
// 执行自定义方法
handleHelpClick(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
});
onMounted(() => {
setPageScale('t-l-c-testLeftMenu', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTabsx0x4ComputedData = computed(() => _.merge({}, componentState.tTabsx0x4.default, componentState.tTabsx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tIframex0x6ComputedData = computed(() => _.merge({}, componentState.tIframex0x6.default, componentState.tIframex0x6?.[state.screenSize]));

 const tIframex0x7ComputedData = computed(() => _.merge({}, componentState.tIframex0x7.default, componentState.tIframex0x7?.[state.screenSize]));

 const tRectx0x10ComputedData = computed(() => _.merge({}, componentState.tRectx0x10.default, componentState.tRectx0x10?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x1ComputedData,
tRectx0x3ComputedData,
tTabsx0x4ComputedData,
tRectx0x5ComputedData,
tIframex0x6ComputedData,
tIframex0x7ComputedData,
tRectx0x10ComputedData,
ontabClick1719921924660,
onclick1719920562468,
onclick1721971936695,
};
},
};