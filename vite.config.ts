import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/projects-presentation/',
  server: {
    open: '/projects-presentation/',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        $base-path: '/projects-presentation/';
        @use '/src/styles/variables.scss' as *;`,
      },
    },
  },
});
