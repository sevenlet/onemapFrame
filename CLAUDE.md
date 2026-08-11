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

两个技能配合，`/bump-map-sdk` 管上游（查最新 + 改源仓库 + 发 @ths/design），`/sync-deps` 管下游传播。地图插件发新版时**直接跑 `/bump-map-sdk`**，它跑完会自动衔接 sync-deps。

### `/bump-map-sdk`（技能 `.claude/skills/bump-map-sdk/`）

`@ths-map-sdk/*` 发新版后的端到端流程：查 Nexus ths-map 最新版 -> 更新 **3 个源文件** -> `yarn install` -> `yarn lib` -> bump 版本 -> `yarn publish` -> **校验确有新版本** -> 衔接 sync-deps。

- 更新的 3 个文件：`ths-design/package.json`（根 devDeps，5 个含 core，`^`）、`ths-design/packages/components/gis-map/package.json`（peerDeps，4 个无 core，`>=`）、`一张图框架3.0/topic-layer-runtime/package.json`（peerDeps，4 个无 core，`>=`）
- **发布目录是 `packages/ths-design`，不是仓库根**（根包 `vue-components` 是 private）；命令 `yarn publish --new-version <v> --no-git-tag-version`
- ⚠️ **yarn publish 会假成功**：`~/.npmrc` 里 token 格式正确但失效时，报 `success Published` 而实际没发。必须用 `npm view @ths/design@<v> version --registry=<npm-ths> --cache=/tmp/verify-<v>` 校验（**不能用 `yarn info`**，它会回退读本地已 bump 的 package.json 误报成功）。E404 = 让用户 `npm login --registry=<npm-vue-components>` 后重发
- 版本号每次向上 +1；publish 由 Claude 执行，`npm login` 交互输密码由用户手动

### `/sync-deps`（技能 `.claude/skills/sync-deps/`）

- **版本号来源（全本地读，不联网）**：`@ths/design` ← `ths-design/packages/ths-design/package.json` 的 version；`@ths-map-sdk/*` ← `ths-design/package.json`（根）devDependencies（权威源）；`@ths-map/topic-layer-runtime` ← `一张图框架3.0/topic-layer-runtime/package.json` 的 version（本仓库自产包）
- **同步范围**：
  - A. `@ths/design` 版本号：lc-visual-building / converter/templates / micro-app-template 的 micro+base（4 处，保留各自 ^ 风格）
  - B. `@ths-map-sdk/{api,map,mapgo-runtime,widgets}` 版本号：上述 4 处 dependencies + ths-design 内部 gis-map/ths-design 包 peerDependencies（2 处）
  - B2. `@ths-map/topic-layer-runtime` 版本号：converter/templates + micro+base（**3 处**，lc 不装 npm 包走 UMD）
  - C. UMD 产物：`ths-design/packages/ths-design/lib/{index.js,style.css}` -> template/3.0.0 + update-files/3.0.0（4 个文件，仅 3.0.0，不碰 2.0.0）+ 打包 ths-design.zip（lib/index.js + lib/style.css，flat zip -> lc-visual-building/public/）
  - D. 重新安装依赖（实跑后 Claude 执行）：ths-design / lc-visual-building `yarn install`，micro-app-template `npm install`（workspaces 根目录装一次，base/micro 自动链接）。不装 converter
- **不碰**：ths-design 根 package.json（权威源）、`@ths/design` 自身 version、topic-layer-runtime 的 UMD 4 文件（只校验）。micro-app-template overrides 块 + `.npm-tarballs/` 已删（临时方案清理）
- dry-run 必做，保留约束风格（`^`/`>=`/无），peerDeps 有则更新无则跳过，产物字节校验
- **lc-visual-building 有 commitlint**：提交必须用 conventional type，`build: sync-deps update ...`，header ≤ 100 字符；另两个仓库可用 `sync-deps:`

### `@ths-map/topic-layer-runtime`（本仓库自产包，与 @ths/design 是两条独立发布线）

源码 `topic-layer-runtime/`，发到 ths-map registry。**ths-design 里 0 处引用** —— 它变了不需要重发 `@ths/design`。

