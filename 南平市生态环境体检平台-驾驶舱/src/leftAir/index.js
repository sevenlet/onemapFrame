window.leftAirComponent = {
template: 
`<div id="t-l-c-leftAir" class="t-l-c-leftAir" >` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex !== 7" id="t-image-base-aa88.4ecff2b4" class="leftAir-t-image-base-0-0"  :src="tImageBasex0x0ComputedData.src" :fit="tImageBasex0x0ComputedData.fit" :c-style="tImageBasex0x0ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 7" id="t-image-base-4033.74bb274aa" class="leftAir-t-image-base-0-1"  :src="tImageBasex0x1ComputedData.src" :fit="tImageBasex0x1ComputedData.fit" :c-style="tImageBasex0x1ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 5" id="t-image-base-de52.90ad4ba85" class="leftAir-t-image-base-0-2"  :src="tImageBasex0x2ComputedData.src" :fit="tImageBasex0x2ComputedData.fit" :c-style="tImageBasex0x2ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 6" id="t-image-base-e4c9.15da12ff7" class="leftAir-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex !== 6" id="t-image-base-2b03.b56345f3c" class="leftAir-t-image-base-0-4"  :src="tImageBasex0x4ComputedData.src" :fit="tImageBasex0x4ComputedData.fit" :c-style="tImageBasex0x4ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 4" id="t-image-base-16ea.9e1b915d8" class="leftAir-t-image-base-0-5"  :src="tImageBasex0x5ComputedData.src" :fit="tImageBasex0x5ComputedData.fit" :c-style="tImageBasex0x5ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex !== 5" id="t-image-base-b12d.4e48b1aac" class="leftAir-t-image-base-0-6"  :src="tImageBasex0x6ComputedData.src" :fit="tImageBasex0x6ComputedData.fit" :c-style="tImageBasex0x6ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex !== 4" id="t-image-base-4f81.e5868f47c" class="leftAir-t-image-base-0-7"  :src="tImageBasex0x7ComputedData.src" :fit="tImageBasex0x7ComputedData.fit" :c-style="tImageBasex0x7ComputedData.cStyle">` +
`</t-image-base>` +
`<t-rect id="t-rect-01ee.5171cce4" class="leftAir-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-7374.4cb3c6c46" class="leftAir-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-unit v-if="state.betterThanTarget.PM10 === 'up'" id="t-text-unit-c114.108b0246a" class="leftAir-t-text-unit-0-10"  :c-style="tTextUnitx0x10ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.PM10, componentPropBindingMap?.['t-text-unit-c114.108b0246a']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x10ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x10ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.betterThanTarget.PM10 !== 'up'" id="t-text-unit-289f.006329efc" class="leftAir-t-text-unit-0-11"  :c-style="tTextUnitx0x11ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.PM10, componentPropBindingMap?.['t-text-unit-289f.006329efc']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x11ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x11ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-component id="t-component-568d.7cecfab45" class="leftAir-t-component-0-12"  :name="tComponentx0x12ComputedData.name" :c-style="tComponentx0x12ComputedData.cStyle" :src="tComponentx0x12ComputedData.src" :component-name="tComponentx0x12ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-55ff.397e88ed" class="leftAir-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-a93d.44ac94996" class="leftAir-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-37d9.f79637e82" class="leftAir-t-text-0-15"  :label="tTextx0x15ComputedData.label" :editable="tTextx0x15ComputedData.editable" :c-style="tTextx0x15ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-41ff.d151512ad" class="leftAir-t-text-0-16"  :label="replaceCssVariables(filterData(state.monitorTime, componentPropBindingMap?.['t-text-41ff.d151512ad']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x16ComputedData.editable" :c-style="tTextx0x16ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-3e4f.eb41562e" class="leftAir-t-text-unit-0-17"  :c-style="tTextUnitx0x17ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.PM10_TARGET, componentPropBindingMap?.['t-text-unit-3e4f.eb41562e']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x17ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x17ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.betterThanTarget.PM10 === 'up'" id="t-text-unit-4e36.c28f41b54" class="leftAir-t-text-unit-0-18"  :c-style="tTextUnitx0x18ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.PM10_OVER_TARGET, componentPropBindingMap?.['t-text-unit-4e36.c28f41b54']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x18ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x18ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.betterThanTarget.PM10 !== 'up'" id="t-text-unit-463e.7c6c8edb2" class="leftAir-t-text-unit-0-19"  :c-style="tTextUnitx0x19ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.PM10_OVER_TARGET, componentPropBindingMap?.['t-text-unit-463e.7c6c8edb2']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x19ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x19ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.betterThanTarget.PM10 === 'down'" id="t-text-unit-feee.3fedcd0a3" class="leftAir-t-text-unit-0-20"  :c-style="tTextUnitx0x20ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.PM10_OVER_TARGET, componentPropBindingMap?.['t-text-unit-feee.3fedcd0a3']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x20ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x20ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-38a7.c500efb5a" class="leftAir-t-rect-0-21"  :tip="tRectx0x21ComputedData.tip" :label="tRectx0x21ComputedData.label" :active="tRectx0x21ComputedData.active" :c-style="tRectx0x21ComputedData.cStyle" @click="onclick1763536869861_0_0">` +
`</t-rect>` +
`<t-text id="t-text-6bb5.4f5bf9ad4" class="leftAir-t-text-0-22"  :label="tTextx0x22ComputedData.label" :editable="tTextx0x22ComputedData.editable" :c-style="tTextx0x22ComputedData.cStyle" @click="onclick1763536869861_0_0">` +
`</t-text>` +
`<t-text-common id="t-text-common-be1e.ec71d538" class="leftAir-t-text-common-0-23"  :label="tTextCommonx0x23ComputedData.label" :editable="tTextCommonx0x23ComputedData.editable" :c-style="tTextCommonx0x23ComputedData.cStyle">` +
`</t-text-common>` +
`<t-image-base v-if="state.yearOnYearData.PM10_CHANGE_RATE === 'up'" id="t-image-base-1cf4.9762a75ae" class="leftAir-t-image-base-0-24"  :src="tImageBasex0x24ComputedData.src" :fit="tImageBasex0x24ComputedData.fit" :c-style="tImageBasex0x24ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="state.yearOnYearData.PM25_CHANGE_RATE === 'up'" id="t-image-base-8eeb.fe2c0dd4" class="leftAir-t-image-base-0-25"  :src="tImageBasex0x25ComputedData.src" :fit="tImageBasex0x25ComputedData.fit" :c-style="tImageBasex0x25ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="state.yearOnYearData.EXCELLENT_CHANGE_RATE === 'up'" id="t-image-base-78fa.027f7a712" class="leftAir-t-image-base-0-26"  :src="tImageBasex0x26ComputedData.src" :fit="tImageBasex0x26ComputedData.fit" :c-style="tImageBasex0x26ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="state.yearOnYearData.AQCI_CHANGE_RATE === 'up'" id="t-image-base-7c8f.01b4b0f16" class="leftAir-t-image-base-0-27"  :src="tImageBasex0x27ComputedData.src" :fit="tImageBasex0x27ComputedData.fit" :c-style="tImageBasex0x27ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="state.yearOnYearData.PM10_CHANGE_RATE === 'up'" id="t-image-base-04e3.83b5f0fe2" class="leftAir-t-image-base-0-28"  :src="tImageBasex0x28ComputedData.src" :fit="tImageBasex0x28ComputedData.fit" :c-style="tImageBasex0x28ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="state.yearOnYearData.PM25_CHANGE_RATE === 'up'" id="t-image-base-8421.944526704" class="leftAir-t-image-base-0-29"  :src="tImageBasex0x29ComputedData.src" :fit="tImageBasex0x29ComputedData.fit" :c-style="tImageBasex0x29ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="state.yearOnYearData.EXCELLENT_CHANGE_RATE === 'down'" id="t-image-base-3ed3.627b003b" class="leftAir-t-image-base-0-30"  :src="tImageBasex0x30ComputedData.src" :fit="tImageBasex0x30ComputedData.fit" :c-style="tImageBasex0x30ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="state.yearOnYearData.AQCI_CHANGE_RATE === 'down'" id="t-image-base-a636.b5f1f2f42" class="leftAir-t-image-base-0-31"  :src="tImageBasex0x31ComputedData.src" :fit="tImageBasex0x31ComputedData.fit" :c-style="tImageBasex0x31ComputedData.cStyle">` +
`</t-image-base>` +
`<t-text id="t-text-3df2.076b058bb" class="leftAir-t-text-0-32"  :label="tTextx0x32ComputedData.label" :editable="tTextx0x32ComputedData.editable" :c-style="tTextx0x32ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-69fa.991666b61" class="leftAir-t-text-0-33"  :label="tTextx0x33ComputedData.label" :editable="tTextx0x33ComputedData.editable" :c-style="tTextx0x33ComputedData.cStyle">` +
`</t-text>` +
`<t-rect v-if="state.cityData.EXCELLENT_RATE_OK_STR === '已达标'" id="t-rect-4f5b.536d0a55c" class="leftAir-t-rect-0-34"  :tip="tRectx0x34ComputedData.tip" :label="tRectx0x34ComputedData.label" :active="tRectx0x34ComputedData.active" :c-style="tRectx0x34ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.airInfo.EXCELLENT_RATE_STANDARD_STATUS === '达标'" id="t-rect-a64a.177b75f78" class="leftAir-t-rect-0-35"  :tip="tRectx0x35ComputedData.tip" :label="tRectx0x35ComputedData.label" :active="tRectx0x35ComputedData.active" :c-style="tRectx0x35ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.airInfo.PM25_OVERSTANDARD === '达标'" id="t-rect-4666.a37e0601" class="leftAir-t-rect-0-36"  :tip="tRectx0x36ComputedData.tip" :label="tRectx0x36ComputedData.label" :active="tRectx0x36ComputedData.active" :c-style="tRectx0x36ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.airInfo.PM10_OVERSTANDARD === '达标'" id="t-rect-7485.779c77107" class="leftAir-t-rect-0-37"  :tip="tRectx0x37ComputedData.tip" :label="tRectx0x37ComputedData.label" :active="tRectx0x37ComputedData.active" :c-style="tRectx0x37ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.cityData.EXCELLENT_RATE_OK_STR === '未达标'" id="t-rect-4f51.9cad7f606" class="leftAir-t-rect-0-38"  :tip="tRectx0x38ComputedData.tip" :label="tRectx0x38ComputedData.label" :active="tRectx0x38ComputedData.active" :c-style="tRectx0x38ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.airInfo.EXCELLENT_RATE_STANDARD_STATUS !== '达标'" id="t-rect-7be7.6b933db1e" class="leftAir-t-rect-0-39"  :tip="tRectx0x39ComputedData.tip" :label="tRectx0x39ComputedData.label" :active="tRectx0x39ComputedData.active" :c-style="tRectx0x39ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.airInfo.PM25_OVERSTANDARD !== '达标'" id="t-rect-588f.8cd850e3c" class="leftAir-t-rect-0-40"  :tip="tRectx0x40ComputedData.tip" :label="tRectx0x40ComputedData.label" :active="tRectx0x40ComputedData.active" :c-style="tRectx0x40ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.airInfo.PM10_OVERSTANDARD !== '达标'" id="t-rect-fb88.ccf3287e8" class="leftAir-t-rect-0-41"  :tip="tRectx0x41ComputedData.tip" :label="tRectx0x41ComputedData.label" :active="tRectx0x41ComputedData.active" :c-style="tRectx0x41ComputedData.cStyle">` +
`</t-rect>` +
`<t-text v-if="state.cityData.EXCELLENT_RATE_OK_STR === '已达标'" id="t-text-8727.b45ee59d2" class="leftAir-t-text-0-42"  :label="tTextx0x42ComputedData.label" :editable="tTextx0x42ComputedData.editable" :c-style="tTextx0x42ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-863c.9a78a207" class="leftAir-t-text-0-43"  :label="replaceCssVariables(filterData(state.airInfo.EXCELLENT_RATE_STANDARD_STATUS, componentPropBindingMap?.['t-text-863c.9a78a207']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x43ComputedData.editable" :c-style="tTextx0x43ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-9f49.510340e38" class="leftAir-t-text-0-44"  :label="replaceCssVariables(filterData(state.airInfo.PM25_OVERSTANDARD, componentPropBindingMap?.['t-text-9f49.510340e38']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x44ComputedData.editable" :c-style="tTextx0x44ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-7f47.27e095b66" class="leftAir-t-text-0-45"  :label="replaceCssVariables(filterData(state.airInfo.PM10_OVERSTANDARD, componentPropBindingMap?.['t-text-7f47.27e095b66']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x45ComputedData.editable" :c-style="tTextx0x45ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.cityData.EXCELLENT_RATE_OK_STR === '未达标'" id="t-text-3eec.22bfafdf9" class="leftAir-t-text-0-46"  :label="tTextx0x46ComputedData.label" :editable="tTextx0x46ComputedData.editable" :c-style="tTextx0x46ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-9884.229278812" class="leftAir-t-rect-0-47"  :tip="tRectx0x47ComputedData.tip" :label="tRectx0x47ComputedData.label" :active="tRectx0x47ComputedData.active" :c-style="tRectx0x47ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-3d2c.232c145c2" class="leftAir-t-rect-0-48"  :tip="tRectx0x48ComputedData.tip" :label="tRectx0x48ComputedData.label" :active="tRectx0x48ComputedData.active" :c-style="tRectx0x48ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-0565.423ddb547" class="leftAir-t-rect-0-49"  :tip="tRectx0x49ComputedData.tip" :label="tRectx0x49ComputedData.label" :active="tRectx0x49ComputedData.active" :c-style="tRectx0x49ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-5dd4.ca5f36b52" class="leftAir-t-rect-0-50"  :tip="tRectx0x50ComputedData.tip" :label="tRectx0x50ComputedData.label" :active="tRectx0x50ComputedData.active" :c-style="tRectx0x50ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-1330.fe295074" class="leftAir-t-rect-0-51"  :tip="tRectx0x51ComputedData.tip" :label="tRectx0x51ComputedData.label" :active="tRectx0x51ComputedData.active" :c-style="tRectx0x51ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-5cdb.27c5b3dfe" class="leftAir-t-rect-0-52"  :tip="tRectx0x52ComputedData.tip" :label="tRectx0x52ComputedData.label" :active="tRectx0x52ComputedData.active" :c-style="tRectx0x52ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-unit v-if="state.airInfo.EXCELLENT_RATE_STANDARD_STATUS === '达标'" id="t-text-unit-07d7.32a370ea2" class="leftAir-t-text-unit-0-53"  :c-style="tTextUnitx0x53ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.EXCELLENT_RATE, componentPropBindingMap?.['t-text-unit-07d7.32a370ea2']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x53ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x53ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.airInfo.EXCELLENT_RATE_STANDARD_STATUS !== '达标'" id="t-text-unit-f80e.9678b34c" class="leftAir-t-text-unit-0-54"  :c-style="tTextUnitx0x54ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.EXCELLENT_RATE, componentPropBindingMap?.['t-text-unit-f80e.9678b34c']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x54ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x54ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.betterThanTarget.AQCI !== 'up'" id="t-text-unit-5df4.a32c1b6f2" class="leftAir-t-text-unit-0-55"  :c-style="tTextUnitx0x55ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.AQCI, componentPropBindingMap?.['t-text-unit-5df4.a32c1b6f2']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x55ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x55ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.betterThanTarget.AQCI === 'up'" id="t-text-unit-87bf.eb56eaa92" class="leftAir-t-text-unit-0-56"  :c-style="tTextUnitx0x56ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.AQCI, componentPropBindingMap?.['t-text-unit-87bf.eb56eaa92']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x56ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x56ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.betterThanTarget.PM25 !== 'up'" id="t-text-unit-7d9e.c8f504034" class="leftAir-t-text-unit-0-57"  :c-style="tTextUnitx0x57ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.PM25, componentPropBindingMap?.['t-text-unit-7d9e.c8f504034']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x57ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x57ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.betterThanTarget.PM25 === 'up'" id="t-text-unit-76fa.6dd858b8" class="leftAir-t-text-unit-0-58"  :c-style="tTextUnitx0x58ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.PM25, componentPropBindingMap?.['t-text-unit-76fa.6dd858b8']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x58ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x58ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-line id="t-line-c3d0.41db9917a" class="leftAir-t-line-0-59"  :c-style="tLinex0x59ComputedData.cStyle">` +
`</t-line>` +
`<t-line id="t-line-59cf.2400e2da6" class="leftAir-t-line-0-60"  :c-style="tLinex0x60ComputedData.cStyle">` +
`</t-line>` +
`<t-text-common id="t-text-common-dc54.e15d408c" class="leftAir-t-text-common-0-61"  :label="replaceCssVariables(filterData(state.rankingData.compositeIndexRanking, componentPropBindingMap?.['t-text-common-dc54.e15d408c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x61ComputedData.editable" :c-style="tTextCommonx0x61ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text id="t-text-e3ad.391156575" class="leftAir-t-text-0-65"  :label="tTextx0x65ComputedData.label" :editable="tTextx0x65ComputedData.editable" :c-style="tTextx0x65ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-43e6.5c59336a6" class="leftAir-t-text-0-66"  :label="tTextx0x66ComputedData.label" :editable="tTextx0x66ComputedData.editable" :c-style="tTextx0x66ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-c244.a21b1ccaa" class="leftAir-t-text-0-67"  :label="tTextx0x67ComputedData.label" :editable="tTextx0x67ComputedData.editable" :c-style="tTextx0x67ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-ca8c.f28156286" class="leftAir-t-text-0-68"  :label="tTextx0x68ComputedData.label" :editable="tTextx0x68ComputedData.editable" :c-style="tTextx0x68ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-24ce.d9ac0b659" class="leftAir-t-text-0-69"  :label="tTextx0x69ComputedData.label" :editable="tTextx0x69ComputedData.editable" :c-style="tTextx0x69ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-077f.91dc71e46" class="leftAir-t-text-0-70"  :label="tTextx0x70ComputedData.label" :editable="tTextx0x70ComputedData.editable" :c-style="tTextx0x70ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-2456.8cd16e232" class="leftAir-t-text-0-71"  :label="tTextx0x71ComputedData.label" :editable="tTextx0x71ComputedData.editable" :c-style="tTextx0x71ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-3008.70ae418d8" class="leftAir-t-text-0-72"  :label="tTextx0x72ComputedData.label" :editable="tTextx0x72ComputedData.editable" :c-style="tTextx0x72ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-ab4d.e2dced67" class="leftAir-t-text-0-73"  :label="tTextx0x73ComputedData.label" :editable="tTextx0x73ComputedData.editable" :c-style="tTextx0x73ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-b633.4ff7b5544" class="leftAir-t-text-unit-0-74"  :c-style="tTextUnitx0x74ComputedData.cStyle" :content="replaceCssVariables(filterData(state.rankingData.preOne, componentPropBindingMap?.['t-text-unit-b633.4ff7b5544']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x74ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x74ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-0cec.02305542c" class="leftAir-t-text-unit-0-75"  :c-style="tTextUnitx0x75ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.EXCELLENT_RATE_TARGET, componentPropBindingMap?.['t-text-unit-0cec.02305542c']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x75ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x75ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-ab81.940f67628" class="leftAir-t-text-unit-0-76"  :c-style="tTextUnitx0x76ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.PM25_TARGET, componentPropBindingMap?.['t-text-unit-ab81.940f67628']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x76ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x76ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isRed0 === true" id="t-text-unit-ff84.f056582b1" class="leftAir-t-text-unit-0-77"  :c-style="tTextUnitx0x77ComputedData.cStyle" :content="replaceCssVariables(filterData(state.cityData.EXCELLENT_YYMB, componentPropBindingMap?.['t-text-unit-ff84.f056582b1']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x77ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x77ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isWhite0 === true" id="t-text-unit-4698.c773749bc" class="leftAir-t-text-unit-0-78"  :c-style="tTextUnitx0x78ComputedData.cStyle" :content="replaceCssVariables(filterData(state.cityData.EXCELLENT_YYMB, componentPropBindingMap?.['t-text-unit-4698.c773749bc']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x78ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x78ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-36e0.12f9f08a4" class="leftAir-t-text-unit-0-79"  :c-style="tTextUnitx0x79ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.POLLUTE_DAYS, componentPropBindingMap?.['t-text-unit-36e0.12f9f08a4']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="replaceCssVariables(filterData(state.airInfo.POLLUTE_DAYS_TARGET, componentPropBindingMap?.['t-text-unit-36e0.12f9f08a4']['unit'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :show-overflow-tooltip="tTextUnitx0x79ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-1ca5.5f3859aeb" class="leftAir-t-text-unit-0-80"  :c-style="tTextUnitx0x80ComputedData.cStyle" :content="replaceCssVariables(filterData(state.rankingData.nextOne, componentPropBindingMap?.['t-text-unit-1ca5.5f3859aeb']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="replaceCssVariables(filterData(state.rankingData.nextOneNum, componentPropBindingMap?.['t-text-unit-1ca5.5f3859aeb']['unit'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :show-overflow-tooltip="tTextUnitx0x80ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.betterThanTarget.PM25 === '-'" id="t-text-unit-c49b.76625026b" class="leftAir-t-text-unit-0-81"  :c-style="tTextUnitx0x81ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.PM25_OVER_TARGET, componentPropBindingMap?.['t-text-unit-c49b.76625026b']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x81ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x81ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.betterThanTarget.PM25 === 'up'" id="t-text-unit-2339.5008f06f6" class="leftAir-t-text-unit-0-82"  :c-style="tTextUnitx0x82ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.PM25_OVER_TARGET, componentPropBindingMap?.['t-text-unit-2339.5008f06f6']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x82ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x82ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.betterThanTarget.PM25 === 'down'" id="t-text-unit-eff1.d0d17b74a" class="leftAir-t-text-unit-0-83"  :c-style="tTextUnitx0x83ComputedData.cStyle" :content="replaceCssVariables(filterData(state.airInfo.PM25_OVER_TARGET, componentPropBindingMap?.['t-text-unit-eff1.d0d17b74a']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x83ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x83ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-aa88.a72e421b" class="leftAir-t-rect-0-84"  :tip="tRectx0x84ComputedData.tip" :label="tRectx0x84ComputedData.label" :active="tRectx0x84ComputedData.active" :c-style="tRectx0x84ComputedData.cStyle" @click="onclick1739255126445">` +
`</t-rect>` +
`<t-rect id="t-rect-2d22.252891d17" class="leftAir-t-rect-0-85"  :tip="tRectx0x85ComputedData.tip" :label="tRectx0x85ComputedData.label" :active="tRectx0x85ComputedData.active" :c-style="tRectx0x85ComputedData.cStyle" @click="onclick1763536806853_0_0">` +
`</t-rect>` +
`<t-rect id="t-rect-430a.b527cd8bc" class="leftAir-t-rect-0-86"  :tip="tRectx0x86ComputedData.tip" :label="tRectx0x86ComputedData.label" :active="tRectx0x86ComputedData.active" :c-style="tRectx0x86ComputedData.cStyle" @click="onclick1763539876275_0_0">` +
`</t-rect>` +
`<t-text id="t-text-86e9.6e4bda798" class="leftAir-t-text-0-87"  :label="tTextx0x87ComputedData.label" :editable="tTextx0x87ComputedData.editable" :c-style="tTextx0x87ComputedData.cStyle" @click="onclick1739254824900">` +
`</t-text>` +
`<t-text id="t-text-815b.e047e62fa" class="leftAir-t-text-0-88"  :label="tTextx0x88ComputedData.label" :editable="tTextx0x88ComputedData.editable" :c-style="tTextx0x88ComputedData.cStyle" @click="onclick1763536806853_0_0">` +
`</t-text>` +
`<t-text id="t-text-97a2.bc76b31fe" class="leftAir-t-text-0-89"  :label="tTextx0x89ComputedData.label" :editable="tTextx0x89ComputedData.editable" :c-style="tTextx0x89ComputedData.cStyle" @click="onclick1763539876275_0_0">` +
`</t-text>` +
`<t-rect id="t-rect-f9b3.9fb90bde6" class="leftAir-t-rect-0-90"  :tip="tRectx0x90ComputedData.tip" :label="tRectx0x90ComputedData.label" :active="tRectx0x90ComputedData.active" :c-style="tRectx0x90ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-f45a.4ce0273f2" class="leftAir-t-text-common-0-91"  :label="replaceCssVariables(filterData(state.airInfo.PM10_CHANGE_RATE, componentPropBindingMap?.['t-text-common-f45a.4ce0273f2']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x91ComputedData.editable" :c-style="tTextCommonx0x91ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-b401.2a76e22e6" class="leftAir-t-text-common-0-92"  :label="replaceCssVariables(filterData(state.airInfo.PM25_CHANGE_RATE, componentPropBindingMap?.['t-text-common-b401.2a76e22e6']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x92ComputedData.editable" :c-style="tTextCommonx0x92ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-52b2.d23c9894e" class="leftAir-t-text-common-0-93"  :label="replaceCssVariables(filterData(state.airInfo.EXCELLENT_CHANGE_RATE, componentPropBindingMap?.['t-text-common-52b2.d23c9894e']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x93ComputedData.editable" :c-style="tTextCommonx0x93ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-512f.57f778e8c" class="leftAir-t-text-common-0-94"  :label="replaceCssVariables(filterData(state.airInfo.AQCI_CHANGE_RATE, componentPropBindingMap?.['t-text-common-512f.57f778e8c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x94ComputedData.editable" :c-style="tTextCommonx0x94ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-0c50.d30cce022" class="leftAir-t-text-common-0-95"  :label="tTextCommonx0x95ComputedData.label" :editable="tTextCommonx0x95ComputedData.editable" :c-style="tTextCommonx0x95ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-4923.d8e535d6" class="leftAir-t-text-common-0-96"  :label="tTextCommonx0x96ComputedData.label" :editable="tTextCommonx0x96ComputedData.editable" :c-style="tTextCommonx0x96ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-9d8c.00073bc1c" class="leftAir-t-text-common-0-97"  :label="tTextCommonx0x97ComputedData.label" :editable="tTextCommonx0x97ComputedData.editable" :c-style="tTextCommonx0x97ComputedData.cStyle">` +
`</t-text-common>` +
`<t-rect id="t-rect-3f17.bb27f75d4" class="leftAir-t-rect-0-98"  :tip="tRectx0x98ComputedData.tip" :label="tRectx0x98ComputedData.label" :active="tRectx0x98ComputedData.active" :c-style="tRectx0x98ComputedData.cStyle" @click="onclick1763605424065">` +
`</t-rect>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-image-base-aa88.4ecff2b4":{"attributeName":"tImageBasex0x0","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-4033.74bb274aa":{"attributeName":"tImageBasex0x1","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-de52.90ad4ba85":{"attributeName":"tImageBasex0x2","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-e4c9.15da12ff7":{"attributeName":"tImageBasex0x3","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-2b03.b56345f3c":{"attributeName":"tImageBasex0x4","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-16ea.9e1b915d8":{"attributeName":"tImageBasex0x5","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-b12d.4e48b1aac":{"attributeName":"tImageBasex0x6","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-4f81.e5868f47c":{"attributeName":"tImageBasex0x7","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-01ee.5171cce4":{"attributeName":"tRectx0x8","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-7374.4cb3c6c46":{"attributeName":"tRectx0x9","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-c114.108b0246a":{"attributeName":"tTextUnitx0x10","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-289f.006329efc":{"attributeName":"tTextUnitx0x11","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-component-568d.7cecfab45":{"attributeName":"tComponentx0x12","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-55ff.397e88ed":{"attributeName":"tTextx0x13","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a93d.44ac94996":{"attributeName":"tTextx0x14","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-37d9.f79637e82":{"attributeName":"tTextx0x15","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-41ff.d151512ad":{"attributeName":"tTextx0x16","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-3e4f.eb41562e":{"attributeName":"tTextUnitx0x17","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-4e36.c28f41b54":{"attributeName":"tTextUnitx0x18","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-463e.7c6c8edb2":{"attributeName":"tTextUnitx0x19","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-feee.3fedcd0a3":{"attributeName":"tTextUnitx0x20","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-38a7.c500efb5a":{"attributeName":"tRectx0x21","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6bb5.4f5bf9ad4":{"attributeName":"tTextx0x22","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-be1e.ec71d538":{"attributeName":"tTextCommonx0x23","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-1cf4.9762a75ae":{"attributeName":"tImageBasex0x24","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-8eeb.fe2c0dd4":{"attributeName":"tImageBasex0x25","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-78fa.027f7a712":{"attributeName":"tImageBasex0x26","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-7c8f.01b4b0f16":{"attributeName":"tImageBasex0x27","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-04e3.83b5f0fe2":{"attributeName":"tImageBasex0x28","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-8421.944526704":{"attributeName":"tImageBasex0x29","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-3ed3.627b003b":{"attributeName":"tImageBasex0x30","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-a636.b5f1f2f42":{"attributeName":"tImageBasex0x31","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3df2.076b058bb":{"attributeName":"tTextx0x32","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-69fa.991666b61":{"attributeName":"tTextx0x33","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4f5b.536d0a55c":{"attributeName":"tRectx0x34","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-a64a.177b75f78":{"attributeName":"tRectx0x35","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4666.a37e0601":{"attributeName":"tRectx0x36","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-7485.779c77107":{"attributeName":"tRectx0x37","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4f51.9cad7f606":{"attributeName":"tRectx0x38","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-7be7.6b933db1e":{"attributeName":"tRectx0x39","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-588f.8cd850e3c":{"attributeName":"tRectx0x40","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-fb88.ccf3287e8":{"attributeName":"tRectx0x41","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8727.b45ee59d2":{"attributeName":"tTextx0x42","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-863c.9a78a207":{"attributeName":"tTextx0x43","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-9f49.510340e38":{"attributeName":"tTextx0x44","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-7f47.27e095b66":{"attributeName":"tTextx0x45","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3eec.22bfafdf9":{"attributeName":"tTextx0x46","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-9884.229278812":{"attributeName":"tRectx0x47","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-3d2c.232c145c2":{"attributeName":"tRectx0x48","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-0565.423ddb547":{"attributeName":"tRectx0x49","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5dd4.ca5f36b52":{"attributeName":"tRectx0x50","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1330.fe295074":{"attributeName":"tRectx0x51","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5cdb.27c5b3dfe":{"attributeName":"tRectx0x52","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-07d7.32a370ea2":{"attributeName":"tTextUnitx0x53","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-f80e.9678b34c":{"attributeName":"tTextUnitx0x54","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-5df4.a32c1b6f2":{"attributeName":"tTextUnitx0x55","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-87bf.eb56eaa92":{"attributeName":"tTextUnitx0x56","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-7d9e.c8f504034":{"attributeName":"tTextUnitx0x57","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-76fa.6dd858b8":{"attributeName":"tTextUnitx0x58","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-line-c3d0.41db9917a":{"attributeName":"tLinex0x59","cStyle":{"filters":[]}},"t-line-59cf.2400e2da6":{"attributeName":"tLinex0x60","cStyle":{"filters":[]}},"t-text-common-dc54.e15d408c":{"attributeName":"tTextCommonx0x61","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-0913.cbea6f35a":{"attributeName":"tTextCommonx0x62"},"t-text-common-3d72.7189ef504":{"attributeName":"tTextCommonx0x63"},"t-text-common-4b27.41378f2d":{"attributeName":"tTextCommonx0x64"},"t-text-e3ad.391156575":{"attributeName":"tTextx0x65","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-43e6.5c59336a6":{"attributeName":"tTextx0x66","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-c244.a21b1ccaa":{"attributeName":"tTextx0x67","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-ca8c.f28156286":{"attributeName":"tTextx0x68","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-24ce.d9ac0b659":{"attributeName":"tTextx0x69","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-077f.91dc71e46":{"attributeName":"tTextx0x70","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-2456.8cd16e232":{"attributeName":"tTextx0x71","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3008.70ae418d8":{"attributeName":"tTextx0x72","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-ab4d.e2dced67":{"attributeName":"tTextx0x73","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-b633.4ff7b5544":{"attributeName":"tTextUnitx0x74","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-0cec.02305542c":{"attributeName":"tTextUnitx0x75","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-ab81.940f67628":{"attributeName":"tTextUnitx0x76","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-ff84.f056582b1":{"attributeName":"tTextUnitx0x77","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-4698.c773749bc":{"attributeName":"tTextUnitx0x78","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-36e0.12f9f08a4":{"attributeName":"tTextUnitx0x79","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-1ca5.5f3859aeb":{"attributeName":"tTextUnitx0x80","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-c49b.76625026b":{"attributeName":"tTextUnitx0x81","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-2339.5008f06f6":{"attributeName":"tTextUnitx0x82","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-eff1.d0d17b74a":{"attributeName":"tTextUnitx0x83","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-aa88.a72e421b":{"attributeName":"tRectx0x84","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-2d22.252891d17":{"attributeName":"tRectx0x85","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-430a.b527cd8bc":{"attributeName":"tRectx0x86","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-86e9.6e4bda798":{"attributeName":"tTextx0x87","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-815b.e047e62fa":{"attributeName":"tTextx0x88","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-97a2.bc76b31fe":{"attributeName":"tTextx0x89","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f9b3.9fb90bde6":{"attributeName":"tRectx0x90","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-f45a.4ce0273f2":{"attributeName":"tTextCommonx0x91","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-b401.2a76e22e6":{"attributeName":"tTextCommonx0x92","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-52b2.d23c9894e":{"attributeName":"tTextCommonx0x93","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-512f.57f778e8c":{"attributeName":"tTextCommonx0x94","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-0c50.d30cce022":{"attributeName":"tTextCommonx0x95","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-4923.d8e535d6":{"attributeName":"tTextCommonx0x96","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-9d8c.00073bc1c":{"attributeName":"tTextCommonx0x97","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-3f17.bb27f75d4":{"attributeName":"tRectx0x98","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   index: 0,
   monitorTime: "2025-11",
   DATE_TYPE: "",
   isSelectedBg1: false,
   isSelectedBg2: false,
   isRed0: false,
   isGreen0: false,
   isWhite0: false,
   cityData: {"EXCELLENT_RATE":"--","EXCELLENT_RATE_TARGET":"--","EXCELLENT_YYMB":"--","PM25":"--","PM25_TARGET":"--","PM25_YYMB":"--","EXCELLENT_JQN":"--","PM25_JQN":"--","EXCELLENT_RATE_OK_STR":"","PM25_OK_STR":""},
   isRed1: false,
   isGreen1: false,
   isWhite1: false,
   isOK0: 0,
   isOK1: 0,
   airInfo: {"POINT_CODE":"350700","POINT_NAME":"南平市","POINT_TYPE":"12","REGION_CODE":"350700000000","REGION_NAME":"南平市","MONITORTIME":"2025-11-01","DATE_TYPE":"ACC_MONTH","YEAR":"2025","DAYS":"209","EXCELLENT_RATE":"--","POLLUTE_DAYS":"","HEAVYPOLLUTE_DAYS":"","O3":"--","PM25":"--","PM10":"--","SO2":"--","NO2":"--","CO":"--","O3_DAYSREMAINS":"","PM25_DAYSREMAINS":"--","PM10_DAYSREMAINS":"--","SO2_DAYSREMAINS":"","NO2_DAYSREMAINS":"","CO_DAYSREMAINS":"","GOODDAYS_REMAINS":"","MONITOR_LASTDAY":"","DAYS_REMAINS":"--","LAST_EXCELLENT_RATE":"","LAST_POLLUTE_DAYS":"","LAST_HEAVYPOLLUTE_DAYS":"","LAST_O3":"","LAST_PM25":"","LAST_PM10":"","LAST_SO2":"","LAST_NO2":"","LAST_CO":"","AQCI":"--","LAST_AQCI":"","AQCI_CHANGE_RATE":"--","EXCELLENT_CHANGE_RATE":"--","PM25_CHANGE_RATE":"--","EXCELLENT_RATE_TARGET":"--","POLLUTE_DAYS_TARGET":"","HEAVYPOLLUTE_DAYS_TARGET":"","O3_TARGET":"","PM25_TARGET":"--","SO2_TARGET":"","NO2_TARGET":"","CO_TARGET":"","PM10_TARGET":"--","PM10_OVERSTANDARD":"达标","EXCELLENT_RATE_STANDARD_STATUS":"达标","PM10_CHANGE_RATE":"","PM25_OVERSTANDARD":"不达标","PM10_OVER_TARGET":"--","PM25_OVER_TARGET":""},
   rankingData: {"preOne":"--","nextOne":"--","compositeIndexRanking":"--","excellentDayRatioRanking":"--","pm25Ranking":"--","pm10Ranking":"--","nextOneNum":"--"},
   yearOnYearData: {"AQCI_CHANGE_RATE":"up","EXCELLENT_CHANGE_RATE":"up","PM25_CHANGE_RATE":"up","PM10_CHANGE_RATE":"up"},
   betterThanTarget: {"AQCI":"up","EXCELLENT":"-","PM25":"down","PM10":"up"},
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
tImageBasex0x0: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"408px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"408px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""}}}, 
 },
},
tImageBasex0x1: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"409px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"409px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x2: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"174px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"174px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"293px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"293px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x4: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"293px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"293px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""}}}, 
 },
},
tImageBasex0x5: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"58px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"58px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x6: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"177px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"177px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""}}}, 
 },
},
tImageBasex0x7: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"59px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto"},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"59px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto"}}}, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"298px","top":"465px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"298px","top":"465px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"193px","top":"464px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"193px","top":"464px","position":"unset","animationName":""}}}, 
 },
},
tTextUnitx0x10: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"13px","top":"478px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"13px","top":"478px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-num-color-yellow)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"24",
unit:"μg/m³",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x11: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"13px","top":"478px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"13px","top":"478px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"--",
unit:"μg/m³",
showOverflowTooltip:true, 
 },
},
tComponentx0x12: {
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
tTextx0x13: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"16px","top":"459px","animationName":""},
            
            },
 default: { 
 
label:"现状",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"16px","top":"459px","animationName":""}}}, 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"76px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"317px","top":"464px","animationName":""},
            
            },
 default: { 
 
label:"差距",
editable:false,
cStyle:{"wrapper":{"default":{"width":"76px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"317px","top":"464px","animationName":""}}}, 
 },
},
tTextx0x15: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"219px","top":"464px","animationName":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"219px","top":"464px","animationName":""}}}, 
 },
},
tTextx0x16: {
defaultStyle: {
            default: {"width":"78px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"312px","top":"21px","animationName":""},
            
            },
 default: { 
 
label:"2025-11",
editable:false,
cStyle:{"wrapper":{"default":{"width":"78px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"312px","top":"21px","animationName":""}}}, 
 },
},
tTextUnitx0x17: {
defaultStyle: {
            default: {"width":"62px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"219px","top":"484px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"62px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"219px","top":"484px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-blue)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"μg/m³",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x18: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"320px","top":"484px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"320px","top":"484px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-yellow)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"μg/m³",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x19: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"320px","top":"484px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"320px","top":"484px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"μg/m³",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x20: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"320px","top":"484px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"320px","top":"484px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-green)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"μg/m³",
showOverflowTooltip:true, 
 },
},
tRectx0x21: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/b88167f4a005425ab7a2c1f63056c0ff.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"417px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/b88167f4a005425ab7a2c1f63056c0ff.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"417px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x22: {
defaultStyle: {
            default: {"width":"115px","height":"16px","color":"var(--t-text)","position":"unset","left":"49px","top":"423px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"PM₁₀年均浓度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"115px","height":"16px","color":"var(--t-text)","position":"unset","left":"49px","top":"423px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""}}}, 
 },
},
tTextCommonx0x23: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"105px","top":"474px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"同比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"105px","top":"474px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tImageBasex0x24: {
defaultStyle: {
            default: {"width":"10px","height":"10px","position":"unset","left":"137px","top":"476px","animationName":""},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/5066536b9d2d4e9486be74f253e90552.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","position":"unset","left":"137px","top":"476px","animationName":""}}}, 
 },
},
tImageBasex0x25: {
defaultStyle: {
            default: {"width":"10px","height":"10px","position":"unset","left":"138px","top":"361px","animationName":""},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/5066536b9d2d4e9486be74f253e90552.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","position":"unset","left":"138px","top":"361px","animationName":""}}}, 
 },
},
tImageBasex0x26: {
defaultStyle: {
            default: {"width":"10px","height":"10px","position":"unset","left":"135px","top":"245px","animationName":""},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/5066536b9d2d4e9486be74f253e90552.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","position":"unset","left":"135px","top":"245px","animationName":""}}}, 
 },
},
tImageBasex0x27: {
defaultStyle: {
            default: {"width":"10px","height":"10px","position":"unset","left":"116px","top":"126px","animationName":""},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/5066536b9d2d4e9486be74f253e90552.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","position":"unset","left":"116px","top":"126px","animationName":""}}}, 
 },
},
tImageBasex0x28: {
defaultStyle: {
            default: {"width":"10px","height":"10px","animationName":"","left":"137px","top":"476px","position":"unset"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/7b6dd19224df41d8a8ff6e5136c5a5a4.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","animationName":"","left":"137px","top":"476px","position":"unset"}}}, 
 },
},
tImageBasex0x29: {
defaultStyle: {
            default: {"width":"10px","height":"10px","animationName":"","left":"138px","top":"361px","position":"unset"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/7b6dd19224df41d8a8ff6e5136c5a5a4.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","animationName":"","left":"138px","top":"361px","position":"unset"}}}, 
 },
},
tImageBasex0x30: {
defaultStyle: {
            default: {"width":"10px","height":"10px","animationName":"","left":"135px","top":"245px","position":"unset"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/7b6dd19224df41d8a8ff6e5136c5a5a4.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","animationName":"","left":"135px","top":"245px","position":"unset"}}}, 
 },
},
tImageBasex0x31: {
defaultStyle: {
            default: {"width":"10px","height":"10px","animationName":"","left":"123px","top":"129px","position":"unset"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/7b6dd19224df41d8a8ff6e5136c5a5a4.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","animationName":"","left":"123px","top":"129px","position":"unset"}}}, 
 },
},
tTextx0x32: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"282px","top":"21px","animationName":""},
            
            },
 default: { 
 
label:"截至",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"282px","top":"21px","animationName":""}}}, 
 },
},
tTextx0x33: {
defaultStyle: {
            default: {"width":"113px","height":"20px","color":"#fff","fontSize":"20px","fontFamily":"方正综艺","position":"unset","left":"52px","top":"20px","lineHeight":"20px","letterSpacing":"3px"},
            
            },
 default: { 
 
label:"大气环境",
editable:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"20px","color":"#fff","fontSize":"20px","fontFamily":"方正综艺","position":"unset","left":"52px","top":"20px","lineHeight":"20px","letterSpacing":"3px"}}}, 
 },
},
tRectx0x34: {
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
tRectx0x35: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"176px","top":"188px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      ","fontSize":"12px","fontStyle":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"176px","top":"188px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      ","fontSize":"12px","fontStyle":"normal"}},"text":{"default":{"color":"rgba(252, 249, 249, 1)","background":"unset","backgroundClip":"unset","fontSize":"12px"}}}, 
 },
},
tRectx0x36: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"176px","top":"304px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      ","fontSize":"12px","fontStyle":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"176px","top":"304px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      ","fontSize":"12px","fontStyle":"normal"}},"text":{"default":{"color":"rgba(252, 249, 249, 1)","background":"unset","backgroundClip":"unset","fontSize":"12px"}}}, 
 },
},
tRectx0x37: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"176px","top":"421px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      ","fontSize":"12px","fontStyle":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"176px","top":"421px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      ","fontSize":"12px","fontStyle":"normal"}},"text":{"default":{"color":"rgba(252, 249, 249, 1)","background":"unset","backgroundClip":"unset","fontSize":"12px"}}}, 
 },
},
tRectx0x38: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"202px","top":"68px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"202px","top":"68px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tRectx0x39: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"176px","top":"188px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"176px","top":"188px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tRectx0x40: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"176px","top":"304px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"176px","top":"304px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tRectx0x41: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"176px","top":"421px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"176px","top":"421px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tTextx0x42: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"72px","left":"213px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"已达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"72px","left":"213px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
tTextx0x43: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"192px","left":"188px","position":"unset","animationName":"","fontFamily":"钉钉进步体","textAlign":"center"},
            
            },
 default: { 
 
label:"达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"192px","left":"188px","position":"unset","animationName":"","fontFamily":"钉钉进步体","textAlign":"center"}}}, 
 },
},
tTextx0x44: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"307px","left":"188px","position":"unset","animationName":"","fontFamily":"钉钉进步体","textAlign":"center"},
            
            },
 default: { 
 
label:"不达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"307px","left":"188px","position":"unset","animationName":"","fontFamily":"钉钉进步体","textAlign":"center"}}}, 
 },
},
tTextx0x45: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"425px","left":"188px","position":"unset","animationName":"","fontFamily":"钉钉进步体","textAlign":"center"},
            
            },
 default: { 
 
label:"达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"425px","left":"188px","position":"unset","animationName":"","fontFamily":"钉钉进步体","textAlign":"center"}}}, 
 },
},
tTextx0x46: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"71px","left":"213px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"未达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"71px","left":"213px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
tRectx0x47: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"276px","top":"113px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"276px","top":"113px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x48: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"297px","top":"231px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"297px","top":"231px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x49: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"296px","top":"351px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"296px","top":"351px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x50: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"175px","top":"113px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"175px","top":"113px","position":"unset"}}}, 
 },
},
tRectx0x51: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"194px","top":"230px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"194px","top":"230px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x52: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"193px","top":"350px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"193px","top":"350px","position":"unset","animationName":""}}}, 
 },
},
tTextUnitx0x53: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"14px","top":"244px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"14px","top":"244px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x54: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"14px","top":"244px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"14px","top":"244px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-num-color-yellow)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"100",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x55: {
defaultStyle: {
            default: {"width":"86px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"15px","top":"127px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"15px","top":"127px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"--",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x56: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"15px","top":"127px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"15px","top":"127px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-num-color-yellow)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"--",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x57: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"14px","top":"363px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"14px","top":"363px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"--",
unit:"μg/m³",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x58: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"14px","top":"363px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"14px","top":"363px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-num-color-yellow)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"13",
unit:"μg/m³",
showOverflowTooltip:true, 
 },
},
tLinex0x59: {
defaultStyle: {
            default: {"width":"368px","height":"1px","position":"unset","left":"18px","top":"285px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"368px","height":"1px","position":"unset","left":"18px","top":"285px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tLinex0x60: {
defaultStyle: {
            default: {"width":"368px","height":"1px","position":"unset","left":"17px","top":"405px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"368px","height":"1px","position":"unset","left":"17px","top":"405px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tTextCommonx0x61: {
defaultStyle: {
            default: {"width":"106px","height":"14px","color":"#FFCC00","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"291px","top":"70px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"106px","height":"14px","color":"#FFCC00","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"291px","top":"70px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTextx0x65: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"16px","top":"108px"},
            
            },
 default: { 
 
label:"现状",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"16px","top":"108px"}}}, 
 },
},
tTextx0x66: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"16px","top":"227px","animationName":""},
            
            },
 default: { 
 
label:"现状",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"16px","top":"227px","animationName":""}}}, 
 },
},
tTextx0x67: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"16px","top":"343px","animationName":""},
            
            },
 default: { 
 
label:"现状",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"16px","top":"343px","animationName":""}}}, 
 },
},
tTextx0x68: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"314px","top":"114px","animationName":""},
            
            },
 default: { 
 
label:"后一名",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"314px","top":"114px","animationName":""}}}, 
 },
},
tTextx0x69: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"317px","top":"232px","animationName":""},
            
            },
 default: { 
 
label:"超标天数",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"317px","top":"232px","animationName":""}}}, 
 },
},
tTextx0x70: {
defaultStyle: {
            default: {"width":"76px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"317px","top":"347px","animationName":""},
            
            },
 default: { 
 
label:"差距",
editable:false,
cStyle:{"wrapper":{"default":{"width":"76px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"317px","top":"347px","animationName":""}}}, 
 },
},
tTextx0x71: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"206px","top":"114px","animationName":""},
            
            },
 default: { 
 
label:"前一名",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"206px","top":"114px","animationName":""}}}, 
 },
},
tTextx0x72: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"219px","top":"231px","animationName":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"219px","top":"231px","animationName":""}}}, 
 },
},
tTextx0x73: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"219px","top":"347px","animationName":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"219px","top":"347px","animationName":""}}}, 
 },
},
tTextUnitx0x74: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"192px","top":"133px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"192px","top":"133px"}},"text":{"default":{"fontSize":"16px","lineHeight":"18px","color":"var(--t-num-color-yellow)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":"","fontWeight":"700"}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x75: {
defaultStyle: {
            default: {"width":"48px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"225px","top":"253px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"48px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"225px","top":"253px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-blue)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x76: {
defaultStyle: {
            default: {"width":"62px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"219px","top":"367px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"62px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"219px","top":"367px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-blue)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"μg/m³",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x77: {
defaultStyle: {
            default: {"width":"26px","height":"22px","position":"unset","left":"348px","top":"131px","fontSize":"14px","lineHeight":"14px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"26px","height":"22px","position":"unset","left":"348px","top":"131px","fontSize":"14px","lineHeight":"14px","animationName":"","textAlign":"center"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-wdb-color)","fontFamily":"DIN-black","textAlign":"center"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","textAlign":"center"}}},
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x78: {
defaultStyle: {
            default: {"width":"26px","height":"22px","position":"unset","left":"348px","top":"131px","fontSize":"14px","lineHeight":"14px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"26px","height":"22px","position":"unset","left":"348px","top":"131px","fontSize":"14px","lineHeight":"14px","animationName":""}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"#fff","fontFamily":"DIN-black"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)"}}},
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x79: {
defaultStyle: {
            default: {"width":"56px","height":"22px","position":"unset","left":"314px","top":"251px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"56px","height":"22px","position":"unset","left":"314px","top":"251px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"center"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-yellow)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-white)","background":"unset","backgroundClip":"unset","width":"auto","height":"","fontFamily":"DIN-black"}}},
content:"",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x80: {
defaultStyle: {
            default: {"width":"77px","height":"22px","position":"unset","left":"300px","top":"131px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"77px","height":"22px","position":"unset","left":"300px","top":"131px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"center"}},"text":{"default":{"fontSize":"16px","lineHeight":"16px","color":"var(--t-white)","fontFamily":"DIN-black","width":"auto","height":"","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"fontSize":"16px","lineHeight":"16px","color":"var(--t-color-text-green)","width":"auto","height":""}}},
content:"--",
unit:"--",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x81: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"",
unit:"μg/m³",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x82: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-yellow)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"",
unit:"μg/m³",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x83: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"324px","top":"367px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"324px","top":"367px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-green)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"",
unit:"μg/m³",
showOverflowTooltip:true, 
 },
},
tRectx0x84: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/b88167f4a005425ab7a2c1f63056c0ff.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"64px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/b88167f4a005425ab7a2c1f63056c0ff.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"64px","cursor":"pointer"}}}, 
 },
},
tRectx0x85: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/4866c23870e64cac9ca997744cee6b1d.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"17px","top":"183px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/4866c23870e64cac9ca997744cee6b1d.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"17px","top":"183px","cursor":"pointer","animationName":""}}}, 
 },
},
tRectx0x86: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/b88167f4a005425ab7a2c1f63056c0ff.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"299px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/b88167f4a005425ab7a2c1f63056c0ff.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"299px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x87: {
defaultStyle: {
            default: {"width":"178px","height":"16px","color":"var(--t-text)","position":"unset","left":"49px","top":"72px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer"},
            
            },
 default: { 
 
label:"空气环境质量综合指数",
editable:false,
cStyle:{"wrapper":{"default":{"width":"178px","height":"16px","color":"var(--t-text)","position":"unset","left":"49px","top":"72px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer"}}}, 
 },
},
tTextx0x88: {
defaultStyle: {
            default: {"width":"111px","height":"16px","color":"var(--t-text)","position":"unset","left":"50px","top":"190px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"优良天数比率",
editable:false,
cStyle:{"wrapper":{"default":{"width":"111px","height":"16px","color":"var(--t-text)","position":"unset","left":"50px","top":"190px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x89: {
defaultStyle: {
            default: {"width":"123px","height":"16px","color":"var(--t-text)","position":"unset","left":"49px","top":"305px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"PM₂.₅年均浓度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"123px","height":"16px","color":"var(--t-text)","position":"unset","left":"49px","top":"305px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""}}}, 
 },
},
tRectx0x90: {
defaultStyle: {
            default: {"width":"25px","height":"34px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","position":"unset","left":"142px","top":"13px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"25px","height":"34px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","position":"unset","left":"142px","top":"13px","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTextCommonx0x91: {
defaultStyle: {
            default: {"width":"39px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"146px","top":"474px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"39px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"146px","top":"474px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTextCommonx0x92: {
defaultStyle: {
            default: {"width":"39px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"138px","top":"358px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"39px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"138px","top":"358px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTextCommonx0x93: {
defaultStyle: {
            default: {"width":"39px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"148px","top":"243px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"39px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"148px","top":"243px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTextCommonx0x94: {
defaultStyle: {
            default: {"width":"39px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"127px","top":"124px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"39px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"127px","top":"124px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTextCommonx0x95: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"86px","top":"124px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"同比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"86px","top":"124px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTextCommonx0x96: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"101px","top":"243px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"同比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"101px","top":"243px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTextCommonx0x97: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"105px","top":"358px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"同比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"105px","top":"358px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tRectx0x98: {
defaultStyle: {
            default: {"width":"400px","height":"48px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"0px","left":"0px","position":"unset","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"48px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"0px","left":"0px","position":"unset","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
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
global.dashboardGlobalVariables.activeTopic = 'air';

rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeIndicator', // 消息名称
  data: {
    indicator: index,
    time: state.monitorTime,
  },
});

rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeMonitorTime', // 消息名称
  data: {
    time: state.monitorTime, // 时间
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
const initData = () => {
const init = async () =>{
  await apiRegistry.getTime.request();
  apiRegistry.getAirData.request();
  apiRegistry.getAirRankingData.request();
  apiRegistry.getData.request();
}
init();
};
const watchCode = () => {

watch(
  // 1. 监听的数据源（函数返回要监听的值）
  () => global.REGION_CODE,
  // 2. 监听触发的回调函数
  () => {
    initData();
  },
  // 3. 配置项：深度监听 + 立即执行
  {
    deep: true, // 开启深度监听（针对对象/数组类型的 activeTopic）
    immediate: true // 首次加载时立即执行回调
  }
);

};
const onclick1763536869861_0_0 = () => {
// 执行自定义方法
handleSelectCard(7);
};
const onclick1739255126445 = () => {
// 执行自定义方法
handleSelectCard(4);
};
const onclick1763536806853_0_0 = () => {
// 执行自定义方法
handleSelectCard(5);
};
const onclick1763539876275_0_0 = () => {
// 执行自定义方法
handleSelectCard(6);
};
const onclick1739254824900 = () => {
// 执行自定义方法
handleSelectCard(4);
};
const onclick1763605424065 = () => {
// 执行自定义方法
dashboardGlobalFunctions.linkTo("air");
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getAirData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"POINT_CODE":"350700","POINT_TYPE":"12","DATE_TYPE":"ACC_MONTH","MONITORTIME":"state.monitorTime","interfaceId":"e2adede76a4c4d8f018ce8849bc95fb6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"POINT_CODE":"350700","POINT_TYPE":"12","DATE_TYPE":"ACC_MONTH","MONITORTIME":state.monitorTime,"interfaceId":"e2adede76a4c4d8f018ce8849bc95fb6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"POINT_CODE":"350700","POINT_TYPE":"12","DATE_TYPE":"ACC_MONTH","MONITORTIME":state.monitorTime,"interfaceId":"e2adede76a4c4d8f018ce8849bc95fb6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getAirData'] = res.data;
                
     if (res?.data?.data?.length) {
  state.airInfo = res?.data?.data[0];

  const { PM25_CHANGE_RATE, PM10_CHANGE_RATE, AQCI_CHANGE_RATE, EXCELLENT_CHANGE_RATE, EXCELLENT_RATE, EXCELLENT_TARGET, PM10_TARGET, PM10, PM25_TARGET, PM25, AQCI, AQCI_TARGET, POLLUTE_DAYS, POLLUTE_DAYS_TARGET } = res?.data?.data[0];

  if (PM25_CHANGE_RATE !== '0') {
    state.airInfo.PM25_CHANGE_RATE = `${PM25_CHANGE_RATE}%`;
  } else {
    state.airInfo.PM25_CHANGE_RATE = '持平';
  }

  if (PM10_CHANGE_RATE !== '0') {
    state.airInfo.PM10_CHANGE_RATE = `${PM10_CHANGE_RATE}%`;
  } else {
    state.airInfo.PM10_CHANGE_RATE = '持平';
  }

  if (AQCI_CHANGE_RATE !== '0') {
    state.airInfo.AQCI_CHANGE_RATE = `${AQCI_CHANGE_RATE}%`;
  } else {
    state.airInfo.AQCI_CHANGE_RATE = '持平';
  }

  if (EXCELLENT_CHANGE_RATE !== '0') {
    state.airInfo.EXCELLENT_CHANGE_RATE = `${EXCELLENT_CHANGE_RATE}%`;
  } else {
    state.airInfo.EXCELLENT_CHANGE_RATE = '持平';
  }

  state.airInfo.POLLUTE_DAYS_TARGET = '/' + POLLUTE_DAYS_TARGET;
  state.airInfo.POLLUTE_DAYS = POLLUTE_DAYS || '-';

  state.airInfo.PM25_OVER_TARGET = state.airInfo.PM25_OVER_TARGET.replace('-', '');
  state.airInfo.PM10_OVER_TARGET = state.airInfo.PM10_OVER_TARGET.replace('-', '');


  state.yearOnYearData.AQCI_CHANGE_RATE = (Number(AQCI_CHANGE_RATE) > 0 && 'up') || (Number(AQCI_CHANGE_RATE) < 0 && 'down') || '';
  state.yearOnYearData.EXCELLENT_CHANGE_RATE = (Number(EXCELLENT_CHANGE_RATE) > 0 && 'up') || (Number(EXCELLENT_CHANGE_RATE) < 0 && 'down') || '';
  state.yearOnYearData.PM25_CHANGE_RATE = (Number(PM25_CHANGE_RATE) > 0 && 'up') || (Number(PM25_CHANGE_RATE) < 0 && 'down') || '';
  state.yearOnYearData.PM10_CHANGE_RATE = (Number(PM10_CHANGE_RATE) > 0 && 'up') || (Number(PM10_CHANGE_RATE) < 0 && 'down') || '';

  state.betterThanTarget.PM25 = (Number(PM25) > Number(PM25_TARGET) && 'up') || (Number(PM25) < Number(PM25_TARGET) && 'down') || '-';
  state.betterThanTarget.PM10 = (Number(PM10) > Number(PM10_TARGET) && 'up') || (Number(PM10) < Number(PM10_TARGET) && 'down') || '-';
  state.betterThanTarget.EXCELLENT_RATE = (Number(EXCELLENT_RATE) < Number(EXCELLENT_TARGET) && 'up') || (Number(EXCELLENT_RATE) > Number(EXCELLENT_TARGET) && 'down') || '-';
  state.betterThanTarget.AQCI = (Number(AQCI) > Number(AQCI_TARGET) && 'up') || (Number(AQCI) < Number(AQCI_TARGET) && 'down') || '-';

} else {
  state.airInfo = [];
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
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"POINT_CODE":"350700","REGION_CODE":"global.REGION_CODE","interfaceId":"0c28d96c197611da668a53d639a79cb6","POINT_TYPE":"12"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"POINT_CODE":"350700","REGION_CODE":global.REGION_CODE,"interfaceId":"0c28d96c197611da668a53d639a79cb6","POINT_TYPE":"12"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"POINT_CODE":"350700","REGION_CODE":global.REGION_CODE,"interfaceId":"0c28d96c197611da668a53d639a79cb6","POINT_TYPE":"12"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTime'] = res.data;
                
     
if (res?.data?.data?.length) {
  // 当前日
  const currentDate = new Date().getDate() - 1;

  if (res?.data?.data[0].MONITORTIME) {
    state.monitorTime = res?.data?.data[0].MONITORTIME + `-${currentDate}`;
  } else {
    state.monitorTime = '';
  }

} else {
  state.monitorTime = '';
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
        global.cityTime = '--';
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"ca412d118d3cfe0b5babfc5ba168f75e","POINT_CODE":"global.REGION_CODE","REGION_CODE":"","POINT_TYPE":"","DATE_TYPE":"ACC_MONTH","AREA_CODE":"","MONITOR_TIME":"global.cityTime"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"ca412d118d3cfe0b5babfc5ba168f75e","POINT_CODE":global.REGION_CODE,"REGION_CODE":"","POINT_TYPE":"","DATE_TYPE":"ACC_MONTH","AREA_CODE":"","MONITOR_TIME":global.cityTime},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"ca412d118d3cfe0b5babfc5ba168f75e","POINT_CODE":global.REGION_CODE,"REGION_CODE":"","POINT_TYPE":"","DATE_TYPE":"ACC_MONTH","AREA_CODE":"","MONITOR_TIME":global.cityTime});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     if (res?.data?.data && res?.data?.data.length > 0) {
  const data = res.data.data[0];
  for (let key in state.cityData) {
    if (data.hasOwnProperty(key)) {
      state.cityData[key] = data[key] || '--';
    }
  }
  console.log(Number(data.EXCELLENT_JQN), 8888)
const value = Number(data.EXCELLENT_JQN);
state.isOk0 = value > 0 ? 1 : (value < 0 ? -1 : 0);

  if (Number(data.PM25_JQN) > 0) {
    state.isOk1 = 1;
  } else if (Number(data.PM25_JQN) < 0) {
    state.isOk1 = -1;
  } else {
    state.isOk1 = 0;
  }

  setColor(data.EXCELLENT_YYMB, 0, state);
  setColor(data.PM25_YYMB, 1, state);
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
 getAirRankingData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"index":"state.index","POINT_TYPE":"12","PARENT_REGION_CODE":"350000000000","DATE_TYPE":"ACC_MONTH","MONITORTIME":"state.monitorTime","interfaceId":"de8e2fefb76dffb9e5cea18e94e449a0"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"index":state.index,"POINT_TYPE":"12","PARENT_REGION_CODE":"350000000000","DATE_TYPE":"ACC_MONTH","MONITORTIME":state.monitorTime,"interfaceId":"de8e2fefb76dffb9e5cea18e94e449a0"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"index":state.index,"POINT_TYPE":"12","PARENT_REGION_CODE":"350000000000","DATE_TYPE":"ACC_MONTH","MONITORTIME":state.monitorTime,"interfaceId":"de8e2fefb76dffb9e5cea18e94e449a0"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getAirRankingData'] = res.data;
                
     state.index++;
if (res?.data?.data?.length) {
  state.rankingData = {};
  const listData = res?.data?.data;
  listData.forEach((item, index) => {
    const { PM25_RANK, PM10_RANK, AQCI_RANK, EXCELLENT_RATE_RANK, TOTAL_COUNT } = item;
    const prefixText = "全省排名："
    if (item.REGION_CODE === global.REGION_CODE) {;
      state.rankingData = {
        // 综合指数排名
        compositeIndexRanking: `${prefixText}${AQCI_RANK}/${TOTAL_COUNT}`, 
        // 优良天数比率排名
        excellentDayRatioRanking:`${prefixText}${EXCELLENT_RATE_RANK}/${TOTAL_COUNT}`, 
        // PM25排名
        pm25Ranking: `${prefixText}${PM25_RANK}/${TOTAL_COUNT}`, 
        // PM10排名
        pm10Ranking: `${prefixText}${PM10_RANK}/${TOTAL_COUNT}`,
        // 前一名
        preOne: index ? listData[index - 1].REGION_NAME : '--',
        // 后一名
        nextOne: listData[index + 1] ? listData[index + 1].REGION_NAME : '--',     
        nextOneNum: listData[index + 1] ? `/${listData[index + 1].AQCI}` : '--',        
      }
    }
  })
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.index++;
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [global.cityTime], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-leftAir', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
watchCode();
onMounted(() => {
setPageScale('t-l-c-leftAir', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tImageBasex0x0ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x0.default, componentState.tImageBasex0x0?.[state.screenSize]));

 const tImageBasex0x1ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x1.default, componentState.tImageBasex0x1?.[state.screenSize]));

 const tImageBasex0x2ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x2.default, componentState.tImageBasex0x2?.[state.screenSize]));

 const tImageBasex0x3ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x3.default, componentState.tImageBasex0x3?.[state.screenSize]));

 const tImageBasex0x4ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x4.default, componentState.tImageBasex0x4?.[state.screenSize]));

 const tImageBasex0x5ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x5.default, componentState.tImageBasex0x5?.[state.screenSize]));

 const tImageBasex0x6ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x6.default, componentState.tImageBasex0x6?.[state.screenSize]));

 const tImageBasex0x7ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x7.default, componentState.tImageBasex0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tTextUnitx0x10ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x10.default, componentState.tTextUnitx0x10?.[state.screenSize]));

 const tTextUnitx0x11ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x11.default, componentState.tTextUnitx0x11?.[state.screenSize]));

 const tComponentx0x12ComputedData = computed(() => _.merge({}, componentState.tComponentx0x12.default, componentState.tComponentx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tTextx0x15ComputedData = computed(() => _.merge({}, componentState.tTextx0x15.default, componentState.tTextx0x15?.[state.screenSize]));

 const tTextx0x16ComputedData = computed(() => _.merge({}, componentState.tTextx0x16.default, componentState.tTextx0x16?.[state.screenSize]));

 const tTextUnitx0x17ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x17.default, componentState.tTextUnitx0x17?.[state.screenSize]));

 const tTextUnitx0x18ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x18.default, componentState.tTextUnitx0x18?.[state.screenSize]));

 const tTextUnitx0x19ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x19.default, componentState.tTextUnitx0x19?.[state.screenSize]));

 const tTextUnitx0x20ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x20.default, componentState.tTextUnitx0x20?.[state.screenSize]));

 const tRectx0x21ComputedData = computed(() => _.merge({}, componentState.tRectx0x21.default, componentState.tRectx0x21?.[state.screenSize]));

 const tTextx0x22ComputedData = computed(() => _.merge({}, componentState.tTextx0x22.default, componentState.tTextx0x22?.[state.screenSize]));

 const tTextCommonx0x23ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x23.default, componentState.tTextCommonx0x23?.[state.screenSize]));

 const tImageBasex0x24ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x24.default, componentState.tImageBasex0x24?.[state.screenSize]));

 const tImageBasex0x25ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x25.default, componentState.tImageBasex0x25?.[state.screenSize]));

 const tImageBasex0x26ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x26.default, componentState.tImageBasex0x26?.[state.screenSize]));

 const tImageBasex0x27ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x27.default, componentState.tImageBasex0x27?.[state.screenSize]));

 const tImageBasex0x28ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x28.default, componentState.tImageBasex0x28?.[state.screenSize]));

 const tImageBasex0x29ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x29.default, componentState.tImageBasex0x29?.[state.screenSize]));

 const tImageBasex0x30ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x30.default, componentState.tImageBasex0x30?.[state.screenSize]));

 const tImageBasex0x31ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x31.default, componentState.tImageBasex0x31?.[state.screenSize]));

 const tTextx0x32ComputedData = computed(() => _.merge({}, componentState.tTextx0x32.default, componentState.tTextx0x32?.[state.screenSize]));

 const tTextx0x33ComputedData = computed(() => _.merge({}, componentState.tTextx0x33.default, componentState.tTextx0x33?.[state.screenSize]));

 const tRectx0x34ComputedData = computed(() => _.merge({}, componentState.tRectx0x34.default, componentState.tRectx0x34?.[state.screenSize]));

 const tRectx0x35ComputedData = computed(() => _.merge({}, componentState.tRectx0x35.default, componentState.tRectx0x35?.[state.screenSize]));

 const tRectx0x36ComputedData = computed(() => _.merge({}, componentState.tRectx0x36.default, componentState.tRectx0x36?.[state.screenSize]));

 const tRectx0x37ComputedData = computed(() => _.merge({}, componentState.tRectx0x37.default, componentState.tRectx0x37?.[state.screenSize]));

 const tRectx0x38ComputedData = computed(() => _.merge({}, componentState.tRectx0x38.default, componentState.tRectx0x38?.[state.screenSize]));

 const tRectx0x39ComputedData = computed(() => _.merge({}, componentState.tRectx0x39.default, componentState.tRectx0x39?.[state.screenSize]));

 const tRectx0x40ComputedData = computed(() => _.merge({}, componentState.tRectx0x40.default, componentState.tRectx0x40?.[state.screenSize]));

 const tRectx0x41ComputedData = computed(() => _.merge({}, componentState.tRectx0x41.default, componentState.tRectx0x41?.[state.screenSize]));

 const tTextx0x42ComputedData = computed(() => _.merge({}, componentState.tTextx0x42.default, componentState.tTextx0x42?.[state.screenSize]));

 const tTextx0x43ComputedData = computed(() => _.merge({}, componentState.tTextx0x43.default, componentState.tTextx0x43?.[state.screenSize]));

 const tTextx0x44ComputedData = computed(() => _.merge({}, componentState.tTextx0x44.default, componentState.tTextx0x44?.[state.screenSize]));

 const tTextx0x45ComputedData = computed(() => _.merge({}, componentState.tTextx0x45.default, componentState.tTextx0x45?.[state.screenSize]));

 const tTextx0x46ComputedData = computed(() => _.merge({}, componentState.tTextx0x46.default, componentState.tTextx0x46?.[state.screenSize]));

 const tRectx0x47ComputedData = computed(() => _.merge({}, componentState.tRectx0x47.default, componentState.tRectx0x47?.[state.screenSize]));

 const tRectx0x48ComputedData = computed(() => _.merge({}, componentState.tRectx0x48.default, componentState.tRectx0x48?.[state.screenSize]));

 const tRectx0x49ComputedData = computed(() => _.merge({}, componentState.tRectx0x49.default, componentState.tRectx0x49?.[state.screenSize]));

 const tRectx0x50ComputedData = computed(() => _.merge({}, componentState.tRectx0x50.default, componentState.tRectx0x50?.[state.screenSize]));

 const tRectx0x51ComputedData = computed(() => _.merge({}, componentState.tRectx0x51.default, componentState.tRectx0x51?.[state.screenSize]));

 const tRectx0x52ComputedData = computed(() => _.merge({}, componentState.tRectx0x52.default, componentState.tRectx0x52?.[state.screenSize]));

 const tTextUnitx0x53ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x53.default, componentState.tTextUnitx0x53?.[state.screenSize]));

 const tTextUnitx0x54ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x54.default, componentState.tTextUnitx0x54?.[state.screenSize]));

 const tTextUnitx0x55ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x55.default, componentState.tTextUnitx0x55?.[state.screenSize]));

 const tTextUnitx0x56ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x56.default, componentState.tTextUnitx0x56?.[state.screenSize]));

 const tTextUnitx0x57ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x57.default, componentState.tTextUnitx0x57?.[state.screenSize]));

 const tTextUnitx0x58ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x58.default, componentState.tTextUnitx0x58?.[state.screenSize]));

 const tLinex0x59ComputedData = computed(() => _.merge({}, componentState.tLinex0x59.default, componentState.tLinex0x59?.[state.screenSize]));

 const tLinex0x60ComputedData = computed(() => _.merge({}, componentState.tLinex0x60.default, componentState.tLinex0x60?.[state.screenSize]));

 const tTextCommonx0x61ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x61.default, componentState.tTextCommonx0x61?.[state.screenSize]));

 const tTextx0x65ComputedData = computed(() => _.merge({}, componentState.tTextx0x65.default, componentState.tTextx0x65?.[state.screenSize]));

 const tTextx0x66ComputedData = computed(() => _.merge({}, componentState.tTextx0x66.default, componentState.tTextx0x66?.[state.screenSize]));

 const tTextx0x67ComputedData = computed(() => _.merge({}, componentState.tTextx0x67.default, componentState.tTextx0x67?.[state.screenSize]));

 const tTextx0x68ComputedData = computed(() => _.merge({}, componentState.tTextx0x68.default, componentState.tTextx0x68?.[state.screenSize]));

 const tTextx0x69ComputedData = computed(() => _.merge({}, componentState.tTextx0x69.default, componentState.tTextx0x69?.[state.screenSize]));

 const tTextx0x70ComputedData = computed(() => _.merge({}, componentState.tTextx0x70.default, componentState.tTextx0x70?.[state.screenSize]));

 const tTextx0x71ComputedData = computed(() => _.merge({}, componentState.tTextx0x71.default, componentState.tTextx0x71?.[state.screenSize]));

 const tTextx0x72ComputedData = computed(() => _.merge({}, componentState.tTextx0x72.default, componentState.tTextx0x72?.[state.screenSize]));

 const tTextx0x73ComputedData = computed(() => _.merge({}, componentState.tTextx0x73.default, componentState.tTextx0x73?.[state.screenSize]));

 const tTextUnitx0x74ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x74.default, componentState.tTextUnitx0x74?.[state.screenSize]));

 const tTextUnitx0x75ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x75.default, componentState.tTextUnitx0x75?.[state.screenSize]));

 const tTextUnitx0x76ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x76.default, componentState.tTextUnitx0x76?.[state.screenSize]));

 const tTextUnitx0x77ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x77.default, componentState.tTextUnitx0x77?.[state.screenSize]));

 const tTextUnitx0x78ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x78.default, componentState.tTextUnitx0x78?.[state.screenSize]));

 const tTextUnitx0x79ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x79.default, componentState.tTextUnitx0x79?.[state.screenSize]));

 const tTextUnitx0x80ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x80.default, componentState.tTextUnitx0x80?.[state.screenSize]));

 const tTextUnitx0x81ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x81.default, componentState.tTextUnitx0x81?.[state.screenSize]));

 const tTextUnitx0x82ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x82.default, componentState.tTextUnitx0x82?.[state.screenSize]));

 const tTextUnitx0x83ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x83.default, componentState.tTextUnitx0x83?.[state.screenSize]));

 const tRectx0x84ComputedData = computed(() => _.merge({}, componentState.tRectx0x84.default, componentState.tRectx0x84?.[state.screenSize]));

 const tRectx0x85ComputedData = computed(() => _.merge({}, componentState.tRectx0x85.default, componentState.tRectx0x85?.[state.screenSize]));

 const tRectx0x86ComputedData = computed(() => _.merge({}, componentState.tRectx0x86.default, componentState.tRectx0x86?.[state.screenSize]));

 const tTextx0x87ComputedData = computed(() => _.merge({}, componentState.tTextx0x87.default, componentState.tTextx0x87?.[state.screenSize]));

 const tTextx0x88ComputedData = computed(() => _.merge({}, componentState.tTextx0x88.default, componentState.tTextx0x88?.[state.screenSize]));

 const tTextx0x89ComputedData = computed(() => _.merge({}, componentState.tTextx0x89.default, componentState.tTextx0x89?.[state.screenSize]));

 const tRectx0x90ComputedData = computed(() => _.merge({}, componentState.tRectx0x90.default, componentState.tRectx0x90?.[state.screenSize]));

 const tTextCommonx0x91ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x91.default, componentState.tTextCommonx0x91?.[state.screenSize]));

 const tTextCommonx0x92ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x92.default, componentState.tTextCommonx0x92?.[state.screenSize]));

 const tTextCommonx0x93ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x93.default, componentState.tTextCommonx0x93?.[state.screenSize]));

 const tTextCommonx0x94ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x94.default, componentState.tTextCommonx0x94?.[state.screenSize]));

 const tTextCommonx0x95ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x95.default, componentState.tTextCommonx0x95?.[state.screenSize]));

 const tTextCommonx0x96ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x96.default, componentState.tTextCommonx0x96?.[state.screenSize]));

 const tTextCommonx0x97ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x97.default, componentState.tTextCommonx0x97?.[state.screenSize]));

 const tRectx0x98ComputedData = computed(() => _.merge({}, componentState.tRectx0x98.default, componentState.tRectx0x98?.[state.screenSize]));

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
tImageBasex0x0ComputedData,
tImageBasex0x1ComputedData,
tImageBasex0x2ComputedData,
tImageBasex0x3ComputedData,
tImageBasex0x4ComputedData,
tImageBasex0x5ComputedData,
tImageBasex0x6ComputedData,
tImageBasex0x7ComputedData,
tRectx0x8ComputedData,
tRectx0x9ComputedData,
tTextUnitx0x10ComputedData,
tTextUnitx0x11ComputedData,
tComponentx0x12ComputedData,
tTextx0x13ComputedData,
tTextx0x14ComputedData,
tTextx0x15ComputedData,
tTextx0x16ComputedData,
tTextUnitx0x17ComputedData,
tTextUnitx0x18ComputedData,
tTextUnitx0x19ComputedData,
tTextUnitx0x20ComputedData,
tRectx0x21ComputedData,
tTextx0x22ComputedData,
tTextCommonx0x23ComputedData,
tImageBasex0x24ComputedData,
tImageBasex0x25ComputedData,
tImageBasex0x26ComputedData,
tImageBasex0x27ComputedData,
tImageBasex0x28ComputedData,
tImageBasex0x29ComputedData,
tImageBasex0x30ComputedData,
tImageBasex0x31ComputedData,
tTextx0x32ComputedData,
tTextx0x33ComputedData,
tRectx0x34ComputedData,
tRectx0x35ComputedData,
tRectx0x36ComputedData,
tRectx0x37ComputedData,
tRectx0x38ComputedData,
tRectx0x39ComputedData,
tRectx0x40ComputedData,
tRectx0x41ComputedData,
tTextx0x42ComputedData,
tTextx0x43ComputedData,
tTextx0x44ComputedData,
tTextx0x45ComputedData,
tTextx0x46ComputedData,
tRectx0x47ComputedData,
tRectx0x48ComputedData,
tRectx0x49ComputedData,
tRectx0x50ComputedData,
tRectx0x51ComputedData,
tRectx0x52ComputedData,
tTextUnitx0x53ComputedData,
tTextUnitx0x54ComputedData,
tTextUnitx0x55ComputedData,
tTextUnitx0x56ComputedData,
tTextUnitx0x57ComputedData,
tTextUnitx0x58ComputedData,
tLinex0x59ComputedData,
tLinex0x60ComputedData,
tTextCommonx0x61ComputedData,
tTextx0x65ComputedData,
tTextx0x66ComputedData,
tTextx0x67ComputedData,
tTextx0x68ComputedData,
tTextx0x69ComputedData,
tTextx0x70ComputedData,
tTextx0x71ComputedData,
tTextx0x72ComputedData,
tTextx0x73ComputedData,
tTextUnitx0x74ComputedData,
tTextUnitx0x75ComputedData,
tTextUnitx0x76ComputedData,
tTextUnitx0x77ComputedData,
tTextUnitx0x78ComputedData,
tTextUnitx0x79ComputedData,
tTextUnitx0x80ComputedData,
tTextUnitx0x81ComputedData,
tTextUnitx0x82ComputedData,
tTextUnitx0x83ComputedData,
tRectx0x84ComputedData,
tRectx0x85ComputedData,
tRectx0x86ComputedData,
tTextx0x87ComputedData,
tTextx0x88ComputedData,
tTextx0x89ComputedData,
tRectx0x90ComputedData,
tTextCommonx0x91ComputedData,
tTextCommonx0x92ComputedData,
tTextCommonx0x93ComputedData,
tTextCommonx0x94ComputedData,
tTextCommonx0x95ComputedData,
tTextCommonx0x96ComputedData,
tTextCommonx0x97ComputedData,
tRectx0x98ComputedData,
onclick1763536869861_0_0,
onclick1763536869861_0_0,
onclick1739255126445,
onclick1763536806853_0_0,
onclick1763539876275_0_0,
onclick1739254824900,
onclick1763536806853_0_0,
onclick1763539876275_0_0,
onclick1763605424065,
};
},
};