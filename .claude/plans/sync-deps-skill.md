# 前置修复 + 技能 sync-deps（组件库/地图插件版本同步）

## 一、前置修复（现在手动做）

`ths-design/packages/ths-design/package.json` 的 peerDependencies 目前**没有 `@ths-map-sdk/*`**，但 @ths/design 包含 gis-map 组件、运行时依赖地图插件，应声明。参照 gis-map 包（`packages/components/gis-map/package.json`）的声明保持一致：

在 `peerDependencies` 的 `@ths/c-common-base-table` 行后插入 4 行（第 53 行后）：
```json
    "@ths-map-sdk/api": ">=2.0.0",
    "@ths-map-sdk/map": ">=2.0.0",
    "@ths-map-sdk/widgets": ">=2.0.0",
    "@ths-map-sdk/mapgo-runtime": ">=2.0.0",
```
并在 `peerDependencies` 块后新增 `peerDependenciesMeta`（与 gis-map 一致，mapgo-runtime 可选）：
```json
  "peerDependenciesMeta": {
    "@ths-map-sdk/mapgo-runtime": { "optional": true }
  },
```
不补 `core`（gis-map 也没声明，core 是 map 的传递依赖）。

## 二、技能 sync-deps

放 `一张图框架3.0/.claude/skills/sync-deps/SKILL.md`，`/sync-deps` 触发，沿用 dist-replace 风格（frontmatter + 何时用 + 执行步骤 + 脚本模板 + dry-run 必做）。

### 版本号来源（全本地，不依赖网络）

- `@ths/design` 版本 → 读 `ths-design/packages/ths-design/package.json` 的 `version`
- `@ths-map-sdk/*` 版本 → 读 `ths-design/package.json`（根）devDependencies 里的 5 个包版本（用户发布前手动维护此处为权威源）

### 同步清单（硬编码进脚本）

**A. @ths/design 版本号（4 处下游，保留各自 ^ 风格）**

| 文件 | 风格 |
|---|---|
| `lc-visual-building/package.json` | 无 ^（`"1.1.43"`） |
| `converter/templates/package.json` | ^ |
| `micro-app-template/packages/micro/package.json` | ^ |
| `micro-app-template/packages/base/package.json` | ^ |

**B. @ths-map-sdk/{api, map, mapgo-runtime, widgets} 版本号（4 处下游 + 2 处内部 peerDeps）**

源用根 package.json 的 4 个（core 不同步，下游无 core）：

| 文件 | 字段 | 风格 |
|---|---|---|
| `lc-visual-building/package.json` | dependencies | ^ |
| `converter/templates/package.json` | dependencies | ^ |
| `micro-app-template/packages/micro/package.json` | dependencies | ^ |
| `micro-app-template/packages/base/package.json` | dependencies | ^ |
| `ths-design/packages/components/gis-map/package.json` | peerDependencies | >= |
| `ths-design/packages/ths-design/package.json` | peerDependencies | >=（前置修复后才有） |

**C. UMD 产物文件（4 个文件，仅 3.0.0）**

| 源 `ths-design/packages/ths-design/lib/` | 目标 |
|---|---|
| `index.js` | `lc-visual-building/public/template/3.0.0/resources/ths-design/index.js` |
| `style.css` | `lc-visual-building/public/template/3.0.0/resources/ths-design/style.css` |
| `index.js` | `lc-visual-building/public/template/update/update-files/3.0.0/resources/ths-design/index.js` |
| `style.css` | `lc-visual-building/public/template/update/update-files/3.0.0/resources/ths-design/style.css` |

**D. 不碰**

- `update-files/2.0.0/`（用户明确不更新）
- `micro-app-template/package.json` 的 `overrides` 块 + `.npm-tarballs/`（临时方案，报告里提示用户验证 registry 后手动删）
- `ths-design/package.json`（根，是权威源，用户手动维护）
- `ths-design/packages/ths-design/package.json` 的 `version`（@ths/design 自身版本，发布动作，不归技能）

### 执行流程（脚本 `/tmp/sync-deps.js`，支持 `--dry-run`）

