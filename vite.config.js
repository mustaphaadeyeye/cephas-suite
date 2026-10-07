import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Dev-only: mimics the Vercel rewrites on localhost.
    // Every app goes INSIDE this proxy object.
    proxy: {
      '/cephas-hr': {
        target: 'https://cephas-hr-zk88.vercel.app',
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.startsWith('/cephas-hr/assets') ? path.replace('/cephas-hr', '') : '/',
      },
      '/ceproam': {
        target: 'https://ceproam-website.vercel.app',
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.startsWith('/ceproam/assets') ? path.replace('/ceproam', '') : '/',
      },
      '/agrolink': {
        target: 'https://agrolink-phi-seven.vercel.app',
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.startsWith('/agrolink/assets') ? path.replace('/agrolink', '') : '/index.html',
      },
    },
  },
})