# TMapDemo 改为双 demo（真实组件 + 桥接代理）

## 目标
`micro-app-template/packages/micro/src/views/demos/TMapDemo.vue` 现在只演示**桥接代理**（`ths-map.js` Proxy → `callBase('tmapCall')` → 基座 iframe 的 `contentWindow.TMap`）。改为同一页两半：
- **上半部分**：微应用内嵌真实 `<TGisMap>` 组件，通过 `mapRef.value.TMap / .Layer / .Control`（+ 扁平 API）直接操作
- **下半部分**：保留桥接代理调基座地图（按 `API.md` 文档对齐方法名）

对比「本地组件」vs「基座地图」两种场景。

## 已核实的事实
- `@ths/design@1.1.41`（内网 registry `http://192.168.0.112:8081/repository/npm-ths/`）已含 `TGisMap`（`packages/ths-design/index.ts` 导出）
- `@ths-map-sdk/map@2.0.2` / `api@2.0.0` / `widgets@2.0.2` 均可解析
- `@ths/design` **未**把 `@ths-map-sdk/*` / `ol` 声明为 peerDep → 必须在 micro 包**显式安装**地图 SDK
- `@p-base/t-gis-map`（独立包）在 registry 404，只能走 `@ths/design`
- gis-map 默认 `config.json` 底图为天地图（需 token 才出瓦片；无 token 时容器仍挂载、API 仍可用）
- 真实 API（来自 `gis-map/src/engine/index.ts` + `types.ts`）：
  - 命名空间：`mapRef.value.TMap / .Layer / .Control / .SpatialAnalysis / .GlobalAddress / .Tool`
  - 扁平 API（typed）：`goTo({center:[lng,lat],zoom}) / setZoom(z) / setCenter([lng,lat]) / addLayer(cfg) / setLayerVisible(id,v) / setLayerOpacity(id,o) / hasLayer(id) / setBasemap(id)`
  - 引擎内部映射：`setZoom → TMap.setLevel`；`setLayerVisible → Layer.setVisibility`；`setLayerOpacity → Layer.setOpacity`
  - 事件：`@ready(engine)` `@click({coordinate,pixel})` `@view-change({center,zoom,extent})` `@layer-click` 等
- micro `vite.config.js` 无需特殊处理（base 包同样简单配置已用 @ths/design）

## 改动点

### 1. `packages/micro/package.json` — 加依赖
```jsonc
"dependencies": {
  // 现有 ...
  "@ths/design": "^1.1.43",
  "@ths-map-sdk/api": "^2.0.1",
  "@ths-map-sdk/map": "^2.0.4",
  "@ths-map-sdk/mapgo-runtime": "^2.0.6",
  "@ths-map-sdk/widgets": "^2.0.3",
  "ol": "^10.0.0"
}
```

### 2. 根 `.npmrc`（新增）— `legacy-peer-deps=true`
`@ths/design` 有 ~25 个 peerDep（echarts/three/highcharts/video.js/swiper/vuedraggable/vuex/@turf/turf/@ths/c-common-base-* 等）。npm 7+ 会自动全装，使轻量模板臃肿。设 `legacy-peer-deps=true` 只装我们显式声明的地图相关依赖。
- 影响 base 包？base 已显式声明所需 deps（echarts/lodash 等），不受影响。
- 文件：`micro-app-template/.npmrc`，内容 `legacy-peer-deps=true`

### 3. `packages/micro/src/main.js` — 引入样式
在 ElementPlus 之后加：
```js
import '@ths/design/lib/style.css';
```
（gis-map 容器/微件样式在其中；CLAUDE.md 约定 1.1.28+ 暴露 `./lib/style.css` 子路径，1.1.41 满足）

### 4. `packages/micro/src/views/demos/TMapDemo.vue` — 重写

**顶部注释块**改写：说明本页对比两种地图用法（本地真实组件 vs 桥接基座地图）。

**上半部分 — 真实 `<TGisMap>`**：
- `<script setup>` 里 `import { TGisMap } from '@ths/design'`（script setup 自动注册，模板用 `<TGisMap>`）
- 模板：
  ```html
  <TGisMap ref="realMapRef" :map-config="miniConfig" style="height: 420px"
           @ready="onReady" @view-change="onViewChange" @click="onMapClick" @error="onErr" />
  ```
- `miniConfig`：最小配置 — center 福州 `[119.296, 26.074]`、zoom 10、保留 `普通地图-天地图` 一个底图、`widgets` 只留 zoom + scalebar（避免加载一堆无关微件）、`controls: ['zoom','scale']`
- 按钮区（混用扁平 API 与命名空间 API，对照引擎实现）：
  - 定位福州 → `realMapRef.value.goTo({ center: [119.296, 26.074], zoom: 11 })`
  - 放大/缩小 → `realMapRef.value.setZoom(14)` / `setZoom(8)`
  - 加点图层 → `realMapRef.value.addLayer(pointLayerConfig)`（id `demo-points`，type `vector`/`point`，几个福州监测点 feature）
  - 隐藏/显示点图层 → `realMapRef.value.Layer.setVisibility('demo-points', false/true)`（命名空间 API）
  - 半透明 → `realMapRef.value.Layer.setOpacity('demo-points', 0.5)`
  - 切影像底图 → `realMapRef.value.setBasemap('影像地图-天地图')`
- 实时回显：`@view-change` 的 `{center, zoom}`、`@click` 的 `coordinate`、`@ready` 后打印 `TMap/Layer/Control` 可用
- 提示：底图为天地图，需 token/内网才能出瓦片；无瓦片时 API 交互仍生效

**下半部分 — 桥接代理**（保留并按 `API.md` 对齐）：
- `TMap.__ready__()` — 等基座地图就绪（先 await 再调其它）
- `TMap.goTo({ center: { x: 119.296, y: 26.074 } })` / `TMap.setZoom(12)` / `TMap.addMarker({ lng, lat, title })`
  - ⚠️ 注意：基座 iframe 的 TMap 用 `{x,y}` 对象坐标（与真实组件的 `[lng,lat]` 数组坐标不同）—— 保留现状（这是基座地图的契约）
- `createLayer('pointLayer').show() / .hide()` — Layer 代理（已有 `ths-map.js` 导出，当前 demo 未用）
- 保留「自由调用」框

**样式**：复用现有 `.card/.button-row/.result-box/.hint`，加地图容器高度、两半分隔标题。

## 验证
1. `cd micro-app-template && npm install`（确认装得上，无致命错误）
2. `npm run build -w @template/micro` 确认编译通过（主要验证 @ths/design/ol/SDK 能被 vite 正常打包）
3. 运行时：`npm run dev:micro` 手测；底图瓦片需天地图 token/内网，API 交互不依赖瓦片

## 风险 / 权衡
- **依赖变重**：micro 包新增 @ths/design + 地图 SDK + ol。`legacy-peer-deps=true` 避免拉 echarts/three 等无关 peer，但仍比之前重。
- **底图需 token**：demo 重点在 API 交互（goTo/图层/事件），不保证瓦片加载。如需可视底图，后续可换 OSM 或带 token 的天地图配置。
- **mapConfig 字段假设**：`miniConfig` 结构参照 gis-map `src/config.json`；若 SDK 对字段有额外要求，运行时按 `@error` 回显调整。
- **改动文件**：`micro/package.json`、`micro/src/main.js`、`micro/src/views/demos/TMapDemo.vue`、新增 `micro-app-template/.npmrc`。不碰 base 包、不碰其它 demo。
