<!--
  跟随宿主主题名换肤（微应用自维护样式）
  只读 activeTheme，样式自维护，不依赖 LEGO CSS 变量。
-->
<template>
  <div class="micro-theme-root page" :data-theme="resolvedThemeKey">
    <header class="page-head">
      <router-link to="/home" class="back">← 返回总览</router-link>
      <h2>跟随宿主主题名换肤</h2>
    </header>

    <el-card class="card">
      <template #header><strong>当前主题状态</strong></template>
      <div class="row">
        <span class="key">宿主主题名</span>
        <strong>{{ hostThemeName || '（未下发，使用 default）' }}</strong>
      </div>
      <div class="row">
        <span class="key">微应用 theme key</span>
        <code>{{ resolvedThemeKey }}</code>
      </div>
      <p class="hint">
        生产：LEGO 顶栏换肤后本页自动跟随。只订阅 activeTheme，样式由 themes.css 维护。
      </p>
    </el-card>

    <el-card class="card">
      <template #header><strong>业务 UI 示意（随主题变色）</strong></template>
      <div class="preview">
        <div class="preview-banner">微应用业务面板</div>
        <p class="preview-text">
          主色、背景、文字、边框来自微应用 --micro-* 变量，与 LEGO 壳子变量无关。
        </p>
        <div class="preview-actions">
          <button type="button" class="btn primary">主按钮</button>
          <button type="button" class="btn ghost">次要按钮</button>
          <span class="tag success">正常</span>
          <span class="tag warning">告警</span>
        </div>
        <div class="metric-grid">
          <div class="metric">
            <span class="metric-label">AQI</span>
            <strong class="metric-value">62</strong>
          </div>
          <div class="metric">
            <span class="metric-label">PM2.5</span>
            <strong class="metric-value">28</strong>
          </div>
          <div class="metric">
            <span class="metric-label">站点</span>
            <strong class="metric-value">128</strong>
          </div>
        </div>
      </div>
    </el-card>

    <el-card class="card">
      <template #header><strong>模拟宿主换肤（独立调试）</strong></template>
      <div class="button-row">
        <el-button
          v-for="item in simulateThemeOptions"
          :key="item.hostName"
          size="small"
          :type="hostThemeName === item.hostName ? 'primary' : 'default'"
          @click="simulateHostThemeChange(item.hostName)"
        >
          {{ item.hostName }}
        </el-button>
      </div>
      <p class="hint">通过 setGlobalData({ activeTheme }) 模拟宿主推送。</p>
    </el-card>

    <el-card class="card">
      <template #header><strong>接入片段</strong></template>
      <pre class="code-block">{{ usageSnippet }}</pre>
    </el-card>
  </div>
</template>

<script setup>
import { ElCard, ElButton } from 'element-plus';
import { setGlobalData } from '@/bridge.js';
import { useHostTheme } from '@/theme/useHostTheme.js';
import '@/theme/themes.css';

const { hostThemeName, resolvedThemeKey } = useHostTheme();

const simulateThemeOptions = [
  { hostName: '默认主题' },
  { hostName: '墨绿色版' },
  { hostName: 'PC浅色版' },
  { hostName: '蓝色版' },
  { hostName: '绿色版' },
];

function simulateHostThemeChange(themeName) {
  setGlobalData({
    activeTheme: themeName,
    theme: themeName,
  });
}

const usageSnippet = [
  "import { useHostTheme } from '@/theme/useHostTheme.js'",
  "import '@/theme/themes.css'",
  '',
  'const { hostThemeName, resolvedThemeKey } = useHostTheme()',
  '',
  '// <div class="micro-theme-root" :data-theme="resolvedThemeKey">',
  '//   宿主主题：{{ hostThemeName }}',
  '//   使用 var(--micro-primary) 等',
  '// </div>',
].join('\\n');
</script>

<style scoped>
.page {
  min-height: 100%;
  padding: 16px 24px;
  max-width: 860px;
  margin: 0 auto;
  background: var(--micro-bg);
  color: var(--micro-text);
  transition: background-color 0.2s ease, color 0.2s ease;
}
.page-head {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}
.page-head h2 {
  font-size: 18px;
  color: var(--micro-text);
}
.back {
  color: var(--micro-primary);
  text-decoration: none;
  font-size: 13px;
}
.back:hover { text-decoration: underline; }
.card {
  margin-bottom: 12px;
  background: var(--micro-surface) !important;
  border-color: var(--micro-border) !important;
  color: var(--micro-text);
  box-shadow: var(--micro-card-shadow);
}
.card :deep(.el-card__header) {
  border-bottom-color: var(--micro-border);
  color: var(--micro-text);
}
.row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px dashed var(--micro-border);
  font-size: 14px;
}
.row:last-of-type { border-bottom: none; }
.key {
  width: 140px;
  color: var(--micro-text-secondary);
  font-family: ui-monospace, monospace;
  font-size: 12px;
}
.hint {
  margin-top: 12px;
  padding: 8px 12px;
  background: var(--micro-primary-soft);
  border-radius: 4px;
  font-size: 12px;
  color: var(--micro-text-secondary);
  line-height: 1.7;
}
code {
  background: var(--micro-primary-soft);
  color: var(--micro-primary);
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
}
.preview {
  border: 1px solid var(--micro-border);
  border-radius: 8px;
  overflow: hidden;
  background: var(--micro-bg);
}
.preview-banner {
  padding: 12px 16px;
  background: var(--micro-primary);
  color: #fff;
  font-weight: 600;
  font-size: 14px;
}
.preview-text {
  margin: 0;
  padding: 14px 16px 8px;
  font-size: 13px;
  line-height: 1.7;
  color: var(--micro-text-secondary);
}
.preview-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 8px 16px 16px;
}
.btn {
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 6px 14px;
  font-size: 13px;
  cursor: pointer;
}
.btn.primary {
  background: var(--micro-primary);
  color: #fff;
}
.btn.ghost {
  background: transparent;
  border-color: var(--micro-border);
  color: var(--micro-text);
}
.tag {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
}
.tag.success {
  background: color-mix(in srgb, var(--micro-success) 20%, transparent);
  color: var(--micro-success);
}
.tag.warning {
  background: color-mix(in srgb, var(--micro-warning) 20%, transparent);
  color: var(--micro-warning);
}
.metric-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 0 16px 16px;
}
.metric {
  background: var(--micro-surface);
  border: 1px solid var(--micro-border);
  border-radius: 6px;
  padding: 10px 12px;
}
.metric-label {
  display: block;
  font-size: 12px;
  color: var(--micro-text-secondary);
  margin-bottom: 4px;
}
.metric-value {
  font-size: 20px;
  color: var(--micro-text);
}
.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.code-block {
  margin: 0;
  padding: 12px;
  border-radius: 4px;
  background: var(--micro-bg);
  border: 1px solid var(--micro-border);
  color: var(--micro-text);
  font-size: 12px;
  line-height: 1.6;
  overflow: auto;
  white-space: pre-wrap;
}
</style>
