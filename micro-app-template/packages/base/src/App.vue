<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║ 微前端调试基座 — 演示基座 ↔ 子应用的通信与地图能力共享       ║
  ║                                                              ║
  ║ ━━━━ 通道 ① 基座 → 子应用定向数据（baseData）━━━━━━━━━━━━ ║
  ║ const { data, setData, dataToChild } = useChildBridge('child');║
  ║                                                              ║
  ║ 写法 A：直接赋值，适合更新单个字段：                         ║
  ║   data.userName = '张三';                                   ║
  ║   data.theme = 'dark';                                      ║
  ║                                                              ║
  ║ 写法 B：setData 批量合并并推送，适合初始化或一次更新多字段： ║
  ║   setData({ userName: '张三', theme: 'dark', token: 'xxx' });║
  ║                                                              ║
  ║ 模板中通过 <micro-app :data="dataToChild" /> 下发；          ║
  ║ 子应用通过 useBaseBridge() 读取响应式 baseData。             ║
  ║                                                              ║
  ║ ━━━━ 通道 ② 子应用 → 基座（dispatch / RPC）━━━━━━━━━━━━━━ ║
  ║ 基座：registerHandler('xxx', payload => {}) 接收单向通知；    ║
  ║       registerMethod('xxx', (...args) => result) 注册 RPC；  ║
  ║ 子应用：sendToBase({ type: 'xxx', ...payload }) 发送通知；   ║
  ║         await callBase('xxx', ...args) 调用并等待返回值。    ║
  ║                                                              ║
  ║ ━━━━ 通道 ③ 全局共享数据（globalData）━━━━━━━━━━━━━━━━━━ ║
  ║ const { globalData, setGlobalData } = useGlobalData();       ║
  ║ 基座与所有子应用共用一份数据，任一方更新后其余应用可响应。  ║
  ║                                                              ║
  ║ ━━━━ 地图能力共享 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ║
  ║ TGisMap ready 后将 mapRef 同时下发到 baseData/globalData，  ║
  ║ 子应用可按需要获取地图实例；专题与图层状态由 Runtime 统一管理。║
  ╚══════════════════════════════════════════════════════════════╝
