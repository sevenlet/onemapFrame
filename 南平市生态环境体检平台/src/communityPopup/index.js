window.communityPopupComponent = {
template: 
`<div id="t-l-c-communityPopup" class="t-l-c-communityPopup" >` +
`<t-text id="t-text-f985.b33ef23e9" class="communityPopup-t-text-0-0"  :label="tTextx0x0ComputedData.label" :editable="tTextx0x0ComputedData.editable" :c-style="tTextx0x0ComputedData.cStyle">` +
`</t-text>` +
`<t-row id="t-row-9965.8fd4275ae" class="communityPopup-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align">` +
`<t-row id="t-row-76f5.e5c559c37" class="communityPopup-t-row-0-1-1"  :c-style="tRowx0x1x1ComputedData.cStyle" :gutter="tRowx0x1x1ComputedData.gutter" :justify="tRowx0x1x1ComputedData.justify" :align="tRowx0x1x1ComputedData.align">` +
`<t-col id="t-col-1c76.883c07226" class="communityPopup-t-col-0-1-1-0"  :span="tColx0x1x1x0ComputedData.span" :offset="tColx0x1x1x0ComputedData.offset" :push="tColx0x1x1x0ComputedData.push" :pull="tColx0x1x1x0ComputedData.pull" :c-style="tColx0x1x1x0ComputedData.cStyle">` +
`<t-text id="t-text-4814.5352a3d92" class="communityPopup-t-text-0-1-1-0-0"  :label="tTextx0x1x1x0x0ComputedData.label" :editable="tTextx0x1x1x0x0ComputedData.editable" :c-style="tTextx0x1x1x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-30b5.ce97c0624" class="communityPopup-t-col-0-1-1-1"  :span="tColx0x1x1x1ComputedData.span" :offset="tColx0x1x1x1ComputedData.offset" :push="tColx0x1x1x1ComputedData.push" :pull="tColx0x1x1x1ComputedData.pull" :c-style="tColx0x1x1x1ComputedData.cStyle">` +
`<t-text id="t-text-a6a0.97f9fae7b" class="communityPopup-t-text-0-1-1-1-0"  :label="replaceCssVariables(filterData(state.baseInfo.POINT_NAME, componentPropBindingMap?.['t-text-a6a0.97f9fae7b']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x1x1x0ComputedData.editable" :c-style="tTextx0x1x1x1x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-66bb.b894f1d0a" class="communityPopup-t-col-0-1-1-2"  :span="tColx0x1x1x2ComputedData.span" :offset="tColx0x1x1x2ComputedData.offset" :push="tColx0x1x1x2ComputedData.push" :pull="tColx0x1x1x2ComputedData.pull" :c-style="tColx0x1x1x2ComputedData.cStyle">` +
`<t-text id="t-text-70a5.c8a261cab" class="communityPopup-t-text-0-1-1-2-0"  :label="tTextx0x1x1x2x0ComputedData.label" :editable="tTextx0x1x1x2x0ComputedData.editable" :c-style="tTextx0x1x1x2x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-5e7c.b410e5d21" class="communityPopup-t-col-0-1-1-3"  :span="tColx0x1x1x3ComputedData.span" :offset="tColx0x1x1x3ComputedData.offset" :push="tColx0x1x1x3ComputedData.push" :pull="tColx0x1x1x3ComputedData.pull" :c-style="tColx0x1x1x3ComputedData.cStyle">` +
`<t-text id="t-text-3cee.4354210c7" class="communityPopup-t-text-0-1-1-3-0"  :label="replaceCssVariables(filterData(state.baseInfo.POINT_TYPE, componentPropBindingMap?.['t-text-3cee.4354210c7']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x1x3x0ComputedData.editable" :c-style="tTextx0x1x1x3x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-0198.f9ea460b4" class="communityPopup-t-row-0-1-2"  :c-style="tRowx0x1x2ComputedData.cStyle" :gutter="tRowx0x1x2ComputedData.gutter" :justify="tRowx0x1x2ComputedData.justify" :align="tRowx0x1x2ComputedData.align">` +
`<t-col id="t-col-d9a7.a7a1f8be2" class="communityPopup-t-col-0-1-2-0"  :span="tColx0x1x2x0ComputedData.span" :offset="tColx0x1x2x0ComputedData.offset" :push="tColx0x1x2x0ComputedData.push" :pull="tColx0x1x2x0ComputedData.pull" :c-style="tColx0x1x2x0ComputedData.cStyle">` +
`<t-text id="t-text-5409.8e85e8f0e" class="communityPopup-t-text-0-1-2-0-0"  :label="tTextx0x1x2x0x0ComputedData.label" :editable="tTextx0x1x2x0x0ComputedData.editable" :c-style="tTextx0x1x2x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-643f.fe79b4627" class="communityPopup-t-col-0-1-2-1"  :span="tColx0x1x2x1ComputedData.span" :offset="tColx0x1x2x1ComputedData.offset" :push="tColx0x1x2x1ComputedData.push" :pull="tColx0x1x2x1ComputedData.pull" :c-style="tColx0x1x2x1ComputedData.cStyle">` +
`<t-text id="t-text-2fae.5c8ce3d98" class="communityPopup-t-text-0-1-2-1-0"  :label="replaceCssVariables(filterData(state.baseInfo.STREET_NAME, componentPropBindingMap?.['t-text-2fae.5c8ce3d98']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x2x1x0ComputedData.editable" :c-style="tTextx0x1x2x1x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-880a.60be2019e" class="communityPopup-t-row-0-1-7"  :c-style="tRowx0x1x7ComputedData.cStyle" :gutter="tRowx0x1x7ComputedData.gutter" :justify="tRowx0x1x7ComputedData.justify" :align="tRowx0x1x7ComputedData.align">` +
`<t-component id="t-component-f1b6.eea8cbe5c" class="communityPopup-t-component-0-1-7-0"  :name="tComponentx0x1x7x0ComputedData.name" :loading="tComponentx0x1x7x0ComputedData.loading" :c-style="tComponentx0x1x7x0ComputedData.cStyle" :src="tComponentx0x1x7x0ComputedData.src" :component-name="tComponentx0x1x7x0ComputedData.componentName" :page-id="tComponentx0x1x7x0ComputedData.pageId" :page-code="tComponentx0x1x7x0ComputedData.pageCode">` +
`</t-component>` +
`<t-text id="t-text-33e3.e263b5112" class="communityPopup-t-text-0-1-7-1"  :label="tTextx0x1x7x1ComputedData.label" :editable="tTextx0x1x7x1ComputedData.editable" :c-style="tTextx0x1x7x1ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`<t-row id="t-row-3c89.bf86a28fa" class="communityPopup-t-row-0-1-8"  :c-style="tRowx0x1x8ComputedData.cStyle" :gutter="tRowx0x1x8ComputedData.gutter" :justify="tRowx0x1x8ComputedData.justify" :align="tRowx0x1x8ComputedData.align">` +
`<t-col id="t-col-60a3.51dcda442" class="communityPopup-t-col-0-1-8-0"  :span="tColx0x1x8x0ComputedData.span" :offset="tColx0x1x8x0ComputedData.offset" :push="tColx0x1x8x0ComputedData.push" :pull="tColx0x1x8x0ComputedData.pull" :c-style="tColx0x1x8x0ComputedData.cStyle">` +
`<t-text id="t-text-07d4.beb80e4f4" class="communityPopup-t-text-0-1-8-0-0"  :label="tTextx0x1x8x0x0ComputedData.label" :editable="tTextx0x1x8x0x0ComputedData.editable" :c-style="tTextx0x1x8x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-f671.fd627d97b" class="communityPopup-t-col-0-1-8-1"  :span="tColx0x1x8x1ComputedData.span" :offset="tColx0x1x8x1ComputedData.offset" :push="tColx0x1x8x1ComputedData.push" :pull="tColx0x1x8x1ComputedData.pull" :c-style="tColx0x1x8x1ComputedData.cStyle">` +
`<t-text id="t-text-3429.b07b278c" class="communityPopup-t-text-0-1-8-1-0"  :label="replaceCssVariables(filterData(state.baseInfo.CX_PERSON_NAME, componentPropBindingMap?.['t-text-3429.b07b278c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x8x1x0ComputedData.editable" :c-style="tTextx0x1x8x1x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-3c1a.9a02c2948" class="communityPopup-t-col-0-1-8-2"  :span="tColx0x1x8x2ComputedData.span" :offset="tColx0x1x8x2ComputedData.offset" :push="tColx0x1x8x2ComputedData.push" :pull="tColx0x1x8x2ComputedData.pull" :c-style="tColx0x1x8x2ComputedData.cStyle">` +
`<t-text id="t-text-e399.b17912281" class="communityPopup-t-text-0-1-8-2-0"  :label="tTextx0x1x8x2x0ComputedData.label" :editable="tTextx0x1x8x2x0ComputedData.editable" :c-style="tTextx0x1x8x2x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-2712.9302e0a19" class="communityPopup-t-col-0-1-8-3"  :span="tColx0x1x8x3ComputedData.span" :offset="tColx0x1x8x3ComputedData.offset" :push="tColx0x1x8x3ComputedData.push" :pull="tColx0x1x8x3ComputedData.pull" :c-style="tColx0x1x8x3ComputedData.cStyle">` +
`<t-text id="t-text-3dcc.f5e7546a8" class="communityPopup-t-text-0-1-8-3-0"  :label="replaceCssVariables(filterData(state.baseInfo.CX_PHONE_NUMBER, componentPropBindingMap?.['t-text-3dcc.f5e7546a8']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x8x3x0ComputedData.editable" :c-style="tTextx0x1x8x3x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-c626.55df77ed6" class="communityPopup-t-row-0-1-9"  :c-style="tRowx0x1x9ComputedData.cStyle" :gutter="tRowx0x1x9ComputedData.gutter" :justify="tRowx0x1x9ComputedData.justify" :align="tRowx0x1x9ComputedData.align">` +
`<t-col id="t-col-5770.ee7c8dc08" class="communityPopup-t-col-0-1-9-0"  :span="tColx0x1x9x0ComputedData.span" :offset="tColx0x1x9x0ComputedData.offset" :push="tColx0x1x9x0ComputedData.push" :pull="tColx0x1x9x0ComputedData.pull" :c-style="tColx0x1x9x0ComputedData.cStyle">` +
`<t-text id="t-text-2379.54395e1b8" class="communityPopup-t-text-0-1-9-0-0"  :label="tTextx0x1x9x0x0ComputedData.label" :editable="tTextx0x1x9x0x0ComputedData.editable" :c-style="tTextx0x1x9x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-9d08.9d9e00bc" class="communityPopup-t-col-0-1-9-1"  :span="tColx0x1x9x1ComputedData.span" :offset="tColx0x1x9x1ComputedData.offset" :push="tColx0x1x9x1ComputedData.push" :pull="tColx0x1x9x1ComputedData.pull" :c-style="tColx0x1x9x1ComputedData.cStyle">` +
`<t-text id="t-text-6e66.7a01ae098" class="communityPopup-t-text-0-1-9-1-0"  :label="replaceCssVariables(filterData(state.baseInfo.CJ_PERSON_NAME, componentPropBindingMap?.['t-text-6e66.7a01ae098']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x9x1x0ComputedData.editable" :c-style="tTextx0x1x9x1x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-da65.302d8f07" class="communityPopup-t-col-0-1-9-2"  :span="tColx0x1x9x2ComputedData.span" :offset="tColx0x1x9x2ComputedData.offset" :push="tColx0x1x9x2ComputedData.push" :pull="tColx0x1x9x2ComputedData.pull" :c-style="tColx0x1x9x2ComputedData.cStyle">` +
`<t-text id="t-text-51f7.eddbf8ac6" class="communityPopup-t-text-0-1-9-2-0"  :label="tTextx0x1x9x2x0ComputedData.label" :editable="tTextx0x1x9x2x0ComputedData.editable" :c-style="tTextx0x1x9x2x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-4ec7.df5176133" class="communityPopup-t-col-0-1-9-3"  :span="tColx0x1x9x3ComputedData.span" :offset="tColx0x1x9x3ComputedData.offset" :push="tColx0x1x9x3ComputedData.push" :pull="tColx0x1x9x3ComputedData.pull" :c-style="tColx0x1x9x3ComputedData.cStyle">` +
`<t-text id="t-text-b93c.fb86e5f0a" class="communityPopup-t-text-0-1-9-3-0"  :label="replaceCssVariables(filterData(state.baseInfo.CJ_PHONE_NUMBER, componentPropBindingMap?.['t-text-b93c.fb86e5f0a']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x9x3x0ComputedData.editable" :c-style="tTextx0x1x9x3x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-08d9.383138cdf" class="communityPopup-t-row-0-1-10"  :c-style="tRowx0x1x10ComputedData.cStyle" :gutter="tRowx0x1x10ComputedData.gutter" :justify="tRowx0x1x10ComputedData.justify" :align="tRowx0x1x10ComputedData.align">` +
`<t-component id="t-component-7e9e.c651fe2bd" class="communityPopup-t-component-0-1-10-0"  :name="tComponentx0x1x10x0ComputedData.name" :loading="tComponentx0x1x10x0ComputedData.loading" :c-style="tComponentx0x1x10x0ComputedData.cStyle" :src="tComponentx0x1x10x0ComputedData.src" :component-name="tComponentx0x1x10x0ComputedData.componentName" :page-id="tComponentx0x1x10x0ComputedData.pageId" :page-code="tComponentx0x1x10x0ComputedData.pageCode">` +
`</t-component>` +
`<t-text id="t-text-77aa.69f38554" class="communityPopup-t-text-0-1-10-1"  :label="tTextx0x1x10x1ComputedData.label" :editable="tTextx0x1x10x1ComputedData.editable" :c-style="tTextx0x1x10x1ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`<t-row id="t-row-fbdf.d5eaeda3" class="communityPopup-t-row-0-1-11"  :c-style="tRowx0x1x11ComputedData.cStyle" :gutter="tRowx0x1x11ComputedData.gutter" :justify="tRowx0x1x11ComputedData.justify" :align="tRowx0x1x11ComputedData.align">` +
`<t-col id="t-col-fafd.4fa573ea" class="communityPopup-t-col-0-1-11-0"  :span="tColx0x1x11x0ComputedData.span" :offset="tColx0x1x11x0ComputedData.offset" :push="tColx0x1x11x0ComputedData.push" :pull="tColx0x1x11x0ComputedData.pull" :c-style="tColx0x1x11x0ComputedData.cStyle">` +
`<t-text id="t-text-820b.e6fe23228" class="communityPopup-t-text-0-1-11-0-0"  :label="tTextx0x1x11x0x0ComputedData.label" :editable="tTextx0x1x11x0x0ComputedData.editable" :c-style="tTextx0x1x11x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-8306.660811606" class="communityPopup-t-col-0-1-11-1"  :span="tColx0x1x11x1ComputedData.span" :offset="tColx0x1x11x1ComputedData.offset" :push="tColx0x1x11x1ComputedData.push" :pull="tColx0x1x11x1ComputedData.pull" :c-style="tColx0x1x11x1ComputedData.cStyle">` +
`<t-text id="t-text-01df.bf66362a2" class="communityPopup-t-text-0-1-11-1-0"  :label="replaceCssVariables(filterData(state.baseInfo.CX_FACILITY_PERSON_NAME, componentPropBindingMap?.['t-text-01df.bf66362a2']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x11x1x0ComputedData.editable" :c-style="tTextx0x1x11x1x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-a4f2.c9a03b0a6" class="communityPopup-t-col-0-1-11-2"  :span="tColx0x1x11x2ComputedData.span" :offset="tColx0x1x11x2ComputedData.offset" :push="tColx0x1x11x2ComputedData.push" :pull="tColx0x1x11x2ComputedData.pull" :c-style="tColx0x1x11x2ComputedData.cStyle">` +
`<t-text id="t-text-79a0.9dd31d8a4" class="communityPopup-t-text-0-1-11-2-0"  :label="tTextx0x1x11x2x0ComputedData.label" :editable="tTextx0x1x11x2x0ComputedData.editable" :c-style="tTextx0x1x11x2x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-c30c.2224c5c0a" class="communityPopup-t-col-0-1-11-3"  :span="tColx0x1x11x3ComputedData.span" :offset="tColx0x1x11x3ComputedData.offset" :push="tColx0x1x11x3ComputedData.push" :pull="tColx0x1x11x3ComputedData.pull" :c-style="tColx0x1x11x3ComputedData.cStyle">` +
`<t-text id="t-text-cc7b.ff059fb43" class="communityPopup-t-text-0-1-11-3-0"  :label="replaceCssVariables(filterData(state.baseInfo.CX_FACILITY_PHONE_NUMBER, componentPropBindingMap?.['t-text-cc7b.ff059fb43']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x11x3x0ComputedData.editable" :c-style="tTextx0x1x11x3x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-27a6.76fcd3006" class="communityPopup-t-row-0-1-12"  :c-style="tRowx0x1x12ComputedData.cStyle" :gutter="tRowx0x1x12ComputedData.gutter" :justify="tRowx0x1x12ComputedData.justify" :align="tRowx0x1x12ComputedData.align">` +
`<t-col id="t-col-0f82.d1c64f0c" class="communityPopup-t-col-0-1-12-0"  :span="tColx0x1x12x0ComputedData.span" :offset="tColx0x1x12x0ComputedData.offset" :push="tColx0x1x12x0ComputedData.push" :pull="tColx0x1x12x0ComputedData.pull" :c-style="tColx0x1x12x0ComputedData.cStyle">` +
`<t-text id="t-text-839d.1a567f68f" class="communityPopup-t-text-0-1-12-0-0"  :label="tTextx0x1x12x0x0ComputedData.label" :editable="tTextx0x1x12x0x0ComputedData.editable" :c-style="tTextx0x1x12x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-dcef.25304af0a" class="communityPopup-t-col-0-1-12-1"  :span="tColx0x1x12x1ComputedData.span" :offset="tColx0x1x12x1ComputedData.offset" :push="tColx0x1x12x1ComputedData.push" :pull="tColx0x1x12x1ComputedData.pull" :c-style="tColx0x1x12x1ComputedData.cStyle">` +
`<t-text id="t-text-38f1.22b33e6ce" class="communityPopup-t-text-0-1-12-1-0"  :label="replaceCssVariables(filterData(state.baseInfo.CJ_FACILITY_PERSON_NAME, componentPropBindingMap?.['t-text-38f1.22b33e6ce']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x12x1x0ComputedData.editable" :c-style="tTextx0x1x12x1x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-4ba9.220375aac" class="communityPopup-t-col-0-1-12-2"  :span="tColx0x1x12x2ComputedData.span" :offset="tColx0x1x12x2ComputedData.offset" :push="tColx0x1x12x2ComputedData.push" :pull="tColx0x1x12x2ComputedData.pull" :c-style="tColx0x1x12x2ComputedData.cStyle">` +
`<t-text id="t-text-0201.03dd9203e" class="communityPopup-t-text-0-1-12-2-0"  :label="tTextx0x1x12x2x0ComputedData.label" :editable="tTextx0x1x12x2x0ComputedData.editable" :c-style="tTextx0x1x12x2x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-c98e.2fe192e4e" class="communityPopup-t-col-0-1-12-3"  :span="tColx0x1x12x3ComputedData.span" :offset="tColx0x1x12x3ComputedData.offset" :push="tColx0x1x12x3ComputedData.push" :pull="tColx0x1x12x3ComputedData.pull" :c-style="tColx0x1x12x3ComputedData.cStyle">` +
`<t-text id="t-text-f5fc.a68cdeece" class="communityPopup-t-text-0-1-12-3-0"  :label="replaceCssVariables(filterData(state.baseInfo.CJ_FACILITY_PHONE_NUMBER, componentPropBindingMap?.['t-text-f5fc.a68cdeece']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x12x3x0ComputedData.editable" :c-style="tTextx0x1x12x3x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-97fa.e3ebf6032" class="communityPopup-t-row-0-1-13"  :c-style="tRowx0x1x13ComputedData.cStyle" :gutter="tRowx0x1x13ComputedData.gutter" :justify="tRowx0x1x13ComputedData.justify" :align="tRowx0x1x13ComputedData.align">` +
`<t-component id="t-component-2018.90a3b267c" class="communityPopup-t-component-0-1-13-0"  :name="tComponentx0x1x13x0ComputedData.name" :loading="tComponentx0x1x13x0ComputedData.loading" :c-style="tComponentx0x1x13x0ComputedData.cStyle" :src="tComponentx0x1x13x0ComputedData.src" :component-name="tComponentx0x1x13x0ComputedData.componentName" :page-id="tComponentx0x1x13x0ComputedData.pageId" :page-code="tComponentx0x1x13x0ComputedData.pageCode">` +
`</t-component>` +
`<t-text id="t-text-419c.4a32dda7e" class="communityPopup-t-text-0-1-13-1"  :label="tTextx0x1x13x1ComputedData.label" :editable="tTextx0x1x13x1ComputedData.editable" :c-style="tTextx0x1x13x1ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`<t-row id="t-row-0ab7.4cea41b64" class="communityPopup-t-row-0-1-14"  :c-style="tRowx0x1x14ComputedData.cStyle" :gutter="tRowx0x1x14ComputedData.gutter" :justify="tRowx0x1x14ComputedData.justify" :align="tRowx0x1x14ComputedData.align">` +
`<t-component id="t-component-f576.d53d877e8" class="communityPopup-t-component-0-1-14-0"  :name="tComponentx0x1x14x0ComputedData.name" :loading="tComponentx0x1x14x0ComputedData.loading" :c-style="tComponentx0x1x14x0ComputedData.cStyle" :src="tComponentx0x1x14x0ComputedData.src" :component-name="tComponentx0x1x14x0ComputedData.componentName" :page-id="tComponentx0x1x14x0ComputedData.pageId" :page-code="tComponentx0x1x14x0ComputedData.pageCode">` +
`</t-component>` +
`</t-row>` +
`</t-row>` +
`<t-row id="t-row-844b.1149f96a" class="communityPopup-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align">` +
`<t-text id="t-text-563f.2e2f40e3" class="communityPopup-t-text-0-2-0"  :label="tTextx0x2x0ComputedData.label" :editable="tTextx0x2x0ComputedData.editable" :c-style="tTextx0x2x0ComputedData.cStyle" @click="onclick1770000202227">` +
`</t-text>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-text-f985.b33ef23e9":{"attributeName":"tTextx0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-9965.8fd4275ae":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-row-1824.fce5a7044":{"attributeName":"tRowx0x1x0"},"t-row-76f5.e5c559c37":{"attributeName":"tRowx0x1x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-1c76.883c07226":{"attributeName":"tColx0x1x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-4814.5352a3d92":{"attributeName":"tTextx0x1x1x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-30b5.ce97c0624":{"attributeName":"tColx0x1x1x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a6a0.97f9fae7b":{"attributeName":"tTextx0x1x1x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-66bb.b894f1d0a":{"attributeName":"tColx0x1x1x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-70a5.c8a261cab":{"attributeName":"tTextx0x1x1x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-5e7c.b410e5d21":{"attributeName":"tColx0x1x1x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3cee.4354210c7":{"attributeName":"tTextx0x1x1x3x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-0198.f9ea460b4":{"attributeName":"tRowx0x1x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-d9a7.a7a1f8be2":{"attributeName":"tColx0x1x2x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-5409.8e85e8f0e":{"attributeName":"tTextx0x1x2x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8142.44b2faeda":{"attributeName":"tTextx0x1x2x0x1"},"t-col-643f.fe79b4627":{"attributeName":"tColx0x1x2x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-2fae.5c8ce3d98":{"attributeName":"tTextx0x1x2x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-5446.2b6277c62":{"attributeName":"tTextx0x1x2x1x1"},"t-col-42bb.d6e58437a":{"attributeName":"tColx0x1x2x2"},"t-col-3dd6.0a56c8b2f":{"attributeName":"tColx0x1x2x3"},"t-row-03a8.697d246ce":{"attributeName":"tRowx0x1x3"},"t-row-3649.6c75f18a9":{"attributeName":"tRowx0x1x4"},"t-row-b73d.68f072fd2":{"attributeName":"tRowx0x1x5"},"t-row-71e5.eb2f2d09":{"attributeName":"tRowx0x1x6"},"t-row-880a.60be2019e":{"attributeName":"tRowx0x1x7","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-component-f1b6.eea8cbe5c":{"attributeName":"tComponentx0x1x7x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-33e3.e263b5112":{"attributeName":"tTextx0x1x7x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-3c89.bf86a28fa":{"attributeName":"tRowx0x1x8","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-60a3.51dcda442":{"attributeName":"tColx0x1x8x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-07d4.beb80e4f4":{"attributeName":"tTextx0x1x8x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-f671.fd627d97b":{"attributeName":"tColx0x1x8x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3429.b07b278c":{"attributeName":"tTextx0x1x8x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-3c1a.9a02c2948":{"attributeName":"tColx0x1x8x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e399.b17912281":{"attributeName":"tTextx0x1x8x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-2712.9302e0a19":{"attributeName":"tColx0x1x8x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3dcc.f5e7546a8":{"attributeName":"tTextx0x1x8x3x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-c626.55df77ed6":{"attributeName":"tRowx0x1x9","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-5770.ee7c8dc08":{"attributeName":"tColx0x1x9x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-2379.54395e1b8":{"attributeName":"tTextx0x1x9x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-9d08.9d9e00bc":{"attributeName":"tColx0x1x9x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6e66.7a01ae098":{"attributeName":"tTextx0x1x9x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-da65.302d8f07":{"attributeName":"tColx0x1x9x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-51f7.eddbf8ac6":{"attributeName":"tTextx0x1x9x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-4ec7.df5176133":{"attributeName":"tColx0x1x9x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-b93c.fb86e5f0a":{"attributeName":"tTextx0x1x9x3x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-08d9.383138cdf":{"attributeName":"tRowx0x1x10","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-component-7e9e.c651fe2bd":{"attributeName":"tComponentx0x1x10x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-77aa.69f38554":{"attributeName":"tTextx0x1x10x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-fbdf.d5eaeda3":{"attributeName":"tRowx0x1x11","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-fafd.4fa573ea":{"attributeName":"tColx0x1x11x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-820b.e6fe23228":{"attributeName":"tTextx0x1x11x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-8306.660811606":{"attributeName":"tColx0x1x11x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-01df.bf66362a2":{"attributeName":"tTextx0x1x11x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-a4f2.c9a03b0a6":{"attributeName":"tColx0x1x11x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-79a0.9dd31d8a4":{"attributeName":"tTextx0x1x11x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-c30c.2224c5c0a":{"attributeName":"tColx0x1x11x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-cc7b.ff059fb43":{"attributeName":"tTextx0x1x11x3x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-27a6.76fcd3006":{"attributeName":"tRowx0x1x12","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-0f82.d1c64f0c":{"attributeName":"tColx0x1x12x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-839d.1a567f68f":{"attributeName":"tTextx0x1x12x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-dcef.25304af0a":{"attributeName":"tColx0x1x12x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-38f1.22b33e6ce":{"attributeName":"tTextx0x1x12x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-4ba9.220375aac":{"attributeName":"tColx0x1x12x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-0201.03dd9203e":{"attributeName":"tTextx0x1x12x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-c98e.2fe192e4e":{"attributeName":"tColx0x1x12x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-f5fc.a68cdeece":{"attributeName":"tTextx0x1x12x3x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-97fa.e3ebf6032":{"attributeName":"tRowx0x1x13","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-component-2018.90a3b267c":{"attributeName":"tComponentx0x1x13x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-419c.4a32dda7e":{"attributeName":"tTextx0x1x13x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-0ab7.4cea41b64":{"attributeName":"tRowx0x1x14","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-component-f576.d53d877e8":{"attributeName":"tComponentx0x1x14x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-row-844b.1149f96a":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-563f.2e2f40e3":{"attributeName":"tTextx0x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   baseInfo: {"POINT_NAME":"--","POINT_TYPE":"--","DISTRICT_NAME":"--","STREET_NAME":"--","COMMUNITY_ADDR":"--","RESPONSIBLE_PERSON":"--","CONTACT_PHONE":"--","FACILITY_NAME":"-","FACILITY_PERSON":"-","FACILITY_PHONE":"-","CX_FACILITY_PERSON_NAME":"","CX_FACILITY_PHONE_NUMBER":"","CJ_FACILITY_PERSON_NAME":"","CJ_FACILITY_PHONE_NUMBER":"","id":"","CX_PERSON_NAME":"","CX_PHONE_NUMBER":"","CJ_PERSON_NAME":"","CJ_PHONE_NUMBER":""},
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
tTextx0x0: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"54px","top":"24px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"基本信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"54px","top":"24px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"96%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"2%","top":"16px","flexDirection":"row","gap":"5px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"96%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"2%","top":"16px","flexDirection":"row","gap":"5px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tRowx0x1x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"20px","top":"48px","gap":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"20px","top":"48px","gap":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x1x0: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px"}}}, 
 },
},
tTextx0x1x1x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"20px","top":"47px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"名称",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"20px","top":"47px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x1x1x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px"}}}, 
 },
},
tTextx0x1x1x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"142px","top":"47px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"142px","top":"47px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tColx0x1x1x2: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tTextx0x1x1x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"499px","top":"47px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"类型",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"499px","top":"47px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x1x1x3: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px"}}}, 
 },
},
tTextx0x1x1x3x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"621px","top":"47px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"621px","top":"47px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tRowx0x1x2: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"35px","top":"58px","gap":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"35px","top":"58px","gap":"0px","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x2x0: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"10px","top":"10px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"10px","top":"10px"}}}, 
 },
},
tTextx0x1x2x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"509px","top":"57px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"所属街道",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"509px","top":"57px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x1x2x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"10px","top":"10px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"10px","top":"10px"}}}, 
 },
},
tTextx0x1x2x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"631px","top":"57px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"631px","top":"57px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tRowx0x1x7: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"center","alignItems":"center","marginTop":"10px","animationName":"","left":"383px","top":"-204px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"center","alignItems":"center","marginTop":"10px","animationName":"","left":"383px","top":"-204px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tComponentx0x1x7x0: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","animationName":"","left":"94px","top":"-255px"},
            
            },
 default: { 
 
name:"dialogTitleFirstBgFitContentComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","animationName":"","left":"94px","top":"-255px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgFitContent",
componentName:"dialogTitleFirstBgFitContentComponent",
pageId:"4a771aa2e57b4c9c9941c4c366f732b1",
pageCode:"dialogTitleFirstBgFitContent", 
 },
},
tTextx0x1x7x1: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"absolute","left":"60px","top":"90px","zIndex":"999","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px","textAlign":"left"},
            
            },
 default: { 
 
label:"区域负责人",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"absolute","left":"60px","top":"90px","zIndex":"999","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px","textAlign":"left"}}}, 
 },
},
tRowx0x1x8: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"75px","top":"98px","gap":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"75px","top":"98px","gap":"0px","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x8x0: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"50px","top":"50px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"50px","top":"50px"}}}, 
 },
},
tTextx0x1x8x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"70px","top":"97px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"除夕值班人员",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"70px","top":"97px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x1x8x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"50px","top":"50px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"50px","top":"50px"}}}, 
 },
},
tTextx0x1x8x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"192px","top":"97px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"192px","top":"97px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tColx0x1x8x2: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"50px","top":"50px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"50px","top":"50px"}}}, 
 },
},
tTextx0x1x8x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"549px","top":"97px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"值班联系方式",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"549px","top":"97px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x1x8x3: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","animationName":"","left":"50px","top":"50px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","animationName":"","left":"50px","top":"50px"}}}, 
 },
},
tTextx0x1x8x3x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"671px","top":"97px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"671px","top":"97px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tRowx0x1x9: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"85px","top":"108px","gap":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"85px","top":"108px","gap":"0px","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x9x0: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"60px","top":"60px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"60px","top":"60px"}}}, 
 },
},
tTextx0x1x9x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"80px","top":"107px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"春节值班人员",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"80px","top":"107px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x1x9x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"60px","top":"60px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"60px","top":"60px"}}}, 
 },
},
tTextx0x1x9x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"202px","top":"107px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"202px","top":"107px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tColx0x1x9x2: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"60px","top":"60px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"60px","top":"60px"}}}, 
 },
},
tTextx0x1x9x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"559px","top":"107px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"值班联系方式",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"559px","top":"107px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x1x9x3: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","animationName":"","left":"60px","top":"60px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","animationName":"","left":"60px","top":"60px"}}}, 
 },
},
tTextx0x1x9x3x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"681px","top":"107px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"681px","top":"107px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tRowx0x1x10: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"center","alignItems":"center","marginTop":"10px","animationName":"","left":"393px","top":"-194px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"center","alignItems":"center","marginTop":"10px","animationName":"","left":"393px","top":"-194px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tComponentx0x1x10x0: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","animationName":"","left":"104px","top":"-245px"},
            
            },
 default: { 
 
name:"dialogTitleFirstBgFitContentComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","animationName":"","left":"104px","top":"-245px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgFitContent",
componentName:"dialogTitleFirstBgFitContentComponent",
pageId:"4a771aa2e57b4c9c9941c4c366f732b1",
pageCode:"dialogTitleFirstBgFitContent", 
 },
},
tTextx0x1x10x1: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"absolute","left":"60px","top":"206px","zIndex":"999","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px","textAlign":"left"},
            
            },
 default: { 
 
label:"物业负责人",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"absolute","left":"60px","top":"206px","zIndex":"999","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px","textAlign":"left"}}}, 
 },
},
tRowx0x1x11: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"95px","top":"118px","gap":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"95px","top":"118px","gap":"0px","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x11x0: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"70px","top":"70px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"70px","top":"70px"}}}, 
 },
},
tTextx0x1x11x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"90px","top":"117px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"除夕物业负责人",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"90px","top":"117px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x1x11x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"70px","top":"70px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"70px","top":"70px"}}}, 
 },
},
tTextx0x1x11x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"212px","top":"117px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"212px","top":"117px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tColx0x1x11x2: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"70px","top":"70px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"70px","top":"70px"}}}, 
 },
},
tTextx0x1x11x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"569px","top":"117px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"值班联系方式",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"569px","top":"117px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x1x11x3: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","animationName":"","left":"70px","top":"70px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","animationName":"","left":"70px","top":"70px"}}}, 
 },
},
tTextx0x1x11x3x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"691px","top":"117px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"691px","top":"117px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tRowx0x1x12: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"85px","top":"108px","gap":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"85px","top":"108px","gap":"0px","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x12x0: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"60px","top":"60px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","gap":"unset","marginRight":"0px","paddingRight":"0px","animationName":"","left":"60px","top":"60px"}}}, 
 },
},
tTextx0x1x12x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"80px","top":"107px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"初一物业负责人",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"80px","top":"107px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x1x12x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"60px","top":"60px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","paddingRight":"5px","animationName":"","left":"60px","top":"60px"}}}, 
 },
},
tTextx0x1x12x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"202px","top":"107px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"202px","top":"107px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tColx0x1x12x2: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"60px","top":"60px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"60px","top":"60px"}}}, 
 },
},
tTextx0x1x12x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"559px","top":"107px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""},
            
            },
 default: { 
 
label:"值班联系方式",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"559px","top":"107px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"var(--text-size-14)","animationName":""}}}, 
 },
},
tColx0x1x12x3: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","animationName":"","left":"60px","top":"60px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"5px","animationName":"","left":"60px","top":"60px"}}}, 
 },
},
tTextx0x1x12x3x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"681px","top":"107px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","color":"var(--t-white)","position":"unset","left":"681px","top":"107px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"var(--text-size-14)","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px","textAlign":"left"}}}, 
 },
},
tRowx0x1x13: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"center","alignItems":"center","marginTop":"10px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"center","alignItems":"center","marginTop":"10px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tComponentx0x1x13x0: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto"},
            
            },
 default: { 
 
name:"dialogTitleFirstBgFitContentComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgFitContent",
componentName:"dialogTitleFirstBgFitContentComponent",
pageId:"4a771aa2e57b4c9c9941c4c366f732b1",
pageCode:"dialogTitleFirstBgFitContent", 
 },
},
tTextx0x1x13x1: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"absolute","left":"60px","top":"324px","zIndex":"999","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px","textAlign":"left"},
            
            },
 default: { 
 
label:"巡查情况",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"absolute","left":"60px","top":"324px","zIndex":"999","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px","textAlign":"left"}}}, 
 },
},
tRowx0x1x14: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"85px","top":"108px","gap":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"85px","top":"108px","gap":"0px","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tComponentx0x1x14x0: {
defaultStyle: {
            default: {"width":"100%","height":"450px","margin":"0 auto","position":"unset","left":"2px","top":"302px"},
            
            },
 default: { 
 
name:"yhbzInspectionsituationComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"100%","height":"450px","margin":"0 auto","position":"unset","left":"2px","top":"302px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/yhbzInspectionsituation",
componentName:"yhbzInspectionsituationComponent",
pageId:"14e75bc90d2541e88c31ece242e613d7",
pageCode:"yhbzInspectionsituation", 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"46px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"calc(100% - 46px)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","paddingRight":"20px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"46px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"calc(100% - 46px)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","paddingRight":"20px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x2x0: {
defaultStyle: {
            default: {"width":"101px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"427px","top":"278px","cursor":"pointer","animationName":"","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/8b5a25d0ae5647d4ac7e737d98fb0b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"12px 50%","-webkit-mask-position":"","paddingLeft":"30px","marginLeft":"20px"},
            
            },
 default: { 
 
label:"远程调度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"101px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"427px","top":"278px","cursor":"pointer","animationName":"","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/8b5a25d0ae5647d4ac7e737d98fb0b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"12px 50%","-webkit-mask-position":"","paddingLeft":"30px","marginLeft":"20px"},"hover":{"backgroundColor":"var(--business-show-bg50)"}},"title":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}}}, 
 },
},
});
const initPage = () => {
console.log(global.businessDialog.dialogParmas, 'test');
Object.keys(state.baseInfo).forEach((key) => {
  state.baseInfo[key] = global.businessDialog.dialogParmas?.[key] || '-';
});

};
const onclick1770000202227 = () => {
// 执行自定义方法
openWX();
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-communityPopup', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-communityPopup', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTextx0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0.default, componentState.tTextx0x0?.[state.screenSize]));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tRowx0x1x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x1.default, componentState.tRowx0x1x1?.[state.screenSize]));

 const tColx0x1x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x0.default, componentState.tColx0x1x1x0?.[state.screenSize]));

 const tTextx0x1x1x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x1x0x0.default, componentState.tTextx0x1x1x0x0?.[state.screenSize]));

 const tColx0x1x1x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x1.default, componentState.tColx0x1x1x1?.[state.screenSize]));

 const tTextx0x1x1x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x1x1x0.default, componentState.tTextx0x1x1x1x0?.[state.screenSize]));

 const tColx0x1x1x2ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x2.default, componentState.tColx0x1x1x2?.[state.screenSize]));

 const tTextx0x1x1x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x1x2x0.default, componentState.tTextx0x1x1x2x0?.[state.screenSize]));

 const tColx0x1x1x3ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x3.default, componentState.tColx0x1x1x3?.[state.screenSize]));

 const tTextx0x1x1x3x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x1x3x0.default, componentState.tTextx0x1x1x3x0?.[state.screenSize]));

 const tRowx0x1x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x2.default, componentState.tRowx0x1x2?.[state.screenSize]));

 const tColx0x1x2x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x2x0.default, componentState.tColx0x1x2x0?.[state.screenSize]));

 const tTextx0x1x2x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x2x0x0.default, componentState.tTextx0x1x2x0x0?.[state.screenSize]));

 const tColx0x1x2x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x2x1.default, componentState.tColx0x1x2x1?.[state.screenSize]));

 const tTextx0x1x2x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x2x1x0.default, componentState.tTextx0x1x2x1x0?.[state.screenSize]));

 const tRowx0x1x7ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x7.default, componentState.tRowx0x1x7?.[state.screenSize]));

 const tComponentx0x1x7x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1x7x0.default, componentState.tComponentx0x1x7x0?.[state.screenSize]));

 const tTextx0x1x7x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x7x1.default, componentState.tTextx0x1x7x1?.[state.screenSize]));

 const tRowx0x1x8ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x8.default, componentState.tRowx0x1x8?.[state.screenSize]));

 const tColx0x1x8x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x8x0.default, componentState.tColx0x1x8x0?.[state.screenSize]));

 const tTextx0x1x8x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x8x0x0.default, componentState.tTextx0x1x8x0x0?.[state.screenSize]));

 const tColx0x1x8x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x8x1.default, componentState.tColx0x1x8x1?.[state.screenSize]));

 const tTextx0x1x8x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x8x1x0.default, componentState.tTextx0x1x8x1x0?.[state.screenSize]));

 const tColx0x1x8x2ComputedData = computed(() => _.merge({}, componentState.tColx0x1x8x2.default, componentState.tColx0x1x8x2?.[state.screenSize]));

 const tTextx0x1x8x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x8x2x0.default, componentState.tTextx0x1x8x2x0?.[state.screenSize]));

 const tColx0x1x8x3ComputedData = computed(() => _.merge({}, componentState.tColx0x1x8x3.default, componentState.tColx0x1x8x3?.[state.screenSize]));

 const tTextx0x1x8x3x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x8x3x0.default, componentState.tTextx0x1x8x3x0?.[state.screenSize]));

 const tRowx0x1x9ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x9.default, componentState.tRowx0x1x9?.[state.screenSize]));

 const tColx0x1x9x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x9x0.default, componentState.tColx0x1x9x0?.[state.screenSize]));

 const tTextx0x1x9x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x9x0x0.default, componentState.tTextx0x1x9x0x0?.[state.screenSize]));

 const tColx0x1x9x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x9x1.default, componentState.tColx0x1x9x1?.[state.screenSize]));

 const tTextx0x1x9x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x9x1x0.default, componentState.tTextx0x1x9x1x0?.[state.screenSize]));

 const tColx0x1x9x2ComputedData = computed(() => _.merge({}, componentState.tColx0x1x9x2.default, componentState.tColx0x1x9x2?.[state.screenSize]));

 const tTextx0x1x9x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x9x2x0.default, componentState.tTextx0x1x9x2x0?.[state.screenSize]));

 const tColx0x1x9x3ComputedData = computed(() => _.merge({}, componentState.tColx0x1x9x3.default, componentState.tColx0x1x9x3?.[state.screenSize]));

 const tTextx0x1x9x3x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x9x3x0.default, componentState.tTextx0x1x9x3x0?.[state.screenSize]));

 const tRowx0x1x10ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x10.default, componentState.tRowx0x1x10?.[state.screenSize]));

 const tComponentx0x1x10x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1x10x0.default, componentState.tComponentx0x1x10x0?.[state.screenSize]));

 const tTextx0x1x10x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x10x1.default, componentState.tTextx0x1x10x1?.[state.screenSize]));

 const tRowx0x1x11ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x11.default, componentState.tRowx0x1x11?.[state.screenSize]));

 const tColx0x1x11x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x11x0.default, componentState.tColx0x1x11x0?.[state.screenSize]));

 const tTextx0x1x11x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x11x0x0.default, componentState.tTextx0x1x11x0x0?.[state.screenSize]));

 const tColx0x1x11x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x11x1.default, componentState.tColx0x1x11x1?.[state.screenSize]));

 const tTextx0x1x11x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x11x1x0.default, componentState.tTextx0x1x11x1x0?.[state.screenSize]));

 const tColx0x1x11x2ComputedData = computed(() => _.merge({}, componentState.tColx0x1x11x2.default, componentState.tColx0x1x11x2?.[state.screenSize]));

 const tTextx0x1x11x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x11x2x0.default, componentState.tTextx0x1x11x2x0?.[state.screenSize]));

 const tColx0x1x11x3ComputedData = computed(() => _.merge({}, componentState.tColx0x1x11x3.default, componentState.tColx0x1x11x3?.[state.screenSize]));

 const tTextx0x1x11x3x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x11x3x0.default, componentState.tTextx0x1x11x3x0?.[state.screenSize]));

 const tRowx0x1x12ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x12.default, componentState.tRowx0x1x12?.[state.screenSize]));

 const tColx0x1x12x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x12x0.default, componentState.tColx0x1x12x0?.[state.screenSize]));

 const tTextx0x1x12x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x12x0x0.default, componentState.tTextx0x1x12x0x0?.[state.screenSize]));

 const tColx0x1x12x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x12x1.default, componentState.tColx0x1x12x1?.[state.screenSize]));

 const tTextx0x1x12x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x12x1x0.default, componentState.tTextx0x1x12x1x0?.[state.screenSize]));

 const tColx0x1x12x2ComputedData = computed(() => _.merge({}, componentState.tColx0x1x12x2.default, componentState.tColx0x1x12x2?.[state.screenSize]));

 const tTextx0x1x12x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x12x2x0.default, componentState.tTextx0x1x12x2x0?.[state.screenSize]));

 const tColx0x1x12x3ComputedData = computed(() => _.merge({}, componentState.tColx0x1x12x3.default, componentState.tColx0x1x12x3?.[state.screenSize]));

 const tTextx0x1x12x3x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x12x3x0.default, componentState.tTextx0x1x12x3x0?.[state.screenSize]));

 const tRowx0x1x13ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x13.default, componentState.tRowx0x1x13?.[state.screenSize]));

 const tComponentx0x1x13x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1x13x0.default, componentState.tComponentx0x1x13x0?.[state.screenSize]));

 const tTextx0x1x13x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x13x1.default, componentState.tTextx0x1x13x1?.[state.screenSize]));

 const tRowx0x1x14ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x14.default, componentState.tRowx0x1x14?.[state.screenSize]));

 const tComponentx0x1x14x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1x14x0.default, componentState.tComponentx0x1x14x0?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tTextx0x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x0.default, componentState.tTextx0x2x0?.[state.screenSize]));

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
tTextx0x0ComputedData,
tRowx0x1ComputedData,
tRowx0x1x1ComputedData,
tColx0x1x1x0ComputedData,
tTextx0x1x1x0x0ComputedData,
tColx0x1x1x1ComputedData,
tTextx0x1x1x1x0ComputedData,
tColx0x1x1x2ComputedData,
tTextx0x1x1x2x0ComputedData,
tColx0x1x1x3ComputedData,
tTextx0x1x1x3x0ComputedData,
tRowx0x1x2ComputedData,
tColx0x1x2x0ComputedData,
tTextx0x1x2x0x0ComputedData,
tColx0x1x2x1ComputedData,
tTextx0x1x2x1x0ComputedData,
tRowx0x1x7ComputedData,
tComponentx0x1x7x0ComputedData,
tTextx0x1x7x1ComputedData,
tRowx0x1x8ComputedData,
tColx0x1x8x0ComputedData,
tTextx0x1x8x0x0ComputedData,
tColx0x1x8x1ComputedData,
tTextx0x1x8x1x0ComputedData,
tColx0x1x8x2ComputedData,
tTextx0x1x8x2x0ComputedData,
tColx0x1x8x3ComputedData,
tTextx0x1x8x3x0ComputedData,
tRowx0x1x9ComputedData,
tColx0x1x9x0ComputedData,
tTextx0x1x9x0x0ComputedData,
tColx0x1x9x1ComputedData,
tTextx0x1x9x1x0ComputedData,
tColx0x1x9x2ComputedData,
tTextx0x1x9x2x0ComputedData,
tColx0x1x9x3ComputedData,
tTextx0x1x9x3x0ComputedData,
tRowx0x1x10ComputedData,
tComponentx0x1x10x0ComputedData,
tTextx0x1x10x1ComputedData,
tRowx0x1x11ComputedData,
tColx0x1x11x0ComputedData,
tTextx0x1x11x0x0ComputedData,
tColx0x1x11x1ComputedData,
tTextx0x1x11x1x0ComputedData,
tColx0x1x11x2ComputedData,
tTextx0x1x11x2x0ComputedData,
tColx0x1x11x3ComputedData,
tTextx0x1x11x3x0ComputedData,
tRowx0x1x12ComputedData,
tColx0x1x12x0ComputedData,
tTextx0x1x12x0x0ComputedData,
tColx0x1x12x1ComputedData,
tTextx0x1x12x1x0ComputedData,
tColx0x1x12x2ComputedData,
tTextx0x1x12x2x0ComputedData,
tColx0x1x12x3ComputedData,
tTextx0x1x12x3x0ComputedData,
tRowx0x1x13ComputedData,
tComponentx0x1x13x0ComputedData,
tTextx0x1x13x1ComputedData,
tRowx0x1x14ComputedData,
tComponentx0x1x14x0ComputedData,
tRowx0x2ComputedData,
tTextx0x2x0ComputedData,
onclick1770000202227,
};
},
};