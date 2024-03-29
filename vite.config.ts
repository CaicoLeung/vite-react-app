import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: true,
  },
  server: {
    host: true,
  },
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
  ],
  optimizeDeps: {
    force: true
  }
})
