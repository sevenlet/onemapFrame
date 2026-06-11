window.znxlEntryComponent = {
template: 
`<div id="t-l-c-znxlEntry" class="t-l-c-znxlEntry" >` +
`<t-component v-if="global.showNoviceGuide === true" id="t-component-d830.9ade1158a" class="znxlEntry-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-component v-if="state.showZnxl === true" id="t-component-e349.1d2bd1015" class="znxlEntry-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName">` +
`</t-component>` +
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
   showZnxl: false,
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","left":"0px","top":"3px","position":"unset"},
            
            },
 default: { 
 
name:"noviceGuideComponent",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","left":"0px","top":"3px","position":"unset"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4/index.html#/noviceGuide",
componentName:"noviceGuideComponent", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","margin":"0 auto","backgroundColor":"rgba(36, 41, 62, 0)","top":"0px","left":"0px","pointerEvents":"none"},
            
            },
 default: { 
 
name:"znxlComponent",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","margin":"0 auto","backgroundColor":"rgba(36, 41, 62, 0)","top":"0px","left":"0px","pointerEvents":"none"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4/index.html#/znxl",
componentName:"znxlComponent", 
 },
},
});
const getData = () => {
// 获取用户名，调新手指引的接口
const loginName = localStorage.getItem('lastLoginName');
getNoviceGuideQueryData(loginName);

// 监听新手指引是否关掉
watch(() => [global.showNoviceGuide], () => {
  // 新手指引关掉后，显示小鹿图标
  if (!global.showNoviceGuide) {
    // 设置智能小鹿显示
    setZnxlVisible();
  }
}, {
  deep: true, // 深度监听
});
};
const setZnxlVisible = () => {

//显示智能小鹿图标
state.showZnxl = true;
};
// 接口函数
const getNoviceGuideQueryData = (name) => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"LOGIN_NAME":name,"interfaceId":"1debc5fcb6a00f496805f74fa5e0748b"},}).then((res) => {
     // 成功的操作
     if (res.status === 200 && res.data.head.statusCode === '200') {
  if (!res.data.data) {
    // 为空则显示新手指引
    global.showNoviceGuide = true;
  } else {
    // 不显示新手指引
    global.showNoviceGuide = false;

    // 设置智能小鹿显示
    setZnxlVisible();
  }
} 
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-znxlEntry', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getData();
onMounted(() => {
setPageScale('t-l-c-znxlEntry', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

return {
global,
state,
componentState,
tComponentx0x0ComputedData,
tComponentx0x1ComputedData,
};
},
};