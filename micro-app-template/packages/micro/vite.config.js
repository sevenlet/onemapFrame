import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5175,
    host: '0.0.0.0',
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/sksk-service': {
        target: 'https://120.35.30.208:10064',
        changeOrigin: true,
        secure: false,
        rewrite: (requestPath) => requestPath.replace(/^\/sksk-service/, ''),
      },

      '/lxt-zhcx-pro/': {
        target: 'https://120.35.30.208:10064/lxt-zhcx-pro/',
        changeOrigin: true,
        secure: false,
        rewrite: (requestPath) => requestPath.replace(/^\/lxt-zhcx-pro\//, ''),
      },
    },
  },
  // 生产构建用相对路径，方便上传到总集任意子目录
  base: process.env.NODE_ENV === 'production' ? './' : '/',
});
