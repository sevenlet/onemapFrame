---
name: sync-deps
description: 组件库 @ths/design 或地图插件 @ths-map-sdk/* 发布新包后，同步所有散落位置的版本号 + UMD 产物。@ths/design 版本读 ths-design 聚合包 package.json，@ths-map-sdk 版本读 ths-design 根 package.json devDependencies（用户发布前手动维护为权威源），@ths-map/topic-layer-runtime 版本读 一张图框架3.0/topic-layer-runtime/package.json。支持 dry-run、保留各位置约束风格(^/>=/无)、peerDeps 有则更新无则跳过、产物字节校验。当用户发布完组件库新版本需要更新 lc-visual-building / converter / micro-app-template 各 package.json 与 ths-design 内部 gis-map、ths-design 包 peerDependencies，以及 template/3.0.0、update-files/3.0.0 的 ths-design UMD 产物时使用。
---

# 依赖版本同步

## 何时使用

`@ths/design` 或 `@ths-map-sdk/*` 发布新包后，把版本号 + UMD 产物同步到所有散落位置。典型场景：
- 组件库发新版（如 1.1.43 -> 1.1.44）：更新下游 4 处 package.json 的 `@ths/design` 依赖 + 拷贝 UMD 产物到 template/3.0.0 和 update-files/3.0.0
- 地图插件发新版（如 @ths-map-sdk/map 2.0.4 -> 2.0.5）：更新下游 4 处 package.json + ths-design 内部 gis-map/ths-design 包 peerDependencies 的 `@ths-map-sdk/*`
- 自产包 `@ths-map/topic-layer-runtime` 发新版：更新下游 3 处 package.json（converter/templates + micro base/micro）

**前提**：ths-design 仓库本地已是最新——用户已手动改 `ths-design/package.json`（根）devDependencies 里的 `@ths-map-sdk/*` 到新版本，已改 `packages/ths-design/package.json` 的 version，且已 `yarn lib` 构建好 `packages/ths-design/lib/`。（跑 `/bump-map-sdk` 会自动满足这些前提。）

## 版本号来源（全本地读，不依赖网络）

- `@ths/design` 版本 ← `ths-design/packages/ths-design/package.json` 的 `version`
- `@ths-map-sdk/*` 版本 ← `ths-design/package.json`（根）devDependencies（用户手动维护为权威源，取 api/map/mapgo-runtime/widgets 4 个，core 不同步）
- `@ths-map/topic-layer-runtime` 版本 ← `一张图框架3.0/topic-layer-runtime/package.json` 的 `version`（本仓库自产包，源码即权威源）
  - ⚠️ 本地源可能领先于 registry（有未发布改动）。sync-deps 离线不校验，**靠 `/bump-map-sdk` 步骤 1 的三方比对报告兜底**：若它报「本地源比 registry 新」，先让用户 `npm publish` 再跑 sync-deps，否则下游装不到

## 同步清单

**A. @ths/design 版本号（4 处下游，保留各自 ^ 风格）**

| 文件 | 风格 |
|---|---|
| `lc-visual-building/package.json` | 无 ^ |
| `converter/templates/package.json` | ^ |
| `micro-app-template/packages/micro/package.json` | ^ |
| `micro-app-template/packages/base/package.json` | ^ |

**B. @ths-map-sdk/{api, map, mapgo-runtime, widgets} 版本号（4 处下游 dependencies + 2 处内部 peerDependencies）**

| 文件 | 字段 |
|---|---|
| `lc-visual-building/package.json` | dependencies |
| `converter/templates/package.json` | dependencies |
| `micro-app-template/packages/micro/package.json` | dependencies |
| `micro-app-template/packages/base/package.json` | dependencies |
| `ths-design/packages/components/gis-map/package.json` | peerDependencies |
| `ths-design/packages/ths-design/package.json` | peerDependencies |

`topic-layer-runtime/package.json` 的 `@ths-map-sdk/*` peerDeps **不在此表** —— 由 `/bump-map-sdk` 负责（它是源仓库侧，跟 gis-map peerDeps 同批处理）。

**B2. @ths-map/topic-layer-runtime 版本号（3 处下游 dependencies，^ 风格）**

| 文件 | 字段 |
|---|---|
| `converter/templates/package.json` | dependencies |
| `micro-app-template/packages/micro/package.json` | dependencies |
| `micro-app-template/packages/base/package.json` | dependencies |

`lc-visual-building` **不在此表**：它不装 npm 包，走 UMD 全局脚本（见 D 节）。

**C. UMD 产物文件（4 个，仅 3.0.0）+ ths-design.zip**

| 源 `ths-design/packages/ths-design/lib/` | 目标 |
|---|---|
| `index.js` | `lc-visual-building/public/template/3.0.0/resources/ths-design/index.js` |
| `style.css` | `lc-visual-building/public/template/3.0.0/resources/ths-design/style.css` |
| `index.js` | `lc-visual-building/public/template/update/update-files/3.0.0/resources/ths-design/index.js` |
| `style.css` | `lc-visual-building/public/template/update/update-files/3.0.0/resources/ths-design/style.css` |

另打包 `ths-design.zip`（低代码平台 `api-config.js` 的 `thsDesignPackageUrl` 分发用）：lib/index.js + lib/style.css 打包成 flat zip（index.js + style.css）-> `lc-visual-building/public/ths-design.zip`。

**D. 不碰**

- `update-files/2.0.0/`（只更新 3.0.0）
- `ths-design/package.json`（根，是权威源，用户手动维护）
- `ths-design/packages/ths-design/package.json` 的 `version`（@ths/design 自身版本，发布动作）
- `micro-app-template/.npm-tarballs/` 已删（overrides 块也已删，临时方案清理完）
- **topic-layer-runtime 的 UMD 4 文件**：`lc-visual-building/public/template/3.0.0/resources/topic-layer-runtime.global.js{,.map}` + `update/update-files/3.0.0/resources/` 同名 2 个。源头是 `一张图框架3.0/topic-layer-runtime/dist/`，**由用户 build 后手动拷**（update-config.json 有 2 条 `fileAdd` 引用，index.html + head.txt 有 script 标签）。本技能只报告是否与 dist 一致，不拷
- **topic-layer-runtime 自身的 `@ths-map-sdk/*` peerDeps**（`/bump-map-sdk` 管）

**E. 重新安装依赖（实跑后，Claude 执行）**

版本号改完必须重装依赖，否则 node_modules 还是旧包。对 3 个项目根目录跑：

| 项目根目录 | 命令 | 说明 |
|---|---|---|
| `ths-design` | `yarn install` | lerna + yarn workspaces，一次装所有子包 |
| `lc-visual-building` | `yarn install` | 普通项目 |
| `micro-app-template` | `npm install` | npm workspaces，根目录装一次，base/micro 自动链接，**不用分别装** |

不装 converter（工具自身不依赖 @ths/design，templates/package.json 是生成模板不实际安装）。

**F. git commit（实跑后，Claude 执行）**

对 3 个仓库分别执行 `git add`（仅 sync-deps 变更的文件）+ `git commit`，避免混入工作区其他改动。

| 仓库根目录 | git add 文件 | 说明 |
|---|---|---|
| `ths-design` | `package.json`(根，若 devDeps 有改动), `packages/components/gis-map/package.json`, `packages/ths-design/package.json`, `yarn.lock` | 根 devDeps（若 Claude 按用户指示更新了 `@ths-map-sdk/*` 版本）+ peerDeps + yarn.lock。注意 `packages/ths-design/package.json` 若 version 字段已由用户提交，diff 只剩 peerDeps，正常 |
| `lc-visual-building` | `package.json`, `public/template/3.0.0/resources/ths-design/index.js`, `public/template/3.0.0/resources/ths-design/style.css`, `public/template/update/update-files/3.0.0/resources/ths-design/index.js`, `public/template/update/update-files/3.0.0/resources/ths-design/style.css`, `public/ths-design.zip`, `yarn.lock` | 版本号 + UMD 产物 + zip + yarn.lock |
| `一张图框架3.0` | `converter/templates/package.json`, `micro-app-template/packages/micro/package.json`, `micro-app-template/packages/base/package.json`, `micro-app-template/package-lock.json`, `micro-app-template/yarn.lock`, `topic-layer-runtime/package.json`（若有改动） | converter templates + micro/base + lock 文件；`topic-layer-runtime/package.json` 的 `@ths-map-sdk/*` peerDeps 由 `/bump-map-sdk` 改，属本仓库，随这次一起提交 |

提交信息格式（**各仓库不同，lc-visual-building 有 commitlint 强制 conventional 格式**）：

| 仓库 | 提交信息格式 | 说明 |
|---|---|---|
| `ths-design` | `sync-deps: update @ths-map-sdk/* (api x.x.x, map x.x.x, mapgo-runtime x.x.x, widgets x.x.x)` | 无 commitlint；只列 map SDK（@ths/design 的 version 是用户发布动作，不进本仓库 sync commit） |
| `lc-visual-building` | `build: sync-deps update @ths/design to {ver} + @ths-map-sdk/*` | **commitlint 强制 conventional type**，`sync-deps:` 非合法 type 会被拒；header ≤ 100 字符 |
| `一张图框架3.0` | `sync-deps: update @ths/design to {ver} and @ths-map-sdk/* (api x.x.x, ...)` | 无 commitlint，可带完整版本明细；若 topic-layer-runtime 版本也变了，追加 `+ topic-layer-runtime x.x.x` |

提交信息末尾追加 `Co-Authored-By: Claude <noreply@anthropic.com>` 尾注（用第二个 `-m` 传，不计入 header 长度）。

## 执行步骤

1. 把下方脚本写到 `/tmp/sync-deps.js`
2. **先 dry-run**：`node /tmp/sync-deps.js --dry-run`，看版本号变更明细（旧值 -> 新值）+ 产物字节对比
3. 确认合理后实跑：`node /tmp/sync-deps.js`
4. **重新安装依赖**（实跑后，必做）：对 3 个项目根目录跑安装命令（ths-design / lc-visual-building 用 `yarn install`，micro-app-template 用 `npm install`）。micro-app-template 是 workspaces，根目录装一次即可。安装由 Claude 执行（不进 Node 脚本），失败时根据输出判断处理
5. 报告：版本号变更处数、产物拷贝数、安装结果、后续动作提示
6. **git commit**（实跑后，Claude 执行）：对 3 个仓库分别执行 `git add`（仅 sync-deps 变更的文件，按 F 节清单）+ `git commit`，提交信息按 F 节"提交信息格式"表（**lc-visual-building 用 `build:` 前缀**，ths-design / 一图框架3.0 用 `sync-deps:`），末尾加 `Co-Authored-By` 尾注

## 关键规则

- **保留约束风格**：读目标当前值的前缀（`^` / `>=` / `~` / 无），新版本套同样前缀。lc-visual-building 的 `@ths/design` 无 ^ 保持无 ^；gis-map/ths-design 聚合包 peerDeps 保持 `>=`；下游 dependencies 保持 `^`
- **JSON 精确改写**：每文件读一次 -> 改字段 -> `JSON.stringify(obj, null, 2)` 写回（保留末尾换行），避免正则误伤
- **peerDeps 有则更新无则跳过**：gis-map/ths-design 聚合包 peerDependencies 里若某 `@ths-map-sdk/*` 不存在则跳过并报告，不擅自添加（补依赖项是前置修复已做，技能只更新版本号）
- **产物字节校验**：源存在且字节 > 0 才拷贝；拷贝后校验目标字节 == 源字节；源/目标已一致则跳过
- **ths-design.zip md5 校验**：对比 zip 内 index.js/style.css 的 md5 与 lib 源；一致跳过，不一致才重打包；打包后再次 md5 校验。execSync 读 zip 内文件需 maxBuffer（index.js 5.6MB 超默认 1MB）
- **dry-run 必做**：先看变更再实跑
- **幂等**：已是新值的位置跳过
- **安装由 Claude 执行，不进 Node 脚本**：命令因项目而异（yarn/npm）、耗时长且可能失败（peerDeps 冲突/网络），Claude 执行能解读日志并处理
- **micro-app-template 根目录装一次**：npm workspaces，base/micro 自动链接，不在 packages/base 或 packages/micro 分别装
- **只 git add sync-deps 变更文件**：使用明确的文件列表 `git add file1 file2 ...`，不使用 `git add .` 或 `git add -A`，避免混入工作区其他改动（如 CLAUDE.md、.claude/ 等）
- **lc-visual-building commitlint**：该仓库 husky `commit-msg` 钩子强制 conventional commit（`type: subject`），`sync-deps:` 非合法 type 会被拒（报 `type may not be empty` + `header-max-length>100`）。lc 提交用 `build: sync-deps update ...` 前缀，header ≤ 100 字符。ths-design / 一图框架3.0 无此限制，`sync-deps:` 可用
- **lc-visual-building lint-staged**：pre-commit 钩子对暂存的 UMD `index.js`/`style.css` 跑 `eslint --fix`/`stylelint --fix`，但压缩 bundle 无可改之处，md5 不变；提交后顺带校验产物与 lib 源一致即可。提交失败时（如 commitlint 拒绝）文件仍处于已暂存状态，改正信息后直接 `git commit` 重提，无需重新 `git add`
- **`@ths-map/topic-layer-runtime` 的 scope 不带 `-sdk`**：`@ths-map/xxx` 与 `@ths-map-sdk/xxx` 是两个 scope（同一个 ths-map registry）。它是本仓库自产包（源码 `一张图框架3.0/topic-layer-runtime/`），版本读源码 package.json，只传播到 **3 处**下游（lc 不装 npm 包，走 UMD）
- **topic-layer-runtime 的 UMD 只报告不拷**：lc 的 4 个 `topic-layer-runtime.global.js{,.map}` 源头是 `topic-layer-runtime/dist/`（不是 ths-design/lib），需 build 后由用户手动拷。本技能对比 md5 后报告是否一致，不动文件 —— 避免拷到未 build 的过期 dist
  - **`.js` 与 `.map` 必须成对拷**：曾出现只拷 `.js`、`.map` 落后一周的漂移（`.js` 对但 `.map` 里缺新函数，debug 时源码映射到旧代码，极难察觉）。报告里若只有 `.map` 不一致，就是这个情况
  - 4 个目标：`public/template/3.0.0/resources/` 与 `public/template/update/update-files/3.0.0/resources/` 各一对
- **topic-layer-runtime 版本可能领先 registry**：源码 version 改了但没 `npm publish`，sync-deps 会照样传播到下游 package.json，随后 `npm install` 会 ETARGET。跑 `/bump-map-sdk` 的三方比对报告可提前发现；报错时让用户先在 `topic-layer-runtime/` 跑 `npm publish`

## 脚本模板

```js
#!/usr/bin/env node
/**
 * sync-deps：同步 @ths/design + @ths-map-sdk/* 版本号 + UMD 产物 + ths-design.zip
 * 源：@ths/design ← ths-design/packages/ths-design/package.json (version)
 *     @ths-map-sdk/* ← ths-design/package.json 根 devDependencies (用户手动维护)
 * 用法：node sync-deps.js [--dry-run]
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const crypto = require('crypto');
const DRY_RUN = process.argv.includes('--dry-run');

// ===== 路径常量（仓库位置变动则改这里）=====
const THS_DESIGN = '/Users/zhangjinxiu/Documents/工作/低代码平台LeGo/ths-design';
const LC = '/Users/zhangjinxiu/Documents/工作/低代码平台LeGo/lc-visual-building';
const FRAME = '/Users/zhangjinxiu/Documents/工作/一张图框架3.0';
const CONVERTER = FRAME + '/converter';
const TEMPLATE = FRAME + '/micro-app-template';

// ===== 1. 读源版本 =====
const designPkgPath = path.join(THS_DESIGN, 'packages/ths-design/package.json');
const rootPkgPath = path.join(THS_DESIGN, 'package.json');
for (const f of [designPkgPath, rootPkgPath]) {
  if (!fs.existsSync(f)) { console.error('✗ 源文件不存在: ' + f); process.exit(1); }
}
const DESIGN_VER = JSON.parse(fs.readFileSync(designPkgPath, 'utf8')).version;
const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf8'));
const MAP_PKGS = ['api', 'map', 'mapgo-runtime', 'widgets'];
const MAP_VER = {};
for (const p of MAP_PKGS) {
  const k = '@ths-map-sdk/' + p;
  const raw = (rootPkg.devDependencies || {})[k] || (rootPkg.dependencies || {})[k];
  if (!raw) { console.error(`✗ 根 package.json 未声明 ${k}，请先手动维护 ${rootPkgPath}`); process.exit(1); }
  MAP_VER[k] = raw.replace(/^[\^~>=]+/, '');
}
// @ths-map/topic-layer-runtime：本仓库自产包，版本读源码 package.json（注意 scope 不带 -sdk）
const TLR = '@ths-map/topic-layer-runtime';
const TLR_SRC_DIR = FRAME + '/topic-layer-runtime';
const tlrSrcPkgPath = path.join(TLR_SRC_DIR, 'package.json');
const TLR_VER = fs.existsSync(tlrSrcPkgPath) ? JSON.parse(fs.readFileSync(tlrSrcPkgPath, 'utf8')).version : null;

console.log('=== 源版本号 ===');
console.log('  @ths/design            = ' + DESIGN_VER);
for (const p of MAP_PKGS) console.log('  ' + ('@ths-map-sdk/' + p).padEnd(24) + '= ' + MAP_VER['@ths-map-sdk/' + p]);
console.log('  ' + TLR.padEnd(24) + '= ' + (TLR_VER || '(无源码目录，跳过)'));
console.log('');

// ===== 2. 工具 =====
function prefixOf(v) { const m = String(v).match(/^([\^~>=]+)?/); return m[1] || ''; }
function short(p) { return p.replace(/.*\/Documents\/工作\//, '~/工作/'); }
function readPkg(f) { return JSON.parse(fs.readFileSync(f, 'utf8')); }
function writePkg(f, obj) {
  const had = fs.readFileSync(f, 'utf8').endsWith('\n');
  fs.writeFileSync(f, JSON.stringify(obj, null, 2) + (had ? '\n' : ''));
}
function md5File(f) { return crypto.createHash('md5').update(fs.readFileSync(f)).digest('hex'); }
function zipEntryMd5(zip, entry) {
  try { return crypto.createHash('md5').update(execSync(`unzip -p "${zip}" "${entry}"`, { maxBuffer: 50 * 1024 * 1024 })).digest('hex'); }
  catch { return null; }
}

// ===== 3. 收集版本号变更（每文件一次读写）=====
const targets = [
  [LC + '/package.json', 'dependencies', '@ths/design', DESIGN_VER],
  [CONVERTER + '/templates/package.json', 'dependencies', '@ths/design', DESIGN_VER],
  [TEMPLATE + '/packages/micro/package.json', 'dependencies', '@ths/design', DESIGN_VER],
  [TEMPLATE + '/packages/base/package.json', 'dependencies', '@ths/design', DESIGN_VER],
];
for (const p of MAP_PKGS) {
  const k = '@ths-map-sdk/' + p, v = MAP_VER[k];
  targets.push([LC + '/package.json', 'dependencies', k, v]);
  targets.push([CONVERTER + '/templates/package.json', 'dependencies', k, v]);
  targets.push([TEMPLATE + '/packages/micro/package.json', 'dependencies', k, v]);
  targets.push([TEMPLATE + '/packages/base/package.json', 'dependencies', k, v]);
  targets.push([THS_DESIGN + '/packages/components/gis-map/package.json', 'peerDependencies', k, v]);
  targets.push([THS_DESIGN + '/packages/ths-design/package.json', 'peerDependencies', k, v]);
}
// @ths-map/topic-layer-runtime：只 3 处下游（lc 走 UMD 不装 npm 包）
if (TLR_VER) {
  targets.push([CONVERTER + '/templates/package.json', 'dependencies', TLR, TLR_VER]);
  targets.push([TEMPLATE + '/packages/micro/package.json', 'dependencies', TLR, TLR_VER]);
  targets.push([TEMPLATE + '/packages/base/package.json', 'dependencies', TLR, TLR_VER]);
}

const fileMap = {};
const rows = [];
for (const [file, field, pkgName, cleanVer] of targets) {
  if (!fs.existsSync(file)) { rows.push({ file, pkgName, status: '✗ 文件不存在' }); continue; }
  if (!fileMap[file]) fileMap[file] = { pkg: readPkg(file) };
  const pkg = fileMap[file].pkg;
  if (!pkg[field] || !(pkgName in pkg[field])) { rows.push({ file, pkgName, status: '⊘ 跳过(无此依赖)' }); continue; }
  const cur = pkg[field][pkgName];
  const want = prefixOf(cur) + cleanVer;
  if (cur === want) { rows.push({ file, pkgName, cur, status: '✓ 已最新' }); continue; }
  rows.push({ file, pkgName, cur, want, status: '✎ 更新' });
  if (!DRY_RUN) pkg[field][pkgName] = want;
}
if (!DRY_RUN) {
  for (const [file, op] of Object.entries(fileMap)) writePkg(file, op.pkg);
}

// ===== 4. UMD 产物拷贝（仅 3.0.0）=====
const arts = [
  [THS_DESIGN + '/packages/ths-design/lib/index.js', LC + '/public/template/3.0.0/resources/ths-design/index.js'],
  [THS_DESIGN + '/packages/ths-design/lib/style.css', LC + '/public/template/3.0.0/resources/ths-design/style.css'],
  [THS_DESIGN + '/packages/ths-design/lib/index.js', LC + '/public/template/update/update-files/3.0.0/resources/ths-design/index.js'],
  [THS_DESIGN + '/packages/ths-design/lib/style.css', LC + '/public/template/update/update-files/3.0.0/resources/ths-design/style.css'],
];
const artRows = [];
for (const [src, dst] of arts) {
  const ss = fs.existsSync(src) ? fs.statSync(src).size : -1;
  const ds = fs.existsSync(dst) ? fs.statSync(dst).size : -1;
  let status;
  if (ss <= 0) status = '✗ 源不存在/空';
  else if (ss === ds) status = '✓ 已一致';
  else status = '✎ 拷贝';
  artRows.push({ src, dst, ss, ds, status });
  if (!DRY_RUN && status === '✎ 拷贝') {
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.copyFileSync(src, dst);
    const real = fs.statSync(dst).size;
    artRows[artRows.length - 1].status = (real === ss) ? '✓ 已拷贝' : `✗ 拷贝字节不符(${real}≠${ss})`;
  }
}

// ===== 5. ths-design.zip 打包（lc-visual-building/public/）=====
// 低代码平台分发用（api-config.js 的 thsDesignPackageUrl）。flat 结构：
// lib/index.js -> index.js，lib/style.css -> style.css
const zipPath = LC + '/public/ths-design.zip';
const libJs = THS_DESIGN + '/packages/ths-design/lib/index.js';
const libCss = THS_DESIGN + '/packages/ths-design/lib/style.css';
let zipRow;
if (!fs.existsSync(zipPath)) zipRow = { status: '✎ 创建' };
else if (!fs.existsSync(libJs) || !fs.existsSync(libCss)) zipRow = { status: '✗ lib 产物不存在' };
else {
  const jsSame = zipEntryMd5(zipPath, 'index.js') === md5File(libJs);
  const cssSame = zipEntryMd5(zipPath, 'style.css') === md5File(libCss);
  zipRow = { status: (jsSame && cssSame) ? '✓ 已一致' : '✎ 打包' };
}
if (!DRY_RUN && zipRow.status.startsWith('✎')) {
  const tmpDir = execSync('mktemp -d').toString().trim();
  fs.copyFileSync(libJs, tmpDir + '/index.js');
  fs.copyFileSync(libCss, tmpDir + '/style.css');
  execSync('zip -X -q ths-design.zip index.js style.css', { cwd: tmpDir });
  fs.copyFileSync(tmpDir + '/ths-design.zip', zipPath);
  execSync(`rm -rf "${tmpDir}"`);
  const okJ = zipEntryMd5(zipPath, 'index.js') === md5File(libJs);
  const okC = zipEntryMd5(zipPath, 'style.css') === md5File(libCss);
  zipRow.status = (okJ && okC) ? '✓ 已打包' : '✗ 打包校验失败';
}

// ===== 5b. topic-layer-runtime UMD 只报告不拷（源头是 topic-layer-runtime/dist/，需 build 后用户手动拷）=====
const tlrArts = [
  [TLR_SRC_DIR + '/dist/topic-layer-runtime.global.js', LC + '/public/template/3.0.0/resources/topic-layer-runtime.global.js'],
  [TLR_SRC_DIR + '/dist/topic-layer-runtime.global.js.map', LC + '/public/template/3.0.0/resources/topic-layer-runtime.global.js.map'],
  [TLR_SRC_DIR + '/dist/topic-layer-runtime.global.js', LC + '/public/template/update/update-files/3.0.0/resources/topic-layer-runtime.global.js'],
  [TLR_SRC_DIR + '/dist/topic-layer-runtime.global.js.map', LC + '/public/template/update/update-files/3.0.0/resources/topic-layer-runtime.global.js.map'],
];
const tlrArtRows = [];
for (const [src, dst] of tlrArts) {
  let status;
  if (!fs.existsSync(src)) status = '⊘ 源 dist 不存在（未 build）';
  else if (!fs.existsSync(dst)) status = '⚠️ 目标缺失';
  else status = (md5File(src) === md5File(dst)) ? '✓ 与 dist 一致' : '⚠️ 与 dist 不一致';
  tlrArtRows.push({ src, dst, status });
}

// ===== 6. 报告 =====
console.log(`=== 版本号同步 (${DRY_RUN ? 'DRY-RUN' : '实跑'}) ===`);
for (const r of rows) {
  const line = r.status === '✎ 更新' ? `${r.status} ${r.pkgName}: ${r.cur} -> ${r.want}`
    : r.status === '✓ 已最新' ? `${r.status} ${r.pkgName}: ${r.cur}`
    : `${r.status} ${r.pkgName || ''}`;
  console.log('  ' + line + '  ' + short(r.file));
}
console.log('');
console.log(`=== UMD 产物 (${DRY_RUN ? 'DRY-RUN' : '实跑'}) ===`);
for (const a of artRows) console.log(`  ${a.status} ${a.ss}B->${a.ds}B  ${short(a.dst)}`);
console.log('');
console.log('=== topic-layer-runtime UMD（只校验，不拷；需更新时用户手动从 dist/ 拷）===');
for (const a of tlrArtRows) console.log(`  ${a.status}  ${short(a.dst)}`);
const tlrBad = tlrArtRows.filter(a => a.status.startsWith('⚠️')).length;
if (tlrBad) console.log(`  ⚠️ ${tlrBad} 个文件与 ${short(TLR_SRC_DIR)}/dist/ 不一致 -> 确认 dist 已 build 到最新后手动拷贝（4 个目标见上）`);
console.log('');
console.log(`=== ths-design.zip (${DRY_RUN ? 'DRY-RUN' : '实跑'}) ===`);
console.log(`  ${zipRow.status}  ${short(zipPath)}`);
const vc = rows.filter(r => r.status === '✎ 更新').length;
const ac = artRows.filter(a => DRY_RUN ? a.status === '✎ 拷贝' : a.status === '✓ 已拷贝').length;
const zc = (DRY_RUN ? (zipRow.status === '✎ 打包' || zipRow.status === '✎ 创建') : zipRow.status === '✓ 已打包') ? 1 : 0;
console.log('');
console.log(`汇总：版本号 ${vc} 处变更，产物 ${ac} 个${DRY_RUN ? '待拷' : '已拷'}，zip ${zc} ${DRY_RUN ? '待打包' : '已打包'}。${DRY_RUN ? '-> 确认后去掉 --dry-run 实跑' : '-> 已写入'}`);
if (!DRY_RUN) {
  console.log('\n后续动作：');
  console.log('  • 重新安装依赖：ths-design / lc-visual-building 用 yarn install，micro-app-template 用 npm install（workspaces 根目录装一次）');
  console.log('  • git commit：按 F 节清单对 3 个仓库分别执行 git add（仅 sync-deps 文件）+ git commit');
  console.log('  • converter 若改了 templates/package.json，视情况 bump converter 版本并 npm publish');
  console.log('  • git push：各仓库分别推送到远端');
}
```

## 首次运行注意

首次 dry-run 时，`gis-map` 和 `ths-design` 聚合包的 peerDependencies 里 `@ths-map-sdk/*` 若是 `>=2.0.0` 而根 package.json 是 `2.0.x`，会显示 `>=2.0.0 -> >=2.0.x`（首次同步下限到根版本），属正常。后续每次只在地插件版本真的变化时才动。

## 不做的事

- 不跑 `yarn lib` 构建（用户发布前已构建）
- 不 git push（提交由技能完成，push 由用户手动执行）
- 不动 2.0.0 产物、不动根 package.json
- 不自动删 .npm-tarballs（overrides 已删，tarball 无主，报告提示用户删）
- 不补依赖项（前置修复已补，技能只更新版本号）
- 不装 converter（工具自身不依赖 @ths/design）
