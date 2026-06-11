window.noviceGuideComponent = {
template: 
`<div id="t-l-c-noviceGuide" class="t-l-c-noviceGuide" >` +
`<t-image-base v-if="state.step === 4" id="t-image-base-85ab.fe9953464" class="noviceGuide-t-image-base-0-0"  src="assets/images/2024-07-31/11c069d1141b48ca89dd97ec2e8a0bda.png" fit="fill" :c-style="componentState.tImageBasex0x0.cStyle">` +
`</t-image-base>` +
`<t-rect v-if="state.step === 4" id="t-rect-feba.d9e38fd6d" class="noviceGuide-t-rect-0-1"  :tip="componentState.tRectx0x1.tip" label="完成" :active="componentState.tRectx0x1.active" :c-style="componentState.tRectx0x1.cStyle" @click="onclick1722403069424">` +
`</t-rect>` +
`<t-checkbox v-if="state.step === 4" id="t-checkbox-a356.405d2afa4" class="noviceGuide-t-checkbox-0-2"  :data="componentState.tCheckboxx0x2.data" :active="state.multiSelect" :data-alias="componentState.tCheckboxx0x2.dataAlias" :border="componentState.tCheckboxx0x2.border" :use-button="componentState.tCheckboxx0x2.useButton" :c-style="componentState.tCheckboxx0x2.cStyle" @change="onchange1722419951177">` +
`</t-checkbox>` +
`<t-image-base v-if="state.step === 3" id="t-image-base-6ab0.7bac10c8e" class="noviceGuide-t-image-base-0-3"  src="assets/images/2024-07-31/3bb791319a364c288a1d376b4dd55dde.png" fit="fill" :c-style="componentState.tImageBasex0x3.cStyle">` +
`</t-image-base>` +
`<t-rect v-if="state.step === 3" id="t-rect-920b.7bd7e2986" class="noviceGuide-t-rect-0-4"  :tip="componentState.tRectx0x4.tip" label="下一步" :active="componentState.tRectx0x4.active" :c-style="componentState.tRectx0x4.cStyle" @click="onclick1722403028176">` +
`</t-rect>` +
`<t-image-base v-if="state.step === 2" id="t-image-base-83ff.103b5ae9d" class="noviceGuide-t-image-base-0-5"  src="assets/images/2024-07-31/f00b5550ce71479191dec263f72fb3a7.png" fit="fill" :c-style="componentState.tImageBasex0x5.cStyle">` +
`</t-image-base>` +
`<t-rect v-if="state.step === 2" id="t-rect-35fb.9b00d1dca" class="noviceGuide-t-rect-0-6"  :tip="componentState.tRectx0x6.tip" label="下一步" :active="componentState.tRectx0x6.active" :c-style="componentState.tRectx0x6.cStyle" @click="onclick1722403012592">` +
`</t-rect>` +
`<t-image-base v-if="state.step === 1" id="t-image-base-e647.4c28ba299" class="noviceGuide-t-image-base-0-7"  src="assets/images/2024-07-31/058a0013f26a4eb0818dba5d75f132a4.png" fit="fill" :c-style="componentState.tImageBasex0x7.cStyle">` +
`</t-image-base>` +
`<t-rect v-if="state.step === 1" id="t-rect-c361.ed895453c" class="noviceGuide-t-rect-0-8"  :tip="componentState.tRectx0x8.tip" label="下一步" :active="componentState.tRectx0x8.active" :c-style="componentState.tRectx0x8.cStyle" @click="onclick1722403054112">` +
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
multiSelect: [],
step: 1,
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
defaultStyle: {"width":"565px","height":"617px","top":"452px","left":"1326px","position":"unset","animationName":""},
cStyle:{"wrapper":{"default":{"width":"565px","height":"617px","top":"452px","left":"1326px","position":"unset","animationName":""}}},
},
tRectx0x1: {
defaultStyle: {"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1586px","top":"474px","lineHeight":"28px","animationName":""},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1586px","top":"474px","lineHeight":"28px","animationName":""},"hover":{"color":"#99AAFF","cursor":"pointer"}}},
},
tCheckboxx0x2: {
defaultStyle: {"display":"flex","alignItems":"center","justifyContent":"center","width":"73px","height":"20px","position":"unset","left":"1474px","top":"476px"},
data:[{"label":"不再提示","value":"1","disabled":false}],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justifyContent":"center","width":"73px","height":"20px","position":"unset","left":"1474px","top":"476px"}},"label":{"default":{"color":"rgba(0, 0, 0, 0.9)","fontSize":"12px","lineHeight":"18px","paddingLeft":"4px"},"hover":{"color":""},"active":{"color":""}},"rectangle":{"hover":{"color":"","borderLeft":"1px solid #4854ED","borderTop":"1px solid #4854ED","borderRight":"1px solid #4854ED","borderBottom":"1px solid #4854ED"},"active":{"color":"","borderLeft":"1px solid #4854ED","borderTop":"1px solid #4854ED","borderRight":"1px solid #4854ED","borderBottom":"1px solid #4854ED","backgroundColor":"#4854ED"}}},
},
tImageBasex0x3: {
defaultStyle: {"width":"706px","height":"268px","top":"801px","left":"1185px","position":"unset","animationName":""},
cStyle:{"wrapper":{"default":{"width":"706px","height":"268px","top":"801px","left":"1185px","position":"unset","animationName":""}}},
},
tRectx0x4: {
defaultStyle: {"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1446px","top":"824px","lineHeight":"28px","animationName":""},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1446px","top":"824px","lineHeight":"28px","animationName":""},"hover":{"color":"#99AAFF","cursor":"pointer"}}},
},
tImageBasex0x5: {
defaultStyle: {"width":"706px","height":"370px","top":"699px","left":"1185px","position":"unset","animationName":""},
cStyle:{"wrapper":{"default":{"width":"706px","height":"370px","top":"699px","left":"1185px","position":"unset","animationName":""}}},
},
tRectx0x6: {
defaultStyle: {"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1444px","top":"721px","lineHeight":"28px","animationName":""},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1444px","top":"721px","lineHeight":"28px","animationName":""},"hover":{"color":"#99AAFF","cursor":"pointer"}}},
},
tImageBasex0x7: {
defaultStyle: {"width":"402px","height":"318px","top":"736px","left":"1478px","position":"unset"},
cStyle:{"wrapper":{"default":{"width":"402px","height":"318px","top":"736px","left":"1478px","position":"unset"}}},
},
tRectx0x8: {
defaultStyle: {"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1737px","top":"758px","lineHeight":"28px"},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"66px","height":"26px","color":"rgba(0, 0, 0, 0.9)","fontSize":"14px","borderLeft":"1px solid #99AAFF","borderTop":"1px solid #99AAFF","borderRight":"1px solid #99AAFF","borderBottom":"1px solid #99AAFF","borderTopLeftRadius":"35px","borderTopRightRadius":"35px","borderBottomLeftRadius":"35px","borderBottomRightRadius":"35px","position":"unset","left":"1737px","top":"758px","lineHeight":"28px"},"hover":{"color":"#99AAFF","cursor":"pointer"}}},
},
});
const getData = () => {
if (state.multiSelect.length) {
  // 获取用户名，调新手指引的保存接口
  const loginName = localStorage.getItem('lastLoginName');
  saveNoviceGuideData(loginName);
}
};
const onclick1722403012592 = () => {
// 设置变量值
state.step = 3;
};
const onclick1722403028176 = () => {
// 设置变量值
state.step = 4;
};
const onclick1722403054112 = () => {
// 设置变量值
state.step = 2;
};
const onclick1722403069424 = () => {
// 设置全局变量值

rootData.rootEmit('rootData:change', {key:'showNoviceGuide', value:false, data:{showNoviceGuide:false}});
// 执行自定义方法
getData();
};
const onchange1722419951177 = (data) => {
// 设置变量值
state.multiSelect = data;
};
// 接口函数
const saveNoviceGuideData = (name) => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"IS_XSTX":"1","LOGIN_NAME":name,"interfaceId":"74c88192ee1478148857c217e570df01"},}).then((res) => {
     // 成功的操作
     
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
onMounted(() => {
setPageScale('t-l-c-noviceGuide', global.appScaleMode, 'normal');
window.onresize = () => {
setPageScale('t-l-c-noviceGuide', global.appScaleMode, 'normal');
};
});
// 页面离开时的操作
onUnmounted(() => {
});
return {
global,
state,
componentState,
onclick1722403069424,
onchange1722419951177,
onclick1722403028176,
onclick1722403012592,
onclick1722403054112,
};
},
};