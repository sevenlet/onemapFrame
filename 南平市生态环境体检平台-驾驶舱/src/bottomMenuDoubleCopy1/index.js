window.bottomMenuDoubleCopy1Component = {
template: 
`<div id="t-l-c-bottomMenuDoubleCopy1" class="t-l-c-bottomMenuDoubleCopy1" >` +
`<t-rect id="t-rect-9d12.1d1d2a0b2" class="bottomMenuDouble-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data16.isActive === true" id="t-rect-fcbc.fad9b8a94" class="bottomMenuDouble-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="replaceCssVariables(state.menuList.data16.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle" @click="onclick1739435785640_0_0" @mouseleave="onmouseleave1739502971459" @mouseenter="onmouseenter1739502989445">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data16.isActive === false" id="t-rect-b9c2.e76da9784" class="bottomMenuDouble-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="replaceCssVariables(state.menuList.data16.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1739435785639_0_0" @mouseleave="onmouseleave1739502975813" @mouseenter="onmouseenter1739502985700">` +
`</t-rect>` +
`<t-rect v-if="state.showSwitch === true" id="t-rect-69b5.e4d88f9cb" class="bottomMenuDouble-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1760336196871">` +
`</t-rect>` +
`<t-rect v-if="state.showSwitch === true" id="t-rect-e302.319581643" class="bottomMenuDouble-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle" @click="onclick1760336213838">` +
`</t-rect>` +
`<t-tabs v-if="state.menuList.data15.dropdownState === true" id="t-tabs-0f17.024920fce" class="bottomMenuDouble-t-tabs-0-6"  :data="replaceCssVariables(state.menuList.data15.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x6ComputedData.activeTab" :tab-position-extend="tTabsx0x6ComputedData.tabPositionExtend" :stretch="tTabsx0x6ComputedData.stretch" :c-style="tTabsx0x6ComputedData.cStyle" @mouseleave="onmouseleave1739498505373_0_0" @mouseenter="onmouseenter1739498505373_0_1" @tab-click="ontabClick1760325725646">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data13.dropdownState === true" id="t-tabs-0eb4.3649ed107" class="bottomMenuDouble-t-tabs-0-7"  :data="replaceCssVariables(state.menuList.data13.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x7ComputedData.activeTab" :tab-position-extend="tTabsx0x7ComputedData.tabPositionExtend" :stretch="tTabsx0x7ComputedData.stretch" :c-style="tTabsx0x7ComputedData.cStyle" @mouseleave="onmouseleave1739500054322_0_0" @mouseenter="onmouseenter1739500054322_0_1" @tab-click="ontabClick1760325800877">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data9.dropdownState === true" id="t-tabs-9efa.0de85629d" class="bottomMenuDouble-t-tabs-0-8"  :data="replaceCssVariables(state.menuList.data9.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x8ComputedData.activeTab" :tab-position-extend="tTabsx0x8ComputedData.tabPositionExtend" :stretch="tTabsx0x8ComputedData.stretch" :c-style="tTabsx0x8ComputedData.cStyle" @mouseleave="onmouseleave1739500420268_0_0" @mouseenter="onmouseenter1739500420268_0_1" @tab-click="ontabClick1760325657369">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data7.dropdownState === true" id="t-tabs-76d8.d7b26a46c" class="bottomMenuDouble-t-tabs-0-9"  :data="replaceCssVariables(state.menuList.data7.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x9ComputedData.activeTab" :tab-position-extend="tTabsx0x9ComputedData.tabPositionExtend" :stretch="tTabsx0x9ComputedData.stretch" :c-style="tTabsx0x9ComputedData.cStyle" @mouseleave="onmouseleave1739501093511_0_0" @mouseenter="onmouseenter1739501093511_0_1" @tab-click="ontabClick1760325647539">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data5.dropdownState === true" id="t-tabs-c6b3.9274ee3ea" class="bottomMenuDouble-t-tabs-0-10"  :data="replaceCssVariables(state.menuList.data5.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x10ComputedData.activeTab" :tab-position-extend="tTabsx0x10ComputedData.tabPositionExtend" :stretch="tTabsx0x10ComputedData.stretch" :c-style="tTabsx0x10ComputedData.cStyle" @mouseleave="onmouseleave1739501269446_0_0" @mouseenter="onmouseenter1739501269446_0_1" @tab-click="ontabClick1760325636381">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data3.dropdownState === true" id="t-tabs-73d5.72fef4af6" class="bottomMenuDouble-t-tabs-0-11"  :data="replaceCssVariables(state.menuList.data3.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x11ComputedData.activeTab" :tab-position-extend="tTabsx0x11ComputedData.tabPositionExtend" :stretch="tTabsx0x11ComputedData.stretch" :c-style="tTabsx0x11ComputedData.cStyle" @mouseleave="onmouseleave1739501428053_0_0" @mouseenter="onmouseenter1739501428053_0_1" @tab-click="ontabClick1760325624464">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data1.dropdownState === true" id="t-tabs-aa53.83bb436e4" class="bottomMenuDouble-t-tabs-0-12"  :data="replaceCssVariables(state.menuList.data1.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x12ComputedData.activeTab" :tab-position-extend="tTabsx0x12ComputedData.tabPositionExtend" :stretch="tTabsx0x12ComputedData.stretch" :c-style="tTabsx0x12ComputedData.cStyle" @mouseleave="onmouseleave1739501556751_0_0" @mouseenter="onmouseenter1739501556751_0_1" @tab-click="ontabClick1760323287105">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data2.dropdownState === true" id="t-tabs-2aec.af8aca068" class="bottomMenuDouble-t-tabs-0-13"  :data="replaceCssVariables(state.menuList.data2.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x13ComputedData.activeTab" :tab-position-extend="tTabsx0x13ComputedData.tabPositionExtend" :stretch="tTabsx0x13ComputedData.stretch" :c-style="tTabsx0x13ComputedData.cStyle" @mouseleave="onmouseleave1739501718264_0_0" @mouseenter="onmouseenter1739501718264_0_1" @tab-click="ontabClick1760325612882">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data4.dropdownState === true" id="t-tabs-d7ce.7fdb0c48c" class="bottomMenuDouble-t-tabs-0-14"  :data="replaceCssVariables(state.menuList.data4.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x14ComputedData.activeTab" :tab-position-extend="tTabsx0x14ComputedData.tabPositionExtend" :stretch="tTabsx0x14ComputedData.stretch" :c-style="tTabsx0x14ComputedData.cStyle" @mouseleave="onmouseleave1739501849544_0_0" @mouseenter="onmouseenter1739501849544_0_1" @tab-click="ontabClick1760325630780">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data6.dropdownState === true" id="t-tabs-df35.3791e2a1e" class="bottomMenuDouble-t-tabs-0-15"  :data="replaceCssVariables(state.menuList.data6.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x15ComputedData.activeTab" :tab-position-extend="tTabsx0x15ComputedData.tabPositionExtend" :stretch="tTabsx0x15ComputedData.stretch" :c-style="tTabsx0x15ComputedData.cStyle" @mouseleave="onmouseleave1739502148093_0_0" @mouseenter="onmouseenter1739502148093_0_1" @tab-click="ontabClick1760325641044">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data8.dropdownState === true" id="t-tabs-029c.7cbf10941" class="bottomMenuDouble-t-tabs-0-16"  :data="replaceCssVariables(state.menuList.data8.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x16ComputedData.activeTab" :tab-position-extend="tTabsx0x16ComputedData.tabPositionExtend" :stretch="tTabsx0x16ComputedData.stretch" :c-style="tTabsx0x16ComputedData.cStyle" @mouseleave="onmouseleave1739502307650_0_0" @mouseenter="onmouseenter1739502307650_0_1" @tab-click="ontabClick1760325653009">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data10.dropdownState === true" id="t-tabs-5586.f25b5496f" class="bottomMenuDouble-t-tabs-0-17"  :data="replaceCssVariables(state.menuList.data10.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x17ComputedData.activeTab" :tab-position-extend="tTabsx0x17ComputedData.tabPositionExtend" :stretch="tTabsx0x17ComputedData.stretch" :c-style="tTabsx0x17ComputedData.cStyle" @mouseleave="onmouseleave1739502424036_0_0" @mouseenter="onmouseenter1739502424036_0_1" @tab-click="ontabClick1760325662676">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data12.dropdownState === true" id="t-tabs-c5b0.abb52202d" class="bottomMenuDouble-t-tabs-0-18"  :data="replaceCssVariables(state.menuList.data12.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x18ComputedData.activeTab" :tab-position-extend="tTabsx0x18ComputedData.tabPositionExtend" :stretch="tTabsx0x18ComputedData.stretch" :c-style="tTabsx0x18ComputedData.cStyle" @mouseleave="onmouseleave1739502624034_0_0" @mouseenter="onmouseenter1739502624034_0_1" @tab-click="ontabClick1760325679125">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data14.dropdownState === true" id="t-tabs-fa6d.becbab30d" class="bottomMenuDouble-t-tabs-0-19"  :data="replaceCssVariables(state.menuList.data14.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x19ComputedData.activeTab" :tab-position-extend="tTabsx0x19ComputedData.tabPositionExtend" :stretch="tTabsx0x19ComputedData.stretch" :c-style="tTabsx0x19ComputedData.cStyle" @mouseleave="onmouseleave1739502755545_0_0" @mouseenter="onmouseenter1739502755545_0_1" @tab-click="ontabClick1760325718651">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data16.dropdownState === true" id="t-tabs-ae47.695dfa3ff" class="bottomMenuDouble-t-tabs-0-20"  :data="replaceCssVariables(state.menuList.data16.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x20ComputedData.activeTab" :tab-position-extend="tTabsx0x20ComputedData.tabPositionExtend" :stretch="tTabsx0x20ComputedData.stretch" :c-style="tTabsx0x20ComputedData.cStyle" @mouseleave="onmouseleave1739502915771_0_0" @mouseenter="onmouseenter1739502915771_0_1" @tab-click="ontabClick1760325730802">` +
`</t-tabs>` +
`<t-tabs v-if="state.menuList.data11.dropdownState === true" id="t-tabs-27e3.253974f63" class="bottomMenuDouble-t-tabs-0-21"  :data="replaceCssVariables(state.menuList.data11.subMenu, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x21ComputedData.activeTab" :tab-position-extend="tTabsx0x21ComputedData.tabPositionExtend" :stretch="tTabsx0x21ComputedData.stretch" :c-style="tTabsx0x21ComputedData.cStyle" @mouseleave="onmouseleave1739499854204" @mouseenter="onmouseenter1739499872362" @tab-click="ontabClick1760325673868">` +
`</t-tabs>` +
`<t-rect v-if="state.menuList.data15.isActive === false" id="t-rect-0466.791830d0b" class="bottomMenuDouble-t-rect-0-22"  :tip="tRectx0x22ComputedData.tip" :label="replaceCssVariables(state.menuList.data15.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x22ComputedData.active" :c-style="tRectx0x22ComputedData.cStyle" @click="onclick1739265424400" @mouseenter="onmouseenter1739498791173" @mouseleave="onmouseleave1739498798922">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data15.isActive === true" id="t-rect-a7de.3d5cb9e2f" class="bottomMenuDouble-t-rect-0-23"  :tip="tRectx0x23ComputedData.tip" :label="replaceCssVariables(state.menuList.data15.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x23ComputedData.active" :c-style="tRectx0x23ComputedData.cStyle" @click="onclick1739265445540_0_0" @mouseenter="onmouseenter1739500192855" @mouseleave="onmouseleave1739500225333">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data14.isActive === false" id="t-rect-5b90.ae677e9ba" class="bottomMenuDouble-t-rect-0-24"  :tip="tRectx0x24ComputedData.tip" :label="replaceCssVariables(state.menuList.data14.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x24ComputedData.active" :c-style="tRectx0x24ComputedData.cStyle" @click="onclick1739261028622" @mouseenter="onmouseenter1739502835282" @mouseleave="onmouseleave1739502857819">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data14.isActive === true" id="t-rect-5b24.ddcf6fa67" class="bottomMenuDouble-t-rect-0-25"  :tip="tRectx0x25ComputedData.tip" :label="replaceCssVariables(state.menuList.data14.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x25ComputedData.active" :c-style="tRectx0x25ComputedData.cStyle" @click="onclick1739261048933" @mouseenter="onmouseenter1739502838964" @mouseleave="onmouseleave1739502854126">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data13.isActive === false" id="t-rect-8675.0c6d968be" class="bottomMenuDouble-t-rect-0-26"  :tip="tRectx0x26ComputedData.tip" :label="replaceCssVariables(state.menuList.data13.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x26ComputedData.active" :c-style="tRectx0x26ComputedData.cStyle" @click="onclick1739265152122" @mouseenter="onmouseenter1739500204317" @mouseleave="onmouseleave1739500232057">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data13.isActive === true" id="t-rect-7757.1d8fa4457" class="bottomMenuDouble-t-rect-0-27"  :tip="tRectx0x27ComputedData.tip" :label="replaceCssVariables(state.menuList.data13.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x27ComputedData.active" :c-style="tRectx0x27ComputedData.cStyle" @click="onclick1739265167394_0_0" @mouseenter="onmouseenter1739500212469" @mouseleave="onmouseleave1739500235650">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data12.isActive === false" id="t-rect-b43e.4b6a54464" class="bottomMenuDouble-t-rect-0-28"  :tip="tRectx0x28ComputedData.tip" :label="replaceCssVariables(state.menuList.data12.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x28ComputedData.active" :c-style="tRectx0x28ComputedData.cStyle" @click="onclick1739261084073" @mouseleave="onmouseleave1739502682072" @mouseenter="onmouseenter1739502707735">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data12.isActive === true" id="t-rect-957a.589b0a9ad" class="bottomMenuDouble-t-rect-0-29"  :tip="tRectx0x29ComputedData.tip" :label="replaceCssVariables(state.menuList.data12.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x29ComputedData.active" :c-style="tRectx0x29ComputedData.cStyle" @click="onclick1739261099702" @mouseleave="onmouseleave1739502686142" @mouseenter="onmouseenter1739502704034">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data11.isActive === false" id="t-rect-024d.166932bd" class="bottomMenuDouble-t-rect-0-30"  :tip="tRectx0x30ComputedData.tip" :label="replaceCssVariables(state.menuList.data11.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x30ComputedData.active" :c-style="tRectx0x30ComputedData.cStyle" @click="onclick1739265027340" @mouseenter="onmouseenter1739499812309" @mouseleave="onmouseleave1739499839806">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data11.isActive === true" id="t-rect-66b7.3792ac907" class="bottomMenuDouble-t-rect-0-31"  :tip="tRectx0x31ComputedData.tip" :label="replaceCssVariables(state.menuList.data11.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x31ComputedData.active" :c-style="tRectx0x31ComputedData.cStyle" @click="onclick1739265043843_0_0" @mouseenter="onmouseenter1739447368228" @mouseleave="onmouseleave1739447380996">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data10.isActive === false" id="t-rect-998c.73e9741f6" class="bottomMenuDouble-t-rect-0-32"  :tip="tRectx0x32ComputedData.tip" :label="replaceCssVariables(state.menuList.data10.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x32ComputedData.active" :c-style="tRectx0x32ComputedData.cStyle" @click="onclick1739261419314" @mouseenter="onmouseenter1739502527497" @mouseleave="onmouseleave1739502552048">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data10.isActive === true" id="t-rect-156d.961e5f97c" class="bottomMenuDouble-t-rect-0-33"  :tip="tRectx0x33ComputedData.tip" :label="replaceCssVariables(state.menuList.data10.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x33ComputedData.active" :c-style="tRectx0x33ComputedData.cStyle" @click="onclick1739261434278" @mouseenter="onmouseenter1739502523292" @mouseleave="onmouseleave1739502548055">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data9.isActive === false" id="t-rect-3e0e.9f01b42b1" class="bottomMenuDouble-t-rect-0-34"  :tip="tRectx0x34ComputedData.tip" :label="replaceCssVariables(state.menuList.data9.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x34ComputedData.active" :c-style="tRectx0x34ComputedData.cStyle" @click="onclick1739264874414" @mouseleave="onmouseleave1739500827709" @mouseenter="onmouseenter1739500872571">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data9.isActive === true" id="t-rect-b009.5b80a1572" class="bottomMenuDouble-t-rect-0-35"  :tip="tRectx0x35ComputedData.tip" :label="replaceCssVariables(state.menuList.data9.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x35ComputedData.active" :c-style="tRectx0x35ComputedData.cStyle" @click="onclick1739264887369_0_0" @mouseleave="onmouseleave1739500852376" @mouseenter="onmouseenter1739500868136">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data7.isActive === true" id="t-rect-e7ae.e2e17ae41" class="bottomMenuDouble-t-rect-0-36"  :tip="tRectx0x36ComputedData.tip" :label="replaceCssVariables(state.menuList.data7.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x36ComputedData.active" :c-style="tRectx0x36ComputedData.cStyle" @click="onclick1739263733129_0_0" @mouseenter="onmouseenter1739501167868" @mouseleave="onmouseleave1739501188373">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data7.isActive === false" id="t-rect-aeff.61bc4ed09" class="bottomMenuDouble-t-rect-0-37"  :tip="tRectx0x37ComputedData.tip" :label="replaceCssVariables(state.menuList.data7.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x37ComputedData.active" :c-style="tRectx0x37ComputedData.cStyle" @click="onclick1739263716948" @mouseenter="onmouseenter1739501163586" @mouseleave="onmouseleave1739501184967">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data6.isActive === false" id="t-rect-ddf0.76a91d001" class="bottomMenuDouble-t-rect-0-38"  :tip="tRectx0x38ComputedData.tip" :label="replaceCssVariables(state.menuList.data6.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x38ComputedData.active" :c-style="tRectx0x38ComputedData.cStyle" @click="onclick1739261663457" @mouseenter="onmouseenter1739502209599" @mouseleave="onmouseleave1739502225405">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data6.isActive === true" id="t-rect-b98e.ed2ce2f7d" class="bottomMenuDouble-t-rect-0-39"  :tip="tRectx0x39ComputedData.tip" :label="replaceCssVariables(state.menuList.data6.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x39ComputedData.active" :c-style="tRectx0x39ComputedData.cStyle" @click="onclick1739261683646_0_0" @mouseenter="onmouseenter1739502205089" @mouseleave="onmouseleave1739502221432">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data5.isActive === false" id="t-rect-81c3.de9cb3b55" class="bottomMenuDouble-t-rect-0-40"  :tip="tRectx0x40ComputedData.tip" :label="replaceCssVariables(state.menuList.data5.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x40ComputedData.active" :c-style="tRectx0x40ComputedData.cStyle" @click="onclick1739263577686" @mouseleave="onmouseleave1739501354900" @mouseenter="onmouseenter1739501380797">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data5.isActive === true" id="t-rect-2e2f.51651f2b6" class="bottomMenuDouble-t-rect-0-41"  :tip="tRectx0x41ComputedData.tip" :label="replaceCssVariables(state.menuList.data5.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x41ComputedData.active" :c-style="tRectx0x41ComputedData.cStyle" @click="onclick1739263586641_0_0" @mouseleave="onmouseleave1739501351050" @mouseenter="onmouseenter1739501377050">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data4.isActive === false" id="t-rect-d7f9.fd771a718" class="bottomMenuDouble-t-rect-0-42"  :tip="tRectx0x42ComputedData.tip" :label="replaceCssVariables(state.menuList.data4.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x42ComputedData.active" :c-style="tRectx0x42ComputedData.cStyle" @click="onclick1739261819696" @mouseleave="onmouseleave1739501911280" @mouseenter="onmouseenter1739501935673">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data4.isActive === true" id="t-rect-e2d7.6249b5ba" class="bottomMenuDouble-t-rect-0-43"  :tip="tRectx0x43ComputedData.tip" :label="replaceCssVariables(state.menuList.data4.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x43ComputedData.active" :c-style="tRectx0x43ComputedData.cStyle" @click="onclick1739261847660_0_0" @mouseleave="onmouseleave1739501915198" @mouseenter="onmouseenter1739501932398">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data3.isActive === false" id="t-rect-6211.6dfc93282" class="bottomMenuDouble-t-rect-0-44"  :tip="tRectx0x44ComputedData.tip" :label="replaceCssVariables(state.menuList.data3.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x44ComputedData.active" :c-style="tRectx0x44ComputedData.cStyle" @click="onclick1739263448982" @mouseenter="onmouseenter1739501478085" @mouseleave="onmouseleave1739501494085">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data3.isActive === true" id="t-rect-6942.b8aece9c8" class="bottomMenuDouble-t-rect-0-45"  :tip="tRectx0x45ComputedData.tip" :label="replaceCssVariables(state.menuList.data3.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x45ComputedData.active" :c-style="tRectx0x45ComputedData.cStyle" @click="onclick1739263462065" @mouseenter="onmouseenter1739501474527" @mouseleave="onmouseleave1739501490696">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data1.isActive === true" id="t-rect-e437.bd1b02eff" class="bottomMenuDouble-t-rect-0-46"  :tip="tRectx0x46ComputedData.tip" :label="replaceCssVariables(state.menuList.data1.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x46ComputedData.active" :c-style="tRectx0x46ComputedData.cStyle" @click="onclick1739262547826_0_2" @mouseleave="onmouseleave1739501643006" @mouseenter="onmouseenter1739501656134">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data1.isActive === false" id="t-rect-78b4.bd0244839" class="bottomMenuDouble-t-rect-0-47"  :tip="tRectx0x47ComputedData.tip" :label="replaceCssVariables(state.menuList.data1.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x47ComputedData.active" :c-style="tRectx0x47ComputedData.cStyle" @click="onclick1739262533653" @mouseleave="onmouseleave1739501639921" @mouseenter="onmouseenter1739501652473">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data2.isActive === false" id="t-rect-cab2.a1c2e4463" class="bottomMenuDouble-t-rect-0-48"  :tip="tRectx0x48ComputedData.tip" :label="replaceCssVariables(state.menuList.data2.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x48ComputedData.active" :c-style="tRectx0x48ComputedData.cStyle" @click="onclick1739262016032_0_0" @mouseenter="onmouseenter1739501766415" @mouseleave="onmouseleave1739501789265">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data2.isActive === true" id="t-rect-1e55.45f25638e" class="bottomMenuDouble-t-rect-0-49"  :tip="tRectx0x49ComputedData.tip" :label="replaceCssVariables(state.menuList.data2.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x49ComputedData.active" :c-style="tRectx0x49ComputedData.cStyle" @click="onclick1739449266071_0_0" @mouseenter="onmouseenter1739501769805" @mouseleave="onmouseleave1739501785594">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data8.isActive === false" id="t-rect-96b8.c8e706c24" class="bottomMenuDouble-t-rect-0-50"  :tip="tRectx0x50ComputedData.tip" :label="replaceCssVariables(state.menuList.data8.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x50ComputedData.active" :c-style="tRectx0x50ComputedData.cStyle" @click="onclick1739261552087" @mouseleave="onmouseleave1739502364459" @mouseenter="onmouseenter1739502383500">` +
`</t-rect>` +
`<t-rect v-if="state.menuList.data8.isActive === true" id="t-rect-4db7.9ba6bdb7f" class="bottomMenuDouble-t-rect-0-51"  :tip="tRectx0x51ComputedData.tip" :label="replaceCssVariables(state.menuList.data8.text, global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x51ComputedData.active" :c-style="tRectx0x51ComputedData.cStyle" @click="onclick1739261566403" @mouseleave="onmouseleave1739502359247" @mouseenter="onmouseenter1739502379574">` +
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
   showSwitch: false,
   index: 0,
   templateMenuData: [],
   userToken: "",
   shjDropdownState: false,
   hyfsDropdownState: false,
   glActive: true,
   dqhjActive: false,
   shjActive: false,
   trhjActive: false,
   hyhjActive: false,
   gfjgActive: false,
   zrstActive: false,
   hyfsActive: false,
   yjglActive: false,
   jxzfActive: false,
   xftsActive: false,
   lyxcActive: false,
   flfgActive: false,
   dcdbActive: false,
   ghhpActive: false,
   shjMenuList: [{"label":"地表水","name":"dbs"},{"label":"饮用水源地","name":"yysyd"},{"label":"水功能区","name":"sgnq"},{"label":"黑臭水体","name":"hcst"},{"label":"实时监测","name":"ssjc"},{"label":"环境专题","name":"hjzt"}],
   menuList: {"data1":{"text":"核与辐射","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data2":{"text":"自然生态","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data3":{"text":"","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data4":{"text":"","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data5":{"text":"","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data6":{"text":"","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data7":{"text":"","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data8":{"text":"","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data9":{"text":"","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data10":{"text":"","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data11":{"text":"","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data12":{"text":"","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data13":{"text":"","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data14":{"text":"","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data15":{"text":"","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false},"data16":{"text":"","defaultImg":"","activeImg":"","dropdownState":false,"subMenu":[],"isActive":false}},
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
tRectx0x1: {
defaultStyle: {
            default: {"width":"1919px","height":"139px","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"0px","top":"0px","backgroundImage":"var(--t-bottom-background)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 100%","-webkit-mask-position":"","pointerEvents":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1919px","height":"139px","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"0px","top":"0px","backgroundImage":"var(--t-bottom-background)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 100%","-webkit-mask-position":"","pointerEvents":"none"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-fzfg-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1791px","top":"0px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","box-shadow":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-fzfg-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1791px","top":"0px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","box-shadow":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-fzfg-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1791px","top":"0px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-fzfg-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1791px","top":"0px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-fzfg-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"45px","height":"45px","position":"unset","left":"1879px","top":"75px","backgroundImage":"var(--slide-right)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"45px","height":"45px","position":"unset","left":"1879px","top":"75px","backgroundImage":"var(--slide-right)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","cursor":"pointer"},"hover":{"backgroundImage":"var(--slide-right-hover)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"backgroundImage":"var(--slide-left)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"45px","height":"45px","position":"unset","left":"-4px","top":"75px","backgroundImage":"var(--slide-left)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"45px","height":"45px","position":"unset","left":"-4px","top":"75px","backgroundImage":"var(--slide-left)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","cursor":"pointer"},"hover":{"backgroundImage":"var(--slide-left-hover)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"backgroundImage":"var(--slide-left)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
tTabsx0x6: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"1643px","top":"-201px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"1643px","top":"-201px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x7: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"1414px","top":"-211px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"1414px","top":"-211px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x8: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"950px","top":"-231px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"950px","top":"-231px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x9: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"713px","top":"-224px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"713px","top":"-224px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x10: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"481px","top":"-215px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"481px","top":"-215px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x11: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"251px","top":"-203px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"251px","top":"-203px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x12: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"20px","top":"-196px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"20px","top":"-196px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x13: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"134px","top":"-201px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"134px","top":"-201px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x14: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"367px","top":"-207px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"367px","top":"-207px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x15: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"596px","top":"-218px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"596px","top":"-218px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x16: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"828px","top":"-233px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"828px","top":"-233px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x17: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"1066px","top":"-225px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"1066px","top":"-225px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x18: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"1290px","top":"-215px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"1290px","top":"-215px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x19: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"1526px","top":"-203px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"1526px","top":"-203px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x20: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"1760px","top":"-196px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"1760px","top":"-196px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tTabsx0x21: {
defaultStyle: {
            default: {"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"1179px","top":"-218px"},
            
            },
 default: { 
 
data:[],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","animationName":"","position":"unset","left":"1179px","top":"-218px"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","color":"var(--t-glmenu-dialog-text)","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","color":"var(--t-glmenu-dialog-text-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-dialog-text)","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","textAlign":"center"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"},"focus":{"color":"var(--t-glmenu-dialog-text-active)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tRectx0x22: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-ghhp-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1673.5px","top":"-4px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-ghhp-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1673.5px","top":"-4px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-ghhp-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x23: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-ghhp-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1673.5px","top":"-4px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-ghhp-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1673.5px","top":"-4px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x24: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1558.5px","top":"-7.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1558.5px","top":"-7.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-gl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x25: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1558.5px","top":"-7.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","box-shadow":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1558.5px","top":"-7.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","box-shadow":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x26: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jdkb-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1443.5px","top":"-13.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jdkb-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1443.5px","top":"-13.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-jdkb-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x27: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jdkb-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1443.5px","top":"-13.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jdkb-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1443.5px","top":"-13.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x28: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-dqhj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1319.5px","top":"-19px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-dqhj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1319.5px","top":"-19px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-dqhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x29: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-dqhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1319.5px","top":"-19px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-dqhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1319.5px","top":"-19px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x30: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-shenghj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1212px","top":"-24.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-shenghj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1212px","top":"-24.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-shenghj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x31: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-shenghj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1212px","top":"-24.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-shenghj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1212px","top":"-24.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x32: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-shj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1094px","top":"-28px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-shj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1094px","top":"-28px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-shj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x33: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-shj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1094px","top":"-28px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-shj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1094px","top":"-28px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x34: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-lyxc-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"975.5px","top":"-31.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-lyxc-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"975.5px","top":"-31.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-lyxc-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x35: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-lyxc-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"975.5px","top":"-31.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-lyxc-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"975.5px","top":"-31.5px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x36: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-xfts-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"746px","top":"-28px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-xfts-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"746px","top":"-28px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x37: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-xfts-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"746px","top":"-28px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-xfts-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"746px","top":"-28px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-xfts-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x38: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-hyhj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"627px","top":"-23px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-hyhj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"627px","top":"-23px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-hyhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x39: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-hyhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"627px","top":"-23px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-hyhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"627px","top":"-23px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x40: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jxzf-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"510px","top":"-20px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jxzf-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"510px","top":"-20px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-jxzf-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x41: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jxzf-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"510px","top":"-20px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jxzf-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"510px","top":"-20px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-jxzf-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x42: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gfjg-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"394px","top":"-12px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gfjg-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"394px","top":"-12px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-gfjg-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x43: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gfjg-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"394px","top":"-12px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gfjg-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"394px","top":"-12px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x44: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-yjgl-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"280px","top":"-6px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-yjgl-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"280px","top":"-6px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-yjgl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x45: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-yjgl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"280px","top":"-6px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-yjgl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"280px","top":"-6px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x46: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrst-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"核与辐射",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrst-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-zrst-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x47: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrst-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"核与辐射",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrst-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-zrst-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x48: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrst-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"162px","top":"-6px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},
            
            },
 default: { 
 
tip:false,
label:"自然生态",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrst-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"162px","top":"-6px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s"},"hover":{"backgroundImage":"var(--t-bottom-menu-zrst-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x49: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrst-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"162px","top":"-6px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"自然生态",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrst-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"162px","top":"-6px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x50: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrst-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s","position":"unset","left":"860px","top":"-31.5px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrst-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s","position":"unset","left":"860px","top":"-31.5px"},"hover":{"backgroundImage":"var(--t-bottom-menu-zrst-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x51: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrst-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s","position":"unset","left":"860px","top":"-31.5px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrst-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":"","transition":".3s","position":"unset","left":"860px","top":"-31.5px"},"hover":{"backgroundImage":"var(--t-bottom-menu-zrst-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","textAlign":"center","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const clickItem = (value) => {
Object.keys(state.menuList).forEach(key =>{
  state.menuList[key].isActive = false
})
state.menuList[value].isActive = true
// const stateMap = {
//   gl: 'glActive',
//   dqhj: 'dqhjActive',
//   shj: 'shjActive',
//   trhj: 'trhjActive',
//   hyhj: 'hyhjActive',
//   gfjg: 'gfjgActive',
//   zrst: 'zrstActive',
//   hyfs: 'hyfsActive',
//   yjgl: 'yjglActive',
//   jxzf: 'jxzfActive',
//   xfts: 'xftsActive',
//   lyxc: 'lyxcActive',
//   flfg: 'flfgActive',
//   dcdb: 'dcdbActive',
//   ghhp: 'ghhpActive'
// };

// // 重置所有状态
// Object.keys(stateMap).forEach(key => {
//   state[menuList][stateMap[key]] = false;
// });

// // 设置当前状态
// if (stateMap[value]) {
//   state[stateMap[value]] = true;
// }
};
const setIcon = () => {

const menuData = []
Object.keys(state.menuList).forEach(key => {
   menuData.push(state.menuList[key])
})
const dom = document?.querySelector(`.${global.activeTheme}`);
const menuList = [ 
  'heyf','zrst','yjgl', 'gfjg',
  'jxzf','hyhj','xfts','trhj',
  'lyxc','shj','shenghj','dqhj',
   'jdkb', 'gl','ghhp','fzfg'
  ]

menuList.forEach((item,index) =>{
  dom.style.setProperty(`--t-bottom-menu-${item}-default`, `url(${menuData[index]?.defaultImg})`)
  dom.style.setProperty(`--t-bottom-menu-${item}-active`, `url(${menuData[index]?.activeImg})`)
})
};
const handleSubMenuVisible = (value,type) => {
if(type === 'enter'){
  if(state.menuList[value]?.subMenu.length > 0){
    state.menuList[value].dropdownState = true
  }else{
      state.menuList[value].dropdownState = false
  }
}else if(type === 'leave'){
     state.menuList[value].dropdownState = false
}
};
const changeTheme = () => {
console.log('实例初始化完成，设置global.activeTheme的监听');
watch(() => global.activeTheme,() =>{
  console.log('二级标题检测到换肤操作global.activeTheme：',global.activeTheme);
  console.log('二级标题检测到换肤操作global.theme：',global.theme);
  // getMenuList()
  // 获取底部导航菜单数据（新）
  getMenuData()
})
};
const getMenuData = () => {
state.userToken = localStorage.getItem('xlToken') || localStorage.getItem('token')
getMenuListNew();
};
const handleSelectSubMenu = (item) => {

const url = `${global.menuToUrl}?menuCode=${item.name}#/root`
window.open(url)
};
const handleSlide = (type) => {

let newMenuList = []
if(type === 'right'){
  if((state.index + 1) * 16 >= state.templateMenuData.length) return;
  state.index++
}else if(type === 'left'){
  if(state.index === 0) return
  state.index--
}
const startIndex = state.index * 16
console.log('state.templateMenuData', state.templateMenuData)
newMenuList = state.templateMenuData.slice(startIndex, startIndex + 16)
console.log('newMenuList', newMenuList)
Object.keys(state.menuList).forEach((key,index) => {
    if(index < newMenuList.length){
      state.menuList[key] = newMenuList[index] || {}
    }else{
      state.menuList[key] = {
        text:'',
      defaultImg:'',
      activeImg: '',
      sort: '',
      isActive:false,
       dropdownState:false,
      subMenu: []
      }
    }
    state.menuList[key] = newMenuList[index] || {}
  })
};
const onclick1739435785640_0_0 = () => {
// 执行自定义方法
clickItem("data16");
};
const onmouseleave1739502971459 = () => {
// 执行自定义方法
handleSubMenuVisible("data16","leave");
};
const onmouseenter1739502989445 = () => {
// 执行自定义方法
handleSubMenuVisible("data16","enter");
};
const onclick1739435785639_0_0 = () => {
// 执行自定义方法
clickItem("data16");
};
const onmouseleave1739502975813 = () => {
// 执行自定义方法
handleSubMenuVisible("data16","leave");
};
const onmouseenter1739502985700 = () => {
// 执行自定义方法
handleSubMenuVisible("data16","enter");
};
const onclick1760336196871 = () => {
// 执行自定义方法
handleSlide("right");
};
const onclick1760336213838 = () => {
// 执行自定义方法
handleSlide("left");
};
const onmouseleave1739498505373_0_0 = () => {
// 设置变量值
state.menuList.data15.dropdownState = false;
};
const onmouseenter1739498505373_0_1 = () => {
// 设置变量值
state.menuList.data15.dropdownState = true;
};
const ontabClick1760325725646 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739500054322_0_0 = () => {
// 设置变量值
state.menuList.data13.dropdownState = false;
};
const onmouseenter1739500054322_0_1 = () => {
// 设置变量值
state.menuList.data13.dropdownState = true;
};
const ontabClick1760325800877 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739500420268_0_0 = () => {
// 设置变量值
state.menuList.data9.dropdownState = false;
};
const onmouseenter1739500420268_0_1 = () => {
// 设置变量值
state.menuList.data9.dropdownState = true;
};
const ontabClick1760325657369 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739501093511_0_0 = () => {
// 设置变量值
state.menuList.data7.dropdownState = false;
};
const onmouseenter1739501093511_0_1 = () => {
// 设置变量值
state.menuList.data7.dropdownState = true;
};
const ontabClick1760325647539 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739501269446_0_0 = () => {
// 设置变量值
state.menuList.data5.dropdownState = false;
};
const onmouseenter1739501269446_0_1 = () => {
// 设置变量值
state.menuList.data5.dropdownState = true;
};
const ontabClick1760325636381 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739501428053_0_0 = () => {
// 设置变量值
state.menuList.data3.dropdownState = false;
};
const onmouseenter1739501428053_0_1 = () => {
// 设置变量值
state.menuList.data3.dropdownState = true;
};
const ontabClick1760325624464 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739501556751_0_0 = () => {
// 设置变量值
state.menuList.data1.dropdownState = false;
};
const onmouseenter1739501556751_0_1 = () => {
// 设置变量值
state.menuList.data1.dropdownState = true;
};
const ontabClick1760323287105 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739501718264_0_0 = () => {
// 设置变量值
state.menuList.data2.dropdownState = false;
};
const onmouseenter1739501718264_0_1 = () => {
// 设置变量值
state.menuList.data2.dropdownState = true;
};
const ontabClick1760325612882 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739501849544_0_0 = () => {
// 设置变量值
state.menuList.data4.dropdownState = false;
};
const onmouseenter1739501849544_0_1 = () => {
// 设置变量值
state.menuList.data4.dropdownState = true;
};
const ontabClick1760325630780 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739502148093_0_0 = () => {
// 设置变量值
state.menuList.data6.dropdownState = false;
};
const onmouseenter1739502148093_0_1 = () => {
// 设置变量值
state.menuList.data6.dropdownState = true;
};
const ontabClick1760325641044 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739502307650_0_0 = () => {
// 设置变量值
state.menuList.data6.dropdownState = false;
};
const onmouseenter1739502307650_0_1 = () => {
// 设置变量值
state.menuList.data8.dropdownState = true;
};
const ontabClick1760325653009 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739502424036_0_0 = () => {
// 设置变量值
state.menuList.data10.dropdownState = false;
};
const onmouseenter1739502424036_0_1 = () => {
// 设置变量值
state.menuList.data10.dropdownState = true;
};
const ontabClick1760325662676 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739502624034_0_0 = () => {
// 设置变量值
state.menuList.data12.dropdownState = false;
};
const onmouseenter1739502624034_0_1 = () => {
// 设置变量值
state.menuList.data12.dropdownState = true;
};
const ontabClick1760325679125 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739502755545_0_0 = () => {
// 设置变量值
state.menuList.data14.dropdownState = false;
};
const onmouseenter1739502755545_0_1 = () => {
// 设置变量值
state.menuList.data14.dropdownState = true;
};
const ontabClick1760325718651 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739502915771_0_0 = () => {
// 设置变量值
state.menuList.data16.dropdownState = false;
};
const onmouseenter1739502915771_0_1 = () => {
// 设置变量值
state.menuList.data16.dropdownState = true;
};
const ontabClick1760325730802 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onmouseleave1739499854204 = () => {
// 执行自定义方法
handleSubMenuVisible("data11","leave");
};
const onmouseenter1739499872362 = () => {
// 执行自定义方法
handleSubMenuVisible("data11","enter");
};
const ontabClick1760325673868 = (data) => {
// 执行自定义方法
handleSelectSubMenu(data.item);
};
const onclick1739265424400 = () => {
// 执行自定义方法
clickItem("data15");
};
const onmouseenter1739498791173 = () => {
// 执行自定义方法
handleSubMenuVisible("data15","enter");
};
const onmouseleave1739498798922 = () => {
// 执行自定义方法
handleSubMenuVisible("data15","leave");
};
const onclick1739265445540_0_0 = () => {
// 执行自定义方法
clickItem("data15");
};
const onmouseenter1739500192855 = () => {
// 执行自定义方法
handleSubMenuVisible("data15","enter");
};
const onmouseleave1739500225333 = () => {
// 执行自定义方法
handleSubMenuVisible("data15","leave");
};
const onclick1739264874414 = () => {
// 执行自定义方法
clickItem("data9");
};
const onmouseleave1739500827709 = () => {
// 执行自定义方法
handleSubMenuVisible("data9","leave");
};
const onmouseenter1739500872571 = () => {
// 执行自定义方法
handleSubMenuVisible("data9","enter");
};
const onclick1739264887369_0_0 = () => {
// 执行自定义方法
clickItem("data9");
};
const onmouseleave1739500852376 = () => {
// 执行自定义方法
handleSubMenuVisible("data9","leave");
};
const onmouseenter1739500868136 = () => {
// 执行自定义方法
handleSubMenuVisible("data9","enter");
};
const onclick1739265027340 = () => {
// 执行自定义方法
clickItem("data11");
};
const onmouseenter1739499812309 = () => {
// 执行自定义方法
handleSubMenuVisible("data11","enter");
};
const onmouseleave1739499839806 = () => {
// 执行自定义方法
handleSubMenuVisible("data11","leave");
};
const onclick1739265043843_0_0 = () => {
// 执行自定义方法
clickItem("data11");
};
const onmouseenter1739447368228 = () => {
// 执行自定义方法
handleSubMenuVisible("data11","enter");
};
const onmouseleave1739447380996 = () => {
// 执行自定义方法
handleSubMenuVisible("data11","leave");
};
const onclick1739265152122 = () => {
// 执行自定义方法
clickItem("data13");
};
const onmouseenter1739500204317 = () => {
// 执行自定义方法
handleSubMenuVisible("data13","enter");
};
const onmouseleave1739500232057 = () => {
// 执行自定义方法
handleSubMenuVisible("data13","leave");
};
const onclick1739265167394_0_0 = () => {
// 执行自定义方法
clickItem("data13");
};
const onmouseenter1739500212469 = () => {
// 执行自定义方法
handleSubMenuVisible("data13","enter");
};
const onmouseleave1739500235650 = () => {
// 执行自定义方法
handleSubMenuVisible("data13","leave");
};
const onclick1739263577686 = () => {
// 执行自定义方法
clickItem("data5");
};
const onmouseleave1739501354900 = () => {
// 执行自定义方法
handleSubMenuVisible("data5","leave");
};
const onmouseenter1739501380797 = () => {
// 执行自定义方法
handleSubMenuVisible("data5","enter");
};
const onclick1739263586641_0_0 = () => {
// 执行自定义方法
clickItem("data5");
};
const onmouseleave1739501351050 = () => {
// 执行自定义方法
handleSubMenuVisible("data5","leave");
};
const onmouseenter1739501377050 = () => {
// 执行自定义方法
handleSubMenuVisible("data5","enter");
};
const onclick1739263733129_0_0 = () => {
// 执行自定义方法
clickItem("data7");
};
const onmouseenter1739501167868 = () => {
// 执行自定义方法
handleSubMenuVisible("data7","enter");
};
const onmouseleave1739501188373 = () => {
// 执行自定义方法
handleSubMenuVisible("data7","leave");
};
const onclick1739263716948 = () => {
// 执行自定义方法
clickItem("data7");
};
const onmouseenter1739501163586 = () => {
// 执行自定义方法
handleSubMenuVisible("data7","enter");
};
const onmouseleave1739501184967 = () => {
// 执行自定义方法
handleSubMenuVisible("data7","leave");
};
const onclick1739263448982 = () => {
// 执行自定义方法
clickItem("data3");
};
const onmouseenter1739501478085 = () => {
// 执行自定义方法
handleSubMenuVisible("data3","enter");
};
const onmouseleave1739501494085 = () => {
// 执行自定义方法
handleSubMenuVisible("data3","leave");
};
const onclick1739263462065 = () => {
// 执行自定义方法
clickItem("data3");
};
const onmouseenter1739501474527 = () => {
// 执行自定义方法
handleSubMenuVisible("data3","enter");
};
const onmouseleave1739501490696 = () => {
// 执行自定义方法
handleSubMenuVisible("data3","leave");
};
const onclick1739262547826_0_2 = () => {
// 执行自定义方法
clickItem("data1");
};
const onmouseleave1739501643006 = () => {
// 执行自定义方法
handleSubMenuVisible("data1","leave");
};
const onmouseenter1739501656134 = () => {
// 执行自定义方法
handleSubMenuVisible("data1","enter");
};
const onclick1739262533653 = () => {
// 执行自定义方法
clickItem("data1");
};
const onmouseleave1739501639921 = () => {
// 执行自定义方法
handleSubMenuVisible("data1","leave");
};
const onmouseenter1739501652473 = () => {
// 执行自定义方法
handleSubMenuVisible("data1","enter");
};
const onclick1739262016032_0_0 = () => {
// 执行自定义方法
clickItem("data2");
};
const onmouseenter1739501766415 = () => {
// 执行自定义方法
handleSubMenuVisible("data2","enter");
};
const onmouseleave1739501789265 = () => {
// 执行自定义方法
handleSubMenuVisible("data2","leave");
};
const onclick1739449266071_0_0 = () => {
// 执行自定义方法
clickItem("data2");
};
const onmouseenter1739501769805 = () => {
// 执行自定义方法
handleSubMenuVisible("data2","enter");
};
const onmouseleave1739501785594 = () => {
// 执行自定义方法
handleSubMenuVisible("data2","leave");
};
const onclick1739261819696 = () => {
// 执行自定义方法
clickItem("data4");
};
const onmouseleave1739501911280 = () => {
// 执行自定义方法
handleSubMenuVisible("data4","leave");
};
const onmouseenter1739501935673 = () => {
// 执行自定义方法
handleSubMenuVisible("data4","enter");
};
const onclick1739261847660_0_0 = () => {
// 执行自定义方法
clickItem("data4");
};
const onmouseleave1739501915198 = () => {
// 执行自定义方法
handleSubMenuVisible("data4","leave");
};
const onmouseenter1739501932398 = () => {
// 执行自定义方法
handleSubMenuVisible("data4","enter");
};
const onclick1739261028622 = () => {
// 执行自定义方法
clickItem("data14");
};
const onmouseenter1739502835282 = () => {
// 执行自定义方法
handleSubMenuVisible("data14","enter");
};
const onmouseleave1739502857819 = () => {
// 执行自定义方法
handleSubMenuVisible("data14","leave");
};
const onclick1739261048933 = () => {
// 执行自定义方法
clickItem("data14");
};
const onmouseenter1739502838964 = () => {
// 执行自定义方法
handleSubMenuVisible("data14","enter");
};
const onmouseleave1739502854126 = () => {
// 执行自定义方法
handleSubMenuVisible("data14","leave");
};
const onclick1739261084073 = () => {
// 执行自定义方法
clickItem("data12");
};
const onmouseleave1739502682072 = () => {
// 执行自定义方法
handleSubMenuVisible("data12","leave");
};
const onmouseenter1739502707735 = () => {
// 执行自定义方法
handleSubMenuVisible("data12","enter");
};
const onclick1739261099702 = () => {
// 执行自定义方法
clickItem("data12");
};
const onmouseleave1739502686142 = () => {
// 执行自定义方法
handleSubMenuVisible("data12","leave");
};
const onmouseenter1739502704034 = () => {
// 执行自定义方法
handleSubMenuVisible("data12","enter");
};
const onclick1739261419314 = () => {
// 执行自定义方法
clickItem("data10");
};
const onmouseenter1739502527497 = () => {
// 执行自定义方法
handleSubMenuVisible("data10","enter");
};
const onmouseleave1739502552048 = () => {
// 执行自定义方法
handleSubMenuVisible("data10","leave");
};
const onclick1739261434278 = () => {
// 执行自定义方法
clickItem("data10");
};
const onmouseenter1739502523292 = () => {
// 执行自定义方法
handleSubMenuVisible("data10","enter");
};
const onmouseleave1739502548055 = () => {
// 执行自定义方法
handleSubMenuVisible("data10","leave");
};
const onclick1739261552087 = () => {
// 执行自定义方法
clickItem("data8");
};
const onmouseleave1739502364459 = () => {
// 执行自定义方法
handleSubMenuVisible("data8","leave");
};
const onmouseenter1739502383500 = () => {
// 执行自定义方法
handleSubMenuVisible("data8","enter");
};
const onclick1739261566403 = () => {
// 执行自定义方法
clickItem("data8");
};
const onmouseleave1739502359247 = () => {
// 执行自定义方法
handleSubMenuVisible("data8","leave");
};
const onmouseenter1739502379574 = () => {
// 执行自定义方法
handleSubMenuVisible("data8","enter");
};
const onclick1739261663457 = () => {
// 执行自定义方法
clickItem("data6");
};
const onmouseenter1739502209599 = () => {
// 执行自定义方法
handleSubMenuVisible("data6","enter");
};
const onmouseleave1739502225405 = () => {
// 执行自定义方法
handleSubMenuVisible("data6","leave");
};
const onclick1739261683646_0_0 = () => {
// 执行自定义方法
clickItem("data6");
};
const onmouseenter1739502205089 = () => {
// 执行自定义方法
handleSubMenuVisible("data6","enter");
};
const onmouseleave1739502221432 = () => {
// 执行自定义方法
handleSubMenuVisible("data6","leave");
};
// 接口函数
const getMenuListNew = () => {
return new Promise((resolve, reject) => {
  http({"url":"/lxt-zhcx-pro/menu/user/menu/tree","method":"get","baseURL":"http://192.168.0.202:7777","params":{"userToken":state.userToken},}).then((res) => {
     // 成功的操作
     // 获取子元素的第一个子节点
const getFirstChildrenId = (children) => {
  // 如果 children 为空或不是数组，返回空字符串
  if (!Array.isArray(children) || children.length === 0) {
    return '';
  }

  // 遍历子节点
  for (const item of children) {
    // 如果当前节点没有子节点（即为叶子节点），直接返回其 RES_ID
    if (!item?.CHILDREN || item?.CHILDREN.length === 0) {
      return item.RES_ID; // ？ 找到第一个叶子节点，立即返回
    }
    
    // 如果有子节点，递归查找其子树中的第一个叶子节点
    const resId = getFirstChildrenId(item?.CHILDREN);
    if (resId) {
      return resId; // 
    }
  }
  return '';
};
try{
if(res?.data?.data){
  const isGeeentheme = global.activeTheme === '绿色主题'
  const arr = res?.data?.data?.CHILDREN?.map(item =>{
    let greenDefaultUrl = ''
    let greenSelectedUrl= ''
    let blueDefaultUrl = ''
    let blueSelectedUrl= ''
    if(item?.EXT_PARAM_INFO) {
      const { greenIconDefaultUrl, greenIconSelectedUrl, blueIconDefaultUrl, blueIconSelectedUrl} = JSON.parse(item?.EXT_PARAM_INFO)
      greenDefaultUrl = greenIconDefaultUrl
      greenSelectedUrl = greenIconSelectedUrl
      blueDefaultUrl = blueIconDefaultUrl
      blueSelectedUrl = blueIconSelectedUrl
    }else{
      greenDefaultUrl = ''
      greenSelectedUrl= ''
      blueDefaultUrl = ''
      blueSelectedUrl= ''
    }
    return{
      text:item?.RES_NAME,
      defaultImg: isGeeentheme ? greenDefaultUrl : blueDefaultUrl,
      activeImg:  isGeeentheme ? greenSelectedUrl : blueSelectedUrl,
      sort: item?.SORT,
      isActive: false,
      dropdownState: false,
      subMenu: item?.CHILDREN.map(a => {
        return{
          label: a?.RES_NAME,
          name: !a?.CHILDREN?.length ? a?.RES_ID : getFirstChildrenId(a?.CHILDREN)
        }
      }) || []
    }
  })
  state.templateMenuData = arr
  state.showSwitch = arr.length > 16 ? true : false
  Object.keys(state.menuList).forEach((key,index) => {
    if(index < arr.length){
      state.menuList[key] = arr[index] || {}
    }else{
      state.menuList[key] = {
        text:'',
      defaultImg:'',
      activeImg: '',
      sort: '',
      isActive:false,
       dropdownState:false,
      subMenu: []
      }
    }
    state.menuList[key] = arr[index] || {}
  })
}
setIcon()
console.log(state.menuList)
}catch(error){
  console.error(error)
}


      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [state.userToken], () => {
getMenuListNew();
},{
deep: true, // 深度监听
});
// 接口函数
const getMenuList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"dee50f8ea76eaf13dc5750b740ad44ff","sss":"FJSTY.OVERVIEW"},}).then((res) => {
     // 成功的操作
     if(res?.data?.length){
  const isGeeentheme = global.activeTheme === '绿色主题'
  const arr = res?.data?.filter(item => item?.PARENT === '1a0c3796-f8ba-410c-9d4b-c643a9b606d8')?.map(item =>{
    return{
      text:item?.RES_NAME,
      defaultImg: isGeeentheme ? item?.EXT1 : item.EXT3,
      activeImg: isGeeentheme ? item?.EXT2 : item.EXT4,
      sort: item?.SORT,
      isActive:false,
      dropdownState:false,
      subMenu: res.data?.filter(i => i?.PARENT === item?.RES_ID)?.map(a => {
        return{
          label: a?.RES_NAME,
          value: a?.RES_ID
        }
      })
    }
  })
  Object.keys(state.menuList).forEach((key,index) => {
    if(index < arr.length){
      state.menuList[key] = arr[index] || {}
    }else{
      state.menuList[key] = {
        text:'',
      defaultImg:'',
      activeImg: '',
      sort: '',
      isActive:false,
       dropdownState:false,
      subMenu: []
      }
    }
    state.menuList[key] = arr[index] || {}
  })
}
state.menuList.data15.isActive = true
// Object.keys(state.menuList).forEach(key =>{
//   state.menuList[key].subMenu =  [
//     {
//       "label": "地表水",
//       "name": "dbs"
//     },
//     {
//       "label": "饮用水源地",
//       "name": "yysyd"
//     },
//     {
//       "label": "水功能区",
//       "name": "sgnq"
//     },
//     {
//       "label": "黑臭水体",
//       "name": "hcst"
//     },
//     {
//       "label": "实时监测",
//       "name": "ssjc"
//     },
//     {
//       "label": "环境专题",
//       "name": "hjzt"
//     }
//   ]
// })
setIcon()
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-bottomMenuDoubleCopy1', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
changeTheme();
// 执行自定义方法
getMenuData();
onMounted(() => {
setPageScale('t-l-c-bottomMenuDoubleCopy1', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tTabsx0x6ComputedData = computed(() => _.merge({}, componentState.tTabsx0x6.default, componentState.tTabsx0x6?.[state.screenSize]));

 const tTabsx0x7ComputedData = computed(() => _.merge({}, componentState.tTabsx0x7.default, componentState.tTabsx0x7?.[state.screenSize]));

 const tTabsx0x8ComputedData = computed(() => _.merge({}, componentState.tTabsx0x8.default, componentState.tTabsx0x8?.[state.screenSize]));

 const tTabsx0x9ComputedData = computed(() => _.merge({}, componentState.tTabsx0x9.default, componentState.tTabsx0x9?.[state.screenSize]));

 const tTabsx0x10ComputedData = computed(() => _.merge({}, componentState.tTabsx0x10.default, componentState.tTabsx0x10?.[state.screenSize]));

 const tTabsx0x11ComputedData = computed(() => _.merge({}, componentState.tTabsx0x11.default, componentState.tTabsx0x11?.[state.screenSize]));

 const tTabsx0x12ComputedData = computed(() => _.merge({}, componentState.tTabsx0x12.default, componentState.tTabsx0x12?.[state.screenSize]));

 const tTabsx0x13ComputedData = computed(() => _.merge({}, componentState.tTabsx0x13.default, componentState.tTabsx0x13?.[state.screenSize]));

 const tTabsx0x14ComputedData = computed(() => _.merge({}, componentState.tTabsx0x14.default, componentState.tTabsx0x14?.[state.screenSize]));

 const tTabsx0x15ComputedData = computed(() => _.merge({}, componentState.tTabsx0x15.default, componentState.tTabsx0x15?.[state.screenSize]));

 const tTabsx0x16ComputedData = computed(() => _.merge({}, componentState.tTabsx0x16.default, componentState.tTabsx0x16?.[state.screenSize]));

 const tTabsx0x17ComputedData = computed(() => _.merge({}, componentState.tTabsx0x17.default, componentState.tTabsx0x17?.[state.screenSize]));

 const tTabsx0x18ComputedData = computed(() => _.merge({}, componentState.tTabsx0x18.default, componentState.tTabsx0x18?.[state.screenSize]));

 const tTabsx0x19ComputedData = computed(() => _.merge({}, componentState.tTabsx0x19.default, componentState.tTabsx0x19?.[state.screenSize]));

 const tTabsx0x20ComputedData = computed(() => _.merge({}, componentState.tTabsx0x20.default, componentState.tTabsx0x20?.[state.screenSize]));

 const tTabsx0x21ComputedData = computed(() => _.merge({}, componentState.tTabsx0x21.default, componentState.tTabsx0x21?.[state.screenSize]));

 const tRectx0x22ComputedData = computed(() => _.merge({}, componentState.tRectx0x22.default, componentState.tRectx0x22?.[state.screenSize]));

 const tRectx0x23ComputedData = computed(() => _.merge({}, componentState.tRectx0x23.default, componentState.tRectx0x23?.[state.screenSize]));

 const tRectx0x24ComputedData = computed(() => _.merge({}, componentState.tRectx0x24.default, componentState.tRectx0x24?.[state.screenSize]));

 const tRectx0x25ComputedData = computed(() => _.merge({}, componentState.tRectx0x25.default, componentState.tRectx0x25?.[state.screenSize]));

 const tRectx0x26ComputedData = computed(() => _.merge({}, componentState.tRectx0x26.default, componentState.tRectx0x26?.[state.screenSize]));

 const tRectx0x27ComputedData = computed(() => _.merge({}, componentState.tRectx0x27.default, componentState.tRectx0x27?.[state.screenSize]));

 const tRectx0x28ComputedData = computed(() => _.merge({}, componentState.tRectx0x28.default, componentState.tRectx0x28?.[state.screenSize]));

 const tRectx0x29ComputedData = computed(() => _.merge({}, componentState.tRectx0x29.default, componentState.tRectx0x29?.[state.screenSize]));

 const tRectx0x30ComputedData = computed(() => _.merge({}, componentState.tRectx0x30.default, componentState.tRectx0x30?.[state.screenSize]));

 const tRectx0x31ComputedData = computed(() => _.merge({}, componentState.tRectx0x31.default, componentState.tRectx0x31?.[state.screenSize]));

 const tRectx0x32ComputedData = computed(() => _.merge({}, componentState.tRectx0x32.default, componentState.tRectx0x32?.[state.screenSize]));

 const tRectx0x33ComputedData = computed(() => _.merge({}, componentState.tRectx0x33.default, componentState.tRectx0x33?.[state.screenSize]));

 const tRectx0x34ComputedData = computed(() => _.merge({}, componentState.tRectx0x34.default, componentState.tRectx0x34?.[state.screenSize]));

 const tRectx0x35ComputedData = computed(() => _.merge({}, componentState.tRectx0x35.default, componentState.tRectx0x35?.[state.screenSize]));

 const tRectx0x36ComputedData = computed(() => _.merge({}, componentState.tRectx0x36.default, componentState.tRectx0x36?.[state.screenSize]));

 const tRectx0x37ComputedData = computed(() => _.merge({}, componentState.tRectx0x37.default, componentState.tRectx0x37?.[state.screenSize]));

 const tRectx0x38ComputedData = computed(() => _.merge({}, componentState.tRectx0x38.default, componentState.tRectx0x38?.[state.screenSize]));

 const tRectx0x39ComputedData = computed(() => _.merge({}, componentState.tRectx0x39.default, componentState.tRectx0x39?.[state.screenSize]));

 const tRectx0x40ComputedData = computed(() => _.merge({}, componentState.tRectx0x40.default, componentState.tRectx0x40?.[state.screenSize]));

 const tRectx0x41ComputedData = computed(() => _.merge({}, componentState.tRectx0x41.default, componentState.tRectx0x41?.[state.screenSize]));

 const tRectx0x42ComputedData = computed(() => _.merge({}, componentState.tRectx0x42.default, componentState.tRectx0x42?.[state.screenSize]));

 const tRectx0x43ComputedData = computed(() => _.merge({}, componentState.tRectx0x43.default, componentState.tRectx0x43?.[state.screenSize]));

 const tRectx0x44ComputedData = computed(() => _.merge({}, componentState.tRectx0x44.default, componentState.tRectx0x44?.[state.screenSize]));

 const tRectx0x45ComputedData = computed(() => _.merge({}, componentState.tRectx0x45.default, componentState.tRectx0x45?.[state.screenSize]));

 const tRectx0x46ComputedData = computed(() => _.merge({}, componentState.tRectx0x46.default, componentState.tRectx0x46?.[state.screenSize]));

 const tRectx0x47ComputedData = computed(() => _.merge({}, componentState.tRectx0x47.default, componentState.tRectx0x47?.[state.screenSize]));

 const tRectx0x48ComputedData = computed(() => _.merge({}, componentState.tRectx0x48.default, componentState.tRectx0x48?.[state.screenSize]));

 const tRectx0x49ComputedData = computed(() => _.merge({}, componentState.tRectx0x49.default, componentState.tRectx0x49?.[state.screenSize]));

 const tRectx0x50ComputedData = computed(() => _.merge({}, componentState.tRectx0x50.default, componentState.tRectx0x50?.[state.screenSize]));

 const tRectx0x51ComputedData = computed(() => _.merge({}, componentState.tRectx0x51.default, componentState.tRectx0x51?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tRectx0x5ComputedData,
tTabsx0x6ComputedData,
tTabsx0x7ComputedData,
tTabsx0x8ComputedData,
tTabsx0x9ComputedData,
tTabsx0x10ComputedData,
tTabsx0x11ComputedData,
tTabsx0x12ComputedData,
tTabsx0x13ComputedData,
tTabsx0x14ComputedData,
tTabsx0x15ComputedData,
tTabsx0x16ComputedData,
tTabsx0x17ComputedData,
tTabsx0x18ComputedData,
tTabsx0x19ComputedData,
tTabsx0x20ComputedData,
tTabsx0x21ComputedData,
tRectx0x22ComputedData,
tRectx0x23ComputedData,
tRectx0x24ComputedData,
tRectx0x25ComputedData,
tRectx0x26ComputedData,
tRectx0x27ComputedData,
tRectx0x28ComputedData,
tRectx0x29ComputedData,
tRectx0x30ComputedData,
tRectx0x31ComputedData,
tRectx0x32ComputedData,
tRectx0x33ComputedData,
tRectx0x34ComputedData,
tRectx0x35ComputedData,
tRectx0x36ComputedData,
tRectx0x37ComputedData,
tRectx0x38ComputedData,
tRectx0x39ComputedData,
tRectx0x40ComputedData,
tRectx0x41ComputedData,
tRectx0x42ComputedData,
tRectx0x43ComputedData,
tRectx0x44ComputedData,
tRectx0x45ComputedData,
tRectx0x46ComputedData,
tRectx0x47ComputedData,
tRectx0x48ComputedData,
tRectx0x49ComputedData,
tRectx0x50ComputedData,
tRectx0x51ComputedData,
onclick1739435785640_0_0,
onmouseleave1739502971459,
onmouseenter1739502989445,
onclick1739435785639_0_0,
onmouseleave1739502975813,
onmouseenter1739502985700,
onclick1760336196871,
onclick1760336213838,
onmouseleave1739498505373_0_0,
onmouseenter1739498505373_0_1,
ontabClick1760325725646,
onmouseleave1739500054322_0_0,
onmouseenter1739500054322_0_1,
ontabClick1760325800877,
onmouseleave1739500420268_0_0,
onmouseenter1739500420268_0_1,
ontabClick1760325657369,
onmouseleave1739501093511_0_0,
onmouseenter1739501093511_0_1,
ontabClick1760325647539,
onmouseleave1739501269446_0_0,
onmouseenter1739501269446_0_1,
ontabClick1760325636381,
onmouseleave1739501428053_0_0,
onmouseenter1739501428053_0_1,
ontabClick1760325624464,
onmouseleave1739501556751_0_0,
onmouseenter1739501556751_0_1,
ontabClick1760323287105,
onmouseleave1739501718264_0_0,
onmouseenter1739501718264_0_1,
ontabClick1760325612882,
onmouseleave1739501849544_0_0,
onmouseenter1739501849544_0_1,
ontabClick1760325630780,
onmouseleave1739502148093_0_0,
onmouseenter1739502148093_0_1,
ontabClick1760325641044,
onmouseleave1739502307650_0_0,
onmouseenter1739502307650_0_1,
ontabClick1760325653009,
onmouseleave1739502424036_0_0,
onmouseenter1739502424036_0_1,
ontabClick1760325662676,
onmouseleave1739502624034_0_0,
onmouseenter1739502624034_0_1,
ontabClick1760325679125,
onmouseleave1739502755545_0_0,
onmouseenter1739502755545_0_1,
ontabClick1760325718651,
onmouseleave1739502915771_0_0,
onmouseenter1739502915771_0_1,
ontabClick1760325730802,
onmouseleave1739499854204,
onmouseenter1739499872362,
ontabClick1760325673868,
onclick1739265424400,
onmouseenter1739498791173,
onmouseleave1739498798922,
onclick1739265445540_0_0,
onmouseenter1739500192855,
onmouseleave1739500225333,
onclick1739261028622,
onmouseenter1739502835282,
onmouseleave1739502857819,
onclick1739261048933,
onmouseenter1739502838964,
onmouseleave1739502854126,
onclick1739265152122,
onmouseenter1739500204317,
onmouseleave1739500232057,
onclick1739265167394_0_0,
onmouseenter1739500212469,
onmouseleave1739500235650,
onclick1739261084073,
onmouseleave1739502682072,
onmouseenter1739502707735,
onclick1739261099702,
onmouseleave1739502686142,
onmouseenter1739502704034,
onclick1739265027340,
onmouseenter1739499812309,
onmouseleave1739499839806,
onclick1739265043843_0_0,
onmouseenter1739447368228,
onmouseleave1739447380996,
onclick1739261419314,
onmouseenter1739502527497,
onmouseleave1739502552048,
onclick1739261434278,
onmouseenter1739502523292,
onmouseleave1739502548055,
onclick1739264874414,
onmouseleave1739500827709,
onmouseenter1739500872571,
onclick1739264887369_0_0,
onmouseleave1739500852376,
onmouseenter1739500868136,
onclick1739263733129_0_0,
onmouseenter1739501167868,
onmouseleave1739501188373,
onclick1739263716948,
onmouseenter1739501163586,
onmouseleave1739501184967,
onclick1739261663457,
onmouseenter1739502209599,
onmouseleave1739502225405,
onclick1739261683646_0_0,
onmouseenter1739502205089,
onmouseleave1739502221432,
onclick1739263577686,
onmouseleave1739501354900,
onmouseenter1739501380797,
onclick1739263586641_0_0,
onmouseleave1739501351050,
onmouseenter1739501377050,
onclick1739261819696,
onmouseleave1739501911280,
onmouseenter1739501935673,
onclick1739261847660_0_0,
onmouseleave1739501915198,
onmouseenter1739501932398,
onclick1739263448982,
onmouseenter1739501478085,
onmouseleave1739501494085,
onclick1739263462065,
onmouseenter1739501474527,
onmouseleave1739501490696,
onclick1739262547826_0_2,
onmouseleave1739501643006,
onmouseenter1739501656134,
onclick1739262533653,
onmouseleave1739501639921,
onmouseenter1739501652473,
onclick1739262016032_0_0,
onmouseenter1739501766415,
onmouseleave1739501789265,
onclick1739449266071_0_0,
onmouseenter1739501769805,
onmouseleave1739501785594,
onclick1739261552087,
onmouseleave1739502364459,
onmouseenter1739502383500,
onclick1739261566403,
onmouseleave1739502359247,
onmouseenter1739502379574,
};
},
};
