import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  server:{
    proxy:{
      "/api":"http://localhost:8000",
      "/user":"http://localhost:8000"
    }
  },
  plugins: [react()],

})
