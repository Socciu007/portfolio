import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable source maps for production
    chunkSizeWarningLimit: 600, // Increase the limit for the chunk size warning
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['react-router-dom']
        }
      }
    },
    minify: 'terser', // Minify the code
    terserOptions: {
      compress: {
        drop_console: true, // Drop console.log
        drop_debugger: true, // Drop debugger
        ecma: 2020 // Optimize the code for the ECMAScript standard
      }
    },
    cssCodeSplit: true, // Split the CSS code
    target: 'esnext' // Target the latest ECMAScript standard
  },
  optimizeDeps: {
    include: [] // Pre-bundle the package
  },
  server: {
    port: 6767,
    host: true,
    open: true
  }
})
