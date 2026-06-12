/**
 * Step 4: 转换 src/globals/ 下的全局变量与函数文件
 *
 * 原平台用 <script> 全局共享，转换后需要让它们能在 ES Module 下相互引用：
 *   - variables/*.js : `window.X = ...` → `export const X = ...`（含 init 模式保留）
 *   - functions/*.js : 同上；publicGlobalFunctions.js 特殊处理
 *     （顶层声明 hoist 到 window + 自动补 utils.js import）
 *   - 同时生成 globals/index.js（统一 side-effect 加载 + window 挂载）
 *
 * publicGlobalFunctions.js 特殊在哪：
 *   它被页面直接以 window.xxx() 形式调用。源文件写的是裸 `const xxx = ...`，
 *   ES Module 下这种声明不会自动挂 window —— 必须用 AST 找出所有顶层声明，
 *   逐个改写为 `window.xxx = ...`。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const { log, writeFile, readFile, fixEsmStrictModeIssues } = require('./util.js');
const { UTILS_EXPORTED_NAMES } = require('./constants.js');

// 由 main 注入；缺失时 hoistTopLevelDeclsToWindow 退化为不改写并 log warn
let babelParser = null;
function setDeps({ babelParser: bp }) {
  babelParser = bp;
}

function convertGlobals(projectDir) {
  const globalsDir = path.join(projectDir, 'src', 'globals');

  const varsDir = path.join(globalsDir, 'variables');
  if (fs.existsSync(varsDir)) {
    for (const file of fs.readdirSync(varsDir)) {
      if (!file.endsWith('.js')) continue;
      const filePath = path.join(varsDir, file);
      let content = readFile(filePath);

      const initPattern = /window\.(\w+)\s*=\s*window\.\1\s*\|\|\s*\{\}/;
      if (initPattern.test(content)) {
        const varMatch = content.match(initPattern);
        const varName = varMatch[1];
        content = content.trimEnd() + `\n\nexport const ${varName} = window.${varName};\n`;
        writeFile(filePath, content);
        log(`  保留 window 赋值模式: ${file}`, 'warn');
      } else {
        content = content.replace(/window\.(\w+)\s*=\s*/, 'export const $1 = ');
        writeFile(filePath, content);
      }
    }
  }

  const funcsDir = path.join(globalsDir, 'functions');
  if (fs.existsSync(funcsDir)) {
    for (const file of fs.readdirSync(funcsDir)) {
      if (!file.endsWith('.js')) continue;
      const filePath = path.join(funcsDir, file);
      let content = readFile(filePath);
      if (!content.trim()) continue;
      // publicGlobalFunctions.js 内的函数被很多页面直接以 window.xxx() 形式调用，
      // 但平台导出的源文件里写的是顶层 `const xxx = ...` / `function xxx() {}`，
      // 在 ES Module 里 const/function 不会自动挂到 window 上 —— 必须显式赋值。
      // 用 AST 找出所有顶层声明，把 `const x = ...` / `function x(...) {}` 改写为 `window.x = ...`。
      //
      // 另外：源文件依赖原来的"全部 script 一起跑"语义，会直接调用 convertCharacter 等
      // utils.js 导出的函数（原本作为 window 全局可用）。转成 ES Module 后必须显式 import，
      // 否则在 publicGlobalFunctions.js 加载时这些标识符未定义。
      if (file === 'publicGlobalFunctions.js') {
        content = hoistTopLevelDeclsToWindow(content);
        content = addUtilsImportsToPublicFns(content);
        content = fixEsmStrictModeIssues(content);
        writeFile(filePath, content);
        continue;
      }
      content = content.replace(/window\.(\w+)\s*=\s*/, 'export const $1 = ');
      content = fixEsmStrictModeIssues(content);
      writeFile(filePath, content);
    }
  }

  const indexContent = generateGlobalsIndex(globalsDir);
  writeFile(path.join(globalsDir, 'index.js'), indexContent);
}

