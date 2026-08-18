<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║ 微前端调试基座 — 演示基座 ↔ 子应用 三大通信通道
  ║
  ║ ━━━━ 通道 ① 基座 → 子应用 定向数据（baseData）━━━━
  ║
  ║ 基座侧两种等价写法（任选其一，看场景）：
  ║   const { data, setData, dataToChild } = useChildBridge('child');
  ║
  ║   // 写法 A：直接赋值 —— 适合改单字段
  ║   data.userName = '张三';
  ║   data.theme = 'dark';
  ║
  ║   // 写法 B：setData 批量推送 —— 适合一次推多字段 / 在 watch 回调里
  ║   setData({ userName: '张三', theme: 'dark', token: 'xxx' });
  ║
  ║   // 配合 watch 全量同步整个 state：
  ║   watch(state, val => setData(val), { deep: true, immediate: true });
  ║
  ║ 模板里：<micro-app :data="dataToChild" />（dataToChild 是 computed）
  ║
  ║ 子应用侧：const { baseData } = useBaseBridge();
  ║          baseData.userName / baseData.theme 直接读，响应式
  ║
  ║ ━━━━ 通道 ② 子应用 → 基座（dispatch / RPC）━━━━
  ║   基座侧：registerHandler('xxx', payload => {...})       接收无返回值
  ║          registerMethod('xxx', (...args) => result)     RPC 有返回值
  ║   子应用：sendToBase({ type: 'xxx', ...payload })       发无返回值
  ║          const r = await callBase('xxx', ...args)       RPC 等返回值
  ║
  ║ ━━━━ 通道 ③ 全局共享数据（globalData）━━━━
  ║   const { globalData, setGlobalData } = useGlobalData();
  ║   基座和所有子应用共用一份，任意一方写入大家都收到
  ╚══════════════════════════════════════════════════════════════╝
