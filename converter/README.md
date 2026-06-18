# lego-to-vite-converter

把低代码平台（一张图/lego）导出的纯静态 Vue 3 项目，一键转换成 **Vite + 单文件 .vue** 工程，并且接入 **micro-app 微前端基座**。

## 输入与输出

- **输入**：平台导出目录，结构形如 `src/<pageCode>/index.js` + `index.css`，配合 `assets/`、`resources/`、`globals/`、`route.js`、`theme.js` 等。
- **输出**：Vite 工程，结构形如 `src/pages/<pageCode>.vue`（扁平），加上 `vite.config.js`、`package.json`、`main.js`、`bridge.js`、`utils.js` 等模板文件。

## 安装

> **Node 版本要求：≥ 18**
> 转换脚本自身用了 `fs.rmSync({recursive, force})`（Node 14.14+）和 prettier 3（Node 14+），但**转换出来的项目**用 Vite 5，需要 Node 18+；所以统一按 18+ 要求。

```bash
cd converter
npm install        # 仅依赖 @babel/parser 和 prettier
```

> 不写 `"type": "module"`，整个 converter 按 CommonJS 解析；不会被父目录的 ESM 设置影响。

## 用法

```bash
node convert.js <源目录> <输出目录>
```

例：

```bash
node convert.js \
  ../测试项目/前端国产化-减污降碳-最新_src \
  ../测试项目/前端国产化-减污降碳-最新转换后
```

转换完成后：

```bash
cd <输出目录>
npm install
npm run dev
```

### 注意事项

- **输出目录已存在 `package.json` 会跳过**：脚本不会覆盖已转换好的项目；要重转必须先删除输出目录或里面的 `package.json`。
- **输出目录不存在时**：会先把源目录整个拷贝过去，避免污染源；后续所有改写都在输出目录里就地完成。

## 转换流程（8 个 Step）

[convert.js](convert.js) 只做编排，每个 Step 的领域逻辑都在 [lib/](lib/) 下独立模块里。

