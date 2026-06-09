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
  </div>
</template>

<script setup>
import { ref, reactive, computed, nextTick } from 'vue';
import { ElButton } from 'element-plus';
import { useChildBridge, useGlobalData } from './bridge.js';

// ===== 通道 1+2：定向数据 / dispatch =====
// data：reactive（业务直接写：data.userName = '李四'）
// dataToChild：computed，每次字段变化返回新对象引用，给 <micro-app :data="dataToChild">
const { data, dataToChild, handleChildData, registerHandler, registerMethod, setChildName } = useChildBridge();

// 告诉 bridge 当前嵌入的子应用 name（必须与 <micro-app name="..."> 一致）
// 用于 RPC 返回值通道（microApp.setData(name, data)）
setChildName('child');

// 初始数据下发
data.userName = '张三';
data.theme = 'light';
data.token = 'Bearer dev-token-abc123';

// 收件箱
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

// RPC 方法（供子应用 callHost 调用）
registerMethod('showToast', (msg) => {
  pushToInbox('showToast', { msg });
  alert(`[基座弹窗] ${msg}`);
});
registerMethod('navigate', (path) => {
  pushToInbox('navigate', { path });
  console.log('[基座] 子应用请求导航到:', path);
});

// 演示带返回值的 RPC：子应用 await callHost('getToken') 拿到 token
registerMethod('getToken', () => {
  pushToInbox('getToken (return)', { token: data.token });
  return data.token;
});

// 演示按钮 —— 切换 data 的字段，dataToChild 会自动返回新引用，micro-app 自动同步给子应用
function changeUser() {
  data.userName = data.userName === '张三' ? '李四' : '张三';
}
function toggleTheme() {
  data.theme = data.theme === 'light' ? 'dark' : 'light';
}

// ===== 通道 3：globalData 全局共享 =====
const { globalData } = useGlobalData();

// 监视器展示字段（响应式计算属性，子应用 setGlobalData 后会自动更新）
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