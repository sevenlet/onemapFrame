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

/**
 * 剥离平台导出 JS 文件外层的「JSDoc 头注释 + IIFE 外壳」。
 *
 * 平台输出的 index.js 形如：
 *   /** ... *\/
 *   (function () {
 *     ...组件对象 / 编译后语句...
 *   })();
 *
 * 三个分支（格式探测 / 标准格式预清理 / 编译后预清理）都需要先去掉这层壳，
 * 才能继续做 AST 解析或字符串改写。
 */
function stripIIFEShell(content) {
  let out = content.replace(/^\/\*\*[\s\S]*?\*\/\s*/, '').trimStart();
  if (/^\s*\(\s*function\s*\(/.test(out)) {
    out = out.replace(/^\s*\(\s*function\s*\([^)]*\)\s*\{/, '');
    out = out.replace(/\}\s*\)\s*\(\s*\)\s*;?\s*$/, '');
  }
  return out;
}

/**
 * 与 stripIIFEShell 类似，但仅剥文件最末尾的 IIFE 壳（常用于内部 `(function () { ... })()`）。
 * stripIIFEShell 只处理「文件以 IIFE 开头」的情况；当头部有 Babel helper 函数声明
 * （_regeneratorRuntime 等）时，IIFE 被挤到中间。本函数专为 convertCompiled 场景服务：
 * 把末尾 `(function () { ... })()` 剥掉，露出 IIFE 内部的 var componentOptions / render 等，
 * 头部 helper 保持不变。
 */
function stripTrailingIIFE(content) {
  // 借助 babelParser 定位最后一个顶层 ExpressionStatement 中的 IIFE：
  // (function () { ... })(); 在 AST 中是一个 ExpressionStatement，其 expression
  // 是 CallExpression(callee=FunctionExpression)。找到它之后用字符串切片剥壳。
  // convertCompiled 里已经有 babelParser，这里通过参数传入。
  // 但此函数由 convertCompiled 调用，它手里有 babelParser —— 然而 stripTrailingIIFE
  // 是个纯字符串工具，不应依赖注入。因此改用字符串启发式：
  //
  // 特征：文件中存在形如 `(function () {` 的顶层表达式，后面紧挨 `})();` 收尾。
  // 这种格式的特点是最末尾的 `})();` 和它前面最近一个 `(function () {` 一一对应。
  //
  // 更省事的办法：直接找从末尾往前数的最外层配对，前面已经试过有 bug。
  // 第三条路：从末尾 `})();` 用正则在全文里找匹配的 `(function () {` —— 找最后一个
  // `(function` 开头的顶层表达式。
  const endMarker = /}\s*\)\s*\(\s*\)\s*;?\s*$/;
  if (!endMarker.test(content)) return content;

  // 找文件中所有的 `(function () {`（独立成句，前面是行首/分号/} 或空格）
  // 取最后一个
  const iifeRe = /(?:^|[\n;}])\s*(\(\s*function\s*\([^)]*\)\s*\{)/g;
  let lastMatch = null;
  let m;
  while ((m = iifeRe.exec(content)) !== null) {
    lastMatch = m;
  }
  if (!lastMatch) return content;

  const parenStart = lastMatch.index + lastMatch[0].indexOf('(');
  const prefix = lastMatch[0].match(/\(\s*function\s*\([^)]*\)\s*\{/);
  if (!prefix) return content;
  const bodyStart = parenStart + prefix[0].length;

  // 从 bodyStart 到末尾的 })(); 之前就是函数体
  const endMatch = content.match(endMarker);
  const bodyEnd = endMatch.index;

  return content.slice(0, parenStart) + content.slice(bodyStart, bodyEnd);
}

// ---- Babel 编译产物逆向 ----

/**
 * 反向还原 Babel 编译后的 ES5 polyfill 代码 → ES6+ 等价写法。
 *
 * 触发场景：平台对部分含 ES6+ 语法（解构/箭头/类等）的组件做了 Babel 编译，
 * 产物形如：
 *   "use strict";
 *   function _typeof(o) { ... }
 *   function ownKeys(e, r) { ... }
 *   function _objectSpread(e) { ... }
 *   function _defineProperty(e, r, t) { ... }
 *   function _toPropertyKey(t) { ... }
 *   function _toPrimitive(t, r) { ... }
 *   window.xxxComponent = { setup: function () { reactive(_objectSpread({}, ...)); } };
 *
 * 这种格式：
 *   1. 没有外层 IIFE，stripIIFEShell 不识别
 *   2. 顶层是裸 helper 函数声明 + window 赋值，preCleanStandard 后无法被 parse 成
 *      单个对象表达式
 *
 * 处理策略：
 *   - 调用点替换：`_objectSpread({}, A)` → `Object.assign({}, A)`，
 *                 `_objectSpread(_objectSpread({}, A), B)` → `Object.assign({}, A, B)`，
 *                 `_typeof(X)` → `typeof X`
 *     （选 Object.assign 而非 spread 字面量，是因为业务里嵌套调用展开成
 *       `{...{...A}, ...B}` 不一定语义等价 — 比如 setter 行为；Object.assign
 *       与 _objectSpread 的行为更贴近。）
 *   - 删除 helper 函数声明（_typeof / _objectSpread / _defineProperty /
 *     _toPropertyKey / _toPrimitive / ownKeys / _regeneratorRuntime）
 *   - 删除顶部裸 "use strict"（Vue SFC <script> 已经是 ESM 严格模式）
 *
 * 业务实测：业务区只直接调用 _objectSpread 和 _typeof，其它 helper 都只在
 * _objectSpread 内部互调，所以只需还原这两个调用点。其它 helper 函数随声明一起删除。
 *
 * 依赖外部注入的 babelParser（同 renameReservedWordsAsIdentifiers）。
 * 解析失败时返回原内容，让后续步骤照常报错。
 */
/**
 * Babel helper 函数：分两类
 *   - 可删除：业务区不直接调用，仅作为已被还原的调用点（_typeof / _objectSpread）
 *             的内部依赖，或本身可被改写消除（_typeof 改成 typeof，_objectSpread
 *             改成 Object.assign）
 *   - 保留：业务区可能直接调用且无法廉价还原的（_asyncToGenerator / asyncGeneratorStep
 *           / _regeneratorRuntime 由 async function 编译产生，还原成 ES6 async 要重
 *           写 generator 状态机，得不偿失；这些 helper 自身是合法 ES5，在 ESM 严格
 *           模式下能正常运行，留着就好）
 */
const REMOVABLE_HELPER_NAMES = new Set([
  '_typeof', '_objectSpread', '_defineProperty', '_toPropertyKey',
  '_toPrimitive', 'ownKeys',
]);

function unwrapBabelHelpers(code, babelParser) {
  if (!babelParser) return code;

  // 廉价探测：没有需要处理的 helper 就跳过
  if (!/\bfunction\s+_(typeof|objectSpread)\b/.test(code)) return code;

  // 保留型 helper（_regeneratorRuntime / asyncGeneratorStep / _asyncToGenerator）会
  // 在内部引用 _typeof 等可删除 helper，删了 _typeof 导致 dangling reference。
  // 如果有这些 helper，整份文件不碰 —— 让它原样进 convertCompiled，
  // 所有 helper 会通过 extraTopScope 收集到生成的 <script> 头部。
  if (/\bfunction\s+(_regeneratorRuntime|asyncGeneratorStep|_asyncToGenerator)\b/.test(code)) return code;

  let ast;
  try {
    ast = babelParser.parse(code, {
      sourceType: 'script',
      plugins: ['objectRestSpread'],
      errorRecovery: true,
    });
  } catch (e) {
    return code;
  }

  const edits = []; // { start, end, text }

  // 1) 删可消除 helper 函数声明 + 顶部裸 "use strict"
  //    （babel 把它放在 program.directives 里）
  //    注意：_regeneratorRuntime / asyncGeneratorStep / _asyncToGenerator 等 async 编译
  //    产物不删 — 业务会直接调用它们，且它们自身是合法 ES5，在 ESM 严格模式下能正常运行。
  //    它们留在源码里，后续 convertCompiled 会通过 extraTopScope 收集并放到 <script> 顶部。
  for (const dir of ast.program.directives || []) {
    if (dir.value && dir.value.value === 'use strict') {
      edits.push({ start: dir.start, end: dir.end, text: '' });
    }
  }
  for (const node of ast.program.body) {
    if (node.type === 'FunctionDeclaration' && node.id && REMOVABLE_HELPER_NAMES.has(node.id.name)) {
      edits.push({ start: node.start, end: node.end, text: '' });
      continue;
    }
    // 容错：早期 babel 也可能把 "use strict" 放进 body 而不是 directives
    if (node.type === 'ExpressionStatement' &&
        node.expression.type === 'StringLiteral' &&
        node.expression.value === 'use strict') {
      edits.push({ start: node.start, end: node.end, text: '' });
    }
  }

  // 2) 调用点重写：递归 walk 整个 AST
  function unwrapObjectSpread(node) {
    // _objectSpread(X, Y) → 把链上所有 _objectSpread 平铺为 Object.assign(X, Y, ...)
    // 例如：_objectSpread(_objectSpread({}, A), B) → Object.assign({}, A, B)
    const args = [];
    function collect(n) {
      if (n.type === 'CallExpression' &&
          n.callee.type === 'Identifier' &&
          n.callee.name === '_objectSpread' &&
          n.arguments.length >= 1) {
        const first = n.arguments[0];
        collect(first);
        for (let i = 1; i < n.arguments.length; i++) {
          args.push(n.arguments[i]);
        }
      } else {
        args.push(n);
      }
    }
    collect(node);
    const pieces = args.map(a => code.slice(a.start, a.end));
    return `Object.assign(${pieces.join(', ')})`;
  }

  function visit(node) {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(visit); return; }
    if (typeof node.type !== 'string') return;

    // 整个 helper 函数声明已在上一轮被删除（或保留）—— 内部不要递归，
    // 否则嵌套 edit 在后→前应用时引起长度偏移，把外围删改区间错位。
    if (node.type === 'FunctionDeclaration' && node.id) {
      if (REMOVABLE_HELPER_NAMES.has(node.id.name)) return;
      // 保留型 helper（_regeneratorRuntime / asyncGeneratorStep / _asyncToGenerator）
      // 也不递归 — 它们内部会引用 _typeof / ownKeys 等要被删的 helper，
      // 改写引用点会产生 dangling reference；整个保留更安全。
      if (node.id.name === '_regeneratorRuntime' ||
          node.id.name === 'asyncGeneratorStep' ||
          node.id.name === '_asyncToGenerator') return;
    }

    if (node.type === 'CallExpression' && node.callee.type === 'Identifier') {
      const name = node.callee.name;
      if (name === '_objectSpread' && node.arguments.length >= 1) {
        edits.push({ start: node.start, end: node.end, text: unwrapObjectSpread(node) });
        // 改写整段后不再递归进 children，避免与下层 _objectSpread 的独立 edit 重叠
        return;
      }
      if (name === '_typeof' && node.arguments.length === 1) {
        const arg = node.arguments[0];
        edits.push({ start: node.start, end: node.end, text: `typeof ${code.slice(arg.start, arg.end)}` });
        return;
      }
    }

    for (const k of Object.keys(node)) {
      if (k === 'loc' || k === 'start' || k === 'end' || k === 'range' ||
          k === 'leadingComments' || k === 'trailingComments' || k === 'innerComments') continue;
      visit(node[k]);
    }
  }
  visit(ast.program);

  if (!edits.length) return code;

  // 后→前应用，避免偏移失效
  edits.sort((a, b) => b.start - a.start);
  let out = code;
  for (const e of edits) {
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }
  // 删除函数声明后可能留下连续空行，做一次轻收尾
  out = out.replace(/^\s*\n/, '').replace(/\n{3,}/g, '\n\n');
  return out;
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

    // 检测是否有重赋值（以语句边界为锚点：行首 / ; / } 之后出现 varName = 且不是 ==/===，
    // 避免负向 lookbehind 被中间空白/注释绕过的脆弱性）
    const reassignRegex = new RegExp(
      `(?:^|[;}\\n])\\s*${escapeRegExp(varName)}\\s*=(?!=)`, 'm'
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
  stripIIFEShell,
  stripTrailingIIFE,
  unwrapBabelHelpers,
  fixEsmStrictModeIssues,
};