-->
<template>
  <div class="base-root">
    <!-- 顶部栏：演示数据下发 -->
    <header class="header">
      <div class="header-title">
        <h2>🌱 微前端调试基座</h2>
        <span class="badge">仅开发调试用</span>
      </div>
      <div class="header-actions">
        <span class="info-label">
          用户：<strong>{{ dataToChild.userName }}</strong>
        </span>
        <el-button size="small" @click="changeUser">切换用户</el-button>
        <span class="info-label" style="margin-left: 16px;">
          主题：<strong>{{ dataToChild.theme }}</strong>
        </span>
        <el-button size="small" @click="toggleTheme">切换主题</el-button>
        <el-button size="small" type="primary" plain @click="batchUpdate">
          批量 setData 推送
        </el-button>
      </div>
    </header>

    <!-- 全局变量监视器：实时反映 microApp.globalData 中的字段 -->
    <section class="global-monitor">
      <div class="monitor-title">
        🔬 全局变量监视器（globalData） ──
        子应用通过 <code>microApp.setGlobalData()</code> 修改时这里会实时更新
      </div>
      <div class="monitor-grid">
        <div class="monitor-cell">
          <span class="key">regionaQuery.regionName</span>
          <strong>{{ regionName ?? '—' }}</strong>
        </div>
        <div class="monitor-cell">
          <span class="key">regionaQuery.regionCode</span>
          <strong>{{ regionCode ?? '—' }}</strong>
        </div>
        <div class="monitor-cell">
          <span class="key">activeTheme</span>
          <strong>{{ activeTheme ?? '—' }}</strong>
        </div>
        <div class="monitor-cell">
          <span class="key">socketRoom</span>
          <strong>{{ socketRoom ?? '—' }}</strong>
        </div>
        <div class="monitor-cell">
          <span class="key">appId</span>
          <strong>{{ appId ?? '—' }}</strong>
        </div>
        <div class="monitor-cell">
          <span class="key">serviceBaseUrl</span>
          <strong style="font-size: 11px;">{{ serviceBaseUrl ?? '—' }}</strong>
        </div>
      </div>
    </section>

    <!-- 基座地图：@ready 后把 mapRef 通过 :data 下发给微应用（tmap-base demo 用） -->
    <!-- 默认收起，避免挤压微应用可视区；测 tmap-base 时点「展开」加载地图 -->
    <section class="base-map-area">
      <div class="section-title">
        <span>🗺️ 基座地图 —— <code>mapRef</code> 经 <code>:data</code> 下发给微应用（tmap-base demo 用）</span>
        <el-button size="small" text @click="baseMapVisible = !baseMapVisible">
          {{ baseMapVisible ? '收起 ▲' : '展开 ▼' }}
        </el-button>
      </div>
      <TGisMap
        v-if="baseMapVisible"
        ref="baseMapRef"
        :map-config="baseMapConfig"
        style="height: 340px"
        @ready="onBaseMapReady"
        @error="onBaseMapErr"
        @destroy="onBaseMapDestroy"
      />
    </section>

    <!-- 微应用容器 -->
    <main class="main-area">
      <micro-app
        name="child"
        iframe
        :data="dataToChild"
        url="http://localhost:5175/"
        @datachange="handleChildData"
      />
    </main>

    <!-- 消息收件箱 -->
    <footer class="inbox">
      <div class="inbox-header">
        <span>📬 子应用消息（通过 dispatch 收到）</span>
        <el-button size="small" type="danger" plain @click="inbox.length = 0">
          清空
        </el-button>
      </div>
      <div class="inbox-body" ref="inboxRef">
        <div v-if="inbox.length === 0" class="inbox-empty">
          暂无消息 —— 在子应用中点「通知基座 / 调用基座方法」即可收到
        </div>
        <div
          v-for="(msg, i) in inbox"
          :key="i"
          class="inbox-item"
        >
          <span class="inbox-time">{{ msg.time }}</span>
          <span class="inbox-tag">{{ msg.type }}</span>
          <code class="inbox-payload">{{ JSON.stringify(msg.payload ?? msg) }}</code>
        </div>
      </div>
    </footer>

    <!-- ===== 弹窗（基座渲染，可覆盖整个浏览器；支持 dialogService 多实例）===== -->
    <!--
      生产：callBase('dialogService', 'open', { component: 'XxxComponent', params })
      调试模板：component 对应 dialogComponents 注册名（如 dialogDemoContentComponent）
      兼容旧：callBase('showDialog', { componentName, props }) 仍可用
    -->
    <el-dialog
      v-for="item in dialogService.dialogs"
      :key="item.id"
      v-model="item.visible"
      :title="item.title || item.id"
      :width="resolveDialogWidth(item)"
      :modal="item.showMask !== false"
      :append-to-body="true"
      draggable
      overflow
      @close="onHostDialogClosed(item.id)"
    >
      <div class="dialog-debug-meta">
        <span>ID: <code>{{ item.id }}</code></span>
        <span>size: <code>{{ item.initialSize }}</code></span>
        <span>mask: <code>{{ item.showMask }}</code></span>
        <span>locked: <code>{{ item.locked }}</code></span>
        <span v-if="item.headerComponent">header: <code>{{ item.headerComponent }}</code></span>
        <span v-if="item.content?.route">route: <code>{{ item.content.route }}</code></span>
      </div>
      <DialogMicroAppContent
        v-if="item.content?.type === 'micro-app'"
        :key="item.microAppInstanceToken"
        :dialog="item"
      />
      <component
        v-else-if="item.component && dialogComponents[item.component]"
        :is="dialogComponents[item.component]"
        v-bind="resolveDialogContentProps(item)"
        @close="(result) => onDialogContentClose(item.id, result)"
      />
      <div v-else-if="item.component" style="color: #f56c6c; font-size: 13px; line-height: 1.6;">
        ⚠️ 未注册的弹窗组件名：<code>{{ item.component }}</code><br>
        请在 base/src/App.vue 的 <code>dialogComponents</code> 里注册。<br>
        生产环境这里应是宿主已有的 LEGO 组件名。
      </div>
      <div v-else style="color: #909399; font-size: 13px;">
        未指定 component。params：
        <pre style="margin-top:8px;white-space:pre-wrap;">{{ JSON.stringify(item.params, null, 2) }}</pre>
      </div>
      <template #footer>
        <span v-if="item.locked" style="float:left;color:#e6a23c;font-size:12px;">已锁定</span>
        <el-button
          v-if="item.showLockButton"
          size="small"
          @click="dialogService.setLocked(item.id, !item.locked)"
        >
          {{ item.locked ? '解锁' : '锁定' }}
        </el-button>
        <el-button
          v-if="item.showSizeButton"
          size="small"
          @click="toggleDialogSize(item)"
        >
          {{ item.initialSize === 'small' ? '放大' : '缩小' }}
        </el-button>
        <el-button size="small" @click="dialogService.close(item.id)">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, computed, nextTick, markRaw } from 'vue';
