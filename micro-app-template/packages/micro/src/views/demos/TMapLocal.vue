<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║ 微应用自带地图 —— 内嵌真实 <TGisMap> 组件
  ║
  ║ 场景：微应用自己就要一张地图，不依赖基座。
  ║
  ║ 子应用代码：
  ║   import TGisMap from '@ths/design/es/components/gis-map/index.js'
  ║   <TGisMap ref="mapRef" :map-config="cfg" @ready @view-change @click />
  ║   mapRef.value.TMap.goTo({ center: { x: 119.296, y: 26.074 }, level: 11 })
  ║   mapRef.value.Layer.setVisibility('demo-points', false)
  ║   mapRef.value.Control.setWidgetVisibility('zoom', false)
  ║
  ║ 命名空间 API 取自 @ths-map-sdk/map：TMap / Layer / Control / SpatialAnalysis / GlobalAddress / Tool
  ║ （<TGisMap> 通过 expose 把这些 namespace 透出来，flat API 也一并暴露）
  ║
  ║ 注意：
  ║   • 直连子路径 import 绕开 @ths/design 主入口（主入口副作用 import 全组件，
  ║     连带 highcharts/echarts/three 等 peerDep 进图，tree-shaking 因 CSS 副作用无法剔除）
  ║   • TMap.addLayer(type, config) 是两个参数：图层类型 + 配置
  ║   • goTo 用 { center:{x,y}, level }（对象坐标 + level），不是 [lng,lat] 数组
  ║   • 默认底图天地图，需 token/内网才出瓦片；无瓦片时容器仍挂载、API 仍可用
  ╚══════════════════════════════════════════════════════════════╝
-->
<template>
  <div class="page">
    <header class="page-head">
      <router-link to="/home" class="back">← 返回总览</router-link>
      <h2>🗺️ 微应用自带地图（真实 &lt;TGisMap&gt; 组件）</h2>
    </header>

    <el-card class="card">
      <template #header>
        <strong>内嵌真实 &lt;TGisMap&gt;，mapRef.value.TMap / .Layer / .Control 直调</strong>
      </template>

      <div class="map-wrap">
        <TGisMap
          ref="realMapRef"
          :map-config="miniConfig"
          style="height: 420px"
          @ready="onReady"
          @view-change="onViewChange"
          @click="onMapClick"
          @error="onErr"
        />
      </div>

      <!-- 实时状态：组件事件回显 -->
      <div v-if="viewState || clickInfo" class="state-row">
        <span v-if="viewState" class="state-item">
          📍 视图：zoom={{ viewState.zoom }}，center={{ viewState.center }}
        </span>
        <span v-if="clickInfo" class="state-item">
          🖱️ 点击：{{ clickInfo.coordinate }}
        </span>
      </div>

      <!-- TMap 命名空间 -->
      <div class="btn-group">
        <div class="btn-label">TMap 命名空间</div>
        <el-button size="small" type="primary" :disabled="!ready" @click="realGoTo('fuzhou')">定位福州 (goTo)</el-button>
        <el-button size="small" type="primary" :disabled="!ready" @click="realGoTo('beijing')">定位北京 (goTo)</el-button>
        <el-button size="small" :disabled="!ready" @click="realZoomIn">放大 (zoom 1)</el-button>
        <el-button size="small" :disabled="!ready" @click="realZoomOut">缩小 (zoom -1)</el-button>
        <el-button size="small" :disabled="!ready" @click="realGetCenter">getCenter</el-button>
        <el-button size="small" :disabled="!ready" @click="realGetLevel">getLevel</el-button>
        <el-button size="small" :disabled="!ready" @click="realGetExtent">getExtent</el-button>
      </div>

      <!-- Layer 命名空间（先 addLayer） -->
      <div class="btn-group">
        <div class="btn-label">Layer 命名空间（先点 addLayer）</div>
        <el-button size="small" type="success" :disabled="!ready" @click="realAddLayer">addLayer('Vector', 点图层)</el-button>
        <el-button size="small" :disabled="!ready" @click="layerHide">setVisibility(false)</el-button>
        <el-button size="small" :disabled="!ready" @click="layerShow">setVisibility(true)</el-button>
        <el-button size="small" :disabled="!ready" @click="layerOpacity">setOpacity(0.5)</el-button>
        <el-button size="small" :disabled="!ready" @click="layerClear">clear</el-button>
        <el-button size="small" type="danger" :disabled="!ready" @click="realRemoveLayer">removeLayer</el-button>
      </div>

      <!-- Control 命名空间 -->
      <div class="btn-group">
        <div class="btn-label">Control 命名空间</div>
        <el-button size="small" :disabled="!ready" @click="controlHideZoom">隐藏缩放微件 (setWidgetVisibility)</el-button>
        <el-button size="small" :disabled="!ready" @click="controlShowZoom">显示缩放微件</el-button>
      </div>

      <div v-if="realResult !== null" class="result-box">
        <strong>📦 调用结果：</strong>
        <pre>{{ typeof realResult === 'object' ? JSON.stringify(realResult, null, 2) : String(realResult) }}</pre>
      </div>
      <div v-if="realError" class="error-box">
        <strong>❌ 错误：</strong> {{ realError }}
      </div>

      <p class="hint">
        💡 真实组件直接在微应用内渲染，无需基座。<code>TMap.addLayer('Vector', config)</code> 是两参数；<code>goTo</code> 用 <code>{center:{x,y}, level}</code>。<br>
        💡 底图为天地图，需 token/内网出瓦片；无瓦片时 API 交互仍生效。命名空间 API 取自 <code>@ths-map-sdk/map</code>。
      </p>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElCard, ElButton } from 'element-plus';