-->
<template>
  <div class="base-root">
    <!-- 顶部栏：演示数据下发 -->
    <header class="header">
      <div class="header-title">
        <h2>🌱 微前端调试基座</h2>
        <span class="badge">仅开发调试用</span>
      </div>
      <div class="header-actions">
        <span class="info-label">
          用户：<strong>{{ dataToChild.userName }}</strong>
        </span>
        <el-button size="small" @click="changeUser">切换用户</el-button>
        <span class="info-label" style="margin-left: 16px">
          主题：<strong>{{ dataToChild.theme }}</strong>
        </span>
        <el-button size="small" @click="toggleTheme">切换主题</el-button>
        <el-button size="small" type="primary" plain @click="batchUpdate">
          批量 setData 推送
        </el-button>
      </div>
    </header>

    <!-- 全局变量监视器：实时反映 microApp.globalData 中的字段 -->
    <section class="global-monitor">
      <div class="monitor-title">
        🔬 全局变量监视器（globalData） ── 子应用通过
        <code>microApp.setGlobalData()</code> 修改时这里会实时更新
      </div>
      <div class="monitor-grid">
        <div class="monitor-cell">
          <span class="key">regionaQuery.regionName</span>
          <strong>{{ regionName ?? "—" }}</strong>
        </div>
        <div class="monitor-cell">
          <span class="key">regionaQuery.regionCode</span>
          <strong>{{ regionCode ?? "—" }}</strong>
        </div>
        <div class="monitor-cell">
          <span class="key">activeTheme</span>
          <strong>{{ activeTheme ?? "—" }}</strong>
        </div>
        <div class="monitor-cell">
          <span class="key">socketRoom</span>
          <strong>{{ socketRoom ?? "—" }}</strong>
        </div>
        <div class="monitor-cell">
          <span class="key">appId</span>
          <strong>{{ appId ?? "—" }}</strong>
        </div>
        <div class="monitor-cell">
          <span class="key">serviceBaseUrl</span>
          <strong style="font-size: 11px">{{ serviceBaseUrl ?? "—" }}</strong>
        </div>
      </div>
    </section>

    <!-- 基座地图始终位于页面底层，并通过 mapRef 下发给微应用。 -->
    <section class="base-map-area">
      <TGisMap
        ref="baseMapRef"

        appID="507dafe62bd10c9ceebe65768595601a"
        
        
        resourceBaseUrl="http://192.168.0.202:7777/mapgo2.0/apps"
        :rulesByOrigin="{
            'http://localhost:3000': {
              'http://59.204.230.20:10047': 'https://120.35.30.208:10064'
            }
          }"
        @ready="onBaseMapReady"
        @error="onBaseMapErr"
        @destroy="onBaseMapDestroy"
      />
      <button
        v-if="baseMapEngine"
        ref="layerWidgetRef"
        class="map-layer-widget"
        title="打开图层面板"
        @click="openTopicLayers"
      >
        <span>▤</span><span>图层</span>
      </button>
      <TopicLayerPanel
        v-if="baseMapEngine"
        ref="topicLayerPanelRef"
        :map-adapter="topicLayerMapAdapter"
        :runtime="topicMapRuntime"
      />
    </section>

    <!-- 微应用右侧容器 -->
    <button
      v-if="microPanelCollapsed"
      class="micro-panel-toggle micro-panel-expand"
      title="展开微应用"
      @click="microPanelCollapsed = false"
    >
      ‹
    </button>
    <main v-else class="main-area">
      <button
        class="micro-panel-toggle"
        title="收起微应用"
        @click="microPanelCollapsed = true"
      >
        ›
      </button>
      <micro-app
        name="child"
        iframe
        :data="dataToChild"
        url="http://localhost:5175/"
        @datachange="handleChildData"
      />
    </main>

    <!-- 消息收件箱 -->
    <footer class="inbox">
      <div class="inbox-header">
        <span>📬 子应用消息（通过 dispatch 收到）</span>
        <el-button size="small" type="danger" plain @click="inbox.length = 0">
          清空
        </el-button>
      </div>
      <div class="inbox-body" ref="inboxRef">
        <div v-if="inbox.length === 0" class="inbox-empty">
          暂无消息 —— 在子应用中点「通知基座 / 调用基座方法」即可收到
        </div>
        <div v-for="(msg, i) in inbox" :key="i" class="inbox-item">
          <span class="inbox-time">{{ msg.time }}</span>
          <span class="inbox-tag">{{ msg.type }}</span>
          <code class="inbox-payload">{{
            JSON.stringify(msg.payload ?? msg)
          }}</code>
        </div>
      </div>
    </footer>

    <!-- ===== 弹窗（基座渲染，可以覆盖整个浏览器）===== -->
    <!--
      关键点：
      1. <el-dialog> 默认 append-to-body=true，会把弹窗挂到 document.body，
         不受 .main-area / micro-app iframe 的范围限制，能盖住整个浏览器
      2. 子应用通过 callBase('showDialog', {...}) 触发，本质是基座自己在渲染
      3. 子应用要弹哪个组件，就在 dialogComponents 注册表里加一个
    -->
    <el-dialog
      v-model="dialog.visible"
      :title="dialog.title"
      :width="dialog.width || '600px'"
      :modal="true"
      :append-to-body="true"
      @close="onDialogClose"
    >
      <!-- 按"组件名"渲染：dialogComponents[dialog.componentName] 是基座自己定义的组件 -->
      <component
        v-if="dialog.componentName && dialogComponents[dialog.componentName]"
        :is="dialogComponents[dialog.componentName]"
        v-bind="dialog.props"
        @close="closeDialog"
      />
      <!-- 没注册的组件名，给个友好提示 -->
      <div v-else-if="dialog.componentName" style="color: #f56c6c">
        ⚠️ 未注册的弹窗组件名：<code>{{ dialog.componentName }}</code
        ><br />
        请在 base/src/App.vue 的 <code>dialogComponents</code> 里注册。
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, computed, nextTick, markRaw } from "vue";
import { ElButton, ElDialog } from "element-plus";
import { useChildBridge, useGlobalData } from "./bridge.js";

// 弹窗里要显示的两个示例组件（基座自己定义，子应用按名字调）
import DemoDialogContent from "./dialogs/DemoDialogContent.vue";
import RegionPickerDialog from "./dialogs/RegionPickerDialog.vue";
// 基座内嵌的真实 <TGisMap>（直连子路径，绕开 @ths/design 主入口拉全组件 + heavy peers）
import TGisMap from "@ths/design/es/components/gis-map/index.js";
import { TopicLayerPanel } from "./features/topic-layer";
import {
  createMapAdapter,
  getTopicMapRuntime,
} from "@ths-map/topic-layer-runtime";
import { createTopicDataService } from "./features/topic-layer/services/topic-data.js";

