---
name: bump-map-sdk
description: "@ths-map-sdk/* 地图插件发布新版后的完整升级流程：查 Nexus ths-map 仓库最新版本 -> 更新 ths-design 根 devDeps + gis-map peerDeps + topic-layer-runtime peerDeps -> yarn install -> yarn lib 重建 UMD -> bump 版本 -> yarn publish 发布新 @ths/design -> 校验 npm-ths 上确有新版本（防 yarn 假成功）-> 衔接 sync-deps 传播下游。同时检查 @ths-map/topic-layer-runtime 是否有新版本。/bump-map-sdk 触发。"
---

# 地图依赖升级 + 组件库重发（@ths-map-sdk/* -> @ths/design）

## 何时使用

`@ths-map-sdk/*`（api / core / map / mapgo-runtime / widgets）发布新版后，端到端升级：ths-design 源更新到最新 + 重建 UMD + 发布新 @ths/design 版本 + 衔接 sync-deps 传播下游。顺带检查自产包 `@ths-map/topic-layer-runtime` 的 registry / 本地源 / 下游声明是否一致，并把它的 `@ths-map-sdk/*` peerDeps 一起升级。

**两条独立的发布线**（别混）：
- `@ths-map-sdk/*` 变 -> **必须**重建 UMD + 重发 `@ths/design`（map SDK 打包进 UMD 里）-> 本技能全流程
- `@ths-map/topic-layer-runtime` 变 -> **与 @ths/design 无关**（ths-design 里 0 处引用），只需传播下游 3 个 package.json（sync-deps 做）+ 拷 UMD 2 文件（用户手动）。本技能只**报告**，不发它的包

**与 sync-deps 的关系**：sync-deps 的「前提」要求 ths-design 源已更新 + 已 yarn lib + 已发布新 @ths/design。本技能把这些前置步骤全自动化，跑完再调 sync-deps 做下游传播。

## 前提

- 新版 `@ths-map-sdk/*` 已发布到内网 Nexus ths-map 仓库（`http://192.168.0.112:8081/repository/ths-map/`）
- **发布 @ths/design 的 token**：`yarn publish` 需 `~/.npmrc` 里有格式正确的 `//192.168.0.112:8081/repository/npm-vue-components/:_authToken=<有效token>`（**`//` 后不能有空格**，否则 yarn 当无效 key 忽略）。首次或 token 失效时，先跑一次 `npm login --registry=http://192.168.0.112:8081/repository/npm-vue-components/`（交互输用户名密码）存有效 token。
- ⚠️ **token 失效会导致 yarn publish 假成功**（报 `success Published` 但实际没发，Nexus 上没有新版本）。必须靠步骤 7 的「发布后校验」兜底。

## 版本号来源

- **`@ths-map-sdk/*`**（api / core / map / mapgo-runtime / widgets 5 个）：查 Nexus ths-map 仓库 latest
  `npm view @ths-map-sdk/<pkg> version --registry=http://192.168.0.112:8081/repository/ths-map/`
- **`@ths-map/topic-layer-runtime`**（同一个 ths-map 仓库，注意 scope 是 `@ths-map` 不是 `@ths-map-sdk`）：同样查 latest，与本地源 + 下游 3 处声明三方比对后报告

## 更新清单（3 个文件）

| 文件 | 字段 | 包 | 风格 |
|---|---|---|---|
| `ths-design/package.json`（根） | devDependencies | `@ths-map-sdk/` api, core, map, mapgo-runtime, widgets（5 个，含 core） | `^` |
| `ths-design/packages/components/gis-map/package.json` | peerDependencies | `@ths-map-sdk/` api, map, widgets, mapgo-runtime（4 个，**无 core**） | `>=` |
| `一张图框架3.0/topic-layer-runtime/package.json` | peerDependencies | `@ths-map-sdk/` api, map, widgets, mapgo-runtime（4 个，**无 core**） | `>=` |

gis-map peerDeps 无 core（core 是 map 的内部依赖，gis-map 不直接声明）。下游 dependencies 也只有 4 个（core 不同步，由 sync-deps 处理）。

### `@ths-map/topic-layer-runtime` 的定位（与 @ths/design 完全不同的一条线）

它是**本仓库自产**的专题图层运行时包（源码 `一张图框架3.0/topic-layer-runtime/`），不是外来依赖：

