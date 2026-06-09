<template>
  <div id="t-l-c-sgjcdm" class="t-l-c-sgjcdm" ><t-row id="t-row-ec7f.7c9c5fa34" class="sgjcdm-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-col id="t-col-d7c2.50957398a" class="sgjcdm-t-col-0-0-0"  :span="tColx0x0x0ComputedData.span" :offset="tColx0x0x0ComputedData.offset" :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull" :c-style="tColx0x0x0ComputedData.cStyle"><t-checkbox id="t-checkbox-2a0d.ad7d3fa29" class="sgjcdm-t-checkbox-0-0-0-0"  :data="replaceCssVariables(filterData(state.waterTypeList, componentPropBindingMap?.['t-checkbox-2a0d.ad7d3fa29']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(filterData(state.selected, componentPropBindingMap?.['t-checkbox-2a0d.ad7d3fa29']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x0x0x0ComputedData.dataAlias" :border="tCheckboxx0x0x0x0ComputedData.border" :use-button="tCheckboxx0x0x0x0ComputedData.useButton" :c-style="tCheckboxx0x0x0x0ComputedData.cStyle" @change="onchange1738745303777"></t-checkbox></t-col><t-col id="t-col-b3bb.f0ea63b17" class="sgjcdm-t-col-0-0-1"  :span="tColx0x0x1ComputedData.span" :offset="tColx0x0x1ComputedData.offset" :push="tColx0x0x1ComputedData.push" :pull="tColx0x0x1ComputedData.pull" :c-style="tColx0x0x1ComputedData.cStyle"><t-row id="t-row-f587.dfdc56fdf" class="sgjcdm-t-row-0-0-1-0"  :c-style="tRowx0x0x1x0ComputedData.cStyle" :gutter="tRowx0x0x1x0ComputedData.gutter" :justify="tRowx0x0x1x0ComputedData.justify" :align="tRowx0x0x1x0ComputedData.align"><t-col id="t-col-87b8.2765198d6" class="sgjcdm-t-col-0-0-1-0-0"  :span="tColx0x0x1x0x0ComputedData.span" :offset="tColx0x0x1x0x0ComputedData.offset" :push="tColx0x0x1x0x0ComputedData.push" :pull="tColx0x0x1x0x0ComputedData.pull" :c-style="tColx0x0x1x0x0ComputedData.cStyle"><t-select id="t-select-b6fe.c56bcdc86" class="sgjcdm-t-select-0-0-1-0-0-0"  :active-value="replaceCssVariables(filterData(state.selectOne, componentPropBindingMap?.['t-select-b6fe.c56bcdc86']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.controlLevelList, componentPropBindingMap?.['t-select-b6fe.c56bcdc86']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x0x1x0x0x0ComputedData.alias" :multiple="tSelectx0x0x1x0x0x0ComputedData.multiple" :placeholder="tSelectx0x0x1x0x0x0ComputedData.placeholder" :clearable="tSelectx0x0x1x0x0x0ComputedData.clearable" :disabled="tSelectx0x0x1x0x0x0ComputedData.disabled" :collapse-tags="tSelectx0x0x1x0x0x0ComputedData.collapseTags" :name="tSelectx0x0x1x0x0x0ComputedData.name" :autocomplete="tSelectx0x0x1x0x0x0ComputedData.autocomplete" :filterable="tSelectx0x0x1x0x0x0ComputedData.filterable" :no-match-text="tSelectx0x0x1x0x0x0ComputedData.no-match-text" :no-data-text="tSelectx0x0x1x0x0x0ComputedData.no-data-text" :c-style="tSelectx0x0x1x0x0x0ComputedData.cStyle" @change="onchange1764128720124_0_0"></t-select></t-col><t-col id="t-col-9d2b.86abc976e" class="sgjcdm-t-col-0-0-1-0-1"  :span="tColx0x0x1x0x1ComputedData.span" :offset="tColx0x0x1x0x1ComputedData.offset" :push="tColx0x0x1x0x1ComputedData.push" :pull="tColx0x0x1x0x1ComputedData.pull" :c-style="tColx0x0x1x0x1ComputedData.cStyle"><t-search id="t-search-f587.478ec4a0f" class="sgjcdm-t-search-0-0-1-0-1-0"  :type="tSearchx0x0x1x0x1x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.name, componentPropBindingMap?.['t-search-f587.478ec4a0f']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x0x1x0x1x0ComputedData.maxlength" :minlength="tSearchx0x0x1x0x1x0ComputedData.minlength" :show-word-limit="tSearchx0x0x1x0x1x0ComputedData.showWordLimit" :placeholder="tSearchx0x0x1x0x1x0ComputedData.placeholder" :clearable="tSearchx0x0x1x0x1x0ComputedData.clearable" :show-password="tSearchx0x0x1x0x1x0ComputedData.showPassword" :disabled="tSearchx0x0x1x0x1x0ComputedData.disabled" :prefix-icon="tSearchx0x0x1x0x1x0ComputedData.prefix-icon" :suffix-icon="tSearchx0x0x1x0x1x0ComputedData.suffix-icon" :rows="tSearchx0x0x1x0x1x0ComputedData.rows" :autosize="tSearchx0x0x1x0x1x0ComputedData.autosize" :name="tSearchx0x0x1x0x1x0ComputedData.name" :readonly="tSearchx0x0x1x0x1x0ComputedData.readonly" :step="tSearchx0x0x1x0x1x0ComputedData.step" :autofocus="tSearchx0x0x1x0x1x0ComputedData.autofocus" :form="tSearchx0x0x1x0x1x0ComputedData.form" :label="tSearchx0x0x1x0x1x0ComputedData.label" :tabindex="tSearchx0x0x1x0x1x0ComputedData.tabindex" :validate-event="tSearchx0x0x1x0x1x0ComputedData.validateEvent" :c-style="tSearchx0x0x1x0x1x0ComputedData.cStyle" :has-search-btn="tSearchx0x0x1x0x1x0ComputedData.hasSearchBtn" @input="oninput1738745314318"></t-search></t-col><t-col id="t-col-c31b.bf031f464" class="sgjcdm-t-col-0-0-1-0-2"  :span="tColx0x0x1x0x2ComputedData.span" :offset="tColx0x0x1x0x2ComputedData.offset" :push="tColx0x0x1x0x2ComputedData.push" :pull="tColx0x0x1x0x2ComputedData.pull" :c-style="tColx0x0x1x0x2ComputedData.cStyle"><t-button id="t-button-888b.3eae03772" class="sgjcdm-t-button-0-0-1-0-2-0"  :label="tButtonx0x0x1x0x2x0ComputedData.label" :round="tButtonx0x0x1x0x2x0ComputedData.round" :plain="tButtonx0x0x1x0x2x0ComputedData.plain" :disabled="tButtonx0x0x1x0x2x0ComputedData.disabled" :type="tButtonx0x0x1x0x2x0ComputedData.type" :size="tButtonx0x0x1x0x2x0ComputedData.size" :native-type="tButtonx0x0x1x0x2x0ComputedData.native-type" :c-style="tButtonx0x0x1x0x2x0ComputedData.cStyle" @click="onclick1739525553218"></t-button></t-col></t-row></t-col><t-col id="t-col-80dc.a4bf7b64a" class="sgjcdm-t-col-0-0-2"  :span="tColx0x0x2ComputedData.span" :offset="tColx0x0x2ComputedData.offset" :push="tColx0x0x2ComputedData.push" :pull="tColx0x0x2ComputedData.pull" :c-style="tColx0x0x2ComputedData.cStyle"><t-table id="t-table-3144.232785c32" class="sgjcdm-t-table-0-0-2-0"  :height="tTablex0x0x2x0ComputedData.height" :stripe="tTablex0x0x2x0ComputedData.stripe" :border="tTablex0x0x2x0ComputedData.border" :auto-scroll="tTablex0x0x2x0ComputedData.autoScroll" :speed="tTablex0x0x2x0ComputedData.speed" :columns="tTablex0x0x2x0ComputedData.columns" :data="replaceCssVariables(filterData(state.data, componentPropBindingMap?.['t-table-3144.232785c32']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x0x2x0ComputedData.defaultSort" :c-style="tTablex0x0x2x0ComputedData.cStyle" @cell-click="oncellClick1739761812215"></t-table></t-col></t-row></div>
