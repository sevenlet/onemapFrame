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
│   │   ├── package.json      # 基座依赖
│   │   ├── vite.config.js    # dev server: 3000
│   │   ├── index.html
│   │   └── src/
│   │       ├── main.js       # 复刻原项目 main.js 流程
│   │       │                 # microApp.start → 全局变量 → provide → 三通道通信
│   │       ├── App.vue       # 调试界面：数据下发按钮 + 全局变量监视器 + 消息收件箱
│   │       ├── bridge.js     # 基座侧通信桥（useChildBridge + useGlobalData）
│   │       ├── http.js       # axios 实例
│   │       ├── websocket.js  # 原生 WebSocket（与生产一致）
│   │       ├── utils.js      # 工具函数
│   │       ├── theme.js      # 主题占位
│   │       ├── resources/
│   │       │   └── lang.js   # i18n 消息
│   │       └── globals/      # 全局变量 & 函数（与原项目一致）
│   │           ├── index.js
│   │           ├── variables/     # 全局变量定义
│   │           ├── functions/     # 全局函数（window.*）
│   │           └── filters/       # 过滤器（window.filters）
│   └── micro/                # 微应用（最终交付物）
│       ├── package.json
│       ├── vite.config.js    # dev server: 5175, 生产 base: './'
│       ├── index.html
│       └── src/
│           ├── main.js       # 适配 micro-app mount/unmount 生命周期
│           ├── App.vue
│           ├── router.js     # hash 路由
│           ├── bridge.js     # 微应用侧通信桥（useHostBridge + useGlobalData + useGlobalDataKey）
│           └── views/
│               ├── Home.vue  # 演示：定向数据 + 全局共享数据 + dispatch/RPC
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

## 通信三通道概述

模板封装了 micro-app 的三种通信通道，都与生产基座的通信方式完全一致：

| 通道 | 方向 | 用于 | 基座侧 API | 微应用侧 API |
|------|------|------|-----------|------------|
| ① `data` + `datachange` | 基座 → 单个子应用 | 定向传参（用户名、主题、token 等） | `dataToChild.userName = '张三'` | `useHostBridge().hostData` |
| ② `dispatch` + `datachange` | 子应用 → 基座 | 事件上报、RPC 调用 | `registerHandler()` / `registerMethod()` | `sendToHost()` / `callHost()` |
| ③ `setGlobalData` + `addGlobalDataListener` | 双向，跨所有模块 | **全局变量共享**（生产基座的主要通道） | `useGlobalData().globalData` | `useGlobalData().globalData` / `setGlobalData()` |

### 通道①：定向数据

基座 `App.vue`：

```js
import { useChildBridge } from './bridge.js'
const { dataToChild } = useChildBridge()
dataToChild.userName = '张三'
dataToChild.token = 'Bearer xxx'
```

微应用任意组件：

```js
import { useHostBridge } from '@/bridge.js'
const { hostData } = useHostBridge()
// hostData.userName 响应式更新
```

### 通道②：消息 / RPC

基座注册方法：

```js
const { registerHandler, registerMethod } = useChildBridge()
registerHandler('form-submit', (payload) => console.log(payload))
registerMethod('showToast', (msg) => alert(msg))
```

微应用调用：

```js
import { sendToHost, callHost } from '@/bridge.js'
sendToHost({ type: 'form-submit', payload: { name: '张三' } })
callHost('showToast', '你好')
```

### 通道③：全局共享数据（最关键）

基座自动在 `main.js` 中同步，`App.vue` 的监视器实时展示：

```js
import { useGlobalData } from './bridge.js'
const { globalData, setGlobalData } = useGlobalData()
console.log(globalData.value.regionaQuery)   // 响应式
setGlobalData({ activeTheme: '蓝色版' })     // 合并式更新
```

微应用：

```js
import { useGlobalData, useGlobalDataKey, setGlobalData } from '@/bridge.js'

// 方式一：全量订阅
const { globalData } = useGlobalData()
console.log(globalData.value.regionaQuery?.regionCode)

// 方式二：按字段订阅（推荐——更精确）
const regionCode = useGlobalDataKey('regionaQuery.regionCode')
watch(regionCode, v => console.log('区域变了', v))

// 方式三：直接更新
setGlobalData({ activeTheme: '蓝色版' })
```

## 原项目集成说明

本模板的基座是通过从当前 `南平市生态环境体检平台_转换后/` 项目**复刻运行环境**得来：

1. **`src/globals/`** —— 全局变量和函数，保持与原项目一致的字段名和函数名
2. **`src/main.js`** —— 忠实还原原项目的初始化流程：
   - `microApp.start()`
   - `loadGlobalVariables()` + `loadGlobalFunctions()`
   - `provide('root', rootValue)` 注入完整的 `rootEmit/rootOn/rootSocket/setSocketRoomId/sendMessage`
   - `window.__lego_root`、`window.router`、`window.app` 全局引用
   - `microApp.setGlobalData({ ...global })` + `addGlobalDataListener` 三通道通信
3. **`src/websocket.js`** —— socket.io + 原生 WebSocket 完整逻辑（`socketIp` 为空时不启动，不报错）
4. **`src/utils.js`** —— 工具函数集合（guid, 页面缩放, 过滤器 等）

## 微应用依赖最佳实践

- 微应用保持**轻量**，只装你自己需要的依赖
- 基座已经预装了 **echarts / lodash / axios / qs / mitt / moment** 等通用依赖（因为是基座环境的一部分），但这些**不能直接被微应用引用**——微应用在 iframe 中是独立 window
- 微应用若需要 echarts 等库：直接在 `packages/micro/` 下 `npm install echarts`

## 单独启动

```bash
npm run dev:base    # 只启动基座
npm run dev:micro   # 只启动微应用
```

## 构建与发布

```bash
# 只构建微应用 → packages/micro/dist
npm run build

# 同时构建基座 + 微应用
npm run build:all
```

将 `packages/micro/dist/` 目录上传到总集对应位置即可。  
微应用 `vite.config.js` 已设置 `base: './'`，产物用相对路径引用 asset，可放在总集任意子目录下。