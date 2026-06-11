window.gztActiveStateDevelopingComponent = {
template: 
`<div id="t-l-c-gztActiveStateDeveloping" class="t-l-c-gztActiveStateDeveloping" >` +
`<t-rect id="t-rect-594e.4e511d355" class="gztActiveStateDeveloping-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.cloudLoaded === false" id="t-rect-6653.137a67e68" class="gztActiveStateDeveloping-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-iframe id="t-iframe-ac04.cea4daf9a" class="gztActiveStateDeveloping-t-iframe-0-3"  :src="replaceCssVariables(filterData(state.cloudIframeUrl, componentPropBindingMap?.['t-iframe-ac04.cea4daf9a']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x3ComputedData.srcdoc" :scrolling="tIframex0x3ComputedData.scrolling" :c-style="tIframex0x3ComputedData.cStyle" :socket-url="replaceCssVariables(filterData(global.socketIp, componentPropBindingMap?.['t-iframe-ac04.cea4daf9a']['socketUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :room-id="replaceCssVariables(filterData(global.socketRoom, componentPropBindingMap?.['t-iframe-ac04.cea4daf9a']['roomId'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-iframe>` +
`<t-component id="t-component-79f7.557bc1e3a" class="gztActiveStateDeveloping-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :loading="tComponentx0x4ComputedData.loading" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName" :page-id="tComponentx0x4ComputedData.pageId" :page-code="tComponentx0x4ComputedData.pageCode">` +
`</t-component>` +
`<t-rect id="t-rect-bca5.2dd08529b" class="gztActiveStateDeveloping-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-8f54.fe905bff8" class="gztActiveStateDeveloping-t-text-common-0-6"  :label="tTextCommonx0x6ComputedData.label" :editable="tTextCommonx0x6ComputedData.editable" :c-style="tTextCommonx0x6ComputedData.cStyle">` +
`</t-text-common>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-594e.4e511d355":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-6653.137a67e68":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-cbfa.9f275901d":{"attributeName":"tImageBasex0x2"},"t-iframe-ac04.cea4daf9a":{"attributeName":"tIframex0x3","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]},"socketUrl":{"filters":[]},"roomId":{"filters":[]}},"t-component-79f7.557bc1e3a":{"attributeName":"tComponentx0x4","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-rect-bca5.2dd08529b":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-8f54.fe905bff8":{"attributeName":"tTextCommonx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
            default: {"width":"1920px","height":"1080px","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--gzt-bgc)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--gzt-bgc)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1190px","height":"883px","top":"185px","left":"708px","position":"unset","backgroundColor":"var(--business-dialog-bg)","color":"var(--intergrated-query-font-color)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"12px","borderTopRightRadius":"12px","borderBottomLeftRadius":"12px","borderBottomRightRadius":"12px"},
            
            },
 default: { 
 
tip:false,
label:"数据加载中",
active:false,
cStyle:{"wrapper":{"default":{"width":"1190px","height":"883px","top":"185px","left":"708px","position":"unset","backgroundColor":"var(--business-dialog-bg)","color":"var(--intergrated-query-font-color)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"12px","borderTopRightRadius":"12px","borderBottomLeftRadius":"12px","borderBottomRightRadius":"12px"}}}, 
 },
},
tIframex0x3: {
defaultStyle: {
            default: {"width":"1922px","height":"1082px","position":"unset","left":"-5px","top":"-1px","opacity":"0% !important","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(23, 62, 228, 0)"},
            
            },
 default: { 
 
src:"",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"1922px","height":"1082px","position":"unset","left":"-5px","top":"-1px","opacity":"0% !important","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"rgba(23, 62, 228, 0)"}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tComponentx0x4: {
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
tRectx0x5: {
defaultStyle: {
            default: {"width":"1921px","height":"933px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","backgroundColor":"#224B82","position":"unset","left":"-3px","top":"144px","zIndex":9,"borderDirection":"all"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1921px","height":"933px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","backgroundColor":"#224B82","position":"unset","left":"-3px","top":"144px","zIndex":9,"borderDirection":"all"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTextCommonx0x6: {
defaultStyle: {
            default: {"width":"213px","height":"113px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"24px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"854px","top":"477px","zIndex":9,"background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"功能开发中",
editable:false,
cStyle:{"wrapper":{"default":{"width":"213px","height":"113px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"24px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"854px","top":"477px","zIndex":9,"background":"unset","backgroundClip":"unset"}}}, 
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
                            setPageScale('t-l-c-gztActiveStateDeveloping', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setCloudIframeUrl();
// 执行自定义方法
addCloudListen();
/* 接收socket.io消息 */
const onSocketChange0c80d22eaf244cd6abdb = function (data) {
if(data.type === "changeTheme"){
try{
// 执行自定义方法
changeCloudTheme(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange0c80d22eaf244cd6abdb);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange0c80d22eaf244cd6abdb);
});
onBeforeUnmount(() => {
// 执行自定义方法
removeCloudListen();
});
onMounted(() => {
setPageScale('t-l-c-gztActiveStateDeveloping', global.appScaleMode, 'normal');
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

 const tIframex0x3ComputedData = computed(() => _.merge({}, componentState.tIframex0x3.default, componentState.tIframex0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tTextCommonx0x6ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x6.default, componentState.tTextCommonx0x6?.[state.screenSize]));

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
tRectx0x1ComputedData,
tIframex0x3ComputedData,
tComponentx0x4ComputedData,
tRectx0x5ComputedData,
tTextCommonx0x6ComputedData,
};
},
};