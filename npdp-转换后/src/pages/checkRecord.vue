<template>
  <div id="t-l-c-checkRecord" class="t-l-c-checkRecord" ><t-image-base id="t-image-base-2f0c.71c3ec2dc" class="checkRecord-t-image-base-0-1"  :src="tImageBasex0x1ComputedData.src" :fit="tImageBasex0x1ComputedData.fit" :c-style="tImageBasex0x1ComputedData.cStyle"></t-image-base><t-row id="t-row-8eed.6a84951da" class="checkRecord-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align"><t-row id="t-row-7bb0.79e13b0d7" class="checkRecord-t-row-0-2-0"  :c-style="tRowx0x2x0ComputedData.cStyle" :gutter="tRowx0x2x0ComputedData.gutter" :justify="tRowx0x2x0ComputedData.justify" :align="tRowx0x2x0ComputedData.align"><t-col id="t-col-a682.692e91de8" class="checkRecord-t-col-0-2-0-0"  :span="tColx0x2x0x0ComputedData.span" :offset="tColx0x2x0x0ComputedData.offset" :push="tColx0x2x0x0ComputedData.push" :pull="tColx0x2x0x0ComputedData.pull" :c-style="tColx0x2x0x0ComputedData.cStyle"><t-text-common id="t-text-common-c40c.b49ad3096" class="checkRecord-t-text-common-0-2-0-0-0"  :label="tTextCommonx0x2x0x0x0ComputedData.label" :editable="tTextCommonx0x2x0x0x0ComputedData.editable" :c-style="tTextCommonx0x2x0x0x0ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-5dce.0e379ba36" class="checkRecord-t-text-common-0-2-0-0-1"  :label="tTextCommonx0x2x0x0x1ComputedData.label" :editable="tTextCommonx0x2x0x0x1ComputedData.editable" :c-style="tTextCommonx0x2x0x0x1ComputedData.cStyle"></t-text-common></t-col><t-col id="t-col-901b.318cb3ee2" class="checkRecord-t-col-0-2-0-1"  :span="tColx0x2x0x1ComputedData.span" :offset="tColx0x2x0x1ComputedData.offset" :push="tColx0x2x0x1ComputedData.push" :pull="tColx0x2x0x1ComputedData.pull" :c-style="tColx0x2x0x1ComputedData.cStyle"><t-input id="t-input-cffd.84312942e" class="checkRecord-t-input-0-2-0-1-0"  :type="tInputx0x2x0x1x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.checkQuesRow.inspect_object_name, componentPropBindingMap?.['t-input-cffd.84312942e']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x2x0x1x0ComputedData.maxlength" :minlength="tInputx0x2x0x1x0ComputedData.minlength" :show-word-limit="tInputx0x2x0x1x0ComputedData.showWordLimit" :placeholder="tInputx0x2x0x1x0ComputedData.placeholder" :clearable="tInputx0x2x0x1x0ComputedData.clearable" :show-password="tInputx0x2x0x1x0ComputedData.showPassword" :disabled="tInputx0x2x0x1x0ComputedData.disabled" :prefix-icon="tInputx0x2x0x1x0ComputedData.prefix-icon" :suffix-icon="tInputx0x2x0x1x0ComputedData.suffix-icon" :rows="tInputx0x2x0x1x0ComputedData.rows" :autosize="tInputx0x2x0x1x0ComputedData.autosize" :name="tInputx0x2x0x1x0ComputedData.name" :readonly="replaceCssVariables(filterData(state.isView, componentPropBindingMap?.['t-input-cffd.84312942e']['readonly'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :step="tInputx0x2x0x1x0ComputedData.step" :autofocus="tInputx0x2x0x1x0ComputedData.autofocus" :form="tInputx0x2x0x1x0ComputedData.form" :label="tInputx0x2x0x1x0ComputedData.label" :tabindex="tInputx0x2x0x1x0ComputedData.tabindex" :validate-event="tInputx0x2x0x1x0ComputedData.validateEvent" :c-style="tInputx0x2x0x1x0ComputedData.cStyle" @change="onchange1770024814064"></t-input></t-col><t-col id="t-col-2edb.161bb349" class="checkRecord-t-col-0-2-0-2"  :span="tColx0x2x0x2ComputedData.span" :offset="tColx0x2x0x2ComputedData.offset" :push="tColx0x2x0x2ComputedData.push" :pull="tColx0x2x0x2ComputedData.pull" :c-style="tColx0x2x0x2ComputedData.cStyle"><t-text-common id="t-text-common-fe94.060c3f7d4" class="checkRecord-t-text-common-0-2-0-2-0"  :label="tTextCommonx0x2x0x2x0ComputedData.label" :editable="tTextCommonx0x2x0x2x0ComputedData.editable" :c-style="tTextCommonx0x2x0x2x0ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-4293.5e2d63bbc" class="checkRecord-t-text-common-0-2-0-2-1"  :label="tTextCommonx0x2x0x2x1ComputedData.label" :editable="tTextCommonx0x2x0x2x1ComputedData.editable" :c-style="tTextCommonx0x2x0x2x1ComputedData.cStyle"></t-text-common></t-col><t-col id="t-col-f6b8.8eb1ab429" class="checkRecord-t-col-0-2-0-3"  :span="tColx0x2x0x3ComputedData.span" :offset="tColx0x2x0x3ComputedData.offset" :push="tColx0x2x0x3ComputedData.push" :pull="tColx0x2x0x3ComputedData.pull" :c-style="tColx0x2x0x3ComputedData.cStyle"><t-input id="t-input-d42f.accd44df8" class="checkRecord-t-input-0-2-0-3-0"  :type="tInputx0x2x0x3x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.checkQuesRow.inspect_user, componentPropBindingMap?.['t-input-d42f.accd44df8']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x2x0x3x0ComputedData.maxlength" :minlength="tInputx0x2x0x3x0ComputedData.minlength" :show-word-limit="tInputx0x2x0x3x0ComputedData.showWordLimit" :placeholder="tInputx0x2x0x3x0ComputedData.placeholder" :clearable="tInputx0x2x0x3x0ComputedData.clearable" :show-password="tInputx0x2x0x3x0ComputedData.showPassword" :disabled="tInputx0x2x0x3x0ComputedData.disabled" :prefix-icon="tInputx0x2x0x3x0ComputedData.prefix-icon" :suffix-icon="tInputx0x2x0x3x0ComputedData.suffix-icon" :rows="tInputx0x2x0x3x0ComputedData.rows" :autosize="tInputx0x2x0x3x0ComputedData.autosize" :name="tInputx0x2x0x3x0ComputedData.name" :readonly="replaceCssVariables(filterData(state.isView, componentPropBindingMap?.['t-input-d42f.accd44df8']['readonly'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :step="tInputx0x2x0x3x0ComputedData.step" :autofocus="tInputx0x2x0x3x0ComputedData.autofocus" :form="tInputx0x2x0x3x0ComputedData.form" :label="tInputx0x2x0x3x0ComputedData.label" :tabindex="tInputx0x2x0x3x0ComputedData.tabindex" :validate-event="tInputx0x2x0x3x0ComputedData.validateEvent" :c-style="tInputx0x2x0x3x0ComputedData.cStyle" @change="onchange1770024838082"></t-input></t-col><t-col id="t-col-71f8.22cac535f" class="checkRecord-t-col-0-2-0-4"  :span="tColx0x2x0x4ComputedData.span" :offset="tColx0x2x0x4ComputedData.offset" :push="tColx0x2x0x4ComputedData.push" :pull="tColx0x2x0x4ComputedData.pull" :c-style="tColx0x2x0x4ComputedData.cStyle"><t-text-common id="t-text-common-0ebf.4ed4402f4" class="checkRecord-t-text-common-0-2-0-4-0"  :label="tTextCommonx0x2x0x4x0ComputedData.label" :editable="tTextCommonx0x2x0x4x0ComputedData.editable" :c-style="tTextCommonx0x2x0x4x0ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-c3d9.9dd5f6818" class="checkRecord-t-text-common-0-2-0-4-1"  :label="tTextCommonx0x2x0x4x1ComputedData.label" :editable="tTextCommonx0x2x0x4x1ComputedData.editable" :c-style="tTextCommonx0x2x0x4x1ComputedData.cStyle"></t-text-common></t-col><t-col id="t-col-a5b7.e5373d746" class="checkRecord-t-col-0-2-0-5"  :span="tColx0x2x0x5ComputedData.span" :offset="tColx0x2x0x5ComputedData.offset" :push="tColx0x2x0x5ComputedData.push" :pull="tColx0x2x0x5ComputedData.pull" :c-style="tColx0x2x0x5ComputedData.cStyle"><t-date-picker id="t-date-picker-8320.b5a3b2bed" class="checkRecord-t-date-picker-0-2-0-5-0"  :placeholder="tDatePickerx0x2x0x5x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x2x0x5x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x2x0x5x0ComputedData.endPlaceholder" :type="tDatePickerx0x2x0x5x0ComputedData.type" :clearable="tDatePickerx0x2x0x5x0ComputedData.clearable" :range-separator="tDatePickerx0x2x0x5x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.checkQuesRow.inspect_time, componentPropBindingMap?.['t-date-picker-8320.b5a3b2bed']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x2x0x5x0ComputedData.separator" :readonly="replaceCssVariables(filterData(state.isView, componentPropBindingMap?.['t-date-picker-8320.b5a3b2bed']['readonly'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tDatePickerx0x2x0x5x0ComputedData.editable" :c-style="tDatePickerx0x2x0x5x0ComputedData.cStyle" @date-change="ondateChange1770024948496"></t-date-picker></t-col><t-col id="t-col-ef25.b5a365e38" class="checkRecord-t-col-0-2-0-6"  :span="tColx0x2x0x6ComputedData.span" :offset="tColx0x2x0x6ComputedData.offset" :push="tColx0x2x0x6ComputedData.push" :pull="tColx0x2x0x6ComputedData.pull" :c-style="tColx0x2x0x6ComputedData.cStyle"><t-text-common id="t-text-common-a050.1d1c96c87" class="checkRecord-t-text-common-0-2-0-6-0"  :label="tTextCommonx0x2x0x6x0ComputedData.label" :editable="tTextCommonx0x2x0x6x0ComputedData.editable" :c-style="tTextCommonx0x2x0x6x0ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-4a97.c8afa272" class="checkRecord-t-text-common-0-2-0-6-1"  :label="tTextCommonx0x2x0x6x1ComputedData.label" :editable="tTextCommonx0x2x0x6x1ComputedData.editable" :c-style="tTextCommonx0x2x0x6x1ComputedData.cStyle"></t-text-common></t-col><t-col id="t-col-203c.62c6f3f8a" class="checkRecord-t-col-0-2-0-7"  :span="tColx0x2x0x7ComputedData.span" :offset="tColx0x2x0x7ComputedData.offset" :push="tColx0x2x0x7ComputedData.push" :pull="tColx0x2x0x7ComputedData.pull" :c-style="tColx0x2x0x7ComputedData.cStyle"><t-input id="t-input-1eeb.0b225002a" class="checkRecord-t-input-0-2-0-7-0"  :type="tInputx0x2x0x7x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.checkQuesRow.inspect_content, componentPropBindingMap?.['t-input-1eeb.0b225002a']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tInputx0x2x0x7x0ComputedData.maxlength" :minlength="tInputx0x2x0x7x0ComputedData.minlength" :show-word-limit="tInputx0x2x0x7x0ComputedData.showWordLimit" :placeholder="tInputx0x2x0x7x0ComputedData.placeholder" :clearable="tInputx0x2x0x7x0ComputedData.clearable" :show-password="tInputx0x2x0x7x0ComputedData.showPassword" :disabled="tInputx0x2x0x7x0ComputedData.disabled" :prefix-icon="tInputx0x2x0x7x0ComputedData.prefix-icon" :suffix-icon="tInputx0x2x0x7x0ComputedData.suffix-icon" :rows="tInputx0x2x0x7x0ComputedData.rows" :autosize="tInputx0x2x0x7x0ComputedData.autosize" :name="tInputx0x2x0x7x0ComputedData.name" :readonly="replaceCssVariables(filterData(state.isView, componentPropBindingMap?.['t-input-1eeb.0b225002a']['readonly'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :step="tInputx0x2x0x7x0ComputedData.step" :autofocus="tInputx0x2x0x7x0ComputedData.autofocus" :form="tInputx0x2x0x7x0ComputedData.form" :label="tInputx0x2x0x7x0ComputedData.label" :tabindex="tInputx0x2x0x7x0ComputedData.tabindex" :validate-event="tInputx0x2x0x7x0ComputedData.validateEvent" :c-style="tInputx0x2x0x7x0ComputedData.cStyle" @change="onchange1770024998472"></t-input></t-col><t-col id="t-col-507c.285d605fa" class="checkRecord-t-col-0-2-0-8"  :span="tColx0x2x0x8ComputedData.span" :offset="tColx0x2x0x8ComputedData.offset" :push="tColx0x2x0x8ComputedData.push" :pull="tColx0x2x0x8ComputedData.pull" :c-style="tColx0x2x0x8ComputedData.cStyle"><t-text-common id="t-text-common-d65e.91737cff2" class="checkRecord-t-text-common-0-2-0-8-0"  :label="tTextCommonx0x2x0x8x0ComputedData.label" :editable="tTextCommonx0x2x0x8x0ComputedData.editable" :c-style="tTextCommonx0x2x0x8x0ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-5980.ef464f6e4" class="checkRecord-t-text-common-0-2-0-8-1"  :label="tTextCommonx0x2x0x8x1ComputedData.label" :editable="tTextCommonx0x2x0x8x1ComputedData.editable" :c-style="tTextCommonx0x2x0x8x1ComputedData.cStyle"></t-text-common></t-col><t-col id="t-col-8781.8b785872b" class="checkRecord-t-col-0-2-0-9"  :span="tColx0x2x0x9ComputedData.span" :offset="tColx0x2x0x9ComputedData.offset" :push="tColx0x2x0x9ComputedData.push" :pull="tColx0x2x0x9ComputedData.pull" :c-style="tColx0x2x0x9ComputedData.cStyle"><t-radio id="t-radio-1f4d.d1cfd8932" class="checkRecord-t-radio-0-2-0-9-0"  :options="replaceCssVariables(filterData(state.radioList, componentPropBindingMap?.['t-radio-1f4d.d1cfd8932']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(filterData(state.checkQuesRow.inspect_flag, componentPropBindingMap?.['t-radio-1f4d.d1cfd8932']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tRadiox0x2x0x9x0ComputedData.alias" :disabled="tRadiox0x2x0x9x0ComputedData.disabled" :border="tRadiox0x2x0x9x0ComputedData.border" :size="tRadiox0x2x0x9x0ComputedData.size" :is-use-button="tRadiox0x2x0x9x0ComputedData.isUseButton" :c-style="tRadiox0x2x0x9x0ComputedData.cStyle" @change="onchange1770025545976"></t-radio></t-col><t-col id="t-col-d41c.9836104b8" class="checkRecord-t-col-0-2-0-10"  :span="tColx0x2x0x10ComputedData.span" :offset="tColx0x2x0x10ComputedData.offset" :push="tColx0x2x0x10ComputedData.push" :pull="tColx0x2x0x10ComputedData.pull" :c-style="tColx0x2x0x10ComputedData.cStyle"><t-text-common id="t-text-common-0aa9.ca5cdcdd" class="checkRecord-t-text-common-0-2-0-10-0"  :label="tTextCommonx0x2x0x10x0ComputedData.label" :editable="tTextCommonx0x2x0x10x0ComputedData.editable" :c-style="tTextCommonx0x2x0x10x0ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-0173.8106cd6c8" class="checkRecord-t-text-common-0-2-0-10-1"  :label="tTextCommonx0x2x0x10x1ComputedData.label" :editable="tTextCommonx0x2x0x10x1ComputedData.editable" :c-style="tTextCommonx0x2x0x10x1ComputedData.cStyle"></t-text-common></t-col><t-col id="t-col-c560.539b9b96a" class="checkRecord-t-col-0-2-0-11"  :span="tColx0x2x0x11ComputedData.span" :offset="tColx0x2x0x11ComputedData.offset" :push="tColx0x2x0x11ComputedData.push" :pull="tColx0x2x0x11ComputedData.pull" :c-style="tColx0x2x0x11ComputedData.cStyle"><t-select id="t-select-d0bd.ce1035d7e" class="checkRecord-t-select-0-2-0-11-0"  :active-value="replaceCssVariables(filterData(state.checkQuesRow.status, componentPropBindingMap?.['t-select-d0bd.ce1035d7e']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.selectList, componentPropBindingMap?.['t-select-d0bd.ce1035d7e']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x2x0x11x0ComputedData.alias" :multiple="tSelectx0x2x0x11x0ComputedData.multiple" :placeholder="tSelectx0x2x0x11x0ComputedData.placeholder" :clearable="tSelectx0x2x0x11x0ComputedData.clearable" :disabled="tSelectx0x2x0x11x0ComputedData.disabled" :name="tSelectx0x2x0x11x0ComputedData.name" :autocomplete="tSelectx0x2x0x11x0ComputedData.autocomplete" :filterable="tSelectx0x2x0x11x0ComputedData.filterable" :no-match-text="tSelectx0x2x0x11x0ComputedData.no-match-text" :no-data-text="tSelectx0x2x0x11x0ComputedData.no-data-text" :c-style="tSelectx0x2x0x11x0ComputedData.cStyle" :scrollbar-thumb-color="tSelectx0x2x0x11x0ComputedData.scrollbarThumbColor" :scrollbar-track-color="tSelectx0x2x0x11x0ComputedData.scrollbarTrackColor" :scrollbar-width="tSelectx0x2x0x11x0ComputedData.scrollbarWidth" @change="onchange1770025676367"></t-select></t-col><t-col id="t-col-4b72.a2a02d5bf" class="checkRecord-t-col-0-2-0-12"  :span="tColx0x2x0x12ComputedData.span" :offset="tColx0x2x0x12ComputedData.offset" :push="tColx0x2x0x12ComputedData.push" :pull="tColx0x2x0x12ComputedData.pull" :c-style="tColx0x2x0x12ComputedData.cStyle"><t-text-common id="t-text-common-72a2.a1545fef7" class="checkRecord-t-text-common-0-2-0-12-0"  :label="tTextCommonx0x2x0x12x0ComputedData.label" :editable="tTextCommonx0x2x0x12x0ComputedData.editable" :c-style="tTextCommonx0x2x0x12x0ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-efcf.cbb7d9f72" class="checkRecord-t-text-common-0-2-0-12-1"  :label="tTextCommonx0x2x0x12x1ComputedData.label" :editable="tTextCommonx0x2x0x12x1ComputedData.editable" :c-style="tTextCommonx0x2x0x12x1ComputedData.cStyle"></t-text-common></t-col><t-col id="t-col-b821.91ef551e8" class="checkRecord-t-col-0-2-0-13"  :span="tColx0x2x0x13ComputedData.span" :offset="tColx0x2x0x13ComputedData.offset" :push="tColx0x2x0x13ComputedData.push" :pull="tColx0x2x0x13ComputedData.pull" :c-style="tColx0x2x0x13ComputedData.cStyle"><t-component id="t-component-85ca.010f67d2e" class="checkRecord-t-component-0-2-0-13-0"  :name="tComponentx0x2x0x13x0ComputedData.name" :loading="tComponentx0x2x0x13x0ComputedData.loading" :c-style="tComponentx0x2x0x13x0ComputedData.cStyle" :src="tComponentx0x2x0x13x0ComputedData.src" :component-name="tComponentx0x2x0x13x0ComputedData.componentName" :page-id="tComponentx0x2x0x13x0ComputedData.pageId" :page-code="tComponentx0x2x0x13x0ComputedData.pageCode"></t-component><t-upload-button v-if="state.isView === false" id="t-upload-button-904f.8b90e734a" class="checkRecord-t-upload-button-0-2-0-13-1"  :label="tUploadButtonx0x2x0x13x1ComputedData.label" :is-multiple="tUploadButtonx0x2x0x13x1ComputedData.isMultiple" :is-limit="tUploadButtonx0x2x0x13x1ComputedData.isLimit" :file-type="tUploadButtonx0x2x0x13x1ComputedData.fileType" :c-style="tUploadButtonx0x2x0x13x1ComputedData.cStyle" :params="replaceCssVariables(filterData(state.uploadFileParams, componentPropBindingMap?.['t-upload-button-904f.8b90e734a']['params'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :upload-url="replaceCssVariables(filterData(global.fileUploadUrl, componentPropBindingMap?.['t-upload-button-904f.8b90e734a']['uploadUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @success="onsuccess1770087668699" @error="onerror1770087670604"></t-upload-button></t-col></t-row><t-row id="t-row-2905.a61adabc" class="checkRecord-t-row-0-2-1"  :c-style="tRowx0x2x1ComputedData.cStyle" :gutter="tRowx0x2x1ComputedData.gutter" :justify="tRowx0x2x1ComputedData.justify" :align="tRowx0x2x1ComputedData.align"><t-rect v-if="state.isAdd === false" id="t-rect-4b63.a911d8e98" class="checkRecord-t-rect-0-2-1-0"  :tip="tRectx0x2x1x0ComputedData.tip" :label="tRectx0x2x1x0ComputedData.label" :active="tRectx0x2x1x0ComputedData.active" :c-style="tRectx0x2x1x0ComputedData.cStyle" @click="onclick1770025163136"></t-rect><t-rect v-if="state.isView === false" id="t-rect-ec16.5c45987e" class="checkRecord-t-rect-0-2-1-1"  :tip="tRectx0x2x1x1ComputedData.tip" :label="tRectx0x2x1x1ComputedData.label" :active="tRectx0x2x1x1ComputedData.active" :c-style="tRectx0x2x1x1ComputedData.cStyle" @click="onclick1770025152816"></t-rect></t-row></t-row></div>
</template>

<script>
import io from 'socket.io-client';
import _ from 'lodash';
import {
  reactive, ref, computed, watch, watchEffect,
  onMounted, onUnmounted, onBeforeMount, onBeforeUnmount,
  provide, inject, toRefs, toRef, nextTick, isRef,
  shallowRef, shallowReactive, triggerRef,
  h, createVNode, createElementBlock, openBlock,
  withCtx, withDirectives, withModifiers,
  resolveComponent, defineAsyncComponent,
  markRaw, toRaw, toDisplayString, createElementVNode,
} from 'vue';
import { useRoute } from 'vue-router';
import http from '@/http.js';
import { ComponentLoader, watchComponentVisible, generateCacheKey, requestApi, ResourceLoader, replaceCssVariables, getUrlParam, getQueryParam, guid, runAnimation, setPageScale, mountDynamicComponent, loadInitialApis, fetchApiData, getDataValue, applyFilter, filterData, convertCharacter } from '@/utils.js';
import { themes } from '@/theme.js';
import * as echarts from 'echarts';
import { TCol, TComponent, TDatePicker, TImageBase, TInput, TRadio, TRect, TRow, TSelect, TTextCommon, TUploadButton } from '@ths/design';

export default {
  components: {
    TCol,
    TComponent,
    TDatePicker,
    TImageBase,
    TInput,
    TRadio,
    TRect,
    TRow,
    TSelect,
    TTextCommon,
    TUploadButton,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-text-common-29e6.79de862f8":{"attributeName":"tTextCommonx0x0"},"t-image-base-2f0c.71c3ec2dc":{"attributeName":"tImageBasex0x1","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-row-8eed.6a84951da":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-row-7bb0.79e13b0d7":{"attributeName":"tRowx0x2x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-a682.692e91de8":{"attributeName":"tColx0x2x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-c40c.b49ad3096":{"attributeName":"tTextCommonx0x2x0x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-5dce.0e379ba36":{"attributeName":"tTextCommonx0x2x0x0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-901b.318cb3ee2":{"attributeName":"tColx0x2x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-input-cffd.84312942e":{"attributeName":"tInputx0x2x0x1x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]}},"t-col-2edb.161bb349":{"attributeName":"tColx0x2x0x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-fe94.060c3f7d4":{"attributeName":"tTextCommonx0x2x0x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-4293.5e2d63bbc":{"attributeName":"tTextCommonx0x2x0x2x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-f6b8.8eb1ab429":{"attributeName":"tColx0x2x0x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-input-d42f.accd44df8":{"attributeName":"tInputx0x2x0x3x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]}},"t-col-71f8.22cac535f":{"attributeName":"tColx0x2x0x4","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-0ebf.4ed4402f4":{"attributeName":"tTextCommonx0x2x0x4x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-c3d9.9dd5f6818":{"attributeName":"tTextCommonx0x2x0x4x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-a5b7.e5373d746":{"attributeName":"tColx0x2x0x5","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-8320.b5a3b2bed":{"attributeName":"tDatePickerx0x2x0x5x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-ef25.b5a365e38":{"attributeName":"tColx0x2x0x6","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-a050.1d1c96c87":{"attributeName":"tTextCommonx0x2x0x6x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-4a97.c8afa272":{"attributeName":"tTextCommonx0x2x0x6x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-203c.62c6f3f8a":{"attributeName":"tColx0x2x0x7","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-input-1eeb.0b225002a":{"attributeName":"tInputx0x2x0x7x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]}},"t-col-507c.285d605fa":{"attributeName":"tColx0x2x0x8","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-d65e.91737cff2":{"attributeName":"tTextCommonx0x2x0x8x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-5980.ef464f6e4":{"attributeName":"tTextCommonx0x2x0x8x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-8781.8b785872b":{"attributeName":"tColx0x2x0x9","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-radio-1f4d.d1cfd8932":{"attributeName":"tRadiox0x2x0x9x0","options":{"filters":[]},"active":{"filters":[]},"alias":{"filters":[]},"disabled":{"filters":[]},"border":{"filters":[]},"size":{"filters":[]},"isUseButton":{"filters":[]},"cStyle":{"filters":[]}},"t-col-d41c.9836104b8":{"attributeName":"tColx0x2x0x10","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-0aa9.ca5cdcdd":{"attributeName":"tTextCommonx0x2x0x10x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-0173.8106cd6c8":{"attributeName":"tTextCommonx0x2x0x10x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-c560.539b9b96a":{"attributeName":"tColx0x2x0x11","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-d0bd.ce1035d7e":{"attributeName":"tSelectx0x2x0x11x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"scrollbarThumbColor":{"filters":[]},"scrollbarTrackColor":{"filters":[]},"scrollbarWidth":{"filters":[]}},"t-col-4b72.a2a02d5bf":{"attributeName":"tColx0x2x0x12","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-72a2.a1545fef7":{"attributeName":"tTextCommonx0x2x0x12x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-efcf.cbb7d9f72":{"attributeName":"tTextCommonx0x2x0x12x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-b821.91ef551e8":{"attributeName":"tColx0x2x0x13","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-85ca.010f67d2e":{"attributeName":"tComponentx0x2x0x13x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-upload-button-904f.8b90e734a":{"attributeName":"tUploadButtonx0x2x0x13x1","label":{"filters":[]},"isMultiple":{"filters":[]},"isLimit":{"filters":[]},"fileType":{"filters":[]},"cStyle":{"filters":[]},"params":{"filters":[]},"uploadUrl":{"filters":[]}},"t-row-2905.a61adabc":{"attributeName":"tRowx0x2x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-rect-4b63.a911d8e98":{"attributeName":"tRectx0x2x1x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-ec16.5c45987e":{"attributeName":"tRectx0x2x1x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
// 页面内注入全局变量和事件
const rootData = inject('root');
const global = reactive({
...toRefs(rootData)
});
// 路由
const route = useRoute();
// 创建 DOM 引用

// 当前页面使用的变量
const state = reactive({
   screenSize: "",
   isAdd: false,
   deleteFileId: "",
   total: "0",
   tableData: [],
   businessKey: "checkRecordBase",
   uploadFileParams: {"businessKey":"","subBusinessKey":"","createUser":""},
   fileName: "",
   time: "",
   selectList: [{"value":"0","label":"待整改","disabled":false},{"value":"1","label":"整改中","disabled":false},{"value":"2","label":"已办结","disabled":false}],
   radioList: [{"label":"1","value":"是","disabled":false},{"label":"0","value":"否","disabled":false}],
   isView: false,
   checkQuesRow: {"inspect_object_name":"","inspect_user":"","inspect_time":"","inspect_content":"","inspect_flag":"","status":"","inspect_id":"","inspect_object_code":"","inspect_object_type":"","region_code":"","inspect_user_code":"","inspect_address":"","longitude":"","latitude":""},
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
const componentState = reactive({
tImageBasex0x1: {
defaultStyle: {
            default: {"width":"800px","height":"500px","position":"unset","left":"-873px","top":"-29px"},
            
            },
 default: { 
 
src:"assets/images/2026-01-29/3f5b9b2a53694325b74f8ab63394aeee.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"800px","height":"500px","position":"unset","left":"-873px","top":"-29px"}}}, 
 },
},
tRowx0x2: {
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
tRowx0x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","left":"0px","top":"0px","min-height":"400px","gap":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"start","left":"0px","top":"0px","min-height":"400px","gap":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x2x0x0: {
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
tTextCommonx0x2x0x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"81px","top":"-98px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"},
            
            },
 default: { 
 
label:"*",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"81px","top":"-98px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"}},"itemWrapper":{"default":{"paddingRight":"0px"}},"label":{"active":{"marginRight":"4px"}}}, 
 },
},
tTextCommonx0x2x0x0x1: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"91px","top":"-88px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"检查对象",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"91px","top":"-88px","background":"unset","backgroundClip":"unset","animationName":""}},"itemWrapper":{"default":{"paddingRight":"0px"}}}, 
 },
},
tColx0x2x0x1: {
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
tInputx0x2x0x1x0: {
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
tColx0x2x0x2: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"312px","top":"-26px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingRight":"10px","borderRight":"4px solid var(--business-dialog-bg)","min-height":"36px"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"312px","top":"-26px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingRight":"10px","borderRight":"4px solid var(--business-dialog-bg)","min-height":"36px"}}}, 
 },
},
tTextCommonx0x2x0x2x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"91px","top":"-88px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"},
            
            },
 default: { 
 
label:"*",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"91px","top":"-88px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"}},"itemWrapper":{"default":{"paddingRight":"0px"}},"label":{"active":{"marginRight":"4px"}}}, 
 },
},
tTextCommonx0x2x0x2x1: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"54px","top":"-160px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"检查人员",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"54px","top":"-160px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tColx0x2x0x3: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"302px","top":"-36px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingLeft":"10px","min-width":"0px","min-height":"36px","paddingRight":"10px","borderRight":"4px solid var(--business-dialog-bg)"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"302px","top":"-36px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingLeft":"10px","min-width":"0px","min-height":"36px","paddingRight":"10px","borderRight":"4px solid var(--business-dialog-bg)"}}}, 
 },
},
tInputx0x2x0x3x0: {
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
tColx0x2x0x4: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"292px","top":"-46px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingRight":"10px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"4px solid var(--business-dialog-bg)","borderBottom":"0px solid ","min-height":"36px"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"292px","top":"-46px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingRight":"10px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"4px solid var(--business-dialog-bg)","borderBottom":"0px solid ","min-height":"36px"},"hover":{"paddingRight":"10px"}}}, 
 },
},
tTextCommonx0x2x0x4x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"101px","top":"-78px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"},
            
            },
 default: { 
 
label:"*",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"101px","top":"-78px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"}},"itemWrapper":{"default":{"paddingRight":"0px"}},"label":{"active":{"marginRight":"4px"}}}, 
 },
},
tTextCommonx0x2x0x4x1: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"71px","top":"-129px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"检查时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"71px","top":"-129px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tColx0x2x0x5: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"282px","top":"-56px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingLeft":"10px","min-height":"36px"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"282px","top":"-56px","backgroundColor":"var(--business-show-bg10)","animationName":"","paddingLeft":"10px","min-height":"36px"},"hover":{"paddingLeft":"10px"}}}, 
 },
},
tDatePickerx0x2x0x5x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"date",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16)","lineHeight":"var(--business-text-size-16)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}}, 
 },
},
tColx0x2x0x6: {
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
tTextCommonx0x2x0x6x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"-68px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"},
            
            },
 default: { 
 
label:"*",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"111px","top":"-68px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"}},"itemWrapper":{"default":{"paddingRight":"0px"}},"label":{"active":{"marginRight":"4px"}}}, 
 },
},
tTextCommonx0x2x0x6x1: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"126px","top":"-225px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"检查内容",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"126px","top":"-225px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tColx0x2x0x7: {
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
tInputx0x2x0x7x0: {
defaultStyle: {
            default: {"width":"100% !important","height":"auto","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)","min-height":"100px"},
            
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
cStyle:{"wrapper":{"default":{"width":"100% !important","height":"auto","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)","min-height":"100px"},"hover":{"borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","width":"100%","height":"auto","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"},"focus":{"borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"}},"placeholder":{"default":{"fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","color":"#C0C4CC"}},"itemWrapper":{"default":{"width":"100%"}}}, 
 },
},
tColx0x2x0x8: {
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
tTextCommonx0x2x0x8x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"121px","top":"-58px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"},
            
            },
 default: { 
 
label:"*",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"121px","top":"-58px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"}},"itemWrapper":{"default":{"paddingRight":"0px"}},"label":{"active":{"marginRight":"4px"}}}, 
 },
},
tTextCommonx0x2x0x8x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"55px","top":"-185px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"是否存在环境问题",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"55px","top":"-185px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tColx0x2x0x9: {
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
tRadiox0x2x0x9x0: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"100%","height":"30px","justifyContent":"flex-start","flexDirection":"row","gap":"auto"},
            
            },
 default: { 
 
options:[{"label":"1","value":"是","disabled":false},{"label":"0","value":"否","disabled":false}],
active:"",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"100%","height":"30px","justifyContent":"flex-start","flexDirection":"row","gap":"auto"}},"itemWrapper":{"default":{"padding":0,"margin":0,"justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","gap":"10px","marginRight":"10px"}},"label":{"default":{"--t-radio-disabled-text-color":"#fff","padding":0,"color":"var(--t-font-color-gy1) !important","background":"unset","backgroundClip":"unset","fontSize":"var(--text-size-14)","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","width":"auto","height":"","lineHeight":"var(--text-size-14)"},"hover":{"--t-radio-disabled-text-color":"#fff","color":"var(--t-font-color-gy1)","background":"unset","backgroundClip":"unset","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"},"active":{"--t-radio-disabled-text-color":"#fff","color":"var(--t-font-color-gy1)","background":"unset","backgroundClip":"unset","backgroundColor":"","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"},"disabled":{"--t-radio-disabled-text-color":"#fff","color":"#fff"}},"radioBorder":{"default":{"background":"rgba(255, 255, 255, 1)","width":"12px","height":"12px","border":"auto !important","borderTop":"1px Solid var(--t-radio-border-color)","borderLeft":"1px Solid var(--t-radio-border-color)","borderBottom":"1px Solid var(--t-radio-border-color)","borderRight":"1px Solid var(--t-radio-border-color)"},"hover":{"borderLeft":"1px solid var(--t-radio-hover-border-color)","borderTop":"1px solid var(--t-radio-hover-border-color)","borderRight":"1px solid var(--t-radio-hover-border-color)","borderBottom":"1px solid var(--t-radio-hover-border-color)"},"active":{"border":"auto !important","borderTop":"1px Solid var(--t-radio-active-border-color)","borderLeft":"1px Solid var(--t-radio-active-border-color)","borderBottom":"1px Solid var(--t-radio-active-border-color)","borderRight":"1px Solid var(--t-radio-active-border-color)"}},"circle":{"default":{"background":"var(--t-radio-bg-color)","width":"4px","height":"4px","fillType":"color","backgroundColor":"rgba(20, 112, 204, 0)"},"active":{"background":"var(--t-radio-active-bg-color)","fillType":"color","backgroundColor":"var(--area-font-active-color)","color":"var(--area-font-active-color)"}},"radioButton":{"default":{"width":"px","height":"px","background":"rgba(255, 255, 255, 1)","border":"auto !important","borderTop":"1px Solid var(--t-radio-button-border-color)","borderLeft":"0px Solid var(--t-radio-button-border-color)","borderBottom":"1px Solid var(--t-radio-button-border-color)","borderRight":"1px Solid var(--t-radio-button-border-color)"},"active":{"background":"var(--t-radio-button-active-bg-color)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","fillType":"color"}},"radioButtonText":{"default":{"textAlign":"center","border":"unset","color":"var(--t-radio-button-color)","background":"unset","backgroundClip":"unset"},"active":{"color":"var(--t-radio-button-active-color)","border":"unset"},"hover":{"color":"var(--t-radio-button-hover-color)"}},"itemFirstWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"4px","border":"auto !important","borderTop":"1px Solid var(--t-radio-button-border-color)","borderLeft":"1px Solid var(--t-radio-button-border-color)","borderBottom":"1px Solid var(--t-radio-button-border-color)","borderRight":"1px Solid var(--t-radio-button-border-color)"}},"itemLastWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"0px"}}}, 
 },
},
tColx0x2x0x10: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"232px","top":"-106px","backgroundColor":"var(--business-show-bg10)","animationName":"","borderRight":"4px solid var(--business-dialog-bg)","paddingRight":"10px","min-height":"36px"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"232px","top":"-106px","backgroundColor":"var(--business-show-bg10)","animationName":"","borderRight":"4px solid var(--business-dialog-bg)","paddingRight":"10px","min-height":"36px"}}}, 
 },
},
tTextCommonx0x2x0x10x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"131px","top":"-48px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"},
            
            },
 default: { 
 
label:"*",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"131px","top":"-48px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"}},"itemWrapper":{"default":{"paddingRight":"0px"}},"label":{"active":{"marginRight":"4px"}}}, 
 },
},
tTextCommonx0x2x0x10x1: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"30px","top":"-210px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"当前状态",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"30px","top":"-210px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tColx0x2x0x11: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"192px","top":"-146px","backgroundColor":"var(--business-show-bg10)","animationName":"","min-height":"36px"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"192px","top":"-146px","backgroundColor":"var(--business-show-bg10)","animationName":"","min-height":"36px"}}}, 
 },
},
tSelectx0x2x0x11x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","marginLeft":"20px","marginRight":"20px"},
            
            },
 default: { 
 
activeValue:"",
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
tColx0x2x0x12: {
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
tTextCommonx0x2x0x12x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"141px","top":"-38px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"},
            
            },
 default: { 
 
label:"*",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--t-aqi-red)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"24px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"141px","top":"-38px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"4px","textDecoration":"none"}},"itemWrapper":{"default":{"paddingRight":"0px"}},"label":{"active":{"marginRight":"4px"}}}, 
 },
},
tTextCommonx0x2x0x12x1: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-25px","top":"-140px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"上传附件",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-25px","top":"-140px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tColx0x2x0x13: {
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
tComponentx0x2x0x13x0: {
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
tUploadButtonx0x2x0x13x1: {
defaultStyle: {
            default: {"width":"70px","height":"36px","marginBottom":"10px"},
            
            },
 default: { 
 
label:"上传",
isMultiple:false,
isLimit:false,
fileType:"docx,doc,pdf,xlsx,txt,jpg,png",
cStyle:{"wrapper":{"default":{"width":"70px","height":"36px","marginBottom":"10px"}},"buttonWrapper":{"default":{"fontFamily":"思源","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","textAlign":"center","color":"var(--business-theme)","background":"var(--t-upload-button-bg-color)","fillType":"color","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","justifyContent":"center","alignItems":"center","flexDirection":"column","display":"flex","backgroundColor":"rgba(23, 62, 228, 0)","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"background":"var(--t-upload-button-hover-bg-color)","fillType":"color","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"rgba(23, 62, 228, 0)","borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","color":"var(--business-strong)"}}},
params:{"businessKey":"","subBusinessKey":"","createUser":""},
uploadUrl:"http://192.168.24.106:10157/waterevaluate/api/components/file/upload", 
 },
},
tRowx0x2x1: {
defaultStyle: {
            default: {"width":"100%","height":"52px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"52px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tRectx0x2x1x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px solid rgba(23,62,228,0)","borderLeft":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","position":"unset","left":"444px","top":"-104px","backgroundColor":"var(--business-btn-bg)","color":"#fff","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","paddingLeft":"20px","paddingRight":"20px","paddingTop":"10px","paddingBottom":"10px","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px","cursor":"pointer","animationName":"","marginLeft":"20px"},
            
            },
 default: { 
 
tip:false,
label:"反馈记录",
active:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px solid rgba(23,62,228,0)","borderLeft":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","position":"unset","left":"444px","top":"-104px","backgroundColor":"var(--business-btn-bg)","color":"#fff","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","paddingLeft":"20px","paddingRight":"20px","paddingTop":"10px","paddingBottom":"10px","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px","cursor":"pointer","animationName":"","marginLeft":"20px"},"active":{"background":"var(--t-brand8)","color":"var(--business-strong)","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)"},"hover":{"color":"var(--business-strong)","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","width":"auto","marginLeft":"20px","whiteSpace":"nowrap"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x2x1x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px solid rgba(23,62,228,0)","borderLeft":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","position":"unset","left":"571px","top":"-102px","backgroundColor":"var(--business-btn-bg)","color":"#fff","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","paddingLeft":"20px","paddingRight":"20px","paddingTop":"10px","paddingBottom":"10px","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px","cursor":"pointer","marginLeft":"20px"},
            
            },
 default: { 
 
tip:false,
label:"保存",
active:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px solid rgba(23,62,228,0)","borderLeft":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","position":"unset","left":"571px","top":"-102px","backgroundColor":"var(--business-btn-bg)","color":"#fff","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","paddingLeft":"20px","paddingRight":"20px","paddingTop":"10px","paddingBottom":"10px","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px","cursor":"pointer","marginLeft":"20px"},"active":{"background":"var(--t-brand8)","color":"var(--business-strong)","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)"},"hover":{"color":"var(--business-strong)","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","width":"auto","marginLeft":"20px","whiteSpace":"nowrap"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const initPageData = () => {
// console.log('检查记录弹窗', global.businessDialog.dialogParmas, global.dialogInstance);

console.log('单条检查记录弹窗', global.waterGlobalVariables.historyTask);

// 获取当天日期字符串
function getTodayString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0'); // 01-12
  const day = String(d.getDate()).padStart(2, '0');        // 01-31
  return `${year}-${month}-${day}`;
}
 
state.checkQuesRow = {
  ...global.waterGlobalVariables?.historyTask?.checkQuesRow,
  "inspect_object_code": global.waterGlobalVariables?.historyTask?.checkObjInfo?.inspect_object_code || '',
  "inspect_object_name": global.waterGlobalVariables?.historyTask?.checkObjInfo?.inspect_object_name || '',
  "inspect_object_type": global.waterGlobalVariables?.historyTask?.checkObjInfo?.inspect_object_type || '',
  "region_code": global.waterGlobalVariables?.historyTask?.checkObjInfo?.region_code || '',
  // 如果是编辑、查看，就用表格传入的，如果是新增，就自己生成一个
  "inspect_id": global.waterGlobalVariables?.historyTask?.checkQuesRow?.inspect_id || `CHECK_INS_${Math.random() * 100000000000}`,
  "inspect_content": global.waterGlobalVariables?.historyTask?.checkQuesRow?.inspect_content || '',
  "inspect_user": global.waterGlobalVariables?.historyTask?.checkQuesRow?.inspect_user || localStorage.getItem('lastUserName'),
  "inspect_user_code": global.waterGlobalVariables?.historyTask?.checkQuesRow?.inspect_user_code || localStorage.getItem('lastUserId'),
  "inspect_time": global.waterGlobalVariables?.historyTask?.checkQuesRow?.inspect_time || getTodayString(),
  "inspect_flag": global.waterGlobalVariables?.historyTask?.checkQuesRow?.inspect_flag || '',
  "status": global.waterGlobalVariables?.historyTask?.checkQuesRow?.status || '',
  "status_name": global.waterGlobalVariables?.historyTask?.checkQuesRow?.status_name || '',
};

// 判断是否新增
state.isAdd = global.waterGlobalVariables.historyTask.action === '新增';

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

// 拼接上传参数
state.deleteFileId = ''; // 清空删除id
state.time = Math.random(); // 防止重复请求
// 拼接上传参数
state.uploadFileParams = {
  "businessKey": state.businessKey,
  "subBusinessKey": state.checkQuesRow.inspect_id,
  "createUser": localStorage.getItem('lastUserName'),
}
// 请求附件列表数据
apiRegistry.getListData.request();

// 提供给内部附件列表
provide('state', state)

console.log('初始化检查页面', state.isView, state.checkQuesRow, state.uploadFileParams);
};
const handleSave = () => {
console.log('保存', state.checkQuesRow);

if (!state.checkQuesRow.inspect_object_name.trim()) {
  ElementPlus.ElMessage({
    message: '请输入检查对象',
    type: 'warning',
  });
  return;
}

if (!state.checkQuesRow.inspect_user.trim()) {
  ElementPlus.ElMessage({
    message: '请输入检查人员',
    type: 'warning',
  });
  return;
}

if (!state.checkQuesRow.inspect_time.trim()) {
  ElementPlus.ElMessage({
    message: '请选择检查时间',
    type: 'warning',
  });
  return;
}

if (!state.checkQuesRow.inspect_content.trim()) {
  ElementPlus.ElMessage({
    message: '请输入检查内容',
    type: 'warning',
  });
  return;
}

if (!state.checkQuesRow.inspect_flag.trim()) {
  ElementPlus.ElMessage({
    message: '请选择是否存在环境问题',
    type: 'warning',
  });
  return;
}

if (!state.checkQuesRow.status.trim()) {
  ElementPlus.ElMessage({
    message: '请选择当前状态',
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

state.time = Math.random(); // 防止重复请求
if (state.isAdd) {
  apiRegistry.handleRecordAdd.request();
} else {
  // apiRegistry.handleRecordEdit.request();

  const url = `${global.businessServiceBaseUrl}/waterevaluate/inspect/update`;
  const token = localStorage.getItem('token');

  axios.put(
    url,
    {
      time: state.time,
      "inspectId": state.checkQuesRow.inspect_id,
      "inspectObjectCode": state.checkQuesRow.inspect_object_code,
      "inspectObjectName": state.checkQuesRow.inspect_object_name,
      "inspectObjectType": state.checkQuesRow.inspect_object_type,
      "inspectContent": state.checkQuesRow.inspect_content,
      "inspectUser": state.checkQuesRow.inspect_user,
      "inspectUserCode": state.checkQuesRow.inspect_user_code,
      "inspectFlag": state.checkQuesRow.inspect_flag,
      "longitude": state.checkQuesRow.longitude,
      "latitude": state.checkQuesRow.latitude,
      "inspectAddress": state.checkQuesRow.inspect_address,
      "regionCode": state.checkQuesRow.region_code,
      status: state.checkQuesRow.status
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

      console.log('弹唱实例', global.dialogInstance);
      global.dialogInstance.close();

    }
  }).catch(error => {
    console.log('更新失败', error)
    ElementPlus.ElMessage.error('更新失败，请重试');
  });
}

// 关闭弹窗
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'closeDialog',  // 消息类型名称
    data: {}
  }
);
};
const handleReview = () => {
console.log('点击反馈记录', state.checkQuesRow);

rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "createDialog", // 消息名称
  data: {
    params: {
      // 新建、编辑、查看
      title: `反馈记录`,
      // maxHeight: "997px",
      // maxWidth: "1600px",
      // minHeight: "716px",
      // minWidth: "1002px",
      maxHeight: "670px",
      maxWidth: "1100px",
      minHeight: "416px",
      minWidth: "850px",
      contentComName: "feedbackRecordComponent",
      dialogParams: {
        row: global.waterGlobalVariables.historyTask.returnQuesRow,
        action: '反馈',
      },
    }
  }, // 发送的数据
});
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
const onchange1770024814064 = (value) => {
// 设置变量值
state.checkQuesRow.inspect_object_name = value;
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
state.checkQuesRow.inspect_content = value;
};
const onchange1770025545976 = (data,selectOption) => {
// 设置变量值
state.checkQuesRow.inspect_flag = data;
};
const onchange1770025676367 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.checkQuesRow.status = value;
};
const onsuccess1770087668699 = (response,file) => {
// 执行自定义方法
uploadFileSuccess(file);
};
const onerror1770087670604 = (error,file) => {
// 执行自定义方法
uploadFileError();
};
const onclick1770025163136 = () => {
// 执行自定义方法
handleReview();
};
const onclick1770025152816 = () => {
// 执行自定义方法
handleSave();
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
              config: {"url":"/waterevaluate/api/components/file/pageList","method":"post","baseURL":"global.foshanServiceBaseUrl","data":{"time":"state.time","fileName":"","pageNum":1,"pageSize":10000,"subBusinessKey":"state.checkQuesRow.inspect_id","businessKey":"state.businessKey"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/api/components/file/pageList","method":"post","baseURL":global.foshanServiceBaseUrl,"data":{"time":state.time,"fileName":"","pageNum":1,"pageSize":10000,"subBusinessKey":state.checkQuesRow.inspect_id,"businessKey":state.businessKey},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-/waterevaluate/api/components/file/pageList',  {"time":state.time,"fileName":"","pageNum":1,"pageSize":10000,"subBusinessKey":state.checkQuesRow.inspect_id,"businessKey":state.businessKey});
                   
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
              config: {"url":"/waterevaluate/inspect/add","method":"post","baseURL":"global.foshanServiceBaseUrl","data":{"time":"state.time","inspectId":"state.checkQuesRow.inspect_id","inspectObjectCode":"state.checkQuesRow.inspect_object_code","inspectObjectName":"state.checkQuesRow.inspect_object_name","inspectObjectType":"state.checkQuesRow.inspect_object_type","inspectContent":"state.checkQuesRow.inspect_content","inspectUser":"state.checkQuesRow.inspect_user","inspectUserCode":"state.checkQuesRow.inspect_user_code","inspectFlag":"state.checkQuesRow.inspect_flag","status":"state.checkQuesRow.status","longitude":"state.checkQuesRow.longitude","latitude":"state.checkQuesRow.latitude","inspectAddress":"state.checkQuesRow.inspect_address","regionCode":"state.checkQuesRow.region_code"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/inspect/add","method":"post","baseURL":global.foshanServiceBaseUrl,"data":{"time":state.time,"inspectId":state.checkQuesRow.inspect_id,"inspectObjectCode":state.checkQuesRow.inspect_object_code,"inspectObjectName":state.checkQuesRow.inspect_object_name,"inspectObjectType":state.checkQuesRow.inspect_object_type,"inspectContent":state.checkQuesRow.inspect_content,"inspectUser":state.checkQuesRow.inspect_user,"inspectUserCode":state.checkQuesRow.inspect_user_code,"inspectFlag":state.checkQuesRow.inspect_flag,"status":state.checkQuesRow.status,"longitude":state.checkQuesRow.longitude,"latitude":state.checkQuesRow.latitude,"inspectAddress":state.checkQuesRow.inspect_address,"regionCode":state.checkQuesRow.region_code},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-/waterevaluate/inspect/add',  {"time":state.time,"inspectId":state.checkQuesRow.inspect_id,"inspectObjectCode":state.checkQuesRow.inspect_object_code,"inspectObjectName":state.checkQuesRow.inspect_object_name,"inspectObjectType":state.checkQuesRow.inspect_object_type,"inspectContent":state.checkQuesRow.inspect_content,"inspectUser":state.checkQuesRow.inspect_user,"inspectUserCode":state.checkQuesRow.inspect_user_code,"inspectFlag":state.checkQuesRow.inspect_flag,"status":state.checkQuesRow.status,"longitude":state.checkQuesRow.longitude,"latitude":state.checkQuesRow.latitude,"inspectAddress":state.checkQuesRow.inspect_address,"regionCode":state.checkQuesRow.region_code});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['handleRecordAdd'] = res.data;
                
     console.log('新增检查记录', res);
if (res.data.code === 200 && res.data.data === 1) {
  ElementPlus.ElMessage.success('新增成功');
  global.waterGlobalVariables.historyTask.returnQuesRow.inspect_id = state.checkQuesRow.inspect_id || '';
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
              config: {"url":"/waterevaluate/inspect/update","method":"post","baseURL":"global.foshanServiceBaseUrl","data":{"status":"state.checkQuesRow.status","time":"state.time","inspectId":"state.checkQuesRow.inspect_id","inspectObjectCode":"state.checkQuesRow.inspect_object_code","inspectObjectName":"state.checkQuesRow.inspect_object_name","inspectObjectType":"state.checkQuesRow.inspect_object_type","inspectContent":"state.checkQuesRow.inspect_content","inspectUser":"state.checkQuesRow.inspect_user","inspectUserCode":"state.checkQuesRow.inspect_user_code","inspectFlag":"state.checkQuesRow.inspect_flag","longitude":"state.checkQuesRow.longitude","latitude":"state.checkQuesRow.latitude","inspectAddress":"state.checkQuesRow.inspect_address","regionCode":"state.checkQuesRow.region_code"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/inspect/update","method":"post","baseURL":global.foshanServiceBaseUrl,"data":{"status":state.checkQuesRow.status,"time":state.time,"inspectId":state.checkQuesRow.inspect_id,"inspectObjectCode":state.checkQuesRow.inspect_object_code,"inspectObjectName":state.checkQuesRow.inspect_object_name,"inspectObjectType":state.checkQuesRow.inspect_object_type,"inspectContent":state.checkQuesRow.inspect_content,"inspectUser":state.checkQuesRow.inspect_user,"inspectUserCode":state.checkQuesRow.inspect_user_code,"inspectFlag":state.checkQuesRow.inspect_flag,"longitude":state.checkQuesRow.longitude,"latitude":state.checkQuesRow.latitude,"inspectAddress":state.checkQuesRow.inspect_address,"regionCode":state.checkQuesRow.region_code},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-/waterevaluate/inspect/update',  {"status":state.checkQuesRow.status,"time":state.time,"inspectId":state.checkQuesRow.inspect_id,"inspectObjectCode":state.checkQuesRow.inspect_object_code,"inspectObjectName":state.checkQuesRow.inspect_object_name,"inspectObjectType":state.checkQuesRow.inspect_object_type,"inspectContent":state.checkQuesRow.inspect_content,"inspectUser":state.checkQuesRow.inspect_user,"inspectUserCode":state.checkQuesRow.inspect_user_code,"inspectFlag":state.checkQuesRow.inspect_flag,"longitude":state.checkQuesRow.longitude,"latitude":state.checkQuesRow.latitude,"inspectAddress":state.checkQuesRow.inspect_address,"regionCode":state.checkQuesRow.region_code});
                   
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
};
 function handleWindowResize() {
                            setPageScale('t-l-c-checkRecord', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPageData();
/* 接收socket.io消息 */
const onSocketChange2f2f7890338d4c858737 = function (data) {
if(data.type === "deleteCheckRecordFile"){
try{
// 执行自定义方法
handleDeleteFile(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange2f2f7890338d4c858737);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange2f2f7890338d4c858737);
});
onMounted(() => {
setPageScale('t-l-c-checkRecord', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tImageBasex0x1ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x1.default, componentState.tImageBasex0x1?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tRowx0x2x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x2x0.default, componentState.tRowx0x2x0?.[state.screenSize]));

 const tColx0x2x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0x0.default, componentState.tColx0x2x0x0?.[state.screenSize]));

 const tTextCommonx0x2x0x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x0x0.default, componentState.tTextCommonx0x2x0x0x0?.[state.screenSize]));

 const tTextCommonx0x2x0x0x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x0x1.default, componentState.tTextCommonx0x2x0x0x1?.[state.screenSize]));

 const tColx0x2x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0x1.default, componentState.tColx0x2x0x1?.[state.screenSize]));

 const tInputx0x2x0x1x0ComputedData = computed(() => _.merge({}, componentState.tInputx0x2x0x1x0.default, componentState.tInputx0x2x0x1x0?.[state.screenSize]));

 const tColx0x2x0x2ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0x2.default, componentState.tColx0x2x0x2?.[state.screenSize]));

 const tTextCommonx0x2x0x2x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x2x0.default, componentState.tTextCommonx0x2x0x2x0?.[state.screenSize]));

 const tTextCommonx0x2x0x2x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x2x1.default, componentState.tTextCommonx0x2x0x2x1?.[state.screenSize]));

 const tColx0x2x0x3ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0x3.default, componentState.tColx0x2x0x3?.[state.screenSize]));

 const tInputx0x2x0x3x0ComputedData = computed(() => _.merge({}, componentState.tInputx0x2x0x3x0.default, componentState.tInputx0x2x0x3x0?.[state.screenSize]));

 const tColx0x2x0x4ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0x4.default, componentState.tColx0x2x0x4?.[state.screenSize]));

 const tTextCommonx0x2x0x4x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x4x0.default, componentState.tTextCommonx0x2x0x4x0?.[state.screenSize]));

 const tTextCommonx0x2x0x4x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x4x1.default, componentState.tTextCommonx0x2x0x4x1?.[state.screenSize]));

 const tColx0x2x0x5ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0x5.default, componentState.tColx0x2x0x5?.[state.screenSize]));

 const tDatePickerx0x2x0x5x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x2x0x5x0.default, componentState.tDatePickerx0x2x0x5x0?.[state.screenSize]));

 const tColx0x2x0x6ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0x6.default, componentState.tColx0x2x0x6?.[state.screenSize]));

 const tTextCommonx0x2x0x6x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x6x0.default, componentState.tTextCommonx0x2x0x6x0?.[state.screenSize]));

 const tTextCommonx0x2x0x6x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x6x1.default, componentState.tTextCommonx0x2x0x6x1?.[state.screenSize]));

 const tColx0x2x0x7ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0x7.default, componentState.tColx0x2x0x7?.[state.screenSize]));

 const tInputx0x2x0x7x0ComputedData = computed(() => _.merge({}, componentState.tInputx0x2x0x7x0.default, componentState.tInputx0x2x0x7x0?.[state.screenSize]));

 const tColx0x2x0x8ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0x8.default, componentState.tColx0x2x0x8?.[state.screenSize]));

 const tTextCommonx0x2x0x8x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x8x0.default, componentState.tTextCommonx0x2x0x8x0?.[state.screenSize]));

 const tTextCommonx0x2x0x8x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x8x1.default, componentState.tTextCommonx0x2x0x8x1?.[state.screenSize]));

 const tColx0x2x0x9ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0x9.default, componentState.tColx0x2x0x9?.[state.screenSize]));

 const tRadiox0x2x0x9x0ComputedData = computed(() => _.merge({}, componentState.tRadiox0x2x0x9x0.default, componentState.tRadiox0x2x0x9x0?.[state.screenSize]));

 const tColx0x2x0x10ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0x10.default, componentState.tColx0x2x0x10?.[state.screenSize]));

 const tTextCommonx0x2x0x10x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x10x0.default, componentState.tTextCommonx0x2x0x10x0?.[state.screenSize]));

 const tTextCommonx0x2x0x10x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x10x1.default, componentState.tTextCommonx0x2x0x10x1?.[state.screenSize]));

 const tColx0x2x0x11ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0x11.default, componentState.tColx0x2x0x11?.[state.screenSize]));

 const tSelectx0x2x0x11x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2x0x11x0.default, componentState.tSelectx0x2x0x11x0?.[state.screenSize]));

 const tColx0x2x0x12ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0x12.default, componentState.tColx0x2x0x12?.[state.screenSize]));

 const tTextCommonx0x2x0x12x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x12x0.default, componentState.tTextCommonx0x2x0x12x0?.[state.screenSize]));

 const tTextCommonx0x2x0x12x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x12x1.default, componentState.tTextCommonx0x2x0x12x1?.[state.screenSize]));

 const tColx0x2x0x13ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0x13.default, componentState.tColx0x2x0x13?.[state.screenSize]));

 const tComponentx0x2x0x13x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2x0x13x0.default, componentState.tComponentx0x2x0x13x0?.[state.screenSize]));

 const tUploadButtonx0x2x0x13x1ComputedData = computed(() => _.merge({}, componentState.tUploadButtonx0x2x0x13x1.default, componentState.tUploadButtonx0x2x0x13x1?.[state.screenSize]));

 const tRowx0x2x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x2x1.default, componentState.tRowx0x2x1?.[state.screenSize]));

 const tRectx0x2x1x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x1x0.default, componentState.tRectx0x2x1x0?.[state.screenSize]));

 const tRectx0x2x1x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x1x1.default, componentState.tRectx0x2x1x1?.[state.screenSize]));

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
tImageBasex0x1ComputedData,
tRowx0x2ComputedData,
tRowx0x2x0ComputedData,
tColx0x2x0x0ComputedData,
tTextCommonx0x2x0x0x0ComputedData,
tTextCommonx0x2x0x0x1ComputedData,
tColx0x2x0x1ComputedData,
tInputx0x2x0x1x0ComputedData,
tColx0x2x0x2ComputedData,
tTextCommonx0x2x0x2x0ComputedData,
tTextCommonx0x2x0x2x1ComputedData,
tColx0x2x0x3ComputedData,
tInputx0x2x0x3x0ComputedData,
tColx0x2x0x4ComputedData,
tTextCommonx0x2x0x4x0ComputedData,
tTextCommonx0x2x0x4x1ComputedData,
tColx0x2x0x5ComputedData,
tDatePickerx0x2x0x5x0ComputedData,
tColx0x2x0x6ComputedData,
tTextCommonx0x2x0x6x0ComputedData,
tTextCommonx0x2x0x6x1ComputedData,
tColx0x2x0x7ComputedData,
tInputx0x2x0x7x0ComputedData,
tColx0x2x0x8ComputedData,
tTextCommonx0x2x0x8x0ComputedData,
tTextCommonx0x2x0x8x1ComputedData,
tColx0x2x0x9ComputedData,
tRadiox0x2x0x9x0ComputedData,
tColx0x2x0x10ComputedData,
tTextCommonx0x2x0x10x0ComputedData,
tTextCommonx0x2x0x10x1ComputedData,
tColx0x2x0x11ComputedData,
tSelectx0x2x0x11x0ComputedData,
tColx0x2x0x12ComputedData,
tTextCommonx0x2x0x12x0ComputedData,
tTextCommonx0x2x0x12x1ComputedData,
tColx0x2x0x13ComputedData,
tComponentx0x2x0x13x0ComputedData,
tUploadButtonx0x2x0x13x1ComputedData,
tRowx0x2x1ComputedData,
tRectx0x2x1x0ComputedData,
tRectx0x2x1x1ComputedData,
onchange1770024814064,
onchange1770024838082,
ondateChange1770024948496,
onchange1770024998472,
onchange1770025545976,
onchange1770025676367,
onsuccess1770087668699,
onerror1770087670604,
onclick1770025163136,
onclick1770025152816,
};
},
}
</script>

