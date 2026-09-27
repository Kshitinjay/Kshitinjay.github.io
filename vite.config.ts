import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from the root of the GitHub Pages user site: https://kshitinjay.github.io/
  base: '/',
  // Pre-bundle React and its consumers in one pass at dev startup, so a later
  // re-optimization can't serve react and react-dom from different chunks
  // ("Invalid hook call" / duplicate React).
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', 'lucide-react'],
  },
})