- **ths-design 里 0 处引用** —— 不参与 `yarn lib` / 不影响 @ths/design 的 UMD，所以 **它自己发不发版与 @ths/design 发不发版互不相干**
- 它自己的 `peerDependencies` 声明 `@ths-map-sdk/{api,map,widgets,mapgo-runtime}`（`>=` 风格，无 core）—— 本技能**顺带一起升到最新**，与 gis-map peerDeps 同处理
- 下游消费方两种形态：
  - **npm 包**（`dependencies`，`^` 风格）：`converter/templates/package.json`、`micro-app-template/packages/{base,micro}/package.json` 共 3 处 -> 由 **sync-deps** 传播
  - **UMD 全局脚本**：`lc-visual-building/public/template/3.0.0/resources/topic-layer-runtime.global.js` 及 `update/update-files/3.0.0/` 同名 1 个，共 2 文件（**无 `.map`**，browser 构建已关 sourcemap）；index.html + head.txt 引用，update-config.json 有 1 条 `fileAdd` -> **本技能与 sync-deps 都不碰**，需要更新时由用户在 topic-layer-runtime 目录 build 后手动拷（源头是 `topic-layer-runtime/dist/`）
- `@ths-map` scope 的 registry：`micro-app-template/.npmrc` 与 `converter/templates/npmrc` 已配 `@ths-map:registry=.../ths-map/`
- 发包（用户手动，本技能不做）：`topic-layer-runtime` 目录 `npm publish`（`prepack` 自动跑 `node build.mjs`，`publishConfig.registry` = ths-map）

## 执行步骤

1. **查最新版本 + 更新三个文件**：把下方脚本写到 `/tmp/bump-map-sdk.js`，先 `node /tmp/bump-map-sdk.js --dry-run` 看变更，确认后 `node /tmp/bump-map-sdk.js` 实跑（根 devDeps 5 个 ^ + gis-map peerDeps 4 个 >= + topic-layer-runtime peerDeps 4 个 >=）。脚本会额外报告 `@ths-map/topic-layer-runtime` 的 registry latest / 本地源 version / 下游 3 处声明 是否一致，以及当前 @ths/design 版本 + 建议下一版本。
   - **若 topic-layer-runtime 报告不一致**：先跟用户确认怎么处理（registry 比本地新 = 别人发过版，本地要 pull；本地比 registry 新 = 待发布，问用户是否要先发；下游声明落后 = 交给 sync-deps 传播）。**不自动发包、不自动拷 UMD。**
2. **yarn install**（ths-design 根目录）：装新地图依赖供构建用
3. **yarn lib**（ths-design 根目录，= `yarn lib:umd && yarn lib:es`）：重建 UMD + ES。`lib/index.js` 通常会变（@ths-map-sdk 在 UMD 里是**打包进去**的，非 external，map SDK 一变 UMD 就重打包）；`style.css` 一般不变
   - topic-layer-runtime 的 peerDeps 变更**不影响这一步**（ths-design 不引用它）
4. **bump @ths/design 版本**：`packages/ths-design/package.json` 的 version 向上 +1（脚本会建议，如 1.1.49 -> 1.1.50）。lib 不嵌版本号，bump 后**不用重跑 yarn lib**
5. **yarn publish**：在 `packages/ths-design` 目录跑 `yarn publish --new-version <新版本> --no-git-tag-version`
   - ⚠️ **必须在 packages/ths-design 目录**，不是仓库根。根包 `vue-components` 是 `private: true`，在根跑 `yarn publish` 会报「不能发布 private 包」
   - `--new-version` 非交互；`--no-git-tag-version` 不让 yarn 自动 git commit/tag，版本提交留给 sync-deps 统一处理
   - 发布到 `publishConfig.registry` = npm-vue-components（npm-ths 是聚合它的 group，下游从 npm-ths 装）
6. **校验发布成功**（必做，防假成功）：
   ```
   npm view @ths/design@<新版本> version --registry=http://192.168.0.112:8081/repository/npm-ths/ --cache=/tmp/verify-<新版本>
   ```
   - 返回新版本 = 发布成功，继续步骤 7
   - **E404 = 发布失败**（多半 token 失效）-> 提示用户 `npm login --registry=http://192.168.0.112:8081/repository/npm-vue-components/` 重存 token，然后从步骤 5 重试（version 已 bump，直接重发同版本）
   - 偶尔 npm-ths group 元数据缓存延迟，E404 可等 1-2 分钟重查一次再判失败
