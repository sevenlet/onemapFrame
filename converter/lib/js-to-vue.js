/**
 * JS → .vue 转换核心算法。
 *
 * 入口：jsToVue(rawContent, dirName, cssContent) → 返回完整的 .vue 字符串。
 *
 * 支持两种输入格式：
 *   1) 标准格式 — IIFE 内裸露组件选项对象 `{ template: "...", setup() { ... } }`
 *      有 template 字段，用 AST 提取 template + 其余属性，生成含 <template> 的 .vue
 *
 *   2) 编译后格式 — IIFE 内 `const componentOptions = { setup() { ... } }`
 *      + function render() { ... } + window.xxxComponent = { ...componentOptions, render }
 *      无 template 字段但有独立的 render 函数，保留 render，生成无 <template> 的 .vue
 *
 * 检测策略：
 *   - 先尝试格式 1（标准 AST 解析，要求内容是单个对象表达式）
 *   - 若失败则回退到格式 2（编译后组件，用 AST 解析整个 IIFE 函数体）
 */
'use strict';

const {
  escapeRegExp,
  indent,
  escapeScriptCloseTags,
  stripIIFEShell,
  fixEsmStrictModeIssues,
} = require('./util.js');
const {
  UTILS_EXPORTED_NAMES,
  VUE_SETUP_APIS,
  VUE_RENDER_APIS,
  VUE_DEFAULT_IMPORT_APIS,
  VUE_PREFIX_APIS,
} = require('./constants.js');
const {
  extractThsComponentsFromTemplate,
  buildThsImportInfo,
} = require('./ths-design.js');

// 由 main 启动时注入；缺失时 jsToVue 会抛"AST 解析失败"
let babelParser = null;
let prettier = null;

function setDeps({ babelParser: bp, prettier: pr }) {
  babelParser = bp;
  prettier = pr;
}

/**
 * 入口：把一个 index.js 转为单文件 .vue。
 *
 * 先按编译后格式检测；不匹配就走标准格式。
 */
function jsToVue(rawContent, dirName, cssContent) {
  const componentName = dirName + 'Component';

  // 0) 把 ES Module 保留字（interface / package / private / 等）作变量名的地方
  //    重命名为 `_interface` / `_package`，避免输出的 .vue 在严格模式下解析失败。
  //    源代码原本运行在 sloppy mode（<script> 全局），这些保留字曾合法。
  rawContent = renameReservedWordsAsIdentifiers(rawContent);

  // 用最少的清理（仅去注释 + IIFE 外壳）来判断格式
  const probe = stripIIFEShell(rawContent);
  const isCompiledPattern =
    /\bconst\s+componentOptions\s*=/.test(probe) &&
    /\bfunction\s+render\s*\(/.test(probe);

  if (isCompiledPattern) {
    return convertCompiled(rawContent, componentName, dirName, cssContent);
  }

  // 标准格式：完整 preClean（去 window.xxx 赋值，让内容变成单个对象表达式）
  const cleaned = preCleanStandard(rawContent, componentName);
  return convertStandard(cleaned, rawContent, dirName, cssContent);
}

/**
 * 把 ES Module 保留字（interface / package / private / protected / public / static /
 * implements / yield / let）作变量名/解构名/纯值引用的地方重命名为下划线前缀。
 *
 * 原平台 <script> 顺序加载是 sloppy mode，源码里写 `const {interface} = x`、
 * `state.interface = interface` 是合法的。转成 ES Module 后严格模式禁用这些保留字。
 *
 * 处理位置：
 *   - 变量声明：`const interface = 1` → `const _interface = 1`
 *   - 解构赋值：`const { interface } = x` → `const { interface: _interface } = x`
 *     （shorthand 不能直接 rename，要展开成 longhand）
 *   - 解构 + rename：`const { interface: foo } = x` → 不动（key 是属性名，foo 不是保留字）
 *   - 单独标识符引用：`return interface` → `return _interface`（之前声明过的）
 *   - 不动的位置：对象 key（`{ interface: 1 }`）、属性访问（`x.interface`）、字符串字面量
 *
 * 用 sourceType:'script' 解析，容忍保留字。
 */
function renameReservedWordsAsIdentifiers(code) {
  // 仅处理实际会出问题的几个保留字 —— 加更多会增加误改风险
  const RESERVED = new Set([
    'interface', 'package', 'private', 'protected', 'public', 'implements',
  ]);

  let ast;
  try {
    ast = babelParser.parse(code, {
      sourceType: 'script',
      plugins: ['objectRestSpread'],
      errorRecovery: true,
    });
  } catch (e) {
    // script 模式都解析失败，放弃改写让后续步骤自然报错
    return code;
  }

  // 收集所有需要替换的源码区间：[start, end, newText]
  const edits = [];

  function visit(node, parent, key) {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) {
      node.forEach((child, i) => visit(child, parent, [key, i]));
      return;
    }
    if (typeof node.type !== 'string') return;

    // 解构 shorthand：`const { interface } = x` —— ObjectProperty.shorthand=true
    // AST 里 key 和 value 是两个不同的 Identifier 节点（位置相同）。
    // 在 visit 到 ObjectProperty 时直接处理整个 prop，避免它的 child Identifier 被普通分支误改。
    if (node.type === 'ObjectProperty' && node.shorthand &&
        node.key.type === 'Identifier' && RESERVED.has(node.key.name)) {
      const name = node.key.name;
      // 改成 `interface: _interface`，保留属性名，新绑定改名
      edits.push({
        start: node.start,
        end: node.end,
        text: `${name}: _${name}`,
      });
      // 不再递归进 key/value，避免重复改写
      return;
    }

    // ---- Identifier 节点处理 ----
    if (node.type === 'Identifier' && RESERVED.has(node.name)) {
      // 判断它处于哪种位置
      const isObjectKey = parent && parent.type === 'ObjectProperty' &&
                         parent.key === node && !parent.computed;
      const isMethodKey = parent && parent.type === 'ObjectMethod' &&
                         parent.key === node && !parent.computed;
      const isMemberProp = parent && parent.type === 'MemberExpression' &&
                          parent.property === node && !parent.computed;

      if (isObjectKey || isMethodKey || isMemberProp) {
        // 这些位置不改
        return;
      }

      // 普通变量声明 / 引用：直接加下划线
      edits.push({
        start: node.start,
        end: node.end,
        text: `_${node.name}`,
      });
      return;
    }

    // ---- 递归 ----
    for (const k of Object.keys(node)) {
      if (k === 'loc' || k === 'start' || k === 'end' || k === 'range' ||
          k === 'leadingComments' || k === 'trailingComments' || k === 'innerComments') continue;
      visit(node[k], node, k);
    }
  }

  visit(ast.program, null, null);

  if (edits.length === 0) return code;

  // 从后往前应用，避免偏移失效
  edits.sort((a, b) => b.start - a.start);
  let out = code;
  for (const e of edits) {
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }
  return out;
}

