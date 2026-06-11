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

    <!-- ===== 弹窗（基座渲染，可以覆盖整个浏览器）===== -->
    <!--
      关键点：
      1. <el-dialog> 默认 append-to-body=true，会把弹窗挂到 document.body，
         不受 .main-area / micro-app iframe 的范围限制，能盖住整个浏览器
      2. 子应用通过 callBase('showDialog', {...}) 触发，本质是基座自己在渲染
      3. 子应用要弹哪个组件，就在 dialogComponents 注册表里加一个
    -->
    <el-dialog
      v-model="dialog.visible"
      :title="dialog.title"
      :width="dialog.width || '600px'"
      :modal="true"
      :append-to-body="true"
      @close="onDialogClose"
    >
      <!-- 按"组件名"渲染：dialogComponents[dialog.componentName] 是基座自己定义的组件 -->
      <component
        v-if="dialog.componentName && dialogComponents[dialog.componentName]"
        :is="dialogComponents[dialog.componentName]"
        v-bind="dialog.props"
        @close="closeDialog"
      />
      <!-- 没注册的组件名，给个友好提示 -->
      <div v-else-if="dialog.componentName" style="color: #f56c6c;">
        ⚠️ 未注册的弹窗组件名：<code>{{ dialog.componentName }}</code><br>
        请在 base/src/App.vue 的 <code>dialogComponents</code> 里注册。
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, computed, nextTick, markRaw } from 'vue';
import { ElButton, ElDialog } from 'element-plus';
import { useChildBridge, useGlobalData } from './bridge.js';

// 弹窗里要显示的两个示例组件（基座自己定义，子应用按名字调）
import DemoDialogContent from './dialogs/DemoDialogContent.vue';
import RegionPickerDialog from './dialogs/RegionPickerDialog.vue';

// ===== 通道 1+2：定向数据 / dispatch =====
// useChildBridge(name) 按 <micro-app name="child"> 拿独立实例。
// 模板里两端 name 都是 'child'，所以这里也传 'child'。
const { data, dataToChild, handleChildData, registerHandler, registerMethod } = useChildBridge('child');

data.userName = '张三';
data.theme = 'light';
data.token = 'Bearer dev-token-abc123';

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

// ===== 弹窗 RPC：子应用 await callBase('showDialog', {...}) =====
// 注册表：组件名 → 组件对象。子应用只能弹"已注册"的组件，避免任意执行风险
const dialogComponents = {
  DemoDialogContent: markRaw(DemoDialogContent),
  RegionPickerDialog: markRaw(RegionPickerDialog),
};

const dialog = reactive({
  visible: false,
  componentName: null,  // 要渲染的组件名
  title: '',
  width: '600px',
  props: {},            // 透传给组件的 props
  resolver: null,       // 关弹窗时把这个 Promise resolve 掉，回传给子应用
});

registerMethod('showDialog', (config) => {
  // config: { componentName, title?, width?, props? }
  pushToInbox('showDialog', config);
  dialog.componentName = config?.componentName;
  dialog.title = config?.title || '';
  dialog.width = config?.width || '600px';
  dialog.props = config?.props || {};
  dialog.visible = true;

  // 返回 Promise —— 子应用可以 await 拿到关闭时的结果
  // 弹窗内部组件 emit('close', resultData) 触发 resolve
  return new Promise((resolve) => {
    dialog.resolver = resolve;
  });
});

function closeDialog(result) {
  if (dialog.resolver) {
    dialog.resolver(result ?? null);
    dialog.resolver = null;
  }
  dialog.visible = false;
  dialog.componentName = null;
  dialog.props = {};
}
function onDialogClose() {
  closeDialog(null);
}

function changeUser() {
  data.userName = data.userName === '张三' ? '李四' : '张三';
}
function toggleTheme() {
  data.theme = data.theme === 'light' ? 'dark' : 'light';
}

// ===== 通道 3：globalData 全局共享 =====
const { globalData } = useGlobalData();
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