7. **衔接 sync-deps**：跑 `/sync-deps` 技能（或 `node /tmp/sync-deps.js`）-> dry-run + 实跑 + 重装下游 + git commit。sync-deps 读 ths-design 新版本 + 新 map SDK 版本 + topic-layer-runtime 版本，传播到下游 + 更新聚合包 peerDeps + 拷新 UMD + 重打 zip + 重装 + 提交
   - **本技能改的 `topic-layer-runtime/package.json` 在 一张图框架3.0 仓库**，会随 sync-deps 那次提交一起进去（见 sync-deps F 节清单）

## 关键规则

- **发布目录是 `packages/ths-design`，不是仓库根**：根包 `vue-components` 是 private，`yarn publish` 在根会失败
- **token 前置 + 假成功陷阱**：yarn publish 非交互模式下，若 `~/.npmrc` 有格式正确但失效的 token，会用它「登录」跳过密码输入，PUT 被拒却误报 `success Published`。**必须靠步骤 6 校验 npm-ths 兜底**。token 失效时让用户 `npm login --registry=npm-vue-components` 重存
- **校验用 npm-ths，不用 npm-vue-components**：npm CLI 对 npm-vue-components 的 view/ping 会 E401（Nexus 端 quirk，但 yarn 能用），而 npm-ths（group）可匿名读，查得到新版本 = 真发布成功
- **校验用全新 cache 目录**（`--cache=/tmp/verify-xxx`）：npm 默认缓存可能停在上一个版本，误报 E404
- **不用 `yarn info` 校验**：registry 查询失败时 yarn info 会回退读本地 package.json（已 bump），误报成功
- **lib 不嵌版本号**：grep `lib/index.js` 无版本字符串，bump version 后不用重跑 yarn lib
- **ths-design 的 yarn.lock / lib/ / es/ 都 gitignore**：git status 不显示，不提交。version bump（`packages/ths-design/package.json`）由 sync-deps 统一提交
- **保留约束风格**：根 devDeps 保持 `^`，gis-map / topic-layer-runtime peerDeps 保持 `>=`（脚本自动按当前前缀套）
- **版本号向上 +1**：patch 递增（1.1.49 -> 1.1.50），不跳号不回退。脚本会算出建议值
- **core 只在根 devDeps**：core 是 map 的内部依赖，gis-map / topic-layer-runtime peerDeps 都不含，下游 dependencies 也不含（sync-deps 只同步 api/map/mapgo-runtime/widgets 4 个）
- **`@ths-map/topic-layer-runtime` 的 scope 不带 `-sdk`**：`@ths-map/xxx` 与 `@ths-map-sdk/xxx` 是两个 scope，同一个 ths-map registry。写 npm view 时别漏 `-sdk` 或多写 `-sdk`
- **topic-layer-runtime 只报告 + 只改它自己的 peerDeps**：它的**发包**（`npm publish`）和 **UMD 2 文件拷贝**都是用户手动，本技能不自动做 —— 它不进 @ths/design 的 UMD，两条发布线独立

## 脚本模板