import { ElButton, ElDialog } from 'element-plus';
import {
  useChildBridge,
  useGlobalData,
  registerSharedChildMethod,
  registerContextualSharedChildMethod,
} from './bridge.js';
import {
  createDialogService,
  createContextualDialogServiceRpcFacade,
} from './dialogService.js';

// 弹窗里要显示的两个示例组件（基座自己定义，子应用按名字调）
import DemoDialogContent from './dialogs/DemoDialogContent.vue';
import DialogMicroAppContent from './dialogs/DialogMicroAppContent.vue';
import RegionPickerDialog from './dialogs/RegionPickerDialog.vue';
// 基座内嵌的真实 <TGisMap>（直连子路径，绕开 @ths/design 主入口拉全组件 + heavy peers）
import TGisMap from '@ths/design/es/components/gis-map/index.js';

// ===== 通道 1+2：定向数据 / dispatch =====
// useChildBridge(name) 按 <micro-app name="child"> 拿独立实例。
// 模板里两端 name 都是 'child'，所以这里也传 'child'。
const { data, setData, dataToChild, handleChildData, registerHandler, registerMethod } = useChildBridge('child');

// ===== 基座地图：<TGisMap> @ready 后把 mapRef 通过 :data 下发给微应用（tmap-base demo 用） =====
const baseMapRef = ref(null);
const baseMapVisible = ref(false);   // 默认收起，避免挤压微应用可视区
const baseMapConfig = {
  center: [119.296, 26.074],   // [lng, lat]
  zoom: 10,
  minZoom: 3,
  maxZoom: 18,
  projection: 'EPSG:4326',
  basemaps: [
    { type: 'tianditumercator', id: 'vec', label: '普通地图', visible: true },
    { type: 'tianditusatellitemercator', id: 'img', label: '影像地图', visible: false },
  ],
  widgets: [
    { type: 'Zoom', id: 'zoom', position: { top: 16, left: 16 } },
    { type: 'Scalebar', id: 'scalebar', position: { left: 16, bottom: 16 } },
  ],
  controls: ['zoom', 'scale'],
  theme: 'light',
};
function onBaseMapReady(engine) {
  // 把 <TGisMap> 实例（mapRef）同时经 baseData（定向下发）和 globalData（全局共享）下发。
  // 两个通道都按引用传活 mapRef，微应用 baseData/globalData 都能拿到，可直接调方法。
  // dev 弹窗 / 跨源场景下 globalData 更可靠（全局共享，任何微应用实例都能读到）。
  setData({ mapRef: baseMapRef.value });
  setGlobalData({ mapRef: baseMapRef.value });
  // eslint-disable-next-line no-console
  console.log('[base] <TGisMap> ready，mapRef 已下发（baseData + globalData）', engine);
}
function onBaseMapErr(err) {
  // eslint-disable-next-line no-console
  console.error('[base] <TGisMap> error', err);
}
function onBaseMapDestroy() {
  // 收起 / 组件卸载时清掉两个通道里的 mapRef，避免微应用拿到已销毁的实例
  setData({ mapRef: null });
  setGlobalData({ mapRef: null });
}

