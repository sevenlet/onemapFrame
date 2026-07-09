<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║ 操作基座地图 —— 拿基座 mapRef 直调（baseData / globalData 两个通道）
  ║
  ║ 场景：地图在基座里（基座 <TGisMap ref="mapRef">），基座 @ready 后把 mapRef
  ║       下发给微应用；微应用直接读 mapRef 调方法。地图可能不止一张，基座按需下发多个。
  ║
  ║ 子应用代码：
  ║   import { useBaseBridge, useGlobalData } from '@/bridge.js'
  ║   const { baseData } = useBaseBridge()
  ║   const { globalData } = useGlobalData()
  ║   // 两个通道都试：baseData（定向下发）兜底 globalData（全局共享）
  ║   const mapRef = computed(() => baseData.value?.mapRef || globalData.value?.mapRef)
  ║   mapRef.value.goTo({ center: { x: 119.296, y: 26.074 }, level: 11 })   // flat
  ║   mapRef.value.TMap.goTo(...)                                           // 命名空间
  ║   mapRef.value.Layer.setVisibility('xxx', false)
  ║   mapRef.value.Control.setWidgetVisibility('zoom', false)
  ║
  ║ 说明：
  ║   • 两个通道都按引用传活 mapRef（带 methods），跨源也走 micro-app 框架桥接，不需 RPC
  ║   • baseData（:data / setData）是基座对单个微应用的定向下发；
  ║     globalData（setGlobalData）是所有微应用共享的全局变量
  ║   • **dev 弹窗 / 跨源场景建议基座把 mapRef 放 globalData**：globalData 是全局共享，
  ║     任何微应用（含 dev 浮层弹窗、跨源 localhost 微应用）都能读到；baseData 在某些场景
  ║     （如 dev 弹窗是另一个微应用实例）可能拿不到。所以本 demo 两个通道都试。
  ║   • mapRef 的字段名以基座实际下发的为准 —— 默认读 mapRef，下方「字段名」可改
  ║   • 多地图时基座下发 maps = { main: ref1, sub: ref2 }，字段名改成 maps.main 之类
  ║   • mapRef 没就绪（基座没传 / 地图没加载完）→ 按钮禁用
  ║   • 这里的 API 和「微应用自带地图」demo 完全一样 —— 都是 <TGisMap> 实例暴露的方法
  ╚══════════════════════════════════════════════════════════════╝
