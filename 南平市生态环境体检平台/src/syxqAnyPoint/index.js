window.syxqAnyPointComponent = {
template: 
`<div id="t-l-c-syxqAnyPoint" class="t-l-c-syxqAnyPoint" >` +
`<t-button id="t-button-8a7a.9a0bb49b5" class="syxqAnyPoint-t-button-0-0"  :label="tButtonx0x0ComputedData.label" :round="tButtonx0x0ComputedData.round" :plain="tButtonx0x0ComputedData.plain" :disabled="tButtonx0x0ComputedData.disabled" :type="tButtonx0x0ComputedData.type" :size="tButtonx0x0ComputedData.size" :native-type="tButtonx0x0ComputedData.native-type" :c-style="tButtonx0x0ComputedData.cStyle" @click="onclick1761117008297">` +
`</t-button>` +
`<t-image-base id="t-image-base-cc01.3413a106e" class="syxqAnyPoint-t-image-base-0-1"  :src="tImageBasex0x1ComputedData.src" :fit="tImageBasex0x1ComputedData.fit" :c-style="tImageBasex0x1ComputedData.cStyle">` +
`</t-image-base>` +
`<t-list-card v-if="state.activeTab.value !== ''" id="t-list-card-2d95.1c787b696" class="syxqAnyPoint-t-list-card-0-2"  :data="replaceCssVariables(state.sceneList, global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x2ComputedData.spacingX" :col="tListCardx0x2ComputedData.col" :direction="tListCardx0x2ComputedData.direction" :exchange-order="tListCardx0x2ComputedData.exchangeOrder" :unit-break="tListCardx0x2ComputedData.unitBreak" :key-field="tListCardx0x2ComputedData.keyField" :active-key-field="tListCardx0x2ComputedData.activeKeyField" :active="replaceCssVariables(state.activeTab.name, global?.theme || global?.activeTheme || '默认主题')" :c-style="tListCardx0x2ComputedData.cStyle" @card-click="oncardClick1735029005919">` +
`</t-list-card>` +
`<t-rect id="t-rect-364c.0469d38c2" class="syxqAnyPoint-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-table v-if="state.isShowOperateColumn === false" id="t-table-dc13.1454a104c" class="syxqAnyPoint-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :columns="tTablex0x4ComputedData.columns" :data="replaceCssVariables(state.enterList, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle" @cell-click="oncellClick1734608241064">` +
`</t-table>` +
`<t-table v-if="state.isShowOperateColumn === true" id="t-table-a0d0.258b53cfd" class="syxqAnyPoint-t-table-0-5"  :height="tTablex0x5ComputedData.height" :stripe="tTablex0x5ComputedData.stripe" :border="tTablex0x5ComputedData.border" :auto-scroll="tTablex0x5ComputedData.autoScroll" :speed="tTablex0x5ComputedData.speed" :columns="tTablex0x5ComputedData.columns" :data="replaceCssVariables(state.enterList, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x5ComputedData.defaultSort" :c-style="tTablex0x5ComputedData.cStyle" @cell-click="oncellClick1735184769666_0_0">` +
`</t-table>` +
`<t-component id="t-component-3c7c.d9e5b9971" class="syxqAnyPoint-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-0645.e3c5af32d" class="syxqAnyPoint-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle">` +
`</t-text>` +
`<t-date-picker id="t-date-picker-cb44.603c1d70f" class="syxqAnyPoint-t-date-picker-0-8"  :placeholder="tDatePickerx0x8ComputedData.placeholder" :start-placeholder="tDatePickerx0x8ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x8ComputedData.endPlaceholder" :type="tDatePickerx0x8ComputedData.type" :clearable="tDatePickerx0x8ComputedData.clearable" :range-separator="tDatePickerx0x8ComputedData.rangeSeparator" :default-date="replaceCssVariables(state.selectedParams.time, global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x8ComputedData.separator" :readonly="tDatePickerx0x8ComputedData.readonly" :editable="tDatePickerx0x8ComputedData.editable" :c-style="tDatePickerx0x8ComputedData.cStyle" @date-change="ondateChange1740967140116">` +
`</t-date-picker>` +
`<t-rect v-if="state.checkedIds !== ''" id="t-rect-f258.31abd13a7" class="syxqAnyPoint-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle" @click="onclick1735205190641">` +
`</t-rect>` +
`<t-rect v-if="state.checkedIds === ''" id="t-rect-caab.15629254d" class="syxqAnyPoint-t-rect-0-10"  :tip="tRectx0x10ComputedData.tip" :label="tRectx0x10ComputedData.label" :active="tRectx0x10ComputedData.active" :c-style="tRectx0x10ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-5454.74c04491" class="syxqAnyPoint-t-text-0-11"  :label="tTextx0x11ComputedData.label" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-3cbd.a0ae1d041" class="syxqAnyPoint-t-text-0-12"  :label="tTextx0x12ComputedData.label" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-a89a.7e30697e2" class="syxqAnyPoint-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-49e3.b2374108a" class="syxqAnyPoint-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-3797.0a506c66b" class="syxqAnyPoint-t-text-0-15"  :label="tTextx0x15ComputedData.label" :editable="tTextx0x15ComputedData.editable" :c-style="tTextx0x15ComputedData.cStyle">` +
`</t-text>` +
`<t-radio id="t-radio-7049.20f57b6cf" class="syxqAnyPoint-t-radio-0-16"  :options="tRadiox0x16ComputedData.options" :active="replaceCssVariables(state.selectedParams.direction, global?.theme || global?.activeTheme || '默认主题')" :alias="tRadiox0x16ComputedData.alias" :disabled="tRadiox0x16ComputedData.disabled" :border="tRadiox0x16ComputedData.border" :size="tRadiox0x16ComputedData.size" :is-use-button="tRadiox0x16ComputedData.isUseButton" :c-style="tRadiox0x16ComputedData.cStyle" @change="onchange1740720896505">` +
`</t-radio>` +
`<t-radio id="t-radio-f568.197f4f8a6" class="syxqAnyPoint-t-radio-0-17"  :options="tRadiox0x17ComputedData.options" :active="replaceCssVariables(state.selectedParams.buffer, global?.theme || global?.activeTheme || '默认主题')" :alias="tRadiox0x17ComputedData.alias" :disabled="tRadiox0x17ComputedData.disabled" :border="tRadiox0x17ComputedData.border" :size="tRadiox0x17ComputedData.size" :is-use-button="tRadiox0x17ComputedData.isUseButton" :c-style="tRadiox0x17ComputedData.cStyle" @change="onchange1740720921561">` +
`</t-radio>` +
`<t-checkbox id="t-checkbox-3380.5456a8ecb" class="syxqAnyPoint-t-checkbox-0-18"  :data="tCheckboxx0x18ComputedData.data" :active="replaceCssVariables(state.selectedParams.altitude, global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x18ComputedData.dataAlias" :border="tCheckboxx0x18ComputedData.border" :use-button="tCheckboxx0x18ComputedData.useButton" :c-style="tCheckboxx0x18ComputedData.cStyle" @change="onchange1740720873822">` +
`</t-checkbox>` +
`<t-rect id="t-rect-0b21.228388b5a" class="syxqAnyPoint-t-rect-0-19"  :tip="tRectx0x19ComputedData.tip" :label="tRectx0x19ComputedData.label" :active="tRectx0x19ComputedData.active" :c-style="tRectx0x19ComputedData.cStyle" @click="onclick1740712988309_0_0">` +
`</t-rect>` +
`<t-search id="t-search-fadf.e7800d58b" class="syxqAnyPoint-t-search-0-20"  :type="tSearchx0x20ComputedData.type" :input-value="replaceCssVariables(state.selectedParams.radius, global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x20ComputedData.maxlength" :minlength="tSearchx0x20ComputedData.minlength" :show-word-limit="tSearchx0x20ComputedData.showWordLimit" :placeholder="tSearchx0x20ComputedData.placeholder" :clearable="tSearchx0x20ComputedData.clearable" :show-password="tSearchx0x20ComputedData.showPassword" :disabled="tSearchx0x20ComputedData.disabled" :prefix-icon="tSearchx0x20ComputedData.prefix-icon" :suffix-icon="tSearchx0x20ComputedData.suffix-icon" :rows="tSearchx0x20ComputedData.rows" :autosize="tSearchx0x20ComputedData.autosize" :name="tSearchx0x20ComputedData.name" :readonly="tSearchx0x20ComputedData.readonly" :step="tSearchx0x20ComputedData.step" :autofocus="tSearchx0x20ComputedData.autofocus" :form="tSearchx0x20ComputedData.form" :label="tSearchx0x20ComputedData.label" :tabindex="tSearchx0x20ComputedData.tabindex" :validate-event="tSearchx0x20ComputedData.validateEvent" :c-style="tSearchx0x20ComputedData.cStyle" :has-search-btn="tSearchx0x20ComputedData.hasSearchBtn" @input="oninput1740741929704">` +
`</t-search>` +
`<t-text id="t-text-52c7.b32680ad6" class="syxqAnyPoint-t-text-0-21"  :label="tTextx0x21ComputedData.label" :editable="tTextx0x21ComputedData.editable" :c-style="tTextx0x21ComputedData.cStyle">` +
`</t-text>` +
`<t-component v-if="state.isShowTagFilter === true" id="t-component-7856.abcbda815" class="syxqAnyPoint-t-component-0-22"  :name="tComponentx0x22ComputedData.name" :loading="tComponentx0x22ComputedData.loading" :c-style="tComponentx0x22ComputedData.cStyle" :src="tComponentx0x22ComputedData.src" :component-name="tComponentx0x22ComputedData.componentName" :page-id="tComponentx0x22ComputedData.pageId" :page-code="tComponentx0x22ComputedData.pageCode">` +
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
   isShowTagFilter: false,
   selectedParams: {"radius":3,"direction":"back","altitude":["10","500","1000"],"buffer":"union","time":""},
   isInitPage: false,
   sceneRawList: [{"hasOperateColumn":true,"entityCode":"tag_yztgdy_1618381967642","entityName":"一张图-固定源","topicCode":"9c78b301-ae5e-4050-aae5-c0928420a054","topicName":"企业","isshow":true,"title":"企业","num":0,"unit":"家","color":"var(--t-white)"},{"hasOperateColumn":true,"entityCode":"tag_fxydayz_1734067067287","entityName":"风险源档案-油站","topicCode":"393cf6ad-0010-4f42-9d50-471f67792c59","topicName":"加油站","isshow":true,"title":"加油站","num":0,"unit":"家","color":"var(--t-white)"},{"hasOperateColumn":true,"entityCode":"tag_fxydayk_1733994042148","entityName":"风险源档案-油库","topicCode":"e4a5ce63-01c5-49bb-b13b-4e20e376137d","topicName":"油库","isshow":true,"title":"油库","num":0,"unit":"家","color":"var(--t-white)"},{"hasOperateColumn":false,"entityCode":"tag_yztgdy_1618381967642","entityName":"一张图-固定源","topicCode":"0dac088-c76f-4aae-b1aa-5e4aaf16a799","topicName":"道路","isshow":false,"title":"道路","num":0,"unit":"家","color":"var(--t-white)"},{"hasOperateColumn":false,"entityCode":"tag_yztgdy_1618381967642","entityName":"一张图-固定源","topicCode":"f15281b6-002c-4820-bcd6-6b2dc35f0c31","topicName":"黑烟车","isshow":false,"title":"黑烟车","num":0,"unit":"家","color":"var(--t-white)"}],
   timeout: {},
   checkedIds: "",
   dispatchUrl: "http://19.130.161.126:8888/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1",
   isShowOperateColumn: false,
   listQueryParams: "{}",
   tabQueryParams: {},
   activeTab: {"value":"","name":""},
   sceneList: [],
   sourceParmasState: {},
   enterList: [],
   tagJson: "",
   bufferLayers: "['涉气企业', '用电企业', '排放清单', '自动监控企业', '排污许可企业', '散乱污企业', '生物质锅炉', '建筑工地', '物料堆场', '涉VOC企业在线监测', '餐饮企业', '汽修企业', '加油站']",
   argsStr: "",
   bufferLen: 1,
   MONITOR_MONTH: "",
   pointInfo: {},
   alarmMonthTotal: "",
   alarmContent: "暂无数据",
   alarmTitle: "-",
   parentParams: {"POINT_CODE":"","aqiLevel":"","primPollute":"","polluteLevel":"","lon":"","lat":"","pTime":"","cTime":"","cHour":"","prediction":"","forward":"","height":""},
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
tButtonx0x0: {
defaultStyle: {
            default: {"width":"70px","height":"36px","backgroundColor":"var(--business-btn-default)","fontSize":"14px","position":"unset","left":"265px","top":"371px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},
            
            },
 default: { 
 
label:"标签筛选",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"70px","height":"36px","backgroundColor":"var(--business-btn-default)","fontSize":"14px","position":"unset","left":"265px","top":"371px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tImageBasex0x1: {
defaultStyle: {
            default: {"width":"410px","height":"232px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","left":"20px","top":"48px","position":"unset"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2025-02-28/b2de8e4a616d4b8a82c36d7ca41a5343.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"410px","height":"232px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","left":"20px","top":"48px","position":"unset"}}}, 
 },
},
tListCardx0x2: {
defaultStyle: {
            default: {"width":"410px","height":"82px","position":"unset","left":"18px","top":"280px","lineHeight":"18px","animationName":"","paddingRight":"8px","paddingLeft":"8px","backgroundColor":"var(--business-show-bg30)","paddingTop":"8px","paddingBottom":"8px","min-height":"82px"},
            
            },
 default: { 
 
data:[],
spacingX:8,
col:4,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":""},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"82px","position":"unset","left":"18px","top":"280px","lineHeight":"18px","animationName":"","paddingRight":"8px","paddingLeft":"8px","backgroundColor":"var(--business-show-bg30)","paddingTop":"8px","paddingBottom":"8px","min-height":"82px"}},"itemWrapper":{"default":{"height":"66px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","backgroundColor":"var(--business-show-bg50)"}},"num":{"default":{"fontSize":"24px","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"14px","color":"var(--t-white)","marginTop":"0px"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"17px"}},"numBox":{"default":{"marginTop":"6px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"alignItems":"center","marginLeft":"8px","display":"flex","flexDirection":"column"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"410px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"268px","left":"20px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"268px","left":"20px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"410px","height":"390px","position":"unset","left":"20px","top":"416px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":""},
            
            },
 default: { 
 
height:"390",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","type":"state","key":"","stateKey":"canPosition","width":"40PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"0PX","height":"0PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"0"},"imageStyle":{"marginRight":"","borderRadius":"","width":"16PX","height":"20PX","backgroundImage":"var(--business-position)"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"16PX","height":"20PX","backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"企业名称","type":"default","key":"DATA_NAME","stateKey":"","width":"370PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"left"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"390px","position":"unset","left":"20px","top":"416px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":""}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tTablex0x5: {
defaultStyle: {
            default: {"width":"410px","height":"390px","position":"unset","left":"20px","top":"416px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":""},
            
            },
 default: { 
 
height:"390",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":" ","type":"state","key":"","stateKey":"isCheck","width":"30PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"24PX","height":"24PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--business-theme)"},"cellStyle":{"cursor":"pointer"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"var(--business-checkbox-checked)","backgroundSize":"100%","cursor":"pointer","transform":"translate(11px, 3px)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":"","cursor":"pointer"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"var(--business-checkbox)","backgroundSize":"100%","cursor":"pointer","transform":"translate(11px, 3px)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"定位","type":"state","key":"","stateKey":"canPosition","width":"40PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"0PX","height":"0PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"0"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"var(--business-position)"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"企业名称","type":"default","key":"DATA_NAME","stateKey":"","width":"290PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"left"},{"label":"操作","type":"default","key":"operation","stateKey":"","width":"50PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--business-theme)"},"cellStyle":{"cursor":"pointer"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"390px","position":"unset","left":"20px","top":"416px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":""}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tComponentx0x6: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"234px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"5px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
            
            },
 default: { 
 
label:"轨迹缓冲区内企业名单",
editable:false,
cStyle:{"wrapper":{"default":{"width":"234px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"5px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}}, 
 },
},
tDatePickerx0x8: {
defaultStyle: {
            default: {"width":"260px","height":"32px","position":"unset","left":"108px","top":"108px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimehour",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"260px","height":"32px","position":"unset","left":"108px","top":"108px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"306px","top":"372px","cursor":"pointer","animationName":"","fontSize":"14px"},
            
            },
 default: { 
 
tip:false,
label:"批量派发",
active:false,
cStyle:{"wrapper":{"default":{"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"306px","top":"372px","cursor":"pointer","animationName":"","fontSize":"14px"}}}, 
 },
},
tRectx0x10: {
defaultStyle: {
            default: {"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"306px","top":"372px","cursor":"no-drop","animationName":"","fontSize":"14px"},
            
            },
 default: { 
 
tip:false,
label:"批量派发",
active:false,
cStyle:{"wrapper":{"default":{"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"306px","top":"372px","cursor":"no-drop","animationName":"","fontSize":"14px"}}}, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"148px"},
            
            },
 default: { 
 
label:"轨迹方向：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"148px"}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"35px","top":"117px","animationName":""},
            
            },
 default: { 
 
label:"日期选择：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"35px","top":"117px","animationName":""}}}, 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"202px","animationName":""},
            
            },
 default: { 
 
label:"缓冲区：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"202px","animationName":""}}}, 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"175px","animationName":""},
            
            },
 default: { 
 
label:"高度：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"175px","animationName":""}}}, 
 },
},
tTextx0x15: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"73px","animationName":""},
            
            },
 default: { 
 
label:"半径：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"73px","animationName":""}}}, 
 },
},
tRadiox0x16: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justify-content":"center","width":"256px","height":"20px","position":"unset","left":"109px","top":"145px","animationName":"","textAlign":"left","justifyContent":"flex-start","flexDirection":"row","flexWrap":"nowrap"},
            
            },
 default: { 
 
options:[{"label":"back","value":"后向溯源","disabled":false},{"label":"front","value":"前向追踪","disabled":false}],
active:"back",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justify-content":"center","width":"256px","height":"20px","position":"unset","left":"109px","top":"145px","animationName":"","textAlign":"left","justifyContent":"flex-start","flexDirection":"row","flexWrap":"nowrap"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"4px","fontSize":"14px","lineHeight":"14px"},"active":{"color":"rgba(255, 255, 255, 1)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","fontSize":"16px","lineHeight":"16px"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"itemWrapper":{"default":{"marginRight":"12px","cursor":"pointer"}},"radioButton":{"default":{"fontSize":"16px","lineHeight":"16px"}}}, 
 },
},
tRadiox0x17: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justify-content":"center","width":"256px","height":"20px","position":"unset","left":"109px","top":"199px","animationName":"","textAlign":"left","justifyContent":"flex-start","flexDirection":"row","flexWrap":"nowrap"},
            
            },
 default: { 
 
options:[{"label":"union","value":"全部缓冲区","disabled":false},{"label":"inner","value":"缓冲交界区","disabled":false}],
active:"union",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justify-content":"center","width":"256px","height":"20px","position":"unset","left":"109px","top":"199px","animationName":"","textAlign":"left","justifyContent":"flex-start","flexDirection":"row","flexWrap":"nowrap"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"4px","fontSize":"14px","lineHeight":"14px"},"active":{"color":"rgba(255, 255, 255, 1)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","fontSize":"16px","lineHeight":"16px"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"itemWrapper":{"default":{"marginRight":"12px","cursor":"pointer"}},"radioButton":{"default":{"fontSize":"16px","lineHeight":"16px"}}}, 
 },
},
tCheckboxx0x18: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"232px","height":"22px","position":"unset","left":"107px","top":"172px","animationName":"","backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"2px"},
            
            },
 default: { 
 
data:[{"label":"10m","value":"10","disabled":false},{"label":"500m","value":"500","disabled":false},{"label":"1000m","value":"1000","disabled":false}],
active:["10","500","1000"],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"232px","height":"22px","position":"unset","left":"107px","top":"172px","animationName":"","backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"2px"}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"2px","fontSize":"14px"}},"itemWrapper":{"default":{"marginRight":"16px","cursor":"pointer"}}}, 
 },
},
tRectx0x19: {
defaultStyle: {
            default: {"width":"85px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"329px","top":"224px","cursor":"pointer","animationName":"","fontSize":"14px","letterSpacing":"1px"},
            
            },
 default: { 
 
tip:false,
label:"开始分析",
active:false,
cStyle:{"wrapper":{"default":{"width":"85px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"329px","top":"224px","cursor":"pointer","animationName":"","fontSize":"14px","letterSpacing":"1px"}}}, 
 },
},
tSearchx0x20: {
defaultStyle: {
            default: {"width":"260px","height":"32px","position":"unset","left":"108px","top":"65px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":"","paddingLeft":"10px","fontSize":"14px"},
            
            },
 default: { 
 
type:"number",
inputValue:3,
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入",
clearable:true,
showPassword:false,
disabled:false,
'prefix-icon':"",
'suffix-icon':"",
rows:2,
autosize:false,
name:"",
readonly:false,
step:"",
autofocus:false,
form:"",
label:"",
tabindex:"",
validateEvent:true,
cStyle:{"wrapper":{"default":{"width":"260px","height":"32px","position":"unset","left":"108px","top":"65px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":"","paddingLeft":"10px","fontSize":"14px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"14px"}},"prefix":{"default":{"color":"var(--business-text-avianize)","fontSize":"0px"}}},
hasSearchBtn:false, 
 },
},
tTextx0x21: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-font-color-gy1)","fontSize":"14px","position":"unset","left":"381px","top":"75px","lineHeight":"14px"},
            
            },
 default: { 
 
label:"km",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-font-color-gy1)","fontSize":"14px","position":"unset","left":"381px","top":"75px","lineHeight":"14px"}}}, 
 },
},
tComponentx0x22: {
defaultStyle: {
            default: {"width":"410px","height":"604px","margin":"0 auto","position":"unset","left":"20px","top":"226px"},
            
            },
 default: { 
 
name:"tagFilterPanelComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"410px","height":"604px","margin":"0 auto","position":"unset","left":"20px","top":"226px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/[object Object]",
componentName:"tagFilterPanelComponent",
pageId:"5979061345d74c6f8e463b2f928515e6",
pageCode:"tagFilterPanel", 
 },
},
});
const getProvider = () => {
const rootData = inject('sourceParmasState');
state.sourceParmasState = rootData;
};
const initPage = () => {
state.parentParams = {
  ...state?.sourceParmasState?.componentSourceParmas,
  lon: '',
  lat: '',
  pTime: '',
  cTime: '',
  cHour: '',
  prediction: 24,
  forward: false,
  height: '10,500,1000',
};


state.selectedParams.time = state.parentParams?.alarmTime?.slice(0, 13) || "";
state.MONITOR_MONTH = state.parentParams?.alarmTime?.slice(0, 7) || "";

watch(
  () => state.selectedParams.altitude,
  (newVal, oldVal) => {
    if (newVal.length === 0) {
      state.selectedParams.altitude = [oldVal[0]];
    }
  }
)
// watch(
//   () => state.selectedParams.radius,
//   (value) => {
//     let data = 0
//     if (Number(value) < 1) {
//       data = 1
//     } else if (Number(value) > 10) {
//       data = 10
//     } else {
//       data = value
//     }
//     state.selectedParams.radius = `${data}`
//   }
// )


};
const clickAlarmTotal = () => {
// 如果当月报警记录为空，则不进行跳转
if (state.alarmMonthTotal === '0' || !state.alarmMonthTotal) {
  return;
}

const startTime = state.MONITOR_MONTH;
let firstDate = '';
let endDate = '';

if (startTime) {
  const sysDate = new Date();
  const sysYear = sysDate.getFullYear();
  const sysMonth = sysDate.getMonth() + 1;
  const sysDay = sysDate.getDate();

  const timeYear = startTime.split('-')[0];
  const timeMonth = Number(startTime.split('-')[1]);

  firstDate = timeYear + "-" + startTime.split('-')[1] + "-01 00:00";
  // 判断是否是系统当前月份
  if (sysYear == timeYear && sysMonth == timeMonth) {
    endDate = timeYear + "-" + startTime.split('-')[1] + "-" + sysDay + " 23:59";
  } else {
    const thisDate = new Date(timeYear, timeMonth, 0);
    endDate = timeYear + "-" + startTime.split('-')[1] + "-" + thisDate.getDate() + " 23:59";
  }
}

// 给地图发消息
/* 发送webSocket消息 */
if (rootData?.sendMessage) {
  rootData?.sendMessage({
    id: guid(true, 'lego'), // 唯一索引
    type: "runInteractive", // 消息名称
    data: [
      {
        shareCode: "showRecordDetail",
        runtimeValue: state.parentParams.POINT_CODE || '',
        // 显示lego的溯源
        componentName: "airMonthlyAlarmRecordsComponent",
        componentParmas: {
          POINT_CODE: state.pointCode,
          ASSESSTYPE: state.assessType,
          DATA_FREQUENCY: '4',
          MULTI_POLLUTANTS: 'W21003,W21011',
          MONITORTIME: state.monitorTime
        }
      }, {
        code: "value",
        shareCode: "ALARM_START_TIME",
        runtimeValue: firstDate
      }, {
        code: "value",
        shareCode: "ALARM_END_TIME",
        runtimeValue: endDate
      }, {
        shareCode: "ALARM_POINT_TYPE",
        runtimeValue: state.pointInfo.POINT_TYPE
      }, {
        shareCode: "ALARM_POINT_NAME",
        runtimeValue: state.pointInfo.POINT_NAME
      }
    ]
  });
}


// 发送socket消息，展示当月报警记录
// rootData.rootSocket.emit(
//   'message',
//   {
//     room: global.socketRoom,
//     type: "toggleAirTraceAlarmRecord",
//     data: {
//       "compName": 'monthlyAlarmRecords',
//     },
//   }
// );
};
const unionShape = (bufferLen,lat,lon,data) => {
// 将图形缓存并合并成一个，三条线加中心点缓冲
// console.log(2056, data)

function createShape(rings) {
  const path = [];
  for (let j = 0; j < rings[0].length; j++) {
    path.push([rings[0][j][0], rings[0][j][1]]);
  }
  return turf.lineString(path);
}

// var cicleRate = sourceLayer.defaultCicleBufferRate;
const cicleRate = 1;
const gs = data.featureSet.features || [];
let firstShape = createShape(gs[0].geometry.paths);

firstShape = turf.buffer(firstShape, bufferLen, {
  units: 'kilometers'
});

for (let i = 1; i < gs.length; i++) {
  const g = gs[i];
  const ring = g.geometry.paths;
  let shp1 = createShape(ring);
  shp1 = turf.buffer(shp1, bufferLen, {
    units: 'kilometers'
  });
  // console.log(8952, firstShape, shp1)
  firstShape = turf.union(firstShape, shp1);
}

const point1 = turf.point([Number(lon), Number(lat)]);
const bufferedPoint = turf.buffer(point1, bufferLen * cicleRate, {
  units: 'kilometers'
});
// console.log(256, firstShape, bufferedPoint)
firstShape = turf.union(firstShape, bufferedPoint);

const ring0 = firstShape.geometry.coordinates;

return ring0;
};
const getLayerBufferParamsByPollutant = (pollutants) => {
const config = {
  layers: [],
  buffer_len: 1
};
if (pollutants === "PM2.5") {
  // 显示站点周边 1公里内+轨迹线1公里内，排放烟粉尘的工业企业（排放清单+自动监控+排污许可+散乱污企业）、物料堆场、建筑工地、市政道路工程、裸露地面、路网车流量最大的道路	
  config.layers = ['排放清单', '自动监控企业', '排污许可企业', '散乱污企业', '建筑工地', '物料堆场', '市政道路工程', '裸露地面', '路网车流量'];
} else if (pollutants === "PM10") {
  // 显示站点周边3公里内+轨迹线3公里内，物料堆场、建筑工地、市政道路工程、裸露地面、路网车流量最大的道路					
  config.layers = ['建筑工地', '物料堆场', '市政道路工程', '裸露地面', '路网车流量'];
  config.buffer_len = 3;
} else if (pollutants === "NO2") {
  // 显示站点周边 1公里内+轨迹线1公里内，排放氮氧化物的工业企业（排放清单+自动监控+排污许可+散乱污企业）、非道路机械、路网车流量最大的道路					
  config.layers = ['排放清单', '自动监控企业', '排污许可企业', '散乱污企业', '非道路机械', '路网车流量'];
} else if (pollutants === "SO2") {
  // 显示站点周边 1公里内+轨迹线1公里内，排放二氧化硫的工业企业（排放清单+自动监控+排污许可+散乱污企业）、燃料为燃煤的企业					
  config.layers = ['排放清单', '自动监控企业', '排污许可企业', '散乱污企业']; //少燃料为燃煤的企业
} else if (pollutants === "O3") {
  // 显示站点周边 1公里内+轨迹线1公里内，排放氮氧化物的工业企业（排放清单+自动监控+散乱污企业）、排污许可里排放类型为油烟的企业、非道路机械、路网车流量最大的道路、涉VOC在线监测企业、餐饮企业、汽修企业、加油站	
  config.layers = ['排放清单', '自动监控企业', '散乱污企业', '涉VOC企业在线监测', '餐饮企业', '汽修企业', '加油站']; //缺少 排污许可里排放类型为油烟的企业  非道路机械、路网车流量最大的道路
} else if (pollutants === "CO") {
  // 显示站点周边 1公里内+轨迹线1公里内，排污许可证里排放一氧化碳的企业、生物质锅炉、燃料为燃煤的企业		
  config.layers = ['生物质锅炉']
}
return config;
};
const handleTableClick = (column,row) => {
console.log('处理表格点击事件', column, row);

if (column.label === '定位') {
  // 给地图发消息
  /* 发送webSocket消息 */
  if (rootData?.sendMessage) {
    // rootData?.sendMessage({
    //   id: guid(true, 'lego'), // 唯一索引
    //   type: "runInteractive", // 消息名称
    //   data: [
    //     {
    //       code: 'CENTER_ENTER',
    //       shareCode: 'CENTER_ENTER',
    //       defaultValue: '',
    //       runtimeValue: row.STANDENTERID
    //     }
    //   ]
    // });
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: "gotoAirSTracePoint", // 消息名称
      data: {
        "dataid": row.DATA_PKID,
      }
    });
  }
} else if (column.label === '操作') {
  // 派发任务
  dispatchTask(row.DATA_PKID);
} else if (column.label === ' ') {
  // 复选
  // dispatchTask(row.DATA_PKID);
  if (row.isCheck === '0') {
    row.isCheck = '1';
  } else {
    row.isCheck = '0';
  }
  // 更新勾选状态
  state.checkedIds = state.enterList
    .filter((val) => val.isCheck === '1')
    .map((val) => val.DATA_PKID)
    .join(',');
}
};
const clickSceneCard = (item) => {
// 更新场景名
state.activeTab.name = item.title;
// 更新场景编码
state.activeTab.value = item.topicCode;

try {
  const listQueryParams = JSON.parse(state.listQueryParams);
  debugger

  listQueryParams.query.bool.filter[1].term['TAG_TOPIC_CODE.keyword'] = state.activeTab.value;

  state.listQueryParams = JSON.stringify(listQueryParams);
  // 是否展示操作列
  state.isShowOperateColumn = item.hasOperateColumn;

  // 获取列表数据
  getEnterList();
} catch (err) {
  console.error(err, '列表查询参数解析失败');
}

// {
//     "_source" : [ "DATA_PKID","DATA_NAME","TAG_TOPIC_CODE" ],
//     "size" : 1500,
//     "query" : {
//       "bool" : {
//         "must" : [ {
//           "match_all" : { }
//         }],
//         "filter" : [ {
//           "term" : {
//             "REGION_CODE" : regionCode
//           }
//         },
//         {
//           "term" : {
//             "TAG_TOPIC_CODE.keyword" : state.activeTab
//           }
//         } 
//         ],
//         "should" : [ 
//           {
//             "geo_shape": {
//               "location": {
//                 "shape": {
//                   "type": "polygon",
//                   "coordinates":bufferLayerPoly
//                 },
//                 "relation": "within"
//               }
//             }
//           },
//           {
//             "geo_shape": {
//               "location_poly": {
//                 "shape": {
//                   "type": "polygon",
//                   "coordinates":bufferLayerPoly
//                 },
//                 "relation": "intersects"
//               }
//             }
//           }
//         ],
//         "minimum_should_match" : 1
//       }
//     }
//   }
};
const setSourceTraceData = (regionCode,bufferLayerPoly) => {
if (state.isInitPage) {
  return;
}
state.isInitPage = true;

getAllData(regionCode, bufferLayerPoly)




};
const dispatchTask = (id) => {
/**
 * 派发任务
 */

// 记录行ID
localStorage.setItem('pointIds', id);
window.open(state.dispatchUrl);
};
const handleAnalysis = () => {
rootData.rootSocket.emit('message', {
  type: 'showAirSourceTrace',
  room: global.socketRoom,
  data: [
    {
      shareCode: "showAirSourceTrace",
      runtimeValue: state?.sourceParmasState?.componentSourceParmas?.POINT_CODE || "",
      pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
      isEnters: true,
      traceTime: state.selectedParams.time || "",
      layerName: global.businessDialog.dialogParmas.layerName,
      forward: state.selectedParams.direction === "front",
      height: state.selectedParams.altitude.join(','),
      pointBufferLen: state.selectedParams.radius,
      bufferType: state.selectedParams.buffer
    }]
});
};
const getAllData = (regionCode,bufferLayerPoly) => {
/**
 * 获取数据
 */
async function getData() {
  // 获取场景数据
  await getSceneData();

  try {
    state.listQueryParams = JSON.stringify({
      "_source" : ["DATA_PKID", "DATA_NAME", "TAG_TOPIC_CODE", "LONGITUDE", "LATITUDE"],
      "size" : 1500,
      "query" : {
        "bool" : {
          "must" : [ {
            "match_all" : { }
          }],
          "filter" : [ {
            "term" : {
              "REGION_CODE" : regionCode
            }
          },
          {
            "term" : {
              "TAG_TOPIC_CODE.keyword" : state.activeTab.value
            }
          } 
          ],
          "should" : [ 
            {
              "geo_shape": {
                "location": {
                  "shape": {
                    "type": "polygon",
                    "coordinates":bufferLayerPoly
                  },
                  "relation": "within"
                }
              }
            },
            {
              "geo_shape": {
                "location_poly": {
                  "shape": {
                    "type": "polygon",
                    "coordinates":bufferLayerPoly
                  },
                  "relation": "intersects"
                }
              }
            }
          ],
          "minimum_should_match" : 1
        }
      }
    });

    console.log(state.listQueryParams, '===查询无报警溯源列表数据的传参===')
    
    // 获取列表数据
    getEnterList();
  } catch (err) {
    console.error(err, '列表查询参数转成字符串失败');
  }
}

state.timeout = setTimeout(() => {
  try {
    // 更新标签栏传参
    state.tabQueryParams = JSON.stringify({
      "size": 0,
      "query": {
        "bool": {
          "must": [{
            "match_all": {}
          }],
          "filter": [ {
            "term": {
              "REGION_CODE": regionCode
            }
          }],
          "should": [ 
            {
              "geo_shape": {
                "location": {
                  "shape": {
                    "type": "polygon",
                    "coordinates":bufferLayerPoly
                  },
                  "relation": "within"
                }
              }
            },
            {
              "geo_shape": {
                "location_poly": {
                  "shape": {
                    "type": "polygon",
                    "coordinates":bufferLayerPoly
                  },
                  "relation": "intersects"
                }
              }
            }
          ],
          "minimum_should_match": 1
        }
      },
      "aggs": {
        "groupCount": {
          "terms": {
            "script": {
              "inline": "doc['TAG_ENTITY_CODE.keyword'].value+'-split-'+doc['TAG_ENTITY_NAME.keyword'].value+'-split-'+doc['TAG_TOPIC_CODE.keyword'].value+'-split-'+doc['TAG_TOPIC_NAME.keyword'].value"
            },
            "size": 100
          }
        }
      }
    });

    
  } catch (err) {
    console.error(err, 'bufferLayerPoly解析失败');
  }
  getData();
  clearTimeout(state.timeout);
  state.timeout = null;
});
};
const getInputValue = (value) => {
let data = 0
if (Number(value) < 1) {
  data = 1
} else if (Number(value) > 10) {
  data = 10
} else {
  data = value
}
state.selectedParams.radius = data

};
const oncardClick1735029005919 = (item) => {
// 执行自定义方法
clickSceneCard(item);
};
const oncellClick1734608241064 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(column,row);
};
const oncellClick1735184769666_0_0 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(column,row);
};
const ondateChange1740967140116 = (data) => {
// 设置变量值
state.selectedParams.time = data;
};
const onclick1735205190641 = () => {
// 执行自定义方法
dispatchTask(state.checkedIds);
};
const onchange1740720896505 = (data,selectOption) => {
// 设置变量值
state.selectedParams.direction = selectOption.label;
};
const onchange1740720921561 = (data,selectOption) => {
// 设置变量值
state.selectedParams.buffer = selectOption.label;
};
const onchange1740720873822 = (data) => {
// 设置变量值
state.selectedParams.altitude = data;
};
const onclick1740712988309_0_0 = () => {
// 执行自定义方法
handleAnalysis();
};
const oninput1740741929704 = (value) => {
// 设置变量值
state.selectedParams.radius = value;
};
const onclick1761117008297 = () => {
// 设置变量值
state.isShowTagFilter = true;
};
// 接口函数
const getTraceLine = () => {
return new Promise((resolve, reject) => {
  http({"url":"airservice/serviceinterface/search/run.action","method":"get","baseURL":"http://222.212.88.209:8089","params":{"height":state.parentParams.height,"forward":state.parentParams.forward,"prediction":state.parentParams.prediction,"cHour":state.parentParams.cHour,"cTime":state.parentParams.cTime,"pTime":state.parentParams.pTime,"lat":state.parentParams.lat,"lon":state.parentParams.lon,"token":"thscityee_sanming","interfaceId":"836e6f38817b7fee388c09ecc372550e"},}).then((res) => {
     // 成功的操作
     console.log('获取 溯源轨迹', res);

// console.log(window);
// console.log(turf)

const { data, status } = res;

if (res.status === 200 && res.data) {
  // 拼接缓冲距离
  state.bufferLen = 1;
  // 拼接 pointValue
  const args = unionShape(1, state.parentParams.lat, state.parentParams.lon, res.data);
  state.argsStr = JSON.stringify(args);
  // 拼接缓冲区图层
  state.bufferLayers = ['涉气企业', '用电企业', '排放清单', '自动监控企业', '排污许可企业', '散乱污企业', '生物质锅炉', '建筑工地', '物料堆场', '涉VOC企业在线监测', '餐饮企业', '汽修企业', '加油站'];
  // 拼接 tagJson
  let layerStr = '';
  for (let j = 0; j < state.bufferLayers.length; j++) {
    layerStr += state.bufferLayers[j] + "$"
  }
  const tagJson = {
    "6D0A512A84907F323D8F66DC0727E583": layerStr
  };
  state.tagJson = JSON.stringify(tagJson);

  console.log(124, {
    bufferLen: state.bufferLen,
    pointValue: state.argsStr,
    tagJson: state.tagJson,
  });

  // 获取缓冲区企业列表
  getEnterList();

  // if (isAlarm) {
  //   const config = getLayerBufferParamsByPollutants(pollutants);
  //   state.bufferLen = config.buffer_len;
  //   state.bufferLayers = config.layers;
  // }

}

// {
//     "featureSet": {
//         "features": [
//             {
//                 "attributes": {
//                     "OBJECTID": 0,
//                     "concentration": "0",
//                     "style": "",
//                     "time": null
//                 },
//                 "geometry": {
//                     "__type": "Polyline:#ModelEntity.ArcGIS",
//                     "spatialReference": {
//                         "latestWkid": 4326,
//                         "wkid": 4326
//                     },
//                     "paths": [
//                         [
//                             [
//                                 103.948,
//                                 30.997,
//                                 10
//                             ],
//                             [
//                                 104.001,
//                                 30.98,
//                                 2.6
//                             ],
//                             [
//                                 104.053,
//                                 30.952,
//                                 0
//                             ],
//                             [
//                                 104.108,
//                                 30.914,
//                                 0
//                             ],
//                             [
//                                 104.17,
//                                 30.872,
//                                 0
//                             ],
//                             [
//                                 104.239,
//                                 30.832,
//                                 0
//                             ],
//                             [
//                                 104.314,
//                                 30.796,
//                                 0
//                             ],
//                             [
//                                 104.386,
//                                 30.771,
//                                 0
//                             ],
//                             [
//                                 104.448,
//                                 30.763,
//                                 0
//                             ],
//                             [
//                                 104.502,
//                                 30.772,
//                                 0
//                             ],
//                             [
//                                 104.542,
//                                 30.782,
//                                 0.7
//                             ],
//                             [
//                                 104.568,
//                                 30.778,
//                                 2.3
//                             ],
//                             [
//                                 104.58,
//                                 30.761,
//                                 4.6
//                             ],
//                             [
//                                 104.578,
//                                 30.732,
//                                 7
//                             ],
//                             [
//                                 104.561,
//                                 30.694,
//                                 8.7
//                             ],
//                             [
//                                 104.527,
//                                 30.647,
//                                 10.1
//                             ],
//                             [
//                                 104.482,
//                                 30.596,
//                                 11.1
//                             ],
//                             [
//                                 104.433,
//                                 30.545,
//                                 11.5
//                             ],
//                             [
//                                 104.384,
//                                 30.496,
//                                 11.1
//                             ],
//                             [
//                                 104.356,
//                                 30.444,
//                                 9.8
//                             ],
//                             [
//                                 104.366,
//                                 30.382,
//                                 7.7
//                             ],
//                             [
//                                 104.416,
//                                 30.311,
//                                 5.5
//                             ],
//                             [
//                                 104.494,
//                                 30.25,
//                                 4.8
//                             ],
//                             [
//                                 104.588,
//                                 30.21,
//                                 6.4
//                             ],
//                             [
//                                 104.703,
//                                 30.191,
//                                 10.3
//                             ]
//                         ]
//                     ]
//                 }
//             },
//             {
//                 "attributes": {
//                     "OBJECTID": 1,
//                     "concentration": "10.0",
//                     "style": "",
//                     "time": null
//                 },
//                 "geometry": {
//                     "__type": "Polyline:#ModelEntity.ArcGIS",
//                     "spatialReference": {
//                         "latestWkid": 4326,
//                         "wkid": 4326
//                     },
//                     "paths": [
//                         [
//                             [
//                                 103.948,
//                                 30.997,
//                                 500
//                             ],
//                             [
//                                 103.979,
//                                 30.964,
//                                 491.6
//                             ],
//                             [
//                                 104.013,
//                                 30.927,
//                                 469
//                             ],
//                             [
//                                 104.05,
//                                 30.886,
//                                 434.9
//                             ],
//                             [
//                                 104.093,
//                                 30.845,
//                                 403.5
//                             ],
//                             [
//                                 104.146,
//                                 30.809,
//                                 382.4
//                             ],
//                             [
//                                 104.206,
//                                 30.777,
//                                 363.6
//                             ],
//                             [
//                                 104.267,
//                                 30.755,
//                                 346.2
//                             ],
//                             [
//                                 104.329,
//                                 30.745,
//                                 332.9
//                             ],
//                             [
//                                 104.392,
//                                 30.748,
//                                 323.9
//                             ],
//                             [
//                                 104.44,
//                                 30.754,
//                                 324.6
//                             ],
//                             [
//                                 104.451,
//                                 30.748,
//                                 339.9
//                             ],
//                             [
//                                 104.423,
//                                 30.732,
//                                 369.9
//                             ],
//                             [
//                                 104.358,
//                                 30.705,
//                                 409.5
//                             ],
//                             [
//                                 104.26,
//                                 30.666,
//                                 455.6
//                             ],
//                             [
//                                 104.134,
//                                 30.619,
//                                 517.4
//                             ],
//                             [
//                                 104.008,
//                                 30.572,
//                                 582
//                             ],
//                             [
//                                 103.906,
//                                 30.528,
//                                 623.8
//                             ],
//                             [
//                                 103.827,
//                                 30.486,
//                                 653.4
//                             ],
//                             [
//                                 103.769,
//                                 30.449,
//                                 665.6
//                             ],
//                             [
//                                 103.729,
//                                 30.412,
//                                 650.9
//                             ],
//                             [
//                                 103.706,
//                                 30.368,
//                                 613.7
//                             ],
//                             [
//                                 103.701,
//                                 30.319,
//                                 584.3
//                             ],
//                             [
//                                 103.715,
//                                 30.284,
//                                 589.4
//                             ],
//                             [
//                                 103.746,
//                                 30.27,
//                                 628.3
//                             ]
//                         ]
//                     ]
//                 }
//             },
//             {
//                 "attributes": {
//                     "OBJECTID": 2,
//                     "concentration": "500.0",
//                     "style": "",
//                     "time": null
//                 },
//                 "geometry": {
//                     "__type": "Polyline:#ModelEntity.ArcGIS",
//                     "spatialReference": {
//                         "latestWkid": 4326,
//                         "wkid": 4326
//                     },
//                     "paths": [
//                         [
//                             [
//                                 103.948,
//                                 30.997,
//                                 1000
//                             ],
//                             [
//                                 103.931,
//                                 30.958,
//                                 1011.6
//                             ],
//                             [
//                                 103.922,
//                                 30.921,
//                                 1016.7
//                             ],
//                             [
//                                 103.923,
//                                 30.887,
//                                 1007.3
//                             ],
//                             [
//                                 103.93,
//                                 30.854,
//                                 984.9
//                             ],
//                             [
//                                 103.943,
//                                 30.822,
//                                 957.1
//                             ],
//                             [
//                                 103.962,
//                                 30.791,
//                                 924.8
//                             ],
//                             [
//                                 103.984,
//                                 30.764,
//                                 893.4
//                             ],
//                             [
//                                 104.001,
//                                 30.744,
//                                 867
//                             ],
//                             [
//                                 104.01,
//                                 30.731,
//                                 843.8
//                             ],
//                             [
//                                 104.012,
//                                 30.721,
//                                 832.9
//                             ],
//                             [
//                                 104.01,
//                                 30.712,
//                                 842.1
//                             ],
//                             [
//                                 104.006,
//                                 30.705,
//                                 871.4
//                             ],
//                             [
//                                 103.995,
//                                 30.7,
//                                 926.5
//                             ],
//                             [
//                                 103.971,
//                                 30.701,
//                                 1016.1
//                             ],
//                             [
//                                 103.945,
//                                 30.71,
//                                 1146.2
//                             ],
//                             [
//                                 103.928,
//                                 30.739,
//                                 1277.9
//                             ],
//                             [
//                                 103.919,
//                                 30.787,
//                                 1372.8
//                             ],
//                             [
//                                 103.915,
//                                 30.852,
//                                 1435.7
//                             ],
//                             [
//                                 103.901,
//                                 30.921,
//                                 1431.1
//                             ],
//                             [
//                                 103.86,
//                                 30.973,
//                                 1306.3
//                             ],
//                             [
//                                 103.804,
//                                 30.997,
//                                 1069.9
//                             ],
//                             [
//                                 103.782,
//                                 30.987,
//                                 826
//                             ],
//                             [
//                                 103.824,
//                                 30.958,
//                                 634.2
//                             ],
//                             [
//                                 103.919,
//                                 30.921,
//                                 491.3
//                             ]
//                         ]
//                     ]
//                 }
//             }
//         ],
//         "geometryType": "esriGeometryPolyline"
//     },
//     "layerDefinition": {
//         "drawingInfo": null,
//         "fields": [
//             {
//                 "alias": "OBJECTID",
//                 "defaultValue": null,
//                 "domain": null,
//                 "length": 0,
//                 "name": "OBJECTID",
//                 "sqlType": "sqlTypeOther",
//                 "type": "esriFieldTypeOID"
//             },
//             {
//                 "alias": "time",
//                 "defaultValue": null,
//                 "domain": null,
//                 "length": 100,
//                 "name": "time",
//                 "sqlType": "sqlTypeOther",
//                 "type": "esriFieldTypeString"
//             },
//             {
//                 "alias": "style",
//                 "defaultValue": null,
//                 "domain": null,
//                 "length": 100,
//                 "name": "style",
//                 "sqlType": "sqlTypeOther",
//                 "type": "esriFieldTypeString"
//             },
//             {
//                 "alias": "concentration",
//                 "defaultValue": null,
//                 "domain": null,
//                 "length": 100,
//                 "name": "concentration",
//                 "sqlType": "sqlTypeOther",
//                 "type": "esriFieldTypeString"
//             }
//         ],
//         "geometryType": "esriGeometryPolyline"
//     }
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // state.alarmList = [];
// state.headerInfo.isShowAlarm = false; // 是否展示报警列表
// state.isShowWrwCheckbox = false; // 是否展示污染物复选列表
      reject(error);
    });
  });
};
// 接口函数
const getEnterList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"post","baseURL":global.serviceBaseUrl,"data":qs.stringify({"interfaceId":"54c0456d112a15810ddedb11a29c986d","queryJson":state.listQueryParams,"entityCode":"tag_gather_yztdqsy_1735090881279"}),}).then((res) => {
     // 成功的操作
     // 清空列表数据
state.enterList = [];
// 重置勾选状态
state.checkedIds = '';

const { data } = res;
const tabList = data?.hits?.hits;
if (res.status === 200 && Array.isArray(tabList)) {
  state.enterList = tabList.map((val) => ({
    ...val._source,
    canPosition: val._source.LONGITUDE && val._source.LATITUDE ? 'true' : 'false', // 是否能定位
    operation: '派发', // 操作
    isCheck: '0', // 1已勾选，0未勾选
  }));
}
console.log(state.enterList, 22333)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空列表数据
state.enterList = [];
// 重置勾选状态
state.checkedIds = '';
      reject(error);
    });
  });
};
// 接口函数
const getSceneData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"post","baseURL":global.serviceBaseUrl,"data":qs.stringify({"interfaceId":"54c0456d112a15810ddedb11a29c986d","queryJson":state.tabQueryParams,"entityCode":"tag_gather_yztdqsy_1735090881279"}),}).then((res) => {
     // 成功的操作
     state.sceneList = [];

const { data } = res;
const tabList = data?.aggregations?.groupCount?.buckets;
if (res.status === 200 && Array.isArray(tabList)) {
  const { sceneRawList } = state;
  // 过滤要展示的数据
  const filterItems = sceneRawList.filter((val) => val.isshow);
  // 结果数组
  const resList = [];
  filterItems.forEach((val, index) => {
    // 找到场景数据
    let scene = tabList.find((item) => item.key.indexOf(val.topicCode) > -1);
    /* 若接口返回了当前场景的数据 */
    if (scene) {
      const splitData = scene.key.split('-split-');
      if (splitData.length >= 4) {
        console.log(val, 2223)
        resList.push({
          hasOperateColumn: val.hasOperateColumn, // 是否展示操作列
          entityCode: val.entityCode, // 实体编码
          entityName: val.entityName, // 实体名称
          topicCode: val.topicCode, // 主题编码
          topicName: val.topicName, // 主体名称
          title: val.topicName,
          num: scene.doc_count || '0',
          unit: '家',
          color: 'var(--t-white)',
        });
      }
    } else {
      resList.push({
        hasOperateColumn: val.hasOperateColumn, // 是否展示操作列
        entityCode: val.entityCode, // 实体编码
        entityName: val.entityName, // 实体名称
        topicCode: val.topicCode, // 主题编码
        topicName: val.topicName, // 主体名称
        title: val.title,
        num: '0',
        unit: val.unit,
        color: val.color,
      });
    }

    
    /* 若是第一个元素 */
    if (!index) {
      state.activeTab.value = resList[0].topicCode;
      state.activeTab.name = resList[0].topicName;
      // 是否展示操作列
      state.isShowOperateColumn = resList[0].hasOperateColumn;
    }
  });
  state.sceneList = resList;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.sceneList = [];
      reject(error);
    });
  });
};
// 接口函数
const getPointInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITOR_MONTH":state.MONITOR_MONTH,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"a72ff52d8a2db82b4d36c46b63011669"},}).then((res) => {
     // 成功的操作
     // console.log('获取 站点信息', res);

