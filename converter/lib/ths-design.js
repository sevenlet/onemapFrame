/**
 * ths-design 组件相关工具：扫描 template 中的 <t-xxx> 标签，
 * 根据 COMPONENT_NAME_MAP 生成对应的 import 语句和 components 注册条目。
 *
 * 同时被 jsToVue（普通组件转换）和 fixCustomVue（自定义编码组件）使用。
 */
'use strict';

const { COMPONENT_NAME_MAP } = require('./constants.js');

/**
 * 扫描 template 中所有 <t-xxx> 标签，返回去重的 kebab-case 名字数组。
 */
function extractThsComponentsFromTemplate(template) {
  const set = new Set();
  const regex = /<t-([a-z0-9-]+)/g;
  let m;
  while ((m = regex.exec(template)) !== null) {
    set.add('t-' + m[1]);
  }
  return Array.from(set);
}

/**
 * 根据使用的 ths 组件构建 import 语句和 components 条目。
 *
 * 返回 { statement, componentEntries }：
 *   - statement: `import { TRect, TText } from '@ths/design';` 或空串
 *   - componentEntries: ['TRect', 'TText']（已去重 + 排序，给 components: {...} 用）
 *
 * 不在 COMPONENT_NAME_MAP 中的标签会被忽略（很可能是自定义页面组件 t-component / t-l-c-xxx）。
 */
function buildThsImportInfo(usedComponents) {
  const valid = usedComponents.filter(c => COMPONENT_NAME_MAP[c]);
  if (valid.length === 0) {
    return { statement: '', componentEntries: [] };
  }
  const names = [...new Set(valid.map(c => COMPONENT_NAME_MAP[c]))].sort();
  return {
    statement: `import { ${names.join(', ')} } from '@ths/design';`,
    componentEntries: names,
  };
}

module.exports = { extractThsComponentsFromTemplate, buildThsImportInfo };
