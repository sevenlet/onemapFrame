window.dataConvergencePopComponent = {
template: 
`<div id="t-l-c-dataConvergencePop" class="t-l-c-dataConvergencePop" >` +
`<t-rect id="t-rect-3c13.6e224e776" class="dataConvergencePop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-1410.863eda6a7" class="dataConvergencePop-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-79b1.520eb885e" class="dataConvergencePop-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-39ea.51f8eb66d" class="dataConvergencePop-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @mouseout="onmouseout1739345365135" @click="onclick1739960380902">` +
`</t-rect>` +
`<t-rect id="t-rect-5094.9a9212dbc" class="dataConvergencePop-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @mouseover="onmouseover1739345261051">` +
`</t-rect>` +
`<t-table id="t-table-dfde.5586f34ad" class="dataConvergencePop-t-table-0-5"  :height="tTablex0x5ComputedData.height" :stripe="tTablex0x5ComputedData.stripe" :border="tTablex0x5ComputedData.border" :auto-scroll="tTablex0x5ComputedData.autoScroll" :speed="tTablex0x5ComputedData.speed" :columns="tTablex0x5ComputedData.columns" :data="replaceCssVariables(state.tableData, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x5ComputedData.defaultSort" :c-style="tTablex0x5ComputedData.cStyle" :highlight-current-row="tTablex0x5ComputedData.highlightCurrentRow">` +
`</t-table>` +
`<t-text id="t-text-0849.df06c90a6" class="dataConvergencePop-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`<t-select id="t-select-2875.027e56ed" class="dataConvergencePop-t-select-0-7"  :active-value="replaceCssVariables(state.BUSINESS_TYPE, global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(state.typeData, global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x7ComputedData.alias" :multiple="tSelectx0x7ComputedData.multiple" :placeholder="tSelectx0x7ComputedData.placeholder" :clearable="tSelectx0x7ComputedData.clearable" :disabled="tSelectx0x7ComputedData.disabled" :name="tSelectx0x7ComputedData.name" :autocomplete="tSelectx0x7ComputedData.autocomplete" :filterable="tSelectx0x7ComputedData.filterable" :no-match-text="tSelectx0x7ComputedData.no-match-text" :no-data-text="tSelectx0x7ComputedData.no-data-text" :c-style="tSelectx0x7ComputedData.cStyle" @change="onchange1741692175952">` +
`</t-select>` +
`<t-text id="t-text-e9ad.e5093ff31" class="dataConvergencePop-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-ab59.e88cd1abe" class="dataConvergencePop-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle">` +
`</t-text>` +
`<t-date-picker id="t-date-picker-d0f9.84df9004" class="dataConvergencePop-t-date-picker-0-10"  :placeholder="tDatePickerx0x10ComputedData.placeholder" :start-placeholder="tDatePickerx0x10ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x10ComputedData.endPlaceholder" :type="tDatePickerx0x10ComputedData.type" :clearable="tDatePickerx0x10ComputedData.clearable" :range-separator="tDatePickerx0x10ComputedData.rangeSeparator" :default-date="tDatePickerx0x10ComputedData.default-date" :separator="tDatePickerx0x10ComputedData.separator" :c-style="tDatePickerx0x10ComputedData.cStyle" :is-disabled-front="tDatePickerx0x10ComputedData.isDisabledFront" @date-change="ondateChange1741692530469">` +
`</t-date-picker>` +
`<t-pagination-base id="t-pagination-base-63ce.2a0f067ca" class="dataConvergencePop-t-pagination-base-0-11"  :total="replaceCssVariables(state.pageInfo.total, global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x11ComputedData.small" :page-size="replaceCssVariables(state.pageInfo.pageSize, global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x11ComputedData.pagerCount" :current-page="replaceCssVariables(state.pageInfo.pageNum, global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x11ComputedData.layout" :page-sizes="tPaginationBasex0x11ComputedData.pageSizes" :disabled="tPaginationBasex0x11ComputedData.disabled" :c-style="tPaginationBasex0x11ComputedData.cStyle" @size-change="onsizeChange1741691311630" @current-change="oncurrentChange1741691330398">` +
`</t-pagination-base>` +
`<t-text id="t-text-1e5e.5d5f94063" class="dataConvergencePop-t-text-0-12"  :label="tTextx0x12ComputedData.label" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle">` +
`</t-text>` +
`<t-rolling-number id="t-rolling-number-0469.eac42354c" class="dataConvergencePop-t-rolling-number-0-13"  :number="replaceCssVariables(state.dataAggregateAll.SJZL, global?.theme || global?.activeTheme || '默认主题')" :min-length="tRollingNumberx0x13ComputedData.minLength" :prefix="tRollingNumberx0x13ComputedData.prefix" :suffix="tRollingNumberx0x13ComputedData.suffix" :animation-duration="tRollingNumberx0x13ComputedData.animationDuration" :c-style="tRollingNumberx0x13ComputedData.cStyle">` +
`</t-rolling-number>` +
`<t-rect id="t-rect-f4e9.f5e97c787" class="dataConvergencePop-t-rect-0-14"  :tip="tRectx0x14ComputedData.tip" :label="tRectx0x14ComputedData.label" :active="tRectx0x14ComputedData.active" :c-style="tRectx0x14ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-3de7.3b08029f" class="dataConvergencePop-t-rect-0-15"  :tip="tRectx0x15ComputedData.tip" :label="tRectx0x15ComputedData.label" :active="tRectx0x15ComputedData.active" :c-style="tRectx0x15ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-c527.b30d85977" class="dataConvergencePop-t-rect-0-16"  :tip="tRectx0x16ComputedData.tip" :label="tRectx0x16ComputedData.label" :active="tRectx0x16ComputedData.active" :c-style="tRectx0x16ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-unit id="t-text-unit-41db.a27c5f869" class="dataConvergencePop-t-text-unit-0-17"  :c-style="tTextUnitx0x17ComputedData.cStyle" :justify="tTextUnitx0x17ComputedData.justify" :align="tTextUnitx0x17ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_TBJSJHJ, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x17ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x17ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text id="t-text-02a0.2afe2dae" class="dataConvergencePop-t-text-0-18"  :label="tTextx0x18ComputedData.label" :editable="tTextx0x18ComputedData.editable" :c-style="tTextx0x18ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-fb89.883a904e2" class="dataConvergencePop-t-rect-0-19"  :tip="tRectx0x19ComputedData.tip" :label="tRectx0x19ComputedData.label" :active="tRectx0x19ComputedData.active" :c-style="tRectx0x19ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-952a.7f1bfaf47" class="dataConvergencePop-t-text-0-20"  :label="tTextx0x20ComputedData.label" :editable="tTextx0x20ComputedData.editable" :c-style="tTextx0x20ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-207d.111b4592c" class="dataConvergencePop-t-text-unit-0-21"  :c-style="tTextUnitx0x21ComputedData.cStyle" :justify="tTextUnitx0x21ComputedData.justify" :align="tTextUnitx0x21ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_TBJSJHJ_DWCS, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x21ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x21ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-b79c.a04c88af" class="dataConvergencePop-t-rect-0-22"  :tip="tRectx0x22ComputedData.tip" :label="tRectx0x22ComputedData.label" :active="tRectx0x22ComputedData.active" :c-style="tRectx0x22ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-bfeb.6621a5847" class="dataConvergencePop-t-text-0-23"  :label="tTextx0x23ComputedData.label" :editable="tTextx0x23ComputedData.editable" :c-style="tTextx0x23ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-affe.654f134e6" class="dataConvergencePop-t-text-unit-0-24"  :c-style="tTextUnitx0x24ComputedData.cStyle" :justify="tTextUnitx0x24ComputedData.justify" :align="tTextUnitx0x24ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_TBJSJHJ_YWXT, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x24ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x24ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-e4bb.80d25d66e" class="dataConvergencePop-t-rect-0-25"  :tip="tRectx0x25ComputedData.tip" :label="tRectx0x25ComputedData.label" :active="tRectx0x25ComputedData.active" :c-style="tRectx0x25ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-b6a3.262c071ff" class="dataConvergencePop-t-text-0-26"  :label="tTextx0x26ComputedData.label" :editable="tTextx0x26ComputedData.editable" :c-style="tTextx0x26ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-6c01.607c33df4" class="dataConvergencePop-t-text-unit-0-27"  :c-style="tTextUnitx0x27ComputedData.cStyle" :justify="tTextUnitx0x27ComputedData.justify" :align="tTextUnitx0x27ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_TBJSJHJ_SJB, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x27ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x27ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-8635.3e32d640f" class="dataConvergencePop-t-rect-0-28"  :tip="tRectx0x28ComputedData.tip" :label="tRectx0x28ComputedData.label" :active="tRectx0x28ComputedData.active" :c-style="tRectx0x28ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-1792.762988efd" class="dataConvergencePop-t-rect-0-29"  :tip="tRectx0x29ComputedData.tip" :label="tRectx0x29ComputedData.label" :active="tRectx0x29ComputedData.active" :c-style="tRectx0x29ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-unit id="t-text-unit-fb9e.aad473543" class="dataConvergencePop-t-text-unit-0-30"  :c-style="tTextUnitx0x30ComputedData.cStyle" :justify="tTextUnitx0x30ComputedData.justify" :align="tTextUnitx0x30ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_STHJBSJHJ, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x30ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x30ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text id="t-text-72b7.933d7673f" class="dataConvergencePop-t-text-0-31"  :label="tTextx0x31ComputedData.label" :editable="tTextx0x31ComputedData.editable" :c-style="tTextx0x31ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-d8f0.b6e48e682" class="dataConvergencePop-t-rect-0-32"  :tip="tRectx0x32ComputedData.tip" :label="tRectx0x32ComputedData.label" :active="tRectx0x32ComputedData.active" :c-style="tRectx0x32ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-9345.6b276b325" class="dataConvergencePop-t-text-0-33"  :label="tTextx0x33ComputedData.label" :editable="tTextx0x33ComputedData.editable" :c-style="tTextx0x33ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-c2e8.3712bb9e5" class="dataConvergencePop-t-text-unit-0-34"  :c-style="tTextUnitx0x34ComputedData.cStyle" :justify="tTextUnitx0x34ComputedData.justify" :align="tTextUnitx0x34ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_STHJBSJHJ_DWCS, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x34ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x34ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-6292.13269a182" class="dataConvergencePop-t-rect-0-35"  :tip="tRectx0x35ComputedData.tip" :label="tRectx0x35ComputedData.label" :active="tRectx0x35ComputedData.active" :c-style="tRectx0x35ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-c2a2.cb260f401" class="dataConvergencePop-t-text-0-36"  :label="tTextx0x36ComputedData.label" :editable="tTextx0x36ComputedData.editable" :c-style="tTextx0x36ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-07a0.b74f207ec" class="dataConvergencePop-t-text-unit-0-37"  :c-style="tTextUnitx0x37ComputedData.cStyle" :justify="tTextUnitx0x37ComputedData.justify" :align="tTextUnitx0x37ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_STHJBSJHJ_YWXT, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x37ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x37ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-33a3.1cf8df42b" class="dataConvergencePop-t-rect-0-38"  :tip="tRectx0x38ComputedData.tip" :label="tRectx0x38ComputedData.label" :active="tRectx0x38ComputedData.active" :c-style="tRectx0x38ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-c871.bf677d66d" class="dataConvergencePop-t-text-0-39"  :label="tTextx0x39ComputedData.label" :editable="tTextx0x39ComputedData.editable" :c-style="tTextx0x39ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-ae5b.aaab12e9d" class="dataConvergencePop-t-text-unit-0-40"  :c-style="tTextUnitx0x40ComputedData.cStyle" :justify="tTextUnitx0x40ComputedData.justify" :align="tTextUnitx0x40ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_STHJBSJHJ_SJB, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x40ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x40ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-ef79.9c736895f" class="dataConvergencePop-t-rect-0-41"  :tip="tRectx0x41ComputedData.tip" :label="tRectx0x41ComputedData.label" :active="tRectx0x41ComputedData.active" :c-style="tRectx0x41ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-03e2.d72f28384" class="dataConvergencePop-t-rect-0-42"  :tip="tRectx0x42ComputedData.tip" :label="tRectx0x42ComputedData.label" :active="tRectx0x42ComputedData.active" :c-style="tRectx0x42ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-unit id="t-text-unit-5e33.f5655190e" class="dataConvergencePop-t-text-unit-0-43"  :c-style="tTextUnitx0x43ComputedData.cStyle" :justify="tTextUnitx0x43ComputedData.justify" :align="tTextUnitx0x43ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_SZSJZY, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x43ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x43ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text id="t-text-d7ac.0b14fa0f4" class="dataConvergencePop-t-text-0-44"  :label="tTextx0x44ComputedData.label" :editable="tTextx0x44ComputedData.editable" :c-style="tTextx0x44ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-008f.f666f264d" class="dataConvergencePop-t-rect-0-45"  :tip="tRectx0x45ComputedData.tip" :label="tRectx0x45ComputedData.label" :active="tRectx0x45ComputedData.active" :c-style="tRectx0x45ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-0af6.87dc47aa1" class="dataConvergencePop-t-text-0-46"  :label="tTextx0x46ComputedData.label" :editable="tTextx0x46ComputedData.editable" :c-style="tTextx0x46ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-1380.6233f22d6" class="dataConvergencePop-t-text-unit-0-47"  :c-style="tTextUnitx0x47ComputedData.cStyle" :justify="tTextUnitx0x47ComputedData.justify" :align="tTextUnitx0x47ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_SZSJHJ_DWCS, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x47ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x47ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-42f1.ce32e9e6e" class="dataConvergencePop-t-rect-0-48"  :tip="tRectx0x48ComputedData.tip" :label="tRectx0x48ComputedData.label" :active="tRectx0x48ComputedData.active" :c-style="tRectx0x48ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-09b4.560681dff" class="dataConvergencePop-t-text-0-49"  :label="tTextx0x49ComputedData.label" :editable="tTextx0x49ComputedData.editable" :c-style="tTextx0x49ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-3dba.ceedfee6f" class="dataConvergencePop-t-text-unit-0-50"  :c-style="tTextUnitx0x50ComputedData.cStyle" :justify="tTextUnitx0x50ComputedData.justify" :align="tTextUnitx0x50ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_SZSJHJ_YWXT, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x50ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x50ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-b515.e016d89d1" class="dataConvergencePop-t-rect-0-51"  :tip="tRectx0x51ComputedData.tip" :label="tRectx0x51ComputedData.label" :active="tRectx0x51ComputedData.active" :c-style="tRectx0x51ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-46b1.84e0ce81b" class="dataConvergencePop-t-text-0-52"  :label="tTextx0x52ComputedData.label" :editable="tTextx0x52ComputedData.editable" :c-style="tTextx0x52ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-ba76.2e93a4674" class="dataConvergencePop-t-text-unit-0-53"  :c-style="tTextUnitx0x53ComputedData.cStyle" :justify="tTextUnitx0x53ComputedData.justify" :align="tTextUnitx0x53ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_SZSJHJ_SJB, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x53ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x53ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-a224.2f80b40d9" class="dataConvergencePop-t-rect-0-54"  :tip="tRectx0x54ComputedData.tip" :label="tRectx0x54ComputedData.label" :active="tRectx0x54ComputedData.active" :c-style="tRectx0x54ComputedData.cStyle">` +
`</t-rect>` +
`<t-select id="t-select-b82f.ac0063fc4" class="dataConvergencePop-t-select-0-55"  :active-value="replaceCssVariables(state.SOURCE, global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(state.sectionData, global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x55ComputedData.alias" :multiple="tSelectx0x55ComputedData.multiple" :placeholder="tSelectx0x55ComputedData.placeholder" :clearable="tSelectx0x55ComputedData.clearable" :disabled="tSelectx0x55ComputedData.disabled" :name="tSelectx0x55ComputedData.name" :autocomplete="tSelectx0x55ComputedData.autocomplete" :filterable="tSelectx0x55ComputedData.filterable" :no-match-text="tSelectx0x55ComputedData.no-match-text" :no-data-text="tSelectx0x55ComputedData.no-data-text" :c-style="tSelectx0x55ComputedData.cStyle" @change="onchange1741692148834">` +
`</t-select>` +
`<t-text id="t-text-6a11.6c1b48408" class="dataConvergencePop-t-text-0-56"  :label="tTextx0x56ComputedData.label" :editable="tTextx0x56ComputedData.editable" :c-style="tTextx0x56ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-d286.d6256dcb" class="dataConvergencePop-t-rect-0-57"  :tip="tRectx0x57ComputedData.tip" :label="tRectx0x57ComputedData.label" :active="tRectx0x57ComputedData.active" :c-style="tRectx0x57ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-8264.fdf6d4c9d" class="dataConvergencePop-t-text-0-58"  :label="tTextx0x58ComputedData.label" :editable="tTextx0x58ComputedData.editable" :c-style="tTextx0x58ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-bc91.7dd8e6fcb" class="dataConvergencePop-t-text-unit-0-59"  :c-style="tTextUnitx0x59ComputedData.cStyle" :justify="tTextUnitx0x59ComputedData.justify" :align="tTextUnitx0x59ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_SZDWSJHJ_YWXT, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x59ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x59ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-a83d.34d69f385" class="dataConvergencePop-t-rect-0-60"  :tip="tRectx0x60ComputedData.tip" :label="tRectx0x60ComputedData.label" :active="tRectx0x60ComputedData.active" :c-style="tRectx0x60ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-82e8.deaa6c6a7" class="dataConvergencePop-t-text-0-61"  :label="tTextx0x61ComputedData.label" :editable="tTextx0x61ComputedData.editable" :c-style="tTextx0x61ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-0559.c05f187ed" class="dataConvergencePop-t-text-unit-0-62"  :c-style="tTextUnitx0x62ComputedData.cStyle" :justify="tTextUnitx0x62ComputedData.justify" :align="tTextUnitx0x62ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_SZDWSJHJ_SJB, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x62ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x62ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-8c08.99d358965" class="dataConvergencePop-t-rect-0-63"  :tip="tRectx0x63ComputedData.tip" :label="tRectx0x63ComputedData.label" :active="tRectx0x63ComputedData.active" :c-style="tRectx0x63ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-9c0b.4f39860a2" class="dataConvergencePop-t-rect-0-64"  :tip="tRectx0x64ComputedData.tip" :label="tRectx0x64ComputedData.label" :active="tRectx0x64ComputedData.active" :c-style="tRectx0x64ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-64fc.a088941f" class="dataConvergencePop-t-text-0-65"  :label="tTextx0x65ComputedData.label" :editable="tTextx0x65ComputedData.editable" :c-style="tTextx0x65ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-2ed1.f9ac4cd4f" class="dataConvergencePop-t-text-unit-0-66"  :c-style="tTextUnitx0x66ComputedData.cStyle" :justify="tTextUnitx0x66ComputedData.justify" :align="tTextUnitx0x66ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_SZDWSJHJ_DWCS, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x66ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x66ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-245f.2614e70ee" class="dataConvergencePop-t-text-unit-0-67"  :c-style="tTextUnitx0x67ComputedData.cStyle" :justify="tTextUnitx0x67ComputedData.justify" :align="tTextUnitx0x67ComputedData.align" :content="replaceCssVariables(state.dataAggregateAll.SJHJ_SZDWSJHJ, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x67ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x67ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text id="t-text-bc75.ba2844a39" class="dataConvergencePop-t-text-0-68"  :label="tTextx0x68ComputedData.label" :editable="tTextx0x68ComputedData.editable" :c-style="tTextx0x68ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-9a20.bb460fb88" class="dataConvergencePop-t-text-0-69"  :label="replaceCssVariables(global.toDayTime, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x69ComputedData.editable" :c-style="tTextx0x69ComputedData.cStyle">` +
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
   END_TIME: "",
   START_TIME: "",
   tableData: [],
   pageInfo: {"pageNum":1,"pageSize":8,"total":0,"pages":"0"},
   dateData: [],
   typeData: [],
   sectionData: [],
   DATA_TYPE: "",
   BUSINESS_TYPE: "",
   SOURCE: "",
   dataAggregateAll: {"SJHJ_TBJSJHJ_DWCS":0,"SJHJ_TBJSJHJ":0,"SJHJ_TBJSJHJ_SJB":0,"SJHJ_TBJSJHJ_YWXT":0,"SJHJ_STHJBSJHJ_DWCS":0,"SJHJ_STHJBSJHJ":0,"SJHJ_STHJBSJHJ_SJB":0,"SJHJ_STHJBSJHJ_YWXT":0,"SJHJ_SZDWSJHJ_DWCS":0,"SJHJ_SZDWSJHJ":0,"SJHJ_SZDWSJHJ_SJB":0,"SJHJ_SZDWSJHJ_YWXT":0,"SJHJ_SZSJHJ_DWCS":0,"SJHJ_SZSJZY":0,"SJHJ_SZSJHJ_SJB":0,"SJHJ_SZSJHJ_YWXT":0,"SJZL":0},
   isClosSJHJ_SZSJZYe: false,
   charOption: "",
   STARTEND_TIME_ARR: [],
   TIME_TYPE_CHOOSE: "datetimerangeminute",
   timeSelect: [],
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
            default: {"width":"1680px","height":"914px","position":"unset","left":"120px","top":"83px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1680px","height":"914px","position":"unset","left":"120px","top":"83px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-full-service-dia-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1632px","height":"256px","backgroundColor":"var(--t-zbzs-bg)","borderLeft":"1px solid var(--t-bgc-border-color)","borderTop":"1px solid var(--t-bgc-border-color)","borderRight":"1px solid var(--t-bgc-border-color)","borderBottom":"1px solid var(--t-bgc-border-color)","position":"unset","left":"144px","top":"178px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1632px","height":"256px","backgroundColor":"var(--t-zbzs-bg)","borderLeft":"1px solid var(--t-bgc-border-color)","borderTop":"1px solid var(--t-bgc-border-color)","borderRight":"1px solid var(--t-bgc-border-color)","borderBottom":"1px solid var(--t-bgc-border-color)","position":"unset","left":"144px","top":"178px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"1632px","height":"64px","position":"unset","left":"147px","top":"457px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"var(--t-full-service-dia-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1632px","height":"64px","position":"unset","left":"147px","top":"457px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"var(--t-full-service-dia-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tRectx0x3: {
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
tRectx0x4: {
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
tTablex0x5: {
defaultStyle: {
            default: {"width":"1632px","height":"378px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"},
            
            },
 default: { 
 
height:"378",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"序号","type":"default","key":"RN","stateKey":"","width":"80PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"}},"infoPosition":"left","infoStyle":{"fontStyle":{"color":"rgba(255, 255, 255, 1)"}}},{"label":"来源渠道","type":"default","key":"SOURCE_NAME","stateKey":"","width":"108PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"来源部门","type":"default","key":"DEPT_NAME","stateKey":"","width":"200PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"来源系统","type":"default","key":"SYSTEM_NAME","stateKey":"","width":"228PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"业务大类","type":"default","key":"BUSINESS_NAME","stateKey":"","width":"230PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"业务小类","type":"default","key":"BUSINESS_SUB_NAME","stateKey":"","width":"230PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"数据名称","type":"default","key":"DATA_NAME","stateKey":"","width":"210PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"数据条数","type":"default","key":"DATA_TOTAL","stateKey":"","width":"120PX","minWidth":"","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"},{"label":"来源厂商","type":"default","key":"MANUFACT_NAME","stateKey":"","width":"220PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"right"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1632px","height":"378px","backgroundColor":"rgba(24, 37, 64, 0)","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","paddingLeft":"0px","borderTop":"0px solid rgba(0,255,246,0.5)"}},"headerCell":{"default":{"borderBottom":"2px none rgba(26,27,31,1)","borderLeft":"1px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","width":"418px","height":"28px","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"7px","paddingRight":"0px"}},"bodyCell":{"default":{"backgroundColor":"","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px none ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-text)","height":"32px","paddingTop":"7px","paddingBottom":"7px","fontSize":"16px","paddingLeft":"7px","paddingRight":"0px","lineHeight":"24px"},"hover":{"backgroundColor":"rgba(48, 72, 173, 0)","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","lineHeight":"24px","height":"32px"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(218, 24, 24, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"headerRowWrapper":{"default":{"backgroundColor":"rgba(223, 44, 44, 0)","paddingLeft":"0px","paddingRight":"0px","paddingTop":"0px","backgroundImage":"var(--t-full-service-dia-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","height":"28px"}},"rowWrapper":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","height":"32px","backgroundColor":"var(--table-bm-color)"},"hover":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"","height":"32px","box-shadow":"rgba(0, 255, 246, 1) 0px 0px 0px 1px inset"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(59, 182, 151, 0)","backgroundImage":"unset !important","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none "},"hover":{"borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"bodyCellInner":{"default":{"height":"20px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"highlightRow":{"default":{"height":"auto"}}},
highlightCurrentRow:false, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"108px","left":"198px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"},
            
            },
 default: { 
 
label:"全方位汇聚",
editable:false,
cStyle:{"wrapper":{"default":{"width":"280px","height":"28px","color":"#fff","fontSize":"28px","lineHeight":"28px","top":"108px","left":"198px","fontFamily":"方正综艺","position":"unset","fontWeight":"400"}}}, 
 },
},
tSelectx0x7: {
defaultStyle: {
            default: {"width":"268px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":""},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"DICTIONARY_NAME","value":"DICTIONARY_CODE","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"268px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":""},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","box-shadow":"var(--business-select-shadow) 0px 0px 0px 2px "}},"placeholder":{"default":{"color":"var(--t-text)"}},"arrow":{"default":{"color":"var(--t-text)","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px","right":"0","position":"relative","left":"7px"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","width":"268px","paddingLeft":"6px","paddingRight":"6px"}},"dropdownItem":{"default":{"fontSize":"14px","color":"var(--t-text)","height":"28px","lineHeight":"28px","width":"254px","marginBottom":"4px","paddingLeft":"8px","paddingRight":"8px"},"hover":{"color":"var(--t-text)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"disabledWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"475px","left":"169px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"时间区间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"475px","left":"169px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""}}}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"477px","left":"670px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset"},
            
            },
 default: { 
 
label:"业务类别",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"477px","left":"670px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset"}}}, 
 },
},
tDatePickerx0x10: {
defaultStyle: {
            default: {"width":"390px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:false,
rangeSeparator:"-",
'default-date':"2023",
separator:"-",
cStyle:{"wrapper":{"default":{"width":"390px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},"hover":{"fontSize":"14px","backgroundColor":"var(--t-select-fill-bg-hover)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"}},"inputWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgba(20,112,204,0)","borderTop":"1px none rgba(20,112,204,0)","borderRight":"1px none rgba(20,112,204,0)","borderBottom":"1px none rgba(20,112,204,0)","color":"var(--t-text)","paddingLeft":"8px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"24px"}},"inputDateIcons":{"default":{"backgroundColor":"var(--business-select-border)","color":"rgba(121, 190, 255, 0)","backgroundImage":"","-webkit-mask-image":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/date-picker.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"50% 50%","position":"absolute","right":"-70%","top":"0px","pointerEvents":"none","marginRight":"280px","marginTop":"5px"}},"splitLine":{"default":{"color":"var(--t-text)","backgroundColor":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px solid rgba(20,112,204,0.3)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""}},"selCurrentDateWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)"},"hover":{"color":"#fff"}},"currentDateWrapper":{"active":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)"},"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","color":"var(--t-text)"}},"todayWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","color":"var(--t-text)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"dateHeaderWrapper":{"default":{"color":"var(--t-text)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":""},"hover":{"backgroundColor":"rgba(26, 27, 31, 0)","color":"var(--t-text)"}},"weekWrapper":{"default":{"color":"var(--t-text)","fontWeight":"500","backgroundColor":"","fontFamily":"微软雅黑"}},"currentWeekWrapper":{"default":{"color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundColor":""}},"timePanelNumWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},"hover":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"rgba(23, 62, 228, 0)"}},"okWrapper":{"default":{"borderLeft":"1px solid #00BFFF","borderTop":"1px solid #00BFFF","borderRight":"1px solid #00BFFF","borderBottom":"1px solid #00BFFF","color":"#00BFFF","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"backgroundColor":"rgba(74, 228, 23, 0)"}},"timePanelWrapper":{"default":{"borderLeft":"1px solid rgba(0,191,255,0.5)","borderTop":"1px solid rgba(0,191,255,0.5)","borderRight":"1px solid rgba(0,191,255,0.5)","borderBottom":"1px solid rgba(0,191,255,0.5)","backgroundColor":"#0C478A","color":"#fff","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 10px 0px "},"active":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","color":"#00FFFF"}},"textBtnWrapper":{"default":{"color":"rgba(255, 255, 255, 0.6)","backgroundColor":""}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--t-select-fill-bg-hover)"}},"operatorArrow":{"default":{"backgroundColor":"","color":"var(--t-text)"}},"dateHeaderMonthBtn":{"default":{"color":"var(--t-text)"}},"dateHeaderMonthBtnWrapper":{"default":{"color":"var(--t-text)"}},"dateHeaderYearBtnWrapper":{"default":{"color":"var(--t-text)"}}},
isDisabledFront:true, 
 },
},
tPaginationBasex0x11: {
defaultStyle: {
            default: {"width":"1592px","height":"38px","position":"unset","left":"164px","top":"925px","color":"","animationName":"","display":"flex","justifyContent":"space-between","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:8,
pagerCount:5,
currentPage:1,
layout:" total,sizes,prev, pager, next,jumper",
pageSizes:[8,10,20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"1592px","height":"38px","position":"unset","left":"164px","top":"925px","color":"","animationName":"","display":"flex","justifyContent":"space-between","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"pagerItem":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","lineHeight":"32px","borderLeft":"1px none #366B92","borderTop":"1px none #366B92","borderRight":"1px none #366B92","borderBottom":"1px none #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":"var(--business-select-item-bg)"},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"var(--t-button-bg)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"var(--t-color-text-green)","marginLeft":"0px","marginRight":"0px","backgroundColor":"var(--business-select-drop-bg)"},"hover":{"color":"#FFFFFF","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"more":{"default":{"color":"var(--t-color-text-green)"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"var(--t-color-text-green)","paddingRight":"30px","paddingLeft":"0px","fontSize":"14px","marginRight":"0px"}},"sizesWrapper":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","marginRight":"10px","marginLeft":"900px"}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)","backgroundColor":""},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--t-color-text-green)","backgroundColor":""}},"jumpInput":{"default":{"color":"var(--t-color-text-green)","backgroundColor":"var(--business-select-item-bg)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"sizesDropdownItem":{"default":{"color":"rgba(255, 255, 255, 0.9)","backgroundColor":"","borderLeft":"1px none #00828A","borderTop":"1px none #00828A","borderRight":"1px none #00828A","borderBottom":"1px none #00828A"},"active":{"backgroundColor":"var(--business-select-item-bg)","color":"var(--business-text-hover)"},"hover":{"color":"var(--business-text-hover)","backgroundColor":"var(--business-select-item-bg)"}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"72px","height":"18px","color":"var(--t-text)","lineHeight":"18px","top":"205px","left":"168px"},
            
            },
 default: { 
 
label:"数据汇聚",
editable:false,
cStyle:{"wrapper":{"default":{"width":"72px","height":"18px","color":"var(--t-text)","lineHeight":"18px","top":"205px","left":"168px"}}}, 
 },
},
tRollingNumberx0x13: {
defaultStyle: {
            default: {"overflow":"hidden","width":"auto","height":"40px","top":"194px","left":"241px","position":"unset","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
number:0,
minLength:1,
prefix:"",
suffix:"万条",
animationDuration:1,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"auto","height":"40px","top":"194px","left":"241px","position":"unset","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"separator":{"default":{"height":"40px","width":"20px","lineHeight":"32px","fontSize":"32px","color":"var(--t-text)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-select-item-bg)","fontFamily":"DIN-black","fontWeight":"700","marginLeft":"6px","textAlign":"center","display":"grid"}},"number":{"default":{"width":"30px","height":"40px","margin":"0 6px","borderRadius":"6px","fontFamily":"DIN-black","fontWeight":"700","fontSize":"32px","lineHeight":"32px","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","color":"var(--t-text)","marginRight":"0px"}},"suffix":{"default":{"lineHeight":"18px","fontSize":"18px","color":"var(--t-color-text-green)","marginLeft":"4px"}}}, 
 },
},
tRectx0x14: {
defaultStyle: {
            default: {"width":"381px","height":"164px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","position":"unset","left":"569px","top":"246px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"381px","height":"164px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","position":"unset","left":"569px","top":"246px","animationName":""}}}, 
 },
},
tRectx0x15: {
defaultStyle: {
            default: {"width":"381px","height":"164px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","position":"unset","left":"168px","top":"245px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"381px","height":"164px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","position":"unset","left":"168px","top":"245px"}}}, 
 },
},
tRectx0x16: {
defaultStyle: {
            default: {"width":"123px","height":"64px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-qfwhj-one)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"188px","top":"265px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"123px","height":"64px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-qfwhj-one)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"188px","top":"265px"}}}, 
 },
},
tTextUnitx0x17: {
defaultStyle: {
            default: {"width":"138px","height":"25px","position":"unset","left":"178px","top":"338px","textAlign":"center"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"138px","height":"25px","position":"unset","left":"178px","top":"338px","textAlign":"center"}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)","textAlign":"center","fontStyle":"normal"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px","textAlign":"center"}}},
justify:"center",
align:"flex-end",
content:0,
unit:"万条",
showOverflowTooltip:true, 
 },
},
tTextx0x18: {
defaultStyle: {
            default: {"width":"80px","height":"16px","color":"var(--t-text)","fontWeight":"700","fontSize":"16px","lineHeight":"16px","position":"unset","left":"206px","top":"373px"},
            
            },
 default: { 
 
label:"环境厅本级",
editable:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"16px","color":"var(--t-text)","fontWeight":"700","fontSize":"16px","lineHeight":"16px","position":"unset","left":"206px","top":"373px"}}}, 
 },
},
tRectx0x19: {
defaultStyle: {
            default: {"width":"208px","height":"36px","position":"unset","left":"316px","top":"264px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"208px","height":"36px","position":"unset","left":"316px","top":"264px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}}}, 
 },
},
tTextx0x20: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"275px","left":"332px","animationName":"","position":"unset","fontSize":"14px"},
            
            },
 default: { 
 
label:"单位处室",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"275px","left":"332px","animationName":"","position":"unset","fontSize":"14px"}}}, 
 },
},
tTextUnitx0x21: {
defaultStyle: {
            default: {"width":"110px","height":"24px","position":"unset","left":"398px","top":"270px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"110px","height":"24px","position":"unset","left":"398px","top":"270px","animationName":"","textAlign":"right"}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"个",
showOverflowTooltip:true, 
 },
},
tRectx0x22: {
defaultStyle: {
            default: {"width":"208px","height":"36px","position":"unset","left":"316px","top":"308px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"208px","height":"36px","position":"unset","left":"316px","top":"308px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}}}, 
 },
},
tTextx0x23: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"319px","left":"332px","animationName":"","position":"unset","fontSize":"14px"},
            
            },
 default: { 
 
label:"业务系统",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"319px","left":"332px","animationName":"","position":"unset","fontSize":"14px"}}}, 
 },
},
tTextUnitx0x24: {
defaultStyle: {
            default: {"width":"110px","height":"24px","position":"unset","left":"398px","top":"314px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"110px","height":"24px","position":"unset","left":"398px","top":"314px","animationName":"","textAlign":"right"}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"个",
showOverflowTooltip:true, 
 },
},
tRectx0x25: {
defaultStyle: {
            default: {"width":"208px","height":"36px","position":"unset","left":"316px","top":"353px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"208px","height":"36px","position":"unset","left":"316px","top":"353px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}}}, 
 },
},
tTextx0x26: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"364px","left":"332px","animationName":"","position":"unset","fontSize":"14px"},
            
            },
 default: { 
 
label:"数据表",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"364px","left":"332px","animationName":"","position":"unset","fontSize":"14px"}}}, 
 },
},
tTextUnitx0x27: {
defaultStyle: {
            default: {"width":"125px","height":"24px","position":"unset","left":"382px","top":"359px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"125px","height":"24px","position":"unset","left":"382px","top":"359px","animationName":"","textAlign":"right"}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"个",
showOverflowTooltip:true, 
 },
},
tRectx0x28: {
defaultStyle: {
            default: {"width":"381px","height":"164px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","position":"unset","left":"569px","top":"246px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"381px","height":"164px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","position":"unset","left":"569px","top":"246px","animationName":""}}}, 
 },
},
tRectx0x29: {
defaultStyle: {
            default: {"width":"123px","height":"64px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-qfwhj-two)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"589px","top":"266px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"123px","height":"64px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-qfwhj-two)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"589px","top":"266px","animationName":""}}}, 
 },
},
tTextUnitx0x30: {
defaultStyle: {
            default: {"width":"59px","height":"24px","position":"unset","left":"618px","top":"340px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"59px","height":"24px","position":"unset","left":"618px","top":"340px","textAlign":"center","animationName":""}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"万条",
showOverflowTooltip:true, 
 },
},
tTextx0x31: {
defaultStyle: {
            default: {"width":"80px","height":"16px","color":"var(--t-text)","fontWeight":"700","fontSize":"16px","lineHeight":"16px","position":"unset","left":"607px","top":"374px","animationName":""},
            
            },
 default: { 
 
label:"生态环境部",
editable:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"16px","color":"var(--t-text)","fontWeight":"700","fontSize":"16px","lineHeight":"16px","position":"unset","left":"607px","top":"374px","animationName":""}}}, 
 },
},
tRectx0x32: {
defaultStyle: {
            default: {"width":"208px","height":"36px","position":"unset","left":"717px","top":"265px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"208px","height":"36px","position":"unset","left":"717px","top":"265px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}}}, 
 },
},
tTextx0x33: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"276px","left":"733px","animationName":"","position":"unset","fontSize":"14px"},
            
            },
 default: { 
 
label:"单位处室",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"276px","left":"733px","animationName":"","position":"unset","fontSize":"14px"}}}, 
 },
},
tTextUnitx0x34: {
defaultStyle: {
            default: {"width":"110px","height":"24px","position":"unset","left":"798px","top":"271px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"110px","height":"24px","position":"unset","left":"798px","top":"271px","animationName":"","textAlign":"right"}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"个",
showOverflowTooltip:true, 
 },
},
tRectx0x35: {
defaultStyle: {
            default: {"width":"208px","height":"36px","position":"unset","left":"717px","top":"309px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"208px","height":"36px","position":"unset","left":"717px","top":"309px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}}}, 
 },
},
tTextx0x36: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"320px","left":"733px","animationName":"","position":"unset","fontSize":"14px"},
            
            },
 default: { 
 
label:"业务系统",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"320px","left":"733px","animationName":"","position":"unset","fontSize":"14px"}}}, 
 },
},
tTextUnitx0x37: {
defaultStyle: {
            default: {"width":"110px","height":"24px","position":"unset","left":"798px","top":"315px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"110px","height":"24px","position":"unset","left":"798px","top":"315px","animationName":"","textAlign":"right"}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"个",
showOverflowTooltip:true, 
 },
},
tRectx0x38: {
defaultStyle: {
            default: {"width":"208px","height":"36px","position":"unset","left":"717px","top":"354px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"208px","height":"36px","position":"unset","left":"717px","top":"354px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}}}, 
 },
},
tTextx0x39: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"365px","left":"733px","animationName":"","position":"unset","fontSize":"14px"},
            
            },
 default: { 
 
label:"数据表",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"365px","left":"733px","animationName":"","position":"unset","fontSize":"14px"}}}, 
 },
},
tTextUnitx0x40: {
defaultStyle: {
            default: {"width":"125px","height":"24px","position":"unset","left":"783px","top":"360px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"125px","height":"24px","position":"unset","left":"783px","top":"360px","animationName":"","textAlign":"right"}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"个",
showOverflowTooltip:true, 
 },
},
tRectx0x41: {
defaultStyle: {
            default: {"width":"381px","height":"164px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","position":"unset","left":"1372px","top":"247px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"381px","height":"164px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","position":"unset","left":"1372px","top":"247px","animationName":""}}}, 
 },
},
tRectx0x42: {
defaultStyle: {
            default: {"width":"123px","height":"64px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-qfwhj-four)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1392px","top":"267px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"123px","height":"64px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-qfwhj-four)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"1392px","top":"267px","animationName":""}}}, 
 },
},
tTextUnitx0x43: {
defaultStyle: {
            default: {"width":"59px","height":"24px","position":"unset","left":"1421px","top":"341px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"59px","height":"24px","position":"unset","left":"1421px","top":"341px","textAlign":"center","animationName":""}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"万条",
showOverflowTooltip:true, 
 },
},
tTextx0x44: {
defaultStyle: {
            default: {"width":"80px","height":"16px","color":"var(--t-text)","fontWeight":"700","fontSize":"16px","lineHeight":"16px","position":"unset","left":"1410px","top":"375px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"市环境局",
editable:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"16px","color":"var(--t-text)","fontWeight":"700","fontSize":"16px","lineHeight":"16px","position":"unset","left":"1410px","top":"375px","animationName":"","textAlign":"center"}}}, 
 },
},
tRectx0x45: {
defaultStyle: {
            default: {"width":"208px","height":"36px","position":"unset","left":"1520px","top":"266px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"208px","height":"36px","position":"unset","left":"1520px","top":"266px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}}}, 
 },
},
tTextx0x46: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"277px","left":"1536px","animationName":"","position":"unset","fontSize":"14px"},
            
            },
 default: { 
 
label:"单位处室",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"277px","left":"1536px","animationName":"","position":"unset","fontSize":"14px"}}}, 
 },
},
tTextUnitx0x47: {
defaultStyle: {
            default: {"width":"110px","height":"24px","position":"unset","left":"1603px","top":"272px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"110px","height":"24px","position":"unset","left":"1603px","top":"272px","animationName":"","textAlign":"right"}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"个",
showOverflowTooltip:true, 
 },
},
tRectx0x48: {
defaultStyle: {
            default: {"width":"208px","height":"36px","position":"unset","left":"1520px","top":"310px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"208px","height":"36px","position":"unset","left":"1520px","top":"310px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}}}, 
 },
},
tTextx0x49: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"321px","left":"1536px","animationName":"","position":"unset","fontSize":"14px"},
            
            },
 default: { 
 
label:"业务系统",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"321px","left":"1536px","animationName":"","position":"unset","fontSize":"14px"}}}, 
 },
},
tTextUnitx0x50: {
defaultStyle: {
            default: {"width":"110px","height":"24px","position":"unset","left":"1602px","top":"316px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"110px","height":"24px","position":"unset","left":"1602px","top":"316px","animationName":"","textAlign":"right"}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"个",
showOverflowTooltip:true, 
 },
},
tRectx0x51: {
defaultStyle: {
            default: {"width":"208px","height":"36px","position":"unset","left":"1520px","top":"355px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"208px","height":"36px","position":"unset","left":"1520px","top":"355px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}}}, 
 },
},
tTextx0x52: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"366px","left":"1536px","animationName":"","position":"unset","fontSize":"14px"},
            
            },
 default: { 
 
label:"数据表",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"366px","left":"1536px","animationName":"","position":"unset","fontSize":"14px"}}}, 
 },
},
tTextUnitx0x53: {
defaultStyle: {
            default: {"width":"125px","height":"24px","position":"unset","left":"1588px","top":"361px","animationName":"","textAlign":"right","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"125px","height":"24px","position":"unset","left":"1588px","top":"361px","animationName":"","textAlign":"right","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"个",
showOverflowTooltip:true, 
 },
},
tRectx0x54: {
defaultStyle: {
            default: {"width":"381px","height":"164px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","position":"unset","left":"970px","top":"247px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"381px","height":"164px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","position":"unset","left":"970px","top":"247px","animationName":""}}}, 
 },
},
tSelectx0x55: {
defaultStyle: {
            default: {"width":"268px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":""},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"DICTIONARY_NAME","value":"DICTIONARY_CODE","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"268px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":""},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","box-shadow":"var(--business-select-shadow) 0px 0px 0px 2px "}},"placeholder":{"default":{"color":"var(--t-text)"}},"arrow":{"default":{"color":"var(--t-text)","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px","right":"0","position":"relative","left":"7px"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","width":"268px","paddingLeft":"6px","paddingRight":"6px"}},"dropdownItem":{"default":{"fontSize":"14px","color":"var(--t-text)","height":"28px","lineHeight":"28px","width":"254px","marginBottom":"4px","paddingLeft":"8px","paddingRight":"8px"},"hover":{"color":"var(--t-text)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"disabledWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTextx0x56: {
defaultStyle: {
            default: {"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"476px","left":"1048px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"来源渠道",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"20px","color":"var(--t-text)","fontSize":"14px","top":"476px","left":"1048px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x57: {
defaultStyle: {
            default: {"width":"208px","height":"36px","position":"unset","left":"1118px","top":"310px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"208px","height":"36px","position":"unset","left":"1118px","top":"310px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}}}, 
 },
},
tTextx0x58: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"321px","left":"1134px","animationName":"","position":"unset","fontSize":"14px"},
            
            },
 default: { 
 
label:"业务系统",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"321px","left":"1134px","animationName":"","position":"unset","fontSize":"14px"}}}, 
 },
},
tTextUnitx0x59: {
defaultStyle: {
            default: {"width":"110px","height":"24px","position":"unset","left":"1200px","top":"316px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"110px","height":"24px","position":"unset","left":"1200px","top":"316px","animationName":"","textAlign":"right"}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"个",
showOverflowTooltip:true, 
 },
},
tRectx0x60: {
defaultStyle: {
            default: {"width":"208px","height":"36px","position":"unset","left":"1119px","top":"355px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"208px","height":"36px","position":"unset","left":"1119px","top":"355px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}}}, 
 },
},
tTextx0x61: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"366px","left":"1135px","animationName":"","position":"unset","fontSize":"14px"},
            
            },
 default: { 
 
label:"数据表",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"366px","left":"1135px","animationName":"","position":"unset","fontSize":"14px"}}}, 
 },
},
tTextUnitx0x62: {
defaultStyle: {
            default: {"width":"125px","height":"24px","position":"unset","left":"1185px","top":"361px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"125px","height":"24px","position":"unset","left":"1185px","top":"361px","animationName":"","textAlign":"right"}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"个",
showOverflowTooltip:true, 
 },
},
tRectx0x63: {
defaultStyle: {
            default: {"width":"123px","height":"64px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-qfwhj-three)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"990px","top":"267px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"123px","height":"64px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-qfwhj-three)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"990px","top":"267px","animationName":""}}}, 
 },
},
tRectx0x64: {
defaultStyle: {
            default: {"width":"208px","height":"36px","position":"unset","left":"1118px","top":"266px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"208px","height":"36px","position":"unset","left":"1118px","top":"266px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--t-zbzs-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}}}, 
 },
},
tTextx0x65: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"277px","left":"1134px","animationName":"","position":"unset","fontSize":"14px"},
            
            },
 default: { 
 
label:"单位处室",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","lineHeight":"14px","top":"277px","left":"1134px","animationName":"","position":"unset","fontSize":"14px"}}}, 
 },
},
tTextUnitx0x66: {
defaultStyle: {
            default: {"width":"110px","height":"24px","position":"unset","left":"1200px","top":"272px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"110px","height":"24px","position":"unset","left":"1200px","top":"272px","animationName":"","textAlign":"right"}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"个",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x67: {
defaultStyle: {
            default: {"width":"59px","height":"24px","position":"unset","left":"1019px","top":"341px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"59px","height":"24px","position":"unset","left":"1019px","top":"341px","textAlign":"center","animationName":""}},"text":{"default":{"fontSize":"24px","lineHeight":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:0,
unit:"万条",
showOverflowTooltip:true, 
 },
},
tTextx0x68: {
defaultStyle: {
            default: {"width":"80px","height":"16px","color":"var(--t-text)","fontWeight":"700","fontSize":"16px","lineHeight":"16px","position":"unset","left":"1008px","top":"375px","animationName":""},
            
            },
 default: { 
 
label:"外委办厅局",
editable:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"16px","color":"var(--t-text)","fontWeight":"700","fontSize":"16px","lineHeight":"16px","position":"unset","left":"1008px","top":"375px","animationName":""}}}, 
 },
},
tTextx0x69: {
defaultStyle: {
            default: {"width":"132px","height":"18px","color":"rgba(255, 255, 255, 0.8)","lineHeight":"18px","top":"112px","left":"1588px","position":"unset","animationName":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"132px","height":"18px","color":"rgba(255, 255, 255, 0.8)","lineHeight":"18px","top":"112px","left":"1588px","position":"unset","animationName":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
});
const setTimeSelect = (data) => {
state.START_TIME = data[0];
state.END_TIME = data[1];
};
const clearLoop = () => {
if (global.loopId) {
  clearInterval(global.loopId);
}
};
const onmouseout1739345365135 = () => {

// 显示元素并加动画
document.getElementById('t-rect-5094.9a9212dbc').style.display = 'block';
runAnimation('t-rect-5094.9a9212dbc', [""]);

// 隐藏元素并加动画
runAnimation('t-rect-39ea.51f8eb66d', [""], 'none');
};
const onclick1739960380902 = () => {
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
const ondateChange1741692530469 = (data) => {
// 执行自定义方法
setTimeSelect(data);
};
const onsizeChange1741691311630 = (pageSize) => {
// 设置变量值
state.pageInfo.pageSize = pageSize;
};
const oncurrentChange1741691330398 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
};
const onchange1741692175952 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.BUSINESS_TYPE = value;
};
const onchange1741692148834 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.SOURCE = value;
};
// 接口函数
const getSourceData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"DATA_SOURCE"},}).then((res) => {
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
  console.log(res, '业务类别');
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
getSourceData();
// 接口函数
const getUpdateData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"UPDATE_FREQUENCY"},}).then((res) => {
     // 成功的操作
     if (res?.data?.data) {
  state.dateData= [];
  state.dateData = res.data.data;
  state.dateData.unshift({
    DICTIONARY_CODE: "",
    DICTIONARY_NAME: "全部",
    EXT1: "NULL",
    EXT2: "NULL",
    EXT3: "NULL",
    EXT4: "NULL"
  })

} else {
  state.dateData = [];
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 初始请求，调取接口
getUpdateData();
// 接口函数
const getDataAggregateAll = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"5f4a17b194df087c1c04e5b1355e95e1","MONITORTIME":""},}).then((res) => {
     // 成功的操作
     if (res?.data?.data) {
  const data = res.data.data;
  for (let key in state.dataAggregateAll) {
    if (data.hasOwnProperty(key)) {
      state.dataAggregateAll[key] = data[key] || 0;
    }
  }
  console.log(state.dataAggregateAll);
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 初始请求，调取接口
getDataAggregateAll();
// 接口函数
const getTableData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"interfaceId":"ffab98c383cb537330dd35611f4fc3ce","DATA_TYPE":state.DATA_TYPE,"SOURCE":state.SOURCE,"BUSINESS_TYPE":state.BUSINESS_TYPE,"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize},}).then((res) => {
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
watch(() => [state.END_TIME,state.START_TIME,state.DATA_TYPE,state.SOURCE,state.BUSINESS_TYPE,state.pageInfo.pageNum,state.pageInfo.pageSize], () => {
getTableData();
},{
deep: true, // 深度监听
});
// 初始请求，调取接口
getTableData();
// 接口函数
const getCodeData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"05b418ded652d74081a332bb7bd130d4","TREE_CODE":"BUSINESS_TYPE"},}).then((res) => {
     // 成功的操作
     if (res?.data?.data) {
  state.typeData= [];
  state.typeData = res.data.data;
  state.typeData.unshift({
    DICTIONARY_CODE: "",
    DICTIONARY_NAME: "全部",
    EXT1: "NULL",
    EXT2: "NULL",
    EXT3: "NULL",
    EXT4: "NULL"
  })
  console.log(res, '业务类别');
} else {
  state.typeData = [];
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
 function handleWindowResize() {
                            setPageScale('t-l-c-dataConvergencePop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getEl();
onMounted(() => {
setPageScale('t-l-c-dataConvergencePop', global.appScaleMode, 'normal');
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

 const tTablex0x5ComputedData = computed(() => _.merge({}, componentState.tTablex0x5.default, componentState.tTablex0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tSelectx0x7ComputedData = computed(() => _.merge({}, componentState.tSelectx0x7.default, componentState.tSelectx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tDatePickerx0x10ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x10.default, componentState.tDatePickerx0x10?.[state.screenSize]));

 const tPaginationBasex0x11ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x11.default, componentState.tPaginationBasex0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tRollingNumberx0x13ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x13.default, componentState.tRollingNumberx0x13?.[state.screenSize]));

 const tRectx0x14ComputedData = computed(() => _.merge({}, componentState.tRectx0x14.default, componentState.tRectx0x14?.[state.screenSize]));

 const tRectx0x15ComputedData = computed(() => _.merge({}, componentState.tRectx0x15.default, componentState.tRectx0x15?.[state.screenSize]));

 const tRectx0x16ComputedData = computed(() => _.merge({}, componentState.tRectx0x16.default, componentState.tRectx0x16?.[state.screenSize]));

 const tTextUnitx0x17ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x17.default, componentState.tTextUnitx0x17?.[state.screenSize]));

 const tTextx0x18ComputedData = computed(() => _.merge({}, componentState.tTextx0x18.default, componentState.tTextx0x18?.[state.screenSize]));

 const tRectx0x19ComputedData = computed(() => _.merge({}, componentState.tRectx0x19.default, componentState.tRectx0x19?.[state.screenSize]));

 const tTextx0x20ComputedData = computed(() => _.merge({}, componentState.tTextx0x20.default, componentState.tTextx0x20?.[state.screenSize]));

 const tTextUnitx0x21ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x21.default, componentState.tTextUnitx0x21?.[state.screenSize]));

 const tRectx0x22ComputedData = computed(() => _.merge({}, componentState.tRectx0x22.default, componentState.tRectx0x22?.[state.screenSize]));

 const tTextx0x23ComputedData = computed(() => _.merge({}, componentState.tTextx0x23.default, componentState.tTextx0x23?.[state.screenSize]));

 const tTextUnitx0x24ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x24.default, componentState.tTextUnitx0x24?.[state.screenSize]));

 const tRectx0x25ComputedData = computed(() => _.merge({}, componentState.tRectx0x25.default, componentState.tRectx0x25?.[state.screenSize]));

 const tTextx0x26ComputedData = computed(() => _.merge({}, componentState.tTextx0x26.default, componentState.tTextx0x26?.[state.screenSize]));

 const tTextUnitx0x27ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x27.default, componentState.tTextUnitx0x27?.[state.screenSize]));

 const tRectx0x28ComputedData = computed(() => _.merge({}, componentState.tRectx0x28.default, componentState.tRectx0x28?.[state.screenSize]));

 const tRectx0x29ComputedData = computed(() => _.merge({}, componentState.tRectx0x29.default, componentState.tRectx0x29?.[state.screenSize]));

 const tTextUnitx0x30ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x30.default, componentState.tTextUnitx0x30?.[state.screenSize]));

 const tTextx0x31ComputedData = computed(() => _.merge({}, componentState.tTextx0x31.default, componentState.tTextx0x31?.[state.screenSize]));

 const tRectx0x32ComputedData = computed(() => _.merge({}, componentState.tRectx0x32.default, componentState.tRectx0x32?.[state.screenSize]));

 const tTextx0x33ComputedData = computed(() => _.merge({}, componentState.tTextx0x33.default, componentState.tTextx0x33?.[state.screenSize]));

 const tTextUnitx0x34ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x34.default, componentState.tTextUnitx0x34?.[state.screenSize]));

 const tRectx0x35ComputedData = computed(() => _.merge({}, componentState.tRectx0x35.default, componentState.tRectx0x35?.[state.screenSize]));

 const tTextx0x36ComputedData = computed(() => _.merge({}, componentState.tTextx0x36.default, componentState.tTextx0x36?.[state.screenSize]));

 const tTextUnitx0x37ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x37.default, componentState.tTextUnitx0x37?.[state.screenSize]));

 const tRectx0x38ComputedData = computed(() => _.merge({}, componentState.tRectx0x38.default, componentState.tRectx0x38?.[state.screenSize]));

 const tTextx0x39ComputedData = computed(() => _.merge({}, componentState.tTextx0x39.default, componentState.tTextx0x39?.[state.screenSize]));

 const tTextUnitx0x40ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x40.default, componentState.tTextUnitx0x40?.[state.screenSize]));

 const tRectx0x41ComputedData = computed(() => _.merge({}, componentState.tRectx0x41.default, componentState.tRectx0x41?.[state.screenSize]));

 const tRectx0x42ComputedData = computed(() => _.merge({}, componentState.tRectx0x42.default, componentState.tRectx0x42?.[state.screenSize]));

 const tTextUnitx0x43ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x43.default, componentState.tTextUnitx0x43?.[state.screenSize]));

 const tTextx0x44ComputedData = computed(() => _.merge({}, componentState.tTextx0x44.default, componentState.tTextx0x44?.[state.screenSize]));

 const tRectx0x45ComputedData = computed(() => _.merge({}, componentState.tRectx0x45.default, componentState.tRectx0x45?.[state.screenSize]));

 const tTextx0x46ComputedData = computed(() => _.merge({}, componentState.tTextx0x46.default, componentState.tTextx0x46?.[state.screenSize]));

 const tTextUnitx0x47ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x47.default, componentState.tTextUnitx0x47?.[state.screenSize]));

 const tRectx0x48ComputedData = computed(() => _.merge({}, componentState.tRectx0x48.default, componentState.tRectx0x48?.[state.screenSize]));

 const tTextx0x49ComputedData = computed(() => _.merge({}, componentState.tTextx0x49.default, componentState.tTextx0x49?.[state.screenSize]));

 const tTextUnitx0x50ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x50.default, componentState.tTextUnitx0x50?.[state.screenSize]));

 const tRectx0x51ComputedData = computed(() => _.merge({}, componentState.tRectx0x51.default, componentState.tRectx0x51?.[state.screenSize]));

 const tTextx0x52ComputedData = computed(() => _.merge({}, componentState.tTextx0x52.default, componentState.tTextx0x52?.[state.screenSize]));

 const tTextUnitx0x53ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x53.default, componentState.tTextUnitx0x53?.[state.screenSize]));

 const tRectx0x54ComputedData = computed(() => _.merge({}, componentState.tRectx0x54.default, componentState.tRectx0x54?.[state.screenSize]));

 const tSelectx0x55ComputedData = computed(() => _.merge({}, componentState.tSelectx0x55.default, componentState.tSelectx0x55?.[state.screenSize]));

 const tTextx0x56ComputedData = computed(() => _.merge({}, componentState.tTextx0x56.default, componentState.tTextx0x56?.[state.screenSize]));

 const tRectx0x57ComputedData = computed(() => _.merge({}, componentState.tRectx0x57.default, componentState.tRectx0x57?.[state.screenSize]));

 const tTextx0x58ComputedData = computed(() => _.merge({}, componentState.tTextx0x58.default, componentState.tTextx0x58?.[state.screenSize]));

 const tTextUnitx0x59ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x59.default, componentState.tTextUnitx0x59?.[state.screenSize]));

 const tRectx0x60ComputedData = computed(() => _.merge({}, componentState.tRectx0x60.default, componentState.tRectx0x60?.[state.screenSize]));

 const tTextx0x61ComputedData = computed(() => _.merge({}, componentState.tTextx0x61.default, componentState.tTextx0x61?.[state.screenSize]));

 const tTextUnitx0x62ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x62.default, componentState.tTextUnitx0x62?.[state.screenSize]));

 const tRectx0x63ComputedData = computed(() => _.merge({}, componentState.tRectx0x63.default, componentState.tRectx0x63?.[state.screenSize]));

 const tRectx0x64ComputedData = computed(() => _.merge({}, componentState.tRectx0x64.default, componentState.tRectx0x64?.[state.screenSize]));

 const tTextx0x65ComputedData = computed(() => _.merge({}, componentState.tTextx0x65.default, componentState.tTextx0x65?.[state.screenSize]));

 const tTextUnitx0x66ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x66.default, componentState.tTextUnitx0x66?.[state.screenSize]));

 const tTextUnitx0x67ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x67.default, componentState.tTextUnitx0x67?.[state.screenSize]));

 const tTextx0x68ComputedData = computed(() => _.merge({}, componentState.tTextx0x68.default, componentState.tTextx0x68?.[state.screenSize]));

 const tTextx0x69ComputedData = computed(() => _.merge({}, componentState.tTextx0x69.default, componentState.tTextx0x69?.[state.screenSize]));

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
tTablex0x5ComputedData,
tTextx0x6ComputedData,
tSelectx0x7ComputedData,
tTextx0x8ComputedData,
tTextx0x9ComputedData,
tDatePickerx0x10ComputedData,
tPaginationBasex0x11ComputedData,
tTextx0x12ComputedData,
tRollingNumberx0x13ComputedData,
tRectx0x14ComputedData,
tRectx0x15ComputedData,
tRectx0x16ComputedData,
tTextUnitx0x17ComputedData,
tTextx0x18ComputedData,
tRectx0x19ComputedData,
tTextx0x20ComputedData,
tTextUnitx0x21ComputedData,
tRectx0x22ComputedData,
tTextx0x23ComputedData,
tTextUnitx0x24ComputedData,
tRectx0x25ComputedData,
tTextx0x26ComputedData,
tTextUnitx0x27ComputedData,
tRectx0x28ComputedData,
tRectx0x29ComputedData,
tTextUnitx0x30ComputedData,
tTextx0x31ComputedData,
tRectx0x32ComputedData,
tTextx0x33ComputedData,
tTextUnitx0x34ComputedData,
tRectx0x35ComputedData,
tTextx0x36ComputedData,
tTextUnitx0x37ComputedData,
tRectx0x38ComputedData,
tTextx0x39ComputedData,
tTextUnitx0x40ComputedData,
tRectx0x41ComputedData,
tRectx0x42ComputedData,
tTextUnitx0x43ComputedData,
tTextx0x44ComputedData,
tRectx0x45ComputedData,
tTextx0x46ComputedData,
tTextUnitx0x47ComputedData,
tRectx0x48ComputedData,
tTextx0x49ComputedData,
tTextUnitx0x50ComputedData,
tRectx0x51ComputedData,
tTextx0x52ComputedData,
tTextUnitx0x53ComputedData,
tRectx0x54ComputedData,
tSelectx0x55ComputedData,
tTextx0x56ComputedData,
tRectx0x57ComputedData,
tTextx0x58ComputedData,
tTextUnitx0x59ComputedData,
tRectx0x60ComputedData,
tTextx0x61ComputedData,
tTextUnitx0x62ComputedData,
tRectx0x63ComputedData,
tRectx0x64ComputedData,
tTextx0x65ComputedData,
tTextUnitx0x66ComputedData,
tTextUnitx0x67ComputedData,
tTextx0x68ComputedData,
tTextx0x69ComputedData,
onmouseout1739345365135,
onclick1739960380902,
onmouseover1739345261051,
onchange1741692175952,
ondateChange1741692530469,
onsizeChange1741691311630,
oncurrentChange1741691330398,
onchange1741692148834,
};
},
};