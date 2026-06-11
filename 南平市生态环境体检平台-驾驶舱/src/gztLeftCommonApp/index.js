window.gztLeftCommonAppComponent = {
template: 
`<div id="t-l-c-gztLeftCommonApp" class="t-l-c-gztLeftCommonApp" >` +
`<t-rect id="t-rect-3812.3b546680f" class="gztLeftCommonApp-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-component id="t-component-1df3.b14d99dca" class="gztLeftCommonApp-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :loading="tComponentx0x1ComputedData.loading" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-a9f2.bc055a235" class="gztLeftCommonApp-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :loading="tComponentx0x2ComputedData.loading" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode">` +
`</t-component>` +
`<t-text-common id="t-text-common-a001.422ec353" class="gztLeftCommonApp-t-text-common-0-3"  :label="tTextCommonx0x3ComputedData.label" :editable="tTextCommonx0x3ComputedData.editable" :c-style="tTextCommonx0x3ComputedData.cStyle">` +
`</t-text-common>` +
`<t-rect id="t-rect-a98b.53a0621f" class="gztLeftCommonApp-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1755081587659">` +
`</t-rect>` +
`<t-rect id="t-rect-f4d1.1aee35ff4" class="gztLeftCommonApp-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-3812.3b546680f":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-1df3.b14d99dca":{"attributeName":"tComponentx0x1","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-a9f2.bc055a235":{"attributeName":"tComponentx0x2","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-a001.422ec353":{"attributeName":"tTextCommonx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-a98b.53a0621f":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f4d1.1aee35ff4":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
tRectx0x0: {
defaultStyle: {
            default: {"width":"682px","height":"406px","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--gzt-card-bgc)","borderTopLeftRadius":"12px","borderTopRightRadius":"12px","borderBottomLeftRadius":"12px","borderBottomRightRadius":"12px","box-shadow":"0px 4px 10px 0px rgba(19, 50, 137, 0.3)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"682px","height":"406px","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--gzt-card-bgc)","borderTopLeftRadius":"12px","borderTopRightRadius":"12px","borderBottomLeftRadius":"12px","borderBottomRightRadius":"12px","box-shadow":"0px 4px 10px 0px rgba(19, 50, 137, 0.3)"}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"682px","height":"51px","margin":"0 auto","top":"0px","left":"0px","position":"unset"},
            
            },
 default: { 
 
name:"secondTitleLongComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"682px","height":"51px","margin":"0 auto","top":"0px","left":"0px","position":"unset"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/secondTitleLong",
componentName:"secondTitleLongComponent",
pageId:"f104322ad10c457fa84bf5a6ae0b5de0",
pageCode:"secondTitleLong", 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"660px","height":"355px","margin":"0 auto","position":"unset","left":"12px","top":"58px","overflow":"auto"},
            
            },
 default: { 
 
name:"gztLeftCommonAppListComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"660px","height":"355px","margin":"0 auto","position":"unset","left":"12px","top":"58px","overflow":"auto"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"gztLeftCommonAppListComponent",
pageId:"f5a994fc2ea7427bbb61c79612eba037",
pageCode:"gztLeftCommonAppList", 
 },
},
tTextCommonx0x3: {
defaultStyle: {
            default: {"width":"200px","height":"24px","color":"var(--skin-font-color-90)","top":"15px","left":"52px","position":"unset","fontSize":"24px","fontWeight":"700"},
            
            },
 default: { 
 
label:"常用应用",
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"24px","color":"var(--skin-font-color-90)","top":"15px","left":"52px","position":"unset","fontSize":"24px","fontWeight":"700"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"82px","height":"28px","position":"unset","left":"588px","top":"13px","borderTopLeftRadius":"58px","borderTopRightRadius":"58px","borderBottomLeftRadius":"58px","borderBottomRightRadius":"58px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--gzt-button-bgc)","fontSize":"14px","color":"var(--gzt-button-color)","paddingLeft":"18px","cursor":"pointer","lineHeight":"30px","paddingTop":"0px"},
            
            },
 default: { 
 
tip:false,
label:"自定义",
active:false,
cStyle:{"wrapper":{"default":{"width":"82px","height":"28px","position":"unset","left":"588px","top":"13px","borderTopLeftRadius":"58px","borderTopRightRadius":"58px","borderBottomLeftRadius":"58px","borderBottomRightRadius":"58px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--gzt-button-bgc)","fontSize":"14px","color":"var(--gzt-button-color)","paddingLeft":"18px","cursor":"pointer","lineHeight":"30px","paddingTop":"0px"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"18px","height":"15px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-24/d7f97752217d4ff0823f89981381c38f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"595px","top":"20px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"18px","height":"15px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-24/d7f97752217d4ff0823f89981381c38f.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"595px","top":"20px"}}}, 
 },
},
});
const handleEdit = () => {
let componentName = 'gztLeftCommonAppListDialog';

// rootData.rootEmit(
//   'rootData:change',
//   {
//     key: 'showPopComponent',
//     value: `${componentName}Component`,
//     data: {
//       showPopComponent: `${componentName}Component`
//     },
//   });

// rootData.rootEmit(
//   'rootData:change',
//   {
//     key: 'showPop',
//     value: true,
//     data: {
//       showPop: true
//     },
//   });
global.dialogName = `${componentName}Component`
};
const recentMsg = () => {

rootData.rootOn('rootSocket:change', (data) => {
  if (data.type === "gztLeftCommonAppListMounted") {
    // 请求接口数据
  };
});
};
const sendMsg = () => {
// 发送消息 socket
rootData.rootSocket.emit(
  // 固定的消息名称，不能修改
  'message',
  {
    // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
    room: global.socketRoom,
    // 键名不能改 消息名称
    type: 'commonAppListData',
    // 键名不能改 消息内容 对象格式
    data: {
      data: []
    },
  },
);
};
const onclick1755081587659 = () => {
// 执行自定义方法
handleEdit();
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-gztLeftCommonApp', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
recentMsg();
onMounted(() => {
setPageScale('t-l-c-gztLeftCommonApp', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tTextCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x3.default, componentState.tTextCommonx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

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
tRectx0x0ComputedData,
tComponentx0x1ComputedData,
tComponentx0x2ComputedData,
tTextCommonx0x3ComputedData,
tRectx0x4ComputedData,
tRectx0x5ComputedData,
onclick1755081587659,
};
},
};