</template>

<script>
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
import { TButton, TCheckbox, TCol, TRow, TSearch, TSelect, TTable } from '@ths/design';

export default {
  components: {
    TButton,
    TCheckbox,
    TCol,
    TRow,
    TSearch,
    TSelect,
    TTable,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-ec7f.7c9c5fa34":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-d7c2.50957398a":{"attributeName":"tColx0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-checkbox-2a0d.ad7d3fa29":{"attributeName":"tCheckboxx0x0x0x0","data":{"filters":[]},"active":{"filters":[]},"dataAlias":{"filters":[]},"border":{"filters":[]},"useButton":{"filters":[]},"cStyle":{"filters":[]}},"t-col-b3bb.f0ea63b17":{"attributeName":"tColx0x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-row-f587.dfdc56fdf":{"attributeName":"tRowx0x0x1x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-87b8.2765198d6":{"attributeName":"tColx0x0x1x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-b6fe.c56bcdc86":{"attributeName":"tSelectx0x0x1x0x0x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"collapseTags":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-col-9d2b.86abc976e":{"attributeName":"tColx0x0x1x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-search-f587.478ec4a0f":{"attributeName":"tSearchx0x0x1x0x1x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-col-c31b.bf031f464":{"attributeName":"tColx0x0x1x0x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-button-888b.3eae03772":{"attributeName":"tButtonx0x0x1x0x2x0","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-col-80dc.a4bf7b64a":{"attributeName":"tColx0x0x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-table-3144.232785c32":{"attributeName":"tTablex0x0x2x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
   topicCode: "20a325dc-4898-4ffa-bd54-aff9d1721d1d",
   waterTypeFilterCode: "",
   controlLevelFilterCode: "",
   controlLevelList: [],
   waterTypeList: [],
   tagJson: "",
   ASSESSTYPE: "",
   MONITORTIME: "",
   WATER_CODE: "",
   WSYSTEM_CODE: "",
   data: [],
   selectedStr: "1$2$3$4$5$6$0",
   name: "",
   selected: [],
   selectOne: [],
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","background":"rgba(0, 0, 0, 0)","fillType":"color","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomRightRadius":"10px","borderBottomLeftRadius":"10px","paddingLeft":"8px","paddingRight":"8px","paddingBottom":"0px","paddingTop":"0px","gap":"0px","animationName":"","left":"0px","top":"0px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","background":"rgba(0, 0, 0, 0)","fillType":"color","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomRightRadius":"10px","borderBottomLeftRadius":"10px","paddingLeft":"8px","paddingRight":"8px","paddingBottom":"0px","paddingTop":"0px","gap":"0px","animationName":"","left":"0px","top":"0px","position":"unset"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"8px","animationName":"","left":"1014px","top":"-538px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"8px","animationName":"","left":"1014px","top":"-538px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tCheckboxx0x0x0x0: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justifyContent":"center","width":"394px","height":"auto","animationName":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"0px solid rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"6px","min-height":"34px","paddingTop":"6px","paddingRight":"6px","paddingBottom":"6px"},
            
            },
 default: { 
 
data:[],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justifyContent":"center","width":"394px","height":"auto","animationName":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"0px solid rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"6px","min-height":"34px","paddingTop":"6px","paddingRight":"6px","paddingBottom":"6px"}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"var(--business-white)","paddingLeft":"2px","fontSize":"var(--business-text-size-14)"}},"itemWrapper":{"default":{"marginRight":"12px","height":"auto","line-height":"normal"}}}, 
 },
},
tColx0x0x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingBottom":"0px","animationName":"","left":"994px","top":"-558px","marginBottom":"8px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingBottom":"0px","animationName":"","left":"994px","top":"-558px","marginBottom":"8px"}}}, 
 },
},
tRowx0x0x1x0: {
defaultStyle: {
            default: {"width":"100%","min-width":"auto","height":"auto","column-gap":"10px","justify-content":"flex-start","justifyContent":"center","alignItems":"center","gap":"0","display":"flex","animationName":"","left":"616px","top":"-487px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","min-width":"auto","height":"auto","column-gap":"10px","justify-content":"flex-start","justifyContent":"center","alignItems":"center","gap":"0","display":"flex","animationName":"","left":"616px","top":"-487px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x1x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"994px","top":"-558px"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"994px","top":"-558px"}}}, 
 },
},
tSelectx0x0x1x0x0x0: {
defaultStyle: {
            default: {"width":"136px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","animationName":"","pointerEvents":"auto","paddingLeft":"12px","paddingRight":"30px"},
            
            },
 default: { 
 
activeValue:[],
options:[],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:true,
placeholder:"请选择",
clearable:true,
disabled:false,
collapseTags:true,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"136px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","animationName":"","pointerEvents":"auto","paddingLeft":"12px","paddingRight":"30px"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)","backgroundColor":"","max-width":"none"}},"tag":{"default":{"backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","height":"22px","lineHeight":"20px"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","width":"136px","left":"0 !important","right":"0 !important","top":"42px !important"}},"arrow":{"default":{"backgroundImage":"var(--select-arrow-up-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"6px 4px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","fontSize":"var(--business-text-size-14)","color":"var(--business-unit-icon)"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}},"dropdownItem":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","width":"136px"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)","fontSize":"18","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tColx0x0x1x0x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","flexDirection":"row","gap":"10px","animationName":"","left":"1004px","top":"-548px"},
            
            },
 default: { 
 
span:13,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","flexDirection":"row","gap":"10px","animationName":"","left":"1004px","top":"-548px"}}}, 
 },
},
tSearchx0x0x1x0x1x0: {
defaultStyle: {
            default: {"width":"188px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入关键字",
clearable:true,
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
cStyle:{"wrapper":{"default":{"width":"188px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tColx0x0x1x0x2: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","flexDirection":"row","gap":"10px","animationName":"","left":"994px","top":"-558px"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","flexDirection":"row","gap":"10px","animationName":"","left":"994px","top":"-558px"}}}, 
 },
},
tButtonx0x0x1x0x2x0: {
defaultStyle: {
            default: {"width":"49px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","color":"var(--t-white)"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"49px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","color":"var(--t-white)"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tColx0x0x2: {
defaultStyle: {
            default: {"width":"100%","height":"auto","marginBottom":"0px","animationName":"","left":"1024px","top":"-528px","display":"flex","column-gap":"10px","align-items":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","marginBottom":"0px","animationName":"","left":"1024px","top":"-528px","display":"flex","column-gap":"10px","align-items":"center"}}}, 
 },
},
tTablex0x0x2x0: {
defaultStyle: {
            default: {"width":"394px","height":"166px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"0px"},
            
            },
 default: { 
 
height:"166",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"","align":"center","type":"state","stateKey":"location","stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2025-02-14/2254708ce00a4b2d8c6ada4b183bc9ae.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"","width":"0PX","height":"0PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"44PX"},{"label":"断面名称","key":"POINT_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"105px","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"水质现状","key":"waterQuality","stateKey":"waterQuality","align":"center","type":"state","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"I类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"II类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"III类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"IV类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"V类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"劣V类","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"-","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"","borderRadius":"2PX","borderWidth":"0PX"}},{"name":"","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"","borderRadius":"2PX","borderWidth":"0PX"}}],"width":"64PX","style":{"fontStyle":{"fontSize":"var(--business-text-size-12)","width":"PX","height":"PX","borderRadius":"PX","background":""}}},{"label":"控制级别","key":"controlLevel","stateKey":"","align":"center","type":"default","operationList":[],"stateList":[{"name":"上升","fontStyle":{"color":"rgba(0, 255, 0, 1)","fontSize":"var(--business-text-size-14)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","LineHeight":"","borderRadius":"","background":"","backgroundSize":"80%"},"imageStyle":{"margin":"0 2px -1px 8px","borderRadius":"","width":"6PX","height":"14PX","backgroundImage":"assets/images/2025-02-05/1d7b2db572a046aababc2c08c0dabf82.svg"},"cellStyle":{"background":""}},{"name":"下降","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"var(--business-text-size-14)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","LineHeight":"","borderRadius":"","background":"","backgroundSize":"80%"},"imageStyle":{"margin":"0 2px -1px 8px","borderRadius":"","width":"6PX","height":"14PX","backgroundImage":"assets/images/2025-02-05/440f462dba284f2b96c1512ffac02514.svg"},"cellStyle":{"background":""}},{"name":"持平","fontStyle":{"color":"rgba(244, 220, 0, 1)","fontSize":"var(--business-text-size-14)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","LineHeight":"","borderRadius":"","background":"","backgroundImage":""},"imageStyle":{"margin":"0 2px 4px 8px","borderRadius":"","width":"12PX","height":"2PX","backgroundImage":"assets/images/2023-01-29/598351bb62b240169f4df9dba4bca29f.png"},"cellStyle":{"background":""}}],"width":"100PX","style":{"fontStyle":{"fontSize":"var(--business-text-size-14)","width":"PX","height":"PX","borderRadius":"PX","background":""}},"infoPosition":"left"},{"label":"所属流域","key":"WSYSTEMNAME","stateKey":"d","align":"center","type":"default","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"Ⅱ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"Ⅲ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"Ⅳ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"Ⅴ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"劣Ⅴ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"-","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"","borderWidth":"0PX"}}],"width":"80PX","style":{"fontStyle":{"fontSize":"var(--business-text-size-14)","width":"PX","height":"PX","borderRadius":"PX","background":"","color":"var(--business-white)"}},"infoKey":"","showOverflowTooltip":true}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"394px","height":"166px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"0px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
});
const handleSelectChange = () => {
const selectedWaterType = state.selected?.length ? state.selected.map((item) => item).join('$') : '';
const selectedControLevel = state.selectOne.length ? state.selectOne.map((item) => item).join('$') : '';
const tagObj = {};

if (selectedWaterType) {
  tagObj[`${state.waterTypeFilterCode}`] = selectedWaterType;
}

if (selectedControLevel) {
  tagObj[`${state.controlLevelFilterCode}`] = selectedControLevel;
}

state.tagJson = JSON.stringify(tagObj);

};
const getProvide = () => {
const rootData = inject('WSystemState')
const rootData2 = inject('RiverState')
const rootData3 = inject('surfaceWaterParamsState');

// 流域
if (rootData3.systemRiverType === "WSYSTEM") {
  watch(
    () => [
      rootData?.WSYSTEM_CODE,
      rootData?.ASSESSTYPE,
      rootData?.TIME
    ],
    ([val1, val2, val3]) => {
      state.WSYSTEM_CODE = val1 || ""
      state.WATER_CODE = ""
      state.ASSESSTYPE = val2 || '';
      state.MONITORTIME = val3 || '';
      state.tagJson = `{'3592D95098D57EEE96A1787536AEDE91':${state.WATER_CODE || ''},'75DC865C449809EEC9E76778D9C3D9B6':${state.WSYSTEM_CODE || ''},'19349DBF132C59BBB9CD7BBF7C956B18':'${state.selectedStr || ''}',}`;
      // getListData();
    },
    {
      deep: true,
      immediate: true,
    }
  )
}

// 河涌
if (rootData3.systemRiverType === "WATER") {
  watch(
    () => [
      rootData2?.WATER_CODE,
      rootData2?.ASSESSTYPE,
      rootData2?.TIME
    ],
    ([val1, val2, val3]) => {
      state.WSYSTEM_CODE = ""
      state.WATER_CODE = val1 || ""
      state.ASSESSTYPE = val2 || '';
      state.MONITORTIME = val3 || '';
      state.tagJson = `{'3592D95098D57EEE96A1787536AEDE91':${state.WATER_CODE || ''},'75DC865C449809EEC9E76778D9C3D9B6':${state.WSYSTEM_CODE || ''},'19349DBF132C59BBB9CD7BBF7C956B18':'${state.selectedStr || ''}',}`;
      // getListData();
    },
    {
      deep: true,
      immediate: true,
    }
  )
}
};
const goToLocation = (row,column) => {
if (["定位"].includes(column.label)  && !!row.location) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "gotoPoint",
    data: {
      "longitude": row.LONGITUDE,
      "latitude": row.LATITUDE,
    }
  });
}


};
const changeOneSelect = () => {
// 地表水全局变量-类型（全部/国控/省控...）
state.selectOne = state.selectOneStr ? state.selectOneStr.split(",") : []
state.surfaceWaterParamsState.type = state.selectOneStr;
// 调接口-重新获取所有数据
getData();
// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "value",
      "shareCode": "CODE_CONTROLLEVEL",
      "defaultValue": "",
      "runtimeValue": state.selectOneStr
    },
    {
      "code": "value",
      "shareCode": "water_controllevel",
      "defaultValue": "",
      "runtimeValue": state.selectOneStr
    },
    {
      "code": "defaultTab",
      "name": "",
      "defaultValue": "pointWq",
      "shareCode": "defaultTab",
      "runtimeValue": "pointWq"
    }
  ]
});
};
const getData = () => {
async function getData(){
  await apiRegistry.getFilterList.request();
  await apiRegistry.getListData.request();
}
getData()
};
const changeControlLevel = (data) => {
if(data){
  state.selectOne = data.split(',')
}else{
  state.selectOne = []
}

};
const setLayer = (visible) => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'setWaterEnvFeatureLayer',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      LAYER_CODE: state.topicCode,
      REGION_CODE: global.regionaQuery.regionCode,
      tagJson: state.tagJson,
      visible: visible
    }
  }
);
};
const onchange1738745303777 = (data) => {
// 设置变量值
state.selected = data;
// 执行自定义方法
handleSelectChange(data);
// 执行自定义方法
setLayer(true);
};
const onchange1764128720124_0_0 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
changeControlLevel(value);
// 执行自定义方法
handleSelectChange();
// 执行自定义方法
setLayer(true);
};
const oninput1738745314318 = (value) => {
// 设置变量值
state.name = value;
};
const onclick1739525553218 = () => {
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const oncellClick1739761812215 = (row,column,cell,event) => {
// 执行自定义方法
goToLocation(row,column);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getFilterList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"topicCode\":\"state.topicCode\",\"interfaceId\":\"982f4b5298e7d6c89796ffca11f9dacb\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"topicCode":state.topicCode,"interfaceId":"982f4b5298e7d6c89796ffca11f9dacb"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"topicCode\":\state.topicCode\,\"interfaceId\":\"982f4b5298e7d6c89796ffca11f9dacb\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getFilterList'] = res.data;
                
     if (res?.data?.tags?.length) {
  const { tags } = res?.data
  const index1 = tags.findIndex(i => i.nodeName === '水质级别')
  state.waterTypeFilterCode = tags[index1].tagCode || '19349DBF132C59BBB9CD7BBF7C956B18'
  state.waterTypeList = tags[index1]?.range?.map(i => {
    return {
      label: i.alias,
      value: i.value,
      disabled: false
    }
  }) || []

  const index2 = tags?.findIndex(i => i.nodeName === '控制级别')
  state.controlLevelFilterCode = tags[index2]?.tagCode || 'A84967D2DD71852C4C8AF540F1AC0BCB'
  state.controlLevelList = tags[index2]?.range?.map(i => {
    return {
      label: i.alias,
      value: i.value
    }
  }) || []
  state.selectOne = [state.controlLevelList.find(i => i.label === '国控').value]

  const selectedWaterType = state.selected?.length ? state.selected.map((item) => item).join('$') : '';
  const selectedControLevel = state.selectOne.length ? state.selectOne.map((item) => item).join('$') : '';
  const tagObj = {};

  if (selectedWaterType) {
    tagObj[`${state.waterTypeFilterCode}`] = selectedWaterType;
  }

  if (selectedControLevel) {
    tagObj[`${state.controlLevelFilterCode}`] = selectedControLevel;
  }

  state.tagJson = JSON.stringify(tagObj);

  // 设置地图图层
  setLayer(true);
} else {
  state.waterTypeList = []
  state.controlLevelList = []
  state.selected = []
  state.selectOne = []
  state.tagJson = {}
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.data = [];
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
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"ENTITY_CODE\":\"tag_yztdbssgdm_1622426017937\",\"HasAllTag\":\"true\",\"keyword\":\"state.name\",\"pageNum\":\"1\",\"pageSize\":\"2000\",\"orderBy\":\"\",\"tagJson\":\"state.tagJson\",\"distance\":\"\",\"locationField\":\"\",\"pointValue\":\"\",\"gisType\":\"\",\"queryField\":\"POINT_NAME\",\"AREA_CODE\":\"\",\"useTermKeyword\":\"\",\"useGisShape\":\"\",\"hasGather\":\"fasle\",\"topicCode\":\"state.topicCode\",\"REGION_CODE\":\"global.regionaQuery.regionCode\",\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"ENTITY_CODE":"tag_yztdbssgdm_1622426017937","HasAllTag":"true","keyword":state.name,"pageNum":"1","pageSize":"2000","orderBy":"","tagJson":state.tagJson,"distance":"","locationField":"","pointValue":"","gisType":"","queryField":"POINT_NAME","AREA_CODE":"","useTermKeyword":"","useGisShape":"","hasGather":"fasle","topicCode":state.topicCode,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"8b5ca6a3009f750b5b1f19a415589682"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"ENTITY_CODE\":\"tag_yztdbssgdm_1622426017937\",\"HasAllTag\":\"true\",\"keyword\":\state.name\,\"pageNum\":\"1\",\"pageSize\":\"2000\",\"orderBy\":\"\",\"tagJson\":\state.tagJson\,\"distance\":\"\",\"locationField\":\"\",\"pointValue\":\"\",\"gisType\":\"\",\"queryField\":\"POINT_NAME\",\"AREA_CODE\":\"\",\"useTermKeyword\":\"\",\"useGisShape\":\"\",\"hasGather\":\"fasle\",\"topicCode\":\state.topicCode\,\"REGION_CODE\":\global.regionaQuery.regionCode\,\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     state.data = [];

  state.data = res?.data?.page?.list.map(i => ({
    ...i,
    controlLevel: filters.handleControlLevel(i?.CODE_CONTROLLEVEL),
    waterQuality: filters.handleWaterQuality(i?.CODE_WATERQUALITYLEVEL),
    WSYSTEMNAME: i?.WSYSTEMNAME || '-',
    location: `${!!(i.LATITUDE && i.LONGITUDE)}`
  })) || []

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.data = [];
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [state.tagJson,global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-sgjcdm', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-sgjcdm', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tColx0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0.default, componentState.tColx0x0x0?.[state.screenSize]));

 const tCheckboxx0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x0x0x0.default, componentState.tCheckboxx0x0x0x0?.[state.screenSize]));

 const tColx0x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1.default, componentState.tColx0x0x1?.[state.screenSize]));

 const tRowx0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x1x0.default, componentState.tRowx0x0x1x0?.[state.screenSize]));

 const tColx0x0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1x0x0.default, componentState.tColx0x0x1x0x0?.[state.screenSize]));

 const tSelectx0x0x1x0x0x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x0x1x0x0x0.default, componentState.tSelectx0x0x1x0x0x0?.[state.screenSize]));

 const tColx0x0x1x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1x0x1.default, componentState.tColx0x0x1x0x1?.[state.screenSize]));

 const tSearchx0x0x1x0x1x0ComputedData = computed(() => _.merge({}, componentState.tSearchx0x0x1x0x1x0.default, componentState.tSearchx0x0x1x0x1x0?.[state.screenSize]));

 const tColx0x0x1x0x2ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1x0x2.default, componentState.tColx0x0x1x0x2?.[state.screenSize]));

 const tButtonx0x0x1x0x2x0ComputedData = computed(() => _.merge({}, componentState.tButtonx0x0x1x0x2x0.default, componentState.tButtonx0x0x1x0x2x0?.[state.screenSize]));

 const tColx0x0x2ComputedData = computed(() => _.merge({}, componentState.tColx0x0x2.default, componentState.tColx0x0x2?.[state.screenSize]));

 const tTablex0x0x2x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x0x2x0.default, componentState.tTablex0x0x2x0?.[state.screenSize]));

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
tRowx0x0ComputedData,
tColx0x0x0ComputedData,
tCheckboxx0x0x0x0ComputedData,
tColx0x0x1ComputedData,
tRowx0x0x1x0ComputedData,
tColx0x0x1x0x0ComputedData,
tSelectx0x0x1x0x0x0ComputedData,
tColx0x0x1x0x1ComputedData,
tSearchx0x0x1x0x1x0ComputedData,
tColx0x0x1x0x2ComputedData,
tButtonx0x0x1x0x2x0ComputedData,
tColx0x0x2ComputedData,
tTablex0x0x2x0ComputedData,
onchange1738745303777,
onchange1764128720124_0_0,
oninput1738745314318,
onclick1739525553218,
oncellClick1739761812215,
};
},
}
</script>