// ===== 微前端通信 =====
// `child` 必须与模板中 <micro-app name="child"> 保持一致。
// data：可直接修改的定向数据；setData：合并并主动推送；
// registerHandler：接收单向通知；registerMethod：注册可由 callBase 调用的 RPC。
const {
  data,
  setData,
  dataToChild,
  handleChildData,
  registerHandler,
  registerMethod,
} = useChildBridge("child");

// 开发基座向子应用下发的初始数据。实际业务可替换为登录态或页面配置。
data.userName = "张三";
data.theme = "light";
data.token = "Bearer dev-token-abc123";
setData({
  appVersion: "1.0.0",
  initTimestamp: Date.now(),
  permissions: ["read", "write"],
  features: { darkMode: true, beta: false },
});

// ===== 地图与专题图层 =====
// 地图就绪后需要同时下发 mapRef 到定向数据和 globalData，因此在此处创建共享数据桥。
const { setGlobalData } = useGlobalData();
const baseMapRef = ref(null);
const baseMapEngine = ref(null);
const topicLayerPanelRef = ref(null);
const layerWidgetRef = ref(null);
const microPanelCollapsed = ref(false);
// Runtime 统一管理专题、图层状态；Adapter 负责把 Runtime 操作转为 MapGo 调用。
// 模板注入 topicDataService，正式应用应注入真实专题数据服务。
const topicLayerMapAdapter = createMapAdapter(baseMapEngine);
const topicDataService = createTopicDataService({
  getUserToken: () => data.token?.replace(/^Bearer\s+/i, ''),
});
const topicMapRuntime = getTopicMapRuntime({ dataService: topicDataService });
const overviewSceneLease = ref(null);
const NORMAL_SECTION_LAYER_ID = 'section-assessment-points';
const VERTICAL_ALARM_LAYER_ID = 'vertical-station-alarm-points';
const VERTICAL_STATION_LAYER_ID = 'vertical-station-points';
const OVERVIEW_SCENE = {
  appId: '0f63567b30f05c0740cb80d51b196583',
  config: {
    id: 'overview-analysis-scene',
    name: '总览分析',
    url: 'http://192.168.0.202:7777/mapgo2.0/preview.html?appID=0f63567b30f05c0740cb80d51b196583&appType=2D&appName=%E6%80%BB%E8%A7%88%E5%88%86%E6%9E%90',
  },
};

// 根据地图“图层”按钮位置打开图层面板。
function openTopicLayers() {
  const widget = layerWidgetRef.value?.getBoundingClientRect();
  topicLayerPanelRef.value?.openLayerPanel(
    widget
      ? {
          top: widget.top + widget.height - 52,
          right: window.innerWidth - widget.right,
        }
      : undefined,
  );
}

// TGisMap 初始化成功后绑定地图适配器，并下发可用地图实例。
async function onBaseMapReady(engine) {
  baseMapEngine.value = engine;

  try {
    await topicMapRuntime.bindMapAdapter(topicLayerMapAdapter);
  } catch (error) {
    console.error("[base] 专题地图场景同步失败", error);
  }

  // 将有效地图实例同步给子应用，销毁时会清空该引用。
  setData({ mapRef: baseMapRef.value });
  setGlobalData({ mapRef: baseMapRef.value });
}

function onBaseMapErr(error) {
  console.error("[base] 地图加载失败", error);
}

function onBaseMapDestroy() {
  overviewSceneLease.value?.release();
  overviewSceneLease.value = null;
  baseMapEngine.value = null;
  setData({ mapRef: null });
  setGlobalData({ mapRef: null });
}

// ===== 子应用消息与 RPC =====
// 收件箱仅用于开发调试，便于观察 dispatch 和 RPC 调用。
const inbox = reactive([]);
const inboxRef = ref(null);

function pushToInbox(type, payload) {
  inbox.push({ type, payload, time: new Date().toLocaleTimeString() });
  nextTick(() => {
    if (inboxRef.value) {
      inboxRef.value.scrollTop = inboxRef.value.scrollHeight;
    }
  });
}

registerHandler("form-submit", (payload) =>
  pushToInbox("form-submit", payload),
);
registerHandler("log", (payload) => {
  console.log("[micro]", ...(Array.isArray(payload) ? payload : [payload]));
  pushToInbox("log", payload);
});

