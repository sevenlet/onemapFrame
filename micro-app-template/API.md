# Micro-App Template 开发者 API 文档

> 本文档面向基于 `micro-app-template` 开发微应用的开发者，完整描述所有可用的 API、通信机制和数据结构。
>
> 架构概览：基座（base）仅用于本地开发调试，不参与交付；最终部署的是微应用（micro）打包产物。基座复刻了生产环境的运行时，确保本地开发与生产行为一致。

---

## 目录

- [1. 通信架构](#1-通信架构)
- [2. 微应用侧 API](#2-微应用侧-api)
  - [2.1 useBaseBridge() — 通道 1+2](#21-usebasebridge--通道-12)
  - [2.2 callBase() — RPC 调用](#22-callbase--rpc-调用)
  - [2.3 sendToBase() — 单向消息](#23-sendtobase--单向消息)
  - [2.4 useGlobalData() — 通道 3](#24-useglobaldata--通道-3)
  - [2.5 useGlobalDataKey() — 单字段订阅](#25-useglobaldatakey--单字段订阅)
  - [2.6 setGlobalData() — 写入全局数据](#26-setglobaldata--写入全局数据)
  - [2.7 TMap 地图代理](#27-tmap-地图代理)
  - [2.8 弹窗穿透](#28-弹窗穿透)
  - [2.9 inject('root') — 基座注入](#29-injectroot--基座注入)
  - [2.10 过滤器](#210-过滤器)
  - [2.11 独立运行降级](#211-独立运行降级)
- [3. 基座侧 API](#3-基座侧-api)
  - [3.1 useChildBridge(name) — 通道 1+2](#31-usechildbridgename--通道-12)
  - [3.2 useGlobalData() — 通道 3](#32-useglobaldata--通道-3)
  - [3.3 bindReactiveToGlobal() — 双向绑定](#33-bindreactivetoglobal--双向绑定)
  - [3.4 弹窗组件注册](#34-弹窗组件注册)
- [4. 全局变量参考](#4-全局变量参考)
- [5. 全局函数参考](#5-全局函数参考)
- [6. 工具函数参考](#6-工具函数参考)
- [7. WebSocket API](#7-websocket-api)
- [8. 生命周期与挂载](#8-生命周期与挂载)

---

## 1. 通信架构

微前端采用 **@micro-zoe/micro-app v1**（iframe 沙箱模式），提供三套互补的通信通道：

```
┌─────────────────────────────────────────────────────┐
│                      基座 (base)                      │
│                                                       │
│  useChildBridge(name)      useGlobalData()            │
│  ├─ data / setData         ├─ globalData (ref)        │
│  ├─ registerHandler()      ├─ setGlobalData()         │
│  └─ registerMethod()       └─ watchGlobalData()       │
│                                                       │
│  bindReactiveToGlobal(global) ── 双向绑定              │
└──────────┬───────────────────────────┬───────────────┘
           │ 通道1: data (定向)         │ 通道3: globalData (全局共享)
           │ 通道2: dispatch (消息/RPC) │
           ▼                           ▼
┌─────────────────────────────────────────────────────┐
│                    微应用 (micro)                     │
│                                                       │
│  useBaseBridge()            useGlobalData()            │
│  ├─ baseData (ref)          ├─ globalData (ref)        │
│  ├─ sendToBase()            ├─ setGlobalData()         │
│  └─ callBase()              └─ useGlobalDataKey()      │
│                                                       │
│  TMap 代理 ── callBase('tmapCall')                    │
│  弹窗穿透 ── callBase('showDialog')                   │
└─────────────────────────────────────────────────────┘
```

| 通道 | 方向 | 语义 | 适用场景 |
|------|------|------|----------|
| **通道 1** (data/setData) | 基座 → 子应用 | Props 风格，每个子应用独立一份 | 下发 token、用户信息、主题等 |
| **通道 2a** (dispatch → registerHandler) | 子应用 → 基座 | 单向消息 | 日志、表单提交、事件通知 |
| **通道 2b** (callBase → registerMethod) | 子应用 → 基座 | RPC，支持返回值 | 获取 token、调用全局函数、弹窗 |
| **通道 3** (globalData) | 双向 | 全局共享，所有子应用共用一份 | 全局变量读写、区域切换、主题切换 |

---

## 2. 微应用侧 API

> 以下 API 均从 `@/bridge.js` 或 `@/ths-map.js` 导入。

### 2.1 useBaseBridge() — 通道 1+2

订阅基座通过 `:data` 下发的数据，同时提供向基座发送消息和 RPC 调用的能力。

```js
import { useBaseBridge } from '@/bridge.js';

const { baseData, sendToBase, callBase } = useBaseBridge();
```

**返回值：**

| 属性 | 类型 | 说明 |
|------|------|------|
| `baseData` | `Ref<Object>` | 基座下发的数据，响应式。模板中直接 `baseData.userName` |
| `sendToBase` | `Function` | 单向消息，见 [2.3](#23-sendtobase--单向消息) |
| `callBase` | `Function` | RPC 调用，见 [2.2](#22-callbase--rpc-调用) |

> ⚠️ `useBaseBridge()` 是单例，多次调用返回同一实例。内部自动拦截 `__CALL_RESPONSE__` 用于 `callBase()` 返回值通道，不暴露给业务层。

### 2.2 callBase() — RPC 调用

调用基座侧注册的方法（支持返回值 / await）。

```js
import { callBase } from '@/bridge.js';

// 获取 token
const token = await callBase('getToken');

// 调用全局函数（基座 window 上挂载的函数均可通过此方式调用）
const level = await callBase('getRegionLevel', '350700000000');

// 弹窗
const result = await callBase('showDialog', {
  componentName: 'RegionPickerDialog',
  title: '选择区域',
  props: { multiple: true }
});
```

**签名：**

```ts
function callBase(method: string, ...params: any[]): Promise<any>
```

**方法查找优先级：**

1. 基座 `registerMethod(name, fn)` 注册的方法
2. `window[method]` —— 即 `globals/functions` 下注册的全局函数（fallback）

**超时：** 10 秒。超时后 Promise reject，错误信息 `RPC timeout: ${method}`。

**独立运行降级：** 未嵌入基座时返回 `Promise.resolve(undefined)`，仅打印调试日志。

### 2.3 sendToBase() — 单向消息

向基座发送消息，基座需通过 `registerHandler(type, fn)` 提前注册对应的处理器。

```js
import { sendToBase } from '@/bridge.js';

sendToBase({
  type: 'form-submit',
  payload: { name: '测试', value: 42 }
});
```

**签名：**

```ts
function sendToBase(payload: object): void
```

> ⚠️ `payload` 中必须包含 `type` 字段，基座才能通过 `handlers.get(type)` 路由到对应处理器。micro-app 的 `dispatch()` 内部会自动包装为 `{ data: payload }`，所以这里直接传 payload，不要额外包一层。

### 2.4 useGlobalData() — 通道 3

获取全局共享数据（基座 + 所有子应用共用一份）。

```js
import { useGlobalData } from '@/bridge.js';

const { globalData, setGlobalData } = useGlobalData();
```

**返回值：**

| 属性 | 类型 | 说明 |
|------|------|------|
| `globalData` | `Ref<Object>` | 全局数据，响应式。模板中 `globalData.regionaQuery?.regionCode` |
| `setGlobalData` | `Function` | 合并式更新，见 [2.6](#26-setglobaldata--写入全局数据) |

> `globalData` 包含了基座所有全局变量的完整字段（`publicGlobalVariables` + `legoGlobalVariables`），详见 [第 4 节](#4-全局变量参考)。

### 2.5 useGlobalDataKey() — 单字段订阅

订阅 globalData 中单个字段，返回响应式 ref。支持 lodash 风格的路径 `'a.b.c'`。

```js
import { useGlobalDataKey } from '@/bridge.js';

// 订阅区域编码
const regionCode = useGlobalDataKey('regionaQuery.regionCode');
console.log(regionCode.value); // '350700000000'

// 在组件中 watch
watch(regionCode, (newCode) => {
  console.log('区域变了', newCode);
});
```

**签名：**

```ts
function useGlobalDataKey(path: string | string[]): Ref<any>
```

- 比 `useGlobalData().globalData.value.regionaQuery.regionCode` 更安全——中间字段缺失不会报错，返回 `undefined`
- 若在组件内调用，组件卸载时自动解除监听
- 非组件内调用需手动清理（watch 返回的 stop 函数）

### 2.6 setGlobalData() — 写入全局数据

合并式更新全局数据，不会覆盖未传入的字段。

```js
import { setGlobalData } from '@/bridge.js';

// 修改主题
setGlobalData({ activeTheme: '蓝色版' });

// 修改区域
setGlobalData({
  regionaQuery: {
    ...globalData.value.regionaQuery,
    regionCode: '350783000000',
    regionName: '建瓯市'
  }
});
```

**签名：**

```ts
function setGlobalData(patch: object): void
```

> ⚠️ micro-app 底层的 `setGlobalData` 是整体替换语义，本封装内部先 `getGlobalData()` 再 merge，保证只更新传入字段。**嵌套对象更新时需手动展开（如上例 regionaQuery）**，否则会丢失兄弟字段。

### 2.7 TMap 地图代理

子应用通过 ES Proxy 透明调用基座地图实例的方法，无需感知 iframe 边界。

```js
import { TMap, createLayer } from '@/ths-map.js';

// 地图跳转
await TMap.goTo({ center: { x: 114, y: 26 } });

// 设置缩放
await TMap.setZoom(12);

// 添加标注
await TMap.addMarker({ lng: 118.18, lat: 26.64, title: '南平' });

// 等待地图就绪
await TMap.__ready__();

// Layer 代理
const pointLayer = createLayer('pointLayer');
await pointLayer.show();
await pointLayer.hide();
await pointLayer.setData([...]);
```

**原理：**

```
TMap.xxx(...params)
  → callBase('tmapCall', { method: 'xxx', params })
    → 基座 registerMethod('tmapCall')
      → TMap[method](...params)  // 基座侧真实地图实例
```

**createLayer：**

`createLayer(name)` 创建的代理对象，方法名会自动加 `layer_` 前缀：

```
pointLayer.show()
  → callBase('tmapCall', { method: 'layer_show', params: ['pointLayer'] })
```

| 导出 | 类型 | 说明 |
|------|------|------|
| `TMap` | `Proxy` | 地图代理对象，任意方法名自动转发基座 |
| `createLayer(name)` | `Function` | Layer 代理工厂，返回 Proxy 对象 |

### 2.8 弹窗穿透

子应用通过 `callBase('showDialog', config)` 触发基座渲染弹窗，弹窗默认 `append-to-body`，可覆盖整个浏览器。

```js
// 打开弹窗
const result = await callBase('showDialog', {
  componentName: 'RegionPickerDialog',  // 必填：基座注册的组件名
  title: '选择区域',                      // 可选：弹窗标题
  width: '800px',                        // 可选：弹窗宽度，默认 600px
  props: { multiple: true }              // 可选：透传给组件的 props
});
// 弹窗关闭后 result 为组件 emit('close', resultData) 传入的值
console.log('弹窗返回:', result);
```

**基座侧需提前注册弹窗组件：**

```js
// base/src/App.vue
import MyDialog from './dialogs/MyDialog.vue';

const dialogComponents = {
  MyDialog: markRaw(MyDialog),  // 必须用 markRaw 包裹
};
```

**弹窗组件约定：**

- 组件通过 `emit('close', resultData)` 关闭弹窗并返回数据
- 基座通过 `<component :is="dialogComponents[name]" v-bind="dialog.props" @close="closeDialog" />` 渲染
- 未注册的组件名会在弹窗中显示友好提示

### 2.9 inject('root') — 基座注入

基座通过 `provide('root', rootValue)` 注入的数据和方法，微应用可通过 `inject` 访问（如果处于同一 Vue 上下文中）。

更推荐的方式是通过全局变量（globalData）或 callBase 访问，但 `window.__lego_root` 在全局始终可用。

**rootValue 结构：**

```js
const rootValue = {
  // 所有全局变量的 toRefs（响应式）
  ...toRefs(global),

  // 事件总线
  rootEmit: (event, ...args) => void,   // 触发事件
  rootOn: (event, handler) => void,     // 监听事件
  rootOff: (event, handler) => void,    // 取消监听

  // Socket
  get rootSocket() { return socket.value; },  // Socket.io 实例
  setSocketRoomId: () => string,              // 设置/获取 Socket 房间号

  // 发送 WebSocket 消息
  sendMessage: (obj) => void,
};
```

**全局引用：**

```js
// 基座暴露的全局引用
window.__lego_root   // rootValue 对象
window.router         // Vue Router 实例
window.app            // Vue App 实例
window.internalKeyRef // ref(0)，用于强制刷新
```

### 2.10 过滤器

基座侧注册的过滤器合并为 `window.filters`，子应用可通过 globalData 或 callBase 访问。

```js
// 过滤器来源
window.filters = {
  ...window.builtinFilters,   // 内置过滤器
  ...window.customFilters,    // 自定义过滤器
};
```

**在工具函数中使用：**

```js
import { applyFilter, filterData } from '@/utils.js';

// 对数据应用单个过滤器
const result = applyFilter(window.filters, data, 'filterName');

// 对数据应用多个过滤器
const result = filterData(data, [
  { name: 'filterA' },
  { name: 'filterB' },
]);
```

### 2.11 独立运行降级

微应用所有 bridge 函数在未嵌入基座（直接访问 `http://localhost:5175`）时安全降级：

| API | 降级行为 |
|-----|----------|
| `useBaseBridge().baseData` | 空对象 `{}` |
| `sendToBase(payload)` | 仅打印 `console.log` |
| `callBase(method, ...params)` | 返回 `Promise.resolve(undefined)` |
| `useGlobalData().globalData` | 空对象 `{}` |
| `setGlobalData(patch)` | 仅打印 `console.log` |
| `TMap.xxx(...)` | 返回 `Promise.resolve(undefined)` |

---

## 3. 基座侧 API

> 基座侧 API 主要用于本地开发调试，开发者需了解这些接口以便在基座中注册方法、下发数据。

### 3.1 useChildBridge(name) — 通道 1+2

```js
import { useChildBridge } from './bridge.js';

// name 必传，对应 <micro-app name="..."> 属性。
// 按 name 缓存：同 name 多次调用返回同一实例；不同 name 各自独立。
const {
  data,            // reactive 对象，业务直接写：data.userName = '张三'
  dataToChild,     // computed ref，传给 <micro-app :data="dataToChild">
  setData,         // 批量更新：setData({ userName: '李四', theme: 'dark' })
  handleChildData, // 绑定到 @datachange 事件
  registerHandler, // 注册消息处理器
  registerMethod,  // 注册 RPC 方法
  name,            // 闭包持有的 name，调试用
} = useChildBridge('child');
```

**为什么需要 name 参数：**

micro-app 允许同一时刻挂载多个 `<micro-app>`（可以是相同 url 不同 name，也可以是不同子应用）。bridge 按 name 隔离每个实例的 `data` / `handlers` / `registerMethod` 列表，避免互相串扰。RPC 返回值通过 `microApp.setData(name, ...)` 回传，name 由闭包持有，不会被其它实例覆盖。

**多实例示例：**

```js
// 页面 A 挂第一个子应用
const bridgeA = useChildBridge('child-demo');
bridgeA.setData({ userName: '张三' });          // 只发给 child-demo

// 页面 B（或同页面）挂第二个，完全独立
const bridgeB = useChildBridge('child-demo2');
bridgeB.setData({ region: '福州' });             // 只发给 child-demo2

// 同 name 多次调用复用同一实例
const same = useChildBridge('child-demo');       // === bridgeA
```

**详细说明：**

#### data / dataToChild / setData

```html
<!-- 在模板中绑定 dataToChild —— name 与 useChildBridge('child') 一致 -->
<micro-app name="child" :data="dataToChild" @datachange="handleChildData" />
```

```js
// 方式 1：直接修改 reactive 属性
data.userName = '张三';
data.theme = 'light';

// 方式 2：批量更新
setData({ userName: '张三', theme: 'light' });
```

> ⚠️ `dataToChild` 是 `computed(() => ({ ...data }))`——每次 data 字段变化返回新对象引用，确保 micro-app 能识别到变化。**不要直接传 `data` 给 `:data`**，reactive 对象字段变化时引用不变，micro-app 不会更新。
>
> 如果 `data` 含嵌套对象且需要嵌套字段变化也触发，请改用 `_.cloneDeep(data)` 或自己写 computed。

#### registerHandler(type, fn) — 注册消息处理器

```js
// 注册处理器
const unregister = registerHandler('form-submit', (payload, rawData) => {
  console.log('收到表单提交:', payload);
});

// 取消注册
unregister();
```

**返回值：** 取消注册函数。

#### registerMethod(name, fn) — 注册 RPC 方法

```js
// 注册可被 callBase 调用的方法
const unregister = registerMethod('getToken', () => {
  return data.token;  // 返回值会通过 setData 回传给子应用
});

registerMethod('showToast', (msg) => {
  alert(msg);
});

registerMethod('navigate', (path) => {
  router.push(path);
});
```

**返回值：** 取消注册函数。

**调用查找顺序：**

1. `registerMethod` 注册的方法
2. `window[method]`（fallback，可调用 globals/functions 下的全局函数）

### 3.2 useGlobalData() — 通道 3

```js
import { useGlobalData } from './bridge.js';

const { globalData, setGlobalData, watchGlobalData } = useGlobalData();
```

| 属性 | 类型 | 说明 |
|------|------|------|
| `globalData` | `Ref<Object>` | 全局共享数据 |
| `setGlobalData(patch)` | `Function` | 合并式更新 |
| `watchGlobalData(path, cb)` | `Function` | 订阅某个字段变化 |

#### watchGlobalData(path, callback)

```js
// 订阅区域编码变化
const stop = watchGlobalData('regionaQuery.regionCode', (newVal, oldVal) => {
  console.log('区域变了:', newVal);
});

// 取消订阅
stop();
```

**签名：**

```ts
function watchGlobalData(path: string | string[], cb: (newVal, oldVal) => void): () => void
```

### 3.3 bindReactiveToGlobal() — 双向绑定

将基座的 reactive 对象与 micro-app 的 globalData 双向绑定：

- 基座修改 reactive 对象 → 自动推到 globalData（所有子应用收到）
- 子应用 setGlobalData → 自动合并回 reactive 对象
- 内部标志位防止回环

```js
import { bindReactiveToGlobal } from './bridge.js';

const global = reactive({});

// 绑定
const unbind = bindReactiveToGlobal(global);

// 绑定后直接修改 reactive，自动同步
global.activeTheme = '蓝色版';  // 所有子应用通过 globalData 收到更新

// 解绑
onUnmounted(unbind);
```

**签名：**

```ts
function bindReactiveToGlobal(reactiveObj: object): () => void
```

**返回值：** 取消绑定函数。

### 3.4 弹窗组件注册

在基座 `App.vue` 中注册弹窗组件：

```vue
<script setup>
import { markRaw } from 'vue';
import MyCustomDialog from './dialogs/MyCustomDialog.vue';

const dialogComponents = {
  MyCustomDialog: markRaw(MyCustomDialog),
};
</script>
```

> `markRaw()` 是必须的，避免 Vue 对组件对象做不必要的响应式代理。

---

## 4. 全局变量参考

全局变量由 `publicGlobalVariables` 和 `legoGlobalVariables` 合并而来，通过 globalData 通道同步给所有子应用。

### 4.1 核心变量

| 路径 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `serviceBaseUrl` | `string` | `'http://localhost:0'` | 主服务地址 |
| `businessServiceBaseUrl` | `string` | `'http://localhost:0'` | 业务服务地址 |
| `token` | `string` | `'dcp'` | 接口请求 token |
| `appId` | `string` | `'DCP.TEMPLATE'` | 应用标识 |
| `activeTheme` | `string` | `'默认主题'` | 当前主题名称 |
| `appScaleMode` | `string` | `''` | 应用缩放模式 |

### 4.2 行政区查询

| 路径 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `regionaQuery.regionCode` | `string` | `'350700000000'` | 当前区域编码 |
| `regionaQuery.regionName` | `string` | `'南平市'` | 当前区域名称 |
| `regionaQuery.defaultRegionCode` | `string` | `'350700000000'` | 默认区域编码 |
| `regionaQuery.defaultRegionName` | `string` | `'南平市'` | 默认区域名称 |
| `regionaQuery.regionType` | `string` | `'region'` | 区域类型 |
| `regionaQuery.paramsRegionType` | `string` | `'city'` | 参数区域类型 |
| `regionaQuery.isDisableCustom` | `boolean` | `false` | 是否禁用自定义区域 |
| `regionaQuery.isShowXZQH` | `boolean` | `true` | 显示行政区划 |
| `regionaQuery.isShowZDQY` | `boolean` | `true` | 显示重点区域 |
| `regionaQuery.isShowZDLY` | `boolean` | `true` | 显示重点流域 |
| `regionaQuery.isShowZDYQY` | `boolean` | `true` | 显示重点园区 |

### 4.3 Socket / WebSocket

| 路径 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `protocol` | `string` | `'ws'` | 协议 |
| `socketIp` | `string` | `''` | Socket.io 地址（空则不启动） |
| `socketPath` | `string` | `'/socketPath'` | Socket.io 路径 |
| `socketRoom` | `string` | `'admin'` | Socket 房间号 |
| `webSocketUrl` | `string` | `''` | 原生 WebSocket 地址 |

### 4.4 字体大小配置

| 路径 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `publicFontSizeConfig.fontSize12` | `number` | `12` | 12px 字号 |
| `publicFontSizeConfig.fontSize14` | `number` | `14` | 14px 字号 |
| `publicFontSizeConfig.fontSize16` | `number` | `16` | 16px 字号 |
| `publicFontSizeConfig.fontSize18` | `number` | `18` | 18px 字号 |

### 4.5 其他

| 路径 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `isMapLoaded` | `boolean` | `false` | 地图是否已加载 |
| `isShowSubject` | `boolean` | `false` | 是否显示主题切换 |
| `complianceCalendarType` | `string` | `'1'` | 合规日历类型 |
| `loginByCasConfig.open` | `boolean` | `false` | 是否启用 CAS 登录 |

---

## 5. 全局函数参考

全局函数通过 `window.xxx` 挂载，子应用通过 `callBase(functionName, ...params)` 调用。

### 5.1 DOM 操作

| 函数 | 签名 | 说明 |
|------|------|------|
| `setDomHeightValue` | `(domId: string, heightValue: string) => void` | 设置元素高度（heightValue 需带单位） |
| `setDomVisible` | `(domId: string, isVisible: boolean) => void` | 设置元素显示/隐藏（同时控制 opacity 和 visibility） |
| `setDomLeftValue` | `(domId: string, leftValue: string) => void` | 设置元素 left 值 |
| `setDomTopValue` | `(domId: string, topValue: string) => void` | 设置元素 top 值 |
| `setEleWidthHeight` | `(id: string, width?: number, height?: number) => void` | 设置元素宽高（px） |
| `setEleLeftTop` | `(id: string, left?: number, top?: number) => void` | 设置元素 left/top（px） |

### 5.2 时间/日期

| 函数 | 签名 | 说明 |
|------|------|------|
| `dateFormat` | `(date: Date\|string, sFormat?: string) => string` | 日期格式化，默认 `'yyyy-MM-dd'`。支持 `yyyy/MM/dd/HH/hh/mm/ss/fff` |
| `getForwardTimeList` | `(timeValue, forwardType, forwardCount) => string[]` | 往前推时间列表。forwardType: `minute/hour/day/month/quarter/year` |
| `getPrevTime` | `(endTime: string, type: string) => string` | 获取起始时间。type: `minute/hour/2hour/48hour/day/30day/month/oneMonth/threeMonth` |
| `getTwoDaysBefore` | `(dateInput: Date\|string) => string` | 获取两天前的日期时间 |
| `judgeTimesOverDays` | `(startTime, endTime, count) => boolean` | 判断两个时间差是否超过指定天数 |

### 5.3 区域/环境

| 函数 | 签名 | 说明 |
|------|------|------|
| `getRegionLevel` | `(selectRegionCode: string) => string` | 获取行政区等级。返回 `'province'/'city'/'county'/'street'` |
| `getWaterLevelColor` | `(value: string) => string` | 获取水质级别对应颜色。如 `'Ⅰ类'` → `'#ccffff'` |
| `getCssVariable` | `(key: string) => string` | 获取 CSS 变量值（从 body 计算样式） |

### 5.4 数据处理

| 函数 | 签名 | 说明 |
|------|------|------|
| `handleNoVal` | `(value: any) => any\|string` | 空值处理，null/undefined/空串/NaN 返回 `'-'` |
| `handleStringSplit` | `(strValue, separator?, arrLength?) => string[]` | 字符串分割，默认逗号分隔 |
| `filterRepeatData` | `(valueArr: object[], onlyKey: string) => object[]` | 按指定字段去重 |
| `replacePollutionCharacter` | `(optionString: string) => string` | 替换污染物名称为正确格式（如 `PM25` → `PM₂.₅`） |
| `convertCharacter` | `(string: string) => string` | 转换特殊字符（AQI 相关化学式） |

### 5.5 图表/ECharts

| 函数 | 签名 | 说明 |
|------|------|------|
| `handleTooltipFormatter` | `(formatterParams) => string` | ECharts tooltip 格式化，支持自定义标题、单位、隐藏系列 |
| `handleStandardSeries` | `(seriesName, lineColor?, labelPosition?) => object` | 生成标准线 series（虚线 + 平均值标线） |
| `getCenterIndexList` | `(moduleType, timeType) => object[]` | 获取中心指标列表。moduleType: `'air'`，timeType: `'hour'/'day'/'month'/'quarter'/'year'` |

### 5.6 URL 参数

| 函数 | 签名 | 说明 |
|------|------|------|
| `getUrlParamValue` | `(paramName: string) => string\|null` | 从 hash 查询参数获取值 |
| `getUrlQueryString` | `(paramName: string) => string\|null` | 从 search 查询参数获取值（自动 decode） |

### 5.7 其他

| 函数 | 签名 | 说明 |
|------|------|------|
| `formPointTree` | `(originalData, keynote, backtype) => object[]` | 将扁平站点数据构建为省→市→区→街道→站点的树结构 |
| `openWX` | `() => void` | 唤起企业微信（解决唤起后 socket 通信中断问题） |

---

## 6. 工具函数参考

> 从 `@/utils.js` 导入。基座侧这些函数也通过 `window` 暴露给全局使用。

### 6.1 动态组件

#### mountDynamicComponent(options, closeCallback?, clickCallback?, maximizeCallback?, minimizeCallback?, confirmCallback?)

在运行时动态创建 UI 库弹窗组件。

```js
import { mountDynamicComponent } from '@/utils.js';

const dialog = mountDynamicComponent(
  {
    componentName: 't-dialog',       // 已注册的全局组件名
    props: { title: '标题', width: '500px' },
    slotContent: '内容文本',           // 可选：插槽内容（字符串或函数）
    id: 'my-dialog',                 // 可选：自定义 ID
    mountTo: document.getElementById('container'), // 可选：挂载目标，默认 body
    style: { position: 'absolute', top: '10px' },  // 可选：容器样式
  },
  (componentId) => { console.log('关闭:', componentId); },  // closeCallback
  (componentId) => { console.log('点击:', componentId); },   // clickCallback
  (componentId) => { console.log('最大化:', componentId); }, // maximizeCallback
  (componentId) => { console.log('最小化:', componentId); }, // minimizeCallback
  (componentId) => { console.log('确认:', componentId); },   // confirmCallback
);

// 关闭弹窗
dialog.close();
```

**返回值：**

| 属性 | 类型 | 说明 |
|------|------|------|
| `id` | `string` | 组件 ID |
| `close` | `Function` | 关闭弹窗方法 |
| `container` | `HTMLElement` | 组件容器元素 |

### 6.2 资源加载

#### ResourceLoader

```js
// window.ResourceLoader 也可用

// 加载 JS 脚本（支持单个 URL 或数组）
await ResourceLoader.loadScripts('/path/to/lib.js');
await ResourceLoader.loadScripts(['/lib/a.js', '/lib/b.js'], (url) => {
  console.log('已加载:', url);
});

// 加载 CSS 样式表
await ResourceLoader.loadStyles('/path/to/style.css');
await ResourceLoader.loadStyles(['/css/a.css', '/css/b.css']);
```

| 方法 | 签名 | 说明 |
|------|------|------|
| `loadScripts` | `(urls, processFile?, appendToHead?) => Promise` | 加载 JS，支持去重和并发 |
| `loadStyles` | `(urls) => Promise` | 加载 CSS，自动去重 |

**特性：**
- 已加载资源自动跳过（基于 URL 去重）
- 并发加载同一 URL 时排队等待，不会重复加载
- 加载失败不阻塞后续，Promise 仍 resolve

### 6.3 组件加载

#### ComponentLoader

```js
// window.ComponentLoader 也可用

// 加载并注册组件 + 路由
await ComponentLoader.loadComponent('test', () => {
  console.log('组件就绪');
});
// 自动注册 window.testComponent + router.addRoute('/test')
```

| 方法 | 签名 | 说明 |
|------|------|------|
| `loadComponent` | `(pageCode: string, afterReadyCallback?) => Promise` | 加载 pages/ 下的 .vue 组件并注册 |

**加载流程：**
1. 检查 `window[pageCode + 'Component']` 是否已存在
2. 在 `import.meta.glob('./pages/*.vue')` 映射中查找
3. 动态 import 组件模块
4. 注册到 `window`、`app.component()` 和 `router.addRoute()`
5. 触发 `internalKeyRef.value++` 强制刷新

### 6.4 页面缩放

#### setPageScale(id, appScaleMode, pageScaleMode)

```js
import { setPageScale } from '@/utils.js';

// 按宽度自适应
setPageScale('page-container', '', 'width');

// 按宽高覆盖自适应
setPageScale('page-container', '', 'cover');

// 应用级缩放
setPageScale('', 'width', '');
```

| 缩放模式 | 说明 |
|----------|------|
| `'normal'` / `''` | 不缩放 |
| `'width'` | 按宽度自适应 |
| `'height'` | 按高度自适应 |
| `'cover'` | 按宽高覆盖自适应（取较小缩放比） |
| `'browser'` | 按浏览器宽高独立缩放 |

### 6.5 动画

#### runAnimation(id, animations, display)

```js
import { runAnimation } from '@/utils.js';

await runAnimation('my-element', [
  'animate__fadeIn',                                    // 字符串：动画类名
  { name: 'animate__slideInUp', delay: 'delay-1s' },  // 对象：动画名 + 延迟
], 'block');
```

### 6.6 接口请求框架

#### loadInitialApis(apiRegistry, apiDataCache, comState, componentPropBindingMap, callback)

初始化所有标记 `autoLoad: true` 的接口，根据组件可见性决定是否请求。

```js
import { loadInitialApis } from '@/utils.js';

await loadInitialApis(
  apiRegistry,          // 接口注册表
  apiDataCache,         // 数据缓存对象
  comState,             // 组件状态
  componentPropBindingMap,  // 组件-属性映射
  (cacheKey, data, apiName) => {
    console.log('接口数据就绪:', apiName);
  }
);
```

#### fetchApiData(apiRegistry, comState, apiDataCache, apiName, componentPropBindingMap, forceRefresh?, componentId?, callBack?)

请求单个接口数据，支持缓存和请求去重。

#### requestApi(apiRegistry, apiDataCache, comState, componentPropBindingMap, apiName, callback)

手动请求接口（与组件可见性无关）。

```js
import { requestApi } from '@/utils.js';

await requestApi(apiRegistry, apiDataCache, comState, componentPropBindingMap, 'myApi', (key, data, name) => {
  // 处理数据
});
```

### 6.7 数据过滤

#### applyFilter(filters, data, filterName, ...args)

```js
import { applyFilter } from '@/utils.js';

const result = applyFilter(window.filters, rawData, 'myFilter');
```

#### getDataValue(apiDataMap, binding)

```js
import { getDataValue } from '@/utils.js';

const value = getDataValue(apiDataMap, {
  name: 'airQualityApi',       // 接口名
  returnDataPath: 'data.list', // 返回数据路径
  filters: [{ name: 'formatAirData' }],  // 过滤器链
});
```

#### filterData(data, filters)

```js
import { filterData } from '@/utils.js';

const result = filterData(rawData, [
  { name: 'filterA' },
  { name: 'filterB' },
]);
```

### 6.8 其他工具

| 函数 | 签名 | 说明 |
|------|------|------|
| `guid` | `(short?: boolean, symbol?: string) => string` | 生成唯一 ID。`short=true` 生成短 ID |
| `getUrlParam` | `(name: string) => string\|null` | 从 hash 查询参数获取值 |
| `getQueryParam` | `(name: string) => string\|null` | 从 search 查询参数获取值 |
| `convertCharacter` | `(string: string) => string` | 转换 AQI 特殊字符（如 `O3` → `O₃`） |
| `replaceCssVariables` | `(obj, activeThemeName) => object` | 将对象中的 CSS 变量替换为实际值 |

---

## 7. WebSocket API

### 7.1 Socket.io（基座自动管理）

基座根据 `globalData.socketIp` 自动初始化 Socket.io 连接：

```js
// 基座 main.js 自动处理：
// - 连接 socketIp
// - 加入 socketRoom 房间
// - 监听 message 事件
// - 收到 internalType:ChangeGlobalValue 自动同步 globalData
```

### 7.2 原生 WebSocket

```js
// 通过 window.ths.initSocket 初始化
const ws = window.ths.initSocket(socketServer, roomCode, receiveCallback, closeCallback);

// 主动断开
window.ths.closeSocket();
```

| 方法 | 签名 | 说明 |
|------|------|------|
| `window.ths.initSocket` | `(socketServer, roomCode, receiveCallback, closeCallback) => WebSocket` | 初始化连接 |
| `window.ths.closeSocket` | `() => void` | 主动断开连接 |

**消息格式：**

```json
{
  "type": "message",
  "data": "消息内容"
}
```

- `type: "js"` — 执行 JS 代码（暂未启用）
- `type: "message"` — 触发 `receiveCallback(data)`

### 7.3 sendMessage

通过 HTTP 发送 WebSocket 消息：

```js
// 通过 inject('root') 获取
const root = inject('root');
root.sendMessage({
  type: 'customType',
  data: { key: 'value' }
});

// 或通过 window.__lego_root
window.__lego_root.sendMessage({ ... });
```

---

## 8. 生命周期与挂载

### 8.1 微应用生命周期

微应用入口兼容三种运行模式：

| 模式 | 触发方式 | mount/unmount |
|------|----------|---------------|
| 独立运行 | 直接访问 `localhost:5175` | 自行挂载 |
| iframe 沙箱 | 基座以 `<micro-app iframe>` 嵌入 | 自行挂载（micro-app 不调用） |
| default 沙箱 | 基座以 `<micro-app>` 嵌入 | micro-app 自动调用 |

```js
// 微应用入口自动处理
mount();  // 立即挂载

// 暴露生命周期（兼容 default 沙箱）
if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount };
}
```

### 8.2 环境变量

| 变量 | 类型 | 说明 |
|------|------|------|
| `window.__MICRO_APP_ENVIRONMENT__` | `boolean` | 是否处于 micro-app 环境 |
| `window.__MICRO_APP_NAME__` | `string` | 当前微应用名称 |
| `window.microApp` | `object` | micro-app 全局实例（独立运行时不存在） |

### 8.3 基座初始化顺序

```
1. microApp.start()
2. loadGlobalVariables()     → 注册 window.publicGlobalVariables + window.legoGlobalVariables
3. loadGlobalFunctions()     → 注册 window.dateFormat / window.getRegionLevel / ...
4. initGlobal()              → 合并变量到 reactive(global)，初次 setGlobalData
5. bindReactiveToGlobal()    → 双向绑定 global ↔ globalData
6. provide('root', rootValue) → 注入事件总线、Socket、sendMessage 等
7. Socket 初始化             → 根据 socketIp / webSocketUrl 自动连接
```

---

## 快速参考卡

### 微应用开发者常用 API

```js
// === 通信 ===
import { useBaseBridge, useGlobalData, useGlobalDataKey, setGlobalData, callBase, sendToBase } from '@/bridge.js';

// 读基座下发数据
const { baseData } = useBaseBridge();

// 读/写全局变量
const { globalData } = useGlobalData();
const regionCode = useGlobalDataKey('regionaQuery.regionCode');
setGlobalData({ activeTheme: '蓝色版' });

// 调用基座方法
const token = await callBase('getToken');
const level = await callBase('getRegionLevel', '350700000000');

// 发送消息
sendToBase({ type: 'form-submit', payload: data });

// === 地图 ===
import { TMap, createLayer } from '@/ths-map.js';
await TMap.goTo({ center: { x: 114, y: 26 } });
const layer = createLayer('pointLayer');

// === 弹窗 ===
const result = await callBase('showDialog', {
  componentName: 'RegionPickerDialog',
  title: '选择区域',
});

// === 全局函数（通过 callBase 调用） ===
await callBase('dateFormat', new Date(), 'yyyy-MM-dd');
await callBase('getRegionLevel', '350700000000');
await callBase('handleNoVal', someValue);
```
