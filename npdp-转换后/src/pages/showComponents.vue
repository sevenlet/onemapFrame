<template>
  <div id="t-l-c-showComponents" class="t-l-c-showComponents" ><t-text id="t-text-56a1.a53f1935" class="showComponents-t-text-0-0"  :label="tTextx0x0ComputedData.label" :editable="tTextx0x0ComputedData.editable" :c-style="tTextx0x0ComputedData.cStyle"></t-text><t-chart-design id="t-chart-design-9c59.6deb34fd2" class="showComponents-t-chart-design-0-1"  :empty-img="tChartDesignx0x1ComputedData.emptyImg" :c-style="tChartDesignx0x1ComputedData.cStyle" :options="tChartDesignx0x1ComputedData.options"></t-chart-design><t-chart-design id="t-chart-design-a7c7.5b4cb4f1c" class="showComponents-t-chart-design-0-2"  :empty-img="tChartDesignx0x2ComputedData.emptyImg" :c-style="tChartDesignx0x2ComputedData.cStyle" :options="tChartDesignx0x2ComputedData.options"></t-chart-design><t-chart-design id="t-chart-design-af05.b0f48314e" class="showComponents-t-chart-design-0-3"  :empty-img="tChartDesignx0x3ComputedData.emptyImg" :c-style="tChartDesignx0x3ComputedData.cStyle" :options="state.chartOption"></t-chart-design><t-rect id="t-rect-0c6f.2efe00ac6" class="showComponents-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle"></t-rect><t-select id="t-select-65e3.24a7e06b" class="showComponents-t-select-0-5"  :active-value="tSelectx0x5ComputedData.activeValue" :options="tSelectx0x5ComputedData.options" :alias="tSelectx0x5ComputedData.alias" :multiple="tSelectx0x5ComputedData.multiple" :placeholder="tSelectx0x5ComputedData.placeholder" :clearable="tSelectx0x5ComputedData.clearable" :disabled="tSelectx0x5ComputedData.disabled" :name="tSelectx0x5ComputedData.name" :autocomplete="tSelectx0x5ComputedData.autocomplete" :filterable="tSelectx0x5ComputedData.filterable" :no-match-text="tSelectx0x5ComputedData.no-match-text" :no-data-text="tSelectx0x5ComputedData.no-data-text" :c-style="tSelectx0x5ComputedData.cStyle"></t-select><t-text id="t-text-430a.58c36f886" class="showComponents-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle"></t-text><t-list-card id="t-list-card-7bd4.68ab2a05e" class="showComponents-t-list-card-0-7"  :data="tListCardx0x7ComputedData.data" :spacing-x="tListCardx0x7ComputedData.spacingX" :col="tListCardx0x7ComputedData.col" :direction="tListCardx0x7ComputedData.direction" :exchange-order="tListCardx0x7ComputedData.exchangeOrder" :unit-break="tListCardx0x7ComputedData.unitBreak" :key-field="tListCardx0x7ComputedData.keyField" :active-key-field="tListCardx0x7ComputedData.activeKeyField" :active="tListCardx0x7ComputedData.active" :c-style="tListCardx0x7ComputedData.cStyle"></t-list-card><t-list-card id="t-list-card-f85e.892111415" class="showComponents-t-list-card-0-8"  :data="state.cards" :spacing-x="tListCardx0x8ComputedData.spacingX" :col="tListCardx0x8ComputedData.col" :direction="tListCardx0x8ComputedData.direction" :exchange-order="tListCardx0x8ComputedData.exchangeOrder" :unit-break="tListCardx0x8ComputedData.unitBreak" :key-field="tListCardx0x8ComputedData.keyField" :active-key-field="tListCardx0x8ComputedData.activeKeyField" :active="tListCardx0x8ComputedData.active" :c-style="tListCardx0x8ComputedData.cStyle"></t-list-card><t-table id="t-table-e574.bfe6d14c4" class="showComponents-t-table-0-9"  :height="tTablex0x9ComputedData.height" :stripe="tTablex0x9ComputedData.stripe" :border="tTablex0x9ComputedData.border" :auto-scroll="tTablex0x9ComputedData.autoScroll" :speed="tTablex0x9ComputedData.speed" :columns="tTablex0x9ComputedData.columns" :data="tTablex0x9ComputedData.data" :default-sort="tTablex0x9ComputedData.defaultSort" :c-style="tTablex0x9ComputedData.cStyle"></t-table><t-rect id="t-rect-b9f7.5d8c3d46f" class="showComponents-t-rect-0-10"  :tip="tRectx0x10ComputedData.tip" :label="tRectx0x10ComputedData.label" :active="tRectx0x10ComputedData.active" :c-style="tRectx0x10ComputedData.cStyle"></t-rect><t-component id="t-component-87f6.36395d119" class="showComponents-t-component-0-11"  :name="tComponentx0x11ComputedData.name" :c-style="tComponentx0x11ComputedData.cStyle" :src="tComponentx0x11ComputedData.src" :component-name="tComponentx0x11ComputedData.componentName"></t-component><t-rect id="t-rect-cc7c.74aa1e8ec" class="showComponents-t-rect-0-12"  :tip="tRectx0x12ComputedData.tip" :label="tRectx0x12ComputedData.label" :active="tRectx0x12ComputedData.active" :c-style="tRectx0x12ComputedData.cStyle"></t-rect><t-text id="t-text-34b2.f100c307e" class="showComponents-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle"></t-text><t-tabs id="t-tabs-c156.71186e438" class="showComponents-t-tabs-0-14"  :data="tTabsx0x14ComputedData.data" :active-tab="tTabsx0x14ComputedData.activeTab" :tab-position-extend="tTabsx0x14ComputedData.tabPositionExtend" :stretch="tTabsx0x14ComputedData.stretch" :c-style="tTabsx0x14ComputedData.cStyle"></t-tabs><t-rect id="t-rect-de4d.860bb23f3" class="showComponents-t-rect-0-15"  :tip="tRectx0x15ComputedData.tip" :label="tRectx0x15ComputedData.label" :active="tRectx0x15ComputedData.active" :c-style="tRectx0x15ComputedData.cStyle"></t-rect><t-text id="t-text-a8a6.2e37c5614" class="showComponents-t-text-0-16"  :label="tTextx0x16ComputedData.label" :editable="tTextx0x16ComputedData.editable" :c-style="tTextx0x16ComputedData.cStyle"></t-text><t-rect id="t-rect-d6aa.f72dc3498" class="showComponents-t-rect-0-17"  :tip="tRectx0x17ComputedData.tip" :label="tRectx0x17ComputedData.label" :active="tRectx0x17ComputedData.active" :c-style="tRectx0x17ComputedData.cStyle"></t-rect><t-text id="t-text-64b5.bd7fdd022" class="showComponents-t-text-0-18"  :label="tTextx0x18ComputedData.label" :c-style="tTextx0x18ComputedData.cStyle"></t-text><t-rect id="t-rect-d34e.698965c8e" class="showComponents-t-rect-0-19"  :tip="tRectx0x19ComputedData.tip" :label="tRectx0x19ComputedData.label" :active="tRectx0x19ComputedData.active" :c-style="tRectx0x19ComputedData.cStyle"></t-rect><t-circle id="t-circle-6c04.1eec10bf5" class="showComponents-t-circle-0-20"  :tip="tCirclex0x20ComputedData.tip" :label="tCirclex0x20ComputedData.label" :active="tCirclex0x20ComputedData.active" :c-style="tCirclex0x20ComputedData.cStyle"></t-circle><t-text id="t-text-0704.93a06f8ea" class="showComponents-t-text-0-21"  :label="tTextx0x21ComputedData.label" :c-style="tTextx0x21ComputedData.cStyle"></t-text><t-text id="t-text-1175.839fb720c" class="showComponents-t-text-0-22"  :label="tTextx0x22ComputedData.label" :editable="tTextx0x22ComputedData.editable" :c-style="tTextx0x22ComputedData.cStyle"></t-text><t-text id="t-text-2528.8a8d332b1" class="showComponents-t-text-0-23"  :label="tTextx0x23ComputedData.label" :c-style="tTextx0x23ComputedData.cStyle"></t-text><t-text id="t-text-ae51.c81b0640e" class="showComponents-t-text-0-24"  :label="tTextx0x24ComputedData.label" :c-style="tTextx0x24ComputedData.cStyle"></t-text><t-scrollable-cards id="t-scrollable-cards-d547.417f1e8af" class="showComponents-t-scrollable-cards-0-25"  :c-style="tScrollableCardsx0x25ComputedData.cStyle" :auto-scroll="tScrollableCardsx0x25ComputedData.autoScroll" :tab="tScrollableCardsx0x25ComputedData.tab" :key-word="tScrollableCardsx0x25ComputedData.keyWord" :default-checked="tScrollableCardsx0x25ComputedData.defaultChecked" :speed="tScrollableCardsx0x25ComputedData.speed" :interval="tScrollableCardsx0x25ComputedData.interval" :card-space="tScrollableCardsx0x25ComputedData.cardSpace" :direction="tScrollableCardsx0x25ComputedData.direction" :data-alias="tScrollableCardsx0x25ComputedData.dataAlias" :data="state.cardList"></t-scrollable-cards><t-text id="t-text-0c0d.811ed0d72" class="showComponents-t-text-0-26"  :label="tTextx0x26ComputedData.label" :c-style="tTextx0x26ComputedData.cStyle"></t-text><t-row id="t-row-1dbd.db8f333ed" class="showComponents-t-row-0-27"  :c-style="tRowx0x27ComputedData.cStyle" :gutter="tRowx0x27ComputedData.gutter" :justify="tRowx0x27ComputedData.justify" :align="tRowx0x27ComputedData.align"><t-text id="t-text-a13e.3b3b580b8" class="showComponents-t-text-0-27-0"  :label="tTextx0x27x0ComputedData.label" :editable="tTextx0x27x0ComputedData.editable" :c-style="tTextx0x27x0ComputedData.cStyle" :show-title="tTextx0x27x0ComputedData.showTitle"></t-text><t-text id="t-text-88ec.1468df556" class="showComponents-t-text-0-27-1"  :label="tTextx0x27x1ComputedData.label" :editable="tTextx0x27x1ComputedData.editable" :c-style="tTextx0x27x1ComputedData.cStyle"></t-text><t-list-card-common id="t-list-card-common-0d7b.70495297a" class="showComponents-t-list-card-common-0-27-2"  :c-style="tListCardCommonx0x27x2ComputedData.cStyle" :key-word="tListCardCommonx0x27x2ComputedData.keyWord" :default-checked="tListCardCommonx0x27x2ComputedData.defaultChecked" :tab="tListCardCommonx0x27x2ComputedData.tab" :collapse="tListCardCommonx0x27x2ComputedData.collapse" :collapse-text="tListCardCommonx0x27x2ComputedData.collapseText" :display-count="tListCardCommonx0x27x2ComputedData.displayCount" :data-alias="tListCardCommonx0x27x2ComputedData.dataAlias" :data="tListCardCommonx0x27x2ComputedData.data"></t-list-card-common><t-list-card-common id="t-list-card-common-6fc4.93d4a76a7" class="showComponents-t-list-card-common-0-27-3"  :c-style="tListCardCommonx0x27x3ComputedData.cStyle" :key-word="tListCardCommonx0x27x3ComputedData.keyWord" :default-checked="tListCardCommonx0x27x3ComputedData.defaultChecked" :tab="tListCardCommonx0x27x3ComputedData.tab" :collapse="tListCardCommonx0x27x3ComputedData.collapse" :collapse-text="tListCardCommonx0x27x3ComputedData.collapseText" :display-count="tListCardCommonx0x27x3ComputedData.displayCount" :data-alias="tListCardCommonx0x27x3ComputedData.dataAlias" :data="tListCardCommonx0x27x3ComputedData.data"></t-list-card-common><t-rect id="t-rect-78bf.c8340035d" class="showComponents-t-rect-0-27-4"  :tip="tRectx0x27x4ComputedData.tip" :label="tRectx0x27x4ComputedData.label" :active="tRectx0x27x4ComputedData.active" :c-style="tRectx0x27x4ComputedData.cStyle"></t-rect></t-row><t-switch id="t-switch-9d8d.877fc4ffc" class="showComponents-t-switch-0-28"  :value="tSwitchx0x28ComputedData.value" :c-style="tSwitchx0x28ComputedData.cStyle"></t-switch><t-text id="t-text-4c4b.e9dc2fe3e" class="showComponents-t-text-0-29"  :label="tTextx0x29ComputedData.label" :c-style="tTextx0x29ComputedData.cStyle"></t-text><t-rect id="t-rect-cc27.1318c2b7d" class="showComponents-t-rect-0-30"  :tip="tRectx0x30ComputedData.tip" :label="tRectx0x30ComputedData.label" :active="tRectx0x30ComputedData.active" :c-style="tRectx0x30ComputedData.cStyle"></t-rect><t-rect id="t-rect-e97c.c2d220f02" class="showComponents-t-rect-0-31"  :tip="tRectx0x31ComputedData.tip" :label="tRectx0x31ComputedData.label" :active="tRectx0x31ComputedData.active" :c-style="tRectx0x31ComputedData.cStyle"></t-rect><t-rect id="t-rect-f185.afa9bcd9e" class="showComponents-t-rect-0-32"  :tip="tRectx0x32ComputedData.tip" :label="tRectx0x32ComputedData.label" :active="tRectx0x32ComputedData.active" :c-style="tRectx0x32ComputedData.cStyle"></t-rect><t-chart-liquidfill id="t-chart-liquidfill-65c3.0efa74df8" class="showComponents-t-chart-liquidfill-0-33"  :c-style="tChartLiquidfillx0x33ComputedData.cStyle" :data="tChartLiquidfillx0x33ComputedData.data" :series-setting="tChartLiquidfillx0x33ComputedData.seriesSetting" :options="tChartLiquidfillx0x33ComputedData.options" :value="tChartLiquidfillx0x33ComputedData.value" :name="tChartLiquidfillx0x33ComputedData.name" :liquidfill="componentState.tChartLiquidfillx0x33.liquidfill"></t-chart-liquidfill><t-rect id="t-rect-6e7d.ba079bd2a" class="showComponents-t-rect-0-34"  :tip="tRectx0x34ComputedData.tip" :label="tRectx0x34ComputedData.label" :active="tRectx0x34ComputedData.active" :c-style="tRectx0x34ComputedData.cStyle"></t-rect><t-rect id="t-rect-9a95.04f6d03a7" class="showComponents-t-rect-0-35"  :tip="tRectx0x35ComputedData.tip" :label="tRectx0x35ComputedData.label" :active="tRectx0x35ComputedData.active" :c-style="tRectx0x35ComputedData.cStyle"></t-rect><t-rect id="t-rect-d8e8.87120fbed" class="showComponents-t-rect-0-36"  :tip="tRectx0x36ComputedData.tip" :label="tRectx0x36ComputedData.label" :active="tRectx0x36ComputedData.active" :c-style="tRectx0x36ComputedData.cStyle"></t-rect><t-row id="t-row-6c45.93f006f13" class="showComponents-t-row-0-37"  :c-style="tRowx0x37ComputedData.cStyle" :gutter="tRowx0x37ComputedData.gutter" :justify="tRowx0x37ComputedData.justify" :align="tRowx0x37ComputedData.align"><t-text id="t-text-361c.087f35235" class="showComponents-t-text-0-37-0"  :label="tTextx0x37x0ComputedData.label" :editable="tTextx0x37x0ComputedData.editable" :c-style="tTextx0x37x0ComputedData.cStyle"></t-text><t-text id="t-text-dd05.750eb9874" class="showComponents-t-text-0-37-1"  :label="tTextx0x37x1ComputedData.label" :editable="tTextx0x37x1ComputedData.editable" :c-style="tTextx0x37x1ComputedData.cStyle"></t-text></t-row><t-rect id="t-rect-85ae.be3a9f59c" class="showComponents-t-rect-0-38"  :tip="tRectx0x38ComputedData.tip" :label="tRectx0x38ComputedData.label" :active="tRectx0x38ComputedData.active" :c-style="tRectx0x38ComputedData.cStyle"></t-rect><t-text id="t-text-b386.820a2d196" class="showComponents-t-text-0-39"  :label="tTextx0x39ComputedData.label" :c-style="tTextx0x39ComputedData.cStyle"></t-text><t-rect id="t-rect-b611.1ff42f945" class="showComponents-t-rect-0-40"  :tip="tRectx0x40ComputedData.tip" :label="tRectx0x40ComputedData.label" :active="tRectx0x40ComputedData.active" :c-style="tRectx0x40ComputedData.cStyle"></t-rect><t-text id="t-text-838d.110b72e21" class="showComponents-t-text-0-41"  :label="tTextx0x41ComputedData.label" :c-style="tTextx0x41ComputedData.cStyle"></t-text><t-text id="t-text-16d8.b313aa95b" class="showComponents-t-text-0-42"  :label="tTextx0x42ComputedData.label" :c-style="tTextx0x42ComputedData.cStyle"></t-text><t-text id="t-text-e516.a8e08680a" class="showComponents-t-text-0-43"  :label="tTextx0x43ComputedData.label" :c-style="tTextx0x43ComputedData.cStyle"></t-text><t-text id="t-text-84b7.f6eef3298" class="showComponents-t-text-0-44"  :label="tTextx0x44ComputedData.label" :c-style="tTextx0x44ComputedData.cStyle"></t-text><t-text id="t-text-c707.3b4d4cab6" class="showComponents-t-text-0-45"  :label="tTextx0x45ComputedData.label" :c-style="tTextx0x45ComputedData.cStyle"></t-text><t-text id="t-text-2be9.18d0b3e93" class="showComponents-t-text-0-46"  :label="tTextx0x46ComputedData.label" :c-style="tTextx0x46ComputedData.cStyle"></t-text><t-rect id="t-rect-0000.2fd9dcf47" class="showComponents-t-rect-0-47"  :tip="tRectx0x47ComputedData.tip" :label="tRectx0x47ComputedData.label" :active="tRectx0x47ComputedData.active" :c-style="tRectx0x47ComputedData.cStyle"></t-rect><t-rect id="t-rect-46e2.96da17684" class="showComponents-t-rect-0-48"  :tip="tRectx0x48ComputedData.tip" :label="tRectx0x48ComputedData.label" :active="tRectx0x48ComputedData.active" :c-style="tRectx0x48ComputedData.cStyle"></t-rect><t-rect id="t-rect-640d.0ca1febce" class="showComponents-t-rect-0-49"  :tip="tRectx0x49ComputedData.tip" :label="tRectx0x49ComputedData.label" :active="tRectx0x49ComputedData.active" :c-style="tRectx0x49ComputedData.cStyle"></t-rect><t-rect id="t-rect-7210.de69e4881" class="showComponents-t-rect-0-50"  :tip="tRectx0x50ComputedData.tip" :label="tRectx0x50ComputedData.label" :active="tRectx0x50ComputedData.active" :c-style="tRectx0x50ComputedData.cStyle"></t-rect><t-chart-liquidfill id="t-chart-liquidfill-f3f6.95cbd6982" class="showComponents-t-chart-liquidfill-0-51"  :c-style="tChartLiquidfillx0x51ComputedData.cStyle" :data="tChartLiquidfillx0x51ComputedData.data" :series-setting="tChartLiquidfillx0x51ComputedData.seriesSetting" :options="tChartLiquidfillx0x51ComputedData.options" :value="tChartLiquidfillx0x51ComputedData.value" :name="tChartLiquidfillx0x51ComputedData.name" :liquidfill="componentState.tChartLiquidfillx0x51.liquidfill"></t-chart-liquidfill><t-row id="t-row-c883.f8bef0542" class="showComponents-t-row-0-52"  :c-style="tRowx0x52ComputedData.cStyle" :gutter="tRowx0x52ComputedData.gutter" :justify="tRowx0x52ComputedData.justify" :align="tRowx0x52ComputedData.align"><t-text id="t-text-797b.16841cccf" class="showComponents-t-text-0-52-0"  :label="tTextx0x52x0ComputedData.label" :editable="tTextx0x52x0ComputedData.editable" :c-style="tTextx0x52x0ComputedData.cStyle"></t-text><t-text id="t-text-9edc.ee5e48b1" class="showComponents-t-text-0-52-1"  :label="tTextx0x52x1ComputedData.label" :editable="tTextx0x52x1ComputedData.editable" :c-style="tTextx0x52x1ComputedData.cStyle"></t-text></t-row><t-table id="t-table-64a6.3fa20f0d6" class="showComponents-t-table-0-53"  :height="tTablex0x53ComputedData.height" :stripe="tTablex0x53ComputedData.stripe" :border="tTablex0x53ComputedData.border" :auto-scroll="tTablex0x53ComputedData.autoScroll" :speed="tTablex0x53ComputedData.speed" :columns="tTablex0x53ComputedData.columns" :data="tTablex0x53ComputedData.data" :default-sort="tTablex0x53ComputedData.defaultSort" :c-style="tTablex0x53ComputedData.cStyle"></t-table><t-rect id="t-rect-96df.54d962628" class="showComponents-t-rect-0-54"  :tip="tRectx0x54ComputedData.tip" :label="tRectx0x54ComputedData.label" :active="tRectx0x54ComputedData.active" :c-style="tRectx0x54ComputedData.cStyle"></t-rect><t-rect id="t-rect-97cc.13a701f65" class="showComponents-t-rect-0-55"  :tip="tRectx0x55ComputedData.tip" :label="tRectx0x55ComputedData.label" :active="tRectx0x55ComputedData.active" :c-style="tRectx0x55ComputedData.cStyle"></t-rect><t-rect id="t-rect-a058.7b4296792" class="showComponents-t-rect-0-56"  :tip="tRectx0x56ComputedData.tip" :label="tRectx0x56ComputedData.label" :active="tRectx0x56ComputedData.active" :c-style="tRectx0x56ComputedData.cStyle"></t-rect><t-rect id="t-rect-2a7c.3a3bd0927" class="showComponents-t-rect-0-57"  :tip="tRectx0x57ComputedData.tip" :label="tRectx0x57ComputedData.label" :active="tRectx0x57ComputedData.active" :c-style="tRectx0x57ComputedData.cStyle"></t-rect><t-text id="t-text-f468.aefc99553" class="showComponents-t-text-0-58"  :label="tTextx0x58ComputedData.label" :c-style="tTextx0x58ComputedData.cStyle"></t-text><t-text id="t-text-7da4.d436a323b" class="showComponents-t-text-0-59"  :label="tTextx0x59ComputedData.label" :editable="tTextx0x59ComputedData.editable" :c-style="tTextx0x59ComputedData.cStyle"></t-text><t-rect id="t-rect-b082.6c45d3264" class="showComponents-t-rect-0-60"  :tip="tRectx0x60ComputedData.tip" :label="tRectx0x60ComputedData.label" :active="tRectx0x60ComputedData.active" :c-style="tRectx0x60ComputedData.cStyle"></t-rect><t-text id="t-text-84ea.a427ca1eb" class="showComponents-t-text-0-61"  :label="tTextx0x61ComputedData.label" :editable="tTextx0x61ComputedData.editable" :c-style="tTextx0x61ComputedData.cStyle"></t-text><t-rect id="t-rect-6d2b.e92e62772" class="showComponents-t-rect-0-62"  :tip="tRectx0x62ComputedData.tip" :label="tRectx0x62ComputedData.label" :active="tRectx0x62ComputedData.active" :c-style="tRectx0x62ComputedData.cStyle"></t-rect><t-text id="t-text-ccdb.28a15e4e7" class="showComponents-t-text-0-63"  :label="tTextx0x63ComputedData.label" :editable="tTextx0x63ComputedData.editable" :c-style="tTextx0x63ComputedData.cStyle"></t-text><t-list-card id="t-list-card-81f3.5b8e41dd6" class="showComponents-t-list-card-0-64"  :data="tListCardx0x64ComputedData.data" :spacing-x="tListCardx0x64ComputedData.spacingX" :col="tListCardx0x64ComputedData.col" :direction="tListCardx0x64ComputedData.direction" :exchange-order="tListCardx0x64ComputedData.exchangeOrder" :unit-break="tListCardx0x64ComputedData.unitBreak" :key-field="tListCardx0x64ComputedData.keyField" :active-key-field="tListCardx0x64ComputedData.activeKeyField" :active="tListCardx0x64ComputedData.active" :c-style="tListCardx0x64ComputedData.cStyle"></t-list-card><t-list-card id="t-list-card-c296.5812313a5" class="showComponents-t-list-card-0-65"  :data="tListCardx0x65ComputedData.data" :spacing-x="tListCardx0x65ComputedData.spacingX" :col="tListCardx0x65ComputedData.col" :direction="tListCardx0x65ComputedData.direction" :exchange-order="tListCardx0x65ComputedData.exchangeOrder" :unit-break="tListCardx0x65ComputedData.unitBreak" :key-field="tListCardx0x65ComputedData.keyField" :active-key-field="tListCardx0x65ComputedData.activeKeyField" :active="tListCardx0x65ComputedData.active" :c-style="tListCardx0x65ComputedData.cStyle"></t-list-card><t-rect id="t-rect-6540.e3a4e5462" class="showComponents-t-rect-0-66"  :tip="tRectx0x66ComputedData.tip" :label="tRectx0x66ComputedData.label" :active="tRectx0x66ComputedData.active" :c-style="tRectx0x66ComputedData.cStyle"></t-rect><t-tabs id="t-tabs-3fa8.c6881afdb" class="showComponents-t-tabs-0-67"  :alias="tTabsx0x67ComputedData.alias" :data="tTabsx0x67ComputedData.data" :active-tab="tTabsx0x67ComputedData.activeTab" :tab-position-extend="tTabsx0x67ComputedData.tabPositionExtend" :stretch="tTabsx0x67ComputedData.stretch" :c-style="tTabsx0x67ComputedData.cStyle"></t-tabs><t-tabs id="t-tabs-08c5.736d66025" class="showComponents-t-tabs-0-68"  :alias="tTabsx0x68ComputedData.alias" :data="tTabsx0x68ComputedData.data" :active-tab="tTabsx0x68ComputedData.activeTab" :tab-position-extend="tTabsx0x68ComputedData.tabPositionExtend" :stretch="tTabsx0x68ComputedData.stretch" :c-style="tTabsx0x68ComputedData.cStyle"></t-tabs><t-tabs-base id="t-tabs-base-9987.8a0b9f095" class="showComponents-t-tabs-base-0-69"  :data="tTabsBasex0x69ComputedData.data" :space="tTabsBasex0x69ComputedData.space" :selected-tab-val="tTabsBasex0x69ComputedData.selectedTabVal" :inner-shadow-color="tTabsBasex0x69ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x69ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x69ComputedData.alias" :c-style="tTabsBasex0x69ComputedData.cStyle"></t-tabs-base><t-input id="t-input-e370.26505315c" class="showComponents-t-input-0-70"  :type="tInputx0x70ComputedData.type" :input-value="tInputx0x70ComputedData.inputValue" :maxlength="tInputx0x70ComputedData.maxlength" :minlength="tInputx0x70ComputedData.minlength" :show-word-limit="tInputx0x70ComputedData.showWordLimit" :placeholder="tInputx0x70ComputedData.placeholder" :clearable="tInputx0x70ComputedData.clearable" :show-password="tInputx0x70ComputedData.showPassword" :disabled="tInputx0x70ComputedData.disabled" :prefix-icon="tInputx0x70ComputedData.prefix-icon" :suffix-icon="tInputx0x70ComputedData.suffix-icon" :rows="tInputx0x70ComputedData.rows" :autosize="tInputx0x70ComputedData.autosize" :name="tInputx0x70ComputedData.name" :readonly="tInputx0x70ComputedData.readonly" :step="tInputx0x70ComputedData.step" :autofocus="tInputx0x70ComputedData.autofocus" :form="tInputx0x70ComputedData.form" :label="tInputx0x70ComputedData.label" :tabindex="tInputx0x70ComputedData.tabindex" :validate-event="tInputx0x70ComputedData.validateEvent" :c-style="tInputx0x70ComputedData.cStyle"></t-input><t-checkbox id="t-checkbox-3b30.ade9ba6db" class="showComponents-t-checkbox-0-71"  :data="tCheckboxx0x71ComputedData.data" :active="tCheckboxx0x71ComputedData.active" :data-alias="tCheckboxx0x71ComputedData.dataAlias" :border="tCheckboxx0x71ComputedData.border" :use-button="tCheckboxx0x71ComputedData.useButton" :c-style="tCheckboxx0x71ComputedData.cStyle"></t-checkbox><t-radio id="t-radio-86a0.b0c84c7bb" class="showComponents-t-radio-0-72"  :options="tRadiox0x72ComputedData.options" :active="tRadiox0x72ComputedData.active" :alias="tRadiox0x72ComputedData.alias" :disabled="tRadiox0x72ComputedData.disabled" :border="tRadiox0x72ComputedData.border" :size="tRadiox0x72ComputedData.size" :is-use-button="tRadiox0x72ComputedData.isUseButton" :c-style="tRadiox0x72ComputedData.cStyle"></t-radio><t-search id="t-search-fb80.cee7dd991" class="showComponents-t-search-0-73"  :type="tSearchx0x73ComputedData.type" :input-value="tSearchx0x73ComputedData.inputValue" :maxlength="tSearchx0x73ComputedData.maxlength" :minlength="tSearchx0x73ComputedData.minlength" :show-word-limit="tSearchx0x73ComputedData.showWordLimit" :placeholder="tSearchx0x73ComputedData.placeholder" :clearable="tSearchx0x73ComputedData.clearable" :show-password="tSearchx0x73ComputedData.showPassword" :disabled="tSearchx0x73ComputedData.disabled" :prefix-icon="tSearchx0x73ComputedData.prefix-icon" :suffix-icon="tSearchx0x73ComputedData.suffix-icon" :rows="tSearchx0x73ComputedData.rows" :autosize="tSearchx0x73ComputedData.autosize" :name="tSearchx0x73ComputedData.name" :readonly="tSearchx0x73ComputedData.readonly" :step="tSearchx0x73ComputedData.step" :autofocus="tSearchx0x73ComputedData.autofocus" :form="tSearchx0x73ComputedData.form" :label="tSearchx0x73ComputedData.label" :tabindex="tSearchx0x73ComputedData.tabindex" :validate-event="tSearchx0x73ComputedData.validateEvent" :c-style="tSearchx0x73ComputedData.cStyle" :has-search-btn="tSearchx0x73ComputedData.hasSearchBtn"></t-search><t-date-picker id="t-date-picker-a839.a5fd0e083" class="showComponents-t-date-picker-0-74"  :placeholder="tDatePickerx0x74ComputedData.placeholder" :start-placeholder="tDatePickerx0x74ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x74ComputedData.endPlaceholder" :type="tDatePickerx0x74ComputedData.type" :clearable="tDatePickerx0x74ComputedData.clearable" :range-separator="tDatePickerx0x74ComputedData.rangeSeparator" :default-date="tDatePickerx0x74ComputedData.default-date" :separator="tDatePickerx0x74ComputedData.separator" :readonly="tDatePickerx0x74ComputedData.readonly" :editable="tDatePickerx0x74ComputedData.editable" :c-style="tDatePickerx0x74ComputedData.cStyle"></t-date-picker><t-circle id="t-circle-f240.807778808" class="showComponents-t-circle-0-75"  :tip="tCirclex0x75ComputedData.tip" :label="tCirclex0x75ComputedData.label" :active="tCirclex0x75ComputedData.active" :c-style="tCirclex0x75ComputedData.cStyle"></t-circle><t-text id="t-text-ed49.80f493513" class="showComponents-t-text-0-76"  :label="tTextx0x76ComputedData.label" :editable="tTextx0x76ComputedData.editable" :c-style="tTextx0x76ComputedData.cStyle"></t-text><t-image-base id="t-image-base-6588.98f5032f9" class="showComponents-t-image-base-0-77"  :src="tImageBasex0x77ComputedData.src" :fit="tImageBasex0x77ComputedData.fit" :c-style="tImageBasex0x77ComputedData.cStyle"></t-image-base><t-chart-pie-percent id="t-chart-pie-percent-9a0b.c8cdd6009" class="showComponents-t-chart-pie-percent-0-78"  :empty-img="tChartPiePercentx0x78ComputedData.emptyImg" :data="tChartPiePercentx0x78ComputedData.data" :series-style="tChartPiePercentx0x78ComputedData.seriesStyle" :c-style="tChartPiePercentx0x78ComputedData.cStyle" :options="tChartPiePercentx0x78ComputedData.options" :pie="componentState.tChartPiePercentx0x78.pie"></t-chart-pie-percent><t-text-unit id="t-text-unit-06aa.b20b92aae" class="showComponents-t-text-unit-0-79"  :c-style="tTextUnitx0x79ComputedData.cStyle" :justify="tTextUnitx0x79ComputedData.justify" :align="tTextUnitx0x79ComputedData.align" :content="tTextUnitx0x79ComputedData.content" :unit="tTextUnitx0x79ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x79ComputedData.showOverflowTooltip"></t-text-unit><t-rank-single id="t-rank-single-013a.95e2dda08" class="showComponents-t-rank-single-0-80"  :icon-src="tRankSinglex0x80ComputedData.iconSrc" :data="tRankSinglex0x80ComputedData.data" :c-style="tRankSinglex0x80ComputedData.cStyle" :tab="tRankSinglex0x80ComputedData.tab" :key-word="tRankSinglex0x80ComputedData.keyWord" :default-checked="tRankSinglex0x80ComputedData.defaultChecked" :auto-scroll="tRankSinglex0x80ComputedData.autoScroll" :speed="tRankSinglex0x80ComputedData.speed" :data-style="tRankSinglex0x80ComputedData.dataStyle"></t-rank-single><t-rank-single id="t-rank-single-1171.c48708b05" class="showComponents-t-rank-single-0-81"  :icon-src="tRankSinglex0x81ComputedData.iconSrc" :data="tRankSinglex0x81ComputedData.data" :c-style="tRankSinglex0x81ComputedData.cStyle" :tab="tRankSinglex0x81ComputedData.tab" :key-word="tRankSinglex0x81ComputedData.keyWord" :default-checked="tRankSinglex0x81ComputedData.defaultChecked" :auto-scroll="tRankSinglex0x81ComputedData.autoScroll" :speed="tRankSinglex0x81ComputedData.speed" :data-style="tRankSinglex0x81ComputedData.dataStyle"></t-rank-single><t-tabs id="t-tabs-191f.cbbe437a3" class="showComponents-t-tabs-0-82"  :alias="tTabsx0x82ComputedData.alias" :data="tTabsx0x82ComputedData.data" :active-tab="tTabsx0x82ComputedData.activeTab" :tab-position-extend="tTabsx0x82ComputedData.tabPositionExtend" :stretch="tTabsx0x82ComputedData.stretch" :c-style="tTabsx0x82ComputedData.cStyle"></t-tabs><t-tabs id="t-tabs-2ded.5b0befb05" class="showComponents-t-tabs-0-83"  :alias="tTabsx0x83ComputedData.alias" :data="state.tabs" :active-tab="state.activeTab" :tab-position-extend="tTabsx0x83ComputedData.tabPositionExtend" :stretch="tTabsx0x83ComputedData.stretch" :c-style="tTabsx0x83ComputedData.cStyle" @tab-click="ontabClick1733455647841"></t-tabs><t-chart-pie-doughnut-data id="t-chart-pie-doughnut-data-e598.f2aa9f4e" class="showComponents-t-chart-pie-doughnut-data-0-84"  :data="tChartPieDoughnutDatax0x84ComputedData.data" :alias="tChartPieDoughnutDatax0x84ComputedData.alias" :unit="tChartPieDoughnutDatax0x84ComputedData.unit" :inner-text="tChartPieDoughnutDatax0x84ComputedData.innerText" :radius="tChartPieDoughnutDatax0x84ComputedData.radius" :separation="tChartPieDoughnutDatax0x84ComputedData.separation" :shadow-radius="tChartPieDoughnutDatax0x84ComputedData.shadowRadius" :shadow-style="tChartPieDoughnutDatax0x84ComputedData.shadowStyle" :show-inner="tChartPieDoughnutDatax0x84ComputedData.showInner" :show-list="tChartPieDoughnutDatax0x84ComputedData.showList" :list-style="tChartPieDoughnutDatax0x84ComputedData.listStyle" :options="tChartPieDoughnutDatax0x84ComputedData.options" :c-style="tChartPieDoughnutDatax0x84ComputedData.cStyle" :inner-style="tChartPieDoughnutDatax0x84ComputedData.innerStyle"></t-chart-pie-doughnut-data><t-chart-pie-border id="t-chart-pie-border-e3f7.befb98286" class="showComponents-t-chart-pie-border-0-85"  :data="tChartPieBorderx0x85ComputedData.data" :alias="tChartPieBorderx0x85ComputedData.alias" :unit="tChartPieBorderx0x85ComputedData.unit" :radius="tChartPieBorderx0x85ComputedData.radius" :separation="tChartPieBorderx0x85ComputedData.separation" :show-inner="tChartPieBorderx0x85ComputedData.showInner" :inner-style="tChartPieBorderx0x85ComputedData.innerStyle" :show-list="tChartPieBorderx0x85ComputedData.showList" :list-style="tChartPieBorderx0x85ComputedData.listStyle" :options="tChartPieBorderx0x85ComputedData.options" :c-style="tChartPieBorderx0x85ComputedData.cStyle"></t-chart-pie-border><t-button id="t-button-6336.98436f834" class="showComponents-t-button-0-86"  :label="tButtonx0x86ComputedData.label" :round="tButtonx0x86ComputedData.round" :plain="tButtonx0x86ComputedData.plain" :disabled="tButtonx0x86ComputedData.disabled" :type="tButtonx0x86ComputedData.type" :size="tButtonx0x86ComputedData.size" :native-type="tButtonx0x86ComputedData.native-type" :c-style="tButtonx0x86ComputedData.cStyle"></t-button><t-circle id="t-circle-82b4.278bfb08e" class="showComponents-t-circle-0-87"  :tip="tCirclex0x87ComputedData.tip" :label="tCirclex0x87ComputedData.label" :active="tCirclex0x87ComputedData.active" :c-style="tCirclex0x87ComputedData.cStyle"></t-circle><t-circle id="t-circle-503e.8790d4c43" class="showComponents-t-circle-0-88"  :tip="tCirclex0x88ComputedData.tip" :label="tCirclex0x88ComputedData.label" :active="tCirclex0x88ComputedData.active" :c-style="tCirclex0x88ComputedData.cStyle"></t-circle><t-rect id="t-rect-7ba3.176060c75" class="showComponents-t-rect-0-89"  :tip="tRectx0x89ComputedData.tip" :label="tRectx0x89ComputedData.label" :active="tRectx0x89ComputedData.active" :c-style="tRectx0x89ComputedData.cStyle"></t-rect><t-rect id="t-rect-2eaa.4c1a18caf" class="showComponents-t-rect-0-90"  :tip="tRectx0x90ComputedData.tip" :label="tRectx0x90ComputedData.label" :active="tRectx0x90ComputedData.active" :c-style="tRectx0x90ComputedData.cStyle"></t-rect><t-rect id="t-rect-81a9.2d0fec867" class="showComponents-t-rect-0-91"  :tip="tRectx0x91ComputedData.tip" :label="tRectx0x91ComputedData.label" :active="tRectx0x91ComputedData.active" :c-style="tRectx0x91ComputedData.cStyle"></t-rect><t-rect id="t-rect-30d3.d0a4a23c1" class="showComponents-t-rect-0-92"  :tip="tRectx0x92ComputedData.tip" :label="tRectx0x92ComputedData.label" :active="tRectx0x92ComputedData.active" :c-style="tRectx0x92ComputedData.cStyle"></t-rect><t-rect id="t-rect-e93d.44b08fc35" class="showComponents-t-rect-0-93"  :tip="tRectx0x93ComputedData.tip" :label="tRectx0x93ComputedData.label" :active="tRectx0x93ComputedData.active" :c-style="tRectx0x93ComputedData.cStyle"></t-rect><t-rect id="t-rect-0f3a.59ada942e" class="showComponents-t-rect-0-94"  :tip="tRectx0x94ComputedData.tip" :label="tRectx0x94ComputedData.label" :active="tRectx0x94ComputedData.active" :c-style="tRectx0x94ComputedData.cStyle"></t-rect><t-rect id="t-rect-b699.22a13c997" class="showComponents-t-rect-0-95"  :tip="tRectx0x95ComputedData.tip" :label="tRectx0x95ComputedData.label" :active="tRectx0x95ComputedData.active" :c-style="tRectx0x95ComputedData.cStyle"></t-rect><t-row id="t-row-9b87.9244496b6" class="showComponents-t-row-0-96"  :c-style="tRowx0x96ComputedData.cStyle" :gutter="tRowx0x96ComputedData.gutter" :justify="tRowx0x96ComputedData.justify" :align="tRowx0x96ComputedData.align"><t-text id="t-text-339a.fe3d08b0e" class="showComponents-t-text-0-96-0"  :label="tTextx0x96x0ComputedData.label" :editable="tTextx0x96x0ComputedData.editable" :c-style="tTextx0x96x0ComputedData.cStyle"></t-text><t-text id="t-text-f3a8.54b76ad99" class="showComponents-t-text-0-96-1"  :label="tTextx0x96x1ComputedData.label" :editable="tTextx0x96x1ComputedData.editable" :c-style="tTextx0x96x1ComputedData.cStyle"></t-text></t-row><t-row id="t-row-7fd8.9f7fd4aba" class="showComponents-t-row-0-97"  :c-style="tRowx0x97ComputedData.cStyle" :gutter="tRowx0x97ComputedData.gutter" :justify="tRowx0x97ComputedData.justify" :align="tRowx0x97ComputedData.align"><t-text id="t-text-e3ea.dcdf34a26" class="showComponents-t-text-0-97-0"  :label="tTextx0x97x0ComputedData.label" :editable="tTextx0x97x0ComputedData.editable" :c-style="tTextx0x97x0ComputedData.cStyle"></t-text><t-text id="t-text-c2c1.72bde6fe7" class="showComponents-t-text-0-97-1"  :label="tTextx0x97x1ComputedData.label" :editable="tTextx0x97x1ComputedData.editable" :c-style="tTextx0x97x1ComputedData.cStyle"></t-text><t-text id="t-text-98e7.4f7399e36" class="showComponents-t-text-0-97-2"  :label="tTextx0x97x2ComputedData.label" :editable="tTextx0x97x2ComputedData.editable" :c-style="tTextx0x97x2ComputedData.cStyle"></t-text></t-row><t-rect id="t-rect-3678.f9b46578b" class="showComponents-t-rect-0-98"  :tip="tRectx0x98ComputedData.tip" :label="tRectx0x98ComputedData.label" :active="tRectx0x98ComputedData.active" :c-style="tRectx0x98ComputedData.cStyle"></t-rect><t-component id="t-component-4042.d99b41793" class="showComponents-t-component-0-99"  :name="tComponentx0x99ComputedData.name" :c-style="tComponentx0x99ComputedData.cStyle" :src="tComponentx0x99ComputedData.src" :component-name="tComponentx0x99ComputedData.componentName"></t-component><t-text id="t-text-0d84.f4c3eda77" class="showComponents-t-text-0-100"  :label="tTextx0x100ComputedData.label" :editable="tTextx0x100ComputedData.editable" :c-style="tTextx0x100ComputedData.cStyle"></t-text><t-list-card id="t-list-card-65a0.cbe466191" class="showComponents-t-list-card-0-101"  :data="tListCardx0x101ComputedData.data" :spacing-x="tListCardx0x101ComputedData.spacingX" :col="tListCardx0x101ComputedData.col" :direction="tListCardx0x101ComputedData.direction" :exchange-order="tListCardx0x101ComputedData.exchangeOrder" :unit-break="tListCardx0x101ComputedData.unitBreak" :key-field="tListCardx0x101ComputedData.keyField" :active-key-field="tListCardx0x101ComputedData.activeKeyField" :active="tListCardx0x101ComputedData.active" :c-style="tListCardx0x101ComputedData.cStyle"></t-list-card><t-tabs-base id="t-tabs-base-5c1a.17c121e97" class="showComponents-t-tabs-base-0-102"  :data="tTabsBasex0x102ComputedData.data" :space="tTabsBasex0x102ComputedData.space" :selected-tab-val="tTabsBasex0x102ComputedData.selectedTabVal" :inner-shadow-color="tTabsBasex0x102ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x102ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x102ComputedData.alias" :c-style="tTabsBasex0x102ComputedData.cStyle" @tab-click="ontabClick1733279319009_0_0"></t-tabs-base><t-chart-design id="t-chart-design-a141.d9cc83b83" class="showComponents-t-chart-design-0-103"  :empty-img="tChartDesignx0x103ComputedData.emptyImg" :c-style="tChartDesignx0x103ComputedData.cStyle" :options="tChartDesignx0x103ComputedData.options"></t-chart-design><t-circle id="t-circle-f910.d1c6c3464" class="showComponents-t-circle-0-104"  :tip="tCirclex0x104ComputedData.tip" :label="tCirclex0x104ComputedData.label" :active="tCirclex0x104ComputedData.active" :c-style="tCirclex0x104ComputedData.cStyle"></t-circle><t-text id="t-text-2150.0327ee148" class="showComponents-t-text-0-105"  :label="tTextx0x105ComputedData.label" :editable="tTextx0x105ComputedData.editable" :c-style="tTextx0x105ComputedData.cStyle"></t-text><t-image-base id="t-image-base-a001.fdbcbe14c" class="showComponents-t-image-base-0-106"  :src="tImageBasex0x106ComputedData.src" :fit="tImageBasex0x106ComputedData.fit" :c-style="tImageBasex0x106ComputedData.cStyle"></t-image-base><t-chart-pie-percent id="t-chart-pie-percent-1138.7cd65cdc4" class="showComponents-t-chart-pie-percent-0-107"  :empty-img="tChartPiePercentx0x107ComputedData.emptyImg" :data="tChartPiePercentx0x107ComputedData.data" :series-style="tChartPiePercentx0x107ComputedData.seriesStyle" :c-style="tChartPiePercentx0x107ComputedData.cStyle" :options="tChartPiePercentx0x107ComputedData.options" :pie="componentState.tChartPiePercentx0x107.pie"></t-chart-pie-percent><t-text-unit id="t-text-unit-1db3.10184e54f" class="showComponents-t-text-unit-0-108"  :c-style="tTextUnitx0x108ComputedData.cStyle" :justify="tTextUnitx0x108ComputedData.justify" :align="tTextUnitx0x108ComputedData.align" :content="tTextUnitx0x108ComputedData.content" :unit="tTextUnitx0x108ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x108ComputedData.showOverflowTooltip"></t-text-unit><t-rank-single id="t-rank-single-6d3e.0fdd82f77" class="showComponents-t-rank-single-0-109"  :icon-src="tRankSinglex0x109ComputedData.iconSrc" :data="tRankSinglex0x109ComputedData.data" :c-style="tRankSinglex0x109ComputedData.cStyle" :tab="tRankSinglex0x109ComputedData.tab" :key-word="tRankSinglex0x109ComputedData.keyWord" :default-checked="tRankSinglex0x109ComputedData.defaultChecked" :auto-scroll="tRankSinglex0x109ComputedData.autoScroll" :speed="tRankSinglex0x109ComputedData.speed" :data-style="tRankSinglex0x109ComputedData.dataStyle"></t-rank-single><t-rank-single id="t-rank-single-6f11.25f81503d" class="showComponents-t-rank-single-0-110"  :icon-src="tRankSinglex0x110ComputedData.iconSrc" :data="tRankSinglex0x110ComputedData.data" :c-style="tRankSinglex0x110ComputedData.cStyle" :tab="tRankSinglex0x110ComputedData.tab" :key-word="tRankSinglex0x110ComputedData.keyWord" :default-checked="tRankSinglex0x110ComputedData.defaultChecked" :auto-scroll="tRankSinglex0x110ComputedData.autoScroll" :speed="tRankSinglex0x110ComputedData.speed" :data-style="tRankSinglex0x110ComputedData.dataStyle"></t-rank-single><t-chart-bar-simple id="t-chart-bar-simple-10fa.ecbdef39" class="showComponents-t-chart-bar-simple-0-111"  :empty-img="tChartBarSimplex0x111ComputedData.emptyImg" :c-style="tChartBarSimplex0x111ComputedData.cStyle" :options="tChartBarSimplex0x111ComputedData.options" :data="tChartBarSimplex0x111ComputedData.data" :series-setting="tChartBarSimplex0x111ComputedData.seriesSetting" :bar="componentState.tChartBarSimplex0x111.bar"></t-chart-bar-simple><t-chart-bar-simple id="t-chart-bar-simple-bdfd.523bc718c" class="showComponents-t-chart-bar-simple-0-112"  :empty-img="tChartBarSimplex0x112ComputedData.emptyImg" :c-style="tChartBarSimplex0x112ComputedData.cStyle" :options="tChartBarSimplex0x112ComputedData.options" :data="tChartBarSimplex0x112ComputedData.data" :series-setting="tChartBarSimplex0x112ComputedData.seriesSetting" :bar="componentState.tChartBarSimplex0x112.bar"></t-chart-bar-simple><t-list-card id="t-list-card-a523.41f628b11" class="showComponents-t-list-card-0-113"  :data="tListCardx0x113ComputedData.data" :spacing-x="tListCardx0x113ComputedData.spacingX" :col="tListCardx0x113ComputedData.col" :direction="tListCardx0x113ComputedData.direction" :exchange-order="tListCardx0x113ComputedData.exchangeOrder" :unit-break="tListCardx0x113ComputedData.unitBreak" :key-field="tListCardx0x113ComputedData.keyField" :active-key-field="tListCardx0x113ComputedData.activeKeyField" :active="tListCardx0x113ComputedData.active" :c-style="tListCardx0x113ComputedData.cStyle"></t-list-card><t-rect id="t-rect-d4ee.ad5d620b5" class="showComponents-t-rect-0-114"  :tip="tRectx0x114ComputedData.tip" :label="tRectx0x114ComputedData.label" :active="tRectx0x114ComputedData.active" :c-style="tRectx0x114ComputedData.cStyle"></t-rect><t-rect id="t-rect-968e.801097df9" class="showComponents-t-rect-0-115"  :tip="tRectx0x115ComputedData.tip" :label="tRectx0x115ComputedData.label" :active="tRectx0x115ComputedData.active" :c-style="tRectx0x115ComputedData.cStyle"></t-rect></div>
