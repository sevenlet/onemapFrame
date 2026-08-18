<!--
  dialogService 全场景示例（生产 RPC 对齐）
  允许：open / update / close / closeAll / setLocked / isOpen / get / getParams
  禁止：destroy / configure / resetConfig / getConfig

  正文支持两种互斥模式：
  1. component + params：由宿主渲染已注册的 LEGO/Vue 组件。
  2. content.type = 'micro-app' + route + params：宿主创建新的 micro-app iframe，
     加载发起调用的微应用 URL，并在 iframe 中打开指定正文路由。

  微应用正文模式不需要传 URL。宿主会从本次 RPC 的调用上下文中识别来源微应用，
  因而调用方只需声明内部 route 和业务 params。
-->
<template>
  <div class="page">
    <header class="page-head">
      <router-link to="/home" class="back">← 返回总览</router-link>
      <div>
        <h2>dialogService 全场景示例</h2>
        <p>弹窗由宿主渲染，可覆盖 iframe；示例覆盖全部 8 个 RPC 方法和主要边界场景。</p>
      </div>
    </header>

    <el-alert
      v-if="!isEmbedded"
      title="当前独立运行：callBase 会安全降级，需从基座 3000 端口进入才能实际弹宿主弹窗"
      type="warning"
      :closable="false"
      class="card"
    />

    <el-card class="card">
      <template #header><strong>0. 示例覆盖矩阵</strong></template>
      <div class="coverage-grid">
        <div v-for="item in coverageItems" :key="item.name" class="coverage-item">
          <strong>{{ item.name }}</strong>
          <span>{{ item.desc }}</span>
        </div>
      </div>
    </el-card>

    <el-card class="card">
      <template #header><strong>1. iframe 弹窗对比</strong></template>
      <div class="button-row">
        <el-button @click="inlineVisible = true">iframe 内弹窗（会被裁切）</el-button>
      </div>
      <p class="hint">
        微应用内部弹窗只能显示在 iframe 内；需要跨越 iframe 边界时使用宿主的
        <code>dialogService</code>。
      </p>
    </el-card>

    <el-card class="card">
      <template #header><strong>2. open 场景</strong></template>
      <div class="button-row">
        <el-button type="primary" @click="openBasicDialog">基础 open（指定 id）</el-button>
        <!-- 宿主弹窗外框 + 当前微应用专用路由正文，正文不受原大屏 iframe 边界限制。 -->
        <el-button type="success" @click="openMicroAppContentDialog">
          微应用 Vue 正文
        </el-button>
        <el-button @click="openAutoIdDialog">open 自动生成 id</el-button>
        <el-button type="warning" @click="openFullOptionsDialog">小窗 + 遮罩 + 完整配置</el-button>
        <el-button type="danger" plain @click="openInitiallyLockedDialog">初始锁定弹窗</el-button>
      </div>
    </el-card>

    <el-card class="card">
      <template #header><strong>3. 生命周期：update / lock / query / close</strong></template>
      <div class="button-row">
        <el-button @click="updateCurrentDialog">update 当前弹窗</el-button>
        <el-button @click="toggleCurrentLock">setLocked 切换锁定</el-button>
        <el-button @click="queryCurrentDialog">isOpen / get / getParams</el-button>
        <el-button type="danger" @click="closeCurrentDialog">close 当前</el-button>
        <el-button type="danger" plain @click="closeAllUnlocked">closeAll(未锁定)</el-button>
        <el-button type="danger" plain @click="closeAllIncludingLocked">closeAll(含锁定)</el-button>
      </div>
      <p class="hint">当前 dialogId：<code>{{ currentDialogId || '（无）' }}</code></p>
    </el-card>

    <el-card class="card">
      <template #header><strong>4. 边界：禁止方法</strong></template>
      <div class="button-row">
        <el-button type="info" plain @click="tryForbiddenDestroy">尝试 destroy（应失败）</el-button>
      </div>
    </el-card>

    <el-card class="card">
      <template #header><strong>5. 调用日志</strong></template>
      <pre class="log-box">{{ lastLog || '点击上方按钮后，这里显示 RPC 返回值 / 错误。' }}</pre>
    </el-card>

    <el-dialog v-model="inlineVisible" title="iframe 内弹窗（受沙箱限制）" width="480px">
      <div class="inline-banner">
        <strong>我在子应用 iframe 内部渲染</strong>
        <p>虽然 append-to-body，但 body 是 iframe 自己的 body，无法越过 iframe 边界。</p>
        <p>当前 window：<code>{{ currentWindowInfo }}</code></p>
      </div>
      <template #footer>
        <el-button @click="inlineVisible = false">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ElCard, ElButton, ElDialog, ElAlert } from 'element-plus';
