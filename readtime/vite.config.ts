import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Define the configuration in TypeScript
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Entry for popup or main app
        content: resolve(__dirname, 'src/contentScript.ts') // Entry for content script
      },
      output: {
        entryFileNames: (chunk) => (chunk.name === 'content' ? 'src/[name].js' : '[name].js'),
      }
    }
  }
});
