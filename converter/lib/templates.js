/**
 * templates/ 目录读取器。
 *
 * 用法：
 *   readTemplate('bridge.js')                       // 原样返回内容
 *   readTemplate('index.html', { title: '我的应用' }) // 替换 {{title}} 占位符
 *
 * 占位符规则：{{key}} → vars[key]；未提供 vars 时不做替换。
 *
 * 模板目录固定为「项目根目录/templates」（与脚本同级，不在 lib 下）。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');

function readTemplate(name, vars) {
  const tplPath = path.join(TEMPLATES_DIR, name);
  if (!fs.existsSync(tplPath)) {
    throw new Error(`模板文件不存在: ${tplPath}`);
  }
  let content = fs.readFileSync(tplPath, 'utf-8');
  if (vars && typeof vars === 'object') {
    content = content.replace(/\{\{(\w+)\}\}/g, (m, key) => {
      return Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : m;
    });
  }
  return content;
}

module.exports = { readTemplate, TEMPLATES_DIR };
