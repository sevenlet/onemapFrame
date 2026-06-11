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

// 这一段是给 micro 用的
const xlAuthProps = {
  // 登录名
  "xlUser": localStorage.getItem('lastLoginName'),
  // 用户id
  "xlUserId": localStorage.getItem('lastUserId'),
  // token
  "xlToken": localStorage.getItem('token'),
  // socketIp 
  "xlSocketIp": 'ws://192.168.0.65:7777',
};

// const ZNXL_PARAMS = {
//     URL: 'ws://192.168.0.65:7777',
//     PATH: '/znxlsocketio',
//     LOGIN_NAME: loginName + '_',
//     USER_TOKEN: token,
// }

const xlAuthPropsString = JSON.stringify(xlAuthProps);

// 这一段是给鹿小智用的

// 智能小鹿业务参数
const xlParams = {
  // 区域编码
  thsDefaultRegionCode: global.regionaQuery.defaultRegionCode,
  // socket信息，用于和鹿小智通信
  socketIp: global.socketIp,
  socketPath: global.socketPath,
  socketRoom: global.socketRoom,
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

// 自定义样式
const customStyle = {
  icon: {
    '--avatar-right': '480px',
    '--avatar-bottom': '80px',
  },
  popover: {
    '--popover-width': '272px',
    '--popover-left': '56px',
    '--popover-triangle-left': '25px',
    '--popover-triangle-transform': 'rotateY(180deg)',
  },
  iframe: {
    'left': '30px'
  },
  message: {
    '--message-digital-human-left': '-66px',
    '--message-content-padding': '0 15px 0 140px',
    'left': '300px'
  }
};


// 自定义提示语内容
const popoverHtml = '您好！我是智能助手，提供生态环境相关的智能问答。试着问：<br/>介绍一下水口库区<br/>福建省这个月PM2.5浓度变化<br/>福建省这个月有哪些超标断面';
// 您好！我是智能小鹿助手，提供生态环境相关的智能问答。
// 试着问：
// 介绍一下水口库区
// 福建省这个月PM2.5浓度变化
// 福建省这个月有哪些超标断面

// 默认页面
const defaultPage = {
  // pagePath: '/mobile/tabs/aid', // 默认跳转到场景列表的页面路由,
  pagePath: '/mobile/aid-chat',
  pageParams: {
    defaultAppName: '福建全景指挥',
  },
};

let znxlSkinCode = ''; // 智能小鹿使用的皮肤标识

if (global.theme === '墨绿色版' || global.theme === '绿色版') {
  znxlSkinCode = 'dark-blackish-green';
} else if (global.theme === '海蓝色版' || global.theme === '蓝色版') {
  znxlSkinCode = 'light-sky-blue';
} else if (global.theme === '绿色主题') {
  znxlSkinCode = 'dark-blackish-green';
} else if (global.theme === '蓝色主题') {
  znxlSkinCode = 'light-sky-blue';
} else {
  znxlSkinCode = 'blue';
}
console.log('智能小鹿使用的皮肤标识', znxlSkinCode);

/**
 * 添加智能小鹿的组件
 * theme: 主题色，枚举值：blue | purple
 * container-type：容器类型，这个参数不能改变 枚举值：pc | screen | app
 * xl-auth-props: 用户权限相关的传参，单点登录等功能需要用到
 * xl-params: 业务相关的传参，目前还包含了页面缩放参数的传参pageScale
 * iframe-src: 智能小鹿部署的地址
 */
document.getElementById('t-l-c-znxl').innerHTML += `
<znxl-inset
id="znxl-inset"
theme='${znxlSkinCode}'
container-type="screen"
xl-auth-props='${xlAuthPropsString}'
xl-params='${JSON.stringify(xlParams)}'
default-page='${JSON.stringify(defaultPage)}'
iframe-src='http://192.168.0.202:7777/znxl-app2.0/'
style="pointer-events: none; width: 100%; height: 100%; display: inline-block;"
custom-style='${JSON.stringify(customStyle)}'
popover-html='${popoverHtml}'
        draggable="false"
        collapsible="true"
is-page-visible='${global.isPageVisible}'
></znxl-inset>
`;
// iframe-src='http://192.168.0.202:7777/znxl-app2.0/'
};
const addHtmlBefore = () => {

/**
 * 动态添加智能小鹿机器人的HTML代码
 */

const xlAuthProps = {
  // 登录名
  "xlUser": localStorage.getItem('lastLoginName'),
  // token
  "xlToken": localStorage.getItem('token'),
};
const xlAuthPropsString = JSON.stringify(xlAuthProps);

// 添加智能小鹿的组件
document.getElementById('t-l-c-znxl').innerHTML += `
<znxl-inset
id="znxl-inset"
theme="blue"
container-type="screen"
xl-params="{}"
xl-auth-props='${xlAuthPropsString}'
iframe-src="${global.lxsAppUrl}"
style="pointer-events: none; width: 100%; height: 100%; display: inline-block;"
></znxl-inset>
`;

// 智能小鹿业务参数
// const xlParams = {
//   // 区域编码
//   thsDefaultRegionCode: global.regionaQuery.defaultRegionCode
// };
// console.log(xlParams, 22235)

// 获取页面公共区块的DOM
// const rootDom = document.getElementById('t-l-c-root');
// if (rootDom) {
//   // 获取样式中的transform属性
//   const rootDomTransform = rootDom.style.transform;
//   // 若包含了缩放的属性
//   if (rootDomTransform && rootDomTransform.indexOf('scale') > -1) {
//     // 获取所有transform的属性值中的方法
//     const allValue = rootDomTransform.split(' ');
//     // 找到关于缩放的方法
//     const scaleItem = allValue.find((val) => val.indexOf('scale') > -1);
//     if (scaleItem) {
//       // 给智能小鹿机器人传缩放值
//       xlParams.pageScale = scaleItem.replace('scale(', '').replace(')', '');
//     }
//   }
// }

/**
 * 添加智能小鹿的组件
 * theme: 主题色，枚举值：blue | purple
 * container-type：容器类型，这个参数不能改变 枚举值：pc | screen | app
 * xl-auth-props: 用户权限相关的传参，单点登录等功能需要用到
 * xl-params: 业务相关的传参，目前还包含了页面缩放参数的传参pageScale
 * iframe-src: 智能小鹿部署的地址
 */
// document.getElementById('t-l-c-znxl').innerHTML += `
// <znxl-inset
// id="znxl-inset"
// theme="blue"
// container-type="screen"
// xl-auth-props='${xlAuthPropsString}'
// xl-params='${JSON.stringify(xlParams)}'
// iframe-src='${state.znxlAppUrl}'
// style="pointer-events: none; width: 100%; height: 100%; display: inline-block;"
// ></znxl-inset>
// `;

};
const changeTheme = () => {

watch(() => global.theme, () => {
  let znxlSkinCode = ''; // 智能小鹿使用的皮肤标识
  if (global.theme === '绿色主题') {
    znxlSkinCode = 'dark-blackish-green';
  } else if (global.theme === '蓝色主题') {
    znxlSkinCode = 'light-sky-blue';
  } else {
    znxlSkinCode = 'blue';
  }
  console.log('智能小鹿使用的皮肤标识', znxlSkinCode);
  // dom元素
  const element = document.querySelector('znxl-inset');
  // 检查元素是否已经附加了 shadow DOM
  if (element.shadowRoot) {
    // 获取 shadowRoot
    const shadowRoot = element.shadowRoot;

    // 查询 shadowRoot 中的元素
    const targetElement = shadowRoot.querySelector('.znxl-inset-wrapper');

    // 添加新类名，移除旧类名
    targetElement.className = `znxl-inset-wrapper set-screen-pointer ${znxlSkinCode}`

  } else {
    console.log('Shadow DOM not attached yet.');
  }
});
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
// 执行自定义方法
changeTheme();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
return {
replaceCssVariables,
global,
state,
componentState,
};
},
};