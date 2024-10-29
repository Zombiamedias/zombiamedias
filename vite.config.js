import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({

  plugins: [react()],

  base: 'https://zombiamedias.github.io/zombiamedias', // Esto es importante para rutas relativas
  build:{
    outDir:'dist  ',
  }
})