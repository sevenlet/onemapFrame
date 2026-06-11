window.ssssssssComponent = {
template: 
`<div id="t-l-c-ssssssss" class="t-l-c-ssssssss" >` +
`<t-component id="t-component-e4f9.260f3360a" class="ssssssss-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :loading="tComponentx0x0ComputedData.loading" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode" :component-key="tComponentx0x0ComputedData.componentKey">` +
`</t-component>` +
`<t-chart-wind-direction id="t-chart-wind-direction-226d.b67e61673" class="ssssssss-t-chart-wind-direction-0-1"  :empty-img="tChartWindDirectionx0x1ComputedData.emptyImg" :c-style="tChartWindDirectionx0x1ComputedData.cStyle" :show-item-bg="tChartWindDirectionx0x1ComputedData.showItemBg" :options="tChartWindDirectionx0x1ComputedData.options" :data="tChartWindDirectionx0x1ComputedData.data" :series-setting="tChartWindDirectionx0x1ComputedData.seriesSetting" :line="componentState.tChartWindDirectionx0x1.line">` +
`</t-chart-wind-direction>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-e4f9.260f3360a":{"attributeName":"tComponentx0x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]},"componentKey":{"filters":[]}},"t-chart-wind-direction-226d.b67e61673":{"attributeName":"tChartWindDirectionx0x1","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"showItemBg":{"filters":[]},"options":{"filters":[]},"data":{"filters":[]},"seriesSetting":{"filters":[]}}};
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
            default: {"width":"1133px","height":"660px","margin":"0 auto","top":"48px","left":"73px","position":"unset"},
            
            },
 default: { 
 
name:"descriptionsComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"1133px","height":"660px","margin":"0 auto","top":"48px","left":"73px","position":"unset"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_6/index.html#/[object Object]",
componentName:"descriptionsComponent",
pageId:"2c494954bdb942ae86036604e59601c5",
pageCode:"descriptions",
componentKey:"ssssssss", 
 },
},
tChartWindDirectionx0x1: {
defaultStyle: {
            default: {"width":"600px","height":"338px","position":"unset","left":"531px","top":"150px"},
            
            },
line: computed(() => activeChartTheme.value?.line),
 default: { 
 
emptyImg:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"width":"600px","height":"338px","position":"unset","left":"531px","top":"150px"}}},
showItemBg:false,
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true,"left":"1%","bottom":"2%"}})),
data:[{"revenue":10,"num":100,"direction":"1","label":"东城"},{"revenue":220,"num":100,"direction":"2","label":"西城"},{"revenue":320,"num":100,"direction":"3","label":"丰台"},{"revenue":300,"num":100,"direction":"4","label":"海淀"},{"revenue":190,"num":100,"direction":"5","label":"石景山"},{"revenue":110,"num":100,"direction":"6","label":"大兴"},{"revenue":150,"num":100,"direction":"7","label":"房山"},{"revenue":260,"num":100,"direction":"8","label":"通州"},{"revenue":290,"num":100,"direction":"1","label":"顺义"},{"revenue":250,"num":100,"direction":"1","label":"密云"},{"revenue":90,"num":100,"direction":"1","label":"延庆"},{"revenue":89,"num":100,"direction":"1","label":"朝阳"},{"revenue":180,"num":100,"direction":"1","label":"门头沟"}],
seriesSetting:{"xAxisLabel":"label","data":[{"name":"常驻人口密度","dataKey":"revenue","windKey":"direction","style":{"label":{"show":false},"symbol":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/chart-wind-direction/arrow.png","symbolSize":[20,20]}}],"windData":{"north":"1","northeast":"2","east":"3","sortheast":"4","sorth":"5","sorthwest":"6","west":"7","northwest":"8"}}, 
 },
},
});
const sendMessage = () => {
rootData.rootSocket.emit(
  // 固定的消息名称，不能修改
  'message',
  {
    // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
    room: global.socketRoom,
    // 键名不能改 消息名称
    type: 'descriptionsData',
    // 键名不能改 消息内容 对象格式
    data: {
      data: [
        [
          { label: '预测信息', value: '冬季冷空气活动频繁，气温变化幅度大，可能对人民生活尤其是对疫情防控工作有不利影响冬季冷空气活动频繁，气温变化幅度大，可能对人民生活尤其是对疫情防控工作有不利影响' },
        ],
        [
          { label: '降水', value: '预计总降水量50～200毫米预计总降水量50～200毫米预计总降水量50～200毫米' },
          { label: '日照', value: '预计平均气温5～15℃' },
        ],
        [
          { label: '温度', value: '暂无' },
          { label: '扩散', value: '暂无' }
        ],
      ],
      key: 'ssssssss', // 唯一值，建议使用页面code
      labelWidth: 100
    },
  },
);
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-ssssssss', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-ssssssss', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
/* 接收socket.io消息 */
const onSocketChange133bd193e52e4d62a8ea = function (data) {
if(data.type === "descriptionsMounted"){
try{
// 执行自定义方法
sendMessage();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange133bd193e52e4d62a8ea);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange133bd193e52e4d62a8ea);
});
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tChartWindDirectionx0x1ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartWindDirectionx0x1.default, componentState.tChartWindDirectionx0x1?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

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
tComponentx0x0ComputedData,
tChartWindDirectionx0x1ComputedData,
};
},
};