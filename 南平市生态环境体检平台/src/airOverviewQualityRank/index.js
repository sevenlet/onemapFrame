window.airOverviewQualityRankComponent = {
template: 
`<div id="t-l-c-airOverviewQualityRank" class="t-l-c-airOverviewQualityRank" >` +
`<t-tabs-base id="t-tabs-base-2fe6.7c313ecba" class="airOverviewQualityRank-t-tabs-base-0-0"  :data="replaceCssVariables(state.tabData, global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x0ComputedData.space" :selected-tab-val="replaceCssVariables(state.tabSelect, global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x0ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x0ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x0ComputedData.alias" :c-style="tTabsBasex0x0ComputedData.cStyle" @tab-click="ontabClick1735442100184">` +
`</t-tabs-base>` +
`<t-rect id="t-rect-64db.c281c415b" class="airOverviewQualityRank-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle" @click="onclick1734611648529">` +
`</t-rect>` +
`<t-table v-if="state.tableClickable === false" id="t-table-c6bf.852c2bddf" class="airOverviewQualityRank-t-table-0-2"  :height="tTablex0x2ComputedData.height" :stripe="tTablex0x2ComputedData.stripe" :border="tTablex0x2ComputedData.border" :auto-scroll="tTablex0x2ComputedData.autoScroll" :speed="tTablex0x2ComputedData.speed" :show-animation="tTablex0x2ComputedData.showAnimation" :animation-delay="tTablex0x2ComputedData.animationDelay" :animation-type="tTablex0x2ComputedData.animationType" :columns="replaceCssVariables(state.tableSettingColumns, global?.theme || global?.activeTheme || '默认主题')" :data="replaceCssVariables(state.tableData, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x2ComputedData.defaultSort" :c-style="tTablex0x2ComputedData.cStyle" @sort-change="onsortChange1734599995055">` +
`</t-table>` +
`<t-table v-if="state.tableClickable === true" id="t-table-e4e7.dc1d43abc" class="airOverviewQualityRank-t-table-0-3"  :height="tTablex0x3ComputedData.height" :stripe="tTablex0x3ComputedData.stripe" :border="tTablex0x3ComputedData.border" :auto-scroll="tTablex0x3ComputedData.autoScroll" :speed="tTablex0x3ComputedData.speed" :show-animation="tTablex0x3ComputedData.showAnimation" :animation-delay="tTablex0x3ComputedData.animationDelay" :animation-type="tTablex0x3ComputedData.animationType" :columns="replaceCssVariables(state.tableSettingColumns, global?.theme || global?.activeTheme || '默认主题')" :data="replaceCssVariables(state.tableData, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x3ComputedData.defaultSort" :c-style="tTablex0x3ComputedData.cStyle" @sort-change="onsortChange1734613141963" @row-click="onrowClick1735268616635">` +
`</t-table>` +
`<t-search id="t-search-1064.f40b56d25" class="airOverviewQualityRank-t-search-0-4"  :type="tSearchx0x4ComputedData.type" :input-value="replaceCssVariables(state.inputValue, global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x4ComputedData.maxlength" :minlength="tSearchx0x4ComputedData.minlength" :show-word-limit="tSearchx0x4ComputedData.showWordLimit" :placeholder="tSearchx0x4ComputedData.placeholder" :clearable="tSearchx0x4ComputedData.clearable" :show-password="tSearchx0x4ComputedData.showPassword" :disabled="tSearchx0x4ComputedData.disabled" :prefix-icon="tSearchx0x4ComputedData.prefix-icon" :suffix-icon="tSearchx0x4ComputedData.suffix-icon" :rows="tSearchx0x4ComputedData.rows" :autosize="tSearchx0x4ComputedData.autosize" :name="tSearchx0x4ComputedData.name" :readonly="tSearchx0x4ComputedData.readonly" :step="tSearchx0x4ComputedData.step" :autofocus="tSearchx0x4ComputedData.autofocus" :form="tSearchx0x4ComputedData.form" :label="tSearchx0x4ComputedData.label" :tabindex="tSearchx0x4ComputedData.tabindex" :validate-event="tSearchx0x4ComputedData.validateEvent" :c-style="tSearchx0x4ComputedData.cStyle" :has-search-btn="tSearchx0x4ComputedData.hasSearchBtn" @change="onchange1733894511375">` +
`</t-search>` +
`<t-rect v-if="global.regionaQuery.defaultRegionType === 'county'" id="t-rect-94d8.4241474bf" class="airOverviewQualityRank-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="global.regionaQuery.defaultRegionType === 'street'" id="t-rect-08a8.3ae099316" class="airOverviewQualityRank-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle">` +
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
   orderType: "ASC",
   orderColumnName: "AQI",
   isProvince: false,
   airOverviewContentState: {"timeType":"","timeValue":""},
   tableClickable: false,
   showTable: true,
   tabSelect: "city",
   tableSettingColumns: [],
   inputValue: "",
   hourTableColumns: [{"label":"排名","key":"RANK_NO","align":"center","operationList":[],"stateList":[],"fixed":true,"width":"41PX"},{"label":"行政区","key":"POINT_NAME","align":"center","operationList":[],"stateList":[],"width":"64PX","fixed":true,"showOverflowTooltip":true},{"label":"AQI","key":"AQI","stateKey":"AQI_NAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"优","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #00E400 0%, #00E400 100%)"}},{"name":"良","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #F9D000 0%, #F9D000 100%)"}},{"name":"轻度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF7E00 0%, #FF7E00 100%)"}},{"name":"中度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF0000 0%, #FF0000 100%)"}},{"name":"重度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #C500F4 0%, #C500F4 100%)"}},{"name":"严重污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #8C0024 0%, #8C0024 100%)"}},{"name":"--","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #AAAAAA 0%, #AAAAAA 100%)"}}],"width":"61PX","sortable":"custom"},{"label":"PM₂.₅","key":"PM25","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"64PX","sortable":"custom","labelRaw":"PM₂.₅"},{"label":"PM₁₀","key":"PM10","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"61PX","sortable":"custom","labelRaw":"PM₁₀"},{"label":"O₃","key":"O3","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"61PX","sortable":"custom","labelRaw":"O₃"},{"label":"NO₂","key":"NO2","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"61PX","sortable":"custom","labelRaw":"NO₂"},{"label":"CO","key":"CO","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"61PX","sortable":"custom","labelRaw":"{{CO}}"},{"label":"SO₂","key":"SO2","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"61PX","sortable":"custom","labelRaw":"SO₂"},{"label":"NO","key":"NO","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"61PX","sortable":"custom","labelRaw":"{{NO}}"},{"label":"NOx","key":"NOX","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"61PX","sortable":"custom","labelRaw":"{{NOx}}"},{"label":"首要污染物","key":"PRIMPOLLUTE","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"95PX","sortable":"custom","labelRaw":"{{首要污染物}}"}],
   monthTableColumns: [{"label":"排名","key":"RANK_NO","align":"center","operationList":[],"stateList":[],"minWidth":"0PX","fixed":true,"width":"61PX"},{"label":"行政区","key":"POINT_NAME","align":"center","operationList":[],"stateList":[],"width":"61PX","fixed":true,"showOverflowTooltip":true},{"label":"综合指数","key":"ZHZS","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"80PX","sortable":"custom","type":"state","stateKey":"ZHZS_COLOR_STATUS","infoKey":""},{"label":"同比/变化率","key":"ZHZS_PER","align":"center","width":"90PX","sortable":false,"type":"default","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}}},{"label":"PM₂.₅","key":"PM25","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"65PX","sortable":"custom","type":"state","stateKey":"PM25_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"PM₂.₅"},{"label":"同比/变化率","key":"PM25_PER","align":"center","width":"90PX","sortable":false,"type":"default","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}}},{"label":"PM₁₀","key":"PM10","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"90PX","sortable":"custom","type":"state","stateKey":"PM10_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"PM₂.₅"},{"label":"同比/变化率","key":"PM10_PER","align":"center","width":"90PX","sortable":false,"type":"default","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}}},{"label":"O₃-8h","key":"O3_8","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"80PX","sortable":"custom","type":"state","stateKey":"O3_8_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"O₃-8h"},{"label":"同比/变化率","key":"O3_8_PER","align":"center","width":"90PX","sortable":false,"type":"default","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}}},{"label":"NO₂","key":"NO2","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"65PX","sortable":true,"type":"state","stateKey":"NO2_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"NO₂"},{"label":"同比/变化率","key":"NO2_PER","align":"center","width":"90PX","sortable":false,"type":"default","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}}},{"label":"CO","key":"CO","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"65PX","sortable":"custom","type":"state","stateKey":"CO_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"NO₂"},{"label":"同比/变化率","key":"CO_PER","align":"center","width":"90PX","sortable":false,"type":"default","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}}},{"label":"SO₂","key":"SO2","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"65PX","sortable":"custom","type":"state","stateKey":"SO2_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"SO₂"},{"label":"同比/变化率","key":"SO2_PER","align":"center","width":"90PX","sortable":false,"type":"default","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}}},{"label":"优良天数","key":"GOOD_DAY","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"80PX","sortable":"custom","type":"state","stateKey":"GOOD_DAY_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"SO₂"},{"label":"同比","key":"GOOD_DAY_CUT","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"65PX","sortable":false,"type":"default","stateKey":"compresiveIndexStatus","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"SO₂"},{"label":"重污染天数","key":"BAD_DAY","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"95PX","sortable":"custom","type":"state","stateKey":"BAD_DAY_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"SO₂"},{"label":"同比","key":"BAD_DAY_CUT","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"65PX","sortable":false,"type":"default","stateKey":"compresiveIndexStatus","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"SO₂"}],
   dayAccTableColumns: [{"label":"排名","key":"RANK_NO","align":"center","operationList":[],"stateList":[],"fixed":true,"width":"61PX"},{"label":"行政区","key":"POINT_NAME","align":"center","operationList":[],"stateList":[],"width":"61PX","fixed":true,"showOverflowTooltip":true},{"label":"AQI","key":"AQI","stateKey":"AQI_NAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"优","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #00E400 0%, #00E400 100%)"}},{"name":"良","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #F9D000 0%, #F9D000 100%)"}},{"name":"轻度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF7E00 0%, #FF7E00 100%)"}},{"name":"中度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF0000 0%, #FF0000 100%)"}},{"name":"重度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #C500F4 0%, #C500F4 100%)"}},{"name":"严重污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #8C0024 0%, #8C0024 100%)"}},{"name":"--","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #AAAAAA 0%, #AAAAAA 100%)"}}],"width":"61PX","sortable":"custom"},{"label":"PM₂.₅","key":"PM25","align":"center","operationList":[],"stateList":[],"labelRaw":"PM₂.₅","width":"64PX","sortable":"custom"},{"label":"PM₁₀","key":"PM10","align":"center","operationList":[],"stateList":[],"labelRaw":"PM₁₀","width":"64PX","sortable":"custom"},{"label":"O₃-1h","key":"O3_1H","align":"center","operationList":[],"stateList":[],"labelRaw":"O₃-1h","width":"80PX","sortable":"custom"},{"label":"O₃-8h","key":"O3_8","align":"center","operationList":[],"stateList":[],"labelRaw":"O₃-8h","width":"80PX","sortable":"custom"},{"label":"NO₂","key":"NO2","align":"center","operationList":[],"stateList":[],"labelRaw":"NO₂","width":"65PX","sortable":"custom"},{"label":"CO","key":"CO","align":"center","operationList":[],"stateList":[],"labelRaw":"NO₂","width":"65PX","sortable":"custom"},{"label":"SO₂","key":"SO2","align":"center","operationList":[],"stateList":[],"labelRaw":"SO₂","width":"65PX","sortable":"custom"},{"label":"首要污染物","key":"PRIMPOLLUTE","align":"center","operationList":[],"stateList":[],"labelRaw":"首要污染物","width":"95PX","sortable":"custom"}],
   dayTableColumns: [{"label":"排名","key":"RANK_NO","align":"center","operationList":[],"stateList":[],"fixed":true,"width":"61PX"},{"label":"行政区","key":"POINT_NAME","align":"center","operationList":[],"stateList":[],"width":"61PX","fixed":true,"showOverflowTooltip":true},{"label":"AQI","key":"AQI","stateKey":"AQI_NAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"优","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #00E400 0%, #00E400 100%)"}},{"name":"良","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #F9D000 0%, #F9D000 100%)"}},{"name":"轻度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF7E00 0%, #FF7E00 100%)"}},{"name":"中度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF0000 0%, #FF0000 100%)"}},{"name":"重度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #C500F4 0%, #C500F4 100%)"}},{"name":"严重污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #8C0024 0%, #8C0024 100%)"}},{"name":"--","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #AAAAAA 0%, #AAAAAA 100%)"}}],"width":"61PX","sortable":"custom"},{"label":"PM₂.₅","key":"PM25","align":"center","operationList":[],"stateList":[],"labelRaw":"PM₂.₅","width":"64PX","sortable":"custom"},{"label":"PM₁₀","key":"PM10","align":"center","operationList":[],"stateList":[],"labelRaw":"PM₁₀","width":"64PX","sortable":"custom"},{"label":"O₃-8h","key":"O3_8","align":"center","operationList":[],"stateList":[],"labelRaw":"O₃-8h","width":"80PX","sortable":"custom"},{"label":"NO₂","key":"NO2","align":"center","operationList":[],"stateList":[],"labelRaw":"NO₂","width":"65PX","sortable":"custom"},{"label":"CO","key":"CO","align":"center","operationList":[],"stateList":[],"labelRaw":"NO₂","width":"65PX","sortable":"custom"},{"label":"SO₂","key":"SO2","align":"center","operationList":[],"stateList":[],"labelRaw":"SO₂","width":"65PX","sortable":"custom"},{"label":"首要污染物","key":"PRIMPOLLUTE","align":"center","operationList":[],"stateList":[],"labelRaw":"首要污染物","width":"95PX","sortable":"custom"}],
   tableData: [],
   tabData: [{"label":"省内","value":"province","disabled":false},{"label":"市内","value":"city","disabled":false},{"label":"区县","value":"point_shik","disabled":false},{"label":"镇街","value":"street","disabled":false},{"label":"站点","value":"point_all","disabled":false},{"label":"国控","value":"point_gk","disabled":false},{"label":"省控","value":"point_sk","disabled":false}],
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
tTabsBasex0x0: {
defaultStyle: {
            default: {"width":"410px","height":"32px","position":"unset","left":"0px","top":"0px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
data:[{"label":"省内","value":"province","disabled":false},{"label":"市内","value":"city","disabled":false},{"label":"区县","value":"point_shik","disabled":false},{"label":"镇街","value":"street","disabled":false},{"label":"站点","value":"point_all","disabled":false},{"label":"国控","value":"point_gk","disabled":false},{"label":"省控","value":"point_sk","disabled":false}],
space:1,
selectedTabVal:"city",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","position":"unset","left":"0px","top":"0px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px","cursor":"not-allowed"}},"label":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"356px","top":"44px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"搜索",
active:false,
cStyle:{"wrapper":{"default":{"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"356px","top":"44px","cursor":"pointer"}}}, 
 },
},
tTablex0x2: {
defaultStyle: {
            default: {"width":"410px","height":"252px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"0px","top":"88px"},
            
            },
 default: { 
 
height:"252",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"252px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"0px","top":"88px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-table-header-bg)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-table-odd-row-bg)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"var(--t-white)","height":"40px","paddingTop":"8px","paddingBottom":"8px","fontSize":"14px"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"stripeBodyCell":{"default":{"backgroundColor":"var(--business-table-even-row-bg)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-table-even-row-bg)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}}}, 
 },
},
tTablex0x3: {
defaultStyle: {
            default: {"width":"410px","height":"252px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"0px","top":"88px"},
            
            },
 default: { 
 
height:"252",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"252px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"0px","top":"88px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-table-header-bg)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-table-odd-row-bg)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"var(--t-white)","height":"40px","paddingTop":"8px","paddingBottom":"8px","fontSize":"14px"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"stripeBodyCell":{"default":{"backgroundColor":"var(--business-table-even-row-bg)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-table-even-row-bg)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"},"default":{"cursor":"pointer"}}}, 
 },
},
tSearchx0x4: {
defaultStyle: {
            default: {"width":"352px","height":"32px","position":"unset","left":"0px","top":"44px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},
            
            },
 default: { 
 
type:"text",
inputValue:"",
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
cStyle:{"wrapper":{"default":{"width":"352px","height":"32px","position":"unset","left":"0px","top":"44px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"118px","height":"32px","cursor":"not-allowed","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"118px","height":"32px","cursor":"not-allowed","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"itemWrapper":{"disabled":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"176px","height":"32px","cursor":"not-allowed","position":"unset","left":"0px","top":"0px","animationName":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"176px","height":"32px","cursor":"not-allowed","position":"unset","left":"0px","top":"0px","animationName":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"itemWrapper":{"disabled":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
});
const setTableColumns = () => {
// 通过显示隐藏刷新一下表格（排序选中一个时，改变表格配置后，上一个排序的选中效果还在）
const curTableClickable = state.tableClickable;
state.tableClickable = !(state.tableClickable);


setTimeout(() => {
  state.tableClickable = curTableClickable;
});

// 表格第二列-显示行政区
const regionName = ['province', 'city', 'point_shik', 'street'];
// 表格第二列-显示站点
const pointName = ['point_all', 'point_gk', 'point_sk'];
let curTableColumns = [];
const upperTimeType = state.airOverviewContentState.timeType.toUpperCase();
// 根据时间类型展示不同的表格配置
switch (upperTimeType) {
  case 'MONTH':
  case 'QUARTER':
  case 'YEAR':
    // monthTableColumns
    curTableColumns = JSON.parse(JSON.stringify(state.monthTableColumns));
    break;
  case 'DAY':
    const timeValue = state.airOverviewContentState.timeValue;
    // 如果日选择了当日，展示当日累计数据
    if (timeValue && dateFormat(timeValue, 'yyyy-MM-dd') === dateFormat(new Date(), 'yyyy-MM-dd')) {
      // dayAccTableColumns
      curTableColumns = JSON.parse(JSON.stringify(state.dayAccTableColumns));
    } else {
      curTableColumns = JSON.parse(JSON.stringify(state.dayTableColumns));
    }

    break;
  case 'HOUR':
    curTableColumns = JSON.parse(JSON.stringify(state.hourTableColumns));
    break;
  default:
    break;
}
state.tableSettingColumns = curTableColumns;
// 修改表格第二列配置
state.tableSettingColumns[1] = regionName.includes(state.tabSelect) ? {
  ...state.tableSettingColumns[1],
  label: '行政区',
} : {
  ...state.tableSettingColumns[1],
  label: '站点',
  "align": "left","headerAlign": "left",
}
};
const getProvider = () => {
const rootData = inject('airOverviewContentState');
state.airOverviewContentState = rootData;
};
const changeInputName = (data) => {
if (typeof (data) === 'string') {
  state.inputValue = data;
}
};
const watchValues = () => {
// 监听参数变化
watch(() => state.airOverviewContentState, (newVal) => {
  setTableColumns();
  if (newVal.timeType && newVal.timeValue) {
    setDefaultOrderParams();
    getRankData();
  }
},
  {
    deep: true,
  }
);

// 监听regionCode变化
watch(() => global.regionaQuery.regionCode, () => {
  setDefaultTabSelect();
});
};
const changeTableClickable = () => {
// 可点击定位tab类型选中
const clickableTabs = ['point_all', 'point_gk', 'point_sk'];
// 选中省级，表格不可点击；未选中省级时，站点、国控、省控 可点击
state.tableClickable = state.isProvince ? false : clickableTabs.includes(state.tabSelect);
};
const handleTableOrder = (value) => {
// 设置升序、降序字段值
if (value.prop && value.order) {
  state.orderColumnName = value.prop;
  state.orderType = value.order === 'descending' ? 'DESC' : 'ASC';
} else {
  setDefaultOrderParams();
}
getRankData();

};
const setDefaultOrderParams = () => {
// 设置默认值
state.orderColumnName = 'AQI';
state.orderType = 'ASC';
const upperTimeType = state.airOverviewContentState.timeType.toUpperCase();
// 根据时间类型展示不同的表格配置
switch (upperTimeType) {
  case 'MONTH':
  case 'QUARTER':
  case 'YEAR':
    // 设置默认值
    state.orderColumnName = 'ZHZS';
    break;
  default:
    break;
}
};
const setDefaultTabSelect = () => {
/**
 * 设置tab默认选中值
 */
const regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
// 设置tab选中
switch (regionLevelCode) {
  case 'province':
  case 'city':
  case 'street':
    state.tabSelect = regionLevelCode;
    break;
  case 'county':
    state.tabSelect = 'point_shik';
    break;
  default:
    break;
}
// 是否为省级
state.isProvince = regionLevelCode === 'province';
changeTableClickable();
};
const handleTableRowClick = (row,column) => {
if (row.LATITUDE && row.LONGITUDE) {
  // 给地图发消息
  rootData.rootSocket.emit('message', {
    type: 'airQualityRankingClicked',
    room: global.socketRoom,
    data: {
      // 省控、国控等
      type: row.POINT_TYPE_CODE,
      // 携带的其他属性数据
      attrs: {
        ...row,
      }
    },
  });
}

};
const handleTabChange = (tabValue) => {
if (tabValue !== state.tabSelect) {
  state.tabSelect = tabValue;
  state.tableData = [];
  changeTableClickable();
  setTableColumns();
  setDefaultOrderParams();
  getRankData();
}
};
const onsortChange1734599995055 = (row) => {
// 执行自定义方法
handleTableOrder(row);
};
const onsortChange1734613141963 = (row) => {
// 执行自定义方法
handleTableOrder(row);
};
const onclick1734611648529 = () => {
// 事件交互-请求调用接口
getRankData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onchange1733894511375 = (value) => {
// 执行自定义方法
changeInputName(value);
};
const onrowClick1735268616635 = (row,column,event) => {
// 执行自定义方法
handleTableRowClick(row,column);
};
const ontabClick1735442100184 = (data) => {
// 执行自定义方法
handleTabChange(data.value);
};
// 接口函数
const getRankData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE":state.orderColumnName,"ORDER":state.orderType,"REGION_CODE":global.regionaQuery.regionCode,"POINT_NAME":state.inputValue,"DATA_TYPE":state.tabSelect,"MONITORTIME":state.airOverviewContentState.timeValue,"TIME_TYPE":state.airOverviewContentState.timeType,"interfaceId":"3210b90e2d6f5e2b03a21719676cfbe8"},}).then((res) => {
     // 成功的操作
     state.tableData = [];
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.tableData = (data || []).map((item) => ({
    ...item,
    PRIMPOLLUTE: handleNoVal(replacePollutionCharacter(item.PRIMPOLLUTE)),
  }));
  // 把佛山市的数据过滤出来放在第一条
  const foshanCityRow = state.tableData.find((item) => item.POINT_CODE === '440600000000');
  const foshanCityIndex = state.tableData.findIndex((item) => item.POINT_CODE === '440600000000');
  if (foshanCityIndex !== -1) {
    state.tableData.splice(foshanCityIndex, 1);
    state.tableData.unshift(foshanCityRow);
  }
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewQualityRank', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
setTableColumns();
// 执行自定义方法
setDefaultTabSelect();
// 执行自定义方法
watchValues();
onMounted(() => {
setPageScale('t-l-c-airOverviewQualityRank', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTabsBasex0x0ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x0.default, componentState.tTabsBasex0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tTablex0x2ComputedData = computed(() => _.merge({}, componentState.tTablex0x2.default, componentState.tTablex0x2?.[state.screenSize]));

 const tTablex0x3ComputedData = computed(() => _.merge({}, componentState.tTablex0x3.default, componentState.tTablex0x3?.[state.screenSize]));

 const tSearchx0x4ComputedData = computed(() => _.merge({}, componentState.tSearchx0x4.default, componentState.tSearchx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tTabsBasex0x0ComputedData,
tRectx0x1ComputedData,
tTablex0x2ComputedData,
tTablex0x3ComputedData,
tSearchx0x4ComputedData,
tRectx0x5ComputedData,
tRectx0x6ComputedData,
ontabClick1735442100184,
onclick1734611648529,
onsortChange1734599995055,
onsortChange1734613141963,
onrowClick1735268616635,
onchange1733894511375,
};
},
};