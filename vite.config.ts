import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 4000,
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
  server: {
    host: true,
  },
});
