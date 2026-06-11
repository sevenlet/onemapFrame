window.bottomNavigationMenuComponent = {
template: 
`<div id="t-l-c-bottomNavigationMenu" class="t-l-c-bottomNavigationMenu" >` +
`<t-rect id="t-rect-9d12.1d1d2a0b2" class="bottomNavigationMenu-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.glActive === true" id="t-rect-5b24.ddcf6fa67" class="bottomNavigationMenu-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle" @click="onclick1739261048933">` +
`</t-rect>` +
`<t-rect v-if="state.glActive === false" id="t-rect-5b90.ae677e9ba" class="bottomNavigationMenu-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle" @click="onclick1739261028622">` +
`</t-rect>` +
`<t-rect v-if="state.dqhjActive === false" id="t-rect-b43e.4b6a54464" class="bottomNavigationMenu-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1739261084073">` +
`</t-rect>` +
`<t-rect v-if="state.dqhjActive === true" id="t-rect-957a.589b0a9ad" class="bottomNavigationMenu-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1739261099702">` +
`</t-rect>` +
`<t-rect v-if="state.shjActive === false" id="t-rect-998c.73e9741f6" class="bottomNavigationMenu-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle" @mouseenter="onmouseenter1739255926351" @mouseleave="onmouseleave1739255988115" @click="onclick1739261419314">` +
`</t-rect>` +
`<t-rect v-if="state.shjActive === true" id="t-rect-156d.961e5f97c" class="bottomNavigationMenu-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle" @mouseenter="onmouseenter1739261276226_0_0" @mouseleave="onmouseleave1739261276226_0_1" @click="onclick1739261434278">` +
`</t-rect>` +
`<t-rect v-if="state.trhjActive === false" id="t-rect-96b8.c8e706c24" class="bottomNavigationMenu-t-rect-0-7"  :tip="tRectx0x7ComputedData.tip" :label="tRectx0x7ComputedData.label" :active="tRectx0x7ComputedData.active" :c-style="tRectx0x7ComputedData.cStyle" @click="onclick1739261552087">` +
`</t-rect>` +
`<t-rect v-if="state.trhjActive === true" id="t-rect-4db7.9ba6bdb7f" class="bottomNavigationMenu-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle" @click="onclick1739261566403">` +
`</t-rect>` +
`<t-rect v-if="state.hyhjActive === false" id="t-rect-ddf0.76a91d001" class="bottomNavigationMenu-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle" @click="onclick1739261663457">` +
`</t-rect>` +
`<t-rect v-if="state.hyhjActive === true" id="t-rect-b98e.ed2ce2f7d" class="bottomNavigationMenu-t-rect-0-10"  :tip="tRectx0x10ComputedData.tip" :label="tRectx0x10ComputedData.label" :active="tRectx0x10ComputedData.active" :c-style="tRectx0x10ComputedData.cStyle" @click="onclick1739261683646_0_0">` +
`</t-rect>` +
`<t-rect v-if="state.gfjgActive === false" id="t-rect-d7f9.fd771a718" class="bottomNavigationMenu-t-rect-0-11"  :tip="tRectx0x11ComputedData.tip" :label="tRectx0x11ComputedData.label" :active="tRectx0x11ComputedData.active" :c-style="tRectx0x11ComputedData.cStyle" @click="onclick1739261819696">` +
`</t-rect>` +
`<t-rect v-if="state.gfjgActive === true" id="t-rect-e2d7.6249b5ba" class="bottomNavigationMenu-t-rect-0-12"  :tip="tRectx0x12ComputedData.tip" :label="tRectx0x12ComputedData.label" :active="tRectx0x12ComputedData.active" :c-style="tRectx0x12ComputedData.cStyle" @click="onclick1739261847660_0_0">` +
`</t-rect>` +
`<t-rect v-if="state.zrstActive === false" id="t-rect-0474.9d1b391a5" class="bottomNavigationMenu-t-rect-0-13"  :tip="tRectx0x13ComputedData.tip" :label="tRectx0x13ComputedData.label" :active="tRectx0x13ComputedData.active" :c-style="tRectx0x13ComputedData.cStyle" @click="onclick1739261999845">` +
`</t-rect>` +
`<t-rect v-if="state.zrstActive === true" id="t-rect-cab2.a1c2e4463" class="bottomNavigationMenu-t-rect-0-14"  :tip="tRectx0x14ComputedData.tip" :label="tRectx0x14ComputedData.label" :active="tRectx0x14ComputedData.active" :c-style="tRectx0x14ComputedData.cStyle" @click="onclick1739262016032_0_0">` +
`</t-rect>` +
`<t-rect v-if="state.hyfsActive === false" id="t-rect-78b4.bd0244839" class="bottomNavigationMenu-t-rect-0-15"  :tip="tRectx0x15ComputedData.tip" :label="tRectx0x15ComputedData.label" :active="tRectx0x15ComputedData.active" :c-style="tRectx0x15ComputedData.cStyle" @mouseenter="onmouseenter1739259612225" @mouseleave="onmouseleave1739259627281" @click="onclick1739262533653">` +
`</t-rect>` +
`<t-rect v-if="state.hyfsActive === true" id="t-rect-e437.bd1b02eff" class="bottomNavigationMenu-t-rect-0-16"  :tip="tRectx0x16ComputedData.tip" :label="tRectx0x16ComputedData.label" :active="tRectx0x16ComputedData.active" :c-style="tRectx0x16ComputedData.cStyle" @mouseenter="onmouseenter1739262547826_0_0" @mouseleave="onmouseleave1739262547826_0_1" @click="onclick1739262547826_0_2">` +
`</t-rect>` +
`<t-rect v-if="state.yjglActive === false" id="t-rect-6211.6dfc93282" class="bottomNavigationMenu-t-rect-0-17"  :tip="tRectx0x17ComputedData.tip" :label="tRectx0x17ComputedData.label" :active="tRectx0x17ComputedData.active" :c-style="tRectx0x17ComputedData.cStyle" @click="onclick1739263448982">` +
`</t-rect>` +
`<t-rect v-if="state.yjglActive === true" id="t-rect-6942.b8aece9c8" class="bottomNavigationMenu-t-rect-0-18"  :tip="tRectx0x18ComputedData.tip" :label="tRectx0x18ComputedData.label" :active="tRectx0x18ComputedData.active" :c-style="tRectx0x18ComputedData.cStyle" @click="onclick1739263462065">` +
`</t-rect>` +
`<t-rect v-if="state.jxzfActive === false" id="t-rect-81c3.de9cb3b55" class="bottomNavigationMenu-t-rect-0-19"  :tip="tRectx0x19ComputedData.tip" :label="tRectx0x19ComputedData.label" :active="tRectx0x19ComputedData.active" :c-style="tRectx0x19ComputedData.cStyle" @click="onclick1739263577686">` +
`</t-rect>` +
`<t-rect v-if="state.jxzfActive === true" id="t-rect-2e2f.51651f2b6" class="bottomNavigationMenu-t-rect-0-20"  :tip="tRectx0x20ComputedData.tip" :label="tRectx0x20ComputedData.label" :active="tRectx0x20ComputedData.active" :c-style="tRectx0x20ComputedData.cStyle" @click="onclick1739263586641_0_0">` +
`</t-rect>` +
`<t-rect v-if="state.xftsActive === false" id="t-rect-aeff.61bc4ed09" class="bottomNavigationMenu-t-rect-0-21"  :tip="tRectx0x21ComputedData.tip" :label="tRectx0x21ComputedData.label" :active="tRectx0x21ComputedData.active" :c-style="tRectx0x21ComputedData.cStyle" @click="onclick1739263716948">` +
`</t-rect>` +
`<t-rect v-if="state.xftsActive === true" id="t-rect-e7ae.e2e17ae41" class="bottomNavigationMenu-t-rect-0-22"  :tip="tRectx0x22ComputedData.tip" :label="tRectx0x22ComputedData.label" :active="tRectx0x22ComputedData.active" :c-style="tRectx0x22ComputedData.cStyle" @click="onclick1739263733129_0_0">` +
`</t-rect>` +
`<t-rect v-if="state.lyxcActive === false" id="t-rect-3e0e.9f01b42b1" class="bottomNavigationMenu-t-rect-0-23"  :tip="tRectx0x23ComputedData.tip" :label="tRectx0x23ComputedData.label" :active="tRectx0x23ComputedData.active" :c-style="tRectx0x23ComputedData.cStyle" @click="onclick1739264874414">` +
`</t-rect>` +
`<t-rect v-if="state.lyxcActive === true" id="t-rect-b009.5b80a1572" class="bottomNavigationMenu-t-rect-0-24"  :tip="tRectx0x24ComputedData.tip" :label="tRectx0x24ComputedData.label" :active="tRectx0x24ComputedData.active" :c-style="tRectx0x24ComputedData.cStyle" @click="onclick1739264887369_0_0">` +
`</t-rect>` +
`<t-rect v-if="state.flfgActive === false" id="t-rect-024d.166932bd" class="bottomNavigationMenu-t-rect-0-25"  :tip="tRectx0x25ComputedData.tip" :label="tRectx0x25ComputedData.label" :active="tRectx0x25ComputedData.active" :c-style="tRectx0x25ComputedData.cStyle" @click="onclick1739265027340">` +
`</t-rect>` +
`<t-rect v-if="state.flfgActive === true" id="t-rect-66b7.3792ac907" class="bottomNavigationMenu-t-rect-0-26"  :tip="tRectx0x26ComputedData.tip" :label="tRectx0x26ComputedData.label" :active="tRectx0x26ComputedData.active" :c-style="tRectx0x26ComputedData.cStyle" @click="onclick1739265043843_0_0">` +
`</t-rect>` +
`<t-rect v-if="state.dcdbActive === false" id="t-rect-8675.0c6d968be" class="bottomNavigationMenu-t-rect-0-27"  :tip="tRectx0x27ComputedData.tip" :label="tRectx0x27ComputedData.label" :active="tRectx0x27ComputedData.active" :c-style="tRectx0x27ComputedData.cStyle" @click="onclick1739265152122">` +
`</t-rect>` +
`<t-rect v-if="state.dcdbActive === true" id="t-rect-7757.1d8fa4457" class="bottomNavigationMenu-t-rect-0-28"  :tip="tRectx0x28ComputedData.tip" :label="tRectx0x28ComputedData.label" :active="tRectx0x28ComputedData.active" :c-style="tRectx0x28ComputedData.cStyle" @click="onclick1739265167394_0_0">` +
`</t-rect>` +
`<t-rect v-if="state.ghhpActive === false" id="t-rect-0466.791830d0b" class="bottomNavigationMenu-t-rect-0-29"  :tip="tRectx0x29ComputedData.tip" :label="tRectx0x29ComputedData.label" :active="tRectx0x29ComputedData.active" :c-style="tRectx0x29ComputedData.cStyle" @click="onclick1739265424400">` +
`</t-rect>` +
`<t-rect v-if="state.ghhpActive === true" id="t-rect-a7de.3d5cb9e2f" class="bottomNavigationMenu-t-rect-0-30"  :tip="tRectx0x30ComputedData.tip" :label="tRectx0x30ComputedData.label" :active="tRectx0x30ComputedData.active" :c-style="tRectx0x30ComputedData.cStyle" @click="onclick1739265445540_0_0">` +
`</t-rect>` +
`<t-tabs v-if="state.shjDropdownState === true" id="t-tabs-27e3.253974f63" class="bottomNavigationMenu-t-tabs-0-31"  :data="replaceCssVariables(state.shjMenuList, global?.theme || global?.activeTheme || '默认主题')" :active-tab="tTabsx0x31ComputedData.activeTab" :tab-position-extend="tTabsx0x31ComputedData.tabPositionExtend" :stretch="tTabsx0x31ComputedData.stretch" :c-style="tTabsx0x31ComputedData.cStyle" @mouseleave="onmouseleave1739256007098" @mouseenter="onmouseenter1739256047060">` +
`</t-tabs>` +
`<t-row id="t-row-beef.d6f4f82f7" class="bottomNavigationMenu-t-row-0-32"  :c-style="tRowx0x32ComputedData.cStyle" :gutter="tRowx0x32ComputedData.gutter" :justify="tRowx0x32ComputedData.justify" :align="tRowx0x32ComputedData.align">` +
`<t-col id="t-col-3fa2.87b552f0b" class="bottomNavigationMenu-t-col-0-32-0"  :span="tColx0x32x0ComputedData.span" :offset="tColx0x32x0ComputedData.offset" :push="tColx0x32x0ComputedData.push" :pull="tColx0x32x0ComputedData.pull" :c-style="tColx0x32x0ComputedData.cStyle">` +
`<t-rect v-if="state.glActive === true" id="t-rect-d6c1.ef748e464" class="bottomNavigationMenu-t-rect-0-32-0-0"  :tip="tRectx0x32x0x0ComputedData.tip" :label="tRectx0x32x0x0ComputedData.label" :active="tRectx0x32x0x0ComputedData.active" :c-style="tRectx0x32x0x0ComputedData.cStyle" @click="onclick1739347638138_0_0">` +
`</t-rect>` +
`<t-rect v-if="state.glActive === false" id="t-rect-63bb.a4fd1a996" class="bottomNavigationMenu-t-rect-0-32-0-1"  :tip="tRectx0x32x0x1ComputedData.tip" :label="tRectx0x32x0x1ComputedData.label" :active="tRectx0x32x0x1ComputedData.active" :c-style="tRectx0x32x0x1ComputedData.cStyle" @click="onclick1739412482070_0_0">` +
`</t-rect>` +
`</t-col>` +
`<t-col id="t-col-cfbf.15cb4b4c1" class="bottomNavigationMenu-t-col-0-32-1"  :span="tColx0x32x1ComputedData.span" :offset="tColx0x32x1ComputedData.offset" :push="tColx0x32x1ComputedData.push" :pull="tColx0x32x1ComputedData.pull" :c-style="tColx0x32x1ComputedData.cStyle">` +
`<t-rect v-if="state.glActive === true" id="t-rect-e278.344f493a2" class="bottomNavigationMenu-t-rect-0-32-1-0"  :tip="tRectx0x32x1x0ComputedData.tip" :label="tRectx0x32x1x0ComputedData.label" :active="tRectx0x32x1x0ComputedData.active" :c-style="tRectx0x32x1x0ComputedData.cStyle" @click="onclick1739347645256_0_0">` +
`</t-rect>` +
`</t-col>` +
`<t-col id="t-col-c556.466a97585" class="bottomNavigationMenu-t-col-0-32-2"  :span="tColx0x32x2ComputedData.span" :offset="tColx0x32x2ComputedData.offset" :push="tColx0x32x2ComputedData.push" :pull="tColx0x32x2ComputedData.pull" :c-style="tColx0x32x2ComputedData.cStyle">` +
`<t-rect v-if="state.glActive === true" id="t-rect-7dc2.2060e1e47" class="bottomNavigationMenu-t-rect-0-32-2-0"  :tip="tRectx0x32x2x0ComputedData.tip" :label="tRectx0x32x2x0ComputedData.label" :active="tRectx0x32x2x0ComputedData.active" :c-style="tRectx0x32x2x0ComputedData.cStyle" @click="onclick1739347643936_0_0">` +
`</t-rect>` +
`</t-col>` +
`<t-col id="t-col-95a9.933748087" class="bottomNavigationMenu-t-col-0-32-3"  :span="tColx0x32x3ComputedData.span" :offset="tColx0x32x3ComputedData.offset" :push="tColx0x32x3ComputedData.push" :pull="tColx0x32x3ComputedData.pull" :c-style="tColx0x32x3ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-246c.ec0a5cd74" class="bottomNavigationMenu-t-col-0-32-4"  :span="tColx0x32x4ComputedData.span" :offset="tColx0x32x4ComputedData.offset" :push="tColx0x32x4ComputedData.push" :pull="tColx0x32x4ComputedData.pull" :c-style="tColx0x32x4ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-85e9.2068580f7" class="bottomNavigationMenu-t-col-0-32-5"  :span="tColx0x32x5ComputedData.span" :offset="tColx0x32x5ComputedData.offset" :push="tColx0x32x5ComputedData.push" :pull="tColx0x32x5ComputedData.pull" :c-style="tColx0x32x5ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-dd27.f4f944d0f" class="bottomNavigationMenu-t-col-0-32-6"  :span="tColx0x32x6ComputedData.span" :offset="tColx0x32x6ComputedData.offset" :push="tColx0x32x6ComputedData.push" :pull="tColx0x32x6ComputedData.pull" :c-style="tColx0x32x6ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-b1fe.59d261422" class="bottomNavigationMenu-t-col-0-32-7"  :span="tColx0x32x7ComputedData.span" :offset="tColx0x32x7ComputedData.offset" :push="tColx0x32x7ComputedData.push" :pull="tColx0x32x7ComputedData.pull" :c-style="tColx0x32x7ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-831c.43df8bb16" class="bottomNavigationMenu-t-col-0-32-8"  :span="tColx0x32x8ComputedData.span" :offset="tColx0x32x8ComputedData.offset" :push="tColx0x32x8ComputedData.push" :pull="tColx0x32x8ComputedData.pull" :c-style="tColx0x32x8ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-f72f.258b9a4da" class="bottomNavigationMenu-t-col-0-32-9"  :span="tColx0x32x9ComputedData.span" :offset="tColx0x32x9ComputedData.offset" :push="tColx0x32x9ComputedData.push" :pull="tColx0x32x9ComputedData.pull" :c-style="tColx0x32x9ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-2be4.5abfae0d9" class="bottomNavigationMenu-t-col-0-32-10"  :span="tColx0x32x10ComputedData.span" :offset="tColx0x32x10ComputedData.offset" :push="tColx0x32x10ComputedData.push" :pull="tColx0x32x10ComputedData.pull" :c-style="tColx0x32x10ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-be1a.6cc5a2fb3" class="bottomNavigationMenu-t-col-0-32-11"  :span="tColx0x32x11ComputedData.span" :offset="tColx0x32x11ComputedData.offset" :push="tColx0x32x11ComputedData.push" :pull="tColx0x32x11ComputedData.pull" :c-style="tColx0x32x11ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-f2e7.e0ce3338c" class="bottomNavigationMenu-t-col-0-32-12"  :span="tColx0x32x12ComputedData.span" :offset="tColx0x32x12ComputedData.offset" :push="tColx0x32x12ComputedData.push" :pull="tColx0x32x12ComputedData.pull" :c-style="tColx0x32x12ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-a673.e5d51c9f3" class="bottomNavigationMenu-t-col-0-32-13"  :span="tColx0x32x13ComputedData.span" :offset="tColx0x32x13ComputedData.offset" :push="tColx0x32x13ComputedData.push" :pull="tColx0x32x13ComputedData.pull" :c-style="tColx0x32x13ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-5d38.9e135962d" class="bottomNavigationMenu-t-col-0-32-14"  :span="tColx0x32x14ComputedData.span" :offset="tColx0x32x14ComputedData.offset" :push="tColx0x32x14ComputedData.push" :pull="tColx0x32x14ComputedData.pull" :c-style="tColx0x32x14ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-85d5.ecc77bed4" class="bottomNavigationMenu-t-col-0-32-15"  :span="tColx0x32x15ComputedData.span" :offset="tColx0x32x15ComputedData.offset" :push="tColx0x32x15ComputedData.push" :pull="tColx0x32x15ComputedData.pull" :c-style="tColx0x32x15ComputedData.cStyle">` +
`</t-col>` +
`</t-row>` +
`<t-image-base id="t-image-base-f195.98a95a60e" class="bottomNavigationMenu-t-image-base-0-33"  :src="tImageBasex0x33ComputedData.src" :fit="tImageBasex0x33ComputedData.fit" :c-style="tImageBasex0x33ComputedData.cStyle">` +
`</t-image-base>` +
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
            default: {"width":"1919px","height":"139px","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"0px","top":"-6px","backgroundImage":"var(--t-bottom-background)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 100%","-webkit-mask-position":"","pointerEvents":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1919px","height":"139px","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"0px","top":"-6px","backgroundImage":"var(--t-bottom-background)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 100%","-webkit-mask-position":"","pointerEvents":"none"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"44px","top":"-11px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"概览",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"44px","top":"-11px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"44px","top":"-11px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"概览",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"44px","top":"-11px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer"},"hover":{"backgroundImage":"var(--t-bottom-menu-gl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-dqhj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"170px","top":"-17px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"大气环境",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-dqhj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"170px","top":"-17px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-dqhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-dqhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"170px","top":"-17px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"大气环境",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-dqhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"170px","top":"-17px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-shj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"294px","top":"-19px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"水环境",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-shj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"294px","top":"-19px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-shj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-shj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"294px","top":"-19px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"水环境",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-shj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"294px","top":"-19px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tRectx0x7: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-trhj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"423px","top":"-24px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"土壤环境",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-trhj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"423px","top":"-24px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-trhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-trhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"423px","top":"-24px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"土壤环境",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-trhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"423px","top":"-24px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-hyhj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"542px","top":"-33px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"海洋环境",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-hyhj-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"542px","top":"-33px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-hyhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x10: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-hyhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"542px","top":"-33px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"海洋环境",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-hyhj-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"542px","top":"-33px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tRectx0x11: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gfjg-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"667px","top":"-35px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"固废监管",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gfjg-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"667px","top":"-35px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-gfjg-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x12: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gfjg-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"667px","top":"-35px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"固废监管",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gfjg-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"667px","top":"-35px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tRectx0x13: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrs态-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"794px","top":"-38px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"自然生态",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrs态-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"794px","top":"-38px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-zrs态-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x14: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrs态-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"794px","top":"-38px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"自然生态",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-zrs态-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"794px","top":"-38px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tRectx0x15: {
defaultStyle: {
            default: {"width":"83px","height":"120px","backgroundImage":"var(--t-bottom-menu-heyf-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 0%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"919px","top":"-15px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"40px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"核与辐射",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"120px","backgroundImage":"var(--t-bottom-menu-heyf-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 0%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"919px","top":"-15px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"40px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-heyf-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 0%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x16: {
defaultStyle: {
            default: {"width":"83px","height":"120px","backgroundImage":"var(--t-bottom-menu-heyf-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 0%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"919px","top":"-15px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"40px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"核与辐射",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"120px","backgroundImage":"var(--t-bottom-menu-heyf-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 0%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"919px","top":"-15px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"40px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tRectx0x17: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-yjgl-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1044px","top":"-38px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"应急管理",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-yjgl-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1044px","top":"-38px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-yjgl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x18: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-yjgl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1044px","top":"-38px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"应急管理",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-yjgl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1044px","top":"-38px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tRectx0x19: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jxzf-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1171px","top":"-34px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"精细执法",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jxzf-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1171px","top":"-34px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-jxzf-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x20: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jxzf-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1171px","top":"-34px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"精细执法",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jxzf-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1171px","top":"-34px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-jxzf-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x21: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-xfts-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1293px","top":"-28px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"信访投诉",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-xfts-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1293px","top":"-28px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-xfts-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x22: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-xfts-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1293px","top":"-28px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"信访投诉",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-xfts-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1293px","top":"-28px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tRectx0x23: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-lyxc-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1421px","top":"-25px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"绿盈乡村",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-lyxc-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1421px","top":"-25px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-lyxc-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x24: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-lyxc-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1421px","top":"-25px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"绿盈乡村",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-lyxc-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1421px","top":"-25px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tRectx0x25: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-fzfg-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1541px","top":"-19px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"法律法规",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-fzfg-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1541px","top":"-19px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-fzfg-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x26: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-fzfg-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1541px","top":"-19px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"法律法规",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-fzfg-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1541px","top":"-19px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-fzfg-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x27: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jdkb-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1667px","top":"-14px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"督察督办",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jdkb-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1667px","top":"-14px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-jdkb-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x28: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jdkb-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1667px","top":"-14px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"督察督办",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-jdkb-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1667px","top":"-14px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tRectx0x29: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-ghhp-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1792px","top":"-8px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"规划环评",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-ghhp-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1792px","top":"-8px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-ghhp-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tRectx0x30: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-ghhp-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1792px","top":"-8px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"规划环评",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-ghhp-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"1792px","top":"-8px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tTabsx0x31: {
defaultStyle: {
            default: {"width":"144px","height":"228px","left":"263px","top":"-223px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","position":"unset","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)"},
            
            },
 default: { 
 
data:[{"label":"地表水","name":"dbs"},{"label":"饮用水源地","name":"yysyd"},{"label":"水功能区","name":"sgnq"},{"label":"黑臭水体","name":"hcst"},{"label":"实时监测","name":"ssjc"},{"label":"环境专题","name":"hjzt"}],
activeTab:"work",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"228px","left":"263px","top":"-223px","bottom":"120px !important","backgroundImage":"var(--t-sub-menu-bottom-border),var(--t-sub-menu-top-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto auto","-webkit-mask-size":"","backgroundPosition":"50% 100%,50% 0%","-webkit-mask-position":"","display":"grid","alignContent":"space-between","justifyContent":"center","justifyItems":"baseline","marginTop":"0px","paddingTop":"20px","overflow":"visible","alignItems":"baseline","position":"unset","paddingBottom":"20px","backgroundColor":"var(--t-sub-menu-background)","borderTopLeftRadius":"17px","borderTopRightRadius":"17px","borderBottomLeftRadius":"17px","borderBottomRightRadius":"17px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)"}},"itemActiveBorder":{"default":{"width":"4px","height":"100%","display":"none"}},"itemWrapper":{"default":{"display":"block","height":"22px","width":"112px","backgroundColor":"rgba(23, 62, 228, 0)","marginLeft":"10px","marginTop":"9px"},"active":{"backgroundImage":"var(--t-select-dropdown-item-background)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"backgroundImage":"var(--t-select-dropdown-item-background)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}},"itemLabel":{"default":{"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","flexWrap":"wrap","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)"},"active":{"color":"var(--t-glmenu-dialog-text-active)"},"hover":{"color":"var(--t-glmenu-dialog-text-active)"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tRowx0x32: {
defaultStyle: {
            default: {"width":"1926px","height":"120px","top":"1494px","left":"0px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"1926px","height":"120px","top":"1494px","left":"0px","position":"unset"}}},
gutter:0,
justify:"space-around",
align:"middle", 
 },
},
tColx0x32x0: {
defaultStyle: {
            default: {"width":"100px","height":"300px","position":"relative"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px","position":"relative"}}}, 
 },
},
tRectx0x32x0x0: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"absolute","left":"0px","top":"20px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"概览",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"absolute","left":"0px","top":"20px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tRectx0x32x0x1: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"26px","top":"349px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"概览",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"unset","left":"26px","top":"349px","fontSize":"16px","fontWeight":"700","color":"var(--t-glmenu-color-text)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--t-bottom-menu-gl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","color":"var(--t-color-text-green-default)"}}}, 
 },
},
tColx0x32x1: {
defaultStyle: {
            default: {"width":"100px","height":"300px"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px"}}}, 
 },
},
tRectx0x32x1x0: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"absolute","left":"0px","top":"10px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"概览",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"absolute","left":"0px","top":"10px","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tColx0x32x2: {
defaultStyle: {
            default: {"width":"100px","height":"300px","position":"relative"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px","position":"relative"}}}, 
 },
},
tRectx0x32x2x0: {
defaultStyle: {
            default: {"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"absolute !important","left":"0px !important","top":"20px !important","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"概览",
active:false,
cStyle:{"wrapper":{"default":{"width":"83px","height":"123px","backgroundImage":"var(--t-bottom-menu-gl-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","position":"absolute !important","left":"0px !important","top":"20px !important","fontSize":"16px","fontWeight":"700","color":"var(--t-color-text-green-default)","marginTop":"0px","paddingTop":"100px","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","color":""}}}, 
 },
},
tColx0x32x3: {
defaultStyle: {
            default: {"width":"100px","height":"300px"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px"}}}, 
 },
},
tColx0x32x4: {
defaultStyle: {
            default: {"width":"100px","height":"300px"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px"}}}, 
 },
},
tColx0x32x5: {
defaultStyle: {
            default: {"width":"100px","height":"300px"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px"}}}, 
 },
},
tColx0x32x6: {
defaultStyle: {
            default: {"width":"100px","height":"300px"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px"}}}, 
 },
},
tColx0x32x7: {
defaultStyle: {
            default: {"width":"100px","height":"300px"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px"}}}, 
 },
},
tColx0x32x8: {
defaultStyle: {
            default: {"width":"100px","height":"300px"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px"}}}, 
 },
},
tColx0x32x9: {
defaultStyle: {
            default: {"width":"100px","height":"300px"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px"}}}, 
 },
},
tColx0x32x10: {
defaultStyle: {
            default: {"width":"100px","height":"300px"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px"}}}, 
 },
},
tColx0x32x11: {
defaultStyle: {
            default: {"width":"100px","height":"300px"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px"}}}, 
 },
},
tColx0x32x12: {
defaultStyle: {
            default: {"width":"100px","height":"300px"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px"}}}, 
 },
},
tColx0x32x13: {
defaultStyle: {
            default: {"width":"100px","height":"300px"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px"}}}, 
 },
},
tColx0x32x14: {
defaultStyle: {
            default: {"width":"100px","height":"300px"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px"}}}, 
 },
},
tColx0x32x15: {
defaultStyle: {
            default: {"width":"100px","height":"120px"},
            
            },
 default: { 
 
span:1,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"120px"}}}, 
 },
},
tImageBasex0x33: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","left":"1px","top":"402px","position":"unset"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-12/789b03ec962641bd97d9ba400874a13e.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","left":"1px","top":"402px","position":"unset"}}}, 
 },
},
});
const clickItem = (value) => {
const stateMap = {
  gl: 'glActive',
  dqhj: 'dqhjActive',
  shj: 'shjActive',
  trhj: 'trhjActive',
  hyhj: 'hyhjActive',
  gfjg: 'gfjgActive',
  zrst: 'zrstActive',
  hyfs: 'hyfsActive',
  yjgl: 'yjglActive',
  jxzf: 'jxzfActive',
  xfts: 'xftsActive',
  lyxc: 'lyxcActive',
  flfg: 'flfgActive',
  dcdb: 'dcdbActive',
  ghhp: 'ghhpActive'
};

// 重置所有状态
Object.keys(stateMap).forEach(key => {
  state[stateMap[key]] = false;
});

// 设置当前状态
if (stateMap[value]) {
  state[stateMap[value]] = true;
}
};
const onclick1739261028622 = () => {
// 执行自定义方法
clickItem("gl");
};
const onclick1739261048933 = () => {
// 执行自定义方法
clickItem("gl");
};
const onclick1739261084073 = () => {
// 执行自定义方法
clickItem("dqhj");
};
const onclick1739261099702 = () => {
// 执行自定义方法
clickItem("dqhj");
};
const onmouseenter1739255926351 = () => {
// 设置变量值
state.shjDropdownState = true;
};
const onmouseleave1739255988115 = () => {
// 设置变量值
state.shjDropdownState = false;
};
const onclick1739261419314 = () => {
// 执行自定义方法
clickItem("shj");
};
const onmouseenter1739261276226_0_0 = () => {
// 设置变量值
state.shjDropdownState = true;
};
const onmouseleave1739261276226_0_1 = () => {
// 设置变量值
state.shjDropdownState = false;
};
const onclick1739261434278 = () => {
// 执行自定义方法
clickItem("shj");
};
const onclick1739261552087 = () => {
// 执行自定义方法
clickItem("trhj");
};
const onclick1739261566403 = () => {
// 执行自定义方法
clickItem("trhj");
};
const onclick1739261663457 = () => {
// 执行自定义方法
clickItem("hyhj");
};
const onclick1739261683646_0_0 = () => {
// 执行自定义方法
clickItem("hyhj");
};
const onclick1739261819696 = () => {
// 执行自定义方法
clickItem("gfjg");
};
const onclick1739261847660_0_0 = () => {
// 执行自定义方法
clickItem("gfjg");
};
const onclick1739261999845 = () => {
// 执行自定义方法
clickItem("zrst");
};
const onclick1739262016032_0_0 = () => {
// 执行自定义方法
clickItem("zrst");
};
const onmouseenter1739259612225 = () => {
// 设置变量值
state.hyfsDropdownState = true;
};
const onmouseleave1739259627281 = () => {
// 设置变量值
state.hyfsDropdownState = false;
};
const onclick1739262533653 = () => {
// 执行自定义方法
clickItem("hyfs");
};
const onmouseenter1739262547826_0_0 = () => {
// 设置变量值
state.hyfsDropdownState = true;
};
const onmouseleave1739262547826_0_1 = () => {
// 设置变量值
state.hyfsDropdownState = false;
};
const onclick1739262547826_0_2 = () => {
// 执行自定义方法
clickItem("hyfs");
};
const onclick1739263448982 = () => {
// 执行自定义方法
clickItem("yjgl");
};
const onclick1739263462065 = () => {
// 执行自定义方法
clickItem("yjgl");
};
const onclick1739263577686 = () => {
// 执行自定义方法
clickItem("jxzf");
};
const onclick1739263586641_0_0 = () => {
// 执行自定义方法
clickItem("jxzf");
};
const onclick1739263716948 = () => {
// 执行自定义方法
clickItem("xfts");
};
const onclick1739263733129_0_0 = () => {
// 执行自定义方法
clickItem("xfts");
};
const onclick1739264874414 = () => {
// 执行自定义方法
clickItem("lyxc");
};
const onclick1739264887369_0_0 = () => {
// 执行自定义方法
clickItem("lyxc");
};
const onclick1739265027340 = () => {
// 执行自定义方法
clickItem("flfg");
};
const onclick1739265043843_0_0 = () => {
// 执行自定义方法
clickItem("flfg");
};
const onclick1739265152122 = () => {
// 执行自定义方法
clickItem("dcdb");
};
const onclick1739265167394_0_0 = () => {
// 执行自定义方法
clickItem("dcdb");
};
const onclick1739265424400 = () => {
// 执行自定义方法
clickItem("ghhp");
};
const onclick1739265445540_0_0 = () => {
// 执行自定义方法
clickItem("ghhp");
};
const onmouseleave1739256007098 = () => {
// 设置变量值
state.shjDropdownState = false;
};
const onmouseenter1739256047060 = () => {
// 设置变量值
state.shjDropdownState = true;
};
const onclick1739347638138_0_0 = () => {
// 执行自定义方法
clickItem("gl");
};
const onclick1739347645256_0_0 = () => {
// 执行自定义方法
clickItem("gl");
};
const onclick1739347643936_0_0 = () => {
// 执行自定义方法
clickItem("gl");
};
const onclick1739412482070_0_0 = () => {
// 执行自定义方法
clickItem("gl");
};
 function handleWindowResize() {
                            setPageScale('t-l-c-bottomNavigationMenu', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-bottomNavigationMenu', global.appScaleMode, 'normal');
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

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tRectx0x7ComputedData = computed(() => _.merge({}, componentState.tRectx0x7.default, componentState.tRectx0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tRectx0x10ComputedData = computed(() => _.merge({}, componentState.tRectx0x10.default, componentState.tRectx0x10?.[state.screenSize]));

 const tRectx0x11ComputedData = computed(() => _.merge({}, componentState.tRectx0x11.default, componentState.tRectx0x11?.[state.screenSize]));

 const tRectx0x12ComputedData = computed(() => _.merge({}, componentState.tRectx0x12.default, componentState.tRectx0x12?.[state.screenSize]));

 const tRectx0x13ComputedData = computed(() => _.merge({}, componentState.tRectx0x13.default, componentState.tRectx0x13?.[state.screenSize]));

 const tRectx0x14ComputedData = computed(() => _.merge({}, componentState.tRectx0x14.default, componentState.tRectx0x14?.[state.screenSize]));

 const tRectx0x15ComputedData = computed(() => _.merge({}, componentState.tRectx0x15.default, componentState.tRectx0x15?.[state.screenSize]));

 const tRectx0x16ComputedData = computed(() => _.merge({}, componentState.tRectx0x16.default, componentState.tRectx0x16?.[state.screenSize]));

 const tRectx0x17ComputedData = computed(() => _.merge({}, componentState.tRectx0x17.default, componentState.tRectx0x17?.[state.screenSize]));

 const tRectx0x18ComputedData = computed(() => _.merge({}, componentState.tRectx0x18.default, componentState.tRectx0x18?.[state.screenSize]));

 const tRectx0x19ComputedData = computed(() => _.merge({}, componentState.tRectx0x19.default, componentState.tRectx0x19?.[state.screenSize]));

 const tRectx0x20ComputedData = computed(() => _.merge({}, componentState.tRectx0x20.default, componentState.tRectx0x20?.[state.screenSize]));

 const tRectx0x21ComputedData = computed(() => _.merge({}, componentState.tRectx0x21.default, componentState.tRectx0x21?.[state.screenSize]));

 const tRectx0x22ComputedData = computed(() => _.merge({}, componentState.tRectx0x22.default, componentState.tRectx0x22?.[state.screenSize]));

 const tRectx0x23ComputedData = computed(() => _.merge({}, componentState.tRectx0x23.default, componentState.tRectx0x23?.[state.screenSize]));

 const tRectx0x24ComputedData = computed(() => _.merge({}, componentState.tRectx0x24.default, componentState.tRectx0x24?.[state.screenSize]));

 const tRectx0x25ComputedData = computed(() => _.merge({}, componentState.tRectx0x25.default, componentState.tRectx0x25?.[state.screenSize]));

 const tRectx0x26ComputedData = computed(() => _.merge({}, componentState.tRectx0x26.default, componentState.tRectx0x26?.[state.screenSize]));

 const tRectx0x27ComputedData = computed(() => _.merge({}, componentState.tRectx0x27.default, componentState.tRectx0x27?.[state.screenSize]));

 const tRectx0x28ComputedData = computed(() => _.merge({}, componentState.tRectx0x28.default, componentState.tRectx0x28?.[state.screenSize]));

 const tRectx0x29ComputedData = computed(() => _.merge({}, componentState.tRectx0x29.default, componentState.tRectx0x29?.[state.screenSize]));

 const tRectx0x30ComputedData = computed(() => _.merge({}, componentState.tRectx0x30.default, componentState.tRectx0x30?.[state.screenSize]));

 const tTabsx0x31ComputedData = computed(() => _.merge({}, componentState.tTabsx0x31.default, componentState.tTabsx0x31?.[state.screenSize]));

 const tRowx0x32ComputedData = computed(() => _.merge({}, componentState.tRowx0x32.default, componentState.tRowx0x32?.[state.screenSize]));

 const tColx0x32x0ComputedData = computed(() => _.merge({}, componentState.tColx0x32x0.default, componentState.tColx0x32x0?.[state.screenSize]));

 const tRectx0x32x0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x32x0x0.default, componentState.tRectx0x32x0x0?.[state.screenSize]));

 const tRectx0x32x0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x32x0x1.default, componentState.tRectx0x32x0x1?.[state.screenSize]));

 const tColx0x32x1ComputedData = computed(() => _.merge({}, componentState.tColx0x32x1.default, componentState.tColx0x32x1?.[state.screenSize]));

 const tRectx0x32x1x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x32x1x0.default, componentState.tRectx0x32x1x0?.[state.screenSize]));

 const tColx0x32x2ComputedData = computed(() => _.merge({}, componentState.tColx0x32x2.default, componentState.tColx0x32x2?.[state.screenSize]));

 const tRectx0x32x2x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x32x2x0.default, componentState.tRectx0x32x2x0?.[state.screenSize]));

 const tColx0x32x3ComputedData = computed(() => _.merge({}, componentState.tColx0x32x3.default, componentState.tColx0x32x3?.[state.screenSize]));

 const tColx0x32x4ComputedData = computed(() => _.merge({}, componentState.tColx0x32x4.default, componentState.tColx0x32x4?.[state.screenSize]));

 const tColx0x32x5ComputedData = computed(() => _.merge({}, componentState.tColx0x32x5.default, componentState.tColx0x32x5?.[state.screenSize]));

 const tColx0x32x6ComputedData = computed(() => _.merge({}, componentState.tColx0x32x6.default, componentState.tColx0x32x6?.[state.screenSize]));

 const tColx0x32x7ComputedData = computed(() => _.merge({}, componentState.tColx0x32x7.default, componentState.tColx0x32x7?.[state.screenSize]));

 const tColx0x32x8ComputedData = computed(() => _.merge({}, componentState.tColx0x32x8.default, componentState.tColx0x32x8?.[state.screenSize]));

 const tColx0x32x9ComputedData = computed(() => _.merge({}, componentState.tColx0x32x9.default, componentState.tColx0x32x9?.[state.screenSize]));

 const tColx0x32x10ComputedData = computed(() => _.merge({}, componentState.tColx0x32x10.default, componentState.tColx0x32x10?.[state.screenSize]));

 const tColx0x32x11ComputedData = computed(() => _.merge({}, componentState.tColx0x32x11.default, componentState.tColx0x32x11?.[state.screenSize]));

 const tColx0x32x12ComputedData = computed(() => _.merge({}, componentState.tColx0x32x12.default, componentState.tColx0x32x12?.[state.screenSize]));

 const tColx0x32x13ComputedData = computed(() => _.merge({}, componentState.tColx0x32x13.default, componentState.tColx0x32x13?.[state.screenSize]));

 const tColx0x32x14ComputedData = computed(() => _.merge({}, componentState.tColx0x32x14.default, componentState.tColx0x32x14?.[state.screenSize]));

 const tColx0x32x15ComputedData = computed(() => _.merge({}, componentState.tColx0x32x15.default, componentState.tColx0x32x15?.[state.screenSize]));

 const tImageBasex0x33ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x33.default, componentState.tImageBasex0x33?.[state.screenSize]));

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
tRectx0x6ComputedData,
tRectx0x7ComputedData,
tRectx0x8ComputedData,
tRectx0x9ComputedData,
tRectx0x10ComputedData,
tRectx0x11ComputedData,
tRectx0x12ComputedData,
tRectx0x13ComputedData,
tRectx0x14ComputedData,
tRectx0x15ComputedData,
tRectx0x16ComputedData,
tRectx0x17ComputedData,
tRectx0x18ComputedData,
tRectx0x19ComputedData,
tRectx0x20ComputedData,
tRectx0x21ComputedData,
tRectx0x22ComputedData,
tRectx0x23ComputedData,
tRectx0x24ComputedData,
tRectx0x25ComputedData,
tRectx0x26ComputedData,
tRectx0x27ComputedData,
tRectx0x28ComputedData,
tRectx0x29ComputedData,
tRectx0x30ComputedData,
tTabsx0x31ComputedData,
tRowx0x32ComputedData,
tColx0x32x0ComputedData,
tRectx0x32x0x0ComputedData,
tRectx0x32x0x1ComputedData,
tColx0x32x1ComputedData,
tRectx0x32x1x0ComputedData,
tColx0x32x2ComputedData,
tRectx0x32x2x0ComputedData,
tColx0x32x3ComputedData,
tColx0x32x4ComputedData,
tColx0x32x5ComputedData,
tColx0x32x6ComputedData,
tColx0x32x7ComputedData,
tColx0x32x8ComputedData,
tColx0x32x9ComputedData,
tColx0x32x10ComputedData,
tColx0x32x11ComputedData,
tColx0x32x12ComputedData,
tColx0x32x13ComputedData,
tColx0x32x14ComputedData,
tColx0x32x15ComputedData,
tImageBasex0x33ComputedData,
onclick1739261048933,
onclick1739261028622,
onclick1739261084073,
onclick1739261099702,
onmouseenter1739255926351,
onmouseleave1739255988115,
onclick1739261419314,
onmouseenter1739261276226_0_0,
onmouseleave1739261276226_0_1,
onclick1739261434278,
onclick1739261552087,
onclick1739261566403,
onclick1739261663457,
onclick1739261683646_0_0,
onclick1739261819696,
onclick1739261847660_0_0,
onclick1739261999845,
onclick1739262016032_0_0,
onmouseenter1739259612225,
onmouseleave1739259627281,
onclick1739262533653,
onmouseenter1739262547826_0_0,
onmouseleave1739262547826_0_1,
onclick1739262547826_0_2,
onclick1739263448982,
onclick1739263462065,
onclick1739263577686,
onclick1739263586641_0_0,
onclick1739263716948,
onclick1739263733129_0_0,
onclick1739264874414,
onclick1739264887369_0_0,
onclick1739265027340,
onclick1739265043843_0_0,
onclick1739265152122,
onclick1739265167394_0_0,
onclick1739265424400,
onclick1739265445540_0_0,
onmouseleave1739256007098,
onmouseenter1739256047060,
onclick1739347638138_0_0,
onclick1739412482070_0_0,
onclick1739347645256_0_0,
onclick1739347643936_0_0,
};
},
};