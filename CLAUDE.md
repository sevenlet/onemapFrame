# 一张图框架 3.0

低代码平台导出物 -> Vite+微前端工程的**转换工具集** + 样本/产物。本身不是应用工程，是工具与样本的集合。

## 目录地图

| 路径 | 用途 |
|---|---|
| `converter/` | ⭐核心工具：低代码导出 -> Vite+Vue3+micro-app 工程的转换器（npm 包 `@ths-fe-cli/lego-to-vite-converter`） |
| `micro-app-template/` | 微前端开发调试模板（base 基座 + micro 微应用 monorepo） |
| `npdp-转换后/` | 转换器输出实例（南平市生态环境体检平台，已 npm install） |
| `测试项目/` | 回归样本：成对 `_src`（平台原始导出）+ `转换后`（转换结果），11 个项目 |
| `转换后/` | 空目录（占位，未使用） |
| `部署产物/` | 11 个项目的批量构建 dist + `_logs/` + `_summary.log` |
| `工作清单.md` | 6 大任务路线图（模板/基座/LeGo升级/组件库/平台/转换脚本） |

`.gitignore` 忽略 `测试项目`、`转换后`、`部署产物`、`npdp-转换后` 四个产物/测试目录（不入库）。

## converter/ 转换器

npm 包 `@ths-fe-cli/lego-to-vite-converter` v1.1.1。把低代码平台导出的纯静态 Vue3 项目一键转为 Vite + 单文件 `.vue` 工程，并接入 micro-app 微前端基座。

- **入口** `converter/convert.js`（CLI: `convert-to-vite <源目录> <输出目录>`），仅编排各 Step
- **`converter/lib/step*.js`** 各步职责：
  - `step1-scaffold.js` — 写 package.json / vite.config.js / index.html
  - `step2-core.js` — 写 http.js / utils.js / websocket.js / main.js / bridge.js / theme.js
  - `step3-components.js` — ⭐核心：AST 改写 `src/<page>/index.js` -> `src/pages/<page>.vue`
  - `step4-globals.js` — `window.X = ...` -> `export const X = ...`
  - `step5-znxl.js` — znxl-inset*.js 迁移到 `src/znxl-lib/`
  - `step6-assets.js` — assets/、resources/、config/ 移到 `public/`（config/ 补 `micro-app-registry.json` 占位 `{}`）
  - `step7-route.js` — 生成 route.js（import.meta.glob 收集 pages）
  - `step7-microapp.js` — 写入 bridge.js（基座侧三通道通信桥）
  - `step8-cleanup.js` — 删除已转 .vue 的源组件目录
- **`converter/templates/`** 脚手架模板（package.json / vite.config.js / index.html / main.js / bridge.js / http.js / utils.js / websocket.js，占位符 `{{name}}`/`{{title}}`/`{{customScripts}}`）
- **`converter/config/component-name-map.json`** ~180 项 `t-xxx` -> PascalCase 组件名映射（step3 用）
- 运行时依赖 `@babel/parser` + `prettier`；输出目录已有 package.json 则跳过（防覆盖）
- 详尽文档见 `converter/README.md`

### 转换器关键约定

- **保留 customjs**：`lib/step1-scaffold.js` 的 `extractCustomJsScripts(html)` 抓源 index.html 里所有 `<script src=...>` 中路径含 `/customjs/` 的（用户自传 dayjs/echarts/moment/Sortable/vuedraggable/marked 等，暴露 `window.xxx`），规范化为 `/resources/customjs/<file>`，通过 `{{customScripts}}` 占位符回填到 `templates/index.html` 的 `</head>` 前
- **@ths/design 依赖**：转换生成的 main.js 顶部 `import '@ths/design/lib/style.css'`，需 @ths/design **1.1.28+** 在 package.json `exports` 暴露 `./lib/style.css` + `./es/style.css` 子路径，否则 vite 报 `Missing "./lib/style.css" specifier`
- **微应用注册表路径**：`micro-app-registry.json` 由平台后端在增删改微应用时生成，t-micro-app 组件按 id 查它拿 url/defaultPage。普通源码结构放 `config/`，工程化放 `public/config/`，运行时均用相对路径 `fetch('config/micro-app-registry.json')`（随部署子目录自适应）。两边 `loadMicroAppRegistry`/`getMicroAppById` 挂 window 供 t-micro-app 调用：普通模板在 `lc-visual-building public/template/3.0.0/src/utils.js`，工程模板在 `converter/templates/utils.js`（+ `templates/main.js` 启动时预加载）