// ─── 写法 A：直接给 data.xxx 赋值（适合改单个字段）───
// data 是 reactive 对象，赋值会自动驱动 dataToChild computed 重算 →
// micro-app 框架检测 props 引用变化 → 子应用 addDataListener 触发
data.userName = '张三';
data.theme = 'light';
data.token = 'Bearer dev-token-abc123';

// ─── 写法 B：setData({...}) 批量推送（适合一次推多字段 / watch 回调里用）───
// 等价于：Object.assign(data, patch)，底层改的是同一个 data 对象
// 例：basicInit / handshake / 把整个业务 state 全量推下去
setData({
  appVersion: '1.0.0',
  initTimestamp: Date.now(),
  permissions: ['read', 'write'],
  features: { darkMode: true, beta: false },
});

// 真实业务里典型的"全量同步"用法：把基座 state / global 全量推给子应用
// import { watch, reactive } from 'vue'
// const state = reactive({ isShowMain: false, currentTab: 'air' })
// watch(state, (val) => setData(val), { deep: true, immediate: true })


const inbox = reactive([]);
const inboxRef = ref(null);

function pushToInbox(type, payload) {
  inbox.push({ type, payload, time: new Date().toLocaleTimeString() });
  nextTick(() => {
    if (inboxRef.value) {
      inboxRef.value.scrollTop = inboxRef.value.scrollHeight;
    }
  });
}

registerHandler('form-submit', (payload) => pushToInbox('form-submit', payload));
registerHandler('log', (payload) => {
  console.log('[micro]', ...(Array.isArray(payload) ? payload : [payload]));
  pushToInbox('log', payload);
});

registerMethod('showToast', (msg) => {
  pushToInbox('showToast', { msg });
  alert(`[基座弹窗] ${msg}`);
});
registerMethod('navigate', (path) => {
  pushToInbox('navigate', { path });
  console.log('[基座] 子应用请求导航到:', path);
});
registerMethod('getToken', () => {
  pushToInbox('getToken (return)', { token: data.token });
  return data.token;
});

/**
 * 子应用调用地图 TMap API 的桥梁
 *
 * 子应用侧 ths-map.js 通过 callBase('tmapCall', { method, params })
 * 触发此方法，由基座操作真实的 iframe 地图。
 */
registerMethod('tmapCall', ({ method, params }) => {
  // 特判：__ready__ 表示等待地图就绪
  if (method === '__ready__') {
    return waitForTMapReady();
  }

  // 获取基座中地图的 iframe
  const tIframeEl = document.getElementById('t-iframe-893f.c77f5f17d');
  if (!tIframeEl) return Promise.reject('未找到地图容器 t-iframe-893f.c77f5f17d');

  const iframeEl = tIframeEl.querySelector('iframe');
  if (!iframeEl) return Promise.reject('t-iframe 内未找到 iframe');

  const TMap = iframeEl.contentWindow?.TMap;
  if (!TMap) return Promise.reject('TMap 尚未就绪');
  if (typeof TMap[method] !== 'function') return Promise.reject(`TMap.${method} 不是函数`);

  return TMap[method](...(params || []));
});

/**
 * 等待地图 iframe 加载 + TMap 就绪
 */
function waitForTMapReady(timeout = 15000) {
  return new Promise((resolve, reject) => {
    const tIframeEl = document.getElementById('t-iframe-893f.c77f5f17d');
    if (!tIframeEl) return reject('未找到地图容器');
    const iframeEl = tIframeEl.querySelector('iframe');
    if (!iframeEl) return reject('未找到 iframe');

    const timer = setTimeout(() => reject('等待 TMap 就绪超时'), timeout);

    function checkTMap() {
      if (iframeEl.contentWindow?.TMap) {
        clearTimeout(timer);
        resolve('ok');
      }
    }

    if (iframeEl.contentWindow?.TMap) {
      clearTimeout(timer);
      resolve('ok');
      return;
    }

    iframeEl.addEventListener('load', () => {
      // iframe 加载后再轮询 TMap
      const poll = setInterval(() => {
        if (iframeEl.contentWindow?.TMap) {
          clearTimeout(timer);
          clearInterval(poll);
          resolve('ok');
        }
      }, 300);
      setTimeout(() => clearInterval(poll), timeout);
    });
  });
}