<style scoped>
.t-l-c-checkRecord {
position: relative;
overflow: hidden;
--theme-color: var(--t-brand8);
--theme-color-opacity-10: rgba(var(--t-brand8), .1);
--theme-color-opacity-15: rgba(var(--t-brand8), .15);
--theme-color-opacity-40: rgba(var(--t-brand8), .4);
--theme-color-opacity-60: rgba(var(--t-brand8), .6);
--theme-color-opacity-80: rgba(var(--t-brand8), .8);
--theme-color-opacity-90: rgba(var(--t-brand8), .9);
pointer-events: auto;
position: Static;
z-index: 1;
filter: ;
width: 100%;
height: 100%;
background-color: rgba(255, 12, 12, 0);
}
.t-l-c-checkRecord .checkRecord-t-image-base-0-1 {
position: absolute !important;
top: -29px;
left: -873px;
width: 800px;
height: 500px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-row-0-2 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: start;
padding-left: 20px;
padding-right: 20px;
padding-top: 14px;
padding-bottom: 0px;
flex-direction: row;
}

.t-l-c-checkRecord .checkRecord-t-row-0-2-0 {
position: unset;
top: 0px;
left: 0px;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: start;
min-height: 400px;
gap: 0px;
}

.t-l-c-checkRecord .checkRecord-t-col-0-2-0-0 {
position: relative;
top: null;
left: null;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
background-color: var(--business-show-bg10);
border-right: 4px solid var(--business-dialog-bg);
padding-right: 10px;
min-height: 36px;
}