registerMethod("showToast", (msg) => {
  pushToInbox("showToast", { msg });
  alert(`[基座弹窗] ${msg}`);
});
registerMethod("navigate", (path) => {
  pushToInbox("navigate", { path });
  console.log("[基座] 子应用请求导航到:", path);
});
registerMethod("getToken", () => {
  pushToInbox("getToken (return)", { token: data.token });
  return data.token;
});

registerMethod("syncVerticalStationLayers", ({ alarms, stations, normalSections }) => {
  const TMap = baseMapRef.value?.TMap;
  if (!TMap) throw new Error("基座地图尚未就绪");

  TMap.getLayersByGeometryType(['point', 'line', 'polygon']).forEach((id) => {
    TMap.removeLayer(id);
  });

  TMap.addLayer("Vector", {
    id: NORMAL_SECTION_LAYER_ID,
    geometryType: "point",
    dataSource: { type: "GeoJSON", data: normalSections },
    renderer: {
      type: "uniqueValue",
      field1: "WATERQUALITYLEVELNAME",
      defaultSymbol: { esri: { type: "esriSMS", style: "esriSMSDiamond", color: "#9bb0c3", size: 24, outline: { color: "#fff", width: 2 } } },
      uniqueValueInfos: [
        { value: "Ⅰ类", symbol: { esri: { type: "esriSMS", style: "esriSMSDiamond", color: "#8fcdff", size: 24, outline: { color: "#fff", width: 2 } } } },
        { value: "Ⅱ类", symbol: { esri: { type: "esriSMS", style: "esriSMSDiamond", color: "#0280f6", size: 24, outline: { color: "#fff", width: 2 } } } },
        { value: "Ⅲ类", symbol: { esri: { type: "esriSMS", style: "esriSMSDiamond", color: "#00da2a", size: 24, outline: { color: "#fff", width: 2 } } } },
        { value: "Ⅳ类", symbol: { esri: { type: "esriSMS", style: "esriSMSDiamond", color: "#f6c200", size: 24, outline: { color: "#fff", width: 2 } } } },
        { value: "Ⅴ类", symbol: { esri: { type: "esriSMS", style: "esriSMSDiamond", color: "#fc926a", size: 24, outline: { color: "#fff", width: 2 } } } },
        { value: "劣Ⅴ类", symbol: { esri: { type: "esriSMS", style: "esriSMSDiamond", color: "#f34c2d", size: 24, outline: { color: "#fff", width: 2 } } } },
      ],
    },
    label: {
      labelPlacement: "above-center",
      labelExpressionInfo: { expression: "$feature.POINT_NAME" },
      symbol: { type: "esriTS", text: "", color: "#fff", haloColor: "#000", haloSize: 3, yoffset: 20, font: { size: 17, weight: "bold" } },
    },
  });

  TMap.addLayer("Vector", {
    id: VERTICAL_ALARM_LAYER_ID,
    geometryType: "point",
    dataSource: { type: "GeoJSON", data: alarms },
    renderer: {
      type: "uniqueValue",
      field1: "ISSTANDARDS",
      defaultSymbol: { esri: { type: "esriPMS", url: "", width: 0, height: 0 } },
      uniqueValueInfos: [{ value: 0, symbol: { esri: { type: "esriPMS", url: "https://120.35.30.208:10064/mapgo5.0/icons/d379ee0c27c94f928a94d10df106358a/9204c3ba7caf40a7856d2a351d6400a1/d02439bae6d7400dafcab844ebeee37a_%E6%8A%A5%E8%AD%A6%E9%A2%84%E8%AD%A6.gif", width: 28, height: 28 } } }],
    },
  });

  const stationIcon = (url) => ({ esri: { type: "esriPMS", url, width: 36, height: 36 } });
  TMap.addLayer("Vector", {
    id: VERTICAL_STATION_LAYER_ID,
    geometryType: "point",
    dataSource: { type: "GeoJSON", data: stations },
    renderer: {
      type: "uniqueValue",
      field1: "CODE_WATERQUALITYLEVEL",
      defaultSymbol: stationIcon("https://120.35.30.208:10064/mapgo5.0/icons/4e9e85fcac5743bf8b53d37edf45bd37.png"),
      uniqueValueInfos: [
        { value: 1, symbol: stationIcon("https://120.35.30.208:10064/mapgo5.0/icons/ce80e4a0106f4cfc9c014a1f9c8cb9d4.png") },
        { value: 2, symbol: stationIcon("https://120.35.30.208:10064/mapgo5.0/icons/4b703ec3f0fb4e548c8a30c09387d026.png") },
        { value: 3, symbol: stationIcon("https://120.35.30.208:10064/mapgo5.0/icons/13bcefcc59a242f9ba778c4f67414986.png") },
        { value: 4, symbol: stationIcon("https://120.35.30.208:10064/mapgo5.0/icons/042e5eede7b149a2bb42bd2a265bf8f2.png") },
        { value: 5, symbol: stationIcon("https://120.35.30.208:10064/mapgo5.0/icons/cbe37dcbd4e742c493893f067c41eb8c.png") },
        { value: 6, symbol: stationIcon("https://120.35.30.208:10064/mapgo5.0/icons/d0c4b668fab44769894ab09cb1ceb8bf.png") },
      ],
    },
    label: {
      labelPlacement: "above-center",
      labelExpressionInfo: { expression: "$feature.POINT_NAME" },
      symbol: { type: "esriTS", text: "", color: "#fff", haloColor: "#000", haloSize: 3, yoffset: 25, font: { size: 17, weight: "bold" } },
    },
  });
});
registerMethod("goToMapPoint", ({ longitude, latitude, level = 13 }) => {
  const TMap = baseMapRef.value?.TMap;
  if (!TMap) throw new Error("基座地图尚未就绪");
  TMap.goTo({ center: { x: longitude, y: latitude }, level });
});
registerMethod("loadOverviewScene", async () => {
  if (!baseMapEngine.value) throw new Error("基座地图尚未就绪");
  if (!overviewSceneLease.value) {
    overviewSceneLease.value = await topicMapRuntime.acquireScene({
      ownerId: "micro:tmap-base:overview-analysis",
      pageCode: "tmap-base-overview-analysis",
      mapApp: OVERVIEW_SCENE,
    });
  }
  pushToInbox("loadOverviewScene", { sceneId: overviewSceneLease.value.sceneId });
  return { sceneId: overviewSceneLease.value.sceneId };
});