// 清空原始数据
state.pointInfo = {
  "POINT_CODE": "",
  "POINT_NAME": "",
  "POINT_TYPE": "",
  "LONGITUDE": '',
  "LATITUDE": '',
};

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.pointInfo = data.data;

  state.parentParams.lon = data.data.LONGITUDE;
  state.parentParams.lat = data.data.LATITUDE;
}

console.log('填充后的 站点信息', state.pointInfo);

// {
//     "POINT_CODE": "440306022000001",
//     "POINT_NAME": "沙井街道县控站点",
//     "POINT_TYPE": "4",
//     "LONGITUDE": 113.791291,
//     "LATITUDE": 22.735156
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空原始数据
state.pointInfo = {
  "POINT_CODE": "",
  "POINT_NAME": "",
  "POINT_TYPE": "",
  "LONGITUDE": '',
  "LATITUDE": '',
};
      reject(error);
    });
  });
};
// 接口函数
const getAlarmTotal = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITOR_MONTH":state.MONITOR_MONTH,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"29ed367122058ace783514d180784630"},}).then((res) => {
     // 成功的操作
     // console.log('获取 当月报警记录 总数', res);

// 清空原始数据
state.alarmMonthTotal = 0;

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.alarmMonthTotal = data.data.MONTH_ALARM_TOTAL || 0;
}

