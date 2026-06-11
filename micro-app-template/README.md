# 微前端开发调试模板

一个开箱即用的微前端模板，包含 **基座（base）** 和 **微应用（micro）** 两部分。

## 设计定位

- **基座**仅在本地开发调试用，**不参与交付**，最终部署到总集的是**微应用打包产物**
- 基座忠实地**复刻了生产环境的运行时** —— 全局变量、全局函数、注入层（`provide('root')`）、micro-app 三通道通信全部与原项目一致
- 开发者在模板中调试通过的逻辑，打包部署后可直接嵌入生产基座运行

## 技术栈

| 层级 | 技术 | 备注 |
|------|------|------|
| 基础 | Vue 3 + Vite 5 | |
| 路由 | vue-router 4 (hash) | |
| UI | element-plus | |
| 微前端 | @micro-zoe/micro-app v1 | iframe 沙箱 |
| 全局变量 | publicGlobalVariables + legoGlobalVariables | 保留生产字段结构 |

## 目录结构

```
.
├── package.json              # 根 workspaces，统一脚本入口
├── packages/
│   ├── base/                 # 基座（本地调试用，不需要部署）
│   │   ├── package.json
│   │   ├── vite.config.js    # dev server: 3000
│   │   ├── index.html
│   │   └── src/
│   │       ├── main.js       # 复刻原项目 main.js 流程
│   │       ├── App.vue       # 调试界面：数据下发 + 全局变量监视器 + 消息收件箱
│   │       ├── bridge.js     # 基座侧通信桥 ⭐
│   │       ├── http.js
│   │       ├── websocket.js
│   │       ├── utils.js
│   │       ├── theme.js
│   │       ├── resources/lang.js
│   │       └── globals/
│   │           ├── variables/    # 全局变量定义
│   │           ├── functions/    # 全局函数（挂 window）
│   │           └── filters/      # 过滤器（window.filters）
│   └── micro/                # 微应用（最终交付物）
│       ├── package.json
│       ├── vite.config.js    # dev server: 5175, 生产 base: './'
│       ├── index.html
│       └── src/
│           ├── main.js       # 适配 micro-app mount/unmount
│           ├── App.vue
│           ├── router.js     # hash 路由
│           ├── bridge.js     # 微应用侧通信桥 ⭐
│           └── views/
│               ├── Home.vue  # 演示三个通道
│               └── About.vue
```

## 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 同时启动基座 + 微应用
npm run dev

# 3. 浏览器打开
#    基座（调试用）  → http://localhost:3000
#    微应用（独立）  → http://localhost:5175
```

单独启动：

```bash
npm run dev:base    # 只启动基座
npm run dev:micro   # 只启动微应用
```

---

## 微前端通信 API 速查表

micro-app 提供**三套互补的通信通道**，本模板都用 bridge.js 封装好了。

### 通道 1：基座 → 单个子应用（定向 props 风格）

**用途**：基座给某个**特定**子应用下发数据（不影响别的子应用）。

| 操作 | 基座 | 子应用 |
|---|---|---|
| **写**（基座→子应用） | `setChildData({ userName: '张三' })` | — |
| **读** | — | `useBaseBridge().baseData.value.userName` |
| **模板里** | `<micro-app :data="dataToChild">` | `{{ baseData.userName }}` |

### 通道 2：子应用 → 基座

#### 2a. 发消息（事件风格，单向通知）

| 操作 | 基座 | 子应用 |
|---|---|---|
| **注册接收方** | `registerHandler('form-submit', payload => {...})` | — |
| **发消息** | — | `sendToBase({ type: 'form-submit', payload: {...} })` |

#### 2b. 调用方法（RPC 风格，可 await 拿返回值）

| 操作 | 基座 | 子应用 |
|---|---|---|
| **注册可调方法** | `registerMethod('getToken', () => 'abc')` | — |
| **或挂 window 上** | `window.getToken = () => 'abc'` | — |
| **调用 + 拿返回值** | — | `const token = await callBase('getToken')` |

> 💡 **window 函数 fallback**：子应用调 `callBase('xxx')` 时，基座先查 `registerMethod` 注册表，找不到就 fallback 到 `window.xxx`。这样 `globals/functions/` 下挂在 window 上的全局函数（**原项目的标准做法**），子应用可以直接调，**基座不用一个个注册**。

### 通道 3：全局共享数据（所有应用共用一份）

| 操作 | 基座（使用 `bindReactiveToGlobal` 后） | 子应用 |
|---|---|---|
| **读单字段** | `global.a.b.c` | `useGlobalDataKey('a.b.c').value` |
| **读整个对象** | `global` | `useGlobalData().globalData.value` |
| **写字段** | `global.x = 1` | `setGlobalData({ x: 1 })` |
| **批量写** | `Object.assign(global, {x:1, y:2})` | `setGlobalData({x:1, y:2})` |
| **监听变化** | `watch(() => global.x, v => ...)` | `watch(useGlobalDataKey('x'), v => ...)` |

> 💡 通道 3 由基座 `main.js` 里的 `bindReactiveToGlobal(global)` 全自动双向同步——基座代码直接操作 `global` 就行，**不需要手写 `microApp.setGlobalData`**。

---

## 三个通道怎么选？

| 想做的事 | 用哪个通道 | 为什么 |
|---|---|---|
| 给某个子应用单独传配置 | 通道 1 | 定向，不污染其他子应用 |
| 子应用通知基座"我做完了 XX" | 通道 2a（消息） | 单向通知，不需要返回值 |
| 子应用调基座功能并拿结果（取 token、弹 toast 拿结果） | 通道 2b（RPC） | 能 await，能 try/catch |
| 多个应用要共享状态（主题、区域、用户信息） | 通道 3 | 一处改，处处响应 |

---

## 完整示例

### 基座注册：通道 1 + 通道 2

[packages/base/src/App.vue](packages/base/src/App.vue) 或根组件 setup 里：

```js
import { useChildBridge } from './bridge.js'
import { ElMessage } from 'element-plus'

