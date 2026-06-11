window.soilNnvironmentComponent = {
template: 
`<div id="t-l-c-soilNnvironment" class="t-l-c-soilNnvironment" >` +
`<t-rect id="t-rect-96cf.bc1ae79cc" class="soilNnvironment-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 20" id="t-image-base-de52.90ad4ba85" class="soilNnvironment-t-image-base-0-1"  :src="tImageBasex0x1ComputedData.src" :fit="tImageBasex0x1ComputedData.fit" :c-style="tImageBasex0x1ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 19" id="t-image-base-16ea.9e1b915d8" class="soilNnvironment-t-image-base-0-2"  :src="tImageBasex0x2ComputedData.src" :fit="tImageBasex0x2ComputedData.fit" :c-style="tImageBasex0x2ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex !== 20" id="t-image-base-b12d.4e48b1aac" class="soilNnvironment-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex !== 19" id="t-image-base-4f81.e5868f47c" class="soilNnvironment-t-image-base-0-4"  :src="tImageBasex0x4ComputedData.src" :fit="tImageBasex0x4ComputedData.fit" :c-style="tImageBasex0x4ComputedData.cStyle">` +
`</t-image-base>` +
`<t-rect id="t-rect-aa88.a72e421b" class="soilNnvironment-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle" @click="onclick1739255126445">` +
`</t-rect>` +
`<t-rect id="t-rect-2d22.252891d17" class="soilNnvironment-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-86e9.6e4bda798" class="soilNnvironment-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle" @click="onclick1739254824900">` +
`</t-text>` +
`<t-text id="t-text-815b.e047e62fa" class="soilNnvironment-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle">` +
`</t-text>` +
`<t-component id="t-component-568d.7cecfab45" class="soilNnvironment-t-component-0-9"  :name="tComponentx0x9ComputedData.name" :c-style="tComponentx0x9ComputedData.cStyle" :src="tComponentx0x9ComputedData.src" :component-name="tComponentx0x9ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-41ff.d151512ad" class="soilNnvironment-t-text-0-10"  :label="replaceCssVariables(filterData(state.monitorTime, componentPropBindingMap?.['t-text-41ff.d151512ad']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-8d0c.737ef0501" class="soilNnvironment-t-text-0-11"  :label="replaceCssVariables(filterData(state.waterMonitorTime, componentPropBindingMap?.['t-text-8d0c.737ef0501']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-3df2.076b058bb" class="soilNnvironment-t-text-0-12"  :label="tTextx0x12ComputedData.label" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-eaf5.580f785a" class="soilNnvironment-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-69fa.991666b61" class="soilNnvironment-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-d00b.f3fee7884" class="soilNnvironment-t-rect-0-15"  :tip="tRectx0x15ComputedData.tip" :label="tRectx0x15ComputedData.label" :active="tRectx0x15ComputedData.active" :c-style="tRectx0x15ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.sewageTreatmentData.standard_name === '达标'" id="t-rect-a64a.177b75f78" class="soilNnvironment-t-rect-0-16"  :tip="tRectx0x16ComputedData.tip" :label="tRectx0x16ComputedData.label" :active="tRectx0x16ComputedData.active" :c-style="tRectx0x16ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-9e65.6a9850d3c" class="soilNnvironment-t-rect-0-17"  :tip="tRectx0x17ComputedData.tip" :label="tRectx0x17ComputedData.label" :active="tRectx0x17ComputedData.active" :c-style="tRectx0x17ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-c9db.629b8f5a2" class="soilNnvironment-t-rect-0-18"  :tip="tRectx0x18ComputedData.tip" :label="tRectx0x18ComputedData.label" :active="tRectx0x18ComputedData.active" :c-style="tRectx0x18ComputedData.cStyle" @click="onclick1764902989973">` +
`</t-rect>` +
`<t-rect id="t-rect-d8b4.cb7d2951a" class="soilNnvironment-t-rect-0-19"  :tip="tRectx0x19ComputedData.tip" :label="tRectx0x19ComputedData.label" :active="tRectx0x19ComputedData.active" :c-style="tRectx0x19ComputedData.cStyle" @click="onclick1764903003248">` +
`</t-rect>` +
`<t-rect v-if="state.sewageTreatmentData.standard_name === '未达标'" id="t-rect-9737.cecc5dcf6" class="soilNnvironment-t-rect-0-20"  :tip="tRectx0x20ComputedData.tip" :label="tRectx0x20ComputedData.label" :active="tRectx0x20ComputedData.active" :c-style="tRectx0x20ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-1288.9361efa48" class="soilNnvironment-t-text-0-21"  :label="replaceCssVariables(filterData(state.sewageTreatmentData.standard_name, componentPropBindingMap?.['t-text-1288.9361efa48']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x21ComputedData.editable" :c-style="tTextx0x21ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-3d2c.232c145c2" class="soilNnvironment-t-rect-0-22"  :tip="tRectx0x22ComputedData.tip" :label="tRectx0x22ComputedData.label" :active="tRectx0x22ComputedData.active" :c-style="tRectx0x22ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-1330.fe295074" class="soilNnvironment-t-rect-0-23"  :tip="tRectx0x23ComputedData.tip" :label="tRectx0x23ComputedData.label" :active="tRectx0x23ComputedData.active" :c-style="tRectx0x23ComputedData.cStyle">` +
`</t-rect>` +
`<t-line id="t-line-c3d0.41db9917a" class="soilNnvironment-t-line-0-24"  :c-style="tLinex0x24ComputedData.cStyle">` +
`</t-line>` +
`<t-text id="t-text-43e6.5c59336a6" class="soilNnvironment-t-text-0-25"  :label="tTextx0x25ComputedData.label" :editable="tTextx0x25ComputedData.editable" :c-style="tTextx0x25ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-24ce.d9ac0b659" class="soilNnvironment-t-text-0-26"  :label="tTextx0x26ComputedData.label" :editable="tTextx0x26ComputedData.editable" :c-style="tTextx0x26ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-3008.70ae418d8" class="soilNnvironment-t-text-0-27"  :label="tTextx0x27ComputedData.label" :editable="tTextx0x27ComputedData.editable" :c-style="tTextx0x27ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-0cec.02305542c" class="soilNnvironment-t-text-unit-0-28"  :c-style="tTextUnitx0x28ComputedData.cStyle" :content="replaceCssVariables(filterData(state.groundwaterData.target_rate, componentPropBindingMap?.['t-text-unit-0cec.02305542c']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x28ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x28ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.groundwaterData.is_standard === '0'" id="t-text-unit-8f8a.83ff3db3e" class="soilNnvironment-t-text-unit-0-29"  :c-style="tTextUnitx0x29ComputedData.cStyle" :content="replaceCssVariables(filterData(state.groundwaterData.gap_value, componentPropBindingMap?.['t-text-unit-8f8a.83ff3db3e']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x29ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x29ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.groundwaterData.is_standard === '1'" id="t-text-unit-7d0e.fa6c4765d" class="soilNnvironment-t-text-unit-0-30"  :c-style="tTextUnitx0x30ComputedData.cStyle" :content="replaceCssVariables(filterData(state.groundwaterData.gap_value, componentPropBindingMap?.['t-text-unit-7d0e.fa6c4765d']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x30ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x30ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.groundwaterData.is_standard === '0'" id="t-text-unit-07d7.32a370ea2" class="soilNnvironment-t-text-unit-0-31"  :c-style="tTextUnitx0x31ComputedData.cStyle" :content="replaceCssVariables(filterData(state.groundwaterData.percentage, componentPropBindingMap?.['t-text-unit-07d7.32a370ea2']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x31ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x31ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.groundwaterData.is_standard === '1'" id="t-text-unit-28a9.099221c91" class="soilNnvironment-t-text-unit-0-32"  :c-style="tTextUnitx0x32ComputedData.cStyle" :content="replaceCssVariables(filterData(state.groundwaterData.percentage, componentPropBindingMap?.['t-text-unit-28a9.099221c91']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x32ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x32ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-9884.229278812" class="soilNnvironment-t-rect-0-33"  :tip="tRectx0x33ComputedData.tip" :label="tRectx0x33ComputedData.label" :active="tRectx0x33ComputedData.active" :c-style="tRectx0x33ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-5dd4.ca5f36b52" class="soilNnvironment-t-rect-0-34"  :tip="tRectx0x34ComputedData.tip" :label="tRectx0x34ComputedData.label" :active="tRectx0x34ComputedData.active" :c-style="tRectx0x34ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-47a6.7a3bf2865" class="soilNnvironment-t-rect-0-35"  :tip="tRectx0x35ComputedData.tip" :label="tRectx0x35ComputedData.label" :active="tRectx0x35ComputedData.active" :c-style="tRectx0x35ComputedData.cStyle">` +
`</t-rect>` +
`<t-line id="t-line-d49f.f1aec9d46" class="soilNnvironment-t-line-0-36"  :c-style="tLinex0x36ComputedData.cStyle">` +
`</t-line>` +
`<t-text id="t-text-e3ad.391156575" class="soilNnvironment-t-text-0-37"  :label="tTextx0x37ComputedData.label" :editable="tTextx0x37ComputedData.editable" :c-style="tTextx0x37ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-ca8c.f28156286" class="soilNnvironment-t-text-0-38"  :label="tTextx0x38ComputedData.label" :editable="tTextx0x38ComputedData.editable" :c-style="tTextx0x38ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-b472.4435aded1" class="soilNnvironment-t-text-0-39"  :label="tTextx0x39ComputedData.label" :editable="tTextx0x39ComputedData.editable" :c-style="tTextx0x39ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-37d1.692b62374" class="soilNnvironment-t-text-0-40"  :label="tTextx0x40ComputedData.label" :editable="tTextx0x40ComputedData.editable" :c-style="tTextx0x40ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit v-if="state.sewageTreatmentData.standard_name === '未达标'" id="t-text-unit-2d1c.b09e79ac9" class="soilNnvironment-t-text-unit-0-41"  :c-style="tTextUnitx0x41ComputedData.cStyle" :content="replaceCssVariables(filterData(state.sewageTreatmentData.rate_diff, componentPropBindingMap?.['t-text-unit-2d1c.b09e79ac9']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x41ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x41ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.sewageTreatmentData.standard_name === '达标'" id="t-text-unit-130a.35d7b0684" class="soilNnvironment-t-text-unit-0-42"  :c-style="tTextUnitx0x42ComputedData.cStyle" :content="replaceCssVariables(filterData(state.sewageTreatmentData.rate_diff, componentPropBindingMap?.['t-text-unit-130a.35d7b0684']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x42ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x42ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-101e.cfe02af57" class="soilNnvironment-t-text-unit-0-43"  :c-style="tTextUnitx0x43ComputedData.cStyle" :content="replaceCssVariables(filterData(state.sewageTreatmentData.yj_gk_rate, componentPropBindingMap?.['t-text-unit-101e.cfe02af57']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x43ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x43ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-03ff.8d14ccb7a" class="soilNnvironment-t-text-unit-0-44"  :c-style="tTextUnitx0x44ComputedData.cStyle" :content="replaceCssVariables(filterData(state.sewageTreatmentData.fg_zxc_sl, componentPropBindingMap?.['t-text-unit-03ff.8d14ccb7a']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x44ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x44ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.sewageTreatmentData.standard_name === '达标'" id="t-text-unit-8e28.475856ed6" class="soilNnvironment-t-text-unit-0-45"  :c-style="tTextUnitx0x45ComputedData.cStyle" :content="replaceCssVariables(filterData(state.sewageTreatmentData.gk_rate, componentPropBindingMap?.['t-text-unit-8e28.475856ed6']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x45ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x45ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.sewageTreatmentData.standard_name === '未达标'" id="t-text-unit-d3ea.939c8749" class="soilNnvironment-t-text-unit-0-46"  :c-style="tTextUnitx0x46ComputedData.cStyle" :content="replaceCssVariables(filterData(state.sewageTreatmentData.gk_rate, componentPropBindingMap?.['t-text-unit-d3ea.939c8749']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x46ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x46ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect v-if="state.groundwaterData.is_standard === '0'" id="t-rect-7be7.6b933db1e" class="soilNnvironment-t-rect-0-47"  :tip="tRectx0x47ComputedData.tip" :label="tRectx0x47ComputedData.label" :active="tRectx0x47ComputedData.active" :c-style="tRectx0x47ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.groundwaterData.is_standard === '1'" id="t-rect-01be.b0c7fcf06" class="soilNnvironment-t-rect-0-48"  :tip="tRectx0x48ComputedData.tip" :label="tRectx0x48ComputedData.label" :active="tRectx0x48ComputedData.active" :c-style="tRectx0x48ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-863c.9a78a207" class="soilNnvironment-t-text-0-49"  :label="replaceCssVariables(filterData(state.groundwaterData.is_standard_name, componentPropBindingMap?.['t-text-863c.9a78a207']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x49ComputedData.editable" :c-style="tTextx0x49ComputedData.cStyle">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-96cf.bc1ae79cc":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-de52.90ad4ba85":{"attributeName":"tImageBasex0x1","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-16ea.9e1b915d8":{"attributeName":"tImageBasex0x2","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-b12d.4e48b1aac":{"attributeName":"tImageBasex0x3","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-4f81.e5868f47c":{"attributeName":"tImageBasex0x4","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-aa88.a72e421b":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-2d22.252891d17":{"attributeName":"tRectx0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-86e9.6e4bda798":{"attributeName":"tTextx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-815b.e047e62fa":{"attributeName":"tTextx0x8","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-568d.7cecfab45":{"attributeName":"tComponentx0x9","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-41ff.d151512ad":{"attributeName":"tTextx0x10","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8d0c.737ef0501":{"attributeName":"tTextx0x11","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3df2.076b058bb":{"attributeName":"tTextx0x12","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-eaf5.580f785a":{"attributeName":"tTextx0x13","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-69fa.991666b61":{"attributeName":"tTextx0x14","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-d00b.f3fee7884":{"attributeName":"tRectx0x15","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-a64a.177b75f78":{"attributeName":"tRectx0x16","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-9e65.6a9850d3c":{"attributeName":"tRectx0x17","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-c9db.629b8f5a2":{"attributeName":"tRectx0x18","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-d8b4.cb7d2951a":{"attributeName":"tRectx0x19","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-9737.cecc5dcf6":{"attributeName":"tRectx0x20","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-1288.9361efa48":{"attributeName":"tTextx0x21","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-3d2c.232c145c2":{"attributeName":"tRectx0x22","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1330.fe295074":{"attributeName":"tRectx0x23","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-line-c3d0.41db9917a":{"attributeName":"tLinex0x24","cStyle":{"filters":[]}},"t-text-43e6.5c59336a6":{"attributeName":"tTextx0x25","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-24ce.d9ac0b659":{"attributeName":"tTextx0x26","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3008.70ae418d8":{"attributeName":"tTextx0x27","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-0cec.02305542c":{"attributeName":"tTextUnitx0x28","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-8f8a.83ff3db3e":{"attributeName":"tTextUnitx0x29","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-7d0e.fa6c4765d":{"attributeName":"tTextUnitx0x30","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-07d7.32a370ea2":{"attributeName":"tTextUnitx0x31","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-28a9.099221c91":{"attributeName":"tTextUnitx0x32","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-9884.229278812":{"attributeName":"tRectx0x33","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5dd4.ca5f36b52":{"attributeName":"tRectx0x34","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-47a6.7a3bf2865":{"attributeName":"tRectx0x35","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-line-d49f.f1aec9d46":{"attributeName":"tLinex0x36","cStyle":{"filters":[]}},"t-text-e3ad.391156575":{"attributeName":"tTextx0x37","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-ca8c.f28156286":{"attributeName":"tTextx0x38","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-b472.4435aded1":{"attributeName":"tTextx0x39","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-37d1.692b62374":{"attributeName":"tTextx0x40","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-2d1c.b09e79ac9":{"attributeName":"tTextUnitx0x41","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-130a.35d7b0684":{"attributeName":"tTextUnitx0x42","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-101e.cfe02af57":{"attributeName":"tTextUnitx0x43","cStyle":{"filters":[]},"content":{"filters":[{"name":"addPrefix1"}]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-03ff.8d14ccb7a":{"attributeName":"tTextUnitx0x44","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-8e28.475856ed6":{"attributeName":"tTextUnitx0x45","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-d3ea.939c8749":{"attributeName":"tTextUnitx0x46","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-7be7.6b933db1e":{"attributeName":"tRectx0x47","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-01be.b0c7fcf06":{"attributeName":"tRectx0x48","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-863c.9a78a207":{"attributeName":"tTextx0x49","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   waterMonitorTime: "2025",
   monitorTime: "2025",
   sewageTreatmentData: {"region_code":"350700000000","region_name":"南平市","longitude":"118.144","latitude":"27.3391","pkid":"00001","sys_create_time":"2024-12-01","sys_update_time":"2024-12-01","year_number":"2024","wsystem_code":"NP3507009","wsystem_name":"闽江流域","zxc_sl":"--","fg_zxc_sl":"--","fgrk_sl":"--","gk_rate":"--","yj_gk_rate":"--","standard":0,"standard_name":"--","rate_diff":"--"},
   groundwaterData: {"levelNumber":"","total":"0","percentage":"--","year_number":"2025","target_rate":"--","gap_value":"--","is_standard":"--","is_standard_name":"--"},
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
            default: {"width":"400px","height":"252px","position":"unset","left":"0px","top":"51px","backgroundColor":"var(--t-card-bgc)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"252px","position":"unset","left":"0px","top":"51px","backgroundColor":"var(--t-card-bgc)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tImageBasex0x1: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"1px","top":"176px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"1px","top":"176px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x2: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"57px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"57px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"1px","top":"173px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"1px","top":"173px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""}}}, 
 },
},
tImageBasex0x4: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"59px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto"},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"59px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/fa8ce540233a40a9b26e701f8ea04494.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"65px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/fa8ce540233a40a9b26e701f8ea04494.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"65px","cursor":"pointer"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/fa8ce540233a40a9b26e701f8ea04494.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"17px","top":"184px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/fa8ce540233a40a9b26e701f8ea04494.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"17px","top":"184px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"210px","height":"16px","color":"var(--t-text)","position":"unset","left":"52px","top":"72px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer"},
            
            },
 default: { 
 
label:"农村生活污水治理(管控)率",
editable:false,
cStyle:{"wrapper":{"default":{"width":"210px","height":"16px","color":"var(--t-text)","position":"unset","left":"52px","top":"72px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer"}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"226px","height":"16px","color":"var(--t-text)","position":"unset","left":"52px","top":"191px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"地下水国省控点位V类水比例",
editable:false,
cStyle:{"wrapper":{"default":{"width":"226px","height":"16px","color":"var(--t-text)","position":"unset","left":"52px","top":"191px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""}}}, 
 },
},
tComponentx0x9: {
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
tTextx0x10: {
defaultStyle: {
            default: {"width":"41px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"351px","top":"72px","animationName":""},
            
            },
 default: { 
 
label:"2025",
editable:false,
cStyle:{"wrapper":{"default":{"width":"41px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"351px","top":"72px","animationName":""}}}, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"41px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"360px","top":"191px","animationName":""},
            
            },
 default: { 
 
label:"2025",
editable:false,
cStyle:{"wrapper":{"default":{"width":"41px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"360px","top":"191px","animationName":""}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"321px","top":"72px","animationName":""},
            
            },
 default: { 
 
label:"截至",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"321px","top":"72px","animationName":""}}}, 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"330px","top":"191px","animationName":""},
            
            },
 default: { 
 
label:"截至",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"330px","top":"191px","animationName":""}}}, 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"156px","height":"20px","color":"#fff","fontSize":"20px","fontFamily":"方正综艺","position":"unset","left":"52px","top":"18px","fontStyle":"italic","letterSpacing":"1px"},
            
            },
 default: { 
 
label:"土壤环境",
editable:false,
cStyle:{"wrapper":{"default":{"width":"156px","height":"20px","color":"#fff","fontSize":"20px","fontFamily":"方正综艺","position":"unset","left":"52px","top":"18px","fontStyle":"italic","letterSpacing":"1px"}}}, 
 },
},
tRectx0x15: {
defaultStyle: {
            default: {"width":"388px","height":"38px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"7px","left":"5px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"388px","height":"38px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"7px","left":"5px","position":"unset","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x16: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"248px","top":"71px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"248px","top":"71px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tRectx0x17: {
defaultStyle: {
            default: {"width":"25px","height":"34px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","position":"unset","left":"140px","top":"12px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"25px","height":"34px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","position":"unset","left":"140px","top":"12px","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x18: {
defaultStyle: {
            default: {"width":"400px","height":"104px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"0px","top":"57px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"104px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"0px","top":"57px","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x19: {
defaultStyle: {
            default: {"width":"400px","height":"104px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"0px","top":"177px","animationName":"","pointerEvents":"auto","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"104px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"0px","top":"177px","animationName":"","pointerEvents":"auto","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x20: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"248px","top":"71px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"248px","top":"71px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tTextx0x21: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"72px","left":"260px","position":"unset","animationName":"","fontFamily":"钉钉进步体","textAlign":"center"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"72px","left":"260px","position":"unset","animationName":"","fontFamily":"钉钉进步体","textAlign":"center"}}}, 
 },
},
tRectx0x22: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"291px","top":"225px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"291px","top":"225px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x23: {
defaultStyle: {
            default: {"width":"71px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"131px","top":"223px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"71px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"131px","top":"223px","position":"unset","animationName":""}}}, 
 },
},
tLinex0x24: {
defaultStyle: {
            default: {"width":"368px","height":"1px","position":"unset","left":"18px","top":"285px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"368px","height":"1px","position":"unset","left":"18px","top":"285px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tTextx0x25: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"24px","top":"226px","animationName":""},
            
            },
 default: { 
 
label:"现状",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"24px","top":"226px","animationName":""}}}, 
 },
},
tTextx0x26: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"319px","top":"226px","animationName":""},
            
            },
 default: { 
 
label:"优于目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"319px","top":"226px","animationName":""}}}, 
 },
},
tTextx0x27: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"181px","top":"226px","animationName":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"181px","top":"226px","animationName":""}}}, 
 },
},
tTextUnitx0x28: {
defaultStyle: {
            default: {"width":"55px","height":"22px","position":"unset","left":"183px","top":"246px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","gap":"2px","display":"flex"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"55px","height":"22px","position":"unset","left":"183px","top":"246px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","gap":"2px","display":"flex"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-white)","fontFamily":"DIN-black","fontWeight":"400","width":"auto","height":"","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":""}}},
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x29: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","position":"unset","left":"313px","top":"242px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","position":"unset","left":"313px","top":"242px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-red)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x30: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","position":"unset","left":"313px","top":"242px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","position":"unset","left":"313px","top":"242px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-green)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x31: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"24px","top":"242px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"24px","top":"242px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-num-color-red)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"0",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x32: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"23px","top":"242px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","position":"unset","left":"23px","top":"242px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-num-color-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"0",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRectx0x33: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"294px","top":"108px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"294px","top":"108px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x34: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"206px","top":"112px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"206px","top":"112px","position":"unset"}}}, 
 },
},
tRectx0x35: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"94px","top":"107px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"94px","top":"107px","position":"unset","animationName":""}}}, 
 },
},
tLinex0x36: {
defaultStyle: {
            default: {"width":"368px","height":"1px","position":"unset","left":"17px","top":"141.5px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"368px","height":"1px","position":"unset","left":"17px","top":"141.5px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tTextx0x37: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"24px","top":"108px"},
            
            },
 default: { 
 
label:"现状",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"24px","top":"108px"}}}, 
 },
},
tTextx0x38: {
defaultStyle: {
            default: {"width":"68px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"213px","top":"108px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"68px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"213px","top":"108px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x39: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"308px","top":"108px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"优于目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"308px","top":"108px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x40: {
defaultStyle: {
            default: {"width":"102px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"104px","top":"108px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"治理村庄数",
editable:false,
cStyle:{"wrapper":{"default":{"width":"102px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"104px","top":"108px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextUnitx0x41: {
defaultStyle: {
            default: {"width":"70px","height":"30px","position":"unset","left":"308px","top":"127px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","position":"unset","left":"308px","top":"127px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x42: {
defaultStyle: {
            default: {"width":"70px","height":"30px","position":"unset","left":"308px","top":"127px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","position":"unset","left":"308px","top":"127px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-num-color-green)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x43: {
defaultStyle: {
            default: {"width":"75px","height":"28px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","top":"128px","left":"212px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"75px","height":"28px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","top":"128px","left":"212px","position":"unset"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-num-color-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"≥60",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x44: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","top":"127px","position":"unset","left":"120px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","top":"127px","position":"unset","left":"120px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"1619",
unit:"个",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x45: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","position":"unset","left":"20px","top":"127px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","position":"unset","left":"20px","top":"127px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-num-color-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"75.8",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x46: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","left":"20px","top":"127px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"left","alignItems":"end","left":"20px","top":"127px","position":"unset"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-num-color-red)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"75.8",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRectx0x47: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"257px","top":"189px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"257px","top":"189px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tRectx0x48: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"257px","top":"189px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"257px","top":"189px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tTextx0x49: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"192px","left":"268px","position":"unset","animationName":"","fontFamily":"钉钉进步体","textAlign":"center"},
            
            },
 default: { 
 
label:"不达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"192px","left":"268px","position":"unset","animationName":"","fontFamily":"钉钉进步体","textAlign":"center"}}}, 
 },
},
});
const handleSelectCard = (monitorTime,index,type) => {
global.isLoop = false;
// global.isSelectedBg = index;
// global.currentIndex = index + 1;

// 全局变量中驾驶舱专题变量中记录了选择的指标索引 从1开始
global.dashboardGlobalVariables.selectedIndicatorIndex = index;
// 全局变量中驾驶舱专题变量中记录了当前的模块 用于地图下方弹窗显示使用
global.dashboardGlobalVariables.activeTopic = type || 'soil';

// 添加指标图层
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeIndicator', // 消息名称
  data: {
    indicator: index,
    time: monitorTime,
  },
});

// 修改监测时间 重新添加图层
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeMonitorTime', // 消息名称
  data: {
    time: monitorTime,
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
const onclick1739255126445 = () => {
};
const onclick1739254824900 = () => {
};
const onclick1764902989973 = () => {
// 执行自定义方法
handleSelectCard("19","villageSewage");
// 执行自定义方法
handleSelectCard(state.monitorTime,19,"villageSewage");
};
const onclick1764903003248 = () => {
// 执行自定义方法
handleSelectCard(state.waterMonitorTime,20,"groundwater");
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getWaterMonitorTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"91ed7320df516342761e7dcc1334026b"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"91ed7320df516342761e7dcc1334026b"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"91ed7320df516342761e7dcc1334026b"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWaterMonitorTime'] = res.data;
                
     state.waterMonitorTime = res?.data?.data?.monitortime || '--';

apiRegistry.getGroundwaterInfo.request();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.waterMonitorTime = '--';
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"REGION_CODE":"global.REGION_CODE","interfaceId":"e0d337849b2db0ed17164bb474f1a8c2"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"REGION_CODE":global.REGION_CODE,"interfaceId":"e0d337849b2db0ed17164bb474f1a8c2"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.REGION_CODE,"interfaceId":"e0d337849b2db0ed17164bb474f1a8c2"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTime'] = res.data;
                
     state.monitorTime = res?.data?.data[0]?.monitortime || '--';

apiRegistry.getData.request();
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
 getData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"5653b9444cff20efc45eb6ebd7a33ec6","REGION_CODE":"global.REGION_CODE","MONITOR_TIME":"state.monitorTime"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"5653b9444cff20efc45eb6ebd7a33ec6","REGION_CODE":global.REGION_CODE,"MONITOR_TIME":state.monitorTime},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"5653b9444cff20efc45eb6ebd7a33ec6","REGION_CODE":global.REGION_CODE,"MONITOR_TIME":state.monitorTime});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     if (res?.data?.data && res?.data?.data.length > 0) {
  const data = res.data.data[0];
  state.sewageTreatmentData = data;
} else {
  for (let key in state.sewageTreatmentData) {
    state.sewageTreatmentData[key] = '--';
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
 getGroundwaterInfo: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"2","defaultValue":"2","description":"","dataKey":"level","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"ReaTLwTUTJ"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"waterlevel":"5","interfaceId":"18b08cd6fa6c1b4b12c2551ef0e3c4db","year_number":"state.waterMonitorTime"}},
              request: function (level, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"waterlevel":"5","interfaceId":"18b08cd6fa6c1b4b12c2551ef0e3c4db","year_number":state.waterMonitorTime},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"waterlevel":"5","interfaceId":"18b08cd6fa6c1b4b12c2551ef0e3c4db","year_number":state.waterMonitorTime});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getGroundwaterInfo'] = res.data;
                
     if (res?.data?.data) {
  state.groundwaterData = res?.data?.data;
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
                            setPageScale('t-l-c-soilNnvironment', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-soilNnvironment', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
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

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tComponentx0x9ComputedData = computed(() => _.merge({}, componentState.tComponentx0x9.default, componentState.tComponentx0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tRectx0x15ComputedData = computed(() => _.merge({}, componentState.tRectx0x15.default, componentState.tRectx0x15?.[state.screenSize]));

 const tRectx0x16ComputedData = computed(() => _.merge({}, componentState.tRectx0x16.default, componentState.tRectx0x16?.[state.screenSize]));

 const tRectx0x17ComputedData = computed(() => _.merge({}, componentState.tRectx0x17.default, componentState.tRectx0x17?.[state.screenSize]));

 const tRectx0x18ComputedData = computed(() => _.merge({}, componentState.tRectx0x18.default, componentState.tRectx0x18?.[state.screenSize]));

 const tRectx0x19ComputedData = computed(() => _.merge({}, componentState.tRectx0x19.default, componentState.tRectx0x19?.[state.screenSize]));

 const tRectx0x20ComputedData = computed(() => _.merge({}, componentState.tRectx0x20.default, componentState.tRectx0x20?.[state.screenSize]));

 const tTextx0x21ComputedData = computed(() => _.merge({}, componentState.tTextx0x21.default, componentState.tTextx0x21?.[state.screenSize]));

 const tRectx0x22ComputedData = computed(() => _.merge({}, componentState.tRectx0x22.default, componentState.tRectx0x22?.[state.screenSize]));

 const tRectx0x23ComputedData = computed(() => _.merge({}, componentState.tRectx0x23.default, componentState.tRectx0x23?.[state.screenSize]));

 const tLinex0x24ComputedData = computed(() => _.merge({}, componentState.tLinex0x24.default, componentState.tLinex0x24?.[state.screenSize]));

 const tTextx0x25ComputedData = computed(() => _.merge({}, componentState.tTextx0x25.default, componentState.tTextx0x25?.[state.screenSize]));

 const tTextx0x26ComputedData = computed(() => _.merge({}, componentState.tTextx0x26.default, componentState.tTextx0x26?.[state.screenSize]));

 const tTextx0x27ComputedData = computed(() => _.merge({}, componentState.tTextx0x27.default, componentState.tTextx0x27?.[state.screenSize]));

 const tTextUnitx0x28ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x28.default, componentState.tTextUnitx0x28?.[state.screenSize]));

 const tTextUnitx0x29ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x29.default, componentState.tTextUnitx0x29?.[state.screenSize]));

 const tTextUnitx0x30ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x30.default, componentState.tTextUnitx0x30?.[state.screenSize]));

 const tTextUnitx0x31ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x31.default, componentState.tTextUnitx0x31?.[state.screenSize]));

 const tTextUnitx0x32ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x32.default, componentState.tTextUnitx0x32?.[state.screenSize]));

 const tRectx0x33ComputedData = computed(() => _.merge({}, componentState.tRectx0x33.default, componentState.tRectx0x33?.[state.screenSize]));

 const tRectx0x34ComputedData = computed(() => _.merge({}, componentState.tRectx0x34.default, componentState.tRectx0x34?.[state.screenSize]));

 const tRectx0x35ComputedData = computed(() => _.merge({}, componentState.tRectx0x35.default, componentState.tRectx0x35?.[state.screenSize]));

 const tLinex0x36ComputedData = computed(() => _.merge({}, componentState.tLinex0x36.default, componentState.tLinex0x36?.[state.screenSize]));

 const tTextx0x37ComputedData = computed(() => _.merge({}, componentState.tTextx0x37.default, componentState.tTextx0x37?.[state.screenSize]));

 const tTextx0x38ComputedData = computed(() => _.merge({}, componentState.tTextx0x38.default, componentState.tTextx0x38?.[state.screenSize]));

 const tTextx0x39ComputedData = computed(() => _.merge({}, componentState.tTextx0x39.default, componentState.tTextx0x39?.[state.screenSize]));

 const tTextx0x40ComputedData = computed(() => _.merge({}, componentState.tTextx0x40.default, componentState.tTextx0x40?.[state.screenSize]));

 const tTextUnitx0x41ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x41.default, componentState.tTextUnitx0x41?.[state.screenSize]));

 const tTextUnitx0x42ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x42.default, componentState.tTextUnitx0x42?.[state.screenSize]));

 const tTextUnitx0x43ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x43.default, componentState.tTextUnitx0x43?.[state.screenSize]));

 const tTextUnitx0x44ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x44.default, componentState.tTextUnitx0x44?.[state.screenSize]));

 const tTextUnitx0x45ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x45.default, componentState.tTextUnitx0x45?.[state.screenSize]));

 const tTextUnitx0x46ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x46.default, componentState.tTextUnitx0x46?.[state.screenSize]));

 const tRectx0x47ComputedData = computed(() => _.merge({}, componentState.tRectx0x47.default, componentState.tRectx0x47?.[state.screenSize]));

 const tRectx0x48ComputedData = computed(() => _.merge({}, componentState.tRectx0x48.default, componentState.tRectx0x48?.[state.screenSize]));

 const tTextx0x49ComputedData = computed(() => _.merge({}, componentState.tTextx0x49.default, componentState.tTextx0x49?.[state.screenSize]));

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
tRectx0x6ComputedData,
tTextx0x7ComputedData,
tTextx0x8ComputedData,
tComponentx0x9ComputedData,
tTextx0x10ComputedData,
tTextx0x11ComputedData,
tTextx0x12ComputedData,
tTextx0x13ComputedData,
tTextx0x14ComputedData,
tRectx0x15ComputedData,
tRectx0x16ComputedData,
tRectx0x17ComputedData,
tRectx0x18ComputedData,
tRectx0x19ComputedData,
tRectx0x20ComputedData,
tTextx0x21ComputedData,
tRectx0x22ComputedData,
tRectx0x23ComputedData,
tLinex0x24ComputedData,
tTextx0x25ComputedData,
tTextx0x26ComputedData,
tTextx0x27ComputedData,
tTextUnitx0x28ComputedData,
tTextUnitx0x29ComputedData,
tTextUnitx0x30ComputedData,
tTextUnitx0x31ComputedData,
tTextUnitx0x32ComputedData,
tRectx0x33ComputedData,
tRectx0x34ComputedData,
tRectx0x35ComputedData,
tLinex0x36ComputedData,
tTextx0x37ComputedData,
tTextx0x38ComputedData,
tTextx0x39ComputedData,
tTextx0x40ComputedData,
tTextUnitx0x41ComputedData,
tTextUnitx0x42ComputedData,
tTextUnitx0x43ComputedData,
tTextUnitx0x44ComputedData,
tTextUnitx0x45ComputedData,
tTextUnitx0x46ComputedData,
tRectx0x47ComputedData,
tRectx0x48ComputedData,
tTextx0x49ComputedData,
onclick1739255126445,
onclick1739254824900,
onclick1764902989973,
onclick1764903003248,
};
},
};