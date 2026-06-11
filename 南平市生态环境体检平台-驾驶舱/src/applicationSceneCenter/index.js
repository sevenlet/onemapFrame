window.applicationSceneCenterComponent = {
template: 
`<div id="t-l-c-applicationSceneCenter" class="t-l-c-applicationSceneCenter" >` +
`<t-list-card-preview id="t-carousel-text-e227.7d35f67e4" class="applicationSceneCenter-t-list-card-preview-0-0"  :data="replaceCssVariables(filterData(state.cityData, componentPropBindingMap?.['t-carousel-text-e227.7d35f67e4']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-key-field="tListCardPreviewx0x0ComputedData.dataKeyField" :show-type="tListCardPreviewx0x0ComputedData.showType" :preview-field="tListCardPreviewx0x0ComputedData.previewField" :show-preview="tListCardPreviewx0x0ComputedData.showPreview" :c-style="tListCardPreviewx0x0ComputedData.cStyle" :status-list="tListCardPreviewx0x0ComputedData.statusList" @card-click="oncardClick1763800693029">` +
`</t-list-card-preview>` +
`<t-list-card-preview id="t-carousel-text-e227.7d35f67e5" class="applicationSceneCenter-t-list-card-preview-0-1"  :data="replaceCssVariables(filterData(state.environData, componentPropBindingMap?.['t-carousel-text-e227.7d35f67e5']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-key-field="tListCardPreviewx0x1ComputedData.dataKeyField" :show-type="tListCardPreviewx0x1ComputedData.showType" :preview-field="tListCardPreviewx0x1ComputedData.previewField" :show-preview="tListCardPreviewx0x1ComputedData.showPreview" :c-style="tListCardPreviewx0x1ComputedData.cStyle" :status-list="tListCardPreviewx0x1ComputedData.statusList" @card-click="oncardClick1763800705692">` +
`</t-list-card-preview>` +
`<t-rect id="t-rect-4a39.16071f246" class="applicationSceneCenter-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-5a47.467b63f92" class="applicationSceneCenter-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-c12f.e137fce5d" class="applicationSceneCenter-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-a477.b4046ac8f" class="applicationSceneCenter-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-17a0.e81d0b2d3" class="applicationSceneCenter-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-71a9.841506cf8" class="applicationSceneCenter-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle">` +
`</t-text>` +
`<t-list-card-preview id="t-carousel-text-e227.7d35f67e2" class="applicationSceneCenter-t-list-card-preview-0-8"  :data="replaceCssVariables(filterData(state.polluteData, componentPropBindingMap?.['t-carousel-text-e227.7d35f67e2']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-key-field="tListCardPreviewx0x8ComputedData.dataKeyField" :show-type="tListCardPreviewx0x8ComputedData.showType" :preview-field="tListCardPreviewx0x8ComputedData.previewField" :show-preview="tListCardPreviewx0x8ComputedData.showPreview" :c-style="tListCardPreviewx0x8ComputedData.cStyle" :status-list="tListCardPreviewx0x8ComputedData.statusList" @card-click="oncardClick1740561748303">` +
`</t-list-card-preview>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-carousel-text-e227.7d35f67e4":{"attributeName":"tListCardPreviewx0x0","data":{"filters":[]},"dataKeyField":{"filters":[]},"showType":{"filters":[]},"previewField":{"filters":[]},"showPreview":{"filters":[]},"cStyle":{"filters":[]},"statusList":{"filters":[]}},"t-carousel-text-e227.7d35f67e5":{"attributeName":"tListCardPreviewx0x1","data":{"filters":[]},"dataKeyField":{"filters":[]},"showType":{"filters":[]},"previewField":{"filters":[]},"showPreview":{"filters":[]},"cStyle":{"filters":[]},"statusList":{"filters":[]}},"t-rect-4a39.16071f246":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5a47.467b63f92":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-c12f.e137fce5d":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a477.b4046ac8f":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-17a0.e81d0b2d3":{"attributeName":"tRectx0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-71a9.841506cf8":{"attributeName":"tTextx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-carousel-text-e227.7d35f67e2":{"attributeName":"tListCardPreviewx0x8","data":{"filters":[]},"dataKeyField":{"filters":[]},"showType":{"filters":[]},"previewField":{"filters":[]},"showPreview":{"filters":[]},"cStyle":{"filters":[]},"statusList":{"filters":[]}}};
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
   polluteData: [],
   cityData: [],
   environData: [],
   title: "污染防治攻坚战",
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
tListCardPreviewx0x0: {
defaultStyle: {
            default: {"width":"1740px","height":"0px","position":"unset","left":"80px","top":"395px","box-shadow":""},
            
            },
 default: { 
 
data:[],
dataKeyField:{"id":"id","type":"type","typeName":"typeName","desc":"desc","title":"title","imageUrl":"imageUrl","pageUrl":"pageUrl"},
showType:true,
previewField:"imageUrl",
showPreview:false,
cStyle:{"wrapper":{"default":{"width":"1740px","height":"0px","position":"unset","left":"80px","top":"395px","box-shadow":""}},"listItem":{"default":{"marginRight":"16px","marginBottom":"16px","cursor":"pointer"},"hover":{"zIndex":"99"}},"listHoverWrapper":{"default":{"width":"274px","height":"237px","marginRight":"16px","position":"relative","zIndex":"2","transition":".3s","left":0,"top":0,"transformOrigin":"center","background":"var(--t-yycj-only-bg)","padding":"16px 12px 12px 12px","backgroundSize":"cover","overflow":"hidden"},"hover":{"width":"391px","height":"328px","background":"var(--t-yycj-only-bg-fd)","backgroundSize":"cover","left":"-25%","top":"-25%","padding":"16px 12px 12px 12px"}},"status":{},"content":{"hover":{"height":"207px"}},"footer":{"hover":{"display":"-webkit-box","WebkitBoxOrient":"vertical","WebkitLineClamp":"2","overflow":"hidden","whiteSpace":"wrap","textOverflow":"ellipsis"},"default":{"color":"var(--t-text) !important"}}},
statusList:[{"status":"美丽乡村","fontStyle":{"default":{"color":"#FFFFFF"},"hover":{}},"containerStyle":{"default":{"background":"linear-gradient(90deg, #CC9D00 0%, #DAC382 100%)"},"hover":{"background":"linear-gradient(90deg, #CC9D00 0%, #DAC382 100%)"}}},{"status":"美丽城市","fontStyle":{"default":{"color":"#FFFFFF"},"hover":{}},"containerStyle":{"default":{"background":"linear-gradient(90deg, #1188F5 0%, #80BEFC 100%)"},"hover":{"background":"linear-gradient(90deg, #1188F5 0%, #80BEFC 100%)"}}}], 
 },
},
tListCardPreviewx0x1: {
defaultStyle: {
            default: {"width":"1740px","height":"0px","position":"unset","left":"80px","top":"726px"},
            
            },
 default: { 
 
data:[],
dataKeyField:{"id":"id","type":"type","typeName":"typeName","desc":"desc","title":"title","imageUrl":"imageUrl","pageUrl":"pageUrl"},
showType:true,
previewField:"imageUrl",
showPreview:false,
cStyle:{"wrapper":{"default":{"width":"1740px","height":"0px","position":"unset","left":"80px","top":"726px"}},"listItem":{"default":{"marginRight":"16px","marginBottom":"16px","cursor":"pointer"},"hover":{"zIndex":"99"}},"listHoverWrapper":{"default":{"width":"274px","height":"237px","marginRight":"16px","marginBottom":"30px","position":"relative","zIndex":"2","transition":".3s","left":0,"top":0,"transformOrigin":"center","background":"var(--t-yycj-only-bg)","padding":"16px 12px 12px 12px","backgroundSize":"cover","overflow":"hidden"},"hover":{"width":"391px","height":"328px","background":"var(--t-yycj-only-bg-fd)","backgroundSize":"cover","left":"-25%","top":"-25%","padding":"16px 12px 12px 12px"}},"status":{},"content":{"hover":{"height":"207px"}},"footer":{"hover":{"display":"-webkit-box","WebkitBoxOrient":"vertical","WebkitLineClamp":"2","overflow":"hidden","whiteSpace":"wrap","textOverflow":"ellipsis"},"default":{"color":"var(--t-text) !important"}}},
statusList:[{"status":"区域排查","fontStyle":{"default":{"color":"#FFFFFF"},"hover":{}},"containerStyle":{"default":{"background":"linear-gradient(90deg, #CC9D00 0%, #DAC382 100%)"},"hover":{"background":"linear-gradient(90deg, #CC9D00 0%, #DAC382 100%)"}}}], 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"262px","height":"40px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-yycj-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"80px","top":"0px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"262px","height":"40px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-yycj-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"80px","top":"0px","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"262px","height":"40px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-yycj-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"80px","top":"331px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"262px","height":"40px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-yycj-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"80px","top":"331px","animationName":""}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"181px","height":"24px","color":"var(--t-text)","fontSize":"24px","lineHeight":"24px","fontFamily":"思源黑体","fontWeight":"700","position":"unset","left":"82px","top":"8px","text-shadow":"0px 0px 12px rgba(39, 30, 0, 0.5)"},
            
            },
 default: { 
 
label:"大气环境",
editable:false,
cStyle:{"wrapper":{"default":{"width":"181px","height":"24px","color":"var(--t-text)","fontSize":"24px","lineHeight":"24px","fontFamily":"思源黑体","fontWeight":"700","position":"unset","left":"82px","top":"8px","text-shadow":"0px 0px 12px rgba(39, 30, 0, 0.5)"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"180px","height":"24px","color":"var(--t-text)","fontSize":"24px","lineHeight":"24px","fontFamily":"思源黑体","fontWeight":"700","position":"unset","left":"82px","top":"339px","animationName":"","text-shadow":"0px 0px 12px rgba(39, 30, 0, 0.5)"},
            
            },
 default: { 
 
label:"水环境",
editable:false,
cStyle:{"wrapper":{"default":{"width":"180px","height":"24px","color":"var(--t-text)","fontSize":"24px","lineHeight":"24px","fontFamily":"思源黑体","fontWeight":"700","position":"unset","left":"82px","top":"339px","animationName":"","text-shadow":"0px 0px 12px rgba(39, 30, 0, 0.5)"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"262px","height":"40px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-yycj-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"82px","top":"661px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"262px","height":"40px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-yycj-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"82px","top":"661px","animationName":""}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"202px","height":"24px","color":"var(--t-text)","fontSize":"24px","lineHeight":"24px","fontFamily":"思源黑体","fontWeight":"700","position":"unset","left":"84px","top":"669px","animationName":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","filter":"","text-shadow":"0px 0px 12px rgba(39, 30, 0, 0.5)"},
            
            },
 default: { 
 
label:"督查信访",
editable:false,
cStyle:{"wrapper":{"default":{"width":"202px","height":"24px","color":"var(--t-text)","fontSize":"24px","lineHeight":"24px","fontFamily":"思源黑体","fontWeight":"700","position":"unset","left":"84px","top":"669px","animationName":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","filter":"","text-shadow":"0px 0px 12px rgba(39, 30, 0, 0.5)"}}}, 
 },
},
tListCardPreviewx0x8: {
defaultStyle: {
            default: {"width":"1740px","height":"0px","position":"unset","left":"80px","top":"64px","fontStyle":"normal","letterSpacing":"1px","backdropFilter":"blur(0px)","filter":""},
            
            },
 default: { 
 
data:[],
dataKeyField:{"id":"id","type":"type","typeName":"typeName","desc":"desc","title":"title","imageUrl":"imageUrl","pageUrl":"pageUrl"},
showType:true,
previewField:"imageUrl",
showPreview:false,
cStyle:{"wrapper":{"default":{"width":"1740px","height":"0px","position":"unset","left":"80px","top":"64px","fontStyle":"normal","letterSpacing":"1px","backdropFilter":"blur(0px)","filter":""}},"listItem":{"default":{"marginRight":"16px","marginBottom":"16px","cursor":"pointer"},"hover":{"zIndex":"99"}},"listHoverWrapper":{"default":{"width":"274px","height":"237px","marginRight":"16px","position":"relative","zIndex":"2","transition":".3s","left":0,"top":0,"transformOrigin":"center","background":"var(--t-yycj-only-bg)","padding":"16px 12px 12px 12px","backgroundSize":"cover","overflow":"hidden"},"hover":{"width":"391px","height":"328px","background":"var(--t-yycj-only-bg-fd)","backgroundSize":"cover","left":"-25%","top":"-25%","padding":"16px 12px 12px 12px"}},"status":{},"content":{"hover":{"height":"207px"}},"footer":{"hover":{"display":"-webkit-box","WebkitBoxOrient":"vertical","WebkitLineClamp":"2","overflow":"hidden","whiteSpace":"wrap","textOverflow":"ellipsis"},"default":{"color":"var(--t-text) !important"}}},
statusList:[{"status":"促碧海","fontStyle":{"default":{"color":"#FFFFFF"},"hover":{}},"containerStyle":{"default":{"background":"linear-gradient(90deg, #4A53FF 0%, #839CFF 100%)"},"hover":{"background":"linear-gradient(90deg, #4A53FF 0%, #839CFF 100%)"}}},{"status":"保净土","fontStyle":{"default":{"color":"#FFFFFF"},"hover":{}},"containerStyle":{"default":{"background":"linear-gradient(90deg, #CC9D00 0%, #DAC382 100%)"},"hover":{"background":"linear-gradient(90deg, #CC9D00 0%, #DAC382 100%)"}}},{"status":"治废物","fontStyle":{"default":{"color":"#FFFFFF"},"hover":{}},"containerStyle":{"default":{"background":"linear-gradient(90deg, #04B707 0%, #55DD58 100%)"},"hover":{"background":"linear-gradient(90deg, #04B707 0%, #55DD58 100%)"}}},{"status":"守蓝天","fontStyle":{"default":{"color":"#FFFFFF"},"hover":{}},"containerStyle":{"default":{"background":"linear-gradient(90deg, #1188F5 0%, #80BEFC 100%)"},"hover":{"background":"linear-gradient(90deg, #1188F5 0%, #80BEFC 100%)"}}},{"status":"护碧水","fontStyle":{"default":{"color":"#FFFFFF"},"hover":{}},"containerStyle":{"default":{"background":"linear-gradient(90deg, #04B1B7 0%, #36CCA2 100%)"},"hover":{"background":"linear-gradient(90deg, #04B1B7 0%, #36CCA2 100%)"}}}], 
 },
},
});
const goPage = (rows) => {
if (rows.title === '溶解氧调控') {
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'createDialog',  // 消息类型名称
      data: {
        data: {
          headerComName: "",
          contentComName: "rjytkDialogComponent",
          maxWidth: "1400px",
          maxHeight: "700px",
          minWidth: "1000px",
          minHeight: "500px",
          isScalse: false,
          title: "溶解氧调控"
        }
      }
    }
  );
  return;
}
if (rows.TARGET === '1') {
  window.open(rows.pageUrl, '_blank');
} else {
  window.open(rows.pageUrl, '_self');
}
console.log(rows);
};
const oncardClick1740561748303 = (item) => {
// 执行自定义方法
goPage(item);
};
const oncardClick1763800693029 = (item,index,data) => {
// 执行自定义方法
goPage(item);
};
const oncardClick1763800705692 = (item,index,data) => {
// 执行自定义方法
goPage(item);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"c304153ba8ff7bd613564260a9afd9fd","loginName":"admin","menuId":"29ec4838-18e0-40c2-bf75-62842993cc75"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"c304153ba8ff7bd613564260a9afd9fd","loginName":"admin","menuId":"29ec4838-18e0-40c2-bf75-62842993cc75"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"c304153ba8ff7bd613564260a9afd9fd","loginName":"admin","menuId":"29ec4838-18e0-40c2-bf75-62842993cc75"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     
if (res?.data && res?.data.length > 0) {
  // 获取用户登录名
  const userLoginName = localStorage.getItem('lastLoginName');
  function convertToTree(data) {
    // 首先创建一个空对象来存储每个菜单的引用
    const menuMap = {};
    // 存储根菜单的数组
    const rootMenus = [];

    // 第一步：将所有菜单对象存储到 menuMap 中
    data.forEach(menu => {
      menu.children = [];
      menuMap[menu.MENU_ID] = menu;
    });

    // 第二步：遍历数据，将每个菜单添加到其父菜单的 children 数组中
    data.forEach(menu => {
      const parentId = menu.PARENT;
      if (parentId === null) {
        // 如果没有父菜单，将其添加到根菜单数组中
        rootMenus.push(menu);
      } else {
        const parentMenu = menuMap[parentId];
        if (parentMenu) {
          // 如果父菜单存在，将当前菜单添加到父菜单的 children 数组中
          parentMenu.children.push(menu);
        }
      }
    });

    // 第三步：对每个菜单的子菜单按 SORT 属性排序
    function sortChildren(menu) {
      if (menu.children.length > 0) {
        menu.children.sort((a, b) => (a.SORT || 0) - (b.SORT || 0));
        menu.children.forEach(sortChildren);
      }
    }
    rootMenus.forEach(sortChildren);

    return rootMenus;
  }
  const treeData = convertToTree(res?.data);
  state.polluteData = [];
  state.cityData = [];
  state.environData = [];
  treeData[0].children[0].children.forEach((item, index) => {
    state.polluteData.push({
      "TARGET":item.TARGET,
      "id": String(index + 1),
      "title": item.MENU_NAME,
      "type": JSON.parse(item.EXT4.replace(/'/g, '"')).businessType,
      "typeName": JSON.parse(item.EXT4.replace(/'/g, '"')).businessType,
      "desc": JSON.parse(item.EXT4.replace(/'/g, '"')).desc,
      "imageUrl": JSON.parse(item.EXT4.replace(/'/g, '"')).backgroundImg,
      "pageUrl": item.MENU_URL ? item.MENU_URL.replace('{username}', userLoginName) : item.MENU_URL,
    })
  });
  treeData[0].children[1].children.forEach((item, index) => {
    state.cityData.push({
      "TARGET":item.TARGET,
      "id": String(index + 1),
      "title": item.MENU_NAME,
      "type": JSON.parse(item.EXT4.replace(/'/g, '"')).businessType,
      "typeName": JSON.parse(item.EXT4.replace(/'/g, '"')).businessType,
      "desc": JSON.parse(item.EXT4.replace(/'/g, '"')).desc,
      "imageUrl": JSON.parse(item.EXT4.replace(/'/g, '"')).backgroundImg,
      "pageUrl": item.MENU_URL ? item.MENU_URL.replace('{username}', userLoginName) : item.MENU_URL,
    })
  });
  treeData[0].children[2].children.forEach((item, index) => {
    state.environData.push({
      "TARGET":item.TARGET,
      "id": String(index + 1),
      "title": item.MENU_NAME,
      "type": JSON.parse(item.EXT4.replace(/'/g, '"')).businessType,
      "typeName": JSON.parse(item.EXT4.replace(/'/g, '"')).businessType,
      "desc": JSON.parse(item.EXT4.replace(/'/g, '"')).desc,
      "imageUrl": JSON.parse(item.EXT4.replace(/'/g, '"')).backgroundImg,
      "pageUrl": item.MENU_URL ? item.MENU_URL.replace('{username}', userLoginName) : item.MENU_URL,
    })
  });
} else {
  state.polluteData = [];
  state.cityData = [];
  state.environData = [];
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
                            setPageScale('t-l-c-applicationSceneCenter', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onBeforeMount(() => {
// 事件交互-请求调用接口
apiRegistry.getData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
});
onMounted(() => {
setPageScale('t-l-c-applicationSceneCenter', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardPreviewx0x0ComputedData = computed(() => _.merge({}, componentState.tListCardPreviewx0x0.default, componentState.tListCardPreviewx0x0?.[state.screenSize]));

 const tListCardPreviewx0x1ComputedData = computed(() => _.merge({}, componentState.tListCardPreviewx0x1.default, componentState.tListCardPreviewx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tListCardPreviewx0x8ComputedData = computed(() => _.merge({}, componentState.tListCardPreviewx0x8.default, componentState.tListCardPreviewx0x8?.[state.screenSize]));

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
tListCardPreviewx0x0ComputedData,
tListCardPreviewx0x1ComputedData,
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tTextx0x4ComputedData,
tTextx0x5ComputedData,
tRectx0x6ComputedData,
tTextx0x7ComputedData,
tListCardPreviewx0x8ComputedData,
oncardClick1763800693029,
oncardClick1763800705692,
oncardClick1740561748303,
};
},
};