// ===== 弹窗：生产对齐 dialogService + 兼容旧 showDialog =====
// 注册表：组件名 → 组件对象。子应用只能弹已注册的组件。
// 生产环境 component 是 LEGO 页面/组件名；本调试模板用本地 Vue SFC 名演示。
const dialogComponents = {
  // 与生产约定对齐：component 常写作 XxxComponent
  dialogDemoContentComponent: markRaw(DemoDialogContent),
  RegionPickerDialog: markRaw(RegionPickerDialog),
};

const dialogService = createDialogService();

function resolveDialogWidth(item) {
  if (item?.width) return item.width;
  const positionWidth = item?.initialSize === 'small'
    ? item?.dialogStyle?.minPosition?.width
    : item?.dialogStyle?.maxPosition?.width;
  return positionWidth || (item?.initialSize === 'small' ? '520px' : '720px');
}

function toggleDialogSize(item) {
  dialogService.update(item.id, {
    initialSize: item.initialSize === 'small' ? 'large' : 'small',
  });
}

function resolveDialogContentProps(item) {
  const params = item?.params && typeof item.params === 'object' ? item.params : {};
  return {
    ...params,
    message: params.message
      ?? (params.stationName
        ? `站点：${params.stationName}（${params.stationCode || '-'}）`
        : undefined),
    count: params.count,
    regions: params.regions,
    defaultCode: params.defaultCode,
  };
}

function onDialogContentClose(dialogId, result) {
  pushToInbox('dialogService.close(from content)', { dialogId, result });
  dialogService.close(dialogId, result ?? null);
}

function onHostDialogClosed(dialogId) {
  if (dialogService.isOpen(dialogId)) {
    dialogService.close(dialogId, null);
  }
}

// 生产同款：callBase('dialogService', action, ...params)
registerContextualSharedChildMethod(
  'dialogService',
  createContextualDialogServiceRpcFacade(dialogService, (rpcContext) => {
    const microAppName = rpcContext.ownerMicroAppName || rpcContext.microAppName;
    const microAppElement = Array.from(document.querySelectorAll('micro-app'))
      .find((element) => element.getAttribute('name') === microAppName);
    const url = microAppElement?.getAttribute('url') || microAppElement?.url || '';
    if (!url) {
      throw new Error(`[DialogService RPC] unable to resolve caller micro-app: ${microAppName}`);
    }
    return {
      instanceName: microAppName,
      url,
    };
  }),
);

// 兼容旧示例：callBase('showDialog', { componentName, props, title, width })
// 使用共享注册，否则只在模板默认的 `child` 实例上可用；
// 平台实际注册的微应用名称通常不同，例如 `microAppDialogExample1`。
registerSharedChildMethod('showDialog', (config) => {
  pushToInbox('showDialog → dialogService', config);
  return dialogService.openAndWait({
    id: config?.id,
    title: config?.title || '',
    width: config?.width || '600px',
    component: config?.componentName || config?.component || '',
    params: config?.props || config?.params || {},
    showMask: true,
    locked: false,
    closeOtherUnlocked: false,
  });
});

if (typeof window !== 'undefined') {
  window.__template_dialogService = dialogService;
}


function changeUser() {
  // 写法 A：单字段赋值
  data.userName = data.userName === '张三' ? '李四' : '张三';
}
function toggleTheme() {
  // 写法 A：单字段赋值
  data.theme = data.theme === 'light' ? 'dark' : 'light';
}
function batchUpdate() {
  // 写法 B：setData 一次性批量更新多个字段
  // 注意：setData 是合并语义（Object.assign），不会覆盖未传入的字段
  setData({
    userName: '王五',
    theme: 'dark',
    token: `Bearer refreshed-${Date.now()}`,
    lastUpdate: new Date().toLocaleTimeString(),
  });
}

