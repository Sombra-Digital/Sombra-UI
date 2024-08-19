import { defineConfig } from "vite";
import { resolve } from "path";
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(), cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: true,
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'SombraUI',
      formats: ["es", "cjs", "umd"],
      fileName: 'sombra-ui',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      }
    }
  },
})
