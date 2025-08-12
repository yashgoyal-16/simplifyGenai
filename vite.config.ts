import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Spline into separate chunk - reduce size by excluding from main bundle
          'spline-runtime': ['@splinetool/runtime', '@splinetool/react-spline'],
          // Split heavy UI libraries
          'ui-libs': ['framer-motion', 'embla-carousel-react'],
          // Split React and core dependencies
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Split chart and data visualization
          'charts': ['recharts'],
          // Split form libraries
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
        }
      }
    },
    // Reduce chunk size warning limit to force smaller bundles
    chunkSizeWarningLimit: 500,
    // Enable gzip compression simulation
    reportCompressedSize: true,
    // Minify for production - balanced optimization
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        dead_code: true,
        unused: true
      },
      mangle: {
        safari10: true
      }
    }
  },
  // Performance optimizations
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@radix-ui/react-slot',
      'clsx',
      'tailwind-merge'
    ],
    exclude: ['@splinetool/runtime', '@splinetool/react-spline']
  }
}));
