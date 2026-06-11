window.qxBaseInfoComponent = {
template: 
`<div id="t-l-c-qxBaseInfo" class="t-l-c-qxBaseInfo" >` +
`<t-component id="t-component-c019.99b6d840a" class="qxBaseInfo-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode">` +
`</t-component>` +
`<t-text id="t-text-62b3.48b14905c" class="qxBaseInfo-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle">` +
`</t-text>` +
`<t-table v-if="state.showTable === true" id="t-table-a03c.38ecd6b87" class="qxBaseInfo-t-table-0-2"  :height="tTablex0x2ComputedData.height" :stripe="tTablex0x2ComputedData.stripe" :border="tTablex0x2ComputedData.border" :auto-scroll="tTablex0x2ComputedData.autoScroll" :speed="tTablex0x2ComputedData.speed" :columns="tTablex0x2ComputedData.columns" :data="replaceCssVariables(filterData(state.tableData, componentPropBindingMap?.['t-table-a03c.38ecd6b87']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x2ComputedData.defaultSort" :c-style="tTablex0x2ComputedData.cStyle">` +
`</t-table>` +
`<t-row id="t-row-9111.1b5dc7cd5" class="qxBaseInfo-t-row-0-3"  :c-style="tRowx0x3ComputedData.cStyle" :gutter="tRowx0x3ComputedData.gutter" :justify="tRowx0x3ComputedData.justify" :align="tRowx0x3ComputedData.align">` +
`<t-col id="t-col-46bf.19e16152f" class="qxBaseInfo-t-col-0-3-0"  :span="tColx0x3x0ComputedData.span" :offset="tColx0x3x0ComputedData.offset" :push="tColx0x3x0ComputedData.push" :pull="tColx0x3x0ComputedData.pull" :c-style="tColx0x3x0ComputedData.cStyle">` +
`<t-text id="t-text-6063.4db73323" class="qxBaseInfo-t-text-0-3-0-0"  :label="tTextx0x3x0x0ComputedData.label" :editable="tTextx0x3x0x0ComputedData.editable" :c-style="tTextx0x3x0x0ComputedData.cStyle">` +
`</t-text>` +
`<t-date-picker id="t-date-picker-fa39.f1f4b1652" class="qxBaseInfo-t-date-picker-0-3-0-1"  :placeholder="tDatePickerx0x3x0x1ComputedData.placeholder" :start-placeholder="tDatePickerx0x3x0x1ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x3x0x1ComputedData.endPlaceholder" :type="tDatePickerx0x3x0x1ComputedData.type" :clearable="tDatePickerx0x3x0x1ComputedData.clearable" :range-separator="tDatePickerx0x3x0x1ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-fa39.f1f4b1652']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x3x0x1ComputedData.separator" :readonly="tDatePickerx0x3x0x1ComputedData.readonly" :editable="tDatePickerx0x3x0x1ComputedData.editable" :c-style="tDatePickerx0x3x0x1ComputedData.cStyle" @date-change="ondateChange1767948867605_0_0">` +
`</t-date-picker>` +
`</t-col>` +
`<t-col id="t-col-9e29.dc84c516" class="qxBaseInfo-t-col-0-3-1"  :span="tColx0x3x1ComputedData.span" :offset="tColx0x3x1ComputedData.offset" :push="tColx0x3x1ComputedData.push" :pull="tColx0x3x1ComputedData.pull" :c-style="tColx0x3x1ComputedData.cStyle">` +
`<t-select v-if="state.showType !== 'table'" id="t-select-3fcb.c00f74209" class="qxBaseInfo-t-select-0-3-1-0"  :active-value="replaceCssVariables(filterData(state.currentPolluteCode, componentPropBindingMap?.['t-select-3fcb.c00f74209']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.polluteList, componentPropBindingMap?.['t-select-3fcb.c00f74209']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x3x1x0ComputedData.alias" :multiple="tSelectx0x3x1x0ComputedData.multiple" :placeholder="tSelectx0x3x1x0ComputedData.placeholder" :clearable="tSelectx0x3x1x0ComputedData.clearable" :disabled="tSelectx0x3x1x0ComputedData.disabled" :name="tSelectx0x3x1x0ComputedData.name" :autocomplete="tSelectx0x3x1x0ComputedData.autocomplete" :filterable="tSelectx0x3x1x0ComputedData.filterable" :no-match-text="tSelectx0x3x1x0ComputedData.no-match-text" :no-data-text="tSelectx0x3x1x0ComputedData.no-data-text" :c-style="tSelectx0x3x1x0ComputedData.cStyle" @change="onchange1733973555614">` +
`</t-select>` +
`<t-select id="t-select-6362.7b6ac7966" class="qxBaseInfo-t-select-0-3-1-1"  :active-value="replaceCssVariables(filterData(state.showType, componentPropBindingMap?.['t-select-6362.7b6ac7966']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x3x1x1ComputedData.options" :alias="tSelectx0x3x1x1ComputedData.alias" :multiple="tSelectx0x3x1x1ComputedData.multiple" :placeholder="tSelectx0x3x1x1ComputedData.placeholder" :clearable="tSelectx0x3x1x1ComputedData.clearable" :disabled="tSelectx0x3x1x1ComputedData.disabled" :name="tSelectx0x3x1x1ComputedData.name" :autocomplete="tSelectx0x3x1x1ComputedData.autocomplete" :filterable="tSelectx0x3x1x1ComputedData.filterable" :no-match-text="tSelectx0x3x1x1ComputedData.no-match-text" :no-data-text="tSelectx0x3x1x1ComputedData.no-data-text" :c-style="tSelectx0x3x1x1ComputedData.cStyle" @change="onchange1767772766838_0_0">` +
`</t-select>` +
`</t-col>` +
`</t-row>` +
`<t-text v-if="state.isShowchartUnit === true" id="t-text-f8f0.bc97393c" class="qxBaseInfo-t-text-0-4"  :label="replaceCssVariables(filterData(state.chartUint, componentPropBindingMap?.['t-text-f8f0.bc97393c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-list-card id="t-list-card-2930.4cdad1987" class="qxBaseInfo-t-list-card-0-5"  :data="replaceCssVariables(filterData(state.monitorData, componentPropBindingMap?.['t-list-card-2930.4cdad1987']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x5ComputedData.spacingX" :col="tListCardx0x5ComputedData.col" :direction="tListCardx0x5ComputedData.direction" :exchange-order="tListCardx0x5ComputedData.exchangeOrder" :unit-break="tListCardx0x5ComputedData.unitBreak" :key-field="tListCardx0x5ComputedData.keyField" :active-key-field="tListCardx0x5ComputedData.activeKeyField" :active="tListCardx0x5ComputedData.active" :c-style="tListCardx0x5ComputedData.cStyle">` +
`</t-list-card>` +
`<t-chart-wind-direction v-if="state.windDirectionSpeedLine === true" id="t-chart-wind-direction-418c.32b624bb3" class="qxBaseInfo-t-chart-wind-direction-0-6"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-wind-direction-418c.32b624bb3']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartWindDirectionx0x6ComputedData.cStyle" :show-item-bg="tChartWindDirectionx0x6ComputedData.showItemBg" :options="tChartWindDirectionx0x6ComputedData.options" :data="replaceCssVariables(filterData(state.chartList, componentPropBindingMap?.['t-chart-wind-direction-418c.32b624bb3']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :series-setting="tChartWindDirectionx0x6ComputedData.seriesSetting" :line="componentState.tChartWindDirectionx0x6.line">` +
`</t-chart-wind-direction>` +
`<t-row id="t-row-7d05.00a92afd3" class="qxBaseInfo-t-row-0-7"  :c-style="tRowx0x7ComputedData.cStyle" :gutter="tRowx0x7ComputedData.gutter" :justify="tRowx0x7ComputedData.justify" :align="tRowx0x7ComputedData.align">` +
`<t-row id="t-row-b0c8.018f2197c" class="qxBaseInfo-t-row-0-7-0"  :c-style="tRowx0x7x0ComputedData.cStyle" :gutter="tRowx0x7x0ComputedData.gutter" :justify="tRowx0x7x0ComputedData.justify" :align="tRowx0x7x0ComputedData.align">` +
`<t-col id="t-col-58c5.e3e55e5f4" class="qxBaseInfo-t-col-0-7-0-0"  :span="tColx0x7x0x0ComputedData.span" :offset="tColx0x7x0x0ComputedData.offset" :push="tColx0x7x0x0ComputedData.push" :pull="tColx0x7x0x0ComputedData.pull" :c-style="tColx0x7x0x0ComputedData.cStyle">` +
`<t-text id="t-text-98a4.90e1520d3" class="qxBaseInfo-t-text-0-7-0-0-0"  :label="tTextx0x7x0x0x0ComputedData.label" :editable="tTextx0x7x0x0x0ComputedData.editable" :c-style="tTextx0x7x0x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-8eeb.2c9d147f1" class="qxBaseInfo-t-col-0-7-0-1"  :span="tColx0x7x0x1ComputedData.span" :offset="tColx0x7x0x1ComputedData.offset" :push="tColx0x7x0x1ComputedData.push" :pull="tColx0x7x0x1ComputedData.pull" :c-style="tColx0x7x0x1ComputedData.cStyle">` +
`<t-text id="t-text-ed5a.75f62b851" class="qxBaseInfo-t-text-0-7-0-1-0"  :label="replaceCssVariables(filterData(state.baseInfo.regionName, componentPropBindingMap?.['t-text-ed5a.75f62b851']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x7x0x1x0ComputedData.editable" :c-style="tTextx0x7x0x1x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-e0e7.192bf2224" class="qxBaseInfo-t-row-0-7-1"  :c-style="tRowx0x7x1ComputedData.cStyle" :gutter="tRowx0x7x1ComputedData.gutter" :justify="tRowx0x7x1ComputedData.justify" :align="tRowx0x7x1ComputedData.align">` +
`<t-col id="t-col-84ea.13fd9a69c" class="qxBaseInfo-t-col-0-7-1-0"  :span="tColx0x7x1x0ComputedData.span" :offset="tColx0x7x1x0ComputedData.offset" :push="tColx0x7x1x0ComputedData.push" :pull="tColx0x7x1x0ComputedData.pull" :c-style="tColx0x7x1x0ComputedData.cStyle">` +
`<t-text id="t-text-f997.a33b35379" class="qxBaseInfo-t-text-0-7-1-0-0"  :label="tTextx0x7x1x0x0ComputedData.label" :editable="tTextx0x7x1x0x0ComputedData.editable" :c-style="tTextx0x7x1x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-3926.8488b6159" class="qxBaseInfo-t-col-0-7-1-1"  :span="tColx0x7x1x1ComputedData.span" :offset="tColx0x7x1x1ComputedData.offset" :push="tColx0x7x1x1ComputedData.push" :pull="tColx0x7x1x1ComputedData.pull" :c-style="tColx0x7x1x1ComputedData.cStyle">` +
`<t-text id="t-text-5580.bf2a63f19" class="qxBaseInfo-t-text-0-7-1-1-0"  :label="replaceCssVariables(filterData(state.baseInfo.longitude, componentPropBindingMap?.['t-text-5580.bf2a63f19']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x7x1x1x0ComputedData.editable" :c-style="tTextx0x7x1x1x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-fae6.112c80399" class="qxBaseInfo-t-col-0-7-1-2"  :span="tColx0x7x1x2ComputedData.span" :offset="tColx0x7x1x2ComputedData.offset" :push="tColx0x7x1x2ComputedData.push" :pull="tColx0x7x1x2ComputedData.pull" :c-style="tColx0x7x1x2ComputedData.cStyle">` +
`<t-text id="t-text-1f70.7d602d09d" class="qxBaseInfo-t-text-0-7-1-2-0"  :label="tTextx0x7x1x2x0ComputedData.label" :editable="tTextx0x7x1x2x0ComputedData.editable" :c-style="tTextx0x7x1x2x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-6dfa.6910d8ef2" class="qxBaseInfo-t-col-0-7-1-3"  :span="tColx0x7x1x3ComputedData.span" :offset="tColx0x7x1x3ComputedData.offset" :push="tColx0x7x1x3ComputedData.push" :pull="tColx0x7x1x3ComputedData.pull" :c-style="tColx0x7x1x3ComputedData.cStyle">` +
`<t-text id="t-text-1aa2.98d0516bf" class="qxBaseInfo-t-text-0-7-1-3-0"  :label="replaceCssVariables(filterData(state.baseInfo.latitude, componentPropBindingMap?.['t-text-1aa2.98d0516bf']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x7x1x3x0ComputedData.editable" :c-style="tTextx0x7x1x3x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`</t-row>` +
`</t-row>` +
`<t-chart-design v-if="state.showChart === true" id="t-chart-design-8d2a.4d46123cd" class="qxBaseInfo-t-chart-design-0-8"  :register-map-name="tChartDesignx0x8ComputedData.registerMapName" :geo-json="tChartDesignx0x8ComputedData.geoJson" :empty-img="tChartDesignx0x8ComputedData.emptyImg" :c-style="tChartDesignx0x8ComputedData.cStyle" :options="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-chart-design-8d2a.4d46123cd']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-chart-design>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-c019.99b6d840a":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-62b3.48b14905c":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-table-a03c.38ecd6b87":{"attributeName":"tTablex0x2","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-row-9111.1b5dc7cd5":{"attributeName":"tRowx0x3","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-46bf.19e16152f":{"attributeName":"tColx0x3x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6063.4db73323":{"attributeName":"tTextx0x3x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-fa39.f1f4b1652":{"attributeName":"tDatePickerx0x3x0x1","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-9e29.dc84c516":{"attributeName":"tColx0x3x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-3fcb.c00f74209":{"attributeName":"tSelectx0x3x1x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-select-6362.7b6ac7966":{"attributeName":"tSelectx0x3x1x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-text-f8f0.bc97393c":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-2930.4cdad1987":{"attributeName":"tListCardx0x5","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-wind-direction-418c.32b624bb3":{"attributeName":"tChartWindDirectionx0x6","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"showItemBg":{"filters":[]},"options":{"filters":[]},"data":{"filters":[]},"seriesSetting":{"filters":[]}},"t-row-7d05.00a92afd3":{"attributeName":"tRowx0x7","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-row-b0c8.018f2197c":{"attributeName":"tRowx0x7x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-58c5.e3e55e5f4":{"attributeName":"tColx0x7x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-98a4.90e1520d3":{"attributeName":"tTextx0x7x0x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-8eeb.2c9d147f1":{"attributeName":"tColx0x7x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-ed5a.75f62b851":{"attributeName":"tTextx0x7x0x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-e0e7.192bf2224":{"attributeName":"tRowx0x7x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-84ea.13fd9a69c":{"attributeName":"tColx0x7x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-f997.a33b35379":{"attributeName":"tTextx0x7x1x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-3926.8488b6159":{"attributeName":"tColx0x7x1x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-5580.bf2a63f19":{"attributeName":"tTextx0x7x1x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-fae6.112c80399":{"attributeName":"tColx0x7x1x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-1f70.7d602d09d":{"attributeName":"tTextx0x7x1x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-6dfa.6910d8ef2":{"attributeName":"tColx0x7x1x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-1aa2.98d0516bf":{"attributeName":"tTextx0x7x1x3x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-8d2a.4d46123cd":{"attributeName":"tChartDesignx0x8","registerMapName":{"filters":[]},"geoJson":{"filters":[]},"emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}}};
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
   dataZoom: {},
   chartName: "",
   chartType: "line",
   tableData: [],
   baseInfo: {"regionName":"","longitude":"","latitude":""},
   showTable: false,
   showChart: false,
   windDirectionSpeedLine: false,
   chartUint: "m/s",
   currentPolluteCode: "windspeed",
   isShowchartUnit: true,
   chartList: [],
   showType: "line",
   polluteList: [{"label":"风向风速","value":"windspeed","disabled":false,"unit":"m/s"},{"label":"温度","value":"temperature","disabled":false,"unit":"℃"},{"label":"降雨量","value":"precipitation","disabled":false,"unit":"mm"},{"label":"气压","value":"pressure","disabled":false,"unit":"hPa"},{"label":"湿度","value":"relative_humidity","disabled":false,"unit":"%"}],
   options: "",
   myChart: "",
   seriesData: [],
   noDataImg: "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
   dataSourcetype: "",
   monitorData: [{"title":"风速","num":"-","unit":"m/s","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/4490a3d22b044319990474b357d03335.png","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/4490a3d22b044319990474b357d03335.png"},{"title":"风向","num":"-","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/fe0e585e00994783a20f6f95bbd3eb31.png","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/fe0e585e00994783a20f6f95bbd3eb31.png"},{"title":"温度","num":"-","unit":"℃","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/2826dc3b7f9a411da2227d899a809a9a.png","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/2826dc3b7f9a411da2227d899a809a9a.png"},{"title":"湿度","num":"-","unit":"%","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/07bc0a16b588486f9d892e258f7d2b55.png","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/07bc0a16b588486f9d892e258f7d2b55.png"},{"title":"降雨量","num":"-","unit":"mm","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/6f43e22929d64082a78c27eb2eea728e.png","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/6f43e22929d64082a78c27eb2eea728e.png"},{"title":"气压","num":"-","unit":"hPa","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/330100078adc4cffad00ad33ceaba64b.png","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/330100078adc4cffad00ad33ceaba64b.png"}],
   pointCode: "",
   timeRange: [],
   endTime: "",
   startTime: "",
   listData: [],
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"94px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"94px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"29px","top":"98px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"监测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"29px","top":"98px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
tTablex0x2: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 300px)","position":"unset","left":"0px","top":"300px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"95%",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"监测时间","key":"MONITORTIME_STR","stateKey":"waterQualityTargetValue","align":"center","type":"default","operationList":[],"style":{"fontStyle":{"width":"40PX","height":"PX"}},"width":"200px"},{"label":"风速（m/s）","key":"windspeed","stateKey":"","align":"center","type":"default","operationList":[],"style":{"fontStyle":{"fontSize":"var(--business-text-size-12)","width":"PX","height":"PX","borderRadius":"PX","background":""}}},{"label":"风向","key":"windname","stateKey":"","align":"center","type":"default","operationList":[],"style":{"fontStyle":{"fontSize":"var(--business-text-size-12)","width":"PX","height":"PX","borderRadius":"PX","background":""}}},{"label":"气压（hPa）","key":"pressure","stateKey":"","align":"center","type":"default","operationList":[],"style":{"fontStyle":{"fontSize":"var(--business-text-size-12)","width":"PX","height":"PX","borderRadius":"PX","background":""}}},{"label":"降雨量（mm）","key":"precipitation","stateKey":"","align":"center","type":"default","operationList":[],"style":{"fontStyle":{"fontSize":"var(--business-text-size-12)","width":"PX","height":"PX","borderRadius":"PX","background":""}}},{"label":"温度 （℃）","key":"temperature","stateKey":"","align":"center","type":"default","operationList":[],"style":{"fontStyle":{"fontSize":"var(--business-text-size-12)","width":"PX","height":"PX","borderRadius":"PX","background":""}}},{"label":"湿度（%）","key":"relative_humidity","stateKey":"","align":"center","type":"default","operationList":[],"style":{"fontStyle":{"fontSize":"var(--business-text-size-12)","width":"PX","height":"PX","borderRadius":"PX","background":""}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 300px)","position":"unset","left":"0px","top":"300px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tRowx0x3: {
defaultStyle: {
            default: {"width":"100%","height":"34px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"227px","pointerEvents":"none","gap":"auto","backgroundColor":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"34px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"227px","pointerEvents":"none","gap":"auto","backgroundColor":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x3x0: {
defaultStyle: {
            default: {"width":"100px","height":"34px","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"auto"},
            
            },
 default: { 
 
span:14,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"34px","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"auto"}}}, 
 },
},
tTextx0x3x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"32px","color":"var(--business-white)","lineHeight":"32px","fontSize":"var(--business-text-size-14)","fontFamily":"方正综艺","top":"208px","left":"0px","position":"unset","textAlign":"left","marginLeft":"0px"},
            
            },
 default: { 
 
label:"指标变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","color":"var(--business-white)","lineHeight":"32px","fontSize":"var(--business-text-size-14)","fontFamily":"方正综艺","top":"208px","left":"0px","position":"unset","textAlign":"left","marginLeft":"0px"}},"cardValue":{"default":{"fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tDatePickerx0x3x0x1: {
defaultStyle: {
            default: {"width":"380px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"380px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}}, 
 },
},
tColx0x3x1: {
defaultStyle: {
            default: {"width":"100px","height":"34px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:10,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"34px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tSelectx0x3x1x0: {
defaultStyle: {
            default: {"width":"180px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"windspeed",
options:[{"label":"风向风速","value":"windspeed","disabled":false,"unit":"m/s"},{"label":"温度","value":"temperature","disabled":false,"unit":"℃"},{"label":"降雨量","value":"precipitation","disabled":false,"unit":"mm"},{"label":"气压","value":"pressure","disabled":false,"unit":"hPa"},{"label":"湿度","value":"relative_humidity","disabled":false,"unit":"%"}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"暂无数据",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"180px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tSelectx0x3x1x1: {
defaultStyle: {
            default: {"width":"120px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"line",
options:[{"label":"折线图","value":"line","disabled":false},{"label":"柱状图","value":"bar","disabled":false},{"label":"数据表","value":"table","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"120px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"99px","height":"32px","color":"var(--business-text-avianize)","lineHeight":"32px","fontSize":"var(--business-text-size-14)","fontFamily":"方正综艺","top":"265px","left":"24px","position":"unset","textAlign":"left","marginLeft":"20px","animationName":""},
            
            },
 default: { 
 
label:"m/s",
editable:false,
cStyle:{"wrapper":{"default":{"width":"99px","height":"32px","color":"var(--business-text-avianize)","lineHeight":"32px","fontSize":"var(--business-text-size-14)","fontFamily":"方正综艺","top":"265px","left":"24px","position":"unset","textAlign":"left","marginLeft":"20px","animationName":""}},"cardValue":{"default":{"fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tListCardx0x5: {
defaultStyle: {
            default: {"width":"100%","height":"92px","position":"unset","left":"0px","top":"130px","background":"rgba(0, 0, 0, 0)","fillType":"color"},
            
            },
 default: { 
 
data:[{"title":"风速","num":"-","unit":"m/s","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/4490a3d22b044319990474b357d03335.png","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/4490a3d22b044319990474b357d03335.png"},{"title":"风向","num":"-","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/fe0e585e00994783a20f6f95bbd3eb31.png","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/fe0e585e00994783a20f6f95bbd3eb31.png"},{"title":"温度","num":"-","unit":"℃","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/2826dc3b7f9a411da2227d899a809a9a.png","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/2826dc3b7f9a411da2227d899a809a9a.png"},{"title":"湿度","num":"-","unit":"%","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/07bc0a16b588486f9d892e258f7d2b55.png","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/07bc0a16b588486f9d892e258f7d2b55.png"},{"title":"降雨量","num":"-","unit":"mm","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/6f43e22929d64082a78c27eb2eea728e.png","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/6f43e22929d64082a78c27eb2eea728e.png"},{"title":"气压","num":"-","unit":"hPa","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/330100078adc4cffad00ad33ceaba64b.png","selectIcon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-03-27/330100078adc4cffad00ad33ceaba64b.png"}],
spacingX:8,
col:4,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"92px","position":"unset","left":"0px","top":"130px","background":"rgba(0, 0, 0, 0)","fillType":"color"}},"innerWrapper":{"default":{"display":"flex","flexWrap":"wrap","boxSizing":"border-box","width":"100%","height":"100%","justifyContent":"space-between","alignItems":"center","gap":"auto","flexDirection":"row"}},"outerWrapper":{"default":{"width":"16%","height":"auto","padding":"0px"}},"itemWrapper":{"default":{"background":"var(--business-show-bg15)","display":"flex","justifyContent":"space-between","gap":"auto","alignItems":"center","flexDirection":"row","height":"","fillType":"color","borderDirection":"all","borderLeft":"1px Solid rgba(138, 210, 255, 0.5)","borderTop":"1px Solid rgba(138, 210, 255, 0.5)","borderRight":"1px Solid rgba(138, 210, 255, 0.5)","borderBottom":"1px Solid rgba(138, 210, 255, 0.5)","border":"auto !important","position":"relative"}},"rightContent":{"default":{"height":"auto","justifyContent":"center","alignItems":"center","flexDirection":"column","display":"flex","gap":"auto","backgroundColor":""}},"specialItemWrapper":{"default":{"backgroundColor":""}},"icon":{"default":{"width":"18px","height":"18px","background":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","position":"absolute","top":"10px","left":"var(--icon-air-meteorology-left)","float":"right","clear":"none"},"active":{}},"cardIcon":{"default":{"position":"static","top":"10px","left":"20px"}},"specialCardIcon":{"default":{"position":"static"}},"num":{"default":{"verticalAlign":"-1px","overflow":"hidden","color":"var(--business-white)","fontWeight":"500","fontSize":"var(--business-text-size-14)","fontFamily":"微软雅黑","textOverflow":"ellipsis","whiteSpace":"nowrap","background":"unset","backgroundClip":"unset"}},"numBox":{"default":{"justifyContent":"space-between","alignItems":"center","flexDirection":"row","display":"flex"}},"title":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-14)","background":"unset","backgroundClip":"unset","backgroundColor":"var(--business-show-bg15)","width":"100%","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","marginRight":"0px !important"}},"unit":{"default":{"color":"#8AD2FF","fontSize":"var(--business-text-size-14)","background":"unset","backgroundClip":"unset","marginLeft":"5px"}}}, 
 },
},
tChartWindDirectionx0x6: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 290px)","position":"unset","left":"0px","top":"290px"},
            
            },
line: computed(() => activeChartTheme.value?.line),
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 290px)","position":"unset","left":"0px","top":"290px"}},"emptyText":{"default":{"color":"rgba(252, 252, 252, 1)","fontSize":"var(--business-text-size-14)"}}},
showItemBg:false,
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true,"left":"4%","bottom":"4%","right":"2%","top":"8%"},"legend":{"show":false},"tooltip":{"backgroundColor":"rgba(0, 0, 0, 0.8)","borderColor":"rgba(255, 255, 255, 0.5)","textStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":global.publicFontSizeConfig.fontSize14}},"xAxis":{"axisLabel":{"color":"var(--skin-font-color-80)","fontSize":global.publicFontSizeConfig.fontSize14},"axisLine":{"lineStyle":{"color":"var(--skin-font-color-40)"}},"axisTick":{"lineStyle":{"color":"var(--skin-font-color-40)"}},"nameTextStyle":{"color":"var(--skin-font-color-60)","fontSize":global.publicFontSizeConfig.fontSize14}},"yAxis":{"name":"m/s","axisLabel":{"color":"var(--skin-font-color-80)","fontSize":global.publicFontSizeConfig.fontSize14},"axisLine":{"lineStyle":{"color":"var(--skin-font-color-40)"}},"nameTextStyle":{"color":"var(--business-text-avianize)","fontSize":global.publicFontSizeConfig.fontSize14},"splitLine":{"lineStyle":{"color":"var(--skin-font-color-20)"}}},"dataZoom":[{"type":"slider","backgroundColor":"var(--business-show-bg30)","borderColor":"var(--business-show-bg30)","borderRadius":0,"showDetail":false,"showDataShadow":false,"zoomLock":false,"height":15,"start":0,"end":50,"brushSelect":false,"bottom":"0%","brushStyle":{"color":"#000"},"fillerColor":"var(--business-btn-default)","handleStyle":{"color":"#2D955A","borderColor":"#D1D5D9","borderCap":"round"}}]})),
data:[],
seriesSetting:{"xAxisLabel":"MONITORTIME_STR","data":[{"name":"风速","dataKey":"windspeed","windKey":"direction","style":{"label":{"show":false},"symbol":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/chart-wind-direction/arrow.png","symbolSize":[20,20],"lineStyle":{"color":"#266FE8"}},"isOpenLineColor":true}],"windData":{"north":"1","northeast":"2","east":"3","sortheast":"4","sorth":"5","sorthwest":"6","west":"7","northwest":"8"}}, 
 },
},
tRowx0x7: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"0px","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tRowx0x7x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"85px","top":"108px","gap":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"85px","top":"108px","gap":"0px","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x7x0x0: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"60px","top":"60px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"60px","top":"60px"}}}, 
 },
},
tTextx0x7x0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"80px","top":"107px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--business-text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"所属区县",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"80px","top":"107px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--business-text-size-14)","animationName":""}}}, 
 },
},
tColx0x7x0x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"0px","animationName":"","left":"60px","top":"60px"},
            
            },
 default: { 
 
span:21,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"0px","animationName":"","left":"60px","top":"60px"}}}, 
 },
},
tTextx0x7x0x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-white)","position":"unset","left":"202px","top":"107px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--business-text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-white)","position":"unset","left":"202px","top":"107px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--business-text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tRowx0x7x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"75px","top":"98px","gap":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"75px","top":"98px","gap":"0px","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x7x1x0: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"50px","top":"50px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"50px","top":"50px"}}}, 
 },
},
tTextx0x7x1x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"70px","top":"97px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--business-text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"经度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"70px","top":"97px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--business-text-size-14)","animationName":""}}}, 
 },
},
tColx0x7x1x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"50px","top":"50px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"50px","top":"50px"}}}, 
 },
},
tTextx0x7x1x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-white)","position":"unset","left":"192px","top":"97px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--business-text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-white)","position":"unset","left":"192px","top":"97px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--business-text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tColx0x7x1x2: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"50px","top":"50px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"50px","top":"50px"}}}, 
 },
},
tTextx0x7x1x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"549px","top":"97px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--business-text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"维度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"549px","top":"97px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--business-text-size-14)","animationName":""}}}, 
 },
},
tColx0x7x1x3: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","animationName":"","left":"50px","top":"50px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","animationName":"","left":"50px","top":"50px"}}}, 
 },
},
tTextx0x7x1x3x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-white)","position":"unset","left":"671px","top":"97px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--business-text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-white)","position":"unset","left":"671px","top":"97px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--business-text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tChartDesignx0x8: {
defaultStyle: {
            default: {"height":"calc(100% - 290px)","width":"100%","position":"unset","left":"0px","top":"290px"},
            
            },
 default: { 
 
registerMapName:"",
geoJson:{},
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 290px)","width":"100%","position":"unset","left":"0px","top":"290px"}}},
options:"", 
 },
},
});
const getChartOptions = () => {

  state.options = {
    "tooltip": {
      "show": true,
      trigger: 'axis', 
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: global.publicFontSizeConfig.fontSize14
      },
    },
      "dataZoom": [
      {
        "type": "slider",
        "backgroundColor": getCssVariable('--business-show-bg30'),
        "borderColor": getCssVariable('--business-show-bg30'),
        "borderRadius": 0,
        "showDetail": false,
        "showDataShadow": false,
        "zoomLock": false,
        "height": 15,
        "start":0,
        "end":50,
        "brushSelect": false,
        "bottom": "0%",
        "brushStyle": {
          "color": "#000"
        },
        "fillerColor": getCssVariable('--business-btn-default'),
        "handleStyle": {
          "color": "#2D955A",
          "borderColor": "#D1D5D9",
          "borderCap": "round"
        }
      }
    ],
    "grid": {
      "top": "8%",
      "bottom": "8%",
      "left": "5%",
      "right": "2%"
    },
    "xAxis": {
      type: 'category',
      data: state.chartList.map(item => item.MONITORTIME_STR),
      axisLabel: {
        color: 'var(--skin-font-color-80)',
        fontSize: global.publicFontSizeConfig.fontSize14,
        // rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: 'var(--skin-font-color-40)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'var(--skin-font-color-40)'
        }
      },
      nameTextStyle: {
        color: 'var(--skin-font-color-60)',
        fontSize: global.publicFontSizeConfig.fontSize14
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'var(--skin-font-color-80)',
        fontSize: global.publicFontSizeConfig.fontSize14
      },
      axisLine: {
        show: false, // 取消Y轴轴线
        lineStyle: {
          type: 'solid',
          color: 'var(--skin-font-color-40)'
        }
      },
      name: '',
      nameTextStyle: {
        color: 'var(--skin-font-color-60)',
        align: 'right',
        padding: [0, 0, 10, -24],
        fontSize: global.publicFontSizeConfig.fontSize14
      },
      splitLine: {
        show: true, // 显示横向网格线
        lineStyle: {
          type: 'dashed', // 网格线样式：虚线
          color: 'var(--skin-font-color-20)' // 网格线颜色
        }
      }
    },
    "series": [
      {
        "name": state.chartName,
        "data": state.chartList.map(item => item[state.currentPolluteCode]),
        "type": state.chartType,
        "smooth": true, // 启用平滑曲线
        "lineStyle": {
          "color": "#266FE8" // 设置折线颜色
        },
        "showSymbol": false, // 不显示数据点的小圆点
        "barWidth": 15,
        "itemStyle": {
          "color": "#266FE8"
        }
      }
    ]
  }
  
};
const initPageData = () => {
// 处理参数
// state.tabSelect = 'hour'
// state.dateType = 'datetimerangehour';
// state.standEnterId = '913507005616846687001P'
state.pointCode = global.businessDialog.dialogParmas?.pointCode || global.businessDialog.dialogParmas?.point_code || '';
async function getData() {
  await apiRegistry.getLatestTime.request();
  await apiRegistry.getBaseInfo.request();
  await apiRegistry.getListData.request();
}
getData()
};
const setNoDataIcon = () => {
// 设置暂无数据图标
state.noDataImg= getCssVariable('--business-no-data-img');
};
const changeTime = (time) => {
state.timeRange = time || [];
state.startTime = time[0] || '';
state.endTime = time[1] || '';
apiRegistry.getListData.request();
};
const setCardStyle = () => {
const sheet = new CSSStyleSheet();
sheet.insertRule(`.t-scrollable-cards.ssqyMonitoringInformation-t-scrollable-cards-0-3 .scrollable-cards-container .scrollable-cards-body {
width: 100% !important;
}`);

document.adoptedStyleSheets = [sheet];


};
const handleShowType = () => {
watch([() => state.currentPolluteCode, () => state.showType], ([code, type]) => {
  if (type === 'table') {
    state.isShowchartUnit = false
    state.showTable = true
    state.showChart = false
    state.windDirectionSpeedLine = false
  } else if (type === 'line') {
    state.isShowchartUnit = true
    if (code === 'windspeed') {
      state.windDirectionSpeedLine = true
      state.showTable = false
      state.showChart = false
    } else {
      state.showChart = true
      state.showTable = false
      state.windDirectionSpeedLine = false
    }
  } else if (type === 'bar') {
    state.isShowchartUnit = true
    state.showChart = true
    state.showTable = false
    state.windDirectionSpeedLine = false
  }
}, { immediate: true })
};
const changeType = (item) => {
state.chartUint = item.unit
if(item.value === 'windspeed'){
  state.chartName = '风速'
}else{
  state.chartName = item.label
}
getChartOptions();
};
const changeShowType = (data) => {
if(data === 'table') return;
state.chartType = data
getChartOptions();
};
const handleWindDirection = (data) => {
if(!data) return 1;
// 确保 deg 在 [0, 360)
deg = ((Number(data) % 360) + 360) % 360;

// 加上 22.5°，使得 0° 成为每个区间的中心
const adjusted = deg + 22.5;

// 映射到 0～7 的整数（因为 360/45=8）
let index = Math.floor(adjusted / 45);

// 如果刚好是 360+22.5=382.5，index 会是 8，需归零
if (index >= 8) index = 0;

// 返回 1～8
return String(index + 1);
};
const initDataZoom = () => {
state.dataZoom =[
    {
      "type": "slider",
      "backgroundColor": getCssVariable('--business-show-bg30'),
      "borderColor": getCssVariable('--business-show-bg30'),
      "borderRadius": 0,
      "showDetail": false,
      "showDataShadow": false,
      "zoomLock": false,
      "height": 15,
      "start":0,
      "end":50,
      "brushSelect": false,
      "bottom": "0%",
      "brushStyle": {
        "color": "#000"
      },
      "fillerColor": getCssVariable('--business-btn-default'),
      "handleStyle": {
        "color": "#2D955A",
        "borderColor": "#D1D5D9",
        "borderCap": "round"
      }
    }
  ]
};
const ondateChange1767948867605_0_0 = (data) => {
// 执行自定义方法
changeTime(data);
};
const onchange1733973555614 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.currentPolluteCode = value;
// 执行自定义方法
changeType(selectValueItem);
};
const onchange1767772766838_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.showType = value;
// 执行自定义方法
changeShowType(value);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"END_TIME":"state.endTime","START_TIME":"state.startTime","POINT_CODE":"state.pointCode","TIME_TYPE":"hour","interfaceId":"c98745cf07d016439477d0b7e6cd656d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"END_TIME":state.endTime,"START_TIME":state.startTime,"POINT_CODE":state.pointCode,"TIME_TYPE":"hour","interfaceId":"c98745cf07d016439477d0b7e6cd656d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"END_TIME":state.endTime,"START_TIME":state.startTime,"POINT_CODE":state.pointCode,"TIME_TYPE":"hour","interfaceId":"c98745cf07d016439477d0b7e6cd656d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === "200" && data.length) {
  state.chartList = data
    .map((item) => {
      return {
        ...item,
        direction: handleWindDirection(item.centerangle), // 参数注意修改
      };
    })
    .sort(
      (a, b) =>
        new Date(a.monitortime).getTime() -
        new Date(b.monitortime).getTime(),
    );
  console.log('fsfsdfsdfsdsd',state.chartList)
  Object.keys(data).forEach((key) => {
    if (data[key] == "") {
      data[key] = "-";
    }
  });
  state.tableData = data;
} else {
  state.chartList = [];
  state.tableData = [];
}
getChartOptions();

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","TIME_TYPE":"hour","MONITORTIME":"state.endTime","interfaceId":"c98745cf07d016439477d0b7e6cd656d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"TIME_TYPE":"hour","MONITORTIME":state.endTime,"interfaceId":"c98745cf07d016439477d0b7e6cd656d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"TIME_TYPE":"hour","MONITORTIME":state.endTime,"interfaceId":"c98745cf07d016439477d0b7e6cd656d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     console.log(res);
const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
    state.baseInfo.regionName = data[0].district_name || '-'
    state.baseInfo.latitude = data[0].latitude || '-'
    state.baseInfo.longitude = data[0].longitude || '-'
    state.monitorData = [
        {
            "title": "风速",
            "num": data[0].windspeed || '-',
            "unit": "m/s",
            "icon": "/lego-generated-apps/lego_file/res/2026-03-27/4490a3d22b044319990474b357d03335.png",
            "selectIcon": "/lego-generated-apps/lego_file/res/2026-03-27/4490a3d22b044319990474b357d03335.png"
        },
        {
            "title": "风向",
            "num": data[0].windname || '-',
            "icon": "/lego-generated-apps/lego_file/res/2026-03-27/fe0e585e00994783a20f6f95bbd3eb31.png",
            "selectIcon": "/lego-generated-apps/lego_file/res/2026-03-27/fe0e585e00994783a20f6f95bbd3eb31.png"
        },
        {
            "title": "温度",
            "num": data[0].temperature || '-',
            "unit": "℃",
            "icon": "/lego-generated-apps/lego_file/res/2026-03-27/2826dc3b7f9a411da2227d899a809a9a.png",
            "selectIcon": "/lego-generated-apps/lego_file/res/2026-03-27/2826dc3b7f9a411da2227d899a809a9a.png"
        },
        {
            "title": "湿度",
            "num": data[0].relative_humidity || '-',
            "unit": "%",
            "icon": "/lego-generated-apps/lego_file/res/2026-03-27/07bc0a16b588486f9d892e258f7d2b55.png",
            "selectIcon": "/lego-generated-apps/lego_file/res/2026-03-27/07bc0a16b588486f9d892e258f7d2b55.png"
        },
        {
            "title": "降雨量",
            "num": data[0].precipitation || '-',
            "unit": "mm",
            "icon": "/lego-generated-apps/lego_file/res/2026-03-27/6f43e22929d64082a78c27eb2eea728e.png",
            "selectIcon": "/lego-generated-apps/lego_file/res/2026-03-27/6f43e22929d64082a78c27eb2eea728e.png"
        },
        {
            "title": "气压",
            "num": data[0].pressure || '-',
            "unit": "hPa",
            "icon": "/lego-generated-apps/lego_file/res/2026-03-27/330100078adc4cffad00ad33ceaba64b.png",
            "selectIcon": "/lego-generated-apps/lego_file/res/2026-03-27/330100078adc4cffad00ad33ceaba64b.png"
        }
    ]
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
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","TIME_TYPE":"hour","interfaceId":"b85fabbfb5925f7f7232d3ad863a4323"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"TIME_TYPE":"hour","interfaceId":"b85fabbfb5925f7f7232d3ad863a4323"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"TIME_TYPE":"hour","interfaceId":"b85fabbfb5925f7f7232d3ad863a4323"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.endTime = data.MONITORTIME || '';
  state.startTime = getPrevTime(state.endTime + ':00:00', 'hour').slice(0,13)
  state.timeRange = [state.startTime, state.endTime];
} else {
  state.startTime = '';
  state.endTime = '';
  state.timeRange = [];
}
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
                            setPageScale('t-l-c-qxBaseInfo', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setNoDataIcon();
// 执行自定义方法
handleShowType();
// 执行自定义方法
initPageData();
// 执行自定义方法
initDataZoom();
onMounted(() => {
setPageScale('t-l-c-qxBaseInfo', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
getChartOptions();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tTablex0x2ComputedData = computed(() => _.merge({}, componentState.tTablex0x2.default, componentState.tTablex0x2?.[state.screenSize]));

 const tRowx0x3ComputedData = computed(() => _.merge({}, componentState.tRowx0x3.default, componentState.tRowx0x3?.[state.screenSize]));

 const tColx0x3x0ComputedData = computed(() => _.merge({}, componentState.tColx0x3x0.default, componentState.tColx0x3x0?.[state.screenSize]));

 const tTextx0x3x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x3x0x0.default, componentState.tTextx0x3x0x0?.[state.screenSize]));

 const tDatePickerx0x3x0x1ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x3x0x1.default, componentState.tDatePickerx0x3x0x1?.[state.screenSize]));

 const tColx0x3x1ComputedData = computed(() => _.merge({}, componentState.tColx0x3x1.default, componentState.tColx0x3x1?.[state.screenSize]));

 const tSelectx0x3x1x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x3x1x0.default, componentState.tSelectx0x3x1x0?.[state.screenSize]));

 const tSelectx0x3x1x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x3x1x1.default, componentState.tSelectx0x3x1x1?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tListCardx0x5ComputedData = computed(() => _.merge({}, componentState.tListCardx0x5.default, componentState.tListCardx0x5?.[state.screenSize]));

 const tChartWindDirectionx0x6ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartWindDirectionx0x6.default, componentState.tChartWindDirectionx0x6?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRowx0x7ComputedData = computed(() => _.merge({}, componentState.tRowx0x7.default, componentState.tRowx0x7?.[state.screenSize]));

 const tRowx0x7x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x7x0.default, componentState.tRowx0x7x0?.[state.screenSize]));

 const tColx0x7x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x7x0x0.default, componentState.tColx0x7x0x0?.[state.screenSize]));

 const tTextx0x7x0x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x7x0x0x0.default, componentState.tTextx0x7x0x0x0?.[state.screenSize]));

 const tColx0x7x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x7x0x1.default, componentState.tColx0x7x0x1?.[state.screenSize]));

 const tTextx0x7x0x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x7x0x1x0.default, componentState.tTextx0x7x0x1x0?.[state.screenSize]));

 const tRowx0x7x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x7x1.default, componentState.tRowx0x7x1?.[state.screenSize]));

 const tColx0x7x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x7x1x0.default, componentState.tColx0x7x1x0?.[state.screenSize]));

 const tTextx0x7x1x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x7x1x0x0.default, componentState.tTextx0x7x1x0x0?.[state.screenSize]));

 const tColx0x7x1x1ComputedData = computed(() => _.merge({}, componentState.tColx0x7x1x1.default, componentState.tColx0x7x1x1?.[state.screenSize]));

 const tTextx0x7x1x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x7x1x1x0.default, componentState.tTextx0x7x1x1x0?.[state.screenSize]));

 const tColx0x7x1x2ComputedData = computed(() => _.merge({}, componentState.tColx0x7x1x2.default, componentState.tColx0x7x1x2?.[state.screenSize]));

 const tTextx0x7x1x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x7x1x2x0.default, componentState.tTextx0x7x1x2x0?.[state.screenSize]));

 const tColx0x7x1x3ComputedData = computed(() => _.merge({}, componentState.tColx0x7x1x3.default, componentState.tColx0x7x1x3?.[state.screenSize]));

 const tTextx0x7x1x3x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x7x1x3x0.default, componentState.tTextx0x7x1x3x0?.[state.screenSize]));

 const tChartDesignx0x8ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x8.default, componentState.tChartDesignx0x8?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

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
tComponentx0x0ComputedData,
tTextx0x1ComputedData,
tTablex0x2ComputedData,
tRowx0x3ComputedData,
tColx0x3x0ComputedData,
tTextx0x3x0x0ComputedData,
tDatePickerx0x3x0x1ComputedData,
tColx0x3x1ComputedData,
tSelectx0x3x1x0ComputedData,
tSelectx0x3x1x1ComputedData,
tTextx0x4ComputedData,
tListCardx0x5ComputedData,
tChartWindDirectionx0x6ComputedData,
tRowx0x7ComputedData,
tRowx0x7x0ComputedData,
tColx0x7x0x0ComputedData,
tTextx0x7x0x0x0ComputedData,
tColx0x7x0x1ComputedData,
tTextx0x7x0x1x0ComputedData,
tRowx0x7x1ComputedData,
tColx0x7x1x0ComputedData,
tTextx0x7x1x0x0ComputedData,
tColx0x7x1x1ComputedData,
tTextx0x7x1x1x0ComputedData,
tColx0x7x1x2ComputedData,
tTextx0x7x1x2x0ComputedData,
tColx0x7x1x3ComputedData,
tTextx0x7x1x3x0ComputedData,
tChartDesignx0x8ComputedData,
ondateChange1767948867605_0_0,
onchange1733973555614,
onchange1767772766838_0_0,
};
},
};