<style scoped>
.t-l-c-sgjcdm {
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
position: Relative;
z-index: 1;
filter: ;
background-color: rgba(255, 0, 0, 0);
height: 262px;
width: 410px;
}
.t-l-c-sgjcdm .sgjcdm-t-row-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
background: rgba(0, 0, 0, 0);
fill-type: color;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
padding-left: 8px;
padding-right: 8px;
padding-bottom: 0px;
padding-top: 0px;
gap: 0px;
animation-name: ;
}

.t-l-c-sgjcdm .sgjcdm-t-col-0-0-0 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
margin-bottom: 8px;
animation-name: ;
display: flex;
column-gap: 10px;
align-items: center;
}

.t-l-c-sgjcdm .sgjcdm-t-checkbox-0-0-0-0 {
position: unset;
top: -2px;
left: 8px;
width: 394px;
height: auto;
pointer-events: auto;
}

.t-l-c-sgjcdm .sgjcdm-t-col-0-0-1 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
padding-bottom: 0px;
animation-name: ;
margin-bottom: 8px;
}

.t-l-c-sgjcdm .sgjcdm-t-row-0-0-1-0 {
position: unset;
top: -487px;
left: 616px;
width: 100%;
height: auto;
pointer-events: auto;
min-width: auto;
column-gap: 10px;
justify-content: flex-start;
justify-content: center;
align-items: center;
gap: 0;
display: flex;
animation-name: ;
}

