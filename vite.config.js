import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/cephas-hr': {
        target: 'https://cephas-hr-zk88.vercel.app',
        changeOrigin: true,
        secure: true,
        // /cephas-hr/assets/x -> /assets/x, everything else -> the HR index page
        rewrite: (path) =>
          path.startsWith('/cephas-hr/assets') ? path.replace('/cephas-hr', '') : '/',
      },
    },
  },
})