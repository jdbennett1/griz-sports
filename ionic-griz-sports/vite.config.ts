/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Replace with your Spring Boot server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8', // we can use 'c8' if  it's needed
      reporter: ['text', 'lcov'],
      reportsDirectory: 'coverage',
    },
  },
  optimizeDeps: {
    include: ['json-loader']
  }
})