| Step | 文件 | 做什么 |
|---|---|---|
| 1 | [step1-scaffold.js](lib/step1-scaffold.js) | 写入 `package.json` / `vite.config.js` / `index.html`（来自 [templates/](templates/)，按目录名占位 `{{name}}` / `{{title}}`） |
| 2 | [step2-core.js](lib/step2-core.js) | 写入平台运行时文件 `http.js` / `utils.js` / `websocket.js` / `main.js` / `bridge.js`（直接覆盖为模板，与业务无关）；`theme.js` 读源 + 头部加 `export` |
| 3 | [step3-components.js](lib/step3-components.js) | **核心改写**：把 `src/<pageCode>/index.js` AST 改写为 `src/pages/<pageCode>.vue`。同时扫描 template 中的 `t-xxx` 自动生成 `import { ... } from '@ths/design'` 与 `components` 注册 |
| 4 | [step4-globals.js](lib/step4-globals.js) | `globals/variables/*.js`、`globals/functions/*.js` 从 `window.X = ...` 改为 `export const X = ...`；`publicGlobalFunctions.js` 特殊处理（顶层 `const xxx = ...` 全部 hoist 为 `window.xxx = ...`） |
| 5 | [step5-znxl.js](lib/step5-znxl.js) | `znxl-inset*.js` 移到 `src/znxl-lib/`，`znxl-inset.js`（[constants.js#KEEP_ZNXL](lib/constants.js)）改写 `const { ... } = Vue` 为标准 import |
| 6 | [step6-assets.js](lib/step6-assets.js) | `assets/` → `public/assets/`，`resources/` → `public/resources/`（iframe srcdoc 仍按 `/resources/` 加载，必须保留） |
| 7 | [step7-route.js](lib/step7-route.js) | 生成 `src/route.js`，用 `import.meta.glob('./pages/*.vue')` 自动收集；从源 `route.js` 抽 redirect 目标当首页 |
| 7.5 | [step7-microapp.js](lib/step7-microapp.js) | 写入 `src/bridge.js`（基座侧三通道通信桥）|
| 8 | [step8-cleanup.js](lib/step8-cleanup.js) | 删掉已转为 `pages/<name>.vue` 的源组件目录；保留 `globals` / `pages` / `znxl-lib` / `resources` |

## 几个关键约定

### 页面 / 组件命名
路由 `name` 一律是 ``${pageCode}Component``，与 `@ths/design` 内部 `ComponentLoader.loadComponent` 对齐 —— 这样 `<t-component>` 动态触发的 `router.addRoute({ path, name })` 能按 name 替换而非追加，避免**同 path 路由重复注册导致 router-view 反复挂载（"阴影叠加"症状）**。

### ths-design 组件库
- `package.json` 里固定 `@ths/design ^1.1.31`（[templates/package.json](templates/package.json)）。
- 1.1.27 起组件库自带 `.vue` 扁平结构 loader，无需 postinstall 补丁。
- 1.1.28 起 css 子路径暴露，转换脚本依赖此能力（见 [memory: ths-design 1.1.28 css exports](../.claude/projects/-Users-zhangjinxiu-Documents---------3-0/memory/ths-design-1.1.28-css-exports.md)）。
- kebab-case → PascalCase 映射在 [config/component-name-map.json](config/component-name-map.json)，约 180 项；新增组件只改 JSON。

### micro-app 基座
[templates/main.js](templates/main.js) 内置：
- `microApp.start()` 启动微前端；
- `bindReactiveToGlobal(global)`：基座 `global` ↔ micro-app `globalData` 双向同步（含防回环、防空对象覆盖、卸载自动清理）；
- 路由 `addRoute` 拦截：path 已存在则跳过（防 `t-component` 重复注册）。

### Socket / WebSocket
模板 [main.js](templates/main.js) 自带：
- `socket.io-client` 房间号通过 url `roomId` 参数 / guid 自动生成；
- `rootEmitter` 处理 `rootData:change` / `rootSocket:change` 事件；
- `webSocket` 通过 `window.ths.initSocket` 初始化（依赖 [templates/websocket.js](templates/websocket.js)）。

## 常见问题

### "缺少依赖" 退出
```
缺少依赖。请先安装 @babel/parser 与 prettier
```
直接 `cd converter && npm install`。

### "输出目录已存在 package.json，跳过转换"
要重新转换必须删掉输出目录的 `package.json`（或整个目录）。

### 转换后页面刷新空白 / router-view 不渲染
检查输出目录的 [src/main.js](templates/main.js) 中：
- `window.onload = handleRouteChange` 是否调用 `ComponentLoader.loadComponent`
- `router.beforeEach` 守卫是否正常 `next()`
- `addRoute` 拦截日志：浏览器 console 看是否有 `路由已存在，跳过重复添加: /xxx`

### 升级依赖版本
直接改 [templates/package.json](templates/package.json)，下次转换的项目自动用新版本，不用动转换脚本本身。

## 目录结构

```
converter/
├── convert.js              # 入口,只做编排
├── package.json
├── lib/
│   ├── constants.js        # 跨 step 共用的常量与 Vue API 列表
│   ├── util.js             # 文件读写、目录拷贝、命名清洗
│   ├── templates.js        # 模板读取 + 占位符替换
│   ├── ths-design.js       # 从 template 提取 t-xxx,生成 import 信息
│   ├── js-to-vue.js        # 核心 AST 改写:index.js → .vue
│   └── step1...8.js        # 8 个 step
├── templates/              # 跨项目相同的运行时文件
│   ├── main.js             # 含 micro-app 启动 + 路由守卫
│   ├── bridge.js           # micro-app 三通道通信桥
│   ├── utils.js            # 平台工具函数(动画/缩放/资源加载/动态组件…)
│   ├── http.js             # axios 实例
│   ├── websocket.js        # ths.initSocket 桥接
│   ├── vite.config.js
│   ├── index.html          # 占位符 {{title}}
│   └── package.json        # 占位符 {{name}}
└── config/
    └── component-name-map.json   # ths-design 组件名 kebab→Pascal 映射
```

## 已有的相关 memory（dist 替换规则）

转换完成、`vite build` 出 dist 后，部分项目还需要按域名/路径做全局字符串替换。已沉淀的脚本和规则见：

- [dist 替换脚本模板](../.claude/projects/-Users-zhangjinxiu-Documents---------3-0/memory/dist-replace-script.md) — Node 脚本模板，dry-run + 长度倒序
- [dist 替换规则 - npdp](../.claude/projects/-Users-zhangjinxiu-Documents---------3-0/memory/dist-replace-rules-npdp.md) — 南平市生态环境体检平台/dist 的 10 条规则
- [dist 替换规则 - npjsc](../.claude/projects/-Users-zhangjinxiu-Documents---------3-0/memory/dist-replace-rules-npjsc.md) — 南平驾驶舱/dist 的 12 条规则