</template>

<script>
import _ from 'lodash';
import {
  reactive, ref, computed, watch, watchEffect,
  onMounted, onUnmounted, onBeforeMount, onBeforeUnmount,
  provide, inject, toRefs, toRef, nextTick, isRef,
  shallowRef, shallowReactive, triggerRef,
  h, createVNode, createElementBlock, openBlock,
  withCtx, withDirectives, withModifiers,
  resolveComponent, defineAsyncComponent,
  markRaw, toRaw, toDisplayString, createElementVNode,
} from 'vue';
import { useRoute } from 'vue-router';
import http from '@/http.js';
import { ComponentLoader, watchComponentVisible, generateCacheKey, requestApi, ResourceLoader, replaceCssVariables, getUrlParam, getQueryParam, guid, runAnimation, setPageScale, mountDynamicComponent, loadInitialApis, fetchApiData, getDataValue, applyFilter, filterData, convertCharacter } from '@/utils.js';
import { themes } from '@/theme.js';
import * as echarts from 'echarts';
import { TButton, TChartBarSimple, TChartDesign, TChartLiquidfill, TChartPieBorder, TChartPieDoughnutData, TChartPiePercent, TCheckbox, TCircle, TComponent, TDatePicker, TImageBase, TInput, TListCard, TListCardCommon, TRadio, TRankSingle, TRect, TRow, TScrollableCards, TSearch, TSelect, TSwitch, TTable, TTabs, TTabsBase, TText, TTextUnit } from '@ths/design';