- scope 是 `@ths-map` 不带 `-sdk`（与 `@ths-map-sdk/*` 是两个 scope，同一个 registry）
- 两种消费形态：npm 包（3 处 dependencies，sync-deps 传播）+ **UMD 全局脚本**（lc 的 `template/3.0.0/resources/` 与 `update-files/3.0.0/resources/` 各一对 `topic-layer-runtime.global.js{,.map}`，index.html + head.txt 引用，update-config.json 有 2 条 fileAdd）
- **UMD 4 文件由用户手动拷**（源头 `topic-layer-runtime/dist/`，两个技能都只校验不拷，避免拷到未 build 的过期 dist）。⚠️ **`.js` 与 `.map` 必须成对拷**：曾出现只拷 `.js`、`.map` 落后一周，debug 时源码映射到旧代码
- 发包用户手动：`topic-layer-runtime/` 目录 `npm publish`（`prepack` 自动 build）。若源码 version 领先 registry，sync-deps 照样传播到下游，随后 `npm install` 会 ETARGET —— `/bump-map-sdk` 的三方比对（registry / 本地源 / 下游 3 处声明）会提前报出来

- **⚠️ micro-app-template/.npmrc**：`@ths-map-sdk` 与 `@ths-map` registry 都必须走内网 ths-map（`http://192.168.0.112:8081/repository/ths-map/`，与 ths-design 一致）。曾误配公共 npm（仅 2.0.0），导致 sync-deps 同步到 2.0.2 后 npm install 报 ETARGET

## template/3.0.0 ↔ update-files/3.0.0 同步

`lc-visual-building/public/template/3.0.0/`（应用源码模板，权威源）改了任何被 `update/update-config.json` 引用的文件后，用 `/sync-template-update` 技能把对应 `update/update-files/3.0.0/` 升级产物同步一致（技能 `.claude/skills/sync-template-update/`）。

- **全文件操作 fileAdd/fileReplace**（如 `src/dev-micro-app.js`、`src/main.js`、`src/bridge.js`、`src/micro-app-config.js`、`resources/micro-app.umd.js` 等）：按 `template -> update-files` 方向自动字节同步。映射 `rel = targetPath/basename(originPath)`（3.0.0 originPath 恰为全路径；2.0.0 是扁平的靠 targetPath 提供目录）
- **片段操作 text\***（`html-fragments/*.txt` 锚定 index.html）：只做空白归一化的内容校验，不自动改（片段针对升级前 2.x 文件编写，缩进可能异于 3.0.0 模板，归一化后才不误报）
- **ths-design UMD 2 文件**（`resources/ths-design/index.js`、`style.css`）：权威源是 `ths-design/lib`，本技能只校验不拷，不一致提示跑 `/sync-deps`
- dry-run 必做；默认 3.0.0，`--ver=2.0.0` 可复用（2.0.0 有历史漂移，需人工判断，不自动改）
- 与 sync-deps 互补：sync-deps 管 UMD 产物（从 lib 同步到 template+update 两处），本技能管源文件（从 template 同步到 update）

## 工作日志

每天需要写日志时手动执行 `/worklog` 技能（`.claude/skills/worklog/`）。扫描 `~/Documents/工作` 下各 Git 项目当天的 git log/diff/文件变更，汇总到 `~/work-log/YYYY-Www.md`（一周一文件、按日期记录；当天已存在则更新）。
- 技能：`一张图框架3.0/.claude/skills/worklog/SKILL.md`，`/worklog` 触发
- 输出目录：`~/work-log/`（`/Users/zhangjinxiu/work-log/`）
- 手动在 Claude Code 里执行，responsible 是 VSCode，有 `~/Documents` 访问权限，不受 TCC 限制
- ⚠️ 曾用 launchd 自动跑（`com.zjx.worklog.plist`，周一至五 17:57 触发 `claude -p`），但因 macOS TCC 死结放弃：launchd 经 `/bin/zsh` 启动 claude，responsible 是平台二进制 `/bin/zsh`，无法授权访问 `~/Documents/工作`，claude 读不到 git 数据。plist 已移到 `~/work-log/com.zjx.worklog.plist.disabled` 留档。不用 Claude Code CronCreate（recurring 7 天自动过期）。