## micro-app-template/ 微前端调试模板

npm workspaces monorepo，开箱即用的微前端调试环境。

- **`packages/base/`**（`@template/base`，仅本地调试用，不交付）— 复刻生产基座：microApp.start / provide('root') / bindReactiveToGlobal，dev server 3000，依赖 @ths/design + @micro-zoe/micro-app
- **`packages/micro/`**（`@template/micro`，最终交付物）— 适配 micro-app mount/unmount，hash 路由，dev 5175，生产 `base: './'`（产物可放任意子目录）
- 文档：`README.md`（通信 API 速查 + bridge.js 参考）、`API.md`（35KB 通信架构/微应用侧/基座侧 API）
- 基座桥 `packages/base/src/bridge.js`：`useChildBridge` / `useGlobalData` / `bindReactiveToGlobal`

## 关联仓库（跨仓库工作）

本仓库工作常需联动另外两个仓库（均在 `/Users/zhangjinxiu/Documents/工作/低代码平台LeGo/` 下），各有自己的 CLAUDE.md：

- **ths-design** (`/Users/zhangjinxiu/Documents/工作/低代码平台LeGo/ths-design`) — `@ths/design` 组件库（当前 1.1.41）。转换器生成的工程依赖它。组件开发约定、gis-map / micro-app 组件架构见该仓库 CLAUDE.md
- **lc-visual-building** (`/Users/zhangjinxiu/Documents/工作/低代码平台LeGo/lc-visual-building`) — 低代码平台 LeGo 前端。含 `public/template/3.0.0/` 应用模板（转换器的源结构参照）+ `public/template/update/` 存量升级机制。见该仓库 CLAUDE.md

## dist 部署前全局替换

部署产物里的 API 地址、资源路径、域名需批量替换时，用 `/dist-replace` 技能（dry-run + 按 searchValue 长度倒序，避免短串吞噬长串）。已知规则：
- npdp（南平体检平台）：见记忆 `dist-replace-rules-npdp`（10 条）
- npjsc（南平驾驶舱）：见记忆 `dist-replace-rules-npjsc`（12 条）

## 组件库/地图插件版本同步

`@ths/design` 或 `@ths-map-sdk/*` 发布新包后，用 `/sync-deps` 技能同步所有散落位置（技能 `.claude/skills/sync-deps/`）：

- **版本号来源（全本地读 ths-design 仓库）**：`@ths/design` 版本 ← `ths-design/packages/ths-design/package.json` 的 version；`@ths-map-sdk/*` 版本 ← `ths-design/package.json`（根）devDependencies（用户发布前手动维护为权威源）
- **同步范围**：
  - A. `@ths/design` 版本号：lc-visual-building / converter/templates / micro-app-template 的 micro+base（4 处，保留各自 ^ 风格）
  - B. `@ths-map-sdk/{api,map,mapgo-runtime,widgets}` 版本号：上述 4 处 dependencies + ths-design 内部 gis-map/ths-design 包 peerDependencies（2 处）
  - C. UMD 产物：`ths-design/packages/ths-design/lib/{index.js,style.css}` -> template/3.0.0 + update-files/3.0.0（4 个文件，仅 3.0.0，不碰 2.0.0）
  - D. 重新安装依赖（实跑后 Claude 执行）：ths-design / lc-visual-building `yarn install`，micro-app-template `npm install`（workspaces 根目录装一次，base/micro 自动链接）。不装 converter
- **不碰**：ths-design 根 package.json（权威源）、`@ths/design` 自身 version。micro-app-template overrides 块 + `.npm-tarballs/` 已删（临时方案清理）
- dry-run 必做，保留约束风格（`^`/`>=`/无），peerDeps 有则更新无则跳过，产物字节校验
- **⚠️ micro-app-template/.npmrc**：`@ths-map-sdk` registry 必须走内网 ths-map（`http://192.168.0.112:8081/repository/ths-map/`，与 ths-design 一致）。曾误配公共 npm（仅 2.0.0），导致 sync-deps 同步到 2.0.2 后 npm install 报 ETARGET

## 工作日志

macOS launchd 长期任务，每周一至五 17:57 生成，覆盖 `~/Documents/工作` 下各 Git 项目，汇总到 `~/Documents/工作/工作日志`（一周一文件）。
- plist: `~/Library/LaunchAgents/com.zjx.worklog.plist`
- 脚本: `~/Documents/工作/工作日志/write-worklog.sh`
- ⚠️ 不用 Claude Code CronCreate（recurring 7 天自动过期，不满足长期需求）
