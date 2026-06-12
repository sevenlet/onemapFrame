/**
 * Step 5: znxl 智能流相关 JS 处理
 *
 * 把根 src/ 下所有 znxl-inset*.js 移动到 src/znxl-lib/，
 * 其中 KEEP_ZNXL（默认 znxl-inset.js）需要把 `const { ... } = Vue;` 改写为标准 import。
 * 其余 znxl-inset-<date>.js 直接拷贝（被 srcdoc 字符串引用，运行时按 URL 加载）。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const { ensureDir, writeFile, readFile } = require('./util.js');
const { CONFIG } = require('./constants.js');

function convertZnxlFiles(projectDir) {
  const srcDir = path.join(projectDir, 'src');

  const znxlFiles = fs.readdirSync(srcDir)
    .filter(f => f.startsWith('znxl-inset') && f.endsWith('.js'))
    .sort();

  if (znxlFiles.length === 0) return;

  const znxlDir = path.join(srcDir, 'znxl-lib');
  ensureDir(znxlDir);

  for (const file of znxlFiles) {
    if (file === CONFIG.KEEP_ZNXL) {
      const content = readFile(path.join(srcDir, file));
      let converted = content.replace(
        /const\s*\{([^}]+)\}\s*=\s*Vue\s*;/,
        (m, imports) => `import { ${imports} } from 'vue';`
      );
      writeFile(path.join(znxlDir, 'index.js'), converted);
    } else {
      fs.copyFileSync(path.join(srcDir, file), path.join(znxlDir, file));
    }
  }

  for (const file of znxlFiles) {
    fs.unlinkSync(path.join(srcDir, file));
  }
}

module.exports = { convertZnxlFiles };
