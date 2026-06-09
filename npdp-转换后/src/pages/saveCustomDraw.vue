<template>
  <div id="t-l-c-saveCustomDraw" class="t-l-c-saveCustomDraw" ><t-rect id="t-rect-956c.76f89a13a" class="saveCustomDraw-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-7f6d.f68c6ee65" class="saveCustomDraw-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-rect id="t-rect-e5ee.fb1b5f0aa" class="saveCustomDraw-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle"></t-rect><t-image-base id="t-image-base-391f.0550b0bf5" class="saveCustomDraw-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle"></t-image-base><t-rect id="t-rect-0090.dfbcd0634" class="saveCustomDraw-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1721979040344"></t-rect><t-text id="t-text-1228.a8b4ee26b" class="saveCustomDraw-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle"></t-text><t-text id="t-text-2bfa.90c407215" class="saveCustomDraw-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle"></t-text><t-text id="t-text-7a56.b5e60b7cc" class="saveCustomDraw-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle"></t-text><t-input id="t-input-04f9.ec828bcdd" class="saveCustomDraw-t-input-0-8"  :type="tInputx0x8ComputedData.type" :input-value="state.name" :maxlength="tInputx0x8ComputedData.maxlength" :minlength="tInputx0x8ComputedData.minlength" :show-word-limit="tInputx0x8ComputedData.showWordLimit" :placeholder="tInputx0x8ComputedData.placeholder" :clearable="tInputx0x8ComputedData.clearable" :show-password="tInputx0x8ComputedData.showPassword" :disabled="tInputx0x8ComputedData.disabled" :prefix-icon="tInputx0x8ComputedData.prefix-icon" :suffix-icon="tInputx0x8ComputedData.suffix-icon" :rows="tInputx0x8ComputedData.rows" :autosize="tInputx0x8ComputedData.autosize" :name="tInputx0x8ComputedData.name" :readonly="tInputx0x8ComputedData.readonly" :step="tInputx0x8ComputedData.step" :autofocus="tInputx0x8ComputedData.autofocus" :form="tInputx0x8ComputedData.form" :label="tInputx0x8ComputedData.label" :tabindex="tInputx0x8ComputedData.tabindex" :validate-event="tInputx0x8ComputedData.validateEvent" :c-style="tInputx0x8ComputedData.cStyle" @input="oninput1721982496993"></t-input><t-cascader id="t-cascader-c2dc.14d9f32b2" class="saveCustomDraw-t-cascader-0-9"  :active-value="tCascaderx0x9ComputedData.activeValue" :data="state.category" :alias="tCascaderx0x9ComputedData.alias" :placeholder="tCascaderx0x9ComputedData.placeholder" :clearable="tCascaderx0x9ComputedData.clearable" :disabled="tCascaderx0x9ComputedData.disabled" :no-match-text="tCascaderx0x9ComputedData.noMatchText" :no-data-text="tCascaderx0x9ComputedData.noDataText" :c-style="tCascaderx0x9ComputedData.cStyle" :show-all-levels="tCascaderx0x9ComputedData.showAllLevels" :check-strictly="tCascaderx0x9ComputedData.checkStrictly" @change="onchange1721996023042"></t-cascader><t-button v-if="state.selectCategory.length !== 0" id="t-button-549e.b557f8945" class="saveCustomDraw-t-button-0-10"  :label="tButtonx0x10ComputedData.label" :round="tButtonx0x10ComputedData.round" :plain="tButtonx0x10ComputedData.plain" :disabled="tButtonx0x10ComputedData.disabled" :type="tButtonx0x10ComputedData.type" :size="tButtonx0x10ComputedData.size" :native-type="tButtonx0x10ComputedData.native-type" :c-style="tButtonx0x10ComputedData.cStyle" @click="onclick1721983216600"></t-button><t-button id="t-button-0149.5ed88ba1e" class="saveCustomDraw-t-button-0-11"  :label="tButtonx0x11ComputedData.label" :round="tButtonx0x11ComputedData.round" :plain="tButtonx0x11ComputedData.plain" :disabled="tButtonx0x11ComputedData.disabled" :type="tButtonx0x11ComputedData.type" :size="tButtonx0x11ComputedData.size" :native-type="tButtonx0x11ComputedData.native-type" :c-style="tButtonx0x11ComputedData.cStyle" @click="onclick1721983133449"></t-button><t-button v-if="state.selectCategory.length === 0" id="t-button-f709.2458a2293" class="saveCustomDraw-t-button-0-12"  :label="tButtonx0x12ComputedData.label" :round="tButtonx0x12ComputedData.round" :plain="tButtonx0x12ComputedData.plain" :disabled="tButtonx0x12ComputedData.disabled" :type="tButtonx0x12ComputedData.type" :size="tButtonx0x12ComputedData.size" :native-type="tButtonx0x12ComputedData.native-type" :c-style="tButtonx0x12ComputedData.cStyle"></t-button></div>
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
import { TButton, TCascader, TImageBase, TInput, TRect, TText } from '@ths/design';

