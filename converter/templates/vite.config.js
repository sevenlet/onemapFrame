import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// 插件①：往 index.html 顶部注入运行时屏蔽脚本（开发+生产都会执行）
function injectConsoleKiller() {
  const snippet = `<script>(function(){var n=function(){};['log','info','warn','error','debug','trace','dir','table','group','groupEnd','groupCollapsed','time','timeEnd','count','assert'].forEach(function(m){try{window.console[m]=n;}catch(e){}});})();</script>`;
  return {
    name: 'inject-console-killer',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        // 兼容 <head> 和 <head ...>
        return html.replace(/<head(\s[^>]*)?>/i, (m) => m + '\n    ' + snippet);
      },
    },
  };
}

// 插件②：源码层面把所有 console.xxx(...) 调用替换成 void 0
// 比 esbuild.drop / terser.drop_console 更彻底，且不依赖预构建缓存
function stripConsoleFromSource() {
  // 匹配 console.xxx(...) 调用（含跨行参数），不匹配字符串/注释里的，但开发场景足够用
  const re = /console\s*\.\s*(log|info|warn|error|debug|trace|dir|table|group|groupEnd|groupCollapsed|time|timeEnd|count|assert)\s*\(/g;
  return {
    name: 'strip-console-from-source',
    enforce: 'pre',
    transform(code, id) {
      // 只处理项目源码 / vue 文件，跳过 node_modules
      if (/node_modules/.test(id)) return null;
      if (!/\.(vue|js|jsx|ts|tsx|mjs|cjs)(\?.*)?$/.test(id)) return null;
      if (!re.test(code)) return null;
      re.lastIndex = 0;
      // 把 console.xxx( 替换成 (void 0,function(){}).call(null, —— 利用括号配对让原参数被吃掉
      // 更稳妥：直接替换成 (function(){})( ，保留原参数解析但不输出
      const out = code.replace(re, '(function(){})(');
      return { code: out, map: null };
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [
    // 下面两个插件平时不挂载（生产构建已通过 esbuild.drop / terserOptions.drop_console
    // 移除 console，足够日常需求）。仅当遇到「某些第三方库在运行时仍打日志」的场景，
    // 临时取消注释，强制源码层 / index.html 注入双重屏蔽。
    // injectConsoleKiller(),
    // stripConsoleFromSource(),
    vue({
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('t-'),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'vue': 'vue/dist/vue.esm-bundler.js',
    },
  },
  css: {
    preprocessorOptions: {},
    devSourcemap: false,
  },
  esbuild: { drop: ['console', 'debugger'] },
  optimizeDeps: {
    esbuildOptions: {
      drop: ['console', 'debugger'],
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.warn', 'console.error'],
        passes: 3,
      },
      format: { comments: false },
    },
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    proxy: {
      /**
       * 使用MapGo5.0的开发环境时，前端请求的 /apps/、/icons/、/files/、/jsons/ 等资源路径
       * 需要代理到 MapGo5.0 的后端服务地址（如 http://192.168.0.202:7777）
       */
      '/apps/': {
        // 这里的地址根据实际情况修改，注意：必须是 http:// 或 https:// 开头的完整地址
        target: 'http://192.168.0.202:7777',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apps/, '/mapgo5.0/apps'),
      },
      '/icons/': {
        target: 'http://192.168.0.202:7777',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/icons/, '/mapgo5.0/icons'),
      },
      '^/files/.*': {
        target: 'http://192.168.0.202:7777',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/files/, '/mapgo5.0/files'),
      },
      '/jsons/': {
        target: 'http://192.168.0.202:7777',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/jsons/, '/mapgo5.0/jsons'),
        configure: (proxy) => {
          proxy.on('proxyRes', (proxyRes) => {
            proxyRes.headers['access-control-allow-origin'] = '*';
            proxyRes.headers['access-control-allow-headers'] = 'X-Requested-With';
            proxyRes.headers['access-control-allow-methods'] = 'GET,POST,OPTIONS';
          });
        },
      },
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'element-plus', 'axios', 'mitt', 'lodash'],
    },
  },
});
