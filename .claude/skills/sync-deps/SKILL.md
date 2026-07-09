---
name: sync-deps
description: 组件库 @ths/design 或地图插件 @ths-map-sdk/* 发布新包后，同步所有散落位置的版本号 + UMD 产物。@ths/design 版本读 ths-design 聚合包 package.json，@ths-map-sdk 版本读 ths-design 根 package.json devDependencies（用户发布前手动维护为权威源）。支持 dry-run、保留各位置约束风格(^/>=/无)、peerDeps 有则更新无则跳过、产物字节校验。当用户发布完组件库新版本需要更新 lc-visual-building / converter / micro-app-template 各 package.json 与 ths-design 内部 gis-map、ths-design 包 peerDependencies，以及 template/3.0.0、update-files/3.0.0 的 ths-design UMD 产物时使用。
---

# 依赖版本同步

## 何时使用

`@ths/design` 或 `@ths-map-sdk/*` 发布新包后，把版本号 + UMD 产物同步到所有散落位置。典型场景：
- 组件库发新版（如 1.1.43 -> 1.1.44）：更新下游 4 处 package.json 的 `@ths/design` 依赖 + 拷贝 UMD 产物到 template/3.0.0 和 update-files/3.0.0
- 地图插件发新版（如 @ths-map-sdk/map 2.0.4 -> 2.0.5）：更新下游 4 处 package.json + ths-design 内部 gis-map/ths-design 包 peerDependencies 的 `@ths-map-sdk/*`

**前提**：ths-design 仓库本地已是最新——用户已手动改 `ths-design/package.json`（根）devDependencies 里的 `@ths-map-sdk/*` 到新版本，已改 `packages/ths-design/package.json` 的 version，且已 `yarn lib` 构建好 `packages/ths-design/lib/`。

## 版本号来源（全本地读 ths-design 仓库，不依赖网络）

- `@ths/design` 版本 ← `ths-design/packages/ths-design/package.json` 的 `version`
- `@ths-map-sdk/*` 版本 ← `ths-design/package.json`（根）devDependencies（用户手动维护为权威源，取 api/map/mapgo-runtime/widgets 4 个，core 不同步）

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

**C. UMD 产物文件（4 个，仅 3.0.0）**

| 源 `ths-design/packages/ths-design/lib/` | 目标 |
|---|---|
| `index.js` | `lc-visual-building/public/template/3.0.0/resources/ths-design/index.js` |
| `style.css` | `lc-visual-building/public/template/3.0.0/resources/ths-design/style.css` |
| `index.js` | `lc-visual-building/public/template/update/update-files/3.0.0/resources/ths-design/index.js` |
| `style.css` | `lc-visual-building/public/template/update/update-files/3.0.0/resources/ths-design/style.css` |

**D. 不碰**

- `update-files/2.0.0/`（只更新 3.0.0）
- `ths-design/package.json`（根，是权威源，用户手动维护）
- `ths-design/packages/ths-design/package.json` 的 `version`（@ths/design 自身版本，发布动作）
- `micro-app-template/.npm-tarballs/`（overrides 块已删，tarball 成无主物，报告里提示用户删）

**E. 重新安装依赖（实跑后，Claude 执行）**

版本号改完必须重装依赖，否则 node_modules 还是旧包。对 3 个项目根目录跑：

| 项目根目录 | 命令 | 说明 |
|---|---|---|
| `ths-design` | `yarn install` | lerna + yarn workspaces，一次装所有子包 |
| `lc-visual-building` | `yarn install` | 普通项目 |
| `micro-app-template` | `npm install` | npm workspaces，根目录装一次，base/micro 自动链接，**不用分别装** |

不装 converter（工具自身不依赖 @ths/design，templates/package.json 是生成模板不实际安装）。

## 执行步骤

1. 把下方脚本写到 `/tmp/sync-deps.js`
2. **先 dry-run**：`node /tmp/sync-deps.js --dry-run`，看版本号变更明细（旧值 -> 新值）+ 产物字节对比
3. 确认合理后实跑：`node /tmp/sync-deps.js`
4. **重新安装依赖**（实跑后，必做）：对 3 个项目根目录跑安装命令（ths-design / lc-visual-building 用 `yarn install`，micro-app-template 用 `npm install`）。micro-app-template 是 workspaces，根目录装一次即可。安装由 Claude 执行（不进 Node 脚本），失败时根据输出判断处理
5. 报告：版本号变更处数、产物拷贝数、安装结果、后续动作提示

## 关键规则

- **保留约束风格**：读目标当前值的前缀（`^` / `>=` / `~` / 无），新版本套同样前缀。lc-visual-building 的 `@ths/design` 无 ^ 保持无 ^；gis-map/ths-design 聚合包 peerDeps 保持 `>=`；下游 dependencies 保持 `^`
- **JSON 精确改写**：每文件读一次 -> 改字段 -> `JSON.stringify(obj, null, 2)` 写回（保留末尾换行），避免正则误伤
- **peerDeps 有则更新无则跳过**：gis-map/ths-design 聚合包 peerDependencies 里若某 `@ths-map-sdk/*` 不存在则跳过并报告，不擅自添加（补依赖项是前置修复已做，技能只更新版本号）
- **产物字节校验**：源存在且字节 > 0 才拷贝；拷贝后校验目标字节 == 源字节；源/目标已一致则跳过
- **dry-run 必做**：先看变更再实跑
- **幂等**：已是新值的位置跳过
- **安装由 Claude 执行，不进 Node 脚本**：命令因项目而异（yarn/npm）、耗时长且可能失败（peerDeps 冲突/网络），Claude 执行能解读日志并处理
- **micro-app-template 根目录装一次**：npm workspaces，base/micro 自动链接，不在 packages/base 或 packages/micro 分别装

## 脚本模板

```js
#!/usr/bin/env node
/**
 * sync-deps：同步 @ths/design + @ths-map-sdk/* 版本号 + UMD 产物
 * 源：@ths/design ← ths-design/packages/ths-design/package.json (version)
 *     @ths-map-sdk/* ← ths-design/package.json 根 devDependencies (用户手动维护)
 * 用法：node sync-deps.js [--dry-run]
 */