export default {
  components: {
    TButton,
    TCascader,
    TImageBase,
    TInput,
    TRect,
    TText,
  },
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
const state = reactive({
   screenSize: "",
   selectCategory: [],
   category: "",
   name: "",
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
tRectx0x0: {
defaultStyle: {
            default: {"width":"417px","height":"232px","left":"752px","top":"424px","border-radius":"16px","background":"var(--intergrated-query-dialog-bg)","box-shadow":"0px 4px 25px 0px var(--intergrated-query-dialog-box-shadow-color)","border-width":0,"borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--intergrated-query-dialog-border-image)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"417px","height":"232px","left":"752px","top":"424px","border-radius":"16px","background":"var(--intergrated-query-dialog-bg)","box-shadow":"0px 4px 25px 0px var(--intergrated-query-dialog-box-shadow-color)","border-width":0,"borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--intergrated-query-dialog-border-image)"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"415px","height":"230px","position":"unset","left":"753px","top":"425px","border-radius":"16px","background":"rgba(7, 29, 11, 0.95)","border-width":0,"color":"var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundColor":"var(--intergrated-query-dialog-background-color)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"415px","height":"230px","position":"unset","left":"753px","top":"425px","border-radius":"16px","background":"rgba(7, 29, 11, 0.95)","border-width":0,"color":"var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundColor":"var(--intergrated-query-dialog-background-color)"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"415px","height":"46px","position":"unset","left":"753px","top":"426px","border-radius":"16px 16px 0px 0px","border-width":0,"background":"var(--intergrated-query-dialog-title-bg)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"415px","height":"46px","position":"unset","left":"753px","top":"426px","border-radius":"16px 16px 0px 0px","border-width":0,"background":"var(--intergrated-query-dialog-title-bg)"}}}, 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","position":"unset","left":"767px","top":"437px"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4/assets/images/2024-07-26/aa0899554a6c437db802092b14b0a80b.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","position":"unset","left":"767px","top":"437px"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"24px","height":"24px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"10px 10px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"1123.5px","top":"436px","border-radius":"2px","border":"1px solid rgba(121, 255, 175, 0.6)","cursor":"pointer","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"10px 10px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"1123.5px","top":"436px","border-radius":"2px","border":"1px solid rgba(121, 255, 175, 0.6)","cursor":"pointer","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)"},"hover":{"opacity":"80% !important"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"799px","top":"438px","font-size":"18px","text-shadow":"0px 0px 6px rgba(17, 214, 104, 0.62)","font-weight":"bold"},
            
            },
 default: { 
 
label:"新建图层",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"799px","top":"438px","font-size":"18px","text-shadow":"0px 0px 6px rgba(17, 214, 104, 0.62)","font-weight":"bold"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"64px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"773px","top":"508px","font-size":"14px","font-weight":290},
            
            },
 default: { 
 
label:"图层名称",
editable:false,
cStyle:{"wrapper":{"default":{"width":"64px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"773px","top":"508px","font-size":"14px","font-weight":290}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"64px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"774px","top":"555px","font-size":"14px","font-weight":290,"animationName":""},
            
            },
 default: { 
 
label:"目录分类",
editable:false,
cStyle:{"wrapper":{"default":{"width":"64px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"774px","top":"555px","font-size":"14px","font-weight":290,"animationName":""}}}, 
 },
},
tInputx0x8: {
defaultStyle: {
            default: {"width":"306px","height":"32px","position":"unset","left":"841px","top":"497px","border-color":"#427258","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","color":"var(--intergrated-query-font-color)","backgroundColor":"var(--intergrated-query-selector-background-color)","borderLeft":"1px solid var(--intergrated-query-selector-border-color)","borderTop":"1px solid var(--intergrated-query-selector-border-color)","borderRight":"1px solid var(--intergrated-query-selector-border-color)","borderBottom":"1px solid var(--intergrated-query-selector-border-color)"},
            
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
cStyle:{"wrapper":{"default":{"width":"306px","height":"32px","position":"unset","left":"841px","top":"497px","border-color":"#427258","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","color":"var(--intergrated-query-font-color)","backgroundColor":"var(--intergrated-query-selector-background-color)","borderLeft":"1px solid var(--intergrated-query-selector-border-color)","borderTop":"1px solid var(--intergrated-query-selector-border-color)","borderRight":"1px solid var(--intergrated-query-selector-border-color)","borderBottom":"1px solid var(--intergrated-query-selector-border-color)"}},"placeholder":{"default":{"color":"var(--intergrated-query-font-color)"}}}, 
 },
},
tCascaderx0x9: {
defaultStyle: {
            default: {"width":"306px","height":"33px","position":"unset","left":"842px","top":"548px","borderLeft":"1px solid var(--intergrated-query-selector-border-color)","borderTop":"1px solid var(--intergrated-query-selector-border-color)","borderRight":"1px solid var(--intergrated-query-selector-border-color)","borderBottom":"1px solid var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--intergrated-query-selector-background-color)","color":"var(--intergrated-query-font-color)"},
            
            },
 default: { 
 
activeValue:"",
data:"",
alias:{"label":"name","value":"id","disabled":"disabled"},
placeholder:"请选择",
clearable:false,
disabled:false,
noMatchText:"无匹配数据",
noDataText:"无数据",
cStyle:{"wrapper":{"default":{"width":"306px","height":"33px","position":"unset","left":"842px","top":"548px","borderLeft":"1px solid var(--intergrated-query-selector-border-color)","borderTop":"1px solid var(--intergrated-query-selector-border-color)","borderRight":"1px solid var(--intergrated-query-selector-border-color)","borderBottom":"1px solid var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--intergrated-query-selector-background-color)","color":"var(--intergrated-query-font-color)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--intergrated-query-selector-background-color)","borderTopLeftRadius":"5px","borderTopRightRadius":"5px","borderBottomLeftRadius":"5px","borderBottomRightRadius":"5px","borderLeft":"1px none var(--intergrated-query-selector-border-color)","borderTop":"1px none var(--intergrated-query-selector-border-color)","borderRight":"1px none var(--intergrated-query-selector-border-color)","borderBottom":"1px none var(--intergrated-query-selector-border-color)"}},"placeholder":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 1)"}},"dropdownArrow":{"default":{"color":"","backgroundColor":"var(--intergrated-query-selector-background-color)","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--selector-border-color)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","z-index":"4"}},"arrow":{"default":{"color":"var(--intergrated-query-font-color)"}},"dropdownMenu":{"default":{"borderTopLeftRadius":"5px","borderTopRightRadius":"5px","borderBottomLeftRadius":"5px","borderBottomRightRadius":"5px","borderLeft":"1px solid var(--intergrated-query-selector-border-color)","borderTop":"1px solid var(--intergrated-query-selector-border-color)","borderRight":"1px solid var(--intergrated-query-selector-border-color)","borderBottom":"1px solid var(--intergrated-query-selector-border-color)"}},"dropdownItem":{"default":{"color":"var(--intergrated-query-font-color)"},"active":{"backgroundColor":"var(--intergrated-query-sub-button-background-color)","color":"var(--intergrated-query-font-color)"},"hover":{"backgroundColor":"var(--intergrated-query-sub-button-background-color)","color":"var(--intergrated-query-font-color)"}},"dropdownRadio":{"active":{"borderLeft":"1px solid #FFF198","borderTop":"1px solid #FFF198","borderRight":"1px solid #FFF198","borderBottom":"1px solid #FFF198","backgroundColor":"#3B382A"},"hover":{"borderLeft":"1px solid #FFF198","borderTop":"1px solid #FFF198","borderRight":"1px solid #FFF198","borderBottom":"1px solid #FFF198","backgroundColor":"var(--left-menu-checkbox-bg)"},"default":{"backgroundColor":"var(--left-menu-checkbox-bg)","borderLeft":"1px solid var(--left-menu-checkbox-border)","borderTop":"1px solid var(--left-menu-checkbox-border)","borderRight":"1px solid var(--left-menu-checkbox-border)","borderBottom":"1px solid var(--left-menu-checkbox-border)"}}},
showAllLevels:false,
checkStrictly:true, 
 },
},
tButtonx0x10: {
defaultStyle: {
            default: {"width":"50px","height":"32px","position":"unset","left":"1098px","top":"599px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none #09783A","borderTop":"1px none #09783A","borderRight":"1px none #09783A","borderBottom":"1px none #09783A","backgroundColor":"var(--intergrated-query-button-background-color)","fontSize":"12px","color":"var(--intergrated-query-font-color)"},
            
            },
 default: { 
 
label:"保存",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","position":"unset","left":"1098px","top":"599px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none #09783A","borderTop":"1px none #09783A","borderRight":"1px none #09783A","borderBottom":"1px none #09783A","backgroundColor":"var(--intergrated-query-button-background-color)","fontSize":"12px","color":"var(--intergrated-query-font-color)"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","opacity":"80% !important","backgroundColor":"var(--intergrated-query-sub-button-border-color)"},"focus":{"opacity":"80% !important","backgroundColor":"#09783A","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"backgroundColor":"#09783A","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tButtonx0x11: {
defaultStyle: {
            default: {"width":"50px","height":"32px","position":"unset","left":"1034px","top":"599px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--intergrated-query-button-background-color)","borderTop":"1px solid var(--intergrated-query-button-background-color)","borderRight":"1px solid var(--intergrated-query-button-background-color)","borderBottom":"1px solid var(--intergrated-query-button-background-color)","backgroundColor":"var(--intergrated-query-sub-button-background-color)","fontSize":"12px","animationName":"","color":"var(--intergrated-query-font-color)","marginLeft":"0px"},
            
            },
 default: { 
 
label:"取消",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","position":"unset","left":"1034px","top":"599px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--intergrated-query-button-background-color)","borderTop":"1px solid var(--intergrated-query-button-background-color)","borderRight":"1px solid var(--intergrated-query-button-background-color)","borderBottom":"1px solid var(--intergrated-query-button-background-color)","backgroundColor":"var(--intergrated-query-sub-button-background-color)","fontSize":"12px","animationName":"","color":"var(--intergrated-query-font-color)","marginLeft":"0px"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","opacity":"80% !important","backgroundColor":"var(--intergrated-query-sub-button-background-color)","borderLeft":"1px solid var(--intergrated-query-button-background-color)","borderTop":"1px solid var(--intergrated-query-button-background-color)","borderRight":"1px solid var(--intergrated-query-button-background-color)","borderBottom":"1px solid var(--intergrated-query-button-background-color)"},"focus":{"opacity":"80% !important","backgroundColor":"var(--intergrated-query-sub-button-background-color)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"backgroundColor":"var(--intergrated-query-sub-button-background-color)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"disabled":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tButtonx0x12: {
defaultStyle: {
            default: {"width":"50px","height":"32px","position":"unset","left":"1098px","top":"599px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none #09783A","borderTop":"1px none #09783A","borderRight":"1px none #09783A","borderBottom":"1px none #09783A","backgroundColor":"var(--intergrated-query-button-background-color)","fontSize":"12px","color":"var(--intergrated-query-font-color)","animationName":"","cursor":"not-allowed","opacity":"80% !important","marginLeft":"0px"},
            
            },
 default: { 
 
label:"保存",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","position":"unset","left":"1098px","top":"599px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none #09783A","borderTop":"1px none #09783A","borderRight":"1px none #09783A","borderBottom":"1px none #09783A","backgroundColor":"var(--intergrated-query-button-background-color)","fontSize":"12px","color":"var(--intergrated-query-font-color)","animationName":"","cursor":"not-allowed","opacity":"80% !important","marginLeft":"0px"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","opacity":"100% !important","backgroundColor":"var(--intergrated-query-sub-button-border-color)"},"focus":{"opacity":"100% !important","backgroundColor":"#09783A","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"backgroundColor":"#09783A","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
});
const handleUpdateDialogParams = (params,dialogName) => {
console.log(999, params, dialogName)
state.name = params.drawName;
state.category = params.treeData;
};
const onclick1721979040344 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'integratedQuery.dialogName',
                    value:'',
                    data: {
                      integratedQuery:{dialogName: ''}
                    },
                  });
};
const oninput1721982496993 = (value) => {
// 设置变量值
state.name = value;
};
const onchange1721996023042 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.selectCategory = _.cloneDeep(value);
};
const onclick1721983216600 = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeZHCXDialog", // 消息名称
data: {"params":{"drawName":state.name,"data":state.selectCategory},"name":"saveCustomDrawComponent"}, // 发送的数据
});
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'integratedQuery.dialogName',
                    value:'',
                    data: {
                      integratedQuery:{dialogName: ''}
                    },
                  });
};
const onclick1721983133449 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'integratedQuery.dialogName',
                    value:'',
                    data: {
                      integratedQuery:{dialogName: ''}
                    },
                  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-saveCustomDraw', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
