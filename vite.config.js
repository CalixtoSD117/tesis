import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
    // Serve all scripts over HTTPS
    devServer: {
      https: true,
    },
    cors: {
      origin: '*',
    }
  })],
});