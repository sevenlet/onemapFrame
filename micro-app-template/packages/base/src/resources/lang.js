/**
 * i18n 消息（模板版）
 *
 * 原项目用法：messages = { 'zh-cn': i18nMessages } 中 i18nMessages 是一个对象，
 * 但实际上原 lang.js 直接 default export 一个普通对象。为了让 i18n 多语言 key
 * 都能正常解析，这里包一层语言 key。
 */
export default {
  'zh-cn': {
    name: '中文',
    text: {
      text: '双击编辑文本',
    },
  },
};