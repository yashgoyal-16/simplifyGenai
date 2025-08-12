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
        manualChunks: (id) => {
          // Spline - largest chunk, load only when needed
          if (id.includes('@splinetool') || id.includes('SplineDemo')) {
            return 'spline-runtime';
          }
          // Heavy physics and 3D libraries
          if (id.includes('three') || id.includes('physics') || id.includes('gaussian')) {
            return 'physics';
          }
          // React vendor
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('react-router')) {
            return 'react-vendor';
          }
          // Heavy animation libraries
          if (id.includes('framer-motion') || id.includes('embla-carousel')) {
            return 'ui-libs';
          }
          // Charts
          if (id.includes('recharts') || id.includes('d3')) {
            return 'charts';
          }
          // Forms
          if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
            return 'forms';
          }
          // Radix UI components - only load what's used
          if (id.includes('@radix-ui')) {
            return 'radix-ui';
          }
          // Core utilities - keep small and cached
          if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
            return 'utils';
          }
        }
      }
    },
    // More aggressive chunk size limits
    chunkSizeWarningLimit: 400,
    reportCompressedSize: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        dead_code: true,
        unused: true,
        // More aggressive tree shaking
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        passes: 3
      },
      mangle: {
        safari10: true,
        toplevel: true
      },
      format: {
        comments: false
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