const fs = require('fs');
const path = require('path');
const DRY_RUN = process.argv.includes('--dry-run');

// ===== 路径常量（仓库位置变动则改这里）=====
const THS_DESIGN = '/Users/zhangjinxiu/Documents/工作/低代码平台LeGo/ths-design';
const LC = '/Users/zhangjinxiu/Documents/工作/低代码平台LeGo/lc-visual-building';
const CONVERTER = '/Users/zhangjinxiu/Documents/工作/一张图框架3.0/converter';
const TEMPLATE = '/Users/zhangjinxiu/Documents/工作/一张图框架3.0/micro-app-template';

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

console.log('=== 源版本号 ===');
console.log('  @ths/design            = ' + DESIGN_VER);
for (const p of MAP_PKGS) console.log('  ' + ('@ths-map-sdk/' + p).padEnd(24) + '= ' + MAP_VER['@ths-map-sdk/' + p]);
console.log('');

// ===== 2. 工具 =====
function prefixOf(v) { const m = String(v).match(/^([\^~>=]+)?/); return m[1] || ''; }
function short(p) { return p.replace(/.*\/Documents\/工作\//, '~/工作/'); }
function readPkg(f) { return JSON.parse(fs.readFileSync(f, 'utf8')); }
function writePkg(f, obj) {
  const had = fs.readFileSync(f, 'utf8').endsWith('\n');
  fs.writeFileSync(f, JSON.stringify(obj, null, 2) + (had ? '\n' : ''));
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

// ===== 5. 报告 =====
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
const vc = rows.filter(r => r.status === '✎ 更新').length;
const ac = artRows.filter(a => DRY_RUN ? a.status === '✎ 拷贝' : a.status === '✓ 已拷贝').length;
console.log('');
console.log(`汇总：版本号 ${vc} 处变更，产物 ${ac} 个${DRY_RUN ? '待拷' : '已拷'}。${DRY_RUN ? '-> 确认后去掉 --dry-run 实跑' : '-> 已写入'}`);
if (!DRY_RUN) {
  console.log('\n后续动作：');
  console.log('  • 各仓库分别 git commit：ths-design / lc-visual-building / converter / micro-app-template');
  console.log('  • converter 若改了 templates/package.json，视情况 bump converter 版本并 npm publish');
  console.log('  • micro-app-template/.npm-tarballs/（overrides 已删，tarball 成无主物）：可删');
}
```

## 首次运行注意

首次 dry-run 时，`gis-map` 和 `ths-design` 聚合包的 peerDependencies 里 `@ths-map-sdk/*` 若是 `>=2.0.0` 而根 package.json 是 `2.0.x`，会显示 `>=2.0.0 -> >=2.0.x`（首次同步下限到根版本），属正常。后续每次只在地插件版本真的变化时才动。

## 不做的事

- 不跑 `yarn lib` 构建（用户发布前已构建）
- 不 git commit / push（除非用户明确要求）
- 不动 2.0.0 产物、不动根 package.json
- 不自动删 .npm-tarballs（overrides 已删，tarball 无主，报告提示用户删）
- 不补依赖项（前置修复已补，技能只更新版本号）
- 不装 converter（工具自身不依赖 @ths/design）
