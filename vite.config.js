import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Customize manualChunks based on your project's dependencies
          if (id.includes('node_modules/lodash')) {
            return 'lodash';
          }
          // Add more conditions as needed
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust this value based on your needs
  },
});