export default {
  components: {
    TButton,
    TChartBarSimple,
    TChartDesign,
    TChartLiquidfill,
    TChartPieBorder,
    TChartPieDoughnutData,
    TChartPiePercent,
    TCheckbox,
    TCircle,
    TComponent,
    TDatePicker,
    TImageBase,
    TInput,
    TListCard,
    TListCardCommon,
    TRadio,
    TRankSingle,
    TRect,
    TRow,
    TScrollableCards,
    TSearch,
    TSelect,
    TSwitch,
    TTable,
    TTabs,
    TTabsBase,
    TText,
    TTextUnit,
  },
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
const state = reactive({
   screenSize: "",
   cardList: [{"value":"6.32","label":"pH","checked":true,"style":{"cardStyle":{"background-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-11/d4b39af541ba4502934f74860334deab.png)"},"labelStyle":{"color":"#FF2B2B"},"labelIconStyle":{"background":"#00f"}}},{"value":"8.51 mg/L","label":"DO"},{"value":"4.32 mg/L","label":"IMn"},{"value":"1.26 mg/L","label":"NH3-H"},{"value":"0.12 mg/L","label":"TP"}],
   chartOption: {},
   cards: [{"title":"水质超标报警","num":12,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/6d69bdc653634b72b98e082ec9201bf8.svg"},{"title":"同比下降报警","num":2,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/6d69bdc653634b72b98e082ec9201bf8.svg"},{"title":"环比下降报警","num":0,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg"},{"title":"临界超标报警","num":0,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg"},{"title":"达标差距报警","num":0,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg"}],
   activeTab: "home",
   tabs: [{"label":"水质评价","name":"home","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-06/74dcccade6bd40c9827846e4e0beb204.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/e37bc846a3fe44229b07f0b761c3a1e9.svg"},{"label":"目标考核","name":"work","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-06/cc51599018304a2bb354f2a185242f69.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/490ed07e9da94ef391daeb22bf5d7dff.svg"}],
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
const componentState = reactive({
tTextx0x0: {
defaultStyle: {
            default: {"width":"56px","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"32px","top":"37px","fontSize":"var(--t-text-size-normal)","lineHeight":"22px","animationName":""},
            
            },
 default: { 
 
label:"任务类型",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"32px","top":"37px","fontSize":"var(--t-text-size-normal)","lineHeight":"22px","animationName":""}}}, 
 },
},
tChartDesignx0x1: {
defaultStyle: {
            default: {"height":"304px","width":"824px","position":"unset","left":"72px","top":"1426px","animationName":""},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"304px","width":"824px","position":"unset","left":"72px","top":"1426px","animationName":""}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"top":"15%","left":"5%","right":"4%","bottom":"12%"},"color":["#00FF22","#FFC000","#2ec7c9","#b6a2de","#5ab1ef"],"legend":{"show":true,"icon":"rect","itemWidth":10,"itemHeight":10,"textStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":13}},"tooltip":{"trigger":"axis","backgroundColor":"rgba(0, 0, 0, 0.8)","borderColor":"rgba(255, 255, 255, 0.5)","textStyle":{"color":"rgba(255, 255, 255, 1)"}},"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"axisLabel":{"color":"rgba(255, 255, 255, 0.8)","fontSize":13,"rotate":0},"axisLine":{"lineStyle":{"type":"solid","color":"rgba(255, 255, 255, 0.4)"}},"axisTick":{"show":true,"lineStyle":{"color":"rgba(255, 255, 255, 0.4)"}},"nameTextStyle":{"color":"rgba(255, 255, 255, 0.7)","fontSize":13}},"yAxis":{"type":"value","axisLabel":{"color":"rgba(255, 255, 255, 0.8)","fontSize":13},"axisLine":{"show":true,"lineStyle":{"type":"solid","color":"rgba(255, 255, 255, 0.4)"}},"name":"mg/L","nameTextStyle":{"color":"rgba(255, 255, 255, 0.7)","align":"right","padding":[0,0,10,-24],"fontSize":13},"splitLine":{"lineStyle":{"type":"dashed","color":"rgba(255, 255, 255, 0.2)"}}},"series":[{"name":"当月值","data":[2,3,4,5,1,2,2],"type":"bar","barWidth":12},{"name":"年度目标","type":"line","silent":true,"markLine":{"symbol":"none","label":{"color":"#FFC000","fontSize":12},"data":[{"yAxis":5}]}}]})), 
 },
},
tChartDesignx0x2: {
defaultStyle: {
            default: {"height":"304px","width":"824px","position":"unset","left":"999px","top":"1736px","animationName":""},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"304px","width":"824px","position":"unset","left":"999px","top":"1736px","animationName":""}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"top":"15%","left":"5%","right":"4%","bottom":"12%"},"color":["#00FF22","#FFC000","#2ec7c9","#b6a2de","#5ab1ef"],"legend":{"show":true,"icon":"rect","itemWidth":10,"itemHeight":10,"textStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":13}},"tooltip":{"trigger":"axis","backgroundColor":"rgba(0, 0, 0, 0.8)","borderColor":"rgba(255, 255, 255, 0.5)","textStyle":{"color":"rgba(255, 255, 255, 1)"}},"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"axisLabel":{"color":"rgba(255, 255, 255, 0.8)","fontSize":13,"rotate":45},"axisLine":{"lineStyle":{"type":"solid","color":"rgba(255, 255, 255, 0.4)"}},"axisTick":{"show":true,"lineStyle":{"color":"rgba(255, 255, 255, 0.4)"}},"nameTextStyle":{"color":"rgba(255, 255, 255, 0.7)","fontSize":13}},"yAxis":{"type":"value","axisLabel":{"color":"rgba(255, 255, 255, 0.8)","fontSize":13},"axisLine":{"show":true,"lineStyle":{"type":"solid","color":"rgba(255, 255, 255, 0.4)"}},"name":"","nameTextStyle":{"color":"rgba(255, 255, 255, 0.7)","align":"right","padding":[0,0,10,-24],"fontSize":13},"splitLine":{"lineStyle":{"type":"dashed","color":"rgba(255, 255, 255, 0.2)"}}},"series":[{"name":"当月值","data":[2,3,4,5,1,2,2],"type":"bar","barWidth":12},{"name":"年度目标","type":"line","silent":true,"markArea":{"itemStyle":{},"data":[[{"yAxis":1},{"yAxis":3}]]}}]})), 
 },
},
tChartDesignx0x3: {
defaultStyle: {
            default: {"height":"304px","width":"824px","position":"unset","left":"54px","top":"1755px","animationName":""},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"304px","width":"824px","position":"unset","left":"54px","top":"1755px","animationName":""}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"625px","height":"313px","position":"unset","left":"988px","top":"1249px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"625px","height":"313px","position":"unset","left":"988px","top":"1249px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)"}}}, 
 },
},
tSelectx0x5: {
defaultStyle: {
            default: {"width":"205px","height":"33px","position":"unset","left":"32px","top":"69px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"",
options:[{"value":"选项1","label":"黄金糕","disabled":false},{"value":"选项2","label":"双皮奶","disabled":false},{"value":"选项3","label":"蚵仔煎","disabled":false},{"value":"选项4","label":"龙须面","disabled":false},{"value":"选项5","label":"北京烤鸭","disabled":false}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:true,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"205px","height":"33px","position":"unset","left":"32px","top":"69px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"49px","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"1690px","top":"1168px","fontSize":"var(--t-text-size-normal)","lineHeight":"22px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"标准值",
editable:false,
cStyle:{"wrapper":{"default":{"width":"49px","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"1690px","top":"1168px","fontSize":"var(--t-text-size-normal)","lineHeight":"22px","animationName":"","textAlign":"right"}}}, 
 },
},
tListCardx0x7: {
defaultStyle: {
            default: {"width":"460px","height":"118px","position":"unset","left":"2271px","top":"1867px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
data:[{"title":"水质超标报警","num":12,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/6d69bdc653634b72b98e082ec9201bf8.svg"},{"title":"同比下降报警","num":2,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/6d69bdc653634b72b98e082ec9201bf8.svg"},{"title":"环比下降报警","num":0,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg"},{"title":"临界超标报警","num":0,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg"},{"title":"达标差距报警","num":0,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg"}],
spacingX:8,
col:3,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"460px","height":"118px","position":"unset","left":"2271px","top":"1867px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"height":"43px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"rgba(23, 62, 228, 0)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"num":{"default":{"fontSize":"26px","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)"}},"title":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)","marginTop":"0px"}},"icon":{"default":{"width":"36px","height":"36px","left":"16px","marginLeft":"14px"}},"numBox":{"default":{"marginTop":"4px","justifyContent":"flex-start"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"textAlign":"left","marginLeft":"4px"}}}, 
 },
},
tListCardx0x8: {
defaultStyle: {
            default: {"width":"435px","height":"118px","position":"unset","left":"487px","top":"212px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
data:[{"title":"水质超标报警","num":12,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/6d69bdc653634b72b98e082ec9201bf8.svg"},{"title":"同比下降报警","num":2,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/6d69bdc653634b72b98e082ec9201bf8.svg"},{"title":"环比下降报警","num":0,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg"},{"title":"临界超标报警","num":0,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg"},{"title":"达标差距报警","num":0,"unit":"个","color":"rgba(255, 255, 255, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/1cb560e59192482985bba7eeba124949.svg"}],
spacingX:8,
col:3,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"435px","height":"118px","position":"unset","left":"487px","top":"212px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"height":"43px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"rgba(23, 62, 228, 0)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"num":{"default":{"fontSize":"26px","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)"}},"title":{"default":{"fontSize":"12px","color":"var(--business-text-avianize)","marginTop":"0px"}},"icon":{"default":{"width":"36px","height":"36px","left":"16px","marginLeft":"14px"}},"numBox":{"default":{"marginTop":"4px","justifyContent":"flex-start"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"textAlign":"left","marginLeft":"4px"}}}, 
 },
},
tTablex0x9: {
defaultStyle: {
            default: {"width":"410px","height":"334px","position":"unset","left":"40px","top":"824px","paddingTop":"0px","borderBottom":"0px solid ","animationName":""},
            
            },
 default: { 
 
height:334,
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"42PX"},{"label":"断面名称","key":"sectionName","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"100PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"state","stateKey":"isShowIcon","infoKey":""},{"label":"水体名称","key":"waterName","align":"center","operationList":[],"stateList":[],"width":"80PX","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"14PX"}}},{"label":"水质目标","key":"waterQualityTarget","stateKey":"waterQualityTargetValue","align":"center","type":"state","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}}],"width":"94PX","style":{"fontStyle":{"width":"40PX","height":"PX"}}},{"label":"水质现状","key":"waterQualityStatus","stateKey":"waterQualityStatusValue","align":"center","type":"state","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}}],"width":"94PX","style":{"fontStyle":{"fontSize":"12PX","width":"PX","height":"PX","borderRadius":"PX","background":""}}}],
data:[{"sectionName":"大乌江镇","waterName":"乌江","waterQualityTarget":"Ⅰ类","waterQualityTargetValue":"Ⅰ类","waterQualityStatus":"Ⅰ类","waterQualityStatusValue":"Ⅰ类","isShowIcon":"1"},{"sectionName":"大乌江镇","waterName":"乌江","waterQualityTarget":"Ⅱ类","waterQualityTargetValue":"Ⅱ类","waterQualityStatus":"Ⅱ类","waterQualityStatusValue":"Ⅱ类","isShowIcon":"1"},{"sectionName":"大乌江镇","waterName":"乌江","waterQualityTarget":"Ⅲ类","waterQualityTargetValue":"Ⅲ类","waterQualityStatus":"Ⅲ类","waterQualityStatusValue":"Ⅲ类","isShowIcon":"0"},{"sectionName":"大乌江镇","waterName":"乌江","waterQualityTarget":"Ⅳ类","waterQualityTargetValue":"Ⅳ类","waterQualityStatus":"Ⅳ类","waterQualityStatusValue":"Ⅳ类","isShowIcon":"0"},{"sectionName":"大乌江镇","waterName":"乌江","waterQualityTarget":"Ⅴ类","waterQualityTargetValue":"Ⅴ类","waterQualityStatus":"Ⅴ类","waterQualityStatusValue":"Ⅴ类","isShowIcon":"0"},{"sectionName":"大乌江镇","waterName":"乌江","waterQualityTarget":"劣Ⅴ类","waterQualityTargetValue":"劣Ⅴ类","waterQualityStatus":"劣Ⅴ类","waterQualityStatusValue":"劣Ⅴ类","isShowIcon":"0"},{"sectionName":"大乌江镇","waterName":"乌江","waterQualityTarget":"Ⅱ类","waterQualityTargetValue":"Ⅱ类","waterQualityStatus":"Ⅱ类","waterQualityStatusValue":"Ⅱ类","isShowIcon":"0"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"334px","position":"unset","left":"40px","top":"824px","paddingTop":"0px","borderBottom":"0px solid ","animationName":""}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tRectx0x10: {
defaultStyle: {
            default: {"width":"165px","height":"165px","position":"unset","left":"1033px","top":"64px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-05/5ee620dfe96d45eeb92dbf0d5b5390ee.png)","backgroundRepeat":"no-repeat","backgroundSize":"contain","backgroundPosition":"50% 50%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","animationDuration":"","animationTimingFunction":"","animationDelay":"","animationIterationCount":"","animationDirection":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-image":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"165px","height":"165px","position":"unset","left":"1033px","top":"64px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-05/5ee620dfe96d45eeb92dbf0d5b5390ee.png)","backgroundRepeat":"no-repeat","backgroundSize":"contain","backgroundPosition":"50% 50%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","animationDuration":"","animationTimingFunction":"","animationDelay":"","animationIterationCount":"","animationDirection":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-image":""}}}, 
 },
},
tComponentx0x11: {
defaultStyle: {
            default: {"width":"824px","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"998px","top":"1111px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"824px","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"998px","top":"1111px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/dialogTitleFirstBg",
componentName:"dialogTitleFirstBgComponent", 
 },
},
tRectx0x12: {
defaultStyle: {
            default: {"width":"120px","height":"280px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","left":"1706px","top":"1233px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"280px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","left":"1706px","top":"1233px","position":"unset","animationName":""}}}, 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"1038px","top":"1116px","fontFamily":"方正综艺","fontSize":"16px","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"水质监测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"1038px","top":"1116px","fontFamily":"方正综艺","fontSize":"16px","animationName":"","lineHeight":"20px"}}}, 
 },
},
tTabsx0x14: {
defaultStyle: {
            default: {"width":"100px","height":"164px","position":"unset","left":"1716px","top":"1245px","backgroundColor":"","display":"flex","paddingLeft":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""},
            
            },
 default: { 
 
data:[{"label":"基本信息","name":"home"},{"label":"多维分析","name":"work"},{"label":"任务调度","name":"management"}],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"164px","position":"unset","left":"1716px","top":"1245px","backgroundColor":"","display":"flex","paddingLeft":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""}},"itemActiveBorder":{"default":{"width":"0px","height":"0%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","display":"none"}},"itemWrapper":{"default":{"fontSize":"14","lineHeight":"34px","color":"var(--business-text-avianize)","backgroundColor":"rgba(44, 129, 187, 0)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px","width":"100%","min-width":"100%","max-width":"100%","textAlign":"center !important","marginBottom":"17px","paddingBottom":"0px","borderBottom":"1px solid rgba(23,62,228,0)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","left":"6px"},"hover":{"color":"var(--business-tab-third-active-border)"},"active":{"box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","background":"var(--business-tab-third-active-fill)","color":"var(--business-tab-third-active-border)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px"},"disabled":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","textAlign":"center"}},"itemLabel":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","textAlign":"center","display":"block"},"hover":{"textAlign":"center"},"active":{"textAlign":"center"}},"prevIcon":{"default":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","display":"none"}},"nextIcon":{"default":{"display":"none"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tRectx0x15: {
defaultStyle: {
            default: {"width":"410px","height":"185px","position":"unset","left":"1003px","top":"33px","backgroundColor":"var(--business-show-bg10)","borderLeft":"0px solid rgba(20,112,204,0.1)","borderTop":"0px solid rgba(20,112,204,0.1)","borderRight":"0px solid rgba(20,112,204,0.1)","borderBottom":"0px solid rgba(20,112,204,0.1)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"185px","position":"unset","left":"1003px","top":"33px","backgroundColor":"var(--business-show-bg10)","borderLeft":"0px solid rgba(20,112,204,0.1)","borderTop":"0px solid rgba(20,112,204,0.1)","borderRight":"0px solid rgba(20,112,204,0.1)","borderBottom":"0px solid rgba(20,112,204,0.1)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""}}}, 
 },
},
tTextx0x16: {
defaultStyle: {
            default: {"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"1119px","left":"1643px","textAlign":"right","fontSize":"14px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"截至：2024-09-09",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"1119px","left":"1643px","textAlign":"right","fontSize":"14px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x17: {
defaultStyle: {
            default: {"width":"80px","height":"1px","backgroundColor":"rgba(255, 255, 255, 0.1)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","position":"unset","left":"1726px","top":"1291px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"1px","backgroundColor":"rgba(255, 255, 255, 0.1)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","position":"unset","left":"1726px","top":"1291px","animationName":""}}}, 
 },
},
tTextx0x18: {
defaultStyle: {
            default: {"width":"56px","height":"24px","color":"var(--business-text-avianize)","position":"unset","left":"1295px","top":"86px","fontSize":"14px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"24px","animationName":""},
            
            },
 default: { 
 
label:"考核目标",
cStyle:{"wrapper":{"default":{"width":"56px","height":"24px","color":"var(--business-text-avianize)","position":"unset","left":"1295px","top":"86px","fontSize":"14px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"24px","animationName":""}}}, 
 },
},
tRectx0x19: {
defaultStyle: {
            default: {"width":"80px","height":"1px","backgroundColor":"rgba(255, 255, 255, 0.1)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","position":"unset","left":"1726px","top":"1345px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"1px","backgroundColor":"rgba(255, 255, 255, 0.1)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","position":"unset","left":"1726px","top":"1345px","animationName":""}}}, 
 },
},
tCirclex0x20: {
defaultStyle: {
            default: {"width":"9px","height":"9px","position":"unset","left":"1000px","top":"1589px","backgroundColor":"#FF2B2B","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"9px","height":"9px","position":"unset","left":"1000px","top":"1589px","backgroundColor":"#FF2B2B","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tTextx0x21: {
defaultStyle: {
            default: {"width":"56px","height":"24px","color":"var(--business-text-avianize)","position":"unset","left":"1295px","top":"149px","fontSize":"14px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"24px","animationName":""},
            
            },
 default: { 
 
label:"去年同期",
cStyle:{"wrapper":{"default":{"width":"56px","height":"24px","color":"var(--business-text-avianize)","position":"unset","left":"1295px","top":"149px","fontSize":"14px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"24px","animationName":""}}}, 
 },
},
tTextx0x22: {
defaultStyle: {
            default: {"width":"334px","height":"24px","color":"var(--business-text-avianize)","fontSize":"14px","top":"1581px","left":"1013px","position":"unset","lineHeight":"24px","animationName":""},
            
            },
 default: { 
 
label:"表示该指标超标（mg/L，pH值除外）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"334px","height":"24px","color":"var(--business-text-avianize)","fontSize":"14px","top":"1581px","left":"1013px","position":"unset","lineHeight":"24px","animationName":""}}}, 
 },
},
tTextx0x23: {
defaultStyle: {
            default: {"width":"50px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"1295px","top":"113px","fontSize":"20px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"20px","fontWeight":"700","fontFamily":"DIN-bold","animationName":"","letterSpacing":"1px"},
            
            },
 default: { 
 
label:"93.22",
cStyle:{"wrapper":{"default":{"width":"50px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"1295px","top":"113px","fontSize":"20px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"20px","fontWeight":"700","fontFamily":"DIN-bold","animationName":"","letterSpacing":"1px"}}}, 
 },
},
tTextx0x24: {
defaultStyle: {
            default: {"width":"50px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"1295px","top":"176px","fontSize":"20px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"20px","fontWeight":"700","fontFamily":"DIN-bold","animationName":"","letterSpacing":"1px"},
            
            },
 default: { 
 
label:"93.22",
cStyle:{"wrapper":{"default":{"width":"50px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"1295px","top":"176px","fontSize":"20px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"20px","fontWeight":"700","fontFamily":"DIN-bold","animationName":"","letterSpacing":"1px"}}}, 
 },
},
tScrollableCardsx0x25: {
defaultStyle: {
            default: {"width":"824px","height":"64px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","top":"1627px","left":"1005px","position":"unset","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"18px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"824px","height":"64px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","top":"1627px","left":"1005px","position":"unset","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"18px","animationName":""}},"itemWrapper":{"default":{"width":"144px","height":"64px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-11/3a9c74b997c34fbab0048bc7496b959a.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto auto","-webkit-mask-size":"","backgroundPosition":"5px 5px","-webkit-mask-position":"","marginLeft":"0px","marginRight":"8px !important","cursor":"auto","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{}},"container":{"default":{"width":"752px","height":"auto","paddingLeft":"0px","paddingTop":"0px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"12px","paddingRight":"0px","marginRight":"12px"}},"cardLabel":{"default":{"fontSize":"20px","fontWeight":"500","fontFamily":"DIN-bold","color":"rgba(255, 255, 255, 1)","lineHeight":"24px","height":"24px"}},"cardValue":{"default":{"fontSize":"14px","lineHeight":"24px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","height":"24px","marginTop":"8px"}},"leftArrowButton":{"default":{"color":"rgba(255, 255, 255, 1) !important","backgroundColor":"var(--business-show-bg15)","width":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"color":"var(--business-theme) !important","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)"}},"leftArrow":{"default":{"color":"inherit !important"}},"rightArrow":{"default":{"color":"inherit !important"}},"rightArrowButton":{"default":{"color":"rgba(255, 255, 255, 1) !important","backgroundColor":"var(--business-show-bg15)","width":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"color":"var(--business-theme) !important","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)"}}},
autoScroll:false,
tab:false,
keyWord:"",
defaultChecked:"",
speed:3,
interval:0.5,
cardSpace:0,
direction:"left",
dataAlias:{"value":"label","label":"value","checked":"checked"},
data:[{"value":"6.32","label":"pH","checked":true,"style":{"cardStyle":{"background-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-11/d4b39af541ba4502934f74860334deab.png)"},"labelStyle":{"color":"#FF2B2B"},"labelIconStyle":{"background":"#00f"}}},{"value":"8.51 mg/L","label":"DO"},{"value":"4.32 mg/L","label":"IMn"},{"value":"1.26 mg/L","label":"NH3-H"},{"value":"0.12 mg/L","label":"TP"}], 
 },
},
tTextx0x26: {
defaultStyle: {
            default: {"width":"35px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"1352px","top":"92px","fontSize":"12px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"14px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
label:"(%)",
cStyle:{"wrapper":{"default":{"width":"35px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"1352px","top":"92px","fontSize":"12px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"14px","textAlign":"center","animationName":""}}}, 
 },
},
tRowx0x27: {
defaultStyle: {
            default: {"width":"500px","height":"47px","position":"unset","left":"1006px","top":"1174px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"500px","height":"47px","position":"unset","left":"1006px","top":"1174px","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x27x0: {
defaultStyle: {
            default: {"width":"auto","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"1084.8092289677372px","top":"1160.1266004774304px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","textAlign":"left","max-width":"280px","marginRight":"6px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"},
            
            },
 default: { 
 
label:"古田宝湖",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"1084.8092289677372px","top":"1160.1266004774304px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","textAlign":"left","max-width":"280px","marginRight":"6px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"}}},
showTitle:true, 
 },
},
tTextx0x27x1: {
defaultStyle: {
            default: {"width":"40px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"1206.8092289677372px","top":"1160.1266004774304px","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"20px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"12px","marginLeft":"10px","animationName":""},
            
            },
 default: { 
 
label:"国考",
editable:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"1206.8092289677372px","top":"1160.1266004774304px","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"20px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"12px","marginLeft":"10px","animationName":""}}}, 
 },
},
tListCardCommonx0x27x2: {
defaultStyle: {
            default: {"position":"unset","width":"50px","height":"20px","left":"1287.8092289677372px","top":"1162.1266004774304px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"position":"unset","width":"50px","height":"20px","left":"1287.8092289677372px","top":"1162.1266004774304px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"50px","height":"20px","fontSize":"12px","lineHeight":"20px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"}},"cardIcon":{"default":{"display":"none"}}},
keyWord:"",
defaultChecked:"",
tab:false,
collapse:false,
collapseText:"数据",
displayCount:"0",
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
data:[{"state":"劣Ⅴ类","stateColor":"#fff","stateBgColor":"#FF0000"}], 
 },
},
tListCardCommonx0x27x3: {
defaultStyle: {
            default: {"position":"unset","width":"50px","height":"20px","left":"1378.8092289677372px","top":"1161.1266004774304px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"position":"unset","width":"50px","height":"20px","left":"1378.8092289677372px","top":"1161.1266004774304px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"50px","height":"20px","fontSize":"12px","lineHeight":"20px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"}},"cardIcon":{"default":{"display":"none"}}},
keyWord:"",
defaultChecked:"",
tab:false,
collapse:false,
collapseText:"数据",
displayCount:"0",
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
data:[{"state":"不达标","stateColor":"#fff","stateBgColor":"#FF2B2B"}], 
 },
},
tRectx0x27x4: {
defaultStyle: {
            default: {"width":"20px","height":"20px","position":"unset","left":"1467.8092289677372px","top":"1161.1266004774304px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-11/c042c6b49c404c56a0dafaa835ad05b2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","marginLeft":"10px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"20px","height":"20px","position":"unset","left":"1467.8092289677372px","top":"1161.1266004774304px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-11/c042c6b49c404c56a0dafaa835ad05b2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","marginLeft":"10px","animationName":""}}}, 
 },
},
tSwitchx0x28: {
defaultStyle: {
            default: {"width":"32px","height":"20px","position":"unset","left":"1755px","top":"1169px","animationName":""},
            
            },
 default: { 
 
value:true,
cStyle:{"wrapper":{"default":{"width":"32px","height":"20px","position":"unset","left":"1755px","top":"1169px","animationName":""}},"core":{"active":{"backgroundColor":"var(--business-theme)","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tTextx0x29: {
defaultStyle: {
            default: {"width":"35px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"1351px","top":"155px","fontSize":"12px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"14px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
label:"(%)",
cStyle:{"wrapper":{"default":{"width":"35px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"1351px","top":"155px","fontSize":"12px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"14px","textAlign":"center","animationName":""}}}, 
 },
},
tRectx0x30: {
defaultStyle: {
            default: {"width":"42px","height":"42px","position":"unset","left":"1231px","top":"88px","backgroundImage":"var(--business-appraisal-target-icon)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","-webkit-mask-image":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"42px","position":"unset","left":"1231px","top":"88px","backgroundImage":"var(--business-appraisal-target-icon)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","-webkit-mask-image":""}}}, 
 },
},
tRectx0x31: {
defaultStyle: {
            default: {"width":"42px","height":"42px","position":"unset","left":"1231px","top":"152px","backgroundImage":"var(--business-same-lastyear-icon)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","-webkit-mask-image":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"42px","position":"unset","left":"1231px","top":"152px","backgroundImage":"var(--business-same-lastyear-icon)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","-webkit-mask-image":""}}}, 
 },
},
tRectx0x32: {
defaultStyle: {
            default: {"width":"155px","height":"155px","position":"unset","left":"1038px","top":"67px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2022-12-16/3e6fc19f43404c6ca39eb596888bacc8.svg)","backgroundRepeat":"no-repeat","backgroundSize":"contain","backgroundPosition":"50% 50%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","animationDuration":"","animationTimingFunction":"","animationDelay":"","animationIterationCount":"","animationDirection":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-image":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"155px","height":"155px","position":"unset","left":"1038px","top":"67px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2022-12-16/3e6fc19f43404c6ca39eb596888bacc8.svg)","backgroundRepeat":"no-repeat","backgroundSize":"contain","backgroundPosition":"50% 50%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","animationDuration":"","animationTimingFunction":"","animationDelay":"","animationIterationCount":"","animationDirection":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-image":""}}}, 
 },
},
tChartLiquidfillx0x33: {
defaultStyle: {
            default: {"height":"105px","width":"105px","top":"89px","left":"1065px","position":"unset","animationName":""},
            
            },
liquidfill: computed(() => activeChartTheme.value?.liquidfill),
 default: { 
 
cStyle:{"wrapper":{"default":{"height":"105px","width":"105px","top":"89px","left":"1065px","position":"unset","animationName":""}}},
data:[{"currentRate":0.576}],
seriesSetting:{"name":"","value":"57.6","borderStyle":{"outline":{"itemStyle":{"borderWidth":3,"borderColor":"rgba(0,255,34,0.3)"},"borderDistance":4},"backgroundStyle":{"borderWidth":0,"color":"rgba(0, 255, 84, 0)"},"label":{"fontSize":22,"position":["40%","38%"],"fontWeight":"normal","color":"rgba(255, 255, 255, 0)","insideColor":"rgba(255, 255, 255, 0)"},"radius":"94%"},"data":[{"dataKey":"currentRate","style":{"amplitude":4}}]},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"title":{"show":false},"color":[{"type":"linear","x":0,"y":0,"x2":1,"y2":0,"colorStops":[{"offset":0.99,"color":"#14F600"},{"offset":0,"color":"#009026"}]}]})),
value:"57.60",
name:"", 
 },
},
tRectx0x34: {
defaultStyle: {
            default: {"width":"118px","height":"22px","position":"unset","left":"1017px","top":"41px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","background":"var(--business-title-third-bg)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"118px","height":"22px","position":"unset","left":"1017px","top":"41px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","background":"var(--business-title-third-bg)"}}}, 
 },
},
tRectx0x35: {
defaultStyle: {
            default: {"width":"7px","height":"22px","position":"unset","left":"1138px","top":"41px","background":"var(--business-title-third-flanks)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"7px","height":"22px","position":"unset","left":"1138px","top":"41px","background":"var(--business-title-third-flanks)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tRectx0x36: {
defaultStyle: {
            default: {"width":"118px","height":"22px","position":"unset","left":"1027px","top":"41px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","background":"var(--business-title-third-bg)","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(180deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"118px","height":"22px","position":"unset","left":"1027px","top":"41px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","background":"var(--business-title-third-bg)","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(180deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "}}}, 
 },
},
tRowx0x37: {
defaultStyle: {
            default: {"width":"89px","height":"30px","position":"unset","left":"1073px","top":"125px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"89px","height":"30px","position":"unset","left":"1073px","top":"125px","animationName":""}}},
gutter:0,
justify:"center",
align:"middle", 
 },
},
tTextx0x37x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#fff","fontFamily":"DIN-black","fontSize":"24px","max-width":"73px","textAlign":"right","letterSpacing":"1px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","animationName":"","left":"2813.472712590144px","top":"438.6390005258413px"},
            
            },
 default: { 
 
label:"57.60",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#fff","fontFamily":"DIN-black","fontSize":"24px","max-width":"73px","textAlign":"right","letterSpacing":"1px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","animationName":"","left":"2813.472712590144px","top":"438.6390005258413px"}}}, 
 },
},
tTextx0x37x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#fff","lineHeight":"14px","paddingTop":"8px","fontSize":"14px","animationName":"","left":"2808.472712590144px","top":"435.6390005258413px"},
            
            },
 default: { 
 
label:"%",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#fff","lineHeight":"14px","paddingTop":"8px","fontSize":"14px","animationName":"","left":"2808.472712590144px","top":"435.6390005258413px"}}}, 
 },
},
tRectx0x38: {
defaultStyle: {
            default: {"width":"7px","height":"22px","position":"unset","left":"1017px","top":"41px","background":"var(--business-title-third-flanks)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px none rgb(23,62,228)","animationName":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(180deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"7px","height":"22px","position":"unset","left":"1017px","top":"41px","background":"var(--business-title-third-flanks)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px none rgb(23,62,228)","animationName":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(180deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "}}}, 
 },
},
tTextx0x39: {
defaultStyle: {
            default: {"width":"128px","height":"22px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"1017px","top":"43px","fontSize":"16px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","textAlign":"center","lineHeight":"22px"},
            
            },
 default: { 
 
label:"优良率",
cStyle:{"wrapper":{"default":{"width":"128px","height":"22px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"1017px","top":"43px","fontSize":"16px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","textAlign":"center","lineHeight":"22px"}}}, 
 },
},
tRectx0x40: {
defaultStyle: {
            default: {"width":"410px","height":"185px","position":"unset","left":"1007px","top":"240px","backgroundColor":"var(--business-show-bg10)","borderLeft":"0px solid rgba(20,112,204,0.1)","borderTop":"0px solid rgba(20,112,204,0.1)","borderRight":"0px solid rgba(20,112,204,0.1)","borderBottom":"0px solid rgba(20,112,204,0.1)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"185px","position":"unset","left":"1007px","top":"240px","backgroundColor":"var(--business-show-bg10)","borderLeft":"0px solid rgba(20,112,204,0.1)","borderTop":"0px solid rgba(20,112,204,0.1)","borderRight":"0px solid rgba(20,112,204,0.1)","borderBottom":"0px solid rgba(20,112,204,0.1)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""}}}, 
 },
},
tTextx0x41: {
defaultStyle: {
            default: {"width":"56px","height":"24px","color":"var(--business-text-avianize)","position":"unset","left":"1299px","top":"293px","fontSize":"14px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"24px","animationName":""},
            
            },
 default: { 
 
label:"考核目标",
cStyle:{"wrapper":{"default":{"width":"56px","height":"24px","color":"var(--business-text-avianize)","position":"unset","left":"1299px","top":"293px","fontSize":"14px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"24px","animationName":""}}}, 
 },
},
tTextx0x42: {
defaultStyle: {
            default: {"width":"56px","height":"24px","color":"var(--business-text-avianize)","position":"unset","left":"1299px","top":"356px","fontSize":"14px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"24px","animationName":""},
            
            },
 default: { 
 
label:"去年同期",
cStyle:{"wrapper":{"default":{"width":"56px","height":"24px","color":"var(--business-text-avianize)","position":"unset","left":"1299px","top":"356px","fontSize":"14px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"24px","animationName":""}}}, 
 },
},
tTextx0x43: {
defaultStyle: {
            default: {"width":"50px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"1299px","top":"320px","fontSize":"20px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"20px","fontWeight":"700","fontFamily":"DIN-bold","animationName":"","letterSpacing":"1px"},
            
            },
 default: { 
 
label:"0",
cStyle:{"wrapper":{"default":{"width":"50px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"1299px","top":"320px","fontSize":"20px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"20px","fontWeight":"700","fontFamily":"DIN-bold","animationName":"","letterSpacing":"1px"}}}, 
 },
},
tTextx0x44: {
defaultStyle: {
            default: {"width":"50px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"1299px","top":"383px","fontSize":"20px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"20px","fontWeight":"700","fontFamily":"DIN-bold","animationName":"","letterSpacing":"1px"},
            
            },
 default: { 
 
label:"3.39",
cStyle:{"wrapper":{"default":{"width":"50px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"1299px","top":"383px","fontSize":"20px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"20px","fontWeight":"700","fontFamily":"DIN-bold","animationName":"","letterSpacing":"1px"}}}, 
 },
},
tTextx0x45: {
defaultStyle: {
            default: {"width":"35px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"1356px","top":"299px","fontSize":"12px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"14px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
label:"(%)",
cStyle:{"wrapper":{"default":{"width":"35px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"1356px","top":"299px","fontSize":"12px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"14px","textAlign":"center","animationName":""}}}, 
 },
},
tTextx0x46: {
defaultStyle: {
            default: {"width":"35px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"1355px","top":"362px","fontSize":"12px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"14px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
label:"(%)",
cStyle:{"wrapper":{"default":{"width":"35px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"1355px","top":"362px","fontSize":"12px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","lineHeight":"14px","textAlign":"center","animationName":""}}}, 
 },
},
tRectx0x47: {
defaultStyle: {
            default: {"width":"42px","height":"42px","position":"unset","left":"1235px","top":"295px","backgroundImage":"var(--business-appraisal-target-icon)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","-webkit-mask-image":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"42px","position":"unset","left":"1235px","top":"295px","backgroundImage":"var(--business-appraisal-target-icon)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","-webkit-mask-image":""}}}, 
 },
},
tRectx0x48: {
defaultStyle: {
            default: {"width":"42px","height":"42px","position":"unset","left":"1235px","top":"359px","backgroundImage":"var(--business-same-lastyear-icon)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","-webkit-mask-image":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"42px","position":"unset","left":"1235px","top":"359px","backgroundImage":"var(--business-same-lastyear-icon)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","-webkit-mask-image":""}}}, 
 },
},
tRectx0x49: {
defaultStyle: {
            default: {"width":"155px","height":"155px","position":"unset","left":"1042px","top":"276px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2022-12-16/76ca7ede20af4255ac85dd3fb94058c0.svg)","backgroundRepeat":"no-repeat","backgroundSize":"contain","backgroundPosition":"50% 50%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","animationDuration":"","animationTimingFunction":"","animationDelay":"","animationIterationCount":"","animationDirection":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-image":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"155px","height":"155px","position":"unset","left":"1042px","top":"276px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2022-12-16/76ca7ede20af4255ac85dd3fb94058c0.svg)","backgroundRepeat":"no-repeat","backgroundSize":"contain","backgroundPosition":"50% 50%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","animationDuration":"","animationTimingFunction":"","animationDelay":"","animationIterationCount":"","animationDirection":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-image":""}}}, 
 },
},
tRectx0x50: {
defaultStyle: {
            default: {"width":"165px","height":"165px","position":"unset","left":"1037px","top":"270px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2022-12-16/cdb2a5aa74724ea48a24e24b771de37a.png)","backgroundRepeat":"no-repeat","backgroundSize":"contain","backgroundPosition":"50% 50%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","animationDuration":"","animationTimingFunction":"","animationDelay":"","animationIterationCount":"","animationDirection":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-image":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"165px","height":"165px","position":"unset","left":"1037px","top":"270px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2022-12-16/cdb2a5aa74724ea48a24e24b771de37a.png)","backgroundRepeat":"no-repeat","backgroundSize":"contain","backgroundPosition":"50% 50%","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","animationDuration":"","animationTimingFunction":"","animationDelay":"","animationIterationCount":"","animationDirection":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-image":""}}}, 
 },
},
tChartLiquidfillx0x51: {
defaultStyle: {
            default: {"height":"105px","width":"105px","top":"296px","left":"1069px","position":"unset","animationName":""},
            
            },
liquidfill: computed(() => activeChartTheme.value?.liquidfill),
 default: { 
 
cStyle:{"wrapper":{"default":{"height":"105px","width":"105px","top":"296px","left":"1069px","position":"unset","animationName":""}}},
data:[{"currentRate":0.0339}],
seriesSetting:{"name":"","value":"57.6","borderStyle":{"outline":{"itemStyle":{"borderWidth":3,"borderColor":"rgba(204, 45, 20, 0.3)"},"borderDistance":4},"backgroundStyle":{"borderWidth":0,"color":"rgba(0, 255, 84, 0)"},"label":{"fontSize":22,"position":["40%","38%"],"fontWeight":"normal","color":"rgba(255, 255, 255, 0)","insideColor":"rgba(255, 255, 255, 0)"},"radius":"94%"},"data":[{"dataKey":"currentRate","style":{"amplitude":4}}]},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"title":{"show":false},"color":[{"type":"linear","x":0,"y":0,"x2":1,"y2":0,"colorStops":[{"offset":0,"color":"#B90C00"},{"offset":0.99,"color":"#F04400"}]}]})),
value:"57.60",
name:"", 
 },
},
tRowx0x52: {
defaultStyle: {
            default: {"width":"89px","height":"30px","position":"unset","left":"1077px","top":"332px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"89px","height":"30px","position":"unset","left":"1077px","top":"332px","animationName":""}}},
gutter:0,
justify:"center",
align:"middle", 
 },
},
tTextx0x52x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#fff","fontFamily":"DIN-black","fontSize":"24px","max-width":"73px","textAlign":"right","letterSpacing":"1px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","animationName":"","left":"2953.561416699336px","top":"683.066508562137px"},
            
            },
 default: { 
 
label:"3.39",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#fff","fontFamily":"DIN-black","fontSize":"24px","max-width":"73px","textAlign":"right","letterSpacing":"1px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","animationName":"","left":"2953.561416699336px","top":"683.066508562137px"}}}, 
 },
},
tTextx0x52x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#fff","lineHeight":"14px","paddingTop":"8px","fontSize":"14px","animationName":"","left":"2948.561416699336px","top":"680.066508562137px"},
            
            },
 default: { 
 
label:"%",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#fff","lineHeight":"14px","paddingTop":"8px","fontSize":"14px","animationName":"","left":"2948.561416699336px","top":"680.066508562137px"}}}, 
 },
},
tTablex0x53: {
defaultStyle: {
            default: {"width":"410px","height":"334px","position":"unset","left":"514px","top":"678px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":""},
            
            },
 default: { 
 
height:348,
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","type":"default","key":"icon","stateKey":"","width":"40PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"}}},{"label":"行政区","type":"default","key":"region","stateKey":"","width":"96PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"优良率","type":"state","key":"excellent","stateKey":"excellentValue","width":"92PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"劣Ⅴ类占比","type":"state","key":"inferiorRate","stateKey":"inferiorRateValue","width":"96PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(183, 227, 255, 1)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"rgba(184, 255, 215, 0.8)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"达标率","type":"state","key":"achievementRate","stateKey":"achievementRateValue","width":"92PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]}],
data:[{"region":"市南区","excellent":"100%","excellentValue":"优","inferiorRate":"0%","inferiorRateValue":"优","achievementRate":"100%","achievementRateValue":"优"},{"region":"市南区","excellent":"83.33%","excellentValue":"差","inferiorRate":"12.5%","inferiorRateValue":"差","achievementRate":"60%","achievementRateValue":"优"},{"region":"市南区","excellent":"100%","excellentValue":"优","inferiorRate":"--","inferiorRateValue":"无","achievementRate":"100%","achievementRateValue":"优"},{"region":"市南区","excellent":"100%","excellentValue":"优","inferiorRate":"0%","inferiorRateValue":"优","achievementRate":"100%","achievementRateValue":"优"},{"region":"市南区","excellent":"100%","excellentValue":"优","inferiorRate":"0%","inferiorRateValue":"优","achievementRate":"100%","achievementRateValue":"优"},{"region":"市南区","excellent":"100%","excellentValue":"优","inferiorRate":"0%","inferiorRateValue":"优","achievementRate":"100%","achievementRateValue":"优"},{"region":"市南区","excellent":"100%","excellentValue":"优","inferiorRate":"0%","inferiorRateValue":"优","achievementRate":"100%","achievementRateValue":"优"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"334px","position":"unset","left":"514px","top":"678px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":""}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tRectx0x54: {
defaultStyle: {
            default: {"width":"118px","height":"22px","position":"unset","left":"1021px","top":"248px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","background":"var(--business-title-third-bg)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"118px","height":"22px","position":"unset","left":"1021px","top":"248px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","background":"var(--business-title-third-bg)"}}}, 
 },
},
tRectx0x55: {
defaultStyle: {
            default: {"width":"7px","height":"22px","position":"unset","left":"1142px","top":"248px","background":"var(--business-title-third-flanks)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"7px","height":"22px","position":"unset","left":"1142px","top":"248px","background":"var(--business-title-third-flanks)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x56: {
defaultStyle: {
            default: {"width":"118px","height":"22px","position":"unset","left":"1031px","top":"248px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","background":"var(--business-title-third-bg)","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(180deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"118px","height":"22px","position":"unset","left":"1031px","top":"248px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","background":"var(--business-title-third-bg)","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(180deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "}}}, 
 },
},
tRectx0x57: {
defaultStyle: {
            default: {"width":"7px","height":"22px","position":"unset","left":"1021px","top":"248px","background":"var(--business-title-third-flanks)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px none rgb(23,62,228)","animationName":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(180deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"7px","height":"22px","position":"unset","left":"1021px","top":"248px","background":"var(--business-title-third-flanks)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px none rgb(23,62,228)","animationName":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(180deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "}}}, 
 },
},
tTextx0x58: {
defaultStyle: {
            default: {"width":"128px","height":"22px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"1021px","top":"248px","fontSize":"16px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","textAlign":"center","lineHeight":"22px"},
            
            },
 default: { 
 
label:"劣Ⅴ类占比",
cStyle:{"wrapper":{"default":{"width":"128px","height":"22px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"1021px","top":"248px","fontSize":"16px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","animationName":"","textAlign":"center","lineHeight":"22px"}}}, 
 },
},
tTextx0x59: {
defaultStyle: {
            default: {"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"719px","left":"28px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"719px","left":"28px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer"},"hover":{"backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x60: {
defaultStyle: {
            default: {"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"756px","left":"16px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"756px","left":"16px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tTextx0x61: {
defaultStyle: {
            default: {"width":"184px","height":"24px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"716px","left":"91px","position":"unset"},
            
            },
 default: { 
 
label:"罗田水库-水库中",
editable:false,
cStyle:{"wrapper":{"default":{"width":"184px","height":"24px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"716px","left":"91px","position":"unset"}}}, 
 },
},
tRectx0x62: {
defaultStyle: {
            default: {"width":"625px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"988px","top":"1249px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"625px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"988px","top":"1249px"}}}, 
 },
},
tTextx0x63: {
defaultStyle: {
            default: {"width":"143px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"1007px","top":"1263px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700"},
            
            },
 default: { 
 
label:"古田宝湖",
editable:false,
cStyle:{"wrapper":{"default":{"width":"143px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"1007px","top":"1263px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700"}}}, 
 },
},
tListCardx0x64: {
defaultStyle: {
            default: {"width":"410px","height":"176px","position":"unset","left":"516px","top":"1068px","overflow":"visible"},
            
            },
 default: { 
 
data:[{"title":"所属行政区","num":"贵阳市贵阳市贵阳市贵阳市贵阳市贵阳市贵阳市贵阳市贵阳市贵阳市贵阳市贵阳市贵阳市"},{"title":"所属流域","num":"南盘江"},{"title":"水质类别","num":"Ⅲ类","color":"#00B222"},{"title":"超标站点","num":"12"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"176px","position":"unset","left":"516px","top":"1068px","overflow":"visible"}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tListCardx0x65: {
defaultStyle: {
            default: {"width":"824px","height":"95px","position":"unset","left":"87px","top":"1278px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"所属行政区","num":"贵阳市"},{"title":"所属流域","num":"南盘江"},{"title":"水质类别","num":"Ⅲ类","color":"#00B222"},{"title":"超标站点","num":"12"},{"title":"水质类别","num":"Ⅲ类","color":"#00B222"},{"title":"超标站点","num":"12"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"824px","height":"95px","position":"unset","left":"87px","top":"1278px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"120px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"289px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tRectx0x66: {
defaultStyle: {
            default: {"width":"201px","height":"140px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg10)","position":"unset","left":"1218px","top":"453px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"201px","height":"140px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg10)","position":"unset","left":"1218px","top":"453px","animationName":""}}}, 
 },
},
tTabsx0x67: {
defaultStyle: {
            default: {"width":"192px","height":"15px","top":"465px","left":"38px","position":"unset"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"小时","name":"hour"},{"label":"日","name":"day"},{"label":"月","name":"month"},{"label":"年","name":"year"}],
activeTab:"hour",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"width":"192px","height":"15px","top":"465px","left":"38px","position":"unset"}},"itemWrapper":{"default":{"color":"var(--business-text-avianize)","fontSize":"14px","borderLeft":"1px solid var(--business-text-avianize)","marginLeft":"-1px","width":"auto","paddingLeft":"0px","paddingRight":"10px"},"active":{"backgroundColor":"rgba(23, 62, 228, 0)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)"}},"itemActiveBorder":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x68: {
defaultStyle: {
            default: {"width":"300px","height":"22px","top":"510px","left":"45px","position":"unset","animationName":""},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"全国城市排名","name":"hour"},{"label":"城市排名","name":"day"}],
activeTab:"hour",
tabPositionExtend:"top-start",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"300px","height":"22px","top":"510px","left":"45px","position":"unset","animationName":""}},"itemWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","marginLeft":"-1px","width":"auto","paddingLeft":"18px","paddingRight":"18px"},"active":{"backgroundColor":"rgba(23, 62, 228, 0)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)"}},"itemActiveBorder":{"default":{"display":"none"}}}, 
 },
},
tTabsBasex0x69: {
defaultStyle: {
            default: {"width":"264px","height":"28px","position":"unset","left":"43px","top":"611px","animationName":""},
            
            },
 default: { 
 
data:[{"label":"问题区域分布","value":"region"},{"label":"报警污染物分布","value":"pollutant"}],
space:5,
selectedTabVal:"region",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"264px","height":"28px","position":"unset","left":"43px","top":"611px","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"80px","height":"28px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"14px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"active":{"backgroundImage":"var(--business-tab-content-active-bg)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","height":"28px","width":"80px","-webkit-mask-size":"","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-position":""},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)","backgroundImage":"var(--business-tab-content-active-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}}, 
 },
},
tInputx0x70: {
defaultStyle: {
            default: {"width":"200px","height":"32px","paddingLeft":"12px","paddingRight":"12px","position":"unset","left":"32px","top":"120px","fontSize":"14px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","color":"rgba(255, 255, 255, 1)"},
            
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
cStyle:{"wrapper":{"default":{"width":"200px","height":"32px","paddingLeft":"12px","paddingRight":"12px","position":"unset","left":"32px","top":"120px","fontSize":"14px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","color":"rgba(255, 255, 255, 1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}}}, 
 },
},
tCheckboxx0x71: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justifyContent":"center","width":"291px","height":"20px","position":"unset","left":"32px","top":"275px"},
            
            },
 default: { 
 
data:[{"label":"option1","value":"1","disabled":false},{"label":"option2","value":"2","disabled":false},{"label":"option3","value":"3","disabled":false}],
active:["1"],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justifyContent":"center","width":"291px","height":"20px","position":"unset","left":"32px","top":"275px"}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"}}}, 
 },
},
tRadiox0x72: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"215px","height":"20px","position":"unset","left":"32px","top":"228px"},
            
            },
 default: { 
 
options:[{"label":"1","value":"JPG","disabled":false},{"label":"2","value":"PNG","disabled":false},{"label":"3","value":"PDS","disabled":false}],
active:"1",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"215px","height":"20px","position":"unset","left":"32px","top":"228px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"},"active":{"color":"rgba(255, 255, 255, 1)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tSearchx0x73: {
defaultStyle: {
            default: {"width":"320px","height":"32px","position":"unset","left":"32px","top":"172px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff"},
            
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
cStyle:{"wrapper":{"default":{"width":"320px","height":"32px","position":"unset","left":"32px","top":"172px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tDatePickerx0x74: {
defaultStyle: {
            default: {"width":"302px","height":"33px","position":"unset","left":"36px","top":"326px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:true,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"302px","height":"33px","position":"unset","left":"36px","top":"326px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tCirclex0x75: {
defaultStyle: {
            default: {"width":"113px","height":"113px","borderLeft":"5px solid var(--business-show-bg10)","borderTop":"5px solid var(--business-show-bg10)","borderRight":"5px solid var(--business-show-bg10)","borderBottom":"5px solid var(--business-show-bg10)","position":"unset","left":"1262px","top":"468px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"113px","borderLeft":"5px solid var(--business-show-bg10)","borderTop":"5px solid var(--business-show-bg10)","borderRight":"5px solid var(--business-show-bg10)","borderBottom":"5px solid var(--business-show-bg10)","position":"unset","left":"1262px","top":"468px","animationName":""}}}, 
 },
},
tTextx0x76: {
defaultStyle: {
            default: {"width":"113px","height":"20px","color":"var(--business-unit-icon)","textAlign":"center","fontSize":"14px","lineHeight":"20px","position":"unset","left":"1262px","top":"531px","animationName":""},
            
            },
 default: { 
 
label:"保护区划分",
editable:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"20px","color":"var(--business-unit-icon)","textAlign":"center","fontSize":"14px","lineHeight":"20px","position":"unset","left":"1262px","top":"531px","animationName":""}}}, 
 },
},
tImageBasex0x77: {
defaultStyle: {
            default: {"width":"99px","height":"99px","position":"unset","left":"1269px","top":"475px","animationName":"custom99682e2352e4b","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-05/5a6e9f0d79d94b6c88323b702485b364.png",
fit:"none",
cStyle:{"wrapper":{"default":{"width":"99px","height":"99px","position":"unset","left":"1269px","top":"475px","animationName":"custom99682e2352e4b","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tChartPiePercentx0x78: {
defaultStyle: {
            default: {"height":"113px","width":"113px","position":"unset","left":"1262px","top":"468px","animationName":""},
            
            },
pie: computed(() => activeChartTheme.value?.pie),
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
data:10,
seriesStyle:{"radius":["92%","100%"],"bgColor":"rgba(45, 149, 90,0)","fontSize":0,"fontColor":"rgba(0, 0, 0, 0)","fontWeight":"normal","valueColor":"#FFC000","startAngle":90,"clockwise":false},
cStyle:{"wrapper":{"default":{"height":"113px","width":"113px","position":"unset","left":"1262px","top":"468px","animationName":""}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"legend":{"show":false},"title":{"show":false}})), 
 },
},
tTextUnitx0x79: {
defaultStyle: {
            default: {"width":"113px","height":"29px","position":"unset","left":"1262px","top":"499px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"113px","height":"29px","position":"unset","left":"1262px","top":"499px","animationName":""}},"text":{"default":{"fontFamily":"DIN-black","fontSize":"24px","color":"rgba(255, 255, 255, 1)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-unit-icon)","lineHeight":"20px"}}},
justify:"center",
align:"flex-end",
content:"10",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRankSinglex0x80: {
defaultStyle: {
            default: {"width":"410px","height":"149px","position":"unset","left":"1488px","top":"317px","backgroundColor":"","paddingLeft":"0px","paddingRight":"0px","animationName":""},
            
            },
 default: { 
 
iconSrc:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-05/399ebc9bd5ed4ba49764b2cfba64a673.png",
data:[{"name":"涂料、油里、颜料及类似产品制造","targetValue":100,"currentValue":50,"unit":"家"},{"name":"酒的制造","targetValue":100,"currentValue":55,"unit":"家"}],
cStyle:{"wrapper":{"default":{"width":"410px","height":"149px","position":"unset","left":"1488px","top":"317px","backgroundColor":"","paddingLeft":"0px","paddingRight":"0px","animationName":""}},"index":{"default":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-05/6e508972691b4592aed622dd664d9b7c.svg)","backgroundPosition":"center","backgroundRepeat":"no-repeat","backgroundSize":"auto","color":"rgba(255, 255, 255, 1)","fontSize":"12px","height":"19px","width":"27px","-webkit-mask-image":"","fontStyle":"normal","fontFamily":"方正综艺","lineHeight":"24px"}},"name":{"default":{"color":"var(--business-unit-icon)","fontSize":"14px"}},"proportionBarBg":{"default":{"transform":"none","height":"8px","borderRadius":0,"backgroundColor":"var(--business-show-bg10)","border":"1px solid rgba(255,213,0,0.3)","borderLeft":"1px solid var(--business-show-bg15)","borderTop":"1px solid var(--business-show-bg15)","borderRight":"1px solid var(--business-show-bg15)","borderBottom":"1px solid var(--business-show-bg15)"}},"proportionBarInner":{"default":{"transform":"none","height":"6px","borderRadius":0,"backgroundImage":"linear-gradient(270deg,rgba(255, 213, 0, 1) 0%,rgba(255, 213, 0, 0) 100%)"}},"value":{"default":{"color":"rgba(255, 255, 255, 1)","fontWeight":500,"fontSize":"20px","fontFamily":"DIN-black"}},"unit":{"default":{"color":"var(--business-unit-icon)","fontWeight":400,"fontSize":"14px","paddingLeft":"2px"}},"itemWrapper":{"default":{"paddingTop":"12px","marginTop":"0px","marginBottom":"8px","backgroundColor":"var(--business-show-bg10)","paddingLeft":"16px","paddingRight":"16px","paddingBottom":"12px"}},"innerContainer":{"default":{}}},
tab:false,
keyWord:"",
defaultChecked:"",
autoScroll:false,
speed:3,
dataStyle:[], 
 },
},
tRankSinglex0x81: {
defaultStyle: {
            default: {"width":"410px","height":"60px","position":"unset","left":"1494px","top":"49px","backgroundColor":"var(--business-show-bg10)","paddingLeft":"16px","paddingRight":"16px","animationName":""},
            
            },
 default: { 
 
iconSrc:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-05/80ef17f42c6644bd9c88ef872a2328c1.png",
data:[{"name":"取水量达标率","targetValue":100,"currentValue":55.89,"unit":"%"}],
cStyle:{"wrapper":{"default":{"width":"410px","height":"60px","position":"unset","left":"1494px","top":"49px","backgroundColor":"var(--business-show-bg10)","paddingLeft":"16px","paddingRight":"16px","animationName":""}},"index":{"default":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-28/b8e69359f7f7417cb60f6cf2ee70fdb1.png)","backgroundPosition":"center","backgroundRepeat":"no-repeat","backgroundSize":"auto","color":"rgba(255, 255, 255, 0)","fontSize":"12px","height":"19px","width":"16px"}},"name":{"default":{"color":"var(--business-unit-icon)","fontSize":"14px"}},"proportionBarBg":{"default":{"transform":"none","height":"8px","borderRadius":0,"backgroundColor":"var(--business-show-bg10)","border":"1px solid rgba(255,213,0,0.3)","borderLeft":"1px solid var(--business-show-bg15)","borderTop":"1px solid var(--business-show-bg15)","borderRight":"1px solid var(--business-show-bg15)","borderBottom":"1px solid var(--business-show-bg15)"}},"proportionBarInner":{"default":{"transform":"none","height":"6px","borderRadius":0,"backgroundImage":"linear-gradient(270deg,rgba(0, 123, 255, 1) 0%,rgba(0, 123, 255, 0) 100%)","-webkit-mask-image":""}},"value":{"default":{"color":"rgba(255, 255, 255, 1)","fontWeight":500,"fontSize":"20px","fontFamily":"DIN-black"}},"unit":{"default":{"color":"var(--business-unit-icon)","fontWeight":400,"fontSize":"14px","paddingLeft":"2px"}},"itemWrapper":{"default":{"paddingTop":"10px"}}},
tab:false,
keyWord:"",
defaultChecked:"",
autoScroll:false,
speed:3,
dataStyle:[], 
 },
},
tTabsx0x82: {
defaultStyle: {
            default: {"width":"460px","height":"50px","position":"unset","left":"2287px","top":"2021px","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"水质评价","name":"home","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-06/74dcccade6bd40c9827846e4e0beb204.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/e37bc846a3fe44229b07f0b761c3a1e9.svg"},{"label":"目标考核","name":"work","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-06/cc51599018304a2bb354f2a185242f69.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/490ed07e9da94ef391daeb22bf5d7dff.svg"}],
activeTab:"work",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"width":"460px","height":"50px","position":"unset","left":"2287px","top":"2021px","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}},"itemWrapper":{"default":{"color":"var(--business-text-avianize)","fontFamily":"方正综艺","fontSize":"16px","background":"var(--business-tab-first-bg)","borderLeft":"1px solid var(--business-show-bg50)","marginLeft":"-1px"},"active":{"backgroundColor":"var(--business-tab-first-active-bg)","color":"var(--business-tab-third-active-border)","box-shadow":"inset 0px 0px 11px 0px var(--business-tab-first-active-shadow)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)"},"hover":{"color":"var(--business-tab-third-active-border)"}},"itemActiveBorder":{"default":{"display":"none"}},"itemIcon":{"default":{"vertical-align":"-3px"}}}, 
 },
},
tTabsx0x83: {
defaultStyle: {
            default: {"width":"450px","height":"50px","position":"unset","left":"478px","top":"363px","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottom":"1px solid var(--business-show-bg50)"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"水质评价","name":"home","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-06/74dcccade6bd40c9827846e4e0beb204.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/e37bc846a3fe44229b07f0b761c3a1e9.svg"},{"label":"目标考核","name":"work","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-06/cc51599018304a2bb354f2a185242f69.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/490ed07e9da94ef391daeb22bf5d7dff.svg"}],
activeTab:"home",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"width":"450px","height":"50px","position":"unset","left":"478px","top":"363px","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottom":"1px solid var(--business-show-bg50)"}},"itemWrapper":{"default":{"color":"var(--business-text-avianize)","fontFamily":"方正综艺","fontSize":"16px","background":"var(--business-tab-first-bg)","borderLeft":"1px solid var(--business-show-bg50)","marginLeft":"-1px"},"active":{"backgroundColor":"var(--business-tab-first-active-bg)","color":"var(--business-tab-third-active-border)","box-shadow":"inset 0px 0px 11px 0px var(--business-tab-first-active-shadow)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","lineHeight":"48px"},"hover":{"color":"var(--business-tab-third-active-border)"}},"itemActiveBorder":{"default":{"display":"none"}},"itemIcon":{"default":{"vertical-align":"-3px"}}}, 
 },
},
tChartPieDoughnutDatax0x84: {
defaultStyle: {
            default: {"width":"92px","height":"92px","position":"unset","left":"1526px","top":"570px","animationName":"custom2c48e8b3e5d3","animationDuration":"6s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"1","animationDirection":"normal","opacity":"100% !important"},
            
            },
 default: { 
 
data:[{"value":50,"name":"无臭氧"},{"value":30,"name":"轻度臭氧"},{"value":10,"name":"重度臭氧"},{"value":15,"name":"无数据"}],
alias:{"value":"value","name":"name"},
unit:"（g/L）",
innerText:"",
radius:["80%","72%"],
separation:{"width":1},
shadowRadius:["50%","100%"],
shadowStyle:{"color":"rgba(20, 112, 204, 0)","opacity":1},
showInner:true,
showList:false,
listStyle:{"align":"right","value":true,"fontSize":14,"iconSize":14,"col":2},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"legend":{"show":false},"innerSeries":{"itemStyle":{"color":"rgba(139, 14, 14, 0)"}},"color":["rgba(55,255,0,0.6)","rgba(255, 132, 0, 0.6)","rgba(178, 70, 58, 0.6)","rgba(170, 170, 170, 0.8)"]})),
cStyle:{"wrapper":{"default":{"width":"92px","height":"92px","position":"unset","left":"1526px","top":"570px","animationName":"custom2c48e8b3e5d3","animationDuration":"6s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"1","animationDirection":"normal","opacity":"100% !important"}},"innerText":{"default":{"color":"#fff"}},"chart":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomLeftRadius":"50%","borderBottomRightRadius":"50%","animationName":"custom6926af6ccebf6","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}},
innerStyle:{"numberColor":"rgba(255, 255, 255, 1)","unitColor":"rgba(255, 255, 255, 1)","numberFontsize":0,"unitFontSize":0,"textFontSize":0}, 
 },
},
tChartPieBorderx0x85: {
defaultStyle: {
            default: {"width":"410px","height":"170px","top":"531px","left":"1482px","position":"unset","animationName":""},
            
            },
 default: { 
 
data:[{"value":50,"name":"无黑臭"},{"value":30,"name":"轻度黑臭"},{"value":10,"name":"重度黑臭"},{"value":15,"name":"无数据"}],
alias:{"value":"value","name":"name"},
unit:"%",
radius:["74%","80%"],
separation:{"width":1},
showInner:false,
innerStyle:{"align":"top","color":"#DDD","numberFontsize":"20px","numberFontWeight":"bold"},
showList:true,
listStyle:{"align":"right","value":true,"fontSize":14,"iconSize":14,"col":1},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"legend":{"show":false},"tooltip":{"show":false},"color":["#00FF22","#FF8400","#B2463A","#AAAAAA"]})),
cStyle:{"wrapper":{"default":{"width":"410px","height":"170px","top":"531px","left":"1482px","position":"unset","animationName":""}},"legendItem":{"default":{"width":180,"height":28,"margin":[0,0,5,50]}},"legendValue":{"default":{"color":"#fff","fontSize":16}},"legendName":{"default":{"color":"var(--business-unit-icon)"}}}, 
 },
},
tButtonx0x86: {
defaultStyle: {
            default: {"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","position":"unset","left":"360px","top":"172px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","position":"unset","left":"360px","top":"172px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tCirclex0x87: {
defaultStyle: {
            default: {"width":"94px","height":"94px","borderLeft":"25px solid var(--business-show-bg10)","borderTop":"25px solid var(--business-show-bg10)","borderRight":"25px solid var(--business-show-bg10)","borderBottom":"25px solid var(--business-show-bg10)","position":"unset","left":"1525px","top":"569px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"94px","height":"94px","borderLeft":"25px solid var(--business-show-bg10)","borderTop":"25px solid var(--business-show-bg10)","borderRight":"25px solid var(--business-show-bg10)","borderBottom":"25px solid var(--business-show-bg10)","position":"unset","left":"1525px","top":"569px"}}}, 
 },
},
tCirclex0x88: {
defaultStyle: {
            default: {"width":"170px","height":"170px","position":"unset","left":"1487px","top":"531px","backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"2px solid var(--business-show-bg30)","borderTop":"2px solid var(--business-show-bg30)","borderRight":"2px solid var(--business-show-bg30)","borderBottom":"2px solid var(--business-show-bg30)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"170px","height":"170px","position":"unset","left":"1487px","top":"531px","backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"2px solid var(--business-show-bg30)","borderTop":"2px solid var(--business-show-bg30)","borderRight":"2px solid var(--business-show-bg30)","borderBottom":"2px solid var(--business-show-bg30)","animationName":""}}}, 
 },
},
tRectx0x89: {
defaultStyle: {
            default: {"width":"170px","height":"170px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-11/a1ad711d07e341e8a8e432c6ca3adc43.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"1487px","top":"531px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"170px","height":"170px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-11/a1ad711d07e341e8a8e432c6ca3adc43.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"1487px","top":"531px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x90: {
defaultStyle: {
            default: {"width":"410px","height":"102px","position":"unset","left":"533px","top":"472px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","background":"var(--business-single-show-bg)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"102px","position":"unset","left":"533px","top":"472px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","background":"var(--business-single-show-bg)"}}}, 
 },
},
tRectx0x91: {
defaultStyle: {
            default: {"width":"410px","height":"42px","position":"unset","left":"499px","top":"137px","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"42px","position":"unset","left":"499px","top":"137px","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":""}},"num":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tRectx0x92: {
defaultStyle: {
            default: {"width":"58px","height":"27px","position":"unset","left":"552px","top":"144.5px","backgroundColor":"","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"达标断面",
active:false,
cStyle:{"wrapper":{"default":{"width":"58px","height":"27px","position":"unset","left":"552px","top":"144.5px","backgroundColor":"","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":""}},"text":{"default":{"fontSize":"14px","lineHeight":"24px","color":"#fff"}}}, 
 },
},
tRectx0x93: {
defaultStyle: {
            default: {"width":"2px","height":"26px","position":"unset","left":"499px","top":"145px","backgroundColor":"var(--business-theme)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"2px","height":"26px","position":"unset","left":"499px","top":"145px","backgroundColor":"var(--business-theme)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":""}}}, 
 },
},
tRectx0x94: {
defaultStyle: {
            default: {"width":"44px","height":"27px","position":"unset","left":"748px","top":"144.5px","backgroundColor":"","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"达标率",
active:false,
cStyle:{"wrapper":{"default":{"width":"44px","height":"27px","position":"unset","left":"748px","top":"144.5px","backgroundColor":"","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":""}},"text":{"default":{"fontSize":"14px","lineHeight":"24px","color":"#fff"}}}, 
 },
},
tRectx0x95: {
defaultStyle: {
            default: {"width":"1px","height":"17px","position":"unset","left":"717px","top":"149.5px","backgroundColor":"var(--business-theme)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"17px","position":"unset","left":"717px","top":"149.5px","backgroundColor":"var(--business-theme)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"0px solid rgba(23,62,228,0)","animationName":""}}}, 
 },
},
tRowx0x96: {
defaultStyle: {
            default: {"width":"83px","height":"21px","position":"unset","left":"806px","top":"147.5px","letterSpacing":"0px","animationName":"","fontWeight":"600"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"83px","height":"21px","position":"unset","left":"806px","top":"147.5px","letterSpacing":"0px","animationName":"","fontWeight":"600"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x96x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","position":"unset","left":"1653.817075450143px","top":"1048.9020811028963px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"18px","lineHeight":"18px","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold"},
            
            },
 default: { 
 
label:"90",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","position":"unset","left":"1653.817075450143px","top":"1048.9020811028963px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"18px","lineHeight":"18px","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold"}}}, 
 },
},
tTextx0x96x1: {
defaultStyle: {
            default: {"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","position":"unset","left":"1489.1561108292785px","top":"1505.5351927602997px","animationName":"","fontSize":"14px","lineHeight":"14px","marginLeft":"4px"},
            
            },
 default: { 
 
label:"%",
editable:false,
cStyle:{"wrapper":{"default":{"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","position":"unset","left":"1489.1561108292785px","top":"1505.5351927602997px","animationName":"","fontSize":"14px","lineHeight":"14px","marginLeft":"4px"}}}, 
 },
},
tRowx0x97: {
defaultStyle: {
            default: {"width":"85px","height":"21px","position":"unset","left":"614px","top":"147.5px","letterSpacing":"0px","animationName":"","fontWeight":"600"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"85px","height":"21px","position":"unset","left":"614px","top":"147.5px","letterSpacing":"0px","animationName":"","fontWeight":"600"}}},
gutter:0,
justify:"center",
align:"middle", 
 },
},
tTextx0x97x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","position":"unset","left":"1180.5928312602796px","top":"883.0816483277354px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"18px","lineHeight":"18px","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold"},
            
            },
 default: { 
 
label:"9",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-aqi-green)","textAlign":"center","position":"unset","left":"1180.5928312602796px","top":"883.0816483277354px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"18px","lineHeight":"18px","max-width":"200px","animationName":"","fontWeight":"700","fontFamily":"DIN-bold"}}}, 
 },
},
tTextx0x97x1: {
defaultStyle: {
            default: {"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","position":"unset","left":"1499.1561108292785px","top":"1515.5351927602997px","animationName":"","fontSize":"14px","lineHeight":"14px","marginLeft":"4px","marginRight":"4px","textIndent":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
label:"/",
editable:false,
cStyle:{"wrapper":{"default":{"width":"12px","height":"auto","color":"var(--business-unit-icon)","textAlign":"right","position":"unset","left":"1499.1561108292785px","top":"1515.5351927602997px","animationName":"","fontSize":"14px","lineHeight":"14px","marginLeft":"4px","marginRight":"4px","textIndent":"0px","paddingLeft":"0px"}}}, 
 },
},
tTextx0x97x2: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-white)","fontFamily":"DIN-bold","fontWeight":"500","animationName":"","left":"1119.5928312602796px","top":"875.0816483277354px"},
            
            },
 default: { 
 
label:"10",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-white)","fontFamily":"DIN-bold","fontWeight":"500","animationName":"","left":"1119.5928312602796px","top":"875.0816483277354px"}}}, 
 },
},
tRectx0x98: {
defaultStyle: {
            default: {"width":"201px","height":"140px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg10)","position":"unset","left":"988px","top":"454px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"201px","height":"140px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg10)","position":"unset","left":"988px","top":"454px"}}}, 
 },
},
tComponentx0x99: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"37px","top":"552px"},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"37px","top":"552px"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x100: {
defaultStyle: {
            default: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"77px","top":"557px","fontFamily":"方正综艺","fontSize":"20px"},
            
            },
 default: { 
 
label:"断面评价结果",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"77px","top":"557px","fontFamily":"方正综艺","fontSize":"20px"}}}, 
 },
},
tListCardx0x101: {
defaultStyle: {
            default: {"width":"418px","height":"68px","position":"unset","left":"484px","top":"43px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
data:[{"title":"断面总数","num":123,"unit":"个","color":"var(--business-theme)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-05/c455d26bb2b44f2cb0b5aecbd0b2eb43.png"},{"title":"优良断面","num":233,"unit":"个","color":"rgba(0, 255, 34, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-05/80b32d24a02548d4a4766b6f29301a37.png"},{"title":"劣V断面","num":344,"unit":"个","color":"rgba(255, 192, 0, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-05/3e691744524c468f8cd1990f8bc03b69.png"}],
spacingX:8,
col:3,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"418px","height":"68px","position":"unset","left":"484px","top":"43px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"height":"66px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"num":{"default":{"fontSize":"24px","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"14px","color":"var(--t-white)","marginTop":"0px"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"17px"}},"numBox":{"default":{"marginTop":"6px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"alignItems":"flex-start","marginLeft":"8px"}}}, 
 },
},
tTabsBasex0x102: {
defaultStyle: {
            default: {"width":"183px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","left":"40px","top":"391px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"},
            
            },
 default: { 
 
data:[{"label":"月","value":"MONTH"},{"label":"年","value":"YEAR"},{"label":"日","value":"DATA"}],
space:0,
selectedTabVal:"MONTH",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"183px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","left":"40px","top":"391px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"}},"itemWrapper":{"default":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","backgroundColor":"rgba(0, 61, 155, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"120px","height":"32px","fontSize":"14px","lineHeight":"32px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(0,61,155,0)","borderTop":"1px solid rgba(0,61,155,0)","borderRight":"1px solid rgba(0,61,155,0)","borderBottom":"1px solid rgba(0,61,155,0)","color":"var(--business-text-avianize)"},"active":{"background":"var(--business-tab-third-active-fill)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"rgba(3, 12, 52, 0)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","color":"var(--business-tab-third-active-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"32px"},"hover":{"backgroundColor":"rgba(0, 61, 155, 0)","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","color":"var(--business-tab-third-active-border)"}}}, 
 },
},
tChartDesignx0x103: {
defaultStyle: {
            default: {"height":"164px","width":"410px","position":"unset","left":"1006px","top":"917px"},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"164px","width":"410px","position":"unset","left":"1006px","top":"917px"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"color":["rgba(255, 106, 0, 0.4)","rgba(244, 220, 0, 0.4)","rgba(55, 255, 0, 0.4)","rgba(0, 255, 255, 0.4)","rgba(58, 156, 255, 0.4)","rgba(184, 43, 255, 0.4)"],"xAxis":{"show":false},"yAxis":{"show":false},"tooltip":{"backgroundColor":"rgba(0, 0, 0, 0.8)","borderColor":"rgba(255, 255, 255, 0.5)","textStyle":{"color":"#fff"}},"series":[{"type":"treemap","width":"100%","height":"100%","breadcrumb":{"show":false},"roam":false,"nodeClick":false,"itemStyle":{"borderColor":"rgba(0,0,0,0)"},"label":{"fontSize":16,"fontWeight":700},"levels":[{"itemStyle":{"gapWidth":5}},{"colorSaturation":[0.3,0.6],"itemStyle":{"borderColorSaturation":0.5,"borderWidth":2}}],"data":[{"name":"nodeA","value":20},{"name":"nodeB","value":20},{"name":"nodeC","value":15},{"name":"nodeD","value":8},{"name":"nodeE","value":5},{"name":"nodeF","value":5}]}]})), 
 },
},
tCirclex0x104: {
defaultStyle: {
            default: {"width":"113px","height":"113px","borderLeft":"5px solid var(--business-show-bg10)","borderTop":"5px solid var(--business-show-bg10)","borderRight":"5px solid var(--business-show-bg10)","borderBottom":"5px solid var(--business-show-bg10)","position":"unset","left":"1032px","top":"469px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"113px","borderLeft":"5px solid var(--business-show-bg10)","borderTop":"5px solid var(--business-show-bg10)","borderRight":"5px solid var(--business-show-bg10)","borderBottom":"5px solid var(--business-show-bg10)","position":"unset","left":"1032px","top":"469px"}}}, 
 },
},
tTextx0x105: {
defaultStyle: {
            default: {"width":"113px","height":"20px","color":"var(--business-unit-icon)","textAlign":"center","fontSize":"14px","lineHeight":"20px","position":"unset","left":"1032px","top":"532px"},
            
            },
 default: { 
 
label:"保护区划分",
editable:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"20px","color":"var(--business-unit-icon)","textAlign":"center","fontSize":"14px","lineHeight":"20px","position":"unset","left":"1032px","top":"532px"}}}, 
 },
},
tImageBasex0x106: {
defaultStyle: {
            default: {"width":"99px","height":"99px","position":"unset","left":"1039px","top":"476px","animationName":"custom7498be6597a9b","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-05/8818f124d2894c1688b0aa8ac9f672d3.png",
fit:"none",
cStyle:{"wrapper":{"default":{"width":"99px","height":"99px","position":"unset","left":"1039px","top":"476px","animationName":"custom7498be6597a9b","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tChartPiePercentx0x107: {
defaultStyle: {
            default: {"height":"113px","width":"113px","position":"unset","left":"1032px","top":"469px"},
            
            },
pie: computed(() => activeChartTheme.value?.pie),
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
data:66.67,
seriesStyle:{"radius":["92%","100%"],"bgColor":"rgba(45, 149, 90,0)","fontSize":0,"fontColor":"rgba(0, 0, 0, 0)","fontWeight":"normal","valueColor":"#00FF22","startAngle":90,"clockwise":false},
cStyle:{"wrapper":{"default":{"height":"113px","width":"113px","position":"unset","left":"1032px","top":"469px"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"legend":{"show":false},"title":{"show":false}})), 
 },
},
tTextUnitx0x108: {
defaultStyle: {
            default: {"width":"113px","height":"29px","position":"unset","left":"1032px","top":"500px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"113px","height":"29px","position":"unset","left":"1032px","top":"500px"}},"text":{"default":{"fontFamily":"DIN-black","fontSize":"24px","color":"rgba(255, 255, 255, 1)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-unit-icon)","lineHeight":"20px"}}},
justify:"center",
align:"flex-end",
content:"66.67",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRankSinglex0x109: {
defaultStyle: {
            default: {"width":"410px","height":"60px","position":"unset","left":"1494px","top":"212px","backgroundColor":"var(--business-show-bg10)","paddingLeft":"16px","paddingRight":"16px","animationName":""},
            
            },
 default: { 
 
iconSrc:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-05/399ebc9bd5ed4ba49764b2cfba64a673.png",
data:[{"name":"水质达标率","targetValue":100,"currentValue":29,"unit":"%"}],
cStyle:{"wrapper":{"default":{"width":"410px","height":"60px","position":"unset","left":"1494px","top":"212px","backgroundColor":"var(--business-show-bg10)","paddingLeft":"16px","paddingRight":"16px","animationName":""}},"index":{"default":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-28/b8e69359f7f7417cb60f6cf2ee70fdb1.png)","backgroundPosition":"center","backgroundRepeat":"no-repeat","backgroundSize":"auto","color":"rgba(255, 255, 255, 0)","fontSize":"12px","height":"19px","width":"16px"}},"name":{"default":{"color":"var(--business-unit-icon)","fontSize":"14px"}},"proportionBarBg":{"default":{"transform":"none","height":"8px","borderRadius":0,"backgroundColor":"var(--business-show-bg10)","border":"1px solid rgba(255,213,0,0.3)","borderLeft":"1px solid var(--business-show-bg15)","borderTop":"1px solid var(--business-show-bg15)","borderRight":"1px solid var(--business-show-bg15)","borderBottom":"1px solid var(--business-show-bg15)"}},"proportionBarInner":{"default":{"transform":"none","height":"6px","borderRadius":0,"backgroundImage":"linear-gradient(270deg,rgba(255, 213, 0, 1) 0%,rgba(255, 213, 0, 0) 100%)"}},"value":{"default":{"color":"rgba(255, 255, 255, 1)","fontWeight":500,"fontSize":"20px","fontFamily":"DIN-black"}},"unit":{"default":{"color":"var(--business-unit-icon)","fontWeight":400,"fontSize":"14px","paddingLeft":"2px"}},"itemWrapper":{"default":{"paddingTop":"10px"}}},
tab:false,
keyWord:"",
defaultChecked:"",
autoScroll:false,
speed:3,
dataStyle:[], 
 },
},
tRankSinglex0x110: {
defaultStyle: {
            default: {"width":"410px","height":"60px","position":"unset","left":"1494px","top":"131px","backgroundColor":"var(--business-show-bg10)","paddingLeft":"16px","paddingRight":"16px"},
            
            },
 default: { 
 
iconSrc:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-05/fd9833770b074836a1d43a339d0b9d6b.png",
data:[{"name":"水质达标率","targetValue":100,"currentValue":35,"unit":"%"}],
cStyle:{"wrapper":{"default":{"width":"410px","height":"60px","position":"unset","left":"1494px","top":"131px","backgroundColor":"var(--business-show-bg10)","paddingLeft":"16px","paddingRight":"16px"}},"index":{"default":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-28/b8e69359f7f7417cb60f6cf2ee70fdb1.png)","backgroundPosition":"center","backgroundRepeat":"no-repeat","backgroundSize":"auto","color":"rgba(255, 255, 255, 0)","fontSize":"12px","height":"19px","width":"16px"}},"name":{"default":{"color":"var(--business-unit-icon)","fontSize":"14px"}},"proportionBarBg":{"default":{"transform":"none","height":"8px","borderRadius":0,"backgroundColor":"var(--business-show-bg10)","border":"1px solid rgba(255,213,0,0.3)","borderLeft":"1px solid var(--business-show-bg15)","borderTop":"1px solid var(--business-show-bg15)","borderRight":"1px solid var(--business-show-bg15)","borderBottom":"1px solid var(--business-show-bg15)"}},"proportionBarInner":{"default":{"transform":"none","height":"6px","borderRadius":0,"backgroundImage":"linear-gradient(270deg,rgba(0, 255, 34, 1) 0%,rgba(0, 255, 34, 0) 99.63961764498873%)","-webkit-mask-image":""}},"value":{"default":{"color":"rgba(255, 255, 255, 1)","fontWeight":500,"fontSize":"20px","fontFamily":"DIN-black"}},"unit":{"default":{"color":"var(--business-unit-icon)","fontWeight":400,"fontSize":"14px","paddingLeft":"2px"}},"itemWrapper":{"default":{"paddingTop":"10px"}}},
tab:false,
keyWord:"",
defaultChecked:"",
autoScroll:false,
speed:3,
dataStyle:[], 
 },
},
tChartBarSimplex0x111: {
defaultStyle: {
            default: {"width":"410px","height":"243px","position":"unset","left":"1480px","top":"785px","animationName":""},
            
            },
bar: computed(() => activeChartTheme.value?.bar),
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"width":"410px","height":"243px","position":"unset","left":"1480px","top":"785px","animationName":""}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true,"top":"15%"},"legend":{"textStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":13},"itemWidth":10,"itemHeight":10,"icon":"rect","padding":[3,5,5,5],"top":"top","orient":"horizontal","show":false},"tooltip":{"backgroundColor":"rgba(0, 0, 0, 0.8)","borderColor":"rgba(255, 255, 255, 0.5)","textStyle":{"color":"rgba(255, 255, 255, 1)"}},"xAxis":{"axisLabel":{"color":"rgba(255, 255, 255, 0.8)","fontSize":13,"rotate":45},"axisLine":{"lineStyle":{"type":"solid","color":"rgba(255, 255, 255, 0.4)"}},"axisTick":{"show":true,"lineStyle":{"color":"rgba(255, 255, 255, 0.4)"}},"nameTextStyle":{"color":"rgba(255, 255, 255, 0.7)","fontSize":13}},"yAxis":{"axisLabel":{"color":"rgba(255, 255, 255, 0.8)","fontSize":13},"axisLine":{"lineStyle":{"type":"solid","color":"rgba(255, 255, 255, 0.4)"}},"name":"家","nameTextStyle":{"color":"rgba(255, 255, 255, 0.7)","align":"right","padding":[0,0,10,-24],"fontSize":13},"splitLine":{"lineStyle":{"type":"dashed","color":"rgba(255, 255, 255, 0.2)"}}},"color":["#46DC87","#00FF22","#FFC000","#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"]})),
data:[{"num":100,"revenue":50,"count":100,"label":"周一"},{"num":110,"revenue":224,"count":50,"label":"周二"},{"num":130,"revenue":222,"count":40,"label":"周三"},{"num":150,"revenue":328,"count":34,"label":"周四"},{"num":300,"revenue":50,"count":60,"label":"周五"},{"num":200,"revenue":422,"count":45,"label":"周六"},{"num":300,"revenue":28,"count":56,"label":"周日"}],
seriesSetting:{"xAxisLabel":"label","data":[{"name":"达标数量","dataKey":"revenue","style":{"barWidth":12}}]}, 
 },
},
tChartBarSimplex0x112: {
defaultStyle: {
            default: {"width":"410px","height":"243px","position":"unset","left":"1003px","top":"653px"},
            
            },
bar: computed(() => activeChartTheme.value?.bar),
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"width":"410px","height":"243px","position":"unset","left":"1003px","top":"653px"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true,"top":"15%"},"legend":{"textStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":13},"itemWidth":10,"itemHeight":10,"icon":"rect","padding":[3,5,5,5],"top":"top","orient":"horizontal"},"tooltip":{"backgroundColor":"rgba(0, 0, 0, 0.8)","borderColor":"rgba(255, 255, 255, 0.5)","textStyle":{"color":"rgba(255, 255, 255, 1)"}},"xAxis":{"axisLabel":{"color":"rgba(255, 255, 255, 0.8)","fontSize":13},"axisLine":{"lineStyle":{"type":"solid","color":"rgba(255, 255, 255, 0.4)"}},"axisTick":{"show":true,"lineStyle":{"color":"rgba(255, 255, 255, 0.4)"}},"nameTextStyle":{"color":"rgba(255, 255, 255, 0.7)","fontSize":13}},"yAxis":{"axisLabel":{"color":"rgba(255, 255, 255, 0.8)","fontSize":13},"axisLine":{"lineStyle":{"type":"solid","color":"rgba(255, 255, 255, 0.4)"}},"name":"个","nameTextStyle":{"color":"rgba(255, 255, 255, 0.7)","align":"right","padding":[0,0,10,-24],"fontSize":13},"splitLine":{"lineStyle":{"type":"dashed","color":"rgba(255, 255, 255, 0.2)"}}},"color":["#00FF22","#FFC000","#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"]})),
data:[{"num":100,"revenue":50,"count":100,"label":"周一"},{"num":110,"revenue":224,"count":50,"label":"周二"},{"num":130,"revenue":222,"count":40,"label":"周三"},{"num":150,"revenue":328,"count":34,"label":"周四"},{"num":300,"revenue":50,"count":60,"label":"周五"},{"num":200,"revenue":422,"count":45,"label":"周六"},{"num":300,"revenue":28,"count":56,"label":"周日"}],
seriesSetting:{"xAxisLabel":"label","data":[{"name":"达标数量","dataKey":"revenue","style":{"barWidth":12}},{"name":"监测数量","dataKey":"revenue","style":{"barWidth":12}}]}, 
 },
},
tListCardx0x113: {
defaultStyle: {
            default: {"width":"135px","height":"64px","position":"unset","left":"768px","top":"500px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
data:[{"title":"水质超标报警","num":12,"unit":"个"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"135px","height":"64px","position":"unset","left":"768px","top":"500px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"height":"auto","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"rgba(23, 62, 228, 0)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"num":{"default":{"fontSize":"36px","fontWeight":"700","marginRight":"2px","lineHeight":"45px","textAlign":"left","fontFamily":"DIN-bold","color":"rgba(255, 255, 255, 1)"}},"unit":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)"}},"title":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)","marginTop":"0px"}},"icon":{"default":{"width":"36px","height":"36px","left":"16px","marginLeft":"14px"}},"numBox":{"default":{"marginTop":"4px","justifyContent":"flex-start"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"textAlign":"left","marginLeft":"4px"}}}, 
 },
},
tRectx0x114: {
defaultStyle: {
            default: {"width":"112px","height":"82px","position":"unset","left":"614px","top":"492px","backgroundImage":"var(--business-control-unit-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"112px","height":"82px","position":"unset","left":"614px","top":"492px","backgroundImage":"var(--business-control-unit-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tRectx0x115: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1575px","top":"1260px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1575px","top":"1260px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
});
const setTabsIcon = () => {
// 设置tabs图标
state.tabs[0].iconSrc = getCssVariable('--business-tab-water');
state.tabs[1].iconSrc = getCssVariable('--business-tab-target');
};
const setCardIcon = () => {
// 设置card图标
state.cards.forEach((item) => {
  if (!item.num) {
    item.icon = getCssVariable('--business-alarm-default-icon');
  } else {
    item.icon = 'http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/6d69bdc653634b72b98e082ec9201bf8.svg';
  }
})
};
const initChart = () => {
state.chartOption = {
  grid: {
    top: "15%",
    left: '8%',
    right: '4%',
    bottom: '12%'
  },
  color: ['#00FF22', '#FFC000', '#2ec7c9', '#b6a2de', '#5ab1ef'],
  legend: {
    show: true,
    icon: 'rect',
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: 13
    }
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    textStyle: {
      color: 'rgba(255, 255, 255, 1)'
    },
    formatter: function (params) {
      // tooltip标题
      let titleHtmlStr = params[0].name;
 
      // tooltip详情内容
      const itemHtmlStrArr = params.map((item) => {
        return `<div style="display: flex;align-items:center;">
          ${item.marker}
          <div style="margin: 0 20px 0 2px;">${item.seriesName}</div>
          <span style="margin-left: auto;text-align: right;font-weight: 900;">${getWaterChartLabel(item.value)}</span>
        </div>`;
      });
      const contentHtmlStr = itemHtmlStrArr.join('');
 
      // 最终html字符串
      const resHtmlStr = titleHtmlStr + contentHtmlStr;
      return resHtmlStr;
      }
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLabel: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: 13,
      rotate: 45
    },
    axisLine: {
      lineStyle: {
        type: 'solid',
        color: 'rgba(255, 255, 255, 0.4)'
      }
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.4)'
      }
    },
    nameTextStyle: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 13
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: function (value) {
        return getWaterChartLabel(value);
      },
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: 13
    },
    axisLine: {
      show: true,
      lineStyle: {
        type: 'solid',
        color: 'rgba(255, 255, 255, 0.4)'
      }
    },
    name: '',
    nameTextStyle: {
      color: 'rgba(255, 255, 255, 0.7)',
      align: 'right',
      padding: [0, 0, 10, -24],
      fontSize: 13
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: 'rgba(255, 255, 255, 0.2)'
      }
    }
  },
  series: [
    {
      name: '当月值',
      data: [2, 3, 4, 5, 1, 2, 2],
      type: 'bar',
      barWidth: 12
    },
    {
      name: '累计均值',
      data: [2, 3, 2, 4, 6, 1, 3],
      type: 'bar',
      barWidth: 12
    },
    {
      name: '年度目标',
      type: 'line',
      silent: true,
      markLine: {
        symbol: 'none',
        label: {
          color: '#2ec7c9',
          fontSize: 12
        },
        data: [
          {
            yAxis: 5
          }
        ]
      }
    },
    {
      name: '去年同期',
      data: [2, 3, 2, 4, 5, 1, 3],
      type: 'bar',
      barWidth: 12
    }
  ]
}
};
const getWaterChartLabel = (value) => {
// 设置x轴显示的文本
if (value === 1) {
  value = 'Ⅰ类';
} else if (value === 2) {
  value = 'Ⅱ类';
} else if (value === 3) {
  value = 'Ⅲ类';
} else if (value === 4) {
  value = 'Ⅳ类';
} else if (value === 5) {
  value = 'Ⅴ类';
} else if (value === 6) {
  value = '劣Ⅴ类';
} else {
  value = '-';
}
return value;
};
const ontabClick1733455647841 = (data) => {
// 设置变量值
state.activeTab = data.name;
};
const ontabClick1733279319009_0_0 = (data) => {
// 设置变量值
state.getRankingType = data.value;
};
 function handleWindowResize() {
                            setPageScale('t-l-c-showComponents', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-showComponents', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 执行自定义方法
setTabsIcon();
// 执行自定义方法
setCardIcon();
// 执行自定义方法
initChart();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTextx0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0.default, componentState.tTextx0x0?.[state.screenSize]));

 const tChartDesignx0x1ComputedData = computed(() => _.merge({}, componentState.tChartDesignx0x1.default, componentState.tChartDesignx0x1?.[state.screenSize]));

 const tChartDesignx0x2ComputedData = computed(() => _.merge({}, componentState.tChartDesignx0x2.default, componentState.tChartDesignx0x2?.[state.screenSize]));

 const tChartDesignx0x3ComputedData = computed(() => _.merge({}, componentState.tChartDesignx0x3.default, componentState.tChartDesignx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tSelectx0x5ComputedData = computed(() => _.merge({}, componentState.tSelectx0x5.default, componentState.tSelectx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tListCardx0x7ComputedData = computed(() => _.merge({}, componentState.tListCardx0x7.default, componentState.tListCardx0x7?.[state.screenSize]));

 const tListCardx0x8ComputedData = computed(() => _.merge({}, componentState.tListCardx0x8.default, componentState.tListCardx0x8?.[state.screenSize]));

 const tTablex0x9ComputedData = computed(() => _.merge({}, componentState.tTablex0x9.default, componentState.tTablex0x9?.[state.screenSize]));

 const tRectx0x10ComputedData = computed(() => _.merge({}, componentState.tRectx0x10.default, componentState.tRectx0x10?.[state.screenSize]));

 const tComponentx0x11ComputedData = computed(() => _.merge({}, componentState.tComponentx0x11.default, componentState.tComponentx0x11?.[state.screenSize]));

 const tRectx0x12ComputedData = computed(() => _.merge({}, componentState.tRectx0x12.default, componentState.tRectx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTabsx0x14ComputedData = computed(() => _.merge({}, componentState.tTabsx0x14.default, componentState.tTabsx0x14?.[state.screenSize]));

 const tRectx0x15ComputedData = computed(() => _.merge({}, componentState.tRectx0x15.default, componentState.tRectx0x15?.[state.screenSize]));

 const tTextx0x16ComputedData = computed(() => _.merge({}, componentState.tTextx0x16.default, componentState.tTextx0x16?.[state.screenSize]));

 const tRectx0x17ComputedData = computed(() => _.merge({}, componentState.tRectx0x17.default, componentState.tRectx0x17?.[state.screenSize]));

 const tTextx0x18ComputedData = computed(() => _.merge({}, componentState.tTextx0x18.default, componentState.tTextx0x18?.[state.screenSize]));

 const tRectx0x19ComputedData = computed(() => _.merge({}, componentState.tRectx0x19.default, componentState.tRectx0x19?.[state.screenSize]));

 const tCirclex0x20ComputedData = computed(() => _.merge({}, componentState.tCirclex0x20.default, componentState.tCirclex0x20?.[state.screenSize]));

 const tTextx0x21ComputedData = computed(() => _.merge({}, componentState.tTextx0x21.default, componentState.tTextx0x21?.[state.screenSize]));

 const tTextx0x22ComputedData = computed(() => _.merge({}, componentState.tTextx0x22.default, componentState.tTextx0x22?.[state.screenSize]));

 const tTextx0x23ComputedData = computed(() => _.merge({}, componentState.tTextx0x23.default, componentState.tTextx0x23?.[state.screenSize]));

 const tTextx0x24ComputedData = computed(() => _.merge({}, componentState.tTextx0x24.default, componentState.tTextx0x24?.[state.screenSize]));

 const tScrollableCardsx0x25ComputedData = computed(() => _.merge({}, componentState.tScrollableCardsx0x25.default, componentState.tScrollableCardsx0x25?.[state.screenSize]));

 const tTextx0x26ComputedData = computed(() => _.merge({}, componentState.tTextx0x26.default, componentState.tTextx0x26?.[state.screenSize]));

 const tRowx0x27ComputedData = computed(() => _.merge({}, componentState.tRowx0x27.default, componentState.tRowx0x27?.[state.screenSize]));

 const tTextx0x27x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x27x0.default, componentState.tTextx0x27x0?.[state.screenSize]));

 const tTextx0x27x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x27x1.default, componentState.tTextx0x27x1?.[state.screenSize]));

 const tListCardCommonx0x27x2ComputedData = computed(() => _.merge({}, componentState.tListCardCommonx0x27x2.default, componentState.tListCardCommonx0x27x2?.[state.screenSize]));

 const tListCardCommonx0x27x3ComputedData = computed(() => _.merge({}, componentState.tListCardCommonx0x27x3.default, componentState.tListCardCommonx0x27x3?.[state.screenSize]));

 const tRectx0x27x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x27x4.default, componentState.tRectx0x27x4?.[state.screenSize]));

 const tSwitchx0x28ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x28.default, componentState.tSwitchx0x28?.[state.screenSize]));

 const tTextx0x29ComputedData = computed(() => _.merge({}, componentState.tTextx0x29.default, componentState.tTextx0x29?.[state.screenSize]));

 const tRectx0x30ComputedData = computed(() => _.merge({}, componentState.tRectx0x30.default, componentState.tRectx0x30?.[state.screenSize]));

 const tRectx0x31ComputedData = computed(() => _.merge({}, componentState.tRectx0x31.default, componentState.tRectx0x31?.[state.screenSize]));

 const tRectx0x32ComputedData = computed(() => _.merge({}, componentState.tRectx0x32.default, componentState.tRectx0x32?.[state.screenSize]));

 const tChartLiquidfillx0x33ComputedData = computed(() => _.merge({}, componentState.tChartLiquidfillx0x33.default, componentState.tChartLiquidfillx0x33?.[state.screenSize]));

 const tRectx0x34ComputedData = computed(() => _.merge({}, componentState.tRectx0x34.default, componentState.tRectx0x34?.[state.screenSize]));

 const tRectx0x35ComputedData = computed(() => _.merge({}, componentState.tRectx0x35.default, componentState.tRectx0x35?.[state.screenSize]));

 const tRectx0x36ComputedData = computed(() => _.merge({}, componentState.tRectx0x36.default, componentState.tRectx0x36?.[state.screenSize]));

 const tRowx0x37ComputedData = computed(() => _.merge({}, componentState.tRowx0x37.default, componentState.tRowx0x37?.[state.screenSize]));

 const tTextx0x37x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x37x0.default, componentState.tTextx0x37x0?.[state.screenSize]));

 const tTextx0x37x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x37x1.default, componentState.tTextx0x37x1?.[state.screenSize]));

 const tRectx0x38ComputedData = computed(() => _.merge({}, componentState.tRectx0x38.default, componentState.tRectx0x38?.[state.screenSize]));

 const tTextx0x39ComputedData = computed(() => _.merge({}, componentState.tTextx0x39.default, componentState.tTextx0x39?.[state.screenSize]));

 const tRectx0x40ComputedData = computed(() => _.merge({}, componentState.tRectx0x40.default, componentState.tRectx0x40?.[state.screenSize]));

 const tTextx0x41ComputedData = computed(() => _.merge({}, componentState.tTextx0x41.default, componentState.tTextx0x41?.[state.screenSize]));

 const tTextx0x42ComputedData = computed(() => _.merge({}, componentState.tTextx0x42.default, componentState.tTextx0x42?.[state.screenSize]));

 const tTextx0x43ComputedData = computed(() => _.merge({}, componentState.tTextx0x43.default, componentState.tTextx0x43?.[state.screenSize]));

 const tTextx0x44ComputedData = computed(() => _.merge({}, componentState.tTextx0x44.default, componentState.tTextx0x44?.[state.screenSize]));

 const tTextx0x45ComputedData = computed(() => _.merge({}, componentState.tTextx0x45.default, componentState.tTextx0x45?.[state.screenSize]));

 const tTextx0x46ComputedData = computed(() => _.merge({}, componentState.tTextx0x46.default, componentState.tTextx0x46?.[state.screenSize]));

 const tRectx0x47ComputedData = computed(() => _.merge({}, componentState.tRectx0x47.default, componentState.tRectx0x47?.[state.screenSize]));

 const tRectx0x48ComputedData = computed(() => _.merge({}, componentState.tRectx0x48.default, componentState.tRectx0x48?.[state.screenSize]));

 const tRectx0x49ComputedData = computed(() => _.merge({}, componentState.tRectx0x49.default, componentState.tRectx0x49?.[state.screenSize]));

 const tRectx0x50ComputedData = computed(() => _.merge({}, componentState.tRectx0x50.default, componentState.tRectx0x50?.[state.screenSize]));

 const tChartLiquidfillx0x51ComputedData = computed(() => _.merge({}, componentState.tChartLiquidfillx0x51.default, componentState.tChartLiquidfillx0x51?.[state.screenSize]));

 const tRowx0x52ComputedData = computed(() => _.merge({}, componentState.tRowx0x52.default, componentState.tRowx0x52?.[state.screenSize]));

 const tTextx0x52x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x52x0.default, componentState.tTextx0x52x0?.[state.screenSize]));

 const tTextx0x52x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x52x1.default, componentState.tTextx0x52x1?.[state.screenSize]));

 const tTablex0x53ComputedData = computed(() => _.merge({}, componentState.tTablex0x53.default, componentState.tTablex0x53?.[state.screenSize]));

 const tRectx0x54ComputedData = computed(() => _.merge({}, componentState.tRectx0x54.default, componentState.tRectx0x54?.[state.screenSize]));

 const tRectx0x55ComputedData = computed(() => _.merge({}, componentState.tRectx0x55.default, componentState.tRectx0x55?.[state.screenSize]));

 const tRectx0x56ComputedData = computed(() => _.merge({}, componentState.tRectx0x56.default, componentState.tRectx0x56?.[state.screenSize]));

 const tRectx0x57ComputedData = computed(() => _.merge({}, componentState.tRectx0x57.default, componentState.tRectx0x57?.[state.screenSize]));

 const tTextx0x58ComputedData = computed(() => _.merge({}, componentState.tTextx0x58.default, componentState.tTextx0x58?.[state.screenSize]));

 const tTextx0x59ComputedData = computed(() => _.merge({}, componentState.tTextx0x59.default, componentState.tTextx0x59?.[state.screenSize]));

 const tRectx0x60ComputedData = computed(() => _.merge({}, componentState.tRectx0x60.default, componentState.tRectx0x60?.[state.screenSize]));

 const tTextx0x61ComputedData = computed(() => _.merge({}, componentState.tTextx0x61.default, componentState.tTextx0x61?.[state.screenSize]));

 const tRectx0x62ComputedData = computed(() => _.merge({}, componentState.tRectx0x62.default, componentState.tRectx0x62?.[state.screenSize]));

 const tTextx0x63ComputedData = computed(() => _.merge({}, componentState.tTextx0x63.default, componentState.tTextx0x63?.[state.screenSize]));

 const tListCardx0x64ComputedData = computed(() => _.merge({}, componentState.tListCardx0x64.default, componentState.tListCardx0x64?.[state.screenSize]));

 const tListCardx0x65ComputedData = computed(() => _.merge({}, componentState.tListCardx0x65.default, componentState.tListCardx0x65?.[state.screenSize]));

 const tRectx0x66ComputedData = computed(() => _.merge({}, componentState.tRectx0x66.default, componentState.tRectx0x66?.[state.screenSize]));

 const tTabsx0x67ComputedData = computed(() => _.merge({}, componentState.tTabsx0x67.default, componentState.tTabsx0x67?.[state.screenSize]));

 const tTabsx0x68ComputedData = computed(() => _.merge({}, componentState.tTabsx0x68.default, componentState.tTabsx0x68?.[state.screenSize]));

 const tTabsBasex0x69ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x69.default, componentState.tTabsBasex0x69?.[state.screenSize]));

 const tInputx0x70ComputedData = computed(() => _.merge({}, componentState.tInputx0x70.default, componentState.tInputx0x70?.[state.screenSize]));

 const tCheckboxx0x71ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x71.default, componentState.tCheckboxx0x71?.[state.screenSize]));

 const tRadiox0x72ComputedData = computed(() => _.merge({}, componentState.tRadiox0x72.default, componentState.tRadiox0x72?.[state.screenSize]));

 const tSearchx0x73ComputedData = computed(() => _.merge({}, componentState.tSearchx0x73.default, componentState.tSearchx0x73?.[state.screenSize]));

 const tDatePickerx0x74ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x74.default, componentState.tDatePickerx0x74?.[state.screenSize]));

 const tCirclex0x75ComputedData = computed(() => _.merge({}, componentState.tCirclex0x75.default, componentState.tCirclex0x75?.[state.screenSize]));

 const tTextx0x76ComputedData = computed(() => _.merge({}, componentState.tTextx0x76.default, componentState.tTextx0x76?.[state.screenSize]));

 const tImageBasex0x77ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x77.default, componentState.tImageBasex0x77?.[state.screenSize]));

 const tChartPiePercentx0x78ComputedData = computed(() => _.merge({}, componentState.tChartPiePercentx0x78.default, componentState.tChartPiePercentx0x78?.[state.screenSize]));

 const tTextUnitx0x79ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x79.default, componentState.tTextUnitx0x79?.[state.screenSize]));

 const tRankSinglex0x80ComputedData = computed(() => _.merge({}, componentState.tRankSinglex0x80.default, componentState.tRankSinglex0x80?.[state.screenSize]));

 const tRankSinglex0x81ComputedData = computed(() => _.merge({}, componentState.tRankSinglex0x81.default, componentState.tRankSinglex0x81?.[state.screenSize]));

 const tTabsx0x82ComputedData = computed(() => _.merge({}, componentState.tTabsx0x82.default, componentState.tTabsx0x82?.[state.screenSize]));

 const tTabsx0x83ComputedData = computed(() => _.merge({}, componentState.tTabsx0x83.default, componentState.tTabsx0x83?.[state.screenSize]));

 const tChartPieDoughnutDatax0x84ComputedData = computed(() => _.merge({}, componentState.tChartPieDoughnutDatax0x84.default, componentState.tChartPieDoughnutDatax0x84?.[state.screenSize]));

 const tChartPieBorderx0x85ComputedData = computed(() => _.merge({}, componentState.tChartPieBorderx0x85.default, componentState.tChartPieBorderx0x85?.[state.screenSize]));

 const tButtonx0x86ComputedData = computed(() => _.merge({}, componentState.tButtonx0x86.default, componentState.tButtonx0x86?.[state.screenSize]));

 const tCirclex0x87ComputedData = computed(() => _.merge({}, componentState.tCirclex0x87.default, componentState.tCirclex0x87?.[state.screenSize]));

 const tCirclex0x88ComputedData = computed(() => _.merge({}, componentState.tCirclex0x88.default, componentState.tCirclex0x88?.[state.screenSize]));

 const tRectx0x89ComputedData = computed(() => _.merge({}, componentState.tRectx0x89.default, componentState.tRectx0x89?.[state.screenSize]));

 const tRectx0x90ComputedData = computed(() => _.merge({}, componentState.tRectx0x90.default, componentState.tRectx0x90?.[state.screenSize]));

 const tRectx0x91ComputedData = computed(() => _.merge({}, componentState.tRectx0x91.default, componentState.tRectx0x91?.[state.screenSize]));

 const tRectx0x92ComputedData = computed(() => _.merge({}, componentState.tRectx0x92.default, componentState.tRectx0x92?.[state.screenSize]));

 const tRectx0x93ComputedData = computed(() => _.merge({}, componentState.tRectx0x93.default, componentState.tRectx0x93?.[state.screenSize]));

 const tRectx0x94ComputedData = computed(() => _.merge({}, componentState.tRectx0x94.default, componentState.tRectx0x94?.[state.screenSize]));

 const tRectx0x95ComputedData = computed(() => _.merge({}, componentState.tRectx0x95.default, componentState.tRectx0x95?.[state.screenSize]));

 const tRowx0x96ComputedData = computed(() => _.merge({}, componentState.tRowx0x96.default, componentState.tRowx0x96?.[state.screenSize]));

 const tTextx0x96x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x96x0.default, componentState.tTextx0x96x0?.[state.screenSize]));

 const tTextx0x96x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x96x1.default, componentState.tTextx0x96x1?.[state.screenSize]));

 const tRowx0x97ComputedData = computed(() => _.merge({}, componentState.tRowx0x97.default, componentState.tRowx0x97?.[state.screenSize]));

 const tTextx0x97x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x97x0.default, componentState.tTextx0x97x0?.[state.screenSize]));

 const tTextx0x97x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x97x1.default, componentState.tTextx0x97x1?.[state.screenSize]));

 const tTextx0x97x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x97x2.default, componentState.tTextx0x97x2?.[state.screenSize]));

 const tRectx0x98ComputedData = computed(() => _.merge({}, componentState.tRectx0x98.default, componentState.tRectx0x98?.[state.screenSize]));

 const tComponentx0x99ComputedData = computed(() => _.merge({}, componentState.tComponentx0x99.default, componentState.tComponentx0x99?.[state.screenSize]));

 const tTextx0x100ComputedData = computed(() => _.merge({}, componentState.tTextx0x100.default, componentState.tTextx0x100?.[state.screenSize]));

 const tListCardx0x101ComputedData = computed(() => _.merge({}, componentState.tListCardx0x101.default, componentState.tListCardx0x101?.[state.screenSize]));

 const tTabsBasex0x102ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x102.default, componentState.tTabsBasex0x102?.[state.screenSize]));

 const tChartDesignx0x103ComputedData = computed(() => _.merge({}, componentState.tChartDesignx0x103.default, componentState.tChartDesignx0x103?.[state.screenSize]));

 const tCirclex0x104ComputedData = computed(() => _.merge({}, componentState.tCirclex0x104.default, componentState.tCirclex0x104?.[state.screenSize]));

 const tTextx0x105ComputedData = computed(() => _.merge({}, componentState.tTextx0x105.default, componentState.tTextx0x105?.[state.screenSize]));

 const tImageBasex0x106ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x106.default, componentState.tImageBasex0x106?.[state.screenSize]));

 const tChartPiePercentx0x107ComputedData = computed(() => _.merge({}, componentState.tChartPiePercentx0x107.default, componentState.tChartPiePercentx0x107?.[state.screenSize]));

 const tTextUnitx0x108ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x108.default, componentState.tTextUnitx0x108?.[state.screenSize]));

 const tRankSinglex0x109ComputedData = computed(() => _.merge({}, componentState.tRankSinglex0x109.default, componentState.tRankSinglex0x109?.[state.screenSize]));

 const tRankSinglex0x110ComputedData = computed(() => _.merge({}, componentState.tRankSinglex0x110.default, componentState.tRankSinglex0x110?.[state.screenSize]));

 const tChartBarSimplex0x111ComputedData = computed(() => _.merge({}, componentState.tChartBarSimplex0x111.default, componentState.tChartBarSimplex0x111?.[state.screenSize]));

 const tChartBarSimplex0x112ComputedData = computed(() => _.merge({}, componentState.tChartBarSimplex0x112.default, componentState.tChartBarSimplex0x112?.[state.screenSize]));

 const tListCardx0x113ComputedData = computed(() => _.merge({}, componentState.tListCardx0x113.default, componentState.tListCardx0x113?.[state.screenSize]));

 const tRectx0x114ComputedData = computed(() => _.merge({}, componentState.tRectx0x114.default, componentState.tRectx0x114?.[state.screenSize]));

 const tRectx0x115ComputedData = computed(() => _.merge({}, componentState.tRectx0x115.default, componentState.tRectx0x115?.[state.screenSize]));

