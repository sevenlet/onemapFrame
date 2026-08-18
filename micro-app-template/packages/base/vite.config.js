import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mapConfigDir = path.resolve(
  __dirname,
  '../../../../低代码平台LeGo/lc-visual-building/public/template/3.0.0/config/map-config',
);

const mapConfigPlugin = {
  name: 'serve-map-config',
  configureServer(server) {
    server.middlewares.use('/config/map-config', async (request, response, next) => {
      const pageCode = decodeURIComponent(
        new URL(request.url || '/', 'http://localhost').pathname,
      ).replace(/^\//, '');
      if (!/^[\w.-]+\.json$/.test(pageCode)) return next();

      response.setHeader('Content-Type', 'application/json; charset=utf-8');
      try {
        response.end(await readFile(path.join(mapConfigDir, pageCode)));
      } catch (error) {
        response.statusCode = error.code === 'ENOENT' ? 404 : 500;
        response.end(
          JSON.stringify({
            error: response.statusCode === 404 ? 'Map config not found' : 'Map config read failed',
          }),
        );
      }
    });
  },
};

export default defineConfig({
  plugins: [vue(), mapConfigPlugin],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    fs: {
      allow: [
        __dirname,
        path.resolve(__dirname, '../../../../低代码平台LeGo/lc-visual-building/public/template/3.0.0'),
      ],
    },
    port: 3000,
    host: '0.0.0.0',
    proxy: {
      '/service': {
        target: 'https://120.35.30.208:10064',
        changeOrigin: true,
        secure: false,
      },
      '/apps': {
        target: 'https://120.35.30.208:10064',
        changeOrigin: true,
        secure: false,
        rewrite: (urlPath) => `/mapgo5.0${urlPath}`,
      },
      '/files': {
        target: 'https://120.35.30.208:10064',
        changeOrigin: true,
        secure: false,
        rewrite: (urlPath) => `/mapgo5.0${urlPath}`,
      },
      '/icons': {
        target: 'https://120.35.30.208:10064',
        changeOrigin: true,
        secure: false,
        rewrite: (urlPath) => `/mapgo5.0${urlPath}`,
      },
      '/mapgo5.0/api': {
        target: 'https://120.35.30.208:10064',
        changeOrigin: true,
        secure: false,
      },
      '/mapgo5.0//api': {
        target: 'https://120.35.30.208:10064',
        changeOrigin: true,
        secure: false,
      },
      '/mapgo5.0/apps': {
        target: 'https://120.35.30.208:10064',
        changeOrigin: true,
        secure: false,
      },
      '/jsons': {
        target: 'https://120.35.30.208:10064',
        changeOrigin: true,
        secure: false,
        rewrite: (urlPath) => `/mapgo5.0${urlPath}`,
      },
    },
  },
});
