import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    tailwindcss(),
  ],
  server: {
    host: true,
    port: 3001,
    watch: {
      usePolling: true,
    }
  },
  build: {
    rollupOptions: {
      input: ['index.html', '404.html'],
      output: {
        manualChunks: undefined,
      },
    },
    ssr: false,
  },
  base: '/calculadoras/',
})
