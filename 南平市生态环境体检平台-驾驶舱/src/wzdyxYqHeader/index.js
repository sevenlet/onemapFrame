window.wzdyxYqHeaderComponent = {
template: 
`<div id="t-l-c-wzdyxYqHeader" class="t-l-c-wzdyxYqHeader" >` +
`<t-row id="t-row-6356.81faf7e29" class="wzdyxYqHeader-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align">` +
`<t-text id="t-text-7113.87eb723f5" class="wzdyxYqHeader-t-text-0-0-0"  :editable="tTextx0x0x0ComputedData.editable" :c-style="tTextx0x0x0ComputedData.cStyle" :label="replaceCssVariables(filterData(state.title, componentPropBindingMap?.['t-text-7113.87eb723f5']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-rect id="t-rect-dcd4.32b685c62" class="wzdyxYqHeader-t-rect-0-0-1"  :active="tRectx0x0x1ComputedData.active" :c-style="tRectx0x0x1ComputedData.cStyle" :tip="tRectx0x0x1ComputedData.tip" :label="replaceCssVariables(filterData(state.baseData.TAXA_LEVEL_NAME, componentPropBindingMap?.['t-rect-dcd4.32b685c62']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-rect>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-6356.81faf7e29":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-7113.87eb723f5":{"attributeName":"tTextx0x0x0","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-rect-dcd4.32b685c62":{"attributeName":"tRectx0x0x1","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}}};
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
   taxaCode: "",
   showVideo: false,
   current: -1,
   audio: {},
   playing: false,
   fileType: "PHOTO",
   dialogName: "zrstProtectAnimal",
   SURVEY_NUM: "",
   ECO_CODE: "",
   code: "-",
   preTitle: "-",
   queryComponent: "",
   pictureData: [],
   pointId: "",
   pointCode: "",
   speciesTag: "--",
   title: "-",
   baseData: {"TAXA_NAME_XM":"--","SPECIES_NAME":"--","GENUS_NAME":"--","FAMILY_NAME":"--","ORDER_NAME":"--","CLASS_NAME":"--","PHYLUM_NAME":"--","KINDOM_NAME":"--","TAXA_LEVEL_NAME":"-","AREA_NAMES":"--","REMARKS":"--"},
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"524px","height":"47px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"524px","height":"47px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x0x0: {
defaultStyle: {
            default: {"marginRight":"10px","animationName":"","color":"var(--t-white)","top":"11px","left":"43px","width":"auto","fontSize":"18px","position":"unset","height":"19px","lineHeight":"18px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"marginRight":"10px","animationName":"","color":"var(--t-white)","top":"11px","left":"43px","width":"auto","fontSize":"18px","position":"unset","height":"19px","lineHeight":"18px"}},"state":{"default":{"fontSize":"18px"}}},
label:"-", 
 },
},
tRectx0x0x1: {
defaultStyle: {
            default: {"animationName":"","color":"rgba(255, 255, 255, 1)","borderTop":"1px none rgb(23,62,228)","borderLeft":"1px none rgb(23,62,228)","top":"9px","borderBottomLeftRadius":"12px","left":"126px","background":"radial-gradient(32% 32% at 50% 95%, rgba(78, 119, 255, 0.2) 0%, rgba(76, 117, 255, 0) 100%), radial-gradient(28% 28% at 50% 5%, rgba(0, 213, 255, 0.33) 0%, rgba(0, 213, 255, 0) 100%), linear-gradient(270deg, rgba(0, 213, 255, 0.2) 0%, rgba(78, 102, 255, 0.2) 100%)","borderRight":"1px none rgb(23,62,228)","width":"153px","borderTopRightRadius":"12px","fontSize":"18px","lineHeight":"18px","position":"unset","borderBottom":"1px none rgb(23,62,228)","height":"23px","min-width":"47px"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"rgba(255, 255, 255, 1)","borderTop":"1px none rgb(23,62,228)","borderLeft":"1px none rgb(23,62,228)","top":"9px","borderBottomLeftRadius":"12px","left":"126px","background":"radial-gradient(32% 32% at 50% 95%, rgba(78, 119, 255, 0.2) 0%, rgba(76, 117, 255, 0) 100%), radial-gradient(28% 28% at 50% 5%, rgba(0, 213, 255, 0.33) 0%, rgba(0, 213, 255, 0) 100%), linear-gradient(270deg, rgba(0, 213, 255, 0.2) 0%, rgba(78, 102, 255, 0.2) 100%)","borderRight":"1px none rgb(23,62,228)","width":"153px","borderTopRightRadius":"12px","fontSize":"18px","lineHeight":"18px","position":"unset","borderBottom":"1px none rgb(23,62,228)","height":"23px","min-width":"47px"}}},
tip:false,
label:"-", 
 },
},
});
const getPointParams = () => {
state.pointCode = getUrlParam('TAXA_CODE') || '35BA82062E1A11B2827BE75046C8E56F';
state.pointId = getUrlParam('POINT_ID') || 'POINT1';
state.preTitle = decodeURIComponent(getUrlParam('title')) || '-'
state.code = decodeURIComponent(getUrlParam('code')) || '-'
state.ECO_CODE = decodeURIComponent(getUrlParam('ECO_CODE')) || ''
state.SURVEY_NUM = decodeURIComponent(getUrlParam('SURVEY_NUM')) || ''
console.log('cessss',state.ECO_CODE)

};
const goback = () => {
const [POINT_CODE, SURVEY_NAME, ECO_CODE, SURVEY_NUM] = [state.code, state.preTitle, state.ECO_CODE, state.SURVEY_NUM];
const { width, height, left, top, type } = global.proBaseMainInfo.detailDialog;
const newName = global.proBaseMainInfo.detailDialog.name;
// 打开详情弹窗
initDialog(
  { POINT_CODE, SURVEY_NAME, SURVEY_NUM, ECO_CODE, componentName: state.componentName },
  global.pageBasePath,
  global.socketIp,
  global.socketRoom,
  newName,
  state.dialogName,
  width,
  height,
  left,
  top,
  type
)
};
const playAudio = (row,col) => {


  // 第一次点击，直接赋值
  if (state.current === -1) {
    state.current = row.FILE_NAME;
    state.audio = new Audio(row.FILE_PATH);
    state.audio.play();
    state.playing = true;
    row.operation = 'pause';

    // 监听音频播放完
    state.audio.addEventListener('ended', () => {
      console.log('11音频播放完了');
      row.operation = 'play';
    });
    return;
  }

  // 如果点击的是同一行，切换播放状态
  if (state.current === row.FILE_NAME) {
    if (state.playing) {
      state.audio.play();
      row.operation = 'pause';
    } else {
      state.audio.pause();
      row.operation = 'play';
    }
    state.playing = !state.playing;
    return;
  }

  // 如果点击的是其他行，停止当前行的音频播放，开始播放新音频
  if (state.current && state.current !== row.FILE_NAME) {
    state.audio.pause();
    let item = state.pictureData.find(obj => obj.FILE_NAME === state.current);
    if (item) {
      item.operation = 'play';
    }
    state.audio = new Audio(row.FILE_PATH);
    state.audio.play();
    state.playing = true;
    state.current = row.FILE_NAME;
    row.operation = 'pause';
    
    // 监听音频播放完
    state.audio.addEventListener('ended', () => {
      console.log('22音频播放完了');
      row.operation = 'play';
    });
    return;
  }
};
const playVideo = (row,col) => {
state.showVideo = true;

setTimeout(() => {
  const rect = document.getElementById('t-rect-cfef.53949d089');
  const text = rect.getElementsByClassName('t-text')[0];
  // 创建video标签
  state.audio = document.createElement('video');
  state.audio.src = row.FILE_PATH; // 设置视频源
  state.audio.controls = true; // 显示播放控件
  state.audio.width = 700;
  text.appendChild(state.audio); // 将video标签添加到页面中
  state.audio.play();
}, 500)
};
const reset = () => {
// resetCamera();
if ((state.queryComponent || global.proCommonParams.peripheralQuery) === 'peripheQueryContainerComponent') {
  return;
}
// 清除辐射圈
window.AC.PointBuffer.clear({
  callbackFn:function(result){
    console.log("PointBuffer.clear",result)
  }
});

rootData.rootSocket.emit(
   // 固定的消息名称，不能修改
  'message',
  {
    // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
    room: global.socketRoom,
    // 键名不能改 消息名称
    type: "resetPoint",
    // 键名不能改 消息内容 对象格式
    data: {},
  }
);
};
const viewDetailPage = (row,col) => {
if (col.label === "操作") {
  console.log(row);
  console.log(col);
  if (state.fileType === 'AUDIO') {
    // 播放音频
    playAudio(row, col);
  } else if(state.fileType === 'VIDEO'){
    // 播放视频
    playVideo(row, col);
  }
}
};
const initParams = () => {
state.taxaCode = 'E6556662260011B288254D1D23586530'
apiRegistry.getBaseInfo.request();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"a":"","TAXA_CODE":"state.taxaCode","interfaceId":"7e341cb1c0fd4ef06027942917353b21"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"a":"","TAXA_CODE":state.taxaCode,"interfaceId":"7e341cb1c0fd4ef06027942917353b21"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"a":"","TAXA_CODE":state.taxaCode,"interfaceId":"7e341cb1c0fd4ef06027942917353b21"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     if (res.data.head.statusCode === '200' && res.data.data) {
  const result = res.data.data
  Object.keys(result).forEach(key =>{
    if(!result[key]){
      result[key] = '-'
    }
  })
 state.baseData = result
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-wzdyxYqHeader', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-wzdyxYqHeader', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tTextx0x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x0.default, componentState.tTextx0x0x0?.[state.screenSize]));

 const tRectx0x0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x0x1.default, componentState.tRectx0x0x1?.[state.screenSize]));

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
tTextx0x0x0ComputedData,
tRectx0x0x1ComputedData,
};
},
};