return {
global,
state,
componentState,
tTextx0x0ComputedData,
tChartDesignx0x1ComputedData,
tChartDesignx0x2ComputedData,
tChartDesignx0x3ComputedData,
tRectx0x4ComputedData,
tSelectx0x5ComputedData,
tTextx0x6ComputedData,
tListCardx0x7ComputedData,
tListCardx0x8ComputedData,
tTablex0x9ComputedData,
tRectx0x10ComputedData,
tComponentx0x11ComputedData,
tRectx0x12ComputedData,
tTextx0x13ComputedData,
tTabsx0x14ComputedData,
tRectx0x15ComputedData,
tTextx0x16ComputedData,
tRectx0x17ComputedData,
tTextx0x18ComputedData,
tRectx0x19ComputedData,
tCirclex0x20ComputedData,
tTextx0x21ComputedData,
tTextx0x22ComputedData,
tTextx0x23ComputedData,
tTextx0x24ComputedData,
tScrollableCardsx0x25ComputedData,
tTextx0x26ComputedData,
tRowx0x27ComputedData,
tTextx0x27x0ComputedData,
tTextx0x27x1ComputedData,
tListCardCommonx0x27x2ComputedData,
tListCardCommonx0x27x3ComputedData,
tRectx0x27x4ComputedData,
tSwitchx0x28ComputedData,
tTextx0x29ComputedData,
tRectx0x30ComputedData,
tRectx0x31ComputedData,
tRectx0x32ComputedData,
tChartLiquidfillx0x33ComputedData,
tRectx0x34ComputedData,
tRectx0x35ComputedData,
tRectx0x36ComputedData,
tRowx0x37ComputedData,
tTextx0x37x0ComputedData,
tTextx0x37x1ComputedData,
tRectx0x38ComputedData,
tTextx0x39ComputedData,
tRectx0x40ComputedData,
tTextx0x41ComputedData,
tTextx0x42ComputedData,
tTextx0x43ComputedData,
tTextx0x44ComputedData,
tTextx0x45ComputedData,
tTextx0x46ComputedData,
tRectx0x47ComputedData,
tRectx0x48ComputedData,
tRectx0x49ComputedData,
tRectx0x50ComputedData,
tChartLiquidfillx0x51ComputedData,
tRowx0x52ComputedData,
tTextx0x52x0ComputedData,
tTextx0x52x1ComputedData,
tTablex0x53ComputedData,
tRectx0x54ComputedData,
tRectx0x55ComputedData,
tRectx0x56ComputedData,
tRectx0x57ComputedData,
tTextx0x58ComputedData,
tTextx0x59ComputedData,
tRectx0x60ComputedData,
tTextx0x61ComputedData,
tRectx0x62ComputedData,
tTextx0x63ComputedData,
tListCardx0x64ComputedData,
tListCardx0x65ComputedData,
tRectx0x66ComputedData,
tTabsx0x67ComputedData,
tTabsx0x68ComputedData,
tTabsBasex0x69ComputedData,
tInputx0x70ComputedData,
tCheckboxx0x71ComputedData,
tRadiox0x72ComputedData,
tSearchx0x73ComputedData,
tDatePickerx0x74ComputedData,
tCirclex0x75ComputedData,
tTextx0x76ComputedData,
tImageBasex0x77ComputedData,
tChartPiePercentx0x78ComputedData,
tTextUnitx0x79ComputedData,
tRankSinglex0x80ComputedData,
tRankSinglex0x81ComputedData,
tTabsx0x82ComputedData,
tTabsx0x83ComputedData,
tChartPieDoughnutDatax0x84ComputedData,
tChartPieBorderx0x85ComputedData,
tButtonx0x86ComputedData,
tCirclex0x87ComputedData,
tCirclex0x88ComputedData,
tRectx0x89ComputedData,
tRectx0x90ComputedData,
tRectx0x91ComputedData,
tRectx0x92ComputedData,
tRectx0x93ComputedData,
tRectx0x94ComputedData,
tRectx0x95ComputedData,
tRowx0x96ComputedData,
tTextx0x96x0ComputedData,
tTextx0x96x1ComputedData,
tRowx0x97ComputedData,
tTextx0x97x0ComputedData,
tTextx0x97x1ComputedData,
tTextx0x97x2ComputedData,
tRectx0x98ComputedData,
tComponentx0x99ComputedData,
tTextx0x100ComputedData,
tListCardx0x101ComputedData,
tTabsBasex0x102ComputedData,
tChartDesignx0x103ComputedData,
tCirclex0x104ComputedData,
tTextx0x105ComputedData,
tImageBasex0x106ComputedData,
tChartPiePercentx0x107ComputedData,
tTextUnitx0x108ComputedData,
tRankSinglex0x109ComputedData,
tRankSinglex0x110ComputedData,
tChartBarSimplex0x111ComputedData,
tChartBarSimplex0x112ComputedData,
tListCardx0x113ComputedData,
tRectx0x114ComputedData,
tRectx0x115ComputedData,
ontabClick1733455647841,
ontabClick1733279319009_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-showComponents {
position: relative;
overflow: hidden;
--theme-color: var(--t-brand8);
--theme-color-opacity-10: rgba(var(--t-brand8), .1);
--theme-color-opacity-15: rgba(var(--t-brand8), .15);
--theme-color-opacity-40: rgba(var(--t-brand8), .4);
--theme-color-opacity-60: rgba(var(--t-brand8), .6);
--theme-color-opacity-80: rgba(var(--t-brand8), .8);
--theme-color-opacity-90: rgba(var(--t-brand8), .9);
pointer-events: auto;
position: Static;
z-index: 1;
filter: ;
width: 1920px;
height: 2082px;
background-color: #14161f;
}
.t-l-c-showComponents .showComponents-t-text-0-0 {
position: absolute !important;
top: 37px;
left: 32px;
width: 56px;
height: 22px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-chart-design-0-1 {
position: absolute !important;
top: 1426px;
left: 72px;
width: 824px;
height: 304px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-chart-design-0-2 {
position: absolute !important;
top: 1736px;
left: 999px;
width: 824px;
height: 304px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-chart-design-0-3 {
position: absolute !important;
top: 1755px;
left: 54px;
width: 824px;
height: 304px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-4 {
position: absolute !important;
top: 1249px;
left: 988px;
width: 625px;
height: 313px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-select-0-5 {
position: absolute !important;
top: 69px;
left: 32px;
width: 205px;
height: 33px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-6 {
position: absolute !important;
top: 1168px;
left: 1690px;
width: 49px;
height: 22px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-list-card-0-7 {
position: absolute !important;
top: 1867px;
left: 2271px;
width: 460px;
height: 118px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-list-card-0-8 {
position: absolute !important;
top: 212px;
left: 487px;
width: 435px;
height: 118px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-table-0-9 {
position: absolute !important;
top: 824px;
left: 40px;
width: 410px;
height: 334px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-10 {
position: absolute !important;
top: 64px;
left: 1033px;
width: 165px;
height: 165px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-component-0-11 {
position: absolute !important;
top: 1111px;
left: 998px;
width: 824px;
height: 28px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-12 {
position: absolute !important;
top: 1233px;
left: 1706px;
width: 120px;
height: 280px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-13 {
position: absolute !important;
top: 1116px;
left: 1038px;
width: 130px;
height: 20px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-tabs-0-14 {
position: absolute !important;
top: 1245px;
left: 1716px;
width: 100px;
height: 164px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-15 {
position: absolute !important;
top: 33px;
left: 1003px;
width: 410px;
height: 185px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-16 {
position: absolute !important;
top: 1119px;
left: 1643px;
width: 164px;
height: 19px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-17 {
position: absolute !important;
top: 1291px;
left: 1726px;
width: 80px;
height: 1px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-18 {
position: absolute !important;
top: 86px;
left: 1295px;
width: 56px;
height: 24px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-19 {
position: absolute !important;
top: 1345px;
left: 1726px;
width: 80px;
height: 1px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-circle-0-20 {
position: absolute !important;
top: 1589px;
left: 1000px;
width: 9px;
height: 9px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-21 {
position: absolute !important;
top: 149px;
left: 1295px;
width: 56px;
height: 24px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-22 {
position: absolute !important;
top: 1581px;
left: 1013px;
width: 334px;
height: 24px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-23 {
position: absolute !important;
top: 113px;
left: 1295px;
width: 50px;
height: 20px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-24 {
position: absolute !important;
top: 176px;
left: 1295px;
width: 50px;
height: 20px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-scrollable-cards-0-25 {
position: absolute !important;
top: 1627px;
left: 1005px;
width: 824px;
height: 64px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-26 {
position: absolute !important;
top: 92px;
left: 1352px;
width: 35px;
height: 14px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-row-0-27 {
position: absolute !important;
top: 1174px;
left: 1006px;
width: 500px;
height: 47px;
pointer-events: auto;
animation-name: ;
}

.t-l-c-showComponents .showComponents-t-text-0-27-0 {
position: unset;
top: 1160.1266004774304px;
left: 1084.8092289677372px;
width: auto;
height: 21px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-27-1 {
position: unset;
top: 1160.1266004774304px;
left: 1206.8092289677372px;
width: 40px;
height: 20px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-list-card-common-0-27-2 {
position: unset;
top: 1162.1266004774304px;
left: 1287.8092289677372px;
width: 50px;
height: 20px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-list-card-common-0-27-3 {
position: unset;
top: 1161.1266004774304px;
left: 1378.8092289677372px;
width: 50px;
height: 20px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-27-4 {
position: unset;
top: 1161.1266004774304px;
left: 1467.8092289677372px;
width: 20px;
height: 20px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-switch-0-28 {
position: absolute !important;
top: 1169px;
left: 1755px;
width: 32px;
height: 20px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-29 {
position: absolute !important;
top: 155px;
left: 1351px;
width: 35px;
height: 14px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-30 {
position: absolute !important;
top: 88px;
left: 1231px;
width: 42px;
height: 42px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-31 {
position: absolute !important;
top: 152px;
left: 1231px;
width: 42px;
height: 42px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-32 {
position: absolute !important;
top: 67px;
left: 1038px;
width: 155px;
height: 155px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-chart-liquidfill-0-33 {
position: absolute !important;
top: 89px;
left: 1065px;
width: 105px;
height: 105px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-34 {
position: absolute !important;
top: 41px;
left: 1017px;
width: 118px;
height: 22px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-35 {
position: absolute !important;
top: 41px;
left: 1138px;
width: 7px;
height: 22px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-36 {
position: absolute !important;
top: 41px;
left: 1027px;
width: 118px;
height: 22px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-row-0-37 {
position: absolute !important;
top: 125px;
left: 1073px;
width: 89px;
height: 30px;
pointer-events: auto;
animation-name: ;
}

.t-l-c-showComponents .showComponents-t-text-0-37-0 {
position: unset;
top: 438.6390005258413px;
left: 2813.472712590144px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-37-1 {
position: unset;
top: 435.6390005258413px;
left: 2808.472712590144px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-38 {
position: absolute !important;
top: 41px;
left: 1017px;
width: 7px;
height: 22px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-39 {
position: absolute !important;
top: 43px;
left: 1017px;
width: 128px;
height: 22px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-40 {
position: absolute !important;
top: 240px;
left: 1007px;
width: 410px;
height: 185px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-41 {
position: absolute !important;
top: 293px;
left: 1299px;
width: 56px;
height: 24px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-42 {
position: absolute !important;
top: 356px;
left: 1299px;
width: 56px;
height: 24px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-43 {
position: absolute !important;
top: 320px;
left: 1299px;
width: 50px;
height: 20px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-44 {
position: absolute !important;
top: 383px;
left: 1299px;
width: 50px;
height: 20px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-45 {
position: absolute !important;
top: 299px;
left: 1356px;
width: 35px;
height: 14px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-46 {
position: absolute !important;
top: 362px;
left: 1355px;
width: 35px;
height: 14px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-47 {
position: absolute !important;
top: 295px;
left: 1235px;
width: 42px;
height: 42px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-48 {
position: absolute !important;
top: 359px;
left: 1235px;
width: 42px;
height: 42px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-49 {
position: absolute !important;
top: 276px;
left: 1042px;
width: 155px;
height: 155px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-50 {
position: absolute !important;
top: 270px;
left: 1037px;
width: 165px;
height: 165px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-chart-liquidfill-0-51 {
position: absolute !important;
top: 296px;
left: 1069px;
width: 105px;
height: 105px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-row-0-52 {
position: absolute !important;
top: 332px;
left: 1077px;
width: 89px;
height: 30px;
pointer-events: auto;
animation-name: ;
}

.t-l-c-showComponents .showComponents-t-text-0-52-0 {
position: unset;
top: 683.066508562137px;
left: 2953.561416699336px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-52-1 {
position: unset;
top: 680.066508562137px;
left: 2948.561416699336px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-table-0-53 {
position: absolute !important;
top: 678px;
left: 514px;
width: 410px;
height: 334px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-54 {
position: absolute !important;
top: 248px;
left: 1021px;
width: 118px;
height: 22px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-55 {
position: absolute !important;
top: 248px;
left: 1142px;
width: 7px;
height: 22px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-56 {
position: absolute !important;
top: 248px;
left: 1031px;
width: 118px;
height: 22px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-57 {
position: absolute !important;
top: 248px;
left: 1021px;
width: 7px;
height: 22px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-58 {
position: absolute !important;
top: 248px;
left: 1021px;
width: 128px;
height: 22px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-59 {
position: absolute !important;
top: 719px;
left: 28px;
width: 43px;
height: 18px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-60 {
position: absolute !important;
top: 756px;
left: 16px;
width: 450px;
height: 1px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-61 {
position: absolute !important;
top: 716px;
left: 91px;
width: 184px;
height: 24px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-62 {
position: absolute !important;
top: 1249px;
left: 988px;
width: 625px;
height: 47px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-63 {
position: absolute !important;
top: 1263px;
left: 1007px;
width: 143px;
height: 19px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-list-card-0-64 {
position: absolute !important;
top: 1068px;
left: 516px;
width: 410px;
height: 176px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-list-card-0-65 {
position: absolute !important;
top: 1278px;
left: 87px;
width: 824px;
height: 95px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-66 {
position: absolute !important;
top: 453px;
left: 1218px;
width: 201px;
height: 140px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-tabs-0-67 {
position: absolute !important;
top: 465px;
left: 38px;
width: 192px;
height: 15px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-tabs-0-68 {
position: absolute !important;
top: 510px;
left: 45px;
width: 300px;
height: 22px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-tabs-base-0-69 {
position: absolute !important;
top: 611px;
left: 43px;
width: 264px;
height: 28px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-input-0-70 {
position: absolute !important;
top: 120px;
left: 32px;
width: 200px;
height: 32px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-checkbox-0-71 {
position: absolute !important;
top: 275px;
left: 32px;
width: 291px;
height: 20px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-radio-0-72 {
position: absolute !important;
top: 228px;
left: 32px;
width: 215px;
height: 20px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-search-0-73 {
position: absolute !important;
top: 172px;
left: 32px;
width: 320px;
height: 32px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-date-picker-0-74 {
position: absolute !important;
top: 326px;
left: 36px;
width: 302px;
height: 33px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-circle-0-75 {
position: absolute !important;
top: 468px;
left: 1262px;
width: 113px;
height: 113px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-76 {
position: absolute !important;
top: 531px;
left: 1262px;
width: 113px;
height: 20px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-image-base-0-77 {
position: absolute !important;
top: 475px;
left: 1269px;
width: 99px;
height: 99px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-chart-pie-percent-0-78 {
position: absolute !important;
top: 468px;
left: 1262px;
width: 113px;
height: 113px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-unit-0-79 {
position: absolute !important;
top: 499px;
left: 1262px;
width: 113px;
height: 29px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rank-single-0-80 {
position: absolute !important;
top: 317px;
left: 1488px;
width: 410px;
height: 149px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rank-single-0-81 {
position: absolute !important;
top: 49px;
left: 1494px;
width: 410px;
height: 60px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-tabs-0-82 {
position: absolute !important;
top: 2021px;
left: 2287px;
width: 460px;
height: 50px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-tabs-0-83 {
position: absolute !important;
top: 363px;
left: 478px;
width: 450px;
height: 50px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-chart-pie-doughnut-data-0-84 {
position: absolute !important;
top: 570px;
left: 1526px;
width: 92px;
height: 92px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-chart-pie-border-0-85 {
position: absolute !important;
top: 531px;
left: 1482px;
width: 410px;
height: 170px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-button-0-86 {
position: absolute !important;
top: 172px;
left: 360px;
width: 50px;
height: 32px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-circle-0-87 {
position: absolute !important;
top: 569px;
left: 1525px;
width: 94px;
height: 94px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-circle-0-88 {
position: absolute !important;
top: 531px;
left: 1487px;
width: 170px;
height: 170px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-89 {
position: absolute !important;
top: 531px;
left: 1487px;
width: 170px;
height: 170px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-90 {
position: absolute !important;
top: 472px;
left: 533px;
width: 410px;
height: 102px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-91 {
position: absolute !important;
top: 137px;
left: 499px;
width: 410px;
height: 42px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-92 {
position: absolute !important;
top: 144.5px;
left: 552px;
width: 58px;
height: 27px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-93 {
position: absolute !important;
top: 145px;
left: 499px;
width: 2px;
height: 26px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-94 {
position: absolute !important;
top: 144.5px;
left: 748px;
width: 44px;
height: 27px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-95 {
position: absolute !important;
top: 149.5px;
left: 717px;
width: 1px;
height: 17px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-row-0-96 {
position: absolute !important;
top: 147.5px;
left: 806px;
width: 83px;
height: 21px;
pointer-events: auto;
letter-spacing: 0px;
animation-name: ;
font-weight: 600;
}

.t-l-c-showComponents .showComponents-t-text-0-96-0 {
position: unset;
top: 1048.9020811028963px;
left: 1653.817075450143px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-96-1 {
position: unset;
top: 1505.5351927602997px;
left: 1489.1561108292785px;
width: 12px;
height: auto;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-row-0-97 {
position: absolute !important;
top: 147.5px;
left: 614px;
width: 85px;
height: 21px;
pointer-events: auto;
letter-spacing: 0px;
animation-name: ;
font-weight: 600;
}

.t-l-c-showComponents .showComponents-t-text-0-97-0 {
position: unset;
top: 883.0816483277354px;
left: 1180.5928312602796px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-97-1 {
position: unset;
top: 1515.5351927602997px;
left: 1499.1561108292785px;
width: 12px;
height: auto;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-97-2 {
position: unset;
top: 875.0816483277354px;
left: 1119.5928312602796px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-98 {
position: absolute !important;
top: 454px;
left: 988px;
width: 201px;
height: 140px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-component-0-99 {
position: absolute !important;
top: 552px;
left: 37px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-100 {
position: absolute !important;
top: 557px;
left: 77px;
width: 130px;
height: 19px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-list-card-0-101 {
position: absolute !important;
top: 43px;
left: 484px;
width: 418px;
height: 68px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-tabs-base-0-102 {
position: absolute !important;
top: 391px;
left: 40px;
width: 183px;
height: 32px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-chart-design-0-103 {
position: absolute !important;
top: 917px;
left: 1006px;
width: 410px;
height: 164px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-circle-0-104 {
position: absolute !important;
top: 469px;
left: 1032px;
width: 113px;
height: 113px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-0-105 {
position: absolute !important;
top: 532px;
left: 1032px;
width: 113px;
height: 20px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-image-base-0-106 {
position: absolute !important;
top: 476px;
left: 1039px;
width: 99px;
height: 99px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-chart-pie-percent-0-107 {
position: absolute !important;
top: 469px;
left: 1032px;
width: 113px;
height: 113px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-text-unit-0-108 {
position: absolute !important;
top: 500px;
left: 1032px;
width: 113px;
height: 29px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rank-single-0-109 {
position: absolute !important;
top: 212px;
left: 1494px;
width: 410px;
height: 60px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rank-single-0-110 {
position: absolute !important;
top: 131px;
left: 1494px;
width: 410px;
height: 60px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-chart-bar-simple-0-111 {
position: absolute !important;
top: 785px;
left: 1480px;
width: 410px;
height: 243px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-chart-bar-simple-0-112 {
position: absolute !important;
top: 653px;
left: 1003px;
width: 410px;
height: 243px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-list-card-0-113 {
position: absolute !important;
top: 500px;
left: 768px;
width: 135px;
height: 64px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-114 {
position: absolute !important;
top: 492px;
left: 614px;
width: 112px;
height: 82px;
pointer-events: auto;
}

.t-l-c-showComponents .showComponents-t-rect-0-115 {
position: absolute !important;
top: 1260px;
left: 1575px;
width: 24px;
height: 24px;
pointer-events: auto;
}

@keyframes custom99682e2352e4b {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
100% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(360deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
@keyframes custom7498be6597a9b {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
100% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(360deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
</style>
