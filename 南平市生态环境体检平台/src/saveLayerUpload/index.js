window.saveLayerUploadComponent = {
template: 
`<div id="t-l-c-saveLayerUpload" class="t-l-c-saveLayerUpload" >` +
`<t-rect id="t-rect-ca0c.fbaed2ca6" class="saveLayerUpload-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-41cf.039182dfb" class="saveLayerUpload-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-fe6d.e4eb5cb24" class="saveLayerUpload-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-image-base id="t-image-base-44d1.17f6e75ec" class="saveLayerUpload-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle">` +
`</t-image-base>` +
`<t-rect id="t-rect-9401.6e5d7b801" class="saveLayerUpload-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1738982388664">` +
`</t-rect>` +
`<t-text id="t-text-a26d.eae57bf6" class="saveLayerUpload-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-17ec.f04300dfc" class="saveLayerUpload-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-9738.124572a44" class="saveLayerUpload-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle">` +
`</t-text>` +
`<t-cascader id="t-cascader-cc57.780ee400e" class="saveLayerUpload-t-cascader-0-8"  :active-value="state.selectedMetaData" :data="state.metaDataOptions" :alias="tCascaderx0x8ComputedData.alias" :placeholder="tCascaderx0x8ComputedData.placeholder" :clearable="tCascaderx0x8ComputedData.clearable" :disabled="tCascaderx0x8ComputedData.disabled" :no-match-text="tCascaderx0x8ComputedData.noMatchText" :no-data-text="tCascaderx0x8ComputedData.noDataText" :c-style="tCascaderx0x8ComputedData.cStyle" :show-all-levels="tCascaderx0x8ComputedData.showAllLevels" :check-strictly="tCascaderx0x8ComputedData.checkStrictly" @change="onchange1739006256380">` +
`</t-cascader>` +
`<t-button v-if="state.selectedMetaData !== ''" id="t-button-2c50.15783455b" class="saveLayerUpload-t-button-0-9"  :label="tButtonx0x9ComputedData.label" :round="tButtonx0x9ComputedData.round" :plain="tButtonx0x9ComputedData.plain" :disabled="tButtonx0x9ComputedData.disabled" :type="tButtonx0x9ComputedData.type" :size="tButtonx0x9ComputedData.size" :native-type="tButtonx0x9ComputedData.native-type" :c-style="tButtonx0x9ComputedData.cStyle" @click="onclick1739005313081">` +
`</t-button>` +
`<t-button id="t-button-9687.2aed006f2" class="saveLayerUpload-t-button-0-10"  :label="tButtonx0x10ComputedData.label" :round="tButtonx0x10ComputedData.round" :plain="tButtonx0x10ComputedData.plain" :disabled="tButtonx0x10ComputedData.disabled" :type="tButtonx0x10ComputedData.type" :size="tButtonx0x10ComputedData.size" :native-type="tButtonx0x10ComputedData.native-type" :c-style="tButtonx0x10ComputedData.cStyle" @click="onclick1739244985093">` +
`</t-button>` +
`<t-button v-if="state.selectedMetaData === ''" id="t-button-b807.6c05a01db" class="saveLayerUpload-t-button-0-11"  :label="tButtonx0x11ComputedData.label" :round="tButtonx0x11ComputedData.round" :plain="tButtonx0x11ComputedData.plain" :disabled="tButtonx0x11ComputedData.disabled" :type="tButtonx0x11ComputedData.type" :size="tButtonx0x11ComputedData.size" :native-type="tButtonx0x11ComputedData.native-type" :c-style="tButtonx0x11ComputedData.cStyle">` +
`</t-button>` +
`<t-iframe id="t-iframe-768f.9246fdd33" class="saveLayerUpload-t-iframe-0-12"  :src="tIframex0x12ComputedData.src" :srcdoc="tIframex0x12ComputedData.srcdoc" :scrolling="tIframex0x12ComputedData.scrolling" :c-style="tIframex0x12ComputedData.cStyle" :socket-url="global.socketIp" :room-id="global.socketRoom">` +
`</t-iframe>` +
`<t-text id="t-text-8238.56943ba63" class="saveLayerUpload-t-text-0-13"  :label="state.uploadMessage" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle">` +
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
   uploadMessage: "",
   file: {},
   deleteDrawLayerFileBaseServicePath: "/lxt-zhcx-pro/shp/upload/deleteDrawLayerFile/",
   deleteDrawLayerFileServicePath: "",
   metaDataOptions: [],
   selectedMetaData: "",
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
            default: {"width":"417px","height":"232px","left":"762px","top":"434px","border-radius":"16px","background":"var(--intergrated-query-dialog-bg)","box-shadow":"0px 4px 25px 0px var(--intergrated-query-dialog-box-shadow-color)","border-width":0,"borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--intergrated-query-dialog-border-image)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"417px","height":"232px","left":"762px","top":"434px","border-radius":"16px","background":"var(--intergrated-query-dialog-bg)","box-shadow":"0px 4px 25px 0px var(--intergrated-query-dialog-box-shadow-color)","border-width":0,"borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--intergrated-query-dialog-border-image)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"415px","height":"230px","position":"unset","left":"763px","top":"435px","border-radius":"16px","background":"rgba(7, 29, 11, 0.95)","border-width":0,"color":"var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundColor":"var(--intergrated-query-dialog-background-color)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"415px","height":"230px","position":"unset","left":"763px","top":"435px","border-radius":"16px","background":"rgba(7, 29, 11, 0.95)","border-width":0,"color":"var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundColor":"var(--intergrated-query-dialog-background-color)","animationName":""}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"415px","height":"46px","position":"unset","left":"763px","top":"436px","border-radius":"16px 16px 0px 0px","border-width":0,"background":"var(--intergrated-query-dialog-title-bg)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"415px","height":"46px","position":"unset","left":"763px","top":"436px","border-radius":"16px 16px 0px 0px","border-width":0,"background":"var(--intergrated-query-dialog-title-bg)","animationName":""}}}, 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","position":"unset","left":"777px","top":"447px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/aa0899554a6c437db802092b14b0a80b.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","position":"unset","left":"777px","top":"447px","animationName":""}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"24px","height":"24px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"10px 10px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"1133.5px","top":"446px","border-radius":"2px","border":"1px solid rgba(121, 255, 175, 0.6)","cursor":"pointer","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"10px 10px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"1133.5px","top":"446px","border-radius":"2px","border":"1px solid rgba(121, 255, 175, 0.6)","cursor":"pointer","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)","animationName":""},"hover":{"opacity":"80% !important"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"809px","top":"448px","font-size":"18px","text-shadow":"0px 0px 6px rgba(17, 214, 104, 0.62)","font-weight":"bold","animationName":""},
            
            },
 default: { 
 
label:"上传图层",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"809px","top":"448px","font-size":"18px","text-shadow":"0px 0px 6px rgba(17, 214, 104, 0.62)","font-weight":"bold","animationName":""}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"64px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"783px","top":"518px","font-size":"14px","font-weight":290,"animationName":""},
            
            },
 default: { 
 
label:"上传图层",
editable:false,
cStyle:{"wrapper":{"default":{"width":"64px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"783px","top":"518px","font-size":"14px","font-weight":290,"animationName":""}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"64px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"783px","top":"556px","font-size":"14px","font-weight":290,"animationName":""},
            
            },
 default: { 
 
label:"图层元数据名称",
editable:false,
cStyle:{"wrapper":{"default":{"width":"64px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"783px","top":"556px","font-size":"14px","font-weight":290,"animationName":""}}}, 
 },
},
tCascaderx0x8: {
defaultStyle: {
            default: {"width":"306px","height":"33px","position":"unset","left":"852px","top":"558px","borderLeft":"1px solid var(--intergrated-query-selector-border-color)","borderTop":"1px solid var(--intergrated-query-selector-border-color)","borderRight":"1px solid var(--intergrated-query-selector-border-color)","borderBottom":"1px solid var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--intergrated-query-selector-background-color)","color":"var(--intergrated-query-font-color)","animationName":""},
            
            },
 default: { 
 
activeValue:"",
data:[],
alias:{"label":"name","value":"id","disabled":"disabled"},
placeholder:"请选择",
clearable:false,
disabled:false,
noMatchText:"无匹配数据",
noDataText:"无数据",
cStyle:{"wrapper":{"default":{"width":"306px","height":"33px","position":"unset","left":"852px","top":"558px","borderLeft":"1px solid var(--intergrated-query-selector-border-color)","borderTop":"1px solid var(--intergrated-query-selector-border-color)","borderRight":"1px solid var(--intergrated-query-selector-border-color)","borderBottom":"1px solid var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--intergrated-query-selector-background-color)","color":"var(--intergrated-query-font-color)","animationName":""}},"dropdownWrapper":{"default":{"backgroundColor":"var(--intergrated-query-selector-background-color)","borderTopLeftRadius":"5px","borderTopRightRadius":"5px","borderBottomLeftRadius":"5px","borderBottomRightRadius":"5px","borderLeft":"1px none var(--intergrated-query-selector-border-color)","borderTop":"1px none var(--intergrated-query-selector-border-color)","borderRight":"1px none var(--intergrated-query-selector-border-color)","borderBottom":"1px none var(--intergrated-query-selector-border-color)"}},"placeholder":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 1)"}},"dropdownArrow":{"default":{"color":"","backgroundColor":"var(--intergrated-query-selector-background-color)","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--selector-border-color)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","z-index":"4"}},"arrow":{"default":{"color":"var(--intergrated-query-font-color)"}},"dropdownMenu":{"default":{"borderTopLeftRadius":"5px","borderTopRightRadius":"5px","borderBottomLeftRadius":"5px","borderBottomRightRadius":"5px","borderLeft":"1px solid var(--intergrated-query-selector-border-color)","borderTop":"1px solid var(--intergrated-query-selector-border-color)","borderRight":"1px solid var(--intergrated-query-selector-border-color)","borderBottom":"1px solid var(--intergrated-query-selector-border-color)"}},"dropdownItem":{"default":{"color":"var(--intergrated-query-font-color)"},"active":{"backgroundColor":"var(--intergrated-query-sub-button-background-color)","color":"var(--intergrated-query-font-color)"},"hover":{"backgroundColor":"var(--intergrated-query-sub-button-background-color)","color":"var(--intergrated-query-font-color)"}},"dropdownRadio":{"active":{"borderLeft":"1px solid #FFF198","borderTop":"1px solid #FFF198","borderRight":"1px solid #FFF198","borderBottom":"1px solid #FFF198","backgroundColor":"#3B382A"},"hover":{"borderLeft":"1px solid #FFF198","borderTop":"1px solid #FFF198","borderRight":"1px solid #FFF198","borderBottom":"1px solid #FFF198","backgroundColor":"var(--left-menu-checkbox-bg)"},"default":{"backgroundColor":"var(--left-menu-checkbox-bg)","borderLeft":"1px solid var(--left-menu-checkbox-border)","borderTop":"1px solid var(--left-menu-checkbox-border)","borderRight":"1px solid var(--left-menu-checkbox-border)","borderBottom":"1px solid var(--left-menu-checkbox-border)"}}},
showAllLevels:false,
checkStrictly:true, 
 },
},
tButtonx0x9: {
defaultStyle: {
            default: {"width":"50px","height":"32px","position":"unset","left":"1108px","top":"609px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none #09783A","borderTop":"1px none #09783A","borderRight":"1px none #09783A","borderBottom":"1px none #09783A","backgroundColor":"var(--intergrated-query-button-background-color)","fontSize":"12px","color":"var(--intergrated-query-font-color)","animationName":""},
            
            },
 default: { 
 
label:"保存",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","position":"unset","left":"1108px","top":"609px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none #09783A","borderTop":"1px none #09783A","borderRight":"1px none #09783A","borderBottom":"1px none #09783A","backgroundColor":"var(--intergrated-query-button-background-color)","fontSize":"12px","color":"var(--intergrated-query-font-color)","animationName":""},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","opacity":"80% !important","backgroundColor":"var(--intergrated-query-sub-button-border-color)"},"focus":{"opacity":"80% !important","backgroundColor":"var(--intergrated-query-button-background-color)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"backgroundColor":"var(--intergrated-query-button-background-color)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tButtonx0x10: {
defaultStyle: {
            default: {"width":"50px","height":"32px","position":"unset","left":"1044px","top":"609px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--intergrated-query-button-background-color)","borderTop":"1px solid var(--intergrated-query-button-background-color)","borderRight":"1px solid var(--intergrated-query-button-background-color)","borderBottom":"1px solid var(--intergrated-query-button-background-color)","backgroundColor":"var(--intergrated-query-sub-button-background-color)","fontSize":"12px","animationName":"","color":"var(--intergrated-query-font-color)","marginLeft":"0px"},
            
            },
 default: { 
 
label:"取消",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","position":"unset","left":"1044px","top":"609px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--intergrated-query-button-background-color)","borderTop":"1px solid var(--intergrated-query-button-background-color)","borderRight":"1px solid var(--intergrated-query-button-background-color)","borderBottom":"1px solid var(--intergrated-query-button-background-color)","backgroundColor":"var(--intergrated-query-sub-button-background-color)","fontSize":"12px","animationName":"","color":"var(--intergrated-query-font-color)","marginLeft":"0px"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","opacity":"80% !important","backgroundColor":"var(--intergrated-query-sub-button-background-color)","borderLeft":"1px solid var(--intergrated-query-button-background-color)","borderTop":"1px solid var(--intergrated-query-button-background-color)","borderRight":"1px solid var(--intergrated-query-button-background-color)","borderBottom":"1px solid var(--intergrated-query-button-background-color)"},"focus":{"opacity":"80% !important","backgroundColor":"var(--intergrated-query-sub-button-background-color)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"backgroundColor":"var(--intergrated-query-sub-button-background-color)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"disabled":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tButtonx0x11: {
defaultStyle: {
            default: {"width":"50px","height":"32px","position":"unset","left":"1108px","top":"609px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none #09783A","borderTop":"1px none #09783A","borderRight":"1px none #09783A","borderBottom":"1px none #09783A","backgroundColor":"var(--intergrated-query-button-background-color)","fontSize":"12px","color":"var(--intergrated-query-font-color)","animationName":"","cursor":"not-allowed","opacity":"80% !important","marginLeft":"0px"},
            
            },
 default: { 
 
label:"保存",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","position":"unset","left":"1108px","top":"609px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none #09783A","borderTop":"1px none #09783A","borderRight":"1px none #09783A","borderBottom":"1px none #09783A","backgroundColor":"var(--intergrated-query-button-background-color)","fontSize":"12px","color":"var(--intergrated-query-font-color)","animationName":"","cursor":"not-allowed","opacity":"80% !important","marginLeft":"0px"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","opacity":"100% !important","backgroundColor":"var(--intergrated-query-sub-button-border-color)"},"focus":{"opacity":"100% !important","backgroundColor":"#09783A","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"backgroundColor":"#09783A","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tIframex0x12: {
defaultStyle: {
            default: {"width":"306px","height":"29px","position":"unset","left":"853px","top":"513px","backgroundColor":"rgba(23, 62, 228, 0)"},
            
            },
 default: { 
 
src:"",
srcdoc:"<!--\n * @Author: lvzhixin\n * @Date: 2024-05-30 13:33:18\n * @LastEditTime: 2025-01-15 17:05:11\n * @LastEditors: lichun\n * @Description: File Info\n-->\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\" />\n  <title>上传图层文件的按钮</title>\n  <link rel=\"shortcut icon\" href=\"assets/images/favicon.ico\" />\n  <!-- vue 这里最终应该下载一个稳定版本 -->\n  <script\n    src=\"./resources/vue.min.js\"></script>\n\n  <!-- socket插件 -->\n  <script\n    src=\"./resources/socket.io.js\"></script>\n\n  <!-- 通信插件mitt https://www.npmjs.com/package/mitt -->\n  <script\n    src=\"./resources/mitt.min.js\"></script>\n\n  <!-- lodash插件 -->\n  <script\n    src=\"./resources/lodash.min.js\"></script>\n\n  <!-- 引入样式 -->\n  <link rel=\"stylesheet\"\n        href=\"./resources/element-plus/element-plus.min.css\" />\n  <!-- 引入组件库 -->\n  <script\n    src=\"./resources/element-plus/element-plus.min.js\"></script>\n  <script\n    src=\"./resources/element-plus/zhCn.js\"></script>\n\n  <!-- HTTP库 -->\n  <script\n    src=\"./resources/axios.min.js\"></script>\n\n  <!-- 主题样式 -->\n  <link rel=\"stylesheet\"\n        href=\"./assets/style/themes.css\" />\n\n  <style>\n    body {\n      margin: 0;\n    }\n\n    body,\n    html,\n    #app {\n      height: 100%;\n    }\n\n    /* 上传图层按钮样式 */\n    .upload-layer-button {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 4px;\n      box-sizing: border-box;\n      width: fit-content;\n      height: 24px;\n      border-radius: 4px;\n      padding: 0 12px;\n      background: var(--intergrated-query-button-background-color);\n      font-size: 12px;\n      text-align: center;\n      line-height: 24px;\n      color: var(--intergrated-query-font-color);\n      cursor: pointer;\n    }\n\n    /* 上传图层按钮样式-hover */\n    .upload-layer-button:hover {\n      opacity: 0.8;\n    }\n\n  </style>\n</head>\n\n<body>\n<div id=\"app\"></div>\n\n<script>\n  /**\n   * 这里定义全局使用的变量、方法\n   */\n  const {\n    createApp,\n    computed,\n    ref,\n    reactive,\n    toRefs,\n    onBeforeMount,\n    onMounted,\n    onBeforeUpdate,\n    onUpdated,\n    onBeforeUnmount,\n    onUnmounted,\n    onErrorCaptured,\n    onRenderTracked,\n    onRenderTriggered,\n    watch,\n    provide,\n    inject,\n    nextTick\n  } = Vue;\n\n  // 房间号\n  const roomId = localStorage.getItem('lxtSocketRoom');\n  // 主题\n  const themeName = localStorage.getItem('lxtTheme');\n\n  const bodyDom = document.querySelector('body');\n  if (bodyDom && themeName) {\n    bodyDom.classList.add(themeName);\n  }\n\n  /**\n   * 这里定义图层组件内容\n   */\n  const uploadButtonComponent = {\n    template: `\n      <div class=\"upload-button\">\n        <el-upload\n          action=\"http://192.168.0.202:7777/lxt-zhcx-pro/layer/upload/meta/list\"\n          :before-upload=\"handleBefore\"\n          :multiple=\"false\"\n          :on-error=\"handleError\"\n          :on-success=\"handleSuccess\"\n          :show-file-list=\"false\"\n          accept=\".zip\"\n        >\n          <div #trigger>\n            <div class=\"upload-layer-button\">上传</div>\n          </div>\n        </el-upload>\n      </div>\n    `,\n    setup(props, { emit }) {\n      // 页面内注入全局变量和事件\n      const rootData = inject(\"root\");\n\n      const global = reactive({\n        ...toRefs(rootData),\n      });\n\n      const state = reactive({\n        // 图层文件\n        file: null,\n      });\n\n      /**\n       * 处理图层文件上传失败\n       * @param {string} msg - 展示的图层失败信息\n       */\n      function handleUploadFailed(msg = '图层文件上传失败') {\n        // 给综合查询发送socket消息，提示删除失败\n        rootData.rootSocket.emit(\"message\", {\n          room: global.socketRoom, // 房间号\n          type: \"subjectLayerUploadFailed\", // 消息名称\n          data: {\n            msg: msg,\n          },\n        });\n      }\n\n      /**\n       * 图层上传前\n       * @param {object} file - 文件数据\n       */\n      function handleBefore(file) {\n        // this.loading = true;\n        // 检验文件类型\n        const fileType = file.name.substring(file.name.lastIndexOf('.') + 1);\n        if (fileType !== 'zip') {\n          // this.$message({\n          //   message: '只允许上传.zip类型文件',\n          //   type: 'warning'\n          // });\n          // this.$emit('update-loading-status', false);\n          handleUploadFailed('请上传shp文件的压缩包(*.zip)');\n\n          return false;\n        }\n        // 检验文件大小\n        const isLt = file.size / 1024 / 1024 < 10;\n        if (!isLt) {\n          handleUploadFailed('单个文件大小不能超过10MB');\n          return false;\n        }\n        state.file = file;\n        return true;\n      }\n\n      /**\n       * 上传图层\n       * @param metaField - 元数据键名\n       */\n      function uploadLayer(metaField) {\n        const formData = new FormData();\n        formData.append('metaField', metaField);\n        formData.append('file', state.file);\n        axios.post('http://192.168.0.202:7777/lxt-zhcx-pro/layer/upload/submit', formData, {\n          headers: {\n            'Content-Type': 'multipart/form-data'\n          }\n        }).then(response => {\n          if (response.data.code === 200) {\n            // 给综合查询发送socket消息，更新图层树\n            rootData.rootSocket.emit(\"message\", {\n              room: global.socketRoom, // 房间号\n              type: 'subjectLayerUpload', // 消息名称\n              data: {},\n            });\n          } else {\n            handleUploadFailed(response.data.message);\n          }\n        }).catch(error => {\n          console.error('文件上传失败:', error);\n          handleUploadFailed();\n        });\n      }\n\n      /**\n       * 图层上传成功\n       * @param {object} response - 上传结果\n       * @param {object} file - 文件数据\n       * @param {object} fileList - 文件列表\n       */\n      function handleSuccess(response, file, fileList) {\n        if (response.code === 200 && Array.isArray(response.data)) {\n          rootData.rootSocket.emit(\"message\", {\n            room: global.socketRoom, // 房间号\n            type: \"uploadLayerShpFileSuccess\", // 消息名称\n            data: {\n              metaData: response.data.map((val) => ({\n                name: val,\n                id: val,\n              })),\n            },\n          });\n        } else {\n          handleUploadFailed(response.message);\n        }\n      }\n\n      /**\n       * 图层上传失败\n       * @param {object} response - 上传结果\n       * @param {object} file - 文件数据\n       * @param {object} fileList - 文件列表\n       */\n      function handleError(response, file, fileList) {\n        handleUploadFailed(response.message);\n      }\n\n      onMounted(() => {\n        // 接收socket消息\n        rootData.rootOn('rootSocket:change', (data) => {\n          console.log(data, '上传组件收到消息---');\n\n          /* 监听图层状态改变 当地图有图层加载、销毁、图层可见性改变时会发送此消息 */\n          if (data.type === 'uploadLayer' && data.data.metaData?.[0]) {\n            uploadLayer(data.data.metaData[0])\n          }\n        });\n      });\n\n      onUnmounted(() => {\n        rootData.rootOff('rootSocket:change');\n      });\n\n      return {\n        ...toRefs(state),\n        handleBefore,\n        handleError,\n        handleSuccess,\n      };\n    },\n  };\n\n  /**\n   * 这里入口组件内容\n   */\n  const MainComponent = {\n    template:\n    // 默认页面 ———— 一直显示 页面中的组件根据显示条件显示\n      '<upload-button-component></upload-button-component>',\n    components: {\n      uploadButtonComponent,\n    },\n    setup() {\n      // 获取缓存里的鹿小图全局变量数据\n      const lxtGlobal = localStorage.getItem('lxtGlobal') ? JSON.parse(localStorage.getItem('lxtGlobal')) : {};\n\n      const rootEmitter = mitt();\n\n      let global = reactive(\n        /* 插入应用级别的全局变量 相当于store中的rootData */\n        /* globalVariableStart */\n        {\n          socketIp: lxtGlobal.socketIp || 'http://192.168.0.202:7777/socketPath',\n          socketPath: lxtGlobal.socketPath || '/socketPath',\n          socketRoom: lxtGlobal.socketRoom || roomId || 'admin',\n        }\n        /* globalVariableEnd */\n      );\n\n      // 创建 socket 连接\n      let socket = null;\n      if (global.socketIp) {\n        const options = {};\n        if (global?.socketPath) {\n          options.path = global.socketPath;\n        }\n        socket = io(global.socketIp, options);\n      }\n\n      provide('root', {\n        ...toRefs(global),\n        rootEmit: rootEmitter.emit, // mitt 发送\n        rootOn: rootEmitter.on, // mitt 接收\n        rootOff: rootEmitter.off, // mitt 移除\n        rootSocket: socket, // socket 实例\n      });\n      /**\n       * 监听修改全局变量事件\n       * @param obj 修改后的变量\n       */\n      rootEmitter.on('rootData:change', (obj) => {\n        global = _.set(global, obj.key, obj.value);\n\n        if (global.socketIp && global.socketRoom) {\n          // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息\n          socket.emit('message', {\n            room: global.socketRoom, // 房间号\n            type: 'internalType:ChangeGlobalValue', // 需要保证此类型唯一性\n            data: obj,\n          });\n        }\n      });\n\n      /**\n       * 连接成功时进入对应的房间\n       */\n      if (socket) {\n        socket.on('connect', function () {\n          if (global.socketIp && global.socketRoom) {\n            // 进入房间\n            socket.emit('join-room', global.socketRoom);\n          }\n        });\n      }\n\n      /**\n       * 接收到 socket 消息时触发\n       * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}\n       */\n      if (socket) {\n        socket.on('message', function (data) {\n          // socket 监听全局变量的变化，然后合并值\n          if (data.type === 'internalType:ChangeGlobalValue') {\n            // 合并 globa 的值\n            global = _.set(global, data.data.key, data.data.value);\n          } else {\n            // 发送消息，通知其他页面\n            rootEmitter.emit('rootSocket:change', data);\n          }\n        });\n      }\n\n      // 监听 socket 房间的变化\n      watch(() => global.socketRoom, (val, oldVal) => {\n        if (socket) {\n          // 离开房间\n          socket.emit('leave-room', oldVal);\n          // 进入房间\n          socket.emit('join-room', val);\n        }\n      });\n\n      onBeforeUnmount(() => {\n        // 离开房间\n        socket.emit('leave-room', global.socketRoom);\n        // 断开连接\n        socket.disconnect();\n      });\n\n      return {};\n    },\n  };\n\n  const app = createApp(MainComponent);\n  /* 下面的操作是去掉控制台Vue输出的警告信息  如果想开启警告信息可以把这个空函数注释掉 */\n  app.config.warnHandler = function (msg, vm, trace) {\n    // 空函数，不做任何处理\n  };\n  app.use(ElementPlus, {\n    size: 'small',\n  })\n    // .use(router)\n    .mount(\"#app\");\n</script>\n</body>\n\n</html>\n",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"306px","height":"29px","position":"unset","left":"853px","top":"513px","backgroundColor":"rgba(23, 62, 228, 0)"}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"303px","height":"19px","color":"var(--business-warn)","position":"unset","left":"853px","top":"536px","font-size":"14px","font-weight":290,"animationName":"","fontSize":"12px","fontWeight":"500","lineHeight":"26px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"303px","height":"19px","color":"var(--business-warn)","position":"unset","left":"853px","top":"536px","font-size":"14px","font-weight":290,"animationName":"","fontSize":"12px","fontWeight":"500","lineHeight":"26px"}}}, 
 },
},
});
const onclick1738982388664 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'integratedQuery.dialogName',
                    value:'',
                    data: {
                      integratedQuery:{dialogName: ''}
                    },
                  });
};
const onclick1739005313081 = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "uploadLayer", // 消息名称
data: {"metaData":state.selectedMetaData}, // 发送的数据
});
};
const onchange1739006256380 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.selectedMetaData = value;
// 执行自定义方法
aaa(value);
};
const onclick1739244985093 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'integratedQuery.dialogName',
                    value:'',
                    data: {
                      integratedQuery:{dialogName: ''}
                    },
                  });
};
// 接口函数
const deleteDrawLayerFile = () => {
return new Promise((resolve, reject) => {
  http({"url":"/lxt-zhcx-pro/shp/upload/deleteDrawLayerFile/{layerCode}","method":"get","baseURL":global.socketIp,"params":{},}).then((res) => {
     // 成功的操作
     
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-saveLayerUpload', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
rootData.rootOn('rootSocket:change', (data)=>{
if(data.type === "uploadLayerShpFileSuccess"){
try{
// 设置变量值
state.metaDataOptions = data.data.metaData;
// 设置变量值
state.uploadMessage = '';
} catch (error) {
console.error('参数格式错误', error);
};
};
});
/* 接收socket.io消息 */
rootData.rootOn('rootSocket:change', (data)=>{
if(data.type === "subjectLayerUploadFailed"){
try{
// 设置变量值
state.metaDataOptions = '';
// 设置变量值
state.selectedMetaData = '';
// 设置变量值
state.uploadMessage = data.data.msg;
} catch (error) {
console.error('参数格式错误', error);
};
};
});
/* 接收socket.io消息 */
rootData.rootOn('rootSocket:change', (data)=>{
if(data.type === "subjectLayerUpload"){
try{
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'integratedQuery.dialogName',
                    value:'',
                    data: {
                      integratedQuery:{dialogName: ''}
                    },
                  });
} catch (error) {
console.error('参数格式错误', error);
};
};
});
onMounted(() => {
setPageScale('t-l-c-saveLayerUpload', global.appScaleMode, 'normal');
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

 const tImageBasex0x3ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x3.default, componentState.tImageBasex0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tCascaderx0x8ComputedData = computed(() => _.merge({}, componentState.tCascaderx0x8.default, componentState.tCascaderx0x8?.[state.screenSize]));

 const tButtonx0x9ComputedData = computed(() => _.merge({}, componentState.tButtonx0x9.default, componentState.tButtonx0x9?.[state.screenSize]));

 const tButtonx0x10ComputedData = computed(() => _.merge({}, componentState.tButtonx0x10.default, componentState.tButtonx0x10?.[state.screenSize]));

 const tButtonx0x11ComputedData = computed(() => _.merge({}, componentState.tButtonx0x11.default, componentState.tButtonx0x11?.[state.screenSize]));

 const tIframex0x12ComputedData = computed(() => _.merge({}, componentState.tIframex0x12.default, componentState.tIframex0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tImageBasex0x3ComputedData,
tRectx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tCascaderx0x8ComputedData,
tButtonx0x9ComputedData,
tButtonx0x10ComputedData,
tButtonx0x11ComputedData,
tIframex0x12ComputedData,
tTextx0x13ComputedData,
onclick1738982388664,
onchange1739006256380,
onclick1739005313081,
onclick1739244985093,
};
},
};