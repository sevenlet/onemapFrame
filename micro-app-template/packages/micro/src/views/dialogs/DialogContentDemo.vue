<template>
  <div class="dialog-content-demo">
    <div class="dialog-content-demo__banner">
      <strong>正文由微应用 Vue 组件渲染</strong>
      <span>当前组件运行在宿主 TDialog 内的新 micro-app iframe 中。</span>
    </div>

    <dl class="dialog-content-demo__details">
      <div>
        <dt>dialogId</dt>
        <dd>{{ dialogId || '等待宿主下发' }}</dd>
      </div>
      <div>
        <dt>route</dt>
        <dd>{{ dialogRoute || '—' }}</dd>
      </div>
      <div>
        <dt>message</dt>
        <dd>{{ dialogParams.message || '—' }}</dd>
      </div>
      <div>
        <dt>更新次数</dt>
        <dd>{{ dialogParams.updateCount ?? 0 }}</dd>
      </div>
    </dl>

    <pre class="dialog-content-demo__json">{{ formattedParams }}</pre>

    <div class="dialog-content-demo__actions">
      <el-button type="danger" plain :disabled="!dialogId" @click="closeDialog">
        从微应用正文关闭弹窗
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { callBase, useBaseBridge } from '@/bridge.js';

const { baseData } = useBaseBridge();

const dialogId = computed(() => baseData.value?.dialogContext?.dialogId || '');
const dialogRoute = computed(() => baseData.value?.dialogContext?.route || '');
const dialogParams = computed(() => baseData.value?.params || {});
const formattedParams = computed(() => JSON.stringify(dialogParams.value, null, 2));

async function closeDialog() {
  if (!dialogId.value) return;
  await callBase('dialogService', 'close', dialogId.value);
}
</script>

<style scoped>
.dialog-content-demo {
  min-height: 100%;
  padding: 20px;
  background: #f5f7fa;
  color: #303133;
}

.dialog-content-demo__banner {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
  border: 1px solid #a0cfff;
  border-radius: 8px;
  background: #ecf5ff;
  color: #409eff;
}

.dialog-content-demo__banner span {
  color: #606266;
  font-size: 13px;
}

.dialog-content-demo__details {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin: 16px 0;
}

.dialog-content-demo__details div {
  padding: 12px;
  border-radius: 6px;
  background: #fff;
}

.dialog-content-demo__details dt {
  margin-bottom: 5px;
  color: #909399;
  font-size: 12px;
}

.dialog-content-demo__details dd {
  margin: 0;
  color: #303133;
  font-size: 13px;
  word-break: break-all;
}

.dialog-content-demo__json {
  min-height: 90px;
  margin: 0;
  padding: 12px;
  overflow: auto;
  border-radius: 6px;
  background: #1e1e1e;
  color: #d4d4d4;
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
}

.dialog-content-demo__actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}
</style>
