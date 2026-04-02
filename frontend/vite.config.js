import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  optimizeDeps: {
    // onnxruntime-web ships pre-bundled WASM files—do not let Vite try to
    // re-bundle them; it would break the relative WASM path resolution.
    exclude: ['onnxruntime-web'],
  },
})
