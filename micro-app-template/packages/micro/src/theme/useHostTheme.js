/**
 * 跟随宿主（LEGO）主题名换肤
 *
 * 约定：
 *   - 宿主换肤后会更新 globalData.activeTheme（如「墨绿色版」「PC浅色版」）
 *   - 微应用只读主题名，不读取、不依赖宿主 CSS 变量
 *   - 样式由微应用自己维护（见 themes.css / 业务组件内的 data-theme 样式）
 *
 * 用法：
 *   import { useHostTheme } from '@/theme/useHostTheme.js'
 *   const { hostThemeName, resolvedThemeKey } = useHostTheme()
 *   // 模板：<div class="micro-theme-root" :data-theme="resolvedThemeKey">...</div>
 */
import { computed, watch } from 'vue';
import { useGlobalDataKey, useBaseBridge } from '@/bridge.js';

/**
 * 宿主主题名 → 微应用内部主题 key
 * 未命中时回落到 default，避免未知主题把样式打穿。
 */
export const HOST_THEME_TO_MICRO_KEY = {
  '墨绿色版': 'dark-green',
  '绿色版': 'green',
  '蓝色版': 'blue',
  'PC浅色版': 'pc-light',
  '默认主题': 'default',
  // 调试基座可能下发 light / dark
  light: 'pc-light',
  dark: 'dark-green',
};

const DEFAULT_MICRO_THEME_KEY = 'default';

/**
 * 把宿主下发的主题名解析成微应用内部 key
 * @param {string|null|undefined} hostThemeName
 * @returns {string}
 */
export function resolveMicroThemeKey(hostThemeName) {
  if (hostThemeName == null || hostThemeName === '') {
    return DEFAULT_MICRO_THEME_KEY;
  }
  const normalizedName = String(hostThemeName).trim();
  return HOST_THEME_TO_MICRO_KEY[normalizedName] || DEFAULT_MICRO_THEME_KEY;
}

/**
 * 订阅宿主主题名，返回响应式主题信息
 *
 * 优先级：
 *   1. globalData.activeTheme（生产 LEGO 换肤主字段）
 *   2. globalData.theme（部分页面会同步写 theme）
 *   3. baseData.theme（调试基座通道①）
 */
export function useHostTheme(options = {}) {
  const {
    // 是否把解析后的 key 写到 document.documentElement[data-theme]
    applyToDocument = false,
  } = options;

  const activeThemeFromGlobal = useGlobalDataKey('activeTheme');
  const themeFromGlobal = useGlobalDataKey('theme');
  const { baseData } = useBaseBridge();

  const hostThemeName = computed(() => {
    const directedTheme = baseData?.value?.theme;
    return (
      activeThemeFromGlobal.value ||
      themeFromGlobal.value ||
      directedTheme ||
      ''
    );
  });

  const resolvedThemeKey = computed(() => resolveMicroThemeKey(hostThemeName.value));

  if (applyToDocument && typeof document !== 'undefined') {
    watch(
      resolvedThemeKey,
      (themeKey) => {
        document.documentElement.setAttribute('data-theme', themeKey);
      },
      { immediate: true },
    );
  }

  return {
    /** 宿主原始主题名，如「墨绿色版」 */
    hostThemeName,
    /** 微应用内部主题 key，如 dark-green / pc-light */
    resolvedThemeKey,
  };
}
