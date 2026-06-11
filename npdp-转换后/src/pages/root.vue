<template>
  <div id="t-l-c-root" ref="tBodyx0x0Ref" class="t-l-c-root">
    <micro-app
      name="child-demo"
      iframe
      :data="dataToChild"
      url="http://localhost:5175"
      default-page="/#/about"
      router-mode="pure"
      @datachange="handleChildData"
      style="width: 50%; height: auto;position: absolute; left: 400px; top: 220px;z-index: 999;pointer-events: auto;">
    </micro-app>
    <t-button id="t-button-84e0.2da414f7a" ref="tButtonx0x0Ref"
      class="root-t-button-0-0" :label="tButtonx0x0ComputedData.label" :round="tButtonx0x0ComputedData.round"
      :plain="tButtonx0x0ComputedData.plain" :disabled="tButtonx0x0ComputedData.disabled"
      :type="tButtonx0x0ComputedData.type" :size="tButtonx0x0ComputedData.size"
      :native-type="tButtonx0x0ComputedData.native - type" :c-style="tButtonx0x0ComputedData.cStyle"
      @click="onclick1776673119545"></t-button>

    <t-component v-if="state.isShowMain === true && componentState.tComponentx0x1Visible"
      id="t-component-5c0a.650199354" ref="tComponentx0x1Ref" class="root-t-component-0-1"
      :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle"
      :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName"></t-component>

    <!-- ===== 基座弹窗（供子应用通过 RPC callBase('showDialog', ...) 触发）===== -->
    <!--
      关键点：
      1. 用项目里现成的 t-dialog（已在 main.js 全局注册）
      2. 弹窗内容通过 :is 动态组件渲染 —— 子应用传组件名，这里查全局组件表
      3. 弹窗渲染在 #t-l-c-root 容器内，本身又是 fixed 全屏定位，能覆盖整个浏览器
      4. 弹窗内组件 emit('close', data) 即可关弹窗 + 把 data 回传给子应用
    -->
    <t-dialog
      v-if="dialog.visible"
      :dialog-visible="dialog.visible"
      :title="dialog.title"
      :dialog-maximized="true"
      :hidden-scale-button="true"
      :max-position="dialog.maxPosition"
      :min-position="dialog.minPosition"
      :c-style="dialogCStyle"
      mount-to="#t-l-c-root"
      @cancel="closeDialog(null)"
      @close="closeDialog(null)"
    >
      <!-- t-dialog 的内容区：渲染子应用指定的组件 -->
      <component
        v-if="dialog.componentName"
        :is="dialog.componentName"
        v-bind="dialog.props"
        @close="closeDialog"
      />
    </t-dialog>
  </div>
</template>

<script>
import io from 'socket.io-client';
import _ from 'lodash';
import {
  reactive, ref, computed, watch, watchEffect,
  onMounted, onUnmounted, onBeforeMount, onBeforeUnmount,
  provide, inject, toRefs, toRef, nextTick, isRef,
  shallowRef, shallowReactive, triggerRef,
  h, createVNode, createElementBlock, openBlock,
  withCtx, withDirectives, withModifiers,
  resolveComponent, defineAsyncComponent,
  markRaw, toRaw, toDisplayString, createElementVNode,
} from 'vue';
import { useRoute } from 'vue-router';
import http from '@/http.js';
import { ComponentLoader, watchComponentVisible, generateCacheKey, requestApi, ResourceLoader, replaceCssVariables, getUrlParam, getQueryParam, guid, runAnimation, setPageScale, mountDynamicComponent, loadInitialApis, fetchApiData, getDataValue, applyFilter, filterData, convertCharacter } from '@/utils.js';
import { themes } from '@/theme.js';
import * as echarts from 'echarts';
import { TButton, TComponent } from '@ths/design';
import { useChildBridge } from '@/bridge.js';