/**
 * 仅做去注释 + 去 IIFE 外壳；用来判断格式 — 见 util.stripIIFEShell。
 */

// ============================================================
// 格式 1：标准格式 — 内容应为单个对象表达式
// ============================================================
function convertStandard(content, rawContent, dirName, cssContent) {
  // 包成表达式
  const wrapped = `(${content})`;
  let ast;
  try {
    ast = babelParser.parse(wrapped, {
      sourceType: 'module',
      plugins: ['objectRestSpread'],
    });
  } catch (e) {
    throw new Error(`AST 解析失败: ${e.message}`);
  }

  const es = ast.program.body[0];
  if (!es || es.type !== 'ExpressionStatement' ||
      es.expression.type !== 'ObjectExpression') {
    throw new Error('期望组件是一个对象字面量');
  }

  const objExpr = es.expression;
  let templateStr = '';
  const otherProps = [];

  for (const prop of objExpr.properties) {
    if (
      prop.type === 'ObjectProperty' &&
      prop.key &&
      ((prop.key.type === 'Identifier' && prop.key.name === 'template') ||
       (prop.key.type === 'StringLiteral' && prop.key.value === 'template'))
    ) {
      templateStr = extractTemplateString(prop.value, wrapped);
    } else {
      otherProps.push(prop);
    }
  }

  if (!templateStr) {
    throw new Error('未找到 template 字段');
  }

  const usedThsComponents = extractThsComponentsFromTemplate(templateStr);
  const thsImports = buildThsImportInfo(usedThsComponents);
  const formattedTemplate = formatTemplateHtml(templateStr);

  let scriptObjectCode = reassembleObject(otherProps, wrapped, thsImports.componentEntries);
  scriptObjectCode = fixEsmStrictModeIssues(scriptObjectCode);

  const importBlock = buildImportBlockForVue(rawContent, dirName, thsImports.statement);

  const safeImportBlock = escapeScriptCloseTags(importBlock);
  const safeScriptObjectCode = escapeScriptCloseTags(scriptObjectCode);

  const scriptBlock =
`<script>
${safeImportBlock}
export default ${safeScriptObjectCode}
</script>`;

  const templateBlock =
`<template>
${indent(formattedTemplate, '  ')}
</template>`;

  const { scoped: scopedCss, keyframes: keyframesCss } = extractKeyframesFromCss(cssContent.trim());

  const styleBlock = scopedCss
    ? `<style scoped>\n${scopedCss}\n</style>\n`
    : '';
  const keyframeBlock = keyframesCss
    ? `<style>\n${keyframesCss}\n</style>\n`
    : '';

  return `${templateBlock}\n\n${scriptBlock}\n\n${styleBlock}${keyframeBlock ? '\n' + keyframeBlock : ''}`;
}

