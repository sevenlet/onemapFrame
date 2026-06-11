window.threeInquirySuesTablePopComponent = {
template: 
`<div id="t-l-c-threeInquirySuesTablePop" class="t-l-c-threeInquirySuesTablePop" >` +
`<t-rect id="t-rect-2e88.9a8a1ed2b" class="threeInquirySuesTablePop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-table id="t-table-9237.04d2d0d11" class="threeInquirySuesTablePop-t-table-0-1"  :height="tTablex0x1ComputedData.height" :stripe="tTablex0x1ComputedData.stripe" :border="tTablex0x1ComputedData.border" :auto-scroll="tTablex0x1ComputedData.autoScroll" :speed="tTablex0x1ComputedData.speed" :columns="tTablex0x1ComputedData.columns" :data="replaceCssVariables(filterData(state.tableList, componentPropBindingMap?.['t-table-9237.04d2d0d11']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x1ComputedData.defaultSort" :c-style="tTablex0x1ComputedData.cStyle" :highlight-current-row="tTablex0x1ComputedData.highlightCurrentRow" @cell-click="oncellClick1768894087571">` +
`</t-table>` +
`<t-rect id="t-rect-9ee1.ec8130f44" class="threeInquirySuesTablePop-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-select id="t-select-b1e1.fd27a03b4" class="threeInquirySuesTablePop-t-select-0-3"  :active-value="replaceCssVariables(filterData(state.selectProgress, componentPropBindingMap?.['t-select-b1e1.fd27a03b4']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x3ComputedData.options" :alias="tSelectx0x3ComputedData.alias" :multiple="tSelectx0x3ComputedData.multiple" :placeholder="tSelectx0x3ComputedData.placeholder" :clearable="tSelectx0x3ComputedData.clearable" :disabled="tSelectx0x3ComputedData.disabled" :name="tSelectx0x3ComputedData.name" :autocomplete="tSelectx0x3ComputedData.autocomplete" :filterable="tSelectx0x3ComputedData.filterable" :no-match-text="tSelectx0x3ComputedData.no-match-text" :no-data-text="tSelectx0x3ComputedData.no-data-text" :c-style="tSelectx0x3ComputedData.cStyle" @change="onchange1763689398877_0_0">` +
`</t-select>` +
`<t-text id="t-text-03db.65ad46ad" class="threeInquirySuesTablePop-t-text-0-4"  :label="replaceCssVariables(filterData(state.dialogTitle, componentPropBindingMap?.['t-text-03db.65ad46ad']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-component id="t-component-a5a9.5d2a80317" class="threeInquirySuesTablePop-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :loading="tComponentx0x5ComputedData.loading" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName" :page-id="tComponentx0x5ComputedData.pageId" :page-code="tComponentx0x5ComputedData.pageCode">` +
`</t-component>` +
`<t-text-common id="t-text-common-c20c.e8465135c" class="threeInquirySuesTablePop-t-text-common-0-6"  :label="replaceCssVariables(filterData(state.tableTitle, componentPropBindingMap?.['t-text-common-c20c.e8465135c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x6ComputedData.editable" :c-style="tTextCommonx0x6ComputedData.cStyle">` +
`</t-text-common>` +
`<t-rect id="t-rect-22b3.c624df95a" class="threeInquirySuesTablePop-t-rect-0-7"  :tip="tRectx0x7ComputedData.tip" :label="tRectx0x7ComputedData.label" :active="tRectx0x7ComputedData.active" :c-style="tRectx0x7ComputedData.cStyle" @click="onclick1768960311105">` +
`</t-rect>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-2e88.9a8a1ed2b":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-table-9237.04d2d0d11":{"attributeName":"tTablex0x1","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]},"highlightCurrentRow":{"filters":[]}},"t-rect-9ee1.ec8130f44":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-select-b1e1.fd27a03b4":{"attributeName":"tSelectx0x3","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-text-03db.65ad46ad":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-a5a9.5d2a80317":{"attributeName":"tComponentx0x5","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-c20c.e8465135c":{"attributeName":"tTextCommonx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-22b3.c624df95a":{"attributeName":"tRectx0x7","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   COMPANY: "",
   RESPONSIBLE_UNIT: "",
   tableTitle: "第三轮中央生态环境保护督察信访件进展",
   dialogTitle: "第三轮中央生态环境保护督察信访件进展",
   selectProgress: "",
   selectYear: "",
   tableList: [],
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
            default: {"width":"100%","height":"760px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"0px","top":"0px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"760px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"0px","top":"0px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset"}}}, 
 },
},
tTablex0x1: {
defaultStyle: {
            default: {"width":"100%","height":"600px","backgroundColor":"","position":"unset","left":"-1px","top":"158px","animationName":""},
            
            },
 default: { 
 
height:"735px",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"序号","key":"sort_num","align":"center","operationList":[],"stateList":[],"style":{"fontStyle":{"color":"rgba(255, 255, 255, 1)"},"imageStyle":{"backgroundImage":""}},"width":"50px","minWidth":"50PX"},{"label":"整改责任单位","key":"zg_company","align":"center","operationList":[],"stateList":[],"style":{"fontStyle":{"display":"block","color":"rgba(255, 255, 255, 1)","fontSize":"14PX","padding":"0 0 0 16px","paddingLeft":"0px","paddingTop":"","paddingRight":"","paddingBottom":""}},"width":"200px","minWidth":"100PX","headerAlign":"center","showOverflowTooltip":true},{"label":"举报内容","key":"problem_content","align":"center","operationList":[],"stateList":[],"width":"auto","minWidth":"400px","style":{"fontStyle":{"display":"block","color":"rgba(255, 255, 255, 1)"}},"showOverflowTooltip":true},{"label":"进度评价","key":"finish_status_name","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"16PX","fontWeight":"400","color":"rgba(255, 255, 255, 1)"}},"width":"160px","minWidth":"70PX","showOverflowTooltip":false},{"label":"操作","key":"action","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"16PX","fontWeight":"400","color":"rgb(0, 157, 255)"},"cellStyle":{"cursor":"pointer"}},"width":"120px","minWidth":"70PX","showOverflowTooltip":true}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"600px","backgroundColor":"","position":"unset","left":"-1px","top":"158px","animationName":""}},"headerCell":{"default":{"borderBottom":"0px none rgba(20,112,204,0.3)","borderLeft":"0px none rgba(20,112,204,0.3)","borderRight":"0px none rgba(20,112,204,0.3)","borderTop":"0px none rgba(20,112,204,0.3)","color":"var(--business-theme-light)","backgroundColor":"rgba(20, 112, 204, 0.3)","fontSize":"14px","lineHeight":"38px","height":"38px","marginTop":"0px","paddingBottom":"0px","paddingTop":"0px","marginBottom":"0px","paddingLeft":"0px"}},"bodyCell":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.1)","borderBottom":"0px none rgba(24,37,64,1)","borderLeft":"0px none rgba(24,37,64,1)","borderRight":"0px none rgba(24,37,64,1)","borderTop":"0px none rgba(24,37,64,1)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingBottom":"20px","paddingTop":"5px","lineHeight":"40px","fontSize":"14px","fontFamily":"微软雅黑","paddingLeft":"10px","paddingRight":"10px"},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(0, 59, 132, 0.3)"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)"}},"rowWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}},"emptyText":{"default":{"fontSize":"14px","color":"#fff"}}},
highlightCurrentRow:false, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"46px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"0px","top":"1px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"46px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"0px","top":"1px","animationName":""}}}, 
 },
},
tSelectx0x3: {
defaultStyle: {
            default: {"width":"240px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":"","left":"22px","top":"110px","position":"unset"},
            
            },
 default: { 
 
activeValue:"",
options:[{"value":" ","label":"全部","disabled":false},{"value":"1","label":"已验收销号","disabled":false},{"value":"2","label":"已办结验收中","disabled":false},{"value":"3","label":"阶段性办结","disabled":false}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"240px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":"","left":"22px","top":"110px","position":"unset"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","box-shadow":"var(--business-select-shadow) 0px 0px 0px 2px "}},"placeholder":{"default":{"color":"var(--t-text)"}},"arrow":{"default":{"color":"var(--t-text)","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px","right":"0","position":"relative","left":"7px"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","width":"182px","paddingLeft":"6px","paddingRight":"6px"}},"dropdownItem":{"default":{"fontSize":"14px","color":"var(--t-text)","height":"28px","lineHeight":"28px","width":"168px","marginBottom":"4px","paddingLeft":"8px","paddingRight":"8px"},"hover":{"color":"var(--t-text)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"disabledWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"589px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"20px","fontFamily":"方正综艺","top":"13px","left":"31px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"第三轮中央生态环境保护督察信访件进展",
editable:false,
cStyle:{"wrapper":{"default":{"width":"589px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"20px","fontFamily":"方正综艺","top":"13px","left":"31px","position":"unset","animationName":""}}}, 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"100%","height":"32px","margin":"0 auto","position":"unset","left":"2px","top":"61px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","margin":"0 auto","position":"unset","left":"2px","top":"61px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/dialogTitle",
componentName:"dialogTitleComponent",
pageId:"051aca1b22bc4dbeb1baf06b72818d98",
pageCode:"dialogTitle", 
 },
},
tTextCommonx0x6: {
defaultStyle: {
            default: {"width":"364px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"57px","top":"68px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"第三轮中央生态环境保护督察信访件进展",
editable:false,
cStyle:{"wrapper":{"default":{"width":"364px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"57px","top":"68px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tRectx0x7: {
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
});
const initData = () => {
state.selectProgress = global.supervisorPopParams?.selectProgress || " ";
state.COMPANY = global.supervisorPopParams?.COMPANY || " ";
console.log(global.supervisorPopParams?.selectProgress || " ", '9999');
apiRegistry.getCockpitDialogContentList.request();

};
const clickTable = (row,col) => {
console.log(row, col)
if (col.label === '操作') {
  global.supervisorPopParams = {
    pkid: row.pkid,
    selectProgress: state.selectProgress || " ",
    COMPANY: state.COMPANY || " ",
  };
  global.supervisorPopName = 'letterDetailsComponent';
}
};
const oncellClick1768894087571 = (row,column,cell,event) => {
// 执行自定义方法
clickTable(row,column);
};
const onchange1763689398877_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.selectProgress = value;
// 事件交互-请求调用接口
apiRegistry.getCockpitDialogContentList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onclick1768960311105 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'supervisorPopName',
                    value:'threeInquirySuesPopComponent',
                    data: {
                      supervisorPopName: 'threeInquirySuesPopComponent'
                    },
                  });
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"COMPANY":"state.COMPANY","FINISH_STATUS":"state.selectProgress","ROUND":"3","SOURCE":"1","TYPE":"1","REGION_PATH":"global.REGION_CODE","interfaceId":"fbb8261794dfaea02ff6c119ea5f1b9a"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"COMPANY":state.COMPANY,"FINISH_STATUS":state.selectProgress,"ROUND":"3","SOURCE":"1","TYPE":"1","REGION_PATH":global.REGION_CODE,"interfaceId":"fbb8261794dfaea02ff6c119ea5f1b9a"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"COMPANY":state.COMPANY,"FINISH_STATUS":state.selectProgress,"ROUND":"3","SOURCE":"1","TYPE":"1","REGION_PATH":global.REGION_CODE,"interfaceId":"fbb8261794dfaea02ff6c119ea5f1b9a"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCockpitDialogContentList'] = res.data;
                
     state.tableList = [];
if (res.data.head.statusCode === '200' && res.data?.data?.length) {

  // 处理数据，添加映射字段
  state.tableList = res.data.data.map((item, index) => {
    return {
      ...item,
      sort_num: index + 1,
      zg_company: item.zg_company || '-',
      problem_content: item.problem_content || '-',
      finish_status_name: item.finish_status_name || '-',
      action: '详情'
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
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCockpitDialogContentList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-threeInquirySuesTablePop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-threeInquirySuesTablePop', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTablex0x1ComputedData = computed(() => _.merge({}, componentState.tTablex0x1.default, componentState.tTablex0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tSelectx0x3ComputedData = computed(() => _.merge({}, componentState.tSelectx0x3.default, componentState.tSelectx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tTextCommonx0x6ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x6.default, componentState.tTextCommonx0x6?.[state.screenSize]));

 const tRectx0x7ComputedData = computed(() => _.merge({}, componentState.tRectx0x7.default, componentState.tRectx0x7?.[state.screenSize]));

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
tTablex0x1ComputedData,
tRectx0x2ComputedData,
tSelectx0x3ComputedData,
tTextx0x4ComputedData,
tComponentx0x5ComputedData,
tTextCommonx0x6ComputedData,
tRectx0x7ComputedData,
oncellClick1768894087571,
onchange1763689398877_0_0,
onclick1768960311105,
};
},
};