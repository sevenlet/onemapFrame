window.gztActiveStateComponent = {
template: 
`<div id="t-l-c-gztActiveState" class="t-l-c-gztActiveState" >` +
`<t-rect id="t-rect-594e.4e511d355" class="gztActiveState-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-component id="t-component-2445.67e75025" class="gztActiveState-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :loading="tComponentx0x4ComputedData.loading" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName" :page-id="tComponentx0x4ComputedData.pageId" :page-code="tComponentx0x4ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-6178.5f42bc801" class="gztActiveState-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :loading="tComponentx0x5ComputedData.loading" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName" :page-id="tComponentx0x5ComputedData.pageId" :page-code="tComponentx0x5ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-b1d8.99a3285ba" class="gztActiveState-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :loading="tComponentx0x6ComputedData.loading" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName" :page-id="tComponentx0x6ComputedData.pageId" :page-code="tComponentx0x6ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-be61.ac5e9ad94" class="gztActiveState-t-component-0-7"  :name="tComponentx0x7ComputedData.name" :loading="tComponentx0x7ComputedData.loading" :c-style="tComponentx0x7ComputedData.cStyle" :src="tComponentx0x7ComputedData.src" :component-name="tComponentx0x7ComputedData.componentName" :page-id="tComponentx0x7ComputedData.pageId" :page-code="tComponentx0x7ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-79f7.557bc1e3a" class="gztActiveState-t-component-0-8"  :name="tComponentx0x8ComputedData.name" :loading="tComponentx0x8ComputedData.loading" :c-style="tComponentx0x8ComputedData.cStyle" :src="tComponentx0x8ComputedData.src" :component-name="tComponentx0x8ComputedData.componentName" :page-id="tComponentx0x8ComputedData.pageId" :page-code="tComponentx0x8ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-594e.4e511d355":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-6653.137a67e68":{"attributeName":"tRectx0x1"},"t-image-base-cbfa.9f275901d":{"attributeName":"tImageBasex0x2"},"t-iframe-ac04.cea4daf9a":{"attributeName":"tIframex0x3"},"t-component-2445.67e75025":{"attributeName":"tComponentx0x4","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-6178.5f42bc801":{"attributeName":"tComponentx0x5","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-b1d8.99a3285ba":{"attributeName":"tComponentx0x6","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-be61.ac5e9ad94":{"attributeName":"tComponentx0x7","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-79f7.557bc1e3a":{"attributeName":"tComponentx0x8","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   themeArr: [{"skinCode":"green","skinName":"绿色版"},{"skinCode":"blue","skinName":"蓝色版"},{"skinCode":"pc-light","skinName":"PC浅色版"},{"skinCode":"dark-blackish-green","skinName":"墨绿色版"}],
   cloudIframeUrl: "",
   cloudLoaded: false,
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
            default: {"width":"1920px","height":"1080px","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-27/f16ccbaa2fd94511898ae6cdf0c180ee.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-27/f16ccbaa2fd94511898ae6cdf0c180ee.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset"}},"text":{"default":{"color":"#FF0000","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"682px","height":"407px","margin":"0 auto","position":"unset","left":"16px","top":"180px"},
            
            },
 default: { 
 
name:"gztLeftCommonAppComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"682px","height":"407px","margin":"0 auto","position":"unset","left":"16px","top":"180px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"gztLeftCommonAppComponent",
pageId:"b84c36eddf4d418681a968fc4a9d7ba0",
pageCode:"gztLeftCommonApp", 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"1190px","height":"886px","margin":"0 auto","position":"unset","left":"712px","top":"180px","animationName":""},
            
            },
 default: { 
 
name:"gztRightComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"1190px","height":"886px","margin":"0 auto","position":"unset","left":"712px","top":"180px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/gztRight",
componentName:"gztRightComponent",
pageId:"eeaa374662ce47edb24787793ef4a573",
pageCode:"gztRight", 
 },
},
tComponentx0x6: {
defaultStyle: {
            default: {"width":"682px","height":"166px","margin":"0 auto","position":"unset","left":"16px","top":"602px","animationName":""},
            
            },
 default: { 
 
name:"gztLeftMyTodoComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"682px","height":"166px","margin":"0 auto","position":"unset","left":"16px","top":"602px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"gztLeftMyTodoComponent",
pageId:"adeff21c01a74366a383d583150f2205",
pageCode:"gztLeftMyTodo", 
 },
},
tComponentx0x7: {
defaultStyle: {
            default: {"width":"682px","height":"283px","margin":"0 auto","position":"unset","left":"14px","top":"785px","animationName":""},
            
            },
 default: { 
 
name:"gztLeftNoticeComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"682px","height":"283px","margin":"0 auto","position":"unset","left":"14px","top":"785px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"gztLeftNoticeComponent",
pageId:"157920b6d66c471180f7e285ee189a3c",
pageCode:"gztLeftNotice", 
 },
},
tComponentx0x8: {
defaultStyle: {
            default: {"width":"1888px","height":"62px","margin":"0 auto","position":"unset","left":"17px","top":"106px","animationName":""},
            
            },
 default: { 
 
name:"gztTopNewsComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"1888px","height":"62px","margin":"0 auto","position":"unset","left":"17px","top":"106px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"gztTopNewsComponent",
pageId:"3b50b5832f04452b891d6b22018fcd7c",
pageCode:"gztTopNews", 
 },
},
});
const addCloudListen = () => {
window.addEventListener('message', handleMessage, false);
};
const removeCloudListen = () => {
window.removeEventListener('message', handleMessage, false);
};
const handleMessage = (ev) => {
if (ev.origin !== 'http://192.168.0.202:7777') return;

// 生态云 iframe DOM
const cloudIframeDom = document.getElementById('t-iframe-ac04.cea4daf9a');

// 生态云-驾驶舱内嵌页面-加载完毕
if (ev.data.type === 'compContainerLoaded') {
  console.log('接收到了 postMessage 消息 生态云-compContainerLoaded', ev);
  if (cloudIframeDom) {
    // 生态云iframe 加载完毕，改变透明度，隐藏加载中状态
    cloudIframeDom.style.opacity = 1;
    state.cloudLoaded = true;
  }
  // 生态云-点开弹框了，需要提升 iframe  的层级
} else if (ev.data.type === 'upOneMapLevel') {
  console.log('接收到了 postMessage 消息 生态云-upOneMapLevel', ev);
  if (cloudIframeDom) {
    cloudIframeDom.style.zIndex = 100;
  }
  // 生态云-关闭弹框了，需要降低 iframe  的层级
} else if (ev.data.type === 'downOneMapLevel') {
  console.log('接收到了 postMessage 消息 生态云-downOneMapLevel', ev);
  if (cloudIframeDom) {
    cloudIframeDom.style.zIndex = 'unset';
  }
}

};
const changeCloudTheme = (skinCode) => {
// 福建生态云 iframe 容器DOM
const iframeContainerDom = document.getElementById('t-iframe-ac04.cea4daf9a');
// 福建生态云 iframe DOM
const iframeDom = iframeContainerDom?.children?.[0];
console.log('福建生态云 iframe-dom', iframeDom, skinCode);

// 发送换肤 postMessage
if (iframeDom) {
    iframeDom.contentWindow.postMessage(
        {
            type: 'outsideSetCloudTheme',
            data: {
                skinCode: global.themeArr.filter((item) => item.jscSkinCode === skinCode.theme)?.[0]?.skinCode || '',
                skinName: global.themeArr.filter((item) => item.jscSkinCode === skinCode.theme)?.[0]?.skinName || '',
            }
        },
        'http://192.168.0.202:7777' // 替换为实际子页面域名
    );
}
};
const setCloudIframeUrl = () => {
// 福建生态云地址
const defUrl = 'http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12_6/index.html';

// 获取渲染福建生态云页面时，驾驶舱当前的皮肤中文名
const skinConfigObj = global.themeArr.filter((item) => item.jscSkinName === global.theme);
const skinCode = skinConfigObj?.[0]?.skinCode || '';
// 若存在中文名，就拼接下 生态云的 皮肤参数
const otherParams = skinCode ? `?isCockpit=1&skin=${skinCode}#/root` : '?isCockpit=1#/root';
// 拼接完整生态云 iframe 地址
state.cloudIframeUrl = `${defUrl}${otherParams}`;
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-gztActiveState', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setCloudIframeUrl();
// 执行自定义方法
addCloudListen();
/* 接收socket.io消息 */
const onSocketChange11d184bb4c004f4ca9f9 = function (data) {
if(data.type === "changeTheme"){
try{
// 执行自定义方法
changeCloudTheme(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange11d184bb4c004f4ca9f9);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange11d184bb4c004f4ca9f9);
});
onBeforeUnmount(() => {
// 执行自定义方法
removeCloudListen();
});
onMounted(() => {
setPageScale('t-l-c-gztActiveState', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

 const tComponentx0x7ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7.default, componentState.tComponentx0x7?.[state.screenSize]));

 const tComponentx0x8ComputedData = computed(() => _.merge({}, componentState.tComponentx0x8.default, componentState.tComponentx0x8?.[state.screenSize]));

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
tComponentx0x4ComputedData,
tComponentx0x5ComputedData,
tComponentx0x6ComputedData,
tComponentx0x7ComputedData,
tComponentx0x8ComputedData,
};
},
};