// ============================================================
// 格式 2：编译后格式 — IIFE 内 componentOptions + render + window.xxx
// ============================================================
function convertCompiled(rawContent, componentName, dirName, cssContent) {
  // 编译后格式的预清理：把 window.xxxComponent = X 改写为 var 赋值，让 AST 能解析
  // 否则 X = { ...componentOptions } 在表达式语句位置会被当成 BlockStatement，spread 报错
  let content = stripIIFEShell(rawContent);

  // window.xxxComponent = {...} → var __EXPORT_COMPONENT__ = {...}
  const windowAssignRegex = new RegExp(`window\\.${escapeRegExp(componentName)}\\s*=\\s*`, 'g');
  content = content.replace(windowAssignRegex, 'var __EXPORT_COMPONENT__ = ');
  // window['xxxComponent'] = / window[`xxxComponent`] = 也兼容（loadComponent 兜底里有）
  const windowBracketRegex = new RegExp(
    `window\\[\\s*[\`'\"]${escapeRegExp(componentName)}[\`'\"]\\s*\\]\\s*=\\s*`,
    'g'
  );
  content = content.replace(windowBracketRegex, 'var __EXPORT_COMPONENT__ = ');

  content = stripVuePrefix(content);
  content = content.replace(/\bwindow\.ComponentLoader\b/g, 'ComponentLoader');

  // ---- AST 解析整个内容（多条语句）----
  let ast;
  try {
    ast = babelParser.parse(content, {
      sourceType: 'module',
      plugins: ['objectRestSpread'],
    });
  } catch (e) {
    throw new Error(`编译后组件 AST 解析失败: ${e.message}`);
  }

  // 遍历顶层节点，分类收集
  const moduleScopeAssignments = [];  // const / let / var / function 声明
  for (const node of ast.program.body) {
    if (node.type === 'VariableDeclaration' || node.type === 'FunctionDeclaration') {
      moduleScopeAssignments.push(node);
    }
    // ExpressionStatement（'use strict' 等）忽略
  }

  // ---- 提取 componentOptions 源码 ----
  let componentOptionsSource = null;
  for (const stmt of moduleScopeAssignments) {
    if (stmt.type === 'VariableDeclaration') {
      for (const decl of stmt.declarations) {
        if (decl.id && decl.id.type === 'Identifier' && decl.id.name === 'componentOptions' && decl.init) {
          componentOptionsSource = content.substring(decl.init.start, decl.init.end);
        }
      }
    }
  }
  if (!componentOptionsSource) {
    throw new Error('未找到 componentOptions 对象');
  }

  // ---- 提取 render 函数源码 ----
  let renderSource = null;
  for (const stmt of moduleScopeAssignments) {
    if (stmt.type === 'FunctionDeclaration' && stmt.id && stmt.id.name === 'render') {
      renderSource = content.substring(stmt.start, stmt.end);
    }
  }

  // ---- 收集其余顶层声明（_hoisted_x 常量、loadComponent 函数等）----
  // 跳过：
  //   - componentOptions / render：会合并进 export default
  //   - __EXPORT_COMPONENT__：window 赋值的占位变量，已无用
  //   - loadComponent：每个编译后组件都自带一份，但 ths-design 的 ComponentLoader 全局可用，
  //     这份只是兜底辅助函数，转换后无意义，删掉避免污染模块作用域
  const SKIP_NAMES = new Set(['componentOptions', 'render', '__EXPORT_COMPONENT__', 'loadComponent']);
  const extraTopScope = [];
  for (const stmt of moduleScopeAssignments) {
    const src = content.substring(stmt.start, stmt.end);
    if (stmt.type === 'VariableDeclaration') {
      // 检查是否所有声明都在 SKIP_NAMES 里
      const allSkip = stmt.declarations.every(d =>
        d.id && d.id.type === 'Identifier' && SKIP_NAMES.has(d.id.name)
      );
      if (allSkip) continue;
      extraTopScope.push(src);
    } else if (stmt.type === 'FunctionDeclaration' && stmt.id) {
      if (SKIP_NAMES.has(stmt.id.name)) continue;
      extraTopScope.push(src);
    }
  }

  // ---- 合并 componentOptions 和 render 成 export default ----
  // componentOptions: { setup() {...} } → 取出内部
  // 注意：里面可能有尾逗号 `setup() {...},`，剥外层 {} 之后要把尾逗号去掉，
  // 否则跟下面 `, render` 拼接会变成 `,, render`，语法错误
  const componentOptsBody = componentOptionsSource
    .replace(/^\s*\{/, '')
    .replace(/\}\s*$/, '')
    .replace(/,\s*$/, '')   // 去掉尾逗号
    .trim();
  let exportSrc = `{\n${componentOptsBody}`;
  if (renderSource) {
    // 在 render 外层包一个 wrapper <div class="WRAPPER_CLASS"> 实现 CSS 命名空间隔离。
    //
    // 背景：编译后组件的 CSS 大量重写 element-plus 子组件内部的类
    // （.el-table、.el-dialog__title 等），而 Vue scoped 无法穿透子组件，
    // 导致 scoped 模式下这些样式整体失效。
    //
    // 方案：
    //   1. 把原 render 返回的 VNode 包在一个 <div class="lxt-c-XXX"> 里
    //   2. CSS 所有顶层选择器加 .lxt-c-XXX 前缀（见 prefixCssWithWrapper）
    // 这样既不污染全局，又能命中子组件内部的类。
    const wrapperClass = wrapperClassName(dirName);
    const wrappedRenderSource = wrapRenderWithDiv(renderSource, wrapperClass);
    // function render(...) {...} → render: function render(...) {...}
    const renderProp = wrappedRenderSource.replace(/^function\s+/, '');
    exportSrc += `,\n  ${renderProp}`;
  }
  exportSrc += '\n}';

  // ---- 构建 import 块 ----
  const renderApis = detectRenderApis(content);
  const setupApis = detectSetupApis(componentOptionsSource);
  // wrapper 用 h() 创建，加入 vue API
  const allVueApis = [...new Set([...setupApis, ...renderApis, 'h'])];
  const importBlock = buildImportBlockForCompiled(dirName, content, allVueApis);

  // ---- ESM 严格模式修复 ----
  exportSrc = fixEsmStrictModeIssues(exportSrc);
  const topScopeSrc = extraTopScope.map(s => fixEsmStrictModeIssues(s));
  const safeImportBlock = escapeScriptCloseTags(importBlock);
  const safeExportSrc = escapeScriptCloseTags(exportSrc);

  // ---- 拼装 .vue ----
  const scriptParts = [`<script>`, safeImportBlock];
  if (topScopeSrc.length) {
    scriptParts.push(topScopeSrc.join('\n\n'));
  }
  scriptParts.push(`export default ${safeExportSrc}`);
  scriptParts.push(`</script>`);

  // 用 component-specific 的 wrapper class 实现样式隔离。
  //
  // 编译后组件用 wrapper 方案：
  //   - render 顶层包了 <div class="lxt-c-XXX">（见上面 wrapRenderWithDiv）
  //   - CSS 所有顶层选择器加 .lxt-c-XXX 前缀（prefixCssWithWrapper）
  // 不用 <style scoped>，因为 scoped 无法穿透到 element-plus 子组件内部
  // （编译后组件的 CSS 几乎全是重写 .el-table / .el-dialog__title 等子组件类）。
  // 用 wrapper class 既能让 CSS 命中子组件内部，又能避免污染全局。
  const wrapperClass = wrapperClassName(dirName);
  const styleBlock = cssContent.trim()
    ? `<style>\n${prefixCssWithWrapper(cssContent.trim(), wrapperClass)}\n</style>\n`
    : '';

  return `${scriptParts.join('\n')}\n\n${styleBlock}`;
}