function generateGlobalsIndex(globalsDir) {
  const varsDir = path.join(globalsDir, 'variables');
  const funcsDir = path.join(globalsDir, 'functions');
  const filtersDir = path.join(globalsDir, 'filters');

  const lines = [
    '/**',
    ' * 全局变量和函数统一导出（自动生成）',
    ' */',
    '',
  ];

  const varFiles = [];
  if (fs.existsSync(varsDir)) {
    for (const file of fs.readdirSync(varsDir).filter(f => f.endsWith('.js')).sort()) {
      const content = readFile(path.join(varsDir, file));
      const isPublic = /export\s+const\s+publicGlobalVariables\s*=/.test(content);
      const isModule = /window\.moduleGlobalVariables\s*=\s*window\.moduleGlobalVariables\s*\|\|\s*\{\}/.test(content);
      const varName = file.replace(/\.js$/, '');
      varFiles.push({ fileName: file, varName, isPublic, isModule });
    }
  }

  const funcFiles = [];
  if (fs.existsSync(funcsDir)) {
    for (const file of fs.readdirSync(funcsDir).filter(f => f.endsWith('.js')).sort()) {
      const content = readFile(path.join(funcsDir, file));
      if (!content.trim()) continue;
      // publicGlobalFunctions.js 内部使用 window.xxx = ... 形式赋值，
      // 没有 ES export，靠 side-effect import 自动挂到 window。
      const isPublic = file === 'publicGlobalFunctions.js';
      const exportMatch = content.match(/export\s+const\s+(\w+)/);
      const varName = exportMatch ? exportMatch[1] : file.replace(/\.js$/, '');
      funcFiles.push({ fileName: file, varName, isPublic });
    }
  }

  lines.push('if (!window.moduleGlobalVariables) {');
  lines.push('  window.moduleGlobalVariables = {};');
  lines.push('}');
  lines.push('');

  lines.push('// 加载全局变量文件');
  for (const vf of varFiles) {
    lines.push(`import './variables/${vf.fileName}';`);
  }
  lines.push('');

  if (funcFiles.length > 0) {
    lines.push('// 加载全局函数文件');
    for (const ff of funcFiles) {
      lines.push(`import './functions/${ff.fileName}';`);
    }
    lines.push('');
  }

  if (fs.existsSync(filtersDir)) {
    lines.push('// 加载过滤器');
    for (const f of ['builtin.js', 'custom.js', 'index.js']) {
      if (fs.existsSync(path.join(filtersDir, f))) {
        lines.push(`import './filters/${f}';`);
      }
    }
    lines.push('');
  }

  const publicFile = varFiles.find(vf => vf.isPublic);
  if (publicFile) {
    lines.push(`import { ${publicFile.varName} } from './variables/${publicFile.fileName}';`);
    lines.push(`window.${publicFile.varName} = ${publicFile.varName};`);
    lines.push('');
  }

  const moduleFiles = varFiles.filter(vf => vf.isModule);
  if (moduleFiles.length > 0) {
    lines.push('window.legoGlobalVariables = window.legoGlobalVariables || {};');
    lines.push('');
    for (const mf of moduleFiles) {
      lines.push(`if (window.moduleGlobalVariables.${mf.varName}) {`);
      lines.push(`  window.legoGlobalVariables.${mf.varName} = window.moduleGlobalVariables.${mf.varName};`);
      lines.push(`}`);
    }
    lines.push('');
  }

  for (const ff of funcFiles) {
    // publicGlobalFunctions.js 没有 export，且文件内部已经 `window.xxx = ...`，
    // 不能用命名导入，也不需要再做 window 赋值；前面那条 `import './functions/...'`
    // 已经把它作为 side-effect 加载了。
    if (ff.isPublic) continue;
    lines.push(`import { ${ff.varName} } from './functions/${ff.fileName}';`);
    lines.push(`window.${ff.varName} = ${ff.varName};`);
  }
  if (funcFiles.length > 0) lines.push('');

  lines.push('export function loadGlobalVariables() {');
  lines.push('  window.globalFilesLoaded = true;');
  lines.push("  document.dispatchEvent(new Event('globalFilesLoaded'));");
  lines.push('}');
  lines.push('');
  lines.push('export function loadGlobalFunctions() {');
  lines.push('  // 全局函数已通过 import 自动加载');
  lines.push('}');

  return lines.join('\n') + '\n';
}

