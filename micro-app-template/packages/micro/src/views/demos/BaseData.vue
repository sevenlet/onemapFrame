<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║ 通道① 基座 → 子应用 定向数据（baseData）
  ║
  ║ 场景：基座要把用户信息、主题、token 等数据下发给当前子应用，
  ║       数据变化时子应用自动响应。
  ║
  ║ 子应用代码：
  ║   import { useBaseBridge } from '@/bridge.js'
  ║   const { baseData } = useBaseBridge()
  ║   // baseData.userName / baseData.theme ... 直接用即可，响应式
  ║
  ║ 基座代码（在基座 setup() 里，name 对齐 <micro-app name="..."> ）：
  ║   const { data, setData } = useChildBridge('child')
  ║   setData({ userName: '张三', theme: 'light' })
  ║   // 或直接：data.userName = '张三'
  ║
  ║ 注意事项：
  ║   • baseData 是只读视图，子应用不要修改它（要改值用通道② callBase）
  ║   • 必须传可序列化的值（字符串/数字/纯对象），不能传函数、DOM
  ║   • 同名字段会被基座的 setData 覆盖
  ╚══════════════════════════════════════════════════════════════╝
-->
<template>
  <div class="page">
    <header class="page-head">
      <router-link to="/home" class="back">← 返回总览</router-link>
      <h2>📥 通道① 基座定向数据 (baseData)</h2>
    </header>

    <el-card class="card">
      <template #header><strong>当前从基座收到的数据</strong></template>
      <div class="row"><span class="key">userName</span><strong>{{ baseData.userName ?? '—' }}</strong></div>
      <div class="row"><span class="key">theme</span><strong>{{ baseData.theme ?? '—' }}</strong></div>
      <div class="row"><span class="key">isShowMain</span><code>{{ baseData.isShowMain ?? '—' }}</code></div>
      <div class="row"><span class="key">token</span><code class="ellipsis">{{ baseData.token ?? '—' }}</code></div>
      <div class="row"><span class="key">type</span><code class="ellipsis">{{ baseData.type ?? '—' }}</code></div>

      <p class="hint">
        💡 在基座顶部点「切换用户/切换主题」按钮，这里会实时刷新。
      </p>
    </el-card>

    <el-card class="card">
      <el-button @click="handleClick">测试通道② callBase</el-button>
      <template #header><strong>完整 baseData 快照</strong></template>
      <pre class="json">{{ JSON.stringify(baseData, null, 2) }}</pre>
    </el-card>
  </div>
</template>

<script setup>
import { ElCard } from 'element-plus';
import { useBaseBridge, callBase } from '@/bridge.js';

// baseData 是响应式对象，基座更新时这里自动重渲染
const { baseData } = useBaseBridge();

const handleClick = () => {
  callBase('pageFuncTest', { from: 'BaseData.vue' })
    .then(res => console.log('callBase 收到基座返回:', res))
    .catch(err => console.error('callBase 错误:', err));
}
</script>

<style scoped>
.page {
  padding: 16px 24px;
  max-width: 800px;
  margin: 0 auto;
}

.page-head {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.page-head h2 {
  font-size: 18px;
  color: #303133;
}

.back {
  color: #409eff;
  text-decoration: none;
  font-size: 13px;
}

.back:hover {
  text-decoration: underline;
}

.card {
  margin-bottom: 12px;
}

.row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  font-size: 14px;
  border-bottom: 1px dashed #f0f0f0;
}

.row:last-child {
  border-bottom: none;
}

.key {
  color: #909399;
  width: 120px;
  font-family: ui-monospace, monospace;
  font-size: 12px;
}

.ellipsis {
  max-width: 380px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hint {
  margin-top: 12px;
  padding: 8px 12px;
  background: #f5f7fa;
  border-radius: 4px;
  font-size: 12px;
  color: #909399;
}

code {
  background: #f0f2f5;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  color: #e6a23c;
}

.json {
  background: #f5f7fa;
  padding: 12px;
  border-radius: 4px;
  font-size: 12px;
  color: #303133;
  max-height: 260px;
  overflow: auto;
  margin: 0;
}
</style>
