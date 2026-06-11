window.waterMonitoringDayComponent = {
template: 
`<div id="t-l-c-waterMonitoringDay" class="t-l-c-waterMonitoringDay" >` +
`<t-row id="t-row-9106.da2075bd1" class="waterMonitoringDay-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align">` +
`<t-col id="t-col-1a5b.c88634728" class="waterMonitoringDay-t-col-0-0-0"  :span="tColx0x0x0ComputedData.span" :offset="tColx0x0x0ComputedData.offset" :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull" :c-style="tColx0x0x0ComputedData.cStyle">` +
`<t-list-card id="t-list-card-3bdd.9dd88f3cc" class="waterMonitoringDay-t-list-card-0-0-0-0"  :data="replaceCssVariables(filterData(state.cardList, componentPropBindingMap?.['t-list-card-3bdd.9dd88f3cc']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x0x0x0ComputedData.spacingX" :col="tListCardx0x0x0x0ComputedData.col" :direction="tListCardx0x0x0x0ComputedData.direction" :exchange-order="tListCardx0x0x0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0x0x0ComputedData.unitBreak" :key-field="tListCardx0x0x0x0ComputedData.keyField" :active-key-field="tListCardx0x0x0x0ComputedData.activeKeyField" :active="tListCardx0x0x0x0ComputedData.active" :c-style="tListCardx0x0x0x0ComputedData.cStyle">` +
`</t-list-card>` +
`</t-col>` +
`<t-col id="t-col-13f5.a526c0e5c" class="waterMonitoringDay-t-col-0-0-1"  :span="tColx0x0x1ComputedData.span" :offset="tColx0x0x1ComputedData.offset" :push="tColx0x0x1ComputedData.push" :pull="tColx0x0x1ComputedData.pull" :c-style="tColx0x0x1ComputedData.cStyle">` +
`<t-row id="t-row-cb1c.89ba545fd" class="waterMonitoringDay-t-row-0-0-1-0"  :c-style="tRowx0x0x1x0ComputedData.cStyle" :gutter="tRowx0x0x1x0ComputedData.gutter" :justify="tRowx0x0x1x0ComputedData.justify" :align="tRowx0x0x1x0ComputedData.align">` +
`<t-col id="t-col-fcd2.228c99eac" class="waterMonitoringDay-t-col-0-0-1-0-0"  :span="tColx0x0x1x0x0ComputedData.span" :offset="tColx0x0x1x0x0ComputedData.offset" :push="tColx0x0x1x0x0ComputedData.push" :pull="tColx0x0x1x0x0ComputedData.pull" :c-style="tColx0x0x1x0x0ComputedData.cStyle">` +
`<t-rect id="t-rect-1929.9fd527dbc" class="waterMonitoringDay-t-rect-0-0-1-0-0-0"  :tip="tRectx0x0x1x0x0x0ComputedData.tip" :label="tRectx0x0x1x0x0x0ComputedData.label" :active="tRectx0x0x1x0x0x0ComputedData.active" :c-style="tRectx0x0x1x0x0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-6b1f.fda5b19c" class="waterMonitoringDay-t-text-common-0-0-1-0-0-1"  :label="tTextCommonx0x0x1x0x0x1ComputedData.label" :editable="tTextCommonx0x0x1x0x0x1ComputedData.editable" :c-style="tTextCommonx0x0x1x0x0x1ComputedData.cStyle">` +
`</t-text-common>` +
`<t-row id="t-row-2696.94a93ff4a" class="waterMonitoringDay-t-row-0-0-1-0-0-2"  :c-style="tRowx0x0x1x0x0x2ComputedData.cStyle" :gutter="tRowx0x0x1x0x0x2ComputedData.gutter" :justify="tRowx0x0x1x0x0x2ComputedData.justify" :align="tRowx0x0x1x0x0x2ComputedData.align">` +
`<t-text id="t-text-e42c.c44e4b688" class="waterMonitoringDay-t-text-0-0-1-0-0-2-0"  :label="replaceCssVariables(filterData(state.standardPointCount, componentPropBindingMap?.['t-text-e42c.c44e4b688']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x1x0x0x2x0ComputedData.editable" :c-style="tTextx0x0x1x0x0x2x0ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-a0f5.f5a8bfe6a" class="waterMonitoringDay-t-text-0-0-1-0-0-2-1"  :label="tTextx0x0x1x0x0x2x1ComputedData.label" :editable="tTextx0x0x1x0x0x2x1ComputedData.editable" :c-style="tTextx0x0x1x0x0x2x1ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-48b4.52e452883" class="waterMonitoringDay-t-text-0-0-1-0-0-2-2"  :label="replaceCssVariables(filterData(state.actualPointCount, componentPropBindingMap?.['t-text-48b4.52e452883']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x1x0x0x2x2ComputedData.editable" :c-style="tTextx0x0x1x0x0x2x2ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`</t-col>` +
`<t-col id="t-col-da1e.6c584077e" class="waterMonitoringDay-t-col-0-0-1-0-1"  :span="tColx0x0x1x0x1ComputedData.span" :offset="tColx0x0x1x0x1ComputedData.offset" :push="tColx0x0x1x0x1ComputedData.push" :pull="tColx0x0x1x0x1ComputedData.pull" :c-style="tColx0x0x1x0x1ComputedData.cStyle">` +
`<t-rect id="t-rect-f2c4.0ebcb476f" class="waterMonitoringDay-t-rect-0-0-1-0-1-0"  :tip="tRectx0x0x1x0x1x0ComputedData.tip" :label="tRectx0x0x1x0x1x0ComputedData.label" :active="tRectx0x0x1x0x1x0ComputedData.active" :c-style="tRectx0x0x1x0x1x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-55ee.878a8e10a" class="waterMonitoringDay-t-text-common-0-0-1-0-1-1"  :label="tTextCommonx0x0x1x0x1x1ComputedData.label" :editable="tTextCommonx0x0x1x0x1x1ComputedData.editable" :c-style="tTextCommonx0x0x1x0x1x1ComputedData.cStyle">` +
`</t-text-common>` +
`<t-row id="t-row-c304.41c0d40d2" class="waterMonitoringDay-t-row-0-0-1-0-1-2"  :c-style="tRowx0x0x1x0x1x2ComputedData.cStyle" :gutter="tRowx0x0x1x0x1x2ComputedData.gutter" :justify="tRowx0x0x1x0x1x2ComputedData.justify" :align="tRowx0x0x1x0x1x2ComputedData.align">` +
`<t-text id="t-text-c3a7.7366cf3f" class="waterMonitoringDay-t-text-0-0-1-0-1-2-0"  :label="replaceCssVariables(filterData(state.standardRate, componentPropBindingMap?.['t-text-c3a7.7366cf3f']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x1x0x1x2x0ComputedData.editable" :c-style="tTextx0x0x1x0x1x2x0ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-5640.f565c3818" class="waterMonitoringDay-t-text-0-0-1-0-1-2-1"  :label="tTextx0x0x1x0x1x2x1ComputedData.label" :editable="tTextx0x0x1x0x1x2x1ComputedData.editable" :c-style="tTextx0x0x1x0x1x2x1ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`</t-col>` +
`</t-row>` +
`</t-col>` +
`<t-col id="t-col-608f.233b10444" class="waterMonitoringDay-t-col-0-0-2"  :span="tColx0x0x2ComputedData.span" :offset="tColx0x0x2ComputedData.offset" :push="tColx0x0x2ComputedData.push" :pull="tColx0x0x2ComputedData.pull" :c-style="tColx0x0x2ComputedData.cStyle">` +
`<t-component id="t-component-b044.1f15d839a" class="waterMonitoringDay-t-component-0-0-2-0"  :name="tComponentx0x0x2x0ComputedData.name" :c-style="tComponentx0x0x2x0ComputedData.cStyle" :src="tComponentx0x0x2x0ComputedData.src" :component-name="tComponentx0x0x2x0ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-9d91.04a7377e8" class="waterMonitoringDay-t-text-0-0-2-1"  :label="tTextx0x0x2x1ComputedData.label" :editable="tTextx0x0x2x1ComputedData.editable" :c-style="tTextx0x0x2x1ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-bf2b.79388283a" class="waterMonitoringDay-t-col-0-0-3"  :span="tColx0x0x3ComputedData.span" :offset="tColx0x0x3ComputedData.offset" :push="tColx0x0x3ComputedData.push" :pull="tColx0x0x3ComputedData.pull" :c-style="tColx0x0x3ComputedData.cStyle">` +
`<t-list-card id="t-list-card-1271.6b6d16ecb" class="waterMonitoringDay-t-list-card-0-0-3-0"  :data="replaceCssVariables(filterData(state.alarmList, componentPropBindingMap?.['t-list-card-1271.6b6d16ecb']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x0x3x0ComputedData.spacingX" :col="tListCardx0x0x3x0ComputedData.col" :direction="tListCardx0x0x3x0ComputedData.direction" :exchange-order="tListCardx0x0x3x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0x3x0ComputedData.unitBreak" :key-field="tListCardx0x0x3x0ComputedData.keyField" :active-key-field="tListCardx0x0x3x0ComputedData.activeKeyField" :active="tListCardx0x0x3x0ComputedData.active" :c-style="tListCardx0x0x3x0ComputedData.cStyle" @card-click="oncardClick1734074196591">` +
`</t-list-card>` +
`</t-col>` +
`<t-col id="t-col-011b.5490f8132" class="waterMonitoringDay-t-col-0-0-4"  :span="tColx0x0x4ComputedData.span" :offset="tColx0x0x4ComputedData.offset" :push="tColx0x0x4ComputedData.push" :pull="tColx0x0x4ComputedData.pull" :c-style="tColx0x0x4ComputedData.cStyle">` +
`<t-tabs-base id="t-tabs-base-955b.c5752188c" class="waterMonitoringDay-t-tabs-base-0-0-4-0"  :data="tTabsBasex0x0x4x0ComputedData.data" :space="tTabsBasex0x0x4x0ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.bottomTabsValue, componentPropBindingMap?.['t-tabs-base-955b.c5752188c']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x0x4x0ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x0x4x0ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x0x4x0ComputedData.alias" :c-style="tTabsBasex0x0x4x0ComputedData.cStyle" @tab-click="ontabClick1773125785675">` +
`</t-tabs-base>` +
`</t-col>` +
`<t-col id="t-col-525c.e9d054b84" class="waterMonitoringDay-t-col-0-0-5"  :span="tColx0x0x5ComputedData.span" :offset="tColx0x0x5ComputedData.offset" :push="tColx0x0x5ComputedData.push" :pull="tColx0x0x5ComputedData.pull" :c-style="tColx0x0x5ComputedData.cStyle">` +
`<t-chart-design v-if="state.bottomTabsValue !== 'region'" id="t-chart-design-fadc.d50b0f4c" class="waterMonitoringDay-t-chart-design-0-0-5-0"  :empty-img="tChartDesignx0x0x5x0ComputedData.emptyImg" :c-style="tChartDesignx0x0x5x0ComputedData.cStyle" :options="tChartDesignx0x0x5x0ComputedData.options">` +
`</t-chart-design>` +
`<t-chart-design v-if="state.bottomTabsValue === 'region'" id="t-chart-design-955c.f55f47b66" class="waterMonitoringDay-t-chart-design-0-0-5-1"  :empty-img="tChartDesignx0x0x5x1ComputedData.emptyImg" :c-style="tChartDesignx0x0x5x1ComputedData.cStyle" :options="tChartDesignx0x0x5x1ComputedData.options">` +
`</t-chart-design>` +
`</t-col>` +
`<t-col id="t-col-fa2d.8a35f0025" class="waterMonitoringDay-t-col-0-0-6"  :span="tColx0x0x6ComputedData.span" :offset="tColx0x0x6ComputedData.offset" :push="tColx0x0x6ComputedData.push" :pull="tColx0x0x6ComputedData.pull" :c-style="tColx0x0x6ComputedData.cStyle">` +
`<t-component id="t-component-2580.3221a361d" class="waterMonitoringDay-t-component-0-0-6-0"  :name="tComponentx0x0x6x0ComputedData.name" :c-style="tComponentx0x0x6x0ComputedData.cStyle" :src="tComponentx0x0x6x0ComputedData.src" :component-name="tComponentx0x0x6x0ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-572b.813d06e14" class="waterMonitoringDay-t-text-0-0-6-1"  :label="tTextx0x0x6x1ComputedData.label" :editable="tTextx0x0x6x1ComputedData.editable" :c-style="tTextx0x0x6x1ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-40bd.a09a09ca6" class="waterMonitoringDay-t-col-0-0-7"  :span="tColx0x0x7ComputedData.span" :offset="tColx0x0x7ComputedData.offset" :push="tColx0x0x7ComputedData.push" :pull="tColx0x0x7ComputedData.pull" :c-style="tColx0x0x7ComputedData.cStyle">` +
`<t-checkbox id="t-checkbox-6de2.16562f09c" class="waterMonitoringDay-t-checkbox-0-0-7-0"  :data="tCheckboxx0x0x7x0ComputedData.data" :active="tCheckboxx0x0x7x0ComputedData.active" :data-alias="tCheckboxx0x0x7x0ComputedData.dataAlias" :border="tCheckboxx0x0x7x0ComputedData.border" :use-button="tCheckboxx0x0x7x0ComputedData.useButton" :c-style="tCheckboxx0x0x7x0ComputedData.cStyle" @change="onchange1733308713707">` +
`</t-checkbox>` +
`</t-col>` +
`<t-col id="t-col-1303.ca291d764" class="waterMonitoringDay-t-col-0-0-8"  :span="tColx0x0x8ComputedData.span" :offset="tColx0x0x8ComputedData.offset" :push="tColx0x0x8ComputedData.push" :pull="tColx0x0x8ComputedData.pull" :c-style="tColx0x0x8ComputedData.cStyle">` +
`<t-row id="t-row-34a0.9966a751" class="waterMonitoringDay-t-row-0-0-8-0"  :c-style="tRowx0x0x8x0ComputedData.cStyle" :gutter="tRowx0x0x8x0ComputedData.gutter" :justify="tRowx0x0x8x0ComputedData.justify" :align="tRowx0x0x8x0ComputedData.align">` +
`<t-col id="t-col-113d.9cd4a7866" class="waterMonitoringDay-t-col-0-0-8-0-0"  :span="tColx0x0x8x0x0ComputedData.span" :offset="tColx0x0x8x0x0ComputedData.offset" :push="tColx0x0x8x0x0ComputedData.push" :pull="tColx0x0x8x0x0ComputedData.pull" :c-style="tColx0x0x8x0x0ComputedData.cStyle">` +
`<t-search id="t-search-33fe.4dae35bd7" class="waterMonitoringDay-t-search-0-0-8-0-0-0"  :type="tSearchx0x0x8x0x0x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.keywords, componentPropBindingMap?.['t-search-33fe.4dae35bd7']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x0x8x0x0x0ComputedData.maxlength" :minlength="tSearchx0x0x8x0x0x0ComputedData.minlength" :show-word-limit="tSearchx0x0x8x0x0x0ComputedData.showWordLimit" :placeholder="tSearchx0x0x8x0x0x0ComputedData.placeholder" :clearable="tSearchx0x0x8x0x0x0ComputedData.clearable" :show-password="tSearchx0x0x8x0x0x0ComputedData.showPassword" :disabled="tSearchx0x0x8x0x0x0ComputedData.disabled" :prefix-icon="tSearchx0x0x8x0x0x0ComputedData.prefix-icon" :suffix-icon="tSearchx0x0x8x0x0x0ComputedData.suffix-icon" :rows="tSearchx0x0x8x0x0x0ComputedData.rows" :autosize="tSearchx0x0x8x0x0x0ComputedData.autosize" :name="tSearchx0x0x8x0x0x0ComputedData.name" :readonly="tSearchx0x0x8x0x0x0ComputedData.readonly" :step="tSearchx0x0x8x0x0x0ComputedData.step" :autofocus="tSearchx0x0x8x0x0x0ComputedData.autofocus" :form="tSearchx0x0x8x0x0x0ComputedData.form" :label="tSearchx0x0x8x0x0x0ComputedData.label" :tabindex="tSearchx0x0x8x0x0x0ComputedData.tabindex" :validate-event="tSearchx0x0x8x0x0x0ComputedData.validateEvent" :c-style="tSearchx0x0x8x0x0x0ComputedData.cStyle" :has-search-btn="tSearchx0x0x8x0x0x0ComputedData.hasSearchBtn" @input="oninput1733314642471">` +
`</t-search>` +
`</t-col>` +
`<t-col id="t-col-c498.89ac33488" class="waterMonitoringDay-t-col-0-0-8-0-1"  :span="tColx0x0x8x0x1ComputedData.span" :offset="tColx0x0x8x0x1ComputedData.offset" :push="tColx0x0x8x0x1ComputedData.push" :pull="tColx0x0x8x0x1ComputedData.pull" :c-style="tColx0x0x8x0x1ComputedData.cStyle">` +
`<t-button id="t-button-7605.3586294a" class="waterMonitoringDay-t-button-0-0-8-0-1-0"  :label="tButtonx0x0x8x0x1x0ComputedData.label" :round="tButtonx0x0x8x0x1x0ComputedData.round" :plain="tButtonx0x0x8x0x1x0ComputedData.plain" :disabled="tButtonx0x0x8x0x1x0ComputedData.disabled" :type="tButtonx0x0x8x0x1x0ComputedData.type" :size="tButtonx0x0x8x0x1x0ComputedData.size" :native-type="tButtonx0x0x8x0x1x0ComputedData.native-type" :c-style="tButtonx0x0x8x0x1x0ComputedData.cStyle" @click="onclick1734423116611">` +
`</t-button>` +
`</t-col>` +
`</t-row>` +
`</t-col>` +
`<t-col id="t-col-047f.3d239b814" class="waterMonitoringDay-t-col-0-0-9"  :span="tColx0x0x9ComputedData.span" :offset="tColx0x0x9ComputedData.offset" :push="tColx0x0x9ComputedData.push" :pull="tColx0x0x9ComputedData.pull" :c-style="tColx0x0x9ComputedData.cStyle">` +
`<t-table id="t-table-9c69.e1d6ac83c" class="waterMonitoringDay-t-table-0-0-9-0"  :height="tTablex0x0x9x0ComputedData.height" :stripe="tTablex0x0x9x0ComputedData.stripe" :border="tTablex0x0x9x0ComputedData.border" :auto-scroll="tTablex0x0x9x0ComputedData.autoScroll" :speed="tTablex0x0x9x0ComputedData.speed" :columns="tTablex0x0x9x0ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-9c69.e1d6ac83c']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x0x9x0ComputedData.defaultSort" :c-style="tTablex0x0x9x0ComputedData.cStyle" @cell-click="oncellClick1733906653732">` +
`</t-table>` +
`</t-col>` +
`</t-row>` +
`<t-component id="t-component-2500.24824c8ef" class="waterMonitoringDay-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-f551.46f79701c" class="waterMonitoringDay-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-c3e9.9ff688864" class="waterMonitoringDay-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-select id="t-select-ff56.0fa7cf9bb" class="waterMonitoringDay-t-select-0-4"  :active-value="replaceCssVariables(filterData(state.dataSource, componentPropBindingMap?.['t-select-ff56.0fa7cf9bb']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.dataSourceOptions, componentPropBindingMap?.['t-select-ff56.0fa7cf9bb']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x4ComputedData.alias" :multiple="tSelectx0x4ComputedData.multiple" :placeholder="tSelectx0x4ComputedData.placeholder" :clearable="tSelectx0x4ComputedData.clearable" :disabled="tSelectx0x4ComputedData.disabled" :name="tSelectx0x4ComputedData.name" :autocomplete="tSelectx0x4ComputedData.autocomplete" :filterable="tSelectx0x4ComputedData.filterable" :no-match-text="tSelectx0x4ComputedData.no-match-text" :no-data-text="tSelectx0x4ComputedData.no-data-text" :c-style="tSelectx0x4ComputedData.cStyle" @change="onchange1733289402709">` +
`</t-select>` +
`<t-date-picker id="t-date-picker-e2a6.4a290e42c" class="waterMonitoringDay-t-date-picker-0-5"  :placeholder="tDatePickerx0x5ComputedData.placeholder" :start-placeholder="tDatePickerx0x5ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x5ComputedData.endPlaceholder" :type="tDatePickerx0x5ComputedData.type" :clearable="tDatePickerx0x5ComputedData.clearable" :range-separator="tDatePickerx0x5ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.curTime, componentPropBindingMap?.['t-date-picker-e2a6.4a290e42c']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x5ComputedData.separator" :readonly="tDatePickerx0x5ComputedData.readonly" :editable="tDatePickerx0x5ComputedData.editable" :c-style="tDatePickerx0x5ComputedData.cStyle" @date-change="ondateChange1733283973997">` +
`</t-date-picker>` +
`<t-select id="t-select-090e.3e2500624" class="waterMonitoringDay-t-select-0-6"  :active-value="replaceCssVariables(filterData(state.controlType, componentPropBindingMap?.['t-select-090e.3e2500624']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x6ComputedData.options" :alias="tSelectx0x6ComputedData.alias" :multiple="tSelectx0x6ComputedData.multiple" :placeholder="tSelectx0x6ComputedData.placeholder" :clearable="tSelectx0x6ComputedData.clearable" :disabled="tSelectx0x6ComputedData.disabled" :name="tSelectx0x6ComputedData.name" :autocomplete="tSelectx0x6ComputedData.autocomplete" :filterable="tSelectx0x6ComputedData.filterable" :no-match-text="tSelectx0x6ComputedData.no-match-text" :no-data-text="tSelectx0x6ComputedData.no-data-text" :c-style="tSelectx0x6ComputedData.cStyle" @change="onchange1733289376621">` +
`</t-select>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-9106.da2075bd1":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-1a5b.c88634728":{"attributeName":"tColx0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-3bdd.9dd88f3cc":{"attributeName":"tListCardx0x0x0x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-13f5.a526c0e5c":{"attributeName":"tColx0x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-row-cb1c.89ba545fd":{"attributeName":"tRowx0x0x1x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-fcd2.228c99eac":{"attributeName":"tColx0x0x1x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1929.9fd527dbc":{"attributeName":"tRectx0x0x1x0x0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-6b1f.fda5b19c":{"attributeName":"tTextCommonx0x0x1x0x0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-2696.94a93ff4a":{"attributeName":"tRowx0x0x1x0x0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-e42c.c44e4b688":{"attributeName":"tTextx0x0x1x0x0x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a0f5.f5a8bfe6a":{"attributeName":"tTextx0x0x1x0x0x2x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-48b4.52e452883":{"attributeName":"tTextx0x0x1x0x0x2x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-da1e.6c584077e":{"attributeName":"tColx0x0x1x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f2c4.0ebcb476f":{"attributeName":"tRectx0x0x1x0x1x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-55ee.878a8e10a":{"attributeName":"tTextCommonx0x0x1x0x1x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-c304.41c0d40d2":{"attributeName":"tRowx0x0x1x0x1x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-c3a7.7366cf3f":{"attributeName":"tTextx0x0x1x0x1x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-5640.f565c3818":{"attributeName":"tTextx0x0x1x0x1x2x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-608f.233b10444":{"attributeName":"tColx0x0x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-b044.1f15d839a":{"attributeName":"tComponentx0x0x2x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-9d91.04a7377e8":{"attributeName":"tTextx0x0x2x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-bf2b.79388283a":{"attributeName":"tColx0x0x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-1271.6b6d16ecb":{"attributeName":"tListCardx0x0x3x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-011b.5490f8132":{"attributeName":"tColx0x0x4","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-955b.c5752188c":{"attributeName":"tTabsBasex0x0x4x0","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-col-525c.e9d054b84":{"attributeName":"tColx0x0x5","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-fadc.d50b0f4c":{"attributeName":"tChartDesignx0x0x5x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-chart-design-955c.f55f47b66":{"attributeName":"tChartDesignx0x0x5x1","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-col-fa2d.8a35f0025":{"attributeName":"tColx0x0x6","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-2580.3221a361d":{"attributeName":"tComponentx0x0x6x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-572b.813d06e14":{"attributeName":"tTextx0x0x6x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-40bd.a09a09ca6":{"attributeName":"tColx0x0x7","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-checkbox-6de2.16562f09c":{"attributeName":"tCheckboxx0x0x7x0","data":{"filters":[]},"active":{"filters":[]},"dataAlias":{"filters":[]},"border":{"filters":[]},"useButton":{"filters":[]},"cStyle":{"filters":[]}},"t-col-1303.ca291d764":{"attributeName":"tColx0x0x8","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-row-34a0.9966a751":{"attributeName":"tRowx0x0x8x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-113d.9cd4a7866":{"attributeName":"tColx0x0x8x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-search-33fe.4dae35bd7":{"attributeName":"tSearchx0x0x8x0x0x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-col-c498.89ac33488":{"attributeName":"tColx0x0x8x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-button-7605.3586294a":{"attributeName":"tButtonx0x0x8x0x1x0","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-col-047f.3d239b814":{"attributeName":"tColx0x0x9","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-table-9c69.e1d6ac83c":{"attributeName":"tTablex0x0x9x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-component-2500.24824c8ef":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-f551.46f79701c":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-c3e9.9ff688864":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-select-ff56.0fa7cf9bb":{"attributeName":"tSelectx0x4","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-e2a6.4a290e42c":{"attributeName":"tDatePickerx0x5","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-090e.3e2500624":{"attributeName":"tSelectx0x6","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}}};
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
   chartTreemapOptionTooltip: {},
   pollutantDistributionCardList: [],
   problemDistributionCardList: [],
   bottomTabsValue: "region",
   dataSourceOptions: [{"value":"surfaceWater,drinkingWater","label":"全部","disabled":false},{"value":"surfaceWater","label":"地表水","disabled":false},{"value":"drinkingWater","label":"饮用水","disabled":false}],
   listData: [],
   keywords: "",
   waterLevelCheckbox: "1,2,3,4,5,6,0",
   alarmList: [{"title":"持续恶化","num":"-","unit":"个","icon":"","componentName":"waterCommonWarningDialogComponent","alarmTypeCode":"continueBad"},{"title":"达标差距预警","num":"-","unit":"个","icon":"","componentName":"waterCommonWarningDialogComponent","alarmTypeCode":"standardGap"},{"title":"临界超标","num":"-","unit":"个","icon":"","componentName":"waterCommonWarningDialogComponent","alarmTypeCode":"criticalover"},{"title":"水质超标报警","num":"-","unit":"个","icon":"","componentName":"waterCommonWarningDialogComponent","alarmTypeCode":"waterLevelOver"}],
   standardRate: "-",
   standardPointCount: "-",
   actualPointCount: "-",
   cardList: [{"title":"断面总数","num":"-","unit":"个","color":"var(--business-theme)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/c455d26bb2b44f2cb0b5aecbd0b2eb43.png"},{"title":"优良断面","num":"-","unit":"个","color":"rgba(0, 255, 34, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/80b32d24a02548d4a4766b6f29301a37.png"},{"title":"劣V断面","num":"-","unit":"个","color":"rgba(255, 192, 0, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/3e691744524c468f8cd1990f8bc03b69.png"}],
   timeType: "",
   dataSource: "",
   controlType: "1,2",
   curTime: "",
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","background":"rgba(0, 0, 0, 0)","fillType":"color","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomRightRadius":"10px","borderBottomLeftRadius":"10px","paddingLeft":"16px","paddingRight":"16px","paddingBottom":"0px","paddingTop":"6px","gap":"0px","animationName":"","left":"0px","top":"132px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","background":"rgba(0, 0, 0, 0)","fillType":"color","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomRightRadius":"10px","borderBottomLeftRadius":"10px","paddingLeft":"16px","paddingRight":"16px","paddingBottom":"0px","paddingTop":"6px","gap":"0px","animationName":"","left":"0px","top":"132px","position":"unset"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1398px","top":"-319px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1398px","top":"-319px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tListCardx0x0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
data:[{"title":"断面总数","num":"-","unit":"个","color":"var(--business-theme)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/c455d26bb2b44f2cb0b5aecbd0b2eb43.png"},{"title":"优良断面","num":"-","unit":"个","color":"rgba(0, 255, 34, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/80b32d24a02548d4a4766b6f29301a37.png"},{"title":"劣V断面","num":"-","unit":"个","color":"rgba(255, 192, 0, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/3e691744524c468f8cd1990f8bc03b69.png"}],
spacingX:8,
col:3,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"height":"100%","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","line-height":"normal","min-height":"66px"}},"num":{"default":{"fontSize":"var(--business-num-size-24)","fontWeight":"700","marginRight":"2px","lineHeight":"var(--business-num-size-24)","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","marginTop":"0px","lineHeight":"var(--business-text-size-14)"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"17px"}},"numBox":{"default":{"marginTop":"8px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"alignItems":"flex-start","marginLeft":"8px"}}}, 
 },
},
tColx0x0x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","marginBottom":"10px","animationName":"","left":"12px","top":"150px","position":"unset"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","marginBottom":"10px","animationName":"","left":"12px","top":"150px","position":"unset"}}}, 
 },
},
tRowx0x0x1x0: {
defaultStyle: {
            default: {"width":"98%","min-width":"auto","height":"auto","column-gap":"10px","justifyContent":"space-between","alignItems":"center","gap":"6px","display":"flex","padding":"4px 0","animationName":"","left":"-991px","top":"222px","background":"var(--business-show-bg15)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"98%","min-width":"auto","height":"auto","column-gap":"10px","justifyContent":"space-between","alignItems":"center","gap":"6px","display":"flex","padding":"4px 0","animationName":"","left":"-991px","top":"222px","background":"var(--business-show-bg15)"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x1x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","flexDirection":"row","gap":"10px","animationName":"","left":"-603px","top":"161px"},
            
            },
 default: { 
 
span:13,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","flexDirection":"row","gap":"10px","animationName":"","left":"-603px","top":"161px"}}}, 
 },
},
tRectx0x0x1x0x0x0: {
defaultStyle: {
            default: {"width":"2px","height":"27px","position":"unset","left":"-1833px","top":"754px","backgroundColor":"var(--business-theme)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"2px","height":"27px","position":"unset","left":"-1833px","top":"754px","backgroundColor":"var(--business-theme)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":""}}}, 
 },
},
tTextCommonx0x0x1x0x0x1: {
defaultStyle: {
            default: {"width":"96px","height":"auto","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","background":"unset","backgroundClip":"unset","left":"-1810px","top":"759px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"达标断面",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"auto","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","background":"unset","backgroundClip":"unset","left":"-1810px","top":"759px","position":"unset","animationName":""}}}, 
 },
},
tRowx0x0x1x0x0x2: {
defaultStyle: {
            default: {"width":"85px","height":"auto","position":"unset","left":"-1718px","top":"756px","letterSpacing":"0px","animationName":"","fontWeight":"600"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"85px","height":"auto","position":"unset","left":"-1718px","top":"756px","letterSpacing":"0px","animationName":"","fontWeight":"600"}}},
gutter:0,
justify:"center",
align:"middle", 
 },
},
tTextx0x0x1x0x0x2x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"var(--business-num-size-18)","lineHeight":"var(--business-num-size-18)","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold","left":"-617.9256623920642px","top":"1595.1927628296885px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"var(--business-num-size-18)","lineHeight":"var(--business-num-size-18)","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold","left":"-617.9256623920642px","top":"1595.1927628296885px"}}}, 
 },
},
tTextx0x0x1x0x0x2x1: {
defaultStyle: {
            default: {"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","animationName":"","fontSize":"var(--business-text-size-14)","lineHeight":"14px","marginLeft":"4px","marginRight":"4px","textIndent":"0px","paddingLeft":"0px","left":"-299.3623828230652px","top":"2227.646307262253px"},
            
            },
 default: { 
 
label:"/",
editable:false,
cStyle:{"wrapper":{"default":{"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","animationName":"","fontSize":"var(--business-text-size-14)","lineHeight":"14px","marginLeft":"4px","marginRight":"4px","textIndent":"0px","paddingLeft":"0px","left":"-299.3623828230652px","top":"2227.646307262253px"}}}, 
 },
},
tTextx0x0x1x0x0x2x2: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--business-white)","fontFamily":"DIN-bold","fontWeight":"500","animationName":"","fontSize":"var(--business-num-size-18)","left":"-678.9256623920642px","top":"1587.1927628296885px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--business-white)","fontFamily":"DIN-bold","fontWeight":"500","animationName":"","fontSize":"var(--business-num-size-18)","left":"-678.9256623920642px","top":"1587.1927628296885px"}}}, 
 },
},
tColx0x0x1x0x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"-613px","top":"151px"},
            
            },
 default: { 
 
span:10,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"-613px","top":"151px"}}}, 
 },
},
tRectx0x0x1x0x1x0: {
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
tTextCommonx0x0x1x0x1x1: {
defaultStyle: {
            default: {"width":"66px","height":"auto","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-1595px","top":"759px","background":"unset","backgroundClip":"unset","line-height":"normal","animationName":""},
            
            },
 default: { 
 
label:"达标率",
editable:false,
cStyle:{"wrapper":{"default":{"width":"66px","height":"auto","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-1595px","top":"759px","background":"unset","backgroundClip":"unset","line-height":"normal","animationName":""}}}, 
 },
},
tRowx0x0x1x0x1x2: {
defaultStyle: {
            default: {"width":"83px","height":"auto","position":"unset","left":"-1526px","top":"756px","letterSpacing":"0px","animationName":"","fontWeight":"600","marginLeft":"6px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"83px","height":"auto","position":"unset","left":"-1526px","top":"756px","letterSpacing":"0px","animationName":"","fontWeight":"600","marginLeft":"6px"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x0x1x0x1x2x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"var(--business-num-size-18)","lineHeight":"var(--business-num-size-18)","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold","left":"-144.70141820220078px","top":"1761.0131956048494px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"var(--business-num-size-18)","lineHeight":"var(--business-num-size-18)","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold","left":"-144.70141820220078px","top":"1761.0131956048494px"}}}, 
 },
},
tTextx0x0x1x0x1x2x1: {
defaultStyle: {
            default: {"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","animationName":"","fontSize":"var(--business-text-size-14)","lineHeight":"14px","marginLeft":"4px","marginRight":"4px","textIndent":"0px","paddingLeft":"0px","left":"-309.3623828230652px","top":"2217.646307262253px"},
            
            },
 default: { 
 
label:"%",
editable:false,
cStyle:{"wrapper":{"default":{"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","animationName":"","fontSize":"var(--business-text-size-14)","lineHeight":"14px","marginLeft":"4px","marginRight":"4px","textIndent":"0px","paddingLeft":"0px","left":"-309.3623828230652px","top":"2217.646307262253px"}}}, 
 },
},
tColx0x0x2: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1418px","top":"-299px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1418px","top":"-299px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tComponentx0x0x2x0: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"absolute !important","left":"0","top":"0","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"absolute !important","left":"0","top":"0","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x0x2x1: {
defaultStyle: {
            default: {"width":"auto","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"70px","top":"630px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","z-index":0,"lineHeight":"31px","marginLeft":"38px"},
            
            },
 default: { 
 
label:"报警预警",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"70px","top":"630px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","z-index":0,"lineHeight":"31px","marginLeft":"38px"}}}, 
 },
},
tColx0x0x3: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1408px","top":"-309px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1408px","top":"-309px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tListCardx0x0x3x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
data:[{"title":"持续恶化","num":"-","unit":"个","icon":"","componentName":"waterCommonWarningDialogComponent","alarmTypeCode":"continueBad"},{"title":"达标差距预警","num":"-","unit":"个","icon":"","componentName":"waterCommonWarningDialogComponent","alarmTypeCode":"standardGap"},{"title":"临界超标","num":"-","unit":"个","icon":"","componentName":"waterCommonWarningDialogComponent","alarmTypeCode":"criticalover"},{"title":"水质超标报警","num":"-","unit":"个","icon":"","componentName":"waterCommonWarningDialogComponent","alarmTypeCode":"waterLevelOver"}],
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
tColx0x0x4: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1398px","top":"-319px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1398px","top":"-319px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tTabsBasex0x0x4x0: {
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
tColx0x0x5: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1398px","top":"-319px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1398px","top":"-319px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tChartDesignx0x0x5x0: {
defaultStyle: {
            default: {"height":"124px","width":"410px","position":"unset","left":"21px","top":"480px","animationName":""},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"height":"124px","width":"410px","position":"unset","left":"21px","top":"480px","animationName":""}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"color":["rgba(255, 106, 0, 0.4)","rgba(244, 220, 0, 0.4)","rgba(55, 255, 0, 0.4)","rgba(0, 255, 255, 0.4)","rgba(58, 156, 255, 0.4)","rgba(184, 43, 255, 0.4)"],"xAxis":{"show":false},"yAxis":{"show":false},"tooltip":state.chartTreemapOptionTooltip,"series":[{"type":"treemap","width":"100%","height":"100%","breadcrumb":{"show":false},"roam":false,"nodeClick":false,"itemStyle":{"borderColor":"rgba(0,0,0,0)"},"label":{"fontSize":"treemapLabelFontSize","fontWeight":700},"levels":[{"itemStyle":{"gapWidth":5}},{"colorSaturation":[0.3,0.6],"itemStyle":{"borderColorSaturation":0.5,"borderWidth":2}}],"data":state.pollutantDistributionCardList}]})), 
 },
},
tChartDesignx0x0x5x1: {
defaultStyle: {
            default: {"height":"124px","width":"410px","position":"unset","left":"20px","top":"480px","animationName":""},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"height":"124px","width":"410px","position":"unset","left":"20px","top":"480px","animationName":""}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"color":["rgba(255, 106, 0, 0.4)","rgba(244, 220, 0, 0.4)","rgba(55, 255, 0, 0.4)","rgba(0, 255, 255, 0.4)","rgba(58, 156, 255, 0.4)","rgba(184, 43, 255, 0.4)"],"xAxis":{"show":false},"yAxis":{"show":false},"tooltip":state.chartTreemapOptionTooltip,"series":[{"type":"treemap","width":"100%","height":"100%","breadcrumb":{"show":false},"roam":false,"nodeClick":false,"itemStyle":{"borderColor":"rgba(0,0,0,0)"},"label":{"fontSize":"treemapLabelFontSize","fontWeight":700},"levels":[{"itemStyle":{"gapWidth":5}},{"colorSaturation":[0.3,0.6],"itemStyle":{"borderColorSaturation":0.5,"borderWidth":2}}],"data":state.problemDistributionCardList}]})), 
 },
},
tColx0x0x6: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1408px","top":"-309px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1408px","top":"-309px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tComponentx0x0x6x0: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"absolute !important","left":"0 !important","top":"0 !important","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"absolute !important","left":"0 !important","top":"0 !important","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x0x6x1: {
defaultStyle: {
            default: {"width":"130px","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"620px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","z-index":0,"lineHeight":"31px","marginLeft":"38px"},
            
            },
 default: { 
 
label:"断面评价结果",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"620px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","z-index":0,"lineHeight":"31px","marginLeft":"38px"}}}, 
 },
},
tColx0x0x7: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1418px","top":"-299px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1418px","top":"-299px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tCheckboxx0x0x7x0: {
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
tColx0x0x8: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingBottom":"10px","animationName":"","left":"1368px","top":"-349px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingBottom":"10px","animationName":"","left":"1368px","top":"-349px"}}}, 
 },
},
tRowx0x0x8x0: {
defaultStyle: {
            default: {"width":"100%","min-width":"auto","height":"auto","column-gap":"10px","justifyContent":"space-between","alignItems":"center","gap":"6px","display":"flex","paddingTop":"4px","animationName":"","left":"990px","top":"-278px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","min-width":"auto","height":"auto","column-gap":"10px","justifyContent":"space-between","alignItems":"center","gap":"6px","display":"flex","paddingTop":"4px","animationName":"","left":"990px","top":"-278px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x8x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","flexDirection":"row","gap":"10px","animationName":"","left":"1378px","top":"-339px"},
            
            },
 default: { 
 
span:20,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","flexDirection":"row","gap":"10px","animationName":"","left":"1378px","top":"-339px"}}}, 
 },
},
tSearchx0x0x8x0x0x0: {
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
tColx0x0x8x0x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"1368px","top":"-349px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"1368px","top":"-349px"}}}, 
 },
},
tButtonx0x0x8x0x1x0: {
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
tColx0x0x9: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1428px","top":"-289px","display":"flex","column-gap":"10px","align-items":"center","justify-content":"flex-end"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"10px","animationName":"","left":"1428px","top":"-289px","display":"flex","column-gap":"10px","align-items":"center","justify-content":"flex-end"}}}, 
 },
},
tTablex0x0x9x0: {
defaultStyle: {
            default: {"width":"100%","height":"600px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"580",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"42PX","type":"state","stateKey":"iconStatus"},{"label":"断面名称","key":"POINT_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"140PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"行政区","key":"REGION_NAME","align":"center","operationList":[],"stateList":[],"width":"66PX","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},{"label":"管理类型","key":"WQDATASOURCETYPENAME","stateKey":"waterQualityTargetValue","align":"center","type":"default","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 123, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(34, 56, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 178, 34, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(238, 215, 8, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(249, 118, 11, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(190, 36, 16, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX"}}],"width":"80PX","style":{"fontStyle":{"width":"40PX","height":"PX","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},{"label":"水质现状","key":"WATERQUALITYLEVELNAME","stateKey":"WATERQUALITYLEVELNAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"-","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","borderRadius":"2PX"}}],"width":"80PX","style":{"fontStyle":{"fontSize":"var(--business-text-size-12)","width":"PX","height":"PX","borderRadius":"PX","background":""}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"600px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"88px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"88px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"93px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""},
            
            },
 default: { 
 
label:"整体评价结果",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"93px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"450px","height":"64px","left":"0px","position":"unset","top":"0px","background":"var(--business-query-bg)","borderBottom":"1px solid var(--business-show-bg50)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"64px","left":"0px","position":"unset","top":"0px","background":"var(--business-query-bg)","borderBottom":"1px solid var(--business-show-bg50)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)"}}}, 
 },
},
tSelectx0x4: {
defaultStyle: {
            default: {"width":"97px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"",
options:[{"value":"surfaceWater,drinkingWater","label":"全部","disabled":false},{"value":"surfaceWater","label":"地表水","disabled":false},{"value":"drinkingWater","label":"饮用水","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"97px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tDatePickerx0x5: {
defaultStyle: {
            default: {"width":"204px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"date",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"204px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16)","lineHeight":"var(--business-text-size-16)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}}, 
 },
},
tSelectx0x6: {
defaultStyle: {
            default: {"width":"97px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"1,2",
options:[{"value":"1,2","label":"全部","disabled":false},{"value":"1","label":"国控","disabled":false},{"value":"2","label":"省控","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"97px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
});
const updateData = () => {
// 设置card图标
state.alarmList.forEach((item) => {
  item.icon = getCssVariable('--business-alarm-default-icon');
});


};
const changeWaterLevel = (checkededList) => {
state.waterLevelCheckbox = checkededList.join(',');
//更新列表数据
apiRegistry.getListData.request();

};
const col = (row,params) => {
console.log(params, row, 77)
};
const watchRegionChange = () => {
/**
 * 监听区域的变化
 */

watch(() => global.regionaQuery, (newVal) => {
  console.log(newVal, 1111)
}, { deep: true })
};
const handleLocation = (column,row) => {
/**
 * 处理定位
 */

if (["定位", '断面名称', '行政区', '管理类型', '水质现状'].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: 'runInteractive', // 消息名称
    data: [
      {
        code: 'point_code',
        shareCode: 'POINT_CODE',
        defaultValue: '',
        runtimeValue: row.POINT_CODE
      }
    ]
  });
}

};
const sendWebsocketMsg = (chnageType) => {
/**
 * 给一张图发送Websocket消息
 */

let data = [];

switch (chnageType) {
  /* 改变了 数据来源 */
  case 'dataSource':
    data = [
      {
        code: 'value',
        shareCode: 'CODE_WQDATASOURCETYPE',
        defaultValue: 'surfaceWater',
        runtimeValue: state.dataSource,
      },
      {
        code: '',
        shareCode: '',
        defaultValue: ''
      }
    ];
    state.waterMonitoringState.dataSource = state.dataSource
    break;
  /* 改变了 控制级别 */
  case 'controlType':
    data = [
      {
        code: 'value',
        shareCode: 'CODE_CONTROLLEVEL',
        defaultValue: '',
        runtimeValue: state.controlType,
      },
      {
        code: '',
        shareCode: '',
        defaultValue: '',
        runtimeValue: ''
      }
    ];
    state.waterMonitoringState.controlType = state.controlType
    break;
  /* 改变了 时间 */
  case 'curTime':
    data = [
      {
        code: 'value',
        shareCode: 'MONITORTIME',
        defaultValue: '',
        runtimeValue: state.curTime,
      }
    ];
    state.waterMonitoringState.curTimeDay = state.curTime;
    break;
  /* 改变了 水质级别 */
  case 'waterLevel':
    data = [
      {
        code: 'CODE_WATERQUALITYLEVELS',
        shareCode: 'CODE_WATERQUALITYLEVELS',
        defaultValue: '',
        runtimeValue: state.waterLevelCheckbox || '999',
      }
    ];
    break;
  /* 搜索 */
  case 'search':
    data = [
      {
        code: 'value',
        shareCode: 'POINT_NAME',
        defaultValue: '',
        runtimeValue: state.keywords,
      }
    ];
    break;
  default:
    break;
}

if (data.length) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: 'runInteractive', // 消息名称
    data,
  });
}
};
const changeWaringCard = (data) => {
// 设置弹框使用的参数
global.businessDialog.dialogParmas = {
  CODE_CONTROLLEVEL: state.controlType,
  MONITORTIME: state.curTime,
  // surfaceWater-地表水,drinkingWater-饮用水
  CODE_WQDATASOURCETYPE: state.dataSource,
  // 实时监控-日数据：DATA_FREQUENCY  = 2
  // 实时监控-小时数据：DATA_FREQUENCY  =  1
  // 地表水：DATA_FREQUENCY = ''
  DATA_FREQUENCY: '2', // 数据类型 数据频率（1：小时，2：日，3：周，4：月，5：季，6：半年，7：年）
  // 实时监控 MONITORTYPE = 0
  // 地表水 MONITORTYPE: 1
  MONITORTYPE: '0',
  ALARM_TYPE_CODE: data.alarmTypeCode, // 报警类型编码(waterLevelOver  水质类别超标 、waterLevelDecline 环比下降报警 、criticalover 临界超标报警、polluteValueMutation 污染物浓度突变、standardGap  达标差距预警、yoyover 同比下降报警、continueBad  持续恶化、exceptionValueIncrease 异常值增多)
  ALARM_TYPE_NAME: data.title, // 报警类型名称
};
// 显示弹窗(3个预警弹框)
global.businessDialog.dialogName = data.componentName;

};
const getProvider = () => {
const rootData = inject('waterMonitoringState');

state.waterMonitoringState = rootData;
};
const initPage = () => {
state.treemapLabelFontSize = parseInt(getCssVariable('--business-text-size-16')) || 16;
state.chartTreemapOptionTooltip = {
  textStyle: {
    fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
  }
}

state.dataSource = state.waterMonitoringState.dataSource || "surfaceWater,drinkingWater";
state.controlType = state.waterMonitoringState.controlType || "1,2";
if (state.waterMonitoringState.isChange) {
  state.curTime = state.waterMonitoringState.curTimeDay || "";
} else {
  apiRegistry.getLastTime.request();
}
/**
 * 监听行政区编码、当前选中的时间、数据来源、控制级别改变，更新数据
 */
watch(
  () => ([global.regionaQuery, state.curTime, state.controlType, state.dataSource]),
  ([regionaQuery, curTime, controlType]) => {
    if (regionaQuery && curTime && controlType) {
      // 更新自动监测天数据的整体达标状况数据（即卡片优良断面数和劣五类断面数）
      apiRegistry.gelDayAboutData.request();
      // 更新断面总数
      apiRegistry.getSessionCount.request();
      // 更新预报预警数据
      apiRegistry.getAlarmListData.request();
      // 更新列表数据
      apiRegistry.getListData.request();
      if (state.bottomTabsValue === 'region') {
        apiRegistry.getYJBJQuestion.request();
      } else {
        apiRegistry.getYjbjWrw.request();
      }
    }
  },
  {
    deep: true,
    immediate: true
  }
)
};
const changeTimeStatus = () => {
state.waterMonitoringState.isChange = true
};
const onChangeSize = () => {
rootData.rootOn('rootSocket:change', (data) => {
  if (data.type === 'changeFontSize') {
    Vue.nextTick(() => {
      // 重新渲染图表
      const targetValue = state.bottomTabsValue
      state.bottomTabsValue = 'any'
      setTimeout(() => {
        state.bottomTabsValue = targetValue
      })

      state.treemapLabelFontSize = parseInt(getCssVariable('--business-text-size-16')) || 16;
      state.chartTreemapOptionTooltip = {
        textStyle: {
          fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
        }
      };
    });
  }
});
};
const oncardClick1734074196591 = (item) => {
// 执行自定义方法
changeWaringCard(item);
};
const ontabClick1773125785675 = (data) => {
// 设置变量值
state.bottomTabsValue = data.value;
};
const onchange1733308713707 = (data) => {
// 执行自定义方法
changeWaterLevel(data);
// 执行自定义方法
sendWebsocketMsg("waterLevel");
};
const oninput1733314642471 = (value) => {
// 设置变量值
state.keywords = value;
};
const onclick1734423116611 = () => {
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 执行自定义方法
sendWebsocketMsg("search");
};
const oncellClick1733906653732 = (row,column,cell,event) => {
// 执行自定义方法
handleLocation(column,row);
};
const onchange1733289402709 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.dataSource = value;
// 执行自定义方法
sendWebsocketMsg("dataSource");
};
const ondateChange1733283973997 = (data) => {
// 设置变量值
state.curTime = data;
// 执行自定义方法
sendWebsocketMsg("curTime");
// 执行自定义方法
changeTimeStatus();
};
const onchange1733289376621 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.controlType = value;
// 执行自定义方法
sendWebsocketMsg("controlType");
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 gelDayAboutData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"AREA_CODE":"","WSYSTEM_CODE":"global.regionaQuery.areaCode","CODE_CONTROLLEVEL":"state.controlType","CODE_WQDATASOURCETYPE":"state.dataSource","MONITORTIME":"state.curTime","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"4c5d067a4d1958d51b9697745ddeb36c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_CONTROLLEVEL":state.controlType,"CODE_WQDATASOURCETYPE":state.dataSource,"MONITORTIME":state.curTime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"4c5d067a4d1958d51b9697745ddeb36c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"AREA_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_CONTROLLEVEL":state.controlType,"CODE_WQDATASOURCETYPE":state.dataSource,"MONITORTIME":state.curTime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"4c5d067a4d1958d51b9697745ddeb36c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['gelDayAboutData'] = res.data;
                
     if (state.cardList.length === 3) {
  // 清空优良断面数
  state.cardList[1].num = '-';
  // 清空劣五类断面数
  state.cardList[2].num = '-';
}
// 清空达标率
state.standardRate = '-';
// 清空达标断面数
state.standardPointCount = '-';
// 清空实测断面数
state.actualPointCount = '-';

const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  if (state.cardList.length === 3) {
    // 更新优良断面数
    state.cardList[1].num = data.data.GOODPOINTCOUNT || '-';
    // 更新劣五类断面数
    state.cardList[2].num = data.data.BADPOINTCOUNT || '-';
    // 更新达标率
    state.standardRate = data.data.STANDARDRATE || '-';
    // 更新达标断面数
    state.standardPointCount = data.data.STANDARDPOINTCOUNT || '-';
    // 更新实测断面数
    state.actualPointCount = data.data.ACTUALPOINTCOUNT || '-';
  }
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      if (state.cardList.length === 3) {
  // 清空优良断面数
  state.cardList[1].num = '-';
  // 清空劣五类断面数
  state.cardList[2].num = '-';
}
// 清空达标率
state.standardRate = '-';
// 清空达标断面数
state.standardPointCount = '-';
// 清空实测断面数
state.actualPointCount = '-';
      reject(error);
    });
  });
},
              },
// 接口函数
 getAlarmListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"CODE_CONTROLLEVEL":"state.controlType","WSYSTEM_CODE":"global.regionaQuery.areaCode","MONITORTIME":"state.curTime","REGION_CODE":"global.regionaQuery.regionCode","MONITORTYPE":"0","IS_CONNECT_SECTION":"","CODE_WQDATASOURCETYPE":"state.dataSource","AREA_CODE":"","DATA_FREQUENCY":"2","interfaceId":"1c36793e4d6646585933dbb2b88cea57"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"CODE_CONTROLLEVEL":state.controlType,"WSYSTEM_CODE":global.regionaQuery.areaCode,"MONITORTIME":state.curTime,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTYPE":"0","IS_CONNECT_SECTION":"","CODE_WQDATASOURCETYPE":state.dataSource,"AREA_CODE":"","DATA_FREQUENCY":"2","interfaceId":"1c36793e4d6646585933dbb2b88cea57"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"CODE_CONTROLLEVEL":state.controlType,"WSYSTEM_CODE":global.regionaQuery.areaCode,"MONITORTIME":state.curTime,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTYPE":"0","IS_CONNECT_SECTION":"","CODE_WQDATASOURCETYPE":state.dataSource,"AREA_CODE":"","DATA_FREQUENCY":"2","interfaceId":"1c36793e4d6646585933dbb2b88cea57"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getAlarmListData'] = res.data;
                
     // 清空预警数据列表
state.alarmList.map((val) => val.num = '0');

const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  // 持续恶化
  state.alarmList[0].num = data.data.CONTINUEBAD || '0';
  // 达标差距预警
  state.alarmList[1].num = data.data.STANDARDGAP || '0';
  // 临界超标
  state.alarmList[2].num = data.data.CRITICALOVER || '0';
  // 水质超标
  state.alarmList[3].num = data.data.WATERLEVELOVER || '0';

  // // 处理图标 报警数大于1就显示报警图标
  // for (let i = 0; i < state.alarmList.length; i++) {
  //   state.alarmList[i].icon = state.alarmList[i].num && Number(state.alarmList[i].num) > 0 ? '/lego-generated-apps/lego_file/res/2024-12-04/6d69bdc653634b72b98e082ec9201bf8.svg'
  //     : '/lego-generated-apps/lego_file/res/2024-12-04/1cb560e59192482985bba7eeba124949.svg'
  // }

  console.log('报警预警卡片 state.alarmList ---', state.alarmList);

  for (let i = 0; i < state.alarmList.length; i++) {
    state.alarmList[i].icon = state.alarmList[i].num && Number(state.alarmList[i].num) !== 0 ? '/lego-generated-apps/lego_file/res/2024-12-04/6d69bdc653634b72b98e082ec9201bf8.svg'
      : '/lego-generated-apps/lego_file/res/2024-12-04/1cb560e59192482985bba7eeba124949.svg'
  }

  // // 设置card图标
  // state.alarmList.forEach((item) => {
  //   if (!(Number(item.num))) {
  //     item.icon = getCssVariable('--business-alarm-default-icon');
  //   } else {
  //     item.icon = '/lego-generated-apps/lego_file/res/2024-12-04/6d69bdc653634b72b98e082ec9201bf8.svg';
  //   }
  // })
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空预警数据列表
state.alarmList.map((val) => val.num = '0');
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"CODE_WQDATASOURCETYPE":"state.dataSource","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"90e4dbffe295a3627146508180fd3611"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"CODE_WQDATASOURCETYPE":state.dataSource,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"90e4dbffe295a3627146508180fd3611"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"CODE_WQDATASOURCETYPE":state.dataSource,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"90e4dbffe295a3627146508180fd3611"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLastTime'] = res.data;
                
     state.waterMonitoringState.curTimeDay = '';
state.waterMonitoringState.curTimeHour = '';
state.curTime = ''
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  // 当前选中最新时间
  const time = data.data.MONITORTIME || ''
  state.waterMonitoringState.curTimeDay = time.slice(0, 10);
  state.waterMonitoringState.curTimeHour = '00';
  state.curTime = time
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.waterMonitoringState.curTimeDay = '';
state.waterMonitoringState.curTimeHour = '';
state.curTime = ''

      reject(error);
    });
  });
},
              },
// 接口函数
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"state.curTime","REGION_CODE":"global.regionaQuery.regionCode","CODE_WQDATASOURCETYPE":"state.dataSource","CODE_CONTROLLEVEL":"state.controlType","WSYSTEM_CODE":"global.regionaQuery.areaCode","CODE_WATERQUALITYLEVELS":"state.waterLevelCheckbox","POINT_NAME":"state.keywords","AREA_CODE":"","interfaceId":"b8b91b3f357ca4303b5c9f4b97dcd528"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.curTime,"REGION_CODE":global.regionaQuery.regionCode,"CODE_WQDATASOURCETYPE":state.dataSource,"CODE_CONTROLLEVEL":state.controlType,"WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_WATERQUALITYLEVELS":state.waterLevelCheckbox,"POINT_NAME":state.keywords,"AREA_CODE":"","interfaceId":"b8b91b3f357ca4303b5c9f4b97dcd528"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":state.curTime,"REGION_CODE":global.regionaQuery.regionCode,"CODE_WQDATASOURCETYPE":state.dataSource,"CODE_CONTROLLEVEL":state.controlType,"WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_WATERQUALITYLEVELS":state.waterLevelCheckbox,"POINT_NAME":state.keywords,"AREA_CODE":"","interfaceId":"b8b91b3f357ca4303b5c9f4b97dcd528"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     // 清空列表数据
state.listData = [];

const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  if (state.cardList.length === 3) {
    // 更新列表数据
    state.listData = data.data.map((val) => ({
      REGION_NAME: val.REGION_NAME || '-',
      POINT_NAME: val.POINT_NAME || '-',
      WATERQUALITYLEVELNAME: val.WATERQUALITYLEVELNAME || '-',
      WQDATASOURCETYPENAME: val.WQDATASOURCETYPENAME || '-',
      POINT_CODE: val.POINT_CODE || '', // 点位编码
      iconStatus: `${!!(val.LONGITUDE && val.LATITUDE)}` // 定位
    }));
  }
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空列表数据
state.listData = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getSessionCount: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"AREA_CODE":"","WSYSTEM_CODE":"global.regionaQuery.areaCode","CODE_CONTROLLEVEL":"state.controlType","MONITORTYPE":"0","CODE_WQDATASOURCETYPE":"state.dataSource","MONITORTIME":"state.curTime","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"ff529dcb524c1d5a69757cd08f6231ba"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_CONTROLLEVEL":state.controlType,"MONITORTYPE":"0","CODE_WQDATASOURCETYPE":state.dataSource,"MONITORTIME":state.curTime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"ff529dcb524c1d5a69757cd08f6231ba"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"AREA_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_CONTROLLEVEL":state.controlType,"MONITORTYPE":"0","CODE_WQDATASOURCETYPE":state.dataSource,"MONITORTIME":state.curTime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"ff529dcb524c1d5a69757cd08f6231ba"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getSessionCount'] = res.data;
                
     if (state.cardList.length) {
  state.cardList[0].num = '-';
}

const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  if (state.cardList.length) {
    // 更新断面总数
    state.cardList[0].num = data.data.POINTCOUNT || '-';
  }
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      if (state.cardList.length) {
  state.cardList[0].num = '-';
}
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"WSYSTEM_CODE":"global.regionaQuery.areaCode","CODE_WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","MONITORTYPE":"1","CODE_CONTROLLEVEL":"1,2","IS_CONNECT_SECTION":"all","REGION_CODE":"global.regionaQuery.regionCode","MONITORTIME":"","interfaceId":"5ad1eb7f7bb548cdf95ff43b39300806"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","MONITORTYPE":"1","CODE_CONTROLLEVEL":"1,2","IS_CONNECT_SECTION":"all","REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":"","interfaceId":"5ad1eb7f7bb548cdf95ff43b39300806"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","MONITORTYPE":"1","CODE_CONTROLLEVEL":"1,2","IS_CONNECT_SECTION":"all","REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":"","interfaceId":"5ad1eb7f7bb548cdf95ff43b39300806"});
                   
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DATA_FREQUENCY":"2","WSYSTEM_CODE":"global.regionaQuery.areaCode","CODE_WQDATASOURCETYPE":"state.controlType","AREA_CODE":"","MONITORTYPE":"0","CODE_CONTROLLEVEL":"state.controlType","IS_CONNECT_SECTION":"","REGION_CODE":"global.regionaQuery.regionCode","MONITORTIME":"state.curTime","interfaceId":"6591a49590458cbdeabdf6234961a21c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATA_FREQUENCY":"2","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_WQDATASOURCETYPE":state.controlType,"AREA_CODE":"","MONITORTYPE":"0","CODE_CONTROLLEVEL":state.controlType,"IS_CONNECT_SECTION":"","REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.curTime,"interfaceId":"6591a49590458cbdeabdf6234961a21c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DATA_FREQUENCY":"2","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_WQDATASOURCETYPE":state.controlType,"AREA_CODE":"","MONITORTYPE":"0","CODE_CONTROLLEVEL":state.controlType,"IS_CONNECT_SECTION":"","REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.curTime,"interfaceId":"6591a49590458cbdeabdf6234961a21c"});
                   
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DATA_FREQUENCY":"2","CODE_WQDATASOURCETYPE":"state.controlType","AREA_CODE":"","MONITORTYPE":"0","WSYSTEM_CODE":"global.regionaQuery.areaCode","CODE_CONTROLLEVEL":"state.controlType","IS_CONNECT_SECTION":"","REGION_CODE":"global.regionaQuery.regionCode","MONITORTIME":"state.curTime","interfaceId":"22ff0cb154ffff7a0a001806ee50990d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATA_FREQUENCY":"2","CODE_WQDATASOURCETYPE":state.controlType,"AREA_CODE":"","MONITORTYPE":"0","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_CONTROLLEVEL":state.controlType,"IS_CONNECT_SECTION":"","REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.curTime,"interfaceId":"22ff0cb154ffff7a0a001806ee50990d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DATA_FREQUENCY":"2","CODE_WQDATASOURCETYPE":state.controlType,"AREA_CODE":"","MONITORTYPE":"0","WSYSTEM_CODE":global.regionaQuery.areaCode,"CODE_CONTROLLEVEL":state.controlType,"IS_CONNECT_SECTION":"","REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.curTime,"interfaceId":"22ff0cb154ffff7a0a001806ee50990d"});
                   
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
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getSessionCount', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [state.controlType,state.controlType,state.curTime], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getYJBJQuestion', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [state.controlType,state.controlType,state.curTime], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getYjbjWrw', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-waterMonitoringDay', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterMonitoringDay', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
updateData();
});
// 执行自定义方法
getProvider();
// 执行自定义方法
watchRegionChange();
// 执行自定义方法
initPage();
// 执行自定义方法
onChangeSize();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tColx0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0.default, componentState.tColx0x0x0?.[state.screenSize]));

 const tListCardx0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0x0x0.default, componentState.tListCardx0x0x0x0?.[state.screenSize]));

 const tColx0x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1.default, componentState.tColx0x0x1?.[state.screenSize]));

 const tRowx0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x1x0.default, componentState.tRowx0x0x1x0?.[state.screenSize]));

 const tColx0x0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1x0x0.default, componentState.tColx0x0x1x0x0?.[state.screenSize]));

 const tRectx0x0x1x0x0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0x1x0x0x0.default, componentState.tRectx0x0x1x0x0x0?.[state.screenSize]));

 const tTextCommonx0x0x1x0x0x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x0x1x0x0x1.default, componentState.tTextCommonx0x0x1x0x0x1?.[state.screenSize]));

 const tRowx0x0x1x0x0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x1x0x0x2.default, componentState.tRowx0x0x1x0x0x2?.[state.screenSize]));

 const tTextx0x0x1x0x0x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x1x0x0x2x0.default, componentState.tTextx0x0x1x0x0x2x0?.[state.screenSize]));

 const tTextx0x0x1x0x0x2x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x1x0x0x2x1.default, componentState.tTextx0x0x1x0x0x2x1?.[state.screenSize]));

 const tTextx0x0x1x0x0x2x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x1x0x0x2x2.default, componentState.tTextx0x0x1x0x0x2x2?.[state.screenSize]));

 const tColx0x0x1x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1x0x1.default, componentState.tColx0x0x1x0x1?.[state.screenSize]));

 const tRectx0x0x1x0x1x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0x1x0x1x0.default, componentState.tRectx0x0x1x0x1x0?.[state.screenSize]));

 const tTextCommonx0x0x1x0x1x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x0x1x0x1x1.default, componentState.tTextCommonx0x0x1x0x1x1?.[state.screenSize]));

 const tRowx0x0x1x0x1x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x1x0x1x2.default, componentState.tRowx0x0x1x0x1x2?.[state.screenSize]));

 const tTextx0x0x1x0x1x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x1x0x1x2x0.default, componentState.tTextx0x0x1x0x1x2x0?.[state.screenSize]));

 const tTextx0x0x1x0x1x2x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x1x0x1x2x1.default, componentState.tTextx0x0x1x0x1x2x1?.[state.screenSize]));

 const tColx0x0x2ComputedData = computed(() => _.merge({}, componentState.tColx0x0x2.default, componentState.tColx0x0x2?.[state.screenSize]));

 const tComponentx0x0x2x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0x2x0.default, componentState.tComponentx0x0x2x0?.[state.screenSize]));

 const tTextx0x0x2x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x2x1.default, componentState.tTextx0x0x2x1?.[state.screenSize]));

 const tColx0x0x3ComputedData = computed(() => _.merge({}, componentState.tColx0x0x3.default, componentState.tColx0x0x3?.[state.screenSize]));

 const tListCardx0x0x3x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0x3x0.default, componentState.tListCardx0x0x3x0?.[state.screenSize]));

 const tColx0x0x4ComputedData = computed(() => _.merge({}, componentState.tColx0x0x4.default, componentState.tColx0x0x4?.[state.screenSize]));

 const tTabsBasex0x0x4x0ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x0x4x0.default, componentState.tTabsBasex0x0x4x0?.[state.screenSize]));

 const tColx0x0x5ComputedData = computed(() => _.merge({}, componentState.tColx0x0x5.default, componentState.tColx0x0x5?.[state.screenSize]));

 const tChartDesignx0x0x5x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x0x5x0.default, componentState.tChartDesignx0x0x5x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tChartDesignx0x0x5x1ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x0x5x1.default, componentState.tChartDesignx0x0x5x1?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tColx0x0x6ComputedData = computed(() => _.merge({}, componentState.tColx0x0x6.default, componentState.tColx0x0x6?.[state.screenSize]));

 const tComponentx0x0x6x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0x6x0.default, componentState.tComponentx0x0x6x0?.[state.screenSize]));

 const tTextx0x0x6x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x6x1.default, componentState.tTextx0x0x6x1?.[state.screenSize]));

 const tColx0x0x7ComputedData = computed(() => _.merge({}, componentState.tColx0x0x7.default, componentState.tColx0x0x7?.[state.screenSize]));

 const tCheckboxx0x0x7x0ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x0x7x0.default, componentState.tCheckboxx0x0x7x0?.[state.screenSize]));

 const tColx0x0x8ComputedData = computed(() => _.merge({}, componentState.tColx0x0x8.default, componentState.tColx0x0x8?.[state.screenSize]));

 const tRowx0x0x8x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x8x0.default, componentState.tRowx0x0x8x0?.[state.screenSize]));

 const tColx0x0x8x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x8x0x0.default, componentState.tColx0x0x8x0x0?.[state.screenSize]));

 const tSearchx0x0x8x0x0x0ComputedData = computed(() => _.merge({}, componentState.tSearchx0x0x8x0x0x0.default, componentState.tSearchx0x0x8x0x0x0?.[state.screenSize]));

 const tColx0x0x8x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x8x0x1.default, componentState.tColx0x0x8x0x1?.[state.screenSize]));

 const tButtonx0x0x8x0x1x0ComputedData = computed(() => _.merge({}, componentState.tButtonx0x0x8x0x1x0.default, componentState.tButtonx0x0x8x0x1x0?.[state.screenSize]));

 const tColx0x0x9ComputedData = computed(() => _.merge({}, componentState.tColx0x0x9.default, componentState.tColx0x0x9?.[state.screenSize]));

 const tTablex0x0x9x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x0x9x0.default, componentState.tTablex0x0x9x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tSelectx0x4ComputedData = computed(() => _.merge({}, componentState.tSelectx0x4.default, componentState.tSelectx0x4?.[state.screenSize]));

 const tDatePickerx0x5ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x5.default, componentState.tDatePickerx0x5?.[state.screenSize]));

 const tSelectx0x6ComputedData = computed(() => _.merge({}, componentState.tSelectx0x6.default, componentState.tSelectx0x6?.[state.screenSize]));

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
tRowx0x0ComputedData,
tColx0x0x0ComputedData,
tListCardx0x0x0x0ComputedData,
tColx0x0x1ComputedData,
tRowx0x0x1x0ComputedData,
tColx0x0x1x0x0ComputedData,
tRectx0x0x1x0x0x0ComputedData,
tTextCommonx0x0x1x0x0x1ComputedData,
tRowx0x0x1x0x0x2ComputedData,
tTextx0x0x1x0x0x2x0ComputedData,
tTextx0x0x1x0x0x2x1ComputedData,
tTextx0x0x1x0x0x2x2ComputedData,
tColx0x0x1x0x1ComputedData,
tRectx0x0x1x0x1x0ComputedData,
tTextCommonx0x0x1x0x1x1ComputedData,
tRowx0x0x1x0x1x2ComputedData,
tTextx0x0x1x0x1x2x0ComputedData,
tTextx0x0x1x0x1x2x1ComputedData,
tColx0x0x2ComputedData,
tComponentx0x0x2x0ComputedData,
tTextx0x0x2x1ComputedData,
tColx0x0x3ComputedData,
tListCardx0x0x3x0ComputedData,
tColx0x0x4ComputedData,
tTabsBasex0x0x4x0ComputedData,
tColx0x0x5ComputedData,
tChartDesignx0x0x5x0ComputedData,
tChartDesignx0x0x5x1ComputedData,
tColx0x0x6ComputedData,
tComponentx0x0x6x0ComputedData,
tTextx0x0x6x1ComputedData,
tColx0x0x7ComputedData,
tCheckboxx0x0x7x0ComputedData,
tColx0x0x8ComputedData,
tRowx0x0x8x0ComputedData,
tColx0x0x8x0x0ComputedData,
tSearchx0x0x8x0x0x0ComputedData,
tColx0x0x8x0x1ComputedData,
tButtonx0x0x8x0x1x0ComputedData,
tColx0x0x9ComputedData,
tTablex0x0x9x0ComputedData,
tComponentx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tSelectx0x4ComputedData,
tDatePickerx0x5ComputedData,
tSelectx0x6ComputedData,
oncardClick1734074196591,
ontabClick1773125785675,
onchange1733308713707,
oninput1733314642471,
onclick1734423116611,
oncellClick1733906653732,
onchange1733289402709,
ondateChange1733283973997,
onchange1733289376621,
};
},
};