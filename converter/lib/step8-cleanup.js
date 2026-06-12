/**
 * Step 8: 清理
 *
 * 删除已成功转为 pages/<name>.vue 的源组件目录，删除遗留的 utils20250327.js。
 * 保留：globals / pages / znxl-lib / resources 四个目录。
 */
'use strict';

const fs = require('fs');
const path = require('path');

function cleanUp(projectDir) {
  const srcDir = path.join(projectDir, 'src');
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  const keep = new Set(['globals', 'pages', 'znxl-lib', 'resources']);

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (keep.has(entry.name)) continue;

    // 有 index.js 或 index.vue 的组件目录，如果已成功转为 pages/<name>.vue 则可删除
    const indexJs = path.join(srcDir, entry.name, 'index.js');
    const indexVue = path.join(srcDir, entry.name, 'index.vue');
    if (fs.existsSync(indexJs) || fs.existsSync(indexVue)) {
      const vueFile = path.join(srcDir, 'pages', `${entry.name}.vue`);
      if (fs.existsSync(vueFile)) {
        fs.rmSync(path.join(srcDir, entry.name), { recursive: true, force: true });
      }
    }
  }

  const oldUtils = path.join(srcDir, 'utils20250327.js');
  if (fs.existsSync(oldUtils)) fs.unlinkSync(oldUtils);
}

module.exports = { cleanUp };