// useChildBridge(name) — name 与 <micro-app name="child-demo"> 对齐
// 同 name 多次调用返回同一实例；不同 name 是各自独立的 bridge
const {
  dataToChild,          // 传给 <micro-app :data="dataToChild">
  handleChildData,      // 传给 <micro-app @datachange="handleChildData">
  setData: setChildData,
  registerHandler,
  registerMethod,
} = useChildBridge('child-demo')

// 通道 1：定向下发数据
setChildData({ userName: '张三', theme: 'dark' })

// 通道 2a：注册普通消息接收
registerHandler('form-submit', (payload) => {
  console.log('表单提交了', payload)
})

// 通道 2b：注册 RPC 方法（子应用 await callBase 调用）
registerMethod('showToast', (msg, type = 'success') => {
  ElMessage[type](msg)
  return { ok: true, time: Date.now() }
})
```

### 基座绑定：通道 3

[packages/base/src/main.js](packages/base/src/main.js)：

```js
import { reactive, onUnmounted } from 'vue'
import { bindReactiveToGlobal } from './bridge.js'

const global = reactive({})

// 双向绑定：基座 global ↔ micro-app 数据池
const unbind = bindReactiveToGlobal(global)
onUnmounted(unbind)

// 之后操作 global 跟操作普通响应式对象一样
global.activeTheme = '蓝色版'             // 自动推给所有子应用
Object.assign(global, { userId: 'u123' }) // 批量也行
```

### 子应用使用所有通道

```js
import {
  useBaseBridge, sendToBase, callBase,
  useGlobalData, useGlobalDataKey, setGlobalData,
} from '@/bridge.js'

// ① 通道 1：响应式读基座下发的 data
const { baseData } = useBaseBridge()
console.log(baseData.value.userName)    // '张三'

// ② 通道 2a：单向通知基座
sendToBase({ type: 'form-submit', payload: { name: '张三' } })

// ③ 通道 2b：调基座方法 + 拿返回值
const result = await callBase('showToast', '保存成功')
console.log(result)   // { ok: true, time: 1717... }

// ④ 通道 3：读/写全局共享数据
const regionCode = useGlobalDataKey('regionaQuery.regionCode')
watch(regionCode, v => console.log('区域变了', v))

