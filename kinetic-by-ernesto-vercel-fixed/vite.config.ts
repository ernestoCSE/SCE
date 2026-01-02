import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // CRUCIAL: Asegura que todas las rutas de assets sean relativas
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})