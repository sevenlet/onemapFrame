window.pollutantConcentrationComponent = {
template: 
`<div id="t-l-c-pollutantConcentration" class="t-l-c-pollutantConcentration" >` +
`<t-rect id="t-rect-a4fe.04ac27493" class="pollutantConcentration-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-6fad.3b066682e" class="pollutantConcentration-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-3deb.a783fd29c" class="pollutantConcentration-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-5580.dd9222d02" class="pollutantConcentration-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-f56b.a079387e7" class="pollutantConcentration-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-46c4.7ae44cf39" class="pollutantConcentration-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-unit id="t-text-unit-64f0.1e202442f" class="pollutantConcentration-t-text-unit-0-6"  :c-style="tTextUnitx0x6ComputedData.cStyle" :justify="tTextUnitx0x6ComputedData.justify" :align="tTextUnitx0x6ComputedData.align" :content="replaceCssVariables(state.pm25.value, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x6ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x6ComputedData.showOverflowTooltip" :unit-raw="tTextUnitx0x6ComputedData.unitRaw">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-1354.4e0cefe75" class="pollutantConcentration-t-text-unit-0-7"  :c-style="tTextUnitx0x7ComputedData.cStyle" :justify="tTextUnitx0x7ComputedData.justify" :align="tTextUnitx0x7ComputedData.align" :content="replaceCssVariables(state.pm10.value, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x7ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x7ComputedData.showOverflowTooltip" :unit-raw="tTextUnitx0x7ComputedData.unitRaw">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-a559.2c554c6ba" class="pollutantConcentration-t-text-unit-0-8"  :c-style="tTextUnitx0x8ComputedData.cStyle" :justify="tTextUnitx0x8ComputedData.justify" :align="tTextUnitx0x8ComputedData.align" :content="replaceCssVariables(state.so2.value, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x8ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x8ComputedData.showOverflowTooltip" :unit-raw="tTextUnitx0x8ComputedData.unitRaw">` +
`</t-text-unit>` +
`<t-row id="t-row-a4ed.86705fb18" class="pollutantConcentration-t-row-0-9"  :c-style="tRowx0x9ComputedData.cStyle" :gutter="tRowx0x9ComputedData.gutter" :justify="tRowx0x9ComputedData.justify" :align="tRowx0x9ComputedData.align">` +
`<t-text id="t-text-08f4.5e4121bde" class="pollutantConcentration-t-text-0-9-0"  :label="replaceCssVariables(state.pm25.percentLabel, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x9x0ComputedData.editable" :c-style="tTextx0x9x0ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.pm25.percentStatus === 'up'" id="t-text-a519.6a1808891" class="pollutantConcentration-t-text-0-9-1"  :label="replaceCssVariables(state.pm25.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x9x1ComputedData.editable" :c-style="tTextx0x9x1ComputedData.cStyle" :show-title="tTextx0x9x1ComputedData.showTitle">` +
`</t-text>` +
`<t-text v-if="state.pm25.percentStatus === 'down'" id="t-text-3b47.e83a491b5" class="pollutantConcentration-t-text-0-9-2"  :label="replaceCssVariables(state.pm25.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x9x2ComputedData.editable" :c-style="tTextx0x9x2ComputedData.cStyle" :show-title="tTextx0x9x2ComputedData.showTitle">` +
`</t-text>` +
`<t-text v-if="state.pm25.percentStatus === 'noData'" id="t-text-bf7d.671176782" class="pollutantConcentration-t-text-0-9-3"  :label="replaceCssVariables(state.pm25.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x9x3ComputedData.editable" :c-style="tTextx0x9x3ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.pm25.percentStatus === 'flat'" id="t-text-ab88.740cca2d1" class="pollutantConcentration-t-text-0-9-4"  :label="replaceCssVariables(state.pm25.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x9x4ComputedData.editable" :c-style="tTextx0x9x4ComputedData.cStyle" :show-title="tTextx0x9x4ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-2379.985bd1025" class="pollutantConcentration-t-text-0-9-5"  :label="tTextx0x9x5ComputedData.label" :editable="tTextx0x9x5ComputedData.editable" :c-style="tTextx0x9x5ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`<t-row id="t-row-156f.2cd32ccf4" class="pollutantConcentration-t-row-0-10"  :c-style="tRowx0x10ComputedData.cStyle" :gutter="tRowx0x10ComputedData.gutter" :justify="tRowx0x10ComputedData.justify" :align="tRowx0x10ComputedData.align">` +
`<t-text id="t-text-c803.219c7080b" class="pollutantConcentration-t-text-0-10-0"  :label="replaceCssVariables(state.pm10.percentLabel, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x10x0ComputedData.editable" :c-style="tTextx0x10x0ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.pm10.percentStatus === 'up'" id="t-text-030a.6589dd5e7" class="pollutantConcentration-t-text-0-10-1"  :label="replaceCssVariables(state.pm10.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x10x1ComputedData.editable" :c-style="tTextx0x10x1ComputedData.cStyle" :show-title="tTextx0x10x1ComputedData.showTitle">` +
`</t-text>` +
`<t-text v-if="state.pm10.percentStatus === 'noData'" id="t-text-892d.67a85de6b" class="pollutantConcentration-t-text-0-10-2"  :label="replaceCssVariables(state.pm10.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x10x2ComputedData.editable" :c-style="tTextx0x10x2ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.pm10.percentStatus === 'flat'" id="t-text-2fc7.71270caba" class="pollutantConcentration-t-text-0-10-3"  :label="replaceCssVariables(state.pm10.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x10x3ComputedData.editable" :c-style="tTextx0x10x3ComputedData.cStyle" :show-title="tTextx0x10x3ComputedData.showTitle">` +
`</t-text>` +
`<t-text v-if="state.pm10.percentStatus === 'down'" id="t-text-8b7c.7c0982248" class="pollutantConcentration-t-text-0-10-4"  :label="replaceCssVariables(state.pm10.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x10x4ComputedData.editable" :c-style="tTextx0x10x4ComputedData.cStyle" :show-title="tTextx0x10x4ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-0d66.090a20a92" class="pollutantConcentration-t-text-0-10-5"  :label="tTextx0x10x5ComputedData.label" :editable="tTextx0x10x5ComputedData.editable" :c-style="tTextx0x10x5ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`<t-row id="t-row-c6cb.eabcf25a3" class="pollutantConcentration-t-row-0-11"  :c-style="tRowx0x11ComputedData.cStyle" :gutter="tRowx0x11ComputedData.gutter" :justify="tRowx0x11ComputedData.justify" :align="tRowx0x11ComputedData.align">` +
`<t-text id="t-text-0954.16d58dc38" class="pollutantConcentration-t-text-0-11-0"  :label="replaceCssVariables(state.so2.percentLabel, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x11x0ComputedData.editable" :c-style="tTextx0x11x0ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.so2.percentStatus === 'up'" id="t-text-831b.3c99094e7" class="pollutantConcentration-t-text-0-11-1"  :label="replaceCssVariables(state.so2.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x11x1ComputedData.editable" :c-style="tTextx0x11x1ComputedData.cStyle" :show-title="tTextx0x11x1ComputedData.showTitle">` +
`</t-text>` +
`<t-text v-if="state.so2.percentStatus === 'noData'" id="t-text-bb27.f68060f82" class="pollutantConcentration-t-text-0-11-2"  :label="replaceCssVariables(state.so2.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x11x2ComputedData.editable" :c-style="tTextx0x11x2ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.so2.percentStatus === 'flat'" id="t-text-b4dd.323716195" class="pollutantConcentration-t-text-0-11-3"  :label="replaceCssVariables(state.so2.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x11x3ComputedData.editable" :c-style="tTextx0x11x3ComputedData.cStyle" :show-title="tTextx0x11x3ComputedData.showTitle">` +
`</t-text>` +
`<t-text v-if="state.so2.percentStatus === 'down'" id="t-text-e413.9cdcb9e72" class="pollutantConcentration-t-text-0-11-4"  :label="replaceCssVariables(state.so2.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x11x4ComputedData.editable" :c-style="tTextx0x11x4ComputedData.cStyle" :show-title="tTextx0x11x4ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-1c5a.8af6a4321" class="pollutantConcentration-t-text-0-11-5"  :label="tTextx0x11x5ComputedData.label" :editable="tTextx0x11x5ComputedData.editable" :c-style="tTextx0x11x5ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`<t-text id="t-text-4349.fe9e51b69" class="pollutantConcentration-t-text-0-12"  :label="tTextx0x12ComputedData.label" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle" :label-raw="tTextx0x12ComputedData.labelRaw" @click="onclick1742361738884">` +
`</t-text>` +
`<t-text id="t-text-7848.4a9364015" class="pollutantConcentration-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle" :label-raw="tTextx0x13ComputedData.labelRaw" @click="onclick1742362754955">` +
`</t-text>` +
`<t-text id="t-text-8b19.4bcacb2b4" class="pollutantConcentration-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle" :label-raw="tTextx0x14ComputedData.labelRaw" @click="onclick1742362785864">` +
`</t-text>` +
`<t-rect id="t-rect-1993.62e489cf1" class="pollutantConcentration-t-rect-0-15"  :tip="tRectx0x15ComputedData.tip" :label="tRectx0x15ComputedData.label" :active="tRectx0x15ComputedData.active" :c-style="tRectx0x15ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-e9e4.8ca5da956" class="pollutantConcentration-t-rect-0-16"  :tip="tRectx0x16ComputedData.tip" :label="tRectx0x16ComputedData.label" :active="tRectx0x16ComputedData.active" :c-style="tRectx0x16ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-fd42.4305cdf5d" class="pollutantConcentration-t-rect-0-17"  :tip="tRectx0x17ComputedData.tip" :label="tRectx0x17ComputedData.label" :active="tRectx0x17ComputedData.active" :c-style="tRectx0x17ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-6138.df0de3b5" class="pollutantConcentration-t-rect-0-18"  :tip="tRectx0x18ComputedData.tip" :label="tRectx0x18ComputedData.label" :active="tRectx0x18ComputedData.active" :c-style="tRectx0x18ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-0d26.0f25eee03" class="pollutantConcentration-t-rect-0-19"  :tip="tRectx0x19ComputedData.tip" :label="tRectx0x19ComputedData.label" :active="tRectx0x19ComputedData.active" :c-style="tRectx0x19ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-6a5b.579550c3" class="pollutantConcentration-t-rect-0-20"  :tip="tRectx0x20ComputedData.tip" :label="tRectx0x20ComputedData.label" :active="tRectx0x20ComputedData.active" :c-style="tRectx0x20ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-unit id="t-text-unit-b38e.2365b30b2" class="pollutantConcentration-t-text-unit-0-21"  :c-style="tTextUnitx0x21ComputedData.cStyle" :justify="tTextUnitx0x21ComputedData.justify" :align="tTextUnitx0x21ComputedData.align" :content="replaceCssVariables(state.no2.value, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x21ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x21ComputedData.showOverflowTooltip" :unit-raw="tTextUnitx0x21ComputedData.unitRaw">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-af39.e0058a90b" class="pollutantConcentration-t-text-unit-0-22"  :c-style="tTextUnitx0x22ComputedData.cStyle" :justify="tTextUnitx0x22ComputedData.justify" :align="tTextUnitx0x22ComputedData.align" :content="replaceCssVariables(state.o3.value, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x22ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x22ComputedData.showOverflowTooltip" :unit-raw="tTextUnitx0x22ComputedData.unitRaw">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-2ca8.9842e92c6" class="pollutantConcentration-t-text-unit-0-23"  :c-style="tTextUnitx0x23ComputedData.cStyle" :justify="tTextUnitx0x23ComputedData.justify" :align="tTextUnitx0x23ComputedData.align" :content="replaceCssVariables(state.co.value, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x23ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x23ComputedData.showOverflowTooltip" :unit-raw="tTextUnitx0x23ComputedData.unitRaw">` +
`</t-text-unit>` +
`<t-row id="t-row-ab65.5a02f09d4" class="pollutantConcentration-t-row-0-24"  :c-style="tRowx0x24ComputedData.cStyle" :gutter="tRowx0x24ComputedData.gutter" :justify="tRowx0x24ComputedData.justify" :align="tRowx0x24ComputedData.align">` +
`<t-text id="t-text-ba6e.9b450bdcf" class="pollutantConcentration-t-text-0-24-0"  :label="replaceCssVariables(state.no2.percentLabel, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x24x0ComputedData.editable" :c-style="tTextx0x24x0ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.no2.percentStatus === 'up'" id="t-text-addf.4179a9112" class="pollutantConcentration-t-text-0-24-1"  :label="replaceCssVariables(state.no2.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x24x1ComputedData.editable" :c-style="tTextx0x24x1ComputedData.cStyle" :show-title="tTextx0x24x1ComputedData.showTitle">` +
`</t-text>` +
`<t-text v-if="state.no2.percentStatus === 'noData'" id="t-text-5e46.2aff8628b" class="pollutantConcentration-t-text-0-24-2"  :label="replaceCssVariables(state.no2.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x24x2ComputedData.editable" :c-style="tTextx0x24x2ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.no2.percentStatus === 'flat'" id="t-text-0833.a0bc3dd24" class="pollutantConcentration-t-text-0-24-3"  :label="replaceCssVariables(state.no2.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x24x3ComputedData.editable" :c-style="tTextx0x24x3ComputedData.cStyle" :show-title="tTextx0x24x3ComputedData.showTitle">` +
`</t-text>` +
`<t-text v-if="state.no2.percentStatus === 'down'" id="t-text-7409.acc770fa1" class="pollutantConcentration-t-text-0-24-4"  :label="replaceCssVariables(state.no2.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x24x4ComputedData.editable" :c-style="tTextx0x24x4ComputedData.cStyle" :show-title="tTextx0x24x4ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-6c38.936bdc244" class="pollutantConcentration-t-text-0-24-5"  :label="tTextx0x24x5ComputedData.label" :editable="tTextx0x24x5ComputedData.editable" :c-style="tTextx0x24x5ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`<t-row id="t-row-654d.4847200f4" class="pollutantConcentration-t-row-0-25"  :c-style="tRowx0x25ComputedData.cStyle" :gutter="tRowx0x25ComputedData.gutter" :justify="tRowx0x25ComputedData.justify" :align="tRowx0x25ComputedData.align">` +
`<t-text id="t-text-32af.b3f1b6fd2" class="pollutantConcentration-t-text-0-25-0"  :label="replaceCssVariables(state.o3.percentLabel, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x25x0ComputedData.editable" :c-style="tTextx0x25x0ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.o3.percentStatus === 'up'" id="t-text-beec.4dd21d3b3" class="pollutantConcentration-t-text-0-25-1"  :label="replaceCssVariables(state.o3.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x25x1ComputedData.editable" :c-style="tTextx0x25x1ComputedData.cStyle" :show-title="tTextx0x25x1ComputedData.showTitle">` +
`</t-text>` +
`<t-text v-if="state.o3.percentStatus === 'noData'" id="t-text-f4fe.e4a9f84e2" class="pollutantConcentration-t-text-0-25-2"  :label="replaceCssVariables(state.o3.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x25x2ComputedData.editable" :c-style="tTextx0x25x2ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.o3.percentStatus === 'flat'" id="t-text-ec6d.d3a614579" class="pollutantConcentration-t-text-0-25-3"  :label="replaceCssVariables(state.o3.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x25x3ComputedData.editable" :c-style="tTextx0x25x3ComputedData.cStyle" :show-title="tTextx0x25x3ComputedData.showTitle">` +
`</t-text>` +
`<t-text v-if="state.o3.percentStatus === 'down'" id="t-text-7aac.99edde438" class="pollutantConcentration-t-text-0-25-4"  :label="replaceCssVariables(state.o3.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x25x4ComputedData.editable" :c-style="tTextx0x25x4ComputedData.cStyle" :show-title="tTextx0x25x4ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-50c2.592905de5" class="pollutantConcentration-t-text-0-25-5"  :label="tTextx0x25x5ComputedData.label" :editable="tTextx0x25x5ComputedData.editable" :c-style="tTextx0x25x5ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`<t-row id="t-row-cf5a.a23d6023" class="pollutantConcentration-t-row-0-26"  :c-style="tRowx0x26ComputedData.cStyle" :gutter="tRowx0x26ComputedData.gutter" :justify="tRowx0x26ComputedData.justify" :align="tRowx0x26ComputedData.align">` +
`<t-text id="t-text-6cd5.f51e4f7d5" class="pollutantConcentration-t-text-0-26-0"  :label="replaceCssVariables(state.co.percentLabel, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x26x0ComputedData.editable" :c-style="tTextx0x26x0ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.co.percentStatus === 'up'" id="t-text-e90d.e89505dcd" class="pollutantConcentration-t-text-0-26-1"  :label="replaceCssVariables(state.co.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x26x1ComputedData.editable" :c-style="tTextx0x26x1ComputedData.cStyle" :show-title="tTextx0x26x1ComputedData.showTitle">` +
`</t-text>` +
`<t-text v-if="state.co.percentStatus === 'noData'" id="t-text-2126.6a156575b" class="pollutantConcentration-t-text-0-26-2"  :label="replaceCssVariables(state.co.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x26x2ComputedData.editable" :c-style="tTextx0x26x2ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="state.co.percentStatus === 'flat'" id="t-text-ba2c.c7d7ce86e" class="pollutantConcentration-t-text-0-26-3"  :label="replaceCssVariables(state.co.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x26x3ComputedData.editable" :c-style="tTextx0x26x3ComputedData.cStyle" :show-title="tTextx0x26x3ComputedData.showTitle">` +
`</t-text>` +
`<t-text v-if="state.co.percentStatus === 'down'" id="t-text-6601.65c7b2753" class="pollutantConcentration-t-text-0-26-4"  :label="replaceCssVariables(state.co.percentValue, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x26x4ComputedData.editable" :c-style="tTextx0x26x4ComputedData.cStyle" :show-title="tTextx0x26x4ComputedData.showTitle">` +
`</t-text>` +
`<t-text id="t-text-6788.01d109963" class="pollutantConcentration-t-text-0-26-5"  :label="tTextx0x26x5ComputedData.label" :editable="tTextx0x26x5ComputedData.editable" :c-style="tTextx0x26x5ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`<t-text id="t-text-679f.0d1aac849" class="pollutantConcentration-t-text-0-27"  :label="tTextx0x27ComputedData.label" :editable="tTextx0x27ComputedData.editable" :c-style="tTextx0x27ComputedData.cStyle" :label-raw="tTextx0x27ComputedData.labelRaw" @click="onclick1742362845138">` +
`</t-text>` +
`<t-text id="t-text-08f0.f7958be0c" class="pollutantConcentration-t-text-0-28"  :label="tTextx0x28ComputedData.label" :editable="tTextx0x28ComputedData.editable" :c-style="tTextx0x28ComputedData.cStyle" :label-raw="tTextx0x28ComputedData.labelRaw" @click="onclick1742362881618">` +
`</t-text>` +
`<t-text id="t-text-bcad.4a231a596" class="pollutantConcentration-t-text-0-29"  :label="tTextx0x29ComputedData.label" :editable="tTextx0x29ComputedData.editable" :c-style="tTextx0x29ComputedData.cStyle" @click="onclick1742362917034">` +
`</t-text>` +
`<t-rect v-if="state.ecologicalCloudAllState.selectedBlock === 'COConcentration'" id="t-rect-568f.c634bb6e5" class="pollutantConcentration-t-rect-0-30"  :tip="tRectx0x30ComputedData.tip" :label="tRectx0x30ComputedData.label" :active="tRectx0x30ComputedData.active" :c-style="tRectx0x30ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.ecologicalCloudAllState.selectedBlock === 'NO2Concentration'" id="t-rect-42ef.df199f09" class="pollutantConcentration-t-rect-0-31"  :tip="tRectx0x31ComputedData.tip" :label="tRectx0x31ComputedData.label" :active="tRectx0x31ComputedData.active" :c-style="tRectx0x31ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.ecologicalCloudAllState.selectedBlock === 'O3Concentration'" id="t-rect-ffc7.1173ebd42" class="pollutantConcentration-t-rect-0-32"  :tip="tRectx0x32ComputedData.tip" :label="tRectx0x32ComputedData.label" :active="tRectx0x32ComputedData.active" :c-style="tRectx0x32ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.ecologicalCloudAllState.selectedBlock === 'SO2Concentration'" id="t-rect-589d.719e48cc6" class="pollutantConcentration-t-rect-0-33"  :tip="tRectx0x33ComputedData.tip" :label="tRectx0x33ComputedData.label" :active="tRectx0x33ComputedData.active" :c-style="tRectx0x33ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.ecologicalCloudAllState.selectedBlock === 'PM10Concentration'" id="t-rect-dcf9.b15508b01" class="pollutantConcentration-t-rect-0-34"  :tip="tRectx0x34ComputedData.tip" :label="tRectx0x34ComputedData.label" :active="tRectx0x34ComputedData.active" :c-style="tRectx0x34ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.ecologicalCloudAllState.selectedBlock === 'PM25Concentration'" id="t-rect-e48d.e8ee5c263" class="pollutantConcentration-t-rect-0-35"  :tip="tRectx0x35ComputedData.tip" :label="tRectx0x35ComputedData.label" :active="tRectx0x35ComputedData.active" :c-style="tRectx0x35ComputedData.cStyle">` +
`</t-rect>` +
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
   appURL: "http://192.168.0.202:7777/mapgo5.0/preview.html?appID=3d40efbdcf1a4b7e97a24e9d971206eb&appType=2D&appName=%E9%A9%BE%E9%A9%B6%E8%88%B1-%E7%94%9F%E6%80%81%E4%BA%91-%E5%A4%A7%E6%B0%94",
   ecologicalCloudAllState: {"selectedBlock":""},
   airQualityState: {"tabSelect":"day","monitorTime":"","yearMonth":"","dateType":""},
   pm10: {"value":"--","percentValue":"--","percentStatus":"noData","percentLabel":"环比"},
   pm25: {"value":"--","percentValue":"--","percentStatus":"noData","percentLabel":"环比"},
   so2: {"value":"--","percentValue":"--","percentStatus":"noData","percentLabel":"环比"},
   no2: {"value":"--","percentValue":"--","percentStatus":"noData","percentLabel":"环比"},
   o3: {"value":"--","percentValue":"--","percentStatus":"noData","percentLabel":"环比"},
   co: {"value":"--","percentValue":"--","percentStatus":"noData","percentLabel":"环比"},
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
            default: {"width":"191px","height":"62px","position":"unset","left":"5px","top":"0px","backgroundImage":"var(--t-index-bg)","border":"1px solid","borderImage":"var(--t-index-border) 1"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"62px","position":"unset","left":"5px","top":"0px","backgroundImage":"var(--t-index-bg)","border":"1px solid","borderImage":"var(--t-index-border) 1"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"191px","height":"62px","position":"unset","left":"204px","top":"0px","backgroundImage":"var(--t-index-bg)","border":"1px solid","borderImage":"var(--t-index-border) 1","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"62px","position":"unset","left":"204px","top":"0px","backgroundImage":"var(--t-index-bg)","border":"1px solid","borderImage":"var(--t-index-border) 1","animationName":""}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"191px","height":"62px","position":"unset","left":"5px","top":"70px","backgroundImage":"var(--t-index-bg)","border":"1px solid","borderImage":"var(--t-index-border) 1","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"62px","position":"unset","left":"5px","top":"70px","backgroundImage":"var(--t-index-bg)","border":"1px solid","borderImage":"var(--t-index-border) 1","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"16px","height":"16px","backgroundImage":"var(--nd-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"12px","top":"8px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"16px","height":"16px","backgroundImage":"var(--nd-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"12px","top":"8px"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"16px","height":"16px","backgroundImage":"var(--nd-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"216px","top":"8px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"16px","height":"16px","backgroundImage":"var(--nd-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"216px","top":"8px","animationName":""}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"16px","height":"16px","backgroundImage":"var(--nd-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"12px","top":"78px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"16px","height":"16px","backgroundImage":"var(--nd-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"12px","top":"78px","animationName":""}}}, 
 },
},
tTextUnitx0x6: {
defaultStyle: {
            default: {"width":"96px","height":"24px","position":"unset","left":"11px","top":"30px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"96px","height":"24px","position":"unset","left":"11px","top":"30px"}},"text":{"default":{"fontSize":"24px","fontWeight":"700","fontFamily":"DIN-black","lineHeight":"24px","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","marginLeft":"5px"}}},
justify:"flex-start",
align:"flex-end",
content:"--",
unit:"μg/m³",
showOverflowTooltip:true,
unitRaw:"μg/{{M3}}", 
 },
},
tTextUnitx0x7: {
defaultStyle: {
            default: {"width":"96px","height":"24px","position":"unset","left":"215px","top":"30px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"96px","height":"24px","position":"unset","left":"215px","top":"30px","animationName":""}},"text":{"default":{"fontSize":"24px","fontWeight":"700","fontFamily":"DIN-black","lineHeight":"24px","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","marginLeft":"5px"}}},
justify:"flex-start",
align:"flex-end",
content:"--",
unit:"μg/m³",
showOverflowTooltip:true,
unitRaw:"μg/{{M3}}", 
 },
},
tTextUnitx0x8: {
defaultStyle: {
            default: {"width":"96px","height":"24px","position":"unset","left":"11px","top":"100px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"96px","height":"24px","position":"unset","left":"11px","top":"100px","animationName":""}},"text":{"default":{"fontSize":"24px","fontWeight":"700","fontFamily":"DIN-black","lineHeight":"24px","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","marginLeft":"5px"}}},
justify:"flex-start",
align:"flex-end",
content:"--",
unit:"μg/m³",
showOverflowTooltip:true,
unitRaw:"μg/{{M3}}", 
 },
},
tRowx0x9: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"109px","top":"30px","letterSpacing":"0px","animationName":"","fontWeight":"600","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"109px","top":"30px","letterSpacing":"0px","animationName":"","fontWeight":"600","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x9x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--sjyy-text)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"414.4390687019594px","top":"473.66978602255546px","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"0px"},
            
            },
 default: { 
 
label:"环比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--sjyy-text)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"414.4390687019594px","top":"473.66978602255546px","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"0px"}}}, 
 },
},
tTextx0x9x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#FF3131","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"424.4390687019594px","top":"483.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#FF3131","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"424.4390687019594px","top":"483.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x9x2: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#5BFF5E","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"434.4390687019594px","top":"503.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","max-width":"41px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#5BFF5E","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"434.4390687019594px","top":"503.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","max-width":"41px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"}}},
showTitle:true, 
 },
},
tTextx0x9x3: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"434.4390687019594px","top":"503.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"434.4390687019594px","top":"503.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px"}}}, 
 },
},
tTextx0x9x4: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"424.4390687019594px","top":"493.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"424.4390687019594px","top":"493.66978602255546px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x9x5: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"2px","left":"434.4390687019594px","top":"493.66978602255546px"},
            
            },
 default: { 
 
label:"%",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"2px","left":"434.4390687019594px","top":"493.66978602255546px"}}}, 
 },
},
tRowx0x10: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"313px","top":"30px","letterSpacing":"0px","animationName":"","fontWeight":"600","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"313px","top":"30px","letterSpacing":"0px","animationName":"","fontWeight":"600","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x10x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--sjyy-text)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"698.0640992195375px","top":"481.7063191916161px","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"0px"},
            
            },
 default: { 
 
label:"环比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--sjyy-text)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"698.0640992195375px","top":"481.7063191916161px","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"0px"}}}, 
 },
},
tTextx0x10x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#FF3131","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"708.0640992195375px","top":"491.7063191916161px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#FF3131","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"708.0640992195375px","top":"491.7063191916161px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x10x2: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"728.0640992195375px","top":"521.706319191616px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"728.0640992195375px","top":"521.706319191616px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px"}}}, 
 },
},
tTextx0x10x3: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"718.0640992195375px","top":"511.7063191916161px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"718.0640992195375px","top":"511.7063191916161px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x10x4: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#5BFF5E","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"708.0640992195375px","top":"501.7063191916161px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#5BFF5E","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"708.0640992195375px","top":"501.7063191916161px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x10x5: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"2px","left":"718.0640992195375px","top":"501.7063191916161px"},
            
            },
 default: { 
 
label:"%",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"2px","left":"718.0640992195375px","top":"501.7063191916161px"}}}, 
 },
},
tRowx0x11: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"109px","top":"100px","letterSpacing":"0px","animationName":"","fontWeight":"600","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"109px","top":"100px","letterSpacing":"0px","animationName":"","fontWeight":"600","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x11x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--sjyy-text)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"517.034191458962px","top":"563.8157861215161px","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"0px"},
            
            },
 default: { 
 
label:"环比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--sjyy-text)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"517.034191458962px","top":"563.8157861215161px","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"0px"}}}, 
 },
},
tTextx0x11x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#FF3131","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"527.034191458962px","top":"573.8157861215161px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#FF3131","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"527.034191458962px","top":"573.8157861215161px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x11x2: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"547.034191458962px","top":"603.8157861215161px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"547.034191458962px","top":"603.8157861215161px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px"}}}, 
 },
},
tTextx0x11x3: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"537.034191458962px","top":"593.8157861215161px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"537.034191458962px","top":"593.8157861215161px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x11x4: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#5BFF5E","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"527.034191458962px","top":"583.8157861215161px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#5BFF5E","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"527.034191458962px","top":"583.8157861215161px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x11x5: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","fontSize":"14px","lineHeight":"14px","marginBottom":"-5px","marginLeft":"2px","left":"537.034191458962px","top":"583.8157861215161px"},
            
            },
 default: { 
 
label:"%",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","fontSize":"14px","lineHeight":"14px","marginBottom":"-5px","marginLeft":"2px","left":"537.034191458962px","top":"583.8157861215161px"}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"70px","height":"20px","color":"var(--t-text)","fontSize":"14px","fontFamily":"思源黑体","fontWeight":"500","lineHeight":"20px","top":"6px","left":"32px","position":"unset","cursor":"pointer"},
            
            },
 default: { 
 
label:"PM₂.₅浓度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"20px","color":"var(--t-text)","fontSize":"14px","fontFamily":"思源黑体","fontWeight":"500","lineHeight":"20px","top":"6px","left":"32px","position":"unset","cursor":"pointer"}}},
labelRaw:"{{PM25}}浓度", 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"70px","height":"20px","color":"var(--t-text)","fontSize":"14px","fontFamily":"思源黑体","fontWeight":"500","lineHeight":"20px","top":"6px","left":"236px","position":"unset","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
label:"PM₁₀浓度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"20px","color":"var(--t-text)","fontSize":"14px","fontFamily":"思源黑体","fontWeight":"500","lineHeight":"20px","top":"6px","left":"236px","position":"unset","animationName":"","cursor":"pointer"}}},
labelRaw:"{{PM10}}浓度", 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"70px","height":"20px","color":"var(--t-text)","fontSize":"14px","fontFamily":"思源黑体","fontWeight":"500","lineHeight":"20px","top":"76px","left":"32px","position":"unset","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
label:"SO₂浓度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"20px","color":"var(--t-text)","fontSize":"14px","fontFamily":"思源黑体","fontWeight":"500","lineHeight":"20px","top":"76px","left":"32px","position":"unset","animationName":"","cursor":"pointer"}}},
labelRaw:"{{SO2}}浓度", 
 },
},
tRectx0x15: {
defaultStyle: {
            default: {"width":"191px","height":"62px","position":"unset","left":"204px","top":"70px","backgroundImage":"var(--t-index-bg)","border":"1px solid","borderImage":"var(--t-index-border) 1","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"62px","position":"unset","left":"204px","top":"70px","backgroundImage":"var(--t-index-bg)","border":"1px solid","borderImage":"var(--t-index-border) 1","animationName":""}}}, 
 },
},
tRectx0x16: {
defaultStyle: {
            default: {"width":"191px","height":"62px","position":"unset","left":"5px","top":"139px","backgroundImage":"var(--t-index-bg)","border":"1px solid","borderImage":"var(--t-index-border) 1","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"62px","position":"unset","left":"5px","top":"139px","backgroundImage":"var(--t-index-bg)","border":"1px solid","borderImage":"var(--t-index-border) 1","animationName":""}}}, 
 },
},
tRectx0x17: {
defaultStyle: {
            default: {"width":"191px","height":"62px","position":"unset","left":"204px","top":"139px","backgroundImage":"var(--t-index-bg)","border":"1px solid","borderImage":"var(--t-index-border) 1","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"62px","position":"unset","left":"204px","top":"139px","backgroundImage":"var(--t-index-bg)","border":"1px solid","borderImage":"var(--t-index-border) 1","animationName":""}}}, 
 },
},
tRectx0x18: {
defaultStyle: {
            default: {"width":"16px","height":"16px","backgroundImage":"var(--nd-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"216px","top":"78px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"16px","height":"16px","backgroundImage":"var(--nd-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"216px","top":"78px","animationName":""}}}, 
 },
},
tRectx0x19: {
defaultStyle: {
            default: {"width":"16px","height":"16px","backgroundImage":"var(--nd-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"12px","top":"147px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"16px","height":"16px","backgroundImage":"var(--nd-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"12px","top":"147px","animationName":""}}}, 
 },
},
tRectx0x20: {
defaultStyle: {
            default: {"width":"16px","height":"16px","backgroundImage":"var(--nd-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"216px","top":"147px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"16px","height":"16px","backgroundImage":"var(--nd-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"216px","top":"147px","animationName":""}}}, 
 },
},
tTextUnitx0x21: {
defaultStyle: {
            default: {"width":"96px","height":"24px","position":"unset","left":"215px","top":"100px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"96px","height":"24px","position":"unset","left":"215px","top":"100px","animationName":""}},"text":{"default":{"fontSize":"24px","fontWeight":"700","fontFamily":"DIN-black","lineHeight":"24px","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","marginLeft":"5px"}}},
justify:"flex-start",
align:"flex-end",
content:"--",
unit:"μg/m³",
showOverflowTooltip:true,
unitRaw:"μg/{{M3}}", 
 },
},
tTextUnitx0x22: {
defaultStyle: {
            default: {"width":"96px","height":"24px","position":"unset","left":"11px","top":"169px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"96px","height":"24px","position":"unset","left":"11px","top":"169px","animationName":""}},"text":{"default":{"fontSize":"24px","fontWeight":"700","fontFamily":"DIN-black","lineHeight":"24px","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","marginLeft":"5px"}}},
justify:"flex-start",
align:"flex-end",
content:"--",
unit:"μg/m³",
showOverflowTooltip:true,
unitRaw:"μg/{{M3}}", 
 },
},
tTextUnitx0x23: {
defaultStyle: {
            default: {"width":"96px","height":"24px","position":"unset","left":"215px","top":"169px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"96px","height":"24px","position":"unset","left":"215px","top":"169px","animationName":""}},"text":{"default":{"fontSize":"24px","fontWeight":"700","fontFamily":"DIN-black","lineHeight":"24px","color":"var(--t-text)"}},"unit":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","marginLeft":"5px"}}},
justify:"flex-start",
align:"flex-end",
content:"--",
unit:"mg/m³",
showOverflowTooltip:true,
unitRaw:"mg/{{M3}}", 
 },
},
tRowx0x24: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"313px","top":"100px","letterSpacing":"0px","animationName":"","fontWeight":"600","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"313px","top":"100px","letterSpacing":"0px","animationName":"","fontWeight":"600","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x24x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--sjyy-text)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"722.8269017879917px","top":"569.4236215375217px","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"0px"},
            
            },
 default: { 
 
label:"环比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--sjyy-text)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"722.8269017879917px","top":"569.4236215375217px","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"0px"}}}, 
 },
},
tTextx0x24x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#FF3131","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"732.8269017879917px","top":"579.4236215375217px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#FF3131","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"732.8269017879917px","top":"579.4236215375217px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x24x2: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"752.8269017879917px","top":"609.4236215375217px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"752.8269017879917px","top":"609.4236215375217px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px"}}}, 
 },
},
tTextx0x24x3: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"742.8269017879917px","top":"599.4236215375217px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"742.8269017879917px","top":"599.4236215375217px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x24x4: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#5BFF5E","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"732.8269017879917px","top":"589.4236215375217px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#5BFF5E","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"732.8269017879917px","top":"589.4236215375217px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x24x5: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"2px","left":"742.8269017879917px","top":"589.4236215375217px"},
            
            },
 default: { 
 
label:"%",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"2px","left":"742.8269017879917px","top":"589.4236215375217px"}}}, 
 },
},
tRowx0x25: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"109px","top":"169px","letterSpacing":"0px","animationName":"","fontWeight":"600","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"109px","top":"169px","letterSpacing":"0px","animationName":"","fontWeight":"600","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x25x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--sjyy-text)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"544.2240139531702px","top":"672.9155125810485px","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"0px"},
            
            },
 default: { 
 
label:"环比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--sjyy-text)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"544.2240139531702px","top":"672.9155125810485px","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"0px"}}}, 
 },
},
tTextx0x25x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#FF3131","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"554.2240139531702px","top":"682.9155125810485px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#FF3131","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"554.2240139531702px","top":"682.9155125810485px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x25x2: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"574.2240139531702px","top":"712.9155125810485px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"574.2240139531702px","top":"712.9155125810485px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px"}}}, 
 },
},
tTextx0x25x3: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"564.2240139531702px","top":"702.9155125810485px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"564.2240139531702px","top":"702.9155125810485px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x25x4: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#5BFF5E","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"554.2240139531702px","top":"692.9155125810485px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#5BFF5E","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"554.2240139531702px","top":"692.9155125810485px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x25x5: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"2px","left":"564.2240139531702px","top":"692.9155125810485px"},
            
            },
 default: { 
 
label:"%",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"2px","left":"564.2240139531702px","top":"692.9155125810485px"}}}, 
 },
},
tRowx0x26: {
defaultStyle: {
            default: {"width":"86px","height":"24px","position":"unset","left":"313px","top":"169px","letterSpacing":"0px","animationName":"","fontWeight":"600","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"86px","height":"24px","position":"unset","left":"313px","top":"169px","letterSpacing":"0px","animationName":"","fontWeight":"600","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x26x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--sjyy-text)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"824.3011318730921px","top":"690.8949361039977px","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"0px"},
            
            },
 default: { 
 
label:"环比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--sjyy-text)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"824.3011318730921px","top":"690.8949361039977px","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"0px"}}}, 
 },
},
tTextx0x26x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#FF3131","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"834.3011318730921px","top":"700.8949361039977px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#FF3131","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"834.3011318730921px","top":"700.8949361039977px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x26x2: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"854.3011318730921px","top":"730.8949361039977px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"854.3011318730921px","top":"730.8949361039977px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px"}}}, 
 },
},
tTextx0x26x3: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"844.3011318730921px","top":"720.8949361039977px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","max-width":"41px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"844.3011318730921px","top":"720.8949361039977px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","max-width":"41px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"}}},
showTitle:true, 
 },
},
tTextx0x26x4: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"#5BFF5E","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"834.3011318730921px","top":"710.8949361039977px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"#5BFF5E","fontFamily":"DIN-black","fontWeight":"500","animationName":"","left":"834.3011318730921px","top":"710.8949361039977px","fontSize":"16px","lineHeight":"20px","marginBottom":"-4px","marginLeft":"2px","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"41px","overflow":"hidden"}}},
showTitle:true, 
 },
},
tTextx0x26x5: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"2px","left":"844.3011318730921px","top":"710.8949361039977px"},
            
            },
 default: { 
 
label:"%",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","fontSize":"14px","lineHeight":"14px","marginBottom":"-4px","marginLeft":"2px","left":"844.3011318730921px","top":"710.8949361039977px"}}}, 
 },
},
tTextx0x27: {
defaultStyle: {
            default: {"width":"70px","height":"20px","color":"var(--t-text)","fontSize":"14px","fontFamily":"思源黑体","fontWeight":"500","lineHeight":"20px","top":"76px","left":"238px","position":"unset","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
label:"NO₂浓度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"20px","color":"var(--t-text)","fontSize":"14px","fontFamily":"思源黑体","fontWeight":"500","lineHeight":"20px","top":"76px","left":"238px","position":"unset","animationName":"","cursor":"pointer"}}},
labelRaw:"{{NO2}}浓度", 
 },
},
tTextx0x28: {
defaultStyle: {
            default: {"width":"70px","height":"20px","color":"var(--t-text)","fontSize":"14px","fontFamily":"思源黑体","fontWeight":"500","lineHeight":"20px","top":"145px","left":"32px","position":"unset","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
label:"O₃浓度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"20px","color":"var(--t-text)","fontSize":"14px","fontFamily":"思源黑体","fontWeight":"500","lineHeight":"20px","top":"145px","left":"32px","position":"unset","animationName":"","cursor":"pointer"}}},
labelRaw:"{{O3}}浓度", 
 },
},
tTextx0x29: {
defaultStyle: {
            default: {"width":"70px","height":"20px","color":"var(--t-text)","fontSize":"14px","fontFamily":"思源黑体","fontWeight":"500","lineHeight":"20px","top":"145px","left":"236px","position":"unset","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
label:"CO浓度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"20px","color":"var(--t-text)","fontSize":"14px","fontFamily":"思源黑体","fontWeight":"500","lineHeight":"20px","top":"145px","left":"236px","position":"unset","animationName":"","cursor":"pointer"}}}, 
 },
},
tRectx0x30: {
defaultStyle: {
            default: {"width":"191px","height":"62px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","position":"unset","left":"204px","top":"139px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"62px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","position":"unset","left":"204px","top":"139px","animationName":""}}}, 
 },
},
tRectx0x31: {
defaultStyle: {
            default: {"width":"191px","height":"62px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","position":"unset","left":"204px","top":"70px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"62px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","position":"unset","left":"204px","top":"70px","animationName":""}}}, 
 },
},
tRectx0x32: {
defaultStyle: {
            default: {"width":"191px","height":"62px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","position":"unset","left":"5px","top":"139px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"62px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","position":"unset","left":"5px","top":"139px","animationName":""}}}, 
 },
},
tRectx0x33: {
defaultStyle: {
            default: {"width":"191px","height":"62px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","position":"unset","left":"5px","top":"70px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"62px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","position":"unset","left":"5px","top":"70px","animationName":""}}}, 
 },
},
tRectx0x34: {
defaultStyle: {
            default: {"width":"191px","height":"62px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","position":"unset","left":"204px","top":"0px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"62px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","position":"unset","left":"204px","top":"0px","animationName":""}}}, 
 },
},
tRectx0x35: {
defaultStyle: {
            default: {"width":"191px","height":"62px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","position":"unset","left":"5px","top":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"62px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","position":"unset","left":"5px","top":"0px"}}}, 
 },
},
});
const getProvider = () => {
const rootData = inject('airQualityState');
// 生态云整体-state
const wholeRootData = inject('ecologicalCloudAllState');
state.ecologicalCloudAllState = wholeRootData;

// 引入生态云整体（父级页面）的方法，并赋值给state对应的变量，调用直接state.xxx()
state.removeExistedMapScenes = inject('removeExistedMapScenes');
state.closeRealtimeSide = inject('closeRealtimeSide');

watch(() => rootData, (val) => {
  state.airQualityState = rootData;
  resetValue();
  // 关闭实时数据侧边页面
  state.closeRealtimeSide();
  if (val.monitorTime) {
    if (val.tabSelect === 'day') {
      state.ecologicalCloudAllState.selectedBlock = 'PM25Concentration';
      getDayData();
    } else {
      state.ecologicalCloudAllState.selectedBlock = 'airExcellentRate';
      getMonthYearData();
    }
  }
    sendMes();
},
  {
    deep: true,
    immediate: true,
  }
);

watch(() => global.REGION_CODE, () => {
  resetValue();
  if (state.airQualityState.tabSelect === 'day') {
    getDayData();
  } else {
    getMonthYearData();
  }
  sendMes();
});
};
const resetValue = () => {
// 重置值
state.pm10 = {
  value: '--',
  percentValue: '--',
  percentStatus: 'noData',
  percentLabel: state.dateType === 'day' ? '环比' : '同比',
};
state.pm25 = {
  value: '--',
  percentValue: '--',
  percentStatus: 'noData',
  percentLabel: state.dateType === 'day' ? '环比' : '同比',
};
state.so2 = {
  value: '--',
  percentValue: '--',
  percentStatus: 'noData',
  percentLabel: state.dateType === 'day' ? '环比' : '同比',
};
state.no2 = {
  value: '--',
  percentValue: '--',
  percentStatus: 'noData',
  percentLabel: state.dateType === 'day' ? '环比' : '同比',
};
state.o3 = {
  value: '--',
  percentValue: '--',
  percentStatus: 'noData',
  percentLabel: state.dateType === 'day' ? '环比' : '同比',
};
state.co = {
  value: '--',
  percentValue: '--',
  percentStatus: 'noData',
  percentLabel: state.dateType === 'day' ? '环比' : '同比',
};
};
const sendMes = () => {
const regionLevelText = getRegionLevel(global.REGION_CODE);
const theme = global.theme === '蓝色主题' ? 'blue' : 'green';
// 污染物浓度的是否选中的判断标识为污染物`${code}Concentration`
const selectedPollutionCode = state.ecologicalCloudAllState.selectedBlock.split('Concentration')[0];

function sendChangeAllStatusMes() {
  console.log(regionLevelText, 'regionLevelTextregionLevelText');
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: 'changeAllStatus',
    data: {
      indicator: selectedPollutionCode, // 指标
      rendType: 'idw', //渲染类型 idw:插值图 realtime:实时监控
      time: state.airQualityState.dateType === 'DAY' ? state.airQualityState.monitorTime : state.airQualityState.yearMonth, // 时间
      dateType: state.airQualityState.dateType,//时间类型，默认DAY,小时：HOUR,日：DAY,月：CUR_MONTH、年：ACC_MONTH
      REGION_NAME: global.REGION_NAME, // 行政区名称，非必须
      REGION_CODE: global.REGION_CODE, // 行政区编码
      theme: theme,
      dataSource: 'sty', // 如果是生态云发送的消息，加上这个值
    },
  });
}
// 当前选中模块是污染物浓度且实时数据按钮没有选中
if (state.ecologicalCloudAllState.selectedBlock
  && state.ecologicalCloudAllState.selectedBlock.endsWith('Concentration')
  && !state.ecologicalCloudAllState.realtimeBtnActive
) {
  if (regionLevelText === 'province') {
    state.ecologicalCloudAllState.isPollutionConcentrationSendAR = false;
    sendChangeAllStatusMes();
    global.toolType = 'airToolComponent';
    global.toolName = '大气监测站';
    global.isMapTool = true;
    global.isTool = true;

  }
  if (regionLevelText === 'city' || regionLevelText === 'county') {
    global.isMapTool = false;
    if (!state.ecologicalCloudAllState.isPollutionConcentrationSendAR) {
      // 先移除，再加载
      // 引入生态云整体（父级页面）的方法，并赋值给state对应的变量，调用直接state.xxx()
      if (state.removeExistedMapScenes) {
        state.removeExistedMapScenes();
      }
      setTimeout(() => {
        rootData.rootSocket.emit('message', {
          room: global.socketRoom, // 房间号
          type: 'setAppAR', // 消息名称
          data: [
            {
              resCode: 'air',
              resName: '大气',
              opType: 'add',
              appURL: state.appURL,
            }
          ],
        });
      }, 500);

      // changeGlobalValue();
      global.mapChangeAllStatusParams = {
        indicator: selectedPollutionCode, // 指标
        time: state.airQualityState.dateType === 'DAY' ? state.airQualityState.monitorTime : state.airQualityState.yearMonth,
        dateType: state.airQualityState.dateType,
        rendType: 'idw',
      };
      state.ecologicalCloudAllState.isPollutionConcentrationSendAR = true;
      // 其他是否切换场景置为false，以便再次点击对应内容的时候切换对应的二维场景
      state.ecologicalCloudAllState.isExcellentRateSendAR = false;
      state.ecologicalCloudAllState.isSectionSendAppAR = false;
      state.ecologicalCloudAllState.isProportionSendAppAR = false;
      state.ecologicalCloudAllState.isPwxkTypeSendAppAR = false;
      return;
    }
    sendChangeAllStatusMes();
  }
}

};
const changeGlobalValue = () => {
// 每个污染物浓度选中时，值为污染物编码拼接上Concentration
const selectedPollutionCode = state.ecologicalCloudAllState.selectedBlock.split('Concentration')[0];
global.mapChangeAllStatusParams = {
  indicator: selectedPollutionCode, // 指标
  time: state.airQualityState.dateType === 'DAY' ? state.airQualityState.monitorTime : state.airQualityState.yearMonth,
  dateType: state.airQualityState.dateType,
  rendType: 'idw',
};
};
const handleCardTitleClick = (value) => {
if (value !== state.ecologicalCloudAllState.selectedBlock) {
  state.ecologicalCloudAllState.selectedBlock = value;
  // 关闭实时数据侧边页面
  state.closeRealtimeSide();
  sendMes();
}
};
const onclick1742361738884 = () => {
// 执行自定义方法
handleCardTitleClick("PM25Concentration");
};
const onclick1742362754955 = () => {
// 执行自定义方法
handleCardTitleClick("PM10Concentration");
};
const onclick1742362785864 = () => {
// 执行自定义方法
handleCardTitleClick("SO2Concentration");
};
const onclick1742362845138 = () => {
// 执行自定义方法
handleCardTitleClick("NO2Concentration");
};
const onclick1742362881618 = () => {
// 执行自定义方法
handleCardTitleClick("O3Concentration");
};
const onclick1742362917034 = () => {
// 执行自定义方法
handleCardTitleClick("COConcentration");
};
// 接口函数
const getDayData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITOR_TIME":state.airQualityState.monitorTime,"POINT_CODE":global.REGION_CODE,"interfaceId":"b2152cf3154ed405f234d14e48c01ed9"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
if (data) {
  const pm10Value = handleUpOrDownValue(data.PM10_CHANGE_PERCENT);
  const pm25Value = handleUpOrDownValue(data.PM25_CHANGE_PERCENT);
  const so2Value = handleUpOrDownValue(data.SO2_CHANGE_PERCENT);
  const no2Value = handleUpOrDownValue(data.NO2_CHANGE_PERCENT);
  const o3Value = handleUpOrDownValue(data.O3_CHANGE_PERCENT);
  const coValue = handleUpOrDownValue(data.CO_CHANGE_PERCENT);

  state.pm10 = {
    value: handleNoVal(data.PM10),
    percentValue: pm10Value.text,
    percentStatus: pm10Value.status,
    percentLabel: '环比',
  };
  state.pm25 = {
    value: handleNoVal(data.PM25),
    percentValue: pm25Value.text,
    percentStatus: pm25Value.status,
    percentLabel: '环比',
  };
  state.so2 = {
    value: handleNoVal(data.SO2),
    percentValue: so2Value.text,
    percentStatus: so2Value.status,
    percentLabel: '环比',
  };
  state.no2 = {
    value: handleNoVal(data.NO2),
    percentValue: no2Value.text,
    percentStatus: no2Value.status,
    percentLabel: '环比',
  };
  state.o3 = {
    value: handleNoVal(data.O3),
    percentValue: o3Value.text,
    percentStatus: o3Value.status,
    percentLabel: '环比',
  };
  state.co = {
    value: handleNoVal(data.CO),
    percentValue: coValue.text,
    percentStatus: coValue.status,
    percentLabel: '环比',
  };
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getMonthYearData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"DATE_TYPE":state.airQualityState.dateType,"MONITOR_TIME":state.airQualityState.yearMonth,"POINT_CODE":global.REGION_CODE,"interfaceId":"83db7506f03980c3178a2ce16b2dcb44"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
if (data && data.length) {
  const rowData = data[0] || {};
  const pm10Value = handleUpOrDownValue(rowData.PM10_CHANGE_PERCENT);
  const pm25Value = handleUpOrDownValue(rowData.PM25_CHANGE_PERCENT);
  const so2Value = handleUpOrDownValue(rowData.SO2_CHANGE_PERCENT);
  const no2Value = handleUpOrDownValue(rowData.NO2_CHANGE_PERCENT);
  const o3Value = handleUpOrDownValue(rowData.O3_CHANGE_PERCENT);
  const coValue = handleUpOrDownValue(rowData.CO_CHANGE_PERCENT);
  state.pm10 = {
    value: handleNoVal(rowData.PM10),
    percentValue: pm10Value.text,
    percentStatus: pm10Value.status,
    percentLabel: '同比',
  };
  state.pm25 = {
    value: handleNoVal(rowData.PM25),
    percentValue: pm25Value.text,
    percentStatus: pm25Value.status,
    percentLabel: '同比',
  };
  state.so2 = {
    value: handleNoVal(rowData.SO2),
    percentValue: so2Value.text,
    percentStatus: so2Value.status,
    percentLabel: '同比',
  };
  state.no2 = {
    value: handleNoVal(rowData.NO2),
    percentValue: no2Value.text,
    percentStatus: no2Value.status,
    percentLabel: '同比',
  };
  state.o3 = {
    value: handleNoVal(rowData.O3),
    percentValue: o3Value.text,
    percentStatus: o3Value.status,
    percentLabel: '同比',
  };
  state.co = {
    value: handleNoVal(rowData.CO),
    percentValue: coValue.text,
    percentStatus: coValue.status,
    percentLabel: '同比',
  };
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-pollutantConcentration', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
/* 接收socket.io消息 */
const onSocketChangeece93c5f0ebe4a35a2fb = function (data) {
if(data.type === "closeStyRealtime"){
try{
// 执行自定义方法
sendMes();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangeece93c5f0ebe4a35a2fb);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangeece93c5f0ebe4a35a2fb);
});
onMounted(() => {
setPageScale('t-l-c-pollutantConcentration', global.appScaleMode, 'normal');
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

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tTextUnitx0x6ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x6.default, componentState.tTextUnitx0x6?.[state.screenSize]));

 const tTextUnitx0x7ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x7.default, componentState.tTextUnitx0x7?.[state.screenSize]));

 const tTextUnitx0x8ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x8.default, componentState.tTextUnitx0x8?.[state.screenSize]));

 const tRowx0x9ComputedData = computed(() => _.merge({}, componentState.tRowx0x9.default, componentState.tRowx0x9?.[state.screenSize]));

 const tTextx0x9x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x9x0.default, componentState.tTextx0x9x0?.[state.screenSize]));

 const tTextx0x9x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x9x1.default, componentState.tTextx0x9x1?.[state.screenSize]));

 const tTextx0x9x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x9x2.default, componentState.tTextx0x9x2?.[state.screenSize]));

 const tTextx0x9x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x9x3.default, componentState.tTextx0x9x3?.[state.screenSize]));

 const tTextx0x9x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x9x4.default, componentState.tTextx0x9x4?.[state.screenSize]));

 const tTextx0x9x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x9x5.default, componentState.tTextx0x9x5?.[state.screenSize]));

 const tRowx0x10ComputedData = computed(() => _.merge({}, componentState.tRowx0x10.default, componentState.tRowx0x10?.[state.screenSize]));

 const tTextx0x10x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x10x0.default, componentState.tTextx0x10x0?.[state.screenSize]));

 const tTextx0x10x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x10x1.default, componentState.tTextx0x10x1?.[state.screenSize]));

 const tTextx0x10x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x10x2.default, componentState.tTextx0x10x2?.[state.screenSize]));

 const tTextx0x10x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x10x3.default, componentState.tTextx0x10x3?.[state.screenSize]));

 const tTextx0x10x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x10x4.default, componentState.tTextx0x10x4?.[state.screenSize]));

 const tTextx0x10x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x10x5.default, componentState.tTextx0x10x5?.[state.screenSize]));

 const tRowx0x11ComputedData = computed(() => _.merge({}, componentState.tRowx0x11.default, componentState.tRowx0x11?.[state.screenSize]));

 const tTextx0x11x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x0.default, componentState.tTextx0x11x0?.[state.screenSize]));

 const tTextx0x11x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x1.default, componentState.tTextx0x11x1?.[state.screenSize]));

 const tTextx0x11x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x2.default, componentState.tTextx0x11x2?.[state.screenSize]));

 const tTextx0x11x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x3.default, componentState.tTextx0x11x3?.[state.screenSize]));

 const tTextx0x11x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x4.default, componentState.tTextx0x11x4?.[state.screenSize]));

 const tTextx0x11x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x5.default, componentState.tTextx0x11x5?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tRectx0x15ComputedData = computed(() => _.merge({}, componentState.tRectx0x15.default, componentState.tRectx0x15?.[state.screenSize]));

 const tRectx0x16ComputedData = computed(() => _.merge({}, componentState.tRectx0x16.default, componentState.tRectx0x16?.[state.screenSize]));

 const tRectx0x17ComputedData = computed(() => _.merge({}, componentState.tRectx0x17.default, componentState.tRectx0x17?.[state.screenSize]));

 const tRectx0x18ComputedData = computed(() => _.merge({}, componentState.tRectx0x18.default, componentState.tRectx0x18?.[state.screenSize]));

 const tRectx0x19ComputedData = computed(() => _.merge({}, componentState.tRectx0x19.default, componentState.tRectx0x19?.[state.screenSize]));

 const tRectx0x20ComputedData = computed(() => _.merge({}, componentState.tRectx0x20.default, componentState.tRectx0x20?.[state.screenSize]));

 const tTextUnitx0x21ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x21.default, componentState.tTextUnitx0x21?.[state.screenSize]));

 const tTextUnitx0x22ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x22.default, componentState.tTextUnitx0x22?.[state.screenSize]));

 const tTextUnitx0x23ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x23.default, componentState.tTextUnitx0x23?.[state.screenSize]));

 const tRowx0x24ComputedData = computed(() => _.merge({}, componentState.tRowx0x24.default, componentState.tRowx0x24?.[state.screenSize]));

 const tTextx0x24x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x24x0.default, componentState.tTextx0x24x0?.[state.screenSize]));

 const tTextx0x24x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x24x1.default, componentState.tTextx0x24x1?.[state.screenSize]));

 const tTextx0x24x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x24x2.default, componentState.tTextx0x24x2?.[state.screenSize]));

 const tTextx0x24x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x24x3.default, componentState.tTextx0x24x3?.[state.screenSize]));

 const tTextx0x24x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x24x4.default, componentState.tTextx0x24x4?.[state.screenSize]));

 const tTextx0x24x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x24x5.default, componentState.tTextx0x24x5?.[state.screenSize]));

 const tRowx0x25ComputedData = computed(() => _.merge({}, componentState.tRowx0x25.default, componentState.tRowx0x25?.[state.screenSize]));

 const tTextx0x25x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x25x0.default, componentState.tTextx0x25x0?.[state.screenSize]));

 const tTextx0x25x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x25x1.default, componentState.tTextx0x25x1?.[state.screenSize]));

 const tTextx0x25x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x25x2.default, componentState.tTextx0x25x2?.[state.screenSize]));

 const tTextx0x25x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x25x3.default, componentState.tTextx0x25x3?.[state.screenSize]));

 const tTextx0x25x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x25x4.default, componentState.tTextx0x25x4?.[state.screenSize]));

 const tTextx0x25x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x25x5.default, componentState.tTextx0x25x5?.[state.screenSize]));

 const tRowx0x26ComputedData = computed(() => _.merge({}, componentState.tRowx0x26.default, componentState.tRowx0x26?.[state.screenSize]));

 const tTextx0x26x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x26x0.default, componentState.tTextx0x26x0?.[state.screenSize]));

 const tTextx0x26x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x26x1.default, componentState.tTextx0x26x1?.[state.screenSize]));

 const tTextx0x26x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x26x2.default, componentState.tTextx0x26x2?.[state.screenSize]));

 const tTextx0x26x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x26x3.default, componentState.tTextx0x26x3?.[state.screenSize]));

 const tTextx0x26x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x26x4.default, componentState.tTextx0x26x4?.[state.screenSize]));

 const tTextx0x26x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x26x5.default, componentState.tTextx0x26x5?.[state.screenSize]));

 const tTextx0x27ComputedData = computed(() => _.merge({}, componentState.tTextx0x27.default, componentState.tTextx0x27?.[state.screenSize]));

 const tTextx0x28ComputedData = computed(() => _.merge({}, componentState.tTextx0x28.default, componentState.tTextx0x28?.[state.screenSize]));

 const tTextx0x29ComputedData = computed(() => _.merge({}, componentState.tTextx0x29.default, componentState.tTextx0x29?.[state.screenSize]));

 const tRectx0x30ComputedData = computed(() => _.merge({}, componentState.tRectx0x30.default, componentState.tRectx0x30?.[state.screenSize]));

 const tRectx0x31ComputedData = computed(() => _.merge({}, componentState.tRectx0x31.default, componentState.tRectx0x31?.[state.screenSize]));

 const tRectx0x32ComputedData = computed(() => _.merge({}, componentState.tRectx0x32.default, componentState.tRectx0x32?.[state.screenSize]));

 const tRectx0x33ComputedData = computed(() => _.merge({}, componentState.tRectx0x33.default, componentState.tRectx0x33?.[state.screenSize]));

 const tRectx0x34ComputedData = computed(() => _.merge({}, componentState.tRectx0x34.default, componentState.tRectx0x34?.[state.screenSize]));

 const tRectx0x35ComputedData = computed(() => _.merge({}, componentState.tRectx0x35.default, componentState.tRectx0x35?.[state.screenSize]));

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
tRectx0x5ComputedData,
tTextUnitx0x6ComputedData,
tTextUnitx0x7ComputedData,
tTextUnitx0x8ComputedData,
tRowx0x9ComputedData,
tTextx0x9x0ComputedData,
tTextx0x9x1ComputedData,
tTextx0x9x2ComputedData,
tTextx0x9x3ComputedData,
tTextx0x9x4ComputedData,
tTextx0x9x5ComputedData,
tRowx0x10ComputedData,
tTextx0x10x0ComputedData,
tTextx0x10x1ComputedData,
tTextx0x10x2ComputedData,
tTextx0x10x3ComputedData,
tTextx0x10x4ComputedData,
tTextx0x10x5ComputedData,
tRowx0x11ComputedData,
tTextx0x11x0ComputedData,
tTextx0x11x1ComputedData,
tTextx0x11x2ComputedData,
tTextx0x11x3ComputedData,
tTextx0x11x4ComputedData,
tTextx0x11x5ComputedData,
tTextx0x12ComputedData,
tTextx0x13ComputedData,
tTextx0x14ComputedData,
tRectx0x15ComputedData,
tRectx0x16ComputedData,
tRectx0x17ComputedData,
tRectx0x18ComputedData,
tRectx0x19ComputedData,
tRectx0x20ComputedData,
tTextUnitx0x21ComputedData,
tTextUnitx0x22ComputedData,
tTextUnitx0x23ComputedData,
tRowx0x24ComputedData,
tTextx0x24x0ComputedData,
tTextx0x24x1ComputedData,
tTextx0x24x2ComputedData,
tTextx0x24x3ComputedData,
tTextx0x24x4ComputedData,
tTextx0x24x5ComputedData,
tRowx0x25ComputedData,
tTextx0x25x0ComputedData,
tTextx0x25x1ComputedData,
tTextx0x25x2ComputedData,
tTextx0x25x3ComputedData,
tTextx0x25x4ComputedData,
tTextx0x25x5ComputedData,
tRowx0x26ComputedData,
tTextx0x26x0ComputedData,
tTextx0x26x1ComputedData,
tTextx0x26x2ComputedData,
tTextx0x26x3ComputedData,
tTextx0x26x4ComputedData,
tTextx0x26x5ComputedData,
tTextx0x27ComputedData,
tTextx0x28ComputedData,
tTextx0x29ComputedData,
tRectx0x30ComputedData,
tRectx0x31ComputedData,
tRectx0x32ComputedData,
tRectx0x33ComputedData,
tRectx0x34ComputedData,
tRectx0x35ComputedData,
onclick1742361738884,
onclick1742362754955,
onclick1742362785864,
onclick1742362845138,
onclick1742362881618,
onclick1742362917034,
};
},
};