// 直连 gis-map 子路径导入，绕开 @ths/design 主入口（主入口会副作用 import 全部组件，
// 连带 highcharts/echarts/three 等 peerDep 进图，tree-shaking 因组件内 CSS 副作用无法剔除）。
// gis-map 仅依赖 @ths-map-sdk/* + ol，不拉其它组件。
import TGisMap from '@ths/design/es/components/gis-map/index.js';

const realMapRef = ref(null);
const ready = ref(false);
const realResult = ref(null);
const realError = ref('');
const viewState = ref(null);   // @view-change → { center, zoom, extent }
const clickInfo = ref(null);   // @click → { coordinate, pixel }

// 最小地图配置：福州为中心 + 天地图底图 + 仅 zoom/scalebar 微件
// ⚠️ 天地图底图需 token/内网才出瓦片；无瓦片时容器仍挂载、API 仍可用
const miniConfig = {
  center: [119.296, 26.074],   // [lng, lat]
  zoom: 10,
  minZoom: 3,
  maxZoom: 18,
  projection: 'EPSG:4326',
  basemaps: [
    { type: 'tianditumercator', id: 'vec', label: '普通地图', visible: true },
    { type: 'tianditusatellitemercator', id: 'img', label: '影像地图', visible: false },
  ],
  widgets: [
    { type: 'Zoom', id: 'zoom', position: { top: 16, left: 16 } },
    { type: 'Scalebar', id: 'scalebar', position: { left: 16, bottom: 16 } },
  ],
  controls: ['zoom', 'scale'],
  theme: 'light',
};

function onReady(engine) {
  ready.value = true;
  realResult.value = '地图就绪：TMap / Layer / Control 命名空间已可用';
  // eslint-disable-next-line no-console
  console.log('[TMapLocal] map ready, engine =', engine);
}
function onErr(err) {
  realError.value = String(err?.message || err);
}
function onViewChange(payload) {
  viewState.value = payload;
}
function onMapClick(payload) {
  clickInfo.value = payload;
}

// 统一包装：同步/异步调用 + 结果/错误回显
async function runReal(label, fn) {
  realError.value = '';
  try {
    const r = await fn();
    realResult.value = r === undefined || r === null ? `${label} 已执行` : r;
  } catch (err) {
    realResult.value = null;
    realError.value = String(err?.message || err);
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

// TMap 命名空间：goTo 定位（center 用 {x,y} 对象、level 表级别）
function realGoTo(city) {
  const targets = {
    fuzhou: { center: { x: 119.296, y: 26.074 }, level: 11 },
    beijing: { center: { x: 116.397, y: 39.908 }, level: 10 },
  };
  runReal(`goTo ${city}`, () => realMapRef.value.TMap.goTo(targets[city]));
}
function realZoomIn()  { runReal('zoom +1',  () => realMapRef.value.TMap.zoom(1)); }
function realZoomOut() { runReal('zoom -1',  () => realMapRef.value.TMap.zoom(-1)); }
function realGetCenter() { runReal('getCenter', () => realMapRef.value.TMap.getCenter()); }
function realGetLevel()  { runReal('getLevel',  () => realMapRef.value.TMap.getLevel()); }
function realGetExtent() { runReal('getExtent', () => realMapRef.value.TMap.getExtent()); }

// TMap.addLayer(type, config) —— 注意是两个参数：图层类型 + 配置
function realAddLayer() {
  runReal("addLayer('Vector')", () =>
    realMapRef.value.TMap.addLayer('Vector', {
      id: LAYER_ID,
      geometryType: 'point',
      dataSource: { type: 'GeoJSON', data: pointFeatures },
    })
  );
}
function realRemoveLayer() {
  runReal('removeLayer', () => realMapRef.value.TMap.removeLayer(LAYER_ID));
}

// Layer 命名空间：图层显隐 / 透明度 / 清空
function layerHide()    { runReal('Layer.setVisibility false', () => realMapRef.value.Layer.setVisibility(LAYER_ID, false)); }
function layerShow()    { runReal('Layer.setVisibility true',  () => realMapRef.value.Layer.setVisibility(LAYER_ID, true)); }
function layerOpacity() { runReal('Layer.setOpacity 0.5',      () => realMapRef.value.Layer.setOpacity(LAYER_ID, 0.5)); }
function layerClear()   { runReal('Layer.clear',               () => realMapRef.value.Layer.clear(LAYER_ID)); }

// Control 命名空间：隐藏/显示缩放微件
function controlHideZoom() { runReal('Control.setWidgetVisibility zoom false', () => realMapRef.value.Control.setWidgetVisibility('zoom', false)); }
function controlShowZoom() { runReal('Control.setWidgetVisibility zoom true',  () => realMapRef.value.Control.setWidgetVisibility('zoom', true)); }
</script>

<style scoped>
.page { padding: 16px 24px; max-width: 900px; margin: 0 auto; }
.page-head { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
.page-head h2 { font-size: 18px; color: #303133; }
.back { color: #409eff; text-decoration: none; font-size: 13px; }
.back:hover { text-decoration: underline; }
.card { margin-bottom: 12px; }

.map-wrap { border: 1px solid #e4e7ed; border-radius: 4px; overflow: hidden; background: #f5f7fa; }
.state-row { display: flex; gap: 16px; flex-wrap: wrap; margin: 10px 0; font-size: 12px; color: #606266; }
.state-item { background: #f5f7fa; padding: 4px 8px; border-radius: 3px; }

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