rootData.rootOn('rootSocket:change', (data)=>{
if(data.type === "updateDialogParams"){
try{
// 执行自定义方法
handleUpdateDialogParams(data.data.params,data.data.name);
} catch (error) {
console.error('参数格式错误', error);
};
};
});
onMounted(() => {
setPageScale('t-l-c-saveCustomDraw', global.appScaleMode, 'normal');
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

 const tImageBasex0x3ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x3.default, componentState.tImageBasex0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tInputx0x8ComputedData = computed(() => _.merge({}, componentState.tInputx0x8.default, componentState.tInputx0x8?.[state.screenSize]));

 const tCascaderx0x9ComputedData = computed(() => _.merge({}, componentState.tCascaderx0x9.default, componentState.tCascaderx0x9?.[state.screenSize]));

 const tButtonx0x10ComputedData = computed(() => _.merge({}, componentState.tButtonx0x10.default, componentState.tButtonx0x10?.[state.screenSize]));

 const tButtonx0x11ComputedData = computed(() => _.merge({}, componentState.tButtonx0x11.default, componentState.tButtonx0x11?.[state.screenSize]));

 const tButtonx0x12ComputedData = computed(() => _.merge({}, componentState.tButtonx0x12.default, componentState.tButtonx0x12?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tImageBasex0x3ComputedData,
tRectx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tInputx0x8ComputedData,
tCascaderx0x9ComputedData,
tButtonx0x10ComputedData,
tButtonx0x11ComputedData,
tButtonx0x12ComputedData,
onclick1721979040344,
oninput1721982496993,
onchange1721996023042,
onclick1721983216600,
onclick1721983133449,
};
},
}
</script>

<style scoped>
.t-l-c-saveCustomDraw {
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
width: 1920px;
height: 1080px;
background-color: rgba(0,0,0,0);
}
.t-l-c-saveCustomDraw .saveCustomDraw-t-rect-0-0 {
position: absolute !important;
top: 424px;
left: 752px;
width: 417px;
height: 232px;
pointer-events: auto;
}

.t-l-c-saveCustomDraw .saveCustomDraw-t-rect-0-1 {
position: absolute !important;
top: 425px;
left: 753px;
width: 415px;
height: 230px;
pointer-events: auto;
}

.t-l-c-saveCustomDraw .saveCustomDraw-t-rect-0-2 {
position: absolute !important;
top: 426px;
left: 753px;
width: 415px;
height: 46px;
pointer-events: auto;
}

.t-l-c-saveCustomDraw .saveCustomDraw-t-image-base-0-3 {
position: absolute !important;
top: 437px;
left: 767px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-saveCustomDraw .saveCustomDraw-t-rect-0-4 {
position: absolute !important;
top: 436px;
left: 1123.5px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-saveCustomDraw .saveCustomDraw-t-text-0-5 {
position: absolute !important;
top: 438px;
left: 799px;
width: 96px;
height: 19px;
pointer-events: auto;
}

.t-l-c-saveCustomDraw .saveCustomDraw-t-text-0-6 {
position: absolute !important;
top: 508px;
left: 773px;
width: 64px;
height: 19px;
pointer-events: auto;
}

.t-l-c-saveCustomDraw .saveCustomDraw-t-text-0-7 {
position: absolute !important;
top: 555px;
left: 774px;
width: 64px;
height: 19px;
pointer-events: auto;
}

.t-l-c-saveCustomDraw .saveCustomDraw-t-input-0-8 {
position: absolute !important;
top: 497px;
left: 841px;
width: 306px;
height: 32px;
pointer-events: auto;
}

.t-l-c-saveCustomDraw .saveCustomDraw-t-cascader-0-9 {
position: absolute !important;
top: 548px;
left: 842px;
width: 306px;
height: 33px;
pointer-events: auto;
}

.t-l-c-saveCustomDraw .saveCustomDraw-t-button-0-10 {
position: absolute !important;
top: 599px;
left: 1098px;
width: 50px;
height: 32px;
pointer-events: auto;
}

.t-l-c-saveCustomDraw .saveCustomDraw-t-button-0-11 {
position: absolute !important;
top: 599px;
left: 1034px;
width: 50px;
height: 32px;
pointer-events: auto;
}

.t-l-c-saveCustomDraw .saveCustomDraw-t-button-0-12 {
position: absolute !important;
top: 599px;
left: 1098px;
width: 50px;
height: 32px;
pointer-events: auto;
}
</style>
