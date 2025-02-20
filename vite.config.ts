import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,                      
    port: Number(process.env.PORT) || 5173
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 5173,
    allowedHosts: ['stream-management.onrender.com']
  }
})
