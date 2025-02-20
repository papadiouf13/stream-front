import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 10000, 
    allowedHosts: ['stream-front-h5re.onrender.com']
  }
})
