# gis-map 组件：socket 参数挂到 Tool.socketConfig

## 目标

把 `t-gis-map` 组件接收的三个 socket 参数存到 `engine.Tool.socketConfig = { roomId, socketUrl, socketPath }`，供**地图加载后运行的业务脚本**读取（MapGo 模式下业务脚本由 `bootstrap.start()` 执行，必须在 `bootstrap.start()` **之前**挂上）。

## 已确认的需求

1. 读取方：地图加载后跑的业务脚本（不是 SDK 内部，也不是组件自己建 socket 连接）
2. 命名：组件 prop `socketIp` → 改名 `socketUrl`，与 `socketConfig` 字段一致
3. 运行时 prop 变化：只更新 `Tool.socketConfig`，**不重建地图**
4. 时序：MapGo 模式下必须在 `bootstrap.start()`（执行业务脚本）之前挂上
5. `Tool.socketConfig` 当前不存在，需新增

## 改动文件

### 1. `packages/components/gis-map/src/index.vue`

- **props 改名**：`socketIp` → `socketUrl`，更新三处注释（去掉「预留/当前组件未使用」，改为「存入 `Tool.socketConfig`，供地图业务脚本读取」）
- **`getDefaultEngineOptions()`**：返回对象增加 `socketUrl / socketPath / roomId`（取自 props）
- **`mountEngine()` MapGo 分支**：`createEngine({ mode: 'mapgo', ..., socketUrl, socketPath, roomId })` 补上三个字段
- **新增 watch**（独立于现有重建 watch）：监听 `[props.socketUrl, props.socketPath, props.roomId]`，变化时执行
  ```js
  const engine = engineRef.value;
  if (engine?.Tool) {
    engine.Tool.socketConfig = { roomId: props.roomId, socketUrl: props.socketUrl, socketPath: props.socketPath };
  }
  ```
  不触发重建。
- **现有重建 watch 不动**：监听 `isMapGo/configUrl/appID/resourceBaseUrl/mapConfig` 的那个 watch 保持原样，socket 三参数**不加入**它，避免误触发重建。

### 2. `packages/components/gis-map/src/engine/types.ts`

- 新增 `SocketConfig` 接口：`{ roomId: string; socketUrl: string; socketPath: string }`
- `DefaultModeOptions` 与 `MapGoModeOptions` 各加三个可选字段：`socketUrl?: string; socketPath?: string; roomId?: string;`（遵循现有两接口各自声明字段的风格，不抽公共 base）
- `IMapEngine.Tool: any` 类型不变；在注释里补一句「Tool 上会挂 `socketConfig: SocketConfig`，供业务脚本读取」

### 3. `packages/components/gis-map/src/engine/index.ts`

- 新增 helper：
  ```ts
  function applySocketConfig(Tool: any, opts: { socketUrl?: string; socketPath?: string; roomId?: string }): void {
    if (!Tool) return;
    Tool.socketConfig = {
      roomId: opts.roomId ?? '',
      socketUrl: opts.socketUrl ?? '',
      socketPath: opts.socketPath ?? '',
    };
  }
  ```
- **`createMapGoEngine`**：在 `attachNamespacesToElement(opts.el, namespaces)` 之后、`bootstrap.start()` **之前**调用 `applySocketConfig(namespaces.Tool, opts)` —— 满足业务脚本执行前挂上
- **`createSdkEngine`**：在 `resolveNamespaces` 之后（`TMap.init` 前后均可，无业务脚本时序约束）调用 `applySocketConfig(namespaces.Tool, opts)` —— 默认模式统一挂上，ready 后业务代码能读到

### 4. `packages/components/gis-map/README.md`

- props 表 `socketIp` 行 → `socketUrl`，说明改为「存入 `Tool.socketConfig`，供地图加载后的业务脚本读取 socket 连接参数」
- 底部「`socketIp / socketPath / roomId` 是预留 props，当前不会影响任何行为」一句更新为实际行为说明

## 不改的

- `lib/index.js`（编译产物，构建后自动重新生成）
- lc-visual-building 的 `socketIp` / `socketPath`（那是平台 2.0.0 模板自己的全局变量建 socket 机制，与 gis-map 组件 prop 无关）

## 关键时序（MapGo 模式）

```
resolveNamespaces()          → 拿到 namespaces.Tool（SDK 对象）
attachNamespacesToElement()  → el.Tool = namespaces.Tool（同一引用）
applySocketConfig()          → namespaces.Tool.socketConfig = {...}   ★ 在此挂上
bootstrap.start()            → 执行业务脚本，可读 Tool.socketConfig     ★ 业务脚本在此
makeEngine()                 → engine.Tool 也是同一引用
emit('ready', engine)        → 组件 mapRef.Tool.socketConfig 可读
```

`el.Tool`、`engine.Tool`、`mapRef.Tool` 三者都是 `namespaces.Tool` 的同一引用，挂一次全通。

## 引用一致性验证

- `mapRef.Tool`（组件 expose 的 `get Tool()`，index.vue:282）=== `engineRef.value.Tool` === `namespaces.Tool`
- 所以业务侧 `mapRef.Tool.socketConfig` 与业务脚本读到的 `Tool.socketConfig` 是同一个

## 风险

- `Tool` 是 SDK（`@ths-map-sdk/map`）提供的对象，假设其可写（未 `Object.freeze`）。若 SDK 冻结了 Tool，赋值会静默失败/抛错——但既然业务脚本约定从 `Tool.socketConfig` 读，SDK 侧应允许挂该属性，否则约定不成立。实现后需在真实环境验证一次。
- `createNotImplNs('Tool')` 兜底 Proxy 场景下挂 socketConfig 无意义（get trap 会返回抛错函数），但该场景 SDK 未装、`createSdkEngine` 已 throw「SDK 未安装」，走不到挂载，无需处理。