// ============================================================
// 预清理：标准格式的去注释、去 IIFE、去 window.xxx 赋值、去 Vue. 前缀
// ============================================================
function preCleanStandard(rawContent, componentName) {
  let content = stripIIFEShell(rawContent);

  // 去 window.xxxComponent =  —— 标准格式去掉后只剩 `{...}` 纯对象
  const windowAssignRegex = new RegExp(`window\\.${escapeRegExp(componentName)}\\s*=\\s*`, 'g');
  content = content.replace(windowAssignRegex, '');

  // 去 Vue. 前缀
  content = stripVuePrefix(content);
  content = content.replace(/\bwindow\.ComponentLoader\b/g, 'ComponentLoader');

  content = content.trim();
  if (content.endsWith(';')) content = content.slice(0, -1);

  return content;
}

// ============================================================
// 工具函数
// ============================================================

function detectRenderApis(code) {
  return VUE_RENDER_APIS.filter(api => new RegExp(`\\b${api}\\b`).test(code));
}

function detectSetupApis(code) {
  return VUE_SETUP_APIS.filter(api => new RegExp(`\\b${api}\\b`).test(code));
}

/**
 * 为编译后组件构建 import 块。
 * 使用精准检测：只 import 实际用到的 Vue API。
 * utils/theme/echarts 等按需引用。
 */
