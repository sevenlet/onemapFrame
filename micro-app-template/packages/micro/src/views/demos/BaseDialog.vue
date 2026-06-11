<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║ 弹窗演示：iframe 内 vs 基座（穿透 iframe 沙箱）
  ║
  ║ 场景：
  ║   子应用在 iframe 沙箱里，<el-dialog> 默认 append 到 iframe 自己的 body，
  ║   只能覆盖子应用区域 —— 超出 iframe 范围会被裁掉。
  ║
  ║   想要弹窗覆盖整个浏览器，必须让基座来渲染：
  ║     callBase('showDialog', { componentName, props, ... })
  ║
  ║ 子应用代码：
  ║   import { useBaseBridge } from '@/bridge.js'
  ║   const { callBase } = useBaseBridge()
  ║   const result = await callBase('showDialog', {
  ║     componentName: 'XxxDialog',  // 基座侧已注册的组件名
  ║     title: '标题',
  ║     width: '600px',
  ║     props: { ... },              // 透传给组件的 props
  ║   })
  ║   // 用户关闭弹窗时，基座弹窗内 emit('close', result) → 子应用拿到 result
  ║
  ║ 基座代码：
  ║   const dialogComponents = {
  ║     XxxDialog: markRaw(XxxDialog),  // 注册可弹的组件
  ║   }
  ║   registerMethod('showDialog', (config) => {
  ║     // ...打开 <el-dialog>，渲染 dialogComponents[config.componentName]
  ║     return new Promise(resolve => { ... })  // 关闭时 resolve 回传值
  ║   })
  ║
  ║ 注意事项：
  ║   • props 只能传可序列化数据 —— 函数、Vue 实例、DOM 都会丢
  ║   • componentName 必须是基座侧 dialogComponents 已注册的，
  ║     否则会显示「未注册的弹窗组件名」提示
  ║   • 弹窗内组件的样式由基座负责，子应用不要传 :is="组件实例"
  ╚══════════════════════════════════════════════════════════════╝
-->
<template>
  <div class="page">
    <header class="page-head">
      <router-link to="/home" class="back">← 返回总览</router-link>
      <h2>🎯 弹窗演示：iframe 内 vs 基座</h2>
    </header>

    <el-card class="card">
      <template #header><strong>对比 3 种弹窗方式</strong></template>
      <div class="button-row">
        <el-button @click="showInlineDialog">
          ① iframe 内弹窗（被沙箱框住）
        </el-button>
        <el-button type="primary" @click="showBaseDialog">
          ② 基座渲染（覆盖整个浏览器）
        </el-button>
        <el-button type="success" @click="showRegionPicker">
          ③ 基座渲染 + 回传选中值
        </el-button>
      </div>

      <div v-if="dialogResult" class="result-box">
        <strong>📦 收到基座弹窗的返回值：</strong>
        <pre>{{ JSON.stringify(dialogResult, null, 2) }}</pre>
      </div>

      <p class="hint">
        💡 点 ① 你会看到弹窗只在子应用区域内显示，超出部分被 iframe 裁掉。<br>
        💡 点 ② / ③ 弹窗能覆盖整个浏览器 —— 因为是基座渲染的。<br>
        💡 ③ 还演示了从基座弹窗拿到返回值后再 setGlobalData() 的联动。
      </p>
    </el-card>

    <!-- ① iframe 内的弹窗 —— el-dialog 默认 append-to-body=true，
         但这个 body 是 iframe 自己的 body，被沙箱框住 -->
    <el-dialog
      v-model="inlineVisible"
      title="iframe 内弹窗（受沙箱限制）"
      width="500px"
    >
      <div class="inline-banner">
        <strong>⚠️ 我在子应用 iframe 内部渲染</strong>
        <p>
          虽然 <code>append-to-body=true</code>，但 body 是
          <strong>iframe 自己的 body</strong>，不是浏览器主文档 body，
          所以无法越过 iframe 边界。
        </p>
        <p>当前 window：<code>{{ currentWindowInfo }}</code></p>
      </div>
      <template #footer>
        <el-button @click="inlineVisible = false">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElCard, ElButton, ElDialog } from 'element-plus';
import { useBaseBridge, useGlobalData, useGlobalDataKey, setGlobalData } from '@/bridge.js';

const { callBase } = useBaseBridge();
const { globalData } = useGlobalData();
const gRegionCode = useGlobalDataKey('regionaQuery.regionCode');

const currentWindowInfo = `${window.location.host}（子应用 iframe window）`;
const inlineVisible = ref(false);
const dialogResult = ref(null);

// ① iframe 内的弹窗：被沙箱框住
function showInlineDialog() {
  inlineVisible.value = true;
}

// ② 通过 callBase 让基座渲染一个示例弹窗
async function showBaseDialog() {
  dialogResult.value = null;
  const result = await callBase('showDialog', {
    componentName: 'DemoDialogContent',  // 基座 dialogComponents 里注册的组件
    title: '基座渲染的弹窗（覆盖整个浏览器）',
    width: '640px',
    props: {
      // ⚠️ 只能传可序列化数据，函数 / Vue 实例 / DOM 都会丢失
      message: `Hello from 子应用 @ ${new Date().toLocaleTimeString()}`,
      count: Math.floor(Math.random() * 100),
    },
  });
  // 基座弹窗内组件 emit('close', data) 时，这里收到 data
  dialogResult.value = result;
}

// ③ 业务弹窗：区域选择 → 拿到结果后联动 globalData
async function showRegionPicker() {
  dialogResult.value = null;
  const region = await callBase('showDialog', {
    componentName: 'RegionPickerDialog',
    title: '请选择区域',
    width: '480px',
    props: {
      regions: [
        { code: '350100000000', name: '福州市' },
        { code: '350200000000', name: '厦门市' },
        { code: '350800000000', name: '龙岩市' },
        { code: '350700000000', name: '南平市' },
      ],
      defaultCode: gRegionCode.value || '',
    },
  });
  dialogResult.value = region;

  // 拿到选中区域后，同步到 globalData，所有子应用都能看到
  if (region) {
    setGlobalData({
      regionaQuery: {
        ...(globalData.value?.regionaQuery || {}),
        regionCode: region.code,
        regionName: region.name,
      },
    });
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
.button-row { display: flex; gap: 8px; flex-wrap: wrap; }
.hint { margin-top: 12px; padding: 10px 12px; background: #f5f7fa; border-radius: 4px; font-size: 12px; color: #909399; line-height: 1.8; }
code { background: rgba(64, 158, 255, 0.1); color: #409eff; padding: 1px 5px; border-radius: 3px; font-size: 11px; }
.result-box {
  margin-top: 12px; padding: 12px;
  background: #f0f9eb; border: 1px solid #67c23a; border-radius: 4px;
  font-size: 12px;
}
.result-box pre { margin: 8px 0 0 0; white-space: pre-wrap; word-break: break-all; font-family: ui-monospace, monospace; font-size: 11px; }
.inline-banner {
  border: 3px dashed #e6a23c; background: #fdf6ec;
  padding: 16px; border-radius: 6px; color: #e6a23c;
}
.inline-banner strong { font-size: 15px; display: block; margin-bottom: 8px; }
.inline-banner p { font-size: 13px; color: #606266; line-height: 1.6; margin: 4px 0 0 0; }
.inline-banner code { background: rgba(230, 162, 60, 0.15); color: #e6a23c; }
</style>
