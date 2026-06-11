import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {},
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'element-plus': ['element-plus'],
          'vue-vendor': ['vue', 'vue-router'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 4000,
    // 代理配置示例（根据需要启用）
    // proxy: {
    //   '/mapgo5.0': {
    //     target: 'http://192.168.0.202:7777',
    //     changeOrigin: true,
    //   }
    // }
  },
});