/**
 * 给 publicGlobalFunctions.js 自动补上从 @/utils.js 引入的依赖。
 *
 * 平台原始项目里所有 JS 是用 <script> 顺序加载的，publicGlobalFunctions.js
 * 可以直接调用 utils.js 里的 convertCharacter / guid 等（都挂在 window）。
 * 转成 ES Module 后这些标识符在文件作用域内不存在，必须显式 import。
 *
 * 实现：扫描文件文本，找出引用了哪些 UTILS_EXPORTED_NAMES 中的名字（按单词边界匹配），
 * 在文件顶部加一行 `import { ... } from '@/utils.js';`。
 */
function addUtilsImportsToPublicFns(code) {
  const used = UTILS_EXPORTED_NAMES.filter(
    name => new RegExp(`\\b${name}\\b`).test(code)
  );
  if (used.length === 0) return code;
  const importLine = `import { ${used.join(', ')} } from '@/utils.js';\n`;
  return importLine + code;
}

/**
 * 把一段 JS 里所有顶层声明（const/let/var/function/class）改写为 `window.xxx = ...`，
 * 用于 publicGlobalFunctions.js：
 *   - 平台导出时写的是裸 `const setDomHeightValue = (...) => {}` 之类
 *   - 在 ES Module 下，这些声明只在文件作用域可见，不会自动挂到 window 上
 *   - 而页面里直接调用 `setDomHeightValue(...)`（实际依赖全局），所以必须显式挂载
 *
 * 用 AST 仅处理 Program.body 的顶层节点，跳过函数内部的局部 const。
 * 解构声明 `const { a, b } = x` 转为 `({a, b} = window, window.a = a; window.b = b)` —— 这里没遇到，简单地保留原文。
 */
function hoistTopLevelDeclsToWindow(code) {
  if (!babelParser) return code;
  let ast;
  try {
    ast = babelParser.parse(code, {
      sourceType: 'module',
      plugins: ['objectRestSpread'],
      errorRecovery: true,
    });
  } catch (e) {
    log(`  publicGlobalFunctions.js AST 解析失败，保留原文：${e.message}`, 'warn');
    return code;
  }

  // 收集需要替换的区间：从节点 start 到 end，新文本
  const edits = [];
  for (const node of ast.program.body) {
    if (node.type === 'VariableDeclaration') {
      // 仅处理 `const NAME = EXPR;` 形式的单变量声明
      const parts = [];
      let ok = true;
      for (const d of node.declarations) {
        if (!d.id || d.id.type !== 'Identifier' || !d.init) { ok = false; break; }
        const initText = code.substring(d.init.start, d.init.end);
        parts.push(`window.${d.id.name} = ${initText};`);
      }
      if (ok) edits.push({ start: node.start, end: node.end, text: parts.join('\n') });
    } else if (node.type === 'FunctionDeclaration' && node.id) {
      // function foo(...) {...}  →  window.foo = function foo(...) {...};
      const fnText = code.substring(node.start, node.end);
      edits.push({ start: node.start, end: node.end, text: `window.${node.id.name} = ${fnText};` });
    } else if (node.type === 'ClassDeclaration' && node.id) {
      const clsText = code.substring(node.start, node.end);
      edits.push({ start: node.start, end: node.end, text: `window.${node.id.name} = ${clsText};` });
    }
    // ExpressionStatement / 已经是 window.xxx = ... 的直接保留
  }

  if (edits.length === 0) return code;

  // 从后往前替换，避免偏移失效
  let out = code;
  edits.sort((a, b) => b.start - a.start);
  for (const e of edits) {
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }
  return out;
}

module.exports = { convertGlobals, setDeps };
