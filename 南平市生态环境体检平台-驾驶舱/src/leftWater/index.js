window.leftWaterComponent = {
template: 
`<div id="t-l-c-leftWater" class="t-l-c-leftWater" >` +
`<t-rect id="t-rect-96cf.bc1ae79cc" class="leftWater-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 1" id="t-image-base-16ea.9e1b915d8" class="leftWater-t-image-base-0-1"  :src="tImageBasex0x1ComputedData.src" :fit="tImageBasex0x1ComputedData.fit" :c-style="tImageBasex0x1ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex !== 1" id="t-image-base-4f81.e5868f47c" class="leftWater-t-image-base-0-2"  :src="tImageBasex0x2ComputedData.src" :fit="tImageBasex0x2ComputedData.fit" :c-style="tImageBasex0x2ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 2" id="t-image-base-de52.90ad4ba85" class="leftWater-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex !== 2" id="t-image-base-b12d.4e48b1aac" class="leftWater-t-image-base-0-4"  :src="tImageBasex0x4ComputedData.src" :fit="tImageBasex0x4ComputedData.fit" :c-style="tImageBasex0x4ComputedData.cStyle">` +
`</t-image-base>` +
`<t-rect id="t-rect-4f5b.536d0a55c" class="leftWater-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-8727.b45ee59d2" class="leftWater-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle">` +
`</t-text>` +
`<t-select id="t-select-5c30.08d7d7cbe" class="leftWater-t-select-0-8"  :active-value="tSelectx0x8ComputedData.activeValue" :options="replaceCssVariables(filterData(global.leftWaterGlobalVariables.controlLevelList, componentPropBindingMap?.['t-select-5c30.08d7d7cbe']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x8ComputedData.alias" :multiple="tSelectx0x8ComputedData.multiple" :placeholder="tSelectx0x8ComputedData.placeholder" :clearable="tSelectx0x8ComputedData.clearable" :disabled="tSelectx0x8ComputedData.disabled" :collapse-tags="tSelectx0x8ComputedData.collapseTags" :name="tSelectx0x8ComputedData.name" :autocomplete="tSelectx0x8ComputedData.autocomplete" :filterable="tSelectx0x8ComputedData.filterable" :no-match-text="tSelectx0x8ComputedData.no-match-text" :no-data-text="tSelectx0x8ComputedData.no-data-text" :c-style="tSelectx0x8ComputedData.cStyle" :multiple-limit="tSelectx0x8ComputedData.multipleLimit" :data="tSelectx0x8ComputedData.data" @change="onchange1768553560343_0_0">` +
`</t-select>` +
`<t-rect id="t-rect-9884.229278812" class="leftWater-t-rect-0-10"  :tip="tRectx0x10ComputedData.tip" :label="tRectx0x10ComputedData.label" :active="tRectx0x10ComputedData.active" :c-style="tRectx0x10ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-5dd4.ca5f36b52" class="leftWater-t-rect-0-11"  :tip="tRectx0x11ComputedData.tip" :label="tRectx0x11ComputedData.label" :active="tRectx0x11ComputedData.active" :c-style="tRectx0x11ComputedData.cStyle">` +
`</t-rect>` +
`<t-line id="t-line-d49f.f1aec9d46" class="leftWater-t-line-0-12"  :c-style="tLinex0x12ComputedData.cStyle">` +
`</t-line>` +
`<t-text-common id="t-text-common-dc54.e15d408c" class="leftWater-t-text-common-0-13"  :label="replaceCssVariables(filterData(state.level2Ranking, componentPropBindingMap?.['t-text-common-dc54.e15d408c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x13ComputedData.editable" :c-style="tTextCommonx0x13ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text id="t-text-e3ad.391156575" class="leftWater-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-ca8c.f28156286" class="leftWater-t-text-0-15"  :label="tTextx0x15ComputedData.label" :editable="tTextx0x15ComputedData.editable" :c-style="tTextx0x15ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-2456.8cd16e232" class="leftWater-t-text-0-16"  :label="tTextx0x16ComputedData.label" :editable="tTextx0x16ComputedData.editable" :c-style="tTextx0x16ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-b633.4ff7b5544" class="leftWater-t-text-unit-0-17"  :c-style="tTextUnitx0x17ComputedData.cStyle" :content="replaceCssVariables(filterData(state.cityData.TARGET_TWO, componentPropBindingMap?.['t-text-unit-b633.4ff7b5544']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x17ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x17ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isRed0 === true" id="t-text-unit-ff84.f056582b1" class="leftWater-t-text-unit-0-18"  :c-style="tTextUnitx0x18ComputedData.cStyle" :content="replaceCssVariables(filterData(state.level2TargetValue, componentPropBindingMap?.['t-text-unit-ff84.f056582b1']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x18ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x18ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isRed1 === true" id="t-text-unit-1bdd.2a63d32da" class="leftWater-t-text-unit-0-19"  :c-style="tTextUnitx0x19ComputedData.cStyle" :content="replaceCssVariables(filterData(state.level2TargetValue, componentPropBindingMap?.['t-text-unit-1bdd.2a63d32da']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x19ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x19ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isGreen0 === true" id="t-text-unit-1ca5.5f3859aeb" class="leftWater-t-text-unit-0-20"  :c-style="tTextUnitx0x20ComputedData.cStyle" :content="replaceCssVariables(filterData(state.level2TargetValue, componentPropBindingMap?.['t-text-unit-1ca5.5f3859aeb']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x20ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x20ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isGreen1 === true" id="t-text-unit-7a18.1c0657ff3" class="leftWater-t-text-unit-0-21"  :c-style="tTextUnitx0x21ComputedData.cStyle" :content="replaceCssVariables(filterData(state.level2TargetValue, componentPropBindingMap?.['t-text-unit-7a18.1c0657ff3']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x21ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x21ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-aa88.a72e421b" class="leftWater-t-rect-0-22"  :tip="tRectx0x22ComputedData.tip" :label="tRectx0x22ComputedData.label" :active="tRectx0x22ComputedData.active" :c-style="tRectx0x22ComputedData.cStyle" @click="onclick1739255126445">` +
`</t-rect>` +
`<t-text id="t-text-86e9.6e4bda798" class="leftWater-t-text-0-23"  :label="tTextx0x23ComputedData.label" :editable="tTextx0x23ComputedData.editable" :c-style="tTextx0x23ComputedData.cStyle" @click="onclick1739254824900">` +
`</t-text>` +
`<t-text-common id="t-text-common-0c50.d30cce022" class="leftWater-t-text-common-0-24"  :label="tTextCommonx0x24ComputedData.label" :editable="tTextCommonx0x24ComputedData.editable" :c-style="tTextCommonx0x24ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-unit id="t-text-unit-571d.20fdd8ed5" class="leftWater-t-text-unit-0-25"  :c-style="tTextUnitx0x25ComputedData.cStyle" :content="tTextUnitx0x25ComputedData.content" :unit="tTextUnitx0x25ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x25ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.drinkWaterState.yoy_flag === '0'" id="t-text-unit-cd2e.e3b7d149e" class="leftWater-t-text-unit-0-26"  :c-style="tTextUnitx0x26ComputedData.cStyle" :content="tTextUnitx0x26ComputedData.content" :unit="tTextUnitx0x26ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x26ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-row id="t-row-fc7b.af5cca712" class="leftWater-t-row-0-27"  :c-style="tRowx0x27ComputedData.cStyle" :gutter="tRowx0x27ComputedData.gutter" :justify="tRowx0x27ComputedData.justify" :align="tRowx0x27ComputedData.align">` +
`<t-text-unit id="t-text-unit-5df4.a32c1b6f2" class="leftWater-t-text-unit-0-27-0"  :c-style="tTextUnitx0x27x0ComputedData.cStyle" :content="replaceCssVariables(filterData(state.cityData.GOODTWORATE, componentPropBindingMap?.['t-text-unit-5df4.a32c1b6f2']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x27x0ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x27x0ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`</t-row>` +
`<t-rect v-if="state.cityData.EXCELLENT_RATE_OK_STR === '已达标'" id="t-rect-1ba3.972b4c8f3" class="leftWater-t-rect-0-28"  :tip="tRectx0x28ComputedData.tip" :label="tRectx0x28ComputedData.label" :active="tRectx0x28ComputedData.active" :c-style="tRectx0x28ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.cityData.EXCELLENT_RATE_OK_STR === '未达标'" id="t-rect-30cf.2f1b9b0e" class="leftWater-t-rect-0-29"  :tip="tRectx0x29ComputedData.tip" :label="tRectx0x29ComputedData.label" :active="tRectx0x29ComputedData.active" :c-style="tRectx0x29ComputedData.cStyle">` +
`</t-rect>` +
`<t-text v-if="state.cityData.EXCELLENT_RATE_OK_STR === '已达标'" id="t-text-48c1.f7ebf1534" class="leftWater-t-text-0-30"  :label="tTextx0x30ComputedData.label" :editable="tTextx0x30ComputedData.editable" :c-style="tTextx0x30ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.cityData.EXCELLENT_RATE_OK_STR === '未达标'" id="t-text-54a7.5123563c" class="leftWater-t-text-0-31"  :label="tTextx0x31ComputedData.label" :editable="tTextx0x31ComputedData.editable" :c-style="tTextx0x31ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-01ee.5171cce4" class="leftWater-t-rect-0-32"  :tip="tRectx0x32ComputedData.tip" :label="tRectx0x32ComputedData.label" :active="tRectx0x32ComputedData.active" :c-style="tRectx0x32ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-7374.4cb3c6c46" class="leftWater-t-rect-0-33"  :tip="tRectx0x33ComputedData.tip" :label="tRectx0x33ComputedData.label" :active="tRectx0x33ComputedData.active" :c-style="tRectx0x33ComputedData.cStyle">` +
`</t-rect>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 33" id="t-image-base-4033.74bb274aa" class="leftWater-t-image-base-0-34"  :src="tImageBasex0x34ComputedData.src" :fit="tImageBasex0x34ComputedData.fit" :c-style="tImageBasex0x34ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex !== 33" id="t-image-base-aa88.4ecff2b4" class="leftWater-t-image-base-0-35"  :src="tImageBasex0x35ComputedData.src" :fit="tImageBasex0x35ComputedData.fit" :c-style="tImageBasex0x35ComputedData.cStyle">` +
`</t-image-base>` +
`<t-text id="t-text-55ff.397e88ed" class="leftWater-t-text-0-36"  :label="tTextx0x36ComputedData.label" :editable="tTextx0x36ComputedData.editable" :c-style="tTextx0x36ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-a93d.44ac94996" class="leftWater-t-text-0-37"  :label="tTextx0x37ComputedData.label" :editable="tTextx0x37ComputedData.editable" :c-style="tTextx0x37ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-46c2.3ec62a3b" class="leftWater-t-text-0-38"  :label="replaceCssVariables(filterData(state.xhjsObj.time, componentPropBindingMap?.['t-text-46c2.3ec62a3b']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x38ComputedData.editable" :c-style="tTextx0x38ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-feee.3fedcd0a3" class="leftWater-t-text-unit-0-39"  :c-style="tTextUnitx0x39ComputedData.cStyle" :content="replaceCssVariables(filterData(state.xhjsObj.num2, componentPropBindingMap?.['t-text-unit-feee.3fedcd0a3']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x39ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x39ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-38a7.c500efb5a" class="leftWater-t-rect-0-40"  :tip="tRectx0x40ComputedData.tip" :label="tRectx0x40ComputedData.label" :active="tRectx0x40ComputedData.active" :c-style="tRectx0x40ComputedData.cStyle" @click="onclick1763536869861_0_0">` +
`</t-rect>` +
`<t-text id="t-text-6bb5.4f5bf9ad4" class="leftWater-t-text-0-41"  :label="tTextx0x41ComputedData.label" :editable="tTextx0x41ComputedData.editable" :c-style="tTextx0x41ComputedData.cStyle" @click="onclick1763536869861_0_0">` +
`</t-text>` +
`<t-text-common id="t-text-common-5339.c0f92c76f" class="leftWater-t-text-common-0-42"  :label="tTextCommonx0x42ComputedData.label" :editable="tTextCommonx0x42ComputedData.editable" :c-style="tTextCommonx0x42ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-unit v-if="state.drinkWaterState.yoy_flag === 'down'" id="t-text-unit-7f7c.0d2c9fb9a" class="leftWater-t-text-unit-0-43"  :c-style="tTextUnitx0x43ComputedData.cStyle" :content="replaceCssVariables(filterData(state.drinkWaterState.yoy_rate, componentPropBindingMap?.['t-text-unit-7f7c.0d2c9fb9a']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x43ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x43ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.drinkWaterState.mom_flag !== 'down'" id="t-text-unit-75be.4c5d5567c" class="leftWater-t-text-unit-0-44"  :c-style="tTextUnitx0x44ComputedData.cStyle" :content="replaceCssVariables(filterData(state.drinkWaterState.mom_rate, componentPropBindingMap?.['t-text-unit-75be.4c5d5567c']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x44ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x44ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-common id="t-text-common-cb11.e58826c51" class="leftWater-t-text-common-0-45"  :label="tTextCommonx0x45ComputedData.label" :editable="tTextCommonx0x45ComputedData.editable" :c-style="tTextCommonx0x45ComputedData.cStyle">` +
`</t-text-common>` +
`<t-image-base v-if="state.drinkWaterState.yoy_flag === 'up'" id="t-image-base-7b48.c6d2a1fd8" class="leftWater-t-image-base-0-46"  :src="tImageBasex0x46ComputedData.src" :fit="tImageBasex0x46ComputedData.fit" :c-style="tImageBasex0x46ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="state.drinkWaterState.mom_flag === 'up'" id="t-image-base-4bf7.10295706" class="leftWater-t-image-base-0-47"  :src="tImageBasex0x47ComputedData.src" :fit="tImageBasex0x47ComputedData.fit" :c-style="tImageBasex0x47ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="state.drinkWaterState.mom_flag === 'down'" id="t-image-base-b8b4.03a1989d2" class="leftWater-t-image-base-0-48"  :src="tImageBasex0x48ComputedData.src" :fit="tImageBasex0x48ComputedData.fit" :c-style="tImageBasex0x48ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="state.drinkWaterState.yoy_flag === 'down'" id="t-image-base-275f.7ff27a497" class="leftWater-t-image-base-0-49"  :src="tImageBasex0x49ComputedData.src" :fit="tImageBasex0x49ComputedData.fit" :c-style="tImageBasex0x49ComputedData.cStyle">` +
`</t-image-base>` +
`<t-text-unit v-if="state.drinkWaterState.yoy_flag === 'up'" id="t-text-unit-783e.b32793668" class="leftWater-t-text-unit-0-50"  :c-style="tTextUnitx0x50ComputedData.cStyle" :content="replaceCssVariables(filterData(state.drinkWaterState.yoy_rate, componentPropBindingMap?.['t-text-unit-783e.b32793668']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x50ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x50ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.drinkWaterState.mom_flag === 'up'" id="t-text-unit-0bd3.8251d046a" class="leftWater-t-text-unit-0-51"  :c-style="tTextUnitx0x51ComputedData.cStyle" :content="replaceCssVariables(filterData(state.drinkWaterState.mom_rate, componentPropBindingMap?.['t-text-unit-0bd3.8251d046a']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x51ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x51ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-a64a.177b75f78" class="leftWater-t-rect-0-52"  :tip="tRectx0x52ComputedData.tip" :label="tRectx0x52ComputedData.label" :active="tRectx0x52ComputedData.active" :c-style="tRectx0x52ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-863c.9a78a207" class="leftWater-t-text-0-54"  :label="tTextx0x54ComputedData.label" :editable="tTextx0x54ComputedData.editable" :c-style="tTextx0x54ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-3d2c.232c145c2" class="leftWater-t-rect-0-56"  :tip="tRectx0x56ComputedData.tip" :label="tRectx0x56ComputedData.label" :active="tRectx0x56ComputedData.active" :c-style="tRectx0x56ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-1330.fe295074" class="leftWater-t-rect-0-57"  :tip="tRectx0x57ComputedData.tip" :label="tRectx0x57ComputedData.label" :active="tRectx0x57ComputedData.active" :c-style="tRectx0x57ComputedData.cStyle">` +
`</t-rect>` +
`<t-line id="t-line-c3d0.41db9917a" class="leftWater-t-line-0-58"  :c-style="tLinex0x58ComputedData.cStyle">` +
`</t-line>` +
`<t-text id="t-text-43e6.5c59336a6" class="leftWater-t-text-0-60"  :label="tTextx0x60ComputedData.label" :editable="tTextx0x60ComputedData.editable" :c-style="tTextx0x60ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-24ce.d9ac0b659" class="leftWater-t-text-0-61"  :label="tTextx0x61ComputedData.label" :editable="tTextx0x61ComputedData.editable" :c-style="tTextx0x61ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-3008.70ae418d8" class="leftWater-t-text-0-62"  :label="tTextx0x62ComputedData.label" :editable="tTextx0x62ComputedData.editable" :c-style="tTextx0x62ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-0cec.02305542c" class="leftWater-t-text-unit-0-63"  :c-style="tTextUnitx0x63ComputedData.cStyle" :content="replaceCssVariables(filterData(state.drinkWaterState.target_rate, componentPropBindingMap?.['t-text-unit-0cec.02305542c']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x63ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x63ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-2d22.252891d17" class="leftWater-t-rect-0-64"  :tip="tRectx0x64ComputedData.tip" :label="tRectx0x64ComputedData.label" :active="tRectx0x64ComputedData.active" :c-style="tRectx0x64ComputedData.cStyle" @click="onclick1763536806853_0_0">` +
`</t-rect>` +
`<t-text id="t-text-815b.e047e62fa" class="leftWater-t-text-0-65"  :label="tTextx0x65ComputedData.label" :editable="tTextx0x65ComputedData.editable" :c-style="tTextx0x65ComputedData.cStyle" @click="onclick1763536806853_0_0">` +
`</t-text>` +
`<t-text-unit v-if="state.CWQIData.region_cwqi_state !== 'up'" id="t-text-unit-289f.006329efc" class="leftWater-t-text-unit-0-66"  :c-style="tTextUnitx0x66ComputedData.cStyle" :content="replaceCssVariables(filterData(state.xhjsObj.num1, componentPropBindingMap?.['t-text-unit-289f.006329efc']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x66ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x66ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-component id="t-component-568d.7cecfab45" class="leftWater-t-component-0-68"  :name="tComponentx0x68ComputedData.name" :c-style="tComponentx0x68ComputedData.cStyle" :src="tComponentx0x68ComputedData.src" :component-name="tComponentx0x68ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-41ff.d151512ad" class="leftWater-t-text-0-69"  :label="replaceCssVariables(filterData(state.monitorTime, componentPropBindingMap?.['t-text-41ff.d151512ad']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x69ComputedData.editable" :c-style="tTextx0x69ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-3df2.076b058bb" class="leftWater-t-text-0-70"  :label="tTextx0x70ComputedData.label" :editable="tTextx0x70ComputedData.editable" :c-style="tTextx0x70ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-69fa.991666b61" class="leftWater-t-text-0-71"  :label="tTextx0x71ComputedData.label" :editable="tTextx0x71ComputedData.editable" :c-style="tTextx0x71ComputedData.cStyle">` +
`</t-text>` +
`<t-row id="t-row-d734.8cf69a3f" class="leftWater-t-row-0-72"  :c-style="tRowx0x72ComputedData.cStyle" :gutter="tRowx0x72ComputedData.gutter" :justify="tRowx0x72ComputedData.justify" :align="tRowx0x72ComputedData.align">` +
`<t-text-unit id="t-text-unit-07d7.32a370ea2" class="leftWater-t-text-unit-0-72-0"  :c-style="tTextUnitx0x72x0ComputedData.cStyle" :content="replaceCssVariables(filterData(state.drinkWaterState.current, componentPropBindingMap?.['t-text-unit-07d7.32a370ea2']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x72x0ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x72x0ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`</t-row>` +
`<t-rect id="t-rect-d00b.f3fee7884" class="leftWater-t-rect-0-73"  :tip="tRectx0x73ComputedData.tip" :label="tRectx0x73ComputedData.label" :active="tRectx0x73ComputedData.active" :c-style="tRectx0x73ComputedData.cStyle" @click="onclick1763605779464">` +
`</t-rect>` +
`<t-rect id="t-rect-28f6.c6b176962" class="leftWater-t-rect-0-74"  :tip="tRectx0x74ComputedData.tip" :label="tRectx0x74ComputedData.label" :active="tRectx0x74ComputedData.active" :c-style="tRectx0x74ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-unit v-if="state.isWhite0 === true" id="t-text-unit-4698.c773749bc" class="leftWater-t-text-unit-0-75"  :c-style="tTextUnitx0x75ComputedData.cStyle" :content="replaceCssVariables(filterData(state.level1TargetValue, componentPropBindingMap?.['t-text-unit-4698.c773749bc']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x75ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x75ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-78b3.4a32ec995" class="leftWater-t-text-unit-0-76"  :c-style="tTextUnitx0x76ComputedData.cStyle" :content="replaceCssVariables(filterData(state.drinkWaterState.rate_1_level, componentPropBindingMap?.['t-text-unit-78b3.4a32ec995']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x76ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x76ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-8ee3.ed9a7b133" class="leftWater-t-rect-0-77"  :tip="tRectx0x77ComputedData.tip" :label="tRectx0x77ComputedData.label" :active="tRectx0x77ComputedData.active" :c-style="tRectx0x77ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-15f7.3f53dc276" class="leftWater-t-text-0-78"  :label="tTextx0x78ComputedData.label" :editable="tTextx0x78ComputedData.editable" :c-style="tTextx0x78ComputedData.cStyle">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-96cf.bc1ae79cc":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-16ea.9e1b915d8":{"attributeName":"tImageBasex0x1","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-4f81.e5868f47c":{"attributeName":"tImageBasex0x2","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-de52.90ad4ba85":{"attributeName":"tImageBasex0x3","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-b12d.4e48b1aac":{"attributeName":"tImageBasex0x4","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4f5b.536d0a55c":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4f51.9cad7f606":{"attributeName":"tRectx0x6"},"t-text-8727.b45ee59d2":{"attributeName":"tTextx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-5c30.08d7d7cbe":{"attributeName":"tSelectx0x8","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"collapseTags":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"multipleLimit":{"filters":[]},"data":{"filters":[]}},"t-text-3eec.22bfafdf9":{"attributeName":"tTextx0x9"},"t-rect-9884.229278812":{"attributeName":"tRectx0x10","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5dd4.ca5f36b52":{"attributeName":"tRectx0x11","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-line-d49f.f1aec9d46":{"attributeName":"tLinex0x12","cStyle":{"filters":[]}},"t-text-common-dc54.e15d408c":{"attributeName":"tTextCommonx0x13","label":{"filters":[{"name":"levelRankingPrefix"}]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e3ad.391156575":{"attributeName":"tTextx0x14","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-ca8c.f28156286":{"attributeName":"tTextx0x15","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-2456.8cd16e232":{"attributeName":"tTextx0x16","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-b633.4ff7b5544":{"attributeName":"tTextUnitx0x17","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-ff84.f056582b1":{"attributeName":"tTextUnitx0x18","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-1bdd.2a63d32da":{"attributeName":"tTextUnitx0x19","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-1ca5.5f3859aeb":{"attributeName":"tTextUnitx0x20","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-7a18.1c0657ff3":{"attributeName":"tTextUnitx0x21","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-aa88.a72e421b":{"attributeName":"tRectx0x22","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-86e9.6e4bda798":{"attributeName":"tTextx0x23","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-0c50.d30cce022":{"attributeName":"tTextCommonx0x24","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-571d.20fdd8ed5":{"attributeName":"tTextUnitx0x25","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-cd2e.e3b7d149e":{"attributeName":"tTextUnitx0x26","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-row-fc7b.af5cca712":{"attributeName":"tRowx0x27","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-unit-5df4.a32c1b6f2":{"attributeName":"tTextUnitx0x27x0","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-1ba3.972b4c8f3":{"attributeName":"tRectx0x28","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-30cf.2f1b9b0e":{"attributeName":"tRectx0x29","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-48c1.f7ebf1534":{"attributeName":"tTextx0x30","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-54a7.5123563c":{"attributeName":"tTextx0x31","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-01ee.5171cce4":{"attributeName":"tRectx0x32","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-7374.4cb3c6c46":{"attributeName":"tRectx0x33","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-4033.74bb274aa":{"attributeName":"tImageBasex0x34","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-aa88.4ecff2b4":{"attributeName":"tImageBasex0x35","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-text-55ff.397e88ed":{"attributeName":"tTextx0x36","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a93d.44ac94996":{"attributeName":"tTextx0x37","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-46c2.3ec62a3b":{"attributeName":"tTextx0x38","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-feee.3fedcd0a3":{"attributeName":"tTextUnitx0x39","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-38a7.c500efb5a":{"attributeName":"tRectx0x40","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6bb5.4f5bf9ad4":{"attributeName":"tTextx0x41","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-5339.c0f92c76f":{"attributeName":"tTextCommonx0x42","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-7f7c.0d2c9fb9a":{"attributeName":"tTextUnitx0x43","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-75be.4c5d5567c":{"attributeName":"tTextUnitx0x44","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-common-cb11.e58826c51":{"attributeName":"tTextCommonx0x45","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-7b48.c6d2a1fd8":{"attributeName":"tImageBasex0x46","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-4bf7.10295706":{"attributeName":"tImageBasex0x47","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-b8b4.03a1989d2":{"attributeName":"tImageBasex0x48","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-275f.7ff27a497":{"attributeName":"tImageBasex0x49","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-783e.b32793668":{"attributeName":"tTextUnitx0x50","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-0bd3.8251d046a":{"attributeName":"tTextUnitx0x51","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-a64a.177b75f78":{"attributeName":"tRectx0x52","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-7be7.6b933db1e":{"attributeName":"tRectx0x53"},"t-text-863c.9a78a207":{"attributeName":"tTextx0x54","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-bade.f9eaf98b4":{"attributeName":"tTextx0x55"},"t-rect-3d2c.232c145c2":{"attributeName":"tRectx0x56","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1330.fe295074":{"attributeName":"tRectx0x57","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-line-c3d0.41db9917a":{"attributeName":"tLinex0x58","cStyle":{"filters":[]}},"t-text-common-4b27.41378f2d":{"attributeName":"tTextCommonx0x59"},"t-text-43e6.5c59336a6":{"attributeName":"tTextx0x60","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-24ce.d9ac0b659":{"attributeName":"tTextx0x61","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3008.70ae418d8":{"attributeName":"tTextx0x62","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-0cec.02305542c":{"attributeName":"tTextUnitx0x63","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-2d22.252891d17":{"attributeName":"tRectx0x64","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-815b.e047e62fa":{"attributeName":"tTextx0x65","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-289f.006329efc":{"attributeName":"tTextUnitx0x66","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-be6a.18dc7232":{"attributeName":"tTextUnitx0x67"},"t-component-568d.7cecfab45":{"attributeName":"tComponentx0x68","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-41ff.d151512ad":{"attributeName":"tTextx0x69","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3df2.076b058bb":{"attributeName":"tTextx0x70","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-69fa.991666b61":{"attributeName":"tTextx0x71","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-d734.8cf69a3f":{"attributeName":"tRowx0x72","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-unit-07d7.32a370ea2":{"attributeName":"tTextUnitx0x72x0","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-d00b.f3fee7884":{"attributeName":"tRectx0x73","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-28f6.c6b176962":{"attributeName":"tRectx0x74","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-4698.c773749bc":{"attributeName":"tTextUnitx0x75","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-78b3.4a32ec995":{"attributeName":"tTextUnitx0x76","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-8ee3.ed9a7b133":{"attributeName":"tRectx0x77","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-15f7.3f53dc276":{"attributeName":"tTextx0x78","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   xhjsObj: {"num1":"-","num2":"-","time":"-"},
   selecteList: [{"value":"1","label":"国控","disabled":false},{"value":"2","label":"省控","disabled":false},{"value":"9","label":"小流域","disabled":false}],
   activeSelected: "1",
   level1TargetValue: 0,
   drinkWaterState: {"time":"","tagName":"","rank":"全省排名:","current":"","yoy_rate":"","yoy_flag":"up","mom_rate":"","mom_flag":"down","target_rate":"","rate_1_level":""},
   showMore: false,
   CWQIMonitorTime: "2025-09",
   level3TargetValue: 0,
   level2TargetValue: 0,
   level3Ranking: "",
   level2Ranking: "",
   monitorTime: "",
   DATE_TYPE: "",
   isSelectedBg1: false,
   isSelectedBg2: false,
   isRed0: false,
   isGreen0: false,
   isWhite0: false,
   cityData: {"EXCELLENT_RATE":"--","EXCELLENT_RATE_TARGET":"--","EXCELLENT_YYMB":"100","PM25":"--","PM25_TARGET":"--","PM25_YYMB":"100","EXCELLENT_JQN":"--","PM25_JQN":"--","EXCELLENT_RATE_OK_STR":"--","PM25_OK_STR":"--","STANDARDRATE":"--","GOODRATE":"--","GOODTWORATE":"--","GOODTWORATE_LAST":"--","GOODRATE_ONYEAR":"--","GOODTWORATE_ONYEAR":"--","TARGET_TWO":"","TARGET_THREE":""},
   isRed1: false,
   isGreen1: false,
   isWhite1: false,
   isOK0: 0,
   isOK1: 0,
   CWQIData: {"region_code":"","region_name":"南平市","longitude":"118.144","latitude":"27.3391","monitortime":"2025-09","region_cwqi":"--","region_cwqi_last_month":"2.791","region_cwqi_last_year":"2.791","mom_change":"--","mom_change_rate":"--","yoy_change":"0","yoy_change_rate":"--","cwqi_rank":"--","yoy_change_rate_state":"--","mom_change_rate_state":"--","mom_change_rate_unit":"--","yoy_change_rate_unit":"--","region_cwqi_state":"--","cwqiValueOf30thPlace":"--","difference":"--"},
   options: {"monitor":[],"section":[]},
   upstreamPointCode: [],
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
            default: {"width":"400px","height":"350px","position":"unset","left":"0px","top":"51px","backgroundColor":"var(--t-card-bgc)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"350px","position":"unset","left":"0px","top":"51px","backgroundColor":"var(--t-card-bgc)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tImageBasex0x1: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"57px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"57px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x2: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"56px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto"},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"56px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto"}}}, 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"1px","top":"173px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"1px","top":"173px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x4: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"1px","top":"172px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"1px","top":"172px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"202px","top":"69px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"202px","top":"69px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"72px","left":"221px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"72px","left":"221px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
tSelectx0x8: {
defaultStyle: {
            default: {"width":"82px","height":"26px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--t-white)","fontSize":"14","animationName":"","pointerEvents":"auto","paddingLeft":"12px","paddingRight":"0","position":"unset","left":"50px","top":"99px","max-width":"500px","min-width":"138px"},
            
            },
 default: { 
 
activeValue:["1"],
options:[{"value":"1","label":"国控","disabled":false},{"value":"2","label":"省控","disabled":false},{"value":"9","label":"小流域","disabled":false}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:true,
placeholder:"请选择",
clearable:false,
disabled:false,
collapseTags:true,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"82px","height":"26px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--t-white)","fontSize":"14","animationName":"","pointerEvents":"auto","paddingLeft":"12px","paddingRight":"0","position":"unset","left":"50px","top":"99px","max-width":"500px","min-width":"138px"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","backgroundColor":""}},"tag":{"default":{"backgroundColor":"var(--business-btn-default)","color":"#fff","height":"22px","lineHeight":"20px","width":"auto","maxWidth":"auto !important"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","width":"300px","left":"0 !important","right":"0 !important","top":"42px !important","height":""}},"arrow":{"default":{"backgroundImage":"var(--select-arrow-up-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"6px 4px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","fontSize":"14px","color":"var(--business-unit-icon)"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}},"dropdownItem":{"default":{"fontSize":"14px","color":"var(--t-white)","width":"300px"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)","fontSize":"18","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"dropdownItemText":{"default":{"whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","fontSize":"var(--text-size-14)"},"active":{"fontSize":"var(--text-size-14)"}},"tagText":{"default":{"fontSize":"var(--text-size-14)","max-width":"30px !important"}}},
multipleLimit:4,
data:[], 
 },
},
tRectx0x10: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"305px","top":"108px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"305px","top":"108px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x11: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"210px","top":"107px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"210px","top":"107px","position":"unset"}}}, 
 },
},
tLinex0x12: {
defaultStyle: {
            default: {"width":"368px","height":"1px","position":"unset","left":"17px","top":"169px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"368px","height":"1px","position":"unset","left":"17px","top":"169px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tTextCommonx0x13: {
defaultStyle: {
            default: {"width":"118px","height":"14px","color":"#FFCC00","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"283px","top":"71px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"全省排名：--/--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"118px","height":"14px","color":"#FFCC00","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"283px","top":"71px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"17px","top":"106px"},
            
            },
 default: { 
 
label:"现状",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"17px","top":"106px"}}}, 
 },
},
tTextx0x15: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"328px","top":"108px","animationName":""},
            
            },
 default: { 
 
label:"达到丨类",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"328px","top":"108px","animationName":""}}}, 
 },
},
tTextx0x16: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"223px","top":"108px","animationName":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"223px","top":"108px","animationName":""}}}, 
 },
},
tTextUnitx0x17: {
defaultStyle: {
            default: {"width":"56px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","position":"unset","left":"226px","top":"133px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"56px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","position":"unset","left":"226px","top":"133px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-blue)","fontFamily":"DIN-black","width":"auto","height":"","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"fontSize":"14px","lineHeight":"16px","color":"var(--t-color-text-green)","width":"auto","height":""}}},
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x18: {
defaultStyle: {
            default: {"width":"60px","height":"23px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","left":"326px","top":"132px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"60px","height":"23px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","left":"326px","top":"132px","position":"unset"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-aqi-red)","fontFamily":"DIN-black","width":"auto","height":"","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"fontSize":"14px","lineHeight":"16px","color":"var(--t-color-text-green)","width":"auto","height":""}}},
content:0,
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x19: {
defaultStyle: {
            default: {"width":"60px","height":"23px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","left":"325px","top":"248px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"60px","height":"23px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","left":"325px","top":"248px","position":"unset"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-aqi-red)","fontFamily":"DIN-black","width":"auto","height":"","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"fontSize":"14px","lineHeight":"16px","color":"var(--t-color-text-green)","width":"auto","height":""}}},
content:0,
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x20: {
defaultStyle: {
            default: {"width":"60px","height":"23px","position":"unset","left":"326px","top":"132px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"60px","height":"23px","position":"unset","left":"326px","top":"132px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-db-color)","fontFamily":"DIN-black","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"16px","color":"var(--t-color-text-green)","width":"auto","height":""}}},
content:0,
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x21: {
defaultStyle: {
            default: {"width":"60px","height":"23px","position":"unset","left":"325px","top":"248px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"60px","height":"23px","position":"unset","left":"325px","top":"248px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-db-color)","fontFamily":"DIN-black","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"16px","color":"var(--t-color-text-green)","width":"auto","height":""}}},
content:0,
unit:"%",
showOverflowTooltip:true, 
 },
},
tRectx0x22: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/fa8ce540233a40a9b26e701f8ea04494.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"63px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/fa8ce540233a40a9b26e701f8ea04494.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"63px","cursor":"pointer"}}}, 
 },
},
tTextx0x23: {
defaultStyle: {
            default: {"width":"149px","height":"16px","color":"var(--t-text)","position":"unset","left":"49px","top":"71px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer"},
            
            },
 default: { 
 
label:"达到或优于Ⅱ类比例",
editable:false,
cStyle:{"wrapper":{"default":{"width":"149px","height":"16px","color":"var(--t-text)","position":"unset","left":"49px","top":"71px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer"}}}, 
 },
},
tTextCommonx0x24: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"114px","top":"137px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"同比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"114px","top":"137px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTextUnitx0x25: {
defaultStyle: {
            default: {"width":"41px","height":"14px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"138px","left":"144px","position":"unset","lineHeight":"14px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"41px","height":"14px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"138px","left":"144px","position":"unset","lineHeight":"14px"}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","textAlign":"center","lineHeight":"14px","letterSpacing":"0px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","color":"#C5EEEA","background":"unset","backgroundClip":"unset","marginLeft":"2px"}}},
content:"持平",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x26: {
defaultStyle: {
            default: {"width":"41px","height":"14px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"257px","left":"141px","position":"unset","lineHeight":"14px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"41px","height":"14px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"257px","left":"141px","position":"unset","lineHeight":"14px","animationName":""}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","textAlign":"center","lineHeight":"14px","letterSpacing":"0px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","color":"#C5EEEA","background":"unset","backgroundClip":"unset","marginLeft":"2px"}}},
content:"持平",
unit:"",
showOverflowTooltip:true, 
 },
},
tRowx0x27: {
defaultStyle: {
            default: {"width":"82px","height":"32px","position":"unset","left":"16px","top":"125px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"82px","height":"32px","position":"unset","left":"16px","top":"125px"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextUnitx0x27x0: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRectx0x28: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"202px","top":"298px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"202px","top":"298px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tRectx0x29: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"202px","top":"297px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"202px","top":"297px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tTextx0x30: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"301px","left":"213px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"已达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"301px","left":"213px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
tTextx0x31: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"300px","left":"213px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"未达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"300px","left":"213px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
tRectx0x32: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"305px","top":"337px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"305px","top":"337px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x33: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"210px","top":"336px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"210px","top":"336px","position":"unset","animationName":""}}}, 
 },
},
tImageBasex0x34: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"286px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"286px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x35: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"1px","top":"286px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"1px","top":"286px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""}}}, 
 },
},
tTextx0x36: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"16px","top":"335px","animationName":""},
            
            },
 default: { 
 
label:"现状",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"16px","top":"335px","animationName":""}}}, 
 },
},
tTextx0x37: {
defaultStyle: {
            default: {"width":"76px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"316px","top":"337px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"达到 I 类",
editable:false,
cStyle:{"wrapper":{"default":{"width":"76px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"316px","top":"337px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x38: {
defaultStyle: {
            default: {"width":"76px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"312px","top":"301px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"76px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"312px","top":"301px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextUnitx0x39: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"324px","top":"359px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"324px","top":"359px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"-",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRectx0x40: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/fa8ce540233a40a9b26e701f8ea04494.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"292px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/fa8ce540233a40a9b26e701f8ea04494.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"292px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x41: {
defaultStyle: {
            default: {"width":"149px","height":"16px","color":"var(--t-text)","position":"unset","left":"49px","top":"299px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"巡河交水断面达标率",
editable:false,
cStyle:{"wrapper":{"default":{"width":"149px","height":"16px","color":"var(--t-text)","position":"unset","left":"49px","top":"299px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""}}}, 
 },
},
tTextCommonx0x42: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"-257px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"环比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"-257px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTextUnitx0x43: {
defaultStyle: {
            default: {"width":"50px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"257px","left":"162px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"50px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"257px","left":"162px","position":"unset","animationName":""}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","textAlign":"center","lineHeight":"14px","letterSpacing":"0px","color":"var(--t-white)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","color":"#C5EEEA","background":"unset","backgroundClip":"unset","marginLeft":"2px"}}},
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x44: {
defaultStyle: {
            default: {"width":"50px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"-262px","left":"159px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"50px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"-262px","left":"159px","position":"unset","animationName":""}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","textAlign":"center","lineHeight":"14px","letterSpacing":"0px","color":"var(--t-white)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","color":"#C5EEEA","background":"unset","backgroundClip":"unset","marginLeft":"2px"}}},
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextCommonx0x45: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"257px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"同比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"257px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tImageBasex0x46: {
defaultStyle: {
            default: {"width":"10px","height":"10px","position":"unset","left":"146px","top":"260px","animationName":""},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-05-10/4075379dd12e4676aa74ecf1a2234f22.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","position":"unset","left":"146px","top":"260px","animationName":""}}}, 
 },
},
tImageBasex0x47: {
defaultStyle: {
            default: {"width":"10px","height":"10px","position":"unset","left":"146px","top":"-263px","animationName":""},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-05-10/4075379dd12e4676aa74ecf1a2234f22.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","position":"unset","left":"146px","top":"-263px","animationName":""}}}, 
 },
},
tImageBasex0x48: {
defaultStyle: {
            default: {"width":"10px","height":"10px","animationName":"","left":"145px","top":"-263px","position":"unset"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-05-10/fa48e009288147a1afe6e88194c2ec18.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","animationName":"","left":"145px","top":"-263px","position":"unset"}}}, 
 },
},
tImageBasex0x49: {
defaultStyle: {
            default: {"width":"10px","height":"10px","animationName":"","left":"146px","top":"260px","position":"unset"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-05-10/fa48e009288147a1afe6e88194c2ec18.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","animationName":"","left":"146px","top":"260px","position":"unset"}}}, 
 },
},
tTextUnitx0x50: {
defaultStyle: {
            default: {"width":"49px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"257px","left":"162px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"49px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"257px","left":"162px","position":"unset","animationName":""}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","textAlign":"center","lineHeight":"14px","letterSpacing":"0px","color":"var(--t-num-color-red)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","color":"#C5EEEA","background":"unset","backgroundClip":"unset","marginLeft":"2px"}}},
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x51: {
defaultStyle: {
            default: {"width":"49px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"-261px","left":"159px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"49px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"-261px","left":"159px","position":"unset","animationName":""}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","textAlign":"center","lineHeight":"14px","letterSpacing":"0px","color":"var(--t-num-color-red)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","color":"#C5EEEA","background":"unset","backgroundClip":"unset","marginLeft":"2px"}}},
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRectx0x52: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"183px","top":"185px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"183px","top":"185px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tTextx0x54: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"188px","left":"200px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"188px","left":"200px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
tRectx0x56: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"306px","top":"224px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"306px","top":"224px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x57: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"211px","top":"223px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"211px","top":"223px","position":"unset","animationName":""}}}, 
 },
},
tLinex0x58: {
defaultStyle: {
            default: {"width":"368px","height":"1px","position":"unset","left":"18px","top":"285px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"368px","height":"1px","position":"unset","left":"18px","top":"285px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tTextx0x60: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"18px","top":"222px","animationName":""},
            
            },
 default: { 
 
label:"现状",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"18px","top":"222px","animationName":""}}}, 
 },
},
tTextx0x61: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"328px","top":"224px","animationName":""},
            
            },
 default: { 
 
label:"达到丨类",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"328px","top":"224px","animationName":""}}}, 
 },
},
tTextx0x62: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"224px","top":"224px","animationName":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"224px","top":"224px","animationName":""}}}, 
 },
},
tTextUnitx0x63: {
defaultStyle: {
            default: {"width":"56px","height":"22px","position":"unset","left":"230px","top":"249px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"56px","height":"22px","position":"unset","left":"230px","top":"249px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-blue)","fontFamily":"DIN-black","width":"auto","height":"","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"fontSize":"14px","lineHeight":"16px","color":"var(--t-color-text-green)","width":"auto","height":""}}},
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRectx0x64: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/fa8ce540233a40a9b26e701f8ea04494.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"17px","top":"179px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/fa8ce540233a40a9b26e701f8ea04494.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"17px","top":"179px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x65: {
defaultStyle: {
            default: {"width":"172px","height":"16px","color":"var(--t-text)","position":"unset","left":"50px","top":"186px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"饮用水源达标率",
editable:false,
cStyle:{"wrapper":{"default":{"width":"172px","height":"16px","color":"var(--t-text)","position":"unset","left":"50px","top":"186px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""}}}, 
 },
},
tTextUnitx0x66: {
defaultStyle: {
            default: {"width":"51px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","position":"unset","left":"18px","top":"356px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"51px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","position":"unset","left":"18px","top":"356px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-num-color-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"-",
unit:"%",
showOverflowTooltip:true, 
 },
},
tComponentx0x68: {
defaultStyle: {
            default: {"width":"400px","height":"50px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"cockpitTitleComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"50px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/cockpitTitle",
componentName:"cockpitTitleComponent", 
 },
},
tTextx0x69: {
defaultStyle: {
            default: {"width":"78px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"312px","top":"20px","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"78px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"312px","top":"20px","animationName":""}}}, 
 },
},
tTextx0x70: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"282px","top":"20px","animationName":""},
            
            },
 default: { 
 
label:"截至",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"282px","top":"20px","animationName":""}}}, 
 },
},
tTextx0x71: {
defaultStyle: {
            default: {"width":"96px","height":"20px","color":"#fff","fontSize":"20px","fontFamily":"方正综艺","position":"unset","left":"49px","top":"17px"},
            
            },
 default: { 
 
label:"水环境",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"20px","color":"#fff","fontSize":"20px","fontFamily":"方正综艺","position":"unset","left":"49px","top":"17px"}}}, 
 },
},
tRowx0x72: {
defaultStyle: {
            default: {"width":"82px","height":"32px","position":"unset","left":"17px","top":"241px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"82px","height":"32px","position":"unset","left":"17px","top":"241px","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextUnitx0x72x0: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRectx0x73: {
defaultStyle: {
            default: {"width":"388px","height":"38px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"7px","left":"5px","position":"unset","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"388px","height":"38px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"7px","left":"5px","position":"unset","animationName":"","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x74: {
defaultStyle: {
            default: {"width":"25px","height":"34px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","position":"unset","left":"108px","top":"12px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"25px","height":"34px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","position":"unset","left":"108px","top":"12px","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTextUnitx0x75: {
defaultStyle: {
            default: {"width":"60px","height":"23px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","left":"326px","top":"132px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"60px","height":"23px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","left":"326px","top":"132px","position":"unset"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-white)","fontFamily":"DIN-black","width":"auto","height":"","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"fontSize":"14px","lineHeight":"16px","color":"var(--t-color-text-green)","width":"auto","height":""}}},
content:0,
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x76: {
defaultStyle: {
            default: {"width":"60px","height":"23px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","left":"325px","top":"248px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"60px","height":"23px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","left":"325px","top":"248px","position":"unset"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-white)","fontFamily":"DIN-black","width":"auto","height":"","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"fontSize":"14px","lineHeight":"16px","color":"var(--t-color-text-green)","width":"auto","height":""}}},
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRectx0x77: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"202px","top":"298px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"202px","top":"298px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tTextx0x78: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"301px","left":"221px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"301px","left":"221px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
});
const handleSelectCard = (index) => {
global.isLoop = false;
global.isSelectedBg = index;
global.currentIndex = index + 1;

// 全局变量中驾驶舱专题变量中记录了选择的指标索引 从1开始
global.dashboardGlobalVariables.selectedIndicatorIndex = index;
// 全局变量中驾驶舱专题变量中记录了当前的模块 用于地图下方弹窗显示使用
global.dashboardGlobalVariables.activeTopic = 'water';
// 传递的时间
let time = state.monitorTime
// 点击的是饮用水源
if (index === 2) {
  time = state.drinkWaterState.time
}

const activeSelectedArr = global.leftWaterGlobalVariables.controlLevelSelected ? global.leftWaterGlobalVariables.controlLevelSelected.split(',') : [];
const activeItem = global.leftWaterGlobalVariables.controlLevelList.filter(item => activeSelectedArr.includes(item.value));


rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeIndicator', // 消息名称
  data: {
    indicator: index,
    time,
    selectedControllevel: activeItem
  },
});

rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeMonitorTime', // 消息名称
  data: {
    time, // 时间
  },
});

// 显示图层
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'setProblemVisibility',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      visible: true,
    }
  }
);

// 改变全局参数
// global.mapChangeAllStatusParams = {
//   time: global.cityTime,
//   indicator: index + 1,
// };

if (global.intervalId) {
  clearInterval(global.intervalId);
}


};
const handleSectionSelect = (data) => {
global.leftWaterGlobalVariables.controlLevelSelected = data.toString();
const activeItem = global.leftWaterGlobalVariables.controlLevelList.filter(item => data.includes(item.value));



  // 获取当前选中的指标和时间
  const indicator = global.dashboardGlobalVariables.selectedIndicatorIndex || 1;
  let time = state.monitorTime;
  if (indicator === 2) {
    time = state.drinkWaterState.time;
  }

  // 发送消息通知地图更新筛选
  if (rootData.rootSocket) {
    rootData.rootSocket.emit('message', {
      room: global.socketRoom,
      type: 'changeIndicator',
      data: {
        indicator: indicator,
        time: time,
        selectedControllevel:activeItem
      }
    });
  }

apiRegistry.getData.request();
};
const onchange1768553560343_0_0 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
handleSectionSelect(selectValueArr);
};
const onclick1739255126445 = () => {
// 执行自定义方法
handleSelectCard(1);
};
const onclick1739254824900 = () => {
// 执行自定义方法
handleSelectCard(1);
};
const onclick1763536869861_0_0 = () => {
// 执行自定义方法
handleSelectCard(33);
};
const onclick1763536806853_0_0 = () => {
// 执行自定义方法
handleSelectCard(2);
};
const onclick1763605779464 = () => {
// 执行自定义方法
dashboardGlobalFunctions.linkTo("water");
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getXhjsData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"REGION_CODE":"global.REGION_CODE","interfaceId":"0a12fb19704a964dd20e48ec044344d8"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"REGION_CODE":global.REGION_CODE,"interfaceId":"0a12fb19704a964dd20e48ec044344d8"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.REGION_CODE,"interfaceId":"0a12fb19704a964dd20e48ec044344d8"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getXhjsData'] = res.data;
                
     state.xhjsObj.num1 = '-';
state.xhjsObj.num2 = '-';
state.xhjsObj.time = '-';
if (res?.status === 200 && res?.data) {
   const result = res.data.data;
   state.xhjsObj.num1 = (result.GOODTWORATE === "100.00" ? '100' : result.GOODTWORATE) || '-';
   state.xhjsObj.num2 = result.ONERATE || '-';
   state.xhjsObj.time = result.MONITORTIME || '-';
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
 getRankingOfprovince: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"2","defaultValue":"2","description":"","dataKey":"level","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"ReaTLwTUTJ"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"LEVEL":"this.level","PARENT_REGION_CODE":"350000000000","interfaceId":"ffa6c80d5bcb832e1c35c5fe0c17e962","ASSESSTYPE":"culmulate","REGION_CODE":"global.REGION_CODE","MONITOR_TIME":"state.monitorTime"}},
              request: function (level, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"LEVEL":level,"PARENT_REGION_CODE":"350000000000","interfaceId":"ffa6c80d5bcb832e1c35c5fe0c17e962","ASSESSTYPE":"culmulate","REGION_CODE":global.REGION_CODE,"MONITOR_TIME":state.monitorTime},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"LEVEL":level,"PARENT_REGION_CODE":"350000000000","interfaceId":"ffa6c80d5bcb832e1c35c5fe0c17e962","ASSESSTYPE":"culmulate","REGION_CODE":global.REGION_CODE,"MONITOR_TIME":state.monitorTime});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRankingOfprovince'] = res.data;
                
     
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getDrinkingWaterRank: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"1d5b6f6d99a0d4fbd332fd417771eeb4","MONITORTIME":"state.monitorTime"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"1d5b6f6d99a0d4fbd332fd417771eeb4","MONITORTIME":state.monitorTime},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"1d5b6f6d99a0d4fbd332fd417771eeb4","MONITORTIME":state.monitorTime});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDrinkingWaterRank'] = res.data;
                
     if(res?.status === 200 && res?.data){
  const result = res.data.data
  console.log(result, 'getDrinkingWaterRank')

  state.drinkWaterState.tagName = result.is_standard === '1' ? '已达标' : '未达标'
  state.drinkWaterState.rank = `全省排名：${result.provincial_ranking}`
  state.drinkWaterState.current = result.curr_rate
  // 同比
  state.drinkWaterState.yoy_rate = result.yoy_rate
  // 同比值为0时，显示持平
  if(state.drinkWaterState.yoy_rate == '0'){
   state.drinkWaterState.yoy_flag = '0'
  }else{
   state.drinkWaterState.yoy_flag = result.yoy_flag
  }
  // 环比
  state.drinkWaterState.mom_rate = result.mom_rate
  state.drinkWaterState.mom_flag = result.mom_flag
  // 考核目标
  state.drinkWaterState.target_rate = `${result.target_rate}`
  state.drinkWaterState.rate_1_level = result.rate_1_level

}

/**
   * 
   * 接口返回
结果CODE	结果描述	javaType
standard_desc
达标情况描述

字符串
is_standard
是否达标（1-达标，0-未达标）

字符串
curr_rate
现状

字符串
rate_1_level
达到1类比例

字符串
target_rate
考核目录

字符串
mom_flag
环比标识（down-负值，up-正值）

字符串
mom_rate
环比差比

字符串
yoy_flag
同比标识（down-负值，up-正值）

字符串
yoy_rate
同比差比

字符串
provincial_ranking
全省排名

局部变量state.

time
字符串
输入数据
输入数据
tagName
字符串
输入数据
已达标/未达标
rank
字符串
全省排名：
全省排名：
current
字符串
输入数据
现状
yoy_rate
字符串
输入数据
同比
yoy_flag
字符串
up
同比标识 (down-负值，up-正值)
mom_rate
字符串
输入数据
环比差比
mom_flag
字符串
down
环比标识 (down-负值，up-正值)
target_rate
字符串
输入数据
考核目标
rate_1_level
字符串
输入数据
达到1类比例
   */
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getDrinkTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"REGION_CODE":"global.REGION_CODE","interfaceId":"3b6f856a9de8fa54f628b64c73c5274b","CODE_WQDATASOURCETYPE":"drinkingWater"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"REGION_CODE":global.REGION_CODE,"interfaceId":"3b6f856a9de8fa54f628b64c73c5274b","CODE_WQDATASOURCETYPE":"drinkingWater"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.REGION_CODE,"interfaceId":"3b6f856a9de8fa54f628b64c73c5274b","CODE_WQDATASOURCETYPE":"drinkingWater"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDrinkTime'] = res.data;
                
     state.drinkWaterState.time = ''
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  // 当前选中最新时间
  state.drinkWaterState.time = data.data.MONITORTIME || '';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
        state.monitorTime = '--';
      reject(error);
    });
  });
},
              },
// 接口函数
 getCWQIValueRanking30: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"083691ab6f0fd4a334810c73353a7e74"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"083691ab6f0fd4a334810c73353a7e74"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"083691ab6f0fd4a334810c73353a7e74"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCWQIValueRanking30'] = res.data;
                
     if (res?.data?.data.length) {
  state.CWQIData.cwqiValueOf30thPlace = res.data.data[0].cwqi;
  // 暂时改为静态数据
  // state.CWQIData.cwqiValueOf30thPlace = '2.8609'
  apiRegistry.getCWQIRanking.request();
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
 getCWQITime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"WSYSTEMTYPE":"river,lake","REGION_CODE":"global.REGION_CODE","interfaceId":"b21bbac284e473664e0b06f6b612020f"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"WSYSTEMTYPE":"river,lake","REGION_CODE":global.REGION_CODE,"interfaceId":"b21bbac284e473664e0b06f6b612020f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"WSYSTEMTYPE":"river,lake","REGION_CODE":global.REGION_CODE,"interfaceId":"b21bbac284e473664e0b06f6b612020f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCWQITime'] = res.data;
                
     if (res?.data?.data) {
  state.CWQIMonitorTime = res.data.data.MONITORTIME;
  // 暂时静态数据
  // state.CWQIMonitorTime = '2025-09';
  if (state.CWQIMonitorTime) {
    apiRegistry.getCWQIValueRanking30.request();
  }
} else {
  state.CWQIMonitorTime = '--';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
        state.monitorTime = '--';
      reject(error);
    });
  });
},
              },
// 接口函数
 getCWQIRanking: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"REGION_TYPE":"city","REGION_PATH":"350000000000","interfaceId":"df594c9791d9187af9f8c8771c2ce9ef","WSYSTEMTYPE":"river,lake","REGION_CODE":"global.REGION_CODE","MONITORTIME":"state.CWQIMonitorTime"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"REGION_TYPE":"city","REGION_PATH":"350000000000","interfaceId":"df594c9791d9187af9f8c8771c2ce9ef","WSYSTEMTYPE":"river,lake","REGION_CODE":global.REGION_CODE,"MONITORTIME":state.CWQIMonitorTime},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"REGION_TYPE":"city","REGION_PATH":"350000000000","interfaceId":"df594c9791d9187af9f8c8771c2ce9ef","WSYSTEMTYPE":"river,lake","REGION_CODE":global.REGION_CODE,"MONITORTIME":state.CWQIMonitorTime});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCWQIRanking'] = res.data;
                
     if (res?.data?.data.length) {
  console.log(1111)

  state.CWQIData = {
    ...state.CWQIData,
    ...res.data.data[0]
  };
  const { mom_change_rate, yoy_change_rate } = state.CWQIData;

  if (Number(mom_change_rate) > 0) {
    state.CWQIData.mom_change_rate_state = 'up';
    state.CWQIData.mom_change_rate_unit = '%';
  }
  if (Number(mom_change_rate) < 0) {
    state.CWQIData.mom_change_rate_state = 'down';
    state.CWQIData.mom_change_rate_unit = '%';
  }
  if (Number(mom_change_rate) === 0) {
    state.CWQIData.mom_change_rate = '持平';
    state.CWQIData.mom_change_rate_state = '';
    state.CWQIData.mom_change_rate_unit = ''
  }

  if (Number(yoy_change_rate) > 0) {
    state.CWQIData.yoy_change_rate_state = 'up';
    state.CWQIData.yoy_change_rate_unit = '%';
  }
  if (Number(yoy_change_rate) < 0) {
    state.CWQIData.yoy_change_rate_state = 'down';
    state.CWQIData.yoy_change_rate_unit = '%';
  }
  if (Number(yoy_change_rate) === 0) {
    state.CWQIData.yoy_change_rate = '持平';
    state.CWQIData.yoy_change_rate_state = '';
    state.CWQIData.yoy_change_rate_unit = ''
  }

  state.CWQIData.difference = (Number(res.data.data[0].region_cwqi) - Number(state.CWQIData.cwqiValueOf30thPlace)).toFixed(4);

  if (state.CWQIData.difference === 0) {
    state.CWQIData.region_cwqi = '持平';
  }
  state.CWQIData.region_cwqi_state = state.CWQIData.difference > 0 ? 'up' : 'down'

  /* 以下为暂时改为静态数据 */
  // state.CWQIData.region_cwqi_state = 'up';
  // state.CWQIData.region_cwqi = '2.9415';
  // state.CWQIData.difference = '0.0806';


  console.log(state.CWQIData)
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
 getData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"CODE_WQDATASOURCETYPE":"surfaceWater,smallWater","CODE_CONTROLLEVEL":"global.leftWaterGlobalVariables.controlLevelSelected","interfaceId":"5b68a402ee2000580080829b4fc68a02","ASSESSTYPE":"culmulate","REGION_CODE":"global.REGION_CODE","MONITORTIME":"state.monitorTime"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"CODE_WQDATASOURCETYPE":"surfaceWater,smallWater","CODE_CONTROLLEVEL":global.leftWaterGlobalVariables.controlLevelSelected,"interfaceId":"5b68a402ee2000580080829b4fc68a02","ASSESSTYPE":"culmulate","REGION_CODE":global.REGION_CODE,"MONITORTIME":state.monitorTime},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"CODE_WQDATASOURCETYPE":"surfaceWater,smallWater","CODE_CONTROLLEVEL":global.leftWaterGlobalVariables.controlLevelSelected,"interfaceId":"5b68a402ee2000580080829b4fc68a02","ASSESSTYPE":"culmulate","REGION_CODE":global.REGION_CODE,"MONITORTIME":state.monitorTime});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     if (res?.data?.data) {
  const data = res.data.data;

  state.cityData = res?.data?.data;
  const value = Number(data.EXCELLENT_JQN);
  state.isOk0 = value > 0 ? 1 : (value < 0 ? -1 : 0);

  if (Number(data.PM25_JQN) > 0) {
    state.isOk1 = 1;
  } else if (Number(data.PM25_JQN) < 0) {
    state.isOk1 = -1;
  } else {
    state.isOk1 = 0;
  }

  state.level3TargetValue = (100 - Number(state.cityData.GOODRATE)).toFixed(2);
  state.level2TargetValue = (100 - Number(state.cityData.GOODTWORATE)).toFixed(2);

  // 一类占比
  state.level1TargetValue = data.ONERATE || 0

  setColor(data.EXCELLENT_YYMB, 0, state);
  setColor(data.PM25_YYMB, 1, state);

  // 达到或优于类比例:达到1类 
  // state.oneRate = 

} else {
  for (let key in state.cityData) {
    state.cityData[key] = '--';
  }
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
 getTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"REGION_CODE":"global.REGION_CODE","interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0","CODE_WQDATASOURCETYPE":"surfaceWater"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"REGION_CODE":global.REGION_CODE,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0","CODE_WQDATASOURCETYPE":"surfaceWater"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.REGION_CODE,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0","CODE_WQDATASOURCETYPE":"surfaceWater"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTime'] = res.data;
                
     if (res?.data?.data) {
  state.monitorTime = res.data.data.MONITORTIME;
  global.dashboardGlobalVariables.waterTime = res.data.data.MONITORTIME;

  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'threeJSMapChangeAllStatus',  // 消息类型名称
      data: {                   // 消息内容，对象格式
        indicator: 1, // 指标
        time: state.monitorTime, // 时间
        REGION_NAME: global.REGION_NAME, // 行政区名称，非必须
        REGION_CODE: global.REGION_CODE, // 行政区编码
        // 默认驾驶舱（如果默认选中菜单改了，需要同步改）
        mapType: 'jsc', // 当前专题类型，驾驶舱： jsc  生态云：fjsty
      }
    }
  );

  apiRegistry.getRankingOfprovince.request(2).then((res) => {
    state.level2Ranking = res.data;
  });
  apiRegistry.getRankingOfprovince.request(3).then((res) => {
    state.level3Ranking = res.data;
  });

  apiRegistry.getData.request();

  apiRegistry.getDrinkingWaterRank.request();

} else {
  state.monitorTime = '--';
  global.dashboardGlobalVariables.waterTime = ''
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
        state.monitorTime = '--';
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getXhjsData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => ["culmulate",global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getRankingOfprovince', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getDrinkTime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCWQITime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => ["river,lake",global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCWQIRanking', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => ["culmulate",global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getTime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-leftWater', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 事件交互-请求调用接口
apiRegistry.getTime.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
/* 接收socket.io消息 */
const onSocketChangedfc6c5824f464fc5ba57 = function (data) {
if(data.type === "threeJSMapLoaded"){
try{
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "threeJSMapChangeAllStatus", // 消息名称
data: {"mapType":"jsc","REGION_CODE":global.REGION_CODE,"REGION_NAME":global.REGION_NAME,"time":state.monitorTime,"indicator":1}, // 发送的数据
});
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangedfc6c5824f464fc5ba57);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangedfc6c5824f464fc5ba57);
});
onMounted(() => {
setPageScale('t-l-c-leftWater', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
handleSelectCard(1);
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tImageBasex0x1ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x1.default, componentState.tImageBasex0x1?.[state.screenSize]));

 const tImageBasex0x2ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x2.default, componentState.tImageBasex0x2?.[state.screenSize]));

 const tImageBasex0x3ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x3.default, componentState.tImageBasex0x3?.[state.screenSize]));

 const tImageBasex0x4ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x4.default, componentState.tImageBasex0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tSelectx0x8ComputedData = computed(() => _.merge({}, componentState.tSelectx0x8.default, componentState.tSelectx0x8?.[state.screenSize]));

 const tRectx0x10ComputedData = computed(() => _.merge({}, componentState.tRectx0x10.default, componentState.tRectx0x10?.[state.screenSize]));

 const tRectx0x11ComputedData = computed(() => _.merge({}, componentState.tRectx0x11.default, componentState.tRectx0x11?.[state.screenSize]));

 const tLinex0x12ComputedData = computed(() => _.merge({}, componentState.tLinex0x12.default, componentState.tLinex0x12?.[state.screenSize]));

 const tTextCommonx0x13ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x13.default, componentState.tTextCommonx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tTextx0x15ComputedData = computed(() => _.merge({}, componentState.tTextx0x15.default, componentState.tTextx0x15?.[state.screenSize]));

 const tTextx0x16ComputedData = computed(() => _.merge({}, componentState.tTextx0x16.default, componentState.tTextx0x16?.[state.screenSize]));

 const tTextUnitx0x17ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x17.default, componentState.tTextUnitx0x17?.[state.screenSize]));

 const tTextUnitx0x18ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x18.default, componentState.tTextUnitx0x18?.[state.screenSize]));

 const tTextUnitx0x19ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x19.default, componentState.tTextUnitx0x19?.[state.screenSize]));

 const tTextUnitx0x20ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x20.default, componentState.tTextUnitx0x20?.[state.screenSize]));

 const tTextUnitx0x21ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x21.default, componentState.tTextUnitx0x21?.[state.screenSize]));

 const tRectx0x22ComputedData = computed(() => _.merge({}, componentState.tRectx0x22.default, componentState.tRectx0x22?.[state.screenSize]));

 const tTextx0x23ComputedData = computed(() => _.merge({}, componentState.tTextx0x23.default, componentState.tTextx0x23?.[state.screenSize]));

 const tTextCommonx0x24ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x24.default, componentState.tTextCommonx0x24?.[state.screenSize]));

 const tTextUnitx0x25ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x25.default, componentState.tTextUnitx0x25?.[state.screenSize]));

 const tTextUnitx0x26ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x26.default, componentState.tTextUnitx0x26?.[state.screenSize]));

 const tRowx0x27ComputedData = computed(() => _.merge({}, componentState.tRowx0x27.default, componentState.tRowx0x27?.[state.screenSize]));

 const tTextUnitx0x27x0ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x27x0.default, componentState.tTextUnitx0x27x0?.[state.screenSize]));

 const tRectx0x28ComputedData = computed(() => _.merge({}, componentState.tRectx0x28.default, componentState.tRectx0x28?.[state.screenSize]));

 const tRectx0x29ComputedData = computed(() => _.merge({}, componentState.tRectx0x29.default, componentState.tRectx0x29?.[state.screenSize]));

 const tTextx0x30ComputedData = computed(() => _.merge({}, componentState.tTextx0x30.default, componentState.tTextx0x30?.[state.screenSize]));

 const tTextx0x31ComputedData = computed(() => _.merge({}, componentState.tTextx0x31.default, componentState.tTextx0x31?.[state.screenSize]));

 const tRectx0x32ComputedData = computed(() => _.merge({}, componentState.tRectx0x32.default, componentState.tRectx0x32?.[state.screenSize]));

 const tRectx0x33ComputedData = computed(() => _.merge({}, componentState.tRectx0x33.default, componentState.tRectx0x33?.[state.screenSize]));

 const tImageBasex0x34ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x34.default, componentState.tImageBasex0x34?.[state.screenSize]));

 const tImageBasex0x35ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x35.default, componentState.tImageBasex0x35?.[state.screenSize]));

 const tTextx0x36ComputedData = computed(() => _.merge({}, componentState.tTextx0x36.default, componentState.tTextx0x36?.[state.screenSize]));

 const tTextx0x37ComputedData = computed(() => _.merge({}, componentState.tTextx0x37.default, componentState.tTextx0x37?.[state.screenSize]));

 const tTextx0x38ComputedData = computed(() => _.merge({}, componentState.tTextx0x38.default, componentState.tTextx0x38?.[state.screenSize]));

 const tTextUnitx0x39ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x39.default, componentState.tTextUnitx0x39?.[state.screenSize]));

 const tRectx0x40ComputedData = computed(() => _.merge({}, componentState.tRectx0x40.default, componentState.tRectx0x40?.[state.screenSize]));

 const tTextx0x41ComputedData = computed(() => _.merge({}, componentState.tTextx0x41.default, componentState.tTextx0x41?.[state.screenSize]));

 const tTextCommonx0x42ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x42.default, componentState.tTextCommonx0x42?.[state.screenSize]));

 const tTextUnitx0x43ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x43.default, componentState.tTextUnitx0x43?.[state.screenSize]));

 const tTextUnitx0x44ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x44.default, componentState.tTextUnitx0x44?.[state.screenSize]));

 const tTextCommonx0x45ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x45.default, componentState.tTextCommonx0x45?.[state.screenSize]));

 const tImageBasex0x46ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x46.default, componentState.tImageBasex0x46?.[state.screenSize]));

 const tImageBasex0x47ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x47.default, componentState.tImageBasex0x47?.[state.screenSize]));

 const tImageBasex0x48ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x48.default, componentState.tImageBasex0x48?.[state.screenSize]));

 const tImageBasex0x49ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x49.default, componentState.tImageBasex0x49?.[state.screenSize]));

 const tTextUnitx0x50ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x50.default, componentState.tTextUnitx0x50?.[state.screenSize]));

 const tTextUnitx0x51ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x51.default, componentState.tTextUnitx0x51?.[state.screenSize]));

 const tRectx0x52ComputedData = computed(() => _.merge({}, componentState.tRectx0x52.default, componentState.tRectx0x52?.[state.screenSize]));

 const tTextx0x54ComputedData = computed(() => _.merge({}, componentState.tTextx0x54.default, componentState.tTextx0x54?.[state.screenSize]));

 const tRectx0x56ComputedData = computed(() => _.merge({}, componentState.tRectx0x56.default, componentState.tRectx0x56?.[state.screenSize]));

 const tRectx0x57ComputedData = computed(() => _.merge({}, componentState.tRectx0x57.default, componentState.tRectx0x57?.[state.screenSize]));

 const tLinex0x58ComputedData = computed(() => _.merge({}, componentState.tLinex0x58.default, componentState.tLinex0x58?.[state.screenSize]));

 const tTextx0x60ComputedData = computed(() => _.merge({}, componentState.tTextx0x60.default, componentState.tTextx0x60?.[state.screenSize]));

 const tTextx0x61ComputedData = computed(() => _.merge({}, componentState.tTextx0x61.default, componentState.tTextx0x61?.[state.screenSize]));

 const tTextx0x62ComputedData = computed(() => _.merge({}, componentState.tTextx0x62.default, componentState.tTextx0x62?.[state.screenSize]));

 const tTextUnitx0x63ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x63.default, componentState.tTextUnitx0x63?.[state.screenSize]));

 const tRectx0x64ComputedData = computed(() => _.merge({}, componentState.tRectx0x64.default, componentState.tRectx0x64?.[state.screenSize]));

 const tTextx0x65ComputedData = computed(() => _.merge({}, componentState.tTextx0x65.default, componentState.tTextx0x65?.[state.screenSize]));

 const tTextUnitx0x66ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x66.default, componentState.tTextUnitx0x66?.[state.screenSize]));

 const tComponentx0x68ComputedData = computed(() => _.merge({}, componentState.tComponentx0x68.default, componentState.tComponentx0x68?.[state.screenSize]));

 const tTextx0x69ComputedData = computed(() => _.merge({}, componentState.tTextx0x69.default, componentState.tTextx0x69?.[state.screenSize]));

 const tTextx0x70ComputedData = computed(() => _.merge({}, componentState.tTextx0x70.default, componentState.tTextx0x70?.[state.screenSize]));

 const tTextx0x71ComputedData = computed(() => _.merge({}, componentState.tTextx0x71.default, componentState.tTextx0x71?.[state.screenSize]));

 const tRowx0x72ComputedData = computed(() => _.merge({}, componentState.tRowx0x72.default, componentState.tRowx0x72?.[state.screenSize]));

 const tTextUnitx0x72x0ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x72x0.default, componentState.tTextUnitx0x72x0?.[state.screenSize]));

 const tRectx0x73ComputedData = computed(() => _.merge({}, componentState.tRectx0x73.default, componentState.tRectx0x73?.[state.screenSize]));

 const tRectx0x74ComputedData = computed(() => _.merge({}, componentState.tRectx0x74.default, componentState.tRectx0x74?.[state.screenSize]));

 const tTextUnitx0x75ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x75.default, componentState.tTextUnitx0x75?.[state.screenSize]));

 const tTextUnitx0x76ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x76.default, componentState.tTextUnitx0x76?.[state.screenSize]));

 const tRectx0x77ComputedData = computed(() => _.merge({}, componentState.tRectx0x77.default, componentState.tRectx0x77?.[state.screenSize]));

 const tTextx0x78ComputedData = computed(() => _.merge({}, componentState.tTextx0x78.default, componentState.tTextx0x78?.[state.screenSize]));

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
tImageBasex0x1ComputedData,
tImageBasex0x2ComputedData,
tImageBasex0x3ComputedData,
tImageBasex0x4ComputedData,
tRectx0x5ComputedData,
tTextx0x7ComputedData,
tSelectx0x8ComputedData,
tRectx0x10ComputedData,
tRectx0x11ComputedData,
tLinex0x12ComputedData,
tTextCommonx0x13ComputedData,
tTextx0x14ComputedData,
tTextx0x15ComputedData,
tTextx0x16ComputedData,
tTextUnitx0x17ComputedData,
tTextUnitx0x18ComputedData,
tTextUnitx0x19ComputedData,
tTextUnitx0x20ComputedData,
tTextUnitx0x21ComputedData,
tRectx0x22ComputedData,
tTextx0x23ComputedData,
tTextCommonx0x24ComputedData,
tTextUnitx0x25ComputedData,
tTextUnitx0x26ComputedData,
tRowx0x27ComputedData,
tTextUnitx0x27x0ComputedData,
tRectx0x28ComputedData,
tRectx0x29ComputedData,
tTextx0x30ComputedData,
tTextx0x31ComputedData,
tRectx0x32ComputedData,
tRectx0x33ComputedData,
tImageBasex0x34ComputedData,
tImageBasex0x35ComputedData,
tTextx0x36ComputedData,
tTextx0x37ComputedData,
tTextx0x38ComputedData,
tTextUnitx0x39ComputedData,
tRectx0x40ComputedData,
tTextx0x41ComputedData,
tTextCommonx0x42ComputedData,
tTextUnitx0x43ComputedData,
tTextUnitx0x44ComputedData,
tTextCommonx0x45ComputedData,
tImageBasex0x46ComputedData,
tImageBasex0x47ComputedData,
tImageBasex0x48ComputedData,
tImageBasex0x49ComputedData,
tTextUnitx0x50ComputedData,
tTextUnitx0x51ComputedData,
tRectx0x52ComputedData,
tTextx0x54ComputedData,
tRectx0x56ComputedData,
tRectx0x57ComputedData,
tLinex0x58ComputedData,
tTextx0x60ComputedData,
tTextx0x61ComputedData,
tTextx0x62ComputedData,
tTextUnitx0x63ComputedData,
tRectx0x64ComputedData,
tTextx0x65ComputedData,
tTextUnitx0x66ComputedData,
tComponentx0x68ComputedData,
tTextx0x69ComputedData,
tTextx0x70ComputedData,
tTextx0x71ComputedData,
tRowx0x72ComputedData,
tTextUnitx0x72x0ComputedData,
tRectx0x73ComputedData,
tRectx0x74ComputedData,
tTextUnitx0x75ComputedData,
tTextUnitx0x76ComputedData,
tRectx0x77ComputedData,
tTextx0x78ComputedData,
onchange1768553560343_0_0,
onclick1739255126445,
onclick1739254824900,
onclick1763536869861_0_0,
onclick1763536869861_0_0,
onclick1763536806853_0_0,
onclick1763536806853_0_0,
onclick1763605779464,
};
},
};