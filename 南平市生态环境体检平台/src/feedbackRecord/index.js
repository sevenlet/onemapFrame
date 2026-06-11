window.feedbackRecordComponent = {
template: 
`<div id="t-l-c-feedbackRecord" class="t-l-c-feedbackRecord" >` +
`<t-row id="t-row-8eed.6a84951da" class="feedbackRecord-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align">` +
`<t-col id="t-col-0660.f67102367" class="feedbackRecord-t-col-0-1-0"  :span="tColx0x1x0ComputedData.span" :offset="tColx0x1x0ComputedData.offset" :push="tColx0x1x0ComputedData.push" :pull="tColx0x1x0ComputedData.pull" :c-style="tColx0x1x0ComputedData.cStyle">` +
`<t-component v-if="state.isTime === true" id="t-component-cbf6.123a255f4" class="feedbackRecord-t-component-0-1-0-0"  :name="tComponentx0x1x0x0ComputedData.name" :loading="tComponentx0x1x0x0ComputedData.loading" :c-style="tComponentx0x1x0x0ComputedData.cStyle" :src="tComponentx0x1x0x0ComputedData.src" :component-name="tComponentx0x1x0x0ComputedData.componentName" :page-id="tComponentx0x1x0x0ComputedData.pageId" :page-code="tComponentx0x1x0x0ComputedData.pageCode">` +
`</t-component>` +
`</t-col>` +
`<t-row v-if="state.isShow === true" id="t-row-7bb0.79e13b0d7" class="feedbackRecord-t-row-0-1-1"  :c-style="tRowx0x1x1ComputedData.cStyle" :gutter="tRowx0x1x1ComputedData.gutter" :justify="tRowx0x1x1ComputedData.justify" :align="tRowx0x1x1ComputedData.align">` +
`<t-col id="t-col-a682.692e91de8" class="feedbackRecord-t-col-0-1-1-0"  :span="tColx0x1x1x0ComputedData.span" :offset="tColx0x1x1x0ComputedData.offset" :push="tColx0x1x1x0ComputedData.push" :pull="tColx0x1x1x0ComputedData.pull" :c-style="tColx0x1x1x0ComputedData.cStyle">` +
`<t-text-common id="t-text-common-6557.59ada0f6e" class="feedbackRecord-t-text-common-0-1-1-0-0"  :label="tTextCommonx0x1x1x0x0ComputedData.label" :editable="tTextCommonx0x1x1x0x0ComputedData.editable" :c-style="tTextCommonx0x1x1x0x0ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-c40c.b49ad3096" class="feedbackRecord-t-text-common-0-1-1-0-1"  :label="tTextCommonx0x1x1x0x1ComputedData.label" :editable="tTextCommonx0x1x1x0x1ComputedData.editable" :c-style="tTextCommonx0x1x1x0x1ComputedData.cStyle">` +
`</t-text-common>` +
`</t-col>` +
`<t-col id="t-col-901b.318cb3ee2" class="feedbackRecord-t-col-0-1-1-1"  :span="tColx0x1x1x1ComputedData.span" :offset="tColx0x1x1x1ComputedData.offset" :push="tColx0x1x1x1ComputedData.push" :pull="tColx0x1x1x1ComputedData.pull" :c-style="tColx0x1x1x1ComputedData.cStyle">` +
`<t-input id="t-input-cffd.84312942e" class="feedbackRecord-t-input-0-1-1-1-0"  :type="tInputx0x1x1x1x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.checkQuesRow.zgCompany, componentPropBindingMap?.['t-input-cffd.84312942e']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x1x1x1x0ComputedData.maxlength" :minlength="tInputx0x1x1x1x0ComputedData.minlength" :show-word-limit="tInputx0x1x1x1x0ComputedData.showWordLimit" :placeholder="tInputx0x1x1x1x0ComputedData.placeholder" :clearable="tInputx0x1x1x1x0ComputedData.clearable" :show-password="tInputx0x1x1x1x0ComputedData.showPassword" :disabled="tInputx0x1x1x1x0ComputedData.disabled" :prefix-icon="tInputx0x1x1x1x0ComputedData.prefix-icon" :suffix-icon="tInputx0x1x1x1x0ComputedData.suffix-icon" :rows="tInputx0x1x1x1x0ComputedData.rows" :autosize="tInputx0x1x1x1x0ComputedData.autosize" :name="tInputx0x1x1x1x0ComputedData.name" :readonly="replaceCssVariables(filterData(state.isView, componentPropBindingMap?.['t-input-cffd.84312942e']['readonly'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :step="tInputx0x1x1x1x0ComputedData.step" :autofocus="tInputx0x1x1x1x0ComputedData.autofocus" :form="tInputx0x1x1x1x0ComputedData.form" :label="tInputx0x1x1x1x0ComputedData.label" :tabindex="tInputx0x1x1x1x0ComputedData.tabindex" :validate-event="tInputx0x1x1x1x0ComputedData.validateEvent" :c-style="tInputx0x1x1x1x0ComputedData.cStyle" @change="onchange1770024814064">` +
`</t-input>` +
`</t-col>` +
`<t-col id="t-col-ef25.b5a365e38" class="feedbackRecord-t-col-0-1-1-6"  :span="tColx0x1x1x6ComputedData.span" :offset="tColx0x1x1x6ComputedData.offset" :push="tColx0x1x1x6ComputedData.push" :pull="tColx0x1x1x6ComputedData.pull" :c-style="tColx0x1x1x6ComputedData.cStyle">` +
`<t-text-common id="t-text-common-1ae2.20d3939ea" class="feedbackRecord-t-text-common-0-1-1-6-0"  :label="tTextCommonx0x1x1x6x0ComputedData.label" :editable="tTextCommonx0x1x1x6x0ComputedData.editable" :c-style="tTextCommonx0x1x1x6x0ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-4a97.c8afa272" class="feedbackRecord-t-text-common-0-1-1-6-1"  :label="tTextCommonx0x1x1x6x1ComputedData.label" :editable="tTextCommonx0x1x1x6x1ComputedData.editable" :c-style="tTextCommonx0x1x1x6x1ComputedData.cStyle">` +
`</t-text-common>` +
`</t-col>` +
`<t-col id="t-col-203c.62c6f3f8a" class="feedbackRecord-t-col-0-1-1-7"  :span="tColx0x1x1x7ComputedData.span" :offset="tColx0x1x1x7ComputedData.offset" :push="tColx0x1x1x7ComputedData.push" :pull="tColx0x1x1x7ComputedData.pull" :c-style="tColx0x1x1x7ComputedData.cStyle">` +
`<t-input id="t-input-1eeb.0b225002a" class="feedbackRecord-t-input-0-1-1-7-0"  :type="tInputx0x1x1x7x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.checkQuesRow.zgContent, componentPropBindingMap?.['t-input-1eeb.0b225002a']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x1x1x7x0ComputedData.maxlength" :minlength="tInputx0x1x1x7x0ComputedData.minlength" :show-word-limit="tInputx0x1x1x7x0ComputedData.showWordLimit" :placeholder="tInputx0x1x1x7x0ComputedData.placeholder" :clearable="tInputx0x1x1x7x0ComputedData.clearable" :show-password="tInputx0x1x1x7x0ComputedData.showPassword" :disabled="tInputx0x1x1x7x0ComputedData.disabled" :prefix-icon="tInputx0x1x1x7x0ComputedData.prefix-icon" :suffix-icon="tInputx0x1x1x7x0ComputedData.suffix-icon" :rows="tInputx0x1x1x7x0ComputedData.rows" :autosize="tInputx0x1x1x7x0ComputedData.autosize" :name="tInputx0x1x1x7x0ComputedData.name" :readonly="replaceCssVariables(filterData(state.isView, componentPropBindingMap?.['t-input-1eeb.0b225002a']['readonly'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :step="tInputx0x1x1x7x0ComputedData.step" :autofocus="tInputx0x1x1x7x0ComputedData.autofocus" :form="tInputx0x1x1x7x0ComputedData.form" :label="tInputx0x1x1x7x0ComputedData.label" :tabindex="tInputx0x1x1x7x0ComputedData.tabindex" :validate-event="tInputx0x1x1x7x0ComputedData.validateEvent" :c-style="tInputx0x1x1x7x0ComputedData.cStyle" @change="onchange1770024998472">` +
`</t-input>` +
`</t-col>` +
`<t-col id="t-col-4425.0e6906b2a" class="feedbackRecord-t-col-0-1-1-8"  :span="tColx0x1x1x8ComputedData.span" :offset="tColx0x1x1x8ComputedData.offset" :push="tColx0x1x1x8ComputedData.push" :pull="tColx0x1x1x8ComputedData.pull" :c-style="tColx0x1x1x8ComputedData.cStyle">` +
`<t-text-common id="t-text-common-495a.7f49c5dc4" class="feedbackRecord-t-text-common-0-1-1-8-0"  :label="tTextCommonx0x1x1x8x0ComputedData.label" :editable="tTextCommonx0x1x1x8x0ComputedData.editable" :c-style="tTextCommonx0x1x1x8x0ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-dc70.3daf6ff1a" class="feedbackRecord-t-text-common-0-1-1-8-1"  :label="tTextCommonx0x1x1x8x1ComputedData.label" :editable="tTextCommonx0x1x1x8x1ComputedData.editable" :c-style="tTextCommonx0x1x1x8x1ComputedData.cStyle">` +
`</t-text-common>` +
`</t-col>` +
`<t-col id="t-col-d7e0.7e87c73ac" class="feedbackRecord-t-col-0-1-1-9"  :span="tColx0x1x1x9ComputedData.span" :offset="tColx0x1x1x9ComputedData.offset" :push="tColx0x1x1x9ComputedData.push" :pull="tColx0x1x1x9ComputedData.pull" :c-style="tColx0x1x1x9ComputedData.cStyle">` +
`<t-input id="t-input-c9e3.71f9c3706" class="feedbackRecord-t-input-0-1-1-9-0"  :type="tInputx0x1x1x9x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.checkQuesRow.zgReplay, componentPropBindingMap?.['t-input-c9e3.71f9c3706']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x1x1x9x0ComputedData.maxlength" :minlength="tInputx0x1x1x9x0ComputedData.minlength" :show-word-limit="tInputx0x1x1x9x0ComputedData.showWordLimit" :placeholder="tInputx0x1x1x9x0ComputedData.placeholder" :clearable="tInputx0x1x1x9x0ComputedData.clearable" :show-password="tInputx0x1x1x9x0ComputedData.showPassword" :disabled="tInputx0x1x1x9x0ComputedData.disabled" :prefix-icon="tInputx0x1x1x9x0ComputedData.prefix-icon" :suffix-icon="tInputx0x1x1x9x0ComputedData.suffix-icon" :rows="tInputx0x1x1x9x0ComputedData.rows" :autosize="tInputx0x1x1x9x0ComputedData.autosize" :name="tInputx0x1x1x9x0ComputedData.name" :readonly="replaceCssVariables(filterData(state.isView, componentPropBindingMap?.['t-input-c9e3.71f9c3706']['readonly'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :step="tInputx0x1x1x9x0ComputedData.step" :autofocus="tInputx0x1x1x9x0ComputedData.autofocus" :form="tInputx0x1x1x9x0ComputedData.form" :label="tInputx0x1x1x9x0ComputedData.label" :tabindex="tInputx0x1x1x9x0ComputedData.tabindex" :validate-event="tInputx0x1x1x9x0ComputedData.validateEvent" :c-style="tInputx0x1x1x9x0ComputedData.cStyle" @change="onchange1770171679670_0_0">` +
`</t-input>` +
`</t-col>` +
`<t-col id="t-col-507c.285d605fa" class="feedbackRecord-t-col-0-1-1-10"  :span="tColx0x1x1x10ComputedData.span" :offset="tColx0x1x1x10ComputedData.offset" :push="tColx0x1x1x10ComputedData.push" :pull="tColx0x1x1x10ComputedData.pull" :c-style="tColx0x1x1x10ComputedData.cStyle">` +
`<t-text-common id="t-text-common-3e1c.b8ad585c6" class="feedbackRecord-t-text-common-0-1-1-10-0"  :label="tTextCommonx0x1x1x10x0ComputedData.label" :editable="tTextCommonx0x1x1x10x0ComputedData.editable" :c-style="tTextCommonx0x1x1x10x0ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-5980.ef464f6e4" class="feedbackRecord-t-text-common-0-1-1-10-1"  :label="tTextCommonx0x1x1x10x1ComputedData.label" :editable="tTextCommonx0x1x1x10x1ComputedData.editable" :c-style="tTextCommonx0x1x1x10x1ComputedData.cStyle">` +
`</t-text-common>` +
`</t-col>` +
`<t-col id="t-col-8781.8b785872b" class="feedbackRecord-t-col-0-1-1-11"  :span="tColx0x1x1x11ComputedData.span" :offset="tColx0x1x1x11ComputedData.offset" :push="tColx0x1x1x11ComputedData.push" :pull="tColx0x1x1x11ComputedData.pull" :c-style="tColx0x1x1x11ComputedData.cStyle">` +
`<t-radio id="t-radio-ca76.1dc8676b" class="feedbackRecord-t-radio-0-1-1-11-0"  :options="replaceCssVariables(filterData(state.radioList, componentPropBindingMap?.['t-radio-ca76.1dc8676b']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(filterData(state.checkQuesRow.inspectFlag, componentPropBindingMap?.['t-radio-ca76.1dc8676b']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tRadiox0x1x1x11x0ComputedData.alias" :disabled="tRadiox0x1x1x11x0ComputedData.disabled" :border="tRadiox0x1x1x11x0ComputedData.border" :size="tRadiox0x1x1x11x0ComputedData.size" :is-use-button="tRadiox0x1x1x11x0ComputedData.isUseButton" :c-style="tRadiox0x1x1x11x0ComputedData.cStyle" @change="onchange1770283319303">` +
`</t-radio>` +
`</t-col>` +
`<t-col id="t-col-0251.f07d5b716" class="feedbackRecord-t-col-0-1-1-12"  :span="tColx0x1x1x12ComputedData.span" :offset="tColx0x1x1x12ComputedData.offset" :push="tColx0x1x1x12ComputedData.push" :pull="tColx0x1x1x12ComputedData.pull" :c-style="tColx0x1x1x12ComputedData.cStyle">` +
`<t-text-common id="t-text-common-9b62.d480d081e" class="feedbackRecord-t-text-common-0-1-1-12-0"  :label="tTextCommonx0x1x1x12x0ComputedData.label" :editable="tTextCommonx0x1x1x12x0ComputedData.editable" :c-style="tTextCommonx0x1x1x12x0ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-ccde.f037d38e6" class="feedbackRecord-t-text-common-0-1-1-12-1"  :label="tTextCommonx0x1x1x12x1ComputedData.label" :editable="tTextCommonx0x1x1x12x1ComputedData.editable" :c-style="tTextCommonx0x1x1x12x1ComputedData.cStyle">` +
`</t-text-common>` +
`</t-col>` +
`<t-col id="t-col-9102.4a5170cf7" class="feedbackRecord-t-col-0-1-1-13"  :span="tColx0x1x1x13ComputedData.span" :offset="tColx0x1x1x13ComputedData.offset" :push="tColx0x1x1x13ComputedData.push" :pull="tColx0x1x1x13ComputedData.pull" :c-style="tColx0x1x1x13ComputedData.cStyle">` +
`<t-select id="t-select-1407.484cbd7c4" class="feedbackRecord-t-select-0-1-1-13-0"  :active-value="replaceCssVariables(filterData(state.status, componentPropBindingMap?.['t-select-1407.484cbd7c4']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.selectList, componentPropBindingMap?.['t-select-1407.484cbd7c4']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x1x1x13x0ComputedData.alias" :multiple="tSelectx0x1x1x13x0ComputedData.multiple" :placeholder="tSelectx0x1x1x13x0ComputedData.placeholder" :clearable="tSelectx0x1x1x13x0ComputedData.clearable" :disabled="tSelectx0x1x1x13x0ComputedData.disabled" :name="tSelectx0x1x1x13x0ComputedData.name" :autocomplete="tSelectx0x1x1x13x0ComputedData.autocomplete" :filterable="tSelectx0x1x1x13x0ComputedData.filterable" :no-match-text="tSelectx0x1x1x13x0ComputedData.no-match-text" :no-data-text="tSelectx0x1x1x13x0ComputedData.no-data-text" :c-style="tSelectx0x1x1x13x0ComputedData.cStyle" :scrollbar-thumb-color="tSelectx0x1x1x13x0ComputedData.scrollbarThumbColor" :scrollbar-track-color="tSelectx0x1x1x13x0ComputedData.scrollbarTrackColor" :scrollbar-width="tSelectx0x1x1x13x0ComputedData.scrollbarWidth" @change="onchange1771919823724">` +
`</t-select>` +
`</t-col>` +
`<t-col id="t-col-4b72.a2a02d5bf" class="feedbackRecord-t-col-0-1-1-14"  :span="tColx0x1x1x14ComputedData.span" :offset="tColx0x1x1x14ComputedData.offset" :push="tColx0x1x1x14ComputedData.push" :pull="tColx0x1x1x14ComputedData.pull" :c-style="tColx0x1x1x14ComputedData.cStyle">` +
`<t-text-common id="t-text-common-9bb0.6bb2d55a" class="feedbackRecord-t-text-common-0-1-1-14-0"  :label="tTextCommonx0x1x1x14x0ComputedData.label" :editable="tTextCommonx0x1x1x14x0ComputedData.editable" :c-style="tTextCommonx0x1x1x14x0ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-efcf.cbb7d9f72" class="feedbackRecord-t-text-common-0-1-1-14-1"  :label="tTextCommonx0x1x1x14x1ComputedData.label" :editable="tTextCommonx0x1x1x14x1ComputedData.editable" :c-style="tTextCommonx0x1x1x14x1ComputedData.cStyle">` +
`</t-text-common>` +
`</t-col>` +
`<t-col id="t-col-b821.91ef551e8" class="feedbackRecord-t-col-0-1-1-15"  :span="tColx0x1x1x15ComputedData.span" :offset="tColx0x1x1x15ComputedData.offset" :push="tColx0x1x1x15ComputedData.push" :pull="tColx0x1x1x15ComputedData.pull" :c-style="tColx0x1x1x15ComputedData.cStyle">` +
`<t-component id="t-component-85ca.010f67d2e" class="feedbackRecord-t-component-0-1-1-15-0"  :name="tComponentx0x1x1x15x0ComputedData.name" :loading="tComponentx0x1x1x15x0ComputedData.loading" :c-style="tComponentx0x1x1x15x0ComputedData.cStyle" :src="tComponentx0x1x1x15x0ComputedData.src" :component-name="tComponentx0x1x1x15x0ComputedData.componentName" :page-id="tComponentx0x1x1x15x0ComputedData.pageId" :page-code="tComponentx0x1x1x15x0ComputedData.pageCode">` +
`</t-component>` +
`<t-upload-button v-if="state.isView === false" id="t-upload-button-904f.8b90e734a" class="feedbackRecord-t-upload-button-0-1-1-15-1"  :label="tUploadButtonx0x1x1x15x1ComputedData.label" :is-multiple="tUploadButtonx0x1x1x15x1ComputedData.isMultiple" :is-limit="tUploadButtonx0x1x1x15x1ComputedData.isLimit" :file-type="tUploadButtonx0x1x1x15x1ComputedData.fileType" :c-style="tUploadButtonx0x1x1x15x1ComputedData.cStyle" :params="replaceCssVariables(filterData(state.uploadFileParams, componentPropBindingMap?.['t-upload-button-904f.8b90e734a']['params'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :upload-url="replaceCssVariables(filterData(global.fileUploadUrl, componentPropBindingMap?.['t-upload-button-904f.8b90e734a']['uploadUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @success="onsuccess1770087668699" @error="onerror1770087670604">` +
`</t-upload-button>` +
`</t-col>` +
`</t-row>` +
`<t-row v-if="state.isShow === true" id="t-row-2905.a61adabc" class="feedbackRecord-t-row-0-1-2"  :c-style="tRowx0x1x2ComputedData.cStyle" :gutter="tRowx0x1x2ComputedData.gutter" :justify="tRowx0x1x2ComputedData.justify" :align="tRowx0x1x2ComputedData.align">` +
`<t-rect v-if="state.isView === false" id="t-rect-b12b.b49b4bca6" class="feedbackRecord-t-rect-0-1-2-0"  :tip="tRectx0x1x2x0ComputedData.tip" :label="tRectx0x1x2x0ComputedData.label" :active="tRectx0x1x2x0ComputedData.active" :c-style="tRectx0x1x2x0ComputedData.cStyle" @click="onclick1770343548274_0_0">` +
`</t-rect>` +
`</t-row>` +
`<t-text-common v-if="state.isShow === false" id="t-text-common-509c.1784aa25c" class="feedbackRecord-t-text-common-0-1-3"  :label="tTextCommonx0x1x3ComputedData.label" :editable="tTextCommonx0x1x3ComputedData.editable" :c-style="tTextCommonx0x1x3ComputedData.cStyle">` +
`</t-text-common>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-text-common-29e6.79de862f8":{"attributeName":"tTextCommonx0x0"},"t-row-8eed.6a84951da":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-0660.f67102367":{"attributeName":"tColx0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-cbf6.123a255f4":{"attributeName":"tComponentx0x1x0x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-row-7bb0.79e13b0d7":{"attributeName":"tRowx0x1x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-a682.692e91de8":{"attributeName":"tColx0x1x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-6557.59ada0f6e":{"attributeName":"tTextCommonx0x1x1x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-c40c.b49ad3096":{"attributeName":"tTextCommonx0x1x1x0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-901b.318cb3ee2":{"attributeName":"tColx0x1x1x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-input-cffd.84312942e":{"attributeName":"tInputx0x1x1x1x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]}},"t-col-2edb.161bb349":{"attributeName":"tColx0x1x1x2"},"t-col-f6b8.8eb1ab429":{"attributeName":"tColx0x1x1x3"},"t-col-71f8.22cac535f":{"attributeName":"tColx0x1x1x4"},"t-col-a5b7.e5373d746":{"attributeName":"tColx0x1x1x5"},"t-col-ef25.b5a365e38":{"attributeName":"tColx0x1x1x6","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-1ae2.20d3939ea":{"attributeName":"tTextCommonx0x1x1x6x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-4a97.c8afa272":{"attributeName":"tTextCommonx0x1x1x6x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-203c.62c6f3f8a":{"attributeName":"tColx0x1x1x7","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-input-1eeb.0b225002a":{"attributeName":"tInputx0x1x1x7x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]}},"t-col-4425.0e6906b2a":{"attributeName":"tColx0x1x1x8","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-495a.7f49c5dc4":{"attributeName":"tTextCommonx0x1x1x8x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-dc70.3daf6ff1a":{"attributeName":"tTextCommonx0x1x1x8x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-d7e0.7e87c73ac":{"attributeName":"tColx0x1x1x9","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-input-c9e3.71f9c3706":{"attributeName":"tInputx0x1x1x9x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]}},"t-col-507c.285d605fa":{"attributeName":"tColx0x1x1x10","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-3e1c.b8ad585c6":{"attributeName":"tTextCommonx0x1x1x10x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-5980.ef464f6e4":{"attributeName":"tTextCommonx0x1x1x10x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-8781.8b785872b":{"attributeName":"tColx0x1x1x11","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-radio-ca76.1dc8676b":{"attributeName":"tRadiox0x1x1x11x0","options":{"filters":[]},"active":{"filters":[]},"alias":{"filters":[]},"disabled":{"filters":[]},"border":{"filters":[]},"size":{"filters":[]},"isUseButton":{"filters":[]},"cStyle":{"filters":[]}},"t-col-0251.f07d5b716":{"attributeName":"tColx0x1x1x12","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-9b62.d480d081e":{"attributeName":"tTextCommonx0x1x1x12x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-ccde.f037d38e6":{"attributeName":"tTextCommonx0x1x1x12x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-9102.4a5170cf7":{"attributeName":"tColx0x1x1x13","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-1407.484cbd7c4":{"attributeName":"tSelectx0x1x1x13x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"scrollbarThumbColor":{"filters":[]},"scrollbarTrackColor":{"filters":[]},"scrollbarWidth":{"filters":[]}},"t-col-4b72.a2a02d5bf":{"attributeName":"tColx0x1x1x14","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-9bb0.6bb2d55a":{"attributeName":"tTextCommonx0x1x1x14x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-efcf.cbb7d9f72":{"attributeName":"tTextCommonx0x1x1x14x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-b821.91ef551e8":{"attributeName":"tColx0x1x1x15","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-85ca.010f67d2e":{"attributeName":"tComponentx0x1x1x15x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-upload-button-904f.8b90e734a":{"attributeName":"tUploadButtonx0x1x1x15x1","label":{"filters":[]},"isMultiple":{"filters":[]},"isLimit":{"filters":[]},"fileType":{"filters":[]},"cStyle":{"filters":[]},"params":{"filters":[]},"uploadUrl":{"filters":[]}},"t-row-2905.a61adabc":{"attributeName":"tRowx0x1x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-rect-b12b.b49b4bca6":{"attributeName":"tRectx0x1x2x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-509c.1784aa25c":{"attributeName":"tTextCommonx0x1x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   fileRandom: "",
   status: "0",
   selectObj: {},
   oldData: [],
   isDisabled: false,
   delTime: "",
   delId: "",
   isSave: false,
   isTime: false,
   typeId: "",
   isShow: false,
   addId: "",
   selectId: "",
   initialDates: [],
   timeData: [],
   isAdd: false,
   deleteFileId: "",
   total: "0",
   tableData: [],
   businessKey: "feedbackRecord",
   uploadFileParams: {"businessKey":"","subBusinessKey":"","createUser":""},
   fileName: "",
   time: "",
   selectList: [{"value":"0","label":"待整改","disabled":false},{"value":"1","label":"整改中","disabled":false},{"value":"2","label":"已办结","disabled":false}],
   radioList: [{"label":"1","value":"是","disabled":false},{"label":"0","value":"否","disabled":false}],
   isView: false,
   checkQuesRow: {"zgCompany":"","zgContent":"","zgReplay":"","inspectFlag":"0","inspectId":"","submitTime":"","detailId":""},
   pointCode: "",
   monitorTime: "",
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
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"start","position":"unset","left":"0px","top":"0px","paddingLeft":"20px","paddingRight":"20px","paddingTop":"14px","paddingBottom":"0px","flexDirection":"row"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"start","position":"unset","left":"0px","top":"0px","paddingLeft":"20px","paddingRight":"20px","paddingTop":"14px","paddingBottom":"0px","flexDirection":"row"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"56px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"56px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tComponentx0x1x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"56px","margin":"0 auto"},
            
            },
 default: { 
 
name:"recordTimeComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"100%","height":"56px","margin":"0 auto"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/recordTime",
componentName:"recordTimeComponent",
pageId:"a6ed6c5a615f47a893523e5077104088",
pageCode:"recordTime", 
 },
},
tRowx0x1x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","left":"0px","top":"0px","min-height":"400px","gap":"0px","marginTop":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","left":"0px","top":"0px","min-height":"400px","gap":"0px","marginTop":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"182px","top":"-156px","backgroundColor":"var(--business-show-bg10)","borderRight":"4px solid var(--business-dialog-bg)","paddingRight":"10px","min-height":"36px"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"182px","top":"-156px","backgroundColor":"var(--business-show-bg10)","borderRight":"4px solid var(--business-dialog-bg)","paddingRight":"10px","min-height":"36px"},"focus":{"borderLeft":"1px solid var(--t-pop-card-bg)","borderTop":"1px solid var(--t-pop-card-bg)","borderRight":"1px solid var(--t-pop-card-bg)","borderBottom":"1px solid var(--t-pop-card-bg)"}},"itemWrapper":{"default":{"paddingRight":"10px","paddingLeft":"10px"}}}, 
 },
},
tTextCommonx0x1x1x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"-68px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"},
            
            },
 default: { 
 
label:"*",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"-68px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"}},"itemWrapper":{"default":{"paddingRight":"0px"}},"label":{"active":{"marginRight":"4px"}}}, 
 },
},
tTextCommonx0x1x1x0x1: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"81px","top":"-98px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"整改单位",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"81px","top":"-98px","background":"unset","backgroundClip":"unset","animationName":""}},"itemWrapper":{"default":{"paddingRight":"0px"}}}, 
 },
},
tColx0x1x1x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"590px","top":"-128px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingLeft":"10px","min-height":"36px","paddingRight":"10px"},
            
            },
 default: { 
 
span:20,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"590px","top":"-128px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingLeft":"10px","min-height":"36px","paddingRight":"10px"}},"itemWrapper":{"default":{"paddingLeft":"10px"}}}, 
 },
},
tInputx0x1x1x1x0: {
defaultStyle: {
            default: {"width":"100% !important","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入",
clearable:false,
showPassword:false,
disabled:false,
'prefix-icon':"",
'suffix-icon':"",
rows:2,
autosize:false,
name:"",
readonly:false,
step:"",
autofocus:false,
form:"",
label:"",
tabindex:"",
validateEvent:true,
cStyle:{"wrapper":{"default":{"width":"100% !important","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)"},"hover":{"borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","width":"100%","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"},"focus":{"borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"}},"placeholder":{"default":{"fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","color":"#C0C4CC","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"itemWrapper":{"default":{"width":"100%"}}}, 
 },
},
tColx0x1x1x6: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"272px","top":"-66px","backgroundColor":"var(--business-show-bg10)","animationName":"","min-height":"130px","borderRight":"4px solid var(--business-dialog-bg)","paddingRight":"10px"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"272px","top":"-66px","backgroundColor":"var(--business-show-bg10)","animationName":"","min-height":"130px","borderRight":"4px solid var(--business-dialog-bg)","paddingRight":"10px"},"hover":{"paddingLeft":"10px"}}}, 
 },
},
tTextCommonx0x1x1x6x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"-68px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"},
            
            },
 default: { 
 
label:"*",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"-68px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"}},"itemWrapper":{"default":{"paddingRight":"0px"}},"label":{"active":{"marginRight":"4px"}}}, 
 },
},
tTextCommonx0x1x1x6x1: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"126px","top":"-225px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"整改内容",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"126px","top":"-225px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tColx0x1x1x7: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"262px","top":"-76px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingLeft":"10px","min-height":"130px","paddingRight":"10px"},
            
            },
 default: { 
 
span:20,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"262px","top":"-76px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingLeft":"10px","min-height":"130px","paddingRight":"10px"},"hover":{"paddingRight":"10px"}}}, 
 },
},
tInputx0x1x1x7x0: {
defaultStyle: {
            default: {"width":"100% !important","height":"auto","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)"},
            
            },
 default: { 
 
type:"textarea",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:true,
placeholder:"请输入",
clearable:false,
showPassword:false,
disabled:false,
'prefix-icon':"",
'suffix-icon':"",
rows:4,
autosize:false,
name:"",
readonly:false,
step:"",
autofocus:false,
form:"",
label:"",
tabindex:"",
validateEvent:true,
cStyle:{"wrapper":{"default":{"width":"100% !important","height":"auto","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)"},"hover":{"borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","width":"100% !important","height":"auto","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"},"focus":{"borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"}},"placeholder":{"default":{"fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","color":"#C0C4CC","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"itemWrapper":{"default":{"width":"100%"}}}, 
 },
},
tColx0x1x1x8: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"282px","top":"-56px","backgroundColor":"var(--business-show-bg10)","animationName":"","min-height":"130px","borderRight":"4px solid var(--business-dialog-bg)","paddingRight":"10px"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"282px","top":"-56px","backgroundColor":"var(--business-show-bg10)","animationName":"","min-height":"130px","borderRight":"4px solid var(--business-dialog-bg)","paddingRight":"10px"},"hover":{"paddingLeft":"10px"}}}, 
 },
},
tTextCommonx0x1x1x8x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"-68px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"},
            
            },
 default: { 
 
label:"*",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"-68px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"}},"itemWrapper":{"default":{"paddingRight":"0px"}},"label":{"active":{"marginRight":"4px"}}}, 
 },
},
tTextCommonx0x1x1x8x1: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"136px","top":"-215px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"复核情况",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"136px","top":"-215px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tColx0x1x1x9: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"272px","top":"-66px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingLeft":"10px","min-height":"130px","paddingRight":"10px"},
            
            },
 default: { 
 
span:20,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"272px","top":"-66px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingLeft":"10px","min-height":"130px","paddingRight":"10px"},"hover":{"paddingRight":"10px"}}}, 
 },
},
tInputx0x1x1x9x0: {
defaultStyle: {
            default: {"width":"100% !important","height":"auto","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)"},
            
            },
 default: { 
 
type:"textarea",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:true,
placeholder:"请输入",
clearable:false,
showPassword:false,
disabled:false,
'prefix-icon':"",
'suffix-icon':"",
rows:4,
autosize:false,
name:"",
readonly:false,
step:"",
autofocus:false,
form:"",
label:"",
tabindex:"",
validateEvent:true,
cStyle:{"wrapper":{"default":{"width":"100% !important","height":"auto","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)"},"hover":{"borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","width":"100% !important","height":"auto","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"},"focus":{"borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"}},"placeholder":{"default":{"fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","color":"#C0C4CC","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"itemWrapper":{"default":{"width":"100%"}}}, 
 },
},
tColx0x1x1x10: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"252px","top":"-86px","backgroundColor":"var(--business-show-bg10)","animationName":"","borderRight":"4px solid var(--business-dialog-bg)","paddingRight":"10px","min-height":"36px"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"252px","top":"-86px","backgroundColor":"var(--business-show-bg10)","animationName":"","borderRight":"4px solid var(--business-dialog-bg)","paddingRight":"10px","min-height":"36px"}}}, 
 },
},
tTextCommonx0x1x1x10x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"-68px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"},
            
            },
 default: { 
 
label:"*",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"-68px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"}},"itemWrapper":{"default":{"paddingRight":"0px"}},"label":{"active":{"marginRight":"4px"}}}, 
 },
},
tTextCommonx0x1x1x10x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"55px","top":"-185px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"是否存在环境问题",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"55px","top":"-185px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tColx0x1x1x11: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"242px","top":"-96px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingRight":"0px","paddingLeft":"10px","min-height":"36px","borderRight":"4px solid var(--business-dialog-bg)"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"242px","top":"-96px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingRight":"0px","paddingLeft":"10px","min-height":"36px","borderRight":"4px solid var(--business-dialog-bg)"}}}, 
 },
},
tRadiox0x1x1x11x0: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"100%","height":"30px","justifyContent":"flex-start","flexDirection":"row","gap":"auto"},
            
            },
 default: { 
 
options:[{"label":"1","value":"是","disabled":false},{"label":"0","value":"否","disabled":false}],
active:"0",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"100%","height":"30px","justifyContent":"flex-start","flexDirection":"row","gap":"auto"}},"itemWrapper":{"default":{"padding":0,"margin":0,"justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","gap":"10px","marginRight":"10px"}},"label":{"default":{"--t-radio-disabled-text-color":"#fff","padding":0,"color":"var(--t-font-color-gy1) !important","background":"unset","backgroundClip":"unset","fontSize":"var(--text-size-14)","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","width":"auto","height":"","lineHeight":"var(--text-size-14)"},"hover":{"--t-radio-disabled-text-color":"#fff","color":"var(--t-font-color-gy1)","background":"unset","backgroundClip":"unset","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"},"active":{"--t-radio-disabled-text-color":"#fff","color":"var(--t-font-color-gy1)","background":"unset","backgroundClip":"unset","backgroundColor":"","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"},"disabled":{"--t-radio-disabled-text-color":"#fff","color":"#fff"}},"radioBorder":{"default":{"background":"rgba(255, 255, 255, 1)","width":"12px","height":"12px","border":"auto !important","borderTop":"1px Solid var(--t-radio-border-color)","borderLeft":"1px Solid var(--t-radio-border-color)","borderBottom":"1px Solid var(--t-radio-border-color)","borderRight":"1px Solid var(--t-radio-border-color)"},"hover":{"borderLeft":"1px solid var(--t-radio-hover-border-color)","borderTop":"1px solid var(--t-radio-hover-border-color)","borderRight":"1px solid var(--t-radio-hover-border-color)","borderBottom":"1px solid var(--t-radio-hover-border-color)"},"active":{"border":"auto !important","borderTop":"1px Solid var(--t-radio-active-border-color)","borderLeft":"1px Solid var(--t-radio-active-border-color)","borderBottom":"1px Solid var(--t-radio-active-border-color)","borderRight":"1px Solid var(--t-radio-active-border-color)"}},"circle":{"default":{"background":"var(--t-radio-bg-color)","width":"4px","height":"4px","fillType":"color","backgroundColor":"rgba(20, 112, 204, 0)"},"active":{"background":"var(--t-radio-active-bg-color)","fillType":"color","backgroundColor":"var(--area-font-active-color)","color":"var(--area-font-active-color)"}},"radioButton":{"default":{"width":"px","height":"px","background":"rgba(255, 255, 255, 1)","border":"auto !important","borderTop":"1px Solid var(--t-radio-button-border-color)","borderLeft":"0px Solid var(--t-radio-button-border-color)","borderBottom":"1px Solid var(--t-radio-button-border-color)","borderRight":"1px Solid var(--t-radio-button-border-color)"},"active":{"background":"var(--t-radio-button-active-bg-color)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","fillType":"color"}},"radioButtonText":{"default":{"textAlign":"center","border":"unset","color":"var(--t-radio-button-color)","background":"unset","backgroundClip":"unset"},"active":{"color":"var(--t-radio-button-active-color)","border":"unset"},"hover":{"color":"var(--t-radio-button-hover-color)"}},"itemFirstWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"4px","border":"auto !important","borderTop":"1px Solid var(--t-radio-button-border-color)","borderLeft":"1px Solid var(--t-radio-button-border-color)","borderBottom":"1px Solid var(--t-radio-button-border-color)","borderRight":"1px Solid var(--t-radio-button-border-color)"}},"itemLastWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"0px"}}}, 
 },
},
tColx0x1x1x12: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"262px","top":"-76px","backgroundColor":"var(--business-show-bg10)","animationName":"","borderRight":"4px solid var(--business-dialog-bg)","paddingRight":"10px","min-height":"36px"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"262px","top":"-76px","backgroundColor":"var(--business-show-bg10)","animationName":"","borderRight":"4px solid var(--business-dialog-bg)","paddingRight":"10px","min-height":"36px"}}}, 
 },
},
tTextCommonx0x1x1x12x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"121px","top":"-58px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"},
            
            },
 default: { 
 
label:"*",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"121px","top":"-58px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"}},"itemWrapper":{"default":{"paddingRight":"0px"}},"label":{"active":{"marginRight":"4px"}}}, 
 },
},
tTextCommonx0x1x1x12x1: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"65px","top":"-175px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"任务状态",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"65px","top":"-175px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tColx0x1x1x13: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"202px","top":"-136px","backgroundColor":"var(--business-show-bg10)","animationName":"","min-height":"36px"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"202px","top":"-136px","backgroundColor":"var(--business-show-bg10)","animationName":"","min-height":"36px"}}}, 
 },
},
tSelectx0x1x1x13x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","marginLeft":"20px","marginRight":"20px"},
            
            },
 default: { 
 
activeValue:"0",
options:[{"value":"0","label":"待整改","disabled":false},{"value":"1","label":"整改中","disabled":false},{"value":"2","label":"已办结","disabled":false}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","marginLeft":"20px","marginRight":"20px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},
scrollbarThumbColor:"rgb(193,193,193)",
scrollbarTrackColor:"rgb(241,241,241)",
scrollbarWidth:"6px", 
 },
},
tColx0x1x1x14: {
defaultStyle: {
            default: {"width":"100%","height":"120px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"202px","top":"-136px","backgroundColor":"var(--business-show-bg10)","animationName":"","borderRight":"4px solid var(--business-dialog-bg)","paddingRight":"10px"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"120px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"202px","top":"-136px","backgroundColor":"var(--business-show-bg10)","animationName":"","borderRight":"4px solid var(--business-dialog-bg)","paddingRight":"10px"}}}, 
 },
},
tTextCommonx0x1x1x14x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"-68px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"},
            
            },
 default: { 
 
label:"*",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"-68px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"}},"itemWrapper":{"default":{"paddingRight":"0px"}},"label":{"active":{"marginRight":"4px"}}}, 
 },
},
tTextCommonx0x1x1x14x1: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-25px","top":"-140px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"上传附件",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-25px","top":"-140px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tColx0x1x1x15: {
defaultStyle: {
            default: {"width":"100%","height":"120px","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"212px","top":"-126px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingLeft":"10px","paddingRight":"10px","overflow":"auto","flexDirection":"column"},
            
            },
 default: { 
 
span:20,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"120px","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"212px","top":"-126px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingLeft":"10px","paddingRight":"10px","overflow":"auto","flexDirection":"column"}}}, 
 },
},
tComponentx0x1x1x15x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","margin":"0 auto"},
            
            },
 default: { 
 
name:"checkRecordFileListComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","margin":"0 auto"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/checkRecordFileList",
componentName:"checkRecordFileListComponent",
pageId:"b530a7fe74bf482a9fd6c23913d84abb",
pageCode:"checkRecordFileList", 
 },
},
tUploadButtonx0x1x1x15x1: {
defaultStyle: {
            default: {"width":"70px","height":"36px","marginBottom":"0px"},
            
            },
 default: { 
 
label:"上传",
isMultiple:false,
isLimit:false,
fileType:"docx,doc,pdf,xlsx,txt,jpg,png",
cStyle:{"wrapper":{"default":{"width":"70px","height":"36px","marginBottom":"0px"}},"buttonWrapper":{"default":{"fontFamily":"思源","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","textAlign":"center","color":"var(--business-theme)","background":"var(--t-upload-button-bg-color)","fillType":"color","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","justifyContent":"center","alignItems":"center","flexDirection":"column","display":"flex","backgroundColor":"rgba(23, 62, 228, 0)","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"background":"var(--t-upload-button-hover-bg-color)","fillType":"color","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"rgba(23, 62, 228, 0)","borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","color":"var(--business-strong)"}}},
params:{"businessKey":"","subBusinessKey":"","createUser":""},
uploadUrl:"http://192.168.24.106:10157/waterevaluate/api/components/file/upload", 
 },
},
tRowx0x1x2: {
defaultStyle: {
            default: {"width":"100%","height":"56px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","marginTop":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"56px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","marginTop":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tRectx0x1x2x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px solid rgba(23,62,228,0)","borderLeft":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","backgroundColor":"var(--business-btn-bg)","color":"#fff","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","paddingLeft":"20px","paddingRight":"20px","paddingTop":"10px","paddingBottom":"10px","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px","cursor":"pointer","marginLeft":"20px"},
            
            },
 default: { 
 
tip:false,
label:"保存",
active:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px solid rgba(23,62,228,0)","borderLeft":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","backgroundColor":"var(--business-btn-bg)","color":"#fff","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","paddingLeft":"20px","paddingRight":"20px","paddingTop":"10px","paddingBottom":"10px","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px","cursor":"pointer","marginLeft":"20px"},"active":{"background":"var(--t-brand8)","color":"var(--business-strong)","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)"},"hover":{"color":"var(--business-strong)","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","width":"auto","marginLeft":"20px","whiteSpace":"nowrap"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTextCommonx0x1x3: {
defaultStyle: {
            default: {"width":"100%","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"暂无数据",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
});
const initPageData = () => {

console.log('弹窗参数', global.waterGlobalVariables.historyTask);


// 判断是否新增 global.waterGlobalVariables.historyTask.action === '新增'
state.isAdd = true;
state.isSave = false;
// 判断是否是只读
const editActionArr = ['查看'];
state.isView = editActionArr.includes(global.waterGlobalVariables.historyTask.action);
// 如果是查看，就把单选、下拉，都改成禁用的
if (state.isView) {
  state.radioList = state.radioList.map((item) => ({
    ...item,
    disabled: true,
  }));
  state.selectList = state.selectList.map((item) => ({
    ...item,
    disabled: true,
  }));
}
console.log(state.isView, 'state.isView');
// 拼接上传参数
state.deleteFileId = ''; // 清空删除id
state.time = Math.random(); // 防止重复请求

// 提供给内部附件列表
provide('state', state)

// 获取当前年月日
const getNewDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  // 补零：月份<10则加0前缀，否则直接取
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  // 补零：日期<10则加0前缀，否则直接取
  const day = now.getDate().toString().padStart(2, '0');

  console.log(year, month, day); // 输出示例：2026 02 04
  // 也可以直接拼接成常用的日期字符串
  return `${year}-${month}-${day}`;
}


const init = async () => {
  state.checkQuesRow.zgCompany = global.waterGlobalVariables.historyTask?.returnQuesRow?.inspect_object_name || '';
  state.checkQuesRow.inspectId = global.waterGlobalVariables.historyTask?.returnQuesRow?.inspect_id || '';
  state.status = global.waterGlobalVariables.historyTask?.returnQuesRow?.status || '';
  // 时间列表
  await apiRegistry.getTmeData.request();
  state.isShow = state.timeData.length > 0 ? true : false;
  console.log(state.checkQuesRow, state.isShow, '接口传参');

  if (state.isShow) {
    state.selectId = state.timeData[0].detailId;
    state.isAdd = false;
    state.checkQuesRow.zgCompany = state.timeData[0]?.zg_company;
    state.checkQuesRow.zgContent = state.timeData[0]?.zg_content;
    state.checkQuesRow.zgReplay = state.timeData[0]?.zg_replay;
    state.checkQuesRow.inspectFlag = state.timeData[0]?.inspect_flag || '0';
    state.checkQuesRow.inspectId = state.timeData[0]?.inspect_id;
    state.checkQuesRow.submitTime = state.timeData[0]?.monitortime;
    state.checkQuesRow.detailId = state.timeData[0]?.detail_id;

    // 附件列表
    apiRegistry.getListData.request();
  } else {
    state.isAdd = true;
    // await apiRegistry.getId.request();
    state.checkQuesRow.submitTime = getNewDate();
    state.checkQuesRow.zgContent = '';
    state.checkQuesRow.zgReplay = '';
    state.checkQuesRow.inspectFlag = '0';
    state.checkQuesRow.detailId = state.addId;
  }
  state.uploadFileParams = {
    "businessKey": state.businessKey,
    "subBusinessKey": state.checkQuesRow.detailId,
    "createUser": localStorage.getItem('lastUserName'),
  }
  // setTimeout(async () => {

  // }, 500)
  state.selectId = state.checkQuesRow.detailId;
  console.log('初始化检查页面', state.isView, state.checkQuesRow, state.uploadFileParams);
}
init();
// setTimeout(() => {
//   // state.timeData = [{
//   //   inspect_id: state.checkQuesRow.inspectId,
//   //   monitortime: getNewDate(),
//   //   sort: getNewDate() + '(1)',
//   // }];

// }, 2000)
};
const handleSave = () => {
console.log('保存', state.isAdd, state.checkQuesRow);
function addTimeToDate(dateStr) {
  // 校验输入是否为字符串，非字符串直接返回原值
  if (typeof dateStr !== 'string') {
    return dateStr;
  }

  // 正则匹配 YYYY-MM-DD 格式的纯日期字符串（无时间部分）
  const pureDateRegex = /^\d{4}-\d{2}-\d{2}$/;

  // 如果匹配成功，拼接 23:00:00；否则返回原字符串
  return pureDateRegex.test(dateStr) ? `${dateStr} 23:00:00` : dateStr;
}
state.checkQuesRow.submitTime = addTimeToDate(state.checkQuesRow.submitTime);
state.checkQuesRow.inspectId = global.waterGlobalVariables.historyTask?.returnQuesRow?.inspect_id || '';
if (!state.checkQuesRow.zgCompany.trim()) {
  ElementPlus.ElMessage({
    message: '请输入整改单位',
    type: 'warning',
  });
  return;
}

if (!state.checkQuesRow.zgContent.trim()) {
  ElementPlus.ElMessage({
    message: '请输入整改内容',
    type: 'warning',
  });
  return;
}

if (!state.checkQuesRow.zgReplay.trim()) {
  ElementPlus.ElMessage({
    message: '请输入复核情况',
    type: 'warning',
  });
  return;
}


if (!state.checkQuesRow.inspectFlag.trim()) {
  ElementPlus.ElMessage({
    message: '请选择是否存在环境问题',
    type: 'warning',
  });
  return;
}

if (!state.tableData.length) {
  ElementPlus.ElMessage({
    message: '请上传附件',
    type: 'warning',
  });
  return;
}
// "submitTime": state.checkQuesRow.submitTime + " 01:00:00",
state.time = Math.random(); // 防止重复请求
if (state.isAdd) {
  console.log(state.checkQuesRow, '新增参数');
  apiRegistry.handleRecordAdd.request();
} else {
  // apiRegistry.handleRecordEdit.request();

  const url = '/waterevaluate/inspect/detail/update';
  const token = localStorage.getItem('token');

  axios.put(
    url,
    {
      time: state.time,
      "detailId": state.checkQuesRow.detailId,
      "zgContent": state.checkQuesRow.zgContent,
      "zgCompany": state.checkQuesRow.zgCompany,
      "zgReplay": state.checkQuesRow.zgReplay,
      "inspectFlag": Number(state.checkQuesRow.inspectFlag),
      "inspectId": state.checkQuesRow.inspectId,
    },
    {
      baseURL: global.businessServiceBaseUrl,
      headers: {
        'usertoken': token,
        'token': token,
        'Content-Type': 'application/json'
      }
    }
  ).then((res) => {
    console.log('修改检查记录', res);
    if (res.data.code === 200 && res.data.data === 1) {
      ElementPlus.ElMessage.success('更新成功');
      // state.selectId = state.checkQuesRow.detailId;
      apiRegistry.getTmeData.request();
  apiRegistry.handleChangeStatus.request();
      state.isSave = true;
      // 新增成功后，调整状态，下次使用更新接口
      state.isAdd = false;


      rootData.rootSocket.emit(
        'message',
        {
          room: global.socketRoom,
          type: "updateCheckList",
          data: {},
        }
      );

    }
  }).catch(error => {
    console.log('更新失败', error)
    ElementPlus.ElMessage.error('更新失败，请重试');
  });
}
state.selectObj = { ...state.checkQuesRow };
};
const uploadFileSuccess = (data) => {

state.fileName = data?.name;
  ElementPlus.ElMessage({
    message: '附件上传成功',
    type: 'success',
  });
state.time = Math.random();
// 附件上传成功后，重新请求附件列表
apiRegistry.getListData.request();

};
const uploadFileError = () => {
ElementPlus.ElMessage({
  message: '附件上传失败，请重试！',
  type: 'error',
});

};
const handleDeleteFile = (data) => {
console.log('处理删除附件', data);
if (data.action === '删除' && data.row.fileId) {
  // 填充要被删除的附件id
  state.deleteFileId = data.row.fileId || '';
  // 删除并重新加载列表
  const reloadList = async () => {
    // 删除附件
    await apiRegistry.deleteData.request();
    state.time = Math.random();
    // 获取附件列表
    apiRegistry.getListData.request();
  };
  // 删除并重新加载列表
  reloadList();
}
};
const addTimeData = (data) => {

state.isAdd = true;
// state.selectId = data.timeData[data.timeData.length - 1].detail_id;
console.log('新增时间消息', state.selectId, state.oldData, data.timeData[data.timeData.length - 1]);
/**
 * 移除字符串末尾的(数字)后缀，如 2026-02-04(1) → 2026-02-04
 * @param {string} str - 待处理的原始字符串
 * @returns {string} 移除后缀后的新字符串
 */
function removeNumBracketSuffix(str) {
  // 非字符串类型先转字符串，避免报错
  if (typeof str !== 'string') str = String(str);
  // 正则：$匹配字符串末尾，\d+匹配1个及以上数字，\(和\)转义匹配括号
  const reg = /\(\d+\)$/;
  return str.replace(reg, '');
}
state.isShow = true;
state.time = Math.random();
setTimeout(async () => {
  await apiRegistry.getId.request();
  state.checkQuesRow.submitTime = removeNumBracketSuffix(data.timeData[data.timeData.length - 1].date) + " 23:00:00";
  state.checkQuesRow.zgCompany = global.waterGlobalVariables.historyTask?.checkObjInfo?.inspect_object_name || '';
  state.checkQuesRow.zgContent = '';
  state.checkQuesRow.zgReplay = '';
  state.checkQuesRow.inspectFlag = '0';
  state.checkQuesRow.detailId = state.addId;
  console.log(state.checkQuesRow, '新增参数');
  state.uploadFileParams = {
    "businessKey": state.businessKey,
    "subBusinessKey": state.checkQuesRow.detailId,
    "createUser": localStorage.getItem('lastUserName'),
  };
  state.selectObj = { ...state.checkQuesRow };
  // await apiRegistry.getTmeData.request();
  await apiRegistry.getListData.request();
  state.isSave = false;
}, 0)

};
const switchDateData = (data) => {

const isExisted = state.oldData.some(item => item.detail_id === data.timeData[0].detail_id);
console.log(isExisted, state.oldData, state.timeData, data, '7777777777777777');
if (isExisted && data.timeData[0].zg_content) {
  state.isAdd = false;
} else {
  state.isAdd = true;
}
state.selectObj = data.timeData[0];
const selectObj = state.timeData.find(item => item.detail_id === data.timeData[0].detail_id);
// state.checkQuesRow.zgCompany = selectObj.zg_company;
state.checkQuesRow.zgContent = selectObj.zg_content;
state.checkQuesRow.zgReplay = selectObj.zg_replay;
state.checkQuesRow.inspectFlag = selectObj.inspect_flag || '0';;
state.checkQuesRow.inspectId = selectObj.inspect_id;
state.checkQuesRow.submitTime = selectObj.monitortime;
state.checkQuesRow.detailId = selectObj.detail_id;
// state.selectId = selectObj.detail_id;
state.uploadFileParams = {
  "businessKey": state.businessKey,
  "subBusinessKey": state.checkQuesRow.detailId,
  "createUser": localStorage.getItem('lastUserName'),
}
console.log('切换时间消息', data, data.timeData[0].date,state.selectObj, state.checkQuesRow);

state.fileRandom = Math.floor(Math.random() * 1000000) + '_' + Date.now();
// 附件列表
apiRegistry.getListData.request();
};
const setType = (data) => {
state.checkQuesRow.inspectFlag = data || '';
};
const handleSaveMsg = () => {
  ElementPlus.ElMessage({
    message: '请先保存当前数据，再新增！',
    type: 'warning',
  });
};
const removeDate = (data) => {
console.log(data, '删除数据')
state.delId = data.delItem.detail_id;
state.delTime = data.delItem.monitortime;
apiRegistry.handleDelete.request();
};
const noneBtn = () => {
// 1. 获取目标元素（通过唯一class rect-jkIBR3uuJbwa22Yl，也可用id t-rect-b12b.b49b4bca6）
const saveBtn = document.querySelector('.feedbackRecord-t-rect-0-2-2-0');
console.log(saveBtn,'saveBtn');
// 做非空判断，避免元素不存在时报错
if (saveBtn) {
  // 2. 核心：禁用鼠标/触摸点击事件（最直接，覆盖所有点击触发方式）
  saveBtn.style.pointerEvents = 'none';
  // 3. 移除元素上的点击事件监听（防止通过代码手动触发addEventListener绑定的事件）
  const newBtn = saveBtn.cloneNode(true);
  saveBtn.parentNode.replaceChild(newBtn, saveBtn);
  // 4. 添加禁用视觉样式（灰化背景+文字，取消圆角边框的hover效果，提升用户感知）
  newBtn.style.backgroundColor = '#B0B0B0'; // 灰色背景，可根据你的UI调整为浅灰#eee等
  newBtn.style.color = '#fff'; // 灰色文字
  newBtn.style.borderColor = '#ccc !important'; // 灰色边框，覆盖原有border样式
  newBtn.style.cursor = 'not-allowed'; // 鼠标悬浮显示“禁止”图标
  // 5. 可选：移除active/hover相关class，防止样式冲突
  newBtn.classList.remove('active');
}
};
const startBtn = () => {
const saveBtn = document.querySelector('.feedbackRecord-t-rect-0-2-2-0');
console.log(saveBtn,'saveBtn');
if (saveBtn) {
  // 恢复指针事件
  saveBtn.style.pointerEvents = 'unset';
  // 恢复原有样式（可根据你的UI变量调整，还原为初始样式）
  saveBtn.style.backgroundColor = 'var(--business-show-bg30)';
  saveBtn.style.color = '#fff';
  saveBtn.style.borderColor = 'rgba(23,62,228,0) !important';
  saveBtn.style.cursor = 'pointer';
}
};
const onchange1770024814064 = (value) => {
// 设置变量值
state.checkQuesRow.zgCompany = value;
};
const onchange1770024838082 = (value) => {
// 设置变量值
state.checkQuesRow.inspect_user = value;
};
const ondateChange1770024948496 = (data) => {
// 设置变量值
state.checkQuesRow.inspect_time = data;
};
const onchange1770024998472 = (value) => {
// 设置变量值
state.checkQuesRow.zgContent = value;
};
const onchange1770171679670_0_0 = (value) => {
// 设置变量值
state.checkQuesRow.zgReplay = value;
};
const onchange1770283319303 = (data,selectOption) => {
// 执行自定义方法
setType(selectOption.label);
};
const onsuccess1770087668699 = (response,file) => {
// 执行自定义方法
uploadFileSuccess(file);
};
const onerror1770087670604 = (error,file) => {
// 执行自定义方法
uploadFileError();
};
const onclick1770343548274_0_0 = () => {
// 执行自定义方法
handleSave();
};
const onchange1771919823724 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.status = value;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 deleteData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/waterevaluate/api/components/file/deleteOne","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"fileId\":\"state.deleteFileId\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/api/components/file/deleteOne","method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"fileId":state.deleteFileId}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-/waterevaluate/api/components/file/deleteOne',  "qs.stringify({\"fileId\":\state.deleteFileId\})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['deleteData'] = res.data;
                
     
console.log(res?.data.data, '删除成功');

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/waterevaluate/api/components/file/pageList","method":"post","baseURL":"global.foshanServiceBaseUrl","data":{"random":"state.fileRandom","time":"state.time","fileName":"","pageNum":1,"pageSize":10000,"subBusinessKey":"state.checkQuesRow.detailId","businessKey":"state.businessKey"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/api/components/file/pageList","method":"post","baseURL":global.foshanServiceBaseUrl,"data":{"random":state.fileRandom,"time":state.time,"fileName":"","pageNum":1,"pageSize":10000,"subBusinessKey":state.checkQuesRow.detailId,"businessKey":state.businessKey},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-/waterevaluate/api/components/file/pageList',  {"random":state.fileRandom,"time":state.time,"fileName":"","pageNum":1,"pageSize":10000,"subBusinessKey":state.checkQuesRow.detailId,"businessKey":state.businessKey});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     state.tableData = [];
state.tableData = res?.data.data.list || [];
state.total = res?.data.data.total;
console.log(state.tableData, '检查记录-附件列表');

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
state.total = 0;
      reject(error);
    });
  });
},
              },
// 接口函数
 handleRecordAdd: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/waterevaluate/inspect/detail/add","method":"post","baseURL":"global.foshanServiceBaseUrl","data":{"detailId":"state.checkQuesRow.detailId","zgCompany":"state.checkQuesRow.zgCompany","zgContent":"state.checkQuesRow.zgContent","zgReplay":"state.checkQuesRow.zgReplay","inspectId":"state.checkQuesRow.inspectId","inspectFlag":"state.checkQuesRow.inspectFlag","submitTime":"state.checkQuesRow.submitTime","time":"state.time"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/inspect/detail/add","method":"post","baseURL":global.foshanServiceBaseUrl,"data":{"detailId":state.checkQuesRow.detailId,"zgCompany":state.checkQuesRow.zgCompany,"zgContent":state.checkQuesRow.zgContent,"zgReplay":state.checkQuesRow.zgReplay,"inspectId":state.checkQuesRow.inspectId,"inspectFlag":state.checkQuesRow.inspectFlag,"submitTime":state.checkQuesRow.submitTime,"time":state.time},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-/waterevaluate/inspect/detail/add',  {"detailId":state.checkQuesRow.detailId,"zgCompany":state.checkQuesRow.zgCompany,"zgContent":state.checkQuesRow.zgContent,"zgReplay":state.checkQuesRow.zgReplay,"inspectId":state.checkQuesRow.inspectId,"inspectFlag":state.checkQuesRow.inspectFlag,"submitTime":state.checkQuesRow.submitTime,"time":state.time});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['handleRecordAdd'] = res.data;
                
     console.log('新增检查记录', res);
if (res.data.code === 200 && res.data.data === 1) {
  ElementPlus.ElMessage.success('新增成功');
  apiRegistry.handleChangeStatus.request();
    // state.selectId = state.checkQuesRow.detailId;
  state.isSave = true;
  apiRegistry.getTmeData.request();
  // 新增成功后，调整状态，下次使用更新接口
  state.isAdd = false;


  rootData.rootSocket.emit(
    'message',
    {
      room: global.socketRoom,
      type: "updateCheckList",
      data: {},
    }
  );

}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      ElementPlus.ElMessage.error('新增失败，请重试');
      reject(error);
    });
  });
},
              },
// 接口函数
 handleRecordEdit: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/waterevaluate/inspect/update","method":"post","baseURL":"global.foshanServiceBaseUrl","data":{"time":"state.time","inspectId":"state.checkQuesRow.inspect_id","inspectObjectCode":"state.checkQuesRow.inspect_object_code","inspectObjectName":"state.checkQuesRow.inspect_object_name","inspectObjectType":"state.checkQuesRow.inspect_object_type","inspectContent":"state.checkQuesRow.inspect_content","inspectUser":"state.checkQuesRow.inspect_user","inspectUserCode":"state.checkQuesRow.inspect_user_code","inspectFlag":"state.checkQuesRow.inspect_flag","status":"state.checkQuesRow.status","longitude":"state.checkQuesRow.longitude","latitude":"state.checkQuesRow.latitude","inspectAddress":"state.checkQuesRow.inspect_address","regionCode":"state.checkQuesRow.region_code"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/inspect/update","method":"post","baseURL":global.foshanServiceBaseUrl,"data":{"time":state.time,"inspectId":state.checkQuesRow.inspect_id,"inspectObjectCode":state.checkQuesRow.inspect_object_code,"inspectObjectName":state.checkQuesRow.inspect_object_name,"inspectObjectType":state.checkQuesRow.inspect_object_type,"inspectContent":state.checkQuesRow.inspect_content,"inspectUser":state.checkQuesRow.inspect_user,"inspectUserCode":state.checkQuesRow.inspect_user_code,"inspectFlag":state.checkQuesRow.inspect_flag,"status":state.checkQuesRow.status,"longitude":state.checkQuesRow.longitude,"latitude":state.checkQuesRow.latitude,"inspectAddress":state.checkQuesRow.inspect_address,"regionCode":state.checkQuesRow.region_code},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-/waterevaluate/inspect/update',  {"time":state.time,"inspectId":state.checkQuesRow.inspect_id,"inspectObjectCode":state.checkQuesRow.inspect_object_code,"inspectObjectName":state.checkQuesRow.inspect_object_name,"inspectObjectType":state.checkQuesRow.inspect_object_type,"inspectContent":state.checkQuesRow.inspect_content,"inspectUser":state.checkQuesRow.inspect_user,"inspectUserCode":state.checkQuesRow.inspect_user_code,"inspectFlag":state.checkQuesRow.inspect_flag,"status":state.checkQuesRow.status,"longitude":state.checkQuesRow.longitude,"latitude":state.checkQuesRow.latitude,"inspectAddress":state.checkQuesRow.inspect_address,"regionCode":state.checkQuesRow.region_code});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['handleRecordEdit'] = res.data;
                
     console.log('修改检查记录', res);
if (res.data.code === 200 && res.data.data === 1) {
  ElementPlus.ElMessage.success('更新成功');
  // 新增成功后，调整状态，下次使用更新接口
  state.isAdd = false;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      ElementPlus.ElMessage.error('更新失败，请重试');
      reject(error);
    });
  });
},
              },
// 接口函数
 getTmeData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.foshanWaterServicePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":{"time":"state.time","MONITORTIME":"","END_TIME":"","START_TIME":"","INSPECT_FLAG":"","INSPECT_ID":"state.checkQuesRow.inspectId","interfaceId":"dc5e914ad6e4ff817fb1c83efef5c0b1"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.foshanWaterServicePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":{"time":state.time,"MONITORTIME":"","END_TIME":"","START_TIME":"","INSPECT_FLAG":"","INSPECT_ID":state.checkQuesRow.inspectId,"interfaceId":"dc5e914ad6e4ff817fb1c83efef5c0b1"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.foshanWaterServicePath',  {"time":state.time,"MONITORTIME":"","END_TIME":"","START_TIME":"","INSPECT_FLAG":"","INSPECT_ID":state.checkQuesRow.inspectId,"interfaceId":"dc5e914ad6e4ff817fb1c83efef5c0b1"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTmeData'] = res.data;
                
     state.timeData = [];
state.oldData = [];

if (res?.data.data) {
  state.timeData = res?.data.data;
  state.oldData = res?.data.data;
  state.selectObj = res?.data.data[res?.data.data.length - 1];

}
state.isTime = false;
setTimeout(() => {
  state.isTime = true;

}, 500)
console.log(res?.data.data, '检查记录-时间列表');

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.timeData = [];
state.oldTimeData = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 handleChangeStatus: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/waterevaluate/inspect/add","method":"post","baseURL":"global.foshanServiceBaseUrl","data":{"time":"state.time","inspectId":"state.checkQuesRow.inspectId","status":"state.status"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/inspect/add","method":"post","baseURL":global.foshanServiceBaseUrl,"data":{"time":state.time,"inspectId":state.checkQuesRow.inspectId,"status":state.status},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-/waterevaluate/inspect/add',  {"time":state.time,"inspectId":state.checkQuesRow.inspectId,"status":state.status});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['handleChangeStatus'] = res.data;
                
     console.log('新增检查记录任务一状态', res);
if (res.data.code === 200 && res.data.data === 1) {

  rootData.rootSocket.emit(
    'message',
    {
      room: global.socketRoom,
      type: "updateCheckList",
      data: {},
    }
  );

}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      ElementPlus.ElMessage.error('新增失败，请重试');
      reject(error);
    });
  });
},
              },
// 接口函数
 getId: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"time":"state.time","interfaceId":"5afe7f17eadd89c7e69b448b609b1191"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"time":state.time,"interfaceId":"5afe7f17eadd89c7e69b448b609b1191"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"time":state.time,"interfaceId":"5afe7f17eadd89c7e69b448b609b1191"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getId'] = res.data;
                
     state.addId = '';
  console.log(res,'addIdaddIdaddIdaddIdaddIdaddIdaddId');
if (res.data.data) {
  state.addId = res.data.data[0].pkid;
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
 handleDelete: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/waterevaluate/inspect/detail/delete","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"detailId\":\"state.delId\",\"time\":\"state.time\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/inspect/detail/delete","method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"detailId":state.delId,"time":state.time}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-/waterevaluate/inspect/detail/delete',  "qs.stringify({\"detailId\":\state.delId\,\"time\":\state.time\})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['handleDelete'] = res.data;
                
     
if (res.data.code === 200) {
  ElementPlus.ElMessage.success('删除成功');
  state.time = Math.random();
  apiRegistry.getTmeData.request();
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      ElementPlus.ElMessage.error('删除失败，请重试');
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-feedbackRecord', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPageData();
/* 接收socket.io消息 */
const onSocketChange7e66e00dd45c439a9416 = function (data) {
if(data.type === "deleteCheckRecordFile"){
try{
// 执行自定义方法
handleDeleteFile(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange7e66e00dd45c439a9416);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange7e66e00dd45c439a9416);
});
/* 接收socket.io消息 */
const onSocketChangeca942af8e63941a98855 = function (data) {
if(data.type === "addNewDateMsg"){
try{
// 执行自定义方法
addTimeData(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangeca942af8e63941a98855);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangeca942af8e63941a98855);
});
/* 接收socket.io消息 */
const onSocketChange0eaaa8151bbd41aaa1f1 = function (data) {
if(data.type === "switchDateMsg"){
try{
// 执行自定义方法
switchDateData(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange0eaaa8151bbd41aaa1f1);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange0eaaa8151bbd41aaa1f1);
});
/* 接收socket.io消息 */
const onSocketChangee7022de7d0724a26a3eb = function (data) {
if(data.type === "saveMsg"){
try{
// 执行自定义方法
handleSaveMsg();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangee7022de7d0724a26a3eb);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangee7022de7d0724a26a3eb);
});
/* 接收socket.io消息 */
const onSocketChange1f91cffcba0c49de94fa = function (data) {
if(data.type === "removeDateMsg"){
try{
// 执行自定义方法
removeDate(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange1f91cffcba0c49de94fa);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange1f91cffcba0c49de94fa);
});
onMounted(() => {
setPageScale('t-l-c-feedbackRecord', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tColx0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0.default, componentState.tColx0x1x0?.[state.screenSize]));

 const tComponentx0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1x0x0.default, componentState.tComponentx0x1x0x0?.[state.screenSize]));

 const tRowx0x1x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x1.default, componentState.tRowx0x1x1?.[state.screenSize]));

 const tColx0x1x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x0.default, componentState.tColx0x1x1x0?.[state.screenSize]));

 const tTextCommonx0x1x1x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x0x0.default, componentState.tTextCommonx0x1x1x0x0?.[state.screenSize]));

 const tTextCommonx0x1x1x0x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x0x1.default, componentState.tTextCommonx0x1x1x0x1?.[state.screenSize]));

 const tColx0x1x1x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x1.default, componentState.tColx0x1x1x1?.[state.screenSize]));

 const tInputx0x1x1x1x0ComputedData = computed(() => _.merge({}, componentState.tInputx0x1x1x1x0.default, componentState.tInputx0x1x1x1x0?.[state.screenSize]));

 const tColx0x1x1x6ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x6.default, componentState.tColx0x1x1x6?.[state.screenSize]));

 const tTextCommonx0x1x1x6x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x6x0.default, componentState.tTextCommonx0x1x1x6x0?.[state.screenSize]));

 const tTextCommonx0x1x1x6x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x6x1.default, componentState.tTextCommonx0x1x1x6x1?.[state.screenSize]));

 const tColx0x1x1x7ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x7.default, componentState.tColx0x1x1x7?.[state.screenSize]));

 const tInputx0x1x1x7x0ComputedData = computed(() => _.merge({}, componentState.tInputx0x1x1x7x0.default, componentState.tInputx0x1x1x7x0?.[state.screenSize]));

 const tColx0x1x1x8ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x8.default, componentState.tColx0x1x1x8?.[state.screenSize]));

 const tTextCommonx0x1x1x8x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x8x0.default, componentState.tTextCommonx0x1x1x8x0?.[state.screenSize]));

 const tTextCommonx0x1x1x8x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x8x1.default, componentState.tTextCommonx0x1x1x8x1?.[state.screenSize]));

 const tColx0x1x1x9ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x9.default, componentState.tColx0x1x1x9?.[state.screenSize]));

 const tInputx0x1x1x9x0ComputedData = computed(() => _.merge({}, componentState.tInputx0x1x1x9x0.default, componentState.tInputx0x1x1x9x0?.[state.screenSize]));

 const tColx0x1x1x10ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x10.default, componentState.tColx0x1x1x10?.[state.screenSize]));

 const tTextCommonx0x1x1x10x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x10x0.default, componentState.tTextCommonx0x1x1x10x0?.[state.screenSize]));

 const tTextCommonx0x1x1x10x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x10x1.default, componentState.tTextCommonx0x1x1x10x1?.[state.screenSize]));

 const tColx0x1x1x11ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x11.default, componentState.tColx0x1x1x11?.[state.screenSize]));

 const tRadiox0x1x1x11x0ComputedData = computed(() => _.merge({}, componentState.tRadiox0x1x1x11x0.default, componentState.tRadiox0x1x1x11x0?.[state.screenSize]));

 const tColx0x1x1x12ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x12.default, componentState.tColx0x1x1x12?.[state.screenSize]));

 const tTextCommonx0x1x1x12x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x12x0.default, componentState.tTextCommonx0x1x1x12x0?.[state.screenSize]));

 const tTextCommonx0x1x1x12x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x12x1.default, componentState.tTextCommonx0x1x1x12x1?.[state.screenSize]));

 const tColx0x1x1x13ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x13.default, componentState.tColx0x1x1x13?.[state.screenSize]));

 const tSelectx0x1x1x13x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1x1x13x0.default, componentState.tSelectx0x1x1x13x0?.[state.screenSize]));

 const tColx0x1x1x14ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x14.default, componentState.tColx0x1x1x14?.[state.screenSize]));

 const tTextCommonx0x1x1x14x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x14x0.default, componentState.tTextCommonx0x1x1x14x0?.[state.screenSize]));

 const tTextCommonx0x1x1x14x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x14x1.default, componentState.tTextCommonx0x1x1x14x1?.[state.screenSize]));

 const tColx0x1x1x15ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x15.default, componentState.tColx0x1x1x15?.[state.screenSize]));

 const tComponentx0x1x1x15x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1x1x15x0.default, componentState.tComponentx0x1x1x15x0?.[state.screenSize]));

 const tUploadButtonx0x1x1x15x1ComputedData = computed(() => _.merge({}, componentState.tUploadButtonx0x1x1x15x1.default, componentState.tUploadButtonx0x1x1x15x1?.[state.screenSize]));

 const tRowx0x1x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x2.default, componentState.tRowx0x1x2?.[state.screenSize]));

 const tRectx0x1x2x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x1x2x0.default, componentState.tRectx0x1x2x0?.[state.screenSize]));

 const tTextCommonx0x1x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x3.default, componentState.tTextCommonx0x1x3?.[state.screenSize]));

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
tRowx0x1ComputedData,
tColx0x1x0ComputedData,
tComponentx0x1x0x0ComputedData,
tRowx0x1x1ComputedData,
tColx0x1x1x0ComputedData,
tTextCommonx0x1x1x0x0ComputedData,
tTextCommonx0x1x1x0x1ComputedData,
tColx0x1x1x1ComputedData,
tInputx0x1x1x1x0ComputedData,
tColx0x1x1x6ComputedData,
tTextCommonx0x1x1x6x0ComputedData,
tTextCommonx0x1x1x6x1ComputedData,
tColx0x1x1x7ComputedData,
tInputx0x1x1x7x0ComputedData,
tColx0x1x1x8ComputedData,
tTextCommonx0x1x1x8x0ComputedData,
tTextCommonx0x1x1x8x1ComputedData,
tColx0x1x1x9ComputedData,
tInputx0x1x1x9x0ComputedData,
tColx0x1x1x10ComputedData,
tTextCommonx0x1x1x10x0ComputedData,
tTextCommonx0x1x1x10x1ComputedData,
tColx0x1x1x11ComputedData,
tRadiox0x1x1x11x0ComputedData,
tColx0x1x1x12ComputedData,
tTextCommonx0x1x1x12x0ComputedData,
tTextCommonx0x1x1x12x1ComputedData,
tColx0x1x1x13ComputedData,
tSelectx0x1x1x13x0ComputedData,
tColx0x1x1x14ComputedData,
tTextCommonx0x1x1x14x0ComputedData,
tTextCommonx0x1x1x14x1ComputedData,
tColx0x1x1x15ComputedData,
tComponentx0x1x1x15x0ComputedData,
tUploadButtonx0x1x1x15x1ComputedData,
tRowx0x1x2ComputedData,
tRectx0x1x2x0ComputedData,
tTextCommonx0x1x3ComputedData,
onchange1770024814064,
onchange1770024998472,
onchange1770171679670_0_0,
onchange1770283319303,
onchange1771919823724,
onsuccess1770087668699,
onerror1770087670604,
onclick1770343548274_0_0,
};
},
};