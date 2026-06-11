window.publicComplaintsComponent = {
template: 
`<div id="t-l-c-publicComplaints" class="t-l-c-publicComplaints" >` +
`<t-rect id="t-rect-96cf.bc1ae79cc" class="publicComplaints-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 14" id="t-image-base-16ea.9e1b915d8" class="publicComplaints-t-image-base-0-1"  :src="tImageBasex0x1ComputedData.src" :fit="tImageBasex0x1ComputedData.fit" :c-style="tImageBasex0x1ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 16" id="t-image-base-b873.32a1a3cfa" class="publicComplaints-t-image-base-0-2"  :src="tImageBasex0x2ComputedData.src" :fit="tImageBasex0x2ComputedData.fit" :c-style="tImageBasex0x2ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 15" id="t-image-base-22f5.7bee58a01" class="publicComplaints-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex !== 16" id="t-image-base-15d6.f3afe6f4" class="publicComplaints-t-image-base-0-4"  :src="tImageBasex0x4ComputedData.src" :fit="tImageBasex0x4ComputedData.fit" :c-style="tImageBasex0x4ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex !== 14" id="t-image-base-4f81.e5868f47c" class="publicComplaints-t-image-base-0-5"  :src="tImageBasex0x5ComputedData.src" :fit="tImageBasex0x5ComputedData.fit" :c-style="tImageBasex0x5ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex !== 15" id="t-image-base-b65b.bf70c4b6" class="publicComplaints-t-image-base-0-6"  :src="tImageBasex0x6ComputedData.src" :fit="tImageBasex0x6ComputedData.fit" :c-style="tImageBasex0x6ComputedData.cStyle">` +
`</t-image-base>` +
`<t-component id="t-component-568d.7cecfab45" class="publicComplaints-t-component-0-7"  :name="tComponentx0x7ComputedData.name" :c-style="tComponentx0x7ComputedData.cStyle" :src="tComponentx0x7ComputedData.src" :component-name="tComponentx0x7ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-ae9f.465359d6e" class="publicComplaints-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-a329.3a6a6bf3c" class="publicComplaints-t-text-0-10"  :label="tTextx0x10ComputedData.label" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-e157.2cb27d379" class="publicComplaints-t-text-0-11"  :label="tTextx0x11ComputedData.label" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-0b76.549a4c496" class="publicComplaints-t-text-0-12"  :label="tTextx0x12ComputedData.label" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle" @click="onclick1769426209881">` +
`</t-text>` +
`<t-text id="t-text-c858.73ebcf77a" class="publicComplaints-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-d60d.4914f962c" class="publicComplaints-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-946f.9e191d07f" class="publicComplaints-t-text-0-15"  :label="tTextx0x15ComputedData.label" :editable="tTextx0x15ComputedData.editable" :c-style="tTextx0x15ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-50b9.226cfc49" class="publicComplaints-t-text-0-16"  :label="tTextx0x16ComputedData.label" :editable="tTextx0x16ComputedData.editable" :c-style="tTextx0x16ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-6e7e.c200ce0ff" class="publicComplaints-t-text-0-17"  :label="tTextx0x17ComputedData.label" :editable="tTextx0x17ComputedData.editable" :c-style="tTextx0x17ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-7177.5e08a62fa" class="publicComplaints-t-text-0-18"  :label="tTextx0x18ComputedData.label" :editable="tTextx0x18ComputedData.editable" :c-style="tTextx0x18ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-cdf8.abe1000b" class="publicComplaints-t-text-0-19"  :label="tTextx0x19ComputedData.label" :editable="tTextx0x19ComputedData.editable" :c-style="tTextx0x19ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-41ff.d151512ad" class="publicComplaints-t-text-0-20"  :label="replaceCssVariables(filterData(state.monitorTime, componentPropBindingMap?.['t-text-41ff.d151512ad']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x20ComputedData.editable" :c-style="tTextx0x20ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-497c.161d872c5" class="publicComplaints-t-text-unit-0-22"  :c-style="tTextUnitx0x22ComputedData.cStyle" :content="replaceCssVariables(filterData(state.cardData.SOURCE1.ROUND3.STATUS_1, componentPropBindingMap?.['t-text-unit-497c.161d872c5']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x22ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x22ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-b23c.67a7a01a2" class="publicComplaints-t-text-unit-0-23"  :c-style="tTextUnitx0x23ComputedData.cStyle" :content="replaceCssVariables(filterData(state.cardData.SOURCE1.ROUND3.TOTAL, componentPropBindingMap?.['t-text-unit-b23c.67a7a01a2']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x23ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x23ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-f583.c462aa34b" class="publicComplaints-t-text-unit-0-24"  :c-style="tTextUnitx0x24ComputedData.cStyle" :content="replaceCssVariables(filterData(state.cardData.SOURCE1.ROUND3.STATUS_2, componentPropBindingMap?.['t-text-unit-f583.c462aa34b']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x24ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x24ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-c378.fb2be8b76" class="publicComplaints-t-text-unit-0-25"  :c-style="tTextUnitx0x25ComputedData.cStyle" :content="replaceCssVariables(getApiData('t-text-unit-c378.fb2be8b76', 'content').value, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x25ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x25ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-b399.244e992d2" class="publicComplaints-t-text-unit-0-26"  :c-style="tTextUnitx0x26ComputedData.cStyle" :content="replaceCssVariables(filterData(state.cardData.SOURCE2.ROUND2.TOTAL, componentPropBindingMap?.['t-text-unit-b399.244e992d2']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x26ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x26ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-e5a2.a685b1c47" class="publicComplaints-t-text-unit-0-27"  :c-style="tTextUnitx0x27ComputedData.cStyle" :content="replaceCssVariables(filterData(state.cardData.SOURCE2.ROUND2.STATUS_1, componentPropBindingMap?.['t-text-unit-e5a2.a685b1c47']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x27ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x27ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-53ec.6593a703e" class="publicComplaints-t-text-unit-0-28"  :c-style="tTextUnitx0x28ComputedData.cStyle" :content="replaceCssVariables(getApiData('t-text-unit-53ec.6593a703e', 'content').value, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x28ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x28ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-57c7.028c207a2" class="publicComplaints-t-text-unit-0-29"  :c-style="tTextUnitx0x29ComputedData.cStyle" :content="replaceCssVariables(getApiData('t-text-unit-57c7.028c207a2', 'content').value, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x29ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x29ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-6a46.eebcf0485" class="publicComplaints-t-text-unit-0-30"  :c-style="tTextUnitx0x30ComputedData.cStyle" :content="replaceCssVariables(getApiData('t-text-unit-6a46.eebcf0485', 'content').value, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x30ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x30ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-0f21.d7e8c3b7c" class="publicComplaints-t-text-unit-0-31"  :c-style="tTextUnitx0x31ComputedData.cStyle" :content="replaceCssVariables(filterData(state.cardData.SOURCE1.ROUND3.STATUS_3, componentPropBindingMap?.['t-text-unit-0f21.d7e8c3b7c']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x31ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x31ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-196d.f50f2ca6e" class="publicComplaints-t-text-unit-0-32"  :c-style="tTextUnitx0x32ComputedData.cStyle" :content="replaceCssVariables(filterData(state.cardData.SOURCE2.ROUND2.STATUS_3, componentPropBindingMap?.['t-text-unit-196d.f50f2ca6e']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x32ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x32ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text id="t-text-06d8.e7d863be1" class="publicComplaints-t-text-0-33"  :label="tTextx0x33ComputedData.label" :editable="tTextx0x33ComputedData.editable" :c-style="tTextx0x33ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-69fa.991666b61" class="publicComplaints-t-text-0-34"  :label="tTextx0x34ComputedData.label" :editable="tTextx0x34ComputedData.editable" :c-style="tTextx0x34ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-22fb.debf19cda" class="publicComplaints-t-rect-0-35"  :tip="tRectx0x35ComputedData.tip" :label="tRectx0x35ComputedData.label" :active="tRectx0x35ComputedData.active" :c-style="tRectx0x35ComputedData.cStyle" @click="onclick1763615028528_8_0">` +
`</t-rect>` +
`<t-rect id="t-rect-aa88.a72e421b" class="publicComplaints-t-rect-0-36"  :tip="tRectx0x36ComputedData.tip" :label="tRectx0x36ComputedData.label" :active="tRectx0x36ComputedData.active" :c-style="tRectx0x36ComputedData.cStyle" @click="onclick1739255126445">` +
`</t-rect>` +
`<t-rect id="t-rect-eb3a.10016d38" class="publicComplaints-t-rect-0-37"  :tip="tRectx0x37ComputedData.tip" :label="tRectx0x37ComputedData.label" :active="tRectx0x37ComputedData.active" :c-style="tRectx0x37ComputedData.cStyle" @click="onclick1739339618938_0_0">` +
`</t-rect>` +
`<t-text id="t-text-1fea.be01e4b26" class="publicComplaints-t-text-0-38"  :label="tTextx0x38ComputedData.label" :editable="tTextx0x38ComputedData.editable" :c-style="tTextx0x38ComputedData.cStyle" @click="onclick1763615028528_9_0">` +
`</t-text>` +
`<t-text id="t-text-86e9.6e4bda798" class="publicComplaints-t-text-0-39"  :label="tTextx0x39ComputedData.label" :editable="tTextx0x39ComputedData.editable" :c-style="tTextx0x39ComputedData.cStyle" @click="onclick1739254824900">` +
`</t-text>` +
`<t-text id="t-text-e07b.3eb482e52" class="publicComplaints-t-text-0-40"  :label="tTextx0x40ComputedData.label" :editable="tTextx0x40ComputedData.editable" :c-style="tTextx0x40ComputedData.cStyle" @click="onclick1739339618938_0_0">` +
`</t-text>` +
`<t-rect id="t-rect-53ae.97c4df762" class="publicComplaints-t-rect-0-41"  :tip="tRectx0x41ComputedData.tip" :label="tRectx0x41ComputedData.label" :active="tRectx0x41ComputedData.active" :c-style="tRectx0x41ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-bee0.a3f17a825" class="publicComplaints-t-rect-0-42"  :tip="tRectx0x42ComputedData.tip" :label="tRectx0x42ComputedData.label" :active="tRectx0x42ComputedData.active" :c-style="tRectx0x42ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-ef0a.4a84184a4" class="publicComplaints-t-rect-0-43"  :tip="tRectx0x43ComputedData.tip" :label="tRectx0x43ComputedData.label" :active="tRectx0x43ComputedData.active" :c-style="tRectx0x43ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-a454.1fb60376a" class="publicComplaints-t-rect-0-44"  :tip="tRectx0x44ComputedData.tip" :label="tRectx0x44ComputedData.label" :active="tRectx0x44ComputedData.active" :c-style="tRectx0x44ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-00e3.1a7be4c89" class="publicComplaints-t-rect-0-45"  :tip="tRectx0x45ComputedData.tip" :label="tRectx0x45ComputedData.label" :active="tRectx0x45ComputedData.active" :c-style="tRectx0x45ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-0271.cbde7f12b" class="publicComplaints-t-rect-0-46"  :tip="tRectx0x46ComputedData.tip" :label="tRectx0x46ComputedData.label" :active="tRectx0x46ComputedData.active" :c-style="tRectx0x46ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-cda0.5ce133d1e" class="publicComplaints-t-rect-0-47"  :tip="tRectx0x47ComputedData.tip" :label="tRectx0x47ComputedData.label" :active="tRectx0x47ComputedData.active" :c-style="tRectx0x47ComputedData.cStyle">` +
`</t-rect>` +
`<t-line id="t-line-031a.02a58aeca" class="publicComplaints-t-line-0-48"  :c-style="tLinex0x48ComputedData.cStyle">` +
`</t-line>` +
`<t-line id="t-line-75e1.08382aff4" class="publicComplaints-t-line-0-49"  :c-style="tLinex0x49ComputedData.cStyle">` +
`</t-line>` +
`<t-line id="t-line-18c9.787d6bf68" class="publicComplaints-t-line-0-50"  :c-style="tLinex0x50ComputedData.cStyle">` +
`</t-line>` +
`<t-rect id="t-rect-6756.900ad3a05" class="publicComplaints-t-rect-0-51"  :tip="tRectx0x51ComputedData.tip" :label="tRectx0x51ComputedData.label" :active="tRectx0x51ComputedData.active" :c-style="tRectx0x51ComputedData.cStyle" @click="onclick1765679428262">` +
`</t-rect>` +
`<t-rect id="t-rect-3b48.08c67629c" class="publicComplaints-t-rect-0-52"  :tip="tRectx0x52ComputedData.tip" :label="tRectx0x52ComputedData.label" :active="tRectx0x52ComputedData.active" :c-style="tRectx0x52ComputedData.cStyle">` +
`</t-rect>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-96cf.bc1ae79cc":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-16ea.9e1b915d8":{"attributeName":"tImageBasex0x1","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-b873.32a1a3cfa":{"attributeName":"tImageBasex0x2","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-22f5.7bee58a01":{"attributeName":"tImageBasex0x3","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-15d6.f3afe6f4":{"attributeName":"tImageBasex0x4","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-4f81.e5868f47c":{"attributeName":"tImageBasex0x5","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-b65b.bf70c4b6":{"attributeName":"tImageBasex0x6","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-component-568d.7cecfab45":{"attributeName":"tComponentx0x7","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-e09b.180cc1ba6":{"attributeName":"tTextx0x8"},"t-text-ae9f.465359d6e":{"attributeName":"tTextx0x9","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a329.3a6a6bf3c":{"attributeName":"tTextx0x10","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e157.2cb27d379":{"attributeName":"tTextx0x11","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-0b76.549a4c496":{"attributeName":"tTextx0x12","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-c858.73ebcf77a":{"attributeName":"tTextx0x13","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-d60d.4914f962c":{"attributeName":"tTextx0x14","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-946f.9e191d07f":{"attributeName":"tTextx0x15","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-50b9.226cfc49":{"attributeName":"tTextx0x16","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6e7e.c200ce0ff":{"attributeName":"tTextx0x17","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-7177.5e08a62fa":{"attributeName":"tTextx0x18","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-cdf8.abe1000b":{"attributeName":"tTextx0x19","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-41ff.d151512ad":{"attributeName":"tTextx0x20","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-96a1.a2d02dc28":{"attributeName":"tTextUnitx0x21"},"t-text-unit-497c.161d872c5":{"attributeName":"tTextUnitx0x22","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-b23c.67a7a01a2":{"attributeName":"tTextUnitx0x23","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-f583.c462aa34b":{"attributeName":"tTextUnitx0x24","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-c378.fb2be8b76":{"attributeName":"tTextUnitx0x25","cStyle":{"filters":[]},"content":{"filters":[],"name":"getDailyPetitions","id":"2aea83e2784d41d795857e7e4bf0c3f4","returnDataPath":"data[0].finish_number","requestUrl":"global.serviceBaseUrl-global.serviceBasePath","requestParams":{"POLLUTIONTG":"","START_TIME":"state.dailyPetitionsStartTime","interfaceId":"25503e6f2abe171ed4f049f1ee0eab46","END_TIME":"state.dailyPetitionsEndTime","REGION_PATH":"global.REGION_CODE"}},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-b399.244e992d2":{"attributeName":"tTextUnitx0x26","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-e5a2.a685b1c47":{"attributeName":"tTextUnitx0x27","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-53ec.6593a703e":{"attributeName":"tTextUnitx0x28","cStyle":{"filters":[]},"content":{"filters":[],"name":"getDailyPetitions","id":"2aea83e2784d41d795857e7e4bf0c3f4","returnDataPath":"data[0].total","requestUrl":"global.serviceBaseUrl-global.serviceBasePath","requestParams":{"POLLUTIONTG":"","START_TIME":"state.dailyPetitionsStartTime","interfaceId":"25503e6f2abe171ed4f049f1ee0eab46","END_TIME":"state.dailyPetitionsEndTime","REGION_PATH":"global.REGION_CODE"}},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-57c7.028c207a2":{"attributeName":"tTextUnitx0x29","cStyle":{"filters":[]},"content":{"filters":[],"name":"getDailyPetitions","id":"2aea83e2784d41d795857e7e4bf0c3f4","returnDataPath":"data[0].unFinish_number","requestUrl":"global.serviceBaseUrl-global.serviceBasePath","requestParams":{"POLLUTIONTG":"","START_TIME":"state.dailyPetitionsStartTime","interfaceId":"25503e6f2abe171ed4f049f1ee0eab46","END_TIME":"state.dailyPetitionsEndTime","REGION_PATH":"global.REGION_CODE"}},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-6a46.eebcf0485":{"attributeName":"tTextUnitx0x30","cStyle":{"filters":[]},"content":{"filters":[],"name":"getDailyPetitions","id":"2aea83e2784d41d795857e7e4bf0c3f4","returnDataPath":"data[0].repeat_enter_number","requestUrl":"global.serviceBaseUrl-global.serviceBasePath","requestParams":{"POLLUTIONTG":"","START_TIME":"state.dailyPetitionsStartTime","interfaceId":"25503e6f2abe171ed4f049f1ee0eab46","END_TIME":"state.dailyPetitionsEndTime","REGION_PATH":"global.REGION_CODE"}},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-0f21.d7e8c3b7c":{"attributeName":"tTextUnitx0x31","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-196d.f50f2ca6e":{"attributeName":"tTextUnitx0x32","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-06d8.e7d863be1":{"attributeName":"tTextx0x33","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-69fa.991666b61":{"attributeName":"tTextx0x34","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-22fb.debf19cda":{"attributeName":"tRectx0x35","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-aa88.a72e421b":{"attributeName":"tRectx0x36","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-eb3a.10016d38":{"attributeName":"tRectx0x37","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-1fea.be01e4b26":{"attributeName":"tTextx0x38","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-86e9.6e4bda798":{"attributeName":"tTextx0x39","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e07b.3eb482e52":{"attributeName":"tTextx0x40","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-53ae.97c4df762":{"attributeName":"tRectx0x41","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-bee0.a3f17a825":{"attributeName":"tRectx0x42","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-ef0a.4a84184a4":{"attributeName":"tRectx0x43","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-a454.1fb60376a":{"attributeName":"tRectx0x44","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-00e3.1a7be4c89":{"attributeName":"tRectx0x45","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-0271.cbde7f12b":{"attributeName":"tRectx0x46","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-cda0.5ce133d1e":{"attributeName":"tRectx0x47","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-line-031a.02a58aeca":{"attributeName":"tLinex0x48","cStyle":{"filters":[]}},"t-line-75e1.08382aff4":{"attributeName":"tLinex0x49","cStyle":{"filters":[]}},"t-line-18c9.787d6bf68":{"attributeName":"tLinex0x50","cStyle":{"filters":[]}},"t-rect-6756.900ad3a05":{"attributeName":"tRectx0x51","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-3b48.08c67629c":{"attributeName":"tRectx0x52","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   dailyPetitionsStartTime: "",
   dailyPetitionsEndTime: "",
   dailyPetitionsTime: [],
   cardData: {"SOURCE1":{"ROUND1":{"TOTAL":"--","STATUS_0":"--","STATUS_1":"--","STATUS_2":"--","STATUS_3":"--","STATUS_4":"--"},"ROUND2":{"TOTAL":"--","STATUS_0":"--","STATUS_1":"--","STATUS_2":"--","STATUS_3":"--","STATUS_4":"--"},"ROUND3":{"TOTAL":"--","STATUS_0":"--","STATUS_1":"--","STATUS_2":"--","STATUS_3":"--","STATUS_4":"--"}},"SOURCE2":{"ROUND1":{"TOTAL":"--","STATUS_0":"--","STATUS_1":"--","STATUS_2":"--","STATUS_3":"--","STATUS_4":"--"},"ROUND2":{"TOTAL":"--","STATUS_0":"--","STATUS_1":"--","STATUS_2":"--","STATUS_3":"--","STATUS_4":"--"}},"SOURCE3":{"TOTAL":"--","STATUS_0":"--","STATUS_1":"--","STATUS_2":"--","STATUS_3":"--","STATUS_4":"--","STATUS_OVERDUE":"--","STATUS_REPEAT":"--"}},
   monitorTime: "2025-09-01",
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
            default: {"width":"400px","height":"363px","position":"unset","left":"0px","top":"48px","backgroundColor":"var(--t-card-bgc)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"363px","position":"unset","left":"0px","top":"48px","backgroundColor":"var(--t-card-bgc)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tImageBasex0x1: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"1px","top":"58px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"1px","top":"58px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x2: {
defaultStyle: {
            default: {"width":"400px","height":"165px","position":"unset","left":"1px","top":"284px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-21/517a293915f04126bcfa06a81790dffb.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"165px","position":"unset","left":"1px","top":"284px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"1px","top":"172px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"1px","top":"172px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x4: {
defaultStyle: {
            default: {"width":"400px","height":"167px","position":"unset","left":"0px","top":"283px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-20/45387a05eb794db698a65fab5c8b0cef.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"167px","position":"unset","left":"0px","top":"283px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-20/45387a05eb794db698a65fab5c8b0cef.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""}}}, 
 },
},
tImageBasex0x5: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"58px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto"},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"58px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto"}}}, 
 },
},
tImageBasex0x6: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"171px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"171px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""}}}, 
 },
},
tComponentx0x7: {
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
tTextx0x9: {
defaultStyle: {
            default: {"width":"72px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"9px","top":"106px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
label:"信访件总数",
editable:false,
cStyle:{"wrapper":{"default":{"width":"72px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"9px","top":"106px","textAlign":"center","animationName":""}}}, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"97px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"16px","top":"216px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
label:"信访件总数",
editable:false,
cStyle:{"wrapper":{"default":{"width":"97px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"16px","top":"216px","textAlign":"center","animationName":""}}}, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"72px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"9px","top":"335px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
label:"投诉件总数",
editable:false,
cStyle:{"wrapper":{"default":{"width":"72px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"9px","top":"335px","textAlign":"center","animationName":""}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"111px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"88px","top":"395px","textAlign":"center","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
label:"重复被投诉企业",
editable:false,
cStyle:{"wrapper":{"default":{"width":"111px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"88px","top":"395px","textAlign":"center","animationName":"","cursor":"pointer"}}}, 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"107px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"303px","top":"108px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"阶段性办结",
editable:false,
cStyle:{"wrapper":{"default":{"width":"107px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"303px","top":"108px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"107px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"275px","top":"218px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"未办结",
editable:false,
cStyle:{"wrapper":{"default":{"width":"107px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"275px","top":"218px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x15: {
defaultStyle: {
            default: {"width":"82px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"88px","top":"107px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"已验收销号",
editable:false,
cStyle:{"wrapper":{"default":{"width":"82px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"88px","top":"107px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x16: {
defaultStyle: {
            default: {"width":"119px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"186px","top":"108px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"已办结验收中",
editable:false,
cStyle:{"wrapper":{"default":{"width":"119px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"186px","top":"108px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x17: {
defaultStyle: {
            default: {"width":"82px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"155px","top":"337px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"已办结",
editable:false,
cStyle:{"wrapper":{"default":{"width":"82px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"155px","top":"337px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x18: {
defaultStyle: {
            default: {"width":"82px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"157px","top":"218px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"已办结",
editable:false,
cStyle:{"wrapper":{"default":{"width":"82px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"157px","top":"218px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x19: {
defaultStyle: {
            default: {"width":"85px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"292px","top":"337px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"办理中",
editable:false,
cStyle:{"wrapper":{"default":{"width":"85px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"292px","top":"337px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x20: {
defaultStyle: {
            default: {"width":"88px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"305px","top":"22px","animationName":""},
            
            },
 default: { 
 
label:"2025-09-01",
editable:false,
cStyle:{"wrapper":{"default":{"width":"88px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"305px","top":"22px","animationName":""}}}, 
 },
},
tTextUnitx0x22: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"96px","top":"125px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"96px","top":"125px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-green)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"件",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x23: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"14px","top":"126px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"14px","top":"126px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"件",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x24: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"215px","top":"126px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"215px","top":"126px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-blue)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"件",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x25: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"163px","top":"355px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"163px","top":"355px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-green)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"1736",
unit:"件",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x26: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"34px","top":"236px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"34px","top":"236px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"件",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x27: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"165px","top":"236px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"165px","top":"236px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-green)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"件",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x28: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"14px","top":"355px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"14px","top":"355px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"1740",
unit:"件",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x29: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"303px","top":"355px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"303px","top":"355px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-blue)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"4",
unit:"件",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x30: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"113px","top":"416px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"113px","top":"416px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-red)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:199,
unit:"个",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x31: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"323px","top":"126px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"323px","top":"126px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-green)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"件",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x32: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"295px","top":"236px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"295px","top":"236px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-yellow)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"件",
showOverflowTooltip:true, 
 },
},
tTextx0x33: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"272px","top":"22px","animationName":""},
            
            },
 default: { 
 
label:"截至",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"272px","top":"22px","animationName":""}}}, 
 },
},
tTextx0x34: {
defaultStyle: {
            default: {"width":"118px","height":"20px","color":"#fff","fontSize":"20px","fontFamily":"方正综艺","position":"unset","left":"49px","top":"20px"},
            
            },
 default: { 
 
label:"信访投诉",
editable:false,
cStyle:{"wrapper":{"default":{"width":"118px","height":"20px","color":"#fff","fontSize":"20px","fontFamily":"方正综艺","position":"unset","left":"49px","top":"20px"}}}, 
 },
},
tRectx0x35: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-card7)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"292px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-card7)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"292px","cursor":"pointer","animationName":""}}}, 
 },
},
tRectx0x36: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-card7)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"64px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-card7)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"64px","cursor":"pointer"}}}, 
 },
},
tRectx0x37: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-card8)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"178px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-card8)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"178px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x38: {
defaultStyle: {
            default: {"width":"325px","height":"16px","color":"var(--t-text) ","position":"unset","left":"49px","top":"299px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"日常信访件",
editable:false,
cStyle:{"wrapper":{"default":{"width":"325px","height":"16px","color":"var(--t-text) ","position":"unset","left":"49px","top":"299px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x39: {
defaultStyle: {
            default: {"width":"325px","height":"16px","color":"var(--t-text) ","position":"unset","left":"49px","top":"71px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer"},
            
            },
 default: { 
 
label:"第三轮中央生态环境保护督察信访件进展",
editable:false,
cStyle:{"wrapper":{"default":{"width":"325px","height":"16px","color":"var(--t-text) ","position":"unset","left":"49px","top":"71px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer"}}}, 
 },
},
tTextx0x40: {
defaultStyle: {
            default: {"width":"325px","height":"16px","color":"var(--t-text) ","position":"unset","left":"50px","top":"185px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"第二轮省生态环境保护督察信访件进展",
editable:false,
cStyle:{"wrapper":{"default":{"width":"325px","height":"16px","color":"var(--t-text) ","position":"unset","left":"50px","top":"185px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""}}}, 
 },
},
tRectx0x41: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"182px","top":"110px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"182px","top":"110px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x42: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"84px","top":"107px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"84px","top":"107px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x43: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"270px","top":"339px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"270px","top":"339px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x44: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"132px","top":"217px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"132px","top":"217px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x45: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"124px","top":"336px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"124px","top":"336px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x46: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"295px","top":"108px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"295px","top":"108px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x47: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"265px","top":"218px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"265px","top":"218px","position":"unset","animationName":""}}}, 
 },
},
tLinex0x48: {
defaultStyle: {
            default: {"width":"368px","height":"1px","position":"unset","left":"17px","top":"153px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"368px","height":"1px","position":"unset","left":"17px","top":"153px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tLinex0x49: {
defaultStyle: {
            default: {"width":"368px","height":"1px","position":"unset","left":"17px","top":"277px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"368px","height":"1px","position":"unset","left":"17px","top":"277px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tLinex0x50: {
defaultStyle: {
            default: {"width":"368px","height":"1px","position":"unset","left":"17px","top":"383px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"368px","height":"1px","position":"unset","left":"17px","top":"383px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x51: {
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
tRectx0x52: {
defaultStyle: {
            default: {"width":"25px","height":"34px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","position":"unset","left":"129px","top":"15px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"25px","height":"34px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","position":"unset","left":"129px","top":"15px","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const handlSelectCard = (index,SOURCE,ROUND) => {
if (typeof index === "string") {
  index = Number(index);
}
global.isLoop = false;
global.isSelectedBg = index;
global.currentIndex = index + 1;

// 全局变量中驾驶舱专题变量中记录了选择的指标索引 从1开始
global.dashboardGlobalVariables.selectedIndicatorIndex = index;
// 全局变量中驾驶舱专题变量中记录了当前的模块 用于地图下方弹窗显示使用
global.dashboardGlobalVariables.activeTopic = 'complaints';
// global.dashboardGlobalVariables.activeTopic = 'supervision';
global.dashboardGlobalVariables.supervision.layerSwitch = false;
global.dashboardGlobalVariables.supervision.layerSwitchVisible = false;
global.dashboardGlobalVariables.supervision.PROBLEM_SOURCE = SOURCE;
global.dashboardGlobalVariables.supervision.ROUND_NO = ROUND || '';

// 添加指标图层
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeIndicator', // 消息名称
  data: {
    indicator: index,
    time: state.monitorTime,
  },
});

// 修改监测时间 重新添加图层
// rootData.rootSocket.emit('message', {
//   room: global.socketRoom, // 房间号
//   type: 'changeMonitorTime', // 消息名称
//   data: {
//     time: state.monitorTime,
//   },
// });

// 修改监测时间 重新添加图层
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeMonitorTime', // 消息名称
  data: {
    START_TIME: state.dailyPetitionsTime[0],
    END_TIME: state.dailyPetitionsTime[1],
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

// 隐藏问题清单中打开的图层
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'setProblemStatus',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      visible: false,
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

// 日常信访点击时，显示信访件弹窗
if (index === 16) {
  // 创建弹窗
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'createDialog',  // 消息类型名称
      data: {
        data: {
          headerComName: "",
          contentComName: "dailyComplaintPopupComponent",
          maxWidth: "1600px",
          maxHeight: "930px",
          minWidth: "1000px",
          minHeight: "500px",
          isScalse: false,
          title: "日常信访"
        }
      }
    }
  );
}

};
const openPop = () => {

global.dashboardGlobalVariables.dailyComplaint.startTime = state.dailyPetitionsStartTime;
global.dashboardGlobalVariables.dailyComplaint.endTime = state.dailyPetitionsEndTime;
// 创建弹窗
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'createDialog',  // 消息类型名称
    data: {
      data: {
        headerComName: "",
        contentComName: "repeatComplaintObjPopComponent",
        maxWidth: "1600px",
        maxHeight: "930px",
        minWidth: "1000px",
        minHeight: "500px",
        isScalse: false,
        title: "重复投诉对象"
      }
    }
  }
);
};
const onclick1763615028528_8_0 = () => {
// 执行自定义方法
handlSelectCard("16","3",0);
};
const onclick1739255126445 = () => {
// 执行自定义方法
handlSelectCard("14","1",3);
};
const onclick1739339618938_0_0 = () => {
// 执行自定义方法
handlSelectCard("15","2",2);
};
const onclick1763615028528_9_0 = () => {
// 执行自定义方法
handlSelectCard("16","3",0);
};
const onclick1739254824900 = () => {
// 执行自定义方法
handlSelectCard("14","1",3);
};
const onclick1765679428262 = () => {
// 执行自定义方法
dashboardGlobalFunctions.linkTo("petition");
};
const onclick1769426209881 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'supervisorPopName',
                    value:'',
                    data: {
                      supervisorPopName: ''
                    },
                  });
// 执行自定义方法
openPop();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getDailyPetitions: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [{"componentId":"t-text-unit-96a1.a2d02dc28","componentName":"带单位自动撑开的文本-t-text-unit","dataRefId":"bc3945c267c145a189d8c65e0b2fd33b","datasourceId":"2aea83e2784d41d795857e7e4bf0c3f4","datasourceName":"getDailyPetitions","pageId":"61ba95dcd2f94a35806541a444108966"},{"componentId":"t-text-unit-c378.fb2be8b76","componentName":"带单位自动撑开的文本-t-text-unit","dataRefId":"3a2557ccf6d444ddbd473d57b8d36fbd","datasourceId":"2aea83e2784d41d795857e7e4bf0c3f4","datasourceName":"getDailyPetitions","pageId":"61ba95dcd2f94a35806541a444108966"},{"componentId":"t-text-unit-53ec.6593a703e","componentName":"带单位自动撑开的文本-t-text-unit","dataRefId":"f75396c81cd045c0adbfb7656a297f18","datasourceId":"2aea83e2784d41d795857e7e4bf0c3f4","datasourceName":"getDailyPetitions","pageId":"61ba95dcd2f94a35806541a444108966"},{"componentId":"t-text-unit-57c7.028c207a2","componentName":"带单位自动撑开的文本-t-text-unit","dataRefId":"828730c5831041d78eaf4edd58e55683","datasourceId":"2aea83e2784d41d795857e7e4bf0c3f4","datasourceName":"getDailyPetitions","pageId":"61ba95dcd2f94a35806541a444108966"},{"componentId":"t-text-unit-6a46.eebcf0485","componentName":"带单位自动撑开的文本-t-text-unit","dataRefId":"164cacc9f2d34e63880ee4182728cc5a","datasourceId":"2aea83e2784d41d795857e7e4bf0c3f4","datasourceName":"getDailyPetitions","pageId":"61ba95dcd2f94a35806541a444108966"}], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"POLLUTIONTG":"","START_TIME":"state.dailyPetitionsStartTime","interfaceId":"25503e6f2abe171ed4f049f1ee0eab46","END_TIME":"state.dailyPetitionsEndTime","REGION_PATH":"global.REGION_CODE"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"POLLUTIONTG":"","START_TIME":state.dailyPetitionsStartTime,"interfaceId":"25503e6f2abe171ed4f049f1ee0eab46","END_TIME":state.dailyPetitionsEndTime,"REGION_PATH":global.REGION_CODE},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"POLLUTIONTG":"","START_TIME":state.dailyPetitionsStartTime,"interfaceId":"25503e6f2abe171ed4f049f1ee0eab46","END_TIME":state.dailyPetitionsEndTime,"REGION_PATH":global.REGION_CODE});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDailyPetitions'] = res.data;
                
     
const cardInfo = {
  // 央督
  SOURCE1: {
    // 第2轮
    ROUND1: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--',
      STATUS_2: '--',
      STATUS_3: '--',
    },
    // 第2轮
    ROUND2: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--',
      STATUS_2: '--',
      STATUS_3: '--',
    },
    // 第3轮
    ROUND3: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--',
      STATUS_2: '--',
      STATUS_3: '--',
    }
  },
  // 省督
  SOURCE2: {
    // 第1轮
    ROUND1: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--',
      STATUS_2: '--',
      STATUS_3: '--',
    },
    // 第2轮
    ROUND2: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--',
      STATUS_2: '--',
      STATUS_3: '--',
    }
  },
  // 体检问题
  SOURCE3: {
    TOTAL: '--',
    STATUS_0: '--',
    STATUS_1: '--',
    STATUS_2: '--',
    STATUS_3: '--',
    STATUS_4: '--',
  }
}

if (res?.data?.data && res?.data?.data.length > 0) {
  const { data } = res?.data;
  // SOURCE  问题来源（1：央督，2：省督,3：体检问题） 
  // ROUND  轮次，对于央督有1、2、3对于省督只有1、2，对于体检无轮次之分
  // STATUS_  完成状态(问题来源于央督、省督：0未完成，1已完成；问题来源于体检问题：2未分办，3已办结，4正在办理)

  data.forEach((item) => {
    const { SOURCE, ROUND } = item;
    if (Number(SOURCE) !== NaN && Number(SOURCE) <= 3) {
      if (SOURCE === '3') {
        state.cardData.SOURCE3 = {
          ...item,
        }
      } else if (SOURCE && ROUND) {
        state.cardData[`SOURCE${SOURCE}`][`ROUND${ROUND}`] = {
          ...item,
        }
      }
    }
  });
}

console.log(cardInfo)

// state.cardData = cardInfo;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // global.constructTime = '--';
      reject(error);
    });
  });
},
              },
// 接口函数
 getMonitorTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"SOURCE":"","STATUS":"","REGION_CODE":"global.REGION_CODE","interfaceId":"be6b9c07cd9a75ed2a555d6cc6af02b7"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"SOURCE":"","STATUS":"","REGION_CODE":global.REGION_CODE,"interfaceId":"be6b9c07cd9a75ed2a555d6cc6af02b7"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"SOURCE":"","STATUS":"","REGION_CODE":global.REGION_CODE,"interfaceId":"be6b9c07cd9a75ed2a555d6cc6af02b7"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitorTime'] = res.data;
                
     state.monitorTime = res?.data?.data?.[0]?.MAX_TIME || '';

apiRegistry.getData.request();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getDailyPetitionsTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"368ff73842f2d742497fc10fcb5e194f"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"368ff73842f2d742497fc10fcb5e194f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"368ff73842f2d742497fc10fcb5e194f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDailyPetitionsTime'] = res.data;
                
     
if (res?.data?.data) {
  const { start_time, end_time } = res?.data?.data;
  state.dailyPetitionsTime = [start_time, end_time];
  state.dailyPetitionsStartTime = start_time;
  state.dailyPetitionsEndTime = end_time;
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"pageSize":"100","interfaceId":"ea63d7a501e991d3f6b7971c6c7bba9e","END_TIME":"state.monitorTime","REGION_CODE":"global.REGION_CODE"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"pageSize":"100","interfaceId":"ea63d7a501e991d3f6b7971c6c7bba9e","END_TIME":state.monitorTime,"REGION_CODE":global.REGION_CODE},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"pageSize":"100","interfaceId":"ea63d7a501e991d3f6b7971c6c7bba9e","END_TIME":state.monitorTime,"REGION_CODE":global.REGION_CODE});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     
const cardInfo = {
  // 央督
  SOURCE1: {
    // 第2轮
    ROUND1: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--',
      STATUS_2: '--',
      STATUS_3: '--',
    },
    // 第2轮
    ROUND2: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--',
      STATUS_2: '--',
      STATUS_3: '--',
    },
    // 第3轮
    ROUND3: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--',
      STATUS_2: '--',
      STATUS_3: '--',
    }
  },
  // 省督
  SOURCE2: {
    // 第1轮
    ROUND1: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--',
      STATUS_2: '--',
      STATUS_3: '--',
    },
    // 第2轮
    ROUND2: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--',
      STATUS_2: '--',
      STATUS_3: '--',
    }
  },
  // 体检问题
  SOURCE3: {
    TOTAL: '--',
    STATUS_0: '--',
    STATUS_1: '--',
    STATUS_2: '--',
    STATUS_3: '--',
    STATUS_4: '--',
  }
}

if (res?.data?.data && res?.data?.data.length > 0) {
  const { data } = res?.data;
  // SOURCE  问题来源（1：央督，2：省督,3：体检问题） 
  // ROUND  轮次，对于央督有1、2、3对于省督只有1、2，对于体检无轮次之分
  // STATUS_  完成状态(问题来源于央督、省督：0未完成，1已完成；问题来源于体检问题：2未分办，3已办结，4正在办理)

  data.forEach((item) => {
    const { SOURCE, ROUND } = item;
    if (Number(SOURCE) !== NaN && Number(SOURCE) <= 3) {
      if (SOURCE === '3') {
        state.cardData.SOURCE3 = {
          ...item,
        }
      } else if (SOURCE && ROUND) {
        state.cardData[`SOURCE${SOURCE}`][`ROUND${ROUND}`] = {
          ...item,
        }
      }
    }
  });
}

console.log(cardInfo)

// state.cardData = cardInfo;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // global.constructTime = '--';
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [state.dailyPetitionsStartTime], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getDailyPetitions', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-publicComplaints', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-publicComplaints', global.appScaleMode, 'normal');
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

 const tImageBasex0x5ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x5.default, componentState.tImageBasex0x5?.[state.screenSize]));

 const tImageBasex0x6ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x6.default, componentState.tImageBasex0x6?.[state.screenSize]));

 const tComponentx0x7ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7.default, componentState.tComponentx0x7?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tTextx0x15ComputedData = computed(() => _.merge({}, componentState.tTextx0x15.default, componentState.tTextx0x15?.[state.screenSize]));

 const tTextx0x16ComputedData = computed(() => _.merge({}, componentState.tTextx0x16.default, componentState.tTextx0x16?.[state.screenSize]));

 const tTextx0x17ComputedData = computed(() => _.merge({}, componentState.tTextx0x17.default, componentState.tTextx0x17?.[state.screenSize]));

 const tTextx0x18ComputedData = computed(() => _.merge({}, componentState.tTextx0x18.default, componentState.tTextx0x18?.[state.screenSize]));

 const tTextx0x19ComputedData = computed(() => _.merge({}, componentState.tTextx0x19.default, componentState.tTextx0x19?.[state.screenSize]));

 const tTextx0x20ComputedData = computed(() => _.merge({}, componentState.tTextx0x20.default, componentState.tTextx0x20?.[state.screenSize]));

 const tTextUnitx0x22ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x22.default, componentState.tTextUnitx0x22?.[state.screenSize]));

 const tTextUnitx0x23ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x23.default, componentState.tTextUnitx0x23?.[state.screenSize]));

 const tTextUnitx0x24ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x24.default, componentState.tTextUnitx0x24?.[state.screenSize]));

 const tTextUnitx0x25ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x25.default, componentState.tTextUnitx0x25?.[state.screenSize]));

 const tTextUnitx0x26ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x26.default, componentState.tTextUnitx0x26?.[state.screenSize]));

 const tTextUnitx0x27ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x27.default, componentState.tTextUnitx0x27?.[state.screenSize]));

 const tTextUnitx0x28ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x28.default, componentState.tTextUnitx0x28?.[state.screenSize]));

 const tTextUnitx0x29ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x29.default, componentState.tTextUnitx0x29?.[state.screenSize]));

 const tTextUnitx0x30ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x30.default, componentState.tTextUnitx0x30?.[state.screenSize]));

 const tTextUnitx0x31ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x31.default, componentState.tTextUnitx0x31?.[state.screenSize]));

 const tTextUnitx0x32ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x32.default, componentState.tTextUnitx0x32?.[state.screenSize]));

 const tTextx0x33ComputedData = computed(() => _.merge({}, componentState.tTextx0x33.default, componentState.tTextx0x33?.[state.screenSize]));

 const tTextx0x34ComputedData = computed(() => _.merge({}, componentState.tTextx0x34.default, componentState.tTextx0x34?.[state.screenSize]));

 const tRectx0x35ComputedData = computed(() => _.merge({}, componentState.tRectx0x35.default, componentState.tRectx0x35?.[state.screenSize]));

 const tRectx0x36ComputedData = computed(() => _.merge({}, componentState.tRectx0x36.default, componentState.tRectx0x36?.[state.screenSize]));

 const tRectx0x37ComputedData = computed(() => _.merge({}, componentState.tRectx0x37.default, componentState.tRectx0x37?.[state.screenSize]));

 const tTextx0x38ComputedData = computed(() => _.merge({}, componentState.tTextx0x38.default, componentState.tTextx0x38?.[state.screenSize]));

 const tTextx0x39ComputedData = computed(() => _.merge({}, componentState.tTextx0x39.default, componentState.tTextx0x39?.[state.screenSize]));

 const tTextx0x40ComputedData = computed(() => _.merge({}, componentState.tTextx0x40.default, componentState.tTextx0x40?.[state.screenSize]));

 const tRectx0x41ComputedData = computed(() => _.merge({}, componentState.tRectx0x41.default, componentState.tRectx0x41?.[state.screenSize]));

 const tRectx0x42ComputedData = computed(() => _.merge({}, componentState.tRectx0x42.default, componentState.tRectx0x42?.[state.screenSize]));

 const tRectx0x43ComputedData = computed(() => _.merge({}, componentState.tRectx0x43.default, componentState.tRectx0x43?.[state.screenSize]));

 const tRectx0x44ComputedData = computed(() => _.merge({}, componentState.tRectx0x44.default, componentState.tRectx0x44?.[state.screenSize]));

 const tRectx0x45ComputedData = computed(() => _.merge({}, componentState.tRectx0x45.default, componentState.tRectx0x45?.[state.screenSize]));

 const tRectx0x46ComputedData = computed(() => _.merge({}, componentState.tRectx0x46.default, componentState.tRectx0x46?.[state.screenSize]));

 const tRectx0x47ComputedData = computed(() => _.merge({}, componentState.tRectx0x47.default, componentState.tRectx0x47?.[state.screenSize]));

 const tLinex0x48ComputedData = computed(() => _.merge({}, componentState.tLinex0x48.default, componentState.tLinex0x48?.[state.screenSize]));

 const tLinex0x49ComputedData = computed(() => _.merge({}, componentState.tLinex0x49.default, componentState.tLinex0x49?.[state.screenSize]));

 const tLinex0x50ComputedData = computed(() => _.merge({}, componentState.tLinex0x50.default, componentState.tLinex0x50?.[state.screenSize]));

 const tRectx0x51ComputedData = computed(() => _.merge({}, componentState.tRectx0x51.default, componentState.tRectx0x51?.[state.screenSize]));

 const tRectx0x52ComputedData = computed(() => _.merge({}, componentState.tRectx0x52.default, componentState.tRectx0x52?.[state.screenSize]));

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
tImageBasex0x5ComputedData,
tImageBasex0x6ComputedData,
tComponentx0x7ComputedData,
tTextx0x9ComputedData,
tTextx0x10ComputedData,
tTextx0x11ComputedData,
tTextx0x12ComputedData,
tTextx0x13ComputedData,
tTextx0x14ComputedData,
tTextx0x15ComputedData,
tTextx0x16ComputedData,
tTextx0x17ComputedData,
tTextx0x18ComputedData,
tTextx0x19ComputedData,
tTextx0x20ComputedData,
tTextUnitx0x22ComputedData,
tTextUnitx0x23ComputedData,
tTextUnitx0x24ComputedData,
tTextUnitx0x25ComputedData,
tTextUnitx0x26ComputedData,
tTextUnitx0x27ComputedData,
tTextUnitx0x28ComputedData,
tTextUnitx0x29ComputedData,
tTextUnitx0x30ComputedData,
tTextUnitx0x31ComputedData,
tTextUnitx0x32ComputedData,
tTextx0x33ComputedData,
tTextx0x34ComputedData,
tRectx0x35ComputedData,
tRectx0x36ComputedData,
tRectx0x37ComputedData,
tTextx0x38ComputedData,
tTextx0x39ComputedData,
tTextx0x40ComputedData,
tRectx0x41ComputedData,
tRectx0x42ComputedData,
tRectx0x43ComputedData,
tRectx0x44ComputedData,
tRectx0x45ComputedData,
tRectx0x46ComputedData,
tRectx0x47ComputedData,
tLinex0x48ComputedData,
tLinex0x49ComputedData,
tLinex0x50ComputedData,
tRectx0x51ComputedData,
tRectx0x52ComputedData,
onclick1769426209881,
onclick1763615028528_8_0,
onclick1739255126445,
onclick1739339618938_0_0,
onclick1763615028528_9_0,
onclick1739254824900,
onclick1739339618938_0_0,
onclick1765679428262,
};
},
};