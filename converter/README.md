# @ths-fe-cli/lego-to-vite-converter

> 把低代码平台（一张图 / lego）导出的纯静态 Vue 3 项目，一键转换为 **Vite + 单文件 .vue** 工程，并接入 **micro-app 微前端基座**。

[![npm version](https://img.shields.io/npm/v/@ths-fe-cli/lego-to-vite-converter.svg)](https://www.npmjs.com/package/@ths-fe-cli/lego-to-vite-converter)
[![node](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)]()

---

## 是什么

低代码平台导出的项目是一堆裸 JS 组件（`src/<pageCode>/index.js` + `index.css`），不能直接接入工程化开发。本工具一行命令把它转换为：

- 标准 Vite 5 + Vue 3 工程
- 每个页面合并为单文件 `.vue`（扁平 `src/pages/<pageCode>.vue`）
- 自动识别 template 里的 `t-xxx` 组件，生成 `@ths/design` 的 import 与注册
- 内置 **micro-app 基座** + 路由守卫 + Socket / WebSocket 桥接

---

## 安装

> Node 版本要求：**≥ 18**

```bash
npm install -g @ths-fe-cli/lego-to-vite-converter
```

安装后会得到一个全局命令 `convert-to-vite`。

---

## 用法

```bash
convert-to-vite <源目录> <输出目录>
```

例：

```bash
convert-to-vite \
  ./前端国产化-减污降碳-最新_src \
  ./前端国产化-减污降碳-最新转换后
```

转换完成后：

```bash
cd <输出目录>
npm install
npm run dev
```

### 注意事项

- **输出目录已存在 `package.json` 会跳过**：脚本不会覆盖已转换好的项目。要重转必须先删除输出目录或里面的 `package.json`。
- **输出目录不存在时**：会先把源目录整个拷贝过去，避免污染源；后续所有改写都在输出目录里就地完成。
- **源目录 ≠ 输出目录**：必须是两个不同的路径。

---

## 输入 / 输出对比

### 输入（平台导出）

```
源目录/
├── src/
│   ├── <pageCode1>/
│   │   ├── index.js          # 平台运行时格式的 Vue 选项对象
│   │   └── index.css
│   └── <pageCode2>/...
├── assets/                    # 图片等静态资源
├── resources/                 # iframe srcdoc 用的资源
├── config/                    # 运行时配置（global-*-registry.js；micro-app-registry.json 由后端生成）
├── globals/                   # window 上挂的全局变量/函数
│   ├── variables/
│   └── functions/
├── route.js
├── theme.js
└── znxl-inset*.js             # 平台 znxl 注入文件
```

### 输出（Vite 工程）

```
输出目录/
├── src/
│   ├── pages/
│   │   ├── <pageCode1>.vue   # 扁平单文件
│   │   └── <pageCode2>.vue
│   ├── globals/              # window.X = ... 改为 export const X = ...
│   ├── znxl-lib/             # znxl-inset*.js 移到这里
│   ├── main.js               # 含 micro-app 启动 + 路由守卫
│   ├── bridge.js             # micro-app 三通道通信桥
│   ├── route.js              # 用 import.meta.glob 自动收集
│   ├── utils.js / http.js / websocket.js / theme.js
├── public/
│   ├── assets/
│   ├── resources/
│   └── config/               # 含 micro-app-registry.json（运行时微应用注册表，后端生成）
├── index.html
├── vite.config.js
└── package.json              # 已声明完整运行时依赖
```

---

## 转换流程（8 个 Step）

`convert.js` 只做编排，每个 Step 的领域逻辑都在 [lib/](lib/) 下独立模块里。

| Step | 文件 | 做什么 |
|---|---|---|
| 1 | [lib/step1-scaffold.js](lib/step1-scaffold.js) | 写入 `package.json` / `vite.config.js` / `index.html`（来自 [templates/](templates/)，按目录名占位 `{{name}}` / `{{title}}`） |
| 2 | [lib/step2-core.js](lib/step2-core.js) | 写入平台运行时文件 `http.js` / `utils.js` / `websocket.js` / `main.js` / `bridge.js`；`theme.js` 读源 + 头部加 `export` |
| 3 | [lib/step3-components.js](lib/step3-components.js) | **核心改写**：把 `src/<pageCode>/index.js` AST 改写为 `src/pages/<pageCode>.vue`。扫描 template 中的 `t-xxx` 自动生成 `@ths/design` import 与 `components` 注册 |
| 4 | [lib/step4-globals.js](lib/step4-globals.js) | `globals/variables/*.js` 与 `globals/functions/*.js` 从 `window.X = ...` 改为 `export const X = ...`；`publicGlobalFunctions.js` 特殊处理 |
| 5 | [lib/step5-znxl.js](lib/step5-znxl.js) | `znxl-inset*.js` 移到 `src/znxl-lib/`，改写 `const { ... } = Vue` 为标准 import |
| 6 | [lib/step6-assets.js](lib/step6-assets.js) | `assets/` → `public/assets/`，`resources/` → `public/resources/`，`config/` → `public/config/`（并补 `micro-app-registry.json` 占位） |
| 7 | [lib/step7-route.js](lib/step7-route.js) | 生成 `src/route.js`，用 `import.meta.glob('./pages/*.vue')` 自动收集 |
| 7.5 | [lib/step7-microapp.js](lib/step7-microapp.js) | 写入 `src/bridge.js`（基座侧三通道通信桥）|
| 8 | [lib/step8-cleanup.js](lib/step8-cleanup.js) | 删掉已转为 `pages/<name>.vue` 的源组件目录 |

---

## 关键约定

### 页面 / 组件命名

路由 `name` 一律是 `` `${pageCode}Component` ``，与 `@ths/design` 内部 `ComponentLoader.loadComponent` 对齐 —— 这样 `<t-component>` 动态触发的 `router.addRoute({ path, name })` 能按 name 替换而非追加，避免**同 path 路由重复注册导致 router-view 反复挂载（"阴影叠加"症状）**。

### @ths/design 组件库

- 模板 [templates/package.json](templates/package.json) 里固定 `@ths/design ^1.1.32`。
- 1.1.27 起组件库自带 `.vue` 扁平结构 loader。
- 1.1.28 起 css 子路径暴露，转换脚本依赖此能力。
- 组件名 kebab-case → PascalCase 映射在 [config/component-name-map.json](config/component-name-map.json)（约 180 项）；新增组件**只改 JSON**，无需改代码。

### micro-app 基座

[templates/main.js](templates/main.js) 内置：

- `microApp.start()` 启动微前端
- `bindReactiveToGlobal(global)`：基座 `global` ↔ micro-app `globalData` 双向同步（含防回环、防空对象覆盖、卸载自动清理）
- 路由 `addRoute` 拦截：path 已存在则跳过（防 `t-component` 重复注册）

### Socket / WebSocket

模板自带：

- `socket.io-client` 房间号通过 url `roomId` 参数 / guid 自动生成
- `rootEmitter` 处理 `rootData:change` / `rootSocket:change` 事件
- `webSocket` 通过 `window.ths.initSocket` 初始化（依赖 [templates/websocket.js](templates/websocket.js)）

### 内置依赖

[templates/package.json](templates/package.json) 已声明转换后项目运行所需的全部依赖，包括但不限于：

- 框架：`vue` `vue-router` `vuex` `element-plus` `@ths/design`
- 图表：`echarts` / `echarts-liquidfill` / `echarts-wordcloud` / `highcharts`
- 地图：`ol`（OpenLayers）—— 配合 `@ths/design` 的地图组件
- 3D / 多媒体：`three` / `video.js`
- 通用：`axios` / `lodash` / `moment` / `mitt` / `qs` / `socket.io-client` / `@turf/turf`
- 微前端：`@micro-zoe/micro-app`

如需调整版本，**改 [templates/package.json](templates/package.json) 后重发版本**即可，下次转换出来的项目就用新版本。

---

## 常见问题

### "缺少依赖" 退出

```
缺少依赖。请先安装 @babel/parser 与 prettier
```

通过 `npm install -g` 安装时这两个依赖会自动装上；如果是 `git clone` 后本地跑：

```bash
cd converter
npm install
```

### "输出目录已存在 package.json，跳过转换"

要重新转换必须删掉输出目录的 `package.json`（或整个目录）。

### 转换后页面刷新空白 / router-view 不渲染

检查输出目录的 `src/main.js` 中：

- `window.onload = handleRouteChange` 是否调用 `ComponentLoader.loadComponent`
- `router.beforeEach` 守卫是否正常 `next()`
- `addRoute` 拦截日志：浏览器 console 看是否有 `路由已存在，跳过重复添加: /xxx`

### 升级转换后项目的某个依赖版本

直接改 [templates/package.json](templates/package.json) 的对应字段，下次转换的项目自动用新版本，不用动转换脚本本身。然后 `npm run release:patch` 重发。

---

## 维护者文档：怎么发布新版本

> 这一节给本工具的**维护者**看。普通用户跳过即可。

```bash
cd converter

# 1. 改你想改的（templates/ 加依赖、lib/ 改逻辑等）

# 2. 发版（三选一）
npm run release:patch   # x.x.1 → x.x.2  仅改依赖 / 修小 bug
npm run release:minor   # x.1.x → x.2.0  新增 step / 新能力，旧用法不变
npm run release:major   # 1.x.x → 2.0.0  改了命令行参数等破坏性改动

# 3. 发布过程：
#    npm publish 会要求浏览器扫码做 2FA 验证
#    按 ENTER → 浏览器自动打开 → 用 Passkey / 安全密钥确认 → 终端继续完成发布
#    扫码弹窗里勾选 "Do not challenge ... for the next 5 minutes" 可在 5 分钟内免再次扫码

# 4. 提交（version 改动）
git add package.json templates/package.json   # 看你改了哪些
git commit -m "chore(converter): release x.x.x - 说明"
git push
```

### 用户那边升级

```bash
npm i -g @ths-fe-cli/lego-to-vite-converter@latest
```

---

## 相关沉淀

转换完成、`vite build` 出 dist 后，某些项目还需要按域名 / 路径做全局字符串替换。已沉淀的脚本和规则见仓库 memory：

- `dist 替换脚本模板` — Node 脚本模板，dry-run + 长度倒序
- `dist 替换规则 - npdp` — 南平市生态环境体检平台 / dist 的 10 条规则
- `dist 替换规则 - npjsc` — 南平驾驶舱 / dist 的 12 条规则

---

## License

MIT © thssilu