import { callBase } from '@/bridge.js';

/** 调试模板组件名（对齐生产 XxxComponent 命名） */
const DEMO_DIALOG_COMPONENT = 'dialogDemoContentComponent';

// 直接访问微应用 URL 时没有 micro-app 注入环境，所有宿主 RPC 只会安全降级。
const isEmbedded = computed(() => Boolean(window.__MICRO_APP_ENVIRONMENT__));
const currentWindowInfo = `${window.location.host}（子应用 iframe window）`;
const inlineVisible = ref(false);

// 所有 open 方法都把返回的 dialogId 保存在这里，供 update/get/close 等后续操作复用。
const currentDialogId = ref('');
const lastLog = ref('');

const coverageItems = [
  { name: 'open', desc: '打开 / 同 id 更新 / 自动 id' },
  { name: 'micro-app content', desc: '宿主外框 + 微应用路由正文' },
  { name: 'update', desc: '改 title / params / size' },
  { name: 'close', desc: '关单个实例' },
  { name: 'closeAll', desc: '关全部；可 includeLocked' },
  { name: 'setLocked', desc: '锁定后 closeAll 可跳过' },
  { name: 'isOpen / get / getParams', desc: '查询快照与参数' },
  { name: 'destroy', desc: '禁止远程调用（应 reject）' },
];