```js
#!/usr/bin/env node
/**
 * bump-map-sdk：查 Nexus ths-map 仓库最新版本
 *   ① @ths-map-sdk/*  -> 更新 ths-design 根 devDeps + gis-map peerDeps + topic-layer-runtime peerDeps
 *   ② @ths-map/topic-layer-runtime -> 只报告（registry latest vs 本地源 vs 下游 3 处声明），不改不发
 * 用法：node bump-map-sdk.js [--dry-run]
 * 之后 Claude 跑 yarn install + yarn lib + yarn publish + 校验 + sync-deps
 */
const fs = require('fs');
const { execSync } = require('child_process');
const DRY_RUN = process.argv.includes('--dry-run');

const THS_DESIGN = '/Users/zhangjinxiu/Documents/工作/低代码平台LeGo/ths-design';
const FRAME = '/Users/zhangjinxiu/Documents/工作/一张图框架3.0';
const MAP_REG = 'http://192.168.0.112:8081/repository/ths-map/';
// 根 devDeps 5 个（含 core）；gis-map / topic-layer-runtime peerDeps 4 个（无 core）
const ROOT_PKGS = ['api', 'core', 'map', 'mapgo-runtime', 'widgets'];
const PEER_PKGS = ['api', 'map', 'widgets', 'mapgo-runtime'];
// @ths-map/topic-layer-runtime：自产包，只报告
const TLR = '@ths-map/topic-layer-runtime';
const TLR_SRC = FRAME + '/topic-layer-runtime/package.json';
const TLR_CONSUMERS = [
  FRAME + '/converter/templates/package.json',
  FRAME + '/micro-app-template/packages/base/package.json',
  FRAME + '/micro-app-template/packages/micro/package.json',
];

function viewLatest(name) {
  try {
    return execSync(`npm view ${name} version --registry=${MAP_REG} --no-update-notifier`, { encoding: 'utf8' })
      .split('\n').map(s => s.trim()).filter(s => s && !/^npm (notice|warn)/.test(s)).pop();
  } catch (e) { return null; }
}

// ===== 1. 查 Nexus 最新版本 =====
const latest = {};
console.log('查询 Nexus ths-map 最新版本...');
for (const p of ROOT_PKGS) latest['@ths-map-sdk/' + p] = viewLatest('@ths-map-sdk/' + p);
const tlrLatest = viewLatest(TLR);
console.log('=== Nexus ths-map 最新版本 ===');
for (const p of ROOT_PKGS) console.log('  ' + ('@ths-map-sdk/' + p).padEnd(28) + '= ' + latest['@ths-map-sdk/' + p]);
console.log('  ' + TLR.padEnd(28) + '= ' + (tlrLatest || '(查询失败)'));
console.log('');

// ===== 2. 工具 =====
function prefixOf(v) { const m = String(v).match(/^([\^~>=]+)?/); return m[1] || ''; }
function readPkg(f) { return JSON.parse(fs.readFileSync(f, 'utf8')); }
function writePkg(f, obj) {
  const had = fs.readFileSync(f, 'utf8').endsWith('\n');
  fs.writeFileSync(f, JSON.stringify(obj, null, 2) + (had ? '\n' : ''));
}

const rows = [];
// 通用：更新某文件某字段里的 @ths-map-sdk/* 版本
function bumpDeps(where, file, field, pkgs) {
  if (!fs.existsSync(file)) { rows.push({ where, k: '(文件不存在)', status: '⊘ 跳过' }); return null; }
  const pkg = readPkg(file);
  for (const p of pkgs) {
    const k = '@ths-map-sdk/' + p;
    const cur = (pkg[field] || {})[k];
    if (!cur) { rows.push({ where, k, status: '⊘ 无此依赖' }); continue; }
    if (!latest[k]) { rows.push({ where, k, cur, status: '⊘ registry 查询失败' }); continue; }
    const want = prefixOf(cur) + latest[k];
    if (cur === want) { rows.push({ where, k, cur, status: '✓ 已最新' }); continue; }
    rows.push({ where, k, cur, want, status: '✎ 更新' });
    if (!DRY_RUN) pkg[field][k] = want;
  }
  return pkg;
}

// ===== 3~5. 三个文件 =====
const rootPath = THS_DESIGN + '/package.json';
const gisPath = THS_DESIGN + '/packages/components/gis-map/package.json';
const root = bumpDeps('根devDeps', rootPath, 'devDependencies', ROOT_PKGS);
const gis = bumpDeps('gis-map peerDeps', gisPath, 'peerDependencies', PEER_PKGS);
const tlr = bumpDeps('topic-layer-runtime peerDeps', TLR_SRC, 'peerDependencies', PEER_PKGS);

if (!DRY_RUN) {
  if (root) writePkg(rootPath, root);
  if (gis) writePkg(gisPath, gis);
  if (tlr) writePkg(TLR_SRC, tlr);
}

// ===== 6. 报告版本号变更 =====
console.log(`=== 版本号更新 (${DRY_RUN ? 'DRY-RUN' : '实跑'}) ===`);
for (const r of rows) {
  const line = r.status === '✎ 更新' ? `${r.status} [${r.where}] ${r.k}: ${r.cur} -> ${r.want}`
    : r.cur ? `${r.status} [${r.where}] ${r.k}: ${r.cur}`
    : `${r.status} [${r.where}] ${r.k}`;
  console.log('  ' + line);
}
const n = rows.filter(r => r.status === '✎ 更新').length;
console.log('');
console.log(`汇总：${n} 处变更。${DRY_RUN ? '-> 确认后去掉 --dry-run 实跑' : '-> 已写入'}`);

// ===== 7. topic-layer-runtime 三方比对（只报告，不改）=====
console.log(`\n=== ${TLR} 检查（只报告，不自动改/不自动发）===`);
const tlrSrcVer = fs.existsSync(TLR_SRC) ? readPkg(TLR_SRC).version : null;
console.log('  registry latest = ' + (tlrLatest || '(查询失败)'));
console.log('  本地源 version  = ' + (tlrSrcVer || '(无源码目录)'));
const tlrDecls = [];
for (const f of TLR_CONSUMERS) {
  if (!fs.existsSync(f)) { console.log('  ⊘ 不存在 ' + f.replace(FRAME, '~框架')); continue; }
  const d = (readPkg(f).dependencies || {})[TLR];
  tlrDecls.push({ f, d });
  const ok = d && tlrLatest && d === prefixOf(d) + tlrLatest;
  console.log(`  ${ok ? '✓' : '✎'} 下游声明 ${String(d || '(未声明)').padEnd(10)} ${f.replace(FRAME, '~框架')}`);
}
// 判定
const notes = [];
if (!tlrLatest) notes.push('⚠️ registry 查询失败，无法判定，手动 npm view ' + TLR + ' versions --registry=' + MAP_REG);
else if (tlrSrcVer && tlrSrcVer !== tlrLatest) {
  const cmp = tlrSrcVer.localeCompare(tlrLatest, undefined, { numeric: true });
  if (cmp > 0) notes.push(`⚠️ 本地源(${tlrSrcVer}) 比 registry(${tlrLatest}) 新 = 有未发布的改动。要发布请在 ${FRAME}/topic-layer-runtime 跑 npm publish（用户手动，prepack 会自动 build）`);
  else notes.push(`⚠️ registry(${tlrLatest}) 比 本地源(${tlrSrcVer}) 新 = 别人发过版，本地需 git pull 后重跑`);
}
const stale = tlrDecls.filter(x => tlrLatest && x.d && x.d !== prefixOf(x.d) + tlrLatest);
if (stale.length) notes.push(`⚠️ ${stale.length} 处下游声明落后于 registry latest(${tlrLatest}) -> 由 sync-deps 传播`);
if (!notes.length) notes.push(`✓ registry / 本地源 / 下游 3 处声明 全部一致（${tlrLatest}），无需处理`);
for (const s of notes) console.log('  ' + s);
console.log('  ℹ️ UMD 2 文件（lc template/3.0.0 + update-files/3.0.0 的 topic-layer-runtime.global.js，无 .map）本技能与 sync-deps 都不碰，需更新时用户手动从 topic-layer-runtime/dist/ 拷');

// ===== 8. 当前 @ths/design 版本 + 建议下一版本 =====
const designPkg = readPkg(THS_DESIGN + '/packages/ths-design/package.json');
const curVer = designPkg.version;
const parts = curVer.split('.');
parts[2] = String(Number(parts[2]) + 1);
const nextVer = parts.join('.');
console.log(`\n@ths/design 当前版本: ${curVer} -> 建议发布: ${nextVer}`);
if (!DRY_RUN && n > 0) {
  console.log('\n后续动作（Claude 执行）：');
  console.log('  • ths-design 根目录: yarn install（装新地图依赖）');
  console.log('  • ths-design 根目录: yarn lib（重建 UMD + ES，lib/index.js 会变）');
  console.log(`  • 在 packages/ths-design 目录: yarn publish --new-version ${nextVer} --no-git-tag-version`);
  console.log(`  • 校验: npm view @ths/design@${nextVer} version --registry=http://192.168.0.112:8081/repository/npm-ths/ --cache=/tmp/verify-${nextVer}`);
  console.log('    （必须返回 ' + nextVer + '；E404 = token 失效，让用户 npm login --registry=npm-vue-components 后重发）');
  console.log('  • 衔接 sync-deps：跑 /sync-deps（传播下游 + UMD + zip + 重装 + commit）');
  console.log('  • 注意 topic-layer-runtime/package.json 若有变更，属于 一张图框架3.0 仓库，随 sync-deps 那次提交一起进去');
}
```

## 不做的事

- 不 `npm login`（交互输密码，用户手动；token 失效时提示用户做）
- 不 git tag（`--no-git-tag-version`；要 release tag 用户手动加 `git tag v<版本>`）
- 不直接改下游 package.json / 不拷 UMD / 不重打 zip（全由 sync-deps 做）
- 不用 `yarn info` 校验发布（会回退本地 package.json 误报成功，用 `npm view --registry=npm-ths --cache=新目录`）
- 不 git push（sync-deps 提交，push 用户手动）
- 不动 2.0.0 产物
- **不发布 `@ths-map/topic-layer-runtime`**（`npm publish` 用户在 `topic-layer-runtime/` 手动跑）、**不拷它的 UMD 2 文件**（用户手动从 `topic-layer-runtime/dist/` 拷到 lc 的 template/3.0.0 + update-files/3.0.0；无 `.map`）