.t-l-c-checkRecord .checkRecord-t-text-common-0-2-0-0-0 {
position: unset;
top: -98px;
left: 81px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-text-common-0-2-0-0-1 {
position: unset;
top: -88px;
left: 91px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-col-0-2-0-1 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
background-color: var(--business-show-bg10);
animation-name: ;
padding-left: 10px;
min-height: 36px;
padding-right: 10px;
}

.t-l-c-checkRecord .checkRecord-t-input-0-2-0-1-0 {
position: unset;
top: -158px;
left: 229px;
width: 100% !important;
height: 32px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-col-0-2-0-2 {
position: relative;
top: null;
left: null;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
background-color: var(--business-show-bg10);
animation-name: ;
padding-right: 10px;
border-right: 4px solid var(--business-dialog-bg);
min-height: 36px;
}

.t-l-c-checkRecord .checkRecord-t-text-common-0-2-0-2-0 {
position: unset;
top: -88px;
left: 91px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-text-common-0-2-0-2-1 {
position: unset;
top: -160px;
left: 54px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-col-0-2-0-3 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
background-color: var(--business-show-bg10);
animation-name: ;
padding-left: 10px;
min-width: 0px;
min-height: 36px;
padding-right: 10px;
border-right: 4px solid var(--business-dialog-bg);
}

.t-l-c-checkRecord .checkRecord-t-input-0-2-0-3-0 {
position: unset;
top: -163px;
left: 522px;
width: 100% !important;
height: 32px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-col-0-2-0-4 {
position: relative;
top: null;
left: null;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
background-color: var(--business-show-bg10);
animation-name: ;
padding-right: 10px;
border-left: 0px solid ;
border-top: 0px solid ;
border-right: 4px solid var(--business-dialog-bg);
border-bottom: 0px solid ;
min-height: 36px;
}

.t-l-c-checkRecord .checkRecord-t-text-common-0-2-0-4-0 {
position: unset;
top: -78px;
left: 101px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-text-common-0-2-0-4-1 {
position: unset;
top: -129px;
left: 71px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-col-0-2-0-5 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
background-color: var(--business-show-bg10);
animation-name: ;
padding-left: 10px;
min-height: 36px;
}

.t-l-c-checkRecord .checkRecord-t-date-picker-0-2-0-5-0 {
position: unset;
top: -94px;
left: 241px;
width: 100%;
height: 32px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-col-0-2-0-6 {
position: relative;
top: null;
left: null;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
background-color: var(--business-show-bg10);
animation-name: ;
min-height: 130px;
border-right: 4px solid var(--business-dialog-bg);
padding-right: 10px;
}

.t-l-c-checkRecord .checkRecord-t-text-common-0-2-0-6-0 {
position: unset;
top: -68px;
left: 111px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-text-common-0-2-0-6-1 {
position: unset;
top: -225px;
left: 126px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-col-0-2-0-7 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
background-color: var(--business-show-bg10);
animation-name: ;
padding-left: 10px;
min-height: 130px;
padding-right: 10px;
}

.t-l-c-checkRecord .checkRecord-t-input-0-2-0-7-0 {
position: unset;
top: -80px;
left: 603px;
width: 100% !important;
height: auto;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-col-0-2-0-8 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
background-color: var(--business-show-bg10);
animation-name: ;
border-right: 4px solid var(--business-dialog-bg);
padding-right: 10px;
min-height: 36px;
}

.t-l-c-checkRecord .checkRecord-t-text-common-0-2-0-8-0 {
position: unset;
top: -58px;
left: 121px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-text-common-0-2-0-8-1 {
position: unset;
top: -185px;
left: 55px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-col-0-2-0-9 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
background-color: var(--business-show-bg10);
animation-name: ;
padding-right: 0px;
padding-left: 10px;
min-height: 36px;
border-right: 4px solid var(--business-dialog-bg);
}

.t-l-c-checkRecord .checkRecord-t-radio-0-2-0-9-0 {
position: unset;
top: 151px;
left: 838px;
width: 100%;
height: 30px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-col-0-2-0-10 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
background-color: var(--business-show-bg10);
animation-name: ;
border-right: 4px solid var(--business-dialog-bg);
padding-right: 10px;
min-height: 36px;
}

.t-l-c-checkRecord .checkRecord-t-text-common-0-2-0-10-0 {
position: unset;
top: -48px;
left: 131px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-text-common-0-2-0-10-1 {
position: unset;
top: -210px;
left: 30px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-col-0-2-0-11 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
background-color: var(--business-show-bg10);
animation-name: ;
min-height: 36px;
}

.t-l-c-checkRecord .checkRecord-t-select-0-2-0-11-0 {
position: unset;
top: 119px;
left: 959px;
width: 100%;
height: 32px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-col-0-2-0-12 {
position: relative;
top: null;
left: null;
width: 100%;
height: 120px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
background-color: var(--business-show-bg10);
animation-name: ;
border-right: 4px solid var(--business-dialog-bg);
padding-right: 10px;
}

.t-l-c-checkRecord .checkRecord-t-text-common-0-2-0-12-0 {
position: unset;
top: -38px;
left: 141px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-text-common-0-2-0-12-1 {
position: unset;
top: -140px;
left: -25px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-col-0-2-0-13 {
position: relative;
top: null;
left: null;
width: 100%;
height: 120px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: start;
background-color: var(--business-show-bg10);
animation-name: ;
padding-left: 10px;
padding-right: 10px;
overflow: auto;
flex-direction: column;
}

.t-l-c-checkRecord .checkRecord-t-component-0-2-0-13-0 {
position: unset;
top: -294px;
left: 255px;
width: 100%;
height: auto;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-upload-button-0-2-0-13-1 {
position: unset;
top: -161px;
left: 368px;
width: 70px;
height: 36px;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-row-0-2-1 {
position: unset;
top: 486px;
left: 0px;
width: 100%;
height: 52px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-checkRecord .checkRecord-t-rect-0-2-1-0 {
position: unset;
top: -104px;
left: 444px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-checkRecord .checkRecord-t-rect-0-2-1-1 {
position: unset;
top: -102px;
left: 571px;
width: auto;
height: auto;
pointer-events: auto;
}
</style>
