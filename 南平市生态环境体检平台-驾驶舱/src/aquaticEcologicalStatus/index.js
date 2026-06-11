window.aquaticEcologicalStatusComponent = {
template: 
`<div id="t-l-c-aquaticEcologicalStatus" class="t-l-c-aquaticEcologicalStatus" >` +
`<t-rect v-if="state.CWQIData.region_cwqi_state === 'down'" id="t-rect-65cb.25e045b0b" class="aquaticEcologicalStatus-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.CWQIData.region_cwqi_state === 'up'" id="t-rect-8f23.75ff20a77" class="aquaticEcologicalStatus-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text v-if="state.CWQIData.region_cwqi_state === 'down'" id="t-text-20c1.07d28328" class="aquaticEcologicalStatus-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.CWQIData.region_cwqi_state === 'up'" id="t-text-386f.5c8e7dab4" class="aquaticEcologicalStatus-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-3e6b.f26a51708" class="aquaticEcologicalStatus-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-f79b.a0932e77f" class="aquaticEcologicalStatus-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 3" id="t-image-base-4bd7.44dd4f73c" class="aquaticEcologicalStatus-t-image-base-0-6"  :src="tImageBasex0x6ComputedData.src" :fit="tImageBasex0x6ComputedData.fit" :c-style="tImageBasex0x6ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 22" id="t-image-base-5c45.1e1197d36" class="aquaticEcologicalStatus-t-image-base-0-7"  :src="tImageBasex0x7ComputedData.src" :fit="tImageBasex0x7ComputedData.fit" :c-style="tImageBasex0x7ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base id="t-image-base-ee57.932c286c4" class="aquaticEcologicalStatus-t-image-base-0-8"  :src="tImageBasex0x8ComputedData.src" :fit="tImageBasex0x8ComputedData.fit" :c-style="tImageBasex0x8ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base id="t-image-base-20df.99c551e64" class="aquaticEcologicalStatus-t-image-base-0-9"  :src="tImageBasex0x9ComputedData.src" :fit="tImageBasex0x9ComputedData.fit" :c-style="tImageBasex0x9ComputedData.cStyle">` +
`</t-image-base>` +
`<t-text id="t-text-b992.17ae1eead" class="aquaticEcologicalStatus-t-text-0-10"  :label="tTextx0x10ComputedData.label" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-158c.5f51a3f2" class="aquaticEcologicalStatus-t-text-0-11"  :label="tTextx0x11ComputedData.label" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-813d.de4b86913" class="aquaticEcologicalStatus-t-text-0-12"  :label="tTextx0x12ComputedData.label" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-7f8e.81d73d998" class="aquaticEcologicalStatus-t-text-unit-0-13"  :c-style="tTextUnitx0x13ComputedData.cStyle" :content="replaceCssVariables(filterData(state.CWQIData.cwqiValueOf30thPlace, componentPropBindingMap?.['t-text-unit-7f8e.81d73d998']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x13ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x13ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.CWQIData.region_cwqi_state === 'up'" id="t-text-unit-2f05.8f9e59d6" class="aquaticEcologicalStatus-t-text-unit-0-14"  :c-style="tTextUnitx0x14ComputedData.cStyle" :content="replaceCssVariables(filterData(state.CWQIData.difference, componentPropBindingMap?.['t-text-unit-2f05.8f9e59d6']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x14ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x14ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.CWQIData.region_cwqi_state === 'down'" id="t-text-unit-ace9.ff4d19cf8" class="aquaticEcologicalStatus-t-text-unit-0-15"  :c-style="tTextUnitx0x15ComputedData.cStyle" :content="replaceCssVariables(filterData(state.CWQIData.difference, componentPropBindingMap?.['t-text-unit-ace9.ff4d19cf8']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x15ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x15ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-27f8.cc9bef4ea" class="aquaticEcologicalStatus-t-rect-0-16"  :tip="tRectx0x16ComputedData.tip" :label="tRectx0x16ComputedData.label" :active="tRectx0x16ComputedData.active" :c-style="tRectx0x16ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-c970.6e4af9404" class="aquaticEcologicalStatus-t-rect-0-17"  :tip="tRectx0x17ComputedData.tip" :label="tRectx0x17ComputedData.label" :active="tRectx0x17ComputedData.active" :c-style="tRectx0x17ComputedData.cStyle" @click="onclick1765509560861_11_0">` +
`</t-rect>` +
`<t-text id="t-text-d96c.3dc2bd5c3" class="aquaticEcologicalStatus-t-text-0-18"  :label="tTextx0x18ComputedData.label" :editable="tTextx0x18ComputedData.editable" :c-style="tTextx0x18ComputedData.cStyle" @click="onclick1770116796426">` +
`</t-text>` +
`<t-text id="t-text-0cc5.8812cfe2" class="aquaticEcologicalStatus-t-text-0-19"  :label="tTextx0x19ComputedData.label" :editable="tTextx0x19ComputedData.editable" :c-style="tTextx0x19ComputedData.cStyle" @click="onclick1765509560861_12_0">` +
`</t-text>` +
`<t-text-common id="t-text-common-6242.dd209ed9b" class="aquaticEcologicalStatus-t-text-common-0-20"  :label="tTextCommonx0x20ComputedData.label" :editable="tTextCommonx0x20ComputedData.editable" :c-style="tTextCommonx0x20ComputedData.cStyle">` +
`</t-text-common>` +
`<t-image-base v-if="state.CWQIData.mom_change_rate_state === 'down'" id="t-image-base-d573.0add4d334" class="aquaticEcologicalStatus-t-image-base-0-21"  :src="tImageBasex0x21ComputedData.src" :fit="tImageBasex0x21ComputedData.fit" :c-style="tImageBasex0x21ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="state.CWQIData.mom_change_rate_state === 'up'" id="t-image-base-c4be.4278509d4" class="aquaticEcologicalStatus-t-image-base-0-22"  :src="tImageBasex0x22ComputedData.src" :fit="tImageBasex0x22ComputedData.fit" :c-style="tImageBasex0x22ComputedData.cStyle">` +
`</t-image-base>` +
`<t-text-unit v-if="state.CWQIData.mom_change_rate_state === 'up'" id="t-text-unit-eec4.f6a7e8e1" class="aquaticEcologicalStatus-t-text-unit-0-23"  :c-style="tTextUnitx0x23ComputedData.cStyle" :content="replaceCssVariables(filterData(state.CWQIData.mom_change, componentPropBindingMap?.['t-text-unit-eec4.f6a7e8e1']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x23ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x23ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.CWQIData.mom_change_rate_state === 'down'" id="t-text-unit-c7b6.4e82e0af8" class="aquaticEcologicalStatus-t-text-unit-0-24"  :c-style="tTextUnitx0x24ComputedData.cStyle" :content="replaceCssVariables(filterData(state.CWQIData.mom_change, componentPropBindingMap?.['t-text-unit-c7b6.4e82e0af8']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x24ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x24ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-common id="t-text-common-fa11.a0bdbf988" class="aquaticEcologicalStatus-t-text-common-0-25"  :label="tTextCommonx0x25ComputedData.label" :editable="tTextCommonx0x25ComputedData.editable" :c-style="tTextCommonx0x25ComputedData.cStyle">` +
`</t-text-common>` +
`<t-image-base v-if="state.CWQIData.yoy_change_rate_state === 'down'" id="t-image-base-e77e.fb11e8539" class="aquaticEcologicalStatus-t-image-base-0-26"  :src="tImageBasex0x26ComputedData.src" :fit="tImageBasex0x26ComputedData.fit" :c-style="tImageBasex0x26ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="state.CWQIData.yoy_change_rate_state === 'up'" id="t-image-base-3eae.4216c62ec" class="aquaticEcologicalStatus-t-image-base-0-27"  :src="tImageBasex0x27ComputedData.src" :fit="tImageBasex0x27ComputedData.fit" :c-style="tImageBasex0x27ComputedData.cStyle">` +
`</t-image-base>` +
`<t-text-unit v-if="state.CWQIData.yoy_change_rate_state === 'down'" id="t-text-unit-dff9.9c99a9f8" class="aquaticEcologicalStatus-t-text-unit-0-28"  :c-style="tTextUnitx0x28ComputedData.cStyle" :content="replaceCssVariables(filterData(state.CWQIData.yoy_change, componentPropBindingMap?.['t-text-unit-dff9.9c99a9f8']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x28ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x28ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.CWQIData.yoy_change_rate_state === 'up'" id="t-text-unit-dd7d.59da09c34" class="aquaticEcologicalStatus-t-text-unit-0-29"  :c-style="tTextUnitx0x29ComputedData.cStyle" :content="replaceCssVariables(filterData(state.CWQIData.yoy_change, componentPropBindingMap?.['t-text-unit-dd7d.59da09c34']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x29ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x29ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-line id="t-line-60a4.5ec1be238" class="aquaticEcologicalStatus-t-line-0-30"  :c-style="tLinex0x30ComputedData.cStyle">` +
`</t-line>` +
`<t-text-unit v-if="state.CWQIData.region_cwqi_state === 'down'" id="t-text-unit-63b0.bbb85be2c" class="aquaticEcologicalStatus-t-text-unit-0-31"  :c-style="tTextUnitx0x31ComputedData.cStyle" :content="replaceCssVariables(filterData(state.CWQIData.region_cwqi, componentPropBindingMap?.['t-text-unit-63b0.bbb85be2c']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x31ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x31ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.CWQIData.region_cwqi_state === 'up'" id="t-text-unit-dea4.b7b6d328c" class="aquaticEcologicalStatus-t-text-unit-0-32"  :c-style="tTextUnitx0x32ComputedData.cStyle" :content="replaceCssVariables(filterData(state.CWQIData.region_cwqi, componentPropBindingMap?.['t-text-unit-dea4.b7b6d328c']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x32ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x32ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-common id="t-text-common-1ce2.233b57358" class="aquaticEcologicalStatus-t-text-common-0-33"  :label="replaceCssVariables(filterData(state.CWQIMonitorTime, componentPropBindingMap?.['t-text-common-1ce2.233b57358']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x33ComputedData.editable" :c-style="tTextCommonx0x33ComputedData.cStyle">` +
`</t-text-common>` +
`<t-rect id="t-rect-133b.3fa041c94" class="aquaticEcologicalStatus-t-rect-0-34"  :tip="tRectx0x34ComputedData.tip" :label="tRectx0x34ComputedData.label" :active="tRectx0x34ComputedData.active" :c-style="tRectx0x34ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-69a8.f6a292ba6" class="aquaticEcologicalStatus-t-rect-0-35"  :tip="tRectx0x35ComputedData.tip" :label="tRectx0x35ComputedData.label" :active="tRectx0x35ComputedData.active" :c-style="tRectx0x35ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-da04.c7412e662" class="aquaticEcologicalStatus-t-text-0-36"  :label="tTextx0x36ComputedData.label" :editable="tTextx0x36ComputedData.editable" :c-style="tTextx0x36ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-b58e.9e0c45ec2" class="aquaticEcologicalStatus-t-text-0-37"  :label="tTextx0x37ComputedData.label" :editable="tTextx0x37ComputedData.editable" :c-style="tTextx0x37ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-f5ae.d134497f2" class="aquaticEcologicalStatus-t-text-0-38"  :label="tTextx0x38ComputedData.label" :editable="tTextx0x38ComputedData.editable" :c-style="tTextx0x38ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-bcc4.39f9c8ade" class="aquaticEcologicalStatus-t-text-unit-0-39"  :c-style="tTextUnitx0x39ComputedData.cStyle" :content="replaceCssVariables(filterData(state.data.浮游动物, componentPropBindingMap?.['t-text-unit-bcc4.39f9c8ade']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x39ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x39ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-b934.f7e0bc776" class="aquaticEcologicalStatus-t-text-unit-0-40"  :c-style="tTextUnitx0x40ComputedData.cStyle" :content="replaceCssVariables(filterData(state.data.浮游动物, componentPropBindingMap?.['t-text-unit-b934.f7e0bc776']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x40ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x40ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-5a5d.8cbf5a80e" class="aquaticEcologicalStatus-t-text-unit-0-41"  :c-style="tTextUnitx0x41ComputedData.cStyle" :content="replaceCssVariables(filterData(state.data.浮游植物, componentPropBindingMap?.['t-text-unit-5a5d.8cbf5a80e']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x41ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x41ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-65cb.25e045b0b":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-8f23.75ff20a77":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-20c1.07d28328":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-386f.5c8e7dab4":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-3e6b.f26a51708":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f79b.a0932e77f":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-4bd7.44dd4f73c":{"attributeName":"tImageBasex0x6","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-5c45.1e1197d36":{"attributeName":"tImageBasex0x7","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-ee57.932c286c4":{"attributeName":"tImageBasex0x8","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-20df.99c551e64":{"attributeName":"tImageBasex0x9","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-text-b992.17ae1eead":{"attributeName":"tTextx0x10","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-158c.5f51a3f2":{"attributeName":"tTextx0x11","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-813d.de4b86913":{"attributeName":"tTextx0x12","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-7f8e.81d73d998":{"attributeName":"tTextUnitx0x13","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-2f05.8f9e59d6":{"attributeName":"tTextUnitx0x14","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-ace9.ff4d19cf8":{"attributeName":"tTextUnitx0x15","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-27f8.cc9bef4ea":{"attributeName":"tRectx0x16","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-c970.6e4af9404":{"attributeName":"tRectx0x17","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-d96c.3dc2bd5c3":{"attributeName":"tTextx0x18","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-0cc5.8812cfe2":{"attributeName":"tTextx0x19","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-6242.dd209ed9b":{"attributeName":"tTextCommonx0x20","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-d573.0add4d334":{"attributeName":"tImageBasex0x21","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-c4be.4278509d4":{"attributeName":"tImageBasex0x22","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-eec4.f6a7e8e1":{"attributeName":"tTextUnitx0x23","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-c7b6.4e82e0af8":{"attributeName":"tTextUnitx0x24","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-common-fa11.a0bdbf988":{"attributeName":"tTextCommonx0x25","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-e77e.fb11e8539":{"attributeName":"tImageBasex0x26","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-3eae.4216c62ec":{"attributeName":"tImageBasex0x27","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-dff9.9c99a9f8":{"attributeName":"tTextUnitx0x28","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-dd7d.59da09c34":{"attributeName":"tTextUnitx0x29","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-line-60a4.5ec1be238":{"attributeName":"tLinex0x30","cStyle":{"filters":[]}},"t-text-unit-63b0.bbb85be2c":{"attributeName":"tTextUnitx0x31","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-dea4.b7b6d328c":{"attributeName":"tTextUnitx0x32","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-common-1ce2.233b57358":{"attributeName":"tTextCommonx0x33","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-133b.3fa041c94":{"attributeName":"tRectx0x34","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-69a8.f6a292ba6":{"attributeName":"tRectx0x35","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-da04.c7412e662":{"attributeName":"tTextx0x36","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-b58e.9e0c45ec2":{"attributeName":"tTextx0x37","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-f5ae.d134497f2":{"attributeName":"tTextx0x38","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-bcc4.39f9c8ade":{"attributeName":"tTextUnitx0x39","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-b934.f7e0bc776":{"attributeName":"tTextUnitx0x40","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-5a5d.8cbf5a80e":{"attributeName":"tTextUnitx0x41","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}}};
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
   CWQIData: {"region_code":"","region_name":"","longitude":"","latitude":"","monitortime":"","region_cwqi":"","region_cwqi_last_month":"","region_cwqi_last_year":"","mom_change":"","mom_change_rate":"","yoy_change":"","yoy_change_rate":"","cwqi_rank":"","yoy_change_rate_state":"","mom_change_rate_state":"","mom_change_rate_unit":"上升","yoy_change_rate_unit":"上升","region_cwqi_state":"down","cwqiValueOf30thPlace":"","difference":""},
   CWQIMonitorTime: "",
   monitorTime: "2024",
   data: {"浮游动物":"--","浮游植物":"--","底栖动物":"--"},
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
            default: {"width":"65px","height":"21px","position":"unset","left":"201px","top":"13px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"201px","top":"13px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"201px","top":"12px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"201px","top":"12px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"16px","left":"212px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"已达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"16px","left":"212px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"15px","left":"212px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"未达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"15px","left":"212px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"304px","top":"52px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"304px","top":"52px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"209px","top":"51px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"209px","top":"51px","position":"unset","animationName":""}}}, 
 },
},
tImageBasex0x6: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"-1px","top":"1px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"-1px","top":"1px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x7: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"-1px","top":"113px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"-1px","top":"113px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x8: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"1px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"1px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""}}}, 
 },
},
tImageBasex0x9: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"-1px","top":"113px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"-1px","top":"113px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""}}}, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"15px","top":"50px","animationName":""},
            
            },
 default: { 
 
label:"现状",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"15px","top":"50px","animationName":""}}}, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"76px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"315px","top":"52px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"差距",
editable:false,
cStyle:{"wrapper":{"default":{"width":"76px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"315px","top":"52px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"82px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"215px","top":"51px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"全国第30名",
editable:false,
cStyle:{"wrapper":{"default":{"width":"82px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"215px","top":"51px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextUnitx0x13: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"225px","top":"74px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"225px","top":"74px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x14: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"323px","top":"74px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"323px","top":"74px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-yellow)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x15: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"323px","top":"74px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"323px","top":"74px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"",
unit:"",
showOverflowTooltip:true, 
 },
},
tRectx0x16: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/fa8ce540233a40a9b26e701f8ea04494.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"15px","top":"7px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/fa8ce540233a40a9b26e701f8ea04494.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"15px","top":"7px","cursor":"pointer","animationName":""}}}, 
 },
},
tRectx0x17: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/fa8ce540233a40a9b26e701f8ea04494.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"15px","top":"119px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/fa8ce540233a40a9b26e701f8ea04494.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"15px","top":"119px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x18: {
defaultStyle: {
            default: {"width":"149px","height":"16px","color":"var(--t-text)","position":"unset","left":"48px","top":"13px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"CWQI排名",
editable:false,
cStyle:{"wrapper":{"default":{"width":"149px","height":"16px","color":"var(--t-text)","position":"unset","left":"48px","top":"13px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x19: {
defaultStyle: {
            default: {"width":"149px","height":"16px","color":"var(--t-text)","position":"unset","left":"49px","top":"126px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"水生态状况",
editable:false,
cStyle:{"wrapper":{"default":{"width":"149px","height":"16px","color":"var(--t-text)","position":"unset","left":"49px","top":"126px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""}}}, 
 },
},
tTextCommonx0x20: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"113px","top":"85px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"环比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"113px","top":"85px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tImageBasex0x21: {
defaultStyle: {
            default: {"width":"10px","height":"10px","animationName":"","left":"144px","top":"91px","position":"unset"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-05-10/fa48e009288147a1afe6e88194c2ec18.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","animationName":"","left":"144px","top":"91px","position":"unset"}}}, 
 },
},
tImageBasex0x22: {
defaultStyle: {
            default: {"width":"10px","height":"10px","position":"unset","left":"144px","top":"91px","animationName":""},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-05-10/4075379dd12e4676aa74ecf1a2234f22.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","position":"unset","left":"144px","top":"91px","animationName":""}}}, 
 },
},
tTextUnitx0x23: {
defaultStyle: {
            default: {"width":"50px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"85px","left":"158px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"50px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"85px","left":"158px","position":"unset","animationName":""}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","textAlign":"center","lineHeight":"14px","letterSpacing":"0px","color":"var(--t-num-color-red)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","color":"#C5EEEA","background":"unset","backgroundClip":"unset","marginLeft":"2px"}}},
content:"",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x24: {
defaultStyle: {
            default: {"width":"50px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"85px","left":"158px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"50px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"85px","left":"158px","position":"unset","animationName":""}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","textAlign":"center","lineHeight":"14px","letterSpacing":"0px","color":"var(--t-white)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","color":"#C5EEEA","background":"unset","backgroundClip":"unset","marginLeft":"2px"}}},
content:"",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextCommonx0x25: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"113px","top":"66px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"同比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"113px","top":"66px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tImageBasex0x26: {
defaultStyle: {
            default: {"width":"10px","height":"10px","animationName":"","left":"144px","top":"73px","position":"unset"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-05-10/fa48e009288147a1afe6e88194c2ec18.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","animationName":"","left":"144px","top":"73px","position":"unset"}}}, 
 },
},
tImageBasex0x27: {
defaultStyle: {
            default: {"width":"10px","height":"10px","position":"unset","left":"144px","top":"73px","animationName":""},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-05-10/4075379dd12e4676aa74ecf1a2234f22.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"10px","height":"10px","position":"unset","left":"144px","top":"73px","animationName":""}}}, 
 },
},
tTextUnitx0x28: {
defaultStyle: {
            default: {"width":"49px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"68px","left":"158px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"49px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"68px","left":"158px","position":"unset","animationName":""}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","textAlign":"center","lineHeight":"14px","letterSpacing":"0px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","color":"#C5EEEA","background":"unset","backgroundClip":"unset","marginLeft":"2px"}}},
content:"",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x29: {
defaultStyle: {
            default: {"width":"49px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"68px","left":"158px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"49px","height":"14px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"68px","left":"158px","position":"unset","animationName":""}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","textAlign":"center","lineHeight":"14px","letterSpacing":"0px","color":"var(--t-num-color-red)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"center","color":"#C5EEEA","background":"unset","backgroundClip":"unset","marginLeft":"2px"}}},
content:"",
unit:"",
showOverflowTooltip:true, 
 },
},
tLinex0x30: {
defaultStyle: {
            default: {"width":"368px","height":"1px","position":"unset","left":"17px","top":"0px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"368px","height":"1px","position":"unset","left":"17px","top":"0px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tTextUnitx0x31: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","position":"unset","left":"15px","top":"71px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","position":"unset","left":"15px","top":"71px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-num-color-yellow)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x32: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","position":"unset","left":"15px","top":"70px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","position":"unset","left":"15px","top":"70px"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextCommonx0x33: {
defaultStyle: {
            default: {"width":"106px","height":"14px","color":"rgba(255, 255, 255, 0.76)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"282px","top":"12px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"106px","height":"14px","color":"rgba(255, 255, 255, 0.76)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"282px","top":"12px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tRectx0x34: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"270px","top":"161px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"270px","top":"161px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x35: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"131px","top":"161px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"131px","top":"161px","position":"unset","animationName":""}}}, 
 },
},
tTextx0x36: {
defaultStyle: {
            default: {"width":"68px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"302px","top":"158px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"底栖动物",
editable:false,
cStyle:{"wrapper":{"default":{"width":"68px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"302px","top":"158px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x37: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"168px","top":"158px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"浮游动物",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"168px","top":"158px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x38: {
defaultStyle: {
            default: {"width":"102px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"20px","top":"158px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"浮游植物",
editable:false,
cStyle:{"wrapper":{"default":{"width":"102px","height":"14px","color":"var(--t-text)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"20px","top":"158px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextUnitx0x39: {
defaultStyle: {
            default: {"width":"70px","height":"30px","position":"unset","left":"168px","top":"178px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","position":"unset","left":"168px","top":"178px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"--",
unit:"种",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x40: {
defaultStyle: {
            default: {"width":"70px","height":"30px","position":"unset","left":"301px","top":"178px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","position":"unset","left":"301px","top":"178px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"--",
unit:"种",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x41: {
defaultStyle: {
            default: {"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","left":"36px","top":"178px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"70px","height":"30px","fontSize":"14px","lineHeight":"14px","animationName":"","gap":"4px","display":"flex","justifyContent":"center","alignItems":"end","left":"36px","top":"178px","position":"unset"}},"text":{"default":{"fontSize":"32px","lineHeight":"32px","color":"var(--t-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","fontWeight":"700","filter":"unset","width":"auto","height":"","filterOld":"drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.36))"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"16px"}}},
content:"--",
unit:"种",
showOverflowTooltip:true, 
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

const activeSelectedArr = global.leftWaterGlobalVariables.controlLevelSelected ? global.leftWaterGlobalVariables.controlLevelSelected.split(',') : [];
const activeItem = global.leftWaterGlobalVariables.controlLevelList.filter(item => activeSelectedArr.includes(item.value));


rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeIndicator', // 消息名称
  data: {
    indicator: index,
    // time: state.monitorTime,
    time:  global.dashboardGlobalVariables.waterTime ,
     selectedControllevel: activeItem
  },
});

rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeMonitorTime', // 消息名称
  data: {
    // time: state.monitorTime, // 时间
        time:  global.dashboardGlobalVariables.waterTime ,
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
const onclick1765509560861_11_0 = () => {
// 执行自定义方法
handleSelectCard(21);
};
const onclick1765509560861_12_0 = () => {
// 执行自定义方法
handleSelectCard(22);
};
const onclick1770116796426 = () => {
// 执行自定义方法
handleSelectCard(3);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"REGION_CODE":"global.REGION_CODE","interfaceId":"50fac64f893b36f1d2fc749fd16ae372"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"REGION_CODE":global.REGION_CODE,"interfaceId":"50fac64f893b36f1d2fc749fd16ae372"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.REGION_CODE,"interfaceId":"50fac64f893b36f1d2fc749fd16ae372"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTime'] = res.data;
                
     if (res?.data?.data) {
  state.monitorTime = res.data.data.year_number;

  apiRegistry.getData.request();

} else {
  state.monitorTime = '--';
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
 getData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"5915a540a6d5d1dfc0a7e1650c42486b","REGION_CODE":"global.REGION_CODE","year_number":"state.monitorTime"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"5915a540a6d5d1dfc0a7e1650c42486b","REGION_CODE":global.REGION_CODE,"year_number":state.monitorTime},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"5915a540a6d5d1dfc0a7e1650c42486b","REGION_CODE":global.REGION_CODE,"year_number":state.monitorTime});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     if (res?.data?.data?.length) {

  res.data.data.forEach(item => {

    state.data[item.wz_type] = item.wz_sl;

  })

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
 getCWQIValueRanking30: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
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
    state.CWQIData.mom_change_rate_state = 'down';
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
    state.CWQIData.yoy_change_rate_state = 'down';
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
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
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
 function handleWindowResize() {
                            setPageScale('t-l-c-aquaticEcologicalStatus', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-aquaticEcologicalStatus', global.appScaleMode, 'normal');
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

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tImageBasex0x6ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x6.default, componentState.tImageBasex0x6?.[state.screenSize]));

 const tImageBasex0x7ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x7.default, componentState.tImageBasex0x7?.[state.screenSize]));

 const tImageBasex0x8ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x8.default, componentState.tImageBasex0x8?.[state.screenSize]));

 const tImageBasex0x9ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x9.default, componentState.tImageBasex0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tTextUnitx0x13ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x13.default, componentState.tTextUnitx0x13?.[state.screenSize]));

 const tTextUnitx0x14ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x14.default, componentState.tTextUnitx0x14?.[state.screenSize]));

 const tTextUnitx0x15ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x15.default, componentState.tTextUnitx0x15?.[state.screenSize]));

 const tRectx0x16ComputedData = computed(() => _.merge({}, componentState.tRectx0x16.default, componentState.tRectx0x16?.[state.screenSize]));

 const tRectx0x17ComputedData = computed(() => _.merge({}, componentState.tRectx0x17.default, componentState.tRectx0x17?.[state.screenSize]));

 const tTextx0x18ComputedData = computed(() => _.merge({}, componentState.tTextx0x18.default, componentState.tTextx0x18?.[state.screenSize]));

 const tTextx0x19ComputedData = computed(() => _.merge({}, componentState.tTextx0x19.default, componentState.tTextx0x19?.[state.screenSize]));

 const tTextCommonx0x20ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x20.default, componentState.tTextCommonx0x20?.[state.screenSize]));

 const tImageBasex0x21ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x21.default, componentState.tImageBasex0x21?.[state.screenSize]));

 const tImageBasex0x22ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x22.default, componentState.tImageBasex0x22?.[state.screenSize]));

 const tTextUnitx0x23ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x23.default, componentState.tTextUnitx0x23?.[state.screenSize]));

 const tTextUnitx0x24ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x24.default, componentState.tTextUnitx0x24?.[state.screenSize]));

 const tTextCommonx0x25ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x25.default, componentState.tTextCommonx0x25?.[state.screenSize]));

 const tImageBasex0x26ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x26.default, componentState.tImageBasex0x26?.[state.screenSize]));

 const tImageBasex0x27ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x27.default, componentState.tImageBasex0x27?.[state.screenSize]));

 const tTextUnitx0x28ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x28.default, componentState.tTextUnitx0x28?.[state.screenSize]));

 const tTextUnitx0x29ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x29.default, componentState.tTextUnitx0x29?.[state.screenSize]));

 const tLinex0x30ComputedData = computed(() => _.merge({}, componentState.tLinex0x30.default, componentState.tLinex0x30?.[state.screenSize]));

 const tTextUnitx0x31ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x31.default, componentState.tTextUnitx0x31?.[state.screenSize]));

 const tTextUnitx0x32ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x32.default, componentState.tTextUnitx0x32?.[state.screenSize]));

 const tTextCommonx0x33ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x33.default, componentState.tTextCommonx0x33?.[state.screenSize]));

 const tRectx0x34ComputedData = computed(() => _.merge({}, componentState.tRectx0x34.default, componentState.tRectx0x34?.[state.screenSize]));

 const tRectx0x35ComputedData = computed(() => _.merge({}, componentState.tRectx0x35.default, componentState.tRectx0x35?.[state.screenSize]));

 const tTextx0x36ComputedData = computed(() => _.merge({}, componentState.tTextx0x36.default, componentState.tTextx0x36?.[state.screenSize]));

 const tTextx0x37ComputedData = computed(() => _.merge({}, componentState.tTextx0x37.default, componentState.tTextx0x37?.[state.screenSize]));

 const tTextx0x38ComputedData = computed(() => _.merge({}, componentState.tTextx0x38.default, componentState.tTextx0x38?.[state.screenSize]));

 const tTextUnitx0x39ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x39.default, componentState.tTextUnitx0x39?.[state.screenSize]));

 const tTextUnitx0x40ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x40.default, componentState.tTextUnitx0x40?.[state.screenSize]));

 const tTextUnitx0x41ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x41.default, componentState.tTextUnitx0x41?.[state.screenSize]));

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
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tTextx0x3ComputedData,
tRectx0x4ComputedData,
tRectx0x5ComputedData,
tImageBasex0x6ComputedData,
tImageBasex0x7ComputedData,
tImageBasex0x8ComputedData,
tImageBasex0x9ComputedData,
tTextx0x10ComputedData,
tTextx0x11ComputedData,
tTextx0x12ComputedData,
tTextUnitx0x13ComputedData,
tTextUnitx0x14ComputedData,
tTextUnitx0x15ComputedData,
tRectx0x16ComputedData,
tRectx0x17ComputedData,
tTextx0x18ComputedData,
tTextx0x19ComputedData,
tTextCommonx0x20ComputedData,
tImageBasex0x21ComputedData,
tImageBasex0x22ComputedData,
tTextUnitx0x23ComputedData,
tTextUnitx0x24ComputedData,
tTextCommonx0x25ComputedData,
tImageBasex0x26ComputedData,
tImageBasex0x27ComputedData,
tTextUnitx0x28ComputedData,
tTextUnitx0x29ComputedData,
tLinex0x30ComputedData,
tTextUnitx0x31ComputedData,
tTextUnitx0x32ComputedData,
tTextCommonx0x33ComputedData,
tRectx0x34ComputedData,
tRectx0x35ComputedData,
tTextx0x36ComputedData,
tTextx0x37ComputedData,
tTextx0x38ComputedData,
tTextUnitx0x39ComputedData,
tTextUnitx0x40ComputedData,
tTextUnitx0x41ComputedData,
onclick1765509560861_11_0,
onclick1770116796426,
onclick1765509560861_12_0,
};
},
};