// ===== 基座弹窗 RPC =====
// 仅允许渲染注册表中的基座组件。
const dialogComponents = {
  DemoDialogContent: markRaw(DemoDialogContent),
  RegionPickerDialog: markRaw(RegionPickerDialog),
};

const dialog = reactive({
  visible: false,
  componentName: null,
  title: "",
  width: "600px",
  props: {},
  resolver: null,
});

// 子应用调用 callBase("showDialog", config) 后，返回的 Promise 在弹窗关闭时 resolve。
registerMethod("showDialog", (config) => {
  pushToInbox("showDialog", config);
  dialog.componentName = config?.componentName;
  dialog.title = config?.title || "";
  dialog.width = config?.width || "600px";
  dialog.props = config?.props || {};
  dialog.visible = true;

  return new Promise((resolve) => {
    dialog.resolver = resolve;
  });
});

function closeDialog(result) {
  dialog.resolver?.(result ?? null);
  dialog.resolver = null;
  dialog.visible = false;
  dialog.componentName = null;
  dialog.props = {};
}

function onDialogClose() {
  closeDialog(null);
}

// ===== 开发调试操作 =====
function changeUser() {
  data.userName = data.userName === "张三" ? "李四" : "张三";
}

function toggleTheme() {
  data.theme = data.theme === "light" ? "dark" : "light";
}

function batchUpdate() {
  setData({
    userName: "王五",
    theme: "dark",
    token: `Bearer refreshed-${Date.now()}`,
    lastUpdate: new Date().toLocaleTimeString(),
  });
}