export default {
  components: {
    TButton,
    TComponent,
  },
  setup() {
    const componentPropBindingMap = { "body": { "attributeName": "tBodyx0x0" }, "t-button-84e0.2da414f7a": { "attributeName": "tButtonx0x0", "label": { "filters": [] }, "round": { "filters": [] }, "plain": { "filters": [] }, "disabled": { "filters": [] }, "type": { "filters": [] }, "size": { "filters": [] }, "native-type": { "filters": [] }, "cStyle": { "filters": [] } }, "t-component-5c0a.650199354": { "attributeName": "tComponentx0x1", "name": { "filters": [] }, "cStyle": { "filters": [] }, "src": { "filters": [] }, "componentName": { "filters": [] } } };
    // 页面内注入全局变量和事件
    const rootData = inject('root');
    const global = reactive({
      ...toRefs(rootData)
    });

    // ============================================================
    //  子应用 → 基座：通信桥（封装在 @/bridge.js）
    //  - dataToChild：传给 <micro-app :data="dataToChild">，基座→子应用
    //  - handleChildData：挂到 <micro-app @datachange>，处理子应用 dispatch
    //  - 自动支持 RPC（type: '__CALL_BASE__'），fallback 到 window[method]
    //  - 需要给子应用注册基座方法时：registerMethod('xxx', fn)
    //  - 需要监听子应用普通消息时：registerHandler('form-submit', payload => {...})
    // ============================================================
    const { dataToChild, handleChildData, setData: setChildData, registerMethod, registerHandler } = useChildBridge('child-demo');

    // ===== 通道②：监听子应用 sendToBase 发来的普通消息 =====
    registerHandler('form-submit', (payload) => {
      console.log('[基座] 收到子应用 form-submit:', payload);
      alert('[基座] 收到表单：' + JSON.stringify(payload));
    });
    registerHandler('log', (payload) => {
      console.log('[基座] 子应用日志:', ...(Array.isArray(payload) ? payload : [payload]));
    });

    // ===== 通道②：RPC 方法 =====
    registerMethod('getUrlQueryString', (msg) => {
      console.log('[基座] 子应用调用 getUrlQueryString:', msg);
      // 演示返回当前页面 URL 的查询字符串
      return window.location.search;
    });
    registerMethod('navigate', (path) => {
      console.log('[基座] 子应用请求导航:', path);
      // 这里换成你的真实路由跳转逻辑，例如 router.push(path)
      alert('[基座] 子应用想跳转到：' + path);
    });
    
    const pageFuncTest = (param) => {
      console.log('demo1页面方法测试', 'demo1');
      return 'demo1页面方法测试成功';
    };

    registerMethod('pageFuncTest', pageFuncTest);
    

    // ===== 弹窗 RPC：子应用 await callBase('showDialog', {...}) =====
    const dialog = reactive({
      visible: false,
      componentName: null,  // 要渲染的全局组件名
      title: '',
      props: {},            // 透传给组件的 props
      resolver: null,       // 关弹窗时 resolve 这个 Promise，回传给子应用
      maxPosition: {
        width: '600px', height: '400px',
        left: 'calc(50% - 300px)', top: 'calc(50% - 200px)',
      },
      minPosition: {
        width: '400px', height: '300px',
        left: 'calc(50% - 200px)', top: 'calc(50% - 150px)',
      },
    });

    const dialogCStyle = {
      wrapper: {
        default: {
          backgroundColor: 'var(--business-dialog-bg, #fff)',
          borderTopLeftRadius: '16px', borderTopRightRadius: '16px',
          borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px',
          overflow: 'hidden', zIndex: 9999,
        },
      },
    };

    registerMethod('showDialog', (config) => {
      // config: { componentName, title?, props?, width?, height? }
      dialog.componentName = config?.componentName;
      dialog.title = config?.title || '';
      dialog.props = config?.props || {};
      if (config?.width || config?.height) {
        const w = config.width || '600px';
        const h = config.height || '400px';
        const wNum = Number(w.replace('px', '')) || 600;
        const hNum = Number(h.replace('px', '')) || 400;
        dialog.maxPosition = {
          width: w, height: h,
          left: `calc(50% - ${wNum / 2}px)`,
          top: `calc(50% - ${hNum / 2}px)`,
        };
      }
      dialog.visible = true;

      // 返回 Promise —— 子应用 await 拿到关闭时的结果
      return new Promise((resolve) => {
        dialog.resolver = resolve;
      });
    });

    /**
     * 子应用调用地图 TMap API 的桥梁
     *
     * 子应用侧 ths-map.js 用 Proxy 把所有 TMap.xxx() 转发到这里，
     * 基座通过 postMessage 发给地图 iframe 执行真实 TMap。
     *
     * 子应用写法：
     *   TMap.goTo({ center: { x: 114, y: 26 } })
     *   → 基座 postMessage → iframe地图 → 执行 realTMap.goTo(...)
     *   → iframe postMessage 回传结果 → 基座 resolve
     *
     * ⚠️ 前提：地图 iframe 页面需要加入 postMessage 监听器，
     *    见 waitForTMapInIframe() 函数下方的注释说明。
     */
    registerMethod('tmapCall', ({ method, params }) => {
      console.log(111, '收到子应用的 TMap 调用请求', method, params);
      const tIframeEl = document.getElementById('t-iframe-893f.c77f5f17d');
      if (!tIframeEl) return Promise.reject('未找到地图容器 t-iframe-893f.c77f5f17d');

      const iframeEl = tIframeEl.querySelector('iframe');
      if (!iframeEl) return Promise.reject('t-iframe 内未找到 iframe');

      return new Promise((resolve, reject) => {
        const requestId = `tmap_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

        // 监听 iframe 返回的结果
        const handler = (event) => {
          // 限制来源（换成实际的 iframe 地图来源）
          // if (event.origin !== 'http://localhost:4000') return;

          const data = event.data;
          if (data?.type === 'tmapResponse' && data.requestId === requestId) {
            window.removeEventListener('message', handler);
            const timeout = setTimeout(() => {}, 0);
            clearTimeout(timeout);
            if (data.error) {
              reject(data.error);
            } else {
              resolve(data.result);
            }
          }
        };
        window.addEventListener('message', handler);

        // 超时保护
        setTimeout(() => {
          window.removeEventListener('message', handler);
          reject(`TMap.${method} 调用超时（iframe 未回复）`);
        }, 10000);

        // 通过 postMessage 发给地图 iframe
        try {
          
          iframeEl.contentWindow.TMap[method](params[0])
          // iframeEl.contentWindow.postMessage(
          //   { type: 'tmapCall', requestId, method, params },
          //   '*',  // 可改为具体 origin 如 'http://localhost:4000'
          // );
        } catch (e) {
          window.removeEventListener('message', handler);
          reject('postMessage 发送失败: ' + e.message);
        }
      });
    });

    // 收到子应用的 tmapCall 后 → postMessage 转发给地图 iframe
    // 地图 iframe 那边需要有这段监听代码：

    // ══════════════════════════════════════════════════════════
    // 以下代码需要放到地图 html 页面中（地图 iframe 加载的页面）：
    //
    // window.addEventListener('message', async (event) => {
    //   const data = event.data;
    //   if (!data || data.type !== 'tmapCall' || !data.requestId) return;
    //
    //   try {
    //     const TMap = window.TMap;   // 或 yourMapInstance.TMap
    //     if (typeof TMap?.[data.method] !== 'function') {
    //       throw new Error(`TMap.${data.method} 不是函数`);
    //     }
    //     const result = await TMap[data.method](...(data.params || []));
    //     event.source.postMessage(
    //       { type: 'tmapResponse', requestId: data.requestId, result },
    //       event.origin,
    //     );
    //   } catch (err) {
    //     event.source.postMessage(
    //       { type: 'tmapResponse', requestId: data.requestId, error: err.message },
    //       event.origin,
    //     );
    //   }
    // });
    //
    // ══════════════════════════════════════════════════════════

    // 关弹窗：如果有 result 就回传（子应用 emit('close', data) 触发）
    function closeDialog(result) {
      if (dialog.resolver) {
        dialog.resolver(result ?? null);
        dialog.resolver = null;
      }
      dialog.visible = false;
      dialog.componentName = null;
      dialog.props = {};
    }

    // 路由
    const route = useRoute();
    // 创建 DOM 引用

    const tBodyx0x0Ref = ref(null);
    const tButtonx0x0Ref = ref(null);
    const tComponentx0x1Ref = ref(null);
    // 当前页面使用的变量
    const state = reactive({
      screenSize: "",
      isShowMain: true,
    });
    // 把 state 同步给 bridge 的 data，方便传给子应用
    watch(state, (val) => { setChildData(val); }, { immediate: true, deep: true });
    // 选中的图表主题
    const activeChartTheme = computed(() => {
      let activeTheme = _.cloneDeep(themes.find((item) => item.name === global.activeTheme));
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
    const componentState = reactive({
      tButtonx0x0: {
        defaultStyle: {
          default: { "width": "70px", "height": "36px", "background": "var(--t-brand8)", "border": "auto !important", "borderTop": "1px Solid var(--t-brand8)", "borderLeft": "1px Solid var(--t-brand8)", "borderBottom": "1px Solid var(--t-brand8)", "borderRight": "1px Solid var(--t-brand8)", "display": "none", "borderTopLeftRadius": "4px", "borderTopRightRadius": "4px", "borderBottomRightRadius": "4px", "borderBottomLeftRadius": "4px", "position": "unset", "left": "1843px", "top": "4px" },

        },
        default: {

          label: "测试按钮",
          round: false,
          plain: false,
          disabled: false,
          type: "primary",
          size: "medium",
          'native-type': "button",
          cStyle: { "wrapper": { "default": { "width": "70px", "height": "36px", "background": "var(--t-brand8)", "border": "auto !important", "borderTop": "1px Solid var(--t-brand8)", "borderLeft": "1px Solid var(--t-brand8)", "borderBottom": "1px Solid var(--t-brand8)", "borderRight": "1px Solid var(--t-brand8)", "borderTopLeftRadius": "4px", "borderTopRightRadius": "4px", "borderBottomRightRadius": "4px", "borderBottomLeftRadius": "4px", "position": "unset", "left": "1843px", "top": "4px" }, "hover": { "background": "var(--t-brand8)", "border": "auto !important", "borderTop": "1px Solid var(--t-brand8)", "borderLeft": "1px Solid var(--t-brand8)", "borderBottom": "1px Solid var(--t-brand8)", "borderRight": "1px Solid var(--t-brand8)" }, "active": { "background": "rgb(0,52,181)", "border": "auto !important", "borderTop": "1px Solid rgb(0,52,181)", "borderLeft": "1px Solid rgb(0,52,181)", "borderBottom": "1px Solid rgb(0,52,181)", "borderRight": "1px Solid rgb(0,52,181)" }, "disabled": { "background": "#699EF5", "border": "unset !important", "borderTop": "1px Solid rgb(0,52,181)", "borderLeft": "1px Solid rgb(0,52,181)", "borderBottom": "1px Solid rgb(0,52,181)", "borderRight": "1px Solid rgb(0,52,181)" } }, "text": { "default": { "textAlign": "center", "fontFamily": "思源", "fontWeight": "400", "fontSize": "12px", "letterSpacing": "0px", "lineHeight": "12px", "color": "rgba(255, 252, 255, 1)", "background": "unset", "backgroundClip": "unset", "display": "block !important", "width": "100%", "height": "auto", "whiteSpace": "nowrap", "textOverflow": "ellipsis", "overflow": "hidden" }, "active": { "textAlign": "center", "fontFamily": "思源", "fontWeight": "400", "fontSize": "12px", "letterSpacing": "0px", "lineHeight": "12px", "color": "rgba(255, 252, 255, 0.9)", "background": "unset", "backgroundClip": "unset" }, "hover": { "textAlign": "center", "fontFamily": "思源", "fontWeight": "400", "fontSize": "12px", "letterSpacing": "0px", "lineHeight": "12px", "color": "rgba(255, 252, 255, 0.9)", "background": "unset", "backgroundClip": "unset" }, "disabled": { "textAlign": "center", "fontFamily": "思源", "fontWeight": "400", "fontSize": "12px", "letterSpacing": "0px", "lineHeight": "12px", "color": "rgba(255, 252, 255, 1)", "background": "unset", "backgroundClip": "unset" } } },
        },
      },
      tButtonx0x0Visible: computed(() => ["root", "root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
      tComponentx0x1: {
        defaultStyle: {
          default: { "width": "1920px", "height": "1080px", "margin": "0 auto", "backgroundColor": "rgba(255, 255, 255, 0)", "position": "unset", "left": "0px", "top": "1px", "overflow": "hidden" },

        },
        default: {

          name: "mainContainerComponent",
          cStyle: { "wrapper": { "default": { "width": "1920px", "height": "1080px", "margin": "0 auto", "backgroundColor": "rgba(255, 255, 255, 0)", "position": "unset", "left": "0px", "top": "1px", "overflow": "hidden" } } },
          src: "/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4/index.html#/mainContainer",
          componentName: "mainContainerComponent",
        },
      },
      tComponentx0x1Visible: computed(() => ["root", "root"].reduce((x, y) => route.path.includes(y) || x, false) ? true : false),
    });
    const getQueryString = (name) => {
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
      const r = window.location.search.substring(1).match(reg);
      if (r != null) return decodeURI(r[2]);
      return null;
    };
    const setTheme = () => {
      // 获取url的skin
      let skin = getQueryString('skin');

      //设置大屏主题风格变量
      let pageThemeMapping = {
        'green': '绿色版',
        'blue': '蓝色版',
        'pc-light': 'AI浅色版2',
      };

      // 修改全局变量-主题
      if (pageThemeMapping[skin]) {
        // rootData.rootEmit(
        //   // 固定的消息名称，不能修改
        //   'rootData:change',
        //   { 
        //     // 全局变量的键名
        //     key:'activeTheme',
        //     // 将要修改的全局变量的键值
        //     value: pageThemeMapping[skin],
        //   },
        // );
        global.activeTheme = pageThemeMapping[skin];
      }

      // 修改body的class主题名称
      document.body.className = global.activeTheme;
      // 选中的主题存到缓存里
      localStorage.setItem('lxtTheme', global.activeTheme);
      // 选中的主题存到缓存里
      if (!skin) {
        Object.keys(pageThemeMapping).forEach((key) => {
          if (pageThemeMapping[key] === global.activeTheme) {
            skin = key;
          }
        })
      }
      localStorage.setItem('lxtThemeCode', skin);

    };
    const setRegion = () => {
      // 获取url地址上的regionCode值
      const REGION_CODE = getQueryString('thsDefaultRegionCode');

      // console.log(REGION_CODE, 'lego-测试获取url地址REGION_CODE')

      if (REGION_CODE) {
        // 如果地址上有REGION_CODE值，那就赋给全局变量
        rootData.rootEmit(
          'rootData:change',
          {
            key: 'regionaQuery.defaultRegionCode',
            value: REGION_CODE,
          },
        );

        rootData.rootEmit(
          'rootData:change',
          {
            key: 'regionaQuery.regionCode',
            value: REGION_CODE,
          },
        );
      }

    };
    const setLocalStorage = () => {
      // 房间号存到缓存里
      localStorage.setItem('lxtSocketRoom', global.socketRoom);
      // lego的全局变量存到缓存里
      let g = {};
      Object.keys(global).forEach((k) => {
        if (typeof global[k] !== 'function' && k !== 'socketMessages' && k !== 'rootSocket') {
          g[k] = global[k];
        }
      });
      localStorage.setItem('lxtGlobal', JSON.stringify(g));
    };
    const setHeadAlign = () => {
      // 获取url的head
      let head = getQueryString('head');

      if (head) {
        global.headAlign = head;
      }

    };
    const setIsShowSubjectCheckbox = () => {
      /**
       * 根据全局变量isShowSubjectCheckbox更新本地存储中对应的key值
       */
      localStorage.setItem('isShowSubjectCheckbox', global.isShowSubjectCheckbox);
    };
    const setDomStyle = () => {
      /**
       * 1、设置时间选择器样式（目前看全局的都有问题，所以选择通过js加上样式）
       * 2、修改表格固定列样式
       */
      const styleDom = document.createElement('style');
      // 解决选择小时面板被遮挡的问题
      styleDom.innerHTML = `
   .el-time-panel {
      left: -22px !important;
   }
   .el-table__fixed::before,
   .el-table__fixed-right::before {
      background: rgba(0,0,0,0) !important;
   }
   /* 时间选择器-小时选择按钮字体颜色 */
   .el-picker-panel__body-wrapper .el-time-panel .el-time-panel__footer .el-time-panel__btn{
      color:#FFFFFF!important;
   }
   .el-picker-panel__body-wrapper .el-time-panel .el-time-panel__footer .el-time-panel__btn:hover{
      color: var(--business-theme)!important;
   }

   .overflow-ellipsis {
      display: inline-block !important;
   }

   /* 区间时间选择器-头部字号、操作按钮 */
   .el-date-range-picker__content .el-date-range-picker__header div {
      font-size: var(--business-text-size-16) !important;
   }
   .t-date-picker .el-picker-panel__body-wrapper .el-time-panel .el-time-panel__footer .el-time-panel__btn {
      color: var(--business-white) !important;
   }

   .t-date-picker .el-picker-panel__body-wrapper .el-time-panel .el-time-panel__footer .el-time-panel__btn:hover {
      color: var(--business-theme) !important;
   }

   /* 区域选择器-弹窗标题字号 */
   .t-area-selector-custom-data .area-box .area-title .title-text {
      font-size: var(--business-text-size-18) !important;
   }

   /* 单项选择器-默认状态下-设置超出... */
   .t-select .el-select .el-input .el-input__inner {
      overflow: hidden;
      text-overflow: ellipsis;
   }

  `;
      document.head.appendChild(styleDom);
    };
    const isLoginByCas = () => {
      const queryToken = getQueryString('npToken');
      const queryUserName = getQueryString('userName');
      const queryUserId = getQueryString('userId');
      const queryloginName = getQueryString('loginName');

      if (queryToken) {
        localStorage.setItem('token', queryToken);
        sessionStorage.setItem('userToken', queryToken);
        localStorage.setItem('lastUserName', queryUserName);
        localStorage.setItem('lastLoginName', queryloginName);
        localStorage.setItem('lastUserId', queryUserId);
      }

      /* cas登录 */
      const token = localStorage.getItem('token');
      const userToken = sessionStorage.getItem('userToken');
      // 获取url的casUt
      const casUt = getQueryString('casut');
      // 说明已经登陆
      if (token && userToken) {
        // console.log('已经登录了');
        // 显示主体内容
        state.isShowMain = true;
        // 测试用--------开始
        // global.regionaQuery.regionCode = global.regionaQuery.defaultRegionCode;
        // global.regionaQuery.regionName = global.regionaQuery.defaultRegionName;
        // global.regionaQuery.defaultRegionType = getRegionLevel(global.regionaQuery.defaultRegionCode);

        // global.regionaQuery.regionCode = '440604000000';
        // global.regionaQuery.regionName = '禅城区';
        // global.regionaQuery.defaultRegionCode = '440604000000';
        // global.regionaQuery.defaultRegionName = '禅城区';
        // global.regionaQuery.defaultRegionType = 'county';

        // global.regionaQuery.regionCode = '440604010000';
        // global.regionaQuery.regionName = '石湾镇街道';
        // global.regionaQuery.defaultRegionCode = '440604010000';
        // global.regionaQuery.defaultRegionName = '石湾镇街道';
        // global.regionaQuery.defaultRegionType = 'street';
        // // 测试用----------结束

        // 已经登陆，从缓存里拿到用户行政区code、name，然后更新对应全局变量的默认值
        // const userRegionCode = localStorage.getItem('defaultRegionCode');
        // const userRegionName = localStorage.getItem('defaultRegionName');
        // if (userRegionCode && userRegionName) {
        //   global.regionaQuery.regionCode = userRegionCode;
        //   global.regionaQuery.regionName = userRegionName;
        //   global.regionaQuery.defaultRegionCode = userRegionCode;
        //   global.regionaQuery.defaultRegionName = userRegionName;
        //   global.regionaQuery.defaultRegionType = getRegionLevel(userRegionCode || '');
        //   global.regionaQuery.paramsRegionType = getRegionLevel(userRegionCode || '');
        //   global.regionaQuery.businessRegionName = global.regionaQuery.paramsRegionType === 'province' ? '佛山市' : userRegionName;
        //   localStorage.setItem('regionCode', userRegionCode);
        // }
      } else if (casUt) {
        // 如果url上面有casUt
        apiRegistry.getUserInfo.request(casUt);
      } else {
        window.location.href = global.casLoginHost + window.encodeURIComponent(global.casLoginParams + window.location.href);
      }

      /* 直接使用某员工的账号登录（测试时作扫描会用上） */
      // 显示主体内容
      // state.isShowMain = true;
      // 第二个参数值为某员工的用户ID
      // localStorage.setItem('lastUserId', '024EC281-E106-496A-B43B-6DE72984DEDA');


    };
    const setDefaultValueFromUrl = () => {
      const switchType = getQueryString('switchType');
      const pointValue = getQueryString('pointValue');
      let regionName = getQueryString('regionName');
      console.log(switchType, pointValue, 7776)
      // 若地址栏里传了需要切换的区域
      if (pointValue && switchType === 'regionChange') {
        global.regionaQuery.regionCode = pointValue.padEnd(12, '0');
        global.regionaQuery.businessRegionName = regionName;
      }

    };
    const tempTestSokcet = () => {
      // rootData.rootSocket.emit(
      //   'message',  // 固定的消息名称，不能修改
      //   {
      //     room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      //     type: 'runInteractive',  // 消息类型名称
      //     data: [
      //     {
      //         "shareCode": "showLegoDialog",
      //         "runtimeValue": "true"
      //     },
      //     {
      //         "code": "dialogName",
      //         "shareCode": "dialogName",
      //         "runtimeValue": "waterDialogFractureSurfaceComponent"
      //     },
      //     {
      //         "code": "dialogParmas",
      //         "shareCode": "dialogParmas",
      //         "runtimeValue": {
      //             "monitorTime": "2025-10",
      //             "assessType": "monthly",
      //             "pointCode": "3507000043",
      //             "showSource": true,
      //             "sourceType": "samplePlot"
      //         }
      //     }
      // ]
      //   }
      // );


      rootData.rootSocket.emit(
        'message',  // 固定的消息名称，不能修改
        {
          room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
          type: 'runInteractive',  // 消息类型名称
          data: [
            {
              "shareCode": "showLegoDialog",
              "runtimeValue": "true"
            },
            {
              "code": "dialogName",
              "shareCode": "dialogName",
              "runtimeValue": "waterDialogFractureSurfaceComponent"
            },
            {

              "code": "dialogParmas",
              "shareCode": "dialogParmas",
              "runtimeValue": {
                "monitorTime": "",
                "assessType": "",
                "sourceType": "samplePlot",
                "point_code": "350722070001",
                "year": "2025",
                "longitude": "118.54297",
                "latitude": "27.91978",
                "create_time": "2025-06-10",
                "TYPE": "CITY"
              }
            }
          ]
        }
      );
    };
    const reRenderRightContainerTable = () => {
      // 获取右屏容器下的表格
      const tableEles = document.querySelectorAll('#t-l-c-rightContainer .t-table');
      // 遍历并修改每个元素的 display 样式，目的是重新渲染一下表格
      tableEles.forEach(table => {
        table.style.display = 'none';
        setTimeout(() => {
          table.style.display = 'block';
        }, 100);
      });
    };
    const onclick1776673119545 = () => {
      state.isShowMain = !state.isShowMain;
      // 执行自定义方法
      // tempTestSokcet();
    }; let apiRegistry = {};

    // 添加接口数据管理
    const apiDataMap = reactive({});
    // 接口数据缓存
    const apiDataCache = reactive({});

    // 接口注册表
    apiRegistry = {
      // 接口函数
      getUserInfo: {
        funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"casut","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"8YD0GT3aM2"}]', // 参数选项 用于请求接口调用函数时使用
        autoLoad: false, // 自动请求
        bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
        config: { "url": "/cas/security/usertoken", "method": "get", "baseURL": "global.serviceBaseUrl", "params": { "casut": "this.casut" } },
        request: function (casut, componentId) {
          return new Promise((resolve, reject) => {

            http({ "url": "/cas/security/usertoken", "method": "get", "baseURL": global.serviceBaseUrl, "params": { "casut": casut }, }).then((res) => {

              // 成功的操作
              const cacheKey = generateCacheKey('global.serviceBaseUrl-/cas/security/usertoken', { "casut": casut });

              apiDataMap[cacheKey] = res.data;
              apiDataMap['getUserInfo'] = res.data;

              // console.log(res, '测试用户登录信息')
              const goToUrl = window.location.href;
              if (res.status === 200 && res.data.status === '1') {
                // 用户信息
                const { user, userToken } = res.data;
                console.log(user, '用户信息')
                // 是否禁用区域选择中的自定义区域中的操作按钮 （角色包括 LXT_ROLE_AREAQUERY_EDIT 就禁用）
                global.regionaQuery.isDisableCustom = user.roleCode.indexOf('LXT_ROLE_AREAQUERY_EDIT') !== -1;
                // console.log(user.userId, 'user.userId')
                // 存储用户信息数据到store里
                localStorage.setItem('token', userToken);
                localStorage.setItem('lastUserName', user.userName);
                localStorage.setItem('lastLoginName', user.loginName);
                localStorage.setItem('lastUserId', user.userId);
                localStorage.setItem('userStyle', user.userStyle);
                sessionStorage.setItem('userToken', userToken);
                // localStorage.setItem('defaultRegionCode', user.regionCode);
                // localStorage.setItem('defaultRegionName', user.regionName);

                // 测试用--------开始 440604010000 
                // global.regionaQuery.regionCode = '440604000000';
                // global.regionaQuery.regionName = '禅城区';
                // global.regionaQuery.defaultRegionCode = '440604000000';
                // global.regionaQuery.defaultRegionName = '禅城区';

                // global.regionaQuery.regionCode = '440604010000';
                // global.regionaQuery.regionName = '石湾镇街道';
                // global.regionaQuery.defaultRegionCode = '440604010000';
                // global.regionaQuery.defaultRegionName = '石湾镇街道';
                // 测试用----------结束

                // global.regionaQuery.regionCode = user.regionCode;
                // global.regionaQuery.regionName = user.regionName;
                // global.regionaQuery.defaultRegionCode = user.regionCode;
                // global.regionaQuery.defaultRegionName = user.regionName;
                global.regionaQuery.defaultRegionType = getRegionLevel(global.regionaQuery.defaultRegionCode);
                global.regionaQuery.paramsRegionType = getRegionLevel(global.regionaQuery.regionCode);
                // global.regionaQuery.businessRegionName = global.regionaQuery.paramsRegionType === 'province' ? '南平市' : user.regionName;
                localStorage.setItem('regionCode', global.regionaQuery.defaultRegionCode);

                // 显示主体内容
                state.isShowMain = true;
              } else {
                // 清除缓存中的token值
                localStorage.removeItem('token');
                sessionStorage.removeItem('userToken');
                // 跳到登录页
                window.location.href = `${global.casLoginUrl}?gotourl=${goToUrl}`;
              }
              resolve(_.get(res, "data"));
            }).catch((error) => {
              // 失败的操作
              // 清除缓存中的token值
              localStorage.removeItem('token');
              sessionStorage.removeItem('userToken');
              // 跳到登录页
              window.location.href = global.casLoginUrl;
              reject(error);
            });
          });
        },
      },
    };
    function handleWindowResize() {
      setPageScale('t-l-c-root', global.appScaleMode, 'width');

      // 获取窗口的宽度和高度
      var windowWidth = window.innerWidth;

    }
    // 执行自定义方法
    isLoginByCas();
    // 执行自定义方法
    rootData.setSocketRoomId();
    // 执行自定义方法
    setDefaultValueFromUrl();
    // 执行自定义方法
    setTheme();
    // 执行自定义方法
    setRegion();
    // 执行自定义方法
    setHeadAlign();
    // 执行自定义方法
    setLocalStorage();
    // 执行自定义方法
    setIsShowSubjectCheckbox();
    // 执行自定义方法
    setDomStyle();
    /* 接收socket.io消息 */
    const onSocketChangeb76024377ab34b0dabc9 = function (data) {
      if (data.type === "changeFontSize") {
        try {
          // 执行自定义方法
          reRenderRightContainerTable();
        } catch (error) {
          console.error('参数格式错误', error);
        };
      };
    }; rootData.rootOn('rootSocket:change', onSocketChangeb76024377ab34b0dabc9); onUnmounted(() => {
      rootData.rootOff('rootSocket:change', onSocketChangeb76024377ab34b0dabc9);
    });
    onMounted(() => {
      setPageScale('t-l-c-root', global.appScaleMode, 'width');
      window.addEventListener('resize', handleWindowResize);
      handleWindowResize();
    });
    // 页面离开时的操作
    onUnmounted(() => {
      // 移除监听事件
      window.removeEventListener('resize', handleWindowResize);
    });
    const tButtonx0x0ComputedData = computed(() => _.merge({}, componentState.tButtonx0x0.default, componentState.tButtonx0x0?.[state.screenSize]));

    const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

    if (apiRegistry && Object.keys(apiRegistry).length) {
      // 加载初始接口
      loadInitialApis(apiRegistry, apiDataCache, componentState, componentPropBindingMap, function (cacheKey, data, apiName) {
        // 更新缓存
        apiDataCache[cacheKey] = data;
        apiDataMap[apiName] = data;
      });

      /* 监听组件可视变化，获取组件绑定的接口数据 */
      watchComponentVisible(apiRegistry, apiDataCache, componentState, componentPropBindingMap, function (cacheKey, data, apiName) {
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
      dataToChild,
      handleChildData,
      state,
      componentState,
      tButtonx0x0ComputedData,
      tComponentx0x1ComputedData,
      tBodyx0x0Ref,
      tButtonx0x0Ref,
      tComponentx0x1Ref,
      onclick1776673119545,
      dialog,
      dialogCStyle,
      closeDialog,
    };
  },
}
</script>

<style scoped>
.t-l-c-root {
  position: relative;
  overflow: hidden;
  --theme-color: var(--t-brand8);
  --theme-color-opacity-10: rgba(var(--t-brand8), .1);
  --theme-color-opacity-15: rgba(var(--t-brand8), .15);
  --theme-color-opacity-40: rgba(var(--t-brand8), .4);
  --theme-color-opacity-60: rgba(var(--t-brand8), .6);
  --theme-color-opacity-80: rgba(var(--t-brand8), .8);
  --theme-color-opacity-90: rgba(var(--t-brand8), .9);
  pointer-events: none;
  position: Fixed;
  z-index: 1000;
  filter: ;
  width: 1920px;
  height: 1080px;
  background-color: rgba(255, 0, 0, 0);
}

.t-l-c-root .root-t-button-0-0 {
  position: absolute !important;
  top: 4px;
  left: 1843px;
  width: 70px;
  height: 36px;
  pointer-events: auto;
  z-index: 1001;
}

.t-l-c-root .root-t-component-0-1 {
  position: absolute !important;
  top: 1px;
  left: 0px;
  width: 1920px;
  height: 1080px;
  pointer-events: auto;
}
</style>
