<template>
  <div class="page">
    <div class="page-header">
      <h1>🎯 微应用 - 首页</h1>
      <nav class="nav">
        <router-link to="/home" class="nav-item">首页</router-link>
        <router-link to="/about" class="nav-item">关于</router-link>
      </nav>
    </div>

    <!-- 运行模式提示 -->
    <el-alert
      v-if="isEmbedded"
      title="当前在基座中运行（嵌入模式）"
      type="success"
      :closable="false"
      style="margin-bottom: 16px;"
    />
    <el-alert
      v-else
      title="当前独立运行（与基座解耦，方便单独调试）"
      type="warning"
      :closable="false"
      style="margin-bottom: 16px;"
    />

    <!-- ===== 区块 1：基座定向数据（data/datachange）===== -->
    <el-card class="card">
      <template #header>
        <strong>📥 通道①：基座定向数据（hostData）</strong>
      </template>
      <div class="data-row">
        <span class="data-label">userName:</span>
        <strong>{{ hostData.userName || '—' }}</strong>
      </div>
      <div class="data-row">
        <span class="data-label">theme:</span>
        <strong>{{ hostData.theme || '—' }}</strong>
      </div>
      <div class="data-row">
        <span class="data-label">token:</span>
        <code>{{ hostData.token || '—' }}</code>
      </div>
      <p class="hint">
        💡 在基座顶部点「切换用户 / 切换主题」，这里会实时更新。
      </p>
    </el-card>

    <!-- ===== 区块 2：全局共享数据（globalData）===== -->
    <el-card class="card card-blue">
      <template #header>
        <strong>🌐 通道③：全局共享数据（globalData）</strong>
      </template>
      <div class="grid-2col">
        <div class="field-cell">
          <span class="key">regionaQuery.regionName</span>
          <strong>{{ gRegionName ?? '—' }}</strong>
        </div>
        <div class="field-cell">
          <span class="key">regionaQuery.regionCode</span>
          <strong>{{ gRegionCode ?? '—' }}</strong>
        </div>
        <div class="field-cell">
          <span class="key">activeTheme</span>
          <strong>{{ gActiveTheme ?? '—' }}</strong>
        </div>
        <div class="field-cell">
          <span class="key">socketRoom</span>
          <strong>{{ gSocketRoom ?? '—' }}</strong>
        </div>
        <div class="field-cell">
          <span class="key">serviceBaseUrl</span>
          <strong>{{ gServiceBaseUrl ?? '—' }}</strong>
        </div>
        <div class="field-cell">
          <span class="key">appId</span>
          <strong>{{ gAppId ?? '—' }}</strong>
        </div>
      </div>
      <div class="button-row" style="margin-top: 12px;">
        <el-button type="primary" plain @click="setDemoGlobalData">
          setGlobalData({ activeTheme: '蓝色版' })
        </el-button>
        <el-button type="primary" plain @click="changeGlobalRegionCode">
          setGlobalData({ regionaQuery.regionCode: '350800000000' })
        </el-button>
      </div>
    </el-card>

    <!-- ===== 区块 3：发消息给基座（dispatch）===== -->
    <el-card class="card">
      <template #header>
        <strong>📤 通道②：向基座发消息（dispatch + RPC）</strong>
      </template>
      <el-form :inline="true" label-width="60px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" placeholder="姓名" />
        </el-form-item>
        <el-form-item label="城市">
          <el-input v-model="form.city" placeholder="城市" />
        </el-form-item>
      </el-form>
      <div class="button-row">
        <el-button type="primary" @click="submitForm">
          通知基座（form-submit）
        </el-button>
        <el-button @click="sendLog">
          发送日志（log）
        </el-button>
        <el-button type="success" @click="callShowToast">
          callHost('showToast')
        </el-button>
        <el-button type="warning" @click="callNavigate">
          callHost('navigate', '/some-path')
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import {
  ElCard, ElButton, ElForm, ElFormItem, ElInput, ElAlert,
} from 'element-plus';
import { useHostBridge, useGlobalData, useGlobalDataKey, setGlobalData } from '@/bridge.js';

// 通道①：定向数据
const { hostData, sendToHost, callHost } = useHostBridge();
const isEmbedded = computed(() => !!window.__MICRO_APP_ENVIRONMENT__);

// 通道③：全局共享数据
const { globalData } = useGlobalData();

// 使用 useGlobalDataKey 单独订阅单个字段
const gRegionName = useGlobalDataKey('regionaQuery.regionName');
const gRegionCode = useGlobalDataKey('regionaQuery.regionCode');
const gActiveTheme = useGlobalDataKey('activeTheme');
const gSocketRoom = useGlobalDataKey('socketRoom');
const gServiceBaseUrl = useGlobalDataKey('serviceBaseUrl');
const gAppId = useGlobalDataKey('appId');

function setDemoGlobalData() {
  setGlobalData({ activeTheme: '蓝色版' });
}
function changeGlobalRegionCode() {
  // 注意：micro-app 的 setGlobalData 是整体替换，所以得把 regionaQuery 整个带上
  const current = globalData.value?.regionaQuery || {};
  setGlobalData({
    regionaQuery: {
      ...current,
      regionCode: '350800000000',
      regionName: '龙岩市',
    },
  });
}

// 通道②：dispatch 消息
const form = reactive({ name: '', city: '' });

function submitForm() {
  sendToHost({ type: 'form-submit', payload: { ...form } });
}
function sendLog() {
  sendToHost({ type: 'log', payload: ['微应用日志', { ts: Date.now() }] });
}
function callShowToast() {
  callHost('showToast', `来自微应用 @ ${new Date().toLocaleTimeString()}`);
}
function callNavigate() {
  callHost('navigate', '/some-path');
}
</script>

<style scoped>
.page { padding: 16px 24px; max-width: 960px; margin: 0 auto; }
.page-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.page-header h1 { font-size: 20px; color: #303133; }
.nav { display: flex; gap: 4px; }
.nav-item { padding: 4px 12px; color: #606266; text-decoration: none; border-radius: 4px; font-size: 14px; }
.nav-item.router-link-active { color: #fff; background: #409eff; }
.card { margin-bottom: 16px; }
.grid-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.field-cell {
  display: flex; align-items: center; justify-content: space-between;
  padding: 6px 10px; background: #f5f7fa; border-radius: 4px; font-size: 13px;
}
.field-cell .key { color: #909399; font-family: ui-monospace, SFMono-Regular, monospace; }
.field-cell strong { color: #303133; }
.data-row { display: flex; align-items: center; gap: 8px; padding: 4px 0; font-size: 14px; }
.data-label { color: #909399; width: 100px; display: inline-block; }
.button-row { display: flex; gap: 8px; flex-wrap: wrap; }
.hint { margin-top: 12px; padding: 8px 12px; background: #f5f7fa; border-radius: 4px; font-size: 12px; color: #909399; }
code { background: #f0f2f5; padding: 2px 6px; border-radius: 3px; font-size: 12px; color: #e6a23c; }
.card-blue .el-card__header {
  background: linear-gradient(90deg, #f0f9ff, #f0f5ff);
}
</style>