// ===== 通道 ③：全局共享数据（globalData） =====
// 基座与所有微应用共用一份响应式数据；此处将常用字段映射为 computed，供模板实时展示。
const { globalData } = useGlobalData();
const regionName = computed(() => globalData.value?.regionaQuery?.regionName);
const regionCode = computed(() => globalData.value?.regionaQuery?.regionCode);
const activeTheme = computed(() => globalData.value?.activeTheme);
const socketRoom = computed(() => globalData.value?.socketRoom);
const appId = computed(() => globalData.value?.appId);
const serviceBaseUrl = computed(() => globalData.value?.serviceBaseUrl);
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  height: 100%;
}
body {
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
</style>

<style scoped>
.base-root {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f5f7fa;
}

/* ===== 顶部栏 ===== */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  background: #fff;
  border-bottom: 1px solid #e4e7ed;
  flex-shrink: 0;
  z-index: 10;
}
.header-title {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header-title h2 {
  font-size: 18px;
  font-weight: 600;
  color: #303133;
}
.badge {
  font-size: 11px;
  color: #909399;
  background: #f0f2f5;
  padding: 2px 8px;
  border-radius: 4px;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.info-label {
  font-size: 13px;
  color: #606266;
}

/* ===== 全局变量监视器 ===== */
.global-monitor {
  background: linear-gradient(90deg, #f0f9ff 0%, #f0f5ff 100%);
  padding: 8px 24px;
  border-bottom: 1px solid #e4e7ed;
  flex-shrink: 0;
}
.monitor-title {
  font-size: 12px;
  color: #5e6d82;
  margin-bottom: 6px;
}
.monitor-title code {
  background: rgba(64, 158, 255, 0.1);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 11px;
  color: #409eff;
}
.monitor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 6px 16px;
}
.monitor-cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;
  background: #fff;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid #e6eaf0;
}
.monitor-cell .key {
  color: #909399;
  font-family: ui-monospace, SFMono-Regular, monospace;
}
.monitor-cell strong {
  color: #303133;
  font-weight: 600;
}

/* ===== 基座地图区域 ===== */
.base-map-area {
  position: fixed;
  inset: 0;
  z-index: 0;
}
.base-map-area .section-title {
  font-size: 12px;
  color: #5e6d82;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.map-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}
.base-map-area .section-title code {
  background: rgba(64, 158, 255, 0.1);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 11px;
  color: #409eff;
}
.map-layer-widget {
  position: absolute;
  top: 76px;
  right: 492px;
  z-index: 11;
  display: flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 12px;
  border: 0;
  border-radius: 6px;
  color: #345d92;
  background: #fff;
  box-shadow: 0 4px 12px #1d426429;
  font-size: 14px;
  cursor: pointer;
}
.map-layer-widget span:first-child {
  font-size: 18px;
  color: #3d7fe5;
}
.map-layer-widget:hover {
  color: #fff;
  background: #3d7fe5;
}
.map-layer-widget:hover span:first-child {
  color: #fff;
}
.base-map-area :deep(.topic-layer-controls) {
  inset: 60px 0 0;
  z-index: 1001;
}
.base-map-area :deep(.t-gis-map) {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* ===== 微应用区域 ===== */
.main-area {
  position: fixed;
  top: 76px;
  right: 16px;
  bottom: 16px;
  width: min(460px, calc(100vw - 32px));
  z-index: 5;
  overflow: hidden;
  background: #fff;
  border: 1px solid #d6e1ef;
  border-radius: 10px;
  box-shadow: 0 8px 24px #1d426429;
}
.micro-panel-toggle {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 5px;
  color: #53708e;
  background: #edf3fa;
  font-size: 21px;
  cursor: pointer;
}
.micro-panel-toggle:hover {
  color: #2878df;
  background: #e3efff;
}
.micro-panel-expand {
  position: fixed;
  top: 76px;
  right: 16px;
  left: auto;
  z-index: 11;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  box-shadow: 0 4px 12px #1d426429;
}
.main-area micro-app {
  width: 100%;
  height: 100%;
  display: block;
}

/* ===== 消息收件箱 ===== */
.inbox {
  flex-shrink: 0;
  max-height: 220px;
  background: #fff;
  border-top: 1px solid #e4e7ed;
  display: flex;
  flex-direction: column;
}
.inbox-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  border-bottom: 1px solid #f2f2f2;
  font-size: 13px;
  color: #606266;
}
.inbox-body {
  flex: 1;
  overflow-y: auto;
  padding: 8px 24px;
  font-size: 13px;
}
.inbox-empty {
  color: #c0c4cc;
  text-align: center;
  padding: 16px;
}
.inbox-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 4px 0;
  border-bottom: 1px dashed #f0f0f0;
}
.inbox-time {
  flex-shrink: 0;
  color: #c0c4cc;
  font-size: 11px;
  font-family: ui-monospace, SFMono-Regular, monospace;
}
.inbox-tag {
  flex-shrink: 0;
  background: #e6f7ff;
  color: #1890ff;
  padding: 1px 6px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 600;
}
.inbox-payload {
  font-size: 12px;
  color: #606266;
  word-break: break-all;
}
</style>