.t-l-c-sgjcdm .sgjcdm-t-col-0-0-1-0-0 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
animation-name: ;
}

.t-l-c-sgjcdm .sgjcdm-t-select-0-0-1-0-0-0 {
position: unset;
top: 41px;
left: 8px;
width: 136px;
height: 32px;
pointer-events: auto;
}

.t-l-c-sgjcdm .sgjcdm-t-col-0-0-1-0-1 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
gap: 10px;
animation-name: ;
}

.t-l-c-sgjcdm .sgjcdm-t-search-0-0-1-0-1-0 {
position: unset;
top: 41px;
left: 156px;
width: 188px;
height: 32px;
pointer-events: auto;
}

.t-l-c-sgjcdm .sgjcdm-t-col-0-0-1-0-2 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
flex-direction: row;
gap: 10px;
animation-name: ;
}

.t-l-c-sgjcdm .sgjcdm-t-button-0-0-1-0-2-0 {
position: unset;
top: 41px;
left: 353px;
width: 49px;
height: 32px;
pointer-events: auto;
}

.t-l-c-sgjcdm .sgjcdm-t-col-0-0-2 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
margin-bottom: 0px;
animation-name: ;
display: flex;
column-gap: 10px;
align-items: center;
}

.t-l-c-sgjcdm .sgjcdm-t-table-0-0-2-0 {
position: unset;
top: 81px;
left: 8px;
width: 394px;
height: 166px;
pointer-events: auto;
}
</style>
