<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║ 调用基座地图 TMap API
  ║
  ║ 场景：业务地图嵌在基座的一个 iframe 中，子应用想调用地图方法
  ║       （移动中心点、切图层、加标记...），但跨域无法直接访问 iframe。
  ║
  ║ 子应用代码（直接像本地 TMap 一样用）：
  ║   import { TMap } from '@/ths-map.js'
  ║   TMap.goTo({ center: { x: 114, y: 26 } })   // 自动转发到基座
  ║   TMap.setZoom(12)
  ║   const center = await TMap.getCenter()      // 有返回值的也支持
  ║
  ║ 底层原理（开发者不需要关心，但要清楚）：
  ║   1. ths-map.js 用 Proxy 把 TMap.xxx() 拦截
  ║   2. 转发：callBase('tmapCall', { method: 'xxx', params: [...] })
  ║   3. 基座 registerMethod('tmapCall') 收到后 postMessage 给地图 iframe
  ║   4. 地图 iframe 内的监听器执行真实 TMap[method] 并 postMessage 回传
  ║
  ║ 基座要做的事：
  ║   • root.vue 已经注册了 tmapCall 处理器（不需要再加）
  ║   • 地图 iframe 的 index.html 内必须有 message 监听器
  ║     （由地图项目维护方负责，已在使用中的项目里加好了）
  ║
  ║ 注意事项：
  ║   • 跨域 iframe 无法直接读 contentWindow.TMap，必须走 postMessage
  ║   • 参数 / 返回值必须可序列化
  ║   • TMap 还没就绪时调用会超时，建议在地图加载完后再调
  ╚══════════════════════════════════════════════════════════════╝
-->
<template>
  <div class="page">
    <header class="page-head">
      <router-link to="/home" class="back">← 返回总览</router-link>
      <h2>🗺️ 调用基座地图 TMap API</h2>
    </header>

    <el-card class="card">
      <template #header><strong>常用地图操作</strong></template>

      <div class="button-row">
        <el-button type="primary" @click="goToBeijing">
          定位北京 (goTo)
        </el-button>
        <el-button type="primary" @click="goToFuzhou">
          定位福州 (goTo)
        </el-button>
        <el-button @click="zoomIn">放大 (setZoom)</el-button>
        <el-button @click="getCenter">获取中心点 (getCenter)</el-button>
      </div>

      <div v-if="lastResult !== null" class="result-box">
        <strong>📦 最近一次调用结果：</strong>
        <pre>{{ JSON.stringify(lastResult, null, 2) }}</pre>
      </div>
      <div v-if="lastError" class="error-box">
        <strong>❌ 调用错误：</strong> {{ lastError }}
      </div>

      <p class="hint">
        💡 像调用本地对象一样用 <code>TMap.xxx()</code>，Proxy 会自动转发到基座地图。<br>
        💡 任意 TMap 上的方法都能调 —— 不限于上面这几个示例。
      </p>
    </el-card>

    <!-- 自由调用：方便开发者输入任意方法名调试 -->
    <el-card class="card">
      <template #header><strong>自由调用（任意方法名）</strong></template>
      <el-form :inline="true">
        <el-form-item label="方法名">
          <el-input v-model="customMethod" placeholder="如 goTo" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="参数(JSON)">
          <el-input v-model="customParams" placeholder='如 [{"center":{"x":114,"y":26}}]' style="width: 320px;" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="callCustom">调用</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElCard, ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';
import { TMap } from '@/ths-map.js';

const lastResult = ref(null);
const lastError = ref('');

// 把异步调用 + 错误捕获包一层，方便每个按钮复用
async function runTMap(label, fn) {
  lastError.value = '';
  try {
    lastResult.value = (await fn()) ?? `${label} 已执行`;
  } catch (err) {
    lastResult.value = null;
    lastError.value = String(err);
  }
}

// 定位北京
function goToBeijing() {
  runTMap('goTo Beijing', () =>
    TMap.goTo({ center: { x: 116.397, y: 39.908 } })
  );
}

// 定位福州
function goToFuzhou() {
  runTMap('goTo Fuzhou', () =>
    TMap.goTo({ center: { x: 119.296, y: 26.074 } })
  );
}

// 放大一级
function zoomIn() {
  runTMap('setZoom 12', () => TMap.setZoom(12));
}

// 获取地图中心点（演示有返回值的调用）
function getCenter() {
  runTMap('getCenter', () => TMap.getCenter());
}

// 自由调用：让开发者实验任意 TMap 方法
const customMethod = ref('goTo');
const customParams = ref('[{"center":{"x":114,"y":26}}]');
function callCustom() {
  runTMap(`TMap.${customMethod.value}`, () => {
    let params = [];
    try {
      params = JSON.parse(customParams.value || '[]');
    } catch {
      throw new Error('参数 JSON 解析失败');
    }
    if (!Array.isArray(params)) throw new Error('参数必须是数组（每项作为一个 arg 传入）');
    return TMap[customMethod.value](...params);
  });
}
</script>

<style scoped>
.page { padding: 16px 24px; max-width: 800px; margin: 0 auto; }
.page-head { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
.page-head h2 { font-size: 18px; color: #303133; }
.back { color: #409eff; text-decoration: none; font-size: 13px; }
.back:hover { text-decoration: underline; }
.card { margin-bottom: 12px; }
.button-row { display: flex; gap: 8px; flex-wrap: wrap; }
.hint { margin-top: 12px; padding: 10px 12px; background: #f5f7fa; border-radius: 4px; font-size: 12px; color: #909399; line-height: 1.8; }
code { background: rgba(64, 158, 255, 0.1); color: #409eff; padding: 1px 5px; border-radius: 3px; font-size: 11px; }
.result-box {
  margin-top: 12px; padding: 12px;
  background: #f0f9eb; border: 1px solid #67c23a; border-radius: 4px;
  font-size: 12px;
}
.result-box pre { margin: 8px 0 0 0; white-space: pre-wrap; word-break: break-all; font-family: ui-monospace, monospace; font-size: 11px; }
.error-box {
  margin-top: 12px; padding: 10px 12px;
  background: #fef0f0; border: 1px solid #f56c6c; border-radius: 4px;
  font-size: 12px; color: #f56c6c;
}
</style>
