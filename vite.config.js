import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 1896,
    open: true,
  },
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "./node_modules/bootstrap"),
    },
  },
});