-->
<template>
  <div class="page">
    <header class="page-head">
      <router-link to="/home" class="back">← 返回总览</router-link>
      <h2>🗺️ 操作基座地图（baseData.value.mapRef 直调）</h2>
    </header>

    <el-card class="card">
      <template #header>
        <strong>通过 data 通道拿基座 mapRef，直接调 &lt;TGisMap&gt; 的方法</strong>
      </template>

      <!-- 基座下发字段名 + 就绪状态 -->
      <div class="field-row">
        <span class="field-label">基座下发字段名：</span>
        <el-input v-model="fieldName" size="small" style="width: 160px;" placeholder="如 mapRef" />
        <el-tag v-if="ready" type="success" size="small">✅ mapRef 就绪</el-tag>
        <el-tag v-else type="info" size="small">⏳ 等基座下发 mapRef…</el-tag>
      </div>
      <p class="keys" v-if="baseDataKeys.length">
        baseData 当前字段：<code v-for="k in baseDataKeys" :key="k">{{ k }}</code>
      </p>

      <!-- TMap 命名空间 -->
      <div class="btn-group">
        <div class="btn-label">TMap 命名空间</div>
        <el-button size="small" type="primary" :disabled="!ready" @click="goTo('fuzhou')">定位福州 (goTo)</el-button>
        <el-button size="small" type="primary" :disabled="!ready" @click="goTo('beijing')">定位北京 (goTo)</el-button>
        <el-button size="small" :disabled="!ready" @click="zoomIn">放大 (zoom 1)</el-button>
        <el-button size="small" :disabled="!ready" @click="zoomOut">缩小 (zoom -1)</el-button>
        <el-button size="small" :disabled="!ready" @click="getCenter">getCenter</el-button>
        <el-button size="small" :disabled="!ready" @click="getLevel">getLevel</el-button>
        <el-button size="small" :disabled="!ready" @click="getExtent">getExtent</el-button>
      </div>

      <!-- Layer 命名空间（先 addLayer） -->
      <div class="btn-group">
        <div class="btn-label">Layer 命名空间（先点 addLayer）</div>
        <el-button size="small" type="success" :disabled="!ready" @click="addLayer">addLayer('Vector', 点图层)</el-button>
        <el-button size="small" :disabled="!ready" @click="layerHide">setVisibility(false)</el-button>
        <el-button size="small" :disabled="!ready" @click="layerShow">setVisibility(true)</el-button>
        <el-button size="small" :disabled="!ready" @click="layerOpacity">setOpacity(0.5)</el-button>
        <el-button size="small" :disabled="!ready" @click="layerClear">clear</el-button>
        <el-button size="small" type="danger" :disabled="!ready" @click="removeLayer">removeLayer</el-button>
      </div>

      <!-- Control 命名空间 -->
      <div class="btn-group">
        <div class="btn-label">Control 命名空间</div>
        <el-button size="small" :disabled="!ready" @click="controlHideZoom">隐藏缩放微件 (setWidgetVisibility)</el-button>
        <el-button size="small" :disabled="!ready" @click="controlShowZoom">显示缩放微件</el-button>
      </div>

      <div v-if="result !== null" class="result-box">
        <strong>📦 调用结果：</strong>
        <pre>{{ typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result) }}</pre>
      </div>
      <div v-if="error" class="error-box">
        <strong>❌ 错误：</strong> {{ error }}
      </div>

      <!-- 自由调用：任意方法名 -->
      <div class="btn-group">
        <div class="btn-label">自由调用（mapRef 上任意方法）</div>
        <el-form :inline="true" size="small">
          <el-form-item label="方法名">
            <el-input v-model="customMethod" placeholder="如 goTo" style="width: 140px;" />
          </el-form-item>
          <el-form-item label="参数(JSON)">
            <el-input v-model="customParams" placeholder='如 [{"center":{"x":119.296,"y":26.074},"level":11}]' style="width: 300px;" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :disabled="!ready" @click="callCustom">调用</el-button>
          </el-form-item>
        </el-form>
      </div>

      <p class="hint">
        💡 这里的 <code>mapRef</code> 是基座 <code>&lt;TGisMap&gt;</code> 实例的活引用，先读 <code>baseData</code>（定向下发）兜底 <code>globalData</code>（全局共享），不带翻译层、直接调。<br>
        💡 <strong>基座建议把 mapRef 放 globalData</strong>（<code>setGlobalData({ mapRef })</code>）：globalData 全局共享，dev 弹窗 / 跨源 localhost 微应用都能读到；只放 <code>:data</code> 的话 dev 弹窗可能拿不到。<br>
        💡 字段名以基座实际下发的为准；多地图时基座下发 <code>maps={id:ref}</code>，字段名改成 <code>maps.main</code> 之类。<br>
        💡 独立跑（无基座）时两个通道都空，mapRef 不可用，按钮禁用 —— 联调时接上基座即可。
      </p>
    </el-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ElCard, ElButton, ElForm, ElFormItem, ElInput, ElTag } from 'element-plus';
import { useGlobalData, useBaseBridge } from '@/bridge.js';

const { baseData } = useBaseBridge();
const { globalData } = useGlobalData();

// 基座下发的字段名 —— 默认 mapRef，可改成基座实际下发的变量名
const fieldName = ref('mapRef');
// mapRef 活引用：先试 baseData（定向下发），兜底 globalData（全局共享，dev 弹窗/跨源更可靠）
// 两个都没有（独立跑 / 基座没传）→ undefined → 按钮禁用
const mapRef = computed(() => baseData.value?.[fieldName.value] || globalData.value?.[fieldName.value]);
const ready = computed(() => !!mapRef.value);
const baseDataKeys = computed(() => Object.keys({ ...(baseData.value || {}), ...(globalData.value || {}) }));

const result = ref(null);
const error = ref('');

// 统一包装：同步/异步调用 + 结果/错误回显
async function run(label, fn) {
  error.value = '';
  try {
    const r = await fn();
    result.value = r === undefined || r === null ? `${label} 已执行` : r;
  } catch (err) {
    result.value = null;
    error.value = String(err?.message || err);
  }
}