function formatValue(value) {
  if (value instanceof Error) return value.message;
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

function logResult(title, value) {
  lastLog.value = `${new Date().toLocaleTimeString()}  ${title}\n${formatValue(value)}`;
}

// 统一封装 DialogService RPC：rpc('open', options) 等价于
// callBase('dialogService', 'open', options)。
async function rpc(action, ...params) {
  return callBase('dialogService', action, ...params);
}

function demoParams(label, extra = {}) {
  return {
    message: label,
    count: Math.floor(Math.random() * 100),
    timestamp: Date.now(),
    ...extra,
  };
}

async function openBasicDialog() {
  try {
    // component 模式：正文组件由宿主注册并渲染，微应用只传组件名和普通数据。
    const id = await rpc('open', {
      id: 'micro-app-station-detail',
      title: '基础站点详情',
      component: DEMO_DIALOG_COMPONENT,
      params: demoParams('指定 id、无遮罩'),
      showMask: false,
      closeOtherUnlocked: false,
    });
    currentDialogId.value = id;
    logResult('open 基础弹窗 → id', id);
  } catch (error) {
    logResult('open 失败', error?.message || String(error));
  }
}

async function openMicroAppContentDialog() {
  try {
    // 微应用正文模式的运行结构：
    // 宿主 Dialog 外框 -> 新 micro-app iframe -> /dialog/content-demo 路由组件。
    // 宿主从 RPC 上下文自动取得当前微应用的实例名和 URL，因此这里禁止/无需传 URL。
    const id = await rpc('open', {
      id: 'micro-app-vue-content',
      title: '微应用 Vue 正文',
      content: {
        // content 与 component 互斥；type 告诉宿主正文需要按微应用方式挂载。
        type: 'micro-app',
        // route 必须是当前微应用内以 / 开头的安全路由。
        // 对应 router.js 中的 DialogContentDemo，建议只渲染正文，不加载完整大屏壳。
        route: '/dialog/content-demo',
      },
      // 宿主通过 :data 下发为 baseData.params；后续 update(params) 也会响应式同步。
      params: {
        message: '该正文来自 packages/micro 内的 DialogContentDemo.vue',
        updateCount: 0,
        timestamp: Date.now(),
      },
      initialSize: 'large',
      showMask: false,
      contentScale: false,
      closeOtherUnlocked: false,
    });

    // open 立即返回宿主生成/确认的 dialogId，不等待正文关闭。
    // 正文组件可从 baseData.dialogContext.dialogId 取到同一个 ID 并主动调用 close。
    currentDialogId.value = id;
    logResult('open 微应用 Vue 正文 → id', id);
  } catch (error) {
    logResult('微应用 Vue 正文打开失败', error?.message || String(error));
  }
}

async function openAutoIdDialog() {
  try {
    const id = await rpc('open', {
      title: '自动生成 ID',
      component: DEMO_DIALOG_COMPONENT,
      params: demoParams('没有传 id，请保存 open 返回值'),
      closeOtherUnlocked: false,
    });
    currentDialogId.value = id;
    logResult('open 自动 id', id);
  } catch (error) {
    logResult('自动 id 失败', error?.message || String(error));
  }
}

async function openFullOptionsDialog() {
  try {
    const id = await rpc('open', {
      id: 'micro-app-full-options',
      title: '小窗 + 遮罩 + 完整配置',
      component: DEMO_DIALOG_COMPONENT,
      headerComponent: 'dialogTitleBackgroundComponent',
      params: demoParams('完整 options 示例'),
      context: { source: 'micro-app-template', businessType: 'demo' },
      initialSize: 'small',
      locked: false,
      showLockButton: true,
      showSizeButton: true,
      showMask: true,
      contentScale: true,
      closeOtherUnlocked: false,
      cancelText: '取消',
      confirmText: '确定',
      dialogStyle: {
        minPosition: { width: '520px', height: '360px' },
        maxPosition: { width: '860px', height: '640px' },
      },
      cStyle: { wrapper: { default: { borderRadius: '12px' } } },
    });
    currentDialogId.value = id;
    const snapshot = await rpc('get', id);
    logResult('完整配置 get 快照', snapshot);
  } catch (error) {
    logResult('完整配置失败', error?.message || String(error));
  }
}

async function openInitiallyLockedDialog() {
  try {
    const id = await rpc('open', {
      id: 'micro-app-locked',
      title: '初始锁定弹窗',
      component: DEMO_DIALOG_COMPONENT,
      params: demoParams('locked: true'),
      locked: true,
      showLockButton: true,
      showMask: true,
      closeOtherUnlocked: false,
    });
    currentDialogId.value = id;
    logResult('初始锁定 open → id', id);
  } catch (error) {
    logResult('初始锁定失败', error?.message || String(error));
  }
}

async function updateCurrentDialog() {
  const dialogId = currentDialogId.value;
  if (!dialogId) {
    logResult('update 跳过', '请先 open 一个弹窗');
    return;
  }
  try {
    // 对微应用正文弹窗执行 update 时，宿主复用现有 iframe，仅通过 data 通道推送新 params；
    // content.type 和 route 在弹窗存活期间不允许修改。
    const ok = await rpc('update', dialogId, {
      title: `已更新 @ ${new Date().toLocaleTimeString()}`,
      params: demoParams('update 后的 params', { step: 2, updateCount: 1 }),
      initialSize: 'large',
    });
    logResult('update 结果', { ok, dialogId });
  } catch (error) {
    logResult('update 失败', error?.message || String(error));
  }
}

async function toggleCurrentLock() {
  const dialogId = currentDialogId.value;
  if (!dialogId) {
    logResult('setLocked 跳过', '请先 open 一个弹窗');
    return;
  }
  try {
    const snapshot = await rpc('get', dialogId);
    const nextLocked = !snapshot?.locked;
    const ok = await rpc('setLocked', dialogId, nextLocked);
    logResult('setLocked 结果', { ok, dialogId, locked: nextLocked });
  } catch (error) {
    logResult('setLocked 失败', error?.message || String(error));
  }
}

async function queryCurrentDialog() {
  const dialogId = currentDialogId.value;
  if (!dialogId) {
    logResult('query 跳过', '请先 open 一个弹窗');
    return;
  }
  try {
    const opened = await rpc('isOpen', dialogId);
    const snapshot = await rpc('get', dialogId);
    const params = await rpc('getParams', dialogId);
    logResult('查询结果', { dialogId, opened, snapshot, params });
  } catch (error) {
    logResult('query 失败', error?.message || String(error));
  }
}

async function closeCurrentDialog() {
  const dialogId = currentDialogId.value;
  if (!dialogId) {
    logResult('close 跳过', '请先 open 一个弹窗');
    return;
  }
  try {
    const ok = await rpc('close', dialogId);
    logResult('close 结果', { ok, dialogId });
    if (ok) currentDialogId.value = '';
  } catch (error) {
    logResult('close 失败', error?.message || String(error));
  }
}

async function closeAllUnlocked() {
  try {
    await rpc('closeAll', { includeLocked: false });
    logResult('closeAll(未锁定)', 'done');
  } catch (error) {
    logResult('closeAll 失败', error?.message || String(error));
  }
}

async function closeAllIncludingLocked() {
  try {
    await rpc('closeAll', { includeLocked: true });
    currentDialogId.value = '';
    logResult('closeAll(含锁定)', 'done');
  } catch (error) {
    logResult('closeAll 失败', error?.message || String(error));
  }
}

async function tryForbiddenDestroy() {
  try {
    await rpc('destroy');
    logResult('destroy 意外成功', '基座白名单可能未拦截');
  } catch (error) {
    logResult('destroy 按预期失败', error?.message || String(error));
  }
}
</script>

<style scoped>
.page { padding: 16px 24px; max-width: 960px; margin: 0 auto; }
.page-head { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 16px; }
.page-head h2 { font-size: 18px; color: #303133; margin: 0 0 4px; }
.page-head p { margin: 0; font-size: 13px; color: #909399; line-height: 1.5; }
.back { color: #409eff; text-decoration: none; font-size: 13px; white-space: nowrap; margin-top: 4px; }
.back:hover { text-decoration: underline; }
.card { margin-bottom: 12px; }
.button-row { display: flex; gap: 8px; flex-wrap: wrap; }
.hint { margin-top: 12px; padding: 10px 12px; background: #f5f7fa; border-radius: 4px; font-size: 12px; color: #909399; line-height: 1.8; }
code { background: rgba(64, 158, 255, 0.1); color: #409eff; padding: 1px 5px; border-radius: 3px; font-size: 11px; }
.coverage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 8px;
}
.coverage-item {
  padding: 10px 12px;
  background: #f5f7fa;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.coverage-item strong { font-size: 13px; color: #303133; }
.coverage-item span { font-size: 12px; color: #909399; line-height: 1.4; }
.log-box {
  margin: 0;
  padding: 12px;
  background: #1e1e1e;
  color: #d4d4d4;
  border-radius: 6px;
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-all;
  min-height: 88px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}
.inline-banner {
  border: 3px dashed #e6a23c;
  background: #fdf6ec;
  padding: 16px;
  border-radius: 6px;
  color: #e6a23c;
}
.inline-banner strong { font-size: 15px; display: block; margin-bottom: 8px; }
.inline-banner p { font-size: 13px; color: #606266; line-height: 1.6; margin: 4px 0 0 0; }
.inline-banner code { background: rgba(230, 162, 60, 0.15); color: #e6a23c; }
</style>
