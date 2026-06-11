window.cockpitBittomComponent = {
template: 
`<div id="t-l-c-cockpitBittom" class="t-l-c-cockpitBittom" >` +
`<t-rect id="t-rect-9e7a.53a7f26fc" class="cockpitBittom-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-table id="t-table-b998.79da5f0ed" class="cockpitBittom-t-table-0-3"  :height="tTablex0x3ComputedData.height" :stripe="tTablex0x3ComputedData.stripe" :border="tTablex0x3ComputedData.border" :auto-scroll="replaceCssVariables(filterData(state.scrollType, componentPropBindingMap?.['t-table-b998.79da5f0ed']['autoScroll'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :speed="tTablex0x3ComputedData.speed" :columns="tTablex0x3ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-b998.79da5f0ed']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x3ComputedData.defaultSort" :c-style="tTablex0x3ComputedData.cStyle" @cell-click="oncellClick1765969460610">` +
`</t-table>` +
`<t-row id="t-row-32f4.e2508ff5b" class="cockpitBittom-t-row-0-4"  :c-style="tRowx0x4ComputedData.cStyle" :gutter="tRowx0x4ComputedData.gutter" :justify="tRowx0x4ComputedData.justify" :align="tRowx0x4ComputedData.align">` +
`<t-col id="t-col-2dd8.bfdccf751" class="cockpitBittom-t-col-0-4-0"  :span="tColx0x4x0ComputedData.span" :offset="tColx0x4x0ComputedData.offset" :push="tColx0x4x0ComputedData.push" :pull="tColx0x4x0ComputedData.pull" :c-style="tColx0x4x0ComputedData.cStyle">` +
`<t-text-common id="t-text-common-2e3a.ee9e1466d" class="cockpitBittom-t-text-common-0-4-0-0"  :label="tTextCommonx0x4x0x0ComputedData.label" :editable="tTextCommonx0x4x0x0ComputedData.editable" :c-style="tTextCommonx0x4x0x0ComputedData.cStyle">` +
`</t-text-common>` +
`</t-col>` +
`<t-col id="t-col-fad5.863ccd836" class="cockpitBittom-t-col-0-4-1"  :span="tColx0x4x1ComputedData.span" :offset="tColx0x4x1ComputedData.offset" :push="tColx0x4x1ComputedData.push" :pull="tColx0x4x1ComputedData.pull" :c-style="tColx0x4x1ComputedData.cStyle">` +
`<t-input id="t-input-f0e5.c05610435" class="cockpitBittom-t-input-0-4-1-0"  :type="tInputx0x4x1x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.pointName, componentPropBindingMap?.['t-input-f0e5.c05610435']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x4x1x0ComputedData.maxlength" :minlength="tInputx0x4x1x0ComputedData.minlength" :show-word-limit="tInputx0x4x1x0ComputedData.showWordLimit" :placeholder="tInputx0x4x1x0ComputedData.placeholder" :clearable="tInputx0x4x1x0ComputedData.clearable" :show-password="tInputx0x4x1x0ComputedData.showPassword" :disabled="tInputx0x4x1x0ComputedData.disabled" :prefix-icon="tInputx0x4x1x0ComputedData.prefix-icon" :suffix-icon="tInputx0x4x1x0ComputedData.suffix-icon" :rows="tInputx0x4x1x0ComputedData.rows" :autosize="tInputx0x4x1x0ComputedData.autosize" :name="tInputx0x4x1x0ComputedData.name" :readonly="tInputx0x4x1x0ComputedData.readonly" :step="tInputx0x4x1x0ComputedData.step" :autofocus="tInputx0x4x1x0ComputedData.autofocus" :form="tInputx0x4x1x0ComputedData.form" :label="tInputx0x4x1x0ComputedData.label" :tabindex="tInputx0x4x1x0ComputedData.tabindex" :validate-event="tInputx0x4x1x0ComputedData.validateEvent" :c-style="tInputx0x4x1x0ComputedData.cStyle" @change="onchange1763639146616">` +
`</t-input>` +
`<t-button id="t-button-1308.d00125424" class="cockpitBittom-t-button-0-4-1-1"  :label="tButtonx0x4x1x1ComputedData.label" :round="tButtonx0x4x1x1ComputedData.round" :plain="tButtonx0x4x1x1ComputedData.plain" :disabled="tButtonx0x4x1x1ComputedData.disabled" :type="tButtonx0x4x1x1ComputedData.type" :size="tButtonx0x4x1x1ComputedData.size" :native-type="tButtonx0x4x1x1ComputedData.native-type" :c-style="tButtonx0x4x1x1ComputedData.cStyle" @click="onclick1763637504861">` +
`</t-button>` +
`</t-col>` +
`<t-col id="t-col-aafb.223bfb7b8" class="cockpitBittom-t-col-0-4-2"  :span="tColx0x4x2ComputedData.span" :offset="tColx0x4x2ComputedData.offset" :push="tColx0x4x2ComputedData.push" :pull="tColx0x4x2ComputedData.pull" :c-style="tColx0x4x2ComputedData.cStyle">` +
`<t-select id="t-select-57c3.b1cff7ea2" class="cockpitBittom-t-select-0-4-2-0"  :active-value="replaceCssVariables(filterData(state.regionCode, componentPropBindingMap?.['t-select-57c3.b1cff7ea2']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.regionList, componentPropBindingMap?.['t-select-57c3.b1cff7ea2']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x4x2x0ComputedData.alias" :multiple="tSelectx0x4x2x0ComputedData.multiple" :placeholder="tSelectx0x4x2x0ComputedData.placeholder" :clearable="tSelectx0x4x2x0ComputedData.clearable" :disabled="tSelectx0x4x2x0ComputedData.disabled" :name="tSelectx0x4x2x0ComputedData.name" :autocomplete="tSelectx0x4x2x0ComputedData.autocomplete" :filterable="tSelectx0x4x2x0ComputedData.filterable" :no-match-text="tSelectx0x4x2x0ComputedData.no-match-text" :no-data-text="tSelectx0x4x2x0ComputedData.no-data-text" :c-style="tSelectx0x4x2x0ComputedData.cStyle" :scrollbar-thumb-color="tSelectx0x4x2x0ComputedData.scrollbarThumbColor" :scrollbar-track-color="tSelectx0x4x2x0ComputedData.scrollbarTrackColor" :scrollbar-width="tSelectx0x4x2x0ComputedData.scrollbarWidth" @change="onchange1763638254018">` +
`</t-select>` +
`</t-col>` +
`<t-col id="t-col-cc08.e1b8bb5c6" class="cockpitBittom-t-col-0-4-3"  :span="tColx0x4x3ComputedData.span" :offset="tColx0x4x3ComputedData.offset" :push="tColx0x4x3ComputedData.push" :pull="tColx0x4x3ComputedData.pull" :c-style="tColx0x4x3ComputedData.cStyle">` +
`<t-tabs-base id="t-tabs-base-e23a.31925c212" class="cockpitBittom-t-tabs-base-0-4-3-0"  :data="tTabsBasex0x4x3x0ComputedData.data" :space="tTabsBasex0x4x3x0ComputedData.space" :selected-tab-val="tTabsBasex0x4x3x0ComputedData.selectedTabVal" :inner-shadow-color="tTabsBasex0x4x3x0ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x4x3x0ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x4x3x0ComputedData.alias" :c-style="tTabsBasex0x4x3x0ComputedData.cStyle" @tab-click="ontabClick1763637132501">` +
`</t-tabs-base>` +
`</t-col>` +
`<t-col id="t-col-b331.9f4bb79f6" class="cockpitBittom-t-col-0-4-4"  :span="tColx0x4x4ComputedData.span" :offset="tColx0x4x4ComputedData.offset" :push="tColx0x4x4ComputedData.push" :pull="tColx0x4x4ComputedData.pull" :c-style="tColx0x4x4ComputedData.cStyle">` +
`<t-text-common id="t-text-common-3d7f.b5cf147b4" class="cockpitBittom-t-text-common-0-4-4-0"  :label="tTextCommonx0x4x4x0ComputedData.label" :editable="tTextCommonx0x4x4x0ComputedData.editable" :c-style="tTextCommonx0x4x4x0ComputedData.cStyle">` +
`</t-text-common>` +
`<t-switch id="t-switch-0982.898d5567e" class="cockpitBittom-t-switch-0-4-4-1"  :value="replaceCssVariables(filterData(state.layerSwitchStatus, componentPropBindingMap?.['t-switch-0982.898d5567e']['value'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tSwitchx0x4x4x1ComputedData.cStyle" @change="onchange1763637276915">` +
`</t-switch>` +
`<t-rect v-if="state.isScaled === true" id="t-rect-8f05.557bd6c93" class="cockpitBittom-t-rect-0-4-4-2"  :tip="tRectx0x4x4x2ComputedData.tip" :label="tRectx0x4x4x2ComputedData.label" :active="tRectx0x4x4x2ComputedData.active" :c-style="tRectx0x4x4x2ComputedData.cStyle" @click="onclick1774856174374">` +
`</t-rect>` +
`<t-rect v-if="state.isScaled === false" id="t-rect-5ed4.03a8663a" class="cockpitBittom-t-rect-0-4-4-3"  :tip="tRectx0x4x4x3ComputedData.tip" :label="tRectx0x4x4x3ComputedData.label" :active="tRectx0x4x4x3ComputedData.active" :c-style="tRectx0x4x4x3ComputedData.cStyle" @click="onclick1774856399174_0_0">` +
`</t-rect>` +
`</t-col>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-9e7a.53a7f26fc":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-24f7.d9c8ed99":{"attributeName":"tRectx0x1"},"t-rect-f301.9ed18f50a":{"attributeName":"tRectx0x2"},"t-table-b998.79da5f0ed":{"attributeName":"tTablex0x3","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-row-32f4.e2508ff5b":{"attributeName":"tRowx0x4","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-2dd8.bfdccf751":{"attributeName":"tColx0x4x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-2e3a.ee9e1466d":{"attributeName":"tTextCommonx0x4x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-fad5.863ccd836":{"attributeName":"tColx0x4x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-input-f0e5.c05610435":{"attributeName":"tInputx0x4x1x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]}},"t-button-1308.d00125424":{"attributeName":"tButtonx0x4x1x1","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-col-aafb.223bfb7b8":{"attributeName":"tColx0x4x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-57c3.b1cff7ea2":{"attributeName":"tSelectx0x4x2x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"scrollbarThumbColor":{"filters":[]},"scrollbarTrackColor":{"filters":[]},"scrollbarWidth":{"filters":[]}},"t-col-cc08.e1b8bb5c6":{"attributeName":"tColx0x4x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-e23a.31925c212":{"attributeName":"tTabsBasex0x4x3x0","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-col-b331.9f4bb79f6":{"attributeName":"tColx0x4x4","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-3d7f.b5cf147b4":{"attributeName":"tTextCommonx0x4x4x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-0982.898d5567e":{"attributeName":"tSwitchx0x4x4x1","value":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-8f05.557bd6c93":{"attributeName":"tRectx0x4x4x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5ed4.03a8663a":{"attributeName":"tRectx0x4x4x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   randomTime: "",
   scrollType: "rowScroll",
   waterLevelList: [],
   isScaled: false,
   regionList: [],
   layerSwitchStatus: false,
   listData1: [{"MONITORTIME":"2025-10-20 19:00:00","POINT_CODE":"83507830009HH1","POINT_NAME":"建瓯东门水厂水源地（松溪）","REGION_NAME":"南平市","CODE_WQDATASOURCETYPE":"drinkingWater","WQDATASOURCETYPENAME":"饮用水源地","CODE_WATERQUALITYLEVEL":"1","LATITUDE":"27.047222","LONGITUDE":"118.359444","WATER_NAME":"松溪","WATERQUALITYLEVELTARGETNAME":"III类","WATERQUALITYLEVELNAME":"Ⅰ类","w01010_value":22.27,"w01010_isstandards":"","w01010_waterlevel":"","w01010_overmultiple":"","w01001_value":7.48083,"w01001_isstandards":"","w01001_waterlevel":"","w01001_overmultiple":"","w01009_value":7.53565,"w01009_isstandards":"","w01009_waterlevel":"","w01009_overmultiple":"","w01014_value":137.8429,"w01014_isstandards":"","w01014_waterlevel":"","w01014_overmultiple":"","w01003_value":9.7829,"w01003_isstandards":"","w01003_waterlevel":"","w01003_overmultiple":"","w01019_value":"","w01019_isstandards":"","w01019_waterlevel":"","w01019_overmultiple":"","w21003_value":"","w21003_isstandards":"","w21003_waterlevel":"","w21003_overmultiple":"","w21011_value":"","w21011_isstandards":"","w21011_waterlevel":"","w21011_overmultiple":"","w21001_value":"","w21001_isstandards":"","w21001_waterlevel":"","w21001_overmultiple":"","w99062_value":"","w99062_isstandards":"","w99062_waterlevel":"","w99062_overmultiple":"","w01004_value":"","w01004_isstandards":"","w01004_waterlevel":"","w01004_overmultiple":"","w01010_standardvaluemax":"","w01010_standardvaluemin":"","w01001_standardvaluemax":"","w01001_standardvaluemin":"","w01009_standardvaluemax":"","w01009_standardvaluemin":"","w01014_standardvaluemax":"","w01014_standardvaluemin":"","w01003_standardvaluemax":"","w01003_standardvaluemin":"","w01019_standardvaluemax":"","w01019_standardvaluemin":"","w21003_standardvaluemax":"","w21003_standardvaluemin":"","w21011_standardvaluemax":"","w21011_standardvaluemin":"","w21001_standardvaluemax":"","w21001_standardvaluemin":"","w99062_standardvaluemax":"","w99062_standardvaluemin":"","w01004_standardvaluemax":"","w01004_standardvaluemin":"","depth":"","ISSTANDARDS":"1","canPosition":"true"},{"MONITORTIME":"2025-10-20 19:00:00","POINT_CODE":"83507830009HH1","POINT_NAME":"建瓯东门水厂水源地（松溪）","REGION_NAME":"南平市","CODE_WQDATASOURCETYPE":"drinkingWater","WQDATASOURCETYPENAME":"饮用水源地","CODE_WATERQUALITYLEVEL":"1","LATITUDE":"27.047222","LONGITUDE":"118.359444","WATER_NAME":"松溪","WATERQUALITYLEVELTARGETNAME":"III类","WATERQUALITYLEVELNAME":"Ⅰ类","w01010_value":22.27,"w01010_isstandards":"","w01010_waterlevel":"","w01010_overmultiple":"","w01001_value":7.48083,"w01001_isstandards":"","w01001_waterlevel":"","w01001_overmultiple":"","w01009_value":7.53565,"w01009_isstandards":"","w01009_waterlevel":"","w01009_overmultiple":"","w01014_value":137.8429,"w01014_isstandards":"","w01014_waterlevel":"","w01014_overmultiple":"","w01003_value":9.7829,"w01003_isstandards":"","w01003_waterlevel":"","w01003_overmultiple":"","w01019_value":"","w01019_isstandards":"","w01019_waterlevel":"","w01019_overmultiple":"","w21003_value":"","w21003_isstandards":"","w21003_waterlevel":"","w21003_overmultiple":"","w21011_value":"","w21011_isstandards":"","w21011_waterlevel":"","w21011_overmultiple":"","w21001_value":"","w21001_isstandards":"","w21001_waterlevel":"","w21001_overmultiple":"","w99062_value":"","w99062_isstandards":"","w99062_waterlevel":"","w99062_overmultiple":"","w01004_value":"","w01004_isstandards":"","w01004_waterlevel":"","w01004_overmultiple":"","w01010_standardvaluemax":"","w01010_standardvaluemin":"","w01001_standardvaluemax":"","w01001_standardvaluemin":"","w01009_standardvaluemax":"","w01009_standardvaluemin":"","w01014_standardvaluemax":"","w01014_standardvaluemin":"","w01003_standardvaluemax":"","w01003_standardvaluemin":"","w01019_standardvaluemax":"","w01019_standardvaluemin":"","w21003_standardvaluemax":"","w21003_standardvaluemin":"","w21011_standardvaluemax":"","w21011_standardvaluemin":"","w21001_standardvaluemax":"","w21001_standardvaluemin":"","w99062_standardvaluemax":"","w99062_standardvaluemin":"","w01004_standardvaluemax":"","w01004_standardvaluemin":"","depth":"","ISSTANDARDS":"1"},{"MONITORTIME":"2025-10-20 19:00:00","POINT_CODE":"83507830009HH1","POINT_NAME":"建瓯东门水厂水源地（松溪）","REGION_NAME":"南平市","CODE_WQDATASOURCETYPE":"drinkingWater","WQDATASOURCETYPENAME":"饮用水源地","CODE_WATERQUALITYLEVEL":"1","LATITUDE":"27.047222","LONGITUDE":"118.359444","WATER_NAME":"松溪","WATERQUALITYLEVELTARGETNAME":"III类","WATERQUALITYLEVELNAME":"Ⅰ类","w01010_value":22.27,"w01010_isstandards":"","w01010_waterlevel":"","w01010_overmultiple":"","w01001_value":7.48083,"w01001_isstandards":"","w01001_waterlevel":"","w01001_overmultiple":"","w01009_value":7.53565,"w01009_isstandards":"","w01009_waterlevel":"","w01009_overmultiple":"","w01014_value":137.8429,"w01014_isstandards":"","w01014_waterlevel":"","w01014_overmultiple":"","w01003_value":9.7829,"w01003_isstandards":"","w01003_waterlevel":"","w01003_overmultiple":"","w01019_value":"","w01019_isstandards":"","w01019_waterlevel":"","w01019_overmultiple":"","w21003_value":"","w21003_isstandards":"","w21003_waterlevel":"","w21003_overmultiple":"","w21011_value":"","w21011_isstandards":"","w21011_waterlevel":"","w21011_overmultiple":"","w21001_value":"","w21001_isstandards":"","w21001_waterlevel":"","w21001_overmultiple":"","w99062_value":"","w99062_isstandards":"","w99062_waterlevel":"","w99062_overmultiple":"","w01004_value":"","w01004_isstandards":"","w01004_waterlevel":"","w01004_overmultiple":"","w01010_standardvaluemax":"","w01010_standardvaluemin":"","w01001_standardvaluemax":"","w01001_standardvaluemin":"","w01009_standardvaluemax":"","w01009_standardvaluemin":"","w01014_standardvaluemax":"","w01014_standardvaluemin":"","w01003_standardvaluemax":"","w01003_standardvaluemin":"","w01019_standardvaluemax":"","w01019_standardvaluemin":"","w21003_standardvaluemax":"","w21003_standardvaluemin":"","w21011_standardvaluemax":"","w21011_standardvaluemin":"","w21001_standardvaluemax":"","w21001_standardvaluemin":"","w99062_standardvaluemax":"","w99062_standardvaluemin":"","w01004_standardvaluemax":"","w01004_standardvaluemin":"","depth":"","ISSTANDARDS":"1"},{"MONITORTIME":"2025-10-20 19:00:00","POINT_CODE":"83507830009HH1","POINT_NAME":"建瓯东门水厂水源地（松溪）","REGION_NAME":"南平市","CODE_WQDATASOURCETYPE":"drinkingWater","WQDATASOURCETYPENAME":"饮用水源地","CODE_WATERQUALITYLEVEL":"1","LATITUDE":"27.047222","LONGITUDE":"118.359444","WATER_NAME":"松溪","WATERQUALITYLEVELTARGETNAME":"III类","WATERQUALITYLEVELNAME":"Ⅰ类","w01010_value":22.27,"w01010_isstandards":"","w01010_waterlevel":"","w01010_overmultiple":"","w01001_value":7.48083,"w01001_isstandards":"","w01001_waterlevel":"","w01001_overmultiple":"","w01009_value":7.53565,"w01009_isstandards":"","w01009_waterlevel":"","w01009_overmultiple":"","w01014_value":137.8429,"w01014_isstandards":"","w01014_waterlevel":"","w01014_overmultiple":"","w01003_value":9.7829,"w01003_isstandards":"","w01003_waterlevel":"","w01003_overmultiple":"","w01019_value":"","w01019_isstandards":"","w01019_waterlevel":"","w01019_overmultiple":"","w21003_value":"","w21003_isstandards":"","w21003_waterlevel":"","w21003_overmultiple":"","w21011_value":"","w21011_isstandards":"","w21011_waterlevel":"","w21011_overmultiple":"","w21001_value":"","w21001_isstandards":"","w21001_waterlevel":"","w21001_overmultiple":"","w99062_value":"","w99062_isstandards":"","w99062_waterlevel":"","w99062_overmultiple":"","w01004_value":"","w01004_isstandards":"","w01004_waterlevel":"","w01004_overmultiple":"","w01010_standardvaluemax":"","w01010_standardvaluemin":"","w01001_standardvaluemax":"","w01001_standardvaluemin":"","w01009_standardvaluemax":"","w01009_standardvaluemin":"","w01014_standardvaluemax":"","w01014_standardvaluemin":"","w01003_standardvaluemax":"","w01003_standardvaluemin":"","w01019_standardvaluemax":"","w01019_standardvaluemin":"","w21003_standardvaluemax":"","w21003_standardvaluemin":"","w21011_standardvaluemax":"","w21011_standardvaluemin":"","w21001_standardvaluemax":"","w21001_standardvaluemin":"","w99062_standardvaluemax":"","w99062_standardvaluemin":"","w01004_standardvaluemax":"","w01004_standardvaluemin":"","depth":"","ISSTANDARDS":"1","canPosition":"true"}],
   listData: [{"MONITORTIME":"2025-10-20 19:00:00","POINT_CODE":"83507830009HH1","POINT_NAME":"建瓯东门水厂水源地（松溪）","REGION_NAME":"南平市","CODE_WQDATASOURCETYPE":"drinkingWater","WQDATASOURCETYPENAME":"饮用水源地","CODE_WATERQUALITYLEVEL":"1","LATITUDE":"27.047222","LONGITUDE":"118.359444","WATER_NAME":"松溪","WATERQUALITYLEVELTARGETNAME":"III类","WATERQUALITYLEVELNAME":"Ⅰ类","w01010_value":22.27,"w01010_isstandards":"","w01010_waterlevel":"","w01010_overmultiple":"","w01001_value":7.48083,"w01001_isstandards":"","w01001_waterlevel":"","w01001_overmultiple":"","w01009_value":7.53565,"w01009_isstandards":"","w01009_waterlevel":"","w01009_overmultiple":"","w01014_value":137.8429,"w01014_isstandards":"","w01014_waterlevel":"","w01014_overmultiple":"","w01003_value":9.7829,"w01003_isstandards":"","w01003_waterlevel":"","w01003_overmultiple":"","w01019_value":"","w01019_isstandards":"","w01019_waterlevel":"","w01019_overmultiple":"","w21003_value":"","w21003_isstandards":"","w21003_waterlevel":"","w21003_overmultiple":"","w21011_value":"","w21011_isstandards":"","w21011_waterlevel":"","w21011_overmultiple":"","w21001_value":"","w21001_isstandards":"","w21001_waterlevel":"","w21001_overmultiple":"","w99062_value":"","w99062_isstandards":"","w99062_waterlevel":"","w99062_overmultiple":"","w01004_value":"","w01004_isstandards":"","w01004_waterlevel":"","w01004_overmultiple":"","w01010_standardvaluemax":"","w01010_standardvaluemin":"","w01001_standardvaluemax":"","w01001_standardvaluemin":"","w01009_standardvaluemax":"","w01009_standardvaluemin":"","w01014_standardvaluemax":"","w01014_standardvaluemin":"","w01003_standardvaluemax":"","w01003_standardvaluemin":"","w01019_standardvaluemax":"","w01019_standardvaluemin":"","w21003_standardvaluemax":"","w21003_standardvaluemin":"","w21011_standardvaluemax":"","w21011_standardvaluemin":"","w21001_standardvaluemax":"","w21001_standardvaluemin":"","w99062_standardvaluemax":"","w99062_standardvaluemin":"","w01004_standardvaluemax":"","w01004_standardvaluemin":"","depth":"","ISSTANDARDS":"1"},{"MONITORTIME":"2025-10-20 19:00:00","POINT_CODE":"83507830009HH1","POINT_NAME":"建瓯东门水厂水源地（松溪）","REGION_NAME":"南平市","CODE_WQDATASOURCETYPE":"drinkingWater","WQDATASOURCETYPENAME":"饮用水源地","CODE_WATERQUALITYLEVEL":"1","LATITUDE":"27.047222","LONGITUDE":"118.359444","WATER_NAME":"松溪","WATERQUALITYLEVELTARGETNAME":"III类","WATERQUALITYLEVELNAME":"Ⅰ类","w01010_value":22.27,"w01010_isstandards":"","w01010_waterlevel":"","w01010_overmultiple":"","w01001_value":7.48083,"w01001_isstandards":"","w01001_waterlevel":"","w01001_overmultiple":"","w01009_value":7.53565,"w01009_isstandards":"","w01009_waterlevel":"","w01009_overmultiple":"","w01014_value":137.8429,"w01014_isstandards":"","w01014_waterlevel":"","w01014_overmultiple":"","w01003_value":9.7829,"w01003_isstandards":"","w01003_waterlevel":"","w01003_overmultiple":"","w01019_value":"","w01019_isstandards":"","w01019_waterlevel":"","w01019_overmultiple":"","w21003_value":"","w21003_isstandards":"","w21003_waterlevel":"","w21003_overmultiple":"","w21011_value":"","w21011_isstandards":"","w21011_waterlevel":"","w21011_overmultiple":"","w21001_value":"","w21001_isstandards":"","w21001_waterlevel":"","w21001_overmultiple":"","w99062_value":"","w99062_isstandards":"","w99062_waterlevel":"","w99062_overmultiple":"","w01004_value":"","w01004_isstandards":"","w01004_waterlevel":"","w01004_overmultiple":"","w01010_standardvaluemax":"","w01010_standardvaluemin":"","w01001_standardvaluemax":"","w01001_standardvaluemin":"","w01009_standardvaluemax":"","w01009_standardvaluemin":"","w01014_standardvaluemax":"","w01014_standardvaluemin":"","w01003_standardvaluemax":"","w01003_standardvaluemin":"","w01019_standardvaluemax":"","w01019_standardvaluemin":"","w21003_standardvaluemax":"","w21003_standardvaluemin":"","w21011_standardvaluemax":"","w21011_standardvaluemin":"","w21001_standardvaluemax":"","w21001_standardvaluemin":"","w99062_standardvaluemax":"","w99062_standardvaluemin":"","w01004_standardvaluemax":"","w01004_standardvaluemin":"","depth":"","ISSTANDARDS":"1"},{"MONITORTIME":"2025-10-20 19:00:00","POINT_CODE":"83507830009HH1","POINT_NAME":"建瓯东门水厂水源地（松溪）","REGION_NAME":"南平市","CODE_WQDATASOURCETYPE":"drinkingWater","WQDATASOURCETYPENAME":"饮用水源地","CODE_WATERQUALITYLEVEL":"1","LATITUDE":"27.047222","LONGITUDE":"118.359444","WATER_NAME":"松溪","WATERQUALITYLEVELTARGETNAME":"III类","WATERQUALITYLEVELNAME":"Ⅰ类","w01010_value":22.27,"w01010_isstandards":"","w01010_waterlevel":"","w01010_overmultiple":"","w01001_value":7.48083,"w01001_isstandards":"","w01001_waterlevel":"","w01001_overmultiple":"","w01009_value":7.53565,"w01009_isstandards":"","w01009_waterlevel":"","w01009_overmultiple":"","w01014_value":137.8429,"w01014_isstandards":"","w01014_waterlevel":"","w01014_overmultiple":"","w01003_value":9.7829,"w01003_isstandards":"","w01003_waterlevel":"","w01003_overmultiple":"","w01019_value":"","w01019_isstandards":"","w01019_waterlevel":"","w01019_overmultiple":"","w21003_value":"","w21003_isstandards":"","w21003_waterlevel":"","w21003_overmultiple":"","w21011_value":"","w21011_isstandards":"","w21011_waterlevel":"","w21011_overmultiple":"","w21001_value":"","w21001_isstandards":"","w21001_waterlevel":"","w21001_overmultiple":"","w99062_value":"","w99062_isstandards":"","w99062_waterlevel":"","w99062_overmultiple":"","w01004_value":"","w01004_isstandards":"","w01004_waterlevel":"","w01004_overmultiple":"","w01010_standardvaluemax":"","w01010_standardvaluemin":"","w01001_standardvaluemax":"","w01001_standardvaluemin":"","w01009_standardvaluemax":"","w01009_standardvaluemin":"","w01014_standardvaluemax":"","w01014_standardvaluemin":"","w01003_standardvaluemax":"","w01003_standardvaluemin":"","w01019_standardvaluemax":"","w01019_standardvaluemin":"","w21003_standardvaluemax":"","w21003_standardvaluemin":"","w21011_standardvaluemax":"","w21011_standardvaluemin":"","w21001_standardvaluemax":"","w21001_standardvaluemin":"","w99062_standardvaluemax":"","w99062_standardvaluemin":"","w01004_standardvaluemax":"","w01004_standardvaluemin":"","depth":"","ISSTANDARDS":"1"},{"MONITORTIME":"2025-10-20 19:00:00","POINT_CODE":"83507830009HH1","POINT_NAME":"建瓯东门水厂水源地（松溪）","REGION_NAME":"南平市","CODE_WQDATASOURCETYPE":"drinkingWater","WQDATASOURCETYPENAME":"饮用水源地","CODE_WATERQUALITYLEVEL":"1","LATITUDE":"27.047222","LONGITUDE":"118.359444","WATER_NAME":"松溪","WATERQUALITYLEVELTARGETNAME":"III类","WATERQUALITYLEVELNAME":"Ⅰ类","w01010_value":22.27,"w01010_isstandards":"","w01010_waterlevel":"","w01010_overmultiple":"","w01001_value":7.48083,"w01001_isstandards":"","w01001_waterlevel":"","w01001_overmultiple":"","w01009_value":7.53565,"w01009_isstandards":"","w01009_waterlevel":"","w01009_overmultiple":"","w01014_value":137.8429,"w01014_isstandards":"","w01014_waterlevel":"","w01014_overmultiple":"","w01003_value":9.7829,"w01003_isstandards":"","w01003_waterlevel":"","w01003_overmultiple":"","w01019_value":"","w01019_isstandards":"","w01019_waterlevel":"","w01019_overmultiple":"","w21003_value":"","w21003_isstandards":"","w21003_waterlevel":"","w21003_overmultiple":"","w21011_value":"","w21011_isstandards":"","w21011_waterlevel":"","w21011_overmultiple":"","w21001_value":"","w21001_isstandards":"","w21001_waterlevel":"","w21001_overmultiple":"","w99062_value":"","w99062_isstandards":"","w99062_waterlevel":"","w99062_overmultiple":"","w01004_value":"","w01004_isstandards":"","w01004_waterlevel":"","w01004_overmultiple":"","w01010_standardvaluemax":"","w01010_standardvaluemin":"","w01001_standardvaluemax":"","w01001_standardvaluemin":"","w01009_standardvaluemax":"","w01009_standardvaluemin":"","w01014_standardvaluemax":"","w01014_standardvaluemin":"","w01003_standardvaluemax":"","w01003_standardvaluemin":"","w01019_standardvaluemax":"","w01019_standardvaluemin":"","w21003_standardvaluemax":"","w21003_standardvaluemin":"","w21011_standardvaluemax":"","w21011_standardvaluemin":"","w21001_standardvaluemax":"","w21001_standardvaluemin":"","w99062_standardvaluemax":"","w99062_standardvaluemin":"","w01004_standardvaluemax":"","w01004_standardvaluemin":"","depth":"","ISSTANDARDS":"1"}],
   regionCode: "350700000000",
   controlLevel: "1",
   layerSwitch: false,
   dataSourceType: "surfaceWater",
   monitorTime: "2025-10-20 19",
   pointName: "",
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
            default: {"width":"100%","height":"100%","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"0px","top":"0px","backgroundImage":"","-webkit-mask-image":"","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-21/bb51ca06e0cc4048b7ee6aac2bb1517a.png)","fillType":"image","backgroundRepeat":"no-repeat"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"0px","top":"0px","backgroundImage":"","-webkit-mask-image":"","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-21/bb51ca06e0cc4048b7ee6aac2bb1517a.png)","fillType":"image","backgroundRepeat":"no-repeat"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTablex0x3: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 60px)","backgroundColor":"","position":"unset","left":"0px","top":"60px","animationName":"","background":"rgba(20, 112, 204, 0)","fillType":"color"},
            
            },
 default: { 
 
height:"100%",
stripe:true,
border:false,
autoScroll:"",
speed:"5",
columns:[{"label":"定位","type":"state","key":"","stateKey":"canPosition","width":"40PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2023-01-05/95d04d0c780c4e8186c44fb450ba8fe5.png","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2023-01-05/95d04d0c780c4e8186c44fb450ba8fe5.png","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2023-01-05/95d04d0c780c4e8186c44fb450ba8fe5.png"},"cellStyle":{}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2023-01-05/95d04d0c780c4e8186c44fb450ba8fe5.png","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","filter":"grayscale(1)","backgroundImage":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"站点","key":"POINT_NAME","align":"left","operationList":[],"stateList":[],"style":{"fontStyle":{"display":"block","color":"rgba(255, 255, 255, 1)","fontSize":"var(--t-font-size-18)","padding":"0 0 0 16px","fontWeight":"400"}},"width":"120px","minWidth":"140PX","headerAlign":"center","showOverflowTooltip":true},{"label":"行政区","key":"REGION_NAME","align":"center","operationList":[],"stateList":[],"width":"70px","minWidth":"100PX"},{"label":"水质现状","key":"WATERQUALITYLEVELNAME","stateKey":"WATERQUALITYLEVELNAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"60PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"-","fontStyle":{"fontSize":"var(--t-font-size-18)","width":"40PX","height":"PX","background":"","borderRadius":"2PX","borderWidth":"0PX"}}],"style":{"cellStyle":{"background":""},"fontStyle":{"fontWeight":"bolder","fontSize":"16PX","color":null,"padding":"","borderRadius":"4PX"}},"showOverflowTooltip":false},{"label":"pH","key":"w01001_value","align":"center","operationList":[],"stateList":[]},{"label":"氨氮（mg/L）","key":"w21003_value","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"var(--t-font-size-18)","fontWeight":"400"}}},{"label":"总磷（mg/L）","key":"w21011_value","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"var(--t-font-size-18)","fontWeight":"400"}}},{"label":"溶解氧（mg/L）","key":"w01009_value","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"var(--t-font-size-18)","fontWeight":"400"}}},{"label":"IMn（mg/L）","key":"w01019_value","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"var(--t-font-size-18)","fontWeight":"400"}}},{"label":"日期","key":"MONITORTIME","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"var(--t-font-size-18)","fontWeight":"400"}},"width":"148px","minWidth":"70PX"}],
data:[{"MONITORTIME":"2025-10-20 19:00:00","POINT_CODE":"83507830009HH1","POINT_NAME":"建瓯东门水厂水源地（松溪）","REGION_NAME":"南平市","CODE_WQDATASOURCETYPE":"drinkingWater","WQDATASOURCETYPENAME":"饮用水源地","CODE_WATERQUALITYLEVEL":"1","LATITUDE":"27.047222","LONGITUDE":"118.359444","WATER_NAME":"松溪","WATERQUALITYLEVELTARGETNAME":"III类","WATERQUALITYLEVELNAME":"Ⅰ类","w01010_value":22.27,"w01010_isstandards":"","w01010_waterlevel":"","w01010_overmultiple":"","w01001_value":7.48083,"w01001_isstandards":"","w01001_waterlevel":"","w01001_overmultiple":"","w01009_value":7.53565,"w01009_isstandards":"","w01009_waterlevel":"","w01009_overmultiple":"","w01014_value":137.8429,"w01014_isstandards":"","w01014_waterlevel":"","w01014_overmultiple":"","w01003_value":9.7829,"w01003_isstandards":"","w01003_waterlevel":"","w01003_overmultiple":"","w01019_value":"","w01019_isstandards":"","w01019_waterlevel":"","w01019_overmultiple":"","w21003_value":"","w21003_isstandards":"","w21003_waterlevel":"","w21003_overmultiple":"","w21011_value":"","w21011_isstandards":"","w21011_waterlevel":"","w21011_overmultiple":"","w21001_value":"","w21001_isstandards":"","w21001_waterlevel":"","w21001_overmultiple":"","w99062_value":"","w99062_isstandards":"","w99062_waterlevel":"","w99062_overmultiple":"","w01004_value":"","w01004_isstandards":"","w01004_waterlevel":"","w01004_overmultiple":"","w01010_standardvaluemax":"","w01010_standardvaluemin":"","w01001_standardvaluemax":"","w01001_standardvaluemin":"","w01009_standardvaluemax":"","w01009_standardvaluemin":"","w01014_standardvaluemax":"","w01014_standardvaluemin":"","w01003_standardvaluemax":"","w01003_standardvaluemin":"","w01019_standardvaluemax":"","w01019_standardvaluemin":"","w21003_standardvaluemax":"","w21003_standardvaluemin":"","w21011_standardvaluemax":"","w21011_standardvaluemin":"","w21001_standardvaluemax":"","w21001_standardvaluemin":"","w99062_standardvaluemax":"","w99062_standardvaluemin":"","w01004_standardvaluemax":"","w01004_standardvaluemin":"","depth":"","ISSTANDARDS":"1"},{"MONITORTIME":"2025-10-20 19:00:00","POINT_CODE":"83507830009HH1","POINT_NAME":"建瓯东门水厂水源地（松溪）","REGION_NAME":"南平市","CODE_WQDATASOURCETYPE":"drinkingWater","WQDATASOURCETYPENAME":"饮用水源地","CODE_WATERQUALITYLEVEL":"1","LATITUDE":"27.047222","LONGITUDE":"118.359444","WATER_NAME":"松溪","WATERQUALITYLEVELTARGETNAME":"III类","WATERQUALITYLEVELNAME":"Ⅰ类","w01010_value":22.27,"w01010_isstandards":"","w01010_waterlevel":"","w01010_overmultiple":"","w01001_value":7.48083,"w01001_isstandards":"","w01001_waterlevel":"","w01001_overmultiple":"","w01009_value":7.53565,"w01009_isstandards":"","w01009_waterlevel":"","w01009_overmultiple":"","w01014_value":137.8429,"w01014_isstandards":"","w01014_waterlevel":"","w01014_overmultiple":"","w01003_value":9.7829,"w01003_isstandards":"","w01003_waterlevel":"","w01003_overmultiple":"","w01019_value":"","w01019_isstandards":"","w01019_waterlevel":"","w01019_overmultiple":"","w21003_value":"","w21003_isstandards":"","w21003_waterlevel":"","w21003_overmultiple":"","w21011_value":"","w21011_isstandards":"","w21011_waterlevel":"","w21011_overmultiple":"","w21001_value":"","w21001_isstandards":"","w21001_waterlevel":"","w21001_overmultiple":"","w99062_value":"","w99062_isstandards":"","w99062_waterlevel":"","w99062_overmultiple":"","w01004_value":"","w01004_isstandards":"","w01004_waterlevel":"","w01004_overmultiple":"","w01010_standardvaluemax":"","w01010_standardvaluemin":"","w01001_standardvaluemax":"","w01001_standardvaluemin":"","w01009_standardvaluemax":"","w01009_standardvaluemin":"","w01014_standardvaluemax":"","w01014_standardvaluemin":"","w01003_standardvaluemax":"","w01003_standardvaluemin":"","w01019_standardvaluemax":"","w01019_standardvaluemin":"","w21003_standardvaluemax":"","w21003_standardvaluemin":"","w21011_standardvaluemax":"","w21011_standardvaluemin":"","w21001_standardvaluemax":"","w21001_standardvaluemin":"","w99062_standardvaluemax":"","w99062_standardvaluemin":"","w01004_standardvaluemax":"","w01004_standardvaluemin":"","depth":"","ISSTANDARDS":"1"},{"MONITORTIME":"2025-10-20 19:00:00","POINT_CODE":"83507830009HH1","POINT_NAME":"建瓯东门水厂水源地（松溪）","REGION_NAME":"南平市","CODE_WQDATASOURCETYPE":"drinkingWater","WQDATASOURCETYPENAME":"饮用水源地","CODE_WATERQUALITYLEVEL":"1","LATITUDE":"27.047222","LONGITUDE":"118.359444","WATER_NAME":"松溪","WATERQUALITYLEVELTARGETNAME":"III类","WATERQUALITYLEVELNAME":"Ⅰ类","w01010_value":22.27,"w01010_isstandards":"","w01010_waterlevel":"","w01010_overmultiple":"","w01001_value":7.48083,"w01001_isstandards":"","w01001_waterlevel":"","w01001_overmultiple":"","w01009_value":7.53565,"w01009_isstandards":"","w01009_waterlevel":"","w01009_overmultiple":"","w01014_value":137.8429,"w01014_isstandards":"","w01014_waterlevel":"","w01014_overmultiple":"","w01003_value":9.7829,"w01003_isstandards":"","w01003_waterlevel":"","w01003_overmultiple":"","w01019_value":"","w01019_isstandards":"","w01019_waterlevel":"","w01019_overmultiple":"","w21003_value":"","w21003_isstandards":"","w21003_waterlevel":"","w21003_overmultiple":"","w21011_value":"","w21011_isstandards":"","w21011_waterlevel":"","w21011_overmultiple":"","w21001_value":"","w21001_isstandards":"","w21001_waterlevel":"","w21001_overmultiple":"","w99062_value":"","w99062_isstandards":"","w99062_waterlevel":"","w99062_overmultiple":"","w01004_value":"","w01004_isstandards":"","w01004_waterlevel":"","w01004_overmultiple":"","w01010_standardvaluemax":"","w01010_standardvaluemin":"","w01001_standardvaluemax":"","w01001_standardvaluemin":"","w01009_standardvaluemax":"","w01009_standardvaluemin":"","w01014_standardvaluemax":"","w01014_standardvaluemin":"","w01003_standardvaluemax":"","w01003_standardvaluemin":"","w01019_standardvaluemax":"","w01019_standardvaluemin":"","w21003_standardvaluemax":"","w21003_standardvaluemin":"","w21011_standardvaluemax":"","w21011_standardvaluemin":"","w21001_standardvaluemax":"","w21001_standardvaluemin":"","w99062_standardvaluemax":"","w99062_standardvaluemin":"","w01004_standardvaluemax":"","w01004_standardvaluemin":"","depth":"","ISSTANDARDS":"1"},{"MONITORTIME":"2025-10-20 19:00:00","POINT_CODE":"83507830009HH1","POINT_NAME":"建瓯东门水厂水源地（松溪）","REGION_NAME":"南平市","CODE_WQDATASOURCETYPE":"drinkingWater","WQDATASOURCETYPENAME":"饮用水源地","CODE_WATERQUALITYLEVEL":"1","LATITUDE":"27.047222","LONGITUDE":"118.359444","WATER_NAME":"松溪","WATERQUALITYLEVELTARGETNAME":"III类","WATERQUALITYLEVELNAME":"Ⅰ类","w01010_value":22.27,"w01010_isstandards":"","w01010_waterlevel":"","w01010_overmultiple":"","w01001_value":7.48083,"w01001_isstandards":"","w01001_waterlevel":"","w01001_overmultiple":"","w01009_value":7.53565,"w01009_isstandards":"","w01009_waterlevel":"","w01009_overmultiple":"","w01014_value":137.8429,"w01014_isstandards":"","w01014_waterlevel":"","w01014_overmultiple":"","w01003_value":9.7829,"w01003_isstandards":"","w01003_waterlevel":"","w01003_overmultiple":"","w01019_value":"","w01019_isstandards":"","w01019_waterlevel":"","w01019_overmultiple":"","w21003_value":"","w21003_isstandards":"","w21003_waterlevel":"","w21003_overmultiple":"","w21011_value":"","w21011_isstandards":"","w21011_waterlevel":"","w21011_overmultiple":"","w21001_value":"","w21001_isstandards":"","w21001_waterlevel":"","w21001_overmultiple":"","w99062_value":"","w99062_isstandards":"","w99062_waterlevel":"","w99062_overmultiple":"","w01004_value":"","w01004_isstandards":"","w01004_waterlevel":"","w01004_overmultiple":"","w01010_standardvaluemax":"","w01010_standardvaluemin":"","w01001_standardvaluemax":"","w01001_standardvaluemin":"","w01009_standardvaluemax":"","w01009_standardvaluemin":"","w01014_standardvaluemax":"","w01014_standardvaluemin":"","w01003_standardvaluemax":"","w01003_standardvaluemin":"","w01019_standardvaluemax":"","w01019_standardvaluemin":"","w21003_standardvaluemax":"","w21003_standardvaluemin":"","w21011_standardvaluemax":"","w21011_standardvaluemin":"","w21001_standardvaluemax":"","w21001_standardvaluemin":"","w99062_standardvaluemax":"","w99062_standardvaluemin":"","w01004_standardvaluemax":"","w01004_standardvaluemin":"","depth":"","ISSTANDARDS":"1"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 60px)","backgroundColor":"","position":"unset","left":"0px","top":"60px","animationName":"","background":"rgba(20, 112, 204, 0)","fillType":"color"}},"headerCell":{"default":{"borderBottom":"0px none rgba(20,112,204,0.3)","borderLeft":"0px none rgba(20,112,204,0.3)","borderRight":"0px none rgba(20,112,204,0.3)","borderTop":"0px none rgba(20,112,204,0.3)","color":"#fff","backgroundColor":"rgba(20, 112, 204, 0.3)","fontSize":"var(--t-font-size-18)","lineHeight":"var(--t-font-size-18)","height":"38px","marginTop":"0px","paddingBottom":"0px","paddingTop":"0px","marginBottom":"0px","paddingLeft":"0px"}},"bodyCell":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.1)","borderBottom":"0px none rgba(24,37,64,1)","borderLeft":"0px none rgba(24,37,64,1)","borderRight":"0px none rgba(24,37,64,1)","borderTop":"0px none rgba(24,37,64,1)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingBottom":"0px","paddingTop":"0px","lineHeight":"40px","fontSize":"var(--t-font-size-18)","fontFamily":"微软雅黑","fontWeight":"400","background":"rgba(0, 0, 0, 0)","fillType":"color"},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(0, 59, 132, 0.3)"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)"}},"rowWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}}}, 
 },
},
tRowx0x4: {
defaultStyle: {
            default: {"width":"100%","height":"30px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"16px","paddingLeft":"60px","paddingRight":"10px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"30px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"16px","paddingLeft":"60px","paddingRight":"10px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x4x0: {
defaultStyle: {
            default: {"width":"100px","height":"30px","display":"flex","justifyContent":"left","alignItems":"center"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"30px","display":"flex","justifyContent":"left","alignItems":"center"}}}, 
 },
},
tTextCommonx0x4x0x0: {
defaultStyle: {
            default: {"width":"83px","height":"30px","color":"#ffffff","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"61px","top":"18px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"自动站",
editable:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"30px","color":"#ffffff","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"61px","top":"18px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tColx0x4x1: {
defaultStyle: {
            default: {"width":"100px","height":"30px","display":"flex","justifyContent":"left","alignItems":"center","gap":"auto"},
            
            },
 default: { 
 
span:6,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"30px","display":"flex","justifyContent":"left","alignItems":"center","gap":"auto"}}}, 
 },
},
tInputx0x4x1x0: {
defaultStyle: {
            default: {"width":"160px","height":"26px","position":"unset","left":"173px","top":"19px","backgroundColor":"var(--t-select-fill-bg)","fontSize":"var(--t-font-size-18)","color":"#fff","lineHeight":"var(--t-font-size-18)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入断面名称",
clearable:false,
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
cStyle:{"wrapper":{"default":{"width":"160px","height":"26px","position":"unset","left":"173px","top":"19px","backgroundColor":"var(--t-select-fill-bg)","fontSize":"var(--t-font-size-18)","color":"#fff","lineHeight":"var(--t-font-size-18)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)"},"focus":{"borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"hover":{"borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"}},"placeholder":{"default":{"fontSize":"var(--t-font-size-18)","lineHeight":"var(--t-font-size-18)","color":"#fff"}}}, 
 },
},
tButtonx0x4x1x1: {
defaultStyle: {
            default: {"width":"49px","height":"26px","background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomRightRadius":"3px","borderBottomLeftRadius":"3px","position":"unset","left":"359px","top":"19px","backgroundColor":"#2C80FF","fontSize":"14px","lineHeight":"14px","paddingLeft":"unset","marginLeft":"15px"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"49px","height":"26px","background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomRightRadius":"3px","borderBottomLeftRadius":"3px","position":"unset","left":"359px","top":"19px","backgroundColor":"#2C80FF","fontSize":"14px","lineHeight":"14px","paddingLeft":"unset","marginLeft":"15px"},"hover":{"background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)"},"active":{"background":"rgb(0,52,181)","border":"auto !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)"},"disabled":{"background":"#699EF5","border":"unset !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)"}},"text":{"default":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","lineHeight":"var(--t-font-size-18)","color":"rgba(255, 252, 255, 1)","background":"unset","backgroundClip":"unset","display":"block !important","width":"100%","height":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"active":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 0.9)","background":"unset","backgroundClip":"unset"},"hover":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","lineHeight":"var(--t-font-size-18)","color":"rgba(255, 252, 255, 0.9)","background":"unset","backgroundClip":"unset"},"disabled":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","fontSize":"12px","letterSpacing":"0px","lineHeight":"12px","color":"rgba(255, 252, 255, 1)","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tColx0x4x2: {
defaultStyle: {
            default: {"width":"100px","height":"30px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"30px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tSelectx0x4x2x0: {
defaultStyle: {
            default: {"width":"147px","height":"26px","fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","textAlign":"left","color":"var(--business-white)","background":"var(--t-input-background-color)","fillType":"color","backgroundClip":"unset","position":"unset","lineHeight":"12px","border":"auto !important","borderTop":"1px solid var(--business-select-border)","borderLeft":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"var(--t-select-fill-bg)","left":"436px","top":"19px"},
            
            },
 default: { 
 
activeValue:"350700000000",
options:[],
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
cStyle:{"wrapper":{"default":{"width":"147px","height":"26px","fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","textAlign":"left","color":"var(--business-white)","background":"var(--t-input-background-color)","fillType":"color","backgroundClip":"unset","position":"unset","lineHeight":"12px","border":"auto !important","borderTop":"1px solid var(--business-select-border)","borderLeft":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"var(--t-select-fill-bg)","left":"436px","top":"19px"},"focus":{"color":"var(--t-white)","backgroundClip":"unset","border":"auto !important","borderTop":"1px Solid var(--t-input-focus-border)","borderLeft":"1px Solid var(--t-input-focus-border)","borderBottom":"1px Solid var(--t-input-focus-border)","borderRight":"1px Solid var(--t-input-focus-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","background":"unset","fontSize":"var(--t-font-size-18)"},"hover":{"border":"auto !important","borderTop":"1px Solid var(--t-input-hover-border)","borderLeft":"1px Solid var(--t-input-hover-border)","borderBottom":"1px Solid var(--t-input-hover-border)","borderRight":"1px Solid var(--t-input-hover-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"disabled":{"color":"var(--t-input-disabled-font-color)","border":"auto !important","borderTop":"1px Solid var(--t-input-disabled-border-color)","borderLeft":"1px Solid var(--t-input-disabled-border-color)","borderBottom":"1px Solid var(--t-input-disabled-border-color)","borderRight":"1px Solid var(--t-input-disabled-border-color)","background":"var(--t-input-disabled-bg-color)"}},"placeholder":{"default":{"fontFamily":"思源","fontWeight":"400","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","color":"var(--business-white)","background":"unset","backgroundClip":"unset","textAlign":"left","lineHeight":"var(--t-font-size-18)"}},"arrow":{"default":{"width":"25px","height":"30px","color":"rgba(255, 255, 255, 1)","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","fontSize":"12px","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundPosition":"0% 0%"}},"dropdownWrapper":{"default":{"minWidth":"100px","height":"100px","overflowY":"auto","overflowX":"hidden","background":"var(--t-select-popper-bg-color)","fillType":"color","border":"auto !important","borderTop":"1px solid var(--business-select-border)","borderLeft":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderTopLeftRadius":"var(--t-select-popper-border-radius)","borderTopRightRadius":"var(--t-select-popper-border-radius)","borderBottomRightRadius":"var(--t-select-popper-border-radius)","borderBottomLeftRadius":"var(--t-select-popper-border-radius)","boxShadow":"0px 0px 5px 0px var(--t-select-popper-box-shadow-color)","backgroundColor":"var(--business-select-drop-bg)","color":"rgba(255, 255, 255, 0.9)","fontSize":"14px","width":""}},"dropdownItem":{"default":{"marginBottom":"0px","fontSize":"14","color":"rgba(255, 255, 255, 0.9)","background":"rgb(255,255,255)","paddingLeft":"20px","paddingTop":"0px","paddingRight":"20px","paddingBottom":"0px","backgroundColor":"var(--business-select-drop-bg)"},"active":{"color":"var(--business-text-hover)","background":"var(--t-select-dropdown-active-bg-color)","fillType":"color","backgroundColor":"var(--business-select-item-bg)"},"hover":{"backgroundColor":"var(--business-select-item-bg)"}},"dropdownItemText":{"default":{"color":"var(--t-select-dropdown-font-color)","fontFamily":"思源","fontSize":"var(--t-font-size-18)","letterSpacing":"0px","textAlign":"left","background":"transparent","backgroundClip":"unset","lineHeight":"34px"},"active":{"color":"var(--t-select-dropdown-active-font-color)","background":"transparent","backgroundClip":"unset"}},"dropdownArrow":{"default":{"display":"none"}},"tag":{"default":{"fontSize":"12px","display":"inline-flex","align-items":"center","background":"rgba(229, 229, 229, 1)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px"}},"tagText":{"default":{"fontSize":"12px","height":"auto","color":"rgba(0, 0, 0, 1)"}},"tagClose":{"default":{"right":"-3px"}}},
scrollbarThumbColor:"rgb(193,193,193)",
scrollbarTrackColor:"rgb(241,241,241)",
scrollbarWidth:"6px", 
 },
},
tColx0x4x3: {
defaultStyle: {
            default: {"width":"100px","height":"30px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:5,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"30px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tTabsBasex0x4x3x0: {
defaultStyle: {
            default: {"width":"216px","height":"25px","position":"unset","left":"610px","top":"21px","fontSize":"12px","lineHeight":"26px"},
            
            },
 default: { 
 
data:[{"label":"国控","value":"1"},{"label":"省控","value":"2"},{"label":"小流域","value":"smallWater"}],
space:5,
selectedTabVal:"1",
innerShadowColor:"rgba(0,0,0,0)",
activeInnerShadowColor:"rgba(0,0,0,0)",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"216px","height":"25px","position":"unset","left":"610px","top":"21px","fontSize":"12px","lineHeight":"26px"}},"label":{"default":{"display":"block","width":"100%","height":"auto","color":"#fff","fontWeight":"400","fontSize":"var(--t-font-size-18)","lineHeight":"26px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"hover":{"color":"var(--t-tabs-base-hover-text-color)","fontSize":"var(--t-font-size-18)"},"active":{"color":"#fff","fontSize":"var(--t-font-size-18)","lineHeight":"26px"}},"itemWrapper":{"default":{"width":"44%","flex":"unset","height":"26px","padding":"0","margin":"0","borderRadius":"4px","background":"var(--t-tabs-base-bg-color)","color":"#fff","fontWeight":"var(--t-tabs-base-text-weight)","fontSize":"12","lineHeight":"26px","textAlign":"center","cursor":"pointer","fillType":"color","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--business-show-bg60)"},"hover":{"margin":"0 !important","background":"var(--t-tabs-base-hover-bg-color)","fillType":"color","fontSize":"12px","lineHeight":"26px","backgroundColor":"#2C80FF"},"active":{"margin":"0 !important","background":"var(--t-tabs-base-active-bg-color)","fillType":"color","fontSize":"12px","lineHeight":"26px","backgroundColor":"#2C80FF"},"disabled":{"color":"var(--t-tabs-vertical-disabled-text-color)"}},"tabsContainer":{"default":{"display":"flex","height":"100%","justifyContent":"space-between","alignItems":"center","gap":"5px","flexDirection":"row","fontSize":"12px","lineHeight":"26px"},"hover":{"fontSize":"12px","lineHeight":"26px"}}}, 
 },
},
tColx0x4x4: {
defaultStyle: {
            default: {"width":"100px","height":"30px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:6,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"30px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tTextCommonx0x4x4x0: {
defaultStyle: {
            default: {"width":"76px","height":"20px","color":"var(--t-text-rh-color)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--t-font-size-18)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"864px","top":"23px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"3px"},
            
            },
 default: { 
 
label:"图层开关",
editable:false,
cStyle:{"wrapper":{"default":{"width":"76px","height":"20px","color":"var(--t-text-rh-color)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--t-font-size-18)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"864px","top":"23px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"3px"}},"placeholder":{"default":{"marginRight":"0px"}}}, 
 },
},
tSwitchx0x4x4x1: {
defaultStyle: {
            default: {"width":"32px","height":"22px","position":"unset","left":"935px","top":"21px"},
            
            },
 default: { 
 
value:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"22px","position":"unset","left":"935px","top":"21px"}},"core":{"default":{"backgroundColor":"var(--business-show-bg60)","borderLeft":"1px solid #0071E9","borderTop":"1px solid #0071E9","borderRight":"1px solid #0071E9","borderBottom":"1px solid #0071E9"},"active":{"backgroundColor":"#0071E9"}}}, 
 },
},
tRectx0x4x4x2: {
defaultStyle: {
            default: {"width":"28px","height":"28px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-10-20/20b88cb65b1140ccaff330681abf2b02.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-65px","left":"868px","position":"unset","marginLeft":"20px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"28px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-10-20/20b88cb65b1140ccaff330681abf2b02.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-65px","left":"868px","position":"unset","marginLeft":"20px","cursor":"pointer"},"active":{"background":"var(--t-brand8)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px"},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x4x4x3: {
defaultStyle: {
            default: {"width":"28px","height":"28px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-10-20/7b779f4cf1274a7d884759a57e40571c.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-55px","left":"878px","position":"unset","marginLeft":"20px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"28px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-10-20/7b779f4cf1274a7d884759a57e40571c.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-55px","left":"878px","position":"unset","marginLeft":"20px","animationName":"","cursor":"pointer"},"active":{"background":"var(--t-brand8)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px"},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const handleChangeTab = (type) => {
if (type === '1' || type === '2') {
  state.controlLevel = type;
  state.dataSourceType = 'surfaceWater';
} else {
  state.controlLevel = '';
  state.dataSourceType = type;
}
async function getNewData() {
  state.randomTime = new Date().getTime()
  try {
    await apiRegistry.getDefaultTime.request();
  } catch (error) {
    console.error(error)
  }
  try {
    await apiRegistry.getWaterLevel.request();
  } catch (error) {
    console.error(error)
  }
  try {
    await apiRegistry.getData.request();
  } catch (error) {
    console.error(error)
  }
}
async function sendMsg() {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    // 房间号
    type: "setWaterAutomaticStatus",
    // 消息名称
    data: {
      "highlightPointValue": "",
      "POINT_NAME": state.pointName,
      "CODE_CONTROLLEVEL": state.controlLevel,
      "CODE_WQDATASOURCETYPE": state.dataSourceType,
      "MONITORTIME": state.monitorTime,
      "REGION_CODE": state.regionCode,
      "visible": state.layerSwitch
    },
    // 发送的数据
  });
}
async function fn() {
  await getNewData()
  await sendMsg()
}
fn()

};
const handleTableClick = (column,row) => {
// console.log('处理表格点击事件', column, row);

if (column.label === '定位') {
  if (state.layerSwitch) {
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: "goToPoint", // 消息名称
      data: {
        layerId: '水自动站',
        pointValue: row.POINT_CODE,
      }
    });
  } else {
    state.layerSwitch = true;
    // 给地图发消息
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: "setWaterAutomaticStatus", // 消息名称
      data: {
        POINT_NAME: state.pointName,
        CODE_CONTROLLEVEL: state.controlLevel,
        CODE_WQDATASOURCETYPE: state.dataSourceType,
        MONITORTIME: state.monitorTime,
        REGION_CODE: state.regionCode,
        visible: state.layerSwitch,
        highlightPointValue: row.POINT_CODE
      }
    });
  }
  state.layerSwitchStatus = true;
}
};
const updateLayerSwitchStatus = () => {
if (!state.layerSwitch) {
  state.layerSwitchStatus = state.layerSwitch;
}
};
const initRegionData = () => {
state.regionList = global.regionData.filter(item => item.value !== '350700000000')
state.regionList.unshift(
  {
    "value": "350700000000",
    "label": "全市",
    "disabled": false
  }
)
getData();
};
const setSelectStyle = () => {
const sheet = new CSSStyleSheet();
sheet.insertRule(`body .t-l-c-cockpitBittom .el-select__popper .el-select-dropdown {
height: 100% !important;
}`);

document.adoptedStyleSheets = [sheet];
};
const handleScale = () => {
const dom = document.getElementById('t-component-7baa.c5dd92546');
const bgDom = document.getElementById('t-rect-9e7a.53a7f26fc');
state.isScaled = !state.isScaled
if (dom) {
  // 放大
  if (state.isScaled) {
    dom.style.width = '1600px';
    dom.style.height = '900px';
    dom.style.left = '170px';
    dom.style.top = '142px';
    dom.style.zIndex = '2'
    if(bgDom){
      bgDom.style.background = `url('/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-24/0d5ff3daa2294874907cbe7a6f5b7549.png')`
    }
    dom.style.setProperty('--t-font-size-18', '18px')
  } else {
    dom.style.width = '980px';
    dom.style.height = '186px';
    dom.style.left = '470px';
    dom.style.top = '799px';
    if(bgDom){
      bgDom.style.background = `url('/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-21/bb51ca06e0cc4048b7ee6aac2bb1517a.png')`
    }
    dom.style.setProperty('--t-font-size-18', '14px')
  }
  // 处理表格是否滚动
  handleScroll();
}
};
const getData = () => {
async function getData() {
  state.randomTime = new Date().getTime()
  try {
    await apiRegistry.getDefaultTime.request();
  } catch (error) {
    console.error(error)
  }
  try {
    await apiRegistry.getWaterLevel.request();
  } catch (error) {
    console.error(error)
  }
  try {
    await apiRegistry.getData.request();
  } catch (error) {
    console.error(error)
  }
}
getData()
};
const handleScroll = () => {
// 放大状态
if (state.isScaled) {
  state.scrollType = 'null'
  if (state.listData.length > 20) {
    state.scrollType = 'rowScroll'
  }
} else {
  // 缩小状态
  state.scrollType = 'rowScroll'
  if (state.listData.length <= 2) {
    state.scrollType = 'null'
  }
}
};
const getListData = () => {
async function getData() {
  try {
    await apiRegistry.getWaterLevel.request();
  } catch (error) {
    console.error(error)
  }
  try {
    await apiRegistry.getData.request();
  } catch (error) {
    console.error(error)
  }
}
getData()
};
const oncellClick1765969460610 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(column,row);
};
const onchange1763639146616 = (value) => {
// 设置变量值
state.pointName = value;
};
const onclick1763637504861 = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setWaterAutomaticStatus", // 消息名称
data: {"highlightPointValue":"","POINT_NAME":state.pointName,"CODE_CONTROLLEVEL":state.controlLevel,"CODE_WQDATASOURCETYPE":state.dataSourceType,"MONITORTIME":state.monitorTime,"REGION_CODE":state.regionCode,"visible":state.layerSwitch}, // 发送的数据
});
// 执行自定义方法
getListData();
};
const onchange1763638254018 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.regionCode = value;
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setWaterAutomaticStatus", // 消息名称
data: {"highlightPointValue":"","POINT_NAME":state.pointName,"CODE_CONTROLLEVEL":state.controlLevel,"CODE_WQDATASOURCETYPE":state.dataSourceType,"MONITORTIME":state.monitorTime,"REGION_CODE":state.regionCode,"visible":state.layerSwitch}, // 发送的数据
});
// 执行自定义方法
getListData();
};
const ontabClick1763637132501 = (data) => {
// 执行自定义方法
handleChangeTab(data.value);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setWaterAutomaticStatus", // 消息名称
data: {"highlightPointValue":"","POINT_NAME":state.pointName,"CODE_CONTROLLEVEL":state.controlLevel,"CODE_WQDATASOURCETYPE":state.dataSourceType,"MONITORTIME":state.monitorTime,"REGION_CODE":state.regionCode,"visible":state.layerSwitch}, // 发送的数据
});
};
const onchange1763637276915 = (value) => {
// 设置变量值
state.layerSwitch = value;
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setWaterAutomaticStatus", // 消息名称
data: {"highlightPointValue":"","POINT_NAME":state.pointName,"CODE_CONTROLLEVEL":state.controlLevel,"CODE_WQDATASOURCETYPE":state.dataSourceType,"MONITORTIME":state.monitorTime,"REGION_CODE":state.regionCode,"visible":value}, // 发送的数据
});
// 执行自定义方法
updateLayerSwitchStatus();
};
const onclick1774856399174_0_0 = () => {
// 执行自定义方法
handleScale();
};
const onclick1774856174374 = () => {
// 执行自定义方法
handleScale();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getDefaultTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"time":"state.randomTime","CONTROLLEVEL":"state.controlLevel","CODE_WQDATASOURCETYPE":"state.dataSourceType","REGION_CODE":"state.regionCode","interfaceId":"5e741db10150cd27f083e079a89bae23"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"time":state.randomTime,"CONTROLLEVEL":state.controlLevel,"CODE_WQDATASOURCETYPE":state.dataSourceType,"REGION_CODE":state.regionCode,"interfaceId":"5e741db10150cd27f083e079a89bae23"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"time":state.randomTime,"CONTROLLEVEL":state.controlLevel,"CODE_WQDATASOURCETYPE":state.dataSourceType,"REGION_CODE":state.regionCode,"interfaceId":"5e741db10150cd27f083e079a89bae23"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDefaultTime'] = res.data;
                
     state.monitorTime = res?.data?.data.MONITORTIME;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"MONITORTIME":"state.monitorTime","CODE_CONTROLLEVEL":"state.controlLevel","CODE_WQDATASOURCETYPE":"state.dataSourceType","POINT_NAME":"state.pointName","REGION_CODE":"state.regionCode","interfaceId":"d33959f2d95d28ac7cddbf61c1d56bc0"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"MONITORTIME":state.monitorTime,"CODE_CONTROLLEVEL":state.controlLevel,"CODE_WQDATASOURCETYPE":state.dataSourceType,"POINT_NAME":state.pointName,"REGION_CODE":state.regionCode,"interfaceId":"d33959f2d95d28ac7cddbf61c1d56bc0"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":state.monitorTime,"CODE_CONTROLLEVEL":state.controlLevel,"CODE_WQDATASOURCETYPE":state.dataSourceType,"POINT_NAME":state.pointName,"REGION_CODE":state.regionCode,"interfaceId":"d33959f2d95d28ac7cddbf61c1d56bc0"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     if (res.data?.data?.length) {
  state.listData = res.data.data.map((val) => ({
    ...val,
    canPosition: val.LONGITUDE && val.LATITUDE ? 'true' : 'false', // 是否能定位
    WATERQUALITYLEVELNAME: state.waterLevelList?.find(i => i?.objectCode === val?.POINT_CODE)?.waterLevel || val?.WATERQUALITYLEVELNAME || '-'
  }));

  console.log(state.listData, 9990)
} else {
  state.listData = [];
}
// 处理表格是否滚动
handleScroll();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getWaterLevel: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/waterquery/thswater/envquality/analysis/getPointDataWithPolluteData","method":"get","baseURL":"global.npServiceBaseUrl","params":{"evaluationType":"1","beginTime":"state.monitorTime","endTime":"state.monitorTime","evaObjectType":"surfaceWater","monitorType":"0"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterquery/thswater/envquality/analysis/getPointDataWithPolluteData","method":"get","baseURL":global.npServiceBaseUrl,"params":{"evaluationType":"1","beginTime":state.monitorTime,"endTime":state.monitorTime,"evaObjectType":"surfaceWater","monitorType":"0"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-/waterquery/thswater/envquality/analysis/getPointDataWithPolluteData',  {"evaluationType":"1","beginTime":state.monitorTime,"endTime":state.monitorTime,"evaObjectType":"surfaceWater","monitorType":"0"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWaterLevel'] = res.data;
                
     if(res?.data?.data?.data?.list?.length){
  state.waterLevelList = res?.data?.data?.data?.list
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.waterLevelList = []
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-cockpitBittom', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onBeforeUnmount(() => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setWaterAutomaticStatus", // 消息名称
data: {"visible":false}, // 发送的数据
});
});
// 执行自定义方法
initRegionData();
onMounted(() => {
setPageScale('t-l-c-cockpitBittom', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setSelectStyle();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTablex0x3ComputedData = computed(() => _.merge({}, componentState.tTablex0x3.default, componentState.tTablex0x3?.[state.screenSize]));

 const tRowx0x4ComputedData = computed(() => _.merge({}, componentState.tRowx0x4.default, componentState.tRowx0x4?.[state.screenSize]));

 const tColx0x4x0ComputedData = computed(() => _.merge({}, componentState.tColx0x4x0.default, componentState.tColx0x4x0?.[state.screenSize]));

 const tTextCommonx0x4x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4x0x0.default, componentState.tTextCommonx0x4x0x0?.[state.screenSize]));

 const tColx0x4x1ComputedData = computed(() => _.merge({}, componentState.tColx0x4x1.default, componentState.tColx0x4x1?.[state.screenSize]));

 const tInputx0x4x1x0ComputedData = computed(() => _.merge({}, componentState.tInputx0x4x1x0.default, componentState.tInputx0x4x1x0?.[state.screenSize]));

 const tButtonx0x4x1x1ComputedData = computed(() => _.merge({}, componentState.tButtonx0x4x1x1.default, componentState.tButtonx0x4x1x1?.[state.screenSize]));

 const tColx0x4x2ComputedData = computed(() => _.merge({}, componentState.tColx0x4x2.default, componentState.tColx0x4x2?.[state.screenSize]));

 const tSelectx0x4x2x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x4x2x0.default, componentState.tSelectx0x4x2x0?.[state.screenSize]));

 const tColx0x4x3ComputedData = computed(() => _.merge({}, componentState.tColx0x4x3.default, componentState.tColx0x4x3?.[state.screenSize]));

 const tTabsBasex0x4x3x0ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x4x3x0.default, componentState.tTabsBasex0x4x3x0?.[state.screenSize]));

 const tColx0x4x4ComputedData = computed(() => _.merge({}, componentState.tColx0x4x4.default, componentState.tColx0x4x4?.[state.screenSize]));

 const tTextCommonx0x4x4x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4x4x0.default, componentState.tTextCommonx0x4x4x0?.[state.screenSize]));

 const tSwitchx0x4x4x1ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x4x4x1.default, componentState.tSwitchx0x4x4x1?.[state.screenSize]));

 const tRectx0x4x4x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x4x4x2.default, componentState.tRectx0x4x4x2?.[state.screenSize]));

 const tRectx0x4x4x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x4x4x3.default, componentState.tRectx0x4x4x3?.[state.screenSize]));

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
tTablex0x3ComputedData,
tRowx0x4ComputedData,
tColx0x4x0ComputedData,
tTextCommonx0x4x0x0ComputedData,
tColx0x4x1ComputedData,
tInputx0x4x1x0ComputedData,
tButtonx0x4x1x1ComputedData,
tColx0x4x2ComputedData,
tSelectx0x4x2x0ComputedData,
tColx0x4x3ComputedData,
tTabsBasex0x4x3x0ComputedData,
tColx0x4x4ComputedData,
tTextCommonx0x4x4x0ComputedData,
tSwitchx0x4x4x1ComputedData,
tRectx0x4x4x2ComputedData,
tRectx0x4x4x3ComputedData,
oncellClick1765969460610,
onchange1763639146616,
onclick1763637504861,
onchange1763638254018,
ontabClick1763637132501,
onchange1763637276915,
onclick1774856174374,
onclick1774856399174_0_0,
};
},
};