function buildImportBlockForCompiled(dirName, originalCode, vueApis) {
  // 去掉 useRoute（它是 vue-router 的，不是 vue 的）
  const cleanVueApis = vueApis.filter(api => api !== 'useRoute');
  const vueApisStr = [...new Set(cleanVueApis)].sort().join(', ');

  let block = `import { ${vueApisStr} } from 'vue';\n`;

  // 仅在源码里出现 useRoute 时才导入
  if (/\buseRoute\b/.test(originalCode)) {
    block += `import { useRoute } from 'vue-router';\n`;
  }

  // 检测是否用了 http 或 axios
  if (/\baxios\b/.test(originalCode) || /\bhttp\b/.test(originalCode)) {
    block += `import http from '@/http.js';\n`;
  }

  // 检测是否用了 utils.js 的任一导出 —— 名单维护在 constants.UTILS_EXPORTED_NAMES，
  // 这里直接基于该名单构造检测正则与 import 语句，避免硬编码漂移
  const utilsImport = buildUtilsImportLine(originalCode);
  if (utilsImport) block += utilsImport;

  if (/\bthemes\b/.test(originalCode)) {
    block += `import { themes } from '@/theme.js';\n`;
  }

  if (/\becharts\b/.test(originalCode)) {
    block += `import * as echarts from 'echarts';\n`;
  }

  if (/\buseChildBridge\b/.test(originalCode)) {
    block += `import { useChildBridge } from '@/bridge.js';\n`;
  }

  if (/\b_\./.test(originalCode)) {
    block += `import _ from 'lodash';\n`;
  }

  if (/\bmoment\s*\(/.test(originalCode) || /\bmoment\./.test(originalCode)) {
    block += `import moment from 'moment';\n`;
  }

  if (/\bio\s*\(/.test(originalCode)) {
    block += `import io from 'socket.io-client';\n`;
  }

  return block;
}

/**
 * 从 AST 节点中提取 template 的完整字符串值
 */
function extractTemplateString(node, sourceCode) {
  if (!node) return '';

  if (node.type === 'StringLiteral') {
    return node.value;
  }
  if (node.type === 'TemplateLiteral') {
    if (node.expressions && node.expressions.length === 0) {
      return node.quasis.map(q => q.value.cooked).join('');
    }
    let result = '';
    node.quasis.forEach((q, i) => {
      result += q.value.cooked;
      if (i < node.expressions.length) {
        const exprStart = node.expressions[i].start;
        const exprEnd = node.expressions[i].end;
        result += '${' + sourceCode.substring(exprStart, exprEnd) + '}';
      }
    });
    return result;
  }
  if (node.type === 'BinaryExpression' && node.operator === '+') {
    return extractTemplateString(node.left, sourceCode) +
           extractTemplateString(node.right, sourceCode);
  }
  const raw = sourceCode.substring(node.start, node.end);
  return raw.replace(/^[`'"]/, '').replace(/[`'"]$/, '');
}

/**
 * 重建对象字面量代码（标准格式用）
 */
function reassembleObject(otherProps, sourceCode, componentEntries) {
  const parts = [];
  for (const prop of otherProps) {
    const segment = sourceCode.substring(prop.start, prop.end);
    parts.push(segment);
  }

  if (componentEntries && componentEntries.length > 0) {
    const existingComponentsIdx = otherProps.findIndex(p =>
      p.type === 'ObjectProperty' && p.key &&
      ((p.key.type === 'Identifier' && p.key.name === 'components') ||
       (p.key.type === 'StringLiteral' && p.key.value === 'components'))
    );
    if (existingComponentsIdx >= 0) {
      const existing = parts[existingComponentsIdx];
      const merged = mergeComponentsBlock(existing, componentEntries);
      parts[existingComponentsIdx] = merged;
    } else {
      const block =
        'components: {\n' +
        componentEntries.map(n => `    ${n},`).join('\n') +
        '\n  }';
      parts.unshift(block);
    }
  }

  if (parts.length === 0) return '{}';
  return '{\n  ' + parts.join(',\n  ') + ',\n}';
}

/**
 * 合并 ths 组件到已有的 components 块字符串中
 */
function mergeComponentsBlock(existingSegment, newEntries) {
  const openBraceIdx = existingSegment.indexOf('{');
  const closeBraceIdx = existingSegment.lastIndexOf('}');
  if (openBraceIdx === -1 || closeBraceIdx === -1) return existingSegment;

  const inner = existingSegment.substring(openBraceIdx + 1, closeBraceIdx).trim();
  const existingNames = new Set(
    inner
      .split(/[,\n]/)
      .map(s => s.trim().replace(/:.*$/, '').trim())
      .filter(Boolean)
  );

  const additions = newEntries.filter(n => !existingNames.has(n));
  if (additions.length === 0) return existingSegment;

  const additionLines = additions.map(n => `    ${n},`).join('\n');
  const newInner = inner
    ? `\n${additionLines}\n    ${inner}${inner.endsWith(',') ? '' : ','}\n  `
    : `\n${additionLines}\n  `;

  return 'components: {' + newInner + '}';
}

/**
 * 用 prettier 格式化 HTML 模板
 */
function formatTemplateHtml(template) {
  try {
    const formatted = prettier.format(template, {
      parser: 'html',
      printWidth: 120,
      htmlWhitespaceSensitivity: 'ignore',
      tabWidth: 2,
    });
    return formatted.trimEnd();
  } catch (e) {
    return template.trim();
  }
}

/**
 * 检测代码中实际用到的 utils.js 导出名，生成 `import { ... } from '@/utils.js';` 行；
 * 一个都没用就返回空串。
 *
 * 名单单一来源：constants.UTILS_EXPORTED_NAMES。新加 utils 工具只改 constants，
 * 不必同时改 step3 的 fixCustomVue / step4 / 这里三处。
 */
function buildUtilsImportLine(code) {
  const used = UTILS_EXPORTED_NAMES.filter(
    name => new RegExp(`\\b${name}\\b`).test(code)
  );
  if (used.length === 0) return '';
  return `import { ${used.join(', ')} } from '@/utils.js';\n`;
}

/**
 * 构建标准格式组件的 import 块
 *
 * 标准格式来自平台的低代码模板，一律默认全量 import 常用 Vue API + 平台必备工具，
 * 多余 import 会被 Vite tree-shaking 掉，不影响产物体积，但能避免「组件里写了
 * computed 却没引入」的低级运行错误。
 */
function buildImportBlockForVue(originalContent, dirName, thsImportStatement) {
  const vueApisStr = [...new Set(VUE_DEFAULT_IMPORT_APIS)].sort().join(', ');
  const utilsImport = buildUtilsImportLine(originalContent)
    // 标准格式默认全量引入；即使代码里没用也保留，避免漏引导致运行报错
    || `import { ${UTILS_EXPORTED_NAMES.join(', ')} } from '@/utils.js';\n`;

  let importBlock =
`import { ${vueApisStr} } from 'vue';
import { useRoute } from 'vue-router';
import http from '@/http.js';
${utilsImport}import { themes } from '@/theme.js';
import * as echarts from 'echarts';
`;

  const extraImports = [];

  if (/\bfetchEventSource\s*\(/.test(originalContent)) {
    extraImports.push(`import { fetchEventSource } from '@microsoft/fetch-event-source';`);
  }
  if (/\bio\s*\(/.test(originalContent) || /\bsocket\.io\b/.test(originalContent)) {
    extraImports.push(`import io from 'socket.io-client';`);
  }
  if (/\bmoment\s*\(/.test(originalContent) || /\bmoment\./.test(originalContent)) {
    extraImports.push(`import moment from 'moment';`);
  }
  if (/\bmitt\s*\(/.test(originalContent)) {
    extraImports.push(`import mitt from 'mitt';`);
  }
  if (/\b_\./.test(originalContent)) {
    extraImports.push(`import _ from 'lodash';`);
  }
  if (/\buseChildBridge\b/.test(originalContent)) {
    extraImports.push(`import { useChildBridge } from '@/bridge.js';`);
  }

  if (extraImports.length) {
    importBlock = extraImports.join('\n') + '\n' + importBlock;
  }

  if (thsImportStatement) {
    importBlock += thsImportStatement + '\n';
  }

  return importBlock;
}

/**
 * 剥离源代码中 `Vue.xxx` 形式的前缀（白名单见 constants.VUE_PREFIX_APIS），
 * 让它变成无前缀的 `xxx`，再由顶部 import 语句提供绑定。
 */
function stripVuePrefix(content) {
  const pattern = new RegExp(`Vue\\.(${VUE_PREFIX_APIS.join('|')})\\b`, 'g');
  return content.replace(pattern, '$1');
}

// ============================================================
// 编译后组件的 wrapper class 工具
// ============================================================

/**
 * 由组件目录名生成 wrapper class 名。
 * 用 `t-l-c-` 前缀 + 原始目录名（保留驼峰），与标准组件页面的根 class 命名完全一致。
 * 例如 previewImg → t-l-c-previewImg、yhbzInspectionsituationTable → t-l-c-yhbzInspectionsituationTable。
 */
function wrapperClassName(dirName) {
  return `t-l-c-${dirName}`;
}

/**
 * 把 render 函数的返回值包一层 <div class="WRAPPER_CLASS">。
 *
 * 原 render：
 *   function render(_ctx, _cache) {
 *     ...declarations...
 *     return ( openBlock(), createElementBlock(...) );
 *   }
 *
 * 改写后：
 *   function render(_ctx, _cache) {
 *     ...declarations...
 *     return h('div', { class: 'WRAPPER_CLASS' }, [
 *       ( openBlock(), createElementBlock(...) )
 *     ]);
 *   }
 *
 * 用 h() 而不是 createElementBlock，因为 h() 是 Vue 公开 API，最稳定；
 * createElementBlock 是编译输出用的，有 patch flag 等额外语义。
 */
function wrapRenderWithDiv(renderSource, wrapperClass) {
  // render 函数内可能有多个 return（条件分支），需要对每一条带 argument 的
  // ReturnStatement 都包装一层 <div>，确保所有分支都有 wrapper class。
  // 从后往前处理，避免前面的偏移影响后面。
  let ast;
  try {
    ast = babelParser.parse(`(${renderSource})`, { sourceType: 'module' });
  } catch (e) {
    // 解析失败就放弃 wrapper，保留原 render（CSS 不带前缀，回到全局）
    return renderSource;
  }

  // ast.program.body[0] 是 ExpressionStatement(FunctionExpression)
  // FunctionExpression.body 是 BlockStatement
  const fnExpr = ast.program.body[0]?.expression;
  if (!fnExpr || fnExpr.type !== 'FunctionExpression') return renderSource;
  const body = fnExpr.body;
  if (!body || body.type !== 'BlockStatement') return renderSource;

  // 收集所有有 argument 的 ReturnStatement（按源码位置从后往前排序）
  const returnStmts = [];
  for (let i = body.body.length - 1; i >= 0; i--) {
    if (body.body[i].type === 'ReturnStatement' && body.body[i].argument) {
      returnStmts.push(body.body[i]);
    }
  }
  if (returnStmts.length === 0) return renderSource;

  // 从后往前逐条替换（后改的不影响前面未改位置的偏移）
  let result = renderSource;
  for (const stmt of returnStmts) {
    // 注意 babel 的 start/end 是基于 `(${renderSource})`，要减 1
    const argStart = stmt.argument.start - 1;
    const argEnd = stmt.argument.end - 1;
    const argSource = result.substring(argStart, argEnd);
    const before = result.substring(0, argStart);
    const after = result.substring(argEnd);
    result = before + `h('div', { class: '${wrapperClass}' }, [${argSource}])` + after;
  }

  return result;
}

/**
 * 按逗号分割 CSS 选择器列表，忽略括号内的逗号。
 * e.g. ":is(.a, .b), .c .d" → [":is(.a, .b)", ".c .d"]
 */
function splitSelectorList(selector) {
  const parts = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < selector.length; i++) {
    const ch = selector[i];
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    else if (ch === ',' && depth === 0) {
      parts.push(selector.substring(start, i));
      start = i + 1;
    }
  }
  parts.push(selector.substring(start));
  return parts;
}

/**
 * 从 CSS 中分离 @keyframes 规则。
 *
 * Vue 3 的 <style scoped> 通过 PostCSS 给所有选择器追加 [data-v-xxx] 属性选择器，
 * 某些 PostCSS 版本会错误地把 @keyframes 规则名也加上后缀，变成非法语法：
 *   @keyframes foo[data-v-xxx] { ... }
 * 浏览器解析到后会直接丢弃整条规则，导致动画失效。
 *
 * 解决方案：把 @keyframes 从 scoped 块中抽出来，放到独立的不带 scoped 的 <style> 中。
 *
 * @param {string} css 原始 CSS 文本
 * @returns {{ scoped: string, keyframes: string }}
 */
function extractKeyframesFromCss(css) {
  if (!css) return { scoped: '', keyframes: '' };

  const keyframeBlocks = [];
  const scopedParts = [];
  let i = 0;

  while (i < css.length) {
    const remaining = css.substring(i);

    // 匹配 @keyframes / @-webkit-keyframes / @-moz-keyframes 等
    if (/^@(?:-\w+-)?keyframes\s/.test(remaining)) {
      // 用括号深度找到匹配的闭合 }
      let depth = 0;
      let j = i;
      let foundBrace = false;
      while (j < css.length) {
        if (css[j] === '{') {
          depth++;
          foundBrace = true;
        } else if (css[j] === '}') {
          depth--;
          if (foundBrace && depth === 0) {
            j++;
            break;
          }
        }
        j++;
      }
      const block = css.substring(i, j);
      keyframeBlocks.push(block);
      // 在 scoped CSS 中用空串代替（避免残留空白 keyframe 声明头）
      scopedParts.push('');
      i = j;
    } else {
      scopedParts.push(css[i]);
      i++;
    }
  }

  // 清理连续空行
  const scopedCss = scopedParts.join('').replace(/\n{3,}/g, '\n\n').trim();
  const keyframesCss = keyframeBlocks.length > 0
    ? keyframeBlocks.join('\n\n')
    : '';

  return { scoped: scopedCss, keyframes: keyframesCss };
}

/**
 * 给 CSS 所有顶层选择器加 wrapper class 前缀，实现编译后组件的样式隔离。
 *
 * 处理规则：
 *   - 普通规则 `.foo { ... }` → `.WRAPPER .foo { ... }`
 *   - 已经以 wrapper 开头的选择器不重复加
 *   - 多选择器（逗号分隔）逐个加
 *   - `@media`、`@supports`、`@container` 内的选择器递归加
 *   - `@keyframes`、`@font-face`、`@charset`、`@import` 内不加（没有元素选择器）
 *   - 块注释保留原样
 */
function prefixCssWithWrapper(css, wrapperClass) {
  const prefix = '.' + wrapperClass;
  return doPrefix(css, prefix);
}

function doPrefix(css, prefix) {
  let out = '';
  let i = 0;
  let buffer = '';
  let braceDepth = 0;

  while (i < css.length) {
    const c = css[i];

    // Block comment — 整段透传
    if (c === '/' && css[i + 1] === '*') {
      out += buffer; buffer = '';
      const end = css.indexOf('*/', i + 2);
      const stop = end === -1 ? css.length : end + 2;
      out += css.substring(i, stop);
      i = stop;
      continue;
    }

    // @-rule
    if (braceDepth === 0 && c === '@' && !buffer.trim()) {
      const m = css.substring(i).match(/^@([\w-]+)/);
      if (m) {
        const atName = m[1];
        // 这些 @-rule 内部含选择器，需要递归处理
        const NESTED = new Set(['media', 'supports', 'container']);
        // 找匹配的 }
        let bdepth = 0, j = i;
        let foundBrace = false;
        while (j < css.length) {
          if (css[j] === '{') { bdepth++; foundBrace = true; }
          else if (css[j] === '}') {
            bdepth--;
            if (bdepth === 0) break;
          } else if (!foundBrace && css[j] === ';') {
            // @import / @charset 这种不带 block 的，遇到 ; 就结束
            j++; break;
          }
          j++;
        }
        const stop = foundBrace ? j + 1 : j;
        const atBlock = css.substring(i, stop);
        if (foundBrace && NESTED.has(atName)) {
          const openIdx = atBlock.indexOf('{');
          const head = atBlock.substring(0, openIdx + 1);
          const body = atBlock.substring(openIdx + 1, atBlock.length - 1);
          out += head + doPrefix(body, prefix) + '}';
        } else {
          // @keyframes / @font-face / @import 等：原样透传
          out += atBlock;
        }
        i = stop;
        continue;
      }
    }

    if (c === '{') {
      braceDepth++;
      const sel = buffer.trim();
      if (sel) {
        const prefixed = splitSelectorList(sel)
          .map(s => {
            const t = s.trim();
            if (!t) return t;
            // 已经带前缀（包括嵌套写法 `.WRAPPER .x`、`.WRAPPER.x` 等）就不再加
            if (t === prefix || t.startsWith(prefix + ' ') || t.startsWith(prefix + '.') ||
                t.startsWith(prefix + ':') || t.startsWith(prefix + '[')) {
              return t;
            }
            return `${prefix} ${t}`;
          })
          .join(',\n');
        const leadingWs = buffer.match(/^(\s*)/)[1];
        out += leadingWs + prefixed + ' ';
      } else {
        out += buffer;
      }
      buffer = '';
      out += '{';
      i++;
      continue;
    }

    if (c === '}') {
      braceDepth--;
      out += buffer + '}';
      buffer = '';
      i++;
      continue;
    }

    if (braceDepth === 0) {
      buffer += c;
    } else {
      out += c;
    }
    i++;
  }
  out += buffer;
  return out;
}

module.exports = {
  jsToVue,
  setDeps,
  extractKeyframesFromCss,
};