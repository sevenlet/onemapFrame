<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║ 通道② 子应用 → 基座（sendToBase / callBase）
  ║
  ║ 场景：
  ║   • sendToBase：发"事件"给基座，基座按 type 路由到对应处理函数，
  ║     适合通知、上报，不需要返回值
  ║   • callBase：发"RPC 调用"给基座，await 拿返回值，
  ║     适合查询、跳转、弹窗等需要结果的操作
  ║
  ║ 子应用代码：
  ║   import { useBaseBridge } from '@/bridge.js'
  ║   const { sendToBase, callBase } = useBaseBridge()
  ║   sendToBase({ type: 'form-submit', payload: {...} })
  ║   const result = await callBase('getUrlQueryString', '参数')
  ║
  ║ 基座代码（在基座 setup() 里，name 对齐 <micro-app name="..."> ）：
  ║   const { registerHandler, registerMethod } = useChildBridge('child')
  ║   registerHandler('form-submit', (payload) => { ... })  // sendToBase
  ║   registerMethod('getUrlQueryString', (msg) => '...返回值')  // callBase
  ║
  ║ 注意事项：
  ║   • payload / 参数 / 返回值都必须可序列化（无函数、无 DOM）
  ║   • callBase 是 Promise，记得 await 或 .then
  ║   • 基座没注册对应 type/method 时：
  ║     - sendToBase 会被忽略
  ║     - callBase 会 reject 'Method not found'
  ║   • registerMethod 优先级 > window[methodName]（fallback）
  ╚══════════════════════════════════════════════════════════════╝
-->
<template>
  <div class="page">
    <header class="page-head">
      <router-link to="/home" class="back">← 返回总览</router-link>
      <h2>📤 通道② 向基座发消息 (sendToBase / callBase)</h2>
    </header>

    <!-- 1. sendToBase：单向通知 -->
    <el-card class="card">
      <template #header>
        <strong>① sendToBase — 单向通知（无返回值）</strong>
      </template>

      <el-form :inline="true" label-width="50px">
        <el-form-item label="姓名"><el-input v-model="form.name" /></el-form-item>
        <el-form-item label="城市"><el-input v-model="form.city" /></el-form-item>
      </el-form>

      <div class="button-row">
        <el-button type="primary" @click="submitForm">
          通知基座（type: form-submit）
        </el-button>
        <el-button @click="sendLog">
          发送日志（type: log）
        </el-button>
      </div>
      <p class="hint">
        💡 基座侧 <code>registerHandler('form-submit', payload =&gt; ...)</code> 收消息。
        没注册会被静默忽略 —— 看基座控制台确认。
      </p>
    </el-card>

    <!-- 2. callBase：RPC 调用 -->
    <el-card class="card">
      <template #header>
        <strong>② callBase — RPC 调用（有返回值）</strong>
      </template>

      <div class="button-row">
        <el-button type="success" @click="callGetUrl">
          callBase('getUrlQueryString')
        </el-button>
        <el-button type="warning" @click="callNavigate">
          callBase('navigate', '/some-path')
        </el-button>
      </div>

      <div v-if="rpcResult !== null" class="result-box">
        <strong>📦 RPC 返回值：</strong>
        <pre>{{ JSON.stringify(rpcResult, null, 2) }}</pre>
      </div>

      <p class="hint">
        💡 基座侧 <code>registerMethod('getUrlQueryString', () =&gt; window.location.search)</code>，
        返回值会通过 Promise resolve 回这里。
      </p>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { ElCard, ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';
import { useBaseBridge } from '@/bridge.js';

const { sendToBase, callBase } = useBaseBridge();

// ===== sendToBase 示例 =====
const form = reactive({ name: '', city: '' });

// 通知基座有表单提交（基座只是收消息，不会回复）
function submitForm() {
  sendToBase({ type: 'form-submit', payload: { ...form } });
}

// 发一条日志给基座（基座可以打印 / 上报 / 存档）
function sendLog() {
  sendToBase({ type: 'log', payload: ['微应用日志', { ts: Date.now() }] });
}

// ===== callBase 示例 =====
const rpcResult = ref(null);

// 让基座返回当前 URL 的查询字符串
async function callGetUrl() {
  rpcResult.value = null;
  try {
    rpcResult.value = await callBase('getUrlQueryString', `来自微应用 @ ${new Date().toLocaleTimeString()}`);
  } catch (err) {
    rpcResult.value = { error: String(err) };
  }
}

// 让基座做路由跳转（基座自己决定怎么处理）
async function callNavigate() {
  rpcResult.value = null;
  try {
    rpcResult.value = await callBase('navigate', '/some-path');
  } catch (err) {
    rpcResult.value = { error: String(err) };
  }
}
</script>

<style scoped>
.page { padding: 16px 24px; max-width: 800px; margin: 0 auto; }
.page-head { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
.page-head h2 { font-size: 18px; color: #303133; }
.back { color: #409eff; text-decoration: none; font-size: 13px; }
.back:hover { text-decoration: underline; }
.card { margin-bottom: 12px; }
.button-row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
.hint { margin-top: 12px; padding: 8px 12px; background: #f5f7fa; border-radius: 4px; font-size: 12px; color: #909399; }
.hint code { background: rgba(64, 158, 255, 0.1); color: #409eff; padding: 1px 5px; border-radius: 3px; }
code { background: #f0f2f5; padding: 2px 6px; border-radius: 3px; font-size: 12px; color: #e6a23c; }
.result-box {
  margin-top: 12px; padding: 12px;
  background: #f0f9eb; border: 1px solid #67c23a; border-radius: 4px;
  font-size: 12px;
}
.result-box pre {
  margin: 8px 0 0 0; white-space: pre-wrap; word-break: break-all;
  font-family: ui-monospace, monospace; font-size: 11px;
}
</style>
