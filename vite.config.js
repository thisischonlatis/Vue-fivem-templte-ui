import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const isDev = process.env.NODE_ENV !== 'production';

// https://vite.dev/config/
export default defineConfig({
    base: isDev ? '/' : './',
    build: {
        sourcemap: false, // Disable source maps in production
        outDir: 'dist',
        rollupOptions: {
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: undefined, // Disable chunk splitting
                assetFileNames: '[ext]/[name].[ext]',
            },
            manualChunks: undefined, // Prevent code splitting
        },
    },
    plugins: [
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