1. 读 @ths/design 版本（聚合包 package.json）+ @ths-map-sdk 4 包版本（根 package.json devDependencies）
2. **dry-run**（默认）：打印
   - 版本号：每处 `旧值 → 新值`（高亮有变化的，无变化的位置标注"已最新"）
   - 产物文件：源/目标路径 + 源字节 + 目标当前字节（不一致才标记需拷贝）
   - override 处置提示
3. 用户确认后实跑：`node /tmp/sync-deps.js`
4. 报告：变更文件数、版本号变更明细、产物拷贝明细、后续动作提示

### 脚本设计要点

- **保留约束风格**：读目标当前值匹配前缀 `^` / `>=` / `~` / 无，新版本套同样前缀（lc-visual-building 的 @ths/design 无 ^ 保持无 ^；gis-map/ths-design 聚合包 peerDeps 保持 >=；下游 dependencies 保持 ^）
- **JSON 精确改写**：每个 package.json 读出 → 改对应字段（dependencies / peerDependencies）→ `JSON.stringify(obj, null, 2)` 写回，避免正则误伤。注意 gis-map/ths-design 聚合包是 2 空格缩进
- **peerDeps 有则更新无则跳过**：gis-map 和 ths-design 聚合包的 peerDependencies 里若某 @ths-map-sdk 包不存在则跳过并报告（不擅自添加，添加是前置修复已做的事）
- **产物拷贝校验**：源文件存在 + 字节 > 0；拷贝后校验目标字节 == 源字节
- **路径常量**：脚本顶部定义 `THS_DESIGN_ROOT` / `LC_ROOT` / `CONVERTER_ROOT` / `TEMPLATE_ROOT` 绝对路径
- **幂等**：已是新值的位置跳过

### SKILL.md 结构

```
---
name: sync-deps
description: 组件库 @ths/design 或地图插件 @ths-map-sdk/* 发布新包后，同步所有散落位置的版本号 + UMD 产物。@ths/design 版本读 ths-design 聚合包 package.json，@ths-map-sdk 版本读 ths-design 根 package.json devDependencies。支持 dry-run、保留各位置约束风格(^/>=/无)、产物字节校验。发布完组件库新版本需更新 lc-visual-building/converter/micro-app-template 各 package.json 与 ths-design 内部 gis-map/ths-design 包 peerDependencies，以及 template/3.0.0、update-files/3.0.0 的 ths-design 产物时使用。
---
# 依赖版本同步
## 何时使用
## 版本号来源（全本地读 ths-design 仓库）
## 同步清单（A/B/C/D 四类）
## 执行步骤（dry-run → 确认 → 实跑）
## 关键规则（保留约束风格 / 只更新 3.0.0 / 不碰 override / peerDeps 有则更新无则跳过 / 产物字节校验）
## 脚本模板（内嵌 Node 脚本，写到 /tmp/sync-deps.js）
## 后续动作提示
```

### 后续动作提示（技能报告末尾输出）

- 各仓库改动建议分别 git commit（ths-design / lc-visual-building / converter / micro-app-template）
- converter 若改了 `templates/package.json`，视情况 bump converter 自身版本并 `npm publish`
- override 块处置：验证 `npm view @ths/design version` 是否可达内网 registry，可达则删除 `micro-app-template/package.json` 的 `overrides` 块 + `.npm-tarballs/` 目录

## 三、不做的事

- 不跑 `yarn lib` 构建（用户发布前已构建）
- 不 git commit / push（除非用户明确要求）
- 不动 2.0.0 产物、不动 override 块、不动根 package.json
- 不自动下载 .npm-tarballs tarball
- 技能不补依赖项（前置修复已补，技能只更新版本号）

## 实施顺序

1. 前置修复：Edit `ths-design/packages/ths-design/package.json` 补 peerDependencies + peerDependenciesMeta
2. 创建技能：Write `一张图框架3.0/.claude/skills/sync-deps/SKILL.md`（含内嵌脚本模板）
3. 自检：跑一次 `node /tmp/sync-deps.js --dry-run` 验证脚本能跑通（当前各处版本一致，应显示"无变化"，证明脚本正确识别）
