window.dataSpaceIndexComponent = {
template: 
`<div id="t-l-c-dataSpaceIndex" class="t-l-c-dataSpaceIndex" >` +
`<t-rect id="t-rect-40ed.930e22ec7" class="dataSpaceIndex-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-c2d5.77e352889" class="dataSpaceIndex-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-1c5d.3d0d86d29" class="dataSpaceIndex-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-row id="t-row-be24.7ccf5c648" class="dataSpaceIndex-t-row-0-3"  :c-style="tRowx0x3ComputedData.cStyle" :gutter="tRowx0x3ComputedData.gutter" :justify="tRowx0x3ComputedData.justify" :align="tRowx0x3ComputedData.align">` +
`<t-text id="t-text-0f14.b9e3ba52d" class="dataSpaceIndex-t-text-0-3-0"  :label="tTextx0x3x0ComputedData.label" :editable="tTextx0x3x0ComputedData.editable" :c-style="tTextx0x3x0ComputedData.cStyle">` +
`</t-text>` +
`<t-rolling-number id="t-rolling-number-8d42.bc78e4439" class="dataSpaceIndex-t-rolling-number-0-3-1"  :number="state.allData.SJCC" :prefix="tRollingNumberx0x3x1ComputedData.prefix" :suffix="tRollingNumberx0x3x1ComputedData.suffix" :animation-duration="tRollingNumberx0x3x1ComputedData.animationDuration" :c-style="tRollingNumberx0x3x1ComputedData.cStyle">` +
`</t-rolling-number>` +
`</t-row>` +
`<t-row id="t-row-3ad6.bf7101f7c" class="dataSpaceIndex-t-row-0-4"  :c-style="tRowx0x4ComputedData.cStyle" :gutter="tRowx0x4ComputedData.gutter" :justify="tRowx0x4ComputedData.justify" :align="tRowx0x4ComputedData.align">` +
`<t-text id="t-text-9f67.a651e7fd3" class="dataSpaceIndex-t-text-0-4-0"  :label="tTextx0x4x0ComputedData.label" :editable="tTextx0x4x0ComputedData.editable" :c-style="tTextx0x4x0ComputedData.cStyle">` +
`</t-text>` +
`<t-rolling-number id="t-rolling-number-6378.cd8d930ca" class="dataSpaceIndex-t-rolling-number-0-4-1"  :number="state.allData.SJZY" :prefix="tRollingNumberx0x4x1ComputedData.prefix" :suffix="tRollingNumberx0x4x1ComputedData.suffix" :animation-duration="tRollingNumberx0x4x1ComputedData.animationDuration" :c-style="tRollingNumberx0x4x1ComputedData.cStyle">` +
`</t-rolling-number>` +
`</t-row>` +
`<t-row id="t-row-c21b.867c09276" class="dataSpaceIndex-t-row-0-5"  :c-style="tRowx0x5ComputedData.cStyle" :gutter="tRowx0x5ComputedData.gutter" :justify="tRowx0x5ComputedData.justify" :align="tRowx0x5ComputedData.align">` +
`<t-text id="t-text-9e55.627e6cf21" class="dataSpaceIndex-t-text-0-5-0"  :label="tTextx0x5x0ComputedData.label" :editable="tTextx0x5x0ComputedData.editable" :c-style="tTextx0x5x0ComputedData.cStyle">` +
`</t-text>` +
`<t-rolling-number id="t-rolling-number-74b9.0c51ef8ca" class="dataSpaceIndex-t-rolling-number-0-5-1"  :number="state.allData.SJB" :prefix="tRollingNumberx0x5x1ComputedData.prefix" :suffix="tRollingNumberx0x5x1ComputedData.suffix" :animation-duration="tRollingNumberx0x5x1ComputedData.animationDuration" :c-style="tRollingNumberx0x5x1ComputedData.cStyle" :min-length="tRollingNumberx0x5x1ComputedData.minLength">` +
`</t-rolling-number>` +
`</t-row>` +
`<t-row id="t-row-b772.94bb3d1ff" class="dataSpaceIndex-t-row-0-6"  :c-style="tRowx0x6ComputedData.cStyle" :gutter="tRowx0x6ComputedData.gutter" :justify="tRowx0x6ComputedData.justify" :align="tRowx0x6ComputedData.align">` +
`<t-rolling-number id="t-rolling-number-231a.b80a9caa3" class="dataSpaceIndex-t-rolling-number-0-6-0"  :number="state.allData.SJZL" :prefix="tRollingNumberx0x6x0ComputedData.prefix" :suffix="tRollingNumberx0x6x0ComputedData.suffix" :animation-duration="tRollingNumberx0x6x0ComputedData.animationDuration" :c-style="tRollingNumberx0x6x0ComputedData.cStyle">` +
`</t-rolling-number>` +
`</t-row>` +
`<t-text id="t-text-9126.6aa5db27" class="dataSpaceIndex-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-2069.93365b05d" class="dataSpaceIndex-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-9054.6850c6a64" class="dataSpaceIndex-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle">` +
`</t-rect>` +
`<t-rolling-number id="t-rolling-number-f6de.e88dc697a" class="dataSpaceIndex-t-rolling-number-0-10"  :number="state.allData.DATA_DAY_ADD" :prefix="tRollingNumberx0x10ComputedData.prefix" :suffix="tRollingNumberx0x10ComputedData.suffix" :animation-duration="tRollingNumberx0x10ComputedData.animationDuration" :c-style="tRollingNumberx0x10ComputedData.cStyle">` +
`</t-rolling-number>` +
`<t-component id="t-component-34e9.6d572e88e" class="dataSpaceIndex-t-component-0-11"  :name="tComponentx0x11ComputedData.name" :c-style="tComponentx0x11ComputedData.cStyle" :src="tComponentx0x11ComputedData.src" :component-name="tComponentx0x11ComputedData.componentName">` +
`</t-component>` +
`<t-component id="t-component-db97.d5c39ace9" class="dataSpaceIndex-t-component-0-12"  :name="tComponentx0x12ComputedData.name" :c-style="tComponentx0x12ComputedData.cStyle" :src="tComponentx0x12ComputedData.src" :component-name="tComponentx0x12ComputedData.componentName">` +
`</t-component>` +
`<t-rect id="t-rect-2103.143a5ed95" class="dataSpaceIndex-t-rect-0-13"  :tip="tRectx0x13ComputedData.tip" :label="tRectx0x13ComputedData.label" :active="tRectx0x13ComputedData.active" :c-style="tRectx0x13ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-369c.2563e512a" class="dataSpaceIndex-t-rect-0-14"  :tip="tRectx0x14ComputedData.tip" :label="tRectx0x14ComputedData.label" :active="tRectx0x14ComputedData.active" :c-style="tRectx0x14ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-07fc.032ee6409" class="dataSpaceIndex-t-rect-0-15"  :tip="tRectx0x15ComputedData.tip" :label="tRectx0x15ComputedData.label" :active="tRectx0x15ComputedData.active" :c-style="tRectx0x15ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-93f2.6b09e7df8" class="dataSpaceIndex-t-rect-0-16"  :tip="tRectx0x16ComputedData.tip" :label="tRectx0x16ComputedData.label" :active="tRectx0x16ComputedData.active" :c-style="tRectx0x16ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-5890.d78e52dc3" class="dataSpaceIndex-t-rect-0-17"  :tip="tRectx0x17ComputedData.tip" :label="tRectx0x17ComputedData.label" :active="tRectx0x17ComputedData.active" :c-style="tRectx0x17ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-7834.91d13e616" class="dataSpaceIndex-t-rect-0-18"  :tip="tRectx0x18ComputedData.tip" :label="tRectx0x18ComputedData.label" :active="tRectx0x18ComputedData.active" :c-style="tRectx0x18ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-e8a3.2326ff978" class="dataSpaceIndex-t-rect-0-19"  :tip="tRectx0x19ComputedData.tip" :label="tRectx0x19ComputedData.label" :active="tRectx0x19ComputedData.active" :c-style="tRectx0x19ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-6147.fcf72c42d" class="dataSpaceIndex-t-rect-0-20"  :tip="tRectx0x20ComputedData.tip" :label="tRectx0x20ComputedData.label" :active="tRectx0x20ComputedData.active" :c-style="tRectx0x20ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-8ad9.02f250b1b" class="dataSpaceIndex-t-rect-0-21"  :tip="tRectx0x21ComputedData.tip" :label="tRectx0x21ComputedData.label" :active="tRectx0x21ComputedData.active" :c-style="tRectx0x21ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-4688.1c0366092" class="dataSpaceIndex-t-rect-0-22"  :tip="tRectx0x22ComputedData.tip" :label="tRectx0x22ComputedData.label" :active="tRectx0x22ComputedData.active" :c-style="tRectx0x22ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-1ccd.ecafb247d" class="dataSpaceIndex-t-rect-0-23"  :tip="tRectx0x23ComputedData.tip" :label="tRectx0x23ComputedData.label" :active="tRectx0x23ComputedData.active" :c-style="tRectx0x23ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-6794.1b7c4f609" class="dataSpaceIndex-t-rect-0-24"  :tip="tRectx0x24ComputedData.tip" :label="tRectx0x24ComputedData.label" :active="tRectx0x24ComputedData.active" :c-style="tRectx0x24ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-ebf8.c44187638" class="dataSpaceIndex-t-rect-0-25"  :tip="tRectx0x25ComputedData.tip" :label="tRectx0x25ComputedData.label" :active="tRectx0x25ComputedData.active" :c-style="tRectx0x25ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-2a94.99154bd13" class="dataSpaceIndex-t-rect-0-26"  :tip="tRectx0x26ComputedData.tip" :label="tRectx0x26ComputedData.label" :active="tRectx0x26ComputedData.active" :c-style="tRectx0x26ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-3c76.e6dd60693" class="dataSpaceIndex-t-rect-0-27"  :tip="tRectx0x27ComputedData.tip" :label="tRectx0x27ComputedData.label" :active="tRectx0x27ComputedData.active" :c-style="tRectx0x27ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-d0d9.a43e6557d" class="dataSpaceIndex-t-rect-0-28"  :tip="tRectx0x28ComputedData.tip" :label="tRectx0x28ComputedData.label" :active="tRectx0x28ComputedData.active" :c-style="tRectx0x28ComputedData.cStyle">` +
`</t-rect>` +
`<t-circle id="t-circle-6b06.745979071" class="dataSpaceIndex-t-circle-0-29"  :tip="tCirclex0x29ComputedData.tip" :label="tCirclex0x29ComputedData.label" :active="tCirclex0x29ComputedData.active" :c-style="tCirclex0x29ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-c607.421523d31" class="dataSpaceIndex-t-circle-0-30"  :tip="tCirclex0x30ComputedData.tip" :label="tCirclex0x30ComputedData.label" :active="tCirclex0x30ComputedData.active" :c-style="tCirclex0x30ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-f814.4e7073b2e" class="dataSpaceIndex-t-circle-0-31"  :tip="tCirclex0x31ComputedData.tip" :label="tCirclex0x31ComputedData.label" :active="tCirclex0x31ComputedData.active" :c-style="tCirclex0x31ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-f20f.b9afbc628" class="dataSpaceIndex-t-circle-0-32"  :tip="tCirclex0x32ComputedData.tip" :label="tCirclex0x32ComputedData.label" :active="tCirclex0x32ComputedData.active" :c-style="tCirclex0x32ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-3b02.459340cba" class="dataSpaceIndex-t-circle-0-33"  :tip="tCirclex0x33ComputedData.tip" :label="tCirclex0x33ComputedData.label" :active="tCirclex0x33ComputedData.active" :c-style="tCirclex0x33ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-e643.d01acb631" class="dataSpaceIndex-t-circle-0-34"  :tip="tCirclex0x34ComputedData.tip" :label="tCirclex0x34ComputedData.label" :active="tCirclex0x34ComputedData.active" :c-style="tCirclex0x34ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-e827.e18b7cf42" class="dataSpaceIndex-t-circle-0-35"  :tip="tCirclex0x35ComputedData.tip" :label="tCirclex0x35ComputedData.label" :active="tCirclex0x35ComputedData.active" :c-style="tCirclex0x35ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-510f.c6c8fd95b" class="dataSpaceIndex-t-circle-0-36"  :tip="tCirclex0x36ComputedData.tip" :label="tCirclex0x36ComputedData.label" :active="tCirclex0x36ComputedData.active" :c-style="tCirclex0x36ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-8a91.76f6b1f82" class="dataSpaceIndex-t-circle-0-37"  :tip="tCirclex0x37ComputedData.tip" :label="tCirclex0x37ComputedData.label" :active="tCirclex0x37ComputedData.active" :c-style="tCirclex0x37ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-8a90.f5803002e" class="dataSpaceIndex-t-circle-0-38"  :tip="tCirclex0x38ComputedData.tip" :label="tCirclex0x38ComputedData.label" :active="tCirclex0x38ComputedData.active" :c-style="tCirclex0x38ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-fc99.08280de4f" class="dataSpaceIndex-t-circle-0-39"  :tip="tCirclex0x39ComputedData.tip" :label="tCirclex0x39ComputedData.label" :active="tCirclex0x39ComputedData.active" :c-style="tCirclex0x39ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-90ed.34ac3d6af" class="dataSpaceIndex-t-circle-0-40"  :tip="tCirclex0x40ComputedData.tip" :label="tCirclex0x40ComputedData.label" :active="tCirclex0x40ComputedData.active" :c-style="tCirclex0x40ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-8b59.f0ae1d56" class="dataSpaceIndex-t-circle-0-41"  :tip="tCirclex0x41ComputedData.tip" :label="tCirclex0x41ComputedData.label" :active="tCirclex0x41ComputedData.active" :c-style="tCirclex0x41ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-03de.3d3e29ebc" class="dataSpaceIndex-t-circle-0-42"  :tip="tCirclex0x42ComputedData.tip" :label="tCirclex0x42ComputedData.label" :active="tCirclex0x42ComputedData.active" :c-style="tCirclex0x42ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-769d.fdfef4b75" class="dataSpaceIndex-t-circle-0-43"  :tip="tCirclex0x43ComputedData.tip" :label="tCirclex0x43ComputedData.label" :active="tCirclex0x43ComputedData.active" :c-style="tCirclex0x43ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-6f31.de7f66af3" class="dataSpaceIndex-t-circle-0-44"  :tip="tCirclex0x44ComputedData.tip" :label="tCirclex0x44ComputedData.label" :active="tCirclex0x44ComputedData.active" :c-style="tCirclex0x44ComputedData.cStyle">` +
`</t-circle>` +
`<t-rect id="t-rect-da3c.e783c2437" class="dataSpaceIndex-t-rect-0-45"  :tip="tRectx0x45ComputedData.tip" :label="tRectx0x45ComputedData.label" :active="tRectx0x45ComputedData.active" :c-style="tRectx0x45ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-6073.60696b501" class="dataSpaceIndex-t-rect-0-46"  :tip="tRectx0x46ComputedData.tip" :label="tRectx0x46ComputedData.label" :active="tRectx0x46ComputedData.active" :c-style="tRectx0x46ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-16da.cf759bcc7" class="dataSpaceIndex-t-rect-0-47"  :tip="tRectx0x47ComputedData.tip" :label="tRectx0x47ComputedData.label" :active="tRectx0x47ComputedData.active" :c-style="tRectx0x47ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-e4be.766ce438f" class="dataSpaceIndex-t-rect-0-48"  :tip="tRectx0x48ComputedData.tip" :label="tRectx0x48ComputedData.label" :active="tRectx0x48ComputedData.active" :c-style="tRectx0x48ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-943c.325e2eee8" class="dataSpaceIndex-t-rect-0-49"  :tip="tRectx0x49ComputedData.tip" :label="tRectx0x49ComputedData.label" :active="tRectx0x49ComputedData.active" :c-style="tRectx0x49ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-f4d6.bfd772f72" class="dataSpaceIndex-t-rect-0-50"  :tip="tRectx0x50ComputedData.tip" :label="tRectx0x50ComputedData.label" :active="tRectx0x50ComputedData.active" :c-style="tRectx0x50ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-8bef.5c394fa36" class="dataSpaceIndex-t-rect-0-51"  :tip="tRectx0x51ComputedData.tip" :label="tRectx0x51ComputedData.label" :active="tRectx0x51ComputedData.active" :c-style="tRectx0x51ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-8382.a464eabb6" class="dataSpaceIndex-t-rect-0-52"  :tip="tRectx0x52ComputedData.tip" :label="tRectx0x52ComputedData.label" :active="tRectx0x52ComputedData.active" :c-style="tRectx0x52ComputedData.cStyle">` +
`</t-rect>` +
`<t-circle id="t-circle-40d6.c4174d763" class="dataSpaceIndex-t-circle-0-53"  :tip="tCirclex0x53ComputedData.tip" :label="tCirclex0x53ComputedData.label" :active="tCirclex0x53ComputedData.active" :c-style="tCirclex0x53ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-f7fb.aa93bd048" class="dataSpaceIndex-t-circle-0-54"  :tip="tCirclex0x54ComputedData.tip" :label="tCirclex0x54ComputedData.label" :active="tCirclex0x54ComputedData.active" :c-style="tCirclex0x54ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-d1db.652f1ffc1" class="dataSpaceIndex-t-circle-0-55"  :tip="tCirclex0x55ComputedData.tip" :label="tCirclex0x55ComputedData.label" :active="tCirclex0x55ComputedData.active" :c-style="tCirclex0x55ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-70d3.3fac985af" class="dataSpaceIndex-t-circle-0-56"  :tip="tCirclex0x56ComputedData.tip" :label="tCirclex0x56ComputedData.label" :active="tCirclex0x56ComputedData.active" :c-style="tCirclex0x56ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-c077.e2c872d57" class="dataSpaceIndex-t-circle-0-57"  :tip="tCirclex0x57ComputedData.tip" :label="tCirclex0x57ComputedData.label" :active="tCirclex0x57ComputedData.active" :c-style="tCirclex0x57ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-e580.741bce921" class="dataSpaceIndex-t-circle-0-58"  :tip="tCirclex0x58ComputedData.tip" :label="tCirclex0x58ComputedData.label" :active="tCirclex0x58ComputedData.active" :c-style="tCirclex0x58ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-3ee3.5ca9b21c8" class="dataSpaceIndex-t-circle-0-59"  :tip="tCirclex0x59ComputedData.tip" :label="tCirclex0x59ComputedData.label" :active="tCirclex0x59ComputedData.active" :c-style="tCirclex0x59ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-4b52.ac2c2cb35" class="dataSpaceIndex-t-circle-0-60"  :tip="tCirclex0x60ComputedData.tip" :label="tCirclex0x60ComputedData.label" :active="tCirclex0x60ComputedData.active" :c-style="tCirclex0x60ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-ffea.56fe4a041" class="dataSpaceIndex-t-circle-0-61"  :tip="tCirclex0x61ComputedData.tip" :label="tCirclex0x61ComputedData.label" :active="tCirclex0x61ComputedData.active" :c-style="tCirclex0x61ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-c61c.c18a3be8c" class="dataSpaceIndex-t-circle-0-62"  :tip="tCirclex0x62ComputedData.tip" :label="tCirclex0x62ComputedData.label" :active="tCirclex0x62ComputedData.active" :c-style="tCirclex0x62ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-3481.28bd9b7cc" class="dataSpaceIndex-t-circle-0-63"  :tip="tCirclex0x63ComputedData.tip" :label="tCirclex0x63ComputedData.label" :active="tCirclex0x63ComputedData.active" :c-style="tCirclex0x63ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-832c.4d6296088" class="dataSpaceIndex-t-circle-0-64"  :tip="tCirclex0x64ComputedData.tip" :label="tCirclex0x64ComputedData.label" :active="tCirclex0x64ComputedData.active" :c-style="tCirclex0x64ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-a4b5.b1a91ba13" class="dataSpaceIndex-t-circle-0-65"  :tip="tCirclex0x65ComputedData.tip" :label="tCirclex0x65ComputedData.label" :active="tCirclex0x65ComputedData.active" :c-style="tCirclex0x65ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-b7eb.686f48e94" class="dataSpaceIndex-t-circle-0-66"  :tip="tCirclex0x66ComputedData.tip" :label="tCirclex0x66ComputedData.label" :active="tCirclex0x66ComputedData.active" :c-style="tCirclex0x66ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-68a2.3be47a041" class="dataSpaceIndex-t-circle-0-67"  :tip="tCirclex0x67ComputedData.tip" :label="tCirclex0x67ComputedData.label" :active="tCirclex0x67ComputedData.active" :c-style="tCirclex0x67ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-c7ed.31abcd4b6" class="dataSpaceIndex-t-circle-0-68"  :tip="tCirclex0x68ComputedData.tip" :label="tCirclex0x68ComputedData.label" :active="tCirclex0x68ComputedData.active" :c-style="tCirclex0x68ComputedData.cStyle">` +
`</t-circle>` +
`<t-rect id="t-rect-3278.bb9f7c3ff" class="dataSpaceIndex-t-rect-0-69"  :tip="tRectx0x69ComputedData.tip" :label="tRectx0x69ComputedData.label" :active="tRectx0x69ComputedData.active" :c-style="tRectx0x69ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-4aae.317a27fa4" class="dataSpaceIndex-t-rect-0-70"  :tip="tRectx0x70ComputedData.tip" :label="tRectx0x70ComputedData.label" :active="tRectx0x70ComputedData.active" :c-style="tRectx0x70ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-8b82.1d7195c2f" class="dataSpaceIndex-t-rect-0-71"  :tip="tRectx0x71ComputedData.tip" :label="tRectx0x71ComputedData.label" :active="tRectx0x71ComputedData.active" :c-style="tRectx0x71ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-ae9e.b0a3b3d2" class="dataSpaceIndex-t-rect-0-72"  :tip="tRectx0x72ComputedData.tip" :label="tRectx0x72ComputedData.label" :active="tRectx0x72ComputedData.active" :c-style="tRectx0x72ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-3635.25918b039" class="dataSpaceIndex-t-rect-0-73"  :tip="tRectx0x73ComputedData.tip" :label="tRectx0x73ComputedData.label" :active="tRectx0x73ComputedData.active" :c-style="tRectx0x73ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-2a74.bf5a8342c" class="dataSpaceIndex-t-rect-0-74"  :tip="tRectx0x74ComputedData.tip" :label="tRectx0x74ComputedData.label" :active="tRectx0x74ComputedData.active" :c-style="tRectx0x74ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-7bdf.81a04e832" class="dataSpaceIndex-t-rect-0-75"  :tip="tRectx0x75ComputedData.tip" :label="tRectx0x75ComputedData.label" :active="tRectx0x75ComputedData.active" :c-style="tRectx0x75ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-e129.78c01040b" class="dataSpaceIndex-t-rect-0-76"  :tip="tRectx0x76ComputedData.tip" :label="tRectx0x76ComputedData.label" :active="tRectx0x76ComputedData.active" :c-style="tRectx0x76ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-49a6.00bb33e63" class="dataSpaceIndex-t-rect-0-77"  :tip="tRectx0x77ComputedData.tip" :label="tRectx0x77ComputedData.label" :active="tRectx0x77ComputedData.active" :c-style="tRectx0x77ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-a033.52a6ee23a" class="dataSpaceIndex-t-rect-0-78"  :tip="tRectx0x78ComputedData.tip" :label="tRectx0x78ComputedData.label" :active="tRectx0x78ComputedData.active" :c-style="tRectx0x78ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-202f.15ed9154b" class="dataSpaceIndex-t-rect-0-79"  :tip="tRectx0x79ComputedData.tip" :label="tRectx0x79ComputedData.label" :active="tRectx0x79ComputedData.active" :c-style="tRectx0x79ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-6a73.34a5ea3dd" class="dataSpaceIndex-t-rect-0-80"  :tip="tRectx0x80ComputedData.tip" :label="tRectx0x80ComputedData.label" :active="tRectx0x80ComputedData.active" :c-style="tRectx0x80ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-8886.011c9ebeb" class="dataSpaceIndex-t-rect-0-81"  :tip="tRectx0x81ComputedData.tip" :label="tRectx0x81ComputedData.label" :active="tRectx0x81ComputedData.active" :c-style="tRectx0x81ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-2cc6.c92343ebe" class="dataSpaceIndex-t-rect-0-82"  :tip="tRectx0x82ComputedData.tip" :label="tRectx0x82ComputedData.label" :active="tRectx0x82ComputedData.active" :c-style="tRectx0x82ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-bfe7.2bd738c2d" class="dataSpaceIndex-t-rect-0-83"  :tip="tRectx0x83ComputedData.tip" :label="tRectx0x83ComputedData.label" :active="tRectx0x83ComputedData.active" :c-style="tRectx0x83ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-01d5.53af398ac" class="dataSpaceIndex-t-rect-0-84"  :tip="tRectx0x84ComputedData.tip" :label="tRectx0x84ComputedData.label" :active="tRectx0x84ComputedData.active" :c-style="tRectx0x84ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-4e2b.f03394db3" class="dataSpaceIndex-t-rect-0-85"  :tip="tRectx0x85ComputedData.tip" :label="tRectx0x85ComputedData.label" :active="tRectx0x85ComputedData.active" :c-style="tRectx0x85ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-da34.a82d76f47" class="dataSpaceIndex-t-rect-0-86"  :tip="tRectx0x86ComputedData.tip" :label="tRectx0x86ComputedData.label" :active="tRectx0x86ComputedData.active" :c-style="tRectx0x86ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-e011.a417b8128" class="dataSpaceIndex-t-rect-0-87"  :tip="tRectx0x87ComputedData.tip" :label="tRectx0x87ComputedData.label" :active="tRectx0x87ComputedData.active" :c-style="tRectx0x87ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-9baa.7eb7d5d56" class="dataSpaceIndex-t-rect-0-88"  :tip="tRectx0x88ComputedData.tip" :label="tRectx0x88ComputedData.label" :active="tRectx0x88ComputedData.active" :c-style="tRectx0x88ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-98e4.8cb8ae74" class="dataSpaceIndex-t-rect-0-89"  :tip="tRectx0x89ComputedData.tip" :label="tRectx0x89ComputedData.label" :active="tRectx0x89ComputedData.active" :c-style="tRectx0x89ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-010e.7c97c432c" class="dataSpaceIndex-t-rect-0-90"  :tip="tRectx0x90ComputedData.tip" :label="tRectx0x90ComputedData.label" :active="tRectx0x90ComputedData.active" :c-style="tRectx0x90ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-4e10.f13c2ab61" class="dataSpaceIndex-t-rect-0-91"  :tip="tRectx0x91ComputedData.tip" :label="tRectx0x91ComputedData.label" :active="tRectx0x91ComputedData.active" :c-style="tRectx0x91ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-1fe3.74241e621" class="dataSpaceIndex-t-rect-0-92"  :tip="tRectx0x92ComputedData.tip" :label="tRectx0x92ComputedData.label" :active="tRectx0x92ComputedData.active" :c-style="tRectx0x92ComputedData.cStyle">` +
`</t-rect>` +
`<t-rolling-number id="t-rolling-number-cdd3.ebaae72b8" class="dataSpaceIndex-t-rolling-number-0-93"  :number="state.allData.SJHJ_HJBQ" :prefix="tRollingNumberx0x93ComputedData.prefix" :suffix="tRollingNumberx0x93ComputedData.suffix" :animation-duration="tRollingNumberx0x93ComputedData.animationDuration" :c-style="tRollingNumberx0x93ComputedData.cStyle">` +
`</t-rolling-number>` +
`<t-rolling-number id="t-rolling-number-bc72.8147bff44" class="dataSpaceIndex-t-rolling-number-0-94"  :number="state.allData.SJHJ_GGDM" :prefix="tRollingNumberx0x94ComputedData.prefix" :suffix="tRollingNumberx0x94ComputedData.suffix" :animation-duration="tRollingNumberx0x94ComputedData.animationDuration" :c-style="tRollingNumberx0x94ComputedData.cStyle">` +
`</t-rolling-number>` +
`<t-rolling-number id="t-rolling-number-6107.27ea98777" class="dataSpaceIndex-t-rolling-number-0-95"  :number="state.allData.SJHJ_KJZY" :prefix="tRollingNumberx0x95ComputedData.prefix" :suffix="tRollingNumberx0x95ComputedData.suffix" :animation-duration="tRollingNumberx0x95ComputedData.animationDuration" :c-style="tRollingNumberx0x95ComputedData.cStyle">` +
`</t-rolling-number>` +
`<t-rolling-number id="t-rolling-number-745e.05b086824" class="dataSpaceIndex-t-rolling-number-0-96"  :number="state.allData.SJHJ_RULE" :prefix="tRollingNumberx0x96ComputedData.prefix" :suffix="tRollingNumberx0x96ComputedData.suffix" :animation-duration="tRollingNumberx0x96ComputedData.animationDuration" :c-style="tRollingNumberx0x96ComputedData.cStyle">` +
`</t-rolling-number>` +
`<t-rolling-number id="t-rolling-number-5e14.bbe552ee9" class="dataSpaceIndex-t-rolling-number-0-97"  :number="state.allData.SJHJ_DW_HJYWZT" :prefix="tRollingNumberx0x97ComputedData.prefix" :suffix="tRollingNumberx0x97ComputedData.suffix" :animation-duration="tRollingNumberx0x97ComputedData.animationDuration" :c-style="tRollingNumberx0x97ComputedData.cStyle">` +
`</t-rolling-number>` +
`<t-rolling-number id="t-rolling-number-bcfb.fae0bbeaa" class="dataSpaceIndex-t-rolling-number-0-98"  :number="state.allData.SJHJ_HJZB" :prefix="tRollingNumberx0x98ComputedData.prefix" :suffix="tRollingNumberx0x98ComputedData.suffix" :animation-duration="tRollingNumberx0x98ComputedData.animationDuration" :c-style="tRollingNumberx0x98ComputedData.cStyle">` +
`</t-rolling-number>` +
`<t-rolling-number id="t-rolling-number-6615.ccf69cd72" class="dataSpaceIndex-t-rolling-number-0-99"  :number="state.allData.SJHJ_HJGLDX" :prefix="tRollingNumberx0x99ComputedData.prefix" :suffix="tRollingNumberx0x99ComputedData.suffix" :animation-duration="tRollingNumberx0x99ComputedData.animationDuration" :c-style="tRollingNumberx0x99ComputedData.cStyle">` +
`</t-rolling-number>` +
`<t-rolling-number id="t-rolling-number-7c1f.b4064ffc8" class="dataSpaceIndex-t-rolling-number-0-100"  :number="state.allData.SJHJ_HJYWZT" :prefix="tRollingNumberx0x100ComputedData.prefix" :suffix="tRollingNumberx0x100ComputedData.suffix" :animation-duration="tRollingNumberx0x100ComputedData.animationDuration" :c-style="tRollingNumberx0x100ComputedData.cStyle">` +
`</t-rolling-number>` +
`<t-text id="t-text-eede.5152f7a42" class="dataSpaceIndex-t-text-0-101"  :label="tTextx0x101ComputedData.label" :editable="tTextx0x101ComputedData.editable" :c-style="tTextx0x101ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-b3c2.fcd333156" class="dataSpaceIndex-t-text-0-102"  :label="tTextx0x102ComputedData.label" :editable="tTextx0x102ComputedData.editable" :c-style="tTextx0x102ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-dc67.82d1de6d6" class="dataSpaceIndex-t-text-0-103"  :label="tTextx0x103ComputedData.label" :editable="tTextx0x103ComputedData.editable" :c-style="tTextx0x103ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-5d40.239d97ece" class="dataSpaceIndex-t-text-0-104"  :label="tTextx0x104ComputedData.label" :editable="tTextx0x104ComputedData.editable" :c-style="tTextx0x104ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-0c12.31ecdfaf1" class="dataSpaceIndex-t-text-0-105"  :label="tTextx0x105ComputedData.label" :editable="tTextx0x105ComputedData.editable" :c-style="tTextx0x105ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-48ae.595a75ee4" class="dataSpaceIndex-t-text-0-106"  :label="tTextx0x106ComputedData.label" :editable="tTextx0x106ComputedData.editable" :c-style="tTextx0x106ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-c1b9.0d1e22874" class="dataSpaceIndex-t-text-0-107"  :label="tTextx0x107ComputedData.label" :editable="tTextx0x107ComputedData.editable" :c-style="tTextx0x107ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-b47d.4412f1287" class="dataSpaceIndex-t-text-0-108"  :label="tTextx0x108ComputedData.label" :editable="tTextx0x108ComputedData.editable" :c-style="tTextx0x108ComputedData.cStyle">` +
`</t-text>` +
`<t-line id="t-line-8a5b.499568ac6" class="dataSpaceIndex-t-line-0-109"  :c-style="tLinex0x109ComputedData.cStyle">` +
`</t-line>` +
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
   allData: {"SJZL":0,"SJCC":0,"SJZY":0,"SJB":0,"SJHJ_HJGLDX":0,"SJHJ_HJYWZT":0,"SJHJ_HJBQ":0,"SJHJ_HJZB":0,"SJHJ_DW_HJYWZT":0,"SJHJ_GGDM":0,"SJHJ_RULE":0,"SJHJ_KJZY":0,"DATA_DAY_ADD":0},
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
            default: {"width":"829px","height":"166px","position":"unset","left":"50px","top":"64px","backgroundImage":"var(--t-content-head-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"829px","height":"166px","position":"unset","left":"50px","top":"64px","backgroundImage":"var(--t-content-head-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"432px","height":"32px","position":"unset","left":"237.5px","top":"5px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-data-text-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"432px 32px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"432px","height":"32px","position":"unset","left":"237.5px","top":"5px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-data-text-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"432px 32px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"111px","height":"32px","color":"#fff","position":"unset","left":"398.5px","top":"0px","fontSize":"30px","lineHeight":"32px","fontFamily":"优设标题黑","animationName":""},
            
            },
 default: { 
 
label:"数据融合",
editable:false,
cStyle:{"wrapper":{"default":{"width":"111px","height":"32px","color":"#fff","position":"unset","left":"398.5px","top":"0px","fontSize":"30px","lineHeight":"32px","fontFamily":"优设标题黑","animationName":""}}}, 
 },
},
tRowx0x3: {
defaultStyle: {
            default: {"width":"210px","height":"35px","position":"unset","left":"120px","top":"153px","letterSpacing":"0px","animationName":"","fontWeight":"600","display":"flex","paddingLeft":"0px","paddingRight":"10px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderTopLeftRadius":"20px","borderTopRightRadius":"20px","borderBottomLeftRadius":"20px","borderBottomRightRadius":"20px","alignItems":"center","backgroundColor":"var(--t-select-fill-bg)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"210px","height":"35px","position":"unset","left":"120px","top":"153px","letterSpacing":"0px","animationName":"","fontWeight":"600","display":"flex","paddingLeft":"0px","paddingRight":"10px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderTopLeftRadius":"20px","borderTopRightRadius":"20px","borderBottomLeftRadius":"20px","borderBottomRightRadius":"20px","alignItems":"center","backgroundColor":"var(--t-select-fill-bg)"}}},
gutter:0,
justify:"center",
align:"middle", 
 },
},
tTextx0x3x0: {
defaultStyle: {
            default: {"width":"auto","height":"18px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"500","animationName":"","left":"-228px","top":"611px","marginRight":"16px","position":"unset","fontSize":"16px","letterSpacing":"1px","textAlign":"left","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
label:"数据存储",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"18px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"500","animationName":"","left":"-228px","top":"611px","marginRight":"16px","position":"unset","fontSize":"16px","letterSpacing":"1px","textAlign":"left","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tRollingNumberx0x3x1: {
defaultStyle: {
            default: {"overflow":"hidden","width":"auto","height":"30px","position":"unset","left":"-383px","top":"427px","animationName":"","fontFamily":"优设标题黑","textAlign":"center","display":"flex","marginLeft":"0px","marginRight":"0px","justifyContent":"space-between","paddingRight":"0px","paddingLeft":"0px","alignItems":"flex-end"},
            
            },
 default: { 
 
number:0,
prefix:"",
suffix:"TB",
animationDuration:2,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"auto","height":"30px","position":"unset","left":"-383px","top":"427px","animationName":"","fontFamily":"优设标题黑","textAlign":"center","display":"flex","marginLeft":"0px","marginRight":"0px","justifyContent":"space-between","paddingRight":"0px","paddingLeft":"0px","alignItems":"flex-end"}},"separator":{"default":{"height":"29px","fontFamily":"DIN-bold","color":"rgba(255, 255, 255, 1)","fontSize":"24px","width":"auto"}},"number":{"default":{"width":"8px","height":"29px","margin":"0 6px","borderRadius":"6px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","opacity":"100% !important","color":"rgba(255, 255, 255, 1)","backgroundColor":"rgba(23, 62, 228, 0)","fontFamily":"DIN-bold","fontSize":"24px","textAlign":"right","lineHeight":"34px","fontWeight":"600","paddingLeft":"0px","marginLeft":"0px","right":"0","position":"static"}},"suffix":{"default":{"fontSize":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","marginLeft":"0px","display":"flex","lineHeight":"22px","flexDirection":"row","alignItems":"center","justifyContent":"center","flexWrap":"nowrap","fontWeight":"400","height":"26px"}},"prefix":{"default":{"fontSize":"16px","fontFamily":"微软雅黑","color":"#C5EEEA","marginRight":"0px","display":"flex"}}}, 
 },
},
tRowx0x4: {
defaultStyle: {
            default: {"width":"210px","height":"35px","position":"unset","left":"360px","top":"153px","letterSpacing":"0px","animationName":"","fontWeight":"600","display":"flex","paddingLeft":"12px","paddingRight":"12px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderTopLeftRadius":"20px","borderTopRightRadius":"20px","borderBottomLeftRadius":"20px","borderBottomRightRadius":"20px","alignItems":"center","backgroundColor":"var(--t-select-fill-bg)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"210px","height":"35px","position":"unset","left":"360px","top":"153px","letterSpacing":"0px","animationName":"","fontWeight":"600","display":"flex","paddingLeft":"12px","paddingRight":"12px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderTopLeftRadius":"20px","borderTopRightRadius":"20px","borderBottomLeftRadius":"20px","borderBottomRightRadius":"20px","alignItems":"center","backgroundColor":"var(--t-select-fill-bg)"}}},
gutter:0,
justify:"center",
align:"middle", 
 },
},
tTextx0x4x0: {
defaultStyle: {
            default: {"width":"auto","height":"18px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"500","animationName":"","left":"-38px","top":"619px","marginRight":"16px","position":"unset","fontSize":"16px","letterSpacing":"1px","textAlign":"left","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
label:"数据目录",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"18px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"500","animationName":"","left":"-38px","top":"619px","marginRight":"16px","position":"unset","fontSize":"16px","letterSpacing":"1px","textAlign":"left","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tRollingNumberx0x4x1: {
defaultStyle: {
            default: {"overflow":"hidden","width":"auto","height":"30px","position":"unset","left":"-193px","top":"435px","animationName":"","fontFamily":"优设标题黑","textAlign":"center","display":"flex","marginLeft":"0px","marginRight":"0px","justifyContent":"space-between","paddingRight":"0px","paddingLeft":"0px","alignItems":"flex-end"},
            
            },
 default: { 
 
number:0,
prefix:"",
suffix:"项",
animationDuration:2,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"auto","height":"30px","position":"unset","left":"-193px","top":"435px","animationName":"","fontFamily":"优设标题黑","textAlign":"center","display":"flex","marginLeft":"0px","marginRight":"0px","justifyContent":"space-between","paddingRight":"0px","paddingLeft":"0px","alignItems":"flex-end"}},"separator":{"default":{"height":"29px","fontFamily":"DIN-bold","color":"rgba(255, 255, 255, 1)","fontSize":"24px","width":"auto"}},"number":{"default":{"width":"8px","height":"29px","margin":"0 6px","borderRadius":"6px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","opacity":"100% !important","color":"rgba(255, 255, 255, 1)","backgroundColor":"rgba(23, 62, 228, 0)","fontFamily":"DIN-bold","fontSize":"24px","textAlign":"right","lineHeight":"34px","fontWeight":"600","paddingLeft":"0px","marginLeft":"0px","right":"0","position":"static"}},"suffix":{"default":{"fontSize":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","marginLeft":"0px","display":"flex","lineHeight":"22px","flexDirection":"row","alignItems":"center","justifyContent":"center","flexWrap":"nowrap","fontWeight":"400","height":"26px"}},"prefix":{"default":{"fontSize":"16px","fontFamily":"微软雅黑","color":"#C5EEEA","marginRight":"0px","display":"flex"}}}, 
 },
},
tRowx0x5: {
defaultStyle: {
            default: {"width":"210px","height":"35px","position":"unset","left":"600px","top":"153px","letterSpacing":"0px","animationName":"","fontWeight":"600","display":"flex","paddingLeft":"12px","paddingRight":"12px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderTopLeftRadius":"20px","borderTopRightRadius":"20px","borderBottomLeftRadius":"20px","borderBottomRightRadius":"20px","alignItems":"center","backgroundColor":"var(--t-select-fill-bg)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"210px","height":"35px","position":"unset","left":"600px","top":"153px","letterSpacing":"0px","animationName":"","fontWeight":"600","display":"flex","paddingLeft":"12px","paddingRight":"12px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderTopLeftRadius":"20px","borderTopRightRadius":"20px","borderBottomLeftRadius":"20px","borderBottomRightRadius":"20px","alignItems":"center","backgroundColor":"var(--t-select-fill-bg)"}}},
gutter:0,
justify:"center",
align:"middle", 
 },
},
tTextx0x5x0: {
defaultStyle: {
            default: {"width":"auto","height":"18px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"500","animationName":"","left":"152px","top":"622px","marginRight":"16px","position":"unset","fontSize":"16px","letterSpacing":"1px","textAlign":"left","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
label:"数据集",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"18px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"500","animationName":"","left":"152px","top":"622px","marginRight":"16px","position":"unset","fontSize":"16px","letterSpacing":"1px","textAlign":"left","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tRollingNumberx0x5x1: {
defaultStyle: {
            default: {"overflow":"hidden","width":"auto","height":"30px","position":"unset","left":"-3px","top":"438px","animationName":"","fontFamily":"优设标题黑","textAlign":"center","display":"flex","marginLeft":"0px","marginRight":"0px","justifyContent":"space-between","paddingRight":"0px","paddingLeft":"0px","alignItems":"flex-end"},
            
            },
 default: { 
 
number:0,
prefix:"",
suffix:"个",
animationDuration:2,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"auto","height":"30px","position":"unset","left":"-3px","top":"438px","animationName":"","fontFamily":"优设标题黑","textAlign":"center","display":"flex","marginLeft":"0px","marginRight":"0px","justifyContent":"space-between","paddingRight":"0px","paddingLeft":"0px","alignItems":"flex-end"}},"separator":{"default":{"height":"29px","fontFamily":"DIN-bold","color":"rgba(255, 255, 255, 1)","fontSize":"24px","width":"auto"}},"number":{"default":{"width":"8px","height":"29px","margin":"0 6px","borderRadius":"6px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","opacity":"100% !important","color":"rgba(255, 255, 255, 1)","backgroundColor":"rgba(23, 62, 228, 0)","fontFamily":"DIN-bold","fontSize":"24px","textAlign":"right","lineHeight":"34px","fontWeight":"600","paddingLeft":"0px","marginLeft":"0px","right":"0","position":"static"}},"suffix":{"default":{"fontSize":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","marginLeft":"0px","display":"flex","lineHeight":"22px","flexDirection":"row","alignItems":"center","justifyContent":"center","flexWrap":"nowrap","fontWeight":"400","height":"26px"}},"prefix":{"default":{"fontSize":"16px","fontFamily":"微软雅黑","color":"#C5EEEA","marginRight":"0px","display":"flex"}}},
minLength:0, 
 },
},
tRowx0x6: {
defaultStyle: {
            default: {"width":"387px","height":"66px","position":"unset","left":"166px","top":"75px","letterSpacing":"0px","animationName":"","fontWeight":"600"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"387px","height":"66px","position":"unset","left":"166px","top":"75px","letterSpacing":"0px","animationName":"","fontWeight":"600"}}},
gutter:0,
justify:"start",
align:"bottom", 
 },
},
tRollingNumberx0x6x0: {
defaultStyle: {
            default: {"overflow":"hidden","width":"404px","height":"64px","position":"unset","left":"252px","top":"74px","animationName":"","color":"rgba(255, 255, 255, 1)","letterSpacing":"0px"},
            
            },
 default: { 
 
number:0,
prefix:"",
suffix:"万条",
animationDuration:2,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"404px","height":"64px","position":"unset","left":"252px","top":"74px","animationName":"","color":"rgba(255, 255, 255, 1)","letterSpacing":"0px"}},"separator":{"default":{"height":"68px","fontFamily":"DIN-black","color":"rgba(255, 255, 255, 1)","fontSize":"56px","lineHeight":"68px","letterSpacing":"5px"}},"number":{"default":{"width":"auto","height":"64px","margin":"0 6px","borderRadius":"6px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","opacity":"100% !important","color":"rgba(255, 255, 255, 1)","backgroundColor":"rgba(23, 228, 61, 0)","fontFamily":"DIN-black","fontSize":"56px","letterSpacing":"normal","marginLeft":"0px","marginRight":"0px","textOverflow":"auto"}},"suffix":{"default":{"fontSize":"24px","color":"var(--t-color-text-green)","lineHeight":"20px","height":"4px","fontWeight":"400"}},"prefix":{"default":{"fontSize":"24px"}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"141px","height":"44px","color":"var(--t-color-text-green)","textAlign":"left","position":"unset","left":"162px","top":"26px","fontSize":"24px","animationName":"","lineHeight":"44px","fontWeight":"400","marginRight":"16px","letterSpacing":"2px"},
            
            },
 default: { 
 
label:"数据总量",
editable:false,
cStyle:{"wrapper":{"default":{"width":"141px","height":"44px","color":"var(--t-color-text-green)","textAlign":"left","position":"unset","left":"162px","top":"26px","fontSize":"24px","animationName":"","lineHeight":"44px","fontWeight":"400","marginRight":"16px","letterSpacing":"2px"}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"82px","height":"42px","color":"rgba(91, 255, 94, 1)","textAlign":"left","position":"unset","left":"653px","top":"52px","fontSize":"18px","animationName":"","lineHeight":"44px","fontWeight":"400","marginRight":"16px","letterSpacing":"2px"},
            
            },
 default: { 
 
label:"日新增",
editable:false,
cStyle:{"wrapper":{"default":{"width":"82px","height":"42px","color":"rgba(91, 255, 94, 1)","textAlign":"left","position":"unset","left":"653px","top":"52px","fontSize":"18px","animationName":"","lineHeight":"44px","fontWeight":"400","marginRight":"16px","letterSpacing":"2px"}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"20px","height":"22px","position":"unset","left":"720px","top":"63px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-09-12/1052f73ae80547878d68d17421da740b.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"20px","height":"22px","position":"unset","left":"720px","top":"63px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-09-12/1052f73ae80547878d68d17421da740b.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRollingNumberx0x10: {
defaultStyle: {
            default: {"overflow":"hidden","width":"180px","height":"57px","position":"unset","left":"648px","top":"83px","animationName":"","color":"rgba(255, 255, 255, 1)","letterSpacing":"normal"},
            
            },
 default: { 
 
number:0,
prefix:"",
suffix:"万条",
animationDuration:2,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"180px","height":"57px","position":"unset","left":"648px","top":"83px","animationName":"","color":"rgba(255, 255, 255, 1)","letterSpacing":"normal"}},"separator":{"default":{"height":"auto","fontFamily":"DIN-black","color":"rgba(255, 255, 255, 1)","fontSize":"36px","lineHeight":"60px","width":"8px"}},"number":{"default":{"width":"20px","height":"64px","margin":"0 6px","borderRadius":"6px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","opacity":"100% !important","color":"rgba(255, 255, 255, 1)","backgroundColor":"rgba(23, 228, 61, 0)","fontFamily":"DIN-black","fontSize":"36px","letterSpacing":"normal","marginLeft":"0px","marginRight":"0px","textOverflow":"auto"}},"suffix":{"default":{"fontSize":"16px","color":"var(--t-color-text-green)","lineHeight":"24px","height":"14px"}},"prefix":{"default":{"fontSize":"24px"}}}, 
 },
},
tComponentx0x11: {
defaultStyle: {
            default: {"width":"532px","height":"272px","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","position":"unset","left":"182.5px","top":"446px","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(130%) scaleY(130%)\n      skewX(0deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
name:"pathAnimationComponent",
cStyle:{"wrapper":{"default":{"width":"532px","height":"272px","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","position":"unset","left":"182.5px","top":"446px","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(130%) scaleY(130%)\n      skewX(0deg) skewY(0deg)\n      "}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/pathAnimation",
componentName:"pathAnimationComponent", 
 },
},
tComponentx0x12: {
defaultStyle: {
            default: {"width":"368px","height":"382px","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","position":"unset","left":"269.5px","top":"252px","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(120%) scaleY(120%)\n      skewX(0deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
name:"animationIndexComponent",
cStyle:{"wrapper":{"default":{"width":"368px","height":"382px","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","position":"unset","left":"269.5px","top":"252px","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(120%) scaleY(120%)\n      skewX(0deg) skewY(0deg)\n      "}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/animationIndex",
componentName:"animationIndexComponent", 
 },
},
tRectx0x13: {
defaultStyle: {
            default: {"width":"164px","height":"149px","position":"unset","left":"695.5px","top":"397px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"149px","position":"unset","left":"695.5px","top":"397px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x14: {
defaultStyle: {
            default: {"width":"164px","height":"149px","position":"unset","left":"744.5px","top":"563px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"149px","position":"unset","left":"744.5px","top":"563px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x15: {
defaultStyle: {
            default: {"width":"164px","height":"149px","position":"unset","left":"524.5px","top":"692px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"149px","position":"unset","left":"524.5px","top":"692px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x16: {
defaultStyle: {
            default: {"width":"164px","height":"149px","position":"unset","left":"216.5px","top":"692px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"149px","position":"unset","left":"216.5px","top":"692px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x17: {
defaultStyle: {
            default: {"width":"164px","height":"149px","position":"unset","left":"-0.5px","top":"562px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"149px","position":"unset","left":"-0.5px","top":"562px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x18: {
defaultStyle: {
            default: {"width":"164px","height":"149px","position":"unset","left":"39.5px","top":"405px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"149px","position":"unset","left":"39.5px","top":"405px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x19: {
defaultStyle: {
            default: {"width":"164px","height":"149px","position":"unset","left":"221.5px","top":"302px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"149px","position":"unset","left":"221.5px","top":"302px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x20: {
defaultStyle: {
            default: {"width":"164px","height":"149px","position":"unset","left":"528.5px","top":"303px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"149px","position":"unset","left":"528.5px","top":"303px","backgroundImage":"var(--t-content-dz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x21: {
defaultStyle: {
            default: {"width":"86px","height":"80px","position":"unset","left":"734.5px","top":"406px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customcd63d6cd732b9","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"86px","height":"80px","position":"unset","left":"734.5px","top":"406px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customcd63d6cd732b9","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"}}}, 
 },
},
tRectx0x22: {
defaultStyle: {
            default: {"width":"86px","height":"80px","position":"unset","left":"783.5px","top":"572px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom8a1ed1f415a11","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"86px","height":"80px","position":"unset","left":"783.5px","top":"572px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom8a1ed1f415a11","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"}}}, 
 },
},
tRectx0x23: {
defaultStyle: {
            default: {"width":"86px","height":"80px","position":"unset","left":"563.5px","top":"701px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customdce01b8fa3f32","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"86px","height":"80px","position":"unset","left":"563.5px","top":"701px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customdce01b8fa3f32","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"}}}, 
 },
},
tRectx0x24: {
defaultStyle: {
            default: {"width":"86px","height":"80px","position":"unset","left":"255.5px","top":"701px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom4245816c47166","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"86px","height":"80px","position":"unset","left":"255.5px","top":"701px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom4245816c47166","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"}}}, 
 },
},
tRectx0x25: {
defaultStyle: {
            default: {"width":"86px","height":"80px","position":"unset","left":"38.5px","top":"571px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom195a9d5465ae2","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"86px","height":"80px","position":"unset","left":"38.5px","top":"571px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom195a9d5465ae2","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"}}}, 
 },
},
tRectx0x26: {
defaultStyle: {
            default: {"width":"86px","height":"80px","position":"unset","left":"78.5px","top":"414px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customc1b28d2625597","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"86px","height":"80px","position":"unset","left":"78.5px","top":"414px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customc1b28d2625597","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"}}}, 
 },
},
tRectx0x27: {
defaultStyle: {
            default: {"width":"86px","height":"80px","position":"unset","left":"260.5px","top":"311px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom11ef6b8a75882","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"86px","height":"80px","position":"unset","left":"260.5px","top":"311px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom11ef6b8a75882","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"}}}, 
 },
},
tRectx0x28: {
defaultStyle: {
            default: {"width":"86px","height":"80px","position":"unset","left":"567.5px","top":"312px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custome5a8b2a86d653","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"86px","height":"80px","position":"unset","left":"567.5px","top":"312px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/00833c094b0643688ed2e9d45645b323.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custome5a8b2a86d653","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"rgba(0, 222, 255, 0.4)"}}}, 
 },
},
tCirclex0x29: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"779.5px","top":"478px","animationName":"custom9acf867954ef8","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"779.5px","top":"478px","animationName":"custom9acf867954ef8","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x30: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"828.5px","top":"644px","animationName":"custom8c8f93812c4cb","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"828.5px","top":"644px","animationName":"custom8c8f93812c4cb","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x31: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"608.5px","top":"773px","animationName":"custom108bc068ff0fa","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"608.5px","top":"773px","animationName":"custom108bc068ff0fa","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x32: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"300.5px","top":"773px","animationName":"custom34fc5b096c77a","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"300.5px","top":"773px","animationName":"custom34fc5b096c77a","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x33: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"83.5px","top":"643px","animationName":"customafff4c333ed1f","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"83.5px","top":"643px","animationName":"customafff4c333ed1f","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x34: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"123.5px","top":"486px","animationName":"custom7a8956baf0308","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"123.5px","top":"486px","animationName":"custom7a8956baf0308","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x35: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"305.5px","top":"383px","animationName":"custom61c0033011ebd","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"305.5px","top":"383px","animationName":"custom61c0033011ebd","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x36: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"612.5px","top":"384px","animationName":"custom018d676a54929","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"612.5px","top":"384px","animationName":"custom018d676a54929","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x37: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"791.5px","top":"476px","animationName":"custom914cbd02248b","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"791.5px","top":"476px","animationName":"custom914cbd02248b","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x38: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"840.5px","top":"642px","animationName":"customde5617b092e53","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"840.5px","top":"642px","animationName":"customde5617b092e53","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x39: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"620.5px","top":"771px","animationName":"custom508e777939921","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"620.5px","top":"771px","animationName":"custom508e777939921","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x40: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"312.5px","top":"771px","animationName":"custom422137cc60148","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"312.5px","top":"771px","animationName":"custom422137cc60148","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x41: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"95.5px","top":"641px","animationName":"custom3072e829a88d8","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"95.5px","top":"641px","animationName":"custom3072e829a88d8","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x42: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"135.5px","top":"484px","animationName":"custom1cb1f6cbcd43c","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"135.5px","top":"484px","animationName":"custom1cb1f6cbcd43c","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x43: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"317.5px","top":"381px","animationName":"custome1d53bed119d2","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"317.5px","top":"381px","animationName":"custome1d53bed119d2","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x44: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"624.5px","top":"382px","animationName":"customdec67f60f5e26","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"624.5px","top":"382px","animationName":"customdec67f60f5e26","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x45: {
defaultStyle: {
            default: {"width":"46px","height":"46px","position":"unset","left":"754.5px","top":"409px","backgroundImage":"var(--t-content-t1)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"46px","height":"46px","position":"unset","left":"754.5px","top":"409px","backgroundImage":"var(--t-content-t1)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"}}}, 
 },
},
tRectx0x46: {
defaultStyle: {
            default: {"width":"46px","height":"46px","position":"unset","left":"803.5px","top":"575px","backgroundImage":"var(--t-content-t2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"46px","height":"46px","position":"unset","left":"803.5px","top":"575px","backgroundImage":"var(--t-content-t2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"}}}, 
 },
},
tRectx0x47: {
defaultStyle: {
            default: {"width":"46px","height":"46px","position":"unset","left":"583.5px","top":"704px","backgroundImage":"var(--t-content-t3)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"46px","height":"46px","position":"unset","left":"583.5px","top":"704px","backgroundImage":"var(--t-content-t3)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"}}}, 
 },
},
tRectx0x48: {
defaultStyle: {
            default: {"width":"46px","height":"46px","position":"unset","left":"275.5px","top":"704px","backgroundImage":"var(--t-content-t4)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"46px","height":"46px","position":"unset","left":"275.5px","top":"704px","backgroundImage":"var(--t-content-t4)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"}}}, 
 },
},
tRectx0x49: {
defaultStyle: {
            default: {"width":"46px","height":"46px","position":"unset","left":"58.5px","top":"574px","backgroundImage":"var(--t-content-t5)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"46px","height":"46px","position":"unset","left":"58.5px","top":"574px","backgroundImage":"var(--t-content-t5)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"}}}, 
 },
},
tRectx0x50: {
defaultStyle: {
            default: {"width":"46px","height":"46px","position":"unset","left":"98.5px","top":"417px","backgroundImage":"var(--t-content-t6)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"46px","height":"46px","position":"unset","left":"98.5px","top":"417px","backgroundImage":"var(--t-content-t6)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"}}}, 
 },
},
tRectx0x51: {
defaultStyle: {
            default: {"width":"46px","height":"46px","position":"unset","left":"280.5px","top":"314px","backgroundImage":"var(--t-content-t7)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"46px","height":"46px","position":"unset","left":"280.5px","top":"314px","backgroundImage":"var(--t-content-t7)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"}}}, 
 },
},
tRectx0x52: {
defaultStyle: {
            default: {"width":"46px","height":"46px","position":"unset","left":"587.5px","top":"315px","backgroundImage":"var(--t-content-t8)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"46px","height":"46px","position":"unset","left":"587.5px","top":"315px","backgroundImage":"var(--t-content-t8)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"}}}, 
 },
},
tCirclex0x53: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"764.5px","top":"479px","animationName":"customc019d0b5e77c8","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"764.5px","top":"479px","animationName":"customc019d0b5e77c8","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x54: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"813.5px","top":"645px","animationName":"customf4fa9ec6e43f8","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"813.5px","top":"645px","animationName":"customf4fa9ec6e43f8","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x55: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"593.5px","top":"774px","animationName":"custombb97c6f92c1e2","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"593.5px","top":"774px","animationName":"custombb97c6f92c1e2","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x56: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"285.5px","top":"774px","animationName":"custom42b46fadb2d88","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"285.5px","top":"774px","animationName":"custom42b46fadb2d88","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x57: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"68.5px","top":"644px","animationName":"customb04fbbc808829","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"68.5px","top":"644px","animationName":"customb04fbbc808829","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x58: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"108.5px","top":"487px","animationName":"custom65cf28e933d76","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"108.5px","top":"487px","animationName":"custom65cf28e933d76","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x59: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"290.5px","top":"384px","animationName":"customa47c2822e0e47","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"290.5px","top":"384px","animationName":"customa47c2822e0e47","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x60: {
defaultStyle: {
            default: {"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"597.5px","top":"385px","animationName":"custom5959312312ba2","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"3px","height":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"597.5px","top":"385px","animationName":"custom5959312312ba2","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x61: {
defaultStyle: {
            default: {"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"767.5px","top":"475px","animationName":"custom022c8c7bbe2be","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"767.5px","top":"475px","animationName":"custom022c8c7bbe2be","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x62: {
defaultStyle: {
            default: {"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"816.5px","top":"641px","animationName":"custom31a176068e601","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"816.5px","top":"641px","animationName":"custom31a176068e601","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x63: {
defaultStyle: {
            default: {"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"596.5px","top":"770px","animationName":"custom07c9cd11bec9a","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"596.5px","top":"770px","animationName":"custom07c9cd11bec9a","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x64: {
defaultStyle: {
            default: {"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"288.5px","top":"770px","animationName":"custom7c6b6b7be652b","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"288.5px","top":"770px","animationName":"custom7c6b6b7be652b","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x65: {
defaultStyle: {
            default: {"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"71.5px","top":"640px","animationName":"custom5a456a9d7ed55","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"71.5px","top":"640px","animationName":"custom5a456a9d7ed55","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x66: {
defaultStyle: {
            default: {"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"111.5px","top":"483px","animationName":"custom30de35c5f438f","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"111.5px","top":"483px","animationName":"custom30de35c5f438f","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x67: {
defaultStyle: {
            default: {"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"293.5px","top":"380px","animationName":"customc35aae1f09b75","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"293.5px","top":"380px","animationName":"customc35aae1f09b75","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x68: {
defaultStyle: {
            default: {"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"600.5px","top":"381px","animationName":"custom46cc29b0f0cca","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(0, 255, 255, 0.4)","position":"unset","left":"600.5px","top":"381px","animationName":"custom46cc29b0f0cca","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x69: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"740.5px","top":"451px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom2647422c26dbd","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"740.5px","top":"451px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom2647422c26dbd","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x70: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"789.5px","top":"617px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customb9ea0b85cae2d","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"789.5px","top":"617px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customb9ea0b85cae2d","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x71: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"569.5px","top":"746px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom5d65c9a25cbf8","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"569.5px","top":"746px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom5d65c9a25cbf8","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x72: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"261.5px","top":"746px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom96188689da68","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"261.5px","top":"746px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom96188689da68","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x73: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"44.5px","top":"616px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom30fc78b91803","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"44.5px","top":"616px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom30fc78b91803","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x74: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"84.5px","top":"459px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom9713dd1b72b5b","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"84.5px","top":"459px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom9713dd1b72b5b","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x75: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"266.5px","top":"356px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom2fa4e12e43259","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"266.5px","top":"356px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom2fa4e12e43259","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x76: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"573.5px","top":"357px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom376085210b0f3","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"573.5px","top":"357px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom376085210b0f3","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x77: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"740.5px","top":"451px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom1e47b6e34d872","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"740.5px","top":"451px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom1e47b6e34d872","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x78: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"789.5px","top":"617px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom6cbce6eacb661","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"789.5px","top":"617px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom6cbce6eacb661","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x79: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"569.5px","top":"746px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customcbe2cd6d505f1","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"569.5px","top":"746px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customcbe2cd6d505f1","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x80: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"261.5px","top":"746px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customaa33c0acb0195","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"261.5px","top":"746px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customaa33c0acb0195","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x81: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"44.5px","top":"616px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom4c35d5e89fe0a","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"44.5px","top":"616px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom4c35d5e89fe0a","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x82: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"84.5px","top":"459px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom662a89bbff80c","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"84.5px","top":"459px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom662a89bbff80c","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x83: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"266.5px","top":"356px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom6fe2e9ff42d61","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"266.5px","top":"356px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom6fe2e9ff42d61","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x84: {
defaultStyle: {
            default: {"width":"74px","height":"40px","position":"unset","left":"573.5px","top":"357px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom0c39107519bb4","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"40px","position":"unset","left":"573.5px","top":"357px","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/c32b617fed57470ca20e05bb10ac9937.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom0c39107519bb4","backgroundColor":"#63F6FF","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x85: {
defaultStyle: {
            default: {"width":"106px","height":"48px","position":"unset","left":"724.5px","top":"456px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom806303a01edaa","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"106px","height":"48px","position":"unset","left":"724.5px","top":"456px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom806303a01edaa","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"}}}, 
 },
},
tRectx0x86: {
defaultStyle: {
            default: {"width":"106px","height":"48px","position":"unset","left":"773.5px","top":"622px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customd1e024ced062f","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"106px","height":"48px","position":"unset","left":"773.5px","top":"622px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customd1e024ced062f","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"}}}, 
 },
},
tRectx0x87: {
defaultStyle: {
            default: {"width":"106px","height":"48px","position":"unset","left":"553.5px","top":"751px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom3b36c0218b793","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"106px","height":"48px","position":"unset","left":"553.5px","top":"751px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom3b36c0218b793","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"}}}, 
 },
},
tRectx0x88: {
defaultStyle: {
            default: {"width":"106px","height":"48px","position":"unset","left":"245.5px","top":"751px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom8416736b1fab3","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"106px","height":"48px","position":"unset","left":"245.5px","top":"751px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom8416736b1fab3","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"}}}, 
 },
},
tRectx0x89: {
defaultStyle: {
            default: {"width":"106px","height":"48px","position":"unset","left":"28.5px","top":"621px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom681def7999b8c","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"106px","height":"48px","position":"unset","left":"28.5px","top":"621px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom681def7999b8c","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"}}}, 
 },
},
tRectx0x90: {
defaultStyle: {
            default: {"width":"106px","height":"48px","position":"unset","left":"68.5px","top":"464px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customb376bfa8a4f22","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"106px","height":"48px","position":"unset","left":"68.5px","top":"464px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customb376bfa8a4f22","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"}}}, 
 },
},
tRectx0x91: {
defaultStyle: {
            default: {"width":"106px","height":"48px","position":"unset","left":"250.5px","top":"361px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom1973ec7103c8b","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"106px","height":"48px","position":"unset","left":"250.5px","top":"361px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom1973ec7103c8b","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"}}}, 
 },
},
tRectx0x92: {
defaultStyle: {
            default: {"width":"106px","height":"48px","position":"unset","left":"557.5px","top":"362px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customa01141679659b","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"106px","height":"48px","position":"unset","left":"557.5px","top":"362px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2023-03-30/8f82e2da15be48a99d13a5b25b3ec20f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customa01141679659b","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"}}}, 
 },
},
tRollingNumberx0x93: {
defaultStyle: {
            default: {"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"700.5px","top":"388px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
number:0,
prefix:"",
suffix:"个",
animationDuration:1,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"700.5px","top":"388px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center"}},"separator":{"default":{"height":"44px","color":"rgba(255, 255, 255, 1)","fontSize":"22px","fontFamily":"优设标题黑","lineHeight":"44px","width":"0px"}},"number":{"default":{"width":"auto","height":"200px","margin":"0 6px","borderRadius":"6px","backgroundColor":"rgba(23, 228, 146, 0)","color":"rgba(255, 255, 255, 1)","fontSize":"18px","fontWeight":"400","textAlign":"center","paddingLeft":"0px","marginLeft":"0px","marginRight":"0px","fontFamily":"微软雅黑","lineHeight":"20px"}},"suffix":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","fontWeight":"400","lineHeight":"20px","height":"20px","display":"flex","alignItems":"flex-end"}}}, 
 },
},
tRollingNumberx0x94: {
defaultStyle: {
            default: {"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"749.5px","top":"554px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
number:0,
prefix:"",
suffix:"个",
animationDuration:1,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"749.5px","top":"554px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center"}},"separator":{"default":{"height":"44px","color":"rgba(255, 255, 255, 1)","fontSize":"22px","fontFamily":"优设标题黑","lineHeight":"44px","width":"0px"}},"number":{"default":{"width":"auto","height":"200px","margin":"0 6px","borderRadius":"6px","backgroundColor":"rgba(23, 228, 146, 0)","color":"rgba(255, 255, 255, 1)","fontSize":"18px","fontWeight":"400","textAlign":"center","paddingLeft":"0px","marginLeft":"0px","marginRight":"0px","fontFamily":"微软雅黑","lineHeight":"20px"}},"suffix":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","fontWeight":"400","lineHeight":"20px","height":"20px","display":"flex","alignItems":"flex-end"}}}, 
 },
},
tRollingNumberx0x95: {
defaultStyle: {
            default: {"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"529.5px","top":"683px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
number:0,
prefix:"",
suffix:"个",
animationDuration:1,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"529.5px","top":"683px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center"}},"separator":{"default":{"height":"44px","color":"rgba(255, 255, 255, 1)","fontSize":"22px","fontFamily":"优设标题黑","lineHeight":"44px","width":"0px"}},"number":{"default":{"width":"auto","height":"200px","margin":"0 6px","borderRadius":"6px","backgroundColor":"rgba(23, 228, 146, 0)","color":"rgba(255, 255, 255, 1)","fontSize":"18px","fontWeight":"400","textAlign":"center","paddingLeft":"0px","marginLeft":"0px","marginRight":"0px","fontFamily":"微软雅黑","lineHeight":"20px"}},"suffix":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","fontWeight":"400","lineHeight":"20px","height":"20px","display":"flex","alignItems":"flex-end"}}}, 
 },
},
tRollingNumberx0x96: {
defaultStyle: {
            default: {"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"221.5px","top":"683px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
number:0,
prefix:"",
suffix:"个",
animationDuration:1,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"221.5px","top":"683px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center"}},"separator":{"default":{"height":"44px","color":"rgba(255, 255, 255, 1)","fontSize":"22px","fontFamily":"优设标题黑","lineHeight":"44px","width":"0px"}},"number":{"default":{"width":"auto","height":"200px","margin":"0 6px","borderRadius":"6px","backgroundColor":"rgba(23, 228, 146, 0)","color":"rgba(255, 255, 255, 1)","fontSize":"18px","fontWeight":"400","textAlign":"center","paddingLeft":"0px","marginLeft":"0px","marginRight":"0px","fontFamily":"微软雅黑","lineHeight":"20px"}},"suffix":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","fontWeight":"400","lineHeight":"20px","height":"20px","display":"flex","alignItems":"flex-end"}}}, 
 },
},
tRollingNumberx0x97: {
defaultStyle: {
            default: {"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"4.5px","top":"553px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
number:0,
prefix:"",
suffix:"个",
animationDuration:1,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"4.5px","top":"553px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center"}},"separator":{"default":{"height":"44px","color":"rgba(255, 255, 255, 1)","fontSize":"22px","fontFamily":"优设标题黑","lineHeight":"44px","width":"0px"}},"number":{"default":{"width":"auto","height":"200px","margin":"0 6px","borderRadius":"6px","backgroundColor":"rgba(23, 228, 146, 0)","color":"rgba(255, 255, 255, 1)","fontSize":"18px","fontWeight":"400","textAlign":"center","paddingLeft":"0px","marginLeft":"0px","marginRight":"0px","fontFamily":"微软雅黑","lineHeight":"20px"}},"suffix":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","fontWeight":"400","lineHeight":"20px","height":"20px","display":"flex","alignItems":"flex-end"}}}, 
 },
},
tRollingNumberx0x98: {
defaultStyle: {
            default: {"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"44.5px","top":"396px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
number:0,
prefix:"",
suffix:"个",
animationDuration:1,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"44.5px","top":"396px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center"}},"separator":{"default":{"height":"44px","color":"rgba(255, 255, 255, 1)","fontSize":"22px","fontFamily":"优设标题黑","lineHeight":"44px","width":"0px"}},"number":{"default":{"width":"auto","height":"200px","margin":"0 6px","borderRadius":"6px","backgroundColor":"rgba(23, 228, 146, 0)","color":"rgba(255, 255, 255, 1)","fontSize":"18px","fontWeight":"400","textAlign":"center","paddingLeft":"0px","marginLeft":"0px","marginRight":"0px","fontFamily":"微软雅黑","lineHeight":"20px"}},"suffix":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","fontWeight":"400","lineHeight":"20px","height":"20px","display":"flex","alignItems":"flex-end"}}}, 
 },
},
tRollingNumberx0x99: {
defaultStyle: {
            default: {"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"226.5px","top":"293px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
number:0,
prefix:"",
suffix:"个",
animationDuration:1,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"226.5px","top":"293px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center"}},"separator":{"default":{"height":"44px","color":"rgba(255, 255, 255, 1)","fontSize":"22px","fontFamily":"优设标题黑","lineHeight":"44px","width":"0px"}},"number":{"default":{"width":"auto","height":"200px","margin":"0 6px","borderRadius":"6px","backgroundColor":"rgba(23, 228, 146, 0)","color":"rgba(255, 255, 255, 1)","fontSize":"18px","fontWeight":"400","textAlign":"center","paddingLeft":"0px","marginLeft":"0px","marginRight":"0px","fontFamily":"微软雅黑","lineHeight":"20px"}},"suffix":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","fontWeight":"400","lineHeight":"20px","height":"20px","display":"flex","alignItems":"flex-end"}}}, 
 },
},
tRollingNumberx0x100: {
defaultStyle: {
            default: {"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"533.5px","top":"294px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center","color":"var(--t-color-text-green)"},
            
            },
 default: { 
 
number:0,
prefix:"",
suffix:"个",
animationDuration:1,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"157px","height":"33px","position":"unset","left":"533.5px","top":"294px","fontSize":"22px","fontFamily":"微软雅黑","marginLeft":"0px","animationName":"","display":"flex","justifyContent":"center","alignItems":"center","color":"var(--t-color-text-green)"}},"separator":{"default":{"height":"44px","color":"rgba(255, 255, 255, 1)","fontSize":"22px","fontFamily":"优设标题黑","lineHeight":"44px","width":"0px"}},"number":{"default":{"width":"auto","height":"200px","margin":"0 6px","borderRadius":"6px","backgroundColor":"rgba(23, 228, 146, 0)","color":"rgba(255, 255, 255, 1)","fontSize":"18px","fontWeight":"400","textAlign":"center","paddingLeft":"0px","marginLeft":"0px","marginRight":"0px","fontFamily":"微软雅黑","lineHeight":"20px"}},"suffix":{"default":{"fontSize":"14px","color":"var(--unit-font-color)","fontWeight":"400","lineHeight":"20px","height":"20px","display":"flex","alignItems":"flex-end"}}}, 
 },
},
tTextx0x101: {
defaultStyle: {
            default: {"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"720.5px","top":"375px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"},
            
            },
 default: { 
 
label:"环境标签",
editable:false,
cStyle:{"wrapper":{"default":{"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"720.5px","top":"375px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"}}}, 
 },
},
tTextx0x102: {
defaultStyle: {
            default: {"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"769.5px","top":"541px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"},
            
            },
 default: { 
 
label:"公共代码",
editable:false,
cStyle:{"wrapper":{"default":{"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"769.5px","top":"541px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"}}}, 
 },
},
tTextx0x103: {
defaultStyle: {
            default: {"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"549.5px","top":"670px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"},
            
            },
 default: { 
 
label:"空间资源",
editable:false,
cStyle:{"wrapper":{"default":{"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"549.5px","top":"670px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"}}}, 
 },
},
tTextx0x104: {
defaultStyle: {
            default: {"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"241.5px","top":"670px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"},
            
            },
 default: { 
 
label:"业务规则",
editable:false,
cStyle:{"wrapper":{"default":{"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"241.5px","top":"670px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"}}}, 
 },
},
tTextx0x105: {
defaultStyle: {
            default: {"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"24.5px","top":"540px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"},
            
            },
 default: { 
 
label:"环境业务主题",
editable:false,
cStyle:{"wrapper":{"default":{"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"24.5px","top":"540px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"}}}, 
 },
},
tTextx0x106: {
defaultStyle: {
            default: {"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"64.5px","top":"383px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"},
            
            },
 default: { 
 
label:"环境指标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"64.5px","top":"383px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"}}}, 
 },
},
tTextx0x107: {
defaultStyle: {
            default: {"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"246.5px","top":"280px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"},
            
            },
 default: { 
 
label:"环境管理对象",
editable:false,
cStyle:{"wrapper":{"default":{"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"246.5px","top":"280px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"}}}, 
 },
},
tTextx0x108: {
defaultStyle: {
            default: {"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"553.5px","top":"281px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"},
            
            },
 default: { 
 
label:"环境业务专题",
editable:false,
cStyle:{"wrapper":{"default":{"width":"117px","height":"16px","color":"var(--t-color-text-green)","fontFamily":"微软雅黑","fontWeight":"400","animationName":"","left":"553.5px","top":"281px","fontSize":"14px","lineHeight":"16px","marginLeft":"0px","marginRight":"10px","position":"unset","letterSpacing":"0.5px","display":"flex","justifyContent":"center"}}}, 
 },
},
tLinex0x109: {
defaultStyle: {
            default: {"width":"1px","height":"87px","position":"unset","left":"590px","top":"54px","backgroundColor":"#216166","opacity":"90% !important"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"1px","height":"87px","position":"unset","left":"590px","top":"54px","backgroundColor":"#216166","opacity":"90% !important"}}}, 
 },
},
});
// 接口函数
const getDayAdd = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"2ee736063db07ca556e448b526b0651b","MONITORTIME":""},}).then((res) => {
     // 成功的操作
     if (res?.data?.data) {
  const data = res.data.data;
  state.allData['DATA_DAY_ADD'] = data['DATA_DAY_ADD'] || 0;
  console.log(state.allData);
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 初始请求，调取接口
getDayAdd();
// 接口函数
const getAllData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"5f4a17b194df087c1c04e5b1355e95e1","MONITORTIME":""},}).then((res) => {
     // 成功的操作
     if (res?.data?.data) {
  const data = res.data.data;
  for (let key in state.allData) {
    // 日增量是单独的接口获取
    if (data.hasOwnProperty(key) && key !== 'DATA_DAY_ADD') {
      state.allData[key] = data[key] || 0;
    }
  }
  console.log(state.allData);
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 初始请求，调取接口
getAllData();
 function handleWindowResize() {
                            setPageScale('t-l-c-dataSpaceIndex', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-dataSpaceIndex', global.appScaleMode, 'normal');
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

 const tRowx0x3ComputedData = computed(() => _.merge({}, componentState.tRowx0x3.default, componentState.tRowx0x3?.[state.screenSize]));

 const tTextx0x3x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x3x0.default, componentState.tTextx0x3x0?.[state.screenSize]));

 const tRollingNumberx0x3x1ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x3x1.default, componentState.tRollingNumberx0x3x1?.[state.screenSize]));

 const tRowx0x4ComputedData = computed(() => _.merge({}, componentState.tRowx0x4.default, componentState.tRowx0x4?.[state.screenSize]));

 const tTextx0x4x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x4x0.default, componentState.tTextx0x4x0?.[state.screenSize]));

 const tRollingNumberx0x4x1ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x4x1.default, componentState.tRollingNumberx0x4x1?.[state.screenSize]));

 const tRowx0x5ComputedData = computed(() => _.merge({}, componentState.tRowx0x5.default, componentState.tRowx0x5?.[state.screenSize]));

 const tTextx0x5x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x5x0.default, componentState.tTextx0x5x0?.[state.screenSize]));

 const tRollingNumberx0x5x1ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x5x1.default, componentState.tRollingNumberx0x5x1?.[state.screenSize]));

 const tRowx0x6ComputedData = computed(() => _.merge({}, componentState.tRowx0x6.default, componentState.tRowx0x6?.[state.screenSize]));

 const tRollingNumberx0x6x0ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x6x0.default, componentState.tRollingNumberx0x6x0?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tRollingNumberx0x10ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x10.default, componentState.tRollingNumberx0x10?.[state.screenSize]));

 const tComponentx0x11ComputedData = computed(() => _.merge({}, componentState.tComponentx0x11.default, componentState.tComponentx0x11?.[state.screenSize]));

 const tComponentx0x12ComputedData = computed(() => _.merge({}, componentState.tComponentx0x12.default, componentState.tComponentx0x12?.[state.screenSize]));

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

 const tCirclex0x29ComputedData = computed(() => _.merge({}, componentState.tCirclex0x29.default, componentState.tCirclex0x29?.[state.screenSize]));

 const tCirclex0x30ComputedData = computed(() => _.merge({}, componentState.tCirclex0x30.default, componentState.tCirclex0x30?.[state.screenSize]));

 const tCirclex0x31ComputedData = computed(() => _.merge({}, componentState.tCirclex0x31.default, componentState.tCirclex0x31?.[state.screenSize]));

 const tCirclex0x32ComputedData = computed(() => _.merge({}, componentState.tCirclex0x32.default, componentState.tCirclex0x32?.[state.screenSize]));

 const tCirclex0x33ComputedData = computed(() => _.merge({}, componentState.tCirclex0x33.default, componentState.tCirclex0x33?.[state.screenSize]));

 const tCirclex0x34ComputedData = computed(() => _.merge({}, componentState.tCirclex0x34.default, componentState.tCirclex0x34?.[state.screenSize]));

 const tCirclex0x35ComputedData = computed(() => _.merge({}, componentState.tCirclex0x35.default, componentState.tCirclex0x35?.[state.screenSize]));

 const tCirclex0x36ComputedData = computed(() => _.merge({}, componentState.tCirclex0x36.default, componentState.tCirclex0x36?.[state.screenSize]));

 const tCirclex0x37ComputedData = computed(() => _.merge({}, componentState.tCirclex0x37.default, componentState.tCirclex0x37?.[state.screenSize]));

 const tCirclex0x38ComputedData = computed(() => _.merge({}, componentState.tCirclex0x38.default, componentState.tCirclex0x38?.[state.screenSize]));

 const tCirclex0x39ComputedData = computed(() => _.merge({}, componentState.tCirclex0x39.default, componentState.tCirclex0x39?.[state.screenSize]));

 const tCirclex0x40ComputedData = computed(() => _.merge({}, componentState.tCirclex0x40.default, componentState.tCirclex0x40?.[state.screenSize]));

 const tCirclex0x41ComputedData = computed(() => _.merge({}, componentState.tCirclex0x41.default, componentState.tCirclex0x41?.[state.screenSize]));

 const tCirclex0x42ComputedData = computed(() => _.merge({}, componentState.tCirclex0x42.default, componentState.tCirclex0x42?.[state.screenSize]));

 const tCirclex0x43ComputedData = computed(() => _.merge({}, componentState.tCirclex0x43.default, componentState.tCirclex0x43?.[state.screenSize]));

 const tCirclex0x44ComputedData = computed(() => _.merge({}, componentState.tCirclex0x44.default, componentState.tCirclex0x44?.[state.screenSize]));

 const tRectx0x45ComputedData = computed(() => _.merge({}, componentState.tRectx0x45.default, componentState.tRectx0x45?.[state.screenSize]));

 const tRectx0x46ComputedData = computed(() => _.merge({}, componentState.tRectx0x46.default, componentState.tRectx0x46?.[state.screenSize]));

 const tRectx0x47ComputedData = computed(() => _.merge({}, componentState.tRectx0x47.default, componentState.tRectx0x47?.[state.screenSize]));

 const tRectx0x48ComputedData = computed(() => _.merge({}, componentState.tRectx0x48.default, componentState.tRectx0x48?.[state.screenSize]));

 const tRectx0x49ComputedData = computed(() => _.merge({}, componentState.tRectx0x49.default, componentState.tRectx0x49?.[state.screenSize]));

 const tRectx0x50ComputedData = computed(() => _.merge({}, componentState.tRectx0x50.default, componentState.tRectx0x50?.[state.screenSize]));

 const tRectx0x51ComputedData = computed(() => _.merge({}, componentState.tRectx0x51.default, componentState.tRectx0x51?.[state.screenSize]));

 const tRectx0x52ComputedData = computed(() => _.merge({}, componentState.tRectx0x52.default, componentState.tRectx0x52?.[state.screenSize]));

 const tCirclex0x53ComputedData = computed(() => _.merge({}, componentState.tCirclex0x53.default, componentState.tCirclex0x53?.[state.screenSize]));

 const tCirclex0x54ComputedData = computed(() => _.merge({}, componentState.tCirclex0x54.default, componentState.tCirclex0x54?.[state.screenSize]));

 const tCirclex0x55ComputedData = computed(() => _.merge({}, componentState.tCirclex0x55.default, componentState.tCirclex0x55?.[state.screenSize]));

 const tCirclex0x56ComputedData = computed(() => _.merge({}, componentState.tCirclex0x56.default, componentState.tCirclex0x56?.[state.screenSize]));

 const tCirclex0x57ComputedData = computed(() => _.merge({}, componentState.tCirclex0x57.default, componentState.tCirclex0x57?.[state.screenSize]));

 const tCirclex0x58ComputedData = computed(() => _.merge({}, componentState.tCirclex0x58.default, componentState.tCirclex0x58?.[state.screenSize]));

 const tCirclex0x59ComputedData = computed(() => _.merge({}, componentState.tCirclex0x59.default, componentState.tCirclex0x59?.[state.screenSize]));

 const tCirclex0x60ComputedData = computed(() => _.merge({}, componentState.tCirclex0x60.default, componentState.tCirclex0x60?.[state.screenSize]));

 const tCirclex0x61ComputedData = computed(() => _.merge({}, componentState.tCirclex0x61.default, componentState.tCirclex0x61?.[state.screenSize]));

 const tCirclex0x62ComputedData = computed(() => _.merge({}, componentState.tCirclex0x62.default, componentState.tCirclex0x62?.[state.screenSize]));

 const tCirclex0x63ComputedData = computed(() => _.merge({}, componentState.tCirclex0x63.default, componentState.tCirclex0x63?.[state.screenSize]));

 const tCirclex0x64ComputedData = computed(() => _.merge({}, componentState.tCirclex0x64.default, componentState.tCirclex0x64?.[state.screenSize]));

 const tCirclex0x65ComputedData = computed(() => _.merge({}, componentState.tCirclex0x65.default, componentState.tCirclex0x65?.[state.screenSize]));

 const tCirclex0x66ComputedData = computed(() => _.merge({}, componentState.tCirclex0x66.default, componentState.tCirclex0x66?.[state.screenSize]));

 const tCirclex0x67ComputedData = computed(() => _.merge({}, componentState.tCirclex0x67.default, componentState.tCirclex0x67?.[state.screenSize]));

 const tCirclex0x68ComputedData = computed(() => _.merge({}, componentState.tCirclex0x68.default, componentState.tCirclex0x68?.[state.screenSize]));

 const tRectx0x69ComputedData = computed(() => _.merge({}, componentState.tRectx0x69.default, componentState.tRectx0x69?.[state.screenSize]));

 const tRectx0x70ComputedData = computed(() => _.merge({}, componentState.tRectx0x70.default, componentState.tRectx0x70?.[state.screenSize]));

 const tRectx0x71ComputedData = computed(() => _.merge({}, componentState.tRectx0x71.default, componentState.tRectx0x71?.[state.screenSize]));

 const tRectx0x72ComputedData = computed(() => _.merge({}, componentState.tRectx0x72.default, componentState.tRectx0x72?.[state.screenSize]));

 const tRectx0x73ComputedData = computed(() => _.merge({}, componentState.tRectx0x73.default, componentState.tRectx0x73?.[state.screenSize]));

 const tRectx0x74ComputedData = computed(() => _.merge({}, componentState.tRectx0x74.default, componentState.tRectx0x74?.[state.screenSize]));

 const tRectx0x75ComputedData = computed(() => _.merge({}, componentState.tRectx0x75.default, componentState.tRectx0x75?.[state.screenSize]));

 const tRectx0x76ComputedData = computed(() => _.merge({}, componentState.tRectx0x76.default, componentState.tRectx0x76?.[state.screenSize]));

 const tRectx0x77ComputedData = computed(() => _.merge({}, componentState.tRectx0x77.default, componentState.tRectx0x77?.[state.screenSize]));

 const tRectx0x78ComputedData = computed(() => _.merge({}, componentState.tRectx0x78.default, componentState.tRectx0x78?.[state.screenSize]));

 const tRectx0x79ComputedData = computed(() => _.merge({}, componentState.tRectx0x79.default, componentState.tRectx0x79?.[state.screenSize]));

 const tRectx0x80ComputedData = computed(() => _.merge({}, componentState.tRectx0x80.default, componentState.tRectx0x80?.[state.screenSize]));

 const tRectx0x81ComputedData = computed(() => _.merge({}, componentState.tRectx0x81.default, componentState.tRectx0x81?.[state.screenSize]));

 const tRectx0x82ComputedData = computed(() => _.merge({}, componentState.tRectx0x82.default, componentState.tRectx0x82?.[state.screenSize]));

 const tRectx0x83ComputedData = computed(() => _.merge({}, componentState.tRectx0x83.default, componentState.tRectx0x83?.[state.screenSize]));

 const tRectx0x84ComputedData = computed(() => _.merge({}, componentState.tRectx0x84.default, componentState.tRectx0x84?.[state.screenSize]));

 const tRectx0x85ComputedData = computed(() => _.merge({}, componentState.tRectx0x85.default, componentState.tRectx0x85?.[state.screenSize]));

 const tRectx0x86ComputedData = computed(() => _.merge({}, componentState.tRectx0x86.default, componentState.tRectx0x86?.[state.screenSize]));

 const tRectx0x87ComputedData = computed(() => _.merge({}, componentState.tRectx0x87.default, componentState.tRectx0x87?.[state.screenSize]));

 const tRectx0x88ComputedData = computed(() => _.merge({}, componentState.tRectx0x88.default, componentState.tRectx0x88?.[state.screenSize]));

 const tRectx0x89ComputedData = computed(() => _.merge({}, componentState.tRectx0x89.default, componentState.tRectx0x89?.[state.screenSize]));

 const tRectx0x90ComputedData = computed(() => _.merge({}, componentState.tRectx0x90.default, componentState.tRectx0x90?.[state.screenSize]));

 const tRectx0x91ComputedData = computed(() => _.merge({}, componentState.tRectx0x91.default, componentState.tRectx0x91?.[state.screenSize]));

 const tRectx0x92ComputedData = computed(() => _.merge({}, componentState.tRectx0x92.default, componentState.tRectx0x92?.[state.screenSize]));

 const tRollingNumberx0x93ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x93.default, componentState.tRollingNumberx0x93?.[state.screenSize]));

 const tRollingNumberx0x94ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x94.default, componentState.tRollingNumberx0x94?.[state.screenSize]));

 const tRollingNumberx0x95ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x95.default, componentState.tRollingNumberx0x95?.[state.screenSize]));

 const tRollingNumberx0x96ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x96.default, componentState.tRollingNumberx0x96?.[state.screenSize]));

 const tRollingNumberx0x97ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x97.default, componentState.tRollingNumberx0x97?.[state.screenSize]));

 const tRollingNumberx0x98ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x98.default, componentState.tRollingNumberx0x98?.[state.screenSize]));

 const tRollingNumberx0x99ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x99.default, componentState.tRollingNumberx0x99?.[state.screenSize]));

 const tRollingNumberx0x100ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x100.default, componentState.tRollingNumberx0x100?.[state.screenSize]));

 const tTextx0x101ComputedData = computed(() => _.merge({}, componentState.tTextx0x101.default, componentState.tTextx0x101?.[state.screenSize]));

 const tTextx0x102ComputedData = computed(() => _.merge({}, componentState.tTextx0x102.default, componentState.tTextx0x102?.[state.screenSize]));

 const tTextx0x103ComputedData = computed(() => _.merge({}, componentState.tTextx0x103.default, componentState.tTextx0x103?.[state.screenSize]));

 const tTextx0x104ComputedData = computed(() => _.merge({}, componentState.tTextx0x104.default, componentState.tTextx0x104?.[state.screenSize]));

 const tTextx0x105ComputedData = computed(() => _.merge({}, componentState.tTextx0x105.default, componentState.tTextx0x105?.[state.screenSize]));

 const tTextx0x106ComputedData = computed(() => _.merge({}, componentState.tTextx0x106.default, componentState.tTextx0x106?.[state.screenSize]));

 const tTextx0x107ComputedData = computed(() => _.merge({}, componentState.tTextx0x107.default, componentState.tTextx0x107?.[state.screenSize]));

 const tTextx0x108ComputedData = computed(() => _.merge({}, componentState.tTextx0x108.default, componentState.tTextx0x108?.[state.screenSize]));

 const tLinex0x109ComputedData = computed(() => _.merge({}, componentState.tLinex0x109.default, componentState.tLinex0x109?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tRowx0x3ComputedData,
tTextx0x3x0ComputedData,
tRollingNumberx0x3x1ComputedData,
tRowx0x4ComputedData,
tTextx0x4x0ComputedData,
tRollingNumberx0x4x1ComputedData,
tRowx0x5ComputedData,
tTextx0x5x0ComputedData,
tRollingNumberx0x5x1ComputedData,
tRowx0x6ComputedData,
tRollingNumberx0x6x0ComputedData,
tTextx0x7ComputedData,
tTextx0x8ComputedData,
tRectx0x9ComputedData,
tRollingNumberx0x10ComputedData,
tComponentx0x11ComputedData,
tComponentx0x12ComputedData,
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
tCirclex0x29ComputedData,
tCirclex0x30ComputedData,
tCirclex0x31ComputedData,
tCirclex0x32ComputedData,
tCirclex0x33ComputedData,
tCirclex0x34ComputedData,
tCirclex0x35ComputedData,
tCirclex0x36ComputedData,
tCirclex0x37ComputedData,
tCirclex0x38ComputedData,
tCirclex0x39ComputedData,
tCirclex0x40ComputedData,
tCirclex0x41ComputedData,
tCirclex0x42ComputedData,
tCirclex0x43ComputedData,
tCirclex0x44ComputedData,
tRectx0x45ComputedData,
tRectx0x46ComputedData,
tRectx0x47ComputedData,
tRectx0x48ComputedData,
tRectx0x49ComputedData,
tRectx0x50ComputedData,
tRectx0x51ComputedData,
tRectx0x52ComputedData,
tCirclex0x53ComputedData,
tCirclex0x54ComputedData,
tCirclex0x55ComputedData,
tCirclex0x56ComputedData,
tCirclex0x57ComputedData,
tCirclex0x58ComputedData,
tCirclex0x59ComputedData,
tCirclex0x60ComputedData,
tCirclex0x61ComputedData,
tCirclex0x62ComputedData,
tCirclex0x63ComputedData,
tCirclex0x64ComputedData,
tCirclex0x65ComputedData,
tCirclex0x66ComputedData,
tCirclex0x67ComputedData,
tCirclex0x68ComputedData,
tRectx0x69ComputedData,
tRectx0x70ComputedData,
tRectx0x71ComputedData,
tRectx0x72ComputedData,
tRectx0x73ComputedData,
tRectx0x74ComputedData,
tRectx0x75ComputedData,
tRectx0x76ComputedData,
tRectx0x77ComputedData,
tRectx0x78ComputedData,
tRectx0x79ComputedData,
tRectx0x80ComputedData,
tRectx0x81ComputedData,
tRectx0x82ComputedData,
tRectx0x83ComputedData,
tRectx0x84ComputedData,
tRectx0x85ComputedData,
tRectx0x86ComputedData,
tRectx0x87ComputedData,
tRectx0x88ComputedData,
tRectx0x89ComputedData,
tRectx0x90ComputedData,
tRectx0x91ComputedData,
tRectx0x92ComputedData,
tRollingNumberx0x93ComputedData,
tRollingNumberx0x94ComputedData,
tRollingNumberx0x95ComputedData,
tRollingNumberx0x96ComputedData,
tRollingNumberx0x97ComputedData,
tRollingNumberx0x98ComputedData,
tRollingNumberx0x99ComputedData,
tRollingNumberx0x100ComputedData,
tTextx0x101ComputedData,
tTextx0x102ComputedData,
tTextx0x103ComputedData,
tTextx0x104ComputedData,
tTextx0x105ComputedData,
tTextx0x106ComputedData,
tTextx0x107ComputedData,
tTextx0x108ComputedData,
tLinex0x109ComputedData,
};
},
};