// 三个福州监测点 —— 标准 GeoJSON FeatureCollection
const pointFeatures = {
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', properties: { name: '监测点-五一广场' }, geometry: { type: 'Point', coordinates: [119.296, 26.074] } },
    { type: 'Feature', properties: { name: '监测点-仓山' }, geometry: { type: 'Point', coordinates: [119.270, 26.050] } },
    { type: 'Feature', properties: { name: '监测点-鼓山' }, geometry: { type: 'Point', coordinates: [119.400, 26.080] } },
  ],
};
const LAYER_ID = 'demo-points';

// TMap 命名空间
function goTo(city) {
  const targets = {
    fuzhou: { center: { x: 119.296, y: 26.074 }, level: 11 },
    beijing: { center: { x: 116.397, y: 39.908 }, level: 10 },
  };
  run(`goTo ${city}`, () => mapRef.value.TMap.goTo(targets[city]));
}
function zoomIn()   { run('zoom +1',  () => mapRef.value.TMap.zoom(1)); }
function zoomOut()  { run('zoom -1',  () => mapRef.value.TMap.zoom(-1)); }
function getCenter(){ run('getCenter', () => mapRef.value.TMap.getCenter()); }
function getLevel() { run('getLevel',  () => mapRef.value.TMap.getLevel()); }
function getExtent(){ run('getExtent', () => mapRef.value.TMap.getExtent()); }

// TMap.addLayer(type, config) —— 两个参数
function addLayer() {
  run("addLayer('Vector')", () =>
    mapRef.value.TMap.addLayer('Vector', {
      id: LAYER_ID,
      geometryType: 'point',
      dataSource: { type: 'GeoJSON', data: pointFeatures },
    })
  );
}
function removeLayer() { run('removeLayer', () => mapRef.value.TMap.removeLayer(LAYER_ID)); }

// Layer 命名空间
function layerHide()    { run('Layer.setVisibility false', () => mapRef.value.Layer.setVisibility(LAYER_ID, false)); }
function layerShow()    { run('Layer.setVisibility true',  () => mapRef.value.Layer.setVisibility(LAYER_ID, true)); }
function layerOpacity() { run('Layer.setOpacity 0.5',      () => mapRef.value.Layer.setOpacity(LAYER_ID, 0.5)); }
function layerClear()   { run('Layer.clear',               () => mapRef.value.Layer.clear(LAYER_ID)); }

// Control 命名空间
function controlHideZoom() { run('Control.setWidgetVisibility zoom false', () => mapRef.value.Control.setWidgetVisibility('zoom', false)); }
function controlShowZoom() { run('Control.setWidgetVisibility zoom true',  () => mapRef.value.Control.setWidgetVisibility('zoom', true)); }

// 自由调用：mapRef 上任意方法
const customMethod = ref('goTo');
const customParams = ref('[{"center":{"x":119.296,"y":26.074},"level":11}]');
function callCustom() {
  run(`mapRef.${customMethod.value}`, () => {
    let params = [];
    try {
      params = JSON.parse(customParams.value || '[]');
    } catch {
      throw new Error('参数 JSON 解析失败');
    }
    if (!Array.isArray(params)) throw new Error('参数必须是数组（每项作为一个 arg 传入）');
    const fn = mapRef.value[customMethod.value];
    if (typeof fn !== 'function') throw new Error(`mapRef.${customMethod.value} 不是函数`);
    return fn.apply(mapRef.value, params);
  });
}
</script>

<style scoped>
.page { padding: 16px 24px; max-width: 900px; margin: 0 auto; }
.page-head { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
.page-head h2 { font-size: 18px; color: #303133; }
.back { color: #409eff; text-decoration: none; font-size: 13px; }
.back:hover { text-decoration: underline; }
.card { margin-bottom: 12px; }

.field-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 6px; }
.field-label { font-size: 13px; color: #606266; }
.keys { font-size: 12px; color: #909399; margin: 4px 0 0 0; }
.keys code { margin-right: 6px; }

.btn-group { margin-top: 12px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.btn-label { font-size: 12px; color: #909399; width: 100%; margin-bottom: 2px; }

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
