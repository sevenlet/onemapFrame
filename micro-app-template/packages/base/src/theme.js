/**
 * 主题占位（原项目此文件为空）
 *
 * 微应用模板基座不绑定具体主题，仅提供空数组占位，避免 utils.js 中
 * `import { themes } from './theme.js'` 报错。
 * 如需自定义主题，可在此处导出 themes 数组。
 */
export const themes = [
  {
    name: 'default',
    label: '默认主题',
    chartVariables: {
      backgroundColor: 'transparent',
      color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de'],
      title: {},
      legend: {},
      tooltip: {},
      categoryAxis: {},
      valueAxis: {},
    },
  },
];