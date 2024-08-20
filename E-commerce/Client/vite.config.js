import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":"https://mern-server-rohit.vercel.app/",
      "/user":"https://mern-server-rohit.vercel.app/"
    }
  },
  plugins: [react()],

})
