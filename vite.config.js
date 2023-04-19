import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import externalGlobals from 'rollup-plugin-external-globals'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['BMap'],
      plugins: [
        externalGlobals({
          // 将BMap全局暴露
          BMap: 'BMap',
        }),
      ],
    }
  },
})
