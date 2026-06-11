window.rightRiskControlComponent = {
template: 
`<div id="t-l-c-rightRiskControl" class="t-l-c-rightRiskControl" >` +
`<t-image-base v-if="global.isSelectedBg === 6" id="t-image-base-16ea.9e1b915d8" class="rightRiskControl-t-image-base-0-0"  :src="tImageBasex0x0ComputedData.src" :fit="tImageBasex0x0ComputedData.fit" :c-style="tImageBasex0x0ComputedData.cStyle">` +
`</t-image-base>` +
`<t-rect id="t-rect-96cf.bc1ae79cc" class="rightRiskControl-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-image-base v-if="global.isSelectedBg === 7" id="t-image-base-22f5.7bee58a01" class="rightRiskControl-t-image-base-0-2"  :src="tImageBasex0x2ComputedData.src" :fit="tImageBasex0x2ComputedData.fit" :c-style="tImageBasex0x2ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.isSelectedBg !== 6" id="t-image-base-4f81.e5868f47c" class="rightRiskControl-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.isSelectedBg !== 7" id="t-image-base-b65b.bf70c4b6" class="rightRiskControl-t-image-base-0-4"  :src="tImageBasex0x4ComputedData.src" :fit="tImageBasex0x4ComputedData.fit" :c-style="tImageBasex0x4ComputedData.cStyle">` +
`</t-image-base>` +
`<t-component id="t-component-568d.7cecfab45" class="rightRiskControl-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName">` +
`</t-component>` +
`<t-rect v-if="state.riskData.ISSTANDARDS_STR === '已达标'" id="t-rect-4f5b.536d0a55c" class="rightRiskControl-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.constructData.ISSTANDARDS_STR === '已达标'" id="t-rect-21f1.d5abbd0a" class="rightRiskControl-t-rect-0-7"  :tip="tRectx0x7ComputedData.tip" :label="tRectx0x7ComputedData.label" :active="tRectx0x7ComputedData.active" :c-style="tRectx0x7ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.riskData.ISSTANDARDS_STR === '未达标'" id="t-rect-4f51.9cad7f606" class="rightRiskControl-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.constructData.ISSTANDARDS_STR === '未达标'" id="t-rect-8ad0.bc14764f8" class="rightRiskControl-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle">` +
`</t-rect>` +
`<t-text v-if="state.riskData.ISSTANDARDS_STR === '已达标'" id="t-text-8727.b45ee59d2" class="rightRiskControl-t-text-0-10"  :label="tTextx0x10ComputedData.label" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.constructData.ISSTANDARDS_STR === '已达标'" id="t-text-8644.dce5dedc7" class="rightRiskControl-t-text-0-11"  :label="tTextx0x11ComputedData.label" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-e3ad.391156575" class="rightRiskControl-t-text-0-12"  :label="tTextx0x12ComputedData.label" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-1e38.8b152c0be" class="rightRiskControl-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle" :show-title="tTextx0x13ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-ca8c.f28156286" class="rightRiskControl-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-30f9.bb3135b6c" class="rightRiskControl-t-text-0-15"  :label="tTextx0x15ComputedData.label" :editable="tTextx0x15ComputedData.editable" :c-style="tTextx0x15ComputedData.cStyle" :show-title="tTextx0x15ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-2456.8cd16e232" class="rightRiskControl-t-text-0-16"  :label="tTextx0x16ComputedData.label" :editable="tTextx0x16ComputedData.editable" :c-style="tTextx0x16ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-66c7.dc900df7b" class="rightRiskControl-t-text-0-17"  :label="tTextx0x17ComputedData.label" :editable="tTextx0x17ComputedData.editable" :c-style="tTextx0x17ComputedData.cStyle" :show-title="tTextx0x17ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-41ff.d151512ad" class="rightRiskControl-t-text-0-18"  :label="replaceCssVariables(filterData(global.constructTime, componentPropBindingMap?.['t-text-41ff.d151512ad']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x18ComputedData.editable" :c-style="tTextx0x18ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-b633.4ff7b5544" class="rightRiskControl-t-text-unit-0-19"  :c-style="tTextUnitx0x19ComputedData.cStyle" :justify="tTextUnitx0x19ComputedData.justify" :align="tTextUnitx0x19ComputedData.align" :content="replaceCssVariables(filterData(state.riskData.GOOD_RATE_TARGET, componentPropBindingMap?.['t-text-unit-b633.4ff7b5544']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x19ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x19ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-f793.19ead8f4f" class="rightRiskControl-t-text-unit-0-20"  :c-style="tTextUnitx0x20ComputedData.cStyle" :justify="tTextUnitx0x20ComputedData.justify" :align="tTextUnitx0x20ComputedData.align" :content="replaceCssVariables(filterData(state.constructData.GOOD_RATE_TARGET, componentPropBindingMap?.['t-text-unit-f793.19ead8f4f']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x20ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x20ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isRed0 === true" id="t-text-unit-ff84.f056582b1" class="rightRiskControl-t-text-unit-0-21"  :c-style="tTextUnitx0x21ComputedData.cStyle" :justify="tTextUnitx0x21ComputedData.justify" :align="tTextUnitx0x21ComputedData.align" :content="replaceCssVariables(filterData(state.riskData.GOOD_RATE_YYMB, componentPropBindingMap?.['t-text-unit-ff84.f056582b1']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x21ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x21ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isRed1 === true" id="t-text-unit-bb5b.1c51e1e46" class="rightRiskControl-t-text-unit-0-22"  :c-style="tTextUnitx0x22ComputedData.cStyle" :justify="tTextUnitx0x22ComputedData.justify" :align="tTextUnitx0x22ComputedData.align" :content="replaceCssVariables(filterData(state.constructData.GOOD_RATE_YYMB, componentPropBindingMap?.['t-text-unit-bb5b.1c51e1e46']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x22ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x22ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isGreen0 === true" id="t-text-unit-1ca5.5f3859aeb" class="rightRiskControl-t-text-unit-0-23"  :c-style="tTextUnitx0x23ComputedData.cStyle" :justify="tTextUnitx0x23ComputedData.justify" :align="tTextUnitx0x23ComputedData.align" :content="replaceCssVariables(filterData(state.riskData.GOOD_RATE_YYMB, componentPropBindingMap?.['t-text-unit-1ca5.5f3859aeb']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x23ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x23ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isWhite0 === true" id="t-text-unit-0f29.f8f3d126c" class="rightRiskControl-t-text-unit-0-24"  :c-style="tTextUnitx0x24ComputedData.cStyle" :justify="tTextUnitx0x24ComputedData.justify" :align="tTextUnitx0x24ComputedData.align" :content="replaceCssVariables(filterData(state.riskData.GOOD_RATE_YYMB, componentPropBindingMap?.['t-text-unit-0f29.f8f3d126c']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x24ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x24ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isGreen1 === true" id="t-text-unit-694c.f44b09af7" class="rightRiskControl-t-text-unit-0-25"  :c-style="tTextUnitx0x25ComputedData.cStyle" :justify="tTextUnitx0x25ComputedData.justify" :align="tTextUnitx0x25ComputedData.align" :content="replaceCssVariables(filterData(state.constructData.GOOD_RATE_YYMB, componentPropBindingMap?.['t-text-unit-694c.f44b09af7']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x25ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x25ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isWhite1 === true" id="t-text-unit-ba8c.f8d136f3b" class="rightRiskControl-t-text-unit-0-26"  :c-style="tTextUnitx0x26ComputedData.cStyle" :justify="tTextUnitx0x26ComputedData.justify" :align="tTextUnitx0x26ComputedData.align" :content="replaceCssVariables(filterData(state.constructData.DATA_3, componentPropBindingMap?.['t-text-unit-ba8c.f8d136f3b']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x26ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x26ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.constructData.GOOD_RATE !== '--'" id="t-text-unit-a178.a84073fb9" class="rightRiskControl-t-text-unit-0-27"  :c-style="tTextUnitx0x27ComputedData.cStyle" :justify="tTextUnitx0x27ComputedData.justify" :align="tTextUnitx0x27ComputedData.align" :content="replaceCssVariables(filterData(state.constructData.GOOD_RATE, componentPropBindingMap?.['t-text-unit-a178.a84073fb9']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x27ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x27ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text id="t-text-06d8.e7d863be1" class="rightRiskControl-t-text-0-28"  :label="tTextx0x28ComputedData.label" :editable="tTextx0x28ComputedData.editable" :c-style="tTextx0x28ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-69fa.991666b61" class="rightRiskControl-t-text-0-29"  :label="tTextx0x29ComputedData.label" :editable="tTextx0x29ComputedData.editable" :c-style="tTextx0x29ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.riskData.ISSTANDARDS_STR === '未达标'" id="t-text-3eec.22bfafdf9" class="rightRiskControl-t-text-0-30"  :label="tTextx0x30ComputedData.label" :editable="tTextx0x30ComputedData.editable" :c-style="tTextx0x30ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.constructData.ISSTANDARDS_STR === '未达标'" id="t-text-91fb.c23b087ee" class="rightRiskControl-t-text-0-31"  :label="tTextx0x31ComputedData.label" :editable="tTextx0x31ComputedData.editable" :c-style="tTextx0x31ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-aa88.a72e421b" class="rightRiskControl-t-rect-0-32"  :tip="tRectx0x32ComputedData.tip" :label="tRectx0x32ComputedData.label" :active="tRectx0x32ComputedData.active" :c-style="tRectx0x32ComputedData.cStyle" @click="onclick1739255126445">` +
`</t-rect>` +
`<t-rect id="t-rect-eb3a.10016d38" class="rightRiskControl-t-rect-0-33"  :tip="tRectx0x33ComputedData.tip" :label="tRectx0x33ComputedData.label" :active="tRectx0x33ComputedData.active" :c-style="tRectx0x33ComputedData.cStyle" @click="onclick1739339618938_0_0">` +
`</t-rect>` +
`<t-text id="t-text-86e9.6e4bda798" class="rightRiskControl-t-text-0-34"  :label="tTextx0x34ComputedData.label" :editable="tTextx0x34ComputedData.editable" :c-style="tTextx0x34ComputedData.cStyle" @click="onclick1739254824900">` +
`</t-text>` +
`<t-text id="t-text-e07b.3eb482e52" class="rightRiskControl-t-text-0-35"  :label="tTextx0x35ComputedData.label" :editable="tTextx0x35ComputedData.editable" :c-style="tTextx0x35ComputedData.cStyle" @click="onclick1739339618938_0_0">` +
`</t-text>` +
`<t-rect id="t-rect-602e.6c24a7857" class="rightRiskControl-t-rect-0-36"  :tip="tRectx0x36ComputedData.tip" :label="tRectx0x36ComputedData.label" :active="tRectx0x36ComputedData.active" :c-style="tRectx0x36ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-2175.37a6bb177" class="rightRiskControl-t-rect-0-37"  :tip="tRectx0x37ComputedData.tip" :label="tRectx0x37ComputedData.label" :active="tRectx0x37ComputedData.active" :c-style="tRectx0x37ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-daca.2f7f683b7" class="rightRiskControl-t-rect-0-38"  :tip="tRectx0x38ComputedData.tip" :label="tRectx0x38ComputedData.label" :active="tRectx0x38ComputedData.active" :c-style="tRectx0x38ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-a5a4.a161e6345" class="rightRiskControl-t-rect-0-39"  :tip="tRectx0x39ComputedData.tip" :label="tRectx0x39ComputedData.label" :active="tRectx0x39ComputedData.active" :c-style="tRectx0x39ComputedData.cStyle">` +
`</t-rect>` +
`<t-row id="t-row-d8f6.e9ca9bf47" class="rightRiskControl-t-row-0-40"  :c-style="tRowx0x40ComputedData.cStyle" :gutter="tRowx0x40ComputedData.gutter" :justify="tRowx0x40ComputedData.justify" :align="tRowx0x40ComputedData.align">` +
`<t-text-unit v-if="state.riskData.GOOD_RATE === '--'" id="t-text-unit-0262.fa81fab6e" class="rightRiskControl-t-text-unit-0-40-0"  :c-style="tTextUnitx0x40x0ComputedData.cStyle" :justify="tTextUnitx0x40x0ComputedData.justify" :align="tTextUnitx0x40x0ComputedData.align" :content="replaceCssVariables(filterData(state.riskData.GOOD_RATE, componentPropBindingMap?.['t-text-unit-0262.fa81fab6e']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x40x0ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x40x0ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rolling-number v-if="state.riskData.GOOD_RATE !== '--'" id="t-rolling-number-9c80.dd0082f17" class="rightRiskControl-t-rolling-number-0-40-1"  :number="replaceCssVariables(filterData(state.riskData.GOOD_RATE, componentPropBindingMap?.['t-rolling-number-9c80.dd0082f17']['number'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :min-length="tRollingNumberx0x40x1ComputedData.minLength" :prefix="tRollingNumberx0x40x1ComputedData.prefix" :suffix="tRollingNumberx0x40x1ComputedData.suffix" :animation-duration="tRollingNumberx0x40x1ComputedData.animationDuration" :c-style="tRollingNumberx0x40x1ComputedData.cStyle">` +
`</t-rolling-number>` +
`<t-rect v-if="state.isOk0 === -1" id="t-rect-79ab.3a7bba595" class="rightRiskControl-t-rect-0-40-2"  :tip="tRectx0x40x2ComputedData.tip" :label="tRectx0x40x2ComputedData.label" :active="tRectx0x40x2ComputedData.active" :c-style="tRectx0x40x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.isOk0 === 1" id="t-rect-a3bf.1a8d291ef" class="rightRiskControl-t-rect-0-40-3"  :tip="tRectx0x40x3ComputedData.tip" :label="tRectx0x40x3ComputedData.label" :active="tRectx0x40x3ComputedData.active" :c-style="tRectx0x40x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-unit id="t-text-unit-fbba.78435c6b2" class="rightRiskControl-t-text-unit-0-40-4"  :c-style="tTextUnitx0x40x4ComputedData.cStyle" :justify="tTextUnitx0x40x4ComputedData.justify" :align="tTextUnitx0x40x4ComputedData.align" :content="replaceCssVariables(filterData(state.riskData.GOOD_RATE_JQN, componentPropBindingMap?.['t-text-unit-fbba.78435c6b2']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x40x4ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x40x4ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`</t-row>` +
`<t-row id="t-row-bbbf.831ae9a61" class="rightRiskControl-t-row-0-41"  :c-style="tRowx0x41ComputedData.cStyle" :gutter="tRowx0x41ComputedData.gutter" :justify="tRowx0x41ComputedData.justify" :align="tRowx0x41ComputedData.align">` +
`<t-text-unit v-if="state.constructData.GOOD_RATE === '--'" id="t-text-unit-3099.4fd612a61" class="rightRiskControl-t-text-unit-0-41-0"  :c-style="tTextUnitx0x41x0ComputedData.cStyle" :justify="tTextUnitx0x41x0ComputedData.justify" :align="tTextUnitx0x41x0ComputedData.align" :content="replaceCssVariables(filterData(state.constructData.GOOD_RATE, componentPropBindingMap?.['t-text-unit-3099.4fd612a61']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x41x0ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x41x0ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect v-if="state.isOk1 === -1" id="t-rect-3a0c.a5b4bcd9d" class="rightRiskControl-t-rect-0-41-1"  :tip="tRectx0x41x1ComputedData.tip" :label="tRectx0x41x1ComputedData.label" :active="tRectx0x41x1ComputedData.active" :c-style="tRectx0x41x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.isOk1 === 1" id="t-rect-70c6.54224ff62" class="rightRiskControl-t-rect-0-41-2"  :tip="tRectx0x41x2ComputedData.tip" :label="tRectx0x41x2ComputedData.label" :active="tRectx0x41x2ComputedData.active" :c-style="tRectx0x41x2ComputedData.cStyle">` +
`</t-rect>` +
`</t-row>` +
`<t-line id="t-line-d49f.f1aec9d46" class="rightRiskControl-t-line-0-42"  :c-style="tLinex0x42ComputedData.cStyle">` +
`</t-line>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-image-base-16ea.9e1b915d8":{"attributeName":"tImageBasex0x0","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-96cf.bc1ae79cc":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-22f5.7bee58a01":{"attributeName":"tImageBasex0x2","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-4f81.e5868f47c":{"attributeName":"tImageBasex0x3","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-b65b.bf70c4b6":{"attributeName":"tImageBasex0x4","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-component-568d.7cecfab45":{"attributeName":"tComponentx0x5","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-rect-4f5b.536d0a55c":{"attributeName":"tRectx0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-21f1.d5abbd0a":{"attributeName":"tRectx0x7","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4f51.9cad7f606":{"attributeName":"tRectx0x8","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-8ad0.bc14764f8":{"attributeName":"tRectx0x9","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8727.b45ee59d2":{"attributeName":"tTextx0x10","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8644.dce5dedc7":{"attributeName":"tTextx0x11","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e3ad.391156575":{"attributeName":"tTextx0x12","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-1e38.8b152c0be":{"attributeName":"tTextx0x13","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}},"t-text-ca8c.f28156286":{"attributeName":"tTextx0x14","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-30f9.bb3135b6c":{"attributeName":"tTextx0x15","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}},"t-text-2456.8cd16e232":{"attributeName":"tTextx0x16","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-66c7.dc900df7b":{"attributeName":"tTextx0x17","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}},"t-text-41ff.d151512ad":{"attributeName":"tTextx0x18","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-b633.4ff7b5544":{"attributeName":"tTextUnitx0x19","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-f793.19ead8f4f":{"attributeName":"tTextUnitx0x20","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-ff84.f056582b1":{"attributeName":"tTextUnitx0x21","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-bb5b.1c51e1e46":{"attributeName":"tTextUnitx0x22","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-1ca5.5f3859aeb":{"attributeName":"tTextUnitx0x23","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-0f29.f8f3d126c":{"attributeName":"tTextUnitx0x24","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-694c.f44b09af7":{"attributeName":"tTextUnitx0x25","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-ba8c.f8d136f3b":{"attributeName":"tTextUnitx0x26","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-a178.a84073fb9":{"attributeName":"tTextUnitx0x27","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-06d8.e7d863be1":{"attributeName":"tTextx0x28","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-69fa.991666b61":{"attributeName":"tTextx0x29","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3eec.22bfafdf9":{"attributeName":"tTextx0x30","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-91fb.c23b087ee":{"attributeName":"tTextx0x31","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-aa88.a72e421b":{"attributeName":"tRectx0x32","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-eb3a.10016d38":{"attributeName":"tRectx0x33","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-86e9.6e4bda798":{"attributeName":"tTextx0x34","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e07b.3eb482e52":{"attributeName":"tTextx0x35","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-602e.6c24a7857":{"attributeName":"tRectx0x36","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-2175.37a6bb177":{"attributeName":"tRectx0x37","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-daca.2f7f683b7":{"attributeName":"tRectx0x38","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-a5a4.a161e6345":{"attributeName":"tRectx0x39","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-d8f6.e9ca9bf47":{"attributeName":"tRowx0x40","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-unit-0262.fa81fab6e":{"attributeName":"tTextUnitx0x40x0","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rolling-number-9c80.dd0082f17":{"attributeName":"tRollingNumberx0x40x1","number":{"filters":[]},"minLength":{"filters":[]},"prefix":{"filters":[]},"suffix":{"filters":[]},"animationDuration":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-79ab.3a7bba595":{"attributeName":"tRectx0x40x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-a3bf.1a8d291ef":{"attributeName":"tRectx0x40x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-fbba.78435c6b2":{"attributeName":"tTextUnitx0x40x4","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-row-bbbf.831ae9a61":{"attributeName":"tRowx0x41","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-unit-3099.4fd612a61":{"attributeName":"tTextUnitx0x41x0","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-3a0c.a5b4bcd9d":{"attributeName":"tRectx0x41x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-70c6.54224ff62":{"attributeName":"tRectx0x41x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-line-d49f.f1aec9d46":{"attributeName":"tLinex0x42","cStyle":{"filters":[]}}};
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
   isNoStorard: false,
   isStorard: true,
   isSelectedBg1: false,
   isSelectedBg2: false,
   isRed0: false,
   isGreen0: false,
   isWhite0: true,
   isRed1: false,
   isGreen1: false,
   isWhite1: true,
   riskData: {"GOOD_RATE":"--","GOOD_RATE_JQN":"--","GOOD_RATE_TARGET":"--","GOOD_RATE_YYMB":"--","ISSTANDARDS_STR":"--"},
   constructData: {"GOOD_RATE":"--","GOOD_RATE_JQN":"--","GOOD_RATE_TARGET":"--","GOOD_RATE_YYMB":"--","ISSTANDARDS_STR":"--","DATA_3":"--"},
   isOk0: 0,
   isOk1: 0,
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
            default: {"width":"400px","height":"108px","position":"unset","left":"1px","top":"61px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"1px","top":"61px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"400px","height":"232px","position":"unset","left":"0px","top":"51px","backgroundColor":"var(--t-card-bgc)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"232px","position":"unset","left":"0px","top":"51px","backgroundColor":"var(--t-card-bgc)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tImageBasex0x2: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"1px","top":"176px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"1px","top":"176px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"61px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto"},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"61px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto"}}}, 
 },
},
tImageBasex0x4: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"175px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"175px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto","animationName":""}}}, 
 },
},
tComponentx0x5: {
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
tRectx0x6: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"246px","top":"72px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"246px","top":"72px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tRectx0x7: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"123px","top":"187px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"123px","top":"187px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-db)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"246px","top":"72px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"246px","top":"72px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"123px","top":"187px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"123px","top":"187px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","background":"var(--t-wdb)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"75px","left":"257px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"已达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"75px","left":"257px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"190px","left":"134px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"已达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"190px","left":"134px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"17px","top":"110px"},
            
            },
 default: { 
 
label:"现状",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"17px","top":"110px"}}}, 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"87px","height":"15px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"18px","top":"225px","animationName":"","max-height":"28px","overflow":"hidden"},
            
            },
 default: { 
 
label:"建设用地污染地块数量",
editable:false,
cStyle:{"wrapper":{"default":{"width":"87px","height":"15px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"18px","top":"225px","animationName":"","max-height":"28px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"323px","top":"112px","animationName":""},
            
            },
 default: { 
 
label:"优于目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"323px","top":"112px","animationName":""}}}, 
 },
},
tTextx0x15: {
defaultStyle: {
            default: {"width":"74px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"321px","top":"227px","animationName":"","overflow":"hidden"},
            
            },
 default: { 
 
label:"农用地安全利用类任务数",
editable:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"321px","top":"227px","animationName":"","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x16: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"223px","top":"112px","animationName":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"223px","top":"112px","animationName":""}}}, 
 },
},
tTextx0x17: {
defaultStyle: {
            default: {"width":"77px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"222px","top":"227px","animationName":"","overflow":"hidden"},
            
            },
 default: { 
 
label:"土壤环境调查地块数量",
editable:false,
cStyle:{"wrapper":{"default":{"width":"77px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"222px","top":"227px","animationName":"","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x18: {
defaultStyle: {
            default: {"width":"78px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"312px","top":"22px","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"78px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"312px","top":"22px","animationName":""}}}, 
 },
},
tTextUnitx0x19: {
defaultStyle: {
            default: {"width":"auto","height":"22px","position":"unset","left":"227px","top":"130px","fontSize":"14px","lineHeight":"14px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","position":"unset","left":"227px","top":"130px","fontSize":"14px","lineHeight":"14px","animationName":""}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-target)","fontFamily":"DIN-black"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x20: {
defaultStyle: {
            default: {"width":"68px","height":"22px","position":"unset","left":"220px","top":"246px","fontSize":"14px","lineHeight":"14px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"68px","height":"22px","position":"unset","left":"220px","top":"246px","fontSize":"14px","lineHeight":"14px","animationName":""}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-target)","fontFamily":"DIN-black"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"个",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x21: {
defaultStyle: {
            default: {"width":"auto","height":"22px","position":"unset","left":"324px","top":"130px","fontSize":"14px","lineHeight":"14px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","position":"unset","left":"324px","top":"130px","fontSize":"14px","lineHeight":"14px","animationName":"","textAlign":"center"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-wdb-color)","fontFamily":"DIN-black","textAlign":"center"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","textAlign":"center"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x22: {
defaultStyle: {
            default: {"width":"auto","height":"22px","position":"unset","left":"324px","top":"245px","fontSize":"14px","lineHeight":"14px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","position":"unset","left":"324px","top":"245px","fontSize":"14px","lineHeight":"14px","animationName":"","textAlign":"center"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-wdb-color)","fontFamily":"DIN-black","textAlign":"center"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","textAlign":"center"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"亩",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x23: {
defaultStyle: {
            default: {"width":"auto","height":"22px","position":"unset","left":"324px","top":"130px","fontSize":"14px","lineHeight":"14px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","position":"unset","left":"324px","top":"130px","fontSize":"14px","lineHeight":"14px","animationName":""}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-db-color)","fontFamily":"DIN-black"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x24: {
defaultStyle: {
            default: {"width":"auto","height":"22px","position":"unset","left":"324px","top":"130px","fontSize":"14px","lineHeight":"14px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","position":"unset","left":"324px","top":"130px","fontSize":"14px","lineHeight":"14px","animationName":""}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"#fff","fontFamily":"DIN-black"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x25: {
defaultStyle: {
            default: {"width":"auto","height":"22px","position":"unset","left":"324px","top":"245px","fontSize":"14px","lineHeight":"14px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","position":"unset","left":"324px","top":"245px","fontSize":"14px","lineHeight":"14px","animationName":""}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-db-color)","fontFamily":"DIN-black"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"亩",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x26: {
defaultStyle: {
            default: {"width":"73px","height":"22px","position":"unset","left":"314px","top":"245px","fontSize":"14px","lineHeight":"14px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"73px","height":"22px","position":"unset","left":"314px","top":"245px","fontSize":"14px","lineHeight":"14px","animationName":""}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"#fff","fontFamily":"DIN-black"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"亩",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x27: {
defaultStyle: {
            default: {"width":"92px","height":"22px","position":"unset","left":"18px","top":"246px","fontSize":"14px","lineHeight":"14px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"92px","height":"22px","position":"unset","left":"18px","top":"246px","fontSize":"14px","lineHeight":"14px","animationName":""}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-text) ","fontFamily":"DIN-black"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"个",
showOverflowTooltip:true, 
 },
},
tTextx0x28: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"282px","top":"22px","animationName":""},
            
            },
 default: { 
 
label:"截至",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"282px","top":"22px","animationName":""}}}, 
 },
},
tTextx0x29: {
defaultStyle: {
            default: {"width":"96px","height":"20px","color":"#fff","fontSize":"20px","fontFamily":"方正综艺","position":"unset","left":"49px","top":"19px"},
            
            },
 default: { 
 
label:"风险管控",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"20px","color":"#fff","fontSize":"20px","fontFamily":"方正综艺","position":"unset","left":"49px","top":"19px"}}}, 
 },
},
tTextx0x30: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"75px","left":"257px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"未达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"75px","left":"257px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
tTextx0x31: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"190px","left":"134px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"未达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"190px","left":"134px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
tRectx0x32: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-card7)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"67px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-card7)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"67px","cursor":"pointer"}}}, 
 },
},
tRectx0x33: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-card8)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"182px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-card8)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"182px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x34: {
defaultStyle: {
            default: {"width":"188px","height":"16px","color":"var(--t-text) ","position":"unset","left":"49px","top":"74px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer"},
            
            },
 default: { 
 
label:"地下水国控监测点V类比例",
editable:false,
cStyle:{"wrapper":{"default":{"width":"188px","height":"16px","color":"var(--t-text) ","position":"unset","left":"49px","top":"74px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer"}}}, 
 },
},
tTextx0x35: {
defaultStyle: {
            default: {"width":"176px","height":"16px","color":"var(--t-text) ","position":"unset","left":"49px","top":"189px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"土壤监管",
editable:false,
cStyle:{"wrapper":{"default":{"width":"176px","height":"16px","color":"var(--t-text) ","position":"unset","left":"49px","top":"189px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""}}}, 
 },
},
tRectx0x36: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"200px","top":"226px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"200px","top":"226px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x37: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"305px","top":"227px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"305px","top":"227px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x38: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"200px","top":"111px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"200px","top":"111px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x39: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"305px","top":"112px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"305px","top":"112px","position":"unset","animationName":""}}}, 
 },
},
tRowx0x40: {
defaultStyle: {
            default: {"width":"auto","height":"32px","position":"unset","left":"16px","top":"129px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","position":"unset","left":"16px","top":"129px","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextUnitx0x40x0: {
defaultStyle: {
            default: {"width":"30px","height":"32px","color":"#fff","animationName":"","left":"418px","top":"-121px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"30px","height":"32px","color":"#fff","animationName":"","left":"418px","top":"-121px","position":"unset"}},"unit":{"default":{"color":"var(--t-color-text-green)"}},"text":{"default":{"color":"var(--t-text)"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRollingNumberx0x40x1: {
defaultStyle: {
            default: {"overflow":"hidden","width":"auto","height":"32px","marginLeft":"0px","marginRight":"0px","animationName":"","left":"1515px","top":"120.19998168945312px"},
            
            },
 default: { 
 
number:"--",
minLength:1,
prefix:"",
suffix:"%",
animationDuration:1,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"auto","height":"32px","marginLeft":"0px","marginRight":"0px","animationName":"","left":"1515px","top":"120.19998168945312px"}},"separator":{"default":{"height":"48px","lineHeight":"32px","fontSize":"32px","color":"var(--t-text) ","fontFamily":"DIN-black","fontWeight":"700"}},"number":{"default":{"width":"5px","height":"64px","margin":"0 6px","borderRadius":"6px","color":"var(--t-text) ","lineHeight":"32px","fontSize":"32px","fontFamily":"DIN-black","fontWeight":"700","backgroundColor":"var(--t-body-background)"}},"suffix":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginTop":"18px"}}}, 
 },
},
tRectx0x40x2: {
defaultStyle: {
            default: {"width":"6px","height":"4px","left":"1683px","top":"64.19998168945312px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-02-18/c749b7c7104541ee98ff4e81c2b07d4e.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"6px","height":"4px","left":"1683px","top":"64.19998168945312px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-02-18/c749b7c7104541ee98ff4e81c2b07d4e.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x40x3: {
defaultStyle: {
            default: {"width":"6px","height":"4px","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover,cover","-webkit-mask-size":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-02-10/ded6adfb3bd246feb79888017adfc0e4.png)","-webkit-mask-image":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","paddingBottom":"0px","marginBottom":"0px","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","animationName":"","left":"1683px","top":"64.19998168945312px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"6px","height":"4px","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover,cover","-webkit-mask-size":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-02-10/ded6adfb3bd246feb79888017adfc0e4.png)","-webkit-mask-image":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","paddingBottom":"0px","marginBottom":"0px","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","animationName":"","left":"1683px","top":"64.19998168945312px"}}}, 
 },
},
tTextUnitx0x40x4: {
defaultStyle: {
            default: {"width":"auto","height":"29px","marginRight":"0px","marginLeft":"10px","animationName":"","left":"1817px","top":"-100.80001831054688px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"29px","marginRight":"0px","marginLeft":"10px","animationName":"","left":"1817px","top":"-100.80001831054688px"}},"text":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-text) "}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"14px"}}},
justify:"flex-start",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRowx0x41: {
defaultStyle: {
            default: {"width":"138px","height":"32px","position":"unset","left":"16px","top":"244px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"138px","height":"32px","position":"unset","left":"16px","top":"244px","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextUnitx0x41x0: {
defaultStyle: {
            default: {"width":"30px","height":"32px","color":"var(--t-text) "},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"30px","height":"32px","color":"var(--t-text) "}},"text":{"default":{"color":"var(--t-text) "}},"unit":{"default":{"color":"var(--t-color-text-green)"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"个",
showOverflowTooltip:true, 
 },
},
tRectx0x41x1: {
defaultStyle: {
            default: {"width":"6px","height":"4px","left":"2339px","top":"-12.4000244140625px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-02-18/c749b7c7104541ee98ff4e81c2b07d4e.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"6px","height":"4px","left":"2339px","top":"-12.4000244140625px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-02-18/c749b7c7104541ee98ff4e81c2b07d4e.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x41x2: {
defaultStyle: {
            default: {"width":"6px","height":"4px","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover,cover","-webkit-mask-size":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-02-10/ded6adfb3bd246feb79888017adfc0e4.png)","-webkit-mask-image":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","paddingBottom":"0px","marginBottom":"0px","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","animationName":"","left":"2339px","top":"-12.4000244140625px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"6px","height":"4px","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover,cover","-webkit-mask-size":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-02-10/ded6adfb3bd246feb79888017adfc0e4.png)","-webkit-mask-image":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","paddingBottom":"0px","marginBottom":"0px","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","animationName":"","left":"2339px","top":"-12.4000244140625px"}}}, 
 },
},
tLinex0x42: {
defaultStyle: {
            default: {"width":"368px","height":"1px","position":"unset","left":"17px","top":"173px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"368px","height":"1px","position":"unset","left":"17px","top":"173px","backgroundColor":"var(--t-card-fgx)","color":"var(--t-card-fgx)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
});
const selectCardOne = () => {
global.isLoop = false;
global.isSelectedBg = 6;
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeIndicator', // 消息名称
  data: {
    indicator: 7,
  },
});
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeMonitorTime', // 消息名称
  data: {
    time: '', // 时间
  },
});

// 改变全局参数
global.mapChangeAllStatusParams = {
  time: '',
  indicator: 7,
};

if (global.intervalId) {
  clearInterval(global.intervalId);
}
};
const selectCardTwo = () => {
global.isLoop = false;
global.isSelectedBg = 7;
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeIndicator', // 消息名称
  data: {
    indicator: 8,
  },
});
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeMonitorTime', // 消息名称
  data: {
    time: '', // 时间
  },
});

// 改变全局参数
global.mapChangeAllStatusParams = {
  time: '',
  indicator: 8,
};

if (global.intervalId) {
  clearInterval(global.intervalId);
}
};
const onclick1739255126445 = () => {
// 执行自定义方法
selectCardOne();
};
const onclick1739339618938_0_0 = () => {
// 执行自定义方法
selectCardTwo();
};
const onclick1739254824900 = () => {
// 执行自定义方法
selectCardOne();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getConstructData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"7935d95132f9932bb0fc1f45111c83ef","DATA_TYPE":"ACC_MONTH","MONITORTIME":"","REGION_CODE":"global.REGION_CODE","TYPE":"EN"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"7935d95132f9932bb0fc1f45111c83ef","DATA_TYPE":"ACC_MONTH","MONITORTIME":"","REGION_CODE":global.REGION_CODE,"TYPE":"EN"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"7935d95132f9932bb0fc1f45111c83ef","DATA_TYPE":"ACC_MONTH","MONITORTIME":"","REGION_CODE":global.REGION_CODE,"TYPE":"EN"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getConstructData'] = res.data;
                
     if (res?.data?.data && res?.data?.data.length > 0) {
  console.log(res, '受污染耕地和建设用地安全利用率');
  const data = res.data.data[0];
  global.constructTime = data.MONITORTIME;
  for (let key in state.constructData) {
    if (data.hasOwnProperty(key)) {
      state.constructData[key] = data[key] || '--';
    }
  }
  if (Number(data.GOOD_RATE_JQN) > 0) {
    state.isOk1 = 1;
  } else if (Number(data.GOOD_RATE_JQN) < 0) {
    state.isOk1 = -1;
  } else {
    state.isOk1 = 0;
  }
  setColor(data.GOOD_RATE_YYMB, 1, state);
} else {
  global.constructTime = '--';
  for (let key in state.constructData) {
    state.constructData[key] = '--';
  }
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      global.constructTime = '--';
      reject(error);
    });
  });
},
              },
// 接口函数
 getRiskData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"7935d95132f9932bb0fc1f45111c83ef","DATA_TYPE":"ACC_MONTH","MONITORTIME":"","REGION_CODE":"global.REGION_CODE","TYPE":"PL"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"7935d95132f9932bb0fc1f45111c83ef","DATA_TYPE":"ACC_MONTH","MONITORTIME":"","REGION_CODE":global.REGION_CODE,"TYPE":"PL"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"7935d95132f9932bb0fc1f45111c83ef","DATA_TYPE":"ACC_MONTH","MONITORTIME":"","REGION_CODE":global.REGION_CODE,"TYPE":"PL"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRiskData'] = res.data;
                
     if (res?.data?.data && res?.data?.data.length > 0) {
  console.log(res, '受污染耕地和建设用地安全利用率');
  const data = res.data.data[0];
  global.constructTime = data.MONITORTIME;
  for (let key in state.riskData) {
    if (data.hasOwnProperty(key)) {
      state.riskData[key] = data[key] || '--';
    }
  }
  if (Number(data.GOOD_RATE_JQN) > 0) {
    state.isOk0 = 1;
  } else if (Number(data.GOOD_RATE_JQN) < 0) {
    state.isOk0 = -1;
  } else {
    state.isOk0 = 0;
  }
  setColor(data.GOOD_RATE_YYMB, 0, state);
} else {
    global.constructTime = '--';
  for (let key in state.riskData) {
    state.riskData[key] = '--';
  }
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
        global.constructTime = '--';
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getConstructData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => ["",global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getRiskData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-rightRiskControl', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-rightRiskControl', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tImageBasex0x0ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x0.default, componentState.tImageBasex0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tImageBasex0x2ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x2.default, componentState.tImageBasex0x2?.[state.screenSize]));

 const tImageBasex0x3ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x3.default, componentState.tImageBasex0x3?.[state.screenSize]));

 const tImageBasex0x4ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x4.default, componentState.tImageBasex0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tRectx0x7ComputedData = computed(() => _.merge({}, componentState.tRectx0x7.default, componentState.tRectx0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tTextx0x15ComputedData = computed(() => _.merge({}, componentState.tTextx0x15.default, componentState.tTextx0x15?.[state.screenSize]));

 const tTextx0x16ComputedData = computed(() => _.merge({}, componentState.tTextx0x16.default, componentState.tTextx0x16?.[state.screenSize]));

 const tTextx0x17ComputedData = computed(() => _.merge({}, componentState.tTextx0x17.default, componentState.tTextx0x17?.[state.screenSize]));

 const tTextx0x18ComputedData = computed(() => _.merge({}, componentState.tTextx0x18.default, componentState.tTextx0x18?.[state.screenSize]));

 const tTextUnitx0x19ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x19.default, componentState.tTextUnitx0x19?.[state.screenSize]));

 const tTextUnitx0x20ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x20.default, componentState.tTextUnitx0x20?.[state.screenSize]));

 const tTextUnitx0x21ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x21.default, componentState.tTextUnitx0x21?.[state.screenSize]));

 const tTextUnitx0x22ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x22.default, componentState.tTextUnitx0x22?.[state.screenSize]));

 const tTextUnitx0x23ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x23.default, componentState.tTextUnitx0x23?.[state.screenSize]));

 const tTextUnitx0x24ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x24.default, componentState.tTextUnitx0x24?.[state.screenSize]));

 const tTextUnitx0x25ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x25.default, componentState.tTextUnitx0x25?.[state.screenSize]));

 const tTextUnitx0x26ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x26.default, componentState.tTextUnitx0x26?.[state.screenSize]));

 const tTextUnitx0x27ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x27.default, componentState.tTextUnitx0x27?.[state.screenSize]));

 const tTextx0x28ComputedData = computed(() => _.merge({}, componentState.tTextx0x28.default, componentState.tTextx0x28?.[state.screenSize]));

 const tTextx0x29ComputedData = computed(() => _.merge({}, componentState.tTextx0x29.default, componentState.tTextx0x29?.[state.screenSize]));

 const tTextx0x30ComputedData = computed(() => _.merge({}, componentState.tTextx0x30.default, componentState.tTextx0x30?.[state.screenSize]));

 const tTextx0x31ComputedData = computed(() => _.merge({}, componentState.tTextx0x31.default, componentState.tTextx0x31?.[state.screenSize]));

 const tRectx0x32ComputedData = computed(() => _.merge({}, componentState.tRectx0x32.default, componentState.tRectx0x32?.[state.screenSize]));

 const tRectx0x33ComputedData = computed(() => _.merge({}, componentState.tRectx0x33.default, componentState.tRectx0x33?.[state.screenSize]));

 const tTextx0x34ComputedData = computed(() => _.merge({}, componentState.tTextx0x34.default, componentState.tTextx0x34?.[state.screenSize]));

 const tTextx0x35ComputedData = computed(() => _.merge({}, componentState.tTextx0x35.default, componentState.tTextx0x35?.[state.screenSize]));

 const tRectx0x36ComputedData = computed(() => _.merge({}, componentState.tRectx0x36.default, componentState.tRectx0x36?.[state.screenSize]));

 const tRectx0x37ComputedData = computed(() => _.merge({}, componentState.tRectx0x37.default, componentState.tRectx0x37?.[state.screenSize]));

 const tRectx0x38ComputedData = computed(() => _.merge({}, componentState.tRectx0x38.default, componentState.tRectx0x38?.[state.screenSize]));

 const tRectx0x39ComputedData = computed(() => _.merge({}, componentState.tRectx0x39.default, componentState.tRectx0x39?.[state.screenSize]));

 const tRowx0x40ComputedData = computed(() => _.merge({}, componentState.tRowx0x40.default, componentState.tRowx0x40?.[state.screenSize]));

 const tTextUnitx0x40x0ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x40x0.default, componentState.tTextUnitx0x40x0?.[state.screenSize]));

 const tRollingNumberx0x40x1ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x40x1.default, componentState.tRollingNumberx0x40x1?.[state.screenSize]));

 const tRectx0x40x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x40x2.default, componentState.tRectx0x40x2?.[state.screenSize]));

 const tRectx0x40x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x40x3.default, componentState.tRectx0x40x3?.[state.screenSize]));

 const tTextUnitx0x40x4ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x40x4.default, componentState.tTextUnitx0x40x4?.[state.screenSize]));

 const tRowx0x41ComputedData = computed(() => _.merge({}, componentState.tRowx0x41.default, componentState.tRowx0x41?.[state.screenSize]));

 const tTextUnitx0x41x0ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x41x0.default, componentState.tTextUnitx0x41x0?.[state.screenSize]));

 const tRectx0x41x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x41x1.default, componentState.tRectx0x41x1?.[state.screenSize]));

 const tRectx0x41x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x41x2.default, componentState.tRectx0x41x2?.[state.screenSize]));

 const tLinex0x42ComputedData = computed(() => _.merge({}, componentState.tLinex0x42.default, componentState.tLinex0x42?.[state.screenSize]));

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
tRectx0x1ComputedData,
tImageBasex0x2ComputedData,
tImageBasex0x3ComputedData,
tImageBasex0x4ComputedData,
tComponentx0x5ComputedData,
tRectx0x6ComputedData,
tRectx0x7ComputedData,
tRectx0x8ComputedData,
tRectx0x9ComputedData,
tTextx0x10ComputedData,
tTextx0x11ComputedData,
tTextx0x12ComputedData,
tTextx0x13ComputedData,
tTextx0x14ComputedData,
tTextx0x15ComputedData,
tTextx0x16ComputedData,
tTextx0x17ComputedData,
tTextx0x18ComputedData,
tTextUnitx0x19ComputedData,
tTextUnitx0x20ComputedData,
tTextUnitx0x21ComputedData,
tTextUnitx0x22ComputedData,
tTextUnitx0x23ComputedData,
tTextUnitx0x24ComputedData,
tTextUnitx0x25ComputedData,
tTextUnitx0x26ComputedData,
tTextUnitx0x27ComputedData,
tTextx0x28ComputedData,
tTextx0x29ComputedData,
tTextx0x30ComputedData,
tTextx0x31ComputedData,
tRectx0x32ComputedData,
tRectx0x33ComputedData,
tTextx0x34ComputedData,
tTextx0x35ComputedData,
tRectx0x36ComputedData,
tRectx0x37ComputedData,
tRectx0x38ComputedData,
tRectx0x39ComputedData,
tRowx0x40ComputedData,
tTextUnitx0x40x0ComputedData,
tRollingNumberx0x40x1ComputedData,
tRectx0x40x2ComputedData,
tRectx0x40x3ComputedData,
tTextUnitx0x40x4ComputedData,
tRowx0x41ComputedData,
tTextUnitx0x41x0ComputedData,
tRectx0x41x1ComputedData,
tRectx0x41x2ComputedData,
tLinex0x42ComputedData,
onclick1739255126445,
onclick1739339618938_0_0,
onclick1739254824900,
onclick1739339618938_0_0,
};
},
};