setGlobalData({ activeTheme: '蓝色版' })
```

---

## bridge.js 关键函数参考

### 基座侧 [packages/base/src/bridge.js](packages/base/src/bridge.js)

| 函数 | 返回 | 说明 |
|---|---|---|
| `useChildBridge(name)` | `{ dataToChild, handleChildData, setData, registerHandler, registerMethod }` | 通道 1+2 多实例（按 name 隔离） |
| `useGlobalData()` | `{ globalData, setGlobalData, watchGlobalData }` | 通道 3 单例（手动操作） |
| `bindReactiveToGlobal(obj)` | `unbind 函数` | 通道 3 自动绑定（推荐） |

### 子应用侧 [packages/micro/src/bridge.js](packages/micro/src/bridge.js)

| 函数 | 返回 | 说明 |
|---|---|---|
| `useBaseBridge()` | `{ baseData, sendToBase, callBase }` | 通道 1+2 单例 |
| `sendToBase(payload)` | — | 通道 2a：发消息（不要返回值） |
| `callBase(method, ...params)` | `Promise` | 通道 2b：调基座方法（可 await，内置 10s 超时） |
| `useGlobalData()` | `{ globalData, setGlobalData }` | 通道 3：全量订阅 |
| `useGlobalDataKey(path)` | `Vue ref` | 通道 3：单字段订阅（推荐，支持 `'a.b.c'`） |
| `setGlobalData(patch)` | — | 通道 3：合并式更新 |

> 💡 子应用 bridge **独立运行下安全降级**：直接访问子应用 URL 时（不经过基座），所有函数返回安全空值/no-op，方便单独调试。

---

## 弹窗 / 全屏遮罩怎么写

iframe 沙箱模式下，**子应用的弹窗无法越过 iframe 边界**——即使 ElDialog 默认 `append-to-body: true`，那个 body 也是 iframe 自己的 body。

**解决方案**：弹窗组件**放在基座**，子应用通过 RPC 让基座弹。

### 模板已内置示例

- 基座弹窗组件库：[packages/base/src/dialogs/](packages/base/src/dialogs/)
- 基座注册 RPC：[packages/base/src/App.vue](packages/base/src/App.vue) 里 `registerMethod('showDialog')`
- 子应用调用：[packages/micro/src/views/Home.vue](packages/micro/src/views/Home.vue) 里 `showBaseDialog` / `showRegionPicker`

### 子应用用法

```js
import { callBase, useGlobalData, setGlobalData } from '@/bridge.js';

// 弹一个简单提示弹窗
const result = await callBase('showDialog', {
  componentName: 'DemoDialogContent',    // 基座 dialogComponents 里注册的组件名
  title: '提示',
  width: '600px',
  props: { message: 'Hello', count: 42 },
});
console.log('用户点确认时回传:', result);   // { confirmed: true, reply: ... }

// 业务弹窗（区域选择，拿回选中值）
const region = await callBase('showDialog', {
  componentName: 'RegionPickerDialog',
  title: '请选择区域',
  props: { regions: [...], defaultCode: '350800000000' },
});
if (region) {
  setGlobalData({ regionaQuery: { ...region } });
}
```

### 新增一种弹窗

1. 在 `packages/base/src/dialogs/` 里新建组件，`defineProps` 接收数据，`emit('close', result)` 回传结果
2. 在 [packages/base/src/App.vue](packages/base/src/App.vue) 的 `dialogComponents` 里注册（一行：`MyDialog: markRaw(MyDialog)`）
3. 子应用 `callBase('showDialog', { componentName: 'MyDialog', props: {...} })`

> 💡 **生产基座（如 npdp）的写法略不同**：因为用的是 t-dialog（动态组件名是字符串），需要在 `app.component('MyDialog', MyDialog)` 全局注册，然后 t-dialog 内 `<component :is="componentName">` 按名字查找。

### ⚠️ 几个限制

- **props 必须可 JSON 序列化**：能传字符串/数字/纯对象/数组，不能传函数、Vue 组件实例、DOM 节点（iframe 边界会丢失这些）
- **不能用 slot**：iframe 边界传不了 VNode，插槽内容必须由基座的组件自己定义
- **生产环境对接**：实际项目里把 `ElDialog` 换成 `t-dialog`，把基座的 dialogs 组件库换成业务方提供的弹窗集合即可

---



本模板的基座是通过从生产项目**复刻运行环境**得来：

1. **`src/globals/`** —— 全局变量和函数，保持与原项目一致的字段名和函数名
2. **`src/main.js`** —— 忠实还原原项目的初始化流程：
   - `microApp.start()`
   - `loadGlobalVariables()` + `loadGlobalFunctions()`
   - `provide('root', rootValue)` 注入完整的 `rootEmit/rootOn/rootSocket/setSocketRoomId/sendMessage`
   - `window.__lego_root`、`window.router`、`window.app` 全局引用
   - `bindReactiveToGlobal(global)` 双向同步全局变量
3. **`src/websocket.js`** —— socket.io + 原生 WebSocket 完整逻辑（`socketIp` 为空时不启动，不报错）
4. **`src/utils.js`** —— 工具函数集合（guid, 页面缩放, 过滤器 等）

---

## 微应用依赖最佳实践

- 微应用保持**轻量**，只装自己需要的依赖
- 基座已经预装了 **echarts / lodash / axios / qs / mitt / moment** 等通用依赖（因为是基座环境的一部分），但这些**不能直接被微应用引用**——微应用在 iframe 中是独立 window
- 微应用若需要 echarts 等库：直接在 `packages/micro/` 下 `npm install echarts`

## 构建与发布

```bash
# 只构建微应用 → packages/micro/dist
npm run build

# 同时构建基座 + 微应用
npm run build:all
```

将 `packages/micro/dist/` 目录上传到总集对应位置即可。
微应用 `vite.config.js` 已设置 `base: './'`，产物用相对路径引用 asset，可放在总集任意子目录下。
