window.rightFullApplicationSupportComponent = {
template: 
`<div id="t-l-c-rightFullApplicationSupport" class="t-l-c-rightFullApplicationSupport" >` +
`<t-rect id="t-rect-2071.0999c6abb" class="rightFullApplicationSupport-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-ea5a.c9c44f948" class="rightFullApplicationSupport-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-gradient-shadow-text id="t-gradient-shadow-text-8875.203011bd6" class="rightFullApplicationSupport-t-gradient-shadow-text-0-3"  :label="tGradientShadowTextx0x3ComputedData.label" :c-style="tGradientShadowTextx0x3ComputedData.cStyle" :shadow-style="tGradientShadowTextx0x3ComputedData.shadowStyle" @click="onclick1739960072870">` +
`</t-gradient-shadow-text>` +
`<t-tabs id="t-tabs-29b0.c19a07a77" class="rightFullApplicationSupport-t-tabs-0-4"  :alias="tTabsx0x4ComputedData.alias" :data="tTabsx0x4ComputedData.data" :model-value="tTabsx0x4ComputedData.model-value" :tab-position-extend="tTabsx0x4ComputedData.tabPositionExtend" :stretch="tTabsx0x4ComputedData.stretch" :c-style="tTabsx0x4ComputedData.cStyle" :active-tab="replaceCssVariables(state.tabSelect, global?.theme || global?.activeTheme || '默认主题')" @tab-click="ontabClick1739760018996">` +
`</t-tabs>` +
`<t-select id="t-select-0bfa.41252cc21" class="rightFullApplicationSupport-t-select-0-5"  :active-value="replaceCssVariables(state.BUSINESS_TYPE, global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(state.sectionData, global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x5ComputedData.alias" :multiple="tSelectx0x5ComputedData.multiple" :placeholder="tSelectx0x5ComputedData.placeholder" :clearable="tSelectx0x5ComputedData.clearable" :disabled="tSelectx0x5ComputedData.disabled" :name="tSelectx0x5ComputedData.name" :autocomplete="tSelectx0x5ComputedData.autocomplete" :filterable="tSelectx0x5ComputedData.filterable" :no-match-text="tSelectx0x5ComputedData.no-match-text" :no-data-text="tSelectx0x5ComputedData.no-data-text" :c-style="tSelectx0x5ComputedData.cStyle" @change="onchange1740464576781">` +
`</t-select>` +
`<t-table id="t-table-839a.15caa1d3" class="rightFullApplicationSupport-t-table-0-6"  :height="tTablex0x6ComputedData.height" :stripe="tTablex0x6ComputedData.stripe" :border="tTablex0x6ComputedData.border" :auto-scroll="tTablex0x6ComputedData.autoScroll" :speed="tTablex0x6ComputedData.speed" :columns="tTablex0x6ComputedData.columns" :data="replaceCssVariables(state.dataList, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x6ComputedData.defaultSort" :c-style="tTablex0x6ComputedData.cStyle" :highlight-current-row="tTablex0x6ComputedData.highlightCurrentRow" @row-click="onrowClick1745904828962">` +
`</t-table>` +
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
   deptName: "外委办局",
   dataList: [],
   tabSelect: "2",
   sectionData: [],
   BUSINESS_TYPE: "",
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
            default: {"width":"400px","height":"50px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"","backgroundColor":"rgba(23, 62, 228, 0)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"50px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"","backgroundColor":"rgba(23, 62, 228, 0)"}}}, 
 },
},
tRectx0x2: {
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
tGradientShadowTextx0x3: {
defaultStyle: {
            default: {"width":"135px","height":"31px","position":"unset","left":"40px","top":"15px","fontFamily":"方正综艺","fontSize":"20px","color":"","textAlign":"left","backgroundColor":"","letterSpacing":"2px","paddingLeft":"0px","marginLeft":"0px","animationName":"","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-17/c72e2668a7de449bb18182809dbd87ab.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"11px 16px","-webkit-mask-size":"","backgroundPosition":"100% 7px","-webkit-mask-position":"","cursor":"pointer"},
            
            },
 default: { 
 
label:"全应用支撑",
cStyle:{"wrapper":{"default":{"width":"135px","height":"31px","position":"unset","left":"40px","top":"15px","fontFamily":"方正综艺","fontSize":"20px","color":"","textAlign":"left","backgroundColor":"","letterSpacing":"2px","paddingLeft":"0px","marginLeft":"0px","animationName":"","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-17/c72e2668a7de449bb18182809dbd87ab.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"11px 16px","-webkit-mask-size":"","backgroundPosition":"100% 7px","-webkit-mask-position":"","cursor":"pointer"}},"textStyle":{"default":{"-webkit-text-fill-color":"transparent","-webkit-background-clip":"text","backgroundImage":"linear-gradient(rgba(255, 255, 255, 1),rgba(255, 255, 255, 1))","fontWeight":"300","color":"rgba(255, 255, 255, 1)","fontSize":"20px","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","fontFamily":"方正综艺","paddingLeft":"10px","paddingTop":"4px"}},"textShadowStyle":{"default":{"fontWeight":"bold","color":"","fontFamily":"方正综艺","paddingLeft":"10px","paddingTop":"4px"}}},
shadowStyle:{"blur":"8PX","color":"#00738A"}, 
 },
},
tTabsx0x4: {
defaultStyle: {
            default: {"position":"unset","width":"168px","height":"28px","backgroundColor":"rgba(0, 140, 255, 0)","fontSize":"14px","lineHeight":"26px","animationName":"","left":"230px","top":"18px"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"外委办厅局","name":"5"},{"label":"生态环境厅","name":"2"}],
'model-value':"work",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"position":"unset","width":"168px","height":"28px","backgroundColor":"rgba(0, 140, 255, 0)","fontSize":"14px","lineHeight":"26px","animationName":"","left":"230px","top":"18px"}},"itemWrapper":{"default":{"height":"28px","width":"68px","lineHeight":"28px","fontSize":"14px","color":"var(--business-white)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","backgroundColor":"rgba(20, 112, 204, 0)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"active":{"fontSize":"14px","color":"var(--business-tab-active-text)","backgroundColor":"rgba(37, 156, 224, 0)","borderLeft":"0px none rgba(0,212,255,0.6)","borderTop":"0px none rgba(0,212,255,0.6)","borderRight":"0px none rgba(0,212,255,0.6)","borderBottom":"0px none rgba(0,212,255,0.6)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","box-shadow":"","backdropFilter":"blur(0px)","lineHeight":"28px"},"hover":{"color":"var(--business-tab-active-text)","lineHeight":"28px"}},"itemActiveBorder":{"active":{"backgroundColor":"rgba(255, 0, 0, 0)"},"default":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"rgba(222, 233, 14, 0)"}}},
activeTab:"2", 
 },
},
tSelectx0x5: {
defaultStyle: {
            default: {"width":"130px","height":"28px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"rgba(23, 62, 228, 0)","borderLeft":"1px none var(--business-select-border)","borderTop":"1px none var(--business-select-border)","borderRight":"1px none var(--business-select-border)","borderBottom":"1px none var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":"","left":"265px"},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"DICTIONARY_NAME","value":"DICTIONARY_CODE","disabled":"disabled"},
multiple:false,
placeholder:"请选择业务类别",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"130px","height":"28px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"rgba(23, 62, 228, 0)","borderLeft":"1px none var(--business-select-border)","borderTop":"1px none var(--business-select-border)","borderRight":"1px none var(--business-select-border)","borderBottom":"1px none var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":"","left":"265px"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"rgba(23, 62, 228, 0)","borderLeft":"1px none var(--business-select-border-hover)","borderTop":"1px none var(--business-select-border-hover)","borderRight":"1px none var(--business-select-border-hover)","borderBottom":"1px none var(--business-select-border-hover)"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"rgba(23, 62, 228, 0)","borderLeft":"1px none var(--business-select-border-hover)","borderTop":"1px none var(--business-select-border-hover)","borderRight":"1px none var(--business-select-border-hover)","borderBottom":"1px none var(--business-select-border-hover)","box-shadow":"var(--business-select-shadow) 0px 0px 0px 2px "}},"placeholder":{"default":{"color":"var(--t-text)"}},"arrow":{"default":{"color":"var(--t-text)","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px","right":"0","position":"relative","left":"7px"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","width":"130px","paddingLeft":"6px","paddingRight":"6px"}},"dropdownItem":{"default":{"fontSize":"14px","color":"var(--t-text)","height":"28px","lineHeight":"28px","width":"116px","marginBottom":"4px","paddingLeft":"8px","paddingRight":"8px"},"hover":{"color":"var(--t-text)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"disabledWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTablex0x6: {
defaultStyle: {
            default: {"width":"400px","height":"168px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"},
            
            },
 default: { 
 
height:"168",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"业务类别","type":"default","key":"CATEGORY_TWO","stateKey":"","width":"132PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"业务场景","type":"default","key":"NAME","stateKey":"","width":"132PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"服务数量（条）","type":"default","key":"FWSL","stateKey":"","width":"134PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--business-theme-light)","text-decoration":"underline","text-underline-offset":"2px"},"cellStyle":{"cursor":"pointer"}},"infoPosition":"right","infoKey":"","infoStyle":{"fontStyle":{"fontSize":"14PX"}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"400px","height":"168px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"}},"headerCell":{"default":{"borderBottom":"2px none rgba(26,27,31,1)","borderLeft":"1px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","width":"418px","height":"28px","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"7px","paddingRight":"0px"}},"bodyCell":{"default":{"backgroundColor":"","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","height":"32px","paddingTop":"7px","paddingBottom":"7px","fontSize":"16px","paddingLeft":"7px","paddingRight":"0px","lineHeight":"24px"},"hover":{"backgroundColor":"rgba(48, 72, 173, 0)","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","lineHeight":"24px","height":"32px"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(218, 24, 24, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"headerRowWrapper":{"default":{"backgroundColor":"rgba(223, 44, 44, 0)","paddingLeft":"0px","paddingRight":"0px","paddingTop":"0px","backgroundImage":"var(--t-small-tab-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 32px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"28px"}},"rowWrapper":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","height":"32px","backgroundColor":"var(--table-bm-color)"},"hover":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"","height":"32px","box-shadow":"rgba(0, 255, 246, 1) 0px 0px 0px 1px inset"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(59, 182, 151, 0)","backgroundImage":"unset !important","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none "},"hover":{"borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"bodyCellInner":{"default":{"height":"20px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"highlightRow":{"default":{"height":"auto"}}},
highlightCurrentRow:false, 
 },
},
});
const handleRowClick = (column,row) => {
console.log(row, column)
if (row.label.indexOf('服务数量')>=0) {

  global.showPopComponent = 'allApplicationCallRelationComponent';
  global.showPop = true;
   
 setTimeout(function(){
   rootData.rootSocket.emit('message', {
    type: 'initDataAllApplication',
    room: global.socketRoom,
    data: {
      DEPT_CODE: column.DEPT_CODE,
      NAME: column.NAME,
      TODATE:column.DATA_TIME,
      DESCRIPTION:column.DESCRIPTION
    },
  });
 },100)
}
};
const ontabClick1739760018996 = (data) => {
// 设置变量值
state.tabSelect = data.name;
};
const onclick1739960072870 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'showPopComponent',
                    value:'allApplicationNewComponent',
                    data: {
                      showPopComponent: 'allApplicationNewComponent'
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
const onchange1740464576781 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.BUSINESS_TYPE = value;
};
const onrowClick1745904828962 = (row,column,event) => {
// 执行自定义方法
handleRowClick(row,column);
};
// 接口函数
const getCodeData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"BUSINESS_TYPE"},}).then((res) => {
     // 成功的操作
     if (res?.data?.data) {
  state.sectionData= [];
  state.sectionData = res.data.data;
  state.sectionData.unshift({
    DICTIONARY_CODE: "",
    DICTIONARY_NAME: "全部",
    EXT1: "NULL",
    EXT2: "NULL",
    EXT3: "NULL",
    EXT4: "NULL"
  })
  console.log(state.sectionData, '使用部门');
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
const getDataList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"d6642821863471d0be87f28a2f74f190","DEPT_CODE":state.tabSelect,"BUSINESS_TYPE":state.BUSINESS_TYPE},}).then((res) => {
     // 成功的操作
     if (res?.data?.data) {
  state.dataList = res.data.data;
  getEl();
} else {
  state.dataList = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [state.tabSelect,state.BUSINESS_TYPE], () => {
getDataList();
},{
deep: true, // 深度监听
});
// 初始请求，调取接口
getDataList();
 function handleWindowResize() {
                            setPageScale('t-l-c-rightFullApplicationSupport', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getEl();
/* 接收socket.io消息 */
const onSocketChange09f9b1bc97624d85b1d2 = function (data) {
if(data.type === "allApplicationLoaded"){
try{
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeAllApplication", // 消息名称
data: {"DEPT_CODE":global.applicaiton.deptCode,"NAME":global.applicaiton.title}, // 发送的数据
});
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange09f9b1bc97624d85b1d2);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange09f9b1bc97624d85b1d2);
});
onMounted(() => {
setPageScale('t-l-c-rightFullApplicationSupport', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tGradientShadowTextx0x3ComputedData = computed(() => _.merge({}, componentState.tGradientShadowTextx0x3.default, componentState.tGradientShadowTextx0x3?.[state.screenSize]));

 const tTabsx0x4ComputedData = computed(() => _.merge({}, componentState.tTabsx0x4.default, componentState.tTabsx0x4?.[state.screenSize]));

 const tSelectx0x5ComputedData = computed(() => _.merge({}, componentState.tSelectx0x5.default, componentState.tSelectx0x5?.[state.screenSize]));

 const tTablex0x6ComputedData = computed(() => _.merge({}, componentState.tTablex0x6.default, componentState.tTablex0x6?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tGradientShadowTextx0x3ComputedData,
tTabsx0x4ComputedData,
tSelectx0x5ComputedData,
tTablex0x6ComputedData,
onclick1739960072870,
ontabClick1739760018996,
onchange1740464576781,
onrowClick1745904828962,
};
},
};