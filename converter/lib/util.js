/**
 * 基础工具：日志、文件 IO、目录拷贝、字符串规范化、ESM 严格模式修复。
 *
 * 所有"跨 step 共用"的小工具都集中在这里，避免每个 step 重复 require fs/path。
 * 转换流程相关的领域逻辑放对应 step 文件里，不进 util。
 */
'use strict';

const fs = require('fs');
const path = require('path');

// ---- 日志（保留原脚本的 [convert-new] 前缀和颜色） ----
function log(msg, type = 'info') {
  const colors = { info: '\x1b[36m', success: '\x1b[32m', warn: '\x1b[33m', error: '\x1b[31m' };
  const reset = '\x1b[0m';
  console.log(`${colors[type] || ''}[convert-new] ${msg}${reset}`);
}

// ---- 文件 IO ----
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf-8');
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

function copyDirSync(src, dest) {
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      ensureDir(path.dirname(destPath));
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// ---- 字符串工具 ----

/**
 * 将任意字符串转换为符合 npm 规范的包名：
 *   - 全小写
 *   - 仅允许 ASCII 字母数字与 - _ .
 *   - 不允许以 . 或 _ 开头
 *   - 非法字符（含中文）替换为 -
 *   - 全部非法时退化为 'lego-app'
 */
function sanitizePackageName(name) {
  let n = String(name).toLowerCase();
  n = n.replace(/[^a-z0-9\-_.]/g, '-');
  n = n.replace(/-+/g, '-').replace(/^[._-]+|[._-]+$/g, '');
  if (!n) n = 'lego-app';
  return n;
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 缩进每一行
 */
function indent(text, prefix) {
  return text.split('\n').map(l => (l.length ? prefix + l : l)).join('\n');
}

/**
 * 将 JS 代码中所有的 "</script>" 转义为 "<\/script>"。
 * 用于 Vue SFC 的 <script> 块内容：Vue 编译器按文本扫描边界，
 * 字符串/注释里出现 </script> 会让它误判块结束。
 * 在 JS 里 <\/script> 与 </script> 完全等价（\/ === /），转义后行为不变。
 */
function escapeScriptCloseTags(code) {
  return code.replace(/<\/script\s*>/gi, m => m.replace('</', '<\\/'));
}

// ---- ESM 严格模式修复 ----

/**
 * 修复 ESM 严格模式下的非法写法
 *
 * 源代码按非严格模式 <script> 编写，转成 .vue（ES Module）后有两类问题：
 *
 * 1. arguments 是 ES Module 保留标识符，不能声明为变量名
 *    如 `let arguments = document.querySelectorAll(...)` → 重命名为 `_arguments`
 *
 * 2. const 变量被重新赋值（非严格模式 var 允许，ESM 报错）
 *    如 `const xData = [...]; ... xData = [...]` → `let xData = [...]`
 *    检测方法：扫描所有 const 声明，若变量名在同一脚本块内出现
 *    不带前置 const/let/var 的赋值 `xxx =`（排除 ===/==），则改为 let
 */
function fixEsmStrictModeIssues(code) {
  // ---- 1) 重命名 arguments 变量 ----
  if (/\b(const|let|var)\s+arguments\b/.test(code)) {
    // 所有声明和后续引用一起替换为 _arguments
    // 注意要用 /g 才能处理多个声明（同一函数被多次复制的低代码场景）
    code = code.replace(/\b(const|let|var)\s+arguments\b/g, '$1 _arguments');
    code = code.replace(/\barguments\b(?!\s*=[^=])/g, '_arguments');
  }

  // ---- 2) const → let（被重新赋值的） ----
  // 收集所有 const 声明的变量名（同名变量在不同作用域可能多次声明）
  const constDeclRegex = /\bconst\s+(\w+)\s*=/g;
  const constVars = new Set();
  let m;
  while ((m = constDeclRegex.exec(code)) !== null) {
    constVars.add(m[1]);
  }

  for (const varName of constVars) {
    if (varName === 'undefined' || varName === 'NaN' || varName === 'Infinity') continue;

    // 检测是否有重赋值（独立的 varName 后跟 =，且不是 ==/===，前面不是 const/let/var）
    const reassignRegex = new RegExp(
      `(?<!(?:const|let|var)\\s+)\\b${varName}\\s*=[^=]`
    );
    if (reassignRegex.test(code)) {
      // 把所有 const 声明改为 let（同名变量可能多处声明，需要全局替换）
      const declRegex = new RegExp(`\\bconst\\s+${varName}\\b`, 'g');
      code = code.replace(declRegex, `let ${varName}`);
    }
  }

  return code;
}

module.exports = {
  log,
  ensureDir,
  writeFile,
  readFile,
  copyDirSync,
  sanitizePackageName,
  escapeRegExp,
  indent,
  escapeScriptCloseTags,
  fixEsmStrictModeIssues,
};