// ===== 通道 3：globalData 全局共享 =====
const { globalData, setGlobalData } = useGlobalData();
const regionName = computed(() => globalData.value?.regionaQuery?.regionName);
const regionCode = computed(() => globalData.value?.regionaQuery?.regionCode);
const activeTheme = computed(() => globalData.value?.activeTheme);
const socketRoom = computed(() => globalData.value?.socketRoom);
const appId = computed(() => globalData.value?.appId);
const serviceBaseUrl = computed(() => globalData.value?.serviceBaseUrl);
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body, #app { height: 100%; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
</style>

<style scoped>
.dialog-debug-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-bottom: 12px;
  padding: 8px 10px;
  background: #f5f7fa;
  border-radius: 4px;
  color: #606266;
  font-size: 11px;
}
.dialog-debug-meta code { color: #409eff; }

.base-root {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f5f7fa;
}

/* ===== 顶部栏 ===== */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  background: #fff;
  border-bottom: 1px solid #e4e7ed;
  flex-shrink: 0;
  z-index: 10;
}
.header-title { display: flex; align-items: center; gap: 8px; }
.header-title h2 { font-size: 18px; font-weight: 600; color: #303133; }
.badge {
  font-size: 11px; color: #909399;
  background: #f0f2f5; padding: 2px 8px; border-radius: 4px;
}
.header-actions { display: flex; align-items: center; gap: 8px; }
.info-label { font-size: 13px; color: #606266; }

/* ===== 全局变量监视器 ===== */
.global-monitor {
  background: linear-gradient(90deg, #f0f9ff 0%, #f0f5ff 100%);
  padding: 8px 24px;
  border-bottom: 1px solid #e4e7ed;
  flex-shrink: 0;
}
.monitor-title {
  font-size: 12px;
  color: #5e6d82;
  margin-bottom: 6px;
}
.monitor-title code {
  background: rgba(64, 158, 255, 0.1);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 11px;
  color: #409eff;
}
.monitor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 6px 16px;
}
.monitor-cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;
  background: #fff;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid #e6eaf0;
}
.monitor-cell .key {
  color: #909399;
  font-family: ui-monospace, SFMono-Regular, monospace;
}
.monitor-cell strong {
  color: #303133;
  font-weight: 600;
}

/* ===== 基座地图区域 ===== */
.base-map-area {
  padding: 10px 24px;
  border-bottom: 1px solid #e4e7ed;
  background: #fafbff;
  flex-shrink: 0;
}
.base-map-area .section-title {
  font-size: 12px;
  color: #5e6d82;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.base-map-area .section-title code {
  background: rgba(64, 158, 255, 0.1);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 11px;
  color: #409eff;
}
.base-map-area :deep(.t-gis-map) {
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  overflow: hidden;
}

/* ===== 微应用区域 ===== */
.main-area {
  flex: 1;
  position: relative;
  overflow: hidden;
}
.main-area micro-app {
  width: 100%;
  height: 100%;
  display: block;
}

/* ===== 消息收件箱 ===== */
.inbox {
  flex-shrink: 0;
  max-height: 220px;
  background: #fff;
  border-top: 1px solid #e4e7ed;
  display: flex;
  flex-direction: column;
}
.inbox-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  border-bottom: 1px solid #f2f2f2;
  font-size: 13px;
  color: #606266;
}
.inbox-body {
  flex: 1;
  overflow-y: auto;
  padding: 8px 24px;
  font-size: 13px;
}
.inbox-empty {
  color: #c0c4cc;
  text-align: center;
  padding: 16px;
}
.inbox-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 4px 0;
  border-bottom: 1px dashed #f0f0f0;
}
.inbox-time {
  flex-shrink: 0;
  color: #c0c4cc;
  font-size: 11px;
  font-family: ui-monospace, SFMono-Regular, monospace;
}
.inbox-tag {
  flex-shrink: 0;
  background: #e6f7ff;
  color: #1890ff;
  padding: 1px 6px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 600;
}
.inbox-payload {
  font-size: 12px;
  color: #606266;
  word-break: break-all;
}
</style>