console.log('填充后的 当月报警记录', state.alarmMonthTotal);

// {
//     "MONTH_ALARM_TOTAL": "59",
//     "MONTH_MAX_TIME": "2021-03-20 21:00:00.0"
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.alarmMonthTotal = 0;
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-syxqAnyPoint', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
initPage();
/* 接收socket.io消息 */
const onSocketChange69c585f0d89f4262949e = function (data) {
if(data.type === "sendAirSourceTraceData"){
try{
// 执行自定义方法
setSourceTraceData(data.data.regionCode,data.data.bufferLayerPoly);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange69c585f0d89f4262949e);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange69c585f0d89f4262949e);
});
/* 接收socket.io消息 */
const onSocketChangee04d427a562c40898c81 = function (data) {
if(data.type === "sendAirSourceTraceAnalyData"){
try{
// 执行自定义方法
getAllData(data.data.regionCode,data.data.bufferLayerPoly);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangee04d427a562c40898c81);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangee04d427a562c40898c81);
});
onMounted(() => {
setPageScale('t-l-c-syxqAnyPoint', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tButtonx0x0ComputedData = computed(() => _.merge({}, componentState.tButtonx0x0.default, componentState.tButtonx0x0?.[state.screenSize]));

 const tImageBasex0x1ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x1.default, componentState.tImageBasex0x1?.[state.screenSize]));

 const tListCardx0x2ComputedData = computed(() => _.merge({}, componentState.tListCardx0x2.default, componentState.tListCardx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

 const tTablex0x5ComputedData = computed(() => _.merge({}, componentState.tTablex0x5.default, componentState.tTablex0x5?.[state.screenSize]));

 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tDatePickerx0x8ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x8.default, componentState.tDatePickerx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tRectx0x10ComputedData = computed(() => _.merge({}, componentState.tRectx0x10.default, componentState.tRectx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tTextx0x15ComputedData = computed(() => _.merge({}, componentState.tTextx0x15.default, componentState.tTextx0x15?.[state.screenSize]));

 const tRadiox0x16ComputedData = computed(() => _.merge({}, componentState.tRadiox0x16.default, componentState.tRadiox0x16?.[state.screenSize]));

 const tRadiox0x17ComputedData = computed(() => _.merge({}, componentState.tRadiox0x17.default, componentState.tRadiox0x17?.[state.screenSize]));

 const tCheckboxx0x18ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x18.default, componentState.tCheckboxx0x18?.[state.screenSize]));

 const tRectx0x19ComputedData = computed(() => _.merge({}, componentState.tRectx0x19.default, componentState.tRectx0x19?.[state.screenSize]));

 const tSearchx0x20ComputedData = computed(() => _.merge({}, componentState.tSearchx0x20.default, componentState.tSearchx0x20?.[state.screenSize]));

 const tTextx0x21ComputedData = computed(() => _.merge({}, componentState.tTextx0x21.default, componentState.tTextx0x21?.[state.screenSize]));

 const tComponentx0x22ComputedData = computed(() => _.merge({}, componentState.tComponentx0x22.default, componentState.tComponentx0x22?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tButtonx0x0ComputedData,
tImageBasex0x1ComputedData,
tListCardx0x2ComputedData,
tRectx0x3ComputedData,
tTablex0x4ComputedData,
tTablex0x5ComputedData,
tComponentx0x6ComputedData,
tTextx0x7ComputedData,
tDatePickerx0x8ComputedData,
tRectx0x9ComputedData,
tRectx0x10ComputedData,
tTextx0x11ComputedData,
tTextx0x12ComputedData,
tTextx0x13ComputedData,
tTextx0x14ComputedData,
tTextx0x15ComputedData,
tRadiox0x16ComputedData,
tRadiox0x17ComputedData,
tCheckboxx0x18ComputedData,
tRectx0x19ComputedData,
tSearchx0x20ComputedData,
tTextx0x21ComputedData,
tComponentx0x22ComputedData,
onclick1761117008297,
oncardClick1735029005919,
oncellClick1734608241064,
oncellClick1735184769666_0_0,
ondateChange1740967140116,
onclick1735205190641,
onchange1740720896505,
onchange1740720921561,
onchange1740720873822,
onclick1740712988309_0_0,
oninput1740741929704,
};
},
};