window.znxlComponent = {
template: 
`<div id="t-l-c-znxl" class="t-l-c-znxl" >` +
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
   znxlAppUrl: "https://192.168.0.147:8889/znxl-app",
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
});
const addHtml = () => {

/**
 * 动态添加智能小鹿机器人的HTML代码
 */
/*
const xlAuthProps = {
  // 登录名
  "xlUser": localStorage.getItem('lastLoginName'),
  // token
  "xlToken": localStorage.getItem('token')
};
const xlAuthPropsString = JSON.stringify(xlAuthProps);

// 智能小鹿业务参数
const xlParams = {
  // 区域编码
  thsDefaultRegionCode: global.regionaQuery.defaultRegionCode
};
console.log(xlParams, 22235)

// 获取页面公共区块的DOM
const rootDom = document.getElementById('t-l-c-root');
if (rootDom) {
  // 获取样式中的transform属性
  const rootDomTransform = rootDom.style.transform;
  // 若包含了缩放的属性
  if (rootDomTransform && rootDomTransform.indexOf('scale') > -1) {
    // 获取所有transform的属性值中的方法
    const allValue = rootDomTransform.split(' ');
    // 找到关于缩放的方法
    const scaleItem = allValue.find((val) => val.indexOf('scale') > -1);
    if (scaleItem) {
      // 给智能小鹿机器人传缩放值
      xlParams.pageScale = scaleItem.replace('scale(', '').replace(')', '');
    }
  }
}
*/
/**
 * 添加智能小鹿的组件
 * theme: 主题色，枚举值：blue | purple
 * container-type：容器类型，这个参数不能改变 枚举值：pc | screen | app
 * xl-auth-props: 用户权限相关的传参，单点登录等功能需要用到
 * xl-params: 业务相关的传参，目前还包含了页面缩放参数的传参pageScale
 * iframe-src: 智能小鹿部署的地址
 */
/*
document.getElementById('t-l-c-znxl').innerHTML += `
<znxl-inset
id="znxl-inset"
theme="blue"
container-type="screen"
xl-auth-props='${xlAuthPropsString}'
xl-params='${JSON.stringify(xlParams)}'
iframe-src='${state.znxlAppUrl}'
style="pointer-events: none; width: 100%; height: 100%; display: inline-block;"
></znxl-inset>
`;
*/
};
 function handleWindowResize() {
                            setPageScale('t-l-c-znxl', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-znxl', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
addHtml();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
return {
global,
state,
componentState,
};
},
};