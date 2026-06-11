window.waterSurfaceEvaluateComponent = {
template: 
`<div id="t-l-c-waterSurfaceEvaluate" class="t-l-c-waterSurfaceEvaluate" >` +
`<t-component id="t-component-85f9.a47b96486" class="waterSurfaceEvaluate-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-ff94.8b4d2cddb" class="waterSurfaceEvaluate-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle" @click="onclick1738907413310">` +
`</t-text>` +
`<t-rect id="t-rect-652f.fdf9abada" class="waterSurfaceEvaluate-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-select id="t-select-083e.0e3eb9d19" class="waterSurfaceEvaluate-t-select-0-3"  :active-value="replaceCssVariables(filterData(state.selectTwoValue, componentPropBindingMap?.['t-select-083e.0e3eb9d19']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x3ComputedData.options" :alias="tSelectx0x3ComputedData.alias" :multiple="tSelectx0x3ComputedData.multiple" :placeholder="tSelectx0x3ComputedData.placeholder" :clearable="tSelectx0x3ComputedData.clearable" :disabled="tSelectx0x3ComputedData.disabled" :name="tSelectx0x3ComputedData.name" :autocomplete="tSelectx0x3ComputedData.autocomplete" :filterable="tSelectx0x3ComputedData.filterable" :no-match-text="tSelectx0x3ComputedData.no-match-text" :no-data-text="tSelectx0x3ComputedData.no-data-text" :c-style="tSelectx0x3ComputedData.cStyle" @change="onchange1733305548807">` +
`</t-select>` +
`<t-select id="t-select-78f9.e579cc45d" class="waterSurfaceEvaluate-t-select-0-4"  :active-value="replaceCssVariables(filterData(state.selectOne, componentPropBindingMap?.['t-select-78f9.e579cc45d']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x4ComputedData.options" :alias="tSelectx0x4ComputedData.alias" :multiple="tSelectx0x4ComputedData.multiple" :placeholder="tSelectx0x4ComputedData.placeholder" :clearable="tSelectx0x4ComputedData.clearable" :disabled="tSelectx0x4ComputedData.disabled" :collapse-tags="tSelectx0x4ComputedData.collapseTags" :name="tSelectx0x4ComputedData.name" :autocomplete="tSelectx0x4ComputedData.autocomplete" :filterable="tSelectx0x4ComputedData.filterable" :no-match-text="tSelectx0x4ComputedData.no-match-text" :no-data-text="tSelectx0x4ComputedData.no-data-text" :c-style="tSelectx0x4ComputedData.cStyle" @change="onchange1740100712865">` +
`</t-select>` +
`<t-date-picker id="t-date-picker-2c62.2be8bf325" class="waterSurfaceEvaluate-t-date-picker-0-5"  :placeholder="tDatePickerx0x5ComputedData.placeholder" :start-placeholder="tDatePickerx0x5ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x5ComputedData.endPlaceholder" :type="tDatePickerx0x5ComputedData.type" :clearable="tDatePickerx0x5ComputedData.clearable" :range-separator="tDatePickerx0x5ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-2c62.2be8bf325']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x5ComputedData.separator" :readonly="tDatePickerx0x5ComputedData.readonly" :editable="tDatePickerx0x5ComputedData.editable" :c-style="tDatePickerx0x5ComputedData.cStyle" @date-change="ondateChange1733305582571">` +
`</t-date-picker>` +
`<t-tabs-base id="t-tabs-base-9fec.899607ff" class="waterSurfaceEvaluate-t-tabs-base-0-6"  :data="tTabsBasex0x6ComputedData.data" :space="tTabsBasex0x6ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.tabsActiveValue, componentPropBindingMap?.['t-tabs-base-9fec.899607ff']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x6ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x6ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x6ComputedData.alias" :c-style="tTabsBasex0x6ComputedData.cStyle" @tab-click="ontabClick1733305602843">` +
`</t-tabs-base>` +
`<t-text id="t-text-0449.7284ee64" class="waterSurfaceEvaluate-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle">` +
`</t-text>` +
`<t-row id="t-row-271c.152545e7d" class="waterSurfaceEvaluate-t-row-0-11"  :c-style="tRowx0x11ComputedData.cStyle" :gutter="tRowx0x11ComputedData.gutter" :justify="tRowx0x11ComputedData.justify" :align="tRowx0x11ComputedData.align">` +
`<t-col id="t-col-9dc8.56d5671a" class="waterSurfaceEvaluate-t-col-0-11-0"  :span="tColx0x11x0ComputedData.span" :offset="tColx0x11x0ComputedData.offset" :push="tColx0x11x0ComputedData.push" :pull="tColx0x11x0ComputedData.pull" :c-style="tColx0x11x0ComputedData.cStyle">` +
`<t-list-card id="t-list-card-d957.e53434b18" class="waterSurfaceEvaluate-t-list-card-0-11-0-0"  :data="replaceCssVariables(filterData(state.overallRatingCard, componentPropBindingMap?.['t-list-card-d957.e53434b18']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x11x0x0ComputedData.spacingX" :col="tListCardx0x11x0x0ComputedData.col" :direction="tListCardx0x11x0x0ComputedData.direction" :exchange-order="tListCardx0x11x0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x11x0x0ComputedData.unitBreak" :key-field="tListCardx0x11x0x0ComputedData.keyField" :active-key-field="tListCardx0x11x0x0ComputedData.activeKeyField" :active="tListCardx0x11x0x0ComputedData.active" :c-style="tListCardx0x11x0x0ComputedData.cStyle">` +
`</t-list-card>` +
`</t-col>` +
`<t-col id="t-col-f875.1c241088a" class="waterSurfaceEvaluate-t-col-0-11-1"  :span="tColx0x11x1ComputedData.span" :offset="tColx0x11x1ComputedData.offset" :push="tColx0x11x1ComputedData.push" :pull="tColx0x11x1ComputedData.pull" :c-style="tColx0x11x1ComputedData.cStyle">` +
`<t-row id="t-row-69a1.76cf8f072" class="waterSurfaceEvaluate-t-row-0-11-1-0"  :c-style="tRowx0x11x1x0ComputedData.cStyle" :gutter="tRowx0x11x1x0ComputedData.gutter" :justify="tRowx0x11x1x0ComputedData.justify" :align="tRowx0x11x1x0ComputedData.align">` +
`<t-col id="t-col-62c8.62863f8d" class="waterSurfaceEvaluate-t-col-0-11-1-0-0"  :span="tColx0x11x1x0x0ComputedData.span" :offset="tColx0x11x1x0x0ComputedData.offset" :push="tColx0x11x1x0x0ComputedData.push" :pull="tColx0x11x1x0x0ComputedData.pull" :c-style="tColx0x11x1x0x0ComputedData.cStyle">` +
`<t-rect id="t-rect-d95b.18dadcfef" class="waterSurfaceEvaluate-t-rect-0-11-1-0-0-0"  :tip="tRectx0x11x1x0x0x0ComputedData.tip" :label="tRectx0x11x1x0x0x0ComputedData.label" :active="tRectx0x11x1x0x0x0ComputedData.active" :c-style="tRectx0x11x1x0x0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-85e1.faef115ac" class="waterSurfaceEvaluate-t-text-common-0-11-1-0-0-1"  :label="tTextCommonx0x11x1x0x0x1ComputedData.label" :editable="tTextCommonx0x11x1x0x0x1ComputedData.editable" :c-style="tTextCommonx0x11x1x0x0x1ComputedData.cStyle">` +
`</t-text-common>` +
`<t-row id="t-row-a96c.5bfa56f1d" class="waterSurfaceEvaluate-t-row-0-11-1-0-0-2"  :c-style="tRowx0x11x1x0x0x2ComputedData.cStyle" :gutter="tRowx0x11x1x0x0x2ComputedData.gutter" :justify="tRowx0x11x1x0x0x2ComputedData.justify" :align="tRowx0x11x1x0x0x2ComputedData.align">` +
`<t-text id="t-text-fcd4.2fed1dcf3" class="waterSurfaceEvaluate-t-text-0-11-1-0-0-2-0"  :label="replaceCssVariables(filterData(state.overallRatingBottom.one, componentPropBindingMap?.['t-text-fcd4.2fed1dcf3']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x11x1x0x0x2x0ComputedData.editable" :c-style="tTextx0x11x1x0x0x2x0ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-e105.b9697bcf3" class="waterSurfaceEvaluate-t-text-0-11-1-0-0-2-1"  :label="tTextx0x11x1x0x0x2x1ComputedData.label" :editable="tTextx0x11x1x0x0x2x1ComputedData.editable" :c-style="tTextx0x11x1x0x0x2x1ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-3eb8.3a46d3442" class="waterSurfaceEvaluate-t-text-0-11-1-0-0-2-2"  :label="replaceCssVariables(filterData(state.overallRatingBottom.two, componentPropBindingMap?.['t-text-3eb8.3a46d3442']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x11x1x0x0x2x2ComputedData.editable" :c-style="tTextx0x11x1x0x0x2x2ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`</t-col>` +
`<t-col id="t-col-944b.8d4d07d77" class="waterSurfaceEvaluate-t-col-0-11-1-0-1"  :span="tColx0x11x1x0x1ComputedData.span" :offset="tColx0x11x1x0x1ComputedData.offset" :push="tColx0x11x1x0x1ComputedData.push" :pull="tColx0x11x1x0x1ComputedData.pull" :c-style="tColx0x11x1x0x1ComputedData.cStyle">` +
`<t-rect id="t-rect-2da8.9478ec65e" class="waterSurfaceEvaluate-t-rect-0-11-1-0-1-0"  :tip="tRectx0x11x1x0x1x0ComputedData.tip" :label="tRectx0x11x1x0x1x0ComputedData.label" :active="tRectx0x11x1x0x1x0ComputedData.active" :c-style="tRectx0x11x1x0x1x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-3df9.76c5c9642" class="waterSurfaceEvaluate-t-text-common-0-11-1-0-1-1"  :label="tTextCommonx0x11x1x0x1x1ComputedData.label" :editable="tTextCommonx0x11x1x0x1x1ComputedData.editable" :c-style="tTextCommonx0x11x1x0x1x1ComputedData.cStyle">` +
`</t-text-common>` +
`<t-row id="t-row-100b.33ea4cc7" class="waterSurfaceEvaluate-t-row-0-11-1-0-1-2"  :c-style="tRowx0x11x1x0x1x2ComputedData.cStyle" :gutter="tRowx0x11x1x0x1x2ComputedData.gutter" :justify="tRowx0x11x1x0x1x2ComputedData.justify" :align="tRowx0x11x1x0x1x2ComputedData.align">` +
`<t-text id="t-text-f771.9f95a44da" class="waterSurfaceEvaluate-t-text-0-11-1-0-1-2-0"  :label="replaceCssVariables(filterData(state.overallRatingBottom.three, componentPropBindingMap?.['t-text-f771.9f95a44da']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x11x1x0x1x2x0ComputedData.editable" :c-style="tTextx0x11x1x0x1x2x0ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-a336.96889892e" class="waterSurfaceEvaluate-t-text-0-11-1-0-1-2-1"  :label="tTextx0x11x1x0x1x2x1ComputedData.label" :editable="tTextx0x11x1x0x1x2x1ComputedData.editable" :c-style="tTextx0x11x1x0x1x2x1ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`</t-col>` +
`</t-row>` +
`</t-col>` +
`<t-col id="t-col-3ff1.f1bdb2ffa" class="waterSurfaceEvaluate-t-col-0-11-2"  :span="tColx0x11x2ComputedData.span" :offset="tColx0x11x2ComputedData.offset" :push="tColx0x11x2ComputedData.push" :pull="tColx0x11x2ComputedData.pull" :c-style="tColx0x11x2ComputedData.cStyle">` +
`<t-component id="t-component-35d2.d3f19cd26" class="waterSurfaceEvaluate-t-component-0-11-2-0"  :name="tComponentx0x11x2x0ComputedData.name" :c-style="tComponentx0x11x2x0ComputedData.cStyle" :src="tComponentx0x11x2x0ComputedData.src" :component-name="tComponentx0x11x2x0ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-a345.2c7e234dc" class="waterSurfaceEvaluate-t-text-0-11-2-1"  :label="tTextx0x11x2x1ComputedData.label" :editable="tTextx0x11x2x1ComputedData.editable" :c-style="tTextx0x11x2x1ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-89e7.f2902e521" class="waterSurfaceEvaluate-t-text-0-11-2-2"  :label="tTextx0x11x2x2ComputedData.label" :editable="tTextx0x11x2x2ComputedData.editable" :c-style="tTextx0x11x2x2ComputedData.cStyle" @mouseover="onmouseover1733298920782" @mouseout="onmouseout1733298930144">` +
`</t-text>` +
`<t-text v-if="state.isShowHelpOne === true" id="t-text-9ad6.3931e464c" class="waterSurfaceEvaluate-t-text-0-11-2-3"  :label="tTextx0x11x2x3ComputedData.label" :editable="tTextx0x11x2x3ComputedData.editable" :c-style="tTextx0x11x2x3ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-64e9.1dfe291fe" class="waterSurfaceEvaluate-t-col-0-11-3"  :span="tColx0x11x3ComputedData.span" :offset="tColx0x11x3ComputedData.offset" :push="tColx0x11x3ComputedData.push" :pull="tColx0x11x3ComputedData.pull" :c-style="tColx0x11x3ComputedData.cStyle">` +
`<t-list-card id="t-list-card-9105.37fa1f9cf" class="waterSurfaceEvaluate-t-list-card-0-11-3-0"  :data="replaceCssVariables(filterData(state.earlyWarningCard, componentPropBindingMap?.['t-list-card-9105.37fa1f9cf']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x11x3x0ComputedData.spacingX" :col="tListCardx0x11x3x0ComputedData.col" :direction="tListCardx0x11x3x0ComputedData.direction" :exchange-order="tListCardx0x11x3x0ComputedData.exchangeOrder" :unit-break="tListCardx0x11x3x0ComputedData.unitBreak" :key-field="tListCardx0x11x3x0ComputedData.keyField" :active-key-field="tListCardx0x11x3x0ComputedData.activeKeyField" :active="tListCardx0x11x3x0ComputedData.active" :c-style="tListCardx0x11x3x0ComputedData.cStyle" @card-click="oncardClick1734057935552">` +
`</t-list-card>` +
`</t-col>` +
`<t-col id="t-col-490d.1f0f8c14e" class="waterSurfaceEvaluate-t-col-0-11-4"  :span="tColx0x11x4ComputedData.span" :offset="tColx0x11x4ComputedData.offset" :push="tColx0x11x4ComputedData.push" :pull="tColx0x11x4ComputedData.pull" :c-style="tColx0x11x4ComputedData.cStyle">` +
`<t-tabs-base id="t-tabs-base-7987.214a4cae" class="waterSurfaceEvaluate-t-tabs-base-0-11-4-0"  :data="tTabsBasex0x11x4x0ComputedData.data" :space="tTabsBasex0x11x4x0ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.bottomTabsValue, componentPropBindingMap?.['t-tabs-base-7987.214a4cae']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x11x4x0ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x11x4x0ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x11x4x0ComputedData.alias" :c-style="tTabsBasex0x11x4x0ComputedData.cStyle" @tab-click="ontabClick1734511453780">` +
`</t-tabs-base>` +
`</t-col>` +
`<t-col id="t-col-dee5.892c5873" class="waterSurfaceEvaluate-t-col-0-11-5"  :span="tColx0x11x5ComputedData.span" :offset="tColx0x11x5ComputedData.offset" :push="tColx0x11x5ComputedData.push" :pull="tColx0x11x5ComputedData.pull" :c-style="tColx0x11x5ComputedData.cStyle">` +
`<t-chart-design v-if="state.bottomTabsValue !== 'region'" id="t-chart-design-9aa2.f6ffb218e" class="waterSurfaceEvaluate-t-chart-design-0-11-5-0"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-design-9aa2.f6ffb218e']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartDesignx0x11x5x0ComputedData.cStyle" :options="tChartDesignx0x11x5x0ComputedData.options">` +
`</t-chart-design>` +
`<t-chart-design v-if="state.bottomTabsValue === 'region'" id="t-chart-design-8084.313a8863c" class="waterSurfaceEvaluate-t-chart-design-0-11-5-1"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-design-8084.313a8863c']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartDesignx0x11x5x1ComputedData.cStyle" :options="tChartDesignx0x11x5x1ComputedData.options">` +
`</t-chart-design>` +
`</t-col>` +
`<t-col id="t-col-a69e.37c44979" class="waterSurfaceEvaluate-t-col-0-11-6"  :span="tColx0x11x6ComputedData.span" :offset="tColx0x11x6ComputedData.offset" :push="tColx0x11x6ComputedData.push" :pull="tColx0x11x6ComputedData.pull" :c-style="tColx0x11x6ComputedData.cStyle">` +
`<t-component id="t-component-bbdb.5e45132e" class="waterSurfaceEvaluate-t-component-0-11-6-0"  :name="tComponentx0x11x6x0ComputedData.name" :c-style="tComponentx0x11x6x0ComputedData.cStyle" :src="tComponentx0x11x6x0ComputedData.src" :component-name="tComponentx0x11x6x0ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-9860.33832204e" class="waterSurfaceEvaluate-t-text-0-11-6-1"  :label="tTextx0x11x6x1ComputedData.label" :editable="tTextx0x11x6x1ComputedData.editable" :c-style="tTextx0x11x6x1ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-504e.31650363" class="waterSurfaceEvaluate-t-text-0-11-6-2"  :label="tTextx0x11x6x2ComputedData.label" :editable="tTextx0x11x6x2ComputedData.editable" :c-style="tTextx0x11x6x2ComputedData.cStyle" @mouseover="onmouseover1733300566113_0_0" @mouseout="onmouseout1733300566113_0_1">` +
`</t-text>` +
`<t-text v-if="state.isShowHelpTwo === true" id="t-text-444a.b33691bed" class="waterSurfaceEvaluate-t-text-0-11-6-3"  :label="tTextx0x11x6x3ComputedData.label" :editable="tTextx0x11x6x3ComputedData.editable" :c-style="tTextx0x11x6x3ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.isShowHelpTwo === true" id="t-text-768c.525fa007a" class="waterSurfaceEvaluate-t-text-0-11-6-4"  :label="tTextx0x11x6x4ComputedData.label" :editable="tTextx0x11x6x4ComputedData.editable" :c-style="tTextx0x11x6x4ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-a986.bd3f6611a" class="waterSurfaceEvaluate-t-col-0-11-7"  :span="tColx0x11x7ComputedData.span" :offset="tColx0x11x7ComputedData.offset" :push="tColx0x11x7ComputedData.push" :pull="tColx0x11x7ComputedData.pull" :c-style="tColx0x11x7ComputedData.cStyle">` +
`<t-checkbox id="t-checkbox-645b.c195be9a7" class="waterSurfaceEvaluate-t-checkbox-0-11-7-0"  :data="tCheckboxx0x11x7x0ComputedData.data" :active="replaceCssVariables(filterData(state.chexkBoxActive, componentPropBindingMap?.['t-checkbox-645b.c195be9a7']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x11x7x0ComputedData.dataAlias" :border="tCheckboxx0x11x7x0ComputedData.border" :use-button="tCheckboxx0x11x7x0ComputedData.useButton" :c-style="tCheckboxx0x11x7x0ComputedData.cStyle" @change="onchange1733294293609">` +
`</t-checkbox>` +
`</t-col>` +
`<t-col id="t-col-8aa9.4d85a760e" class="waterSurfaceEvaluate-t-col-0-11-8"  :span="tColx0x11x8ComputedData.span" :offset="tColx0x11x8ComputedData.offset" :push="tColx0x11x8ComputedData.push" :pull="tColx0x11x8ComputedData.pull" :c-style="tColx0x11x8ComputedData.cStyle">` +
`<t-row id="t-row-c2c0.3cc9dedde" class="waterSurfaceEvaluate-t-row-0-11-8-0"  :c-style="tRowx0x11x8x0ComputedData.cStyle" :gutter="tRowx0x11x8x0ComputedData.gutter" :justify="tRowx0x11x8x0ComputedData.justify" :align="tRowx0x11x8x0ComputedData.align">` +
`<t-col id="t-col-0be5.c900e745c" class="waterSurfaceEvaluate-t-col-0-11-8-0-0"  :span="tColx0x11x8x0x0ComputedData.span" :offset="tColx0x11x8x0x0ComputedData.offset" :push="tColx0x11x8x0x0ComputedData.push" :pull="tColx0x11x8x0x0ComputedData.pull" :c-style="tColx0x11x8x0x0ComputedData.cStyle">` +
`<t-search id="t-search-87b2.6df361301" class="waterSurfaceEvaluate-t-search-0-11-8-0-0-0"  :type="tSearchx0x11x8x0x0x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.pointName, componentPropBindingMap?.['t-search-87b2.6df361301']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x11x8x0x0x0ComputedData.maxlength" :minlength="tSearchx0x11x8x0x0x0ComputedData.minlength" :show-word-limit="tSearchx0x11x8x0x0x0ComputedData.showWordLimit" :placeholder="tSearchx0x11x8x0x0x0ComputedData.placeholder" :clearable="tSearchx0x11x8x0x0x0ComputedData.clearable" :show-password="tSearchx0x11x8x0x0x0ComputedData.showPassword" :disabled="tSearchx0x11x8x0x0x0ComputedData.disabled" :prefix-icon="tSearchx0x11x8x0x0x0ComputedData.prefix-icon" :suffix-icon="tSearchx0x11x8x0x0x0ComputedData.suffix-icon" :rows="tSearchx0x11x8x0x0x0ComputedData.rows" :autosize="tSearchx0x11x8x0x0x0ComputedData.autosize" :name="tSearchx0x11x8x0x0x0ComputedData.name" :readonly="tSearchx0x11x8x0x0x0ComputedData.readonly" :step="tSearchx0x11x8x0x0x0ComputedData.step" :autofocus="tSearchx0x11x8x0x0x0ComputedData.autofocus" :form="tSearchx0x11x8x0x0x0ComputedData.form" :label="tSearchx0x11x8x0x0x0ComputedData.label" :tabindex="tSearchx0x11x8x0x0x0ComputedData.tabindex" :validate-event="tSearchx0x11x8x0x0x0ComputedData.validateEvent" :c-style="tSearchx0x11x8x0x0x0ComputedData.cStyle" :has-search-btn="tSearchx0x11x8x0x0x0ComputedData.hasSearchBtn" @input="oninput1734340142696">` +
`</t-search>` +
`</t-col>` +
`<t-col id="t-col-6a38.26a6ecc6e" class="waterSurfaceEvaluate-t-col-0-11-8-0-1"  :span="tColx0x11x8x0x1ComputedData.span" :offset="tColx0x11x8x0x1ComputedData.offset" :push="tColx0x11x8x0x1ComputedData.push" :pull="tColx0x11x8x0x1ComputedData.pull" :c-style="tColx0x11x8x0x1ComputedData.cStyle">` +
`<t-button id="t-button-7fbe.2650de349" class="waterSurfaceEvaluate-t-button-0-11-8-0-1-0"  :label="tButtonx0x11x8x0x1x0ComputedData.label" :round="tButtonx0x11x8x0x1x0ComputedData.round" :plain="tButtonx0x11x8x0x1x0ComputedData.plain" :disabled="tButtonx0x11x8x0x1x0ComputedData.disabled" :type="tButtonx0x11x8x0x1x0ComputedData.type" :size="tButtonx0x11x8x0x1x0ComputedData.size" :native-type="tButtonx0x11x8x0x1x0ComputedData.native-type" :c-style="tButtonx0x11x8x0x1x0ComputedData.cStyle" @click="onclick1734484155618">` +
`</t-button>` +
`</t-col>` +
`</t-row>` +
`</t-col>` +
`<t-col id="t-col-8327.149181864" class="waterSurfaceEvaluate-t-col-0-11-9"  :span="tColx0x11x9ComputedData.span" :offset="tColx0x11x9ComputedData.offset" :push="tColx0x11x9ComputedData.push" :pull="tColx0x11x9ComputedData.pull" :c-style="tColx0x11x9ComputedData.cStyle">` +
`<t-table id="t-table-aad5.42d83a1c3" class="waterSurfaceEvaluate-t-table-0-11-9-0"  :height="tTablex0x11x9x0ComputedData.height" :stripe="tTablex0x11x9x0ComputedData.stripe" :border="tTablex0x11x9x0ComputedData.border" :auto-scroll="tTablex0x11x9x0ComputedData.autoScroll" :speed="tTablex0x11x9x0ComputedData.speed" :columns="tTablex0x11x9x0ComputedData.columns" :data="replaceCssVariables(filterData(state.pjResultList, componentPropBindingMap?.['t-table-aad5.42d83a1c3']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x11x9x0ComputedData.defaultSort" :c-style="tTablex0x11x9x0ComputedData.cStyle" @cell-click="oncellClick1733452949625">` +
`</t-table>` +
`</t-col>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-85f9.a47b96486":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-ff94.8b4d2cddb":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-652f.fdf9abada":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-select-083e.0e3eb9d19":{"attributeName":"tSelectx0x3","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-select-78f9.e579cc45d":{"attributeName":"tSelectx0x4","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"collapseTags":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-2c62.2be8bf325":{"attributeName":"tDatePickerx0x5","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-9fec.899607ff":{"attributeName":"tTabsBasex0x6","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-e2ee.0d3ebeb6f":{"attributeName":"tRectx0x7"},"t-rect-56db.3094fa568":{"attributeName":"tRectx0x8"},"t-text-0449.7284ee64":{"attributeName":"tTextx0x9","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-c885.b68e0bb26":{"attributeName":"tRectx0x10"},"t-row-271c.152545e7d":{"attributeName":"tRowx0x11","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-9dc8.56d5671a":{"attributeName":"tColx0x11x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-d957.e53434b18":{"attributeName":"tListCardx0x11x0x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-f875.1c241088a":{"attributeName":"tColx0x11x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-row-69a1.76cf8f072":{"attributeName":"tRowx0x11x1x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-62c8.62863f8d":{"attributeName":"tColx0x11x1x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-d95b.18dadcfef":{"attributeName":"tRectx0x11x1x0x0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-85e1.faef115ac":{"attributeName":"tTextCommonx0x11x1x0x0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-a96c.5bfa56f1d":{"attributeName":"tRowx0x11x1x0x0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-fcd4.2fed1dcf3":{"attributeName":"tTextx0x11x1x0x0x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e105.b9697bcf3":{"attributeName":"tTextx0x11x1x0x0x2x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3eb8.3a46d3442":{"attributeName":"tTextx0x11x1x0x0x2x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-944b.8d4d07d77":{"attributeName":"tColx0x11x1x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-2da8.9478ec65e":{"attributeName":"tRectx0x11x1x0x1x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-3df9.76c5c9642":{"attributeName":"tTextCommonx0x11x1x0x1x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-100b.33ea4cc7":{"attributeName":"tRowx0x11x1x0x1x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-f771.9f95a44da":{"attributeName":"tTextx0x11x1x0x1x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a336.96889892e":{"attributeName":"tTextx0x11x1x0x1x2x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-3ff1.f1bdb2ffa":{"attributeName":"tColx0x11x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-35d2.d3f19cd26":{"attributeName":"tComponentx0x11x2x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-a345.2c7e234dc":{"attributeName":"tTextx0x11x2x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-89e7.f2902e521":{"attributeName":"tTextx0x11x2x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-9ad6.3931e464c":{"attributeName":"tTextx0x11x2x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-64e9.1dfe291fe":{"attributeName":"tColx0x11x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-9105.37fa1f9cf":{"attributeName":"tListCardx0x11x3x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-490d.1f0f8c14e":{"attributeName":"tColx0x11x4","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-7987.214a4cae":{"attributeName":"tTabsBasex0x11x4x0","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-col-dee5.892c5873":{"attributeName":"tColx0x11x5","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-9aa2.f6ffb218e":{"attributeName":"tChartDesignx0x11x5x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-chart-design-8084.313a8863c":{"attributeName":"tChartDesignx0x11x5x1","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-col-a69e.37c44979":{"attributeName":"tColx0x11x6","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-bbdb.5e45132e":{"attributeName":"tComponentx0x11x6x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-9860.33832204e":{"attributeName":"tTextx0x11x6x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-504e.31650363":{"attributeName":"tTextx0x11x6x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-444a.b33691bed":{"attributeName":"tTextx0x11x6x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-768c.525fa007a":{"attributeName":"tTextx0x11x6x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-a986.bd3f6611a":{"attributeName":"tColx0x11x7","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-checkbox-645b.c195be9a7":{"attributeName":"tCheckboxx0x11x7x0","data":{"filters":[]},"active":{"filters":[]},"dataAlias":{"filters":[]},"border":{"filters":[]},"useButton":{"filters":[]},"cStyle":{"filters":[]}},"t-col-8aa9.4d85a760e":{"attributeName":"tColx0x11x8","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-row-c2c0.3cc9dedde":{"attributeName":"tRowx0x11x8x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-0be5.c900e745c":{"attributeName":"tColx0x11x8x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-search-87b2.6df361301":{"attributeName":"tSearchx0x11x8x0x0x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-col-6a38.26a6ecc6e":{"attributeName":"tColx0x11x8x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-button-7fbe.2650de349":{"attributeName":"tButtonx0x11x8x0x1x0","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-col-8327.149181864":{"attributeName":"tColx0x11x9","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-table-aad5.42d83a1c3":{"attributeName":"tTablex0x11x9x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
   treemapLabelFontSize: 16,
   selectOneStr: "1,2",
   noDataImg: "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
   chartTreemapOptionTooltip: {},
   surfaceWaterState: {"time":""},
   bottomTabsValue: "region",
   pollutantDistributionCardList: [],
   problemDistributionCardList: [],
   selectTwoValue: "all",
   pjResultList: [],
   chexkBoxActiveStr: "1,2,3,4,5,6,0",
   earlyWarningCard: [{"title":"水质超标报警","num":0,"unit":"个","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg","componentName":"waterCommonWarningDialogComponent","alarmTypeCode":"waterLevelOver"},{"title":"同比下降报警","num":0,"unit":"个","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg","componentName":"waterCommonWarningDialogComponent","alarmTypeCode":"yoyover"},{"title":"达标差距预警","num":0,"unit":"个","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg","componentName":"waterCommonWarningDialogComponent","alarmTypeCode":"standardGap"}],
   overallRatingBottom: {"one":"0","two":"0","three":"0"},
   overallRatingCard: [{"title":"断面总数","num":0,"unit":"个","color":"var(--business-theme)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/c455d26bb2b44f2cb0b5aecbd0b2eb43.png"},{"title":"优良断面","num":0,"unit":"个","color":"rgba(0, 255, 34, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/80b32d24a02548d4a4766b6f29301a37.png"},{"title":"劣V断面","num":0,"unit":"个","color":"rgba(255, 192, 0, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/3e691744524c468f8cd1990f8bc03b69.png"}],
   pointName: "",
   timeValue: "",
   selectTwo: "",
   selectOne: ["1","2"],
   tabsActiveValue: "monthly",
   isShowHelpTwo: false,
   isShowHelpOne: false,
   chexkBoxActive: ["1","2","3","4","5","6","0"],
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
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(184, 24, 24, 0)","position":"unset","left":"19px","top":"130px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(184, 24, 24, 0)","position":"unset","left":"19px","top":"130px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"177px","height":"31px","color":"var(--skin-font-color-90)","top":"130px","left":"253px","fontSize":"var(--business-text-size-14)","position":"unset","cursor":"pointer","animationName":"","textAlign":"right","lineHeight":"31px"},
            
            },
 default: { 
 
label:"国省考断面分析 >",
editable:false,
cStyle:{"wrapper":{"default":{"width":"177px","height":"31px","color":"var(--skin-font-color-90)","top":"130px","left":"253px","fontSize":"var(--business-text-size-14)","position":"unset","cursor":"pointer","animationName":"","textAlign":"right","lineHeight":"31px"}},"arrow":{"default":{"textAlign":"right"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"450px","height":"106px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"106px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}}}, 
 },
},
tSelectx0x3: {
defaultStyle: {
            default: {"width":"136px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"all",
options:[{"value":"all","label":"所有断面","disabled":false},{"value":"1","label":"跨界断面","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"136px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tSelectx0x4: {
defaultStyle: {
            default: {"width":"136px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","animationName":"","pointerEvents":"auto","paddingLeft":"12px","paddingRight":"30px","position":"unset","left":"15px","top":"57px"},
            
            },
 default: { 
 
activeValue:["1","2"],
options:[{"value":"1","label":"国控","disabled":false},{"value":"2","label":"省控","disabled":false},{"value":"4","label":"其他","disabled":false}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:true,
placeholder:"请选择",
clearable:true,
disabled:false,
collapseTags:true,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"136px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","animationName":"","pointerEvents":"auto","paddingLeft":"12px","paddingRight":"30px","position":"unset","left":"15px","top":"57px"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)","backgroundColor":"","max-width":"none"}},"tag":{"default":{"backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","height":"22px","lineHeight":"20px"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","width":"136px","left":"0 !important","right":"0 !important","top":"42px !important"}},"arrow":{"default":{"backgroundImage":"var(--select-arrow-up-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"6px 4px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","fontSize":"var(--business-text-size-14)","color":"var(--business-unit-icon)"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}},"dropdownItem":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","width":"136px"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)","fontSize":"18","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tDatePickerx0x5: {
defaultStyle: {
            default: {"width":"146px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","min-height":"30px","line-height":"normal","min-width":"146px","max-width":"none"},
            
            },
 default: { 
 
placeholder:"请选择",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"month",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"146px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","min-height":"30px","line-height":"normal","min-width":"146px","max-width":"none"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","min-height":"30px","line-height":"normal"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px","fontSize":"var(--business-text-size-14)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","fontSize":"var(--business-text-size-14)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-14)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"inputCloseIcons":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderYearBtnWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderYearBtn":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tTabsBasex0x6: {
defaultStyle: {
            default: {"width":"423px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","left":"15px","top":"16px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"},
            
            },
 default: { 
 
data:[{"label":"单月","value":"monthly"},{"label":"累计","value":"culmulate"}],
space:0,
selectedTabVal:"monthly",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"423px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","left":"15px","top":"16px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"}},"itemWrapper":{"default":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","backgroundColor":"rgba(0, 61, 155, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"120px","height":"32px","fontSize":"var(--business-text-size-14)","lineHeight":"32px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(0,61,155,0)","borderTop":"1px solid rgba(0,61,155,0)","borderRight":"1px solid rgba(0,61,155,0)","borderBottom":"1px solid rgba(0,61,155,0)","color":"var(--business-text-avianize)"},"active":{"background":"var(--business-tab-third-active-fill)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"rgba(3, 12, 52, 0)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","color":"var(--business-tab-third-active-text)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"32px"},"hover":{"backgroundColor":"rgba(0, 61, 155, 0)","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","color":"var(--business-tab-third-active-border)"}}}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"auto","height":"19px","color":"rgba(255, 255, 255, 0.9)","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""},
            
            },
 default: { 
 
label:"整体评价结果",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"19px","color":"rgba(255, 255, 255, 0.9)","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""}}}, 
 },
},
tRowx0x11: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","background":"rgba(0, 0, 0, 0)","fillType":"color","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomRightRadius":"10px","borderBottomLeftRadius":"10px","paddingLeft":"16px","paddingRight":"16px","paddingBottom":"0px","paddingTop":"6px","gap":"0px","animationName":"","left":"0px","top":"174px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","background":"rgba(0, 0, 0, 0)","fillType":"color","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomRightRadius":"10px","borderBottomLeftRadius":"10px","paddingLeft":"16px","paddingRight":"16px","paddingBottom":"0px","paddingTop":"6px","gap":"0px","animationName":"","left":"0px","top":"174px","position":"unset"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x11x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1260px","top":"-320px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1260px","top":"-320px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tListCardx0x11x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px","position":"unset","left":"15px","top":"174px"},
            
            },
 default: { 
 
data:[{"title":"断面总数","num":0,"unit":"个","color":"var(--business-theme)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/c455d26bb2b44f2cb0b5aecbd0b2eb43.png"},{"title":"优良断面","num":0,"unit":"个","color":"rgba(0, 255, 34, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/80b32d24a02548d4a4766b6f29301a37.png"},{"title":"劣V断面","num":0,"unit":"个","color":"rgba(255, 192, 0, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/3e691744524c468f8cd1990f8bc03b69.png"}],
spacingX:8,
col:3,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px","position":"unset","left":"15px","top":"174px"}},"itemWrapper":{"default":{"height":"100%","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","line-height":"normal","min-height":"66px"}},"num":{"default":{"fontSize":"var(--business-num-size-24)","fontWeight":"700","marginRight":"2px","lineHeight":"var(--business-num-size-24)","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","marginTop":"0px","lineHeight":"var(--business-text-size-14)"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"17px"}},"numBox":{"default":{"marginTop":"8px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"alignItems":"flex-start","marginLeft":"8px"}}}, 
 },
},
tColx0x11x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","marginBottom":"10px","animationName":"","left":"1240px","top":"-340px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","marginBottom":"10px","animationName":"","left":"1240px","top":"-340px"}}}, 
 },
},
tRowx0x11x1x0: {
defaultStyle: {
            default: {"width":"98%","min-width":"auto","height":"auto","column-gap":"10px","justify-content":"flex-start","justifyContent":"space-between","alignItems":"center","gap":"6px","display":"flex","padding":"4px 0","animationName":"","left":"862px","top":"-269px","backgroundColor":"var(--business-show-bg15)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"98%","min-width":"auto","height":"auto","column-gap":"10px","justify-content":"flex-start","justifyContent":"space-between","alignItems":"center","gap":"6px","display":"flex","padding":"4px 0","animationName":"","left":"862px","top":"-269px","backgroundColor":"var(--business-show-bg15)"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x11x1x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","flexDirection":"row","gap":"10px","animationName":"","left":"1250px","top":"-330px"},
            
            },
 default: { 
 
span:13,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","flexDirection":"row","gap":"10px","animationName":"","left":"1250px","top":"-330px"}}}, 
 },
},
tRectx0x11x1x0x0x0: {
defaultStyle: {
            default: {"width":"2px","height":"27px","position":"unset","left":"20px","top":"263px","backgroundColor":"var(--business-theme)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"2px","height":"27px","position":"unset","left":"20px","top":"263px","backgroundColor":"var(--business-theme)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":""}}}, 
 },
},
tTextCommonx0x11x1x0x0x1: {
defaultStyle: {
            default: {"width":"96px","height":"auto","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","background":"unset","backgroundClip":"unset","left":"43px","top":"268px","position":"unset"},
            
            },
 default: { 
 
label:"达标断面",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"auto","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","background":"unset","backgroundClip":"unset","left":"43px","top":"268px","position":"unset"}}}, 
 },
},
tRowx0x11x1x0x0x2: {
defaultStyle: {
            default: {"width":"85px","height":"auto","position":"unset","left":"135px","top":"265px","letterSpacing":"0px","animationName":"","fontWeight":"600"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"85px","height":"auto","position":"unset","left":"135px","top":"265px","letterSpacing":"0px","animationName":"","fontWeight":"600"}}},
gutter:0,
justify:"center",
align:"middle", 
 },
},
tTextx0x11x1x0x0x2x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"var(--business-num-size-18)","lineHeight":"var(--business-num-size-18)","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold"},
            
            },
 default: { 
 
label:"0",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"var(--business-num-size-18)","lineHeight":"var(--business-num-size-18)","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold"}}}, 
 },
},
tTextx0x11x1x0x0x2x1: {
defaultStyle: {
            default: {"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","animationName":"","fontSize":"var(--business-text-size-14)","lineHeight":"14px","marginLeft":"4px","marginRight":"4px","textIndent":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
label:"/",
editable:false,
cStyle:{"wrapper":{"default":{"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","animationName":"","fontSize":"var(--business-text-size-14)","lineHeight":"14px","marginLeft":"4px","marginRight":"4px","textIndent":"0px","paddingLeft":"0px"}}}, 
 },
},
tTextx0x11x1x0x0x2x2: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--business-white)","fontFamily":"DIN-bold","fontWeight":"500","animationName":"","fontSize":"var(--business-num-size-18)"},
            
            },
 default: { 
 
label:"0",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--business-white)","fontFamily":"DIN-bold","fontWeight":"500","animationName":"","fontSize":"var(--business-num-size-18)"}}}, 
 },
},
tColx0x11x1x0x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"1240px","top":"-340px","borderLeft":"0px solid var(--business-theme)"},
            
            },
 default: { 
 
span:10,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"1240px","top":"-340px","borderLeft":"0px solid var(--business-theme)"}}}, 
 },
},
tRectx0x11x1x0x1x0: {
defaultStyle: {
            default: {"width":"1px","height":"17px","position":"absolute !important","left":"0 !important","top":"50% !important","transform":"translateY(-50%)","backgroundColor":"var(--business-theme)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"17px","position":"absolute !important","left":"0 !important","top":"50% !important","transform":"translateY(-50%)","backgroundColor":"var(--business-theme)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":""}}}, 
 },
},
tTextCommonx0x11x1x0x1x1: {
defaultStyle: {
            default: {"width":"66px","height":"auto","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"258px","top":"268px","background":"unset","backgroundClip":"unset","line-height":"normal"},
            
            },
 default: { 
 
label:"达标率",
editable:false,
cStyle:{"wrapper":{"default":{"width":"66px","height":"auto","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"258px","top":"268px","background":"unset","backgroundClip":"unset","line-height":"normal"}}}, 
 },
},
tRowx0x11x1x0x1x2: {
defaultStyle: {
            default: {"width":"83px","height":"auto","position":"unset","left":"327px","top":"265px","letterSpacing":"0px","animationName":"","fontWeight":"600","marginLeft":"6px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"83px","height":"auto","position":"unset","left":"327px","top":"265px","letterSpacing":"0px","animationName":"","fontWeight":"600","marginLeft":"6px"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x11x1x0x1x2x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"var(--business-num-size-18)","lineHeight":"var(--business-num-size-18)","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold"},
            
            },
 default: { 
 
label:"0",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"var(--business-num-size-18)","lineHeight":"var(--business-num-size-18)","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold"}}}, 
 },
},
tTextx0x11x1x0x1x2x1: {
defaultStyle: {
            default: {"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","animationName":"","fontSize":"var(--business-text-size-14)","lineHeight":"14px","marginLeft":"4px","marginRight":"4px","textIndent":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
label:"%",
editable:false,
cStyle:{"wrapper":{"default":{"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","animationName":"","fontSize":"var(--business-text-size-14)","lineHeight":"14px","marginLeft":"4px","marginRight":"4px","textIndent":"0px","paddingLeft":"0px"}}}, 
 },
},
tColx0x11x2: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1270px","top":"-310px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1270px","top":"-310px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tComponentx0x11x2x0: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"absolute","left":"0","top":"0"},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"absolute","left":"0","top":"0"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x11x2x1: {
defaultStyle: {
            default: {"width":"auto","height":"31px","color":"rgba(255, 255, 255, 0.9)","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","lineHeight":"31px","marginLeft":"38px","z-index":0},
            
            },
 default: { 
 
label:"报警预警",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"31px","color":"rgba(255, 255, 255, 0.9)","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","lineHeight":"31px","marginLeft":"38px","z-index":0}}}, 
 },
},
tTextx0x11x2x2: {
defaultStyle: {
            default: {"width":"16px","height":"16px","color":"var(--t-white)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","cursor":"pointer","position":"unset","left":"149px","top":"333px","textAlign":"center","paddingBottom":"2px","fontSize":"10px","fontWeight":"700","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomLeftRadius":"50%","borderBottomRightRadius":"50%","paddingTop":"2px","z-index":0},
            
            },
 default: { 
 
label:"?",
editable:false,
cStyle:{"wrapper":{"default":{"width":"16px","height":"16px","color":"var(--t-white)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","cursor":"pointer","position":"unset","left":"149px","top":"333px","textAlign":"center","paddingBottom":"2px","fontSize":"10px","fontWeight":"700","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomLeftRadius":"50%","borderBottomRightRadius":"50%","paddingTop":"2px","z-index":0},"hover":{"cursor":"pointer"}}}, 
 },
},
tTextx0x11x2x3: {
defaultStyle: {
            default: {"width":"161px","height":"auto","color":"var(--t-white)","position":"absolute","left":"58px","top":"31px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"var(--business-text-size-12)","paddingTop":"10px","paddingLeft":"10px","backgroundColor":"var(--business-btn-default)","min-height":"32px","z-index":1},
            
            },
 default: { 
 
label:"报警预警以单月数据为依据",
editable:false,
cStyle:{"wrapper":{"default":{"width":"161px","height":"auto","color":"var(--t-white)","position":"absolute","left":"58px","top":"31px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"var(--business-text-size-12)","paddingTop":"10px","paddingLeft":"10px","backgroundColor":"var(--business-btn-default)","min-height":"32px","z-index":1}}}, 
 },
},
tColx0x11x3: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1280px","top":"-300px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1280px","top":"-300px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tListCardx0x11x3x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
data:[{"title":"水质超标报警","num":0,"unit":"个","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg","componentName":"waterCommonWarningDialogComponent","alarmTypeCode":"waterLevelOver"},{"title":"同比下降报警","num":0,"unit":"个","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg","componentName":"waterCommonWarningDialogComponent","alarmTypeCode":"yoyover"},{"title":"达标差距预警","num":0,"unit":"个","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg","componentName":"waterCommonWarningDialogComponent","alarmTypeCode":"standardGap"}],
spacingX:8,
col:3,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","animationName":"","paddingRight":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"height":"auto","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"rgba(23, 62, 228, 0)","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","line-height":"normal"}},"num":{"default":{"fontSize":"var(--business-num-size-26)","fontWeight":"700","marginRight":"2px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--business-white)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-text-avianize)"}},"title":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-text-avianize)","marginTop":"0px","lineHeight":"var(--business-text-size-12)"}},"icon":{"default":{"width":"36px","height":"36px","left":"16px","marginLeft":"0px"}},"numBox":{"default":{"marginTop":"4px","justifyContent":"flex-start"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"textAlign":"left","marginLeft":"4px"}}}, 
 },
},
tColx0x11x4: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1290px","top":"-290px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1290px","top":"-290px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tTabsBasex0x11x4x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","animationName":""},
            
            },
 default: { 
 
data:[{"label":"问题区域分布","value":"region"},{"label":"报警污染物分布","value":"pollutant"}],
space:5,
selectedTabVal:"region",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(26, 27, 31, 0)","width":"auto","height":"auto","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-14)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","min-width":"130px","min-height":"28px","line-height":"normal","display":"flex","justify-content":"center","align-items":"center","padding":"5px"},"active":{"backgroundImage":"var(--business-tab-content-active-bg)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","height":"auto","width":"auto","-webkit-mask-size":"","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-position":"","color":"#FFF"},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)","backgroundImage":"var(--business-tab-content-active-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","color":"#FFF"}},"label":{"default":{"color":""}}}, 
 },
},
tColx0x11x5: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1300px","top":"-280px","display":"flex","column-gap":"10px","align-items":"center","justify-content":"flex-start"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1300px","top":"-280px","display":"flex","column-gap":"10px","align-items":"center","justify-content":"flex-start"}}}, 
 },
},
tChartDesignx0x11x5x0: {
defaultStyle: {
            default: {"height":"124px","width":"410px","position":"unset","left":"21px","top":"466px","animationName":""},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"height":"124px","width":"410px","position":"unset","left":"21px","top":"466px","animationName":""}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"color":["rgba(255, 106, 0, 0.4)","rgba(244, 220, 0, 0.4)","rgba(55, 255, 0, 0.4)","rgba(0, 255, 255, 0.4)","rgba(58, 156, 255, 0.4)","rgba(184, 43, 255, 0.4)"],"xAxis":{"show":false},"yAxis":{"show":false},"tooltip":state.chartTreemapOptionTooltip,"series":[{"type":"treemap","width":"100%","height":"100%","breadcrumb":{"show":false},"roam":false,"nodeClick":false,"itemStyle":{"borderColor":"rgba(0,0,0,0)"},"label":{"fontSize":state.treemapLabelFontSize,"fontWeight":700},"levels":[{"itemStyle":{"gapWidth":5}},{"colorSaturation":[0.3,0.6],"itemStyle":{"borderColorSaturation":0.5,"borderWidth":2}}],"data":state.pollutantDistributionCardList}]})), 
 },
},
tChartDesignx0x11x5x1: {
defaultStyle: {
            default: {"height":"124px","width":"410px","position":"unset","left":"20px","top":"466px","animationName":""},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"height":"124px","width":"410px","position":"unset","left":"20px","top":"466px","animationName":""}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"color":["rgba(255, 106, 0, 0.4)","rgba(244, 220, 0, 0.4)","rgba(55, 255, 0, 0.4)","rgba(0, 255, 255, 0.4)","rgba(58, 156, 255, 0.4)","rgba(184, 43, 255, 0.4)"],"xAxis":{"show":false},"yAxis":{"show":false},"tooltip":state.chartTreemapOptionTooltip,"series":[{"type":"treemap","width":"100%","height":"100%","breadcrumb":{"show":false},"roam":false,"nodeClick":false,"itemStyle":{"borderColor":"rgba(0,0,0,0)"},"label":{"fontSize":state.treemapLabelFontSize,"fontWeight":700},"levels":[{"itemStyle":{"gapWidth":5}},{"colorSaturation":[0.3,0.6],"itemStyle":{"borderColorSaturation":0.5,"borderWidth":2}}],"data":state.problemDistributionCardList}]})), 
 },
},
tColx0x11x6: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1310px","top":"-270px","display":"flex","column-gap":"10px","align-items":"center","justify-content":"flex-start"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1310px","top":"-270px","display":"flex","column-gap":"10px","align-items":"center","justify-content":"flex-start"}}}, 
 },
},
tComponentx0x11x6x0: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"absolute","left":"0","top":"0","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"absolute","left":"0","top":"0","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x11x6x1: {
defaultStyle: {
            default: {"width":"auto","height":"31px","color":"rgba(255, 255, 255, 0.9)","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","lineHeight":"31px","marginLeft":"38px","z-index":0},
            
            },
 default: { 
 
label:"断面评价结果",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"31px","color":"rgba(255, 255, 255, 0.9)","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","lineHeight":"31px","marginLeft":"38px","z-index":0}}}, 
 },
},
tTextx0x11x6x2: {
defaultStyle: {
            default: {"width":"16px","height":"16px","color":"var(--t-white)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","cursor":"pointer","textAlign":"center","paddingBottom":"2px","fontSize":"10px","fontWeight":"700","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomLeftRadius":"50%","borderBottomRightRadius":"50%","paddingTop":"2px","position":"unset","left":"183px","top":"609px","z-index":0},
            
            },
 default: { 
 
label:"?",
editable:false,
cStyle:{"wrapper":{"default":{"width":"16px","height":"16px","color":"var(--t-white)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","cursor":"pointer","textAlign":"center","paddingBottom":"2px","fontSize":"10px","fontWeight":"700","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomLeftRadius":"50%","borderBottomRightRadius":"50%","paddingTop":"2px","position":"unset","left":"183px","top":"609px","z-index":0},"hover":{"cursor":"pointer"}}}, 
 },
},
tTextx0x11x6x3: {
defaultStyle: {
            default: {"width":"161px","height":"auto","color":"var(--t-white)","position":"absolute","left":"58px","top":"31px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"var(--business-text-size-12)","paddingTop":"10px","paddingLeft":"34px","backgroundColor":"var(--business-btn-default)","animationName":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","min-height":"32px","z-index":2},
            
            },
 default: { 
 
label:"表示有对应自动断面",
editable:false,
cStyle:{"wrapper":{"default":{"width":"161px","height":"auto","color":"var(--t-white)","position":"absolute","left":"58px","top":"31px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"var(--business-text-size-12)","paddingTop":"10px","paddingLeft":"34px","backgroundColor":"var(--business-btn-default)","animationName":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","min-height":"32px","z-index":2}}}, 
 },
},
tTextx0x11x6x4: {
defaultStyle: {
            default: {"width":"17px","height":"17px","color":"var(--t-white)","position":"absolute","left":"68px","top":"42px","textAlign":"center","fontSize":"var(--business-text-size-12)","paddingTop":"2px","paddingBottom":"2px","backgroundColor":"var(--business-theme)","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","z-index":2},
            
            },
 default: { 
 
label:"自",
editable:false,
cStyle:{"wrapper":{"default":{"width":"17px","height":"17px","color":"var(--t-white)","position":"absolute","left":"68px","top":"42px","textAlign":"center","fontSize":"var(--business-text-size-12)","paddingTop":"2px","paddingBottom":"2px","backgroundColor":"var(--business-theme)","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","z-index":2}}}, 
 },
},
tColx0x11x7: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1300px","top":"-280px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1300px","top":"-280px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tCheckboxx0x11x7x0: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justifyContent":"center","width":"100%","height":"auto","animationName":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"0px solid rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"6px","min-height":"34px","paddingTop":"6px","paddingRight":"6px","paddingBottom":"6px"},
            
            },
 default: { 
 
data:[{"label":"Ⅰ类","value":"1","disabled":false},{"label":"Ⅱ类","value":"2","disabled":false},{"label":"Ⅲ类","value":"3","disabled":false},{"label":"Ⅳ类","value":"4","disabled":false},{"label":"Ⅴ类","value":"5","disabled":false},{"label":"劣Ⅴ类","value":"6","disabled":false},{"label":"--","value":"0","disabled":false}],
active:["1","2","3","4","5","6","0"],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justifyContent":"center","width":"100%","height":"auto","animationName":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"0px solid rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"6px","min-height":"34px","paddingTop":"6px","paddingRight":"6px","paddingBottom":"6px"}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"var(--business-white)","paddingLeft":"2px","fontSize":"var(--business-text-size-14)"}},"itemWrapper":{"default":{"marginRight":"12px","height":"auto","line-height":"normal"}}}, 
 },
},
tColx0x11x8: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingBottom":"10px","animationName":"","left":"1250px","top":"-330px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingBottom":"10px","animationName":"","left":"1250px","top":"-330px"}}}, 
 },
},
tRowx0x11x8x0: {
defaultStyle: {
            default: {"width":"100%","min-width":"auto","height":"auto","column-gap":"10px","justifyContent":"space-between","alignItems":"center","gap":"6px","display":"flex","paddingTop":"4px","animationName":"","left":"872px","top":"-259px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","min-width":"auto","height":"auto","column-gap":"10px","justifyContent":"space-between","alignItems":"center","gap":"6px","display":"flex","paddingTop":"4px","animationName":"","left":"872px","top":"-259px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x11x8x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"1250px","top":"-330px"},
            
            },
 default: { 
 
span:20,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"1250px","top":"-330px"}}}, 
 },
},
tSearchx0x11x8x0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入关键字",
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
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tColx0x11x8x0x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","flexDirection":"row","gap":"10px","animationName":"","left":"1260px","top":"-320px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","flexDirection":"row","gap":"10px","animationName":"","left":"1260px","top":"-320px"}}}, 
 },
},
tButtonx0x11x8x0x1x0: {
defaultStyle: {
            default: {"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","color":"var(--t-white)"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","color":"var(--t-white)"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tColx0x11x9: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1310px","top":"-270px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1310px","top":"-270px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tTablex0x11x9x0: {
defaultStyle: {
            default: {"width":"100%","height":"600px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"580",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""},"cellStyle":{"cursor":"pointer"}},"width":"44PX","type":"state","stateKey":"iconStatus"},{"label":"断面名称","key":"POINT_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"var(--business-text-size-14)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%","maxWidth":"78%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","position":"absolute","top":"10px","right":"0","backgroundImage":""},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"var(--business-text-size-14)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","position":"absolute","top":"10px","right":"0","backgroundImage":""},"cellStyle":{"background":""}}],"width":"100PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"imageStyle":{"backgroundImage":""},"cellStyle":{"cursor":"pointer"}},"type":"state","stateKey":"nameTextStatus","infoKey":"qwe","infoIconVisibleKey":"showAutoIcon","infoStyle":{"imageStyle":{"position":"relative","bottom":"5px","width":"21px","height":"17px","backgroundImage":"var(--business-section-auto)"}},"infoPosition":"right"},{"label":"水体名称","key":"WATER_NAME","align":"center","operationList":[],"stateList":[],"width":"100PX","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"cellStyle":{"cursor":"pointer"}}},{"label":"水质目标","key":"WATERQUALITYLEVELTARGETNAME","stateKey":"WATERQUALITYLEVELTARGETNAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"-","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"","borderRadius":"2PX","borderWidth":"0PX"}}],"width":"83PX","style":{"fontStyle":{"width":"40PX","height":"PX"},"cellStyle":{"cursor":"pointer"}}},{"label":"水质现状","key":"WATERQUALITYLEVELNAME","stateKey":"WATERQUALITYLEVELNAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"Ⅱ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"Ⅲ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"Ⅳ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"Ⅴ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"劣Ⅴ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"-","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"","borderWidth":"0PX"}}],"width":"83PX","style":{"fontStyle":{"fontSize":"var(--business-text-size-12)","width":"PX","height":"PX","borderRadius":"PX","background":""},"cellStyle":{"cursor":"pointer"}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"600px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
});
const initPageData = () => {
// 初始化页面数据
// 获取主题字号
const initChartFontSize = () => {
  state.treemapLabelFontSize = parseInt(getCssVariable('--business-text-size-16')) || 16
  state.chartTreemapOptionTooltip = {
    textStyle: {
      fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
    }
  }
}
initChartFontSize()


// 地表水全局变量-类型（全部/国控/省控...）
state.selectOneStr = state.surfaceWaterParamsState?.type || "";
state.selectOne = state.selectOneStr ? state.selectOneStr.split(",") : []
if (state.surfaceWaterParamsState.ASSESSTYPE) {
  state.tabsActiveValue = state.surfaceWaterParamsState.ASSESSTYPE
} else {
  state.surfaceWaterParamsState.ASSESSTYPE = state.tabsActiveValue
}
if (!state.surfaceWaterParamsState?.TIME) {
  // 获取最新时间
  apiRegistry.getLastTime.request();
} else {
  state.timeValue = state.surfaceWaterParamsState?.TIME;
  // 调接口-重新获取所有数据
  getData();
}

// 接收消息
rootData.rootOn('rootSocket:change', (data) => {
  if (data.type === 'changeFontSize') {
    initChartFontSize()
    // 重新渲染图表
    const currentValue = state.bottomTabsValue
    state.bottomTabsValue = 'any'
    setTimeout(() => {
      state.bottomTabsValue = currentValue
    })
  }
});
};
const changeTopTabs = (data) => {
// 如果第二个下拉框选中all 那就把入参 selectTwo置为空
state.selectTwo = state.selectTwoValue === 'all' ? '' : state.selectTwoValue;
state.surfaceWaterParamsState.ASSESSTYPE = state.tabsActiveValue
// 整体评价结果-卡片
apiRegistry.getPJResultCard.request();
// 断面评价结果-列表
apiRegistry.getSZPLList.request();

rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  // 给地图发消息
  data: [
    {
      "code": "id",
      "shareCode": "ASSESSTYPE",
      "defaultValue": "",
      "runtimeValue": data.value,
    },
    {
      "code": "text",
      "shareCode": "",
      "defaultValue": "",
      "runtimeValue": data.label
    },
    {
      "code": "defaultTab",
      "name": "",
      "defaultValue": "pointWq",
      "shareCode": "defaultTab",
      "runtimeValue": "pointWq"
    }
  ]
});
};
const changeOneSelect = () => {
// 地表水全局变量-类型（全部/国控/省控...）
state.selectOne = state.selectOneStr ? state.selectOneStr.split(",") : []
state.surfaceWaterParamsState.type = state.selectOneStr;
// 调接口-重新获取所有数据
getData();
// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "value",
      "shareCode": "CODE_CONTROLLEVEL",
      "defaultValue": "",
      "runtimeValue": state.selectOneStr
    },
    {
      "code": "value",
      "shareCode": "water_controllevel",
      "defaultValue": "",
      "runtimeValue": state.selectOneStr
    },
    {
      "code": "defaultTab",
      "name": "",
      "defaultValue": "pointWq",
      "shareCode": "defaultTab",
      "runtimeValue": "pointWq"
    }
  ]
});
};
const changeTwoSelect = () => {
// 调接口-重新获取所有数据
getData();

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  // 消息内容
  data: [
    {
      "code": "value",
      "shareCode": "IS_CONNECT_SECTION",
      "defaultValue": "",
      "runtimeValue": state.selectTwo
    },
    {
      "code": "content",
      "shareCode": "",
      "defaultValue": "",
      "runtimeValue": state.selectTwo ? '跨界断面' : '所有断面'
    },
    {
      "code": "defaultTab",
      "name": "",
      "defaultValue": "pointWq",
      "shareCode": "defaultTab",
      "runtimeValue": "pointWq"
    }
  ]
});
};
const changeTime = () => {
// 修改地表水变量里的时间
state.surfaceWaterParamsState.TIME = state.timeValue;
// 调接口-重新获取所有数据
getData();

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  "data": [
    {
      "code": "value",
      "shareCode": "MONITORTIME",
      "defaultValue": "",
      "runtimeValue": state.timeValue,
    },
    {
      "code": "defaultTab",
      "name": "",
      "defaultValue": "pointWq",
      "shareCode": "defaultTab",
      "runtimeValue": "pointWq"
    }
  ]
});

};
const getInputValue = (data) => {
if (typeof (data) === 'string') {
  state.pointName = data;
}
};
const getDMPJResultList = () => {

// 如果第二个下拉框选中all 那就把入参 selectTwo置为空
state.selectTwo = state.selectTwoValue === 'all' ? '' : state.selectTwoValue;
// 断面评价结果-列表
apiRegistry.getSZPLList.request();

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "value",
      "shareCode": "POINT_NAME",
      "defaultValue": "",
      "runtimeValue": state.pointName
    }
  ]
});

};
const changeCheckBox = (data) => {
state.chexkBoxActiveStr = data?.length ? data.map((item) => item).join(',') : '999';
// 如果第二个下拉框选中all 那就把入参 selectTwo置为空
state.selectTwo = state.selectTwoValue === 'all' ? '' : state.selectTwoValue;
// 断面评价结果-列表
apiRegistry.getSZPLList.request();

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  // 消息内容
  data: [
    {
      "code": "CODE_WATERQUALITYLEVELS",
      "shareCode": "CODE_WATERQUALITYLEVELS",
      "defaultValue": "",
      "runtimeValue": state.chexkBoxActiveStr,
    }
  ]
});

};
const gotoMapLocation = (row,column) => {
// 断面评价结果-点击定位给地图发消息
if (["断面名称", "定位", '水体名称', '水质目标', '水质现状'].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    data: [ // 消息内容
      {
        "code": "point_code",
        "shareCode": "POINT_CODE",
        "defaultValue": "",
        "runtimeValue": row.POINT_CODE
      }
    ]
  });
}


};
const watchGlobalRegionCode = () => {
// 监听全局变量 行政区数据
watch(() => [global.regionaQuery.regionCode, global.regionaQuery.areaCode,global.regionaQuery.regionType], () => {
  // 调接口-重新获取所有数据
  getData();
});
};
const changeWaringCard = (data) => {
// 设置弹框使用的参数
global.businessDialog.dialogParmas = {
  // 全部/国控/省控/市控/其他
  CODE_CONTROLLEVEL: state.selectOneStr,
  // 所有断面/跨界断面
  IS_CONNECT_SECTION: state.selectTwo,
  // 日期
  MONITORTIME: state.timeValue,
  // 实时监控-日数据：DATA_FREQUENCY  = 2
  // 实时监控-小时数据：DATA_FREQUENCY  =  1
  // 地表水：DATA_FREQUENCY = ‘’ // 数据类型数据频率（1：小时，2：日，3：周，4：月，5：季，6：半年，7：年）
  DATA_FREQUENCY: '4', // 月份
  //   实时监控 MONITORTYPE = 0
  // 地表水 MONITORTYPE: 1
  MONITORTYPE: '1',
  // surfaceWater-地表水,drinkingWater-饮用水
  CODE_WQDATASOURCETYPE: 'surfaceWater',
  ALARM_TYPE_CODE: data.alarmTypeCode, // 报警类型(waterLevelOver  水质类别超标 、waterLevelDecline 环比下降报警 、criticalover 临界超标报警、polluteValueMutation 污染物浓度突变、standardGap  达标差距预警、yoyover 同比下降报警、continueBad  持续恶化、exceptionValueIncrease 异常值增多)
  ALARM_TYPE_NAME: data.title, // 报警类型名称
};
// 显示弹窗(5个预警弹框)
global.businessDialog.dialogName = data.componentName;
};
const getProvider = () => {
const rootData = inject('surfaceWaterState');
const rootData2 = inject('surfaceWaterParamsState')

if (rootData) {
  state.surfaceWaterState = rootData;
}
if (rootData2) {
  state.surfaceWaterParamsState = rootData2;
}
};
const getData = () => {
if (state.timeValue && global.regionaQuery.regionType === 'region') {
  // 如果第二个下拉框选中all 那就把入参 selectTwo置为空
  state.selectTwo = state.selectTwoValue === 'all' ? '' : '1';
  // 整体评价结果-断面总数
  apiRegistry.getPJTotal.request();
  // 整体评价结果-卡片
  apiRegistry.getPJResultCard.request();
  // 预警报警-卡片
  apiRegistry.getYJBJCard.request();
  // 断面评价结果-列表
  apiRegistry.getSZPLList.request();
  // 预警报警-问题区域分布-行政区
  apiRegistry.getYJBJQuestion.request();
  // 预警报警-报警污染物分布
  apiRegistry.getYjbjWrw.request();
} else if (state.timeValue && global.regionaQuery.regionType === 'wsystem') {
  // 如果第二个下拉框选中all 那就把入参 selectTwo置为空
  state.selectTwo = state.selectTwoValue === 'all' ? '' : '1';
  // 整体评价结果-断面总数
  apiRegistry.getPJTotal.request();
  // 整体评价结果-卡片
  apiRegistry.getPJResultCard.request();
  // 预警报警-卡片
  apiRegistry.getYJBJCard.request();
  // 断面评价结果-列表
  apiRegistry.getSZPLList.request();
  // 预警报警-问题区域分布-流域
  apiRegistry.getYJBJQuestionLY.request();
  // 预警报警-报警污染物分布
  apiRegistry.getYjbjWrw.request();
}
};
const initChartTreemapOption = () => {
state.chartTreemapOptionTooltip = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  borderColor: 'rgba(255, 255, 255, 0.5)',
  textStyle: {
    color: '#fff'
  },
  formatter: function (params) {
    // 只显示有名字的节点
    if (params.name) {
      return `${params.name}<span style="margin-left: 10px;font-weight: 900;">${params.value}</span>`;
    }
  }
}
};
const setNoDataIcon = () => {
// 设置暂无数据图标
state.noDataImg = getCssVariable('--business-no-data-img');
};
const openPjjgfx = () => {
rootData.rootEmit(
  'rootData:change',
  { 
    key:'businessDialog',
    value: {
      dialogParmas: {
        // 区域
        regionCode: global.regionaQuery.regionCode,
        regionName: global.regionaQuery.regionName,
        // 考核时间
        time: state.timeValue || '',
      },
    },
  },
);
rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "createDialog", // 消息名称
    data: { "params": { "title": "评价结果分析", "maxHeight": "860px", "maxWidth": "995px", "minHeight": "860px", "minWidth": "995px", "contentComName": 'shjPjjgfxComponent',hiddenScaleButton:true } }, // 发送的数据
  });
};
const initSetSelect = () => {
// const componentDom = document.querySelector('#t-l-c-waterSurfaceEvaluate')
// const styles = document.createElement('style')
// styles.innerHTML = `
// .t-select .el-select .select-trigger .el-select__tags{
//   max-width:88px !important
// }
// `
// componentDom.append(styles)
};
const onclick1738907413310 = () => {
// 执行自定义方法
openPjjgfx();
};
const onchange1733305548807 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.selectTwoValue = value;
// 执行自定义方法
changeTwoSelect();
};
const onchange1740100712865 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.selectOneStr = value;
// 执行自定义方法
changeOneSelect();
};
const ondateChange1733305582571 = (data) => {
// 设置变量值
state.timeValue = data;
// 执行自定义方法
changeTime();
};
const ontabClick1733305602843 = (data) => {
// 设置变量值
state.tabsActiveValue = data.value;
// 执行自定义方法
changeTopTabs(data);
};
const onmouseover1733298920782 = () => {
// 设置变量值
state.isShowHelpOne = true;
};
const onmouseout1733298930144 = () => {
// 设置变量值
state.isShowHelpOne = false;
};
const oncardClick1734057935552 = (item) => {
// 执行自定义方法
changeWaringCard(item);
};
const ontabClick1734511453780 = (data) => {
// 设置变量值
state.bottomTabsValue = data.value;
};
const onmouseover1733300566113_0_0 = () => {
// 设置变量值
state.isShowHelpTwo = true;
};
const onmouseout1733300566113_0_1 = () => {
// 设置变量值
state.isShowHelpTwo = false;
};
const onchange1733294293609 = (data) => {
// 设置变量值
state.chexkBoxActive = data;
// 执行自定义方法
changeCheckBox(data);
};
const oncellClick1733452949625 = (row,column,cell,event) => {
// 执行自定义方法
gotoMapLocation(row,column);
};
const onclick1734484155618 = () => {
// 执行自定义方法
getDMPJResultList(state.pointName);
};
const oninput1734340142696 = (value) => {
// 设置变量值
state.pointName = value;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getPJResultCard: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"AREA_CODE":"","MONITORTYPE":"1","ASSESSTYPE":"state.tabsActiveValue","IS_CONNECT_SECTION":"state.selectTwo","WSYSTEM_CODE":"global.regionaQuery.areaCode","CODE_CONTROLLEVEL":"state.selectOneStr","CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":"state.timeValue","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"5b68a402ee2000580080829b4fc68a02"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","MONITORTYPE":"1","ASSESSTYPE":state.tabsActiveValue,"IS_CONNECT_SECTION":state.selectTwo,"WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_CONTROLLEVEL":state.selectOneStr,"CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5b68a402ee2000580080829b4fc68a02"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"AREA_CODE":"","MONITORTYPE":"1","ASSESSTYPE":state.tabsActiveValue,"IS_CONNECT_SECTION":state.selectTwo,"WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_CONTROLLEVEL":state.selectOneStr,"CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5b68a402ee2000580080829b4fc68a02"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPJResultCard'] = res.data;
                
     // 断面总数 (另外一个接口)
// 优良断面 GOODPOINTCOUNT
// 劣Ⅴ类断面  BADPOINTCOUNT
// 达标断面占比 （*/*） （STANDARDPOINTCOUNT / ACTUALPOINTCOUNT）
// 达标率（**%） （STANDARDRATE）
if (res?.data?.head?.statusCode === '200') {
  state.overallRatingCard[1].num = res?.data?.data?.GOODPOINTCOUNT || 0;
  state.overallRatingCard[2].num = res?.data?.data?.BADPOINTCOUNT || 0;
  state.overallRatingBottom.one = res?.data?.data?.STANDARDPOINTCOUNT || 0;
  state.overallRatingBottom.two = res?.data?.data?.ACTUALPOINTCOUNT || 0;
  state.overallRatingBottom.three = res?.data?.data?.STANDARDRATE || 0;
} else {
  state.overallRatingCard[1].num = 0;
  state.overallRatingCard[2].num = 0;
  state.overallRatingBottom.one = 0;
  state.overallRatingBottom.two = 0;
  state.overallRatingBottom.three = 0;
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
 getYJBJCard: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DATA_FREQUENCY":"4","AREA_CODE":"","CODE_WQDATASOURCETYPE":"","WSYSTEM_CODE":"global.regionaQuery.areaCode","CODE_CONTROLLEVEL":"state.selectOneStr","IS_CONNECT_SECTION":"state.selectTwo","MONITORTYPE":"1","REGION_CODE":"global.regionaQuery.regionCode","MONITORTIME":"state.timeValue","interfaceId":"1c36793e4d6646585933dbb2b88cea57"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATA_FREQUENCY":"4","AREA_CODE":"","CODE_WQDATASOURCETYPE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_CONTROLLEVEL":state.selectOneStr,"IS_CONNECT_SECTION":state.selectTwo,"MONITORTYPE":"1","REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.timeValue,"interfaceId":"1c36793e4d6646585933dbb2b88cea57"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DATA_FREQUENCY":"4","AREA_CODE":"","CODE_WQDATASOURCETYPE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_CONTROLLEVEL":state.selectOneStr,"IS_CONNECT_SECTION":state.selectTwo,"MONITORTYPE":"1","REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.timeValue,"interfaceId":"1c36793e4d6646585933dbb2b88cea57"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getYJBJCard'] = res.data;
                
     if (res?.data?.head?.statusCode === '200') {
  // 水质超标报警
  state.earlyWarningCard[0].num = res?.data?.data?.WATERLEVELOVER || 0;
  // 同比下降报警
  state.earlyWarningCard[1].num =  res?.data?.data?.YOYOVER || 0;
  // 达标差距报警
  state.earlyWarningCard[2].num =  res?.data?.data?.STANDARDGAP || 0;
  //  // 持续恶化报警
  // state.earlyWarningCard[3].num =  0;
  //     // 异常值增多报警
  // state.earlyWarningCard[4].num =  0;
  // // 临界超标报警
  // state.earlyWarningCard[5].num = res?.data?.data?.CRITICALOVER || 0;
  // // 达标差距预警
  // state.earlyWarningCard[6].num = res?.data?.data?.STANDARDGAP || 0;
  //   // 环比下降报警
  // state.earlyWarningCard[7].num = res?.data?.data?.WATERLEVELDECLINE || 0;
} else {
  // 水质超标报警
  state.earlyWarningCard[0].num =  0;
  // 监测异常报警-新
  state.earlyWarningCard[1].num =  0;
  // 浓度突变报警
  state.earlyWarningCard[2].num =  0;
  //   // 持续恶化报警
  // state.earlyWarningCard[3].num =  0;
  //     // 异常值增多报警
  // state.earlyWarningCard[4].num =  0;
  // // 临界超标报警
  // state.earlyWarningCard[5].num = 0;
  // // 达标差距预警
  // state.earlyWarningCard[6].num = 0;
  //   // 环比下降报警
  // state.earlyWarningCard[7].num =  0;
}

// 绿色图标 /lego-generated-apps/lego_file/res/2024-12-04/1cb560e59192482985bba7eeba124949.svg 
// 处理图标 报警数大于1就显示报警图标

console.log('报警预警卡片 state.earlyWarningCard ---', state.earlyWarningCard);

for (let i = 0; i < state.earlyWarningCard.length; i++) {
  state.earlyWarningCard[i].icon = state.earlyWarningCard[i].num && Number(state.earlyWarningCard[i].num) !== 0 ? '/lego-generated-apps/lego_file/res/2024-12-04/6d69bdc653634b72b98e082ec9201bf8.svg'
    : '/lego-generated-apps/lego_file/res/2024-12-04/1cb560e59192482985bba7eeba124949.svg'
}


// 设置card图标
// state.earlyWarningCard.forEach((item) => {
//   if (!(Number(item.num))) {
//     item.icon = getCssVariable('--business-alarm-default-icon');
//   } else {
//     item.icon = '/lego-generated-apps/lego_file/res/2024-12-04/6d69bdc653634b72b98e082ec9201bf8.svg';
//   }
// })
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getLastTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLastTime'] = res.data;
                
     state.timeValue = '';
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  // 当前选中最新时间
  state.timeValue = data.data.MONITORTIME || '';

  if (state.timeValue) {
    // 地表水里的变量
    state.surfaceWaterParamsState.TIME = data.data.MONITORTIME;
    // state.surfaceWaterState.time = state.timeValue;
  }

  // 调接口
  getData();
} else {
  state.timeValue = '';
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
 getSZPLList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"IS_CONNECT_SECTION":"state.selectTwo","WSYSTEM_CODE":"global.regionaQuery.areaCode","AREA_CODE":"","POINT_NAME":"state.pointName","ASSESSTYPE":"state.tabsActiveValue","CODE_WATERQUALITYLEVELS":"state.chexkBoxActiveStr","CODE_CONTROLLEVEL":"state.selectOneStr","CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":"state.timeValue","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"5181f9e42a221b29bebf302be4de358c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"IS_CONNECT_SECTION":state.selectTwo,"WSYSTEM_CODE":global.regionaQuery.areaCode,"AREA_CODE":"","POINT_NAME":state.pointName,"ASSESSTYPE":state.tabsActiveValue,"CODE_WATERQUALITYLEVELS":state.chexkBoxActiveStr,"CODE_CONTROLLEVEL":state.selectOneStr,"CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5181f9e42a221b29bebf302be4de358c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"IS_CONNECT_SECTION":state.selectTwo,"WSYSTEM_CODE":global.regionaQuery.areaCode,"AREA_CODE":"","POINT_NAME":state.pointName,"ASSESSTYPE":state.tabsActiveValue,"CODE_WATERQUALITYLEVELS":state.chexkBoxActiveStr,"CODE_CONTROLLEVEL":state.selectOneStr,"CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5181f9e42a221b29bebf302be4de358c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getSZPLList'] = res.data;
                
     // console.log(res, ' res-断面评价结果-列表')
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.pjResultList = res?.data?.data || [];
} else {
  state.pjResultList = [];
}

if (state.pjResultList?.length) {
  state.pjResultList = state.pjResultList.map((item) => ({
    ...item,
    // 断面名称列-是否显示图标
    showAutoIcon: item?.AUTO_POINTNAME ? true : false,
    nameTextStatus: item?.AUTO_POINTNAME ? '1' : '0', // 固定不变，为了实现状态列
    // 断面名称
    POINT_NAME: item?.POINT_NAME || '-',
    // 水体名称
    WATER_NAME: item?.WATER_NAME || '-',
    // 水质目标
    WATERQUALITYLEVELTARGETNAME: item?.WATERQUALITYLEVELTARGETNAME || '-',
    // 水质现状
    WATERQUALITYLEVELNAME: item?.WATERQUALITYLEVELNAME || '-',
    // 定位
    iconStatus: `${!!(item.LONGITUDE && item.LATITUDE)}`
  }))
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
 getYJBJQuestionLY: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"WSYSTEM_CODE":"global.regionaQuery.areaCode","CODE WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","MONITORTYPE":"1","CODE_CONTROLLEVEL":"state.selectOneStr","IS_CONNECT_SECTION":"state.selectTwo","REGION_CODE":"global.regionaQuery.regionCode","MONITORTIME":"state.timeValue","interfaceId":"5ad1eb7f7bb548cdf95ff43b39300806"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","MONITORTYPE":"1","CODE_CONTROLLEVEL":state.selectOneStr,"IS_CONNECT_SECTION":state.selectTwo,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.timeValue,"interfaceId":"5ad1eb7f7bb548cdf95ff43b39300806"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","MONITORTYPE":"1","CODE_CONTROLLEVEL":state.selectOneStr,"IS_CONNECT_SECTION":state.selectTwo,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.timeValue,"interfaceId":"5ad1eb7f7bb548cdf95ff43b39300806"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getYJBJQuestionLY'] = res.data;
                
     // console.log(res, ' res-预警报警-问题区域分布')
state.problemDistributionCardList = [];
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data?.length) {
  state.problemDistributionCardList = data?.data;
  state.problemDistributionCardList = state.problemDistributionCardList.map((item) => ({
    name: item.WATER_NAME,
    value: item.ALARMCOUNT
  }))
} else {
  state.problemDistributionCardList = [];
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
 getYJBJQuestion: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DATA_FREQUENCY":"4","WSYSTEM_CODE":"global.regionaQuery.areaCode","CODE WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","MONITORTYPE":"1","CODE_CONTROLLEVEL":"state.selectOneStr","IS_CONNECT_SECTION":"state.selectTwo","REGION_CODE":"global.regionaQuery.regionCode","MONITORTIME":"state.timeValue","interfaceId":"6591a49590458cbdeabdf6234961a21c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATA_FREQUENCY":"4","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","MONITORTYPE":"1","CODE_CONTROLLEVEL":state.selectOneStr,"IS_CONNECT_SECTION":state.selectTwo,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.timeValue,"interfaceId":"6591a49590458cbdeabdf6234961a21c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DATA_FREQUENCY":"4","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","MONITORTYPE":"1","CODE_CONTROLLEVEL":state.selectOneStr,"IS_CONNECT_SECTION":state.selectTwo,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.timeValue,"interfaceId":"6591a49590458cbdeabdf6234961a21c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getYJBJQuestion'] = res.data;
                
     // console.log(res, ' res-预警报警-问题区域分布')
state.problemDistributionCardList = [];

const { data } = res;
if (data?.head?.statusCode === '200' && data?.data?.length) {
  state.problemDistributionCardList = data?.data;
  state.problemDistributionCardList = state.problemDistributionCardList.map((item) => ({
    name: item.REGION_NAME,
    value: item.ALARMCOUNT
  }))
} else {
  state.problemDistributionCardList = [];
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
 getYjbjWrw: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"CODE WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","MONITORTYPE":"1","WSYSTEM_CODE":"global.regionaQuery.areaCode","CODE_CONTROLLEVEL":"state.selectOneStr","IS_CONNECT_SECTION":"state.selectTwo","REGION_CODE":"global.regionaQuery.regionCode","MONITORTIME":"state.timeValue","interfaceId":"22ff0cb154ffff7a0a001806ee50990d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"CODE WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","MONITORTYPE":"1","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_CONTROLLEVEL":state.selectOneStr,"IS_CONNECT_SECTION":state.selectTwo,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.timeValue,"interfaceId":"22ff0cb154ffff7a0a001806ee50990d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"CODE WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","MONITORTYPE":"1","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_CONTROLLEVEL":state.selectOneStr,"IS_CONNECT_SECTION":state.selectTwo,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.timeValue,"interfaceId":"22ff0cb154ffff7a0a001806ee50990d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getYjbjWrw'] = res.data;
                
     
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data?.length) {
  state.pollutantDistributionCardList = data?.data;
  state.pollutantDistributionCardList = state.pollutantDistributionCardList.map((item) => ({
    name: item.POLLUTENAME,
    value: item.ALARMCOUNT
  }))
} else {
  state.pollutantDistributionCardList = [];
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
 getPJTotal: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"AREA_CODE":"","IS_CONNECT_SECTION":"state.selectTwo","WSYSTEM_CODE":"global.regionaQuery.areaCode","MONITORTYPE":"1","CODE_CONTROLLEVEL":"state.selectOneStr","CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":"state.timeValue","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"ff529dcb524c1d5a69757cd08f6231ba"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","IS_CONNECT_SECTION":state.selectTwo,"WSYSTEM_CODE":global.regionaQuery.areaCode,"MONITORTYPE":"1","CODE_CONTROLLEVEL":state.selectOneStr,"CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"ff529dcb524c1d5a69757cd08f6231ba"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"AREA_CODE":"","IS_CONNECT_SECTION":state.selectTwo,"WSYSTEM_CODE":global.regionaQuery.areaCode,"MONITORTYPE":"1","CODE_CONTROLLEVEL":state.selectOneStr,"CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"ff529dcb524c1d5a69757cd08f6231ba"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPJTotal'] = res.data;
                
     // 断面总数 
if (res?.data?.head?.statusCode === '200') {
  state.overallRatingCard[0].num = res?.data?.data?.POINTCOUNT || 0;
} else {
  state.overallRatingCard[0].num = 0;
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
 getYJBJCardCopy: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DATA_FREQUENCY":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"","WSYSTEM_CODE":"global.regionaQuery.areaCode","CODE_CONTROLLEVEL":"state.selectOneStr","IS_CONNECT_SECTION":"state.selectTwo","MONITORTYPE":"1","REGION_CODE":"global.regionaQuery.regionCode","MONITORTIME":"state.timeValue","interfaceId":"1c36793e4d6646585933dbb2b88cea57"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATA_FREQUENCY":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_CONTROLLEVEL":state.selectOneStr,"IS_CONNECT_SECTION":state.selectTwo,"MONITORTYPE":"1","REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.timeValue,"interfaceId":"1c36793e4d6646585933dbb2b88cea57"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DATA_FREQUENCY":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_CONTROLLEVEL":state.selectOneStr,"IS_CONNECT_SECTION":state.selectTwo,"MONITORTYPE":"1","REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.timeValue,"interfaceId":"1c36793e4d6646585933dbb2b88cea57"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getYJBJCardCopy'] = res.data;
                
     if (res?.data?.head?.statusCode === '200') {
  // 水质超标报警
  state.earlyWarningCard[0].num = res?.data?.data?.WATERLEVELOVER || 0;
  // 监测异常报警-新
  state.earlyWarningCard[1].num =  0;
  // 浓度突变报警
  state.earlyWarningCard[2].num =  0;
    // 持续恶化报警
  state.earlyWarningCard[3].num =  0;
      // 异常值增多报警
  state.earlyWarningCard[4].num =  0;
  // 临界超标报警
  state.earlyWarningCard[5].num = res?.data?.data?.CRITICALOVER || 0;
  // 达标差距预警
  state.earlyWarningCard[6].num = res?.data?.data?.STANDARDGAP || 0;
    // 环比下降报警
  state.earlyWarningCard[7].num = res?.data?.data?.WATERLEVELDECLINE || 0;
} else {
  // 水质超标报警
  state.earlyWarningCard[0].num =  0;
  // 监测异常报警-新
  state.earlyWarningCard[1].num =  0;
  // 浓度突变报警
  state.earlyWarningCard[2].num =  0;
    // 持续恶化报警
  state.earlyWarningCard[3].num =  0;
      // 异常值增多报警
  state.earlyWarningCard[4].num =  0;
  // 临界超标报警
  state.earlyWarningCard[5].num = 0;
  // 达标差距预警
  state.earlyWarningCard[6].num = 0;
    // 环比下降报警
  state.earlyWarningCard[7].num =  0;
}

// 处理图标 报警数大于1就显示报警图标
for (let i = 0; i < state.earlyWarningCard.length; i++) {
  state.earlyWarningCard[i].icon = state.earlyWarningCard[i].num && Number(state.earlyWarningCard[i].num) > 0 ? '/lego-generated-apps/lego_file/res/2024-12-04/6d69bdc653634b72b98e082ec9201bf8.svg'
    : '/lego-generated-apps/lego_file/res/2024-12-04/1cb560e59192482985bba7eeba124949.svg'
}


// 设置card图标
state.earlyWarningCard.forEach((item) => {
  if (!(Number(item.num))) {
    item.icon = getCssVariable('--business-alarm-default-icon');
  } else {
    item.icon = '/lego-generated-apps/lego_file/res/2024-12-04/6d69bdc653634b72b98e082ec9201bf8.svg';
  }
})
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
                            setPageScale('t-l-c-waterSurfaceEvaluate', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterSurfaceEvaluate', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initPageData();
// 执行自定义方法
watchGlobalRegionCode();
// 执行自定义方法
initSetSelect();
});
// 执行自定义方法
setNoDataIcon();
// 执行自定义方法
getProvider();
// 执行自定义方法
initChartTreemapOption();
onBeforeMount(() => {
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tSelectx0x3ComputedData = computed(() => _.merge({}, componentState.tSelectx0x3.default, componentState.tSelectx0x3?.[state.screenSize]));

 const tSelectx0x4ComputedData = computed(() => _.merge({}, componentState.tSelectx0x4.default, componentState.tSelectx0x4?.[state.screenSize]));

 const tDatePickerx0x5ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x5.default, componentState.tDatePickerx0x5?.[state.screenSize]));

 const tTabsBasex0x6ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x6.default, componentState.tTabsBasex0x6?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tRowx0x11ComputedData = computed(() => _.merge({}, componentState.tRowx0x11.default, componentState.tRowx0x11?.[state.screenSize]));

 const tColx0x11x0ComputedData = computed(() => _.merge({}, componentState.tColx0x11x0.default, componentState.tColx0x11x0?.[state.screenSize]));

 const tListCardx0x11x0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x11x0x0.default, componentState.tListCardx0x11x0x0?.[state.screenSize]));

 const tColx0x11x1ComputedData = computed(() => _.merge({}, componentState.tColx0x11x1.default, componentState.tColx0x11x1?.[state.screenSize]));

 const tRowx0x11x1x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x11x1x0.default, componentState.tRowx0x11x1x0?.[state.screenSize]));

 const tColx0x11x1x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x11x1x0x0.default, componentState.tColx0x11x1x0x0?.[state.screenSize]));

 const tRectx0x11x1x0x0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x11x1x0x0x0.default, componentState.tRectx0x11x1x0x0x0?.[state.screenSize]));

 const tTextCommonx0x11x1x0x0x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x11x1x0x0x1.default, componentState.tTextCommonx0x11x1x0x0x1?.[state.screenSize]));

 const tRowx0x11x1x0x0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x11x1x0x0x2.default, componentState.tRowx0x11x1x0x0x2?.[state.screenSize]));

 const tTextx0x11x1x0x0x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x1x0x0x2x0.default, componentState.tTextx0x11x1x0x0x2x0?.[state.screenSize]));

 const tTextx0x11x1x0x0x2x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x1x0x0x2x1.default, componentState.tTextx0x11x1x0x0x2x1?.[state.screenSize]));

 const tTextx0x11x1x0x0x2x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x1x0x0x2x2.default, componentState.tTextx0x11x1x0x0x2x2?.[state.screenSize]));

 const tColx0x11x1x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x11x1x0x1.default, componentState.tColx0x11x1x0x1?.[state.screenSize]));

 const tRectx0x11x1x0x1x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x11x1x0x1x0.default, componentState.tRectx0x11x1x0x1x0?.[state.screenSize]));

 const tTextCommonx0x11x1x0x1x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x11x1x0x1x1.default, componentState.tTextCommonx0x11x1x0x1x1?.[state.screenSize]));

 const tRowx0x11x1x0x1x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x11x1x0x1x2.default, componentState.tRowx0x11x1x0x1x2?.[state.screenSize]));

 const tTextx0x11x1x0x1x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x1x0x1x2x0.default, componentState.tTextx0x11x1x0x1x2x0?.[state.screenSize]));

 const tTextx0x11x1x0x1x2x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x1x0x1x2x1.default, componentState.tTextx0x11x1x0x1x2x1?.[state.screenSize]));

 const tColx0x11x2ComputedData = computed(() => _.merge({}, componentState.tColx0x11x2.default, componentState.tColx0x11x2?.[state.screenSize]));

 const tComponentx0x11x2x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x11x2x0.default, componentState.tComponentx0x11x2x0?.[state.screenSize]));

 const tTextx0x11x2x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x2x1.default, componentState.tTextx0x11x2x1?.[state.screenSize]));

 const tTextx0x11x2x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x2x2.default, componentState.tTextx0x11x2x2?.[state.screenSize]));

 const tTextx0x11x2x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x2x3.default, componentState.tTextx0x11x2x3?.[state.screenSize]));

 const tColx0x11x3ComputedData = computed(() => _.merge({}, componentState.tColx0x11x3.default, componentState.tColx0x11x3?.[state.screenSize]));

 const tListCardx0x11x3x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x11x3x0.default, componentState.tListCardx0x11x3x0?.[state.screenSize]));

 const tColx0x11x4ComputedData = computed(() => _.merge({}, componentState.tColx0x11x4.default, componentState.tColx0x11x4?.[state.screenSize]));

 const tTabsBasex0x11x4x0ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x11x4x0.default, componentState.tTabsBasex0x11x4x0?.[state.screenSize]));

 const tColx0x11x5ComputedData = computed(() => _.merge({}, componentState.tColx0x11x5.default, componentState.tColx0x11x5?.[state.screenSize]));

 const tChartDesignx0x11x5x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x11x5x0.default, componentState.tChartDesignx0x11x5x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tChartDesignx0x11x5x1ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x11x5x1.default, componentState.tChartDesignx0x11x5x1?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tColx0x11x6ComputedData = computed(() => _.merge({}, componentState.tColx0x11x6.default, componentState.tColx0x11x6?.[state.screenSize]));

 const tComponentx0x11x6x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x11x6x0.default, componentState.tComponentx0x11x6x0?.[state.screenSize]));

 const tTextx0x11x6x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x6x1.default, componentState.tTextx0x11x6x1?.[state.screenSize]));

 const tTextx0x11x6x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x6x2.default, componentState.tTextx0x11x6x2?.[state.screenSize]));

 const tTextx0x11x6x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x6x3.default, componentState.tTextx0x11x6x3?.[state.screenSize]));

 const tTextx0x11x6x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x6x4.default, componentState.tTextx0x11x6x4?.[state.screenSize]));

 const tColx0x11x7ComputedData = computed(() => _.merge({}, componentState.tColx0x11x7.default, componentState.tColx0x11x7?.[state.screenSize]));

 const tCheckboxx0x11x7x0ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x11x7x0.default, componentState.tCheckboxx0x11x7x0?.[state.screenSize]));

 const tColx0x11x8ComputedData = computed(() => _.merge({}, componentState.tColx0x11x8.default, componentState.tColx0x11x8?.[state.screenSize]));

 const tRowx0x11x8x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x11x8x0.default, componentState.tRowx0x11x8x0?.[state.screenSize]));

 const tColx0x11x8x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x11x8x0x0.default, componentState.tColx0x11x8x0x0?.[state.screenSize]));

 const tSearchx0x11x8x0x0x0ComputedData = computed(() => _.merge({}, componentState.tSearchx0x11x8x0x0x0.default, componentState.tSearchx0x11x8x0x0x0?.[state.screenSize]));

 const tColx0x11x8x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x11x8x0x1.default, componentState.tColx0x11x8x0x1?.[state.screenSize]));

 const tButtonx0x11x8x0x1x0ComputedData = computed(() => _.merge({}, componentState.tButtonx0x11x8x0x1x0.default, componentState.tButtonx0x11x8x0x1x0?.[state.screenSize]));

 const tColx0x11x9ComputedData = computed(() => _.merge({}, componentState.tColx0x11x9.default, componentState.tColx0x11x9?.[state.screenSize]));

 const tTablex0x11x9x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x11x9x0.default, componentState.tTablex0x11x9x0?.[state.screenSize]));

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
tRectx0x2ComputedData,
tSelectx0x3ComputedData,
tSelectx0x4ComputedData,
tDatePickerx0x5ComputedData,
tTabsBasex0x6ComputedData,
tTextx0x9ComputedData,
tRowx0x11ComputedData,
tColx0x11x0ComputedData,
tListCardx0x11x0x0ComputedData,
tColx0x11x1ComputedData,
tRowx0x11x1x0ComputedData,
tColx0x11x1x0x0ComputedData,
tRectx0x11x1x0x0x0ComputedData,
tTextCommonx0x11x1x0x0x1ComputedData,
tRowx0x11x1x0x0x2ComputedData,
tTextx0x11x1x0x0x2x0ComputedData,
tTextx0x11x1x0x0x2x1ComputedData,
tTextx0x11x1x0x0x2x2ComputedData,
tColx0x11x1x0x1ComputedData,
tRectx0x11x1x0x1x0ComputedData,
tTextCommonx0x11x1x0x1x1ComputedData,
tRowx0x11x1x0x1x2ComputedData,
tTextx0x11x1x0x1x2x0ComputedData,
tTextx0x11x1x0x1x2x1ComputedData,
tColx0x11x2ComputedData,
tComponentx0x11x2x0ComputedData,
tTextx0x11x2x1ComputedData,
tTextx0x11x2x2ComputedData,
tTextx0x11x2x3ComputedData,
tColx0x11x3ComputedData,
tListCardx0x11x3x0ComputedData,
tColx0x11x4ComputedData,
tTabsBasex0x11x4x0ComputedData,
tColx0x11x5ComputedData,
tChartDesignx0x11x5x0ComputedData,
tChartDesignx0x11x5x1ComputedData,
tColx0x11x6ComputedData,
tComponentx0x11x6x0ComputedData,
tTextx0x11x6x1ComputedData,
tTextx0x11x6x2ComputedData,
tTextx0x11x6x3ComputedData,
tTextx0x11x6x4ComputedData,
tColx0x11x7ComputedData,
tCheckboxx0x11x7x0ComputedData,
tColx0x11x8ComputedData,
tRowx0x11x8x0ComputedData,
tColx0x11x8x0x0ComputedData,
tSearchx0x11x8x0x0x0ComputedData,
tColx0x11x8x0x1ComputedData,
tButtonx0x11x8x0x1x0ComputedData,
tColx0x11x9ComputedData,
tTablex0x11x9x0ComputedData,
onclick1738907413310,
onchange1733305548807,
onchange1740100712865,
ondateChange1733305582571,
ontabClick1733305602843,
onmouseover1733298920782,
onmouseout1733298930144,
oncardClick1734057935552,
ontabClick1734511453780,
onmouseover1733300566113_0_0,
onmouseout1733300566113_0_1,
onchange1733294293609,
oninput1734340142696,
onclick1734484155618,
oncellClick1733452949625,
};
},
};